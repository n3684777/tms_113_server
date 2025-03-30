/*
	Name:  金寶箱
	Place: 轉蛋屋
*/
load('nashorn:mozilla_compat.js');
importPackage(Packages.handling.world);
importPackage(Packages.tools);
importPackage(Packages.server);
var status = -1;
var 轉蛋機名稱 = "金寶箱";
var 等級 = 1;
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
                                World.Broadcast.broadcastMessage_轉蛋用(MaplePacketCreator.getGachaponMega("【獲得大獎】" + cm.getPlayer().getName()," : 被他從"+轉蛋機名稱+"轉到了，大家恭喜他吧！", item, cm.getPlayer().getClient().getChannel()));
								cm.gainItem(4280000, -1);
								cm.gainItem(5490000, -1);
								cm.GAMEPLAYERLOG("金寶箱", "金寶箱抽獎", gashaponItem.getItemId(), 1);
								cm.sendOk("恭喜你開到了 【 #i" + gashaponItem.getItemId() + ":# 】  #b#z" + gashaponItem.getItemId() + "##k");
                        } else {
                            cm.sendOk(""+轉蛋機名稱+"維護中。");
                        }
                    } else {
                        cm.sendOk("請確認你的物品欄位還有空間。");
                    }
                } else {
                    cm.sendOk(""+轉蛋機名稱+"尚未開放。");
                }
            } else {
                cm.sendOk("很抱歉由於你沒有#b#i" + 4280000 + "# 或 #i" + 5490000 + "# #k，所以不能轉蛋哦。");
            }
			cm.dispose();
			break;
        }
    }
