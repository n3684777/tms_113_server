var maps = [952000000, 952010000, 952020000, 952030000, 952040000, 953000000, 953010000, 953020000, 953030000, 953040000, 953050000, 954000000, 954010000, 954020000, 954030000, 954040000, 954050000];
var minLevel = [20, 45, 50, 55, 60, 70, 75, 85, 95, 100, 110, 120, 125, 130, 140, 150, 165];
var maxLevel = [30, 55, 60, 65, 70, 80, 85, 95, 105, 110, 120, 130, 135, 140, 150, 165, 200];

//------------------------------
var objDate = new Date();
var Month = objDate.getMonth();
var MonthS = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
var tzc = objDate.getDate();
var Year = objDate.getFullYear();
//-------------------------------

var 需求道具 = 5220001;
var 需求道具數量 = 1;
var limit = 5; // 挑戰次數
var bossName = "怪物公園";
var onlyLeaderNeedsItem = true; // 若為 true，則僅檢查隊長是否有道具；若為 false，則檢查所有隊員

function start() {
    PLAYER = cm.getPlayer();
    bossNamelog = Year + "年" + MonthS[Month] + tzc + "日" + bossName;
    var remainTimes = limit - PLAYER.getPrizeLog(bossNamelog); 
    remainTimes = remainTimes <= 0 ? 0 : remainTimes;
    
    var selStr = "你想進入哪個階段的怪物區？\r\n\r\n#b";
    selStr += "每日次數 " + limit  + " 次 #b <今日剩餘 : "+remainTimes+" 次>\r\n#k";
    for (var i = 0; i < maps.length; i++) {
        selStr += "#L" + i + "##m" + maps[i] + "# (建議等級 Lv." + minLevel[i] + " - " + maxLevel[i] + ")#l\r\n";
    }
    cm.sendSimple(selStr);
}

function action(mode, type, selection) {
    
    if (mode == 1 && selection >= 0 && selection < maps.length) {
        if (cm.getParty() == null || !cm.isLeader()) {
            cm.sendOk("請你的隊長帶您進入地圖或您自己成為隊長");
        } else {
            var party = cm.getParty().getMembers().iterator();
            var next = true;
            while (party.hasNext()) {
                var cPlayer = party.next();
                if (cPlayer.getLevel() < minLevel[selection] || cPlayer.getLevel() > maxLevel[selection] || cPlayer.getMapid() != cm.getMapId()) {
                    next = false;
                } 
            }
            if (!next) {
                cm.sendOk("請確保所有隊員都在地圖中並確保隊員等級都有符合要求。");
            } else {
                if(checkFirstTeam(minLevel[selection], maxLevel[selection])){            
                    var em = cm.getEventManager("MonsterPark");
                    if (em == null || em.getInstance("MonsterPark" + maps[selection]) != null) {
                        cm.sendOk("已經有人在這個系列的地圖中進行活動囉.");
                    } else {
                        em.startInstance_Party("" + maps[selection], cm.getPlayer());
                    }
                } else {
                    cm.sendOk("#e請確認隊員 #r等級#k 以及 #r集結狀況#k\r\n"+
                               "以及隊員是否已挑戰 #r"+limit+"#k 次#k"+bossName+"\r\n\r\n並確保所需道具數量。");
                }
            }
        }
    }

    cm.dispose();
}

function checkFirstTeam(minLevel, maxLevel) {
    var party = PLAYER.getParty();
    var partyMembers = party.getMembers();

    if (!PLAYER.partyIsGather()) {
        return false;
    }

    // 檢查所有隊員的等級
    for (var i = 0; i < partyMembers.length; i++) {
        var playerLv = partyMembers[i].getLevel();
        if (minLevel > playerLv || playerLv > maxLevel) {
            return false;
        }
    }

    // 檢查道具和挑戰次數
    var playersToDeductCardFrom = [];
    if (onlyLeaderNeedsItem) {
        // 只檢查隊長
        var leader = cm.getPlayer();
        if (leader.getPrizeLog(bossNamelog) >= limit || !leader.haveItem(需求道具, 需求道具數量)) {
            return false;
        }
        playersToDeductCardFrom.push(leader);
    } else {
        // 檢查所有隊員
        var it = partyMembers.iterator();
        while (it.hasNext()) {
            var cPlayer = it.next();
            var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
            if (ccPlayer.getPrizeLog(bossNamelog) >= limit || !ccPlayer.haveItem(需求道具, 需求道具數量)) {
                return false;
            }
            playersToDeductCardFrom.push(ccPlayer);
        }
    }

    // 扣除道具和更新日志
    for (var i = 0; i < playersToDeductCardFrom.length; i++) {
        var player = playersToDeductCardFrom[i];
        player.gainItem(需求道具, -需求道具數量);
        player.setPrizeLog(bossNamelog);
    }

    return true;
}
