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
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"load-interactive-app","load-interactive-app",1974792889),(function (db,p__46296){
var vec__46297 = p__46296;
var _ = cljs.core.nth.call(null,vec__46297,(0),null);
var path = cljs.core.nth.call(null,vec__46297,(1),null);
var opts_46301 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cnmi-certification-look-up-database","cnmi-certification-look-up-database",-1487727293),"/webtools/api/all-certs",new cljs.core.Keyword(null,"job-vacancy-announcements","job-vacancy-announcements",-1555714791),"/webtools/api/all-jvas",new cljs.core.Keyword(null,"contractors-and-vendors","contractors-and-vendors",1541875611),"/webtools/api/all-procurement"], null);
ajax.core.GET.call(null,cljs.core.get.call(null,opts_46301,path),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (opts_46301,vec__46297,_,path){
return (function (data){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"store-data","store-data",265194715),data], null));
});})(opts_46301,vec__46297,_,path))
], null));

klang.core.add_log_BANG_.call(null,"cnmipss.handlers.rf-events","INFO",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("klang.core","meta-data","klang.core/meta-data",765484551),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Symbol(null,"db","db",-1661185010,null),db,new cljs.core.Symbol(null,"p__46296","p__46296",1234605923,null),p__46296,new cljs.core.Symbol(null,"vec__46297","vec__46297",-760113561,null),vec__46297,new cljs.core.Symbol(null,"_","_",-1201019570,null),_,new cljs.core.Symbol(null,"path","path",1452340359,null),path], null),new cljs.core.Keyword(null,"trace","trace",-1082747415),(function (){try{throw (new Error());
}catch (e46300){var e__42909__auto__ = e46300;
return e__42909__auto__;
}})()], null)], null),"Setting active-view: ",path);

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-view","active-view",-1531689252),path);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-active-view","set-active-view",1673275205),(function (db,p__46302){
var vec__46303 = p__46302;
var _ = cljs.core.nth.call(null,vec__46303,(0),null);
var view = cljs.core.nth.call(null,vec__46303,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-view","active-view",-1531689252),view);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-search-text","set-search-text",650643537),(function (db,p__46306){
var vec__46307 = p__46306;
var _ = cljs.core.nth.call(null,vec__46307,(0),null);
var text = cljs.core.nth.call(null,vec__46307,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"search-text","search-text",1559451259),text);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"store-data","store-data",265194715),(function (db,p__46310){
var vec__46311 = p__46310;
var _ = cljs.core.nth.call(null,vec__46311,(0),null);
var table = cljs.core.nth.call(null,vec__46311,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"page-data","page-data",1443840710),table);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"pns-subscribe","pns-subscribe",359854594),(function (db,p__46314){
var vec__46315 = p__46314;
var _ = cljs.core.nth.call(null,vec__46315,(0),null);
var announcement = cljs.core.nth.call(null,vec__46315,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"pns-modal","pns-modal",-205148737),announcement);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"pns-subs-errors","pns-subs-errors",-1721584085),(function (db,p__46318){
var vec__46319 = p__46318;
var _ = cljs.core.nth.call(null,vec__46319,(0),null);
var errors = cljs.core.nth.call(null,vec__46319,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"pns-subs-errors","pns-subs-errors",-1721584085),errors);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"subscription-error","subscription-error",417516592),(function (db,p__46322){
var vec__46323 = p__46322;
var _ = cljs.core.nth.call(null,vec__46323,(0),null);
var error = cljs.core.nth.call(null,vec__46323,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"subscription-error","subscription-error",417516592),error);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"subscribed","subscribed",1012088257),(function (db,p__46326){
var vec__46327 = p__46326;
var _ = cljs.core.nth.call(null,vec__46327,(0),null);
var pns = cljs.core.nth.call(null,vec__46327,(1),null);
klang.core.add_log_BANG_.call(null,"cnmipss.handlers.rf-events","INFO",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("klang.core","meta-data","klang.core/meta-data",765484551),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Symbol(null,"db","db",-1661185010,null),db,new cljs.core.Symbol(null,"p__46326","p__46326",414141912,null),p__46326,new cljs.core.Symbol(null,"vec__46327","vec__46327",-380995917,null),vec__46327,new cljs.core.Symbol(null,"_","_",-1201019570,null),_,new cljs.core.Symbol(null,"pns","pns",-1697663013,null),pns], null),new cljs.core.Keyword(null,"trace","trace",-1082747415),(function (){try{throw (new Error());
}catch (e46330){var e__42909__auto__ = e46330;
return e__42909__auto__;
}})()], null)], null),"Subscribed to",pns);

var temp__4655__auto__ = new cljs.core.Keyword(null,"subscribed","subscribed",1012088257).cljs$core$IFn$_invoke$arity$1(db);
if(cljs.core.truth_(temp__4655__auto__)){
var list = temp__4655__auto__;
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"subscribed","subscribed",1012088257),cljs.core.conj.call(null,list,pns));
} else {
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"subscribed","subscribed",1012088257),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pns], null));
}
}));

//# sourceMappingURL=rf_events.js.map?rel=1503441678584