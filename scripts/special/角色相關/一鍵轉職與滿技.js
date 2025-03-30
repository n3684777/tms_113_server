var status = -1;
var picked = 0;
var state = -1;
importPackage(Packages.constants); //WorldConstants.
var memoline = "#fUI/UIWindow.img/Memo/line#";
var 上頁 = "#fUI/UIWindow/itemSearch/BtBack/mouseOver/0#";
var 迷路 = "#fMap/MapHelper/weather/candy/4#";
var 線1 = "#fMap/MapHelper/worldMap/npcPos3/6#";
var 上頁腳本 = "聚合功能";
var 劍士 = "#i1302007#";
var 法師 = "#i1372043#";
var 弓箭手 = "#i1452002#";
var 盜賊 = "#i1472000#";
var 海盜 = "#i1492001#";
var 狂狼 = "#i1442083#";
///控制列 1 - 3 用
var 轉職後將技能全滿 = 1; // 0 = 關  1 = 開

///控制列 4 轉用
var 四轉技能點滿 = 1; //  0 = 關  1 = 開。如果設定 0 一樣會給滿技能，但會是不能用的狀態，需要升級後去增加技能點。


var job = [
   [[100, "劍士",劍士], [200, "法師",法師], [300, "弓箭手",弓箭手], [400, "盜賊",盜賊], [500, "海盜",海盜]],
   [[1100, "聖魂騎士",劍士], [1200, "烈焰巫師",法師], [1300, "破風使者",弓箭手], [1400, "暗夜行者",盜賊], [1500, "閃雷悍將",海盜]],
   [[3200, "煉獄巫師",法師], [3300, "狂暴獵人",弓箭手], [3500, "機甲戰神",海盜]],
   [[110, "狂戰士",劍士], [120, "見習騎士",劍士], [130, "槍騎兵",劍士]],
   [[210, "巫師 ( 火/毒 )",法師], [220, "巫師 ( 冰/雷 )",法師], [230, "僧侶",法師]],
   [[310, "獵人",弓箭手], [320, "孥弓手",弓箭手]],
   [[410, "刺客",盜賊], [420, "俠盜",盜賊]],
   [[510, "打手",海盜], [520, "槍手",海盜]]
];
   
