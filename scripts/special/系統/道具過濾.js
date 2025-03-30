var STAR = "#fEffect/ItemEff/1049000/0/0#";
var status = -1;
var player = null;

function start() {
   action(1, 0, 0);
}

function action(mode, type, selection) {
   status = (mode == 1 ? status+1 : cm.dispose());
//-------------------------------------
   if (status == 0) {
      cm.sendOk("\r\n"+
                "#L0#"+STAR+"過濾地圖上的掉落物#l\r\n\r\n"+
                "#L1#"+STAR+"查詢地圖全掉落物#l\r\n\r\n"+
                "#L2#"+STAR+"過濾地圖道具#l\r\n\r\n"+
                "#L3#"+STAR+"過濾全服地圖道具#l\r\n\r\n"+
                "#L5#"+STAR+"搜索代碼過濾道具#l\r\n\r\n"+
                "#L4#"+STAR+"刪除過濾道具#l\r\n\r\n"
                )
   }
   
   if (status == 1) {
      player = cm.getPlayer();
      
      if (selection == 0) {
         status = 10; 
      } else if (selection == 1) {
         status = 20; 
      } else if (selection == 2) {
         status = 30;
      } else if (selection == 3) {
         status = 40;
      } else if (selection == 4) {
         status = 50;
      } else {
         status = 60;
      }
   }

   if(status == 10){
           cm.sendOk(player.getCurrentMapDropItemInfo());
      }

      if(status == 11){
         if(selection == -1){
            cm.dispose(); return;
         }
         player.addFilterItem(selection);
         cm.sendOk("#v"+selection+"##b#z"+selection+"##k\r\n納入過濾物品清單^__^");
         status = 9;
      }

   if(status == 20){
        cm.sendOk(player.getMapDropItemInfo_Filtered());
   }

   if(status == 21){
      if(selection == -1){
         cm.dispose(); return;
      }
      player.addFilterItem(selection);
      cm.sendOk("#v"+selection+"##b#z"+selection+"##k\r\n\r\n納入過濾物品清單^__^");
      status = 19;
   }

   if(status == 30){
      cm.sendOk(player.getMapDropAndFiliterItemInfo());
   }
   
   if(status == 31){
      if(selection == -1){
         cm.dispose(); return;
      }
      player.addFilterItem(selection);
      cm.sendOk("#v"+selection+"##b#z"+selection+"##k\r\n\r\n納入過濾物品清單^__^");
      status = 29;
   }

   if(status == 40){
      cm.sendOk(player.getAllMapDropItemInfo());
   }

   if(status == 41){
      if(selection == -1){
         cm.dispose(); return;
      }
      player.addFilterItem(selection);
      cm.sendOk("#v"+selection+"##b#z"+selection+"##k\r\n\r\n納入過濾物品清單^__^");
      status = 39;
   }
   
   if(status == 50){
      cm.sendOk(player.getFilterItemInfo());
   }
   
   if(status == 51){
      if(selection == -1){
         cm.dispose(); return;
      }
      player.subFilterItem(selection);
      cm.sendOk("#v"+selection+"##b#z"+selection+"##k\r\n\r\n從過濾物品清單移除^__^");
      status = 49;
   }

   if(status == 60) {
      cm.sendGetText("請輸入需要檢索的物品:");
   }

   if(status == 61) {
     cm.sendOk(cm.searchData(1, cm.getText()));
   }

   if(status == 62) {
     if (!cm.foundData(1, cm.getText())) {
         cm.dispose();
         return;
     }
     player.addFilterItem(selection);
     cm.sendOk("#v"+selection+"##b#z"+selection+"##k\r\n納入過濾物品清單^__^");
     status = 59;
   }
}