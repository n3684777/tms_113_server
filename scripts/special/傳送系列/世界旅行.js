/*
 NPC Name: 萬能傳送模板By小宇 發布於AICL論壇: https://www.xinbiao-aicl.com/forum.php
	
 使用說明:
	1. 到下面 TopSel 的部分可設置分類 + 使用的 [地圖陣列]

	2. 地圖陣列內的設置
    
	mapid [地圖ID]
	
	mapname [地圖名稱] 空=預設名 可自己設計選項名稱 也可以放UI圖
	
	ct [消耗類型] 空=無消耗
		0 = 無
		1 = 楓幣
		2 = 點數
		3 = 點數楓點皆可
		4 = [自己擴充]
		道具代碼 = 消耗道具
	
	cq [消耗數量] 空=0
*/
var status = -1;
var memoline = "#fUI/UIWindow.img/Memo/line#";//分隔線
var 未選 = "#fUI/Basic.img/CheckBox/0#";
var 已選 = "#fUI/Basic.img/CheckBox/1#";
var 村莊地圖 = [//[地圖陣列] {"mapid":"","mapname":"<<  >>","ct":"","cq":""},
	{"mapid":"910000000","mapname":"<< 自由市場 >>","ct":"","cq":""},//
	{"mapid":"200000301","mapname":"<< 公會本部 >>","ct":"","cq":""},
	{"mapid":"749050400","mapname":"<< 轉 蛋 屋 >>","ct":"","cq":""},//
	{"mapid":"104000000","mapname":"<< 維多利亞 >>","ct":"","cq":""},//維多利亞港
	{"mapid":"100000000","mapname":"<< 弓箭手村 >>","ct":"","cq":""},//弓箭手村
	{"mapid":"101000000","mapname":"<< 魔法森林 >>","ct":"","cq":""},//魔法森林
	{"mapid":"102000000","mapname":"<< 勇士之村 >>","ct":"","cq":""},//勇士之村
	{"mapid":"103000000","mapname":"<< 墮落城市 >>","ct":"","cq":""},//墮落城市
	{"mapid":"120000000","mapname":"<< 鯨 魚 號 >>","ct":"","cq":""}, 
	{"mapid":"130000000","mapname":"<< 耶 雷 佛 >>","ct":"","cq":""},
   {"mapid":"110000000","mapname":"<< 黃金海岸 >>","ct":"","cq":""},
   {"mapid":"105040300","mapname":"<< 奇 幻 村 >>","ct":"","cq":""},
   {"mapid":"270000000","mapname":"<< 三 扇 門 >>","ct":"","cq":""},
   {"mapid":"240000000","mapname":"<< 神 木 村 >>","ct":"","cq":""},
   {"mapid":"220000000","mapname":"<< 玩 具 城 >>","ct":"","cq":""},
   {"mapid":"211000000","mapname":"<< 冰原雪域 >>","ct":"","cq":""},
   {"mapid":"200000000","mapname":"<< 天空之城 >>","ct":"","cq":""},
   {"mapid":"230000000","mapname":"<< 水 世 界 >>","ct":"","cq":""},
   {"mapid":"250000000","mapname":"<< 桃花仙境 >>","ct":"","cq":""},
   {"mapid":"251000000","mapname":"<< 靈藥幻境 >>","ct":"","cq":""},
   {"mapid":"550000000","mapname":"<< 都會潮流 >>","ct":"","cq":""},
   {"mapid":"551000000","mapname":"<< 鄉 村 鎮 >>","ct":"","cq":""},
   {"mapid":"260000000","mapname":"<< 納希綠洲 >>","ct":"","cq":""},
   {"mapid":"261000000","mapname":"<< 瑪迦提亞 >>","ct":"","cq":""},
   {"mapid":"222000000","mapname":"<< 童 話 村 >>","ct":"","cq":""},
   {"mapid":"221000000","mapname":"<< 防衛總部 >>","ct":"","cq":""},
   {"mapid":"501000000","mapname":"<< 黃金寺廟 >>","ct":"","cq":""},
   {"mapid":"800000000","mapname":"<< 古代神社 >>","ct":"","cq":""},
   {"mapid":"800040000","mapname":"<< 楓葉古城 >>","ct":"","cq":""},
   {"mapid":"801000000","mapname":"<< 昭 和 村 >>","ct":"","cq":""},
   {"mapid":"540000000","mapname":"<< 中心商務 >>","ct":"","cq":""},
   {"mapid":"500000000","mapname":"<< 水上市場 >>","ct":"","cq":""},
   {"mapid":"702000000","mapname":"<< 嵩 山 鎮 >>","ct":"","cq":""},
   {"mapid":"600000000","mapname":"<< 新 葉 城 >>","ct":"","cq":""},
   {"mapid":"742000000","mapname":"<< 101 大道 >>","ct":"","cq":""},
   {"mapid":"741000000","mapname":"<< 不 夜 城 >>","ct":"","cq":""},
   {"mapid":"300000000","mapname":"<< 亞泰爾營 >>","ct":"","cq":""},
   {"mapid":"701000000","mapname":"<< 上 海 灘 >>","ct":"","cq":""},
   {"mapid":"541000000","mapname":"<< 駁船碼頭 >>","ct":"","cq":""},
]
var 練等地圖 = [//[地圖陣列]
	{"mapid":"103000101","mapname":"#bLv.  10 - 15   #k推薦練功圖 #e#r地鐵一號線[地區01]#n\r\n","ct":"","cq":""},
	{"mapid":"742000103","mapname":"#bLv.  15 - 20   #k推薦練功圖 #e#r捷運車廂內部2#n\r\n","ct":"","cq":""},//捷運車廂內部2
	{"mapid":"220010500","mapname":"#bLv.  20 - 30   #k推薦練功圖 #e#r露臺中庭#n\r\n","ct":"","cq":""},//郊區1
	{"mapid":"550000100","mapname":"#bLv.  30 - 50   #k推薦練功圖 #e#r泥濘草原#n\r\n","ct":"","cq":""},
	{"mapid":"540020100","mapname":"#bLv.  30 - 50   #k推薦練功圖 #e#r郊區2#n\r\n","ct":"","cq":""},//
	{"mapid":"541010010","mapname":"#bLv.  50 - 70   #k推薦練功圖 #e#r幽靈船2#n\r\n","ct":"","cq":""},//幽靈船2
	{"mapid":"742010100","mapname":"#bLv.  70 - 80   #k推薦練功圖 #e#r都會廣場#n\r\n","ct":"","cq":""},
	{"mapid":"742010203","mapname":"#bLv.  70 - 80   #k推薦練功圖 #e#r名人大道南部區域#n\r\n","ct":"","cq":""},
	{"mapid":"541020200","mapname":"#bLv.  80 - 90   #k推薦練功圖 #e#r烏魯莊園II #n\r\n","ct":"","cq":""},
	{"mapid":"551030100","mapname":"#bLv.  90 - 100  #k推薦練功圖 #e#r夢幻公園 #n\r\n","ct":"","cq":""},
	{"mapid":"541020500","mapname":"#bLv. 100 - 120  #k推薦練功圖 #e#r烏魯城中心 #n\r\n","ct":"","cq":""},
]
var 組隊任務 = [//[地圖陣列]
	{"mapid":"925020000","mapname":"#k<< 組隊任務 #k>> #bLv.10 - 200 #r#e武陵道場#n\r\n","ct":"","cq":""},
	{"mapid":"103000000","mapname":"#k<< 組隊任務 #k>> #bLv.21 - 200 #r#e超級綠水靈#n\r\n","ct":"","cq":""},
   {"mapid":"980000000","mapname":"#k<< 組隊任務 #k>> #bLv.30 - 50  #r#e怪物擂台#n\r\n","ct":"","cq":""},
	{"mapid":"221024500","mapname":"#k<< 組隊任務 #k>> #bLv.35 - 200 #r#e101組隊#n\r\n","ct":"","cq":""},
	{"mapid":"200080101","mapname":"#k<< 組隊任務 #k>> #bLv.51 - 200 #r#e天空組隊#n\r\n","ct":"","cq":""},
	{"mapid":"251010404","mapname":"#k<< 組隊任務 #k>> #bLv.60 - 200 #r#e金鉤海賊王#n\r\n","ct":"","cq":""},
   {"mapid":"980030000","mapname":"#k<< 組隊任務 #k>> #bLv.51 - 70  #r#e怪物擂台2#n\r\n","ct":"","cq":""},
	{"mapid":"261000011","mapname":"#k<< 組隊任務 #k>> #bLv.70 - 200 #r#e羅密歐與茱麗葉#n\r\n","ct":"","cq":""},
	
	
]
var 特殊地圖 = [//[地圖陣列]
	{"mapid":"680000000","mapname":"#e#k<< #b特殊地圖 #k>> #r結婚小鎮\r\n　","ct":"","cq":""},
	{"mapid":"801000100","mapname":"#e#k<< #b特殊地圖 #k>> #r男澡堂\r\n","ct":"","cq":""},
	{"mapid":"801000200","mapname":"#e#k<< #b特殊地圖 #k>> #r女澡堂\r\n","ct":"","cq":""},
	{"mapid":"100000202","mapname":"#e#k<< #b忍耐地圖 #k>> #r弓手村寵物公園\r\n","ct":"","cq":""},
	{"mapid":"220000006","mapname":"#e#k<< #b忍耐地圖 #k>> #r玩具城寵物公園\r\n","ct":"","cq":""},
	{"mapid":"101000100","mapname":"#e#k<< #b忍耐地圖 #k>> #r忍耐之林一\r\n","ct":"","cq":""},
	{"mapid":"103000900","mapname":"#e#k<< #b忍耐地圖 #k>> #r墮落一號線\r\n","ct":"","cq":""},
	{"mapid":"103000903","mapname":"#e#k<< #b忍耐地圖 #k>> #r墮落二號線\r\n","ct":"","cq":""},
	{"mapid":"103000906","mapname":"#e#k<< #b忍耐地圖 #k>> #r墮落三號線\r\n","ct":"","cq":""},
	{"mapid":"105040310","mapname":"#e#k<< #b忍耐地圖 #k>> #r奇幻村忍耐1\r\n","ct":"","cq":""},
	{"mapid":"105040312","mapname":"#e#k<< #b忍耐地圖 #k>> #r奇幻村忍耐2\r\n","ct":"","cq":""},
	{"mapid":"105040314","mapname":"#e#k<< #b忍耐地圖 #k>> #r奇幻村忍耐3\r\n","ct":"","cq":""},
	{"mapid":"280020000","mapname":"#e#k<< #b忍耐地圖 #k>> #r炎魔忍耐\r\n","ct":"","cq":""},
	{"mapid":"800040210","mapname":"#e#k<< #b忍耐地圖 #k>> #r天皇忍耐\r\n","ct":"","cq":""},
] 

