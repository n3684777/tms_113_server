/*
* @autor 卡比
* @date 2023/12/18
* @describe :
*      櫥窗系統
*
*/
importPackage(Packages.handling.world.accountlog); // EventLog
var 上頁腳本 = "獎勵專區/獎勵專區";
var 腳本路徑 = "系統/櫥窗系統";
var 圖標_暗 = "#fUI/Basic.img/CheckBox/0#";
var 圖標_亮 = "#fUI/Basic.img/CheckBox/1#";
var 向下箭頭= "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#"
var 紅色箭頭= "#fUI/UIWindow/Quest/icon6/7#"

function start() {
    action(1, 0, 0);
}



var buttonIdMapping = {};
var sel;
var itemsel;
var itemQuan;
var totalneeds;
var collectSeriesList = [];

function action(mode, type, selection) {
    var collections = cm.getCollectionSeriesList();
    if (mode == 0 && status == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        if (status === 1) {
            if (selection >= 100)
                status++;
        } else {
            status++;
        }
    } else {
        status--;
    }
    if (status == 0) {
		var x = 0;
        var msg = "";
        msg += "\t\t\t\t  #r#e【 櫥 窗 系 統 】#k#n\r\n\r\n\r\n";
        msg += ""+線1+" "+線1+" "+線1+" "+線1+" "+線1+" "+線1+" "+線1+" "+線1+" #e#b捐贈方式#k#n "+線1+" "+線1+" "+線1+" "+線1+" "+線1+" "+線1+" "+線1+" "+線1+"\r\n\r\n";
        msg += "   #L0#"+藍色角點+" 物品捐贈#l  #L1#"+藍色角點+" 一次捐贈#l   #L999#"+藍色角點+" 查看能力#l\r\n\r\n\r\n"
        msg += ""+線1+" "+線1+" "+線1+" "+線1+" "+線1+" "+線1+" "+線1+" "+線1+" #e#b以下目錄#k#n "+線1+" "+線1+" "+線1+" "+線1+" "+線1+" "+線1+" "+線1+" "+線1+"\r\n\r\n";
        for(var i = 100; i < collections.length + 100; i++) {
            var QN = collections[i - 100].getName();
            var seriesId = collections[i - 100].getId();
			x++;
            if (!checkQuestStatus(seriesId, QN)) {
                addQuestStatus(seriesId, QN, 0, "");
            }
			var questStatus = getQuestStatus(seriesId, QN);
			if ((cm.getPlayer().getPrizeLog(QN) >= 1 || cm.getEventLogValue(EventLogType.ACCOUNT, QN) >= 1) && questStatus.status == 1) {
				msg += "#e#d#L " + i +"#"+圖標_亮+"" + format("   "+QN+"", 12) +"#l";
			}else{
				msg += "#e#d#L" + i + "#"+圖標_暗+"" + format("   "+QN+"", 12) +"#l";
			}
			if (x % 2 == 0) {
				msg += "\r\n\r\n";
			} else {
				msg += "	";
			}
        }
        cm.sendSimple(msg);
    } else if (status == 1) {
        if (selection < 10 || selection >= 100) {
            sel = selection;
        }
		if (selection == 999) {
			cm.dispose();
			cm.openNpc(9010000, "櫥窗系統/櫥窗能力");
			return;
		}
        var msg = "";
        if (sel == 0) {
            var buttonId = 1000;
            msg += "\t\t\t\t  #e#b目前可捐贈的收藏物#k";
            var hasItemsToDonate = false;
            var displayedItems = {};
            for (var i = 0; i < collections.length; i++) {
                var QN = collections[i].getName();
                var seriesId = collections[i].getId();
                var hasItemsInSeries  = false;
				var seriesId = collections[i].getId();
				var questStatus = getQuestStatus(seriesId, QN);
				if ((!(cm.getPlayer().getPrizeLog(QN) >= 1) || !(cm.getEventLogValue(EventLogType.ACCOUNT, QN) >= 1)) && !(questStatus.status == 1)) {
					for (var j = 1; j <= 5; j++) {
						for (var k = 0; k < 96; k++) {
							if (cm.getInventory(j).getItem(k) != null) {
								var itemid = cm.getInventory(j).getItem(k).getItemId();
								if (itemid == null) {
									continue;
								}
								if (!displayedItems[itemid] && isCollectiblesItem(buttonId, QN, seriesId, itemid)) {
									if (!hasItemsInSeries ) {
										msg += "\r\n\r\n\r\n#b#e【 " + QN + " 】#n#k\r\n";
										hasItemsInSeries  = true;
									}
									msg += "#L" + buttonId + "# #i" + itemid + ":# #l";
									buttonId++;
									displayedItems[itemid] = true;
									hasItemsToDonate = true;
								}
							}
						}
					}
				}

            }
            if (!hasItemsToDonate) {
                msg = "#e#r目前沒有道具可捐獻";
                cm.sendOk(msg);
                返回 = true;
            } else {
                cm.sendSimple(msg);
            }
        }  else if (sel == 1) {
            msg = "\t#e#b【 選擇的系列 】#k#n\r\n";
            if (selection === 99) {
                for (var i = 0; i < collections.length; i++) {
                    if (collectSeriesList.indexOf(collections[i]) >= 0) {
                        continue
                    }
                    collectSeriesList.push(collections[i]);
                }

                msg += "\r\n\r\n"+線1+" 已經選擇全部系列\r\n";
                msg += "\r\n-------------------------------------------------\r\n\r\n";
                msg += "#L100# "+向下箭頭+" 選擇完畢 #l\r\n";
            } else {
                if (selection >= 10) {
                    collectSeriesList.push(collections[selection - 10]);
                }
                for (var i = 0; i < collectSeriesList.length; i++) {
					if(i == 0){
						 msg += "\r\n";
					}
                    msg += ""+線1+" " + collectSeriesList[i].getName() + "  ";
                }

                msg += "\r\n\r\n#L100# "+向下箭頭+" 選擇完畢 #l\r\n";
                msg += "#L99# "+向下箭頭+" 全部系列 #l\r\n";
                msg += "\r\n-------------------------------------------------\r\n\r\n";
                msg += "\t#e#b【 請選擇想要捐贈的系列#k 】#n\r\n";
                for (var i = 0; i < collections.length; i++) {
                    if (collectSeriesList.indexOf(collections[i]) >= 0) {
                        continue
                    }
                    msg += "#L" + (i + 10) + "# "+紅色箭頭+" " + collections[i].getName() + " #l\r\n";
                }
            }
            cm.sendSimple(msg);
        } else {
            if (sel == -1) {
                cm.dispose();
                return;
            }
            var series = collections[sel - 100];
            var QN = series.getName();
            var Msg = series.getMsg();
            var seriesId = series.getId();
            var questStatus = getQuestStatus(seriesId, QN);
            var customData = questStatus.customData ? JSON.parse(questStatus.customData) : {};
			if ((cm.getPlayer().getPrizeLog(QN) >= 1 || cm.getEventLogValue(EventLogType.ACCOUNT, QN) >= 1) && questStatus.status == 1) {
                msg += "本系列已經領取過了哦\r\n\r\n";
				返回 = true;
            }else{
				msg = "\t#b#e  【 您選擇了 " + QN + " 以下為所需道具 】#k#n\r\n\r\n";
				for (var idx in series.getRequirements()) {
					var requirement = series.getRequirements()[idx]
					var itemid = requirement.getItemId();
					var totalRequired = requirement.getQty();
					var donatedCount = customData[itemid] || 0;
					msg += "#e#k【 #i" + itemid + "# 】#n #z" + itemid + "# "+紅色箭頭+" (#r " + donatedCount + " / " + totalRequired + " #k) 個\r\n\r\n";
				}
				msg += "\r\n\t\t#b#e  		【 完成後可獲得 】#k#n\r\n\r\n";
				msg += "" + Msg + "\r\n\r\n";
				for (var idx in series.getRewards()) {
					var reward = series.getRewards()[idx];
					msg += "【 #i" + reward.getItemId() + ":# 】  數量 : #r" + reward.getQty() + "#k 個\r\n\r\n";
				}
				if ((cm.getPlayer().getPrizeLog(QN) < 1 && cm.getEventLogValue(EventLogType.ACCOUNT, QN) < 1) && questStatus.status == 1) {
                    //msg += questStatus.status + "";
                    msg += "\t   #L998##r登記並領取獎勵(只有第一次能領)#l\r\n\r\n";
				}else{
					返回 = true;
				}
			}
            cm.sendOk(msg);
        }
    } else if (status == 2) {
		if(返回){
			cm.dispose();
			cm.openNpc(9010000, 腳本路徑);
			return;
		}
        if (sel == 0) {
            itemsel = selection;
            if (itemsel == -1) {
                cm.dispose();
                return;
            }
            totalneeds = buttonIdMapping[itemsel];
            var questStatus = getQuestStatus(totalneeds.seriesId, totalneeds.QN);
            var customData = questStatus.customData ? JSON.parse(questStatus.customData) : {};
            var donatedCount = customData[totalneeds.itemid] || 0;
            var stillNeeded = totalneeds.itemq - donatedCount;
			var ownedQuantity = getOwnedItemQuantity(cm.getPlayer(), totalneeds.itemid);
            var msg = "該物品捐贈還需要 #b" + stillNeeded + "#k 個\r\n目前您擁有 #b"+ownedQuantity+"#k 個 請輸入捐贈數量:\r\n";
            cm.sendGetNumber(msg, 1, 1, ownedQuantity);
        } else if (sel == 1) {
            var buttonId = 1;
            var msg = "";
            var hasItemsToDonate = false;
            var displayedItems = {};
            for (var i = 0; i < collectSeriesList.length; i++) {
                var QN = collectSeriesList[i].getName();
                var seriesId = collectSeriesList[i].getId();
                var hasItemsInSeries  = false;
                var seriesId = collectSeriesList[i].getId();
                var questStatus = getQuestStatus(seriesId, QN);
                if ((!(cm.getPlayer().getPrizeLog(QN) >= 1) || !(cm.getEventLogValue(EventLogType.ACCOUNT, QN) >= 1)) && !(questStatus.status == 1)) {
                    for (var j = 1; j <= 5; j++) {
                        for (var k = 0; k < 96; k++) {
                            if (cm.getInventory(j).getItem(k) != null) {
                                var itemid = cm.getInventory(j).getItem(k).getItemId();
                                if (itemid == null) {
                                    continue;
                                }
                                if (!displayedItems[itemid] && isCollectiblesItem(buttonId, QN, seriesId, itemid)) {
                                    if (!hasItemsInSeries ) {
                                        hasItemsInSeries  = true;
                                    }
                                    buttonId++;
                                    displayedItems[itemid] = true;
                                    hasItemsToDonate = true;
                                }
                            }
                        }
                    }
                }

            }
            if (!hasItemsToDonate) {
                msg = "#e#r目前沒有道具可捐獻";
                cm.sendOk(msg);
                返回 = true;
            }else{
                msg += "確認要一次捐贈嗎?\r\n\r\n";
                msg += "#r#e(警告: 道具將從背包最前面欄位的開始刪!)\r\n\r\n【 確認後無法復原 】";
                cm.sendYesNo(msg);
            }
        } else {
            itemsel = selection;
            if (itemsel == -1) {
                cm.dispose();
                return;
            }
            var series = collections[sel - 100];
            var QN = series.getName();
            var dp = series.getDp();
            if (cm.getPlayer().getPrizeLog(QN) < 1 && cm.getEventLogValue(EventLogType.ACCOUNT, QN) < 1) {
                var msg = "#e#r確定使用該角色領取獎勵嗎?\r\n#k額外獎勵如下:\r\n\r\n\r\n";
                for (var idx in series.getRewards()) {
                    var reward = series.getRewards()[idx];
                    msg += "【 #i" + reward.getItemId() + "# 】 數量: #r" + reward.getQty() + "#k 個\r\n";
                }
                cm.sendYesNo(msg);
            } else {
                cm.sendOk("您已經登記過了!");
                返回 = true;
            }
        }
    } else if (status == 3) {
		if(返回){
			cm.dispose();
			cm.openNpc(9010000, 腳本路徑);
			return;
		}else{
			if (sel == 0) {
				if (selection <= 0) {
					cm.sendOk("您被偵測異常紀錄，使用過程已被紀錄Log！");
					cm.worldMessage(5,"玩家『"+ cm.getPlayer().getName() +"』被偵測到使用異常軟體修改數據，請通知GM檢查");
					cm.GAMEPLAYERLOG("櫥窗系統異常", "使用異常軟體修改數據", 0, selection);
					cm.dispose();
					return;
				}
				itemQuan = selection;
				var msg = "";
				var questStatus = getQuestStatus(totalneeds.seriesId, totalneeds.QN);
				var customData = questStatus.customData ? JSON.parse(questStatus.customData) : {};
				var donatedCount = customData[totalneeds.itemid] || 0;
				var stillNeeded = totalneeds.itemq - donatedCount;
				if (stillNeeded < itemQuan) {
					msg = "當前只需要再" + stillNeeded + "個物品就好。";
					cm.sendOk(msg);
					返回 = true;
				}
				if (!cm.haveItem(totalneeds.itemid, itemQuan)){
					msg = "背包物品不足";
					cm.sendOk(msg);
					返回 = true;
				}
				msg = "確定要捐贈  #i" + totalneeds.itemid + "#  #r" + itemQuan + "#k 個嗎?\r\n\r\n#r#e(警告: 道具將從背包最前面欄位的開始刪!) \r\n\r\n【 確認後無法復原 】";
				cm.sendYesNo(msg);
			} else if (sel == 1) {
                for (var i = 0; i < collectSeriesList.length; i++) {
                    autoCollectItems(collectSeriesList[i]);
                }
                var msg = "捐贈成功!";
                cm.sendOk(msg);
                返回 = true;
            } else {
				var series = collections[sel - 100];
				var QN = series.getName();
				var dp = parseInt(series.getDp());
				if (!isCanHold()) {
					var msg = "背包空間不足";
                    cm.sendOk(msg);
                    cm.dispose();
                    return;
				} else {
					for (var idx in series.getRewards()) {
						var rewardItem = series.getRewards()[idx];
						var itemid = rewardItem.getItemId();
						var itemq = rewardItem.getQty();
						cm.gainItem(itemid, itemq);
					}
					if (dp > 0) {
						cm.getPlayer().setDividend(dp);
					}
                    cm.addEventLog(EventLogType.ACCOUNT, QN, 1);
					cm.getPlayer().setPrizeLog(QN);
					cm.setSuperLog(QN,"帳號");
				}
				//cm.getPlayer().fakeRelog();
				cm.processCommand("@刷新道具能力");
				cm.dispose();
				return;
			}
		}
    } else if (status == 4) {
		if(返回){
			cm.dispose();
			cm.openNpc(9010000, 腳本路徑);
			return;
		}else{
			if (sel == 0) {
				cm.gainItem(totalneeds.itemid, -itemQuan);
                var updates = [];
                //var questStatus = getQuestStatus(totalneeds.seriesId, totalneeds.QN);
                updates.push({seriesId: totalneeds.seriesId, name: totalneeds.QN, itemid : totalneeds.itemid, donateAmount: itemQuan});
				updateCustomData(updates);
				var msg = "捐贈成功!";
				cm.sendOk(msg);
				checkAndCompleteQuest(cm.getCollectionSeries(totalneeds.seriesId));
			}
		}

    } else if (status == 5) {
		cm.dispose();
		cm.openNpc(9010000, 腳本路徑);
		return;
	}
}

