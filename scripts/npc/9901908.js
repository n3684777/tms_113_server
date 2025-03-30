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
		cm.sendNext("�n���A�ݭn���}�ɦA�q���ڳ�~�C���r��");
		cm.dispose();
		return;
	}
	if (mode == 1)
		status++;
	else
		status--;
	if (status == 0) {
	cm.sendYesNo("�аݱz�n���}�F��?");
	} else if (status == 1) {
	cm.sendNext("�n���A����{�b�ڴN�e�A�^�z���e���Ҧb��m�C�p�z������A�w���H�ɦA�P�ڭ��p���C�C");
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
