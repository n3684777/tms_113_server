/*
	NPC Name: 		Asia
	Description: 		Quest - Activating Core Blaze
*/

var status = -1;

function start(mode, type, selection) {
    qm.dispose();
}

function end(mode, type, selection) {
    if (qm.getQuestStatus(50004) == 0) {
	    qm.forceStartQuest();
	    qm.dispose();
    } else {
	    if (mode == 1) {
	        status++;
	    } else {
	        status--;
	    }
	    if (status == 0) {
	        qm.sendNext("(我重新來到了2102年的澀谷。 那是... #p9120033#!) \n......你是......!");
	    } else if (status == 1) {
	        qm.sendNextPrev("...噢，你是來打敗 #o9400296# 的吧...真是，抱歉...。\n(#p9120033# 說著低下了頭)");
	    } else if (status == 2) {
	        qm.sendNextPrev("敵人的根據地是位於六本木中央的的#b『六本木商城』#k。不過，當然不能正面進入。前廳裡配置著被稱為 #o9400287# ，防禦力非常強大的警備系機械軍團。 首先，要避開他們的眼線，偷偷地潛入建築物內部。\n(說著，#p9120033# 拿出了一張地圖。)");
	    } else if (status == 3) {
	        qm.sendOk("其實，有從澀谷延伸至六本木商城的地下通道。 只要利用這個，應該不會被 #o9400287# 發現，就能進入建築物內部。 這是地圖，雖然只有一條路而不可能會迷路，但以防萬一還是給你吧。");
	        qm.forceCompleteQuest();
	        qm.forceStartQuest(50015);
	        qm.forceCompleteQuest(50015);  // 要接取這個任務後打首腦
            qm.safeDispose();
	    }
    }
}