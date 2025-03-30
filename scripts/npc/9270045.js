function start() {
	cm.sendYesNo("你想離開這個地方嗎？");
}

function action(mode, type, selection) {
    	if (mode == 1) {
		cm.warp(541020700,6);
	}
	cm.dispose();
}
