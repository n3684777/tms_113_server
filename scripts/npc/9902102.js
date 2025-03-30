/*
* @autor 卡比
* @date 2023/11/20
* @describe :
*      捐獻成長樹
*/
load('nashorn:mozilla_compat.js');
importPackage(Packages.client.inventory);
importPackage(java.awt);

var completeRemoveNpc = false; // 完成後是否刪除npc
var donatedItemId = 2000000;
var donatedMaxAmount = 100;
var eventMaxState = 4;
var npclist = [ //從第2階段開始的npcid 不能小於eventMaxState的個數
    9902101, // 第2階段
    9902102,
    9902103,
    9902104,
]
var dropdistance = 40; // 噴出獎勵物品的相隔距離


var player;
var mapid;
var rewards;
function start() {
    action(1, 0, 0);
}

var status = -1;

function action(mode, type, selection) {
    if (mode == 0 && status == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        player = cm.getPlayer();
        mapid = player.getMapId();
        var msg = "";
        if (player.isGM()) {
            msg += "\r\n#e#b              成長樹活動設定頁面!!#n#k\r\n\r\n";
            msg += "#L0# 建立當前活動地圖#l  ";
            msg += "#L1# 刪除當前地圖活動#l\r\n";
            msg += "#L2# 增加活動地圖獎勵#l  ";
            msg += "#L3# 刪除活動地圖獎勵#l\r\n";
            msg += "#L4# 開始活動#l          ";
            msg += "#L5# 強制結束活動#l\r\n\r\n";
        }
        msg += "\r\n#e#b              歡迎來到成長樹活動!!#n#k\r\n\r\n";
        if (!cm.checkItemExist(donatedItemId)) {
            cm.sendOk("捐贈道具ID設定錯誤，請聯繫管理員。")
            cm.dispose();
        }
        if (isEventCreated(mapid)) {
            rewards = getRewards(mapid);
        }
        if (getEvent(mapid) >= 0) {
            var bar = getDonatedAmount(mapid) / donatedMaxAmount * 100;
            msg += "    總共有" + (eventMaxState + 1) + "個階段。\r\n";
            msg += "    目前進度: 第" + getEvent(mapid) + "階段 \r\n         #B" + bar + "# #x-" + bar + "\r\n\r\n";
        }
        msg += "#L6# 我要捐贈" + "#i" + donatedItemId + "# #z" + donatedItemId + "##l";
        cm.sendSimple(msg);
    } else if (status == 1) {
        playerSel = selection;
        var msg = "";
        switch (selection) {
            case 0:
                if (!isEventCreated(mapid)) {
                    createEvent(player.getMapId());
                    msg = "已成功設定當前地圖為活動地圖!"
                } else {
                    msg = "當前地圖已經設為活動地圖";
                }
                cm.sendOk(msg);
                cm.dispose();
                break;
            case 1:
                if (isEventCreated(mapid) && getEvent(mapid) < 0) {
                    msg = "確定刪除當前地圖活動嗎?\r\n" + "#e#r(確認後無法恢復，需要重新設定獎勵!!)";
                    cm.sendYesNo(msg);
                } else if (getEvent(mapid) >= 0) {
                    cm.sendOk("當前活動正在執行請先強制結束才能刪除!");
                    cm.dispose();
                } else {
                    cm.sendOk("當前地圖未建立活動。")
                    cm.dispose();
                }
                break;
            case 2:
                if (isEventCreated(mapid)) {
                    msg = "請輸入物品名稱或代號:";
                    cm.sendGetText(msg);
                } else {
                    cm.sendOk("當前地圖未建立活動。")
                    cm.dispose();
                }
                break;
            case 3:
                if (isEventCreated(mapid)) {
                    if (rewards.length == 0) {
                        msg = "#e目前無設定獎勵，無須刪除。";
                        cm.sendOk(msg);
                        cm.dispose();
                    } else {
                        msg += "請選擇想刪除的獎勵物:\r\n";
                        for (var i = 0; i < rewards.length; i++) {
                            msg += "#L" + i + "##i" + rewards[i].itemid + "##l\r\n";
                        }
                        cm.sendSimple(msg);
                    }
                } else {
                    cm.sendOk("當前地圖未建立活動。")
                    cm.dispose();
                }
                break;
            case 4:
                if (npclist.length < eventMaxState) {
                    cm.sendOk("腳本設定錯誤，npc數量小於最大階段")
                    cm.dispose();
                    return;
                }
                if (rewards.length == 0) {
                    cm.sendOk("當前活動無獎勵，請先設置獎勵在開始活動。")
                    cm.dispose();
                    return;
                }
                if (isEventCreated(mapid) && getEvent(mapid) < 0) {
                    msg = "請輸入此地圖活動執行天數:";
                    cm.sendGetNumber(msg, 1, 1, 365);
                } else if (getEvent(mapid) >= 0) {
                    cm.sendOk("活動已開始無須再次啟動!!");
                    cm.dispose();
                } else {
                    cm.sendOk("當前地圖未建立活動。")
                    cm.dispose();
                }
                break;
            case 5:
                if (isEventCreated(mapid) && getEvent(mapid) >= 0) {
                    msg = "確定結束當前地圖活動嗎?\r\n" + "#e#r(確認後無法恢復，需要重新開始!!)";
                    cm.sendYesNo(msg);
                } else {
                    cm.sendOk("當前地圖未建立活動。")
                    cm.dispose();
                }
                break;
            case 6:
                if (npclist.length < eventMaxState) {
                    cm.sendOk("腳本設定錯誤，請回報管理員。")
                    cm.dispose();
                    return;
                }
                if (isEventCreated(mapid) && getEvent(mapid) >= 0) {
                    msg = "請輸入想要捐贈#i" + donatedItemId + "# #z" + donatedItemId + "#的數量:";
                    cm.sendGetNumber(msg, 1, 1, 5000);
                } else if (!isEventCreated(mapid)) {
                    cm.sendOk("當前地圖未建立活動。")
                    cm.dispose();
                } else {
                    cm.sendOk("活動尚未開始。")
                    cm.dispose();
                }
                break;
        }
    } else if (status == 2) {
        var msg = "";
        switch (playerSel) {
            case 1:
                deleteAllData(mapid);
                msg = "成功刪除活動地圖";
                cm.sendOk(msg);
                cm.dispose();
                return;
            case 2:
                if (cm.getText().trim().isEmpty()) {
                    cm.sendOk("警告: 道具名稱不得為空。");
                    cm.dispose();
                }
                cm.sendOk(cm.searchData(1, cm.getText()));
                break;
            case 3:
                var removeitem = selection;
                removeReward(mapid, rewards[removeitem].itemid, rewards[removeitem].quantity);
                msg = "已成功刪除#i" + rewards[removeitem].itemid + "# #z" + rewards[removeitem].itemid + "#";
                cm.sendOk(msg);
                cm.dispose();
                break;
            case 4:
                var duration = selection;
                startEvent(mapid, duration);
                msg = "活動正式開始!! 活動期間" + duration + "天。";
                cm.sendOk(msg);
                cm.worldMessage(6, msg);
                cm.dispose();
                break;
            case 5:
                endEvent(mapid);
                break;
            case 6:
                var donated = selection;
                var need = donatedMaxAmount - getDonatedAmount(mapid);
                if (getEvent(mapid) <= eventMaxState && donated > need) {
                    msg = "當前只需要再" + need + "個物品就好。";
                    cm.sendOk(msg);
                    cm.dispose();
                    return;
                }

                if (cm.itemQuantity(donatedItemId) >= donated) {
                    cm.gainItem(donatedItemId, -donated);
                    setDonatedAmount(mapid, donated);
                    msg = "您已成功捐贈" + donated + "個物品";
                } else {
                    msg = "需要的物品不足。";
                }
                cm.sendOk(msg)
                cm.dispose();
                break;
        }
    } else if (status == 3) {
        switch (playerSel) {
            case 2:
                setitemid = selection;
                msg = "您選擇的道具是 #i" + setitemid + "# #z" + setitemid + "# 請輸入想要設定的數量!";
                cm.sendGetNumber(msg, 1, 1, 100);
                break;
        }
    } else if (status == 4) {
        switch (playerSel) {
            case 2:
                setquantity = selection;
                addReward(mapid, setitemid, setquantity);
                msg = "已經成功增加獎勵 #i" + setitemid + "# #z" + setitemid + "# ";
                cm.sendOk(msg);
                cm.dispose();
                break;
        }
    }
}

