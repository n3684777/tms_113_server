var status = -1;
// 獲取當下的時間
var currentTime = new Date();
var needmarriage = true;//true 表示要結婚才能入場 false

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.dispose();
        }
        status--;
    }
    cm.removeAll(4031595);
    cm.removeAll(4031594);
    cm.removeAll(4031597);
    if (status == 0) {
        var marr = cm.getQuestRecord(160001);
        var data = marr.getCustomData();
        if (data == null) {
            marr.setCustomData("0");
            data = "0";
        }
        if (needmarriage && (cm.getPlayer().getLevel() < 40 || cm.getPlayer().getMarriageId() <= 0 || !data.equals("3"))) {
            cm.sendNext("你必須已經結婚且等級達到40等以上才能跟我說話唷！");
            cm.dispose();
        } else {
            if (cm.haveItem(4031592)) {
                cm.sendNext("我可以讓你進去. 進去後就會失去入場卷了唷～確定要？.");
                return;
            }
            var apq = cm.getQuestRecord(160000);
				//從160000調取參數
            var dataTime = apq.getCustomData();
				// 將現在時間存入knowTimeD中
				knowTimeD = currentTime.getTime();
            if (knowTimeD - dataTime >= 6 * 3600000) { //6 小時
                if (!cm.haveItem(4031592) && cm.haveItem(4031593, 10)) {
                    cm.gainItem(4031593, -10);
                    cm.gainItem(4031592, 1);
                    cm.sendOk("請求下一張入場卷要6小時候唷。");
                    apq.setCustomData(knowTimeD);
                } else {
                    cm.sendOk("從怪物身上取得 10 個藍環鑰匙給我. 你一次只能擁有一個入場卷.");
                }
            } else {
                cm.sendNext("領取的時間尚未滿6小時。");
            }
            cm.dispose();
        }
    } else if (status == 1) {
        cm.gainItem(4031592, -1);
        cm.warp(670010100, 0);
        cm.dispose();
    }
}