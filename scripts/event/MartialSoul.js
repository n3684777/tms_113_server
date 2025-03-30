/*
*  武魂王副本
*/

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
/***********************************************/
var 遠征怪物名稱     = "武魂王";
var boss            = "MartialSoul";
var entryMapId       = 209080100;// 813100800
var winMapId           = 410000352; // 領獲勝獎地圖ID
var participationsMapId= 410000680; // 領參加獎地圖ID
var exitMapId        = 910000000; // 自由市場
var bossId         = 2220000;
var 遠征排名計算  = "武魂王";
var log紀錄次數 = 遠征怪物名稱+"_完成";
var bossHP = 10000000; // 王血量
var eventTime = 20 * 60 * 1000; // 活動時間
var 領獎時間 = 1 * 60 * 1000;
/***********************************************/

function init(){ //結束時init
}

function setup(){
    winMap = em.getChannelServer().getMapFactory().getMap(winMapId); // 領獲勝獎地圖
    participationsMap = em.getChannelServer().getMapFactory().getMap(participationsMapId); // 領參加獎地圖
    exitMap = em.getChannelServer().getMapFactory().getMap(exitMapId); //Teh exit map :) <---------t
    var eim = em.newInstance(boss);
	var mapFactory = eim.getMapFactory();
    map = mapFactory.getMap(entryMapId);
	map.resetFully();
    eim.setProperty("start", "1");
    var map = eim.createInstanceMapS(entryMapId);
    map.blockAllPortal();
    map.toggleDrops();

    monsterSpawn(eim);
    eim.startEventTimer(eventTime); //設定活動時間
}

function monsterSpawn(eim) { // Custom function
    var mob = em.getMonster(bossId);
    //設定血量
    var modified = em.newMonsterStats();
    modified.setOExp(mob.getMobExp() * 7);
    modified.setOHp(bossHP);
    modified.setOMp(mob.getMobMaxMp());
    mob.setOverrideStats(modified);

    eim.registerMonster(mob);

    var map = eim.getMapInstance(entryMapId);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-172, 148));
}

function monsterDamaged(eim, player, mobId, damage){
	
	if(mobId != 9777777 && mobId != 2220000) return;
	var 玩家累積傷害 = eim.getProperty("PlayDamage_"+player.getId());
    if(玩家累積傷害 != null){
        eim.setProperty("PlayDamage_"+player.getId(), ""+(玩家累積傷害*1 + damage));
    }else{
        eim.setProperty("PlayDamage_"+player.getId(), ""+damage);
    }
}


function monsterValue(eim, mobId) {
    switch(mobId){
        case 9777777: //打死武魂王
        case 2220000: //測試怪
            return 1;

        default:
            return 0;
    }

}

function playerEntry(eim, player, currentDate){
   var map = eim.getMapInstance(entryMapId);
   player.changeMap(map, map.getPortal(0));
   eim.setProperty("member"+player.getId(), "1");
   Year = currentDate.getYear();
   Month = currentDate.getMonthValue() - 1;
   Day = currentDate.getDayOfMonth();
}

function playerRevive(eim, player) {
}

//玩家死亡
function playerDead(eim, player) {
	eim.setProperty("member"+player.getId(), "0");
}
//玩家復活
function playerRevive(eim, player) {//玩家復活回城
}
//玩家使用原地復活
function playerUseWheelRevive(eim, player) {
    player.changeMap(player.getMapId(), 0);
    eim.setProperty("member"+player.getId(), "1");
}
//玩家不使用原地復活
function playerIgnoreWheelRevive(eim, player) {
    if(player.getMapId() == entryMapId){
        eim.unregisterPlayer(player);
        player.changeMap(exitMap, exitMap.getPortal(0));
        eim.setProperty("member"+player.getId(), "0");
        if(eim.getPlayerCount()==0){
            end(eim);
        }
    }
}
//玩家斷線
function playerDisconnected(eim, player) {
    eim.setProperty("member"+player.getId(), "1");
	removePlayer(eim, player);
}

function remove(eim, player){
   eim.setProperty("member"+player.getId(), "0");
   eim.unregisterPlayer(player);
   var result = eim.getPlayerCount()==0 ? end(eim) : -525;
}

function leftParty(eim, player) {//隊員退出組隊
}

function disbandParty(eim) {//解散隊伍、踢出
}
//玩家主動離開跑這個
function playerExit(eim, player) {
	eim.unregisterPlayer(player);
	player.changeMap(exitMap, exitMap.getPortal(0));
	eim.removeDisconnected(player.getId());
	eim.setProperty("member"+player.getId(), "0");
}

