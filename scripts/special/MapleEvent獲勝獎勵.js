/*
*  MapleEvent 獲勝獎勵腳本
*/
load('nashorn:mozilla_compat.js');
importPackage(Packages.constants); // GameConstants.

var player = null;
var numRewardsToGive = 2; //隨機的獎勵數量( 獎勵池的道具數量必須多於抽取的數量 )

/// 打瓶蓋、打果子完成獎勵
var reward_item = [
  //道具代碼 道具數量 天數
  [4000001, 1, -1],
  [4000002, 5, -1],
  [4000003, 3, -1],
  [4000004, 2, -1],
  [4000005, 1, -1],
  [4000006, 2, -1],
  [4000007, 1, -1],
];

/// 終極忍耐、向上攀升完成獎勵
var reward_item_2 = [
  //道具代碼 道具數量 天數
  [4000001, 1, -1],
  [4000002, 5, -1],
  [4000003, 3, -1],
  [4000004, 2, -1],
  [4000005, 1, -1],
  [4000006, 2, -1],
  [4000007, 1, -1],
];

/// 滾雪球獎勵
var reward_item_3 = [
  //道具代碼 道具數量 天數
  [4000029, 1, -1],
  [4000030, 5, -1],
  [4000031, 3, -1],
  [4000032, 2, -1],
  [4000033, 1, -1],
  [4000034, 2, -1],
  [4000035, 1, -1],
];

/// 是非題大考驗獎勵 (每答對一次就發獎勵，共有10次問答)
var OX_REWARD = [
  //道具代碼 道具數量 天數
  [4000001, 1, -1],
  [4000002, 5, -1],
  [4000003, 3, -1],
  [4000004, 2, -1],
  [4000005, 1, -1],
  [4000006, 2, -1],
  [4000007, 1, -1],
];


function start(){
    player = cm.getPlayer();
   
    if(player.getMapId() == 109020001){//是非題大考驗(選邊站地圖)
		cm.GAMEPLAYERLOG("獲勝獎勵", "獲得獲勝獎勵_是非題大考驗子[======================]", 0, 0);
        giveReward(OX_REWARD, 1);
		cm.GAMEPLAYERLOG("獲勝獎勵", "獲得獲勝獎勵_是非題大考驗子[======================]", 0, 0);
      }
    /*
    if(GameConstants.isEventMap(player.getMapId())){
        giveReward(reward_item, numRewardsToGive);
    }
    */
    if(player.getMapId() == 109080000){//打果子
		cm.GAMEPLAYERLOG("獲勝獎勵", "獲得獲勝獎勵_打果子[======================]", 0, 0);
        giveReward(reward_item, numRewardsToGive);
		cm.GAMEPLAYERLOG("獲勝獎勵", "獲得獲勝獎勵_打果子[======================]", 0, 0);
        cm.dispose();
        return;
    }
    if(player.getMapId() == 109080010){//打瓶蓋
		cm.GAMEPLAYERLOG("獲勝獎勵", "獲得獲勝獎勵_打瓶蓋[======================]", 0, 0);
        giveReward(reward_item, numRewardsToGive);
		cm.GAMEPLAYERLOG("獲勝獎勵", "獲得獲勝獎勵_打瓶蓋[======================]", 0, 0);
        cm.dispose();
        return;
    }

    if(player.getMapId() == 109050000){//終極忍耐、向上攀升、尋寶
		cm.GAMEPLAYERLOG("獲勝獎勵", "獲得獲勝獎勵_終極忍耐/向上攀升/尋寶[======================]", 0, 0);
        giveReward(reward_item_2, numRewardsToGive);
		cm.GAMEPLAYERLOG("獲勝獎勵", "獲得獲勝獎勵_終極忍耐/向上攀升/尋寶[======================]", 0, 0);
        cm.dispose();
        return;
    }

    if(player.getMapId() == 109060000){//滾雪球
		cm.GAMEPLAYERLOG("獲勝獎勵", "獲得獲勝獎勵_滾雪球[======================]", 0, 0);
        giveReward(reward_item_3, numRewardsToGive);
		cm.GAMEPLAYERLOG("獲勝獎勵", "獲得獲勝獎勵_滾雪球[======================]", 0, 0);
        cm.dispose();
        return;
    }
    cm.dispose();
}


function giveReward(rewards, numRewards) {
    if(numRewards > rewards.length){
        throw new Error('要求的獎勵多於可用的獎勵。');
    }

    var uniqueRewards = shuffleArray(rewards).slice(0, numRewards);
    
    for(var i = 0; i < uniqueRewards.length; i++){
        // Assuming giveItem(itemId, count, days) function is available
        cm.gainItem(uniqueRewards[i][0], uniqueRewards[i][1], uniqueRewards[i][2]); 
		cm.GAMEPLAYERLOG("獲勝獎勵", "獲得獲勝獎勵", uniqueRewards[i][0], uniqueRewards[i][1]);
    }
}

// Fisher-Yates shuffle
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1)); 
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

