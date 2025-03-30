importPackage(Packages.client);


var status = 0;
//物品代碼 給予數量 所需小鋼珠 四屬增加 魔攻 物攻 天數 
var 道具_1 = 
[
[4001126, 100, 300, 0, 0, 0, -1], 
[4460007, 100, 200, 0, 0, 0, -1], 
[4007000, 100, 500, 0, 0, 0, -1],
];


var 道具_2 = [
[5220001, 1, 300, 0, 0, 0, -1],
[2250000, 1, 400, 0, 0, 0, -1], 
[2250001, 1, 700, 0, 0, 0, -1],
];


var 道具_3 = [
[2450000, 1, 500, 0, 0, 0, -1],
[2022530, 1, 1000, 0, 0, 0, -1],
[2450015, 1, 2000, 0, 0, 0, -1],
[1432098, 1, 1000, 40, 40, 50, -1],
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
		var playerMapID = cm.getMapId();
		if (status == 0) {
			store = true;
			cm.sendSimple("親愛的 #h 您好\r\n\r\n我是#p9120104#看起來您對小鋼珠系統也有點興趣呢！\r\n" +
					  "有什麼我可以服務的嗎??\r\n"+
					  "#L101##b素材兌換#k#l\r\n"+
					  "#L102##b好康獎品#k#l\r\n"+
					  "#L103##b尊榮獎品#k#l\r\n");
		} else if (status == 1) {
                switch (selection) {
                    case 101:
                        storeInfo = 道具_1;
                        break;
                    case 102:
                        storeInfo = 道具_2;
                        break;
                    case 103:
                        storeInfo = 道具_3;
                        break;
                    default:
                        storeInfo = [];
                }
                if (storeInfo.length == 0) {
                    cm.sendOk("這個商店不存在");
                    cm.dispose();
                    return;
                }
                var storeText = "#b您好~想要兌換什麼獎品呢 ?#k \r\n\r\n";
				for (var i = 0; i < storeInfo.length; ++i) {
					var wepId = storeInfo[i][0];
					var cost = storeInfo[i][1];
					var NeedBeans = storeInfo[i][2];
					var 四屬增加 = storeInfo[i][3];
					var 魔攻增加 = storeInfo[i][4];
					var 物攻增加 = storeInfo[i][5];
					var 設定天數 = storeInfo[i][6];
					storeText += "#L" + i + "##v" + wepId + "# - #z" + wepId + "# - "+cost+"個#l\r\n\r\n";
					storeText += (四屬增加 <= 0 ? "" : "  四屬增加 #b"+四屬增加+" #k");
					storeText += (魔攻增加 <= 0 ? "" : "  魔攻增加 #b"+魔攻增加+" #k");
					storeText += (物攻增加 <= 0 ? "" : "  物攻增加 #b"+物攻增加+" #k\r\n");
					storeText += (設定天數 <= 0 ? "  物品天數 : #b無期限#k" : "  物品天數 : "+設定天數+" #k天");
					storeText += "\r\n\r\n需要小鋼珠 #b" + NeedBeans + " #k顆";
					storeText += "\r\n=======================================\r\n\r\n";
				}
				
                cm.sendSimple(storeText);
        }else if (status == 2) {
			selection2 = selection;
			cm.sendGetNumber("您想兌換多少數量？\r\n#r#e如果是兌換裝備一次只能一件#n#k", 1, 1, 1000);    			
		}else if (status == 3) {
			if(selection < 0 || selection > 10000){
				cm.sendOk("您已經被記錄LOG了，請輸入正確數值。");
				cm.GAMEPLAYERLOG("玩家使用異常手段改寫數值", 0, selection);
                cm.dispose();
				return;
			}
			自訂數值 = selection;
			wepId = storeInfo[selection2][0];
            cost = storeInfo[selection2][1];
			NeedBeans = storeInfo[selection2][2];
			四屬增加 = storeInfo[selection2][3];
			魔攻增加 = storeInfo[selection2][4];
			物攻增加 = storeInfo[selection2][5];
			設定天數 = storeInfo[selection2][6];
                if (cm.getPlayer().getBeans() >= NeedBeans * 自訂數值) {
                    cm.sendYesNo("您確定要兌換 #i" + wepId + "# #t" + wepId + "# "+(cost * 自訂數值)+" 個嗎?"+
					"\r\n您將會消耗 #r" + (NeedBeans * 自訂數值) + "#k 顆小鋼珠，並剩餘 #r" + (cm.getPlayer().getBeans() - NeedBeans * 自訂數值) + " #k顆小鋼珠#n");
                } else {
                    cm.sendOk("您並沒有足夠的小鋼珠，目前擁有 #b" + cm.getBeans() + "#k 顆");
                    cm.dispose();
                }
        } else if (status == 4) {
			wepId = storeInfo[selection2][0];
            cost = storeInfo[selection2][1];
			NeedBeans = storeInfo[selection2][2];
			四屬增加 = storeInfo[selection2][3];
			魔攻增加 = storeInfo[selection2][4];
			物攻增加 = storeInfo[selection2][5];
			設定天數 = storeInfo[selection2][6];
            if(四屬增加 <= 0 && 魔攻增加 <= 0 && 魔攻增加 <= 0){
				cm.gainItem(wepId, cost * 自訂數值, 設定天數);
			}else{
				cm.gainItem(wepId, cost * 自訂數值, 四屬增加, 四屬增加, 四屬增加, 四屬增加, 0, 0, 物攻增加, 魔攻增加, 0, 0, 0, 0, 0, 0, 設定天數); 
			}
			cm.getPlayer().gainBeans(- NeedBeans * 自訂數值);
            cm.sendOk("恭喜，這是您的新道具。\r\n\r\n#i" + wepId + "# #t" + wepId + "#  "+(cost * 自訂數值)+" 個\r\n\r\n目前剩餘小鋼珠數為#b 「"+cm.getPlayer().getBeans()+"」 顆#k");
            cm.dispose();
            
        }
    }
}