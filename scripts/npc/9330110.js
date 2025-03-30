/* Kedrick
Fishking King NPC
 */

var status = -1;
var sel;
var 轉蛋機名稱 = "釣魚系統";


//一般釣魚
var Item = 3010001;
var Item1 = 5340000;
var Item2 = 2300000;

//高級釣魚

var VIPItem = 5340001;
var VIPItem1 = 2300001;
var VIPItem2 = 3010001;

var 釣魚椅子購買費用 = 100000;

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		if (status == 0) {
			cm.dispose();
			return;
		}
		status--;
	}

	if (status == 0) {
		cm.sendSimple("我能為您做什麼嗎？？\n\r\n\r"+
					  "##L4#教我怎麼釣魚#l\n\r"+
					  "##L5#查看釣魚收穫#l\n\r"+
					  "##L6#獲得漁具#l\n\r"+
					  "##L7#購買魚餌#l\n\r");
	} else if (status == 1) {
		sel = selection;
		if (sel == 4) {
			cm.sendOk("釣魚更新說明:\r\n#b基本釣魚:#k\r\n所需的物品有...\r\n"+
					  "#r#i"+Item+"##k、#r#i"+Item1+"##k、#r#i"+Item2+"#\r\n"+
					  "#b高級釣魚:#k\r\n所需的物品有...\r\n"+
					  "#r#i"+VIPItem+"##k、#r#i"+VIPItem1+"##k、#r#i"+VIPItem2+"#\r\n"+
					  "釣魚收穫時間:\r\n"+
					  "#b普通釣魚:每6分鐘收穫一次\r\n"+
					  "高級釣魚:每4分鐘收穫一次");
			cm.safeDispose();
		} else if (sel == 5) {		      
            var str = "#e#b#i2022618# "+轉蛋機名稱+"內的大獎如下:\r\n\r\n\r\n";		      
			var conn = cm.getConnection();
			var ps = conn.prepareStatement("SELECT * FROM fishing_rewards WHERE showmsg = ?"); 
			ps.setString(1, 1);
			var RankDataBase = ps.executeQuery();
			while (RankDataBase.next()) {
				VipItem = RankDataBase.getString("itemid");
				str += "#i"+VipItem+":#  ";
			}
			str += "\r\n\r\n\r\n#e#b#i2022619# "+轉蛋機名稱+"內的小獎如下:\r\n\r\n\r\n";	
			var ps = conn.prepareStatement("SELECT * FROM fishing_rewards WHERE showmsg = ?"); 
			ps.setString(1, 0);
			var RankDataBase = ps.executeQuery();
			while (RankDataBase.next()) {
				NoVipItem = RankDataBase.getString("itemid");
				str += "#i"+NoVipItem+":#  ";
			}
			cm.sendNext(str);
			RankDataBase.close();
			ps.close();
            cm.dispose();
			return;
		} else if (sel == 6) {
			cm.sendNext("釣竿可以在商城購買到。\r\n魚餌可以跟釣魚場廚師買到。\r\n如果需要釣魚椅子請花費 "+釣魚椅子購買費用+" 楓幣購買。\r\n\r\n#b#L7#購買椅子#l");
		} else if (sel == 7) {
			cm.dispose();
            cm.openNpc(9330109);
            return;
		}
	} else if (status == 2) {
		if (selection == 7) {
			if(cm.getMeso() >= 釣魚椅子購買費用){
				cm.gainItem(Item, 1);
				cm.gainMeso(-釣魚椅子購買費用);
				cm.sendOk("您已經購買釣魚專用椅子囉~開心釣魚吧!");
				cm.dispose();
			}else{
				
				cm.sendOk("您的楓幣不足，需要 "+釣魚椅子購買費用+" 楓幣");
                cm.dispose();
			}
		}
		cm.safeDispose();
	}
}
