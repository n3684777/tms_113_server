load('nashorn:mozilla_compat.js');
importPackage(java.lang);
importPackage(java.util);

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
    var eim = cm.getEventInstance();
    if (eim != null) {
        var party = eim.getPlayers(); // 獲取所有參與者
        var leader = eim.getProperty("leader"); // 獲取設定的 leader

        // 確認對話者是否為 eim 設定的 leader
        if (leader != null && leader.equals(cm.getName())) {
            if (cm.haveItem(4001024)) {
                cm.removeAll(4001024);
                var prev = eim.setProperty("bossclear", "true", true);
                if (prev == null) {
                    var start = parseInt(eim.getProperty("entryTimestamp"));
                    var diff = System.currentTimeMillis() - start;
                    var points = 3000 - Math.floor(diff / (100 * 60));
                    cm.gainGP(points);
                }

                // 傳送所有地圖內的玩家
                for (var i = 0; i < party.size(); i++) {
                    var player = party.get(i);
                    player.warp(990001000); // 傳送至地圖ID 990001000
                }

                eim.finishPQ();
            } else {
                cm.sendOk("這是你最後的挑戰。請打敗惡靈13並帶著他的遺物來找我。");
            }
        } else {
            cm.sendOk("只有領導者可以與我對話。");
        }
    } else {
        cm.sendOk("任務似乎出了問題，請回報管理員。");
    }
    cm.dispose();
}
