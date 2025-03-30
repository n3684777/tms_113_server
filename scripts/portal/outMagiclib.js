function enter(pi) {
	if(pi.getMap().getAllMonstersThreadsafe().size() > 0){
		pi.playerMessage("在打敗所有藍色蘑菇之前不能離開。");
		return false;
	}
	else{

		pi.warp(101000000, 26);

		if(pi.getQuestStatus(20718) == 2){
			pi.openNpc(1103003, "MaybeItsGrendel_end");
		}
		
		return true;
	}
}