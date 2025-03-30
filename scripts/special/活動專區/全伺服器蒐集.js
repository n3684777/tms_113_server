var status = 0;

//道具 達標量 對應資料表
//設定好捐獻物後，請至資料庫中playcollect資料表，在對應的資料表排序新增道具。

//道具代碼 所需數量 資料表順序號
var 捐獻物 = [
    [4310110, 100000, 1], 
	[4310113, 100000, 2],  
];

//道具代碼 所需數量 資料表順序號
var getPlayCollect = [
    [4310110, 100000, 1], 
	[4310113, 100000, 2], 
];
//道具 數量
var 獎勵道具 = [
    [2450000, 1], 
	[2450001, 10], 
	[2450002, 2], 
	[2450004, 2], 
	[5220000, 1],
	[5220040, 1],
	[5220005, 5],
	[2022530, 5],
		
];

//前三名獎勵
var MVP_item = [
	//第一名
	[
		[5220000, 5, -1],
		[5220010, 5, -1],
	],
	//第二名
	[
		[5220000, 5, -1],
		[5220010, 5, -1],
	],
	//第三名
	[
		[5220000, 5, -1],
		[5220010, 5, -1],
	],
]

//設定前三名，
var MVP = Array(
	"111111111",
	"111111111",
	"111111111"
	);
	
var 第一名名稱 = "111111111";
var 第二名名稱 = "111111111";
var 第三名名稱 = "111111111";

var namelist =[
	["#r【第一屆捐獻大神】","#k"], 
	["「第一名」","暫無 共捐獻了#r 0 #k 個"], 
	["「第二名」","暫無 共捐獻了#r 0 #k 個"], 
	["「第三名」","暫無 共捐獻了#r 0 #k 個"], 
]
//1 = 開 0 = 關
var 是否開放領取 = 0;
var 領取記錄保存 = "第一屆富饒之都獎勵";
var 活動時間 = "第一屆富饒之都【06/28~07/17】";

function start() {  
    status = -1;  
    action(1, 0, 0);  
}  

