/*      
 *  功能：寵物自動補水
 *  製作：Winter冬季
 *  時間：2018年06月15日
 */
 
importPackage(Packages.server);
importPackage(Packages.java.lang);

var itemBorder = "#fUI/UIWindow.img/Item/New/inventory/0#";
//var PreviousPage = new Array(9900007, "home_chr");//上一頁
var status = 0;
//選擇藥水, 選擇百分比
var SelectPotion, SelectPercentage;
//運行開關
var PotionRun = false, PercentageRun = false;
var run = false, backtrack = 130, percentage = 0;


function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0 || mode == 0) {
            cm.dispose();
            return
        }
        status--;
    }
	if (run) {
		if (PotionRun) {
			if (selection != backtrack)
				var list = cm.getInventory(2).getItem(selection).getItemId();
			else
				list = -1;
			if (SelectPotion)
				cm.getPlayer().setAutoPotionHP(0, list);
			else
				cm.getPlayer().setAutoPotionMP(0, list);
			PotionRun = false;
		}
		if (PercentageRun) {
			if (SelectPercentage)
				cm.getPlayer().setAutoPotionHP(1, selection);
			else
				cm.getPlayer().setAutoPotionMP(1, selection);
			PercentageRun = false;
		}
		PotionRun = false;
		PercentageRun = false;
		run = false;
	}
    if (status == 0) {
		var AutoHp = [cm.getPlayer().getAutoPotionHpInfo(0),cm.getPlayer().getAutoPotionHpInfo(1)], AutoMp = [cm.getPlayer().getAutoPotionMpInfo(0),cm.getPlayer().getAutoPotionMpInfo(1)];
		var text = "#e自動補水系統#r點擊即可直接修改，補水百分比請勿設定 100% \r\n\r\n";
		var ii = MapleItemInformationProvider.getInstance();
		var HP = AutoHp[0] > 1000000, MP = AutoMp[0] > 1000000;
		text += "#L0#" + (HP? "#i" + AutoHp[0] + ":#" : itemBorder) + "#l#L128#";
		text += format(" ", 15, "低於:"+AutoHp[1]+"%#l");
		
		text += "#L1#" + (MP? "#i" + AutoMp[0] + ":#" : itemBorder) + "#l#L129#";
		text += format(" ", 15, "低於:"+AutoMp[1]+"%#l");
		text += "#b\r\n\r\n";
		text += format(" ", 25, "  恢復HP");
		text += format(" ", 25, "恢復MP");
		cm.sendSimple(text);
	} else if (status == 1) {
		if (selection >= 128) {
			SelectPercentage = selection==128;
			PercentageRun = true;
			cm.sendGetNumber("請輸入低於百分比多少進行補品", 1, 1, 99);
		} else {
			var ii = MapleItemInformationProvider.getInstance();
			text = "#e請選擇補品:#n\r\n\r\n#b";
			SelectPotion = selection==0;
			PotionRun = true;
			//藥水檢測篩選
			var itemList = cm.getInventory(2).list().iterator();
			while (itemList.hasNext()) {
				var item = itemList.next();
				if (ii.getItemEffect(item.getItemId()).getHp() == 0 && ii.getItemEffect(item.getItemId()).getHpR() == 0 && SelectPotion)
					continue;
				if (ii.getItemEffect(item.getItemId()).getMp() == 0 && ii.getItemEffect(item.getItemId()).getMpR() == 0 && !SelectPotion)
					continue;
				text += "#L" + item.getPosition() + "##i" + item.getItemId() + ":#";
			}
			text += "\r\n#L" + backtrack + "##r清空";
			cm.sendSimple(text);
		}
		run = true;
		status = -1;
    }
}


function isPet(itemId) {
	return Math.floor(itemId/10000) == 500;
}
	
var format = function FormatString(c, length, content) {
    var str = "";
    var cs = "";
    if (content.length > length) {
        str = content;
    } else {
        for (var j = 0; j < length - content.getBytes("big5").length; j++) {
            cs = cs + c;
        }
    }
    str = content + cs;
    return str;
}