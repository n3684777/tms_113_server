var status = -1;
var sel, select;
load('nashorn:mozilla_compat.js');
importPackage(java.lang);
importPackage(Packages.client.inventory);
importPackage(Packages.tools);
importPackage(Packages.constants); //WorldConstants.

var name = "裝備升級";
var 圖標代碼 = 1122023;
var 上頁 = "#fUI/UIWindow/itemSearch/BtBack/mouseOver/0#";
var 上頁腳本 = "聚合功能";
var 成功道具 = 4000015;
var 防爆道具 = 4000016;

//指定可升級裝備，Eq_item每一列都會對應Check_condition 、 UP_item 的每個大[]區域內參數
var Eq_item = [
//[裝備ID, 請都填寫1
	[1122028 , 1],
	[1122033 , 1],
]; 

//每階段條件
//如果每種裝備共有5種條件，那底下的對應兌換物也要有5種，不然會有異常
var Check_condition = [
   //指定裝備一條件
   //成功機率,失敗機率,爆炸機率(失敗才會觸發),力量,敏捷,智力,幸運,物攻,魔攻
   //(成功與失敗機率請確保相加 = 100)
	[
		[90, 10, 80, 1, 2, 3, 4, 1, 1],
		[90, 10, 50, 1, 2, 3, 4, 1, 1],
	],
	[
		[90, 10, 50, 1, 2, 3, 4, 1, 1],
		[90, 10, 50, 1, 2, 3, 4, 1, 1],
	],
];

//對應兌換物
var UP_item = [
	//指定裝備所需兌換物。最多 6 種道具
   //兌換物代碼,兌換物數量
   //兌換物代碼填寫0則不會計算
	[
		[4000008, 1, 4000009, 1, 4000011, 1, 4000012, 1, 4000013, 1, 4000014, 1],
		[4000008, 1, 4000009, 1, 4000011, 1, 0, 1, 0, 1, 0, 1],
	],
	[
		[1122023, 1, 1122023, 1, 1122023, 1, 1122023, 1, 1122023, 1, 1122023, 1],
		[1122023, 1, 1122023, 1, 1122023, 1, 1122023, 1, 1122023, 1, 1122023, 1],
	],
];

function getRandom(min, max) {
	if (min > max) {
		return(-1);
	}

	if (min == max) {
		return(min);
	}

	return(min + parseInt(Math.random() * (max - min + 1)));
}

