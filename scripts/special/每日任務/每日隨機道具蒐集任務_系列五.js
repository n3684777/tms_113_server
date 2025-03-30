

var 本日可接取次數 = 5;


var numItemsToCollect = 2; //隨機抽取道具數量，請不要大於隨機抽取道具數量(needItem)
//下方是 隨機抽取道具數量
var needItem = [
  //道具代碼 最小數量 最大數量
  [4007000, 1000, 2000],
  [4007001, 600, 2000],
  [4007002, 500, 2000],
  [4007003, 500, 2000],
  [4007004, 500, 2000],
  [4007005, 500, 2000],
  [4007006, 1000, 2000],
];

var numRewardsToGive = 2; //隨機的獎勵數量，請不要大於隨機抽取完成獎勵數量(reward_item)
//下方是 隨機抽取完成獎勵
//下方格式為 : [道具代碼, 道具數量, 天數(-1為永久)],
var reward_item = [
  [2450017, 1, -1],
  [2450018, 5, -1],
  [2450019, 3, -1],
  [2450020, 2, -1],
  [2450021, 1, -1],
  [2450022, 2, -1],
  [2450023, 1, -1],
];

//完成給多少點數 1 = 點數 2 = 楓葉點數。如不想給點數右方數字請填 0
var points = [2, 0];

function start() {
  action(1, 0, 0);
}

