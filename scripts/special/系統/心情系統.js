var status = -1;
var ok = -1;

importPackage(java.sql);
importPackage(java.lang);
importPackage(Packages.database);

var time = new Date();
var day = time.getDay();

switch (day) {
case 0:
    var d = "星期日";
    break;
case 1:
    var d = "星期一";
    break;
case 2:
    var d = "星期二";
    break;
case 3:
    var d = "星期三";
    break;
case 4:
    var d = "星期四";
    break;
case 5:
    var d = "星期五";
    break;
case 6:
    var d = "星期六";
    break;
default:
}
var year = time.getFullYear();
var month = time.getMonth() + 1;
var date = time.getDate();
var hour = time.getHours();
var min = time.getMinutes();
var sec = time.getSeconds();

if (hour > 12) {
    hour -= 12;
    var apm = "下午";
} else {
    var apm = "上午";
}
if (hour < 10) {
    hour = "0" + hour;
}
if (min < 10) {
    min = "0" + min;
}
if (sec < 10) {
    sec = "0" + sec;
}

var message = DatabaseConnection.getConnection().prepareStatement("SELECT * FROM memo ORDER BY id DESC LIMIT 5").executeQuery();
var insert = DatabaseConnection.getConnection().prepareStatement("INSERT INTO memo(name,memo,date) VALUES(?,?,?)");

function start() {
    return action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
        cm.dispose();
    }
    if (status == 0) {
        var str = "Hello,今天的心情是如何的呢,要不把它記錄下吧?\r\n";
        str += "#L1##b寫心情#k#l\r\n";
        str += "#L2##b查看心情記錄#k#l";
        if (cm.getPlayer().getGMLevel() >= 6) {
            str += "\r\n#L3##b系統初始化!(清理memo表的所有數據,GM6能看到此項)#l";
        }
        cm.sendSimple(str);
    } else if (status == 1) {
        if (selection == 1) {
            cm.sendGetText("開始寫你想記錄的話吧!");
        } else if (selection == 2) {
            var i = 0;
            var string = new StringBuilder();
            while (message.next()) {
                i++;
                string.append("#e姓名 : #n").append(message.getString("name")).append("\r\n#e時間 : #n").append(message.getString("date")).append("\r\n#e內容 : #n").append(message.getString("memo")).append("\r\n");
				string.append("============================================\r\n");
            }
            if (i != 0) {
                cm.sendOk(string.toString());
            } else {
                cm.sendOk("沒有記錄!");
            }
            cm.dispose();
        } else if (selection == 3) {
            DatabaseConnection.getConnection().prepareStatement("DELETE FROM memo").executeUpdate();
            cm.sendOk("系统初始化成功!");
            cm.dispose();
        }
    } else if (status == 2) {
        insert.setString(1, cm.getPlayer().getName());
        insert.setString(2, cm.getText());
        insert.setString(3, "" + year + "-" + month + "-" + date + "- " + d + " " + apm + "" + hour + ":" + min + ":" + sec + "");
        insert.executeUpdate();
        cm.sendOk("心情記錄成功!");
        cm.dispose();
    }
}