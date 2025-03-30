var eventmapid = 211070200; //BOSS出線地圖
var returnmap = 211061001; //回到的地圖

var monster = 8840000; //BOSS代碼
var spawnpoint = [-556,-181]; //座標 如果要查詢!WHEREAMI

var eventname = "凡雷副本"; 
function init() {
    // After loading, ChannelServer
}

function setup(partyid) {
    var instanceName = eventname + partyid;

    var eim = em.newInstance(instanceName);
    // If there are more than 1 map for this, you'll need to do mapid + instancename
    var map = eim.createInstanceMapS(eventmapid);
    //map.toggleDrops();
		
    map.spawnNpc(9209101, new java.awt.Point(spawnpoint[0], spawnpoint[1]));
    map.addDrops(monster,2049100,999999,6,6);
    map.addDrops(monster,2340000,999999,6,6);
    map.addDrops(monster,2049100,999999,6,6);
    map.addDrops(monster,2022179,999999,6,6);
    map.addDrops(monster,1012172,999999,1,1);
    map.addDrops(monster,1112597,50000,1,1);
    map.addDrops(monster,1132211,50000,1,1);
    beginQuest(eim);
    return eim;
}

function beginQuest(eim) { // Custom function
    if (eim != null) {
        eim.startEventTimer(5000); // After 5 seconds -> scheduledTimeout()
    }
}

function monsterSpawn(eim) { // Custom function
    var mob = em.getMonster(monster);
    var modified = em.newMonsterStats();
    modified.setOExp(mob.getMobExp() * 2);
    modified.setOHp(mob.getMobMaxHp() * 3); //1b
    modified.setOMp(mob.getMobMaxMp() * 1);
    mob.setOverrideStats(modified);
    eim.registerMonster(mob);

    var map = eim.getMapInstance(0);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(spawnpoint[0], spawnpoint[1]));
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
}

function changedMap(eim, player, mapid) {
    if (mapid != eventmapid) {
        eim.unregisterPlayer(player);

        eim.disposeIfPlayerBelow(0, 0);
    }
}

function scheduledTimeout(eim) {
    if( eim == null ){
	return;
	}else{
        monsterSpawn(eim);		
	}
}

function allMonstersDead(eim) {

		eim.setEventCount(eventname);
		eim.broadcastPlayerMsg(5, "恭喜挑戰通過。");
    }
    // When invoking unregisterMonster(MapleMonster mob) OR killed
    // Happens only when size = 0


function playerDead(eim, player) {
	player.changeMap(eim.getMapInstance(returnmap), eim.getMapInstance(returnmap).getPortal(0));
    // Happens when player dies
}

function playerRevive(eim, player) {
    player.addHP(50);
    player.changeMap(eim.getMapInstance(returnmap), eim.getMapInstance(returnmap).getPortal(0));
	eim.broadcastPlayerMsg(5, player.getName() + " 因為死亡離開了副本");
    return true;
}

function playerDisconnected(eim, player) {
    eim.unregisterPlayer(player);
	player.setMap(eim.getMapInstance(returnmap));

	eim.broadcastPlayerMsg(5, player.getName() + " 離開了副本");

}

function monsterValue(eim, mobid) {
    return 0;
    // Invoked when a monster that's registered has been killed
    // return x amount for this player - "Saved Points"
}

function leftParty(eim, player) {
    // Happens when a player left the party
    eim.unregisterPlayer(player);

    var map = em.getMapFactory().getMap(returnmap);
    player.changeMap(map, map.getPortal(0));

    eim.disposeIfPlayerBelow(0, 0);
}

function disbandParty(eim, player) {
    // Boot whole party and end
    eim.disposeIfPlayerBelow(100, returnmap);
}

function clearPQ(eim) {
    // Happens when the function EventInstanceManager.finishPQ() is invoked by NPC/Reactor script
}

function removePlayer(eim, player) {
    eim.dispose();
    // Happens when the funtion NPCConversationalManager.removePlayerFromInstance() is invoked
}

function registerCarnivalParty(eim, carnivalparty) {
    // Happens when carnival PQ is started. - Unused for now.
}

function onMapLoad(eim, player) {
    // Happens when player change map - Unused for now.
}

function cancelSchedule() {}

function dispose(eim) {
    
}