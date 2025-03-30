function action(mode, type, selection) {
	    cm.removeAll(4001130);
	    cm.removeAll(4001131);
	    cm.removeAll(4001132);
	    cm.removeAll(4001133);
	    cm.removeAll(4001134);
	    cm.removeAll(4001135);
	var em = cm.getEventManager(cm.getMapId() == 926100600 ? "Romeo" : "Juliet");
    if (em != null) {
	var itemid = cm.getMapId() == 926100600 ? 4001160 : 4001159;
	if (!cm.canHold(itemid, 1)) {
	    cm.sendOk("Please clear 1 ETC slot.");
	    cm.dispose();
	    return;
	}
	cm.gainItem(itemid, 1);
    }
	var log = "羅密歐與茱麗葉組隊任務";
	var objDate = new Date();
	var Month = objDate.getMonth();
	var MonthS = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
	var tzc = objDate.getDate();
	var day = objDate.getDay();
	var Year = objDate.getFullYear();
	cm.setBossLog("" + Year + "年" + MonthS[Month] + tzc + "日" + log + "");//每日組隊紀錄
	//cm.gainItem(4310224, 1);//組隊硬幣
    //cm.gainNX(2500);
    cm.gainExpR(90000);
    cm.getPlayer().endPartyQuest(1205);
    cm.warp(926100700,0);
    cm.dispose();
}