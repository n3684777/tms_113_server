/* Regular Cab */

var status = 0;
var maps = [104000000, 102000000, 101000000, 100000000, 103000000, 120000000];
var cost = [120, 120, 80, 100, 100, 120];
var townText = [
    ["是個很不錯的地方"],
    ["是個很不錯的地方"],
    ["是個很不錯的地方"],
    ["是個很不錯的地方"],
    ["是個很不錯的地方"],
    ["是個很不錯的地方"],
    ["是個很不錯的地方"]
];
var selectedMap = -1;
var town = false;

function start() {
    cm.sendNext("你想不想到一些其他的城鎮看看？對於新手我們有90%的折扣！");
}

function action(mode, type, selection) {
    status++;
    if (mode != 1) {
        if ((mode == 0 && !town) || mode == -1) {
            if (type == 1 && mode != -1)
                cm.sendNext("有很多看在這個小鎮，讓我知道如果你想要去別的地方。");
            cm.dispose();
            return;
        } else
            status -= 2;
    }
    if (status == 1)
        cm.sendSimple("如果這是你第一次你可能會感到困惑這個地方，這是可以理解的。請問這個地方的任何問題??.\r\n#L0##b有多少個城市在這個島上?#l\r\n#L1#我想去別的城市..#k#l");
    else if (status == 2) {
        if (selection == 0) {
            town = true;
            var text = "島上有7大城市你想了解哪一個城市??#b";
            for (var i = 0; i < maps.length; i++)
                text += "\r\n#L" + i + "##m" + maps[i] + "##l";
            cm.sendSimple(text);
        } else if (selection == 1) {
            var selStr = cm.getJob() == 0 ? "你是新手所以你有90%的折扣\r\n請問你想去哪??#b" : "哦，你不是一個新手，是吧？我可能會向您收取全額。你想去哪？#b";
            for (var i = 0; i < maps.length; i++)
                selStr += "\r\n#L" + i + "##m" + maps[i] + "# (" + (cost[i] * (cm.getJob() == 0 ? 1 : 10)) + "楓幣)#l";
            cm.sendSimple(selStr);
        }
    } else if (town) {
        if (selectedMap == -1)
            selectedMap = selection;
        if (status == 3)
            cm.sendNext(townText[selectedMap][status - 3]);
        else
            townText[selectedMap][status - 3] == undefined ? cm.dispose() : cm.sendNextPrev(townText[selectedMap][status - 3]);
    } else if (status == 3) {
        selectedMap = selection;
        cm.sendYesNo("我猜你不想待這裡。你真的想要移動到 #b#m" + maps[selection] + "##k? 我將相你收取 #b" + (cost[selection] * (cm.getJob() == 0 ? 1 : 10)) + " 楓幣#k. 你怎麼看??");
    } else if (status == 4) {
        if (cm.getMeso() < (cost[selectedMap] * (cm.getJob() == 0 ? 1 : 10)))
            cm.sendNext("你沒有足夠的楓幣我不能幫助你!!");
        else {
            cm.gainMeso(-(cost[selectedMap] * (cm.getJob() == 0 ? 1 : 10)));
            cm.warp(maps[selectedMap]);
        }
        cm.dispose();
    }
}