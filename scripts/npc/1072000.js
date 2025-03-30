/*  Author: Yud1
    NPC Name:        劍士轉職教官
    Map(s):          維多利亞 : 西部岩山 (102020300)
    Description:     劍士二轉教官
	Custom Quest:    
*/
var status;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
	} else {
        if (mode == 1) { status++; } else { status--; }

		if (cm.haveItem(4031008)) {
			if (status == 0)
				cm.sendNext("噢, 你是 #b武術教練#k 介紹來的嗎")
			else if (status == 1)
				cm.sendNextPrev("所以你要證明你的實力嗎 ? 很好...");
			else if (status == 2)
				cm.sendNextPrev("我可以給你一次機會,請你加油.");
			else if (status == 3)
				cm.sendYesNo("請給我 #b30顆#z4031013##k. 祝你好運.");
			else if (status == 4) {
				cm.gainItem(4031008, -1);
				cm.warp(108000300, 0);
				cm.dispose();
			}
		} else {
			cm.sendOk("很抱歉,我需要 #b武術教練的信件#k 請去找武術教練拿取謝謝");
			cm.dispose();
		}
    }
}