var ItemRandom = getRandom(1, 100);

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
	
    if (mode == 0 || mode == -1 && status == 0) {
        cm.dispose();
        return;
    }
    mode == 1 ? status++ : status--;

    if (status == 0) {

		var msg = "       #b#e我是" + name + "" + "請問您要升級甚麼呢?#n#k\r\n\r\n";
      msg += "             請點選下方要升級的系列\r\n\r\n\r\n\r\n";
		var x = 0;
		for (var i = 0; i < Eq_item.length; i++) {
         x ++;
         msg += "#L"+i+"#【 #i" + Eq_item[i][0] + "# 】 -  #z" + Eq_item[i][0] + "##l";
			msg += "\r\n\r\n=============================================\r\n\r\n";
		}
			x_2 = x + 1;
			msg +=  "\r\n\r\n                #L"+x_2+"#"+上頁+"#l\r\n" ; 
			cm.sendSimple(msg);
    } else if (status == 1) {
      select = selection;
		if(x_2 == select){
            cm.dispose();
            cm.openNpc(9010000, 上頁腳本);
            return;
        } 
        var avail = "";
        var msg = "";
            msg += "您本次選擇的系列為 #i" + Eq_item[select][0] + "#  #z" + Eq_item[select][0] + "#\r\n\r\n";
            for (var i = 0; i < 96; i++) {
               if (cm.getInventory(1).getItem(i) != null) {
               itemId = cm.getInventory(1).getItem(i).getItemId();
                  if (!Packages.server.MapleItemInformationProvider.getInstance().isCash(cm.getInventory(1).getItem(i).getItemId()) || Packages.server.MapleItemInformationProvider.getInstance().isCash(cm.getInventory(1).getItem(i).getItemId())) {
                  if (itemId == Eq_item[select][0]) {
                     
                        itemID = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(i).copy();
                        var 目前升級次數 = StringTool.getIntFromString(itemID.getOwner());
                     if (Check_condition[select] && Check_condition[select][目前升級次數] && Check_condition[select][目前升級次數][0] != null) {
                        avail += "#L" + Math.abs(i) + "##i"+cm.getInventory(1).getItem(i).getItemId()+"#  #z" + cm.getInventory(1).getItem(i).getItemId() + "# 【#k目前升級次數為 #r"+目前升級次數+"#k 次】#l\r\n\r\n\r\n";
                        avail += "「#r#e本次升級條件#k#n」\r\n\r\n";
                        avail += "成功機率 : #b"+Check_condition[select][目前升級次數][0]+" #k  失敗機率 : #r"+Check_condition[select][目前升級次數][1]+" #k  爆裝機率 : #r"+Check_condition[select][目前升級次數][2]+" #k\r\n";
                        avail += "\r\n「#r#e本次升級成功獲得加成#k#n」\r\n\r\n";
                        avail += "力量 + #b"+Check_condition[select][目前升級次數][3]+" #k  敏捷 + #b"+Check_condition[select][目前升級次數][4]+" #k  智力 + #b"+Check_condition[select][目前升級次數][5]+" #k  幸運 + #b"+Check_condition[select][目前升級次數][6]+" #k\r\n";
                        avail += "物攻 + #b"+Check_condition[select][目前升級次數][7]+" #k  魔攻 + #b"+Check_condition[select][目前升級次數][8]+" #k\r\n";
                        avail += " \r\n「#r#e本次升級需求道具#k#n」\r\n\r\n";
                        if(UP_item[select][目前升級次數][0] != 0){
                              avail += "#i" + UP_item[select][目前升級次數][0] + "#  #z" + UP_item[select][目前升級次數][0] + "#  :  #b" + UP_item[select][目前升級次數][1] + " #k 個\r\n";
                        }if(UP_item[select][目前升級次數][2] != 0){
                              avail += "#i" + UP_item[select][目前升級次數][2] + "#  #z" + UP_item[select][目前升級次數][2] + "#  :  #b" + UP_item[select][目前升級次數][3] + " #k 個\r\n";
                        }if(UP_item[select][目前升級次數][4] != 0){
                              avail += "#i" + UP_item[select][目前升級次數][4] + "#  #z" + UP_item[select][目前升級次數][4] + "#  :  #b" + UP_item[select][目前升級次數][5] + " #k 個\r\n";
                        }if(UP_item[select][目前升級次數][6] != 0){
                              avail += "#i" + UP_item[select][目前升級次數][6] + "#  #z" + UP_item[select][目前升級次數][6] + "#  :  #b" + UP_item[select][目前升級次數][7] + " #k 個\r\n";
                        }if(UP_item[select][目前升級次數][8] != 0){
                              avail += "#i" + UP_item[select][目前升級次數][8] + "#  #z" + UP_item[select][目前升級次數][8] + "#  :  #b" + UP_item[select][目前升級次數][9] + " #k 個\r\n";
                        }if(UP_item[select][目前升級次數][10] != 0){
                              avail += "#i" + UP_item[select][目前升級次數][10] + "#  #z" + UP_item[select][目前升級次數][10] + "#  :  #b" + UP_item[select][目前升級次數][11] + " #k 個\r\n";
                        }
                        avail += "\r\n\r\n===================================================\r\n\r\n";
                     }
                  
                  }
               }
            }
        }if(avail == ""){
            avail += "#r很抱歉,您的裝備欄沒有任何符合標準的裝備哦!!~"; 
            cm.dispose();			 
         }
        cm.sendYesNo(msg + avail);
    } else if (status == 2) {
       startnum = selection;
		 item_指定 = cm.getInventory(1).getItem(startnum);
       目前升級次數 = StringTool.getIntFromString(item_指定.getOwner());
       目前成功機率 = Check_condition[select][目前升級次數][0];
       目前失敗機率 = Check_condition[select][目前升級次數][1];
       目前爆裝機率 = Check_condition[select][目前升級次數][2];
       var requirements = UP_item[select][目前升級次數];
       var missingItemsMsg = "你缺少以下道具：\r\n\r\n";
       var hasAllItems = true;
       for (var i = 0; i < requirements.length; i += 2) {
           var itemId = requirements[i];
           var itemCount = requirements[i + 1];
           if (itemId != 0 && !cm.haveItem(itemId, itemCount)) {
               var ownedQuantity = cm.getPlayer().getItemQuantity(itemId, false);
               hasAllItems = false;
               missingItemsMsg += "【 #i" + itemId + "# 】 #b#z" + itemId + "##k 需要: #b" + itemCount + "#k 擁有: #r" + ownedQuantity + "#k\r\n";
           }
       }

       if (!hasAllItems) {
           cm.sendOk(missingItemsMsg);
           cm.dispose();
           return;
       }
       if(ItemRandom < 目前成功機率 || cm.haveItem(成功道具, 1)){
         物品代碼 = item_指定.getItemId();
         力量增加 = Check_condition[select][目前升級次數][3];
         敏捷增加 = Check_condition[select][目前升級次數][4];
         智力增加 = Check_condition[select][目前升級次數][5];
         幸運增加 = Check_condition[select][目前升級次數][6];
         物攻增加 = Check_condition[select][目前升級次數][7];
         魔攻增加 = Check_condition[select][目前升級次數][8];
         for (var i = 0; i < requirements.length; i += 2) {
              var itemId = requirements[i];
              var itemCount = requirements[i + 1];
              cm.gainItem(itemId, -itemCount, true);
         }
		 
         cm.裝備升級專用方法(startnum, 力量增加, 敏捷增加, 智力增加, 幸運增加, 物攻增加, 魔攻增加);
         cm.裝備用廣播_指定位置(startnum, cm.getPlayer().getClient().getChannel(),"【"+name+"】" + cm.getPlayer().getName()+" : 升級裝備成功了，大家恭喜他吧！");
         if(cm.haveItem(成功道具, 1)){
			 cm.gainItem(成功道具, -1, true);
			cm.sendOk("使用了成功道具，透過神秘的力量讓本次升級直接成功！！");
		 }else{
			cm.sendOk("合成成功了！！恭喜您！！");
		 }
		 
         
         cm.safeDispose();
         return;
       }else{
         for (var i = 0; i < requirements.length; i += 2) {
              var itemId = requirements[i];
              var itemCount = requirements[i + 1];
              cm.gainItem(itemId, -itemCount, true);
         }
         if(ItemRandom < 目前爆裝機率){
            if(cm.haveItem(防爆道具, 1)){
               cm.sendOk("本次合成失敗了，但因為有防爆道具所以裝備沒有消失！！");
               cm.gainItem(防爆道具, -1, true);
               cm.safeDispose();
               return;
            }else{
               cm.processCommand("@清除道具 裝備 " + startnum + " " + startnum);
               cm.sendOk("本次合成失敗了，但您沒有#b　#i"+防爆道具+"#  #z" + 防爆道具 + "##k　裝備消失了");
               cm.safeDispose();
               return;
            }
         }else{
            cm.sendOk("本次合成失敗了，甚麼都沒有發生");
            cm.safeDispose();
            return;	
         } 
       }
       
        cm.dispose();
    }
}


