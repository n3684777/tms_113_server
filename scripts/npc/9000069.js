load('nashorn:mozilla_compat.js');
importPackage(Packages.handling.world);
var partysize =
    [
        [3, 6],
        [6, 6],
    ];
var minLevel = 255;
var times = 1;
var PQname = ["LIONPQ", "LIONPQ_HARD"];
var TimesPerDay = 2;

function start() {
    cm.sendSimple(
        "#r#v1004148#想挑戰凡雷恩副本嗎 \r\n#v4001133#等級限制Lv.170 - Lv.250\r\n#v3010517#人數限制【#k 3 - 6人#r】\r\n#b" +
        "#L0#進入凡雷恩副本(簡易版)#l\r\n\r\n#l"+
        "#L1#進入凡雷恩副本(困難版)#l\r\n\r\n#l");
}
function action(mode, type, selection) {
    if (mode == 1) {
        switch (selection) {
            case 0:
                if (cm.getParty() != null) {
                    if (cm.getDisconnected(PQname[selection]) != null) {
                        cm.getDisconnected(PQname[selection]).registerPlayer(cm.getPlayer());
                    } else if (cm.isLeader()) {
                        if (World.isShutDown) {
                            cm.sendNext("因為伺服器在維修中，所以暫時不能打副本。");
                            cm.dispose();
                            return;
                        }
                        var party = cm.getPlayer().getParty().getMembers();
                        var next = true;
                        var it = party.iterator();
                        if (cm.getParty().getMembers().size() < partysize[selection][0] || cm.getParty().getMembers().size() > partysize[selection][1]) {
                            cm.sendNext("此副本最小" + partysize[selection][0] + "人同時參與 最多" + partysize[selection][1] + "人同時參與!您目前隊伍人數不能打此副本。");
                            cm.dispose();
                            return;
                        }
                        while (it.hasNext()) {
                            var cPlayer = it.next();
                            var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
                            if (ccPlayer == null || ccPlayer.getLevel() < minLevel) {
                                next = false;
                                break;
                            }
                        }
                        if (next) {
                            var q = cm.getEventManager(PQname[selection]);
                            if (q == null) {
                                cm.sendOk("找不到腳本，請聯繫GM！");
                                cm.dispose();
                                break;
                            } else {
                                
                                    cm.setPartyBossLog(PQname[selection]);
                                    q.startInstance(cm.getParty(), cm.getMap());
                                
                            }
                        } else {
                            cm.sendOk("全部隊友必須達到" + minLevel + "等.");
                            cm.dispose();
                            break;
                        }
                    } else {
                        cm.sendOk("你不是隊長.");
                        cm.dispose();
                        break;
                    }
                } else {
                    cm.sendOk("你沒有隊伍.");
                    cm.dispose();
                    break;
                }
                break;
        }
    }
    cm.dispose();
}

