var status = -1;

function start() {
	action(1, 0, 0)
}

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else if (mode == 0) {
		status--;
	} else {
		cm.dispose();
		return;
	}
	if (status == 0) {
		cm.sendSimple(
			"你好我是#r「攻略查詢」#k系統。" +
			"\r\n請點選您要查詢的攻略#k\r\n" +
			"#L0##r0 - PVP系統玩法\n\#l" +
			"\r\n#L1##d1 - 公會領地爭奪戰\n\#l" +
			"\r\n#L2##r2 - 小屋系統\n\#l");
		
	} else if (status == 1) {
		if (selection == 0) {
         cm.openURL("https://www.xinbiao-aicl.com/forum.php?mod=viewthread&tid=9904&page=1&extra=#pid27049");
		} else if (selection == 1) {
         cm.openURL("https://www.xinbiao-aicl.com/forum.php?mod=viewthread&tid=10115&page=1&extra=#pid27511");
		} else if (selection == 2) {
         cm.openURL("https://www.xinbiao-aicl.com/thread-10114-1-1.html");
		}
		cm.dispose(); 
	}
}