function isCanHold(){
   var player = cm.getPlayer();
   var equFreeSlot = player.getInventory(MapleInventoryType.EQUIP).getNumFreeSlot();
   var useFreeSlot = player.getInventory(MapleInventoryType.USE).getNumFreeSlot();
   var etcFreeSlot = player.getInventory(MapleInventoryType.ETC).getNumFreeSlot();
   return (equFreeSlot>=6 && useFreeSlot>=6 && etcFreeSlot>=6 && cm.getMeso()<=2000000000);
}

function autoCollectItems(series) {
    var name = series.getName();
    var seriesId = series.getId();
    var questStatus = getQuestStatus(seriesId, name);
    var customData = questStatus.customData ? JSON.parse(questStatus.customData) : {};
    var updates = [];
    var donatedItemsCount = {};
    for (var j = 1; j <= 5; j++) {
        for (var k = 0; k < 96; k++) {
            if (cm.getInventory(j).getItem(k) != null) {
                var itemid = cm.getInventory(j).getItem(k).getItemId();
                if (itemid == null) {
                    continue;
                }
                if (isCollectiblesItem(0, name, seriesId, itemid)) {
                    var totalRequired = getTotalRequired(series, itemid);
                    donatedItemsCount[itemid] = (donatedItemsCount[itemid] || 0) + (customData[itemid] || 0);

                    if (donatedItemsCount[itemid] < totalRequired) {
                        var donatedCount = customData[itemid] || 0;
                        var donateAmount = GameConstants.isEquip(itemid) ? 1 : Math.min(totalRequired - donatedCount, cm.getPlayer().getItemQuantity(itemid, false));
                        var isPushed = false;
                        var eqIdx = -1;
                        for (var u = 0; u < updates.length; u++) {
                            if (updates[u].seriesId === seriesId && updates[u].itemid === itemid) {
                                if (GameConstants.isEquip(itemid)) {
                                    eqIdx = u;
                                } else {
                                    isPushed = true;
                                }
                                break;
                            }
                        }
                        if (!isPushed) {
                            if (GameConstants.isEquip(itemid) && eqIdx > 0) {
                                updates[u].donateAmount += donateAmount;
                            } else {
                                updates.push({seriesId: seriesId, name: name, itemid: itemid, donateAmount: donateAmount});
                            }
                            cm.gainItem(itemid, -donateAmount);
							cm.GAMEPLAYERLOG("櫥窗系統", "扣除道具--", itemid, donateAmount);
							cm.GAMEPLAYERLOG("櫥窗系統", "===================", 0, 0);
                            donatedItemsCount[itemid] += donateAmount;
                        }
                    }
                }
            }
        }
    }
    updateCustomData(updates);
    checkAndCompleteQuest(series);
}

