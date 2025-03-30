load('nashorn:mozilla_compat.js');
importPackage(Packages.server.maps); // MapleMapFactory

//從抉擇洞穴 240050200 離開
//判斷反應物的當前狀態 2408001 (Ractor Name : light)

function enter(pi) {
   
   var reactor = pi.getMap(240050200).getReactorByName("light"); 
	pi.playPortalSE();
   
   if(reactor.getState() != 1){
      pi.warpParty(240050310); //暗黑洞穴
   }else{
      pi.warpParty(240050300); //光明洞穴
   }
	return true;
}