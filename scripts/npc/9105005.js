
var status = 0;

function start() {
    cm.sendYesNo("您想返回大廳嗎？");
}

function action(mode, type, selection) {
	if (mode == 1) {
		cm.warp(889100100);
	}
    cm.dispose();
}