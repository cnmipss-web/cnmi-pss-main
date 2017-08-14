// Compiled by ClojureScript 1.9.671 {}
goog.provide('cnmipss.core');
goog.require('cljs.core');
goog.require('cnmipss.handlers.re_frame');
goog.require('cnmipss.handlers.rf_subs');
goog.require('cnmipss.components.forms');
goog.require('cnmipss.components.tables');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('module$Users$tjscollins$Documents$cnmipss_main$wp_content$src$cljs$cnmipss$node_modules$axe_core$axe');
cljs.core.enable_console_print_BANG_.call(null);
cnmipss.core.log = (function cnmipss$core$log(var_args){
var args__37903__auto__ = [];
var len__37896__auto___42771 = arguments.length;
var i__37897__auto___42772 = (0);
while(true){
if((i__37897__auto___42772 < len__37896__auto___42771)){
args__37903__auto__.push((arguments[i__37897__auto___42772]));

var G__42773 = (i__37897__auto___42772 + (1));
i__37897__auto___42772 = G__42773;
continue;
} else {
}
break;
}

var argseq__37904__auto__ = ((((0) < args__37903__auto__.length))?(new cljs.core.IndexedSeq(args__37903__auto__.slice((0)),(0),null)):null);
return cnmipss.core.log.cljs$core$IFn$_invoke$arity$variadic(argseq__37904__auto__);
});

cnmipss.core.log.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.mapv.call(null,(function (p1__42769_SHARP_){
return console.log(p1__42769_SHARP_);
}),args);
});

cnmipss.core.log.cljs$lang$maxFixedArity = (0);

cnmipss.core.log.cljs$lang$applyTo = (function (seq42770){
return cnmipss.core.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42770));
});

cnmipss.core.jq = jQuery;
cnmipss.core.path = (function cnmipss$core$path(){
return location.pathname;
});
cnmipss.core.on_js_reload = (function cnmipss$core$on_js_reload(){
return null;
});
cnmipss.core.test_accessibility = (function cnmipss$core$test_accessibility(){
return axe.run((function (err,data){
if(cljs.core.truth_(err)){
return console.error(err);
} else {
var map__42774 = clojure.walk.keywordize_keys.call(null,cljs.core.js__GT_clj.call(null,data));
var map__42774__$1 = ((((!((map__42774 == null)))?((((map__42774.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42774.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42774):map__42774);
var violations = cljs.core.get.call(null,map__42774__$1,new cljs.core.Keyword(null,"violations","violations",835165468));
var passes = cljs.core.get.call(null,map__42774__$1,new cljs.core.Keyword(null,"passes","passes",-2141861841));
var incomplete = cljs.core.get.call(null,map__42774__$1,new cljs.core.Keyword(null,"incomplete","incomplete",-998567478));
var inapplicable = cljs.core.get.call(null,map__42774__$1,new cljs.core.Keyword(null,"inapplicable","inapplicable",-1070062408));
cnmipss.core.log.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Violations: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,violations))].join(''),violations);

cnmipss.core.log.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Passes: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,passes))].join(''),passes);

return cnmipss.core.log.call(null,"Incomplete: ",incomplete);
}
}));
});
cnmipss.core.init_BANG_ = (function cnmipss$core$init_BANG_(){
var G__42776 = cnmipss.core.path.call(null);
switch (G__42776) {
case "/cnmi-certification-look-up-database/":
return cnmipss.core.jq.get("/webtools/api/all-certs",((function (G__42776){
return (function (data){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-table","load-table",-1085622204),data], null));

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cnmipss.components.tables.lookup_table], null),document.getElementById("certification-lookup"));
});})(G__42776))
);

break;
case "/job-vacancy-announcements/":
return cnmipss.core.jq.get("/webtools/api/all-jvas",((function (G__42776){
return (function (data){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-table","load-table",-1085622204),data], null));

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cnmipss.components.tables.jva_table], null),document.getElementById("jva-table"));
});})(G__42776))
);

break;
case "/contractors-and-vendors/":
return cnmipss.core.jq.get("/webtools/api/all-procurement",((function (G__42776){
return (function (data){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-table","load-table",-1085622204),data], null));

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cnmipss.components.tables.procurement_tables], null),document.getElementById("procurement-tables"));
});})(G__42776))
);

break;
default:
return cljs.core.println.call(null,"Path is",cnmipss.core.path.call(null));

}
});
goog.exportSymbol('cnmipss.core.init_BANG_', cnmipss.core.init_BANG_);
cnmipss.core.init_BANG_.call(null);

//# sourceMappingURL=core.js.map?rel=1502666782627