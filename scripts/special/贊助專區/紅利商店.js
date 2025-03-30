load('nashorn:mozilla_compat.js');
importPackage(Packages.server);
importPackage(Packages.client.inventory);

var 藍星 = "#fEffect/CharacterEff/1051296/1/0#";
var 橘星 = "#fEffect/CharacterEff/1102232/0/0#";
var 愛心 = "#fEffect/SetEff/240/effect/0#";
var 鴨鴨 = "#fEffect/SetEff/244/effect/0#";
var 海灘菇菇 = "#fEffect/SetEff/197/effect/4#";
var 海灘狐狸 = "#fEffect/SetEff/197/effect/13#";
var 海灘企鵝 = "#fEffect/SetEff/197/effect/22#";
var 上頁腳本 = "贊助專區/贊助專區";
var 上頁 = "#fUI/UIWindow/itemSearch/BtBack/mouseOver/0#";
var status = -1;
var player;
var selectedCommodity;
var _type   ;
var itemId  ;
var quantity;
var price   ;

var 改屬裝備 = "改屬裝備";
var 一般道具 = "一般道具";

var _REWARD = [
	[一般道具, 2022179,   1,  20],
	[一般道具, 2450000,   1,  50],
];

function start() {
   action(1, 0, 0);
}

function action(mode, type, selection) {
   status = (mode == 1 ? status+1 : cm.dispose());
//-------------------------------------
   var str = ""+
             "您擁有的紅利為 : #e#r"+cm.getPlayer().getDividend()+"#n#b\r\n";
   if(status == 0){
      player = cm.getPlayer();
      cm.sendAcceptDecline(str+toRewardInfo());
   }
   
   else if(status == 1){
      上一頁 = selection;
        if(x_2 == 上一頁){
            cm.dispose();
            cm.openNpc(9010000, 上頁腳本);
            return;
        } 
      var str ="\r\n";
      selectedCommodity = _REWARD[selection];
      _type    = selectedCommodity[0];
      itemId   = selectedCommodity[1];
      quantity = selectedCommodity[2];
      price    = selectedCommodity[3];
      
      switch(_type){
         case 一般道具:
            str += "#v"+itemId+"# #z"+itemId+"# * "+quantity+" 需要 紅利 "+price+"\r\n\r\n"+
                   "請問冒險者需要購買多少呢 ? \r\n";
            cm.sendGetNumber(str, 1, 1, 100); break;
            
         case 改屬裝備: 
            str += "#v"+itemId+"# #z"+itemId+"# #b(四屬/攻擊/魔攻)+"+quantity+"#k 需要 "+price+" 紅利\r\n\r\n"+
                   "冒險者確定要購買嗎 ? \r\n";
            cm.sendAcceptDecline(str); break;
      }
   }
   
   else if(status == 2){
      if(selection < -1 || 100 < selection){
         cm.dispose(); return;
      }
      
      switch(_type){
         case 一般道具:
            price    *= selection;
            quantity *= selection;
            if(price <= 0) {
               cm.dispose(); return;
            }
            
            if(player.getDividend() < price){
               cm.sendOk("冒險者您的紅利還差 #b#e"+(price - player.getDividend()) +" #n#k就可以購買囉");
               cm.dispose(); return;
            }
            
            if(!cm.canHold(itemId, quantity)){
               cm.sendOk("請冒險者將背包留出空間哦"+海灘企鵝);
               cm.dispose(); return;
            }
            setPoints();
            giveReward();
            break;
         
         case 改屬裝備:
            if(player.getDividend() < price){
               cm.sendOk("冒險者您的紅利還差 #b#e"+(price - player.getDividend()) +" #n#k就可以購買囉");
               cm.dispose(); return;
            }
            
            if(!cm.canHold(itemId, 1)){
               cm.sendOk("請冒險者將背包留出空間哦"+海灘企鵝);
               cm.dispose(); return;
            }
            
            setPoints();
            giveReward();
            break;
      }

      cm.dispose();
      
   }
}


function toRewardInfo(){
   var str = "\r\n";
    var x = 0;
   for(var i=0; i<_REWARD.length; i++){
      _type    = _REWARD[i][0];
      itemId   = _REWARD[i][1];
      quantity = _REWARD[i][2];
      price    = _REWARD[i][3];
      
      str += "#L"+i+"#";
      
      switch(_type){
            
         case 一般道具:
            str += "【 #v"+itemId+"# 】  #z"+itemId+"# － 紅利 #r"+price+"#b 點#l\r\n";
            break;
            
         case 改屬裝備: 
            str += "#v"+itemId+"# #z"+itemId+"# #b(四屬/攻擊/魔攻)+"+quantity+"#k － "+price+" 紅利";
            break;
            
      }
      
      str += "#l\r\n";
	  x++;
   }
   x_2 = x + 1;
         str +=  "\r\n\r\n                    #L"+x_2+"#"+上頁+"#l\r\n" ;
   return str ;
}

function giveReward(){

   switch(_type){

      case 一般道具:
         cm.gainItem(itemId, quantity);
         break;
         
      case 改屬裝備: 
         var EQUIP = cm.getEquip(itemId);
         EQUIP.setStr (quantity);  
         EQUIP.setDex (quantity);
         EQUIP.setInt (quantity);
         EQUIP.setLuk (quantity);
         EQUIP.setWatk(quantity);
         EQUIP.setMatk(quantity);
         // EQUIP.setExpiration(new Date().valueOf() + (1000*60*60*24)*14 );
         MapleInventoryManipulator.addFromDrop(player.getClient(), EQUIP, true);
         break;
   }
   
}

function setPoints(){
   player.setDividend(- price );
   //player.addActive("花費紅利", price);
   player.dropMessage("[★]花費 "+price+" 紅利, 剩餘 "+player.getDividend()+" 紅利 ^___^");
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