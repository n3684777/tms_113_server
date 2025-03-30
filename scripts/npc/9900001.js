load('nashorn:mozilla_compat.js');
/** Author: nejevoli
 NPC Name: 		NimaKin
 Map(s): 		Victoria Road : Ellinia (180000000)
 Description: 		Maxes out your stats and able to modify your equipment stats
 */
importPackage(java.lang);

var status = 0;
var slot = Array();
var stats = Array("力量", "敏捷", "智力", "幸運", "HP", "MP", "物理攻擊", "魔法攻擊", "物理防禦", "魔法防禦", "命中率", "迴避率", "靈敏度", "移動速度", "跳躍力", "卷軸數", "使用卷軸數", "裝備名字");
var items = Array(1002140,1042003,1062007,1322013,1072010,5010057);

var selected;
var statsSel;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status >= 0 && mode == 0) {
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;

    if (status == 0) {
	if (cm.getPlayerStat("ADMIN") == 1) {
		cm.sendSimple("請問你需要我什麼幫助？#b\r\n#L0#能力全滿！#l\r\n#L1#技能全滿！#l\r\n#L2#改裝備能力！#l\r\n#L4#技能點與能力點歸0！#l#b\r\n#L6#獲取GM道具！#k");
	} else if (cm.getPlayerStat("GM") == 1) {
		cm.sendSimple("請問你需要我什麼幫助？#b\r\n#L0#能力全滿！#l\r\n#L1#技能全滿！#l\r\n#L4#技能點與能力點歸0！#k");
	} else {
	    cm.dispose();
	}
    } else if (status == 1) {
	if (selection == 0) {
	    if (cm.getPlayerStat("GM") == 1) {
		cm.maxStats();
		cm.sendOk("你已經全滿了");
	    }
	    cm.dispose();
	} else if (selection == 1) {
	    //Beginner
	    if (cm.getPlayerStat("GM") == 1) {
		cm.maxAllSkills();
	    }
	    cm.dispose();
	} else if (selection == 2 && cm.getPlayerStat("ADMIN") == 1) {
	    var avail = "";
	    for (var i = -1; i > -199; i--) {
		if (cm.getInventory(-1).getItem(i) != null) {
		    avail += "#L" + Math.abs(i) + "##t" + cm.getInventory(-1).getItem(i).getItemId() + "##l\r\n";
		}
		slot.push(i);
	    }
	    cm.sendSimple("選擇想修改的道具\r\n#b" + avail);
	} /*else if (selection == 3 && cm.getPlayerStat("ADMIN") == 1) {
		var eek = cm.getAllPotentialInfo();
		var avail = "";
		for (var ii = 0; ii < eek.size(); ii++) {
			avail += "#L" + eek.get(ii) + "#Potential ID " + eek.get(ii) + "#l\r\n";
		}
		cm.sendSimple("您想修改\r\n#b"+ avail);
		status = 9;
	} */else if (selection == 4) {
		cm.getPlayer().resetAPSP();
		cm.sendNext("Done.");
		cm.dispose();
	} else if (selection == 6) {
			for (var i = 0; i < items.length; i++) {
				cm.gainItem(items[i],1);
				cm.sendOk("GM裝備給你囉！");
			}
			cm.dispose();
		} else {
		cm.dispose();
	}
    } else if (status == 2 && cm.getPlayerStat("ADMIN") == 1) {
	selected = selection - 1;
	var text = "";
	for (var i = 0; i < stats.length; i++) {
	    text += "#L" + i + "#" + stats[i] + "#l\r\n";
	}
	cm.sendSimple("你已經選擇了 #b#t" + cm.getInventory(-1).getItem(slot[selected]).getItemId() + "##k.\r\n你想改甚麼能力呢?\r\n#b" + text);
	} else if (status == 3 && cm.getPlayerStat("ADMIN") == 1) {
	statsSel = selection;
	if (selection == 22) {
		cm.sendGetText("您想修改 #b#t" + cm.getInventory(-1).getItem(slot[selected]).getItemId() + "##k's " + stats[statsSel] + " to?");
	} else {
		cm.sendGetNumber("您想修改 #b#t" + cm.getInventory(-1).getItem(slot[selected]).getItemId() + "##k " + stats[statsSel] + " 多少呢？", 0, 0, 32767);
	}
    } else if (status == 4 && cm.getPlayerStat("ADMIN") == 1) {
	cm.changeStat(slot[selected], statsSel, selection);
	cm.sendOk("你所選擇的 #b#t" + cm.getInventory(-1).getItem(slot[selected]).getItemId() + "##k " + stats[statsSel] + " 已經設定為 " + selection + "！");
	cm.dispose();
	} else if (status == 10 && cm.getPlayerStat("ADMIN") == 1) {
		cm.sendSimple("#L3#" + cm.getPotentialInfo(selection) + "#l");
		status = 0;
	} else {
		cm.dispose();
    }
}