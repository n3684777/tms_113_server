function enter(pi) {
        if (pi.getPlayer().getParty() != null && pi.getMap().getAllMonstersThreadsafe().size() == 0 && pi.isLeader()) {
                //pi.warpParty_Instanced(921120600);
                pi.warpParty(921120100);
                pi.playPortalSE();
        } else {
                pi.playerMessage(5,"傳送門尚未開啟請先消滅地圖上的怪物!!");
        }
}