var 地區BOSS = [//[地圖陣列]
	{"mapid":"104000400","mapname":"#e#k<< #b地區BOSS #k>> #r紅寶王\r\n　","ct":"","cq":""},
	{"mapid":"101030404","mapname":"#e#k<< #b地區BOSS #k>> #r樹妖王\r\n","ct":"","cq":""},
	{"mapid":"107000300","mapname":"#e#k<< #b地區BOSS #k>> #r沼澤巨鱷\r\n","ct":"","cq":""},
   {"mapid":"260010201","mapname":"#e#k<< #b地區BOSS #k>> #r仙人長老\r\n","ct":"","cq":""},
   {"mapid":"230020100","mapname":"#e#k<< #b地區BOSS #k>> #r火蚌殼\r\n","ct":"","cq":""},
   {"mapid":"100040105","mapname":"#e#k<< #b地區BOSS #k>> #r殭屍猴王\r\n","ct":"","cq":""},
   {"mapid":"221040301","mapname":"#e#k<< #b地區BOSS #k>> #r葛雷金剛\r\n","ct":"","cq":""},
   {"mapid":"100000005","mapname":"#e#k<< #b地區BOSS #k>> #r蘑菇王\r\n","ct":"","cq":""},
   {"mapid":"105070002","mapname":"#e#k<< #b地區BOSS #k>> #r殭屍蘑菇王\r\n","ct":"","cq":""},
   {"mapid":"222010310","mapname":"#e#k<< #b地區BOSS #k>> #r九尾妖狐\r\n","ct":"","cq":""},
   {"mapid":"250010503","mapname":"#e#k<< #b地區BOSS #k>> #r喵怪仙人\r\n","ct":"","cq":""},
   {"mapid":"105090900","mapname":"#e#k<< #b地區BOSS #k>> #r巴洛古\r\n","ct":"","cq":""},
   {"mapid":"261030000","mapname":"#e#k<< #b地區BOSS #k>> #r奇美拉\r\n","ct":"","cq":""},
   {"mapid":"211040101","mapname":"#e#k<< #b地區BOSS #k>> #r雪毛怪人\r\n","ct":"","cq":""},
   {"mapid":"501030104","mapname":"#e#k<< #b地區BOSS #k>> #r六手邪神\r\n","ct":"","cq":""},
   {"mapid":"702070400","mapname":"#e#k<< #b地區BOSS #k>> #r藏經閣7樓\r\n","ct":"","cq":""},
   {"mapid":"742010202","mapname":"#e#k<< #b地區BOSS #k>> #r瘋狂喵Z客\r\n","ct":"","cq":""},
   {"mapid":"800010100","mapname":"#e#k<< #b地區BOSS #k>> #r藍色蘑菇王\r\n","ct":"","cq":""},
   {"mapid":"230040420","mapname":"#e#k<< #b地區BOSS #k>> #r海怒斯\r\n","ct":"","cq":""},
   {"mapid":"240020101","mapname":"#e#k<< #b地區BOSS #k>> #r格瑞芬多\r\n","ct":"","cq":""},
   {"mapid":"240020401","mapname":"#e#k<< #b地區BOSS #k>> #r噴火龍\r\n","ct":"","cq":""},
   {"mapid":"240040401","mapname":"#e#k<< #b地區BOSS #k>> #r寒霜冰龍\r\n","ct":"","cq":""},
   {"mapid":"270010500","mapname":"#e#k<< #b地區BOSS #k>> #r多多\r\n","ct":"","cq":""},
   {"mapid":"270020500","mapname":"#e#k<< #b地區BOSS #k>> #r利里諾斯\r\n","ct":"","cq":""},
   {"mapid":"270030500","mapname":"#e#k<< #b地區BOSS #k>> #r萊伊卡\r\n","ct":"","cq":""},
   {"mapid":"800020130","mapname":"#e#k<< #b地區BOSS #k>> #r天狗\r\n","ct":"","cq":""},	
   {"mapid":"800040410","mapname":"#e#k<< #b地區BOSS #k>> #r天皇\r\n","ct":"","cq":""},	
]

