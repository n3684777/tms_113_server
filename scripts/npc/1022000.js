/*  Author: Yud1
    NPC Name:        武術教練
    Map(s):          維多利亞 : 勇士聖殿 (102000003)
    Description:     劍士一轉教官
	Custom Quest:    
*/
var status = 0;
var jobId;
var jobName;
var envelope = 4031008;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 && status == 2) {
        cm.sendOk("請重試.");
        cm.dispose();
        return;
    }
	
    if (mode == 1) { status++; } else { status--; }
	
    if (status == 0) {
		if (cm.getPlayer().getLevel() >= 70) {
			if (cm.getJob()==110||cm.getJob()==120||cm.getJob()==130) {
				if (cm.haveItem(4031059, 1)) {
					cm.gainItem(4031057, 1);
					cm.gainItem(4031059, -1);
					cm.warp(211000001, 0);
					cm.sendOk("你已經完成了力量試驗, 現在請去 #b冰原雪域#k 的 #b長老公館#k 找你的三轉教官 #r泰勒斯#k.");
				} else {
					cm.sendOk("嗨, #b#h0##k! 你的等級已經可以進行三轉了, 但我還是需要測試你的能力. 快去找 #r異次元空間#k 拿 #b#z4031059##k 給我.");
				}
				cm.dispose();
			}if (cm.getPlayer().getLevel() >= 30 && cm.getJob() == 100) {
			if (cm.haveItem(4031012, 1)) {
				if (cm.haveItem(4031012, 1)) {
					status = 20;
					cm.sendNext("恭喜你完成了測試.");
				} else {
					if (!cm.haveItem(envelope)) {
						cm.gainItem(envelope, 1);
					}
					cm.sendOk("請去找 #r劍士轉職教官#k.")
					cm.dispose();
				}
			} else {
				status = 10;
				cm.sendNext("你已經強大到可以進行二轉了, 請點下一頁.");
			}
		}
		} else if (cm.getPlayer().getLevel() >= 30 && cm.getJob() == 100) {
			if (cm.haveItem(4031012, 1)) {
				if (cm.haveItem(4031012, 1)) {
					status = 20;
					cm.sendNext("恭喜你完成了測試.");
				} else {
					if (!cm.haveItem(envelope)) {
						cm.gainItem(envelope, 1);
					}
					cm.sendOk("請去找 #r劍士轉職教官#k.")
					cm.dispose();
				}
			} else {
				status = 10;
				cm.sendNext("你已經強大到可以進行二轉了, 請點下一頁.");
			}
		} else if (cm.getPlayer().getLevel() >= 10 && cm.getJob() == 0) {
			cm.sendNext("你要轉職成為一位 #r劍士#k ?");
		} else {
			cm.sendOk("你好, 我是劍士轉職官.");
			cm.dispose();
		}
    } else if (status == 1) {
        cm.sendNextPrev("一旦轉職了就不能反悔,如果不想轉職請點上一頁.");
    } else if (status == 2) {
        cm.sendYesNo("你真的要成為一位 #r劍士#k ?");
    } else if (status == 3) {
        if (cm.getJob() == 0) {
			//var ApComp = ((cm.getPlayer().getLevel()-1)*5) + 9 - 31;
			//var SpComp = ((cm.getPlayer().getLevel()-10)*3) + 1;
            cm.changeJob(100);
			//cm.resetStats(35, 4, 4, 4);
			//cm.forceAp(ApComp);
			//cm.forceSp(SpComp);
			cm.gainItem(1402001, 1);
			cm.sendOk("轉職成功 !");
			cm.dispose();
        }
    } else if (status == 11) {
		cm.sendNextPrev("你可以選擇你要轉職成為一位 #r狂戰士#k, #r見習騎士#k 或 #r槍騎兵#k.")
    } else if (status == 12) {
        cm.askAcceptDecline("但是我必須先測試你,你準備好了嗎 ?");
    } else if (status == 13) {
        if (!cm.haveItem(envelope, 1)) { cm.gainItem(envelope, 1); }
        cm.warp(102020300, 0);
        cm.sendOk("請去找 #b劍士轉職教官#k . 他會幫助你的.");
        cm.dispose();
    } else if (status == 21) {
		cm.sendSimple("你想要成為什麼 ? #b\r\n#L0#狂戰士#l\r\n#L1#見習騎士#l\r\n#L2#槍騎兵#l#k");
    } else if (status == 22) {
        if (selection == 0) {
            jobName = "狂戰士";
            jobId = 110;
        } else if (selection == 1) {
            jobName = "見習騎士";
            jobId = 120;
        } else if (selection == 2) {
            jobName = "槍騎兵";
            jobId = 130;
		} else {
			cm.sendOk("未知的錯誤");
			cm.dispose();
        }
        cm.sendYesNo("你真的要成為一位 #r" + jobName + "#k?");
    } else if (status == 23) {
        cm.changeJob(jobId);
		cm.gainAp(5);
        cm.gainItem(4031012, -1);
        cm.sendOk("轉職成功 !");
        cm.dispose();
    }
}