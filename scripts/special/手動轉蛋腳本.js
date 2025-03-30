
/*
	Name:  材料轉蛋機
	Place: 轉蛋屋
*/
load('nashorn:mozilla_compat.js');
importPackage(Packages.handling.world);
importPackage(Packages.tools);
importPackage(Packages.server);
var status = -1;
/* 顯示商品 
 * 將道具ID 放入 [] 中
 * 範例 : [1372005, 1092005, 下一個要放入的代碼]
 */
 
 
var 轉蛋機名稱 = "不知道是什麼轉蛋機";
var requireItem = 5220082; /* 轉蛋券 */

var 普通道具 = [

	[4000001, 1],[4000001, 1],[4000001, 1],
			   
			   ];

var 罕見道具 = [

	[4000002, 1],[4000002, 1],[4000002, 1],
			   
	];
	
var 稀有道具 = [

	[4000003, 1],[4000003, 1],[4000003, 1],
			   
	];

//這裡只會顯示會轉到的物品
var showItems = [4000001,4000002,4000003,];

function getRandom(min, max) {
	if (min > max) {
		return(-1);
	}

	if (min == max) {
		return(min);
	}

	return(min + parseInt(Math.random() * (max - min + 1)));
}

var 普通 = 普通道具[getRandom(0, 普通道具.length - 1)];
var 罕見 = 罕見道具[getRandom(0, 罕見道具.length - 1)];
var 稀有 = 稀有道具[getRandom(0, 稀有道具.length - 1)];

var chance = getRandom(0, 100);


function action(mode, _type, selection) {
    if (mode == 1) {
        status++;
    } else {
        cm.dispose();
        return;
    }

    switch (status) {
        case 0:
            if (cm.getPlayer().getLevel() < 10) {
            cm.sendOk(""+轉蛋機名稱+"只能從10級開始使用。");
            status = -1;
            cm.dispose();
            break;
    		}else{
            cm.sendYesNo("你好，我是"+轉蛋機名稱+"，需要使用 #i"+requireItem+"# 請問你要轉蛋嗎？\r\n\r\n#r馬鞍請至萬能NPC中的「製造專區」→「馬鞍製造」，製作萬能馬鞍。#k");
            break;
        }
        case 1:{
            var str = "#e#b#i2022619# "+轉蛋機名稱+"內有的大獎如下:\r\n\r\n";
            for(var i = 0; i< showItems.length; i++){
                str += " #i"+showItems[i]+"# #z"+showItems[i]+"#\r\n";
            }
            cm.sendNext(str);
            break;
        }
        case 2: {
            if (cm.haveItem(requireItem)) {
				if(chance > 0 && chance <= 10){
					道具 = 罕見[0];
					道具數量 = 罕見[1];
                    var item = MapleInventoryManipulator.addbyId_Gachapon(cm.getPlayer().getClient(), 道具, 1);
					//cm.gainItem(道具, 道具數量);
					cm.gainItem(requireItem, -1);
					cm.sendOk("共喜您獲得了：\r\n\r\n"+
							  "#i" + 道具 + "# #z" + 道具 + "# - #b"+道具數量+"個#k\r\n\r\n");
					World.Broadcast.broadcastMessage(MaplePacketCreator.getGachaponMega("【獲得大獎】" + cm.getPlayer().getName()," : 被他從"+轉蛋機名稱+"轉到了，大家恭喜他吧！", item, cm.getPlayer().getClient().getChannel())); //ppms綠廣
				}if(chance > 11 && chance <= 15){
					道具 = 稀有[0];
					道具數量 = 稀有[1];
                    var item = MapleInventoryManipulator.addbyId_Gachapon(cm.getPlayer().getClient(), 道具, 1);
					//cm.gainItem(道具, 道具數量);
					cm.gainItem(requireItem, -1);
					cm.sendOk("共喜您獲得了：\r\n\r\n"+
							  "#i" + 道具 + "# #z" + 道具 + "# - #b"+道具數量+"個#k\r\n\r\n");
					World.Broadcast.broadcastMessage(MaplePacketCreator.getGachaponMega("【獲得大獎】" + cm.getPlayer().getName()," : 被他從"+轉蛋機名稱+"轉到了，大家恭喜他吧！", item, cm.getPlayer().getClient().getChannel())); //ppms綠廣
				}else{
					道具 = 普通[0];
					道具數量 = 普通[1];
					cm.gainItem(道具, 道具數量);
					cm.gainItem(requireItem, -1);
					cm.sendOk("共喜您獲得了：\r\n\r\n"+
							  "#i" + 道具 + "# #z" + 道具 + "# - #b"+道具數量+"個#k\r\n\r\n");
					
				}           
            } else {
                cm.sendOk("很抱歉由於你沒有#b#i" + requireItem + "##k，所以不能轉蛋哦。");
            }
        }
        case 3:
            cm.dispose();
    }
}
