/**
-- Odin JavaScript --------------------------------------------------------------------------------
	Master Sergeant Fox <Orbis Exchange Quest> - Orbis(200000000)
-- By ---------------------------------------------------------------------------------------------
	Sean360
-- Version Info -----------------------------------------------------------------------------------
	1.1 - Official Text [Information]
	1.0 - First Version by Sean360
---------------------------------------------------------------------------------------------------
**/

var status = 0;
//可以當作蒐集物的代碼
var eQuestChoices = new Array (4000073,4000059,4000060,4000061,4000058,
    4000062,4000048,4000049,4000055,4000056,
    4000051,4000052,4000050,4000057,4000053,
    4000054,4000076,4000078,4000081,4000070,
    4000071,4000072,4000069,4000079,4000080);

var eQuestPrizes = new Array();

//請注意，上方蒐集物每多一種物品，下面的 eQuestPrizes 就要多一組對應的兌換物 
//下方的抽獎設定方式為 [物品代碼 給的數量 中獎機率]
//中獎機率如為 100 % 則為必中，那麼玩家每次兌換都只會抽到必中的物品，請斟酌設定
eQuestPrizes[0] = new Array (
	[2000001,20, 80],  // Orange Potions
    [2010004,10, 20],	// Lemons
    [2000003,15, 30], 	// Blue Potions
    [4003001,15, 40],	// Processed Wood
    [2020001,15, 50],	// Fried Chickens
    [2030000,15, 60]);	// Nearest Town Scroll
eQuestPrizes[1] = new Array (
	[2000003,20, 80],	// Blue Potions
    [2000001,30, 80],	// Orange Potions
    [2010001,40, 80],	// Meats
    [4003001,20, 80],	// Processed Wood
    [2040002,1, 80]);	// 10% Helm Def
eQuestPrizes[2] = new Array (
	[2000002,25, 80],	// White Potions
    [2000006,10, 80],	// Mana Elixir
    [2022000,5, 80],	// Pure Water
    [4000030,15, 80],	// Dragon Skins
    [2040902,1, 80]);	// 10% Shield Def
eQuestPrizes[3] = new Array (
	[2000002,30, 80],	// White Potions
    [2000006,15, 80],	// Mana Elixir
    [2020000,20, 80],	// Salad
    [4003000,5, 80]/*,	// Screws
   [2041016,1]*/);	// 10% Cape Int
eQuestPrizes[4] = new Array (
	[2000002,15, 80],	// White Potions
    [2010004,15, 80],	// Lemons
    [2000003,25, 80],	// Blue Potions
    [4003001,30, 80],	// Processed Wood
    [2040302,1, 80]);	// 10% Earring Int
eQuestPrizes[5] = new Array (
	[2000002,30, 80],	// White Potions
    [2000006,15, 80],	// Mana Elixir
    [2020000,20, 80],	// Salad
    [4003000,5, 80],	// Screws
    [2040402,1, 80]);	// 10% Top Def
eQuestPrizes[6] = new Array (
	[2000002,30, 80],	// White Potions
    [2020000,20, 80],	// Salad
    [2000006,15, 80],	// Mana Elixir
    [4003000,5, 80],	// Screws
    [2040402,1, 80]);	// 10% Top Def
eQuestPrizes[7] = new Array (
	[2000006,25, 80],	// Mana Elixir
    [2020000,20, 80],	// Salad
    [4020000,7, 80],	// Garnet Ore
    [4020001,7, 80],	// Amethyst Ore
    [4020002,3, 80],	// Aquamarine Ore
    [4020007,2, 80],	// Diamond Ore
    [2040708,1, 80]);	// 10% Shoe Speed
eQuestPrizes[8] = new Array (
	[2020005,30, 80],	// Hotdogs
    [2020006,15, 80],	// Hotdog Supremes
    [2022001,30, 80],	// Red Bean Soup
    [4003003,1, 80],	// Fairy Wing
    [2040505,1, 80]);	// 10% O/All Def
eQuestPrizes[9] = new Array (
	[2000006,25, 80],	// Mana Elixir
    [4020005,7, 80],	// Sapphire Ore
    [4020003,7, 80],	// Emerald Ore
    [4020004,7, 80],	// Opal Ore
    [4020008,2, 80],	// Black Crystal Ore
    [2040802,1, 80]);	// 10% Glove Dex
eQuestPrizes[10] = new Array   (
	[2002004,15, 80],	// Warrior Potion
    [2002005,15, 80],	// Sniper Potion
    [2002003,15, 80],	// Wizard Potion
    [4001005,1, 80],	// Ancient Scroll
    [2040502,1, 80]);	// 10% O/All Dex
eQuestPrizes[11] = new Array   (
	[2000006,20, 80],	// Mana Elixir
    [4010004,7, 80],	// Silver Ore
    [4010003,7, 80],	// Adamantium Ore
    [4010005,7, 80],	// Orihalcon Ore
    [4003002,1, 80],	// Piece of Ice
    [2040602,1, 80]);	// 10% Bottom Def
