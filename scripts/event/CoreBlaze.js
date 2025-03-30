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
var 遠征怪物名稱     = "普雷茲首腦";
var boss             = "CoreBlaze";
var bossId           = 9400296;
var hole1           = 802000801;//洞1
var hole2           = 802000802;//洞2
var hole3           = 802000803;//洞3
var endMapId         = 802000800;
var map              = null;
var endMap           = null;
var time			=  1000 * 60 * 60 * 3;
var remainTime      = 1000 * 60 * 2; // 2 Min
var numRewards = 0; // 设定需要奖励的名次数量，請與名次獎勵一致
var 遠征排名計算  = "普雷茲首腦";
var log紀錄次數 = 遠征怪物名稱+"_完成";
//設定名次獎勵
var rewards = [


		[ // 第1名奖励
			{ itemId: 2000010, minQuantity: 1, maxQuantity: 10 },
			{ itemId: 2000011, minQuantity: 1, maxQuantity: 5 },
			{ itemId: 2000012, minQuantity: 1, maxQuantity: 3 },
			{ itemId: 2000013, minQuantity: 1, maxQuantity: 2 },
			{ itemId: 2000014, minQuantity: 1, maxQuantity: 1 },
		],
		
		[ // 第2名奖励
			{ itemId: 4000005, minQuantity: 1, maxQuantity: 8 },
			{ itemId: 4000006, minQuantity: 1, maxQuantity: 4 },
		],
		
		[ // 第3名奖励
			{ itemId: 4000007, minQuantity: 1, maxQuantity: 5 },
			{ itemId: 4000007, minQuantity: 1, maxQuantity: 3 },
		]
		
		
	];
/***********************************************/


function init() {
	map_1 = null;
    map_2 = null;
    map_3 = null;
}

function monsterValue(eim, mobId) {//每當有怪物被消滅
   var result = mobId==bossId ? clearPQ(eim) : -525 ;
   return 1;
}

function adjust(eim) {
	if (map_1 == null) {
		eim.setProperty("start", "1");
		var mapFactory = eim.getMapFactory();
		map_1 = mapFactory.getMap(hole1);
		map_2 = mapFactory.getMap(hole2);
		map_3 = mapFactory.getMap(hole3);
		if (map_1 !=null) {
			map_1.resetFully();
		}
		if (map_2 !=null) {
			map_2.resetFully();
		}
		if (map_3 !=null) {
			map_3.resetFully();
		}
		//eim.startEventTimer(time);//小時。腳本有給時間了，暫時用不到
	}
}

function monsterDamaged(eim, player, mobId, damage){
	if(mobId != bossId) return;
	if(damage < 0){
		damage = 2147483000;
	}
	var 玩家累積傷害 = eim.getProperty("PlayDamage_"+player.getId());
	if(玩家累積傷害 != null){
      eim.setProperty("PlayDamage_"+player.getId(), ""+(玩家累積傷害*1 + damage));
   }else{
      eim.setProperty("PlayDamage_"+player.getId(), ""+damage);
   }
}

function setup(eim, leaderid) {
   exitMap = em.getChannelServer().getMapFactory().getMap(endMapId); //Teh exit map :) <---------t
   eim = em.getInstance(boss);
   adjust(eim);
   return eim;
}


