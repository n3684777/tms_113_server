/* 稱號挑戰-超級偶像！*/
/* By 宗達 */
var medal = 1142006;

function start(mode, type, selection) {
	qm.forceStartQuest();
	qm.dispose();
}

function end(mode, type, selection) {
	if (qm.hasSpace(medal, 1) && !qm.haveItem(medal, 1)) {
		qm.gainItem(medal, 1);
		qm.forceCompleteQuest();
	} else {
		qm.sendNext("背包太小了或是身上已經有了");
	}
	qm.dispose();
}
