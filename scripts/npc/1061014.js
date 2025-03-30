var status = -1;
var 入口 = 105100100;
var 王圖 = 105100300;
importPackage(Packages.server.maps);
function start() {
   action(1, 0, 0);
}

function action(mode, type, selection) {
   status = (mode == 1 ? status+1 : cm.dispose());
//---------------------------------------------------

   if(status == 0){
	  var nextmap = cm.getC().getChannelServer().getMapFactory().getMap(105100301); 
	  if (nextmap.playerCount() > 0) {					
				cm.sendOk("目前獎勵地圖內#r【有玩家】#k在裡面死不出來喔。");
		        cm.dispose();
				return;
	  }
      var playerMapID = cm.getMapId();
      if(playerMapID == 入口){
         cm.dispose();
         cm.openNpc(cm.getNpc(), "_BOSS選單");
      }else{
         cm.sendAcceptDecline("確定要離開這裡嗎 ?? ");
      }
      
   }
   
   else if(status == 1){
      cm.warp(入口, 0);
      cm.dispose();
   }
}
