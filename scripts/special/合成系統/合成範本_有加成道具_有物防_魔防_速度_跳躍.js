var status = -1;
var sel, select;
var name = "多功能合成";
var 圖標代碼 = 1122023;
var 上頁 = "#fUI/UIWindow/itemSearch/BtBack/mouseOver/0#";
var 上頁腳本 = "合成系統/合成系統";
var 腳本路徑 = "合成系統/合成範本_有加成道具_有物防_魔防_速度_跳躍";
var points;
var 失敗不扣除第一樣道具 = 0;  // 0 = 關，會扣除。 1 = 開，不會扣除

//*****************
var 成功率增加道具 = 0;//設定0就是不要
var 成功機率 = 10;
//*****************
var 絕對成功道具 = 0;//設定0就是不要
var 是否上廣 = 0; // 0 = 不上廣 1 = 上廣
var items = [
//[獲得物品ID, 獲得物品數量, 等級, 機率, 四屬, 魔物攻, 保底額度 999 = 無保底, 存取資料代號(代號請勿重複，不同腳本也不能重複)
	//道具一基本設定
	{獲得物品ID: 1122025 ,獲得物品數量: 1 ,等級: 10 ,機率 : 100 ,四屬: 0 ,魔物攻: 0 ,物防: 0 ,魔防: 0,速度: 0 ,跳躍: 0 ,保底額度: 10 ,存取資料代號: 499885},

]; 

//對應兌換物
var reward_item = [
	//道具一所需兌換物
	[
		[4001126, 1, -1],
	],
]

function getRandom(min, max) {
	if (min > max) {
		return(-1);
	}

	if (min == max) {
		return(min);
	}

	return(min + parseInt(Math.random() * (max - min + 1)));
}

