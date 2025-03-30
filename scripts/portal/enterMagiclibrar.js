/*
 * Ellinia
 * Enter Magician magic library
 * TODO : mapid 910110000 for cygnus quest
 */
function enter(pi) {
	if(pi.getQuestStatus(20718) == 1){
		pi.playPortalSE();
		pi.warp(910110000, 0);
	}else{
		
    pi.playPortalSE();
    pi.warp(101000003, 8);
	}
	
}