/* 杜那斯2副本 */

var status = -1;
var 入口 = 802000710;
var 王圖 = 802000711;

function start() {
   action(1, 0, 0);
}

function action(mode, type, selection) {
   status = (mode == 1 ? status+1 : cm.dispose());
//---------------------------------------------------

   if(status == 0){
      var playerMapID = cm.getMapId();
      if(playerMapID == 入口){
         cm.dispose();
         cm.openNpc(cm.getNpc(), "_BOSS選單");
      }else{
         cm.sendAcceptDecline("確定要離開這裡嗎 ?? ");
      }
   }
   
   else if(status == 1){
      cm.warp(入口, 2);
      cm.dispose();
   }
}