function start() {
	var itemQuantity = cm.getPlayer().itemQuantity(4032142);
	if(cm.isQuestActive(20716) && itemQuantity < 1){
		cm.sendOk("一股甜甜的樹皮香味撲鼻而來。\r\n\r\n從樹根中蒐集了#v"+4032142+"# #b#z"+4032142+"##k");
		cm.gainItem(4032142, 1);
		cm.dispose();
	}else{
		cm.sendOk(".......");
		cm.dispose();
	}
	
}