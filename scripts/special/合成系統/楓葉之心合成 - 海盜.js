var status = -1;
var sel, select;
var name = "楓葉之心合成_海盜";
var 圖標代碼 = 1122038;
var 上頁 = "#fUI/UIWindow/itemSearch/BtBack/mouseOver/0#";
var 上頁腳本 = "合成系統/楓葉之心合成";
var points;
var 失敗不扣除第一樣道具 = 0;  // 0 = 關，會扣除。 1 = 開，不會扣除

var items = [
//[獲得物品ID, 獲得物品數量, 等級, 機率, 四屬, 魔物攻, 保底額度 999 = 無保底, 存取資料代號(代號請勿重複，不同腳本也不能重複)
	//道具一基本設定
	[1122028 , 1, 10, 80, 0, 0, 10, 200100],
	[1122033 , 1, 10, 60, 0, 0, 10, 200101],
	[1122038 , 1, 10, 20, 0, 0, 10, 200102],
]; 

//對應兌換物
var reward_item = [
	//道具一所需兌換物
	[
		[1122023, 1, -1],
		[4001126, 1, -1],
	],
	[
		[1122028, 1, -1],
		[4000003, 1, -1],
		[4001126, 1, -1],
	],
	[
		[1122033, 1, -1],
		[4000005, 1, -1],
		[2250001, 1, -1],
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

		var msg = "我是" + name + "裝備合成NPC #v"+圖標代碼+" " + "#\r\n請問您要合成甚麼呢?\r\n\r\n";
		msg += " #fUI/UIWindow.img/QuestIcon/4/0#\r\n";
		msg += "=============================================\r\n\r\n";
		var x = 0;
		for (var i = 0; i < items.length; i++) {
			var record = cm.神秘的方法(items[i][7]);
			var points = record.getCustomData() == null ? 0 : parseInt(record.getCustomData());
			x++;
			msg +=
				"#e#k需求等級#b " + items[i][2] + "#k 級  成功機率#b " + items[i][3] + " #k％\r\n\r\n" +
				(items[i][6] < 999 ? ("#k保底次數 "+points+" / " + items[i][6] + " #k次\r\n\r\n") : "#r無保底\r\n\r\n#k") +
				"";
			for (var j = 0; j < reward_item[i].length; j++) {
				msg += "【 #i" + reward_item[i][j][0] + "# 】 -  #z" + reward_item[i][j][0] + "##b - " + reward_item[i][j][1] + "#k 個\r\n";
			}
			msg +=
				"\r\n#r#L" + i + "#兌換 - #i" + items[i][0] + "#  #z" + items[i][0] + "##l#k\r\n\r\n\r\n" +
				"< 四屬增加 #b" + items[i][4] + "  #k魔物攻增加 #b" + items[i][5] + " >#k" +
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
					" #L" + i + "# " + "#i" + items[select][0] + "#  #z" + items[select][0] + "# - " + items[select][1] + " 個\r\n");
    } else if (status == 2) {
		 var record = cm.神秘的方法(items[select][7]);
         var requiredItems = reward_item[select];
		 var points = record.getCustomData() == null ? 0 : parseInt(record.getCustomData());
		 四屬數值 = items[select][4];
		 魔物攻值 = items[select][5];
		 設定機率 = items[select][3];
		 設定等級 = items[select][2];
		 保底次數 = items[select][6];
		if (!cm.canHold()) {
			cm.sendOk("請確認你的物品欄位還有空間。");
			cm.dispose();
			return;
		}
		if (cm.getPlayerStat("LVL") < 設定等級) {
			cm.sendOk(設定等級 + "等以上才能兌換哦!");
			cm.safeDispose();
			return;	
		}
        if (hasRequiredItems(cm.getPlayer(), requiredItems)) {
            if(ItemRandom <= 設定機率 || points >= 保底次數){
				removeItems(cm.getPlayer(), requiredItems);
                if(四屬數值 > 0 || 魔物攻值 > 0){
					cm.gainItem(items[select][0], items[select][1], 四屬數值, 四屬數值, 四屬數值, 四屬數值, 0, 0, 魔物攻值, 魔物攻值, 0, 0, 0, 0, 0, 0, -1); 
					cm.GAMEPLAYERLOG(name, "道具獲得++", items[select][0], items[select][1]);	
				}else{
				   cm.gainItem(items[select][0], items[select][1], true);
				   cm.GAMEPLAYERLOG(name, "道具獲得++", items[select][0], items[select][1]);	
				}
				record.setCustomData(0);
				cm.sendOk("已兌換成功!^^");
				
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
				
				cm.sendOk("非常可惜，兌換失敗");
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
			cm.dispose();
        }
        cm.dispose();

    } else {
        cm.dispose();
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
		cm.GAMEPLAYERLOG(name, "道具扣除--", itemId, itemQuantity);
    }
}

function removeItems_2(player, requiredItems) {
    for (var i = 1; i < requiredItems.length; i++) {
        var itemId = requiredItems[i][0];
        var itemQuantity = requiredItems[i][1];
        cm.gainItem(itemId, -itemQuantity);
		cm.GAMEPLAYERLOG(name, "道具扣除--", itemId, itemQuantity);
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

