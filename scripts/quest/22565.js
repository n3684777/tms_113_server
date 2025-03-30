var status = -1;

function start(mode, type, selection) {
	status++;
	if (mode != 1) {
		qm.dispose();
		return;
	}
	if (qm.getQuestStatus(22565) == 0) {
		if (status == 0) {
			qm.sendNextS("#b寶貝龍 #k是歐尼斯龍，並聽說歐尼斯龍已經滅絕了。 #b寶貝龍 #k的心情很差吧？去安慰一下 #b寶貝龍#k 吧？", 3);
		} else if (status == 1) {
			qm.sendAcceptDecline("雖然歐尼斯龍都已經滅絕了，可是我不會放棄，我是堅強的龍，我還存活著。或許在某處還有存活下來的同族，我一定會找到，主人會幫我找嗎？");
		} else if (status == 2) {
			qm.getPlayer().gainSP(2, 3);
			qm.gainExp(24600);
			qm.forceStartQuest();
			qm.forceCompleteQuest();
			qm.dispose();
		}
	}
}