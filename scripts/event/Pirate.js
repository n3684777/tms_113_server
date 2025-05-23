var minPlayers = 3;
function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}
function setup(level, leaderid) {
    em.setProperty("state", "1");
    em.setProperty("leader", "true");
    var eim = em.newInstance("Pirate" + leaderid);
    em.setProperty("stage2", "0");
    em.setProperty("stage2a", "0");
    em.setProperty("stage3a", "0");
    em.setProperty("stage4", "0");
    em.setProperty("stage5", "0");
    eim.setInstanceMap(925100000).resetFully();
    eim.setInstanceMap(925100100).resetFully();
    var map = eim.setInstanceMap(925100200);
    map.resetFully();
    for (var i = 0; i < 5; i++) {
        var mob = em.getMonster(9300124);
        var mob2 = em.getMonster(9300125);
        var mob3 = em.getMonster(9300124);
        var mob4 = em.getMonster(9300125);
        eim.registerMonster(mob);
        eim.registerMonster(mob2);
        eim.registerMonster(mob3);
        eim.registerMonster(mob4);
        map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(430, 75));
        map.spawnMonsterOnGroundBelow(mob2, new java.awt.Point(1600, 75));
        map.spawnMonsterOnGroundBelow(mob3, new java.awt.Point(430, 238));
        map.spawnMonsterOnGroundBelow(mob4, new java.awt.Point(1600, 238));
    }
    map = eim.setInstanceMap(925100201);
    map.resetFully();
    for (var i = 0; i < 10; i++) {
        var mob = em.getMonster(9300112);
        var mob2 = em.getMonster(9300113);
        eim.registerMonster(mob);
        eim.registerMonster(mob2);
        map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(0, 238));
        map.spawnMonsterOnGroundBelow(mob2, new java.awt.Point(1700, 238));
    }
    eim.setInstanceMap(925100202).resetFully();
    map = eim.setInstanceMap(925100300);
    map.resetFully();
    for (var i = 0; i < 5; i++) {
        var mob = em.getMonster(9300124);
        var mob2 = em.getMonster(9300125);
        var mob3 = em.getMonster(9300124);
        var mob4 = em.getMonster(9300125);
        eim.registerMonster(mob);
        eim.registerMonster(mob2);
        eim.registerMonster(mob3);
        eim.registerMonster(mob4);
        map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(430, 75));
        map.spawnMonsterOnGroundBelow(mob2, new java.awt.Point(1600, 75));
        map.spawnMonsterOnGroundBelow(mob3, new java.awt.Point(430, 238));
        map.spawnMonsterOnGroundBelow(mob4, new java.awt.Point(1600, 238));
    }
    map = eim.setInstanceMap(925100301);
    map.resetFully();
    for (var i = 0; i < 10; i++) {
        var mob = em.getMonster(9300112);
        var mob2 = em.getMonster(9300113);
        eim.registerMonster(mob);
        eim.registerMonster(mob2);
        map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(0, 238));
        map.spawnMonsterOnGroundBelow(mob2, new java.awt.Point(1700, 238));
    }
    eim.setInstanceMap(925100302).resetFully();
    eim.setInstanceMap(925100400).resetFully();
    eim.setInstanceMap(925100500).resetFully();
    eim.startEventTimer(1200000);
    return eim;
}
function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
    player.tryPartyQuest(1204);
}
function playerRevive(eim, player) {
}
function scheduledTimeout(eim) {
    end(eim);
}
function changedMap(eim, player, mapid) {
    if (mapid < 925100000 || mapid > 925100500) {
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
    eim.disposeIfPlayerBelow(100, 925100700);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}
function clearPQ(eim) {
    end(eim);
}
function allMonstersDead(eim) {
}
function leftParty(eim, player) {
    end(eim);
}
function disbandParty(eim) {
    end(eim);
}
function playerDead(eim, player) {}
function cancelSchedule() {}
function monsterDamaged(eim, player, mobId, damage){

}

//玩家使用原地復活
function playerUseWheelRevive(eim, player) {
    player.changeMap(player.getMapId(), 0);
    eim.setProperty("member"+player.getId(), "1");
}
//玩家不使用原地復活
function playerIgnoreWheelRevive(eim, player) {
    eim.unregisterPlayer(player);
    player.changeMap(251010404, 0);
    eim.setProperty("member"+player.getId(), "0");
    if(eim.getPlayerCount()==0){
        end(eim);
    }
}