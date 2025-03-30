var status = 0;

var 字母A = 3991000;
var 字母I = 3991008;
var 字母C = 3991002;
var 字母L = 3991011;

//獎品一
var 獎品一 = 5220000;
var 獎品一數量 = 10;
var 獎品一花費A = 100;
var 獎品一花費I = 100;
var 獎品一花費C = 100;
var 獎品一花費L = 100;

//獎品二
var 獎品二 = 5220020;
var 獎品二數量 = 1;
var 獎品二花費A = 100;
var 獎品二花費I = 100;
var 獎品二花費C = 100;
var 獎品二花費L = 100;

//獎品三
var 獎品三 = 1812000;
var 獎品三數量 = 1;
var 獎品三花費A = 100;
var 獎品三花費I = 100;
var 獎品三花費C = 100;
var 獎品三花費L = 100;

//獎品四
var 獎品四 = 1812001;
var 獎品四數量 = 1;
var 獎品四花費A = 100;
var 獎品四花費I = 100;
var 獎品四花費C = 100;
var 獎品四花費L = 100;

//獎品五
var 獎品五 = 1702226;
var 獎品五數量 = 1;
var 獎品五花費A = 100;
var 獎品五花費I = 100;
var 獎品五花費C = 100;
var 獎品五花費L = 100;


function start() {
	cm.sendSimple ( "歡迎來到每週字母兌換專頁，請選擇您要兌換的獎品。\r\n"+"\r\n" 
				   +"                                #i"+ 字母A +"##i"+ 字母I +"##i"+ 字母C +"##i"+ 字母L +"#" + "\r\n" 
				   +"=================#b【獎品一】#k================="+"\r\n"
				   +"#L0##i"+ 獎品一 +"# #r#t"+ 獎品一 + "##k 道具 "+ 獎品一數量 +" 個#l"+"\r\n\r\n"
				   +"        #i"+ 字母A +"# = 【"+ 獎品一花費A +"】個　#i"+ 字母I +"# = 【"+ 獎品一花費I +"】個"+"\r\n"
				   +"        #i"+ 字母C +"# = 【"+ 獎品一花費C +"】個　#i"+ 字母L +"# = 【"+ 獎品一花費L +"】個"+"\r\n"
				   +"=================#b【獎品二】#k================="+"\r\n"
				   +"#L1##i"+ 獎品二 +"# #r#t"+ 獎品二 + "##k 道具 "+ 獎品二數量 +" 個#l"+"\r\n\r\n"
				   +"        #i"+ 字母A +"# = 【"+ 獎品二花費A +"】個　#i"+ 字母I +"# = 【"+ 獎品二花費I +"】個"+"\r\n"
				   +"        #i"+ 字母C +"# = 【"+ 獎品二花費C +"】個　#i"+ 字母L +"# = 【"+ 獎品二花費L +"】個"+"\r\n"
				   +"=================#b【獎品三】#k================="+"\r\n"
				   +"#L2##i"+ 獎品三 +"# #r#t"+ 獎品三 + "##k 道具 "+ 獎品三數量 +" 個#l"+"\r\n\r\n"
				   +"        #i"+ 字母A +"# = 【"+ 獎品三花費A +"】個　#i"+ 字母I +"# = 【"+ 獎品三花費I +"】個"+"\r\n"
				   +"        #i"+ 字母C +"# = 【"+ 獎品三花費C +"】個　#i"+ 字母L +"# = 【"+ 獎品三花費L +"】個"+"\r\n"
				   +"=================#b【獎品四】#k================="+"\r\n"
				   +"#L3##i"+ 獎品四 +"# #r#t"+ 獎品四 + "##k 道具 "+ 獎品四數量 +" 個#l"+"\r\n\r\n"
				   +"        #i"+ 字母A +"# = 【"+ 獎品四花費A +"】個　#i"+ 字母I +"# = 【"+ 獎品四花費I +"】個"+"\r\n"
				   +"        #i"+ 字母C +"# = 【"+ 獎品四花費C +"】個　#i"+ 字母L +"# = 【"+ 獎品四花費L +"】個"+"\r\n"
				   +"=================#b【獎品五】#k================="+"\r\n"
				   +"#L4##i"+ 獎品五 +"# #r#t"+ 獎品五 + "##k 道具 "+ 獎品五數量 +" 個#l"+"\r\n\r\n"
				   +"        #i"+ 字母A +"# = 【"+ 獎品五花費A +"】個　#i"+ 字母I +"# = 【"+ 獎品五花費I +"】個"+"\r\n"
				   +"        #i"+ 字母C +"# = 【"+ 獎品五花費C +"】個　#i"+ 字母L +"# = 【"+ 獎品五花費L +"】個"+"\r\n"
				   +"=================#b【結尾囉】#k================="+"\r\n")
				   }

