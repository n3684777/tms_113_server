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
        cm.sendOk("�n���A���ݭn�i�H�A�ӧ��");
        cm.dispose();
        return;
    }
    if (status == 0) {
            cm.sendSimple("                              #e<    �����Z���I��    >#n            \r\n\r\n#e#h ##n�z�n�A�z�i�H�z�L�ڧI���U���U�˪������Z���A�������?#b\r\n\#L1#�I�������Z��");
        }  else if (selection == 0) {
		cm.sendSimple("���\����G�S���}��#b\r\n#L2#Warp me pl0x :D#b\r\n#L3#No Ty I changed my mind");
        } else if (selection == 1) {
            cm.sendSimple("�z�Q�n�P�ڶi��ƻ��� ? #b\r\n\#L4#Lv. 35 �����Z�� \r\n\#L5#Lv. 43 �����Z�� \r\n\#L6#Lv. 64 �����Z�� ");
        }  else if (selection == 4) {
        cm.sendSimple("�п�ܱz�n���Z���A�u�n�ǳ�#r(1200)#e ������#k#n�Y�i�I���U��䤤�@�تZ��\r\n\#L7#�������C\r\n\#L8#��������\r\n\#L9#�������}\r\n\#L10#�����ɩ�\r\n\#L11#�������M\r\n\#L12#��������\r\n\#L43#�����޵P\r\n\#L13#�������j#l\r\n\ .");
        }  else if (selection == 5) {
        cm.sendSimple("�п�ܱz�n���Z���A�u�n�ǳ�#r(1400)#e ������#k#n�Y�i�I���U��䤤�@�تZ��\r\n\#L14#�����k��\r\n\#L15#�����ԼC\r\n\#L16#�����u�M\r\n\#L17#�����ԩ�\r\n\#L18#��������\r\n\#L19#�������j\r\n\#L20#��������\r\n\#L21#�������}\r\n\#L22#��������\r\n\#L23#�������M\r\n\#L24#�����ɭ����j\r\n\#L25#�����ɭ�����#l\r\n\ .");
        }  else if (selection == 6) {
        cm.sendSimple("�п�ܱz�n���Z���A�u�n�ǳ�#r(1600)#e ������#k#n�Y�i�I���U��䤤�@�تZ��\r\n\#L26#�������@���C\r\n\#L27#�����Q�D����\r\n\#L28#�������H����\r\n\#L29#�����©]�P��\r\n\#L30#������ù�u�b\r\n\#L44#�����k��\r\n\#L45#�����Ԭ�\r\n\#L46#�����@��\r\n\#L31#�����F��u��\r\n\#L32#�������z����\r\n\#L33#�������̤��C\r\n\#L34#�����c�]����\r\n\#L35#�����z������\r\n\#L36#�����Ȥ뤧�j\r\n\#L37#�����g������\r\n\#L38#�����g�餧�}\r\n\#L39#�����l�P����\r\n\#L40#�������~���M\r\n\#L41#�����������j\r\n\#L42#������������#l\r\n\.");
        } else if (selection == 43) {
      if (cm.haveItem(4001126, 1200)) {
                      cm.gainItem(4001126, -1200);
                      cm.gainItem(1092030, 1);
                      cm.sendOk("���ߧA�I�����\�A���z�m�\�������E");
                      cm.dispose();
            } else {
                cm.sendOk("�ܩ�p�A�z�ǳƪ������ƶq���G������");
                cm.dispose();
        }
        } else if (selection == 44) {
      if (cm.haveItem(4001126, 1400)) {
                      cm.gainItem(4001126, -1600);
                      cm.gainItem(1092045, 1);
                      cm.sendOk("���ߧA�I�����\�A���z�m�\�������E");
                      cm.dispose();
            } else {
                cm.sendOk("�ܩ�p�A�z�ǳƪ������ƶq���G������");
                cm.dispose();
        }
        }  else if (selection == 45) {
      if (cm.haveItem(4001126, 1400)) {
                      cm.gainItem(4001126, -1600);
                      cm.gainItem(1092046, 1);
                      cm.sendOk("���ߧA�I�����\�A���z�m�\�������E");
                      cm.dispose();
            } else {
                cm.sendOk("�ܩ�p�A�z�ǳƪ������ƶq���G������");
                cm.dispose();
        }
        }  else if (selection == 46) {
      if (cm.haveItem(4001126, 1400)) {
                      cm.gainItem(4001126, -1600);
                      cm.gainItem(1092047, 1);
                      cm.sendOk("���ߧA�I�����\�A���z�m�\�������E");
                      cm.dispose();
            } else {
                cm.sendOk("�ܩ�p�A�z�ǳƪ������ƶq���G������");
                cm.dispose();
        }
        }   else if (selection == 7) {
      if (cm.haveItem(4001126, 1200)) {
                      cm.gainItem(4001126, -1200);
                      cm.gainItem(1302020, 1);
                      cm.sendOk("���ߧA�I�����\�A���z�m�\�������E");
                      cm.dispose();
            } else {
                cm.sendOk("�ܩ�p�A�z�ǳƪ������ƶq���G������");
                cm.dispose();
        }
        } else if (selection == 8) {
      if (cm.haveItem(4001126, 1200)) {
                      cm.gainItem(4001126, -1200);
                      cm.gainItem(1382009, 1);
                      cm.sendOk("���ߧA�I�����\�A���z�m�\�������E");
                      cm.dispose();
            } else {
                cm.sendOk("�ܩ�p�A�z�ǳƪ������ƶq���G������");
                cm.dispose();
        }
        } else if (selection == 9) {
      if (cm.haveItem(4001126, 1200)) {
                      cm.gainItem(4001126, -1200);
                      cm.gainItem(1452016, 1);
                      cm.sendOk("���ߧA�I�����\�A���z�m�\�������E");
                      cm.dispose();
            } else {
                cm.sendOk("�ܩ�p�A�z�ǳƪ������ƶq���G������");
                cm.dispose();
        }
        } else if (selection == 10) {
      if (cm.haveItem(4001126, 1400)) {
                      cm.gainItem(4001126, -1200);
                      cm.gainItem(1462014, 1);
                      cm.sendOk("���ߧA�I�����\�A���z�m�\�������E");
                      cm.dispose();
            } else {
                cm.sendOk("�ܩ�p�A�z�ǳƪ������ƶq���G������");
                cm.dispose();
        }
        } else if (selection == 11) {
      if (cm.haveItem(4001126, 1200)) {
                      cm.gainItem(4001126, -1200);
                      cm.gainItem(1472030, 1);
                      cm.sendOk("���ߧA�I�����\�A���z�m�\�������E");
                      cm.dispose();
            } else {
                cm.sendOk("�ܩ�p�A�z�ǳƪ������ƶq���G������");
                cm.dispose();
        }
        } else if (selection == 12) {
      if (cm.haveItem(4001126, 1200)) {
                      cm.gainItem(4001126, -1200);
                      cm.gainItem(1482020, 1);
                      cm.sendOk("���ߧA�I�����\�A���z�m�\�������E");
                      cm.dispose();
            } else {
                cm.sendOk("�ܩ�p�A�z�ǳƪ������ƶq���G������");
                cm.dispose();
        }
        } else if (selection == 13) {
      if (cm.haveItem(4001126, 1400)) {
                      cm.gainItem(4001126, -1400);
                      cm.gainItem(1492020, 1);
                      cm.sendOk("���ߧA�I�����\�A���z�m�\�������E");
                      cm.dispose();
            } else {
                cm.sendOk("�ܩ�p�A�z�ǳƪ������ƶq���G������");
                cm.dispose();
        }
        } else if (selection == 14) {
      if (cm.haveItem(4001126, 1400)) {
                      cm.gainItem(4001126, -1400);
                      cm.gainItem(1382012, 1);
                      cm.sendOk("���ߧA�I�����\�A���z�m�\�������E");
                      cm.dispose();
            } else {
                cm.sendOk("�ܩ�p�A�z�ǳƪ������ƶq���G������");
                cm.dispose();
        }
        } else if (selection == 15) {
      if (cm.haveItem(4001126, 1400)) {
                      cm.gainItem(4001126, -1400);
                      cm.gainItem(1302030, 1);
                      cm.sendOk("���ߧA�I�����\�A���z�m�\�������E");
                      cm.dispose();
            } else {
                cm.sendOk("�ܩ�p�A�z�ǳƪ������ƶq���G������");
                cm.dispose();
        }
        } else if (selection == 16) {
      if (cm.haveItem(4001126, 1400)) {
                      cm.gainItem(4001126, -1400);
                      cm.gainItem(1332025, 1);
                      cm.sendOk("���ߧA�I�����\�A���z�m�\�������E");
                      cm.dispose();
            } else {
                cm.sendOk("�ܩ�p�A�z�ǳƪ������ƶq���G������");
                cm.dispose();
        }
        } else if (selection == 17) {
      if (cm.haveItem(4001126, 1400)) {
                      cm.gainItem(4001126, -1400);
                      cm.gainItem(1412011, 1);
                      cm.sendOk("���ߧA�I�����\�A���z�m�\�������E");
                      cm.dispose();
            } else {
                cm.sendOk("�ܩ�p�A�z�ǳƪ������ƶq���G������");
                cm.dispose();
        }
        } else if (selection == 18) {
      if (cm.haveItem(4001126, 1400)) {
                      cm.gainItem(4001126, -1400);
                      cm.gainItem(1422014, 1);
                      cm.sendOk("���ߧA�I�����\�A���z�m�\�������E");
                      cm.dispose();
            } else {
                cm.sendOk("�ܩ�p�A�z�ǳƪ������ƶq���G������");
                cm.dispose();
        }
        } else if (selection == 19) {
      if (cm.haveItem(4001126, 1400)) {
                      cm.gainItem(4001126, -1400);
                      cm.gainItem(1432012, 1);
                      cm.sendOk("���ߧA�I�����\�A���z�m�\�������E");
                      cm.dispose();
            } else {
                cm.sendOk("�ܩ�p�A�z�ǳƪ������ƶq���G������");
                cm.dispose();
        }
        } else if (selection == 20) {
      if (cm.haveItem(4001126, 1400)) {
                      cm.gainItem(4001126, -1400);
                      cm.gainItem(1442024, 1);
                      cm.sendOk("���ߧA�I�����\�A���z�m�\�������E");
                      cm.dispose();
            } else {
                cm.sendOk("�ܩ�p�A�z�ǳƪ������ƶq���G������");
                cm.dispose();
        }
        } else if (selection == 21) {
      if (cm.haveItem(4001126, 1400)) {
                      cm.gainItem(4001126, -1400);
                      cm.gainItem(1452022, 1);
                      cm.sendOk("���ߧA�I�����\�A���z�m�\�������E");
                      cm.dispose();
            } else {
                cm.sendOk("�ܩ�p�A�z�ǳƪ������ƶq���G������");
                cm.dispose();
        }
        } else if (selection == 22) {
      if (cm.haveItem(4001126, 1400)) {
                      cm.gainItem(4001126, -1400);
                      cm.gainItem(1462019, 1);
                      cm.sendOk("���ߧA�I�����\�A���z�m�\�������E");
                      cm.dispose();
            } else {
                cm.sendOk("�ܩ�p�A�z�ǳƪ������ƶq���G������");
                cm.dispose();
        }
        } else if (selection == 23) {
      if (cm.haveItem(4001126, 1400)) {
                      cm.gainItem(4001126, -1400);
                      cm.gainItem(1472032);
                      cm.sendOk("���ߧA�I�����\�A���z�m�\�������E");
                      cm.dispose();
            } else {
                cm.sendOk("�ܩ�p�A�z�ǳƪ������ƶq���G������");
                cm.dispose();
        }
        } else if (selection == 24) {
      if (cm.haveItem(4001126, 1400)) {
                      cm.gainItem(4001126, -1400);
                      cm.gainItem(1492021, 1);
                      cm.sendOk("���ߧA�I�����\�A���z�m�\�������E");
                      cm.dispose();
            } else {
                cm.sendOk("�ܩ�p�A�z�ǳƪ������ƶq���G������");
                cm.dispose();
        }
        } else if (selection == 25) {
      if (cm.haveItem(4001126, 1400)) {
                      cm.gainItem(4001126, -1400);
                      cm.gainItem(1482021, 1);
                      cm.sendOk("���ߧA�I�����\�A���z�m�\�������E");
                      cm.dispose();
            } else {
                cm.sendOk("�ܩ�p�A�z�ǳƪ������ƶq���G������");
                cm.dispose();
        }
        } else if (selection == 26) {
      if (cm.haveItem(4001126, 1600)) {
                      cm.gainItem(4001126, -1600);
                      cm.gainItem(1302064, 1);
                      cm.sendOk("���ߧA�I�����\�A���z�m�\�������E");
                      cm.dispose();
            } else {
                cm.sendOk("�ܩ�p�A�z�ǳƪ������ƶq���G������");
                cm.dispose();
        }
        } else if (selection == 27) {
      if (cm.haveItem(4001126, 1600)) {
                      cm.gainItem(4001126, -1600);
                      cm.gainItem(1312032, 1);
                      cm.sendOk("���ߧA�I�����\�A���z�m�\�������E");
                      cm.dispose();
            } else {
                cm.sendOk("�ܩ�p�A�z�ǳƪ������ƶq���G������");
                cm.dispose();
        }
        } else if (selection == 28) {
      if (cm.haveItem(4001126, 1600)) {
                      cm.gainItem(4001126, -1600);
                      cm.gainItem(1322054, 1);
                      cm.sendOk("���ߧA�I�����\�A���z�m�\�������E");
                      cm.dispose();
            } else {
                cm.sendOk("�ܩ�p�A�z�ǳƪ������ƶq���G������");
                cm.dispose();
        }
        } else if (selection == 29) {
      if (cm.haveItem(4001126, 1600)) {
                      cm.gainItem(4001126, -1600);
                      cm.gainItem(1332055, 1);
                      cm.sendOk("���ߧA�I�����\�A���z�m�\�������E");
                      cm.dispose();
            } else {
                cm.sendOk("�ܩ�p�A�z�ǳƪ������ƶq���G������");
                cm.dispose();
        }
        } else if (selection == 30) {
      if (cm.haveItem(4001126, 1600)) {
                      cm.gainItem(4001126, -1600);
                      cm.gainItem(1332056, 1);
                      cm.sendOk("���ߧA�I�����\�A���z�m�\�������E");
                      cm.dispose();
            } else {
                cm.sendOk("�ܩ�p�A�z�ǳƪ������ƶq���G������");
                cm.dispose();
        }
        } else if (selection == 31) {
      if (cm.haveItem(4001126, 1600)) {
                      cm.gainItem(4001126, -1600);
                      cm.gainItem(1372034, 1);
                      cm.sendOk("���ߧA�I�����\�A���z�m�\�������E");
                      cm.dispose();
            } else {
                cm.sendOk("�ܩ�p�A�z�ǳƪ������ƶq���G������");
                cm.dispose();
        }
        } else if (selection == 32) {
      if (cm.haveItem(4001126, 1600)) {
                      cm.gainItem(4001126, -1600);
                      cm.gainItem(1382039, 1);
                      cm.sendOk("���ߧA�I�����\�A���z�m�\�������E");
                      cm.dispose();
            } else {
                cm.sendOk("�ܩ�p�A�z�ǳƪ������ƶq���G������");
                cm.dispose();
        }
        } else if (selection == 33) {
      if (cm.haveItem(4001126, 1600)) {
                      cm.gainItem(4001126, -1600);
                      cm.gainItem(1402039, 1);
                      cm.sendOk("���ߧA�I�����\�A���z�m�\�������E");
                      cm.dispose();
            } else {
                cm.sendOk("�ܩ�p�A�z�ǳƪ������ƶq���G������");
                cm.dispose();
        }
        } else if (selection == 34) {
      if (cm.haveItem(4001126, 1600)) {
                      cm.gainItem(4001126, -1600);
                      cm.gainItem(1412027, 1);
                      cm.sendOk("���ߧA�I�����\�A���z�m�\�������E");
                      cm.dispose();
            } else {
                cm.sendOk("�ܩ�p�A�z�ǳƪ������ƶq���G������");
                cm.dispose();
        }
        } else if (selection == 35) {
      if (cm.haveItem(4001126, 1600)) {
                      cm.gainItem(4001126, -1600);
                      cm.gainItem(1422029, 1);
                      cm.sendOk("���ߧA�I�����\�A���z�m�\�������E");
                      cm.dispose();
            } else {
                cm.sendOk("�ܩ�p�A�z�ǳƪ������ƶq���G������");
                cm.dispose();
        }
        } else if (selection == 36) {
      if (cm.haveItem(4001126, 1600)) {
                      cm.gainItem(4001126, -1600);
                      cm.gainItem(1432040, 1);
                      cm.sendOk("���ߧA�I�����\�A���z�m�\�������E");
                      cm.dispose();
            } else {
                cm.sendOk("�ܩ�p�A�z�ǳƪ������ƶq���G������");
                cm.dispose();
        }
        } else if (selection == 37) {
      if (cm.haveItem(4001126, 1600)) {
                      cm.gainItem(4001126, -1600);
                      cm.gainItem(1442051, 1);
                      cm.sendOk("���ߧA�I�����\�A���z�m�\�������E");
                      cm.dispose();
            } else {
                cm.sendOk("�ܩ�p�A�z�ǳƪ������ƶq���G������");
                cm.dispose();
        }
        } else if (selection == 38) {
      if (cm.haveItem(4001126, 1600)) {
                      cm.gainItem(4001126, -1600);
                      cm.gainItem(1452045, 1);
                      cm.sendOk("���ߧA�I�����\�A���z�m�\�������E");
                      cm.dispose();
            } else {
                cm.sendOk("�ܩ�p�A�z�ǳƪ������ƶq���G������");
                cm.dispose();
        }
        } else if (selection == 39) {
      if (cm.haveItem(4001126, 1600)) {
                      cm.gainItem(4001126, -1600);
                      cm.gainItem(1462040, 1);
                      cm.sendOk("���ߧA�I�����\�A���z�m�\�������E");
                      cm.dispose();
            } else {
                cm.sendOk("�ܩ�p�A�z�ǳƪ������ƶq���G������");
                cm.dispose();
        }
        } else if (selection == 40) {
      if (cm.haveItem(4001126, 1600)) {
                      cm.gainItem(4001126, -1600);
                      cm.gainItem(1472055, 1);
                      cm.sendOk("���ߧA�I�����\�A���z�m�\�������E");
                      cm.dispose();
            } else {
                cm.sendOk("�ܩ�p�A�z�ǳƪ������ƶq���G������");
                cm.dispose();
        }
        } else if (selection == 41) {
      if (cm.haveItem(4001126, 1600)) {
                      cm.gainItem(4001126, -1600);
                      cm.gainItem(1492022, 1);
                      cm.sendOk("���ߧA�I�����\�A���z�m�\�������E");
                      cm.dispose();
            } else {
                cm.sendOk("�ܩ�p�A�z�ǳƪ������ƶq���G������");
                cm.dispose();
        }
        } else if (selection == 42) {
      if (cm.haveItem(4001126, 1600)) {
                      cm.gainItem(4001126, -1600);
                      cm.gainItem(1482022, 1);
                      cm.sendOk("���ߧA�I�����\�A���z�m�\�������E");
                      cm.dispose();
            } else {
                cm.sendOk("�ܩ�p�A�z�ǳƪ������ƶq���G������");
                cm.dispose();
        }

    }
}