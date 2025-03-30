var status = -1;

var sel, select;
var 腳本名稱 = "xxxxxx";
var 本腳本消耗類型 = 1; // 1 = 用累積贊助 、 2 = 用紅利 、 3 = 用點數 、 4 = 用楓幣 、 5 = 用道具 、 6 = 用楓葉點數 
var 是否一次全部領取 = 0; //1 = 全部領取、0 = 單一品項領取

var 累積贊助兌換Log = "累積贊助兌換紀錄";//如想讓每個玩家再領一次，請更換這邊的說明

var 設定消耗道具 = 2340000;//消耗類型是 5 時才需使用
var 設定消耗道具一次領取消耗數量 = 99;//消耗類型是 5 時並且是一次領取才需使用
var items = [
	//獲得道具代碼,獲得道具數量,消耗道具代碼,消耗道具數量, 四屬, 魔物攻,天數(-1為永久)
    [
	[2022179, 1, 設定消耗道具, 40, 0, 0, -1],//紫色蘋果
	[2450000, 1, 設定消耗道具, 40, 0, 0, -1],
    ]
];

var 設定點一次領取消耗數量 = 500;//消耗類型是 1、2、3、4、6 時並且是一次領取才需使用
var items_2 = [
	//獲得道具代碼,獲得道具數量,消耗點, 四屬, 魔物攻,天數(-1為永久)
    [
	[2022179, 1, 3, 0, 0, -1],//紫色蘋果
	[2450000, 1, 3, 0, 0, -1],
    ]
];  

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
		if(本腳本消耗類型 == 1 || 本腳本消耗類型 == 2 || 本腳本消耗類型 == 3 || 本腳本消耗類型 == 4 || 本腳本消耗類型 == 6){
			if(本腳本消耗類型 == 1){
			   使用類型名稱 = "累積贊助";
			   剩餘點數類型 = cm.getPlayer().getTotalMoney();
		   }if(本腳本消耗類型 == 2){
			   使用類型名稱 = "紅利";
			   剩餘點數類型 = cm.getPlayer().getDividend();
		   }if(本腳本消耗類型 == 3){
			   使用類型名稱 = "點數";
			   剩餘點數類型 = cm.getPlayer().getCSPoints(1);
		   }if(本腳本消耗類型 == 4){
			   使用類型名稱 = "楓幣";
			   剩餘點數類型 = cm.getPlayer().getMeso();
		   }if(本腳本消耗類型 == 6){
			   使用類型名稱 = "楓葉點數";
			   剩餘點數類型 = cm.getPlayer().getCSPoints(2);
		   }
			cm.sendSimple("您好，我是 #b"+腳本名稱+" #kNPC\r\n#k如果您有 #b" + 使用類型名稱 + " #k就可以找我兌換獎品\r\n\r\n"+
						  "目前您有#b "+剩餘點數類型+" #k點"+使用類型名稱+""+
						  "\r\n\r\n"+
						  "#fUI/UIWindow.img/QuestIcon/4/0#"+
						  "\r\n"+
						  "#L0#查看獎品#l"
			); 
		}if(本腳本消耗類型 == 5){
			cm.sendSimple("您好，我是 #b"+腳本名稱+" #kNPC\r\n#k請問您有  #i"+設定消耗道具+"# 嗎？"+
						  "\r\n可以來找我兌換很多優質獎品哦！！\r\n\r\n"+
						  "\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#"+
						  "\r\n"+
						  "#L0#查看獎品#l"
			); 
		}
        
    } else if (status == 1) {
        select = selection;
        chooseItem(selection);
    } else if (status == 2) {
        sel = selection;
        cm.sendOk("好的，現在將為您準備 #b"+腳本名稱+"#k 獎勵。");
    } else if (status == 3) {
        gainReward(select);
    }

}

