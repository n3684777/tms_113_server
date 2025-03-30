// 活動獎品贈獎區 109050000
// NPC 9000002

var randitem = [2000000]; 

function start() {
	var map = cm.getSavedLocation("EVENT");
	if (map > -1 && map != cm.getMapId()) {
		// var itemid = randitem[Math.floor(Math.random() * randitem.length)];
		// if (cm.canHold(itemid, 1)) {
         // cm.gainItem(itemid, 1);
         cm.warp(map, 0);
		// } else {
			// cm.sendOk("請空出一格背包欄位。");
			// cm.dispose();
		// }
	} else {
    		cm.warp(910000000, 0);
	}
    cm.dispose();
}

function action(mode, type, selection) {
   
}