load('nashorn:mozilla_compat.js');
importPackage(Packages.handling.world);
var status = -1;
var 每天遊玩次數 = 100;
function start() {
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
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
    }

    if (cm.getPlayer().getMap().getId() == 922210300) {
        if (status == 0) {
            var msg = "";
            msg += "\r\n西瓜田出現了一群愛吃西瓜的 #r#o9500182# #k把 #b#p2073000# #k辛苦種植的農作物給搶走了!\r\n#b#p2073000# #k現在正需要人手幫忙搶回他的西瓜\r\n你有空要幫忙一下嗎?\r\n";
            msg += "#L0##b幫朴大爺拿回西瓜。#l\r\n";
            msg += "#L1##b我要換獎品!#l\r\n";
            msg += "#L2##b查詢今日剩餘次數#l\r\n";
            msg += "#L3##r離開#l\r\n";
            cm.sendSimple(msg);
        } else if (status == 1) {
            select = selection;
            if (select == 0) {
                if (cm.getParty() == null) {
                    var logName = "" + Year + "年" + MonthS[Month] + tzc + "日" + 副本紀錄log + "";
                    var remainTimes = 每天遊玩次數 - cm.getPlayer().getPrizeLog(logName);
                    remainTimes = remainTimes <= 0 ? 0 : remainTimes;

                    if (remainTimes > 0) {
                        if (cm.getDisconnected("WaterMelon") != null) {
                            cm.getDisconnected("WaterMelon").registerPlayer(cm.getPlayer());
                        } else {
                            if (World.isShutDown) {
                                cm.sendNext("因為伺服器在維修中，所以暫時不能玩。");
                                cm.dispose();
                                return;
                            }
                            var mapId = cm.getPlayer().getMapId();
                            var q = cm.getEventManager("WaterMelon");
                            if (q == null) {
                                cm.sendOk("找不到腳本，請聯繫GM！");
                                cm.dispose();
                            } else {
                                q.startInstance(cm.getPlayer());
                                cm.getPlayer().setPrizeLog(logName);
                            }
                        }
                    } else {
                        cm.sendNext("今天次數已經打完了");
                    }
                } else {
                    cm.sendOk("只能單人挑戰.");
                }
                cm.dispose();
            } else if (select == 1) {
                cm.dispose();
            } else if (select == 2) {
                var logName = "" + Year + "年" + MonthS[Month] + tzc + "日" + 副本紀錄log + "";
                var remainTimes = 每天遊玩次數 - cm.getPlayer().getPrizeLog(logName);
                remainTimes = remainTimes <= 0 ? 0 : remainTimes;
                cm.sendNext("今天次數剩下" + remainTimes + "次");
                cm.dispose();
            } else if (select == 3) {
                cm.dispose();
            }
        }
    } else if (cm.getPlayer().getMap().getId() == 922210000) {
        if (status == 0) {
            cm.sendNext("看來你成功搶回我的西瓜拉!讓我送你去下一關");
            var eim = cm.getPlayer().getEventInstance();
            if (eim != null) {
                var map = eim.getMapInstance(922210100);
                cm.getPlayer().changeMap(map, map.getPortal(0));
            }
            cm.dispose();
        }
    } else if (cm.getPlayer().getMap().getId() == 922210100) {
        if (status == 0) {
            cm.sendNext("看來你成功搶回我的西瓜拉!讓我送你去下一關");
            var eim = cm.getPlayer().getEventInstance();
            if (eim != null) {
                var map = eim.getMapInstance(922210200);
                cm.getPlayer().changeMap(map, map.getPortal(0));
            }
            cm.dispose();
        }
    } else if (cm.getPlayer().getMap().getId() == 922210200) {
        if (status == 0) {
            cm.sendNext("看來你成功搶回我的西瓜拉!讓我送你回去");
            var eim = cm.getPlayer().getEventInstance();
            if (eim != null) {
                var map = eim.getMapInstance(922210300);
                cm.getPlayer().changeMap(map, map.getPortal(0));
            }
            cm.dispose();
        }
    }

}

var objDate = new Date();
var Month = objDate.getMonth();
var MonthS = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
var tzc = objDate.getDate();
var day = objDate.getDay();
var Year = objDate.getFullYear();
var 副本紀錄log = "朴大爺西瓜";