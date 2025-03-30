/* Author: Xterminator
	NPC Name: 		Spinel
	Map(s): 		Victoria Road : Henesys (100000000), Victoria Road : Ellinia (101000000), Victoria Road : Perion (102000000), Victoria Road : Kerning City (103000000), Victoria Road : Lith Harbor (104000000), Orbis : Orbis (200000000), Ludibrium : Ludibrium (220000000), Leafre : Leafre (240000000), Zipangu : Mushroom Shrine (800000000)
	Description: 		World Tour Guide - Takes you to Mushroom Shrine and back
*/
importPackage(Packages.server.maps);
var togos = [740000000, 701000000, 800000000, 500000000, 540000000, 541000000, 702000000, 550000000];

var status = -1;
var sel = -1;
var cost;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
	if ((status <= 2 && mode == 0) || (status == 4 && mode == 1)) {
		cm.dispose();
		return;
	}
	if (mode == 1)
		status++;
	else
		status--;
	if ((cm.getPlayer().getMapId() == (togos[0])) || (cm.getPlayer().getMapId() == (togos[1])) || (cm.getPlayer().getMapId() == (togos[2])) || (cm.getPlayer().getMapId() == (togos[3])) || (cm.getPlayer().getMapId() == (togos[4])) || (cm.getPlayer().getMapId() == (togos[5])) || (cm.getPlayer().getMapId() == (togos[6])) || (cm.getPlayer().getMapId() == (togos[7]))){
		if (status == 0) {
			cm.sendSimple ("如何?對這次的旅行還滿意嗎?\r\n#L0##b我完成了我的旅行，請送我回 #m" + cm.getPlayer().getSavedLocation(SavedLocationType.WORLDTOUR) + "##k#l\r\n#L1##b請送我到其它地方旅遊#k#l");
		} else if (status == 1) {
			if (selection == 0) {
			var map = cm.getPlayer().getSavedLocation(SavedLocationType.WORLDTOUR);
			if (map == -1) {
				map = 100000000;
			}
			cm.warp(map, 0);
			cm.dispose();
			} else if (selection == 1) {
			cm.sendSimple("請點選一處旅遊地點，我們將帶您體驗最棒的旅程。#b\r\n#L0#西門町(福爾摩沙)#l\r\n#L1#上海灘(東方神州)#l\r\n#L2#古代神社(日本)#l\r\n#L3#水上市場(泰國)#l\r\n#L4#中心商務區(新加坡)#l\r\n#L5#駁船碼頭城(新加坡)#l\r\n#L6#少林寺(東方神州)#l\r\n#L7#都會潮流區(馬來西亞)#l");
			//cm.sendSimple("請點選一處旅遊地點，我們將帶您體驗最棒的旅程。\r\n#L2#古代神社(日本)#l\r\n#L3#水上市場(泰國)#l\r\n#L4#中心商務區(新加坡)#l\r\n#L5#駁船碼頭城(新加坡)#l\r\n#L7#都會潮流區(馬來西亞)#l");
			cost = 5000;
			} 
			
		} else if (status == 2) {
			if (sel == -1) {
             sel = selection;
            }
            if (sel == 0) {
                cm.sendNext("#b福爾摩沙的西門町#k，想要去這裡旅行嗎？#b西門町#k是福爾摩沙最繁華的街區，有很多高樓大廈跟熱鬧的街道，是個欣欣向榮的城市。");
            } else if (sel == 1) {
                cm.sendNext("#b東方神州的上海#k，想要去這裡旅行嗎？#b上海#k是能夠最深刻體會到東方神州飛速發展的地方。到處都是現代化的建築和整潔的街道，能使第一次訪問東方神州的人們都會驚歎不已。");
            } else if (sel == 2) {
                cm.sendNext("#b日本的古代神社#k，想要去這裡旅行嗎？如果想感受一下日本的精髓，擁有日本特有情懷的神社是最好不過的了。古代神社是供奉著古代傳說中上古神仙的神秘地方。");
            } else if (sel == 3) {
                cm.sendNext("#b泰國的水上市場#k，想要去這裡旅行嗎？水上市場是坐落在清爽河畔的村落。熱帶雨林與泰國的傳統文物相互輝映，呈現出另類的異國情調。");
            } else if (sel == 4) {
                cm.sendNext("#b新加坡的中心商務區#k，想搭乘新加坡航空前往新加坡嗎？中心商務區將會是您離開機場大廳後，第一個接觸到的現代化中心地區，這邊充滿了高聳的大樓及各式各樣的特產，想更了解新加坡的特色，就快來吧。");
            } else if (sel == 5) {
                cm.sendNext("#b新加坡的駁船碼頭城#k，是新加坡的第2大城鎮，駁船碼頭城是坐落在商務中心區往右邊前進的最大城鎮，其中最恐怖的幽靈船，就是現身在這。");
            } else if (sel == 6) {
                cm.sendNext("#b少林寺#k在中國乃至世界聲名遠揚...學武之人夢寐以求的搖籃.少林武功天下無敵,拳腳,兵器樣樣精通.");
            } else if (sel == 7) {
                cm.sendNext("#b馬來西亞的都會潮流區#k，想要去這裡旅行嗎？都會潮流區是坐落在鄉村鎮左邊的大都市，要前往一探馬來西亞當地特色的街頭風景？就先來這裡補給好你的旅行用品。");
            } else {
                cm.dispose();
				}
			} else if (status == 3) {
            if (sel == 0) {
                cm.sendNextPrev("不過，西門町真正的魅力是在於她那夢幻般的夜景。在夜市，能夠享受到與白天的城市不一樣的愉悅感受。那麼，現在就要往熱鬧又開心的#b西門町#k出發啦。");
            } else if (sel == 1) {
                cm.sendNextPrev("而且，出了市區之後映入眼中農村那耳目一新的面貌，會讓你切身體會到什麼叫做上海繁華。那麼，現在就往變化與神秘並存的城市#b上海#k出發吧。");
            } else if (sel == 2) {
                cm.sendNextPrev("在古代神社中可以見到供奉神靈的巫女,還能品嘗到美味的章魚燒、日式炒麵等豐富的日式小吃。那麼，現在就往神秘精粹的#b古代神社#k出發吧！");
            } else if (sel == 3) {
                cm.sendNextPrev("尤其是在城鎮裏也能划船四處遊逛，這可是在別的地方看不到的，是水上市場獨特的風景哦。那麼，現在就往大自然與傳統完美融合為一體的#b水上市場#k出發吧！");
            } else if (sel == 4) {
                cm.sendNextPrev("新加坡的中心商務區，除了有當地的一些任務，更是前往新加坡的玩家們的交通樞紐，除了這些之外，還有著當地特產的小販，喜歡吃酸的、吃辣的這邊應有竟有。那麼，現在就往#b中心商務區#k出發吧！");
            } else if (sel == 5) {
                cm.sendNextPrev("想挑戰幽靈船長？想前往烏魯城鎮？成為解救烏魯城鎮的英雄嗎？也許，從這邊出發是一個不錯的選擇。那麼，現在就前往充滿挑戰與冒險的#b駁船碼頭城#k吧！");
            } else if (sel == 6) {
                cm.sendNextPrev("多少習武之人跨洋過海討教武學...少林寺坐落在嵩山山頂,聳立在雲海之中,美不勝收...準備好了吧 #b少林寺#k等著妳呢!");
            } else if (sel == 7) {
                cm.sendNextPrev("從都會潮流區觸發，前往鄉村鎮途中可體會到不同的異國風情，從鄉村鎮更可以前往夢幻樂園，打到獅王、熊王解救夢幻樂園唷！那麼，現在就出發前往#b都會潮流區#k吧！");
            } else {
                cm.dispose();
            }
        } else if (status == 4) {
			if (cm.getPlayer().getMeso() < cost) {
				cm.sendPrev("請確認一下身上的楓幣是否足夠。");
			} else {
				cm.gainMeso(-cost);
				cm.warp(togos[sel]);
				cm.dispose();
				}	
			} 
		}else {
		if (status == 0) {
			if (cm.getJob().equals(Packages.client.MapleJob.BEGINNER)) {
				cm.sendNext("Se voce esta cansado do cotidiano monotono, que tal sair para uma mudanca? Nao ha nada como a absorver uma nova cultura, aprender algo novo a cada minuto! E hora de voce sair e viajar. Recomendamos uma #bWorld Tour#k, voce esta preocupado com a despesa de viagem? Nao precisa se preocupar! O #bMaple Travel Agency#k oferece o alojamento em viagens de primeira classe para o baixo preco de #b300 mesos#k.");
				cost = 300;
			} else {
				cm.sendNext("如果對疲憊的生活厭煩了，何不去旅行呢？不僅可以感受新的文化，還能學到很多知識！向您推薦由我們楓之谷旅行社準備的#b楓之谷世界旅行#k只需#b5000楓幣#k就可以。");
				cost = 5000;
			}
		} else if (status == 1) {
			cm.sendSimple("歡迎使用世界導遊NPC，現在就請你點選一處旅遊地點，我們將帶您體驗最棒的旅程。#b\r\n#L0#西門町(福爾摩沙)#l\r\n#L1#上海灘(東方神州)#l\r\n#L2#古代神社(日本)#l\r\n#L3#水上市場(泰國)#l\r\n#L4#中心商務區(新加坡)#l\r\n#L5#駁船碼頭城(新加坡)#l\r\n#L6#少林寺(東方神州)#l\r\n#L7#都會潮流區(馬來西亞)#l");
			//cm.sendSimple("歡迎使用世界導遊NPC，現在就請你點選一處旅遊地點，我們將帶您體驗最棒的旅程。\r\n#L2#古代神社(日本)#l\r\n#L3#水上市場(泰國)#l\r\n#L4#中心商務區(新加坡)#l\r\n#L5#駁船碼頭城(新加坡)#l\r\n#L7#都會潮流區(馬來西亞)#l");
		} else if (status == 2) {
            if (sel == -1) {
                sel = selection;
            }
            if (sel == 0) {
                cm.sendNext("#b福爾摩沙的西門町#k，想要去這裡旅行嗎？#b西門町#k是福爾摩沙最繁華的街區，有很多高樓大廈跟熱鬧的街道，是個欣欣向榮的城市。");
            } else if (sel == 1) {
                cm.sendNext("#b東方神州的上海#k，想要去這裡旅行嗎？#b上海#k是能夠最深刻體會到東方神州飛速發展的地方。到處都是現代化的建築和整潔的街道，能使第一次訪問東方神州的人們都會驚歎不已。");
            } else if (sel == 2) {
                cm.sendNext("#b日本的古代神社#k，想要去這裡旅行嗎？如果想感受一下日本的精髓，擁有日本特有情懷的神社是最好不過的了。古代神社是供奉著古代傳說中上古神仙的神秘地方。");
            } else if (sel == 3) {
                cm.sendNext("#b泰國的水上市場#k，想要去這裡旅行嗎？水上市場是坐落在清爽河畔的村落。熱帶雨林與泰國的傳統文物相互輝映，呈現出另類的異國情調。");
            } else if (sel == 4) {
                cm.sendNext("#b新加坡的中心商務區#k，想搭乘新加坡航空前往新加坡嗎？中心商務區將會是您離開機場大廳後，第一個接觸到的現代化中心地區，這邊充滿了高聳的大樓及各式各樣的特產，想更了解新加坡的特色，就快來吧。");
            } else if (sel == 5) {
                cm.sendNext("#b新加坡的駁船碼頭城#k，是新加坡的第2大城鎮，駁船碼頭城是坐落在商務中心區往右邊前進的最大城鎮，其中最恐怖的幽靈船，就是現身在這。");
            } else if (sel == 6) {
                cm.sendNext("#b少林寺#k在中國乃至世界聲名遠揚...學武之人夢寐以求的搖籃.少林武功天下無敵,拳腳,兵器樣樣精通.");
            } else if (sel == 7) {
                cm.sendNext("#b馬來西亞的都會潮流區#k，想要去這裡旅行嗎？都會潮流區是坐落在鄉村鎮左邊的大都市，要前往一探馬來西亞當地特色的街頭風景？就先來這裡補給好你的旅行用品。");
            } else {
                cm.dispose();
            }
        } else if (status == 3) {
            if (sel == 0) {
                cm.sendNextPrev("不過，西門町真正的魅力是在於她那夢幻般的夜景。在夜市，能夠享受到與白天的城市不一樣的愉悅感受。那麼，現在就要往熱鬧又開心的#b西門町#k出發啦。");
            } else if (sel == 1) {
                cm.sendNextPrev("而且，出了市區之後映入眼中農村那耳目一新的面貌，會讓你切身體會到什麼叫做上海繁華。那麼，現在就往變化與神秘並存的城市#b上海#k出發吧。");
            } else if (sel == 2) {
                cm.sendNextPrev("在古代神社中可以見到供奉神靈的巫女,還能品嘗到美味的章魚燒、日式炒麵等豐富的日式小吃。那麼，現在就往神秘精粹的#b古代神社#k出發吧！");
            } else if (sel == 3) {
                cm.sendNextPrev("尤其是在城鎮裏也能划船四處遊逛，這可是在別的地方看不到的，是水上市場獨特的風景哦。那麼，現在就往大自然與傳統完美融合為一體的#b水上市場#k出發吧！");
            } else if (sel == 4) {
                cm.sendNextPrev("新加坡的中心商務區，除了有當地的一些任務，更是前往新加坡的玩家們的交通樞紐，除了這些之外，還有著當地特產的小販，喜歡吃酸的、吃辣的這邊應有竟有。那麼，現在就往#b中心商務區#k出發吧！");
            } else if (sel == 5) {
                cm.sendNextPrev("想挑戰幽靈船長？想前往烏魯城鎮？成為解救烏魯城鎮的英雄嗎？也許，從這邊出發是一個不錯的選擇。那麼，現在就前往充滿挑戰與冒險的#b駁船碼頭城#k吧！");
            } else if (sel == 6) {
                cm.sendNextPrev("多少習武之人跨洋過海討教武學...少林寺坐落在嵩山山頂,聳立在雲海之中,美不勝收...準備好了吧 #b少林寺#k等著妳呢!");
            } else if (sel == 7) {
                cm.sendNextPrev("從都會潮流區觸發，前往鄉村鎮途中可體會到不同的異國風情，從鄉村鎮更可以前往夢幻樂園，打到獅王、熊王解救夢幻樂園唷！那麼，現在就出發前往#b都會潮流區#k吧！");
            } else {
                cm.dispose();
            }
        } else if (status == 4) {
			if (cm.getPlayer().getMeso() < cost) {
				cm.sendPrev("請確認一下身上的楓幣是否足夠。");
			} else {
				cm.gainMeso(-cost);
				cm.getPlayer().saveLocation(SavedLocationType.WORLDTOUR);
				cm.warp(togos[sel]);
				cm.dispose();
				}	
			}
		} 				
	}
}