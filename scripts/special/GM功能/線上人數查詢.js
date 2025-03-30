var status = -1;
var playerNames = [];
function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else if (mode == 0) {
		status--;
	} else {
		cm.dispose();
		return;
	}
	
	if (status == 0) {
		if(cm.getPlayer().getJobId() != 900){
			cm.sendOk("歡迎您，普通玩家，您不是GM無法使用此功能");
			cm.dispose();
			return;
		}
		var result = cm.查詢線上玩家().split("PLAYER_NAMES:");
		playerNames = result[1].split(",");
		cm.sendSimple(result[0]);
	} else if (status == 1) {
		var playerName = playerNames[selection];
		cm.dispose();
		cm.processCommand("!warp " + playerName);
		return;	
	}
}
