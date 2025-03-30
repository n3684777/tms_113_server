/*
普通洗鍊石(+3 ~ -3 隨機3種能力 / 這是賦魔把他換個名稱而已)
高級洗鍊石(+3 ~ -1 隨機5種能力 / 這是賦魔把他換個名稱而已)
*/
load('nashorn:mozilla_compat.js');
importPackage(java.lang);
var status = -1;
var slot = Array();
var item;
var sel;
var item1 = 4251200;
var item2 = 4251201;

function start() {
    //status = -1;
    action(1, 0, 0);
}
var icon01 = "#fUI/UIWindow.img/CashTradingRoom/BtCoin/normal/0#";
var icon02 = "#fUI/UIWindow.img/UserInfo/bossPetCrown#";
var icon03 = "#fUI/UIWindow.img/AriantMatch/characterIcon/0#";
var icon04 = "#fUI/UIWindow.img/AriantMatch/characterIcon/1#";
var icon05 = "#fUI/UIWindow.img/AriantMatch/characterIcon/2#";
var icon06 = "#fUI/UIWindow.img/AriantMatch/characterIcon/3#";
var icon07 = "#fUI/UIWindow.img/AriantMatch/characterIcon/4#";
var icon08 = "#fUI/UIWindow.img/AriantMatch/characterIcon/5#";
var icon09 = "#fUI/UIWindow.img/Megaphone/0#";
var icon10 = "#fUI/UIWindow.img/CashTradingRoom/icon1#";

var status = -1;

function action(mode, type, selection) {
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
        cm.sendSimple(
            "#k請問您是否要使用能力點裝賦魔功能呢?#d" +
            "\r\n\r\n#L0##r#e何謂能力點裝賦魔?#l" +
            "\r\n　　　　　　　　　　　" +

            "\r\n\r\n#L1##r使用#k下級附魔#r一次需要使用#r#z" + item1 + "##r#e一個!#l" +
            "\r\n\r\n#L2##r使用#k中級附魔#r一次需要使用#r#z" + item2 + "##r#e一個!#l"
        );
    } else if (status == 1) {
        sel = selection;
        if (sel == 0) {
            cm.sendOk(
                "#b所謂的能力點裝附魔，就是在點裝上額外附加魔法，強化點裝，\r\n讓點裝可以附加額外的效果!(原本有的能力會覆加上去。)#d" +
                "\r\n---------------底下為附魔的能力值範圍----------------#r" +
                "\r\n  下級::: #k" +
                "\r\n       力量       " + icon04 + " -4 ~ +4 " +
                "\r\n       敏捷       " + icon04 + " -4 ~ +4 " +
                "\r\n       智力       " + icon05 + " -4 ~ +4 " +
                "\r\n       幸運       " + icon06 + " -4 ~ +4 " +
                //"\r\n               HP         "+icon07+" -150 ~ +150 "+
                //"\r\n               MP         "+icon08+" -150 ~ +150 "+
                "\r\n       攻擊力     " + icon03 + " -3 ~ +3 " +
                "\r\n       魔法攻擊力 " + icon04 + " -3 ~ +3 " +
                //"\r\n               物理防禦力 "+icon05+" -50  ~ +50 "+
                //"\r\n               魔法防禦力 "+icon06+" -50  ~ +50 "+
                //"\r\n               命中率     "+icon07+" -15  ~ +15 "+
                //"\r\n               移動速度   "+icon08+" -15  ~ +15 "+
                //"\r\n               跳躍力     "+icon08+" -5   ~ +5 "+
                "\r\n#d------------------------------------------------------#b" +
                "\r\n  中級::: #k" +
                "\r\n       力量       " + icon04 + " +1 ~ +5 " +
                "\r\n       敏捷       " + icon04 + " +1 ~ +5 " +
                "\r\n       智力       " + icon05 + " +1 ~ +5 " +
                "\r\n       幸運       " + icon06 + " +1 ~ +5 " +
                //"\r\n               HP         "+icon07+" -150 ~ +150 "+
                //"\r\n               MP         "+icon08+" -150 ~ +150 "+
                "\r\n       攻擊力     " + icon03 + " +1 ~ +5 " +
                "\r\n       魔法攻擊力 " + icon04 + " +1 ~ +5 " +
                //"\r\n               物理防禦力 "+icon05+" -50  ~ +50 "+
                //"\r\n               魔法防禦力 "+icon06+" -50  ~ +50 "+
                //"\r\n               命中率     "+icon07+" -15  ~ +15 "+
                //"\r\n               移動速度   "+icon08+" -15  ~ +15 "+
                //"\r\n               跳躍力     "+icon08+" -5   ~ +5 "+

                "\r\n#d------------------------------------------------------#b" +
                "\r\n  高級::: #k" +
                "\r\n       力量       " + icon04 + " +12" +
                "\r\n       敏捷       " + icon04 + " +12" +
                "\r\n       智力       " + icon05 + " +12" +
                "\r\n       幸運       " + icon06 + " +12" +
                //"\r\n               HP         "+icon07+" -150 ~ +150 "+
                //"\r\n               MP         "+icon08+" -150 ~ +150 "+
                "\r\n       攻擊力     " + icon03 + " +12" +
                "\r\n       魔法攻擊力 " + icon04 + " +12" +
                //"\r\n               物理防禦力 "+icon05+" -50  ~ +50 "+
                //"\r\n               魔法防禦力 "+icon06+" -50  ~ +50 "+
                //"\r\n               命中率     "+icon07+" -15  ~ +15 "+
                //"\r\n               移動速度   "+icon08+" -15  ~ +15 "+
                //"\r\n               跳躍力     "+icon08+" -5   ~ +5 "+
                "\r\n#d------------------------------------------------------#b"
                //"\r\n          附魔賦予點裝以上隨機3種能力值"
                //"\r\n          中級附魔賦予點裝以上隨機三種能力值"+
                //"\r\n          金牌附魔賦予點裝以上隨機四種能力值"	
            );
            cm.dispose();
        } else if (sel == 4) {
            cm.dispose();
            cm.openNpc(9010000, "購買");
            return;
        }
        else
            var avail = "";
        for (var i = 0; i < 96; i++) {
            if (cm.getInventory(1).getItem(i) != null) {
                if (Packages.server.MapleItemInformationProvider.getInstance().isCash(cm.getInventory(1).getItem(i).getItemId())) {
                    avail += "#L" + Math.abs(i) + "##z" + cm.getInventory(1).getItem(i).getItemId() + "##l\r\n";
                }
            }
        }
        if (avail == "") {
            avail += "很抱歉,您的裝備欄沒有任何的點裝哦!!~";
        }
        cm.sendSimple("想要附魔哪一件點數裝備呢？？\r\n#b" + avail);
    } else if (status == 2) {
        selected = selection;
        cm.sendYesNo("你想要附魔的點裝是 #b#t" + cm.getInventory(1).getItem(selected).getItemId() + "##k.\r\n您確定要對此點裝賦魔？？\r\n");
    } else if (status == 3) {
        var type;
        if (sel == 1) {
            type = 3;
            item = item1;
        } else if (sel == 2) {
            type = 5;
            item = item2;
        }
        cm.sendYesNo(cm.EnchantCashEqipMinus(selected, type, item, 1));
    } else if (status == 4) {
        //cm.getPlayer().fakeRelog();
        cm.dispose();

    }








}