/*
	Description: 	Quest - Tasty Milk 1
*/

var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 2) {
            qm.sendNext("No use trying to find an answer to this on my own. I'd better look for #bsomeone older and wiser than master!#k");
            qm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        qm.sendNext("噁！我要別的，不要植物，不要肉。什麼，你沒有想法？可是你是主人，人家是女森欸，森77，你應該要幫人家找好東西啊！");
    } else if (status == 1) {
        qm.sendNextPrevS("#b可是我就是不知道啊，而且這跟女森有啥關係？", 2);
    } else if (status == 2) {
        qm.askAcceptDecline("人家是女森，你就應該要好好照顧人家啊，這不是理所當然的事情嗎？好吧，問問看其他人好了。");
    } else if (status == 3) {
        qm.forceStartQuest();
        qm.sendOkS("#b(你問過爸爸一次，可是沒有更好的idea，問一次不夠，那是不是要問兩次呢？就像玖哥說的，一個便當吃不飽，是不是要吃兩個呢？)#k", 2);
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
        qm.sendOk("What? You're still trying to feed that lizard? Eh, so it won't eat the Handful of Hay or the Pork? Picky little fellow. Oh? The lizard is still a baby?");
    } else if (status == 1) {
        qm.gainExp(260);
        qm.forceCompleteQuest();
        qm.dispose();
    }
}