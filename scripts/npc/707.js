/*
  小遊戲製作 v62 版本 卡納團隊編譯
*/

var txt1 = "#r一般怪物包";
var txt2 = "#r高階怪物包";
var txt3 = "#r魔王級怪物包";
var txt4 = "#r至尊級怪物包";
var txt5 = "#r歡樂怪物包";


var A = 4310098;//銀箱 - 一般
var B = 4310099;//紅箱 - 高階
var C = 4310100;//黑箱 - 魔王
var D = 4310101;//金箱 - 至尊
var E = 4310102;//綠箱 - 歡樂

var mob1 = [[2100067, 1, A, txt1], [2100001, 1, A, txt1],[2100002, 1, A, txt1],
			[2100003, 1, A, txt1],[2100004, 1, A, txt1],[2100005, 1, A, txt1],
			[2100006, 1, A, txt1],[2100007, 1, A, txt1],[2100008, 1, A, txt1],
			[2100009, 1, A, txt1],[2100010, 1, A, txt1],[2102000, 1, A, txt1],
			[2102001, 1, A, txt1],[2102002, 1, A, txt1],[2102003, 1, A, txt1],
			[2102004, 1, A, txt1],[2102005, 1, A, txt1],[2102006, 1, A, txt1],
			[2102007, 1, A, txt1]];
			
var mob2 = [[2100011, 1, B, txt2],[2100012, 1, B, txt2],[2100013, 1, B, txt2],
			[2102008, 1, B, txt2],[2100015, 1, B, txt2],[2100033, 1, B, txt2],
			[2101001, 1, B, txt2],[2101004, 1, B, txt2],[2101039, 1, B, txt2],
			[2100054, 1, B, txt2],[2101003, 1, B, txt2],[2100041, 1, B, txt2],
			[2101000, 1, B, txt2],];
			
var mob3 = [[2100100, 1, C, txt3],[2100099, 1, C, txt3],[2100098, 1, C, txt3],
			[2100096, 1, C, txt3],[2100095, 1, C, txt3],[2100094, 1, C, txt3],
			[2100102, 1, C, txt3]];

var mob4 = [[2101024, 1, D, txt4]];

