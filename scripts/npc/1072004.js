/*  Author: Yud1
    NPC Name:        劍士轉職教官
    Map(s):          隱密之地 : 劍士2轉考驗場 (108000300)
    Description:     劍士二轉教官
	Custom Quest:    
*/
function start() {
    if (cm.haveItem(4031013,30)) {
        cm.sendNext("恭喜通過這次考驗 你已經是個強大的劍士了所以我將頒贈給你 #r#z4031012##k.");
    } else {
        cm.sendOk("你還沒有 #b30顆#z4031013##k. 請收集完畢再來找我, 祝你好運.");
        cm.dispose();
    }
}

function action(mode, type, selection) {
    if (mode == 1) {
        cm.warp(102000003, 0);
		cm.removeAll(4031013);
		cm.gainItem(4031012, 1);
	}
	cm.dispose();
}