function action(mode, type, selection) {
		cm.dispose();

	switch(selection){ 
		case 0:
			if (cm.haveItem(字母A ,獎品一花費A) == true && cm.haveItem(字母I ,獎品一花費I) == true && cm.haveItem(字母C ,獎品一花費C) == true && cm.haveItem(字母L ,獎品一花費L) == true) {
			cm.gainItem(字母A ,-獎品一花費A);
			cm.gainItem(字母I ,-獎品一花費I);
			cm.gainItem(字母C ,-獎品一花費C);
			cm.gainItem(字母L ,-獎品一花費L);
			cm.gainItem(獎品一); 
			cm.sendOk("給你可不要弄丟了#i"+ 獎品一 +"#");
		        cm.dispose();
			}else{
		        cm.sendOk("#r你還沒收集完吧!!");
		        cm.dispose();
			}
		break;
		case 1:
			if (cm.haveItem(字母A ,獎品二花費A) == true && cm.haveItem(字母I ,獎品二花費I) == true && cm.haveItem(字母C ,獎品二花費C) == true && cm.haveItem(字母L ,獎品二花費L) == true) {
			cm.gainItem(字母A ,-獎品二花費A);
			cm.gainItem(字母I ,-獎品二花費I);
			cm.gainItem(字母C ,-獎品二花費C);
			cm.gainItem(字母L ,-獎品二花費L);
			cm.gainItem(獎品二); 
			cm.sendOk("給你可不要弄丟了#i"+ 獎品二 +"#");
		        cm.dispose();
			}else{
		        cm.sendOk("#r你還沒收集完吧!!");
		        cm.dispose();
			}
		break;
		case 2: 
			if (cm.haveItem(字母A ,獎品三花費A) == true && cm.haveItem(字母I ,獎品三花費I) == true && cm.haveItem(字母C ,獎品三花費C) == true && cm.haveItem(字母L ,獎品三花費L) == true) {
			cm.gainItem(字母A ,-獎品三花費A);
			cm.gainItem(字母I ,-獎品三花費I);
			cm.gainItem(字母C ,-獎品三花費C);
			cm.gainItem(字母L ,-獎品三花費L);
			cm.gainItem(獎品三); 
			cm.sendOk("給你可不要弄丟了#i"+ 獎品三 +"#");
		        cm.dispose();
			}else{
		        cm.sendOk("#r你還沒收集完吧!!");
		        cm.dispose();
			}
		break;
		case 3:
			if (cm.haveItem(字母A ,獎品四花費A) == true && cm.haveItem(字母I ,獎品四花費I) == true && cm.haveItem(字母C ,獎品四花費C) == true && cm.haveItem(字母L ,獎品四花費L) == true) {
			cm.gainItem(字母A ,-獎品四花費A);
			cm.gainItem(字母I ,-獎品四花費I);
			cm.gainItem(字母C ,-獎品四花費C);
			cm.gainItem(字母L ,-獎品四花費L);
			cm.gainItem(獎品四); 
			cm.sendOk("給你可不要弄丟了#i"+ 獎品四 +"#");
		        cm.dispose();
			}else{
		        cm.sendOk("#r你還沒收集完吧!!");
		        cm.dispose();
			}
		break;
		case 4:
		if (cm.haveItem(字母A ,獎品五花費A) == true && cm.haveItem(字母I ,獎品五花費I) == true && cm.haveItem(字母C ,獎品五花費C) == true && cm.haveItem(字母L ,獎品五花費L) == true) {
			cm.gainItem(字母A ,-獎品五花費A);
			cm.gainItem(字母I ,-獎品五花費I);
			cm.gainItem(字母C ,-獎品五花費C);
			cm.gainItem(字母L ,-獎品五花費L);
			cm.gainItem(獎品五); 
			cm.sendOk("給你可不要弄丟了#i"+ 獎品五 +"#");
		        cm.dispose();
			}else{
		        cm.sendOk("#r你還沒收集完吧!!");
		        cm.dispose();
			}	
		break;
		}

	}
