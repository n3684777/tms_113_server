/*
	Name:  一番賞轉蛋機
	Place: 轉蛋屋
	操作方法 : https://www.xinbiao-aicl.com/thread-11418-1-1.html
*/
/*
    Name:  一番賞轉蛋機
    Place: 轉蛋屋
    用法:打開資料表 gashapon_items_special 設置裡面的itemid跟count(數量)
	重製獎勵 : 資料表 gashapon_items_special 設置裡面的 count_Confirm 是預設數量，再使用指令 !ReloadGS 會將  count_Confirm  的數量寫入到對應的表格中
*/
load('nashorn:mozilla_compat.js');
importPackage(Packages.handling.world);
importPackage(Packages.tools);
importPackage(Packages.server);
var status = -1;

var itema = [5220010, 1];
var GashaponName = "一番賞轉蛋機";

function action(mode, _type, selection) {
    if (mode == 1) {
        status++;
    } else {
        cm.dispose();
        return;
    }

    switch (status) {
        case 0:
            if (cm.getPlayer().getLevel() <= 29) {
                cm.sendOk("" + GashaponName + "只能從30級開始使用。");
                cm.dispose();
            } else {
                var msg = "#r你好，我是" + GashaponName + "，請問你要轉蛋嗎？\r\n轉蛋機內共有N種物品#b\r\n";
                msg += "#L0#單抽一發入魂！！#l\r\n";
                msg += "#L2#快速10連抽!#l\r\n";
                msg += "#L3#土豪30連抽!#l \r\n";
                msg += "#L4#查看本期主打大獎#l \r\n";
                msg += "#L1#查看目前剩餘轉蛋物#l\r\n";
                cm.sendOk(msg);
            }
            break;
        case 1: {
            var s;
			var a = 0;
            if (selection == 1) {
                var specialItemsMap = cm.getPlayer().DIY_getItemsFromGashaponItemsSpecial();

				var msg = "";
				msg += "#b#e本期所有獎品如下：#n#k\r\n\r\n";

				for (var itemId in specialItemsMap) {
					var Data = specialItemsMap[itemId];
					var chance = Data.chance;
					var count = Data.count;
					msg += "#i" + itemId + "# #t" + itemId + "# 機率: #b" + chance + "#k %  剩餘數量 ：#b"+count+"#k 個 \r\n";
				}
				
				cm.sendOk(msg);
				cm.dispose();
            } else if (selection == 0 || selection == 2 || selection == 3) {
                var count = 1;
                if (selection == 2) {
                    count = 10;
                } else if (selection == 3) {
                    count = 30;
                }
                if (cm.haveItem(itema[0], itema[1] * count)) {
                    var msg = "";
					var msg_2 = "";
                    for (var i = 0; i < count; i++) {
						s = cm.SpecialGashaponReward(cm.getPlayer().getClient().getChannel(),"【一番賞轉蛋】" + cm.getPlayer().getName()+" : 被他從"+GashaponName+"轉到了，大家恭喜他吧！");
						if (s > 0) {
							a++;
							msg += "#i" + s + "# ";
							cm.gainItem(itema[0], -itema[1]);
						} else if (s == -1 || s == -2) {
							if(s == -1 ){
								msg_2 += "\r\n#r一番賞轉蛋獎品被抽光囉！！\r\n\r\n";
							}else{
								msg_2 += "\r\n#r您沒有抽滿" + count + "張,可能是身上空間不夠。\r\n\r\n";
							}
							break;
						}
					}
                    var msgA = "#e你已轉 #b" + a + " #k張轉蛋券,獲得:#n#k\r\n\r\n"+ msg_2 + msg;
                    cm.sendOk(msgA);
                    cm.dispose();
                } else {
                    cm.sendOk("很抱歉由於你的物品不足,所以不能轉蛋哦。");
                    cm.dispose();
                }
            }else if (selection == 4) {
				var specialItems = cm.getPlayer().DIY_getSpecialItemsFromGashaponItemsSpecial();

				var msg = "";
				msg += "#b#e本期主打大獎獎品如下：#n#k\r\n\r\n";
				for (var itemId in specialItems) {
					var itemData = specialItems[itemId];
					var chance = itemData.chance;
					var count = itemData.count;
					msg += "#i" + itemId + "# #t" + itemId + "# 機率: #b" + chance + "#k %  剩餘數量 ：#b"+count+"#k 個\r\n";
				}
				cm.sendOk(msg);
				cm.dispose();
			}

            break;
        }
        default:
            cm.dispose();
    }
}

