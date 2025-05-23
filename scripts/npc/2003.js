﻿/* Author: Xterminator
	NPC Name: 		Robin
	Map(s): 		Maple Road : Snail Hunting Ground I (40000)
	Description: 		Beginner Helper
*/
var status;
var sel;

function start() {
    status = -1;
    sel = -1;
    cm.sendSimple("我可以告訴你些冒險者的技巧唷!!\r\n#L0##b要怎麼移動？#l\r\n#L1#我要如何擊退怪物？#l\r\n#L2#我要怎麼撿起物品？#l\r\n#L3#當我死掉會發生什麼事情？#l\r\n#L4#我何時能選擇職業？#l\r\n#L5#告訴我有關這個島嶼！#l\r\n#L6#我要怎麼做才能成為戰士？#l\r\n#L7#我要怎麼做才能成為弓箭手？#l\r\n#L8#我要怎麼做才能成為魔法師？#l\r\n#L9#我要怎麼做才能成為盜賊？#l\r\n#L10#怎麼提升能力值？(S)#l\r\n#L11#我要怎麼確認我撿起來的物品呢？#l\r\n#L12#我要怎麼裝備物品？#l\r\n#L13#我要怎麼確認我身上已經裝備的物品？#l\r\n#L14#什麼是技能？(K)#l\r\n#L15#我要怎麼前往維多利亞島？#l\r\n#L16#楓幣是什麼？#l#k");
}

