/*�Ǫ���J�� �d�ǹζ��s��*/
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
var �l��ƶq = RaroSpawn[0][0];
var �l��y��x = RaroSpawn[0][1];
var �l��y��y = RaroSpawn[0][2];
var �l��a�� = RaroSpawn[0][3];

var �T�֨� = [

 [5220001, 1]
 
 ]
var �T�֨��N�X =  �T�֨�[0][0];
var �T�֨��ƶq =  �T�֨�[0][1];


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
			cm.sendOk("�P���z���U�����{�C");
            return;
        }
        
        if (mode == 1)
            status++;
        else
            status--;
        
        if (status == 0) {
			cm.sendSimple("�z�n�A�ڬO�@�x�Ǫ���J��\r\n" +
						  "�p�G�z��#v"+�T�֨��N�X+"##r �i1�ӡj #k�A�N�i�H�l��Ǫ��C" +
						  "�b�ϥΫe���ƻ�O�ڥi�H���z���쪺?\r\n"+
						  "#b#L0#�l��BOSS�Ǫ�#l\r\n"+
						  "#b#L1#����O�Ǫ���J��?#l\r\n\r\n"+
						  "#b#L2#�b����i�H����#v"+�T�֨��N�X+"#?#l");
	}if(status == 1) {
		if (selection == 0) { 
			if (cm.haveItem(�T�֨��N�X,�T�֨��ƶq)) {
			if (BossSpawnRandom <= 6) {
				cm.spawnMobOnMap(iraro ,�l��ƶq ,�l��y��x ,�l��y��y ,�l��a��);
				cm.gainItem(�T�֨��N�X, -�T�֨��ƶq);
				cm.dispose();
		}else{
				cm.spawnMobOnMap(BossSpawn2 ,�l��ƶq ,�l��y��x ,�l��y��y ,�l��a��);
				cm.worldMessage("�y�Ǫ���J���z�G�Ӹرi�աI�I�I���a"+ cm.getChar().getName() +" �b�Ǫ���J���l��X�}��BOSS��!!!");	
				cm.gainItem(�T�֨��N�X, -�T�֨��ƶq);
				cm.dispose();
			}
		}else{
			cm.sendOk("�z�� #v"+ �T�֨��N�X +"# �����C");
			cm.dispose();
		}
			
		}else if (selection == 1){
			cm.sendOk("�b�Ǫ���J�t�Τ��A�z�i�H�����v���U���U�˦��쪺BOSS�B����BOSS�A�R���F��E�P��_�C");
			cm.dispose();
		}else if (selection == 2){
			cm.sendOk("#v"+�T�֨�+"#�i�z�L\r\n"+
					  "1.�ӫ��ʶR\r\n"+
					  "2.�I���M�ϦU���I���t�C\r\n"+
					  "3.�C��M�ϦU���I���t�C\r\n"+
					  "4.���ʨ��o\r\n"+
					  "5.�����_�c\r\n");
			cm.dispose();
		}else{
               cm.sendOk("�A���W�S���Ӫ�");
               cm.dispose();
			}
		}	
    }
}

