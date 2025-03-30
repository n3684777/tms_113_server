var status = -1;


function action(mode, type, selection) {
	var eim = cm.getPlayer().getEventInstance();
	if (cm.getMapId() == 240050100) {
		var number_1 = eim.getProperty("stageclear_1");
		var number_2 = eim.getProperty("stageclear_2");
		var number_3 = eim.getProperty("stageclear_3");
		var number_4 = eim.getProperty("stageclear_4");
		if(cm.haveItem(4001088, 1) && number_1 == null){
			var outSide_Map = eim.getMapFactory().getMap(240050101);
			if(number_1 == null){
				outSide_Map.mapMessage(6, "位於迷宮室的隊友透過鑰匙將通往第二個門打開了！！");
				eim.setProperty("stageclear_1", 1);
				eim.setProperty("doorstatus_1", 0);
				cm.showEffect(true, "quest/party/clear");
                cm.playSound(true, "Party1/Clear");
				cm.gainItem(4001088, -1);
				cm.dispose();
				return;
			}
			
		}if(cm.haveItem(4001089, 1) && number_2 == null){
			var outSide_Map = eim.getMapFactory().getMap(240050102);
			if(number_2 == null){
				outSide_Map.mapMessage(6, "位於迷宮室的隊友透過鑰匙將通往第三個門打開了！！");
				eim.setProperty("stageclear_2", 1);
				eim.setProperty("doorstatus_2", 0);
				cm.showEffect(true, "quest/party/clear");
                cm.playSound(true, "Party1/Clear");
				cm.gainItem(4001089, -1);
				cm.dispose();
				return;
			}
			
		}if(cm.haveItem(4001090, 1) && number_3 == null){
			var outSide_Map = eim.getMapFactory().getMap(240050103);
			if(number_3 == null){
				outSide_Map.mapMessage(6, "位於迷宮室的隊友透過鑰匙將通往第四個門打開了！！");
				eim.setProperty("stageclear_3", 1);
				eim.setProperty("doorstatus_3", 0);
				cm.showEffect(true, "quest/party/clear");
                cm.playSound(true, "Party1/Clear");
				cm.gainItem(4001090, -1);
				cm.dispose();
				return;
			}
			
		}if(cm.haveItem(4001091, 1) && number_4 == null){
			var outSide_Map = eim.getMapFactory().getMap(240050104);
			if(number_4 == null){
				outSide_Map.mapMessage(6, "位於迷宮室的隊友透過鑰匙將通往第五個門打開了！！");
				eim.setProperty("stageclear_4", 1);
				eim.setProperty("doorstatus_4", 0);
				cm.showEffect(true, "quest/party/clear");
                cm.playSound(true, "Party1/Clear");
				cm.gainItem(4001091, -1);
				cm.dispose();
				return;
			}
			
		}else {
		    var number = eim.getProperty("stageclear_4");
			if(number == null){
				cm.sendOk("該區域需要保留一名玩家，守候傳入的鑰匙。");
				cm.dispose();
			}else{
				cm.sendOk("你們通過了五道關卡，快從右方里程碑接續旅程吧！");
				cm.dispose();
			}
             
            }
        }
}
			
