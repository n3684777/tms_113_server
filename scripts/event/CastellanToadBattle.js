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
var eventmapid = 800040411;
var returnmap = 910000000;

var Month;
var Day;
var Year;
var boss             = "CastellanToadBattle";
var 遠征怪物名稱     = "特殊天皇蟾蜍";
var log紀錄次數 = 遠征怪物名稱+"_完成";
var 副本時間 = 60 * 60 * 1000; // 1hr
var remainTime = 1000 * 60 * 2; // 結束後的溫存時間
var 天皇蟾蜍血量 = 15000000;
var 忍者頭目血量 = 1500000;
var 鎧甲武士血量 = 1500000;

var 天皇蟾蜍最小回血量 = 4000000;
var 天皇蟾蜍最大回血量 = 8000000;

var numRewards = 0;// 设定需要奖励的名次数量，請與名次獎勵一致
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
			{ itemId: 4000007, quantity: 5 },
			{ itemId: 4000007, quantity: 3 },
		]
		
		
];

function init() {
	map = null;
    // After loading, ChannelServer
}

function setup(partyid) {
	exitMap = em.getChannelServer().getMapFactory().getMap(returnmap);
    var instanceName = "CastellanToadBattle" + partyid;

    var eim = em.newInstance(instanceName);
    var map = eim.createInstanceMapS(eventmapid);
    map.toggleDrops();

    eim.setProperty("partyid", String(partyid));
    eim.setProperty("start", "true");
    eim.setProperty("天皇蟾蜍血量", String(天皇蟾蜍血量));
    eim.setProperty("忍者頭目血量", String(忍者頭目血量));
    eim.setProperty("鎧甲武士血量", String(鎧甲武士血量));

    eim.startEventTimer(5000);
    return eim;
}

function playerEntry(eim, player, currentDate) {
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));

    eim.setProperty("member"+player.getId(), "1");
    Year = currentDate.getYear();
    Month = currentDate.getMonthValue() - 1;
    Day = currentDate.getDayOfMonth();
}

function changedMap(eim, player, mapid) {
    if (mapid != eventmapid) {
        eim.unregisterPlayer(player);
        eim.disposeIfPlayerBelow(0, 0);
        var map = em.getMapFactory().getMap(returnmap);
        player.changeMap(map, map.getPortal(0));
    }
}

function scheduledTimeout(eim) {
    if( eim == null )
        return;
    var partyId = eim.getProperty("partyid")
    if (eim.getProperty("start").equals("true")) {
        var map = eim.getMapInstance(0);
        map.spawnCastellanToad(555, 142, partyId);
        eim.setProperty("start", "false");
        eim.restartEventTimer(副本時間); //時間
    } else {
        var player = eim.getPlayers().get(0);
        eim.disposeIfPlayerBelow(100, returnmap);
        eim = null;
    }

}

function allMonstersDead(eim) {
    //eim.broadcastPlayerMsg(5, "你已完成天皇蟾蜍副本!");
}

function playerDead(eim, player) {
    eim.setProperty("member"+player.getId(), "0");
	player.changeMap(eim.getMapInstance(returnmap), eim.getMapInstance(returnmap).getPortal(0));
}

function playerRevive(eim, player) {
/*
    player.addHP(50);
    player.changeMap(eim.getMapInstance(returnmap), eim.getMapInstance(returnmap).getPortal(0));
	eim.broadcastPlayerMsg(5, player.getName() + " 因為死亡離開了副本");
    return true;
    */
}

//玩家使用原地復活
function playerUseWheelRevive(eim, player) {
    player.changeMap(player.getMapId(), 0);
    eim.setProperty("member"+player.getId(), "1");
}
//玩家不使用原地復活
function playerIgnoreWheelRevive(eim, player) {
    if(player.getMapId() == eventmapid){
        eim.unregisterPlayer(player);
        player.changeMap(exitMap, exitMap.getPortal(0));
        eim.setProperty("member"+player.getId(), "0");
        if(eim.getPlayerCount()==0){
            end(eim);
        }
    }
}

