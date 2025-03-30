/*
	Description: 	Quest - Hungry Baby Dragon
*/

var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 3) {
            qm.sendNext("*gasp* How can you refuse to feed your Dragon? This is child abuse!");
            qm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        qm.sendNext("唷，主人，現在你已經看見我的能力了吧？現在換你證明…你找得到食物！" +
            "我快餓死了，你會用我的能力了，現在你應該能照顧我。");
    } else if (status == 1) {
        qm.forceStartQuest();
        qm.sendNextPrevS("痾…我還是有點搞不清楚狀況，但我不能讓你這小隻馬挨餓對吧？" +
            "食物？你要吃什麼？", 2);
    } else if (status == 2) {
        qm.sendNextPrev("喂，我幾分鐘前才剛出生，我怎知道我要吃什麼？我只知道我是隻龍…" +
            "我是你的龍，你是我的主人r。你必須對我好一點！");
    } else if (status == 3) {
        qm.askAcceptDecline("我想我們還必須磨合，可是我現在很餓。" +
            "主人，我要食物，記得我只是隻寶貝龍，我要哭哭了！");
    } else if (status == 4) {
        qm.forceStartQuest();
        qm.sendOkS("#b(額這寶貝龍好像餓爆了，你要趕快餵牠。你爸應該能給點建議。)", 2);
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
        qm.sendNext("What is it, Evan? You want to know what Dragons eat? Why do you... Huh? You found a Dragon?");
    } else if (status == 1) {
        qm.sendNextS("#b(You show Mir to Dad.)#k", 2);
    } else if (status == 2) {
        qm.sendNextPrev("Eh...that's a Dragon? Are you sure it's not just a big lizard? Well, all life is precious, so I guess you can keep it...");
    } else if (status == 3) {
        qm.sendNextS("#b(Dad doesn't seem to belive that Mir is a Dragon. Well, he is pretty small. Would Dad believe it if he heard Mir talk?)", 2);
    } else if (status == 4) {
        qm.sendNextPrev("If it were a real Dragon, it would be too dangerous to keep. What if it breathed fire? I don't really think it's a Dragon, but maybe we should ask an adventurer to come kill it, just in case.");
    } else if (status == 5) {
        qm.sendNextS("#b(What?! Kill Mir?! But he didn't do anything wrong!!)", 2);
    } else if (status == 6) {
        qm.sendNextPrev("Of course, I'm pretty sure it's not a Dragon. Dragons only appear in Leafre on the Ossyria Continent.");
    } else if (status == 7) {
        qm.sendNextS("#bHa... Ha... You're definitely right! I doubt he's a Dragon. He's probably just a lizard! Definitely!#k", 2);
    } else if (status == 8) {
        qm.sendNextPrev("Yeah, I'm pretty sure. It's a bizarre-looking lizard, but it doesn't look dangerous. Guess you can keep it.");
    } else if (status == 9) {
        qm.sendNextS("#b(For his own safety, you better not let anyone know that Mir is a Dragon.)#k", 2);
    } else if (status == 10) {
        qm.sendOk("Oh, you said you were looking for something to feed the lizard? I'm not sure... Let me think about it for a moment.");
    } else if (status == 11) {
        qm.gainExp(180);
        qm.forceCompleteQuest();
        qm.dispose();
    }
}