function checkAndCompleteQuest(series) {
    var name = series.getName();
    var seriesId = series.getId();
    var questStatus = getQuestStatus(seriesId, name);
    var customData = questStatus.customData ? JSON.parse(questStatus.customData) : {};

    var isCompleted = true;
    for (var idx in series.getRequirements()) {
        var item = series.getRequirements()[idx];
        var donatedCount = customData[item.getItemId()] || 0;
        if (donatedCount < item.getQty()) {
            isCompleted = false
            break
        }
    }

    if (isCompleted) {
        questStatus.status = 1;
        saveQuestStatus(seriesId, name, questStatus);
    }
}

function getTotalRequired(series, itemid) {
    for (var idx in series.getRequirements()) {
        var rItem = series.getRequirements()[idx];
        if (rItem.getItemId() == itemid) {
            return rItem.getQty();
        }
    }
    return 0;
}

function isCollectiblesItem(buttonId, QN, seriesId, itemid) {
    var series = cm.getCollectionSeries(seriesId);
    var requirements = series.getRequirements();
    for (var idx in requirements) {
        var item = requirements[idx];
        if (item.getItemId() == itemid) {
            var questStatus = getQuestStatus(seriesId, QN);
            var customData = questStatus.customData ? JSON.parse(questStatus.customData) : {};
            var totalRequired = item.getQty();
            var donatedCount = customData[itemid] || 0;
            if (donatedCount < totalRequired) {
                buttonIdMapping[buttonId] = {seriesId: seriesId, QN: QN, itemid: itemid, itemq: item.getQty() };
                return true;
            }
            return false;
        }
    }
    return false;
}

