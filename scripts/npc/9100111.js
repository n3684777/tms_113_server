//Cherry_MS
var status = 0;
var typeName = new Array("���Ρ�","���p��","��С��","���С�","����","��һ�c��","�����c��","�����c��","�����c��","�����c��","�����c��");
var selectTouType=new Array(2,2,3,3,3,6,6,6,6,6,6);
var selectTouNum=new Array(1,5,1,3,5,1,2,3,4,5,6);
var selectTou=-1;
var nx=500;
var race;
var num;
function start() {
status = -1;
action(1, 0, 0);
}

function action(mode, type, selection) {
if (mode == -1) {
cm.dispose();
} else {
if (mode == 1)
status++;
else
status--;
		if (status == -1) {
			cm.dispose();
		 } 
		else if (status == 0) {
		 var where ="Taiwan��ـ��ϵ�y\r\n,����Ъ��������۳�%5Ӷ��,�����c�픵����:\r\n�x����Ҫ��ע���x헡�\r\n";
		 if(cm.getChar().isGM()){
		 where+="#r����T��ʾ:#k���M�c��:#k �r���c��:#k(�HGM��Ҋ.)\r\n";
		 }
		 where+="#r2������#k\r\n#L0##b���Ρ�#k#l#L1##b���p��#k#l\r\n\r\n";
		 where+="#r3������#k\r\n#L2##b��С��#k#l#L3##b���С�#k#l#L4##b����#k#l\r\n\r\n";
		 where+="#r6������#k\r\n#L5##b��һ��#k#l#L6##b������#k#l#L7##b������#k#l#L8##b���ġ�#k#l#L9##b���塿#k#l#L10##b������#k#l\r\n\r\n\r\n";
		 where+="�����_��ǰͶע�yӋ��ÿ5����_��ˢ�½yӋ:\r\n";
		 where+="#b2��Ͷע����ǰ:#k"+cm.seeTouzhuByType(2)+"��Ͷע\r\n";
		 where+="#b3��Ͷע��:#k"+cm.seeTouzhuByType(3)+"\r\n";
		 where+="#b6��Ͷע��:#k"+cm.seeTouzhuByType(6)+"\r\n\r\n";

		 where+="#r��ϵ�y�H���l��1��Ч��ÿ5����_��һ�Σ�Ո��Ҫ�S����Q�l�������¾�����t��ɫ@���c��Gʧ�������o���a����#k"
		 cm.sendSimple(where);
		 } 
		else if (status == 1) {
			if(cm.getChar().getClient().getChannel()!=1){
			cm.sendOk("ԓϵ�y�H���l��1�_�š�����������l���������@�ê��");
				cm.dispose();
			}
				else
			if(cm.getChar().getTouzhuNum()>0){
				cm.sendOk("�����_��ǰ���ѽ�Ͷ�^ע�ˡ�����Ͷע���~:"+cm.getChar().getTouzhuNX());
				cm.dispose();
			}else{
		selectTou=selection;
		race=selectTouType[selectTou];
		num=selectTouNum[selectTou];
		var prompt="���x���Ͷע��͞�:"+typeName[selectTou]+"���ʞ�:"+selectTouType[selectTou]+"\r\n���Ͷע10000�c�����Ͷע500�c��\r\n�����c�픵����:"+cm.getChar().getNX()+"\r\nՈݔ����ҪͶע���c�픵Ŀ��";
		cm.sendGetNumber(prompt,500,500,10000);
		}
		} 
		else if (status == 2) {
			status=4;
			nx=selection;
			cm.sendYesNo("���_��ҪͶע "+nx+" �c�᣿����:"+race+" ̖�a:"+num);
		} 
		else if (status == 3) {
        cm.sendOk("��������߀�ܪqԥ���Ǿ�������ف�ɣ�");
        cm.dispose();
		} 
		else if (status == 4) {
			cm.sendOk("�x�x");
        cm.dispose();
		} 
		else if (status == 5) {
			if(nx>cm.getChar().getNX()){
			cm.sendOk("�����c���� "+nx+" �c");
			cm.dispose();
			}else
		if(cm.touzhu(race, nx, num)){
				cm.sendOk("Ͷע�ꮅ��ÿ����_����Ո��Ҫ�x�_ม�");
				cm.dispose();
			}else{
		cm.sendOk("Ͷע���F�e�`��");
        cm.dispose();
		}
		} 
		else if (status == 6) {
		cm.sendOk("6");
        cm.dispose();
		} 
		else if (status == 7) {
        cm.dispose();
		} 
}
}  
