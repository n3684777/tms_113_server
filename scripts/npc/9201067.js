/*怪物轉蛋機 卡納團隊編輯*/
var status;
function getRandom(min, max) {
	if (min > max) {
		return(-1);
	}

	if (min == max) {
		return(min);
	}

	return(min + parseInt(Math.random() * (max - min + 1)));
}
var raro = Array(2220000,9400120,9300140,9500358,9800008,8180001,8130200,8180000,3220000,5220000,3220001,4220000,5220003,5220002,6220000,6220001,7220001,7220002,8220003,8220002);
var iraro = raro[getRandom(0, raro.length - 1)];


var RaroSpawn = [

  [1, -63, 98, 990002002]

]
var 召喚數量 = RaroSpawn[0][0];
var 召喚座標x = RaroSpawn[0][1];
var 召喚座標y = RaroSpawn[0][2];
var 召喚地圖 = RaroSpawn[0][3];

var 娛樂卷 = [

 [5220001, 1]
 
 ]
var 娛樂卷代碼 =  娛樂卷[0][0];
var 娛樂卷數量 =  娛樂卷[0][1];


var BossSpawn = Array(8800000,8220003,8500001,8510000,
					  9420014,9999001,9830018,9830013,9800109,9800113,9800099,
					  9800009,9500363,9420546,9420542,
					  9410089,9410040,9400409,9400376,
					  9400300,9400014,9390714,8880300,8880110,8644011,8642016,9803050,9803031,
					  9803008,9601623);
var BossSpawn2 = BossSpawn[getRandom(0, BossSpawn.length - 1)];
var BossSpawnRandom = getRandom(1, 10);

 
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode < 0)
        cm.dispose();
    else {
        if (mode == 0 && type > 0) {
            cm.dispose();
			cm.sendOk("感恩您的下次光臨。");
            return;
        }
        
        if (mode == 1)
            status++;
        else
            status--;
        
        if (status == 0) {
			cm.sendSimple("您好，我是一台怪物轉蛋機\r\n" +
						  "如果您有#v"+娛樂卷代碼+"##r 【1個】 #k，就可以召喚怪物。" +
						  "在使用前有甚麼是我可以為您做到的?\r\n"+
						  "#b#L0#召喚BOSS怪物#l\r\n"+
						  "#b#L1#什麼是怪物轉蛋機?#l\r\n\r\n"+
						  "#b#L2#在哪邊可以拿到#v"+娛樂卷代碼+"#?#l");
	}if(status == 1) {
		if (selection == 0) { 
			if (cm.haveItem(娛樂卷代碼,娛樂卷數量)) {
			if (BossSpawnRandom <= 6) {
				cm.spawnMobOnMap(iraro ,召喚數量 ,召喚座標x ,召喚座標y ,召喚地圖);
				cm.gainItem(娛樂卷代碼, -娛樂卷數量);
				cm.dispose();
		}else{
				cm.spawnMobOnMap(BossSpawn2 ,召喚數量 ,召喚座標x ,召喚座標y ,召喚地圖);
				cm.worldMessage("『怪物轉蛋機』：太誇張啦！！！玩家"+ cm.getChar().getName() +" 在怪物轉蛋機召喚出稀有BOSS啦!!!");	
				cm.gainItem(娛樂卷代碼, -娛樂卷數量);
				cm.dispose();
			}
		}else{
			cm.sendOk("您的 #v"+ 娛樂卷代碼 +"# 不夠。");
			cm.dispose();
		}
			
		}else if (selection == 1){
			cm.sendOk("在怪物轉蛋系統中，您可以有機率轉到各式各樣有趣的BOSS、活動BOSS，充滿了刺激與驚奇。");
			cm.dispose();
		}else if (selection == 2){
			cm.sendOk("#v"+娛樂卷+"#可透過\r\n"+
					  "1.商城購買\r\n"+
					  "2.兌換專區各項兌換系列\r\n"+
					  "3.每日專區各項兌換系列\r\n"+
					  "4.活動取得\r\n"+
					  "5.金銀寶箱\r\n");
			cm.dispose();
		}else{
               cm.sendOk("你身上沒有該物");
               cm.dispose();
			}
		}	
    }
}

