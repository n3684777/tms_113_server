
load('nashorn:mozilla_compat.js');
importPackage(Packages.database);
importPackage(Packages.server); //MapleItemInformationProvider.
importPackage(Packages.client.inventory); //Item. //Equip.
importPackage(Packages.tools);   //MaplePacketCreator.
importPackage(Packages.handling.world);  //World.
importPackage(Packages.constants); //WorldConstants.
importPackage(java.util); //ArrayList.
importPackage(java.awt);  //Point.
importPackage(Packages.server.life); //OverrideMonsterStats.
var MonthS = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
var Month;
var Day;
var Year;
/***********************************************/

var boss      = "GuildEvent";
var bossID    = 9600065; 
var bossMapID = 779000001;
var endMapID  = 910000000;
var BOSS血量  = 100000;
var 怪物經驗  = 1000000;
var map       = null;
var endMap    = null;
var time      = 1800000; //30min
var dropItem  = 4310257; //公會硬幣
var killCount = 0;
var log紀錄 = "公會戰_完成";

/***********************************************/

function init(){ 
   map = null;
   killCount = 0;
}

function checkDropItem(eim){
   var items = map.getAllItems();
   
   for each(item in items){
      if(item.getItemId() == dropItem){
         item.expire(map);
         eim.startEventTimer(time);
         
         var mob = em.getMonster(bossID);
		 /*
         map.spawnMonsterWithEffect(mob, 0, new java.awt.Point(1000, 154));
         var mob_B = em.getMonster(bossID);
         map.spawnMonsterWithEffect(mob_B, 0, new java.awt.Point(900, 154));
		 */
		 var stats = new OverrideMonsterStats();
         stats.setOHp (BOSS血量);     
         stats.setOMp (mob.getMp());                
         stats.setOExp(怪物經驗);
         mob.setOverrideStats(stats);   
		 map.spawnMonsterWithEffect(mob, 15, new java.awt.Point(-98, 340));
         map.mapMessage(6, "怪物已召喚於地圖中央 !!");
         eim.setProperty("start", "2");
         return;
      }
   }
   
   eim.schedule("checkDropItem", 1000);
}

function clear(eim){
    eim.startEventTimer(5000);//最後剩餘時間
    var log = "" + Year + "年" + MonthS[Month] + "" + Day + "日" + log紀錄 + "";
    em.setAllPlayerLog(bossMapID, log);
}

function adjust(eim) {
   if(map == null){
      var mapFactory = em.getMapFactory();
      map = mapFactory.getMap(bossMapID);
      endMap = mapFactory.getMap(endMapID);
      map.resetFully();
      eim.startEventTimer(300000);
      eim.setProperty("start", "1");
      checkDropItem(eim);
   }
}

function setup(eim, leaderid) {
   eim = em.getInstance(boss);
   adjust(eim);
   return eim;
}

function playerEntry(eim, player, now){//玩家進入
	Year = now.getYear();
	Month = now.getMonthValue() - 1;
	Day = now.getDayOfMonth();
	player.changeMap(map, map.getPortal(0));

}

function playerRevive(eim, player) {//玩家復活回城
	player.addHP(50);
    var map = eim.getMapFactory().getMap(endMapID);
    player.changeMap(map, map.getPortal(0));
    return true;
}

function monsterValue(eim, mobId) {//每當有怪物被消滅
   if(mobId == bossID){
      killCount++;
      
      if(killCount == 1){
         map.mapMessage(6, "總花費時間 "+ (time - eim.getTimeLeft())/1000 +" 秒");
         clear(eim);
      }
   }
   return 1;
}

function end(eim){
   init();
   eim.disposeIfPlayerBelow(99, endMapID);
}

function scheduledTimeout(eim){
   end(eim);
}

//玩家斷線
function playerDisconnected(eim, player){   }

function changedMap(eim, player, mapid){   

   var result = mapid == bossMapID ? -525 : eim.unregisterPlayer(player);
   var result = mapid == bossMapID ? -525 : player.changeMap(endMap, endMap.getPortal(0));

   // var result = eim.getPlayerCount()==0 ? end(eim) : -525;
}

function monsterDamaged(eim, player, mobId, damage){

}

function remove(eim, player){
   // eim.setProperty("member"+player.getId(), "0");
   // eim.unregisterPlayer(player);
   // var result = eim.getPlayerCount()==0 ? end(eim) : -525;
}

function playerDead(eim, player){ 

}

/*********************************************************/
/*********************************************************/
/*********************************************************/

function playerExit(eim, player){  }
function allMonstersDead(eim){  }
function cancelSchedule(){  }
function leftParty(eim, player){  }
function disbandParty(eim){  }
