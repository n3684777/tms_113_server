/* 
	AICL團隊修復
*/

var status = -1;

function action(mode, type, selection) {
	if (cm.isQuestActive(3926)) {
        if (cm.haveItem(4031579)) {
			if(cm.getBossLog("耍紅蠍子團2") >= 1 && cm.getBossLog("耍紅蠍子團3") >= 1  && cm.getBossLog("耍紅蠍子團4") >= 1 ){
				cm.setBossLog("耍紅蠍子團1");
                cm.gainItem(4031579, -1);
				cm.gainExp(6500);
				cm.forceCompleteQuest(3926);
				cm.sendNext("完成了任務。");
			}else{
				if (cm.getBossLog("耍紅蠍子團1") == 1) {
					cm.sendNext("貌似已經給過米了。");
				} else {
					cm.setBossLog("耍紅蠍子團1");
					cm.gainItem(4031579, -1);
					cm.forceStartQuest(3926);
				}
			}
            
        }
        cm.dispose();
    }else{
		if(cm.isQuestActive(3929)){
			cm.sendNext("這個位置不好。");
		}else{
			cm.sendNext(".....");
		}
	}
	cm.dispose();
}