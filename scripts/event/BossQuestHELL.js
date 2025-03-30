var eventmapid = 551030200;
var returnmap = 910000000;
var monster = Array(9400300,9420014,9400266,9400289,0);

function init() {
}

function setup(partyid) {
    var instanceName = "BossQuest" + partyid;
    var eim = em.newInstance(instanceName);
    var map = eim.createInstanceMapS(eventmapid);
    map.toggleDrops();
    map.spawnNpc(9209101, new java.awt.Point(148, 1));
    eim.setProperty("points", "0");
    eim.setProperty("monster_number", "0");
    eim.setProperty("n_spawn", "0");
    beginQuest(eim);
    return eim;
}

function beginQuest(eim) {
    if (eim != null) {
        eim.startEventTimer(5000);
    }
}

function monsterValue(eim, mobid) {
    if (mobid == 8820002 || mobid == 8820015 || mobid == 8820016 || mobid == 8820017 || mobid == 8820018) {
        eim.getMapInstance(0).killMonster(8820019);
    }
    return 0;
}

function monsterSpawn(eim) {
    var monsterid = monster[parseInt(eim.getProperty("monster_number"))];
    if (monsterid == 0) {
        if (parseInt(eim.getProperty("n_spawn")) == 0) {
            monsterid = 9400300;
            eim.setProperty("n_spawn", "1");
            monsterSpawn(eim);
        } else if (parseInt(eim.getProperty("n_spawn")) == 1) {
            monsterid = 9420014;
            eim.setProperty("n_spawn", "2");
            monsterSpawn(eim);
        } else if (parseInt(eim.getProperty("n_spawn")) == 2) {
            monsterid = 9400266;
            eim.setProperty("n_spawn", "3");
            monsterSpawn(eim);
        } else if (parseInt(eim.getProperty("n_spawn")) == 3) {
            monsterid = 9400289;
            eim.setProperty("n_spawn", "4");
        }
    }
    var mob = em.getMonster(monsterid);
    var modified = em.newMonsterStats();
    modified.setOMp(mob.getMobMaxMp());
    switch (monsterid) {
        case 9400300:    
        case 8840000:    
            modified.setOExp(mob.getMobExp() * 1.5);
            modified.setOHp(mob.getMobMaxHp() * 500.5);
            break;
        case 8820001:
            modified.setOExp(mob.getMobExp() * 2);
            modified.setOHp(mob.getMobMaxHp() * 500);
            break;
        case 9400266:
            modified.setOExp(mob.getMobExp() * 2.2);
            modified.setOHp(mob.getMobMaxHp() * 500);
            break;
        case 9400289:
            modified.setOExp(mob.getMobExp() * 3);
            modified.setOHp(mob.getMobMaxHp() * 500);
            break; 
		  case 9420014:
            modified.setOExp(mob.getMobExp() * 3);
            modified.setOHp(mob.getMobMaxHp() * 500);
            break; 	
    }
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);
    var map = eim.getMapInstance(0);
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
    var num = mobnum * 5;
    var totalp = parseInt(eim.getProperty("points")) + num;
    eim.setProperty("points", String(totalp));
    eim.broadcastPlayerMsg(5, "您獲得了 " + num + " BOSS 點數，目前共有 " + totalp + " 點");
    eim.saveBossQuest(num);
    if (mobnum < monster.length) {
        eim.broadcastPlayerMsg(6, "下一隻 BOSS 即將出現 !");
    } else {
        eim.saveBossQuest(1500);
        eim.broadcastPlayerMsg(5, "你的隊伍挑戰地獄模式成功，獲得 1500 BOSS 點數");
        eim.giveAchievement(22);
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