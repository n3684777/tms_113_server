var em;

function enter(pi) {
    var elevator = pi.getClient().getChannelServer().getEventSM().getEventManager("elevator");
    if (pi.getMapId() == 222020100) {
        if (elevator != null && elevator.getProperty("isDown").equals("true")) {
            pi.playPortalSE();
            pi.warp(222020110, "sp");
        } else {
            pi.playerMessage("電梯尚未到達");
        }
    } else { // 222020200
        if (elevator != null && elevator.getProperty("isUp").equals("true")) {
            pi.playPortalSE();
            pi.warp(222020210, "sp");
        } else {
            pi.playerMessage("電梯尚未到達");
        }
    }
}
