/*
  小遊戲製作 v62 版本 卡納團隊編譯
*/

var txt1 = "#r管理員還不知道要換甚麼一號";
var txt2 = "#r管理員還不知道要換甚麼二號";
var txt3 = "#r管理員還不知道要換甚麼三號";
var txt4 = "#r管理員還不知道要換甚麼四號";
var txt5 = "#r管理員還不知道要換甚麼五號";


var A = 4001168;//黃金楓葉

var mob1 = [[4001168, 1, A, txt1], [4001168, 1, A, txt1]];
			
var mob2 = [[4001168, 1, A, txt2],[4001168, 1, A, txt2]];
			
var mob3 = [[4001168, 1, A, txt3],[4001168, 1, A, txt3]];

var mob4 = [[4001168, 1, A, txt4]];

var mob5 = [[4001168, 1, A, txt5], [4001168, 1, A, txt5]];

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode < 1) {
		cm.dispose();
		return;
	} else if (mode == 1) {
		status++;
	} else {
		status--;
	}
	if (status == 0) {
		cm.sendSimple("嘿！你好像打獵打到了很多戰利品？我是黃金楓葉兌換員。通過#r【BOSS挑戰】#k獲得的黃金楓葉可以跟我兌換寶物哦!!\r\n\r\n#b"+
					  "#L0#黃金楓葉兌換#l");	
	}if (status == 1){
		if (selection == 0){
			store = true;
			cm.sendSimple("您想製作哪種階級的怪物包呢？？\r\n"+
						  "#b#L1#"+txt1+"#l#k\r\n"+
						  "#b#L2#"+txt2+"#l#k\r\n"+
						  "#b#L3#"+txt3+"#l\r\n"+
						  "#b#L4#"+txt4+"#l\r\n"+
						  "#b#L5#"+txt5+"#l");
				}
		}if (status == 2){
		mySelection = selection;
		switch (mySelection){ 
                    case 1:
                        storeInfo = mob1;
                        break;
                    case 2:
                        storeInfo = mob2;
                        break;
                    case 3:
                        storeInfo = mob3;
                        break;
                    case 4:
                        storeInfo = mob4;
                        break;
                    case 5:
                        storeInfo = mob5;
                        break;
                    default:
                        storeInfo = [];
                }if (storeInfo.length == 0) {
                    cm.sendOk("這個商店不存在");
                    cm.dispose();
                    return;
                }
                var storeText = "";
                for (var i = 0; i < storeInfo.length; ++i) {
                    var wepId = storeInfo[i][0];
                    var cost = storeInfo[i][1];
					var item = storeInfo[i][2];
					var item2 = "#i" + item + "#";
					var txt = "您挑選了"+storeInfo[i][3]+"#k請選擇您要的項目\r\n";
                    storeText += "#L" + i + "##v" + wepId + "# - #z" + wepId + "#   需要  " + cost + "  個   " + item2 + " #l\r\n";
                }
                cm.sendSimple(""+txt+" " + storeText + "");
		
		
	}else if (status == 3){
			purchaseId = storeInfo[selection][0];
			purchaseitem = storeInfo[selection][2];
			purchaseCost = storeInfo[selection][1];
			if(cm.haveItem(purchaseitem, purchaseCost)){
				cm.sendYesNo("您確定要兌換 #i" + purchaseId + "#  ?  \r\n兌換後您會剩餘的寶箱數目為 #r#e" + (cm.itemQuantity(purchaseitem) - purchaseCost) + " 個#t" + purchaseitem + "##k#n .");
			}else{
				cm.sendOk("您並沒有足夠的 #r#t" + purchaseitem + "#");
				cm.dispose();
			}
		
	}if(status == 4){
				if (cm.haveItem(purchaseitem, purchaseCost)) {
                    cm.gainItem(purchaseitem, -purchaseCost);
                    cm.gainItem(purchaseId);
                    cm.sendOk("恭喜，這是您的新道具");
                    cm.dispose();
                }else {
                cm.sendOk("發生未知錯誤");
				cm.dispose();
				}
			}
			
		}
			









