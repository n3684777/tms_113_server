var status = -1;
load('nashorn:mozilla_compat.js');
importPackage(Packages.server.maps); // MapleItemInformationProvider.
importPackage(java.util); // Collections.
importPackage(Packages.handling.world.accountlog);
var sel, select;
var objDate = new Date();
var Month = objDate.getMonth();
var MonthS = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
var tzc = objDate.getDate();
var day = objDate.getDay();
var Year = objDate.getFullYear();
var points;
var randomItems = [];
var randomRewards = [];
var chosenIndexes = [];

///基礎設定
var log_任務接取確認 = "每日怪物擊殺_系列一_接取確認";
var log_任務完成確認 = "每日怪物擊殺_系列一_完成確認";
var log_任務所需怪物確認 = "每日怪物擊殺_系列一_所需怪物確認";
var 上頁 = "#fUI/UIWindow/itemSearch/BtBack/mouseOver/0#";
var 上頁腳本 = "聚合功能";
var 本日隨機怪物 = 6000250;//每個每日指定怪物擊殺都要獨立一組，並且請按照順序遞增，例如複製第二個怪物擊殺腳本，這裡的5000就要變5001
var 本日隨機獎勵識別碼 = 6000251;//同上


//怪物擊殺相關設定
var 是否開啟隨機抽取怪物 = 1; //0= 不隨機抽取怪物 1 = 隨機抽取怪物
var 隨機抽取幾隻怪物 = 2;//怪物陣列數量，請勿小於設定的隨機抽取數量

//指定擊殺怪物陣列，需要在後台"怪物擊殺"資料表中有記載才可被計算
var killmob = [
//怪物代碼, 指定擊殺數量最小數量 指定擊殺數量最大數量
	[100100 , 1, 100],
	[100101 , 1, 100],
	[100120 , 1, 100],
]; 


var 是否開啟隨機獎勵道具 = 1; //0= 不隨機獎勵 1 = 隨機獎勵
var 隨機抽取幾個獎勵 = 2;//怪物陣列數量，請勿小於設定的隨機抽取數量
//設定完成獎勵
var reward_item = [
  //道具代碼 道具數量 天數
  [2000000, 1, -1],
  [2000001, 5, -1],
  [2000002, 3, -1],
  [2000003, 2, -1],
  [2000004, 1, -1],
];


