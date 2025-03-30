var status = -1;

function end(mode, type, selection) {
    if(mode == -1 || mode == 0 && type > 0) {
        qm.dispose();
        return;
    }
    
    if (mode == 1) {
	    status++;
    } else {
	    if (status == 6) {
	        qm.dispose();
	        return;
	    }
	    status--;
    }

    if (status == 0) {
    	qm.sendYesNo("您已經找到你心儀的另一半了嗎?");
    } else if (status == 1) {
        var party = qm.getPlayer().getParty();
        if (party != null) {
            var members = party.getMembers();
            if (members.size() == 2) {
                var member1 = qm.getMap().getCharacterById(members.get(0).getId());
                var member2 = qm.getMap().getCharacterById(members.get(1).getId());
                if (member1 && member2 && member1.getGender() != member2.getGender()) { 
                    qm.sendNextPrev("我想考考你們是不是真的情比金堅，要開始了嗎？");
                } else {
                    qm.sendNext("兩位隊員的性別應該要不同。");
                    qm.dispose();
                }
            } else {
                qm.sendNext("您的隊伍人數必須是兩人。");
                qm.dispose();
            }
        } else {
            qm.sendNext("請組建一個隊伍再與我對話。");
            qm.dispose();
        }
    } else if (status == 2) {
		qm.sendNext("讓我們趕緊開始下一階段吧！");
        qm.forceCompleteQuest();
        qm.dispose();
    }
}
