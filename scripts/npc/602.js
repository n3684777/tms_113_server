/*
	This file is part of the OdinMS Maple Story Server
    Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc> 
                       Matthias Butz <matze@odinms.de>
                       Jan Christian Meyer <vimes@odinms.de>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License version 3
    as published by the Free Software Foundation. You may not use, modify
    or distribute this program under any other version of the
    GNU Affero General Public License.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

/**
 Dolphin in Herb Town

**/
//
var �`���� = 4031428;
var �`�����ƶq = 400;
var �I���� = 4031312;
var �I�����ƶq = 1;

//�§I����
var �»`���� = 4031428;
var �»`�����ƶq = 400;
var �§I���� = 4031875;
var �§I�����ƶq = 1;

//���~�@
var ���~�@ = 2040331;
var ���~�@�ƶq = 1;
var ���~�@�I�����ƶq = 3;

//���~�G
var ���~�G = 2040534;
var ���~�G�ƶq = 1;
var ���~�G�I�����ƶq = 3;

//���~�T
var ���~�T = 2040702;
var ���~�T�ƶq = 1;
var ���~�T�I�����ƶq = 3;

//���~�|
var ���~�| = 5490000;
var ���~�|�ƶq = 2;
var ���~�|�I�����ƶq = 5;

//���~��
var ���~�� = 1702224;
var ���~���ƶq = 1;
var ���~���I�����ƶq = 15;

//���~��
var ���~�� = 3010139;
var ���~���ƶq = 1;
var ���~���I�����ƶq = 7;

//���~�C
var ���~�C = 1902032;
var ���~�C�ƶq = 1;
var ���~�C�I�����ƶq = 20;

//���~�K
var ���~�K = 1912025;
var ���~�K�ƶq = 1;
var ���~�K�I�����ƶq = 20;


//���~�E
var ���~�E = 1002812;
var ���~�E�ƶq = 1;
var ���~�E�I�����ƶq = 30;



var status = 0;

function start() {
	cm.sendSimple ("�i�T�w�C��I���j#k\r\  �i���i�H���ڻ`��#r#t" + �`���� + " "+
				   "##k�N�b�Ǫ����W�A�Хh�j���L�̡A�ڷ|���A�n���y�C"+
				   "#k\r\  ���������ǻ`��#i" + �`���� + " #�çI����#i" + �I���� + " ##k\r\n#k"+
				   "#L0##d#i" + �`���� + " # "+ �`�����ƶq +" ��  ��  #i" + �I���� + " #  "+ �I�����ƶq +" ��  \r\n#k"+
				   "\#L10##i" + �§I���� + " #  " + �§I�����ƶq + " ��  ��  #i" + �I���� + " # " + �I�����ƶq + " ��\r\n#k"+
				   "\#L1# #i" + �»`���� + " # " + �»`�����ƶq + " �� ��  #i" + �I���� + " # " + �I�����ƶq + " ��    \r\n#k"+
				   "\#L2##i" + �I���� + " #" + ���~�@�I�����ƶq + " ��  ��  #i" + ���~�@ + " #  #r#t" + ���~�@ + "##k" + ���~�@�ƶq + " ��    \r\n#k"+
				   "\#L3##i" + �I���� + " #" + ���~�G�I�����ƶq + " ��  ��  #i" + ���~�G + " #  #r#t" + ���~�G + "##k" + ���~�G�ƶq + " ��    \r\n#k"+
				   "\#L4##i" + �I���� + " #" + ���~�T�I�����ƶq + " ��  ��  #i" + ���~�T + " #  #r#t" + ���~�T + "##k" + ���~�T�ƶq + " ��    \r\n#k"+
				   "\#L5##i" + �I���� + " #" + ���~�|�I�����ƶq + " ��  ��  #i" + ���~�| + " #  #r#t" + ���~�| + "##k" + ���~�|�ƶq + " ��    \r\n#k"+
				   "\#L6##i" + �I���� + " #" + ���~���I�����ƶq + " ��  ��  #i" + ���~�� + " #  #r#t" + ���~�� + "##k" + ���~���ƶq + " ��    \r\n#k"+
				   "\#L7##i" + �I���� + " #" + ���~���I�����ƶq + " ��  ��  #i" + ���~�� + " #  #r#t" + ���~�� + "##k" + ���~���ƶq + " ��    \r\n#k"+
				   "\#L8##i" + �I���� + " #" + ���~�C�I�����ƶq + " ��  ��  #i" + ���~�C + " #  #r#t" + ���~�C + "##k" + ���~�C�ƶq + " ��    \r\n#k"+
				   "\#L9##i" + �I���� + " #" + ���~�K�I�����ƶq + " ��  ��  #i" + ���~�K + " #  #r#t" + ���~�K + "##k" + ���~�K�ƶq + " ��    \r\n#k"+
				   "\#L11##i" + �I���� + " #" + ���~�E�I�����ƶq + " ��  ��  #i" + ���~�E + " #  #r#t" + ���~�E + "##k" + ���~�E�ƶq + " ��    ")}

