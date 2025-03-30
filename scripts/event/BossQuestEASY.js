var eventmapid = 220080001;
var returnmap = 910000000;

var monster = new Array(
        9300003,
        2220000,
        3220000,
        5220002,
        6220000,
        9300012,
        5220001,
        8220000,
        4220000,
        7220001,
        5220003,
        3220001,
        6220001,
        7220000,
        7220002,
        8220002,
        8220001);

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
    var mob = em.getMonster(monster[parseInt(eim.getProperty("monster_number"))]);
    eim.registerMonster(mob);
    var map = eim.getMapInstance(0);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(0, -435));
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
    var num = mobnum;
    var totalp = parseInt(eim.getProperty("points")) + num;
    eim.setProperty("points", String(totalp));
    eim.broadcastPlayerMsg(5, "您獲得了 " + num + " BOSS 點數，目前共有 " + totalp + " 點");
    eim.saveBossQuest(num);
    if (mobnum < monster.length) {
        eim.broadcastPlayerMsg(6, "下一隻 BOSS 即將出現 !");
    } else {
        eim.saveBossQuest(20);
        eim.broadcastPlayerMsg(5, "你的隊伍挑戰簡易模式成功，獲得 20 BOSS 點數");
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