var status = -1;
var picked = 0;
var state = -1;

var memoline = "#fUI/UIWindow.img/Memo/line#";
var 上頁 = "#fUI/UIWindow/itemSearch/BtBack/mouseOver/0#";
var 迷路 = "#fMap/MapHelper/weather/candy/4#";
var 線1 = "#fMap/MapHelper/worldMap/npcPos3/6#";
var 圖標_暗 = "#fUI/UIWindow.img/UserList/Guild/GuildRank/icon0#";
var 圖標_亮 = "#fUI/StatusBar.img/BtClaim/normal/0#";
var 上頁腳本 = "聚合功能";


var list = [
//腳本,顯示名稱
	["兌換專區/BSPQ點數兌換NPC", "【 BOSSPQ點 】"],
	["兌換專區/在線兌換", "【 在線兌換 】"],
	["兌換專區/怪物包兌換與小遊戲兌換", "【 遊戲兌換 】"],
	["兌換專區/硬幣兌換", "【 硬幣兌換 】"],
	["兌換專區/楓葉兌換系列", "【 楓葉兌換 】"],
	["兌換專區/道具兌換", "【 道具兌換 】"],
	["兌換專區/擊殺兌換", "【 擊殺兌換 】"],

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
         msg += "                   "+迷路+" #e獎勵專區#n "+迷路+"\r\n\r\n"
         msg += ""+線1+" "+線1+" "+線1+" "+線1+" "+線1+" "+線1+" "+線1+" "+線1+" #e#b以下目錄#k#n "+線1+" "+線1+" "+線1+" "+線1+" "+線1+" "+線1+" "+線1+" "+線1+"\r\n\r\n\r\n";
	
         var x = 0;
         for (var i = 0; i < list.length; i++) {
            x++;
            msg += "#e#d            #L" + i + "#" + 圖標_暗 +" " + format(list[i][1], 4) +"#l "; //選項兩側小圖
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

