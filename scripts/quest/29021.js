/* By 宗達 */
function end(mode, type, selection) {
	if (qm.getQuestStatus(29021) == 0) {
		qm.forceStartQuest();
	}
	qm.dispose();
}
