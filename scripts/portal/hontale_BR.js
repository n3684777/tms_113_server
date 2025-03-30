var boss = "HorntailBattle";
var special_boss = "HorntailBattle_special";

function enter(pi) {
    var player = pi.getPlayer();
    var mapId = player.getMapId();
    var eim = pi.getEventInstance();
    var start;
    var stage;
    if (eim.getName().equals(boss) || eim.getName().equals(special_boss)) {
        start = eim.getProperty("start");
    } else {
        stage = eim.getProperty("stage");
    }
    if (mapId == 240060000) {
        if (start == "2" && eim.getName().equals(boss)) {
            pi.warp(240060100, 0);
            return true;
        } else if (stage == "2" || stage == "3") {
            var map = eim.getMapInstance(1);
            player.changeMap(map, map.getPortal(0));
            return true;
        } else {
            player.dropMessage(6, "門似乎被封印了");
            return false;
        }
    } else if (mapId == 240060100) {
        if (start == "3" || start == "4"){
            pi.warp(240060200, 0);
            return true;
        } else if (stage == "3" || stage == "4") {
            var map = eim.getMapInstance(2);
            player.changeMap(map, map.getPortal(0));
            return true;
        } else {
            player.dropMessage(6, "門似乎被封印了");
            return false;
        }
    }
    if (mapId == 240060001) {
        if (start == "2" && eim.getName().equals(special_boss)) {
            pi.warp(240060101, 0);
            return true;
        } else {
            player.dropMessage(6, "門似乎被封印了");
            return false;
        }
    } else if (mapId == 240060101) {
        if (start == "3" && eim.getName().equals(special_boss)){
            pi.warp(240060201, 0);
            return true;
        } else {
            player.dropMessage(6, "門似乎被封印了");
            return false;
        }
    }

    return true;
}