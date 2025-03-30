load('nashorn:mozilla_compat.js');
importPackage(java.lang);
function init() {}
function setup(eim, leaderid) {
    for (var i = 925020100; i <= 925020114; i++) {
        var prop = em.getProperty(String.valueOf(i));
        if (prop == null || prop.equals("not")) {
            em.setProperty("" + i, "entered");
            eim = em.newInstance("dojoparty" + leaderid);
            eim.setProperty("select", String.valueOf(i));
            return eim;
        }
    }
    eim.disposeIfPlayerBelow(100, 0);
    return eim;
}
function playerEntry(eim, player) {
    var map = em.getMapFactory().getMap(parseInt(eim.getProperty("select")));
    player.changeMap(map, map.getPortal(0));
}
function changedMap(eim, player, mapid) {}
function scheduledTimeout(eim) {}
function allMonstersDead(eim) {}
function playerDead(eim, player) {}
function playerRevive(eim, player) {}
function playerDisconnected(eim, player) {}
function monsterValue(eim, mobid) {}
function leftParty(eim, player) {}
function disbandParty(eim, player) {}
function clearPQ(eim) {}
function removePlayer(eim, player) {}
function registerCarnivalParty(eim, carnivalparty) {}
function onMapLoad(eim, player) {}
function cancelSchedule() {
}