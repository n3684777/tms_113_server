var 藍星 = "#fEffect/CharacterEff/1051296/1/0#";
var 橘星 = "#fEffect/CharacterEff/1102232/0/0#";
var 愛心 = "#fEffect/SetEff/240/effect/0#";
var 鴨鴨 = "#fEffect/SetEff/244/effect/0#";
var LUCK = "#fEffect/ItemEff/1112800/0/3#";
var STAR = "#fEffect/ItemEff/1049000/0/0#";
var 海灘菇菇 = "#fEffect/SetEff/197/effect/4#";
var 海灘狐狸 = "#fEffect/SetEff/197/effect/13#";
var 海灘企鵝 = "#fEffect/SetEff/197/effect/22#";
var 楓幣圖案 = "#v4460007#"
var GASH圖案 = "#v4460006#"
var 楓點圖案 = "#v4460006#"
var 紅利圖案 = "#v4460005#"
var 上頁 = "#fUI/UIWindow/itemSearch/BtBack/mouseOver/0#";
var 迷路 = "#fMap/MapHelper/weather/candy/4#";
var 線1 = "#fMap/MapHelper/worldMap/npcPos3/6#";
var 圖標_暗 = "#fUI/Basic.img/CheckBox/0#";
var 圖標_亮 = "#fUI/Basic.img/CheckBox/1#";
var 上頁腳本 = "獎勵專區/獎勵專區";
var L = "#fUI/GuildMark.img/Mark/Letter/00005011/2#";
var V = "#fUI/GuildMark.img/Mark/Letter/00005021/2#";
var rewardLv;
var rewardTable = null; 

/*******發放道具種類*******/
var 紅利 = "紅利";
var GASH = "點數";
var 楓點 = "楓點";
var 楓幣 = "楓幣";
var 裝備 = "裝備";
var 道具 = "道具";
var 改屬 = "改屬";
var 技能 = "技能";

var Table = [
   [
      [10],               //需求等級
      [
         [改屬, 1072093, 20],
         [道具, 2450000, 1], 
         [道具, 2000001, 300], 
         [道具, 2000003, 300],
         [楓幣,    楓幣, 300000],
      ],
   ],
//__________________________________________________________
   [
      [30],               //需求等級
      [  
         [道具, 1012167 ,   1],
		 [道具, 2450000, 1], 
         [道具, 2000001, 300], 
         [道具, 2000003, 300],
         [楓點,     楓點, 50],
         [楓幣,     楓幣, 1000000],
		 

      ],
   ],
//__________________________________________________________
   [
      [50],               //需求等級
      [  
		 [道具, 4460002, 3],
         [道具, 4460003,  3],
         [道具, 4460004,  5],
         [楓點,     楓點, 50],
         [楓幣,     楓幣, 2000000],
		 
      ],
   ],
//__________________________________________________________
   [
      [70],               //需求等級
      [  
	    [道具, 4460002, 3],
        [道具, 4460003,  3],
        [道具, 4460004,  5],
	    [楓點,     楓點, 150],
        [楓幣,     楓幣, 3000000],
      ],
   ],
//__________________________________________________________
   [
      [80],               //需求等級
      [  
	    [道具, 4460002, 3],
        [道具, 4460003,  3],
        [道具, 4460004,  5],
	    [楓點,     楓點, 150],
		 
		 
      ],
   ],
//__________________________________________________________
   [
      [90],               //需求等級
      [  
		[道具, 4460002, 3],
        [道具, 4460003,  3],
        [道具, 4460004,  5],
	    [楓點,     楓點, 150],
		 
		 
      ],
   ],
//__________________________________________________________
   [
      [100],               //需求等級
      [  
		[道具, 4460002, 3],
        [道具, 4460003,  3],
        [道具, 4460004,  5],
	    [楓點,     楓點, 150],
		 
      ],
   ],
//__________________________________________________________
   [
      [110],               //需求等級
      [  
		[道具, 4460002, 3],
        [道具, 4460003,  3],
        [道具, 4460004,  5],
	    [楓點,     楓點, 150],
		 
      ],
   ],
//__________________________________________________________
   [
      [120],               //需求等級
      [  
		[道具, 4460002, 3],
        [道具, 4460003,  3],
        [道具, 4460004,  5],
	    [楓點,     楓點, 150],
		 
      ],
   ],
//__________________________________________________________
   [
      [150],               //需求等級
      [  
        [道具, 4460002, 3],
        [道具, 4460003,  3],
        [道具, 4460004,  5],
	    [楓點,     楓點, 150],
		 
      ],
   ],
   
//__________________________________________________________
   [
      [180],               //需求等級
      [  
        [道具, 4460002, 3],
        [道具, 4460003,  3],
        [道具, 4460004,  5],
	    [楓點,     楓點, 150],
		 
      ],
   ],
   
//__________________________________________________________
   [
      [200],               //需求等級
      [  
        [道具, 4460002, 3],
        [道具, 4460003,  3],
        [道具, 4460004,  5],
	    [楓點,     楓點, 150],
		 
      ],
   ],
   
]
///=========================================================/// 

