/*
	NPC: Corner of the Magic Library
	MAP: Hidden Street - Magic Library (910110000)
	QUEST: Maybe it's Grendel! (20718)
*/
importPackage(Packages.server.life);

var status;
var mobId = 2220100; //Blue Mushroom

function start(){
        if (!cm.getQuestStatus(20718) == 1) {    // thanks Stray, Ari
                cm.dispose();
                return;
        }

	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection){
	if(mode == -1 || (mode == 0 && status == 0)){
		cm.dispose();
		return;
	}
	else if(mode == 0)
		status--;
	else
		status++;


	if(status == 0){
		var map = player.getMap();
		// 檢查地圖上是否已經有怪物
        if (map.getAllMonstersThreadsafe().size() > 0) {
            cm.sendOk("懺抖吧！哈哈哈哈!!");
            cm.dispose();
            return;
        }
		cm.sendOk("一個神秘的黑色身影出現，召喚出許多憤怒的怪物！");
	}
	else if(status == 1){
		var player = cm.getPlayer();
		
		var map = player.getMap();

		for(var i = 0; i < 10; i++)
			map.spawnMonsterOnGroundBelow(MapleLifeFactory.getMonster(mobId), new java.awt.Point(117, 183));
		for(var i = 0; i < 10; i++)
			map.spawnMonsterOnGroundBelow(MapleLifeFactory.getMonster(mobId), new java.awt.Point(4, 183));
		for(var i = 0; i < 10; i++)
			map.spawnMonsterOnGroundBelow(MapleLifeFactory.getMonster(mobId), new java.awt.Point(-109, 183));

		cm.forceCompleteQuest(20718);
		cm.gainExp(4000);

		cm.dispose();
		return;
	}
}