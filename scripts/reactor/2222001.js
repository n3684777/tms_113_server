function act(){
	rm.dropItems();
	rm.mapMessage(6, "西瓜被成功搶回了! 虎傑也消失了蹤跡。");
	rm.spawnNpc(2073000);
	rm.killAll();
}