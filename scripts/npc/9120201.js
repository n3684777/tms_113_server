/*
	鈴木 黑道長老
*/

var 地圖_武器庫   = 801040004;
var 地圖_基地內部 = 801040100;

function start() {
   cm.dispose();
   cm.openNpc(cm.getNpc(), "_BOSS選單");
}

/*
function start() {
   if (cm.getPlayerCount(801040100) == 0) {
      cm.resetMap(801040100);
   }
   cm.warp(801040100);
   cm.dispose();
}
*/