var rewardLevel_10 = "Lv. 10 Reward";

var rewardLevel_30 = "Lv. 30 Reward";

var rewardLevel_50 = "Lv. 50 Reward";

var rewardLevel_70 = "Lv. 70 Reward";

var rewardLevel_80 = "Lv. 80 Reward";

var rewardLevel_90 = "Lv. 90 Reward";

var rewardLevel_100 = "Lv. 100 Reward";

var rewardLevel_110 = "Lv. 110 Reward";

var rewardLevel_120 = "Lv. 120 Reward";

var rewardLevel_150 = "Lv. 150 Reward";

var rewardLevel_180 = "Lv. 180 Reward";

var rewardLevel_200 = "Lv. 200 Reward";

var 數字_0 = "#fUI/GuildMark.img/Mark/Letter/00005026/2#";
var 數字_1 = "#fUI/GuildMark.img/Mark/Letter/00005027/2#";
var 數字_2 = "#fUI/GuildMark.img/Mark/Letter/00005028/2#";
var 數字_3 = "#fUI/GuildMark.img/Mark/Letter/00005029/2#";
var 數字_4 = "#fUI/GuildMark.img/Mark/Letter/00005030/2#";
var 數字_5 = "#fUI/GuildMark.img/Mark/Letter/00005031/2#";
var 數字_6 = "#fUI/GuildMark.img/Mark/Letter/00005032/2#";
var 數字_7 = "#fUI/GuildMark.img/Mark/Letter/00005033/2#";
var 數字_8 = "#fUI/GuildMark.img/Mark/Letter/00005034/2#";
var 數字_9 = "#fUI/GuildMark.img/Mark/Letter/00005035/2#";
var rnum = new Array (數字_0,數字_1,數字_2,數字_3,數字_4,數字_5,數字_6,數字_7 ,數字_8,數字_9);

var 獎勵字 = "#fUI/UIWindow/EntrustedFishingResult/BtGetAllItem/mouseOver/0#";

load('nashorn:mozilla_compat.js');
importPackage(Packages.server);
importPackage(Packages.client.inventory);

var status = -1;
var player = null;

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
   status = (mode == 1 ? status+1 : cm.dispose());
