load('nashorn:mozilla_compat.js');
importPackage(java.util); //ArrayList.
importPackage(java.awt);  //Point.
importPackage(Packages.server.life); //OverrideMonsterStats.

var 藍星 = "#fEffect/CharacterEff/1051296/1/0#";
var 橘星 = "#fEffect/CharacterEff/1102232/0/0#";
var 愛心 = "#fEffect/SetEff/240/effect/0#";
var 鴨鴨 = "#fEffect/SetEff/244/effect/0#";
var 黃箭 = " #fUI/UIWindow.img/VegaSpell/EffectArrow/0# ";
var LUCK = " #fEffect/ItemEff/1112800/0/3# ";
var STAR = "#fEffect/ItemEff/1049000/0/0#";
var 海灘菇菇 = "#fEffect/SetEff/197/effect/4#";
var 海灘狐狸 = "#fEffect/SetEff/197/effect/13#";
var 海灘企鵝 = "#fEffect/SetEff/197/effect/22#";
var 紅星 = " #fUI/GuildMark.img/Mark/Pattern/00004001/1# ";
var 取得 = "#fUI/UIWindow.img/QuestIcon/4/0#\r\n";
var 王冠 = "#fUI/UIWindow.img/UserInfo/bossPetCrown#";
var 手機 = "#fUI/UIWindow.img/UserList/Friend/icon4#";
//----------------------------------
var status = -1;
var em;
var eim;
//------------Date------------
var objDate = new Date();
var Month = objDate.getMonth();
var MonthS = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
var tzc = objDate.getDate();
var day = objDate.getDay();
var Year = objDate.getFullYear();
//-----------Player-----------
var PLAYER;
var playerID;
var playerCh;
var npcID;
//------------Boss------------
var bossInfo;
var bossCh;
var bossName;
var boss;
var maxMember;
var reqLowLv;
var reqHigLv;
var time;  
var limit;
var reqItem;
var reqItemQ;
var usereqItem;
var bossMapID;
var bossID;
var bossAdjHp;
var bossExpMul;
var bossPos;
var reqItemMap;
var reqStuff;

var _BossInfo = [ ];

/***********************************************/
function start() {
   action(1, 0, 0);
}

