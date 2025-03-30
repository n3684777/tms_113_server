load('nashorn:mozilla_compat.js');
importPackage(org.rise.server.maps);
importPackage(org.rise.net.channel);
importPackage(org.rise.tools);
function enter(pi) {
    var nextMap = 670010500;
    var eim = pi.getPlayer().getEventInstance();
    var target = eim.getMapInstance(nextMap);
    var targetPortal = target.getPortal("st00");
    var avail = eim.getProperty("3stageclear");
    if (avail == null) {
        pi.getClient().getSession().write(MaplePacketCreator.serverNotice(6, "This door is closed."));
        return false;
    } else {
        pi.getPlayer().changeMap(target, targetPortal);
        return true;
    }
}