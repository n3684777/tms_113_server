var status = 0;

var �D��@ = 4031683;
var �D��@�F�жq = 20000;
var ��ƪ�ID1 = 1;

var �D��G = 4031684;//�p���Z������
var �D��G�F�жq = 20000;
var ��ƪ�ID2 = 2;

var �D��T = 4031685;//�����ɹX
var �D��T�F�жq = 20000;
var ��ƪ�ID3 = 3;

var �D��| = 4031686;//
var �D��|�F�жq = 20000;
var ��ƪ�ID4 = 4;

var �D�㤭 = 4031687;//
var �D�㤭�F�жq = 20000;
var ��ƪ�ID5 = 5;

var �D�㤻 = 4031688;//
var �D�㤻�F�жq = 20000;
var ��ƪ�ID6 = 6;

var �D��C = 4031689;//
var �D��C�F�жq = 20000;
var ��ƪ�ID7 = 7;

var �D��K = 4031690;//
var �D��K�F�жq = 20000;
var ��ƪ�ID8 = 8;

var �D��E = 4031691;//
var �D��E�F�жq = 20000;
var ��ƪ�ID9 = 9;

var �D��Q = 4031692;//
var �D��Q�F�жq = 20000;
var ��ƪ�ID10 = 10;

var �D��Q�@ = 4031701;//
var �D��Q�@�F�жq = 20000;
var ��ƪ�ID11 = 11;


var ���~�@ = 4031454; //�t��
var ���~�@�ƶq = 200;

var ���~�G = 4031408; //��J�ϳ�
var ���~�G�ƶq = 15;

var ���~�T = 4031749; // �ܴL��J
var ���~�T�ƶq = 3;

var ���~�| = 5440000; //�����I��
var ���~�|�ƶq = 5000;

var ���~�� = 5000053;//�j�V�V�����H
var ���~���ƶq = 1;

var ���~�� = 4310102;//��c(�w��)
var ���~���ƶq = 15;

var ���~�C = 5570000;//�����K��
var ���~�C�ƶq = 10;


