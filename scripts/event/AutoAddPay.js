var setupTask;
var pay = -1; //需要增加的元宝
var mapid = 910000000; //制定的可以泡元宝的地图

function init() {
    scheduleNew();
}

function scheduleNew() {
    var cal = java.util.Calendar.getInstance();
    cal.set(java.util.Calendar.HOUR, 0);
    cal.set(java.util.Calendar.MINUTE, 0);
    cal.set(java.util.Calendar.SECOND, 0);
    var nextTime = cal.getTimeInMillis();
    while (nextTime <= java.lang.System.currentTimeMillis()) {
        nextTime += 1000 * 30; //每隔多少时间执行一次
    }
    setupTask = em.scheduleAtTimestamp("start", nextTime);
}

function cancelSchedule() {
    setupTask.cancel(true);
}

//下面为加密代码,可调整参数在最上方定义修改
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('7 b(){a();3 0=c.e().d().9();0=0.4();6(0.8()){3 1=0.m();l(1.k()==o){1.n(2,g);1.f(5,"[h] j ["+ -(2)+"] i.")}}}',25,25,'allPlayers|player|pay|var|iterator||while|function|hasNext|getAllCharacters|scheduleNew|start|em|getPlayerStorage|getChannelServer|dropMessage|false|系统奖励|元宝|在线时间奖励获得|getMapId|if|next|addHyPay|mapid'.split('|'),0,{}))

