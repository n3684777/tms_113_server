var fullhp = 6000000;
function init() {
    em.setProperty("state", "0");
    em.setProperty("balrogState", "0");
    em.setProperty("leader", "true");
}
function setup(eim, leaderid) {
    em.setProperty("state", "1");
    em.setProperty("balrogState", "0");
    em.setProperty("leader", "true");
    var eim = em.newInstance("BossBalrog_EASY" + leaderid);
    eim.setInstanceMap(105100300).resetFully();
    eim.setInstanceMap(105100301).resetFully();
    eim.schedule("spawn", 5000);
    eim.schedule("checkHP", 305000);
    return eim;
}
function spawn(eim) {
    var map = eim.getMapInstance(0);
    var mob1 = em.getMonster(8830007);
    var mob2 = em.getMonster(8830001);
    var mob3 = em.getMonster(8830009);
    var modified1 = em.newMonsterStats();
    modified1.setOHp(fullhp);
    modified1.setOMp(mob1.getMobMaxMp());
    var modified2 = em.newMonsterStats();
    modified2.setOHp(fullhp);
    modified2.setOMp(mob2.getMobMaxMp());
    var modified3 = em.newMonsterStats();
    modified3.setOHp(fullhp);
    modified3.setOMp(mob3.getMobMaxMp());
    mob1.setOverrideStats(modified1);
    mob2.setOverrideStats(modified2);
    mob3.setOverrideStats(modified3);
    eim.registerMonster(mob1);
    eim.registerMonster(mob2);
    eim.registerMonster(mob3);
    map.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(412, 258));
    map.spawnMonsterOnGroundBelow(mob2, new java.awt.Point(412, 258));
    map.spawnMonsterOnGroundBelow(mob3, new java.awt.Point(412, 258));
    eim.startEventTimer(1200000);
}
function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
    eim.applyBuff(player, 2022536);
    if (player.haveItem(1302014)) {
        eim.applyBuff(player, 2022537);
    }
}
function changedMap(eim, player, mapid) {
    if (mapid != 105100300 && mapid != 105100301) {
        playerExit(eim, player);
    }
}
function playerExit(eim, player) {
    eim.unregisterPlayer(player);
    player.dispelBuff(2022536);
    player.dispelBuff(2022537);
    if (eim.disposeIfPlayerBelow(0, 0)) {
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
        em.setProperty("balrogState", "0");
    }
}
function scheduledTimeout(eim) {
    end(eim);
}
function allMonstersDead(eim) {}
function warpWinnersOut(eim) {
    var party = eim.getPlayers();
    var map = eim.getMapInstance(1);
    for (var i = 0; i < party.size(); i++) {
        party.get(i).changeMap(map, map.getPortal(0));
        party.get(i).dispelBuff(2022536);
        party.get(i).dispelBuff(2022537);
        party.get(i).forceCompleteQuest(2241);
        party.get(i).forceCompleteQuest(2242);
        party.get(i).forceCompleteQuest(2243);
        party.get(i).forceCompleteQuest(2244);
        party.get(i).forceCompleteQuest(2245);
    }
}
function playerDead(eim, player) {}
function playerRevive(eim, player) {
    return false;
}
function playerDisconnected(eim, player) {
    return 0;
}
function monsterValue(eim, mobid) {
    if (em.getProperty("balrogState").equals("1") && eim.getMapInstance(0).getMonsterById(8830007) == null && eim.getMapInstance(0).getMonsterById(8830008) == null && eim.getMapInstance(0).getMonsterById(8830009) == null) {
        eim.broadcastPlayerMsg(6, "Balrog has been beaten!");
        eim.getMapInstance(0).changeEnvironment("balog/clear/stone", 3);
        eim.restartEventTimer(605000);
        eim.schedule("warpWinnersOut", 5000);
    }
    return 1;
}
function leftParty(eim, player) {}
function disbandParty(eim, player) {}
function end(eim) {
    eim.disposeIfPlayerBelow(100, 105100100);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
    em.setProperty("balrogState", "0");
}
function clearPQ(eim) {
    end(eim);
}
function removePlayer(eim, player) {}
function registerCarnivalParty(eim, carnivalparty) {}
function onMapLoad(eim, player) {}
function cancelSchedule() {}
function checkHP(eim) {
    var map = eim.getMapInstance(0);
    var mobs = map.getAllMonstersThreadsafe();
    var hpDone = 0;
    for (var i = 0; i < mobs.size(); i++) {
        hpDone += (fullhp - mobs.get(i).getHp());
    }
    if (hpDone > 120000) {
        var mob = em.getMonster(8830013);
        eim.registerMonster(mob);
        map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(416, 258));
        map.killMonster(8830001);
        map.killMonster(8830013);
        var mob1 = em.getMonster(8830007);
        var mob2 = em.getMonster(8830008);
        var mob3 = em.getMonster(8830009);
        eim.registerMonster(mob1);
        eim.registerMonster(mob2);
        eim.registerMonster(mob3);
        map.killMonster(8830007);
        map.killMonster(8830009);
        map.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(416, 258));
        map.spawnMonsterOnGroundBelow(mob2, new java.awt.Point(416, 258));
        map.spawnMonsterOnGroundBelow(mob3, new java.awt.Point(416, 258));
        em.setProperty("balrogState", "1");
    } else {
        eim.broadcastPlayerMsg(6, "Balrog was too strong and has overcome you.");
        end(eim);
    }
}