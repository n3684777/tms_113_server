/*
* 預設 9900003
*/

var status = 0;
var 回到自由 = 1; //1 = 開放回自由 0 = 關閉回自由

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
			var playerMapID = cm.getMapId();
			if(playerMapID == 10000){
            var storeText = "";
				storeText += "玩家您好，如果您想#r跳過新手任務#k可以透過我的幫助完成哦！\r\n";
            storeText += "跳過新手任務，會幫您等級提升至 #b10 #k等！#k\r\n\r\n";
            storeText += "#b#L1#我想跳過新手任務#l\r\n";
            storeText += "#b#L2#我想成為法師，跳過新手任務#l\r\n";
            storeText += "#r#L3#不用了謝謝#l\r\n";
            cm.sendSimple(storeText);
			}else{
				cm.sendOk("您好冒險者！");
				cm.dispose();
				return;
				
			}
				
        } else if (status == 1) {
          選擇號碼 = selection;
          if(選擇號碼 == 1){
             cm.sendSimple("那麼，我現在就將您等級提升至 #b10 #k等");
          }if(選擇號碼 == 2){
             cm.sendSimple("那麼，我現在就將您等級提升至 #b8 #k等");
          }if(選擇號碼 == 3){
             cm.sendOk("好的～祝您遊戲愉快！！");
             cm.dispose();
          }     
        } else if (status == 2) {
           if(選擇號碼 == 1){
              cm.gainExp(15);
              cm.gainExp(34);
              cm.gainExp(57);
              cm.gainExp(92);
              cm.gainExp(135);
              cm.gainExp(372);
              cm.gainExp(560);
              cm.gainExp(840);
              cm.gainExp(1242);
			if(回到自由 == 1){
				cm.warp(910000000);
			}
              
              cm.dispose();
          }if(選擇號碼 == 2){
              cm.gainExp(15);
              cm.gainExp(34);
              cm.gainExp(57);
              cm.gainExp(92);
              cm.gainExp(135);
              cm.gainExp(372);
              cm.gainExp(560);      
              if(回到自由 == 1){
				cm.warp(910000000);
			}
              cm.dispose();
          }
      }	
   }		
}
