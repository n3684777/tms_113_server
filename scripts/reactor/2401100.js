function act() {
    rm.changeMusic("Bgm14/HonTale");
    rm.spawnMonster(8810126, 71, 260);
    rm.mapMessage("洞穴傳來震耳的動搖聲…闇黑龍王…終於出現了它的蹤跡！");
    if (!rm.getPlayer().isGM()) {
        rm.getMap().startSpeedRun();
    }
}