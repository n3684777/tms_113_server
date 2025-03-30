function init() {
    em.setProperty("started", "false");
}
function monsterValue(eim, mobId) {
    return 1;
}
function setup() {
    em.setProperty("started", "true");
    var eim = em.newInstance("s4resurrection");
    var map = eim.setInstanceMap(923000100);
    map.resetFully();
    eim.startEventTimer(300000);
    return eim;
}
function playerEntry(eim, player) {
    var map = eim.getMapFactory().getMap(923000100);
    player.changeMap(map, map.getPortal(0));
}
function playerDead(eim, player) {
}
function playerRevive(eim, player) {
}
function scheduledTimeout(eim) {
    eim.disposeIfPlayerBelow(100, 230040300);
    em.setProperty("started", "false");
}
function changedMap(eim, player, mapid) {
    if (mapid != 923000100) {
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
    eim.disposeIfPlayerBelow(100, 230040300);
    em.setProperty("started", "false");
}
function playerExit(eim, player) {
    eim.unregisterPlayer(player);
    var map = eim.getMapFactory().getMap(230040300);
    player.changeMap(map, map.getPortal(0));
}
function clearPQ(eim) {
    eim.disposeIfPlayerBelow(100, 230040300);
}
function allMonstersDead(eim) {}
function cancelSchedule() {
}