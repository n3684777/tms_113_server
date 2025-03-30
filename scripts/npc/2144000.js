/*
	This file is part of the OdinMS Maple Story Server
    Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc> 
                       Matthias Butz <matze@odinms.de>
                       Jan Christian Meyer <vimes@odinms.de>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License version 3
    as published by the Free Software Foundation. You may not use, modify
    or distribute this program under any other version of the
    GNU Affero General Public License.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

/**
 Dolphin in Herb Town

**/


var 娛樂卷 = 5220001;//娛樂卷

//boss召喚開頭
var BossSpawn = [
	[9400700, 1,娛樂卷, 10, -110, 213, 910000097, "「超級番茄」", "成功擊敗超級番茄有機率讓你得到獨家#r番茄套裝#k。"],
	[9600064, 1,娛樂卷, 5, -110, 213, 910000097, "「魚王」", "成功擊敗魚王有機率得到大量經驗獎勵，但就是血有點多。"],
	[9400748, 1,娛樂卷, 10, -110, 213, 910000097, "「蓋福克斯」", "成功擊敗蓋福克斯有機率得到獨家#r蓋福克斯套裝#k。"],
	[9400358, 1,娛樂卷, 30, -110, 213, 910000097, "「被主咒的黑貓」", "成功擊敗被主咒的黑貓有機率獲得各種#r技能書#k快來挑戰!!"],
];

//boss召喚結尾

//忍耐開頭
var Patience = [
	[101000100,娛樂卷, 1, "忍耐地圖「忍耐之林（一層）」"],
	[101000102,娛樂卷, 1, "忍耐地圖「忍耐之林（三層）」"],
	[103000900,娛樂卷, 1, "忍耐地圖「三號線一號地區B1」"],
	[103000903,娛樂卷, 1, "忍耐地圖「三號線二號地區B1」"],
	[103000906,娛樂卷, 1, "忍耐地圖「三號線三號地區B1」"],
	[105040310,娛樂卷, 1, "忍耐地圖「沉睡森林（一層）」"],
	[105040312,娛樂卷, 1, "忍耐地圖「沉睡森林（三層）」"],
	[105040314,娛樂卷, 1, "忍耐地圖「沉睡森林（五層）」"],
];


//忍耐結尾

//闔家娛樂開始

var HappySpawn = [
	[9400512, 20, 娛樂卷, 2, -110, 215, 910000097, "「蛋糕系列」", 9410055, 9410056, 9410054],
	[9400250, 15, 娛樂卷, 5, -110, 215, 910000097, "「驚喜箱」"],
	[9500167, 100, 娛樂卷, 10, -110, 215, 910000097, "「黃金豬」"],
];

//闔家娛樂結尾

//闔家娛樂開始

var party = [
	["越獄派對", 娛樂卷, 1, "越獄派對"],
	["MV", 娛樂卷, 1, "MV"],
	["奧利維亞", 娛樂卷, 1, "奧利維亞"],	
	["迷你地城", 娛樂卷, 1, "迷你地城"],
	["保護建太", 娛樂卷, 1, "保護建太"],	
	["冰騎士", 娛樂卷, 1, "冰騎士"],	
];

//闔家娛樂結尾

var status = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}
	
