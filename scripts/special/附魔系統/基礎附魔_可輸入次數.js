load('nashorn:mozilla_compat.js');
importPackage(java.lang);
importPackage(Packages.client.inventory);
importPackage(Packages.tools);
importPackage(Packages.constants); //WorldConstants.
var status = -1;
var slot = Array();
var sel;
var item = 4460002;
var item_數量 = 1;//固定為 1 
var 顯示機率 = 60;
var 實際機率 = 60;
var 力量 = ""+WorldConstants.附魔力量最小值+" ~ "+WorldConstants.附魔力量最大值+"";
var 敏捷 = ""+WorldConstants.附魔敏捷最小值+" ~ "+WorldConstants.附魔敏捷最大值+"";
var 智力 = ""+WorldConstants.附魔智力最小值+" ~ "+WorldConstants.附魔智力最大值+"";
var 幸運 = ""+WorldConstants.附魔幸運最小值+" ~ "+WorldConstants.附魔幸運最大值+"";
var 物攻 = ""+WorldConstants.附魔物攻最小值+" ~ "+WorldConstants.附魔物攻最大值+"";
var 魔攻 = ""+WorldConstants.附魔魔攻最小值+" ~ "+WorldConstants.附魔魔攻最大值+"";
var 取消 = "#fUI/Basic/BtCancel/pressed/0#";
var 上頁腳本 = "附魔系統/附魔系統";
var 返回 = false;
var 腳本路徑 = "附魔系統/基礎附魔";
var 確認 = "#fUI/Basic/BtOK/pressed/0#";


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
					if (附魔次數 < 讀取後台附魔次數) {
						avail += "#L" + Math.abs(i) + "##i"+cm.getInventory(1).getItem(i).getItemId()+"#  #d#z" + cm.getInventory(1).getItem(i).getItemId() + "##k#l \r\n\r\n【#b已附魔#r"+附魔次數+"#k次/#b可附魔#r"+讀取後台附魔次數+"#k次】\r\n\r\n";
					}
					/*
					if (可附魔次數 == 0) {
						avail += "#L" + Math.abs(i) + "##i"+cm.getInventory(1).getItem(i).getItemId()+"#  #z" + cm.getInventory(1).getItem(i).getItemId() + "##l \r\n\r\n【#b已附魔#r"+附魔次數+"#k次/#b可附魔#r"+讀取後台附魔次數+"#k次】\r\n\r\n";
					} else {
						avail += "#L" + Math.abs(i) + "##i"+cm.getInventory(1).getItem(i).getItemId()+"#  #z" + cm.getInventory(1).getItem(i).getItemId() + "##l \r\n\r\n【#b已附魔#r"+附魔次數+"#k次/#b可附魔#r"+讀取後台附魔次數+"#k次】\r\n\r\n";	
					}
					*/
				}
            }
        }
        if(avail == ""){
            avail += "很抱歉,您的裝備欄沒有任何的點裝哦!!~"; 
			cm.dispose();			 
            }
        cm.sendSimple("#b想要附魔哪一件點數裝備呢#k\r\n\r\n#d#e" + avail);
    } else if (status == 2) {
        selected = selection;
        cm.sendYesNo("你想要 #r附魔#k 的點裝是這件嗎 ? \r\n\r\n您目前選擇附魔的道具 ：#d#e#i" + cm.getInventory(1).getItem(selected).getItemId() + "##k #z" + cm.getInventory(1).getItem(selected).getItemId() + "##k\r\n");
    } else if (status == 3) {
		cm.sendGetNumber("您想附魔多少次？", 1, 1, 5000);    			
	}  else if (status == 4) {
		if (selection <= 0 || selection > 5000) {
			cm.sendOk("您被偵測異常紀錄，使用過程已被紀錄Log！");
			cm.worldMessage(5,"玩家『"+ cm.getPlayer().getName() +"』被偵測到使用異常軟體修改數據，請通知GM檢查");
			cm.GAMEPLAYERLOG("基礎附魔異常", "使用異常軟體修改數據", 0, selection);
			cm.dispose();
			return;
		}
		次數 = selection;
		itemID = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(selected).copy();
		附魔次數 = StringTool.getIntFromString(itemID.getOwner());
		可附魔次數 = StringTool.getIntFromString(itemID.getOwnerquantity());
		var type ;
		if (!cm.haveItem(item, item_數量 * 次數)) {
			cm.sendOk("您的 #b#z " + item + " ##k 不足哦!!");
			返回 = true;
        }if ((附魔次數 + 次數) > 讀取後台附魔次數) {
			cm.sendOk("您輸入的次數會超過單一點裝最大附魔次數數量。");
			返回 = true;
        }if(讀取後台附魔次數 == 0){
			cm.sendOk("服主沒有設定附魔次數哦~");
			返回 = true;
		}
		if(!返回){
			if (附魔次數 < 讀取後台附魔次數) {
				cm.sendYesNo(cm.自動計算機率_基礎附魔(selected, item, 次數, 實際機率));
			} else {
				cm.sendOk("發生異常");
				返回 = true;
			}
		}
    } else if (status == 5) {
		if(返回){
			cm.dispose();
			cm.openNpc(9010000, 腳本路徑);
			return;
		}else{
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