function addQuestStatus(seriesId, name, status, customData) {
    var conn = cm.getConnection();
    var ps = null;
    try {
        var insertSQL = "INSERT INTO queststatus_account (accountid, questid, status, customData, time) VALUES (?, ?, ?, ?, ?)";
        ps = conn.prepareStatement(insertSQL);
        ps.setInt(1, cm.getPlayer().getAccountID());
        ps.setInt(2, seriesId);
        ps.setInt(3, status);
        ps.setString(4, customData);
        ps.setLong(5, Date.now());
        ps.executeUpdate();
    } catch (e) {
        e.printStackTrace();
    }  finally {
        if (ps) ps.close();
    }
}

function checkQuestStatus(seriesId, name) {
    var conn = cm.getConnection();
    var ps = null;
    var rs = null;
    try {
        var checkSQL = "SELECT COUNT(*) FROM queststatus_account WHERE accountid = ? AND questid = ?";
        ps = conn.prepareStatement(checkSQL);
        ps.setInt(1, cm.getPlayer().getAccountID());
        ps.setInt(2, seriesId);
        rs = ps.executeQuery();
        if (rs.next() && rs.getInt(1) > 0) {
            return true; // 任務已存在
        } else {
            return false; // 任務不存在
        }
    } catch (e) {
        e.printStackTrace();
    }  finally {
        if (rs) rs.close();
        if (ps) ps.close();
    }
}

