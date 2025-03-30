/* global cm */

var slot;
var status = -1;
var 所需在現時間 = 60;

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode === 1) {
		status++;
	} else if (mode === 0) {
		status--;
	} else {
		cm.dispose();
		return;
	}

	if (status === 0) {
		TimeOnline = cm.getChar().getName();
		cm.sendGetNumber("每 "+所需在現時間+" 分在線時間可以兌換 1 隻  #i4032226#\r\n您目前有#b【"+cm.TimeOnline(TimeOnline)+"】#k 分\r\n\r\n請輸入想要兌換的顆數. \r\n請注意身上背包的空間#k", 1, 1, 100);
	} else if (status === 1) {
		slot = selection;
		apqpontos = cm.TimeOnline(TimeOnline);
		if (apqpontos >= 所需在現時間 * slot) {
			cm.sendYesNo("你確定要兌換嗎？？");
		}else{
			cm.sendNext("您的在線時間不夠哦");
			cm.dispose();
			return;
		}
		
	} else if (status === 2) {
		if (!cm.canHold(4032226, slot)) {
			cm.sendNext("背包空間不足。");
			cm.dispose();
			return;
		}
		cm.setTimeOnline(TimeOnline,-所需在現時間*slot);

		cm.gainItem(4032226, slot);
		cm.sendOk("#b恭喜你成功拉!快快看你的包裹吧!#k");
		cm.dispose();
	} else {
		cm.dispose();
	}
}
