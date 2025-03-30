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
var 遊樂卷 = 5221000;



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
				   cm.sendSimple (
				   "您好~歡迎來到卡納遊樂園，請選擇您想遊玩的類別，並搜集獎勵與兌換員『雪靈』做兌換喔!!!#k\r\n#k"+
				   "#L0##r 【確認地圖內是否有玩家】#k\r\n\r\n#k"+
				   "#L1##dBOSS挑戰類\r\n#k"+
				   "#L2##d忍耐考驗類#k\r\n#k"+
				   "#L3##d闔家娛樂類#k\r\n#k");
	}else if(status == 1) {
	nextmap = cm.getC().getChannelServer().getMapFactory().getMap(970010000);	
			if (selection == 0){
			if (nextmap.playerCount() > 0) {					
			cm.sendOk("目前地圖內#r【有玩家】#k正在進行活動喔");
		        cm.dispose();
			}else{
		        cm.sendOk("目前地圖內#r【無玩家】#k進行活動");
		        cm.dispose();
			}
			}else if (selection == 1){
			cm.sendSimple("請選擇一項您想挑戰的BOSS\r\n"+
							  "#L20##d#i"+遊樂卷+"# 【四張】 =  召喚超級番茄#k\r\n#k#l"+
							  "#L21##d#i"+遊樂卷+"# 【十二張】 = BOSS挑戰「銀水靈」#k\r\n#k#l"+
							  "#L22##d#i"+遊樂卷+"# 【十張】 = BOSS挑戰「樹妖魔王」#k\r\n#k#l"+
							  "#L23##d#i"+遊樂卷+"# 【兩張】 = 召喚魚王#k\r\n#k#l"+
							  "#L24##d#i"+遊樂卷+"# 【十張】 = BOSS挑戰「被主咒的黑貓」#k\r\n#k#l");		        
			}else if (selection == 2){
			cm.sendSimple("請選擇一項您想挑戰的忍耐任務\r\n"+
							  "#L30##d#i"+遊樂卷+"#【零張】 = 前往忍耐地圖「忍耐之林（一層）」#k\r\n#k#l"+
							  "#L31##d#i"+遊樂卷+"#【零張】 = 前往忍耐地圖「忍耐之林（三層）」#k\r\n#k#l"+							  
							  "#L32##d#i"+遊樂卷+"# 【零張】 = 前往忍耐地圖「一號地區B1忍耐任務」#k\r\n#k#l"+
							  "#L33##d#i"+遊樂卷+"# 【零張】 = 前往忍耐地圖「二號地區B1忍耐任務」#k\r\n#k#l"+
							  "#L34##d#i"+遊樂卷+"# 【零張】 = 前往忍耐地圖「三號地區B1忍耐任務」#k\r\n#k#l"+
							  "#L35##d#i"+遊樂卷+"# 【零張】 = 前往忍耐地圖「沉睡森林（一層）」#k\r\n#k#l"+
							  "#L36##d#i"+遊樂卷+"# 【零張】 = 前往忍耐地圖「沉睡森林（三層）」#k\r\n#k#l"+
							  "#L37##d#i"+遊樂卷+"# 【零張】 = 前往忍耐地圖「沉睡森林（五層）」#k\r\n#k#l"+
							  "#L38##d#i"+遊樂卷+"# 【五張】 = 前往特殊忍耐地圖#k\r\n#k");		        
			}else if (selection == 3){
			cm.sendSimple("請選擇一項您想挑戰的闔家娛樂任務\r\n"+
							  "#L40##d#i5221000# 【兩張】 = 召喚黃金豬#k\r\n#k"+
							  "#L41##d#i5221000# 【兩張】 = 召喚蛋糕#k\r\n#k"+							  
							  "#L42##d#i5221000# 【兩張】 = 驚喜寶箱#k\r\n#k");		        
			}
			
		}else if(status == 2) {
			if (selection == 20){
			if (cm.haveItem(5221000, 4) == true) {
			cm.gainItem(5221000 ,-4);
			cm.spawnMobOnMap(9400700,1,506,1174,970010000);
			cm.startMapEffect("【遊樂場訊息】玩家"+ cm.getChar().getName() +"已成功召喚「超級番茄」今晚吃蕃茄炒蛋，請入場。",5120027);
		        cm.dispose();
			}else{
		        cm.sendOk("您並沒有足夠的遊樂場兌換卷喔");
		        cm.dispose();
				}
			}if (selection == 21){
			if (cm.haveItem(5221000, 12) == true) {
			cm.gainItem(5221000 ,-12);
			cm.spawnMobOnMap(9400203,1,506,1174,970010000);
			cm.startMapEffect("【遊樂場訊息】玩家"+ cm.getChar().getName() +"已成功召喚「銀水靈」祝您活著出來，請入場。",5120027);
			cm.sendOk("召喚成功，請至右上角光環處進入召喚地圖");
		        cm.dispose();
			}else{
		        cm.sendOk("您並沒有足夠的遊樂場兌換卷喔");
		        cm.dispose();
				}
			}if (selection == 23){
			if (cm.haveItem(5221000, 2) == true) {
			cm.gainItem(5221000 ,-2);
			cm.spawnMobOnMap(9600064,1,506,1174,970010000);
			cm.startMapEffect("【遊樂場訊息】玩家"+ cm.getChar().getName() +"已成功召喚「魚王」請愛護保育類，請入場。",5120027);
			cm.sendOk("召喚成功，請至右上角光環處進入召喚地圖");
		        cm.dispose();
			}else{
		        cm.sendOk("您並沒有足夠的遊樂場兌換卷喔");
		        cm.dispose();
				}
			}if (selection == 22){
			if (cm.haveItem(5221000, 10) == true) {
			cm.gainItem(5221000 ,-10);
			cm.spawnMobOnMap(9410040,1,506,1174,970010000);
			cm.startMapEffect("【遊樂場訊息】玩家"+ cm.getChar().getName() +"已成功召喚「樹妖魔王」祝您活著出來，請入場。",5120027);
			cm.sendOk("召喚成功，請至右上角光環處進入召喚地圖");
		        cm.dispose();
			}else{
		        cm.sendOk("您並沒有足夠的遊樂場兌換卷喔");
		        cm.dispose();
				}
			}if (selection == 24){
			if (cm.haveItem(5221000, 10) == true) {
			cm.gainItem(5221000 ,-10);
			cm.spawnMobOnMap(9400358,1,506,1174,970010000);
			cm.startMapEffect("【遊樂場訊息】玩家"+ cm.getChar().getName() +"已成功召喚「被主咒的黑貓」祝您活著出來，請入場。",5120027);
			cm.sendOk("召喚成功，請至右上角光環處進入召喚地圖");
		        cm.dispose();
			}else{
		        cm.sendOk("您並沒有足夠的遊樂場兌換卷喔");
		        cm.dispose();
				}
			}//BOSS召喚結束  忍耐任務開始
			if (selection == 30){			
			cm.warp(101000100);
			cm.worldMessage("『進場訊息』： "+ cm.getChar().getName() +" 玩家進入了忍耐之林（一層）忍耐任務!!!");
			cm.sendOk("歡迎入場，祝您忍耐任務遊戲愉快！！！");
		    cm.dispose();
			}							
			if (selection == 31){
			cm.warp(101000102);
			cm.worldMessage("『進場訊息』： "+ cm.getChar().getName() +" 玩家進入了忍耐之林（三層）忍耐任務!!!");
			cm.sendOk("歡迎入場，祝您忍耐任務遊戲愉快！！！");
		    cm.dispose();}
			if (selection == 32){
			cm.warp(103000900);
			cm.worldMessage("『進場訊息』： "+ cm.getChar().getName() +" 玩家進入了三號線一號地區B1忍耐任務!!!");
			cm.sendOk("歡迎入場，祝您忍耐任務遊戲愉快！！！");
		    cm.dispose();
			}
			if (selection == 33){
			cm.warp(103000903);
			cm.worldMessage("『進場訊息』： "+ cm.getChar().getName() +" 玩家進入了三號線二號地區B1忍耐任務!!!");
			cm.sendOk("歡迎入場，祝您忍耐任務遊戲愉快！！！");
		    cm.dispose();
			}
			if (selection == 34){
			cm.warp(103000906);
			cm.worldMessage("『進場訊息』： "+ cm.getChar().getName() +" 玩家進入了三號線三號地區B1忍耐任務!!!");
			cm.sendOk("歡迎入場，祝您忍耐任務遊戲愉快！！！");
		    cm.dispose();
			}
			if (selection == 35){
				cm.warp(105040310);
			cm.worldMessage("『進場訊息』： "+ cm.getChar().getName() +" 玩家進入了沉睡森林（一層）忍耐任務!!!");
			cm.sendOk("歡迎入場，祝您忍耐任務遊戲愉快！！！");
		    cm.dispose();
			}
			if (selection == 36){
				cm.warp(105040312);
			cm.worldMessage("『進場訊息』： "+ cm.getChar().getName() +" 玩家進入了沉睡森林（三層）忍耐任務!!!");
			cm.sendOk("歡迎入場，祝您忍耐任務遊戲愉快！！！");
		    cm.dispose();
			}
			if (selection == 37){
			cm.warp(105040314);
			cm.worldMessage("『進場訊息』： "+ cm.getChar().getName() +" 玩家進入了沉睡森林（五層）忍耐任務!!!");
			cm.sendOk("歡迎入場，祝您忍耐任務遊戲愉快！！！");
		    cm.dispose();
			}
			if (selection == 38){
			cm.warp(809010000);
			cm.worldMessage("『進場訊息』： "+ cm.getChar().getName() +" 玩家進入了特殊忍耐地圖忍耐任務!!!");
			cm.gainItem(5221000 ,-5);
			cm.sendOk("歡迎入場，祝您忍耐任務遊戲愉快！！！");
		    cm.dispose();
			}//忍耐任務結束 闔家娛樂開始
			if (selection == 40){
			if (cm.haveItem(5221000, 2) == true) {
			cm.gainItem(5221000 ,-2);
			cm.spawnMobOnMap(9500167,100,506,1174,970010000);
			cm.startMapEffect("【遊樂場訊息】玩家"+ cm.getChar().getName() +"已成功召喚「黃金豬」祝您賺大錢，請入場。",5120027);
			cm.sendOk("召喚成功，請至右上角光環處進入召喚地圖");
		    cm.dispose();
			}else{
		        cm.sendOk("您並沒有足夠的遊樂場兌換卷喔");
		        cm.dispose();
				}
			}if (selection == 41){
			if (cm.haveItem(5221000, 2) == true) {
			cm.gainItem(5221000 ,-2);
			cm.spawnMobOnMap(9400512,20,506,1174,970010000);
			cm.spawnMobOnMap(9410055,20,506,1174,970010000);
			cm.spawnMobOnMap(9410056,20,506,1174,970010000);
			cm.spawnMobOnMap(9410054,20,506,1174,970010000);
			cm.startMapEffect("【遊樂場訊息】玩家"+ cm.getChar().getName() +"已成功召喚「蛋糕」小心胖死，請入場。",5120027);
			cm.sendOk("召喚成功，請至右上角光環處進入召喚地圖");
		        cm.dispose();
			}else{
		        cm.sendOk("您並沒有足夠的遊樂場兌換卷喔");
		        cm.dispose();
				}
			}
			if (selection == 42){
			if (cm.haveItem(5221000, 2) == true) {
			cm.gainItem(5221000 ,-2);
			cm.spawnMobOnMap(9400250,1,506,1174,970010000);
			cm.spawnMobOnMap(9400250,1,-195,1264,970010000);
			cm.spawnMobOnMap(9400250,1,-134,1264,970010000);
			cm.spawnMobOnMap(9400250,1,-62,1264,970010000);
			cm.spawnMobOnMap(9400250,1,80,1264,970010000);
			cm.spawnMobOnMap(9400250,1,133,1264,970010000);
			cm.spawnMobOnMap(9400250,1,153,1264,970010000);
			cm.spawnMobOnMap(9400250,1,190,1264,970010000);
			cm.spawnMobOnMap(9400250,1,243,1264,970010000);
			cm.spawnMobOnMap(9400250,1,260,1264,970010000);
			cm.spawnMobOnMap(9400250,1,300,1264,970010000);
			cm.spawnMobOnMap(9400250,1,340,1264,970010000);
			cm.spawnMobOnMap(9400250,1,380,1264,970010000);
			cm.spawnMobOnMap(9400250,1,420,1264,970010000);
			cm.spawnMobOnMap(9400250,1,460,1264,970010000);
			cm.spawnMobOnMap(9400250,1,500,1264,970010000);
			cm.spawnMobOnMap(9400250,1,540,1264,970010000);
			cm.spawnMobOnMap(9400250,1,580,1264,970010000);
			cm.spawnMobOnMap(9400250,1,600,1264,970010000);
			cm.spawnMobOnMap(9400250,1,640,1264,970010000);
			cm.spawnMobOnMap(9400250,1,680,1264,970010000);
			cm.spawnMobOnMap(9400250,1,700,1264,970010000);
			cm.spawnMobOnMap(9400250,1,740,1264,970010000);
			cm.spawnMobOnMap(9400250,1,780,1264,970010000);
			cm.spawnMobOnMap(9400250,1,800,1264,970010000);
			cm.spawnMobOnMap(9400250,1,840,1264,970010000);
			cm.spawnMobOnMap(9400250,1,604,1174,970010000);
			cm.spawnMobOnMap(9400250,1,404,1174,970010000);
			cm.spawnMobOnMap(9400250,1,295,1217,970010000);
			cm.spawnMobOnMap(9400250,1,693,1216,970010000);
			cm.startMapEffect("【遊樂場訊息】玩家"+ cm.getChar().getName() +"已成功召喚「驚喜箱」祝您挖到寶，請入場。",5120027);
			cm.sendOk("召喚成功，請至右上角光環處進入召喚地圖");
		        cm.dispose();
			}else{
		        cm.sendOk("您並沒有足夠的遊樂場兌換卷喔");
		        cm.dispose();
			}
		}
	}
}
 
 

