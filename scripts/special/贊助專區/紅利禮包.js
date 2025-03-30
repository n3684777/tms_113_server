var status = -1;
var 紅利禮包數 = 1000;
//這裡設定log的名稱 判定是否已領過
var log = "新年禮包#r "+紅利禮包數+" #k元";


//這裡設定領取物品的限制等級
var level = 1;

var prize = [
		//道具代碼、數量、使用天數(-1為無限)、4屬設定、物攻、魔攻
		[1142204, 1, -1, 100, 100, 100],
		[1112100, 1, -1, 100, 100, 100],
		[2022530, 10, -1, 0, 0, 0],
];
var prizelist = Array();


//點數設定   [第一格GASH填1 楓葉點數填2,第二格填數量 不發填0]
var point = [2, 0];
var 楓點圖案 = "#v4460006#"

var 楓幣 = 0;
var 楓幣圖案 = "#v4460007#"


function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	var donate = cm.getPlayer().getDividend();
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
		
		var choice = "#d您好冒險者，以下為" + log + "#d獎勵內容#b\r\n\r\n您目前紅利點數剩餘 #r"+donate+"#k #b點\r\n\r\n\r\n";
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
		choice += "\r\n\r\n\r\n\r\n";				
		choice += "(#r請注意!!背包請確保有空位領取，被吃無法補償!)\r\n";
		cm.sendYesNo(choice);

	} else if (status == 1) {
		var donate = cm.getPlayer().getDividend();
		if(donate < 紅利禮包數){
			cm.sendOk("您的紅利不足，目前為【 "+donate+" 】點。");
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
		cm.getPlayer().setDividend(- 紅利禮包數);
		cm.sendNext("#b" + log + "已發放，請前往背包查收"); //最後訊息 
		cm.dispose();


	} else if (status == 2) {

	} else {
		cm.dispose();
	}
}
