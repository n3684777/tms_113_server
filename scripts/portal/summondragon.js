function enter(pi) {
    if (pi.haveItem(4001094)) {
        var baby = pi.getMap().getReactorByName("dragonBaby");
        if (baby.getState() == 0) {
            baby.forceHitReactor(1);
            pi.playerMessage(5, "懷裡的九靈龍的蛋發出神秘的光芒，回到了巢內。");
            pi.gainItem(4001094, -1);
        }



	//pi.getMap().getReactorByName("dragonBaby").hitReactor(pi.getClient());
	//pi.getMap().getReactorByName("dragonBaby2").hitReactor(pi.getClient());
	//pi.playerMessage(5, "The Egg of Nine Spirit, which was comfortably nested, has emitted a mysterious light and has returned to its nest.");
	//pi.gainItem(4001094, -1);
    }
}