var minPlayers = 1;
function init() {
    em.setProperty("state", "0");
}
function monsterValue(eim, mobId) {
    return 1;
}
function setup() {
    em.setProperty("state", "1");
    var eim = em.newInstance("QiajiPQ");
    var map = eim.setInstanceMap(749050301);
    map.resetFully();
    eim.startEventTimer(1800000);
    return eim;
}
function scheduledTimeout(eim) {
    eim.disposeIfPlayerBelow(100, eim.getProperty("cleared") == null ? 229010000 : 229010000);
    em.setProperty("state", "0");
}
function changedMap(eim, player, mapid) {
    switch (mapid) {
        case 749050301:
            return;
    }
    eim.unregisterPlayer(player);
    if (eim.disposeIfPlayerBelow(0, 0)) {
        em.setProperty("state", "0");
    }
}
function playerEntry(eim, player) {
    var map = em.getMapFactory().getMap(749050301);
    player.changeMap(map, map.getPortal(0));
}
function playerRevive(eim, player) {}
function playerDisconnected(eim, player) {
    playerExit(eim, player);
}
function leftParty(eim, player) {
    if (eim.disposeIfPlayerBelow(minPlayers, eim.getProperty("cleared") == null ? 229010000 : 229010000)) {
        em.setProperty("state", "0");
    } else {
        playerExit(eim, player);
    }
}
function disbandParty(eim) {
    eim.disposeIfPlayerBelow(100, eim.getProperty("cleared") == null ? 229010000 : 229010000);
    em.setProperty("state", "0");
}
function playerExit(eim, player) {
    var map = em.getMapFactory().getMap(eim.getProperty("cleared") == null ? 229010000 : 229010000);
    eim.unregisterPlayer(player);
    player.changeMap(map, map.getPortal(0));
}
function removePlayer(eim, player) {
    eim.unregisterPlayer(player);
}
function clearPQ(eim) {
    eim.disposeIfPlayerBelow(100, eim.getProperty("cleared") == null ? 229010000 : 229010000);
    em.setProperty("state", "0");
}
function finish(eim) {
    eim.disposeIfPlayerBelow(100, eim.getProperty("cleared") == null ? 229010000 : 229010000);
    em.setProperty("state", "0");
}
function timeOut(eim) {
    eim.disposeIfPlayerBelow(100, eim.getProperty("cleared") == null ? 229010000 : 229010000);
    em.setProperty("state", "0");
}
function cancelSchedule() {}
function playerDead(eim, player) {
    eim.disposeIfPlayerBelow(100, eim.getProperty("cleared") == null ? 229010000 : 229010000);
    em.setProperty("state", "0");
}
function allMonstersDead(eim) {}