function chooseItem(index) {
	if(本腳本消耗類型 == 1 || 本腳本消耗類型 == 2 || 本腳本消耗類型 == 3 || 本腳本消耗類型 == 4 || 本腳本消耗類型 == 6){	   
	   if(是否一次全部領取 == 0){
		var choice = "#b#e選項你想要換得項目#n#k";
			choice +="\r\n\r\n";
			choice +="\r\n";
			choice +="#fUI/UIWindow.img/QuestIcon/4/0#";
			choice +="\r\n\r\n\r\n";
		for (var i = 0; i < items_2[index].length; i++)
			choice += "#L" + i + "# #i" + items_2[index][i][0] + "#  #z" + items_2[index][i][0] + "# - #b#e" + items_2[index][i][1] + "#n#k 個#l\r\n\r\n\r\n"+
					  (items_2[index][i][3] || items_2[index][i][4] || items_2[index][i][5] > 0 ? ("#b「物品屬性」#k\r\n\r\n") : "")+
					  (items_2[index][i][3] > 0 ? ("#k四屬增加 " + items_2[index][i][3] + "  ") : "") +
					  (items_2[index][i][4] > 0 ? ("#k魔物攻增加 " + items_2[index][i][4] + " ") : "") +
					  (items_2[index][i][5] > 0 ? ("#k使用期限 " + items_2[index][i][5] + " 天") : "") +
					  "#b\r\n\r\n「所需"+使用類型名稱+"」#k"+
					  "#r#e" + items_2[index][i][2] + "#n#k 點"+使用類型名稱+""+
					  "#k\r\n\r\n=============================================\r\n\r\n#k";

		choice += "\r\n "
		cm.sendSimple(choice);
		}else{
		var choice = "只要擁有 \r\n\r\n< #b"+使用類型名稱+" - "+設定點一次領取消耗數量+" 點#k >  \r\n\r\n就能獲得以下道具\r\n\r\n#k";
			choice +="\r\n";
			choice +="#fUI/UIWindow.img/QuestIcon/4/0#";
			choice +="\r\n\r\n\r\n";
			for (var i = 0; i < items[index].length; i++)
			choice += "#i" + items[index][i][0] + "#  #z" + items[index][i][0] + "# - #b#e" + items[index][i][1] + "#n#k 個\r\n\r\n\r\n"+
					(items[index][i][4] || items[index][i][5] || items[index][i][6] > 0 ? ("#b「物品屬性」#k\r\n\r\n") : "")+
					(items[index][i][4] > 0 ? ("#k四屬增加 " + items[index][i][4] + "  ") : "") +
					(items[index][i][5] > 0 ? ("#k魔物攻增加 " + items[index][i][5] + " ") : "") +
					(items[index][i][6] > 0 ? ("#k使用期限 " + items[index][i][6] + " 天") : "") +
					"#k\r\n\r\n=============================================\r\n\r\n#k";

		choice += "\r\n "
		choice += "#L0##r#e點選兌換#n#k#l"
		cm.sendSimple(choice);
			
		}
		
		
	
	}	
	if(本腳本消耗類型 == 5){
		if(是否一次全部領取 == 0){
		var choice = "#b#e選項你想要換得項目#n#k";
			choice +="\r\n\r\n";
			choice +="\r\n";
			choice +="#fUI/UIWindow.img/QuestIcon/4/0#";
			choice +="\r\n\r\n\r\n";
		for (var i = 0; i < items[index].length; i++)
			choice += "#L" + i + "# #i" + items[index][i][0] + "#  #z" + items[index][i][0] + "# - #b#e" + items[index][i][1] + "#n#k 個#l\r\n\r\n\r\n"+
					  (items[index][i][4] || items[index][i][5] || items[index][i][6] > 0 ? ("#b「物品屬性」#k\r\n\r\n") : "")+
					  (items[index][i][4] > 0 ? ("#k四屬增加 " + items[index][i][4] + "  ") : "") +
					  (items[index][i][5] > 0 ? ("#k魔物攻增加 " + items[index][i][5] + " ") : "") +
					  (items[index][i][6] > 0 ? ("#k使用期限 " + items[index][i][6] + " 天") : "") +
					  "#b\r\n\r\n「所需材料」#k"+
					  "#z" + items[index][i][2] + "# - #r#e" + items[index][i][3] + "#n#k 個"+
					  "#k\r\n\r\n=============================================\r\n\r\n#k";

		choice += "\r\n "
		cm.sendSimple(choice);
		}else{
		var choice = "只要擁有 \r\n\r\n< #b#z"+設定消耗道具+"# - "+設定消耗道具一次領取消耗數量+" 個#k >  \r\n\r\n就能獲得以下道具\r\n\r\n#k";
			choice +="\r\n";
			choice +="#fUI/UIWindow.img/QuestIcon/4/0#";
			choice +="\r\n\r\n\r\n";
			for (var i = 0; i < items[index].length; i++)
			choice += "#i" + items[index][i][0] + "#  #z" + items[index][i][0] + "# - #b#e" + items[index][i][1] + "#n#k 個\r\n\r\n\r\n"+
					(items[index][i][4] || items[index][i][5] || items[index][i][6] > 0 ? ("#b「物品屬性」#k\r\n\r\n") : "")+
					(items[index][i][4] > 0 ? ("#k四屬增加 " + items[index][i][4] + "  ") : "") +
					(items[index][i][5] > 0 ? ("#k魔物攻增加 " + items[index][i][5] + " ") : "") +
					(items[index][i][6] > 0 ? ("#k使用期限 " + items[index][i][6] + " 天") : "") +
					"#k\r\n\r\n=============================================\r\n\r\n#k";

		choice += "\r\n "
		choice += "#L0##r#e點選兌換#n#k#l"
		cm.sendSimple(choice);
			
		}
	}
}

