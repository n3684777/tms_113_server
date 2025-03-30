function enter(pi) {
    if (!pi.canHold(4001261, 1)) {
        pi.playerMessage(5, "請至少留下一格道具位置");
        return false;
    }
    pi.gainExpR(pi.getPlayer().getMapId() == 105100301 ? 260000 : 520000);
    pi.gainItem(4001261, 1);
    pi.warp(105100100, 0);
    pi.playPortalSE();
}