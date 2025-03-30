load('nashorn:mozilla_compat.js');
importPackage(Packages.client.inventory); //MapleInventoryType.

var 藍星 = "#fEffect/CharacterEff/1051296/1/0#";
var 橘星 = "#fEffect/CharacterEff/1102232/0/0#";
var 愛心 = "#fEffect/SetEff/240/effect/0#";
var 鴨鴨 = "#fEffect/SetEff/244/effect/0#";

var status = -1;
var objDate=new Date();
var day=objDate.getDay();
var weekday = ["日", "一", "二", "三", "四", "五", "六"];
var Year =objDate.getFullYear();
var Month= objDate.getMonth()+1;
var Day =objDate.getDate();
var day_2 = objDate.getDay();
var log;
var toDayCanSign;
var continueSignUp; //連續簽到天數
var player = null;
var 設定上線時間 = 0; //分鐘
var 設定怪物擊殺數量 = 0;//隻

//==========固定獎勵==========//
var _REWARD = [
[2450000, 1],
[2000005, 1],
];

//==========連續簽到==========//
var _SPECIAL = [];
_SPECIAL['6']=[
	[2450000, 1], [2450024, 1],
];

_SPECIAL['13']=[
	[2450000, 1], [2450024, 1],
];

_SPECIAL['20']=[
	[2450000, 1], [2450024, 1],
];

_SPECIAL['29']=[
	[2450000, 1], [2450024, 1],
];

function start() {
   action(1, 0, 0);
}

function action(mode, type, selection) {
   status = (mode == 1 ? status+1 : cm.dispose());
//-------------------------------------
   if(status == 0){
      
      log = "每日簽到"+Year+"/"+Month+"/"+Day;
      player = cm.getPlayer();
      toDayCanSign = player.getPrizeLog(log);
      if(toDayCanSign == -1){
         player.dropMessage(-1, "有點小狀況>< 冒險家請再試一次");
         cm.dispose();
         return;
      }
		var now = new Date();
		var year = now.getFullYear();
		var month = now.getMonth() + 1; // 使月份從1開始計數
		var day = now.getDate();
		var continueSignUp = 0; // 累計簽到天數

		// 計算當月的簽到天數
		for (var i = 1; i <= day; i++) {
		   if (player.getPrizeLog("每日簽到" + year + "/" + month + "/" + i) >= 1) {
			  continueSignUp++;
		   }
		}

		// 計算上個月的簽到天數，處理跨年
		var lastMonth = month - 1;
		var lastYear = year;
		if (lastMonth < 1) {
			lastMonth = 12;
			lastYear -= 1;
		}

		// 獲取上個月的天數
		var lastMonthDays = new Date(lastYear, lastMonth, 0).getDate();
		for (var i = 1; i <= lastMonthDays; i++) {
		   if (player.getPrizeLog("每日簽到" + lastYear + "/" + lastMonth + "/" + i) >= 1) {
			  continueSignUp++;
		   }
		}

		// 處理超過30天的情況
		if (continueSignUp > 30) {
		   continueSignUp -= 30;
		}
      
      var signString = "\r\n";

      if(toDayCanSign == 0){//未簽到則列出選項
         signString += "#L0# #r簽到取得獎勵#l\r\n\r\n#k";
      }else{//已簽到則換成圖示
         signString += "\r\n #n#d#h # 已簽到 #v04031300#";
      }
      
      signString += getRewardInfo();
      
      cm.sendOk("#e現在時間:#b"+Year+"年 "+Month+"月 "+Day+"日 "+
                   "星期"+weekday[day_2]+"\r\n"+
                   "#k本月累計簽到【 #r"+ continueSignUp +"#k 】天\r\n"+
                   signString);   
		本日累積天數 = continueSignUp;
   }
   
   else if(status == 1){
      if(selection == 0){
         var onlineTime   = player.getEveryday_Online();
         if(player.getEveryday_KillMob() < 設定怪物擊殺數量 || onlineTime < 設定上線時間){
            cm.sendOk(
                      "今日擊殺小怪 : ( #e"+player.getEveryday_KillMob()+" / "+設定怪物擊殺數量+"#n  隻 )\r\n"+
					  "今日累積在線 : ( #e"+onlineTime+" / "+設定上線時間+"#n  隻 )\r\n"+
                      "#b完成上述條件就可以簽到囉"+鴨鴨+愛心);
            cm.dispose(); return;
         }
         
         if(!checkFreeSlot()){
            cm.sendOk("請冒險者將背包預留 4 格空間哦");
            cm.dispose(); return;
         }
         
         var str = "簽到獎勵\r\n\r\n";

         for(var i=0; i<_REWARD.length; i++){
            str += "#v"+_REWARD[i][0]+"# #z"+_REWARD[i][0]+"# × "+_REWARD[i][1]+"\r\n\r\n";
         }

         var specialReward = _SPECIAL[本日累積天數];
         if(specialReward != null){
            str += "#b"+藍星+藍星+藍星+藍星+藍星+藍星+" 連續簽到 "+(本日累積天數+1)+" 日 "+藍星+藍星+藍星+藍星+藍星+藍星+"#k\r\n";
            
            for(var i=0; i<specialReward.length; i++){
               str += "#v"+specialReward[i][0]+"# #z"+specialReward[i][0]+"# × "+specialReward[i][1]+"\r\n";
            }
         }
         
         cm.sendAcceptDecline(str);
      }else{
         cm.dispose();
      }
   }

   else if(status == 2){
      cm.sendOk("非常棒 要繼續保持喔");
      player.setPrizeLog(log);
      gainReward();
      cm.dispose();
   }
   
}

