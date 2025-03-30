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
9300140,//第十八關：法郎肯洛伊德
9500179,//第十九關：黑輪王
8220003,//第二十關：寒霜冰龍
8180001,//第二一關：格瑞芬多
8180000,//第二二關：噴火龍
8220004,//第二三關：多多
8220005,//第二四關：利里諾斯
8220006,//第二五關：萊伊卡
8510000,//第二六關：海怒斯
8500001,//第二七關：拉圖斯之鐘
8240098,//第二八關：吉祥舞獅
9420547,//第二九關：娃娃獅王
9420542,//第三十關：泰勒熊
9420014,//第三一關：六手邪神
9300215,//第三二關：武公
9400121,//第三三關：黑道大姊頭
9400014,//第三四關：天狗
9400266,//第三五關：無名魔獸
9400289,//第三六關：奧芙赫班
9400112,//第三七關：黑道保鑣
9400408,//第三八關：天狗
8820001 //第三九關：皮卡丘 491 148 -509 148

);          

function init() {
    // After loading, ChannelServer
}

function setup(partyid) {
    var instanceName = "Reicarnation" + partyid;

    var eim = em.newInstance(instanceName);
    // If there are more than 1 map for this, you'll need to do mapid + instancename
    var map = eim.createInstanceMapS(eventmapid);
    map.toggleDrops();
    
	map.addDrops(2220000,4031868,999999, 1,1);
	map.addDrops(3220000,4031868,999999, 1,1);
	map.addDrops(5220000,4031868,999999, 1,1);
	map.addDrops(4130103,4031868,999999, 1,1);
	map.addDrops(4240000,4031868,999999, 1,2);
	map.addDrops(7220000,4031868,999999, 1,2);
	map.addDrops(8220000,4031868,999999, 1,2);
	map.addDrops(5220004,4031868,999999, 1,2);
	map.addDrops(6130101,4031868,999999, 1,3);
	map.addDrops(6300005,4031868,999999, 1,3);
	map.addDrops(8220007,4031868,999999, 1,3);
	map.addDrops(8160000,4031868,999999, 1,3);
	map.addDrops(7220001,4031868,999999, 1,4);
	map.addDrops(9410099,4031868,999999, 1,4);
	map.addDrops(8220001,4031868,999999, 1,4);
	map.addDrops(9300028,4031868,999999, 1,4);
	map.addDrops(9300039,4031868,999999, 1,5);
	map.addDrops(9300140,4031868,999999, 1,5);
	map.addDrops(9300207,4031868,999999, 1,5);
	map.addDrops(8220003,4031868,999999, 1,5);
	map.addDrops(8180001,4031868,999999, 1,6);
	map.addDrops(8180000,4031868,999999, 1,6);
	map.addDrops(8220004,4031868,999999, 1,6);
	map.addDrops(8220005,4031868,999999, 1,6);
	map.addDrops(8220006,4031868,999999, 1,8);
	map.addDrops(8510000,4031868,999999, 1,8);
	map.addDrops(8500001,4031868,999999, 1,8);
	map.addDrops(9410066,4031868,999999, 1,8);
	map.addDrops(9420547,4031868,999999, 1,10);
	map.addDrops(9420542,4031868,999999, 1,10);
	map.addDrops(9420014,4031868,999999, 1,10);
	map.addDrops(9300215,4031868,999999, 1,10);
	map.addDrops(9400121,4031868,999999, 1,15);
	map.addDrops(9400014,4031868,999999, 1,15);
	map.addDrops(9400266,4031868,999999, 1,15);
	map.addDrops(9400289,4031868,999999, 1,15);
	map.addDrops(9400112,4031868,999999, 1,20);
	map.addDrops(9400408,4031868,999999, 1,20);
	map.addDrops(8820001,4031868,999999, 1,20);
		
    eim.setProperty("stage",0);
    eim.setProperty("monster_number", 0);

    beginQuest(eim);
    return eim;
}

function beginQuest(eim) { // Custom function
    if (eim != null) {
        eim.startEventTimer(5000); // After 5 seconds -> scheduledTimeout()
    }
}

function monsterSpawn(eim) { // Custom function
    var mob = em.getMonster(monster[parseInt(eim.getProperty("monster_number"))]);

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
        eim.unregisterPlayer(player);
        eim.disposeIfPlayerBelow(0, 0);
        var map = em.getMapFactory().getMap(returnmap);
        player.changeMap(map, map.getPortal(0));
    }
}

function scheduledTimeout(eim) {
    if( eim == null )
        return;
    var num = parseInt(eim.getProperty("monster_number"));
    var sta = parseInt(eim.getProperty("stage"));	
    if (num < monster.length) {
        monsterSpawn(eim);
        eim.setProperty("monster_number", num + 1);
        eim.setProperty("stage", sta + 1);		
    }
}

function allMonstersDead(eim) {
    eim.restartEventTimer(3000);

    var mobnum = parseInt(eim.getProperty("monster_number"));
    var num = mobnum * 5; // 765 points in total
    var mobnumnext = mobnum + 1;

    eim.setProperty("stage", mobnumnext);
    eim.broadcastPlayerMsg(5, "你已完成輪迴"+mobnumnext+"關!");

	//eim.setBossLog("輪迴");

    if (mobnum < monster.length) {
        eim.broadcastPlayerMsg(6, "準備！下一隻的BOSS即將來臨。");
    } else {
		eim.setEventCount("輪迴全關通過");
		eim.broadcastPlayerMsg(5, "恭喜挑戰輪迴全關通過。");
    }
}

function playerDead(eim, player) {
	player.changeMap(eim.getMapInstance(returnmap), eim.getMapInstance(returnmap).getPortal(0));
}

function playerRevive(eim, player) {
    player.addHP(50);
    player.changeMap(eim.getMapInstance(returnmap), eim.getMapInstance(returnmap).getPortal(0));
	eim.broadcastPlayerMsg(5, player.getName() + " 因為死亡離開了輪迴副本");
    return true;
}

function playerDisconnected(eim, player) {
    eim.unregisterPlayer(player);
	player.setMap(eim.getMapInstance(returnmap));
	eim.broadcastPlayerMsg(5, player.getName() + " 離開了輪迴副本");

}

function monsterValue(eim, mobid) {
    return 0;
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

function randX() { //地圖x軸座標 
    return -500 + Math.floor(Math.random() * 900);//491 148 -509 148

}