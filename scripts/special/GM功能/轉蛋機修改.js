var status = -1;
load('nashorn:mozilla_compat.js');
importPackage(java.util); //ArrayList.
importPackage(java.awt);  //Point.
importPackage(Packages.server); //OverrideMonsterStats.
var conn; 
var ps;
var rs;
var id;
var itemId;
var machineId;
var gashaponList = [];

function start() {
	if(cm.getPlayer().getJobId() != 900){
		cm.sendOk("歡迎您，普通玩家，您不是GM無法使用此功能");
		cm.dispose();
		return;
	}
    conn = cm.getConnection();
    cm.sendSimple("#L0#增加道具#l\r\n#L1#刪除道具#l\r\n#L2#修改道具機率#l\r\n#L3#修改道具是否上廣#l");
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else if (mode == 0) {
        status--;
    } else {
        cm.dispose();
        return;
    }

    switch (status) {
        case 0:
			
            id = selection;
			gashaponList = getAllGashapons();
            var text = "請選擇一個轉蛋機:\n\n\r\n";
			for(var i = 0; i < gashaponList.length; i++) {
				text += "#L" + gashaponList[i].id + "#" + gashaponList[i].name + "#l\r\n\r\n";
			}
			cm.sendSimple(text);
            break;
        case 1:
            machineId = selection;
            if (machineId == "") {
                cm.sendOk("轉蛋機編號不可為空白。");
                cm.dispose();
                return;
            }
            ps = conn.prepareStatement("SELECT * FROM gashapons WHERE id = ?");
            ps.setInt(1, machineId);
            rs = ps.executeQuery();
            if (!rs.next()) {
                cm.sendOk("沒有這個轉蛋機編號。");
                rs.close();
                ps.close();
                cm.dispose();
                return;
            }
            rs.close();
            ps.close();

            switch (id) {
                case 0:
                    cm.sendGetText("請輸入要增加的道具ID:");
                    break;
                case 1:
					ps = conn.prepareStatement("SELECT * FROM gashapon_items WHERE gashaponsid = ?");
                    ps.setInt(1, machineId);
                    rs = ps.executeQuery();
                    var options = "";
                    while (rs.next()) {
                        options += "#L" + rs.getInt("itemid") + "#【 #i" + rs.getInt("itemid") + "# 】 " + rs.getString("name") + "#l\r\n";
                    }
                    rs.close();
                    ps.close();
                    cm.sendSimple(options);
                case 2:
					ps = conn.prepareStatement("SELECT * FROM gashapon_items WHERE gashaponsid = ?");
                    ps.setInt(1, machineId);
                    rs = ps.executeQuery();
                    var options = "";
                    while (rs.next()) {
                        options += "#L" + rs.getInt("itemid") + "#【 #i" + rs.getInt("itemid") + "# 】 " + rs.getString("name") + " - 機率: " + rs.getInt("chance") + "#l\r\n";
                    }
                    rs.close();
                    ps.close();
                    cm.sendSimple(options);
                    break;
                case 3:
                    ps = conn.prepareStatement("SELECT * FROM gashapon_items WHERE gashaponsid = ?");
                    ps.setInt(1, machineId);
                    rs = ps.executeQuery();
                    var options = "";
                    while (rs.next()) {
                        options += "#L" + rs.getInt("itemid") + "#【 #i" + rs.getInt("itemid") + "# 】 " + rs.getString("name") + " - 是否上廣: " + rs.getInt("showmsg") + "#l\r\n";
                    }
                    rs.close();
                    ps.close();
                    cm.sendSimple(options);
                    break;
            }
            break;
        case 2:
            itemId = cm.getText();
			if (itemId == null) {
				itemId = selection;
			}
            if (itemId == null) {
                cm.sendOk("道具ID不可為空白。");
                cm.dispose();
                return;
            }
            switch (id) {
                case 0:
					// Check if this item already exists in the gashapon
					ps = conn.prepareStatement("SELECT * FROM gashapons WHERE id = ?");
					ps.setInt(1, id);
					rs = ps.executeQuery();
					if (rs.next()) {
						cm.sendOk("這個道具已經存在在轉蛋機中。");
						rs.close();
						ps.close();
						cm.dispose();
						return;
					}
					rs.close();
					ps.close();
                    cm.sendGetText("請輸入機率和是否上廣(格式：機率,是否上廣( 0 = 不上廣 、 1 = 上廣 )):");
                    break;
                case 1:
					ps = conn.prepareStatement("SELECT * FROM gashapon_items WHERE itemid = ? AND gashaponsid = ?");
					ps.setInt(1, itemId);
					ps.setInt(2, machineId);
					rs = ps.executeQuery();
					if (!rs.next()) {
						// If the operation is not to add a new item
						if(id !== 0){
							cm.sendOk("沒有這個道具ID。");
							rs.close();
							ps.close();
							cm.dispose();
							return;
						}
					} else {
						itemName = rs.getString("name");
					}
					rs.close();
					ps.close();
                    cm.sendYesNo("你確定要刪除道具 '" + itemName + "' 嗎?");
                    break;
                case 2:
					ps = conn.prepareStatement("SELECT * FROM gashapon_items WHERE itemid = ? AND gashaponsid = ?");
					ps.setInt(1, itemId);
					ps.setInt(2, machineId);
					rs = ps.executeQuery();
					if (!rs.next()) {
						// If the operation is not to add a new item
						if(id !== 0){
							cm.sendOk("沒有這個道具ID。");
							rs.close();
							ps.close();
							cm.dispose();
							return;
						}
					} else {
						itemName = rs.getString("name");
					}
					rs.close();
					ps.close();
                    cm.sendGetText("請輸入新的機率:");
                    break;
                case 3:
					ps = conn.prepareStatement("SELECT * FROM gashapon_items WHERE itemid = ? AND gashaponsid = ?");
					ps.setInt(1, itemId);
					ps.setInt(2, machineId);
					rs = ps.executeQuery();
					if (!rs.next()) {
						// If the operation is not to add a new item
						if(id !== 0){
							cm.sendOk("沒有這個道具ID。");
							rs.close();
							ps.close();
							cm.dispose();
							return;
						}
					} else {
						itemName = rs.getString("name");
					}
					rs.close();
					ps.close();
                    cm.sendGetText("請輸入新的是否上廣(0 = 不上廣 、 1 = 上廣):");
                    break;
            }
            break;
        case 3:
			if(MapleItemInformationProvider.getInstance().getName(itemId) == ""){
				cm.sendOk("查無此道具。");
                cm.dispose();
                return;
			}
            var input = cm.getText();
            switch (id) {
                case 0:
                    var parts = input.split(",");
                    var chance = parseInt(parts[0]);
                    var showmsg = parseInt(parts[1]);
					if(showmsg != 0 && showmsg != 1){
						cm.sendOk("上廣的數值不正確。");
						cm.dispose();
						return;
					}if(!(chance > 0 && chance < 1000000)){
						cm.sendOk("機率僅能在 1 ~ 100 萬之間。");
						cm.dispose();
						return;
					}
                    ps = conn.prepareStatement("INSERT INTO gashapon_items (gashaponsid, itemid, chance, showmsg, name) VALUES (?, ?, ?, ?, ?)");
                    ps.setInt(1, machineId);
                    ps.setInt(2, itemId);
                    ps.setInt(3, chance);
                    ps.setInt(4, showmsg);
                    ps.setString(5, MapleItemInformationProvider.getInstance().getName(itemId));
                    ps.executeUpdate();
					cm.log("在轉蛋機 " + machineId + " 中增加了道具 " + itemId);
                    ps.close();
                    break;
                case 1:
                    ps = conn.prepareStatement("DELETE FROM gashapon_items WHERE gashaponsid = ? AND itemid = ?");
                    ps.setInt(1, machineId);
                    ps.setInt(2, itemId);
                    ps.executeUpdate();
					cm.log("在轉蛋機 " + machineId + " 中刪除了道具 " + itemId);
                    ps.close();
                    break;
                case 2:
                    var newChance = parseInt(input);
					if(!(newChance > 0 && newChance < 1000000)){
						cm.sendOk("機率僅能在 1 ~ 100 萬之間。");
						cm.dispose();
						return;
					}
                    ps = conn.prepareStatement("UPDATE gashapon_items SET chance = ? WHERE gashaponsid = ? AND itemid = ?");
                    ps.setInt(1, newChance);
                    ps.setInt(2, machineId);
                    ps.setInt(3, itemId);
                    ps.executeUpdate();
					cm.log("在轉蛋機 " + machineId + " 中更新了道具 " + itemId + " 的機率為 " + newChance);
                    ps.close();
                    break;
                case 3:
                    var newShowmsg = parseInt(input);
					if(newShowmsg != 0 && newShowmsg != 1){
						cm.sendOk("上廣的數值不正確。");
						cm.dispose();
						return;
					}
                    ps = conn.prepareStatement("UPDATE gashapon_items SET showmsg = ? WHERE gashaponsid = ? AND itemid = ?");
                    ps.setInt(1, newShowmsg);
                    ps.setInt(2, machineId);
                    ps.setInt(3, itemId);
                    ps.executeUpdate();
					cm.log("在轉蛋機 " + machineId + " 中更新了道具 " + itemId + " 的是否上廣為 " + newShowmsg);
                    ps.close();
                    break;
            }
            cm.sendOk("操作完成。");
            cm.dispose();
            break;
    }
}


function getAllGashapons() {
    var gashapons = [];
    try {
        stmt = conn.prepareStatement("SELECT * FROM gashapons");
        rs = stmt.executeQuery();

        while(rs.next()) {
            var gashapon = {};
            gashapon.id = rs.getInt("id");
            gashapon.npcId = rs.getInt("npcId");
            gashapon.name = rs.getString("name");

            gashapons.push(gashapon);
        }
    } catch(e) {
        print(e);
    } finally {
        if(rs != null) rs.close();
        if(stmt != null) stmt.close();
    }

    return gashapons;
}