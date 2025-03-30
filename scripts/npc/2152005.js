/*
* @autor Java
* LeaderMS MapleStory Private Server
* APQ
* cm.getPlayer().gainAriantPontos(-100);
* cm.gainItem(3010018, 1);
*/

var status = 0;

var �I���� = 4032733;//�m�i����

var item = [[4460008, 100], [4021007, 50], [4034044, 5], [4034180, 10], 
			[4034181, 20], [4034182, 30], [4034183, 50], [4033450, 100]];

var cash = [
			[5220000, 10], [5220010, 10], [5220020, 20], [5220050, 30], [5220082, 50]
			];

var money = [
			[2210000, 1],[2210001, 1], [2210002, 1], [2210003, 1], [2210004, 1],
			[2210005, 1],[2210006, 1], [2210007, 1], [2210008, 1], [2210009, 1],
			[2210010, 1],[2210011, 1], [2210012, 1], [2210013, 1], [2210014, 1],
			[2210015, 1],[2210016, 1], [2210017, 1], [2210018, 1], [2210019, 1],
			[2210020, 1],[2210021, 1], [2210022, 1], [2210025, 1], [2210026, 1],
			[2210027, 1],[2210028, 1], [2210029, 1], [2210030, 1], [2210031, 1],
			[2210034, 1],[2210035, 1], [2210036, 1], [2210037, 1], [2210038, 1],
			[2210039, 1],[2210040, 1], [2210041, 1], [2210042, 1]
			];

var mob = [
			[2100000, 3], [2100001, 3], [2100002, 3], [2100003, 3], 
			[2100004, 3], [2100005, 3], [2100006, 3], [2100007, 3],
			[2100008, 3], [2100009, 3], [2100010, 3], [2100011, 3],
			[2100012, 3], [2100013, 3], [2100015, 3],
			[2100016, 3], [2100017, 3], [2100018, 3], [2100019, 3],
			[2100020, 3], [2100021, 3], [2100022, 3], [2100023, 3],
			[2100024, 3], [2100025, 3], [2100026, 3], [2100027, 3],
			[2100028, 3], [2100029, 3], [2100030, 3], [2100031, 3],
			[2100032, 3], [2100033, 3], [2100034, 3], [2100035, 3],
			[2100036, 3], [2100037, 3], [2100038, 3], [2100039, 3],
			[2100040, 3], [2100041, 3], [2100042, 3], [2100043, 3],
			[2100044, 3], [2100045, 3], [2100046, 3], [2100047, 3],
			[2100048, 3], [2100049, 3], [2100050, 3], [2100051, 3],
			[2100052, 3], [2100053, 3], [2100054, 3], [2100055, 3],
			[2100056, 3], [2100057, 3], [2100058, 3], [2100059, 3],
			[2100060, 3], [2100061, 3], [2100062, 3], 
			];

var coinId = "�m�i����";
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
        cm.sendNext("�z�Q�I��#z"+�I����+"#��?\r\b�b�C�ֳ��D�� BOSS �D�ԴN�����|��o #v"+�I����+"# #z"+�I����+"#�A�M��P�ڧI���W�a�n§�A������� ?");
		}if (status == 1) {
			store = true;
			cm.sendSimple("�аݱz�Q�I������ ? \r\n\r\n�п�ܤ@�Ӻ���:\r\n" +
                    //"#L101##b�I���D��\r\n" +
                    "#L102#�I����J��\r\n" +
                    "#L103#�I���ܨ��Ĥ�\r\n" +
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
                    storeText += "#L" + i + "##v" + wepId + "# - #z" + wepId + "# - �ݭn " + cost + " �� " + coinIcon + "#l\r\n";
                }
                cm.sendSimple(storeText);
            } else {
					cm.sendOk("�o�ͥ��������~");
            }
        } else if (status == 3) {
            if (store) {
                purchaseId = storeInfo[selection][0];
                purchaseCost = storeInfo[selection][1];

                if (cm.haveItem(�I����, purchaseCost)) {
                    cm.sendYesNo("�z�T�w�n�I�� #i" + purchaseId + "# #t" + purchaseId + "#");
                } else {
                    cm.sendOk("�z�èS�������� " + coinIcon + ".");
                    cm.dispose();
                }
            } else {
                MCTracker.log("[MCPQ_Info] CONTEXT_TOWN: Invalid status 3");
            }
        } else if (status == 4) {
            if (store) {
                
					cm.gainItem(�I����,-purchaseCost);
                    cm.gainItem(purchaseId,1);
                    cm.sendOk("���ߡA�o�O�z���s�D��");
                    cm.dispose();
                
            } else {
                cm.sendOk("�o�ͥ��������~");
            }
        }
    }
}