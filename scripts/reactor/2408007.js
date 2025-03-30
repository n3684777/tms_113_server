/*
 *2408002.js
 *Key Warp for Horn Tail PQ [HTPQ]
 *@author Jvlaple
 */
var 迷宮室地圖編號 = 240050100;


importPackage(Packages.client.inventory);

function act() {
   var eim = rm.getPlayer().getEventInstance();
   var outSide_Map = eim.getMapFactory().getMap(迷宮室地圖編號);
   var mapID = rm.getPlayer().getMapId();
   var keyID;
   var original_KeyID = 4001088;
   var stage = -1;
    rm.mapMessage(6, "鑰匙被傳送到某處...");
   switch (mapID) {
      case 240050101: {
         keyID = original_KeyID;
         stage = 1;
         break;
      }
      case 240050102: {
         keyID = original_KeyID + 1 ;
         stage = 2;
         break;
      }
      case 240050103: {
         keyID =  original_KeyID + 2 ;
         stage = 3;
         break;
      }
      case 240050104: {
         keyID =  original_KeyID + 3 ;
         stage = 4;
         break;
      }
      default: {
         keyID = -1;
         break;
      }
   }
   
   eim.setProperty("doorstatus_"+stage, 1);
   var outPut_Key = new Item(keyID, 0, 1);
   var outSide_Map_Reactoer = outSide_Map.getReactorByName("keyDrop1");

   var dropper = eim.getPlayers().get(0);
   outSide_Map.spawnItemDrop(outSide_Map_Reactoer, dropper, outPut_Key, outSide_Map_Reactoer.getPosition(), true, true);
   outSide_Map.mapMessage(6, "位於迷宮室的隊友將鑰匙帶出來了!!");
}