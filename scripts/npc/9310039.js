/*
 少林妖僧 -- 入口NPC
 */
var objDate = new Date();
var Month = objDate.getMonth();
var MonthS = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
var tzc = objDate.getDate();
var Day = objDate.getDay();
var Year = objDate.getFullYear();
var log紀錄次數 = "妖僧組隊任務";
var BossName = "shaoling";
var 每日挑戰次數 = 999;
var lowLv = 51;
var highLv = 90;

var 領取獎勵場次數 = 10;
var 固定獎勵 = [
	[4000037,1],//物品代碼 數量
	[4000036,1],//物品代碼 數量
	[4000035,2],//物品代碼 數量
	[4000034,2],//物品代碼 數量
];

function start() {
   status=-1;
   action(1, 0, 0);
}

function action(mode, type, selection) {
   if (mode==-1) {
      cm.dispose();
   }

   else {
      if (status >=0 && mode==0) {
         cm.dispose();
         return;
      }

      if (mode==1) status++;
      else status--;

      if (status==0) {
         cm.sendSimple("勇敢的冒險者 ! 想挑戰武陵妖僧嗎 ? \r\n"+
					   "<!> 請注意，等級需要達到 #r"+lowLv+"#k 或者已經超過 #r"+highLv+"#k\r\n\r\n"+
                       "#L0##b開始挑戰 #k今日剩餘次數< "+(每日挑戰次數-cm.getBossLog(BossName))+" >#k#l\r\n\r\n"+
					   "#L99##b領取獎勵 #k#l");
      }

      else if (status==1) {
         if (selection==0) {
            var pt=cm.getPlayer().getParty();
			/*
            if (cm.getQuestStatus(8534) == 0) {
               cm.sendOk("你好像還有任務沒有完成 !! ");
               cm.dispose();
            }
			
            else */if (cm.getBossLog(BossName) >= 每日挑戰次數 ) {
               cm.sendOk("每日只能挑戰 "+ 每日挑戰次數 +" 次妖僧！");
               cm.dispose();
            }

            else if (cm.getParty()==null) {
               cm.sendOk("冒險者需要組隊前來挑戰");
               cm.dispose();
            }

            else if ( !cm.isLeader()) {
               cm.sendOk("請隊長來找我 !");
               cm.dispose();
            }
			/*
            else if (pt.getMembers().size() <= 1) {
               cm.sendOk("需要 1 人以上的組隊才能進入！!");
               cm.dispose();
            }*/

            else {
               var party=cm.getParty().getMembers();
               var mapId=cm.getMapId();
               var next=true;
               var levelValid=0;
               var inMap=0;

               var it=party.iterator();

               while (it.hasNext()) {
                  var cPlayer=it.next();

                  if ((cPlayer.getLevel() >= lowLv && cPlayer.getLevel() <= highLv ) || cPlayer.getJobId()==900) {
                     levelValid+=1;
                  }

                  else {
                     next=false;
                  }

                  if (cPlayer.getMapid()==mapId) {
                     inMap+=(cPlayer.getJobId()==900 ? 3 : 1);
                  }
               }

               if (inMap < 1) {
                  next=false;
               }

               if (next) {
                  var em=cm.getEventManager(BossName);

                  if (em==null) {
                     cm.sendOk("妖僧副本異常請聯絡遊戲管理者");
                  }

                  else {
                     var prop=em.getProperty("state");
					if(checkSecondTeam()){
						if (prop.equals("0") || prop==null) {
							//em.startInstancepartylog(cm.getParty(), cm.getMap(), BossName);
							em.startInstance(cm.getParty(), cm.getMap());
							checkSecondTeam_2();
							//cm.setPartyBossLog(BossName);
							cm.dispose();
							return;
						}else {
							cm.sendOk("已經有人在挑戰囉");
							cm.dispose();
							return;
						 }
					}else{
						cm.sendOk("有隊員今日的次數已經用盡囉~");
						cm.dispose();
						return;
					}	
                     

                     
                  }
               }

               else {
                  cm.sendOk("<!> 等級尚未達到 #r"+lowLv+"#k 或者已經超過 #r"+highLv+"#k");
               }
            }

            cm.dispose();
         }if (selection == 99) {
				store = false;
				counts = cm.getPlayer().getBossLog("" + Year + "年" + MonthS[Month] + tzc + "日" + log紀錄次數 + "");
				var text = "";
				text += "【 每日完成 ( "+counts+" / "+領取獎勵場次數+" ) 場即可領取以下獎勵】\r\n"
				for (var i in 固定獎勵){
					if(i%10 == 0)
						text +="\r\n\r\n";
						text += "#i" + 固定獎勵[i][0] + ":#  #z" + 固定獎勵[i][0] + "# : " + 固定獎勵[i][1] + " 個\r\n\r\n "
				}
				cm.sendNext(text);
		 }
      }else if (status==2) {
				counts = cm.getPlayer().getBossLog("" + Year + "年" + MonthS[Month] + tzc + "日" + log紀錄次數 + "");
				領獎紀錄 = cm.getPlayer().getBossLog("" + Year + "年" + MonthS[Month] + tzc + "日" + log紀錄次數 + "_領獎");
				if(counts < 領取獎勵場次數){
					cm.sendOk("本日場次還不夠哦~");
					cm.dispose();
					return;
				}
				if(領獎紀錄 >= 1){
					cm.sendOk("您已經領取過了哦~~");
					cm.dispose();
					return;
				}
				for (var i = 0; i < 固定獎勵.length; i++) {
					cm.gainItem(固定獎勵[i][0], 固定獎勵[i][1]);
					cm.GAMEPLAYERLOG("每日組隊任務_妖僧組隊", "獲得固定物品", 固定獎勵[i][0], 固定獎勵[i][1]);
				}
				var rewardMsg = "#b恭喜您已完成每日任務，期待你明天再接再厲\r\n\r\n";
				cm.sendOk(rewardMsg);
				cm.getPlayer().setBossLog("" + Year + "年" + MonthS[Month] + tzc + "日" + log紀錄次數 + "_領獎");
				cm.GAMEPLAYERLOG("每日組隊任務", "完成組隊任務_妖僧組隊", 0, 0);
				cm.worldMessage(5,"恭喜玩家完成每日妖僧組隊任務");
				cm.dispose();  
		  
	  }
   }
}

