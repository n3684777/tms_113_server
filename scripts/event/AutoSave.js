var setupTask;
function init() {
    scheduleNew();
}
function scheduleNew() {
    var cal = java.util.Calendar.getInstance();
    cal.set(java.util.Calendar.SECOND, 5);
    var nextTime = cal.getTimeInMillis();
    while (nextTime <= java.lang.System.currentTimeMillis()) {
        nextTime += 1800 * 1000;
    }
    em.broadcastYellowMsg("[伺服器公告] 伺服器正在進行自動存檔中 ...");
    setupTask = em.scheduleAtTimestamp("start", nextTime);
}
function cancelSchedule() {
    setupTask.cancel(true);
}
function start() {
    scheduleNew();
    em.getChannelServer().saveAll();
    var iter = em.getInstances().iterator();
    while (iter.hasNext()) {
        var eim = iter.next();
    }
}