/* 
 * Spiegelmann - Monster Carnival
 */

var status = -1;
var objDate = new Date();
var Month = objDate.getMonth();
var MonthS = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
var tzc = objDate.getDate();
var Day = objDate.getDay();
var Year = objDate.getFullYear();
var log紀錄次數 = "怪物擂台";
var rank = "D";
var exp = 0;
var coinId = 4001129;
var coinIcon = "#i" + coinId + "#";
var warrior = [[1302004, 7], [1402006, 7], [1302009, 10], [1402007, 10],
               [1302010, 20], [1402003, 20], [1312006, 7], [1412004, 7],
               [1312007, 10], [1412005, 10], [1312018, 20], [1412003, 20],
               [1322015, 7], [1422008, 7], [1322016, 10], [1422007, 10],
               [1322017, 20], [1422005, 20], [1432003, 7], [1442003, 7],
               [1432005, 10], [1442009, 10], [1442005, 20], [1432004, 20]];

var magician = [[1372001, 7], [1382018, 7], [1372012, 10], [1382019, 10],
                [1382001, 20], [1372007, 20]];

var archer = [[1452006, 7], [1452007, 10], [1452008, 20], [1462005, 7],
              [1462006, 10], [1462007, 20]];

var thief = [[1472013, 7], [1472017, 10], [1472021, 20], [1332014, 7],
             [1332011, 10], [1332031, 10], [1332016, 20], [1332034, 20]];

var pirate = [[1482005, 7], [1482006, 10], [1482007, 20], [1492005, 7],
              [1492006, 10], [1492007, 20]];

var necklace = [[1122007, 50], [2041211, 40]];




var 領取獎勵場次數 = 10;
var 固定獎勵 = [
	[4000037,1],//物品代碼 數量
	[4000036,1],//物品代碼 數量
	[4000035,2],//物品代碼 數量
	[4000034,2],//物品代碼 數量
];

function start() {
    if (cm.getCarnivalParty() != null) {
        status = 99;
    }
    action(1, 0, 0);
}
 