function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
	
    if ((mode == 0 || mode == -1) && status == 0) {
        cm.dispose();
        return;
    }
    mode == 1 ? status++ : status--;

    if (status == 0) {
		for (var i = 0; i < killmob.length; i++) {
			cm.addMobKill(killmob[i][0]);
		}
		if (cm.getPlayer().getPrizeLog("" + Year + "年" + MonthS[Month] + tzc + "日" + log_任務完成確認 + "") > 0) {
		  cm.sendOk("您今日的每日怪物擊殺已完成，請期待明天的任務哦！！");
		  cm.safeDispose();
		  return;
		}
		if((是否開啟隨機抽取怪物 == 1 || 是否開啟隨機獎勵道具 == 1) && cm.getPlayer().getPrizeLog("" + Year + "年" + MonthS[Month] + tzc + "日" + log_任務接取確認 + "") == 0){
			if(是否開啟隨機抽取怪物 == 1){
				
				for (var i = 0; i < 隨機抽取幾隻怪物; i++) {
					var randomIndex = Math.floor(Math.random() * killmob.length);
					while (chosenIndexes.indexOf(randomIndex) !== -1) {
					  randomIndex = Math.floor(Math.random() * killmob.length);
					}
					chosenIndexes.push(randomIndex);
					var randomItem = killmob[randomIndex][0];
					var minAmount = killmob[randomIndex][1];
					var maxAmount = killmob[randomIndex][2];
					var randomAmount = Math.floor(Math.random() * (maxAmount - minAmount + 1)) + minAmount;
					randomItems.push([randomItem, randomAmount]);
				  }
				  var 本日隨機怪物代碼識別 = cm.神秘的方法(本日隨機怪物);
				  本日隨機怪物代碼識別.setCustomData(JSON.stringify(randomItems));
			}
			if(是否開啟隨機獎勵道具 == 1){
				for (var i = 0; i < 隨機抽取幾個獎勵; i++) {
					var randomRewardIndex = Math.floor(Math.random() * reward_item.length);
					var randomReward = reward_item[randomRewardIndex];
					randomRewards.push(randomReward);
				  }
				var 隨機蒐集物代碼識別 = cm.神秘的方法(本日隨機獎勵識別碼);
					隨機蒐集物代碼識別.setCustomData(JSON.stringify(randomRewards));	
			}
			cm.getPlayer().setPrizeLog("" + Year + "年" + MonthS[Month] + tzc + "日" + log_任務接取確認 + "");
		}
		if(是否開啟隨機抽取怪物 == 1){
			var 讀取隨機怪物識別碼 = cm.getQuestRecord(本日隨機怪物); //本日隨機蒐集物
			randomItems = JSON.parse(讀取隨機怪物識別碼.getCustomData());
		}
		if(是否開啟隨機獎勵道具 == 1){
			var 讀取隨機獎勵識別碼 = cm.getQuestRecord(本日隨機獎勵識別碼); //本日隨機蒐集物
			randomRewards = JSON.parse(讀取隨機獎勵識別碼.getCustomData());
		}
		if(是否開啟隨機抽取怪物 == 0){
			randomItems = killmob;
		}
		if(是否開啟隨機獎勵道具 == 0){
			randomRewards = reward_item;
		}
		if(cm.getPlayer().getPrizeLog("" + Year + "年" + MonthS[Month] + tzc + "日" + log_任務所需怪物確認 + "") == 0){
			for (var i = 0; i < killmob.length; i++) {
				 var 怪物代碼確認 = cm.神秘的方法(killmob[i][0]);
				     怪物代碼確認.setCustomData(0);
			}
			cm.getPlayer().setPrizeLog("" + Year + "年" + MonthS[Month] + tzc + "日" + log_任務所需怪物確認 + "");
		}
		var msg = "		【 #e以下為本日指定的怪物擊殺內容！！#n 】\r\n\r\n\r\n";

		msg += "#b請擊殺以下怪物#k\r\n\r\n";
		if(randomItems == null){
			cm.sendOk("您已有別的角色接取過任務囉！！");
			cm.dispose();
			return;
		}
		for (var i = 0; i < randomItems.length; i++) {
		  var 確認目前擊殺次數 = cm.getDailyAmount(EventLogType.PLAYER, "怪物擊殺" + randomItems[i][0]);
		  msg += "【 #o" + randomItems[i][0] + "# 】 需要擊殺 ： #r" + randomItems[i][1] + "#k 隻\r\n";
		  msg += "目前擊殺："+確認目前擊殺次數+" 隻\r\n\r\n"
		}

		msg += "\r\n\r\n#b可獲得獎勵如下#k\r\n\r\n\r\n";
		for (var i = 0; i < randomRewards.length; i++) {
		  msg += "【 #i" + randomRewards[i][0] + "# 】 -  #z" + randomRewards[i][0] + "# - " + randomRewards[i][1] + " 個\r\n";
		}
		cm.sendSimple(msg);
    } else if (status == 1) {
		for (var i = 0; i < randomItems.length; i++) {
		var 確認目前擊殺次數 = cm.getDailyAmount(EventLogType.PLAYER, "怪物擊殺" + randomItems[i][0]);
			if(確認目前擊殺次數 < randomItems[i][1]){
				cm.sendOk("您還有怪物尚未完成指定的擊殺數量，請再確認哦！！");
				cm.dispose();
				return;
			}
		}
		var items = randomRewards; // 假設這是您要發放的獎勵物品清單
		var requiredSpace = [0, 0, 0, 0, 0]; // 對應五種背包的所需空間，分別是裝備、消耗、裝飾、其他、特殊

		for (var i = 0; i < items.length; i++) {
			var itemID = items[i][0];
			var inventoryType = getInventoryType(itemID);
			requiredSpace[inventoryType - 1]++; // 根據物品ID確定背包類型並增加所需空間計數
		}

		// 檢查背包空間
		var pass = true;
		for (var i = 0; i < requiredSpace.length; i++) {
			if (cm.getInventory(i + 1).getNumFreeSlot() < requiredSpace[i]) { // 背包索引從1開始
				pass = false;
				break;
			}
		}

		if (!pass) {
			cm.sendOk("背包不足，請確保每個背包至少有 " + items.length + " 個空格！");
			cm.dispose();
			return;
		}
		for (var i = 0; i < randomRewards.length; i++) {
			cm.gainItem(randomRewards[i][0], randomRewards[i][1]);
		  }
        cm.sendOk("恭喜您完成了指定怪物擊殺，獎勵已經發給您囉！！");
		cm.worldMessage("" + cm.getName() + " 完成指定怪物擊殺任務，獲得豐厚獎勵。大夥兒快來解！！");
		cm.getPlayer().setPrizeLog("" + Year + "年" + MonthS[Month] + tzc + "日" + log_任務完成確認 + "");
		cm.dispose();
    }

}

function getInventoryType(itemId) {
    if (itemId >= 1000000 && itemId < 2000000) {
        return 1; // 裝備
    } else if (itemId >= 2000000 && itemId < 3000000) {
        return 2; // 消耗
    } else if (itemId >= 3000000 && itemId < 4000000) {
        return 3; // 裝飾
    } else if (itemId >= 4000000 && itemId < 5000000) {
        return 4; // 其他
    } else {
        return 5; // 特殊
    }
}


