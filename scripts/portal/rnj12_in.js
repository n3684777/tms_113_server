function enter(pi) {
    if (pi.getMap().getCharactersSize() == 4 || pi.getMap(926100401).getCharactersSize() > 0) {
	pi.warpParty(926100401,0);
    } else {
	pi.playerMessage(5, "並不是每個人都在這裡。");
    }
}