var 遠征王團 = [//[地圖陣列]
	{"mapid":"220080000","mapname":"#e#k<< #b遠征王團 #k>> #r拉 圖 斯\r\n　","ct":"","cq":""},
	{"mapid":"211042400","mapname":"#e#k<< #b遠征王團 #k>> #r殘暴炎魔\r\n","ct":"","cq":""},
	{"mapid":"551030100","mapname":"#e#k<< #b遠征王團 #k>> #r夢幻公園\r\n","ct":"","cq":""},
	{"mapid":"801040004","mapname":"#e#k<< #b遠征王團 #k>> #r黑道長老\r\n","ct":"","cq":""},
	{"mapid":"240050400","mapname":"#e#k<< #b遠征王團 #k>> #r闇黑龍王\r\n","ct":"","cq":""},
	{"mapid":"270050000","mapname":"#e#k<< #b遠征王團 #k>> #r皮 卡 啾\r\n","ct":"","cq":""},
	{"mapid":"802000610","mapname":"#e#k<< #b遠征王團 #k>> #r尼貝龍根\r\n","ct":"","cq":""},
	{"mapid":"802000410","mapname":"#e#k<< #b遠征王團 #k>> #r杜 那 斯\r\n","ct":"","cq":""},
	{"mapid":"802000110","mapname":"#e#k<< #b遠征王團 #k>> #r無名魔獸\r\n","ct":"","cq":""},
	{"mapid":"802000820","mapname":"#e#k<< #b遠征王團 #k>> #r奧芙赫班\r\n","ct":"","cq":""},
	{"mapid":"105100100","mapname":"#e#k<< #b遠征王團 #k>> #r魔王巴洛谷\r\n","ct":"","cq":""},
]

