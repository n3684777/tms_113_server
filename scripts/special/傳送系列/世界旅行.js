/*
 NPC Name: �U��ǰe�ҪOBy�p�t �o����AICL�׾�: https://www.xinbiao-aicl.com/forum.php
	
 �ϥλ���:
	1. ��U�� TopSel �������i�]�m���� + �ϥΪ� [�a�ϰ}�C]

	2. �a�ϰ}�C�����]�m
    
	mapid [�a��ID]
	
	mapname [�a�ϦW��] ��=�w�]�W �i�ۤv�]�p�ﶵ�W�� �]�i�H��UI��
	
	ct [��������] ��=�L����
		0 = �L
		1 = ����
		2 = �I��
		3 = �I�Ʒ��I�ҥi
		4 = [�ۤv�X�R]
		�D��N�X = ���ӹD��
	
	cq [���Ӽƶq] ��=0
*/
var status = -1;
var memoline = "#fUI/UIWindow.img/Memo/line#";//���j�u
var ���� = "#fUI/Basic.img/CheckBox/0#";
var �w�� = "#fUI/Basic.img/CheckBox/1#";
var �����a�� = [//[�a�ϰ}�C] {"mapid":"","mapname":"<<  >>","ct":"","cq":""},
	{"mapid":"910000000","mapname":"<< �ۥѥ��� >>","ct":"","cq":""},//
	{"mapid":"200000301","mapname":"<< ���|���� >>","ct":"","cq":""},
	{"mapid":"749050400","mapname":"<< �� �J �� >>","ct":"","cq":""},//
	{"mapid":"104000000","mapname":"<< ���h�Q�� >>","ct":"","cq":""},//���h�Q�ȴ�
	{"mapid":"100000000","mapname":"<< �}�b��� >>","ct":"","cq":""},//�}�b���
	{"mapid":"101000000","mapname":"<< �]�k�˪L >>","ct":"","cq":""},//�]�k�˪L
	{"mapid":"102000000","mapname":"<< �i�h���� >>","ct":"","cq":""},//�i�h����
	{"mapid":"103000000","mapname":"<< �Z������ >>","ct":"","cq":""},//�Z������
	{"mapid":"120000000","mapname":"<< �H �� �� >>","ct":"","cq":""}, 
	{"mapid":"130000000","mapname":"<< �C �p �� >>","ct":"","cq":""},
   {"mapid":"110000000","mapname":"<< �������� >>","ct":"","cq":""},
   {"mapid":"105040300","mapname":"<< �_ �� �� >>","ct":"","cq":""},
   {"mapid":"270000000","mapname":"<< �T �� �� >>","ct":"","cq":""},
   {"mapid":"240000000","mapname":"<< �� �� �� >>","ct":"","cq":""},
   {"mapid":"220000000","mapname":"<< �� �� �� >>","ct":"","cq":""},
   {"mapid":"211000000","mapname":"<< �B�쳷�� >>","ct":"","cq":""},
   {"mapid":"200000000","mapname":"<< �ѪŤ��� >>","ct":"","cq":""},
   {"mapid":"230000000","mapname":"<< �� �@ �� >>","ct":"","cq":""},
   {"mapid":"250000000","mapname":"<< ���P�� >>","ct":"","cq":""},
   {"mapid":"251000000","mapname":"<< �F�Ĥ۹� >>","ct":"","cq":""},
   {"mapid":"550000000","mapname":"<< ���|��y >>","ct":"","cq":""},
   {"mapid":"551000000","mapname":"<< �m �� �� >>","ct":"","cq":""},
   {"mapid":"260000000","mapname":"<< �ǧƺ�w >>","ct":"","cq":""},
   {"mapid":"261000000","mapname":"<< ���{���� >>","ct":"","cq":""},
   {"mapid":"222000000","mapname":"<< �� �� �� >>","ct":"","cq":""},
   {"mapid":"221000000","mapname":"<< �����`�� >>","ct":"","cq":""},
   {"mapid":"501000000","mapname":"<< �����x�q >>","ct":"","cq":""},
   {"mapid":"800000000","mapname":"<< �j�N���� >>","ct":"","cq":""},
   {"mapid":"800040000","mapname":"<< �����j�� >>","ct":"","cq":""},
   {"mapid":"801000000","mapname":"<< �L �M �� >>","ct":"","cq":""},
   {"mapid":"540000000","mapname":"<< ���߰Ӱ� >>","ct":"","cq":""},
   {"mapid":"500000000","mapname":"<< ���W���� >>","ct":"","cq":""},
   {"mapid":"702000000","mapname":"<< �C �s �� >>","ct":"","cq":""},
   {"mapid":"600000000","mapname":"<< �s �� �� >>","ct":"","cq":""},
   {"mapid":"742000000","mapname":"<< 101 �j�D >>","ct":"","cq":""},
   {"mapid":"741000000","mapname":"<< �� �] �� >>","ct":"","cq":""},
   {"mapid":"300000000","mapname":"<< �Ȯ����� >>","ct":"","cq":""},
   {"mapid":"701000000","mapname":"<< �W �� �y >>","ct":"","cq":""},
   {"mapid":"541000000","mapname":"<< ���X�Y >>","ct":"","cq":""},
]
var �m���a�� = [//[�a�ϰ}�C]
	{"mapid":"103000101","mapname":"#bLv.  10 - 15   #k���˽m�\�� #e#r�a�K�@���u[�a��01]#n\r\n","ct":"","cq":""},
	{"mapid":"742000103","mapname":"#bLv.  15 - 20   #k���˽m�\�� #e#r���B���[����2#n\r\n","ct":"","cq":""},//���B���[����2
	{"mapid":"220010500","mapname":"#bLv.  20 - 30   #k���˽m�\�� #e#r�S�O���x#n\r\n","ct":"","cq":""},//����1
	{"mapid":"550000100","mapname":"#bLv.  30 - 50   #k���˽m�\�� #e#r�d�ׯ��#n\r\n","ct":"","cq":""},
	{"mapid":"540020100","mapname":"#bLv.  30 - 50   #k���˽m�\�� #e#r����2#n\r\n","ct":"","cq":""},//
	{"mapid":"541010010","mapname":"#bLv.  50 - 70   #k���˽m�\�� #e#r���F��2#n\r\n","ct":"","cq":""},//���F��2
	{"mapid":"742010100","mapname":"#bLv.  70 - 80   #k���˽m�\�� #e#r���|�s��#n\r\n","ct":"","cq":""},
	{"mapid":"742010203","mapname":"#bLv.  70 - 80   #k���˽m�\�� #e#r�W�H�j�D�n���ϰ�#n\r\n","ct":"","cq":""},
	{"mapid":"541020200","mapname":"#bLv.  80 - 90   #k���˽m�\�� #e#r�Q�|����II #n\r\n","ct":"","cq":""},
	{"mapid":"551030100","mapname":"#bLv.  90 - 100  #k���˽m�\�� #e#r�ڤۤ��� #n\r\n","ct":"","cq":""},
	{"mapid":"541020500","mapname":"#bLv. 100 - 120  #k���˽m�\�� #e#r�Q�|������ #n\r\n","ct":"","cq":""},
]
var �ն����� = [//[�a�ϰ}�C]
	{"mapid":"925020000","mapname":"#k<< �ն����� #k>> #bLv.10 - 200 #r#e�Z���D��#n\r\n","ct":"","cq":""},
	{"mapid":"103000000","mapname":"#k<< �ն����� #k>> #bLv.21 - 200 #r#e�W�ź���F#n\r\n","ct":"","cq":""},
   {"mapid":"980000000","mapname":"#k<< �ն����� #k>> #bLv.30 - 50  #r#e�Ǫ��ݥx#n\r\n","ct":"","cq":""},
	{"mapid":"221024500","mapname":"#k<< �ն����� #k>> #bLv.35 - 200 #r#e101�ն�#n\r\n","ct":"","cq":""},
	{"mapid":"200080101","mapname":"#k<< �ն����� #k>> #bLv.51 - 200 #r#e�ѪŲն�#n\r\n","ct":"","cq":""},
	{"mapid":"251010404","mapname":"#k<< �ն����� #k>> #bLv.60 - 200 #r#e���_�����#n\r\n","ct":"","cq":""},
   {"mapid":"980030000","mapname":"#k<< �ն����� #k>> #bLv.51 - 70  #r#e�Ǫ��ݥx2#n\r\n","ct":"","cq":""},
	{"mapid":"261000011","mapname":"#k<< �ն����� #k>> #bLv.70 - 200 #r#eù�K�ڻP���R��#n\r\n","ct":"","cq":""},
	
	
]
var �S��a�� = [//[�a�ϰ}�C]
	{"mapid":"680000000","mapname":"#e#k<< #b�S��a�� #k>> #r���B�p��\r\n�@","ct":"","cq":""},
	{"mapid":"801000100","mapname":"#e#k<< #b�S��a�� #k>> #r�k����\r\n","ct":"","cq":""},
	{"mapid":"801000200","mapname":"#e#k<< #b�S��a�� #k>> #r�k����\r\n","ct":"","cq":""},
	{"mapid":"100000202","mapname":"#e#k<< #b�ԭ@�a�� #k>> #r�}����d������\r\n","ct":"","cq":""},
	{"mapid":"220000006","mapname":"#e#k<< #b�ԭ@�a�� #k>> #r���㫰�d������\r\n","ct":"","cq":""},
	{"mapid":"101000100","mapname":"#e#k<< #b�ԭ@�a�� #k>> #r�ԭ@���L�@\r\n","ct":"","cq":""},
	{"mapid":"103000900","mapname":"#e#k<< #b�ԭ@�a�� #k>> #r�Z���@���u\r\n","ct":"","cq":""},
	{"mapid":"103000903","mapname":"#e#k<< #b�ԭ@�a�� #k>> #r�Z���G���u\r\n","ct":"","cq":""},
	{"mapid":"103000906","mapname":"#e#k<< #b�ԭ@�a�� #k>> #r�Z���T���u\r\n","ct":"","cq":""},
	{"mapid":"105040310","mapname":"#e#k<< #b�ԭ@�a�� #k>> #r�_�ۧ��ԭ@1\r\n","ct":"","cq":""},
	{"mapid":"105040312","mapname":"#e#k<< #b�ԭ@�a�� #k>> #r�_�ۧ��ԭ@2\r\n","ct":"","cq":""},
	{"mapid":"105040314","mapname":"#e#k<< #b�ԭ@�a�� #k>> #r�_�ۧ��ԭ@3\r\n","ct":"","cq":""},
	{"mapid":"280020000","mapname":"#e#k<< #b�ԭ@�a�� #k>> #r���]�ԭ@\r\n","ct":"","cq":""},
	{"mapid":"800040210","mapname":"#e#k<< #b�ԭ@�a�� #k>> #r�Ѭӧԭ@\r\n","ct":"","cq":""},
] 

