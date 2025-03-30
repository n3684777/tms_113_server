var status = -1;

function start(mode, type, selection) {
    status++;
	if (mode != 1) {
	    if(type == 1 && mode == 0)
		    status -= 2;
		else{
			qm.sendNext("好孩子都會聽媽媽的話。成為一個好孩子並再跟我對話一次吧，龍魔導士。");
			qm.dispose();
			return;
		}
	}
	if (status == 0)
		qm.sendAcceptDecline("你#b爸爸#k早上趕去農場時忘了把他的午餐帶去，你可以#b把便當拿給你爸嗎#k，好孩子。他在#b#m100030300##k。");	
	else if (status == 1){
		qm.forceStartQuest();
		qm.sendNext("嘻嘻，龍魔導士真是個好孩子！#b離開家後往左走#k。快去找你爸吧，他快餓扁了。");
		if(!qm.haveItem(4032448))
			qm.gainItem(4032448, 1);
	}else if (status == 3)
		qm.sendNextPrev("如果便當盒弄丟就回來找我，我會先把你打死^^");
	else if (status == 4){
		qm.evanTutorial("UI/tutorial/evan/5/0" , 1);
		qm.dispose();
	}
}

function end(mode, type, selection) {

}