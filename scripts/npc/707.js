/*
  �p�C���s�@ v62 ���� �d�ǹζ��sĶ
*/

var txt1 = "#r�@��Ǫ��]";
var txt2 = "#r�����Ǫ��]";
var txt3 = "#r�]���ũǪ��]";
var txt4 = "#r�ܴL�ũǪ��]";
var txt5 = "#r�w�֩Ǫ��]";


var A = 4310098;//�Ƚc - �@��
var B = 4310099;//���c - ����
var C = 4310100;//�½c - �]��
var D = 4310101;//���c - �ܴL
var E = 4310102;//��c - �w��

var mob1 = [[2100067, 1, A, txt1], [2100001, 1, A, txt1],[2100002, 1, A, txt1],
			[2100003, 1, A, txt1],[2100004, 1, A, txt1],[2100005, 1, A, txt1],
			[2100006, 1, A, txt1],[2100007, 1, A, txt1],[2100008, 1, A, txt1],
			[2100009, 1, A, txt1],[2100010, 1, A, txt1],[2102000, 1, A, txt1],
			[2102001, 1, A, txt1],[2102002, 1, A, txt1],[2102003, 1, A, txt1],
			[2102004, 1, A, txt1],[2102005, 1, A, txt1],[2102006, 1, A, txt1],
			[2102007, 1, A, txt1]];
			
var mob2 = [[2100011, 1, B, txt2],[2100012, 1, B, txt2],[2100013, 1, B, txt2],
			[2102008, 1, B, txt2],[2100015, 1, B, txt2],[2100033, 1, B, txt2],
			[2101001, 1, B, txt2],[2101004, 1, B, txt2],[2101039, 1, B, txt2],
			[2100054, 1, B, txt2],[2101003, 1, B, txt2],[2100041, 1, B, txt2],
			[2101000, 1, B, txt2],];
			
var mob3 = [[2100100, 1, C, txt3],[2100099, 1, C, txt3],[2100098, 1, C, txt3],
			[2100096, 1, C, txt3],[2100095, 1, C, txt3],[2100094, 1, C, txt3],
			[2100102, 1, C, txt3]];

var mob4 = [[2101024, 1, D, txt4]];