function action(mode, type, selection) {
	
	if (mode < 1) {
		cm.dispose();
		return;
	} else if (mode == 1) {
		status++;
	} else {
		status--;
	}
	if (status == 0) {	
				   store = true;
				   cm.sendSimple (
				   "您好~歡迎來到卡納遊樂園，請選擇您想遊玩的類別，並搜集獎勵與兌換員『雪靈』做兌換喔!!!#k\r\n#k"+
				   "#L0##r 【確認地圖內是否有玩家】#k\r\n\r\n#k"+
				   "#L101##dBOSS挑戰類\r\n#k"+
				   "#L102##d忍耐考驗類#k\r\n#k"+
				   "#L103##d闔家娛樂類#k\r\n#k"
				   //"#L104##d副本挑戰#k\r\n#k"
				   
				   );
	}else if(status == 1) {
	nextmap = cm.getC().getChannelServer().getMapFactory().getMap(910000097);	
			if (selection == 0){
			if (nextmap.playerCount() > 0) {					
			cm.sendOk("目前地圖內#r【有玩家】#k正在進行活動喔");
		        cm.dispose();
			}else{
		        cm.sendOk("目前地圖內#r【無玩家】#k進行活動");
		        cm.dispose();
			}
			
		}
		if (store) {
			switch (selection) {
                    case 101:
                        storeInfo = BossSpawn;
                        break;
                    case 102:
                        storeInfo = Patience;
                        break;
                    case 103:
                        storeInfo = HappySpawn;
                        break;
                    case 104:
                        storeInfo = party;
                        break;
                    default:
                        storeInfo = [];
                }
				selection2 = selection;
             	if (storeInfo.length == 0) {
                    cm.sendOk("這個商店不存在");
                    cm.dispose();
                    return;
                }
			 if (selection2 == 101){				 
			 var storeText = "";
			 storeText += "請選擇一項您想挑戰的BOSS\r\n";
			 for (var i = 0; i < storeInfo.length; i++) {
					BOSSId = storeInfo[i][0];
					BOSScost = storeInfo[i][1];
					Item = storeInfo[i][2];
					Itemcost = storeInfo[i][3];
				 
				storeText += "#L" + i + "##o" + BOSSId + "# #r【"+BOSScost+"】#k 隻 - #v" + Item + "# - #r【" + Itemcost + "】#k 張#l\r\n";				
				}
			cm.sendSimple(storeText);			        
			}if (selection2 == 102){			
			 var storeText = "";
			 storeText += "請選擇一項您想挑戰的忍耐任務\r\n";
			 for (var i = 0; i < storeInfo.length; i++) {
				MapId = storeInfo[i][0];
				PatienceItem = storeInfo[i][1];
				PatienceCost = storeInfo[i][2];				 
				storeText += "#L" + i + "##d#m" + MapId +  " ##k -  #i" + PatienceItem +  "# #r【" + PatienceCost+  "】#k 張 #l" + "\r\n";
					
				}
			cm.sendSimple(storeText);		        
			}if (selection2 == 103){
			var storeText = "";
				storeText += "請選擇一項您想挑戰的召喚獸\r\n";
			 for (var i = 0; i < storeInfo.length; i++) {
					HappySpawnId = storeInfo[i][7];
					HappySpawncost = storeInfo[i][1];
					Item = storeInfo[i][2];
					Itemcost = storeInfo[i][3];
				 
				storeText += "#L" + i + "#" + HappySpawnId + "  #r【"+HappySpawncost+"】#k 隻 - #v" + Item + "#  #r【" + Itemcost + "】#k 張#l\r\n";				
				}
			cm.sendSimple(storeText);	        
			}if (selection2 == 104){
			var storeText = "";
				storeText += "請選擇一項您想挑戰的副本\r\n";
			 for (var i = 0; i < storeInfo.length; i++) {
					partyId = storeInfo[i][3];
					Item = storeInfo[i][1];
					Itemcost = storeInfo[i][2];
				 
				storeText += "#L" + i + "#挑戰#r【"+partyId+"】#k 副本 - #v" + Item + "#  #r【" + Itemcost + "】#k 張#l\r\n";				
				}
			cm.sendSimple(storeText);	        
			}
		}	
			
	}else if(status == 2) {
		selection3 = selection;
			if(selection2 == 101){
					BOSSId2 = storeInfo[selection3][0];
					BOSScost2 = storeInfo[selection3][1];
					Item2 = storeInfo[selection3][2];
					Itemcost2 = storeInfo[selection3][3];
				 if (cm.haveItem(Item2, Itemcost2)) {
                    cm.sendYesNo("您確定要使用#r【"+ Itemcost2 +"】#k個 #t" + Item2 + "# 召喚#r#o" + BOSSId2 + "##k嗎？");
                } else {
                    cm.sendOk("您並沒有【"+ Itemcost2 +"】個 #i" + Item2 + "#");
                    cm.dispose();
                }
			}if(selection2 == 102){
					MapId2 = storeInfo[selection3][0];
					PatienceItem2 = storeInfo[selection3][1];
					PatienceCost2 = storeInfo[selection3][2];	
				 if (cm.haveItem(PatienceItem2, PatienceCost2)) {
                    cm.sendYesNo("您確定要使用#r【"+ PatienceCost2 +"】#k個 #t" + PatienceItem2 + "# 進入#r#m" + MapId2 + "##k嗎？");
                } else {
                    cm.sendOk("您並沒有#r【"+ PatienceCost2 +"】#k個 #i" + PatienceItem2 + "#");
                    cm.dispose();
                }
			}if(selection2 == 103){
					HappySpawnId2 = storeInfo[selection3][7];
					HappySpawncost2 = storeInfo[selection3][1];
					Item2 = storeInfo[selection3][2];
					Itemcost2 = storeInfo[selection3][3];
					if (cm.haveItem(Item2, Itemcost2)) {
                    cm.sendYesNo("您確定要使用#r【"+ Itemcost2 +"】#k個 #t" + Item2 + "# 召喚#r" + HappySpawnId2 + "#k嗎？");
                } else {
                    cm.sendOk("您並沒有【"+ Itemcost2 +"】個 #i" + Item2 + "#");
                    cm.dispose();
				}
				
			}if(selection2 == 104){
				partynpc = storeInfo[selection3][0];
				cm.dispose();
				cm.openNpc(2144000, partynpc);				
				return;				
			}			
			
	}else if(status == 3) {
		if(selection2 == 101){
			BossMapX = storeInfo[selection3][4];
			BossMapY = storeInfo[selection3][5];
			BossMap = storeInfo[selection3][6];
			BossWorldMessage = storeInfo[selection3][7];	
			Boss介紹 = storeInfo[selection3][8];	
			cm.spawnMobOnMap(BOSSId2,BOSScost2,BossMapX,BossMapY,BossMap);
			cm.sendOk(Boss介紹);
			cm.getMap().startMapEffect("【遊樂場訊息】玩家"+ cm.getChar().getName() +"已成功召喚"+ BossWorldMessage +"祝您活著出來，請入場。", 5121020);
			cm.gainItem(Item2, -Itemcost2);
			cm.dispose();
		}
		if(selection2 == 102){
			MapWorldMessage = storeInfo[selection3][3];
			cm.warp(MapId2,0);
			cm.worldMessage("【遊樂場訊息】玩家"+ cm.getChar().getName() +"進入了"+ MapWorldMessage +"忍耐任務。");
			cm.sendOk("歡迎入場，祝您忍耐任務遊戲愉快。");
			cm.dispose();
		}
		if(selection2 == 103){
			if(selection3 == 0){
				HappySpawnId3 = storeInfo[selection3][0];
				HappySpawnId4 = storeInfo[selection3][8];
				HappySpawnId5 = storeInfo[selection3][9];
				HappySpawnId6 = storeInfo[selection3][10];
				HappySpawnMapX = storeInfo[selection3][4];
				BHappySpawnMapY = storeInfo[selection3][5];
				HappySpawnMap = storeInfo[selection3][6];
				HappySpawnWorldMessage = storeInfo[selection3][7];	
				cm.spawnMobOnMap(HappySpawnId3,HappySpawncost2,HappySpawnMapX,BHappySpawnMapY,HappySpawnMap);
				cm.spawnMobOnMap(HappySpawnId4,HappySpawncost2,HappySpawnMapX,BHappySpawnMapY,HappySpawnMap);
				cm.spawnMobOnMap(HappySpawnId5,HappySpawncost2,HappySpawnMapX,BHappySpawnMapY,HappySpawnMap);
				cm.spawnMobOnMap(HappySpawnId6,HappySpawncost2,HappySpawnMapX,BHappySpawnMapY,HappySpawnMap);
				cm.getMap().startMapEffect("【遊樂場訊息】玩家"+ cm.getChar().getName() +"已成功召喚"+ HappySpawnWorldMessage +"小心胖死，請入場。", 5121020);
				cm.gainItem(Item2, -Itemcost2);
				cm.dispose();
			}
			if(selection3 == 1){
				HappySpawnId3 = storeInfo[selection3][0];
				HappySpawnMapX = storeInfo[selection3][4];
				BHappySpawnMapY = storeInfo[selection3][5];
				HappySpawnMap = storeInfo[selection3][6];
				HappySpawnWorldMessage = storeInfo[selection3][7];
				cm.spawnMobOnMap(HappySpawnId3,HappySpawncost2,HappySpawnMapX,BHappySpawnMapY,HappySpawnMap);
				cm.getMap().startMapEffect("【遊樂場訊息】玩家"+ cm.getChar().getName() +"已成功召喚"+ HappySpawnWorldMessage +"祝您挖到寶，請入場。", 5121020);
				cm.gainItem(Item2, -Itemcost2);
				cm.dispose();
			}
			if(selection3 == 2){
				HappySpawnId3 = storeInfo[selection3][0];
				HappySpawnMapX = storeInfo[selection3][4];
				BHappySpawnMapY = storeInfo[selection3][5];
				HappySpawnMap = storeInfo[selection3][6];
				HappySpawnWorldMessage = storeInfo[selection3][7];
				cm.spawnMobOnMap(HappySpawnId3,HappySpawncost2,HappySpawnMapX,BHappySpawnMapY,HappySpawnMap);
				cm.getMap().startMapEffect("【遊樂場訊息】玩家"+ cm.getChar().getName() +"已成功召喚"+ HappySpawnWorldMessage +"祝您賺大錢，請入場。", 5121020);
				cm.gainItem(Item2, -Itemcost2);
				cm.dispose();
			}
		}
	}
}

