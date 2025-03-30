var status = -1;
var sel, select;
var name = "不穩定的獨眼巨人眼裝備合成";
var 圖標代碼 = 1122026;
var 上頁 = "#fUI/UIWindow/itemSearch/BtBack/mouseOver/0#";
var 上頁腳本 = "合成系統/合成系統";
var points;
var 失敗不扣除第一樣道具 = 0;  // 0 = 關，會扣除。 1 = 開，不會扣除

var items = [
//[獲得物品ID, 獲得物品數量, 等級, 機率, 四屬, 魔物攻, 保底額度 999 = 無保底, 存取資料代號(代號請勿重複，不同腳本也不能重複), 紅利
	//道具一基本設定
	[1122026 , 1, 10, 100, 0, 0, 999, 200000, 100],
	//道具二基本設定
	[1122031 , 1, 10, 80, 0, 0, 999, 200001, 200],
	[1122036 , 1, 10, 60, 0, 0, 999, 200002, 300],
]; 

//對應兌換物
var reward_item = [
	//道具一所需兌換物
	[
		[1122026, 2, -1],
		[2250002, 2, -1],
	],
	//道具二所需兌換物
	[
		[1122031, 2, -1],
		[2250002, 5, -1],
	],
	[
		[1122036, 2, -1],
		[2250002, 10, -1],
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
	player = cm.getPlayer();
    if (mode == 0 || mode == -1 && status == 0) {
        cm.dispose();
        return;
    }
    mode == 1 ? status++ : status--;

    if (status == 0) {

		var msg = "我是" + name + "裝備合成NPC #v"+圖標代碼+" " + "#\r\n請問您要合成甚麼呢?\r\n\r\n\r\n";
		msg += " #fUI/UIWindow.img/QuestIcon/4/0#\r\n";
		msg += "=============================================\r\n\r\n";
		var x = 0;
		for (var i = 0; i < items.length; i++) {
			var record = cm.神秘的方法(items[i][7]);
			var points = record.getCustomData() == null ? 0 : parseInt(record.getCustomData());
			x++;
			msg +=
				"#e#k需求等級#b " + items[i][2] + "#k 級  成功機率#b " + items[i][3] + " #k％\r\n\r\n" +
				(items[i][6] < 999 ? ("#k保底次數 "+points+" / " + items[i][6] + " #k次  ") : "#r無保底  #k") +
				"#r穩過紅利 "+items[i][8]+" 點#k\r\n\r\n";
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
		穩過紅利 = items[select][8];
		if(player.getDividend() >= 穩過紅利){
			cm.sendSimple("您的紅利有滿足需求，是否要使用紅利\r\n\r\n#L999#使用紅利#l\r\n#L2#不使用紅利#l");
		}else{
			cm.sendSimple("即將開始合成");
		}
	} else if (status == 3) {
		 是否使用紅利 = selection;
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
            if(ItemRandom <= 設定機率 || points >= 保底次數 || 是否使用紅利 == 999){
				removeItems(cm.getPlayer(), requiredItems);
                if(四屬數值 > 0 || 魔物攻值 > 0){
					cm.gainItem(items[select][0], items[select][1], 四屬數值, 四屬數值, 四屬數值, 四屬數值, 0, 0, 魔物攻值, 魔物攻值, 0, 0, 0, 0, 0, 0, -1); 
				}else{
				   cm.gainItem(items[select][0], items[select][1]);
				}
				if(是否使用紅利 == 999){
					player.setDividend(- 穩過紅利 );
				}
				record.setCustomData(0);
				cm.裝備用廣播(cm.getPlayer().getClient().getChannel(),"【裝備合成】" + cm.getPlayer().getName()+" : "+name+"被他合成到了，大家恭喜他吧！",items[select][0]);
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
    }
}

function removeItems_2(player, requiredItems) {
    for (var i = 1; i < requiredItems.length; i++) {
        var itemId = requiredItems[i][0];
        var itemQuantity = requiredItems[i][1];
        cm.gainItem(itemId, -itemQuantity);
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