function getQuestStatus(seriesId, name) {
    var conn = cm.getConnection();
    var ps = null;
    var rs = null;
    try {
        var querySQL = "SELECT status, customData FROM queststatus_account WHERE accountid = ? AND questid = ?";
        ps = conn.prepareStatement(querySQL);
        ps.setInt(1, cm.getPlayer().getAccountID());
        ps.setInt(2, seriesId);
        rs = ps.executeQuery();
        if (rs.next()) {
            var questStatus = {
                status: rs.getInt("status"),
                customData: rs.getString("customData"),
            };
            return questStatus;
        } else {
            return null;
        }
    } catch (e) {
        e.printStackTrace();
    }  finally {
        if (rs) rs.close();
        if (ps) ps.close();
    }
}

function updateCustomData(updates) { //seriesId, name, itemid, donatedAmount
    var series = {};
    var msg = "";
    updates.forEach(function (update) {
        var key = update.seriesId + "-" + update.name;
        if (!series[key]) {
            var questStatus = getQuestStatus(update.seriesId, update.name);
            var existingCustomData = questStatus.customData ? JSON.parse(questStatus.customData) : {};
            series[key] = {
                seriesId: update.seriesId,
                name: update.name,
                customData: existingCustomData
            };
        }
        var group = series[key];
        group.customData[update.itemid] = (group.customData[update.itemid] || 0) + update.donateAmount;
    });
    for (var key in series) {
        if (series.hasOwnProperty(key)) {
            var group = series[key];
            var questStatus = getQuestStatus(group.seriesId, group.name);
            questStatus.customData = JSON.stringify(group.customData);
            questStatus.status = 0; // 或者其他适当的状态
            saveQuestStatus(group.seriesId, group.name, questStatus);
        }
    }
}

