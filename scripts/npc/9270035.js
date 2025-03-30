var status = -1;
importPackage(Packages.server.maps);
function start() {
	action(1, 0, 0);
}
function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1) {
			status++;
		} else {
			status--;
		}
		if (status == 0) {
			var map = "請問你要回到原本的地圖#b#m" + cm.getPlayer().getSavedLocation(SavedLocationType.DPS) + "##k嗎？？";
			maptype = selection;
			cm.sendOk(map);
		} else if (status == 1) {
			var map = cm.getPlayer().getSavedLocation(SavedLocationType.DPS);
		        cm.warp(map, 0);
				cm.dispose();
		}
	}
}