//一行容納 45個半形字符 或 26個全形字符 或 12個item圖形
var status = 0;
var rA = "#i3991000#";
var rI = "#i3991008#";
var rC = "#i3991002#";
var rL = "#i3991011#";
var rnum = new Array("#i3990009#","#i3990000#","#i3990001#","#i3990002#","#i3990003#","#i3990004#","#i3990005#","#i3990006#","#i3990007#","#i3990008#");
var rsym = new Array("#i3990020#","#i3990021#")
var title = "　　　　　　　   " + rA + "　" + rI + "　" +  rC + "　" + rL + "\r\n";
var saying = 
   "　#r=================【限期活動】=================" + "\r\n"
 + "　#d#L0#[卡納限時活動]#l" + "\r\n\r\n" //#L1#[卡納超值禮包]
 + "　#r=================【卡納功能】=================" + "\r\n" 
 + "　#d#L11#[每日獎勵]#L12#[音樂電台]#L14#[榮耀排行]#l" + "\r\n"//#L13#[道具清除]
 + "　#d#L15#[副本傳送]#L16#[世界傳送]#L17#[緊急商店]#l" + "\r\n\r\n"
 + "　#r=================【卡納查詢】=================#k"+ "\r\n"
 + "  #d#L21#[資源獲得]#L22#[ 掉落道具查詢]#L23#[一般副本]#l"+"\r\n"
 + "  #d#L24#[特殊副本]#L25#[ 指令查詢]#L26#[卡納系統]#l" + "\r\n";
 
 
var week = new Array("","#i4180006#","#i4180000#","#i4180001#","#i4180002#","#i4180003#","#i4180004#","#i4180005#"); //DayOfWeek 0418
//cm.getHour() 0~24
//cm.getDayOfWeek() 1~7
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)                           						
            status++;
        else
            status--;
        if (status == 0) {
			var Today = new Date();
			var ty = Today.getFullYear();
			var tm = Today.getMonth()+1;
			var td = Today.getDate();
			var nowdate = "　　  " + toI(ty) + rsym[1] + toI(tm) + rsym[1] + toI(td) + "\r\n";
            var nowweek = "　　　　　　　　　　今天禮拜:" + week[cm.getDayOfWeek()] +" \r\n";
			cm.sendSimple (title + nowdate + nowweek + saying); //YYYY-MM-DD (W) (上下午?AMPN) HH:MM:SS
        } else if (status == 1) {
			mySelection = selection;
            switch(mySelection) {
				
                case 0: 
					cm.dispose();
					cm.openNpc(2120005,2152005);
					return;
				break;
                case 1: 
					cm.dispose();
					cm.openNpc(2120005,999);
					return;
				break;				
				
				case 11: 
					cm.dispose();
					cm.openNpc(2120005,1000);
					return;
					break;
				case 12: 
					cm.dispose();
					cm.openNpc(2120005,1001);
					return;
					break;
				case 13: 
					cm.dispose();
					cm.openNpc(2120005,1002);
					return;
					break;
				case 14: 
					cm.dispose();
					cm.openNpc(2120005,9040004);
					return;
					break;
				case 15: 	
					cm.sendNext ("遠端開啟該功能需花費#r３萬#k楓幣。");
					break;
				case 16: 
					cm.sendNext ("遠端開啟該功能需花費#r３萬#k楓幣。");
					break;
				case 17: 
					cm.sendNext ("遠端開啟商店需要花費#r１０萬#k楓幣。");
					break;
					
					
				case 21: 
					cm.sendOk ("內容準備中");
					cm.dispose();
					break;

				case 22: 
					cm.sendOk ( "如在打怪過程掉落奇怪的東西，歡迎來此查詢。\r\n"+
							    "以下為掉落物品名稱以及相對應功用 : \r\n\r\n"+
							    "#r#v"+4310098+"# [ #t"+4310098+"# ] - #k可至弓箭手村遊樂場兌換\r\n"+
								"#r#v"+4310099+"# [ #t"+4310099+"# ] - #k可至弓箭手村遊樂場兌換\r\n"+
								"#r#v"+4310100+"# [ #t"+4310100+"# ] - #k可至弓箭手村遊樂場兌換\r\n"+
								"#r#v"+4310101+"# [ #t"+4310101+"# ] - #k可至弓箭手村遊樂場兌換\r\n"+
								"#r#v"+4310102+"# [ #t"+4310102+"# ] - #k可至弓箭手村遊樂場兌換\r\n"+
								"#r#v"+4031323+"# [ #t"+4031323+"# ] - #k可至萬能#b每月兌換#k中兌換道具\r\n"+
								"#r#v"+3991011+"# [ #t"+3991011+"# ] - #k可至萬能#b每周兌換#k中兌換道具\r\n"+
								"#r#v"+3991008+"# [ #t"+3991008+"# ] - #k可至萬能#b每周兌換#k中兌換道具\r\n"+
								"#r#v"+3991002+"# [ #t"+3991002+"# ] - #k可至萬能#b每周兌換#k中兌換道具\r\n"+
								"#r#v"+3991000+"# [ #t"+3991000+"# ] - #k可至萬能#b每周兌換#k中兌換道具\r\n");
					cm.dispose();
					break;						
				

			}
        } else if (status == 2) {			
			if(mySelection == 15 && cm.getMeso() >= 30000){
				cm.gainMeso(-30000);
				cm.dispose();
				cm.openNpc(2120005,9010022);
				return;
			}if(mySelection == 16 && cm.getMeso() >= 30000){
				cm.dispose();
				cm.gainMeso(-30000);
				cm.openNpc(2120005,9000020);
				return;
			}if(mySelection == 17 && cm.getMeso() >= 100000){
				cm.dispose();
				cm.gainMeso(-100000);
				cm.openShopNPC(1001100)
			}else{
				cm.dispose();
				cm.sendOk("您沒有足夠的楓幣喔！！");
			}
			
			
		}
    }
}
function toI (x) {
	if (x < 10) {
		return rnum[0]+rnum[x];
	} else if (x < 100) {
		return rnum[Math.floor(x/10)]+rnum[x%10];
	} else if (x < 1000) {
		return rnum[Math.floor(x/100)]+rnum[(x%100-x%10)/10]+rnum[x%10];
	} else {
		return rnum[Math.floor(x/1000)]+rnum[(x%1000-x%100)/100]+rnum[(x%100-x%10)/10]+rnum[x%10];
	}
}