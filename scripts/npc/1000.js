var ids = [5220010,2022179,2022243,2022244,
2022242,2022240,5220020,5220000,4031365,2030000,2030000,
2022245,2022048];
var Quantity = [1,2,3,4,5,6,7,8,2,3,4,5,2,3,4,5,2,3,4,5,2,3,4,5];
var status = 0;
//meso max2,147,483,647
var item = 4031579;

//�@�P���~
var ���~�@ =3018007;
var ���~�@�ƶq =1;

var ���~�G =5220020;
var ���~�G�ƶq =3;

var �����@ =6666666;

//var belts = Array(1132000, 1132001, 1132002, 1132003, 1132004);
//var belt_level = Array(25, 35, 45, 60, 75);
//var belt_points = Array(200, 1800, 4000, 9200, 17000);

function start() {  
    status = -1;  
    action(1, 0, 0);  
}  

function action(mode, type, selection) {  
    if (mode == -1) {  
        cm.dispose();  
    } else {  
        if (mode == 0 && status == 0) {  
            cm.dispose();  
            return;  
        }  
        if (mode == 1)  
            status++;  
        else  
            status--;  
        if (status == 0) {  
            cm.sendSimple (
				 "#e#r[�C����y]#n#k�u�n�ӧ�ڴN�i�H����C��p���y�@����!#e" +
                 "#k\r\n#L1#�ڭn����C��p���y!!!" +
                 "\r\n#L3##k�ϥ�" + "#r#z" + item + "#*2#k����@��" );
				 //"\r\n#L2##k�ѻP�S�O����#r(�̲׼��y)#k\r\n      ��o#r#z " + ���~�@ + " #�B������J�B " + �����@ + " #k"
        } else if (selection == 1) { 
			if ((cm.getBossLog('VIPDAY2') < 1) && (cm.getMeso() <= (2147483647 - 5000000))) {
				var mesogain = Math.floor(Math.random() * 1000001) //0~5000000
				cm.gainItem(item, 1);
				cm.gainMeso(mesogain);
				cm.setBossLog("VIPDAY2");				
				cm.sendOk("�z��o�F#i"+ item +"#�A�[��\r\n" + "����" + mesogain + "��");
			} else {
				cm.sendOk("�A���Ѥw�g��L�F");
			}
			cm.dispose();
		}/* else if (selection == 2) { 
            if(cm.haveItem(4032041,200) && cm.haveItem(3991026,1) && cm.haveItem(3991034,1) && cm.haveItem(3991028,1) && cm.haveItem(3991037,1)&&  cm.getPlayer().getLevel() >= 40){
			cm.gainItem(4032041, -200);
			cm.gainItem(3991026, -1);
			cm.gainItem(3991034, -1);
			cm.gainItem(3991028, -1);
			cm.gainItem(3991037, -1);
			cm.gainItem(���~�@, ���~�@�ƶq);
			cm.gainItem(���~�G, ���~�G�ƶq);
			cm.gainMeso(�����@);
			cm.sendOk("���߱z����F������~��~"); 
            cm.dispose(); 
			}else{
			cm.sendOk(
			"�i���ʻ����j\r\n"+
			"�@�g�C�Ѫ����ʶ}�l�o~���F�C�Ѥ��P�����~�A�٥i�`����S��uAICL�v�r��"+
			"�`�����N�|�b�̫�@�Ѷ}��I��~\r\n\r\n"+
			"�i����������p�U�j\r\n"+
			"���Żݬ� : #r40 ��#k\r\n\r\n"+
			"�D��ݨD :#v " + 4032041 + " #  #z " + 4032041 + " #   #r200 ��#k\r\n\r\n"+
			"#r����ݩ|�����"); 
            cm.dispose();	
			}
        }*/ else if (selection == 3) {
        	if (cm.haveItem(item, 2)) {
				cm.gainItem(item,-2);
				var gift = Math.floor(Math.random() * ids.length);
				var gifts = Math.floor(Math.random() * Quantity.length);
				cm.gainItem(ids[gift],gifts);
				cm.sendOk("���ߧA��o�F�@#i" + ids[gift] + "#�@"+ gifts +"�ӡI�I");
        	} else {
        		cm.sendOk("�A�|���`���쨬����#i" + item + "#");
        	}
        	cm.dispose();
        }
    }
}