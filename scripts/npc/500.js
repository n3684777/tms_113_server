//Mina_MS
var status = 0;
var typeName = new Array("�i��j", "�i���j", "�i�p�j", "�i���j", "�i�j�j", "�i�@�I�j", "�i�G�I�j", "�i�T�I�j", "�i�|�I�j", "�i���I�j", "�i���I�j");
var selectTouType = new Array(2, 2, 3, 3, 3, 6, 6, 6, 6, 6, 6);
var selectTouNum = new Array(1, 5, 1, 3, 5, 1, 2, 3, 4, 5, 6);
var selectTou = -1;
var nx = 500;
var race;
var num;
function start() {
    status = -1;
    if(cm.getPlayer().getClient().getChannel() != 1){
        cm.sendOk("��ըt�Υu�}��19S�@!");
        cm.dispose();
    }
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;
        if (status == -1) {
            cm.dispose();
        } else if (status == 0) {
            var where = "�X�Ө���ըt��\r\n���p�A�����F,�n����5%������.�z���I���ƶq��:#r" + cm.getNX() + "\r\n��ܧA�n�U�`���ﶵ�C\r\n";
            if (cm.getChar().isGM()) {
                where += "#r�޲z������:#k�Y�iGASH:#r" + cm.seeAlltouzhu() + "#k �ߥXGASH:#r" + cm.seeAllpeichu() + "#k(��GM�i��.)\r\n";
            }
            where+="#r2�����y#k\r\n#L0##b�i��j#k#l#L1##b�i���j#k#l\r\n\r\n";
            where += "#r3�����y#k\r\n\r\n#L2##b�i�p�j#k#l#L3##b�i���j#k#l#L4##b�i�j�j#k#l\r\n\r\n";
            where += "#r6�����y#k\r\n#L5##b�i�@�j#k#l#L6##b�i�G�j#k#l#L7##b�i�T�j#k#l#L8##b�i�|�j#k#l#L9##b�i���j#k#l#L10##b�i���j#k#l\r\n\r\n\r\n";
            where += "�����}���e��`�έp,�C5�����}����s�έp:\r\n";
            where += "#b2����`�Ʒ�e:#k" + cm.seeTouzhuByType(2) + "�H��`\r\n";
            where += "#b3����`��:#k" + cm.seeTouzhuByType(3) + "\r\n";
            where += "#b6����`��:#k" + cm.seeTouzhuByType(6) + "\r\n\r\n";

            where += "#r���t�ζȦb�W�D1����,�C�@�q�ɶ��}���@��,�Ф��n�H�N���W�D�Ϊ̤U�u.�_�h�y������I���ᥢ,�N���������v�C#k";
            cm.sendSimple(where);
        } else if (status == 1) {
            if (cm.getPlayer().getClient().getChannel() != 19) {
                cm.sendOk("�Өt�ζȦb�W�D1�}��C�p�G�b��L�W�D�����|��o���y�C");
                cm.dispose();
            } else
            if (cm.getPlayer().getTouzhuNum() > 0) {
                cm.sendOk("�����}���e�z�w�g��L�`�F�C�z����`���B:" + cm.getPlayer().getTouzhuNX());
                cm.dispose();
            } else {
                selectTou = selection;
                race = selectTouType[selectTou];
                num = selectTouNum[selectTou];
                var prompt = "�A��ܪ���`������:" + typeName[selectTou] + "���v��:" + selectTouType[selectTou] + "\r\n�̰���`100�I�A�̧C��`1�I�C\r\n�z���I���ƶq��:" + cm.getNX() + "\r\n�п�J�A�n��`���I���ƥءC";
                cm.sendGetNumber(prompt, 500, 1, 100);
            }
        } else if (status == 2) {
            status = 4;
            nx = selection;
            cm.sendYesNo("�z�T�w�n��` " + nx + " �I�ܡH����:" + race + " ���X:" + num);
        } else if (status == 3) {
            cm.sendOk("�ݼˤl�A�٫ܵS�ݡA���N�Q�n�F�A�ӧa�H");
            cm.dispose();
        } else if (status == 4) {
            cm.sendOk("����");
            cm.dispose();
        } else if (status == 5) {
            if (nx > cm.getNX()) {
                cm.sendOk("�z���I������ " + nx + " �I");
                cm.dispose();
            } else
            if (cm.touzhu(race, nx, num)) {
                cm.sendOk("��`����,�C�����}���C�Ф��n���}��C");
                cm.dispose();
            } else {
                cm.sendOk("��`�X�{���~�C");
                cm.dispose();
            }
        } else if (status == 6) {
            cm.sendOk("6");
            cm.dispose();
        } else if (status == 7) {
            cm.dispose();
        }
    }
}
