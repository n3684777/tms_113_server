load('nashorn:mozilla_compat.js');
importPackage(java.lang);

var status = 0;
var 迷路 = "#fMap/MapHelper/weather/candy/4#";
var 線1 = "#fMap/MapHelper/worldMap/npcPos3/6#";
var 藍色角點 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var 返回 = false;
var 本地腳本 = "角色相關/領取特殊技能";

//這裡設定基本的領取參數
var 領取設定 = [
    {領取名稱說明: "寵物達人", 領取技能代碼: 8, 給予技能等級: 1, 領取職業: 0, 領取等級: 10},  // 0 表示不限制職業
    //{領取名稱說明: "怪物騎乘", 領取技能代碼: 1004, 給予技能等級: 1, 領取職業: 122, 領取等級: 120},
    //{領取名稱說明: "怪物騎乘", 領取技能代碼: 1004, 給予技能等級: 1, 領取職業: 122, 領取等級: 120},
    //{領取名稱說明: "怪物騎乘", 領取技能代碼: 1004, 給予技能等級: 1, 領取職業: 122, 領取等級: 120},
];

//這裡設定領取時會消耗的道具
var 領取需求道具 = [
    [
        [4000001, 1, -1],
    ],
    [
        [4000001, 1, -1],
        [4000002, 500, -1],
        [4000003, 100, -1],
    ],
    [
        [4000001, 1, -1],
        [4000003, 1, -1],
    ],
    [
        [4000001, 1, -1],
        [4000003, 1, -1],
    ],
];

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status >= 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) status++;
    else status--;

    if (status == 0) {
        角色職業 = cm.getPlayer().getJob();
        角色等級 = cm.getPlayer().getLevel();
        角色名稱 = cm.getPlayer().getName();
        var x = 0;
        var msg = "";
        msg += "                 " + 迷路 + " #e技能兌換#n " + 迷路 + "\r\n\r\n"
        msg += "" + 線1 + " " + 線1 + " " + 線1 + " " + 線1 + " " + 線1 + " #e#b您的職業可領取以下技能#k#n " + 線1 + " " + 線1 + " " + 線1 + " " + 線1 + " " + 線1 + "\r\n\r\n\r\n";
        for (var i = 0; i < 領取設定.length; i++) {
            x++;
            var 限定職業 = 領取設定[i].領取職業;
            // 如果限定職業是 0 表示不限職業
            if (限定職業 == 0 || 角色職業 == 限定職業) {
                var 標題 = 領取設定[i].領取名稱說明;
                msg += "#L" + i + "#" + 藍色角點 + " " + 標題 + "#l   ";
            }
            if (x % 3 == 0) {
                msg += "\r\n\r\n";
            }
        }
        cm.sendSimple(msg);
    } else if (status == 1) {
        選中技能 = selection;
        選中職業 = 領取設定[選中技能].領取職業;
        選中等級 = 領取設定[選中技能].領取等級;
        
        // 檢查是否符合職業限制（如果職業限制不是 0）
        if (選中職業 != 0 && 角色職業 != 選中職業) {
            返回 = true;
            cm.sendSimple("您的職業出現異常，無法兌換");
        } else if (角色等級 < 選中等級) {
            返回 = true;
            cm.sendSimple("您的等級不足，需要到 #b" + 選中等級 + "#k 等才可以兌換。");
        } else if (cm.getPlayer().getPrizeLog(角色名稱 + "領取了" + 領取設定[選中技能].領取名稱說明) >= 1) {
            返回 = true;
            cm.sendSimple("此技能已經兌換過了，不能再兌換囉~");
        }

        if (!返回) {
            var msg = "";
            msg += "#b您選擇了要兌換 【" + 領取設定[選中技能].領取名稱說明 + "】 技能#k\r\n\r\n";
            msg += "還需要以下物品才可兌換\r\n\r\n";
            for (var i = 0; i < 領取需求道具[選中技能].length; i++) {
                需要道具代碼 = 領取需求道具[選中技能][i][0];
                需要道具數量 = 領取需求道具[選中技能][i][1];
                msg += "【 #i" + 需要道具代碼 + ":# 】 #z" + 需要道具代碼 + "# 需要 #b" + 需要道具數量 + "#k 個\r\n\r\n";
            }
            cm.sendSimple(msg);
        }
    } else if (status == 2) {
        if (返回) {
            cm.dispose();
            cm.openNpc(9010000, 本地腳本);
            return;
        } else {
            var 缺少的道具 = [];
            for (var i = 0; i < 領取需求道具[選中技能].length; i++) {
                var 需要道具代碼 = 領取需求道具[選中技能][i][0];
                var 需要道具數量 = 領取需求道具[選中技能][i][1];
                var 擁有的道具數量 = cm.itemQuantity(需要道具代碼);

                if (擁有的道具數量 < 需要道具數量) {
                    缺少的道具.push([需要道具代碼, 需要道具數量 - 擁有的道具數量]);
                }
            }

            if (缺少的道具.length > 0) {
                var msg = "您缺少以下物品：\r\n\r\n";
                for (var j = 0; j < 缺少的道具.length; j++) {
                    msg += "【 #i" + 缺少的道具[j][0] + ":# 】  #z" + 缺少的道具[j][0] + "#  缺少 #r" + 缺少的道具[j][1] + "#k 個\r\n";
                }
                cm.sendSimple(msg);
            } else {
                for (var k = 0; k < 領取需求道具[選中技能].length; k++) {
                    var 道具代碼 = 領取需求道具[選中技能][k][0];
                    var 道具數量 = 領取需求道具[選中技能][k][1];
                    cm.gainItem(道具代碼, -道具數量);
                }

                var 領取技能代碼 = 領取設定[選中技能].領取技能代碼;
                var 給予技能等級 = 領取設定[選中技能].給予技能等級;
                cm.teachSkill(領取技能代碼, 給予技能等級, 給予技能等級);

                cm.sendSimple("恭喜您成功獲得了【" + 領取設定[選中技能].領取名稱說明 + "】技能！");
                cm.getPlayer().setPrizeLog(角色名稱 + "領取了" + 領取設定[選中技能].領取名稱說明);
            }
        }
    } else if (status == 3) {
        cm.dispose();
        cm.openNpc(9010000, 本地腳本);
        return;
    }
}
