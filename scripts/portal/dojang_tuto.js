function enter(pi) {
    if (pi.getPlayer().getMap().getMonsterById(9300216) != null) {
        pi.warp(925020001, 0);
    } else {
        pi.getPlayer().dropMessage(6, "所以，武功：哈哈！你要逃跑像一個懦夫？我不會讓你得逞，很容易！");
    }
    return true;
}