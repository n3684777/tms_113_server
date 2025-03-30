function start()
{
    cm.sendSimple ("領取基本獎勵唷並傳送出去唷?\r\n\r\n#r#L1#好!!\r\n#b#L2#稍後再傳送出去~");
}
  
function action(mode, type, selection)
{
        cm.dispose();
  
        switch(selection)
        {
            case 1:
                if (cm.haveItem(4031307, 1) == true)
                    {
                    cm.gainItem(4031307 ,-1);
                    cm.gainItem(2020020 ,100);
                    cm.sendOk("#b蛋糕不要吃太多~旅遊愉快~");
                    cm.dispose();
                    }
                    else
                    {
                    cm.sendOk("#b檢查一下背包有沒有藍色禮物盒哦");
                    cm.dispose();
                    }
            break;
            case 2:
                    {
                    cm.sendOk("旅行加油~有問題請找鮪魚");
                    cm.dispose();
                    }
        }
}