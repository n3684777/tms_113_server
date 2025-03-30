load('nashorn:mozilla_compat.js');
importPackage(Packages.database);
importPackage(Packages.server); //MapleItemInformationProvider.
importPackage(Packages.client.inventory); //Item. //Equip.
importPackage(Packages.tools);   //MaplePacketCreator.
importPackage(Packages.handling.world);  //World.
importPackage(Packages.client); //MapleCharacter
var MonthS = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
var Month;
var Day;
var Year;
var minPlayers = 1;
var log紀錄次數 = "妖僧組隊任務";


function init() {
    em.setProperty("state", "0");
}

function monsterValue(eim, mobId) {
	switch(mobId){
		case 9600025:
		 endPQ(eim);
         break;
		
	}
    return 1;
}

function setup() {
    em.setProperty("state", "1");
	exitMap = em.getChannelServer().getMapFactory().getMap(702070400); //Teh exit map :) <---------t
    var eim = em.newInstance("shaoling");

    var map = eim.setInstanceMap(702060000);
    map.resetFully();
    eim.startEventTimer(600000); //10 分

    return eim;
}

function scheduledTimeout(eim) {
    eim.disposeIfPlayerBelow(100, eim.getProperty("cleared") == null ? 702070400 : 702070400);

    em.setProperty("state", "0");
}

function changedMap(eim, player, mapid) {
    switch (mapid) {
        case 702060000:
            return;
    }
    eim.unregisterPlayer(player);

    if (eim.disposeIfPlayerBelow(0, 0)) {
        em.setProperty("state", "0");
    }
    if (eim.getPlayerCount()==0) {
        end(eim);
    }
}

function playerEntry(eim, player, currentDate) {
   var map = em.getMapFactory().getMap(702060000);
   player.changeMap(map, map.getPortal(0));
   Year = currentDate.getYear();
   Month = currentDate.getMonthValue() - 1;
   Day = currentDate.getDayOfMonth();
}

function playerRevive(eim, player) {}


//玩家使用原地復活
function playerUseWheelRevive(eim, player) {
	map = em.getMapFactory().getMap(702060000);
    player.changeMap(map, map.getPortal(0));
}
//玩家不使用原地復活
function playerIgnoreWheelRevive(eim, player) {
    if(player.getMapId() == 702060000){
        eim.unregisterPlayer(player);
        player.changeMap(exitMap, exitMap.getPortal(0));
        if(eim.getPlayerCount()==0){
            end(eim);
        }
    }
}


function playerDisconnected(eim, player) {
    //playerExit(eim, player);
}

function leftParty(eim, player) {
    // If only 2 players are left, uncompletable
	/*
    if (eim.disposeIfPlayerBelow(minPlayers, eim.getProperty("cleared") == null ? 702070400 : 702070400)) {
        em.setProperty("state", "0");
    } else {
        playerExit(eim, player);
    }
	*/
}


//最後勝利
function endPQ(eim) {
    var playerID = 0;
    var playerDamageList = [];
    var playerDamageList_2 = [];
	map = em.getMapFactory().getMap(702060000);
    map.showEffect("quest/carnival/win");
    eim.startEventTimer(1000 * 10); //設為最後3分鐘
    var playerList = eim.getPlayers();
    for (var i = 0; i < playerList.size(); i++) {
        var playerID = playerList.get(i);
        var playerName = playerID.getName();
        var checkPlayerNumber = playerID.getId();
        var 玩家紀錄判斷 = eim.getProperty("checkPlayer_1_" + checkPlayerNumber);
        if (玩家紀錄判斷 == null) {
            playerID.setBossLog("" + Year + "年" + MonthS[Month] + Day + "日" + log紀錄次數 + "");
            eim.setProperty("checkPlayer_1_" + checkPlayerNumber, "1");
        }
    }
}

function end(eim){
    init();
    eim.disposeIfPlayerBelow(100, 702070400);
    eim = null;
}


function disbandParty(eim) {
    // Boot whole party and end
    eim.disposeIfPlayerBelow(100, eim.getProperty("cleared") == null ? 702070400 : 702070400);

    em.setProperty("state", "0");
}

function playerExit(eim, player) {
   /* var map = em.getMapFactory().getMap(eim.getProperty("cleared") == null ? 702070400 : 702070400);

    eim.unregisterPlayer(player);
    player.changeMap(map, map.getPortal(0));*/
}

// For offline players
function removePlayer(eim, player) {
    eim.unregisterPlayer(player);
}

function clearPQ(eim) {
    eim.disposeIfPlayerBelow(100, eim.getProperty("cleared") == null ? 702070400 : 702070400);

    em.setProperty("state", "0");
}

function cancelSchedule() {}

function playerDead(eim, player) {/*
    eim.disposeIfPlayerBelow(100, eim.getProperty("cleared") == null ? 702070400 : 702070400);
    em.setProperty("state", "0");*/
}

function allMonstersDead(eim) {
	
	
}

function monsterDamaged(eim, player, mobId, damage){

}
