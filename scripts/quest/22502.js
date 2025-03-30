/*
	Description: 	Quest - A Bite of Hay
*/

var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            qm.sendNext("不經一事不長一智，懂？沒試過怎知道那女的對你有沒有意思？哈哈看啊！");
            qm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        qm.askAcceptDecline("蜥蜴會不會也像牛一樣吃#b一把乾草#k呢？附近有許多#b乾草堆#k，可以試試看，不吃的話再找別的食物就好了。");
    } else if (status == 1) {
        qm.forceStartQuest();
        qm.evanTutorial("UI/tutorial/evan/12/0", 1);
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
        qm.sendNext("Oh, I'm so hungry! Did you find something good for me to eat, master? Hmm... This looks like...grass. Can I really eat this? Okay master, I'll trust you.");
    } else if (status == 1) {
        qm.sendOk("Okay, here goes!");
    } else if (status == 2) {
        qm.gainExp(800);
        qm.gainItem(4032452, -3);
        qm.sendOk("Yuck! What is this? It's bitter and tought! Are you sure this is edible? Master, you eat it! I can't eat this! Find me something else!");
        qm.forceCompleteQuest();
        qm.dispose();
    }
}