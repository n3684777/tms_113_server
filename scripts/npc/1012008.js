var select;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode < 1) {
        cm.dispose();
        return;
    } else if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        cm.sendSimple("嘿！你好像打獵打累了？享受快樂生活是我的信念。怎麼樣？只要有幾種道具，我就給你更換能玩小遊戲的道具。嗯。。。幫你甚麼好呢？\r\n#b#L0#製作小遊戲道具#l\r\n#b#L1#聽聽小遊戲的說明#l");
    } else if (status == 1) {
        if (selection == 0) {
            cm.sendSimple("請問想要做哪種小遊戲呢？？\r\n\r\n#b#L2#五子棋#l#k\r\n#b#L3#找碴#l#k");
        } else if (selection == 1) {
            cm.sendSimple("你要聽哪種小遊戲呢？？\r\n\r\n#b#L4#五子棋#l#k\r\n#b#L5#找碴#l#k");
        }
    } else if (status == 2) {
        if (selection != null)
            select = selection;
        if (select == 2) {
            cm.sendNext("請準備好材料。");
        } else if (select == 3) {
            if (!cm.haveItem(4030012, 15)) {
                cm.sendNext("請準備好材料。 找碴需要 #b15#k 張#t4030012# ！");
                cm.dispose();
                return;
            } else {
                cm.gainItem(4030012, -15);
                cm.gainItem(4080100, 1);
                cm.dispose();
            }
        } else if (select == 4) {
            cm.sendOk("自己#e#rGoogle#k!");
            cm.dispose();
        } else if (select == 5) {
            cm.sendOk("自己#e#rGoogle#k!");
            cm.dispose();
        }
    } else if (status == 3) {
        if (select == 2) {
            cm.sendSimple("那麼，你想要做哪種形狀的五子棋呢？？\r\n#b#L6##t4080000##l#k\r\n#b#L7##t4080001##l#k\r\n#b#L8##t4080002##l#k\r\n#b#L9##t4080003##l#k\r\n#b#L10##t4080004##l#k\r\n#b#L11##t4080005##l#k");
        }
    } else if (status == 4) {
        if (selection == 6) {
            if (!cm.haveItem(4030000, 99) || !cm.haveItem(4030001, 99) || !cm.haveItem(4030009, 1)) {
                cm.sendNext("請準備好材料。 #t4080000#需要 #b99#k 個#t4030000#和#t4030001# 和 #b1#k 個 #t4030009# ！");
            } else {
                cm.gainItem(4030000, -99);
                cm.gainItem(4030001, -99);
                cm.gainItem(4030009, -1);
                cm.gainItem(4080000, 1);
                cm.sendOk("恭喜製作完成#t4080000#。");
            }
        } else if (selection == 7) {
            if (!cm.haveItem(4030000, 99) || !cm.haveItem(4030010, 99) || !cm.haveItem(4030009, 1)) {
                cm.sendNext("請準備好材料。 #t4080001#需要 #b99#k 個#t4030000#和#t4030010# 和 #b1#k 個 #t4030009# ！");
            } else {
                cm.gainItem(4030000, -99);
                cm.gainItem(4030010, -99);
                cm.gainItem(4030009, -1);
                cm.gainItem(4080001, 1);
                cm.sendOk("恭喜製作完成#t4080001#。");
            }
        } else if (selection == 8) {
            if (!cm.haveItem(4030000, 99) || !cm.haveItem(4030011, 99) || !cm.haveItem(4030009, 1)) {
                cm.sendNext("請準備好材料。 #t4080002#需要 #b99#k 個#t4030000#和#t4030011# 和 #b1#k 個 #t4030009# ！");
            } else {
                cm.gainItem(4030000, -99);
                cm.gainItem(4030011, -99);
                cm.gainItem(4030009, -1);
                cm.gainItem(4080002, 1);
                cm.sendOk("恭喜製作完成#t4080002#。");
            }
        } else if (selection == 9) {
            if (!cm.haveItem(4030010, 99) || !cm.haveItem(4030001, 99) || !cm.haveItem(4030009, 1)) {
                cm.sendNext("請準備好材料。 #t4080003#需要 #b99#k 個#t4030010#和#t4030001# 和 #b1#k 個 #t4030009# ！");
            } else {
                cm.gainItem(4030010, -99);
                cm.gainItem(4030001, -99);
                cm.gainItem(4030009, -1);
                cm.gainItem(4080003, 1);
                cm.sendOk("恭喜製作完成#t4080003#。");
            }
        } else if (selection == 10) {
            if (!cm.haveItem(4030011, 99) || !cm.haveItem(4030010, 99) || !cm.haveItem(4030009, 1)) {
                cm.sendNext("請準備好材料。 #t4080004#需要 #b99#k 個#t4030011#和#t4030010# 和 #b1#k 個 #t4030009# ！");
            } else {
                cm.gainItem(4030011, -99);
                cm.gainItem(4030010, -99);
                cm.gainItem(4030009, -1);
                cm.gainItem(4030004, 1);
                cm.sendOk("恭喜製作完成#t4080004#。");
            }
        } else if (selection == 11) {
            if (!cm.haveItem(4030011, 99) || !cm.haveItem(4030001, 99) || !cm.haveItem(4030009, 1)) {
                cm.sendNext("請準備好材料。 #t4080005#需要 #b99#k 個#t4030011#和#t4030001# 和 #b1#k 個 #t4030009# ！");
            } else {
                cm.gainItem(4030011, -99);
                cm.gainItem(4030001, -99);
                cm.gainItem(4030009, -1);
                cm.gainItem(4080005, 1);
                cm.sendOk("恭喜製作完成#t4080005#。");
            }
        }
        cm.dispose();
    }
}