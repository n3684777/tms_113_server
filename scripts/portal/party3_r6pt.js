var 開啟紀錄 = true; //開啟後每一個小層會記錄(簡單模式)
function enter(pi) {
    try {
        var em = pi.getEventManager("OrbisPQ");
        if (em != null && em.getProperty("stage6_" + (pi.getPortal().getName().substring(2, 5)) + "").equals("1") /*|| pi.getPortal().getName().equals("rp164")*/){
            //pi.warpS(pi.getMapId(), (pi.getPortal().getName().startsWith("rp08") ? 2 : pi.getPortal().getName().startsWith("rp164") ? 4 : (pi.getPortal().getId() + 4)));
            pi.instantMapWarp(parseInt(pi.getPortal().getName().substring(2, 4)) + 5);
            if (pi.getPortal().getName().startsWith("rp0")) {
                pi.getMap().changeEnvironment("an" + pi.getPortal().getName().substring(3, 5), 2);
            } else if (pi.getPortal().getName().startsWith("rp1")) {
                pi.getMap().changeEnvironment("an" + pi.getPortal().getName().substring(2, 5), 2);
            }
        } else {
            if (開啟紀錄) {
                var portalNumber = parseInt(pi.getPortal().getName().substring(2, 4));
                if (portalNumber >= 1 && portalNumber <= 4) {
                    pi.instantMapWarp(22);
                } else if (portalNumber >= 5 && portalNumber <= 8) {
                    pi.instantMapWarp(9);
                } else if (portalNumber >= 9 && portalNumber <= 12) {
                    pi.instantMapWarp(13);
                } else if (portalNumber >= 13 && portalNumber <= 16) {
                    pi.instantMapWarp(17);
                }
            } else {
                pi.instantMapWarp(22);
            }
        //pi.warpS(pi.getMapId(), (pi.getPortal().getName().startsWith("rp01") ? 5 : (pi.getPortal().getName().startsWith("rp05") ? 1 : (pi.getPortal().getId() - 4))));
        }
        //pi.getMap().changeEnvironment("an13", 2);
        //pi.getPlayer().dropMessage(5, "id:" + pi.getPortal().getId() + " Script: " + pi.getPortal().getName() + " an:" + pi.getPortal().getName().substring(2, 5));
    } catch (e) {
        pi.getPlayer().dropMessage(5, "Script: " + pi.getPortal().getName() + " Error: " + e);
    }
}
