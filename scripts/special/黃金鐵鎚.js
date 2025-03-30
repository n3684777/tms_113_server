importPackage(java.lang);
importPackage(Packages.client.inventory);
importPackage(Packages.server);
importPackage(Packages.util);
importPackage(Packages.client);
importPackage(Packages.tools);

var slot = Array();
var item;
var 黃金鐵鎚 = 4031980;
var qty;
var status = 0;
var display;
var needap = -1;
var 敲擊次數 = 5;
var 成功機率 = 100;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status <= 0 && mode == 0) {
            cm.dispose();
            return;
        } else if (status >= 1 && mode == 0) {
            cm.sendOk("為了幫助更多的人管理好自己的裝備,我非常的忙！");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendSimple("請選擇您要提升捲數的裝備，我們會為您增加 1 捲\r\n\r\n"+
						  "裝備增加捲數所需物品為#r#t"+黃金鐵鎚+"##k#i"+黃金鐵鎚+"#\r\n每件裝備可敲#r "+敲擊次數+" 次#k\r\n\r\n"
						  +
						  "成功機率為 #r"+成功機率+" %");

        } else if (status == 1) {
			if (cm.haveItem(黃金鐵鎚,1)) {
                var avail = "";
                var ii = Packages.server.MapleItemInformationProvider.getInstance();
                var dd = 0;
                    for (var i = 0; i < 96; i++) {
                        if (cm.getInventory(1).getItem(i) != null) {
                    var itemId = cm.getInventory(1).getItem(i).getItemId();
                    if (itemId == null) {
                            i++; //防止下一步錯誤
                    }
                    if(!ii.isCash(itemId)){
                        avail += "#L" + Math.abs(i) + "#【 #i" + cm.getInventory(1).getItem(i).getItemId() + "# 】  -  #z" + cm.getInventory(1).getItem(i).getItemId() + "# 目前次數為#r「" + cm.getInventory(1).getItem(i).getViciousHammer() + "」#k次#l#b\r\n";
                    }
                    } else {
                    dd++;
                    }
                    slot.push(i);
                }
                cm.sendSimple("選擇想修改的道具 #r「無法敲打沒有捲數的裝備」#k\r\n#b" + avail);
			} else {
				cm.sendOk("您沒有黃金鐵鎚");
				cm.dispose();
			}
        } else if (status == 2) {
            startnum = selection;
            var avail = "";
            avail = ""+ cm.getInventory(1).getItem(startnum).getItemId() + "";
            選定的查詢裝備 = avail;

            cm.sendYesNo("您要強化的是這個裝備對嗎？\r\n\r\n#i"+選定的查詢裝備+"# #b#t"+選定的查詢裝備+"#");

		} else if (status == 3) {
			var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
			if (Packages.server.MapleItemInformationProvider.getInstance().isCash(cm.getInventory(1).getItem(startnum).getItemId())) {
				cm.sendOk("點裝無法使用黃金鐵鎚哦");
                cm.dispose();
				return;
			}
            if (item.getViciousHammer() < 敲擊次數) {
				if (ItemRandom < 成功機率) {
                    cm.gainItem(黃金鐵鎚,-1);
                    item.setViciousHammer((item.getViciousHammer() + 1 )); //計算總敲次數
                    item.setUpgradeSlots((item.getUpgradeSlots() + 1 )); // 增加欲修改項目次數
					
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
					MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
					cm.sendOk("恭喜您成功強化，目前敲擊次數為#r「"+item.getViciousHammer()+"」#k次");
                    cm.dispose();
				} else {
					cm.gainItem(黃金鐵鎚,-1);
					cm.sendOk("敲擊失敗，非常可惜！！");
					cm.dispose();
				}
            } else {
                cm.sendOk("抱歉,該裝已達到敲擊次數上限");
                cm.dispose();
            }
        }
    }
} 

function getRandom(min, max) {
	if (min > max) {
		return(-1);
	}

	if (min == max) {
		return(min);
	}

	return(min + parseInt(Math.random() * (max - min + 1)));
}

var ItemRandom = getRandom(0, 100);//機率1~100