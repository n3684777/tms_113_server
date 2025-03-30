function init() {
    scheduleNew();
}

function scheduleNew() {
    em.setProperty("isUp", "false");
    em.setProperty("isDown", "false");
    em.setProperty("inTransit", "false");
    onDown();
}

function onDown() {
    if (em.getProperty("inTransit") === "false") {
        em.setProperty("inTransit", "true");
        em.getChannelServer().getMapFactory().getMap(222020100).resetReactors();
        em.warpAllPlayer(222020210, 222020211);
        em.setProperty("isDown", "true");
        em.setProperty("isUp", "false");
        em.schedule("goingUp", 60000);
    }
}

function goingUp() {
    if (em.getProperty("isDown") === "true" && em.getProperty("inTransit") === "true") {
        em.warpAllPlayer(222020110, 222020111);
        em.setProperty("isDown", "false");
        em.schedule("onUp", 50000);
        em.getChannelServer().getMapFactory().getMap(222020100).setReactorState();
        em.setProperty("inTransit", "false");
    }
}

function onUp() {
    if (em.getProperty("inTransit") === "false") {
        em.setProperty("inTransit", "true");
        em.getChannelServer().getMapFactory().getMap(222020200).resetReactors();
        em.warpAllPlayer(222020111, 222020200);
        em.setProperty("isUp", "true");
        em.setProperty("isDown", "false");
        em.schedule("goingDown", 60000);
    }
}

function goingDown() {
    if (em.getProperty("isUp") === "true" && em.getProperty("inTransit") === "true") {
        em.warpAllPlayer(222020211, 222020100);
        em.setProperty("isUp", "false");
        em.schedule("onDown", 50000);
        em.getChannelServer().getMapFactory().getMap(222020200).setReactorState();
        em.setProperty("inTransit", "false");
    }
}

function cancelSchedule() {}

function monsterDamaged(eim, player, mobId, damage) {}