function saveQuestStatus(seriesId, name, questStatus) {
    var conn = cm.getConnection();
    var ps = null;
    try {
        var updateSQL = "UPDATE queststatus_account SET customData = ?, status = ?, time = ? WHERE accountid = ? AND questid = ?";
        ps = conn.prepareStatement(updateSQL);
        ps.setString(1, questStatus.customData);
        ps.setInt(2, questStatus.status);
        ps.setLong(3, Date.now());
        ps.setInt(4, cm.getPlayer().getAccountID());
        ps.setInt(5, seriesId);
        ps.executeUpdate();
    } catch (e) {
        e.printStackTrace();
    } finally {
        if (ps) ps.close();
    }
}

function format(content, length) {
   var str = "";
   var cs = "";
   if(content.length > length) {
      str = content;
   }else{
      for(var i = 0; i < length - content.toString().length; i++) {
         cs = cs + " ";
      }
   }
   str = content + cs;
   return str;
}

function getOwnedItemQuantity(player, itemId) {
    return player.getItemQuantity_check(itemId, false);
}

load('nashorn:mozilla_compat.js');
importPackage(Packages.server);
importPackage(Packages.client.inventory);
importPackage(Packages.constants);

var status = -1;
var 圖標_暗 = "#fUI/Basic.img/CheckBox/0#";
var 圖標_亮 = "#fUI/Basic.img/CheckBox/1#";
var 獎勵字 = "#fUI/UIWindow/EntrustedFishingResult/BtGetAllItem/mouseOver/0#";
var 紅色箭頭 = "#fUI/UIWindow/Quest/icon6/7#";
var 藍色角點 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var 上頁 = "#fUI/UIWindow/itemSearch/BtBack/mouseOver/0#";
var 線1 = "#fMap/MapHelper/worldMap/npcPos3/6#";
var 返回 = false;