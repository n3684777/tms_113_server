var status = -1;
var 藍星 = "";
var 愛心 = "";
var 限制等級 = 10;
var requireItem = 4000001; /* 轉蛋券 */
var 髮型抽獎_男 = 
	[
	//髮型代碼,中獎機率 1 - 100,顯示是否為大獎 1 = 大獎 0 = 一般
	[30000, 50, 0],[30010, 50, 1],[34000, 50, 1],
	];
var 髮型抽獎_女 = 
	[
	//髮型代碼,中獎機率 1 - 100,顯示是否為大獎 1 = 大獎 0 = 一般
	[30000, 50, 0],[30010, 50, 1],[34000, 50, 1],
	];

var 臉型抽獎_男 = 
	[
	//臉型代碼,中獎機率 1 - 100,顯示是否為大獎 1 = 大獎 0 = 一般
	[21000, 50, 0],[21010, 50, 1],[21016, 50, 0],[20029, 50, 1],[20019, 50, 1],
	];
var 臉型抽獎_女 = 
	[
	//臉型代碼,中獎機率 1 - 100,顯示是否為大獎 1 = 大獎 0 = 一般
	[21000, 50, 0],[21010, 50, 1],[21016, 50, 0],[20029, 50, 1],[20019, 50, 1],
	];



function action(mode, _type, selection) {
    if (mode == 1) {
        status++;
    } else {
        cm.dispose();
        return;
    }

    switch (status) {
        case 0:
            if (cm.getPlayer().getLevel() < 限制等級) {
            cm.sendOk("抽取髮型或臉型只能從"+限制等級+"級開始使用。");
            status = -1;
            cm.dispose();
            break;
    		}else{
            cm.sendSimple(
			"			#e#b【請選擇您要進行的內容】#k#n\r\n\r\n" +
            "  			 #L100##b使用 #i"+requireItem+"# 抽髮型#l#k\r\n\r\n" +
			"#L101#"+藍星+"  查看男生髮型大獎#l\r\n"+
			"#L102#"+藍星+"  查看女生髮型大獎#l\r\n\r\n"+
            "  			 #L110##b使用 #i"+requireItem+"# 抽臉型#l#k\r\n\r\n" +
            "#L111#"+藍星+"  查看男生臉型大獎#l\r\n"+
            "#L112#"+藍星+"  查看女生臉型大獎#l\r\n"
			);
            break;
        }
        case 1:{
			選擇選項 = selection;
			目前髮型陣列 = Array();
			目前臉型陣列 = Array();
			playerGender = cm.getPlayer().getGender(); // 0 = 男, 1 = 女
			if(選擇選項 == 100 || 選擇選項 == 110){
				if (cm.haveItem(requireItem)) {
					if(選擇選項 == 100){
						var 髮型 = getHairStyle(playerGender);
						var 獲得髮型代碼 = 髮型[0];
						cm.setHair(獲得髮型代碼);
						cm.sendOk("享受您的新造型吧！！謝謝光臨！！\r\n\r\n"+
								  "#fCharacter/Hair/000"+獲得髮型代碼+"/default/hair#");
					}else{
						var 臉型 = getFaceStyle(playerGender);
						var 獲得臉型代碼 = 臉型[0];
						cm.setFace(獲得臉型代碼);
						cm.sendOk("享受您的新臉型吧！！謝謝光臨！！"+
								  "#fCharacter/Face/000"+獲得臉型代碼+"/default/face#");
					}
					cm.gainItem(requireItem, -1);
				} else {
					cm.sendOk("很抱歉由於你沒有#b#i" + requireItem + "##k，所以不能抽取哦。");
				}
			}if(選擇選項 == 101 || 選擇選項 == 111 || 選擇選項 == 102 || 選擇選項 == 112){
				if(選擇選項 == 101){
					var str = "#e#b內有的髮型大獎如下:\r\n\r\n\r\n";
					for(var i = 0; i< 髮型抽獎_男.length; i++){
						if(髮型抽獎_男[i][2] == 1){
							目前髮型陣列.push(髮型抽獎_男[i][0]);
						}
					}
					sendStyle(目前髮型陣列);
				}if(選擇選項 == 111){
					var str = "#e#b內有的臉型大獎如下:\r\n\r\n\r\n";
					for(var i = 0; i< 臉型抽獎_男.length; i++){
						if(臉型抽獎_男[i][2] == 1){
							目前臉型陣列.push(臉型抽獎_男[i][0]);
						}
					}
					sendStyle(目前臉型陣列);
				}if(選擇選項 == 102){
					var str = "#e#b內有的髮型大獎如下:\r\n\r\n\r\n";
					for(var i = 0; i< 髮型抽獎_女.length; i++){
						if(髮型抽獎_女[i][2] == 1){
							目前髮型陣列.push(髮型抽獎_女[i][0]);
						}
					}
					sendStyle(目前髮型陣列);
				}if(選擇選項 == 112){
					var str = "#e#b內有的臉型大獎如下:\r\n\r\n\r\n";
					for(var i = 0; i< 臉型抽獎_女.length; i++){
						if(臉型抽獎_女[i][2] == 1){
							目前臉型陣列.push(臉型抽獎_女[i][0]);
						}
					}
					sendStyle(目前臉型陣列);
				}
				
			}
				
            break;
        }
        case 2:
            cm.dispose();
    }
}


function getHairStyle() {
    var playerGender = cm.getPlayer().getGender(); 
    var 抽獎池 = playerGender == 0 ? 髮型抽獎_男 : 髮型抽獎_女; 
    
    var totalWeight = 0;
    for (var i = 0; i < 抽獎池.length; i++) {
        totalWeight += 抽獎池[i][1];
    }

    var playerCurrentHair = cm.getPlayer().getHair();
    var newHair;

    do {
        var randomNum = Math.random() * totalWeight;
        var weightSum = 0;

        for (var i = 0; i < 抽獎池.length; i++) {
            weightSum += 抽獎池[i][1];
            if (randomNum <= weightSum) {
                newHair = 抽獎池[i];
                break;
            }
        }
    } while (newHair[0] === playerCurrentHair);

    return newHair;
}

function getFaceStyle() {
    var playerGender = cm.getPlayer().getGender(); 
    var 抽獎池 = playerGender == 0 ? 臉型抽獎_男 : 臉型抽獎_女;
    
    var totalWeight = 0;
    for (var i = 0; i < 抽獎池.length; i++) {
        totalWeight += 抽獎池[i][1];
    }

    var playerCurrentFace = cm.getPlayer().getFace();
    var newFace;

    do {
        var randomNum = Math.random() * totalWeight;
        var weightSum = 0;

        for (var i = 0; i < 抽獎池.length; i++) {
            weightSum += 抽獎池[i][1];
            if (randomNum <= weightSum) {
                newFace = 抽獎池[i];
                break;
            }
        }
    } while (newFace[0] === playerCurrentFace);

    return newFace;
}

function sendStyle(array) {
   陣列 = array;
   cm.sendStyle("以下是本次的查詢，看看有沒有你喜歡的！！", 陣列);
}