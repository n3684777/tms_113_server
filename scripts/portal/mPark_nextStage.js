function enter(pi) {
    if (pi.getMap().getAllMonstersThreadsafe().size() == 0) {
	pi.warpParty(pi.getMapId() + 100,0); //next
    } else {
	pi.playerMessage(5, "入口還沒有打開");
    }
}