var status = -1;
importPackage(Packages.tools);   //MaplePacketCreator.
importPackage(Packages.handling.world);  //World.

var 開啟揪人訊息 = true
var toSmega = 0

function checkMap() {
    var map = [925100000, 925100100, 925100200, 925100201, 925100202, 925100300, 925100301, 925100302, 925100400, 925100400, 925100500];
    for(var i = 0 ; i < map.length; i++) {
        if(cm.getPlayerCount(map[i]))
            return false;
    }
    return true;
}


function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
        cm.removeAll(4001117);
        cm.removeAll(4001120);
        cm.removeAll(4001121);
        cm.removeAll(4001122);
        if (cm.getPlayer().getParty() == null || !cm.isLeader()) {
            cm.sendOk("請找隊長來找我。");
            cm.dispose();
        } else {
            var party = cm.getPlayer().getParty().getMembers();
            var mapId = cm.getPlayer().getMapId();
            var next = true;
            var size = 0;
            var it = party.iterator();
            while (it.hasNext()) {
                var cPlayer = it.next();
                var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
                if (ccPlayer == null || ccPlayer.getLevel() < 55 || ccPlayer.getLevel() > 250) {
                    next = false;
                    break;
                }
                size += (ccPlayer.isGM() ? 2 : 1);
            }
            if (next && size >= 3) {
                if(checkMap()) {
                    var em = cm.getEventManager("Pirate");
                    if (em == null) {
                        cm.sendOk("找不到腳本，請聯繫GM！！");
                    } else {
                        em.startInstance(cm.getPlayer().getParty(), cm.getPlayer().getMap());
                    }
                } else {
                    cm.sendOk("目前有人在打囉～");
                }
                cm.dispose();
            } else {
                var text = "需要3個人以上 等級必須是55到250級\r\n"
                if (開啟揪人訊息) {
                    text += "\r\n#b#L1#揪人#l"
                }
                cm.sendSimple(text);
            }
        }
    } else if (status === 1) {
        toSmega = selection
        if (toSmega === 1) {
            cm.sendGetText("請輸入您要招人的訊息");
        }
    } else {
        if (toSmega === 1) {
            World.Broadcast.broadcastSmega(MaplePacketCreator.itemMegaphone(cm.getPlayer().name +　" : " +　cm.getText(), true, cm.getPlayer().getClient().getChannel(), null));
        }
        cm.dispose();
    }
}
