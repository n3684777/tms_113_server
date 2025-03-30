function action(mode, type, selection) {
    var em = cm.getEventManager("Juliet");
    if (em == null) {
	cm.sendOk("請稍後再試。");
	cm.dispose();
	return;
    }
    switch(cm.getPlayer().getMapId()) {
	case 261000021:
	    cm.removeAll(4001130);
	    cm.removeAll(4001131);
	    cm.removeAll(4001132);
	    cm.removeAll(4001133);
	    cm.removeAll(4001134);
	    cm.removeAll(4001135);
	    if (cm.getPlayer().getParty() == null || !cm.isLeader()) {
		cm.sendOk("隊伍的隊長必須在同一張地圖");
	    } else {
		var party = cm.getPlayer().getParty().getMembers();
		var mapId = cm.getPlayer().getMapId();
		var next = true;
		var size = 0;
		var it = party.iterator();
		while (it.hasNext()) {
			var cPlayer = it.next();
			var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
			if (ccPlayer == null || ccPlayer.getLevel() < 70 || ccPlayer.getLevel() > 120) {
				next = false;
				break;
			}
			size += (ccPlayer.isGM() ? 4 : 1);
		}	
		if (next && (cm.getPlayer().isGM() || size == 4)) {
			em.startInstance(cm.getPlayer().getParty(), cm.getPlayer().getMap());
		} else {
			cm.sendOk("您隊伍的所有 4 名成員都必須在此處且等級高於 71。");
		}
	    }
	    break;
	case 926110000:
	    cm.sendOk("你應該嘗試調查這裡。 查看圖書館中的文件，直到找到實驗室的入口。");
	    break;
	case 926110001:
	    cm.sendOk("請消滅所有的怪物！ 我馬上就會跟上你。");
	    break;
	case 926110100:
	    cm.sendOk("這些燒杯有破洞會洩漏。我們必須將可疑的液體倒入燒杯，且不能中斷！這樣才可以將燒杯裝滿！");
	    break;
	case 926110200:
	    if (cm.haveItem(4001131,1)) {
		cm.sendOk("哦，我寫的信！ 謝謝！");
		cm.gainItem(4001131,-1);
		em.setProperty("stage", "1");
	    } else if (cm.haveItem(4001134,1)) {
		cm.gainItem(4001134,-1);
		cm.sendOk("謝謝您！現在請幫我找到資料");
		em.setProperty("stage4", "1");
	    } else if (cm.haveItem(4001135,1)) {
		cm.gainItem(4001135,-1);
		cm.sendOk("謝謝！ 現在請繼續。");
		em.setProperty("stage4", "2");
		cm.getMap().getReactorByName("jnr3_out3").hitReactor(cm.getClient());
	    } else {
	    	cm.sendOk("We must stop the conflict between Alcadno and Zenumist! Find me Alcadno files first, then Zenumist!");
	    }
	    break;
	case 926110300:
	    cm.sendOk("我們必須到達實驗室的頂端。");
	    break;
	case 926110400:
	    cm.sendOk("你準備好了後，我們就可以去拯救我的愛人！");
	    break;
	case 926110401:
	    cm.warpParty(926110500); //urete
	    break;
    }
    cm.dispose();
}