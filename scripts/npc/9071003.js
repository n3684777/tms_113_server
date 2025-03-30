var status = -1;
var returnmap = -1;
function start() {
	action(1,0,0);
}
function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1) {
			status++;
		} else {
			status--;
		}
		if (status == 0) {
			if (cm.getPlayer().getMapId() == 951000000) {
				returnmap = 100000000;
			} else {
				returnmap = 951000000;
			}
			cm.sendYesNo("你要去#m" + returnmap + "#嗎?");
		} else if (status == 1) {
			if (returnmap == -1) {
				cm.dispose();
			} else {
				cm.warp(returnmap, 0);
				cm.dispose();
			}
		}
	}
}