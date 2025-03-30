/* global cm */
/*

1.找到資料表中的 joinplay
2.邀請人 請填入 joinplay
3.被邀請人 請填入 join_joinplay

*/
importPackage(Packages.handling.world.accountlog); // EventLog
var status, str, select, list;
var ttext = "";
var 返回 = false;
var 腳本路徑 = "系統/邀請系統";
var 上頁路徑 = "聚合功能";
var 邀請人數計算 = 0;
var 玩家領獎次數計算 = 0;
//設定可以領取幾次，邀請1個人1次，設定5則是邀請5個人能領取5次
var 總領獎次數 = 5;

//以下請勿更動
var 被邀請人 = "";
var k = "";
var 我被誰邀請了 = "";
var 我被誰邀請了確認 = 0;

//這裡設定log的名稱 判定是否已領過
var log = "邀請系統獎勵";
var log2 = "被邀請人領獎獎勵";

//設定開放等級
var level = 10;
//設定獎勵
var prize = [
	[2450000, 1, -1],
];

// 設定獎勵 (被邀請人獎勵)
var inviteePrize = [
    [4001126, 10, -1],
    [4001127, 10, -1],
    [4001128, 10, -1],
    [4001129, 10, -1],
    [4001130, 10, -1],
];

// 點數設定   [第一格GASH填1 楓葉點數填2,第二格填數量 不發填0]
var point = [2, 200];
var inviteePoint = [1, 100];

// 獲得楓幣
var meso = 20000;
var inviteeMeso = 10000;


function start() {
	var name = cm.getPlayer().getName();
	var 帳號ID = cm.getPlayer().getClient().getAccID();	
	var conn = cm.getConnection();
        //sql語法
		//資料表要有joinplay
        var ps = conn.prepareStatement("SELECT * FROM joinplay WHERE joinplay = ?"); 
		ps.setString(1, name);
		var RankDataBase = ps.executeQuery();
        while (RankDataBase.next()) {
         //取得需要的欄位
        //被邀請人 = RankDataBase.getString("join_joinplay");
        邀請人數計算++;
                    
        }
        RankDataBase.close();
        ps.close();
	玩家領獎次數計算 = cm.getEventLogValue(EventLogType.ACCOUNT, log);	
	
	var conn = cm.getConnection();
        //sql語法
		//資料表要有joinplay
        var ps = conn.prepareStatement("SELECT * FROM joinplay WHERE join_joinplay = ?"); 
		ps.setString(1, name);
		var RankDataBase = ps.executeQuery();
		while (RankDataBase.next()) {
        我被誰邀請了 = RankDataBase.getString("joinplay");
		我被誰邀請了確認++;
		}
        RankDataBase.close();
        ps.close();	
		
		
    str = "";
	status = -1;
    select = -1;
	str += "=============#e歡迎使用邀請系統#n=============\r\n\r\n";
	str += "只要成功邀請朋友來玩，並通過管理員審核，即可在此領到獎勵哦！#b每邀請一個人可領取一次，共可領取#r「"+總領獎次數+"」#k次。\r\n\r\n";
    str += "\r\n您目前已經邀請了#r「"+邀請人數計算+"」#k位朋友\r\n";
	str += "\r\n您已經領取獎勵#r「"+ 玩家領獎次數計算+ "」#k次\r\n";
	str += "\r\n還能夠再領取#b「"+ (總領獎次數 - 玩家領獎次數計算) + "」#k次獎品\r\n";
	if(我被誰邀請了確認 == 1){
		str += "\r\n您是被 #b「"+ 我被誰邀請了 + "」#k邀請的！！\r\n";
	}
	str += "\r\n\r\n#b#L1#查看獎勵#l";
	str += "\r\n\r\n#b#L2#查看成功邀請名單#l";
    str += "\r\n\r\n#b#L3#我想要領獎( 邀請人 )#l";
	if(我被誰邀請了確認 == 1 && cm.getPlayer().getPrizeLog(log2) < 1){
	str += "\r\n\r\n#b#L4#我想要領獎( 被邀請 )#l";
	}
	str += "\r\n\r\n#b#L99#返回上頁#l";
    cm.sendSimple(str);
}

