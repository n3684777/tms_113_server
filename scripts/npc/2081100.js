/*  NPC : 漢摩尼亞
 劍士 4轉 任務腳本
 地圖代碼 (240010501)
 */
load('nashorn:mozilla_compat.js');
importPackage(Packages.constants); //ServerConstants.
var status = -1;
var pass = false;
var 英雄五角勳章 = 4031343;
var 英雄星型墜飾 = 4031344;


function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 && status == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1)
        status++;
    else
        status--;

    if (status == 0) {
        if (!(cm.getJob() == 111 || cm.getJob() == 121 || cm.getJob() == 131)) {
            cm.sendOk("為什麼你要見我??還有你想要問我關於什麼事情??");
            cm.dispose();
            return;
        } else if (cm.getPlayer().getLevel() < 120) {
            cm.sendOk("你等級尚未到達120級.");
            cm.dispose();
            return;
        } else {
            if (cm.getQuestStatus(6904) == 2) {
                pass = true;
            }
            if (cm.getJob() == 111) {
                cm.sendSimple("恭喜你有資格4轉. \r\n請問你想4轉嗎??\r\n#b#L0#我想成為英雄.#l\r\n#b#L1#像我想一下...#l");
            } else if (cm.getJob() == 121) {
                cm.sendSimple("恭喜你有資格4轉. \r\n請問你想4轉嗎??\r\n#b#L0#我想成為聖騎士.#l\r\n#b#L1#像我想一下...#l");
            } else if (cm.getJob() == 131) {
                cm.sendSimple("恭喜你有資格4轉. \r\n請問你想4轉嗎??\r\n#b#L0#我想成為黑騎士.#l\r\n#b#L1#像我想一下...#l");
            } else {
                cm.sendOk("好吧假如你想要4轉麻煩再來找我");
                cm.dispose();
                return;
            }
        }
    } else if (status == 1) {
        if (selection == 1) {
            cm.sendOk("好吧假如你想要4轉麻煩再來找我");
            cm.dispose();
            return;
        }
        if (cm.getPlayerStat("RSP") > (cm.getPlayerStat("LVL") - 120) * 3) {
            cm.sendOk("你的技能點數還沒點完..");
            cm.dispose();
            return;
        }
        if (pass) {
            cm.sendNext("即將四轉。");
        } else {
            if (!cm.haveItem(英雄五角勳章) || !cm.haveItem(英雄星型墜飾)) {
                cm.sendOk("我需要#t"+英雄五角勳章+"# x1 #t"+英雄星型墜飾+"# x1。");
                cm.dispose();
                return;
            } else {
                cm.sendNext("即將四轉。");
            }
        }
    } else if (status == 2) {
        if (cm.canHold(2280003)) {
            cm.gainItem(2280003, 1);
            if (cm.getJob() == 111) {
                cm.changeJob(112);
                cm.teachSkill(1121001, 0, 10);
                cm.teachSkill(1120004, 0, 10);
                cm.teachSkill(1121008, 0, 10);
                cm.getPlayer().gainAp(5);    
				if(ServerConstants.冒險者四轉不用母書){
					cm.teachSkill(1121006, 0, 10);
					cm.teachSkill(1121002, 0, 10);
					cm.teachSkill(1121010, 0, 10);
					cm.teachSkill(1120005, 0, 10);
					cm.teachSkill(1120003, 0, 10);
					
				}
                cm.gainItem(英雄五角勳章, -1);
                cm.gainItem(英雄星型墜飾, -1);
                cm.worldMessage(2,"[" + cm.getChannelServer().getServerName() + "] : " + "玩家 " + cm.getChar().getName() + " 已轉職為英雄!!");
             
                cm.sendNext("恭喜你轉職為 #b英雄#k.我送你一些神秘小禮物^^");
            } else if (cm.getJob() == 121) {
                cm.changeJob(122);
                cm.teachSkill(1221001, 0, 10);
                cm.teachSkill(1220005, 0, 10);
                cm.teachSkill(1221009, 0, 10);
                cm.getPlayer().gainAp(5);    
				if(ServerConstants.冒險者四轉不用母書){
					cm.teachSkill(1221007, 0, 10);
					cm.teachSkill(1221002, 0, 10);
					cm.teachSkill(1221011, 0, 10);
					cm.teachSkill(1220006, 0, 10);
					cm.teachSkill(1220010, 0, 10);
					cm.teachSkill(1221003, 0, 10);
					cm.teachSkill(1221004, 0, 10);
					
				}
                cm.gainItem(英雄五角勳章, -1);
                cm.gainItem(英雄星型墜飾, -1);
                cm.worldMessage(2,"[" + cm.getChannelServer().getServerName() + "] : " + "玩家 " + cm.getChar().getName() + " 已轉職為聖騎士!!");
             
                cm.sendNext("恭喜你轉職為 #b聖騎士#k.我送你一些神秘小禮物^^");
            } else if (cm.getJob() == 131) {
                cm.changeJob(132);
                cm.teachSkill(1321001, 0, 10);
                cm.teachSkill(1320005, 0, 10);
                cm.teachSkill(1321007, 0, 10);
                cm.getPlayer().gainAp(5);    
				if(ServerConstants.冒險者四轉不用母書){
					cm.teachSkill(1321003, 0, 10);
					cm.teachSkill(1321002, 0, 10);
					cm.teachSkill(1320006, 0, 10);
					cm.teachSkill(1320009, 0, 25);
					cm.teachSkill(1320008, 0, 25);
					
				}
                cm.gainItem(英雄五角勳章, -1);
                cm.gainItem(英雄星型墜飾, -1);
                cm.worldMessage(2,"[" + cm.getChannelServer().getServerName() + "] : " + "玩家 " + cm.getChar().getName() + " 已轉職為黑騎士!!");
             
                cm.sendNext("恭喜你轉職為 #b黑騎士#k.我送你一些神秘小禮物^^");
            }
        } else {
            cm.sendOk("你沒有多的欄位請清空再來嘗試一次!");
            cm.dispose();
            return;
        }

    } else if (status == 3) {
        cm.sendNext("不要忘記了這一切都取決於你練了多少.");
    } else if (status == 4) {
        cm.sendNextPrev("我已你為榮.");
        cm.dispose();
    }
}