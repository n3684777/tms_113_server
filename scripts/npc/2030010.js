/* Amon
 * Last Mission : Zakum's Altar (280030000)
 */

function start() {
    cm.sendYesNo("確定要離開這裡嗎 ??");
}

function action(mode, type, selection) {
    if (mode == 1) {
	cm.warp(211042400);
    }
    cm.dispose();
}