
var status = -1;

function start(mode, type, selection) {}

function end(mode, type, selection) {
	status++;
	if (qm.getQuestStatus(6036) == 1) {
		if (status == 0) {
			qm.sendYesNo("啊!你!你真的強化合成出來了! 這就是我想要的強化合成的黃金鐵砧!!把這個給我可以嗎?\r\n\r\n\r\n" + "#fUI/UIWindow.img/QuestIcon/4/0#\r\n" +
				"#s1007##q1007# (等級3)\r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 960000 exp");
		} else if (status == 1) {
			if (!qm.haveItem(4031980, 1)) {
				qm.sendNext("請檢查背包是否有#v4031980#");
			} else {
				qm.teachSkill(1007, 3, 3);
				qm.teachSkill(10001007, 3, 3);
				qm.teachSkill(20001007, 3, 3);
				qm.gainItem(4031980, -1);
				qm.gainExp(960000);
				qm.forceCompleteQuest();
			}
			qm.dispose();
		}
	} else if (qm.getQuestStatus(6036) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	}

}
