/*
  �d�ǭ��ּ��� v62 ���� �d�ǹζ��sĶ
*/

importPackage(Packages.scripting);

var status = 0;
var price = 500000;
var price2 = 1000000;
var map = 50;
var worldmap = 100;


//����q��
var Cmusic = Array("Cmusic/01", "Cmusic/02", "Cmusic/03", "Cmusic/04", "Cmusic/05", "Cmusic/06", "Cmusic/07", "Cmusic/08");
var CmusicB = Array("�g���̾֩�", "��x��", "���Z����", "��n�J���A", "�q", "�L�[����", "�x��", "��K��");

//�^��q��
var Emusic = Array("BgmEvent/FunnyRabbitFaster", "Emusic/02", "Emusic/03", "Emusic/04", "Emusic/05", "Emusic/06", "Emusic/07", "Emusic/08");
var EmusicB = Array("Christina Perri", "DAISHI DANCETake Me Hands", "JessieJFlashlight", "MARINAANDTHEDIAMONDSPART", "Shirley Morrow", "TheUnguided", "TheVampsWakeUp", "ZeddAlessia");

//���q��
var Jmusic = Array("Jmusic/01", "Jmusic/02", "Jmusic/03", "BgmEvent/FunnyRabbitFaster","Jmusic/06");
var JmusicB = Array("�p�p�ʺq", "�I�q���h��", "MASAYUME CHASING", "���Ѧn�Ѯ�", "�P����");

//�q���q��
var EDMmusic = Array("EDMmusic/01", "EDMmusic/02", "EDMmusic/03", "EDMmusic/04", "EDMmusic/05", "EDMmusic/06", "EDMmusic/07", "EDMmusic/08", "EDMmusic/09");
var EDMmusicB = Array("Faded", "GavinJamesTired", "IWannaKnow", "ThisIsWhatYouCame", "David Guetta", "ShapeofYou", "ITookAPillInIbiza", "DontLetMeDown", "SomethingJustLikeThis");



