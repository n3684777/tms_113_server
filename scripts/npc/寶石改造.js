/*
* @autor Java
* LeaderMS MapleStory Private Server
* APQ
* cm.getPlayer().gainAriantPontos(-100);
* cm.gainItem(3010018, 1);
*/
importPackage(Packages.client.inventory);
importPackage(Packages.client.inventory.manipulator);


var status = 0;

var 裝備查詢;
var 裝備查詢2;
var store2;
var store3;

/* 起頭 */
var 下級藍改造;
var 下級藍改造2;

var 中級藍改造;
var 中級藍改造2;

var 上級藍改造;
var 上級藍改造2;

/* 結尾 */

/* 起頭 */

var 下級石改造;
var 下級石改造2;

var 中級石改造;
var 中級石改造2;

var 上級石改造;
var 上級石改造2;

/* 結尾 */

/* 起頭 */

var 下級蛋改造;
var 下級蛋改造2;

var 中級蛋改造;
var 中級蛋改造2;

var 上級蛋改造;
var 上級蛋改造2;

/* 結尾 */

/* 起頭 */

var 下級紫改造;
var 下級紫改造2;

var 中級紫改造;
var 中級紫改造2;

var 上級紫改造;
var 上級紫改造2;

/* 結尾 */

/* 起頭 */

var 下級海改造;
var 下級海改造2;

var 中級海改造;
var 中級海改造2;

var 上級海改造;
var 上級海改造2;

/* 結尾 */

/* 起頭 */

var 下級黃改造;
var 下級黃改造2;

var 中級黃改造;
var 中級黃改造2;

var 上級黃改造;
var 上級黃改造2;

/* 結尾 */

/* 起頭 */

var 下級祖改造;
var 下級祖改造2;

var 中級祖改造;
var 中級祖改造2;

var 上級祖改造;
var 上級祖改造2;

/* 結尾 */

/* 起頭 */

var 下級黑改造;
var 下級黑改造2;

var 中級黑改造;
var 中級黑改造2;

var 上級黑改造;
var 上級黑改造2;

/* 結尾 */


var 下級藍 = 4250100;
var 下級石 = 4250200;
var 下級蛋 = 4250300;
var 下級紫 = 4250400;
var 下級海 = 4250500;
var 下級黃 = 4250600;
var 下級祖 = 4250700;
var 下級黑 = 4251300;

var 中級藍 = 4250101;
var 中級石 = 4250201;
var 中級蛋 = 4250301;
var 中級紫 = 4250401;
var 中級海 = 4250501;
var 中級黃 = 4250601;
var 中級祖 = 4250701;
var 中級黑 = 4251301;

var 上級藍 = 4250102;
var 上級石 = 4250202;
var 上級蛋 = 4250302;
var 上級紫 = 4250402;
var 上級海 = 4250502;
var 上級黃 = 4250602;
var 上級祖 = 4250702;
var 上級黑 = 4251302;


var coinId = "怪物擊殺數";
var coinIcon = " "+ coinId + "";

