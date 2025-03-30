var status = -1;



function start(mode, type, selection) {
}

function end(mode, type, selection) {
	if (mode == -1) {
		qm.dispose();
	} else {
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			if(!(qm.isQuestActive(3953))){
				qm.sendNext("與#p2100001#對話，他不讓提#o3220001#是不是怪物之類的話。看來比想像中還要固執…？ 要想說服他首先還得先讓他開心一下。要不找來#p2100001#喜歡的#b#t4011008# 1個#k再試試看？\n\n#i4011008##t4011008# #b#c4011008#/1");
				qm.forceStartQuest();
				qm.dispose();
			}else{
				var msg = "";
				if (qm.haveItem(4011008, 1)) {
					qm.gainItem(4011008, -1);
					msg += "若你是想說什麼仙人長老是怪物之類的話，你就快點給我滾開！嗯...這不是#z"+4011008+"#呀！看這顏色還是最高級的#z"+4011008+"#！狀態也非常好...什麼？你說要送給我？呵呵...好...有什麼事嗎?";
					msg += "\r\n\r\n";
					msg += "#b#L1#我一定要告訴你仙人長老就是怪物！#l\r\n";
					msg += "#b#L2#你有聽說在沙漠移動的商團受到怪物攻擊的事情嗎？#l\r\n";
					qm.sendNext(msg);
				} else {
					qm.sendNext("莫哈默德似乎並不想理我...\r\n或許準備#b#i"+4011008+":# #z"+4011008+"##k有機會跟他談話。");
					qm.dispose();
				}
			}
		} else if (status == 1) {
			var msg = "";
			if(selection == 1){
				qm.sendNext("竟然說#o3220001#是個怪物…你那是什麼話啊？！竟然這麼不尊重，長時間守護著沙漠的守護神…！現在的年輕人真是沒有禮貌啊！要是想說那種話，就回去吧！和你沒什麼好說的！");
				qm.dispose();
			}else{
				msg += "商團受到攻擊？看來是護衛不足…雖然炎熱之路並沒有非常危險的怪物，但可不能就此鬆懈…人在沙漠需要時時主動留意自身的安全。";
				msg += "\r\n\r\n";
				msg += "#b#L1#只要打倒仙人長老，應該就不會發生這樣的事情。#l\r\n";
				msg += "#b#L2#這都是王妃疏於村莊附近治安所造成的。#l\r\n";
				qm.sendNext(msg);
			}
		} else if (status == 2) {
			var msg = "";
			if(selection == 1){
				qm.sendNext("竟然說#o3220001#是個怪物…你那是什麼話啊？！竟然這麼不尊重，長時間守護著沙漠的守護神…！現在的年輕人真是沒有禮貌啊！要是想說那種話，就回去吧！和你沒什麼好說的！");
				qm.dispose();
			}else{
				msg += "沒錯！這都是王妃的問題！自從那女人來到這裡…賢明的阿都拉八世陛下就變了一個人似的，而納希沙漠也變得愈來愈乾旱！這一切都是那女人一手造成的！";
				msg += "\r\n\r\n";
				msg += "#b#L1#王妃這樣胡亂妄為，而沙漠的守護神為什麼會坐視不理呢？#l\r\n";
				msg += "#b#L2#要盡快組成軍隊，想辦法脫離王妃的暴行!#l\r\n";
				qm.sendNext(msg);
			}
		} else if (status == 3) {
			var msg = "";
			if(selection == 1){
				msg += "就是說嘛…若仙人長老能夠多使點力，那該多好…守護神也太無情了…";
				msg += "\r\n\r\n";
				msg += "#b#L1#說到這個…仙人長老有沒有可能已經變成怪物呢？#l\r\n";
				msg += "#b#L2#仙人長老不過是個怪物，這也沒辦法的吧！#l\r\n";
				qm.sendNext(msg);
			}else{
				qm.sendNext("你這個提議非常好！這樣吧！組建軍隊的事交給你...我突然想起要幫我兒子換尿布...什麼?你說我不是一直單身嗎?沒有沒有...不久前剛撿回來的孩子，就先聊到這，我看好你年輕人！");
				qm.dispose();
			}
		} else if (status == 4) {
			var msg = "";
			if(selection == 1){
				msg += "你這話說的...這樣吧...你去請教#b#p"+2101010+"##k或許他知道些什麼";
				msg += "\r\n\r\n";
				msg += "#b#L1#終於說服#p2100001#了！ 由於比較固執讓人花了不少時間，不過總算成功了。 太好了…！ 現在去找 #p2101010#報告這個事情吧。#l\r\n";
				qm.sendNext(msg);
				qm.forceCompleteQuest(3953);
				qm.dispose();
			}else{
				qm.sendNext("竟然說#o3220001#是個怪物…你那是什麼話啊？！竟然這麼不尊重，長時間守護著沙漠的守護神…！現在的年輕人真是沒有禮貌啊！要是想說那種話，就回去吧！和你沒什麼好說的！");
				qm.dispose();
			}
		}
	}
}