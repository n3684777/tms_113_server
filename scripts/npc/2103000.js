var status = -1;

function action(mode, type, selection) {
    if (cm.isQuestActive(3900)) {
	cm.forceCompleteQuest(3900);
	cm.gainExp(300);
	cm.playerMessage(5, "你喝的是綠洲的水。");
    }
    cm.dispose();
}