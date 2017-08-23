// Compiled by ClojureScript 1.9.671 {}
goog.provide('re_frame.events');
goog.require('cljs.core');
goog.require('re_frame.db');
goog.require('re_frame.utils');
goog.require('re_frame.interop');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.interceptor');
goog.require('re_frame.trace');
re_frame.events.kind = new cljs.core.Keyword(null,"event","event",301435442);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.events.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * `interceptors` might have nested collections, and contain nil elements.
 *   return a flat collection, with all nils removed.
 *   This function is 9/10 about giving good error messages
 */
re_frame.events.flatten_and_remove_nils = (function re_frame$events$flatten_and_remove_nils(id,interceptors){
var make_chain = (function (p1__41977_SHARP_){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,p1__41977_SHARP_));
});
if(!(re_frame.interop.debug_enabled_QMARK_)){
return make_chain.call(null,interceptors);
} else {
if(cljs.core.coll_QMARK_.call(null,interceptors)){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: when registering "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", expected a collection of interceptors, got:")].join(''),interceptors);
}

var chain = make_chain.call(null,interceptors);
if(cljs.core.empty_QMARK_.call(null,chain)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: when registering"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", given an empty interceptor chain")].join(''));
} else {
}

var temp__4657__auto___41978 = cljs.core.first.call(null,cljs.core.remove.call(null,re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__4657__auto___41978)){
var not_i_41979 = temp__4657__auto___41978;
if(cljs.core.fn_QMARK_.call(null,not_i_41979)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: when registering "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got:")].join(''),not_i_41979);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: when registering "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", expected interceptors, but got:")].join(''),not_i_41979);
}
} else {
}

return chain;
}
});
/**
 * Associate the given event `id` with the given collection of `interceptors`.
 * 
 * `interceptors` may contain nested collections and there may be nils
 * at any level,so process this structure into a simple, nil-less vector
 * before registration.
 * 
 * An `event handler` will likely be at the end of the chain (wrapped in an interceptor).
 */
re_frame.events.register = (function re_frame$events$register(id,interceptors){
return re_frame.registrar.register_handler.call(null,re_frame.events.kind,id,re_frame.events.flatten_and_remove_nils.call(null,id,interceptors));
});
re_frame.events._STAR_handling_STAR_ = null;
/**
 * Given an event vector, look up the associated intercepter chain, and execute it.
 */
re_frame.events.handle = (function re_frame$events$handle(event_v){
var event_id = re_frame.utils.first_in_vector.call(null,event_v);
var temp__4655__auto__ = re_frame.registrar.get_handler.call(null,re_frame.events.kind,event_id,true);
if(cljs.core.truth_(temp__4655__auto__)){
var interceptors = temp__4655__auto__;
if(cljs.core.truth_(re_frame.events._STAR_handling_STAR_)){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: while handling \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(re_frame.events._STAR_handling_STAR_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\", dispatch-sync was called for \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_v),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\". You can't call dispatch-sync within an event handler.")].join(''));
} else {
var _STAR_handling_STAR_41980 = re_frame.events._STAR_handling_STAR_;
re_frame.events._STAR_handling_STAR_ = event_v;

try{if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_41981 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),event_id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event_v], null)], null));

try{try{return re_frame.interceptor.execute.call(null,event_v,interceptors);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__41925__auto___41994 = re_frame.interop.now.call(null);
var duration__41926__auto___41995 = (end__41925__auto___41994 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__41982_41996 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__41983_41997 = null;
var count__41984_41998 = (0);
var i__41985_41999 = (0);
while(true){
if((i__41985_41999 < count__41984_41998)){
var vec__41986_42000 = cljs.core._nth.call(null,chunk__41983_41997,i__41985_41999);
var k__41927__auto___42001 = cljs.core.nth.call(null,vec__41986_42000,(0),null);
var cb__41928__auto___42002 = cljs.core.nth.call(null,vec__41986_42000,(1),null);
try{cb__41928__auto___42002.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__41926__auto___41995,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e41989){if((e41989 instanceof java.lang.Exception)){
var e__41929__auto___42003 = e41989;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__41927__auto___42001,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__41929__auto___42003);
} else {
throw e41989;

}
}
var G__42004 = seq__41982_41996;
var G__42005 = chunk__41983_41997;
var G__42006 = count__41984_41998;
var G__42007 = (i__41985_41999 + (1));
seq__41982_41996 = G__42004;
chunk__41983_41997 = G__42005;
count__41984_41998 = G__42006;
i__41985_41999 = G__42007;
continue;
} else {
var temp__4657__auto___42008 = cljs.core.seq.call(null,seq__41982_41996);
if(temp__4657__auto___42008){
var seq__41982_42009__$1 = temp__4657__auto___42008;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41982_42009__$1)){
var c__37577__auto___42010 = cljs.core.chunk_first.call(null,seq__41982_42009__$1);
var G__42011 = cljs.core.chunk_rest.call(null,seq__41982_42009__$1);
var G__42012 = c__37577__auto___42010;
var G__42013 = cljs.core.count.call(null,c__37577__auto___42010);
var G__42014 = (0);
seq__41982_41996 = G__42011;
chunk__41983_41997 = G__42012;
count__41984_41998 = G__42013;
i__41985_41999 = G__42014;
continue;
} else {
var vec__41990_42015 = cljs.core.first.call(null,seq__41982_42009__$1);
var k__41927__auto___42016 = cljs.core.nth.call(null,vec__41990_42015,(0),null);
var cb__41928__auto___42017 = cljs.core.nth.call(null,vec__41990_42015,(1),null);
try{cb__41928__auto___42017.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__41926__auto___41995,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e41993){if((e41993 instanceof java.lang.Exception)){
var e__41929__auto___42018 = e41993;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__41927__auto___42016,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__41929__auto___42018);
} else {
throw e41993;

}
}
var G__42019 = cljs.core.next.call(null,seq__41982_42009__$1);
var G__42020 = null;
var G__42021 = (0);
var G__42022 = (0);
seq__41982_41996 = G__42019;
chunk__41983_41997 = G__42020;
count__41984_41998 = G__42021;
i__41985_41999 = G__42022;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_41981;
}} else {
return re_frame.interceptor.execute.call(null,event_v,interceptors);
}
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_41980;
}}
} else {
return null;
}
});

//# sourceMappingURL=events.js.map?rel=1503441675112