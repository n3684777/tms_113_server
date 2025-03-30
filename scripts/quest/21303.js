var status = -1;
function start(mode, type, selection) {
	 if (mode == -1) {
	 qm.dispose();
	 } else {
	 if (mode == 1)
	 status++;
	 else
	 status--;
	 if (status == 0) {
		qm.sendNext("嗚嗚~提提提很傷心 提提提生氣了！提提提放聲哭泣．．．嗚嗚嗚嗚～");
	 } else if (status == 1) {
		qm.sendNext("提提提製作了寶石。#b像蘋果般紅潤的寶石#k。可是 #r小偷#k偷走了寶石。提提提沒有寶石。提提提傷心欲絕．．．");
	 } else if (status == 2) {
		qm.sendNext("提提提，想找回寶石。提提提找回寶石會給豐厚的謝禮。抓到小偷會給謝禮");
	 } else if (status == 3) {
		qm.sendAcceptDecline("小偷跑到哪裡去了？哪裡．．．用來吃飯的手是右手，不是用來吃飯的手是左手．．．是#b左邊#k？！往左邊走就能抓到小偷。");
	 } else if (status == 4) {
		 qm.forceStartQuest(21303);
		 qm.dispose(); 
		}
	 }
}
function end(mode, type, selection) {
	 if (mode == -1) {
		qm.dispose();
	 } else {
	 if (mode == 1)
		status++;
	 else
		status--;
	 if (status == 0) {
		qm.sendNext("找到雪吉拉寶石了？");
	 } else if (status == 1) {
		qm.sendNext("哇！是雪吉拉寶石。#p1203001#是漂亮的紅寶石！你太偉大了！告訴你製作紅寶石的製作方法作為報酬。");
	 } else if (status == 2) {
		qm.sendNext("嘻，我要吃掉#p1203001#寶石囉！有空再來找我玩唷．．．．");
	 } else if (status == 3) {
		qm.sendNext("啊！你是不是需要一些道具給一個漂亮的女人？我這裡剛好有！！提提提分給你~~\r\n\r\n#b#v4032312# #z4032312#");
		//qm.sendNext("小偷跑到哪裡去了？哪裡．．．用來吃飯的手是右手，不是用來吃飯的手是左手．．．是#b左邊#k？！往左邊走就能抓到小偷。");
	 } else if (status == 4) {
		 qm.gainItem(4032312, 1);
		 qm.forceCompleteQuest(21303);
		 qm.dispose(); 
		}
	 }
}