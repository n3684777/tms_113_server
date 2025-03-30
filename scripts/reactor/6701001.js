

function act() {
    if (!rm.haveItem(4001269)) {
        var rand = (Math.random() * 10) + 1;
      //  var randMap = (Math.random() * 9) + 1;
        if (rand  > 0) {
            if (rm.canHold(4001269)) {
                rm.gainItem(4001269, 1);
                rm.gainItem(1142767,1,15,15,15,15);
                rm.warp(910000000);
                rm.gainItem(4032054, -1);
                rm.worldMessage(5, "[跑酷初賽2] " + " 玩家" + rm.getChar().getName() + " 從跑酷初賽1脫穎而出並獲得了跑酷活動紀念勳章!!");
                rm.playerMessage("您獲得了「能源水晶」，請盡快把水晶拿去自由市場找「辛巴谷活動告示牌」預約決賽資格。");
                
            } else {
                rm.playerMessage("您的背包空間不足。");
            }
        } else {
            rm.warp(910000000);
        }
    } else {
        rm.playerMessage("已經得到了相同的物品。");
    }
}