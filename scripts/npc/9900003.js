/*
* �w�] 9900003
*/

var status = 0;
var �^��ۥ� = 1; //1 = �}��^�ۥ� 0 = �����^�ۥ�

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
			var playerMapID = cm.getMapId();
			if(playerMapID == 10000){
            var storeText = "";
				storeText += "���a�z�n�A�p�G�z�Q#r���L�s�����#k�i�H�z�L�ڪ����U�����@�I\r\n";
            storeText += "���L�s����ȡA�|���z���Ŵ��ɦ� #b10 #k���I#k\r\n\r\n";
            storeText += "#b#L1#�ڷQ���L�s�����#l\r\n";
            storeText += "#b#L2#�ڷQ�����k�v�A���L�s�����#l\r\n";
            storeText += "#r#L3#���ΤF����#l\r\n";
            cm.sendSimple(storeText);
			}else{
				cm.sendOk("�z�n�_�I�̡I");
				cm.dispose();
				return;
				
			}
				
        } else if (status == 1) {
          ��ܸ��X = selection;
          if(��ܸ��X == 1){
             cm.sendSimple("����A�ڲ{�b�N�N�z���Ŵ��ɦ� #b10 #k��");
          }if(��ܸ��X == 2){
             cm.sendSimple("����A�ڲ{�b�N�N�z���Ŵ��ɦ� #b8 #k��");
          }if(��ܸ��X == 3){
             cm.sendOk("�n���㯬�z�C���r�֡I�I");
             cm.dispose();
          }     
        } else if (status == 2) {
           if(��ܸ��X == 1){
              cm.gainExp(15);
              cm.gainExp(34);
              cm.gainExp(57);
              cm.gainExp(92);
              cm.gainExp(135);
              cm.gainExp(372);
              cm.gainExp(560);
              cm.gainExp(840);
              cm.gainExp(1242);
			if(�^��ۥ� == 1){
				cm.warp(910000000);
			}
              
              cm.dispose();
          }if(��ܸ��X == 2){
              cm.gainExp(15);
              cm.gainExp(34);
              cm.gainExp(57);
              cm.gainExp(92);
              cm.gainExp(135);
              cm.gainExp(372);
              cm.gainExp(560);      
              if(�^��ۥ� == 1){
				cm.warp(910000000);
			}
              cm.dispose();
          }
      }	
   }		
}
