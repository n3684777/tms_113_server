load('nashorn:mozilla_compat.js');
importPackage(Packages.client);
importPackage(Packages.tools);
importPackage(Packages.server.life);

//變數跟時間設定區
var closeTime=120000; //船關閉搭乘的時間
var beginTime=120000; //船啟航的時間
var rideTime=600000; //搭船所需要的時間
var invasionTime=60000; //確認地域巴洛古召喚的時間

var Orbis_btf, Boat_to_Orbis, Orbis_Boat_Cabin, Orbis_docked;
var Ellinia_btf, Ellinia_Boat_Cabin, Ellinia_docked;

function init() {
    initializeMaps();
    scheduleNew();
}

function initializeMaps() {
    var mapFactory = em.getChannelServer().getMapFactory();
    Orbis_btf = mapFactory.getMap(200000112);
    Ellinia_btf = mapFactory.getMap(101000301);
    Boat_to_Orbis = mapFactory.getMap(200090010);
    Boat_to_Ellinia = mapFactory.getMap(200090000);
    Orbis_Boat_Cabin = mapFactory.getMap(200090011);
    Ellinia_Boat_Cabin = mapFactory.getMap(200090001);
    Orbis_docked = mapFactory.getMap(200000100);
    Ellinia_docked = mapFactory.getMap(101000300);
    Orbis_Station = mapFactory.getMap(200000111);
    OBoatsetup();
    EBoatsetup();
}

function scheduleNew() {
    setDockedState(true);
    em.setProperty("entry", "true");
    em.setProperty("haveBalrog", "false");
    em.setProperty("haveBalrog1", "false");
    em.schedule("stopentry", closeTime);
    em.schedule("takeoff", beginTime);
}

function stopentry() {
    em.setProperty("entry", "false");
    resetReactors();
}

function takeoff() {
    em.setProperty("docked", "false");
    moveCharacters(Orbis_btf, Boat_to_Ellinia);
    moveCharacters(Ellinia_btf, Boat_to_Orbis);
    setDockedState(false);
    em.schedule("invasion", invasionTime);
    em.schedule("arrived", rideTime);
}

function arrived() {
    moveCharacters(Boat_to_Orbis, Orbis_docked);
    moveCharacters(Orbis_Boat_Cabin, Orbis_docked);
    moveCharacters(Boat_to_Ellinia, Ellinia_docked);
    moveCharacters(Ellinia_Boat_Cabin, Ellinia_docked);
    killAllMonsters();
    scheduleNew();
}

function invasion() {
    var numspawn = determineSpawnCount();
    if (numspawn > 0) {
        spawnMonsters(numspawn);
        broadcastInvasion();
        if (numspawn == 2) {
            em.setProperty("haveBalrog", "true");
        } else {
            em.setProperty("haveBalrog1", "true");
        }
    }
}

function determineSpawnCount() {
    var chance = Math.floor(Math.random() * 10);
    if (chance <= 4) return 0;
    if (chance == 5) return 1;
    return 2;
}

function spawnMonsters(numspawn) {
    for (var i = 0; i < numspawn; i++) {
        Boat_to_Orbis.spawnMonsterOnGroundBelow(MapleLifeFactory.getMonster(8150000), new java.awt.Point(485, -221));
        Boat_to_Ellinia.spawnMonsterOnGroundBelow(MapleLifeFactory.getMonster(8150000), new java.awt.Point(-590, -221));
    }
    Boat_to_Orbis.setDocked(true);
    Boat_to_Ellinia.setDocked(true);
}

function broadcastInvasion() {
    var effect = MaplePacketCreator.boatEffect(1034);
    var music = MaplePacketCreator.musicChange("Bgm04/ArabPirate");
    Boat_to_Orbis.broadcastMessage(effect);
    Boat_to_Ellinia.broadcastMessage(effect);
    Boat_to_Orbis.broadcastMessage(music);
    Boat_to_Ellinia.broadcastMessage(music);
}

function moveCharacters(fromMap, toMap) {
    var characters = fromMap.getCharacters().iterator();
    while (characters.hasNext()) {
        characters.next().changeMap(toMap, toMap.getPortal(0));
    }
}

function resetReactors() {
    Orbis_Boat_Cabin.resetReactors();
    Ellinia_Boat_Cabin.resetReactors();
}

function killAllMonsters() {
    Boat_to_Orbis.killAllMonsters(false);
    Boat_to_Ellinia.killAllMonsters(false);
}

function setDockedState(state) {
    Ellinia_docked.setDocked(state);
    Orbis_Station.setDocked(state);
    var packet = MaplePacketCreator.boatPacket(state);
    Ellinia_docked.broadcastMessage(packet);
    Orbis_Station.broadcastMessage(packet);
}

function OBoatsetup() {
    var map = em.getChannelServer().getMapFactory().getMap(200090011);
    map.getPortal("out00").setScriptName("OBoat1");
    map.getPortal("out01").setScriptName("OBoat2");
}

function EBoatsetup() {
    var map = em.getChannelServer().getMapFactory().getMap(200090001);
    map.getPortal("out00").setScriptName("EBoat1");
    map.getPortal("out01").setScriptName("EBoat2");
}

function cancelSchedule() {}
