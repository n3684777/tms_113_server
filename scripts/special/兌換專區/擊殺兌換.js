
var status = 0;
var 返回 = false;
var 腳本路徑 = "兌換專區/擊殺兌換";


//道具代碼 獲得數量 消耗擊殺點數數量 
var item = [
[4000003, 1, 8000],[4000004, 1, 20],[4000005, 1, 20],[4000006, 1, 20],
];

//好康百貨
var cash = [
[2000005, 1, 20],[2000006, 1, 20],[2000004, 1, 20],
];

//練功好物
var money = [
[2450000, 1, 20],
];

var coinId = "怪物擊殺數";
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
			killmob = cm.getPlayer().getCharInfoNum("兌換用擊殺總數");
			cm.sendSimple("目前您有 #b【"+killmob+"】#k 點怪物擊殺數\r\n請問您想兌換什麼 ? \r\n\r\n請選擇一個種類:\r\n" +
                    "#L101#基礎材料\r\n" +
                    "#L102#好康百貨\r\n" +
                    "#L103#練功好物\r\n");
		} else if (status == 1) {
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
                default:
                    storeInfo = [];
            }if (storeInfo.length == 0) {
                cm.sendOk("這個商店不存在");
                cm.dispose();
                return;
            }
                var storeText = "\r\n\r\n";
                for (var i = 0; i < storeInfo.length; ++i) {
                    var wepId = storeInfo[i][0];
                    var wepIdcost = storeInfo[i][1];
                    var cost = storeInfo[i][2];
                    storeText += "#L" + i + "#【 #v" + wepId + "# 】 - #z" + wepId + "# - " + cost + " 隻 " + coinIcon + "#l\r\n";
                }
                cm.sendSimple(storeText);
        }else if (status == 2) {
			selection2 = selection;
			cm.sendGetNumber("您想兌換多少數量？", 1, 1, 5000);    			
		}else if (status == 3) {
			if (selection <= 0 || selection > 5000) {
				cm.sendOk("您被偵測異常紀錄，使用過程已被紀錄Log！");
				cm.worldMessage(5,"玩家『"+ cm.getPlayer().getName() +"』被偵測到使用異常軟體修改數據，請通知GM檢查");
				cm.GAMEPLAYERLOG("擊殺兌換異常", "使用異常軟體修改數據", 0, selection);
				cm.dispose();
				return;
			}
			自訂數值 = selection;
            purchaseId = storeInfo[selection2][0];
            purchaseIdCost = storeInfo[selection2][1];
            purchaseCost = storeInfo[selection2][2];
            if (killmob >= purchaseCost*自訂數值) {
                cm.sendYesNo("您確定要兌換 #i" + purchaseId + "# #t" + purchaseId + "# "+purchaseIdCost*自訂數值+" 個\r\n"+
							 "您將會消耗 #r" + purchaseCost*自訂數值 + "#k 點並剩餘 #r" + (killmob - purchaseCost*自訂數值) + " #k點" + coinIcon + "#n.");
            } else {
                cm.sendOk("您並沒有足夠的 " + coinIcon + ".");
                返回 = true;
            }
        } else if (status == 4) {
			if(返回){
				cm.dispose();
				cm.openNpc(9010000, 腳本路徑);
				return;
			}else{
				if (!cm.canHold(purchaseId, 自訂數值)) {
					cm.sendOk("請確認你的物品欄位還有空間。");
					cm.dispose();
					return;
				}
				if (killmob >= purchaseCost*自訂數值) {
					cm.getPlayer().setCharInfoNum("兌換用擊殺總數",killmob - purchaseCost*自訂數值);
					killmob = cm.getPlayer().getCharInfoNum("兌換用擊殺總數");//更新擊殺數
					cm.gainItem(purchaseId,自訂數值);
					cm.sendOk("恭喜，這是您的新道具。\r\n\r\n目前剩餘擊殺數為#b 「"+killmob+"」 點#k");
				}
			}
        } else if (status == 5) {
			cm.dispose();
			cm.openNpc(9010000, 腳本路徑);
			return;
		}
    }
}