var TopSel =[// UB = 已選按鈕UI圖   NB = 未選按鈕UI圖 SB = 地圖標題LOGO圖 CB = 使用的 [地圖陣列]
/*
	mapmode [顯示模版分類]－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－＼
		1 = 一般向下陳列   建議mapname: #bLv. 200 #k推薦練功圖 #r弓箭手村訓練場#k                                     ｜
										#e<< 遠征傳送 >> 殘暴炎魔                                                     ｜
		2 = 兩個為一行陳列 建議mapname: << 超級綠水靈 Lv21-30 >>                                                      ｜
		3 = 三個為一行陳列 建議mapname: << 自由市場 >>                                                                ｜
		4 = 四個為一行陳列 建議mapname: 自由市場  (或放UI圖)                                                          ｜
																													  ＊
*/
	{"Page":"1","UB":已選+"村莊地圖","NB":未選+"村莊地圖","SB":"　　　　　　　　　　#e<<村莊地圖>>#n","CB":村莊地圖,"mapmode":"3"},
	{"Page":"2","UB":已選+"練等地圖","NB":未選+"練等地圖","SB":"　　　　　　　　　　#e<<練等地圖>>#n","CB":練等地圖,"mapmode":"1"},
	{"Page":"3","UB":已選+"組隊任務","NB":未選+"組隊任務","SB":"　　　　　　　　　　#e<<組隊任務>>#n","CB":組隊任務,"mapmode":"1"},
	{"Page":"4","UB":已選+"特殊地圖","NB":未選+"特殊地圖","SB":"　　　　　　　　　　#e<<特殊地圖>>#n","CB":特殊地圖,"mapmode":"1"},
    {"Page":"5","UB":已選+"地區BOSS","NB":未選+"地區BOSS","SB":"　　　　　　　　　　#e<<地區BOSS>>#n","CB":地區BOSS,"mapmode":"1"},
    {"Page":"6","UB":已選+"遠征王團","NB":未選+"遠征王團","SB":"　　　　　　　　　　#e<<遠征王團>>#n","CB":遠征王團,"mapmode":"1"},
]

