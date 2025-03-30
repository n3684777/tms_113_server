var status = -1;
var 小圖標 = "#fUI/UIWindow.img/QuestIcon/4/0#";
var 轉升最高次數 = 500;
var 轉升等級限制 = 200;
var 每次轉升贈送能力點 = 100;

// 轉升額外多贈予點數設置 (區隔次數與點數對應的陣列)
var 轉升額外贈送區隔 = [
    { 次數: 5, 點數: 0 },
    { 次數: 10, 點數: 0 },
    { 次數: 15, 點數: 0 }
];

// 轉升需求道具開關，設定為 true 表示需要道具，false 表示不需要道具
var 需要需求道具 = false;

// 需要的道具清單和數量，道具ID:數量
var rideSkillItems = {4000001: 1, 4000002: 2, 4000003: 100};

// 轉生次數獎勵列表
var rewards = {
    10: [
			{ id: 2000004, quantity: 300 }, { id: 2000005, quantity: 20 },
		],
		
    30: [
			{ id: 2000004, quantity: 300 }, { id: 2000005, quantity: 20 },
		],
		
		
    50: [
			{ id: 2000004, quantity: 300 }, { id: 2000005, quantity: 20 },
		],
};

// 設定每次轉生可以獲得多少紅利
var 給多少紅利 = 10;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
		doR = cm.getPlayer().getCharInfoNum("轉升總次數");
        var selStr = "目前轉升次數為 : #b#e" + doR + "#k#n \r\n#r請在轉升前確認您的能力點都消耗完畢，\r\n否則轉升後原先剩餘的點數會消失！#k\r\n";
		selStr += "#L999#查看轉升排名#l\r\n\r\n\r\n";
		// 顯示將會獲得的獎勵
		selStr += ""+小圖標+" \r\n\r\n";
		selStr += "【 能力點數 】 : #b" + 每次轉升贈送能力點 + " #k點\r\n";
		if (給多少紅利 > 0) {
			selStr += "【 紅利 】 : #b" + 給多少紅利 + "#k\r\n";
		}
		// 判斷是否符合額外贈送點數的條件
		for (var i = 0; i < 轉升額外贈送區隔.length; i++) {
			if (doR == 轉升額外贈送區隔[i].次數) {
				if(轉升額外贈送區隔[i].點數 > 0){
					selStr += "【 轉升 "+doR+" 次額外贈送點數 】 : #b" + 轉升額外贈送區隔[i].點數 + " 點#k\r\n";
				}
			}
		}

        // 判斷是否有對應次數的獎勵，並顯示獎勵物品
		if (rewards[doR]) {
			selStr += "【 特殊獎勵 】：\r\n\r\n";
			for (var i = 0; i < rewards[doR].length; i++) {
				selStr += "【 #i" + rewards[doR][i].id + ":# 】 #t" + rewards[doR][i].id + "# x " + rewards[doR][i].quantity + "\r\n";
			}
		} else {
            selStr += "無對應的轉升次數獎勵\r\n";
        }

		if (doR >= 轉升最高次數) {
			cm.sendOk("轉升次數已封頂 "+轉升最高次數+" 次 無法再進行轉升");
			cm.dispose();
			return;
		}
		if (cm.getPlayer().getLevel() < 轉升等級限制) {
			cm.sendOk("你尚未達到" + 轉升等級限制 + "等無法進行轉升");
			cm.dispose();
			return;
		}
		selStr += "\r\n#e#r請選擇要轉升的職業:\r\n#b#L0#冒險家#l#L1000#皇家騎士團#l#L2000#狂狼勇士#l";
        cm.sendYesNo(selStr);
    } else if (status == 1) {
		var checkResult = { success: true, missingItems: {} };
		選擇 = selection;
		if(選擇 == 999){
			cm.showRank("轉升總次數");
			cm.dispose();
			return;
		}
		if (需要需求道具) {
			checkResult = checkItems(rideSkillItems);
		}

		if (checkResult.success) {
			// 扣除需求道具
			if (需要需求道具) {
				deductItems(rideSkillItems);
			}
			
			// 判斷是否符合額外贈送點數的條件
			for (var i = 0; i < 轉升額外贈送區隔.length; i++) {
				if (doR == 轉升額外贈送區隔[i].次數) {
					cm.getPlayer().gainAp(轉升額外贈送區隔[i].點數);
				}
			}

			// 發放轉生獎勵
			if (rewards[doR]) {
				for (var j = 0; j < rewards[doR].length; j++) {
					cm.gainItem(rewards[doR][j].id, rewards[doR][j].quantity);
				}
			}

			// 給予紅利
			if (給多少紅利 > 0) {
				cm.getPlayer().setDividend(給多少紅利);
			}
			cm.getPlayer().addCharInfoNum("轉升總次數", 1);
			cm.getPlayer().轉升系統(選擇);
			doR = cm.getPlayer().getCharInfoNum("轉升總次數");
			cm.getPlayer().gainAp((每次轉升贈送能力點));
			cm.sendOk("轉升成功！目前轉升次數 "+doR+" 轉。已獲得獎勵。");
			cm.dispose();
		} else {
			cm.sendOk("您缺少以下必要的道具:\r\n\r\n" + itemsListText(checkResult.missingItems));
			cm.dispose();
		}
	}
}

// 檢查玩家是否有足夠的道具
function checkItems(itemList) {
    var missingItems = {};
    var success = true;
    for (var item in itemList) {
        var requiredQty = itemList[item];
        var currentQty = cm.itemQuantity(item);
        if (currentQty < requiredQty) {
            missingItems[item] = requiredQty - currentQty;
            success = false;
        }
    }
    return { success: success, missingItems: missingItems };
}

// 扣除玩家的道具
function deductItems(itemList) {
    for (var item in itemList) {
        cm.gainItem(item, -itemList[item]);
    }
}

// 獲取道具列表文字
function itemsListText(itemList) {
    var text = "";
    for (var item in itemList) {
        text += "#i" + item + "# #t" + item + "# x " + itemList[item] + "\r\n";
    }
    return text;
}
