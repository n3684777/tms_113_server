/*
	Encrypted Slate of the Squad - Leafre Cave of life
*/

var status = -1;
var PLAYER;
function start() {
	action(1,0,0);
}

function action(mode, type, selection) {
	PLAYER   = cm.getPlayer();
	if(checkItem()){
			cm.sendOk("具有資格的勇者們，你們已經證明自己的實力，現在就讓我帶你們到達目的地\r\n\r\n");
			cm.warpParty(240050400);
			cm.dispose();
		}else{
			cm.sendOk("#b(一座石碑，上面寫著看不懂的文字……但上面顯現了一些圖案。)\r\n\r\n"+
						"#v4001080# - #z4001080#\r\n"+
						"#v4001081# - #z4001081#\r\n"+
						"#v4001082# - #z4001082#\r\n");
			cm.dispose();
			}
    cm.dispose();
}

function checkItem(){
   var party = PLAYER.getParty();
   var partyMembers  = party.getMembers();//LinkedList
	var it = partyMembers.iterator();
	while (it.hasNext()) {
			var cPlayer = it.next();
			var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
			if (!ccPlayer.haveItem(4001080, 1) && !ccPlayer.haveItem(4001081, 1) && !ccPlayer.haveItem(4001082, 1)  ) {
				return;false
			}
		}
   return true;
}