function start() {
    status = -1;
    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (status >= 2 && mode == 0) {
        cm.sendOk("Alright, see you next time.");
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        if (cm.getQuestStatus(2051) == 1 && !cm.haveItem(4031032)) {
            cm.gainItem(4031032, 1);
        } else {
            var rand = 1 + Math.floor(Math.random() * 4);
            if (rand == 1) {
                cm.gainItem(4020007, 2);
            } else if (rand == 2) {
                cm.gainItem(4020008, 2);
            } else if (rand == 3) {
                cm.gainItem(4010006, 2);
            } else if (rand == 4) {
                cm.gainItem(1032013, 1);
            }
        }
        cm.warp(101000000, 0);
        cm.dispose();
    }
}	