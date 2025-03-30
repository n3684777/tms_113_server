load('nashorn:mozilla_compat.js');
importPackage(Packages.constants); //WorldConstants.
var status = -1;
var picked = 0;
var state = -1;
var memoline = "#fUI/UIWindow.img/Memo/line#";
var 上頁 = "#fUI/UIWindow/itemSearch/BtBack/mouseOver/0#";
var 迷路 = "#fMap/MapHelper/weather/candy/4#";
var 線1 = "#fMap/MapHelper/worldMap/npcPos3/6#";
var 基礎附魔 = "#i4000004#";
var 中級附魔 = "#i4000005#";
var 高級附魔 = "#i4000006#";
var 高級附魔 = "#i4000007#";
var 屬性轉移 = "#i4000008#";
var 重製附魔 = "#i2000005#";
var 上頁腳本 = "聚合功能";


var list = [
//腳本,顯示名稱
   ["附魔系統/基礎附魔", "【基礎附魔】",format(基礎附魔,11)],
   ["附魔系統/中級附魔", "【中級附魔】",format(中級附魔,11)],
   ["附魔系統/高級附魔", "【高級附魔】",format(高級附魔,11)],
   ["附魔系統/點裝能力值轉移", "【屬性轉移】",format(屬性轉移,11)],
   ["附魔系統/重置附魔裝備", "【重製附魔】",format(重製附魔,11)],
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
         msg += "                   "+迷路+" #e附魔系統#n "+迷路+"\r\n\r\n"
         
         msg += ""+線1+" "+線1+" "+線1+" "+線1+" "+線1+" "+線1+" "+線1+" "+線1+" #e#b以下目錄#k#n "+線1+" "+線1+" "+線1+" "+線1+" "+線1+" "+線1+" "+線1+" "+線1+"\r\n\r\n\r\n";
         msg += "               #e每件裝備可以附魔 "+WorldConstants.裝備可附魔次數+" 次#n \r\n\r\n"
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

