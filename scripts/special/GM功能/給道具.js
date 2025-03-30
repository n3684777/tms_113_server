var status = -1;
var playerNames = [];
var 贊助滿額數 = 30000;

var 獎勵類型 = [

		//範例
		[
		// 道具代碼 數量 天數 四屬 物攻 魔攻 是否有額外給屬性( 0 = 無 1 = 是。填寫 1 才會強制更改裝備屬性) 紀錄log
			[4000015, 1, -1, 50, 50, 50, 0,"事前登入"],
			[4000015, 1, -1, 50, 50, 50, 0,"事前登入"],
			[4000015, 1, -1, 30, 30, 30, 0,"事前登入"],
			[4000015, 1, -1, 30, 30, 30, 0,"事前登入"],
			[4000015, 1, -1, 30, 30, 30, 0,"事前登入"],
			[4000015, 1, -1, 30, 30, 30, 0,"事前登入"],
		],
		
		//贊助獎勵
		[
			[1022033, 1, -1, 5, 3, 5, 1,"贊助滿額#r "+贊助滿額數+" #k元_"],
			[5220020, 20, -1, 50, 50, 50, 0,"贊助滿額#r "+贊助滿額數+" #k元_"],
			[5220000, 30, -1, 30, 30, 30, 0,"贊助滿額#r "+贊助滿額數+" #k元_"],
			[2022530, 20, -1, 30, 30, 30, 0,"贊助滿額#r "+贊助滿額數+" #k元_"],
			[2450018, 25, -1, 30, 30, 30, 0,"贊助滿額#r "+贊助滿額數+" #k元_"],
			[2450002, 8, -1, 30, 30, 30, 0,"贊助滿額#r "+贊助滿額數+" #k元_"],
		],
		
		
];


function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else if (mode == 0) {
		status--;
	} else {
		cm.dispose();
		return;
	}
	
	if (status == 0) {
		if(cm.getPlayer().getJobId() != 900){
			cm.sendOk("歡迎您，普通玩家，您不是GM無法使用此功能");
			cm.dispose();
			return;
		}
		cm.sendGetText("請先輸入玩家名稱，請確保不要打錯以及玩家在線上");
	} else if (status == 1) {
		玩家名稱 = cm.getText();
		var msg = "";
		msg += "請問想要給什麼獎勵\r\n\r\n";
		msg +=  "#L0#事前登入#l\r\n"; 
		msg +=  "#L1#3萬的贊助#l\r\n"; 
		cm.sendSimple(msg);
		
	}else if (status == 2) {
		選擇類型 = selection;
		var requiredItems = 獎勵類型[選擇類型];
		    for (var i = 0; i < requiredItems.length; i++) {
				var itemId = requiredItems[i][0];
				var itemQuantity = requiredItems[i][1];
				var 時間 = requiredItems[i][2];
				var 四屬性 = requiredItems[i][3];
				var 物攻 = requiredItems[i][4];
				var 魔攻 = requiredItems[i][5];
				var 類型 = requiredItems[i][6];
				var 紀錄log = requiredItems[i][7];
				if(類型 > 0){
					cm.processCommand("!給道具屬性 " + 玩家名稱 + " "  + itemId + " "  + itemQuantity + " "  + 四屬性 + " "  + 物攻 + " "  + 魔攻 + " "  + 時間);
				}else{
					cm.processCommand("!給道具 " + 玩家名稱 + " "  + itemId + " "  + itemQuantity);
				}
				
			}
		var playerID = Packages.client.MapleCharacter.getCharacterByName(玩家名稱);
			playerID.setPrizeLog(紀錄log);	
		cm.dispose();
	}
}
