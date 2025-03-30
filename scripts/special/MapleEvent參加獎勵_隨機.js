/*
*  MapleEvent 參加獎勵腳本
*/
load('nashorn:mozilla_compat.js');
importPackage(Packages.constants); // GameConstants.

var player = null;
var numRewardsToGive = 2; //隨機的獎勵數量( 獎勵池的道具數量必須多於抽取的數量 )

/// 打瓶蓋、打果子完成獎勵
var reward_item = [
  //道具代碼 道具數量 天數 抽中機率(100%為必中)
  [4000001, 1, -1, 100],
  [4000002, 5, -1, 60],
  [4000003, 3, -1, 50],
  [4000004, 2, -1, 30],
  [4000005, 1, -1, 20],
  [4000006, 2, -1, 20],
  [4000007, 1, -1, 10],
];

/// 終極忍耐、向上攀升參加獎勵
var reward_item_2 = [
  //道具代碼 道具數量 天數 抽中機率(100%為必中)
  [4000001, 1, -1, 100],
  [4000002, 5, -1, 60],
  [4000003, 3, -1, 50],
  [4000004, 2, -1, 30],
  [4000005, 1, -1, 20],
  [4000006, 2, -1, 20],
  [4000007, 1, -1, 10],
];

/// 滾雪球獎勵
var reward_item_3 = [
  //道具代碼 道具數量 天數 抽中機率(100%為必中)
  [4000001, 1, -1, 100],
  [4000002, 5, -1, 60],
  [4000003, 3, -1, 50],
  [4000004, 2, -1, 30],
  [4000005, 1, -1, 20],
  [4000006, 2, -1, 20],
  [4000007, 1, -1, 10],
];

/// 是非題大考驗獎勵 (每答對一次就發獎勵，共有10次問答)
var OX_REWARD = [
  //道具代碼 道具數量 天數 抽中機率(100%為必中)
  [4000001, 1, -1, 100],
  [4000002, 5, -1, 60],
  [4000003, 3, -1, 50],
  [4000004, 2, -1, 30],
  [4000005, 1, -1, 20],
  [4000006, 2, -1, 20],
  [4000007, 1, -1, 10],
];


function start(){
    player = cm.getPlayer();
   
    if(player.getMapId() == 109020001){//是非題大考驗(選邊站地圖)
		cm.GAMEPLAYERLOG("參加獎勵", "獲得參加獎勵_是非題大考驗子[======================]", 0, 0);
        giveReward(OX_REWARD, 1);
		cm.GAMEPLAYERLOG("參加獎勵", "獲得參加獎勵_是非題大考驗[======================]", 0, 0);
      }
    /*
    if(GameConstants.isEventMap(player.getMapId())){
        giveReward(reward_item, numRewardsToGive);
    }
    */
    if(player.getMapId() == 109080000){//打果子
		cm.GAMEPLAYERLOG("參加獎勵", "獲得參加獎勵_打果子[======================]", 0, 0);
        giveReward(reward_item, numRewardsToGive);
		cm.GAMEPLAYERLOG("參加獎勵", "獲得參加獎勵_打果子[======================]", 0, 0);
        cm.dispose();
        return;
    }
    if(player.getMapId() == 109080010){//打瓶蓋
	cm.GAMEPLAYERLOG("參加獎勵", "獲得參加獎勵_打瓶蓋[======================]", 0, 0);
        giveReward(reward_item, numRewardsToGive);
		cm.GAMEPLAYERLOG("參加獎勵", "獲得參加獎勵_打瓶蓋[======================]", 0, 0);
        cm.dispose();
        return;
    }
    var mapids = [
        109040000, 109040001, 109040002, 109040003, 109040004, //終極忍耐
        109030001, 109030002, 109030003, //向上攀升
        109010000, 109010100, 109010101, 109010102, 109010103, 109010104, 109010105, 109010106, 109010107, 109010108, 109010109, 109010110, 109010200, 109010201, 109010202, 109010203, 109010204, 109010205, 109010206 //尋寶
    ];

    if (mapids.indexOf(player.getMapId()) > -1) {
		cm.GAMEPLAYERLOG("參加獎勵", "獲得參加獎勵_終極忍耐/向上攀升[======================]", 0, 0);
        giveReward(reward_item_2, numRewardsToGive);
		cm.GAMEPLAYERLOG("參加獎勵", "獲得參加獎勵_終極忍耐/向上攀升[======================]", 0, 0);
        cm.dispose();
        return;
    }

    if(player.getMapId() == 109060000){//滾雪球
		cm.GAMEPLAYERLOG("參加獎勵", "獲得參加獎勵_滾雪球[======================]", 0, 0);
        giveReward(reward_item_3, numRewardsToGive);
		cm.GAMEPLAYERLOG("參加獎勵", "獲得參加獎勵_滾雪球[======================]", 0, 0);
        cm.dispose();
        return;
    }
    cm.dispose();
}


function giveReward(rewards, numRewards) {
    if(numRewards > rewards.length){
        throw new Error('要求的獎勵多於可用的獎勵。');
    }

    var chosenRewards = [];
    while (chosenRewards.length < numRewards) {
        var reward = chooseRewardBasedOnProbability(rewards);
        if (!containsReward(chosenRewards, reward)) {
            chosenRewards.push(reward);
            cm.gainItem(reward[0], reward[1], reward[2]);
			cm.GAMEPLAYERLOG("參加獎勵", "獲得參加獎勵", reward[0], reward[1]);
        }
    }
}

function chooseRewardBasedOnProbability(rewards) {
    var totalProbability = rewards.reduce(function (total, reward) {
        return total + reward[3];
    }, 0);
    var randomPoint = Math.random() * totalProbability;
    var accumulatedProbability = 0;

    for (var i = 0; i < rewards.length; i++) {
        accumulatedProbability += rewards[i][3];
        if (accumulatedProbability >= randomPoint) {
            return rewards[i];
        }
    }
    return null; // In case there is no reward, which should not happen
}

function containsReward(rewardList, reward) {
    for (var i = 0; i < rewardList.length; i++) {
        if (rewardList[i][0] === reward[0]) {
            return true;
        }
    }
    return false;
}



