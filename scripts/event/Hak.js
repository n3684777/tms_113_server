var returnTo = new Array(200000141, 250000100);
var rideTo = new Array(250000100, 200000141);
var birdRide = new Array(200090300, 200090310);
var myRide;
var returnMap;
var map;
var docked;
var timeOnRide = 60;
function init() {
    em.setProperty("isRiding", "false");
}
function playerEntry(eim, player) {
    myRide = em.getProperty("myRide");
    docked = em.getChannelServer().getMapFactory().getMap(rideTo[myRide]);
    returnMap = em.getChannelServer().getMapFactory().getMap(returnTo[myRide]);
    onRide = em.getChannelServer().getMapFactory().getMap(birdRide[myRide]);
    em.setProperty("isRiding", "true");
    em.schedule("timeOut", 60000);
    player.changeMap(onRide, onRide.getPortal(0));
}
function timeout() {
    returnMap = em.getChannelServer().getMapFactory().getMap(returnTo[myRide]);
    em.warpAllPlayer(returnMap);
    em.setProperty("isRiding", "false");
}
function playerDisconnected(eim, player) {
    return 0;
}
function cancelSchedule() {
}
