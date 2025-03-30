/* 影武者的一級秘密！*/
/* By 宗達 */
function start(mode, type, selection) {}

function end(mode, type, selection) {
	if (qm.getQuestStatus(10620) == 0) {
		qm.forceStartQuest();
	} else if (qm.getQuestStatus(10620) == 1) {
		if (!qm.haveItem(4032630, 20)) {
			qm.sendNext("還沒收集到#v4032630#20個嗎?");
		} else {
			qm.gainItem(4032630, -20);
			Reward();
			qm.forceCompleteQuest();
		}
	}
	qm.dispose();
}

function Reward() {
	var random = rand(1, 3);
	switch (random) {
	case 1:
		qm.getPlayer().gainExp(qm.getPlayer().getLevel() * 100, true, true, false);
		break;
	case 2:
		qm.getPlayer().gainMeso(qm.getPlayer().getLevel() * 100, true);
		break;
	case 3:
		qm.getPlayer().gainExp(qm.getPlayer().getLevel() * 200, true, true, false);
		break;
	}
}

function rand(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min); ;
}
