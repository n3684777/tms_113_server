function enter(pi) {
    if ((pi.getMap().getAllMonstersThreadsafe().size() == 0 || pi.getMap().getMonsterById(9400288) == null)) {
        pi.warpParty(802000802,0); //next
    } else {
        pi.playerMessage(5, "入口還沒有打開, 請先擊殺皇家護衛");
    }
    //pi.warp(802000802, 0);
    return true;
}