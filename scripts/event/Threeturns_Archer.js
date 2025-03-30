
var minPlayers = 1;
var 腳本名稱 = "Threeturns_Archer";
var 回傳地圖 = 105040305;
var 職業走廊 = 108010100;
var 教官所在地圖 = 108010101;

function init() {
    em.setProperty("state", "0");
}

function monsterValue(eim, mobId) {
    return 1;
}

function setup() {
	
    em.setProperty("state", "1");
	
    var eim = em.newInstance(腳本名稱);
	
    var map = eim.setInstanceMap(教官所在地圖);
    map.resetFully();
	var mob = em.getMonster(9001002);
    map.killMonster(9001002);
	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(154, 20));
	eim.registerMonster(mob);
    eim.startEventTimer(900000); //15 分

    return eim;
}

function scheduledTimeout(eim) {
    eim.disposeIfPlayerBelow(100, eim.getProperty("cleared") == null ? 回傳地圖 : 回傳地圖);

    em.setProperty("state", "0");
}

function changedMap(eim, player, mapid) {
    switch (mapid) {
        case 教官所在地圖:
        case 職業走廊:
            return;
    }
    eim.unregisterPlayer(player);

    if (eim.disposeIfPlayerBelow(0, 0)) {
        em.setProperty("state", "0");
    }
}

function playerEntry(eim, player) {
    var map = em.getMapFactory().getMap(職業走廊);
    player.changeMap(map, map.getPortal(0));
}

function playerRevive(eim, player) {}

function playerDisconnected(eim, player) {
    playerExit(eim, player);
}

function leftParty(eim, player) {
    // If only 2 players are left, uncompletable
    if (eim.disposeIfPlayerBelow(minPlayers, eim.getProperty("cleared") == null ? 回傳地圖 : 回傳地圖)) {
        em.setProperty("state", "0");
    } else {
        playerExit(eim, player);
    }
}

function disbandParty(eim) {
    // Boot whole party and end
    eim.disposeIfPlayerBelow(100, eim.getProperty("cleared") == null ? 回傳地圖 : 回傳地圖);

    em.setProperty("state", "0");
}

function playerExit(eim, player) {
    var map = em.getMapFactory().getMap(eim.getProperty("cleared") == null ? 回傳地圖 : 回傳地圖);

    eim.unregisterPlayer(player);
    player.changeMap(map, map.getPortal(0));
}

// For offline players
function removePlayer(eim, player) {
    eim.unregisterPlayer(player);
}

function clearPQ(eim) {}

function finish(eim) {}

function timeOut(eim) {
    eim.disposeIfPlayerBelow(100, eim.getProperty("cleared") == null ? 回傳地圖 : 回傳地圖);

    em.setProperty("state", "0");
}

function cancelSchedule() {}

function playerDead(eim, player) {
    eim.disposeIfPlayerBelow(100, eim.getProperty("cleared") == null ? 回傳地圖 : 回傳地圖);
    em.setProperty("state", "0");
}

function allMonstersDead(eim) {}

function monsterDamaged(eim, player, mobId, damage){}