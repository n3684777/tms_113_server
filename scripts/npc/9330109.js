/* Kedrick
	Fishking King NPC
*/

var status = -1;
var sel;
var t = Math.floor(Math.random()*2);
var 魚餌價格 = 500; 
var 魚餌代碼 = 2300000;
var VIPItem = 5350000;
var VIPItem1 = 2300001;
var 高級魚餌給幾隻魚 = 120;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
		if (status == 0) {
			cm.dispose();
			return;
		}
	status--;
    }

    if (status == 0) {
	if( t == 0 ) {
            cm.sendSimple("我能為您做什麼嗎？？#b\n\r\n\r #L1#兌換普通的魚餌。#l\n\r #L3#兌換高級的魚餌。#l#k");
        } else {
            cm.sendSimple("我能為您做什麼嗎？？#b\n\r\n\r #L1#兌換普通的魚餌。#l\n\r #L3#兌換高級的魚餌。#l \n\r #l#k");
        }
  } else if (status == 1) {
	sel = selection;
        if (sel == 3) {
       
		if (cm.haveItem(VIPItem, 1)) {
		    cm.gainItem(VIPItem1, 高級魚餌給幾隻魚);
		    //cm.gainMeso(-200000);
			cm.gainItem(VIPItem, -1);
		    cm.sendNext("開心釣魚吧！");
		} else {
		    cm.sendNext("高級魚餌罐頭一罐 #r#i"+VIPItem+"##k 可以換 #b120#k 隻高級魚餌");
		}
	    
	    cm.safeDispose();
        } else if (sel == 1) {
			cm.sendGetNumber("每個普通魚餌需要 "+魚餌價格+" 楓幣，您要買幾個普通魚餌？？", 1, 1, 1000);    

	}
    } else if (status == 2) {
		自訂數值 = selection;
		最終楓幣數量 = 魚餌價格*自訂數值;
		文字顯示最終楓幣數量 = 魚餌價格*自訂數值;

        if (cm.canHold(魚餌代碼,自訂數值) && cm.getMeso() >= 最終楓幣數量) {
		
		    cm.gainMeso(-最終楓幣數量);
		    cm.gainItem(魚餌代碼, 自訂數值);
		    cm.sendNext("您購買了"+自訂數值+"個#z"+魚餌代碼+"#\r\n花費了"+文字顯示最終楓幣數量+"楓幣\r\n開心釣魚吧！");
		
	    } else {
		cm.sendOk("請確認是否有足夠的楓幣，或者檢查您的道具欄有沒有滿了。");
	    }
	    cm.safeDispose();
	}
}