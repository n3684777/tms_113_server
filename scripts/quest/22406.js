/*
2018.11.19 修復by bobo 任務:不合身的馬鞍  補齊對話。 
*/
var status = -1;

function start(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		status--;
	}
	if (status == 0) {
		qm.sendNext("主人……呃……");
	} else if (status == 1) {
		qm.sendNextPrevS("#b怎麼了？哪裡不舒服嗎？#k", 2);
	} else if (status == 2) {
		qm.sendNextPrev("呃，我……呃呃呃……喘不過氣來……");
	} else if (status == 3) {
		qm.sendNextPrevS("#b喘不過氣來？為什麼？是生長出現了異常嗎？#k", 2);
	} else if (status == 4) {
		qm.sendNextPrev("不，不是的，呃呃呃……");
	} else if (status == 5) {
		qm.sendNextPrevS("#b那是什麼？快告訴我！#k", 2);
	} else if (status == 6) {
		qm.sendNextPrev("馬鞍太緊了！");
	}else if (status == 7) {
		qm.sendNextPrevS("#b……嗯？#k", 2);
	} else if (status == 8) {
		qm.sendNextPrev("呃呃，翅膀都動不了了！這個馬鞍太小了！和我的身體不配！這個樣子的話，你是沒辦法騎的！");
	}else if (status == 9) {
		qm.sendNextPrevS("#b是，是嗎？那怎麼辦？#k", 2);
	} else if (status == 10) {
		qm.sendNextPrev("需要新的馬鞍~主人，請你到之前為你製作馬鞍的 坎特 那裡去，讓他幫你製作新的馬鞍。");
	} else if (status == 11) {
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