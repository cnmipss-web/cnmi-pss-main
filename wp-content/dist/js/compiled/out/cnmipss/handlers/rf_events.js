// Compiled by ClojureScript 1.9.671 {}
goog.provide('cnmipss.handlers.rf_events');
goog.require('cljs.core');
goog.require('cnmipss.db');
goog.require('ajax.core');
goog.require('klang.core');
goog.require('re_frame.core');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return cnmipss.db.default_db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"load-interactive-app","load-interactive-app",1974792889),(function (db,p__41578){
var vec__41579 = p__41578;
var _ = cljs.core.nth.call(null,vec__41579,(0),null);
var path = cljs.core.nth.call(null,vec__41579,(1),null);
var opts_41584 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cnmi-certification-look-up-database","cnmi-certification-look-up-database",-1487727293),"/webtools/api/all-certs",new cljs.core.Keyword(null,"job-vacancy-announcements","job-vacancy-announcements",-1555714791),"/webtools/api/all-jvas",new cljs.core.Keyword(null,"contractors-and-vendors","contractors-and-vendors",1541875611),"/webtools/api/all-procurement"], null);
ajax.core.GET.call(null,cljs.core.get.call(null,opts_41584,path),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (opts_41584,vec__41579,_,path){
return (function (data){
klang.core.add_log_BANG_.call(null,"cnmipss.handlers.rf-events","INFO",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("klang.core","meta-data","klang.core/meta-data",765484551),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Symbol(null,"db","db",-1661185010,null),db,new cljs.core.Symbol(null,"p__41578","p__41578",-239704941,null),p__41578,new cljs.core.Symbol(null,"vec__41579","vec__41579",-93634442,null),vec__41579,new cljs.core.Symbol(null,"_","_",-1201019570,null),_,new cljs.core.Symbol(null,"path","path",1452340359,null),path,new cljs.core.Symbol(null,"opts","opts",1795607228,null),opts_41584,new cljs.core.Symbol(null,"data","data",1407862150,null),data], null),new cljs.core.Keyword(null,"trace","trace",-1082747415),(function (){try{throw (new Error());
}catch (e41582){var e__38742__auto__ = e41582;
return e__38742__auto__;
}})()], null)], null),"Ajax returned",path,data);

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"store-data","store-data",265194715),data], null));
});})(opts_41584,vec__41579,_,path))
], null));

klang.core.add_log_BANG_.call(null,"cnmipss.handlers.rf-events","INFO",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("klang.core","meta-data","klang.core/meta-data",765484551),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Symbol(null,"db","db",-1661185010,null),db,new cljs.core.Symbol(null,"p__41578","p__41578",-239704941,null),p__41578,new cljs.core.Symbol(null,"vec__41579","vec__41579",-93634442,null),vec__41579,new cljs.core.Symbol(null,"_","_",-1201019570,null),_,new cljs.core.Symbol(null,"path","path",1452340359,null),path], null),new cljs.core.Keyword(null,"trace","trace",-1082747415),(function (){try{throw (new Error());
}catch (e41583){var e__38742__auto__ = e41583;
return e__38742__auto__;
}})()], null)], null),"Setting active-view: ",path);

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-view","active-view",-1531689252),path);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-active-view","set-active-view",1673275205),(function (db,p__41585){
var vec__41586 = p__41585;
var _ = cljs.core.nth.call(null,vec__41586,(0),null);
var view = cljs.core.nth.call(null,vec__41586,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-view","active-view",-1531689252),view);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-search-text","set-search-text",650643537),(function (db,p__41589){
var vec__41590 = p__41589;
var _ = cljs.core.nth.call(null,vec__41590,(0),null);
var text = cljs.core.nth.call(null,vec__41590,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"search-text","search-text",1559451259),text);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"store-data","store-data",265194715),(function (db,p__41593){
var vec__41594 = p__41593;
var _ = cljs.core.nth.call(null,vec__41594,(0),null);
var table = cljs.core.nth.call(null,vec__41594,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"page-data","page-data",1443840710),table);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"pns-subscribe","pns-subscribe",359854594),(function (db,p__41597){
var vec__41598 = p__41597;
var _ = cljs.core.nth.call(null,vec__41598,(0),null);
var announcement = cljs.core.nth.call(null,vec__41598,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"pns-modal","pns-modal",-205148737),announcement);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"pns-subs-errors","pns-subs-errors",-1721584085),(function (db,p__41601){
var vec__41602 = p__41601;
var _ = cljs.core.nth.call(null,vec__41602,(0),null);
var errors = cljs.core.nth.call(null,vec__41602,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"pns-subs-errors","pns-subs-errors",-1721584085),errors);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"subscribed","subscribed",1012088257),(function (db,p__41605){
var vec__41606 = p__41605;
var _ = cljs.core.nth.call(null,vec__41606,(0),null);
var pns = cljs.core.nth.call(null,vec__41606,(1),null);
var temp__4655__auto__ = new cljs.core.Keyword(null,"subscribed","subscribed",1012088257).cljs$core$IFn$_invoke$arity$1(db);
if(cljs.core.truth_(temp__4655__auto__)){
var list = temp__4655__auto__;
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"subscribed","subscribed",1012088257),cljs.core.conj.call(null,list,pns));
} else {
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"subscribed","subscribed",1012088257),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pns], null));
}
}));

//# sourceMappingURL=rf_events.js.map?rel=1502754748212