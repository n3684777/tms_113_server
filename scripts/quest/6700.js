/* 弓箭手之路 */
/* By 宗達 */
function start(mode, type, selection) {
	qm.forceStartQuest();
	qm.dispose();
}

function end(mode, type, selection) {
	if(qm.getPlayer().getQuestStatus(6700) == 0){
		qm.forceStartQuest();
	}else if(qm.getPlayer().getQuestStatus(6700) == 1){
		qm.forceCompleteQuest();
	}
	qm.dispose();
}