function playerDisconnected(eim, player) {
    eim.setProperty("member"+player.getId(), "1");
    eim.unregisterPlayer(player);
    player.getMap().removePlayer(player);
    player.setMap(exitMap);
    if(eim.getPlayerCount()==0){
        end(eim);
        eim.setProperty("member"+player.getId(), "0");
    }
}

function monsterDamaged(eim, player, mobId, damage){

	if (mobId != 9400409 ) return;
	var 玩家累積傷害 = eim.getProperty("PlayDamage_"+ String(player.getId()) );
	if (玩家累積傷害 != null) {
      eim.setProperty("PlayDamage_"+player.getId(), ""+(玩家累積傷害*1 + damage));
    } else {
      eim.setProperty("PlayDamage_"+player.getId(), ""+damage);
    }

}

function monsterValue(eim, mobid, mobpos) {
    if (mobid == 9400405) {
        var boss = eim.getMapInstance(0).getMonsterById(9400409);
        if (mobpos.getX() >= boss.getPosition().getX()) {
            boss.setHp(boss.getHp() + randRetrieveHp(天皇蟾蜍最小回血量, 天皇蟾蜍最大回血量));
            eim.broadcastPlayerMsg(5, "武士在王的右邊導致王回血量了!");
        }
    }
    if (mobid == 9400409) {
        clearPQ(eim);
    }
    return 0;
}

function leftParty(eim, player) {
    // Happens when a player left the party
}

function disbandParty(eim, player) {
    // Boot whole party and end
}

//玩家主動離開跑這個
function playerExit(eim, player) {
	eim.unregisterPlayer(player);
	player.changeMap(exitMap, exitMap.getPortal(0));
	eim.removeDisconnected(player.getId());
	eim.setProperty("member"+player.getId(), "0");
}

function clearPQ(eim) {
    var playerID = 0;
    var playerDamage = 0;
    var playerBossDamage = 0;
    var playerDamageList = [];
	var mapFactory = eim.getMapFactory();
	map = mapFactory.getMap(eventmapid);
    map.showEffect("quest/carnival/win"); //地圖顯示勝利特效
    eim.getChannelServer().yellowWorldMessage("【遠征訊息】英勇的勇士們，成功擊敗了" + 遠征怪物名稱 + "..！ 楓之谷世界又燃起了新希望");
    eim.startEventTimer(remainTime); //設為最後3分鐘
    var playerList = eim.getPlayers();
    for (var i = 0; i < playerList.size(); i++) {
        var playerID = playerList.get(i);
        var playerUID = playerID.getId();
        var playerDamage = eim.getProperty("PlayDamage_" + String(playerUID)) * 1;
        var playerName = playerID.getName();

        var playerBossDamage = playerID.getCharInfoNum_long(遠征怪物名稱);
        var checkPlayerNumber = playerID.getId();
        var 玩家紀錄判斷 = eim.getProperty("checkPlayer_1_" + String(checkPlayerNumber));
        if (playerBossDamage == 0 && 玩家紀錄判斷 == null) {
            playerID.setCharInfoNum(遠征怪物名稱, playerDamage);
        } else if (playerDamage > playerBossDamage && 玩家紀錄判斷 == null) {
            playerID.setCharInfoNum(遠征怪物名稱, playerDamage);
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

function registerCarnivalParty(eim, carnivalparty) {
    // Happens when carnival PQ is started. - Unused for now.
}

function onMapLoad(eim, player) {
    // Happens when player change map - Unused for now.
}

function cancelSchedule() {}

function end(eim){
   init();
   eim.disposeIfPlayerBelow(100, returnmap);
   eim = null;
}

function dispose(eim) {

}

function randX() { //地圖x軸座標
    return -500 + Math.floor(Math.random() * 900);//491 148 -509 148
}

function randRetrieveHp(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}