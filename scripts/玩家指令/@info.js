var status = -1;
function action(mode, type, selection) {
	if (mode == 1) {status++;} else {status--;}
	if (status == 0) {
		var player = cm.getPlayer();
		var Str = "";
		Str += "�@�@�@�@�@�@�@#e#b<<�����T>>#k#n";
		Str += "\r\n����:" + player.getName();
		Str += "\r\nGASH�I��:" +player.getCSPoints(1);
		Str += "\r\n�����I��:" +player.getCSPoints(2);
		Str += "\r\n";
		Str += "\r\n";
		Str += "\r\n";
		cm.sendOk(Str);
	}
	//���a���O�Ҳդ��䴩�U�@��status �Y�ݭn�ԲӪ���ܸ}��,�Шϥ� cm.openNpc(ID,"�}���W"); �}�Ҧۻs�}��
}