function createEvent(mapid) {
    var conn = cm.getConnection();
    var insertSQL = "INSERT INTO growtree_maps (mapid, state, donatedAmount) VALUES (?, ?, ?)";
    var psInsert = conn.prepareStatement(insertSQL);
    psInsert.setInt(1, mapid);
    psInsert.setInt(2, -1);
    psInsert.setInt(3, 0);
    psInsert.executeUpdate();

    psInsert.close();
}

function isEventCreated(mapid) {
    var conn = cm.getConnection();
    var ps = null;
    var rs = null;

    try {
        var checkSQL = "SELECT COUNT(*) FROM growtree_maps WHERE mapid = ?";
        ps = conn.prepareStatement(checkSQL);
        ps.setInt(1, mapid);
        rs = ps.executeQuery();

        if (rs.next() && rs.getInt(1) > 0) {
            return true;
        } else {
            return false;
        }
    } catch (e) {
        e.printStackTrace();
    }  finally {
        if (rs) rs.close();
        if (ps) ps.close();
    }
}

function startEvent(mapid, duration) {
    var conn = cm.getConnection();
    var psCheck = null;
    var rsCheck = null;
    var psUpdate = null;
    var currentTime = Date.now();
    var endTime = currentTime + duration * 24 * 60 * 60 * 1000;

    try {
        var checkSQL = "SELECT state FROM growtree_maps WHERE mapid = ?";
        psCheck = conn.prepareStatement(checkSQL);
        psCheck.setInt(1, mapid);
        rsCheck = psCheck.executeQuery();

        if (rsCheck.next()) {
            var currentState = rsCheck.getInt("state");
            if (currentState === -1) {
                var updateSQL = "UPDATE growtree_maps SET startDate = ?, endDate = ?, state = 1, donatedAmount = 0 WHERE mapid = ?";
                psUpdate = conn.prepareStatement(updateSQL);
                psUpdate.setLong(1, currentTime);
                psUpdate.setLong(2, endTime);
                psUpdate.setInt(3, mapid);
                psUpdate.executeUpdate();
            }
        }
    } catch (e) {
        e.printStackTrace();
    } finally {
        if (rsCheck) rsCheck.close();
        if (psCheck) psCheck.close();
        if (psUpdate) psUpdate.close();
    }
}