function action(mode, type, selection) {
		cm.dispose();

	switch (selection){ 
		case 0:
			if (cm.haveItem(�`���� ,�`�����ƶq) == true ) {
			cm.gainItem(�`���� ,-�`�����ƶq);
			cm.gainItem(�I����,�I�����ƶq); 
			cm.sendOk("���o�ܦn�A����#i" + �I���� + "#" + �I�����ƶq + "��");
		        cm.dispose();
			}else{
		        cm.sendOk("�z�ǳƪ��D��ƶq�����A�Цb�T�{�C");
		        cm.dispose();
			}
		break;
		
				case 10:
			if (cm.haveItem(�§I���� ,�§I�����ƶq) == true ) {
			cm.gainItem(�§I���� ,-�§I�����ƶq);
			cm.gainItem(�I����,�I�����ƶq); 
			cm.sendOk("���o�ܦn�A����#i" + �I���� + "#" + �I�����ƶq + "��");
		        cm.dispose();
			}else{
		        cm.sendOk("�z�ǳƪ��D��ƶq�����A�Цb�T�{�C");
		        cm.dispose();
			}
		break;
		
		case 1:
			if (cm.haveItem(�»`���� ,�»`�����ƶq) == true ) {
			cm.gainItem(�»`���� ,-�`�����ƶq);
			cm.gainItem(�I����,�I�����ƶq); 
			cm.sendOk("���o�ܦn�A����#i" + �I���� + "#" + �I�����ƶq + "��");
		        cm.dispose();
			}else{
		        cm.sendOk("�z�ǳƪ��D��ƶq�����A�Цb�T�{�C");
		        cm.dispose();
			}
		break;
 //�I�����~�@
        case 2:
			if (cm.haveItem(�I���� ,���~�@�I�����ƶq) == true ) {
			cm.gainItem(�I���� ,-���~�@�I�����ƶq);
			cm.gainItem(���~�@ ,���~�@�ƶq); 
			cm.sendOk("���o�ܦn�A�I��#i" + ���~�@ + "#" + ���~�@�ƶq + "��");
		        cm.dispose();
			}else{
		        cm.sendOk("�z�ǳƪ��D��ƶq�����A�Цb�T�{�C");
		        cm.dispose();
			}
		break;
		//�I�����~�G

  case 3:
			if (cm.haveItem(�I���� ,���~�G�I�����ƶq) == true ) {
			cm.gainItem(�I���� ,-���~�G�I�����ƶq);
			cm.gainItem(���~�G ,���~�@�ƶq); 
			cm.sendOk("���o�ܦn�A�I��#i" + ���~�G + "#" + ���~�G�ƶq + "��");
		        cm.dispose();
			}else{
		        cm.sendOk("�z�ǳƪ��D��ƶq�����A�Цb�T�{�C");
		        cm.dispose();
			}
		break;
		//�I�����~�T

 case 4:
			if (cm.haveItem(�I���� ,���~�T�I�����ƶq) == true ) {
			cm.gainItem(�I���� ,-���~�T�I�����ƶq);
			cm.gainItem(���~�T ,���~�@�ƶq); 
			cm.sendOk("���o�ܦn�A�I��#i" + ���~�T + "#" + ���~�T�ƶq + "��");
		        cm.dispose();
			}else{
		        cm.sendOk("�z�ǳƪ��D��ƶq�����A�Цb�T�{�C");
		        cm.dispose();
			}
		break;
		//�I�����~�|
				
		 case 5:
			if (cm.haveItem(�I���� ,���~�|�I�����ƶq) == true ) {
			cm.gainItem(�I���� ,-���~�|�I�����ƶq);
			cm.gainItem(���~�| ,���~�|�ƶq); 
			cm.sendOk("���o�ܦn�A�I��#i" + ���~�| + "#" + ���~�|�ƶq + "��");
		        cm.dispose();
			}else{
		        cm.sendOk("�z�ǳƪ��D��ƶq�����A�Цb�T�{�C");
		        cm.dispose();
			}
		break;
		//�I�����~��
		
		 case 6:
			if (cm.haveItem(�I���� ,���~���I�����ƶq) == true ) {
			cm.gainItem(�I���� ,-���~���I�����ƶq);
			cm.gainItem(���~�� ,���~���ƶq); 
			cm.sendOk("���o�ܦn�A�I��#i" + ���~�� + "#" + ���~���ƶq + "��");
		        cm.dispose();
			}else{
		        cm.sendOk("�z�ǳƪ��D��ƶq�����A�Цb�T�{�C");
		        cm.dispose();
			}
		break;
		//�I�����~��
		
		 case 7:
			if (cm.haveItem(�I���� ,���~���I�����ƶq) == true ) {
			cm.gainItem(�I���� ,-���~���I�����ƶq);
			cm.gainItem(���~�� ,���~���ƶq); 
			cm.sendOk("���o�ܦn�A�I��#i" + ���~�� + "#" + ���~���ƶq + "��");
		        cm.dispose();
			}else{
		        cm.sendOk("�z�ǳƪ��D��ƶq�����A�Цb�T�{�C");
		        cm.dispose();
			}
		break;
		//�I�����~�C
		
		 case 8:
			if (cm.haveItem(�I���� ,���~�C�I�����ƶq) == true ) {
			cm.gainItem(�I���� ,-���~�C�I�����ƶq);
			cm.gainItem(���~�C ,���~�C�ƶq); 
			cm.sendOk("���o�ܦn�A�I��#i" + ���~�C + "#" + ���~�C�ƶq + "��");
		        cm.dispose();
			}else{
		        cm.sendOk("�z�ǳƪ��D��ƶq�����A�Цb�T�{�C");
		        cm.dispose();
			}
		break;
		//�I�����~�K
		
		 case 9:
			if (cm.haveItem(�I���� ,���~�K�I�����ƶq) == true ) {
			cm.gainItem(�I���� ,-���~�K�I�����ƶq);
			cm.gainItem(���~�K ,���~�K�ƶq); 
			cm.sendOk("���o�ܦn�A�I��#i" + ���~�K + "#" + ���~�K�ƶq + "��");
		        cm.dispose();
			}else{
		        cm.sendOk("�z�ǳƪ��D��ƶq�����A�Цb�T�{�C");
		        cm.dispose();
			}
		break;
		 //�I�����~�E
				 
		 case 11:
			if (cm.haveItem(�I���� ,���~�E�I�����ƶq) == true ) {
			cm.gainItem(�I���� ,-���~�E�I�����ƶq);
			cm.gainItem(���~�E ,���~�E�ƶq); 
			cm.sendOk("���o�ܦn�A�I��#i" + ���~�E + "#" + ���~�E�ƶq + "��");
		        cm.dispose();
			}else{
		        cm.sendOk("�z�ǳƪ��D��ƶq�����A�Цb�T�{�C");
		        cm.dispose();
			}
		break;		 


			}
		}