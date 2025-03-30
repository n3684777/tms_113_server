var status = 0;
load('nashorn:mozilla_compat.js');
importPackage(Packages.constants); // GameConstants.


var player = null;
var numRewardsToGive = 2;//隨機的獎勵數量( 獎勵池的道具數量必須多於抽取的數量 )

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


function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
   status = (mode == 1 ? status+1 : cm.dispose());
//---------------------------------------------------

   if (status == 0) {
      cm.sendSimple("嗨，我是#p9000004#，需要什麼幫忙嗎？？\r\n\r\n"+
                    "#b#L0#我拿到寶箱了 !!#l#k");
   } else if (status == 1) {
      if(cm.haveItem(4031017)){
      cm.removeAll(4031017);
	  giveReward(reward_item, numRewardsToGive);
	  cm.dispose();
	  return;
      //cm.warp(109050000, 0);
      cm.dispose();
      } else {
         cm.sendOk("你還沒有找到 #v4031017# #z4031017#\r\n"+
                   "找到後要快點來找我啊 !!");
         cm.dispose();
      }
      cm.dispose();
   }
	
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