function endEvent(mapid) {
    var conn = cm.getConnection();
    var ps = null;

    try {
        var updateSQL = "UPDATE growtree_maps SET state = -1, donatedAmount = 0 WHERE mapid = ?";
        ps = conn.prepareStatement(updateSQL);
        ps.setInt(1, mapid);
        var affectedRows = ps.executeUpdate();

        if (affectedRows > 0) {
            cm.sendOk("活動強制結束。");
        } else {
            cm.sendOk("未找到對應的活動或活動已結束。");
        }
        cm.dispose();
    } catch (e) {
        e.printStackTrace();
    } finally {
        if (ps) ps.close();
    }
}

function getEvent(mapid) {
    var conn = cm.getConnection();
    var ps = null;
    var rs = null;
    var currentTime = Date.now();

    try {
        var getSQL = "SELECT * FROM growtree_maps WHERE mapid = ? AND ? BETWEEN startDate AND endDate";
        ps = conn.prepareStatement(getSQL);
        ps.setInt(1, mapid);
        ps.setLong(2, currentTime);
        rs = ps.executeQuery();

        if (rs.next()) {
            var state = rs.getInt("state");
            return state;
        } else {
            return -1;
        }
    } catch (e) {
        e.printStackTrace();
    } finally {
        if (rs) rs.close();
        if (ps) ps.close();
    }
}