function gainReward(index) {
	if(本腳本消耗類型 == 1){
	    獲得物品 = items_2[index][sel][0];
		獲得物品數量 = items_2[index][sel][1];
		消耗點 = items_2[index][sel][2];
		四屬數值 = items_2[index][sel][3];
		魔物攻值 = items_2[index][sel][4];
		天數 = items_2[index][sel][5];
		if(是否一次全部領取 == 0){
			if (剩餘點數類型 >= 消耗點) {
				if (cm.getPlayer().getPrizeLog(累積贊助兌換Log+獲得物品) >= 1) {
					cm.sendOk("您的帳號已經領取過了喔！");
					cm.safeDispose();
					return;
				}
				
				if (cm.canHold()) { 
					if(四屬數值 > 0 || 魔物攻值 > 0){
						cm.gainItem(獲得物品, 獲得物品數量, 四屬數值, 四屬數值, 四屬數值, 四屬數值, 0, 0, 魔物攻值, 魔物攻值, 0, 0, 0, 0, 0, 0, 天數); 	
					}else{
						cm.gainItem(獲得物品, 獲得物品數量, 天數);
					}
					cm.getPlayer().setPrizeLog(累積贊助兌換Log+獲得物品); //這邊是設定玩家帳號已領過記錄
					cm.sendOk("感謝您對我們的支持，獎勵已經發放囉~"); 
				} else {
					cm.sendOk("請確認是否有足夠的空間。");
				}
			} else {
				cm.sendOk("您的"+使用類型名稱+"不足，請確認你"+使用類型名稱+"足夠。");
			}
		}else{
			if (剩餘點數類型 >= 設定點一次領取消耗數量) {
				if (cm.getPlayer().getPrizeLog(累積贊助兌換Log) >= 1) {
					cm.sendOk("您的帳號已經領取過了喔！");
					cm.safeDispose();
					return;
				}				
				if (cm.canHold()) { 
				for (var i = 0; i < items_2[index].length; i++)
					if(items_2[index][i][3] > 0 || items_2[index][i][4] > 0){
						cm.gainItem(items_2[index][i][0], items_2[index][i][1], items_2[index][i][3], items_2[index][i][3], items_2[index][i][3], items_2[index][i][3], 0, 0, items_2[index][i][4], items_2[index][i][4], 0, 0, 0, 0, 0, 0, items_2[index][i][5]); 	
					}else{
						cm.gainItem(items_2[index][i][0], items_2[index][i][1], items_2[index][i][5]);
					}
					cm.getPlayer().setPrizeLog(累積贊助兌換Log); //這邊是設定玩家帳號已領過記錄
					cm.sendOk("感謝您對我們的支持，獎勵已經發放囉~"); 
				} else {
					cm.sendOk("請確認是否有足夠的空間。");
				}
			} else {
				cm.sendOk("您的"+使用類型名稱+"不足，請確認你"+使用類型名稱+"足夠。");
			}
			
		}
	}
	if(本腳本消耗類型 == 2 || 本腳本消耗類型 == 3 || 本腳本消耗類型 == 4 || 本腳本消耗類型 == 6){
        獲得物品 = items_2[index][sel][0];
		獲得物品數量 = items_2[index][sel][1];
		消耗點 = items_2[index][sel][2];
		四屬數值 = items_2[index][sel][3];
		魔物攻值 = items_2[index][sel][4];
		天數 = items_2[index][sel][5];
		if(是否一次全部領取 == 0){
			if (剩餘點數類型 >= 消耗點) {
				if (cm.canHold()) { 
					if(四屬數值 > 0 || 魔物攻值 > 0){
						cm.gainItem(獲得物品, 獲得物品數量, 四屬數值, 四屬數值, 四屬數值, 四屬數值, 0, 0, 魔物攻值, 魔物攻值, 0, 0, 0, 0, 0, 0, 天數); 	
					}else{
						cm.gainItem(獲得物品, 獲得物品數量, 天數);
					}
					if(本腳本消耗類型 == 2){cm.getPlayer().setDividend(- 消耗點);}
					if(本腳本消耗類型 == 3){cm.getPlayer().modifyCSPoints(1, -消耗點, true);}
					if(本腳本消耗類型 == 4){cm.gainMeso(-消耗點);}
					if(本腳本消耗類型 == 6){cm.getPlayer().modifyCSPoints(2, -消耗點, true);}
					
					cm.sendOk("感謝您對我們的支持，獎勵已經發放囉~"); 
				} else {
					cm.sendOk("請確認是否有足夠的空間。");
				}
			} else {
				cm.sendOk("您的"+使用類型名稱+"不足，請確認你"+使用類型名稱+"足夠。");
			}
		}else{
			if (剩餘點數類型 >= 設定點一次領取消耗數量) {
				if (cm.canHold()) { 
				for (var i = 0; i < items_2[index].length; i++)
					if(items_2[index][i][3] > 0 || items_2[index][i][4] > 0){
						cm.gainItem(items_2[index][i][0], items_2[index][i][1], items_2[index][i][3], items_2[index][i][3], items_2[index][i][3], items_2[index][i][3], 0, 0, items_2[index][i][4], items_2[index][i][4], 0, 0, 0, 0, 0, 0, items_2[index][i][5]); 	
					}else{
						cm.gainItem(items_2[index][i][0], items_2[index][i][1], items_2[index][i][5]);
					}
					if(本腳本消耗類型 == 2){cm.getPlayer().setDividend(- 設定點一次領取消耗數量);}
					if(本腳本消耗類型 == 3){cm.getPlayer().modifyCSPoints(1, -設定點一次領取消耗數量, true);}
					if(本腳本消耗類型 == 4){cm.gainMeso(-消耗點);}
					if(本腳本消耗類型 == 6){cm.getPlayer().modifyCSPoints(2, -設定點一次領取消耗數量, true);}
					cm.sendOk("感謝您對我們的支持，獎勵已經發放囉~"); 
				} else {
					cm.sendOk("請確認是否有足夠的空間。");
				}
			} else {
				cm.sendOk("您的"+使用類型名稱+"不足，請確認你"+使用類型名稱+"足夠。");
			}
			
		}
    }
	if(本腳本消耗類型 == 5){
		獲得物品 = items[index][sel][0];
		獲得物品數量 = items[index][sel][1];
		玩家身上消耗道具數量 = cm.getPlayer().itemQuantity(items[index][sel][2]);
		消耗道具 = items[index][sel][2];
		消耗道具數量 = items[index][sel][3];
		四屬數值 = items[index][sel][4];
		魔物攻值 = items[index][sel][5];
		天數 = items[index][sel][6];
		if(是否一次全部領取 == 0){
			if (玩家身上消耗道具數量 >= 消耗道具數量) {
				if (cm.canHold()) { 
					if(四屬數值 > 0 || 魔物攻值 > 0){
						cm.gainItem(獲得物品, 獲得物品數量, 四屬數值, 四屬數值, 四屬數值, 四屬數值, 0, 0, 魔物攻值, 魔物攻值, 0, 0, 0, 0, 0, 0, 天數); 	
					}else{
						cm.gainItem(獲得物品, 獲得物品數量, 天數);
					}   
					cm.gainItem(消耗道具, -消耗道具數量);
					cm.sendOk("感謝您對我們的支持，獎勵已經發放囉~"); 
				} else {
					cm.sendOk("請確認是否有足夠的空間。");
				}
			} else {
				cm.sendOk("您的兌換道具不足，請確認你道具足夠。");
			}
		}else{
			玩家身上消耗道具數量 = cm.getPlayer().itemQuantity(設定消耗道具);
			消耗道具 = 設定消耗道具;
			if (玩家身上消耗道具數量 >= 設定消耗道具一次領取消耗數量) {
				if (cm.canHold()) { 
				for (var i = 0; i < items[index].length; i++)
					if(items[index][i][4] > 0 || items[index][i][5] > 0){
						cm.gainItem(items[index][i][0], items[index][i][1], items[index][i][4], items[index][i][4], items[index][i][4], items[index][i][4], 0, 0, items[index][i][5], items[index][i][5], 0, 0, 0, 0, 0, 0, items[index][i][6]); 	
					}else{
						cm.gainItem(items[index][i][0], items[index][i][1], items[index][i][6]);
					}   
					cm.gainItem(消耗道具, -設定消耗道具一次領取消耗數量);
					cm.sendOk("感謝您對我們的支持，獎勵已經發放囉~"); 
				} else {
					cm.sendOk("請確認是否有足夠的空間。");
				}
			} else {
				cm.sendOk("您的兌換道具不足，請確認你道具足夠。");
			}
			
		}
	}
    cm.dispose();
}



