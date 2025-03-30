var ids = [5220010,2022179,2022243,2022244,
2022242,2022240,5220020,5220000,4031365,2030000,2030000,
2022245,2022048];
var Quantity = [1,2,3,4,5,6,7,8,2,3,4,5,2,3,4,5,2,3,4,5,2,3,4,5];
var status = 0;
//meso max2,147,483,647
var item = 4031579;

//一周獎品
var 獎品一 =3018007;
var 獎品一數量 =1;

var 獎品二 =5220020;
var 獎品二數量 =3;

var 金幣一 =6666666;

//var belts = Array(1132000, 1132001, 1132002, 1132003, 1132004);
//var belt_level = Array(25, 35, 45, 60, 75);
//var belt_points = Array(200, 1800, 4000, 9200, 17000);

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
            cm.sendSimple (
				 "#e#r[每日獎勵]#n#k只要來找我就可以拿到每日小獎勵一份喔!#e" +
                 "#k\r\n#L1#我要領取每日小獎勵!!!" +
                 "\r\n#L3##k使用" + "#r#z" + item + "#*2#k抽獎一次" );
				 //"\r\n#L2##k參與特別活動#r(最終獎勵)#k\r\n      獲得#r#z " + 獎品一 + " #、黃金轉蛋、 " + 金幣一 + " #k"
        } else if (selection == 1) { 
			if ((cm.getBossLog('VIPDAY2') < 1) && (cm.getMeso() <= (2147483647 - 5000000))) {
				var mesogain = Math.floor(Math.random() * 1000001) //0~5000000
				cm.gainItem(item, 1);
				cm.gainMeso(mesogain);
				cm.setBossLog("VIPDAY2");				
				cm.sendOk("您獲得了#i"+ item +"#，加贈\r\n" + "楓幣" + mesogain + "元");
			} else {
				cm.sendOk("你今天已經領過了");
			}
			cm.dispose();
		}/* else if (selection == 2) { 
            if(cm.haveItem(4032041,200) && cm.haveItem(3991026,1) && cm.haveItem(3991034,1) && cm.haveItem(3991028,1) && cm.haveItem(3991037,1)&&  cm.getPlayer().getLevel() >= 40){
			cm.gainItem(4032041, -200);
			cm.gainItem(3991026, -1);
			cm.gainItem(3991034, -1);
			cm.gainItem(3991028, -1);
			cm.gainItem(3991037, -1);
			cm.gainItem(獎品一, 獎品一數量);
			cm.gainItem(獎品二, 獎品二數量);
			cm.gainMeso(金幣一);
			cm.sendOk("恭喜您領取了本日獎品喔~"); 
            cm.dispose(); 
			}else{
			cm.sendOk(
			"【活動說明】\r\n"+
			"一週七天的活動開始囉~除了每天不同獎項外，還可蒐集到特殊「AICL」字樣"+
			"蒐集物將會在最後一天開放兌換~\r\n\r\n"+
			"【本日領取條件如下】\r\n"+
			"等級需為 : #r40 級#k\r\n\r\n"+
			"道具需求 :#v " + 4032041 + " #  #z " + 4032041 + " #   #r200 個#k\r\n\r\n"+
			"#r本日需尚未領取"); 
            cm.dispose();	
			}
        }*/ else if (selection == 3) {
        	if (cm.haveItem(item, 2)) {
				cm.gainItem(item,-2);
				var gift = Math.floor(Math.random() * ids.length);
				var gifts = Math.floor(Math.random() * Quantity.length);
				cm.gainItem(ids[gift],gifts);
				cm.sendOk("恭喜你獲得了　#i" + ids[gift] + "#　"+ gifts +"個！！");
        	} else {
        		cm.sendOk("你尚未蒐集到足夠的#i" + item + "#");
        	}
        	cm.dispose();
        }
    }
}