function action(mode, type, selection) {
    status++;
    if (mode != 1) {
        if(mode == 0 && type != 4)
            status -= 2;
        else{
            cm.dispose();
            return;
        }
    }
    if (status == 0) {
        if(sel == -1)
            sel = selection;
        if (sel == 0)
            cm.sendNext("好，我來教你如何移動。 使用 #方向左鍵#k 就能在平台上移動了，按下 #bAlt#k 可以進行跳躍。 有些鞋子能提升你的速度以及跳躍力。");
        else if (sel == 1)
            cm.sendNext("好，擊退怪物很簡單，每個怪物有自己的血條，你可以使用武器將他們殺死。當然，如果怪物等級越高，你越難擊退它們。");
        else if (sel == 2)
            cm.sendNext("接下來告訴你如何剪取物品，當你擊退怪物時，會有機會掉落寶物以及楓幣，當地上有物品時，按下#bZ#k 或是 數字鍵盤上的 #b0 來撿取物品。");
        else if (sel == 3)
            cm.sendNext("你好奇地找出當你死會發生什麼嗎？ 當你的HP歸零時，你會變成幽靈。 而地上會出現一塊墓碑，而你無法移動，但是你還是可以聊天。");
        else if (sel == 4)
            cm.sendNext("什麼時候你可以選擇你的職業？哈哈哈，別緊張，我的朋友啊～每個職業都有等級的限制。通常在8等和10等之間會進行。");
        else if (sel == 5)
            cm.sendNext("你想要知道這個島嶼嗎？ 這裏是楓之島，這座島嶼浮在天空上。由於浮在天空上，強大的怪物們無法靠近。這裏非常和平，非常適合新手。");
        else if (sel == 6)
            cm.sendNext("你想成為#b戰士#k？ 摁...那我建議你到維多利亞港，尋找一個叫做#r勇士之村#k的戰士村莊以及去找尋#bDances with Balrog#k。 他會教你如何成為一個戰士。 喔對了，有件很重要的事，你必須達到等級10才能成為戰士！");
        else if (sel == 7)
            cm.sendNext("你想成為#b弓箭手#k 嗎？ 你需要去維多利亞島進行工作晉升。 前往一個名為#rHenesys#k 的弓箭手小鎮，與美麗的#bAthena Pierce#k 交談，了解成為弓箭手的來龍去脈。 哦，還有一件非常重要的事情：你需要至少達到 10 級才能成為弓箭手！！");
        else if (sel == 8)
            cm.sendNext("你想成為#bMagician#k嗎？ 為此，您必須前往維多利亞島。 前往一個名為#rEllinia#k 的魔術師小鎮，最頂端是魔法圖書館。 在裡面，你會遇到所有巫師的領袖，#bGrendel the真正的老#k，他會教你成為巫師的一切。");
        else if (sel == 9)
            cm.sendNext("你想成為#bThief#k嗎？ 為了成為其中一員，您必須前往維多利亞島。 前往一個名為#rKerning City#k 的小偷小鎮，在小鎮的陰暗面，您會看到一個小偷的藏身之處。 在那裡，你會遇到#bDark Lord#k，他會教你做小偷的一切。 哦，還有一件非常重要的事情：你需要至少達到 10 級才能成為小偷！！");
        else if (sel == 10)
            cm.sendNext("您想知道如何提高角色的能力數據嗎？ 首先按#bS#k 查看技能窗口。 每次升級，您將獲得 5 個能力點，即 AP。 將這些 AP 分配給您選擇的能力。 就是這麼簡單。");
        else if (sel == 11)
            cm.sendNext("你想知道如何檢查你撿到的物品，對吧？ 當你擊敗怪物時，它會在地上掉落一個物品，你可以按#bZ#k來撿起該物品。 然後該項目將存儲在您的項目庫存中，您只需按#bI#k 即可查看它。");
        else if (sel == 12)
            cm.sendNext("你想知道如何穿這些物品，對吧？ 按#bI#k 查看您的物品庫存。 將鼠標光標放在一個項目上並雙擊它以將其放在您的角色上。 如果您發現自己無法佩戴該物品，則很可能您的角色不符合等級和屬性要求。 您也可以通過打開設備庫存 (#bE#k) 並將該項目拖入其中來放置該項目。 要取下物品，請雙擊設備庫存中的物品。");
        else if (sel == 13)
            cm.sendNext("你想檢查裝備的物品，對吧？ 按#bE#k 打開裝備清單，您將在其中準確地看到您現在穿著的衣服。 要取下一個項目，請雙擊該項目。 然後該項目將被發送到項目庫存。");
        else if (sel == 14)
            cm.sendNext("獲得工作後獲得的特殊“能力”稱為技能。 您將獲得專門針對該工作的技能。 你還沒有到那個階段，所以你還沒有任何技能，但記住要檢查你的技能，按#bK#k打開技能書。 它會幫助你在路上。");
        else if (sel == 15)
            cm.sendNext("怎麼去維多利亞島？ 在這個島的東邊有一個港口，叫做紹斯佩里。 在那裡，你會發現一艘在空中飛翔的船。 船前站著船長。 問他這件事。");
        else if (sel == 16)
            cm.sendNext("它是 MapleStory 中使用的貨幣。 您可以通過 mesos 購買物品。 要獲得它們，您可以擊敗怪物、在商店出售物品或完成任務......");
    } else if (status == 1) {
        if (sel == 0)
            cm.sendNextPrev("為了攻擊怪物，您需要配備武器。 裝備後，按#bCtrl#k 使用武器。 只要時機合適，您就可以輕鬆擊敗怪物。");
        else if (sel == 1)
            cm.sendNextPrev("升職後，您將獲得不同類型的技能，您可以將它們分配給熱鍵以便更輕鬆地訪問。 如果是攻擊技能，則不需要按Ctrl進行攻擊，只需按分配為HotKey的按鈕即可。");
        else if (sel == 2)
            cm.sendNextPrev("但請記住，如果您的物品庫存已滿，您將無法獲得更多。 所以如果你有不需要的東西，就把它賣掉，這樣你就可以用它做點什麼了。 一旦您進行工作晉升，庫存可能會擴大。");
        else if (sel == 3)  
            cm.sendNextPrev("如果你只是一個初學者，你死後沒有什麼可失去的。 然而，一旦你有了工作，情況就不同了。 當你死時你會失去一部分經驗，所以一定要不惜一切代價避免危險和死亡。");
        else if (sel == 4) 
            cm.sendNextPrev("不過，等級並不是決定進步的唯一因素。 您還需要根據職業提高特定能力的水平。 例如，要成為一名戰士，你的STR必須超過35，等等，你知道我在說什麼嗎？ 確保你提升對你的工作有直接影響的能力。");
        else if (sel == 5)
            cm.sendNextPrev("但是，如果你想成為一名強大的球員，最好不要考慮在這里呆太久。 反正你也找不到工作。 這個島的下面是一個巨大的島嶼，叫做維多利亞島。 那個地方比這里大得多，甚至都不好笑。");
        else if (sel == 8)
            cm.sendNextPrev("哦順便說一句，與其他職業不同，要成為一名魔法師，你只需要達到 8 級即可。提早晉升的好處還在於，要成為一名真正的強大法師需要付出很多努力。 在選擇您的道路之前，請仔細考慮。");
        else if (sel == 10)
            cm.sendNextPrev("將鼠標光標放在所有能力的頂部以獲得簡要說明。 例如，STR 代表戰士，DEX 代表弓箭手，INT 代表魔術師，LUK 代表盜賊。 這本身並不是你需要知道的一切，所以你需要仔細思考如何通過分配分數來強調你角色的優勢。");
        else if (sel == 15)
            cm.sendNextPrev("哦耶！ 走之前的最後一條信息。 如果您不確定自己在哪裡，請始終按#bW#k。 世界地圖將彈出顯示您所在位置的定位器。 您不必擔心會因此而迷路。");
        else
            start();
    }else
        start();
}