eQuestPrizes[12] = new Array   (
	[2000006,20, 80],	// Mana Elixir
    [4010002,7, 80],	// Mithril Ore
    [4010001,7, 80],	// Steel Ore
    [4010000,7, 80],	// Bronze Ore
    [4010006,2, 80],	// Gold Ore
    [4003000,5, 80],	// Screwa
    [2040702,1, 80]);	// 10% Shoe Dex
eQuestPrizes[13] = new Array   (
	[2000006,20, 80],	// Mana Elixir
    [4010004,7, 80],	// Silver Ore
    [4010005,7, 80],	// Orihalcon Ore
    [4010006,3, 80],	// Gold Ore
    [4020007,2, 80],	// Diamond Ore
    [4020008,2, 80],	// Black Crystal Ore
    [2040705,1, 80]);	// 10% Shoe Jump
eQuestPrizes[14] = new Array   (
	[2000006,30, 80],	// Mana Elixir
    [4020006,7, 80],	// Topaz Ore
    [4020008,2, 80],	// Black Crystal Ore
    [4020007,2, 80],	// Diamond Ore
    [2070010,1, 80],	// Icicle Stars
    [2040805,1, 80]);   // 10% Glove Attack
eQuestPrizes[15] = new Array   (
	[2000006,30, 80],   // Mana Elixir
    [4020006,7, 80],	// Topaz Ore
    [4020008.2, 80],	// Black Crystal Ore
    [4020007,2, 80],	// Diamond Ore
    [2041020,1, 80]);	// 10% Cape Dex
eQuestPrizes[16] = new Array   (
	[2000001,30, 80],	// Orange Potions
    [2000003,20, 80],	// Blue Potions
    [4003001,20, 80],	// Processed Wood
    [2010001,40, 80],	// Meats
    [2040002,1, 80]);	// 10% Helm Def
eQuestPrizes[17] = new Array   (
	[2000002,15, 80],	// White Potions
    [2000003,25, 80],	// Blue Potions
    [2010004,15, 80],	// Lemons
    [2050004,15, 80],	// Divine Elixir
    [4003001,30, 80],	// Processed Wood
    [2040302,1, 80]);	// 10% Earring Int
eQuestPrizes[18] = new Array   (
	[2000006,25, 80],	// Mana Elixir
    [2020006,25, 80],	// Hotdog Supreme
    [4010004,8, 80],	// Silver Ore
    [4010005,8, 80],	// Orihalcon Ore
    [4010006,3, 80],	// Gold Ore
    [4020007,2, 80],	// Diamond Ore
    [4020008,2, 80],	// Black Crystal Ore
    [2040705,1, 80]);	// 10% Shoe Jump
eQuestPrizes[19] = new Array   (
	[2000002,30, 80],	// White Potions
    [2020000,20, 80],	// Salad
    [2000006,15, 80],	// Mana Elixir
    [4003000,5, 80],	// Screws
    [2041005,1, 80]);	// 10% Cape Wep Def
eQuestPrizes[20] = new Array   (
	[2000002,30, 80],	// White Potions
    [2020000,20, 80],	// Salad
    [2000006,15, 80],	// Mana Elixir
    [4003000,5, 80],	// Screws
    [2041005,1, 80]);	// 10% Cape Wep Def
eQuestPrizes[21] = new Array   (
	[2000002,30, 80],	// White Potions
    [2020000,20, 80],	// Salad
    [2000006,15, 80],	// Mana Elixir
    [4003000,5, 80],	// Screws
    [2041005,1, 80]);	// 10% Cape Wep Def
eQuestPrizes[22] = new Array   (
	[2000006,20, 80],	// Mana Elixir
    [2020005,30, 80],	// Hotdogs
    [2020006,15, 80],	// Hotdog Supremes
    [2050004,20, 80],	// Divine Elixirs
    [4003003,1, 80],	// Fairy Wing
    [2041002,1, 80]);	// 10% Cape Mag Def
eQuestPrizes[23] = new Array   (
	[2000006,25, 80],	// Mana Elixir
    [2050004,50, 80],	// Divine Elixir
    [2022001,35, 80],	// Red Bean Soup
    [4020000,8, 80],	// Garnet Ore
    [4020001,8, 80],	// Amethyst Ore
    [4020002,8, 80],	// Aquamarine Ore
    [4020007,2, 80],	// Diamond Ore
    [2041023,1, 80]);	// 10% Cape LUK
eQuestPrizes[24] = new Array   (
	[2000006,35, 80],	// Mana Elixir
    [4020006,9, 80],	// Topaz Ore
    [4010008,4, 80],	// Black Crystal Ore
    [4020007,4, 80],	// Diamond Ore
    [2041008,1, 80]);   // 10% Cape HP
