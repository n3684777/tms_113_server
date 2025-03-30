load('nashorn:mozilla_compat.js');

function start(){
   var sb = new java.lang.StringBuilder();
   sb.append("==================== 玩家指令集 ====================\r\n");
   sb.append("\r\n");
   sb.append("#b＠FM#k\r\n－ #r回到自由市場\r\n");
   sb.append("\r\n");
   sb.append("#b＠EA 或是 ＠解卡#k\r\n－ #r解除人物無法動作/進行 NPC 對話問題\r\n");
   sb.append("\r\n");
   sb.append("#b＠Mob 或是 ＠怪物#k\r\n－ #r查看當前地圖的怪物訊息\r\n");
   sb.append("\r\n");
   sb.append("#b＠ExpFix 或是 ＠經驗歸零 #k\r\n－ #r修復並歸零經驗值\r\n");
   sb.append("\r\n");
   sb.append("#b＠JK_HM 或是 ＠解除精靈商人 #k\r\n－ #r解決精靈商人卡住問題\r\n");
   sb.append("\r\n");
   sb.append("#b＠Save 或是 ＠儲存 #k\r\n－ #r儲存角色資訊\r\n");
   sb.append("\r\n");
   sb.append("#b＠TSMega 或是 ＠廣播 #k\r\n－ #r開啟/關閉廣播訊息\r\n");
   sb.append("\r\n");
   sb.append("#b＠賣東西 #k\r\n－ #r依照指令操作販賣道具\r\n");
   sb.append("\r\n");
   sb.append("#b＠cc #k\r\n－ #r使用寵物全圖吸物\r\n");
   sb.append("\r\n");
   sb.append("#b＠清除道具 [道具欄位名稱] [開始格數] [結束格數]#k\r\n");
   sb.append("#b＠Clear   [道具欄位名稱] [開始格數] [結束格數]#k\r\n");
   sb.append("－ #r清除背包指定欄位範圍之道具\r\n");
   sb.append("#b範例 ＠Clear 消耗 15 96 \r\n");
   sb.append("#b範例 ＠清除道具 消耗 15 96 \r\n");
   sb.append("說明 清除消耗欄位 15 到 96 格 的道具\r\n");
   sb.append("\r\n");
   cm.sendOk(sb.toString());
   cm.dispose();
   

}

