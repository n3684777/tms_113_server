/*
2018.11.18 修復by bobo 任務:騎寵 補齊對話。
*/
var status = -1;

function start(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		if (status == 10) {
			qm.sendNext("唉，我和你說這麼多你還拒絕我?");
			qm.dispose();
			return;
		}
		status--;
	}
	if (status == 0) {
		qm.sendNext("主人,有什麼事情嗎?有什麼話想說嗎?嗯?騎乘?騎乘是指騎在豬.鳥或狼身上四處行走嗎?可是為甚麼呢?");
	} else if (status == 1) {
		qm.sendNextPrevS("#b我很好奇歐尼斯龍可不可以騎乘。如何？你覺得有可能嗎?#k", 2);
	} else if (status == 2) {
		qm.sendNextPrev("歐尼斯龍也騎乘...唉?你想要騎在我身上嗎?助人的夥伴我身上?哇哇哇，主人好過份喔~我又不是寵物!");
	} else if (status == 3) {
		qm.sendNextPrevS("#b因為是夥伴，當然可以騎在身上四處遊走。#k", 2);
	} else if (status == 4) {
		qm.sendNextPrev("呃!居然說得那麼酷。好吧!那我累的時候我也騎在主人的背上。可以嗎?這樣的話我就載你");
	} else if (status == 5) {
		qm.sendNextPrevS("#b...你想殺了唯一的主人嗎？#k", 2);
	} else if (status == 6) {
		qm.sendNextPrev("呵。我開玩笑的。之前的我不太清楚會過的怎樣，現在的我騎乘在主人的身上，主人應該會被壓扁。可是反過來的話應該沒有問題。主人的身體又不大...");
	} else if (status == 7) {
		qm.sendNextPrevS("#那麼你是說可以騎乘嗎?", 2);
	} else if (status == 8) {
		qm.sendNextPrev("嗯!我飛翔的時候應該比主人快，效率也無話可說。可是不能直接騎上去，要先作一兩項準備。");
	} else if (status == 9) {
		qm.askAcceptDecline("#b馬鞍#k還有#b可騎乘的技能#k!我的背上什麼都沒有，直接坐上去的話你想屁股會沒事嗎?再加上沒有騎乘技能可能會掉下來，一定要準備好這兩個項目。你可以準備了嗎?");
	} else if (status == 10) {
		qm.forceStartQuest();
		qm.forceCompleteQuest();
	}
}

function end(mode, type, selection) {
	qm.forceStartQuest();
	qm.forceCompleteQuest();
	qm.dispose();
}