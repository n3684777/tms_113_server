/* 
 * NPC   : Dev Doll
 * Map   : GMMAP
 */

load('nashorn:mozilla_compat.js');
importPackage(java.lang);

var status = 0;
var invs = new Array(1,5);
var invv;
var selected;
var slot_1 = new Array();
var slot_2 = new Array();
var statsSel;
var banItem = [
	5220000,
	5220010,
	5050000,
]
function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode != 1) {
        cm.dispose();
        return;
    }
    status++;
    if (status == 1) {
        var bbb = false;
		var selStr = "#r請注意!!丟出點裝會扣 150 GASH點數#k，請找人少的地方使用 避免發生爭執，特殊道具是無法丟出的哦~~\r\n你要丟哪個點裝 丟出來會丟在地上\r\n\r\n#b";
        for (var x = 0; x < invs.length; x++) {
            var inv = cm.getInventory(invs[x]);
            for (var i = 0; i <= inv.getSlotLimit(); i++) {
                if (x == 0) {
                    slot_1.push(i);
                } else {
                    slot_2.push(i);
                }
                var it = inv.getItem(i);
                if (it == null) {
                    continue;
                }
                var itemid = it.getItemId();
                if (!cm.isCash(itemid)) {
                    continue;
                }
				if (parseInt(itemid/1000000) != 1) {
                    continue;
                }
                bbb = true;
                selStr += "#L" + (invs[x] * 1000 + i) + "##v" + itemid + "##t" + itemid + "##l\r\n";
            }
        }
        if (!bbb) {
            cm.sendOk("你沒有任何的點裝.");
            cm.dispose();
            return;
        }
        cm.sendSimple(selStr + "#k");
    } else if (status == 2) {
        invv = parseInt(selection / 1000);
        selected = selection % 1000;

        var inzz = cm.getInventory(invv);
        if (invv == invs[0]) {
            statsSel = inzz.getItem(slot_1[selected]);
        } else {
            var sitem = slot_2[selected];
            if(sitem != null){
                statsSel = inzz.getItem(slot_2[selected]);
			}
            else{
                statsSel = null;
			}
        }
        if (statsSel == null) {
            cm.sendOk("錯誤, 請再嘗試一次.");
            cm.dispose();
            return;
        }
        cm.sendGetNumber("您想要丟掉 #v" + statsSel.getItemId() + "##t" + statsSel.getItemId() + "#嗎?\r\n請輸入丟棄數量", 1, 1, statsSel.getQuantity());
    } else if (status == 3) {
        var itemid = cm.getInventory(invv).getItem(selected).getItemId();
		if(cm.getPlayer().getCSPoints(1)<150){
            cm.sendOk("您的楓點不足10點");
            cm.dispose();			
		}else{	
            for(var i =0; i< banItem.length;i++){
                if(banItem[i] == itemid){
                cm.sendOk("此物品無法使用丟棄哦!");
                cm.dispose();	
                return;				
                }            
            }		
        if (!cm.dropItem(selected, invv, selection)) {
            cm.sendOk("錯誤, 請再嘗試一次.");
            cm.dispose();
        } else {
			cm.getPlayer().modifyCSPoints(1,-150,true);
            //status = 0;//幹你娘沒用 回傳上去銃沙小
            //action(1, 0, 0);//幹你娘沒用 回傳上去銃沙小
			cm.dispose();
        }
		}
    }
}
/*
var status = 6;

function start() {
    action(0,0,0);
}

function cancelled() {
    action(0,0,0);
}

function action(mode, type, selection) {
    switch (status) {
	case 5:
	    status = 6;
	    cm.sendNext("I'm afraid I can't let you go without entering the right password. (Yes I'm bad, blame me by all means) #bYou Cheater! I'm not stupid either.")
	    break;
	case 6:
	    status = 10;
	    cm.sendGetText("For the sake of privacy, please enter your first password which you use to login. #bYou have 2 tries from now.");
	    break;
	case 10: {
	    var pw = cm.getText();
	    if (cm.checkPassword(pw)) {
		cm.sendOk("You have authenticated yourself successfully, enjoy. Celino Online Staff. #b(Please do set a second password on the login page too)");
		cm.dispose();
	    } else {
		cm.sendOk("Invalid password, please try again.");
		status = 6;
	    }
	    break;
	}
    }
}*/