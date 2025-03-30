from handling.world.accountlog import EventLogType
MESO = '#v4460007#'
GASH = '#v4460006#'
Dividend = '#v4460005#'
candy = '#fMap/MapHelper/weather/candy/4#'
npcPos3 = '#fMap/MapHelper/worldMap/npcPos3/6#'
next2 = '#fUI/UIWindow.img/PvP/Scroll/enabled/next2#'
QuestIcon = '#fUI/UIWindow.img/QuestIcon/4/0#'
icon6 = '#fUI/UIWindow/Quest/icon6/7#'


toSend = u'           '+candy+u'  #e#b歡迎來到戰地聯盟系統#k  '+candy+u'\r\n\r\n'
toSend += npcPos3+npcPos3+npcPos3+npcPos3+npcPos3+npcPos3+npcPos3+npcPos3+npcPos3+u'  #b【 以下系列 】#k#n  '+npcPos3+npcPos3+npcPos3+npcPos3+npcPos3+npcPos3+npcPos3+npcPos3+npcPos3+u'\r\n'

def canSign(series):
    return series.getJobId() == chr.getJob() and chr.getLevel() >= series.getLevel()


def getPrizeStr(itemId):
    if itemId == 0:
        return u'楓幣'
    elif itemId == 1:
        return u'楓幣'
    elif itemId == 2:
        return u'楓幣'
    elif itemId == 3:
        return u'紅利'

    return u'#v' + str(itemId) + u'##b#z' + str(itemId) + u'##k'


def giveRewards(series):
    for i in series.getRewards():
        if i.getItemId() > 5:
            sm.giveItem(i.getItemId(), i.getQty())
        elif i.getItemId() == 0:
            sm.giveMesos(long(i.getQty()))
        elif i.getItemId() == 1:
            chr.modifyCSPoints(2, i.getQty(), True)
        elif i.getItemId() == 2:
            chr.modifyCSPoints(1, i.getQty(), True)
        elif i.getItemId() == 3:
            chr.setDividend(2, i.getQty())

series = sm.getBattleFieldSeriesList()
for s in series:
    sName = u'\r\n'+next2+u' 名稱：' + s.getName() + U'\r\n'+ next2 + u' 職業:' + s.getJobName() +u'\r\n'+ next2 + u' 等級：' + str(s.getLevel())

    if chr.getCharInfoNum(s.getName()) >= 1: # 舊版換新版需要這個
        sm.addEventLog(EventLogType.ACCOUNT, u'戰地系統' + str(s.getId()), 1)

    if sm.getEventLogValue(EventLogType.ACCOUNT, u'戰地系統' + str(s.getId())) == 0 and sm.getEventLogValue(EventLogType.ACCOUNT, s.getName()) >= 1:
        sm.addEventLog(EventLogType.ACCOUNT, u'戰地系統' + str(s.getId()), 1)

    if sm.getEventLogValue(EventLogType.ACCOUNT, u'戰地系統' + str(s.getId())) == 0 and sm.getEventLogValue(EventLogType.ACCOUNT, s.getName()) == 0:
        if canSign(s):
            toSend += sName
            toSend += u"\r\n#L" + str(series.index(s)) +u'#'+ icon6 + u" 目前狀態 : #b可登記#k#l\r\n\r\n\r\n"
        else:
            continue
    else:
        toSend += sName
        toSend += u'\r\n\r\n'+ icon6 + u" #b目前狀態 : #d已登記#k\r\n\r\n"
    toSend += QuestIcon+u'\r\n\r\n'

    toSend += u'\r\n' + s.getProState().getProStateString() + u'\r\n'
    #toSend += u'\r\n首次登記可獲得以下物品\r\n'
    for i in s.getRewards():
        toSend += getPrizeStr(i.getItemId()) + u" x" + str(i.getQty()) + u" \r\n\r\n"
    toSend += npcPos3+npcPos3+npcPos3+npcPos3+npcPos3+npcPos3+npcPos3+npcPos3+npcPos3+npcPos3+npcPos3+npcPos3+npcPos3+npcPos3+npcPos3+npcPos3+npcPos3+u'\r\n\r\n'

for s in series:
    sName = u'\r\n'+next2+u' 名稱：' + s.getName() + U'\r\n'+ next2 + u' 職業:' + s.getJobName() +u'\r\n'+ next2 + u' 等級：' + str(s.getLevel())

    if sm.getEventLogValue(EventLogType.ACCOUNT, u'戰地系統' + str(s.getId())) == 0 and sm.getEventLogValue(EventLogType.ACCOUNT, s.getName()) == 0:
        if canSign(s):
            continue
        else:
            toSend += sName
            toSend +=  u'\r\n\r\n'+ icon6 + u" 目前狀態 : #r未達成條件#k#l\r\n\r\n"
    else:
        continue
    toSend += QuestIcon+u'\r\n\r\n'

    toSend += u'\r\n' + s.getProState().getProStateString() + u'\r\n'
    #toSend += u'\r\n首次登記可獲得以下物品\r\n'
    for i in s.getRewards():
        toSend += getPrizeStr(i.getItemId()) + u" x" + str(i.getQty()) + u" \r\n\r\n"
    toSend += npcPos3+npcPos3+npcPos3+npcPos3+npcPos3+npcPos3+npcPos3+npcPos3+npcPos3+npcPos3+npcPos3+npcPos3+npcPos3+npcPos3+npcPos3+npcPos3+npcPos3+u'\r\n\r\n'

selection = sm.sendNext(toSend)
if selection >= 0:
    selectedSeries = series[selection]
    if not canSign(selectedSeries):
        sm.sendSayOkay(u"您的等級不足或職業不相符，無法登記。")
    elif not sm.haveNFreeSlots(5):
        sm.sendSayOkay(u"所有道具欄位至少要有 5 空格！")
    else:
        if sm.sendAskYesNo(u"您確定要登登記 " + selectedSeries.getName() + u"？"):
            sm.setSuperLog(selectedSeries.getName(), u'帳號')
            sm.addEventLog(EventLogType.ACCOUNT, u'戰地系統' + str(selectedSeries.getId()), 1)
            giveRewards(selectedSeries)
            chr.fakeRelog()
            sm.sendSayOkay(u"登記成功。")
        else:
            sm.sendSayOkay(u"歡迎隨時來登記。")
