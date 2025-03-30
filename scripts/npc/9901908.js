/* Author: Xterminator
	NPC Name: 		Joel
	Map(s): 		Victoria Road : Ellinia Station (101000300)
	Description: 		Ellinia Ticketing Usher
*/
importPackage(Packages.server.maps);
var status = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
	if (status >= 0 && mode == 0) {
		cm.sendNext("好的，需要離開時再通知我喔~遊戲愉快");
		cm.dispose();
		return;
	}
	if (mode == 1)
		status++;
	else
		status--;
	if (status == 0) {
	cm.sendYesNo("請問您要離開了嗎?");
	} else if (status == 1) {
	cm.sendNext("好的，那麼現在我就送你回您之前的所在位置。如您有興趣，歡迎隨時再與我們聯絡。。");
		} else if (status == 2) {
			var map = cm.getPlayer().getSavedLocation(SavedLocationType.WORLDTOUR);
			if (map == -1) {
				map = 100000000;
			}
			cm.warp(map, 0);
			cm.dispose();
			}
		}
	}
