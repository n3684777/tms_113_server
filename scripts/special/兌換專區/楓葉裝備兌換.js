var status = 0;
var 返回 = false;
var log = "活躍系統消費楓葉紀錄";
var 腳本路徑 = "兌換專區/楓葉裝備兌換";
var 道具 = 4000313;

// 整合所有等級的楓葉武器兌換
var 楓葉武器兌換 = [
    // [等級, 武器ID, 獲取數量, 道具ID, 所需道具數量, (可選)道具2ID, (可選)道具2數量]
    [43, 1302030, 1, 道具, 200],
    [43, 1092030, 1, 道具, 200],
    [43, 1442024, 1, 道具, 200],
    [43, 1412011, 1, 道具, 200],
    [43, 1382012, 1, 道具, 200],
    [43, 1472032, 1, 道具, 200],
    [43, 1332025, 1, 道具, 200],
    [43, 1492021, 1, 道具, 200],
    [43, 1482021, 1, 道具, 200],
    [43, 1452022, 1, 道具, 200],
    [43, 1462019, 1, 道具, 200],
    [64, 1302064, 1, 道具, 2000],
    [64, 1402039, 1, 道具, 2000],
    [64, 1312032, 1, 道具, 2000],
    [64, 1442051, 1, 道具, 2000],
    [64, 1372034, 1, 道具, 2000],
    [64, 1382039, 1, 道具, 2000],
    [64, 1472055, 1, 道具, 2000],
    [64, 1332056, 1, 道具, 2000],
    [64, 1492022, 1, 道具, 2000],
    [64, 1482022, 1, 道具, 2000],
    [64, 1452045, 1, 道具, 2000],
    [64, 1462040, 1, 道具, 2000],
    // 可以繼續增加其他武器
];

// 獲取陣列中的最大和最小值
function getRandom(min, max) {
    if (min > max) return -1;
    if (min == max) return min;
    return min + parseInt(Math.random() * (max - min + 1));
}

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
        if (mode == 1) status++;
        else status--;

        if (status == 0) {
            // 顯示選擇的等級
            var msg = "請問您想兌換什麼呢 ?\r\n";
            var levels = [];
            for (var i = 0; i < 楓葉武器兌換.length; i++) {
                if (levels.indexOf(楓葉武器兌換[i][0]) === -1) { // 使用 indexOf 來檢查是否已經存在該等級
                    levels.push(楓葉武器兌換[i][0]);
                    msg += "#L" + i + "#等級 " + 楓葉武器兌換[i][0] + " 楓葉武器#l\r\n";
                }
            }
            cm.sendSimple(msg);
        } else if (status == 1) {
            // 顯示該等級可兌換的武器
            var selectedLevel = 楓葉武器兌換[selection][0];
            var storeText = "以下為等級 " + selectedLevel + " 可兌換的武器：\r\n";
            for (var i = 0; i < 楓葉武器兌換.length; i++) {
                if (楓葉武器兌換[i][0] == selectedLevel) {
                    storeText += "#L" + i + "##v" + 楓葉武器兌換[i][1] + "# - #z" + 楓葉武器兌換[i][1] + "##l\r\n\r\n\r\n需要 #b#z" + 楓葉武器兌換[i][3] + "# " + 楓葉武器兌換[i][4] + "個";
                    if (楓葉武器兌換[i].length > 5) {
                        storeText += " 和 #z" + 楓葉武器兌換[i][5] + "##l " + 楓葉武器兌換[i][6] + "個";
                    }
					storeText += "\r\n\r\n#k------------------";
                    storeText += "\r\n\r\n";
                }
            }
            cm.sendSimple(storeText);
        } else if (status == 2) {
			選擇 = selection;
            var itemToExchange = 楓葉武器兌換[selection];
            var itemId = itemToExchange[1];
            var itemCost = itemToExchange[4];
            var materialId = itemToExchange[3];
            var itemCost2 = itemToExchange.length > 5 ? itemToExchange[6] : 0;
            var materialId2 = itemToExchange.length > 5 ? itemToExchange[5] : 0;

            // 檢查是否有足夠材料
            if (cm.haveItem(materialId, itemCost) && (materialId2 == 0 || cm.haveItem(materialId2, itemCost2))) {
                cm.sendYesNo("您確定要兌換 #v" + itemId + "# 嗎？\r\n這將消耗 #b" + itemCost + "個#z" + materialId + "##k" + (materialId2 != 0 ? " 和 " + itemCost2 + "個#z" + materialId2 + "#" : ""));
            } else {
                cm.sendOk("您的材料不足，無法兌換。");
                返回 = true;
            }
        } else if (status == 3) {
            if (返回) {
                cm.dispose();
            } else {
                var itemToExchange = 楓葉武器兌換[選擇];
                var itemId = itemToExchange[1];
                var itemCost = itemToExchange[4];
                var materialId = itemToExchange[3];
                var itemCost2 = itemToExchange.length > 5 ? itemToExchange[6] : 0;
                var materialId2 = itemToExchange.length > 5 ? itemToExchange[5] : 0;

                if (!cm.canHold(itemId, itemToExchange[2])) {
                    cm.sendOk("請確保您的背包有足夠的空間。");
                    cm.dispose();
                    return;
                }
                cm.gainItem(itemId, itemToExchange[2]);
                cm.gainItem(materialId, -itemCost);
                if (materialId2 != 0) cm.gainItem(materialId2, -itemCost2);
                cm.sendOk("兌換成功！您獲得了 #v" + itemId + "#。");
                cm.dispose();
            }
        }
    }
}