var extrajobs = [
   [2300, "精靈遊俠"], [3100, "惡魔殺手"]
];
var specialextrajobs = [
   [9400, "影武者"],[9501, "重砲手"]
];
var extra = true;
var select;
var tempest = false;
var jobindex;

    function start() {
		jobindex = null;
		select = null;
		status = -1;
		action(1, 0, 0);
	}

	function action(mode, type, selection) {
		if (mode == 0 || mode == -1 && status == 0) {
			cm.dispose();
			return;
		} else
			(mode == 1 ? status++ : status--);
		if (status == 0) {
			if (
				(cm.getPlayer().getLevel() >= 10 &&
					(cm.getPlayer().getJob() % 1000 == 0 || cm.getPlayer().getJob() == 501 || cm.getPlayer().getJob() == 3001 || cm.getPlayer().getJob() >= 2001 && cm.getPlayer().getJob() <= 2003)
					|| cm.getPlayer().getLevel() >= 30 && (cm.getPlayer().getJob() % 1000 > 0 && cm.getPlayer().getJob() % 100 == 0
					|| cm.getPlayer().getJob() == 508)
					|| cm.getPlayer().getLevel() >= (tempest ? 60 : 70) && cm.getPlayer().getJob() % 10 == 0 && cm.getPlayer().getJob() % 100 != 0
					|| cm.getPlayer().getLevel() >= (tempest ? 100 : 120) && cm.getPlayer().getJob() % 10 == 1
					|| cm.getPlayer().getLevel() >= 20 && cm.getPlayer().getJob() == 400 && cm.getPlayer().getSubcategory() == 1
					|| cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getJob() == 430 || cm.getPlayer().getLevel() >= (tempest ? 45 : 55) && cm.getPlayer().getJob() == 431 || cm.getPlayer().getLevel() >= (tempest ? 60 : 70) && cm.getPlayer().getJob() == 432 || cm.getPlayer().getLevel() >= (tempest ? 100 : 120) && cm.getPlayer().getJob() == 433)
					&& (cm.getPlayer().getJob() % 10 != 2 && cm.getPlayer().getJob() % 10 != 4 || cm.getPlayer().getJob() == 432))
				cm.sendYesNo("你想要轉職嗎?");
			else {
				cm.sendOk("你已經有職業了.");
				cm.dispose();
			}
		} else if (status == 1) {
			if (cm.getPlayer().getSubcategory() == 1 && cm.getPlayer().getJob() == 0) { //Dual Blade
				cm.getPlayer().changeJob(400);
				cm.dispose();
				return;
			}
			if (cm.getPlayer().getSubcategory() == 1 && cm.getPlayer().getJob() == 400) { //Dual Blade
                cm.getPlayer().changeJob(430);
				cm.gainItem(5620000, 1);//
				cm.gainItem(5620001, 1);// Mastery Books before 4th job
				cm.gainItem(5620002, 1);//
				cm.gainItem(5620003, 1);//
				cm.dispose();
				return;
			}
			if (cm.getPlayer().getSubcategory() == 2 && cm.getPlayer().getJob() == 0) { //Cannoneer
				cm.getPlayer().changeJob(501);
				cm.dispose();
				return;
			}
			switch (cm.getPlayer().getJob()) {
				//Jobs with selections
				case 0: // Beginner
					jobSelection(0);
					break;
				case 1000: // Noblesse
					jobSelection(1);
					break;
				//Note: Heroes doesn't get job selection, the same goes about Nova.
				case 3000: // Citizen
					jobSelection(2);
					break;
				case 100: // Warrior
					jobSelection(3);
					break;
				case 200: // Magician
					jobSelection(4);
					break;
				case 300: // Bowman
					jobSelection(5);
					break;
				case 400: // Thief
					jobSelection(6);
					break;
				case 500: // Pirate
					jobSelection(7);
					break;
				//Special Jobs
				case 501: // Pirate(Cannoneer)
					cm.getPlayer().changeJob(530);
					cm.dispose();
					return;
				case 2000: // Legend(Aran)
					if(轉職後將技能全滿 == 1){
						cm.teachSkill(21000000, 10, 10);
						cm.teachSkill(21000002, 20, 20);
						cm.teachSkill(21001001, 15, 15);
						cm.teachSkill(21001003, 20, 20);
					}else{
						cm.teachSkill(21000000, 0, 10);
						cm.teachSkill(21000002, 0, 20);
						cm.teachSkill(21001001, 0, 15);
						cm.teachSkill(21001003, 0, 20);
					}
					cm.getPlayer().changeJob(2100);
					cm.dispose();
					return;
				case 2001: // Farmer(Evan)
					cm.getPlayer().changeJob(2200);
					cm.dispose();
					return;
				case 2002: // Mercedes
					cm.getPlayer().changeJob(2300);
					cm.dispose();
					return;
				case 2004: // Luminous
					cm.getPlayer().changeJob(2700);
					cm.dispose();
					return;
				case 3001: // Demon Slayer
					cm.getPlayer().changeJob(3100);
					//cm.getPlayer().forceChangeChannel(cm.getPlayer().getClient().getChannel());
					cm.dispose();
					return;
				// Dual Blader
				case 430: // Blade Reqruit
				case 431: // Blade Acolyte
				case 432: // Blade Specialist
				case 433: // Blade Lord
					cm.getPlayer().changeJob(cm.getPlayer().getJob() + 1);
					cm.dispose();
					return;
				//1st Job
				case 900:  // GM lol
				case 1100: // Dawn Warrior
				if(轉職後將技能全滿 == 1){
					cm.teachSkill(11100000, 20, 20);
					cm.teachSkill(11101001, 20, 20);
					cm.teachSkill(11101002, 30, 30);
					cm.teachSkill(11101003, 20, 20);
					cm.teachSkill(11101004, 30, 30);
					cm.teachSkill(11101005, 10, 10);
				}
				case 1200: // Blaze Wizard
				if(轉職後將技能全滿 == 1){
					cm.teachSkill(12101000, 20, 20);
					cm.teachSkill(12101001, 20, 20);
					cm.teachSkill(12101002, 20, 20);
					cm.teachSkill(12101003, 20, 20);
					cm.teachSkill(12101004, 20, 20);
					cm.teachSkill(12101005, 20, 20);
					cm.teachSkill(12101006, 20, 20);
				}
				case 1300: // Wind Archer
				if(轉職後將技能全滿 == 1){
					cm.teachSkill(13100000, 20, 20);
					cm.teachSkill(13101001, 20, 20);
					cm.teachSkill(13101002, 30, 30);
					cm.teachSkill(13101003, 20, 20);
					cm.teachSkill(13101005, 20, 20);
					cm.teachSkill(13100004, 20, 20);
					cm.teachSkill(13101006, 10, 10);
				}
				case 1400: // Night Walker
				if(轉職後將技能全滿 == 1){
					cm.teachSkill(14100000, 20, 20);
					cm.teachSkill(14100001, 30, 30);
					cm.teachSkill(14101002, 20, 20);
					cm.teachSkill(14101003, 20, 20);
					cm.teachSkill(14101004, 20, 20);
					cm.teachSkill(14100005, 10, 10);
					cm.teachSkill(14101006, 20, 20);
				}
				case 1500: // Thunder Breaker
				if(轉職後將技能全滿 == 1){
					cm.teachSkill(15100000, 10, 10);
					cm.teachSkill(15100001, 20, 20);
					cm.teachSkill(15101002, 20, 20);
					cm.teachSkill(15101003, 20, 20);
					cm.teachSkill(15100004, 20, 20);
				}
				case 2100: // Aran
					if(轉職後將技能全滿 == 1){
						cm.teachSkill(21100000, 20, 20);
						cm.teachSkill(21100001, 20, 20);
						cm.teachSkill(21100002, 30, 30);
						cm.teachSkill(21100004, 20, 20);
						cm.teachSkill(21100005, 20, 20);
						cm.teachSkill(21101003, 20, 20);
					}else{
						cm.teachSkill(21100000, 0, 20);
						cm.teachSkill(21100001, 0, 20);
						cm.teachSkill(21100002, 0, 30);
						cm.teachSkill(21100004, 0, 20);
						cm.teachSkill(21100005, 0, 20);
						cm.teachSkill(21101003, 0, 20);
					}
				case 2300: // Mercedes
				case 2400: // Phantom
				case 3100: // Demon Slayer
				case 3200: // Battle Mage
				case 3300: // Wild Hunter
				case 3500: // Mechanic
				case 5100: // Mihile
				case 6100: // Kaiser
				case 6500: // Angelic Burster
					cm.getPlayer().changeJob(cm.getPlayer().getJob() + 10);
					cm.dispose();
					return;
               //2nd Job
               case 110: // Fighter
			   if(轉職後將技能全滿 == 1){
					cm.teachSkill(1110000, 20, 20);
					cm.teachSkill(1110001, 20, 20);
					cm.teachSkill(1111002, 30, 30);
					cm.teachSkill(1111003, 30, 30);
					cm.teachSkill(1111004, 30, 30);
					cm.teachSkill(1111005, 30, 30);
					cm.teachSkill(1111006, 30, 30);
					cm.teachSkill(1111007, 20, 20);
					cm.teachSkill(1111008, 30, 30);
					}
               case 120: // Page
			   if(轉職後將技能全滿 == 1){
					cm.teachSkill(1210000, 20, 20);
					cm.teachSkill(1210001, 20, 20);
					cm.teachSkill(1211002, 30, 30);
					cm.teachSkill(1211003, 30, 30);
					cm.teachSkill(1211004, 30, 30);
					cm.teachSkill(1211005, 30, 30);
					cm.teachSkill(1211006, 30, 30);
					cm.teachSkill(1211007, 30, 30);
					cm.teachSkill(1211008, 30, 30);
					cm.teachSkill(1211009, 20, 20);
					}
               case 130: // Spearman
			   if(轉職後將技能全滿 == 1){
					cm.teachSkill(1310000, 20, 20);
					cm.teachSkill(1311001, 30, 30);
					cm.teachSkill(1311002, 30, 30);
					cm.teachSkill(1311003, 30, 30);
					cm.teachSkill(1311004, 30, 30);
					cm.teachSkill(1311005, 30, 30);
					cm.teachSkill(1311006, 30, 30);
					cm.teachSkill(1311007, 20, 20);
					cm.teachSkill(1311008, 20, 20);
				   
				}
				case 210: // Wizard(F/P)
				if(轉職後將技能全滿 == 1){
					cm.teachSkill(2110000, 20, 20);
					cm.teachSkill(2110001, 30, 30);
					cm.teachSkill(2111002, 30, 30);
					cm.teachSkill(2111003, 30, 30);
					cm.teachSkill(2111004, 20, 20);
					cm.teachSkill(2111005, 20, 20);
					cm.teachSkill(2111006, 30, 30);
				   
				}
				case 220: // Wizard(I/L)
				if(轉職後將技能全滿 == 1){
					cm.teachSkill(2210000, 20, 20);
					cm.teachSkill(2210001, 30, 30);
					cm.teachSkill(2211002, 30, 30);
					cm.teachSkill(2211003, 30, 30);
					cm.teachSkill(2211004, 20, 20);
					cm.teachSkill(2211005, 20, 20);
					cm.teachSkill(2211006, 30, 30);
				}
				case 230: // Cleric
				if(轉職後將技能全滿 == 1){
					cm.teachSkill(2310000, 20, 20);
					cm.teachSkill(2311001, 20, 20);
					cm.teachSkill(2311002, 20, 20);
					cm.teachSkill(2311003, 30, 30);
					cm.teachSkill(2311004, 30, 30);
					cm.teachSkill(2311005, 30, 30);
					cm.teachSkill(2311006, 30, 30);
				   
				}
				case 310: // Hunter
				if(轉職後將技能全滿 == 1){
					cm.teachSkill(3110000, 20, 20);
					cm.teachSkill(3110001, 20, 20);
					cm.teachSkill(3111002, 20, 20);
					cm.teachSkill(3111003, 30, 30);
					cm.teachSkill(3111004, 30, 30);
					cm.teachSkill(3111005, 30, 30);
					cm.teachSkill(3111006, 30, 30);
				   
				}
				case 320: // Crossbow man
				if(轉職後將技能全滿 == 1){
					cm.teachSkill(3210000, 20, 20);
					cm.teachSkill(3210001, 20, 20);
					cm.teachSkill(3211002, 20, 20);
					cm.teachSkill(3211003, 30, 30);
					cm.teachSkill(3211004, 30, 30);
					cm.teachSkill(3211005, 30, 30);
					cm.teachSkill(3211006, 30, 30);
				}
				case 410: // Assassin
				if(轉職後將技能全滿 == 1){
					cm.teachSkill(4110000, 20, 20);
					cm.teachSkill(4111001, 20, 20);
					cm.teachSkill(4111002, 30, 30);
					cm.teachSkill(4111003, 20, 20);
					cm.teachSkill(4111004, 30, 30);
					cm.teachSkill(4111005, 30, 30);
					cm.teachSkill(4111006, 20, 20);  
				}
				case 420: // Bandit
				if(轉職後將技能全滿 == 1){
					cm.teachSkill(4210000, 20, 20);
					cm.teachSkill(4211001, 30, 30);
					cm.teachSkill(4211002, 30, 30);
					cm.teachSkill(4211003, 20, 20);
					cm.teachSkill(4211004, 30, 30);
					cm.teachSkill(4211005, 20, 20);
					cm.teachSkill(4211006, 30, 30); 
				}
				case 510: // Brawler
				if(轉職後將技能全滿 == 1){
					cm.teachSkill(5110000, 20, 20);
					cm.teachSkill(5110001, 40, 40);
					cm.teachSkill(5111002, 30, 30);
					cm.teachSkill(5111004, 20, 20);
					cm.teachSkill(5111005, 20, 20);
					cm.teachSkill(5111006, 30, 30);
				}
				case 520: // Gunslinger
				if(轉職後將技能全滿 == 1){
					cm.teachSkill(5210000, 20, 20);
					cm.teachSkill(5211001, 30, 30);
					cm.teachSkill(5211002, 30, 30);
					cm.teachSkill(5211004, 30, 30);
					cm.teachSkill(5211005, 30, 30);
					cm.teachSkill(5211006, 30, 30);
				   
				}
				case 530: // Cannoneer
				case 570: // Jett
				case 1110: // Dawn Warrior
				if(轉職後將技能全滿 == 1){
					cm.teachSkill(11110000, 20, 20);
					cm.teachSkill(11111001, 20, 20);
					cm.teachSkill(11111002, 20, 20);
					cm.teachSkill(11111003, 20, 20);
					cm.teachSkill(11111004, 30, 30);
					cm.teachSkill(11110005, 20, 20);
					cm.teachSkill(11111006, 30, 30);
					cm.teachSkill(11111007, 20, 20);
				   
				}
				case 1210: // Blaze Wizard
				if(轉職後將技能全滿 == 1){
					cm.teachSkill(12110000, 20, 20);
					cm.teachSkill(12110001, 20, 20);
					cm.teachSkill(12111002, 20, 20);
					cm.teachSkill(12111003, 20, 20);
					cm.teachSkill(12111004, 20, 20);
					cm.teachSkill(12111005, 30, 30);
					cm.teachSkill(12111006, 30, 30);
				   
				}
				case 1310: // Wind Archer
				if(轉職後將技能全滿 == 1){
					cm.teachSkill(13111000, 20, 20);
					cm.teachSkill(13111001, 30, 30);
					cm.teachSkill(13111002, 20, 20);
					cm.teachSkill(13110003, 20, 20);
					cm.teachSkill(13111004, 20, 20);
					cm.teachSkill(13111005, 10, 10);
					cm.teachSkill(13111006, 20, 20);
					cm.teachSkill(13111007, 20, 20);
				   
				}
               case 1410: // Night Walker
			   if(轉職後將技能全滿 == 1){
                cm.teachSkill(14111000, 30, 30);
                cm.teachSkill(14111001, 20, 20);
                cm.teachSkill(14111002, 30, 30);
                cm.teachSkill(14110003, 20, 20);
                cm.teachSkill(14110004, 20, 20);
				cm.teachSkill(14111005, 20, 20);
				cm.teachSkill(14111006, 30, 30);
				   
			   }
               case 1510: // Thunder Breaker
			   if(轉職後將技能全滿 == 1){
                cm.teachSkill(15110000, 20, 20);
                cm.teachSkill(15111001, 20, 20);
                cm.teachSkill(15111002, 10, 10);
                cm.teachSkill(15111003, 20, 20);
                cm.teachSkill(15111004, 20, 20);
				cm.teachSkill(15111005, 20, 20);
				cm.teachSkill(15111006, 20, 20);
				cm.teachSkill(15111007, 30, 30);
				   
			   }
               case 2110: // Aran
					if(轉職後將技能全滿 == 1){
						cm.teachSkill(21110000, 20, 20);
						cm.teachSkill(21110002, 20, 20);
						cm.teachSkill(21110003, 30, 30);
						cm.teachSkill(21110004, 30, 30);
						cm.teachSkill(21110006, 20, 20);
						cm.teachSkill(21110007, 20, 20);
						cm.teachSkill(21110008, 20, 20);
						cm.teachSkill(21111001, 20, 20);
						cm.teachSkill(21111005, 20, 20);
					}else{
						cm.teachSkill(21110000, 0, 20);
						cm.teachSkill(21110002, 0, 20);
						cm.teachSkill(21110003, 0, 30);
						cm.teachSkill(21110004, 0, 30);
						cm.teachSkill(21110006, 0, 20);
						cm.teachSkill(21110007, 0, 20);
						cm.teachSkill(21110008, 0, 20);
						cm.teachSkill(21111001, 0, 20);
						cm.teachSkill(21111005, 0, 20);
					}
               case 2310: // Mercedes
               case 2410: // Phantom
               case 2710: // Luminous
               case 3110: // Demon Slayer
               case 3210: // Battle Mage
               case 3310: // Wild Hunter
               case 3510: // Mechanic
               case 5110: // Mihile
               case 6110: // Kaiser
               case 6510: // Angelic Burster
               //3rd Job
               case 111: // Crusader
			   if(四轉技能點滿 == 1){
					cm.teachSkill(1121000, 30, 30);
					cm.teachSkill(1121001, 30, 30);
					cm.teachSkill(1121002, 30, 30);
					cm.teachSkill(1120003, 30, 30);
					cm.teachSkill(1120004, 30, 30);
					cm.teachSkill(1120005, 30, 30);
					cm.teachSkill(1121006, 30, 30);
					cm.teachSkill(1121008, 30, 30);
					cm.teachSkill(1121010, 30, 30);
					cm.teachSkill(1121011, 5, 5);
			   }else{
					cm.teachSkill(1121001, 0, 10);
					cm.teachSkill(1120004, 0, 10);
					cm.teachSkill(1121008, 0, 10);
					cm.teachSkill(1121006, 0, 10);
					cm.teachSkill(1121002, 0, 10);
					cm.teachSkill(1121010, 0, 10);
					cm.teachSkill(1120005, 0, 10);
					cm.teachSkill(1120003, 0, 10);
			   }
               case 121: // White Knight
			   if(四轉技能點滿 == 1){
                cm.teachSkill(1221000, 30, 30);
                cm.teachSkill(1221001, 30, 30);
                cm.teachSkill(1221002, 30, 30);
                cm.teachSkill(1221003, 20, 20);
                cm.teachSkill(1221004, 20, 20);
				cm.teachSkill(1220005, 30, 30);
				cm.teachSkill(1220006, 20, 20);
				cm.teachSkill(1221007, 30, 30);
				cm.teachSkill(1221009, 30, 30);
				cm.teachSkill(1220010, 10, 10);
				cm.teachSkill(1221011, 30, 30);
				cm.teachSkill(1221012, 5, 5);
			   
			   }else{
                cm.teachSkill(1221001, 0, 10);
                cm.teachSkill(1220005, 0, 10);
                cm.teachSkill(1221009, 0, 10);
                
                cm.teachSkill(1221007, 0, 10);
                cm.teachSkill(1221002, 0, 10);
                cm.teachSkill(1221011, 0, 10);
                cm.teachSkill(1220006, 0, 10);
                cm.teachSkill(1220010, 0, 10);
                cm.teachSkill(1221003, 0, 10);
                cm.teachSkill(1221004, 0, 10);
				   
			   }
               case 131: // Dragon Knight
			   if(四轉技能點滿 == 1){
                cm.teachSkill(1321000, 30, 30);
                cm.teachSkill(1321001, 30, 30);
                cm.teachSkill(1321002, 30, 30);
                cm.teachSkill(1321003, 20, 20);
                cm.teachSkill(1320005, 20, 20);
				cm.teachSkill(1320006, 30, 30);
				cm.teachSkill(1321007, 10, 10);
				cm.teachSkill(1320008, 25, 25);
				cm.teachSkill(1320009, 25, 25);
				cm.teachSkill(1321010, 5, 5);
			   
			   }else{
                cm.teachSkill(1321001, 0, 10);
                cm.teachSkill(1320005, 0, 10);
                cm.teachSkill(1321007, 0, 10);
                
                cm.teachSkill(1321003, 0, 10);
                cm.teachSkill(1321002, 0, 10);
                cm.teachSkill(1320006, 0, 10);
                cm.teachSkill(1320009, 0, 25);
                cm.teachSkill(1320008, 0, 25);
				   
			   }
               case 211: // Mage(F/P)
			   if(四轉技能點滿 == 1){
                cm.teachSkill(2121000, 30, 30);
                cm.teachSkill(2121001, 30, 30);
                cm.teachSkill(2121002, 30, 30);
                cm.teachSkill(2121003, 30, 30);
                cm.teachSkill(2121004, 30, 30);
				cm.teachSkill(2121005, 30, 30);
				cm.teachSkill(2121006, 30, 30);
				cm.teachSkill(2121007, 30, 30);
				cm.teachSkill(2121008, 5, 5);
			   
			   }else{
                cm.teachSkill(2121001, 0, 10);
                cm.teachSkill(2121006, 0, 10);
                cm.teachSkill(2121002, 0, 10);
                
                cm.teachSkill(2121004, 0, 10);
                cm.teachSkill(2121007, 0, 10);
                cm.teachSkill(2121003, 0, 10);
                cm.teachSkill(2121005, 0, 10);
				   
			   }
               case 221: // Mage(I/L)
			   if(四轉技能點滿 == 1){
                cm.teachSkill(2221000, 30, 30);
                cm.teachSkill(2221001, 30, 30);
                cm.teachSkill(2221002, 30, 30);
                cm.teachSkill(2221003, 30, 30);
                cm.teachSkill(2221004, 30, 30);
				cm.teachSkill(2221005, 30, 30);
				cm.teachSkill(2221006, 30, 30);
				cm.teachSkill(2221007, 30, 30);
				cm.teachSkill(2221008, 5, 5);
			   
			   }else{
                cm.teachSkill(2221001, 0, 10);
                cm.teachSkill(2221006, 0, 10);
                cm.teachSkill(2221002, 0, 10);
                
                cm.teachSkill(2221004, 0, 10);
                cm.teachSkill(2221007, 0, 10);
                cm.teachSkill(2221003, 0, 10);
                cm.teachSkill(2221005, 0, 10);
				   
			   }
               case 231: // Priest
			   if(四轉技能點滿 == 1){
                cm.teachSkill(2321000, 30, 30);
                cm.teachSkill(2321001, 30, 30);
                cm.teachSkill(2321002, 30, 30);
                cm.teachSkill(2321003, 30, 30);
                cm.teachSkill(2321004, 30, 30);
				cm.teachSkill(2321005, 30, 30);
				cm.teachSkill(2321006, 10, 10);
				cm.teachSkill(2321007, 30, 30);
				cm.teachSkill(2321008, 30, 30);
				cm.teachSkill(2321009, 5, 5);
			   
			   }else{
                cm.teachSkill(2321001, 0, 10);
                cm.teachSkill(2321005, 0, 10);
                cm.teachSkill(2321002, 0, 10);
                
                cm.teachSkill(2321004, 0, 10);
                cm.teachSkill(2321003, 0, 30);
                cm.teachSkill(2321008, 0, 10);
                cm.teachSkill(2321006, 0, 10);
                cm.teachSkill(2321007, 0, 10);
				   
			   }
               case 311: // Ranger
			   if(四轉技能點滿 == 1){
                cm.teachSkill(3121000, 30, 30);
                cm.teachSkill(3121002, 30, 30);
                cm.teachSkill(3121003, 30, 30);
                cm.teachSkill(3121004, 30, 30);
                cm.teachSkill(3120005, 30, 30);
				cm.teachSkill(3121006, 30, 30);
				cm.teachSkill(3121007, 30, 30);
				cm.teachSkill(3121008, 30, 30);
				cm.teachSkill(3121009, 5, 5);
			   
			   }else{
                cm.teachSkill(3120005, 0, 10);
                cm.teachSkill(3121007, 0, 10);
                cm.teachSkill(3121002, 0, 10);
				
				cm.teachSkill(3121003, 0, 10);
				cm.teachSkill(3121004, 0, 10);
				cm.teachSkill(3121008, 0, 10);
				cm.teachSkill(3121006, 0, 10);
				   
			   }
               case 321: // Sniper
			   if(四轉技能點滿 == 1){
                cm.teachSkill(3221000, 30, 30);
                cm.teachSkill(3221001, 30, 30);
                cm.teachSkill(3221002, 30, 30);
                cm.teachSkill(3221003, 30, 30);
                cm.teachSkill(3220004, 30, 30);
				cm.teachSkill(3221005, 30, 30);
				cm.teachSkill(3221006, 30, 30);
				cm.teachSkill(3221007, 30, 30);
				cm.teachSkill(3221008, 5, 5);
			   
			   }else{
                cm.teachSkill(3221006, 0, 10);
                cm.teachSkill(3220004, 0, 10);
                cm.teachSkill(3221002, 0, 10);
				
				cm.teachSkill(3221003, 0, 10);
				cm.teachSkill(3221001, 0, 10);
				cm.teachSkill(3221007, 0, 10);
				cm.teachSkill(3221005, 0, 10);
				   
			   }
               case 411: // Hermit
			   if(四轉技能點滿 == 1){
                cm.teachSkill(4121000, 30, 30);
                cm.teachSkill(4120002, 30, 30);
                cm.teachSkill(4121003, 30, 30);
                cm.teachSkill(4121004, 30, 30);
                cm.teachSkill(4120005, 30, 30);
				cm.teachSkill(4121006, 30, 30);
				cm.teachSkill(4121007, 30, 30);
				cm.teachSkill(4121008, 30, 30);
				cm.teachSkill(4121009, 5, 5);
			   
			   }else{
                cm.teachSkill(4120002, 0, 10);
                cm.teachSkill(4121006, 0, 10);
                cm.teachSkill(4120005, 0, 10);
                
                cm.teachSkill(4121007, 0, 10);
                cm.teachSkill(4121008, 0, 10);
                cm.teachSkill(4121003, 0, 10);
                cm.teachSkill(4121004, 0, 10);
				   
			   }
               case 421: // Chief Bandit
			   if(四轉技能點滿 == 1){
                cm.teachSkill(4221000, 30, 30);
                cm.teachSkill(4221001, 30, 30);
                cm.teachSkill(4220002, 30, 30);
                cm.teachSkill(4221003, 30, 30);
                cm.teachSkill(4221004, 30, 30);
				cm.teachSkill(4220005, 30, 30);
				cm.teachSkill(4221006, 30, 30);
				cm.teachSkill(4221007, 30, 30);
				cm.teachSkill(4221008, 5, 5);
			   
			   }else{
                cm.teachSkill(4220002, 0, 10);
                cm.teachSkill(4221007, 0, 10);
                cm.teachSkill(4220005, 0, 10);
                
                cm.teachSkill(4221001, 0, 10);
                cm.teachSkill(4221003, 0, 10);
                cm.teachSkill(4221004, 0, 10);
                cm.teachSkill(4221006, 0, 10);
				   
			   }
               case 511: // Marauder
			   if(四轉技能點滿 == 1){
                cm.teachSkill(5121000, 30, 30);
                cm.teachSkill(5121001, 30, 30);
                cm.teachSkill(5121002, 30, 30);
                cm.teachSkill(5121003, 20, 20);
                cm.teachSkill(5121004, 30, 30);
				cm.teachSkill(5121005, 30, 30);
				cm.teachSkill(5121007, 30, 30);
				cm.teachSkill(5121008, 5, 5);
				cm.teachSkill(5121009, 20, 20);
				cm.teachSkill(5121010, 30, 30);
			   
			   }else{
                cm.teachSkill(5121007, 0, 10);
                cm.teachSkill(5121001, 0, 10);
                cm.teachSkill(5121002, 0, 10);
                cm.teachSkill(5121009, 0, 10);
                
                cm.teachSkill(5121003, 0, 10);
                cm.teachSkill(5121005, 0, 10);
                cm.teachSkill(5121010, 0, 10);
                cm.teachSkill(5121004, 0, 10);
				   
			   }
               case 521: // Outlaw
			   if(四轉技能點滿 == 1){
                cm.teachSkill(5221000, 30, 30);
                cm.teachSkill(5220001, 20, 20);
                cm.teachSkill(5220002, 20, 20);
                cm.teachSkill(5221003, 20, 20);
                cm.teachSkill(5221004, 30, 30);
				cm.teachSkill(5221006, 10, 10);
				cm.teachSkill(5221007, 30, 30);
				cm.teachSkill(5221008, 30, 30);
				cm.teachSkill(5221009, 20, 20);
				cm.teachSkill(5221010, 5, 5);
				cm.teachSkill(5220011, 20, 20);
			   
			   }else{
                cm.teachSkill(5221004, 0, 10);
                cm.teachSkill(5220001, 0, 10);
                cm.teachSkill(5220002, 0, 10);
                cm.teachSkill(5220011, 0, 10);
                
                cm.teachSkill(5221003, 0, 10);
                cm.teachSkill(5221006, 0, 10);
                cm.teachSkill(5221007, 0, 10);
                cm.teachSkill(5221008, 0, 10);
                cm.teachSkill(5221009, 0, 10);
				   
			   }
               case 531: // Cannon Trooper
               case 571: // Jett
               case 1111: // Dawn Warrior
               case 1211: // Blaze Wizard
               case 1311: // Wind Archer
               case 1411: // Night Walker
               case 1511: // Thunder Breaker
               case 2111: // Aran
					if(四轉技能點滿 == 1){
						cm.teachSkill(21121000, 30, 30);
						cm.teachSkill(21120001, 30, 30);
						cm.teachSkill(21120002, 30, 30);
						cm.teachSkill(21121003, 30, 30);
						cm.teachSkill(21120004, 30, 30);
						cm.teachSkill(21120005, 30, 30);
						cm.teachSkill(21120006, 30, 30);
						cm.teachSkill(21120007, 30, 30);
						cm.teachSkill(21121008, 5, 5); 
						cm.teachSkill(21120009, 30, 30); 
						cm.teachSkill(21120010, 30, 30); 
					}else{
						cm.teachSkill(21121000, 0, 30);
						cm.teachSkill(21120001, 0, 30);
						cm.teachSkill(21120002, 0, 30);
						cm.teachSkill(21121003, 0, 30);
						cm.teachSkill(21120004, 0, 30);
						cm.teachSkill(21120005, 0, 30);
						cm.teachSkill(21120006, 0, 30);
						cm.teachSkill(21120007, 0, 30);
						cm.teachSkill(21121008, 0, 5); 
						cm.teachSkill(21120009, 0, 30); 
						cm.teachSkill(21120010, 0, 30);  
					}
               case 2311: // Mercedes
               case 2411: // Phantom
               case 2711: // Luminous
               case 3111: // Demon Slayer
               case 3211: // Battle Mage
               case 3311: // Wild Hunter
               case 3511: // Mechanic
               case 5111: // Mihile
               case 6111: // Kaiser
               case 6511: // Angelic Burster
                   cm.getPlayer().changeJob(cm.getPlayer().getJob() + 1);
                   cm.dispose();
                   return;
               default:
                   cm.sendOk("此職業有錯誤.\r\n請回報給管理員.\r\n你的職業ID: " + cm.getPlayer().getJob() + "");
                   cm.dispose();
                   return;
           }
       } else if (status == 2) {
           select = selection;
         var text = "以下是您選擇的職業#b";
            text += "\r\n"+cm.getPlayer().getJobName(select)+"#l";
         cm.sendYesNo(text);
       } else if (status == 3) {
         //getItem(select);
           if (select != 3100 && getSubcategory(select) == 0) {
               cm.getPlayer().changeJob(getRealJob(select));
				if(getRealJob(select) == 110){
					if(轉職後將技能全滿 == 1){
					cm.teachSkill(1100000, 20, 20);
                cm.teachSkill(1100001, 20, 20);
                cm.teachSkill(1100002, 30, 30);
                cm.teachSkill(1100003, 30, 30);
                cm.teachSkill(1101004, 20, 20);
				cm.teachSkill(1101005, 20, 20);
				cm.teachSkill(1101006, 20, 20);
				cm.teachSkill(1101007, 30, 30);
							
					}
				}if(getRealJob(select) == 120){
					if(轉職後將技能全滿 == 1){
					cm.teachSkill(1200000, 20, 20);
                cm.teachSkill(1200001, 20, 20);
                cm.teachSkill(1200002, 30, 30);
                cm.teachSkill(1200003, 30, 30);
                cm.teachSkill(1201004, 20, 20);
				cm.teachSkill(1201005, 20, 20);
				cm.teachSkill(1201006, 20, 20);
				cm.teachSkill(1201007, 30, 30);
							
					}
				}if(getRealJob(select) == 130){
					if(轉職後將技能全滿 == 1){
					cm.teachSkill(1300000, 20, 20);
                cm.teachSkill(1300001, 20, 20);
                cm.teachSkill(1300002, 30, 30);
                cm.teachSkill(1300003, 30, 30);
                cm.teachSkill(1301004, 20, 20);
				cm.teachSkill(1301005, 20, 20);
				cm.teachSkill(1301006, 20, 20);
				cm.teachSkill(1301007, 30, 30);
							
					}
				}if(getRealJob(select) == 210){
					if(轉職後將技能全滿 == 1){
					cm.teachSkill(2100000, 20, 20);
                cm.teachSkill(2101001, 20, 20);
                cm.teachSkill(2101002, 20, 20);
                cm.teachSkill(2101003, 20, 20);
                cm.teachSkill(2101004, 30, 30);
				cm.teachSkill(2101005, 30, 30);
							
					}
				}if(getRealJob(select) == 220){
					if(轉職後將技能全滿 == 1){
						cm.teachSkill(2200000, 20, 20);
						cm.teachSkill(2201001, 20, 20);
						cm.teachSkill(2201002, 20, 20);
						cm.teachSkill(2201003, 20, 20);
						cm.teachSkill(2201004, 30, 30);
						cm.teachSkill(2201005, 30, 30);
					}
				}if(getRealJob(select) == 230){
					if(轉職後將技能全滿 == 1){
					 cm.teachSkill(2300000, 20, 20);
                cm.teachSkill(2301001, 20, 20);
                cm.teachSkill(2301002, 30, 30);
                cm.teachSkill(2301003, 20, 20);
                cm.teachSkill(2301004, 20, 20);
				cm.teachSkill(2301005, 30, 30);
							
					}
				}if(getRealJob(select) == 310){
					if(轉職後將技能全滿 == 1){
					cm.teachSkill(3100000, 20, 20);
                cm.teachSkill(3100001, 30, 30);
                cm.teachSkill(3101002, 20, 20);
                cm.teachSkill(3101003, 20, 20);
                cm.teachSkill(3101004, 20, 20);
				cm.teachSkill(3101005, 30, 30);
							
					}
				}if(getRealJob(select) == 320){
					if(轉職後將技能全滿 == 1){
					cm.teachSkill(3200000, 20, 20);
                cm.teachSkill(3200001, 30, 30);
                cm.teachSkill(3201002, 20, 20);
                cm.teachSkill(3201003, 20, 20);
                cm.teachSkill(3201004, 20, 20);
				cm.teachSkill(3201005, 30, 30);
							
					}
				}if(getRealJob(select) == 410){
					if(轉職後將技能全滿 == 1){
					 cm.teachSkill(4100000, 20, 20);
                cm.teachSkill(4100001, 30, 30);
                cm.teachSkill(4100002, 20, 20);
                cm.teachSkill(4101003, 20, 20);
                cm.teachSkill(4101004, 20, 20);
				cm.teachSkill(4101005, 30, 30);
							
					}
				}if(getRealJob(select) == 420){
					if(轉職後將技能全滿 == 1){
					cm.teachSkill(4200000, 20, 20);
                cm.teachSkill(4200001, 20, 20);
                cm.teachSkill(4201002, 20, 20);
                cm.teachSkill(4201003, 20, 20);
                cm.teachSkill(4201004, 30, 30);
				cm.teachSkill(4201005, 30, 30);
							
					}
				}if(getRealJob(select) == 520){
					if(轉職後將技能全滿 == 1){
					 cm.teachSkill(5200000, 20, 20);
                cm.teachSkill(5201001, 20, 20);
                cm.teachSkill(5201002, 20, 20);
                cm.teachSkill(5201003, 20, 20);
                cm.teachSkill(5201004, 20, 20);
				cm.teachSkill(5201005, 10, 10);
				cm.teachSkill(5201006, 20, 20);
							
					}
				}if(getRealJob(select) == 510){
					if(轉職後將技能全滿 == 1){
					cm.teachSkill(5100000, 10, 10);
                cm.teachSkill(5100001, 20, 20);
                cm.teachSkill(5101002, 20, 20);
                cm.teachSkill(5101003, 20, 20);
                cm.teachSkill(5101004, 20, 20);
				cm.teachSkill(5101005, 20, 20);
				cm.teachSkill(5101006, 20, 20);
				cm.teachSkill(5101007, 10, 10);
							
					}
				}
				if(getRealJob(select) == 100){
					if(轉職後將技能全滿 == 1){
						cm.teachSkill(1000000, 16, 16);
						cm.teachSkill(1000001, 10, 10);
						cm.teachSkill(1000002, 8, 8);
						cm.teachSkill(1001003, 20, 20);
						cm.teachSkill(1001004, 20, 20);
						cm.teachSkill(1001005, 20, 20);
					}
				}if(getRealJob(select) == 200){
					if(轉職後將技能全滿 == 1){
						cm.teachSkill(2000000, 16, 16);
						cm.teachSkill(2000001, 10, 10);
						cm.teachSkill(2001002, 20, 20);
						cm.teachSkill(2001003, 20, 20);
						cm.teachSkill(2001004, 20, 20);
						cm.teachSkill(2001005, 20, 20);
					}
				   
				}if(getRealJob(select) == 300){
					if(轉職後將技能全滿 == 1){
						cm.teachSkill(3000000, 16, 16);
                cm.teachSkill(3000001, 20, 20);
                cm.teachSkill(3000002, 8, 8);
                cm.teachSkill(3001003, 20, 20);
                cm.teachSkill(3001004, 20, 20);
                cm.teachSkill(3001005, 20, 20);
					}
				   
				}if(getRealJob(select) == 400){
					if(轉職後將技能全滿 == 1){
						cm.teachSkill(4000000, 20, 20);
                cm.teachSkill(4000001, 8, 8);
                cm.teachSkill(4001002, 20, 20);
                cm.teachSkill(4001003, 20, 20);
                cm.teachSkill(4001334, 20, 20);
                cm.teachSkill(4001344, 20, 20);
					}
				   
				}if(getRealJob(select) == 500){
					if(轉職後將技能全滿 == 1){
						cm.teachSkill(5000000, 20, 20);
                cm.teachSkill(5001001, 20, 20);
                cm.teachSkill(5001002, 20, 20);
                cm.teachSkill(5001003, 20, 20);
                cm.teachSkill(5001005, 10, 10);
					}
				   
				}if(getRealJob(select) == 1100){
					if(轉職後將技能全滿 == 1){
					cm.teachSkill(11000000, 10, 10);
                cm.teachSkill(11001001, 10, 10);
                cm.teachSkill(11001002, 20, 20);
                cm.teachSkill(11001003, 20, 20);
                cm.teachSkill(11001004, 20, 20);
					}
				}if(getRealJob(select) == 1200){
					if(轉職後將技能全滿 == 1){
					
                cm.teachSkill(12000000, 10, 10);
                cm.teachSkill(12001001, 10, 10);
                cm.teachSkill(12001002, 20, 20);
                cm.teachSkill(12001003, 20, 20);
                cm.teachSkill(12001004, 20, 20);
					}
					
				}if(getRealJob(select) == 1300){
					if(轉職後將技能全滿 == 1){
					cm.teachSkill(13000000, 20, 20);
                cm.teachSkill(13000001, 8, 8);
                cm.teachSkill(13001002, 10, 10);
                cm.teachSkill(13001003, 20, 20);
                cm.teachSkill(13001004, 20, 20);
					}
				}if(getRealJob(select) == 1400){
					if(轉職後將技能全滿 == 1){
					cm.teachSkill(14000000, 10, 10);
                cm.teachSkill(14000001, 8, 8);
                cm.teachSkill(14001002, 10, 10);
                cm.teachSkill(14001003, 10, 10);
                cm.teachSkill(14001004, 20, 20);
				cm.teachSkill(14001005, 20, 20);
					}
				}if(getRealJob(select) == 1500){
					if(轉職後將技能全滿 == 1){
					cm.teachSkill(15000000, 10, 10);
                cm.teachSkill(15001001, 20, 20);
                cm.teachSkill(15001002, 20, 20);
                cm.teachSkill(15001003, 10, 10);
                cm.teachSkill(15001004, 20, 20);
					}
				}
               cm.dispose();
               return;
           } else 
               cm.sendSimple("成為一個 惡魔殺手, 你必須選擇一個 #b惡魔臉部圖騰#k.\r\n#L1012276##i1012276##l\r\n#L1012277##i1012277##l\r\n#L1012278##i1012278##l\r\n#L1012279##i1012279##l\r\n#L1012280##i1012280##l");
           if (getSubcategory(select) != 0) {
               cm.getPlayer().changeJob(getRealJob(select));
               cm.getPlayer().setSubcategory(getSubcategory(select));
               cm.getPlayer().dropMessage(0, "您現在將會重新載入腳色以應用轉職的變更.");
               cm.dispose();
               return;
           }
       } else if (status == 4) {
           cm.getPlayer().setDemonMarking(selection);
           cm.getPlayer().setSkinColor(4);
           cm.getPlayer().changeJob(getRealJob(select));
           if (select == 3100) {
               cm.sendOk("成為一個 惡魔殺手, 您的魔力(MP) 在你重啟後將會轉變成惡魔力量 (DF).");
           }
           cm.dispose();
       }
   }

   function jobSelection(index) {
       jobindex = index;
       var choose = ""
         choose += "    "+迷路+" #e【 請勿超過等級轉職  技能點會被吃掉 】#n "+迷路+"\r\n\r\n"
         choose += ""+線1+" "+線1+" "+線1+" "+線1+" "+線1+" "+線1+" "+線1+" "+線1+" #e#b以下目錄#k#n "+線1+" "+線1+" "+線1+" "+線1+" "+線1+" "+線1+" "+線1+" "+線1+"\r\n";
	
       for (var i = 0; i < job[index].length; i++)
           choose += "\r\n                #L" + job[index][i][0] + "#" + job[index][i][2] +"    " + job[index][i][1] + "#l";
       cm.sendSimple(choose);
   }
   function getSubcategory(special) {
       switch (special) {
           case 9400:
           case 430:
           case 431:
           case 432:
           case 433:
           case 434:
               return 1;
           case 9501:
               return 2;
           case 9508:
               return 10;
       }
       return 0;
   }

   function getRealJob(fakejob) {
       switch (fakejob) {
           case 9400:
               return 400;
           case 9501:
               return 501;
           case 9508:
               return 508;
       }
       return fakejob;
   }