function checkSecondTeam(){
	var PLAYER = cm.getPlayer();
   var party = PLAYER.getParty();
   var partyMembers  = party.getMembers();//LinkedList

   if(!PLAYER.partyIsGather()){ //隊伍集結狀況
      return false;
   }

   for(maplePartyPlayer in partyMembers){
      playerLv = partyMembers[maplePartyPlayer].getLevel();
      if(lowLv > playerLv || playerLv > highLv ){
         return false;//不符合條件
      }
   }
    var it = partyMembers.iterator();
	var playersToDeductCardFrom = [];

	while (it.hasNext()) {
		var cPlayer = it.next();
		var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
		if (ccPlayer.getBossLog(BossName) >= 每日挑戰次數) {
			return false; //队员超过远征次数
		}
	}

   return true;
}

function checkSecondTeam_2(){
	var PLAYER = cm.getPlayer();
   var party = PLAYER.getParty();
   var partyMembers  = party.getMembers();//LinkedList

   if(!PLAYER.partyIsGather()){ //隊伍集結狀況
      return false;
   }

   for(maplePartyPlayer in partyMembers){
      playerLv = partyMembers[maplePartyPlayer].getLevel();
      if(lowLv > playerLv || playerLv > highLv ){
         return false;//不符合條件
      }
   }
	var it = partyMembers.iterator();
	var playersToDeductCardFrom = [];
	while (it.hasNext()) {
		var cPlayer = it.next();
		var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
		ccPlayer.setBossLog(BossName)
	}

   return true;
}