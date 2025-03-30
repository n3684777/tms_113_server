var status = -1;
//TEMPORARY QUEST NOW SKIPPING
//this quest is THE PAST
function start(mode, type, selection) {
	qm.forceStartQuest();
	qm.forceStartQuest(22601, "1");
	//qm.forceCompleteQuest();
	qm.dispose();
}

function end(mode, type, selection) {
	qm.forceStartQuest();
	//qm.forceCompleteQuest();
	qm.dispose();
}