var 指定地圖 = 105200110;

function init() {
	
}

function setup(eim, leaderid) {

	var map = eim.setInstanceMap(指定地圖);

    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
}

function playerRevive(eim, player) {
    player.addHP(50);
	var mapToSpawnId = player.getMapId();
    var map = eim.getMapFactory().getMap(mapToSpawnId);
    player.changeMap(map, map.getPortal(0));
    return true;
}

function scheduledTimeout(eim) {

}

function changedMap(eim, player, mapid) {
    switch (mapid) {
        case 指定地圖:
            return;
    }
		eim.unregisterPlayer(player);

    
}

function playerDisconnected(eim, player) {
    return 0;
}

function monsterValue(eim, mobId) {	
		return 1;
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);

    if (eim.disposeIfPlayerBelow(0, 0)) {
	em.setProperty("state", "0");
		em.setProperty("leader", "true");
    }
}

function end(eim) {
    if (eim.disposeIfPlayerBelow(100, 死亡回歸)) {
		em.setProperty("state", "0");
		em.setProperty("leader", "true");
    }
}

function clearPQ(eim) {
    end(eim);
}

function allMonstersDead(eim) {
	eim.broadcastPlayerMsg(5, "你已經..擊敗了渾沌斑斑..！ 您可以根據需要從左側傳送點退出。");
}

function leftParty (eim, player) {}
function disbandParty (eim) {}
function playerDead(eim, player) {}
function cancelSchedule() {}