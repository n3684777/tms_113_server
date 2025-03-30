from handling.world.accountlog import EventLogType

series = sm.getCollectionSeriesList()
spheric = "#fMap/MapHelper/worldMap/npcPos3/6#"
toSend = u''

toSend +=  spheric+spheric+spheric+spheric+spheric+spheric+spheric+spheric+spheric+spheric+spheric+spheric+spheric+spheric+spheric+spheric+spheric+u'\r\n\r\n'
toSend += u'#e#b【 目前總能力加成 】#k#n\r\n\r\n'
toSend += sm.getCollectionSeriesListString()
toSend += u'\r\n\r\n'
for s in series:
    toSend +=  spheric+spheric+spheric+spheric+spheric+spheric+spheric+spheric+spheric+spheric+spheric+spheric+spheric+spheric+spheric+spheric+spheric+u'\r\n\r\n'
    toSend +=  s.getName()
    if sm.getSuperLog(s.getName(),u"帳號", u"全部") > 0 or sm.getEventLogValue(EventLogType.ACCOUNT, s.getName()) > 0:
        toSend += u' #b(已完成)#k\r\n\r\n'
    else:
        toSend += u' #r(未完成)#k\r\n\r\n'
    toSend += s.getProState().getProStateString()
    toSend += u"\r\n"
sm.sendNext(toSend)