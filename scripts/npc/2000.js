//�@��e�� 45�ӥb�Φr�� �� 26�ӥ��Φr�� �� 12��item�ϧ�
var status = 0;
var rA = "#i3991000#";
var rI = "#i3991008#";
var rC = "#i3991002#";
var rL = "#i3991011#";
var rnum = new Array("#i3990009#","#i3990000#","#i3990001#","#i3990002#","#i3990003#","#i3990004#","#i3990005#","#i3990006#","#i3990007#","#i3990008#");
var rsym = new Array("#i3990020#","#i3990021#")
var title = "�@�@�@�@�@�@�@   " + rA + "�@" + rI + "�@" +  rC + "�@" + rL + "\r\n";
var saying = 
   "�@#r=================�i�������ʡj=================" + "\r\n"
 + "�@#d#L0#[�d�ǭ��ɬ���]#l" + "\r\n\r\n" //#L1#[�d�ǶW��§�]]
 + "�@#r=================�i�d�ǥ\��j=================" + "\r\n" 
 + "�@#d#L11#[�C����y]#L12#[���ֹq�x]#L14#[�aģ�Ʀ�]#l" + "\r\n"//#L13#[�D��M��]
 + "�@#d#L15#[�ƥ��ǰe]#L16#[�@�ɶǰe]#L17#[���ө�]#l" + "\r\n\r\n"
 + "�@#r=================�i�d�Ǭd�ߡj=================#k"+ "\r\n"
 + "  #d#L21#[�귽��o]#L22#[ �����D��d��]#L23#[�@��ƥ�]#l"+"\r\n"
 + "  #d#L24#[�S��ƥ�]#L25#[ ���O�d��]#L26#[�d�Ǩt��]#l" + "\r\n";
 
 
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
			var nowdate = "�@�@  " + toI(ty) + rsym[1] + toI(tm) + rsym[1] + toI(td) + "\r\n";
            var nowweek = "�@�@�@�@�@�@�@�@�@�@����§��:" + week[cm.getDayOfWeek()] +" \r\n";
			cm.sendSimple (title + nowdate + nowweek + saying); //YYYY-MM-DD (W) (�W�U��?AMPN) HH:MM:SS
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
					cm.sendNext ("���ݶ}�Ҹӥ\��ݪ�O#r���U#k�����C");
					break;
				case 16: 
					cm.sendNext ("���ݶ}�Ҹӥ\��ݪ�O#r���U#k�����C");
					break;
				case 17: 
					cm.sendNext ("���ݶ}�Ұө��ݭn��O#r�����U#k�����C");
					break;
					
					
				case 21: 
					cm.sendOk ("���e�ǳƤ�");
					cm.dispose();
					break;

				case 22: 
					cm.sendOk ( "�p�b���ǹL�{�����_�Ǫ��F��A�w��Ӧ��d�ߡC\r\n"+
							    "�H�U���������~�W�٥H�ά۹����\�� : \r\n\r\n"+
							    "#r#v"+4310098+"# [ #t"+4310098+"# ] - #k�i�ܤ}�b����C�ֳ��I��\r\n"+
								"#r#v"+4310099+"# [ #t"+4310099+"# ] - #k�i�ܤ}�b����C�ֳ��I��\r\n"+
								"#r#v"+4310100+"# [ #t"+4310100+"# ] - #k�i�ܤ}�b����C�ֳ��I��\r\n"+
								"#r#v"+4310101+"# [ #t"+4310101+"# ] - #k�i�ܤ}�b����C�ֳ��I��\r\n"+
								"#r#v"+4310102+"# [ #t"+4310102+"# ] - #k�i�ܤ}�b����C�ֳ��I��\r\n"+
								"#r#v"+4031323+"# [ #t"+4031323+"# ] - #k�i�ܸU��#b�C��I��#k���I���D��\r\n"+
								"#r#v"+3991011+"# [ #t"+3991011+"# ] - #k�i�ܸU��#b�C�P�I��#k���I���D��\r\n"+
								"#r#v"+3991008+"# [ #t"+3991008+"# ] - #k�i�ܸU��#b�C�P�I��#k���I���D��\r\n"+
								"#r#v"+3991002+"# [ #t"+3991002+"# ] - #k�i�ܸU��#b�C�P�I��#k���I���D��\r\n"+
								"#r#v"+3991000+"# [ #t"+3991000+"# ] - #k�i�ܸU��#b�C�P�I��#k���I���D��\r\n");
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
				cm.sendOk("�z�S��������������I�I");
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