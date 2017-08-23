// Compiled by ClojureScript 1.9.671 {}
goog.provide('cnmipss.core');
goog.require('cljs.core');
goog.require('cnmipss.handlers.rf_events');
goog.require('cnmipss.handlers.rf_subs');
goog.require('cnmipss.views');
goog.require('klang.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('module$Users$tjscollins$Documents$cnmipss_main$wp_content$src$cljs$cnmipss$node_modules$axe_core$axe');
cljs.core.enable_console_print_BANG_.call(null);
cnmipss.core.on_js_reload = (function cnmipss$core$on_js_reload(){
return null;
});
cnmipss.core.test_accessibility = (function cnmipss$core$test_accessibility(){
return axe.run((function (err,data){
if(cljs.core.truth_(err)){
return console.error(err);
} else {
var map__54860 = clojure.walk.keywordize_keys.call(null,cljs.core.js__GT_clj.call(null,data));
var map__54860__$1 = ((((!((map__54860 == null)))?((((map__54860.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54860.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54860):map__54860);
var violations = cljs.core.get.call(null,map__54860__$1,new cljs.core.Keyword(null,"violations","violations",835165468));
var passes = cljs.core.get.call(null,map__54860__$1,new cljs.core.Keyword(null,"passes","passes",-2141861841));
var incomplete = cljs.core.get.call(null,map__54860__$1,new cljs.core.Keyword(null,"incomplete","incomplete",-998567478));
var inapplicable = cljs.core.get.call(null,map__54860__$1,new cljs.core.Keyword(null,"inapplicable","inapplicable",-1070062408));
klang.core.add_log_BANG_.call(null,"cnmipss.core","INFO",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("klang.core","meta-data","klang.core/meta-data",765484551),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Symbol(null,"err","err",-448925678,null),err,new cljs.core.Symbol(null,"data","data",1407862150,null),data,new cljs.core.Symbol(null,"map__54860","map__54860",1122983292,null),map__54860__$1,new cljs.core.Symbol(null,"violations","violations",-1819270301,null),violations,new cljs.core.Symbol(null,"passes","passes",-501330314,null),passes,new cljs.core.Symbol(null,"incomplete","incomplete",641964049,null),incomplete,new cljs.core.Symbol(null,"inapplicable","inapplicable",570469119,null),inapplicable], null),new cljs.core.Keyword(null,"trace","trace",-1082747415),(function (){try{throw (new Error());
}catch (e54862){var e__42909__auto__ = e54862;
return e__42909__auto__;
}})()], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Violations: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,violations))].join(''),violations);

klang.core.add_log_BANG_.call(null,"cnmipss.core","INFO",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("klang.core","meta-data","klang.core/meta-data",765484551),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Symbol(null,"err","err",-448925678,null),err,new cljs.core.Symbol(null,"data","data",1407862150,null),data,new cljs.core.Symbol(null,"map__54860","map__54860",1122983292,null),map__54860__$1,new cljs.core.Symbol(null,"violations","violations",-1819270301,null),violations,new cljs.core.Symbol(null,"passes","passes",-501330314,null),passes,new cljs.core.Symbol(null,"incomplete","incomplete",641964049,null),incomplete,new cljs.core.Symbol(null,"inapplicable","inapplicable",570469119,null),inapplicable], null),new cljs.core.Keyword(null,"trace","trace",-1082747415),(function (){try{throw (new Error());
}catch (e54863){var e__42909__auto__ = e54863;
return e__42909__auto__;
}})()], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Passes: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,passes))].join(''),passes);

return klang.core.add_log_BANG_.call(null,"cnmipss.core","INFO",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("klang.core","meta-data","klang.core/meta-data",765484551),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Symbol(null,"err","err",-448925678,null),err,new cljs.core.Symbol(null,"data","data",1407862150,null),data,new cljs.core.Symbol(null,"map__54860","map__54860",1122983292,null),map__54860__$1,new cljs.core.Symbol(null,"violations","violations",-1819270301,null),violations,new cljs.core.Symbol(null,"passes","passes",-501330314,null),passes,new cljs.core.Symbol(null,"incomplete","incomplete",641964049,null),incomplete,new cljs.core.Symbol(null,"inapplicable","inapplicable",570469119,null),inapplicable], null),new cljs.core.Keyword(null,"trace","trace",-1082747415),(function (){try{throw (new Error());
}catch (e54864){var e__42909__auto__ = e54864;
return e__42909__auto__;
}})()], null)], null),"Incomplete: ",incomplete);
}
}));
});
cnmipss.core.init_BANG_ = (function cnmipss$core$init_BANG_(){
var view = cljs.core.keyword.call(null,clojure.string.replace.call(null,location.pathname,/\//,""));
klang.core.add_log_BANG_.call(null,"cnmipss.core","INFO",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("klang.core","meta-data","klang.core/meta-data",765484551),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"view","view",-1406440955,null),view], null),new cljs.core.Keyword(null,"trace","trace",-1082747415),(function (){try{throw (new Error());
}catch (e54865){var e__42909__auto__ = e54865;
return e__42909__auto__;
}})()], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Starting init! for "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(view)].join(''));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-interactive-app","load-interactive-app",1974792889),view], null));

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cnmipss.views.interactive_view], null),document.getElementById("react-app"));
});
goog.exportSymbol('cnmipss.core.init_BANG_', cnmipss.core.init_BANG_);
cnmipss.core.init_BANG_.call(null);

//# sourceMappingURL=core.js.map?rel=1503453133390