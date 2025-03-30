var status = -1;
	var log = "侏儒帝王組隊任務";
	var objDate = new Date();
	var Month = objDate.getMonth();
	var MonthS = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
	var tzc = objDate.getDate();
	var day = objDate.getDay();
	var Year = objDate.getFullYear();
	
function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
		var playerMapID = cm.getMapId();
		if(playerMapID != 921120300){
			cm.sendSimple("什麼?!你是怎麼來到這裡的?!。\r\n\r\n");
			cm.dispose();
			return;
		}else{
			cm.sendSimple("\r\n#L1#我要離開了。#l\r\n\r\n");
		}
    } else if (status == 1) {
        if (selection == 1) {
			cm.setBossLog("" + Year + "年" + MonthS[Month] + tzc + "日" + log + "");//每日組隊紀錄
			//cm.gainItem(2028001, 2); //紅色小藥丸  
			//cm.gainItem(2028002, 2); //藍色小藥丸
			//cm.gainItem(4007009, 2); //組隊硬幣
			cm.gainExp(700000);
            cm.warp(211000002, 0);
        }
        cm.dispose();
    }
}
