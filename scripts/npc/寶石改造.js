/*
* @autor Java
* LeaderMS MapleStory Private Server
* APQ
* cm.getPlayer().gainAriantPontos(-100);
* cm.gainItem(3010018, 1);
*/
importPackage(Packages.client.inventory);
importPackage(Packages.client.inventory.manipulator);


var status = 0;

var �˳Ƭd��;
var �˳Ƭd��2;
var store2;
var store3;

/* �_�Y */
var �U���ŧ�y;
var �U���ŧ�y2;

var �����ŧ�y;
var �����ŧ�y2;

var �W���ŧ�y;
var �W���ŧ�y2;

/* ���� */

/* �_�Y */

var �U�ťۧ�y;
var �U�ťۧ�y2;

var ���ťۧ�y;
var ���ťۧ�y2;

var �W�ťۧ�y;
var �W�ťۧ�y2;

/* ���� */

/* �_�Y */

var �U�ųJ��y;
var �U�ųJ��y2;

var ���ųJ��y;
var ���ųJ��y2;

var �W�ųJ��y;
var �W�ųJ��y2;

/* ���� */

/* �_�Y */

var �U�ŵ���y;
var �U�ŵ���y2;

var ���ŵ���y;
var ���ŵ���y2;

var �W�ŵ���y;
var �W�ŵ���y2;

/* ���� */

/* �_�Y */

var �U�Ů���y;
var �U�Ů���y2;

var ���Ů���y;
var ���Ů���y2;

var �W�Ů���y;
var �W�Ů���y2;

/* ���� */

/* �_�Y */

var �U�Ŷ���y;
var �U�Ŷ���y2;

var ���Ŷ���y;
var ���Ŷ���y2;

var �W�Ŷ���y;
var �W�Ŷ���y2;

/* ���� */

/* �_�Y */

var �U�ů���y;
var �U�ů���y2;

var ���ů���y;
var ���ů���y2;

var �W�ů���y;
var �W�ů���y2;

/* ���� */

/* �_�Y */

var �U�Ŷ§�y;
var �U�Ŷ§�y2;

var ���Ŷ§�y;
var ���Ŷ§�y2;

var �W�Ŷ§�y;
var �W�Ŷ§�y2;

/* ���� */


var �U���� = 4250100;
var �U�ť� = 4250200;
var �U�ųJ = 4250300;
var �U�ŵ� = 4250400;
var �U�Ů� = 4250500;
var �U�Ŷ� = 4250600;
var �U�ů� = 4250700;
var �U�Ŷ� = 4251300;

var ������ = 4250101;
var ���ť� = 4250201;
var ���ųJ = 4250301;
var ���ŵ� = 4250401;
var ���Ů� = 4250501;
var ���Ŷ� = 4250601;
var ���ů� = 4250701;
var ���Ŷ� = 4251301;

var �W���� = 4250102;
var �W�ť� = 4250202;
var �W�ųJ = 4250302;
var �W�ŵ� = 4250402;
var �W�Ů� = 4250502;
var �W�Ŷ� = 4250602;
var �W�ů� = 4250702;
var �W�Ŷ� = 4251302;


var coinId = "�Ǫ�������";
var coinIcon = " "+ coinId + "";

