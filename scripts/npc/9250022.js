/*
 六手邪神 -- 入口NPC
 */
var objDate = new Date();
var Month = objDate.getMonth();
var MonthS = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
var tzc = objDate.getDate();
var day = objDate.getDay();
var Year = objDate.getFullYear();
var 每日幾場 = 7;
var bossName   = "六手邪神";
var bossNamelog = "" + Year + "年" + MonthS[Month] + tzc + "日" + bossName + "";
var 最小等級 = 80;
var 最大等級 = 255;
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
	PLAYER   = cm.getPlayer();
	if(PLAYER.getPrizeLog(bossNamelog) >= 每日幾場){
			cm.sendOk("#e您本日挑戰" + bossName + "次數已用盡!!\r\n");
            cm.dispose();
            return;
	}
	if (cm.getPlayer().getMapId() != 501030104) {
		cm.sendOk("要打 #b六手邪神#k 請到 #r#m501030104##k 找我申請吧！！");
        cm.dispose();
	} else if (!cm.haveItem(4031722)) {
		cm.sendOk("不明的力量無法進入，需要有太陽火花。");
		cm.dispose();
	}
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendSimple("#b親愛的 #k#h  ##e\r\n#b是否要挑戰六手邪神副本??#k \r\n#L0##r我要挑戰六手邪神#k#l");
        } else if (status == 1) {
            if (selection == 0) {
                var pt = cm.getPlayer().getParty();
				if (cm.getParty() == null) {
                    cm.sendOk("請組隊再來找我....");
                } else if (!cm.isLeader()) {
                    cm.sendOk("請叫你的隊長來找我!");
                } else if (pt.getMembers().size() < 1) {
                    cm.sendOk("需要 1 人以上的組隊才能進入！!");
                    cm.dispose();
                } else {
                    var party = cm.getParty().getMembers();
                    var mapId = cm.getMapId();
                    var next = true;
                    var levelValid = 0;
                    var inMap = 0;
					/*
                    var it = party.iterator();
                    while (it.hasNext()) {
                        var cPlayer = it.next();
                        if ((cPlayer.getLevel() >= 90 && cPlayer.getLevel() <= 200) || cPlayer.getJobId() == 900) {
                            levelValid += 1;
                        } else {
                            next = false;
                        }
                        if (cPlayer.getMapid() == mapId) {
                            inMap += (cPlayer.getJobId() == 900 ? 3 : 1);
                        }
                    }
                    if (party.size() > 3 || inMap < 1) {
                        next = false;
                    }
					*/
                    if (checkFirstTeam()) {
                        var em = cm.getEventManager("Ravana");
                        if (em == null) {
                            cm.sendOk("當前副本有問題，請聯絡管理員....");
                        } else {
                            var prop = em.getProperty("state");
                            if (prop.equals("0") || prop == null) {
								if(cm.getMap(501030105).getCharactersSize() > 0){
									cm.sendOk("裡面已經有人在挑戰...");
									cm.dispose();
									return;
								}
                                //em.startInstance(cm.getParty(), cm.getMap());
								em.startInstancepartylog(cm.getParty(), cm.getMap(), bossNamelog);
                                cm.dispose();
                                return;
								
                            } else {
                                cm.sendOk("裡面已經有人在挑戰...");
                            }
                        }
                    } else {
                        cm.sendOk("#e請確認隊員 #r等級#k 以及 #r集結狀況#k\r\n"+
					   "以及隊員是否已挑戰 #r"+每日幾場+"#k 次 #b"+bossName+"#k");
					   cm.safeDispose_2();
                    }
                }
                cm.dispose();
            }
        }
    }
}

function checkFirstTeam(){
   var PLAYER   = cm.getPlayer();
   var party = PLAYER.getParty();
   var partyMembers  = party.getMembers();//LinkedList
   if(!PLAYER.partyIsGather()){ //隊伍集結狀況
      return false;
   }

   for each(maplePartyPlayer in partyMembers){
      playerLv = maplePartyPlayer.getLevel();
      if(最小等級 > playerLv || playerLv > 最大等級 ){
         return false;//不符合條件確定
      }
   }
	var it = partyMembers.iterator();
	var playersToDeductCardFrom = [];

	while (it.hasNext()) {
		var cPlayer = it.next();
		var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
		if (ccPlayer.getPrizeLog(bossNamelog) >= 每日幾場) {
			return false;
		}
	}
   return true;
}