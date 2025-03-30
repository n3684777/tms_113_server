function action(mode, _type, selection) {
    if (mode == 1) {
        status++;
    } else {
        cm.dispose();
        return;
    }

    switch (status) {
        case 0:
            cm.sendYesNo("目前我沒有功能哦~");
            break;
        }
    }
}
