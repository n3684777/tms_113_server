var status = 0;

var �r��A = 3991000;
var �r��I = 3991008;
var �r��C = 3991002;
var �r��L = 3991011;

//���~�@
var ���~�@ = 5220000;
var ���~�@�ƶq = 10;
var ���~�@��OA = 100;
var ���~�@��OI = 100;
var ���~�@��OC = 100;
var ���~�@��OL = 100;

//���~�G
var ���~�G = 5220020;
var ���~�G�ƶq = 1;
var ���~�G��OA = 100;
var ���~�G��OI = 100;
var ���~�G��OC = 100;
var ���~�G��OL = 100;

//���~�T
var ���~�T = 1812000;
var ���~�T�ƶq = 1;
var ���~�T��OA = 100;
var ���~�T��OI = 100;
var ���~�T��OC = 100;
var ���~�T��OL = 100;

//���~�|
var ���~�| = 1812001;
var ���~�|�ƶq = 1;
var ���~�|��OA = 100;
var ���~�|��OI = 100;
var ���~�|��OC = 100;
var ���~�|��OL = 100;

//���~��
var ���~�� = 1702226;
var ���~���ƶq = 1;
var ���~����OA = 100;
var ���~����OI = 100;
var ���~����OC = 100;
var ���~����OL = 100;


function start() {
	cm.sendSimple ( "�w��Ө�C�g�r���I���M���A�п�ܱz�n�I�������~�C\r\n"+"\r\n" 
				   +"                                #i"+ �r��A +"##i"+ �r��I +"##i"+ �r��C +"##i"+ �r��L +"#" + "\r\n" 
				   +"=================#b�i���~�@�j#k================="+"\r\n"
				   +"#L0##i"+ ���~�@ +"# #r#t"+ ���~�@ + "##k �D�� "+ ���~�@�ƶq +" ��#l"+"\r\n\r\n"
				   +"        #i"+ �r��A +"# = �i"+ ���~�@��OA +"�j�ӡ@#i"+ �r��I +"# = �i"+ ���~�@��OI +"�j��"+"\r\n"
				   +"        #i"+ �r��C +"# = �i"+ ���~�@��OC +"�j�ӡ@#i"+ �r��L +"# = �i"+ ���~�@��OL +"�j��"+"\r\n"
				   +"=================#b�i���~�G�j#k================="+"\r\n"
				   +"#L1##i"+ ���~�G +"# #r#t"+ ���~�G + "##k �D�� "+ ���~�G�ƶq +" ��#l"+"\r\n\r\n"
				   +"        #i"+ �r��A +"# = �i"+ ���~�G��OA +"�j�ӡ@#i"+ �r��I +"# = �i"+ ���~�G��OI +"�j��"+"\r\n"
				   +"        #i"+ �r��C +"# = �i"+ ���~�G��OC +"�j�ӡ@#i"+ �r��L +"# = �i"+ ���~�G��OL +"�j��"+"\r\n"
				   +"=================#b�i���~�T�j#k================="+"\r\n"
				   +"#L2##i"+ ���~�T +"# #r#t"+ ���~�T + "##k �D�� "+ ���~�T�ƶq +" ��#l"+"\r\n\r\n"
				   +"        #i"+ �r��A +"# = �i"+ ���~�T��OA +"�j�ӡ@#i"+ �r��I +"# = �i"+ ���~�T��OI +"�j��"+"\r\n"
				   +"        #i"+ �r��C +"# = �i"+ ���~�T��OC +"�j�ӡ@#i"+ �r��L +"# = �i"+ ���~�T��OL +"�j��"+"\r\n"
				   +"=================#b�i���~�|�j#k================="+"\r\n"
				   +"#L3##i"+ ���~�| +"# #r#t"+ ���~�| + "##k �D�� "+ ���~�|�ƶq +" ��#l"+"\r\n\r\n"
				   +"        #i"+ �r��A +"# = �i"+ ���~�|��OA +"�j�ӡ@#i"+ �r��I +"# = �i"+ ���~�|��OI +"�j��"+"\r\n"
				   +"        #i"+ �r��C +"# = �i"+ ���~�|��OC +"�j�ӡ@#i"+ �r��L +"# = �i"+ ���~�|��OL +"�j��"+"\r\n"
				   +"=================#b�i���~���j#k================="+"\r\n"
				   +"#L4##i"+ ���~�� +"# #r#t"+ ���~�� + "##k �D�� "+ ���~���ƶq +" ��#l"+"\r\n\r\n"
				   +"        #i"+ �r��A +"# = �i"+ ���~����OA +"�j�ӡ@#i"+ �r��I +"# = �i"+ ���~����OI +"�j��"+"\r\n"
				   +"        #i"+ �r��C +"# = �i"+ ���~����OC +"�j�ӡ@#i"+ �r��L +"# = �i"+ ���~����OL +"�j��"+"\r\n"
				   +"=================#b�i�����o�j#k================="+"\r\n")
				   }

