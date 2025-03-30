var status = -1;

var log = "每日任務道具蒐集系列一記錄";
var objDate = new Date();
var Month = objDate.getMonth();
var MonthS = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
var tzc = objDate.getDate();
var day = objDate.getDay();
var Year = objDate.getFullYear();



var weekday = [
	[4007000, 1000],//七
	[4007001, 600],//一
	[4007002, 500],//二
	[4007003, 500],//三
	[4007004, 500],//四
	[4007005, 500],//五
	[4007006, 1000],//六

];



//簽到要發的物品
var reward_item = [
	//禮拜七
	[
		[2450000, 1, -1],
		[2000005, 100, -1],
	],
	//禮拜一
	[
		[2450000, 1, -1],
		[2000005, 100, -1],
	],
	//禮拜二
	[
		[2450000, 1, -1],
		[2000005, 100, -1],
	],
	//禮拜三
	[
		[2450000, 1, -1],
		[2000005, 100, -1],
	],
	//禮拜四
	[
		[2450000, 1, -1],
		[2000005, 100, -1],
	],
	//禮拜五
	[
		[2450000, 1, -1],
		[2000005, 100, -1],
	],
	//禮拜六
	[
		[2450000, 1, -1],
		[2000005, 100, -1],
	],

];
//點數放這裡 第一格填1 = gash 2 = 楓幣 ,第2格填數量   0 = 不發點數
var points = [2, 100];



function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	var name = cm.getPlayer().getName();
	if (mode == 1) {
		status++;
	} else if (mode == 0) {
		status--;
	} else {
		cm.dispose();
		return;
	}

	if (status == 0) {
		本星期需要道具 = weekday[day][0];
		本星期需要道具數量 = weekday[day][1];
		if (cm.getPlayer().getPrizeLog("" + Year + "年" + MonthS[Month] + tzc + "日" + log + "") >= 1) {
			cm.sendOk("您的角色今日已經領取每日任務獎勵了哦！");
			cm.safeDispose();
		}
		var msg = "";
			msg += "本日每日任務需要\r\n\r\n #i" + 本星期需要道具 + "# 【#z" + 本星期需要道具 + "#】　－　" + 本星期需要道具數量 + "　個\r\n\r\n可獲得獎勵如下：\r\n\r\n";
		for (var i = 0; i < reward_item[day].length; i++)			
			msg += "【 #i" + reward_item[day][i][0] + "# 】 -  #z" + reward_item[day][i][0] + "# - " + reward_item[day][i][1] + "個\r\n";
		cm.sendYesNo(msg);

	} else if (status == 1) {
		if (!cm.haveItem(本星期需要道具, 本星期需要道具數量)) {
			cm.sendOk("您所需的物品不足!");
		} else {
			var items = reward_item[day]; // 假設這是您要發放的獎勵物品清單
			var requiredSpace = [0, 0, 0, 0, 0]; // 對應五種背包的所需空間，分別是裝備、消耗、裝飾、其他、特殊

			for (var i = 0; i < items.length; i++) {
				var itemID = items[i][0];
				var inventoryType = getInventoryType(itemID);
				requiredSpace[inventoryType - 1]++; // 根據物品ID確定背包類型並增加所需空間計數
			}

			// 檢查背包空間
			var pass = true;
			for (var i = 0; i < requiredSpace.length; i++) {
				if (cm.getInventory(i + 1).getNumFreeSlot() < requiredSpace[i]) { // 背包索引從1開始
					pass = false;
					break;
				}
			}

			if (!pass) {
				cm.sendOk("背包不足，請確保每個背包至少有 " + items.length + " 個空格！");
				cm.dispose();
				return;
			}
			if (points[1] > 0) {
				cm.getPlayer().modifyCSPoints(points[0], points[1], true); 
			}
			for (var i = 0; i < reward_item[day].length; i++) {
				cm.gainItem(reward_item[day][i][0], reward_item[day][i][1], reward_item[day][i][2]);
			}
			cm.gainItem(本星期需要道具, -本星期需要道具數量);
			cm.getPlayer().setPrizeLog("" + Year + "年" + MonthS[Month] + tzc + "日" + log + "");
			cm.sendOk("#b本日每日任務獎勵已發放！請記得每天都要來領取哦"); //最後訊息 *
			cm.worldMessage("" + cm.getName() + " 完成每日道具蒐集任務，獲得豐厚獎勵。大夥兒快來解！！");
			cm.dispose();
		}

	} else {
		cm.dispose();
	}
}

function getInventoryType(itemId) {
    if (itemId >= 1000000 && itemId < 2000000) {
        return 1; // 裝備
    } else if (itemId >= 2000000 && itemId < 3000000) {
        return 2; // 消耗
    } else if (itemId >= 3000000 && itemId < 4000000) {
        return 3; // 裝飾
    } else if (itemId >= 4000000 && itemId < 5000000) {
        return 4; // 其他
    } else {
        return 5; // 特殊
    }
}