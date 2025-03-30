var status = 0;
var section = 0;
importPackage(java.lang);
//questid 29932, infoquest 7760
function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 99) {
		cm.dispose();
		return;
	}
	status--;
    }
	if (status == 1) {
		cm.sendOk("埃及金字塔副本暫時關閉。");
		cm.dispose();
		}
	/*
    if (status == 1) {	
	if (cm.getMapId() >= 926020001 && cm.getMapId() <= 926020004) {
		var itemid = 4001321 + (cm.getMapId() % 10);
		if (!cm.canHold(itemid)) {
			cm.sendOk("請空出一些其他欄。");
		} else {
			cm.gainItem(itemid,1);
			cm.warp(cm.getMapId() - 10000, 0);
		}
		cm.dispose();
	} else if (cm.getMapId() >= 926010001 && cm.getMapId() <= 926010004) {
		cm.warp(926010000,0);
		cm.dispose();
	} else if (cm.getMapId() >= 926010100 && cm.getMapId() <= 926013504) {
		cm.sendYesNo("你想要離開這裡？？");
		status = 99;
	} else {
		cm.sendSimple("我的名字是#p2103013#\r\n#b#e#L1#進入金字塔副本.#l#n\r\n#L2#進入法老小雪球副本#l\r\n#L3#兌換法老王腰帶#l\r\n#L4#兌換勳章#l#k");
	}
    } else if (status == 2) {
		section = selection;
		if (selection == 1) {
			cm.sendSimple("你這個無知的傻瓜居然敢無視上帝的憤怒，選擇一個命運吧！\r\n#L0# #v3994115# #l#L1# #v3994116# #l#L2# #v3994117# #l#L3# #v3994118# #l");
		} else if (selection == 2) {
			cm.sendSimple("你想要進入哪一種副本？？\r\n#L0##i4001322##t4001322##l\r\n#L1##i4001323##t4001323##l\r\n#L2##i4001324##t4001324##l\r\n#L3##i4001325##t4001325##l");
		} else if (selection == 3) {
			cm.sendOk("在法老雪人墓中，您可以獲得一個#e#b#t2022613##k#n通過證明自己有能力擊敗#b法老小雪人#k,獲得法老寶盒，盒子裡面有一個特別的寶藏，那就是#b#b#t1132012##k#n.\r\n\r\n#i1132012# #t1132012#\r\n\r\n如果你能以某種方式在地獄模式中存活下來，你將獲得#b#b#t1132013##k#n.\r\n#i1132013# #t1132013#\r\n當然，這種狀況應該是不可能發生");
			cm.dispose();
		} else if (selection == 4) {
			var record = cm.getQuestRecord(7760);
			var data = record.getCustomData();
			if (data == null) {
				record.setCustomData("0");
				data = record.getCustomData();
			}
			var mons = parseInt(data);
			if (mons < 50000) {
				cm.sendOk("請在金字塔中擊敗至少 50,000 只怪物，然後再找我。 目前擊殺了： " + mons);
			} else if (cm.canHold(1142142) && !cm.haveItem(1142142)){
				cm.gainItem(1142142,1);
				cm.forceStartQuest(29932);
				cm.forceCompleteQuest(29932);
			} else {
				cm.sendOk("請清出空間");
			}
			cm.dispose();
		}
	} else if (status == 3) {
		if (section == 1) {
			var cont_ = false;
			if (selection == 0) { //easy; 40-45
				if (cm.getPlayer().getLevel() < 40) {
					cm.sendOk("您的等級不足 40.");
				} else if (cm.getPlayer().getLevel() > 60) {
					cm.sendOk("您的等級高於60.");
				} else {
					cont_ = true;
				}
			} else if (selection == 1) { //normal; 46-50
				if (cm.getPlayer().getLevel() < 45) {
					cm.sendOk("您的等級不足 45.");
				} else if (cm.getPlayer().getLevel() > 80) {
					cm.sendOk("您的等級高於80.");
				} else {	
					cont_ = true;
				}
			} else if (selection == 2) { //hard; 51-60
				if (cm.getPlayer().getLevel() < 50) {
					cm.sendOk("您的等級不足 50.");
				} else if (cm.getPlayer().getLevel() > 120) {
					cm.sendOk("您的等級高於120");
				} else {
					cont_ = true;
				}
			} else if (selection == 3) { //hell; 61+
				if (cm.getPlayer().getLevel() < 120) {
					cm.sendOk("您的等級不足120.");
				} else {
						cont_ = true;
				}
			}
			if (cont_ && cm.isLeader()) {//todo
				if (!cm.start_PyramidSubway(selection)) {
					cm.sendOk("金字塔目前已滿.");
				}
			} else if (cont_ && !cm.isLeader()) {
				cm.sendOk("您必須是隊長");
			}
		} else if (section == 2) {
			var itemid = 4001322 + selection;
			if (!cm.haveItem(itemid,1)) {
				cm.sendOk("您沒有這個物品");
			} else {
				if (cm.bonus_PyramidSubway(selection)) {
					cm.gainItem(itemid, -1);
				} else {
					cm.sendOk("金字塔目前已滿");
				}
			}
		}
		cm.dispose(); //todo
	} else if (status == 100) {
		cm.warp(926010000,0);
		cm.dispose();
	}
	*/
}