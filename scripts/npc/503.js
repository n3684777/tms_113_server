var status = -1;
function start() {
	action(1, 0, 0);
}
var sel;
var sel2;

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1) {
			status++;
		} else {
			status--;
		}
		if (status == 0) {
			var send = "";
			send += cm.getBaccaratGMInfo();
			send += "#r請問你想下注哪一區呢?#d(今日總下注額:" + cm.getBaccaratTotalBet() + ")#b\r\n";
			send += "#L1#莊家(1賠0.95)\r\n";
			send += "#L2#閒家(1賠1)\r\n";
			send += "#L3#和局(1賠8)\r\n";
			send += "#L4#查看本日歷史開牌紀錄\r\n";
			send += "#L5#查看百家樂遊戲規則(詳閱)\r\n";
			cm.sendOk(send);
		} else if (status == 1) {
			sel = selection;
			if (sel == 4) {
				cm.sendOk(cm.getShowdownLog());
				cm.dispose();
			} else if (sel == 5) {
				cm.sendOk(cm.getBaccaratRules());
				cm.dispose();
			} else {
				var send = "#b請選擇您要投注的類別:\r\n#r";
				send += "#L1#楓幣\r\n";
				send += "#L2#楓點\r\n";
				send += "#L3#GASH\r\n";
				send += "#L4#紅利\r\n";
				cm.sendOk(send);
			}
		} else if (status == 2) {
			sel2 = selection;
			var msg = "";
			msg += "請問你想下注多少呢?\r\n";
			cm.sendGetNumber(msg, 1, 1, 2147483647);
		} else if (status == 3) {
			if (sel == 1) {
				if (sel2 == 1) {
					var total = cm.getMeso() + parseInt(selection * 0.95);
					if (total <= 2147483647) {
						cm.sendOk(cm.BaccaratBet("莊家", selection, "楓幣"));
					} else {
						cm.sendOk("你目前的背包楓幣太多!若此下注中獎,將會溢出,請先減少背包的楓幣量!");
					}
				} else if (sel2 == 2) {
					cm.sendOk(cm.BaccaratBet("莊家", selection, "楓點"));
				} else if (sel2 == 3) {
					cm.sendOk(cm.BaccaratBet("莊家", selection, "GASH"));
				} else if (sel2 == 4) {
					cm.sendOk(cm.BaccaratBet("莊家", selection, "紅利"));
				}
			} else if (sel == 2) {
				if (sel2 == 1) {
					var total = cm.getMeso() + parseInt(selection * 1);
					if (total <= 2147483647) {
						cm.sendOk(cm.BaccaratBet("閒家", selection, "楓幣"));
					} else {
						cm.sendOk("你目前的背包楓幣太多!若此下注中獎,將會溢出,請先減少背包的楓幣量!");
					}
				} else if (sel2 == 2) {
					cm.sendOk(cm.BaccaratBet("閒家", selection, "楓點"));
				} else if (sel2 == 3) {
					cm.sendOk(cm.BaccaratBet("閒家", selection, "GASH"));
				} else if (sel2 == 4) {
					cm.sendOk(cm.BaccaratBet("閒家", selection, "紅利"));
				}
			} else if (sel == 3) {
				if (sel2 == 1) {
					var total = cm.getMeso() + parseInt(selection * 7);
					if (total <= 2147483647) {
						cm.sendOk(cm.BaccaratBet("和局", selection, "楓幣"));
					} else {
						cm.sendOk("你目前的背包楓幣太多!若此下注中獎,將會溢出,請先減少背包的楓幣量!");
					}
				}
			} else if (sel2 == 2) {
				cm.sendOk(cm.BaccaratBet("和局", selection, "楓點"));
			} else if (sel2 == 3) {
				cm.sendOk(cm.BaccaratBet("和局", selection, "GASH"));
			} else if (sel2 == 4) {
				cm.sendOk(cm.BaccaratBet("和局", selection, "紅利"));
			}
			cm.dispose();
		}
	}

}