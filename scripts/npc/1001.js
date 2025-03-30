/*
  卡納音樂播放 v62 版本 卡納團隊編譯
*/

importPackage(Packages.scripting);

var status = 0;
var price = 500000;
var price2 = 1000000;
var map = 50;
var worldmap = 100;


//中文歌曲
var Cmusic = Array("Cmusic/01", "Cmusic/02", "Cmusic/03", "Cmusic/04", "Cmusic/05", "Cmusic/06", "Cmusic/07", "Cmusic/08");
var CmusicB = Array("狂風裡擁抱", "手掌心", "平凡之路", "剛好遇見你", "默", "微加幸福", "暖心", "醜八怪");

//英文歌曲
var Emusic = Array("BgmEvent/FunnyRabbitFaster", "Emusic/02", "Emusic/03", "Emusic/04", "Emusic/05", "Emusic/06", "Emusic/07", "Emusic/08");
var EmusicB = Array("Christina Perri", "DAISHI DANCETake Me Hands", "JessieJFlashlight", "MARINAANDTHEDIAMONDSPART", "Shirley Morrow", "TheUnguided", "TheVampsWakeUp", "ZeddAlessia");

//日文歌曲
var Jmusic = Array("Jmusic/01", "Jmusic/02", "Jmusic/03", "BgmEvent/FunnyRabbitFaster","Jmusic/06");
var JmusicB = Array("小小戀歌", "沉默的多數", "MASAYUME CHASING", "明天好天氣", "星野源");

//電音歌曲
var EDMmusic = Array("EDMmusic/01", "EDMmusic/02", "EDMmusic/03", "EDMmusic/04", "EDMmusic/05", "EDMmusic/06", "EDMmusic/07", "EDMmusic/08", "EDMmusic/09");
var EDMmusicB = Array("Faded", "GavinJamesTired", "IWannaKnow", "ThisIsWhatYouCame", "David Guetta", "ShapeofYou", "ITookAPillInIbiza", "DontLetMeDown", "SomethingJustLikeThis");



