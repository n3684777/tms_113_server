﻿/*
重新改寫打教官腳本by:Kodan
 */

var msg = "";

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	var nextmap1 = cm.getMapFactory().getMap(108010201);
	var nextmap2 = cm.getMapFactory().getMap(108010301);
	var nextmap3 = cm.getMapFactory().getMap(108010101);
	var nextmap4 = cm.getMapFactory().getMap(108010401);
	var nextmap5 = cm.getMapFactory().getMap(108010501);
	var nextmap11 = cm.getMapFactory().getMap(108010200);
	var nextmap22 = cm.getMapFactory().getMap(108010300);
	var nextmap33 = cm.getMapFactory().getMap(108010100);
	var nextmap44 = cm.getMapFactory().getMap(108010400);
	var nextmap55 = cm.getMapFactory().getMap(108010500);
	if (cm.getPlayer().getLevel() >= 70) {
		if (cm.canHold(4031059)) {
			if (!(cm.haveItem(4031059))) {
				switch (cm.getPlayer().getMapId()) {
				case 100040106:
					if (cm.getJob() == 210 || cm.getJob() == 220 || cm.getJob() == 230) {
						if (nextmap11.playerCount() != 0 || nextmap1.playerCount() != 0) {
							check();
							return;
						}
						var em = cm.getEventManager("Threeturns_mage");
						if (em == null) {
							cm.sendOk("當前副本有問題，請聯絡管理員....");
							cm.dispose();
						} else {
							var prop = em.getProperty("state");
							if (prop.equals("0") || prop == null) {
								em.startInstance(cm.getPlayer(), cm.getMap());
								cm.dispose();
								return;
							} else {
								cm.sendOk("裡面已經有人在挑戰了...");
								cm.dispose();
							}
						}
						//nextmap1.killAllMonsters(true);
						//cm.warp(108010200, 0);
						//cm.spawnMobOnMap(9001001, 1, -276, -3, 108010201);
						cm.sendOk("法師3轉的試煉即將開始!!");
					} else {
						cm.sendOk("沒有達到標準0.0");
					}
					break;
				case 105070001:
					if (cm.getJob() == 110 || cm.getJob() == 120 || cm.getJob() == 130) {
						if (nextmap2.playerCount() != 0 && nextmap22.playerCount() != 0) {
							check();
							return;
						}
						var em = cm.getEventManager("Threeturns_swordsman");
						if (em == null) {
							cm.sendOk("當前副本有問題，請聯絡管理員....");
							cm.dispose();
						} else {
							var prop = em.getProperty("state");
							if (prop.equals("0") || prop == null) {
								em.startInstance(cm.getPlayer(), cm.getMap());
								cm.dispose();
								return;
							} else {
								cm.sendOk("裡面已經有人在挑戰了...");
								cm.dispose();
							}
						}
						//nextmap2.killAllMonsters(true);
						//cm.warp(108010300, 0);
						//cm.spawnMobOnMap(9001000, 1, -276, -3, 108010301);
						cm.sendOk("劍士3轉的試煉即將開始!!");
					} else {
						cm.sendOk("沒有達到標準0.0");
					}
					break;
				case 105040305:
					if (cm.getJob() == 310 || cm.getJob() == 320) {
						if (nextmap3.playerCount() != 0 || nextmap33.playerCount() != 0) {
							check();
							return;
						}
						var em = cm.getEventManager("Threeturns_Archer");
						if (em == null) {
							cm.sendOk("當前副本有問題，請聯絡管理員....");
							cm.dispose();
						} else {
							var prop = em.getProperty("state");
							if (prop.equals("0") || prop == null) {
								em.startInstance(cm.getPlayer(), cm.getMap());
								cm.dispose();
								return;
							} else {
								cm.sendOk("裡面已經有人在挑戰了...");
								cm.dispose();
							}
						}
						//nextmap3.killAllMonsters(true);
						//cm.warp(108010100, 0);
						//cm.spawnMobOnMap(9001002, 1, -276, -3, 108010101);
						cm.sendOk("弓箭手3轉的試煉即將開始!!");
					} else {
						cm.sendOk("沒有達到標準0.0");
					}
					break;
				case 107000402:
					if (cm.getJob() == 410 || cm.getJob() == 420) {
						if (nextmap4.playerCount() != 0 || nextmap44.playerCount() != 0) {
							check();
							return;
						}
						var em = cm.getEventManager("Threeturns_thief");
						if (em == null) {
							cm.sendOk("當前副本有問題，請聯絡管理員....");
							cm.dispose();
						} else {
							var prop = em.getProperty("state");
							if (prop.equals("0") || prop == null) {
								em.startInstance(cm.getPlayer(), cm.getMap());
								cm.dispose();
								return;
							} else {
								cm.sendOk("裡面已經有人在挑戰了...");
								cm.dispose();
							}
						}
						//nextmap4.killAllMonsters(true);
						//cm.warp(108010400, 0);
						//cm.spawnMobOnMap(9001003, 1, -276, -3, 108010401);
						cm.sendOk("盜賊3轉的試煉即將開始!!");
					} else {
						cm.sendOk("沒有達到標準0.0");
					}
					break;
				case 105070200:
					if (cm.getJob() == 510 || cm.getJob() == 520) {
						if (nextmap5.playerCount() != 0 || nextmap55.playerCount() != 0) {
							check();
							return;
						}
						var em = cm.getEventManager("Threeturns_pirate");
						if (em == null) {
							cm.sendOk("當前副本有問題，請聯絡管理員....");
							cm.dispose();
						} else {
							var prop = em.getProperty("state");
							if (prop.equals("0") || prop == null) {
								em.startInstance(cm.getPlayer(), cm.getMap());
								cm.dispose();
								return;
							} else {
								cm.sendOk("裡面已經有人在挑戰了...");
								cm.dispose();
							}
						}
						//nextmap5.killAllMonsters(true);
						//cm.warp(108010500, 0);
						//cm.spawnMobOnMap(9001004, 1, -276, -3, 108010501);
						cm.sendOk("海盜3轉的試煉即將開始!!");
					} else {
						cm.sendOk("沒有達到標準0.0");
					}
					break;
				}
			} else {
				cm.sendOk("你貌似已經有了#t4031059#。");
			}
		} else {
			cm.sendOk("請確認是否有足夠的空間。");
		}
	} else {
		cm.sendOk("等級好像不正確。");
	}
	cm.dispose();
}

function check() {
	msg = "裡面有人在挑戰。";
	cm.sendNext(msg);
	cm.dispose();
}
