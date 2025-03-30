/* 造型相簿 */
load('nashorn:mozilla_compat.js');
importPackage(Packages.acemod.ModeDamageSkin);

var 書本_1 = "#fUI/UIWindow.img/MonsterBook/icon/6#";
var 書本_2 = "#fUI/UIWindow.img/MonsterBook/icon/5#";
var 書本_3 = "#fUI/UIWindow.img/MonsterBook/icon/4#";
var 書本_4 = "#fUI/UIWindow.img/MonsterBook/icon/3#";
var 書本_5 = "#fUI/UIWindow.img/MonsterBook/icon/2#";
var 藍星 = "";
var 橘星 = "";
var 愛心 = "";
var 鴨鴨 = "";
var 上頁 = "#fUI/UIWindow/itemSearch/BtBack/mouseOver/0#";
var 上頁腳本 = "聚合功能";
var 線1 = "#fMap/MapHelper/worldMap/npcPos3/6#";

var status = -1;
var player;
var playerId;
var Hair = 1;
var Face = 2;
var DamageSkin = 3;
var skinArray;
var code;

// var _FaceTicket = 5152049;//通用整形券
// var _HairTicket = 5150042;//通用美髮券
var cost = 50;

var selectd;
var CNtype = [ ];
CNtype['1'] = "髮型";
CNtype['2'] = "臉型";
CNtype['3'] = "傷害字型";

function start() {
   action(1, 0, 0);
}

