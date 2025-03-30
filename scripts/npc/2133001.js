var status = -1;
var log = "毒霧森林組隊任務";
var objDate = new Date();
var Month = objDate.getMonth();
var MonthS = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
var tzc = objDate.getDate();
var day = objDate.getDay();
var Year = objDate.getFullYear();

var 每日獎勵領取上限次數 = 999;

// 不需給獎勵的最小、最大填寫0
var GASH最小值 = 0;
var GASH最大值 = 0;
var 楓葉點數最小值 = 0;
var 楓葉點數最大值 = 0;
var 紅利點數最小值 = 0;
var 紅利點數最大值 = 0;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }
    switch(cm.getPlayer().getMapId()) {
		case 930000000:
			cm.sendNext("歡迎，請進入。");
			break;
		case 930000100:
			cm.sendNext("我們必須消除所有這些怪物的污染！");
			break;
		case 930000200:
			cm.sendNext("我們必須消除所有這些被污染的反應堆！");
			break;
		case 930000300:
			cm.warpParty(930000400);
			break;
		case 930000400:
			if (cm.haveItem(4001169,10)) {
				cm.warpParty(930000500, 0);
				cm.gainItem(4001169,-10);
			} else if (!cm.haveItem(2270004)) {
				cm.gainItem(2270004,10);
				cm.sendOk("請淨化這些怪物");
			} else {
				cm.sendOk("請給我10個怪物株!");
			}
			break;
		case 930000600:
			cm.sendNext("就是這個！");
			break;
		case 930000700:
			if (cm.canHold(4001198,1)) {
				cm.gainItem(4001198,1);
				cm.gainExp(52000);
				cm.getPlayer().endPartyQuest(1206);
				cm.removeAll(4001161);
				cm.removeAll(4001162);
				cm.removeAll(4001163);
				cm.removeAll(4001164);
				cm.removeAll(4001169);
				cm.removeAll(2270004);
				cm.warp(930000800,0);
				var 每日組隊紀錄 = ""+ Year + "年"+ MonthS[Month] + tzc + "日"+ log + "";
				if (cm.getBossLog(每日組隊紀錄) <= 每日獎勵領取上限次數) {
					cm.setBossLog(每日組隊紀錄);//每日組隊紀錄
					var gash = getRandom(GASH最小值, GASH最大值);
					var 楓葉點數 = getRandom(楓葉點數最小值, 楓葉點數最大值);
					var 紅利點數 = getRandom(紅利點數最小值, 紅利點數最大值);
					if (gash > 0) {
						cm.getPlayer().modifyCSPoints(1, gash, true);
					}
					if (楓葉點數 > 0) {
						cm.getPlayer().modifyCSPoints(2, 楓葉點數, true);
					}
					if (紅利點數 > 0) {
						cm.getPlayer().setDividend(紅利點數);
					}

					cm.gainItem(4310224, 1);//組隊硬幣
				}
			} else {
				cm.getPlayer().dropMessage(5, "請確認你的其他欄有沒有滿");
			}
			break;
    }
    cm.dispose();
}

function getRandom(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}