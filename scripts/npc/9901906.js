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
var �C�֨� = 5221000;



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
				   "�z�n~�w��Ө�d�ǹC�ֶ�A�п�ܱz�Q�C�������O�A�÷j�����y�P�I�����y���F�z���I����!!!#k\r\n#k"+
				   "#L0##r �i�T�{�a�Ϥ��O�_�����a�j#k\r\n\r\n#k"+
				   "#L1##dBOSS�D����\r\n#k"+
				   "#L2##d�ԭ@������#k\r\n#k"+
				   "#L3##d��a�T����#k\r\n#k");
	}else if(status == 1) {
	nextmap = cm.getC().getChannelServer().getMapFactory().getMap(970010000);	
			if (selection == 0){
			if (nextmap.playerCount() > 0) {					
			cm.sendOk("�ثe�a�Ϥ�#r�i�����a�j#k���b�i�次�ʳ�");
		        cm.dispose();
			}else{
		        cm.sendOk("�ثe�a�Ϥ�#r�i�L���a�j#k�i�次��");
		        cm.dispose();
			}
			}else if (selection == 1){
			cm.sendSimple("�п�ܤ@���z�Q�D�Ԫ�BOSS\r\n"+
							  "#L20##d#i"+�C�֨�+"# �i�|�i�j =  �l��W�ŵf�X#k\r\n#k#l"+
							  "#L21##d#i"+�C�֨�+"# �i�Q�G�i�j = BOSS�D�ԡu�Ȥ��F�v#k\r\n#k#l"+
							  "#L22##d#i"+�C�֨�+"# �i�Q�i�j = BOSS�D�ԡu���]���v#k\r\n#k#l"+
							  "#L23##d#i"+�C�֨�+"# �i��i�j = �l�곽��#k\r\n#k#l"+
							  "#L24##d#i"+�C�֨�+"# �i�Q�i�j = BOSS�D�ԡu�Q�D�G���¿ߡv#k\r\n#k#l");		        
			}else if (selection == 2){
			cm.sendSimple("�п�ܤ@���z�Q�D�Ԫ��ԭ@����\r\n"+
							  "#L30##d#i"+�C�֨�+"#�i�s�i�j = �e���ԭ@�a�ϡu�ԭ@���L�]�@�h�^�v#k\r\n#k#l"+
							  "#L31##d#i"+�C�֨�+"#�i�s�i�j = �e���ԭ@�a�ϡu�ԭ@���L�]�T�h�^�v#k\r\n#k#l"+							  
							  "#L32##d#i"+�C�֨�+"# �i�s�i�j = �e���ԭ@�a�ϡu�@���a��B1�ԭ@���ȡv#k\r\n#k#l"+
							  "#L33##d#i"+�C�֨�+"# �i�s�i�j = �e���ԭ@�a�ϡu�G���a��B1�ԭ@���ȡv#k\r\n#k#l"+
							  "#L34##d#i"+�C�֨�+"# �i�s�i�j = �e���ԭ@�a�ϡu�T���a��B1�ԭ@���ȡv#k\r\n#k#l"+
							  "#L35##d#i"+�C�֨�+"# �i�s�i�j = �e���ԭ@�a�ϡu�I�δ˪L�]�@�h�^�v#k\r\n#k#l"+
							  "#L36##d#i"+�C�֨�+"# �i�s�i�j = �e���ԭ@�a�ϡu�I�δ˪L�]�T�h�^�v#k\r\n#k#l"+
							  "#L37##d#i"+�C�֨�+"# �i�s�i�j = �e���ԭ@�a�ϡu�I�δ˪L�]���h�^�v#k\r\n#k#l"+
							  "#L38##d#i"+�C�֨�+"# �i���i�j = �e���S��ԭ@�a��#k\r\n#k");		        
			}else if (selection == 3){
			cm.sendSimple("�п�ܤ@���z�Q�D�Ԫ���a�T�֥���\r\n"+
							  "#L40##d#i5221000# �i��i�j = �l�������#k\r\n#k"+
							  "#L41##d#i5221000# �i��i�j = �l��J�|#k\r\n#k"+							  
							  "#L42##d#i5221000# �i��i�j = ����_�c#k\r\n#k");		        
			}
			
		}else if(status == 2) {
			if (selection == 20){
			if (cm.haveItem(5221000, 4) == true) {
			cm.gainItem(5221000 ,-4);
			cm.spawnMobOnMap(9400700,1,506,1174,970010000);
			cm.startMapEffect("�i�C�ֳ��T���j���a"+ cm.getChar().getName() +"�w���\�l��u�W�ŵf�X�v���ߦY���X���J�A�ФJ���C",5120027);
		        cm.dispose();
			}else{
		        cm.sendOk("�z�èS���������C�ֳ��I������");
		        cm.dispose();
				}
			}if (selection == 21){
			if (cm.haveItem(5221000, 12) == true) {
			cm.gainItem(5221000 ,-12);
			cm.spawnMobOnMap(9400203,1,506,1174,970010000);
			cm.startMapEffect("�i�C�ֳ��T���j���a"+ cm.getChar().getName() +"�w���\�l��u�Ȥ��F�v���z���ۥX�ӡA�ФJ���C",5120027);
			cm.sendOk("�l�ꦨ�\�A�Цܥk�W�������B�i�J�l��a��");
		        cm.dispose();
			}else{
		        cm.sendOk("�z�èS���������C�ֳ��I������");
		        cm.dispose();
				}
			}if (selection == 23){
			if (cm.haveItem(5221000, 2) == true) {
			cm.gainItem(5221000 ,-2);
			cm.spawnMobOnMap(9600064,1,506,1174,970010000);
			cm.startMapEffect("�i�C�ֳ��T���j���a"+ cm.getChar().getName() +"�w���\�l��u�����v�зR�@�O�|���A�ФJ���C",5120027);
			cm.sendOk("�l�ꦨ�\�A�Цܥk�W�������B�i�J�l��a��");
		        cm.dispose();
			}else{
		        cm.sendOk("�z�èS���������C�ֳ��I������");
		        cm.dispose();
				}
			}if (selection == 22){
			if (cm.haveItem(5221000, 10) == true) {
			cm.gainItem(5221000 ,-10);
			cm.spawnMobOnMap(9410040,1,506,1174,970010000);
			cm.startMapEffect("�i�C�ֳ��T���j���a"+ cm.getChar().getName() +"�w���\�l��u���]���v���z���ۥX�ӡA�ФJ���C",5120027);
			cm.sendOk("�l�ꦨ�\�A�Цܥk�W�������B�i�J�l��a��");
		        cm.dispose();
			}else{
		        cm.sendOk("�z�èS���������C�ֳ��I������");
		        cm.dispose();
				}
			}if (selection == 24){
			if (cm.haveItem(5221000, 10) == true) {
			cm.gainItem(5221000 ,-10);
			cm.spawnMobOnMap(9400358,1,506,1174,970010000);
			cm.startMapEffect("�i�C�ֳ��T���j���a"+ cm.getChar().getName() +"�w���\�l��u�Q�D�G���¿ߡv���z���ۥX�ӡA�ФJ���C",5120027);
			cm.sendOk("�l�ꦨ�\�A�Цܥk�W�������B�i�J�l��a��");
		        cm.dispose();
			}else{
		        cm.sendOk("�z�èS���������C�ֳ��I������");
		        cm.dispose();
				}
			}//BOSS�l�굲��  �ԭ@���ȶ}�l
			if (selection == 30){			
			cm.warp(101000100);
			cm.worldMessage("�y�i���T���z�G "+ cm.getChar().getName() +" ���a�i�J�F�ԭ@���L�]�@�h�^�ԭ@����!!!");
			cm.sendOk("�w��J���A���z�ԭ@���ȹC���r�֡I�I�I");
		    cm.dispose();
			}							
			if (selection == 31){
			cm.warp(101000102);
			cm.worldMessage("�y�i���T���z�G "+ cm.getChar().getName() +" ���a�i�J�F�ԭ@���L�]�T�h�^�ԭ@����!!!");
			cm.sendOk("�w��J���A���z�ԭ@���ȹC���r�֡I�I�I");
		    cm.dispose();}
			if (selection == 32){
			cm.warp(103000900);
			cm.worldMessage("�y�i���T���z�G "+ cm.getChar().getName() +" ���a�i�J�F�T���u�@���a��B1�ԭ@����!!!");
			cm.sendOk("�w��J���A���z�ԭ@���ȹC���r�֡I�I�I");
		    cm.dispose();
			}
			if (selection == 33){
			cm.warp(103000903);
			cm.worldMessage("�y�i���T���z�G "+ cm.getChar().getName() +" ���a�i�J�F�T���u�G���a��B1�ԭ@����!!!");
			cm.sendOk("�w��J���A���z�ԭ@���ȹC���r�֡I�I�I");
		    cm.dispose();
			}
			if (selection == 34){
			cm.warp(103000906);
			cm.worldMessage("�y�i���T���z�G "+ cm.getChar().getName() +" ���a�i�J�F�T���u�T���a��B1�ԭ@����!!!");
			cm.sendOk("�w��J���A���z�ԭ@���ȹC���r�֡I�I�I");
		    cm.dispose();
			}
			if (selection == 35){
				cm.warp(105040310);
			cm.worldMessage("�y�i���T���z�G "+ cm.getChar().getName() +" ���a�i�J�F�I�δ˪L�]�@�h�^�ԭ@����!!!");
			cm.sendOk("�w��J���A���z�ԭ@���ȹC���r�֡I�I�I");
		    cm.dispose();
			}
			if (selection == 36){
				cm.warp(105040312);
			cm.worldMessage("�y�i���T���z�G "+ cm.getChar().getName() +" ���a�i�J�F�I�δ˪L�]�T�h�^�ԭ@����!!!");
			cm.sendOk("�w��J���A���z�ԭ@���ȹC���r�֡I�I�I");
		    cm.dispose();
			}
			if (selection == 37){
			cm.warp(105040314);
			cm.worldMessage("�y�i���T���z�G "+ cm.getChar().getName() +" ���a�i�J�F�I�δ˪L�]���h�^�ԭ@����!!!");
			cm.sendOk("�w��J���A���z�ԭ@���ȹC���r�֡I�I�I");
		    cm.dispose();
			}
			if (selection == 38){
			cm.warp(809010000);
			cm.worldMessage("�y�i���T���z�G "+ cm.getChar().getName() +" ���a�i�J�F�S��ԭ@�a�ϧԭ@����!!!");
			cm.gainItem(5221000 ,-5);
			cm.sendOk("�w��J���A���z�ԭ@���ȹC���r�֡I�I�I");
		    cm.dispose();
			}//�ԭ@���ȵ��� ��a�T�ֶ}�l
			if (selection == 40){
			if (cm.haveItem(5221000, 2) == true) {
			cm.gainItem(5221000 ,-2);
			cm.spawnMobOnMap(9500167,100,506,1174,970010000);
			cm.startMapEffect("�i�C�ֳ��T���j���a"+ cm.getChar().getName() +"�w���\�l��u�����ޡv���z�Ȥj���A�ФJ���C",5120027);
			cm.sendOk("�l�ꦨ�\�A�Цܥk�W�������B�i�J�l��a��");
		    cm.dispose();
			}else{
		        cm.sendOk("�z�èS���������C�ֳ��I������");
		        cm.dispose();
				}
			}if (selection == 41){
			if (cm.haveItem(5221000, 2) == true) {
			cm.gainItem(5221000 ,-2);
			cm.spawnMobOnMap(9400512,20,506,1174,970010000);
			cm.spawnMobOnMap(9410055,20,506,1174,970010000);
			cm.spawnMobOnMap(9410056,20,506,1174,970010000);
			cm.spawnMobOnMap(9410054,20,506,1174,970010000);
			cm.startMapEffect("�i�C�ֳ��T���j���a"+ cm.getChar().getName() +"�w���\�l��u�J�|�v�p�߭D���A�ФJ���C",5120027);
			cm.sendOk("�l�ꦨ�\�A�Цܥk�W�������B�i�J�l��a��");
		        cm.dispose();
			}else{
		        cm.sendOk("�z�èS���������C�ֳ��I������");
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
			cm.startMapEffect("�i�C�ֳ��T���j���a"+ cm.getChar().getName() +"�w���\�l��u��߽c�v���z�����_�A�ФJ���C",5120027);
			cm.sendOk("�l�ꦨ�\�A�Цܥk�W�������B�i�J�l��a��");
		        cm.dispose();
			}else{
		        cm.sendOk("�z�èS���������C�ֳ��I������");
		        cm.dispose();
			}
		}
	}
}
 
 

