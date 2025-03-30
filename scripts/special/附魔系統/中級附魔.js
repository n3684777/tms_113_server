load('nashorn:mozilla_compat.js');
importPackage(java.lang);
importPackage(Packages.client.inventory);
importPackage(Packages.tools);
importPackage(Packages.constants); //WorldConstants.
var status = -1;
var slot = Array();
var sel;
var item = 4460003;
var item_數量 = 3;
var 顯示機率 = 80;
var 實際機率 = 80;
var 力量 = ""+WorldConstants.中級附魔力量最小值+" ~ "+WorldConstants.中級附魔力量最大值+"";
var 敏捷 = ""+WorldConstants.中級附魔敏捷最小值+" ~ "+WorldConstants.中級附魔敏捷最大值+"";
var 智力 = ""+WorldConstants.中級附魔智力最小值+" ~ "+WorldConstants.中級附魔智力最大值+"";
var 幸運 = ""+WorldConstants.中級附魔幸運最小值+" ~ "+WorldConstants.中級附魔幸運最大值+"";
var 物攻 = ""+WorldConstants.中級附魔物攻最小值+" ~ "+WorldConstants.中級附魔物攻最大值+"";
var 魔攻 = ""+WorldConstants.中級附魔魔攻最小值+" ~ "+WorldConstants.中級附魔魔攻最大值+"";
var 取消 = "#fUI/Basic/BtCancel/pressed/0#";
var 上頁腳本 = "附魔系統/附魔系統";

var 確認 = "#fUI/Basic/BtOK/pressed/0#";

function getRandom(min, max) {
	if (min > max) {
		return(-1);
	}

	if (min == max) {
		return(min);
	}

	return(min + parseInt(Math.random() * (max - min + 1)));
}

var ItemRandom = getRandom(1, 100);//機率1~100

