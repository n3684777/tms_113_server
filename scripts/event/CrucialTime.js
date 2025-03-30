var status = -1;

var item = new Array(3012001, 3012001);

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        cm.dispose();
        return;
    }
    switch (status) {
        case 0:
        {
            cm.gainItem(item[Math.floor(Math.random() * item.length)], 1);
            cm.getPlayer().dropMessage(1, "趕緊檢查您的欄位，有意想不到的驚喜 !");
            cm.dispose();
            break;
        }
    }
}