function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (mode == -1) {
	cm.dispose();
	return;
    }
    if (status == 0) {
        cm.sendSimple("請問有甚麼需要幫忙的?如果你從沒參加過怪物擂台，你會需要再進入前知道一些事情。"+
		"\r\n\r\n#b"+
		"#L0#進入怪物擂台#l\r\n"+
		"#L1#了解怪物擂台#l\r\n"+
		"#L2#兌換楓葉硬幣#l\r\n"+
		"#L99#領取每日#l\r\n");
    } else if (status == 1) {
        switch (selection) {
            case 0: {
                var level = cm.getPlayerStat("LVL");
                if (level >= 30 && level <= 50) {
					cm.saveLocation("MONSTER_CARNIVAL");
                    cm.warp(980000000, "st00");
                } else if (level >= 51 && level <= 70) {
					cm.saveLocation("MONSTER_CARNIVAL");
                    cm.warp(980030000, "st00");
                } else {
					cm.sendOk("你的等級不夠或是超過-.-");
                }
                cm.dispose();
            }break;
			
			case 1: {
				cm.sendOk("怪物擂台不像其他組隊任務，因為他是透過隊伍跟對隊伍間的競爭取得勝利，你的任務就是擊殺怪物取得CP分數，透過CP您可以召喚許多輔助、技能、怪物，以便您取得勝利。擊殺地圖中的怪物將有機率使你獲得楓葉硬幣，楓葉硬幣可以換取許多道具。");
	            cm.dispose();
				
			}break;
			case 2: {
				store = true;
		            cm.sendSimple("請選擇一個種類:\r\n" +
                    "#L101##b兌換戰士類武器\r\n" +
                    "#L102#兌換法師類武器\r\n" +
                    "#L103#兌換弓箭手類武器\r\n" +
                    "#L104#兌換盜賊武器\r\n" +
                    "#L105#兌換海盜武器\r\n" +
                    "#L106#兌換怪物擂台項鍊\r\n");
				
			}break;
			case 99: {
				cm.getPlayer().setBossLog("" + Year + "年" + MonthS[Month] + tzc + "日" + log紀錄次數 + "");
				store = false;
				counts = cm.getPlayer().getBossLog("" + Year + "年" + MonthS[Month] + tzc + "日" + log紀錄次數 + "");
				var text = "";
				text += "【 每日完成 ( "+counts+" / "+領取獎勵場次數+" ) 場即可領取以下獎勵】\r\n"
				for (var i in 固定獎勵){
					if(i%10 == 0)
						text +="\r\n\r\n";
						text += "#i" + 固定獎勵[i][0] + ":#  #z" + 固定獎勵[i][0] + "# : " + 固定獎勵[i][1] + " 個\r\n\r\n "
				}
				cm.sendNext(text);
			}break;
            default: {
                cm.dispose();
                break;
            }
            
        }
    }  else if (status == 2) {
		if (store) {
                switch (selection) {
                    case 101:
                        storeInfo = warrior;
                        break;
                    case 102:
                        storeInfo = magician;
                        break;
                    case 103:
                        storeInfo = archer;
                        break;
                    case 104:
                        storeInfo = thief;
                        break;
                    case 105:
                        storeInfo = pirate;
                        break;
                    case 106:
                        storeInfo = necklace;
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
                    storeText += "#L" + i + "##v" + wepId + "# - #z" + wepId + "# - " + cost + " " + coinIcon + "#l\r\n";
                }
                cm.sendSimple(storeText);
            }else{
				counts = cm.getPlayer().getBossLog("" + Year + "年" + MonthS[Month] + tzc + "日" + log紀錄次數 + "");
				領獎紀錄 = cm.getPlayer().getBossLog("" + Year + "年" + MonthS[Month] + tzc + "日" + log紀錄次數 + "_領獎");
				if(counts < 領取獎勵場次數){
					cm.sendOk("本日場次還不夠哦~");
					cm.dispose();
					return;
				}
				if(領獎紀錄 >= 1){
					cm.sendOk("您已經領取過了哦~~");
					cm.dispose();
					return;
				}
				for (var i = 0; i < 固定獎勵.length; i++) {
					cm.gainItem(固定獎勵[i][0], 固定獎勵[i][1]);
					cm.GAMEPLAYERLOG("每日組隊任務_怪物擂台", "獲得固定物品", 固定獎勵[i][0], 固定獎勵[i][1]);
				}
				var rewardMsg = "#b恭喜您已完成每日任務，期待你明天再接再厲\r\n\r\n";
				cm.sendOk(rewardMsg);
				cm.getPlayer().setBossLog("" + Year + "年" + MonthS[Month] + tzc + "日" + log紀錄次數 + "_領獎");
				cm.GAMEPLAYERLOG("每日組隊任務", "完成組隊任務_怪物擂台", 0, 0);
				cm.worldMessage(5,"恭喜玩家完成每日怪物擂台任務");
				cm.dispose();
			}
		
		
	} else if (status == 3) {
            if (store) {
                purchaseId = storeInfo[selection][0];
                purchaseCost = storeInfo[selection][1];

                if (cm.haveItem(coinId, purchaseCost)) {
                    cm.sendYesNo("您確定要兌換 #i" + purchaseId + "#? \r\n\r\n兌換後您的勳章剩餘數目為 #r#e" + (cm.itemQuantity(coinId) - purchaseCost) + " " + coinIcon + "#k#n 個.");
                } else {
                    cm.sendOk("您並沒有足夠的 " + coinIcon + ".");
                    cm.dispose();
                }
            } else {
                MCTracker.log("發生未知錯誤");
            }
        } else if (status == 4) {
            if (store) {
                if (cm.haveItem(coinId, purchaseCost)) {
                    cm.gainItem(coinId, -purchaseCost);
                    cm.gainItem(purchaseId, 1);
                    cm.sendOk("恭喜，這是您的新道具");
                    cm.dispose();
                }
            } else {
                MCTracker.log("發生未知錯誤");
            }
        }else if (status == 100) {
		
        var carnivalparty = cm.getCarnivalParty();
        if (carnivalparty.getTotalCP() >= 501) {
            rank = "A";
            exp = 30000;
        } else if (carnivalparty.getTotalCP() >= 251) {
            rank = "B";
            exp = 22500;
        } else if (carnivalparty.getTotalCP() >= 101) {
            rank = "C";
            exp = 16500;
        } else if (carnivalparty.getTotalCP() >= 0) {
            rank = "D";
            exp = 7500;
        }
	cm.getPlayer().endPartyQuest(1301);
        if (carnivalparty.isWinner()) {
			cm.getPlayer().setBossLog("" + Year + "年" + MonthS[Month] + tzc + "日" + log紀錄次數 + "");
            cm.sendNext("恭喜你贏了 太神啦\r\n#b怪物擂台賽排行 : " + rank);
        } else {
			cm.getPlayer().setBossLog("" + Year + "年" + MonthS[Month] + tzc + "日" + log紀錄次數 + "");
            cm.sendNext("雖然輸了也不要氣餒Q_Q\r\n#b怪物擂台賽排行 : " + rank);
        }
    } else if (status == 101) {
        var carnivalparty = cm.getCarnivalParty();
	var los = parseInt(cm.getPlayer().getOneInfo(1301, "lose"));
	var vic = parseInt(cm.getPlayer().getOneInfo(1301, "vic"));
        if (carnivalparty.isWinner()) {
	    vic++;
	    cm.getPlayer().updateOneInfo(1301, "vic", "" + vic);
            carnivalparty.removeMember(cm.getChar());
            cm.gainExpR(exp);
        } else {
	    los++;
	    cm.getPlayer().updateOneInfo(1301, "lose", "" + los);
            carnivalparty.removeMember(cm.getChar());
            cm.gainExpR(exp / 2);

        }
	cm.getPlayer().updateOneInfo(1301, "VR", "" + (java.lang.Math.ceil((vic * 100) / los)));
            cm.warp(980000000);
            cm.dispose();
    }

}