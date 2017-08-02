// Compiled by ClojureScript 1.9.671 {}
goog.provide('cnmipss.handlers.re_frame');
goog.require('cljs.core');
goog.require('cnmipss.db');
goog.require('re_frame.core');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return cnmipss.db.default_db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-search-text","set-search-text",650643537),(function (db,p__35555){
var vec__35556 = p__35555;
var _ = cljs.core.nth.call(null,vec__35556,(0),null);
var text = cljs.core.nth.call(null,vec__35556,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"search-text","search-text",1559451259),text);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"load-table","load-table",-1085622204),(function (db,p__35559){
var vec__35560 = p__35559;
var _ = cljs.core.nth.call(null,vec__35560,(0),null);
var table = cljs.core.nth.call(null,vec__35560,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"table","table",-564943036),table);
}));

//# sourceMappingURL=re_frame.js.map?rel=1501628491306