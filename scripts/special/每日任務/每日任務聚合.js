importPackage(Packages.handling.world.accountlog);
var status = -1;
var picked = 0;
var state = -1;

var memoline = "#fUI/UIWindow.img/Memo/line#";
var 上頁 = "#fUI/UIWindow/itemSearch/BtBack/mouseOver/0#";
var 迷路 = "#fMap/MapHelper/weather/candy/4#";
var 線1 = "#fMap/MapHelper/worldMap/npcPos3/6#";
var 圖標_暗 = "#fUI/StatusBar.img/BtClaim/disabled/0#";
var 圖標_亮 = "#fUI/StatusBar.img/BtClaim/normal/0#";
var 上頁腳本 = "聚合功能";

var log = "每日任務道具蒐集系列一記錄";
var objDate = new Date();
var Month = objDate.getMonth();
var MonthS = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
var tzc = objDate.getDate();
var day = objDate.getDay();
var Year = objDate.getFullYear();

var 道具蒐集LOG = "每日任務道具蒐集系列一記錄";
var 道具蒐集LOG_紀錄 = "" + Year + "年" + MonthS[Month] + tzc + "日" + 道具蒐集LOG + "";

var Month_1= objDate.getMonth()+1;
var _每日簽到高級LOG = "每日簽到"+Year+"/"+Month_1+"/"+tzc;

var 在線獎勵LOG = "360分鐘在線獎勵";
var 在線獎勵LOG_紀錄 = "" + Year + "年" + MonthS[Month] + tzc + "日" + 在線獎勵LOG + "";

var 每日擊殺LOG = "每日擊殺挑戰";
var 每日擊殺LOG_紀錄 = "" + Year + "年" + MonthS[Month] + tzc + "日" + 每日擊殺LOG + "";

var 每日推廣LOG = "每日推廣";
var 每日推廣LOG_紀錄 = "" + Year + "年" + MonthS[Month] + tzc + "日" + 每日推廣LOG + "";

var 每日組隊LOG = "每日組隊任務";
var 每日組隊LOG_紀錄 = "" + Year + "年" + MonthS[Month] + tzc + "日" + 每日組隊LOG + "";

var 隨機蒐集LOG = "每日隨機道具蒐集";
var 隨機蒐集LOG_紀錄 = "" + Year + "年" + MonthS[Month] + tzc + "日" + 隨機蒐集LOG + "";

var 指定怪物擊殺LOG = "每日怪物擊殺_系列一_完成確認";
var 指定怪物擊殺LOG_紀錄 = "" + Year + "年" + MonthS[Month] + tzc + "日" + 指定怪物擊殺LOG + "";

var 每日紅利LOG = "每日紅利任務";
var 每日紅利LOG_紀錄 = "" + Year + "年" + MonthS[Month] + tzc + "日" + 每日紅利LOG + "";

var 每日開店LOG = "每日精靈商人開店時間挑戰";
var 每日開店LOG_紀錄 = "" + Year + "年" + MonthS[Month] + tzc + "日" + 每日開店LOG + "";

var 每日遠征LOG = "每日遠征任務";
var 每日遠征LOG_紀錄 = "" + Year + "年" + MonthS[Month] + tzc + "日" + 每日遠征LOG + "";

var 每日商城消費LOG = "每日商城消費獎勵";
var 每日商城消費LOG_紀錄 = "" + Year + "年" + MonthS[Month] + tzc + "日" + 每日商城消費LOG + "";

var list = [
    ["每日任務/在線獎勵進階", "在線獎勵",""],
	["每日任務/每日指定怪物擊殺", "指定擊殺",""],
	["每日任務/每日紅利任務", "每日紅利",""],
	["每日任務/每日商城消費", "每日商城",""],
    ["每日任務/每日推廣", "每日推廣",""],
    ["每日任務/每日組隊任務", "每日組隊",""],
    ["每日任務/每日道具蒐集任務", "道具蒐集",""],
	["每日任務/每日精靈商人開店時間挑戰", "每日開店",""],
	["每日任務/每日遠征任務", "每日遠征",""],
	["每日任務/每日隨機道具蒐集任務", "隨機蒐集",""],
    ["每日任務/每日擊殺挑戰", "每日擊殺",""],
	["每日任務/每日簽到高級", "每日簽到",""],
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
         msg += "                  "+迷路+" #e每日任務#n "+迷路+"\r\n\r\n"
         msg += ""+線1+" "+線1+" "+線1+" "+線1+" "+線1+" "+線1+" "+線1+" "+線1+" #e#b以下目錄#k#n "+線1+" "+線1+" "+線1+" "+線1+" "+線1+" "+線1+" "+線1+" "+線1+"\r\n\r\n";

         var x = 0;
            // 接著引用陣列內容
         var list_2 = [
             ["1", "在線獎勵", cm.getPlayer().getPrizeLog(在線獎勵LOG_紀錄) >= 1 ? 1 : 0],
			 ["2", "指定擊殺", cm.getPlayer().getPrizeLog(指定怪物擊殺LOG_紀錄) >= 1 ? 1 : 0],
			 ["3", "每日紅利", cm.getPlayer().getPrizeLog(每日紅利LOG_紀錄) >= 1 ? 1 : 0],
			 ["4", "每日商城", cm.getPlayer().getPrizeLog(每日商城消費LOG_紀錄) >= 1 ? 1 : 0],
             ["5", "每日推廣", cm.getDailyAmount(EventLogType.ACCOUNT, 每日推廣LOG) >= 1 ? 1 : 0],
             ["6", "每日組隊", cm.getPlayer().getPrizeLog(每日組隊LOG_紀錄) >= 8 ? 1 : 0],
             ["7", "道具蒐集", cm.getPlayer().getPrizeLog(道具蒐集LOG_紀錄) >= 1 ? 1 : 0],
			 ["8", "每日開店", cm.getPlayer().getPrizeLog(每日開店LOG_紀錄) >= 1 ? 1 : 0],
             ["9", "每日遠征", cm.getPlayer().getPrizeLog(每日遠征LOG_紀錄) >= 12 ? 1 : 0],
			 ["10", "隨機蒐集", cm.getPlayer().getPrizeLog(隨機蒐集LOG_紀錄) >= 5 ? 1 : 0],
             ["11", "每日擊殺", cm.getPlayer().getPrizeLog(每日擊殺LOG_紀錄) >= 1 ? 1 : 0],
			 ["12", "每日簽到", cm.getPlayer().getPrizeLog(_每日簽到高級LOG) >= 1 ? 1 : 0],
         ];
         for (var i = 0; i < list.length; i++) {
             x++;
             msg += "#e#d#L" + i + "#" + (list_2[i][2] > 0 ? ("" + 圖標_亮 + "") : "" + 圖標_暗 + "") + " " + format(list[i][1], 4) + "#l "; //選項兩側小圖
             if (x % 3 == 0) {
                 msg += "\r\n\r\n";
             } else {
                 msg += "";
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

