//高級 - 女(4) 特級(7)
var status = 0;
var beauty = 0;
var hairprice = 1000000;
var hair = Array(37410, 37420, 37430, 37440, 37450, 37460);
var hairnew = Array();
var sex = false;
var item1 = 4006003;

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
				cm.sendYesNo("您好，我是愛蜜莉雅，您可透過「從零開始頭髮兌換章」與我更換頭髮");
				sex = true;
			} else {
				cm.sendSimple("我是愛蜜莉雅，如果你有#b#t" + item1 +"##k。\r\n#L1#髮型變換: #i" + item1+ "##t" + item1 + "##l");
			}
		} else if (status == 1) {
			if (selection == 0) {
				beauty = 0;
				cm.sendSimple("您想購買哪一種優惠券?\r\n#L0#髮型變換 " + hairprice + " 楓幣: #i" + item1 + "##t" + item1 + "##l");
			} else if (selection == 1) {
				beauty = 1;
				hairnew = Array();
				for(var i = 0; i < hair.length; i++) {
					hairnew.push(hair[i] + parseInt(cm.getChar().getHair() % 10)); //取得髮色(並按照髮色更換髮型)
				}
				cm.sendStyle("我可以讓你變身成從零開始的異世界人物髮型，如何?要不要來試試?如果你有 #b#t" + item1 + "##k 我可以為您大改造，選一個你喜歡的~", hairnew);
			} else {
				cm.sendSimple("我是愛蜜莉雅，如果你有#b#t" + item1 + "##k。\r\n#L1#使用 #i" + item1 + "##t" + item1 + "##l");
			}
		} else if (status == 2 && sex == false){
			cm.dispose();
			if (beauty == 0){
				if (selection == 0 && (cm.getMeso() >= hairprice)) {
					cm.gainMeso(-hairprice);
					cm.gainItem(item1, 1);
					cm.sendOk("享受吧!");
				} else {
					cm.sendOk("你沒有足夠的錢購買優惠券!");
				}
			}
			if (beauty == 1){
				if (cm.haveItem(item1) == true){
					cm.gainItem(item1, -1);
					cm.setHair(hairnew[selection]);
					cm.sendOk("享受你的全新髮型吧!");
				} else {
					cm.sendOk("抱歉，你似乎沒有優惠卷，我不能為您打造獨一無二的頭髮!");
				}
			}
		} else if (status == 2 && sex == true) {
			if (selection == 0) {
				beauty = 0;
				cm.sendSimple("您想購買哪一種優惠券?\r\n#L0#髮型變換 " + hairprice + " 楓幣: #i" + item1 + "##t" + item1 + "##l");
			} else if (selection == 1) {
				beauty = 1;
				hairnew = Array();
				for(var i = 0; i < hair.length; i++) {
					hairnew.push(hair[i] + parseInt(cm.getChar().getHair() % 10)); //取得髮色(並按照髮色更換髮型)
				}
				cm.sendStyle("我可以讓你有更酷炫的髮型，如何?要不要來試試?如果你有 #b#t" + item1 + "##k 我可以為您大改造，選一個你喜歡的~", hairnew);
			} else {
				cm.sendSimple("我是高級美髮造型幻化師，如果你有#b#t" + item1 + "##k。\r\n#L0#我要購買優惠券#l\r\n#L1#使用 #i" + item1 + "##t" + item1 + "##l");
			}
		} else if (status == 3) {
			cm.dispose();
			if (beauty == 0){
				if (selection == 0 && (cm.getMeso() >= hairprice)) {
					cm.gainMeso(-hairprice);
					cm.gainItem(item1, 1);
					cm.sendOk("享受吧!");
				} else {
					cm.sendOk("你沒有足夠的錢購買優惠券!");
				}
			}
			if (beauty == 1){
				if (cm.haveItem(item1) == true){
					cm.gainItem(item1, -1);
					cm.setHair(hairnew[selection]);
					cm.sendOk("享受你的全新髮型吧!");
				} else {
					cm.sendOk("抱歉，你似乎沒有優惠卷，我不能為您打造獨一無二的頭髮!");
				}
			}
		}
	}
}
