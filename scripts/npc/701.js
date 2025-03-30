/*
* @autor Java
* LeaderMS MapleStory Private Server
* APQ
* cm.getPlayer().gainAriantPontos(-100);
* cm.gainItem(3010018, 1);
*/

var status = 0;
var item = [[1002498, 10000], [1052085, 10000], [1082145, 2000], [1082146, 2000], 
			[1082147, 2000], [1082148, 2000], [1082150, 2000]];

var cash = [[4250100, 30000], [4250300, 30000]];

var money = [[2049100, 5000],[2340000, 6000], [5490001, 5000], [4001078, 5000], [4000082, 3000]];

var mob = [[2100036, 1000], [2100035, 2000], [2100034, 3000], [2100019, 3000], 
[2100018, 3000], [2100017, 3000], [2100016, 3000], [2100015, 3000]];

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
		killmob = cm.getChar().getName();
        cm.sendNext("您想兌換擊殺數嗎?只要擁有足夠的擊殺數，就可兌換獨家好禮，有興趣嗎 ?");
		}if (status == 1) {
			store = true;
			cm.sendSimple("目前您有 #b【"+cm.killmob2(killmob)+"】#k 點怪物擊殺數\r\n請問您想兌換什麼 ? \r\n\r\n請選擇一個種類:\r\n" +
                    "#L101##b兌換裝備、椅子\r\n" +
                    "#L102#兌換強化寶石(可先兌換)\r\n" +
                    "#L103#兌換道具\r\n" +
                    "#L104#兌換召喚包");
		} else if (status == 2) {
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
                var storeText = "";
                for (var i = 0; i < storeInfo.length; ++i) {
                    var wepId = storeInfo[i][0];
                    var cost = storeInfo[i][1];
                    storeText += "#L" + i + "##v" + wepId + "# - #z" + wepId + "# - " + cost + " 隻 " + coinIcon + "#l\r\n";
                }
                cm.sendSimple(storeText);
            } else {
					cm.sendOk("發生未知的錯誤");
            }
        } else if (status == 3) {
			apqpontos = cm.killmob2(killmob);
            if (store) {
                purchaseId = storeInfo[selection][0];
                purchaseCost = storeInfo[selection][1];

                if (apqpontos >= purchaseCost) {
                    cm.sendYesNo("您確定要兌換 #i" + purchaseId + "# #t" + purchaseId + "#  \r\n您將會剩餘 #r#e" + (apqpontos - purchaseCost) + " 點 " + coinIcon + "#k#n.");
                } else {
                    cm.sendOk("您並沒有足夠的 " + coinIcon + ".");
                    cm.dispose();
                }
            } else {
                MCTracker.log("[MCPQ_Info] CONTEXT_TOWN: Invalid status 3");
            }
        } else if (status == 4) {
            if (store) {
                if (apqpontos >= purchaseCost) {
					cm.setkillmob(killmob,-purchaseCost);
                    cm.gainItem(purchaseId);
                    cm.sendOk("恭喜，這是您的新道具");
                    cm.dispose();
                }
            } else {
                cm.sendOk("發生未知的錯誤");
            }
        }
    }
}