function action(mode, type, selection) {
   status = (mode == 1 ? status+1 : cm.dispose());
//-------------------------------------------------
   PLAYER   = cm.getPlayer();
   playerID = PLAYER.getId();
   playerCh = PLAYER.getClient().getChannel();
   npcID    = cm.getNpc();
   
   if(status == 0){
      if(_BossInfo[npcID] == null){
         cm.dispose(); return;
      }
      
      cm.sendOk(getBossInfo());
   }

   else if(status == 1){
	    if(PLAYER.getPrizeLog(bossNamelog) >= limit && PLAYER.getPrizeLog(使用BOSS增加卡) >= 遠征增加次數){
			cm.sendOk("#e您本日挑戰" + bossName + "次數已用盡!!\r\n您還可以使用的遠征場次增加卡次數為 #r"+(遠征增加次數 - PLAYER.getPrizeLog(使用BOSS增加卡))+"#k 次");
            cm.dispose();
            return;
		}
         em  = cm.getEventManager(boss);
		 if (em == null) {
			cm.sendOk("本遠征尚未開放，可嘗試與服主抗議。");
			cm.dispose();
			return;
			}
         eim = em.getInstance(boss);
         if(eim == null) 
			 eim = em.newInstance(boss);
         var started = eim.getProperty("start");        
         if(started == null){//未開始
            if(cm.getParty() == null){//玩家沒組隊
               cm.sendOk("#e冒險家請務必要組隊前往挑戰"+bossName+"!!");
               cm.dispose(); return;
            }else{//玩家組好隊伍
               if(cm.isLeader()){//如果是隊長
                  var pt = cm.getPlayer().getParty();
                  if(pt.getMembers().size() < minMember){
                     cm.sendOk("#e您的隊伍人數不足 "+minMember+" 人\r\n");
                     cm.dispose(); return;
                  }
                  if(reqItem == 0 || cm.haveItem(reqItem, reqItemQ)){
                     隊伍入場 = 1;
					 var nextmap = cm.getC().getChannelServer().getMapFactory().getMap(bossMapID);
                      if(nextmap > 0){
                        cm.sendOk("目前地圖內#r【有隊伍】#k正在進行遠征喔");
                        cm.dispose(); 
                        return;
                      }
                     if(maxMember <= 6){
						if(單人入場卡 > 0 && maxMember <= 6){
							if(!cm.getPlayer().haveItem(單人入場卡, 1)){
								cm.sendOk("#e冒險者~如果要單人入場，你需要有  #v"+單人入場卡+"#  我才可以讓你進去\r\n");
								cm.dispose(); return;
							}
						}
                        cm.sendNext("#e隊長您好，請問要開始遠征挑戰了嗎？");
                     }else{
                        cm.sendGetText("#e冒險者們...都準備好了嗎 ?\r\n#n"+
                                    " #b冒險者本趟遠征隊有沒有第二支隊伍呢 ?? \r\n"+
                                    "如果有的話 ! 請告訴我第二隊隊長的名稱<名稱必須正確完整>\r\n"+
                                    "#r若沒有 請直接選擇 【確定】");
                     }
                  }else{
                     cm.sendOk("#e冒險者~你需要有#v"+reqItem+"#" + reqItemQ + "個我才可以讓你們進去\r\n");
                     cm.dispose(); return;
                  }
               }else{//是隊員
                  cm.sendOk("#e請靜候隊長的指示與安排!!");
                  cm.dispose(); return;
               }
            }
         }else{//已開始
            if(eim.getProperty("member"+playerID) == 1){
               em.startInstance(PLAYER);
               cm.safeDispose_2();
            }else{
               if(cm.isLeader() && eim.getProperty(PLAYER.getName()) == "1" ){
				  隊伍入場 = 2;
                  cm.sendAcceptDecline("#e是第二隊伍啊 ! 都準備好了嗎 ? ");
               }else{
                  cm.sendOk("#e目前有隊伍正在進行挑戰");
                  cm.safeDispose_2();
               }               
            }
         }  
   }

   else if(status == 2){//First Team Enter
    if(隊伍入場 == 1){
		  if(checkFirstTeam()){//確認隊伍成員是否符合資格
			 em.startInstancepartylog(cm.getParty(), cm.getMap(), bossNamelog);
			 if (usereqItem) {
			    cm.getPlayer().gainItem(reqItem, -reqItemQ);
			 }
			 if(started == null){
             if(maxMember <= 6){
				if(單人入場卡 > 0 && maxMember <= 6){
					if(cm.getPlayer().haveItem(單人入場卡, 1)){
						cm.getPlayer().gainItem(單人入場卡, -1);
					}else{
						cm.sendOk("#e冒險者~如果要單人入場，你需要有  #v"+單人入場卡+"#  我才可以讓你進去\r\n");
						cm.dispose(); return;
					}
				}
               spawnBoss();
               eim.startEventTimer(time);//設定時間
               cm.safeDispose_2(); 
             }else{
				eim.setProperty(cm.getText(), "1");
				spawnBoss();
				eim.startEventTimer(time);//設定時間
				cm.safeDispose_2();
            }
			 }
		  }else{
			cm.sendOk("#e請確認隊員 #r等級#k 以及 #r集結狀況#k\r\n"+
					   "以及隊員是否已挑戰 #r"+limit+"#k 次 #b"+bossName+"#k、遠征次數、次數增加卡是否用盡");
					   cm.safeDispose_2();
		  }

	   }
	if(隊伍入場 == 2){
			if(checkSecondTeam()){//確認隊伍成員是否符合資格
				em.startInstancepartylog(cm.getParty(), cm.getMap(), bossNamelog);
				eim.setProperty(PLAYER.getName(), "0");
				cm.safeDispose_2();
			}else{
			cm.sendOk("#e請確認隊員 #r等級#k 以及 #r集結狀況#k\r\n"+
					   "以及隊員是否已挑戰 #r"+limit+"#k 次 #b"+bossName+"#k、遠征次數、次數增加卡是否用盡");
					   cm.safeDispose_2();
			}
		}
	}
}

