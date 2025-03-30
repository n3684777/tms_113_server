var i = 5;
var mapId = 270050100;
var returnMap;
var setupTask;
function init() {
    em.setProperty("entryPossible", "false");
    scheduleNew();
}
function scheduleNew() {
    var cal = java.util.Calendar.getInstance();
    cal.set(java.util.Calendar.HOUR, 3);
    cal.set(java.util.Calendar.MINUTE, 50);
    cal.set(java.util.Calendar.SECOND, 0);
    var nextTime = cal.getTimeInMillis();
    while (nextTime <= java.lang.System.currentTimeMillis()) {
        nextTime += 1000 * 60 * 60 * 4;
    }
    setupTask = em.scheduleAtTimestamp("setup", nextTime);
}
function cancelSchedule() {
    setupTask.cancel(true);
}
function setup() {
    em.setProperty("entryPossible", "false");
    returnMap = em.getChannelServer().getMapFactory().getMap(101000000);
    var createInstances = new Array("lolcastle1",
            "lolcastle2",
            "lolcastle3",
            "lolcastle4",
            "lolcastle5");
    var x;
    for (x = 0; x < createInstances.length; x++) {
        var eim = em.newInstance(createInstances[x]);
        var map = eim.createInstanceMap(mapId);
        map.toggleDrops();
    }
    for (x = 0; x < 5; x++) {
        em.schedule("announce", 5 * 60000 + x * 60000);
    }
    em.schedule("mesoDistribution", 5 * 60000 + x * 60000);
    em.schedule("start", 5 * 60000 + (x + 1) * 60000);
    em.schedule("timeOut", 11 * 60000 + 1200000);
}
function announce() {
    em.setProperty("entryPossible", "true");
    if (i == 0)
        i = 5;
    em.getChannelServer().broadcastPacket(tools.MaplePacketCreator.serverNotice(6, "[Event] Field of Judgement will open in " + i + " minutes"));
    i--;
}
function mesoDistribution() {
    em.setProperty("entryPossible", "false");
    var iter = em.getInstances().iterator();
    while (iter.hasNext()) {
        var eim = iter.next();
        if (eim.getPlayerCount() > 0) {
            var meso = eim.getPlayerCount() * 500000;
            var randWinner = Math.floor(Math.random() * eim.getPlayerCount());
            var winner = eim.getPlayers().get(randWinner);
            var map = eim.getMapInstance(mapId);
            map.broadcastMessage(tools.MaplePacketCreator.serverNotice(6, "[Event] " + winner.getName() + " wins " + meso + " meso"));
            winner.gainMeso(meso, true, true, true);
        }
    }
}
function start() {
    scheduleNew();
    em.getChannelServer().broadcastPacket(
            tools.MaplePacketCreator.serverNotice(6, "[Event] Field of Judgement is now open"));
    var iter = em.getInstances().iterator();
    while (iter.hasNext()) {
        var eim = iter.next();
        if (eim.getPlayerCount() > 0) {
            startInstance(eim);
        }
    }
}
function randX() {
    return -600 + Math.floor(Math.random() * 1800);
}
function startInstance(eim) {
    if (eim.getPlayerCount() > 0) {
        var iter = eim.getPlayers().iterator();
        while (iter.hasNext()) {
            var player = iter.next();
            player.getClient().getSession().write(tools.MaplePacketCreator.getClock(1200));
        }
        var map = eim.getMapInstance(mapId);
        if (eim.getName().equals("lolcastle1")) {
            for (var x = 0; x < 100; x++) {
                var mob = em.getMonster(9500169);
                var overrideStats = new server.life.MapleMonsterStats();
                overrideStats.setHp(mob.getHp() * 3);
                overrideStats.setExp(mob.getExp() / 4);
                overrideStats.setMp(mob.getMaxMp());
                mob.setOverrideStats(overrideStats);
                mob.setHp(mob.getHp() * 3);
                eim.registerMonster(mob);
                map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(randX(), 100));
            }
            for (var x = 0; x < 10; x++) {
                var mob = em.getMonster(9300136);
                var overrideStats = new server.life.MapleMonsterStats();
                overrideStats.setHp(15000);
                overrideStats.setExp(mob.getExp());
                overrideStats.setMp(mob.getMaxMp());
                mob.setOverrideStats(overrideStats);
                mob.setHp(15000);
                eim.registerMonster(mob);
                map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(randX(), 100));
            }
        } else if (eim.getName().equals("lolcastle2")) {
            for (var x = 0; x < 100; x++) {
                var mob = em.getMonster(5120000);
                var overrideStats = new server.life.MapleMonsterStats();
                overrideStats.setHp(30000);
                overrideStats.setExp(mob.getExp() / 4);
                overrideStats.setMp(mob.getMaxMp());
                mob.setOverrideStats(overrideStats);
                mob.setHp(30000);
                eim.registerMonster(mob);
                map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(randX(), 100));
            }
            for (var x = 0; x < 3; x++) {
                var mob = em.getMonster(9300012);
                var overrideStats = new server.life.MapleMonsterStats();
                overrideStats.setHp(mob.getHp());
                overrideStats.setExp(mob.getExp());
                overrideStats.setMp(mob.getMaxMp());
                mob.setOverrideStats(overrideStats);
                eim.registerMonster(mob);
                map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(randX(), 100));
            }
        } else if (eim.getName().equals("lolcastle3")) {
            for (var x = 0; x < 100; x++) {
                var mobId;
                if (x < 33) {
                    mobId = 7130400;
                } else if (x < 66) {
                    mobId = 7130401;
                } else {
                    mobId = 7130402;
                }
                var mob = em.getMonster(mobId);
                var overrideStats = new server.life.MapleMonsterStats();
                overrideStats.setHp(mob.getHp() * 2);
                overrideStats.setExp(mob.getExp() / 4);
                overrideStats.setMp(mob.getMaxMp());
                mob.setOverrideStats(overrideStats);
                eim.registerMonster(mob);
                map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(randX(), 100));
            }
            for (var x = 0; x < 3; x++) {
                var mob = em.getMonster(9300105);
                var overrideStats = new server.life.MapleMonsterStats();
                overrideStats.setHp(mob.getHp());
                overrideStats.setExp(mob.getExp() / 4);
                overrideStats.setMp(mob.getMaxMp());
                mob.setOverrideStats(overrideStats);
                eim.registerMonster(mob);
                map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(randX(), 100));
            }
        } else if (eim.getName().equals("lolcastle4")) {
            for (var x = 0; x < 78; x++) {
                var mobId;
                if (x < 25) {
                    mobId = 7130010;
                } else if (x < 50) {
                    mobId = 7130001;
                } else if (x < 75) {
                    mobId = 9500134;
                } else {
                    mobId = 9300039;
                }
                var mob = em.getMonster(mobId);
                var overrideStats = new server.life.MapleMonsterStats();
                if (x >= 75) {
                    overrideStats.setExp(mob.getExp());
                    overrideStats.setHp(mob.getHp());
                } else {
                    overrideStats.setExp(mob.getExp() / 4);
                    overrideStats.setHp(mob.getHp() * 2);
                }
                overrideStats.setMp(mob.getMaxMp());
                mob.setOverrideStats(overrideStats);
                if (x < 75) {
                    mob.setHp(mob.getHp() * 2);
                } else {
                    mob.setHp(mob.getHp());
                }
                eim.registerMonster(mob);
                map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(randX(), 100));
            }
        } else if (eim.getName().equals("lolcastle5")) {
            for (var x = 0; x < 90; x++) {
                var mobId;
                if (x < 30) {
                    mobId = 8141100;
                } else if (x < 60) {
                    mobId = 8140600;
                } else {
                    mobId = 8150100;
                }
                var mob = em.getMonster(mobId);
                var overrideStats = new server.life.MapleMonsterStats();
                overrideStats.setHp(mob.getHp());
                overrideStats.setExp(mob.getExp() / 4);
                overrideStats.setMp(mob.getMaxMp());
                mob.setOverrideStats(overrideStats);
                eim.registerMonster(mob);
                map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(randX(), 100));
            }
            for (var x = 0; x < 3; x++) {
                var mob = em.getMonster(9300152);
                var overrideStats = new server.life.MapleMonsterStats();
                overrideStats.setHp(2000000);
                overrideStats.setExp(mob.getExp());
                overrideStats.setMp(mob.getMaxMp());
                mob.setOverrideStats(overrideStats);
                mob.setHp(2000000);
                eim.registerMonster(mob);
                map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(randX(), 100));
            }
        }
    }
}
function monsterValue(eim, mobId) {
    switch (mobId) {
        case 9300152:
            return 15;
        case 9300039:
            return 15;
        case 9300105:
            return 15;
        case 9300012:
            return 15;
        case 9300136:
            return 5;
        default:
            return 1;
    }
}
function playerEntry(eim, player) {
    var map = eim.getMapInstance(mapId);
    player.changeMap(map, map.getPortal(0));
}
function playerDead(eim, player) {
    player.setHp(1);
    player.changeMap(returnMap, returnMap.getPortal(0));
    eim.unregisterPlayer(player);
    player.getClient().getSession().write(tools.MaplePacketCreator.serverNotice(1, "You lost with " + eim.getKillCount(player) + " points."));
}
function playerDisconnected(eim, player) {
    eim.unregisterPlayer(player);
    player.getMap().removePlayer(player);
    player.setMap(returnMap);
}
function allMonstersDead(eim) {
    if (eim.getPlayerCount() > 1) {
        var maxKC = 0;
        var maxPlayer = null;
        var iter = eim.getPlayers().iterator();
        while (iter.hasNext()) {
            var curPlayer = iter.next();
            if (eim.getKillCount(curPlayer) <= maxKC) {
                playerDead(eim, curPlayer);
            } else if (eim.getKillCount(curPlayer) > maxKC) {
                if (maxPlayer != null) {
                    playerDead(eim, maxPlayer);
                }
                maxPlayer = curPlayer;
                maxKC = eim.getKillCount(maxPlayer);
            }
        }
    }
    var map = eim.getMapInstance(mapId);
    var ii = server.MapleItemInformationProvider.getInstance();
    var priceRand = 1 + Math.floor(Math.random() * 100);
    var price;
    if (priceRand <= 35) {
        var weaponId;
        do {
            weaponId = 1702000 + Math.floor(Math.random() * 176);
        } while (ii.getSlotMax(weaponId) == 0);
        price = ii.getEquipById(weaponId);
    } else if (priceRand > 35 && priceRand <= 37) {
        var uberWeapons;
        if (eim.getName().equals("lolcastle1") || eim.getName().equals("lolcastle2")) {
            uberWeapons = new Array(1452008,
                    1472021,
                    1462007,
                    1332054,
                    1312008,
                    1322021,
                    1302010,
                    1442046,
                    1432004,
                    1382011,
                    1412003,
                    1422005,
                    1402013,
                    1372011);
        } else {
            uberWeapons = new Array(1452019,
                    1472053,
                    1462015,
                    1332051,
                    1312030,
                    1322045,
                    1302056,
                    1442044,
                    1432030,
                    1382035,
                    1412021,
                    1422027,
                    1402037,
                    1372010,
                    1302026,
                    1102041
                    );
        }
        var uberRand = Math.floor(Math.random() * uberWeapons.length);
        var weaponId = uberWeapons[uberRand];
        price = ii.randomizeStats(ii.getEquipById(weaponId));
    } else if (priceRand > 37 && priceRand <= 45) {
        var scrolls30;
        if (eim.getName().equals("lolcastle1") || eim.getName().equals("lolcastle2")) {
            scrolls30 = new Array(
                    2040009,
                    2040011,
                    2040309,
                    2040405,
                    2040409,
                    2040511,
                    2040605,
                    2040607,
                    2040609,
                    2040611,
                    2040713,
                    2040717,
                    2040809,
                    2040813,
                    2040905,
                    2040909,
                    2041027,
                    2041029,
                    2041031,
                    2041033, 2041034,
                    2041036,
                    2041038,
                    2041040,
                    2043004,
                    2043104,
                    2043204,
                    2043304,
                    2043704,
                    2043804,
                    2044004,
                    2044104,
                    2044204,
                    2044304,
                    2044404,
                    2044504,
                    2044604,
                    2044704
                    );
        } else {
            scrolls30 = new Array(
                    2040013,
                    2040015,
                    2040307,
                    2044705,
                    2044505,
                    2043305,
                    2044605,
                    2040407,
                    2040411,
                    2040907,
                    2041035,
                    2041037,
                    2041039,
                    2041041,
                    2043105,
                    2044105,
                    2043205,
                    2044205,
                    2043005,
                    2044005,
                    2044405,
                    2044305,
                    2043805,
                    2043705,
                    2040715,
                    2040509,
                    2040519,
                    2040521,
                    2040811,
                    2040815,
                    2040305,
                    2040917,
                    2040922,
                    2043007
                    );
        }
        var scrollRand = Math.floor(Math.random() * scrolls30.length);
        price = new client.Item(scrolls30[scrollRand], 0, 1, 0);
    } else if (priceRand > 45 && priceRand <= 70) {
        var powerUps = new Array(new Array(2022273, 3),
                new Array(2022245, 3),
                new Array(2022179, 1));
        var powerRand = Math.floor(Math.random() * powerUps.length);
        price = new client.Item(powerUps[powerRand][0], 0, powerUps[powerRand][1], 0);
    } else if (priceRand > 70 && priceRand <= 75) {
        var starId = 2070003 + Math.floor(Math.random() * 14);
        price = new client.Item(starId, 0, 1, 0);
    } else if (priceRand > 75 && priceRand <= 95) {
        var scrolls60 = new Array(2044701,
                2044501,
                2043301,
                2044601,
                2043101,
                2044101,
                2043201,
                2044201,
                2043001,
                2044001,
                2044401,
                2044301,
                2043801,
                2043701,
                2040704,
                2040501,
                2040513,
                2040516,
                2040804,
                2040801,
                2040301
                );
        var scrollRand = Math.floor(Math.random() * scrolls60.length);
        price = new client.Item(scrolls60[scrollRand], 0, 1, 0);
    } else {
        var scrolls40 = new Array(
                2040315,
                2040912,
                2040313,
                2043108,
                2043208,
                2043308,
                2043708,
                2043808,
                2044008,
                2044108,
                2044208,
                2044308,
                2044408,
                2044508,
                2044608,
                2044708
                );
        var scrollRand = Math.floor(Math.random() * scrolls40.length);
        price = new client.Item(scrolls40[scrollRand], 0, 1, 0);
    }
    var iter = eim.getPlayers().iterator();
    while (iter.hasNext()) {
        var winner = iter.next();
        winner.getClient().getSession().write(tools.MaplePacketCreator.serverNotice(1, "You win with " + eim.getKillCount(winner) + " points. You will be warped out in 2 minutes."));
        winner.getClient().getSession().write(tools.MaplePacketCreator.getClock(120));
        eim.saveWinner(winner);
    }
    var winner = eim.getPlayers().get(0);
    map.spawnItemDrop(winner, winner, price, winner.getPosition(), true, false);
    eim.schedule("warpWinnersOut", 120000);
}
function timeOut() {
    var iter = em.getInstances().iterator();
    while (iter.hasNext()) {
        var eim = iter.next();
        if (eim.getPlayerCount() > 0) {
            var pIter = eim.getPlayers().iterator();
            while (pIter.hasNext()) {
                playerDead(eim, pIter.next());
            }
        }
        eim.dispose();
    }
}
function warpWinnersOut(eim) {
    var iter = eim.getPlayers().iterator();
    while (iter.hasNext()) {
        var player = iter.next();
        player.changeMap(returnMap, returnMap.getPortal(0));
        eim.unregisterPlayer(player);
    }
    eim.dispose();
}
function leftParty(eim, player) {}
function disbandParty(eim, player) {}
function playerRevive(eim, player) {}