function action(mode, type, selection) {
		cm.dispose();

	switch(selection){ 
		case 0:
			if (cm.haveItem(�r��A ,���~�@��OA) == true && cm.haveItem(�r��I ,���~�@��OI) == true && cm.haveItem(�r��C ,���~�@��OC) == true && cm.haveItem(�r��L ,���~�@��OL) == true) {
			cm.gainItem(�r��A ,-���~�@��OA);
			cm.gainItem(�r��I ,-���~�@��OI);
			cm.gainItem(�r��C ,-���~�@��OC);
			cm.gainItem(�r��L ,-���~�@��OL);
			cm.gainItem(���~�@); 
			cm.sendOk("���A�i���n�˥�F#i"+ ���~�@ +"#");
		        cm.dispose();
			}else{
		        cm.sendOk("#r�A�٨S�������a!!");
		        cm.dispose();
			}
		break;
		case 1:
			if (cm.haveItem(�r��A ,���~�G��OA) == true && cm.haveItem(�r��I ,���~�G��OI) == true && cm.haveItem(�r��C ,���~�G��OC) == true && cm.haveItem(�r��L ,���~�G��OL) == true) {
			cm.gainItem(�r��A ,-���~�G��OA);
			cm.gainItem(�r��I ,-���~�G��OI);
			cm.gainItem(�r��C ,-���~�G��OC);
			cm.gainItem(�r��L ,-���~�G��OL);
			cm.gainItem(���~�G); 
			cm.sendOk("���A�i���n�˥�F#i"+ ���~�G +"#");
		        cm.dispose();
			}else{
		        cm.sendOk("#r�A�٨S�������a!!");
		        cm.dispose();
			}
		break;
		case 2: 
			if (cm.haveItem(�r��A ,���~�T��OA) == true && cm.haveItem(�r��I ,���~�T��OI) == true && cm.haveItem(�r��C ,���~�T��OC) == true && cm.haveItem(�r��L ,���~�T��OL) == true) {
			cm.gainItem(�r��A ,-���~�T��OA);
			cm.gainItem(�r��I ,-���~�T��OI);
			cm.gainItem(�r��C ,-���~�T��OC);
			cm.gainItem(�r��L ,-���~�T��OL);
			cm.gainItem(���~�T); 
			cm.sendOk("���A�i���n�˥�F#i"+ ���~�T +"#");
		        cm.dispose();
			}else{
		        cm.sendOk("#r�A�٨S�������a!!");
		        cm.dispose();
			}
		break;
		case 3:
			if (cm.haveItem(�r��A ,���~�|��OA) == true && cm.haveItem(�r��I ,���~�|��OI) == true && cm.haveItem(�r��C ,���~�|��OC) == true && cm.haveItem(�r��L ,���~�|��OL) == true) {
			cm.gainItem(�r��A ,-���~�|��OA);
			cm.gainItem(�r��I ,-���~�|��OI);
			cm.gainItem(�r��C ,-���~�|��OC);
			cm.gainItem(�r��L ,-���~�|��OL);
			cm.gainItem(���~�|); 
			cm.sendOk("���A�i���n�˥�F#i"+ ���~�| +"#");
		        cm.dispose();
			}else{
		        cm.sendOk("#r�A�٨S�������a!!");
		        cm.dispose();
			}
		break;
		case 4:
		if (cm.haveItem(�r��A ,���~����OA) == true && cm.haveItem(�r��I ,���~����OI) == true && cm.haveItem(�r��C ,���~����OC) == true && cm.haveItem(�r��L ,���~����OL) == true) {
			cm.gainItem(�r��A ,-���~����OA);
			cm.gainItem(�r��I ,-���~����OI);
			cm.gainItem(�r��C ,-���~����OC);
			cm.gainItem(�r��L ,-���~����OL);
			cm.gainItem(���~��); 
			cm.sendOk("���A�i���n�˥�F#i"+ ���~�� +"#");
		        cm.dispose();
			}else{
		        cm.sendOk("#r�A�٨S�������a!!");
		        cm.dispose();
			}	
		break;
		}

	}
