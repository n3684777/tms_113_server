var status = -1;



var 贊助滿額數 = 50000;
//這裡設定log的名稱 判定是否已領過
var log = "贊助滿額#r "+贊助滿額數+" 元#k";


//這裡設定領取物品的限制等級
var level = 1;

var prize = [
		//道具代碼、數量、使用天數(-1為無限)、4屬設定、物攻、魔攻
		[1142204, 1, -1, 100, 100, 100],
		[1112100, 1, -1, 100, 100, 100],
		[2022530, 10, -1, 0, 0, 0],
		[2450023, 10, -1, 0, 0, 0],
		[5220000, 100, -1, 0, 0, 0],
		[2340000, 10, -1, 0, 0, 0],
];
var prizelist = Array();


//點數設定   [第一格GASH填1 楓葉點數填2,第二格填數量 不發填0]
var point = [2, 0];
var 楓點圖案 = "#v4460006#"

var 楓幣 = 0;
var 楓幣圖案 = "#v4460007#"


var 紅利點數 = 0;
var 紅利圖案 = "#v4460005#"


function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	
	if (mode == 1) {
		status++;
	} else if (mode == 0) {
		status--;
	} else {
		cm.dispose();
		return;
	}

	if (status == 0) {
		for (var i = 0; i < prize.length; i++) {
			prizelist.push(prize[i][0]);
		}

		if (!cm.canHold()) {
			cm.sendOk("您的背包欄位空間不足唷");
			cm.safeDispose();
		}

		if (cm.getPlayerStat("LVL") < level) {
			cm.sendOk(level + "等以上才能領取" + log + "哦!");
			cm.safeDispose();
		}
		if (cm.getPlayer().getPrizeLog(log) == 1) {
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
		var donate = cm.getPlayer().getTotalMoney();
		if(donate < 贊助滿額數){
			cm.sendOk("您的累積贊助不足，目前為【 "+donate+" 】點。");
			cm.dispose();
			return
		}
		

		for (var i = 0; i < prize.length; i++) {
			四屬數值 = prize[i][3];
			物攻數值 = prize[i][4];
			魔攻數值 = prize[i][5];
			道具天數 = prize[i][2];
			
			if(四屬數值 > 0 || 物攻數值 > 0 || 魔攻數值 > 0){
				cm.gainItem(prize[i][0], prize[i][1], 四屬數值, 四屬數值, 四屬數值, 四屬數值, 0, 0, 物攻數值, 魔攻數值, 0, 0, 0, 0, 0, 0, 道具天數); 
			}else{
				cm.gainItem(prize[i][0], prize[i][1], 道具天數); 
			}
			
                    
		}
		if (point[1] > 0) {
			cm.getPlayer().modifyCSPoints(point[0], point[1], true); 
		}
		if (楓幣 > 0) {
			cm.gainMeso(楓幣);
		}	
		if (紅利點數 > 0) {
			var Dividend = cm.getPlayer().getDividend();
			cm.getPlayer().setDividend(紅利點數);
		}	
		cm.getPlayer().setPrizeLog(log); //這邊是設定玩家帳號已領過記錄
		cm.sendNext("#b" + log + "已發放，請前往背包查收"); //最後訊息 
		cm.dispose();


	} else if (status == 2) {

	} else {
		cm.dispose();
	}
}
