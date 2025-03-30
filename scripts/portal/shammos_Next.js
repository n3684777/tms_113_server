function enter(pi) {
try {
	if (pi.getPlayer().getParty() != null && pi.isLeader()) {
		if (pi.getPlayer().getEventInstance().getProperty("move").equals("3")) {
			pi.getPlayer().getEventInstance().setProperty("move", "4");
			pi.warpParty(((pi.getPlayer().getMapId() / 100) + 1) * 100 - (pi.getPlayer().getMapId() % 100));
		} else if (pi.getPlayer().getEventInstance().getProperty("move").equals("11")) {
			pi.getPlayer().getEventInstance().setProperty("move", "12");
			pi.warpParty(((pi.getPlayer().getMapId() / 100) + 1) * 100 - (pi.getPlayer().getMapId() % 100));
		}
		pi.playPortalSE();
	} else {
		pi.playerMessage(5,"此傳送門只有隊長能使用");
	}
} catch (e) {
	pi.playerMessage(5, "Error: " + e);
}
}