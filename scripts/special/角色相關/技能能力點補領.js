importPackage(Packages.handling.world.accountlog);
var status = -1;
//這裡設定log的名稱 判定是否已領過
var log = "技能點補領";


//玩家名稱, 要補多少技能點
var namelist = Array(
	["測式一號", 4],
	["測試用", 2],
	["測試用", 2],
	["測試用", 2],
	["測試用", 2],
	["測試用", 2],
	["測試用", 2],
	["測試用", 2],
	["測試用", 2],
	["測試用", 2]
);

	
function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	name = cm.getPlayer().getName();
	if (mode == 1) {
		status++;
	} else if (mode == 0) {
		status--;
	} else {
		cm.dispose();
		return;
	}

	if (status == 0) {
		var choice = "";			
		var canget = false;
		for(var i =0; i< namelist.length;i++){
			if(namelist[i][0].equals(name)){
				canget = true;
				號碼 = i;
			}
		}if(canget){
			if (cm.getPlayer().getPrizeLog(log+name) >= 1) {
				cm.sendOk("您的角色已經領取過" + log + "了喔！");
				cm.safeDispose();
				return;
			}
			cm.getPlayer().setPrizeLog(log+name);
			cm.getPlayer().gainSP(namelist[號碼][1]);
			choice += "#b您已經領取到了技能點數 "+namelist[號碼][1]+" 點 !!\r\n";
			
		}else{
			choice += "#r您不在補領名單上。\r\n";
		}
		cm.sendOk(choice);
		cm.dispose();
	}
}
