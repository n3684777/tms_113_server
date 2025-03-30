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


var �T�֨� = 5220001;//�T�֨�

//boss�l��}�Y
var BossSpawn = [
	[9400700, 1,�T�֨�, 10, -110, 213, 910000097, "�u�W�ŵf�X�v", "���\���ѶW�ŵf�X�����v���A�o��W�a#r�f�X�M��#k�C"],
	[9600064, 1,�T�֨�, 5, -110, 213, 910000097, "�u�����v", "���\���ѳ��������v�o��j�q�g����y�A���N�O�妳�I�h�C"],
	[9400748, 1,�T�֨�, 10, -110, 213, 910000097, "�u�\�֧J���v", "���\���ѻ\�֧J�������v�o��W�a#r�\�֧J���M��#k�C"],
	[9400358, 1,�T�֨�, 30, -110, 213, 910000097, "�u�Q�D�G���¿ߡv", "���\���ѳQ�D�G���¿ߦ����v��o�U��#r�ޯ��#k�֨ӬD��!!"],
];

//boss�l�굲��

//�ԭ@�}�Y
var Patience = [
	[101000100,�T�֨�, 1, "�ԭ@�a�ϡu�ԭ@���L�]�@�h�^�v"],
	[101000102,�T�֨�, 1, "�ԭ@�a�ϡu�ԭ@���L�]�T�h�^�v"],
	[103000900,�T�֨�, 1, "�ԭ@�a�ϡu�T���u�@���a��B1�v"],
	[103000903,�T�֨�, 1, "�ԭ@�a�ϡu�T���u�G���a��B1�v"],
	[103000906,�T�֨�, 1, "�ԭ@�a�ϡu�T���u�T���a��B1�v"],
	[105040310,�T�֨�, 1, "�ԭ@�a�ϡu�I�δ˪L�]�@�h�^�v"],
	[105040312,�T�֨�, 1, "�ԭ@�a�ϡu�I�δ˪L�]�T�h�^�v"],
	[105040314,�T�֨�, 1, "�ԭ@�a�ϡu�I�δ˪L�]���h�^�v"],
];


//�ԭ@����

//��a�T�ֶ}�l

var HappySpawn = [
	[9400512, 20, �T�֨�, 2, -110, 215, 910000097, "�u�J�|�t�C�v", 9410055, 9410056, 9410054],
	[9400250, 15, �T�֨�, 5, -110, 215, 910000097, "�u��߽c�v"],
	[9500167, 100, �T�֨�, 10, -110, 215, 910000097, "�u�����ޡv"],
];

//��a�T�ֵ���

//��a�T�ֶ}�l

var party = [
	["�V������", �T�֨�, 1, "�V������"],
	["MV", �T�֨�, 1, "MV"],
	["���Q����", �T�֨�, 1, "���Q����"],	
	["�g�A�a��", �T�֨�, 1, "�g�A�a��"],
	["�O�@�ؤ�", �T�֨�, 1, "�O�@�ؤ�"],	
	["�B�M�h", �T�֨�, 1, "�B�M�h"],	
];

