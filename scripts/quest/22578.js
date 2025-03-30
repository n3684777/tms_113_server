//對於秘密團體的疑問

function start(mode, type, selection) {
	qm.forceStartQuest();
	qm.gainExp(10000);
	qm.getPlayer().gainSP(2, 4);
	qm.forceCompleteQuest();
	qm.dispose();
}