var �a��BOSS = [//[�a�ϰ}�C]
	{"mapid":"104000400","mapname":"#e#k<< #b�a��BOSS #k>> #r���_��\r\n�@","ct":"","cq":""},
	{"mapid":"101030404","mapname":"#e#k<< #b�a��BOSS #k>> #r�𧯤�\r\n","ct":"","cq":""},
	{"mapid":"107000300","mapname":"#e#k<< #b�a��BOSS #k>> #r�h�A���s\r\n","ct":"","cq":""},
   {"mapid":"260010201","mapname":"#e#k<< #b�a��BOSS #k>> #r�P�H����\r\n","ct":"","cq":""},
   {"mapid":"230020100","mapname":"#e#k<< #b�a��BOSS #k>> #r���F��\r\n","ct":"","cq":""},
   {"mapid":"100040105","mapname":"#e#k<< #b�a��BOSS #k>> #r�L�͵U��\r\n","ct":"","cq":""},
   {"mapid":"221040301","mapname":"#e#k<< #b�a��BOSS #k>> #r���p����\r\n","ct":"","cq":""},
   {"mapid":"100000005","mapname":"#e#k<< #b�a��BOSS #k>> #rĨۣ��\r\n","ct":"","cq":""},
   {"mapid":"105070002","mapname":"#e#k<< #b�a��BOSS #k>> #r�L��Ĩۣ��\r\n","ct":"","cq":""},
   {"mapid":"222010310","mapname":"#e#k<< #b�a��BOSS #k>> #r�E������\r\n","ct":"","cq":""},
   {"mapid":"250010503","mapname":"#e#k<< #b�a��BOSS #k>> #r�p�ǥP�H\r\n","ct":"","cq":""},
   {"mapid":"105090900","mapname":"#e#k<< #b�a��BOSS #k>> #r�ڬ��j\r\n","ct":"","cq":""},
   {"mapid":"261030000","mapname":"#e#k<< #b�a��BOSS #k>> #r�_����\r\n","ct":"","cq":""},
   {"mapid":"211040101","mapname":"#e#k<< #b�a��BOSS #k>> #r����ǤH\r\n","ct":"","cq":""},
   {"mapid":"501030104","mapname":"#e#k<< #b�a��BOSS #k>> #r���⨸��\r\n","ct":"","cq":""},
   {"mapid":"702070400","mapname":"#e#k<< #b�a��BOSS #k>> #r�øg��7��\r\n","ct":"","cq":""},
   {"mapid":"742010202","mapname":"#e#k<< #b�a��BOSS #k>> #r�ƨg�pZ��\r\n","ct":"","cq":""},
   {"mapid":"800010100","mapname":"#e#k<< #b�a��BOSS #k>> #r�Ŧ�Ĩۣ��\r\n","ct":"","cq":""},
   {"mapid":"230040420","mapname":"#e#k<< #b�a��BOSS #k>> #r���㴵\r\n","ct":"","cq":""},
   {"mapid":"240020101","mapname":"#e#k<< #b�a��BOSS #k>> #r����h\r\n","ct":"","cq":""},
   {"mapid":"240020401","mapname":"#e#k<< #b�a��BOSS #k>> #r�Q���s\r\n","ct":"","cq":""},
   {"mapid":"240040401","mapname":"#e#k<< #b�a��BOSS #k>> #r�H���B�s\r\n","ct":"","cq":""},
   {"mapid":"270010500","mapname":"#e#k<< #b�a��BOSS #k>> #r�h�h\r\n","ct":"","cq":""},
   {"mapid":"270020500","mapname":"#e#k<< #b�a��BOSS #k>> #r�Q���մ�\r\n","ct":"","cq":""},
   {"mapid":"270030500","mapname":"#e#k<< #b�a��BOSS #k>> #r�ܥ�d\r\n","ct":"","cq":""},
   {"mapid":"800020130","mapname":"#e#k<< #b�a��BOSS #k>> #r�Ѫ�\r\n","ct":"","cq":""},	
   {"mapid":"800040410","mapname":"#e#k<< #b�a��BOSS #k>> #r�Ѭ�\r\n","ct":"","cq":""},	
]

