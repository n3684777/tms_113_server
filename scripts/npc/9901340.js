//���� - �k(4) �S��(7)
var status = 0;
var beauty = 0;
var hairprice = 1000000;
var hair = Array(37410, 37420, 37430, 37440, 37450, 37460);
var hairnew = Array();
var sex = false;
var item1 = 4006003;

function start() {
	hairprice = hairprice * 0.5; //�P�P�� ��5��
	status = -1;
	action(1, 0, 0);
}

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
			if(!cm.getChar().getGender() == 1) {
				cm.sendYesNo("�z�n�A�ڬO�R�e�����A�z�i�z�L�u�q�s�}�l�Y�v�I�����v�P�ڧ��Y�v");
				sex = true;
			} else {
				cm.sendSimple("�ڬO�R�e�����A�p�G�A��#b#t" + item1 +"##k�C\r\n#L1#�v���ܴ�: #i" + item1+ "##t" + item1 + "##l");
			}
		} else if (status == 1) {
			if (selection == 0) {
				beauty = 0;
				cm.sendSimple("�z�Q�ʶR���@���u�f��?\r\n#L0#�v���ܴ� " + hairprice + " ����: #i" + item1 + "##t" + item1 + "##l");
			} else if (selection == 1) {
				beauty = 1;
				hairnew = Array();
				for(var i = 0; i < hair.length; i++) {
					hairnew.push(hair[i] + parseInt(cm.getChar().getHair() % 10)); //���o�v��(�ë��Ӿv��󴫾v��)
				}
				cm.sendStyle("�ڥi�H���A�ܨ����q�s�}�l�����@�ɤH���v���A�p��?�n���n�Ӹո�?�p�G�A�� #b#t" + item1 + "##k �ڥi�H���z�j��y�A��@�ӧA���w��~", hairnew);
			} else {
				cm.sendSimple("�ڬO�R�e�����A�p�G�A��#b#t" + item1 + "##k�C\r\n#L1#�ϥ� #i" + item1 + "##t" + item1 + "##l");
			}
		} else if (status == 2 && sex == false){
			cm.dispose();
			if (beauty == 0){
				if (selection == 0 && (cm.getMeso() >= hairprice)) {
					cm.gainMeso(-hairprice);
					cm.gainItem(item1, 1);
					cm.sendOk("�ɨ��a!");
				} else {
					cm.sendOk("�A�S�����������ʶR�u�f��!");
				}
			}
			if (beauty == 1){
				if (cm.haveItem(item1) == true){
					cm.gainItem(item1, -1);
					cm.setHair(hairnew[selection]);
					cm.sendOk("�ɨ��A�����s�v���a!");
				} else {
					cm.sendOk("��p�A�A���G�S���u�f���A�ڤ��ର�z���y�W�@�L�G���Y�v!");
				}
			}
		} else if (status == 2 && sex == true) {
			if (selection == 0) {
				beauty = 0;
				cm.sendSimple("�z�Q�ʶR���@���u�f��?\r\n#L0#�v���ܴ� " + hairprice + " ����: #i" + item1 + "##t" + item1 + "##l");
			} else if (selection == 1) {
				beauty = 1;
				hairnew = Array();
				for(var i = 0; i < hair.length; i++) {
					hairnew.push(hair[i] + parseInt(cm.getChar().getHair() % 10)); //���o�v��(�ë��Ӿv��󴫾v��)
				}
				cm.sendStyle("�ڥi�H���A����Ŭ����v���A�p��?�n���n�Ӹո�?�p�G�A�� #b#t" + item1 + "##k �ڥi�H���z�j��y�A��@�ӧA���w��~", hairnew);
			} else {
				cm.sendSimple("�ڬO���Ŭ��v�y���ۤƮv�A�p�G�A��#b#t" + item1 + "##k�C\r\n#L0#�ڭn�ʶR�u�f��#l\r\n#L1#�ϥ� #i" + item1 + "##t" + item1 + "##l");
			}
		} else if (status == 3) {
			cm.dispose();
			if (beauty == 0){
				if (selection == 0 && (cm.getMeso() >= hairprice)) {
					cm.gainMeso(-hairprice);
					cm.gainItem(item1, 1);
					cm.sendOk("�ɨ��a!");
				} else {
					cm.sendOk("�A�S�����������ʶR�u�f��!");
				}
			}
			if (beauty == 1){
				if (cm.haveItem(item1) == true){
					cm.gainItem(item1, -1);
					cm.setHair(hairnew[selection]);
					cm.sendOk("�ɨ��A�����s�v���a!");
				} else {
					cm.sendOk("��p�A�A���G�S���u�f���A�ڤ��ର�z���y�W�@�L�G���Y�v!");
				}
			}
		}
	}
}
