var minPlayers = 1;
function init() {
    em.setProperty("state", "0");
}
function monsterValue(eim, mobId) {
    return 1;
}
function setup() {
    em.setProperty("state", "1");
    var eim = em.newInstance("Ravana");
    var map = eim.setInstanceMap(501030105);
	var mapFactory = eim.getMapFactory();
    map = mapFactory.getMap(501030105);
	exitMap = em.getChannelServer().getMapFactory().getMap(501030104); 
    map.resetFully();
    eim.startEventTimer(3600000);
    return eim;
}
function scheduledTimeout(eim) {
    eim.disposeIfPlayerBelow(100, eim.getProperty("cleared") == null ? 501030104 : 501030104);
    em.setProperty("state", "0");
}
function changedMap(eim, player, mapid) {
    switch (mapid) {
        case 501030105:
            return;
    }
    eim.unregisterPlayer(player);
    if (eim.disposeIfPlayerBelow(0, 0)) {
        em.setProperty("state", "0");
    }
}
function playerEntry(eim, player) {
    var map = em.getMapFactory().getMap(501030105);
    player.changeMap(map, map.getPortal(0));
}

//玩家使用原地復活
function playerUseWheelRevive(eim, player) {
	map = em.getMapFactory().getMap(501030105);
    player.changeMap(map, map.getPortal(0));
}
//玩家不使用原地復活
function playerIgnoreWheelRevive(eim, player) {
    if(player.getMapId() == 501030105){
        eim.unregisterPlayer(player);
        player.changeMap(exitMap, exitMap.getPortal(0));
        if(eim.getPlayerCount()==0){
            end(eim);
        }
    }
}


function playerRevive(eim, player) {
}
function playerDisconnected(eim, player) {
    return -3;
}
function leftParty(eim, player) {
    if (eim.disposeIfPlayerBelow(minPlayers, eim.getProperty("cleared") == null ? 501030104 : 501030104)) {
        em.setProperty("state", "0");
    } else {
        playerExit(eim, player);
    }
}
function disbandParty(eim) {
    eim.disposeIfPlayerBelow(100, eim.getProperty("cleared") == null ? 501030104 : 501030104);
    em.setProperty("state", "0");
}
function playerExit(eim, player) {
    var map = em.getMapFactory().getMap(eim.getProperty("cleared") == null ? 501030104 : 501030104);
    eim.unregisterPlayer(player);
    player.changeMap(map, map.getPortal(0));
}
function removePlayer(eim, player) {
    eim.unregisterPlayer(player);
}
function clearPQ(eim) {
    eim.disposeIfPlayerBelow(100, eim.getProperty("cleared") == null ? 501030104 : 501030104);
    em.setProperty("state", "0");
}
function finish(eim) {
    eim.disposeIfPlayerBelow(100, eim.getProperty("cleared") == null ? 501030104 : 501030104);
    em.setProperty("state", "0");
}
function timeOut(eim) {
    eim.disposeIfPlayerBelow(100, eim.getProperty("cleared") == null ? 501030104 : 501030104);
    em.setProperty("state", "0");
}
function cancelSchedule() {}
//玩家死亡
function playerDead(eim, player) {
	eim.setProperty("member"+player.getId(), "0");
}
function allMonstersDead(eim) {}

function monsterDamaged(player, mobId, damage){
}