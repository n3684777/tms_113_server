/*
* @autor Java
* LeaderMS MapleStory Private Server
* HenesysPQ
* 最後修正 : 卡納谷團隊
*/


/* Variaveis */
var PLAYER;
var objDate = new Date();
var Month = objDate.getMonth();
var MonthS = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
var tzc = objDate.getDate();
var day = objDate.getDay();
var Year = objDate.getFullYear();


var texto = "#r【儘管在月球也要吃到年糕】#k\r\n這是一個有趣又好玩的組隊任務，您將帶領您的隊員突破重重困難，獲得最終甜美的勝利之果。\r\n\r\n";
var map = 390009999;
var status = 0;
var minLevel = 10;
var maxLevel = 200;
var minPlayers = 1;
var maxPlayers = 6;
var item = 4001101;
var item2 = 1002798;
var 每天遊玩次數 = 10;
var 副本紀錄log = "月兔搗藥";

var PQItems = new Array(4001095, 4001096, 4001097, 4001098, 4001099, 40011000);
/* Fim */


function start() {
	status = -1;
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
		if (mode == 1)
			status++;
		else
			status--;
		if(cm.getChar().getMapId()==100000200){
			if (status == 0) {
				cm.sendNext(texto);
			} else if (status == 1) {
				
		cm.sendSimple("您想進入並開始任務嗎?"+
                    "#b\r\n#L0#我想開始任務#l#k"+
                    "#b\r\n#L1#組隊任務介紹#l#b"+
                    "\r\n#L2##t"+item2+"#兌換#l"+
                    "#b\r\n#L3#豬之城介紹#l");
			} else if (status == 2) {
				 
				mySelection = selection;
				switch (mySelection) {
				case 0 : if (cm.getParty() == null) { // 沒有組隊
					cm.sendOk("您沒有組隊，請記得組隊。");
					cm.dispose();
					return;
				}
				if (!cm.isLeader()) { //不是隊伍的隊長。
					cm.sendOk("您不是隊長，請找您的隊長找我。");
					cm.dispose();
				} if (checkLevelsAndMap(minLevel, maxLevel) == 2) { // 請確認隊伍人數以及是否在同個地圖中 
	                          cm.sendOk("請確認隊伍人數以及等級");
                                  cm.dispose();
                                  return;
                                }  else {
					// Check teh partyy
					var party = cm.getParty().getMembers();
					var mapId = cm.getChar().getMapId();
					var next = true;
					var levelValid = 0;
					var inMap = 0;
					// Temp removal for testing
					if (party.size() < minPlayers || party.size() > maxPlayers) 
						next = false;
					else {
						for (var i = 0; i < party.size() && next; i++) {
							if ((party.get(i).getLevel() >= minLevel) && (party.get(i).getLevel() <= maxLevel))
								levelValid += 1;
							if (party.get(i).getMapid() == mapId)
								inMap += 1;
							
						}
						if (levelValid < minPlayers || inMap < minPlayers)
							next = false;
					}  if (next) {
		                  var em = cm.getEventManager("HenesysPQ");
	                          if (em == null) {
	                          cm.sendOk("目前組隊任務關閉中");
							  cm.dispose();
		                  } else {
		                  var prop = em.getProperty("state");
		                  if (prop.equals("0") || prop == null) {
							  if(checkLOG()){
								em.startInstance(cm.getParty(),cm.getChar().getMap());
                                    party = cm.getChar().getEventInstance().getPlayers();
									checkFirstTeam()
									//cm.killAllMonsters(910010000);
									cm.dispose();  
							  }else{
								  cm.sendOk("請確認你或你的其他隊員本日#r挑戰月兔搗藥的次數#k是否已滿");
								  cm.dispose();
							  }
									
		                    } else {
		            	      cm.sendOk("地圖內目前有其他隊伍正在進行任務");
                                      cm.dispose();
		                 }
		               }
	                 } else {
		    cm.sendOk("請確認您的隊伍人數介於 "+minPlayers+" ~ "+maxPlayers+"人之間或等級介於 "+minLevel+" ~ "+maxLevel+" 之間。");
                    cm.dispose();					
					 }
					 break;					 
	       }
				case 1 : cm.sendOk("歡迎來到月兔年糕組隊任務，本組隊至少需要兩人。\r\n" +
									 "請召喚出月兔，並保護好他，月兔會製作出#t"+item+"#"+
									 "再將製作出的道具，交給地圖中的NPC興兒。\r\n"+
									 "完成任務可獲得 2800 點經驗值\r\n"+
									 "每通過一次任務即可獲得一個#r#z"+4031746+"##k集滿30個可兌換\r\n\r\n#v"+item2+"#  #b#z "+item2+"");
						 cm.dispose();
						 break;
				case 2 : 
            if (cm.haveItem(4031746,30)){
					cm.gainItem(4031746,-30);
					cm.gainItem(1002798,1);
					cm.sendOk("恭喜您完成兌換#r#t"+1002798+"#");
					cm.dispose();
				}else{
					cm.sendOk("您的月餅數量不足");
					cm.dispose();
				}
				break;
            case 3 :cm.sendOk("#r豬之城#k\r\n" +
								   "內有鋼鐵肥肥、肥肥、緞帶肥肥\r\n"+
								   "血量攻擊力相同，但經驗值比外面多兩倍\r\n"+
								   "進入地圖後有半小時可停留\r\n"+
                           "#b擊殺怪物有機率打到以下道具#k\r\n\r\n"+
                           "#i"+5220010+"# #z"+5220010+"#\r\n"+
                           "#i"+2002100+"# #z"+2002100+"#\r\n");
						 cm.dispose();
            
            break;
		   }
     }
   } else if(cm.getChar().getMapId() == 910010400){
              if (status == 0){
               for (var i = 0; i < PQItems.length; i++) {
                cm.removeAll(PQItems[i]);
                            } 
                cm.warp(100000200, 0);
                cm.playerMessage("您被帶到弓箭手村");
                cm.dispose();
            }
        } else if (cm.getPlayer().getMapId() == 910010100) {
            if (status==0) {
            cm.sendYesNo("您想回到#r弓箭手村#k嗎?");
            }else if (status == 1){
               for (var i = 0; i < PQItems.length; i++) {
                  cm.removeAll(PQItems[i]);
                            } 
                cm.gainItem(4031746,1);            
                cm.warp(100000200, 0);
                cm.dispose();
            }
        }
    }
}
					
function checkLevelsAndMap(lowestlevel, highestlevel) {
    var party = cm.getParty().getMembers();
    var mapId = cm.getMapId();
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
    }
    return valid;
}

function checkLOG(){
	PLAYER   = cm.getPlayer();
    var party = PLAYER.getParty();
    var partyMembers  = party.getMembers();//LinkedList
	var it = partyMembers.iterator();
	while (it.hasNext()) {
		var cPlayer = it.next();
		var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
		if(ccPlayer.getPrizeLog("" + Year + "年" + MonthS[Month] + tzc + "日" + 副本紀錄log + "") >= 每天遊玩次數){					
					
					return false;
				}
		}
		
   return true;
}

function checkFirstTeam(){
	PLAYER   = cm.getPlayer();
    var party = PLAYER.getParty();
    var partyMembers  = party.getMembers();//LinkedList
	var it = partyMembers.iterator();
	while (it.hasNext()) {
			var cPlayer = it.next();
			var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
			ccPlayer.setPrizeLog("" + Year + "年" + MonthS[Month] + tzc + "日" + 副本紀錄log + "");
				
			
		}
		
   return true;
}
		
                