function playerEntry(eim, player, currentDate) {
	var start = eim.getProperty("start");
    var map;
    switch(start){
		case "1":
			map = map_1;
        break;
		case "2":
			map = map_2;
        break;
		case "3":
			map = map_3;
        break;
    }
	player.changeMap(map, map.getPortal(0));  
	eim.setProperty("member"+player.getId(), "1");
	Year = currentDate.getYear();
	Month = currentDate.getMonthValue() - 1;
	Day = currentDate.getDayOfMonth();
}
//玩家死亡
function playerDead(eim, player) {
	eim.setProperty("member"+player.getId(), "0");
}
//玩家復活
function playerRevive(eim, player) {//玩家復活回城
	/*
    if(player.getMapId() == bossMapId){
        eim.unregisterPlayer(player);
        player.changeMap(exitMap, exitMap.getPortal(0));
        eim.setProperty("member"+player.getId(), "1");
        if(eim.getPlayerCount()==0){
            end(eim);
        }
    }
    */
}
//玩家使用原地復活
function playerUseWheelRevive(eim, player) {
    player.changeMap(player.getMapId(), 0);
    eim.setProperty("member"+player.getId(), "1");
}
//玩家不使用原地復活
function playerIgnoreWheelRevive(eim, player) {
    if(player.getMapId() == hole1 || player.getMapId() == hole2 || player.getMapId() == hole3){
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
	map_3.spawnNpc(9120026, new java.awt.Point(1369, 332));
    map_3.showEffect("quest/carnival/win"); //地圖顯示勝利特效 
    eim.getChannelServer().yellowWorldMessage("【遠征訊息】英勇的勇士們，成功擊敗了" + 遠征怪物名稱 + "..！ 楓之谷世界又燃起了新希望");
    eim.startEventTimer(remainTime); //設為最後3分鐘
    var playerList = eim.getPlayers();
    for (var i = 0; i < playerList.size(); i++) {
        var playerID = playerList.get(i);
        var playerUID = playerID.getId();
        var playerDamage = eim.getProperty("PlayDamage_" + playerUID) * 1;
        var playerName = playerID.getName();
        
        var playerBossDamage = playerID.getCharInfoNum_long(遠征排名計算);
        var checkPlayerNumber = playerID.getId();
        var 玩家紀錄判斷 = eim.getProperty("checkPlayer_1_" + checkPlayerNumber);
        if (playerBossDamage == 0 && 玩家紀錄判斷 == null) {
            playerID.setCharInfoNum(遠征排名計算, playerDamage);
        } else if (playerDamage > playerBossDamage && 玩家紀錄判斷 == null) {
            playerID.setCharInfoNum(遠征排名計算, playerDamage);
        }

        if (playerDamage > 0 && 玩家紀錄判斷 == null) {
			playerID.setPrizeLog("" + Year + "年" + MonthS[Month] + Day + "日" + log紀錄次數 + "");
            eim.setProperty("checkPlayer_1_" + checkPlayerNumber, "1");
            playerDamageList.push({ Name: playerName, damage: playerDamage });
        }
    }

    playerDamageList.sort(function (a, b) {
        return b.damage - a.damage;
    });

    for (var i = 0; i < playerDamageList.length; i++) {
        var playerInfo = playerDamageList[i];
        var rank = i + 1;
        if (rank == 1) {
            eim.broadcastWorldMsg(6, "【遠征訊息】玩家 " + playerInfo.Name + " 在 " + 遠征怪物名稱 + " 遠征中打出了全隊最高傷害 總傷害：" + playerInfo.damage);
        }
        eim.broadcastPlayerMsg(5, "【本次" + 遠征怪物名稱 + "傷害排名】玩家 " + playerInfo.Name + " 排名 " + rank + " ，傷害：" + playerInfo.damage);
    }

	for (var rank = 0; rank < numRewards && rank < playerDamageList.length; rank++) {
		var playerInfo = playerDamageList[rank];
		var playerRewards = rewards[rank];
		var playerID = Packages.client.MapleCharacter.getCharacterByName(playerInfo.Name);

		if (playerID == null) {
			eim.EVENT_GAMEPLAYERLOG(playerID, 遠征怪物名稱+"_領獎異常", "playerID = "+playerID, 0, 0);
			continue;
		}

		try {
			for (var i = 0; i < playerRewards.length; i++) {
				var reward = playerRewards[i];
				if (Packages.server.MapleItemInformationProvider.getInstance().itemExists(reward.itemId)) {
					var rewardQuantity = getRandom(reward.minQuantity, reward.maxQuantity); // 最後隨機出的獎勵
					playerID.gainItem(reward.itemId, rewardQuantity);
					eim.EVENT_GAMEPLAYERLOG(playerID, 遠征怪物名稱+"", "獲得遠征獎勵", reward.itemId, rewardQuantity);
				} else {
					eim.EVENT_GAMEPLAYERLOG(playerID, 遠征怪物名稱+"_領獎異常", "無效的道具ID：" + reward.itemId, 0, 0);
				}
			}
		} catch (error) {
			eim.EVENT_GAMEPLAYERLOG(playerID, 遠征怪物名稱+"_領獎異常", "error = "+error, 0, 0);
			continue;
		}
	}
}

function allMonstersDead(eim) {
}

function cancelSchedule() {
}
//時間到了
function scheduledTimeout(eim) {
    end(eim);
}

function end(eim){
   init();
   eim.disposeIfPlayerBelow(100, endMapId);
   eim = null;
}

function playerInBossMap(mapId){
   return hole1<=mapId && mapId<=hole3;
}

//切換地圖判斷
function changedMap(eim, player, mapid){
    var result = (!playerInBossMap(mapid)) ? eim.unregisterPlayer(player) : -525;
    var result = eim.getPlayerCount()==0 ? end(eim) : -525;
}
//獲得隨機數
function getRandom(min, max) {
    if (min > max) { // min
        var temp = min;
        min = max;
        max = temp;
    }

    if (min == max) {
        return min;
    }

    return min + parseInt(Math.random() * (max - min + 1));
}

/*
var 遠征怪物名稱     = "普雷茲首腦";
var map              = null;
var bossId           = 9400296;
function init() {
    map = null;
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}
function setup(eim, leaderid) {
    em.setProperty("state", "1");
    em.setProperty("leader", "true");
    eim = em.newInstance("CoreBlaze" + leaderid);
    map = eim.setInstanceMap(802000803);
    map.resetFully();
    eim.startEventTimer(14400000);
    return eim;
}
function playerEntry(eim, player) {
    map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
}
function playerRevive(eim, player) {
    return false;
}
function scheduledTimeout(eim) {
    end(eim);
}
function changedMap(eim, player, mapid) {
    if (mapid != 802000803) {
        eim.unregisterPlayer(player);
        var map = em.getChannelServer().getMapFactory().getMap(802000800);
        player.changeMap(map, map.getPortal(0));
        if (eim.disposeIfPlayerBelow(0, 0)) {
            em.setProperty("state", "0");
            em.setProperty("leader", "true");
        }
    }
}
function playerDisconnected(eim, player) {
    return 0;
}
function monsterValue(eim, mobId) {
    if (mobId == bossId) {
        clearPQ(eim);
    }
    return 1;
}
function playerExit(eim, player) {
    eim.unregisterPlayer(player);
    if (eim.disposeIfPlayerBelow(0, 0)) {
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
    }
}

function clearPQ(eim) {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
    map.spawnNpc(9120026, new java.awt.Point(1369, 332));
    eim.getChannelServer().yellowWorldMessage("【遠征訊息】英勇的勇士們，成功擊敗了" + 遠征怪物名稱 + "..！ 楓之谷世界又燃起了新希望");
    map.showEffect("quest/carnival/win");
}

function allMonstersDead(eim) {}
function leftParty(eim, player) {}
function disbandParty(eim) {}
function playerDead(eim, player) {}
function cancelSchedule() {}
*/