
/*
	Name:  ������J��
	Place: ��J��
*/
load('nashorn:mozilla_compat.js');
importPackage(Packages.handling.world);
importPackage(Packages.tools);
importPackage(Packages.server);
var status = -1;
/* ��ܰӫ~ 
 * �N�D��ID ��J [] ��
 * �d�� : [1372005, 1092005, �U�@�ӭn��J���N�X]
 */
 
 
var ��J���W�� = "�����D�O������J��";
var requireItem = 5220082; /* ��J�� */

var ���q�D�� = [

	[4000001, 1],[4000001, 1],[4000001, 1],
			   
			   ];

var �u���D�� = [

	[4000002, 1],[4000002, 1],[4000002, 1],
			   
	];
	
var �}���D�� = [

	[4000003, 1],[4000003, 1],[4000003, 1],
			   
	];

//�o�̥u�|��ܷ|��쪺���~
var showItems = [4000001,4000002,4000003,];

function getRandom(min, max) {
	if (min > max) {
		return(-1);
	}

	if (min == max) {
		return(min);
	}

	return(min + parseInt(Math.random() * (max - min + 1)));
}

var ���q = ���q�D��[getRandom(0, ���q�D��.length - 1)];
var �u�� = �u���D��[getRandom(0, �u���D��.length - 1)];
var �}�� = �}���D��[getRandom(0, �}���D��.length - 1)];

var chance = getRandom(0, 100);


function action(mode, _type, selection) {
    if (mode == 1) {
        status++;
    } else {
        cm.dispose();
        return;
    }

    switch (status) {
        case 0:
            if (cm.getPlayer().getLevel() < 10) {
            cm.sendOk(""+��J���W��+"�u��q10�Ŷ}�l�ϥΡC");
            status = -1;
            cm.dispose();
            break;
    		}else{
            cm.sendYesNo("�A�n�A�ڬO"+��J���W��+"�A�ݭn�ϥ� #i"+requireItem+"# �аݧA�n��J�ܡH\r\n\r\n#r���b�ЦܸU��NPC�����u�s�y�M�ϡv���u���b�s�y�v�A�s�@�U�న�b�C#k");
            break;
        }
        case 1:{
            var str = "#e#b#i2022619# "+��J���W��+"�������j���p�U:\r\n\r\n";
            for(var i = 0; i< showItems.length; i++){
                str += " #i"+showItems[i]+"# #z"+showItems[i]+"#\r\n";
            }
            cm.sendNext(str);
            break;
        }
        case 2: {
            if (cm.haveItem(requireItem)) {
				if(chance > 0 && chance <= 10){
					�D�� = �u��[0];
					�D��ƶq = �u��[1];
                    var item = MapleInventoryManipulator.addbyId_Gachapon(cm.getPlayer().getClient(), �D��, 1);
					//cm.gainItem(�D��, �D��ƶq);
					cm.gainItem(requireItem, -1);
					cm.sendOk("�@�߱z��o�F�G\r\n\r\n"+
							  "#i" + �D�� + "# #z" + �D�� + "# - #b"+�D��ƶq+"��#k\r\n\r\n");
					World.Broadcast.broadcastMessage(MaplePacketCreator.getGachaponMega("�i��o�j���j" + cm.getPlayer().getName()," : �Q�L�q"+��J���W��+"���F�A�j�a���ߥL�a�I", item, cm.getPlayer().getClient().getChannel())); //ppms��s
				}if(chance > 11 && chance <= 15){
					�D�� = �}��[0];
					�D��ƶq = �}��[1];
                    var item = MapleInventoryManipulator.addbyId_Gachapon(cm.getPlayer().getClient(), �D��, 1);
					//cm.gainItem(�D��, �D��ƶq);
					cm.gainItem(requireItem, -1);
					cm.sendOk("�@�߱z��o�F�G\r\n\r\n"+
							  "#i" + �D�� + "# #z" + �D�� + "# - #b"+�D��ƶq+"��#k\r\n\r\n");
					World.Broadcast.broadcastMessage(MaplePacketCreator.getGachaponMega("�i��o�j���j" + cm.getPlayer().getName()," : �Q�L�q"+��J���W��+"���F�A�j�a���ߥL�a�I", item, cm.getPlayer().getClient().getChannel())); //ppms��s
				}else{
					�D�� = ���q[0];
					�D��ƶq = ���q[1];
					cm.gainItem(�D��, �D��ƶq);
					cm.gainItem(requireItem, -1);
					cm.sendOk("�@�߱z��o�F�G\r\n\r\n"+
							  "#i" + �D�� + "# #z" + �D�� + "# - #b"+�D��ƶq+"��#k\r\n\r\n");
					
				}           
            } else {
                cm.sendOk("�ܩ�p�ѩ�A�S��#b#i" + requireItem + "##k�A�ҥH������J�@�C");
            }
        }
        case 3:
            cm.dispose();
    }
}
