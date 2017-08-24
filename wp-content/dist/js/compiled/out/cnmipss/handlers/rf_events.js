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
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"load-interactive-app","load-interactive-app",1974792889),(function (db,p__45038){
var vec__45039 = p__45038;
var _ = cljs.core.nth.call(null,vec__45039,(0),null);
var path = cljs.core.nth.call(null,vec__45039,(1),null);
var opts_45044 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cnmi-certification-look-up-database","cnmi-certification-look-up-database",-1487727293),"/webtools/api/all-certs",new cljs.core.Keyword(null,"job-vacancy-announcements","job-vacancy-announcements",-1555714791),"/webtools/api/all-jvas",new cljs.core.Keyword(null,"contractors-and-vendors","contractors-and-vendors",1541875611),"/webtools/api/all-procurement"], null);
ajax.core.GET.call(null,cljs.core.get.call(null,opts_45044,path),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (opts_45044,vec__45039,_,path){
return (function (data){
klang.core.add_log_BANG_.call(null,"cnmipss.handlers.rf-events","INFO",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("klang.core","meta-data","klang.core/meta-data",765484551),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Symbol(null,"db","db",-1661185010,null),db,new cljs.core.Symbol(null,"p__45038","p__45038",-168852160,null),p__45038,new cljs.core.Symbol(null,"vec__45039","vec__45039",523499643,null),vec__45039,new cljs.core.Symbol(null,"_","_",-1201019570,null),_,new cljs.core.Symbol(null,"path","path",1452340359,null),path,new cljs.core.Symbol(null,"opts","opts",1795607228,null),opts_45044,new cljs.core.Symbol(null,"data","data",1407862150,null),data], null),new cljs.core.Keyword(null,"trace","trace",-1082747415),(function (){try{throw (new Error());
}catch (e45042){var e__40692__auto__ = e45042;
return e__40692__auto__;
}})()], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("GET "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,opts_45044,path)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" returned")].join(''),data);

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"store-data","store-data",265194715),data], null));
});})(opts_45044,vec__45039,_,path))
], null));

klang.core.add_log_BANG_.call(null,"cnmipss.handlers.rf-events","INFO",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("klang.core","meta-data","klang.core/meta-data",765484551),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Symbol(null,"db","db",-1661185010,null),db,new cljs.core.Symbol(null,"p__45038","p__45038",-168852160,null),p__45038,new cljs.core.Symbol(null,"vec__45039","vec__45039",523499643,null),vec__45039,new cljs.core.Symbol(null,"_","_",-1201019570,null),_,new cljs.core.Symbol(null,"path","path",1452340359,null),path], null),new cljs.core.Keyword(null,"trace","trace",-1082747415),(function (){try{throw (new Error());
}catch (e45043){var e__40692__auto__ = e45043;
return e__40692__auto__;
}})()], null)], null),"Setting active-view: ",path);

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-view","active-view",-1531689252),path);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-active-view","set-active-view",1673275205),(function (db,p__45045){
var vec__45046 = p__45045;
var _ = cljs.core.nth.call(null,vec__45046,(0),null);
var view = cljs.core.nth.call(null,vec__45046,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-view","active-view",-1531689252),view);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-search-text","set-search-text",650643537),(function (db,p__45049){
var vec__45050 = p__45049;
var _ = cljs.core.nth.call(null,vec__45050,(0),null);
var text = cljs.core.nth.call(null,vec__45050,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"search-text","search-text",1559451259),text);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"store-data","store-data",265194715),(function (db,p__45053){
var vec__45054 = p__45053;
var _ = cljs.core.nth.call(null,vec__45054,(0),null);
var table = cljs.core.nth.call(null,vec__45054,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"page-data","page-data",1443840710),table);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"pns-subscribe","pns-subscribe",359854594),(function (db,p__45057){
var vec__45058 = p__45057;
var _ = cljs.core.nth.call(null,vec__45058,(0),null);
var announcement = cljs.core.nth.call(null,vec__45058,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"pns-modal","pns-modal",-205148737),announcement);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"pns-subs-errors","pns-subs-errors",-1721584085),(function (db,p__45061){
var vec__45062 = p__45061;
var _ = cljs.core.nth.call(null,vec__45062,(0),null);
var errors = cljs.core.nth.call(null,vec__45062,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"pns-subs-errors","pns-subs-errors",-1721584085),errors);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"subscription-error","subscription-error",417516592),(function (db,p__45065){
var vec__45066 = p__45065;
var _ = cljs.core.nth.call(null,vec__45066,(0),null);
var error = cljs.core.nth.call(null,vec__45066,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"subscription-error","subscription-error",417516592),error);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"subscribed","subscribed",1012088257),(function (db,p__45069){
var vec__45070 = p__45069;
var _ = cljs.core.nth.call(null,vec__45070,(0),null);
var pns = cljs.core.nth.call(null,vec__45070,(1),null);
klang.core.add_log_BANG_.call(null,"cnmipss.handlers.rf-events","INFO",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("klang.core","meta-data","klang.core/meta-data",765484551),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Symbol(null,"db","db",-1661185010,null),db,new cljs.core.Symbol(null,"p__45069","p__45069",890201724,null),p__45069,new cljs.core.Symbol(null,"vec__45070","vec__45070",1313824978,null),vec__45070,new cljs.core.Symbol(null,"_","_",-1201019570,null),_,new cljs.core.Symbol(null,"pns","pns",-1697663013,null),pns], null),new cljs.core.Keyword(null,"trace","trace",-1082747415),(function (){try{throw (new Error());
}catch (e45073){var e__40692__auto__ = e45073;
return e__40692__auto__;
}})()], null)], null),"Subscribed to",pns);

var temp__4655__auto__ = new cljs.core.Keyword(null,"subscribed","subscribed",1012088257).cljs$core$IFn$_invoke$arity$1(db);
if(cljs.core.truth_(temp__4655__auto__)){
var list = temp__4655__auto__;
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"subscribed","subscribed",1012088257),cljs.core.conj.call(null,list,pns));
} else {
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"subscribed","subscribed",1012088257),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pns], null));
}
}));

//# sourceMappingURL=rf_events.js.map?rel=1503532142583