var status = 0;

//�D�� �F�жq ������ƪ�
//�]�w�n���m����A�Цܸ�Ʈw��playcollect��ƪ�A�b��������ƪ�ƧǷs�W�D��C

//�D��N�X �һݼƶq ��ƪ��Ǹ�
var ���m�� = [
    [4310110, 100000, 1], 
	[4310113, 100000, 2],  
];

//�D��N�X �һݼƶq ��ƪ��Ǹ�
var getPlayCollect = [
    [4310110, 100000, 1], 
	[4310113, 100000, 2], 
];
//�D�� �ƶq
var ���y�D�� = [
    [2450000, 1], 
	[2450001, 10], 
	[2450002, 2], 
	[2450004, 2], 
	[5220000, 1],
	[5220040, 1],
	[5220005, 5],
	[2022530, 5],
		
];

//�e�T�W���y
var MVP_item = [
	//�Ĥ@�W
	[
		[5220000, 5, -1],
		[5220010, 5, -1],
	],
	//�ĤG�W
	[
		[5220000, 5, -1],
		[5220010, 5, -1],
	],
	//�ĤT�W
	[
		[5220000, 5, -1],
		[5220010, 5, -1],
	],
]

//�]�w�e�T�W�A
var MVP = Array(
	"111111111",
	"111111111",
	"111111111"
	);
	
var �Ĥ@�W�W�� = "111111111";
var �ĤG�W�W�� = "111111111";
var �ĤT�W�W�� = "111111111";

var namelist =[
	["#r�i�Ĥ@�����m�j���j","#k"], 
	["�u�Ĥ@�W�v","�ȵL �@���m�F#r 0 #k ��"], 
	["�u�ĤG�W�v","�ȵL �@���m�F#r 0 #k ��"], 
	["�u�ĤT�W�v","�ȵL �@���m�F#r 0 #k ��"], 
]
//1 = �} 0 = ��
var �O�_�}���� = 0;
var ����O���O�s = "�Ĥ@���I�Ǥ������y";
var ���ʮɶ� = "�Ĥ@���I�Ǥ����i06/28~07/17�j";

function start() {  
    status = -1;  
    action(1, 0, 0);  
}  