function action(mode, type, selection) {

    var name = cm.getPlayer().getName();
    if (mode == 1) {
        status++;
    } else {
        status--;
        cm.dispose();
        return;
    }
    switch (status) {
		
        case 0:
            str = selection;
            if (str == 1) {
            var choice = "#d您好冒險者\r\n\r\n【 以下為#b邀請人#d獎勵內容 】#b \r\n\r\n";
				for (var i = 0; i < prize.length; i++)
					choice += "【 #i" + prize[i][0] + "# 】 #t" + prize[i][0] + "# " + prize[i][1] + " 個" + (prize[i][2] > 0 ? ("  期限 #r#e" + prize[i][2] + "#n#b天") : "") + "\r\n";
					choice += "\r\n\r\n";
				if (point[1] > 0) {
					choice += point[0] == 1 ? "Gash點數 " : "楓葉點數 " + point[1] + " 點\r\n";
				}if (meso > 0) {
					choice += "獲得楓幣 "+meso+" 元\r\n\r\n";
				}
				
				choice += "#d【 以下為#b被邀請人#d獎勵內容 】#b\r\n\r\n";
				for (var i = 0; i < inviteePrize.length; i++)
					choice += "【 #i" + inviteePrize[i][0] + "# 】 #t" + inviteePrize[i][0] + "# " + inviteePrize[i][1] + " 個" + (inviteePrize[i][2] > 0 ? ("  期限 #r#e" + inviteePrize[i][2] + "#n#b天") : "") + "\r\n";
					choice += "\r\n\r\n";
				if (inviteePoint[1] > 0) {
					choice += inviteePoint[0] == 1 ? "Gash點數 " : "楓葉點數 " + inviteePoint[1] + " 點\r\n";
				}if (inviteeMeso > 0) {
					choice += "獲得楓幣 "+inviteeMeso+" 元\r\n\r\n";
				}
							
				choice += "(#r請注意!!背包請確保有空位領取，被吃無法補償!)\r\n";
				cm.sendOk(choice);
			}
            
			if (str == 2) {
			var conn = cm.getConnection();
			var choice = "#d您好冒險者，您成功邀請的玩家名單如下：#b\r\n\r\n";
				//sql語法
				var ps = conn.prepareStatement("SELECT * FROM joinplay WHERE joinplay = ?"); 
				ps.setString(1, name);
				var RankDataBase = ps.executeQuery();
				while (RankDataBase.next()) {
				 //取得需要的欄位
				被邀請人 = RankDataBase.getString("join_joinplay");
				choice += ""+被邀請人+"\r\n";
				邀請人數計算++;
							
				  }
				RankDataBase.close();
				ps.close();	
				
				cm.sendOk(choice);
			}
			if (str == 3) {
				if(邀請人數計算 > 0 && 玩家領獎次數計算 < 6 && 邀請人數計算 > 玩家領獎次數計算){
					var choice = "請問您確定要領獎嗎？\r\n\r\n";
					choice += "目前您還剩下#r「"+ (總領獎次數 - 玩家領獎次數計算) +"」#k次的領獎次數\r\n";
					choice += "領取後將剩餘#b「"+ (總領獎次數 - 玩家領獎次數計算 - 1) +"」#k次的領獎次數\r\n";
					cm.sendYesNo(choice);
				}else{
					cm.sendOk("您的領獎次數已滿或邀請人數不足");
					返回 = true;
					
				}
				
			}
			if (str == 4) {
				if(cm.getPlayer().getPrizeLog(log2) < 1){
					cm.sendOk("領取成功！！恭喜您！！歡迎加入我們！！");
					for (var i = 0; i < inviteePrize.length; i++) {
						cm.gainItem(inviteePrize[i][0], inviteePrize[i][1], inviteePrize[i][2]);
					}
					if (inviteePoint[1] > 0) {
						cm.getPlayer().modifyCSPoints(inviteePoint[0], inviteePoint[1], true); 
					}
					if (inviteeMeso > 0) {
						cm.gainMeso(inviteeMeso);
					}
					cm.getPlayer().setPrizeLog(log2); //這邊是設定玩家帳號已領過記錄
					//cm.worldMessage("【邀請系統】" + cm.getName() + " 領取了" + log2 + "，讓我們歡迎他的加入！");
				}else{
					cm.sendOk("您已經領取過了哦！！");
				}
				
			}
			if (str == 99) {
				cm.dispose();
				cm.openNpc(9010000, 上頁路徑);
				return;
			}
			break;
        case 1:
            switch (str) {
				case 1:
				cm.dispose();
				cm.openNpc(9010000, 腳本路徑);
				return;
				break;
				case 2:
				cm.dispose();
				cm.openNpc(9010000, 腳本路徑);
				return;
				break;
                case 3:
					if(返回){
						cm.dispose();
						cm.openNpc(9010000, 腳本路徑);
						return;
					}else{
						cm.sendOk("領取成功！！恭喜您！！記得好好帶帶朋友哦！！");
						for (var i = 0; i < prize.length; i++) {
							cm.gainItem(prize[i][0], prize[i][1], prize[i][2]);
						}
						if (point[1] > 0) {
							cm.getPlayer().modifyCSPoints(point[0], point[1], true); 
						}
						if (meso > 0) {
							cm.gainMeso(meso);
						}
						cm.getPlayer().setPrizeLog(log); //這邊是設定玩家帳號已領過記錄
						cm.worldMessage("【邀請系統】" + cm.getName() + " 領取了" + log + "，他一共邀請了「"+邀請人數計算+"」位玩家！！讓我們謝謝他的付出！");
					}
                    break;
                default:
                    cm.dispose();
					cm.openNpc(9010000, 腳本路徑);
					return;
            }
            break;
        case 2:
			cm.dispose();
			cm.openNpc(9010000, 腳本路徑);
			return;
		break;
        
    }
}