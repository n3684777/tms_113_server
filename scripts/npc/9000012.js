var icon = "#fEffect/CharacterEff/1051294/1/0#";

var status = -1;
var text = "";
var weapon = 1322005;
var price = 1;


function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
   status = (mode == 1 ? status+1 : cm.dispose());
//---------------------------------------------------

		if (status == 0) {
         var team = cm.getPlayer().getCoconutTeam();

         team = (team == 0 ? "#r【我是紅隊】#k" : "#b【我是藍隊】#k");
                       
         cm.sendSimple("#k冒險者需要協助嗎 ? #k"+team+" \r\n\r\n"+
                       "#L0#"+icon+" 帶我離開這裡#l\r\n\r\n"+
                       "#L1#"+icon+" 購買一把活動武器 "+price+" 楓幣#l\r\n\r\n"); 
		} 
      
      else if (status == 1) {
			if (selection == 0) {
				cm.sendYesNo("你的想要離開？？");
			} 
         
         else if (selection == 1) {
				if (cm.getPlayer().getMeso() < price || !cm.canHold(weapon)) {
					cm.sendOk("很抱歉，你沒有足夠的楓幣或者裝備欄滿了！");
				} else {
					cm.gainItem(weapon, 1);
					cm.gainMeso(-price); //lool
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
