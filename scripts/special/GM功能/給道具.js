var status = -1;
var playerNames = [];
var �٧U���B�� = 30000;

var ���y���� = [

		//�d��
		[
		// �D��N�X �ƶq �Ѽ� �|�� ���� �]�� �O�_���B�~���ݩ�( 0 = �L 1 = �O�C��g 1 �~�|�j����˳��ݩ�) ����log
			[4000015, 1, -1, 50, 50, 50, 0,"�ƫe�n�J"],
			[4000015, 1, -1, 50, 50, 50, 0,"�ƫe�n�J"],
			[4000015, 1, -1, 30, 30, 30, 0,"�ƫe�n�J"],
			[4000015, 1, -1, 30, 30, 30, 0,"�ƫe�n�J"],
			[4000015, 1, -1, 30, 30, 30, 0,"�ƫe�n�J"],
			[4000015, 1, -1, 30, 30, 30, 0,"�ƫe�n�J"],
		],
		
		//�٧U���y
		[
			[1022033, 1, -1, 5, 3, 5, 1,"�٧U���B#r "+�٧U���B��+" #k��_"],
			[5220020, 20, -1, 50, 50, 50, 0,"�٧U���B#r "+�٧U���B��+" #k��_"],
			[5220000, 30, -1, 30, 30, 30, 0,"�٧U���B#r "+�٧U���B��+" #k��_"],
			[2022530, 20, -1, 30, 30, 30, 0,"�٧U���B#r "+�٧U���B��+" #k��_"],
			[2450018, 25, -1, 30, 30, 30, 0,"�٧U���B#r "+�٧U���B��+" #k��_"],
			[2450002, 8, -1, 30, 30, 30, 0,"�٧U���B#r "+�٧U���B��+" #k��_"],
		],
		
		
];


function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else if (mode == 0) {
		status--;
	} else {
		cm.dispose();
		return;
	}
	
	if (status == 0) {
		if(cm.getPlayer().getJobId() != 900){
			cm.sendOk("�w��z�A���q���a�A�z���OGM�L�k�ϥΦ��\��");
			cm.dispose();
			return;
		}
		cm.sendGetText("�Х���J���a�W�١A�нT�O���n�����H�Ϊ��a�b�u�W");
	} else if (status == 1) {
		���a�W�� = cm.getText();
		var msg = "";
		msg += "�аݷQ�n��������y\r\n\r\n";
		msg +=  "#L0#�ƫe�n�J#l\r\n"; 
		msg +=  "#L1#3�U���٧U#l\r\n"; 
		cm.sendSimple(msg);
		
	}else if (status == 2) {
		������� = selection;
		var requiredItems = ���y����[�������];
		    for (var i = 0; i < requiredItems.length; i++) {
				var itemId = requiredItems[i][0];
				var itemQuantity = requiredItems[i][1];
				var �ɶ� = requiredItems[i][2];
				var �|�ݩ� = requiredItems[i][3];
				var ���� = requiredItems[i][4];
				var �]�� = requiredItems[i][5];
				var ���� = requiredItems[i][6];
				var ����log = requiredItems[i][7];
				if(���� > 0){
					cm.processCommand("!���D���ݩ� " + ���a�W�� + " "  + itemId + " "  + itemQuantity + " "  + �|�ݩ� + " "  + ���� + " "  + �]�� + " "  + �ɶ�);
				}else{
					cm.processCommand("!���D�� " + ���a�W�� + " "  + itemId + " "  + itemQuantity);
				}
				
			}
		var playerID = Packages.client.MapleCharacter.getCharacterByName(���a�W��);
			playerID.setPrizeLog(����log);	
		cm.dispose();
	}
}
