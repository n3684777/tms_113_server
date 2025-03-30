/*
	Lakelis - Victoria Road: Kerning City (103000000)
**/

importPackage(Packages.tools);   //MaplePacketCreator.
importPackage(Packages.handling.world);  //World.

var 開啟揪人訊息 = true
var toSmega = 0

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {

	if (mode == 0) {
		cm.dispose();
		return;
	}
	mode == 1 ? status++ : status--

	switch (status) {
		case 0:
			cm.removeAll(4001007);
			cm.removeAll(4001008);
			if (cm.getParty() == null) { // No Party
				cm.sendOk("請組隊再來找我");
				cm.dispose();
			} else if (!cm.isLeader()) { // Not Party Leader
				cm.sendOk("請叫你的隊長來找我!");
				cm.dispose();
			} else {
				// Check if all party members are within Levels 21-30
				var party = cm.getParty().getMembers();
				var mapId = cm.getMapId();
				var next = true;
				var levelValid = 0;
				var inMap = 0;

				var it = party.iterator();
				while (it.hasNext()) {
					var cPlayer = it.next();
					if ((cPlayer.getLevel() >= 21 && cPlayer.getLevel() <= 200) || cPlayer.getJobId() == 900) {
						levelValid += 1;
					} else {
						next = false;
					}
					if (cPlayer.getMapid() == mapId) {
						inMap += (cPlayer.getJobId() == 900 ? 4 : 1);
					}
				}
				if (party.size() > 6 || inMap < 2) {
					next = false;
				}
				if (next) {
					var em = cm.getEventManager("KerningPQ");
					if (em == null) {
						cm.sendOk("找不到腳本，請聯繫GM！");
						cm.dispose();
						return;
					} else {
						var prop = em.getProperty("state");
						/*		if (prop == null || prop.equals("0")) {
									em.startInstance(cm.getParty(),cm.getMap());
								} else {
											cm.sendOk("已經有隊伍在裡面挑戰了。");
											cm.dispose();
									return;
								}
						*/
						if(cm.getMap(103000800).getCharactersSize() > 0||cm.getMap(103000801).getCharactersSize() > 0||cm.getMap(103000802).getCharactersSize() > 0||cm.getMap(103000803).getCharactersSize() > 0||cm.getMap(103000804).getCharactersSize() > 0||cm.getMap(103000805).getCharactersSize() > 0)
						{
							cm.sendOk("已經有隊伍在裡面挑戰了。");
							cm.dispose();
							return;
						}else{
							em.startInstance(cm.getParty(),cm.getMap());
						}


						cm.removeAll(4001008);
						cm.removeAll(4001007);
					}
					cm.dispose();
				} else {
					var text = "你的隊伍需要四個人,等級必須在21-200之間,請確認你的隊友有沒有都在這裡,或是裡面已經有人了!"
					if (開啟揪人訊息) {
						text += "\r\n\r\n#L1#揪人#l"
						cm.sendNext(text);
					} else {
						cm.sendNext(text);
						cm.dispose();
					}
				}
			}
			break
		case 1:
			toSmega = selection
			if (toSmega === 1) {
				cm.sendGetText("請輸入您要招人的訊息");
			}
			break
		case 2:
			if (toSmega === 1) {
				World.Broadcast.broadcastSmega(MaplePacketCreator.itemMegaphone(cm.getPlayer().name +　" : " +　cm.getText(), true, cm.getPlayer().getClient().getChannel(), null));
			}
			cm.dispose();
			break
	}
}