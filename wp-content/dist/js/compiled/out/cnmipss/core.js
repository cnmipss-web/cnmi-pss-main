// Compiled by ClojureScript 1.9.671 {}
goog.provide('cnmipss.core');
goog.require('cljs.core');
goog.require('cnmipss.handlers.re_frame');
goog.require('cnmipss.handlers.rf_subs');
goog.require('cnmipss.components.forms');
goog.require('cnmipss.components.tables');
goog.require('reagent.core');
goog.require('re_frame.core');
cljs.core.enable_console_print_BANG_.call(null);
cnmipss.core.jq = jQuery;
cnmipss.core.path = (function cnmipss$core$path(){
return location.pathname;
});
cljs.core.println.call(null,"Loading...");
cnmipss.core.on_js_reload = (function cnmipss$core$on_js_reload(){
return null;
});
cnmipss.core.init_BANG_ = (function cnmipss$core$init_BANG_(){
var G__42917 = cnmipss.core.path.call(null);
switch (G__42917) {
case "/cnmi-certification-look-up-database/":
return cnmipss.core.jq.get("/webtools/api/all-certs",((function (G__42917){
return (function (data){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-table","load-table",-1085622204),data], null));

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cnmipss.components.tables.lookup_table], null),document.getElementById("certification-lookup"));
});})(G__42917))
);

break;
case "/job-vacancy-announcements/":
return cnmipss.core.jq.get("/webtools/api/all-jvas",((function (G__42917){
return (function (data){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-table","load-table",-1085622204),data], null));

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cnmipss.components.tables.jva_table], null),document.getElementById("jva-table"));
});})(G__42917))
);

break;
default:
return cljs.core.println.call(null,"Path is",cnmipss.core.path.call(null));

}
});
goog.exportSymbol('cnmipss.core.init_BANG_', cnmipss.core.init_BANG_);
cnmipss.core.init_BANG_.call(null);

//# sourceMappingURL=core.js.map?rel=1500856369227