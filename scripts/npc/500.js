//Mina_MS
var status = 0;
var typeName = new Array("【單】", "【雙】", "【小】", "【中】", "【大】", "【一點】", "【二點】", "【三點】", "【四點】", "【五點】", "【六點】");
var selectTouType = new Array(2, 2, 3, 3, 3, 6, 6, 6, 6, 6, 6);
var selectTouNum = new Array(1, 5, 1, 3, 5, 1, 2, 3, 4, 5, 6);
var selectTou = -1;
var nx = 500;
var race;
var num;
function start() {
    status = -1;
    if(cm.getPlayer().getClient().getChannel() != 1){
        cm.sendOk("賭博系統只開放19S哦!");
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
            var where = "合太谷賭博系統\r\n假如你中獎了,要扣掉5%的佣金.您的點卷數量為:#r" + cm.getNX() + "\r\n選擇你要下注的選項。\r\n";
            if (cm.getChar().isGM()) {
                where += "#r管理員提示:#k吃進GASH:#r" + cm.seeAlltouzhu() + "#k 賠出GASH:#r" + cm.seeAllpeichu() + "#k(僅GM可見.)\r\n";
            }
            where+="#r2倍獎勵#k\r\n#L0##b【單】#k#l#L1##b【雙】#k#l\r\n\r\n";
            where += "#r3倍獎勵#k\r\n\r\n#L2##b【小】#k#l#L3##b【中】#k#l#L4##b【大】#k#l\r\n\r\n";
            where += "#r6倍獎勵#k\r\n#L5##b【一】#k#l#L6##b【二】#k#l#L7##b【三】#k#l#L8##b【四】#k#l#L9##b【五】#k#l#L10##b【六】#k#l\r\n\r\n\r\n";
            where += "本期開獎前投注統計,每5分鐘開獎刷新統計:\r\n";
            where += "#b2倍投注數當前:#k" + cm.seeTouzhuByType(2) + "人投注\r\n";
            where += "#b3倍投注數:#k" + cm.seeTouzhuByType(3) + "\r\n";
            where += "#b6倍投注數:#k" + cm.seeTouzhuByType(6) + "\r\n\r\n";

            where += "#r本系統僅在頻道1有效,每一段時間開獎一次,請不要隨意更換頻道或者下線.否則造成獲獎點卷丟失,將不給予補償。#k";
            cm.sendSimple(where);
        } else if (status == 1) {
            if (cm.getPlayer().getClient().getChannel() != 19) {
                cm.sendOk("該系統僅在頻道1開放。如果在其他頻道獎不會獲得獎勵。");
                cm.dispose();
            } else
            if (cm.getPlayer().getTouzhuNum() > 0) {
                cm.sendOk("本次開獎前您已經投過注了。您的投注金額:" + cm.getPlayer().getTouzhuNX());
                cm.dispose();
            } else {
                selectTou = selection;
                race = selectTouType[selectTou];
                num = selectTouNum[selectTou];
                var prompt = "你選擇的投注類型為:" + typeName[selectTou] + "倍率為:" + selectTouType[selectTou] + "\r\n最高投注100點，最低投注1點。\r\n您的點卷數量為:" + cm.getNX() + "\r\n請輸入你要投注的點卷數目。";
                cm.sendGetNumber(prompt, 500, 1, 100);
            }
        } else if (status == 2) {
            status = 4;
            nx = selection;
            cm.sendYesNo("您確定要投注 " + nx + " 點嗎？倍數:" + race + " 號碼:" + num);
        } else if (status == 3) {
            cm.sendOk("看樣子你還很猶豫，那就想好了再來吧？");
            cm.dispose();
        } else if (status == 4) {
            cm.sendOk("謝謝");
            cm.dispose();
        } else if (status == 5) {
            if (nx > cm.getNX()) {
                cm.sendOk("您的點卷不足 " + nx + " 點");
                cm.dispose();
            } else
            if (cm.touzhu(race, nx, num)) {
                cm.sendOk("投注完畢,每分鐘開獎。請不要離開喔。");
                cm.dispose();
            } else {
                cm.sendOk("投注出現錯誤。");
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
