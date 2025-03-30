/*** 王團斷線回圖 ***/

var status = -1;
var objDate = new Date();
var Month = objDate.getMonth();
var MonthS = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
var tzc = objDate.getDate();
var day = objDate.getDay();
var Year = objDate.getFullYear();
var _Battle = [
"BossBalrog",
"ZakumBattle",       //殘暴炎魔
"HorntailBattle",    //闇黑龍王
"ArkariumBattle",    //阿卡伊農
"PapBattle",         //拉圖斯
"PinkBeanBattle",    //皮卡啾
"MoriRanmaruBattle", //森蘭丸
"CygnusBattle",      //西格諾斯
"ScarTarBattle",     //夢幻公園
"VonLeonBattle",     //凡雷恩
"VonBonBattle",      //混沌斑斑
"ChaosPierreBattle", //渾沌艾比樂
"BloodyQueenBattle", //混沌血腥女皇
"VellumBattle",      //渾沌貝倫
"HillaBattle",       //希拉
"Vergamot",       //貝魯加墨特
"TheBossBattle",       //黑道長老
"Dunas2",       //進階杜那斯
"Nibergen",       //尼貝龍根
"Dunas",       //杜那斯
"NamelessMagicMonster",       //無名魔獸
"Aufhaven",       //奧芙赫班
"SpecialZakumBattle",       //特殊殘暴炎魔
];

var _PBattle = [
    "SpecialHorntailBattle",       //特殊闇黑龍王
    "CastellanToadBattle",       //特殊天皇蟾蜍
];

var 可斷線回圖次數 = 999;

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
    status = (mode == 1 ? status+1 : cm.dispose());
    //-------------------------------------------------
    var em, eim, player, playerID;
    var pem, peim, partyID;
    player   = cm.getPlayer();
    playerID = player.getId();
	if(player.getParty() == null){
		cm.sendOk("您沒有組隊。");
		cm.dispose();
		return;
	}
    partyID = player.getParty().getId();
    for(var i=0; i<_Battle.length; i++){
        em  = cm.getEventManager(_Battle[i]);
        if(em == null) continue;
        eim = em.getInstance(_Battle[i]);
        if(eim == null) continue;
		/*
		if (cm.getPlayer().getPrizeLog(Year + "年" + MonthS[Month] + tzc + "日" + eim + "_" +playerID) >= 可斷線回圖次數) {
			cm.sendOk("您的帳號本場已經回圖滿額囉！");
			cm.safeDispose();
			return;
		}
		*/
        if(eim.getProperty("member"+playerID) == 1){
			cm.getPlayer().setPrizeLog(Year + "年" + MonthS[Month] + tzc + "日" + eim + "_" +playerID);
            em.startInstance(player);
            cm.dispose(); return;
        }
    }
    for (var i = 0; i < _PBattle.length; i++) {
        em  = cm.getEventManager(_PBattle[i]);
        if(em == null) continue;
        eim = em.getInstance(_PBattle[i] + partyID);
        if(eim == null) continue;

        if(eim.getProperty("member"+playerID) == 1){
            em.startInstance(player);
            cm.dispose(); return;
        }
    }
    cm.sendOk("冒險者目前沒有進行遠征隊哦\r\n或是請冒險者再次確認是否與原先遠征隊頻道相同");
    cm.dispose();
}