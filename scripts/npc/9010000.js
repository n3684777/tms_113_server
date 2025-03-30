var status = 0;
function start() {
   cm.sendOk("希望在這裡你能玩得愉快\r\n有任何遊戲問題都可以反應給遊戲管理員哦");
   cm.dispose();
	// cm.sendYesNo("嗨，我是#p9010000# 想要和你的朋友在這個服留下美好的照片嗎？？");
}

function action(mode, type, selection) {
	if (mode != 1) {
		if (mode == 0)
			cm.sendOk("需要的時候，再來找我吧。");
		cm.dispose();
		return;
	}
	status++;
	if (status == 1) {
		cm.saveLocation("DONGDONGCHIANG");
		cm.warp(970000000, 0);
		cm.dispose();
	}
}
