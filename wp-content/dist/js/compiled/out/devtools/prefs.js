// Compiled by ClojureScript 1.9.671 {}
goog.provide('devtools.prefs');
goog.require('cljs.core');
goog.require('devtools.defaults');
devtools.prefs.simple_merge = (function devtools$prefs$simple_merge(var_args){
var args__28184__auto__ = [];
var len__28177__auto___49574 = arguments.length;
var i__28178__auto___49575 = (0);
while(true){
if((i__28178__auto___49575 < len__28177__auto___49574)){
args__28184__auto__.push((arguments[i__28178__auto___49575]));

var G__49576 = (i__28178__auto___49575 + (1));
i__28178__auto___49575 = G__49576;
continue;
} else {
}
break;
}

var argseq__28185__auto__ = ((((1) < args__28184__auto__.length))?(new cljs.core.IndexedSeq(args__28184__auto__.slice((1)),(0),null)):null);
return devtools.prefs.simple_merge.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28185__auto__);
});

devtools.prefs.simple_merge.cljs$core$IFn$_invoke$arity$variadic = (function (base_map,maps){
var rmaps = cljs.core.reverse.call(null,maps);
var sentinel = {};
var sentinel_QMARK_ = ((function (rmaps,sentinel){
return (function (p1__49568_SHARP_){
return (p1__49568_SHARP_ === sentinel);
});})(rmaps,sentinel))
;
var merged_keys = cljs.core.dedupe.call(null,cljs.core.sort.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,cljs.core.keys,rmaps))));
var result = base_map;
var todo_keys = merged_keys;
while(true){
if(cljs.core.empty_QMARK_.call(null,todo_keys)){
return result;
} else {
var key = cljs.core.first.call(null,todo_keys);
var val = cljs.core.first.call(null,cljs.core.remove.call(null,sentinel_QMARK_,cljs.core.map.call(null,((function (result,todo_keys,key,rmaps,sentinel,sentinel_QMARK_,merged_keys){
return (function (p1__49569_SHARP_){
return cljs.core.get.call(null,p1__49569_SHARP_,key,sentinel);
});})(result,todo_keys,key,rmaps,sentinel,sentinel_QMARK_,merged_keys))
,rmaps)));
var G__49577 = cljs.core.assoc.call(null,result,key,val);
var G__49578 = cljs.core.rest.call(null,todo_keys);
result = G__49577;
todo_keys = G__49578;
continue;
}
break;
}
});

devtools.prefs.simple_merge.cljs$lang$maxFixedArity = (1);

devtools.prefs.simple_merge.cljs$lang$applyTo = (function (seq49570){
var G__49571 = cljs.core.first.call(null,seq49570);
var seq49570__$1 = cljs.core.next.call(null,seq49570);
return devtools.prefs.simple_merge.cljs$core$IFn$_invoke$arity$variadic(G__49571,seq49570__$1);
});

devtools.prefs.default_config = devtools.defaults.prefs;
devtools.prefs.external_config = cljs.core.PersistentArrayMap.EMPTY;
devtools.prefs.env_config = cljs.core.PersistentArrayMap.EMPTY;
devtools.prefs.initial_config = devtools.prefs.simple_merge.call(null,devtools.prefs.default_config,devtools.prefs.external_config,devtools.prefs.env_config);
devtools.prefs._STAR_prefs_STAR_ = devtools.prefs.initial_config;
devtools.prefs.get_prefs = (function devtools$prefs$get_prefs(){
return devtools.prefs._STAR_prefs_STAR_;
});
devtools.prefs.pref = (function devtools$prefs$pref(key){
return key.call(null,devtools.prefs._STAR_prefs_STAR_);
});
devtools.prefs.set_prefs_BANG_ = (function devtools$prefs$set_prefs_BANG_(new_prefs){
return devtools.prefs._STAR_prefs_STAR_ = new_prefs;
});
devtools.prefs.set_pref_BANG_ = (function devtools$prefs$set_pref_BANG_(key,val){
return devtools.prefs.set_prefs_BANG_.call(null,cljs.core.assoc.call(null,devtools.prefs.get_prefs.call(null),key,val));
});
devtools.prefs.merge_prefs_BANG_ = (function devtools$prefs$merge_prefs_BANG_(m){
return devtools.prefs.set_prefs_BANG_.call(null,cljs.core.merge.call(null,devtools.prefs.get_prefs.call(null),m));
});
devtools.prefs.update_pref_BANG_ = (function devtools$prefs$update_pref_BANG_(var_args){
var args__28184__auto__ = [];
var len__28177__auto___49582 = arguments.length;
var i__28178__auto___49583 = (0);
while(true){
if((i__28178__auto___49583 < len__28177__auto___49582)){
args__28184__auto__.push((arguments[i__28178__auto___49583]));

var G__49584 = (i__28178__auto___49583 + (1));
i__28178__auto___49583 = G__49584;
continue;
} else {
}
break;
}

var argseq__28185__auto__ = ((((2) < args__28184__auto__.length))?(new cljs.core.IndexedSeq(args__28184__auto__.slice((2)),(0),null)):null);
return devtools.prefs.update_pref_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28185__auto__);
});

devtools.prefs.update_pref_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (key,f,args){
var new_val = cljs.core.apply.call(null,f,devtools.prefs.pref.call(null,key),args);
return devtools.prefs.set_pref_BANG_.call(null,key,new_val);
});

devtools.prefs.update_pref_BANG_.cljs$lang$maxFixedArity = (2);

devtools.prefs.update_pref_BANG_.cljs$lang$applyTo = (function (seq49579){
var G__49580 = cljs.core.first.call(null,seq49579);
var seq49579__$1 = cljs.core.next.call(null,seq49579);
var G__49581 = cljs.core.first.call(null,seq49579__$1);
var seq49579__$2 = cljs.core.next.call(null,seq49579__$1);
return devtools.prefs.update_pref_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__49580,G__49581,seq49579__$2);
});


//# sourceMappingURL=prefs.js.map?rel=1501568773844