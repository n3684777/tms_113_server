/* Random(Hair, Face, Skin) Code Refactoring By HappyCat */

load('nashorn:mozilla_compat.js');
importPackage(Packages.server); // MapleItemInformationProvider.
importPackage(java.util); // Collections.

var STAR = "#fUI/StatusBar.img/IMEmode/1#";
var 上頁 = "#fUI/UIWindow/itemSearch/BtBack/mouseOver/0#";
var 上頁腳本 = "聚合功能";
var status = -1;
var player ;
var cost = 25;
var 線1 = "#fMap/MapHelper/worldMap/npcPos3/6#";


function start() {
   action(1, 0, 0);
}

function action(mode, type, selection) {
   status = (mode == 1 ? status+1 : cm.dispose());
//----------------------------------------------------
    
   if(status == 0){
      player = cm.getPlayer();
      var str = "\r\n";
      str += ""+
             "#b              目前擁有 "+format(player.getCSPoints(1),6)+" GASH點數\r\n#k"+
             "#b              目前擁有 "+format(player.getCSPoints(2),6)+" 楓葉點數\r\n\r\n";
      str += ""+線1+" "+線1+" "+線1+" "+線1+" "+線1+" "+線1+" "+線1+" "+線1+" #e#b以下目錄#k#n "+線1+" "+線1+" "+線1+" "+線1+" "+線1+" "+線1+" "+線1+" "+線1+"\r\n\r\n\r\n";
	       
      str += "#e#d          #L0#"+STAR+"  隨機髮型 ("+cost+"點數)#l\r\n\r\n";
      str += "          #L1#"+STAR+"  隨機臉型 ("+cost+"點數)#l\r\n\r\n";
      str += "          #L2#"+STAR+"  隨機膚色 ("+cost+"點數)#l\r\n\r\n\r\n\r\n\r\n";
      str += "                  #L3#"+上頁+"#l\r\n\r\n";
      cm.sendOk(str);
   }
  
   else if(status == 1){
      status = -1;
      上一頁 = selection;
      if(上一頁 == 3){
         cm.dispose();
         cm.openNpc(9010000, 上頁腳本);
         return;
      }
      if(player.getCSPoints(2) >= cost ){
         player.modifyCSPoints(2, -cost, true);
      }else if(player.getCSPoints(1) >= cost){
         player.modifyCSPoints(1, -cost, true);
      }else{
         cm.sendOk("請冒險者確認點數是否足夠哦");
         cm.dispose(); return;
      }
      
      var randomSkin = MapleItemInformationProvider.getInstance().randomSkin_And_ReturnSkinInfo(player, selection);
      cm.sendOk(randomSkin + " #k還滿意嗎 ??");
      //cm.dispose();
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