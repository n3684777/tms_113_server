/*
童話村-深山凶宅 反應堆召喚
*/

function act(){
	rm.spawnMonster(7130400, 1, rm.getPosition(), 5); // 最大生成5隻
	rm.mapMessage(5, "黃色鬼怪出現了。");
}