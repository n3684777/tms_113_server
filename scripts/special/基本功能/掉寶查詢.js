/* global cm */

var status, str, select, list;
var ttext = "";
var j = "";
var i = "";
var d = 0;
var k = "";
var 顯示機率 = 0; // 0 = 不顯示 1 = 顯示

function start() {
    status = -1;
    str = "";
    select = -1;
    str += "=============#e歡迎使用怪物掉寶查詢工具#n=============";
    str += "\r\n\r\n#b#L14#查詢物品掉落怪物#l";
    cm.sendSimple(str);
}

function action(mode, type, selection) {
    var name = cm.getPlayer().getName();
    if (mode == 1) {
        status++;
    } else {
        status--;
        cm.dispose();
        return;
    }
    switch (status) {
        case 0:
            str = selection;           
                cm.sendGetText("請輸入要查詢的道具名稱");
            break;
        case 1:
		    if (cm.getText().trim().isEmpty()) {
				cm.sendOk("警告: 道具名稱不得為空。");
				cm.dispose();
				return;
				break;
			}

            switch (str) {
                case 14:
                    cm.sendOk(cm.searchData(1, cm.getText(), false));
                    break;
                default:
                    cm.sendOk(cm.searchData(str, cm.getText(), false));
            }
            break;
        case 2: 
            if (select == -1) {
                select = selection;
            }
            switch (str) {
                case 14:
                    //cm.sendNext(cm.checkItemDrop(cm.getPlayer(), select));    
					if(select != -1){
						cm.sendSimple("您好，請問您是要查詢這個道具：\r\n\r\n"+
								  "#i"+select+"# - #z"+select+"#　嗎？");
					}else{
						cm.dispose();
						return;
					}
					
                    break;                
                default:
                    cm.dispose();
            }
            break;
        case 3:   
			switch (str) {
				case 14:
					if(顯示機率 == 0){
						var conn = cm.getConnection();
						//sql語法
						var ps = conn.prepareStatement("SELECT * FROM drop_data WHERE itemid = ?");
						
						ps.setInt(1, select);
						var RankDataBase = ps.executeQuery();
						ttext += "玩家您好，您要查詢的掉落物\r\n\r\n"
						ttext += "#i"+select+"# - #z"+select+"#\r\n\r\n"
						ttext += "會由以下怪物掉落：\r\n\r\n"
						while (RankDataBase.next()) {
							//取得需要的欄位
							i = RankDataBase.getString("dropperid");
							ttext += "#b#o" + i + "#\r\n"
							j++;
						}
						cm.sendSimple(ttext);
						RankDataBase.close();
						ps.close();
					}else{
						var conn = cm.getConnection();
						var ps = conn.prepareStatement("SELECT * FROM drop_data WHERE itemid = ?");
						
						ps.setInt(1, select);
						var RankDataBase = ps.executeQuery();
						var ttext = "玩家您好，您要查詢的掉落物\r\n\r\n";
						ttext += "#i" + select + "# - #z" + select + "#\r\n\r\n";
						ttext += "會由以下怪物掉落：\r\n\r\n";
						
						while (RankDataBase.next()) {
							var dropperId = RankDataBase.getInt("dropperid");
							var chance = RankDataBase.getInt("chance");

							// 将掉落机率转换为百分比形式
							var dropRate;
							if (chance >= 999999) {
								dropRate = "100.00";  // 处理极高的掉落率
							} else {
								dropRate = (chance / 10000).toFixed(2);  // 其他掉落率按比例计算
							}
							
							ttext += "#b#o" + dropperId + "# - 機率 " + dropRate + " %\r\n";
						}
						
						cm.sendSimple(ttext);
						RankDataBase.close();
						ps.close();
					}
					
					cm.dispose();
					break;
					
				default:
					cm.dispose();
			}


            break;
                        
        default:          
            cm.dispose();
    }
}