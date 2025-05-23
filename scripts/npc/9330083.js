﻿/*
	Name: 旅館主人
	Place: 各大村莊
 */

var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }
    if (status == 0) {
		var Editing = false//false 開始
          if(Editing){
          cm.sendOk("暫停運作");
          cm.dispose();
          return;
		  }
	if (cm.haveItem(4032226, 10)) {
	    cm.sendYesNo("你有一些 #b#t4032226##k\r\n你想要嘗試運氣！？"+
		"\r\n\r\n有機率可以抽到\r\n\r\n"+
		"#i3010054#  #i3010074# ");
	} else {
	    cm.sendOk("很抱歉由於你沒有#b10個#t4032226##k所以不能嘗試。");
	    cm.safeDispose();
	}
    } else if (status == 1) {
	var item;
	if (Math.floor(Math.random() * 30) == 0) {
	    var rareList = new Array(3010054, 2022483, 2210029,3010074);
		
	    item = cm.gainGachaponItem(rareList[Math.floor(Math.random() * rareList.length)], 1, "楓葉旅館");
	} else {
	    var itemList = new Array(2022484, 2022485, 2022486, 2022487);
		
	    item = cm.gainGachaponItem(itemList[Math.floor(Math.random() * itemList.length)], 1);
	}

	if (item != -1) {
	    cm.gainItem(4032226, -10);
	    cm.sendOk("您已獲得 #b#t" + item + "##k.");
	} else {
	    cm.sendOk("請檢查看看您是否有#b#t4032226# 10個#k，或者道具攔已滿。");
	}
	cm.safeDispose();
    }
}