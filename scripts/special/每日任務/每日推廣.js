importPackage(Packages.handling.world.accountlog);
var status = -1;
//這裡設定log的名稱 判定是否已領過
var log = "每日推廣";
//這裡設定領取物品的限制等級
var level = 10;
//這裡放要給的物品
var prize = [
		//道具代碼、數量、使用天數(-1為無限)、4屬設定、物攻、魔攻、如非裝備有屬性的請填 0
		[2450000, 1, -1, 0, 0, 0, 0],
		[2250000, 1, -1, 0, 0, 0, 0],
];
//點數設定   [第一格GASH填1 楓葉點數填2,第二格填數量 不發填0]
var point = [2, 10];
var 楓點圖案 = "#v4460006#"

var 楓幣 = 10000;
var 楓幣圖案 = "#v4460007#"


var 紅利點數 = 1000;
var 紅利圖案 = "#v4460005#"

//如不想登記名稱可以使用指令 !accLog - [玩家名稱] [log名稱] 在遊戲內登記。
var namelist = Array(
	"測試用",
	"測試用",
	"測試用",
	"測試用",
	"測試用",
	"測試用",
	"測試用",
	"測試用",
	"測試用",
	"測試用",
	"測試用",
	"測試用",
	"測試用",
	"測試用",
	"測試用",
	"測試用",
	"測試用",
	"測試用",
	"測試用",
	"測試用",
	"測試用",
	"測試用",
	"測試用",
	"測試用"
);

	
function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	name = cm.getPlayer().getName();
	if (mode == 1) {
		status++;
	} else if (mode == 0) {
		status--;
	} else {
		cm.dispose();
		return;
	}

	if (status == 0) {
		if (cm.getPlayerStat("LVL") < level) {
			cm.sendOk(level + "等以上才能領取" + log + "哦!");
			cm.safeDispose();
		}
		if (cm.getDailyAmount(EventLogType.ACCOUNT, log) >= 1) {
			cm.sendOk("您的帳號已經領取過" + log + "了喔！");
			cm.safeDispose();
			return;
		}
		if (cm.getPlayer().getPrizeLog(log) >= 1) {
			cm.sendOk("您的帳號已經領取過" + log + "了喔！");
			cm.safeDispose();
		}
				
		var choice = "#d您好冒險者，以下為" + log + "獎勵內容#b\r\n\r\n";
		for (var i = 0; i < prize.length; i++)
			choice += "【 #i" + prize[i][0] + "# 】 #t" + prize[i][0] + "# " + prize[i][1] + 
			" 個\r\n\r\n" + 
			(prize[i][2] > 0 ? ("  期限 #r#e" + prize[i][2] + "#n#b天") : "") + 
			(prize[i][3] > 0 ? ("  ４屬增加 #r#e" + prize[i][3] + "#n#b") : "") + 
			(prize[i][4] > 0 ? ("  物攻增加 #r#e" + prize[i][4] + "#n#b") : "") + 
			(prize[i][5] > 0 ? ("  魔攻增加 #r#e" + prize[i][5] + "#n#b") : "") + 
			"\r\n\r\n";
		if (point[1] > 0) {
			choice += point[0] == 1 ? "【 "+楓點圖案+" 】 Gash點數 " : "【 "+楓點圖案+" 】 楓葉點數 " + point[1] + " 點\r\n\r\n";
		}
		if (楓幣 > 0) {
			choice += "【 "+楓幣圖案+" 】 楓幣 "+楓幣 / 10000+" 萬\r\n";
		}
		choice += "\r\n";	
		if (紅利點數 > 0) {
			choice += "【 "+紅利圖案+" 】 紅利 "+紅利點數+" 點";
		}
		choice += "\r\n\r\n\r\n\r\n";				
		choice += "(#r請注意!!背包請確保有空位領取，被吃無法補償!)\r\n";
		cm.sendYesNo(choice);

	} else if (status == 1) {
		var items = prize; // 假設這是您要發放的獎勵物品清單
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
		var canget = false;
		for(var i =0; i< namelist.length;i++){
			if(namelist[i].equals(name)){
				canget = true;
			}
		}
		if(canget && cm.getDailyAmount(EventLogType.ACCOUNT, name+"_"+log) < 1){
			cm.addEventLog(EventLogType.ACCOUNT, name+"_"+log, 1);
		}
		
		if(cm.getDailyAmount(EventLogType.ACCOUNT, name+"_"+log) >= 1){
			for (var i = 0; i < prize.length; i++) {
				四屬數值 = prize[i][3];
				物攻數值 = prize[i][4];
				魔攻數值 = prize[i][5];
				道具天數 = prize[i][2];
				屬性道具 = prize[i][6];
				if(屬性道具 == 0){
					cm.gainItem(prize[i][0], prize[i][1], 道具天數);
				}else{
					cm.gainItem(prize[i][0], prize[i][1], 四屬數值, 四屬數值, 四屬數值, 四屬數值, 0, 0, 物攻數值, 魔攻數值, 0, 0, 0, 0, 0, 0, 道具天數); 
				}
						
			}
			if (point[1] > 0) {
				cm.getPlayer().modifyCSPoints(point[0], point[1], true); 
			}
			if (楓幣 > 0) {
				cm.gainMeso(楓幣);
			}	
			if (紅利點數 > 0) {
				cm.getPlayer().setDividend(紅利點數);
			}	
			cm.getPlayer().setPrizeLog(log);
			cm.addEventLog(EventLogType.ACCOUNT, log, 1);
			cm.sendNext("#b" + log + "已發放，請前往背包查收"); //最後訊息 
			cm.worldMessage("" + cm.getName() + " 領取了" + log + "，讓我們恭喜他，也感謝他為我們分享付出！");
			cm.dispose();
		}else{
			cm.sendOk("您沒有在可領取獎勵的名單內!");
			cm.dispose();
			return;	
		}
	} else if (status == 2) {

	} else {
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