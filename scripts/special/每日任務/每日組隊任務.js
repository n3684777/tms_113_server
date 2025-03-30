var status;

var objDate = new Date();
var Month = objDate.getMonth();
var MonthS = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
var tzc = objDate.getDate();
var day = objDate.getDay();
var Year = objDate.getFullYear();
var 組隊任務 = [
	["超級綠水靈",1,103000000,"" + Year + "年" + MonthS[Month] + tzc + "日超級綠水靈組隊任務"],//bosslog名稱 目標次數 地圖代碼 9020001
	["101組隊任務",1,221024500,"" + Year + "年" + MonthS[Month] + tzc + "日101組隊任務"],//bosslog名稱 目標次數 地圖代碼 2040035
	["女神組隊任務",1,200080101,"" + Year + "年" + MonthS[Month] + tzc + "日女神組隊任務"],//bosslog名稱 目標次數 地圖代碼 2013002
	["毒霧森林組隊任務",1,300030100,"" + Year + "年" + MonthS[Month] + tzc + "日毒霧森林組隊任務"],//bosslog名稱 目標次數 地圖代碼 2133001
	["金勾海賊團組隊任務",1,251010404,"" + Year + "年" + MonthS[Month] + tzc + "日金勾海賊團組隊任務"],//bosslog名稱 目標次數 地圖代碼 2094001
	["羅密歐與茱麗葉組隊任務",1,261000021,"" + Year + "年" + MonthS[Month] + tzc + "日羅密歐與茱麗葉組隊任務"],//bosslog名稱 目標次數 地圖代碼 2112008  2112009
	["妖僧組隊任務",1,702070400,"" + Year + "年" + MonthS[Month] + tzc + "日妖僧組隊任務"],//bosslog名稱 目標次數 地圖代碼 shaoling
	["結婚組隊任務",1,670010000,"" + Year + "年" + MonthS[Month] + tzc + "日結婚組隊任務"],
	["怪物擂台組隊任務",1,980000000,"" + Year + "年" + MonthS[Month] + tzc + "日怪物擂台組隊任務"],//bosslog名稱 目標次數 地圖代碼 2042002
];

var 是否點選能被傳送 = 0;// 0 = 開 1 = 關
//下方是會隨機抽取的物品
var 物品 = [
	[2000008,1],//物品代碼 數量
	[2000009,1],//物品代碼 數量
	[2000010,2],//物品代碼 數量

];

//下方是固定會抽取到的物品
var 固定物品 = [
	[2340000,1],//物品代碼 數量
	[2049100,1],//物品代碼 數量
	[2450000,2],//物品代碼 數量
	[2022530,2],//物品代碼 數量

];

//下方是全部任務完成會拿到隨機的物品
var 全完成物品 = [
	[2340000,1],//物品代碼 數量
	[2049100,1],//物品代碼 數量
];

//下方是全部任務完成會拿到固定的物品
var 全完成固定物品 = [
	[2340000,1],//物品代碼 數量
	[2049100,1],//物品代碼 數量
];

function start() {
    status = -1;
    action(1, 0, 0);
}

var case0sel;
var counts;

