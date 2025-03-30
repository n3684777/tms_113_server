var status = 0;

var 道具一 = 4031683;
var 道具一達標量 = 20000;
var 資料表ID1 = 1;

var 道具二 = 4031684;//小企鵝王的魚
var 道具二達標量 = 20000;
var 資料表ID2 = 2;

var 道具三 = 4031685;//紅螃蟹鉗
var 道具三達標量 = 20000;
var 資料表ID3 = 3;

var 道具四 = 4031686;//
var 道具四達標量 = 20000;
var 資料表ID4 = 4;

var 道具五 = 4031687;//
var 道具五達標量 = 20000;
var 資料表ID5 = 5;

var 道具六 = 4031688;//
var 道具六達標量 = 20000;
var 資料表ID6 = 6;

var 道具七 = 4031689;//
var 道具七達標量 = 20000;
var 資料表ID7 = 7;

var 道具八 = 4031690;//
var 道具八達標量 = 20000;
var 資料表ID8 = 8;

var 道具九 = 4031691;//
var 道具九達標量 = 20000;
var 資料表ID9 = 9;

var 道具十 = 4031692;//
var 道具十達標量 = 20000;
var 資料表ID10 = 10;

var 道具十一 = 4031701;//
var 道具十一達標量 = 20000;
var 資料表ID11 = 11;


var 獎品一 = 4031454; //聖盃
var 獎品一數量 = 200;

var 獎品二 = 4031408; //轉蛋圖章
var 獎品二數量 = 15;

var 獎品三 = 4031749; // 至尊轉蛋
var 獎品三數量 = 3;

var 獎品四 = 5440000; //楓葉點數
var 獎品四數量 = 5000;

var 獎品五 = 5000053;//大猩猩機器人
var 獎品五數量 = 1;

var 獎品六 = 4310102;//綠箱(歡樂)
var 獎品六數量 = 15;

