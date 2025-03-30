/*
	This file is part of the OdinMS Maple Story Server
    Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc> 
                       Matthias Butz <matze@odinms.de>
                       Jan Christian Meyer <vimes@odinms.de>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License version 3
    as published by the Free Software Foundation. You may not use, modify
    or distribute this program under any other version of the
    GNU Affero General Public License.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

/**
 Dolphin in Herb Town

**/
//
var 蒐集物 = 4031428;
var 蒐集物數量 = 400;
var 兌換物 = 4031312;
var 兌換物數量 = 1;

//舊兌換物
var 舊蒐集物 = 4031428;
var 舊蒐集物數量 = 400;
var 舊兌換物 = 4031875;
var 舊兌換物數量 = 1;

//獎品一
var 獎品一 = 2040331;
var 獎品一數量 = 1;
var 獎品一兌換物數量 = 3;

//獎品二
var 獎品二 = 2040534;
var 獎品二數量 = 1;
var 獎品二兌換物數量 = 3;

//獎品三
var 獎品三 = 2040702;
var 獎品三數量 = 1;
var 獎品三兌換物數量 = 3;

//獎品四
var 獎品四 = 5490000;
var 獎品四數量 = 2;
var 獎品四兌換物數量 = 5;

//獎品五
var 獎品五 = 1702224;
var 獎品五數量 = 1;
var 獎品五兌換物數量 = 15;

//獎品六
var 獎品六 = 3010139;
var 獎品六數量 = 1;
var 獎品六兌換物數量 = 7;

//獎品七
var 獎品七 = 1902032;
var 獎品七數量 = 1;
var 獎品七兌換物數量 = 20;

//獎品八
var 獎品八 = 1912025;
var 獎品八數量 = 1;
var 獎品八兌換物數量 = 20;


//獎品九
var 獎品九 = 1002812;
var 獎品九數量 = 1;
var 獎品九兌換物數量 = 30;



var status = 0;

function start() {
	cm.sendSimple ("【固定每月兌換】#k\r\  可不可以幫我蒐集#r#t" + 蒐集物 + " "+
				   "##k就在怪物身上，請去搜集他們，我會給你好獎勵。"+
				   "#k\r\  請擊殺野怪蒐集#i" + 蒐集物 + " #並兌換成#i" + 兌換物 + " ##k\r\n#k"+
				   "#L0##d#i" + 蒐集物 + " # "+ 蒐集物數量 +" 個  ＝  #i" + 兌換物 + " #  "+ 兌換物數量 +" 個  \r\n#k"+
				   "\#L10##i" + 舊兌換物 + " #  " + 舊兌換物數量 + " 個  ＝  #i" + 兌換物 + " # " + 兌換物數量 + " 個\r\n#k"+
				   "\#L1# #i" + 舊蒐集物 + " # " + 舊蒐集物數量 + " 個 ＝  #i" + 兌換物 + " # " + 兌換物數量 + " 個    \r\n#k"+
				   "\#L2##i" + 兌換物 + " #" + 獎品一兌換物數量 + " 個  ＝  #i" + 獎品一 + " #  #r#t" + 獎品一 + "##k" + 獎品一數量 + " 個    \r\n#k"+
				   "\#L3##i" + 兌換物 + " #" + 獎品二兌換物數量 + " 個  ＝  #i" + 獎品二 + " #  #r#t" + 獎品二 + "##k" + 獎品二數量 + " 個    \r\n#k"+
				   "\#L4##i" + 兌換物 + " #" + 獎品三兌換物數量 + " 個  ＝  #i" + 獎品三 + " #  #r#t" + 獎品三 + "##k" + 獎品三數量 + " 個    \r\n#k"+
				   "\#L5##i" + 兌換物 + " #" + 獎品四兌換物數量 + " 個  ＝  #i" + 獎品四 + " #  #r#t" + 獎品四 + "##k" + 獎品四數量 + " 個    \r\n#k"+
				   "\#L6##i" + 兌換物 + " #" + 獎品五兌換物數量 + " 個  ＝  #i" + 獎品五 + " #  #r#t" + 獎品五 + "##k" + 獎品五數量 + " 個    \r\n#k"+
				   "\#L7##i" + 兌換物 + " #" + 獎品六兌換物數量 + " 個  ＝  #i" + 獎品六 + " #  #r#t" + 獎品六 + "##k" + 獎品六數量 + " 個    \r\n#k"+
				   "\#L8##i" + 兌換物 + " #" + 獎品七兌換物數量 + " 個  ＝  #i" + 獎品七 + " #  #r#t" + 獎品七 + "##k" + 獎品七數量 + " 個    \r\n#k"+
				   "\#L9##i" + 兌換物 + " #" + 獎品八兌換物數量 + " 個  ＝  #i" + 獎品八 + " #  #r#t" + 獎品八 + "##k" + 獎品八數量 + " 個    \r\n#k"+
				   "\#L11##i" + 兌換物 + " #" + 獎品九兌換物數量 + " 個  ＝  #i" + 獎品九 + " #  #r#t" + 獎品九 + "##k" + 獎品九數量 + " 個    ")}

