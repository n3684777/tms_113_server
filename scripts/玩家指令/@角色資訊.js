var status = -1;
function action(mode, type, selection) {
	if (mode == 1) {status++;} else {status--;}
	if (status == 0) {
		var player = cm.getPlayer();
		var Str = "";
		Str += "　　　　　　　#e#b<<角色資訊>>#k#n";
		Str += "\r\n角色:" + player.getName();
		Str += "\r\nGASH點數:" +player.getCSPoints(1);
		Str += "\r\n楓葉點數:" +player.getCSPoints(2);
		Str += "\r\n";
		Str += "\r\n";
		Str += "\r\n";
		cm.sendOk(Str);
	}
	//玩家指令模組不支援下一個status 若需要詳細的對話腳本,請使用 cm.openNpc(ID,"腳本名"); 開啟自製腳本
}