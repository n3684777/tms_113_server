var status = -1;
var picked = 0;
var state = -1;
var 藍圈圈 = "#fEffect/CharacterEff/1112901/0/1#";
var 星星 = "";
var 首圖LOGO = "";
var 分隔線 = "#fEffect/CharacterEff/1082312/0/0#";
var gash點數 = "GASH點數";
var 線上人數 = "線上人數";
var 紅利點數 = "紅利點數";
var 楓葉點數 = "楓葉點數";
var 贊助累積 = "贊助累積";
var 數字0 = "#fUI/GuildMark.img/Mark/Letter/00005026/14#";
var 數字1 = "#fUI/GuildMark.img/Mark/Letter/00005027/14#";
var 數字2 = "#fUI/GuildMark.img/Mark/Letter/00005028/14#";
var 數字3 = "#fUI/GuildMark.img/Mark/Letter/00005029/14#";
var 數字4 = "#fUI/GuildMark.img/Mark/Letter/00005030/14#";
var 數字5 = "#fUI/GuildMark.img/Mark/Letter/00005031/14#";
var 數字6 = "#fUI/GuildMark.img/Mark/Letter/00005032/14#";
var 數字7 = "#fUI/GuildMark.img/Mark/Letter/00005033/14#";
var 數字8 = "#fUI/GuildMark.img/Mark/Letter/00005034/14#";
var 數字9 = "#fUI/GuildMark.img/Mark/Letter/00005035/14#";
var rnum = new Array (數字0,數字1,數字2,數字3,數字4,數字5,數字6,數字7,數字8,數字9);


var list = [	
	//腳本名稱  遊戲內顯示名稱
	["贊助專區/贊助專區", "", "   贊助專區"],
	["獎勵專區/獎勵專區", "", "   獎勵專區"],
	["基本功能/髮型臉型隨機抽", "", "   髮臉隨機"],
	["基本功能/道具廣播", "", "   道具廣播"],
	["基本功能/遊戲攻略", "", "   遊戲攻略"],
	["基本功能/造型相簿", "", "   造型相簿"],
	["基本功能/清除道具", "", "   清除道具"],
	["基本功能/掉寶查詢", "", "   掉寶查詢"],
	["基本功能/美髮美容", "", "   美髮美容"],
	["基本功能/丟棄點裝", "", "   丟棄點裝"],
	["基本功能/王圖斷線返回", "", "   斷線回圖"],
	["基本功能/大神排行", "", "   大神排行"],
	["附魔系統/附魔系統", "", "   附魔系統"],
	["角色相關/騎寵與三寵領取", "", "   騎寵三寵"],
	["角色相關/領取特殊技能", "", "   領取技能"],
	["角色相關/能力值強化", "", "   能力強化"],
	["角色相關/能力值重配", "", "   能力重配"],
	["角色相關/技能能力點補領", "", "   能力補領"],
	["角色相關/一鍵轉職與滿技", "", "   一鍵轉職"],	
	["系統/櫥窗系統", "", "   櫥窗系統"],
	["系統/轉升系統", "", "   角色轉升"],
	["系統/邀請系統", "", "   邀請系統"],
	["系統/銀行系統", "", "   銀行系統"],
	["系統/道具過濾", "", "   道具過濾"],
	["系統/自動補水系統", "", "   自動補水"],
	["系統/心情系統", "", "   心情系統"],
	["每日任務/每日任務聚合", "", "   每日任務"],
	["兌換專區/兌換專區", "", "   兌換專區"],
	["合成系統/合成系統", "", "   合成系統"],
	["傳送系列/世界旅行", "", "   地圖傳送"],
	["黃金鐵鎚", "", "   黃金鐵鎚"],

];
	
