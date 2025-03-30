var status = 0;
var 返回 = false;
var 腳本路徑 = "兌換專區/贊點兌換";
var 兌換內容 = [
	// 兌換物代碼 兌換物數量 兌換贊助額度 兌換點數額度
	[4000001, 1, 100, 50], 
	[4000002, 1, 80, 40], 
];

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {           
			storeInfo = 兌換內容;
			var storeText = "以下為可兌換的內容物：\r\n\r\n";
			for (var i = 0; i < storeInfo.length; ++i) {
				var itemId = storeInfo[i][0];
				var itemQty = storeInfo[i][1];
				var sponsorPoints = storeInfo[i][2];
				var points = storeInfo[i][3];
				storeText += "#L" + i + "##r【 #i" + itemId + "# 】 #z" + itemId + "# " + itemQty + " 個#l" + 
					"\r\n\r\n"+
					"#k獲得內容 :"+
					"\r\n贊助額度: #b" + sponsorPoints +
					"    #k點數額度: #b" + points +
					"\r\n\r\n#k"+
					"#k==============================================\r\n\r\n";
			}
			cm.sendSimple(storeText);
				
		} else if (status == 1) {
			selection3 = selection;
			cm.sendGetNumber("您想兌換多少數量？", 1, 1, 5000);    			
		} else if (status == 2) {
			if (selection <= 0 || selection > 5000) {
				cm.sendOk("您被偵測異常紀錄，使用過程已被紀錄Log！");
				cm.worldMessage(5,"玩家『"+ cm.getPlayer().getName() +"』被偵測到使用異常軟體修改數據，請通知GM檢查");
				cm.GAMEPLAYERLOG("贊點兌換異常", "使用異常軟體修改數據", 0, selection);
				cm.dispose();
				return;
			}
			自訂數值 = selection;
			purchaseId = storeInfo[selection3][0];
			purchaseQty = storeInfo[selection3][1];
			purchaseSponsorPoints = storeInfo[selection3][2];
			purchasePoints = storeInfo[selection3][3];
			if (cm.haveItem(purchaseId, purchaseQty * 自訂數值)) {
				cm.sendYesNo("您確定要兌換#b【"+ 自訂數值*purchaseSponsorPoints +"】#k贊助點數和#b【"+ 自訂數值*purchasePoints +"】#k點數嗎？\r\n本次製作將消耗："+
					"\r\n\r\n"+
					"#z" + purchaseId + "# 【"+ purchaseQty*自訂數值 +"】個");
			} else {
				var missingQty = (purchaseQty * 自訂數值) - cm.getPlayer().getItemQuantity_check(purchaseId, false);
				cm.sendOk("您並沒有足夠的材料兌換。您還需要\r\n\r\n #b【 #i" + purchaseId + "# 】 " + missingQty + " 個 #z" + purchaseId + "#");
				返回 = true;
			}
		} else if (status == 3) {
			if(返回){
				cm.dispose();
				cm.openNpc(9010000, 腳本路徑);
				return;
			}else{
				cm.getPlayer().modifyCSPoints(1, purchasePoints*自訂數值, true);
				cm.getPlayer().setTotalMoney_2(purchaseSponsorPoints*自訂數值);
				cm.gainItem(purchaseId, -purchaseQty * 自訂數值);
				cm.sendOk("好的，您已成功兌換#r【"+ purchaseSponsorPoints*自訂數值+"】#k贊助額度和#r【"+ purchasePoints*自訂數值+"】#k點數");
			}
			
		} else if (status == 4) {
			cm.dispose();
			cm.openNpc(9010000, 腳本路徑);
			return;
		}			
	}
}
