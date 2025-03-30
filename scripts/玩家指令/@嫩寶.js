function start() {
	var player = cm.getPlayer();
	if (player.getLevel() < 10) {
		cm.dropMsg(5, "必須要達到 10 級才能使用該指令");
		return false;
	}
	cm.spawnMonster(100100,10,0,3,0,0,1);
}