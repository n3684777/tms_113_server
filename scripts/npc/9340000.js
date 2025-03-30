importPackage(Packages.server.maps);
var status = -1;
var 入口 = 779000001;

function start() {
   action(1, 0, 0);
}

function action(mode, type, selection) {
   status = (mode == 1 ? status+1 : cm.dispose());
//---------------------------------------------------

   if(status == 0){
      var playerMapID = cm.getMapId();
      if(playerMapID == 入口){
		 cm.sendAcceptDecline("確定要離開這裡嗎 ?? ");
      }else{
		cm.sendOk("您好冒險者");  
        cm.dispose(); 
      }
   }
   
   else if(status == 1){
      var map = cm.getPlayer().getSavedLocation(SavedLocationType.WORLDTOUR);
		if (map == -1) {
			map = 910000000;
		}
		cm.warp(map, 0);
      cm.dispose();
   }
}