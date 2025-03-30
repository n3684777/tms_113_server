function act() {
    rm.changeMusic("Bgm06/FinalFight");
    rm.getMap().spawnZakum(-10, -215);
    rm.mapMessage("殘暴炎魔被召喚出來了");
	/*
    var eim = rm.getPlayer().getEventInstance();
	if(eim != null){
		eim.startEventTimer(1000 * 60 * 60 * 3);
	}
	*/
	if (!rm.getPlayer().isGM()) {
        rm.getMap().startSpeedRun();
    }
}