var mob5 = [[2101081, 1, E, txt5], [2101023, 1, E, txt5]];

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
		cm.sendSimple("�K�I�A�n�����y����F�ܦh�ԧQ�~�H�ɨ��ּ֥ͬ��O�ڪ��H���C���ˡH�u�n���X�عD��A�ڴN���A�󴫯઱�p�C�����D��C��C�C�C���A�ƻ�n�O�H\r\n#b#L0#�s�@�p�C���D��#l\r\n#b#L1#ťť�p�C��������#l");	
	}if (status == 1){
		if (selection == 0){
			cm.sendSimple("�аݷQ�n�����ؤp�C���O�H�H\r\n\r\n#b#L3#���l��#l#k\r\n#b#L4#����#l#k");			
		}else if (selection == 1){
			cm.sendSimple("�A�n�d����ؤp�C����T�O�H�H\r\n\r\n#b#L5#���l��#l#k\r\n#b#L6#����#l#k#l");
		}else if (selection == 2){
			store = true;
			cm.sendSimple("�z�Q�s�@���ض��Ū��Ǫ��]�O�H�H\r\n"+
						  "#b#L8#�@��Ǫ��]#l#k\r\n"+
						  "#b#L9#�����Ǫ��]#l#k\r\n"+
						  "#b#L10#�]���ũǪ��]#l\r\n"+
						  "#b#L17#�ܴL�ũǪ��]#l\r\n"+
						  "#b#L18#�w�֩Ǫ��]#l");
		}
	}if (status == 2){
		mySelection = selection;
		if (mySelection == 3 || mySelection == 4 || mySelection == 5 || mySelection == 6 || mySelection == 7){
		switch (mySelection){
			case 3 : if(cm.getMeso() > 10){
				cm.sendNext("�аݱz�n�s�@���l�Ѷ� ? �n���A�зǳƦn���ơC");
			}else{
				cm.sendOk("�o�ͥ������~");
				cm.dispose();
			}break;
			case 4 : if(cm.haveItem(4030012,15)){
				cm.gainItem(4030012, -15);
				cm.gainItem(4080100 , 1);
				cm.sendOk("���߱z�����s�@�F�@��#t"+4080100+"#");
				cm.dispose();				
			}else{
				cm.sendOk("�зǳƦn���ơC ����ݭn #b15#k �i#v4030012##t4030012# �I");
				cm.dispose();
			}break;
			case 5 : if(cm.getMeso() > 10){
				cm.sendOk("���l�ѡA�i����W���a�i��S����\r\n"+
				          "�̥��N�Ѥl�����P�˳s�u�b�@�_�Y���\r\n"+
						  "�I���覡�Ъ����I��n�I�����ѽL�Y�i�o��");
						  cm.dispose();
			}else{
				cm.sendOk("�o�ͥ������~");
				cm.dispose();
				}
			 break;
			 case 6 : if(cm.getMeso() > 10){
				cm.sendOk("����A�i����W���a�i�J�S���Ե�\r\n"+
						  "½�}�ۦP�P�ռƳ̦h�����\r\n"+
						  "�I���ݭn#b15#k �i#v4030012##t4030012#");
						  cm.dispose();
			 }else{
				 cm.sendOk("�o�ͥ������~");
				 cm.dispose();
			 }
			 break;
			 case 7 : if(cm.getMeso() > 10){
				cm.sendOk("#r�Ǫ��]�I�����d�ǿW�Шt��#k\r\n"+
						  "���a�i�b�C���������Ǫ���o\r\n"+
						  "�ȡB���B�¡B���B���Ǫ��_�c\r\n"+
						  "�����_�c�i�I���U�C�_���C\r\n\r\n"+
						  "#v"+4310098+"# #r#t"+4310098+"##k   �i�I���@�t�C  #r�@�뫬�Ǫ��]\r\n\r\n"+
						  "#v"+4310099+"# #r#t"+4310099+"##k   �i�I���@�t�C  #r�����Ǫ��]\r\n\r\n"+
						  "#v"+4310100+"# #r#t"+4310100+"##k  �i�I���@�t�C  #r�]���ũǪ��]\r\n\r\n"+
						  "#v"+4310101+"# #r#t"+4310101+"##k   �i�I���@�t�C  #r�ܴL�ũǪ��]\r\n\r\n"+
						  "#v"+4310102+"# #r#t"+4310102+"##k   �i�I���@�t�C  #r�w�֩Ǫ��]");
						  cm.dispose();
			 }else{
				 cm.sendOk("�o�ͥ������~");
				 cm.dispose();
			 }
			 break;
		}
			
	}else{ 
		switch (selection) {
                    case 8:
                        storeInfo = mob1;
                        break;
                    case 9:
                        storeInfo = mob2;
                        break;
                    case 10:
                        storeInfo = mob3;
                        break;
                    case 17:
                        storeInfo = mob4;
                        break;
                    case 18:
                        storeInfo = mob5;
                        break;
                    default:
                        storeInfo = [];
                }
                if (storeInfo.length == 0) {
                    cm.sendOk("�o�Ӱө����s�b");
                    cm.dispose();
                    return;
                }
                var storeText = "";
                for (var i = 0; i < storeInfo.length; ++i) {
                    var wepId = storeInfo[i][0];
                    var cost = storeInfo[i][1];
					var item = storeInfo[i][2];
					var item2 = "#i" + item + "#";
					var txt = "�z�D��F"+storeInfo[i][3]+"#k�п�ܱz�n������\r\n";
                    storeText += "#L" + i + "##v" + wepId + "# - #z" + wepId + "#   �ݭn  " + cost + "  ��   " + item2 + " #l\r\n";
                }
                cm.sendSimple(""+txt+" " + storeText + "");
		} 
		
	}else if (status == 3){
		if(mySelection == 3){
		cm.sendSimple("����A�A�Q�n�����اΪ������l�ѩO�H�H\r\n#b#L11##t4080000##l#k\r\n#b#L12##t4080001##l#k\r\n#b#L13##t4080002##l#k\r\n#b#L14##t4080003##l#k\r\n#b#L15##t4080004##l#k\r\n#b#L16##t4080005##l#k");	
		}else if(store){
			purchaseId = storeInfo[selection][0];
			purchaseitem = storeInfo[selection][2];
			purchaseCost = storeInfo[selection][1];
			if(cm.haveItem(purchaseitem, purchaseCost)){
				cm.sendYesNo("�z�T�w�n�I�� #i" + purchaseId + "#  ?  \r\n�I����z�|�Ѿl���_�c�ƥج� #r#e" + (cm.itemQuantity(purchaseitem) - purchaseCost) + " ��#t" + purchaseitem + "##k#n .");
			}else{
				cm.sendOk("�z�èS�������� #r#t" + purchaseitem + "#");
				cm.dispose();
			}
		}
	}if(status == 4){
		mySelection2 = selection;
	if(selection == 11 ||selection == 12 ||selection == 13 ||selection == 14 ||selection == 15 ||selection == 16){
		switch (mySelection2){
		case 11 : if (!cm.haveItem(4030000, 15) || !cm.haveItem(4030001, 15) || !cm.haveItem(4030009, 1)) {
				cm.sendOk("�зǳƦn���ơC #t4080000#�ݭn #b15#k ��#t4030000#�M#t4030001# �M #b1#k �� #t4030009# �I");
				cm.dispose();
			} else {
				cm.gainItem(4030000, -15);
				cm.gainItem(4030001, -15);
				cm.gainItem(4030009, -1);
				cm.gainItem(4080000, 1);
				cm.sendOk("���߻s�@����#t4080000#�C");
				cm.dispose();
			}
			break;
		case 12 : if (!cm.haveItem(4030000, 15) || !cm.haveItem(4030010, 15) || !cm.haveItem(4030009, 1)) {
				cm.sendOk("�зǳƦn���ơC #t4080001#�ݭn #b15#k ��#t4030000#�M#t4030010# �M #b1#k �� #t4030009# �I");
				cm.dispose();
			} else {
				cm.gainItem(4030000, -15);
				cm.gainItem(4030010, -15);
				cm.gainItem(4030009, -1);
				cm.gainItem(4080001, 1);
				cm.sendOk("���߻s�@����#t4080001#�C");
				cm.dispose();
			}break;
		
		case 13 : if (!cm.haveItem(4030000, 15) || !cm.haveItem(4030011, 15) || !cm.haveItem(4030009, 1)) {
				cm.sendOk("�зǳƦn���ơC #t4080002#�ݭn #b15#k ��#t4030000#�M#t4030011# �M #b1#k �� #t4030009# �I");
				cm.dispose();
			} else {
				cm.gainItem(4030000, -15);
				cm.gainItem(4030011, -15);
				cm.gainItem(4030009, -1);
				cm.gainItem(4080002, 1);
				cm.sendOk("���߻s�@����#t4080002#�C");
				cm.dispose();
			}break;
		
		case 14 : if (!cm.haveItem(4030010, 15) || !cm.haveItem(4030001, 15) || !cm.haveItem(4030009, 1)) {
				cm.sendOk("�зǳƦn���ơC #t4080003#�ݭn #b15#k ��#t4030010#�M#t4030001# �M #b1#k �� #t4030009# �I");
				cm.dispose();
			} else {
				cm.gainItem(4030010, -15);
				cm.gainItem(4030001, -15);
				cm.gainItem(4030009, -1);
				cm.gainItem(4080003, 1);
				cm.sendOk("���߻s�@����#t4080003#�C");
				cm.dispose();
			}break;
		
		case 15 : if (!cm.haveItem(4030011, 15) || !cm.haveItem(4030010, 15) || !cm.haveItem(4030009, 1)) {
				cm.sendOk("�зǳƦn���ơC #t4080004#�ݭn #b15#k ��#t4030011#�M#t4030010# �M #b1#k �� #t4030009# �I");
				cm.dispose();
			} else {
				cm.gainItem(4030011, -15);
				cm.gainItem(4030010, -15);
				cm.gainItem(4030009, -1);
				cm.gainItem(4030004, 1);
				cm.sendOk("���߻s�@����#t4080004#�C");
				cm.dispose();
			}break;
		
		case 16 : if (!cm.haveItem(4030011, 15) || !cm.haveItem(4030001, 15) || !cm.haveItem(4030009, 1)) {
				cm.sendOk("�зǳƦn���ơC #t4080005#�ݭn #b15#k ��#t4030011#�M#t4030001# �M #b1#k �� #t4030009# �I");
				cm.dispose();
			} else {
				cm.gainItem(4030011, -15);
				cm.gainItem(4030001, -15);
				cm.gainItem(4030009, -1);
				cm.gainItem(4080005, 1);
				cm.sendOk("���߻s�@����#t4080005#�C");
				cm.dispose();
			}break;
			}				
		}else {
            if (store) {
                if (cm.haveItem(purchaseitem, purchaseCost)) {
                    cm.gainItem(purchaseitem, -purchaseCost);
                    cm.gainItem(purchaseId);
                    cm.sendOk("���ߡA�o�O�z���s�D��");
                    cm.dispose();
                }
            } else {
                cm.sendOk("�o�ͥ������~");
				cm.dispose();
				}
			}
			
		}
	}			









