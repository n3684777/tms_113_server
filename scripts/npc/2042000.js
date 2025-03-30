var status = 0;
var pw = true;
function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 1)
		status++;
	else
		cm.dispose();
	if (pw) {
        if (status == 0 && mode == 1) {
            var selStr = "請選擇一種擂台賽場地!!\r\n如果您沒有組隊，是不會顯示擂臺場地的!!";
            var found = false;
            for (var i = 0; i < 6; i++) {
                if (getCPQField(i + 1) != "") {
                    selStr += "\r\n#b#L" + i + "# " + getCPQField(i + 1) + "#l#k";
                    found = true;
                }
            }
            if (cm.getParty() == null) {
                cm.sendSimple("請組隊再來找我。\r\n");
            } else {
                if (cm.isLeader()) {
                    var pt = cm.getPlayer().getParty();
                    if (pt.getMembers().size() < 1) {
                        cm.sendOk("需要 1 人以上才可以擂台！！");
                        cm.dispose();
                    }
                    if (cm.getParty() != null && 1 < cm.getParty().getMembers().size() && cm.getParty().getMembers().size() > (selection < 4 ? 1 : 2)) {
                        if (checkLevelsAndMap(30, 50) == 1) {
                            cm.sendOk("隊伍裡有人等級不符合。");
                            cm.dispose();
                        } else if (checkLevelsAndMap(30, 50) == 2) {
                            cm.sendOk("在地圖上找不到您的隊友。");
                            cm.dispose();
                        } else if (checkLevelsAndMap(30, 50) == 3) {
                            cm.sendOk("在頻道的找不到您的隊友。");
                            cm.dispose();
                        }
                    }

                    if (found) {
                        cm.sendSimple(selStr);
                    } else {
                        cm.sendSimple("目前沒有房間。");
                    }
                } else {
                    cm.sendSimple("請叫你的隊長來找我。");
                }
            }
        } else if (status == 1) {
            if (selection >= 0 && selection < 6) {
                var mapid = 980000000 + ((selection + 1) * 100);
                if (selection == 0 && cm.getEventManager("cpq").getInstance("cpq" + mapid) == null) { // 1 VS 1
                    if (cm.getParty() != null && cm.getParty().getMembers().size() == 1) {
                        if (checkLevelsAndMap(30, 50) == 1) {
                            cm.sendOk("隊伍裡有人等級不符合。");
                            cm.dispose();
                        } else {
                            cm.getEventManager("cpq").startInstance("" + mapid, cm.getPlayer());
                            cm.dispose();
                        }
                    } else {
                        cm.sendOk("您的隊伍人數超過。");
                        cm.dispose();
                    }
                } else if (cm.getEventManager("cpq").getInstance("cpq" + mapid) == null) {
                    if (cm.getParty() != null && 1 < cm.getParty().getMembers().size() && cm.getParty().getMembers().size() > (selection < 4 ? 1 : 2)) {
                        if (checkLevelsAndMap(30, 50) == 1) {
                            cm.sendOk("隊伍裡有人等級不符合。");
                            cm.dispose();
                        } else if (checkLevelsAndMap(30, 50) == 2) {
                            cm.sendOk("在地圖上找不到您的隊友。");
                            cm.dispose();
                        } else if (checkLevelsAndMap(30, 50) == 3) {
                            cm.sendOk("在頻道的找不到您的隊友。");
                            cm.dispose();
                        } else {
                            cm.getEventManager("cpq").startInstance("" + mapid, cm.getPlayer());
                            cm.dispose();
                        }
                    } else {
                        cm.sendOk("您的隊伍人數不足。");
                        cm.dispose();
                    }
                } else if (cm.getParty() != null && cm.getEventManager("cpq").getInstance("cpq" + mapid).getPlayerCount() == cm.getParty().getMembers().size()) {
                    if (checkLevelsAndMap(30, 50) == 1) {
                        cm.sendOk("隊伍裡有人等級不符合。");
                        cm.dispose();
                    } else if (checkLevelsAndMap(30, 50) == 2) {
                        cm.sendOk("在地圖上找不到您的隊友。");
                        cm.dispose();
                    } else if (checkLevelsAndMap(30, 50) == 3) {
                        cm.sendOk("在頻道的找不到您的隊友。");
                        cm.dispose();
                    } else {
                        var pt = cm.getPlayer().getParty();
                        if (pt.getMembers().size() < 1) {
                            cm.sendOk("需要 1 人以上才可以擂台！！");
                            cm.dispose();
                        } else {
                            //Send challenge packet here
                            var owner = cm.getChannelServer().getPlayerStorage().getCharacterByName(cm.getEventManager("cpq").getInstance("cpq" + mapid).getPlayers().get(0).getParty().getLeader().getName());
                            owner.addCarnivalRequest(cm.getCarnivalChallenge(cm.getChar()));
                            //if (owner.getConversation() != 1) {
                            cm.openNpc(owner.getClient(), 2042001);
                            //}
                            cm.sendOk("您的挑戰已經發送。");
                            cm.dispose();
                        }
                    }
                } else {
                    cm.sendOk("隊伍人數不相符。");
                    cm.dispose();
                }
            } else {
                cm.dispose();
            }
        }
    } else {
        cm.sendOk("怪物擂台未開放。");
        cm.dispose();
    }
}

function checkLevelsAndMap(lowestlevel, highestlevel) {
	var party = cm.getParty().getMembers();
	var mapId = cm.getMapId();
	var Ch = cm.getClient().getChannel();
	var valid = 0;
	var inMap = 0;

	var it = party.iterator();
	while (it.hasNext()) {
		var cPlayer = it.next();
		if (!(cPlayer.getLevel() >= lowestlevel && cPlayer.getLevel() <= highestlevel) && cPlayer.getJobId() != 900) {
			valid = 1;
		}
		if (cPlayer.getMapid() != mapId) {
			valid = 2;
		}
		if (cPlayer.getChannel() != Ch) {
			valid = 3;
		}
	}
	return valid;
}

function getCPQField(fieldnumber) {
	var status = "";
	var event1 = cm.getEventManager("cpq");
	if (event1 != null) {
		var event = event1.getInstance("cpq" + (980000000 + (fieldnumber * 100)));
        if (event == null && fieldnumber == 1) { // 1 VS 1
            status = "擂台賽場地 " + fieldnumber + "(1v1)";
        } else if (event == null && fieldnumber != 5 && fieldnumber != 6) {
			status = "擂台賽場地 " + fieldnumber + "(2v2)";
		} else if (event == null) {
			status = "擂台賽場地 " + fieldnumber + "(3v3)";
		} else if (event != null && (event.getProperty("started").equals("false"))) {
			var averagelevel = 0;
			for (i = 0; i < event.getPlayerCount(); i++) {
				averagelevel += event.getPlayers().get(i).getLevel();
			}
			averagelevel /= event.getPlayerCount();
			status = event.getPlayers().get(0).getParty().getLeader().getName() + "/" + event.getPlayerCount() + "人/平均等級 " + averagelevel;
		}
	}
	return status;
}
