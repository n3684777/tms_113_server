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
        if (cm.getQuestStatus(2050) == 1 && !cm.haveItem(4031020)) {
            cm.gainItem(4031020, 1);
            cm.warp(101000000, 0);
        } else {
            var rand = 1 + Math.floor(Math.random() * 7);
            if (rand == 1) {
                cm.gainItem(4020005, 2);
            } else if (rand == 2) {
                cm.gainItem(4020006, 2);
            } else if (rand == 3) {
                cm.gainItem(4020004, 2);
            } else if (rand == 4) {
                cm.gainItem(4020001, 2);
            } else if (rand == 5) {
                cm.gainItem(4020003, 2);
            } else if (rand == 6) {
                cm.gainItem(4020000, 2);
            } else if (rand == 7) {
                cm.gainItem(4020002, 2);
            }
            cm.warp(101000000, 0);
        }
        cm.dispose();
    }
}	