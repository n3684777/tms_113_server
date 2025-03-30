/*
	任務: 不管多少次都得爭取！
	描述: 我從重力網駕駛員……位於2102年商業區的#p9120033#處，獲得了討伐#o9400295#的任務，他說重力網使用的驅動組件目前出現在#o9400295#的周圍，有了它就可以強化#o9400295#沒時間了，如果不盡快地打倒#o9400295#的話…！
*/
var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        qm.sendNext("…還有什麼事情嗎？ 現在， 那個傢伙正向我逼近…！");
        qm.dispose();
        return;
    }
    if (status == 0) {
        qm.askAcceptDecline("那個男人，好像比以前更強了…不要掉以輕心…！");
    } else if (status == 1) {
        qm.warp(802000709, 0);
        qm.forceStartQuest();
        qm.dispose();
    }
}

function end(mode, type, selection) {
}