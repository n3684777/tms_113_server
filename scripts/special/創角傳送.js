var 黑色輪迴石碑 = "2450030";
var 萬能NPC書 = "2450012";
var 白金戒指 = "1112015";
var 白色藥水 = "2000002";
var 海星鏢 = "2070000";
var 箭矢 = "2060000";
var 弩箭矢 = "2061000";
var 特殊藥水 = "2000004";

function start()
{   
        cm.gainItem(黑色輪迴石碑,1);
        cm.gainItem(萬能NPC書,1);  
        cm.gainItem(白金戒指,1); 
        cm.gainItem(白色藥水,300);
        cm.gainItem(特殊藥水,300);
        cm.gainItem(海星鏢,1000);
        cm.gainItem(箭矢,1000);
        cm.gainItem(弩箭矢,1000);
    cm.dispose();
    
}