//��a�T�ֵ���

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
				   "�z�n~�w��Ө�d�ǹC�ֶ�A�п�ܱz�Q�C�������O�A�÷j�����y�P�I�����y���F�z���I����!!!#k\r\n#k"+
				   "#L0##r �i�T�{�a�Ϥ��O�_�����a�j#k\r\n\r\n#k"+
				   "#L101##dBOSS�D����\r\n#k"+
				   "#L102##d�ԭ@������#k\r\n#k"+
				   "#L103##d��a�T����#k\r\n#k"
				   //"#L104##d�ƥ��D��#k\r\n#k"
				   
				   );
	}else if(status == 1) {
	nextmap = cm.getC().getChannelServer().getMapFactory().getMap(910000097);	
			if (selection == 0){
			if (nextmap.playerCount() > 0) {					
			cm.sendOk("�ثe�a�Ϥ�#r�i�����a�j#k���b�i�次�ʳ�");
		        cm.dispose();
			}else{
		        cm.sendOk("�ثe�a�Ϥ�#r�i�L���a�j#k�i�次��");
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
                    cm.sendOk("�o�Ӱө����s�b");
                    cm.dispose();
                    return;
                }
			 if (selection2 == 101){				 
			 var storeText = "";
			 storeText += "�п�ܤ@���z�Q�D�Ԫ�BOSS\r\n";
			 for (var i = 0; i < storeInfo.length; i++) {
					BOSSId = storeInfo[i][0];
					BOSScost = storeInfo[i][1];
					Item = storeInfo[i][2];
					Itemcost = storeInfo[i][3];
				 
				storeText += "#L" + i + "##o" + BOSSId + "# #r�i"+BOSScost+"�j#k �� - #v" + Item + "# - #r�i" + Itemcost + "�j#k �i#l\r\n";				
				}
			cm.sendSimple(storeText);			        
			}if (selection2 == 102){			
			 var storeText = "";
			 storeText += "�п�ܤ@���z�Q�D�Ԫ��ԭ@����\r\n";
			 for (var i = 0; i < storeInfo.length; i++) {
				MapId = storeInfo[i][0];
				PatienceItem = storeInfo[i][1];
				PatienceCost = storeInfo[i][2];				 
				storeText += "#L" + i + "##d#m" + MapId +  " ##k -  #i" + PatienceItem +  "# #r�i" + PatienceCost+  "�j#k �i #l" + "\r\n";
					
				}
			cm.sendSimple(storeText);		        
			}if (selection2 == 103){
			var storeText = "";
				storeText += "�п�ܤ@���z�Q�D�Ԫ��l���~\r\n";
			 for (var i = 0; i < storeInfo.length; i++) {
					HappySpawnId = storeInfo[i][7];
					HappySpawncost = storeInfo[i][1];
					Item = storeInfo[i][2];
					Itemcost = storeInfo[i][3];
				 
				storeText += "#L" + i + "#" + HappySpawnId + "  #r�i"+HappySpawncost+"�j#k �� - #v" + Item + "#  #r�i" + Itemcost + "�j#k �i#l\r\n";				
				}
			cm.sendSimple(storeText);	        
			}if (selection2 == 104){
			var storeText = "";
				storeText += "�п�ܤ@���z�Q�D�Ԫ��ƥ�\r\n";
			 for (var i = 0; i < storeInfo.length; i++) {
					partyId = storeInfo[i][3];
					Item = storeInfo[i][1];
					Itemcost = storeInfo[i][2];
				 
				storeText += "#L" + i + "#�D��#r�i"+partyId+"�j#k �ƥ� - #v" + Item + "#  #r�i" + Itemcost + "�j#k �i#l\r\n";				
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
                    cm.sendYesNo("�z�T�w�n�ϥ�#r�i"+ Itemcost2 +"�j#k�� #t" + Item2 + "# �l��#r#o" + BOSSId2 + "##k�ܡH");
                } else {
                    cm.sendOk("�z�èS���i"+ Itemcost2 +"�j�� #i" + Item2 + "#");
                    cm.dispose();
                }
			}if(selection2 == 102){
					MapId2 = storeInfo[selection3][0];
					PatienceItem2 = storeInfo[selection3][1];
					PatienceCost2 = storeInfo[selection3][2];	
				 if (cm.haveItem(PatienceItem2, PatienceCost2)) {
                    cm.sendYesNo("�z�T�w�n�ϥ�#r�i"+ PatienceCost2 +"�j#k�� #t" + PatienceItem2 + "# �i�J#r#m" + MapId2 + "##k�ܡH");
                } else {
                    cm.sendOk("�z�èS��#r�i"+ PatienceCost2 +"�j#k�� #i" + PatienceItem2 + "#");
                    cm.dispose();
                }
			}if(selection2 == 103){
					HappySpawnId2 = storeInfo[selection3][7];
					HappySpawncost2 = storeInfo[selection3][1];
					Item2 = storeInfo[selection3][2];
					Itemcost2 = storeInfo[selection3][3];
					if (cm.haveItem(Item2, Itemcost2)) {
                    cm.sendYesNo("�z�T�w�n�ϥ�#r�i"+ Itemcost2 +"�j#k�� #t" + Item2 + "# �l��#r" + HappySpawnId2 + "#k�ܡH");
                } else {
                    cm.sendOk("�z�èS���i"+ Itemcost2 +"�j�� #i" + Item2 + "#");
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
			Boss���� = storeInfo[selection3][8];	
			cm.spawnMobOnMap(BOSSId2,BOSScost2,BossMapX,BossMapY,BossMap);
			cm.sendOk(Boss����);
			cm.getMap().startMapEffect("�i�C�ֳ��T���j���a"+ cm.getChar().getName() +"�w���\�l��"+ BossWorldMessage +"���z���ۥX�ӡA�ФJ���C", 5121020);
			cm.gainItem(Item2, -Itemcost2);
			cm.dispose();
		}
		if(selection2 == 102){
			MapWorldMessage = storeInfo[selection3][3];
			cm.warp(MapId2,0);
			cm.worldMessage("�i�C�ֳ��T���j���a"+ cm.getChar().getName() +"�i�J�F"+ MapWorldMessage +"�ԭ@���ȡC");
			cm.sendOk("�w��J���A���z�ԭ@���ȹC���r�֡C");
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
				cm.getMap().startMapEffect("�i�C�ֳ��T���j���a"+ cm.getChar().getName() +"�w���\�l��"+ HappySpawnWorldMessage +"�p�߭D���A�ФJ���C", 5121020);
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
				cm.getMap().startMapEffect("�i�C�ֳ��T���j���a"+ cm.getChar().getName() +"�w���\�l��"+ HappySpawnWorldMessage +"���z�����_�A�ФJ���C", 5121020);
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
				cm.getMap().startMapEffect("�i�C�ֳ��T���j���a"+ cm.getChar().getName() +"�w���\�l��"+ HappySpawnWorldMessage +"���z�Ȥj���A�ФJ���C", 5121020);
				cm.gainItem(Item2, -Itemcost2);
				cm.dispose();
			}
		}
	}
}

