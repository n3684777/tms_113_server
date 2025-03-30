
function enter(pi) {
   player = pi.getPlayer();
   if(player.GetWinGuild() == -2){
      player.dropMessage("公會領地尚未有公會進駐，無法進入。");
      return; 
   }
   if(player.getGuildId() == player.GetWinGuild()){
      pi.getPlayer().changeMap(525000001);
      return; 
   }else{
      player.dropMessage("您並非優勝公會，無法進入公會領地");
      return; 
   }
}