﻿/*
童話村-深山凶宅 反應堆召喚
*/

function act(){
	rm.spawnMonster(7130401, 1, rm.getPosition(), 5); // 最大生成5隻
	rm.mapMessage(5, "藍色鬼怪出現了。");
}