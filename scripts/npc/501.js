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
				send += "#d===================GM��ܰT��===================\r\n";
				send += "�����e��ըt��" + (cm.getBlackJackTotalWin() > 0 ? "�ߥX " : "��Q ") + Math.abs(cm.getBlackJackTotalWin()) + " ����!\r\n";
				send += "��e������`�B:" + cm.getBlackJackNowBet() +"����\r\n";
				send += "=================================================\r\n";
			}
			send += "#r�w��Ө�21�I��L!#d(�����`�U�`�B:" + cm.getBlackJackTotalBet() + ")#b\r\n";
			send += cm.getNowBlackJackCard() + "";
			send += "#L1#�ڭn�U�`!#l\r\n";
			send += "#L3#�ڭn�ɵP!#l\r\n\r\n";
			send += "#L2#�d��21�I�C���W�h(�Ծ\)\r\n";
			//send += "#L4#�d�ݥ�����v�}�P����\r\n";
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
				msg += "�аݧA�Q�U�`�h�ַ����O?\r\n";
				cm.sendGetNumber(msg, 1, 1, 2147483647);
			}
		} else if (status == 2) {
			if (sel == 1) {
				var total = cm.getMeso() + parseInt(selection * 3);
				if (cm.getPlayer().getBlackJackCard() != null) {
					cm.sendOk("�z�ثe�w�U�`,�i��ܬO�_�ɵP!");
				} else if (total <= 2147483647) {
					cm.sendOk(cm.BlackJackBet(selection));
				} else {
					cm.sendOk("�A�ثe���I�]�����Ӧh!�Y���U�`����,�N�|���X,�Х���֭I�]�������q!");
				}
			}
			cm.dispose();
		}
	}

}