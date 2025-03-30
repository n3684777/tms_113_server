
var status = -1;
importPackage(java.util); //ArrayList.
importPackage(java.awt);  //Point.
importPackage(Packages.server.life); //OverrideMonsterStats.

var PLAYER;
var objDate = new Date();
var Month = objDate.getMonth();
var MonthS = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
var tzc = objDate.getDate();
var day = objDate.getDay();
var Year = objDate.getFullYear();




var 需要道具 = 4000000;
var 道具需要數量 = 1;


///獎勵地圖設定
var 獎勵地圖 = 209000700;

//禮物箱子施放位置在下方，請至獎勵地圖使用!mypos 設定你要的路徑
//箱子不是反應物 是怪物代碼
var 箱子代碼 = 9700036;

//隨機獎品
var itemList = new Array(5010000, 2022468, 5010002);
var 固定獎勵 = 4000208;
var 固定獎勵數量 = 1;

var randNum = Math.floor(Math.random()*(itemList.length));
var randItem = itemList[randNum];
var 每天遊玩次數 =100;
var 副本紀錄log = "聖誕雪人";
var 副本挑戰人數 = 1;//最高6人


function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    cm.dispose();
		return;
	}
	status--;
    }
    switch(cm.getPlayer().getMapId()) {
	case 104040000:
		cm.saveLocation("CHRISTMAS");
		cm.warp(889100100);
		cm.dispose();
	    break;
	case 889100100:
    	if (status == 0) {
	        cm.sendSimple("安安 聽說雪人被雪精靈中出了 請各位強大的中路保護雪人#b\r\n\r\n#L2#保護雪人 (等級 70 以上)#l");
    	} else if (status == 1) {
                var level = cm.getPlayerStat("LVL");
	        if (selection == 0 && level <= 10 || level <= 30) {
		    cm.warp(889100000,0); //exit map lobby
		    cm.dispose();
		} else if (selection == 1 && level <= 30 || level <= 70) {
		    cm.warp(889100010,0); //exit map lobby
		    cm.dispose();
		} else if (selection == 2 && level >= 70) {
		    cm.warp(889100020,0); //exit map lobby
		    cm.dispose();
                } else {
		    cm.sendOk("你的等級不夠或是超過");
		    cm.dispose();
                }
        }
	    break;
	case 889100000:
	case 889100010:
	case 889100020:
    	    if (status == 0) {
	        cm.sendSimple("勇士安安阿!#b\r\n\r\n#L0#我的巨型魔棒帶好了 我要前往保護雪人#l");
    	    } else if (status == 1) {
			var s = ((cm.getMapId() % 100) / 10) | 0;
   		    var em = cm.getEventManager("Christmas");
    		    if (em == null) {
			cm.sendOk("Please try again later.");
			cm.dispose();
			return;
    		    }
		    if (cm.getPlayer().getParty() == null || !cm.isLeader()) {
			cm.sendOk("請隊長來找我對話");
		    } else {
				
			if(!cm.haveItem(需要道具, 道具需要數量)){
				cm.sendOk("隊長需要準備給我 #i"+需要道具+"# #z"+需要道具+"# - "+道具需要數量+" 個才能進入");
				cm.dispose();
			return;
			}
			var party = cm.getPlayer().getParty().getMembers();
			var mapId = cm.getPlayer().getMapId();
			var next = true;
			var size = 0;
			var it = party.iterator();
			while (it.hasNext()) {
				var cPlayer = it.next();
				var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
				if (ccPlayer == null || ccPlayer.getLevel() < (s == 0 ? 10 : (s == 1 ? 30 : 70))) {
					next = false;
					break;
				}if(ccPlayer.getPrizeLog("" + Year + "年" + MonthS[Month] + tzc + "日" + 副本紀錄log + "") >= 每天遊玩次數){					
					cm.sendOk("請確認你或你的其他隊員本日#r挑戰聖誕雪人的次數#k是否已滿");
					cm.dispose();
					return;
					break;
				}
				size++;
			}	
			if (next && size >= 副本挑戰人數) {
		    		if (em.getInstance("Christmas" + s) == null && checkFirstTeam()) {
						em.startInstance_Party("" + s, cm.getPlayer());
						cm.gainItem(需要道具, -道具需要數量);
						
		    		} else {
					cm.sendOk("請確認你的其他隊員有沒有在這邊");
		    		}
			} else {
				cm.sendOk("必須要 #r"+副本挑戰人數+"#k 人(含)以上");
			}
		    }
	        cm.dispose();
            }
	    break;
	case 889100001:
	case 889100011:
	case 889100021:
		if (cm.getPlayer().getEventInstance() == null) {
			cm.sendOk("中路最後希望 拜託你們了!");
		} else {
			if (!cm.getPlayer().getEventInstance().getProperty("stage").equals("1")) {
				cm.sendOk("中路最後希望 拜託你們了!");
			} else if (cm.getPlayer().getMap().countMonsterById(9400319) > 0 || cm.getPlayer().getMap().countMonsterById(9400320) > 0 || cm.getPlayer().getMap().countMonsterById(9400321) > 0) {
				cm.sendOk("中路最後希望 拜託你們了!");
			} else {
                cm.showEffect(false, "quest/party/clear");
                cm.playSound(false, "Party1/Clear");
				var s = ((cm.getMapId() % 100) / 10) | 0;
				cm.warpParty(獎勵地圖, 0);
				var party = cm.getPlayer().getParty().getMembers();
				var mapId = cm.getPlayer().getMapId();
				var next = true;
				var size = 0;
				var it = party.iterator();
				while (it.hasNext()) {
					var cPlayer = it.next();
					var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
					ccPlayer.gainItem(randItem, 1);
					ccPlayer.gainItem(固定獎勵, 固定獎勵數量);
					cm.givePartyExp((s == 0 ? 2500 : (s == 1 ? 7500 : 20000)));
				}
				//可以使用 !mypos 查座標
				cm.spawnMobOnMap(箱子代碼 ,1 ,-523 ,154 ,獎勵地圖);
				cm.spawnMobOnMap(箱子代碼 ,1 ,-90 ,154 ,獎勵地圖);
				cm.spawnMobOnMap(箱子代碼 ,1 ,336 ,154 ,獎勵地圖);
				cm.spawnMobOnMap(箱子代碼 ,1 ,853 ,154 ,獎勵地圖);
				cm.spawnMobOnMap(箱子代碼 ,1 ,1578 ,154 ,獎勵地圖);
				cm.spawnMobOnMap(箱子代碼 ,1 ,1947 ,154 ,獎勵地圖);
				cm.spawnMobOnMap(箱子代碼 ,1 ,2356 ,154 ,獎勵地圖);
				cm.spawnMobOnMap(箱子代碼 ,1 ,2759 ,154 ,獎勵地圖);
				cm.spawnMobOnMap(箱子代碼 ,1 ,3120 ,154 ,獎勵地圖);
			}
		}
		cm.dispose();
		break;
    }
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