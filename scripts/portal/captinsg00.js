function enter(pi) {
    if (!pi.haveItem(4000381)) {
        pi.playerMessage(5, "你沒有白色精華。");
    } else {
        if (pi.getPlayerCount(541010100) <= 0) {
            var captMap = pi.getMap(541010100);
            captMap.resetFully();
            pi.playPortalSE();
            pi.warp(541010100, "sp");
        } else {
            if (pi.getMap(541010100).getSpeedRunStart() == 0 && (pi.getMonsterCount(541010100) <= 0 || pi.getMap(541010100).isDisconnected(pi.getPlayer().getId()))) {
                pi.playPortalSE();
                pi.warp(541010100, "sp");
            } else {
                pi.playerMessage(5, "與首領的戰鬥已經開始，所以你不能進入這個地方。");
            }
        }
    }
}
