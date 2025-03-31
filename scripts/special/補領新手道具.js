var 輪迴碑石 = "2450002";
var 萬能NPC書 = "2450012";
var 白金戒指 = "1112015";
function start()
{   
    if(!(cm.haveItem(輪迴碑石,1)))
        cm.gainItem(輪迴碑石,1);
    
    if(!(cm.haveItem(萬能NPC書,1)))
        cm.gainItem(萬能NPC書,1);  

    if(!(cm.haveItem(白金戒指,1)))  
        cm.gainItem(白金戒指,1); 

    cm.sendSimple("已領取新手獎勵唷，請至物品欄查看~");
    cm.dispose();
    
}