function action(mode, type, sel) {

	if (mode == 0) {
		cm.dispose();
		return;
    }
	mode == 1 ? status++ : status--
	
	var text = "";
    switch (status) {
        case 0:
			var finishLog = cm.getPlayer().getBossLog(Year + "年" + MonthS[Month] + tzc + "日組隊任務全完成獎勵");
				if (finishLog >= 1){
					cm.sendOk("#b已領取過本日 #r組隊任務最終獎勵 #b了哦！");
					cm.dispose();
					break;
				}
			text += "【 嗨！" + cm.getPlayer().getName() + " 我是每日組隊任務NPC！ 】\r\n"
			text += "#r完成以下指定組隊任務累積次數後可領取獎勵：\r\n\r\n"
			var allPQCompleted = true;

			for (var i in 組隊任務){
				counts = cm.getPlayer().getBossLog(組隊任務[i][3]);
				if(cm.getPlayer().getBossLog(組隊任務[i][0]+"獎勵") >= 1){
					text += "#d#L"+ i +"#"+ 組隊任務[i][0] +"( "+ (counts < 組隊任務[i][1] ? "#r"+counts+"#d" : counts)  +" / "+ 組隊任務[i][1] +" ) 次  #r已領取#k#l\r\n"
				}else{
					text += "#d#L"+ i +"#"+ 組隊任務[i][0] +"( "+ (counts < 組隊任務[i][1] ? "#r"+counts+"#d" : counts)  +" / "+ 組隊任務[i][1] +" ) 次#l\r\n"
					allPQCompleted = false;
				}
			}
			text += "#b\r\n\r\n\r\n【 固定獲得獎品 】"
			for (var i in 固定物品){
				if(i%6 == 0)
					text+="\r\n\r\n   ";
					text += "#i" + 固定物品[i][0] + ":#  "
			}
			
			text += "#b\r\n\r\n\r\n【 隨機獲得獎品 】"
			for (var i in 物品){
				if(i%6 == 0)
					text+="\r\n\r\n   ";
					text += "#i" + 物品[i][0] + ":#  "
			}

			if (allPQCompleted) {
				text = "【 嗨！" + cm.getPlayer().getName() + " 我是每日組隊任務NPC！ 】\r\n";
				text += "恭喜你組隊任務已全部完成\r\n";
				text += "#L" + (組隊任務.length) + "# 點我領獎! #l";

				text += "#b\r\n\r\n\r\n【 固定獲得獎品 】"
				for (var i in 全完成固定物品){
					if(i%6 == 0)
						text+="\r\n\r\n   ";
					text += "#i" + 全完成固定物品[i][0] + ":#  "
				}

				text += "#b\r\n\r\n\r\n【 隨機獲得獎品 】"
				for (var i in 全完成物品){
					if(i%6 == 0)
						text+="\r\n\r\n   ";
					text += "#i" + 全完成物品[i][0] + ":#  "
				}
			}

			cm.sendNext(text);
            break;
		case 1:
			case0sel = sel;
			if (case0sel == 組隊任務.length) {
				var finishLog = cm.getPlayer().getBossLog(Year + "年" + MonthS[Month] + tzc + "日組隊任務全完成獎勵");
				if (finishLog >= 1){
					cm.sendOk("#b已領取過本日 #r組隊任務最終獎勵 #b了哦！");
					cm.dispose();
					break;
				}
				var items = 全完成固定物品;
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

				cm.getPlayer().setBossLog(Year + "年" + MonthS[Month] + tzc + "日組隊任務全完成獎勵");
				cm.getPlayer().setPrizeLog(Year + "年" + MonthS[Month] + tzc + "日組隊任務全完成獎勵");

				for (var i = 0; i < 全完成固定物品.length; i++) {
					cm.gainItem(全完成固定物品[i][0], 全完成固定物品[i][1]);
					cm.GAMEPLAYERLOG("每日組隊任務全部完成", "獲得固定物品", 全完成固定物品[i][0], 全完成固定物品[i][1]);
				}

				var random = getRandom(0, (全完成物品.length - 1));
				cm.gainItem(全完成物品[random][0], 全完成物品[random][1]);
				cm.GAMEPLAYERLOG("每日組隊任務全部完成", "獲得隨機物品", 全完成物品[random][0], 全完成物品[random][1]);
				var rewardMsg = "#b恭喜您已完成 #r全部每日任務\r\n#b以下是您獲得的獎勵\r\n\r\n";
				for (var i = 0; i < 全完成固定物品.length; i++) {
					rewardMsg += "#i" + 全完成固定物品[i][0] + ":#  #z" + 全完成固定物品[i][0] + "# :  " + 全完成固定物品[i][1] + " 個\r\n\r\n";
				}
				rewardMsg += "#i" + 全完成物品[random][0] + ":#  #z" + 全完成物品[random][0] + "#  :  " + 全完成物品[random][1] + " 個\r\n\r\n";
				cm.sendOk(rewardMsg);
				cm.GAMEPLAYERLOG("每日組隊任務", "完成全部組隊任務", 0, 0);
				cm.worldMessage(5,"恭喜『" + cm.getPlayer().getName() + "』完成全部每日組隊任務 : 抽中了 : " + cm.getItemName(全完成物品[random][0]) + " x " + 全完成物品[random][1]);

				cm.getPlayer().setPrizeLog("組隊任務全完成獎勵");
				cm.dispose();
				break;
			} else {
				counts = cm.getPlayer().getBossLog(組隊任務[case0sel][3]);
				var finishLog = cm.getPlayer().getBossLog(組隊任務[case0sel][0]+"獎勵");
				if (counts < 組隊任務[case0sel][1]){
					if(是否點選能被傳送 == 1){
						cm.warp(組隊任務[case0sel][2]);
						cm.getPlayer().dropMessage(5, "已將您傳送至組隊入口，到達指定次數再來找我領取獎勵！");
					}else{
						cm.sendOk("加油加油，快去完成任務來拿獎勵！");
					}
					cm.dispose();
					return;
					break;
				}
				if (finishLog >= 1){
					cm.sendOk("#b已領取過本日 #r"+ 組隊任務[case0sel][0] +"#b 獎勵了哦！");
					cm.dispose();
					break;
				}
				var items = 固定物品; // 假設這是您要發放的獎勵物品清單
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
				if(counts >= 組隊任務[case0sel][1]){
					cm.getPlayer().setBossLog(組隊任務[case0sel][0]+"獎勵");


					for (var i = 0; i < 固定物品.length; i++) {
						cm.gainItem(固定物品[i][0], 固定物品[i][1]);
						cm.GAMEPLAYERLOG("每日組隊任務", "獲得固定物品", 固定物品[i][0], 固定物品[i][1]);
					}
					var random = getRandom(0, (物品.length - 1));
					cm.gainItem(物品[random][0], 物品[random][1]);
					cm.GAMEPLAYERLOG("每日組隊任務", "獲得隨機物品", 物品[random][0], 物品[random][1]);
					var rewardMsg = "#b恭喜您已完成每日任務 : #r" + 組隊任務[case0sel][0] + " \r\n#b以下是您獲得的獎勵\r\n\r\n";
					for (var i = 0; i < 固定物品.length; i++) {
						rewardMsg += "#i" + 固定物品[i][0] + ":#  #z" + 固定物品[i][0] + "# :  " + 固定物品[i][1] + " 個\r\n\r\n";
					}
					rewardMsg += "#i" + 物品[random][0] + ":#  #z" + 物品[random][0] + "#  :  " + 物品[random][1] + " 個\r\n\r\n";
					cm.sendOk(rewardMsg);
					cm.GAMEPLAYERLOG("每日組隊任務", "完成組隊任務", 0, 0);
					var x = 0;
					for (var i in 組隊任務){
						var finishLog = cm.getPlayer().getBossLog(組隊任務[i][0]+"獎勵");
						if(finishLog >= 1){
							x++;
						}
					}
					if(x >= 8){
						cm.getPlayer().setPrizeLog("" + Year + "年" + MonthS[Month] + tzc + "日每日組隊任務");
					}
					if(x == 5){
						cm.gainItem(4460001, 5);//組隊硬幣
					}
					cm.worldMessage(5,x+"恭喜『" + cm.getPlayer().getName() + "』"+x+"完成每日組隊任務 : " + 組隊任務[case0sel][0] + " 抽中了 : " + cm.getItemName(物品[random][0]) + " x " + 物品[random][1]);
					
					cm.dispose();
					break;
				}
			}
			cm.sendOk("出現異常 請聯絡管理員!");
			cm.dispose();
			break;
    }
}

this.getRandom = function(minNum, maxNum) {
	return Math.floor( Math.random() * (maxNum - minNum + 1) ) + minNum;
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