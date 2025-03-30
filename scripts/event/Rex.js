importPackage(java.awt);
var minPlayers = 3;
function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}
function setup(leaderid) {
    em.setProperty("state", "1");
    em.setProperty("leader", "true");
    var eim = em.newInstance("Rex" + leaderid);
    eim.setProperty("move", "0");
    eim.setInstanceMap(921120005).resetFully();
    eim.setInstanceMap(921120100).resetFully();
    eim.setInstanceMap(921120200).resetFully();
    eim.setInstanceMap(921120300).resetFully();
    eim.setProperty("HP", "100000");
    eim.setProperty("BOSS_HP", "50000000");
    eim.startEventTimer(1800000);
    return eim;
}
function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
}
function playerRevive(eim, player) {
    eim.unregisterPlayer(player);
    eim.disposeIfPlayerBelow(0, 0);
    return true;
}
function scheduledTimeout(eim) {
    end(eim);
}
function changedMap(eim, player, mapid) {
    if (mapid < 921120005 || mapid > 921120300) {
        eim.unregisterPlayer(player);
        eim.disposeIfPlayerBelow(0, 0);
    }
}
function playerDisconnected(eim, player) {
    return 0;
}
function monsterValue(eim, mobId) {
    switch(mobId){
        case 9300281:
            clearPQ(eim);
            break;
    }
    return 1;
}
function playerExit(eim, player) {
    eim.unregisterPlayer(player);
    eim.disposeIfPlayerBelow(0, 0);
}
function end(eim) {
    eim.disposeIfPlayerBelow(100, 211000002);
}
function clearPQ(eim) {
    //eim.disposeIfPlayerBelow(100, 211000002);
    eim.getMapInstance(921120300).spawnNpc(2022009, new Point(-30, 174));
}
function allMonstersDead(eim) {
}
function leftParty(eim, player) {
    var party = eim.getPlayers();
    if (party.size() < minPlayers) {
        eim.disposeIfPlayerBelow(100, 211000002);
    } else
        playerExit(eim, player);
}
function disbandParty(eim) {
    eim.disposeIfPlayerBelow(100, 211000002);
}
function playerDead(eim, player) {}
function cancelSchedule() {}

function monsterDamaged(eim, player, mobId, damage){}