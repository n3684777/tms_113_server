/*
* @autor Java
* LeaderMS MapleStory Private Server
* APQ
* cm.getPlayer().gainAriantPontos(-100);
* cm.gainItem(3010018, 1);
*/

var status = 0;
var 返回 = false;
var 腳本路徑 = "兌換專區/在線兌換";
//道具代碼 道具獲得數量 消耗點數數量 限制分鐘數(有增加的話就會有指定時間，如沒有就不用添加)
//例如 [4001126, 1, 2] 這樣不會有分鐘數限制
//[2450000, 20, 1, 100] 這樣就會是限制 100 分鐘到後消失
var item = [
[4000003, 1, 8000],[4000004, 1, 20],[4000005, 1, 20],[4000006, 1, 20],
];

//好康百貨
var cash = [
[2450000, 1, 20],[2250000, 1, 20],
];

//練功好物
var money = [
[2000000, 1, 20],[2000001, 1, 20],[2000002, 1, 20],[2000003, 1, 20],
];

//轉蛋卷
var mob = [ 
[5220000 , 1, 10], [5220010 , 1, 10], [5220040 , 1, 10],
];

var coinId = "在線點數";
var coinIcon = " "+ coinId + "";

importPackage(Packages.client);

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			TimeOnline = cm.getPlayer().getCharInfoNum("兌換用在線時間累積總數");
			store = true;
			cm.sendSimple("目前您有 #b【"+TimeOnline+"】#k 分的在線點數\r\n請問您想兌換什麼 ? \r\n\r\n請選擇一個種類:\r\n" +
                    "#L101#基礎材料\r\n" +
                    "#L102#好康百貨\r\n" +
                    "#L103#練功好物\r\n");
		} else if (status == 1) {
            if (store) {
                switch (selection) {
                    case 101:
                        storeInfo = item;
                        break;
                    case 102:
                        storeInfo = cash;
                        break;
                    case 103:
                        storeInfo = money;
                        break;
                    case 104:
                        storeInfo = mob;
                        break;
                    default:
                        storeInfo = [];
                }
                if (storeInfo.length == 0) {
                    cm.sendOk("這個商店不存在");
                    cm.dispose();
                    return;
                }
                var storeText = "【 請選擇您要兌換的物品 】\r\n\r\n";
                for (var i = 0; i < storeInfo.length; ++i) {
                    var wepId = storeInfo[i][0];
                    var wepIdcost = storeInfo[i][1];
					var cost = storeInfo[i][2];
                    storeText += "#L" + i + "#【 #i" + wepId + ":# 】 - #z" + wepId + "# "+wepIdcost+" 個 - " + cost + " 點 " + coinIcon + "#l\r\n";
                }
                cm.sendSimple(storeText);
            } else {
				cm.sendOk("發生未知的錯誤");
            }
        } else if (status == 2) {
			selection2 = selection;
			cm.sendGetNumber("您想兌換多少數量？", 1, 1, 5000);
		} else if (status == 3) {
			if (selection <= 0 || selection > 5000) {
				cm.sendOk("您被偵測異常紀錄，使用過程已被紀錄Log！");
				cm.worldMessage(5,"玩家『"+ cm.getPlayer().getName() +"』被偵測到使用異常軟體修改數據，請通知GM檢查");
				cm.GAMEPLAYERLOG("在線兌換異常", "使用異常軟體修改數據", 0, selection);
				cm.dispose();
				return;
			}
			自訂數值 = selection;
            if (store) {
                purchaseId = storeInfo[selection2][0];
                purchaseIdCost = storeInfo[selection2][1];
				purchaseCost = storeInfo[selection2][2];
				
				if (storeInfo[selection2].length > 3) {
				    purchasePeriod = storeInfo[selection2][3];
				} else {
				    purchasePeriod = -1;
				}
                if (TimeOnline >= purchaseCost*自訂數值) {
                    cm.sendYesNo("您確定要兌換 #i" + purchaseId + "# #t" + purchaseId + "# "+(purchaseIdCost*自訂數值)+" 個\r\n您將會消耗 #r" + purchaseCost*自訂數值 + "#k 點並剩餘 #r" + (TimeOnline - purchaseCost*自訂數值) + " #k點" + coinIcon + "#n.");
                } else {
                    cm.sendOk("您並沒有足夠的" + coinIcon + ".");
                    返回 = true;
                }
            } else {
                MCTracker.log("[MCPQ_Info] CONTEXT_TOWN: Invalid status 3");
            }
        } else if (status == 4) {
			if(返回){
				cm.dispose();
				cm.openNpc(9010000, 腳本路徑);
				return;
			}else{
				if (store) {
					if (TimeOnline >= purchaseCost*自訂數值) {
						if (!cm.canHold(purchaseId, 自訂數值 * purchaseIdCost)) {
							cm.sendOk("請確認你的物品欄位還有空間。");
							cm.dispose();
							return;
						}
						cm.getPlayer().setCharInfoNum("兌換用在線時間累積總數",TimeOnline - (purchaseCost * 自訂數值));
						TimeOnline = cm.getPlayer().getCharInfoNum("兌換用在線時間累積總數");//讀取新的累積時間
						cm.gainItemPeriodInMinute(purchaseId, purchaseIdCost*自訂數值, purchasePeriod);
						cm.sendOk("恭喜，這是您的新道具\r\n\r\n您剩餘#r 「"+TimeOnline+"」#k 點累積時間");
						cm.GAMEPLAYERLOG("在線兌換", "獲得道具++", purchaseId, purchaseIdCost * 自訂數值);
						cm.GAMEPLAYERLOG("在線兌換", "扣除點數--", 0, purchaseCost*自訂數值);
						cm.GAMEPLAYERLOG("在線兌換", "===================", 0, 0);
					}
				} else {
					cm.sendOk("發生未知的錯誤");
				}
			}
            
        } else if (status == 5) {
			cm.dispose();
			cm.openNpc(9010000, 腳本路徑);
			return;
		}
    }
}