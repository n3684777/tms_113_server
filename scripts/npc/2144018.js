var status = -1;

function start() {
	if (cm.getPlayer().getMapId() == 272020110) {
		cm.dispose();
		cm.openNpc(cm.getNpc(), "_BOSS選單");
		return;
	}else if (cm.getPlayer().getMapId() == 272020200) {
		cm.sendSimple("您想要做什麼。 \r\n#b#L1#我不打了想要離開#l");
		status = 1;
	}
}

function action(mode, type, selection) {
    switch (status) {
	case 1:
	    cm.warp(272020110);
	    cm.dispose();
	    break;
	}

}