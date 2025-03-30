var status = -1;
load('nashorn:mozilla_compat.js');
importPackage(Packages.server); // MapleItemInformationProvider.
importPackage(java.util); // Collections.
var 上頁 = "#fUI/UIWindow/itemSearch/BtBack/mouseOver/0#";
var 線1 = "#fMap/MapHelper/worldMap/npcPos3/6#";
var v1;
var v2;
var v3;
var v4;
var v5;


var 上頁腳本 = "聚合功能";
var 護膚道具 = 5153013;
var 護膚道具數量 = 1;
var 染髮道具 = 5151013;
var 染髮道具數量 = 1;
var 整形道具 = 5152050;
var 整形道具數量 = 1;
var 美髮道具 = 5150040;
var 美髮道具數量 = 1;

//膚色選項
膚色 = [0, 1, 2, 3, 4 ,6 ,7 ,8 ,10 ,11];

var 髮型臉型讀取 = [
//請注意，臉型每個區間不宜超過100 否則會有異常
//[膚色 = 0 髮色 = 1 髮型 = 2 臉型 = 3、名稱、讀取資料區間開頭、讀取資料區間結尾、花費道具、花費道具數量)
	[0, "更換膚色" , 0, 0, 護膚道具, 護膚道具數量],
	[1, "更換髮色" , 0, 0, 染髮道具, 染髮道具數量],
	[2, "髮型系列_1" , 1, 1000, 美髮道具, 美髮道具數量],//OK
	[2, "髮型系列_2" , 1001, 1478, 美髮道具, 美髮道具數量],//OK
	//[2, "髮型系列_3" , 2001, 3000, 美髮道具, 美髮道具數量],//OK
	//[2, "髮型系列_4" , 3001, 4000, 美髮道具, 美髮道具數量],//OK
	//[2, "髮型系列_5" , 4001, 5000, 美髮道具, 美髮道具數量],//OK
	//[2, "髮型系列_6" , 5001, 5492, 美髮道具, 美髮道具數量],//OK
	//[2, "髮型系列_7" , 6001, 7000, 美髮道具, 美髮道具數量],//OK
	//[2, "髮型系列_8" , 7001, 8000, 美髮道具, 美髮道具數量],//OK
	//[2, "髮型系列_9" , 8001, 9000, 美髮道具, 美髮道具數量],//OK
	//[2, "髮型系列_10" , 9001, 10000, 美髮道具, 美髮道具數量],//OK
	//[2, "髮型系列_11" , 10001, 11000, 美髮道具, 美髮道具數量],//OK
	//[2, "髮型系列_12" , 11001, 12000, 美髮道具, 美髮道具數量],//OK
	//[2, "髮型系列_13" , 12001, 13000, 美髮道具, 美髮道具數量],//OK
	//[2, "髮型系列_14" , 13001, 14000, 美髮道具, 美髮道具數量],//OK
	//[2, "髮型系列_15" , 14001, 15000, 美髮道具, 美髮道具數量],//OK
	//[2, "髮型系列_16" , 15001, 15330, 美髮道具, 美髮道具數量],//OK
	[3, "臉型系列_1" , 1, 448, 整形道具, 整形道具數量],//OK
	//[3, "臉型系列_2" , 1001, 2000, 整形道具, 整形道具數量],//OK
	//[3, "臉型系列_3" , 2001, 2500, 整形道具, 整形道具數量],//OK
	//[3, "臉型系列_4" , 3001, 4000, 整形道具, 整形道具數量],//OK
	//[3, "臉型系列_5" , 4001, 5000, 整形道具, 整形道具數量],//OK
	//[3, "臉型系列_6" , 5001, 6000, 整形道具, 整形道具數量],//OK
	//[3, "臉型系列_7" , 6001, 7000, 整形道具, 整形道具數量],//OK
	//[3, "臉型系列_8" , 7001, 8000, 整形道具, 整形道具數量],//OK
	//[3, "臉型系列_9" , 8001, 9000, 整形道具, 整形道具數量],//OK
	//[3, "臉型系列_10" , 9001, 9855, 整形道具, 整形道具數量],//OK
	
]; 
function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
	status = (mode == 1 ? status+1 : cm.dispose());
	if (status == 0) {
		var msg = "#b		想要擁有獨一無二的造型嗎 找我就對了！！#k\r\n\r\n";
		msg += ""+線1+" "+線1+" "+線1+" "+線1+" "+線1+" "+線1+" "+線1+" "+線1+" #e#b以下目錄#k#n "+線1+" "+線1+" "+線1+" "+線1+" "+線1+" "+線1+" "+線1+" "+線1+"\r\n\r\n\r\n";
		var x = 0;
		for (var i = 0; i < 髮型臉型讀取.length; i++) {
			x++;
			msg +=
				"		#L" + i + "##b" + 髮型臉型讀取[i][1] + " #k- 需要 【#i"+髮型臉型讀取[i][4]+"# 】 #e#r"+髮型臉型讀取[i][5]+"#k#n 個#l#k\r\n\r\n";
		}
		x_2 = x + 1;
		msg +=  "\r\n\r\n                #L"+x_2+"#"+上頁+"#l\r\n" ; 
		cm.sendSimple(msg);
	}else if(status == 1){
      
      選擇號碼 = selection;
	  if(選擇號碼 == x_2){
			 cm.dispose();
			 cm.openNpc(9010000, 上頁腳本);
			 return;
	  }else{
		  代號 = 髮型臉型讀取[選擇號碼][0];
		  區間開頭 = 髮型臉型讀取[選擇號碼][2];
		  區間結尾 = 髮型臉型讀取[選擇號碼][3];
		  道具 = 髮型臉型讀取[選擇號碼][4];
		  道具數量 = 髮型臉型讀取[選擇號碼][5];
		  目前髮型陣列 = Array();
		  目前臉型陣列 = Array();
			  if(!cm.haveItem(道具, 道具數量)){
				  cm.sendOk("您的#i"+道具+"# #z"+道具+"#，數量不夠，無法更換。");
				  cm.dispose();
				  return;	
			  }if(代號 == 0){
				sendStyle(膚色);
			  
			  }if(代號 == 1){
				  目前髮型 = cm.getPlayer().getHair();
				  var current = parseInt(目前髮型 / 10) * 10;
                    for (var v3 = 0; v3 < 8; v3++)
                        if (hairExists(目前髮型 + v3))
                            目前髮型陣列.push(current + v3);
                 sendStyle(目前髮型陣列);
				  
			  }if (代號 == 2) {
					var 髮型資料庫 = MapleItemInformationProvider.getInstance().selectHair(區間開頭, 區間結尾);
					for (var v3 = 0; v3 < 髮型資料庫.length; v3++) {
						if (hairExists(髮型資料庫[v3])) {
							目前髮型陣列.push(髮型資料庫[v3]);
						}
					}
					sendStyle(目前髮型陣列);
			 }if (代號 == 3) {
				 var 臉型資料庫 = MapleItemInformationProvider.getInstance().selectFace(區間開頭, 區間結尾);
				 for (var v6 = 0; v6 < 臉型資料庫.length; v6++) {
						if (faceExists(臉型資料庫[v6])) {
							目前臉型陣列.push(臉型資料庫[v6]);
						}
					}
                 sendStyle(目前臉型陣列);
			 }

		}  
   }else if(status == 2){
	   選擇 = selection;
	   if(代號 == 0){
			cm.setSkin(膚色[選擇]);
	   }if(代號 == 1){
			cm.setHair(目前髮型陣列[選擇]);
	   }if(代號 == 2){
			cm.setHair(目前髮型陣列[選擇]);
	   }if(代號 == 3){
			cm.setFace(目前臉型陣列[選擇]);
	   }
		
	   cm.sendOk("享受您的新造型吧!!謝謝光臨!!");
	   cm.gainItem(道具, -道具數量);
	   cm.dispose();
   }


}

function sendStyle(array) {
   陣列 = array;
   cm.sendStyle("選擇你最喜歡的", 陣列);
}

function hairExists(hair) {
    var 髮型資料庫 = MapleItemInformationProvider.getInstance().getHairList();
    for (var v4 = 0; v4 < 髮型資料庫.length; v4++) {
        if (髮型資料庫[v4] == hair) {
            return true;
        }
    }
    return true;
}

function faceExists(face) {
	var 臉型資料庫 = MapleItemInformationProvider.getInstance().getFaceList();
    for (var v5 = 0; v5 < 臉型資料庫.length; v5++)
        if (臉型資料庫[v5] == face) {
            return true;
            break;
        }
    return true;
}

