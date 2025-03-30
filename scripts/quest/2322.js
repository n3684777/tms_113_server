load('nashorn:mozilla_compat.js');
/* ===========================================================
			Resonance
	NPC Name: 		Minister of Home Affairs
	Map(s): 		Mushroom Castle: Corner of Mushroom Forest(106020000)
	Description: 	Quest -  Over the Castle Wall (2)
=============================================================
Version 1.0 - Script Done.(18/7/2010)
=============================================================
*/

importPackage(Packages.client);

var status = -1;

function start(mode, type, selection) {
    status++;
	if (mode != 1) {
	    if(type == 1 && mode == 0)
		    status -= 2;
		else{
			qm.sendNext("真的嗎？你有其他方法可以進入城堡嗎？如果你不知道，那就來找我吧。");
			qm.dispose();
			return;
		}
	}
	if (status == 0)
		qm.sendYesNo("就像我之前跟你說的，單單突破城牆不能算是值得慶祝的事情。因為我們蘑菇王國的城堡完全禁止外國人進入，所以這將是一個很困難的事情。嗯...要找出進入的方法，你可以先調查城堡外牆嗎？");
	if (status == 1)
		qm.sendNext("穿過蘑菇森林，當你到達 #b分歧路#k 時，直接往城堡走即可。祝你好運。");
	if (status == 2){
		//qm.forceStartQuest();
		//qm.forceStartQuest(2322, "1");
		qm.gainExp(11000);
		qm.sendOk("做得好，你成功地穿越了這個區域。");
		qm.forceCompleteQuest();
		qm.dispose();
	}
}

function end(mode, type, selection) {
    status++;
	if (mode != 1) {
	    if(type == 1 && mode == 0)
		    status -= 2;
		else{
			qm.dispose();
			return;
		}
	}
	if (status == 0)
		qm.sendOk("嗯，我明白了...所以他們已經完全封鎖了入口和一切。");
	if (status == 1){
		qm.gainExp(11000);
		qm.sendOk("做得好，你成功地穿越了這個區域。");
		qm.forceCompleteQuest();
		qm.dispose();
	}
}
	