/* Author: aaroncsn(MapleSea Like)(Incomplete)
 NPC Name: 		Mr. Do
 Map(s): 		Mu Lung: Mu Lung(2500000000)
 Description: 		Potion Creator
 */
load('nashorn:mozilla_compat.js');
importPackage(Packages.client);

var status = 0;
var selectedType = -1;
var selectedItem = -1;
var item;
var mats;
var matQty;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        cm.dispose();
    }
    if (status == 0 && mode == 1) {
        if (cm.isQuestActive(3821)) {
            cm.forceCompleteQuest(3821);
            cm.sendNext("任務完成。");
            cm.dispose();
            return;
        }
        var selStr = "我是個多才多藝的人。跟我說說你想要什麼東西。 #b"
        var options = new Array("製藥", "製造卷軸", "捐贈材料");
        for (var i = 0; i < options.length; i++) {
            selStr += "\r\n#L" + i + "# " + options[i] + "#l";
        }
        cm.sendSimple(selStr);
    } else if (status == 1 && mode == 1) {
        selectedType = selection;
        var selStr;
        var items;
        if (selectedType == 0) { //Make a medicine
            cm.sendNext("如果你想學做藥，你第一步就是學習中藥配方，沒有什麼比這個更適合了。");
            cm.dispose();
            return;
        } else if (selectedType == 1) { //Make a scroll
            selStr = "你要想要什麼？？#b";
            items = new Array("#t2043000#", "#t2043100#", "#t2043200#", "#t2043300#", "#t2043700#", "#t2043800#", "#t2044000#", "#t2044100#", "#t2044200#", "#t2044300#", "#t2044400#", "#t2044500#", "#t2044600#", "#t2044700#", "#t2044800#", "#t2044900##k");
        } else if (selectedType == 2) { //Donate medicine ingredients
            selStr = "什麼？你想把所有的藥材捐獻出來？真是好消息啊！捐獻道具是以#b100個#k為單位。給捐獻者可以製造符咒的魔珠。你細想捐獻那種藥材？ #b";
            //items = new Array("橡果", "頂針", "針袋", "頸花", "頸泳帽", "破損的罐子碎片", "人蔘煮水", "草人", "木偶", "桔梗根", "百年桔梗", "舊紙", "黃腰帶", "斷裂的鹿角", "紅腰帶", "桃核", "阿利先生的皮革", "貓娃娃", "海盜的印記", "船長帽#k");
            items = new Array(4000276, 4000277, 4000278, 4000279, 4000280, 4000291, 4000292, 4000286, 4000287, 4000293, 4000294, 4000298, 4000284, 4000288, 4000285, 4000282, 4000295, 4000289, 4000296, 4031435);
        } else { //I want to forfeit the restoration of Portrait Scroll...
            cm.dispose();
            return;
        }
		if(selectedType == 1){
			for (var i = 0; i < items.length; i++) {
				selStr += "\r\n#L" + i + "# " + items[i] + "#l";
			}
		}else{
			for (var i = 0; i < items.length; i++) {
				selStr += "\r\n#L" + i + "# #i" + items[i] + ":# #z" + items[i] + "##l";
			}
		}
        
        cm.sendSimple(selStr);
    } else if (status == 2 && mode == 1) {
        selectedItem = selection;
        if (selectedType == 1) { //Scrolls
            var itemSet = new Array(2043000, 2043100, 2043200, 2043300, 2043700, 2043800, 2044000, 2044100, 2044200, 2044300, 2044400, 2044500, 2044600, 2044700, 2044800, 2044900);
            var matSet = new Array(new Array(4001124, 4010001), new Array(4001124, 4010001), new Array(4001124, 4010001), new Array(4001124, 4020000), new Array(4001124, 4020005), new Array(4001124, 4020005), new Array(4001124, 4010001), new Array(4001124, 4010001), new Array(4001124, 4010001), new Array(4001124, 4010001), new Array(4001124, 4010001), new Array(4001124, 4010002), new Array(4001124, 4010002), new Array(4001124, 4010001), new Array(4001124, 4010001), new Array(4001124, 4010001));
            var matQtySet = new Array(new Array(100, 10), new Array(100, 10), new Array(100, 10), new Array(100, 10), new Array(100, 10), new Array(100, 10), new Array(100, 10), new Array(100, 10), new Array(100, 10), new Array(100, 10), new Array(100, 10), new Array(100, 10), new Array(100, 10), new Array(100, 10), new Array(100, 10), new Array(100, 10));
            item = itemSet[selectedItem];
            mats = matSet[selectedItem];
            matQty = matQtySet[selectedItem];
            var prompt = "你想要做 #t" + item + "#? \r\n以下是你需要的材料。#k";
            if (mats instanceof Array) {
                for (var i = 0; i < mats.length; i++) {
                    prompt += "\r\n#i" + mats[i] + "# " + matQty[i] + " #t" + mats[i] + "#";
                }
            } else {
                prompt += "\r\n#i" + mats + "# " + matQty + " #t" + mats + "#你覺得怎麼樣？你現在想要做一個嗎？";
            }
            cm.sendYesNo(prompt);
        } else if (selectedType == 2) {
            status = 3;
            var itemSet = new Array(4000276, 4000277, 4000278, 4000279, 4000280, 4000291, 4000292, 4000286, 4000287, 4000293, 4000294, 4000298, 4000284, 4000288, 4000285, 4000282, 4000295, 4000289, 4000296, 4031435);
            item = itemSet[selectedItem];
            var prompt = "你確定想要贊助 #b100個 #t " + item + "##k";
            cm.sendYesNo(prompt);
        }
    }else if (status == 3 && mode == 1) {
		// 检查玩家是否有足够的材料
		var hasEnoughMats = true;

		// 遍历所有材料，检查玩家是否有足够的数量
		for (var i = 0; i < mats.length; i++) {
			if (!cm.haveItem(mats[i], matQty[i])) {
				hasEnoughMats = false;
				break;
			}
		}

		if (hasEnoughMats) {
			// 如果材料足够，则扣除材料并给予道具
			for (var i = 0; i < mats.length; i++) {
				cm.gainItem(mats[i], -matQty[i]); // 扣除材料
			}
			cm.gainItem(item, 1); // 给玩家道具
			cm.sendOk("恭喜你成功兌換了 #b#i" + item + ":# #t" + item + "#!");
		} else {
			// 如果材料不足，提示玩家
			cm.sendOk("你沒有足夠的材料來兌換 #t" + item + "#.");
		}

		cm.dispose(); // 结束对话
		return;
	} else if (status == 4 && mode == 1) {
		cm.sendGetNumber("您想捐贈幾組？", 1, 1, 100);    			
	} else if (status == 5 && mode == 1) {
		if (selection <= 0 || selection > 100) {
			cm.sendOk("您被偵測異常紀錄，使用過程已被紀錄Log！");
			cm.worldMessage(5,"玩家『"+ cm.getPlayer().getName() +"』被偵測到使用異常軟體修改數據，請通知GM檢查");
			cm.GAMEPLAYERLOG("楓葉兌換異常", "使用異常軟體修改數據", 0, selection);
			cm.dispose();
			return;
		}
		自訂數值 = selection;
		var itemSet = new Array(4000276, 4000277, 4000278, 4000279, 4000280, 4000291, 4000292, 4000286, 4000287, 4000293, 4000294, 4000298, 4000284, 4000288, 4000285, 4000282, 4000295, 4000289, 4000296, 4031435);
		item = itemSet[selectedItem];

		if (cm.haveItem(item, 100 * 自訂數值)) {
			var 總抽中數量 = 0;

			// 根据自訂數值的数量来进行多次随机抽取
			for (var i = 0; i < 自訂數值; i++) {
				var 抽中數量 = 0;
				if (selectedItem >= 0 && selectedItem <= 3) {
					抽中數量 = randomBetween(3, 10);
				} else if (selectedItem >= 4 && selectedItem <= 7) {
					抽中數量 = randomBetween(6, 10);
				} else if (selectedItem >= 8 && selectedItem <= 12) {
					抽中數量 = randomBetween(10, 15);
				} else if (selectedItem >= 13 && selectedItem <= 999) {
					抽中數量 = randomBetween(15, 20);
				}

				總抽中數量 += 抽中數量; // 将每次抽取的数量累加到总数量中
			}

			// 给玩家总的抽取数量
			cm.gainItem(4001124, 總抽中數量);
			cm.gainItem(item, -(100 * 自訂數值));
			cm.sendOk("恭喜你獲得 #b" + 總抽中數量 + " 個 #i" + 4001124 + "# #t" + 4001124 + "#");
			cm.dispose();
		} else {
			cm.sendOk("你好像沒有足夠的材料。");
			cm.dispose();
		}
	}
}

function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}