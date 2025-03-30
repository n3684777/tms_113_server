function start() {
	var player = cm.getPlayer();
	if (player.getLevel() < 10 && player.getJob() != 200) {
		cm.dropMsg(5, "必須要達到 10 級才能使用該指令");
		return false;
	}
	
	cm.warp(910000000);
}