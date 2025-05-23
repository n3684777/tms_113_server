﻿/**
 楓葉裝備製作活動 by:Kodan 
 修改 by:梓條
 楓葉武器製作NPC
 35等 100萬 3000
 42等 450萬 6000
 64等 650萬 10000
 **/
load('nashorn:mozilla_compat.js');
importPackage(java.lang);

var status = -1;
var oldWepName;
var oldWepId;
var newWepId;
var newWepName;
var leaves;
var stimulator;
var cost;
var getNewWep;
var sel;

function start() {
    cm.sendSimple("嗨，我是#p9330012#有什麼可以幫忙的？？ \r\n\r\n#b#L0#兌換35等楓葉武器。#l \r\n\r\n#L1#兌換42等楓葉武器。#l\r\n\r\n#L2#兌換64等楓葉武器。#l#k");
}

function action(mode, type, selection) {
    if (mode == 0) {
        cm.dispose();
        return;
    } else {
        status++;
    }
    if (status == 0) {
        sel = selection;
        if (sel == 0) {
            cm.sendSimple("所以你想做什麼？？ \r\n#b#L0##t1302020##l \r\n#b#L1##t1332025##l \r\n#b#L2##t1382009##l \r\n#b#L3##t1452016##l \r\n#b#L4##t1462014##l \r\n#b#L5##t1472030##l \r\n#b#L6##t1492020##l \r\n#b#L7##t1482020##l \r\n#b#L8##t1092030##l \r\n#b#L9##t2070011##l");
        } else if (sel == 2) {
            cm.sendSimple("所以你想做什麼？？ \r\n\r\n#b#L0##t1302064##l\r\n#L1##t1402039##l\r\n#L2##t1312032##l\r\n#L3##t1412027##l\r\n#L4##t1322054##l\r\n#L5##t1422029##l\r\n#L6##t1452045##l\r\n#L7##t1462040##l\r\n#L8##t1472055##l\r\n#L9##t1332056##l\r\n#L10##t1332055##l\r\n#L11##t1432040##l\r\n#L12##t1442051##l\r\n#L13##t1372034##l\r\n#L14##t1382039##l\r\n#L15##t1482022##l\r\n#L16##t1492022##l\r\n#L17##t1092046##l\r\n#L18##t1092045##l\r\n#L19##t1092047##l");
        } else if (sel == 1) {
            cm.sendSimple("所以你想做什麼？？ \r\n#b#L0##t1302030##l \r\n#b#L1##t1382012##l \r\n#b#L2##t1412011##l \r\n#b#L3##t1422014##l \r\n#b#L4##t1432012##l \r\n#b#L5##t1442024##l \r\n#b#L6##t1452022##l \r\n#b#L7##t1462019##l \r\n#b#L8##t1472032##l \r\n#b#L9##t1492021##l \r\n#b#L10##t1482021##l");
        }
    } else if (status == 1) {
        if (sel == 0) {
            //35等 完成
            if (selection == 0) {
                newWepName = "#t1302020#";
                newWepId = 1302020;
                leaves = 500;
                cost = 0;
            } else if (selection == 1) {
                newWepName = "#t1332025#";
                newWepId = 1332025;
                leaves = 500;
                cost = 0;
            } else if (selection == 2) {
                newWepName = "#t1382009#";
                newWepId = 1382009;
                leaves = 500;
                cost = 0;
            } else if (selection == 3) {
                newWepName = "#t1452016#";
                newWepId = 1452016;
                leaves = 500;
                cost = 0;
            } else if (selection == 4) {
                newWepName = "#t1462014#";
                newWepId = 1462014;
                leaves = 500;
                cost = 0;
            } else if (selection == 5) {
                newWepName = "#t1472030#";
                newWepId = 1472030;
                leaves = 500;
                cost = 0;
            } else if (selection == 6) {
                newWepName = "#t1492020#";
                newWepId = 1492020;
                leaves = 500;
                cost = 0;
            } else if (selection == 7) {
                newWepName = "#t1482020#";
                newWepId = 1482020;
                leaves = 500;
                cost = 0;
            } else if (selection == 8) {
                newWepName = "#t1092030#";
                newWepId = 1092030;
                leaves = 500;
                cost = 0;
            } else if (selection == 9) {
				newWepName ="#t2070011#";
				newWepId = 2070011;
				leaves = 500;
				cost = 0;
			}
            cm.sendYesNo("您確定要做一個 #b" + newWepName + "#k? \r\n以下是你所需要的材料。\r\n\#i4001126# x" + leaves + "#k\r\n\r\n#fUI/UIWindow.img/QuestIcon/7/0# " + cost);
        } else if (sel == 2) {
            //64等 完成
            if (selection == 0) {
                oldWepName = "#t1302030#";
                oldWepId = 1302030;
                newWepName = "#t1302064#";
                newWepId = 1302064;
                leaves = 1000;
                cost = 0;
                stimulator = 4130002;
            } else if (selection == 1) {
                oldWepName = "#t1302030#";
                oldWepId = 1302030;
                newWepName = "#t1402039#";
                newWepId = 1402039;
                leaves = 1000;
                cost = 0;
                stimulator = 4130005;
            } else if (selection == 2) {
                oldWepName = "#t1412011#";
                oldWepId = 1412011;
                newWepName = "#t1312032#";
                newWepId = 1312032;
                leaves = 1000;
                cost = 0;
                stimulator = 4130003;
            } else if (selection == 3) {
                oldWepName = "#t1412011#";
                oldWepId = 1412011;
                newWepName = "#t1412027#";
                newWepId = 1412027;
                leaves = 1000;
                cost = 0;
                stimulator = 4130006;
            } else if (selection == 4) {
                oldWepName = "#t1422014#";
                oldWepId = 1422014;
                newWepName = "#t1322054#";
                newWepId = 1322054;
                leaves = 1000;
                cost = 0;
                stimulator = 4130004;
            } else if (selection == 5) {
                oldWepName = "#t1422014#";
                oldWepId = 1422014;
                newWepName = "#t1422029#";
                newWepId = 1422029;
                leaves = 1000;
                cost = 0;
                stimulator = 4130007;
            } else if (selection == 6) {
                oldWepName = "#t1452022#";
                oldWepId = 1452022;
                newWepName = "#t1452045#";
                newWepId = 1452045;
                leaves = 1000;
                cost = 0;
                stimulator = 4130012;
            } else if (selection == 7) {
                oldWepName = "#t1462019#";
                oldWepId = 1462019;
                newWepName = "#t1462040#";
                newWepId = 1462040;
                leaves = 1000;
                cost = 0;
                stimulator = 4130013;
            } else if (selection == 8) {
                oldWepName = "#t1472032#";
                oldWepId = 1472032;
                newWepName = "#t1472055#";
                newWepId = 1472055;
                leaves = 1000;
                cost = 0;
                stimulator = 4130015;
            } else if (selection == 9 || selection == 10) {
                oldWepName = "#t1332025#";
                oldWepId = 1332025;
                if (selection == 9) {
                    newWepName = "#t1332056#";
                    newWepId = 1332056;
                } else {
                    newWepName = "#t1332055#";
                    newWepId = 1332055;
                }
                leaves = 1000;
                cost = 0;
                stimulator = 4130014;
            } else if (selection == 11) {
                oldWepName = "#t1432012#";
                oldWepId = 1432012;
                newWepName = "#t1432040#";
                newWepId = 1432040;
                leaves = 1000;
                cost = 0;
                stimulator = 4130008;
            } else if (selection == 12) {
                oldWepName = "#t1442024#";
                oldWepId = 1442024;
                newWepName = "#t1442051#";
                newWepId = 1442051;
                leaves = 1000;
                cost = 0;
                stimulator = 4130009;
            } else if (selection == 13) {
                oldWepName = "#t1382012#";
                oldWepId = 1382012;
                newWepName = "#t1372034#";
                newWepId = 1372034;
                leaves = 1000;
                cost = 0;
                stimulator = 4130010;
            } else if (selection == 14) {
                oldWepName = "#t1382012#";
                oldWepId = 1382012;
                newWepName = "#t1382039#";
                newWepId = 1382039;
                leaves = 1000;
                cost = 0;
                stimulator = 4130011;
            } else if (selection == 15) {
                oldWepName = "#t1482021#";
                oldWepId = 1482021;
                newWepName = "#t1482022#";
                newWepId = 1482022;
                leaves = 1000;
                cost = 0;
                stimulator = 4130016;
            } else if (selection == 16) {
                oldWepName = "#t1492021#";
                oldWepId = 1492021;
                newWepName = "#t1492022#";
                newWepId = 1492022;
                leaves = 1000;
                cost = 0;
                stimulator = 4130017;
            } else if (selection == 17) {
                oldWepName = "#t1092030#";
                oldWepId = 1092030;
                newWepName = "#t1092046#";
                newWepId = 1092046;
                leaves = 1000;
                cost = 0;
            } else if (selection == 18) {
                oldWepName = "#t1092030#";
                oldWepId = 1092030;
                newWepName = "#t1092045#";
                newWepId = 1092045;
                leaves = 1000;
                cost = 0;
            } else if (selection == 19) {
                oldWepName = "#t1092030#";
                oldWepId = 1092030;
                newWepName = "#t1092047#";
                newWepId = 1092047;
                leaves = 1000;
                cost = 0;
            }
            cm.sendYesNo("您確定要做一個 #b" + newWepName + "#k? \r\n以下是你所需要的材料。\r\n\r\n#i" + oldWepId + "# x 1\r\n#i4001126# x" + leaves + "\r\n 如果您有催化劑也可以使用 #r(可選擇)#k\r\n\r\n#fUI/UIWindow.img/QuestIcon/7/0# " + cost);
        } else if (sel == 1) {
            //42等 完成
            if (selection == 0) {
                oldWepName = "#1302020#";
                oldWepId = 1302020;
                newWepName = "#t1302030#";
                newWepId = 1302030;
                leaves = 700;
                cost = 0;
            } else if (selection == 1) {
                oldWepName = "#t1382009#";
                oldWepId = 1382009;
                newWepName = "#t1382012#";
                newWepId = 1382012;
                leaves = 700;
                cost = 0;
            } else if (selection == 2) {
                oldWepName = "#t1302020#";
                oldWepId = 1302020;
                newWepName = "#t1412011#";
                newWepId = 1412011;
                leaves = 700;
                cost = 0;
            } else if (selection == 3) {
                oldWepName = "#t1302020#";
                oldWepId = 1302020;
                newWepName = "#t1422014#";
                newWepId = 1422014;
                leaves = 700;
                cost = 0;
            } else if (selection == 4) {
                oldWepName = "#t1302020#";
                oldWepId = 1302020;
                newWepName = "#t1432012#";
                newWepId = 1432012;
                leaves = 700;
                cost = 0;
            } else if (selection == 5) {
                oldWepName = "#t1302020#";
                oldWepId = 1302020;
                newWepName = "#t1442024#";
                newWepId = 1442024;
                leaves = 700;
                cost = 0;
            } else if (selection == 6) {
                oldWepName = "#t1452016#";
                oldWepId = 1452016;
                newWepName = "#t1452022#";
                newWepId = 1452022;
                leaves = 700;
                cost = 0;
            } else if (selection == 7) {
                oldWepName = "#t1462014#";
                oldWepId = 1462014;
                newWepName = "#t1462019#";
                newWepId = 1462019;
                leaves = 700;
                cost = 0;
            } else if (selection == 8) {
                oldWepName = "#t1472030#";
                oldWepId = 1472030;
                newWepName = "#t1472032#";
                newWepId = 1472032;
                leaves = 700;
                cost = 0;
            } else if (selection == 9) {
                oldWepName = "#t1492020#";
                oldWepId = 1492020;
                newWepName = "#t1492021#";
                newWepId = 1492021;
                leaves = 700;
                cost = 0;
            } else if (selection == 10) {
                oldWepName = "#t1482020#";
                oldWepId = 1482020;
                newWepName = "#t1482021#";
                newWepId = 1482021;
                leaves = 700;
                cost = 0;
            }
            cm.sendYesNo("您確定要做一個 #b" + newWepName + "#k? \r\n以下是你所需要的材料。\r\n\r\n#i" + oldWepId + "# x 1\r\n#i4001126# x" + leaves + "\r\n\r\n#fUI/UIWindow.img/QuestIcon/7/0# " + cost);
        }
    } else if (status == 2) {
        if (sel == 2 || sel == 4) {
            if (mode != 1) {
                cm.sendOk("很抱歉，由於您的材料不足所以無法幫您製作，假如需要的話可以再來找我談談。");
                cm.dispose();
            } else {
                if ((cm.getMeso() < 0) || (!cm.haveItem(oldWepId, 1)) || (!cm.haveItem(4001126, leaves))) {
                    cm.sendOk("很抱歉，由於您的材料不足所以無法幫您製作，假如需要的話可以再來找我談談。");
                    cm.dispose();
                } else if (stimulator == null || !cm.haveItem(stimulator)) {
                    if (cm.canHold(newWepId)) {
                        cm.gainItem(oldWepId, -1);
                        cm.gainItem(4001126, -leaves);
                        cm.gainMeso(-0);
                        cm.gainItem(newWepId, 1);
                        cm.sendOk("好了我已經幫您做好了，還需要的話再來找我談~");
                    } else {
                        cm.sendOk("看來您還是少了我所需要的材料請檢查是否都到齊了！");
                    }
                    cm.dispose();
                } else {
                    status = 2;
                    cm.sendSimple("好吧，看來您有一個 #r武器催化劑#k 你想不想用 #r武器催化劑#k 來打造一把超強的武器？ 如果您使用 #r武器催化劑#k 來打造武器的話，那麼武器素質將是 #b平均#k. 如果您不使用 #r武器催化劑#k, 來打造武器的話 那麼武器的素質將是隨機取出#b低#k 或者 #b高#k 出原本素質\r\n#b#L20#打造#t"+newWepId+"#使用#r武器催化劑#k#l\r\n#L21##g打造#t"+newWepId+"#不使用#r武器催化劑#k#l");
                }
            }
		} else if (sel == 0) {
            if ((cm.getMeso() < 0) || !cm.haveItem(4001126, leaves)) {
                cm.sendOk("很抱歉，由於您的材料不足所以無法幫您製作，假如需要的話可以再來找我談談。");			
            } else {
                if (cm.canHold(newWepId)) {
                    cm.gainItem(4001126, -leaves);
                    cm.gainMeso(-0);
                    cm.gainItem(newWepId, 1);
                    cm.sendOk("好了我已經幫您做好了，還需要的話再來找我談~");
                } else {
                    cm.sendOk("看來您還是少了我所需要的材料請檢查是否都到齊了！");
                }
            }
            cm.dispose();
		} else if (sel == 1) {
            if ((cm.getMeso() < 0) || !cm.haveItem(4001126, leaves) || !cm.haveItem(oldWepId, 1)) {
                cm.sendOk("很抱歉，由於您的材料不足所以無法幫您製作，假如需要的話可以再來找我談談。");
            } else {
                if (cm.canHold(newWepId)) {
					cm.gainItem(oldWepId, -1);
                    cm.gainItem(4001126, -leaves);
                    cm.gainMeso(-0);
                    cm.gainItem(newWepId, 1);
                    cm.sendOk("好了我已經幫您做好了，還需要的話再來找我談~");
                } else {
                    cm.sendOk("看來您還是少了我所需要的材料請檢查是否都到齊了！");
                }
            }
            cm.dispose();
        }
    } else if (status == 3) {
        if (sel == 2 || sel == 4) {
            if (cm.canHold(newWepId)) {
                if (selection == 21) {
                    cm.gainItem(oldWepId, -1);
                    cm.gainItem(4001126, -leaves);
                    cm.gainMeso(-0);
                    cm.gainItem(newWepId, 1);
                    cm.sendOk("好了我已經幫您做好了，還需要的話再來找我談~");
                } else {
                    cm.gainItem(oldWepId, -1);
                    cm.gainItem(4001126, -leaves);
                    cm.gainItem(stimulator, -1);
                    cm.gainMeso(-0);
                    cm.gainItem(newWepId, 1, true);
                    cm.sendOk("好了我已經幫您做好了，還需要的話再來找我談~");
                }
            } else {
                cm.sendOk("看來您還是少了我所需要的材料請檢查是否都到齊了！");
            }
            cm.dispose();
        }
    }
}
