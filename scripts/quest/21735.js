var skill = 21100005;

function start(mode, type, selection) {
	qm.forceStartQuest();
}

function end(mode, type, selection) {
	if (qm.getPlayer().getSkillLevel(skill) == 0) {
		qm.teachSkill(skill, 0, 20);
	}
	qm.forceCompleteQuest();
}
