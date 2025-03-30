status = -1;
close = false;
oldSelection = -1;
function start() {
    var text = "這裡是檢票口";
    if (cm.haveItem(4031713) || cm.haveItem(4031036) || cm.haveItem(4031037) || cm.haveItem(4031038))
        text += " 你要使用這票??#b";
    else
        close = true;
    if (cm.haveItem(4031713))
        text += "\r\n#L3##t4031713#";
    for (var i = 0; i < 3; i++)
        if (cm.haveItem(4031036 + i))
            text += "\r\n#L" + i + "##t" + (4031036 + i) + "#";
    if (close) {
        cm.sendOk(text);
        cm.dispose();
    } else
        cm.sendSimple(text);
}
function action(mode, type, selection) {
    status++;
    if (mode != 1) {
        if (mode == 0)
            cm.sendNext("你必須有一些經濟負擔，對吧？");
        cm.dispose();
        return;
    }
    if (status == 0) {
        if (selection == 3) {
            var em = cm.getEventManager("Subway");
            if (em.getProperty("entry") == "true")
                cm.sendYesNo("它看起來像有足夠的空間用於這搭。請將您的車票準備好，所以我可以讓你的車程將是漫長的，但你會得到你的目的地就好了。你怎麼看？你想要得到這個拼車？");
            else {
                cm.sendNext("我們停止接收票前1分鐘了，所以請務必要在這裡的時間。");
                cm.dispose();
            }
        } else {
            cm.sendNext("好運~~");
        }
        oldSelection = selection;
    } else if (status == 1) {
        if (oldSelection == 3) {
            cm.gainItem(4031713, -1);
            cm.warp(600010004);
        } else {
            cm.gainItem(4031036 + oldSelection, -1);
            cm.warp(103000900 + (oldSelection * 3));
        }
        cm.dispose();
    }
}