var map_1 = 922210000;
var map_2 = 922210100;
var map_3 = 922210200;
var returnmap = 922210300;
var 每關時間 = 3 * 60 * 1000; // 三分鐘
function init() {
}

function setup(player) {
    var instanceName = "WaterMelon" + player.getId();

    var eim = em.newInstance(instanceName);
    var map1 = eim.createInstanceMap(map_1);
    var map2 = eim.createInstanceMap(map_2);
    var map3 = eim.createInstanceMap(map_3);

    if (eim != null) {
        eim.startEventTimer(每關時間);
    }
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
}

function changedMap(eim, player, mapid) {
    if (mapid != map_1 && mapid != map_2 && mapid != map_3) {
        var player = eim.getPlayers().get(0);
        eim.unregisterPlayer(player);
        eim.disposeIfPlayerBelow(0, 0);
        var map = em.getMapFactory().getMap(returnmap);
        player.changeMap(map, map.getPortal(0));
    } else {
        eim.restartEventTimer(每關時間);
    }
}

function scheduledTimeout(eim) {
    if (eim == null) {
        return;
    }
    eim.disposeIfPlayerBelow(100, returnmap);
    eim.broadcastPlayerMsg(5, "超過時間!未能成功拿回西瓜");
}

function allMonstersDead(eim) {
}

function playerDead(eim, player) {
	player.changeMap(eim.getMapInstance(returnmap), eim.getMapInstance(returnmap).getPortal(0));
}

function playerRevive(eim, player) {
    player.addHP(50);
    player.changeMap(eim.getMapInstance(returnmap), eim.getMapInstance(returnmap).getPortal(0));
	eim.broadcastPlayerMsg(5, player.getName() + " 因為死亡離開了副本");
    return true;
}

function playerDisconnected(eim, player) {
    eim.unregisterPlayer(player);
	player.setMap(eim.getMapInstance(returnmap));
	eim.broadcastPlayerMsg(5, player.getName() + " 離開了副本");
}

function monsterValue(eim, mobid) {
    return 0;
}

function leftParty(eim, player) {
    // Happens when a player left the party
}

function disbandParty(eim, player) {
    // Boot whole party and end
}

function clearPQ(eim) {
    // Happens when the function EventInstanceManager.finishPQ() is invoked by NPC/Reactor script
}

function removePlayer(eim, player) {
    eim.dispose();
    // Happens when the funtion NPCConversationalManager.removePlayerFromInstance() is invoked
}

function registerCarnivalParty(eim, carnivalparty) {
    // Happens when carnival PQ is started. - Unused for now.
}

function onMapLoad(eim, player) {
    // Happens when player change map - Unused for now.
}

function cancelSchedule() {}

function dispose(eim) {

}

function monsterDamaged(eim, player, mobId, damage){

}