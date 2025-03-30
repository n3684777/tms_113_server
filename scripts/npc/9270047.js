/***  夢幻公園  ***/
var status = -1;
var 魔王地圖     = 551030200; //夢幻公園
var 魔王地圖入口 = 551030100; //夢幻公園入口

function start() {
   action(1, 0, 0);
}

function action(mode, type, selection){
   status = (mode == 1 ? status+1 : cm.dispose());
//--------------------------------------------------
   if(status == 0){
      if(cm.getMapId() == 魔王地圖){
         cm.sendAcceptDecline("冒險者想離開這裡嗎 ??");
      }else{
         cm.dispose();
         cm.openNpc(cm.getNpc(), "_BOSS選單");
      }
   }
   
   if(status == 1){
      cm.warp(魔王地圖入口, 0);
      cm.dispose();
   }
      
}