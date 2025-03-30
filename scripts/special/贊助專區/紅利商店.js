load('nashorn:mozilla_compat.js');
importPackage(Packages.server);
importPackage(Packages.client.inventory);

var �ŬP = "#fEffect/CharacterEff/1051296/1/0#";
var ��P = "#fEffect/CharacterEff/1102232/0/0#";
var �R�� = "#fEffect/SetEff/240/effect/0#";
var �n�n = "#fEffect/SetEff/244/effect/0#";
var ���yۣۣ = "#fEffect/SetEff/197/effect/4#";
var ���y���W = "#fEffect/SetEff/197/effect/13#";
var ���y���Z = "#fEffect/SetEff/197/effect/22#";
var �W���}�� = "�٧U�M��/�٧U�M��";
var �W�� = "#fUI/UIWindow/itemSearch/BtBack/mouseOver/0#";
var status = -1;
var player;
var selectedCommodity;
var _type   ;
var itemId  ;
var quantity;
var price   ;

var ���ݸ˳� = "���ݸ˳�";
var �@��D�� = "�@��D��";

var _REWARD = [
	[�@��D��, 2022179,   1,  20],
	[�@��D��, 2450000,   1,  50],
];

function start() {
   action(1, 0, 0);
}

function action(mode, type, selection) {
   status = (mode == 1 ? status+1 : cm.dispose());
//-------------------------------------
   var str = ""+
             "�z�֦������Q�� : #e#r"+cm.getPlayer().getDividend()+"#n#b\r\n";
   if(status == 0){
      player = cm.getPlayer();
      cm.sendAcceptDecline(str+toRewardInfo());
   }
   
   else if(status == 1){
      �W�@�� = selection;
        if(x_2 == �W�@��){
            cm.dispose();
            cm.openNpc(9010000, �W���}��);
            return;
        } 
      var str ="\r\n";
      selectedCommodity = _REWARD[selection];
      _type    = selectedCommodity[0];
      itemId   = selectedCommodity[1];
      quantity = selectedCommodity[2];
      price    = selectedCommodity[3];
      
      switch(_type){
         case �@��D��:
            str += "#v"+itemId+"# #z"+itemId+"# * "+quantity+" �ݭn ���Q "+price+"\r\n\r\n"+
                   "�аݫ_�I�̻ݭn�ʶR�h�֩O ? \r\n";
            cm.sendGetNumber(str, 1, 1, 100); break;
            
         case ���ݸ˳�: 
            str += "#v"+itemId+"# #z"+itemId+"# #b(�|��/����/�]��)+"+quantity+"#k �ݭn "+price+" ���Q\r\n\r\n"+
                   "�_�I�̽T�w�n�ʶR�� ? \r\n";
            cm.sendAcceptDecline(str); break;
      }
   }
   
   else if(status == 2){
      if(selection < -1 || 100 < selection){
         cm.dispose(); return;
      }
      
      switch(_type){
         case �@��D��:
            price    *= selection;
            quantity *= selection;
            if(price <= 0) {
               cm.dispose(); return;
            }
            
            if(player.getDividend() < price){
               cm.sendOk("�_�I�̱z�����Q�ٮt #b#e"+(price - player.getDividend()) +" #n#k�N�i�H�ʶR�o");
               cm.dispose(); return;
            }
            
            if(!cm.canHold(itemId, quantity)){
               cm.sendOk("�Ы_�I�̱N�I�]�d�X�Ŷ��@"+���y���Z);
               cm.dispose(); return;
            }
            setPoints();
            giveReward();
            break;
         
         case ���ݸ˳�:
            if(player.getDividend() < price){
               cm.sendOk("�_�I�̱z�����Q�ٮt #b#e"+(price - player.getDividend()) +" #n#k�N�i�H�ʶR�o");
               cm.dispose(); return;
            }
            
            if(!cm.canHold(itemId, 1)){
               cm.sendOk("�Ы_�I�̱N�I�]�d�X�Ŷ��@"+���y���Z);
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
            
         case �@��D��:
            str += "�i #v"+itemId+"# �j  #z"+itemId+"# �� ���Q #r"+price+"#b �I#l\r\n";
            break;
            
         case ���ݸ˳�: 
            str += "#v"+itemId+"# #z"+itemId+"# #b(�|��/����/�]��)+"+quantity+"#k �� "+price+" ���Q";
            break;
            
      }
      
      str += "#l\r\n";
	  x++;
   }
   x_2 = x + 1;
         str +=  "\r\n\r\n                    #L"+x_2+"#"+�W��+"#l\r\n" ;
   return str ;
}

function giveReward(){

   switch(_type){

      case �@��D��:
         cm.gainItem(itemId, quantity);
         break;
         
      case ���ݸ˳�: 
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
   //player.addActive("��O���Q", price);
   player.dropMessage("[��]��O "+price+" ���Q, �Ѿl "+player.getDividend()+" ���Q ^___^");
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