function checkFirstTeam(){
   var party = PLAYER.getParty();
   var partyMembers  = party.getMembers();//LinkedList
   if(!PLAYER.partyIsGather()){ //隊伍集結狀況
      return false;
   }

   for(maplePartyPlayer in partyMembers){
      playerLv = partyMembers[maplePartyPlayer].getLevel();
      if(reqLowLv > playerLv || playerLv > reqHigLv ){
         return false;//不符合條件確定
      }
   }
	var it = partyMembers.iterator();
	var playersToDeductCardFrom = [];

	while (it.hasNext()) {
		var cPlayer = it.next();
		var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
		if (ccPlayer.getPrizeLog(bossNamelog) >= limit && ccPlayer.getPrizeLog(使用BOSS增加卡) >= 遠征增加次數) {
			return false; //队员超过远征次数
		}
		if (ccPlayer.getPrizeLog(bossNamelog) >= limit) {
			if (ccPlayer.haveItem(BOSS場次增加卡, 1) && ccPlayer.getPrizeLog(使用BOSS增加卡) <= 遠征增加次數) {
				playersToDeductCardFrom.push(ccPlayer); // 把需要扣卡的玩家添加到列表中，稍后处理
			} else {
				return false; //队员超过远征次数
			}
		}
	}

	// 所有队员都检查完后，开始扣卡
	for (var i = 0; i < playersToDeductCardFrom.length; i++) {
		var player = playersToDeductCardFrom[i];
		player.gainItem(BOSS場次增加卡, -1);
		player.setPrizeLog(使用BOSS增加卡); //这里是设置玩家账号已领过记录
	}

   return true;
}

function checkSecondTeam(){
   var party = PLAYER.getParty();
   var partyMembers  = party.getMembers();//LinkedList

   if(!PLAYER.partyIsGather()){ //隊伍集結狀況
      return false;
   }

   for(maplePartyPlayer in partyMembers){
      playerLv = partyMembers[maplePartyPlayer].getLevel();
      if(reqLowLv > playerLv || playerLv > reqHigLv ){
         return false;//不符合條件
      }
   }
    var it = partyMembers.iterator();
	var playersToDeductCardFrom = [];

	while (it.hasNext()) {
		var cPlayer = it.next();
		var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
		if (ccPlayer.getPrizeLog(bossNamelog) >= limit && ccPlayer.getPrizeLog(使用BOSS增加卡) >= 遠征增加次數) {
			return false; //队员超过远征次数
		}
		if (ccPlayer.getPrizeLog(bossNamelog) >= limit) {
			if (ccPlayer.haveItem(BOSS場次增加卡, 1) && ccPlayer.getPrizeLog(使用BOSS增加卡) <= 遠征增加次數) {
				playersToDeductCardFrom.push(ccPlayer); // 把需要扣卡的玩家添加到列表中，稍后处理
			} else {
				return false; //队员超过远征次数
			}
		}
	}

	// 所有队员都检查完后，开始扣卡
	for (var i = 0; i < playersToDeductCardFrom.length; i++) {
		var player = playersToDeductCardFrom[i];
		player.gainItem(BOSS場次增加卡, -1);
		player.setPrizeLog(使用BOSS增加卡); //这里是设置玩家账号已领过记录
	}	

   return true;
}

