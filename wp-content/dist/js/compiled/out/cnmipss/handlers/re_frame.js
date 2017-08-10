// Compiled by ClojureScript 1.9.671 {}
goog.provide('cnmipss.handlers.re_frame');
goog.require('cljs.core');
goog.require('cnmipss.db');
goog.require('re_frame.core');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return cnmipss.db.default_db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-search-text","set-search-text",650643537),(function (db,p__40762){
var vec__40763 = p__40762;
var _ = cljs.core.nth.call(null,vec__40763,(0),null);
var text = cljs.core.nth.call(null,vec__40763,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"search-text","search-text",1559451259),text);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"load-table","load-table",-1085622204),(function (db,p__40766){
var vec__40767 = p__40766;
var _ = cljs.core.nth.call(null,vec__40767,(0),null);
var table = cljs.core.nth.call(null,vec__40767,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"table","table",-564943036),table);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"pns-subscribe","pns-subscribe",359854594),(function (db,p__40770){
var vec__40771 = p__40770;
var _ = cljs.core.nth.call(null,vec__40771,(0),null);
var announcement = cljs.core.nth.call(null,vec__40771,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"pns-modal","pns-modal",-205148737),announcement);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"pns-subs-errors","pns-subs-errors",-1721584085),(function (db,p__40774){
var vec__40775 = p__40774;
var _ = cljs.core.nth.call(null,vec__40775,(0),null);
var errors = cljs.core.nth.call(null,vec__40775,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"pns-subs-errors","pns-subs-errors",-1721584085),errors);
}));

//# sourceMappingURL=re_frame.js.map?rel=1502336463093