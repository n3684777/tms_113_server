function enter(pi) {
	if (pi.isQuestActive(1008)) {
		pi.ShowWZEffect("UI/tutorial.img/22");
		return true;
	} else if (pi.isQuestFinished(1020)) {
		pi.ShowWZEffect("UI/tutorial.img/27");
	}
}