var status = -1;
var amount = -1;
var items = [[2000002, 310], [2022003, 1060], [2022000, 1600], [2001000, 3120]];
var item;
function start() {
    if (cm.getQuestStatus(2013))
        cm.sendNext("這是你...謝謝你，我能得到很多完成。現在我已經做了一堆物品。如果你需要什麼，讓我知道.");
    else {
        if (cm.getQuestStatus(2010))
            cm.sendNext("你似乎沒有強大到足以能夠購買我的藥水......");
        else
            cm.sendOk("需要完成任務才可以跟我買藥水喔!");
        cm.dispose();
    }
}
function action(mode, type, selection) {
    status++;
    if (mode != 1) {
        if (mode == 0 && type == 1)
            cm.sendNext("我仍然有不少你以前把我的材料。這些項目都存在這樣把你的時間選擇...");
        cm.dispose();
        return;
    }
    cm.dispose();
}