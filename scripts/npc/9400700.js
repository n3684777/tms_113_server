/*
	Name:  ���_�c
	Place: ��J��
*/
load('nashorn:mozilla_compat.js');
importPackage(Packages.handling.world);
importPackage(Packages.tools);
importPackage(Packages.server);
var status = -1;
var ��J���W�� = "���_�c";
var ���� = 1;
var i = "";

function action(mode, _type, selection) {
    if (mode == 1) {
        status++;
    } else {
        cm.dispose();
        return;
    }

    switch (status) {
        case 0:
		if (cm.haveItem(4280000) && cm.haveItem(5490000) ) {
                var gashapon = cm.getGashapon();
                if(gashapon != null) {
                    if (cm.canHold()) {
                        var gashaponItem = gashapon.generateReward();
                        var item = MapleInventoryManipulator.addbyId_nature(cm.getPlayer().getClient(), gashaponItem.getItemId(), 1);
                        if(gashaponItem != null) { 
                            if(gashaponItem.canShowMsg())
                                World.Broadcast.broadcastMessage_��J��(MaplePacketCreator.getGachaponMega("�i��o�j���j" + cm.getPlayer().getName()," : �Q�L�q"+��J���W��+"���F�A�j�a���ߥL�a�I", item, cm.getPlayer().getClient().getChannel()));
								cm.gainItem(4280000, -1);
								cm.gainItem(5490000, -1);
								cm.GAMEPLAYERLOG("���_�c", "���_�c���", gashaponItem.getItemId(), 1);
								cm.sendOk("���ߧA�}��F �i #i" + gashaponItem.getItemId() + ":# �j  #b#z" + gashaponItem.getItemId() + "##k");
                        } else {
                            cm.sendOk(""+��J���W��+"���@���C");
                        }
                    } else {
                        cm.sendOk("�нT�{�A�����~����٦��Ŷ��C");
                    }
                } else {
                    cm.sendOk(""+��J���W��+"�|���}��C");
                }
            } else {
                cm.sendOk("�ܩ�p�ѩ�A�S��#b#i" + 4280000 + "# �� #i" + 5490000 + "# #k�A�ҥH������J�@�C");
            }
			cm.dispose();
			break;
        }
    }
