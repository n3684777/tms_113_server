var pop = 3;

function enter(pi) {/*
    if (pi.getBossLog("pop") >= 3) {
		pi.playerMessage(5, "一天只能打3次克雷塞爾。");
		return false;
	}*/
	if (pi.getPlayerCount(541020800) <= 0) { // krex. Map
	var krexMap = pi.getMap(541020800);

	krexMap.resetFully();

	pi.playPortalSE();
	pi.warp(541020800, "sp");
	return true;
    }	 else {
	if (pi.getMap(541020800).getSpeedRunStart() == 0 && (pi.getMonsterCount(541020800) <= 0 || pi.getMap(541020800).isDisconnected(pi.getPlayer().getId()))) {
	    pi.playPortalSE();
	    pi.warp(541020800, "sp");
	    return true;
	} else {
	    pi.playerMessage(5, "和boss的戰鬥已經開始了，你不能進入這裡。");
	    return false;
	}
    }
}