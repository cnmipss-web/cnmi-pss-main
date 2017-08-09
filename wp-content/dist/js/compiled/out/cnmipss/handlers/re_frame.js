// Compiled by ClojureScript 1.9.671 {}
goog.provide('cnmipss.handlers.re_frame');
goog.require('cljs.core');
goog.require('cnmipss.db');
goog.require('re_frame.core');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return cnmipss.db.default_db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-search-text","set-search-text",650643537),(function (db,p__45895){
var vec__45896 = p__45895;
var _ = cljs.core.nth.call(null,vec__45896,(0),null);
var text = cljs.core.nth.call(null,vec__45896,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"search-text","search-text",1559451259),text);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"load-table","load-table",-1085622204),(function (db,p__45899){
var vec__45900 = p__45899;
var _ = cljs.core.nth.call(null,vec__45900,(0),null);
var table = cljs.core.nth.call(null,vec__45900,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"table","table",-564943036),table);
}));

//# sourceMappingURL=re_frame.js.map?rel=1502260264422