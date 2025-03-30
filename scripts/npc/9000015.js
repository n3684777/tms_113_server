var icon = "#fEffect/CharacterEff/1051294/1/0#";

var status = 0;
var weapon = 1322005;
var price = 1;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
   status = (mode == 1 ? status+1 : cm.dispose());
//---------------------------------------------------

   if (status == 0) {
      cm.sendSimple("#b冒險者需要協助嗎 ?\r\n\r\n#k"+
                    "#L0#"+icon+" 帶我離開這裡#l\r\n\r\n"+
                    "#L1#"+icon+" 購買一把活動武器 "+price+" 楓幣#l\r\n\r\n");
   } 
   
   else if (status == 1) {
      if (selection == 0) {
         cm.sendYesNo("你想要離開這裡？？");
      } 
      
      else if (selection == 1) {
         if (cm.getPlayer().getMeso() < price || !cm.canHold(weapon)) {
            cm.sendOk("你沒有足夠的楓幣，或者道具欄位滿了。");
         } else {
            cm.gainMeso(-price);
            cm.gainItem(weapon, 1);
         }
         cm.dispose();
      }
   } 
   
   else if (status == 2) {
      var map = cm.getSavedLocation("EVENT");
      if (map > -1) {
         cm.warp(map, 0);
      } else {
         cm.warp(910000000, 0);
      }
      cm.dispose();
   }
	
}