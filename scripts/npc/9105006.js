﻿/* singapore legend guy
	Kerning VIP Hair/Hair Color Change.
*/
var status = -1;
var beauty = 0;
var hair_Colo_new;
var ticket = 5150041;

function action(mode, type, selection) {
    if (mode == 0) {
	cm.dispose();
	return;
    } else {
	status++;
    }

    if (status == 0) {
	cm.sendSimple("我是助理設計師，如果你身上有#b#t" + ticket + "##k #k,要不要交給我處理呢? \r\n#L0#更換髮型: #i" + ticket + "##t" + ticket + "##l\r\n");
    } else if (status == 1) {
	if (selection == 0) {
	    var hair = cm.getPlayerStat("HAIR");
	    hair_Colo_new = [];
	    beauty = 1;

	    if (cm.getPlayerStat("GENDER") == 0) {//30420 30600 30430有問題
		
		hair_Colo_new = [30440, 30450, 30460, 30470, 30480, 30490, 30510, 30520, 30530, 30540, 30550, 30560, 30580, 30590 , 30610, 30620, 30630, 30640, 30650, 30660, 30670, 30700, 30710, 30730, 30750, 30760, 30770, 30790, 30800, 30810, 30820, 30840,30000, 30020, 30030, 30040, 30050, 30100, 30110, 30120, 30130, 30140, 30150, 30160, 30170, 30180, 30190, 30200, 30210, 30220, 30230, 30240, 30250, 30260, 30270, 30280, 30290, 30300, 30310, 30320, 30330, 30340, 30350, 30360, 30370, 30400, 30410];
	    } else {
		hair_Colo_new = [31000, 31020, 31030, 31040, 31050, 31060, 31070, 31080, 31090, 31100, 31110, 31120, 31130, 31140, 31150, 31160, 31170, 31180, 31190, 31200, 31210, 31220, 31230, 31240, 31250, 31260, 31270, 31280, 31290, 31300, 31310, 31320, 31330, 31340, 31350, 31400, 31410, 31420, 31440, 31450, 31460, 31470, 31480, 31490, 31510, 31520, 31530, 31540, 31550, 31560, 31580, 31590, 31600, 31610, 31620, 31630, 31640, 31650, 31670, 31680, 31690, 31700, 31710, 31720, 31730, 31740, 31750, 31780, 31790, 31800, 31810];
	    }
	    for (var i = 0; i < hair_Colo_new.length; i++) {
		hair_Colo_new[i] = hair_Colo_new[i] + (hair % 10);
	    }
	    cm.askAvatar("我可以完全改變你的髮型，讓它看起來更好。 為什麼不稍微改一下？ 如果你有 #b#t" + ticket + "##k我可以幫你變換。選一個喜歡的吧.", hair_Colo_new);
	} else if (selection == 1) {
	    var currenthaircolo = Math.floor((cm.getPlayerStat("HAIR") / 10)) * 10;
	    hair_Colo_new = [];
	    beauty = 2;

	    for (var i = 0; i < 8; i++) {
		hair_Colo_new[i] = currenthaircolo + i;
	    }
	    cm.askAvatar("我可以完全改變你的頭髮顏色，讓它看起來更好。 為什麼不稍微改一下？ 如果你有#b#t" + ticket + "##k 我能幫你改變髮色。 選擇你喜歡的顏色。", hair_Colo_new);
	}
    } else if (status == 2){
	if (beauty == 1){
	    if (cm.setAvatar(ticket, hair_Colo_new[selection]) == 1) {
		cm.sendOk("享受您新的髮型!");
	    } else {
		cm.sendOk("嗯……看來你沒有我們指定的髮型卷……沒有它我恐怕不能給你理髮了。 對不起...");
	    }
	} else {
	    if (cm.setAvatar(ticket, hair_Colo_new[selection]) == 1) {
		cm.sendOk("享受您新的髮色!!！");
	    } else {
		cm.sendOk("嗯……看來你沒有我們指定的髮型卷……沒有它我恐怕不能給你理髮了。 對不起...");
	    }
	}
	cm.safeDispose();
    }
}