function start() {
    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status >= 2 || status == 0) {
            cm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
		var info = [
				   ["","         "+首圖LOGO+"","\r\n\r\n"],
				   [""+星星+"　　 #e#r"+線上人數+"  ",toI (parseInt(cm.getTotalOnline() * 2.3)) , ""+星星+"\r\n\r\n"],
				   [""+星星+"    #e#r"+gash點數+"  ", toI (cm.getPlayer().getCSPoints(1)), ""+星星+"\r\n\r\n"],
				   [""+星星+"    #e#r"+楓葉點數+"  ", toI (cm.getPlayer().getCSPoints(2)), ""+星星+"\r\n\r\n"],
				   [""+星星+"    #e#r"+贊助累積+"  ", toI (cm.getPlayer().getTotalMoney()), ""+星星+"\r\n\r\n"], 
				   [""+星星+"    #e#r"+紅利點數+"  ", toI (cm.getPlayer().getDividend()), ""+星星+"\r\n\r\n"], 
				];

	var msg = "";
	for (var i = 0; i < info.length; i++) {
		msg += info[i][0];	
		msg += FormatString(" ", 8, info[i][1].toString());
		msg += info[i][2];
	}
	msg += "\r\n"
	msg += "#r#e=================【萬能系統】=================#n";
        msg += "                                                                              \r\n";
		var x = 0;
		for (var i = 0; i < list.length; i++) {
		x++;
		msg += "#e#d#L" + i + "#" + format(list[i][2], 9) +"#l"; //選項兩側小圖
		if (x % 3 == 0) {
			msg += "\r\n\r\n";
		} else {
			msg += "";
		}
	}
		msg +=  "\r\n\r\n#r#e============================================\r\n\r\n\r\n\r\n" ;
        cm.sendSimple(msg);
    } else if (status == 1) {
		
        if (!isNaN(list[selection][0])) {
            cm.dispose();
            cm.openNpc(list[selection][0]);
            return;
        } else {
            cm.dispose();
            cm.openNpc(9010000, list[selection][0]);
            return;
        }
    }
}

function FormatString(fill, length, content) {
	var str = content;
	var time = length - content.length;
	while (time > 0) {
		str += fill;
		time--;
	}
	return str;
}

function format(content, length) {
   var str = "";
   var cs = "";
   if(content.length > length) {
      str = content;
   }else{
      for(var i = 0; i < length - content.toString().length; i++) {
         cs = cs + " ";
      }
   }
   str = content + cs;
   return str;
}

function toI (x) {

 if (x < 10) {

 //更換個位數<10數字文字樣式

 return rnum[0]+rnum[x];

 } else if (x < 100) {

 //更換個位數<100數字文字樣式

 return rnum[Math.floor(x/10)]+rnum[x%10];

 } else if (x < 1000) {

 //更換個位數<1000數字文字樣式

 return rnum[Math.floor(x/100)]+rnum[(x%100-x%10)/10]+rnum[x%10];

 } else if (x < 10000)   {

 //更換個位數<10000數字文字樣式

 return rnum[Math.floor(x/1000)]+rnum[(x%1000-x%100)/100]+rnum[(x%100-x%10)/10]+rnum[x%10];

 } else if (x < 100000)  {

 //更換個位數<100000數字文字樣式

  return rnum[Math.floor(x/10000)]+rnum[(x%10000-x%1000)/1000]+rnum[(x%1000-x%100)/100]+rnum[(x%100-x%10)/10]+rnum[x%10];

 } else if (x < 1000000)  {

 //更換個位數<1000000數字文字樣式

  return rnum[Math.floor(x/100000)]+rnum[(x%100000-x%10000)/10000]+rnum[(x%10000-x%1000)/1000]+rnum[(x%1000-x%100)/100]+rnum[(x%100-x%10)/10]+rnum[x%10];

 } else if (x < 10000000)  {

 //更換個位數<10000000數字文字樣式

  return rnum[Math.floor(x/1000000)]+rnum[(x%1000000-x%100000)/100000]+rnum[(x%100000-x%10000)/10000]+rnum[(x%10000-x%1000)/1000]+rnum[(x%1000-x%100)/100]+rnum[(x%100-x%10)/10]+rnum[x%10];

 } else{

 //更換個位數<100000000數字文字樣式

  return rnum[Math.floor(x/10000000)]+rnum[(x%10000000-x%1000000)/1000000]+rnum[(x%1000000-x%100000)/100000]+rnum[(x%100000-x%10000)/10000]+rnum[(x%10000-x%1000)/1000]+rnum[(x%1000-x%100)/100]+rnum[(x%100-x%10)/10]+rnum[x%10];

 }
 
 

}