function start() {
    //status = -1;
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
            output += "#e          【 以下是初級附魔介紹頁面 】#k\r\n\r\n\n\r\n";
            output += "           #e#i"+item+"# #z "+item+" ##k x "+item_數量+" #b\r\n\n\r\n";
            output += "#k=========================================\r\n\r\n#b";
			output += "       " + format("力量 : ", 6) + "#r" + format(力量, 6) + "  #b" + format("敏捷 : ", 6) + "#r" + format(敏捷, 6) + "  \r\n\r\n";
			output += "       #b" + format("智力 : ", 6) + "#r" + format(智力, 6) + "  #b" + format("幸運 : ", 6) + "#r" + format(幸運, 6) + "  \r\n\r\n";
            output += "       #b" + format("物攻 : ", 6) + "#r" + format(物攻, 6) + "  #b" + format("魔攻 : ", 6) + "#r" + format(魔攻, 6) + "\r\n\r\n";
            output += "                  #b" + format("成功機率", 6) + "#r" + format(""+顯示機率+" #b%", 8) + "\r\n\r\n\r\n";
            output += "     #L2#" + format(""+取消+"", 4) + "#l            #L1#" + format(""+確認+"", 4) + "#l\r\n\r\n\n";
        cm.sendOk(output);
    } else if (status == 1) {
		sel = selection;
        
        if(sel == 2){
            cm.dispose();
            cm.openNpc(9010000, 上頁腳本);
            return;
        } 
        var avail = "";
        for (var i = 0; i < 96; i++) {
            if (cm.getInventory(1).getItem(i) != null) {
                if (Packages.server.MapleItemInformationProvider.getInstance().isCash(cm.getInventory(1).getItem(i).getItemId())) {
                    itemID = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(i).copy();
					讀取後台附魔次數 = WorldConstants.裝備可附魔次數
                    附魔次數 = StringTool.getIntFromString(itemID.getOwner());
					可附魔次數 = StringTool.getIntFromString(itemID.getOwnerquantity());
					if (可附魔次數 == 0) {
						avail += "#L" + Math.abs(i) + "##i"+cm.getInventory(1).getItem(i).getItemId()+"#  #z" + cm.getInventory(1).getItem(i).getItemId() + "##l \r\n\r\n【#b已附魔#r"+附魔次數+"#k次/#b可附魔#r"+讀取後台附魔次數+"#k次】\r\n\r\n";
					} else {
						avail += "#L" + Math.abs(i) + "##i"+cm.getInventory(1).getItem(i).getItemId()+"#  #z" + cm.getInventory(1).getItem(i).getItemId() + "##l \r\n\r\n【#b已附魔#r"+附魔次數+"#k次/#b可附魔#r"+讀取後台附魔次數+"#k次】\r\n\r\n";	
					}
					
				}
            }
        }
        if(avail == ""){
            avail += "很抱歉,您的裝備欄沒有任何的點裝哦!!~"; 
			cm.dispose();			 
            }
        cm.sendSimple("想要 #r附魔#k 哪一件點數裝備呢\r\n\r\n#d#e" + avail);
    } else if (status == 2) {
        selected = selection;
        cm.sendYesNo("你想要 #r附魔#k 的點裝是這件嗎 ? \r\n\r\n您目前選擇附魔的道具 ：#d#e#i" + cm.getInventory(1).getItem(selected).getItemId() + "##k #z" + cm.getInventory(1).getItem(selected).getItemId() + "##k\r\n");
    } else if (status == 3) {
		var type ;
		if (!cm.haveItem(item, item_數量)) {
			cm.sendOk("您的 #b#z " + item + " ##k 不足哦!!");
            cm.dispose();
			return;
        }
		if(讀取後台附魔次數 == 0){
			cm.sendOk("服主沒有設定附魔次數哦~");
			cm.dispose();
			return;
		}
		itemID = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(selected).copy();
		附魔次數 = StringTool.getIntFromString(itemID.getOwner());
		可附魔次數 = StringTool.getIntFromString(itemID.getOwnerquantity());	
		if (附魔次數 == 0 && 可附魔次數 == 0 || 附魔次數 < 讀取後台附魔次數) {
			if(ItemRandom >= 0 && ItemRandom <= 100){
				if(ItemRandom <= 實際機率){
					if (cm.haveItem(item, item_數量)) {
						status = 5;
						cm.sendYesNo(cm.無限制附魔_中級(selected));
						cm.gainItem(item,-item_數量);
					} else {
						status = 3;
						cm.sendOk("您的 #b#z " + item + " ##k 不足哦!!");
						cm.dispose();
					}
				}else {
					status = 5;
					cm.sendOk("很抱歉，您的附魔失敗了");
					cm.gainItem(item,-item_數量);
				}
			}else{
				if(ItemRandom2 <= 實際機率){
					if (cm.haveItem(item, item_數量)) {
						status = 5;
						cm.sendYesNo(cm.無限制附魔_中級(selected));
						cm.gainItem(item,-item_數量);
               
					} else {
						status = 3;
						cm.sendOk("您的 #b#z " + item + " ##k 不足哦!!");
						cm.dispose();
					}
				}else {
					status = 5;
					cm.sendOk("很抱歉，您的附魔失敗了");
					cm.gainItem(item,-item_數量);
				} 
			}
	} else {
		if(附魔次數 >= 讀取後台附魔次數 ){
			cm.sendOk("附魔次數已經達到上限。");
			cm.dispose();
			return;
		} 
	}
    } else if (status == 4) {
        cm.dispose();
    } else if (status == 6) {
        status = 2;
        function getRandom(min, max) {
         if (min > max) {
            return(-1);
         }

         if (min == max) {
            return(min);
         }

         return(min + parseInt(Math.random() * (max - min + 1)));
      }

		ItemRandom2 = getRandom(1, 100);//機率1~100
		ItemRandom = 100000;
		cm.sendOk("#b即將花費 #i"+item+"#  #z"+item+"##k #r"+item_數量+"#b 個 再次附魔此點裝...");
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