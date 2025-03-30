function init() {
    em.setProperty("started", "false");
}
function monsterValue(eim, mobId) {
    return 1;
}
function setup() {
    var eim = em.newInstance("s4aWorld");
    eim.setInstanceMap(910500000).resetFully();
    eim.startEventTimer(1200000);
    em.setProperty("started", "true");
    return eim;
}
function playerEntry(eim, player) {
    var map = eim.getMapFactory().getMap(910500000);
    player.changeMap(map, map.getPortal(0));
}
function playerDead(eim, player) {
}
function playerRevive(eim, player) {
}
function scheduledTimeout(eim) {
    eim.disposeIfPlayerBelow(100, 105090200);
    em.setProperty("started", "false");
}
function changedMap(eim, player, mapid) {
    if (mapid != 910500000) {
        eim.unregisterPlayer(player);
        if (eim.disposeIfPlayerBelow(0, 0)) {
            em.setProperty("started", "false");
        }
    }
}
function playerDisconnected(eim, player) {
    return 0;
}
function leftParty(eim, player) {
    playerExit(eim, player);
}
function disbandParty(eim) {
    eim.disposeIfPlayerBelow(100, 105090200);
    em.setProperty("started", "false");
}
function playerExit(eim, player) {
    eim.unregisterPlayer(player);
    var map = eim.getMapFactory().getMap(105090200);
    player.changeMap(map, map.getPortal(0));
}
function clearPQ(eim) {
    eim.disposeIfPlayerBelow(100, 105090200);
    em.setProperty("started", "false");
}
function allMonstersDead(eim) {}
function cancelSchedule() {
}