function start() {  
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
        if (mode == 1)  
            status++;  
        else  
            status--;  
        if (status == 0) {  
            cm.sendSimple (
				 "#e#r[���A�`������]#n#k  �@�_�ӻ`������I�I#e" +
                 "#k\r\n#L1#���m����" +
                 "\r\n#L2#�U����`�����p"+
				 "\r\n#L3#�������y");
        } if (status == 1){
			if (selection == 1) { 
			cm.sendSimple (
				 "#e#b�z�n���m���Ӫ���O�H#e" +
                 "#k\r\n#L3##r#t"+�D��@+"#  #k#i"+�D��@+"#\r\n\r\n" +
                 "#k\r\n#L4##r#t"+�D��G+"#  #k#i"+�D��G+"#\r\n\r\n" +
				 "#k\r\n#L5##r#t"+�D��T+"#  #k#i"+�D��T+"#\r\n\r\n" +
				 "#k\r\n#L6##r#t"+�D��|+"#  #k#i"+�D��|+"#\r\n\r\n" +
				 "#k\r\n#L7##r#t"+�D�㤭+"#  #k#i"+�D�㤭+"#\r\n\r\n" +
				 "#k\r\n#L8##r#t"+�D�㤻+"#  #k#i"+�D�㤻+"#\r\n\r\n" +
				 "#k\r\n#L9##r#t"+�D��C+"#  #k#i"+�D��C+"#\r\n\r\n" +
				 "#k\r\n#L10##r#t"+�D��K+"#  #k#i"+�D��K+"#\r\n\r\n" +
				 "#k\r\n#L11##r#t"+�D��E+"#  #k#i"+�D��E+"#\r\n\r\n" +
				 "#k\r\n#L12##r#t"+�D��Q+"#  #k#i"+�D��Q+"#\r\n\r\n" +
				 "#k\r\n#L13##r#t"+�D��Q�@+"#  #k#i"+�D��Q�@+"#" 
				 );
			}else if (selection == 2){
				cm.sendOk (
				 "#e#k�H�U���ثe����֭p�ƶq#e\r\n\r\n" +
                 "#k#r#t"+�D��@+"#  #k#i"+�D��@+"#  �ثe�ƶq�� :  "+cm.getPlayCollect(��ƪ�ID1)+"  ��\r\n\r\n" +
				 "#k#r����F�жq#k :   "+�D��@�F�жq+"  ��\r\n\r\n" +
				 
                 "#k#b#t"+�D��G+"#  #k#i"+�D��G+"#  �ثe�ƶq�� :  "+cm.getPlayCollect(��ƪ�ID2)+"  ��\r\n\r\n" +
				 "#k#b����F�жq#k :   "+�D��G�F�жq+"  ��\r\n\r\n" +
				 
				 "#k#r#t"+�D��T+"#  #k#i"+�D��T+"#  �ثe�ƶq�� :  "+cm.getPlayCollect(��ƪ�ID3)+"  ��\r\n\r\n" +
				 "#k#r����F�жq#k :   "+�D��T�F�жq+"  ��\r\n\r\n" +
				 
				 "#k#b#t"+�D��|+"#  #k#i"+�D��|+"#  �ثe�ƶq�� :  "+cm.getPlayCollect(��ƪ�ID4)+"  ��\r\n\r\n" +
				 "#k#b����F�жq#k :   "+�D��|�F�жq+"  ��\r\n\r\n" +
				 
				 "#k#r#t"+�D�㤭+"#  #k#i"+�D�㤭+"#  �ثe�ƶq�� :  "+cm.getPlayCollect(��ƪ�ID5)+"  ��\r\n\r\n" +
				 "#k#r����F�жq#k :   "+�D�㤭�F�жq+"  ��\r\n\r\n" +
				 
				 "#k#b#t"+�D�㤻+"#  #k#i"+�D�㤻+"#  �ثe�ƶq�� :  "+cm.getPlayCollect(��ƪ�ID6)+"  ��\r\n\r\n" +
				 "#k#b����F�жq#k :   "+�D�㤻�F�жq+"  ��\r\n\r\n" +
				 
				 "#k#r#t"+�D��C+"#  #k#i"+�D��C+"#  �ثe�ƶq�� :  "+cm.getPlayCollect(��ƪ�ID7)+"  ��\r\n\r\n" +
				 "#k#r����F�жq#k :   "+�D��C�F�жq+"  ��\r\n\r\n" +
				 
				 "#k#b#t"+�D��K+"#  #k#i"+�D��K+"#  �ثe�ƶq�� :  "+cm.getPlayCollect(��ƪ�ID8)+"  ��\r\n\r\n" +
				 "#k#b����F�жq#k :   "+�D��K�F�жq+"  ��\r\n\r\n" +
				 
				 "#k#r#t"+�D��E+"#  #k#i"+�D��E+"#  �ثe�ƶq�� :  "+cm.getPlayCollect(��ƪ�ID9)+"  ��\r\n\r\n" +
				 "#k#r����F�жq#k :   "+�D��E�F�жq+"  ��\r\n\r\n" +
				 
				 "#k#b#t"+�D��Q+"#  #k#i"+�D��Q+"#  �ثe�ƶq�� :  "+cm.getPlayCollect(��ƪ�ID10)+"  ��\r\n\r\n" +
				 "#k#b����F�жq#k :   "+�D��Q�F�жq+"  ��\r\n\r\n" +
				 				 
				 "#k#r#t"+�D��Q�@+"#  #k#i"+�D��Q�@+"#  �ثe�ƶq�� :  "+cm.getPlayCollect(��ƪ�ID11)+"  ��\r\n\r\n" +
				 "#k#r����F�жq#k :   "+�D��Q�@�F�жq+"  ��\r\n\r\n" 
				 );cm.dispose();
				
			}else if (selection == 3){
				cm.sendOk (
				"�����������ʱz�i��o�H�U���y" +
				"\r\n\r\n"+"#r�q�д���#k"/*
				"#t"+���~�@+"#  #k#i"+���~�@+"# "+���~�@�ƶq+" ��"+
				"\r\n\r\n"+
				"��J�ϳ�  #k#i"+���~�G+"# "+���~�G�ƶq+" ��"+
				"\r\n\r\n"+
				"#t"+���~�T+"#  #k#i"+���~�T+"# "+���~�T�ƶq+" ��"+
				"\r\n\r\n"+
				"#t"+���~�|+"#  #k#i"+���~�|+"# "+���~�|�ƶq+" �I"+
				"\r\n\r\n"+
				"#t"+���~��+"#  #k#i"+���~��+"# "+���~���ƶq+" ��"+
				"\r\n\r\n"+
				"#t"+���~��+"#  #k#i"+���~��+"# "+���~���ƶq+" ��"+
				"\r\n\r\n"+
				"#t"+���~�C+"#  #k#i"+���~�C+"# "+���~�C�ƶq+" ��"*/
				);cm.dispose();
			}
		} if (status == 2){
			mySelection = selection;
			if (mySelection == 3 || mySelection == 4 || mySelection == 5 || mySelection == 6 || mySelection == 7 || mySelection == 8 || mySelection == 9 || mySelection == 10 || mySelection == 11 || mySelection == 12 || mySelection == 13){
			switch (mySelection){
			case 3 : if(cm.haveItem(�D��@,1)){
				�I���� = �D��@;
				��ƪ�ID = ��ƪ�ID1;
				cm.sendGetNumber("�п�J�z�n���ت��ƶq",1,1,1000000);				
			}else{
				cm.sendNext("�z�èS���Ӫ����I�I�I");
				cm.dispose();
			}break;
			case 4 : if(cm.haveItem(�D��G,1)){
				�I���� = �D��G;
				��ƪ�ID = ��ƪ�ID2;
				cm.sendGetNumber("�п�J�z�n���ت��ƶq",1,1,1000000);				
			}else{
				cm.sendNext("�z�èS���Ӫ����I�I�I");
				cm.dispose();
			}break;
			case 5 : if(cm.haveItem(�D��T,1)){
				�I���� = �D��T;
				��ƪ�ID = ��ƪ�ID3;
				cm.sendGetNumber("�п�J�z�n���ت��ƶq",1,1,1000000);
			}else{
				cm.sendNext("�z�èS���Ӫ����I�I�I");
				cm.dispose();
				}
			 break;
			 case 6 : if(cm.haveItem(�D��|,1)){
				�I���� = �D��|;
				��ƪ�ID = ��ƪ�ID4;
				cm.sendGetNumber("�п�J�z�n���ت��ƶq",1,1,1000000);
			 }else{
				 cm.sendNext("�z�èS���Ӫ����I�I�I");
				 cm.dispose();
			 }
			 break;
			 case 7 : if(cm.haveItem(�D�㤭,1)){
				�I���� = �D�㤭;
				��ƪ�ID = ��ƪ�ID5;
				cm.sendGetNumber("�п�J�z�n���ت��ƶq",1,1,1000000);
			 }else{
				 cm.sendNext("�z�èS���Ӫ����I�I�I");
				 cm.dispose();
			 }
			 break;
			 case 8 : if(cm.haveItem(�D�㤻,1)){
				�I���� = �D�㤻;
				��ƪ�ID = ��ƪ�ID6;
				cm.sendGetNumber("�п�J�z�n���ت��ƶq",1,1,1000000);
			 }else{
				 cm.sendNext("�z�èS���Ӫ����I�I�I");
				 cm.dispose();
			 }
			 break;
			 case 9 : if(cm.haveItem(�D��C,1)){
				�I���� = �D��C;
				��ƪ�ID = ��ƪ�ID7;
				cm.sendGetNumber("�п�J�z�n���ت��ƶq",1,1,1000000);
			 }else{
				 cm.sendNext("�z�èS���Ӫ����I�I�I");
				 cm.dispose();
			 }
			 break;
			 case 10 : if(cm.haveItem(�D��K,1)){
				�I���� = �D��K;
				��ƪ�ID = ��ƪ�ID8;
				cm.sendGetNumber("�п�J�z�n���ت��ƶq",1,1,1000000);
			 }else{
				 cm.sendNext("�z�èS���Ӫ����I�I�I");
				 cm.dispose();
			 }
			 break;
			 case 11 : if(cm.haveItem(�D��E,1)){
				�I���� = �D��E;
				��ƪ�ID = ��ƪ�ID9;
				cm.sendGetNumber("�п�J�z�n���ت��ƶq",1,1,1000000);
			 }else{
				 cm.sendNext("�z�èS���Ӫ����I�I�I");
				 cm.dispose();
			 }
			 break;
			 case 12 : if(cm.haveItem(�D��Q,1)){
				�I���� = �D��Q;
				��ƪ�ID = ��ƪ�ID10;
				cm.sendGetNumber("�п�J�z�n���ت��ƶq",1,1,1000000);
			 }else{
				 cm.sendNext("�z�èS���Ӫ����I�I�I");
				 cm.dispose();
			 }
			 break;
			 case 13 : if(cm.haveItem(�D��Q�@,1)){
				�I���� = �D��Q�@;
				��ƪ�ID = ��ƪ�ID11;
				cm.sendGetNumber("�п�J�z�n���ت��ƶq",1,1,1000000);
			 }else{
				 cm.sendNext("�z�èS���Ӫ����I�I�I");
				 cm.dispose();
			 }
			 break;
		}
		}
	} if (status == 3){
		 slot = selection;
		  if (cm.haveItem(�I����,slot)){
                cm.gainItem(�I����, -slot);
				cm.setPlayCollect(��ƪ�ID,cm.getPlayCollect(��ƪ�ID) + slot);
				cm.setPlayCollect2(slot);
                cm.sendOk("�z���ؤF#r"+slot+"#k��#r#t"+�I����+"##k\r\n"+
				"�{�b�����`�ƨӨ�#r"+cm.getPlayCollect(��ƪ�ID)+"#k��\r\n"+
				"���±z�����ءI�I�I");
                cm.dispose();
            }else{
               cm.sendOk("�A���W�S���Ӫ�");
                cm.dispose();
			}
		
	}
}
}