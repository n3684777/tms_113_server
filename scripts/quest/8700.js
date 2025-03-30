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
    	qm.sendYesNo("�z�w�g���A�߻����t�@�b�F��?");
    } else if (status == 1) {
        var party = qm.getPlayer().getParty();
        if (party != null) {
            var members = party.getMembers();
            if (members.size() == 2) {
                var member1 = qm.getMap().getCharacterById(members.get(0).getId());
                var member2 = qm.getMap().getCharacterById(members.get(1).getId());
                if (member1 && member2 && member1.getGender() != member2.getGender()) { 
                    qm.sendNextPrev("�ڷQ�ҦҧA�̬O���O�u���������A�n�}�l�F�ܡH");
                } else {
                    qm.sendNext("��춤�����ʧO���ӭn���P�C");
                    qm.dispose();
                }
            } else {
                qm.sendNext("�z������H�ƥ����O��H�C");
                qm.dispose();
            }
        } else {
            qm.sendNext("�вիؤ@�Ӷ���A�P�ڹ�ܡC");
            qm.dispose();
        }
    } else if (status == 2) {
		qm.sendNext("���ڭ̻���}�l�U�@���q�a�I");
        qm.forceCompleteQuest();
        qm.dispose();
    }
}
