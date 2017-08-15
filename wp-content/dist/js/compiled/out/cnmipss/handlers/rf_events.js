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
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"load-interactive-app","load-interactive-app",1974792889),(function (db,p__43656){
var vec__43657 = p__43656;
var _ = cljs.core.nth.call(null,vec__43657,(0),null);
var path = cljs.core.nth.call(null,vec__43657,(1),null);
var opts_43661 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cnmi-certification-look-up-database","cnmi-certification-look-up-database",-1487727293),"/webtools/api/all-certs",new cljs.core.Keyword(null,"job-vacancy-announcements","job-vacancy-announcements",-1555714791),"/webtools/api/all-jvas",new cljs.core.Keyword(null,"contractors-and-vendors","contractors-and-vendors",1541875611),"/webtools/api/all-procurement"], null);
ajax.core.GET.call(null,cljs.core.get.call(null,opts_43661,path),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (opts_43661,vec__43657,_,path){
return (function (data){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"store-data","store-data",265194715),data], null));
});})(opts_43661,vec__43657,_,path))
], null));

klang.core.add_log_BANG_.call(null,"cnmipss.handlers.rf-events","INFO",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("klang.core","meta-data","klang.core/meta-data",765484551),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Symbol(null,"db","db",-1661185010,null),db,new cljs.core.Symbol(null,"p__43656","p__43656",-235943911,null),p__43656,new cljs.core.Symbol(null,"vec__43657","vec__43657",235742017,null),vec__43657,new cljs.core.Symbol(null,"_","_",-1201019570,null),_,new cljs.core.Symbol(null,"path","path",1452340359,null),path], null),new cljs.core.Keyword(null,"trace","trace",-1082747415),(function (){try{throw (new Error());
}catch (e43660){var e__38742__auto__ = e43660;
return e__38742__auto__;
}})()], null)], null),"Setting active-view: ",path);

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-view","active-view",-1531689252),path);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-active-view","set-active-view",1673275205),(function (db,p__43662){
var vec__43663 = p__43662;
var _ = cljs.core.nth.call(null,vec__43663,(0),null);
var view = cljs.core.nth.call(null,vec__43663,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-view","active-view",-1531689252),view);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-search-text","set-search-text",650643537),(function (db,p__43666){
var vec__43667 = p__43666;
var _ = cljs.core.nth.call(null,vec__43667,(0),null);
var text = cljs.core.nth.call(null,vec__43667,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"search-text","search-text",1559451259),text);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"store-data","store-data",265194715),(function (db,p__43670){
var vec__43671 = p__43670;
var _ = cljs.core.nth.call(null,vec__43671,(0),null);
var table = cljs.core.nth.call(null,vec__43671,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"page-data","page-data",1443840710),table);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"pns-subscribe","pns-subscribe",359854594),(function (db,p__43674){
var vec__43675 = p__43674;
var _ = cljs.core.nth.call(null,vec__43675,(0),null);
var announcement = cljs.core.nth.call(null,vec__43675,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"pns-modal","pns-modal",-205148737),announcement);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"pns-subs-errors","pns-subs-errors",-1721584085),(function (db,p__43678){
var vec__43679 = p__43678;
var _ = cljs.core.nth.call(null,vec__43679,(0),null);
var errors = cljs.core.nth.call(null,vec__43679,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"pns-subs-errors","pns-subs-errors",-1721584085),errors);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"subscription-error","subscription-error",417516592),(function (db,p__43682){
var vec__43683 = p__43682;
var _ = cljs.core.nth.call(null,vec__43683,(0),null);
var error = cljs.core.nth.call(null,vec__43683,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"subscription-error","subscription-error",417516592),error);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"subscribed","subscribed",1012088257),(function (db,p__43686){
var vec__43687 = p__43686;
var _ = cljs.core.nth.call(null,vec__43687,(0),null);
var pns = cljs.core.nth.call(null,vec__43687,(1),null);
klang.core.add_log_BANG_.call(null,"cnmipss.handlers.rf-events","INFO",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("klang.core","meta-data","klang.core/meta-data",765484551),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Symbol(null,"db","db",-1661185010,null),db,new cljs.core.Symbol(null,"p__43686","p__43686",1943280040,null),p__43686,new cljs.core.Symbol(null,"vec__43687","vec__43687",1791212794,null),vec__43687,new cljs.core.Symbol(null,"_","_",-1201019570,null),_,new cljs.core.Symbol(null,"pns","pns",-1697663013,null),pns], null),new cljs.core.Keyword(null,"trace","trace",-1082747415),(function (){try{throw (new Error());
}catch (e43690){var e__38742__auto__ = e43690;
return e__38742__auto__;
}})()], null)], null),"Subscribed to",pns);

var temp__4655__auto__ = new cljs.core.Keyword(null,"subscribed","subscribed",1012088257).cljs$core$IFn$_invoke$arity$1(db);
if(cljs.core.truth_(temp__4655__auto__)){
var list = temp__4655__auto__;
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"subscribed","subscribed",1012088257),cljs.core.conj.call(null,list,pns));
} else {
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"subscribed","subscribed",1012088257),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pns], null));
}
}));

//# sourceMappingURL=rf_events.js.map?rel=1502763337981