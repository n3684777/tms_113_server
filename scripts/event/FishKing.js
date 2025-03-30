function init() {
    em.setProperty("state", "0");
}

function setup() {
    var eim = em.newInstance("FishKing");

    var map = eim.createInstanceMap(741000100);
    em.setProperty("state", "1");
    map.toggleGDrops();
    map.resetFully();
    // eim.registerMapMonster();
    eim.setProperty("end", "false");
    eim.startEventTimer(10 * 60 * 1000); // 10 mins
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    // player.resetFishKingScore();
    player.changeMap(map, map.getPortal(0));
}

function playerRevive(eim, player) {
    return false;
}

function changedMap(eim, player, mapid) {
    if (mapid != 741000100) {
        eim.unregisterPlayer(player);
        eim.disposeIfPlayerBelow(0, 0);
        em.setProperty("state", "0");
    }
}

function playerDisconnected(eim, player) {
    return 0;
}

function monsterValue(eim, mobId) {
    // 9410016 泡泡魚 20
    // 9410017 毒角尼莫 -5
    // 9410018 河豚 10
    // 9410019 黃金海馬 15
    // 9410020 海豹 -50
    eim.registerMapMonster();
    var iter = eim.getMapInstance(0).getCharactersThreadsafe().iterator();

    var point = 0;
    switch (mobId) {
        case 9410016:
            point = 20;
            break;
        case 9410017:
            point = -5;
            break;
        case 9410018:
            point = 10;
            break;
        case 9410019:
            point = 15;
            break;
        case 9410020:
            point = -50;
            break;
    }
    while (iter.hasNext()) {
        var chr = iter.next();
        if (chr == null) {
            continue;
        }
        chr.dropMessage(-1, "分數: " + point);
        // chr.updateFishKingScore(point);
        // chr.addMonsterKillInMap(mobId);
    }
    return 1;
}

function scheduledTimeout(eim) {
    if (eim.getProperty("end") == "false") {
        eim.startEventTimer(5 * 1000); // 5 sec
        eim.setProperty("end", "true");
    } else if (eim.getProperty("end") == "true") {
        end(eim);
    }
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);
    if (eim.disposeIfPlayerBelow(0, 0)) {
        em.setProperty("state", "0");
    }
}

function end(eim) {
    var iter = eim.getMapInstance(0).getCharactersThreadsafe().iterator();
    var map = eim.getMapFactory().getMap(741000000);
    while (iter.hasNext()) {
        var chr = iter.next();
        if (chr == null) {
            continue;
        }
        eim.unregisterPlayer(chr);
        chr.changeMap(map, map.getPortal(0));
    }
    if (eim.disposeIfPlayerBelow(0, 0)) {
        em.setProperty("state", "0");
    }
    eim.dispose();
}

function clearPQ(eim) {}
function allMonstersDead(eim) {}
function leftParty(eim, player) {}
function disbandParty(eim) {}
function playerDead(eim, player) {}
function cancelSchedule() {}