function gainReward(){
   //===========固定獎勵===========//
   for(var i=0; i<_REWARD.length; i++){
      cm.gainItem(_REWARD[i][0], _REWARD[i][1]);
   }
   
   //===========連續簽到===========//
   var specialReward = _SPECIAL[本日累積天數];
   if(specialReward != null){
	   for(var i=0; i<specialReward.length; i++){
		  cm.gainItem(specialReward[i][0], specialReward[i][1]);
	   }
   }
}

function getRewardInfo(){
   var signString = "\r\n================ 基本簽到獎勵 ================\n\r\n";
   
   for(var i=0; i<_REWARD.length; i++){
      signString += "#v"+_REWARD[i][0]+"# #z"+_REWARD[i][0]+"# × "+_REWARD[i][1]+"\r\n";
   }
   
   signString += "\r\n================ 簽到７日獎勵 ================\r\n\r\n";
   
   for(var i=0; i<_SPECIAL['6'].length; i++){
      signString += "#v"+_SPECIAL['6'][i][0]+"# #z"+_SPECIAL['6'][i][0]+"# × "+_SPECIAL['6'][i][1]+"\r\n";
   }
   
   signString += "\r\n================簽到１４日獎勵================\r\n\r\n";
   
   for(var i=0; i<_SPECIAL['13'].length; i++){
      signString += "#v"+_SPECIAL['13'][i][0]+"# #z"+_SPECIAL['13'][i][0]+"# × "+_SPECIAL['13'][i][1]+"\r\n";
   }
   
   signString += "\r\n================簽到２１日獎勵================\r\n\r\n";
   
   for(var i=0; i<_SPECIAL['20'].length; i++){
      signString += "#v"+_SPECIAL['20'][i][0]+"# #z"+_SPECIAL['20'][i][0]+"# × "+_SPECIAL['20'][i][1]+"\r\n";
   }
   
   signString += "\r\n================簽到３０日獎勵================\r\n\r\n";
   
   for(var i=0; i<_SPECIAL['29'].length; i++){
      signString += "#v"+_SPECIAL['29'][i][0]+"# #z"+_SPECIAL['29'][i][0]+"# × "+_SPECIAL['29'][i][1]+"\r\n";
   }

   return signString;
}

function checkFreeSlot(){
   // var equFreeSlot = player.getInventory(MapleInventoryType.EQUIP).getNumFreeSlot();
   var useFreeSlot = player.getInventory(MapleInventoryType.USE  ).getNumFreeSlot();
   // var etcFreeSlot = player.getInventory(MapleInventoryType.ETC  ).getNumFreeSlot();
   return (/*equFreeSlot>=2 && */useFreeSlot>=4 /*&& etcFreeSlot>=2*/);
}