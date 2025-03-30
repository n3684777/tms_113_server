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
var 返回 = false;
var 腳本路徑 = "兌換專區/硬幣兌換";
var 兌換道具 = 4460001;

var 兌換內容 = [
	//兌換物代碼 兌換物數量  需要道具代碼 需要道具數量 , 四屬數值, 物攻, 魔攻, 道具天數, 是否有加能力如無請填 0
	[4460000, 1, 兌換道具, 1, 0, 0, 0, -1, 0], 
	[4460002, 1, 兌換道具, 1, 0, 0, 0, -1, 0], 
	[4460003, 1, 兌換道具, 1, 0, 0, 0, -1, 0], 
	[4460004, 1, 兌換道具, 1, 0, 0, 0, -1, 0], 
];


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
				storeText += "以下為可兌換的寶物：\r\n\r\n";
                for (var i = 0; i < storeInfo.length; ++i) {
                    var wepId = storeInfo[i][0];
					var wepIdcost = storeInfo[i][1];
					var Item = storeInfo[i][2];
					var Itemcost = storeInfo[i][3];
					var 四屬數值 = storeInfo[i][4];
					var 物攻數值 = storeInfo[i][5];
					var 魔攻數值 = storeInfo[i][6];
					var 道具天數 = storeInfo[i][7];
					var 屬性道具 = storeInfo[i][8];
					storeText += "#L" + i + "##r【 #i" + wepId + "# 】 #z" + wepId + "# " + wepIdcost + " 個#l\r\n\r\n\r\n" + 
					(道具天數 > 0 ? ("  #b期限 #r#e" + 道具天數 + "#n#b 天") : "") + 
					(四屬數值 > 0 ? ("  ４屬增加 #r#e" + 四屬數值 + "#n#b") : "") + 
					(物攻數值 > 0 ? ("  物攻增加 #r#e" + 物攻數值 + "#n#b") : "") + 
					(魔攻數值 > 0 ? ("  魔攻增加 #r#e" + 魔攻數值 + "#n#b") : "") + 
					"\r\n\r\n\r\n"+
					"#k  需要道具 : #z" + Item + "# " + Itemcost + " 個"+
					"\r\n\r\n"+
					"#k==============================================\r\n\r\n";
                }
                cm.sendSimple(storeText);
				
        }else if (status == 1) {
			selection3 = selection;
			cm.sendGetNumber("您想兌換多少數量？", 1, 1, 5000);    			
		} else if (status == 2) {
			if (selection <= 0 || selection > 5000) {
					cm.sendOk("您被偵測異常紀錄，使用過程已被紀錄Log！");
					cm.worldMessage(5,"玩家『"+ cm.getPlayer().getName() +"』被偵測到使用異常軟體修改數據，請通知GM檢查");
					cm.GAMEPLAYERLOG("硬幣兌換異常", "使用異常軟體修改數據", 0, selection);
					cm.dispose();
					return;
			}
				自訂數值 = selection;
				purchaseId = storeInfo[selection3][0];
				purchaseIdCost = storeInfo[selection3][1];
				purchaseItem = storeInfo[selection3][2];
				purchaseItemCost = storeInfo[selection3][3];
				四屬數值_2 = storeInfo[selection3][4];
				物攻數值_2 = storeInfo[selection3][5];
				魔攻數值_2 = storeInfo[selection3][6];
				道具天數_2 = storeInfo[selection3][7];
				屬性道具_2 = storeInfo[selection3][8];
				if(屬性道具_2 > 0 && 自訂數值 > 1){
				   cm.sendOk("有增加屬性的道具無法一次兌換超過 1 個數量。\r\n\r\n 您填寫的兌換數量為 "+自訂數值+" 個");
                   cm.dispose();
				   return;
				}
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
				if(屬性道具_2 == 0){
					cm.gainItem(purchaseId, purchaseIdCost * 自訂數值, 道具天數_2);
				}else{
					cm.gainItem(purchaseId, purchaseIdCost * 自訂數值, 四屬數值_2, 四屬數值_2, 四屬數值_2, 四屬數值_2, 0, 0, 物攻數值_2, 魔攻數值_2, 0, 0, 0, 0, 0, 0, 道具天數_2); 
				}
					cm.gainItem(purchaseItem, -purchaseItemCost * 自訂數值);
					cm.sendOk("好的，您已成功兌換#r【"+ purchaseIdCost*自訂數值+"】#k個 #v" + purchaseId + "#");
					cm.GAMEPLAYERLOG("硬幣兌換", "獲得道具++", purchaseId, purchaseIdCost * 自訂數值);
					cm.GAMEPLAYERLOG("硬幣兌換", "扣除道具--", purchaseItem, purchaseItemCost*自訂數值);
					cm.GAMEPLAYERLOG("硬幣兌換", "===================", 0, 0);
			}
		}else if (status == 4) {
			cm.dispose();
			cm.openNpc(9010000, 腳本路徑);
			return;
		}
							
    }
		
}