function setDonatedAmount(mapid, amount) {
    try {
        var conn = cm.getConnection();
        var getSQL = "SELECT donatedAmount, state FROM growtree_maps WHERE mapid = ?";
        ps = conn.prepareStatement(getSQL);
        ps.setInt(1, mapid);
        var rs = ps.executeQuery();
        if (rs.next()) {
            var currentAmount = rs.getInt("donatedAmount");
            var currentState = rs.getInt("state");

            var newAmount = currentAmount + amount;

            var npc = player.getMap().getNPCById(cm.getNpc());

            if (newAmount >= donatedMaxAmount) {
                newAmount -= donatedMaxAmount;
                if (currentState <= eventMaxState) {
                    currentState += 1;
                    cm.removePNpc(cm.getNpc());
                    cm.spawnPNpc(npclist[currentState -2], npc.getPosition());
                }

                if (currentState > eventMaxState && newAmount == 0) {
                    npc = player.getMap().getNPCById(npclist[currentState -2]);
                    var pos = new Point(0, npc.getPosition().y);
                    var npcpos = npc.getPosition().x;
                    var d = 1;
                    for (var i = 0; i < rewards.length; i++) {
                        var reward = new Item(rewards[i].itemid, 0, rewards[i].quantity);
                        pos.x = (npcpos + ((d % 2 == 0) ? (dropdistance * (d + 1) / 2) : -(dropdistance * (d / 2))));
                        player.getMap().spawnItemDrop(npc, player, reward, player.getMap().calcDropPos(pos, npc.getPosition()), false, false);
                        d++;
                    }
                    archiveEvent(mapid);
                    cm.sendOk("您已成功捐贈" + amount + "個物品");
                    if (completeRemoveNpc) {
                        cm.removePNpc(cm.getNpc());
                    }
                    return;
                }
            }
            updateDonatedAmount(newAmount, currentState, mapid);
        }
    } catch (e) {
        e.printStackTrace();
    } finally {
        if (rs) rs.close();
        if (ps) ps.close();
    }
}

function updateDonatedAmount(newAmount, newState, mapid) {
    var conn = cm.getConnection();
    var updateSQL = "UPDATE growtree_maps SET donatedAmount = ?, state = ? WHERE mapid = ?";
    ps = conn.prepareStatement(updateSQL);
    ps.setInt(1, newAmount);
    ps.setInt(2, newState);
    ps.setInt(3, mapid);
    ps.executeUpdate();
    ps.close();
}

function getDonatedAmount(mapid) {
    var conn = cm.getConnection();
    var ps = null;
    var rs = null;

    try {
        var getSQL = "SELECT donatedAmount FROM growtree_maps WHERE mapid = ?";
        ps = conn.prepareStatement(getSQL);
        ps.setInt(1, mapid);
        rs = ps.executeQuery();

        if (rs.next()) {
            var donatedAmount = rs.getInt("donatedAmount");
            return donatedAmount;
        } else {
            cm.sendOk("系統錯誤，請聯繫管理員");
            cm.dispose();
            return 0;
        }
    } catch (e) {
        e.printStackTrace();
    }  finally {
        if (rs) rs.close();
        if (ps) ps.close();
    }
}

