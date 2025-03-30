/*
* @autor Java
* LeaderMS MapleStory Private Server
* APQ
* cm.getPlayer().gainAriantPontos(-100);
* cm.gainItem(3010018, 1);
*/

var status = 0;
load('nashorn:mozilla_compat.js');
importPackage(Packages.handling.world);
importPackage(Packages.tools);
importPackage(Packages.server);
var 紅色箭頭 = "#fUI/UIWindow/Quest/icon6/7#";
var 返回 = false;
var 腳本路徑 = "兌換專區/道具兌換";

var 兌換內容 = [
//獲得物 獲得數量。兌換物 兌換數量
	[4000001, 1, 4000002, 5], 
	[4000003, 1, 4000004, 5], 
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
				storeInfo = 兌換內容;
                var storeText = "";
				storeText += "以下為可兌換的寶物：\r\n";
                for (var i = 0; i < storeInfo.length; ++i) {
                    var wepId = storeInfo[i][0];
					var wepIdcost = storeInfo[i][1];
					var Item = storeInfo[i][2];
					var Itemcost = storeInfo[i][3];
					
                    storeText += "#L" + i + "##r兌換 【 #i" + wepId + ":# 】 "+wepIdcost+" 個 "+紅色箭頭+" 【 #i" + Item + ":# 】 - "+ Itemcost +" 個#k#l\r\n";
                }
                cm.sendSimple(storeText);
				
        }else if (status == 1) {
			selection3 = selection;
			cm.sendGetNumber("您想兌換多少數量？", 1, 1, 5000);    			
		} else if (status == 2) {
			if (selection <= 0 || selection > 5000) {
					cm.sendOk("您被偵測異常紀錄，使用過程已被紀錄Log！");
					cm.worldMessage(5,"玩家『"+ cm.getPlayer().getName() +"』被偵測到使用異常軟體修改數據，請通知GM檢查");
					cm.GAMEPLAYERLOG("道具兌換異常", "使用異常軟體修改數據", 0, selection);
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
            
		}else if (status == 3) {
			if(返回){
				cm.dispose();
				cm.openNpc(9010000, 腳本路徑);
				return;
			}else{
				if (!cm.canHold(purchaseId, purchaseIdCost * 自訂數值)) {
					cm.sendOk("請確認你的物品欄位還有空間。");
					cm.dispose();
					return;
				}
				cm.gainItem(purchaseId, purchaseIdCost * 自訂數值);
				cm.gainItem(purchaseItem, -purchaseItemCost * 自訂數值);
                cm.sendOk("好的，您已成功兌換#r【"+ purchaseIdCost*自訂數值+"】#k個 #v" + purchaseId + "#");
			}
		}else if (status == 4) {
			cm.dispose();
			cm.openNpc(9010000, 腳本路徑);
			return;
		}				
    }
		
}
