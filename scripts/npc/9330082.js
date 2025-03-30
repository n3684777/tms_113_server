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
var amount = Math.floor(Math.random()*40);

var status = 0;

function start() {
cm.sendSimple ("請蒐集西門町所有怪物掉落物每種各(一千個)即可兌換#i3010002#蒐集道具#i4000201##i4000202##i4000199##i4000198##i4000200#"+
			   "\r\n #L0#我要兌換綠色設計師椅 #i3010002#");
}



function action(mode, type, selection) {
		cm.dispose();

	switch(selection){ 
		case 0:
			if (cm.haveItem(4000201 ,1000) == true && cm.haveItem(4000202 ,1000)  == true && cm.haveItem(4000199 ,1000)  == true && cm.haveItem(4000198 ,1000)  == true && cm.haveItem(4000200 ,1000)  == true ) {
			cm.gainItem(4000201 ,-1000);
	cm.gainItem(4000202 ,-1000);
	cm.gainItem(4000199 ,-1000);
	cm.gainItem(4000198 ,-1000);
	cm.gainItem(4000200 ,-1000);
			cm.gainItem(3010002);
			cm.sendOk("給你綠色設計師椅可不要弄丟了#i3010002#");
		        cm.dispose();
			}
			else{
		        cm.sendOk("#r你還沒收集完吧!!");
		        cm.dispose();      
		
			}
			
		}
		
	}
	
				
		
	