function archiveEvent(mapid) {
    var conn = cm.getConnection();
    var psGet = null;
    var rs = null;
    var psInsertLog = null;
    var psUpdate = null;

    try {
        var getSQL = "SELECT * FROM growtree_maps WHERE mapid = ?";
        psGet = conn.prepareStatement(getSQL);
        psGet.setInt(1, mapid);
        rs = psGet.executeQuery();

        if (rs.next()) {
            var insertLogSQL = "INSERT INTO growtree_maps_log (mapid, startDate, endDate, state) VALUES (?, ?, ?, ?)";
            psInsertLog = conn.prepareStatement(insertLogSQL);
            psInsertLog.setInt(1, rs.getInt("mapid"));
            psInsertLog.setLong(2, rs.getLong("startDate"));
            psInsertLog.setLong(3, rs.getLong("endDate"));
            psInsertLog.setInt(4, rs.getInt("state"));
            psInsertLog.executeUpdate();

            var updateSQL = "UPDATE growtree_maps SET state = -1, donatedAmount = 0 WHERE mapid = ?";
            psUpdate = conn.prepareStatement(updateSQL);
            psUpdate.setInt(1, mapid);
            psUpdate.executeUpdate();
        }
    } catch (e) {
        e.printStackTrace();
    } finally {
        if (rs) rs.close();
        if (psGet) psGet.close();
        if (psInsertLog) psInsertLog.close();
        if (psUpdate) psUpdate.close();
    }
}

function addReward(madid, itemid, quantity) {
    var conn = cm.getConnection();
    var checkSQL = "SELECT COUNT(*) FROM growtree_maps WHERE mapid = ?";
    var psCheck = conn.prepareStatement(checkSQL);
    psCheck.setInt(1, mapid);
    var rsCheck = psCheck.executeQuery();

    if (rsCheck.next() && rsCheck.getInt(1) > 0) {
        var insertSQL = "INSERT INTO growtree_rewards (mapid, itemid, quantity) VALUES (?, ?, ?)";
        var psInsert = conn.prepareStatement(insertSQL);
        psInsert.setInt(1, mapid);
        psInsert.setInt(2, itemid);
        psInsert.setInt(3, quantity);
        psInsert.executeUpdate();
    } else {
        cm.sendOk("#e#k未找到該地圖的或棟，請先建立活動。");
        cm.dispose();
    }

    psCheck.close();
    rsCheck.close();
}

function removeReward(mapid, itemid, quantity) {
    var conn = cm.getConnection();
    var ps = null;
    try {
        var deleteSQL = "DELETE FROM growtree_rewards WHERE mapid = ? AND itemid = ? And quantity = ?";
        ps = conn.prepareStatement(deleteSQL);
        ps.setInt(1, mapid);
        ps.setInt(2, itemid);
        ps.setInt(3, quantity);

        ps.executeUpdate();
    } catch (e) {
        e.printStackTrace();
    } finally {
        if (ps) ps.close();
    }
}

function getRewards(mapid) {
    var conn = cm.getConnection();
    var ps = null;
    var rs = null;
    var rewardsList = [];

    try {
        var querySQL = "SELECT itemid, quantity FROM growtree_rewards WHERE mapid = ?";
        ps = conn.prepareStatement(querySQL);
        ps.setInt(1, mapid);
        rs = ps.executeQuery();

        while (rs.next()) {
            var itemid = rs.getInt("itemid");
            var quantity = rs.getInt("quantity");
            rewardsList.push({ itemid: itemid, quantity: quantity });
        }
    } finally {
        if (ps) ps.close();
        if (conn) conn.close();
    }

    return rewardsList;
}

function deleteAllData(mapid) {
    var conn = cm.getConnection();
    var psDeleteRewards = null;
    var psDeleteMaps = null;

    try {
        var deleteRewardsSQL = "DELETE FROM growtree_rewards WHERE mapid = ?";
        psDeleteRewards = conn.prepareStatement(deleteRewardsSQL);
        psDeleteRewards.setInt(1, mapid);
        psDeleteRewards.executeUpdate();

        var deleteMapsSQL = "DELETE FROM growtree_maps WHERE mapid = ?";
        psDeleteMaps = conn.prepareStatement(deleteMapsSQL);
        psDeleteMaps.setInt(1, mapid);
        psDeleteMaps.executeUpdate();
    } catch (e) {
        e.printStackTrace();
    }  finally {
        if (psDeleteRewards) psDeleteRewards.close();
        if (psDeleteMaps) psDeleteMaps.close();
    }

}