// Compiled by ClojureScript 1.9.671 {}
goog.provide('cnmipss.handlers.re_frame');
goog.require('cljs.core');
goog.require('cnmipss.db');
goog.require('ajax.core');
goog.require('re_frame.core');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return cnmipss.db.default_db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-search-text","set-search-text",650643537),(function (db,p__40299){
var vec__40300 = p__40299;
var _ = cljs.core.nth.call(null,vec__40300,(0),null);
var text = cljs.core.nth.call(null,vec__40300,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"search-text","search-text",1559451259),text);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"load-table","load-table",-1085622204),(function (db,p__40303){
var vec__40304 = p__40303;
var _ = cljs.core.nth.call(null,vec__40304,(0),null);
var table = cljs.core.nth.call(null,vec__40304,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"table","table",-564943036),table);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"pns-subscribe","pns-subscribe",359854594),(function (db,p__40307){
var vec__40308 = p__40307;
var _ = cljs.core.nth.call(null,vec__40308,(0),null);
var announcement = cljs.core.nth.call(null,vec__40308,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"pns-modal","pns-modal",-205148737),announcement);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"pns-subs-errors","pns-subs-errors",-1721584085),(function (db,p__40311){
var vec__40312 = p__40311;
var _ = cljs.core.nth.call(null,vec__40312,(0),null);
var errors = cljs.core.nth.call(null,vec__40312,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"pns-subs-errors","pns-subs-errors",-1721584085),errors);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"subscribed","subscribed",1012088257),(function (db,p__40315){
var vec__40316 = p__40315;
var _ = cljs.core.nth.call(null,vec__40316,(0),null);
var pns = cljs.core.nth.call(null,vec__40316,(1),null);
cljs.core.println.call(null,"DB",db);

var temp__4655__auto__ = new cljs.core.Keyword(null,"subscribed","subscribed",1012088257).cljs$core$IFn$_invoke$arity$1(db);
if(cljs.core.truth_(temp__4655__auto__)){
var list = temp__4655__auto__;
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"subscribed","subscribed",1012088257),cljs.core.conj.call(null,list,pns));
} else {
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"subscribed","subscribed",1012088257),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pns], null));
}
}));

//# sourceMappingURL=re_frame.js.map?rel=1502749632309