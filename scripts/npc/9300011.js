///bosspq參數設定區
var BSPQ介紹 = "#k玩家可以按照自己的能力選擇難度，入場後會有許多BOSS\r\n等著玩家挑戰！戰勝後都能拿到BOSSPQ點數，點數可以在\r\n商店兌換東西哦！！#b";
var 商店腳本路徑 ="兌換專區/BSPQ點數兌換NPC";

    
function start() {
    cm.sendSimple("			"+迷路+" #e#b歡迎來到財神爺副本系統#k#n "+迷路+"\r\n\r\n"+
	"	#b我能讓你玩到許多有趣的特色副本，想來玩看看嗎？\r\n\r\n"+
	線1+線1+線1+線1+線1+線1+線1+線1+線1+線1+線1+線1+線1+線1+線1+線1+線1+線1+線1+線1+線1+線1+線1+線1+線1+線1+線1+線1+"\r\n\r\n"+
	
	"#b#e"+右邊箭頭+" 【 BOSS對戰 】 #n\r\n\r\n"+
	""+BSPQ介紹+"\r\n\r\n"+
	"『人數限制』: 1 人\r\n\r\n"+
	"#b#L100#"+藍色角點+" 查看兌換商店#l#k \r\n\r\n"+
	"#b#L0##v03994115##l"+
	"#l#L1##v03994116##l"+
	"#L2##v03994117##l"+
	"#L28##v03994118##l\r\n\r\n\r\n\r\n"+
	
	"#e"+右邊箭頭+" 【 其他 】#n\r\n"+
	"#L4#"+藍色角點+" 進入幸福村#l#k");
}

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
        switch (selection) {
            case 0:
                if (cm.getParty() != null) {
                    if (cm.getDisconnected("BossQuestEASY") != null) {
                        cm.getDisconnected("BossQuestEASY").registerPlayer(cm.getPlayer());
                    } else if (cm.isLeader()) {
                        if (World.isShutDown) {
                            cm.sendNext("因為伺服器在維修中，所以暫時不能打BOSSPQ。");
                            cm.dispose();
                            return;
                        }
                        var party = cm.getPlayer().getParty().getMembers();
                        var mapId = cm.getPlayer().getMapId();
                        var next = true;
                        var it = party.iterator();
                        while (it.hasNext()) {
                            var cPlayer = it.next();
                            var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
                            if (ccPlayer == null || ccPlayer.getLevel() < 70) {
                                next = false;
                                break;
                            }
                        }
                        if (next) {
                            var q = cm.getEventManager("BossQuestEASY");
                            if (q == null) {
                                cm.sendOk("找不到腳本，請聯繫GM！");
                                cm.dispose();
                                break;
                            } else {
                                q.startInstance(cm.getParty(), cm.getMap());
                            }
                        } else {
                            cm.sendOk("全部隊友必須達到70等.");
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
                }cm.dispose();
                break;
            case 1:
                if (cm.getParty() != null) {
                    if (cm.getDisconnected("BossQuestMed") != null) {
                        cm.getDisconnected("BossQuestMed").registerPlayer(cm.getPlayer());
                    } else if (cm.isLeader()) {
                        if (World.isShutDown) {
                            cm.sendNext("因為伺服器在維修中，所以暫時不能打BOSSPQ。");
                            cm.dispose();
                            return;
                        }
                        var party = cm.getPlayer().getParty().getMembers();
                        var mapId = cm.getPlayer().getMapId();
                        var next = true;
                        var it = party.iterator();
                        while (it.hasNext()) {
                            var cPlayer = it.next();
                            var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
                            if (ccPlayer == null || ccPlayer.getLevel() < 100) {
                                next = false;
                                break;
                            }
                        }
                        if (next) {
                            var q = cm.getEventManager("BossQuestMed");
                            if (q == null) {
                                cm.sendOk("找不到腳本，請聯繫GM！");
                                cm.dispose();
                                break;
                            } else {
                                q.startInstance(cm.getParty(), cm.getMap());
                            }
                        } else {
                            cm.sendOk("全部隊友必須達到100等.");
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
                }cm.dispose();
                break;
            case 2:
                if (cm.getParty() != null) {
                    if (cm.getDisconnected("BossQuestHARD") != null) {
                        cm.getDisconnected("BossQuestHARD").registerPlayer(cm.getPlayer());
                    } else if (cm.isLeader()) {
                        if (World.isShutDown) {
                            cm.sendNext("因為伺服器在維修中，所以暫時不能打BOSSPQ。");
                            cm.dispose();
                            return;
                        }
                        var party = cm.getPlayer().getParty().getMembers();
                        var mapId = cm.getPlayer().getMapId();
                        var next = true;
                        var it = party.iterator();
                        while (it.hasNext()) {
                            var cPlayer = it.next();
                            var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
                            if (ccPlayer == null || ccPlayer.getLevel() < 120) {
                                next = false;
                                break;
                            }
                        }
                        if (next) {
                            var q = cm.getEventManager("BossQuestHARD");
                            if (q == null) {
                                cm.sendOk("找不到腳本，請聯繫GM！");
                                cm.dispose();
                            } else {
                                q.startInstance(cm.getParty(), cm.getMap());
                            }
                        } else {
                            cm.sendOk("全部隊友必須達到120等.");
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
                }cm.dispose();
                break;
            case 28:
                if (cm.getParty() != null) {
                    if (cm.getDisconnected("BossQuestHELL") != null) {
                        cm.getDisconnected("BossQuestHELL").registerPlayer(cm.getPlayer());
                    } else if (cm.isLeader()) {
                        if (World.isShutDown) {
                            cm.sendNext("因為伺服器在維修中，所以暫時不能打BOSSPQ。");
                            cm.dispose();
                            return;
                        }
                        var party = cm.getPlayer().getParty().getMembers();
                        var mapId = cm.getPlayer().getMapId();
                        var next = true;
                        var it = party.iterator();
                        while (it.hasNext()) {
                            var cPlayer = it.next();
                            var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
                            if (ccPlayer == null || ccPlayer.getLevel() < 160) {
                                next = false;
                                break;
                            }
                        }
                        if (next) {
                            var q = cm.getEventManager("BossQuestHELL");
                            if (q == null) {
                                cm.sendOk("找不到腳本，請聯繫GM！");
                                cm.dispose();
                            } else {
                                q.startInstance(cm.getParty(), cm.getMap());
                            }
                        } else {
                            cm.sendOk("全部隊友必須達到160等.");
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
                }cm.dispose();
                break;
            
            case 100:
                cm.dispose();
				cm.openNpc(9010000, 商店腳本路徑);
                break;
            case 3:
                cm.sendOk("#b點數數量 : " + points);
                cm.dispose();
                break;
            case 4:
                cm.warp(209000000);
                cm.dispose();
                break;
        }
    } else if (status == 1) {
        cm.dispose();
    }
}

importPackage(Packages.handling.world);

var points;
var objDate = new Date();
var Month = objDate.getMonth();
var MonthS = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
var tzc = objDate.getDate();
var day = objDate.getDay();
var Year = objDate.getFullYear();
var status = -1;
var 迷路 = "#fMap/MapHelper/weather/candy/4#";
var 線1 = "#fMap/MapHelper/worldMap/npcPos3/6#";
var 藍色角點 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var 開始挑戰 = "#fUI/UIWindow.img/RpsGame/BtStart/mouseOver/0#";
var 右邊箭頭 = "#fUI/UIWindow/Quest/icon6/7#";
