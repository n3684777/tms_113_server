var status = -1;
load('nashorn:mozilla_compat.js');
importPackage(Packages.server);
importPackage(Packages.tools);
importPackage(Packages.handling.world);
importPackage(Packages.tools.packet);
//請使用指令 !全服抽獎

//不要有機率 0 跟 100 的物品。
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
        try {
            var players = new java.util.ArrayList();
            var channels = Packages.handling.channel.ChannelServer.getAllInstances();
            
            if (channels == null || channels.isEmpty()) {
                cm.sendOk("目前伺服器中沒有頻道。");
                cm.dispose();
                return;
            }

            //print("總頻道數量: " + channels.size());

            for (var iterator = channels.iterator(); iterator.hasNext();) {
                var channel = iterator.next();
                if (channel != null) {
                    var storage = channel.getPlayerStorage();
                    if (storage != null) {
                        var channelPlayers = storage.getAllCharactersThreadSafe();
                        if (channelPlayers != null && !channelPlayers.isEmpty()) {
                            for (var i = 0; i < channelPlayers.size(); i++) {
                                var chr = channelPlayers.get(i);
                                if (chr != null && chr.getClient() != null && chr.getClient().getSession().isActive()) {
                                    players.add(chr);
                                }
                            }
                            //print("頻道 " + channel.getChannel() + " 的在線玩家數量: " + channelPlayers.size());
                        }
                    }
                }
            }

            if (players.isEmpty()) {
                cm.sendOk("目前伺服器中沒有在線玩家。");
                cm.dispose();
                return;
            }

            //print("總在線玩家數量: " + players.size());

            var MAX_ATTEMPTS = 50;
            var attempts = 0;
            var selectedItem = null;

            do {
                attempts++;
                var randomIndex = Math.floor(Math.random() * Gift.length);
                selectedItem = Gift[randomIndex];
                
                if (attempts >= MAX_ATTEMPTS) {
                    cm.sendOk("抽獎失敗，請重試。");
                    cm.dispose();
                    return;
                }
            } while (Math.random() * 100 >= selectedItem.probability);

            var randomPlayerIndex = Math.floor(Math.random() * players.size());
            var selectedPlayer = players.get(randomPlayerIndex);

            if (selectedPlayer != null && 
                selectedPlayer.getClient() != null && 
                selectedPlayer.getClient().getSession().isActive()) {
                
                var ii = Packages.server.MapleItemInformationProvider.getInstance();
                var 物品名稱 = ii.getName(selectedItem.item);

                var msg = "【全服抽獎】恭喜玩家 " + selectedPlayer.getName() + 
                          " 被 " + cm.getPlayer().getName() + 
                          " 抽中了！抽中物品為: " + 物品名稱 + " x " + selectedItem.itemQ;

                Packages.handling.world.World.Broadcast.broadcastMessage(
                    Packages.tools.MaplePacketCreator.serverNotice(5, msg)
                );
                
                cm.startMapEffectWorld(msg, 5120009);
                
                // 給予獎勵
                selectedPlayer.gainItem(selectedItem.item, selectedItem.itemQ);
            } else {
                //cm.sendOk("選中的玩家已離線，請重新抽獎。");
            }
            
        } catch (e) {
            //cm.sendOk("抽獎過程發生錯誤: " + e);
            print("全服抽獎腳本錯誤: " + e);
        }
        
        cm.dispose();
    }
}
