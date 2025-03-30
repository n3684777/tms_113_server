/*
* @autor Java
* LeaderMS MapleStory Private Server
* APQ
* cm.getPlayer().gainAriantPontos(-100);
* cm.gainItem(3010018, 1);
*/

var status = 0;
var item = [[1002498, 10000], [1052085, 10000], [1082145, 2000], [1082146, 2000], 
			[1082147, 2000], [1082148, 2000], [1082150, 2000]];

var cash = [[4250100, 30000], [4250300, 30000]];

var money = [[2049100, 5000],[2340000, 6000], [5490001, 5000], [4001078, 5000], [4000082, 3000]];

var mob = [[2100036, 1000], [2100035, 2000], [2100034, 3000], [2100019, 3000], 
[2100018, 3000], [2100017, 3000], [2100016, 3000], [2100015, 3000]];

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
		killmob = cm.getChar().getName();
        cm.sendNext("�z�Q�I�������ƶ�?�u�n�֦������������ơA�N�i�I���W�a�n§�A������� ?");
		}if (status == 1) {
			store = true;
			cm.sendSimple("�ثe�z�� #b�i"+cm.killmob2(killmob)+"�j#k �I�Ǫ�������\r\n�аݱz�Q�I������ ? \r\n\r\n�п�ܤ@�Ӻ���:\r\n" +
                    "#L101##b�I���˳ơB�Ȥl\r\n" +
                    "#L102#�I���j���_��(�i���I��)\r\n" +
                    "#L103#�I���D��\r\n" +
                    "#L104#�I���l��]");
		} else if (status == 2) {
            if (store) {
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
                    case 104:
                        storeInfo = mob;
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
                    storeText += "#L" + i + "##v" + wepId + "# - #z" + wepId + "# - " + cost + " �� " + coinIcon + "#l\r\n";
                }
                cm.sendSimple(storeText);
            } else {
					cm.sendOk("�o�ͥ��������~");
            }
        } else if (status == 3) {
			apqpontos = cm.killmob2(killmob);
            if (store) {
                purchaseId = storeInfo[selection][0];
                purchaseCost = storeInfo[selection][1];

                if (apqpontos >= purchaseCost) {
                    cm.sendYesNo("�z�T�w�n�I�� #i" + purchaseId + "# #t" + purchaseId + "#  \r\n�z�N�|�Ѿl #r#e" + (apqpontos - purchaseCost) + " �I " + coinIcon + "#k#n.");
                } else {
                    cm.sendOk("�z�èS�������� " + coinIcon + ".");
                    cm.dispose();
                }
            } else {
                MCTracker.log("[MCPQ_Info] CONTEXT_TOWN: Invalid status 3");
            }
        } else if (status == 4) {
            if (store) {
                if (apqpontos >= purchaseCost) {
					cm.setkillmob(killmob,-purchaseCost);
                    cm.gainItem(purchaseId);
                    cm.sendOk("���ߡA�o�O�z���s�D��");
                    cm.dispose();
                }
            } else {
                cm.sendOk("�o�ͥ��������~");
            }
        }
    }
}