var passwords = new Array(5);
var str;
var selectn1;
var selectn2;
var selectn3;
var selectn4;
var selectn5;
var selectlog;
var postrue = 0;
var seltrue = 0;
var stars = "";
var unlock = 3;
var unlocklog = new Array("");
var str_unlocklog = "";
var num = 0;
var gg = 0;
var it = 0;

function start() {
	a = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if(mode == -1){
	  cm.dispose();
	}else{
	  if(mode == 1)
		a++;
	  else
		a = -1;
	if (a == -1){
      cm.dispose();
	  
	}else if (a == 0){
		cm.sendNext("���F���F�K�K�C�I�U�@�B���A�����Ѱ��K�X������B�J�C")
    }else if (a == 1){
      cm.sendYesNo(" - �O�I�w�K�X����Ȼ����G\r\n\r\n�@�@�K�X��ѥ|�Ӥ����ƪ��Ʀr�զ��A�b��ܮؤ��̦���ܥ��T���Ʀr�A�K�X��N�|�Q���}�A�K�X�ꪺ�K�X�O��0~9�Ҳզ��A�åB�|�ӼƦr�������|���ơC\r\n\r\n#r#e����²���G#n#k\r\n�@�@�}�l�C����NPC�H���ͦ��K�X�A���a�|��o3���q��o�ձK�X�����|�A���a���Ӵ��ܨ̦����5�ӼƦr�A�զ��|��ƪ��K�X�A�T�{����|�o�촣�ܡG\r\n\r\n#r��#k��ܵ��׸̦��X�ӡA�Ʀr���T�B��m���T\r\n#r��#k��ܵ��׸̦��X�ӡA�Ʀr���T����m�����T\r\n\r\n#r#e�`�N�ƶ��G#n\r\n�@�p�����FNPC��ܡA����A���I��NPC�}�l�C���K�X�|���ܡC \r\n �B�p�G���|���Υ��٬O�^�����ѡA���|���p�p���g�@�I�I \r\n���~�H����~~~");
      for (var i = 0; i<5; i++) 
      {
        passwords[i] = Math.floor(Math.random()*10);
        for (var j = 0; j < i; j++) {
          if (passwords[j] == passwords[i]) {
            i--;
            break;
          }
        }
      }
	  }else if (a == 2){
      str = "�вq�q�ܮw�K�X���Ĥ@��Ʀr\r\n\r\n";
      postrue = seltrue = 0;
      for (var i = 0; i < 10; i++) {
        str += "#L" + i + "#" + i;
      }
	  if (cm.getPlayer().isGM()) {
		  str += "#l\r\n\r\n#r��GM�����K�X�K�ߴ��ܡ�:"+passwords+"#k#l\r\n\r\n\r\n�w��ܪ��Ʀr�G\r\n#n�Ѿl���ơG#r" + unlock + "#k\r\n�O���G\r\n";
	  } else {
		  str += "#l\r\n\r\n\r\n�w��ܪ��Ʀr�G\r\n#n�Ѿl���ơG#r" + unlock + "#k\r\n�O���G\r\n";
	  }
      
      cm.sendSimple(str + str_unlocklog);
	  }else if (a == 3){
      str = "�вq�q�ܮw�K�X���ĤG��Ʀr\r\n\r\n";
      selectn1 = selection;
      for (var i = 0; i < 10; i++) {
        if (i != selectn1)
          str += "#L" + i + "#" + i;
      }
      str += "#l";
      selectlog = "\r\n\r\n\r\n�w��ܪ��Ʀr�G#r" + selectn1;
      selectlog += "\r\n#k�Ѿl���ơG#r" + unlock + "#k\r\n�O���G\r\n";
      cm.sendSimple(str + selectlog + str_unlocklog);
	  }else if (a == 4){
      str = "�вq�q�ܮw�K�X���ĤT��Ʀr\r\n\r\n";
      selectn2 = selection;
      for (var i = 0; i < 10; i++) {
        if (i != selectn1 && i != selectn2)
          str += "#L" + i + "#" + i;
      }
      str += "#l";
      selectlog = "\r\n\r\n\r\n�w��ܪ��Ʀr�G#r" + selectn1 + " " + selectn2;
      selectlog += "\r\n#k�Ѿl���ơG#r" + unlock + "#k\r\n�O���G\r\n";
      cm.sendSimple(str + selectlog + str_unlocklog);
	  }else if (a == 5){
      str = "�вq�q�ܮw�K�X���ĥ|��Ʀr\r\n\r\n";
      selectn3 = selection;
      for (var i = 0; i < 10; i++) {
        if (i != selectn1 && i != selectn2 && i != selectn3)
          str += "#L" + i + "#" + i;
      }
      str += "#l";
      selectlog = "\r\n\r\n\r\n�w��ܪ��Ʀr�G#r" + selectn1 + " " + selectn2 + " " + selectn3;
      selectlog += "\r\n#k�Ѿl���ơG#r" + unlock + "#k\r\n�O���G\r\n";
      cm.sendSimple(str + selectlog + str_unlocklog);
	  }else if (a == 6){
      str = "�вq�q�ܮw�K�X���Ĥ���Ʀr\r\n\r\n";
      selectn4 = selection;
      for (var i = 0; i < 10; i++) {
        if (i != selectn1 && i != selectn2 && i != selectn3 && i != selectn4)
          str += "#L" + i + "#" + i;
      }
      str += "#l";
      selectlog = "\r\n\r\n\r\n�w��ܪ��Ʀr�G#r" + selectn1 + " " + selectn2 + " " + selectn3 + " " + selectn4;
      selectlog += "\r\n#k�Ѿl���ơG#r" + unlock + "#k\r\n�O���G\r\n";
      cm.sendSimple(str + selectlog + str_unlocklog);
	  }else if (a == 7){
      selectn5 = selection;
      selectlog = "\t\t\t\t�T�w�H�o�ռƦr�}���? #r\r\n\r\n\t\t\t\t\t   " + selectn1 + " " + selectn2 + " " + selectn3 + " " + selectn4 + " " + selectn5;
      selectlog += "\r\n#k�Ѿl���ơG#r" + unlock + "#k\r\n�O���G\r\n";
      cm.sendYesNo(selectlog + str_unlocklog);
    }else if (a == 8){
      for (var i=0; i<5; i++){
        if (passwords[i] == selectn1) {
          if (i == 0)
            postrue += 1;
          else
            seltrue += 1;
        } else if (passwords[i] == selectn2) {
          if (i == 1)
            postrue += 1;
          else
            seltrue += 1;
        } else if (passwords[i] == selectn3) {
          if (i == 2)
            postrue += 1;
          else
            seltrue += 1;
        } else if (passwords[i] == selectn4) {
          if (i == 3)
            postrue += 1;
          else
            seltrue += 1; 
        } else if (passwords[i] == selectn5) {
          if (i == 4)
            postrue += 1;
          else
            seltrue += 1;
        }    
      }
	  num++;
		  unlocklog.push("��"+ num +"����ܪ��Ʀr�G" + selectn1 + selectn2 + selectn3 + selectn4 + selectn5 +"�@#r" + postrue + "��  " + seltrue + "��#k\r\n");
      str_unlocklog = "";
      for (var i = 0; i < unlocklog.length; i++)
        str_unlocklog += unlocklog[i];
      if (postrue == 5) {
		gg = Math.floor(Math.random() * 6)+1;
		if (gg >= 2) {
			it = 4000019;
		} else {
			it = 5220040;
		}
        cm.sendNext("���ߧA,�}�ꦨ�\!\r\n\r\n�z���O���G\r\n" + str_unlocklog);
        cm.gainItem(it, 1);
		cm.worldMessage("�y�O�I�c�K�X�z�G���ߪ��a:" + cm.getChar().getName() + " �ϥΤF"+num+"�����\�}�ҫO�I�c�K�X�ݨӬO�@�ӫܱj������F�H!!!");
      } else {
        unlock -=1;
        if (unlock >= 1)
          a = 1;
        cm.sendNext("�u���,�}�ꥢ��!");
      }
    }else if (a == 9){
      if (postrue != 5) {
        cm.sendOk("�z���}����|�w�g�Χ��F~\r\n\r\n���T�K�X���G" + passwords + "\r\n�z���O���G\r\n" + str_unlocklog);
		//cm.worldMessage("�y�O�I�c�K�X�z�G���ߪ��a:" + cm.getChar().getName() + " �ϥΧ����|�F�å��Ѷ}�ҫO�I�c�K�X�ݨӵ����@�Ӽ��y���`�@��!!!");
		cm.getPlayer().setHp(0);
        cm.getPlayer().updateSingleStat(Packages.client.MapleStat.HP, 0);
        cm.dispose();
      } else {
        cm.sendOk("�w��z�A�ӬD��~");
        cm.dispose();
      }
      
	  }//status
	}
}