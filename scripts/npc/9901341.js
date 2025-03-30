//高級 - 女(4) 特級(7)
var status = 0;
var beauty = 0;
var hairprice = 1000000;
var hair = Array(32640, 32650, 32660);
var hairnew = Array();
var face = Array(23009,24005,24006); //女生臉型
var facenew = Array();
var sex = false;
var item1 = 4310096;

function start() {
	hairprice = hairprice * 0.5; //促銷中 打5折
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
		if (mode == 1) {
			status++;
		} else {
			status--;
		}
		if (status == 0) {
			if(!cm.getChar().getGender() == 1) {
				cm.sendYesNo("您好，我是亞絲娜，您可透過「#b#t" + item1 +"##k」與我更換頭髮、臉型");
				sex = true;
			} else {
				cm.sendSimple("我是亞絲娜，如果你有#b#t" + item1 + "#可與我更換以下服務#k。\r\n#L1#髮型#l\r\n#L3#臉型#l");
			}
		} else if (status == 1) {
			if (selection == 0) {
				beauty = 1;
				cm.sendStyle("選一個吧!", skin);
			} else if (selection == 1) {
				beauty = 2;
				hairnew = Array();
				for(var i = 0; i < hair.length; i++) {
					hairnew.push(hair[i] + parseInt(cm.getChar().getHair() % 10)); //取得髮色(並按照髮色更換髮型)
				}
				cm.sendStyle("選一個你滿意的髮型吧!", hairnew);
			} else if (selection == 2) {
				beauty = 3;
				haircolor = Array();
				var current = parseInt(cm.getChar().getHair() / 10) * 10; //取得髮型的原色
				for(var i = 0; i < 8; i++) { //髮色(0~8)共9種
					haircolor.push(current + i); //push到array
				}
				cm.sendStyle("選一個吧!", haircolor);
			} else if (selection == 3) {
				beauty = 4;
				facenew = Array();
				for(var i = 0; i < face.length; i++) {
					facenew.push(face[i] + cm.getChar().getFace() % 1000 - (cm.getChar().getFace() % 100)); //眼型 (百位數 - 十位數字 求出眼色 按照眼色切換眼型)
				}
				cm.sendStyle("選一個你滿意的臉型吧!", facenew);
			} else if (selection == 4) {
				beauty = 5;
				var current = cm.getChar().getFace() % 100 + 21000; //20000(男) 21000(女)
				colors = Array();
				colors = Array(current , current + 100, current + 200, current + 300, current + 400, current + 500, current + 600, current + 700, current + 800); //眼色(0xx~8xx) 共9種
				cm.sendStyle("選一個吧!", colors);
			} else {
				cm.sendSimple("我是亞絲娜，如果你有#b#t" + item1 + "##k可與我更換以下服務。\r\n#L1#刀劍神域髮型更換#l\r\n#L3#刀劍神域臉型更換#l");
			}
		} else if (status == 2 && sex == false){
			cm.dispose();
			if (beauty == 1){
				if (cm.haveItem(item1) == true){
					cm.gainItem(item1, -1);
					cm.setSkin(skin[selection]);
					cm.sendOk("享受你的全新造型吧!");
				}else {
					cm.sendOk("抱歉，你似乎沒有#b#t" + item1 + "##k，我不能為您打造獨一無二的頭髮!");
				}				
			}
			if (beauty == 2){				
				if (cm.haveItem(item1) == true){
					cm.gainItem(item1, -1);
					cm.setHair(hairnew[selection]);
					cm.sendOk("享受你的全新造型吧!");
				}else {
					cm.sendOk("抱歉，你似乎沒有#b#t" + item1 + "##k，我不能為您打造獨一無二的頭髮!");
				}				
			}			
			if (beauty == 3){				
				if (cm.haveItem(item1) == true){
					cm.gainItem(item1, -1);
					cm.setHair(haircolor[selection]);
					cm.sendOk("享受你的全新造型吧!");
				}else {
					cm.sendOk("抱歉，你似乎沒有#b#t" + item1 + "##k，我不能為您打造獨一無二的頭髮!");
				}							
			}
			if (beauty == 4){				
				if (cm.haveItem(item1) == true){
					cm.gainItem(item1, -1);
					cm.setFace(facenew[selection]);
					cm.sendOk("享受你的全新造型吧!");
				}else {
					cm.sendOk("抱歉，你似乎沒有#b#t" + item1 + "##k，我不能為您打造獨一無二的頭髮!");
				}							
			}
			if (beauty == 5){				
				if (cm.haveItem(item1) == true){
					cm.gainItem(item1, -1);
					cm.setFace(colors[selection]);
					cm.sendOk("享受你的全新造型吧!");
				}else {
					cm.sendOk("抱歉，你似乎沒有#b#t" + item1 + "##k，我不能為您打造獨一無二的頭髮!");
				}							
			}
		} else if (status == 2 && sex == true) {
			if (selection == 0) {
				beauty = 1;
				cm.sendStyle("選一個!", skin);
			} else if (selection == 1) {
				beauty = 2;
				hairnew = Array();
				for(var i = 0; i < hair.length; i++) {
					hairnew.push(hair[i] + parseInt(cm.getChar().getHair() % 10)); //取得髮色(並按照髮色更換髮型)
				}
				cm.sendStyle("選一個你滿意的頭髮吧!", hairnew);
			} else if (selection == 2) {
				beauty = 3;
				haircolor = Array();
				var current = parseInt(cm.getChar().getHair() / 10) * 10; //取得髮型的原色
				for(var i = 0; i < 8; i++) { //髮色(0~8)共9種
					haircolor.push(current + i); //push到array
				}
				cm.sendStyle("選一個吧!", haircolor);
			} else if (selection == 3) {
				beauty = 4;
				facenew = Array();
				for(var i = 0; i < face.length; i++) {
					facenew.push(face[i] + cm.getChar().getFace() % 1000 - (cm.getChar().getFace() % 100)); //眼型 (百位數 - 十位數字 求出眼色 按照眼色切換眼型)
				}
				cm.sendStyle("選一個你滿意的臉型吧!", facenew);
			} else if (selection == 4) {
				beauty = 5;
				var current = cm.getChar().getFace() % 100 + 21000; //20000(男) 21000(女)
				colors = Array();
				colors = Array(current , current + 100, current + 200, current + 300, current + 400, current + 500, current + 600, current + 700, current + 800); //眼色(0xx~8xx) 共9種
				cm.sendStyle("選一個吧!", colors);
			}
		} else if (status == 3){
			cm.dispose();
			if (beauty == 1){
				if (cm.haveItem(item1) == true){
					cm.gainItem(item1, -1);
					cm.setSkin(skin[selection]);
					cm.sendOk("享受你的全新造型吧!");
				}else {
					cm.sendOk("抱歉，你似乎沒有#b#t" + item1 + "##k，我不能為您打造獨一無二的頭髮!");
				}				
			}
			if (beauty == 2){				
				if (cm.haveItem(item1) == true){
					cm.gainItem(item1, -1);
					cm.setHair(hairnew[selection]);
					cm.sendOk("享受你的全新造型吧!");
				}else {
					cm.sendOk("抱歉，你似乎沒有#b#t" + item1 + "##k，我不能為您打造獨一無二的頭髮!");
				}				
			}			
			if (beauty == 3){				
				if (cm.haveItem(item1) == true){
					cm.gainItem(item1, -1);
					cm.setHair(haircolor[selection]);
					cm.sendOk("享受你的全新造型吧!");
				}else {
					cm.sendOk("抱歉，你似乎沒有#b#t" + item1 + "##k，我不能為您打造獨一無二的頭髮!");
				}							
			}
			if (beauty == 4){				
				if (cm.haveItem(item1) == true){
					cm.gainItem(item1, -1);
					cm.setFace(facenew[selection]);
					cm.sendOk("享受你的全新造型吧!");
				}else {
					cm.sendOk("抱歉，你似乎沒有#b#t" + item1 + "##k，我不能為您打造獨一無二的頭髮!");
				}							
			}
			if (beauty == 5){				
				if (cm.haveItem(item1) == true){
					cm.gainItem(item1, -1);
					cm.setFace(colors[selection]);
					cm.sendOk("享受你的全新造型吧!");
				}else {
					cm.sendOk("抱歉，你似乎沒有#b#t" + item1 + "##k，我不能為您打造獨一無二的頭髮!");
				}							
			}
		}
	}
}