var �������� = [//[�a�ϰ}�C]
	{"mapid":"220080000","mapname":"#e#k<< #b�������� #k>> #r�� �� ��\r\n�@","ct":"","cq":""},
	{"mapid":"211042400","mapname":"#e#k<< #b�������� #k>> #r�ݼɪ��]\r\n","ct":"","cq":""},
	{"mapid":"551030100","mapname":"#e#k<< #b�������� #k>> #r�ڤۤ���\r\n","ct":"","cq":""},
	{"mapid":"801040004","mapname":"#e#k<< #b�������� #k>> #r�¹D����\r\n","ct":"","cq":""},
	{"mapid":"240050400","mapname":"#e#k<< #b�������� #k>> #r����s��\r\n","ct":"","cq":""},
	{"mapid":"270050000","mapname":"#e#k<< #b�������� #k>> #r�� �d ��\r\n","ct":"","cq":""},
	{"mapid":"802000610","mapname":"#e#k<< #b�������� #k>> #r�����s��\r\n","ct":"","cq":""},
	{"mapid":"802000410","mapname":"#e#k<< #b�������� #k>> #r�� �� ��\r\n","ct":"","cq":""},
	{"mapid":"802000110","mapname":"#e#k<< #b�������� #k>> #r�L�W�]�~\r\n","ct":"","cq":""},
	{"mapid":"802000820","mapname":"#e#k<< #b�������� #k>> #r���ܻ��Z\r\n","ct":"","cq":""},
	{"mapid":"105100100","mapname":"#e#k<< #b�������� #k>> #r�]���ڬ���\r\n","ct":"","cq":""},
]

