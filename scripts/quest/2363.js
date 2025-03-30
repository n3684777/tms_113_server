var status = -1;
function end(mode, type, selection) {
	if(qm.getJob() == 400 && qm.getlevel < 20){
		qm.sendOk("您的等級尚未達到20等。無法轉職!");
		qm.dispose();
	}
	    qm.forceCompleteQuest();		
	if (qm.getJob() == 400) {
	    qm.changeJob(430);
	    qm.resetStats(4, 25, 4, 4);
	    qm.expandInventory(1, 4);
	    qm.expandInventory(2, 4);
	    qm.expandInventory(3, 4);
	    qm.expandInventory(4, 4);
	    qm.gainItem(1342000, 1);
	    qm.sendNext("您已經成為下忍了!");
	}
	qm.dispose();
}

function start(mode, type, selection) {
    qm.dispose();
}
