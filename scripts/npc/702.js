
/*  Cliff - Happy Ville NPC
	�̫��s : �d�ǹζ�
 */
importPackage(Packages.client);
importPackage(Packages.server);

var status = -1;
var coinId = 4031408;
var coinIcon = "#i" + coinId + "#";
var warrior = [[2290002, 7], [2290006, 7], [2290000, 7], [2290004, 7],
               [2290008, 7], [2290014, 7], [2290012, 7], [2290016, 7], [2290010, 7],
               [2290018, 7], [2290020, 7], [2290022, 7], [2290001, 15],
               [2290003, 15], [2290005, 15], [2290007, 15], [2290009, 15], [2290011, 15],
               [2290011, 15], [2290013, 15], [2290015, 15], [2290017, 15],
               [2290019, 15], [2290021, 15], [2290023, 15]];

var magician = [[2290024, 7], [2290026, 7], [2290028, 7], [2290030, 7],
                [2290032, 7], [2290034, 7], [2290036, 7], [2290038, 7],
				[2290042, 7], [2290044, 7], [2290046, 7], [2290048, 7], [2290040, 7], 
				[2290025, 15],[2290027, 15],[2290029, 15],[2290031, 15], [2290041, 15],
				[2290033, 15],[2290035, 15],[2290037, 15],[2290039, 15],
				[2290041, 15],[2290043, 15],[2290045, 15],[2290047, 15],
				[2290049, 15]];

var archer = [[2290050, 7], [2290052, 7], [2290056, 7], [2290058, 7],
              [2290060, 7], [2290062, 7], [2290064, 7], [2290066, 7], 
			  [2290068, 7], [2290070, 7], [2290072, 7], [2290074, 7], 
			  [2290051, 15],[2290053, 15],[2290057, 15],[2290059, 15],
			  [2290061, 15],[2290063, 15],[2290065, 15],[2290067, 15],
			  [2290069, 15],[2290071, 15],[2290073, 15],[2290075, 15]];

var thief = [[2290076, 7], [2290078, 7], [2290080, 7], [2290082, 7],
             [2290084, 7], [2290086, 7], [2290088, 7], [2290090, 7], 
			 [2290092, 7], [2290077, 15], [2290079, 15], [2290081, 15], 
			 [2290083, 15], [2290085, 15], [2290089, 15], [2290091, 15], 
			 [2290093, 15]];

var pirate = [[2290097, 7], [2290099, 10], [2290101, 7], [2290102, 7],
              [2290106, 10],[2290110, 7], [2290112, 7], 
			  [2290114, 7], [2290115, 7], [2290117, 7], [2290119, 7], 
			  [2290121, 7], [2290123, 7], [2290124, 7], [2290095, 15], 
			  [2290098, 15], [2290100, 15], [2290103, 15], [2290107, 15], 
			  [2290111, 15], [2290113, 15], [2290116, 15],
			  [2290118, 15], [2290120, 15], [2290122, 15]];
var Open = [[2290096, 7], [2290125, 15], [2290117, 7], [2290118, 15]];			  

function start() {
    action(1, 0, 0);
 }

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status > 0) {
            status--;
        } else {
            cm.dispose();
            return;
        }
    } 
    if (status == 0) {
        cm.sendNext("�z�n�A�ڻݭn�z�����U#b�`��#k�Ӧۥ@�ɤ����@�ӹD��C�p�G�A���ڻ`���o�ӹD��A�z�N�i�H�P�ڧI��#r�ޯ��#�C\r\n#k�ڲ{�b�ݭn : \r\n\r\n#i4031408# #t4031408#\r\n\r\n�ثe�z�֦��ƶq�� (#e" + cm.getPlayer().countItem(4031408) + "#n) #t4031408#.�i�I��U�@���i��I���C");
    } else if (status == 1) {
		store = true;
        cm.sendSimple("�п�ܤ@�Ӻ���:\r\n" +
                    "#L101##b�I���Ԥh���ޯ��\r\n" +
                    "#L102#�I���k�v���ޯ��\r\n" +
                    "#L103#�I���}�b�����ޯ��\r\n" +
                    "#L104#�I���s��ޯ��\r\n" +
                    "#L105#�I�����s�ޯ��\r\n" +
					"#L106#�I���q�Χޯ��\r\n");
					} else if (status == 2) {
            if (store) {
                switch (selection) {
                    case 101:
                        storeInfo = warrior;
                        break;
                    case 102:
                        storeInfo = magician;
                        break;
                    case 103:
                        storeInfo = archer;
                        break;
                    case 104:
                        storeInfo = thief;
                        break;
                    case 105:
                        storeInfo = pirate;
                        break;
                    case 106:
                        storeInfo = Open;
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
                    storeText += "#L" + i + "##v" + wepId + "# - #z" + wepId + "# - �i" + cost + " �j�� " + coinIcon + "#l\r\n";
                }
                cm.sendSimple(storeText);
            } else {
                cm.sendOk("�ثe�L�k�ϥ�");
				cm.dispose();
            }
        } else if (status == 3) {
            if (store) {
                purchaseId = storeInfo[selection][0];
                purchaseCost = storeInfo[selection][1];

                if (cm.haveItem(coinId, purchaseCost)) {
                    cm.sendYesNo("�z�T�w�n�I�� #i" + purchaseId + "#? �z�N�|��o #r#e" + (cm.itemQuantity(coinId) - purchaseCost) + " " + coinIcon + "##k#n �Ѿl.");
                } else {
                    cm.sendOk("�z�èS�������� " + coinIcon + ".");
                    cm.dispose();
                }
            } else {
                cm.sendOk("�ثe�L�k�ϥ�");
				cm.dispose();
            }
        } else if (status == 4) {
            if (store) {
                if (cm.haveItem(coinId, purchaseCost)) {
                    cm.gainItem(coinId, -purchaseCost);
                    cm.gainItem(purchaseId);
                    cm.sendOk("���ߡA�o�O�z���s�D��");
                    cm.dispose();
                }
            } else {
                cm.sendOk("�ثe�L�k�ϥ�");
				cm.dispose();
            }
        } 
} 
