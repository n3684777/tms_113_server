load('nashorn:mozilla_compat.js');

importPackage(Packages.util);
importPackage(Packages.client.inventory);
//Written By LYZ
//參數調整區
var meso = 50; //價格
var 消耗點數類型 = 2;//1 = 點數 2 = 楓葉點數
var forbin = [111,222]; //無法轉移道具陣列,自行刪除後填入代碼
var 消耗類型 = 1;//1 = 紅利類、 2 = 點數類
//

//
var status = -1;


function start(){
	action(1,0,0);
}

function action(mode,type,selection){

	if(mode==1){
		status++;
	}else
		status--;
	
	if(mode==0){
		cm.dispose();
	}
	
	if(status==0){
		var avail = "";
        for (this. i = 0; i < 96; i++) {
            if (cm.getInventory(1).getItem(i) != null) {
                if (!Packages.server.MapleItemInformationProvider.getInstance().isCash(cm.getInventory(1).getItem(i).getItemId()) && cm.getInventory(1).getItem(i).getExpiration()<0) {
                    avail += "#L" + Math.abs(i) + "##z" + cm.getInventory(1).getItem(i).getItemId() + "##l\r\n";
                }
            }
        }
        if(avail == ""){
             avail += "\r\n\r\n在您身上並未檢測到有裝備，請檢查是否有裝備";    
            }
			if(消耗類型 == 2){
				cm.sendSimple(cm.getPlayer().getCSPoints(消耗點數類型)>= meso ? "#d選擇第一件裝備(會與第二件交換素質)#k\r\n#rP.S.此功能需要" + meso + "楓點#k #d:#k\r\n#b" + avail : "使用此功能需要" + meso + "楓點");
	
			}else{
				cm.sendSimple(cm.getPlayer().getDividend()>= meso ? "#d選擇第一件裝備(會與第二件交換素質)#k\r\n#rP.S.此功能需要" + meso + "紅利#k #d:#k\r\n#b" + avail : "使用此功能需要" + meso + "紅利");
	
			}
        
	
	}else if(status == 1){
		i = selection;
		var avail2 = "";
        for (this. i2 = 0; i2 < 96; i2++) {
            if (cm.getInventory(1).getItem(i2) != null) {
                if (!Packages.server.MapleItemInformationProvider.getInstance().isCash(cm.getInventory(1).getItem(i2).getItemId()) && cm.getInventory(1).getItem(i2).getExpiration()<0) {
                    avail2 += "#L" + Math.abs(i2) + "##z" + cm.getInventory(1).getItem(i2).getItemId() + "##l\r\n";
                }
            }
        }
        if(avail2 == ""){
             avail2 += "請檢查是否有點數裝備";    
            }
		if(cm.getInventory(1).getItem(i)!=null){	
        cm.sendSimple("#d您想要將物品 : #k#r#t" + cm.getInventory(1).getItem(i).getItemId()+ "##k #d的素質與哪個裝備交換?#k\r\n#b" + avail2);
		}else {
			cm.dispose();
		}
	}else if(status == 2){
		i2 = selection;
		this. item1 = cm.getInventory(1).getItem(i);
		this. item2 = cm.getInventory(1).getItem(i2);
		this. a1 = item1.getStr();
		this. a2 = item2.getStr();
		this. b1 = item1.getDex();
		this. b2 = item2.getDex();
		this. c1 = item1.getInt();
		this. c2 = item2.getInt();
		this. d1 = item1.getLuk();
		this. d2 = item2.getLuk();
		this. e1 = item1.getHp();
		this. e2 = item2.getHp();
		this. f1 = item1.getMp();
	    this. f2 = item2.getMp();
		this. g1 = item1.getWatk();
	    this. g2 = item2.getWatk();
		this. h1 = item1.getMatk();
	    this. h2 = item2.getMatk();
		this. s1 = item1.getWdef();
	    this. s2 = item2.getWdef();
		this. j1 = item1.getAcc();
	    this. j2 = item2.getAcc();
		this. k1 = item1.getAvoid();
	    this. k2 = item2.getAvoid();
		this. l1 = item1.getSpeed();
	    this. l2 = item2.getSpeed();
		this. m1 = item1.getJump();
	    this. m2 = item2.getJump();
		this. n1 = item1.getUpgradeSlots();
	    this. n2 = item2.getUpgradeSlots();
	    this. o1 = item1.getLevel();
	    this. o2 = item2.getLevel();
		this. p1 = item1.getMdef();
		this. p2 = item2.getMdef();
        this. Ow1 = item1.getOwner();
		this. Ow2 = item2.getOwner();
		
		var checkj = 0;
		var res = 0;
		
		if((parseInt(item1.getItemId()/10000)) == 104 && (parseInt(item2.getItemId()/10000)) == 105 || (parseInt(item1.getItemId()/10000)) == 105 && (parseInt(item2.getItemId()/10000)) == 104){
			checkj = 1;
		}
			
		if ((parseInt(item2.getItemId() / 10000) != parseInt(item1.getItemId() / 10000)) && checkj == 0) {
            cm.sendOk("只能轉移同類別的裝備哦...");
            cm.dispose();
		}
		
		for(var cx = 0 ; cx < forbin.length ; cx ++){
			if(item1.getItemId() == forbin[cx] || item2.getItemId() == forbin[cx]){
				res++;
			}
		}
		
		if( res > 0){
			cm.sendOk("您的選擇內物品含有無法轉移素質的裝備");
			cm.dispose();
		}

		else if(i!=i2 || checkj == 1){
		cm.sendYesNo("#d請確認您的裝備 : #k#r#t" + cm.getInventory(1).getItem(i).getItemId()  + "##k\r\n#d欲與此裝備交換素質 : #k#r#t" + cm.getInventory(1).getItem(i2).getItemId() + "#\r\n" +
		"#b以下為兩者裝備素質，請確認後再進行交換 :#k\r\n" + 
		"#r#t" + cm.getInventory(1).getItem(i).getItemId() + "##k / #r#t" + item2.getItemId() + "##k#d 素質 :#k\r\n" + 
		"力量 :#r"  + item1.getStr() + "#k vs #r" + item2.getStr() + "#k\r\n" +
		"敏捷 :#r"  + item1.getDex() + "#k vs #r" + item2.getDex() + "#k\r\n" +
		"智力 :#r"  + item1.getInt() + "#k vs #r" + item2.getInt() + "#k\r\n" +
		"幸運 :#r"  + item1.getLuk() + "#k vs #r" + item2.getLuk() + "#k\r\n" +
		"血量 :#r"  + item1.getHp() + "#k vs #r" + item2.getHp() + "#k\r\n" +
		"魔力 :#r"  + item1.getMp() + "#k vs #r" + item2.getMp() + "#k\r\n" + 
		"物攻 :#r"  + item1.getWatk() + "#k vs #r" + item2.getWatk() + "#k\r\n" + 
		"魔攻 :#r"  + item1.getMatk() + "#k vs #r" + item2.getMatk() + "#k\r\n" + 
		"物防 :#r"  + item1.getWdef() + "#k vs #r" + item2.getWdef() + "#k\r\n" + 
		"魔防 :#r"  + item1.getMdef() + "#k vs #r" + item2.getMdef() + "#k\r\n" + 
		"迴避 :#r"  + item1.getAvoid() + "#k vs #r" + item2.getAvoid() + "#k\r\n" +
        "命中 :#r"  + item1.getAcc() + "#k vs #r" + item2.getAcc() + "#k\r\n" + 
        "速度 :#r"  + item1.getSpeed() + "#k vs #r" + item2.getSpeed() + "#k\r\n" +
        "跳躍 :#r"  + item1.getJump() + "#k vs #r" + item2.getJump() + "#k\r\n" + 
        "附魔 :#r"  + item1.getOwner() + "#k vs #r" + item2.getOwner() + "#k\r\n" + 
		"卷軸 :#r"  + item1.getUpgradeSlots() + "#k vs #r" + item2.getUpgradeSlots() + "#k\r\n" +
		"已衝 :#r"  + item1.getLevel() + "#k vs #r" + item2.getLevel() + "#k\r\n" 
		);
		}else if(i==i2){
			cm.sendOk("請勿選擇同一裝備");
		    cm.dispose();
		}

	}else if(status==3){
		
		item1.setStr(a2);
		item2.setStr(a1);
		item1.setDex(b2);
		item2.setDex(b1);
		item1.setInt(c2);
		item2.setInt(c1);
		item1.setLuk(d2);
		item2.setLuk(d1);
		item1.setHp(e2);
		item2.setHp(e1);
		item1.setMp(f2);
		item2.setMp(f1);
		item1.setWatk(g2);
		item2.setWatk(g1);
		item1.setMatk(h2);
		item2.setMatk(h1);
		item1.setWdef(s2);
		item2.setWdef(s1);
		item1.setMdef(p2);
		item2.setMdef(p1);
		item1.setAcc(j2);
		item2.setAcc(j1);
		item1.setAvoid(k2);
		item2.setAvoid(k1);
		item1.setSpeed(l2);
		item2.setSpeed(l1);
		item1.setJump(m2);
		item2.setJump(m1);
		item1.setUpgradeSlots(n2);
		item2.setUpgradeSlots(n1);
		item1.setLevel(o2);
		item2.setLevel(o1);
		item1.setOwner(Ow2);
		item2.setOwner(Ow1);
		cm.getPlayer().modifyCSPoints(消耗點數類型,-meso,true);
		cm.getPlayer().fakeRelog();
		cm.dispose();
	}
}
	