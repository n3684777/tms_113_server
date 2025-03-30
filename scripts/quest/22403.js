/*
2018.11.18 修復by bobo 任務:騎寵 補齊對話。
*/
var status = -1;

function start(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		if (status == 7) {
			qm.sendNext("準備好再來吧!");
			qm.dispose();
			return;
		}
		status--;
	}
	if (status == 0) {
		qm.sendNext("誰竟敢沒得到許可就踏入 耶雷佛。快點報上你的大名和職業，還有來到這個島的目的。虛假或是目的不正當的人都不能進入這個島。");
	} else if (status == 1) {
		qm.sendNextPrevS("#b咦咦>這裡是禁止進入的地區嗎?可是我看其他人都很愉快的出入啊?#k", 2);
	} else if (status == 2) {
		qm.sendNextPrev("只有皇家騎士團的成員才能在這個島上進出。看你好像不知道，這次就原諒你。快點離開這個島吧!");
	} else if (status == 3) {
		qm.sendNextPrevS("#b我的名字叫做#h  #，職業是龍魔導士!我來找龍騎士的馬鞍!聽說這裡可以取得很棒的馬鞍...我可以拿到之後再離開嗎?#k", 2);
	} else if (status == 4) {
		qm.sendNextPrev("..龍魔導士? 施展龍族技能的魔法師嗎?");
	} else if (status == 5) {
		qm.sendNextPrevS("#b是的。#k", 2);
	} else if (status == 6) {
		qm.sendNextPrev("騎士們的馬鞍都是由 #b 水之都 動物園#k的 #b坎特#k製作。是非常厲害的馬鞍。 不過 #r是由讓人驚訝不已的昂貴價格#k販售，想要取得馬鞍的話，要有這樣的覺悟。");
	} else if (status == 7) {
		qm.sendAcceptDecline("你有這樣的覺悟嗎?");
	} else if (status == 8) {
		qm.forceStartQuest();
		qm.forceCompleteQuest();
		qm.dispose();
	}
}

function end(mode, type, selection) {
	qm.forceStartQuest();
	qm.forceCompleteQuest();
	qm.dispose();
}