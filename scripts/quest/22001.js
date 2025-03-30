
var status = -1;

function start(mode, type, selection) {
    status++;
	if (mode != 1) {
	    if(type == 1 && mode == 0)
		    status -= 2;
		else{
			qm.sendNext("不准偷懶喔。你想看你哥被狗咬嗎，快點！再跟我對話一次並接取任務");
			qm.dispose();
			return;
		}
	}
	if (status == 0)
		qm.sendNext("哈哈，我快笑死，哈哈哈。不過你屁話夠了吧。去餵#p1013102#了嗎");
	else if (status == 1)
		qm.PlayerToNpc("#b殺小，那不是猶他的工作嗎？#k");
	else if (status == 2)
		qm.sendAcceptDecline("小屁孩，我應該說過要叫我哥吧！你明明知道#p1013102#有多討厭我，牠一看到我接近牠就想咬我，牠比較喜歡你。");
	else if (status == 3){
		qm.gainItem(4032447,1);
		qm.sendNext("趕快去#b左邊#k餵#b#p1013102##k。牠一直吵著要吃的。");
		qm.forceStartQuest();
   }else if (status == 4){
		qm.sendPrev("去餵#p1013102#，餵完回來找我。");
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
		qm.sendNext("#b(你把食物放進狗的碗裡)#k");
	if (status == 1)
		qm.sendOk("#b(狗狗明明就很可愛，膽小鬼猶他，呵呵！)#k\r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 35 exp");
	if (status == 2){
		qm.forceCompleteQuest();
		qm.gainItem(4032447, -1);
		qm.gainExp(35);
		qm.sendOk("#b(狗狗好像吃完了，回去跟猶他說吧。)#k");
		qm.dispose();
		}
	}