/* 任務:達到影武者40級！*/
/* 補齊對話+獎勵 By bobo  */
var status = -1;
var item = 1342002;
function start(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		if (status == 1) {
			qm.sendNext("什麼？你不喜歡禮物？");
			qm.dispose();
			return;
		}
		status--;
	}
	if (status == 0) {
		qm.forceStartQuest();
		qm.sendYesNo("恭喜您達到影武者40級!請收下我的禮物。 \r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i" + item + "#");
	} else if (status == 1) {
		qm.gainItem(item, 1);
		qm.forceCompleteQuest();
		qm.dispose();
	}
}
