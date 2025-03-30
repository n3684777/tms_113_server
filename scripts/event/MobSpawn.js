var setupTask;

function init() {
    scheduleNew();
}
function scheduleNew() {
    var cal = java.util.Calendar.getInstance();
    cal.set(java.util.Calendar.SECOND, 5);
    var nextTime = cal.getTimeInMillis();
    while (nextTime <= java.lang.System.currentTimeMillis()) {
        nextTime += 1000 * 60;
    }
    //em.broadcastYellowMsg("[伺服器公告] 伺服器正在進行自動存檔中 ...");
    setupTask = em.scheduleAtTimestamp("start", nextTime);
}
function cancelSchedule() {
    setupTask.cancel(true);
}
function start() {
    scheduleNew();
	//cm.spawnMobOnMap(BOSSId2,BOSScost2,BossMapX,BossMapY,BossMap);
   //em.broadcastServerMsg(5120014, "廣播測試", true);
    var iter = em.getInstances().iterator();
    while (iter.hasNext()) {
        var eim = iter.next();
    }
}