
var status = -1;

function start(mode, type, selection) {}

function end(mode, type, selection) {
	status++;
	if (qm.getQuestStatus(6033) == 1) {
		if(status == 0){
			qm.sendYesNo("好吧，雖然不是很滿意，就讓你通過了吧!!以後一定要注意改進阿!\r\n\r\n\r\n"+"#fUI/UIWindow.img/QuestIcon/4/0#\r\n"+
			"#s1007##q1007# (等級2)\r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 230000 exp");
		} else if(status == 1){
			qm.teachSkill(1007, 2, 3);
			qm.teachSkill(10001007, 2, 3);
			qm.teachSkill(20001007, 2, 3);
			qm.gainExp(230000);
			qm.forceCompleteQuest();
			qm.dispose();
		}
	} else if(qm.getQuestStatus(6033) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	}

	
}
