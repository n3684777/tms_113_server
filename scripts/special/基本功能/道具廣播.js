load('nashorn:mozilla_compat.js');
importPackage(java.lang);
importPackage(Packages.client.inventory);
importPackage(Packages.tools);
importPackage(Packages.constants); //WorldConstants.
importPackage(Packages.handling.world);
importPackage(Packages.server);

var status = -1;
var slot = Array();
var sel;
var 上頁腳本 = "聚合功能";
var 取消 = "#fUI/Basic/BtCancel/pressed/0#";
var 確認 = "#fUI/Basic/BtOK/pressed/0#";
var 線 = "#fMap/MapHelper/worldMap/npcPos3/6#";

function start() {
    action(1, 0, 0);
}


var status = -1;

function action(mode, type, selection) {
    if (mode == 0 && status == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
       var output = "";
            output += "\r\n\r\n"+線+線+線+線+線+線+線+線+"#e 【 道具廣播分類 】 #n"+線+線+線+線+線+線+線+線+線+"\r\n\r\n#b";
			output += "#L10#" + format("【 裝備 】", 6) +"#l   #L11#" + format("【 消耗 】", 6) +"#l  #L12#" + format("【 裝飾 】", 6) +"#l\r\n\r\n";
			output += "#L13#" + format("【 其他 】", 6) +"#l   #L14#" + format("【 特殊 】", 6) +"#l\r\n\r\n\r\n";
            output += "     #L2#" + format(""+取消+"", 4) + "#l\r\n\r\n\n";
        cm.sendOk(output);
    } else if (status == 1) {
		sel = selection;
        if(sel == 2){
            cm.dispose();
            cm.openNpc(9010000, 上頁腳本);
            return;
        } 
        var avail = "";
		avail += "\r\n\r\n"+線+線+線+線+線+線+線+線+"【 以下道具 】"+線+線+線+線+線+線+線+線+線+"\r\n\r\n";
		for (var i = 0; i < 96; i++) {
			if(sel == 10){
				if (cm.getInventory(1).getItem(i) != null) {
					itemID = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(i).copy();
					avail += "#L" + Math.abs(i) + "#【 #i"+cm.getInventory(1).getItem(i).getItemId()+"# 】 #z" + cm.getInventory(1).getItem(i).getItemId() + "# - 在第 "+i+" 格#l\r\n\r\n";	
				}
			}if(sel == 11){
				if (cm.getInventory(2).getItem(i) != null) {
					itemID = cm.getChar().getInventory(MapleInventoryType.USE).getItem(i).copy();
					avail += "#L" + Math.abs(i) + "#【 #i"+cm.getInventory(2).getItem(i).getItemId()+"# 】 #z" + cm.getInventory(2).getItem(i).getItemId() + "# - 在第 "+i+" 格#l\r\n\r\n";	
				}
			}if(sel == 12){
				if (cm.getInventory(3).getItem(i) != null) {
					itemID = cm.getChar().getInventory(MapleInventoryType.SETUP).getItem(i).copy();
					avail += "#L" + Math.abs(i) + "#【 #i"+cm.getInventory(3).getItem(i).getItemId()+"# 】 #z" + cm.getInventory(3).getItem(i).getItemId() + "# - 在第 "+i+" 格#l\r\n\r\n";	
				}
			}if(sel == 13){
				if (cm.getInventory(4).getItem(i) != null) {
					itemID = cm.getChar().getInventory(MapleInventoryType.ETC).getItem(i).copy();
					avail += "#L" + Math.abs(i) + "#【 #i"+cm.getInventory(4).getItem(i).getItemId()+"# 】 #z" + cm.getInventory(4).getItem(i).getItemId() + "# - 在第 "+i+" 格#l\r\n\r\n";	
				}
			}if(sel == 14){
				if (cm.getInventory(5).getItem(i) != null) {
					itemID = cm.getChar().getInventory(MapleInventoryType.CASH).getItem(i).copy();
					avail += "#L" + Math.abs(i) + "#【 #i"+cm.getInventory(5).getItem(i).getItemId()+"# 】 #z" + cm.getInventory(5).getItem(i).getItemId() + "# - 在第 "+i+" 格#l\r\n\r\n";	
				}
			}
		}
        if(avail == ""){
            avail += "很抱歉,您的包包沒有任何物品哦!!"; 
			cm.dispose();			 
            }
        cm.sendSimple(avail);
    } else if (status == 2) {
        selected = selection;
		if(sel == 10){
			cm.sendYesNo("\r\n\r\n您目前選擇要廣播的道具 ：#d#e#i" + cm.getInventory(1).getItem(selected).getItemId() + "##k #z" + cm.getInventory(1).getItem(selected).getItemId() + "##k\r\n");
		}if(sel == 11){
			cm.sendYesNo("\r\n\r\n您目前選擇要廣播的道具 ：#d#e#i" + cm.getInventory(2).getItem(selected).getItemId() + "##k #z" + cm.getInventory(2).getItem(selected).getItemId() + "##k\r\n");
		}if(sel == 12){
			cm.sendYesNo("\r\n\r\n您目前選擇要廣播的道具 ：#d#e#i" + cm.getInventory(3).getItem(selected).getItemId() + "##k #z" + cm.getInventory(3).getItem(selected).getItemId() + "##k\r\n");
		}if(sel == 13){
			cm.sendYesNo("\r\n\r\n您目前選擇要廣播的道具 ：#d#e#i" + cm.getInventory(4).getItem(selected).getItemId() + "##k #z" + cm.getInventory(4).getItem(selected).getItemId() + "##k\r\n");
		}if(sel == 14){
			cm.sendYesNo("\r\n\r\n您目前選擇要廣播的道具 ：#d#e#i" + cm.getInventory(5).getItem(selected).getItemId() + "##k #z" + cm.getInventory(5).getItem(selected).getItemId() + "##k\r\n");
		}
    } else if (status == 3) {
		if(sel == 10){
			itemID = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(selected).copy();
		}if(sel == 11){
			itemID = cm.getChar().getInventory(MapleInventoryType.USE).getItem(selected).copy();
		}if(sel == 12){
			itemID = cm.getChar().getInventory(MapleInventoryType.SETUP).getItem(selected).copy();
		}if(sel == 13){
			itemID = cm.getChar().getInventory(MapleInventoryType.ETC).getItem(selected).copy();
		}if(sel == 14){
			itemID = cm.getChar().getInventory(MapleInventoryType.CASH).getItem(selected).copy();
		}
		cm.showSmegaItem("來買東西哦~", itemID);
		cm.sendOk("廣播成功！");
		cm.dispose();			
    } 
}

function format(content, length) {
   var str = "";
   var cs = "";
   if(content.length > length) {
      str = content;
   }else{
      for(var i = 0; i < length - content.toString().length; i++) {
         cs = cs + " ";
      }
   }
   str = content + cs;
   return str;
}