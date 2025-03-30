
var status = -1;

function start(mode, type, selection) {}

function end(mode, type, selection) {
	if (qm.getQuestStatus(6031) == 1) {
		qm.forceCompleteQuest();
	} else if (qm.getQuestStatus(6031) == 0) {
		qm.forceStartQuest();
	}
	var quest1 = (qm.getQuestStatus(6030) == 2 ? "1" : "0");
	var quest2 = (qm.getQuestStatus(6031) == 2 ? "1" : "0");
	var quest3 = (qm.getQuestStatus(6032) == 2 ? "1" : "0");
	var mainquest = qm.getQuestRecord(6029);
	mainquest.setCustomData(quest1 + quest2 + quest3);
	qm.getPlayer().updateQuest(mainquest, true);
	
	qm.dispose();
}
