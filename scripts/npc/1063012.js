var status = -1;

function action(mode, type, selection) {
    if (cm.isQuestActive(2236)) {
        var fkmap1 = cm.getPlayer().getMapId() == 105050200;
        var fkmap2 = cm.getPlayer().getMapId() == 105060000;
        var fkmap3 = cm.getPlayer().getMapId() == 105070000;
        var fkmap4 = cm.getPlayer().getMapId() == 105090000;
        var fkmap5 = cm.getPlayer().getMapId() == 105090100;
        
        var fk1 = cm.getOneTimeLog('fk1') == 0;
        var fk2 = cm.getOneTimeLog('fk2') == 0;
        var fk3 = cm.getOneTimeLog('fk3') == 0;
        var fk4 = cm.getOneTimeLog('fk4') == 0;
        var fk5 = cm.getOneTimeLog('fk5') == 0;
        var fk6 = cm.getOneTimeLog('fk6') == 0;
        
        var fk11 = cm.getOneTimeLog('fk1') != 0;
        var fk22 = cm.getOneTimeLog('fk2') != 0;
        var fk33 = cm.getOneTimeLog('fk3') != 0;
        var fk44 = cm.getOneTimeLog('fk4') != 0;
        var fk55 = cm.getOneTimeLog('fk5') != 0;
        var fk66 = cm.getOneTimeLog('fk6') != 0;
        
        if (fkmap1) {
            if (fk1) {
                cm.setOneTimeLog('fk1');
                cm.gainItem(4032263, -1);
                cm.sendNext("已經完成了1/6。");
            } else {
                cm.sendOk("有種強力的魔咒，無法接近。");
            }
        } else if (fkmap2) {
            if (fk2 && fk11) {
                cm.setOneTimeLog('fk2');
                cm.gainItem(4032263, -1);
                cm.sendNext("已經完成了2/6。");
            } else {
                cm.sendOk("有種強力的魔咒，無法接近。");
            }
        } else if (fkmap3) {
            if (fk3 && fk11 && fk22) {
                cm.setOneTimeLog('fk3');
                cm.gainItem(4032263, -1);
                cm.sendNext("已經完成了3/6。");
            } else {
                cm.sendOk("有種強力的魔咒，無法接近。");
            }
        } else if (fkmap4) {
            // 在 105090000 地图上添加额外的 NPC1 和 NPC2 判定
            if (cm.getPlayer().getPosition().y < 78) {
                if (fk4 && fk11 && fk22 && fk33) {
                    cm.setOneTimeLog('fk4');
                    cm.gainItem(4032263, -1);
                    cm.sendNext("已經完成了4/6。");
                } else {
                    cm.sendOk("有種強力的魔咒，無法接近。");
                }
            } else {
                if (fk5 && fk11 && fk22 && fk33 && fk44) {
                    cm.setOneTimeLog('fk5');
                    cm.gainItem(4032263, -1);
                    cm.sendNext("已經完成了5/6。");
                } else {
                    cm.sendOk("有種強力的魔咒，無法接近。");
                }
            }
        } else if (fkmap5) {
            // 在 105090100 地图上添加额外的 NPC 判定
            if (fk6 && fk11 && fk22 && fk33 && fk44 && fk55) {
                cm.setOneTimeLog('fk6');
                cm.gainItem(4032263, -2);
                cm.forceCompleteQuest(2236);
                cm.gainExp(120000);
                cm.sendNext("完成任務。 經驗值:60000");
            } else {
                cm.sendOk("有種強力的魔咒，無法接近。");
            }
        }
    }
    cm.dispose();
}
