function enter(pi) {
	var returnMap = pi.getSavedLocation("PACHINKO");
	if (returnMap < 0) {
		returnMap = 102000000;
	}
	var target = pi.getPlayer().getClient().getChannelServer().getMapFactory().getMap(returnMap);
	var portal = target.getPortal("pachinkoDoor");
	if (portal == null) {
		portal = target.getPortal(0);
	}
	pi.getPlayer().clearSavedLocation("PACHINKO");
	pi.getPlayer().changeMap(target, portal);
	return true;
}