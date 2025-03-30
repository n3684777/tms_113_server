/* 
	AICL團隊修復
*/
 
 
var status = -1;

function action(mode, type, selection) {
	if (cm.isQuestActive(3929)) {
        if (cm.haveItem(4031580)) {
			if(cm.getBossLog("米奇里提到的沙影團1") >= 1 && cm.getBossLog("米奇里提到的沙影團2") >= 1  && cm.getBossLog("米奇里提到的沙影團4") >= 1 ){
				cm.setBossLog("米奇里提到的沙影團3");
                cm.gainItem(4031580, -1);
				cm.gainExp(6500);
				cm.forceCompleteQuest(3929);
				cm.sendNext("完成了任務。");
			}else{
				if (cm.getBossLog("米奇里提到的沙影團3") == 1) {
					cm.sendNext("貌似已經給過食物了。");
				} else {
					cm.setBossLog("米奇里提到的沙影團3");
					cm.gainItem(4031580, -1);
					cm.sendNext("這間放好了。");
					cm.forceStartQuest(3929);
				}
			}
            
        }
        cm.dispose();
    }else{
		if(cm.isQuestActive(3926)){
			cm.sendNext("這個位置不好。");
		}else{
			cm.sendNext(".....");
		}
	}
	cm.dispose();
}