//--------------------------------------------------

	if(status == 0){
      player = cm.getPlayer();
      var str = "";
      str += "#b           【 請點選相應的等級就可以領取囉 】#e#d\r\n\r\n\r\n";
      var x = 0;
      var Table_2 = [
             ["1", 獎勵字, cm.getPlayer().getPrizeLog(rewardLevel_10) >= 1 ? 1 : 0],
             ["2", 獎勵字, cm.getPlayer().getPrizeLog(rewardLevel_30) >= 1 ? 1 : 0],
             ["3", 獎勵字, cm.getPlayer().getPrizeLog(rewardLevel_50) >= 1 ? 1 : 0],
             ["4", 獎勵字, cm.getPlayer().getPrizeLog(rewardLevel_70) >= 1 ? 1 : 0],
             ["5", 獎勵字, cm.getPlayer().getPrizeLog(rewardLevel_80) >= 1 ? 1 : 0],
             ["6", 獎勵字, cm.getPlayer().getPrizeLog(rewardLevel_90) >= 1 ? 1 : 0],
             ["7", 獎勵字, cm.getPlayer().getPrizeLog(rewardLevel_100) >= 1 ? 1 : 0],
             ["8", 獎勵字, cm.getPlayer().getPrizeLog(rewardLevel_110) >= 1 ? 1 : 0],
             ["9", 獎勵字, cm.getPlayer().getPrizeLog(rewardLevel_120) >= 1 ? 1 : 0],
             ["10", 獎勵字, cm.getPlayer().getPrizeLog(rewardLevel_150) >= 1 ? 1 : 0],
             ["11", 獎勵字, cm.getPlayer().getPrizeLog(rewardLevel_180) >= 1 ? 1 : 0],
             ["12", 獎勵字, cm.getPlayer().getPrizeLog(rewardLevel_200) >= 1 ? 1 : 0],
         ];
      for(var i=0; i<Table.length; i++){
         x++;
         if(i < 12){
            str += "          #L"+i+"#" + (Table_2[i][2] > 0 ? ("" + 圖標_亮 + "") : "" + 圖標_暗 + "") + "  "+L+""+V+"."+toI(Table[i][0][0])+"   "+Table_2[i][1]+"#l\r\n\r\n";
         }else
            str += "          #L"+i+"#" + (Table_2[i][2] > 0 ? ("" + 圖標_亮 + "") : "" + 圖標_暗 + "") + "  "+L+""+V+"."+toI(Table[i][0][0])+"  "+Table_2[i][1]+"#l\r\n\r\n";
      }
        x_2 = x + 1;
        str +=  "\r\n\r\n                #L"+x_2+"#"+上頁+"#l\r\n" ; 
      cm.sendOk(str);
   }
         
   else if(status == 1){
      上一頁 = selection;
        if(x_2 == 上一頁){
            cm.dispose();
            cm.openNpc(9010000, 上頁腳本);
            return;
        } 
      rewardLv    = Table[selection][0][0];
      rewardTable = Table[selection][1];
      var rewardInfo = getRewardInfo();
      cm.sendAcceptDecline(rewardInfo);
   }

   else if(status == 2){
      var playerLv = player.getLevel();
      var playerId = player.getId();
      //領獎的log
      var rewardProject = "Lv. "+rewardLv+" Reward";
      
      if(playerLv < rewardLv){
         cm.sendOk("冒險者只要再提升 #e#b"+(rewardLv-playerLv)+" #n#k級，就可以領取獎勵囉");
         cm.dispose(); return;
      }
      if(player.getPrizeLog(rewardProject) >= 1) {
         cm.sendOk("冒險者您已領取 #e#b Lv. "+rewardLv+" #n#k獎勵囉");
         cm.dispose(); return;
      }
      if(!isCanHold()){
         cm.sendOk("請冒險者將裝備、消耗、其他欄位空出 6 格以上的空間哦");
         cm.dispose(); return;
      }
      
      player.setPrizeLog(rewardProject);
      giveReward();
      cm.sendOk("冒險者祝您玩得愉快^__^");

      cm.dispose();
   }
}

///=========================================================///
///=========================================================///
///=========================================================///

function gainAdjEquip(itemId, itemQuan){//改屬ust 裝備ip 給改屬(四屬)
   var _EQU = cm.getEquip(itemId);
   _EQU.setStr(itemQuan);  
   _EQU.setDex(itemQuan);
   _EQU.setInt(itemQuan);
   _EQU.setLuk(itemQuan);
   _EQU.setWatk(itemQuan/4);
   _EQU.setMatk(itemQuan/4);
   MapleInventoryManipulator.addFromDrop(cm.getClient(), _EQU, true);
}

