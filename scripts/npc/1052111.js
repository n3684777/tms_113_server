/*
	Trash Can 3
	Kerning Subway
*/

var status;

function start(){
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection){
	if(mode == -1){
		cm.dispose();
		return;
	}
	else{
		if(mode == 0 && status == 0){
			cm.dispose();
			return;
		}
		else if(mode == 0)
			status--;
		else
			status++;

		if(status == 0) {
			if(cm.getQuestStatus(20710) == 1) {
				if(!cm.haveItem(4032136, 1)) {
					if(cm.canHold(4032136)) {
						cm.gainItem(4032136, 1);
						cm.sendNext("你在垃圾桶裡找到了一個 #b#t4032136##k #i4032136#");
					} else {
						cm.sendOk(" 您的道具欄沒有空間擺放 #i4032136#");
					}
				} else {
					cm.sendOk("這只是一般的垃圾桶");
				}
			} else {
				cm.sendOk("這只是一般的垃圾桶");
			}
		} else if(status == 1){
			cm.dispose();
		}
	}
}