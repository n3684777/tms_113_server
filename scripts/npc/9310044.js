﻿/*
	少林妖僧 -- 出口NPC
*/
var status=0;

function start() {
   status=-1;
   action(1, 0, 0);
}

function action(mode, type, selection) {
   if (mode==-1) {
      cm.dispose();
   }

   else if (mode==0) {
      cm.sendOk("你想離開這裡嗎 ??");
      cm.dispose();
   }

   else {
      if (mode==1) status++;
      else status--;

      if (status==0) {
         cm.sendYesNo("你想離開這裡嗎 ??");
      }

      else if (status==1) {
         if ( !cm.isLeader()) {
            cm.sendOk("請隊長來找我 !");
            cm.dispose();
         }

         else {
            cm.warpParty(702070400, 0);
            cm.resetReactors();
            cm.dispose();
         }
      }
   }
}