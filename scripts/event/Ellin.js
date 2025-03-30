var minPlayers = 4;
function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}
function setup(eim, leaderid) {
    em.setProperty("state", "1");
    em.setProperty("leader", "true");
    var eim = em.newInstance("Ellin" + leaderid);
    eim.setInstanceMap(930000000).resetFully();
    eim.setInstanceMap(930000100).resetFully();
    eim.setInstanceMap(930000200).resetFully();
    eim.setInstanceMap(930000300).resetFully();
    eim.setInstanceMap(930000400).resetFully();
    var map = eim.setInstanceMap(930000500);
    map.resetFully();
    map.shuffleReactors();
    eim.setInstanceMap(930000600).resetFully();
    eim.setInstanceMap(930000700).resetFully();
    eim.startEventTimer(1800000);
    return eim;
}
function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
    player.tryPartyQuest(1206);
}
function playerRevive(eim, player) {
}
function scheduledTimeout(eim) {
    end(eim);
}
function changedMap(eim, player, mapid) {
    if (mapid < 930000000 || mapid > 930000700) {
        eim.unregisterPlayer(player);
        if (eim.disposeIfPlayerBelow(0, 0)) {
            em.setProperty("state", "0");
            em.setProperty("leader", "true");
        }
    }
}
function playerDisconnected(eim, player) {
    return 0;
}
function monsterValue(eim, mobId) {
    return 1;
}
function playerExit(eim, player) {
    eim.unregisterPlayer(player);
    if (eim.disposeIfPlayerBelow(0, 0)) {
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
    }
}
function end(eim) {
    eim.disposeIfPlayerBelow(100, 930000800);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}
function clearPQ(eim) {
    end(eim);
}
function allMonstersDead(eim) {
}
function leftParty(eim, player) {
    var party = eim.getPlayers();
    if (party.size() < minPlayers) {
        end(eim);
    } else
        playerExit(eim, player);
}
function disbandParty(eim) {
    end(eim);
}
function playerDead(eim, player) {}
function cancelSchedule() {}
function monsterDamaged(eim, player, mobId, damage){}

//玩家使用原地復活
function playerUseWheelRevive(eim, player) {
    player.changeMap(player.getMapId(), 0);
    eim.setProperty("member"+player.getId(), "1");
}
//玩家不使用原地復活
function playerIgnoreWheelRevive(eim, player) {
    eim.unregisterPlayer(player);
    player.changeMap(300030100, 0);
    eim.setProperty("member"+player.getId(), "0");
    if(eim.getPlayerCount()==0){
        end(eim);
    }
}