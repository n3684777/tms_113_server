//���� - �k(4) �S��(7)
var status = 0;
var beauty = 0;
var hairprice = 1000000;
var hair = Array(32640, 32650, 32660);
var hairnew = Array();
var face = Array(23009,24005,24006); //�k���y��
var facenew = Array();
var sex = false;
var item1 = 4310096;

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
				cm.sendYesNo("�z�n�A�ڬO�ȵ��R�A�z�i�z�L�u#b#t" + item1 +"##k�v�P�ڧ��Y�v�B�y��");
				sex = true;
			} else {
				cm.sendSimple("�ڬO�ȵ��R�A�p�G�A��#b#t" + item1 + "#�i�P�ڧ󴫥H�U�A��#k�C\r\n#L1#�v��#l\r\n#L3#�y��#l");
			}
		} else if (status == 1) {
			if (selection == 0) {
				beauty = 1;
				cm.sendStyle("��@�ӧa!", skin);
			} else if (selection == 1) {
				beauty = 2;
				hairnew = Array();
				for(var i = 0; i < hair.length; i++) {
					hairnew.push(hair[i] + parseInt(cm.getChar().getHair() % 10)); //���o�v��(�ë��Ӿv��󴫾v��)
				}
				cm.sendStyle("��@�ӧA���N���v���a!", hairnew);
			} else if (selection == 2) {
				beauty = 3;
				haircolor = Array();
				var current = parseInt(cm.getChar().getHair() / 10) * 10; //���o�v�������
				for(var i = 0; i < 8; i++) { //�v��(0~8)�@9��
					haircolor.push(current + i); //push��array
				}
				cm.sendStyle("��@�ӧa!", haircolor);
			} else if (selection == 3) {
				beauty = 4;
				facenew = Array();
				for(var i = 0; i < face.length; i++) {
					facenew.push(face[i] + cm.getChar().getFace() % 1000 - (cm.getChar().getFace() % 100)); //���� (�ʦ�� - �Q��Ʀr �D�X���� ���Ӳ����������)
				}
				cm.sendStyle("��@�ӧA���N���y���a!", facenew);
			} else if (selection == 4) {
				beauty = 5;
				var current = cm.getChar().getFace() % 100 + 21000; //20000(�k) 21000(�k)
				colors = Array();
				colors = Array(current , current + 100, current + 200, current + 300, current + 400, current + 500, current + 600, current + 700, current + 800); //����(0xx~8xx) �@9��
				cm.sendStyle("��@�ӧa!", colors);
			} else {
				cm.sendSimple("�ڬO�ȵ��R�A�p�G�A��#b#t" + item1 + "##k�i�P�ڧ󴫥H�U�A�ȡC\r\n#L1#�M�C����v����#l\r\n#L3#�M�C�����y����#l");
			}
		} else if (status == 2 && sex == false){
			cm.dispose();
			if (beauty == 1){
				if (cm.haveItem(item1) == true){
					cm.gainItem(item1, -1);
					cm.setSkin(skin[selection]);
					cm.sendOk("�ɨ��A�����s�y���a!");
				}else {
					cm.sendOk("��p�A�A���G�S��#b#t" + item1 + "##k�A�ڤ��ର�z���y�W�@�L�G���Y�v!");
				}				
			}
			if (beauty == 2){				
				if (cm.haveItem(item1) == true){
					cm.gainItem(item1, -1);
					cm.setHair(hairnew[selection]);
					cm.sendOk("�ɨ��A�����s�y���a!");
				}else {
					cm.sendOk("��p�A�A���G�S��#b#t" + item1 + "##k�A�ڤ��ର�z���y�W�@�L�G���Y�v!");
				}				
			}			
			if (beauty == 3){				
				if (cm.haveItem(item1) == true){
					cm.gainItem(item1, -1);
					cm.setHair(haircolor[selection]);
					cm.sendOk("�ɨ��A�����s�y���a!");
				}else {
					cm.sendOk("��p�A�A���G�S��#b#t" + item1 + "##k�A�ڤ��ର�z���y�W�@�L�G���Y�v!");
				}							
			}
			if (beauty == 4){				
				if (cm.haveItem(item1) == true){
					cm.gainItem(item1, -1);
					cm.setFace(facenew[selection]);
					cm.sendOk("�ɨ��A�����s�y���a!");
				}else {
					cm.sendOk("��p�A�A���G�S��#b#t" + item1 + "##k�A�ڤ��ର�z���y�W�@�L�G���Y�v!");
				}							
			}
			if (beauty == 5){				
				if (cm.haveItem(item1) == true){
					cm.gainItem(item1, -1);
					cm.setFace(colors[selection]);
					cm.sendOk("�ɨ��A�����s�y���a!");
				}else {
					cm.sendOk("��p�A�A���G�S��#b#t" + item1 + "##k�A�ڤ��ର�z���y�W�@�L�G���Y�v!");
				}							
			}
		} else if (status == 2 && sex == true) {
			if (selection == 0) {
				beauty = 1;
				cm.sendStyle("��@��!", skin);
			} else if (selection == 1) {
				beauty = 2;
				hairnew = Array();
				for(var i = 0; i < hair.length; i++) {
					hairnew.push(hair[i] + parseInt(cm.getChar().getHair() % 10)); //���o�v��(�ë��Ӿv��󴫾v��)
				}
				cm.sendStyle("��@�ӧA���N���Y�v�a!", hairnew);
			} else if (selection == 2) {
				beauty = 3;
				haircolor = Array();
				var current = parseInt(cm.getChar().getHair() / 10) * 10; //���o�v�������
				for(var i = 0; i < 8; i++) { //�v��(0~8)�@9��
					haircolor.push(current + i); //push��array
				}
				cm.sendStyle("��@�ӧa!", haircolor);
			} else if (selection == 3) {
				beauty = 4;
				facenew = Array();
				for(var i = 0; i < face.length; i++) {
					facenew.push(face[i] + cm.getChar().getFace() % 1000 - (cm.getChar().getFace() % 100)); //���� (�ʦ�� - �Q��Ʀr �D�X���� ���Ӳ����������)
				}
				cm.sendStyle("��@�ӧA���N���y���a!", facenew);
			} else if (selection == 4) {
				beauty = 5;
				var current = cm.getChar().getFace() % 100 + 21000; //20000(�k) 21000(�k)
				colors = Array();
				colors = Array(current , current + 100, current + 200, current + 300, current + 400, current + 500, current + 600, current + 700, current + 800); //����(0xx~8xx) �@9��
				cm.sendStyle("��@�ӧa!", colors);
			}
		} else if (status == 3){
			cm.dispose();
			if (beauty == 1){
				if (cm.haveItem(item1) == true){
					cm.gainItem(item1, -1);
					cm.setSkin(skin[selection]);
					cm.sendOk("�ɨ��A�����s�y���a!");
				}else {
					cm.sendOk("��p�A�A���G�S��#b#t" + item1 + "##k�A�ڤ��ର�z���y�W�@�L�G���Y�v!");
				}				
			}
			if (beauty == 2){				
				if (cm.haveItem(item1) == true){
					cm.gainItem(item1, -1);
					cm.setHair(hairnew[selection]);
					cm.sendOk("�ɨ��A�����s�y���a!");
				}else {
					cm.sendOk("��p�A�A���G�S��#b#t" + item1 + "##k�A�ڤ��ର�z���y�W�@�L�G���Y�v!");
				}				
			}			
			if (beauty == 3){				
				if (cm.haveItem(item1) == true){
					cm.gainItem(item1, -1);
					cm.setHair(haircolor[selection]);
					cm.sendOk("�ɨ��A�����s�y���a!");
				}else {
					cm.sendOk("��p�A�A���G�S��#b#t" + item1 + "##k�A�ڤ��ର�z���y�W�@�L�G���Y�v!");
				}							
			}
			if (beauty == 4){				
				if (cm.haveItem(item1) == true){
					cm.gainItem(item1, -1);
					cm.setFace(facenew[selection]);
					cm.sendOk("�ɨ��A�����s�y���a!");
				}else {
					cm.sendOk("��p�A�A���G�S��#b#t" + item1 + "##k�A�ڤ��ର�z���y�W�@�L�G���Y�v!");
				}							
			}
			if (beauty == 5){				
				if (cm.haveItem(item1) == true){
					cm.gainItem(item1, -1);
					cm.setFace(colors[selection]);
					cm.sendOk("�ɨ��A�����s�y���a!");
				}else {
					cm.sendOk("��p�A�A���G�S��#b#t" + item1 + "##k�A�ڤ��ର�z���y�W�@�L�G���Y�v!");
				}							
			}
		}
	}
}
