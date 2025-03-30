var status = -1;
var picked = 0;
var state = -1;

var memoline = "#fUI/UIWindow.img/Memo/line#";
var 上頁 = "#fUI/UIWindow/itemSearch/BtBack/mouseOver/0#";
var 迷路 = "#fMap/MapHelper/weather/candy/4#";
var 線1 = "#fMap/MapHelper/worldMap/npcPos3/6#";
var 圖標_暗 = "#fUI/StatusBar.img/BtClaim/disabled/0#";
var 圖標_亮 = "#fUI/StatusBar.img/BtClaim/normal/0#";
var 上頁腳本 = "贊助專區/贊助專區";

var 贊助_1000_LOG = "贊助滿額#r 1000 元#k";
var 贊助_3000_LOG = "贊助滿額#r 3000 元#k";
var 贊助_5000_LOG = "贊助滿額#r 5000 元#k";
var 贊助_10000_LOG = "贊助滿額#r 10000 元#k";
var 贊助_15000_LOG = "贊助滿額#r 15000 元#k";
var 贊助_20000_LOG = "贊助滿額#r 20000 元#k";
var 贊助_25000_LOG = "贊助滿額#r 25000 元#k";
var 贊助_30000_LOG = "贊助滿額#r 30000 元#k";
var 贊助_35000_LOG = "贊助滿額#r 35000 元#k";
var 贊助_40000_LOG = "贊助滿額#r 40000 元#k";
var 贊助_45000_LOG = "贊助滿額#r 45000 元#k";
var 贊助_50000_LOG = "贊助滿額#r 50000 元#k";


var list = [
    ["贊助專區/1000贊助", "贊助一千",""],
	["贊助專區/3000贊助", "贊助三千",""],
	["贊助專區/5000贊助", "贊助五千",""],
	["贊助專區/10000贊助", "贊助一萬",""],
	["贊助專區/15000贊助", "贊助一萬五千",""],
	["贊助專區/20000贊助", "贊助兩萬",""],
	["贊助專區/25000贊助", "贊助二萬五千",""],
	["贊助專區/30000贊助", "贊助三萬",""],
	["贊助專區/35000贊助", "贊助三萬五千",""],
	["贊助專區/40000贊助", "贊助四萬",""],
	["贊助專區/45000贊助", "贊助四萬五千",""],
	["贊助專區/50000贊助", "贊助五萬",""],
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
        var msg = "";
         msg += "                  "+迷路+" #e贊助滿額#n "+迷路+"\r\n\r\n"
         msg += ""+線1+" "+線1+" "+線1+" "+線1+" "+線1+" "+線1+" "+線1+" "+線1+" #e#b以下目錄#k#n "+線1+" "+線1+" "+線1+" "+線1+" "+線1+" "+線1+" "+線1+" "+線1+"\r\n\r\n";

         var x = 0;
            // 接著引用陣列內容
         var list_2 = [
             ["1", "1000贊助", cm.getPlayer().getPrizeLog(贊助_1000_LOG) >= 1 ? 1 : 0],
             ["2", "3000贊助", cm.getPlayer().getPrizeLog(贊助_3000_LOG) >= 1 ? 1 : 0],
             ["3", "5000贊助", cm.getPlayer().getPrizeLog(贊助_5000_LOG) >= 1 ? 1 : 0],
             ["4", "10000贊助", cm.getPlayer().getPrizeLog(贊助_10000_LOG) >= 1 ? 1 : 0],
             ["5", "15000贊助", cm.getPlayer().getPrizeLog(贊助_15000_LOG) >= 1 ? 1 : 0],
             ["6", "20000贊助", cm.getPlayer().getPrizeLog(贊助_20000_LOG) >= 1 ? 1 : 0],
			 ["7", "25000贊助", cm.getPlayer().getPrizeLog(贊助_25000_LOG) >= 1 ? 1 : 0],
			 ["8", "30000贊助", cm.getPlayer().getPrizeLog(贊助_30000_LOG) >= 1 ? 1 : 0],
			 ["9", "35000贊助", cm.getPlayer().getPrizeLog(贊助_35000_LOG) >= 1 ? 1 : 0],
			 ["10", "40000贊助", cm.getPlayer().getPrizeLog(贊助_40000_LOG) >= 1 ? 1 : 0],
			 ["11", "45000贊助", cm.getPlayer().getPrizeLog(贊助_45000_LOG) >= 1 ? 1 : 0],
			 ["12", "50000贊助", cm.getPlayer().getPrizeLog(贊助_50000_LOG) >= 1 ? 1 : 0],
         ];
         for (var i = 0; i < list.length; i++) {
             x++;
             msg += "#e#d#L" + i + "#" + (list_2[i][2] > 0 ? ("" + 圖標_亮 + "") : "" + 圖標_暗 + "") + " " + format(list[i][1], 4) + "#l"; //選項兩側小圖
             if (x % 2 == 0) {
                 msg += "\r\n\r\n";
             } else {
                 msg += "         ";
             }
         }
        x_2 = x + 1;
        msg +=  "\r\n\r\n#L"+x_2+"#"+上頁+"#l\r\n" ; 
        cm.sendNext(msg);
    } else if (status == 1) {
        上一頁 = selection;
        if(x_2 == 上一頁){
            cm.dispose();
            cm.openNpc(9010000, 上頁腳本);
            return;
        } 
        
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

