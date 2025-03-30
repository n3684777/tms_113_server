var minPlayers = 1;

function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}
function setup(eim, leaderid) {
    em.setProperty("state", "1");
    em.setProperty("leader", "true");
    var eim = em.newInstance("Cooking" + leaderid);
    eim.setProperty("stage", "1");
    eim.setProperty("stage1", "0");
    eim.setProperty("stage2", "0");
    eim.setProperty("stage3", "0");
    eim.setProperty("stage4", "0");
    eim.setProperty("stage5", "0");
    eim.setProperty("fireball", "4");
    var map = eim.setInstanceMap(912080100);
    map.resetFully();
    map.setSpawns(false);
    eim.startEventTimer(600000);
    return eim;
}
function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
    完美料理 = 0;
}
function playerRevive(eim, player) {
}
function scheduledTimeout(eim) {
    end(eim);
}
function changedMap(eim, player, mapid) {
    if (mapid != 912080100) {
        eim.unregisterPlayer(player);
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
    if (mobId == 9300680 || mobId == 9300681) { //王 (食神 或 垃圾桶)
		if(mobId == 9300680){
			完美料理 = 1;
		}
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
function end(eim) {
    eim.disposeIfPlayerBelow(100, 912080000);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}
function clearPQ(eim) {
	var playerList = eim.getPlayers();
	if(完美料理 == 1){
		for (var i = 0; i < playerList.size(); i++) {
			var playerID = playerList.get(i);
			playerID.setPrizeLog("湯寶寶完美料理");
			playerID.gainItem(4033668, 1);
		}
	}else{
		for (var i = 0; i < playerList.size(); i++) {
			var playerID = playerList.get(i);
			playerID.gainItem(4000378, 1);
		}
	}
    //TODO 給獎勵
    end(eim);
}
function allMonstersDead(eim) {
    var stage = parseInt(eim.getProperty("stage"));
    if (stage < 5) {
        eim.setProperty("stage", (stage + 1).toString());
        eim.getMapInstance(0).showEffect("quest/party/clear");
        eim.broadcastPlayerMsg(5, "請和湯寶寶對話進行下一關!");
    } else if (stage == 5) {
        /* 任何一關失敗就召喚垃圾桶
        var fail = false;
        for (var i = 1; i <= 5; i++) {
            if (parseInt(eim.getProperty("stage" + i)) != 1) {
                fail = true;
            }
        }
        var 王 = null;
        var map = eim.getMapInstance(0);
        //王關卡
        if (!fail) {
            //召喚食神
            王 = em.getMonster(9300680);
        } else {
            //召喚垃圾桶
            王 = em.getMonster(9300681);
        }
        if (王 != null) {
            eim.registerMonster(王);
            map.spawnMonsterOnGroundBelow(王, new java.awt.Point(760, -69));
        }
        */

        // 依照每個關卡決定成功率
        var successRate = 0;
        for (var i = 1; i <= 5; i++) {
            if (parseInt(eim.getProperty("stage" + i)) == 1) {
                successRate += 20;
            }
        }

        var 王 = null;
        var map = eim.getMapInstance(0);
        var randomNum = Math.random() * 100;
        if (randomNum <= successRate) {
            // 召唤食神
            王 = em.getMonster(9300680);
        } else {
            // 召唤垃圾桶
            王 = em.getMonster(9300681);
        }

        if (王 != null) {
            eim.registerMonster(王);
            map.spawnMonsterOnGroundBelow(王, new java.awt.Point(760, -69));
        }
    }
}
function leftParty(eim, player) {
    var party = eim.getPlayers();
    if (party.size() < minPlayers) {
        end(eim);
    } else
        playerExit(eim, player);
}
function disbandParty(eim) {
    end(eim);
}
function playerDead(eim, player) {}
function cancelSchedule() {}

function triggerStartStage(eim, currentStage) {
    if (currentStage === 4) {
        var fireball_qty = eim.getProperty("fireball");
        var map = eim.getMapInstance(0);
        var em = eim.getEventManager();
        for (var i = 0; i < fireball_qty; i++) {
            var fireball = em.getMonster(9300679);//火球怪
            eim.registerMonster(fireball);
            map.spawnMonsterOnGroundBelow(fireball, new java.awt.Point(766, 150));
        }
        eim.schedule("checkFireballs", 120000); //2分鐘
    }
}

function checkFireballs(eim) {
    var currentStage = eim.getProperty("stage");
    if (currentStage == 4) {
        var map = eim.getMapInstance(0);
        if (map.countMonsterById(9300679) > 0) {
            map.killAllMonsters(true); //殺全圖怪後觸發allMonstersDead 強制進入下一關
            eim.setProperty("stage4", "0");
            // TODO 給提示說第四關失敗
        }
    }
}

function monsterDamaged(eim, player, mobId, damage){}
var 完美料理 = 0;