function init() {
}
function monsterValue(eim, mobId) {
    return 1;
}
function setup() {
    var eim = em.newInstance("FireDemon");
    var map = eim.getMapFactory().getMap(921100000);
    map.resetReactors();
    eim.startEventTimer(300000);
    return eim;
}
function playerEntry(eim, player) {
    var map = eim.getMapFactory().getMap(921100000);
    player.changeMap(map, map.getPortal(0));
}
function playerDead(eim, player) {
}
function playerRevive(eim, player) {
}
function scheduledTimeout(eim) {
    eim.disposeIfPlayerBelow(100, 211042300);
}
function changedMap(eim, player, mapid) {
    if (mapid != 921100000) {
        eim.unregisterPlayer(player);
        eim.disposeIfPlayerBelow(0, 0);
    }
}
function playerDisconnected(eim, player) {
    return 0;
}
function leftParty(eim, player) {
    playerExit(eim, player);
}
function disbandParty(eim) {
    eim.disposeIfPlayerBelow(100, 211042300);
}
function playerExit(eim, player) {
    eim.unregisterPlayer(player);
    var map = eim.getMapFactory().getMap(211042300);
    player.changeMap(map, map.getPortal(0));
}
function clearPQ(eim) {
    eim.disposeIfPlayerBelow(100, 211042300);
}
function allMonstersDead(eim) {}
function cancelSchedule() {
}