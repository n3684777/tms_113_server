/*
	NPC Name: 		Asia
	Map(s): 		Kamuna
 */
var status = -1;
var log = "每日遠征挑戰";
var objDate = new Date();
var Month = objDate.getMonth();
var MonthS = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
var tzc = objDate.getDate();
var day = objDate.getDay();
var Year = objDate.getFullYear();
var 遠征勳章 = 4310028;

function start() {
	//無名魔法怪物
    if (cm.getMapId() == 802000111) {
         status = 0;
            cm.sendYesNo("恭喜您的隊伍成功完成遠征挑戰，請問您要離開了嗎？");
        } 
	//渾沌斑斑	
	if (cm.getMapId() == 105200110) {
         status = 1;
            cm.sendYesNo("恭喜您的隊伍成功完成遠征挑戰，請問您要離開了嗎？\r\n#r透過我離開才會有每日遠征記錄哦！");
		} 
	//渾沌比艾樂	
	if (cm.getMapId() == 105200210) {
         status = 2;
            cm.sendYesNo("恭喜您的隊伍成功完成遠征挑戰，請問您要離開了嗎？\r\n#r透過我離開才會有每日遠征記錄哦！");
		} 
	//渾沌血腥女皇	
	if (cm.getMapId() == 105200310) {
         status = 3;
            cm.sendYesNo("恭喜您的隊伍成功完成遠征挑戰，請問您要離開了嗎？\r\n#r透過我離開才會有每日遠征記錄哦！");
		} 	
	//渾沌貝倫
	if (cm.getMapId() == 105200410) {
         status = 4;
            cm.sendYesNo("恭喜您的隊伍成功完成遠征挑戰，請問您要離開了嗎？\r\n#r透過我離開才會有每日遠征記錄哦！");
		}
	//森蘭丸
	if (cm.getMapId() == 807300110) {
         status = 5;
            cm.sendYesNo("恭喜您的隊伍成功完成遠征挑戰，請問您要離開了嗎？\r\n#r透過我離開才會有每日遠征記錄哦！");
		}
	//凡雷恩
	if (cm.getMapId() == 211070100) {
         status = 6;
            cm.sendYesNo("恭喜您的隊伍成功完成遠征挑戰，請問您要離開了嗎？\r\n#r透過我離開才會有每日遠征記錄哦！");
		} 	
	//希拉
	if (cm.getMapId() == 262030300) {
         status = 7;
            cm.sendYesNo("恭喜您的隊伍成功完成遠征挑戰，請問您要離開了嗎？\r\n#r透過我離開才會有每日遠征記錄哦！");
		}
	//阿卡伊農
	if (cm.getMapId() == 272020100) {
         status = 8;
            cm.sendYesNo("恭喜您的隊伍成功完成遠征挑戰，請問您要離開了嗎？\r\n#r透過我離開才會有每日遠征記錄哦！");
		} 	
	//女皇
	if (cm.getMapId() == 271040100) {
         status = 9;
            cm.sendYesNo("恭喜您的隊伍成功完成遠征挑戰，請問您要離開了嗎？\r\n#r透過我離開才會有每日遠征記錄哦！");
		}
		//黑龍王
	if (cm.getMapId() == 240060200) {
         status = 10;
            cm.sendYesNo("恭喜您的隊伍成功完成遠征挑戰，請問您要離開了嗎？\r\n#r透過我離開才會有每日遠征記錄哦！");
		}		
}

function action(mode, type, selection) {
	var name = cm.getPlayer().getName();
    switch (status) {
    case 0:
		if (mode == 1) {
			cm.getPlayer().setPrizeLog(name + "" + Year + "年" + MonthS[Month] + tzc + "日" + log + "");
			cm.warp(802000110, 0);			
		}
		cm.dispose();
        break;
    case 1:
        if (mode == 1) {
			cm.getPlayer().setPrizeLog(name + "" + Year + "年" + MonthS[Month] + tzc + "日" + log + "");
			cm.warp(105200000, 0);			
		}
		cm.dispose();
        break;
	case 2:
        if (mode == 1) {
			cm.getPlayer().setPrizeLog(name + "" + Year + "年" + MonthS[Month] + tzc + "日" + log + "");
			cm.warp(105200000, 0);			
		}
		cm.dispose();
        break;
	case 3:
        if (mode == 1) {
			cm.getPlayer().setPrizeLog(name + "" + Year + "年" + MonthS[Month] + tzc + "日" + log + "");
			cm.warp(105200000, 0);			
		}
		cm.dispose();
        break;	
	case 4:
        if (mode == 1) {
			cm.getPlayer().setPrizeLog(name + "" + Year + "年" + MonthS[Month] + tzc + "日" + log + "");
			cm.warp(105200000, 0);			
		}
		cm.dispose();
        break;	
	case 5:
        if (mode == 1) {
			cm.getPlayer().setPrizeLog(name + "" + Year + "年" + MonthS[Month] + tzc + "日" + log + "");
			cm.warp(910000000, 0);			
		}
		cm.dispose();
        break;
	case 6:
        if (mode == 1) {
			cm.getPlayer().setPrizeLog(name + "" + Year + "年" + MonthS[Month] + tzc + "日" + log + "");
			cm.warp(211070200, 0);			
		}
		cm.dispose();
        break;
	case 7:
        if (mode == 1) {
			cm.getPlayer().setPrizeLog(name + "" + Year + "年" + MonthS[Month] + tzc + "日" + log + "");
			cm.warp(262030000, 0);			
		}
		cm.dispose();
        break;
	case 8:
        if (mode == 1) {
			cm.getPlayer().setPrizeLog(name + "" + Year + "年" + MonthS[Month] + tzc + "日" + log + "");
			cm.warp(272020110, 0);			
		}
		cm.dispose();
        break;
	case 9:
        if (mode == 1) {
			cm.getPlayer().setPrizeLog(name + "" + Year + "年" + MonthS[Month] + tzc + "日" + log + "");
			cm.warp(271040000, 0);			
		}
		cm.dispose();
        break;	
	case 10:
        if (mode == 1) {
			cm.getPlayer().setPrizeLog(name + "" + Year + "年" + MonthS[Month] + tzc + "日" + log + "");
			cm.warp(240050400, 0);			
		}
		cm.dispose();
        break;	
	}
}