var TopSel =[// UB = �w����sUI��   NB = ������sUI�� SB = �a�ϼ��DLOGO�� CB = �ϥΪ� [�a�ϰ}�C]
/*
	mapmode [��ܼҪ�����]�СССССССССССССССССССССССССССССССССССССССССССССТ@
		1 = �@��V�U���C   ��ĳmapname: #bLv. 200 #k���˽m�\�� #r�}�b����V�m��#k                                     �U
										#e<< �����ǰe >> �ݼɪ��]                                                     �U
		2 = ��Ӭ��@�泯�C ��ĳmapname: << �W�ź���F Lv21-30 >>                                                      �U
		3 = �T�Ӭ��@�泯�C ��ĳmapname: << �ۥѥ��� >>                                                                �U
		4 = �|�Ӭ��@�泯�C ��ĳmapname: �ۥѥ���  (�Ω�UI��)                                                          �U
																													  ��
*/
	{"Page":"1","UB":�w��+"�����a��","NB":����+"�����a��","SB":"�@�@�@�@�@�@�@�@�@�@#e<<�����a��>>#n","CB":�����a��,"mapmode":"3"},
	{"Page":"2","UB":�w��+"�m���a��","NB":����+"�m���a��","SB":"�@�@�@�@�@�@�@�@�@�@#e<<�m���a��>>#n","CB":�m���a��,"mapmode":"1"},
	{"Page":"3","UB":�w��+"�ն�����","NB":����+"�ն�����","SB":"�@�@�@�@�@�@�@�@�@�@#e<<�ն�����>>#n","CB":�ն�����,"mapmode":"1"},
	{"Page":"4","UB":�w��+"�S��a��","NB":����+"�S��a��","SB":"�@�@�@�@�@�@�@�@�@�@#e<<�S��a��>>#n","CB":�S��a��,"mapmode":"1"},
    {"Page":"5","UB":�w��+"�a��BOSS","NB":����+"�a��BOSS","SB":"�@�@�@�@�@�@�@�@�@�@#e<<�a��BOSS>>#n","CB":�a��BOSS,"mapmode":"1"},
    {"Page":"6","UB":�w��+"��������","NB":����+"��������","SB":"�@�@�@�@�@�@�@�@�@�@#e<<��������>>#n","CB":��������,"mapmode":"1"},
]

