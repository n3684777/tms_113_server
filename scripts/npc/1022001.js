/*  Author: Yud1
    NPC Name:        計程車 OK
    Map(s):          維多利亞 : 勇士之村 (102000000)
    Description:     勇士部落計程車
var maps = Array(104000000, 102000000, 100000000, 101000000, 103000000, 120000000);
var rCost = Array(800, 1200, 1000, 1000, 1200, 1200);
var costBeginner = Array(80, 120, 100, 100, 120, 120);
var cost = new Array("800", "1200", "1000", "1000", "1200", "1200");
*/
var status = 0;
var maps = Array(104000000, 100000000, 101000000, 103000000, 120000000);
var rCost = Array(800, 1000, 1000, 1200, 1200);
var costBeginner = Array(80, 100, 100, 120, 120);
var cost = new Array("800", "1000", "1000", "1200", "1200");
var show;
var sCost;
var selectedMap = -1;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 1 && mode == 0) {
	cm.dispose();
	return;
    } else if (status >= 2 && mode == 0) {
	cm.sendNext("如果您有需要去別的村莊，歡迎回來找我們~");
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	cm.sendNext("您好，我們是維多利亞計程車。想要迅速又安全的去其他村莊嗎？我們很樂意以便宜的價格親切的送客到目的地喔~");
    } else if (status == 1) {
	var job = cm.getJob();
	if (job == 0 || job == 1000 || job == 2000) {
	    var selStr = "\r\n#r我們對於初心者有90%的折扣。\r\n#k請選擇目的地。#b";
	    for (var i = 0; i < maps.length; i++) {
		selStr += "\r\n#L" + i + "##m" + maps[i] + "# (" + costBeginner[i] + " 楓幣)#l";
	    }
	} else {
	    var selStr = "\r\n請選擇目的地。#b";
	    for (var i = 0; i < maps.length; i++) {
		selStr += "\r\n#L" + i + "##m" + maps[i] + "# (" + cost[i] + " 楓幣)#l";
	    }
	}
	cm.sendSimple(selStr);
    } else if (status == 2) {
	var job = cm.getJob();
	if (job == 0 || job == 1000 || job == 2000) {
	    sCost = costBeginner[selection];
	    show = costBeginner[selection];
	} else {
	    sCost = rCost[selection];
	    show = cost[selection];
	}
	cm.sendYesNo("您確定您在這裡的事情已經做完了嗎？您確定要前往 #b#m" + maps[selection] + "##k ？ 本趟需要花費 #b" + show + " 楓幣#k.");
	selectedMap = selection;
    } else if (status == 3) {
	if (cm.getMeso() < sCost) {
	    cm.sendNext("您沒有足夠的楓幣，無法前往目的地。");
	} else {
	    cm.gainMeso(-sCost);
	    cm.warp(maps[selectedMap]);
	}
	cm.dispose();
    }
}