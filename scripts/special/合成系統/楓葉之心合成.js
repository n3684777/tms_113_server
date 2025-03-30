var status = -1;
var picked = 0;
var state = -1;

var memoline = "#fUI/UIWindow.img/Memo/line#";
var 上頁 = "#fUI/UIWindow/itemSearch/BtBack/mouseOver/0#";
var 迷路 = "#fMap/MapHelper/weather/candy/4#";
var 線1 = "#fMap/MapHelper/worldMap/npcPos3/6#";
var 圖標_1 = "#i1122034#";
var 圖標_2 = "#i1122037#";
var 圖標_3 = "#i1122038#";
var 圖標_4 = "#i1122035#";
var 圖標_5 = "#i1122036#";
var 上頁腳本 = "合成系統/合成系統";


var list = [
//腳本,顯示名稱
   ["合成系統/楓葉之心合成 - 劍士", "【 劍    士 】",圖標_1],
   ["合成系統/楓葉之心合成 - 盜賊", "【 盜    賊 】",圖標_2],
   ["合成系統/楓葉之心合成 - 海盜", "【 海    盜 】",圖標_3],
   ["合成系統/楓葉之心合成 - 法師", "【 法    師 】",圖標_4],
   ["合成系統/楓葉之心合成 - 弓箭手", "【 弓 箭 手 】",圖標_5],

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
         msg += "                   "+迷路+" #e楓葉之心合成#n "+迷路+"\r\n\r\n"
         msg += ""+線1+" "+線1+" "+線1+" "+線1+" "+線1+" "+線1+" "+線1+" "+線1+" #e#b以下目錄#k#n "+線1+" "+線1+" "+線1+" "+線1+" "+線1+" "+線1+" "+線1+" "+線1+"\r\n\r\n\r\n";
	
         var x = 0;
         for (var i = 0; i < list.length; i++) {
            x++;
            msg += "#e#d            #L" + i + "#" + list[i][2] +" " + format(list[i][1], 4) +"#l "; //選項兩側小圖
            if (x % 1 == 0) {
               msg += "\r\n\r\n\r\n";
            } else {
               msg += "";
            }
         }
        x_2 = x + 1;
        msg +=  "\r\n\r\n                #L"+x_2+"#"+上頁+"#l\r\n" ; 
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

