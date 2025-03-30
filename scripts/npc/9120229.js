var status = 0;
load('nashorn:mozilla_compat.js');
importPackage(Packages.handling.world);
importPackage(Packages.tools);
importPackage(Packages.server);
var 返回 = false;
var 腳本路徑 = "9120229";
var 兌換物 = 4310020;



var 製造材料 = [
[4000001, 1, 兌換物, 2500], [4000003, 1, 兌換物, 1], [4000004, 1, 兌換物, 1] ,
[4000002, 1, 兌換物, 1],
];

var 娛樂虛寶 = [
[4000005, 1, 兌換物, 150],[4000006, 1, 兌換物, 1000], [4000007, 1, 兌換物, 3000], 
[4000010, 1, 兌換物, 6000],[4000009 , 1, 兌換物, 600], [4000008 , 1, 兌換物, 300], 
];

var 練功好物 = [
 [4000011 , 1, 兌換物, 600], [4000013 , 1, 兌換物, 600], [4000015 , 1, 兌換物, 1500],
 [4000012 , 1, 兌換物, 600], [4000014 , 1, 兌換物, 600], [4000016 , 1, 兌換物, 1500],
];


function getRandom(min, max) {
	if (min > max) {
		return(-1);
	}

	if (min == max) {
		return(min);
	}

	return(min + parseInt(Math.random() * (max - min + 1)));
}

var ItemRandom = getRandom(1, 10);


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
			store = true;
			cm.sendSimple(
					"請問您想兌換什麼呢 ? \r\n\r\n請選擇一個種類:\r\n" +
                    "#L101#製造材料\r\n" +
                    "#L102#娛樂虛寶\r\n" +
                    "#L103#練功好物\r\n");
		} else if (status == 1) {
            if (store) {
                switch (selection) {
                    case 101:
                        storeInfo = 製造材料;
                        break;
                    case 102:
                        storeInfo = 娛樂虛寶;
                        break;
                    case 103:
                        storeInfo = 練功好物;
                        break;
                    default:
                        storeInfo = [];
                }
				selection2 = selection;
                if (storeInfo.length == 0) {
                    cm.sendOk("這個商店不存在");
                    cm.dispose();
                    return;
                }
				
                var storeText = "";
				storeText += "以下為可兌換的寶物：\r\n";
                for (var i = 0; i < storeInfo.length; ++i) {
                    var wepId = storeInfo[i][0];
					var wepIdcost = storeInfo[i][1];
					var Item = storeInfo[i][2];
					var Itemcost = storeInfo[i][3];
					
                    storeText += "#L" + i + "#【 #v" + wepId + "# 】 #z" + wepId + "##r "+ wepIdcost +" #k 個#l \r\n\r\n\r\n需要 : #r#z" + Item + "#  "+Itemcost+" #k片 \r\n";
                    storeText += "----------------------------------\r\n";
                }
                cm.sendSimple(storeText);
				
            } else {
				cm.sendOk("出現未知錯誤");
				cm.dispose();
            }
        }else if (status == 2) {
			selection3 = selection;
			cm.sendGetNumber("您想兌換多少數量？", 1, 1, 5000);    			
		}else if (status == 3) {
			if (selection <= 0 || selection > 5000) {
				cm.sendOk("您被偵測異常紀錄，使用過程已被紀錄Log！");
				cm.worldMessage(5,"玩家『"+ cm.getPlayer().getName() +"』被偵測到使用異常軟體修改數據，請通知GM檢查");
				cm.GAMEPLAYERLOG("楓葉兌換異常", "使用異常軟體修改數據", 0, selection);
				cm.dispose();
				return;
			}
				自訂數值 = selection;
				purchaseId = storeInfo[selection3][0];
				purchaseIdCost = storeInfo[selection3][1];
				purchaseItem = storeInfo[selection3][2];
				purchaseItemCost = storeInfo[selection3][3];
                if (cm.haveItem(purchaseItem, purchaseItemCost*自訂數值)) {
                    cm.sendYesNo("您確定要兌換【"+ 自訂數值*purchaseIdCost +"】個 #i" + purchaseId + "# #t" + purchaseId + "#嗎？\r\n本次製作將消耗："+
								 "\r\n\r\n"+
								 "#z" + purchaseItem + "# 【"+ purchaseItemCost*自訂數值 +"】個");
                } else {
                    cm.sendOk("您並沒有足夠的材料兌換");
					返回 = true;
                }
            
		}else if (status == 4) {
			if(返回){
				cm.dispose();
				cm.openNpc(腳本路徑);
				return;
			}else{
				if (!cm.canHold(purchaseId, purchaseIdCost * 自訂數值)) {
					cm.sendOk("請確認你的物品欄位還有空間。");
					cm.dispose();
					return;
				}
				cm.gainItem(purchaseId, purchaseIdCost * 自訂數值);
				cm.GAMEPLAYERLOG("楓葉兌換", "獲得++", purchaseId, purchaseIdCost * 自訂數值);
				cm.gainItem(purchaseItem, -purchaseItemCost * 自訂數值);
				cm.GAMEPLAYERLOG("楓葉兌換", "扣除--", purchaseItem, purchaseItemCost * 自訂數值);
				cm.sendOk("好的，您已成功兌換#r【"+ purchaseIdCost*自訂數值+"】#k個 #v" + purchaseId + "#");
				cm.GAMEPLAYERLOG("楓葉兌換", "=============================", 0, 0);
			}
		}else if (status == 5) {
			cm.dispose();
			cm.openNpc(腳本路徑);
			return;
		}
    }	
}