importPackage(Packages.client);

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
		killmob = cm.getChar().getName();
        cm.sendNext("我是卡納原創寶石改造系統～歡迎您攜帶超棒的寶物前來與我升級裝備！！");
		}if (status == 1) {
			store = true;
			cm.sendSimple("歡迎來到寶石改造頁面\r\n請問您想做些什麼 ? \r\n\r\n請選擇一個項目:\r\n" +
                    "#L1##b如何獲得寶石粉\r\n" +
                    "#L2#合成寶石\r\n" +
                    "#L3#寶石改造\r\n" +
                    "#L5#寶石改造素質查詢\r\n"+					
					"#L4#寶石改造說明頁面");
		} else if (status == 2) {
			if (store) {
                switch (selection) {
                    case 1:
                        cm.sendNext ("在打怪的過程中，擊殺特定區域怪物您會獲得以下相應道具。\r\n"+
									   "以下為掉落物品名稱以及相對掉落怪物 : \r\n\r\n"+
									   "#r#v"+4007000+"# [ #t"+4007000+"# ] - #k全地圖怪物皆會掉落\r\n"+
									   "#r#v"+4007001+"# [ #t"+4007001+"# ] - #k天空之城&冰原雪域所有怪物\r\n"+
									   "#r#v"+4007002+"# [ #t"+4007002+"# ] - #k水世界所有怪物\r\n"+
									   "#r#v"+4007003+"# [ #t"+4007003+"# ] - #k維多利亞島&神木村所有怪物\r\n"+
									   "#r#v"+4007004+"# [ #t"+4007004+"# ] - #k時間神殿所有怪物\r\n"+
									   "#r#v"+4007005+"# [ #t"+4007005+"# ] - #k全地圖怪物皆會掉落\r\n"+
									   "#r#v"+4007006+"# [ #t"+4007006+"# ] - #k納希沙漠&瑪珈提亞城\r\n"+
									   "#r#v"+4007007+"# [ #t"+4007007+"# ] - #k玩具城&地球防衛部&童話村所有怪物\r\n");
									   cm.dispose();
                        break;
                    case 2:
						store2 = true;
                        cm.sendSimple(
						  "以下有三種凝結方式，凝結順序是由上往下凝結\r\n"+
						  "#b#L5#各類魔法粉凝結#l#k\r\n"+
						  "#b#L6#下級鑲嵌寶石（５顆）凝結#l#k\r\n"+
						  "#b#L7#中級鑲嵌寶石（５顆）凝結#l");
                        break;
                    case 3:
						store2 = true;
                        cm.sendSimple(
						  "請選擇您要改造的寶石\r\n改造前請先確認武器是放置在#r裝備欄第一行第一列#k\r\n"+
						  "#b#L100##v"+下級藍+"#藍寶石系列改造#l#k\r\n\r\n"+
						  "#b#L101##v"+下級石+"#石榴石系列改造#l#k\r\n\r\n"+
						  "#b#L102##v"+下級蛋+"#蛋白石系列改造#l#k\r\n\r\n"+
						  "#b#L103##v"+下級紫+"#紫水晶系列改造#l#k\r\n\r\n"+
						  "#b#L104##v"+下級海+"#海藍寶石系列改造#l#k\r\n\r\n"+
						  "#b#L105##v"+下級黃+"#黃晶系列改造#l#k\r\n\r\n"+
						  "#b#L106##v"+下級祖+"#祖母綠系列改造#l#k\r\n\r\n"+
						  "#b#L107##v"+下級黑+"#黑水晶系列改造#l#k\r\n");
                        break;
					case 4:
						裝備查詢 = true;
                        cm.sendOk(
						  "您好，歡迎來到寶石改造說明頁面#k\r\n"+
						  "#b【改造戒指】#k\r\n"+
						  "１－ 寶石改造目前開放指定戒指「#t"+1112949+"#」改造\r\n"+
						  "２－ 每個戒指最高強化次數為 30 次\r\n\r\n"+
						  "#b【指定戒指取得方法】#k\r\n"+
						  "小寶物袋（７）個即可兌換一枚指定戒指\r\n請至萬能兌換NPC兌換戒指#k\r\n\r\n"+
						  "#b【各級附魔寶石效果】#k\r\n\r\n"+
						  "#k#v"+下級藍+"#    藍寶石系列改造 - 魔法攻擊力增加 1 / 2 / 3 每階級#l#k\r\n\r\n"+
						  "#k#v"+下級石+"#    石榴石系列改造 - 血量增加 10 / 20 / 30 每階級#l#k\r\n\r\n"+
						  "#k#v"+下級蛋+"#    蛋白石系列改造 - 物理攻擊力增加 1 / 2 / 3 每階級#l#k\r\n\r\n"+
						  "#k#v"+下級紫+"#    紫水晶系列改造 - 命中率增加 1 / 2 / 3 每階級#l#k\r\n\r\n"+
						  "#k#v"+下級海+"#    海藍寶石系列改造 - 魔力增加 10 / 20 / 30 每階級#l#k\r\n\r\n"+
						  "#k#v"+下級黃+"#    黃晶系列改造 - 防禦力增加 5 / 10 / 20 每階級#l#k\r\n\r\n"+
						  "#k#v"+下級祖+"#    祖母綠系列改造 - 魔法防禦力增加 5 / 10 / 20 每階級#l#k\r\n\r\n"+
						  "#k#v"+下級黑+"#    祖母綠系列改造 - 迴避率增加 1 / 2 / 3 每階級#l#k\r\n\r\n"+
						  "#b【各階花費】#k\r\n"+
						  "#k以下為，每階級升級一次所需花費\r\n「下級」 = 50 萬\r\n 「中級」 = 100 萬\r\n 「上級」 = 200 萬#k\r\n\r\n"+
						  "#b【共鳴效果】#k\r\n"+
						  "#k使用#b「藍寶石系列」#k強化5次，可額外獲得 +5 魔法攻擊力#k\r\n"+
						  "#k使用#b「石榴石系列」#k強化10次，可額外獲得 +100 血量#k\r\n"+
						  "#k使用#b「蛋白石系列」#k強化5次，可額外獲得 +5 攻擊力#k\r\n"+
						  "#k使用#b「紫水晶系列」#k強化10次，可額外獲得 +10 命中率#k\r\n"+
						  "#k使用#b「海藍寶石系列」#k強化10次，可額外獲得 +100 魔力#k\r\n"+
						  "#k使用#b「黃晶系列」#k強化5次，可額外獲得 +50 防禦力#k\r\n"+
						  "#k使用#b「祖母綠系列」#k強化5次，可額外獲得 +50 魔法防禦力#k\r\n"+
						  "#k使用#b「祖母綠系列」#k強化10次，可額外獲得 +10 迴避率#k\r\n");
                        break;	
                    case 5:
						裝備查詢 = true;
                        cm.sendGetNumber("請將慾查詢的裝備放在裝備欄第一行第一列。"+
							 "\r\n如素質有異狀請像GM反映。\r\n"+
							 "#b【注意，目前僅開放戒指或特定裝備進行改造】#k",1,1,100);
                        break;
                    default:
                        storeInfo = [];
                }
            }
             else {
					cm.sendOk("發生未知的錯誤");
            }
        } else if (status == 3) {			
            if (store2) {
				switch (selection) {
					case 5:
						store3 = true;
                        cm.sendSimple(
						  "以下為基礎#r下級#k改造寶石，請查看您的魔法粉後選擇您要的寶石。\r\n"+
						  "#b#L20##r#v"+下級藍+"#（*１）= #v"+4007002+"#（*100）+ #v"+4007001+"#（*100）#l#k\r\n"+
						  "#b#L21##r#v"+下級石+"#（*１）= #v"+4007006+"#（*100）#l#k\r\n"+
						  "#b#L22##r#v"+下級蛋+"#（*１）= #v"+4007002+"#+#v"+4007003+"#+#v"+4007004+"#+#v"+4007001+"#+#v"+4007006+"#（*50）#l#k\r\n"+
						  "#b#L23##r#v"+下級紫+"#（*１）= #v"+4007005+"#（*100）#l#k\r\n"+
						  "#b#L24##r#v"+下級海+"#（*１）= #v"+4007002+"#（*100）#l#k\r\n"+
						  "#b#L25##r#v"+下級黃+"#（*１）= #v"+4007004+"#（*100）#l#k\r\n"+
						  "#b#L26##r#v"+下級祖+"#（*１）= #v"+4007003+"#（*100）#l#k\r\n"+
						  "#b#L27##r#v"+下級黑+"#（*１）= #v"+4007007+"#（*100）#l#k\r\n");
                    break;
					case 6:
						store3 = true;
                        cm.sendSimple(
						  "以下為基礎#r中級#k改造寶石，請查看您的寶石後選擇您要升級的項目，您將有機率直接獲得上級寶石。\r\n"+
						  "#b#L30##r#v"+中級藍+"#（*１）= #v"+下級藍+"#  #k[ #t"+下級藍+"# ] -#r（五顆）#l#k\r\n"+
						  "#b#L31##r#v"+中級石+"#（*１）= #v"+下級石+"#  #k[ #t"+下級石+"# ] -#r（五顆）#l#k\r\n"+
						  "#b#L32##r#v"+中級蛋+"#（*１）= #v"+下級蛋+"#  #k[ #t"+下級蛋+"# ] -#r（五顆）#l#k\r\n"+
						  "#b#L33##r#v"+中級紫+"#（*１）= #v"+下級紫+"#  #k[ #t"+下級紫+"# ] -#r（五顆）#l#k\r\n"+
						  "#b#L34##r#v"+中級海+"#（*１）= #v"+下級海+"#  #k[ #t"+下級海+"# ] -#r（五顆）#l#k\r\n"+
						  "#b#L35##r#v"+中級黃+"#（*１）= #v"+下級黃+"#  #k[ #t"+下級黃+"# ] -#r（五顆）#l#k\r\n"+
						  "#b#L36##r#v"+中級祖+"#（*１）= #v"+下級祖+"#  #k[ #t"+下級祖+"# ] -#r（五顆）#l#k\r\n"+
						  "#b#L37##r#v"+中級黑+"#（*１）= #v"+下級黑+"#  #k[ #t"+下級黑+"# ] -#r（五顆）#l#k\r\n");
                    break;
					case 7:
						store3 = true;
						cm.sendSimple(
						  "以下為基礎#r上級#k改造寶石，您將有100%的機率合成到上級寶石。\r\n"+
						  "#b#L40##r#v"+上級藍+"#（*１）= #v"+中級藍+"#  #k[ #t"+中級藍+"# ] -#r（五顆）#l#k\r\n"+
						  "#b#L41##r#v"+上級石+"#（*１）= #v"+中級石+"#  #k[ #t"+中級石+"# ] -#r（五顆）#l#k\r\n"+
						  "#b#L42##r#v"+上級蛋+"#（*１）= #v"+中級蛋+"#  #k[ #t"+中級蛋+"# ] -#r（五顆）#l#k\r\n"+
						  "#b#L43##r#v"+上級紫+"#（*１）= #v"+中級紫+"#  #k[ #t"+中級紫+"# ] -#r（五顆）#l#k\r\n"+
						  "#b#L44##r#v"+上級海+"#（*１）= #v"+中級海+"#  #k[ #t"+中級海+"# ] -#r（五顆）#l#k\r\n"+
						  "#b#L45##r#v"+上級黃+"#（*１）= #v"+中級黃+"#  #k[ #t"+中級黃+"# ] -#r（五顆）#l#k\r\n"+
						  "#b#L46##r#v"+上級祖+"#（*１）= #v"+中級祖+"#  #k[ #t"+中級祖+"# ] -#r（五顆）#l#k\r\n"+
						  "#b#L47##r#v"+上級黑+"#（*１）= #v"+中級黑+"#  #k[ #t"+中級黑+"# ] -#r（五顆）#l#k\r\n");
                    break;
					case 100:
						store3 = true;
						cm.sendSimple(
						  "歡迎來到#r藍寶石#k系列改造頁面，請選擇一個等級的寶石進行改造。\r\n"+
						  "#b#L200##k#v"+下級藍+"# 使用#b#t"+下級藍+"##k進行改造 = #r魔法攻擊力增加 ( 1 ) #l#k\r\n"+
						  "#b#L201##k#v"+中級藍+"# 使用#b#t"+中級藍+"##k進行改造 = #r魔法攻擊力增加 ( 2 ) #l#k\r\n"+
						  "#b#L202##k#v"+上級藍+"# 使用#b#t"+上級藍+"##k進行改造 = #r魔法攻擊力增加 ( 3 ) #l#k\r\n");
                    break;
					case 101:
						store3 = true;
						cm.sendSimple(
						  "歡迎來到#r石榴石#k系列改造頁面，請選擇一個等級的寶石進行改造。\r\n"+
						  "#b#L210##k#v"+下級石+"# 使用#b#t"+下級石+"##k進行改造 = #r血量增加 ( 10 ) #l#k\r\n"+
						  "#b#L211##k#v"+中級石+"# 使用#b#t"+中級石+"##k進行改造 = #r血量增加 ( 20 ) #l#k\r\n"+
						  "#b#L212##k#v"+上級石+"# 使用#b#t"+上級石+"##k進行改造 = #r血量增加 ( 30 ) #l#k\r\n");
                    break;
					case 102:
						store3 = true;
						cm.sendSimple(
						  "歡迎來到#r蛋白石#k系列改造頁面，請選擇一個等級的寶石進行改造。\r\n"+
						  "#b#L220##k#v"+下級蛋+"# 使用#b#t"+下級蛋+"##k進行改造 = #r攻擊力增加 ( 1 ) #l#k\r\n"+
						  "#b#L221##k#v"+中級蛋+"# 使用#b#t"+中級蛋+"##k進行改造 = #r攻擊力增加 ( 2 ) #l#k\r\n"+
						  "#b#L222##k#v"+上級蛋+"# 使用#b#t"+上級蛋+"##k進行改造 = #r攻擊力增加 ( 3 ) #l#k\r\n");
                    break;
					case 103:
						store3 = true;
						cm.sendSimple(
						  "歡迎來到#r紫水晶#k系列改造頁面，請選擇一個等級的寶石進行改造。\r\n"+
						  "#b#L230##k#v"+下級紫+"# 使用#b#t"+下級紫+"##k進行改造 = #r命中率增加 ( 1 ) #l#k\r\n"+
						  "#b#L231##k#v"+中級紫+"# 使用#b#t"+中級紫+"##k進行改造 = #r命中率增加 ( 2 ) #l#k\r\n"+
						  "#b#L232##k#v"+上級紫+"# 使用#b#t"+上級紫+"##k進行改造 = #r命中率增加 ( 3 ) #l#k\r\n");
                    break;
					case 104:
						store3 = true;
						cm.sendSimple(
						  "歡迎來到#r海海寶石#k系列改造頁面，請選擇一個等級的寶石進行改造。\r\n"+
						  "#b#L240##k#v"+下級海+"# 使用#b#t"+下級海+"##k進行改造 = #r魔力增加 ( 10 ) #l#k\r\n"+
						  "#b#L241##k#v"+中級海+"# 使用#b#t"+中級海+"##k進行改造 = #r魔力增加 ( 20 ) #l#k\r\n"+
						  "#b#L242##k#v"+上級海+"# 使用#b#t"+上級海+"##k進行改造 = #r魔力增加 ( 30 ) #l#k\r\n");
                    break;
					case 105:
						store3 = true;
						cm.sendSimple(
						  "歡迎來到#r黃晶#k系列改造頁面，請選擇一個等級的寶石進行改造。\r\n"+
						  "#b#L250##k#v"+下級黃+"# 使用#b#t"+下級黃+"##k進行改造 = #r防禦力增加 ( 5 ) #l#k\r\n"+
						  "#b#L251##k#v"+中級黃+"# 使用#b#t"+中級黃+"##k進行改造 = #r防禦力增加 ( 10 ) #l#k\r\n"+
						  "#b#L252##k#v"+上級黃+"# 使用#b#t"+上級黃+"##k進行改造 = #r防禦力增加 ( 20 ) #l#k\r\n");
                    break;
					case 106:
						store3 = true;
						cm.sendSimple(
						  "歡迎來到#r祖母綠#k系列改造頁面，請選擇一個等級的寶石進行改造。\r\n"+
						  "#b#L260##k#v"+下級祖+"# 使用#b#t"+下級祖+"##k進行改造 = #r魔法防禦力增加 ( 5 ) #l#k\r\n"+
						  "#b#L261##k#v"+中級祖+"# 使用#b#t"+中級祖+"##k進行改造 = #r魔法防禦力增加 ( 10 ) #l#k\r\n"+
						  "#b#L262##k#v"+上級祖+"# 使用#b#t"+上級祖+"##k進行改造 = #r魔法防禦力增加 ( 20 ) #l#k\r\n");
                    break;
					case 107:
						store3 = true;
						cm.sendSimple(
						  "歡迎來到#r黑水晶#k系列改造頁面，請選擇一個等級的寶石進行改造。\r\n"+
						  "#b#L270##k#v"+下級黑+"# 使用#b#t"+下級黑+"##k進行改造 = #r迴避率增加 ( 1 ) #l#k\r\n"+
						  "#b#L271##k#v"+中級黑+"# 使用#b#t"+中級黑+"##k進行改造 = #r迴避率增加 ( 2 ) #l#k\r\n"+
						  "#b#L272##k#v"+上級黑+"# 使用#b#t"+上級黑+"##k進行改造 = #r迴避率增加 ( 3 ) #l#k\r\n");
                    break;
				
				}
				
            }else if(裝備查詢){
				slot = selection;
				item = cm.getChar().itemid(slot);
				裝備查詢2 = true;
				if (item==0 || item==1122000 || item==1122076 || item==1012164 || item==1012167 || item==1012168 || item==1012169 || item==1012170 || item==1012171 || item==1012172 || item==1012173 || item==1012174 || item==1112405 || item==1112413 || item==1112414 || item==1112445 || item==1122024 || item==1122025 || item==1122026 || item==1122027 || item==1122028 || item==1122029 || item==1122030 || item==1122031 || item==1122032 || item==1122033 || item==1122034 || item==1122035 || item==1122036 || item==1122037 || item==1122038 || item==1122058){
                cm.sendOk("你輸入的物品位置沒有裝備或是該裝備不能查詢!")
                cm.dispose();
            }else               
				cm.sendYesNo("您要查詢的是這項裝備對嗎？\r\n\r\n#i"+item+"# #b#t"+item+"#");
			} else {
                cm.sendSimple("您沒有足夠的道具喔");
				cm.dispose();
            }
        } else if (status == 4) {
            if (store3) {
                switch (selection) {
					case 20:
						if (cm.haveItem(4007002 ,100) >= true && cm.haveItem(4007001 ,100) >= true ) {
						cm.gainItem(4007002 ,-100);
						cm.gainItem(4007001 ,-100);
						cm.gainItem(下級藍,1); 
						cm.sendOk("做得很好，完成#v"+下級藍+"#  #k【 #t"+下級藍+"# 】 " + 1 + "個");
							cm.dispose();
						}else{
							cm.sendOk("您準備的道具數量不足，請在確認。");
							cm.dispose();
						}
					break;
					case 21:
						if (cm.haveItem(4007006 ,100) >= true) {
						cm.gainItem(4007006 ,-100);
						cm.gainItem(下級石,1); 
						cm.sendOk("做得很好，完成#i" + 下級石 + "#" + 1 + "個");
							cm.dispose();
						}else{
							cm.sendOk("您準備的道具數量不足，請在確認。");
							cm.dispose();
						}
					break;
					case 22:
						if (cm.haveItem(4007002 ,50) >= true && cm.haveItem(4007003 ,50) >= true  && cm.haveItem(4007004 ,50) >= true  && cm.haveItem(4007001 ,50) >= true  && cm.haveItem(4007006 ,50) >= true ) {
						cm.gainItem(4007002 ,-50);
						cm.gainItem(4007003 ,-50);
						cm.gainItem(4007004 ,-50);
						cm.gainItem(4007001 ,-50);
						cm.gainItem(4007006 ,-50);
						cm.gainItem(下級蛋,1); 
						cm.sendOk("做得很好，完成#i" + 下級蛋 + "#" + 1 + "個");
							cm.dispose();
						}else{
							cm.sendOk("您準備的道具數量不足，請在確認。");
							cm.dispose();
						}
					break;
					case 23:
						if (cm.haveItem(4007005 ,100) >= true) {
						cm.gainItem(4007005 ,-100);
						cm.gainItem(下級紫,1); 
						cm.sendOk("做得很好，完成#i" + 下級紫 + "#" + 1 + "個");
							cm.dispose();
						}else{
							cm.sendOk("您準備的道具數量不足，請在確認。");
							cm.dispose();
						}
					break;
					case 24:
						if (cm.haveItem(4007002 ,100) >= true) {
						cm.gainItem(4007002 ,-100);
						cm.gainItem(下級海,1); 
						cm.sendOk("做得很好，完成#i" + 下級海 + "#" + 1 + "個");
							cm.dispose();
						}else{
							cm.sendOk("您準備的道具數量不足，請在確認。");
							cm.dispose();
						}
					break;
					case 25:
						if (cm.haveItem(4007004 ,100) >= true) {
						cm.gainItem(4007004 ,-100);
						cm.gainItem(下級黃,1); 
						cm.sendOk("做得很好，完成#i" + 下級黃 + "#" + 1 + "個");
							cm.dispose();
						}else{
							cm.sendOk("您準備的道具數量不足，請在確認。");
							cm.dispose();
						}
					break;
					case 26:
						if (cm.haveItem(4007003 ,100) >= true) {
						cm.gainItem(4007003 ,-100);
						cm.gainItem(下級祖,1); 
						cm.sendOk("做得很好，完成#i" + 下級祖 + "#" + 1 + "個");
							cm.dispose();
						}else{
							cm.sendOk("您準備的道具數量不足，請在確認。");
							cm.dispose();
						}
					break;
					case 27:
						if (cm.haveItem(4007007 ,100) >= true) {
						cm.gainItem(4007007 ,-100);
						cm.gainItem(下級黑,1); 
						cm.sendOk("做得很好，完成#i" + 下級黑 + "#" + 1 + "個");
							cm.dispose();
						}else{
							cm.sendOk("您準備的道具數量不足，請在確認。");
							cm.dispose();
						}
					break;
					case 30:
						if (cm.haveItem(下級藍 ,5) >= true) {
						cm.gainItem(下級藍 ,-5);
						cm.gainItem(中級藍,1); 
						cm.sendOk("做得很好，完成#v"+中級藍+"#  #k【 #t"+中級藍+"# 】 " + 1 + "個");
							cm.dispose();
						}else{
							cm.sendOk("您準備的道具數量不足，請在確認。");
							cm.dispose();
						}
					break;
					case 31:
						if (cm.haveItem(下級石 ,5) >= true) {
						cm.gainItem(下級石 ,-5);
						cm.gainItem(中級石,1); 
						cm.sendOk("做得很好，完成#v"+中級石+"#  #k【 #t"+中級石+"# 】 " + 1 + "個");
							cm.dispose();
						}else{
							cm.sendOk("您準備的道具數量不足，請在確認。");
							cm.dispose();
						}
					break;
					case 32:
						if (cm.haveItem(下級蛋 ,5) >= true) {
						cm.gainItem(下級蛋 ,-5);
						cm.gainItem(中級蛋,1); 
						cm.sendOk("做得很好，完成#v"+中級蛋+"#  #k【 #t"+中級蛋+"# 】 " + 1 + "個");
							cm.dispose();
						}else{
							cm.sendOk("您準備的道具數量不足，請在確認。");
							cm.dispose();
						}
					break;
					case 33:
						if (cm.haveItem(下級紫 ,5) >= true) {
						cm.gainItem(下級紫 ,-5);
						cm.gainItem(中級紫,1); 
						cm.sendOk("做得很好，完成#v"+中級紫+"#  #k【 #t"+中級紫+"# 】 " + 1 + "個");
							cm.dispose();
						}else{
							cm.sendOk("您準備的道具數量不足，請在確認。");
							cm.dispose();
						}
					break;
					case 34:
						if (cm.haveItem(下級海 ,5) >= true) {
						cm.gainItem(下級海 ,-5);
						cm.gainItem(中級海,1); 
						cm.sendOk("做得很好，完成#v"+中級海+"#  #k【 #t"+中級海+"# 】 " + 1 + "個");
							cm.dispose();
						}else{
							cm.sendOk("您準備的道具數量不足，請在確認。");
							cm.dispose();
						}
					break;
					case 35:
						if (cm.haveItem(下級黃 ,5) >= true) {
						cm.gainItem(下級黃 ,-5);
						cm.gainItem(中級黃,1); 
						cm.sendOk("做得很好，完成#v"+中級黃+"#  #k【 #t"+中級黃+"# 】 " + 1 + "個");
							cm.dispose();
						}else{
							cm.sendOk("您準備的道具數量不足，請在確認。");
							cm.dispose();
						}
					break;
					case 36:
						if (cm.haveItem(下級祖 ,5) >= true) {
						cm.gainItem(下級祖 ,-5);
						cm.gainItem(中級祖,1); 
						cm.sendOk("做得很好，完成#v"+中級祖+"#  #k【 #t"+中級祖+"# 】 " + 1 + "個");
							cm.dispose();
						}else{
							cm.sendOk("您準備的道具數量不足，請在確認。");
							cm.dispose();
						}
					break;
					case 37:
						if (cm.haveItem(下級黑 ,5) >= true) {
						cm.gainItem(下級黑 ,-5);
						cm.gainItem(中級黑,1); 
						cm.sendOk("做得很好，完成#v"+中級黑+"#  #k【 #t"+中級黑+"# 】 " + 1 + "個");
							cm.dispose();
						}else{
							cm.sendOk("您準備的道具數量不足，請在確認。");
							cm.dispose();
						}
					break;
					case 40:
						if (cm.haveItem(中級藍 ,5) >= true) {
						cm.gainItem(中級藍 ,-5);
						cm.gainItem(上級藍,1); 
						cm.sendOk("做得很好，完成#v"+上級藍+"#  #k【 #t"+上級藍+"# 】 " + 1 + "個");
							cm.dispose();
						}else{
							cm.sendOk("您準備的道具數量不足，請在確認。");
							cm.dispose();
						}
					break;
					case 41:
						if (cm.haveItem(中級石 ,5) >= true) {
						cm.gainItem(中級石 ,-5);
						cm.gainItem(上級石,1); 
						cm.sendOk("做得很好，完成#v"+上級石+"#  #k【 #t"+上級石+"# 】 " + 1 + "個");
							cm.dispose();
						}else{
							cm.sendOk("您準備的道具數量不足，請在確認。");
							cm.dispose();
						}
					break;
					case 42:
						if (cm.haveItem(中級蛋 ,5) >= true) {
						cm.gainItem(中級蛋 ,-5);
						cm.gainItem(上級蛋,1); 
						cm.sendOk("做得很好，完成#v"+上級蛋+"#  #k【 #t"+上級蛋+"# 】 " + 1 + "個");
							cm.dispose();
						}else{
							cm.sendOk("您準備的道具數量不足，請在確認。");
							cm.dispose();
						}
					break;
					case 43:
						if (cm.haveItem(中級紫 ,5) >= true) {
						cm.gainItem(中級紫 ,-5);
						cm.gainItem(上級紫,1); 
						cm.sendOk("做得很好，完成#v"+上級紫+"#  #k【 #t"+上級紫+"# 】 " + 1 + "個");
							cm.dispose();
						}else{
							cm.sendOk("您準備的道具數量不足，請在確認。");
							cm.dispose();
						}
					break;
					case 44:
						if (cm.haveItem(中級海 ,5) >= true) {
						cm.gainItem(中級海 ,-5);
						cm.gainItem(上級海,1); 
						cm.sendOk("做得很好，完成#v"+上級海+"#  #k【 #t"+上級海+"# 】 " + 1 + "個");
							cm.dispose();
						}else{
							cm.sendOk("您準備的道具數量不足，請在確認。");
							cm.dispose();
						}
					break;
					case 45:
						if (cm.haveItem(中級黃 ,5) >= true) {
						cm.gainItem(中級黃 ,-5);
						cm.gainItem(上級黃,1); 
						cm.sendOk("做得很好，完成#v"+上級黃+"#  #k【 #t"+上級黃+"# 】 " + 1 + "個");
							cm.dispose();
						}else{
							cm.sendOk("您準備的道具數量不足，請在確認。");
							cm.dispose();
						}
					break;
					case 46:
						if (cm.haveItem(中級祖 ,5) >= true) {
						cm.gainItem(中級祖 ,-5);
						cm.gainItem(上級祖,1); 
						cm.sendOk("做得很好，完成#v"+上級祖+"#  #k【 #t"+上級祖+"# 】 " + 1 + "個");
							cm.dispose();
						}else{
							cm.sendOk("您準備的道具數量不足，請在確認。");
							cm.dispose();
						}
					break;
					case 47:
						if (cm.haveItem(中級黑 ,5) >= true) {
						cm.gainItem(中級黑 ,-5);
						cm.gainItem(上級黑,1); 
						cm.sendOk("做得很好，完成#v"+上級黑+"#  #k【 #t"+上級黑+"# 】 " + 1 + "個");
							cm.dispose();
						}else{
							cm.sendOk("您準備的道具數量不足，請在確認。");
							cm.dispose();
						}
					break;
					/*起頭*/
					case 200:
						下級藍改造 = true;
						cm.sendGetNumber("如已確認慾改造裝備已在第一行第一列,請在欄位中填寫數字 1 . "+
										 "\r\n 本次改造將會消耗#v"+下級藍+"#  #k【 #t"+下級藍+"# 】 。\r\n"+
										 "#b[ 注意：此功能只可使用於裝備欄！]#k#l",1,1,100);
					break;
					case 201:
						中級藍改造 = true;
						cm.sendGetNumber("如已確認慾改造裝備已在第一行第一列,請在欄位中填寫數字 1 . "+
										 "\r\n 本次改造將會消耗#v"+中級藍+"#  #k【 #t"+中級藍+"# 】 。\r\n"+
										 "#b[ 注意：此功能只可使用於裝備欄！]#k#l",1,1,100);
					break;
					case 202:
						上級藍改造 = true;
						cm.sendGetNumber("如已確認慾改造裝備已在第一行第一列,請在欄位中填寫數字 1 . "+
										 "\r\n 本次改造將會消耗#v"+上級藍+"#  #k【 #t"+上級藍+"# 】 。\r\n"+
										 "#b[ 注意：此功能只可使用於裝備欄！]#k#l",1,1,100);
					break;
					/*起頭*/
					case 210:
						下級石改造 = true;
						cm.sendGetNumber("如已確認慾改造裝備已在第一行第一列,請在欄位中填寫數字 1 . "+
										 "\r\n 本次改造將會消耗#v"+下級石+"#  #k【 #t"+下級石+"# 】 。\r\n"+
										 "#b[ 注意：此功能只可使用於裝備欄！]#k#l",1,1,100);
					break;
					case 211:
						中級石改造 = true;
						cm.sendGetNumber("如已確認慾改造裝備已在第一行第一列,請在欄位中填寫數字 1 . "+
										 "\r\n 本次改造將會消耗#v"+中級石+"#  #k【 #t"+中級石+"# 】 。\r\n"+
										 "#b[ 注意：此功能只可使用於裝備欄！]#k#l",1,1,100);
					break;
					case 212:
						上級石改造 = true;
						cm.sendGetNumber("如已確認慾改造裝備已在第一行第一列,請在欄位中填寫數字 1 . "+
										 "\r\n 本次改造將會消耗#v"+上級石+"#  #k【 #t"+上級石+"# 】 。\r\n"+
										 "#b[ 注意：此功能只可使用於裝備欄！]#k#l",1,1,100);
					break;
					/*起頭*/
					case 220:
						下級蛋改造 = true;
						cm.sendGetNumber("如已確認慾改造裝備已在第一行第一列,請在欄位中填寫數字 1 . "+
										 "\r\n 本次改造將會消耗#v"+下級蛋+"#  #k【 #t"+下級蛋+"# 】 。\r\n"+
										 "#b[ 注意：此功能只可使用於裝備欄！]#k#l",1,1,100);
					break;
					case 221:
						中級蛋改造 = true;
						cm.sendGetNumber("如已確認慾改造裝備已在第一行第一列,請在欄位中填寫數字 1 . "+
										 "\r\n 本次改造將會消耗#v"+中級蛋+"#  #k【 #t"+中級蛋+"# 】 。\r\n"+
										 "#b[ 注意：此功能只可使用於裝備欄！]#k#l",1,1,100);
					break;
					case 222:
						上級蛋改造 = true;
						cm.sendGetNumber("如已確認慾改造裝備已在第一行第一列,請在欄位中填寫數字 1 . "+
										 "\r\n 本次改造將會消耗#v"+上級蛋+"#  #k【 #t"+上級蛋+"# 】 。\r\n"+
										 "#b[ 注意：此功能只可使用於裝備欄！]#k#l",1,1,100);
					break;
					/*起頭*/
					case 230:
						下級紫改造 = true;
						cm.sendGetNumber("如已確認慾改造裝備已在第一行第一列,請在欄位中填寫數字 1 . "+
										 "\r\n 本次改造將會消耗#v"+下級紫+"#  #k【 #t"+下級紫+"# 】 。\r\n"+
										 "#b[ 注意：此功能只可使用於裝備欄！]#k#l",1,1,100);
					break;
					case 231:
						中級紫改造 = true;
						cm.sendGetNumber("如已確認慾改造裝備已在第一行第一列,請在欄位中填寫數字 1 . "+
										 "\r\n 本次改造將會消耗#v"+中級紫+"#  #k【 #t"+中級紫+"# 】 。\r\n"+
										 "#b[ 注意：此功能只可使用於裝備欄！]#k#l",1,1,100);
					break;
					case 232:
						上級紫改造 = true;
						cm.sendGetNumber("如已確認慾改造裝備已在第一行第一列,請在欄位中填寫數字 1 . "+
										 "\r\n 本次改造將會消耗#v"+上級紫+"#  #k【 #t"+上級紫+"# 】 。\r\n"+
										 "#b[ 注意：此功能只可使用於裝備欄！]#k#l",1,1,100);
					break;
					/*起頭*/
					case 240:
						下級海改造 = true;
						cm.sendGetNumber("如已確認慾改造裝備已在第一行第一列,請在欄位中填寫數字 1 . "+
										 "\r\n 本次改造將會消耗#v"+下級海+"#  #k【 #t"+下級海+"# 】 。\r\n"+
										 "#b[ 注意：此功能只可使用於裝備欄！]#k#l",1,1,100);
					break;
					case 241:
						中級海改造 = true;
						cm.sendGetNumber("如已確認慾改造裝備已在第一行第一列,請在欄位中填寫數字 1 . "+
										 "\r\n 本次改造將會消耗#v"+中級海+"#  #k【 #t"+中級海+"# 】 。\r\n"+
										 "#b[ 注意：此功能只可使用於裝備欄！]#k#l",1,1,100);
					break;
					case 242:
						上級海改造 = true;
						cm.sendGetNumber("如已確認慾改造裝備已在第一行第一列,請在欄位中填寫數字 1 . "+
										 "\r\n 本次改造將會消耗#v"+上級海+"#  #k【 #t"+上級海+"# 】 。\r\n"+
										 "#b[ 注意：此功能只可使用於裝備欄！]#k#l",1,1,100);
					break;
					/*起頭*/
					case 250:
						下級黃改造 = true;
						cm.sendGetNumber("如已確認慾改造裝備已在第一行第一列,請在欄位中填寫數字 1 . "+
										 "\r\n 本次改造將會消耗#v"+下級黃+"#  #k【 #t"+下級黃+"# 】 。\r\n"+
										 "#b[ 注意：此功能只可使用於裝備欄！]#k#l",1,1,100);
					break;
					case 251:
						中級黃改造 = true;
						cm.sendGetNumber("如已確認慾改造裝備已在第一行第一列,請在欄位中填寫數字 1 . "+
										 "\r\n 本次改造將會消耗#v"+中級黃+"#  #k【 #t"+中級黃+"# 】 。\r\n"+
										 "#b[ 注意：此功能只可使用於裝備欄！]#k#l",1,1,100);
					break;
					case 252:
						上級黃改造 = true;
						cm.sendGetNumber("如已確認慾改造裝備已在第一行第一列,請在欄位中填寫數字 1 . "+
										 "\r\n 本次改造將會消耗#v"+上級黃+"#  #k【 #t"+上級黃+"# 】 。\r\n"+
										 "#b[ 注意：此功能只可使用於裝備欄！]#k#l",1,1,100);
					break;
					/*起頭*/
					case 260:
						下級祖改造 = true;
						cm.sendGetNumber("如已確認慾改造裝備已在第一行第一列,請在欄位中填寫數字 1 . "+
										 "\r\n 本次改造將會消耗#v"+下級祖+"#  #k【 #t"+下級祖+"# 】 。\r\n"+
										 "#b[ 注意：此功能只可使用於裝備欄！]#k#l",1,1,100);
					break;
					case 261:
						中級祖改造 = true;
						cm.sendGetNumber("如已確認慾改造裝備已在第一行第一列,請在欄位中填寫數字 1 . "+
										 "\r\n 本次改造將會消耗#v"+中級祖+"#  #k【 #t"+中級祖+"# 】 。\r\n"+
										 "#b[ 注意：此功能只可使用於裝備欄！]#k#l",1,1,100);
					break;
					case 262:
						上級祖改造 = true;
						cm.sendGetNumber("如已確認慾改造裝備已在第一行第一列,請在欄位中填寫數字 1 . "+
										 "\r\n 本次改造將會消耗#v"+上級祖+"#  #k【 #t"+上級祖+"# 】 。\r\n"+
										 "#b[ 注意：此功能只可使用於裝備欄！]#k#l",1,1,100);
					break;
					/*起頭*/
					case 270:
						下級黑改造 = true;
						cm.sendGetNumber("如已確認慾改造裝備已在第一行第一列,請在欄位中填寫數字 1 . "+
										 "\r\n 本次改造將會消耗#v"+下級黑+"#  #k【 #t"+下級黑+"# 】 。\r\n"+
										 "#b[ 注意：此功能只可使用於裝備欄！]#k#l",1,1,100);
					break;
					case 271:
						中級黑改造 = true;
						cm.sendGetNumber("如已確認慾改造裝備已在第一行第一列,請在欄位中填寫數字 1 . "+
										 "\r\n 本次改造將會消耗#v"+中級黑+"#  #k【 #t"+中級黑+"# 】 。\r\n"+
										 "#b[ 注意：此功能只可使用於裝備欄！]#k#l",1,1,100);
					break;
					case 272:
						上級黑改造 = true;
						cm.sendGetNumber("如已確認慾改造裝備已在第一行第一列,請在欄位中填寫數字 1 . "+
										 "\r\n 本次改造將會消耗#v"+上級黑+"#  #k【 #t"+上級黑+"# 】 。\r\n"+
										 "#b[ 注意：此功能只可使用於裝備欄！]#k#l",1,1,100);
					break;
					
                }
            }else if(裝備查詢2){
				var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(slot).copy();	
				cm.sendOk("以下是該裝備各項敲打次數，請查看。\r\n" +
						  " 總敲打次數為#k = #b（"+item.getReform()+"）#k 次\r\n " +
						  "#r藍寶石#k系列共敲打了 = #b（"+item.getSapphire()+"）#k 次\r\n " +
						  "#r石榴石#k系列共敲打了 = #b（"+item.getGarnet()+"）#k 次\r\n " +
						  "#r蛋白石#k系列共敲打了 = #b（"+item.getOpal()+"）#k 次\r\n " +
						  "#r紫水晶#k系列共敲打了 = #b（"+item.getAmethyst()+"）#k 次\r\n " +
						  "#r海藍寶石#k系列共敲打了 = #b（"+item.getAquamarine()+"）#k 次\r\n " +
						  "#r黃晶#k系列共敲打了 = #b（"+item.getHuangJing()+"）#k 次\r\n " +
						  "#r祖母綠#k系列共敲打了 = #b（"+item.getEmerald()+"）#k 次\r\n " +
						  "#r黑水晶#k系列共敲打了 = #b（"+item.getBlackCrystal()+"）#k 次\r\n " +
						  "#k一件裝備改造上限次數為 #r30#k 次#k");
						  cm.dispose();
				
			} else{
                cm.sendOk("發生未知的錯誤");
				cm.dispose();
            }
        } else if (status == 5) {
			/*起頭*/
			if (下級藍改造) {
					下級藍改造2 = true;
					slot = selection;
					item = cm.getChar().itemid(slot);
					if (cm.haveItem(1112949 ,1) == true ){						
						cm.sendYesNo("你確定要把下面這件裝備增加素質嗎？\r\n\r\n#i"+item+"# #b#t"+item+"#");												
					}
			}else if (中級藍改造) {
					中級藍改造2 = true;
					slot = selection;
					item = cm.getChar().itemid(slot);
					if (cm.haveItem(1112949 ,1) == true ){						
						cm.sendYesNo("你確定要把下面這件裝備增加素質嗎？\r\n\r\n#i"+item+"# #b#t"+item+"#");												
					}
			}else if (上級藍改造) {
					上級藍改造2 = true;
					slot = selection;
					item = cm.getChar().itemid(slot);
					if (cm.haveItem(1112949 ,1) == true ){						
						cm.sendYesNo("你確定要把下面這件裝備增加素質嗎？\r\n\r\n#i"+item+"# #b#t"+item+"#");												
					}
			}/*起頭*/
			else if (下級石改造) {
					下級石改造2 = true;
					slot = selection;
					item = cm.getChar().itemid(slot);
					if (cm.haveItem(1112949 ,1) == true ){						
						cm.sendYesNo("你確定要把下面這件裝備增加素質嗎？\r\n\r\n#i"+item+"# #b#t"+item+"#");												
					}
			}else if (中級石改造) {
					中級石改造2 = true;
					slot = selection;
					item = cm.getChar().itemid(slot);
					if (cm.haveItem(1112949 ,1) == true ){						
						cm.sendYesNo("你確定要把下面這件裝備增加素質嗎？\r\n\r\n#i"+item+"# #b#t"+item+"#");												
					}
			}else if (上級石改造) {
					上級石改造2 = true;
					slot = selection;
					item = cm.getChar().itemid(slot);
					if (cm.haveItem(1112949 ,1) == true ){						
						cm.sendYesNo("你確定要把下面這件裝備增加素質嗎？\r\n\r\n#i"+item+"# #b#t"+item+"#");												
					}
			}/*起頭*/
			else if (下級蛋改造) {
					下級蛋改造2 = true;
					slot = selection;
					item = cm.getChar().itemid(slot);
					if (cm.haveItem(1112949 ,1) == true ){						
						cm.sendYesNo("你確定要把下面這件裝備增加素質嗎？\r\n\r\n#i"+item+"# #b#t"+item+"#");												
					}
			}else if (中級蛋改造) {
					中級蛋改造2 = true;
					slot = selection;
					item = cm.getChar().itemid(slot);
					if (cm.haveItem(1112949 ,1) == true ){						
						cm.sendYesNo("你確定要把下面這件裝備增加素質嗎？\r\n\r\n#i"+item+"# #b#t"+item+"#");												
					}
			}else if (上級蛋改造) {
					上級蛋改造2 = true;
					slot = selection;
					item = cm.getChar().itemid(slot);
					if (cm.haveItem(1112949 ,1) == true ){						
						cm.sendYesNo("你確定要把下面這件裝備增加素質嗎？\r\n\r\n#i"+item+"# #b#t"+item+"#");												
					}
			}/*起頭*/
			else if (下級紫改造) {
					下級紫改造2 = true;
					slot = selection;
					item = cm.getChar().itemid(slot);
					if (cm.haveItem(1112949 ,1) == true ){						
						cm.sendYesNo("你確定要把下面這件裝備增加素質嗎？\r\n\r\n#i"+item+"# #b#t"+item+"#");												
					}
			}else if (中級紫改造) {
					中級紫改造2 = true;
					slot = selection;
					item = cm.getChar().itemid(slot);
					if (cm.haveItem(1112949 ,1) == true ){						
						cm.sendYesNo("你確定要把下面這件裝備增加素質嗎？\r\n\r\n#i"+item+"# #b#t"+item+"#");												
					}
			}else if (上級紫改造) {
					上級紫改造2 = true;
					slot = selection;
					item = cm.getChar().itemid(slot);
					if (cm.haveItem(1112949 ,1) == true ){						
						cm.sendYesNo("你確定要把下面這件裝備增加素質嗎？\r\n\r\n#i"+item+"# #b#t"+item+"#");												
					}
			}/*起頭*/
			else if (下級海改造) {
					下級海改造2 = true;
					slot = selection;
					item = cm.getChar().itemid(slot);
					if (cm.haveItem(1112949 ,1) == true ){						
						cm.sendYesNo("你確定要把下面這件裝備增加素質嗎？\r\n\r\n#i"+item+"# #b#t"+item+"#");												
					}
			}else if (中級海改造) {
					中級海改造2 = true;
					slot = selection;
					item = cm.getChar().itemid(slot);
					if (cm.haveItem(1112949 ,1) == true ){						
						cm.sendYesNo("你確定要把下面這件裝備增加素質嗎？\r\n\r\n#i"+item+"# #b#t"+item+"#");												
					}
			}else if (上級海改造) {
					上級海改造2 = true;
					slot = selection;
					item = cm.getChar().itemid(slot);
					if (cm.haveItem(1112949 ,1) == true ){						
						cm.sendYesNo("你確定要把下面這件裝備增加素質嗎？\r\n\r\n#i"+item+"# #b#t"+item+"#");												
					}
			}/*起頭*/
			else if (下級黃改造) {
					下級黃改造2 = true;
					slot = selection;
					item = cm.getChar().itemid(slot);
					if (cm.haveItem(1112949 ,1) == true ){						
						cm.sendYesNo("你確定要把下面這件裝備增加素質嗎？\r\n\r\n#i"+item+"# #b#t"+item+"#");												
					}
			}else if (中級黃改造) {
					中級黃改造2 = true;
					slot = selection;
					item = cm.getChar().itemid(slot);
					if (cm.haveItem(1112949 ,1) == true ){						
						cm.sendYesNo("你確定要把下面這件裝備增加素質嗎？\r\n\r\n#i"+item+"# #b#t"+item+"#");												
					}
			}else if (上級黃改造) {
					上級黃改造2 = true;
					slot = selection;
					item = cm.getChar().itemid(slot);
					if (cm.haveItem(1112949 ,1) == true ){						
						cm.sendYesNo("你確定要把下面這件裝備增加素質嗎？\r\n\r\n#i"+item+"# #b#t"+item+"#");												
					}
			}/*起頭*/
			else if (下級祖改造) {
					下級祖改造2 = true;
					slot = selection;
					item = cm.getChar().itemid(slot);
					if (cm.haveItem(1112949 ,1) == true ){						
						cm.sendYesNo("你確定要把下面這件裝備增加素質嗎？\r\n\r\n#i"+item+"# #b#t"+item+"#");												
					}
			}else if (中級祖改造) {
					中級祖改造2 = true;
					slot = selection;
					item = cm.getChar().itemid(slot);
					if (cm.haveItem(1112949 ,1) == true ){						
						cm.sendYesNo("你確定要把下面這件裝備增加素質嗎？\r\n\r\n#i"+item+"# #b#t"+item+"#");												
					}
			}else if (上級祖改造) {
					上級祖改造2 = true;
					slot = selection;
					item = cm.getChar().itemid(slot);
					if (cm.haveItem(1112949 ,1) == true ){						
						cm.sendYesNo("你確定要把下面這件裝備增加素質嗎？\r\n\r\n#i"+item+"# #b#t"+item+"#");												
					}
			}/*起頭*/
			else if (下級黑改造) {
					下級黑改造2 = true;
					slot = selection;
					item = cm.getChar().itemid(slot);
					if (cm.haveItem(1112949 ,1) == true ){						
						cm.sendYesNo("你確定要把下面這件裝備增加素質嗎？\r\n\r\n#i"+item+"# #b#t"+item+"#");												
					}
			}else if (中級黑改造) {
					中級黑改造2 = true;
					slot = selection;
					item = cm.getChar().itemid(slot);
					if (cm.haveItem(1112949 ,1) == true ){						
						cm.sendYesNo("你確定要把下面這件裝備增加素質嗎？\r\n\r\n#i"+item+"# #b#t"+item+"#");												
					}
			}else if (上級黑改造) {
					上級黑改造2 = true;
					slot = selection;
					item = cm.getChar().itemid(slot);
					if (cm.haveItem(1112949 ,1) == true ){						
						cm.sendYesNo("你確定要把下面這件裝備增加素質嗎？\r\n\r\n#i"+item+"# #b#t"+item+"#");												
					}
			}else{
				cm.sendOk("你輸入的物品位置沒有裝備或是該裝備不能敲!");
				cm.dispose();
				}
		
		}else if (status == 6) {			
			var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(slot).copy();
			/*起頭*/			
			if (下級藍改造2 && cm.haveItem(下級藍 ,1) == true && item.getSapphire() <= 4  && item.getReform() <= 29) {
                var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(slot).copy();
                    cm.gainItem(下級藍,-1);
					cm.gainMeso(-500000);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setSapphire((item.getSapphire() + 1 )); //計算總改造次數
                    item.setMatk((item.getMatk() + 1 ));
					if (item.getSapphire() == 5) {
						item.setMatk((item.getMatk() + 5 ));
					}
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, slot, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了"+item.getReform()+"次\r\n" +
							  "#k裝備改造次數最高為 #r30#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (中級藍改造2 && cm.haveItem(中級藍 ,1) == true && item.getSapphire() <= 4  && item.getReform() <= 29) {
                var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(slot).copy();
                    cm.gainItem(中級藍,-1);
					cm.gainMeso(-1000000);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setSapphire((item.getSapphire() + 1 )); //計算總改造次數
                    item.setMatk((item.getMatk() + 2 ));
					if (item.getSapphire() == 5) {
						item.setMatk((item.getMatk() + 5 ));
					}
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, slot, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item);
                    cm.sendOk("恭喜您完成了本次寶石改造\r\n" +
							  "#k裝備改造次數最高為 #r30#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (上級藍改造2 && cm.haveItem(上級藍 ,1) == true && item.getSapphire() <= 4  && item.getReform() <= 29) {
                var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(slot).copy();
                    cm.gainItem(上級藍,-1);
					cm.gainMeso(-2000000);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setSapphire((item.getSapphire() + 1 )); //計算總改造次數
                    item.setMatk((item.getMatk() + 3 ));
					if (item.getSapphire() == 5) {
						item.setMatk((item.getMatk() + 5 ));
					}
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, slot, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item);
                    cm.sendOk("恭喜您完成了本次寶石改造\r\n" +
							  "#k裝備改造次數最高為 #r30#k 次，請謹慎分配#k");
                cm.dispose();
            }/*起頭*/ else if (下級石改造2 && cm.haveItem(下級石 ,1) == true && item.getGarnet() <= 9  && item.getReform() <= 29) {
                var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(slot).copy();
                    cm.gainItem(下級石,-1);
					cm.gainMeso(-500000);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setGarnet((item.getGarnet() + 1 )); //計算總改造次數
                    item.setHp((item.getHp() + 10 ));
					if (item.getGarnet() == 10) {
						item.setHp((item.getHp() + 300 ));
					}
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, slot, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item);
                    cm.sendOk("恭喜您完成了本次寶石改造\r\n" +
							  "#k裝備改造次數最高為 #r30#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (中級石改造2 && cm.haveItem(中級石 ,1) == true && item.getGarnet() <= 9  && item.getReform() <= 29) {
                var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(slot).copy();
                    cm.gainItem(中級石,-1);
					cm.gainMeso(-1000000);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setGarnet((item.getGarnet() + 1 )); //計算總改造次數
                    item.setHp((item.getHp() + 20 ));
					if (item.getGarnet() == 10) {
						item.setHp((item.getHp() + 300 ));
					}
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, slot, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item);
                    cm.sendOk("恭喜您完成了本次寶石改造\r\n" +
							  "#k裝備改造次數最高為 #r30#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (上級石改造2 && cm.haveItem(上級石 ,1) == true && item.getGarnet() <= 9  && item.getReform() <= 29) {
                var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(slot).copy();
                    cm.gainItem(上級石,-1);
					cm.gainMeso(-2000000);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setGarnet((item.getGarnet() + 1 )); //計算總改造次數
                    item.setHp((item.getHp() + 30 ));
					if (item.getGarnet() == 10) {
						item.setHp((item.getHp() + 300 ));
					}
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, slot, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item);
                    cm.sendOk("恭喜您完成了本次寶石改造\r\n" +
							  "#k裝備改造次數最高為 #r30#k 次，請謹慎分配#k");
                cm.dispose();
            }/*起頭*/else if (下級蛋改造2 && cm.haveItem(下級蛋 ,1) == true && item.getOpal() <= 4  && item.getReform() <= 29) {
                var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(slot).copy();
                    cm.gainItem(下級蛋,-1);
					cm.gainMeso(-500000);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setOpal((item.getOpal() + 1 )); //計算總改造次數
                    item.setWatk((item.getWatk() + 1 ));
					if (item.getOpal() == 5) {
						item.setWatk((item.getWatk() + 5 ));
					}
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, slot, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item);
                    cm.sendOk("恭喜您完成了本次寶石改造\r\n" +
							  "#k裝備改造次數最高為 #r30#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (中級蛋改造2 && cm.haveItem(中級蛋 ,1) == true && item.getOpal() <= 4  && item.getReform() <= 29) {
                var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(slot).copy();
                    cm.gainItem(中級蛋,-1);
					cm.gainMeso(-1000000);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setOpal((item.getOpal() + 1 )); //計算總改造次數
                    item.setWatk((item.getWatk() + 2 ));
					if (item.getOpal() == 5) {
						item.setWatk((item.getWatk() + 5 ));
					}
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, slot, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item);
                    cm.sendOk("恭喜您完成了本次寶石改造\r\n" +
							  "#k裝備改造次數最高為 #r30#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (上級蛋改造2 && cm.haveItem(上級蛋 ,1) == true && item.getOpal() <= 4  && item.getReform() <= 29) {
                var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(slot).copy();
                    cm.gainItem(上級蛋,-1);
					cm.gainMeso(-2000000);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setOpal((item.getOpal() + 1 )); //計算總改造次數
                    item.setWatk((item.getWatk() + 3 ));
					if (item.getOpal() == 5) {
						item.setWatk((item.getWatk() + 5 ));
					}
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, slot, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item);
                    cm.sendOk("恭喜您完成了本次寶石改造\r\n" +
							  "#k裝備改造次數最高為 #r30#k 次，請謹慎分配#k");
                cm.dispose();
            }/*起頭*/else if (下級紫改造2 && cm.haveItem(下級紫 ,1) == true && item.getAmethyst() <= 9  && item.getReform() <= 29) {
                var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(slot).copy();
                    cm.gainItem(下級紫,-1);
					cm.gainMeso(-500000);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setAmethyst((item.getAmethyst() + 1 )); //計算總改造次數
                    item.setAcc((item.getAcc() + 1 ));
					if (item.getAmethyst() == 10) {
						item.setAcc((item.getAcc() + 10 ));
					}
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, slot, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item);
                    cm.sendOk("恭喜您完成了本次寶石改造\r\n" +
							  "#k裝備改造次數最高為 #r30#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (中級紫改造2 && cm.haveItem(中級紫 ,1) == true && item.getAmethyst() <= 9  && item.getReform() <= 29) {
                var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(slot).copy();
                    cm.gainItem(中級紫,-1);
					cm.gainMeso(-1000000);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setAmethyst((item.getAmethyst() + 1 )); //計算總改造次數
                    item.setAcc((item.getAcc() + 2 ));
					if (item.getAmethyst() == 10) {
						item.setAcc((item.getAcc() + 10 ));
					}
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, slot, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item);
                    cm.sendOk("恭喜您完成了本次寶石改造\r\n" +
							  "#k裝備改造次數最高為 #r30#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (上級紫改造2 && cm.haveItem(上級紫 ,1) == true && item.getAmethyst() <= 9  && item.getReform() <= 29) {
                var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(slot).copy();
                    cm.gainItem(上級紫,-1);
					cm.gainMeso(-2000000);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setAmethyst((item.getAmethyst() + 1 )); //計算總改造次數
                    item.setAcc((item.getAcc() + 3 ));
					if (item.getAmethyst() == 10) {
						item.setAcc((item.getAcc() + 10 ));
					}
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, slot, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item);
                    cm.sendOk("恭喜您完成了本次寶石改造\r\n" +
							  "#k裝備改造次數最高為 #r30#k 次，請謹慎分配#k");
                cm.dispose();
            }/*起頭*/else if (下級海改造2 && cm.haveItem(下級海 ,1) == true && item.getAquamarine() <= 9  && item.getReform() <= 29) {
                var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(slot).copy();
                    cm.gainItem(下級海,-1);
					cm.gainMeso(-500000);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setAquamarine((item.getAquamarine() + 1 )); //計算總改造次數
                    item.setMp((item.getMp() + 10 ));
					if (item.getAquamarine() == 10) {
						item.setMp((item.getMp() + 300 ));
					}
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, slot, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item);
                    cm.sendOk("恭喜您完成了本次寶石改造\r\n" +
							  "#k裝備改造次數最高為 #r30#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (中級海改造2 && cm.haveItem(中級海 ,1) == true && item.getAquamarine() <= 9  && item.getReform() <= 29) {
                var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(slot).copy();
                    cm.gainItem(中級海,-1);
					cm.gainMeso(-1000000);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setAquamarine((item.getAquamarine() + 1 )); //計算總改造次數
                    item.setMp((item.getMp() + 20 ));
					if (item.getAquamarine() == 10) {
						item.setMp((item.getMp() + 300 ));
					}
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, slot, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item);
                    cm.sendOk("恭喜您完成了本次寶石改造\r\n" +
							  "#k裝備改造次數最高為 #r30#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (上級海改造2 && cm.haveItem(上級海 ,1) == true && item.getAquamarine() <= 9  && item.getReform() <= 29) {
                var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(slot).copy();
                    cm.gainItem(上級海,-1);
					cm.gainMeso(-2000000);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setAquamarine((item.getAquamarine() + 1 )); //計算總改造次數
                    item.setMp((item.getMp() + 30 ));
					if (item.getAquamarine() == 10) {
						item.setMp((item.getMp() + 300 ));
					}
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, slot, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item);
                    cm.sendOk("恭喜您完成了本次寶石改造\r\n" +
							  "#k裝備改造次數最高為 #r30#k 次，請謹慎分配#k");
                cm.dispose();
            }/*起頭*/else if (下級黃改造2 && cm.haveItem(下級黃 ,1) == true && item.getHuangJing() <= 4  && item.getReform() <= 29) {
                var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(slot).copy();
                    cm.gainItem(下級黃,-1);
					cm.gainMeso(-500000);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setHuangJing((item.getHuangJing() + 1 )); //計算總改造次數
                    item.setWdef((item.getWdef() + 5 ));
					if (item.getHuangJing() == 5) {
						item.setWdef((item.getWdef() + 50 ));
					}
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, slot, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item);
                    cm.sendOk("恭喜您完成了本次寶石改造\r\n" +
							  "#k裝備改造次數最高為 #r30#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (中級黃改造2 && cm.haveItem(中級黃 ,1) == true && item.getHuangJing() <= 4  && item.getReform() <= 29) {
                var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(slot).copy();
                    cm.gainItem(中級黃,-1);
					cm.gainMeso(-1000000);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setHuangJing((item.getHuangJing() + 1 )); //計算總改造次數
                    item.setWdef((item.getWdef() + 10 ));
					if (item.getHuangJing() == 5) {
						item.setWdef((item.getWdef() + 50 ));
					}
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, slot, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item);
                    cm.sendOk("恭喜您完成了本次寶石改造\r\n" +
							  "#k裝備改造次數最高為 #r30#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (上級黃改造2 && cm.haveItem(上級黃 ,1) == true && item.getHuangJing() <= 4  && item.getReform() <= 29) {
                var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(slot).copy();
                    cm.gainItem(上級黃,-1);
					cm.gainMeso(-2000000);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setHuangJing((item.getHuangJing() + 1 )); //計算總改造次數
                    item.setWdef((item.getWdef() + 20 ));
					if (item.getHuangJing() == 5) {
						item.setWdef((item.getWdef() + 50 ));
					}
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, slot, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item);
                    cm.sendOk("恭喜您完成了本次寶石改造\r\n" +
							  "#k裝備改造次數最高為 #r30#k 次，請謹慎分配#k");
                cm.dispose();
            }/*起頭*/else if (下級祖改造2 && cm.haveItem(下級祖 ,1) == true && item.getEmerald() <= 4  && item.getReform() <= 29) {
                var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(slot).copy();
                    cm.gainItem(下級祖,-1);
					cm.gainMeso(-500000);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setEmerald((item.getEmerald() + 1 )); //計算總改造次數
                    item.setMdef((item.getMdef() + 1 ));
					if (item.getEmerald() == 5) {
						item.setMdef((item.getMdef() + 50 ));
					}
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, slot, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item);
                    cm.sendOk("恭喜您完成了本次寶石改造\r\n" +
							  "#k裝備改造次數最高為 #r30#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (中級祖改造2 && cm.haveItem(中級祖 ,1) == true && item.getEmerald() <= 4  && item.getReform() <= 29) {
                var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(slot).copy();
                    cm.gainItem(中級祖,-1);
					cm.gainMeso(-1000000);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setEmerald((item.getEmerald() + 1 )); //計算總改造次數
                    item.setMdef((item.getMdef() + 2 ));
					if (item.getEmerald() == 5) {
						item.setMdef((item.getMdef() + 50 ));
					}
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, slot, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item);
                    cm.sendOk("恭喜您完成了本次寶石改造\r\n" +
							  "#k裝備改造次數最高為 #r30#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (上級祖改造2 && cm.haveItem(上級祖 ,1) == true && item.getEmerald() <= 4  && item.getReform() <= 29) {
                var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(slot).copy();
                    cm.gainItem(上級祖,-1);
					cm.gainMeso(-2000000);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setEmerald((item.getEmerald() + 1 )); //計算總改造次數
                    item.setMdef((item.getMdef() + 3 ));
					if (item.getEmerald() == 5) {
						item.setMdef((item.getMdef() + 50 ));
					}
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, slot, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item);
                    cm.sendOk("恭喜您完成了本次寶石改造\r\n" +
							  "#k裝備改造次數最高為 #r30#k 次，請謹慎分配#k");
                cm.dispose();
            }/*起頭*/else if (下級黑改造2 && cm.haveItem(下級黑 ,1) && item.getBlackCrystal() <= 9  && item.getReform() <= 29) {
                var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(slot).copy();
                    cm.gainItem(下級黑,-1);
					cm.gainMeso(-500000);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setBlackCrystal((item.getBlackCrystal() + 1 )); //計算總改造次數
                    item.setAvoid((item.getAvoid() + 1 ));
					if (item.getBlackCrystal() == 10) {
						item.setAvoid((item.getAvoid() + 10 ));
					}
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, slot, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item);
                    cm.sendOk("恭喜您完成了本次寶石改造\r\n" +
							  "#k裝備改造次數最高為 #r30#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (中級黑改造2 && cm.haveItem(中級黑 ,1) == true && item.getBlackCrystal() <= 9  && item.getReform() <= 29) {
                var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(slot).copy();
                    cm.gainItem(中級黑,-1);
					cm.gainMeso(-1000000);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setBlackCrystal((item.getBlackCrystal() + 1 )); //計算總改造次數
                    item.setAvoid((item.getAvoid() + 2 ));
					if (item.getBlackCrystal() == 10) {
						item.setAvoid((item.getAvoid() + 10 ));
					}
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, slot, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item);
                    cm.sendOk("恭喜您完成了本次寶石改造\r\n" +
							  "#k裝備改造次數最高為 #r30#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (上級黑改造2 && cm.haveItem(上級黑 ,1) == true && item.getBlackCrystal() <= 9  && item.getReform() <= 29) {
                var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(slot).copy();
                    cm.gainItem(上級黑,-1);
					cm.gainMeso(-2000000);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setBlackCrystal((item.getBlackCrystal() + 1 )); //計算總改造次數
                    item.setAvoid((item.getAvoid() + 3 ));
					if (item.getBlackCrystal() == 10) {
						item.setAvoid((item.getAvoid() + 10 ));
					}
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, slot, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item);
                    cm.sendOk("恭喜您完成了本次寶石改造\r\n" +
							  "#k裝備改造次數最高為 #r30#k 次，請謹慎分配#k");
                cm.dispose();
            }else{
                cm.sendOk("抱歉,您沒有改造石無法進行改造，可能原因如下\r\n\r\n"+
						  "#b1#k － #b您無該項目所需改造石\r\n"+
						  "#b2#k － #b您已達該項目上限改造次數\r\n"+
						  "#b3#k － #b您的楓幣不足\r\n"+
						  "#b4#k － #b您已達該項目上限總次數");
                cm.dispose();
            }
			
		}
    }
}