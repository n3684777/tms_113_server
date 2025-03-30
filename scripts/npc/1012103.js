var status = 0;
var beauty = 0;
var hairprice = 1000000;
var haircolorprice = 1000000;
var mhair = Array(30030, 30020, 30000, 30310, 30330, 30060, 30150, 30410, 30210, 30140, 30120, 30200, 35186);
var fhair = Array(31050, 31040, 31000, 31150, 31310, 31300, 31160, 31100, 31410, 31030, 31080, 31070, 32020, 37571, 37521, 37701, 38431, 37841, 38631, 37447, 34967, 37467, 38097, 38277, 34337, 37517, 31083, 31273, 31993, 38880, 37760, 38390, 38440, 38580, 38560, 34270, 37710, 34970, 38110, 38070, 34310, 38470, 38420, 34660, 37652, 38622, 37832, 31000, 31010, 31020, 31030, 31040, 31050, 31070, 31100, 31110, 31150, 31170, 31180, 31190, 31220, 31250, 31330, 31360, 31470, 31620, 31720, 31840, 31870, 34110, 34120, 34210, 34230, 34240, 34290, 34320, 34450, 34510, 34600, 34710, 34910, 37060, 37740, 38290, 38300, 38490, 38600, 38740, 38650, 38640, 38277);
var hairnew = Array();

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode < 1) {
        cm.dispose();
    } else {
        status++;
        if (status == 0)
            cm.sendSimple("您好，我是這間美髮店的老闆. 如果你有 #b#t5150001##k 或者有 #b#t5151001##k 請允許我把你的頭髮護理。請選擇一個你想要的.\r\n#L1#使用 #i5150001##t5150001##l\r\n#L2#使用 #i5151001##t5151001##l");
        else if (status == 1) {
            if (selection == 0) {
                beauty = 0;
                cm.sendSimple("Which coupon would you like to buy?\r\n#L0#Haircut for " + hairprice + " mesos: #i5150001##t5150001##l\r\n#L1#Dye your hair for " + haircolorprice + " mesos: #i5151001##t5151001##l");
            } else if (selection == 1) {
                beauty = 1;
                hairnew = Array();
                if (cm.getPlayer().getGender() == 0)
                    for (var i = 0; i < mhair.length; i++)
                        hairnew.push(mhair[i] + parseInt(cm.getPlayer().getHair() % 10));
                if (cm.getPlayer().getGender() == 1)
                    for (var i = 0; i < fhair.length; i++)
                        hairnew.push(fhair[i] + parseInt(cm.getPlayer().getHair() % 10));
                cm.sendStyle("選擇一個想要的.", hairnew);
            } else if (selection == 2) {
                beauty = 2;
                haircolor = Array();
                var current = parseInt(cm.getPlayer().getHair() / 10) * 10;
                for (var i = 0; i < 8; i++)
                    haircolor.push(current + i);
                cm.sendStyle("選擇一個想要的", haircolor);
            }
        } else if (status == 2) {
            cm.dispose();
            if (beauty == 1) {
                if (cm.haveItem(5150001)) {
                    cm.gainItem(5150001, -1);
                    cm.setHair(hairnew[selection]);
                    cm.sendOk("享受!");
                } else
                    cm.sendOk("您貌似沒有#b#t5150001##k..");
            }
            if (beauty == 2) {
                if (cm.haveItem(5151001)) {
                    cm.gainItem(5151001, -1);
                    cm.setHair(haircolor[selection]);
                    cm.sendOk("享受!");
                } else
                    cm.sendOk("您貌似沒有#b#t5151001##k..");
            }
            if (beauty == 0) {
                if (selection == 0 && cm.getMeso() >= hairprice) {
                    cm.gainMeso(-hairprice);
                    cm.gainItem(5150001, 1);
                    cm.sendOk("享受!");
                } else if (selection == 1 && cm.getMeso() >= haircolorprice) {
                    cm.gainMeso(-haircolorprice);
                    cm.gainItem(5151001, 1);
                    cm.sendOk("享受!");
                } else
                    cm.sendOk("您沒有足夠的楓幣購買!");
            }
        }
    }
}
