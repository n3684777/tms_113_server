load('nashorn:mozilla_compat.js');
importPackage(Packages.client.inventory); //ModifyInventory.
importPackage(Packages.tools); //MaplePacketCreator.



var Scroll_Effect;
var 祝福卷軸   = 2340000;
var 最小能力浮動值 = 0;
var 最小物攻浮動值 = 0;
var 最小魔攻浮動值 = 0;
var 最小物防浮動值 = 0;
var 最小魔防浮動值 = 0;

var 最大能力浮動值 = 10;
var 最大物攻浮動值 = 10;
var 最大魔攻浮動值 = 10;
var 最大物防浮動值 = 10;
var 最大魔防浮動值 = 10;
var 成功率 = 60;
var 是否成功 = false;

function start(legendarySpirit) {

    if(equip.getUpgradeSlots() <= 0){
        player.dropMessage("此裝備已經不能再使用卷軸囉");
        cm.dispose(); return;
    }

    //=====================================================

    var randomStr  = Randomizer(最小能力浮動值, 最大能力浮動值);//力
    var randomDex  = Randomizer(最小能力浮動值, 最大能力浮動值);//敏
    var randomInt  = Randomizer(最小能力浮動值, 最大能力浮動值);//智
    var randomLuk  = Randomizer(最小能力浮動值, 最大能力浮動值);//幸
    var randomWatk = Randomizer(最小物攻浮動值, 最大物攻浮動值);//攻
    var randomMatk = Randomizer(最小魔攻浮動值, 最大魔攻浮動值);//魔
    var randomWdef = Randomizer(最小物防浮動值, 最大物防浮動值);//物防
    var randomMdef = Randomizer(最小魔防浮動值, 最大魔防浮動值);//魔防
    var 總機率 = Randomizer(0, 100);
    if(總機率 <= 成功率){
        if (equip.getStr() > 0) {
            equip.setStr(equip.getStr() + (randomStr  > 0 ? randomStr : randomStr));
        }
        if (equip.getDex() > 0) {
            equip.setDex(equip.getDex() + (randomDex  > 0 ? randomDex : randomDex));
        }
        if (equip.getInt() > 0) {
            equip.setInt(equip.getInt() + (randomInt  > 0 ? randomInt : randomInt));
        }
        if (equip.getLuk() > 0) {
            equip.setLuk(equip.getLuk() + (randomLuk  > 0 ? randomLuk : randomLuk));
        }
        if (equip.getWatk() > 0) {
            equip.setWatk(equip.getWatk() + (randomWatk > 0 ? randomWatk : randomWatk));
        }
        if (equip.getMatk() > 0) {
            equip.setMatk(equip.getMatk() + (randomMatk > 0 ? randomMatk : randomMatk));
        }
        if (equip.getWdef() > 0) {
            equip.setWdef(equip.getWdef() + (randomWdef > 0 ? randomWdef : randomWdef));
        }
        if (equip.getMdef() > 0) {
            equip.setMdef(equip.getMdef() + (randomMdef > 0 ? randomMdef : randomMdef));
        }
        /*
        equip.setStr(equip.getStr() + (randomStr  > 0 ? randomStr : randomStr));
        equip.setDex(equip.getDex() + (randomDex  > 0 ? randomDex : randomDex));
        equip.setInt(equip.getInt() + (randomInt  > 0 ? randomInt : randomInt));
        equip.setLuk(equip.getLuk() + (randomLuk  > 0 ? randomLuk : randomLuk));
        equip.setWatk(equip.getWatk() + (randomWatk > 0 ? randomWatk : randomWatk));
        equip.setMatk(equip.getMatk() + (randomMatk > 0 ? randomMatk : randomMatk));
        equip.setWdef(equip.getWdef() + (randomWdef > 0 ? randomWdef : randomWdef));
        equip.setMdef(equip.getMdef() + (randomMdef > 0 ? randomMdef : randomMdef));
        */
        //equip.setUpgradeSlots(equip.getUpgradeSlots()-1);
        equip.setLevel((equip.getLevel() + 1));
        Scroll_Effect = IEquip.ScrollResult.SUCCESS;
        是否成功 = true;
        var string = "";
        if (equip.getStr() > 0) {
            string += (randomStr  > 0  ? "力量 + " + randomStr  +" " : "");
        }
        if (equip.getDex() > 0) {
            string += (randomDex  > 0  ? "敏捷 + " + randomDex  +" " : "");
        }
        if (equip.getInt() > 0) {
            string += (randomInt  > 0  ? "智力 + " + randomInt  +" " : "");
        }
        if (equip.getLuk() > 0) {
            string += (randomLuk  > 0  ? "幸運 + " + randomLuk  +" " : "");
        }
        if (equip.getWatk() > 0) {
            string += (randomWatk > 0  ? "物攻 + " + randomWatk +" " : "");
        }
        if (equip.getMatk() > 0) {
            string += (randomMatk > 0  ? "魔攻 + " + randomMatk +" " : "");
        }
        if (equip.getWdef() > 0) {
            string += (randomWdef > 0  ? "物防 + " + randomWdef +" " : "");
        }
        if (equip.getMdef() > 0) {
            string += (randomMdef > 0  ? "魔防 + " + randomMdef +" " : "");
        }
        /*
        string += (randomStr  > 0  ? "力量 + " + randomStr  +" " : "");
        string += (randomDex  > 0  ? "敏捷 + " + randomDex  +" " : "");
        string += (randomInt  > 0  ? "智力 + " + randomInt  +" " : "");
        string += (randomLuk  > 0  ? "幸運 + " + randomLuk  +" " : "");
        string += (randomWatk > 0  ? "物攻 + " + randomWatk +" " : "");
        string += (randomMatk > 0  ? "魔攻 + " + randomMatk +" " : "");
        string += (randomWdef > 0  ? "物防 + " + randomWdef +" " : "");
        string += (randomMdef > 0  ? "魔防 + " + randomMdef +" " : "");
        */
        //player.dropMessage(string);
        string = null;
    } else {
        Scroll_Effect = IEquip.ScrollResult.FAIL;
    }
    //祝福卷軸判斷開始，請特別注意扣捲次數是否有多扣。

    //成功會刪除祝福卷軸
    if (whiteScroll) {
        cm.gainItem(祝福卷軸, -1);
        player.dropMessage("祝福卷軸的保護讓裝備的使用卷軸次數不會減少");
        if (是否成功) {
            equip.setUpgradeSlots(equip.getUpgradeSlots() - 1);
        }
    } else {
        equip.setUpgradeSlots(equip.getUpgradeSlots() - 1);
    }
    /*成功不會刪除祝福卷軸
    if (whiteScroll && !是否成功) {
        cm.gainItem(祝福卷軸, -1);
        player.dropMessage("祝福卷軸的保護讓裝備的使用卷軸次數不會減少");
    }if(!whiteScroll){
        equip.setUpgradeSlots(equip.getUpgradeSlots()-1);
    }if (whiteScroll && 是否成功){
        equip.setUpgradeSlots(equip.getUpgradeSlots()-1);
    }
    */
    //祝福卷軸判斷結束


    //----------回收道具----------//
    cm.gainItem(itemId, -1);

    //--------裝備能力更新--------//
    var mods = new java.util.ArrayList();
    mods.add(new ModifyInventory(ModifyInventory.Types.REMOVE, equip));
    mods.add(new ModifyInventory(ModifyInventory.Types.ADD, equip));
    player.getClient().sendPacket(MaplePacketCreator.modifyInventory(true, mods));
    //------卷軸成功失敗特效------//
    player.getMap().broadcastMessage(player, MaplePacketCreator.getScrollEffect(player.getId(), Scroll_Effect, legendarySpirit), true);

    cm.dispose();
}


function Randomizer(rangA, rangB) {
   return Math.floor((Math.random() * (rangB - rangA + 1)) + rangA);
}