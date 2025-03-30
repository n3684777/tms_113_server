var minPlayers = 1;

function init() {
}


function monsterValue(eim, mobId) {
    return 1;
}

function monsterDamaged(eim, player, mobid, damage) {
    // 填寫你的程式碼這裡
	return 1;
}

function setup(mapid) {
    var eim = em.newInstance("MonsterPark" + mapid);
	var map = parseInt(mapid);
	var max = (map / 1000000 == 952 ? 5 : 6);

	eim.setProperty("max", "" + max);
	eim.setProperty("boss", "0");
	for (var i = 0; i < max; i++) {
        eim.setInstanceMap(map + (i * 100)).resetFully();
	    eim.setProperty("map" + i, "" + (map + (i * 100)));
		
	}
	
	
	
	
    eim.startEventTimer(1200000); //20 mins
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
}

function playerRevive(eim, player) {
}

function scheduledTimeout(eim) {
    end(eim);
}

function changedMap(eim, player, mapid) {
    for (var i = 0; i < parseInt(eim.getProperty("max")); i++) {
		if(eim.getProperty("boss") == 0){
			if(mapid == 952000500){
				var mob0 = em.getMonster(9800003);
				var modified = em.newMonsterStats();
				var map_2 = eim.setInstanceMap(952000500);
				modified.setOMp(mob0.getMobMaxMp());
				modified.setOHp(mob0.getMobMaxHp() * 5.0);
				mob0.setOverrideStats(modified);
				eim.registerMonster(mob0);
				map_2.spawnMonsterOnGroundBelow(mob0, new java.awt.Point(0, -181));
				eim.setProperty("boss", "1");
			}if(mapid == 952010500){
				var monsterIds = [9800009, 9800008];
				var randomIndex = Math.floor(Math.random() * monsterIds.length);
				var mob0 = em.getMonster(monsterIds[randomIndex]);
				var modified = em.newMonsterStats();
				var map_2 = eim.setInstanceMap(952010500);
				modified.setOMp(mob0.getMobMaxMp());
				modified.setOHp(mob0.getMobMaxHp() * 5.0);
				mob0.setOverrideStats(modified);
				eim.registerMonster(mob0);
				map_2.spawnMonsterOnGroundBelow(mob0, new java.awt.Point(0, -181));
				eim.setProperty("boss", "1");
			}if(mapid == 952020500){
				var mob0 = em.getMonster(9800016);
				var modified = em.newMonsterStats();
				var map_2 = eim.setInstanceMap(952020500);
				modified.setOMp(mob0.getMobMaxMp());
				modified.setOHp(mob0.getMobMaxHp() * 5.0);
				mob0.setOverrideStats(modified);
				eim.registerMonster(mob0);
				map_2.spawnMonsterOnGroundBelow(mob0, new java.awt.Point(0, -181));
				eim.setProperty("boss", "1");
			}if(mapid == 952030500){
				var monsterIds = [9800022, 9800024];
				var randomIndex = Math.floor(Math.random() * monsterIds.length);
				var mob0 = em.getMonster(monsterIds[randomIndex]);
				var modified = em.newMonsterStats();
				var map_2 = eim.setInstanceMap(952030500);
				modified.setOMp(mob0.getMobMaxMp());
				modified.setOHp(mob0.getMobMaxHp() * 5.0);
				mob0.setOverrideStats(modified);
				eim.registerMonster(mob0);
				map_2.spawnMonsterOnGroundBelow(mob0, new java.awt.Point(0, -181));
				eim.setProperty("boss", "1");
			}if(mapid == 952040500){
				var monsterIds = [9800031, 9800031];
				var randomIndex = Math.floor(Math.random() * monsterIds.length);
				var mob0 = em.getMonster(monsterIds[randomIndex]);
				var modified = em.newMonsterStats();
				var map_2 = eim.setInstanceMap(952040500);
				modified.setOMp(mob0.getMobMaxMp());
				modified.setOHp(mob0.getMobMaxHp() * 5.0);
				mob0.setOverrideStats(modified);
				eim.registerMonster(mob0);
				map_2.spawnMonsterOnGroundBelow(mob0, new java.awt.Point(0, -181));
				eim.setProperty("boss", "1");
			}if(mapid == 952050500){
				var monsterIds = [9800031, 9800031];
				var randomIndex = Math.floor(Math.random() * monsterIds.length);
				var mob0 = em.getMonster(monsterIds[randomIndex]);
				var modified = em.newMonsterStats();
				var map_2 = eim.setInstanceMap(952050500);
				modified.setOMp(mob0.getMobMaxMp());
				modified.setOHp(mob0.getMobMaxHp() * 5.0);
				mob0.setOverrideStats(modified);
				eim.registerMonster(mob0);
				map_2.spawnMonsterOnGroundBelow(mob0, new java.awt.Point(0, -181));
				eim.setProperty("boss", "1");
			}if(mapid == 953000500){
				var monsterIds = [9800037, 9800038];
				var randomIndex = Math.floor(Math.random() * monsterIds.length);
				var mob0 = em.getMonster(monsterIds[randomIndex]);
				var modified = em.newMonsterStats();
				var map_2 = eim.setInstanceMap(953000500);
				modified.setOMp(mob0.getMobMaxMp());
				modified.setOHp(mob0.getMobMaxHp() * 5.0);
				mob0.setOverrideStats(modified);
				eim.registerMonster(mob0);
				map_2.spawnMonsterOnGroundBelow(mob0, new java.awt.Point(0, -181));
				eim.setProperty("boss", "1");
			}if(mapid == 953010500){
				var monsterIds = [9800044, 9800044];
				var randomIndex = Math.floor(Math.random() * monsterIds.length);
				var mob0 = em.getMonster(monsterIds[randomIndex]);
				var modified = em.newMonsterStats();
				var map_2 = eim.setInstanceMap(953010500);
				modified.setOMp(mob0.getMobMaxMp());
				modified.setOHp(mob0.getMobMaxHp() * 5.0);
				mob0.setOverrideStats(modified);
				eim.registerMonster(mob0);
				map_2.spawnMonsterOnGroundBelow(mob0, new java.awt.Point(0, -181));
				eim.setProperty("boss", "1");
			}if(mapid == 953020500){
				var monsterIds = [9800050, 9800050, 9800050];
				var randomIndex = Math.floor(Math.random() * monsterIds.length);
				var mob0 = em.getMonster(monsterIds[randomIndex]);
				var modified = em.newMonsterStats();
				var map_2 = eim.setInstanceMap(953020500);
				modified.setOMp(mob0.getMobMaxMp());
				modified.setOHp(mob0.getMobMaxHp() * 5.0);
				mob0.setOverrideStats(modified);
				eim.registerMonster(mob0);
				map_2.spawnMonsterOnGroundBelow(mob0, new java.awt.Point(0, -181));
				eim.setProperty("boss", "1");
			}if(mapid == 953030500){
				var monsterIds = [9800056, 9800056, 9800056];
				var randomIndex = Math.floor(Math.random() * monsterIds.length);
				var mob0 = em.getMonster(monsterIds[randomIndex]);
				var modified = em.newMonsterStats();
				var map_2 = eim.setInstanceMap(953030500);
				modified.setOMp(mob0.getMobMaxMp());
				modified.setOHp(mob0.getMobMaxHp() * 5.0);
				mob0.setOverrideStats(modified);
				eim.registerMonster(mob0);
				map_2.spawnMonsterOnGroundBelow(mob0, new java.awt.Point(0, -181));
				eim.setProperty("boss", "1");
			}if(mapid == 953040500){
				var monsterIds = [9800063, 9800064, 9800065, 9800066];
				var randomIndex = Math.floor(Math.random() * monsterIds.length);
				var mob0 = em.getMonster(monsterIds[randomIndex]);
				var modified = em.newMonsterStats();
				var map_2 = eim.setInstanceMap(953040500);
				modified.setOMp(mob0.getMobMaxMp());
				modified.setOHp(mob0.getMobMaxHp() * 5.0);
				mob0.setOverrideStats(modified);
				eim.registerMonster(mob0);
				map_2.spawnMonsterOnGroundBelow(mob0, new java.awt.Point(0, -181));
				eim.setProperty("boss", "1");
			}if(mapid == 953050500){
				var monsterIds = [9800072, 9800072, 9800072, 9800072];
				var randomIndex = Math.floor(Math.random() * monsterIds.length);
				var mob0 = em.getMonster(monsterIds[randomIndex]);
				var modified = em.newMonsterStats();
				var map_2 = eim.setInstanceMap(953050500);
				modified.setOMp(mob0.getMobMaxMp());
				modified.setOHp(mob0.getMobMaxHp() * 5.0);
				mob0.setOverrideStats(modified);
				eim.registerMonster(mob0);
				map_2.spawnMonsterOnGroundBelow(mob0, new java.awt.Point(0, -181));
				eim.setProperty("boss", "1");
			}if(mapid == 954000500){
				var monsterIds = [9800075, 9800082];
				var randomIndex = Math.floor(Math.random() * monsterIds.length);
				var mob0 = em.getMonster(monsterIds[randomIndex]);
				var modified = em.newMonsterStats();
				var map_2 = eim.setInstanceMap(954000500);
				modified.setOMp(mob0.getMobMaxMp());
				modified.setOHp(mob0.getMobMaxHp() * 5.0);
				mob0.setOverrideStats(modified);
				eim.registerMonster(mob0);
				map_2.spawnMonsterOnGroundBelow(mob0, new java.awt.Point(0, -181));
				eim.setProperty("boss", "1");
			}if(mapid == 954010500){
				var monsterIds = [9800090, 9800091];
				var randomIndex = Math.floor(Math.random() * monsterIds.length);
				var mob0 = em.getMonster(monsterIds[randomIndex]);
				var modified = em.newMonsterStats();
				var map_2 = eim.setInstanceMap(954010500);
				modified.setOMp(mob0.getMobMaxMp());
				modified.setOHp(mob0.getMobMaxHp() * 5.0);
				mob0.setOverrideStats(modified);
				eim.registerMonster(mob0);
				map_2.spawnMonsterOnGroundBelow(mob0, new java.awt.Point(0, -181));
				eim.setProperty("boss", "1");
			}if(mapid == 954020500){
				var monsterIds = [9800099, 9800099];
				var randomIndex = Math.floor(Math.random() * monsterIds.length);
				var mob0 = em.getMonster(monsterIds[randomIndex]);
				var modified = em.newMonsterStats();
				var map_2 = eim.setInstanceMap(954020500);
				modified.setOMp(mob0.getMobMaxMp());
				modified.setOHp(mob0.getMobMaxHp() * 5.0);
				mob0.setOverrideStats(modified);
				eim.registerMonster(mob0);
				map_2.spawnMonsterOnGroundBelow(mob0, new java.awt.Point(0, -181));
				eim.setProperty("boss", "1");
			}if(mapid == 954030500){
				var monsterIds = [9800108, 9800109];
				var randomIndex = Math.floor(Math.random() * monsterIds.length);
				var mob0 = em.getMonster(monsterIds[randomIndex]);
				var modified = em.newMonsterStats();
				var map_2 = eim.setInstanceMap(954030500);
				modified.setOMp(mob0.getMobMaxMp());
				modified.setOHp(mob0.getMobMaxHp() * 5.0);
				mob0.setOverrideStats(modified);
				eim.registerMonster(mob0);
				map_2.spawnMonsterOnGroundBelow(mob0, new java.awt.Point(0, -181));
				eim.setProperty("boss", "1");
			}if(mapid == 954040500){
				var monsterIds = [9800113, 9800113];
				var randomIndex = Math.floor(Math.random() * monsterIds.length);
				var mob0 = em.getMonster(monsterIds[randomIndex]);
				var modified = em.newMonsterStats();
				var map_2 = eim.setInstanceMap(954040500);
				modified.setOMp(mob0.getMobMaxMp());
				modified.setOHp(mob0.getMobMaxHp() * 5.0);
				mob0.setOverrideStats(modified);
				eim.registerMonster(mob0);
				map_2.spawnMonsterOnGroundBelow(mob0, new java.awt.Point(0, -181));
				eim.setProperty("boss", "1");
			}if(mapid == 954050500){
				var monsterIds = [9800119, 9800120, 9800121, 9800122, 9800123, 9800124];
				var randomIndex = Math.floor(Math.random() * monsterIds.length);
				var mob0 = em.getMonster(monsterIds[randomIndex]);
				var modified = em.newMonsterStats();
				var map_2 = eim.setInstanceMap(954050500);
				modified.setOMp(mob0.getMobMaxMp());
				modified.setOHp(mob0.getMobMaxHp() * 5.0);
				mob0.setOverrideStats(modified);
				eim.registerMonster(mob0);
				map_2.spawnMonsterOnGroundBelow(mob0, new java.awt.Point(0, -181));
				eim.setProperty("boss", "1");
			}
			
		}
		
		if (mapid == parseInt(eim.getProperty("map" + i))) {
			return;
		}
    }
	eim.unregisterPlayer(player);

	eim.disposeIfPlayerBelow(0, 0);
}

function playerDisconnected(eim, player) {
    return 0;
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);

	eim.disposeIfPlayerBelow(0, 0);
}

function end(eim) {
    eim.disposeIfPlayerBelow(100, 951000000);
}

function clearPQ(eim) {
    end(eim);
}

function allMonstersDead(eim) {
}

function leftParty (eim, player) {
    // If only 2 players are left, uncompletable:
	end(eim);
}
function disbandParty (eim) {
	end(eim);
}
function playerDead(eim, player) {}
function cancelSchedule() {}