var mob5 = [[2101081, 1, E, txt5], [2101023, 1, E, txt5]];

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
		cm.sendSimple("嘿！你好像打獵打到了很多戰利品？享受快樂生活是我的信念。怎麼樣？只要有幾種道具，我就給你更換能玩小遊戲的道具。嗯。。。幫你甚麼好呢？\r\n#b#L0#製作小遊戲道具#l\r\n#b#L1#聽聽小遊戲的說明#l");	
	}if (status == 1){
		if (selection == 0){
			cm.sendSimple("請問想要做哪種小遊戲呢？？\r\n\r\n#b#L3#五子棋#l#k\r\n#b#L4#找碴#l#k");			
		}else if (selection == 1){
			cm.sendSimple("你要查找哪種小遊戲資訊呢？？\r\n\r\n#b#L5#五子棋#l#k\r\n#b#L6#找碴#l#k#l");
		}else if (selection == 2){
			store = true;
			cm.sendSimple("您想製作哪種階級的怪物包呢？？\r\n"+
						  "#b#L8#一般怪物包#l#k\r\n"+
						  "#b#L9#高階怪物包#l#k\r\n"+
						  "#b#L10#魔王級怪物包#l\r\n"+
						  "#b#L17#至尊級怪物包#l\r\n"+
						  "#b#L18#歡樂怪物包#l");
		}
	}if (status == 2){
		mySelection = selection;
		if (mySelection == 3 || mySelection == 4 || mySelection == 5 || mySelection == 6 || mySelection == 7){
		switch (mySelection){
			case 3 : if(cm.getMeso() > 10){
				cm.sendNext("請問您要製作五子棋嗎 ? 好的，請準備好材料。");
			}else{
				cm.sendOk("發生未知錯誤");
				cm.dispose();
			}break;
			case 4 : if(cm.haveItem(4030012,15)){
				cm.gainItem(4030012, -15);
				cm.gainItem(4080100 , 1);
				cm.sendOk("恭喜您完成製作了一個#t"+4080100+"#");
				cm.dispose();				
			}else{
				cm.sendOk("請準備好材料。 找碴需要 #b15#k 張#v4030012##t4030012# ！");
				cm.dispose();
			}break;
			case 5 : if(cm.getMeso() > 10){
				cm.sendOk("五子棋，可讓兩名玩家進行特殊對戰\r\n"+
				          "最先將棋子五顆同樣連線在一起即獲勝\r\n"+
						  "兌換方式請直接點選要兌換的棋盤即可得知");
						  cm.dispose();
			}else{
				cm.sendOk("發生未知錯誤");
				cm.dispose();
				}
			 break;
			 case 6 : if(cm.getMeso() > 10){
				cm.sendOk("找碴，可讓兩名玩家進入特殊對戰窗\r\n"+
						  "翻開相同牌組數最多者獲勝\r\n"+
						  "兌換需要#b15#k 張#v4030012##t4030012#");
						  cm.dispose();
			 }else{
				 cm.sendOk("發生未知錯誤");
				 cm.dispose();
			 }
			 break;
			 case 7 : if(cm.getMeso() > 10){
				cm.sendOk("#r怪物包兌換為卡納獨創系統#k\r\n"+
						  "玩家可在遊戲中擊殺怪物獲得\r\n"+
						  "銀、金、黑、紅、綠色怪物寶箱\r\n"+
						  "持有寶箱可兌換下列寶物。\r\n\r\n"+
						  "#v"+4310098+"# #r#t"+4310098+"##k   可兌換一系列  #r一般型怪物包\r\n\r\n"+
						  "#v"+4310099+"# #r#t"+4310099+"##k   可兌換一系列  #r高階怪物包\r\n\r\n"+
						  "#v"+4310100+"# #r#t"+4310100+"##k  可兌換一系列  #r魔王級怪物包\r\n\r\n"+
						  "#v"+4310101+"# #r#t"+4310101+"##k   可兌換一系列  #r至尊級怪物包\r\n\r\n"+
						  "#v"+4310102+"# #r#t"+4310102+"##k   可兌換一系列  #r歡樂怪物包");
						  cm.dispose();
			 }else{
				 cm.sendOk("發生未知錯誤");
				 cm.dispose();
			 }
			 break;
		}
			
	}else{ 
		switch (selection) {
                    case 8:
                        storeInfo = mob1;
                        break;
                    case 9:
                        storeInfo = mob2;
                        break;
                    case 10:
                        storeInfo = mob3;
                        break;
                    case 17:
                        storeInfo = mob4;
                        break;
                    case 18:
                        storeInfo = mob5;
                        break;
                    default:
                        storeInfo = [];
                }
                if (storeInfo.length == 0) {
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
		} 
		
	}else if (status == 3){
		if(mySelection == 3){
		cm.sendSimple("那麼，你想要做哪種形狀的五子棋呢？？\r\n#b#L11##t4080000##l#k\r\n#b#L12##t4080001##l#k\r\n#b#L13##t4080002##l#k\r\n#b#L14##t4080003##l#k\r\n#b#L15##t4080004##l#k\r\n#b#L16##t4080005##l#k");	
		}else if(store){
			purchaseId = storeInfo[selection][0];
			purchaseitem = storeInfo[selection][2];
			purchaseCost = storeInfo[selection][1];
			if(cm.haveItem(purchaseitem, purchaseCost)){
				cm.sendYesNo("您確定要兌換 #i" + purchaseId + "#  ?  \r\n兌換後您會剩餘的寶箱數目為 #r#e" + (cm.itemQuantity(purchaseitem) - purchaseCost) + " 個#t" + purchaseitem + "##k#n .");
			}else{
				cm.sendOk("您並沒有足夠的 #r#t" + purchaseitem + "#");
				cm.dispose();
			}
		}
	}if(status == 4){
		mySelection2 = selection;
	if(selection == 11 ||selection == 12 ||selection == 13 ||selection == 14 ||selection == 15 ||selection == 16){
		switch (mySelection2){
		case 11 : if (!cm.haveItem(4030000, 15) || !cm.haveItem(4030001, 15) || !cm.haveItem(4030009, 1)) {
				cm.sendOk("請準備好材料。 #t4080000#需要 #b15#k 個#t4030000#和#t4030001# 和 #b1#k 個 #t4030009# ！");
				cm.dispose();
			} else {
				cm.gainItem(4030000, -15);
				cm.gainItem(4030001, -15);
				cm.gainItem(4030009, -1);
				cm.gainItem(4080000, 1);
				cm.sendOk("恭喜製作完成#t4080000#。");
				cm.dispose();
			}
			break;
		case 12 : if (!cm.haveItem(4030000, 15) || !cm.haveItem(4030010, 15) || !cm.haveItem(4030009, 1)) {
				cm.sendOk("請準備好材料。 #t4080001#需要 #b15#k 個#t4030000#和#t4030010# 和 #b1#k 個 #t4030009# ！");
				cm.dispose();
			} else {
				cm.gainItem(4030000, -15);
				cm.gainItem(4030010, -15);
				cm.gainItem(4030009, -1);
				cm.gainItem(4080001, 1);
				cm.sendOk("恭喜製作完成#t4080001#。");
				cm.dispose();
			}break;
		
		case 13 : if (!cm.haveItem(4030000, 15) || !cm.haveItem(4030011, 15) || !cm.haveItem(4030009, 1)) {
				cm.sendOk("請準備好材料。 #t4080002#需要 #b15#k 個#t4030000#和#t4030011# 和 #b1#k 個 #t4030009# ！");
				cm.dispose();
			} else {
				cm.gainItem(4030000, -15);
				cm.gainItem(4030011, -15);
				cm.gainItem(4030009, -1);
				cm.gainItem(4080002, 1);
				cm.sendOk("恭喜製作完成#t4080002#。");
				cm.dispose();
			}break;
		
		case 14 : if (!cm.haveItem(4030010, 15) || !cm.haveItem(4030001, 15) || !cm.haveItem(4030009, 1)) {
				cm.sendOk("請準備好材料。 #t4080003#需要 #b15#k 個#t4030010#和#t4030001# 和 #b1#k 個 #t4030009# ！");
				cm.dispose();
			} else {
				cm.gainItem(4030010, -15);
				cm.gainItem(4030001, -15);
				cm.gainItem(4030009, -1);
				cm.gainItem(4080003, 1);
				cm.sendOk("恭喜製作完成#t4080003#。");
				cm.dispose();
			}break;
		
		case 15 : if (!cm.haveItem(4030011, 15) || !cm.haveItem(4030010, 15) || !cm.haveItem(4030009, 1)) {
				cm.sendOk("請準備好材料。 #t4080004#需要 #b15#k 個#t4030011#和#t4030010# 和 #b1#k 個 #t4030009# ！");
				cm.dispose();
			} else {
				cm.gainItem(4030011, -15);
				cm.gainItem(4030010, -15);
				cm.gainItem(4030009, -1);
				cm.gainItem(4030004, 1);
				cm.sendOk("恭喜製作完成#t4080004#。");
				cm.dispose();
			}break;
		
		case 16 : if (!cm.haveItem(4030011, 15) || !cm.haveItem(4030001, 15) || !cm.haveItem(4030009, 1)) {
				cm.sendOk("請準備好材料。 #t4080005#需要 #b15#k 個#t4030011#和#t4030001# 和 #b1#k 個 #t4030009# ！");
				cm.dispose();
			} else {
				cm.gainItem(4030011, -15);
				cm.gainItem(4030001, -15);
				cm.gainItem(4030009, -1);
				cm.gainItem(4080005, 1);
				cm.sendOk("恭喜製作完成#t4080005#。");
				cm.dispose();
			}break;
			}				
		}else {
            if (store) {
                if (cm.haveItem(purchaseitem, purchaseCost)) {
                    cm.gainItem(purchaseitem, -purchaseCost);
                    cm.gainItem(purchaseId);
                    cm.sendOk("恭喜，這是您的新道具");
                    cm.dispose();
                }
            } else {
                cm.sendOk("發生未知錯誤");
				cm.dispose();
				}
			}
			
		}
	}			









