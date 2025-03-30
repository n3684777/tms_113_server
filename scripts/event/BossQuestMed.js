var eventmapid = 220080001;
var returnmap = 910000000;

var monster = new Array(
        4130103,
        9300039,
        9300119,
        9300152,
        9400549,
        9300028,
        8180000,
        8180001,
        8220003,
        9400014,
        8500001);

function init() {
}

function setup(partyid) {
    var instanceName = "BossQuest" + partyid;
    var eim = em.newInstance(instanceName);
    var map = eim.createInstanceMapS(eventmapid);
    map.toggleDrops();
    map.spawnNpc(9209101, new java.awt.Point(-795, -557));
    eim.setProperty("points", "0");
    eim.setProperty("monster_number", "0");
    beginQuest(eim);
    return eim;
}

function beginQuest(eim) {
    if (eim != null) {
        eim.startEventTimer(5000);
    }
}

function monsterSpawn(eim) {
    var monsterid = monster[parseInt(eim.getProperty("monster_number"))];
    var mob = em.getMonster(monsterid);
    switch (monsterid) {
        case 8180000:
        case 8180001:
            var modified = em.newMonsterStats();
            modified.setOExp(mob.getMobExp() * 8);
            modified.setOHp(mob.getMobMaxHp() * 4);
            modified.setOMp(mob.getMobMaxMp() * 1.5);
            mob.setOverrideStats(modified);
            break;
        case 4130103:
            var modified = em.newMonsterStats();
            modified.setOExp(mob.getMobExp() * 5);
            modified.setOHp(mob.getMobMaxHp() * 8);
            modified.setOMp(mob.getMobMaxMp() * 1.5);
            mob.setOverrideStats(modified);
            break;
        case 8220003:
            var modified = em.newMonsterStats();
            modified.setOExp(mob.getMobExp() * 5);
            modified.setOHp(mob.getMobMaxHp() * 3);
            modified.setOMp(mob.getMobMaxMp() * 1.5);
            mob.setOverrideStats(modified);
            break;
        case 9300119:
        case 9300152:
        case 9400549:
            var modified = em.newMonsterStats();
            modified.setOExp(mob.getMobExp() * 3);
            modified.setOHp(mob.getMobMaxHp() * 3);
            modified.setOMp(mob.getMobMaxMp() * 1.5);
            mob.setOverrideStats(modified);
            break;
        case 9500392:
        case 9300028:
            var modified = em.newMonsterStats();
            modified.setOExp(mob.getMobExp() * 3);
            modified.setOHp(mob.getMobMaxHp() * 3);
            modified.setOMp(mob.getMobMaxMp() * 1.5);
            mob.setOverrideStats(modified);
            break;
        case 8500001:
            var modified = em.newMonsterStats();
            modified.setOExp(mob.getMobExp() * 0.3);
            modified.setOHp(mob.getMobMaxHp() * 2.5);
            modified.setOMp(mob.getMobMaxMp() * 1.5);
            mob.setOverrideStats(modified);
            break;
        case 9400014:
        case 9300039:
            var modified = em.newMonsterStats();
            modified.setOExp(mob.getMobExp() * 1.5);
            modified.setOHp(mob.getMobMaxHp() * 1.5);
            modified.setOMp(mob.getMobMaxMp() * 1.5);
            mob.setOverrideStats(modified);
            break;
        case 8210011:
            var modified = em.newMonsterStats();
            modified.setOExp(mob.getMobExp() * 2.2);
            modified.setOHp(mob.getMobMaxHp() * 1.1);
            modified.setOMp(mob.getMobMaxMp() * 0.8);
            mob.setOverrideStats(modified);
            break;
    }
    eim.registerMonster(mob);
    var map = eim.getMapInstance(0);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-400, -386));
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
}

function changedMap(eim, player, mapid) {
    if (mapid != eventmapid) {
        eim.unregisterPlayer(player);
        eim.disposeIfPlayerBelow(0, 0);
    }
}

function scheduledTimeout(eim) {
    var num = parseInt(eim.getProperty("monster_number"));
    if (num < monster.length) {
        monsterSpawn(eim);
        eim.setProperty("monster_number", String(num + 1));
    } else {
        eim.disposeIfPlayerBelow(100, returnmap);
    }
}

function allMonstersDead(eim) {
    eim.restartEventTimer(3000);
    var mobnum = parseInt(eim.getProperty("monster_number"));
    var num = mobnum * 2;
    var totalp = parseInt(eim.getProperty("points")) + num;
    eim.setProperty("points", String(totalp));
    eim.broadcastPlayerMsg(5, "您獲得了 " + num + " BOSS 點數，目前共有 " + totalp + " 點");
    eim.saveBossQuest(num);
    if (mobnum < monster.length) {
        eim.broadcastPlayerMsg(6, "下一隻 BOSS 即將出現 !");
    } else {
        eim.saveBossQuest(40);
        eim.broadcastPlayerMsg(5, "你的隊伍挑戰普通模式成功，獲得 40 BOSS 點數");
    }
}

function playerDead(eim, player) {
}

function playerRevive(eim, player) {
    return true;
}

function playerDisconnected(eim, player) {
    return 0;
}

function monsterValue(eim, mobid) {
    return 0;
}

function leftParty(eim, player) {
    eim.unregisterPlayer(player);
    var map = em.getMapFactory().getMap(returnmap);
    player.changeMap(map, map.getPortal(0));
    eim.disposeIfPlayerBelow(0, 0);
}

function disbandParty(eim, player) {
    eim.disposeIfPlayerBelow(100, returnmap);
}

function clearPQ(eim) {
}

function removePlayer(eim, player) {
    eim.dispose();
}

function registerCarnivalParty(eim, carnivalparty) {
}

function onMapLoad(eim, player) {
}

function cancelSchedule() {
}