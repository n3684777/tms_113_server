var status = -1;
/* Clear inv */
var ClearText = "";
var ClearUp = 0;
var ClearTitle = Array("EQUIP", "USE", "SETUP", "ETC", "CASH");
var slot = Array();
var startnum = 0;
var endnum = 0;
function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else if (mode == 0) {
		status--;
	} else {
		cm.dispose();
		return;
	}
	
	if (status == 0) {
		
		ClearText = "";
		for (var i = 0; i < ClearTitle.length; i++)
			ClearText += "\r\n#b#L" + i + "#" + ClearTitle[i] + "#l#k";

		cm.sendSimple("清除身上背包的道具是一個很慎重的事情!!\r\n#r請慎重做抉擇，若誤清GM不會負責!!" + ClearText);
		
	} else if (status == 1) {
		
		ClearText = ClearTitle[selection];
		switch (ClearText) {
		case 'EQUIP':
			ClearUp = 1;
			break;
		case 'USE':
			ClearUp = 2;
			break;
		case 'SETUP':
			ClearUp = 3;
			break;
		case 'ETC':
			ClearUp = 4;
			break;
		case 'CASH':
			ClearUp = 5;
			break;
		}
		var avail = "";
		var dd = 0;
		for (var i = 0; i < 96; i++) {
			if (cm.getInventory(ClearUp).getItem(i) != null) {
				var itemId = cm.getInventory(ClearUp).getItem(i).getItemId();
				if (itemId == null) {
					i++; //防止下一步錯誤
				}
				avail += "#L" + Math.abs(i) + "##i" + cm.getInventory(ClearUp).getItem(i).getItemId() + "##z" + cm.getInventory(ClearUp).getItem(i).getItemId() + "##l\r\n";
			} else {
				dd++;
			}
			slot.push(i);
		}
		if (dd == 96) {
			cm.sendNext(ClearText + "沒有任何道具可以清除!");
			cm.dispose();
			return;
		}
		cm.sendSimple("請選擇您要清除的道具。\r\n#b" + avail);
		
		
	} else if (status == 2) {
		startnum = selection;
		var avail = "";
		for (var i = startnum; i < 96; i++) {
			if (cm.getInventory(ClearUp).getItem(i) != null) {
				avail += "#L" + Math.abs(i) + "##i" + cm.getInventory(ClearUp).getItem(i).getItemId() + "##z" + cm.getInventory(ClearUp).getItem(i).getItemId() + "##l\r\n";
			}
			slot.push(i);
		}
		cm.sendSimple("再確認一次以防出錯。\r\n#b" + avail);		
		
		
		
	}else if (status == 3) {
		var item = cm.getInventory(ClearUp).getItem(startnum).getItemId();
		endnum = selection;
		
		cm.sendOk("成功刪除了#i"+item+"##t"+item+"#\r\n#b");
		cm.removeitem(cm.getClient(), ClearText, startnum, 1);
		cm.dispose();
	}
	else {
		cm.dispose();
	}
}
