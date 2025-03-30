var mapId = 260020700;
var endmapId = 910000000;
var eventTime = 1000 * 60 * 10; //這樣是10分鐘
function init() {
}
function setup(partyId) {
    var eim = em.newInstance("ExpMap" +  partyId);
    var map = eim.createInstanceMap(mapId);
    map.setReturnMapId(endmapId);
    map.setForcedReturnMap(endmapId);
    map.blockAllPortal();
    map.toggleGDrops();
    eim.startEventTimer(eventTime);
    return eim;
}
function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
}
function playerRevive(eim, player) {
    return false;
}
function scheduledTimeout(eim) {
    end(eim);
}
function changedMap(eim, player, mapid) {
    if (mapid != mapId) {
        eim.unregisterPlayer(player);
        eim.disposeIfPlayerBelow(0, 0);
    }
}
function playerDisconnected(eim, player) {
    return 0;
}
function monsterValue(eim, mobId) {
    return 1;
}
function playerExit(eim, player) {
    eim.unregisterPlayer(player);
    eim.disposeIfPlayerBelow(0, 0);
}
function end(eim) {
   init();
   eim.disposeIfPlayerBelow(100, endmapId);
   eim = null;
   /*
    var iter = eim.getMapInstance(0).getCharactersThreadsafe().iterator();
    var map = eim.getMapFactory().getMap(endmapId);
    while (iter.hasNext()) {
        var chr = iter.next();
        eim.unregisterPlayer(chr);
        chr.changeMap(map, map.getPortal(0));
    }
    */
}
function clearPQ(eim) {}
function allMonstersDead(eim) {}
function leftParty(eim, player) {}
function disbandParty(eim) {}
function playerDead(eim, player) {}
function cancelSchedule() {}
function monsterDamaged(eim, player, mobId, damage){}