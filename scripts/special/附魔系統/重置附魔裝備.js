load('nashorn:mozilla_compat.js');
importPackage(java.lang);
importPackage(Packages.client.inventory);
importPackage(Packages.tools);
importPackage(Packages.constants); //WorldConstants.
var status = -1;
var slot = Array();
var sel;
var item = 2000005;//需要物品
var item_數量 = 1;
var Meso = 0;
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
            output += "#e\t\t\t【 重置附魔裝備介紹頁面 】#k\r\n\r\n\n\r\n";
			output += "\t\t\t  #d重置附魔裝備需要物品：#k\r\n\r\n\n";
            output += "\t\t\t  #e[ #i"+item+"# #b#z "+item+" ##k x #r"+item_數量+" #k]\r\n\n\r\n";
			if(Meso > 0){
			output += "\t\t\t   #e[#b 楓幣#k：#r" + Meso + "#k ]#b\r\n\n\r\n";
			}
            output += "#k==============================================\r\n\r\n#b";
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
                    附魔次數 = StringTool.getIntFromString(itemID.getOwner());
					可附魔次數 = StringTool.getIntFromString(itemID.getOwnerquantity());
					if(附魔次數 > 0) {
						avail += "#L" + Math.abs(i) + "##i"+cm.getInventory(1).getItem(i).getItemId()+"#  #z" + cm.getInventory(1).getItem(i).getItemId() + "# 【#b已附魔#r"+附魔次數+"#k次/#b可附魔#r"+可附魔次數+"#k次】#l\r\n";	
					}
				}
            }
        }
        if(avail == ""){
            avail += "很抱歉,您的裝備欄沒有任何的附魔點裝哦!!~"; 
			cm.dispose();			 
        }
        cm.sendSimple("想要重置哪一件點數裝備呢？\r\n\r\n#d#e" + avail);
    } else if (status == 2) {
        selected = selection;
        cm.sendYesNo("你想要 #r重置#k 的點裝是這件嗎？ \r\n\r\n您目前選擇重置的點裝 ：#d#e#i" + cm.getInventory(1).getItem(selected).getItemId() + "##k #z" + cm.getInventory(1).getItem(selected).getItemId() + "##k\r\n");
    } else if (status == 3) {
		var type ;
		var meso = cm.getPlayer().getMeso();
        if (cm.haveItem(item, item_數量) && meso >= Meso) {
			cm.gainItem(cm.getInventory(1).getItem(selected).getItemId(),1);
			cm.processCommand("@清除道具 裝備 " + selected + " " + selected);
			cm.gainItem(item,-item_數量);
			cm.sendOk("已幫您重置！");
			if (Meso > 0) {
				cm.gainMeso(-Meso);
			}
            cm.dispose();
			return;
        } else {
			if (Meso > 0) {
				cm.sendOk("您的 #b#z " + item + " ##k 或是 楓幣不足 #b" + Meso + "#k 哦!!");
			}
                cm.sendOk("您的 #b#z " + item + " ##k 數量不足哦!!");
                cm.dispose();
        }
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