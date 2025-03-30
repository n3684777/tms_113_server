//位於地圖： 240050100 (生命之穴 迷宮室)
//進入第一迷宮室的傳送點

function enter(pi) {
	pi.playPortalSE();
   
   if(pi.haveItem(4001087, 1)){//需要有第一迷宮室鑰匙才可進入
      pi.gainItem(4001087, -1);
      pi.warp(240050101, "st00");
   }else{
      pi.getPlayer().dropMessage("玩家需要有第一個迷宮室的水晶鑰匙才可進入");
   }
	return true;
}