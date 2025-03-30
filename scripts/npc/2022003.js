var status = -1;

var minLevel = 120;
var maxLevel = 200;

var minPartySize = 6;
var maxPartySize = 6;

var 副本log紀錄 = "侏儒帝王副本";
var 每日場次 = 5;

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		if (status == 0) {
			cm.dispose();
		}
		status--;
	}
	if (status == 0) {
		if (cm.getParty() == null) { // No Party
			cm.sendSimple("你貌似沒有達到要求...:\r\n\r\n#r要求: " + minPartySize + " 玩家成員, 每個人的等級必須在 " + minLevel + " 到 等級 " + maxLevel + ".#b\r\n#L2#升級紅色雷克斯耳環#l\r\n#L3#升級藍色雷克斯耳環#l\r\n#L4#升級綠色雷克斯耳環#l\r\n#L5#查詢本日剩餘次數#l#k");
		} else if (!cm.isLeader()) { // Not Party Leader
			cm.sendSimple("如果你想做任務，請 #b隊長#k 跟我談.#b\r\n#L2#升級紅色雷克斯耳環#l\r\n#L3#升級藍色雷克斯耳環#l\r\n#L4#升級綠色雷克斯耳環#l\r\n#L5#查詢本日剩餘次數#l#k");
		} else {
			cm.sendSimple("#b#L1#前往冰川峽谷與隊伍一起。#l\r\n#L2#升級紅色雷克斯耳環#l\r\n#L3#升級藍色雷克斯耳環#l\r\n#L4#升級綠色雷克斯耳環#l\r\n#L5#查詢本日剩餘次數#l#k");
		}
	} else if (status == 1) {
		if (selection == 1) {
			var party = cm.getParty().getMembers();
			var mapId = cm.getMapId();
			var next = true;
			var levelValid = 0;
			var inMap = 0;
			var it = party.iterator();

			while (it.hasNext()) {
				var cPlayer = it.next();
				if ((cPlayer.getLevel() >= minLevel) && (cPlayer.getLevel() <= maxLevel)) {
					levelValid += 1;
				} else {
					next = false;
				}
				if (cPlayer.getChr().getBossLog(副本log紀錄) > 每日場次) {
					next = false;
				}
				if (cPlayer.getMapid() == mapId) {
					inMap += (cPlayer.getJobId() == 900 ? 6 : 1);
				}
			}
			if (party.size() > maxPartySize || inMap < minPartySize) {
				next = false;
			}
			if (next) {
				var em = cm.getEventManager("Rex");
				if (em == null) {
					cm.sendSimple("找不到腳本請聯絡GM#b\r\n#L2#升級紅色雷克斯耳環#l\r\n#L3#升級藍色雷克斯耳環#l\r\n#L4#升級綠色雷克斯耳環#l\r\n#L5#查詢本日剩餘次數#l#k");
				} else {
					var prop = em.getProperty("state");
					if (prop.equals("0") || prop == null) {
						var it = party.iterator();
						while (it.hasNext()) {
							var cPlayer = it.next();
							cPlayer.getChr().setBossLog(副本log紀錄);
						}
						em.startInstance(cm.getParty(), cm.getMap());
						cm.dispose();
						return;
					} else {
						cm.sendSimple("其他隊伍已經在裡面做 #r組隊任務了#k 請嘗試換頻道或者等其他隊伍完成。#b\r\n#L2#升級紅色雷克斯耳環#l\r\n#L3#升級藍色雷克斯耳環#l\r\n#L4#升級綠色雷克斯耳環#l\r\n#L5#查詢本日剩餘次數#l#k");
					}
				}
			} else {
				cm.sendSimple("你的隊伍貌似沒有達到要求...:\r\n\r\n#r要求: " + minPartySize + " 玩家成員, 每個人的等級必須在 " + minLevel + " 到 等級 " + maxLevel + ".#b\r\n#L2#升級紅色雷克斯耳環#l\r\n#L3#升級藍色雷克斯耳環#l\r\n#L4#升級綠色雷克斯耳環#l\r\n#L5#查詢本日剩餘次數#l#k");
			}
		} else if (selection == 2) {
			if (cm.haveItem(1032078,1)) {
				if (!cm.canHold(1032103,1)) {
					cm.sendOk("裝備欄位請留出空間。");
				} else if (cm.haveItem(4001530,20) && cm.isGMS()) {
					cm.gainItem(1032103, 1);
					cm.gainItem(4001530, -20);
				} else {
					cm.sendOk("請帶來20個霍布戰士證明。");
				}
			} else {
				cm.sendOk("請帶上紅色雷克斯耳環再來。");
			}
		} else if (selection == 3) {
			if (cm.haveItem(1032079,1)) {
				if (!cm.canHold(1032104,1)) {
					cm.sendOk("裝備欄位請留出空間。");
				} else if (cm.haveItem(4001530,20) && cm.isGMS()) {
					cm.gainItem(1032104, 1);
					cm.gainItem(4001530, -20);
				} else {
					cm.sendOk("請帶來20個霍布戰士證明。");
				}
			} else {
				cm.sendOk("請帶上藍色雷克斯耳環再來。");
			}
		} else if (selection == 4) {
			if (cm.haveItem(1032077,1)) {
				if (!cm.canHold(1032102,1)) {
					cm.sendOk("裝備欄位請留出空間。");
				} else if (cm.haveItem(4001530,20) && cm.isGMS()) {
					cm.gainItem(1032102, 1);
					cm.gainItem(4001530, -20);
				} else {
					cm.sendOk("請帶來20個霍布戰士證明。");
				}
			} else {
				cm.sendOk("請帶上綠色雷克斯耳環再來。");
			}
		} else if (selection == 5) {
			cm.sendOk("本日剩餘次數為:" + (每日場次 - cm.getBossLog(副本log紀錄)));
		}
		cm.dispose();
	}
}
