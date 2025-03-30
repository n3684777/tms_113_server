var eventmapid = 551030200;
var returnmap = 910000000;
var rewardnpc = 9209101;
var returnnpc = 9209101;
var stagetime = 10 * 60 * 1000; // 每關10分鐘

var monster = new Array(
        8220004,
        8220005,
        8220006,
        9400121,
        9400405,
        9420549,
        9420544,
        8800002);

function init() {
}

function setup(partyid) {
    var instanceName = "BossQuest_Special" + partyid;
    var eim = em.newInstance(instanceName);
    var map = eim.createInstanceMapS(eventmapid);
    map.toggleDrops();
    map.spawnNpc(returnnpc, new java.awt.Point(-364, 220));
    eim.setProperty("points", "0");
    eim.setProperty("monster_number", "0");
    eim.setProperty("continue", "true");
    eim.startEventTimer(5000);
    return eim;
}

function monsterSpawn(eim) {
    var monsterid = monster[parseInt(eim.getProperty("monster_number"))];
    var mob = em.getMonster(monsterid);
    switch (monsterid) {
        case 8220004:
        case 8220005:
        case 8220006:
            var modified = em.newMonsterStats();
            modified.setOExp(mob.getMobExp() * 7);
            modified.setOHp(mob.getMobMaxHp() * 4);
            modified.setOMp(mob.getMobMaxMp());
            mob.setOverrideStats(modified);
            break;
        case 8300006:
            var modified = em.newMonsterStats();
            modified.setOExp(mob.getMobExp() * 0.5);
            modified.setOHp(mob.getMobMaxHp() * 0.7);
            modified.setOMp(mob.getMobMaxMp());
            mob.setOverrideStats(modified);
            break;
        case 9400121:
            var modified = em.newMonsterStats();
            modified.setOExp(mob.getMobExp() * 1.4);
            modified.setOHp(mob.getMobMaxHp() * 2);
            modified.setOMp(mob.getMobMaxMp());
            mob.setOverrideStats(modified);
            break;
        case 9400405:
            var modified = em.newMonsterStats();
            modified.setOExp(mob.getMobExp() * 1.4);
            modified.setOHp(mob.getMobMaxHp() * 3);
            modified.setOMp(mob.getMobMaxMp());
            mob.setOverrideStats(modified);
            break;
        case 9420549:
        case 9420544:
            var modified = em.newMonsterStats();
            modified.setOExp(mob.getMobExp() * 0.8);
            modified.setOHp(mob.getMobMaxHp() * 1.8);
            modified.setOMp(mob.getMobMaxMp());
            mob.setOverrideStats(modified);
            break;
        case 8800002:
            var modified = em.newMonsterStats();
            modified.setOExp(mob.getMobExp() * 1.2);
            modified.setOHp(mob.getMobMaxHp() * 3);
            modified.setOMp(mob.getMobMaxMp());
            mob.setOverrideStats(modified);
            break;
    }
    eim.registerMonster(mob);
    var map = eim.getMapInstance(parseInt(eim.getProperty("monster_number")));
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-364, 640));
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
}

function changedMap(eim, player, mapid) {
    if (mapid != eventmapid) {
        eim.unregisterPlayer(player);
        eim.disposeIfPlayerBelow(0, 0);
    } else {
        eim.restartEventTimer(3000);
        var mobnum = parseInt(eim.getProperty("monster_number"));
        var num = mobnum * 3;
        var totalp = parseInt(eim.getProperty("points")) + num;
        eim.setProperty("points", String(totalp));
        eim.broadcastPlayerMsg(5, "您獲得了 " + num + " BOSS 點數，目前共有 " + totalp + " 點");
        eim.saveBossQuest(num);
        if (mobnum < monster.length) {
            eim.broadcastPlayerMsg(6, "下一隻 BOSS 即將出現 !");
        } else {
            eim.saveBossQuest(500);
            eim.broadcastPlayerMsg(5, "你的隊伍挑戰困難模式成功，獲得 500 BOSS 點數");
        }
    }
}

function scheduledTimeout(eim) {
    if (eim.getProperty("continue").equals("true")) {
        var num = parseInt(eim.getProperty("monster_number"));
        if (num < monster.length) {
            monsterSpawn(eim);
            eim.setProperty("monster_number", String(num + 1));
        }
        eim.setProperty("continue", "false");
        eim.restartEventTimer(stagetime);
    } else {
        eim.disposeIfPlayerBelow(100, returnmap);
    }
}

function allMonstersDead(eim) {
    //開傳送門
    var map = eim.spawnDoor(-594, 640, eventmapid);
    map.toggleDrops();
    var stage = parseInt(eim.getProperty("monster_number"));
    if (stage >= monster.length) {
        map.spawnNpc(rewardnpc, new java.awt.Point(-594, 640));
    } else {
        map.spawnNpc(returnnpc, new java.awt.Point(-364, 220));
    }
    eim.setProperty("continue", "true");
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