var ItemRandom = getRandom(0, 100);

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
	
    if (mode == 0 || mode == -1 && status == 0) {
        cm.dispose();
        return;
    }
    mode == 1 ? status++ : status--;

    if (status == 0) {

		var msg = "		【 我是" + name + "裝備合成NPC 】\r\n\r\n";
		if(成功率增加道具 > 0){
			msg += "【 #i"+成功率增加道具+":# 】 #b#z"+成功率增加道具+"##k 可以增加 #b"+成功機率+"%#k 成功率\r\n\r\n";
		}
		if(絕對成功道具 > 0){
			msg += "【 #i"+絕對成功道具+":# 】 #b#z"+絕對成功道具+"##k 可以增加 #b100%#k 成功率\r\n\r\n";
		}
		msg += " #fUI/UIWindow.img/QuestIcon/4/0#\r\n";
		msg += "=============================================\r\n\r\n";
		var x = 0;
		for (var i = 0; i < items.length; i++) {
			var record = cm.神秘的方法(items[i].存取資料代號);
			var points = record.getCustomData() == null ? 0 : parseInt(record.getCustomData());
			x++;
			msg +=
				"#e#k需求等級#b " + items[i].等級 + "#k 級  成功機率#b " + items[i].機率 + " #k％\r\n\r\n" +
				(items[i].保底額度 < 999 ? ("#k保底次數 "+points+" / " + items[i].保底額度 + " #k次\r\n\r\n") : "#r無保底\r\n\r\n#k") +
				"";
			for (var j = 0; j < reward_item[i].length; j++) {
				msg += "【 #i" + reward_item[i][j][0] + "# 】 -  #z" + reward_item[i][j][0] + "##b - " + reward_item[i][j][1] + "#k 個\r\n";
			}
			msg +=
				"\r\n#r#L" + i + "#兌換 - #i" + items[i].獲得物品ID + "#  #z" + items[i].獲得物品ID + "##l#k\r\n\r\n\r\n" +
				"< 四屬增加 #b" + items[i].四屬 + "  #k魔物攻增加 #b" + items[i].魔物攻 + " #k>#k\r\n" +
				"< 物防增加 #b" + items[i].物防 + "  #k魔防增加 #b" + items[i].魔防 + " #k>#k\r\n" +
				"< 速度增加 #b" + items[i].速度 + "  #k跳躍增加 #b" + items[i].跳躍 + " #k>#k\r\n" +
				"\r\n\r\n=============================================\r\n\r\n";
		}
			x_2 = x + 1;
			msg +=  "\r\n\r\n                #L"+x_2+"#"+上頁+"#l\r\n" ; 
			cm.sendSimple(msg);
    } else if (status == 1) {
        select = selection;
		if(x_2 == select){
            cm.dispose();
            cm.openNpc(9010000, 上頁腳本);
            return;
        } 
        cm.sendYesNo("您確定要兌換：\r\n\r\n"+
					" #L" + i + "# " + "#i" + items[select].獲得物品ID + "#  #z" + items[select].獲得物品ID + "# - " + items[select].獲得物品數量 + " 個\r\n");
    } else if (status == 2) {
		if(cm.haveItem(成功率增加道具, 1) || cm.haveItem(絕對成功道具, 1) ){
			var msg = "		#b#e【 偵測到你身上有成功率增加道具 】#n#k\r\n\r\n";
			if(成功率增加道具 > 0){
				msg += (cm.haveItem(成功率增加道具, 1) ? ("#L500##b使用成功率增加 "+成功機率+"% 道具#k#l\r\n\r\n") : "");
			}
			if(絕對成功道具 > 0){
				msg += (cm.haveItem(絕對成功道具, 1) ? ("#L501##b使用成功率增加 100% 道具#k#l\r\n\r\n") : "");
			}
			msg += "#L502##r都不使用#k#l";
			cm.sendSimple(msg);
		}else{
			cm.sendSimple("即將開始合成祝您好運");
		}
	} else if (status == 3) {
		
		 var record = cm.神秘的方法(items[select].存取資料代號);
         var requiredItems = reward_item[select];
		 var points = record.getCustomData() == null ? 0 : parseInt(record.getCustomData());
		 //{獲得物品ID: 1122025 ,獲得物品數量: 1 ,等級: 10 ,機率 : 100 ,四屬: 0 ,魔物攻: 10 ,物防: 10 ,魔防: 20,速度: 10 ,跳躍: 10 ,保底額度: 10 ,存取資料代號: 200490},
		 四屬數值 = items[select].四屬;
		 魔物攻值 = items[select].魔物攻;
		 設定機率 = items[select].機率;
		 設定等級 = items[select].等級;
		 保底次數 = items[select].保底額度;
		 物防次數 = items[select].物防;
		 魔防次數 = items[select].魔防;
		 速度次數 = items[select].速度;
		 跳躍次數 = items[select].跳躍;
		 if (!cm.canHold()) {
			cm.sendOk("請確認你的物品欄位還有空間。");
			cm.dispose();
			return;
		}
		if(selection == 500){
			設定機率 = 設定機率 + 成功機率;
		}if(selection == 501){
			設定機率 = 100;
		}
		if (cm.getPlayerStat("LVL") < 設定等級) {
			cm.sendOk(設定等級 + "等以上才能兌換哦!");
			cm.safeDispose();
			return;	
		}
        if (hasRequiredItems(cm.getPlayer(), requiredItems)) {
            if(ItemRandom <= 設定機率 || points >= 保底次數){
				removeItems(cm.getPlayer(), requiredItems);
                if(四屬數值 > 0 || 魔物攻值 > 0 || 物防次數 > 0 || 魔防次數 > 0 || 速度次數 > 0 || 跳躍次數 > 0){
					var _EQU = cm.getEquip(items[select].獲得物品ID);
					   _EQU.setStr(四屬數值);  
					   _EQU.setDex(四屬數值);
					   _EQU.setInt(四屬數值);
					   _EQU.setLuk(四屬數值);
					   _EQU.setWatk(魔物攻值);
					   _EQU.setMatk(魔物攻值);
					   _EQU.setWdef(物防次數);
					   _EQU.setMdef(魔防次數);
					   _EQU.setSpeed(速度次數);
					   _EQU.setJump(跳躍次數);
					   MapleInventoryManipulator.addFromDrop(cm.getClient(), _EQU, true);
						if(是否上廣 == 1){
							World.Broadcast.broadcastMessage_轉蛋用(MaplePacketCreator.getGachaponMega("【合成成功】" + cm.getPlayer().getName()," : 被他成功合成了，大家恭喜他吧！", _EQU, cm.getPlayer().getClient().getChannel()));
						}
					
					cm.GAMEPLAYERLOG(name, "++獲得道具", items[select].獲得物品ID, items[select].獲得物品數量);					
				}else{
					var item = MapleInventoryManipulator.addbyId_Gachapon(cm.getPlayer().getClient(), items[select].獲得物品ID, 1);
					if(是否上廣 == 1){
						World.Broadcast.broadcastMessage_轉蛋用(MaplePacketCreator.getGachaponMega("【合成成功】" + cm.getPlayer().getName()," : 被他成功合成了，大家恭喜他吧！", item, cm.getPlayer().getClient().getChannel()));
					}
					cm.GAMEPLAYERLOG(name, "++獲得道具", items[select].獲得物品ID, items[select].獲得物品數量);
				}
				if(selection == 500){
					cm.gainItem(成功率增加道具, -1);
					cm.GAMEPLAYERLOG(name, "--扣除道具", 成功率增加道具, -1);
				}if(selection == 501){
					cm.gainItem(絕對成功道具, -1);
					cm.GAMEPLAYERLOG(name, "--扣除道具", 絕對成功道具, -1);
				}
				record.setCustomData(0);
				cm.sendOk("已兌換成功!^^");
				cm.GAMEPLAYERLOG(name, "===============================", 0, 0);
				
			}else{
				if(points == 0){
					record.setCustomData(1);
				}else{
					record.setCustomData( points + 1);
				}
				if(失敗不扣除第一樣道具 == 0){
					removeItems(cm.getPlayer(), requiredItems);
				}else{
					removeItems_2(cm.getPlayer(), requiredItems);
				}
				if(selection == 500){
					cm.gainItem(成功率增加道具, -1);
					cm.GAMEPLAYERLOG(name, "--扣除道具", 成功率增加道具, -1);
				}if(selection == 501){
					cm.gainItem(絕對成功道具, -1);
					cm.GAMEPLAYERLOG(name, "--扣除道具", 絕對成功道具, -1);
				}
				cm.sendOk("非常可惜，兌換失敗");
				cm.GAMEPLAYERLOG(name, "===============================", 0, 0);
			}
                
            
        } else {
            var missingItemsMsg = "您缺少以下物品：\r\n\r\n";
			for (var i = 0; i < requiredItems.length; i++) {
				var itemId = requiredItems[i][0];
				var requiredQuantity = requiredItems[i][1];
				var ownedQuantity = getOwnedItemQuantity(cm.getPlayer(), itemId);

				missingItemsMsg += "【 #i" + itemId + "# 】 - #z" + itemId + "##k 需要: #b" + requiredQuantity + "#k 擁有: #r" + ownedQuantity + "#k\r\n";
			}
			cm.sendOk(missingItemsMsg);
		
        }

    } else if (status == 4) {
        cm.dispose();
        cm.openNpc(9010000, 腳本路徑);
        return;
    }

}

