function action(mode, type, selection) {
   if (!cm.haveItem(4001101, 10) && cm.getMapId() == 910010100) {
         cm.sendNext("我需要#i"+4001101+"# #z"+4001101+"# - 10 個才能讓你進入豬之城");
         cm.dispose();
         return;
      }
   
   
    if (cm.getMapId() == 910010100) {
        for (var i = 4001095; i < 4001099; i++) {
            cm.givePartyItems(i, 0, true);
        }
        cm.givePartyItems(4001100, 0, true);
        cm.givePartyItems(4001101, 0, true);
        cm.warp(910010200);
        cm.dispose();
    } else {
        for (var i = 4001095; i < 4001099; i++) {
            cm.givePartyItems(i, 0, true);
        }
        for (var i = 4001100; i < 4001101; i++) {
            cm.givePartyItems(i, 0, true);
        }
        cm.warp(100000200);
        cm.dispose();
    }
}