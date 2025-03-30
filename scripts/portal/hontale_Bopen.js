function enter(pi) {
	pi.playPortalSE();
   var player = pi.getPlayer();
   var eim = player.getEventInstance();

   if(eim == null) return true;

   var playerMapID = player.getMapId();
   
   if(playerMapID == 240050105 && player.haveItem(4001092, 1)){
      pi.warp(240050100, "st00"); 
	  pi.warpParty(240050100, 2);
   }else{
	   if(playerMapID == 240050101){
		   var door_1 = eim.getProperty("doorstatus_1");
				if(door_1 == 1){
				   player.dropMessage("請等待迷宮室的隊友使用鑰匙");
				   return true;
				}if(door_1 == 0){
				   pi.warp(240050102, "st00");
				}else{
					player.dropMessage("入口被封印了");
					return true;
				}
	   }if(playerMapID == 240050102){
		   var door_2 = eim.getProperty("doorstatus_2");
				if(door_2 == 1){
				   player.dropMessage("請等待迷宮室的隊友使用鑰匙");
				   return true;
				}if(door_2 == 0){
				   pi.warp(240050103, "st00");
				}else{
					player.dropMessage("入口被封印了");
					return true;
				}
	   }if(playerMapID == 240050103){
		   var door_3 = eim.getProperty("doorstatus_3");
				if(door_3 == 1){
				   player.dropMessage("請等待迷宮室的隊友使用鑰匙");
				   return true;
				}if(door_3 == 0){
				   pi.warp(240050104, "st00");
				}else{
					player.dropMessage("入口被封印了");
					return true;
				}
	   }if(playerMapID == 240050104){
		   var door_4 = eim.getProperty("doorstatus_4");
				if(door_4 == 1){
				   player.dropMessage("請等待迷宮室的隊友使用鑰匙");
				   return true;
				}if(door_4 == 0){
				   pi.warp(240050105, "st00");
				}else{
					player.dropMessage("入口被封印了");
					return true;
				}
	   }else{
         player.dropMessage("入口被封印了");
      }
   }
	return true;
}