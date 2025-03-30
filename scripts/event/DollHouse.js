function init() {
    em.setProperty("state", "0");
}
function setup(eim) {
    em.setProperty("state", "1");
    var eim = em.newInstance("DollHouse");
    var map = eim.setInstanceMap(922000010);

    if (map != null) {
        map.shuffleReactors(); // 確保反應物被刷新
		map.resetReactors(); 
    } else {
        em.getChannelServer().getLogger().warn("地圖 922000010 未能正確載入。");
    }
	
    eim.startEventTimer(600000); // 設置10分鐘的事件計時器
    return eim;
}

function playerEntry(eim, player) {
    var map = em.getMapFactory().getMap(922000010);
    player.changeMap(map, map.getPortal(0));
}
function changedMap(eim, player, mapid) {
    switch (mapid) {
        case 103000800:
        case 103000801:
        case 103000802:
        case 103000803:
        case 103000804:
        case 103000805:
            return;
    }
    eim.unregisterPlayer(player);
}
function playerExit(eim, player) {
    clear(eim);
}
function scheduledTimeout(eim) {
    clear(eim);
}
function playerDisconnected(eim, player) {
    em.setProperty("state", "0");
    player.getMap().removePlayer(player);
    player.setMap(em.getChannelServer().getMapFactory().getMap(221024400));
    eim.unregisterPlayer(player);
    eim.dispose();
}
function clear(eim) {
    var map = eim.getChannelServer().getMapFactory().getMap(221024400);
    em.setProperty("state", "0");
    if (eim.getPlayers().legnth != 0) {
        try {
            var player = eim.getPlayers().get(0);
            player.changeMap(map, map.getPortal(0));
            eim.unregisterPlayer(player);
        } catch (e) {
        }
    }
    eim.dispose();
}
function cancelSchedule() {
}
function monsterDamaged(eim, player, mobId, damage){}
