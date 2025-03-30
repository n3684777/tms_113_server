/*
	NPC: Corner of the Magic Library
	MAP: Hidden Street - Magic Library (910110000)
	QUEST: Maybe it's Grendel! (20718)
*/

var status;

function start(){
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection){
	if(mode == -1 || (mode == 0 && status == 0)){
		cm.dispose();
		return;
	}
	else if(mode == 0)
		status--;
	else
		status++;


	if(status == 0){
		cm.sendOk("這裡好像什麼也沒有");
	}
	else if(status == 1){
		cm.dispose();
		return;
	}
}