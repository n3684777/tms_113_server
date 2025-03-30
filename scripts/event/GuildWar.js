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

var boss         = "GuildWar";
// var mobID        = 9300032;
var PVP穿戴裝備  = WorldConstants.PVP專用裝備編號;
var mobID        = 5000001;
var bossMapID    = 525000000;
var endMapID     = 910000000;
var map          = null;
var endMap       = null;
var guildWarBoss = null;
var guildList    = new java.util.ArrayList();

/***********************************************/

function init(){ 
   map = null;
   guildList = new java.util.ArrayList();
}

function spawnMob(eim, bossMap){
   guildWarBoss = em.getMonster(mobID);
   // var adjustHp = worldBossInfo[1];
   /**------------------------自訂怪物能力值------------------------**/
   var stats = em.newMonsterStats();           
   stats.setOHp (5000000000);      
   stats.setOMp (500000);                 
   stats.setOExp(0); 
   guildWarBoss.setOverrideStats(stats);                
   /**------------------------自訂怪物能力值------------------------**/
   bossMap.spawnMonsterWithEffect(guildWarBoss, 0, new java.awt.Point(147, 239));
   // bossMap.message(6, "!! 召喚世界Boss !!");

   // eim.schedule("heal", 500); //BOSS持續回血功能
}

function adjust(eim) {
   if(map == null){
      var mapFactory = em.getMapFactory();
      map = mapFactory.getMap(bossMapID);
      endMap = mapFactory.getMap(endMapID);
      map.resetFully();
      eim.startEventTimer(30000);
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
   eim.setProperty("member"+player.getId(), "1");
   
   var guildID = player.getGuildId();
   
   if(!guildList.contains(guildID)){
      guildList.add(guildID);
   }
}

function playerRevive(eim, player) {//玩家復活回城
   // if(player.getGuild() == null){
      // 不符合規定之玩家離場設置(eim, player);
      // return;
   // }
   // map.mapMessage(6," 玩家復活 " + player.getName());
}

function monsterValue(eim, mobId) {//每當有怪物被消滅
   return 1;
}

function end(eim){
   calculateFinalResult(eim);
   init();
   eim.disposeIfPlayerBelow(9999, endMapID);
}

function scheduledTimeout(eim){
   end(eim);
}

function playerDisconnected(eim, player){  
   var playerDeadCount = eim.getProperty("playerDead_"+player.getId());
   if(playerDeadCount != null){
      eim.setProperty("playerDead_"+player.getId(), ""+(++playerDeadCount));
   }else{
      eim.setProperty("playerDead_"+player.getId(), "1");
   }
}

function changedMap(eim, player, mapid){   
   // var playerDeadCount = eim.getProperty("playerDead_"+player.getId());
   
   // if(playerDeadCount == 3){
      // var result = mapid == bossMapID ? eim.unregisterPlayer(player) : -525;
      // var result = mapid == bossMapID ? player.changeMap(endMap, endMap.getPortal(0)) : -525;
   // }else{
   var result = mapid == bossMapID ? -525 : eim.unregisterPlayer(player);
   var result = mapid == bossMapID ? -525 : player.changeMap(endMap, endMap.getPortal(0));
   // }
   
   // var result = eim.getPlayerCount()==0 ? end(eim) : -525;
}

function monsterDamaged(eim, player, mobId, damage){
   if(player.getGuild() == null || !player.hasEquipped(PVP穿戴裝備)){
      不符合規定之玩家離場設置(eim, player);
      return;
   }
   
   if(mobId != mobID) return;

   var 公會傷害累計 = eim.getProperty("guildDamage_"+player.getGuildId());

   if(公會傷害累計 != null){
      eim.setProperty("guildDamage_"+player.getGuildId(), ""+(公會傷害累計*1 + damage));
   }else{
      eim.setProperty("guildDamage_"+player.getGuildId(), ""+damage);
   }
}

function remove(eim, player){
   // eim.setProperty("member"+player.getId(), "0");
   // eim.unregisterPlayer(player);
   // var result = eim.getPlayerCount()==0 ? end(eim) : -525;
}

function playerDead(eim, player){ 
   if(player.getGuild() == null){
      不符合規定之玩家離場設置(eim, player);
      return;
   }

   var playerDeadCount = eim.getProperty("playerDead_"+player.getId());
   if(playerDeadCount != null){
      eim.setProperty("playerDead_"+player.getId(), ""+(++playerDeadCount));
   }else{
      eim.setProperty("playerDead_"+player.getId(), "1");
   }
   // map.mapMessage(6, "  玩家死亡 " + player.getName() + "  " + eim.getProperty("playerDead_"+player.getId()) + " 次 ");
}

function calculateFinalResult(eim){
   var guildID = 0;
   var guildDamage = 0;
   var firstGuildID = 0 ;
   var maxGuildDamage = 0;
   eim.clearGuildWar()//清空公會戰資料表
   
   World.Broadcast.broadcastMessage(MaplePacketCreator.serverNotice(6, " ========================================= "));
   
   for(var i=0; i<guildList.size(); i++){
      guildID = guildList.get(i);
      guildDamage = eim.getProperty("guildDamage_" + guildID)*1;
      
      eim.uploadGuildWar(guildID, guildDamage); //新增公會戰傷害記錄
      
      if(guildDamage > maxGuildDamage){
         firstGuildID = guildID;
         maxGuildDamage = guildDamage;
      }
      
      World.Broadcast.broadcastMessage(MaplePacketCreator.serverNotice(6, "公會編號 " + guildID + " 公會 " + World.Guild.getGuild(guildID).getName() + " 總傷害 " + guildDamage));  
   }
   
   if(firstGuildID == 0 && maxGuildDamage == 0) return;
   
   World.Broadcast.broadcastMessage(MaplePacketCreator.serverNotice(6, "本次公會戰優勝公會 " + World.Guild.getGuild(firstGuildID).getName() + " 總傷害 " + maxGuildDamage));
   World.Broadcast.broadcastMessage(MaplePacketCreator.serverNotice(6, " ========================================= "));
}

function 不符合規定之玩家離場設置(eim, player){
   var result = player.getMapId() == bossMapID ? eim.unregisterPlayer(player) : -525;
   var result = player.getMapId() == bossMapID ? player.changeMap(endMap, endMap.getPortal(0)) : -525; 
}

/*********************************************************/
/*********************************************************/
/*********************************************************/

function playerExit(eim, player){  }
function allMonstersDead(eim){  }
function cancelSchedule(){  }
function leftParty(eim, player){  }
function disbandParty(eim){  }
