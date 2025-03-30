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
		cm.sendOk("�w��z�A���q���a�A�z���OGM�L�k�ϥΦ��\��");
		cm.dispose();
		return;
	}
    conn = cm.getConnection();
    cm.sendSimple("#L0#�W�[�D��#l\r\n#L1#�R���D��#l\r\n#L2#�ק�D����v#l\r\n#L3#�ק�D��O�_�W�s#l");
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
            var text = "�п�ܤ@����J��:\n\n\r\n";
			for(var i = 0; i < gashaponList.length; i++) {
				text += "#L" + gashaponList[i].id + "#" + gashaponList[i].name + "#l\r\n\r\n";
			}
			cm.sendSimple(text);
            break;
        case 1:
            machineId = selection;
            if (machineId == "") {
                cm.sendOk("��J���s�����i���ťաC");
                cm.dispose();
                return;
            }
            ps = conn.prepareStatement("SELECT * FROM gashapons WHERE id = ?");
            ps.setInt(1, machineId);
            rs = ps.executeQuery();
            if (!rs.next()) {
                cm.sendOk("�S���o����J���s���C");
                rs.close();
                ps.close();
                cm.dispose();
                return;
            }
            rs.close();
            ps.close();

            switch (id) {
                case 0:
                    cm.sendGetText("�п�J�n�W�[���D��ID:");
                    break;
                case 1:
					ps = conn.prepareStatement("SELECT * FROM gashapon_items WHERE gashaponsid = ?");
                    ps.setInt(1, machineId);
                    rs = ps.executeQuery();
                    var options = "";
                    while (rs.next()) {
                        options += "#L" + rs.getInt("itemid") + "#�i #i" + rs.getInt("itemid") + "# �j " + rs.getString("name") + "#l\r\n";
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
                        options += "#L" + rs.getInt("itemid") + "#�i #i" + rs.getInt("itemid") + "# �j " + rs.getString("name") + " - ���v: " + rs.getInt("chance") + "#l\r\n";
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
                        options += "#L" + rs.getInt("itemid") + "#�i #i" + rs.getInt("itemid") + "# �j " + rs.getString("name") + " - �O�_�W�s: " + rs.getInt("showmsg") + "#l\r\n";
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
                cm.sendOk("�D��ID���i���ťաC");
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
						cm.sendOk("�o�ӹD��w�g�s�b�b��J�����C");
						rs.close();
						ps.close();
						cm.dispose();
						return;
					}
					rs.close();
					ps.close();
                    cm.sendGetText("�п�J���v�M�O�_�W�s(�榡�G���v,�O�_�W�s( 0 = ���W�s �B 1 = �W�s )):");
                    break;
                case 1:
					ps = conn.prepareStatement("SELECT * FROM gashapon_items WHERE itemid = ? AND gashaponsid = ?");
					ps.setInt(1, itemId);
					ps.setInt(2, machineId);
					rs = ps.executeQuery();
					if (!rs.next()) {
						// If the operation is not to add a new item
						if(id !== 0){
							cm.sendOk("�S���o�ӹD��ID�C");
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
                    cm.sendYesNo("�A�T�w�n�R���D�� '" + itemName + "' ��?");
                    break;
                case 2:
					ps = conn.prepareStatement("SELECT * FROM gashapon_items WHERE itemid = ? AND gashaponsid = ?");
					ps.setInt(1, itemId);
					ps.setInt(2, machineId);
					rs = ps.executeQuery();
					if (!rs.next()) {
						// If the operation is not to add a new item
						if(id !== 0){
							cm.sendOk("�S���o�ӹD��ID�C");
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
                    cm.sendGetText("�п�J�s�����v:");
                    break;
                case 3:
					ps = conn.prepareStatement("SELECT * FROM gashapon_items WHERE itemid = ? AND gashaponsid = ?");
					ps.setInt(1, itemId);
					ps.setInt(2, machineId);
					rs = ps.executeQuery();
					if (!rs.next()) {
						// If the operation is not to add a new item
						if(id !== 0){
							cm.sendOk("�S���o�ӹD��ID�C");
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
                    cm.sendGetText("�п�J�s���O�_�W�s(0 = ���W�s �B 1 = �W�s):");
                    break;
            }
            break;
        case 3:
			if(MapleItemInformationProvider.getInstance().getName(itemId) == ""){
				cm.sendOk("�d�L���D��C");
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
						cm.sendOk("�W�s���ƭȤ����T�C");
						cm.dispose();
						return;
					}if(!(chance > 0 && chance < 1000000)){
						cm.sendOk("���v�ȯ�b 1 ~ 100 �U�����C");
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
					cm.log("�b��J�� " + machineId + " ���W�[�F�D�� " + itemId);
                    ps.close();
                    break;
                case 1:
                    ps = conn.prepareStatement("DELETE FROM gashapon_items WHERE gashaponsid = ? AND itemid = ?");
                    ps.setInt(1, machineId);
                    ps.setInt(2, itemId);
                    ps.executeUpdate();
					cm.log("�b��J�� " + machineId + " ���R���F�D�� " + itemId);
                    ps.close();
                    break;
                case 2:
                    var newChance = parseInt(input);
					if(!(newChance > 0 && newChance < 1000000)){
						cm.sendOk("���v�ȯ�b 1 ~ 100 �U�����C");
						cm.dispose();
						return;
					}
                    ps = conn.prepareStatement("UPDATE gashapon_items SET chance = ? WHERE gashaponsid = ? AND itemid = ?");
                    ps.setInt(1, newChance);
                    ps.setInt(2, machineId);
                    ps.setInt(3, itemId);
                    ps.executeUpdate();
					cm.log("�b��J�� " + machineId + " ����s�F�D�� " + itemId + " �����v�� " + newChance);
                    ps.close();
                    break;
                case 3:
                    var newShowmsg = parseInt(input);
					if(newShowmsg != 0 && newShowmsg != 1){
						cm.sendOk("�W�s���ƭȤ����T�C");
						cm.dispose();
						return;
					}
                    ps = conn.prepareStatement("UPDATE gashapon_items SET showmsg = ? WHERE gashaponsid = ? AND itemid = ?");
                    ps.setInt(1, newShowmsg);
                    ps.setInt(2, machineId);
                    ps.setInt(3, itemId);
                    ps.executeUpdate();
					cm.log("�b��J�� " + machineId + " ����s�F�D�� " + itemId + " ���O�_�W�s�� " + newShowmsg);
                    ps.close();
                    break;
            }
            cm.sendOk("�ާ@�����C");
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