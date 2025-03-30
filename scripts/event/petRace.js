/*
*  公會戰
*/

load('nashorn:mozilla_compat.js');
importPackage(Packages.database);
importPackage(Packages.server); //MapleItemInformationProvider.
importPackage(Packages.client.inventory); //Item. //Equip.
importPackage(Packages.tools);   //MaplePacketCreator.
importPackage(Packages.handling.world);  //World.
importPackage(Packages.constants); //WorldConstants.

/***********************************************/

var boss      = "petRace";
var mobID     = 9500203; //9500203 肥肥 9500204 緞帶肥肥 9500202 白狼 
var bossMapID = 525000003;
var endMapID  = 910000000;
var map       = null;
var endMap    = null;
var mobA      = null;
var mobB      = null;
var mobC      = null;

/***********************************************/

function init(){ 
   map = null;
}

function spawnMob(eim, bossMap){
   mobA = em.getMonster(mobID + Math.floor( Math.random()*2 ));
   map.spawnMonsterWithEffect(mobA, 0, new java.awt.Point(-460, -390));
   mobB = em.getMonster(mobID + Math.floor( Math.random()*2 ));
   map.spawnMonsterWithEffect(mobB, 0, new java.awt.Point(-460, -290));
   mobC = em.getMonster(mobID + Math.floor( Math.random()*2 ));
   map.spawnMonsterWithEffect(mobC, 0, new java.awt.Point(-460, -179));
   
   checkPig(eim);
}

function checkPig(eim){
   if(map.getNumMonsters() < 1) return;
   
   var mobA_posX = mobA.getPosition().x;
   var mobB_posX = mobB.getPosition().x;
   var mobC_posX = mobC.getPosition().x;
   
   if(mobA_posX >= 475){
      clear(eim, 1); return;
   }else if(mobB_posX >= 475){
      clear(eim, 2); return;
   }else if(mobC_posX >= 475){ 
      clear(eim, 3); return;
   }
   
   eim.schedule("checkPig", 10);
}

function clear(eim, winnerPig){
   
   map.killAllMonsters(true);
   map.mapMessage(6, "恭喜 "+winnerPig+" 號豬豬獲勝 !!");
   
   var playerList = map.getCharacters();
   var playerSelectPig = 0;
   
   for each(player in playerList){
      playerSelectPig = eim.getProperty("member"+player.getId());
      賭注類型 = eim.getProperty("賭注類型"+player.getId());
      下注數目 = eim.getProperty("下注數目"+player.getId());
      if(playerSelectPig == winnerPig){
         player.getClient().sendPacket(MaplePacketCreator.showEffect("quest/carnival/win"));
         player.getClient().sendPacket(MaplePacketCreator.playSound("Coconut/Victory"));
         if(賭注類型 == 0){player.gainMeso(下注數目*2, true);}
         if(賭注類型 == 1){player.modifyCSPoints(2, 下注數目*2, true);}
         if(賭注類型 == 2){player.setDividend(下注數目*2);}        
      }else{
         player.getClient().sendPacket(MaplePacketCreator.showEffect("quest/carnival/lose"));
         player.getClient().sendPacket(MaplePacketCreator.playSound("Coconut/Failed"));
      }
   }
   eim.startEventTimer(10000);//最後剩餘時間
}

function adjust(eim) {
   if(map == null){
      var mapFactory = em.getMapFactory();
      map = mapFactory.getMap(bossMapID);
      endMap = mapFactory.getMap(endMapID);
      map.resetFully();
      eim.startEventTimer(600000);
      eim.setProperty("start", "1");
      spawnMob(eim, map);
   }
}

function setup(eim, leaderid) {
   eim = em.getInstance(boss);
   adjust(eim);
   return eim;
}

function playerEntry(eim, player){//玩家進入
   player.changeMap(map, map.getPortal(Math.floor(Math.random()*2)));
   player.getClient().sendPacket(MaplePacketCreator.musicChange("pachinko_sound/bgmreach2"));
   
}

function playerRevive(eim, player) {//玩家復活回城

}

function monsterValue(eim, mobId) {//每當有怪物被消滅
   return 1;
}

function end(eim){
   init();
   eim.disposeIfPlayerBelow(9999, endMapID);
}

function scheduledTimeout(eim){
   end(eim);
}

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
