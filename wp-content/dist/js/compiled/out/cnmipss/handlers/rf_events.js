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
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"load-interactive-app","load-interactive-app",1974792889),(function (db,p__46298){
var vec__46299 = p__46298;
var _ = cljs.core.nth.call(null,vec__46299,(0),null);
var path = cljs.core.nth.call(null,vec__46299,(1),null);
var opts_46304 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cnmi-certification-look-up-database","cnmi-certification-look-up-database",-1487727293),"/webtools/api/all-certs",new cljs.core.Keyword(null,"job-vacancy-announcements","job-vacancy-announcements",-1555714791),"/webtools/api/all-jvas",new cljs.core.Keyword(null,"contractors-and-vendors","contractors-and-vendors",1541875611),"/webtools/api/all-procurement"], null);
ajax.core.GET.call(null,cljs.core.get.call(null,opts_46304,path),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (opts_46304,vec__46299,_,path){
return (function (data){
klang.core.add_log_BANG_.call(null,"cnmipss.handlers.rf-events","INFO",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("klang.core","meta-data","klang.core/meta-data",765484551),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Symbol(null,"db","db",-1661185010,null),db,new cljs.core.Symbol(null,"p__46298","p__46298",-1456710718,null),p__46298,new cljs.core.Symbol(null,"vec__46299","vec__46299",1325591210,null),vec__46299,new cljs.core.Symbol(null,"_","_",-1201019570,null),_,new cljs.core.Symbol(null,"path","path",1452340359,null),path,new cljs.core.Symbol(null,"opts","opts",1795607228,null),opts_46304,new cljs.core.Symbol(null,"data","data",1407862150,null),data], null),new cljs.core.Keyword(null,"trace","trace",-1082747415),(function (){try{throw (new Error());
}catch (e46302){var e__42908__auto__ = e46302;
return e__42908__auto__;
}})()], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("GET "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,opts_46304,path)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" returned")].join(''),data);

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"store-data","store-data",265194715),data], null));
});})(opts_46304,vec__46299,_,path))
], null));

klang.core.add_log_BANG_.call(null,"cnmipss.handlers.rf-events","INFO",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("klang.core","meta-data","klang.core/meta-data",765484551),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Symbol(null,"db","db",-1661185010,null),db,new cljs.core.Symbol(null,"p__46298","p__46298",-1456710718,null),p__46298,new cljs.core.Symbol(null,"vec__46299","vec__46299",1325591210,null),vec__46299,new cljs.core.Symbol(null,"_","_",-1201019570,null),_,new cljs.core.Symbol(null,"path","path",1452340359,null),path], null),new cljs.core.Keyword(null,"trace","trace",-1082747415),(function (){try{throw (new Error());
}catch (e46303){var e__42908__auto__ = e46303;
return e__42908__auto__;
}})()], null)], null),"Setting active-view: ",path);

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-view","active-view",-1531689252),path);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-active-view","set-active-view",1673275205),(function (db,p__46305){
var vec__46306 = p__46305;
var _ = cljs.core.nth.call(null,vec__46306,(0),null);
var view = cljs.core.nth.call(null,vec__46306,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-view","active-view",-1531689252),view);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-search-text","set-search-text",650643537),(function (db,p__46309){
var vec__46310 = p__46309;
var _ = cljs.core.nth.call(null,vec__46310,(0),null);
var text = cljs.core.nth.call(null,vec__46310,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"search-text","search-text",1559451259),text);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"store-data","store-data",265194715),(function (db,p__46313){
var vec__46314 = p__46313;
var _ = cljs.core.nth.call(null,vec__46314,(0),null);
var table = cljs.core.nth.call(null,vec__46314,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"page-data","page-data",1443840710),table);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"pns-subscribe","pns-subscribe",359854594),(function (db,p__46317){
var vec__46318 = p__46317;
var _ = cljs.core.nth.call(null,vec__46318,(0),null);
var announcement = cljs.core.nth.call(null,vec__46318,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"pns-modal","pns-modal",-205148737),announcement);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"pns-subs-errors","pns-subs-errors",-1721584085),(function (db,p__46321){
var vec__46322 = p__46321;
var _ = cljs.core.nth.call(null,vec__46322,(0),null);
var errors = cljs.core.nth.call(null,vec__46322,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"pns-subs-errors","pns-subs-errors",-1721584085),errors);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"subscription-error","subscription-error",417516592),(function (db,p__46325){
var vec__46326 = p__46325;
var _ = cljs.core.nth.call(null,vec__46326,(0),null);
var error = cljs.core.nth.call(null,vec__46326,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"subscription-error","subscription-error",417516592),error);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"subscribed","subscribed",1012088257),(function (db,p__46329){
var vec__46330 = p__46329;
var _ = cljs.core.nth.call(null,vec__46330,(0),null);
var pns = cljs.core.nth.call(null,vec__46330,(1),null);
klang.core.add_log_BANG_.call(null,"cnmipss.handlers.rf-events","INFO",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("klang.core","meta-data","klang.core/meta-data",765484551),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Symbol(null,"db","db",-1661185010,null),db,new cljs.core.Symbol(null,"p__46329","p__46329",160329873,null),p__46329,new cljs.core.Symbol(null,"vec__46330","vec__46330",-335191017,null),vec__46330,new cljs.core.Symbol(null,"_","_",-1201019570,null),_,new cljs.core.Symbol(null,"pns","pns",-1697663013,null),pns], null),new cljs.core.Keyword(null,"trace","trace",-1082747415),(function (){try{throw (new Error());
}catch (e46333){var e__42908__auto__ = e46333;
return e__42908__auto__;
}})()], null)], null),"Subscribed to",pns);

var temp__4655__auto__ = new cljs.core.Keyword(null,"subscribed","subscribed",1012088257).cljs$core$IFn$_invoke$arity$1(db);
if(cljs.core.truth_(temp__4655__auto__)){
var list = temp__4655__auto__;
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"subscribed","subscribed",1012088257),cljs.core.conj.call(null,list,pns));
} else {
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"subscribed","subscribed",1012088257),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pns], null));
}
}));

//# sourceMappingURL=rf_events.js.map?rel=1503550042999