var 詢問流程 = false;//開啟 true 關閉 false [若需花費消耗會強制詢問]
function gomap(mn,ct,cq){
//====================================
// [詢問視窗模板] 服主可在這裡修改排版
// mn = 選項名稱
// ct = 消耗的類型
// cq = 消耗的數量
/*
 基本語法:
	#r  = 紅色
	#b  = 藍色
	#k  = 黑色
	#d  = 紫色
	#g  = 綠色
	#e  = 粗體
	#n  = 正常
	\r\n = 換行
*/
//====================================
	var 對話文字 = "";
	對話文字 += "=====================================================\r\n";
	對話文字 += "　　　　　　　　　#e<<溫馨提示>>#n\r\n";
	對話文字 += "=====================================================\r\n";
	
	// ↓↓↓↓↓↓↓↓若有消耗才會顯示↓↓↓↓↓↓↓↓↓↓
	if(ct != 0 && cq != 0){
		var ctname = "";
		switch(ct){//消耗的道具名
			case 1:ctname = "楓幣";break;
			case 2:ctname = "點數(限Cash)";break;
			case 3:ctname = "點數(可楓點)";break;
			case 4:ctname = "其他自訂類型的消耗";break;
		}
		if(ct > 1000000){//道具消耗
			ctname = "#i" + ct + ":#";//錯誤的代碼會導致-21斷線
		}
		對話文字 += "要消耗 " + ctname + " x " + cq + " \r\n"
	}
	// ↑↑↑↑↑↑↑↑↑若有消耗才會顯示↑↑↑↑↑↑↑↑↑↑↑↑
	
	
	對話文字 += "\r\n　　　傳送到 #b" + mn + "#k 嗎?"
	return 對話文字;
}
//====================================
// [消耗扣除模板] 服主可在這裡修改 消耗不足的回傳文字
// mn = 選項名稱(前往地圖)
// ct = 消耗的類型
// cq = 消耗的數量
//====================================
function cango(mn,id,ct,cq){
	var cg = "";
	switch(ct){
		case 0:break;
		case 1://楓幣
			if(cm.getMeso() < cq ){cm.sendOk("#r傳送到 #b" + mn + "#k #r需要" + cq + "楓幣。");cm.dispose();return;}//楓幣不足
			cm.gainMeso(-cq);//消耗楓幣
			break;
		case 2://只能點數
			if(cm.getPlayer().getCSPoints(1) < cq){cm.sendOk("傳送需要點數 " + cq + " 點。");cm.dispose();return;}
			cm.getPlayer().modifyCSPoints(1,-cq,true);
			break;
		case 3://點數楓點皆可優先扣楓點
			if(cm.getPlayer().getCSPoints(2) < cq){
				if(cm.getPlayer().getCSPoints(1) < cq){
					cm.sendOk("傳送需要點數 " + cq + " 點。");cm.dispose();return;
				}
				cm.getPlayer().modifyCSPoints(1,-cq,true);
			}else{
				cm.getPlayer().modifyCSPoints(2,-cq,true);
			}
			break;
		case 4://擴充模板[自己改成需要的判斷及扣除]
			if(cm.getMeso() < cq ){cm.sendOk("楓幣不足");cm.dispose();return;}
			cm.gainMeso(-cq);
			break;
	}
	if(ct > 1000000){
		if(!cm.haveItem(ct,cq)){cm.sendOk("#r傳送到 #b" + mn + "#k #r需要#i"+ct+":#x"+ cq + "");cm.dispose();return;}//道具不足
		cm.gainItem(ct, -cq);//消耗道具
	}
	if(id == 910000000){
		returnMap = cm.getSavedLocation("FREE_MARKET");
		cm.clearSavedLocation("FREE_MARKET");
		returnMap = cm.saveLocation("FREE_MARKET");
	}
	cm.dispose();
	cm.warp(id);
}
//-----------------------------------------------
//以下程式碼不需修改到,請勿更動
//-----------------------------------------------
var page = 1;var CB = null;var cmap = 0;var cct= 0;var ccq= 0;var ccmn = "";function getTopMsg(a){var b="";var c="";var d=1;for(var i=0;i<TopSel.length;i++){var e=TopSel[i].Page;var f=TopSel[i].UB;var g=TopSel[i].NB;if(e==a){b+="#L"+e+"#"+f+"#l";c=TopSel[i].SB;d=parseInt(TopSel[i].mapmode);CB=TopSel[i].CB}else{b+="#L"+e+"#"+g+"#l"}}b+="\r\n\r\n"+memoline+"\r\n\r\n";b+=c+"\r\n";if(CB!=null){for(var i=0;i<CB.length;i++){var h=parseInt(CB[i].mapid);var j=CB[i].mapname;b+="#L"+h+"#"+(j!=""?j:("#m"+h+"#"))+"#l";if((i+1)%d==0){b+="\r\n"}}}return b}eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('x y(a,b,c){3(a==1){5++}j{5--}3(5==0){k.o(p(l))}j 3(5==1){6 d=c;q(6 i=0;i<r.s;i++){6 e=r[i].z;3(e==d){l=d;5=0;k.o(p(l));t}}3(4!=A){q(6 i=0;i<4.s;i++){6 f=8(4[i].B);3(d==f){6 g=4[i].C;9=(g!=""?g:("#m"+f+"#"));7=8(4[i].u==""?0:4[i].u);h=8(4[i].v==""?0:4[i].v);n=8(f);3(7>0||詢問流程){k.D(E(9,7,h));t}w(9,n,7,h)}}}}j 3(5==2){w(9,n,7,h)}}',41,41,'|||if|CB|status|var|cct|parseInt|ccmn||||||||ccq||else|cm|page||cmap|sendSimple|getTopMsg|for|TopSel|length|return|ct|cq|cango|function|action|Page|null|mapid|mapname|sendYesNo|gomap'.split('|'),0,{}))
