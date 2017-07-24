// Compiled by ClojureScript 1.9.671 {}
goog.provide('devtools.prefs');
goog.require('cljs.core');
goog.require('devtools.defaults');
devtools.prefs.simple_merge = (function devtools$prefs$simple_merge(var_args){
var args__28088__auto__ = [];
var len__28081__auto___38616 = arguments.length;
var i__28082__auto___38617 = (0);
while(true){
if((i__28082__auto___38617 < len__28081__auto___38616)){
args__28088__auto__.push((arguments[i__28082__auto___38617]));

var G__38618 = (i__28082__auto___38617 + (1));
i__28082__auto___38617 = G__38618;
continue;
} else {
}
break;
}

var argseq__28089__auto__ = ((((1) < args__28088__auto__.length))?(new cljs.core.IndexedSeq(args__28088__auto__.slice((1)),(0),null)):null);
return devtools.prefs.simple_merge.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28089__auto__);
});

devtools.prefs.simple_merge.cljs$core$IFn$_invoke$arity$variadic = (function (base_map,maps){
var rmaps = cljs.core.reverse.call(null,maps);
var sentinel = {};
var sentinel_QMARK_ = ((function (rmaps,sentinel){
return (function (p1__38610_SHARP_){
return (p1__38610_SHARP_ === sentinel);
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
return (function (p1__38611_SHARP_){
return cljs.core.get.call(null,p1__38611_SHARP_,key,sentinel);
});})(result,todo_keys,key,rmaps,sentinel,sentinel_QMARK_,merged_keys))
,rmaps)));
var G__38619 = cljs.core.assoc.call(null,result,key,val);
var G__38620 = cljs.core.rest.call(null,todo_keys);
result = G__38619;
todo_keys = G__38620;
continue;
}
break;
}
});

devtools.prefs.simple_merge.cljs$lang$maxFixedArity = (1);

devtools.prefs.simple_merge.cljs$lang$applyTo = (function (seq38612){
var G__38613 = cljs.core.first.call(null,seq38612);
var seq38612__$1 = cljs.core.next.call(null,seq38612);
return devtools.prefs.simple_merge.cljs$core$IFn$_invoke$arity$variadic(G__38613,seq38612__$1);
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
var args__28088__auto__ = [];
var len__28081__auto___38624 = arguments.length;
var i__28082__auto___38625 = (0);
while(true){
if((i__28082__auto___38625 < len__28081__auto___38624)){
args__28088__auto__.push((arguments[i__28082__auto___38625]));

var G__38626 = (i__28082__auto___38625 + (1));
i__28082__auto___38625 = G__38626;
continue;
} else {
}
break;
}

var argseq__28089__auto__ = ((((2) < args__28088__auto__.length))?(new cljs.core.IndexedSeq(args__28088__auto__.slice((2)),(0),null)):null);
return devtools.prefs.update_pref_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28089__auto__);
});

devtools.prefs.update_pref_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (key,f,args){
var new_val = cljs.core.apply.call(null,f,devtools.prefs.pref.call(null,key),args);
return devtools.prefs.set_pref_BANG_.call(null,key,new_val);
});

devtools.prefs.update_pref_BANG_.cljs$lang$maxFixedArity = (2);

devtools.prefs.update_pref_BANG_.cljs$lang$applyTo = (function (seq38621){
var G__38622 = cljs.core.first.call(null,seq38621);
var seq38621__$1 = cljs.core.next.call(null,seq38621);
var G__38623 = cljs.core.first.call(null,seq38621__$1);
var seq38621__$2 = cljs.core.next.call(null,seq38621__$1);
return devtools.prefs.update_pref_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__38622,G__38623,seq38621__$2);
});


//# sourceMappingURL=prefs.js.map?rel=1500852804165