function getBossInfo(){
   bossInfo   = _BossInfo[npcID];
   bossCh = Array.isArray(bossInfo[0]) ? bossInfo[0] : [bossInfo[0]];
   bossName   = bossInfo[1];
   boss       = bossInfo[2];
   maxMember  = bossInfo[3];
   reqLowLv   = bossInfo[4];
   reqHigLv   = bossInfo[5];
   time       = bossInfo[6];
   limit      = bossInfo[7];
   reqItem    = bossInfo[8];
   reqItemQ   = bossInfo[9];
   usereqItem = bossInfo[10];
   bossMapID  = bossInfo[11];
   bossID     = bossInfo[12];
   bossAdjHp  = bossInfo[13];
   bossExpmul = bossInfo[14];
   bossPos    = bossInfo[15];
   reward     = bossInfo[16];
   遠征開關   = bossInfo[17];
   minMember  = bossInfo[18];
   遠征增加次數   = bossInfo[19];
   BOSS場次增加卡 = 4460020;//4032246   4460020
   單人入場卡 = 0;// 0 = 無限制 副本最大入場人數必須設定 6 人或6人以內才生效
   if(遠征開關 == 0){
      cm.dispose();
      return ""+bossName+" 遠征目前沒有開放哦！";
   }   
    var isChannelAllowed = false;
    for (var i = 0; i < bossCh.length; i++) {
        if (bossCh[i] === playerCh) {
            isChannelAllowed = true;
            break;
        }
    }

    if (bossCh.length > 0 && !isChannelAllowed) {
        cm.dispose();
        var chList = bossCh.join("、");
        return "想挑戰 " + bossName + " 請到 " + chList + " 頻道哦";
    }
   
   使用BOSS增加卡 = "" + Year + "年" + MonthS[Month] + tzc + "日使用BOSS增加卡"+bossName;
   bossNamelog = "" + Year + "年" + MonthS[Month] + tzc + "日" + bossName + "";
   var remainTimes = (limit - PLAYER.getPrizeLog(bossNamelog)); 
   remainTimes = (remainTimes <= 0 ? 0 : remainTimes);
   
   var remainTimes_2 = (遠征增加次數 - PLAYER.getPrizeLog(使用BOSS增加卡)); 
   remainTimes_2 = (remainTimes_2 <= 0 ? 0 : remainTimes_2);
   var str = "";
   
   str += "#e\t\t\t"+王冠+ bossName +"遠征隊"+王冠+"\r\n\r\n#n";
   str += "人數限制"  +黃箭+ minMember + - + maxMember + " 人\r\n";
   str += "等級要求" +黃箭+ reqLowLv  + " ~ " + reqHigLv+ " 級\r\n";
   str += "時間限制" +黃箭+ (time/60000)  + " 分鐘\r\n";
   str += "每日次數" +黃箭+ limit  + " 次 #b<今日剩餘 : "+remainTimes+" 次>\r\n#k";
   str += "增加次數" +黃箭+ 遠征增加次數  + " 次 #b<今日剩餘 : "+remainTimes_2+" 次>\r\n#k";
   if(單人入場卡 > 0 && maxMember <= 6){
	   str += "單人入場" +黃箭+" #z"+單人入場卡+"#\r\n\r\n#k";
   }
   str += LUCK+LUCK+LUCK+LUCK+"挑戰成功有概率獲得"+LUCK+LUCK+LUCK+LUCK;
   str += "\r\n\r\n";
   for (var i=0; i<reward.length; i++){
      str += "#v"+reward[i]+"# ";
   }
   str += "\r\n";
   
   str += (reqItem != 0 ? "#b#L1#"+STAR+"我已經準備好 #v"+reqItem+"# 準備前往挑戰#l#k\r\n\r\n" : "#b#L1#"+STAR+"準備前往挑戰#l#k\r\n\r\n");

   return str ;
   
}
//---------------------------------------------------------
_BossInfo['2043000'] = [
[1, 2, 3, 4, 5, 6],                         //限制頻道，如不想限制請填選 0
"拉圖斯",                    //怪物名稱
"PapBattle",                 //副本名稱
12,                          //限制人數
100, 250,                     //等級要求
1000 * 60 * 60 * 3,          //限制時間
20,                           //每日次數
4031179,                     //需求道具
1,                          //需求道具數量
false,                   //是否消耗需求道具
220080001,                   //魔王地圖
"觸發反應物召喚免怪物編號",  //怪物編號
0,                           //調整血量
1,                           //經驗倍率
new Point(0, 0),             //魔王座標
[                            //掉落道具
4000003,4000003,4000003,4000003,
], 
1,							 //遠征開關 0 = 關 ； 1 = 開
1,                            //隊伍最小人數，請勿設定超過 6 人(含)以上的人數
5,							 //遠征場次增加次數
];
//---------------------------------------------------------
_BossInfo['2030013'] = [ //依Npc編號 取得 魔王相關資訊 
[1, 2, 3, 4, 5, 6],                        //限制頻道，如不想限制請填選 0
"殘暴炎魔",                  //怪物名稱
"ZakumBattle",               //副本名稱
6,                          //限制人數
100, 250,                     //等級要求
1000 * 60 * 60 * 3,          //限制時間
100,                          //每日次數
4001017,                           //需求道具
1,                          //需求道具數量
false,                   //是否消耗需求道具
280030000,                   //魔王地圖
"觸發反應物召喚免怪物編號",  //怪物編號
0,                           //調整血量
1,                           //經驗倍率
new Point(0, 0),             //魔王座標
[                            //掉落道具
4000003,4000003,4000003,4000003,4000003,4000003,
], 
1,							 //遠征開關 0 = 關 ； 1 = 開
1,                            //隊伍最小人數，請勿設定超過 6 人(含)以上的人數
5,							 //遠征場次增加次數
];
//---------------------------------------------------------
_BossInfo['9270047'] = [
[1, 2, 3, 4, 5, 6],                      //限制頻道，如不想限制請填選 0
"夢幻公園",                  //怪物名稱
"ScarTarBattle",             //副本名稱
12,                          //限制人數
100, 250,                     //等級要求
1000 * 60 * 60 * 3,                       //限制時間
2,                           //每日次數
4032246,                     		 //需求道具
1,                          //需求道具數量
false,                   //是否消耗需求道具
551030200,                   //魔王地圖
"觸發反應物召喚免怪物編號",  //怪物編號
0,                           //調整血量
1,                           //經驗倍率
new Point(0, 0),             //魔王座標
[                            //掉落道具
4000003,4000003
], 
1,							 //遠征開關 0 = 關 ； 1 = 開
1,                            //隊伍最小人數，請勿設定超過 6 人(含)以上的人數
5,							 //遠征場次增加次數
];
//---------------------------------------------------------
_BossInfo['9120201'] = [ //依Npc編號 取得 魔王相關資訊 
[1, 2, 3, 4, 5, 6],                         //限制頻道，如不想限制請填選 0
"黑道長老",                  //怪物名稱
"TheBossBattle",             //副本名稱
12,                          //限制人數
120, 250,                    //等級要求
1000 * 60 * 60 * 3,          //限制時間
30,                           //每日次數
4000138,                     //需求道具
1,                          //需求道具數量
false,                   //是否消耗需求道具
801040100,                   //魔王地圖
"觸發反應物召喚免怪物編號",  //怪物編號
0,                           //調整血量
1,                           //經驗倍率
new Point(0, 0),             //魔王座標
[                            //掉落道具
4000003,4000003,
], 
1,							 //遠征開關 0 = 關 ； 1 = 開
1,                            //隊伍最小人數，請勿設定超過 6 人(含)以上的人數
5,							 //遠征場次增加次數
];
//---------------------------------------------------------
_BossInfo['2083004'] = [
[1, 2, 3, 4, 5, 6],                          //限制頻道，如不想限制請填選 0
"闇黑龍王",                  //怪物名稱
"HorntailBattle",            //副本名稱
12,                          //限制人數
120, 250,                    //等級要求
1000 * 60 * 60 * 3,          //限制時間
100,                           //每日次數
0,                     //需求道具
0,                          //需求道具數量
false,                   //是否消耗需求道具
240060200,                   //魔王地圖
"觸發反應物召喚免怪物編號",  //怪物編號
0,                           //調整血量
1,                           //經驗倍率
new Point(0, 0),             //魔王座標
[                            //掉落道具
4000003,4000003,4000003,4000003,4000003,4000003,
], 
1,							         //遠征開關 0 = 關 ； 1 = 開
1,                            //隊伍最小人數，請勿設定超過 6 人(含)以上的人數
5,							 //遠征場次增加次數
];
//---------------------------------------------------------
_BossInfo['2141001'] = [
[1, 2, 3, 4, 5, 6],                        //限制頻道，如不想限制請填選 0
"皮卡啾",                    //怪物名稱
"PinkBeanBattle",            //副本名稱
12,                          //限制人數
120, 250,                    //等級要求
1000 * 60 * 60 * 3,                     //限制時間
2,                           //每日次數
0,                     //需求道具
0,                          //需求道具數量
false,                   //是否消耗需求道具
270050100,                   //魔王地圖
8820001,  //怪物編號
0,                           //調整血量
1,                           //經驗倍率
new Point(-12, -42),             //魔王座標
[                            //掉落道具
4000003,4000003,4000003,4000003,4000003,
], 
1,							 //遠征開關 0 = 關 ； 1 = 開
1,                            //隊伍最小人數，請勿設定超過 6 人(含)以上的人數
5,							 //遠征場次增加次數
];
//---------------------------------------------------------
_BossInfo['9120039'] = [
[1, 2, 3, 4, 5, 6],                        //限制頻道，如不想限制請填選 0
"尼貝龍根",                  //怪物名稱
"Nibergen",                  //副本名稱
12,                          //限制人數
120, 250,                    //等級要求
1000 * 60 * 60 * 3,                     //限制時間
5,                           //每日次數
0,                           //需求道具
0,                          //需求道具數量
false,                   //是否消耗需求道具
802000611,                   //魔王地圖
"擊殺怪物觸發召喚免怪物編號",//怪物編號
0,                           //調整血量
1,                           //經驗倍率
new Point(13, 173),          //魔王座標
[                            //掉落道具
4000003,4000003,
], 
1,							 //遠征開關 0 = 關 ； 1 = 開
1,                            //隊伍最小人數，請勿設定超過 6 人(含)以上的人數
5,							 //遠征場次增加次數
];
//---------------------------------------------------------
_BossInfo['9120037'] = [
[1, 2, 3, 4, 5, 6],                         //限制頻道，如不想限制請填選 0
"杜那斯",                    //怪物名稱
"Dunas",                     //副本名稱
12,                          //限制人數
120, 250,                    //等級要求
1000 * 60 * 60 * 3,                     //限制時間
5,                           //每日次數
0,                           //需求道具
0,                          //需求道具數量
false,                   //是否消耗需求道具
802000411,                   //魔王地圖
"擊殺怪物觸發召喚免怪物編號",//怪物編號
0,                           //調整血量
1,                           //經驗倍率
new Point(2417, -6),         //魔王座標
[                            //掉落道具
4000003,4000003,
], 
1,							 //遠征開關 0 = 關 ； 1 = 開
1,                            //隊伍最小人數，請勿設定超過 6 人(含)以上的人數
5,							 //遠征場次增加次數
];
//---------------------------------------------------------
_BossInfo['9120036'] = [
[1, 2, 3, 4, 5, 6],                         //限制頻道，如不想限制請填選 0
"無名魔獸",                  //怪物名稱
"NamelessMagicMonster",      //副本名稱
12,                          //限制人數
120, 250,                    //等級要求
1000 * 60 * 60 * 3,                     //限制時間
5,                           //每日次數
0,                           //需求道具
0,                          //需求道具數量
false,                   //是否消耗需求道具
802000111,                   //魔王地圖
"擊殺怪物觸發召喚免怪物編號",//怪物編號
0,                           //調整血量
1,                           //經驗倍率
new Point(334, 45),          //魔王座標
[                            //掉落道具
4000003,4000003,
], 
1,							 //遠征開關 0 = 關 ； 1 = 開
1,                            //隊伍最小人數，請勿設定超過 6 人(含)以上的人數
5,							 //遠征場次增加次數
];
//---------------------------------------------------------
_BossInfo['9120050'] = [
[1, 2, 3, 4, 5, 6],                         //限制頻道，如不想限制請填選 0
"奧芙赫班",                  //怪物名稱
"Aufhaven",                  //副本名稱
12,                          //限制人數
120, 250,                    //等級要求
1000 * 60 * 60 * 3,                     //限制時間
5,                           //每日次數
0,                           //需求道具
0,                          //需求道具數量
false,                   //是否消耗需求道具
802000821,                   //魔王地圖
"擊殺怪物觸發召喚免怪物編號",                     //怪物編號
0,                           //調整血量
1,                           //經驗倍率
new Point(-18, 327),         //魔王座標
[                            //掉落道具
4000003,4000003,
], 
1,							 //遠征開關 0 = 關 ； 1 = 開
1,                            //隊伍最小人數，請勿設定超過 6 人(含)以上的人數
5,							 //遠征場次增加次數
];
//---------------------------------------------------------
_BossInfo['1061014'] = [
[1, 2, 3, 4, 5, 6],                        //限制頻道，如不想限制請填選 0
"魔王巴洛谷",                      //怪物名稱
"BossBalrog",               //副本名稱
12,                          //限制人數
50, 250,                    //等級要求
1000 * 60 * 60 * 3,                     //限制時間
50,                           //每日次數
0,                           //需求道具
0,                          //需求道具數量
false,                   //是否消耗需求道具
105100300,                   //魔王地圖
"擊殺怪物觸發召喚免怪物編號",//怪物編號
0,                           //調整血量
1,                           //經驗倍率
new Point(172, 196),        //魔王座標
[                            //掉落道具
4000003,4000003
], 
1,							 //遠征開關 0 = 關 ； 1 = 開
1,                            //隊伍最小人數，請勿設定超過 6 人(含)以上的人數
5,							 //遠征場次增加次數
];
//---------------------------------------------------------
function spawnBoss(){
   switch(bossName){
      case "殘暴炎魔":
        // cm.destroyReactor(bossMapID, 2111001);
         break;
         
      case "闇黑龍王": //8810018
         var leftHead  = MapleLifeFactory.getMonster(8810024); // 召喚闇黑龍王的左側頭顱
         cm.getMap(240060000).spawnMonsterOnGroundBelow(leftHead, new java.awt.Point(890, 230));
         var rightHead = MapleLifeFactory.getMonster(8810025); // 召喚闇黑龍王的右側頭顱
         cm.getMap(240060100).spawnMonsterOnGroundBelow(rightHead, new java.awt.Point(-360, 230));
         /*var horntail  = MapleLifeFactory.getMonster(8810026); // 召喚闇黑龍王本體
         cm.getMap(240060200).spawnMonsterOnGroundBelow(horntail, new java.awt.Point(71, 260));*/
         break;
         
      case "黑道長老":
       //  cm.destroyReactor(bossMapID, 8001000);
         break;
         
      case "拉圖斯": //8500002
        // cm.destroyReactor(bossMapID, 2201004);
         break;
         
      case "夢幻公園": //9420549 , 9420544
       //  cm.destroyReactor(bossMapID, 5511000);
       //  cm.destroyReactor(bossMapID, 5511001);
         break;
         
      case "皮卡啾":
	    /*
         cm.removeNpc(270050100, 2141000);
		 map  = cm.getMap(bossMapID);
         mob = MapleLifeFactory.getMonster(bossID);

         var stats = new OverrideMonsterStats();
         stats.setOHp (mob.getHp() + bossAdjHp);     
         stats.setOMp (mob.getMp());                
         stats.setOExp(mob.getMobExp() * bossExpmul);
         mob.setOverrideStats(stats);               

         map.spawnMonsterWithEffect(mob, 15, bossPos)
		 */
         //map.spawnMonsterOnGroundBelow(mob, bossPos);
         //cm.forceStartReactor(270050100, 2709000);
         break;
	  case "魔王巴洛谷":
		 var 本體  = MapleLifeFactory.getMonster(8830007); 
         cm.getMap(105100300).spawnMonsterOnGroundBelow(本體, new java.awt.Point(416, 258));
         var 左手 = MapleLifeFactory.getMonster(8830001);
         cm.getMap(105100300).spawnMonsterOnGroundBelow(左手, new java.awt.Point(416, 258));
		 var 右手  = MapleLifeFactory.getMonster(8830002);
         cm.getMap(105100300).spawnMonsterOnGroundBelow(右手, new java.awt.Point(416, 258));
		 break;
         
      case "普雷茲首腦":case "杜那斯":case "凡雷恩":case "西格諾斯":case "進階杜那斯": case "尼貝龍根": case "無名魔獸": //地圖內會生怪物，打死後自動召喚王。
         break;
         
      default:
         map  = cm.getMap(bossMapID);
         mob = MapleLifeFactory.getMonster(bossID);
         /**------------------------------------------**/
         var stats = new OverrideMonsterStats();
         stats.setOHp (mob.getHp() + bossAdjHp);     
         stats.setOMp (mob.getMp());                
         stats.setOExp(mob.getMobExp() * bossExpmul);
         mob.setOverrideStats(stats);               
         /**------------------------------------------**/
         map.spawnMonsterWithEffect(mob, 15, bossPos)
         //map.spawnMonsterOnGroundBelow(mob, bossPos);
         break;
   }
   

}