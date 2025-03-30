importPackage(java.awt);

var mapId = 954030101; // 第一關地圖
var mapId_2 = 954030201; // 第二關地圖
var mapId_3 = 954030301; // 第三關地圖
var endmapId = 910000000;
var eventTime = 1000 * 60 * 10; //這樣是10分鐘
var 第一關NPC是否要召喚 = false; // true = 召喚 false = 不召喚
var 第一關需清怪數量 = 100;
var 第一關NPC代碼 = 10000000;
var 第一關NPC位置_X = 100;
var 第一關NPC位置_Y = 100;

var 第二關需要物品代碼 = 4000010;
var 第二關需要物品數量 = 10;
var 第二關NPC是否要召喚 = false; // true = 召喚 false = 不召喚
var 第二關NPC代碼 = 10000000;
var 第二關NPC位置_X = 100;
var 第二關NPC位置_Y = 100;

var 第三關王代碼 = 8211004;
var 第三關王血量 = 10000000;
var 第三關王經驗 = 1000000;
var 第三關王位置_X = 200;
var 第三關王位置_Y = -145;
var remainTime      = 1000 *60 * 2; // 結束後的溫存時間


var currnetkillcount = 0; // 初始化擊殺數
function init() {
   map_01 = null;
   map_02 = null;
   map_03 = null;
   map = null;
   map_2 = null;
   map_3 = null;
}
function setup(partyId) {
    var eim = em.newInstance("EasyDungeon" +  partyId);
    var map = eim.createInstanceMap(mapId);
    map.setReturnMapId(endmapId);
    map.setForcedReturnMap(endmapId);
    map.blockAllPortal();
    map.toggleGDrops();
    var mapFactory = eim.getMapFactory();
    map_01 = mapFactory.getMap(mapId);
	 map_02 = mapFactory.getMap(mapId_2);
	 map_03 = mapFactory.getMap(mapId_3);
		if(map_01 !=null){
			map_01.resetFully();
		}
		if(map_02 !=null){
			map_02.resetFully();
		}
		if(map_03 !=null){
			map_03.resetFully();
		}
    
    
    var map_2 = eim.createInstanceMap(mapId_2);
    map_2.setReturnMapId(endmapId);
    map_2.setForcedReturnMap(endmapId);
    map_2.blockAllPortal();
    map_2.toggleGDrops();
    if(第二關NPC是否要召喚){
      eim.getMapInstance(mapId_2).spawnNpc(第二關NPC代碼, new Point(第二關NPC位置_X, 第二關NPC位置_Y));
    }
    var map_3 = eim.createInstanceMapS(mapId_3);
    map_3.setReturnMapId(endmapId);
    map_3.setForcedReturnMap(endmapId);
    map_3.blockAllPortal();
    map_3.toggleGDrops();

    eim.setProperty("stage1", 0);
    eim.setProperty("stage1_maxmob", 第一關需清怪數量);
    eim.setProperty("stage1_currnetkillcount", 0);

    eim.setProperty("stage2_mapId", mapId_2);
    eim.setProperty("stage2_item", 第二關需要物品代碼);
    eim.setProperty("stage2_quantity", 第二關需要物品數量);

    eim.setProperty("stage3_bossId", 第三關王代碼);
    eim.setProperty("stage3_bossHP", 第三關王血量);
    eim.setProperty("stage3_bossExp", 第三關王經驗);
    eim.setProperty("stage3_boss_X", 第三關王位置_X);
    eim.setProperty("stage3_boss_Y", 第三關王位置_Y);
    eim.setProperty("stage3_mapId", mapId_3);
    currnetkillcount = 0;
    eim.startEventTimer(eventTime);
    return eim;
}
function playerEntry(eim, player) {
    var map = eim.getMapInstance(mapId);
    player.changeMap(map, map.getPortal(0));
}
function playerRevive(eim, player) {
    return false;
}
function scheduledTimeout(eim) {
    end(eim);
}
function changedMap(eim, player, mapid) {
    if (mapid != mapId && mapid != mapId_2 && mapid != mapId_3) {
        eim.unregisterPlayer(player);
        eim.disposeIfPlayerBelow(0, 0);
    }
}
function playerDisconnected(eim, player) {
    return 0;
}
function monsterValue(eim, mobId) {
    if (currnetkillcount >= 第一關需清怪數量 && eim.getProperty("stage1").equals("0")) {
        // 去第二關
        eim.setProperty("stage1", "1");
        if(第一關NPC是否要召喚){
            eim.getMapInstance(mapId_2).spawnNpc(第一關NPC代碼, new Point(第一關NPC位置_X, 第一關NPC位置_Y));
        }
       
    }
    currnetkillcount++;
    eim.setProperty("stage1_currnetkillcount", currnetkillcount);
    if (eim.getProperty("stage1").equals("0")) {
        // 提示打了幾隻怪
    }
    if (mobId == 第三關王代碼) {
        clearPQ(eim); // 結束 等待發獎勵
    }
    return 1;
}
function playerExit(eim, player) {
    eim.unregisterPlayer(player);
    eim.disposeIfPlayerBelow(0, 0);
}

function end(eim){
   init();
   eim.disposeIfPlayerBelow(100, endmapId);
   eim = null;
}

/*
function end(eim) {
    var iter = eim.getMapInstance(0).getCharactersThreadsafe().iterator();
    var map = eim.getMapFactory().getMap(endmapId);
    while (iter.hasNext()) {
        var chr = iter.next();
        eim.unregisterPlayer(chr);
        chr.changeMap(map, map.getPortal(0));
    }
    eim.dispose();
}
*/
function clearPQ(eim) {
   map_03.showEffect("quest/carnival/win");
   eim.startEventTimer(remainTime); //設為最後3分鐘
   eim.broadcastPlayerMsg(5, "恭喜完成本次副本，請點擊NPC或等待時間到後離場。");
}
function allMonstersDead(eim) {}
function leftParty(eim, player) {}
function disbandParty(eim) {}
function playerDead(eim, player) {}
function cancelSchedule() {}
function monsterDamaged(eim, player, mobId, damage){}