function action(mode, type, selection) {
		cm.dispose();

	switch (selection){ 
		case 0:
			if (cm.haveItem(蒐集物 ,蒐集物數量) == true ) {
			cm.gainItem(蒐集物 ,-蒐集物數量);
			cm.gainItem(兌換物,兌換物數量); 
			cm.sendOk("做得很好，完成#i" + 兌換物 + "#" + 兌換物數量 + "個");
		        cm.dispose();
			}else{
		        cm.sendOk("您準備的道具數量不足，請在確認。");
		        cm.dispose();
			}
		break;
		
				case 10:
			if (cm.haveItem(舊兌換物 ,舊兌換物數量) == true ) {
			cm.gainItem(舊兌換物 ,-舊兌換物數量);
			cm.gainItem(兌換物,兌換物數量); 
			cm.sendOk("做得很好，完成#i" + 兌換物 + "#" + 兌換物數量 + "個");
		        cm.dispose();
			}else{
		        cm.sendOk("您準備的道具數量不足，請在確認。");
		        cm.dispose();
			}
		break;
		
		case 1:
			if (cm.haveItem(舊蒐集物 ,舊蒐集物數量) == true ) {
			cm.gainItem(舊蒐集物 ,-蒐集物數量);
			cm.gainItem(兌換物,兌換物數量); 
			cm.sendOk("做得很好，完成#i" + 兌換物 + "#" + 兌換物數量 + "個");
		        cm.dispose();
			}else{
		        cm.sendOk("您準備的道具數量不足，請在確認。");
		        cm.dispose();
			}
		break;
 //兌換獎品一
        case 2:
			if (cm.haveItem(兌換物 ,獎品一兌換物數量) == true ) {
			cm.gainItem(兌換物 ,-獎品一兌換物數量);
			cm.gainItem(獎品一 ,獎品一數量); 
			cm.sendOk("做得很好，兌換#i" + 獎品一 + "#" + 獎品一數量 + "個");
		        cm.dispose();
			}else{
		        cm.sendOk("您準備的道具數量不足，請在確認。");
		        cm.dispose();
			}
		break;
		//兌換獎品二

  case 3:
			if (cm.haveItem(兌換物 ,獎品二兌換物數量) == true ) {
			cm.gainItem(兌換物 ,-獎品二兌換物數量);
			cm.gainItem(獎品二 ,獎品一數量); 
			cm.sendOk("做得很好，兌換#i" + 獎品二 + "#" + 獎品二數量 + "個");
		        cm.dispose();
			}else{
		        cm.sendOk("您準備的道具數量不足，請在確認。");
		        cm.dispose();
			}
		break;
		//兌換獎品三

 case 4:
			if (cm.haveItem(兌換物 ,獎品三兌換物數量) == true ) {
			cm.gainItem(兌換物 ,-獎品三兌換物數量);
			cm.gainItem(獎品三 ,獎品一數量); 
			cm.sendOk("做得很好，兌換#i" + 獎品三 + "#" + 獎品三數量 + "個");
		        cm.dispose();
			}else{
		        cm.sendOk("您準備的道具數量不足，請在確認。");
		        cm.dispose();
			}
		break;
		//兌換獎品四
				
		 case 5:
			if (cm.haveItem(兌換物 ,獎品四兌換物數量) == true ) {
			cm.gainItem(兌換物 ,-獎品四兌換物數量);
			cm.gainItem(獎品四 ,獎品四數量); 
			cm.sendOk("做得很好，兌換#i" + 獎品四 + "#" + 獎品四數量 + "個");
		        cm.dispose();
			}else{
		        cm.sendOk("您準備的道具數量不足，請在確認。");
		        cm.dispose();
			}
		break;
		//兌換獎品五
		
		 case 6:
			if (cm.haveItem(兌換物 ,獎品五兌換物數量) == true ) {
			cm.gainItem(兌換物 ,-獎品五兌換物數量);
			cm.gainItem(獎品五 ,獎品五數量); 
			cm.sendOk("做得很好，兌換#i" + 獎品五 + "#" + 獎品五數量 + "個");
		        cm.dispose();
			}else{
		        cm.sendOk("您準備的道具數量不足，請在確認。");
		        cm.dispose();
			}
		break;
		//兌換獎品六
		
		 case 7:
			if (cm.haveItem(兌換物 ,獎品六兌換物數量) == true ) {
			cm.gainItem(兌換物 ,-獎品六兌換物數量);
			cm.gainItem(獎品六 ,獎品六數量); 
			cm.sendOk("做得很好，兌換#i" + 獎品六 + "#" + 獎品六數量 + "個");
		        cm.dispose();
			}else{
		        cm.sendOk("您準備的道具數量不足，請在確認。");
		        cm.dispose();
			}
		break;
		//兌換獎品七
		
		 case 8:
			if (cm.haveItem(兌換物 ,獎品七兌換物數量) == true ) {
			cm.gainItem(兌換物 ,-獎品七兌換物數量);
			cm.gainItem(獎品七 ,獎品七數量); 
			cm.sendOk("做得很好，兌換#i" + 獎品七 + "#" + 獎品七數量 + "個");
		        cm.dispose();
			}else{
		        cm.sendOk("您準備的道具數量不足，請在確認。");
		        cm.dispose();
			}
		break;
		//兌換獎品八
		
		 case 9:
			if (cm.haveItem(兌換物 ,獎品八兌換物數量) == true ) {
			cm.gainItem(兌換物 ,-獎品八兌換物數量);
			cm.gainItem(獎品八 ,獎品八數量); 
			cm.sendOk("做得很好，兌換#i" + 獎品八 + "#" + 獎品八數量 + "個");
		        cm.dispose();
			}else{
		        cm.sendOk("您準備的道具數量不足，請在確認。");
		        cm.dispose();
			}
		break;
		 //兌換獎品九
				 
		 case 11:
			if (cm.haveItem(兌換物 ,獎品九兌換物數量) == true ) {
			cm.gainItem(兌換物 ,-獎品九兌換物數量);
			cm.gainItem(獎品九 ,獎品九數量); 
			cm.sendOk("做得很好，兌換#i" + 獎品九 + "#" + 獎品九數量 + "個");
		        cm.dispose();
			}else{
		        cm.sendOk("您準備的道具數量不足，請在確認。");
		        cm.dispose();
			}
		break;		 


			}
		}