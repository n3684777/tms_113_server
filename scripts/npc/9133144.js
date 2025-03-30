var 偵測所在地圖 = 874004002;
var 回傳地圖 = 910000000;


function start() {
	cm.removeAll(4310028);//刪除道具 
    if (cm.getPlayer().getMapId() == 偵測所在地圖) {
		cm.sendYesNo("您確定要出去了嗎?");
		status = 1;
		return;
	}
}

function action(mode, type, selection) {
	switch (status) {
		case 1:
	    if (mode == 1) {
			cm.warp(回傳地圖, 0);
			
			
	    }
			cm.dispose();
	    break;
		
		}
	}