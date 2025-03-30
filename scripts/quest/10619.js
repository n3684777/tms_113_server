
var status = -1;

function start(mode, type, selection) {
	qm.forceUpdateStartQuest();
	qm.dispose();
}

function end(mode, type, selection) {
	if (mode == 1) {
		status++
	} else {
		qm.dispose();
		return;
	}
	if (qm.haveItem(3994193, 1)) {
		if (status == 0) {
			qm.sendNext("選一個吧\r\n\r\n#L0##v2022694##t2022694##l\r\n#L1##v2450018##t2450018#");
		} else if (status == 1) {
			if (!qm.canHold(2022694, 1)) {
				qm.sendNext("背包太滿了");
				qm.dispose();
				return;
			}
			qm.gainItem(3994193, -1);
			if (selection == 0) {
				qm.gainItem(2022694, 1);
				qm.sendNext("領取獎勵#v2022694:#成功");
			} else if (selection == 1) {
				qm.gainItem(2450018, 1);
				qm.sendNext("領取獎勵#v2450018:#成功");
			}

			qm.forceCompleteQuest(10619);
			qm.dispose();
		}
		
	}else{
		qm.dispose();
	}

}
