

function start() {
    action(1, 0, 0);
}

var status = -1;

function action(mode, type, selection) {
    if (mode == 0 && status == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        var msg = "";
        msg += "#d您好，歡迎來到楓之谷。";
        cm.sendNext(msg);
    } 
}