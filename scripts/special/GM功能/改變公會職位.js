load('nashorn:mozilla_compat.js'); // 必須的環境支持
importPackage(Packages.client); // MapleCharacter
importPackage(Packages.handling.world); // Guild 操作類

var status = 0;
var chosenGuildId = 0; // 保存公會 ID
var chosenRank = 0; // 保存目標職位
var targetPlayerName = ""; // 保存目標玩家名稱

function start() {
    if (!cm.getPlayer().isGM()) {
        cm.sendOk("您無法使用該腳本。");
        cm.dispose();
        return;
    }
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    if (status == 0) {
        cm.sendGetText("請輸入要操作的公會 ID：");
    } else if (status == 1) {
        chosenGuildId = parseInt(cm.getText());
        if (isNaN(chosenGuildId) || chosenGuildId <= 0) {
            cm.sendOk("輸入的公會 ID 無效，請重新嘗試！");
            cm.dispose();
            return;
        }

        // 判斷輸入的公會 ID 是否與玩家當前的公會 ID 相同
        if (cm.getPlayer().getGuildId() != chosenGuildId) {
            cm.sendOk("您當前所屬的公會 ID 與輸入的公會 ID 不匹配，無法操作！");
            cm.dispose();
            return;
        }

        cm.sendGetText("請輸入要更改職位的玩家名稱：");
    } else if (status == 2) {
        targetPlayerName = cm.getText();
        if (targetPlayerName == null || targetPlayerName.trim() === "") {
            cm.sendOk("輸入的玩家名稱無效，請重新嘗試！");
            cm.dispose();
            return;
        }
        cm.sendSimple("請選擇新的職位：\r\n#b#L1#公會會長#l\r\n#L2#副會長#l\r\n#L3#普通成員#l\r\n#L4#見習成員#l");
    } else if (status == 3) {
        chosenRank = selection;
        if (chosenRank < 1 || chosenRank > 4) {
            cm.sendOk("無效的職位選擇，請重新嘗試！");
            cm.dispose();
            return;
        }

        var targetPlayer = MapleCharacter.getCharacterByName(targetPlayerName);
		
        if (targetPlayer == null) {
            cm.sendOk("找不到玩家 \"" + targetPlayerName + "\"，請確認名稱是否正確！");
            cm.dispose();
            return;
        }

        if (targetPlayer.getGuildId() != chosenGuildId) {
            cm.sendOk("玩家 \"" + targetPlayerName + "\" 不屬於公會 ID：" + chosenGuildId + "，請確認公會 ID 和玩家名稱是否正確！");
            cm.dispose();
            return;
        }

        // 執行職位修改
        World.Guild.changeRank(targetPlayer.getGuildId(), targetPlayer.getId(), chosenRank);
	   
        cm.sendOk("成功將玩家 " + targetPlayerName + " 的公會職位修改為 " + getRankName(chosenRank) + "！");
        cm.dispose();
    }
}

// 獲取職位名稱
function getRankName(rank) {
    switch (rank) {
        case 1:
            return "公會會長";
        case 2:
            return "副會長";
        case 3:
            return "普通成員";
        case 4:
            return "見習成員";
        default:
            return "未知職位";
    }
}
