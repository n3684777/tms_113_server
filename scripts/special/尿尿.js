
var mathQuestions = [
    {question:"題目: 5 + 3 = ?", answer: "8"},
    {question:"題目: 6 * 4 = ?", answer: "24"},
]

var selectionQuestion;
var status = -1;
function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 && status == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    if (status == 0) {
        var randomIndex = Math.floor(Math.random() * mathQuestions.length);
        selectionQuestion = mathQuestions[randomIndex];
        var msg = "";
        msg += selectionQuestion.question;
        cm.sendGetText(msg);
    } else if (status == 1) {
        var text = cm.getText();
        if (text === selectionQuestion.answer) {
            cm.getPlayer().setPee(0);
            cm.dropMsg(6,"[身體]: 哇,多謝! 感覺更好了!");
        } else {
            cm.sendOk("輸入錯誤!!");
        }
        cm.dispose();
    }
}