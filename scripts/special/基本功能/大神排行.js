var status = -1;

function start() {
	action(1, 0, 0)
}

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else if (mode == 0) {
		status--;
	} else {
		cm.dispose();
		return;
	}
	if (status == 0) {
		cm.sendSimple(
			"你好我是#r「榮耀排名」#k系統。" +
			"\r\n傳奇值得被記載#k\r\n" +
			"#L0##r公會排名\n\#l" +
			"\r\n#L1##d等級排名\n\#l" +
			"\r\n#L2##r職業排名\n\#l" +
			"\r\n#L3##d金錢排名\n\#l" +						
			"\r\n#L4##r在線排名\n\#l" +
			"\r\n#L5##d擊殺排名\n\#l" +
			"\r\n#L6##r名聲排名\n\#l" +
			"\r\n#L7##d傷害排名\n\#l");
		
	} else if (status == 1) {
		if (selection == 0) {
			cm.displayGuildRanks();
			cm.dispose();
		} else if (selection == 1) {
			cm.showlvl();
			cm.dispose();
		} else if (selection == 2) {
			cm.sendSimple("#L1##d劍士#k排名\r\n"+
							"#L2##d法師#k排名\r\n"+
							"#L3##b弓箭手#k排名\r\n"+
							"#L4##b盜賊#k排名\r\n"+
							"#L5##r海盜#k排名\r\n"+
							"#L6##r狂狼勇士#k排名\r\n");	
		} else if (selection == 3) {
			cm.showRank("金錢排行");
			cm.dispose();
		}
		else if (selection == 4) {
			cm.showRank("在線時間累積總數");
			cm.dispose();
		}
		else if (selection == 5) {
			cm.showRank("怪物擊殺總數");
			cm.dispose();
		}
		else if (selection == 6) {
			cm.showRank("名聲排行");
			cm.dispose();
		}
		else if (selection == 7) {
			cm.showRank("DPS每秒傷害");
			cm.dispose();
		}
		 
	} else if (status == 2) {
		cm.sendNext(cm.ShowJobRank(selection));
		cm.dispose();
	}
	else {
		cm.dispose();
	}
}
