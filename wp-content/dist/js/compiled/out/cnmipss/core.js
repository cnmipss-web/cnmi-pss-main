// Compiled by ClojureScript 1.9.671 {}
goog.provide('cnmipss.core');
goog.require('cljs.core');
goog.require('cnmipss.handlers.re_frame');
goog.require('cnmipss.handlers.rf_subs');
goog.require('cnmipss.components.forms');
goog.require('cnmipss.components.tables');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('module$home$tjscollins$public_html$wp_content$src$cljs$cnmipss$node_modules$axe_core$axe');
cljs.core.enable_console_print_BANG_.call(null);
cnmipss.core.log = (function cnmipss$core$log(var_args){
var args__28089__auto__ = [];
var len__28082__auto___30472 = arguments.length;
var i__28083__auto___30473 = (0);
while(true){
if((i__28083__auto___30473 < len__28082__auto___30472)){
args__28089__auto__.push((arguments[i__28083__auto___30473]));

var G__30474 = (i__28083__auto___30473 + (1));
i__28083__auto___30473 = G__30474;
continue;
} else {
}
break;
}

var argseq__28090__auto__ = ((((0) < args__28089__auto__.length))?(new cljs.core.IndexedSeq(args__28089__auto__.slice((0)),(0),null)):null);
return cnmipss.core.log.cljs$core$IFn$_invoke$arity$variadic(argseq__28090__auto__);
});

cnmipss.core.log.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.mapv.call(null,(function (p1__30470_SHARP_){
return console.log(p1__30470_SHARP_);
}),args);
});

cnmipss.core.log.cljs$lang$maxFixedArity = (0);

cnmipss.core.log.cljs$lang$applyTo = (function (seq30471){
return cnmipss.core.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30471));
});

cnmipss.core.jq = jQuery;
cnmipss.core.path = (function cnmipss$core$path(){
return location.pathname;
});
cljs.core.println.call(null,"Loading...");
cnmipss.core.on_js_reload = (function cnmipss$core$on_js_reload(){
return null;
});
cnmipss.core.test_accessibility = (function cnmipss$core$test_accessibility(){
return axe.run((function (err,data){
if(cljs.core.truth_(err)){
return console.error(err);
} else {
var map__30475 = clojure.walk.keywordize_keys.call(null,cljs.core.js__GT_clj.call(null,data));
var map__30475__$1 = ((((!((map__30475 == null)))?((((map__30475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30475.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30475):map__30475);
var violations = cljs.core.get.call(null,map__30475__$1,new cljs.core.Keyword(null,"violations","violations",835165468));
var passes = cljs.core.get.call(null,map__30475__$1,new cljs.core.Keyword(null,"passes","passes",-2141861841));
var incomplete = cljs.core.get.call(null,map__30475__$1,new cljs.core.Keyword(null,"incomplete","incomplete",-998567478));
var inapplicable = cljs.core.get.call(null,map__30475__$1,new cljs.core.Keyword(null,"inapplicable","inapplicable",-1070062408));
cnmipss.core.log.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Violations: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,violations))].join(''),violations);

cnmipss.core.log.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Passes: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,passes))].join(''),passes);

return cnmipss.core.log.call(null,"Incomplete: ",incomplete);
}
}));
});
cnmipss.core.init_BANG_ = (function cnmipss$core$init_BANG_(){
var G__30477 = cnmipss.core.path.call(null);
switch (G__30477) {
case "/cnmi-certification-look-up-database/":
return cnmipss.core.jq.get("/webtools/api/all-certs",((function (G__30477){
return (function (data){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-table","load-table",-1085622204),data], null));

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cnmipss.components.tables.lookup_table], null),document.getElementById("certification-lookup"));
});})(G__30477))
);

break;
case "/job-vacancy-announcements/":
return cnmipss.core.jq.get("/webtools/api/all-jvas",((function (G__30477){
return (function (data){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-table","load-table",-1085622204),data], null));

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cnmipss.components.tables.jva_table], null),document.getElementById("jva-table"));
});})(G__30477))
);

break;
default:
return cljs.core.println.call(null,"Path is",cnmipss.core.path.call(null));

}
});
goog.exportSymbol('cnmipss.core.init_BANG_', cnmipss.core.init_BANG_);
cnmipss.core.init_BANG_.call(null);

//# sourceMappingURL=core.js.map?rel=1501462084624