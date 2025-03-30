load('nashorn:mozilla_compat.js');
importPackage(java.lang);

var status = 0;
var chosenSkill = 0; // 用於保存玩家的選擇
// 領取騎寵技能需要的道具清單和數量，道具ID:數量(數量填 0 則不會讀取該道具) 1: 楓幣 2: 楓點 3: Gash 4: 紅利
var rideSkillItems = {
	4000001: 1, 
	4000002: 2, 
	4000003: 100, 
	1: 100, 
	2: 200, 
	3: 300, 
	4: 400
	};
// 領取多寵技能需要的道具清單和數量，道具ID:數量(數量填 0 則不會讀取該道具)
var petSkillItems = {
	4000001: 0, 
	4000001: 0, 
	4000001: 0, 
	1: 50, 
	2: 0, 
	3: 0, 
	4: 0
	};

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status >= 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1)
        status++;
    else
        status--;
    if (status == 0) {
        cm.sendSimple("您好~想要有騎寵與三寵技能嗎？請選擇您要領取的技能:\r\n#b#L1#騎寵技能#l\r\n#L2#三寵技能#l");
    } else if (status == 1) {
        chosenSkill = selection;
        if (selection == 1) {
            cm.sendOk("領取騎寵技能需要以下道具:\r\n\r\n" + itemsListText(rideSkillItems));
        } else if (selection == 2) {
            cm.sendOk("領取三寵技能需要以下道具:\r\n\r\n" + itemsListText(petSkillItems));
        }
    } else if (status == 2) {
        if (chosenSkill == 1) {
            var checkResult = checkItems(rideSkillItems);
            if (checkResult.success) {
                //下方為怪物騎乘
                cm.teachSkill(10001017, 1, 1);
                cm.teachSkill(1004, 1, 1);
                cm.teachSkill(10001004, 1, 1);
                cm.teachSkill(20001004, 1, 1);
                deductItems(rideSkillItems); // 扣除道具
                cm.sendOk("已經領到騎寵技能囉");
            } else {
                cm.sendOk("您缺少以下必要的道具才能領取騎寵技能:\r\n\r\n" + itemsListText(checkResult.missingItems));
            }
        } else if (chosenSkill == 2) {
            var checkResult = checkItems(petSkillItems);
            if (checkResult.success) {
                //下方為多寵技能
                cm.teachSkill(8, 1, 1);
                cm.teachSkill(10000018, 1, 1);
                cm.teachSkill(20000024, 1, 1);
                deductItems(petSkillItems); // 扣除道具
                cm.sendOk("已經領到三寵技能囉");
            } else {
                cm.sendOk("您缺少以下必要的道具才能領取三寵技能:\r\n\r\n" + itemsListText(checkResult.missingItems));
            }
        }
        cm.dispose();
    }
}

// 檢查玩家是否有足夠的道具
function checkItems(itemList) {
    var missingItems = {};
    var success = true;
    for (var item in itemList) {
        var requiredQty = itemList[item];
        if (requiredQty <= 0) continue; // 忽略需求量為 0 的項目
        var currentQty = 0;
        switch (item) {
            case "1":
                currentQty = cm.getMeso();
                break;
            case "2":
                currentQty = cm.getPlayer().getCSPoints(2);
                break;
            case "3":
                currentQty = cm.getPlayer().getCSPoints(1);
                break;
            case "4":
                currentQty = cm.getPlayer().getDividend();
                break;
            default:
                currentQty = cm.itemQuantity(item);
                break;
        }
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
        var requiredQty = itemList[item];
        if (requiredQty <= 0) continue; // 忽略需求量為 0 的項目
        switch (item) {
            case "1":
                cm.gainMeso(-requiredQty);
                break;
            case "2":
                cm.getPlayer().modifyCSPoints(2, -requiredQty, true);
                break;
            case "3":
                cm.getPlayer().modifyCSPoints(1, -requiredQty, true);
                break;
            case "4":
                cm.getPlayer().setDividend(-requiredQty);
                break;
            default:
                cm.gainItem(item, -requiredQty);
                break;
        }
    }
}


// 獲取道具列表文字
function itemsListText(itemList) {
    var text = "";
    for (var item in itemList) {
        var requiredQty = itemList[item];
        if (requiredQty <= 0) continue; // 忽略需求量為 0 的項目
        switch (item) {
            case "1":
                text += "【 楓幣 】";
                break;
            case "2":
                text += "【 楓點 】";
                break;
            case "3":
                text += "【 Gash 】";
                break;
            case "4":
                text += "【 紅利 】";
                break;
            default:
                text += "【 #i" + item + "# 】 #z" + item + "#";
                break;
        }
        text += " x " + requiredQty + "\r\n\r\n";
    }
    return text;
}

