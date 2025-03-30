var status = -1;
// 秘密團體加入條件1

function start(mode, type, selection) {
	qm.sendNext("請到#b黑森林狩獵場II#k殺死#r風獨眼獸150隻#k.");
	qm.forceStartQuest();
	qm.dispose();
}

function end(mode, type, selection) {
	qm.gainExp(2300);
	qm.forceCompleteQuest();
	qm.dispose();
}