function start() {
    if (cm.getQuestStatus(28177) == 1 && !cm.haveItem(4032479)) {
        cm.gainItem(4032479, 1);
    }
    cm.sendNext("Go through here and you'll find the Center Dungeon of Victoria Island. Please be careful...");
    cm.dispose();
}