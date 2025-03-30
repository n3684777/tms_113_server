
/*
	Name:  材料轉蛋機
	Place: 轉蛋屋
*/
load('nashorn:mozilla_compat.js');
importPackage(Packages.handling.world);
importPackage(Packages.tools);
importPackage(Packages.server);
var status = -1;
var 轉蛋機名稱 = "材料轉蛋機";
var requireItem = 5220030; /* 轉蛋券 */
var 等級 = 30;
var 轉蛋機編號 = 11;
var i = "";

function action(mode, _type, selection) {
    if (mode == 1) {
        status++;
    } else {
        cm.dispose();
        return;
    }

    switch (status) {
        case 0:
            if (cm.getPlayer().getLevel() < 等級) {
            cm.sendOk(""+轉蛋機名稱+"只能從"+等級+"級開始使用。");
            status = -1;
            //cm.gainItem(5220000, 1);
            cm.dispose();
            break;
    		}else{
            cm.sendYesNo("你好，我是"+轉蛋機名稱+"，需要使用 #i"+requireItem+"# 請問你要轉蛋嗎？");
            break;
        }
        case 1:{
            var str = "#e#b#i2022619# "+轉蛋機名稱+"內有的大獎如下:\r\n\r\n";			
			var conn = cm.getConnection();
			//sql語法
			//資料表要有joinplay
			var ps = conn.prepareStatement("SELECT * FROM gashapon_items WHERE gashaponsid = ? and showmsg = ?"); 
			ps.setString(1, 轉蛋機編號);
			ps.setString(2, 1);
			var RankDataBase = ps.executeQuery();
			while (RankDataBase.next()) {
				VipItem = RankDataBase.getString("itemid");
				str += " #i"+VipItem+"# #z"+VipItem+"#\r\n";
			  }
			cm.sendNext(str);  
			RankDataBase.close();
			ps.close();
            break;
        }
        case 2: {
            if (cm.haveItem(requireItem)) {
                var gashapon = cm.getGashapon();
                if(gashapon != null) {
                    if (cm.canHold()) {
                        var gashaponItem = gashapon.generateReward();
                        var item = MapleInventoryManipulator.addbyId_nature(cm.getPlayer().getClient(), gashaponItem.getItemId(), 1);
                        if(gashaponItem != null) { 
                            if(gashaponItem.canShowMsg())
                                //World.Broadcast.broadcastMessage(MaplePacketCreator.getGachaponMega2(""+轉蛋機名稱+"" + cm.getPlayer().getName()," : 被他從轉蛋屋的潮流轉蛋機轉到了，大家恭喜他吧！", item, cm.getPlayer().getClient().getChannel())); //ppms綠廣
                                World.Broadcast.broadcastMessage(MaplePacketCreator.getGachaponMega("【獲得大獎】" + cm.getPlayer().getName()," : 被他從轉蛋屋的"+轉蛋機名稱+"轉到了，大家恭喜他吧！", item, cm.getPlayer().getClient().getChannel())); //ppms綠廣
								//World.Broadcast.broadcastMessage(MaplePacketCreator.getGachaponMega(medaltext + cm.getPlayer().getName(), " : " + text, statsSel, 0));
                            cm.gainItem(requireItem, -1);
                            cm.sendOk("恭喜你轉到了#b#t" + gashaponItem.getItemId() + "##i" + gashaponItem.getItemId() + ":##k。");
                        } else {
                            cm.sendOk("轉蛋機維護中。");
                        }
                    } else {
                        cm.sendOk("請確認你的物品欄位還有空間。");
                    }
                } else {
                    cm.sendOk("轉蛋機尚未開放。");
                }
            } else {
                cm.sendOk("很抱歉由於你沒有#b#i" + requireItem + "##k，所以不能轉蛋哦。");
            }
        }
        case 3:
            cm.dispose();
    }
}
