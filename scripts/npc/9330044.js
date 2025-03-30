var status = -1;

function action(mode, type, selection) {
    if (cm.getQuestStatus(8655)  == 1 && !cm.haveItem(4031541, 1)) {
		cm.gainItem(4031541, 1);
		cm.sendOk("我就知道你願意幫助我，現在你已經拿到來自墮落城市的阿勒斯的請求卡片了。那還在等什麼？快來去出發作個熱心助人的傳情小天使吧！");
    } else {
		cm.sendOk("願天下有情人終成眷屬~超幸福戀人王星凌，要我幫助7對戀人達成他們所願喔！");
    }
    cm.dispose();
}