function action(mode, type, selection) {
    status = (mode == 1 ? status+1 : cm.dispose());
//-------------------------------------

    if (status == 0) {
        cm.sendOk("#b\r\n\r\n           ( 髮型、臉型的儲存上限最多各 5 個 )\r\n\r\n\r\n"+
                ""+線1+" "+線1+" "+線1+" "+線1+" "+線1+" "+線1+" "+線1+" "+線1+" #e#b以下目錄#k#n "+線1+" "+線1+" "+線1+" "+線1+" "+線1+" "+線1+" "+線1+" "+線1+"\r\n\r\n\r\n#e#d"+
                "           #L0#"+書本_1+"  "+format("記錄目前造型",6)+"#l\r\n\r\n"+
                "           #L1#"+書本_2+"  "+format("變換髮型",6)+"#l \r\n\r\n"+
                "           #L2#"+書本_3+"  "+format("變換臉型",6)+"#l \r\n\r\n"+
                "           #L3#"+書本_3+"  "+format("變換傷害字型",6)+"#l \r\n\r\n"+
                "           #L4#"+書本_4+"  "+format("查看髮型相簿",6)+"#l \r\n\r\n"+
                "           #L5#"+書本_5+"  "+format("查看臉型相簿",6)+"#l \r\n\r\n"+
                "           #L6#"+書本_4+"  "+format("查看已儲存的傷害字型",6)+"#l \r\n\r\n\r\n\r\n\r\n"+
                "                #L7#"+上頁+"#l \r\n"
                );
    } else if(status == 1) {
        player = cm.getPlayer();//取得角色編號
        playerId = player.getId();
        selectd = selection;
        if (selection == 0) {//紀錄目前的造型
            if (cm.ckeckSkinTable(playerId, Hair) != 5 && cm.ckeckSkinTable(playerId, Face) != 5 && cm.ckeckSkinTable(playerId, DamageSkin) != 10) {
                cm.addSkin(playerId, Hair, player.getHair());//將髮型加入資料庫
                cm.addSkin(playerId, Face, player.getFace());//將臉型加入資料庫
                cm.addSkin(playerId, DamageSkin, player.getSKspecial(3));
                player.dropMessage(6, "已將目前髮型、臉型、傷害字型 " + player.getSKspecial(3) + " 記錄完畢");
            } else {
                cm.sendOk("#e請確認造型相簿是否已達儲存上限\r\n");
            }
            cm.dispose();
        } else if (selection == 1 || selection == 2 || selection == 3) {
            var skinTable= cm.getSkinTable(playerId, selection);
            var str;
            if (selection == 3) {
                str = "#e#h #的造型相簿 #b(最多可以儲存 10 種造型) "+橘星+"#k\r\n\r\n";
            }
            if (skinTable == null) {
                player.dropMessage(6, "目前相簿內還沒有"+CNtype[selection]+"哦");
                cm.dispose(); return;
            }
            skinArray= new Array(skinTable.size()); //new 陣列長度
            var skinId;
            for(var i = 0; i < skinTable.size(); i++){
                skinId = skinTable.get(i); //將ArrayList轉移至內部陣列
				//str = skinArray;
                skinArray[i] = skinId;
                if (selection == 3) {
                    var 取得傷害字體編號_3 = cm.getSkinTable(playerId, 3); // 修改變數名避免衝突
                    if (取得傷害字體編號_3 != null) {
                        for (var i = 0; i < 取得傷害字體編號_3.length; i++) {
                            str += "#L" + i + "##b" + (i + 1) + ".#k "+getDS(10, 取得傷害字體編號_3[i])+"" + 
                                   "  #t" + 取得傷害字體編號_3[i] + "# #b\r\n\r\n\r\n";
                        }
                    } else {
                        str = "沒有找到數據或發生錯誤。";
                    }
                }
            }
            if (selection != 3) {
                cm.sendStyle("#e親愛的冒險家\r\n這次想要換哪種"+CNtype[selection]+"呢 ?"+鴨鴨+愛心, skinArray);
                status = 49;
            } else {
                cm.sendSimple(str);
                status = 51;
            }

        } else if (selection == 4 || selection == 5 || selection == 6) {
            var skinTable = cm.getSkinTable(playerId, selection-3);
            if (skinTable == null) {
                player.dropMessage(6, "目前相簿內還沒有造型哦");
                cm.dispose(); return;
            }

            skinArray = new Array(skinTable.size());
            var str;
            if (selection != 6) {
                str = "#e#h #的造型相簿 #b(最多可以儲存 5 種造型) "+橘星+"#k\r\n\r\n";
            } else {
                str = "#e#h #的造型相簿 #b(最多可以儲存 10 種字型) "+橘星+"#k\r\n\r\n";
            }
            var skinId;
            var damageSkinItemId;
            for(var i = 0; i < skinTable.size(); i++){
                skinId = skinTable.get(i);
                skinArray[i] = skinId; //將ArrayList轉移至內部陣列

                if (selection == 4) {
                    str+= "#L"+i+"##b"+(i+1)+".#k #fCharacter/Hair/000"+skinId+"/default/hair#"+//顯示髮型圖片
                          "  #t"+skinId+"#  #b刪除#k#l\r\n\r\n\r\n";
                } else if (selection == 5) {
                    str+= "#L"+i+"##b"+(i+1)+".#k #fCharacter/Face/000"+skinId+"/default/face#"+//顯示臉型圖片
                          "  #t"+skinId+"#  #b刪除#k#l\r\n\r\n\r\n";
                } else {
                    var 取得傷害字體編號_6 = cm.getSkinTable(playerId,3); // 修改變數名避免衝突
                    if (取得傷害字體編號_6 != null) {
                        for (var i = 0; i < 取得傷害字體編號_6.length; i++) {
                            str += "#L" + i + "##b" + (i + 1) + ".#k "+getDS(10, 取得傷害字體編號_6[i])+"" + 
                                   "  #t" + 取得傷害字體編號_6[i] + "# #b刪除#k#l\r\n\r\n\r\n";
                        }
                    } else {
                        str = "沒有找到數據或發生錯誤。";
                    }
                }
            }
            cm.sendSimple(str);
        } else if(selection == 7){
            cm.dispose();
            cm.openNpc(9010000, 上頁腳本);
            return;
        }
    } else if (status == 2) {
        var str;

        if (selection == 4) {
            str = "#L1#確認刪除此造型嗎？("+"#e#r刪除後無法恢復!!#k#l"+")";
        } else if (selection == 5) {
            str = "#L2#確認刪除此造型嗎？("+"#e#r刪除後無法恢復!!#k#l"+")";
        } else {
			var skinTable = cm.getSkinTable(playerId, (selectd-3));
			var skinId;
            for(var i = 0; i < skinTable.size(); i++){
                skinId = skinTable.get(i);
                skinArray[i] = skinId;
            }
			code = skinArray[selection];
            str = "#L3#確認刪除此造型嗎？"+"#e#r(刪除後無法恢復!!)";
            
        }
        cm.sendYesNo(str);
    } else if (status == 3) {
        cm.subSkin(playerId, code);
        cm.sendOk("#e#b造型記錄幫你刪除囉 ~ ");
        status = -1;
    } else if (status == 50) {//變換髮型
        if(cm.getPlayer().getCSPoints(2) < cost){
            cm.sendOk("如果沒有足夠的楓葉點數就沒辦法幫你換"+CNtype[""+selectd]+"了 >_<");
            cm.dispose(); return;
        }
        if(selectd == 2){
            cm.setAvatar_Face(skinArray[selection]);
        }else{
            cm.setAvatar(skinArray[selection]);
        }
        cm.getPlayer().modifyCSPoints(2, -cost, true);
        cm.sendOk("#e這次的"+CNtype[""+selectd]+"還滿意嗎～");
        cm.dispose();
    } else if (status == 52) {//變換字型
        if(cm.getPlayer().getCSPoints(2) < cost){
           cm.sendOk("如果沒有足夠的楓葉點數就沒辦法幫你換"+CNtype[""+selectd]+"了 >_<");
           cm.dispose(); return;
        }
		var skinTable= cm.getSkinTable(playerId,3);
        cm.getPlayer().modifyCSPoints(2, -cost, true);
        cm.DamageSkin(skinTable[selection]);
        cm.sendOk("#e這次的"+CNtype[""+selectd]+"還滿意嗎～");
        cm.dispose();
    }
}

function format(content, length) {
    var str = "";
    var cs = "";
    if (content.length > length) {
        str = content;
    } else {
        for(var i = 0; i < length - content.toString().length; i++) {
            cs = cs + " ";
        }
    }
    str = content + cs;
    return str;
}

function getDS(type, num) {
    var NM = 1;
    if (type >= 0 && type <= 9) {
        NM = type;
    }
    var St = "";
    if (num == 0) {
        St += "#fEffect/BasicEff/NoRed0/" + NM + "#";
    } else {
        St += "#fEffect/DamageSkin/" + num + "/NoRed0/" + NM + "#";
    }
    if (type == 10) {
        if (num == 0) {
            St += "#fEffect/BasicEff/NoRed0/2#";
            St += "#fEffect/BasicEff/NoRed0/3#";
            St += "#fEffect/BasicEff/NoRed0/4#";
            St += "#fEffect/BasicEff/NoRed0/5#";
        }
    }
    return St;
}
