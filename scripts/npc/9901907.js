/*
  �p�C���s�@ v62 ���� �d�ǹζ��sĶ
*/

var txt1 = "#r�޲z���٤����D�n���ƻ�@��";
var txt2 = "#r�޲z���٤����D�n���ƻ�G��";
var txt3 = "#r�޲z���٤����D�n���ƻ�T��";
var txt4 = "#r�޲z���٤����D�n���ƻ�|��";
var txt5 = "#r�޲z���٤����D�n���ƻ򤭸�";


var A = 4001168;//��������

var mob1 = [[4001168, 1, A, txt1], [4001168, 1, A, txt1]];
			
var mob2 = [[4001168, 1, A, txt2],[4001168, 1, A, txt2]];
			
var mob3 = [[4001168, 1, A, txt3],[4001168, 1, A, txt3]];

var mob4 = [[4001168, 1, A, txt4]];

var mob5 = [[4001168, 1, A, txt5], [4001168, 1, A, txt5]];

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
		cm.sendSimple("�K�I�A�n�����y����F�ܦh�ԧQ�~�H�ڬO���������I�����C�q�L#r�iBOSS�D�ԡj#k��o�����������i�H��ڧI���_���@!!\r\n\r\n#b"+
					  "#L0#���������I��#l");	
	}if (status == 1){
		if (selection == 0){
			store = true;
			cm.sendSimple("�z�Q�s�@���ض��Ū��Ǫ��]�O�H�H\r\n"+
						  "#b#L1#"+txt1+"#l#k\r\n"+
						  "#b#L2#"+txt2+"#l#k\r\n"+
						  "#b#L3#"+txt3+"#l\r\n"+
						  "#b#L4#"+txt4+"#l\r\n"+
						  "#b#L5#"+txt5+"#l");
				}
		}if (status == 2){
		mySelection = selection;
		switch (mySelection){ 
                    case 1:
                        storeInfo = mob1;
                        break;
                    case 2:
                        storeInfo = mob2;
                        break;
                    case 3:
                        storeInfo = mob3;
                        break;
                    case 4:
                        storeInfo = mob4;
                        break;
                    case 5:
                        storeInfo = mob5;
                        break;
                    default:
                        storeInfo = [];
                }if (storeInfo.length == 0) {
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
		
		
	}else if (status == 3){
			purchaseId = storeInfo[selection][0];
			purchaseitem = storeInfo[selection][2];
			purchaseCost = storeInfo[selection][1];
			if(cm.haveItem(purchaseitem, purchaseCost)){
				cm.sendYesNo("�z�T�w�n�I�� #i" + purchaseId + "#  ?  \r\n�I����z�|�Ѿl���_�c�ƥج� #r#e" + (cm.itemQuantity(purchaseitem) - purchaseCost) + " ��#t" + purchaseitem + "##k#n .");
			}else{
				cm.sendOk("�z�èS�������� #r#t" + purchaseitem + "#");
				cm.dispose();
			}
		
	}if(status == 4){
				if (cm.haveItem(purchaseitem, purchaseCost)) {
                    cm.gainItem(purchaseitem, -purchaseCost);
                    cm.gainItem(purchaseId);
                    cm.sendOk("���ߡA�o�O�z���s�D��");
                    cm.dispose();
                }else {
                cm.sendOk("�o�ͥ������~");
				cm.dispose();
				}
			}
			
		}
			









