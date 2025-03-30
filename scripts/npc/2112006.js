function action(mode, type, selection) {
    var em = cm.getEventManager("Romeo");
    if (em == null) {
        cm.sendOk("請稍後再試。");
        cm.dispose();
        return;
    }
    switch(cm.getPlayer().getMapId()) {
        case 261000011:
            cm.removeAll(4001130);
            cm.removeAll(4001131);
            cm.removeAll(4001132);
            cm.removeAll(4001133);
            cm.removeAll(4001134);
            cm.removeAll(4001135);
            if (cm.getPlayer().getParty() == null || !cm.isLeader()) {
                cm.sendOk("隊伍的隊長必須在這裡。");
            } else {
                var party = cm.getPlayer().getParty().getMembers();
                var mapId = cm.getPlayer().getMapId();
                var next = true;
                var size = 0;
                var it = party.iterator();
                while (it.hasNext()) {
                    var cPlayer = it.next();
                    var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
                    if (ccPlayer == null || ccPlayer.getLevel() < 71 || ccPlayer.getLevel() > 200) {
                        next = false;
                        break;
                    }
                    size += (ccPlayer.isGM() ? 4 : 1);
                }    
                if (next && (cm.getPlayer().isGM() || size == 4)) {
                    em.startInstance(cm.getPlayer().getParty(), cm.getPlayer().getMap());
                } else {
                    cm.sendOk("您的隊伍必須有4名成員且等級在71以上。");
                }
            }
            break;
        case 926100000:
            cm.sendOk("你應該在這裡調查。查看圖書館中的文件，直到找到通往實驗室的入口。");
            break;
        case 926100001:
            cm.sendOk("請消滅所有怪物！我會在你後面跟上。");
            break;
        case 926100100:
            cm.sendOk("這些燒瓶有洩漏。我們必須將可疑的液體倒入燒瓶的邊緣，這樣我們才能繼續。");
            break;
        case 926100200:
            if (cm.haveItem(4001130,1)) {
                cm.sendOk("哦，我寫的信！謝謝你！");
                cm.gainItem(4001130,-1);
                em.setProperty("stage", "1");
            } else if (cm.haveItem(4001134,1)) {
                cm.gainItem(4001134,-1);
                cm.sendOk("謝謝！現在請找到Zenumist文件。");
                em.setProperty("stage4", "1");
            } else if (cm.haveItem(4001135,1)) {
                cm.gainItem(4001135,-1);
                cm.sendOk("謝謝！現在請繼續。");
                em.setProperty("stage4", "2");
                cm.getMap().getReactorByName("rnj3_out3").hitReactor(cm.getClient());
            } else {
                cm.sendOk("我們必須阻止Alcadno和Zenumist之間的衝突！先找到Alcadno文件，然後是Zenumist文件！");
            }
            break;
        case 926100300:
            cm.sendOk("我們必須到達實驗室的頂部，每一個成員。");
            break;
        case 926100400:
            cm.sendOk("當你準備好了，我們將去拯救我的愛人。");
            break;
        case 926100401:
            cm.warpParty(926100500); //傳送隊伍
            break;
    }
    cm.dispose();
}
