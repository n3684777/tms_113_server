/*
	Description: 	Quest - A Bite of Pork
*/

var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 2) {
            qm.sendNext("你怎麼能這樣對我？我要打家暴專線！");
            qm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        qm.sendNext("不要不要不要不要不要，這不是肯德基，有沒有更營養一點的東西啊，主人？");
    } else if (status == 1) {
        qm.sendNextPrevS("#b嗯…所以你不是草食性動物，那你應該是肉食性囉！豬肉怎麼樣？#k", 2);
    } else if (status == 2) {
        qm.askAcceptDecline("豬肉…是什麼？從來沒聽過，不過如果美味的話我就接受。餵我好吃的，不要植物就好。");
    } else if (status == 3) {
        qm.forceStartQuest();
        qm.sendOkS("#b(工欲善其事，必先利其器。要當野豬騎士囉。去打10片豬肉吧。)#k", 2);
        qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        qm.sendOk("Oh, is this what you brought me to eat? So this is the Pork you were taking about? Let me try.");
    } else if (status == 1) {
        qm.gainExp(1850);
        qm.gainItem(4032453, -10);
        qm.sendNext("(Chomp, chomp, gulp...)");
        qm.forceCompleteQuest();
    } else if (status == 2) {
        qm.sendPrev("Uggh... This doesn't taste too bad but I don't think I can digest it. This isn't for me...");
        qm.dispose();
    }
}