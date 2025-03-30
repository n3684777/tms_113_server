var status = -1;
//this quest is NELLA INVESTIGATION
function start(mode, type, selection) {
	qm.sendNext("讓我們來談談這個城市吧.");
	qm.forceStartQuest();
	qm.dispose();
}

function end(mode, type, selection) {
	qm.gainExp(4000);
	qm.forceCompleteQuest();
	qm.dispose();
}