

var 需求道具 = 5220001;
var 需求道具數量 = 1;
var limit = 5; // 挑戰次數
var bossName = "鬼娃恰吉";
var 最低人數 = 2;
var 最小等級 = 50;
var 最大等級 = 200;

function action(mode, _type, selection) {
	PLAYER = cm.getPlayer();
    bossNamelog = Year + "年" + MonthS[Month] + tzc + "日" + bossName;
    var remainTimes = limit - PLAYER.getPrizeLog(bossNamelog); 
    remainTimes = remainTimes <= 0 ? 0 : remainTimes;
    if (mode == 1) {
        status++;
    } else {
        cm.dispose();
        return;
    }

    switch (status) {
        case 0:{
			var selStr = "#e#b< 歡迎來到 "+bossName+" 副本任務 >#n#k\r\n\r\n#b";
			selStr += "#b每日次數#k : " + limit  + " 次  #r<今日剩餘 : "+remainTimes+" 次>#k\r\n";
			selStr += "#b需求道具#k : #z" + 需求道具  + "# #r< 需要 "+需求道具數量+" 個>#k\r\n#k";
			selStr += "#b最低人數#k : "+最低人數+" 人\r\n#k";
			selStr += "#b最小等級#k : "+最小等級+" 人\r\n#k";
			selStr += "#b最大等級#k : "+最大等級+" 人\r\n#k";
			
			cm.sendOk(selStr);
            break;
        }
		case 1: {
			if (cm.getParty() == null) {
				cm.sendOk("請組隊再來找我");
			} else if (!cm.isLeader()) {
				cm.sendOk("請叫你的隊長來找我!");
			} else {
			var party = cm.getParty().getMembers();
			var mapId = cm.getMapId();
			var next = true;
			var levelValid = 0;
			var inMap = 0;

			var it = party.iterator();
			while (it.hasNext()) {
				var cPlayer = it.next();
				if ((cPlayer.getLevel() >= 最小等級 && cPlayer.getLevel() <= 最大等級) || cPlayer.getJobId() == 900) {
					levelValid += 1;
				} else {
					next = false;
				}
				if (cPlayer.getMapid() == mapId) {
					inMap += (cPlayer.getJobId() == 900 ? 4 : 1);
				}
			}
			if (party.size() > 最低人數 || inMap < 最低人數) {
				next = false;
			}
			if (next) {
				if(checkFirstTeam(最小等級, 最大等級)){ 
					var em = cm.getEventManager("QiajiPQ");
					if (em == null) {
						cm.sendOk("找不到腳本，請聯繫GM！");
						cm.dispose();
						return;		
					} else {
					var prop = em.getProperty("state");
					if (prop == null || prop.equals("0")) {
						em.startInstance(cm.getParty(),cm.getMap());
					} else {
						cm.sendOk("已經有隊伍在裡面挑戰了。");
						cm.dispose();
						return;
						}
					}
				}else{
					cm.sendOk("#e請確認隊員\r\n"+
                              "是否已挑戰 #r"+limit+"#k 次#k"+bossName+"\r\n\r\n並確保隊員身上都有#r #v"+需求道具+"# #z"+需求道具+"# "+需求道具數量+" 個");
				}
				
			} else {
				cm.sendOk("請確認隊伍的人數、等級，以及是否所有隊員都在這裡。");
				cm.dispose();
				return;
				}
			}
			cm.dispose();
	
			break;
		}
    }
}

var status = -1;
//------------------------------
var objDate = new Date();
var Month = objDate.getMonth();
var MonthS = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
var tzc = objDate.getDate();
var day = objDate.getDay();
var Year = objDate.getFullYear();
//-------------------------------


function checkFirstTeam(minLevel, maxLevel){
    var party = PLAYER.getParty();
    var partyMembers  = party.getMembers();
    if(!PLAYER.partyIsGather()){ 
        return false;
    }

    for (var i = 0; i < partyMembers.length; i++) {
        var playerLv = partyMembers[i].getLevel();
        if(minLevel > playerLv || playerLv > maxLevel ){
            return false;
        }
    }

    var it = partyMembers.iterator();
    var playersToDeductCardFrom = [];

    while (it.hasNext()) {
        var cPlayer = it.next();
        var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
        if (ccPlayer.getPrizeLog(bossNamelog) >= limit || !ccPlayer.haveItem(需求道具, 需求道具數量)) {
            return false;
        }
        if(ccPlayer.getPrizeLog(bossNamelog) < limit){
			playersToDeductCardFrom.push(ccPlayer);
        }
    }

    for (var i = 0; i < playersToDeductCardFrom.length; i++) {
        var player = playersToDeductCardFrom[i];
        player.gainItem(需求道具, -需求道具數量);
		player.setPrizeLog(bossNamelog);
    }

    return true;
}