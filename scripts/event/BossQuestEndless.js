var eventmapid = 209080100;
var returnmap = 910000000;

var monster = new Array(
2220000,//第一關：紅寶王
3220000,//第二關：樹妖王
5220000,//第三關：巨居蟹
4130103,//第四關：泥人領導者
4240000,//第五關：葛雷長老
7220000,//第六關：肯德熊
8220000,//第七關：艾利傑
5220004,//第八關：蜈蚣大王
6130101,//第九關：蘑菇王
6300005,//第十關：殭屍蘑菇王
8220007,//第十一關：藍色蘑菇王
8160000,//第十二關：通道守門人
7220001,//第十三關：九尾妖狐
9410099,//第十四關：武林妖僧
8220001,//第十五關：雪毛怪人
9300028,//第十六關：惡靈13
9300039,//第十七關：爸爸精靈
//9300140,//第十八關：法郎肯洛伊德 會傳送出去導致直接結束
9500179,//第十九關：黑輪王
8220003,//第二十關：寒霜冰龍
8180001,//第二一關：格瑞芬多
8180000,//第二二關：噴火龍
8220004,//第二三關：多多
8220005,//第二四關：利里諾斯
8220006,//第二五關：萊伊卡
8510000,//第二六關：海怒斯
8500001,//第二七關：拉圖斯之鐘
8240098,//第二八關：史烏
9420547,//第二九關：娃娃獅王
9420542,//第三十關：泰勒熊
9420014,//第三一關：六手邪神
//9300215,//第三二關：武公 打死會卡住
9400121,//第三三關：黑道大姊頭
9400014,//第三四關：天狗
9400266,//第三五關：無名魔獸
9400289,//第三六關：奧芙赫班
9400112,//第三七關：黑道保鑣
9400408,//第三八關：天狗
8820001 //第三九關：皮卡丘 491 148 -509 148

);

var addHP = 100000; //每層怪物增加的血量
var initHP = 100000; //從第一層開始的怪物血量

function init() {
    // After loading, ChannelServer
}

function setup(player) {
    var instanceName = "Endless" + player.getId();

    var eim = em.newInstance(instanceName);
    var map = eim.createInstanceMapS(eventmapid);
    map.toggleDrops();

    //eim.setProperty("stage", player.getCharInfoNum("無盡副本斷線樓層"));
    //eim.setProperty("points", player.getCharInfoNum("無盡副本斷線樓層"));

    eim.setProperty("stage", player.getCharInfoNum("無盡副本"));
    eim.setProperty("points", player.getCharInfoNum("無盡副本"));
    eim.setProperty("continue", "true");

    beginQuest(eim);
    return eim;
}

function beginQuest(eim) { // Custom function
    if (eim != null) {
        eim.startEventTimer(5000); // After 5 seconds -> scheduledTimeout()
    }
}

function monsterSpawn(eim) { // Custom function
    var index = parseInt(eim.getProperty("stage")) % monster.length;
    var mob = em.getMonster(monster[index]);
    //設定血量
    var modified = em.newMonsterStats();
    modified.setOExp(mob.getMobExp() * 7);
    modified.setOHp(initHP + parseInt(eim.getProperty("stage")) * addHP);
    modified.setOMp(mob.getMobMaxMp());
    mob.setOverrideStats(modified);

    eim.registerMonster(mob);

    var map = eim.getMapInstance(0);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(randX(), 148));
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
}

function changedMap(eim, player, mapid) {
    if (mapid != eventmapid) {
        var player = eim.getPlayers().get(0);
        var currentStage = parseInt(eim.getProperty("stage")) - 1;
        var highestRecord = player.getCharInfoNum("無盡副本");
        if (currentStage > highestRecord) {
            player.setCharInfoNum("無盡副本", currentStage);//紀錄達到最高層數log
            eim.broadcastPlayerMsg(5, "本次無盡副本達到 " + currentStage + " 層，恭喜您達到更高的新紀錄。");
        } else {
            eim.broadcastPlayerMsg(5, "本次無盡副本達到 " + currentStage + " 層，當前最高紀錄為: " + highestRecord + " 層。");
        }
        //player.setCharInfoNum("無盡副本斷線樓層", currentStage); //紀錄斷線回去的層數log
        eim.unregisterPlayer(player);
        eim.disposeIfPlayerBelow(0, 0);
        var map = em.getMapFactory().getMap(returnmap);
        player.changeMap(map, map.getPortal(0));
    }
}

function scheduledTimeout(eim) {
    if( eim == null )
        return;
    if (eim.getProperty("continue").equals("true")) {
        var num = parseInt(eim.getProperty("stage"));
        monsterSpawn(eim);
        eim.setProperty("stage", num + 1);
        eim.setProperty("continue", "false");
        eim.restartEventTimer(5 * 60 * 1000);
    } else {
        var player = eim.getPlayers().get(0);
        var currentStage = parseInt(eim.getProperty("stage")) - 1;
        var highestRecord = player.getCharInfoNum("無盡副本");
        if (currentStage > highestRecord) {
            player.setCharInfoNum("無盡副本", currentStage);//紀錄層數log
            eim.broadcastPlayerMsg(5, "本次無盡副本達到 " + currentStage + " 層，恭喜您達到更高的新紀錄。");
        } else {
            eim.broadcastPlayerMsg(5, "本次無盡副本達到 " + currentStage + " 層，當前最高紀錄為: " + highestRecord + " 層。");
        }
        //player.setCharInfoNum("無盡副本斷線樓層", 0);//時間到重置斷線紀錄層數log
        eim.disposeIfPlayerBelow(100, returnmap);
        eim = null;
    }
}

function allMonstersDead(eim) {
    eim.restartEventTimer(3000);

    var mobnum = parseInt(eim.getProperty("stage"));
    eim.setProperty("continue", "true");

    var totalp = parseInt(eim.getProperty("points")) + mobnum;
    eim.setProperty("points", totalp);
    eim.broadcastPlayerMsg(5, "您獲得了 " + mobnum + " BOSS 點數，目前共獲得 " + totalp + " 點");
    eim.saveBossQuest(mobnum);
    eim.broadcastPlayerMsg(5, "你已完成無盡副本第 "+mobnum+" 層!");
    eim.broadcastPlayerMsg(6, "準備！下一隻的BOSS即將來臨。");
}

function playerDead(eim, player) {
	player.changeMap(eim.getMapInstance(returnmap), eim.getMapInstance(returnmap).getPortal(0));
}

function playerRevive(eim, player) {
    player.addHP(50);
    player.changeMap(eim.getMapInstance(returnmap), eim.getMapInstance(returnmap).getPortal(0));
	eim.broadcastPlayerMsg(5, player.getName() + " 因為死亡離開了無盡副本");
    return true;
}

function playerDisconnected(eim, player) {
    eim.unregisterPlayer(player);
	player.setMap(eim.getMapInstance(returnmap));
	eim.broadcastPlayerMsg(5, player.getName() + " 離開了無盡副本");
}

function monsterValue(eim, mobid) {
    return 0;
}

function leftParty(eim, player) {
    // Happens when a player left the party
}

function disbandParty(eim, player) {
    // Boot whole party and end
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

function randX() { //地圖x軸座標
    return -500 + Math.floor(Math.random() * 900);//491 148 -509 148

}

function monsterDamaged(eim, player, mobId, damage){

}