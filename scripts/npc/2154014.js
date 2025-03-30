load('nashorn:mozilla_compat.js');
/** Author: nejevoli
 NPC Name: 		NimaKin
 Map(s): 		Victoria Road : Ellinia (180000000)
 Description: 		Maxes out your stats and able to modify your equipment stats
 */

importPackage(java.lang);
importPackage(Packages.client.inventory);
importPackage(Packages.server);
importPackage(Packages.util);
importPackage(Packages.client);
var status = 0;
var slot = Array();
var stats = Array("力量", "敏捷", "智力", "幸運", "HP", "MP", "物理攻擊", "魔法攻擊", "物理防禦", "魔法防禦", "命中率", "迴避率", "靈敏度", "移動速度", "跳躍力", "卷軸數", "使用卷軸數", "裝備名字");
var items = Array(1002140,1042003,1062007,1322013,1072010,5010057);

var selected;
var statsSel;

var status = 0;

var 裝備查詢;
var 裝備查詢2;
var 裝備強化;
var 裝備強化2;
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

function getRandom(min, max) {
	if (min > max) {
		return(-1);
	}

	if (min == max) {
		return(min);
	}

	return(min + parseInt(Math.random() * (max - min + 1)));
}

//藍寶石系列
var chance1 = getRandom(1, 2);
var chance2 = getRandom(1, 4);
var chance3 = getRandom(1, 5);

//石榴石系列
var chance4 = getRandom(5, 15);
var chance5 = getRandom(5, 20);
var chance6 = getRandom(5, 25);

//蛋白石系列
var chance7 = getRandom(1, 2);
var chance8 = getRandom(1, 4);
var chance9 = getRandom(1, 5);

//紫水晶系列
var chance10 = getRandom(3, 6);
var chance11 = getRandom(3, 9);
var chance12 = getRandom(3, 12);

//海藍寶石系列
var chance13 = getRandom(5, 15);
var chance14 = getRandom(5, 20);
var chance15 = getRandom(5, 25);

//黃晶系列
var chance16 = getRandom(5, 15);
var chance17 = getRandom(5, 20);
var chance18 = getRandom(5, 25);

//祖母綠系列
var chance19 = getRandom(5, 15);
var chance20 = getRandom(5, 20);
var chance21 = getRandom(5, 25);

//黑水晶系列
var chance22 = getRandom(1, 2);
var chance23 = getRandom(1, 4);
var chance24 = getRandom(1, 5);

//機率
var 升階機率 = getRandom(0, 10);
var 升階寶石 = 4021007;
var 合成升階寶石 = 350;
var 合成升階寶石2 = 3500000;
var 升階楓幣1 = 500;
var 升階楓幣 = 5000000;
var 強化楓幣1 = 100;
var 強化楓幣 = 1000000;

var 下級楓幣 = 500000;
var 中級楓幣 = 1000000;
var 上級楓幣 = 2000000;

var 褐色魔法 = 4007000;
var 白色魔法 = 4007001;
var 藍色魔法 = 4007002;
var 綠色魔法 = 4007003;
var 黃色魔法 = 4007004;
var 紫色魔法 = 4007005;
var 紅色魔法 = 4007006;
var 黑色魔法 = 4007007;

var 魔法粉合成金額 = 30;
var 魔法粉合成金額2 = 300000;

var 下級合成金額 = 60;
var 下級合成金額2 = 600000;