function action(mode, type, selection) {  
var name = cm.getPlayer().getName();
    if (mode == -1) {  
        cm.dispose();  
    } else {  
        if (mode == 0 && status == 0) {  
            cm.dispose();  
            return;  
        }  
        if (mode == 1)  
            status++;  
        else  
            status--;  
        if (status == 0) {  
			store = true;
            cm.sendSimple (
				 "#r[���A�`������]#n#k "+���ʮɶ�+"\r\n�@�_�ӻ`������I�I" +
               "\r\n#L101#���m����" +
               "\r\n#L102#�U����`�����p"+
               "\r\n#L103#�������y"+
               "\r\n#L104#���m�Ʀ�"+
               "\r\n#L105#���v�Ʀ�"+
               "\r\n#L106#������y");
        }else if (status == 1){	
			if (store) {
                switch (selection) {
                    case 101:
                        storeInfo = ���m��;
                        break;
                    case 102:
                        storeInfo = getPlayCollect;
                        break;
                    case 103:
                        storeInfo = ���y�D��;
                        break;
                    case 104:
                        cm.showRank("���m�D��");
                        cm.dropMsg(5,"[���m�D��Ʀ�]�Ʀ�̫��s�ɶ�:"+cm.showRankTime("���m�D��"));
                        cm.dispose();
						return;
                        break;
					case 105:
						storeInfo = namelist;
                        var storeText = "";
						storeText += "�w��d�ݾ��v���m�j��\r\n";
						for (var i = 0; i < storeInfo.length; ++i) {
							�j���Ʀ�W�� = storeInfo[i][0];
							�j���Ʀ�W�� = storeInfo[i][1];
							storeText += ""+�j���Ʀ�W��+""+�j���Ʀ�W��+"\r\n";
						}
						cm.sendOk(storeText);
						cm.dispose();
                        break;
					case 106:
						storeInfo = ���y�D��;
						var canget = false;
							for(var i =0; i< MVP.length;i++){
								if(MVP[i].equals(name)){
									canget = true;		
									if(MVP[i] == �Ĥ@�W�W��){
										var �ƦW = 0;	
										var �W�� = "�Ĥ@�W";
									}if(MVP[i] == �ĤG�W�W��){
										var �ƦW = 1;	
										var �W�� = "�ĤG�W";
									}if(MVP[i] == �ĤT�W�W��){
										var �ƦW = 2;	
										var �W�� = "�ĤT�W";
									}
								}
							}
						if(�O�_�}���� == 1){
							if (cm.getPlayer().getPrizeLog(����O���O�s+name) >= 1) {
								cm.sendOk("�z���b���w�g����L#r�i" + ����O���O�s + "�j#k�F��I");
								cm.safeDispose();
								return;	
							}
							if(canget){
								
								var storeText = "";
								for (var i = 0; i < MVP_item[�ƦW].length; ++i) {
									var ForItem = MVP_item[�ƦW][i][0];
									var ForItemCost = MVP_item[�ƦW][i][1];
									cm.gainItem(ForItem, ForItemCost);									
									storeText += "#t"+ForItem+"#  #k#i"+ForItem+"# "+ForItemCost+" ��\r\n\r\n";
								}for (var i = 0; i < storeInfo.length; ++i) {
									var ForItem2 = storeInfo[i][0];
									var ForItemCost2 = storeInfo[i][1];
									cm.gainItem(ForItem2, ForItemCost2);									
									storeText += "#t"+ForItem2+"#  #k#i"+ForItem2+"# "+ForItemCost2+" ��\r\n\r\n";
								}
								cm.sendOk("�z�n"+name+"���߱z�a���m"+�W��+"�C\r\n�{�b�Ц��U�ڬ��z�ǳƪ��B�~�ƦW���y�P��L�׫p���y�C\r\n\r\n"+storeText);
								cm.getPlayer().setPrizeLog(����O���O�s+name); //�o��O�]�w���a�b���w��L�O��
								cm.dispose();	
							}else{
								var storeText = "";
								storeText += "���߱z������������A���`���D��\r\n\r\n";
								for (var i = 0; i < storeInfo.length; ++i) {
									var ForItem = storeInfo[i][0];
									var ForItemCost = storeInfo[i][1];
									cm.gainItem(ForItem, ForItemCost);									
									storeText += "#t"+ForItem+"#  #k#i"+ForItem+"# "+ForItemCost+" ��\r\n\r\n";
								}
								cm.getPlayer().setPrizeLog(����O���O�s+name); //�o��O�]�w���a�b���w��L�O��
								cm.sendOk(storeText);
								cm.dispose();							
							}
								
						}else{
							cm.sendOk("�٥��쬡�ʵ����ɶ��A�|���}�����C");
							cm.dispose();
						}
						
                        break;		
                    default:
                        storeInfo = [];
                }
				selection2 = selection;
				if (storeInfo.length == 0) {
                    cm.sendOk("�o�Ӱө����s�b");
                    cm.dispose();
                    return;
                }
				if(selection2 == 101){
                var storeText = "";
				storeText += "�z�n���m���Ӫ���O?\r\n";
                for (var i = 0; i < storeInfo.length; ++i) {
                    var PlayCollectItem = storeInfo[i][0];
                    storeText += "#L" + i + "##k#i"+PlayCollectItem+"#  #r#t"+PlayCollectItem+"#\r\n\r\n#l\r\n";
                }
                cm.sendSimple(storeText);
				}
				if (selection2 == 102){
					var storeText = "";
					storeText += "�H�U���ثe����֭p�ƶq\r\n\r\n";
					for (var i = 0; i < storeInfo.length; ++i) {
                    var GetPlayCollectItem = storeInfo[i][0];
					var GetPlayCollectcost = storeInfo[i][1];
					var GetPlayCollectID = storeInfo[i][2];
					
                    storeText += "#r#t"+GetPlayCollectItem+"#  #k#i"+GetPlayCollectItem+"#  �ثe�ƶq�� :  "+cm.getPlayCollect(GetPlayCollectID)+"  ��\r\n\r\n#r����F�жq#k :   "+GetPlayCollectcost+"  ��\r\n\r\n";
                }
               cm.sendOk(storeText);
               cm.dispose();				
			}if (selection2 == 103){
				var storeText = "";
				storeText += "�����������ʱz�i��o�H�U���y\r\n\r\n";
				storeText += "#r�i�Ĥ@�W�B�~���y�j#k\r\n\r\n";
				for (var i = 0; i < MVP_item[0].length; ++i) {
					var ForItem2 = MVP_item[0][i][0];
					var ForItemCost2 = MVP_item[0][i][1];
								
					storeText += "#t"+ForItem2+"#  #k#i"+ForItem2+"# "+ForItemCost2+" ��\r\n\r\n";
				}
				storeText += "#r�i�ĤG�W�B�~���y�j#k\r\n\r\n";
				for (var i = 0; i < MVP_item[1].length; ++i) {
					var ForItem3 = MVP_item[1][i][0];
					var ForItemCost3 = MVP_item[1][i][1];
								
					storeText += "#t"+ForItem3+"#  #k#i"+ForItem3+"# "+ForItemCost3+" ��\r\n\r\n";
				}
				storeText += "#r�i�ĤT�W�B�~���y�j#k\r\n\r\n";
				for (var i = 0; i < MVP_item[2].length; ++i) {
					var ForItem4 = MVP_item[2][i][0];
					var ForItemCost4 = MVP_item[2][i][1];
								
					storeText += "#t"+ForItem4+"#  #k#i"+ForItem4+"# "+ForItemCost4+" ��\r\n\r\n";
				}
					
					storeText += "#r�i���A���a���y�j#k\r\n\r\n";
					for (var i = 0; i < storeInfo.length; ++i) {
                    var ForItem = storeInfo[i][0];
					var ForItemCost = storeInfo[i][1];		
                    storeText += "#t"+ForItem+"#  #k#i"+ForItem+"# "+ForItemCost+" ��\r\n\r\n";
                }
				
                cm.sendOk(storeText);
				cm.dispose();
				}	
			} else {
					cm.sendOk("�X�{�������~");
					cm.dispose();
				}
		} if (status == 2){
			selection3 = selection;
			if(selection2 == 101){
				cm.sendGetNumber("�п�J�z�n���ت��ƶq", 1, 1, 10000);
			}
	} if (status == 3){
		if (selection <= 0 || selection > 10000) {
			cm.sendOk("�z�Q�������`�����A�ϥιL�{�w�Q����Log�I");
			cm.worldMessage(5,"���a�y"+ cm.getPlayer().getName() +"�z�Q������ϥβ��`�n��ק�ƾڡA�гq��GM�ˬd");
			cm.GAMEPLAYERLOG("�����A���`�����`", "�ϥβ��`�n��ק�ƾ�", 0, selection);
			cm.dispose();
			return;
		}
		 �ۭq�ƭ� = selection;
		 PlayCollectItem = storeInfo[selection3][0];
		 PlayCollectId = storeInfo[selection3][2];
		  if (cm.haveItem(PlayCollectItem,�ۭq�ƭ�)){
               cm.gainItem(PlayCollectItem, -�ۭq�ƭ�);
               cm.setPlayCollect(PlayCollectId,cm.getPlayCollect(PlayCollectId) + �ۭq�ƭ�);
               cm.getPlayer().addCharInfoNum("���m�D��",�ۭq�ƭ�);
               //cm.setPlayCollect2(�ۭq�ƭ�);
               cm.sendOk("�z���ؤF#r "+�ۭq�ƭ�+" #k��#r#t"+PlayCollectItem+"##k\r\n"+
               "�{�b�����`�ƨӨ�#r "+cm.getPlayCollect(PlayCollectId)+"#k ��\r\n"+
               "���±z�����ءI�I�I");
               cm.worldMessage(2,"[" + cm.getChannelServer().getServerName() + "] : " + "���a " + cm.getChar().getName() + " �b�I�Ǥ������ʮ��ؤF "+�ۭq�ƭ�+" �Ӫ���I");
                cm.dispose();
            }else{
               cm.sendOk("�A���W�S���Ӫ�");
                cm.dispose();
			}
		
		}
	}
}