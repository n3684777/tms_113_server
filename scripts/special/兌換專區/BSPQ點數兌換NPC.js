importPackage(Packages.constants);
var status = -1, sel = -1, quest = 150001, bspoint = 0;
var debug = false;
var 返回 = false;
var 腳本路徑 = "兌換專區/BSPQ點數兌換NPC";
var item = [
	//道具代碼 獲得數量 天數 四屬 物魔攻 所需點數
		[1032035, 1, -1, 50, 50,100000],
		[1032042, 1, -1, 50, 50,100000],
		[5220000, 1, -1, 0, 0,100000],
];

function start() {
	action(1, 0, 0);
}

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

	var record = cm.getQuestRecord(quest);
	bspoint = record.getCustomData() == null ? 0 : parseInt(record.getCustomData());

	if (status == 0) {
		var msg = "";
		for (var v = 0; v < item.length; v++) {
			msg += "#b#L"+v+"# #v" + item[v][0] + "#  - #t" + item[v][0] + "##l\r\n\r\n\r\n#b"+
					(item[v][3] > 0 ? ("#k< ４屬增加 #b" + item[v][3] + " >") : "") +
					(item[v][4] > 0 ? ("#k< 魔物攻增加 #b" + item[v][4] + " >") : "") +
				   "\r\n\r\n#k需要 #b"+item[v][5]+" #k 點BSPQ點數"+
				   "\r\n=============================================\r\n\r\n";
		}
		cm.sendSimple("您目前擁有的財神爺副本點數為: " + bspoint + " 點\r\n\r\n " + msg);
	} else if (status == 1) {
		sel = selection;
		var msg = "請輸入想要兌換的數量";
		if (GameConstants.isEquip(item[sel][0])) {
			cm.sendGetNumber(msg, 1, 1, 1);
		} else {
			cm.sendGetNumber(msg, 1, 1, 5000);
		}
	} else if (status == 2) {
		count = selection;
		if (count <= 0 || count > 5000) {
			cm.sendOk("您被偵測異常紀錄，使用過程已被紀錄Log！");
			cm.worldMessage(5,"玩家『"+ cm.getPlayer().getName() +"』被偵測到使用異常軟體修改數據，請通知GM檢查");
			cm.GAMEPLAYERLOG("BSPQ點數兌換異常", "使用異常軟體修改數據", 0, selection);
			cm.dispose();
			return;
		}
		if (bspoint < item[sel][5] * count) {
			cm.sendNext("需要 #b" + (item[sel][5] * count) + "#k BSPQ　點數才可以兌換。\r\n\r\n您目前只有 #r" + bspoint + "#k 點數");
			返回 = true;
		}else{
			if (!cm.canHold(item[sel][0], item[sel][1] * count)) {
				cm.sendNext("您的物品欄空間不足哦！");
				返回 = true;
			}else{
				cm.sendYesNo("您確定要兌換 #v" + item[sel][0] + "# #t" + item[sel][0] + "# x" + (item[sel][1] * count) + "個嗎？\r\n\r\n需要#r " + (item[sel][5] * count) + " #kBSPQ 點數#k");
			}
		}
	} else if (status == 3) {
		if(返回){
			cm.dispose();
			cm.openNpc(9010000, 腳本路徑);
			return;
		}else{
			record.setCustomData(bspoint - (item[sel][5] * count));
			四屬數值 = item[sel][3];
			魔物攻數值 = item[sel][4];
			道具天數 = item[sel][2];
			if(item[sel][3] > 0){
				cm.gainItem(item[sel][0], item[sel][1],四屬數值 ,四屬數值 ,四屬數值 ,四屬數值 , 0, 0, 魔物攻數值, 魔物攻數值, 0, 0, 0, 0, 0, 0, 道具天數); 

			}else{
				cm.gainItem(item[sel][0], (item[sel][1] * count));
			}
				bspoint = record.getCustomData() == null ? 0 : parseInt(record.getCustomData());
				cm.sendNext("恭喜您兌換成功 #v" + item[sel][0] + "# #t" + item[sel][0] + "# \r\n目前您剩餘點數量為: " + bspoint);
		}
		
	} else if (status == 4) {
		cm.dispose();
		cm.openNpc(9010000, 腳本路徑);
		return;
	}
}