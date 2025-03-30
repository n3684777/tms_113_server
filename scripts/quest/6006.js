var status = -1;



function start(mode, type, selection) {
	if (mode == -1) {
		qm.dispose();
	} else {
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			var msg = "";
			var mount = qm.getPlayer().getMount();
			if(selection == -1){
				qm.sendNext("啊？不需要啊？如果你對野豬已經很滿足的話，那我也不便勉強。但若你改變心意，歡迎隨時再來找我喔！");
				qm.dispose();
			}
			if(mount != null && mount.getLevel() >= 3){
				msg += "喔！你已經有學會怪物騎乘技能，而且還擁有一隻野豬啊！看你達成與怪物共生共存，真是令人感到開心。就因為有你這樣的人在，我的研究才有價值";
				qm.sendNext(msg);
			}else{
				msg += "您的騎寵等級還沒有滿 3 等!!";
				qm.sendNext(msg);
				qm.dispose();
			}
		}if (status == 1) {
			qm.sendAcceptDecline("對了！不久前，我找到可提升怪物騎乘能力的方法囉！那就是#b#t1902001##k~嘿嘿~如何？名字也很炫吧！你的怪物是否有需要升級成#t1902001#呢？")
		}if (status == 2) {
			qm.forceStartQuest(6006);
			qm.dispose();
		}
	}
}
