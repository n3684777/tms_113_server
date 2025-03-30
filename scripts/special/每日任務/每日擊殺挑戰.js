var status = -1;
var OpenMob = "每日擊殺挑戰開始";
var objDate = new Date();
var Month = objDate.getMonth();
var MonthS = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
var tzc = objDate.getDate();
var day = objDate.getDay();
var Year = objDate.getFullYear();



var log = "每日擊殺挑戰";
var weekday = [
	["本日需要挑戰擊殺次數為", 10],//七
	["本日需要挑戰擊殺次數為", 5],//一
	["本日需要挑戰擊殺次數為", 20],//二
	["本日需要挑戰擊殺次數為", 30],//三
	["本日需要挑戰擊殺次數為", 40],//四
	["本日需要挑戰擊殺次數為", 50],//五
	["本日需要挑戰擊殺次數為", 60],//六

];



//簽到要發的物品
var reward_item = [
	//禮拜七
	[
		[4460000, 1, -1],
		[5220000, 1, -1],
		[5220010, 1, -1],
		[5220040, 1, -1],
	],
	//禮拜一
	[
		[4460000, 1, -1],
		[5220000, 1, -1],
		[5220010, 1, -1],
		[5220040, 1, -1],
	],
	//禮拜二
	[
		[4460000, 1, -1],
		[5220000, 1, -1],
		[5220010, 1, -1],
		[5220040, 1, -1],
	],
	//禮拜三
	[
		[4460000, 1, -1],
		[5220000, 1, -1],
		[5220010, 1, -1],
		[5220040, 1, -1],
	],
	//禮拜四
	[
		[4460000, 1, -1],
		[5220000, 1, -1],
		[5220010, 1, -1],
		[5220040, 1, -1],
	],
	//禮拜五
	[
		[4460000, 1, -1],
		[5220000, 1, -1],
		[5220010, 1, -1],
		[5220040, 1, -1],
	],
	//禮拜六
	[
		[4460000, 1, -1],
		[5220000, 1, -1],
		[5220010, 1, -1],
		[5220040, 1, -1],
	],

];
//點數放這裡 第一格填1 = gash 2 = 楓幣 ,第2格填數量   0 = 不發點數
var points = [2, 200];



function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	//var name = cm.getPlayer().getName();
	if (mode == 1) {
		status++;
	} else if (mode == 0) {
		status--;
	} else {
		cm.dispose();
		return;
	}

	if (status == 0) {
		次數介紹 = weekday[day][0];
		次數數量 = weekday[day][1];
		if (cm.getPlayer().getPrizeLog("" + Year + "年" + MonthS[Month] + tzc + "日" + log + "") >= 1) {
			cm.sendOk("您的角色今日已經領取每日擊殺任務獎勵了哦！");
			cm.safeDispose();
		}
		if (cm.getPlayer().getPrizeLog("" + Year + "年" + MonthS[Month] + tzc + "日" + OpenMob + "") == 0) {
			PlayName = cm.getChar().getName();
			apqpontos = cm.getPlayer().getCharInfoNum("每日任務怪物擊殺");
			cm.getPlayer().setCharInfoNum("每日任務怪物擊殺",0);		
			cm.getPlayer().setPrizeLog("" + Year + "年" + MonthS[Month] + tzc + "日" + OpenMob + "");//這邊是設定玩家每日擊殺開始
			cm.sendOk("您已開始每日怪物擊殺任務\r\n請在今天結束前達到當日擊殺需求吧！！"); //最後訊息 *
			cm.dispose();

		}
		if (cm.getPlayer().getPrizeLog("" + Year + "年" + MonthS[Month] + tzc + "日" + OpenMob + "") >= 1) {	
			apqpontos = cm.getPlayer().getCharInfoNum("每日任務怪物擊殺");
			var msg = "";
				msg += "" + 次數介紹 + "  " + 次數數量 + "  次\r\n" + 
					   "本日已累積擊殺次數為 "+apqpontos+" 隻\r\n" +
						"\r\n完成後可獲得獎勵如下：\r\n\r\n";
			for (var i = 0; i < reward_item[day].length; i++){			
				msg += "【 #i" + reward_item[day][i][0] + "# 】 - #z" + reward_item[day][i][0] + "# - " + reward_item[day][i][1] + "個\r\n";
				}
				msg += "\r\n點數 " + points[1] + " 點\r\n";
			cm.sendYesNo(msg);
		}

	} else if (status == 1) {
		apqpontos = cm.getPlayer().getCharInfoNum("每日任務怪物擊殺");
		if (apqpontos < 次數數量) {
			cm.sendOk("您的擊殺數量不足。");
			cm.dispose();
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
				cm.getPlayer().modifyCSPoints(points[0], points[1], true); //領取點數
			}
			for (var i = 0; i < reward_item[day].length; i++) {
				cm.gainItem(reward_item[day][i][0], reward_item[day][i][1], reward_item[day][i][2]);
			}
			cm.getPlayer().addActive(Year + "年" + MonthS[Month] + tzc + "日" + log, 1);
			cm.getPlayer().setPrizeLog("" + Year + "年" + MonthS[Month] + tzc + "日" + log + "");//這邊是設定玩家帳號已領過記錄
			cm.sendOk("#b每日擊殺獎勵已發放！請記得每天都要來領取哦"); //最後訊息 *
			cm.worldMessage("" + cm.getName() + " 順利完成每日擊殺任務，領取到豐厚的獎勵。大夥兒快來解！！");
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