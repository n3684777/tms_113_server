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
			send += "#r�аݧA�Q�U�`���@�ϩO?#d(�����`�U�`�B:" + cm.getBaccaratTotalBet() + ")#b\r\n";
			send += "#L1#���a(1��0.95)\r\n";
			send += "#L2#���a(1��1)\r\n";
			send += "#L3#�M��(1��8)\r\n";
			send += "#L4#�d�ݥ�����v�}�P����\r\n";
			send += "#L5#�d�ݦʮa�ֹC���W�h(�Ծ\)\r\n";
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
				var send = "#b�п�ܱz�n��`�����O:\r\n#r";
				send += "#L1#����\r\n";
				send += "#L2#���I\r\n";
				send += "#L3#GASH\r\n";
				send += "#L4#���Q\r\n";
				cm.sendOk(send);
			}
		} else if (status == 2) {
			sel2 = selection;
			var msg = "";
			msg += "�аݧA�Q�U�`�h�֩O?\r\n";
			cm.sendGetNumber(msg, 1, 1, 2147483647);
		} else if (status == 3) {
			if (sel == 1) {
				if (sel2 == 1) {
					var total = cm.getMeso() + parseInt(selection * 0.95);
					if (total <= 2147483647) {
						cm.sendOk(cm.BaccaratBet("���a", selection, "����"));
					} else {
						cm.sendOk("�A�ثe���I�]�����Ӧh!�Y���U�`����,�N�|���X,�Х���֭I�]�������q!");
					}
				} else if (sel2 == 2) {
					cm.sendOk(cm.BaccaratBet("���a", selection, "���I"));
				} else if (sel2 == 3) {
					cm.sendOk(cm.BaccaratBet("���a", selection, "GASH"));
				} else if (sel2 == 4) {
					cm.sendOk(cm.BaccaratBet("���a", selection, "���Q"));
				}
			} else if (sel == 2) {
				if (sel2 == 1) {
					var total = cm.getMeso() + parseInt(selection * 1);
					if (total <= 2147483647) {
						cm.sendOk(cm.BaccaratBet("���a", selection, "����"));
					} else {
						cm.sendOk("�A�ثe���I�]�����Ӧh!�Y���U�`����,�N�|���X,�Х���֭I�]�������q!");
					}
				} else if (sel2 == 2) {
					cm.sendOk(cm.BaccaratBet("���a", selection, "���I"));
				} else if (sel2 == 3) {
					cm.sendOk(cm.BaccaratBet("���a", selection, "GASH"));
				} else if (sel2 == 4) {
					cm.sendOk(cm.BaccaratBet("���a", selection, "���Q"));
				}
			} else if (sel == 3) {
				if (sel2 == 1) {
					var total = cm.getMeso() + parseInt(selection * 7);
					if (total <= 2147483647) {
						cm.sendOk(cm.BaccaratBet("�M��", selection, "����"));
					} else {
						cm.sendOk("�A�ثe���I�]�����Ӧh!�Y���U�`����,�N�|���X,�Х���֭I�]�������q!");
					}
				}
			} else if (sel2 == 2) {
				cm.sendOk(cm.BaccaratBet("�M��", selection, "���I"));
			} else if (sel2 == 3) {
				cm.sendOk(cm.BaccaratBet("�M��", selection, "GASH"));
			} else if (sel2 == 4) {
				cm.sendOk(cm.BaccaratBet("�M��", selection, "���Q"));
			}
			cm.dispose();
		}
	}

}