
var status = 0;
var ��^ = false;
var �}�����| = "�I���M��/�����I��";


//�D��N�X ��o�ƶq ���������I�Ƽƶq 
var item = [
[4000003, 1, 8000],[4000004, 1, 20],[4000005, 1, 20],[4000006, 1, 20],
];

//�n�d�ʳf
var cash = [
[2000005, 1, 20],[2000006, 1, 20],[2000004, 1, 20],
];

//�m�\�n��
var money = [
[2450000, 1, 20],
];

var coinId = "�Ǫ�������";
var coinIcon = " "+ coinId + "";

importPackage(Packages.client);

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
			killmob = cm.getPlayer().getCharInfoNum("�I���������`��");
			cm.sendSimple("�ثe�z�� #b�i"+killmob+"�j#k �I�Ǫ�������\r\n�аݱz�Q�I������ ? \r\n\r\n�п�ܤ@�Ӻ���:\r\n" +
                    "#L101#��¦����\r\n" +
                    "#L102#�n�d�ʳf\r\n" +
                    "#L103#�m�\�n��\r\n");
		} else if (status == 1) {
            switch (selection) {
                case 101:
                    storeInfo = item;
                break;
                case 102:
                    storeInfo = cash;
                break;
                case 103:
                    storeInfo = money;
                break;
                default:
                    storeInfo = [];
            }if (storeInfo.length == 0) {
                cm.sendOk("�o�Ӱө����s�b");
                cm.dispose();
                return;
            }
                var storeText = "\r\n\r\n";
                for (var i = 0; i < storeInfo.length; ++i) {
                    var wepId = storeInfo[i][0];
                    var wepIdcost = storeInfo[i][1];
                    var cost = storeInfo[i][2];
                    storeText += "#L" + i + "#�i #v" + wepId + "# �j - #z" + wepId + "# - " + cost + " �� " + coinIcon + "#l\r\n";
                }
                cm.sendSimple(storeText);
        }else if (status == 2) {
			selection2 = selection;
			cm.sendGetNumber("�z�Q�I���h�ּƶq�H", 1, 1, 5000);    			
		}else if (status == 3) {
			if (selection <= 0 || selection > 5000) {
				cm.sendOk("�z�Q�������`�����A�ϥιL�{�w�Q����Log�I");
				cm.worldMessage(5,"���a�y"+ cm.getPlayer().getName() +"�z�Q������ϥβ��`�n��ק�ƾڡA�гq��GM�ˬd");
				cm.GAMEPLAYERLOG("�����I�����`", "�ϥβ��`�n��ק�ƾ�", 0, selection);
				cm.dispose();
				return;
			}
			�ۭq�ƭ� = selection;
            purchaseId = storeInfo[selection2][0];
            purchaseIdCost = storeInfo[selection2][1];
            purchaseCost = storeInfo[selection2][2];
            if (killmob >= purchaseCost*�ۭq�ƭ�) {
                cm.sendYesNo("�z�T�w�n�I�� #i" + purchaseId + "# #t" + purchaseId + "# "+purchaseIdCost*�ۭq�ƭ�+" ��\r\n"+
							 "�z�N�|���� #r" + purchaseCost*�ۭq�ƭ� + "#k �I�óѾl #r" + (killmob - purchaseCost*�ۭq�ƭ�) + " #k�I" + coinIcon + "#n.");
            } else {
                cm.sendOk("�z�èS�������� " + coinIcon + ".");
                ��^ = true;
            }
        } else if (status == 4) {
			if(��^){
				cm.dispose();
				cm.openNpc(9010000, �}�����|);
				return;
			}else{
				if (!cm.canHold(purchaseId, �ۭq�ƭ�)) {
					cm.sendOk("�нT�{�A�����~����٦��Ŷ��C");
					cm.dispose();
					return;
				}
				if (killmob >= purchaseCost*�ۭq�ƭ�) {
					cm.getPlayer().setCharInfoNum("�I���������`��",killmob - purchaseCost*�ۭq�ƭ�);
					killmob = cm.getPlayer().getCharInfoNum("�I���������`��");//��s������
					cm.gainItem(purchaseId,�ۭq�ƭ�);
					cm.sendOk("���ߡA�o�O�z���s�D��C\r\n\r\n�ثe�Ѿl�����Ƭ�#b �u"+killmob+"�v �I#k");
				}
			}
        } else if (status == 5) {
			cm.dispose();
			cm.openNpc(9010000, �}�����|);
			return;
		}
    }
}