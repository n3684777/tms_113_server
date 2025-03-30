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



var 附魔兌換 = [
	[4034182, 1, 300000, 30, 4007005, 500, 4007000, 500, 4007003, 500], 
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
        cm.sendNext("需要附魔材料嗎？我能提供給你，只要你給我些上好素材。");
		}if (status == 1) {
			store = true;
			cm.sendSimple(
					"請問您想做甚麼呢 ? \r\n\r\n請選擇種類:\r\n" +
                    "#L101#附魔製作\r\n");
		} else if (status == 2) {
            if (store) {
                switch (selection) {
                    case 101:
                        storeInfo = 附魔兌換;
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
				storeText += "以下為可製作的附魔材料：\r\n";
                for (var i = 0; i < storeInfo.length; ++i) {
                    var wepId = storeInfo[i][0];
					var wepIdcost = storeInfo[i][1];
					var mesoID = storeInfo[i][3];
					var Item = storeInfo[i][4];
					var Itemcost = storeInfo[i][5];
					var Item2 = storeInfo[i][6];
					var Itemcost2 = storeInfo[i][7];
					var Item3 = storeInfo[i][8];
					var Itemcost3 = storeInfo[i][9];
					
                    storeText += "#L" + i + "#兌換#r 【"+ wepIdcost +"】#k 個 #v" + wepId + "# - #z" + wepId + "#\r\n\r\n#l"+
								 "#r#z" + Item + "# #k "+Itemcost+" 個 #r#z" + Item2 + "# #k "+Itemcost2+" 個\r\n"+  
								 "#r#z" + Item3 + "# #k "+Itemcost3+" 個  楓幣 #r"+mesoID+"#k 萬\r\n"+
								 "==================================================\r\n";
                }
                cm.sendSimple(storeText);
				
            } else {
					cm.sendOk("出現未知錯誤");
					cm.dispose();
            }
        }else if (status == 3) {
			selection3 = selection;
			cm.sendGetNumber("您想兌換多少數量？", 1, 1, 5000);    			
		} else if (status == 4) {
				if (selection <= 0 || selection > 5000) {
					cm.sendOk("您被偵測異常紀錄，使用過程已被紀錄Log！");
					cm.worldMessage(5,"玩家『"+ cm.getPlayer().getName() +"』被偵測到使用異常軟體修改數據，請通知GM檢查");
					cm.GAMEPLAYERLOG("付魔兌換異常", "使用異常軟體修改數據", 0, selection);
					cm.dispose();
					return;
				}
				if (!cm.canHold()) {
					cm.sendOk("請確認你的物品欄位還有空間。");
					cm.dispose();
					return;
				}
				自訂數值 = selection;
				purchaseId = storeInfo[selection3][0];
				purchaseIdCost = storeInfo[selection3][1];
				purchaseItem = storeInfo[selection3][4];
				purchaseItemCost = storeInfo[selection3][5];
				purchaseItem2 = storeInfo[selection3][6];
				purchaseItemCost2 = storeInfo[selection3][7];
				purchaseItem3 = storeInfo[selection3][8];
				purchaseItemCost3 = storeInfo[selection3][9];
				meso = storeInfo[selection3][2];
				mesoCost = storeInfo[selection3][3];
                if (cm.haveItem(purchaseItem, purchaseItemCost*自訂數值) && cm.haveItem(purchaseItem2, purchaseItemCost2*自訂數值) && cm.haveItem(purchaseItem3, purchaseItemCost3*自訂數值)  && cm.getMeso() >= meso) {
                    cm.sendYesNo("您確定要兌換【"+ purchaseIdCost +"】個 #i" + purchaseId + "# #t" + purchaseId + "#嗎？\r\n本次製作將消耗："+
								 "\r\n\r\n"+
								 "#z" + purchaseItem + "# 【"+ purchaseItemCost * 自訂數值 +"】個  #z" + purchaseItem2 + "# 【"+ purchaseItemCost2 * 自訂數值 +"】個\r\n\r\n"+
								 "#z" + purchaseItem3 + "# 【"+ purchaseItemCost3 * 自訂數值 +"】個");
                } else {
                    cm.sendOk("您並沒有足夠的材料兌換");
                    cm.dispose();
                }
            
		}else if (status == 5) {
					扣取物1 = purchaseItemCost * 自訂數值;
					扣取物2 = purchaseItemCost2 * 自訂數值;
					扣取物3 = purchaseItemCost3 * 自訂數值;
					cm.gainItem(purchaseId, purchaseIdCost * 自訂數值);
					cm.gainItem(purchaseItem, -扣取物1);
					cm.gainItem(purchaseItem2, -扣取物2);
					cm.gainItem(purchaseItem3, -扣取物3);
					cm.gainMeso(-meso);
                    cm.sendOk("好的，您已成功兌換#r【"+ purchaseIdCost*自訂數值+"】#k個 #v" + purchaseId + "#");
                    cm.dispose();
                
            
			}				
        }
		
   }