var �߰ݬy�{ = false;//�}�� true ���� false [�Y�ݪ�O���ӷ|�j��߰�]
function gomap(mn,ct,cq){
//====================================
// [�߰ݵ����ҪO] �A�D�i�b�o�̭ק�ƪ�
// mn = �ﶵ�W��
// ct = ���Ӫ�����
// cq = ���Ӫ��ƶq
/*
 �򥻻y�k:
	#r  = ����
	#b  = �Ŧ�
	#k  = �¦�
	#d  = ����
	#g  = ���
	#e  = ����
	#n  = ���`
	\r\n = ����
*/
//====================================
	var ��ܤ�r = "";
	��ܤ�r += "=====================================================\r\n";
	��ܤ�r += "�@�@�@�@�@�@�@�@�@#e<<���ɴ���>>#n\r\n";
	��ܤ�r += "=====================================================\r\n";
	
	// �����������������Y�����Ӥ~�|��ܡ�������������������
	if(ct != 0 && cq != 0){
		var ctname = "";
		switch(ct){//���Ӫ��D��W
			case 1:ctname = "����";break;
			case 2:ctname = "�I��(��Cash)";break;
			case 3:ctname = "�I��(�i���I)";break;
			case 4:ctname = "��L�ۭq����������";break;
		}
		if(ct > 1000000){//�D�����
			ctname = "#i" + ct + ":#";//���~���N�X�|�ɭP-21�_�u
		}
		��ܤ�r += "�n���� " + ctname + " x " + cq + " \r\n"
	}
	// �������������������Y�����Ӥ~�|��ܡ�����������������������
	
	
	��ܤ�r += "\r\n�@�@�@�ǰe�� #b" + mn + "#k ��?"
	return ��ܤ�r;
}
//====================================
// [���Ӧ����ҪO] �A�D�i�b�o�̭ק� ���Ӥ������^�Ǥ�r
// mn = �ﶵ�W��(�e���a��)
// ct = ���Ӫ�����
// cq = ���Ӫ��ƶq
//====================================
function cango(mn,id,ct,cq){
	var cg = "";
	switch(ct){
		case 0:break;
		case 1://����
			if(cm.getMeso() < cq ){cm.sendOk("#r�ǰe�� #b" + mn + "#k #r�ݭn" + cq + "�����C");cm.dispose();return;}//��������
			cm.gainMeso(-cq);//���ӷ���
			break;
		case 2://�u���I��
			if(cm.getPlayer().getCSPoints(1) < cq){cm.sendOk("�ǰe�ݭn�I�� " + cq + " �I�C");cm.dispose();return;}
			cm.getPlayer().modifyCSPoints(1,-cq,true);
			break;
		case 3://�I�Ʒ��I�ҥi�u�������I
			if(cm.getPlayer().getCSPoints(2) < cq){
				if(cm.getPlayer().getCSPoints(1) < cq){
					cm.sendOk("�ǰe�ݭn�I�� " + cq + " �I�C");cm.dispose();return;
				}
				cm.getPlayer().modifyCSPoints(1,-cq,true);
			}else{
				cm.getPlayer().modifyCSPoints(2,-cq,true);
			}
			break;
		case 4://�X�R�ҪO[�ۤv�令�ݭn���P�_�Φ���]
			if(cm.getMeso() < cq ){cm.sendOk("��������");cm.dispose();return;}
			cm.gainMeso(-cq);
			break;
	}
	if(ct > 1000000){
		if(!cm.haveItem(ct,cq)){cm.sendOk("#r�ǰe�� #b" + mn + "#k #r�ݭn#i"+ct+":#x"+ cq + "");cm.dispose();return;}//�D�㤣��
		cm.gainItem(ct, -cq);//���ӹD��
	}
	if(id == 910000000){
		returnMap = cm.getSavedLocation("FREE_MARKET");
		cm.clearSavedLocation("FREE_MARKET");
		returnMap = cm.saveLocation("FREE_MARKET");
	}
	cm.dispose();
	cm.warp(id);
}
//-----------------------------------------------
//�H�U�{���X���ݭק��,�Фŧ��
//-----------------------------------------------
var page = 1;var CB = null;var cmap = 0;var cct= 0;var ccq= 0;var ccmn = "";function getTopMsg(a){var b="";var c="";var d=1;for(var i=0;i<TopSel.length;i++){var e=TopSel[i].Page;var f=TopSel[i].UB;var g=TopSel[i].NB;if(e==a){b+="#L"+e+"#"+f+"#l";c=TopSel[i].SB;d=parseInt(TopSel[i].mapmode);CB=TopSel[i].CB}else{b+="#L"+e+"#"+g+"#l"}}b+="\r\n\r\n"+memoline+"\r\n\r\n";b+=c+"\r\n";if(CB!=null){for(var i=0;i<CB.length;i++){var h=parseInt(CB[i].mapid);var j=CB[i].mapname;b+="#L"+h+"#"+(j!=""?j:("#m"+h+"#"))+"#l";if((i+1)%d==0){b+="\r\n"}}}return b}eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('x y(a,b,c){3(a==1){5++}j{5--}3(5==0){k.o(p(l))}j 3(5==1){6 d=c;q(6 i=0;i<r.s;i++){6 e=r[i].z;3(e==d){l=d;5=0;k.o(p(l));t}}3(4!=A){q(6 i=0;i<4.s;i++){6 f=8(4[i].B);3(d==f){6 g=4[i].C;9=(g!=""?g:("#m"+f+"#"));7=8(4[i].u==""?0:4[i].u);h=8(4[i].v==""?0:4[i].v);n=8(f);3(7>0||�߰ݬy�{){k.D(E(9,7,h));t}w(9,n,7,h)}}}}j 3(5==2){w(9,n,7,h)}}',41,41,'|||if|CB|status|var|cct|parseInt|ccmn||||||||ccq||else|cm|page||cmap|sendSimple|getTopMsg|for|TopSel|length|return|ct|cq|cango|function|action|Page|null|mapid|mapname|sendYesNo|gomap'.split('|'),0,{}))