var requiredItem  = 0;
var lastSelection = 0;
var prizeItem     = 0;
var prizeQuantity = 0;
var itemSet;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {

    if (mode == 0 && (status == 1 || status == 3)) {
		cm.sendNext("需要的時候再來找我吧。");
		cm.dispose();
	return;
    } else if (mode == 0 && status == 3) {
		cm.dispose();
    } else if (mode == 0 && status == 4) {
		cm.sendNext("需要的時候再來找我吧。");
		cm.dispose();
	return;
    }
    if (mode == 1)
		status++;
    else
		status--;
    if (status == 0) { // first interaction with NPC
		cm.sendNext("嘿，得到了一點點時間？好了，我的工作就是在這裡收集物品和其他地方出售，但這些天怪物變得更加敵對的，所以它很難獲得良好的道具...你怎麼看？你想要做的一些業務和我在一起？");
    } else if (status == 1) {
		cm.sendYesNo("這筆交易很簡單，首先你得得到我需要的東西，當然我會給你不錯的酬勞。");
    } else if (status == 2) {
		var eQuestChoice = makeChoices(eQuestChoices);
		cm.sendSimple(eQuestChoice);
    } else if (status == 3){
		lastSelection = selection;
		requiredItem = eQuestChoices[selection];
		cm.sendYesNo("讓我看看，你想要交換你的 #b100個 #t" + requiredItem + "##k 來換取一些酬勞是吧？ 交易前確保你的道具欄位是否足夠吧！！");
    }else if (status == 4){
		cm.sendGetNumber("請問本次你想要交換幾組呢 ? \r\n每 #b#e1#k#n 組 = #b#e100#k#n 個經驗物 #r( 一次最多100組 )#k", 1, 1, 100);
	}else if (status == 5){
		次數 = selection;
		if(!cm.haveItem(requiredItem,100 * 次數)){
			cm.sendOk("嗯... 你確定你有 #b"+ 100 * 次數+" 個 #t" + requiredItem + "##k ? 如果有請定你道具攔是不是滿了....");
			cm.dispose();
			return;
		}
		var str ="\r\n";
		var 獲得道具 = "";
		var prizeCounter = 0; // 計數器，用於每3個獎品進行一次換行
		str += "感謝你的  #b"+ 100 * 次數+" 個 #t"+requiredItem+"##k, 以下是我給你的獎勵\r\n\r\n";
		for (var i = 0; i < 次數; i++) {
			itemSet = (Math.floor(Math.random() * eQuestPrizes[lastSelection].length));
			reward = eQuestPrizes[lastSelection];
			var selectedPrize = selectPrize(reward);
			if(selectedPrize != null) {
				prizeItem = reward[itemSet][0];
				prizeQuantity = reward[itemSet][1];
			
				if(!cm.canHold(prizeItem)){
					cm.sendNext("你的道具攔似乎滿了，請清空一些不要的東西再來找我交易一次謝謝。");
					cm.dispose();
					return;
				}
				str += "#i" + prizeItem + ":# #b" + prizeQuantity + "#k 個  ";
				if (++prizeCounter % 3 == 0) {
					str += "\r\n"; // 每3個獎品後換行
				} else {
					str += ", "; // 否則添加逗號
				}
				cm.gainItem(requiredItem,-100);
				cm.gainExp(500);
				cm.gainItem(prizeItem, prizeQuantity);
			}
		}
		
		
		
		
		cm.sendOk(str + "\r\n\r\n" + "給你的 . 你怎麼看？？ 你是否喜歡我的獎勵呢？？ \r\n如果喜歡歡迎下次再來找我交易，我會在這裡等著你的！！");
		cm.dispose();
			
	}
}

function makeChoices(a){
    var result  = "好，首先你需要選擇，你手上有的道具，當然更多道具收穫更多。\r\n";
    for (var x = 0; x< a.length; x++){
	result += " #L" + x + "#【 #i" + a[x] + ":# 】  #t" + a[x] + "##l\r\n";
    }
    return result;
}

/**
 * 根據獎品的概率選擇獎品
 * @param {Array} prizes - 獎品數組，每個元素是一個包含[物品代碼, 給的數量, 中獎機率]的數組
 * @returns {Array|null} - 被選中的獎品數組[物品代碼, 給的數量]，如果沒有選中則返回null
 */
function selectPrize(prizes) {
    var totalProbability = 0;
    // 計算總概率
    for (var i = 0; i < prizes.length; i++) {
        totalProbability += prizes[i][2]; // 每個獎品的第三個元素是中獎機率
    }
    
    var randomPoint = Math.random() * totalProbability; // 產生一個隨機數點
    var currentPoint = 0;

    // 根據隨機數點選擇獎品
    for (var i = 0; i < prizes.length; i++) {
        currentPoint += prizes[i][2];
        if (randomPoint <= currentPoint) {
            return prizes[i]; // 返回選中的獎品
        }
    }

    return null; // 理論上不應該執行到這裡，除非概率設置有誤
}
