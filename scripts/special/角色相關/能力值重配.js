load('nashorn:mozilla_compat.js');
importPackage(java.lang);

var status = 0;
var 返回 = false;
var 腳本路徑 = "角色相關/能力值重配";
var 線1 = "#fMap/MapHelper/worldMap/npcPos3/6#";
var 力量 = "#fUI/GuildMark.img/Mark/Etc/00009003/1#";//Mark.Etc.00009003.1
var 敏捷 = "#fUI/GuildMark.img/Mark/Animal/00002005/1#";//Mark.Animal.00002005.1
var 智力 = "#fUI/GuildMark.img/Mark/Etc/00009006/1#";//Mark.Etc.00009006.1
var 幸運 = "#fUI/GuildMark.img/Mark/Plant/00003005/3#";//Mark.Plant.00003005.3
//定義兌換物品
var items = [    
	[5050000, 1],
]; 

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status >= 0 && mode == 0) {
	    cm.dispose();
	    return;
    }
    if (mode == 1)
	    status++;
    else
	    status--;

    if (status == 0) {
	    var text = "請選擇想要轉換為升級點數的能力值：\r\n\r\n";
	    for (var i = 0; i < items.length; i++) {
            text += "#r需要 【 #i" + items[i][0] + ":# 】 #t" + items[i][0] + "# － " + items[i][1] + "個#k\r\n\r\n";
        }
        text += ""+線1+" "+線1+" "+線1+" "+線1+" "+線1+" "+線1+" "+線1+" "+線1+" #e#b扣除類型#k#n "+線1+" "+線1+" "+線1+" "+線1+" "+線1+" "+線1+" "+線1+" "+線1+"\r\n#e";
	    text += "#b\r\n			#L0#【"+力量+"】 力量 "+cm.getPlayer().getStr()+"#l#k\r\n";
	    text += "#b\r\n			#L1#【"+敏捷+"】 敏捷 "+cm.getPlayer().getDex()+"#l#k\r\n";
	    text += "#b\r\n			#L2#【"+智力+"】 智力 "+cm.getPlayer().getInt()+"#l#k\r\n";
	    text += "#b\r\n			#L3#【"+幸運+"】 幸運 "+cm.getPlayer().getLuk()+"#l#k\r\n";
	    cm.sendSimple(text);
    } else if (status == 1) {
		選擇扣除類型 =  selection;
		if(選擇扣除類型 == 0){
			最大數量 = cm.getPlayer().getStr() - 4;
		}if(選擇扣除類型 == 1){
			最大數量 = cm.getPlayer().getDex() - 4;
		}if(選擇扣除類型 == 2){
			最大數量 = cm.getPlayer().getInt() - 4;
		}if(選擇扣除類型 == 3){
			最大數量 = cm.getPlayer().getLuk() - 4;
		}
		if(最大數量 < 0 || 最大數量 == 0){
			cm.sendOk("您選擇的能力點#r少於或等於 4 點#k沒有可扣除的餘額！");
			cm.dispose();
			return;
		}
		cm.sendGetNumber("您想要扣除多少點呢？", 1, 1, 最大數量); 
	}  else if (status == 2) {
	    扣除數值 = selection;
		if (selection <= 0 || ( 扣除數值 > 最大數量)) {
			cm.sendOk("您被偵測異常紀錄，使用過程已被紀錄Log！");
			cm.worldMessage(5,"玩家『"+ cm.getPlayer().getName() +"』被偵測到使用異常軟體修改數據，請通知GM檢查");
			cm.GAMEPLAYERLOG("能力值強化異常", "使用異常軟體修改數據", 0, selection);
			cm.dispose();
			return;
		}
		var text = "";
        text += ""+線1+" "+線1+" "+線1+" "+線1+" "+線1+" "+線1+" "+線1+" "+線1+" #e#b增加類型#k#n "+線1+" "+線1+" "+線1+" "+線1+" "+線1+" "+線1+" "+線1+" "+線1+"\r\n#e";
		if(選擇扣除類型 == 0){
			text += "#b\r\n		  #L1#【"+敏捷+"】 敏捷 "+cm.getPlayer().getDex()+" #r( + "+扣除數值+" )#l#k\r\n";
			text += "#b\r\n		  #L2#【"+智力+"】 智力 "+cm.getPlayer().getInt()+" #r( + "+扣除數值+" )#l#k\r\n";
			text += "#b\r\n		  #L3#【"+幸運+"】 幸運 "+cm.getPlayer().getLuk()+" #r( + "+扣除數值+" )#l#k\r\n";
		}if(選擇扣除類型 == 1){
			text += "#b\r\n		  #L0#【"+力量+"】 力量 "+cm.getPlayer().getStr()+" #r( + "+扣除數值+" )#l#k\r\n";
			text += "#b\r\n		  #L2#【"+智力+"】 智力 "+cm.getPlayer().getInt()+" #r( + "+扣除數值+" )#l#k\r\n";
			text += "#b\r\n		  #L3#【"+幸運+"】 幸運 "+cm.getPlayer().getLuk()+" #r( + "+扣除數值+" )#l#k\r\n";
		}if(選擇扣除類型 == 2){
			text += "#b\r\n		  #L0#【"+力量+"】 力量 "+cm.getPlayer().getStr()+" #r( + "+扣除數值+" )#l#k\r\n";
			text += "#b\r\n		  #L1#【"+敏捷+"】 敏捷 "+cm.getPlayer().getDex()+" #r( + "+扣除數值+" )#l#k\r\n";
			text += "#b\r\n		  #L3#【"+幸運+"】 幸運 "+cm.getPlayer().getLuk()+" #r( + "+扣除數值+" )#l#k\r\n";
		}if(選擇扣除類型 == 3){
			text += "#b\r\n		  #L0#【"+力量+"】 力量 "+cm.getPlayer().getStr()+" #r( + "+扣除數值+" )#l#k\r\n";
			text += "#b\r\n		  #L1#【"+敏捷+"】 敏捷 "+cm.getPlayer().getDex()+" #r( + "+扣除數值+" )#l#k\r\n";
			text += "#b\r\n		  #L2#【"+智力+"】 智力 "+cm.getPlayer().getInt()+" #r( + "+扣除數值+" )#l#k\r\n";
		}
	    cm.sendSimple(text);
    }else if (status == 3) {
		選擇增加類型 =  selection;
	    var insufficientItems = [];
	    for (var i = 0; i < items.length; i++) {
            if(!cm.haveItem(items[i][0], items[i][1]*扣除數值)) {
				insufficientItems.push([items[i][0], items[i][1] * 扣除數值 - cm.getPlayer().getItemQuantity(items[i][0], false)]);
			}
        }

        if(insufficientItems.length > 0) {
            var text = "抱歉，您缺少以下物品：\r\n\r\n";
            for (var i = 0; i < insufficientItems.length; i++) {
                text += "#i" + insufficientItems[i][0] + "# #t" + insufficientItems[i][0] + "#，您還需要 " + insufficientItems[i][1] + " 個\r\n";
            }
            cm.sendOk(text);
			返回 = true;
        }else{
			cm.sendYesNo("確定要消耗以下物品轉移能力點嗎？\r\n\r\n" + getConfirmText(扣除數值));
		}

    } else if (status == 4) {
		if(返回){
			cm.dispose();
			cm.openNpc(9010000, 腳本路徑);
			return;
		}else{
			if(選擇扣除類型 == 0){
				cm.getPlayer().setStr(cm.getPlayer().getStr() - 扣除數值);
			}if(選擇扣除類型 == 1){
				cm.getPlayer().setDex(cm.getPlayer().getDex() - 扣除數值);
			}if(選擇扣除類型 == 2){
				cm.getPlayer().setInt(cm.getPlayer().getInt() - 扣除數值);
			}if(選擇扣除類型 == 3){
				cm.getPlayer().setLuk(cm.getPlayer().getLuk() - 扣除數值);
			}
			if(選擇增加類型 == 0){
				cm.getPlayer().setStr(cm.getPlayer().getStr() + 扣除數值);
				cm.sendOk("您已為了力量增加了#b#e "+扣除數值+" #n#k點");
			}if(選擇增加類型 == 1){
				cm.getPlayer().setDex(cm.getPlayer().getDex() + 扣除數值);
				cm.sendOk("您已為了敏捷增加了#b#e "+扣除數值+" #n#k點");
			}if(選擇增加類型 == 2){
				cm.getPlayer().setInt(cm.getPlayer().getInt() + 扣除數值);
				cm.sendOk("您已為了智力增加了#b#e "+扣除數值+" #n#k點");
			}if(選擇增加類型 == 3){
				cm.getPlayer().setLuk(cm.getPlayer().getLuk() + 扣除數值);
				cm.sendOk("您已為了幸運增加了#b#e "+扣除數值+" #n#k點");
			}
			for (var i = 0; i < items.length; i++) {
				cm.gainItem(items[i][0], -items[i][1]*扣除數值);
			}
			cm.processCommand("@刷新道具能力");
			
		}
	    
    } else if (status == 5) {
		cm.dispose();
		cm.openNpc(9010000, 腳本路徑);
		return;
	}
}

function getConfirmText(自訂數值) {
    var text = "";
    for (var i = 0; i < items.length; i++) {
        text += "#r#e#i" + items[i][0] + "# #t" + items[i][0] + "# － " + items[i][1]*自訂數值 + " 個#k\r\n\r\n";
    }
    return text;
}