function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode < 1) {
		cm.dispose();
		return;
	} else if (mode == 1) {
		status++;
	} else {
		status--;
	}
	if (status == 0) {
		cm.sendSimple("�K�I���C�������F�a�Hť�I���P���q���p��H�ڭ̴��ѤF�U���̦��W���q���ѦU��Y��A�u�ݥI�Ǥ֤֪������Y�i�P�Ҧ��H�P��\r\n#b"+
					  "#L0#����q��#l\r\n#b"+
					  "#L1#ťť�q���t�λ���#l");	
	}if (status == 1){
		if (selection == 0){
		cm.sendSimple("�A�n�d����ح��ָ�T�O�H�H\r\n\r\n#b"+
					  "#L2#����q��#l#k\r\n#b"+
					  "#L3#�^��q��#l#k\r\n#b"+
					  "#L4#���q��#l\r\n#b"+
					  "#L5#�q���q��#l");
		}else if (selection == 1){
		cm.sendOk("���֨t�λ`���F���y�̤��������W�q���A�z�Sť�L�]�@�w�|ı�o�X�z�f���C\r\n"+
					  "���a�ϼ��� ���� "+map+" �U\r\n"+
					  "���a�ϼ��� ���� "+worldmap+" �U");
			cm.dispose();
		}
	}if (status == 2){
	mySelection = selection;
	if (mySelection == 2 || mySelection == 3 || mySelection == 4 || mySelection == 5){
		switch (mySelection){
			case 2 : if(cm.getMeso() > 10){
			store = true;	
            var �ѨϤ��� = "#b#e�ѨϤ���#k#n";
            �ѨϤ��� += "\r\n��ť�I�q���a.\r\n";
            for (var i = 0; i < CmusicB.length; i++) {
                �ѨϤ��� += "\r\n#L" + i + "# " +CmusicB[i]+ "#l";
            }
            cm.sendSimple(�ѨϤ���);
			
		}break;
			case 3 : if(cm.getMeso() > 10){
				
            var �ѨϤ��� = "#b#e�ѨϤ���#k#n";
            �ѨϤ��� += "\r\n��ť�I�q���a.\r\n";
            for (var i = 0; i < EmusicB.length; i++) {
                �ѨϤ��� += "\r\n#L" + i + "# " +EmusicB[i]+ "#l";
            }
            cm.sendSimple(�ѨϤ���);
		}break;		
			case 4 : if(cm.getMeso() > 10){
            var �ѨϤ��� = "#b#e�ѨϤ���#k#n";
            �ѨϤ��� += "\r\n��ť�I�q���a.\r\n";
            for (var i = 0; i < JmusicB.length; i++) {
                �ѨϤ��� += "\r\n#L" + i + "# " +JmusicB[i]+ "#l";
            }
            cm.sendSimple(�ѨϤ���);
		}break;		
			case 5 : if(cm.getMeso() > 10){
            var �ѨϤ��� = "#b#e�ѨϤ���#k#n";
            �ѨϤ��� += "\r\n��ť�I�q���a.\r\n";
            for (var i = 0; i < EDMmusicB.length; i++) {
                �ѨϤ��� += "\r\n#L" + i + "# " +EDMmusicB[i]+ "#l";
            }
            cm.sendSimple(�ѨϤ���);
		}break;			 
			}
		}
	}else if (status == 3){
            if (mySelection == 2) {
                cm.sendSimple("�z��ܪ��q���O#r "+CmusicB[selection]+"#k�аݭn�Φ�ؤ覡����O#k?"+"\r\n"+
							 "#L21#���a�ϼ���#l �ݪ�O"+ price +" ����"+"\r\n"+
							 "#L22#���a�ϼ���#l �ݪ�O"+ price2 +" ����");
							 
                mc = selection;
            }else if(mySelection == 3){
                cm.sendSimple("�z��ܪ��q���O#r "+EmusicB[selection]+"#k�аݭn�Φ�ؤ覡����O#k?"+"\r\n"+
							 "#L31#���a�ϼ���#l �ݪ�O"+ price +" ����"+"\r\n"+
							 "#L32#���a�ϼ���#l �ݪ�O"+ price2 +" ����");
                mc = selection;				
			}else if(mySelection == 4){
                cm.sendSimple("�z��ܪ��q���O#r "+JmusicB[selection]+"#k�аݭn�Φ�ؤ覡����O#k?"+"\r\n"+
							 "#L41#���a�ϼ���#l �ݪ�O"+ price +" ����"+"\r\n"+
							 "#L42#���a�ϼ���#l �ݪ�O"+ price2 +" ����");
                mc = selection;				
			}else if(mySelection == 5){
                cm.sendSimple("�z��ܪ��q���O#r "+EDMmusicB[selection]+"#k�аݭn�Φ�ؤ覡����O#k?"+"\r\n"+
							 "#L51#���a�ϼ���#l �ݪ�O"+ price +" ����"+"\r\n"+
							 "#L52#���a�ϼ���#l �ݪ�O"+ price2 +" ����");
                mc = selection;				
			}else {
                cm.sendOk("�����X�{���D");
                cm.dispose();
            }
        }else if (status == 4) {
			mySelection = selection;
            if (cm.getMeso() < price || cm.getMeso() < price2) {
                cm.sendOk("�z�S��������������");
                cm.dispose();
            } else if(mySelection == 21){
                cm.gainMeso(-price);
				cm.changeMusic(Cmusic[mc]);
				cm.mapMessage("���a"+ cm.getChar().getName() +"���U���I���F�i"+CmusicB[mc]+"�j �q�ЪY��");
                cm.dispose();
            } else if(mySelection == 22){
                cm.gainMeso(-price2);
				cm.changeWorldMusic(Cmusic[mc]);
				cm.worldMessage(5,"���a"+ cm.getChar().getName() +"���U���I���F�i"+CmusicB[mc]+"�j �q�ЪY��");
                cm.dispose();
            } else if(mySelection == 31){
				cm.gainMeso(-price);
				cm.changeMusic(Emusic[mc]);
				cm.mapMessage("���a"+ cm.getChar().getName() +"���U���I���F�i"+EmusicB[mc]+"�j �q�ЪY��");
				cm.sendYesNo("�аݭn��ť#r "+mc+" "+mySelection+"#k?");
                cm.dispose();
            } else if(mySelection == 32){
				cm.gainMeso(-price);
				cm.changeWorldMusic(Emusic[mc]);
				cm.worldMessage(5,"���a"+ cm.getChar().getName() +"���U���I���F�i"+EmusicB[mc]+"�j �q�ЪY��");
				cm.sendYesNo("�аݭn��ť#r "+mc+" "+mySelection+"#k?");
                cm.dispose();
            } else if(mySelection == 41){
				cm.gainMeso(-price);
				cm.changeMusic(Jmusic[mc]);
				cm.mapMessage("���a"+ cm.getChar().getName() +"���U���I���F�i"+JmusicB[mc]+"�j �q�ЪY��");
                cm.dispose();
            } else if(mySelection == 42){
				cm.gainMeso(-price);
				cm.changeWorldMusic(Jmusic[mc]);
				cm.worldMessage(5,"���a"+ cm.getChar().getName() +"���U���I���F�i"+JmusicB[mc]+"�j �q�ЪY��");
                cm.dispose();
            } else if(mySelection == 51){
				cm.gainMeso(-price);
				cm.changeMusic(EDMmusic[mc]);
				cm.mapMessage("���a"+ cm.getChar().getName() +"���U���I���F�i"+EDMmusicB[mc]+"�j �q�ЪY��");
                cm.dispose();
            } else if(mySelection == 52){
				cm.gainMeso(-price);
				cm.changeWorldMusic(EDMmusic[mc]);
				cm.worldMessage(5,"���a"+ cm.getChar().getName() +"���U���I���F�i"+EDMmusicB[mc]+"�j �q�ЪY��");
                cm.dispose();
            }else{
				cm.sendYesNo("�I���q�����ѡA���p���޲z���C");
                cm.dispose();				
				
			}
        }
}