//玩家被動斷線跑這個
function removePlayer(eim, player) {
	eim.unregisterPlayer(player);
	player.getMap().removePlayer(player);
	player.setMap(exitMap);
    if (isdelayEnd(eim)) {
        eim.schedule("delayEnd", 3 * 60 * 1000); //3分鐘
    } else {
        delayEnd(eim, player);
    }
}
function isdelayEnd(eim) {
    return false;
}
function delayEnd(eim, player) {
    if(eim.getPlayerCount()==0){
        end(eim);
        eim.setProperty("member"+player.getId(), "0");
    }
}


//最後勝利
function clearPQ(eim) {
    var playerID = 0;
    var playerDamage = 0;
    var playerBossDamage = 0;
    var playerDamageList = [];
    //map_3.showEffect("quest/carnival/win"); //地圖顯示勝利特效
    eim.getChannelServer().yellowWorldMessage("【遠征訊息】英勇的勇士們，成功擊敗了" + 遠征怪物名稱 + "..！ 楓之谷世界又燃起了新希望");
    var playerList = eim.getPlayers();
    for (var i = 0; i < playerList.size(); i++) {
        var playerID = playerList.get(i);
        var playerUID = playerID.getId();
        var playerDamage = Number(eim.getProperty("PlayDamage_" + playerUID) || 0);
        var playerName = playerID.getName();
        
        var playerBossDamage = playerID.getCharInfoNum_long(遠征排名計算);
        var checkPlayerNumber = playerID.getId();
        var 玩家紀錄判斷 = eim.getProperty("checkPlayer_1_" + checkPlayerNumber);
        if (playerBossDamage == 0 && 玩家紀錄判斷 == null) {
            playerID.setCharInfoNum(遠征排名計算, playerDamage);
        } else if (playerDamage > playerBossDamage && 玩家紀錄判斷 == null) {
            playerID.setCharInfoNum(遠征排名計算, playerDamage);
        }

        if (玩家紀錄判斷 == null) {
			playerID.setPrizeLog("" + Year + "年" + MonthS[Month] + Day + "日" + log紀錄次數 + "");
            eim.setProperty("checkPlayer_1_" + checkPlayerNumber, "1");
            playerDamageList.push({ Player: playerID, Name: playerName, damage: playerDamage });
        }
    }
    playerDamageList.sort(function (a, b) {
        return b.damage - a.damage;
    });
/*
    for (var i = 0; i < playerDamageList.length; i++) {
        var playerInfo = playerDamageList[i];
        var rank = i + 1;
        if (rank == 1) {
            eim.broadcastWorldMsg(6, "【遠征訊息】玩家 " + playerInfo.Name + " 在 " + 遠征怪物名稱 + " 遠征中打出了全隊最高傷害 總傷害：" + playerInfo.damage);
        }
        eim.broadcastPlayerMsg(5, "【本次" + 遠征怪物名稱 + "傷害排名】玩家 " + playerInfo.Name + " 排名 " + rank + " ，傷害：" + playerInfo.damage);
    }
*/

    var participationsReward= [];
    var winReward = [];
    var exit = [];
    for (var i = 0; i < playerDamageList.length; i++) {
        var playerInfo = playerDamageList[i];
        //eim.broadcastPlayerMsg(5, playerInfo.Name);
        if (eim.getMobKillCount(playerInfo.Player, bossId) > 0) {
			eim.broadcastPlayerMsg(6, "【武魂王系統】玩家 " + playerInfo.Name + " 成功拿到武魂王最後一擊，讓我們恭喜他");
            winReward.push(playerInfo);
        } else if (playerInfo.damage >= (bossHP / 100)) { // 計算傷害大於1%
            participationsReward.push(playerInfo);
        } else {
            exit.push(playerInfo);
        }
    }

    for (var i = 0; i < winReward.length; i++) {
        winReward[i].Player.changeMap(winMapId, 0);// 去領勝利獎地圖
    }

    for (var i = 0; i < participationsReward.length; i++) {
        participationsReward[i].Player.changeMap(participationsMapId, 0); // 去領參加獎地圖
    }

    for (var i = 0; i < exit.length; i++) {
        exit[i].Player.changeMap(exitMapId, 0);// 耍廢玩家(傷害不到1%) 回exit設定的地圖
    }
}

function allMonstersDead(eim) {
    clearPQ(eim);
}

function cancelSchedule() {
}
//時間到了
function scheduledTimeout(eim) {
    end(eim);
}

function end(eim){
   init();
   eim.disposeIfPlayerBelow(100, exitMapId);
   eim = null;
}

function playerInBossMap(mapId){
   return entryMapId == mapId; //|| winMapId == mapId || participationsMapId == mapId;
}

//切換地圖判斷
function changedMap(eim, player, mapid){
    if (!playerInBossMap(mapid)) {
        eim.unregisterPlayer(player);
    }
}

function randX() { //地圖x軸座標
    return -500 + Math.floor(Math.random() * 900);//491 148 -509 148
}
