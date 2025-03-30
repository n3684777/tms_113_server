var status = -1;
var log = "金勾海賊團組隊任務";
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

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
		cm.removeAll(4001117);
		cm.removeAll(4001120);
		cm.removeAll(4001121);
		cm.removeAll(4001122);
		cm.sendSimple("#b#L0#我要離開#l\r\n#L1#我要兌換海賊王帽子#l#k");
    } else if (status == 1) {
		if (selection == 0) {
			cm.warp(251010404,0);
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
			var cmp = cm.getPlayer().getOneInfo(1204, "cmp");
			var have0 = cm.getPlayer().getOneInfo(1204, "have0");
			var have1 = cm.getPlayer().getOneInfo(1204, "have1");
			var have2 = cm.getPlayer().getOneInfo(1204, "have2");
			var have3 = cm.getPlayer().getOneInfo(1204, "have3");
			if (cmp == null) {
				cm.sendOk("30 場海盜PQ = #t1002571#\r\n80 場海盜PQ = #t1002572#\r\n200 場海盜PQ = #t1002573#\r\n350 場海盜PQ = #t1002574#");
			} else {
				var cmp_i = parseInt(cmp);
				var have0_i = parseInt(have0);
				var have1_i = parseInt(have1);
				var have2_i = parseInt(have2);
				var have3_i = parseInt(have3);
				if (have3_i > 0) {
					if (cm.canHold(1002574,1)) {
						cm.gainItem(1002574,1);
						cm.sendOk("我已經給你帽子了。");
					} else {
						cm.sendOk("我已經給你帽子了但如果你想要其它的，請清出裝備欄空間。");
					}
				} else if (have2_i > 0) {
					if (cmp_i >= 350) {
						if (cm.canHold(1002574,1)) {
							cm.gainItem(1002574,1);
							cm.sendOk("我已經給你帽子了。");
						} else {
							cm.sendOk("請清出裝備欄空間。");
						}
					} else {
						cm.sendOk("你需要有玩30場 目前總共 : " + cmp_i);
					}
				} else if (have1_i > 0) {
					if (cmp_i >= 200) {
						if (cm.canHold(1002573,1)) {
							cm.gainItem(1002573,1);
							cm.sendOk("我已經給你帽子了。");
						} else {
							cm.sendOk("請清出裝備欄空間。");
						}
					} else {
						cm.sendOk("你需要有玩200場 目前總共 : " + cmp_i);
					}
				} else if (have0_i > 0) {
					if (cmp_i >= 80) {
						if (cm.canHold(1002572,1)) {
							cm.gainItem(1002572,1);
							cm.sendOk("我已經給你帽子了。");
						} else {
							cm.sendOk("請清出裝備欄空間。");
						}
					} else {
						cm.sendOk("你需要有玩80場 目前總共 : " + cmp_i);
					}
				} else {
					if (cmp_i >= 30) {
						if (cm.canHold(1002571,1)) {
							cm.gainItem(1002571,1);
							cm.sendOk("我已經給你帽子了。");
						} else {
							cm.sendOk("請清出裝備欄空間。");
						}
					} else {
						cm.sendOk("你需要有玩30場 目前總共 : " + cmp_i);
					}
				}
	    	}
		}
	cm.dispose();
    }
}

function getRandom(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}