/*
* @autor Java
* LeaderMS MapleStory Private Server
* Armas Maple
*/

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1)
        status++;
    else {
        cm.sendOk("好的，有需要可以再來找我");
        cm.dispose();
        return;
    }
    if (status == 0) {
            cm.sendSimple("                              #e<    楓葉武器兌換    >#n            \r\n\r\n#e#h ##n您好，您可以透過我兌換各式各樣的楓葉武器，有興趣嗎?#b\r\n\#L1#兌換楓葉武器");
        }  else if (selection == 0) {
		cm.sendSimple("此功能似乎沒有開啟#b\r\n#L2#Warp me pl0x :D#b\r\n#L3#No Ty I changed my mind");
        } else if (selection == 1) {
            cm.sendSimple("您想要與我進行甚麼交易 ? #b\r\n\#L4#Lv. 35 楓葉武器 \r\n\#L5#Lv. 43 楓葉武器 \r\n\#L6#Lv. 64 楓葉武器 ");
        }  else if (selection == 4) {
        cm.sendSimple("請選擇您要的武器，只要準備#r(1200)#e 片楓葉#k#n即可兌換下方其中一種武器\r\n\#L7#楓葉之劍\r\n\#L8#楓葉之杖\r\n\#L9#楓葉神弓\r\n\#L10#楓葉玉弩\r\n\#L11#楓葉指套\r\n\#L12#楓葉指虎\r\n\#L43#楓葉盾牌\r\n\#L13#楓葉火槍#l\r\n\ .");
        }  else if (selection == 5) {
        cm.sendSimple("請選擇您要的武器，只要準備#r(1400)#e 片楓葉#k#n即可兌換下方其中一種武器\r\n\#L14#楓葉法杖\r\n\#L15#楓葉戰劍\r\n\#L16#楓葉短刀\r\n\#L17#楓葉戰斧\r\n\#L18#楓葉戰鎚\r\n\#L19#楓葉之槍\r\n\#L20#楓葉之矛\r\n\#L21#楓葉之弓\r\n\#L22#楓葉之弩\r\n\#L23#楓葉拳套\r\n\#L24#楓葉暴風火槍\r\n\#L25#楓葉暴風指虎#l\r\n\ .");
        }  else if (selection == 6) {
        cm.sendSimple("請選擇您要的武器，只要準備#r(1600)#e 片楓葉#k#n即可兌換下方其中一種武器\r\n\#L26#楓葉絕世之劍\r\n\#L27#楓葉霸道之斧\r\n\#L28#楓葉粉碎之鎚\r\n\#L29#楓葉黑夜匕首\r\n\#L30#楓葉修羅短刃\r\n\#L44#楓葉法盾\r\n\#L45#楓葉戰盾\r\n\#L46#楓葉護腕\r\n\#L31#楓葉靈魂短杖\r\n\#L32#楓葉智慧長杖\r\n\#L33#楓葉王者之劍\r\n\#L34#楓葉惡魔之斧\r\n\#L35#楓葉爆裂之鎚\r\n\#L36#楓葉銀月之槍\r\n\#L37#楓葉狂風之矛\r\n\#L38#楓葉射日之弓\r\n\#L39#楓葉追星之弩\r\n\#L40#楓葉神獸拳套\r\n\#L41#楓葉炫風火槍\r\n\#L42#楓葉黃金指虎#l\r\n\.");
        } else if (selection == 43) {
      if (cm.haveItem(4001126, 1200)) {
                      cm.gainItem(4001126, -1200);
                      cm.gainItem(1092030, 1);
                      cm.sendOk("恭喜你兌換成功，祝您練功之路順遂");
                      cm.dispose();
            } else {
                cm.sendOk("很抱歉，您準備的楓葉數量似乎不足夠");
                cm.dispose();
        }
        } else if (selection == 44) {
      if (cm.haveItem(4001126, 1400)) {
                      cm.gainItem(4001126, -1600);
                      cm.gainItem(1092045, 1);
                      cm.sendOk("恭喜你兌換成功，祝您練功之路順遂");
                      cm.dispose();
            } else {
                cm.sendOk("很抱歉，您準備的楓葉數量似乎不足夠");
                cm.dispose();
        }
        }  else if (selection == 45) {
      if (cm.haveItem(4001126, 1400)) {
                      cm.gainItem(4001126, -1600);
                      cm.gainItem(1092046, 1);
                      cm.sendOk("恭喜你兌換成功，祝您練功之路順遂");
                      cm.dispose();
            } else {
                cm.sendOk("很抱歉，您準備的楓葉數量似乎不足夠");
                cm.dispose();
        }
        }  else if (selection == 46) {
      if (cm.haveItem(4001126, 1400)) {
                      cm.gainItem(4001126, -1600);
                      cm.gainItem(1092047, 1);
                      cm.sendOk("恭喜你兌換成功，祝您練功之路順遂");
                      cm.dispose();
            } else {
                cm.sendOk("很抱歉，您準備的楓葉數量似乎不足夠");
                cm.dispose();
        }
        }   else if (selection == 7) {
      if (cm.haveItem(4001126, 1200)) {
                      cm.gainItem(4001126, -1200);
                      cm.gainItem(1302020, 1);
                      cm.sendOk("恭喜你兌換成功，祝您練功之路順遂");
                      cm.dispose();
            } else {
                cm.sendOk("很抱歉，您準備的楓葉數量似乎不足夠");
                cm.dispose();
        }
        } else if (selection == 8) {
      if (cm.haveItem(4001126, 1200)) {
                      cm.gainItem(4001126, -1200);
                      cm.gainItem(1382009, 1);
                      cm.sendOk("恭喜你兌換成功，祝您練功之路順遂");
                      cm.dispose();
            } else {
                cm.sendOk("很抱歉，您準備的楓葉數量似乎不足夠");
                cm.dispose();
        }
        } else if (selection == 9) {
      if (cm.haveItem(4001126, 1200)) {
                      cm.gainItem(4001126, -1200);
                      cm.gainItem(1452016, 1);
                      cm.sendOk("恭喜你兌換成功，祝您練功之路順遂");
                      cm.dispose();
            } else {
                cm.sendOk("很抱歉，您準備的楓葉數量似乎不足夠");
                cm.dispose();
        }
        } else if (selection == 10) {
      if (cm.haveItem(4001126, 1400)) {
                      cm.gainItem(4001126, -1200);
                      cm.gainItem(1462014, 1);
                      cm.sendOk("恭喜你兌換成功，祝您練功之路順遂");
                      cm.dispose();
            } else {
                cm.sendOk("很抱歉，您準備的楓葉數量似乎不足夠");
                cm.dispose();
        }
        } else if (selection == 11) {
      if (cm.haveItem(4001126, 1200)) {
                      cm.gainItem(4001126, -1200);
                      cm.gainItem(1472030, 1);
                      cm.sendOk("恭喜你兌換成功，祝您練功之路順遂");
                      cm.dispose();
            } else {
                cm.sendOk("很抱歉，您準備的楓葉數量似乎不足夠");
                cm.dispose();
        }
        } else if (selection == 12) {
      if (cm.haveItem(4001126, 1200)) {
                      cm.gainItem(4001126, -1200);
                      cm.gainItem(1482020, 1);
                      cm.sendOk("恭喜你兌換成功，祝您練功之路順遂");
                      cm.dispose();
            } else {
                cm.sendOk("很抱歉，您準備的楓葉數量似乎不足夠");
                cm.dispose();
        }
        } else if (selection == 13) {
      if (cm.haveItem(4001126, 1400)) {
                      cm.gainItem(4001126, -1400);
                      cm.gainItem(1492020, 1);
                      cm.sendOk("恭喜你兌換成功，祝您練功之路順遂");
                      cm.dispose();
            } else {
                cm.sendOk("很抱歉，您準備的楓葉數量似乎不足夠");
                cm.dispose();
        }
        } else if (selection == 14) {
      if (cm.haveItem(4001126, 1400)) {
                      cm.gainItem(4001126, -1400);
                      cm.gainItem(1382012, 1);
                      cm.sendOk("恭喜你兌換成功，祝您練功之路順遂");
                      cm.dispose();
            } else {
                cm.sendOk("很抱歉，您準備的楓葉數量似乎不足夠");
                cm.dispose();
        }
        } else if (selection == 15) {
      if (cm.haveItem(4001126, 1400)) {
                      cm.gainItem(4001126, -1400);
                      cm.gainItem(1302030, 1);
                      cm.sendOk("恭喜你兌換成功，祝您練功之路順遂");
                      cm.dispose();
            } else {
                cm.sendOk("很抱歉，您準備的楓葉數量似乎不足夠");
                cm.dispose();
        }
        } else if (selection == 16) {
      if (cm.haveItem(4001126, 1400)) {
                      cm.gainItem(4001126, -1400);
                      cm.gainItem(1332025, 1);
                      cm.sendOk("恭喜你兌換成功，祝您練功之路順遂");
                      cm.dispose();
            } else {
                cm.sendOk("很抱歉，您準備的楓葉數量似乎不足夠");
                cm.dispose();
        }
        } else if (selection == 17) {
      if (cm.haveItem(4001126, 1400)) {
                      cm.gainItem(4001126, -1400);
                      cm.gainItem(1412011, 1);
                      cm.sendOk("恭喜你兌換成功，祝您練功之路順遂");
                      cm.dispose();
            } else {
                cm.sendOk("很抱歉，您準備的楓葉數量似乎不足夠");
                cm.dispose();
        }
        } else if (selection == 18) {
      if (cm.haveItem(4001126, 1400)) {
                      cm.gainItem(4001126, -1400);
                      cm.gainItem(1422014, 1);
                      cm.sendOk("恭喜你兌換成功，祝您練功之路順遂");
                      cm.dispose();
            } else {
                cm.sendOk("很抱歉，您準備的楓葉數量似乎不足夠");
                cm.dispose();
        }
        } else if (selection == 19) {
      if (cm.haveItem(4001126, 1400)) {
                      cm.gainItem(4001126, -1400);
                      cm.gainItem(1432012, 1);
                      cm.sendOk("恭喜你兌換成功，祝您練功之路順遂");
                      cm.dispose();
            } else {
                cm.sendOk("很抱歉，您準備的楓葉數量似乎不足夠");
                cm.dispose();
        }
        } else if (selection == 20) {
      if (cm.haveItem(4001126, 1400)) {
                      cm.gainItem(4001126, -1400);
                      cm.gainItem(1442024, 1);
                      cm.sendOk("恭喜你兌換成功，祝您練功之路順遂");
                      cm.dispose();
            } else {
                cm.sendOk("很抱歉，您準備的楓葉數量似乎不足夠");
                cm.dispose();
        }
        } else if (selection == 21) {
      if (cm.haveItem(4001126, 1400)) {
                      cm.gainItem(4001126, -1400);
                      cm.gainItem(1452022, 1);
                      cm.sendOk("恭喜你兌換成功，祝您練功之路順遂");
                      cm.dispose();
            } else {
                cm.sendOk("很抱歉，您準備的楓葉數量似乎不足夠");
                cm.dispose();
        }
        } else if (selection == 22) {
      if (cm.haveItem(4001126, 1400)) {
                      cm.gainItem(4001126, -1400);
                      cm.gainItem(1462019, 1);
                      cm.sendOk("恭喜你兌換成功，祝您練功之路順遂");
                      cm.dispose();
            } else {
                cm.sendOk("很抱歉，您準備的楓葉數量似乎不足夠");
                cm.dispose();
        }
        } else if (selection == 23) {
      if (cm.haveItem(4001126, 1400)) {
                      cm.gainItem(4001126, -1400);
                      cm.gainItem(1472032);
                      cm.sendOk("恭喜你兌換成功，祝您練功之路順遂");
                      cm.dispose();
            } else {
                cm.sendOk("很抱歉，您準備的楓葉數量似乎不足夠");
                cm.dispose();
        }
        } else if (selection == 24) {
      if (cm.haveItem(4001126, 1400)) {
                      cm.gainItem(4001126, -1400);
                      cm.gainItem(1492021, 1);
                      cm.sendOk("恭喜你兌換成功，祝您練功之路順遂");
                      cm.dispose();
            } else {
                cm.sendOk("很抱歉，您準備的楓葉數量似乎不足夠");
                cm.dispose();
        }
        } else if (selection == 25) {
      if (cm.haveItem(4001126, 1400)) {
                      cm.gainItem(4001126, -1400);
                      cm.gainItem(1482021, 1);
                      cm.sendOk("恭喜你兌換成功，祝您練功之路順遂");
                      cm.dispose();
            } else {
                cm.sendOk("很抱歉，您準備的楓葉數量似乎不足夠");
                cm.dispose();
        }
        } else if (selection == 26) {
      if (cm.haveItem(4001126, 1600)) {
                      cm.gainItem(4001126, -1600);
                      cm.gainItem(1302064, 1);
                      cm.sendOk("恭喜你兌換成功，祝您練功之路順遂");
                      cm.dispose();
            } else {
                cm.sendOk("很抱歉，您準備的楓葉數量似乎不足夠");
                cm.dispose();
        }
        } else if (selection == 27) {
      if (cm.haveItem(4001126, 1600)) {
                      cm.gainItem(4001126, -1600);
                      cm.gainItem(1312032, 1);
                      cm.sendOk("恭喜你兌換成功，祝您練功之路順遂");
                      cm.dispose();
            } else {
                cm.sendOk("很抱歉，您準備的楓葉數量似乎不足夠");
                cm.dispose();
        }
        } else if (selection == 28) {
      if (cm.haveItem(4001126, 1600)) {
                      cm.gainItem(4001126, -1600);
                      cm.gainItem(1322054, 1);
                      cm.sendOk("恭喜你兌換成功，祝您練功之路順遂");
                      cm.dispose();
            } else {
                cm.sendOk("很抱歉，您準備的楓葉數量似乎不足夠");
                cm.dispose();
        }
        } else if (selection == 29) {
      if (cm.haveItem(4001126, 1600)) {
                      cm.gainItem(4001126, -1600);
                      cm.gainItem(1332055, 1);
                      cm.sendOk("恭喜你兌換成功，祝您練功之路順遂");
                      cm.dispose();
            } else {
                cm.sendOk("很抱歉，您準備的楓葉數量似乎不足夠");
                cm.dispose();
        }
        } else if (selection == 30) {
      if (cm.haveItem(4001126, 1600)) {
                      cm.gainItem(4001126, -1600);
                      cm.gainItem(1332056, 1);
                      cm.sendOk("恭喜你兌換成功，祝您練功之路順遂");
                      cm.dispose();
            } else {
                cm.sendOk("很抱歉，您準備的楓葉數量似乎不足夠");
                cm.dispose();
        }
        } else if (selection == 31) {
      if (cm.haveItem(4001126, 1600)) {
                      cm.gainItem(4001126, -1600);
                      cm.gainItem(1372034, 1);
                      cm.sendOk("恭喜你兌換成功，祝您練功之路順遂");
                      cm.dispose();
            } else {
                cm.sendOk("很抱歉，您準備的楓葉數量似乎不足夠");
                cm.dispose();
        }
        } else if (selection == 32) {
      if (cm.haveItem(4001126, 1600)) {
                      cm.gainItem(4001126, -1600);
                      cm.gainItem(1382039, 1);
                      cm.sendOk("恭喜你兌換成功，祝您練功之路順遂");
                      cm.dispose();
            } else {
                cm.sendOk("很抱歉，您準備的楓葉數量似乎不足夠");
                cm.dispose();
        }
        } else if (selection == 33) {
      if (cm.haveItem(4001126, 1600)) {
                      cm.gainItem(4001126, -1600);
                      cm.gainItem(1402039, 1);
                      cm.sendOk("恭喜你兌換成功，祝您練功之路順遂");
                      cm.dispose();
            } else {
                cm.sendOk("很抱歉，您準備的楓葉數量似乎不足夠");
                cm.dispose();
        }
        } else if (selection == 34) {
      if (cm.haveItem(4001126, 1600)) {
                      cm.gainItem(4001126, -1600);
                      cm.gainItem(1412027, 1);
                      cm.sendOk("恭喜你兌換成功，祝您練功之路順遂");
                      cm.dispose();
            } else {
                cm.sendOk("很抱歉，您準備的楓葉數量似乎不足夠");
                cm.dispose();
        }
        } else if (selection == 35) {
      if (cm.haveItem(4001126, 1600)) {
                      cm.gainItem(4001126, -1600);
                      cm.gainItem(1422029, 1);
                      cm.sendOk("恭喜你兌換成功，祝您練功之路順遂");
                      cm.dispose();
            } else {
                cm.sendOk("很抱歉，您準備的楓葉數量似乎不足夠");
                cm.dispose();
        }
        } else if (selection == 36) {
      if (cm.haveItem(4001126, 1600)) {
                      cm.gainItem(4001126, -1600);
                      cm.gainItem(1432040, 1);
                      cm.sendOk("恭喜你兌換成功，祝您練功之路順遂");
                      cm.dispose();
            } else {
                cm.sendOk("很抱歉，您準備的楓葉數量似乎不足夠");
                cm.dispose();
        }
        } else if (selection == 37) {
      if (cm.haveItem(4001126, 1600)) {
                      cm.gainItem(4001126, -1600);
                      cm.gainItem(1442051, 1);
                      cm.sendOk("恭喜你兌換成功，祝您練功之路順遂");
                      cm.dispose();
            } else {
                cm.sendOk("很抱歉，您準備的楓葉數量似乎不足夠");
                cm.dispose();
        }
        } else if (selection == 38) {
      if (cm.haveItem(4001126, 1600)) {
                      cm.gainItem(4001126, -1600);
                      cm.gainItem(1452045, 1);
                      cm.sendOk("恭喜你兌換成功，祝您練功之路順遂");
                      cm.dispose();
            } else {
                cm.sendOk("很抱歉，您準備的楓葉數量似乎不足夠");
                cm.dispose();
        }
        } else if (selection == 39) {
      if (cm.haveItem(4001126, 1600)) {
                      cm.gainItem(4001126, -1600);
                      cm.gainItem(1462040, 1);
                      cm.sendOk("恭喜你兌換成功，祝您練功之路順遂");
                      cm.dispose();
            } else {
                cm.sendOk("很抱歉，您準備的楓葉數量似乎不足夠");
                cm.dispose();
        }
        } else if (selection == 40) {
      if (cm.haveItem(4001126, 1600)) {
                      cm.gainItem(4001126, -1600);
                      cm.gainItem(1472055, 1);
                      cm.sendOk("恭喜你兌換成功，祝您練功之路順遂");
                      cm.dispose();
            } else {
                cm.sendOk("很抱歉，您準備的楓葉數量似乎不足夠");
                cm.dispose();
        }
        } else if (selection == 41) {
      if (cm.haveItem(4001126, 1600)) {
                      cm.gainItem(4001126, -1600);
                      cm.gainItem(1492022, 1);
                      cm.sendOk("恭喜你兌換成功，祝您練功之路順遂");
                      cm.dispose();
            } else {
                cm.sendOk("很抱歉，您準備的楓葉數量似乎不足夠");
                cm.dispose();
        }
        } else if (selection == 42) {
      if (cm.haveItem(4001126, 1600)) {
                      cm.gainItem(4001126, -1600);
                      cm.gainItem(1482022, 1);
                      cm.sendOk("恭喜你兌換成功，祝您練功之路順遂");
                      cm.dispose();
            } else {
                cm.sendOk("很抱歉，您準備的楓葉數量似乎不足夠");
                cm.dispose();
        }

    }
}