function gainItem(itemMod, itemId, itemQuan){
   if(itemMod == 改屬){//改屬
      gainAdjEquip(itemId, itemQuan);
      return;
   }
   
   if(itemMod == 技能){//傳授技能
      cm.teach技能(itemId, itemQuan, 30);
      return;
   }

   switch(itemId){//現金點數、楓點、楓幣、一般裝備、道具
      case 紅利:
         player.setDividend(itemQuan);
         player.dropMessage("獲得 "+itemQuan+" 紅利 目前擁有 : "+player.getDividend()+" 紅利");
         break;
         
      case GASH:
         player.modifyCSPoints(1, itemQuan, true);
         break;
         
      case 楓點:
         player.modifyCSPoints(2, itemQuan, true);
         break;
         
      case 楓幣:
         cm.gainMeso(itemQuan); break;
         
      default:
         cm.gainItem(itemId, itemQuan);
   }
}

function giveReward(){
   var reward;
   var itemMod;
   var rewardId;
   var rewardQuan;
   for(var i=0; i<rewardTable.length; i++){
      reward = rewardTable[i];
      itemMod    = ""+reward[0];
      rewardId   = reward[1];
      rewardQuan = reward[2];
      gainItem(itemMod, rewardId, rewardQuan);
   }
   var playerLv = player.getLevel();
   if (cm.getJob() == 400 || cm.getJob() == 410 || cm.getJob() == 411 && playerLv >= 70) {
            gainItem(itemMod, 2070005, 3);
        }
}

function getRewardInfo(){
   var rewardInfo = "            【#eLv."+rewardLv+" 等獎勵內容如下】\r\n";
   
   var reward = null;
   var itemMod;
   var rewardId;
   var rewardQuan;
   
   rewardInfo += "============================================\r\n";
   for(var i=0; i<rewardTable.length; i++){
      reward = rewardTable[i];
      itemMod    = ""+reward[0];
      rewardId   = reward[1];
      rewardQuan = reward[2];
      
      if(itemMod == 改屬){
         rewardInfo += "#v"+rewardId+"# #b#z"+rewardId+"# #b(四屬 + "+rewardQuan+")#k";
      }else if(itemMod == 技能){
         rewardInfo += "#s"+rewardId+"# #b#q"+rewardId+"# Lv."+rewardQuan+"#k";
      }else{
         switch(rewardId){
            case 紅利:
               rewardInfo += 紅利圖案 + " 紅利 × "+rewardQuan+"#k"; 
               break;
            
            case GASH:
               rewardInfo += GASH圖案 + " GASH × "+rewardQuan+"#k"; 
               break;
               
            case 楓點:
               rewardInfo += 楓點圖案 + " 楓點 × "+rewardQuan+"#k";
               break;
               
            case 楓幣:
               rewardInfo += 楓幣圖案 + " 楓幣 × "+rewardQuan+"#k";
               break;
               
            default:
               rewardInfo += "#v"+rewardId+"# #b#z"+rewardId+"# #k× #b"+rewardQuan+"#k";
               break; 
         }
      }
      rewardInfo += "\r\n";
   }
   var playerLv = player.getLevel();
   if (cm.getJob() == 400 || cm.getJob() == 410 || cm.getJob() == 411 && playerLv >= rewardLv) {
            rewardInfo += "#v"+2070005+"# #b#z"+2070005+"# #k× #b"+3+"#k";
            rewardInfo += "\r\n";
        }
   // rewardInfo += "#L0#"+LUCK+" #e領取獎勵 "+LUCK+"\r\n";
   return rewardInfo;
}

function isCanHold(){
   var player = cm.getPlayer();
   var equFreeSlot = player.getInventory(MapleInventoryType.EQUIP).getNumFreeSlot();
   var useFreeSlot = player.getInventory(MapleInventoryType.USE).getNumFreeSlot();
   var etcFreeSlot = player.getInventory(MapleInventoryType.ETC).getNumFreeSlot();
   return (equFreeSlot>=6 && useFreeSlot>=6 && etcFreeSlot>=6 && cm.getMeso()<=2000000000);
}

///*********************************************



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