function action(mode, type, selection) {
  name = cm.getPlayer();
  if (mode == 1) {
    status++;
  } else if (mode == 0) {
    status--;
  } else {
    cm.dispose();
    return;
  }

  if (status == 0) {
    if (cm.getPlayer().getPrizeLog("" + Year + "年" + MonthS[Month] + tzc + "日" + log + "") >= 本日可接取次數) {
      cm.sendOk("您今日的每日隨機道具蒐集次數已達上限");
      cm.safeDispose();
    }
    if (cm.getPlayer().getPrizeLog("" + Year + "年" + MonthS[Month] + tzc + "日" + log_2 + "") <= 0 || name.getCharInfoNum("本日蒐集任務接取狀態_4") == 0) {
      var randomItems = [];
      var randomRewards = [];
      var chosenIndexes = [];

      for (var i = 0; i < numItemsToCollect; i++) {
        var randomIndex = Math.floor(Math.random() * needItem.length);
        while (chosenIndexes.indexOf(randomIndex) !== -1) {
          randomIndex = Math.floor(Math.random() * needItem.length);
        }
        chosenIndexes.push(randomIndex);
        var randomItem = needItem[randomIndex][0];
        var minAmount = needItem[randomIndex][1];
        var maxAmount = needItem[randomIndex][2];
        var randomAmount = Math.floor(Math.random() * (maxAmount - minAmount + 1)) + minAmount;
        randomItems.push([randomItem, randomAmount]);
      }
      name.setCharInfoNum("本日隨機蒐集物_4", JSON.stringify(randomItems));
      name.setCharInfoNum("本日蒐集任務接取狀態_4", 1);
      for (var i = 0; i < numRewardsToGive; i++) {
        var randomRewardIndex = Math.floor(Math.random() * reward_item.length);
        var randomReward = reward_item[randomRewardIndex];
        randomRewards.push(randomReward);
      }
      name.setCharInfoNum("本日隨機蒐集物獎勵_4", JSON.stringify(randomRewards));
      cm.getPlayer().setPrizeLog("" + Year + "年" + MonthS[Month] + tzc + "日" + log_2 + "");
    } else {
      try {
        var record = cm.getQuestRecord(95049); //本日隨機蒐集物
        randomItems = JSON.parse(record.getCustomData());
        var record_2 = cm.getQuestRecord(95050); //本日隨機蒐集物獎勵
        randomRewards = JSON.parse(record_2.getCustomData());
      } catch (e) {
        cm.sendOk("解析本日蒐集物或本日蒐集物獎勵時發生錯誤:\n" + e);
        cm.dispose();
        return;
      }
    }
	var 剩餘每日隨機任務次數 = cm.getPlayer().getPrizeLog("" + Year + "年" + MonthS[Month] + tzc + "日" + log + "");
    var msg = "		【 #e隨機蒐集任務每日可以解 #b" + (本日可接取次數 - 剩餘每日隨機任務次數) + "#k 次！！#n 】\r\n\r\n\r\n";

    msg += "				#b本次每日隨機蒐集任務需要#k\r\n\r\n";

    for (var i = 0; i < randomItems.length; i++) {
      msg += "【 #i" + randomItems[i][0] + "# 】 #z" + randomItems[i][0] + "#　－　" + randomItems[i][1] + "　個\r\n\r\n";
    }

    msg += "\r\n\r\n					#b可獲得獎勵如下#k\r\n\r\n\r\n";
    for (var i = 0; i < randomRewards.length; i++) {
      msg += "【 #i" + randomRewards[i][0] + "# 】 -  #z" + randomRewards[i][0] + "# - " + randomRewards[i][1] + " 個\r\n";
    }

    cm.sendYesNo(msg);

  } else if (status == 1) {
    var allItemsExist = true;
    var record = cm.getQuestRecord(95049); //本日隨機蒐集物
    randomItems = JSON.parse(record.getCustomData());
    var record_2 = cm.getQuestRecord(95050); //本日隨機蒐集物獎勵
    randomRewards = JSON.parse(record_2.getCustomData());
    for (var i = 0; i < randomItems.length; i++) {
      if (!cm.haveItem(randomItems[i][0], randomItems[i][1])) {
        allItemsExist = false;
        break;
      }
    }
    if (!allItemsExist) {
      var missingItemsMsg = "您缺少以下物品：\r\n\r\n";
      for (var i = 0; i < randomItems.length; i++) {
        var itemId = randomItems[i][0];
        var requiredQuantity = randomItems[i][1];
        var ownedQuantity = getOwnedItemQuantity(cm.getPlayer(), itemId);

        missingItemsMsg += "【 #i" + itemId + "# 】 - #z" + itemId + "##k 需要: #b" + requiredQuantity + "#k 擁有: #r" + ownedQuantity + "#k\r\n";
      }
      cm.sendOk(missingItemsMsg);
      cm.dispose();
    } else {
		if (!cm.canHold()) {
			cm.sendOk("請確認你的物品欄位還有空間。");
			cm.dispose();
			return;
		}
		if (points[1] > 0) {
			cm.getPlayer().modifyCSPoints(points[0], points[1], true);
		}
		for (var i = 0; i < randomRewards.length; i++) {
			cm.gainItem(randomRewards[i][0], randomRewards[i][1]);
		}
		for (var i = 0; i < randomItems.length; i++) {
			cm.gainItem(randomItems[i][0], -randomItems[i][1]);
		}
		cm.getPlayer().setPrizeLog("" + Year + "年" + MonthS[Month] + tzc + "日" + log + "");
		var 剩餘每日隨機任務次數 = cm.getPlayer().getPrizeLog("" + Year + "年" + MonthS[Month] + tzc + "日" + log + "");
		cm.sendOk("本次隨機任務獎勵已發放！您目前還可以解 #b" + (本日可接取次數 - 剩餘每日隨機任務次數) + "#k 次哦！！");
		name.setCharInfoNum("本日蒐集任務接取狀態_4", 0);
		cm.worldMessage("" + cm.getName() + " 完成隨機蒐集任務，獲得豐厚獎勵。大夥兒快來解！！");
		cm.dispose();
    }
  } else {
    cm.dispose();
  }
}

function getOwnedItemQuantity(player, itemId) {
  return player.getItemQuantity(itemId, false);
}


var status = -1;

var log = "每日隨機道具蒐集_系列四";
var log_2 = "確認腳本_系列四";
var objDate = new Date();
var Month = objDate.getMonth();
var MonthS = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
var tzc = objDate.getDate();
var day = objDate.getDay();
var Year = objDate.getFullYear();