
/*
*  殘暴炎魔副本
*/

load('nashorn:mozilla_compat.js');
importPackage(Packages.database);
importPackage(Packages.server); //MapleItemInformationProvider.
importPackage(Packages.server.life);
importPackage(Packages.client.inventory); //Item. //Equip.
importPackage(Packages.tools);   //MaplePacketCreator.
importPackage(Packages.handling.world);  //World.
importPackage(Packages.client); //MapleCharacter
var MonthS = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
var Month;
var Day;
var Year;

/***********************************************/

var 遠征怪物名稱     = "特殊殘暴炎魔";
var boss             = "SpecialZakumBattle";
var bossId           = 8800002;
var bossMapId        = 280030000;
var endMapId         = 211042400;
var map              = null;
var endMap           = null;
var time			=  1000 * 60 * 60 * 3;
var remainTime       = 120000; // 2 Min
var numRewards = 0; // 设定需要奖励的名次数量，請與名次獎勵一致
var 遠征排名計算  = "特殊殘暴炎魔";
var log紀錄次數 = 遠征怪物名稱+"_完成";
var zakpart;
//設定名次獎勵
var rewards = [


		[ // 第1名奖励
			{ itemId: 2000010, quantity: 10 },
			{ itemId: 2000011, quantity: 5 },
			{ itemId: 2000012, quantity: 3 },
			{ itemId: 2000013, quantity: 2 },
			{ itemId: 2000014, quantity: 1 },
		],
		
		[ // 第2名奖励
			{ itemId: 4000005, quantity: 8 },
			{ itemId: 4000006, quantity: 4 },
			{ itemId: 4000007, quantity: 2 },
		],
		
		[ // 第3名奖励
			{ itemId: 4000029, quantity: 5 },
			{ itemId: 4000025, quantity: 3 },
		]
		
		
	];
/***********************************************/


function init() {
	map = null;
}

function monsterValue(eim, mobId) {//每當有怪物被消滅
    if (mobId != parseInt(eim.getProperty("now")) && !isNaN(parseInt(eim.getProperty("now")))) {
        var players = [];
        var allPlayers = eim.getPlayers();
        for (var i = 0; i < allPlayers.length; i++) {
            var chr = allPlayers[i];
            var isInMist = false;
            var allMists = map.getAllMistsThreadsafe();
            for (var j = 0; j < allMists.length; j++) {
                var mist = allMists[j];
                if (mist.getSourceSkill().getId() === 4221006 && mist.getBox().contains(chr.getPosition())) {
                    isInMist = true;
                    break;
                }
            }

            if (!isInMist && !chr.hasBuffedValue(MapleBuffStat.BLIND)) {
                players.push(chr);
            }
        }

        if (players.length > 0) {
            for (var j = 0; j < players.length; j++) {
                var dis = MapleDisease.getByMobSkill(128);
                var selectedChr = players[j];
                selectedChr.getDiseaseBuff(dis, MobSkillFactory.getMobSkill(128, 6));
                selectedChr.dropMessage("打錯手"); //沒進這位啥會跳這個錯誤= =在測一次
            }
            /*
            var random = Math.floor(Math.random() * players.length);
            var selectedChr = players[random];
            var dis = MapleDisease.getByMobSkill(128);
            selectedChr.getDiseaseBuff(dis, MobSkillFactory.getMobSkill(128, 6));
             */
            map.startMapEffect("消滅錯誤的手，進行魅惑!!", 5120009);
        }

    }
    var index = zakpart.indexOf(mobId);
    if (index > -1) {
        zakpart.splice(index, 1);
    }
    var randomindex = Math.floor(Math.random() * zakpart.length);
    eim.setProperty("now", String(zakpart[randomindex]));
    var attack = parseInt(eim.getProperty("now")) - 8800002;
    if (!isNaN(attack)) {
        map.startMapEffect("請打第" + attack + "隻手", 5120009);
    }
   var result = mobId==bossId ? clearPQ(eim) : -525 ;
   return 1;
}

function adjust(eim) {
   if(map == null){
      var mapFactory = eim.getMapFactory();
      map = mapFactory.getMap(bossMapId);
      endMap = mapFactory.getMap(endMapId);
      map.resetFully();
      //eim.startEventTimer(time);//小時。腳本有給時間了，暫時用不到
      eim.setProperty("start", "1");
      zakpart = [8800003, 8800004, 8800005, 8800006, 8800007, 8800008, 8800009, 8800010];
      var randomindex = Math.floor(Math.random() * zakpart.length);
      eim.setProperty("now", String(zakpart[randomindex]));
   }
}

function monsterDamaged(eim, player, mobId, damage){
	
	if(mobId != 8800000 && mobId != 8800001 && mobId != 8800002 && mobId != 8800003 && mobId != 8800004 && mobId != 8800005 && mobId != 8800006 && mobId != 8800007 && mobId != 8800008 && mobId != 8800009 && mobId != 8800010) return;
	var 玩家累積傷害 = eim.getProperty("PlayDamage_"+player.getId());
	if(玩家累積傷害 != null){
      eim.setProperty("PlayDamage_"+player.getId(), ""+(玩家累積傷害*1 + damage));
    }else{
      eim.setProperty("PlayDamage_"+player.getId(), ""+damage);
    }
    var attack = parseInt(eim.getProperty("now")) - 8800002;
    if (!isNaN(attack)) {
        if (mobId != parseInt(eim.getProperty("now"))) {
            player.dropMessage("請打第" + attack + "隻手");
        }
    }

	
}

function setup(leaderid) {
    exitMap = em.getChannelServer().getMapFactory().getMap(endMapId); //Teh exit map :) <---------t
    eim = em.getInstance(boss);
    adjust(eim);
    return eim;
}

function playerEntry(eim, player, currentDate) {
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
    player.changeMap(map, map.getPortal(0));
    eim.setProperty("member"+player.getId(), "1");
}
//玩家不使用原地復活
function playerIgnoreWheelRevive(eim, player) {
    if(player.getMapId() == bossMapId){
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
    map.showEffect("quest/carnival/win"); //地圖顯示勝利特效 
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
					playerID.gainItem(reward.itemId, reward.quantity);
					eim.EVENT_GAMEPLAYERLOG(playerID, 遠征怪物名稱+"", "獲得遠征獎勵", reward.itemId, reward.quantity);
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

//切換地圖判斷
function changedMap(eim, player, mapid) {
	if (mapid != bossMapId) {
		eim.unregisterPlayer(player);
		player.getMap().removePlayer(player);
		eim.setProperty("member"+player.getId(), "0");
    }if(eim.getPlayerCount()==0){
		end(eim);
		eim.setProperty("member"+player.getId(), "0");
	}
}
