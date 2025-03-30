var status = -1;
//this quest is WHERES BOOK
function start(mode, type, selection) {
	qm.sendNext("書已經借給了墮落城市的伊卡路斯了，去找他拿吧.");
	qm.forceStartQuest();
	qm.dispose();
}

function end(mode, type, selection) {
	qm.gainExp(500);
	qm.forceCompleteQuest();
	qm.dispose();
}