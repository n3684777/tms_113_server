var status = -1;

function start(mode, type, selection) {
    status++;
	if (mode != 1) {
	    if(type == 1 && mode == 0)
		    status -= 2;
		else{
			qm.sendNext("蝦毀？你不吃早餐嗎？俗話說一日之計在於晨，早餐很重要耶！如果你改變心意，就再跟我對話一次。如果你不吃的話，我就把你的份也一起吃了。");
			qm.dispose();
			return;
		}
	}
	if (status == 0)
		qm.sendNext("今天的早餐是#t2022620#，你一定要吃吃看，我偷偷帶了出來，嘻嘻。欸你去餵#p1013102#了嗎？如果你不幫我餵#p1013102#，我就不給你早餐吃哼哼！");
	else if (status == 1)
		qm.sendAcceptDecline("這個#b三明治#k拿去吧，#b吃完之後去找媽媽#k，她有事要跟你說。");
	else if (status == 2){
		qm.forceStartQuest();
		qm.PlayerToNpc("#b(媽媽有事要跟我說？吃完#t2022620#之後回屋子裡找她吧。)#k");
		qm.gainItem(2022620, 1);
	}else if (status == 3){
		qm.evanTutorial("UI/tutorial/evan/3/0" , 1);
		qm.dispose();
	}
}

function end(mode, type, selection) {
    status++;
	if (mode != 1) {
	    if(type == 1 && mode == 0)
		    status -= 2;
		else{
		    qm.dispose();
			return;
		}
	}
	if (status == 0)
		qm.sendNext("吃完早餐了嗎，龍魔導士？那麼，你願意幫我一個忙嗎？\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#i1003028# 1 #t1003028#  \r\n#i2022621# 5 #t2022621#s \r\n#i2022622# 5 #t2022622# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 60 exp");
	 if (status == 1){
		qm.forceCompleteQuest();
		qm.evanTutorial("UI/tutorial/evan/4/0" , 1);
		qm.gainItem(1003028, 1);
		qm.gainItem(2022621, 5);
		qm.gainItem(2022622, 5);
		qm.gainExp(60);
		qm.dispose();
	}
}