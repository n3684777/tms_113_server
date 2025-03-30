function init() {
    em.setProperty("state", "0");
}
function setup(eim, leaderid) {
    em.setProperty("state", "1");
    var eim = em.newInstance("QiajiPQ120");
    var map = eim.setInstanceMap(749050302);
    map.killMonster(9410089);
    map.respawn(true);
    eim.startEventTimer(1200000);
    return eim;
}
function playerEntry(eim, player) {
    var map = eim.getMapFactory().getMap(749050302);
    player.changeMap(map, map.getPortal(0));
}
function changedMap(eim, player, mapid) {
    if (mapid != 749050302) {
        eim.unregisterPlayer(player);
        eim.disposeIfPlayerBelow(0, 0);
    }
}
function playerDisconnected(eim, player) {
    return 0;
}
function scheduledTimeout(eim) {
    eim.disposeIfPlayerBelow(100, 229010000);
    em.setProperty("state", "0");
}
function monsterValue(eim, mobId) {
    return 1;
}
function playerExit(eim, player) {
    eim.unregisterPlayer(player);
    if (eim.disposeIfPlayerBelow(0, 0)) {
        em.setProperty("state", "0");
    }
}
function allMonstersDead(eim) {}
function playerRevive(eim, player) {
    return false;
}
function clearPQ(eim) {}
function leftParty(eim, player) {}
function disbandParty(eim) {}
function playerDead(eim, player) {}
function cancelSchedule() {}