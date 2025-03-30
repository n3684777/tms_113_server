var icon = "#fEffect/CharacterEff/1051294/1/0#";

var status = -1;
var banMap = Array(109080000, 109080010, 109040000, 109030001, 109060000, 109010000, 109020001);

function start() {
   action(1, 0, 0);
}

function action(mode, type, selection) {
   status = (mode == 1 ? status+1 : cm.dispose());
//--------------------------------------------------
   if (status == 0) {
      cm.sendOk("參與活動能為你帶來意想不到的驚喜和樂趣哦\r\n\r\n"+
                "#b#L0#"+icon+" 我想參加活動#l#k\r\n");
   }

   else if (status == 1) {
      var channelServer = cm.getChannelServer();
      var eventMapID = channelServer.getEvent();
      var marr = cm.getQuestRecord(160200);
      if (marr.getCustomData() == null) marr.setCustomData("0");

      var dat = parseInt(marr.getCustomData());

      if (dat + 3600000 >=cm.getCurrentTime() && !cm.getPlayer().isGM()) {
         cm.sendOk("你已經在過去的一小時內參加過活動了");
         cm.dispose();
         return;
      }

      if (cm.getChannelServer().getEvent() < 0) {
         cm.sendOk("目前沒有活動可以參加哦");
         cm.dispose();
         return;
      }

      if (cm.haveItem(4031017)) cm.removeAll(4031017);

      cm.saveReturnLocation("EVENT");
      cm.getPlayer().setChalkboard(null);
      marr.setCustomData(""+ cm.getCurrentTime());
      cm.warp(eventMapID, eventMapID==109080000 || eventMapID==109080010 ? 0 : "join00");
      cm.dispose();
   }

}