function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode < 1) {
		cm.dispose();
		return;
	} else if (mode == 1) {
		status++;
	} else {
		status--;
	}
	if (status == 0) {
		cm.sendSimple("嘿！玩遊戲玩膩了吧？聽點不同的歌曲如何？我們提供了各類最有名的歌曲供各位欣賞，只需付些少少的楓幣即可與所有人同樂\r\n#b"+
					  "#L0#選取歌曲#l\r\n#b"+
					  "#L1#聽聽歌曲系統說明#l");	
	}if (status == 1){
		if (selection == 0){
		cm.sendSimple("你要查找哪種音樂資訊呢？？\r\n\r\n#b"+
					  "#L2#中文歌曲#l#k\r\n#b"+
					  "#L3#英文歌曲#l#k\r\n#b"+
					  "#L4#日文歌曲#l\r\n#b"+
					  "#L5#電音歌曲#l");
		}else if (selection == 1){
		cm.sendOk("音樂系統蒐集了全球最火紅的知名歌曲，您沒聽過也一定會覺得合您口味。\r\n"+
					  "本地圖播放 楓幣 "+map+" 萬\r\n"+
					  "全地圖播放 楓幣 "+worldmap+" 萬");
			cm.dispose();
		}
	}if (status == 2){
	mySelection = selection;
	if (mySelection == 2 || mySelection == 3 || mySelection == 4 || mySelection == 5){
		switch (mySelection){
			case 2 : if(cm.getMeso() > 10){
			store = true;	
            var 天使之音 = "#b#e天使之音#k#n";
            天使之音 += "\r\n來聽點歌曲吧.\r\n";
            for (var i = 0; i < CmusicB.length; i++) {
                天使之音 += "\r\n#L" + i + "# " +CmusicB[i]+ "#l";
            }
            cm.sendSimple(天使之音);
			
		}break;
			case 3 : if(cm.getMeso() > 10){
				
            var 天使之音 = "#b#e天使之音#k#n";
            天使之音 += "\r\n來聽點歌曲吧.\r\n";
            for (var i = 0; i < EmusicB.length; i++) {
                天使之音 += "\r\n#L" + i + "# " +EmusicB[i]+ "#l";
            }
            cm.sendSimple(天使之音);
		}break;		
			case 4 : if(cm.getMeso() > 10){
            var 天使之音 = "#b#e天使之音#k#n";
            天使之音 += "\r\n來聽點歌曲吧.\r\n";
            for (var i = 0; i < JmusicB.length; i++) {
                天使之音 += "\r\n#L" + i + "# " +JmusicB[i]+ "#l";
            }
            cm.sendSimple(天使之音);
		}break;		
			case 5 : if(cm.getMeso() > 10){
            var 天使之音 = "#b#e天使之音#k#n";
            天使之音 += "\r\n來聽點歌曲吧.\r\n";
            for (var i = 0; i < EDMmusicB.length; i++) {
                天使之音 += "\r\n#L" + i + "# " +EDMmusicB[i]+ "#l";
            }
            cm.sendSimple(天使之音);
		}break;			 
			}
		}
	}else if (status == 3){
            if (mySelection == 2) {
                cm.sendSimple("您選擇的歌曲是#r "+CmusicB[selection]+"#k請問要用何種方式播放呢#k?"+"\r\n"+
							 "#L21#本地圖播放#l 需花費"+ price +" 楓幣"+"\r\n"+
							 "#L22#全地圖播放#l 需花費"+ price2 +" 楓幣");
							 
                mc = selection;
            }else if(mySelection == 3){
                cm.sendSimple("您選擇的歌曲是#r "+EmusicB[selection]+"#k請問要用何種方式播放呢#k?"+"\r\n"+
							 "#L31#本地圖播放#l 需花費"+ price +" 楓幣"+"\r\n"+
							 "#L32#全地圖播放#l 需花費"+ price2 +" 楓幣");
                mc = selection;				
			}else if(mySelection == 4){
                cm.sendSimple("您選擇的歌曲是#r "+JmusicB[selection]+"#k請問要用何種方式播放呢#k?"+"\r\n"+
							 "#L41#本地圖播放#l 需花費"+ price +" 楓幣"+"\r\n"+
							 "#L42#全地圖播放#l 需花費"+ price2 +" 楓幣");
                mc = selection;				
			}else if(mySelection == 5){
                cm.sendSimple("您選擇的歌曲是#r "+EDMmusicB[selection]+"#k請問要用何種方式播放呢#k?"+"\r\n"+
							 "#L51#本地圖播放#l 需花費"+ price +" 楓幣"+"\r\n"+
							 "#L52#全地圖播放#l 需花費"+ price2 +" 楓幣");
                mc = selection;				
			}else {
                cm.sendOk("音源出現問題");
                cm.dispose();
            }
        }else if (status == 4) {
			mySelection = selection;
            if (cm.getMeso() < price || cm.getMeso() < price2) {
                cm.sendOk("您沒有足夠的楓幣喔");
                cm.dispose();
            } else if(mySelection == 21){
                cm.gainMeso(-price);
				cm.changeMusic(Cmusic[mc]);
				cm.mapMessage("玩家"+ cm.getChar().getName() +"為各位點播了【"+CmusicB[mc]+"】 敬請欣賞");
                cm.dispose();
            } else if(mySelection == 22){
                cm.gainMeso(-price2);
				cm.changeWorldMusic(Cmusic[mc]);
				cm.worldMessage(5,"玩家"+ cm.getChar().getName() +"為各位點播了【"+CmusicB[mc]+"】 敬請欣賞");
                cm.dispose();
            } else if(mySelection == 31){
				cm.gainMeso(-price);
				cm.changeMusic(Emusic[mc]);
				cm.mapMessage("玩家"+ cm.getChar().getName() +"為各位點播了【"+EmusicB[mc]+"】 敬請欣賞");
				cm.sendYesNo("請問要聆聽#r "+mc+" "+mySelection+"#k?");
                cm.dispose();
            } else if(mySelection == 32){
				cm.gainMeso(-price);
				cm.changeWorldMusic(Emusic[mc]);
				cm.worldMessage(5,"玩家"+ cm.getChar().getName() +"為各位點播了【"+EmusicB[mc]+"】 敬請欣賞");
				cm.sendYesNo("請問要聆聽#r "+mc+" "+mySelection+"#k?");
                cm.dispose();
            } else if(mySelection == 41){
				cm.gainMeso(-price);
				cm.changeMusic(Jmusic[mc]);
				cm.mapMessage("玩家"+ cm.getChar().getName() +"為各位點播了【"+JmusicB[mc]+"】 敬請欣賞");
                cm.dispose();
            } else if(mySelection == 42){
				cm.gainMeso(-price);
				cm.changeWorldMusic(Jmusic[mc]);
				cm.worldMessage(5,"玩家"+ cm.getChar().getName() +"為各位點播了【"+JmusicB[mc]+"】 敬請欣賞");
                cm.dispose();
            } else if(mySelection == 51){
				cm.gainMeso(-price);
				cm.changeMusic(EDMmusic[mc]);
				cm.mapMessage("玩家"+ cm.getChar().getName() +"為各位點播了【"+EDMmusicB[mc]+"】 敬請欣賞");
                cm.dispose();
            } else if(mySelection == 52){
				cm.gainMeso(-price);
				cm.changeWorldMusic(EDMmusic[mc]);
				cm.worldMessage(5,"玩家"+ cm.getChar().getName() +"為各位點播了【"+EDMmusicB[mc]+"】 敬請欣賞");
                cm.dispose();
            }else{
				cm.sendYesNo("點播歌曲失敗，請聯絡管理員。");
                cm.dispose();				
				
			}
        }
}