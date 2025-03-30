var status = -1;
//this quest is SECRET ORGANIZATION 3
function start(mode, type, selection) {
	qm.sendNext("去#b玩具城村莊#k的#b青蛙嘴的家#k");
	qm.forceStartQuest();
	qm.dispose();
}

function end(mode, type, selection) {
	qm.gainExp(1600);
	qm.forceCompleteQuest();
	qm.dispose();
}