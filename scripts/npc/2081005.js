﻿var morph;
var status = -1;

function start() {
   // cm.warp(240050400, 0);
   // cm.dispose();
   action(1, 0, 0);
}

function action(mode, type, selection) {
   status = (mode == 1 ? status + 1 : cm.dispose());
   //-------------------------------------
   if (status == 0) {
      // var marr = cm.getQuestRecord(160100);
      // var data = marr.getCustomData();
      // if (data == null) {
      // marr.setCustomData("0");
      // data = "0";
      // }
      // var time = parseInt(data);
      morph = cm.getMorphState();
      if (morph == 2210003 /*|| (cm.isQuestFinished(7301) && time + (6 * 3600000) < cm.getCurrentTime())*/ ) {
         // cm.sendNext("#e我的同伴~辛苦了\r\n趕快進來吧");
         cm.getPlayer().dropMessage("卡羅賓(守門人) : 我的同伴, 辛苦了, 趕快進來吧");
         cm.cancelItem(2210003);
         cm.warp(240050000, 0);
      } else {
         cm.addHP(-(cm.getPlayerStat("HP") - 1));
         cm.warp(240040600, "st00");
         cm.sendNext("#e是人類!!\r\n你別想靠近這裡");
      }
      cm.dispose();
   } else if (status == 1) {
      if (morph == 2210003 /*|| (cm.isQuestFinished(7301) && time + (6 * 3600000) < cm.getCurrentTime())*/ ) {
         cm.cancelItem(2210003);
         cm.warp(240050000, 0);

         if (cm.haveItem(4031454)) { // Paladin
            cm.gainItem(4031454, -1);
            cm.gainItem(4031455, 1);
         }
         if (cm.getQuestStatus(6169) == 1) { // Temporary
            cm.gainItem(4031461, 1);
         }
      }
      cm.dispose();
   }
}