var status = -1;
var picked = 0;
var state = -1;
var 腳本名稱 = "			 【以下為楓葉兌換內容】#b";
var 圖標 =  "#v4001126#";
var list = [
//腳本,顯示名稱
	["兌換專區/楓葉裝備兌換", ""+圖標+" 【楓葉裝備兌換】"],
	["兌換專區/楓葉兌換", ""+圖標+" 【楓葉兌換】"],

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
        msg += " "+腳本名稱+"\r\n#b";
        for (var i = 0; i < list.length; i+=2) {
			var s = i + 1;
            msg += "#L" + i + "#" + list[i][1] +  "#l "+(s>=list.length?"":"#L" + s + "#" + list[s][1] + "#l")+"\r\n\r\n";
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
