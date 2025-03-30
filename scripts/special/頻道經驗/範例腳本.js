load('nashorn:mozilla_compat.js');
importPackage(Packages.constants); //WorldConstants.
var 扣除道具 = 2000000;
var 設定倍率 = 100;//百分比 100 = 2 倍
var 持續時間 = 60;//秒

function start() {
	if(WorldConstants.頻道經驗指令開關){
		cm.sendOk("本功能臨時關閉");
		cm.dispose();
		return;
	}
	if(cm.ExpRate_Channel_Check()){
		cm.gainItem(2000000,-1);
		cm.dispose();
		cm.processCommand("@ExpRate_Channel " + 設定倍率 + " " + 持續時間);
	}else{
		cm.sendOk("當前頻道經驗倍率增加時間尚未結束，請等待結束後再次嘗試");
	}
	cm.dispose();
}