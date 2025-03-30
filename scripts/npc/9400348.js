var status = -1;
var picked = 0;
var state = -1;
var list = [
//腳本,顯示名稱
    ["森蘭丸/9131004", "森蘭丸遠征"],


];
function start() {
    action(1, 0, 0);	
}
function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status >= 2 || status == 0) {
            cm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        var msg = "";
        msg += " 【歡迎選擇您要挑戰的遠征副本】\r\n#b";
        for (var i = 0; i < list.length; i+=2) {
			var s = i + 1;
            msg += "#L" + i + "#" + list[i][1] +  "#l      "+(s>=list.length?"":"#L" + s + "#" + list[s][1] + "#l")+"\r\n";
        }
        cm.sendSimple(msg);
    } else if (status == 1) {
		
        if (!isNaN(list[selection][0])) {
            cm.dispose();
            cm.openNpc(list[selection][0]);
            return;
        } else {
            cm.dispose();
            cm.openNpc(9010000, list[selection][0]);
            return;
        }
    }
}