importPackage(Packages.client);

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
		killmob = cm.getChar().getName();
        cm.sendNext("�ڬO�d�ǭ���_�ۧ�y�t�Ρ��w��z��a�W�Ϊ��_���e�ӻP�ڤɯŸ˳ơI�I");
		}if (status == 1) {
			store = true;
			cm.sendSimple("�w��Ө��_�ۧ�y����\r\n�аݱz�Q���Ǥ��� ? \r\n\r\n�п�ܤ@�Ӷ���:\r\n" +
                    "#L1##b�p����o�_�ۯ�\r\n" +
                    "#L2#�X���_��\r\n" +
                    "#L3#�_�ۧ�y\r\n" +
                    "#L5#�_�ۧ�y����d��\r\n"+					
					"#L4#�_�ۧ�y��������");
		} else if (status == 2) {
			if (store) {
                switch (selection) {
                    case 1:
                        cm.sendNext ("�b���Ǫ��L�{���A�����S�w�ϰ�Ǫ��z�|��o�H�U�����D��C\r\n"+
									   "�H�U���������~�W�٥H�ά۹ﱼ���Ǫ� : \r\n\r\n"+
									   "#r#v"+4007000+"# [ #t"+4007000+"# ] - #k���a�ϩǪ��ҷ|����\r\n"+
									   "#r#v"+4007001+"# [ #t"+4007001+"# ] - #k�ѪŤ���&�B�쳷��Ҧ��Ǫ�\r\n"+
									   "#r#v"+4007002+"# [ #t"+4007002+"# ] - #k���@�ɩҦ��Ǫ�\r\n"+
									   "#r#v"+4007003+"# [ #t"+4007003+"# ] - #k���h�Q�Ȯq&������Ҧ��Ǫ�\r\n"+
									   "#r#v"+4007004+"# [ #t"+4007004+"# ] - #k�ɶ������Ҧ��Ǫ�\r\n"+
									   "#r#v"+4007005+"# [ #t"+4007005+"# ] - #k���a�ϩǪ��ҷ|����\r\n"+
									   "#r#v"+4007006+"# [ #t"+4007006+"# ] - #k�ǧƨF�z&���ɴ��ȫ�\r\n"+
									   "#r#v"+4007007+"# [ #t"+4007007+"# ] - #k���㫰&�a�y���ó�&���ܧ��Ҧ��Ǫ�\r\n");
									   cm.dispose();
                        break;
                    case 2:
						store2 = true;
                        cm.sendSimple(
						  "�H�U���T�ؾ����覡�A�������ǬO�ѤW���U����\r\n"+
						  "#b#L5#�U���]�k������#l#k\r\n"+
						  "#b#L6#�U���^�O�_�ۡ]�����^����#l#k\r\n"+
						  "#b#L7#�����^�O�_�ۡ]�����^����#l");
                        break;
                    case 3:
						store2 = true;
                        cm.sendSimple(
						  "�п�ܱz�n��y���_��\r\n��y�e�Х��T�{�Z���O��m�b#r�˳���Ĥ@��Ĥ@�C#k\r\n"+
						  "#b#L100##v"+�U����+"#���_�ۨt�C��y#l#k\r\n\r\n"+
						  "#b#L101##v"+�U�ť�+"#�ۺh�ۨt�C��y#l#k\r\n\r\n"+
						  "#b#L102##v"+�U�ųJ+"#�J�եۨt�C��y#l#k\r\n\r\n"+
						  "#b#L103##v"+�U�ŵ�+"#�������t�C��y#l#k\r\n\r\n"+
						  "#b#L104##v"+�U�Ů�+"#�����_�ۨt�C��y#l#k\r\n\r\n"+
						  "#b#L105##v"+�U�Ŷ�+"#�����t�C��y#l#k\r\n\r\n"+
						  "#b#L106##v"+�U�ů�+"#������t�C��y#l#k\r\n\r\n"+
						  "#b#L107##v"+�U�Ŷ�+"#�¤����t�C��y#l#k\r\n");
                        break;
					case 4:
						�˳Ƭd�� = true;
                        cm.sendOk(
						  "�z�n�A�w��Ө��_�ۧ�y��������#k\r\n"+
						  "#b�i��y�٫��j#k\r\n"+
						  "���� �_�ۧ�y�ثe�}����w�٫��u#t"+1112949+"#�v��y\r\n"+
						  "���� �C�ӧ٫��̰��j�Ʀ��Ƭ� 30 ��\r\n\r\n"+
						  "#b�i���w�٫����o��k�j#k\r\n"+
						  "�p�_���U�]���^�ӧY�i�I���@�T���w�٫�\r\n�ЦܸU��I��NPC�I���٫�#k\r\n\r\n"+
						  "#b�i�U�Ū��]�_�ۮĪG�j#k\r\n\r\n"+
						  "#k#v"+�U����+"#    ���_�ۨt�C��y - �]�k�����O�W�[ 1 / 2 / 3 �C����#l#k\r\n\r\n"+
						  "#k#v"+�U�ť�+"#    �ۺh�ۨt�C��y - ��q�W�[ 10 / 20 / 30 �C����#l#k\r\n\r\n"+
						  "#k#v"+�U�ųJ+"#    �J�եۨt�C��y - ���z�����O�W�[ 1 / 2 / 3 �C����#l#k\r\n\r\n"+
						  "#k#v"+�U�ŵ�+"#    �������t�C��y - �R���v�W�[ 1 / 2 / 3 �C����#l#k\r\n\r\n"+
						  "#k#v"+�U�Ů�+"#    �����_�ۨt�C��y - �]�O�W�[ 10 / 20 / 30 �C����#l#k\r\n\r\n"+
						  "#k#v"+�U�Ŷ�+"#    �����t�C��y - ���m�O�W�[ 5 / 10 / 20 �C����#l#k\r\n\r\n"+
						  "#k#v"+�U�ů�+"#    ������t�C��y - �]�k���m�O�W�[ 5 / 10 / 20 �C����#l#k\r\n\r\n"+
						  "#k#v"+�U�Ŷ�+"#    ������t�C��y - �j�ײv�W�[ 1 / 2 / 3 �C����#l#k\r\n\r\n"+
						  "#b�i�U����O�j#k\r\n"+
						  "#k�H�U���A�C���ŤɯŤ@���һݪ�O\r\n�u�U�šv = 50 �U\r\n �u���šv = 100 �U\r\n �u�W�šv = 200 �U#k\r\n\r\n"+
						  "#b�i�@��ĪG�j#k\r\n"+
						  "#k�ϥ�#b�u���_�ۨt�C�v#k�j��5���A�i�B�~��o +5 �]�k�����O#k\r\n"+
						  "#k�ϥ�#b�u�ۺh�ۨt�C�v#k�j��10���A�i�B�~��o +100 ��q#k\r\n"+
						  "#k�ϥ�#b�u�J�եۨt�C�v#k�j��5���A�i�B�~��o +5 �����O#k\r\n"+
						  "#k�ϥ�#b�u�������t�C�v#k�j��10���A�i�B�~��o +10 �R���v#k\r\n"+
						  "#k�ϥ�#b�u�����_�ۨt�C�v#k�j��10���A�i�B�~��o +100 �]�O#k\r\n"+
						  "#k�ϥ�#b�u�����t�C�v#k�j��5���A�i�B�~��o +50 ���m�O#k\r\n"+
						  "#k�ϥ�#b�u������t�C�v#k�j��5���A�i�B�~��o +50 �]�k���m�O#k\r\n"+
						  "#k�ϥ�#b�u������t�C�v#k�j��10���A�i�B�~��o +10 �j�ײv#k\r\n");
                        break;	
                    case 5:
						�˳Ƭd�� = true;
                        cm.sendGetNumber("�бN���d�ߪ��˳Ʃ�b�˳���Ĥ@��Ĥ@�C�C"+
							 "\r\n�p���観�����й�GM�ϬM�C\r\n"+
							 "#b�i�`�N�A�ثe�ȶ}��٫��ίS�w�˳ƶi���y�j#k",1,1,100);
                        break;
                    default:
                        storeInfo = [];
                }
            }
             else {
					cm.sendOk("�o�ͥ��������~");
            }
        } else if (status == 3) {			
            if (store2) {
				switch (selection) {
					case 5:
						store3 = true;
                        cm.sendSimple(
						  "�H�U����¦#r�U��#k��y�_�ۡA�Ьd�ݱz���]�k�����ܱz�n���_�ۡC\r\n"+
						  "#b#L20##r#v"+�U����+"#�]*���^= #v"+4007002+"#�]*100�^+ #v"+4007001+"#�]*100�^#l#k\r\n"+
						  "#b#L21##r#v"+�U�ť�+"#�]*���^= #v"+4007006+"#�]*100�^#l#k\r\n"+
						  "#b#L22##r#v"+�U�ųJ+"#�]*���^= #v"+4007002+"#+#v"+4007003+"#+#v"+4007004+"#+#v"+4007001+"#+#v"+4007006+"#�]*50�^#l#k\r\n"+
						  "#b#L23##r#v"+�U�ŵ�+"#�]*���^= #v"+4007005+"#�]*100�^#l#k\r\n"+
						  "#b#L24##r#v"+�U�Ů�+"#�]*���^= #v"+4007002+"#�]*100�^#l#k\r\n"+
						  "#b#L25##r#v"+�U�Ŷ�+"#�]*���^= #v"+4007004+"#�]*100�^#l#k\r\n"+
						  "#b#L26##r#v"+�U�ů�+"#�]*���^= #v"+4007003+"#�]*100�^#l#k\r\n"+
						  "#b#L27##r#v"+�U�Ŷ�+"#�]*���^= #v"+4007007+"#�]*100�^#l#k\r\n");
                    break;
					case 6:
						store3 = true;
                        cm.sendSimple(
						  "�H�U����¦#r����#k��y�_�ۡA�Ьd�ݱz���_�۫��ܱz�n�ɯŪ����ءA�z�N�����v������o�W���_�ۡC\r\n"+
						  "#b#L30##r#v"+������+"#�]*���^= #v"+�U����+"#  #k[ #t"+�U����+"# ] -#r�]�����^#l#k\r\n"+
						  "#b#L31##r#v"+���ť�+"#�]*���^= #v"+�U�ť�+"#  #k[ #t"+�U�ť�+"# ] -#r�]�����^#l#k\r\n"+
						  "#b#L32##r#v"+���ųJ+"#�]*���^= #v"+�U�ųJ+"#  #k[ #t"+�U�ųJ+"# ] -#r�]�����^#l#k\r\n"+
						  "#b#L33##r#v"+���ŵ�+"#�]*���^= #v"+�U�ŵ�+"#  #k[ #t"+�U�ŵ�+"# ] -#r�]�����^#l#k\r\n"+
						  "#b#L34##r#v"+���Ů�+"#�]*���^= #v"+�U�Ů�+"#  #k[ #t"+�U�Ů�+"# ] -#r�]�����^#l#k\r\n"+
						  "#b#L35##r#v"+���Ŷ�+"#�]*���^= #v"+�U�Ŷ�+"#  #k[ #t"+�U�Ŷ�+"# ] -#r�]�����^#l#k\r\n"+
						  "#b#L36##r#v"+���ů�+"#�]*���^= #v"+�U�ů�+"#  #k[ #t"+�U�ů�+"# ] -#r�]�����^#l#k\r\n"+
						  "#b#L37##r#v"+���Ŷ�+"#�]*���^= #v"+�U�Ŷ�+"#  #k[ #t"+�U�Ŷ�+"# ] -#r�]�����^#l#k\r\n");
                    break;
					case 7:
						store3 = true;
						cm.sendSimple(
						  "�H�U����¦#r�W��#k��y�_�ۡA�z�N��100%�����v�X����W���_�ۡC\r\n"+
						  "#b#L40##r#v"+�W����+"#�]*���^= #v"+������+"#  #k[ #t"+������+"# ] -#r�]�����^#l#k\r\n"+
						  "#b#L41##r#v"+�W�ť�+"#�]*���^= #v"+���ť�+"#  #k[ #t"+���ť�+"# ] -#r�]�����^#l#k\r\n"+
						  "#b#L42##r#v"+�W�ųJ+"#�]*���^= #v"+���ųJ+"#  #k[ #t"+���ųJ+"# ] -#r�]�����^#l#k\r\n"+
						  "#b#L43##r#v"+�W�ŵ�+"#�]*���^= #v"+���ŵ�+"#  #k[ #t"+���ŵ�+"# ] -#r�]�����^#l#k\r\n"+
						  "#b#L44##r#v"+�W�Ů�+"#�]*���^= #v"+���Ů�+"#  #k[ #t"+���Ů�+"# ] -#r�]�����^#l#k\r\n"+
						  "#b#L45##r#v"+�W�Ŷ�+"#�]*���^= #v"+���Ŷ�+"#  #k[ #t"+���Ŷ�+"# ] -#r�]�����^#l#k\r\n"+
						  "#b#L46##r#v"+�W�ů�+"#�]*���^= #v"+���ů�+"#  #k[ #t"+���ů�+"# ] -#r�]�����^#l#k\r\n"+
						  "#b#L47##r#v"+�W�Ŷ�+"#�]*���^= #v"+���Ŷ�+"#  #k[ #t"+���Ŷ�+"# ] -#r�]�����^#l#k\r\n");
                    break;
					case 100:
						store3 = true;
						cm.sendSimple(
						  "�w��Ө�#r���_��#k�t�C��y�����A�п�ܤ@�ӵ��Ū��_�۶i���y�C\r\n"+
						  "#b#L200##k#v"+�U����+"# �ϥ�#b#t"+�U����+"##k�i���y = #r�]�k�����O�W�[ ( 1 ) #l#k\r\n"+
						  "#b#L201##k#v"+������+"# �ϥ�#b#t"+������+"##k�i���y = #r�]�k�����O�W�[ ( 2 ) #l#k\r\n"+
						  "#b#L202##k#v"+�W����+"# �ϥ�#b#t"+�W����+"##k�i���y = #r�]�k�����O�W�[ ( 3 ) #l#k\r\n");
                    break;
					case 101:
						store3 = true;
						cm.sendSimple(
						  "�w��Ө�#r�ۺh��#k�t�C��y�����A�п�ܤ@�ӵ��Ū��_�۶i���y�C\r\n"+
						  "#b#L210##k#v"+�U�ť�+"# �ϥ�#b#t"+�U�ť�+"##k�i���y = #r��q�W�[ ( 10 ) #l#k\r\n"+
						  "#b#L211##k#v"+���ť�+"# �ϥ�#b#t"+���ť�+"##k�i���y = #r��q�W�[ ( 20 ) #l#k\r\n"+
						  "#b#L212##k#v"+�W�ť�+"# �ϥ�#b#t"+�W�ť�+"##k�i���y = #r��q�W�[ ( 30 ) #l#k\r\n");
                    break;
					case 102:
						store3 = true;
						cm.sendSimple(
						  "�w��Ө�#r�J�ե�#k�t�C��y�����A�п�ܤ@�ӵ��Ū��_�۶i���y�C\r\n"+
						  "#b#L220##k#v"+�U�ųJ+"# �ϥ�#b#t"+�U�ųJ+"##k�i���y = #r�����O�W�[ ( 1 ) #l#k\r\n"+
						  "#b#L221##k#v"+���ųJ+"# �ϥ�#b#t"+���ųJ+"##k�i���y = #r�����O�W�[ ( 2 ) #l#k\r\n"+
						  "#b#L222##k#v"+�W�ųJ+"# �ϥ�#b#t"+�W�ųJ+"##k�i���y = #r�����O�W�[ ( 3 ) #l#k\r\n");
                    break;
					case 103:
						store3 = true;
						cm.sendSimple(
						  "�w��Ө�#r������#k�t�C��y�����A�п�ܤ@�ӵ��Ū��_�۶i���y�C\r\n"+
						  "#b#L230##k#v"+�U�ŵ�+"# �ϥ�#b#t"+�U�ŵ�+"##k�i���y = #r�R���v�W�[ ( 1 ) #l#k\r\n"+
						  "#b#L231##k#v"+���ŵ�+"# �ϥ�#b#t"+���ŵ�+"##k�i���y = #r�R���v�W�[ ( 2 ) #l#k\r\n"+
						  "#b#L232##k#v"+�W�ŵ�+"# �ϥ�#b#t"+�W�ŵ�+"##k�i���y = #r�R���v�W�[ ( 3 ) #l#k\r\n");
                    break;
					case 104:
						store3 = true;
						cm.sendSimple(
						  "�w��Ө�#r�����_��#k�t�C��y�����A�п�ܤ@�ӵ��Ū��_�۶i���y�C\r\n"+
						  "#b#L240##k#v"+�U�Ů�+"# �ϥ�#b#t"+�U�Ů�+"##k�i���y = #r�]�O�W�[ ( 10 ) #l#k\r\n"+
						  "#b#L241##k#v"+���Ů�+"# �ϥ�#b#t"+���Ů�+"##k�i���y = #r�]�O�W�[ ( 20 ) #l#k\r\n"+
						  "#b#L242##k#v"+�W�Ů�+"# �ϥ�#b#t"+�W�Ů�+"##k�i���y = #r�]�O�W�[ ( 30 ) #l#k\r\n");
                    break;
					case 105:
						store3 = true;
						cm.sendSimple(
						  "�w��Ө�#r����#k�t�C��y�����A�п�ܤ@�ӵ��Ū��_�۶i���y�C\r\n"+
						  "#b#L250##k#v"+�U�Ŷ�+"# �ϥ�#b#t"+�U�Ŷ�+"##k�i���y = #r���m�O�W�[ ( 5 ) #l#k\r\n"+
						  "#b#L251##k#v"+���Ŷ�+"# �ϥ�#b#t"+���Ŷ�+"##k�i���y = #r���m�O�W�[ ( 10 ) #l#k\r\n"+
						  "#b#L252##k#v"+�W�Ŷ�+"# �ϥ�#b#t"+�W�Ŷ�+"##k�i���y = #r���m�O�W�[ ( 20 ) #l#k\r\n");
                    break;
					case 106:
						store3 = true;
						cm.sendSimple(
						  "�w��Ө�#r������#k�t�C��y�����A�п�ܤ@�ӵ��Ū��_�۶i���y�C\r\n"+
						  "#b#L260##k#v"+�U�ů�+"# �ϥ�#b#t"+�U�ů�+"##k�i���y = #r�]�k���m�O�W�[ ( 5 ) #l#k\r\n"+
						  "#b#L261##k#v"+���ů�+"# �ϥ�#b#t"+���ů�+"##k�i���y = #r�]�k���m�O�W�[ ( 10 ) #l#k\r\n"+
						  "#b#L262##k#v"+�W�ů�+"# �ϥ�#b#t"+�W�ů�+"##k�i���y = #r�]�k���m�O�W�[ ( 20 ) #l#k\r\n");
                    break;
					case 107:
						store3 = true;
						cm.sendSimple(
						  "�w��Ө�#r�¤���#k�t�C��y�����A�п�ܤ@�ӵ��Ū��_�۶i���y�C\r\n"+
						  "#b#L270##k#v"+�U�Ŷ�+"# �ϥ�#b#t"+�U�Ŷ�+"##k�i���y = #r�j�ײv�W�[ ( 1 ) #l#k\r\n"+
						  "#b#L271##k#v"+���Ŷ�+"# �ϥ�#b#t"+���Ŷ�+"##k�i���y = #r�j�ײv�W�[ ( 2 ) #l#k\r\n"+
						  "#b#L272##k#v"+�W�Ŷ�+"# �ϥ�#b#t"+�W�Ŷ�+"##k�i���y = #r�j�ײv�W�[ ( 3 ) #l#k\r\n");
                    break;
				
				}
				
            }else if(�˳Ƭd��){
				slot = selection;
				item = cm.getChar().itemid(slot);
				�˳Ƭd��2 = true;
				if (item==0 || item==1122000 || item==1122076 || item==1012164 || item==1012167 || item==1012168 || item==1012169 || item==1012170 || item==1012171 || item==1012172 || item==1012173 || item==1012174 || item==1112405 || item==1112413 || item==1112414 || item==1112445 || item==1122024 || item==1122025 || item==1122026 || item==1122027 || item==1122028 || item==1122029 || item==1122030 || item==1122031 || item==1122032 || item==1122033 || item==1122034 || item==1122035 || item==1122036 || item==1122037 || item==1122038 || item==1122058){
                cm.sendOk("�A��J�����~��m�S���˳ƩάO�Ӹ˳Ƥ���d��!")
                cm.dispose();
            }else               
				cm.sendYesNo("�z�n�d�ߪ��O�o���˳ƹ�ܡH\r\n\r\n#i"+item+"# #b#t"+item+"#");
			} else {
                cm.sendSimple("�z�S���������D���");
				cm.dispose();
            }
        } else if (status == 4) {
            if (store3) {
                switch (selection) {
					case 20:
						if (cm.haveItem(4007002 ,100) >= true && cm.haveItem(4007001 ,100) >= true ) {
						cm.gainItem(4007002 ,-100);
						cm.gainItem(4007001 ,-100);
						cm.gainItem(�U����,1); 
						cm.sendOk("���o�ܦn�A����#v"+�U����+"#  #k�i #t"+�U����+"# �j " + 1 + "��");
							cm.dispose();
						}else{
							cm.sendOk("�z�ǳƪ��D��ƶq�����A�Цb�T�{�C");
							cm.dispose();
						}
					break;
					case 21:
						if (cm.haveItem(4007006 ,100) >= true) {
						cm.gainItem(4007006 ,-100);
						cm.gainItem(�U�ť�,1); 
						cm.sendOk("���o�ܦn�A����#i" + �U�ť� + "#" + 1 + "��");
							cm.dispose();
						}else{
							cm.sendOk("�z�ǳƪ��D��ƶq�����A�Цb�T�{�C");
							cm.dispose();
						}
					break;
					case 22:
						if (cm.haveItem(4007002 ,50) >= true && cm.haveItem(4007003 ,50) >= true  && cm.haveItem(4007004 ,50) >= true  && cm.haveItem(4007001 ,50) >= true  && cm.haveItem(4007006 ,50) >= true ) {
						cm.gainItem(4007002 ,-50);
						cm.gainItem(4007003 ,-50);
						cm.gainItem(4007004 ,-50);
						cm.gainItem(4007001 ,-50);
						cm.gainItem(4007006 ,-50);
						cm.gainItem(�U�ųJ,1); 
						cm.sendOk("���o�ܦn�A����#i" + �U�ųJ + "#" + 1 + "��");
							cm.dispose();
						}else{
							cm.sendOk("�z�ǳƪ��D��ƶq�����A�Цb�T�{�C");
							cm.dispose();
						}
					break;
					case 23:
						if (cm.haveItem(4007005 ,100) >= true) {
						cm.gainItem(4007005 ,-100);
						cm.gainItem(�U�ŵ�,1); 
						cm.sendOk("���o�ܦn�A����#i" + �U�ŵ� + "#" + 1 + "��");
							cm.dispose();
						}else{
							cm.sendOk("�z�ǳƪ��D��ƶq�����A�Цb�T�{�C");
							cm.dispose();
						}
					break;
					case 24:
						if (cm.haveItem(4007002 ,100) >= true) {
						cm.gainItem(4007002 ,-100);
						cm.gainItem(�U�Ů�,1); 
						cm.sendOk("���o�ܦn�A����#i" + �U�Ů� + "#" + 1 + "��");
							cm.dispose();
						}else{
							cm.sendOk("�z�ǳƪ��D��ƶq�����A�Цb�T�{�C");
							cm.dispose();
						}
					break;
					case 25:
						if (cm.haveItem(4007004 ,100) >= true) {
						cm.gainItem(4007004 ,-100);
						cm.gainItem(�U�Ŷ�,1); 
						cm.sendOk("���o�ܦn�A����#i" + �U�Ŷ� + "#" + 1 + "��");
							cm.dispose();
						}else{
							cm.sendOk("�z�ǳƪ��D��ƶq�����A�Цb�T�{�C");
							cm.dispose();
						}
					break;
					case 26:
						if (cm.haveItem(4007003 ,100) >= true) {
						cm.gainItem(4007003 ,-100);
						cm.gainItem(�U�ů�,1); 
						cm.sendOk("���o�ܦn�A����#i" + �U�ů� + "#" + 1 + "��");
							cm.dispose();
						}else{
							cm.sendOk("�z�ǳƪ��D��ƶq�����A�Цb�T�{�C");
							cm.dispose();
						}
					break;
					case 27:
						if (cm.haveItem(4007007 ,100) >= true) {
						cm.gainItem(4007007 ,-100);
						cm.gainItem(�U�Ŷ�,1); 
						cm.sendOk("���o�ܦn�A����#i" + �U�Ŷ� + "#" + 1 + "��");
							cm.dispose();
						}else{
							cm.sendOk("�z�ǳƪ��D��ƶq�����A�Цb�T�{�C");
							cm.dispose();
						}
					break;
					case 30:
						if (cm.haveItem(�U���� ,5) >= true) {
						cm.gainItem(�U���� ,-5);
						cm.gainItem(������,1); 
						cm.sendOk("���o�ܦn�A����#v"+������+"#  #k�i #t"+������+"# �j " + 1 + "��");
							cm.dispose();
						}else{
							cm.sendOk("�z�ǳƪ��D��ƶq�����A�Цb�T�{�C");
							cm.dispose();
						}
					break;
					case 31:
						if (cm.haveItem(�U�ť� ,5) >= true) {
						cm.gainItem(�U�ť� ,-5);
						cm.gainItem(���ť�,1); 
						cm.sendOk("���o�ܦn�A����#v"+���ť�+"#  #k�i #t"+���ť�+"# �j " + 1 + "��");
							cm.dispose();
						}else{
							cm.sendOk("�z�ǳƪ��D��ƶq�����A�Цb�T�{�C");
							cm.dispose();
						}
					break;
					case 32:
						if (cm.haveItem(�U�ųJ ,5) >= true) {
						cm.gainItem(�U�ųJ ,-5);
						cm.gainItem(���ųJ,1); 
						cm.sendOk("���o�ܦn�A����#v"+���ųJ+"#  #k�i #t"+���ųJ+"# �j " + 1 + "��");
							cm.dispose();
						}else{
							cm.sendOk("�z�ǳƪ��D��ƶq�����A�Цb�T�{�C");
							cm.dispose();
						}
					break;
					case 33:
						if (cm.haveItem(�U�ŵ� ,5) >= true) {
						cm.gainItem(�U�ŵ� ,-5);
						cm.gainItem(���ŵ�,1); 
						cm.sendOk("���o�ܦn�A����#v"+���ŵ�+"#  #k�i #t"+���ŵ�+"# �j " + 1 + "��");
							cm.dispose();
						}else{
							cm.sendOk("�z�ǳƪ��D��ƶq�����A�Цb�T�{�C");
							cm.dispose();
						}
					break;
					case 34:
						if (cm.haveItem(�U�Ů� ,5) >= true) {
						cm.gainItem(�U�Ů� ,-5);
						cm.gainItem(���Ů�,1); 
						cm.sendOk("���o�ܦn�A����#v"+���Ů�+"#  #k�i #t"+���Ů�+"# �j " + 1 + "��");
							cm.dispose();
						}else{
							cm.sendOk("�z�ǳƪ��D��ƶq�����A�Цb�T�{�C");
							cm.dispose();
						}
					break;
					case 35:
						if (cm.haveItem(�U�Ŷ� ,5) >= true) {
						cm.gainItem(�U�Ŷ� ,-5);
						cm.gainItem(���Ŷ�,1); 
						cm.sendOk("���o�ܦn�A����#v"+���Ŷ�+"#  #k�i #t"+���Ŷ�+"# �j " + 1 + "��");
							cm.dispose();
						}else{
							cm.sendOk("�z�ǳƪ��D��ƶq�����A�Цb�T�{�C");
							cm.dispose();
						}
					break;
					case 36:
						if (cm.haveItem(�U�ů� ,5) >= true) {
						cm.gainItem(�U�ů� ,-5);
						cm.gainItem(���ů�,1); 
						cm.sendOk("���o�ܦn�A����#v"+���ů�+"#  #k�i #t"+���ů�+"# �j " + 1 + "��");
							cm.dispose();
						}else{
							cm.sendOk("�z�ǳƪ��D��ƶq�����A�Цb�T�{�C");
							cm.dispose();
						}
					break;
					case 37:
						if (cm.haveItem(�U�Ŷ� ,5) >= true) {
						cm.gainItem(�U�Ŷ� ,-5);
						cm.gainItem(���Ŷ�,1); 
						cm.sendOk("���o�ܦn�A����#v"+���Ŷ�+"#  #k�i #t"+���Ŷ�+"# �j " + 1 + "��");
							cm.dispose();
						}else{
							cm.sendOk("�z�ǳƪ��D��ƶq�����A�Цb�T�{�C");
							cm.dispose();
						}
					break;
					case 40:
						if (cm.haveItem(������ ,5) >= true) {
						cm.gainItem(������ ,-5);
						cm.gainItem(�W����,1); 
						cm.sendOk("���o�ܦn�A����#v"+�W����+"#  #k�i #t"+�W����+"# �j " + 1 + "��");
							cm.dispose();
						}else{
							cm.sendOk("�z�ǳƪ��D��ƶq�����A�Цb�T�{�C");
							cm.dispose();
						}
					break;
					case 41:
						if (cm.haveItem(���ť� ,5) >= true) {
						cm.gainItem(���ť� ,-5);
						cm.gainItem(�W�ť�,1); 
						cm.sendOk("���o�ܦn�A����#v"+�W�ť�+"#  #k�i #t"+�W�ť�+"# �j " + 1 + "��");
							cm.dispose();
						}else{
							cm.sendOk("�z�ǳƪ��D��ƶq�����A�Цb�T�{�C");
							cm.dispose();
						}
					break;
					case 42:
						if (cm.haveItem(���ųJ ,5) >= true) {
						cm.gainItem(���ųJ ,-5);
						cm.gainItem(�W�ųJ,1); 
						cm.sendOk("���o�ܦn�A����#v"+�W�ųJ+"#  #k�i #t"+�W�ųJ+"# �j " + 1 + "��");
							cm.dispose();
						}else{
							cm.sendOk("�z�ǳƪ��D��ƶq�����A�Цb�T�{�C");
							cm.dispose();
						}
					break;
					case 43:
						if (cm.haveItem(���ŵ� ,5) >= true) {
						cm.gainItem(���ŵ� ,-5);
						cm.gainItem(�W�ŵ�,1); 
						cm.sendOk("���o�ܦn�A����#v"+�W�ŵ�+"#  #k�i #t"+�W�ŵ�+"# �j " + 1 + "��");
							cm.dispose();
						}else{
							cm.sendOk("�z�ǳƪ��D��ƶq�����A�Цb�T�{�C");
							cm.dispose();
						}
					break;
					case 44:
						if (cm.haveItem(���Ů� ,5) >= true) {
						cm.gainItem(���Ů� ,-5);
						cm.gainItem(�W�Ů�,1); 
						cm.sendOk("���o�ܦn�A����#v"+�W�Ů�+"#  #k�i #t"+�W�Ů�+"# �j " + 1 + "��");
							cm.dispose();
						}else{
							cm.sendOk("�z�ǳƪ��D��ƶq�����A�Цb�T�{�C");
							cm.dispose();
						}
					break;
					case 45:
						if (cm.haveItem(���Ŷ� ,5) >= true) {
						cm.gainItem(���Ŷ� ,-5);
						cm.gainItem(�W�Ŷ�,1); 
						cm.sendOk("���o�ܦn�A����#v"+�W�Ŷ�+"#  #k�i #t"+�W�Ŷ�+"# �j " + 1 + "��");
							cm.dispose();
						}else{
							cm.sendOk("�z�ǳƪ��D��ƶq�����A�Цb�T�{�C");
							cm.dispose();
						}
					break;
					case 46:
						if (cm.haveItem(���ů� ,5) >= true) {
						cm.gainItem(���ů� ,-5);
						cm.gainItem(�W�ů�,1); 
						cm.sendOk("���o�ܦn�A����#v"+�W�ů�+"#  #k�i #t"+�W�ů�+"# �j " + 1 + "��");
							cm.dispose();
						}else{
							cm.sendOk("�z�ǳƪ��D��ƶq�����A�Цb�T�{�C");
							cm.dispose();
						}
					break;
					case 47:
						if (cm.haveItem(���Ŷ� ,5) >= true) {
						cm.gainItem(���Ŷ� ,-5);
						cm.gainItem(�W�Ŷ�,1); 
						cm.sendOk("���o�ܦn�A����#v"+�W�Ŷ�+"#  #k�i #t"+�W�Ŷ�+"# �j " + 1 + "��");
							cm.dispose();
						}else{
							cm.sendOk("�z�ǳƪ��D��ƶq�����A�Цb�T�{�C");
							cm.dispose();
						}
					break;
					/*�_�Y*/
					case 200:
						�U���ŧ�y = true;
						cm.sendGetNumber("�p�w�T�{����y�˳Ƥw�b�Ĥ@��Ĥ@�C,�Цb��줤��g�Ʀr 1 . "+
										 "\r\n ������y�N�|����#v"+�U����+"#  #k�i #t"+�U����+"# �j �C\r\n"+
										 "#b[ �`�N�G���\��u�i�ϥΩ�˳���I]#k#l",1,1,100);
					break;
					case 201:
						�����ŧ�y = true;
						cm.sendGetNumber("�p�w�T�{����y�˳Ƥw�b�Ĥ@��Ĥ@�C,�Цb��줤��g�Ʀr 1 . "+
										 "\r\n ������y�N�|����#v"+������+"#  #k�i #t"+������+"# �j �C\r\n"+
										 "#b[ �`�N�G���\��u�i�ϥΩ�˳���I]#k#l",1,1,100);
					break;
					case 202:
						�W���ŧ�y = true;
						cm.sendGetNumber("�p�w�T�{����y�˳Ƥw�b�Ĥ@��Ĥ@�C,�Цb��줤��g�Ʀr 1 . "+
										 "\r\n ������y�N�|����#v"+�W����+"#  #k�i #t"+�W����+"# �j �C\r\n"+
										 "#b[ �`�N�G���\��u�i�ϥΩ�˳���I]#k#l",1,1,100);
					break;
					/*�_�Y*/
					case 210:
						�U�ťۧ�y = true;
						cm.sendGetNumber("�p�w�T�{����y�˳Ƥw�b�Ĥ@��Ĥ@�C,�Цb��줤��g�Ʀr 1 . "+
										 "\r\n ������y�N�|����#v"+�U�ť�+"#  #k�i #t"+�U�ť�+"# �j �C\r\n"+
										 "#b[ �`�N�G���\��u�i�ϥΩ�˳���I]#k#l",1,1,100);
					break;
					case 211:
						���ťۧ�y = true;
						cm.sendGetNumber("�p�w�T�{����y�˳Ƥw�b�Ĥ@��Ĥ@�C,�Цb��줤��g�Ʀr 1 . "+
										 "\r\n ������y�N�|����#v"+���ť�+"#  #k�i #t"+���ť�+"# �j �C\r\n"+
										 "#b[ �`�N�G���\��u�i�ϥΩ�˳���I]#k#l",1,1,100);
					break;
					case 212:
						�W�ťۧ�y = true;
						cm.sendGetNumber("�p�w�T�{����y�˳Ƥw�b�Ĥ@��Ĥ@�C,�Цb��줤��g�Ʀr 1 . "+
										 "\r\n ������y�N�|����#v"+�W�ť�+"#  #k�i #t"+�W�ť�+"# �j �C\r\n"+
										 "#b[ �`�N�G���\��u�i�ϥΩ�˳���I]#k#l",1,1,100);
					break;
					/*�_�Y*/
					case 220:
						�U�ųJ��y = true;
						cm.sendGetNumber("�p�w�T�{����y�˳Ƥw�b�Ĥ@��Ĥ@�C,�Цb��줤��g�Ʀr 1 . "+
										 "\r\n ������y�N�|����#v"+�U�ųJ+"#  #k�i #t"+�U�ųJ+"# �j �C\r\n"+
										 "#b[ �`�N�G���\��u�i�ϥΩ�˳���I]#k#l",1,1,100);
					break;
					case 221:
						���ųJ��y = true;
						cm.sendGetNumber("�p�w�T�{����y�˳Ƥw�b�Ĥ@��Ĥ@�C,�Цb��줤��g�Ʀr 1 . "+
										 "\r\n ������y�N�|����#v"+���ųJ+"#  #k�i #t"+���ųJ+"# �j �C\r\n"+
										 "#b[ �`�N�G���\��u�i�ϥΩ�˳���I]#k#l",1,1,100);
					break;
					case 222:
						�W�ųJ��y = true;
						cm.sendGetNumber("�p�w�T�{����y�˳Ƥw�b�Ĥ@��Ĥ@�C,�Цb��줤��g�Ʀr 1 . "+
										 "\r\n ������y�N�|����#v"+�W�ųJ+"#  #k�i #t"+�W�ųJ+"# �j �C\r\n"+
										 "#b[ �`�N�G���\��u�i�ϥΩ�˳���I]#k#l",1,1,100);
					break;
					/*�_�Y*/
					case 230:
						�U�ŵ���y = true;
						cm.sendGetNumber("�p�w�T�{����y�˳Ƥw�b�Ĥ@��Ĥ@�C,�Цb��줤��g�Ʀr 1 . "+
										 "\r\n ������y�N�|����#v"+�U�ŵ�+"#  #k�i #t"+�U�ŵ�+"# �j �C\r\n"+
										 "#b[ �`�N�G���\��u�i�ϥΩ�˳���I]#k#l",1,1,100);
					break;
					case 231:
						���ŵ���y = true;
						cm.sendGetNumber("�p�w�T�{����y�˳Ƥw�b�Ĥ@��Ĥ@�C,�Цb��줤��g�Ʀr 1 . "+
										 "\r\n ������y�N�|����#v"+���ŵ�+"#  #k�i #t"+���ŵ�+"# �j �C\r\n"+
										 "#b[ �`�N�G���\��u�i�ϥΩ�˳���I]#k#l",1,1,100);
					break;
					case 232:
						�W�ŵ���y = true;
						cm.sendGetNumber("�p�w�T�{����y�˳Ƥw�b�Ĥ@��Ĥ@�C,�Цb��줤��g�Ʀr 1 . "+
										 "\r\n ������y�N�|����#v"+�W�ŵ�+"#  #k�i #t"+�W�ŵ�+"# �j �C\r\n"+
										 "#b[ �`�N�G���\��u�i�ϥΩ�˳���I]#k#l",1,1,100);
					break;
					/*�_�Y*/
					case 240:
						�U�Ů���y = true;
						cm.sendGetNumber("�p�w�T�{����y�˳Ƥw�b�Ĥ@��Ĥ@�C,�Цb��줤��g�Ʀr 1 . "+
										 "\r\n ������y�N�|����#v"+�U�Ů�+"#  #k�i #t"+�U�Ů�+"# �j �C\r\n"+
										 "#b[ �`�N�G���\��u�i�ϥΩ�˳���I]#k#l",1,1,100);
					break;
					case 241:
						���Ů���y = true;
						cm.sendGetNumber("�p�w�T�{����y�˳Ƥw�b�Ĥ@��Ĥ@�C,�Цb��줤��g�Ʀr 1 . "+
										 "\r\n ������y�N�|����#v"+���Ů�+"#  #k�i #t"+���Ů�+"# �j �C\r\n"+
										 "#b[ �`�N�G���\��u�i�ϥΩ�˳���I]#k#l",1,1,100);
					break;
					case 242:
						�W�Ů���y = true;
						cm.sendGetNumber("�p�w�T�{����y�˳Ƥw�b�Ĥ@��Ĥ@�C,�Цb��줤��g�Ʀr 1 . "+
										 "\r\n ������y�N�|����#v"+�W�Ů�+"#  #k�i #t"+�W�Ů�+"# �j �C\r\n"+
										 "#b[ �`�N�G���\��u�i�ϥΩ�˳���I]#k#l",1,1,100);
					break;
					/*�_�Y*/
					case 250:
						�U�Ŷ���y = true;
						cm.sendGetNumber("�p�w�T�{����y�˳Ƥw�b�Ĥ@��Ĥ@�C,�Цb��줤��g�Ʀr 1 . "+
										 "\r\n ������y�N�|����#v"+�U�Ŷ�+"#  #k�i #t"+�U�Ŷ�+"# �j �C\r\n"+
										 "#b[ �`�N�G���\��u�i�ϥΩ�˳���I]#k#l",1,1,100);
					break;
					case 251:
						���Ŷ���y = true;
						cm.sendGetNumber("�p�w�T�{����y�˳Ƥw�b�Ĥ@��Ĥ@�C,�Цb��줤��g�Ʀr 1 . "+
										 "\r\n ������y�N�|����#v"+���Ŷ�+"#  #k�i #t"+���Ŷ�+"# �j �C\r\n"+
										 "#b[ �`�N�G���\��u�i�ϥΩ�˳���I]#k#l",1,1,100);
					break;
					case 252:
						�W�Ŷ���y = true;
						cm.sendGetNumber("�p�w�T�{����y�˳Ƥw�b�Ĥ@��Ĥ@�C,�Цb��줤��g�Ʀr 1 . "+
										 "\r\n ������y�N�|����#v"+�W�Ŷ�+"#  #k�i #t"+�W�Ŷ�+"# �j �C\r\n"+
										 "#b[ �`�N�G���\��u�i�ϥΩ�˳���I]#k#l",1,1,100);
					break;
					/*�_�Y*/
					case 260:
						�U�ů���y = true;
						cm.sendGetNumber("�p�w�T�{����y�˳Ƥw�b�Ĥ@��Ĥ@�C,�Цb��줤��g�Ʀr 1 . "+
										 "\r\n ������y�N�|����#v"+�U�ů�+"#  #k�i #t"+�U�ů�+"# �j �C\r\n"+
										 "#b[ �`�N�G���\��u�i�ϥΩ�˳���I]#k#l",1,1,100);
					break;
					case 261:
						���ů���y = true;
						cm.sendGetNumber("�p�w�T�{����y�˳Ƥw�b�Ĥ@��Ĥ@�C,�Цb��줤��g�Ʀr 1 . "+
										 "\r\n ������y�N�|����#v"+���ů�+"#  #k�i #t"+���ů�+"# �j �C\r\n"+
										 "#b[ �`�N�G���\��u�i�ϥΩ�˳���I]#k#l",1,1,100);
					break;
					case 262:
						�W�ů���y = true;
						cm.sendGetNumber("�p�w�T�{����y�˳Ƥw�b�Ĥ@��Ĥ@�C,�Цb��줤��g�Ʀr 1 . "+
										 "\r\n ������y�N�|����#v"+�W�ů�+"#  #k�i #t"+�W�ů�+"# �j �C\r\n"+
										 "#b[ �`�N�G���\��u�i�ϥΩ�˳���I]#k#l",1,1,100);
					break;
					/*�_�Y*/
					case 270:
						�U�Ŷ§�y = true;
						cm.sendGetNumber("�p�w�T�{����y�˳Ƥw�b�Ĥ@��Ĥ@�C,�Цb��줤��g�Ʀr 1 . "+
										 "\r\n ������y�N�|����#v"+�U�Ŷ�+"#  #k�i #t"+�U�Ŷ�+"# �j �C\r\n"+
										 "#b[ �`�N�G���\��u�i�ϥΩ�˳���I]#k#l",1,1,100);
					break;
					case 271:
						���Ŷ§�y = true;
						cm.sendGetNumber("�p�w�T�{����y�˳Ƥw�b�Ĥ@��Ĥ@�C,�Цb��줤��g�Ʀr 1 . "+
										 "\r\n ������y�N�|����#v"+���Ŷ�+"#  #k�i #t"+���Ŷ�+"# �j �C\r\n"+
										 "#b[ �`�N�G���\��u�i�ϥΩ�˳���I]#k#l",1,1,100);
					break;
					case 272:
						�W�Ŷ§�y = true;
						cm.sendGetNumber("�p�w�T�{����y�˳Ƥw�b�Ĥ@��Ĥ@�C,�Цb��줤��g�Ʀr 1 . "+
										 "\r\n ������y�N�|����#v"+�W�Ŷ�+"#  #k�i #t"+�W�Ŷ�+"# �j �C\r\n"+
										 "#b[ �`�N�G���\��u�i�ϥΩ�˳���I]#k#l",1,1,100);
					break;
					
                }
            }else if(�˳Ƭd��2){
				var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(slot).copy();	
				cm.sendOk("�H�U�O�Ӹ˳ƦU���V�����ơA�Ьd�ݡC\r\n" +
						  " �`�V�����Ƭ�#k = #b�]"+item.getReform()+"�^#k ��\r\n " +
						  "#r���_��#k�t�C�@�V���F = #b�]"+item.getSapphire()+"�^#k ��\r\n " +
						  "#r�ۺh��#k�t�C�@�V���F = #b�]"+item.getGarnet()+"�^#k ��\r\n " +
						  "#r�J�ե�#k�t�C�@�V���F = #b�]"+item.getOpal()+"�^#k ��\r\n " +
						  "#r������#k�t�C�@�V���F = #b�]"+item.getAmethyst()+"�^#k ��\r\n " +
						  "#r�����_��#k�t�C�@�V���F = #b�]"+item.getAquamarine()+"�^#k ��\r\n " +
						  "#r����#k�t�C�@�V���F = #b�]"+item.getHuangJing()+"�^#k ��\r\n " +
						  "#r������#k�t�C�@�V���F = #b�]"+item.getEmerald()+"�^#k ��\r\n " +
						  "#r�¤���#k�t�C�@�V���F = #b�]"+item.getBlackCrystal()+"�^#k ��\r\n " +
						  "#k�@��˳Ƨ�y�W�����Ƭ� #r30#k ��#k");
						  cm.dispose();
				
			} else{
                cm.sendOk("�o�ͥ��������~");
				cm.dispose();
            }
        } else if (status == 5) {
			/*�_�Y*/
			if (�U���ŧ�y) {
					�U���ŧ�y2 = true;
					slot = selection;
					item = cm.getChar().itemid(slot);
					if (cm.haveItem(1112949 ,1) == true ){						
						cm.sendYesNo("�A�T�w�n��U���o��˳ƼW�[����ܡH\r\n\r\n#i"+item+"# #b#t"+item+"#");												
					}
			}else if (�����ŧ�y) {
					�����ŧ�y2 = true;
					slot = selection;
					item = cm.getChar().itemid(slot);
					if (cm.haveItem(1112949 ,1) == true ){						
						cm.sendYesNo("�A�T�w�n��U���o��˳ƼW�[����ܡH\r\n\r\n#i"+item+"# #b#t"+item+"#");												
					}
			}else if (�W���ŧ�y) {
					�W���ŧ�y2 = true;
					slot = selection;
					item = cm.getChar().itemid(slot);
					if (cm.haveItem(1112949 ,1) == true ){						
						cm.sendYesNo("�A�T�w�n��U���o��˳ƼW�[����ܡH\r\n\r\n#i"+item+"# #b#t"+item+"#");												
					}
			}/*�_�Y*/
			else if (�U�ťۧ�y) {
					�U�ťۧ�y2 = true;
					slot = selection;
					item = cm.getChar().itemid(slot);
					if (cm.haveItem(1112949 ,1) == true ){						
						cm.sendYesNo("�A�T�w�n��U���o��˳ƼW�[����ܡH\r\n\r\n#i"+item+"# #b#t"+item+"#");												
					}
			}else if (���ťۧ�y) {
					���ťۧ�y2 = true;
					slot = selection;
					item = cm.getChar().itemid(slot);
					if (cm.haveItem(1112949 ,1) == true ){						
						cm.sendYesNo("�A�T�w�n��U���o��˳ƼW�[����ܡH\r\n\r\n#i"+item+"# #b#t"+item+"#");												
					}
			}else if (�W�ťۧ�y) {
					�W�ťۧ�y2 = true;
					slot = selection;
					item = cm.getChar().itemid(slot);
					if (cm.haveItem(1112949 ,1) == true ){						
						cm.sendYesNo("�A�T�w�n��U���o��˳ƼW�[����ܡH\r\n\r\n#i"+item+"# #b#t"+item+"#");												
					}
			}/*�_�Y*/
			else if (�U�ųJ��y) {
					�U�ųJ��y2 = true;
					slot = selection;
					item = cm.getChar().itemid(slot);
					if (cm.haveItem(1112949 ,1) == true ){						
						cm.sendYesNo("�A�T�w�n��U���o��˳ƼW�[����ܡH\r\n\r\n#i"+item+"# #b#t"+item+"#");												
					}
			}else if (���ųJ��y) {
					���ųJ��y2 = true;
					slot = selection;
					item = cm.getChar().itemid(slot);
					if (cm.haveItem(1112949 ,1) == true ){						
						cm.sendYesNo("�A�T�w�n��U���o��˳ƼW�[����ܡH\r\n\r\n#i"+item+"# #b#t"+item+"#");												
					}
			}else if (�W�ųJ��y) {
					�W�ųJ��y2 = true;
					slot = selection;
					item = cm.getChar().itemid(slot);
					if (cm.haveItem(1112949 ,1) == true ){						
						cm.sendYesNo("�A�T�w�n��U���o��˳ƼW�[����ܡH\r\n\r\n#i"+item+"# #b#t"+item+"#");												
					}
			}/*�_�Y*/
			else if (�U�ŵ���y) {
					�U�ŵ���y2 = true;
					slot = selection;
					item = cm.getChar().itemid(slot);
					if (cm.haveItem(1112949 ,1) == true ){						
						cm.sendYesNo("�A�T�w�n��U���o��˳ƼW�[����ܡH\r\n\r\n#i"+item+"# #b#t"+item+"#");												
					}
			}else if (���ŵ���y) {
					���ŵ���y2 = true;
					slot = selection;
					item = cm.getChar().itemid(slot);
					if (cm.haveItem(1112949 ,1) == true ){						
						cm.sendYesNo("�A�T�w�n��U���o��˳ƼW�[����ܡH\r\n\r\n#i"+item+"# #b#t"+item+"#");												
					}
			}else if (�W�ŵ���y) {
					�W�ŵ���y2 = true;
					slot = selection;
					item = cm.getChar().itemid(slot);
					if (cm.haveItem(1112949 ,1) == true ){						
						cm.sendYesNo("�A�T�w�n��U���o��˳ƼW�[����ܡH\r\n\r\n#i"+item+"# #b#t"+item+"#");												
					}
			}/*�_�Y*/
			else if (�U�Ů���y) {
					�U�Ů���y2 = true;
					slot = selection;
					item = cm.getChar().itemid(slot);
					if (cm.haveItem(1112949 ,1) == true ){						
						cm.sendYesNo("�A�T�w�n��U���o��˳ƼW�[����ܡH\r\n\r\n#i"+item+"# #b#t"+item+"#");												
					}
			}else if (���Ů���y) {
					���Ů���y2 = true;
					slot = selection;
					item = cm.getChar().itemid(slot);
					if (cm.haveItem(1112949 ,1) == true ){						
						cm.sendYesNo("�A�T�w�n��U���o��˳ƼW�[����ܡH\r\n\r\n#i"+item+"# #b#t"+item+"#");												
					}
			}else if (�W�Ů���y) {
					�W�Ů���y2 = true;
					slot = selection;
					item = cm.getChar().itemid(slot);
					if (cm.haveItem(1112949 ,1) == true ){						
						cm.sendYesNo("�A�T�w�n��U���o��˳ƼW�[����ܡH\r\n\r\n#i"+item+"# #b#t"+item+"#");												
					}
			}/*�_�Y*/
			else if (�U�Ŷ���y) {
					�U�Ŷ���y2 = true;
					slot = selection;
					item = cm.getChar().itemid(slot);
					if (cm.haveItem(1112949 ,1) == true ){						
						cm.sendYesNo("�A�T�w�n��U���o��˳ƼW�[����ܡH\r\n\r\n#i"+item+"# #b#t"+item+"#");												
					}
			}else if (���Ŷ���y) {
					���Ŷ���y2 = true;
					slot = selection;
					item = cm.getChar().itemid(slot);
					if (cm.haveItem(1112949 ,1) == true ){						
						cm.sendYesNo("�A�T�w�n��U���o��˳ƼW�[����ܡH\r\n\r\n#i"+item+"# #b#t"+item+"#");												
					}
			}else if (�W�Ŷ���y) {
					�W�Ŷ���y2 = true;
					slot = selection;
					item = cm.getChar().itemid(slot);
					if (cm.haveItem(1112949 ,1) == true ){						
						cm.sendYesNo("�A�T�w�n��U���o��˳ƼW�[����ܡH\r\n\r\n#i"+item+"# #b#t"+item+"#");												
					}
			}/*�_�Y*/
			else if (�U�ů���y) {
					�U�ů���y2 = true;
					slot = selection;
					item = cm.getChar().itemid(slot);
					if (cm.haveItem(1112949 ,1) == true ){						
						cm.sendYesNo("�A�T�w�n��U���o��˳ƼW�[����ܡH\r\n\r\n#i"+item+"# #b#t"+item+"#");												
					}
			}else if (���ů���y) {
					���ů���y2 = true;
					slot = selection;
					item = cm.getChar().itemid(slot);
					if (cm.haveItem(1112949 ,1) == true ){						
						cm.sendYesNo("�A�T�w�n��U���o��˳ƼW�[����ܡH\r\n\r\n#i"+item+"# #b#t"+item+"#");												
					}
			}else if (�W�ů���y) {
					�W�ů���y2 = true;
					slot = selection;
					item = cm.getChar().itemid(slot);
					if (cm.haveItem(1112949 ,1) == true ){						
						cm.sendYesNo("�A�T�w�n��U���o��˳ƼW�[����ܡH\r\n\r\n#i"+item+"# #b#t"+item+"#");												
					}
			}/*�_�Y*/
			else if (�U�Ŷ§�y) {
					�U�Ŷ§�y2 = true;
					slot = selection;
					item = cm.getChar().itemid(slot);
					if (cm.haveItem(1112949 ,1) == true ){						
						cm.sendYesNo("�A�T�w�n��U���o��˳ƼW�[����ܡH\r\n\r\n#i"+item+"# #b#t"+item+"#");												
					}
			}else if (���Ŷ§�y) {
					���Ŷ§�y2 = true;
					slot = selection;
					item = cm.getChar().itemid(slot);
					if (cm.haveItem(1112949 ,1) == true ){						
						cm.sendYesNo("�A�T�w�n��U���o��˳ƼW�[����ܡH\r\n\r\n#i"+item+"# #b#t"+item+"#");												
					}
			}else if (�W�Ŷ§�y) {
					�W�Ŷ§�y2 = true;
					slot = selection;
					item = cm.getChar().itemid(slot);
					if (cm.haveItem(1112949 ,1) == true ){						
						cm.sendYesNo("�A�T�w�n��U���o��˳ƼW�[����ܡH\r\n\r\n#i"+item+"# #b#t"+item+"#");												
					}
			}else{
				cm.sendOk("�A��J�����~��m�S���˳ƩάO�Ӹ˳Ƥ���V!");
				cm.dispose();
				}
		
		}else if (status == 6) {			
			var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(slot).copy();
			/*�_�Y*/			
			if (�U���ŧ�y2 && cm.haveItem(�U���� ,1) == true && item.getSapphire() <= 4  && item.getReform() <= 29) {
                var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(slot).copy();
                    cm.gainItem(�U����,-1);
					cm.gainMeso(-500000);
					item.setReform((item.getReform() + 1 )); //�p���`�V����
					item.setSapphire((item.getSapphire() + 1 )); //�p���`��y����
                    item.setMatk((item.getMatk() + 1 ));
					if (item.getSapphire() == 5) {
						item.setMatk((item.getMatk() + 5 ));
					}
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, slot, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item);
                    cm.sendOk("���߱z�����F�����_�ۧ�y�A�Ӹ˳Ƥw��y�F"+item.getReform()+"��\r\n" +
							  "#k�˳Ƨ�y���Ƴ̰��� #r30#k ���A���ԷV���t#k");
                cm.dispose();
            }else if (�����ŧ�y2 && cm.haveItem(������ ,1) == true && item.getSapphire() <= 4  && item.getReform() <= 29) {
                var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(slot).copy();
                    cm.gainItem(������,-1);
					cm.gainMeso(-1000000);
					item.setReform((item.getReform() + 1 )); //�p���`�V����
					item.setSapphire((item.getSapphire() + 1 )); //�p���`��y����
                    item.setMatk((item.getMatk() + 2 ));
					if (item.getSapphire() == 5) {
						item.setMatk((item.getMatk() + 5 ));
					}
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, slot, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item);
                    cm.sendOk("���߱z�����F�����_�ۧ�y\r\n" +
							  "#k�˳Ƨ�y���Ƴ̰��� #r30#k ���A���ԷV���t#k");
                cm.dispose();
            }else if (�W���ŧ�y2 && cm.haveItem(�W���� ,1) == true && item.getSapphire() <= 4  && item.getReform() <= 29) {
                var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(slot).copy();
                    cm.gainItem(�W����,-1);
					cm.gainMeso(-2000000);
					item.setReform((item.getReform() + 1 )); //�p���`�V����
					item.setSapphire((item.getSapphire() + 1 )); //�p���`��y����
                    item.setMatk((item.getMatk() + 3 ));
					if (item.getSapphire() == 5) {
						item.setMatk((item.getMatk() + 5 ));
					}
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, slot, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item);
                    cm.sendOk("���߱z�����F�����_�ۧ�y\r\n" +
							  "#k�˳Ƨ�y���Ƴ̰��� #r30#k ���A���ԷV���t#k");
                cm.dispose();
            }/*�_�Y*/ else if (�U�ťۧ�y2 && cm.haveItem(�U�ť� ,1) == true && item.getGarnet() <= 9  && item.getReform() <= 29) {
                var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(slot).copy();
                    cm.gainItem(�U�ť�,-1);
					cm.gainMeso(-500000);
					item.setReform((item.getReform() + 1 )); //�p���`�V����
					item.setGarnet((item.getGarnet() + 1 )); //�p���`��y����
                    item.setHp((item.getHp() + 10 ));
					if (item.getGarnet() == 10) {
						item.setHp((item.getHp() + 300 ));
					}
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, slot, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item);
                    cm.sendOk("���߱z�����F�����_�ۧ�y\r\n" +
							  "#k�˳Ƨ�y���Ƴ̰��� #r30#k ���A���ԷV���t#k");
                cm.dispose();
            }else if (���ťۧ�y2 && cm.haveItem(���ť� ,1) == true && item.getGarnet() <= 9  && item.getReform() <= 29) {
                var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(slot).copy();
                    cm.gainItem(���ť�,-1);
					cm.gainMeso(-1000000);
					item.setReform((item.getReform() + 1 )); //�p���`�V����
					item.setGarnet((item.getGarnet() + 1 )); //�p���`��y����
                    item.setHp((item.getHp() + 20 ));
					if (item.getGarnet() == 10) {
						item.setHp((item.getHp() + 300 ));
					}
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, slot, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item);
                    cm.sendOk("���߱z�����F�����_�ۧ�y\r\n" +
							  "#k�˳Ƨ�y���Ƴ̰��� #r30#k ���A���ԷV���t#k");
                cm.dispose();
            }else if (�W�ťۧ�y2 && cm.haveItem(�W�ť� ,1) == true && item.getGarnet() <= 9  && item.getReform() <= 29) {
                var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(slot).copy();
                    cm.gainItem(�W�ť�,-1);
					cm.gainMeso(-2000000);
					item.setReform((item.getReform() + 1 )); //�p���`�V����
					item.setGarnet((item.getGarnet() + 1 )); //�p���`��y����
                    item.setHp((item.getHp() + 30 ));
					if (item.getGarnet() == 10) {
						item.setHp((item.getHp() + 300 ));
					}
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, slot, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item);
                    cm.sendOk("���߱z�����F�����_�ۧ�y\r\n" +
							  "#k�˳Ƨ�y���Ƴ̰��� #r30#k ���A���ԷV���t#k");
                cm.dispose();
            }/*�_�Y*/else if (�U�ųJ��y2 && cm.haveItem(�U�ųJ ,1) == true && item.getOpal() <= 4  && item.getReform() <= 29) {
                var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(slot).copy();
                    cm.gainItem(�U�ųJ,-1);
					cm.gainMeso(-500000);
					item.setReform((item.getReform() + 1 )); //�p���`�V����
					item.setOpal((item.getOpal() + 1 )); //�p���`��y����
                    item.setWatk((item.getWatk() + 1 ));
					if (item.getOpal() == 5) {
						item.setWatk((item.getWatk() + 5 ));
					}
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, slot, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item);
                    cm.sendOk("���߱z�����F�����_�ۧ�y\r\n" +
							  "#k�˳Ƨ�y���Ƴ̰��� #r30#k ���A���ԷV���t#k");
                cm.dispose();
            }else if (���ųJ��y2 && cm.haveItem(���ųJ ,1) == true && item.getOpal() <= 4  && item.getReform() <= 29) {
                var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(slot).copy();
                    cm.gainItem(���ųJ,-1);
					cm.gainMeso(-1000000);
					item.setReform((item.getReform() + 1 )); //�p���`�V����
					item.setOpal((item.getOpal() + 1 )); //�p���`��y����
                    item.setWatk((item.getWatk() + 2 ));
					if (item.getOpal() == 5) {
						item.setWatk((item.getWatk() + 5 ));
					}
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, slot, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item);
                    cm.sendOk("���߱z�����F�����_�ۧ�y\r\n" +
							  "#k�˳Ƨ�y���Ƴ̰��� #r30#k ���A���ԷV���t#k");
                cm.dispose();
            }else if (�W�ųJ��y2 && cm.haveItem(�W�ųJ ,1) == true && item.getOpal() <= 4  && item.getReform() <= 29) {
                var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(slot).copy();
                    cm.gainItem(�W�ųJ,-1);
					cm.gainMeso(-2000000);
					item.setReform((item.getReform() + 1 )); //�p���`�V����
					item.setOpal((item.getOpal() + 1 )); //�p���`��y����
                    item.setWatk((item.getWatk() + 3 ));
					if (item.getOpal() == 5) {
						item.setWatk((item.getWatk() + 5 ));
					}
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, slot, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item);
                    cm.sendOk("���߱z�����F�����_�ۧ�y\r\n" +
							  "#k�˳Ƨ�y���Ƴ̰��� #r30#k ���A���ԷV���t#k");
                cm.dispose();
            }/*�_�Y*/else if (�U�ŵ���y2 && cm.haveItem(�U�ŵ� ,1) == true && item.getAmethyst() <= 9  && item.getReform() <= 29) {
                var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(slot).copy();
                    cm.gainItem(�U�ŵ�,-1);
					cm.gainMeso(-500000);
					item.setReform((item.getReform() + 1 )); //�p���`�V����
					item.setAmethyst((item.getAmethyst() + 1 )); //�p���`��y����
                    item.setAcc((item.getAcc() + 1 ));
					if (item.getAmethyst() == 10) {
						item.setAcc((item.getAcc() + 10 ));
					}
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, slot, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item);
                    cm.sendOk("���߱z�����F�����_�ۧ�y\r\n" +
							  "#k�˳Ƨ�y���Ƴ̰��� #r30#k ���A���ԷV���t#k");
                cm.dispose();
            }else if (���ŵ���y2 && cm.haveItem(���ŵ� ,1) == true && item.getAmethyst() <= 9  && item.getReform() <= 29) {
                var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(slot).copy();
                    cm.gainItem(���ŵ�,-1);
					cm.gainMeso(-1000000);
					item.setReform((item.getReform() + 1 )); //�p���`�V����
					item.setAmethyst((item.getAmethyst() + 1 )); //�p���`��y����
                    item.setAcc((item.getAcc() + 2 ));
					if (item.getAmethyst() == 10) {
						item.setAcc((item.getAcc() + 10 ));
					}
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, slot, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item);
                    cm.sendOk("���߱z�����F�����_�ۧ�y\r\n" +
							  "#k�˳Ƨ�y���Ƴ̰��� #r30#k ���A���ԷV���t#k");
                cm.dispose();
            }else if (�W�ŵ���y2 && cm.haveItem(�W�ŵ� ,1) == true && item.getAmethyst() <= 9  && item.getReform() <= 29) {
                var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(slot).copy();
                    cm.gainItem(�W�ŵ�,-1);
					cm.gainMeso(-2000000);
					item.setReform((item.getReform() + 1 )); //�p���`�V����
					item.setAmethyst((item.getAmethyst() + 1 )); //�p���`��y����
                    item.setAcc((item.getAcc() + 3 ));
					if (item.getAmethyst() == 10) {
						item.setAcc((item.getAcc() + 10 ));
					}
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, slot, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item);
                    cm.sendOk("���߱z�����F�����_�ۧ�y\r\n" +
							  "#k�˳Ƨ�y���Ƴ̰��� #r30#k ���A���ԷV���t#k");
                cm.dispose();
            }/*�_�Y*/else if (�U�Ů���y2 && cm.haveItem(�U�Ů� ,1) == true && item.getAquamarine() <= 9  && item.getReform() <= 29) {
                var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(slot).copy();
                    cm.gainItem(�U�Ů�,-1);
					cm.gainMeso(-500000);
					item.setReform((item.getReform() + 1 )); //�p���`�V����
					item.setAquamarine((item.getAquamarine() + 1 )); //�p���`��y����
                    item.setMp((item.getMp() + 10 ));
					if (item.getAquamarine() == 10) {
						item.setMp((item.getMp() + 300 ));
					}
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, slot, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item);
                    cm.sendOk("���߱z�����F�����_�ۧ�y\r\n" +
							  "#k�˳Ƨ�y���Ƴ̰��� #r30#k ���A���ԷV���t#k");
                cm.dispose();
            }else if (���Ů���y2 && cm.haveItem(���Ů� ,1) == true && item.getAquamarine() <= 9  && item.getReform() <= 29) {
                var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(slot).copy();
                    cm.gainItem(���Ů�,-1);
					cm.gainMeso(-1000000);
					item.setReform((item.getReform() + 1 )); //�p���`�V����
					item.setAquamarine((item.getAquamarine() + 1 )); //�p���`��y����
                    item.setMp((item.getMp() + 20 ));
					if (item.getAquamarine() == 10) {
						item.setMp((item.getMp() + 300 ));
					}
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, slot, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item);
                    cm.sendOk("���߱z�����F�����_�ۧ�y\r\n" +
							  "#k�˳Ƨ�y���Ƴ̰��� #r30#k ���A���ԷV���t#k");
                cm.dispose();
            }else if (�W�Ů���y2 && cm.haveItem(�W�Ů� ,1) == true && item.getAquamarine() <= 9  && item.getReform() <= 29) {
                var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(slot).copy();
                    cm.gainItem(�W�Ů�,-1);
					cm.gainMeso(-2000000);
					item.setReform((item.getReform() + 1 )); //�p���`�V����
					item.setAquamarine((item.getAquamarine() + 1 )); //�p���`��y����
                    item.setMp((item.getMp() + 30 ));
					if (item.getAquamarine() == 10) {
						item.setMp((item.getMp() + 300 ));
					}
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, slot, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item);
                    cm.sendOk("���߱z�����F�����_�ۧ�y\r\n" +
							  "#k�˳Ƨ�y���Ƴ̰��� #r30#k ���A���ԷV���t#k");
                cm.dispose();
            }/*�_�Y*/else if (�U�Ŷ���y2 && cm.haveItem(�U�Ŷ� ,1) == true && item.getHuangJing() <= 4  && item.getReform() <= 29) {
                var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(slot).copy();
                    cm.gainItem(�U�Ŷ�,-1);
					cm.gainMeso(-500000);
					item.setReform((item.getReform() + 1 )); //�p���`�V����
					item.setHuangJing((item.getHuangJing() + 1 )); //�p���`��y����
                    item.setWdef((item.getWdef() + 5 ));
					if (item.getHuangJing() == 5) {
						item.setWdef((item.getWdef() + 50 ));
					}
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, slot, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item);
                    cm.sendOk("���߱z�����F�����_�ۧ�y\r\n" +
							  "#k�˳Ƨ�y���Ƴ̰��� #r30#k ���A���ԷV���t#k");
                cm.dispose();
            }else if (���Ŷ���y2 && cm.haveItem(���Ŷ� ,1) == true && item.getHuangJing() <= 4  && item.getReform() <= 29) {
                var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(slot).copy();
                    cm.gainItem(���Ŷ�,-1);
					cm.gainMeso(-1000000);
					item.setReform((item.getReform() + 1 )); //�p���`�V����
					item.setHuangJing((item.getHuangJing() + 1 )); //�p���`��y����
                    item.setWdef((item.getWdef() + 10 ));
					if (item.getHuangJing() == 5) {
						item.setWdef((item.getWdef() + 50 ));
					}
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, slot, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item);
                    cm.sendOk("���߱z�����F�����_�ۧ�y\r\n" +
							  "#k�˳Ƨ�y���Ƴ̰��� #r30#k ���A���ԷV���t#k");
                cm.dispose();
            }else if (�W�Ŷ���y2 && cm.haveItem(�W�Ŷ� ,1) == true && item.getHuangJing() <= 4  && item.getReform() <= 29) {
                var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(slot).copy();
                    cm.gainItem(�W�Ŷ�,-1);
					cm.gainMeso(-2000000);
					item.setReform((item.getReform() + 1 )); //�p���`�V����
					item.setHuangJing((item.getHuangJing() + 1 )); //�p���`��y����
                    item.setWdef((item.getWdef() + 20 ));
					if (item.getHuangJing() == 5) {
						item.setWdef((item.getWdef() + 50 ));
					}
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, slot, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item);
                    cm.sendOk("���߱z�����F�����_�ۧ�y\r\n" +
							  "#k�˳Ƨ�y���Ƴ̰��� #r30#k ���A���ԷV���t#k");
                cm.dispose();
            }/*�_�Y*/else if (�U�ů���y2 && cm.haveItem(�U�ů� ,1) == true && item.getEmerald() <= 4  && item.getReform() <= 29) {
                var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(slot).copy();
                    cm.gainItem(�U�ů�,-1);
					cm.gainMeso(-500000);
					item.setReform((item.getReform() + 1 )); //�p���`�V����
					item.setEmerald((item.getEmerald() + 1 )); //�p���`��y����
                    item.setMdef((item.getMdef() + 1 ));
					if (item.getEmerald() == 5) {
						item.setMdef((item.getMdef() + 50 ));
					}
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, slot, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item);
                    cm.sendOk("���߱z�����F�����_�ۧ�y\r\n" +
							  "#k�˳Ƨ�y���Ƴ̰��� #r30#k ���A���ԷV���t#k");
                cm.dispose();
            }else if (���ů���y2 && cm.haveItem(���ů� ,1) == true && item.getEmerald() <= 4  && item.getReform() <= 29) {
                var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(slot).copy();
                    cm.gainItem(���ů�,-1);
					cm.gainMeso(-1000000);
					item.setReform((item.getReform() + 1 )); //�p���`�V����
					item.setEmerald((item.getEmerald() + 1 )); //�p���`��y����
                    item.setMdef((item.getMdef() + 2 ));
					if (item.getEmerald() == 5) {
						item.setMdef((item.getMdef() + 50 ));
					}
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, slot, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item);
                    cm.sendOk("���߱z�����F�����_�ۧ�y\r\n" +
							  "#k�˳Ƨ�y���Ƴ̰��� #r30#k ���A���ԷV���t#k");
                cm.dispose();
            }else if (�W�ů���y2 && cm.haveItem(�W�ů� ,1) == true && item.getEmerald() <= 4  && item.getReform() <= 29) {
                var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(slot).copy();
                    cm.gainItem(�W�ů�,-1);
					cm.gainMeso(-2000000);
					item.setReform((item.getReform() + 1 )); //�p���`�V����
					item.setEmerald((item.getEmerald() + 1 )); //�p���`��y����
                    item.setMdef((item.getMdef() + 3 ));
					if (item.getEmerald() == 5) {
						item.setMdef((item.getMdef() + 50 ));
					}
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, slot, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item);
                    cm.sendOk("���߱z�����F�����_�ۧ�y\r\n" +
							  "#k�˳Ƨ�y���Ƴ̰��� #r30#k ���A���ԷV���t#k");
                cm.dispose();
            }/*�_�Y*/else if (�U�Ŷ§�y2 && cm.haveItem(�U�Ŷ� ,1) && item.getBlackCrystal() <= 9  && item.getReform() <= 29) {
                var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(slot).copy();
                    cm.gainItem(�U�Ŷ�,-1);
					cm.gainMeso(-500000);
					item.setReform((item.getReform() + 1 )); //�p���`�V����
					item.setBlackCrystal((item.getBlackCrystal() + 1 )); //�p���`��y����
                    item.setAvoid((item.getAvoid() + 1 ));
					if (item.getBlackCrystal() == 10) {
						item.setAvoid((item.getAvoid() + 10 ));
					}
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, slot, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item);
                    cm.sendOk("���߱z�����F�����_�ۧ�y\r\n" +
							  "#k�˳Ƨ�y���Ƴ̰��� #r30#k ���A���ԷV���t#k");
                cm.dispose();
            }else if (���Ŷ§�y2 && cm.haveItem(���Ŷ� ,1) == true && item.getBlackCrystal() <= 9  && item.getReform() <= 29) {
                var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(slot).copy();
                    cm.gainItem(���Ŷ�,-1);
					cm.gainMeso(-1000000);
					item.setReform((item.getReform() + 1 )); //�p���`�V����
					item.setBlackCrystal((item.getBlackCrystal() + 1 )); //�p���`��y����
                    item.setAvoid((item.getAvoid() + 2 ));
					if (item.getBlackCrystal() == 10) {
						item.setAvoid((item.getAvoid() + 10 ));
					}
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, slot, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item);
                    cm.sendOk("���߱z�����F�����_�ۧ�y\r\n" +
							  "#k�˳Ƨ�y���Ƴ̰��� #r30#k ���A���ԷV���t#k");
                cm.dispose();
            }else if (�W�Ŷ§�y2 && cm.haveItem(�W�Ŷ� ,1) == true && item.getBlackCrystal() <= 9  && item.getReform() <= 29) {
                var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(slot).copy();
                    cm.gainItem(�W�Ŷ�,-1);
					cm.gainMeso(-2000000);
					item.setReform((item.getReform() + 1 )); //�p���`�V����
					item.setBlackCrystal((item.getBlackCrystal() + 1 )); //�p���`��y����
                    item.setAvoid((item.getAvoid() + 3 ));
					if (item.getBlackCrystal() == 10) {
						item.setAvoid((item.getAvoid() + 10 ));
					}
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, slot, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item);
                    cm.sendOk("���߱z�����F�����_�ۧ�y\r\n" +
							  "#k�˳Ƨ�y���Ƴ̰��� #r30#k ���A���ԷV���t#k");
                cm.dispose();
            }else{
                cm.sendOk("��p,�z�S����y�۵L�k�i���y�A�i���]�p�U\r\n\r\n"+
						  "#b1#k �� #b�z�L�Ӷ��ةһݧ�y��\r\n"+
						  "#b2#k �� #b�z�w�F�Ӷ��ؤW����y����\r\n"+
						  "#b3#k �� #b�z����������\r\n"+
						  "#b4#k �� #b�z�w�F�Ӷ��ؤW���`����");
                cm.dispose();
            }
			
		}
    }
}