var status = -1;

function start(mode, type, selection) {
    status++;
	if (mode != 1) {
	    if(type == 1 && mode == 0)
		    status -= 2;
		else{
			qm.sendNext("嗯？你不想跟猶他說嗎？你應該要對哥哥親切一點哦。");
			qm.dispose();
			return;
		}
	}
	if (status == 0)
		qm.sendNext("睡得還好嗎，龍魔導士？");
	else if (status == 1)
		qm.PlayerToNpc("#b還不錯阿，媽媽妳呢？#k");
	else if (status == 2)
		qm.sendNextPrev("我也是。不過，你看起來有點累，真的有睡飽嗎？是不是被昨天晚上的閃電吵醒？");
	else if (status == 3) 
		qm.PlayerToNpc("#b喔沒有啦。我只是做了一個很奇怪的夢。#k");
	else if (status == 4)
		qm.sendNextPrev("很奇怪的夢？是怎樣奇怪的夢？");
	else if (status == 5)
		qm.PlayerToNpc("#b呃…該怎麼說呢…#k");
	else if (status == 6)
		qm.PlayerToNpc("#b(你說了你在夢裡遇到一隻龍的事情)#k");
	else if (status == 7)
		qm.sendAcceptDecline("一隻龍？太酷了吧！你居然沒有被龍吃掉！你應該跟猶他講這件事，然後他一定會笑你XD");
	else if (status == 8){
		qm.forceStartQuest();
		qm.sendNext("#b猶他#k去前院餵狗了。往右邊走就會看到他了。");
   }else if (status == 9){
		qm.evanTutorial("UI/tutorial/evan/1/0", 1);
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
		qm.sendNext("嘿龍魔導士，你起來囉？你的黑眼圈怎麼那麼重？沒睡好嗎？做了一個奇怪的夢？你夢到一隻龍？");
	if (status == 1)
		qm.sendNextPrev("噗哈哈哈哈哈哈哈哈，一隻龍？酷斃了~~~我是不會解夢啦，不過感覺是個不錯的預兆，那你有夢到狗嗎？哈哈哈哈哈\r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 20 exp");
	if (status == 2){
		qm.gainExp(20);
		qm.evanTutorial("UI/tutorial/evan/2/0", 1);
		qm.forceCompleteQuest();
		qm.dispose();	
		}
	}