var 獎品七 = 5570000;//黃金鐵鎚
var 獎品七數量 = 10;


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
				 "#e#r[全服蒐集活動]#n#k  一起來蒐集玩具！！#e" +
                 "#k\r\n#L1#捐獻玩具" +
                 "\r\n#L2#各玩具蒐集情況"+
				 "\r\n#L3#完成獎勵");
        } if (status == 1){
			if (selection == 1) { 
			cm.sendSimple (
				 "#e#b您要捐獻那個玩具呢？#e" +
                 "#k\r\n#L3##r#t"+道具一+"#  #k#i"+道具一+"#\r\n\r\n" +
                 "#k\r\n#L4##r#t"+道具二+"#  #k#i"+道具二+"#\r\n\r\n" +
				 "#k\r\n#L5##r#t"+道具三+"#  #k#i"+道具三+"#\r\n\r\n" +
				 "#k\r\n#L6##r#t"+道具四+"#  #k#i"+道具四+"#\r\n\r\n" +
				 "#k\r\n#L7##r#t"+道具五+"#  #k#i"+道具五+"#\r\n\r\n" +
				 "#k\r\n#L8##r#t"+道具六+"#  #k#i"+道具六+"#\r\n\r\n" +
				 "#k\r\n#L9##r#t"+道具七+"#  #k#i"+道具七+"#\r\n\r\n" +
				 "#k\r\n#L10##r#t"+道具八+"#  #k#i"+道具八+"#\r\n\r\n" +
				 "#k\r\n#L11##r#t"+道具九+"#  #k#i"+道具九+"#\r\n\r\n" +
				 "#k\r\n#L12##r#t"+道具十+"#  #k#i"+道具十+"#\r\n\r\n" +
				 "#k\r\n#L13##r#t"+道具十一+"#  #k#i"+道具十一+"#" 
				 );
			}else if (selection == 2){
				cm.sendOk (
				 "#e#k以下為目前玩具累計數量#e\r\n\r\n" +
                 "#k#r#t"+道具一+"#  #k#i"+道具一+"#  目前數量為 :  "+cm.getPlayCollect(資料表ID1)+"  個\r\n\r\n" +
				 "#k#r玩具達標量#k :   "+道具一達標量+"  個\r\n\r\n" +
				 
                 "#k#b#t"+道具二+"#  #k#i"+道具二+"#  目前數量為 :  "+cm.getPlayCollect(資料表ID2)+"  個\r\n\r\n" +
				 "#k#b玩具達標量#k :   "+道具二達標量+"  個\r\n\r\n" +
				 
				 "#k#r#t"+道具三+"#  #k#i"+道具三+"#  目前數量為 :  "+cm.getPlayCollect(資料表ID3)+"  個\r\n\r\n" +
				 "#k#r玩具達標量#k :   "+道具三達標量+"  個\r\n\r\n" +
				 
				 "#k#b#t"+道具四+"#  #k#i"+道具四+"#  目前數量為 :  "+cm.getPlayCollect(資料表ID4)+"  個\r\n\r\n" +
				 "#k#b玩具達標量#k :   "+道具四達標量+"  個\r\n\r\n" +
				 
				 "#k#r#t"+道具五+"#  #k#i"+道具五+"#  目前數量為 :  "+cm.getPlayCollect(資料表ID5)+"  個\r\n\r\n" +
				 "#k#r玩具達標量#k :   "+道具五達標量+"  個\r\n\r\n" +
				 
				 "#k#b#t"+道具六+"#  #k#i"+道具六+"#  目前數量為 :  "+cm.getPlayCollect(資料表ID6)+"  個\r\n\r\n" +
				 "#k#b玩具達標量#k :   "+道具六達標量+"  個\r\n\r\n" +
				 
				 "#k#r#t"+道具七+"#  #k#i"+道具七+"#  目前數量為 :  "+cm.getPlayCollect(資料表ID7)+"  個\r\n\r\n" +
				 "#k#r玩具達標量#k :   "+道具七達標量+"  個\r\n\r\n" +
				 
				 "#k#b#t"+道具八+"#  #k#i"+道具八+"#  目前數量為 :  "+cm.getPlayCollect(資料表ID8)+"  個\r\n\r\n" +
				 "#k#b玩具達標量#k :   "+道具八達標量+"  個\r\n\r\n" +
				 
				 "#k#r#t"+道具九+"#  #k#i"+道具九+"#  目前數量為 :  "+cm.getPlayCollect(資料表ID9)+"  個\r\n\r\n" +
				 "#k#r玩具達標量#k :   "+道具九達標量+"  個\r\n\r\n" +
				 
				 "#k#b#t"+道具十+"#  #k#i"+道具十+"#  目前數量為 :  "+cm.getPlayCollect(資料表ID10)+"  個\r\n\r\n" +
				 "#k#b玩具達標量#k :   "+道具十達標量+"  個\r\n\r\n" +
				 				 
				 "#k#r#t"+道具十一+"#  #k#i"+道具十一+"#  目前數量為 :  "+cm.getPlayCollect(資料表ID11)+"  個\r\n\r\n" +
				 "#k#r玩具達標量#k :   "+道具十一達標量+"  個\r\n\r\n" 
				 );cm.dispose();
				
			}else if (selection == 3){
				cm.sendOk (
				"完成本次活動您可獲得以下獎勵" +
				"\r\n\r\n"+"#r敬請期待#k"/*
				"#t"+獎品一+"#  #k#i"+獎品一+"# "+獎品一數量+" 個"+
				"\r\n\r\n"+
				"轉蛋圖章  #k#i"+獎品二+"# "+獎品二數量+" 個"+
				"\r\n\r\n"+
				"#t"+獎品三+"#  #k#i"+獎品三+"# "+獎品三數量+" 個"+
				"\r\n\r\n"+
				"#t"+獎品四+"#  #k#i"+獎品四+"# "+獎品四數量+" 點"+
				"\r\n\r\n"+
				"#t"+獎品五+"#  #k#i"+獎品五+"# "+獎品五數量+" 個"+
				"\r\n\r\n"+
				"#t"+獎品六+"#  #k#i"+獎品六+"# "+獎品六數量+" 個"+
				"\r\n\r\n"+
				"#t"+獎品七+"#  #k#i"+獎品七+"# "+獎品七數量+" 個"*/
				);cm.dispose();
			}
		} if (status == 2){
			mySelection = selection;
			if (mySelection == 3 || mySelection == 4 || mySelection == 5 || mySelection == 6 || mySelection == 7 || mySelection == 8 || mySelection == 9 || mySelection == 10 || mySelection == 11 || mySelection == 12 || mySelection == 13){
			switch (mySelection){
			case 3 : if(cm.haveItem(道具一,1)){
				兌換物 = 道具一;
				資料表ID = 資料表ID1;
				cm.sendGetNumber("請輸入您要捐贈的數量",1,1,1000000);				
			}else{
				cm.sendNext("您並沒有該玩具喔！！！");
				cm.dispose();
			}break;
			case 4 : if(cm.haveItem(道具二,1)){
				兌換物 = 道具二;
				資料表ID = 資料表ID2;
				cm.sendGetNumber("請輸入您要捐贈的數量",1,1,1000000);				
			}else{
				cm.sendNext("您並沒有該玩具喔！！！");
				cm.dispose();
			}break;
			case 5 : if(cm.haveItem(道具三,1)){
				兌換物 = 道具三;
				資料表ID = 資料表ID3;
				cm.sendGetNumber("請輸入您要捐贈的數量",1,1,1000000);
			}else{
				cm.sendNext("您並沒有該玩具喔！！！");
				cm.dispose();
				}
			 break;
			 case 6 : if(cm.haveItem(道具四,1)){
				兌換物 = 道具四;
				資料表ID = 資料表ID4;
				cm.sendGetNumber("請輸入您要捐贈的數量",1,1,1000000);
			 }else{
				 cm.sendNext("您並沒有該玩具喔！！！");
				 cm.dispose();
			 }
			 break;
			 case 7 : if(cm.haveItem(道具五,1)){
				兌換物 = 道具五;
				資料表ID = 資料表ID5;
				cm.sendGetNumber("請輸入您要捐贈的數量",1,1,1000000);
			 }else{
				 cm.sendNext("您並沒有該玩具喔！！！");
				 cm.dispose();
			 }
			 break;
			 case 8 : if(cm.haveItem(道具六,1)){
				兌換物 = 道具六;
				資料表ID = 資料表ID6;
				cm.sendGetNumber("請輸入您要捐贈的數量",1,1,1000000);
			 }else{
				 cm.sendNext("您並沒有該玩具喔！！！");
				 cm.dispose();
			 }
			 break;
			 case 9 : if(cm.haveItem(道具七,1)){
				兌換物 = 道具七;
				資料表ID = 資料表ID7;
				cm.sendGetNumber("請輸入您要捐贈的數量",1,1,1000000);
			 }else{
				 cm.sendNext("您並沒有該玩具喔！！！");
				 cm.dispose();
			 }
			 break;
			 case 10 : if(cm.haveItem(道具八,1)){
				兌換物 = 道具八;
				資料表ID = 資料表ID8;
				cm.sendGetNumber("請輸入您要捐贈的數量",1,1,1000000);
			 }else{
				 cm.sendNext("您並沒有該玩具喔！！！");
				 cm.dispose();
			 }
			 break;
			 case 11 : if(cm.haveItem(道具九,1)){
				兌換物 = 道具九;
				資料表ID = 資料表ID9;
				cm.sendGetNumber("請輸入您要捐贈的數量",1,1,1000000);
			 }else{
				 cm.sendNext("您並沒有該玩具喔！！！");
				 cm.dispose();
			 }
			 break;
			 case 12 : if(cm.haveItem(道具十,1)){
				兌換物 = 道具十;
				資料表ID = 資料表ID10;
				cm.sendGetNumber("請輸入您要捐贈的數量",1,1,1000000);
			 }else{
				 cm.sendNext("您並沒有該玩具喔！！！");
				 cm.dispose();
			 }
			 break;
			 case 13 : if(cm.haveItem(道具十一,1)){
				兌換物 = 道具十一;
				資料表ID = 資料表ID11;
				cm.sendGetNumber("請輸入您要捐贈的數量",1,1,1000000);
			 }else{
				 cm.sendNext("您並沒有該玩具喔！！！");
				 cm.dispose();
			 }
			 break;
		}
		}
	} if (status == 3){
		 slot = selection;
		  if (cm.haveItem(兌換物,slot)){
                cm.gainItem(兌換物, -slot);
				cm.setPlayCollect(資料表ID,cm.getPlayCollect(資料表ID) + slot);
				cm.setPlayCollect2(slot);
                cm.sendOk("您捐贈了#r"+slot+"#k個#r#t"+兌換物+"##k\r\n"+
				"現在玩具總數來到#r"+cm.getPlayCollect(資料表ID)+"#k個\r\n"+
				"謝謝您的捐贈！！！");
                cm.dispose();
            }else{
               cm.sendOk("你身上沒有該物");
                cm.dispose();
			}
		
	}
}
}