function getOwnedItemQuantity(player, itemId) {
    return player.getItemQuantity_check(itemId, false);
}

function removeItems(player, requiredItems) {
    for (var i = 0; i < requiredItems.length; i++) {
        var itemId = requiredItems[i][0];
        var itemQuantity = requiredItems[i][1];
        cm.gainItem(itemId, -itemQuantity);
		cm.GAMEPLAYERLOG(name, "--扣除道具", itemId, -itemQuantity);
    }
}

function removeItems_2(player, requiredItems) {
    for (var i = 1; i < requiredItems.length; i++) {
        var itemId = requiredItems[i][0];
        var itemQuantity = requiredItems[i][1];
        cm.gainItem(itemId, -itemQuantity);
		cm.GAMEPLAYERLOG(name, "--扣除道具", itemId, -itemQuantity);
    }
}

function hasRequiredItems(player, requiredItems) {
    var itemCounts = {};

    for (var i = 0; i < requiredItems.length; i++) {
        var itemId = requiredItems[i][0];
        var quantity = requiredItems[i][1];

        if (itemCounts[itemId] === undefined) {
            itemCounts[itemId] = quantity;
        } else {
            itemCounts[itemId] += quantity;
        }
    }

    for (var itemId in itemCounts) {
        if (!cm.haveItem(itemId, itemCounts[itemId])) {
            return false;
        }
    }

    return true;
}

load('nashorn:mozilla_compat.js');
importPackage(Packages.handling.world);
importPackage(Packages.tools);
importPackage(Packages.server);
