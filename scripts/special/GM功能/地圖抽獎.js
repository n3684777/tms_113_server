var status = -1;
load('nashorn:mozilla_compat.js');
importPackage(Packages.server);
importPackage(Packages.tools);

// 以下為抽取的道具內容 (機率不要設定 100 %)
var Gift = [
    { item: 4000019, itemQ: 1, probability: 80 },
    { item: 4000020, itemQ: 2, probability: 40 },
    { item: 4000021, itemQ: 3, probability: 60 },
    { item: 4000022, itemQ: 4, probability: 80 },
    { item: 4000023, itemQ: 1, probability: 80 },
    { item: 4000024, itemQ: 1, probability: 60 },
    { item: 4000025, itemQ: 1, probability: 5 }
];

function action(mode, type, selection) {
    status = (mode == 1 ? status + 1 : cm.dispose());
    if (status == 0) {

        // 獲取當前地圖的所有玩家
        var map = cm.getPlayer().getMap();
        var players = map.getCharacters();
        if (players.size() <= 0) {
            cm.sendOk("當前地圖無其他玩家。");
            cm.dispose();
            return;
        }

        // 隨機選擇一位玩家
        var selectedPlayer = players.get(Math.floor(Math.random() * players.size()));

        // 從非 100% 概率的道具中隨機選擇一個
        var nonGuaranteedItems = [];
        for (var i = 0; i < Gift.length; i++) {
            if (Gift[i].probability != 100) {
                nonGuaranteedItems.push(Gift[i]);
            }
        }
        
        var selectedItem;
        do {
            var randomIndex = Math.floor(Math.random() * nonGuaranteedItems.length);
            selectedItem = nonGuaranteedItems[randomIndex];
        } while (Math.random() * 100 >= selectedItem.probability);

        // 驗證物品是否存在
        var ii = MapleItemInformationProvider.getInstance();
        var 物品名稱 = ii.itemExists(selectedItem.item) ? ii.getName(selectedItem.item) : "";

        // 發送地圖廣播
        map.startMapEffect(
            "【地圖抽獎】恭喜玩家 " + selectedPlayer.getName() + " 被 " + cm.getPlayer().getName() + " 抽中了！抽中物品為: " + 物品名稱 + " x " + selectedItem.itemQ,
            5120009
        );

        // 向每個玩家發送 dropMessage
        players.forEach(function(player) {
            player.dropMessage(5, "【地圖抽獎】恭喜玩家 " + selectedPlayer.getName() + " 被 " + cm.getPlayer().getName() + " 抽中了！抽中物品為: " + 物品名稱 + " x " + selectedItem.itemQ);
        });

        // 給予獎勵
        selectedPlayer.gainItem(selectedItem.item, selectedItem.itemQ);
        
        cm.dispose();
    }
}
