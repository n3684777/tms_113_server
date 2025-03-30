var status = -1;
var log = "每日紅利任務";
var objDate = new Date();
var Month = objDate.getMonth();
var MonthS = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
var tzc = objDate.getDate();
var day = objDate.getDay();
var Year = objDate.getFullYear();


var 需要物品 = [
	[4000001, 10], 
	[4000002, 2], 
	[4000003, 5], 
]



//要發的物品
var reward_item = [
	[4000001, 50, -1],
];
//點數放這裡 第一格填1 = gash 2 = 楓幣 ,第2格填數量   0 = 不發點數
var points = [2, 0];

var 紅利點數 = 100;

function start() {
	action(1, 0, 0);
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

	if (status == 0) {

		if (cm.getPlayer().getPrizeLog("" + Year + "年" + MonthS[Month] + tzc + "日" + log + "") >= 1) {
			cm.sendOk("您的角色今日已經領取每日任務獎勵了哦！");
			cm.safeDispose();
		}
		var msg = "";
			msg += "每日紅利任務需要\r\n\r\n#i" + 需要物品[0][0] + "# 【#z" + 需要物品[0][0] + "#】　－　" + 需要物品[0][1] + "　個\r\n"+
				   "#i" + 需要物品[1][0] + "# 【#z" + 需要物品[1][0] + "#】　－　" + 需要物品[1][1] + "　個\r\n"+
				   "#i" + 需要物品[2][0] + "# 【#z" + 需要物品[2][0] + "#】　－　" + 需要物品[2][1] + "　個\r\n\r\n"+
				   "可獲得獎勵如下：\r\n\r\n";
		for (var i = 0; i < reward_item.length; i++)			
			msg += "#i" + reward_item[i][0] + "#  #z" + reward_item[i][0] + "# - " + reward_item[i][1] + "個\r\n";
			msg += "\r\n紅利點數 "+紅利點數+" 點";
		cm.sendYesNo(msg);

	} else if (status == 1) {
		if (!cm.haveItem(需要物品[0][0], 需要物品[0][1]) || !cm.haveItem(需要物品[1][0], 需要物品[1][1]) || !cm.haveItem(需要物品[2][0], 需要物品[2][1]) ) {
			cm.sendOk("您所需的物品不足!");
		} else {
			for (var i = 0; i < reward_item.length; i++) {
				if (!cm.canHold(reward_item[i][0], reward_item[i][1])) {
					cm.sendOk("請確認你的物品欄位還有空間。");
					cm.dispose();
					return;
				}
			}
			if (points[1] > 0) {
				cm.getPlayer().modifyCSPoints(points[0], points[1], true); 
			}
			for (var i = 0; i < reward_item.length; i++) {
				if (reward_item[i][2] !== undefined) {
					cm.gainItem(reward_item[i][0], reward_item[i][1], reward_item[i][2]);
				} else {
					cm.gainItem(reward_item[i][0], reward_item[i][1]);
				}
			}

			cm.gainItem(需要物品[0][0], -需要物品[0][1]);
			cm.gainItem(需要物品[1][0], -需要物品[1][1]);
			cm.gainItem(需要物品[2][0], -需要物品[2][1]);
			if (紅利點數 > 0) {
			var point = cm.getPlayer().getDividend();
			cm.getPlayer().setDividend(紅利點數);
			}
			cm.getPlayer().setPrizeLog("" + Year + "年" + MonthS[Month] + tzc + "日" + log + "");
			cm.sendOk("#b本日每日任務獎勵已發放！請記得每天都要來領取哦"); //最後訊息 *
			cm.worldMessage("" + cm.getName() + " 完成每日紅利任務，獲得豐厚獎勵。大夥兒快來解！！");
			cm.dispose();
		}

	} else {
		cm.dispose();
	}
}
