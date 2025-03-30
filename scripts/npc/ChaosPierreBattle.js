function init() {
	em.setProperty("leader", "true");
    em.setProperty("state", "0");
}

function setup(eim, leaderid) {
	em.setProperty("leader", "true");
    var eim = em.newInstance("HillaBattle");
	var map = eim.setInstanceMap(105200210);
    var mob0 = em.getMonster(8900001);
	var modified = em.newMonsterStats();
	modified.setOMp(mob0.getMobMaxMp());
	modified.setOHp(mob0.getMobMaxHp() * 5.0);
	mob0.setOverrideStats(modified);
	eim.registerMonster(mob0);
	map.spawnMonsterOnGroundBelow(mob0, new java.awt.Point(0, -181));
    em.setProperty("state", "1");
    //eim.startEventTimer(3600000); // 1 hr
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
    eim.disposeIfPlayerBelow(100, 105200000);
    em.setProperty("state", "0");
	em.setProperty("leader", "true");
}

function changedMap(eim, player, mapid) {
    if (mapid < 105200000 && mapid > 105200210) {
		eim.unregisterPlayer(player);

		if (eim.disposeIfPlayerBelow(0, 0)) {
			em.setProperty("state", "0");
			em.setProperty("leader", "true");
		}
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

    if (eim.disposeIfPlayerBelow(0, 0)) {
	em.setProperty("state", "0");
		em.setProperty("leader", "true");
    }
}

function end(eim) {
    if (eim.disposeIfPlayerBelow(100, 105200000)) {
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