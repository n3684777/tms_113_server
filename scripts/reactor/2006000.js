function act() {
    rm.spawnNpc(2013001);
    var em = rm.getEventManager("OrbisPQ");
    if (em != null) {
        rm.givePartyExp(6000);
        em.setProperty("pre", "1");
    }
}