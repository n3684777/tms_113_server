/* 與假面紳士的對話 */
/* By 宗達 */
var status = -1;

function start(mode, type, selection) {
	qm.forceStartQuest();
	qm.dispose();
}

function end(mode, type, selection) {
	if (qm.getPlayer().getQuestStatus(9927) == 0) {
		qm.forceStartQuest();
	} else if (qm.getPlayer().getQuestStatus(9927) == 1) {
		qm.forceCompleteQuest();
	}
	qm.dispose();
}
