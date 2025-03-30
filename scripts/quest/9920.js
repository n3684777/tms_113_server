/* 假面紳士的邀請 */
/* By 宗達 */

var status = -1;

function start(mode, type, selection) {
	qm.forceStartQuest();
	qm.dispose();
}

function end(mode, type, selection) {
	if (qm.getPlayer().getQuestStatus(9920) == 0) {
		qm.forceStartQuest();
	} else if (qm.getPlayer().getQuestStatus(9920) == 1) {
		qm.forceCompleteQuest();
	}
	qm.dispose();
}
