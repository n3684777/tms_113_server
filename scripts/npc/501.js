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
				send += "本日當前賭博系統" + (cm.getBlackJackTotalWin() > 0 ? "賠出 " : "獲利 ") + Math.abs(cm.getBlackJackTotalWin()) + " 楓幣!\r\n";
				send += "當前此局投注額:" + cm.getBlackJackNowBet() +"楓幣\r\n";
				send += "=================================================\r\n";
			}
			send += "#r歡迎來到21點賭盤!#d(今日總下注額:" + cm.getBlackJackTotalBet() + ")#b\r\n";
			send += cm.getNowBlackJackCard() + "";
			send += "#L1#我要下注!#l\r\n";
			send += "#L3#我要補牌!#l\r\n\r\n";
			send += "#L2#查看21點遊戲規則(詳閱)\r\n";
			//send += "#L4#查看本日歷史開牌紀錄\r\n";
			cm.sendOk(send);
		} else if (status == 1) {
			sel = selection;
			if (sel == 2) {
				cm.sendOk(cm.getBlackJackRules());
				cm.dispose();
			} else if (sel == 3) {
				cm.sendOk(cm.BlackJackBet(0));
				cm.dispose();
			} else {
				var msg = "";
				msg += "請問你想下注多少楓幣呢?\r\n";
				cm.sendGetNumber(msg, 1, 1, 2147483647);
			}
		} else if (status == 2) {
			if (sel == 1) {
				var total = cm.getMeso() + parseInt(selection * 3);
				if (cm.getPlayer().getBlackJackCard() != null) {
					cm.sendOk("您目前已下注,可選擇是否補牌!");
				} else if (total <= 2147483647) {
					cm.sendOk(cm.BlackJackBet(selection));
				} else {
					cm.sendOk("你目前的背包楓幣太多!若此下注中獎,將會溢出,請先減少背包的楓幣量!");
				}
			}
			cm.dispose();
		}
	}

}