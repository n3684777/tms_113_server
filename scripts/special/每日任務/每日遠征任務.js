var status;

var objDate = new Date();
var Month = objDate.getMonth();
var MonthS = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
var tzc = objDate.getDate();
var day = objDate.getDay();
var Year = objDate.getFullYear();
var log紀錄次數 = "每日遠征任務";
var 遠征任務 = [
	["拉圖斯",2,220080000,"" + Year + "年" + MonthS[Month] + tzc + "日拉圖斯_完成"],
	["夢幻公園",2,551030100,"" + Year + "年" + MonthS[Month] + tzc + "日夢幻公園_完成"],
	["殘暴炎魔",2,211042400,"" + Year + "年" + MonthS[Month] + tzc + "日殘暴炎魔_完成"],
	["闇黑龍王",1,240050400,"" + Year + "年" + MonthS[Month] + tzc + "日闇黑龍王_完成"],
	["黑道長老",1,801040004,"" + Year + "年" + MonthS[Month] + tzc + "日黑道長老_完成"],
];
var 點選可傳送 = 0; // 0 = 關 1 = 開

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
			text += "嗨！" + cm.getPlayer().getName() + " 我是#b"+ cm.getChannelServer().getServerName() +"#k每日遠征任務NPC！\r\n"
			text += "#r完成以下指定遠征任務累積次數後可領取獎勵(每項可領取一次)：\r\n\r\n"
			for (var i in 遠征任務){
				counts = cm.getPlayer().getPrizeLog(遠征任務[i][3]);
				if(cm.getPlayer().getPrizeLog(Year + "年" + MonthS[Month] + tzc +"日"+遠征任務[i][0]+"獎勵") >= 1){
					text += "#d#L"+ i +"#【 "+ 遠征任務[i][0] +"】 (#e "+ (counts < 遠征任務[i][1] ? "#r"+counts+"" : counts)  +" / "+ 遠征任務[i][1] +" ) 次  #r已領取#k#l\r\n"
				}else{
					text += "#d#L"+ i +"#【 "+ 遠征任務[i][0] +"】 (#e "+ (counts < 遠征任務[i][1] ? "#r"+counts+"" : counts)  +" / "+ 遠征任務[i][1] +"#n )次#l\r\n"
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
			cm.sendNext(text);
            break;
		case 1:
			case0sel = sel;
			counts = cm.getPlayer().getPrizeLog(遠征任務[case0sel][3]);
			var finishLog = cm.getPlayer().getPrizeLog("" + Year + "年" + MonthS[Month] + tzc + "日" + 遠征任務[case0sel][0]+"獎勵");
			if (counts < 遠征任務[case0sel][1]){
				if(點選可傳送 == 1){
					cm.warp(遠征任務[case0sel][2]);
					cm.getPlayer().dropMessage(5, "已將您傳送至入口，到達指定次數再來找我領取獎勵！");
				}else{
					cm.sendOk("加油加油，快去完成任務來拿獎勵！");
				}
				cm.dispose();
				break;
			}
			if (finishLog >= 1){
				cm.sendOk("#b已領取過本日 #r"+ 遠征任務[case0sel][0] +"#b 獎勵了哦！");
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
			if(counts >= 遠征任務[case0sel][1]){
				cm.getPlayer().setPrizeLog("" + Year + "年" + MonthS[Month] + tzc + "日" + log紀錄次數 + "");
				cm.getPlayer().setPrizeLog("" + Year + "年" + MonthS[Month] + tzc + "日" + 遠征任務[case0sel][0]+"獎勵");
				
				for (var i = 0; i < 固定物品.length; i++) {
					cm.gainItem(固定物品[i][0], 固定物品[i][1]);
					cm.GAMEPLAYERLOG("每日遠征任務", "獲得固定物品", 固定物品[i][0], 固定物品[i][1]);
				}
				var random = getRandom(0, (物品.length - 1));
				cm.gainItem(物品[random][0], 物品[random][1]);
				cm.GAMEPLAYERLOG("每日遠征任務", "獲得隨機物品", 物品[random][0], 物品[random][1]);
				var rewardMsg = "#b恭喜您已完成遠征任務 : #r" + 遠征任務[case0sel][0] + " \r\n#b以下是您獲得的獎勵\r\n\r\n";
				for (var i = 0; i < 固定物品.length; i++) {
					rewardMsg += "#i" + 固定物品[i][0] + ":# :  " + 固定物品[i][1] + " 個\r\n\r\n";
				}
				rewardMsg += "#i" + 物品[random][0] + ":# :  " + 物品[random][1] + " 個\r\n\r\n";
				cm.sendOk(rewardMsg);
				cm.getPlayer().addActive(Year + "年" + MonthS[Month] + tzc + "日" + log紀錄次數, 1);
				cm.GAMEPLAYERLOG("每日遠征任務", "完成遠征任務", 0, 0);
				cm.worldMessage(5,"恭喜『" + cm.getPlayer().getName() + "』完成每日遠征任務 : " + 遠征任務[case0sel][0] + " 獲得:" + cm.getItemName(物品[random][0]) + " x " + 物品[random][1]);
				cm.dispose();
				break;
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