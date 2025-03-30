/*
	Name:  戰士轉蛋機
	Place: 轉蛋屋
	操作教學 :　https://www.xinbiao-aicl.com/forum.php?mod=viewthread&tid=9237&extra=page%3D1%26filter%3Dtypeid%26typeid%3D350
*/
load('nashorn:mozilla_compat.js');
importPackage(Packages.handling.world);
importPackage(Packages.tools);
importPackage(Packages.server);
var log = "活躍轉蛋";
var status = -1;
var STAR = "#fEffect/ItemEff/1049000/0/0#";
var 愛心 = "#fEffect/SetEff/240/effect/0#";
var 轉蛋機名稱 = "戰士轉蛋機";
var requireItem = 5220000;
var 等級 = 10;
var 轉蛋機編號 = 1;
var i = "";
var 廣播顏色 = 0; // 0 = 綠色 1 = 黃色

function action(mode, _type, selection) {
	var meso = cm.getPlayer().getMeso();
    if (mode == 1) {
        status++;
    } else {
        cm.dispose();
        return;
    }

    switch (status) {
        case 0:{
			if (cm.getPlayer().getLevel() <= 等級) {
				cm.sendOk(""+轉蛋機名稱+"只能從"+等級+"級開始使用。");
				cm.dispose();
				break;
    		}
            var str = "#e#b只要擁有 #i"+requireItem+":# #z"+requireItem+"# 就可以轉蛋 來試試手氣嗎 ?\r\n\r\n";		      
            str += "#e#b#i2022618# "+轉蛋機名稱+"內的大獎如下:\r\n\r\n\r\n";		      
			var conn = cm.getConnection();
			var ps = conn.prepareStatement("SELECT * FROM gashapon_items WHERE gashaponsid = ? and showmsg = ?"); 
			ps.setString(1, 轉蛋機編號);
			ps.setString(2, 1);
			var RankDataBase = ps.executeQuery();
			while (RankDataBase.next()) {
				VipItem = RankDataBase.getString("itemid");
				str += "#i"+VipItem+":#  ";
			}
			str += "\r\n\r\n\r\n#e#b#i2022619# "+轉蛋機名稱+"內的小獎如下:\r\n\r\n\r\n";	
			var ps = conn.prepareStatement("SELECT * FROM gashapon_items WHERE gashaponsid = ? and showmsg = ?"); 
			ps.setString(1, 轉蛋機編號);
			ps.setString(2, 0);
			var RankDataBase = ps.executeQuery();
			while (RankDataBase.next()) {
				NoVipItem = RankDataBase.getString("itemid");
				str += "#i"+NoVipItem+":#  ";
			}
			cm.sendNext(str);  
			RankDataBase.close();
			ps.close();
            break;
        }case 1: {
			var str="#e想用什麼方式抽獎呢\r\n\r\n#n";
			  str += "#b#L0#"+STAR+" 單次轉蛋#l\r\n\r\n";
			  str += "#b#L1#"+STAR+" 連續轉蛋#l\r\n\r\n";
			  cm.sendOk(str);
			  break;
		}
		case 2: {	
		選擇 = selection;
			if(選擇 == 0){
				count = 1; 
				if (cm.haveItem(requireItem, count)) {
				   var gashapon = cm.getGashapon();
				   var GASHITEM = "";
				   if(gashapon != null) {
						for(var i=0; i<count; i++){
							if (cm.canHold()) {
								var gashaponItem = gashapon.generateReward();
								var item = MapleInventoryManipulator.addbyId_nature(cm.getPlayer().getClient(), gashaponItem.getItemId(), 1);
								if(gashaponItem != null) { 
									if(gashaponItem.canShowMsg()){
										if(廣播顏色 == 0){
											World.Broadcast.broadcastMessage_轉蛋用(MaplePacketCreator.getGachaponMega("【獲得大獎】" + cm.getPlayer().getName()," : 被他從轉蛋屋的"+轉蛋機名稱+"轉到了，大家恭喜他吧！", item, cm.getPlayer().getClient().getChannel()));
										}else{
											cm.itemMegaphone_轉蛋用(cm.getPlayer().getClient().getChannel(), "【獲得大獎】" + cm.getPlayer().getName() + " : 被他從轉蛋屋的"+轉蛋機名稱+"轉到了，大家恭喜他吧！", item);
										}
									}	cm.getPlayer().addActive(log, 1);
										cm.gainItem(requireItem, -1);
										cm.GAMEPLAYERLOG(""+轉蛋機名稱+"", "扣除--", requireItem, 1);
										GASHITEM += "#i"+gashaponItem.getItemId()+":#  #z"+gashaponItem.getItemId()+"#";
										cm.GAMEPLAYERLOG(""+轉蛋機名稱+"", "獲得++", gashaponItem.getItemId(), 1);
										cm.sendOk("以下是您抽到的物品 : \r\n\r\n" + GASHITEM);
										cm.GAMEPLAYERLOG(""+轉蛋機名稱+"", "======================", 0, 0);
										cm.dispose();
										return;
								} else {
									cm.sendOk("轉蛋機維護中。");
									cm.dispose();
									return;
								}
							} else {
								cm.sendOk("請確認你的物品欄位還有空間。");
								cm.dispose();
								return;
							}
						}
					} else {
						cm.sendOk("轉蛋機尚未開放。");
						cm.dispose();
						return;
					}
				} else {
					cm.sendOk("很抱歉由於您的  #i"+requireItem+":# #z"+requireItem+"#不足 #r"+count+"#k 張，無法使用"+轉蛋機名稱+"。");
					cm.dispose();
					return;
				}
			}if(選擇 == 1){
				cm.sendGetNumber("您想要一次抽多少張轉蛋？\r\n#r最大能連續抽100張", 1, 1, 100);
				break;
			}
		} case 3: {
			if (selection <= 0 || selection > 100) {
					cm.sendOk("您被偵測異常紀錄，使用過程已被紀錄Log！");
					cm.worldMessage(5,"玩家『"+ cm.getPlayer().getName() +"』被偵測到使用異常軟體修改數據，請通知GM檢查");
					cm.GAMEPLAYERLOG(""+轉蛋機名稱+"異常", "使用異常軟體修改數據", 0, selection);
					cm.dispose();
					return;
			}
			count = selection; 
            if (cm.haveItem(requireItem, count)) {
               var gashapon = cm.getGashapon();
               var GASHITEM = "";
               if(gashapon != null) {
					for(var i=0; i<count; i++){
						if (cm.canHold()) {
							var gashaponItem = gashapon.generateReward();
							var item = MapleInventoryManipulator.addbyId_nature(cm.getPlayer().getClient(), gashaponItem.getItemId(), 1);
							if(gashaponItem != null) { 
								if(gashaponItem.canShowMsg())
									if(gashaponItem.canShowMsg()){
										if(廣播顏色 == 0){
											World.Broadcast.broadcastMessage_轉蛋用(MaplePacketCreator.getGachaponMega("【獲得大獎】" + cm.getPlayer().getName()," : 被他從轉蛋屋的"+轉蛋機名稱+"轉到了，大家恭喜他吧！", item, cm.getPlayer().getClient().getChannel()));
										}else{
											cm.itemMegaphone_轉蛋用(cm.getPlayer().getClient().getChannel(), "【獲得大獎】" + cm.getPlayer().getName() + " : 被他從轉蛋屋的"+轉蛋機名稱+"轉到了，大家恭喜他吧！", item);
										}
									}
									cm.gainItem(requireItem, -1);
									cm.GAMEPLAYERLOG(""+轉蛋機名稱+"", "扣除--", requireItem, 1);
									GASHITEM += "#i"+gashaponItem.getItemId()+":#"  ;
									cm.GAMEPLAYERLOG(""+轉蛋機名稱+"", "獲得++", gashaponItem.getItemId(), 1);
							} else {
								cm.sendOk("轉蛋機維護中。");
								cm.dispose();
								return;
							}
						} else {
							cm.getPlayer().addActive(log, i);
							cm.sendOk("請確認你的物品欄位還有空間。");
							cm.dispose();
							return;
						}
                    }
                } else {
                    cm.sendOk("轉蛋機尚未開放。");
                    cm.dispose();
                    return;
                }
            } else {
                cm.sendOk("很抱歉由於您的  #i"+requireItem+":# #z"+requireItem+"#不足 #r"+count+"#k 張，無法使用"+轉蛋機名稱+"。");
                cm.dispose();
                return;
            }
        }
        case 4:
			cm.getPlayer().addActive(log, count);
            cm.sendOk("以下是您抽到的物品 : \r\n\r\n" + GASHITEM);
			cm.GAMEPLAYERLOG(""+轉蛋機名稱+"", "======================", 0, 0);
            cm.dispose();
    }
}
