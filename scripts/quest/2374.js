var status = -1;
function end(mode, type, selection) {
	if (qm.getQuestStatus(2374) == 0) {
		qm.forceStartQuest();
	} else if (qm.getQuestStatus(2374) == 1) {
		if (qm.canHold(1132021, 1)) {
			if (qm.haveItem(4032619, 1)) {
				qm.gainItem(4032619, -1)
				qm.forceCompleteQuest();
				if (qm.getJob() == 431) {
					qm.changeJob(432);
					qm.gainItem(1132021, 1);
					qm.sendNext("你已經成功轉職為上忍.");
				}
			}
		} else {
			qm.sendNext("請在裝備欄空出一格空間.");
		}
	}

	qm.dispose();
}

function start(mode, type, selection) {
	qm.dispose();
}
