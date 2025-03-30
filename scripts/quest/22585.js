/*
2018.11.19 修復by bobo 任務:騎寵 補齊對話
*/
var status = -1;

function start(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		if (status == 7) {
			qm.sendNext("給你技能點數你還不要?");
			qm.dispose();
			return;
		}
		status--;
	}
	if (status == 0) {
		qm.sendNext("為什麼必須要將 自由之靈 放在 天空露臺 裡面，為什麼必須要消滅 門鎖 怪物， 門鎖 最後說的話到底是什麼意思。黑色翅膀真的是一個好團體嗎？有點值得懷疑…");
	} else if (status == 1) {
		qm.forceStartQuest();
		qm.forceCompleteQuest();
		qm.getPlayer().gainSP(1, 5);
		qm.dispose();
	}
}

function end(mode, type, selection) {
	qm.forceStartQuest();
	qm.forceCompleteQuest();
	qm.getPlayer().gainSP(1, 5);
	qm.dispose();
}