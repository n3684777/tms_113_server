var status = -1;
function end(mode, type, selection) {
	if (qm.getQuestStatus(2369) == 0) {
		qm.forceStartQuest();
	} else if (qm.getQuestStatus(2369) == 1) {
		if (qm.haveItem(4032617, 1)) {
			if (qm.getJob() == 430) {
				qm.changeJob(431);
				qm.sendNext("你已經成功轉職為中忍.");
			}
			qm.gainItem(4032617, -1)
			qm.forceCompleteQuest();
		}else{

		}qm.sendNext("你尚未完成任務,缺少#i4032617#");
		qm.dispose();

	}
	qm.dispose();
}

function start(mode, type, selection) {
	qm.dispose();
}
