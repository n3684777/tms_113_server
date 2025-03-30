var status = -1;
var 上頁腳本 = "聚合功能";
var 線1 = "#fMap/MapHelper/worldMap/npcPos3/6#";
var 腳本路徑 = "系統/銀行系統";
function action(mode, type, selection) {
    Player = cm.getPlayer();
    if (mode == 1) {
        status++;
    } else {
        cm.dispose();
        return;
    }

    switch (status) {
        case 0:
            var msg = "			#e#b【 你好，歡迎使用銀行系統 】#k#n\r\n\r\n";
            msg += "			目前銀行餘額為 #e#b"+Player.getBankMeso()+"#k#n 元\r\n";
			msg += "				 請問想辦理甚麼業務\r\n\r\n";
			msg += ""+線1+" "+線1+" "+線1+" "+線1+" "+線1+" "+線1+" "+線1+" "+線1+" #e#b以下目錄#k#n "+線1+" "+線1+" "+線1+" "+線1+" "+線1+" "+線1+" "+線1+" "+線1+"\r\n\r\n";
            msg += "					#L0##b存款#k#l\r\n\r\n";
            msg += "					#L1##b提款#k#l\r\n\r\n";
			msg += "				  #L2##b返回萬能#k#l\r\n";
            cm.sendSimple(msg); // 讓玩家選擇的介面更為友善
            break;
        case 1:
			_type = selection;
            if (selection == 0) {
                cm.sendGetNumber("請問要存入多少楓幣？", Player.getMeso(), 1, Player.getMeso());
            } else if (selection == 1) {
                cm.sendGetNumber("請問要提款多少楓幣？", 1, 1, 2100000000);
            } else if (selection == 2) {
				cm.dispose();
				cm.openNpc(9010000, 上頁腳本);
				return;
			}
            break;
        case 2:
            if (selection <= 0) {
				cm.sendOk("您被偵測異常紀錄，使用過程已被紀錄Log！");
				cm.worldMessage(5,"玩家『"+ cm.getPlayer().getName() +"』被偵測到使用異常軟體修改數據，請通知GM檢查");
				cm.GAMEPLAYERLOG("銀行系統", "使用異常軟體修改數據", 0, selection);
				cm.dispose();
				return;
			}

            if (_type == 0) {
                // 存款
                if (Player.getMeso() >= selection) {
                    cm.gainMeso(-selection); // 角色扣除楓幣
                    Player.updateBankMeso(selection); // 存款至銀行
                    cm.sendOk("已成功存入 " + selection + " 楓幣至銀行。");
                } else {
                    cm.sendOk("您沒有足夠的楓幣來存款！");
                }
            } else if (_type == 1) {
                // 提款
                if (selection + Player.getMeso() <= 2100000000) {
                    if (Player.getBankMeso() >= selection) {
                        cm.gainMeso(selection); // 角色獲得楓幣
                        Player.updateBankMeso(-selection); // 銀行扣除楓幣
                        cm.sendOk("已成功提款 " + selection + " 楓幣。");
                    } else {
                        cm.sendOk("您在銀行中沒有足夠的楓幣來提款！");
                    }
                } else {
                    var excessAmount = (selection + Player.getMeso()) - 2100000000;
                    cm.sendOk("您無法提款，因為提款後的總金額將超過21億。\r\n您超出了 #r" + excessAmount + " #k楓幣。");
                }
            }
            break;
        default:
            cm.dispose();
			cm.openNpc(9010000, 腳本路徑);
			return;
    }
}
