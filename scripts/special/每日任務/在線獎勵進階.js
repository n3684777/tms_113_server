var status = -1;
var objDate = new Date();
var Month = objDate.getMonth();
var MonthS = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
var tzc = objDate.getDate();
var day = objDate.getDay();
var Year = objDate.getFullYear();
var 活躍用在線LOG獎勵 = "每日活躍在線獎勵";


//這裡設定log的名稱 判定是否已領過
var log = "60分鐘在線獎勵";
var log_2 = "120分鐘在線獎勵";
var log_3 = "180分鐘在線獎勵";
//這裡設定領取物品的限制等級
var level = 10;
//這裡放要補償的物品

var 在線分鐘數 = 60;
var 在線分鐘數_2 = 120;
var 在線分鐘數_3 = 180;

var prize = [
		[2450000, 1, -1],
		[5220000, 1, -1],
		[5220010, 1, -1],
];

var prize_2 = [
		[2450000, 1, -1],
		[5220000, 1, -1],
		[5220010, 1, -1],
];

var prize_3 = [
		[2450000, 1, -1],
		[5220000, 1, -1],
		[5220010, 1, -1],
		[5220040, 1, -1],
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
	player = cm.getPlayer();
	var onlineTime   = player.getEveryday_Online();
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
		
		var sdFormatHour = new java.text.SimpleDateFormat("HH");//HH:24hour, hh:12hour
        var sdFormatMin  = new java.text.SimpleDateFormat("mm");
        var date = new java.util.Date();
		var currentHour = sdFormatHour.format(date);
        var currentMin  = sdFormatMin.format(date);
		if( currentHour == 0 && currentMin <= 10){
			cm.sendOk("每天的 00:00 ~ 00:10 每日在線暫停使用");
			cm.dispose();
			return;
		}

		if (cm.getPlayerStat("LVL") < level) {
			cm.sendOk(level + "等以上才能領取" + log + "哦!");
			cm.safeDispose();
		}
		if (cm.getPlayer().getPrizeLog("" + Year + "年" + MonthS[Month] + tzc + "日" + log + "") >= 1 &&  cm.getPlayer().getPrizeLog("" + Year + "年" + MonthS[Month] + tzc + "日" + log_2 + "") >= 1 && cm.getPlayer().getPrizeLog("" + Year + "年" + MonthS[Month] + tzc + "日" + log_3 + "") >= 1 ) {
			cm.sendOk("您的帳號本日已全部領取完畢了喔！");
			cm.safeDispose();
		}
		
		var choice = "#d您好冒險者，以下為" + log + "獎勵內容#b\r\n";
		choice += "目前上線時間 : ( #e"+onlineTime+" / "+在線分鐘數+"#n 分鐘 )\r\n\r\n";
		for (var i = 0; i < prize.length; i++)
			choice += "【 #i" + prize[i][0] + "# 】 #t" + prize[i][0] + "# " + prize[i][1] + " 個" + (prize[i][2] > 0 ? ("  期限 #r#e" + prize[i][2] + "#n#b天") : "") + "\r\n";
		if (point[1] > 0) {
			choice += point[0] == 1 ? "【 "+楓點圖案+" 】 Gash點數 " : "【 "+楓點圖案+" 】 楓葉點數 " + point[1] + " 點\r\n";
		}
		if (楓幣 > 0) {
			choice += "【 "+楓幣圖案+" 】 楓幣 "+楓幣 / 10000+" 萬\r\n";
		}
		choice += "\r\n";
		if(cm.getPlayer().getPrizeLog("" + Year + "年" + MonthS[Month] + tzc + "日" + log + "") > 0){
			choice += "#r已領取#k\r\n";
		}
		choice += "\r\n";
		choice += "===========================";	     
		choice += "\r\n\r\n";
		choice += "#d您好冒險者，以下為" + log_2 + "獎勵內容#b\r\n";
		choice += "目前上線時間 : ( #e"+onlineTime+" / "+在線分鐘數_2+"#n 分鐘 )\r\n\r\n";
		for (var i = 0; i < prize_2.length; i++)
			choice += "【 #i" + prize_2[i][0] + "# 】 #t" + prize_2[i][0] + "# " + prize_2[i][1] + " 個" + (prize_2[i][2] > 0 ? ("  期限 #r#e" + prize_2[i][2] + "#n#b天") : "") + "\r\n";
		if (point[1] > 0) {
			choice += point[0] == 1 ? "【 "+楓點圖案+" 】 Gash點數 " : "【 "+楓點圖案+" 】 楓葉點數 " + point[1] + " 點\r\n";
		}
		if (楓幣 > 0) {
			choice += "【 "+楓幣圖案+" 】 楓幣 "+楓幣 / 10000+" 萬\r\n";
		}choice += "\r\n";
		if(cm.getPlayer().getPrizeLog("" + Year + "年" + MonthS[Month] + tzc + "日" + log_2 + "") > 0){
			choice += "#r已領取#k\r\n";
		}
		choice += "\r\n";
		choice += "===========================";	     
		choice += "\r\n\r\n";
		choice += "#d您好冒險者，以下為" + log_3 + "獎勵內容#b\r\n";
		choice += "目前上線時間 : ( #e"+onlineTime+" / "+在線分鐘數_3+"#n 分鐘 )\r\n\r\n";
		for (var i = 0; i < prize_3.length; i++)
			choice += "【 #i" + prize_3[i][0] + "# 】 #t" + prize_3[i][0] + "# " + prize_3[i][1] + " 個" + (prize_3[i][2] > 0 ? ("  期限 #r#e" + prize_3[i][2] + "#n#b天") : "") + "\r\n";
		if (point[1] > 0) {
			choice += point[0] == 1 ? "【 "+楓點圖案+" 】 Gash點數 " : "【 "+楓點圖案+" 】 楓葉點數 " + point[1] + " 點\r\n";
		}
		if (楓幣 > 0) {
			choice += "【 "+楓幣圖案+" 】 楓幣 "+楓幣 / 10000+" 萬\r\n";
		}choice += "\r\n";
		if(cm.getPlayer().getPrizeLog("" + Year + "年" + MonthS[Month] + tzc + "日" + log_3 + "") > 0){
			choice += "#r已領取#k\r\n";
		}
		choice += "\r\n";
		choice += "(#r請注意!!背包請確保有空位領取，被吃無法補償!)\r\n";
		cm.sendYesNo(choice);

	} else if (status == 1) {
		if (onlineTime >= 在線分鐘數 && cm.getPlayer().getPrizeLog("" + Year + "年" + MonthS[Month] + tzc + "日" + log + "") == 0) {
         for (var i = 0; i < prize.length; i++) {
			cm.gainItem(prize[i][0], prize[i][1], prize[i][2]);
         }
         if (point[1] > 0) {
            cm.getPlayer().modifyCSPoints(point[0], point[1], true); 
         }	
         if (楓幣 > 0) {
            cm.gainMeso(楓幣);
         }	
		 cm.getPlayer().addActive(Year + "年" + MonthS[Month] + tzc + "日" + 活躍用在線LOG獎勵, 1);
         cm.getPlayer().setPrizeLog("" + Year + "年" + MonthS[Month] + tzc + "日" + log + ""); //這邊是設定玩家帳號已領過記錄
         cm.sendNext("#b" + log + "已發放，請前往背包查收"); //最後訊息 
         cm.dispose();
         return;   
      }if (onlineTime >= 在線分鐘數_2 && cm.getPlayer().getPrizeLog("" + Year + "年" + MonthS[Month] + tzc + "日" + log_2 + "") == 0) {
         for (var i = 0; i < prize_2.length; i++) {
			cm.gainItem(prize_2[i][0], prize_2[i][1], prize_2[i][2]);
         }
         if (point[1] > 0) {
            cm.getPlayer().modifyCSPoints(point[0], point[1], true); 
         }	
         if (楓幣 > 0) {
            cm.gainMeso(楓幣);
         }	
		 cm.getPlayer().addActive(Year + "年" + MonthS[Month] + tzc + "日" + 活躍用在線LOG獎勵, 1);
         cm.getPlayer().setPrizeLog("" + Year + "年" + MonthS[Month] + tzc + "日" + log_2 + ""); //這邊是設定玩家帳號已領過記錄
         cm.sendNext("#b" + log_2 + "已發放，請前往背包查收"); //最後訊息     
         cm.dispose();
         return;
      }if (onlineTime >= 在線分鐘數_3 && cm.getPlayer().getPrizeLog("" + Year + "年" + MonthS[Month] + tzc + "日" + log_3 + "") == 0) {
         for (var i = 0; i < prize_3.length; i++) {
			cm.gainItem(prize_3[i][0], prize_3[i][1], prize_3[i][2]);
         }
         if (point[1] > 0) {
            cm.getPlayer().modifyCSPoints(point[0], point[1], true); 
         }	
         if (楓幣 > 0) {
            cm.gainMeso(楓幣);
         }	
		 cm.getPlayer().addActive(Year + "年" + MonthS[Month] + tzc + "日" + 活躍用在線LOG獎勵, 1);
         cm.getPlayer().setPrizeLog("" + Year + "年" + MonthS[Month] + tzc + "日" + log_3 + ""); //這邊是設定玩家帳號已領過記錄
         cm.sendNext("#b" + log_3 + "已發放，請前往背包查收"); //最後訊息     
         cm.dispose();
         return;
      }if(onlineTime < 在線分鐘數){
         cm.sendOk("上線時間不足無法領取。");
         cm.dispose();
         return;
      }else{
         cm.sendOk("上線時間不足，還請繼續累積。");
         
      }
      cm.dispose();
	}
}
