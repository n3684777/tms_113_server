var status = -1;
function start() {
	action(1, 0, 0);
}
var sel;

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
			if (cm.getPlayer().isGM()) {
				send += "#d===================GM顯示訊息===================\r\n";
				send += "本日當前賭博系統" + (cm.getNiuNiuTotalWin() > 0 ? "賠出 " : "獲利 ") + Math.abs(cm.getNiuNiuTotalWin()) + " 楓幣!\r\n";
				send += "當前此局投注額:" + cm.getNiuNiuNowBet() +"楓幣\r\n";
				send += "=================================================\r\n";
			}
			send += "#r歡迎來到妞妞賭盤!#d(今日總下注額:" + cm.getNiuNiuTotalBet() + ")#b\r\n";
			send += "#L1#我要下注!\r\n";
			send += "#L2#查看妞妞遊戲規則(詳閱)\r\n";
			//send += "#L4#查看本日歷史開牌紀錄\r\n";
			cm.sendOk(send);
		} else if (status == 1) {
			sel = selection;
			if (sel == 2) {
				cm.sendOk(cm.getNiuNiuRules());
				cm.dispose();
			} else {
				var msg = "";
				msg += "請問你想下注多少楓幣呢?\r\n";
				cm.sendGetNumber(msg, 1, 1, 2147483647);
			}
		} else if (status == 2) {
			if (sel == 1) {
				var total = cm.getMeso() + parseInt(selection * 5);
				if (total <= 2147483647) {
					cm.sendOk(cm.NiuNiuBet(selection));
				} else {
					cm.sendOk("你目前的背包楓幣太多!若此下注中獎,將會溢出,請先減少背包的楓幣量!");
				}
			}
			cm.dispose();
		}
	}

}