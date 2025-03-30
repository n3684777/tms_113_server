
/*
	Machine Apparatus - Origin of Clocktower(220080001)
*/

var status = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        cm.sendYesNo("嘟...嘟...你想要離開嗎？？");
    } else if (status == 1) {
		if(cm.getMap().getNumItems() > 0){
			cm.sendYesNo("你有東西掉在地上...這提醒是不是很貼心? 確認要離開嗎?");
		} else {
            cm.warp(220080000);
            if (cm.getPlayerCount(220080001) == 0) {
                cm.getMap(220080000).resetReactors();
                cm.getMap().EndPapfight();
            }
            cm.dispose();
            return;
        }
    } else if (status == 2){
        cm.warp(220080000);
        if (cm.getPlayerCount(220080001) == 0) {
            cm.getMap(220080000).resetReactors();
            cm.getMap().EndPapfight();
        }
        cm.dispose();
    }
}