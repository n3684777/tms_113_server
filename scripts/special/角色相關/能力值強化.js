load('nashorn:mozilla_compat.js');
importPackage(java.lang);

var status = 0;
var 返回 = false;
var 腳本路徑 = "角色相關/能力值強化";
//定義兌換物品
var items = [    
	[4007000, 50],
    [4007005, 50],
    [4001126, 50],
]; 

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status >= 0 && mode == 0) {
	    cm.dispose();
	    return;
    }
    if (mode == 1)
	    status++;
    else
	    status--;

    if (status == 0) {
	    var text = "您好，增加 #b1#k 點能力值需要以下物品：\r\n\r\n";
	    for (var i = 0; i < items.length; i++) {
            text += "#i" + items[i][0] + "# #t" + items[i][0] + "# － #r" + items[i][1] + "個#k\r\n\r\n";
        }
	    text += "#b\r\n#L0#【我要增加能力點】#l#k";
	    cm.sendSimple(text);
    } else if (status == 1) {
	    if (selection == 0) {
		    cm.sendGetNumber("您想增加多少能力值呢？", 1, 1, 5000);    
	    }
    } else if (status == 2) {
		if (selection <= 0 || selection > 5000) {
			cm.sendOk("您被偵測異常紀錄，使用過程已被紀錄Log！");
			cm.worldMessage(5,"玩家『"+ cm.getPlayer().getName() +"』被偵測到使用異常軟體修改數據，請通知GM檢查");
			cm.GAMEPLAYERLOG("能力值強化異常", "使用異常軟體修改數據", 0, selection);
			cm.dispose();
			return;
		}
	    自訂數值 = selection;
	    var insufficientItems = [];

	    for (var i = 0; i < items.length; i++) {
            if(!cm.haveItem(items[i][0], items[i][1]*自訂數值)) {
				insufficientItems.push([items[i][0], items[i][1] * 自訂數值 - cm.getPlayer().getItemQuantity(items[i][0], false)]);
			}
        }

        if(insufficientItems.length > 0) {
            var text = "抱歉，您缺少以下物品：\r\n\r\n";
            for (var i = 0; i < insufficientItems.length; i++) {
                text += "#i" + insufficientItems[i][0] + "# #t" + insufficientItems[i][0] + "#，您還需要 " + insufficientItems[i][1] + " 個\r\n";
            }
            cm.sendOk(text);
			返回 = true;
        }else{
			cm.sendYesNo("確定要消耗以下物品換取能力值嗎？\r\n\r\n" + getConfirmText(自訂數值));
		}
    } else if (status == 3) {
		if(返回){
			cm.dispose();
			cm.openNpc(9010000, 腳本路徑);
			return;
		}else{
			for (var i = 0; i < items.length; i++) {
		    cm.gainItem(items[i][0], -items[i][1]*自訂數值);
			}
			cm.getPlayer().gainAp(自訂數值);
			cm.sendOk("您已增加了#r「"+自訂數值+"」#k點能力點");
		}
	    
    } else if (status == 4) {
		cm.dispose();
		cm.openNpc(9010000, 腳本路徑);
		return;
	}
}

function getConfirmText(自訂數值) {
    var text = "";
    for (var i = 0; i < items.length; i++) {
        text += "#i" + items[i][0] + "# #t" + items[i][0] + "# － #r" + items[i][1]*自訂數值 + "個#k\r\n\r\n";
    }
    return text;
}