var 中級合成金額 = 90;
var 中級合成金額2 = 900000;

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
        cm.sendNext("我是裝備強化系統～歡迎您攜帶超棒的寶物前來與我升級裝備！！");
		}if (status == 1) {
			store = true;
			cm.sendSimple("歡迎來到裝備強化頁面\r\n請問您想做些什麼 ? \r\n\r\n請選擇一個項目:\r\n" +
					"#L3##b【裝備強化】\r\n" +
					"#L6##b【裝備升階】\r\n" +
					"#L2#【合成強化寶石】\r\n" +
					"#L5#查詢裝備強化進度\r\n"+	  
                    //"#L1#如何獲得強化寶石粉\r\n" +				
					"#L4#裝備強化說明頁面");
		} else if (status == 2) {
			if (store) {
                switch (selection) {
                    case 1:
                        cm.sendNext ("在打怪的過程中，擊殺特定區域怪物您會獲得以下相應道具。\r\n"+
									   "以下為掉落物品名稱以及相對掉落怪物 : \r\n\r\n"+
									   "#r#v"+褐色魔法+"# [ #t"+褐色魔法+"# ] - #k全地圖怪物皆會掉落\r\n"+
									   "#r#v"+白色魔法+"# [ #t"+白色魔法+"# ] - #k天空之城&冰原雪域所有怪物\r\n"+
									   "#r#v"+藍色魔法+"# [ #t"+藍色魔法+"# ] - #k水世界所有怪物\r\n"+
									   "#r#v"+綠色魔法+"# [ #t"+綠色魔法+"# ] - #k維多利亞島&神木村所有怪物\r\n"+
									   "#r#v"+黃色魔法+"# [ #t"+黃色魔法+"# ] - #k時間神殿所有怪物\r\n"+
									   "#r#v"+紫色魔法+"# [ #t"+紫色魔法+"# ] - #k全地圖怪物皆會掉落\r\n"+
									   "#r#v"+紅色魔法+"# [ #t"+紅色魔法+"# ] - #k納希沙漠&瑪珈提亞城\r\n"+
									   "#r#v"+黑色魔法+"# [ #t"+黑色魔法+"# ] - #k玩具城&地球防衛部&童話村所有怪物\r\n");
									   cm.dispose();
                        break;
                    case 2:
						store2 = true;
                        cm.sendSimple(
						  "以下有三種凝結方式，凝結順序是由上往下凝結\r\n"+
						  "#b#L5#各類魔法粉凝結#l#k\r\n"+
						  "#b#L6#下級鑲嵌寶石（５顆）凝結#l#k\r\n"+
						  "#b#L7#中級鑲嵌寶石（５顆）凝結#l#k\r\n"+
						  "#b#L8#升級鑽石 凝結#l");
                        break;
                    case 3:
						裝備強化 = true;
						var avail = "";
						var dd = 0;
							for (var i = 0; i < 96; i++) {
								if (cm.getInventory(1).getItem(i) != null) {
						var itemId = cm.getInventory(1).getItem(i).getItemId();
							if (itemId == null) {
									i++; //防止下一步錯誤
							}
							avail += "#L" + Math.abs(i) + "##i" + cm.getInventory(1).getItem(i).getItemId() + "##z" + cm.getInventory(1).getItem(i).getItemId() + "##l\r\n";
							} else {
							dd++;
							}
							slot.push(i);
						}
						cm.sendSimple("選擇想修改的道具\r\n#b" + avail);

                        break;
					case 4:
						裝備查詢 = true;
                        cm.sendOk(
						  "您好，歡迎來到寶石改造說明頁面#k\r\n"+
						  "#b【改造裝備】#k\r\n"+
						  "１－ 裝備強化可將所有裝備進行強化\r\n"+
						  "２－ 最高強化次數為 160 次\r\n"+
						  "３－ 點數裝備暫無開放強化\r\n\r\n"+
						  "#b【升階寶石取得方法】#k\r\n"+
						  "準備上級寶石各#r 1 #k顆可有#r50%#k機率製作成功升階鑽石\r\n#k\r\n\r\n"+
						  "#b【各級附魔寶石效果】#k\r\n\r\n"+
						  "#k#v"+下級藍+"#   - 魔法攻擊力增加 1~2 / 1~4 / 1~5 每階級#l#k\r\n\r\n"+
						  "#k#v"+下級石+"#   - 血量增加 5~15 / 5~20 / 5~25 每階級#l#k\r\n\r\n"+
						  "#k#v"+下級蛋+"#   - 物理攻擊力增加 1~2 / 1~4 / 1~5 每階級#l#k\r\n\r\n"+
						  "#k#v"+下級紫+"#   - 命中率增加 3~6 / 3~9 / 3~12 每階級#l#k\r\n\r\n"+
						  "#k#v"+下級海+"#   - 魔力增加 5~15 / 5~20 / 5~25 每階級#l#k\r\n\r\n"+
						  "#k#v"+下級黃+"#   - 防禦力增加 5~15 / 5~20 / 5~25 每階級#l#k\r\n\r\n"+
						  "#k#v"+下級祖+"#   - 魔法防禦力增加 5~15 / 5~20 / 5~25 每階級#l#k\r\n\r\n"+
						  "#k#v"+下級黑+"#   - 迴避率增加 1~2 / 1~4 / 1~5 每階級#l#k\r\n\r\n"+
						  "#b【各階花費】#k\r\n"+
						  "#k以下為，每階級升級一次所需花費\r\n「下級」 = 50 萬\r\n「中級」 = 100 萬\r\n「上級」 = 200 萬#k\r\n\r\n");
						  cm.dispose();
                        break;	
                    case 5:
						裝備查詢 = true;
						var avail = "";
						var dd = 0;
							for (var i = 0; i < 96; i++) {
								if (cm.getInventory(1).getItem(i) != null) {
						var itemId = cm.getInventory(1).getItem(i).getItemId();
							if (itemId == null) {
									i++; //防止下一步錯誤
							}
							avail += "#L" + Math.abs(i) + "##i" + cm.getInventory(1).getItem(i).getItemId() + "##z" + cm.getInventory(1).getItem(i).getItemId() + "##l\r\n";
							} else {
							dd++;
							}
							slot.push(i);
						}
						cm.sendSimple("選擇想查詢的道具\r\n#b" + avail);
                        break;
					case 6:
						裝備升階 = true;
						var avail = "";
						var dd = 0;
							for (var i = 0; i < 96; i++) {
								if (cm.getInventory(1).getItem(i) != null) {
						var itemId = cm.getInventory(1).getItem(i).getItemId();
							if (itemId == null) {
									i++; //防止下一步錯誤
							}
							avail += "#L" + Math.abs(i) + "##i" + cm.getInventory(1).getItem(i).getItemId() + "##z" + cm.getInventory(1).getItem(i).getItemId() + "##l\r\n";
							} else {
							dd++;
							}
							slot.push(i);
						}
						cm.sendSimple("選擇想升階的裝備\r\n#b" + avail);
					break;
                    default:
                        storeInfo = [];
                }
            }
             else {
					cm.sendOk("發生未知的錯誤");
            }
        } else if (status == 3) {
		selected = selection - 1;	
            if (store2) {
				switch (selection) {
					case 5:
						store3 = true;
                        cm.sendSimple(
						  "以下為基礎#r下級#k強化寶石，請查看您的魔法粉後選擇您要的寶石。"+
						  "每項合成階需要#r"+魔法粉合成金額+"#k萬。\r\n"+
						  "#b#L20##r#v"+下級藍+"#（*１）= #v"+藍色魔法+"#（*100）+ #v"+白色魔法+"#（*100）#l#k\r\n"+
						  "#b#L21##r#v"+下級石+"#（*１）= #v"+紅色魔法+"#（*100）#l#k\r\n"+
						  "#b#L22##r#v"+下級蛋+"#（*１）= #v"+藍色魔法+"#+#v"+綠色魔法+"#+#v"+黃色魔法+"#+#v"+白色魔法+"#+#v"+紅色魔法+"#（*50）#l#k\r\n"+
						  "#b#L23##r#v"+下級紫+"#（*１）= #v"+紫色魔法+"#（*100）#l#k\r\n"+
						  "#b#L24##r#v"+下級海+"#（*１）= #v"+藍色魔法+"#（*100）#l#k\r\n"+
						  "#b#L25##r#v"+下級黃+"#（*１）= #v"+黃色魔法+"#（*100）#l#k\r\n"+
						  "#b#L26##r#v"+下級祖+"#（*１）= #v"+綠色魔法+"#（*100）#l#k\r\n"+
						  "#b#L27##r#v"+下級黑+"#（*１）= #v"+黑色魔法+"#（*100）#l#k\r\n");
                    break;
					case 6:
						store3 = true;
                        cm.sendSimple(
						  "以下為基礎#r中級#k強化寶石，請查看您的寶石後選擇您要升級的項目，每次升級將消耗#r"+下級合成金額+"#k萬楓幣。\r\n"+
						  "#b#L30##r#v"+中級藍+"#（*１）= #k[ #z"+下級藍+"# ] -#r（五顆）#l#k\r\n"+
						  "#b#L31##r#v"+中級石+"#（*１）= #k[ #z"+下級石+"# ] -#r（五顆）#l#k\r\n"+
						  "#b#L32##r#v"+中級蛋+"#（*１）= #k[ #z"+下級蛋+"# ] -#r（五顆）#l#k\r\n"+
						  "#b#L33##r#v"+中級紫+"#（*１）= #k[ #z"+下級紫+"# ] -#r（五顆）#l#k\r\n"+
						  "#b#L34##r#v"+中級海+"#（*１）= #k[ #z"+下級海+"# ] -#r（五顆）#l#k\r\n"+
						  "#b#L35##r#v"+中級黃+"#（*１）= #k[ #z"+下級黃+"# ] -#r（五顆）#l#k\r\n"+
						  "#b#L36##r#v"+中級祖+"#（*１）= #k[ #z"+下級祖+"# ] -#r（五顆）#l#k\r\n"+
						  "#b#L37##r#v"+中級黑+"#（*１）= #k[ #z"+下級黑+"# ] -#r（五顆）#l#k\r\n");
                    break;
					case 7:
						store3 = true;
						cm.sendSimple(
						  "以下為基礎#r上級#k強化寶石，請查看您的寶石後選擇您要升級的項目，每次升級將消耗#r"+中級合成金額+"#k萬楓幣。\r\n"+
						  "#b#L40##r#v"+上級藍+"#（*１）= #k[ #z"+中級藍+"# ] -#r（五顆）#l#k\r\n"+
						  "#b#L41##r#v"+上級石+"#（*１）= #k[ #z"+中級石+"# ] -#r（五顆）#l#k\r\n"+
						  "#b#L42##r#v"+上級蛋+"#（*１）= #k[ #z"+中級蛋+"# ] -#r（五顆）#l#k\r\n"+
						  "#b#L43##r#v"+上級紫+"#（*１）= #k[ #z"+中級紫+"# ] -#r（五顆）#l#k\r\n"+
						  "#b#L44##r#v"+上級海+"#（*１）= #k[ #z"+中級海+"# ] -#r（五顆）#l#k\r\n"+
						  "#b#L45##r#v"+上級黃+"#（*１）= #k[ #z"+中級黃+"# ] -#r（五顆）#l#k\r\n"+
						  "#b#L46##r#v"+上級祖+"#（*１）= #k[ #z"+中級祖+"# ] -#r（五顆）#l#k\r\n"+
						  "#b#L47##r#v"+上級黑+"#（*１）= #k[ #z"+中級黑+"# ] -#r（五顆）#l#k\r\n");
                    break;
					case 8:
						store3 = true;
						cm.sendSimple("製作一顆 #r#i"+升階寶石+"# #z"+升階寶石+"##k需要以下材料【點選製作】：#r\r\n\r\n"+
									  "#L48#【點選製作】#r#l\r\n\r\n\r\n"+
									  "1- #k楓幣#r"+合成升階寶石+"萬#k\r\n\r\n#r"+
									  "2- #v"+上級藍+"#  #k #t"+上級藍+"#  -#r（１顆）\r\n"+
									  "3- #v"+上級石+"#  #k #t"+上級石+"#  -#r（１顆）\r\n"+
									  "4- #v"+上級蛋+"#  #k #t"+上級蛋+"#  -#r（１顆）\r\n"+
									  "5- #v"+上級紫+"#  #k #t"+上級紫+"#  -#r（１顆）\r\n"+
									  "6- #v"+上級海+"#  #k #t"+上級海+"#  -#r（１顆）\r\n"+
									  "7- #v"+上級黃+"#  #k #t"+上級黃+"#  -#r（１顆）\r\n"+
									  "8- #v"+上級祖+"#  #k #t"+上級祖+"#  -#r（１顆）\r\n"+
									  "8- #v"+上級黑+"#  #k #t"+上級黑+"#  -#r（１顆）\r\n");
					break;
				}
				
            }else if(裝備查詢){
				裝備查詢2 = true;
				startnum = selection;
				var avail = "";
				avail = ""+ cm.getInventory(1).getItem(startnum).getItemId() + "";
				選定的查詢裝備 = avail;
				
				cm.sendYesNo("您要查詢的是這項裝備對嗎？\r\n\r\n#i"+選定的查詢裝備+"# #b#t"+選定的查詢裝備+"#");
			}else  if(裝備強化){
				store3 = true;
				startnum = selection;
				var avail = "";
				avail = ""+ cm.getInventory(1).getItem(startnum).getItemId() + "";				
				選定的強化裝備 = avail;
				if(Packages.server.MapleItemInformationProvider.getInstance().isCash(cm.getInventory(1).getItem(startnum).getItemId())){
					cm.sendOk("點數裝備無法進行裝備強化，僅能進行附魔。");
					cm.dispose();
				}else
				cm.sendSimple(
						  "請選擇您要改造的寶石\r\n#k\r\n"+
						  "#b#L100##v"+下級藍+"#藍寶石系列改造#l#k\r\n\r\n"+
						  "#b#L101##v"+下級石+"#石榴石系列改造#l#k\r\n\r\n"+
						  "#b#L102##v"+下級蛋+"#蛋白石系列改造#l#k\r\n\r\n"+
						  "#b#L103##v"+下級紫+"#紫水晶系列改造#l#k\r\n\r\n"+
						  "#b#L104##v"+下級海+"#海藍寶石系列改造#l#k\r\n\r\n"+
						  "#b#L105##v"+下級黃+"#黃晶系列改造#l#k\r\n\r\n"+
						  "#b#L106##v"+下級祖+"#祖母綠系列改造#l#k\r\n\r\n"+
						  "#b#L107##v"+下級黑+"#黑水晶系列改造#l#k\r\n");
			}else  if(裝備升階){
				裝備升階2 = true;
				startnum = selection;
				var avail = "";
				avail = ""+ cm.getInventory(1).getItem(startnum).getItemId() + "";
				
				選定的升階裝備 = avail;
				cm.sendSimple("您要升階的是這項裝備對嗎？\r\n\r\n#i"+選定的升階裝備+"# #b#t"+選定的升階裝備+"##k\r\n\r\n"+
							  "升階需要#v"+升階寶石+"#  #k【 #t"+升階寶石+"# 】#r " + 1 + "#k 個"+"\r\n\r\n"+
							  "楓幣#r"+升階楓幣1+"#k萬");

			}else {
                cm.sendSimple("您沒有足夠的道具喔");
				cm.dispose();
            }
        } else if (status == 4) {		
            if (store3) {
                switch (selection) {
					case 20:
						if (cm.haveItem(藍色魔法 ,100) >= true && cm.haveItem(白色魔法 ,100) >= true && cm.getMeso() >= 魔法粉合成金額2 ) {
						cm.gainItem(藍色魔法 ,-100);
						cm.gainItem(白色魔法 ,-100);
						cm.gainItem(下級藍,1); 
						cm.gainMeso(-魔法粉合成金額2);
						cm.sendOk("做得很好，完成#v"+下級藍+"#  #k【 #t"+下級藍+"# 】 " + 1 + " 個");
							cm.dispose();
						}else{
							cm.sendOk("您準備的道具數量不足，請在確認。");
							cm.dispose();
						}
					break;
					case 21:
						if (cm.haveItem(紅色魔法 ,100) >= true && cm.getMeso() >= 魔法粉合成金額2 ) {
						cm.gainItem(紅色魔法 ,-100);
						cm.gainItem(下級石,1);
						cm.gainMeso(-魔法粉合成金額2); 
						cm.sendOk("做得很好，完成#i" + 下級石 + "#" + 1 + " 個");
							cm.dispose();
						}else{
							cm.sendOk("您準備的道具數量不足，請在確認。");
							cm.dispose();
						}
					break;
					case 22:
						if (cm.haveItem(藍色魔法 ,50) >= true && cm.getMeso() >= 魔法粉合成金額2 && cm.getMeso() >= 魔法粉合成金額2 && cm.haveItem(綠色魔法 ,50) >= true  && cm.haveItem(黃色魔法 ,50) >= true  && cm.haveItem(白色魔法 ,50) >= true  && cm.haveItem(紅色魔法 ,50) >= true ) {
						cm.gainItem(藍色魔法 ,-50);
						cm.gainItem(綠色魔法 ,-50);
						cm.gainItem(黃色魔法 ,-50);
						cm.gainItem(白色魔法 ,-50);
						cm.gainItem(紅色魔法 ,-50);
						cm.gainMeso(-魔法粉合成金額2);
						cm.gainItem(下級蛋,1); 
						cm.sendOk("做得很好，完成#i" + 下級蛋 + "#" + 1 + "個");
							cm.dispose();
						}else{
							cm.sendOk("您準備的道具數量不足，請在確認。");
							cm.dispose();
						}
					break;
					case 23:
						if (cm.haveItem(紫色魔法 ,100) >= true && cm.getMeso() >= 魔法粉合成金額2) {
						cm.gainItem(紫色魔法 ,-100);
						cm.gainItem(下級紫,1); 
						cm.gainMeso(-魔法粉合成金額2);
						cm.sendOk("做得很好，完成#i" + 下級紫 + "#" + 1 + " 個");
							cm.dispose();
						}else{
							cm.sendOk("您準備的道具數量不足，請在確認。");
							cm.dispose();
						}
					break;
					case 24:
						if (cm.haveItem(藍色魔法 ,100) >= true && cm.getMeso() >= 魔法粉合成金額2) {
						cm.gainItem(藍色魔法 ,-100);
						cm.gainMeso(-魔法粉合成金額2);
						cm.gainItem(下級海,1); 
						cm.sendOk("做得很好，完成#i" + 下級海 + "#" + 1 + " 個");
							cm.dispose();
						}else{
							cm.sendOk("您準備的道具數量不足，請在確認。");
							cm.dispose();
						}
					break;
					case 25:
						if (cm.haveItem(黃色魔法 ,100) >= true && cm.getMeso() >= 魔法粉合成金額2) {
						cm.gainItem(黃色魔法 ,-100);
						cm.gainMeso(-魔法粉合成金額2);
						cm.gainItem(下級黃,1); 
						cm.sendOk("做得很好，完成#i" + 下級黃 + "#" + 1 + " 個");
							cm.dispose();
						}else{
							cm.sendOk("您準備的道具數量不足，請在確認。");
							cm.dispose();
						}
					break;
					case 26:
						if (cm.haveItem(綠色魔法 ,100) >= true && cm.getMeso() >= 魔法粉合成金額2) {
						cm.gainItem(綠色魔法 ,-100);
						cm.gainMeso(-魔法粉合成金額2);
						cm.gainItem(下級祖,1); 
						cm.sendOk("做得很好，完成#i" + 下級祖 + "#" + 1 + " 個");
							cm.dispose();
						}else{
							cm.sendOk("您準備的道具數量不足，請在確認。");
							cm.dispose();
						}
					break;
					case 27:
						if (cm.haveItem(黑色魔法 ,100) >= true && cm.getMeso() >= 魔法粉合成金額2) {
						cm.gainItem(黑色魔法 ,-100);
						cm.gainMeso(-魔法粉合成金額2);
						cm.gainItem(下級黑,1); 
						cm.sendOk("做得很好，完成#i" + 下級黑 + "#" + 1 + " 個");
							cm.dispose();
						}else{
							cm.sendOk("您準備的道具數量不足，請在確認。");
							cm.dispose();
						}
					break;
					case 30:
						if (cm.haveItem(下級藍 ,5) >= true && cm.getMeso() >= 下級合成金額2) {
						cm.gainItem(下級藍 ,-5);
						cm.gainMeso(-下級合成金額2);
						cm.gainItem(中級藍,1); 
						cm.sendOk("做得很好，完成#v"+中級藍+"#  #k【 #t"+中級藍+"# 】 " + 1 + " 個");
							cm.dispose();
						}else{
							cm.sendOk("您準備的道具數量不足，請在確認。");
							cm.dispose();
						}
					break;
					case 31:
						if (cm.haveItem(下級石 ,5) >= true && cm.getMeso() >= 下級合成金額2) {
						cm.gainItem(下級石 ,-5);
						cm.gainMeso(-下級合成金額2);
						cm.gainItem(中級石,1); 
						cm.sendOk("做得很好，完成#v"+中級石+"#  #k【 #t"+中級石+"# 】 " + 1 + " 個");
							cm.dispose();
						}else{
							cm.sendOk("您準備的道具數量不足，請在確認。");
							cm.dispose();
						}
					break;
					case 32:
						if (cm.haveItem(下級蛋 ,5) >= true && cm.getMeso() >= 下級合成金額2) {
						cm.gainItem(下級蛋 ,-5);
						cm.gainMeso(-下級合成金額2);
						cm.gainItem(中級蛋,1); 
						cm.sendOk("做得很好，完成#v"+中級蛋+"#  #k【 #t"+中級蛋+"# 】 " + 1 + " 個");
							cm.dispose();
						}else{
							cm.sendOk("您準備的道具數量不足，請在確認。");
							cm.dispose();
						}
					break;
					case 33:
						if (cm.haveItem(下級紫 ,5) >= true && cm.getMeso() >= 下級合成金額2) {
						cm.gainItem(下級紫 ,-5);
						cm.gainMeso(-下級合成金額2);
						cm.gainItem(中級紫,1); 
						cm.sendOk("做得很好，完成#v"+中級紫+"#  #k【 #t"+中級紫+"# 】 " + 1 + " 個");
							cm.dispose();
						}else{
							cm.sendOk("您準備的道具數量不足，請在確認。");
							cm.dispose();
						}
					break;
					case 34:
						if (cm.haveItem(下級海 ,5) >= true && cm.getMeso() >= 下級合成金額2) {
						cm.gainItem(下級海 ,-5);
						cm.gainMeso(-下級合成金額2);
						cm.gainItem(中級海,1); 
						cm.sendOk("做得很好，完成#v"+中級海+"#  #k【 #t"+中級海+"# 】 " + 1 + " 個");
							cm.dispose();
						}else{
							cm.sendOk("您準備的道具數量不足，請在確認。");
							cm.dispose();
						}
					break;
					case 35:
						if (cm.haveItem(下級黃 ,5) >= true && cm.getMeso() >= 下級合成金額2) {
						cm.gainItem(下級黃 ,-5);
						cm.gainMeso(-下級合成金額2);
						cm.gainItem(中級黃,1); 
						cm.sendOk("做得很好，完成#v"+中級黃+"#  #k【 #t"+中級黃+"# 】 " + 1 + " 個");
							cm.dispose();
						}else{
							cm.sendOk("您準備的道具數量不足，請在確認。");
							cm.dispose();
						}
					break;
					case 36:
						if (cm.haveItem(下級祖 ,5) >= true && cm.getMeso() >= 下級合成金額2) {
						cm.gainItem(下級祖 ,-5);
						cm.gainMeso(-下級合成金額2);
						cm.gainItem(中級祖,1); 
						cm.sendOk("做得很好，完成#v"+中級祖+"#  #k【 #t"+中級祖+"# 】 " + 1 + " 個");
							cm.dispose();
						}else{
							cm.sendOk("您準備的道具數量不足，請在確認。");
							cm.dispose();
						}
					break;
					case 37:
						if (cm.haveItem(下級黑 ,5) >= true && cm.getMeso() >= 下級合成金額2) {
						cm.gainItem(下級黑 ,-5);
						cm.gainMeso(-下級合成金額2);
						cm.gainItem(中級黑,1); 
						cm.sendOk("做得很好，完成#v"+中級黑+"#  #k【 #t"+中級黑+"# 】 " + 1 + " 個");
							cm.dispose();
						}else{
							cm.sendOk("您準備的道具數量不足，請在確認。");
							cm.dispose();
						}
					break;
					case 40:
						if (cm.haveItem(中級藍 ,5) >= true && cm.getMeso() >= 中級合成金額2) {
						cm.gainItem(中級藍 ,-5);
						cm.gainMeso(-中級合成金額2);
						cm.gainItem(上級藍,1); 
						cm.sendOk("做得很好，完成#v"+上級藍+"#  #k【 #t"+上級藍+"# 】 " + 1 + " 個");
							cm.dispose();
						}else{
							cm.sendOk("您準備的道具數量不足，請在確認。");
							cm.dispose();
						}
					break;
					case 41:
						if (cm.haveItem(中級石 ,5) >= true && cm.getMeso() >= 中級合成金額2) {
						cm.gainItem(中級石 ,-5);
						cm.gainMeso(-中級合成金額2);
						cm.gainItem(上級石,1); 
						cm.sendOk("做得很好，完成#v"+上級石+"#  #k【 #t"+上級石+"# 】 " + 1 + " 個");
							cm.dispose();
						}else{
							cm.sendOk("您準備的道具數量不足，請在確認。");
							cm.dispose();
						}
					break;
					case 42:
						if (cm.haveItem(中級蛋 ,5) >= true && cm.getMeso() >= 中級合成金額2) {
						cm.gainItem(中級蛋 ,-5);
						cm.gainMeso(-中級合成金額2);
						cm.gainItem(上級蛋,1); 
						cm.sendOk("做得很好，完成#v"+上級蛋+"#  #k【 #t"+上級蛋+"# 】 " + 1 + " 個");
							cm.dispose();
						}else{
							cm.sendOk("您準備的道具數量不足，請在確認。");
							cm.dispose();
						}
					break;
					case 43:
						if (cm.haveItem(中級紫 ,5) >= true && cm.getMeso() >= 中級合成金額2) {
						cm.gainItem(中級紫 ,-5);
						cm.gainMeso(-中級合成金額2);
						cm.gainItem(上級紫,1); 
						cm.sendOk("做得很好，完成#v"+上級紫+"#  #k【 #t"+上級紫+"# 】 " + 1 + " 個");
							cm.dispose();
						}else{
							cm.sendOk("您準備的道具數量不足，請在確認。");
							cm.dispose();
						}
					break;
					case 44:
						if (cm.haveItem(中級海 ,5) >= true && cm.getMeso() >= 中級合成金額2) {
						cm.gainItem(中級海 ,-5);
						cm.gainMeso(-中級合成金額2);
						cm.gainItem(上級海,1); 
						cm.sendOk("做得很好，完成#v"+上級海+"#  #k【 #t"+上級海+"# 】 " + 1 + " 個");
							cm.dispose();
						}else{
							cm.sendOk("您準備的道具數量不足，請在確認。");
							cm.dispose();
						}
					break;
					case 45:
						if (cm.haveItem(中級黃 ,5) >= true && cm.getMeso() >= 中級合成金額2) {
						cm.gainItem(中級黃 ,-5);
						cm.gainMeso(-中級合成金額2);
						cm.gainItem(上級黃,1); 
						cm.sendOk("做得很好，完成#v"+上級黃+"#  #k【 #t"+上級黃+"# 】 " + 1 + " 個");
							cm.dispose();
						}else{
							cm.sendOk("您準備的道具數量不足，請在確認。");
							cm.dispose();
						}
					break;
					case 46:
						if (cm.haveItem(中級祖 ,5) >= true && cm.getMeso() >= 中級合成金額2) {
						cm.gainItem(中級祖 ,-5);
						cm.gainMeso(-中級合成金額2);
						cm.gainItem(上級祖,1); 
						cm.sendOk("做得很好，完成#v"+上級祖+"#  #k【 #t"+上級祖+"# 】 " + 1 + " 個");
							cm.dispose();
						}else{
							cm.sendOk("您準備的道具數量不足，請在確認。");
							cm.dispose();
						}
					break;
					case 47:
						if (cm.haveItem(中級黑 ,5) >= true && cm.getMeso() >= 中級合成金額2) {
						cm.gainItem(中級黑 ,-5);
						cm.gainMeso(-中級合成金額2);
						cm.gainItem(上級黑,1); 
						cm.sendOk("做得很好，完成#v"+上級黑+"#  #k【 #t"+上級黑+"# 】 " + 1 + " 個");
							cm.dispose();
						}else{
							cm.sendOk("您準備的道具數量不足，請在確認。");
							cm.dispose();
						}
					break;
					case 100:
						store3 = true;
						cm.sendSimple(
						  "歡迎來到#r藍寶石#k系列改造頁面，請選擇一個等級的寶石進行改造。\r\n"+
						  "#b#L200##k#v"+下級藍+"# 使用#b#t"+下級藍+"##k改造 = #r魔法攻擊力增加 ( 1~2 ) #l#k\r\n"+
						  "#b#L201##k#v"+中級藍+"# 使用#b#t"+中級藍+"##k改造 = #r魔法攻擊力增加 ( 1~4 ) #l#k\r\n"+
						  "#b#L202##k#v"+上級藍+"# 使用#b#t"+上級藍+"##k改造 = #r魔法攻擊力增加 ( 1~5 ) #l#k\r\n");
                    break;
					case 101:
						store3 = true;
						cm.sendSimple(
						  "歡迎來到#r石榴石#k系列改造頁面，請選擇一個等級的寶石進行改造。\r\n"+
						  "#b#L210##k#v"+下級石+"# 使用#b#t"+下級石+"##k改造 = #r血量增加 ( 5~15 ) #l#k\r\n"+
						  "#b#L211##k#v"+中級石+"# 使用#b#t"+中級石+"##k改造 = #r血量增加 ( 5~20 ) #l#k\r\n"+
						  "#b#L212##k#v"+上級石+"# 使用#b#t"+上級石+"##k改造 = #r血量增加 ( 5~25 ) #l#k\r\n");
                    break;
					case 102:
						store3 = true;
						cm.sendSimple(
						  "歡迎來到#r蛋白石#k系列改造頁面，請選擇一個等級的寶石進行改造。\r\n"+
						  "#b#L220##k#v"+下級蛋+"# 使用#b#t"+下級蛋+"##k改造 = #r攻擊力增加 ( 1~2 ) #l#k\r\n"+
						  "#b#L221##k#v"+中級蛋+"# 使用#b#t"+中級蛋+"##k改造 = #r攻擊力增加 ( 1~4 ) #l#k\r\n"+
						  "#b#L222##k#v"+上級蛋+"# 使用#b#t"+上級蛋+"##k改造 = #r攻擊力增加 ( 1~5 ) #l#k\r\n");
                    break;
					case 103:
						store3 = true;
						cm.sendSimple(
						  "歡迎來到#r紫水晶#k系列改造頁面，請選擇一個等級的寶石進行改造。\r\n"+
						  "#b#L230##k#v"+下級紫+"# 使用#b#t"+下級紫+"##k改造 = #r命中率增加 ( 3~6 ) #l#k\r\n"+
						  "#b#L231##k#v"+中級紫+"# 使用#b#t"+中級紫+"##k改造 = #r命中率增加 ( 3~9 ) #l#k\r\n"+
						  "#b#L232##k#v"+上級紫+"# 使用#b#t"+上級紫+"##k改造 = #r命中率增加 ( 3~12 ) #l#k\r\n");
                    break;
					case 104:
						store3 = true;
						cm.sendSimple(
						  "歡迎來到#r海海寶石#k系列改造頁面，請選擇一個等級的寶石進行改造。\r\n"+
						  "#b#L240##k#v"+下級海+"# 使用#b#t"+下級海+"##k改造 = #r魔力增加 ( 5~15 ) #l#k\r\n"+
						  "#b#L241##k#v"+中級海+"# 使用#b#t"+中級海+"##k改造 = #r魔力增加 ( 5~20 ) #l#k\r\n"+
						  "#b#L242##k#v"+上級海+"# 使用#b#t"+上級海+"##k改造 = #r魔力增加 ( 5~25 ) #l#k\r\n");
                    break;
					case 105:
						store3 = true;
						cm.sendSimple(
						  "歡迎來到#r黃晶#k系列改造頁面，請選擇一個等級的寶石進行改造。\r\n"+
						  "#b#L250##k#v"+下級黃+"# 使用#b#t"+下級黃+"##k改造 = #r防禦力增加 ( 5~15 ) #l#k\r\n"+
						  "#b#L251##k#v"+中級黃+"# 使用#b#t"+中級黃+"##k改造 = #r防禦力增加 ( 5~20 ) #l#k\r\n"+
						  "#b#L252##k#v"+上級黃+"# 使用#b#t"+上級黃+"##k改造 = #r防禦力增加 ( 5~25 ) #l#k\r\n");
                    break;
					case 106:
						store3 = true;
						cm.sendSimple(
						  "歡迎來到#r祖母綠#k系列改造頁面，請選擇一個等級的寶石進行改造。\r\n"+
						  "#b#L260##k#v"+下級祖+"# 使用#b#t"+下級祖+"##k改造 = #r魔法防禦力增加 ( 5~15 ) #l#k\r\n"+
						  "#b#L261##k#v"+中級祖+"# 使用#b#t"+中級祖+"##k改造 = #r魔法防禦力增加 ( 5~20 ) #l#k\r\n"+
						  "#b#L262##k#v"+上級祖+"# 使用#b#t"+上級祖+"##k改造 = #r魔法防禦力增加 ( 5~25 ) #l#k\r\n");
                    break;
					case 107:
						store3 = true;
						cm.sendSimple(
						  "歡迎來到#r黑水晶#k系列改造頁面，請選擇一個等級的寶石進行改造。\r\n"+
						  "#b#L270##k#v"+下級黑+"# 使用#b#t"+下級黑+"##k改造 = #r迴避率增加 ( 1~2 ) #l#k\r\n"+
						  "#b#L271##k#v"+中級黑+"# 使用#b#t"+中級黑+"##k改造 = #r迴避率增加 ( 1~4 ) #l#k\r\n"+
						  "#b#L272##k#v"+上級黑+"# 使用#b#t"+上級黑+"##k改造 = #r迴避率增加 ( 1~5 ) #l#k\r\n");
                    break;
					case 48:
						if(cm.getMeso() >= 合成升階寶石2 && cm.haveItem(上級藍 ,1) >= true && cm.haveItem(上級石 ,1) >= true && cm.haveItem(上級蛋 ,1) >= true && cm.haveItem(上級紫 ,1) >= true && cm.haveItem(上級海 ,1) >= true && cm.haveItem(上級黃 ,1) >= true && cm.haveItem(上級祖 ,1) >= true && cm.haveItem(上級黑 ,1) >= true)
						{
							cm.gainItem(升階寶石 ,1);
							cm.gainItem(上級藍 ,-1);
							cm.gainItem(上級石 ,-1);
							cm.gainItem(上級蛋 ,-1);
							cm.gainItem(上級紫 ,-1);
							cm.gainItem(上級海 ,-1);
							cm.gainItem(上級黃 ,-1);
							cm.gainItem(上級祖 ,-1);
							cm.gainItem(上級黑 ,-1);
							cm.gainMeso(-合成升階寶石2);
							cm.sendOk("恭喜您合成了一顆#z"+升階寶石+"#");
							cm.dispose();
						}else{
								cm.sendOk("抱歉,您無法進行升階鑽石合成，可能原因如下\r\n\r\n"+
										  "#b1#k － #b您缺少所需上級寶石\r\n"+
										  "#b2#k － #b您的楓幣不足\r\n");
								cm.dispose();
						
							}
						
                    break;
				}
            }else if(裝備查詢2){
				var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
				cm.sendOk("以下是該裝備#i"+選定的查詢裝備 +"# #b#t"+選定的查詢裝備 +"##k各項敲打次數，請查看。\r\n" +
						  "裝備目前階級為#k = #b（"+item.getLevleEquip()+"）#k 階\r\n " +
						  "總敲打次數為#k = #b（"+item.getReform()+"）#k 次\r\n " +
						  "#r藍寶石#k系列共敲打了 = #b（"+item.getSapphire()+"）#k 次\r\n " +
						  "#r石榴石#k系列共敲打了 = #b（"+item.getGarnet()+"）#k 次\r\n " +
						  "#r蛋白石#k系列共敲打了 = #b（"+item.getOpal()+"）#k 次\r\n " +
						  "#r紫水晶#k系列共敲打了 = #b（"+item.getAmethyst()+"）#k 次\r\n " +
						  "#r海藍寶石#k系列共敲打了 = #b（"+item.getAquamarine()+"）#k 次\r\n " +
						  "#r黃晶#k系列共敲打了 = #b（"+item.getHuangJing()+"）#k 次\r\n " +
						  "#r祖母綠#k系列共敲打了 = #b（"+item.getEmerald()+"）#k 次\r\n " +
						  "#r黑水晶#k系列共敲打了 = #b（"+item.getBlackCrystal()+"）#k 次\r\n " +
						  "#k一件裝備改造上限次數為 #r160#k 次#k");
						  cm.dispose();
				
			}else if(裝備升階2){
			
			var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
			//cm.sendOk("以下是該裝備"+item.getReform()+"");
			if(cm.getMeso() >= 升階楓幣  && cm.haveItem(升階寶石 ,1) >= true || item.getLevleEquip()== 1 && item.getReform() == 20 || item.getLevleEquip()== 2 && item.getReform() == 40|| item.getLevleEquip()== 3 && item.getReform() == 60 || item.getLevleEquip()== 4 && item.getReform() == 80 || item.getLevleEquip()== 5 && item.getReform() == 100 || item.getLevleEquip()== 6 && item.getReform() == 120){
			var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
			if(item.getLevleEquip()== 1 && item.getReform() == 20){
				item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
				if(升階機率 <= 5){
				cm.gainItem(升階寶石 ,-1);
				cm.gainMeso(-升階楓幣);
				item.setLevleEquip((item.getLevleEquip() + 1 ));
				MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
				cm.sendOk("恭喜您成功將裝備升級為#r「"+item.getLevleEquip()+"」#k階 裝備");
				cm.worldMessage(2,"【" + cm.getChannelServer().getServerName() + "】 : " + " 玩家 " + cm.getChar().getName() + " 成功將裝備升級到「"+item.getLevleEquip()+"」階 讓我們恭喜他！！！");
				cm.dispose();
				}else{
				cm.gainItem(升階寶石 ,-1);
				cm.gainMeso(-升階楓幣);	
				cm.sendOk("非常遺憾，您的裝備升階失敗");
				cm.dispose();		
				}
			}else if(item.getLevleEquip()== 2 && item.getReform() == 40){
			var	item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
				if(升階機率 <= 4){
				cm.gainItem(升階寶石 ,-1);
				cm.gainMeso(-升階楓幣);
				item.setLevleEquip((item.getLevleEquip() + 1 ));
				MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
				cm.sendOk("恭喜您成功將裝備升級為#r「"+item.getLevleEquip()+"」#k階 裝備");
				cm.worldMessage(2,"【" + cm.getChannelServer().getServerName() + "】 : " + " 玩家 " + cm.getChar().getName() + " 成功將裝備升級到「"+item.getLevleEquip()+"」階 讓我們恭喜他！！！");
				cm.dispose();
				}else{
				cm.gainItem(升階寶石 ,-1);
				cm.gainMeso(-升階楓幣);
				cm.sendOk("非常遺憾，您的裝備升階失敗");
				cm.dispose();		
				}
			
			}else if(item.getLevleEquip()== 3 && item.getReform() == 60){
			var	item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
				if(升階機率 <= 3){
				cm.gainItem(升階寶石 ,-1);
				cm.gainMeso(-升階楓幣);
				item.setLevleEquip((item.getLevleEquip() + 1 ));
				MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
				cm.sendOk("恭喜您成功將裝備升級為#r「"+item.getLevleEquip()+"」#k階 裝備");
				cm.worldMessage(2,"【" + cm.getChannelServer().getServerName() + "】 : " + " 玩家 " + cm.getChar().getName() + " 成功將裝備升級到「"+item.getLevleEquip()+"」階 讓我們恭喜他！！！");
				cm.dispose();
				}else{
				cm.gainItem(升階寶石 ,-1);
				cm.gainMeso(-升階楓幣);	
				cm.sendOk("非常遺憾，您的裝備升階失敗");
				cm.dispose();		
				}
			
			}else if(item.getLevleEquip()== 4 && item.getReform() == 80){
				item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
				if(升階機率 <= 2){
				cm.gainItem(升階寶石 ,-1);
				cm.gainMeso(-升階楓幣);
				item.setLevleEquip((item.getLevleEquip() + 1 ));
				MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
				cm.sendOk("恭喜您成功將裝備升級為#r「"+item.getLevleEquip()+"」#k階 裝備");
				cm.worldMessage(2,"【" + cm.getChannelServer().getServerName() + "】 : " + " 玩家 " + cm.getChar().getName() + " 成功將裝備升級到「"+item.getLevleEquip()+"」階 讓我們恭喜他！！！");
				cm.dispose();
				}else{
				cm.gainItem(升階寶石 ,-1);
				cm.gainMeso(-升階楓幣);	
				cm.sendOk("非常遺憾，您的裝備升階失敗");
				cm.dispose();		
				}
			
			}else if(item.getLevleEquip()== 5 && item.getReform() == 100){
				item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
				if(升階機率 <= 1 ){
				cm.gainItem(升階寶石 ,-1);
				cm.gainMeso(-升階楓幣);
				item.setLevleEquip((item.getLevleEquip() + 1 ));
				MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
				cm.sendOk("恭喜您成功將裝備升級為#r「"+item.getLevleEquip()+"」#k階 裝備");
				cm.worldMessage(2,"【" + cm.getChannelServer().getServerName() + "】 : " + " 玩家 " + cm.getChar().getName() + " 成功將裝備升級到「"+item.getLevleEquip()+"」階 讓我們恭喜他！！！");
				cm.dispose();
				}else{
				cm.gainItem(升階寶石 ,-1);
				cm.gainMeso(-升階楓幣);	
				cm.sendOk("非常遺憾，您的裝備升階失敗");
				cm.dispose();		
				}
			
			}else if(item.getLevleEquip()== 6 && item.getReform() == 120){
				item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
				if(升階機率 <= 0.5){
				cm.gainItem(升階寶石 ,-1);
				cm.gainMeso(-升階楓幣);
				item.setLevleEquip((item.getLevleEquip() + 1 ));
				MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
				cm.sendOk("恭喜您成功將裝備升級為#r「"+item.getLevleEquip()+"」#k階 裝備");
				cm.worldMessage(2,"【" + cm.getChannelServer().getServerName() + "】 : " + " 玩家 " + cm.getChar().getName() + " 成功將裝備升級到「"+item.getLevleEquip()+"」階 讓我們恭喜他！！！");
				cm.dispose();
				}else{
				cm.gainItem(升階寶石 ,-1);
				cm.gainMeso(-升階楓幣);	
				cm.sendOk("非常遺憾，您的裝備升階失敗");
				cm.dispose();		
				}
			
					}else{
				cm.sendOk("抱歉,您無法進行裝備升階，可能原因如下\r\n\r\n"+
						  "#b1#k － #b您無該項目所需升階寶石\r\n"+
						  "#b2#k － #b您在該階級所需的升階次數未滿\r\n"+
						  "#b3#k － #b您的楓幣不足\r\n"+
						  "#b4#k － #b您的裝備已經升到滿級");
				cm.dispose();
			}
			}else{
				cm.sendOk("抱歉,您無法進行裝備升階，可能原因如下\r\n\r\n"+
						  "#b1#k － #b您無該項目所需升階寶石\r\n"+
						  "#b2#k － #b您在該階級所需的升階次數未滿\r\n"+
						  "#b3#k － #b您的楓幣不足\r\n"+
						  "#b4#k － #b您的裝備已經升到滿級");
				cm.dispose();
			}
		}
	}	
     else if (status == 5) {	
			selected = selection - 1;		
			if (store3) {
				//cm.sendOk(""+selection+"");
                switch (selection) {
					/*起頭*/
					case 200:
						下級藍改造2 = true;
						
						if (store3){						
							cm.sendYesNo(
							"你確定要把下面這件裝備增加素質嗎？\r\n\r\n" +
							"#b#i"+選定的強化裝備 +"# #t"+選定的強化裝備 +"#\r\n\r\n" +
							"#b【將消耗】#k#t" + 下級藍 + "# * 1 與 " + 下級楓幣 + "楓幣");												
						}
                    break;
					case 201:
						中級藍改造2 = true;
						if (store3){						
							cm.sendYesNo(
							"你確定要把下面這件裝備增加素質嗎？\r\n\r\n" +
							"#b#i"+選定的強化裝備 +"# #t"+選定的強化裝備 +"#\r\n\r\n" +
							"#b【將消耗】#k#t" + 中級藍 + "# * 1 與 " + 中級楓幣 + "楓幣");											
						}
                    break;
					case 202:
						上級藍改造2 = true;
						if (store3){						
							cm.sendYesNo(
							"你確定要把下面這件裝備增加素質嗎？\r\n\r\n" +
							"#b#i"+選定的強化裝備 +"# #t"+選定的強化裝備 +"#\r\n\r\n" +
							"#b【將消耗】#k#t" + 上級藍 + "# * 1 與 " + 上級楓幣 + "楓幣");											
						}
                    break;
					/*起頭*/
					case 210:
						下級石改造2 = true;
						if (store3){						
							cm.sendYesNo(
							"你確定要把下面這件裝備增加素質嗎？\r\n\r\n" +
							"#b#i"+選定的強化裝備 +"# #t"+選定的強化裝備 +"#\r\n\r\n" +
							"#b【將消耗】#k#t" + 下級石 + "# * 1 與 " + 下級楓幣 + "楓幣");											
						}
                    break;
					case 211:
						中級石改造2 = true;
						if (store3){						
							cm.sendYesNo(
							"你確定要把下面這件裝備增加素質嗎？\r\n\r\n" +
							"#b#i"+選定的強化裝備 +"# #t"+選定的強化裝備 +"#\r\n\r\n" +
							"#b【將消耗】#k#t" + 中級石 + "# * 1 與 " + 中級楓幣 + "楓幣");												
						}
                    break;
					case 212:
						上級石改造2 = true;
						if (store3){						
							cm.sendYesNo(
							"你確定要把下面這件裝備增加素質嗎？\r\n\r\n" +
							"#b#i"+選定的強化裝備 +"# #t"+選定的強化裝備 +"#\r\n\r\n" +
							"#b【將消耗】#k#t" + 上級石 + "# * 1 與 " + 上級楓幣 + "楓幣");												
						}
                    break;
					/*起頭*/
					case 220:
						下級蛋改造2 = true;
						if (store3){						
							cm.sendYesNo(
							"你確定要把下面這件裝備增加素質嗎？\r\n\r\n" +
							"#b#i"+選定的強化裝備 +"# #t"+選定的強化裝備 +"#\r\n\r\n" +
							"#b【將消耗】#k#t" + 下級蛋 + "# * 1 與 " + 下級楓幣 + "楓幣");												
						}
                    break;
					case 221:
						中級蛋改造2 = true;
						if (store3){						
							cm.sendYesNo(
							"你確定要把下面這件裝備增加素質嗎？\r\n\r\n" +
							"#b#i"+選定的強化裝備 +"# #t"+選定的強化裝備 +"#\r\n\r\n" +
							"#b【將消耗】#k#t" + 中級蛋 + "# * 1 與 " + 中級楓幣 + "楓幣");												
						}
                    break;
					case 222:
						上級蛋改造2 = true;
						if (store3){						
							cm.sendYesNo(
							"你確定要把下面這件裝備增加素質嗎？\r\n\r\n" +
							"#b#i"+選定的強化裝備 +"# #t"+選定的強化裝備 +"#\r\n\r\n" +
							"#b【將消耗】#k#t" + 上級蛋 + "# * 1 與 " + 上級楓幣 + "楓幣");												
						}
                    break;
					/*起頭*/
					case 230:
						下級紫改造2 = true;
						if (store3){						
							cm.sendYesNo(
							"你確定要把下面這件裝備增加素質嗎？\r\n\r\n" +
							"#b#i"+選定的強化裝備 +"# #t"+選定的強化裝備 +"#\r\n\r\n" +
							"#b【將消耗】#k#t" + 下級紫 + "# * 1 與 " + 下級楓幣 + "楓幣");											
						}
                    break;
					case 231:
						中級紫改造2 = true;
						if (store3){						
							cm.sendYesNo(
							"你確定要把下面這件裝備增加素質嗎？\r\n\r\n" +
							"#b#i"+選定的強化裝備 +"# #t"+選定的強化裝備 +"#\r\n\r\n" +
							"#b【將消耗】#k#t" + 中級紫 + "# * 1 與 " + 中級楓幣 + "楓幣");											
						}
                    break;
					case 232:
						上級紫改造2 = true;
						if (store3){						
							cm.sendYesNo(
							"你確定要把下面這件裝備增加素質嗎？\r\n\r\n" +
							"#b#i"+選定的強化裝備 +"# #t"+選定的強化裝備 +"#\r\n\r\n" +
							"#b【將消耗】#k#t" + 上級紫 + "# * 1 與 " + 上級楓幣 + "楓幣");												
						}
                    break;
					/*起頭*/
					case 240:
						下級海改造2 = true;
						if (store3){						
							cm.sendYesNo(
							"你確定要把下面這件裝備增加素質嗎？\r\n\r\n" +
							"#b#i"+選定的強化裝備 +"# #t"+選定的強化裝備 +"#\r\n\r\n" +
							"#b【將消耗】#k#t" + 下級海 + "# * 1 與 " + 下級楓幣 + "楓幣");												
						}
                    break;
					case 241:
						中級海改造2 = true;
						if (store3){						
							cm.sendYesNo(
							"你確定要把下面這件裝備增加素質嗎？\r\n\r\n" +
							"#b#i"+選定的強化裝備 +"# #t"+選定的強化裝備 +"#\r\n\r\n" +
							"#b【將消耗】#k#t" + 中級海 + "# * 1 與 " + 中級楓幣 + "楓幣");											
						}
                    break;
					case 242:
						上級海改造2 = true;
						if (store3){						
							cm.sendYesNo(
							"你確定要把下面這件裝備增加素質嗎？\r\n\r\n" +
							"#b#i"+選定的強化裝備 +"# #t"+選定的強化裝備 +"#\r\n\r\n" +
							"#b【將消耗】#k#t" + 上級海 + "# * 1 與 " + 上級楓幣 + "楓幣");											
						}
                    break;
					/*起頭*/
					case 250:
						下級黃改造2 = true;
						if (store3){						
							cm.sendYesNo(
							"你確定要把下面這件裝備增加素質嗎？\r\n\r\n" +
							"#b#i"+選定的強化裝備 +"# #t"+選定的強化裝備 +"#\r\n\r\n" +
							"#b【將消耗】#k#t" + 下級黃 + "# * 1 與 " + 下級楓幣 + "楓幣");												
						}
                    break;
					case 251:
						中級黃改造2 = true;
						if (store3){						
							cm.sendYesNo(
							"你確定要把下面這件裝備增加素質嗎？\r\n\r\n" +
							"#b#i"+選定的強化裝備 +"# #t"+選定的強化裝備 +"#\r\n\r\n" +
							"#b【將消耗】#k#t" + 中級黃 + "# * 1 與 " + 中級楓幣 + "楓幣");												
						}
                    break;
					case 252:
						上級黃改造2 = true;
						if (store3){						
							cm.sendYesNo(
							"你確定要把下面這件裝備增加素質嗎？\r\n\r\n" +
							"#b#i"+選定的強化裝備 +"# #t"+選定的強化裝備 +"#\r\n\r\n" +
							"#b【將消耗】#k#t" + 上級黃 + "# * 1 與 " + 上級楓幣 + "楓幣");												
						}
                    break;
					/*起頭*/
					case 260:
						下級祖改造2 = true;
						if (store3){						
							cm.sendYesNo(
							"你確定要把下面這件裝備增加素質嗎？\r\n\r\n" +
							"#b#i"+選定的強化裝備 +"# #t"+選定的強化裝備 +"#\r\n\r\n" +
							"#b【將消耗】#k#t" + 下級祖 + "# * 1 與 " + 下級楓幣 + "楓幣");												
						}
                    break;
					case 261:
						中級祖改造2 = true;
						if (store3){						
							cm.sendYesNo(
							"你確定要把下面這件裝備增加素質嗎？\r\n\r\n" +
							"#b#i"+選定的強化裝備 +"# #t"+選定的強化裝備 +"#\r\n\r\n" +
							"#b【將消耗】#k#t" + 中級祖 + "# * 1 與 " + 中級楓幣 + "楓幣");												
						}
                    break;
					case 262:
						上級祖改造2 = true;
						if (store3){						
							cm.sendYesNo(
							"你確定要把下面這件裝備增加素質嗎？\r\n\r\n" +
							"#b#i"+選定的強化裝備 +"# #t"+選定的強化裝備 +"#\r\n\r\n" +
							"#b【將消耗】#k#t" + 上級祖 + "# * 1 與 " + 上級楓幣 + "楓幣");												
						}
                    break;
					/*起頭*/
					case 270:
						下級黑改造2 = true;
						if (store3){						
							cm.sendYesNo(
							"你確定要把下面這件裝備增加素質嗎？\r\n\r\n" +
							"#b#i"+選定的強化裝備 +"# #t"+選定的強化裝備 +"#\r\n\r\n" +
							"#b【將消耗】#k#t" + 下級黑 + "# * 1 與 " + 下級楓幣 + "楓幣");												
						}
                    break;
					case 271:
						中級黑改造2 = true;
						if (store3){						
							cm.sendYesNo(
							"你確定要把下面這件裝備增加素質嗎？\r\n\r\n" +
							"#b#i"+選定的強化裝備 +"# #t"+選定的強化裝備 +"#\r\n\r\n" +
							"#b【將消耗】#k#t" + 中級黑 + "# * 1 與 " + 中級楓幣 + "楓幣");												
						}
                    break;
					case 272:
						上級黑改造2 = true;
						if (store3){						
							cm.sendYesNo(
							"你確定要把下面這件裝備增加素質嗎？\r\n\r\n" +
							"#b#i"+選定的強化裝備 +"# #t"+選定的強化裝備 +"#\r\n\r\n" +
							"#b【將消耗】#k#t" + 上級黑 + "# * 1 與 " + 上級楓幣 + "楓幣");												
						}
                    break;
				}
			}
		}
		else if (status == 6) {
		item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
		
		if(item.getLevleEquip()== 1 && item.getReform() <= 19){	
		item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
			/*起頭*/			
			if (下級藍改造2 && cm.haveItem(下級藍 ,1) == true && cm.getMeso() >= 下級楓幣) {
				item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(下級藍,-1);
					cm.gainMeso(-下級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setSapphire((item.getSapphire() + 1 )); //計算總改造次數
                    item.setMatk((item.getMatk() + chance1 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
					cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance1+"】#k點魔法攻擊力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                    
                cm.dispose();
            }else if (中級藍改造2 && cm.haveItem(中級藍 ,1) == true  && cm.getMeso() >= 中級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(中級藍,-1);
					cm.gainMeso(-中級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setSapphire((item.getSapphire() + 1 )); //計算總改造次數
                    item.setMatk((item.getMatk() + chance2 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance2+"】#k點魔法攻擊力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (上級藍改造2 && cm.haveItem(上級藍 ,1) == true && cm.getMeso() >= 上級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(上級藍,-1);
					cm.gainMeso(-上級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setSapphire((item.getSapphire() + 1 )); //計算總改造次數
                    item.setMatk((item.getMatk() + chance3));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance3+"】#k點魔法攻擊力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }/*起頭*/ 
			else if (下級石改造2 && cm.haveItem(下級石 ,1) == true && cm.getMeso() >= 下級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(下級石,-1);
					cm.gainMeso(-下級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setGarnet((item.getGarnet() + 1 )); //計算總改造次數
                    item.setHp((item.getHp() + chance4 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance4+"】#k點血量\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (中級石改造2 && cm.haveItem(中級石 ,1) == true  && cm.getMeso() >= 中級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(中級石,-1);
					cm.gainMeso(-中級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setGarnet((item.getGarnet() + 1 )); //計算總改造次數
                    item.setHp((item.getHp() + chance5 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance5+"】#k點血量\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (上級石改造2 && cm.haveItem(上級石 ,1) == true  && cm.getMeso() >= 上級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(上級石,-1);
					cm.gainMeso(-上級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setGarnet((item.getGarnet() + 1 )); //計算總改造次數
                    item.setHp((item.getHp() + chance6 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance6+"】#k點血量\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }/*起頭*/else if (下級蛋改造2 && cm.haveItem(下級蛋 ,1) == true && cm.getMeso() >= 下級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(下級蛋,-1);
					cm.gainMeso(-下級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setOpal((item.getOpal() + 1 )); //計算總改造次數
                    item.setWatk((item.getWatk() + chance7 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance7+"】#k點物理攻擊力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (中級蛋改造2 && cm.haveItem(中級蛋 ,1) == true && cm.getMeso() >= 中級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(中級蛋,-1);
					cm.gainMeso(-中級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setOpal((item.getOpal() + 1 )); //計算總改造次數
                    item.setWatk((item.getWatk() + chance8 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance8+"】#k點物理攻擊力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (上級蛋改造2 && cm.haveItem(上級蛋 ,1) == true && cm.getMeso() >= 上級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(上級蛋,-1);
					cm.gainMeso(-上級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setOpal((item.getOpal() + 1 )); //計算總改造次數
                    item.setWatk((item.getWatk() + chance9 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance9+"】#k點物理攻擊力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }/*起頭*/else if (下級紫改造2 && cm.haveItem(下級紫 ,1) == true && cm.getMeso() >= 下級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(下級紫,-1);
					cm.gainMeso(-下級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setAmethyst((item.getAmethyst() + 1 )); //計算總改造次數
                    item.setAcc((item.getAcc() + chance10 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance10+"】#k點命中率\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (中級紫改造2 && cm.haveItem(中級紫 ,1) == true && cm.getMeso() >= 中級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(中級紫,-1);
					cm.gainMeso(-中級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setAmethyst((item.getAmethyst() + 1 )); //計算總改造次數
                    item.setAcc((item.getAcc() + chance11 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance11+"】#k點命中率\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (上級紫改造2 && cm.haveItem(上級紫 ,1) == true && cm.getMeso() >= 上級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(上級紫,-1);
					cm.gainMeso(-上級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setAmethyst((item.getAmethyst() + 1 )); //計算總改造次數
                    item.setAcc((item.getAcc() + chance12 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance12+"】#k點命中率\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }/*起頭*/else if (下級海改造2 && cm.haveItem(下級海 ,1) == true && cm.getMeso() >= 下級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(下級海,-1);
					cm.gainMeso(-下級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setAquamarine((item.getAquamarine() + 1 )); //計算總改造次數
                    item.setMp((item.getMp() + chance13 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance13+"】#k點魔力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (中級海改造2 && cm.haveItem(中級海 ,1) == true && cm.getMeso() >= 中級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(中級海,-1);
					cm.gainMeso(-中級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setAquamarine((item.getAquamarine() + 1 )); //計算總改造次數
                    item.setMp((item.getMp() + chance14 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance14+"】#k點魔力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (上級海改造2 && cm.haveItem(上級海 ,1) == true && cm.getMeso() >= 上級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(上級海,-1);
					cm.gainMeso(-上級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setAquamarine((item.getAquamarine() + 1 )); //計算總改造次數
                    item.setMp((item.getMp() + chance15 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance15+"】#k點魔力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }/*起頭*/else if (下級黃改造2 && cm.haveItem(下級黃 ,1) == true && cm.getMeso() >= 下級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(下級黃,-1);
					cm.gainMeso(-下級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setHuangJing((item.getHuangJing() + 1 )); //計算總改造次數
                    item.setWdef((item.getWdef() + chance16 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance16+"】#k點防禦力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (中級黃改造2 && cm.haveItem(中級黃 ,1) == true && cm.getMeso() >= 中級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(中級黃,-1);
					cm.gainMeso(-中級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setHuangJing((item.getHuangJing() + 1 )); //計算總改造次數
                    item.setWdef((item.getWdef() + chance17 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance17+"】#k點防禦力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (上級黃改造2 && cm.haveItem(上級黃 ,1) == true && cm.getMeso() >= 上級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(上級黃,-1);
					cm.gainMeso(-上級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setHuangJing((item.getHuangJing() + 1 )); //計算總改造次數
                    item.setWdef((item.getWdef() + chance18 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance18+"】#k點防禦力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }/*起頭*/else if (下級祖改造2 && cm.haveItem(下級祖 ,1) == true && cm.getMeso() >= 下級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(下級祖,-1);
					cm.gainMeso(-下級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setEmerald((item.getEmerald() + 1 )); //計算總改造次數
                    item.setMdef((item.getMdef() + chance19 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance19+"】#k點魔法防禦力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (中級祖改造2 && cm.haveItem(中級祖 ,1) == true && cm.getMeso() >= 中級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(中級祖,-1);
					cm.gainMeso(-中級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setEmerald((item.getEmerald() + 1 )); //計算總改造次數
                    item.setMdef((item.getMdef() + chance20 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance20+"】#k點魔法防禦力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (上級祖改造2 && cm.haveItem(上級祖 ,1) == true && cm.getMeso() >= 上級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(上級祖,-1);
					cm.gainMeso(-上級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setEmerald((item.getEmerald() + 1 )); //計算總改造次數
                    item.setMdef((item.getMdef() + chance21 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance21+"】#k點魔法防禦力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }/*起頭*/else if (下級黑改造2 && cm.haveItem(下級黑 ,1) && cm.getMeso() >= 下級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(下級黑,-1);
					cm.gainMeso(-下級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setBlackCrystal((item.getBlackCrystal() + 1 )); //計算總改造次數
                    item.setAvoid((item.getAvoid() + chance22 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance22+"】#k點迴避率\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (中級黑改造2 && cm.haveItem(中級黑 ,1) == true && cm.getMeso() >= 中級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(中級黑,-1);
					cm.gainMeso(-中級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setBlackCrystal((item.getBlackCrystal() + 1 )); //計算總改造次數
                    item.setAvoid((item.getAvoid() + chance23 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance23+"】#k點迴避率\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (上級黑改造2 && cm.haveItem(上級黑 ,1) == true && cm.getMeso() >= 上級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(上級黑,-1);
					cm.gainMeso(-上級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setBlackCrystal((item.getBlackCrystal() + 1 )); //計算總改造次數
                    item.setAvoid((item.getAvoid() + chance24 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance24+"】#k點迴避率\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
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
		
		//第二階段
		else if(item.getLevleEquip()== 2 && item.getReform() <= 39){

				/*起頭*/			
			if (下級藍改造2 && cm.haveItem(下級藍 ,1) == true && cm.getMeso() >= 下級楓幣) {
				item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(下級藍,-1);
					cm.gainMeso(-下級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setSapphire((item.getSapphire() + 1 )); //計算總改造次數
                    item.setMatk((item.getMatk() + chance1 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
					cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance1+"】#k點魔法攻擊力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                    
                cm.dispose();
            }else if (中級藍改造2 && cm.haveItem(中級藍 ,1) == true  && cm.getMeso() >= 中級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(中級藍,-1);
					cm.gainMeso(-中級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setSapphire((item.getSapphire() + 1 )); //計算總改造次數
                    item.setMatk((item.getMatk() + chance2 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance2+"】#k點魔法攻擊力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (上級藍改造2 && cm.haveItem(上級藍 ,1) == true && cm.getMeso() >= 上級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(上級藍,-1);
					cm.gainMeso(-上級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setSapphire((item.getSapphire() + 1 )); //計算總改造次數
                    item.setMatk((item.getMatk() + chance3));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance3+"】#k點魔法攻擊力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }/*起頭*/ 
			else if (下級石改造2 && cm.haveItem(下級石 ,1) == true && cm.getMeso() >= 下級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(下級石,-1);
					cm.gainMeso(-下級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setGarnet((item.getGarnet() + 1 )); //計算總改造次數
                    item.setHp((item.getHp() + chance4 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance4+"】#k點血量\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (中級石改造2 && cm.haveItem(中級石 ,1) == true  && cm.getMeso() >= 中級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(中級石,-1);
					cm.gainMeso(-中級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setGarnet((item.getGarnet() + 1 )); //計算總改造次數
                    item.setHp((item.getHp() + chance5 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance5+"】#k點血量\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (上級石改造2 && cm.haveItem(上級石 ,1) == true  && cm.getMeso() >= 上級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(上級石,-1);
					cm.gainMeso(-上級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setGarnet((item.getGarnet() + 1 )); //計算總改造次數
                    item.setHp((item.getHp() + chance6 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance6+"】#k點血量\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }/*起頭*/else if (下級蛋改造2 && cm.haveItem(下級蛋 ,1) == true && cm.getMeso() >= 下級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(下級蛋,-1);
					cm.gainMeso(-下級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setOpal((item.getOpal() + 1 )); //計算總改造次數
                    item.setWatk((item.getWatk() + chance7 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance7+"】#k點物理攻擊力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (中級蛋改造2 && cm.haveItem(中級蛋 ,1) == true && cm.getMeso() >= 中級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(中級蛋,-1);
					cm.gainMeso(-中級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setOpal((item.getOpal() + 1 )); //計算總改造次數
                    item.setWatk((item.getWatk() + chance8 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance8+"】#k點物理攻擊力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (上級蛋改造2 && cm.haveItem(上級蛋 ,1) == true && cm.getMeso() >= 上級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(上級蛋,-1);
					cm.gainMeso(-上級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setOpal((item.getOpal() + 1 )); //計算總改造次數
                    item.setWatk((item.getWatk() + chance9 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance9+"】#k點物理攻擊力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }/*起頭*/else if (下級紫改造2 && cm.haveItem(下級紫 ,1) == true && cm.getMeso() >= 下級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(下級紫,-1);
					cm.gainMeso(-下級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setAmethyst((item.getAmethyst() + 1 )); //計算總改造次數
                    item.setAcc((item.getAcc() + chance10 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance10+"】#k點命中率\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (中級紫改造2 && cm.haveItem(中級紫 ,1) == true && cm.getMeso() >= 中級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(中級紫,-1);
					cm.gainMeso(-中級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setAmethyst((item.getAmethyst() + 1 )); //計算總改造次數
                    item.setAcc((item.getAcc() + chance11 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance11+"】#k點命中率\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (上級紫改造2 && cm.haveItem(上級紫 ,1) == true && cm.getMeso() >= 上級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(上級紫,-1);
					cm.gainMeso(-上級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setAmethyst((item.getAmethyst() + 1 )); //計算總改造次數
                    item.setAcc((item.getAcc() + chance12 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance12+"】#k點命中率\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }/*起頭*/else if (下級海改造2 && cm.haveItem(下級海 ,1) == true && cm.getMeso() >= 下級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(下級海,-1);
					cm.gainMeso(-下級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setAquamarine((item.getAquamarine() + 1 )); //計算總改造次數
                    item.setMp((item.getMp() + chance13 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance13+"】#k點魔力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (中級海改造2 && cm.haveItem(中級海 ,1) == true && cm.getMeso() >= 中級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(中級海,-1);
					cm.gainMeso(-中級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setAquamarine((item.getAquamarine() + 1 )); //計算總改造次數
                    item.setMp((item.getMp() + chance14 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance14+"】#k點魔力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (上級海改造2 && cm.haveItem(上級海 ,1) == true && cm.getMeso() >= 上級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(上級海,-1);
					cm.gainMeso(-上級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setAquamarine((item.getAquamarine() + 1 )); //計算總改造次數
                    item.setMp((item.getMp() + chance15 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance15+"】#k點魔力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }/*起頭*/else if (下級黃改造2 && cm.haveItem(下級黃 ,1) == true && cm.getMeso() >= 下級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(下級黃,-1);
					cm.gainMeso(-下級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setHuangJing((item.getHuangJing() + 1 )); //計算總改造次數
                    item.setWdef((item.getWdef() + chance16 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance16+"】#k點防禦力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (中級黃改造2 && cm.haveItem(中級黃 ,1) == true && cm.getMeso() >= 中級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(中級黃,-1);
					cm.gainMeso(-中級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setHuangJing((item.getHuangJing() + 1 )); //計算總改造次數
                    item.setWdef((item.getWdef() + chance17 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance17+"】#k點防禦力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (上級黃改造2 && cm.haveItem(上級黃 ,1) == true && cm.getMeso() >= 上級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(上級黃,-1);
					cm.gainMeso(-上級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setHuangJing((item.getHuangJing() + 1 )); //計算總改造次數
                    item.setWdef((item.getWdef() + chance18 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance18+"】#k點防禦力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }/*起頭*/else if (下級祖改造2 && cm.haveItem(下級祖 ,1) == true && cm.getMeso() >= 下級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(下級祖,-1);
					cm.gainMeso(-下級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setEmerald((item.getEmerald() + 1 )); //計算總改造次數
                    item.setMdef((item.getMdef() + chance19 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance19+"】#k點魔法防禦力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (中級祖改造2 && cm.haveItem(中級祖 ,1) == true && cm.getMeso() >= 中級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(中級祖,-1);
					cm.gainMeso(-中級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setEmerald((item.getEmerald() + 1 )); //計算總改造次數
                    item.setMdef((item.getMdef() + chance20 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance20+"】#k點魔法防禦力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (上級祖改造2 && cm.haveItem(上級祖 ,1) == true && cm.getMeso() >= 上級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(上級祖,-1);
					cm.gainMeso(-上級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setEmerald((item.getEmerald() + 1 )); //計算總改造次數
                    item.setMdef((item.getMdef() + chance21 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance21+"】#k點魔法防禦力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }/*起頭*/else if (下級黑改造2 && cm.haveItem(下級黑 ,1) && cm.getMeso() >= 下級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(下級黑,-1);
					cm.gainMeso(-下級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setBlackCrystal((item.getBlackCrystal() + 1 )); //計算總改造次數
                    item.setAvoid((item.getAvoid() + chance22 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance22+"】#k點迴避率\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (中級黑改造2 && cm.haveItem(中級黑 ,1) == true && cm.getMeso() >= 中級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(中級黑,-1);
					cm.gainMeso(-中級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setBlackCrystal((item.getBlackCrystal() + 1 )); //計算總改造次數
                    item.setAvoid((item.getAvoid() + chance23 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance23+"】#k點迴避率\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (上級黑改造2 && cm.haveItem(上級黑 ,1) == true && cm.getMeso() >= 上級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(上級黑,-1);
					cm.gainMeso(-上級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setBlackCrystal((item.getBlackCrystal() + 1 )); //計算總改造次數
                    item.setAvoid((item.getAvoid() + chance24 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance24+"】#k點迴避率\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else{
                cm.sendOk("抱歉,您沒有改造石無法進行改造，可能原因如下\r\n\r\n"+
						  "#b1#k － #b您無該項目所需改造石\r\n"+
						  "#b2#k － #b您已達該項目上限改造次數\r\n"+
						  "#b3#k － #b您的楓幣不足\r\n"+
						  "#b4#k － #b您已達該項目上限總次數");
                cm.dispose();
				}//第三階段
			}
				else if(item.getLevleEquip()== 3 && item.getReform() <= 59){
			/*起頭*/			
			if (下級藍改造2 && cm.haveItem(下級藍 ,1) == true && cm.getMeso() >= 下級楓幣) {
				item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(下級藍,-1);
					cm.gainMeso(-下級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setSapphire((item.getSapphire() + 1 )); //計算總改造次數
                    item.setMatk((item.getMatk() + chance1 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
					cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance1+"】#k點魔法攻擊力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                    
                cm.dispose();
            }else if (中級藍改造2 && cm.haveItem(中級藍 ,1) == true  && cm.getMeso() >= 中級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(中級藍,-1);
					cm.gainMeso(-中級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setSapphire((item.getSapphire() + 1 )); //計算總改造次數
                    item.setMatk((item.getMatk() + chance2 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance2+"】#k點魔法攻擊力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (上級藍改造2 && cm.haveItem(上級藍 ,1) == true && cm.getMeso() >= 上級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(上級藍,-1);
					cm.gainMeso(-上級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setSapphire((item.getSapphire() + 1 )); //計算總改造次數
                    item.setMatk((item.getMatk() + chance3));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance3+"】#k點魔法攻擊力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }/*起頭*/ 
			else if (下級石改造2 && cm.haveItem(下級石 ,1) == true && cm.getMeso() >= 下級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(下級石,-1);
					cm.gainMeso(-下級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setGarnet((item.getGarnet() + 1 )); //計算總改造次數
                    item.setHp((item.getHp() + chance4 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance4+"】#k點血量\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (中級石改造2 && cm.haveItem(中級石 ,1) == true  && cm.getMeso() >= 中級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(中級石,-1);
					cm.gainMeso(-中級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setGarnet((item.getGarnet() + 1 )); //計算總改造次數
                    item.setHp((item.getHp() + chance5 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance5+"】#k點血量\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (上級石改造2 && cm.haveItem(上級石 ,1) == true  && cm.getMeso() >= 上級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(上級石,-1);
					cm.gainMeso(-上級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setGarnet((item.getGarnet() + 1 )); //計算總改造次數
                    item.setHp((item.getHp() + chance6 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance6+"】#k點血量\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }/*起頭*/else if (下級蛋改造2 && cm.haveItem(下級蛋 ,1) == true && cm.getMeso() >= 下級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(下級蛋,-1);
					cm.gainMeso(-下級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setOpal((item.getOpal() + 1 )); //計算總改造次數
                    item.setWatk((item.getWatk() + chance7 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance7+"】#k點物理攻擊力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (中級蛋改造2 && cm.haveItem(中級蛋 ,1) == true && cm.getMeso() >= 中級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(中級蛋,-1);
					cm.gainMeso(-中級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setOpal((item.getOpal() + 1 )); //計算總改造次數
                    item.setWatk((item.getWatk() + chance8 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance8+"】#k點物理攻擊力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (上級蛋改造2 && cm.haveItem(上級蛋 ,1) == true && cm.getMeso() >= 上級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(上級蛋,-1);
					cm.gainMeso(-上級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setOpal((item.getOpal() + 1 )); //計算總改造次數
                    item.setWatk((item.getWatk() + chance9 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance9+"】#k點物理攻擊力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }/*起頭*/else if (下級紫改造2 && cm.haveItem(下級紫 ,1) == true && cm.getMeso() >= 下級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(下級紫,-1);
					cm.gainMeso(-下級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setAmethyst((item.getAmethyst() + 1 )); //計算總改造次數
                    item.setAcc((item.getAcc() + chance10 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance10+"】#k點命中率\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (中級紫改造2 && cm.haveItem(中級紫 ,1) == true && cm.getMeso() >= 中級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(中級紫,-1);
					cm.gainMeso(-中級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setAmethyst((item.getAmethyst() + 1 )); //計算總改造次數
                    item.setAcc((item.getAcc() + chance11 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance11+"】#k點命中率\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (上級紫改造2 && cm.haveItem(上級紫 ,1) == true && cm.getMeso() >= 上級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(上級紫,-1);
					cm.gainMeso(-上級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setAmethyst((item.getAmethyst() + 1 )); //計算總改造次數
                    item.setAcc((item.getAcc() + chance12 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance12+"】#k點命中率\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }/*起頭*/else if (下級海改造2 && cm.haveItem(下級海 ,1) == true && cm.getMeso() >= 下級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(下級海,-1);
					cm.gainMeso(-下級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setAquamarine((item.getAquamarine() + 1 )); //計算總改造次數
                    item.setMp((item.getMp() + chance13 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance13+"】#k點魔力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (中級海改造2 && cm.haveItem(中級海 ,1) == true && cm.getMeso() >= 中級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(中級海,-1);
					cm.gainMeso(-中級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setAquamarine((item.getAquamarine() + 1 )); //計算總改造次數
                    item.setMp((item.getMp() + chance14 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance14+"】#k點魔力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (上級海改造2 && cm.haveItem(上級海 ,1) == true && cm.getMeso() >= 上級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(上級海,-1);
					cm.gainMeso(-上級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setAquamarine((item.getAquamarine() + 1 )); //計算總改造次數
                    item.setMp((item.getMp() + chance15 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance15+"】#k點魔力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }/*起頭*/else if (下級黃改造2 && cm.haveItem(下級黃 ,1) == true && cm.getMeso() >= 下級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(下級黃,-1);
					cm.gainMeso(-下級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setHuangJing((item.getHuangJing() + 1 )); //計算總改造次數
                    item.setWdef((item.getWdef() + chance16 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance16+"】#k點防禦力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (中級黃改造2 && cm.haveItem(中級黃 ,1) == true && cm.getMeso() >= 中級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(中級黃,-1);
					cm.gainMeso(-中級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setHuangJing((item.getHuangJing() + 1 )); //計算總改造次數
                    item.setWdef((item.getWdef() + chance17 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance17+"】#k點防禦力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (上級黃改造2 && cm.haveItem(上級黃 ,1) == true && cm.getMeso() >= 上級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(上級黃,-1);
					cm.gainMeso(-上級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setHuangJing((item.getHuangJing() + 1 )); //計算總改造次數
                    item.setWdef((item.getWdef() + chance18 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance18+"】#k點防禦力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }/*起頭*/else if (下級祖改造2 && cm.haveItem(下級祖 ,1) == true && cm.getMeso() >= 下級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(下級祖,-1);
					cm.gainMeso(-下級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setEmerald((item.getEmerald() + 1 )); //計算總改造次數
                    item.setMdef((item.getMdef() + chance19 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance19+"】#k點魔法防禦力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (中級祖改造2 && cm.haveItem(中級祖 ,1) == true && cm.getMeso() >= 中級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(中級祖,-1);
					cm.gainMeso(-中級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setEmerald((item.getEmerald() + 1 )); //計算總改造次數
                    item.setMdef((item.getMdef() + chance20 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance20+"】#k點魔法防禦力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (上級祖改造2 && cm.haveItem(上級祖 ,1) == true && cm.getMeso() >= 上級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(上級祖,-1);
					cm.gainMeso(-上級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setEmerald((item.getEmerald() + 1 )); //計算總改造次數
                    item.setMdef((item.getMdef() + chance21 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance21+"】#k點魔法防禦力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }/*起頭*/else if (下級黑改造2 && cm.haveItem(下級黑 ,1) && cm.getMeso() >= 下級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(下級黑,-1);
					cm.gainMeso(-下級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setBlackCrystal((item.getBlackCrystal() + 1 )); //計算總改造次數
                    item.setAvoid((item.getAvoid() + chance22 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance22+"】#k點迴避率\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (中級黑改造2 && cm.haveItem(中級黑 ,1) == true && cm.getMeso() >= 中級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(中級黑,-1);
					cm.gainMeso(-中級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setBlackCrystal((item.getBlackCrystal() + 1 )); //計算總改造次數
                    item.setAvoid((item.getAvoid() + chance23 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance23+"】#k點迴避率\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (上級黑改造2 && cm.haveItem(上級黑 ,1) == true && cm.getMeso() >= 上級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(上級黑,-1);
					cm.gainMeso(-上級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setBlackCrystal((item.getBlackCrystal() + 1 )); //計算總改造次數
                    item.setAvoid((item.getAvoid() + chance24 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance24+"】#k點迴避率\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else{
                cm.sendOk("抱歉,您沒有改造石無法進行改造，可能原因如下\r\n\r\n"+
						  "#b1#k － #b您無該項目所需改造石\r\n"+
						  "#b2#k － #b您已達該項目上限改造次數\r\n"+
						  "#b3#k － #b您的楓幣不足\r\n"+
						  "#b4#k － #b您已達該項目上限總次數");
                cm.dispose();
				}
			}//第四階段
			else if(item.getLevleEquip()== 4 && item.getReform() <= 79){
			/*起頭*/			
			if (下級藍改造2 && cm.haveItem(下級藍 ,1) == true && cm.getMeso() >= 下級楓幣) {
				item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(下級藍,-1);
					cm.gainMeso(-下級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setSapphire((item.getSapphire() + 1 )); //計算總改造次數
                    item.setMatk((item.getMatk() + chance1 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
					cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance1+"】#k點魔法攻擊力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                    
                cm.dispose();
            }else if (中級藍改造2 && cm.haveItem(中級藍 ,1) == true  && cm.getMeso() >= 中級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(中級藍,-1);
					cm.gainMeso(-中級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setSapphire((item.getSapphire() + 1 )); //計算總改造次數
                    item.setMatk((item.getMatk() + chance2 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance2+"】#k點魔法攻擊力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (上級藍改造2 && cm.haveItem(上級藍 ,1) == true && cm.getMeso() >= 上級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(上級藍,-1);
					cm.gainMeso(-上級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setSapphire((item.getSapphire() + 1 )); //計算總改造次數
                    item.setMatk((item.getMatk() + chance3));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance3+"】#k點魔法攻擊力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }/*起頭*/ 
			else if (下級石改造2 && cm.haveItem(下級石 ,1) == true && cm.getMeso() >= 下級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(下級石,-1);
					cm.gainMeso(-下級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setGarnet((item.getGarnet() + 1 )); //計算總改造次數
                    item.setHp((item.getHp() + chance4 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance4+"】#k點血量\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (中級石改造2 && cm.haveItem(中級石 ,1) == true  && cm.getMeso() >= 中級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(中級石,-1);
					cm.gainMeso(-中級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setGarnet((item.getGarnet() + 1 )); //計算總改造次數
                    item.setHp((item.getHp() + chance5 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance5+"】#k點血量\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (上級石改造2 && cm.haveItem(上級石 ,1) == true  && cm.getMeso() >= 上級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(上級石,-1);
					cm.gainMeso(-上級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setGarnet((item.getGarnet() + 1 )); //計算總改造次數
                    item.setHp((item.getHp() + chance6 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance6+"】#k點血量\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }/*起頭*/else if (下級蛋改造2 && cm.haveItem(下級蛋 ,1) == true && cm.getMeso() >= 下級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(下級蛋,-1);
					cm.gainMeso(-下級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setOpal((item.getOpal() + 1 )); //計算總改造次數
                    item.setWatk((item.getWatk() + chance7 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance7+"】#k點物理攻擊力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (中級蛋改造2 && cm.haveItem(中級蛋 ,1) == true && cm.getMeso() >= 中級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(中級蛋,-1);
					cm.gainMeso(-中級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setOpal((item.getOpal() + 1 )); //計算總改造次數
                    item.setWatk((item.getWatk() + chance8 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance8+"】#k點物理攻擊力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (上級蛋改造2 && cm.haveItem(上級蛋 ,1) == true && cm.getMeso() >= 上級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(上級蛋,-1);
					cm.gainMeso(-上級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setOpal((item.getOpal() + 1 )); //計算總改造次數
                    item.setWatk((item.getWatk() + chance9 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance9+"】#k點物理攻擊力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }/*起頭*/else if (下級紫改造2 && cm.haveItem(下級紫 ,1) == true && cm.getMeso() >= 下級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(下級紫,-1);
					cm.gainMeso(-下級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setAmethyst((item.getAmethyst() + 1 )); //計算總改造次數
                    item.setAcc((item.getAcc() + chance10 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance10+"】#k點命中率\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (中級紫改造2 && cm.haveItem(中級紫 ,1) == true && cm.getMeso() >= 中級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(中級紫,-1);
					cm.gainMeso(-中級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setAmethyst((item.getAmethyst() + 1 )); //計算總改造次數
                    item.setAcc((item.getAcc() + chance11 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance11+"】#k點命中率\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (上級紫改造2 && cm.haveItem(上級紫 ,1) == true && cm.getMeso() >= 上級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(上級紫,-1);
					cm.gainMeso(-上級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setAmethyst((item.getAmethyst() + 1 )); //計算總改造次數
                    item.setAcc((item.getAcc() + chance12 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance12+"】#k點命中率\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }/*起頭*/else if (下級海改造2 && cm.haveItem(下級海 ,1) == true && cm.getMeso() >= 下級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(下級海,-1);
					cm.gainMeso(-下級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setAquamarine((item.getAquamarine() + 1 )); //計算總改造次數
                    item.setMp((item.getMp() + chance13 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance13+"】#k點魔力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (中級海改造2 && cm.haveItem(中級海 ,1) == true && cm.getMeso() >= 中級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(中級海,-1);
					cm.gainMeso(-中級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setAquamarine((item.getAquamarine() + 1 )); //計算總改造次數
                    item.setMp((item.getMp() + chance14 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance14+"】#k點魔力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (上級海改造2 && cm.haveItem(上級海 ,1) == true && cm.getMeso() >= 上級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(上級海,-1);
					cm.gainMeso(-上級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setAquamarine((item.getAquamarine() + 1 )); //計算總改造次數
                    item.setMp((item.getMp() + chance15 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance15+"】#k點魔力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }/*起頭*/else if (下級黃改造2 && cm.haveItem(下級黃 ,1) == true && cm.getMeso() >= 下級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(下級黃,-1);
					cm.gainMeso(-下級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setHuangJing((item.getHuangJing() + 1 )); //計算總改造次數
                    item.setWdef((item.getWdef() + chance16 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance16+"】#k點防禦力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (中級黃改造2 && cm.haveItem(中級黃 ,1) == true && cm.getMeso() >= 中級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(中級黃,-1);
					cm.gainMeso(-中級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setHuangJing((item.getHuangJing() + 1 )); //計算總改造次數
                    item.setWdef((item.getWdef() + chance17 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance17+"】#k點防禦力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (上級黃改造2 && cm.haveItem(上級黃 ,1) == true && cm.getMeso() >= 上級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(上級黃,-1);
					cm.gainMeso(-上級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setHuangJing((item.getHuangJing() + 1 )); //計算總改造次數
                    item.setWdef((item.getWdef() + chance18 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance18+"】#k點防禦力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }/*起頭*/else if (下級祖改造2 && cm.haveItem(下級祖 ,1) == true && cm.getMeso() >= 下級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(下級祖,-1);
					cm.gainMeso(-下級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setEmerald((item.getEmerald() + 1 )); //計算總改造次數
                    item.setMdef((item.getMdef() + chance19 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance19+"】#k點魔法防禦力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (中級祖改造2 && cm.haveItem(中級祖 ,1) == true && cm.getMeso() >= 中級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(中級祖,-1);
					cm.gainMeso(-中級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setEmerald((item.getEmerald() + 1 )); //計算總改造次數
                    item.setMdef((item.getMdef() + chance20 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance20+"】#k點魔法防禦力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (上級祖改造2 && cm.haveItem(上級祖 ,1) == true && cm.getMeso() >= 上級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(上級祖,-1);
					cm.gainMeso(-上級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setEmerald((item.getEmerald() + 1 )); //計算總改造次數
                    item.setMdef((item.getMdef() + chance21 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance21+"】#k點魔法防禦力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }/*起頭*/else if (下級黑改造2 && cm.haveItem(下級黑 ,1) && cm.getMeso() >= 下級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(下級黑,-1);
					cm.gainMeso(-下級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setBlackCrystal((item.getBlackCrystal() + 1 )); //計算總改造次數
                    item.setAvoid((item.getAvoid() + chance22 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance22+"】#k點迴避率\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (中級黑改造2 && cm.haveItem(中級黑 ,1) == true && cm.getMeso() >= 中級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(中級黑,-1);
					cm.gainMeso(-中級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setBlackCrystal((item.getBlackCrystal() + 1 )); //計算總改造次數
                    item.setAvoid((item.getAvoid() + chance23 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance23+"】#k點迴避率\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (上級黑改造2 && cm.haveItem(上級黑 ,1) == true && cm.getMeso() >= 上級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(上級黑,-1);
					cm.gainMeso(-上級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setBlackCrystal((item.getBlackCrystal() + 1 )); //計算總改造次數
                    item.setAvoid((item.getAvoid() + chance24 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance24+"】#k點迴避率\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else{
                cm.sendOk("抱歉,您沒有改造石無法進行改造，可能原因如下\r\n\r\n"+
						  "#b1#k － #b您無該項目所需改造石\r\n"+
						  "#b2#k － #b您已達該項目上限改造次數\r\n"+
						  "#b3#k － #b您的楓幣不足\r\n"+
						  "#b4#k － #b您已達該項目上限總次數");
                cm.dispose();
				}


			}//第五階段
			else if(item.getLevleEquip()== 5 && item.getReform() <= 99){
			/*起頭*/			
			if (下級藍改造2 && cm.haveItem(下級藍 ,1) == true && cm.getMeso() >= 下級楓幣) {
				item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(下級藍,-1);
					cm.gainMeso(-下級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setSapphire((item.getSapphire() + 1 )); //計算總改造次數
                    item.setMatk((item.getMatk() + chance1 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
					cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance1+"】#k點魔法攻擊力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                    
                cm.dispose();
            }else if (中級藍改造2 && cm.haveItem(中級藍 ,1) == true  && cm.getMeso() >= 中級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(中級藍,-1);
					cm.gainMeso(-中級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setSapphire((item.getSapphire() + 1 )); //計算總改造次數
                    item.setMatk((item.getMatk() + chance2 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance2+"】#k點魔法攻擊力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (上級藍改造2 && cm.haveItem(上級藍 ,1) == true && cm.getMeso() >= 上級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(上級藍,-1);
					cm.gainMeso(-上級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setSapphire((item.getSapphire() + 1 )); //計算總改造次數
                    item.setMatk((item.getMatk() + chance3));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance3+"】#k點魔法攻擊力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }/*起頭*/ 
			else if (下級石改造2 && cm.haveItem(下級石 ,1) == true && cm.getMeso() >= 下級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(下級石,-1);
					cm.gainMeso(-下級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setGarnet((item.getGarnet() + 1 )); //計算總改造次數
                    item.setHp((item.getHp() + chance4 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance4+"】#k點血量\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (中級石改造2 && cm.haveItem(中級石 ,1) == true  && cm.getMeso() >= 中級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(中級石,-1);
					cm.gainMeso(-中級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setGarnet((item.getGarnet() + 1 )); //計算總改造次數
                    item.setHp((item.getHp() + chance5 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance5+"】#k點血量\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (上級石改造2 && cm.haveItem(上級石 ,1) == true  && cm.getMeso() >= 上級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(上級石,-1);
					cm.gainMeso(-上級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setGarnet((item.getGarnet() + 1 )); //計算總改造次數
                    item.setHp((item.getHp() + chance6 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance6+"】#k點血量\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }/*起頭*/else if (下級蛋改造2 && cm.haveItem(下級蛋 ,1) == true && cm.getMeso() >= 下級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(下級蛋,-1);
					cm.gainMeso(-下級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setOpal((item.getOpal() + 1 )); //計算總改造次數
                    item.setWatk((item.getWatk() + chance7 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance7+"】#k點物理攻擊力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (中級蛋改造2 && cm.haveItem(中級蛋 ,1) == true && cm.getMeso() >= 中級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(中級蛋,-1);
					cm.gainMeso(-中級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setOpal((item.getOpal() + 1 )); //計算總改造次數
                    item.setWatk((item.getWatk() + chance8 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance8+"】#k點物理攻擊力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (上級蛋改造2 && cm.haveItem(上級蛋 ,1) == true && cm.getMeso() >= 上級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(上級蛋,-1);
					cm.gainMeso(-上級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setOpal((item.getOpal() + 1 )); //計算總改造次數
                    item.setWatk((item.getWatk() + chance9 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance9+"】#k點物理攻擊力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }/*起頭*/else if (下級紫改造2 && cm.haveItem(下級紫 ,1) == true && cm.getMeso() >= 下級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(下級紫,-1);
					cm.gainMeso(-下級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setAmethyst((item.getAmethyst() + 1 )); //計算總改造次數
                    item.setAcc((item.getAcc() + chance10 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance10+"】#k點命中率\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (中級紫改造2 && cm.haveItem(中級紫 ,1) == true && cm.getMeso() >= 中級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(中級紫,-1);
					cm.gainMeso(-中級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setAmethyst((item.getAmethyst() + 1 )); //計算總改造次數
                    item.setAcc((item.getAcc() + chance11 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance11+"】#k點命中率\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (上級紫改造2 && cm.haveItem(上級紫 ,1) == true && cm.getMeso() >= 上級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(上級紫,-1);
					cm.gainMeso(-上級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setAmethyst((item.getAmethyst() + 1 )); //計算總改造次數
                    item.setAcc((item.getAcc() + chance12 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance12+"】#k點命中率\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }/*起頭*/else if (下級海改造2 && cm.haveItem(下級海 ,1) == true && cm.getMeso() >= 下級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(下級海,-1);
					cm.gainMeso(-下級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setAquamarine((item.getAquamarine() + 1 )); //計算總改造次數
                    item.setMp((item.getMp() + chance13 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance13+"】#k點魔力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (中級海改造2 && cm.haveItem(中級海 ,1) == true && cm.getMeso() >= 中級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(中級海,-1);
					cm.gainMeso(-中級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setAquamarine((item.getAquamarine() + 1 )); //計算總改造次數
                    item.setMp((item.getMp() + chance14 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance14+"】#k點魔力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (上級海改造2 && cm.haveItem(上級海 ,1) == true && cm.getMeso() >= 上級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(上級海,-1);
					cm.gainMeso(-上級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setAquamarine((item.getAquamarine() + 1 )); //計算總改造次數
                    item.setMp((item.getMp() + chance15 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance15+"】#k點魔力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }/*起頭*/else if (下級黃改造2 && cm.haveItem(下級黃 ,1) == true && cm.getMeso() >= 下級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(下級黃,-1);
					cm.gainMeso(-下級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setHuangJing((item.getHuangJing() + 1 )); //計算總改造次數
                    item.setWdef((item.getWdef() + chance16 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance16+"】#k點防禦力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (中級黃改造2 && cm.haveItem(中級黃 ,1) == true && cm.getMeso() >= 中級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(中級黃,-1);
					cm.gainMeso(-中級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setHuangJing((item.getHuangJing() + 1 )); //計算總改造次數
                    item.setWdef((item.getWdef() + chance17 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance17+"】#k點防禦力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (上級黃改造2 && cm.haveItem(上級黃 ,1) == true && cm.getMeso() >= 上級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(上級黃,-1);
					cm.gainMeso(-上級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setHuangJing((item.getHuangJing() + 1 )); //計算總改造次數
                    item.setWdef((item.getWdef() + chance18 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance18+"】#k點防禦力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }/*起頭*/else if (下級祖改造2 && cm.haveItem(下級祖 ,1) == true && cm.getMeso() >= 下級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(下級祖,-1);
					cm.gainMeso(-下級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setEmerald((item.getEmerald() + 1 )); //計算總改造次數
                    item.setMdef((item.getMdef() + chance19 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance19+"】#k點魔法防禦力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (中級祖改造2 && cm.haveItem(中級祖 ,1) == true && cm.getMeso() >= 中級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(中級祖,-1);
					cm.gainMeso(-中級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setEmerald((item.getEmerald() + 1 )); //計算總改造次數
                    item.setMdef((item.getMdef() + chance20 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance20+"】#k點魔法防禦力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (上級祖改造2 && cm.haveItem(上級祖 ,1) == true && cm.getMeso() >= 上級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(上級祖,-1);
					cm.gainMeso(-上級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setEmerald((item.getEmerald() + 1 )); //計算總改造次數
                    item.setMdef((item.getMdef() + chance21 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance21+"】#k點魔法防禦力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }/*起頭*/else if (下級黑改造2 && cm.haveItem(下級黑 ,1) && cm.getMeso() >= 下級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(下級黑,-1);
					cm.gainMeso(-下級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setBlackCrystal((item.getBlackCrystal() + 1 )); //計算總改造次數
                    item.setAvoid((item.getAvoid() + chance22 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance22+"】#k點迴避率\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (中級黑改造2 && cm.haveItem(中級黑 ,1) == true && cm.getMeso() >= 中級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(中級黑,-1);
					cm.gainMeso(-中級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setBlackCrystal((item.getBlackCrystal() + 1 )); //計算總改造次數
                    item.setAvoid((item.getAvoid() + chance23 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance23+"】#k點迴避率\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (上級黑改造2 && cm.haveItem(上級黑 ,1) == true && cm.getMeso() >= 上級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(上級黑,-1);
					cm.gainMeso(-上級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setBlackCrystal((item.getBlackCrystal() + 1 )); //計算總改造次數
                    item.setAvoid((item.getAvoid() + chance24 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance24+"】#k點迴避率\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else{
                cm.sendOk("抱歉,您沒有改造石無法進行改造，可能原因如下\r\n\r\n"+
						  "#b1#k － #b您無該項目所需改造石\r\n"+
						  "#b2#k － #b您已達該項目上限改造次數\r\n"+
						  "#b3#k － #b您的楓幣不足\r\n"+
						  "#b4#k － #b您已達該項目上限總次數");
                cm.dispose();
				}


			}//第六階段
			else if(item.getLevleEquip()== 6 && item.getReform() <= 119){
			/*起頭*/			
			if (下級藍改造2 && cm.haveItem(下級藍 ,1) == true && cm.getMeso() >= 下級楓幣) {
				item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(下級藍,-1);
					cm.gainMeso(-下級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setSapphire((item.getSapphire() + 1 )); //計算總改造次數
                    item.setMatk((item.getMatk() + chance1 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
					cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance1+"】#k點魔法攻擊力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                    
                cm.dispose();
            }else if (中級藍改造2 && cm.haveItem(中級藍 ,1) == true  && cm.getMeso() >= 中級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(中級藍,-1);
					cm.gainMeso(-中級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setSapphire((item.getSapphire() + 1 )); //計算總改造次數
                    item.setMatk((item.getMatk() + chance2 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance2+"】#k點魔法攻擊力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (上級藍改造2 && cm.haveItem(上級藍 ,1) == true && cm.getMeso() >= 上級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(上級藍,-1);
					cm.gainMeso(-上級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setSapphire((item.getSapphire() + 1 )); //計算總改造次數
                    item.setMatk((item.getMatk() + chance3));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance3+"】#k點魔法攻擊力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }/*起頭*/ 
			else if (下級石改造2 && cm.haveItem(下級石 ,1) == true && cm.getMeso() >= 下級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(下級石,-1);
					cm.gainMeso(-下級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setGarnet((item.getGarnet() + 1 )); //計算總改造次數
                    item.setHp((item.getHp() + chance4 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance4+"】#k點血量\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (中級石改造2 && cm.haveItem(中級石 ,1) == true  && cm.getMeso() >= 中級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(中級石,-1);
					cm.gainMeso(-中級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setGarnet((item.getGarnet() + 1 )); //計算總改造次數
                    item.setHp((item.getHp() + chance5 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance5+"】#k點血量\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (上級石改造2 && cm.haveItem(上級石 ,1) == true  && cm.getMeso() >= 上級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(上級石,-1);
					cm.gainMeso(-上級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setGarnet((item.getGarnet() + 1 )); //計算總改造次數
                    item.setHp((item.getHp() + chance6 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance6+"】#k點血量\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }/*起頭*/else if (下級蛋改造2 && cm.haveItem(下級蛋 ,1) == true && cm.getMeso() >= 下級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(下級蛋,-1);
					cm.gainMeso(-下級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setOpal((item.getOpal() + 1 )); //計算總改造次數
                    item.setWatk((item.getWatk() + chance7 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance7+"】#k點物理攻擊力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (中級蛋改造2 && cm.haveItem(中級蛋 ,1) == true && cm.getMeso() >= 中級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(中級蛋,-1);
					cm.gainMeso(-中級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setOpal((item.getOpal() + 1 )); //計算總改造次數
                    item.setWatk((item.getWatk() + chance8 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance8+"】#k點物理攻擊力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (上級蛋改造2 && cm.haveItem(上級蛋 ,1) == true && cm.getMeso() >= 上級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(上級蛋,-1);
					cm.gainMeso(-上級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setOpal((item.getOpal() + 1 )); //計算總改造次數
                    item.setWatk((item.getWatk() + chance9 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance9+"】#k點物理攻擊力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }/*起頭*/else if (下級紫改造2 && cm.haveItem(下級紫 ,1) == true && cm.getMeso() >= 下級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(下級紫,-1);
					cm.gainMeso(-下級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setAmethyst((item.getAmethyst() + 1 )); //計算總改造次數
                    item.setAcc((item.getAcc() + chance10 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance10+"】#k點命中率\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (中級紫改造2 && cm.haveItem(中級紫 ,1) == true && cm.getMeso() >= 中級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(中級紫,-1);
					cm.gainMeso(-中級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setAmethyst((item.getAmethyst() + 1 )); //計算總改造次數
                    item.setAcc((item.getAcc() + chance11 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance11+"】#k點命中率\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (上級紫改造2 && cm.haveItem(上級紫 ,1) == true && cm.getMeso() >= 上級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(上級紫,-1);
					cm.gainMeso(-上級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setAmethyst((item.getAmethyst() + 1 )); //計算總改造次數
                    item.setAcc((item.getAcc() + chance12 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance12+"】#k點命中率\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }/*起頭*/else if (下級海改造2 && cm.haveItem(下級海 ,1) == true && cm.getMeso() >= 下級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(下級海,-1);
					cm.gainMeso(-下級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setAquamarine((item.getAquamarine() + 1 )); //計算總改造次數
                    item.setMp((item.getMp() + chance13 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance13+"】#k點魔力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (中級海改造2 && cm.haveItem(中級海 ,1) == true && cm.getMeso() >= 中級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(中級海,-1);
					cm.gainMeso(-中級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setAquamarine((item.getAquamarine() + 1 )); //計算總改造次數
                    item.setMp((item.getMp() + chance14 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance14+"】#k點魔力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (上級海改造2 && cm.haveItem(上級海 ,1) == true && cm.getMeso() >= 上級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(上級海,-1);
					cm.gainMeso(-上級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setAquamarine((item.getAquamarine() + 1 )); //計算總改造次數
                    item.setMp((item.getMp() + chance15 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance15+"】#k點魔力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }/*起頭*/else if (下級黃改造2 && cm.haveItem(下級黃 ,1) == true && cm.getMeso() >= 下級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(下級黃,-1);
					cm.gainMeso(-下級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setHuangJing((item.getHuangJing() + 1 )); //計算總改造次數
                    item.setWdef((item.getWdef() + chance16 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance16+"】#k點防禦力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (中級黃改造2 && cm.haveItem(中級黃 ,1) == true && cm.getMeso() >= 中級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(中級黃,-1);
					cm.gainMeso(-中級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setHuangJing((item.getHuangJing() + 1 )); //計算總改造次數
                    item.setWdef((item.getWdef() + chance17 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance17+"】#k點防禦力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (上級黃改造2 && cm.haveItem(上級黃 ,1) == true && cm.getMeso() >= 上級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(上級黃,-1);
					cm.gainMeso(-上級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setHuangJing((item.getHuangJing() + 1 )); //計算總改造次數
                    item.setWdef((item.getWdef() + chance18 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance18+"】#k點防禦力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }/*起頭*/else if (下級祖改造2 && cm.haveItem(下級祖 ,1) == true && cm.getMeso() >= 下級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(下級祖,-1);
					cm.gainMeso(-下級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setEmerald((item.getEmerald() + 1 )); //計算總改造次數
                    item.setMdef((item.getMdef() + chance19 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance19+"】#k點魔法防禦力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (中級祖改造2 && cm.haveItem(中級祖 ,1) == true && cm.getMeso() >= 中級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(中級祖,-1);
					cm.gainMeso(-中級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setEmerald((item.getEmerald() + 1 )); //計算總改造次數
                    item.setMdef((item.getMdef() + chance20 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance20+"】#k點魔法防禦力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (上級祖改造2 && cm.haveItem(上級祖 ,1) == true && cm.getMeso() >= 上級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(上級祖,-1);
					cm.gainMeso(-上級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setEmerald((item.getEmerald() + 1 )); //計算總改造次數
                    item.setMdef((item.getMdef() + chance21 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance21+"】#k點魔法防禦力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }/*起頭*/else if (下級黑改造2 && cm.haveItem(下級黑 ,1) && cm.getMeso() >= 下級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(下級黑,-1);
					cm.gainMeso(-下級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setBlackCrystal((item.getBlackCrystal() + 1 )); //計算總改造次數
                    item.setAvoid((item.getAvoid() + chance22 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance22+"】#k點迴避率\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (中級黑改造2 && cm.haveItem(中級黑 ,1) == true && cm.getMeso() >= 中級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(中級黑,-1);
					cm.gainMeso(-中級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setBlackCrystal((item.getBlackCrystal() + 1 )); //計算總改造次數
                    item.setAvoid((item.getAvoid() + chance23 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance23+"】#k點迴避率\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (上級黑改造2 && cm.haveItem(上級黑 ,1) == true && cm.getMeso() >= 上級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(上級黑,-1);
					cm.gainMeso(-上級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setBlackCrystal((item.getBlackCrystal() + 1 )); //計算總改造次數
                    item.setAvoid((item.getAvoid() + chance24 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance24+"】#k點迴避率\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else{
                cm.sendOk("抱歉,您沒有改造石無法進行改造，可能原因如下\r\n\r\n"+
						  "#b1#k － #b您無該項目所需改造石\r\n"+
						  "#b2#k － #b您已達該項目上限改造次數\r\n"+
						  "#b3#k － #b您的楓幣不足\r\n"+
						  "#b4#k － #b您已達該項目上限總次數");
                cm.dispose();
				}


			}//第七階段
			else if(item.getLevleEquip()== 7 && item.getReform() <= 159){
			/*起頭*/			
			if (下級藍改造2 && cm.haveItem(下級藍 ,1) == true && cm.getMeso() >= 下級楓幣) {
				item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(下級藍,-1);
					cm.gainMeso(-下級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setSapphire((item.getSapphire() + 1 )); //計算總改造次數
                    item.setMatk((item.getMatk() + chance1 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
					cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance1+"】#k點魔法攻擊力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                    
                cm.dispose();
            }else if (中級藍改造2 && cm.haveItem(中級藍 ,1) == true  && cm.getMeso() >= 中級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(中級藍,-1);
					cm.gainMeso(-中級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setSapphire((item.getSapphire() + 1 )); //計算總改造次數
                    item.setMatk((item.getMatk() + chance2 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance2+"】#k點魔法攻擊力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (上級藍改造2 && cm.haveItem(上級藍 ,1) == true && cm.getMeso() >= 上級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(上級藍,-1);
					cm.gainMeso(-上級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setSapphire((item.getSapphire() + 1 )); //計算總改造次數
                    item.setMatk((item.getMatk() + chance3));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance3+"】#k點魔法攻擊力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }/*起頭*/ 
			else if (下級石改造2 && cm.haveItem(下級石 ,1) == true && cm.getMeso() >= 下級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(下級石,-1);
					cm.gainMeso(-下級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setGarnet((item.getGarnet() + 1 )); //計算總改造次數
                    item.setHp((item.getHp() + chance4 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance4+"】#k點血量\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (中級石改造2 && cm.haveItem(中級石 ,1) == true  && cm.getMeso() >= 中級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(中級石,-1);
					cm.gainMeso(-中級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setGarnet((item.getGarnet() + 1 )); //計算總改造次數
                    item.setHp((item.getHp() + chance5 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance5+"】#k點血量\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (上級石改造2 && cm.haveItem(上級石 ,1) == true  && cm.getMeso() >= 上級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(上級石,-1);
					cm.gainMeso(-上級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setGarnet((item.getGarnet() + 1 )); //計算總改造次數
                    item.setHp((item.getHp() + chance6 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance6+"】#k點血量\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }/*起頭*/else if (下級蛋改造2 && cm.haveItem(下級蛋 ,1) == true && cm.getMeso() >= 下級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(下級蛋,-1);
					cm.gainMeso(-下級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setOpal((item.getOpal() + 1 )); //計算總改造次數
                    item.setWatk((item.getWatk() + chance7 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance7+"】#k點物理攻擊力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (中級蛋改造2 && cm.haveItem(中級蛋 ,1) == true && cm.getMeso() >= 中級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(中級蛋,-1);
					cm.gainMeso(-中級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setOpal((item.getOpal() + 1 )); //計算總改造次數
                    item.setWatk((item.getWatk() + chance8 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance8+"】#k點物理攻擊力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (上級蛋改造2 && cm.haveItem(上級蛋 ,1) == true && cm.getMeso() >= 上級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(上級蛋,-1);
					cm.gainMeso(-上級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setOpal((item.getOpal() + 1 )); //計算總改造次數
                    item.setWatk((item.getWatk() + chance9 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance9+"】#k點物理攻擊力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }/*起頭*/else if (下級紫改造2 && cm.haveItem(下級紫 ,1) == true && cm.getMeso() >= 下級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(下級紫,-1);
					cm.gainMeso(-下級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setAmethyst((item.getAmethyst() + 1 )); //計算總改造次數
                    item.setAcc((item.getAcc() + chance10 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance10+"】#k點命中率\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (中級紫改造2 && cm.haveItem(中級紫 ,1) == true && cm.getMeso() >= 中級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(中級紫,-1);
					cm.gainMeso(-中級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setAmethyst((item.getAmethyst() + 1 )); //計算總改造次數
                    item.setAcc((item.getAcc() + chance11 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance11+"】#k點命中率\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (上級紫改造2 && cm.haveItem(上級紫 ,1) == true && cm.getMeso() >= 上級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(上級紫,-1);
					cm.gainMeso(-上級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setAmethyst((item.getAmethyst() + 1 )); //計算總改造次數
                    item.setAcc((item.getAcc() + chance12 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance12+"】#k點命中率\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }/*起頭*/else if (下級海改造2 && cm.haveItem(下級海 ,1) == true && cm.getMeso() >= 下級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(下級海,-1);
					cm.gainMeso(-下級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setAquamarine((item.getAquamarine() + 1 )); //計算總改造次數
                    item.setMp((item.getMp() + chance13 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance13+"】#k點魔力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (中級海改造2 && cm.haveItem(中級海 ,1) == true && cm.getMeso() >= 中級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(中級海,-1);
					cm.gainMeso(-中級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setAquamarine((item.getAquamarine() + 1 )); //計算總改造次數
                    item.setMp((item.getMp() + chance14 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance14+"】#k點魔力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (上級海改造2 && cm.haveItem(上級海 ,1) == true && cm.getMeso() >= 上級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(上級海,-1);
					cm.gainMeso(-上級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setAquamarine((item.getAquamarine() + 1 )); //計算總改造次數
                    item.setMp((item.getMp() + chance15 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance15+"】#k點魔力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }/*起頭*/else if (下級黃改造2 && cm.haveItem(下級黃 ,1) == true && cm.getMeso() >= 下級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(下級黃,-1);
					cm.gainMeso(-下級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setHuangJing((item.getHuangJing() + 1 )); //計算總改造次數
                    item.setWdef((item.getWdef() + chance16 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance16+"】#k點防禦力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (中級黃改造2 && cm.haveItem(中級黃 ,1) == true && cm.getMeso() >= 中級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(中級黃,-1);
					cm.gainMeso(-中級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setHuangJing((item.getHuangJing() + 1 )); //計算總改造次數
                    item.setWdef((item.getWdef() + chance17 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance17+"】#k點防禦力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (上級黃改造2 && cm.haveItem(上級黃 ,1) == true && cm.getMeso() >= 上級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(上級黃,-1);
					cm.gainMeso(-上級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setHuangJing((item.getHuangJing() + 1 )); //計算總改造次數
                    item.setWdef((item.getWdef() + chance18 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance18+"】#k點防禦力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }/*起頭*/else if (下級祖改造2 && cm.haveItem(下級祖 ,1) == true && cm.getMeso() >= 下級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(下級祖,-1);
					cm.gainMeso(-下級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setEmerald((item.getEmerald() + 1 )); //計算總改造次數
                    item.setMdef((item.getMdef() + chance19 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance19+"】#k點魔法防禦力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (中級祖改造2 && cm.haveItem(中級祖 ,1) == true && cm.getMeso() >= 中級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(中級祖,-1);
					cm.gainMeso(-中級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setEmerald((item.getEmerald() + 1 )); //計算總改造次數
                    item.setMdef((item.getMdef() + chance20 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance20+"】#k點魔法防禦力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (上級祖改造2 && cm.haveItem(上級祖 ,1) == true && cm.getMeso() >= 上級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(上級祖,-1);
					cm.gainMeso(-上級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setEmerald((item.getEmerald() + 1 )); //計算總改造次數
                    item.setMdef((item.getMdef() + chance21 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance21+"】#k點魔法防禦力\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }/*起頭*/else if (下級黑改造2 && cm.haveItem(下級黑 ,1) && cm.getMeso() >= 下級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(下級黑,-1);
					cm.gainMeso(-下級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setBlackCrystal((item.getBlackCrystal() + 1 )); //計算總改造次數
                    item.setAvoid((item.getAvoid() + chance22 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance22+"】#k點迴避率\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (中級黑改造2 && cm.haveItem(中級黑 ,1) == true && cm.getMeso() >= 中級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(中級黑,-1);
					cm.gainMeso(-中級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setBlackCrystal((item.getBlackCrystal() + 1 )); //計算總改造次數
                    item.setAvoid((item.getAvoid() + chance23 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance23+"】#k點迴避率\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else if (上級黑改造2 && cm.haveItem(上級黑 ,1) == true && cm.getMeso() >= 上級楓幣) {
                item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(startnum).copy();
                    cm.gainItem(上級黑,-1);
					cm.gainMeso(-上級楓幣);
					item.setReform((item.getReform() + 1 )); //計算總敲次數
					item.setBlackCrystal((item.getBlackCrystal() + 1 )); //計算總改造次數
                    item.setAvoid((item.getAvoid() + chance24 ));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, startnum, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, false);
                    cm.sendOk("恭喜您完成了本次寶石改造，該裝備已改造了#r"+item.getReform()+"#k次\r\n" +
							  "本次改造增加了#r【"+chance24+"】#k點迴避率\r\n" +
							  "#k裝備改造次數最高為 #r160#k 次，請謹慎分配#k");
                cm.dispose();
            }else{
                cm.sendOk("抱歉,您沒有改造石無法進行改造，可能原因如下\r\n\r\n"+
						  "#b1#k － #b您無該項目所需改造石\r\n"+
						  "#b2#k － #b您已達該項目上限改造次數\r\n"+
						  "#b3#k － #b您的楓幣不足\r\n"+
						  "#b4#k － #b您已達該項目上限總次數");
                cm.dispose();
				}


			}else{
				cm.sendOk("抱歉,您的裝備已達該階級所能升級上限\r\n\r\n"+
						  "#b升級裝備階級即可繼續強化裝備");
                cm.dispose();

			}
			
		}
    }
}