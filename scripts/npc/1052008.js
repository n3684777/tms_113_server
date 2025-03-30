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
        if (cm.getQuestStatus(2055) == 1) {
            cm.gainItem(4031039, 1);
            cm.warp(103000100, 0);
        } else {
            var rand = 1 + Math.floor(Math.random() * 6);
            if (rand == 1) {
                cm.gainItem(4010003, 2);
            } else if (rand == 2) {
                cm.gainItem(4010000, 2);
            } else if (rand == 3) {
                cm.gainItem(4010002, 2);
            } else if (rand == 4) {
                cm.gainItem(4010005, 2);
            } else if (rand == 5) {
                cm.gainItem(4010004, 2);
            } else if (rand == 6) {
                cm.gainItem(4010001, 2);
            }
            cm.warp(103000100, 0);
        }
        cm.dispose();
    }
}	