function action(mode, type, selection) {  
var name = cm.getPlayer().getName();
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
			store = true;
            cm.sendSimple (
				 "#r[全服蒐集活動]#n#k "+活動時間+"\r\n一起來蒐集玩具！！" +
               "\r\n#L101#捐獻玩具" +
               "\r\n#L102#各玩具蒐集情況"+
               "\r\n#L103#完成獎勵"+
               "\r\n#L104#捐獻排行"+
               "\r\n#L105#歷史排行"+
               "\r\n#L106#領取獎勵");
        }else if (status == 1){	
			if (store) {
                switch (selection) {
                    case 101:
                        storeInfo = 捐獻物;
                        break;
                    case 102:
                        storeInfo = getPlayCollect;
                        break;
                    case 103:
                        storeInfo = 獎勵道具;
                        break;
                    case 104:
                        cm.showRank("捐獻道具");
                        cm.dropMsg(5,"[捐獻道具排行]排行最後更新時間:"+cm.showRankTime("捐獻道具"));
                        cm.dispose();
						return;
                        break;
					case 105:
						storeInfo = namelist;
                        var storeText = "";
						storeText += "歡迎查看歷史捐獻大神\r\n";
						for (var i = 0; i < storeInfo.length; ++i) {
							大神排行名次 = storeInfo[i][0];
							大神排行名稱 = storeInfo[i][1];
							storeText += ""+大神排行名次+""+大神排行名稱+"\r\n";
						}
						cm.sendOk(storeText);
						cm.dispose();
                        break;
					case 106:
						storeInfo = 獎勵道具;
						var canget = false;
							for(var i =0; i< MVP.length;i++){
								if(MVP[i].equals(name)){
									canget = true;		
									if(MVP[i] == 第一名名稱){
										var 排名 = 0;	
										var 名次 = "第一名";
									}if(MVP[i] == 第二名名稱){
										var 排名 = 1;	
										var 名次 = "第二名";
									}if(MVP[i] == 第三名名稱){
										var 排名 = 2;	
										var 名次 = "第三名";
									}
								}
							}
						if(是否開放領取 == 1){
							if (cm.getPlayer().getPrizeLog(領取記錄保存+name) >= 1) {
								cm.sendOk("您的帳號已經領取過#r【" + 領取記錄保存 + "】#k了喔！");
								cm.safeDispose();
								return;	
							}
							if(canget){
								
								var storeText = "";
								for (var i = 0; i < MVP_item[排名].length; ++i) {
									var ForItem = MVP_item[排名][i][0];
									var ForItemCost = MVP_item[排名][i][1];
									cm.gainItem(ForItem, ForItemCost);									
									storeText += "#t"+ForItem+"#  #k#i"+ForItem+"# "+ForItemCost+" 個\r\n\r\n";
								}for (var i = 0; i < storeInfo.length; ++i) {
									var ForItem2 = storeInfo[i][0];
									var ForItemCost2 = storeInfo[i][1];
									cm.gainItem(ForItem2, ForItemCost2);									
									storeText += "#t"+ForItem2+"#  #k#i"+ForItem2+"# "+ForItemCost2+" 個\r\n\r\n";
								}
								cm.sendOk("您好"+name+"恭喜您榮獲捐獻"+名次+"。\r\n現在請收下我為您準備的額外排名獎勵與其他豐厚獎勵。\r\n\r\n"+storeText);
								cm.getPlayer().setPrizeLog(領取記錄保存+name); //這邊是設定玩家帳號已領過記錄
								cm.dispose();	
							}else{
								var storeText = "";
								storeText += "恭喜您領取本次全伺服器蒐集道具\r\n\r\n";
								for (var i = 0; i < storeInfo.length; ++i) {
									var ForItem = storeInfo[i][0];
									var ForItemCost = storeInfo[i][1];
									cm.gainItem(ForItem, ForItemCost);									
									storeText += "#t"+ForItem+"#  #k#i"+ForItem+"# "+ForItemCost+" 個\r\n\r\n";
								}
								cm.getPlayer().setPrizeLog(領取記錄保存+name); //這邊是設定玩家帳號已領過記錄
								cm.sendOk(storeText);
								cm.dispose();							
							}
								
						}else{
							cm.sendOk("還未到活動結束時間，尚未開放領取。");
							cm.dispose();
						}
						
                        break;		
                    default:
                        storeInfo = [];
                }
				selection2 = selection;
				if (storeInfo.length == 0) {
                    cm.sendOk("這個商店不存在");
                    cm.dispose();
                    return;
                }
				if(selection2 == 101){
                var storeText = "";
				storeText += "您要捐獻那個玩具呢?\r\n";
                for (var i = 0; i < storeInfo.length; ++i) {
                    var PlayCollectItem = storeInfo[i][0];
                    storeText += "#L" + i + "##k#i"+PlayCollectItem+"#  #r#t"+PlayCollectItem+"#\r\n\r\n#l\r\n";
                }
                cm.sendSimple(storeText);
				}
				if (selection2 == 102){
					var storeText = "";
					storeText += "以下為目前玩具累計數量\r\n\r\n";
					for (var i = 0; i < storeInfo.length; ++i) {
                    var GetPlayCollectItem = storeInfo[i][0];
					var GetPlayCollectcost = storeInfo[i][1];
					var GetPlayCollectID = storeInfo[i][2];
					
                    storeText += "#r#t"+GetPlayCollectItem+"#  #k#i"+GetPlayCollectItem+"#  目前數量為 :  "+cm.getPlayCollect(GetPlayCollectID)+"  個\r\n\r\n#r玩具達標量#k :   "+GetPlayCollectcost+"  個\r\n\r\n";
                }
               cm.sendOk(storeText);
               cm.dispose();				
			}if (selection2 == 103){
				var storeText = "";
				storeText += "完成本次活動您可獲得以下獎勵\r\n\r\n";
				storeText += "#r【第一名額外獎勵】#k\r\n\r\n";
				for (var i = 0; i < MVP_item[0].length; ++i) {
					var ForItem2 = MVP_item[0][i][0];
					var ForItemCost2 = MVP_item[0][i][1];
								
					storeText += "#t"+ForItem2+"#  #k#i"+ForItem2+"# "+ForItemCost2+" 個\r\n\r\n";
				}
				storeText += "#r【第二名額外獎勵】#k\r\n\r\n";
				for (var i = 0; i < MVP_item[1].length; ++i) {
					var ForItem3 = MVP_item[1][i][0];
					var ForItemCost3 = MVP_item[1][i][1];
								
					storeText += "#t"+ForItem3+"#  #k#i"+ForItem3+"# "+ForItemCost3+" 個\r\n\r\n";
				}
				storeText += "#r【第三名額外獎勵】#k\r\n\r\n";
				for (var i = 0; i < MVP_item[2].length; ++i) {
					var ForItem4 = MVP_item[2][i][0];
					var ForItemCost4 = MVP_item[2][i][1];
								
					storeText += "#t"+ForItem4+"#  #k#i"+ForItem4+"# "+ForItemCost4+" 個\r\n\r\n";
				}
					
					storeText += "#r【全服玩家獎勵】#k\r\n\r\n";
					for (var i = 0; i < storeInfo.length; ++i) {
                    var ForItem = storeInfo[i][0];
					var ForItemCost = storeInfo[i][1];		
                    storeText += "#t"+ForItem+"#  #k#i"+ForItem+"# "+ForItemCost+" 個\r\n\r\n";
                }
				
                cm.sendOk(storeText);
				cm.dispose();
				}	
			} else {
					cm.sendOk("出現未知錯誤");
					cm.dispose();
				}
		} if (status == 2){
			selection3 = selection;
			if(selection2 == 101){
				cm.sendGetNumber("請輸入您要捐贈的數量", 1, 1, 10000);
			}
	} if (status == 3){
		if (selection <= 0 || selection > 10000) {
			cm.sendOk("您被偵測異常紀錄，使用過程已被紀錄Log！");
			cm.worldMessage(5,"玩家『"+ cm.getPlayer().getName() +"』被偵測到使用異常軟體修改數據，請通知GM檢查");
			cm.GAMEPLAYERLOG("全伺服器蒐集異常", "使用異常軟體修改數據", 0, selection);
			cm.dispose();
			return;
		}
		 自訂數值 = selection;
		 PlayCollectItem = storeInfo[selection3][0];
		 PlayCollectId = storeInfo[selection3][2];
		  if (cm.haveItem(PlayCollectItem,自訂數值)){
               cm.gainItem(PlayCollectItem, -自訂數值);
               cm.setPlayCollect(PlayCollectId,cm.getPlayCollect(PlayCollectId) + 自訂數值);
               cm.getPlayer().addCharInfoNum("捐獻道具",自訂數值);
               //cm.setPlayCollect2(自訂數值);
               cm.sendOk("您捐贈了#r "+自訂數值+" #k個#r#t"+PlayCollectItem+"##k\r\n"+
               "現在玩具總數來到#r "+cm.getPlayCollect(PlayCollectId)+"#k 個\r\n"+
               "謝謝您的捐贈！！！");
               cm.worldMessage(2,"[" + cm.getChannelServer().getServerName() + "] : " + "玩家 " + cm.getChar().getName() + " 在富饒之都活動捐贈了 "+自訂數值+" 個玩具！");
                cm.dispose();
            }else{
               cm.sendOk("你身上沒有該物");
                cm.dispose();
			}
		
		}
	}
}