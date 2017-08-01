// Compiled by ClojureScript 1.9.671 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.register = cljs.core.partial.call(null,re_frame.registrar.register_handler,re_frame.fx.kind);
/**
 * An interceptor which actions a `context's` (side) `:effects`.
 * 
 *   For each key in the `:effects` map, call the `effects handler` previously
 *   registered using `reg-fx`.
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 *   call the registered effects handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
var seq__44986 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__44987 = null;
var count__44988 = (0);
var i__44989 = (0);
while(true){
if((i__44989 < count__44988)){
var vec__44990 = cljs.core._nth.call(null,chunk__44987,i__44989);
var effect_k = cljs.core.nth.call(null,vec__44990,(0),null);
var value = cljs.core.nth.call(null,vec__44990,(1),null);
var temp__4655__auto___44996 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___44996)){
var effect_fn_44997 = temp__4655__auto___44996;
effect_fn_44997.call(null,value);
} else {
}

var G__44998 = seq__44986;
var G__44999 = chunk__44987;
var G__45000 = count__44988;
var G__45001 = (i__44989 + (1));
seq__44986 = G__44998;
chunk__44987 = G__44999;
count__44988 = G__45000;
i__44989 = G__45001;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__44986);
if(temp__4657__auto__){
var seq__44986__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44986__$1)){
var c__27872__auto__ = cljs.core.chunk_first.call(null,seq__44986__$1);
var G__45002 = cljs.core.chunk_rest.call(null,seq__44986__$1);
var G__45003 = c__27872__auto__;
var G__45004 = cljs.core.count.call(null,c__27872__auto__);
var G__45005 = (0);
seq__44986 = G__45002;
chunk__44987 = G__45003;
count__44988 = G__45004;
i__44989 = G__45005;
continue;
} else {
var vec__44993 = cljs.core.first.call(null,seq__44986__$1);
var effect_k = cljs.core.nth.call(null,vec__44993,(0),null);
var value = cljs.core.nth.call(null,vec__44993,(1),null);
var temp__4655__auto___45006 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___45006)){
var effect_fn_45007 = temp__4655__auto___45006;
effect_fn_45007.call(null,value);
} else {
}

var G__45008 = cljs.core.next.call(null,seq__44986__$1);
var G__45009 = null;
var G__45010 = (0);
var G__45011 = (0);
seq__44986 = G__45008;
chunk__44987 = G__45009;
count__44988 = G__45010;
i__44989 = G__45011;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__45012 = cljs.core.seq.call(null,value);
var chunk__45013 = null;
var count__45014 = (0);
var i__45015 = (0);
while(true){
if((i__45015 < count__45014)){
var map__45016 = cljs.core._nth.call(null,chunk__45013,i__45015);
var map__45016__$1 = ((((!((map__45016 == null)))?((((map__45016.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45016.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45016):map__45016);
var effect = map__45016__$1;
var ms = cljs.core.get.call(null,map__45016__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__45016__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__45012,chunk__45013,count__45014,i__45015,map__45016,map__45016__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__45012,chunk__45013,count__45014,i__45015,map__45016,map__45016__$1,effect,ms,dispatch))
,ms);
}

var G__45020 = seq__45012;
var G__45021 = chunk__45013;
var G__45022 = count__45014;
var G__45023 = (i__45015 + (1));
seq__45012 = G__45020;
chunk__45013 = G__45021;
count__45014 = G__45022;
i__45015 = G__45023;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__45012);
if(temp__4657__auto__){
var seq__45012__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45012__$1)){
var c__27872__auto__ = cljs.core.chunk_first.call(null,seq__45012__$1);
var G__45024 = cljs.core.chunk_rest.call(null,seq__45012__$1);
var G__45025 = c__27872__auto__;
var G__45026 = cljs.core.count.call(null,c__27872__auto__);
var G__45027 = (0);
seq__45012 = G__45024;
chunk__45013 = G__45025;
count__45014 = G__45026;
i__45015 = G__45027;
continue;
} else {
var map__45018 = cljs.core.first.call(null,seq__45012__$1);
var map__45018__$1 = ((((!((map__45018 == null)))?((((map__45018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45018.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45018):map__45018);
var effect = map__45018__$1;
var ms = cljs.core.get.call(null,map__45018__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__45018__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__45012,chunk__45013,count__45014,i__45015,map__45018,map__45018__$1,effect,ms,dispatch,seq__45012__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__45012,chunk__45013,count__45014,i__45015,map__45018,map__45018__$1,effect,ms,dispatch,seq__45012__$1,temp__4657__auto__))
,ms);
}

var G__45028 = cljs.core.next.call(null,seq__45012__$1);
var G__45029 = null;
var G__45030 = (0);
var G__45031 = (0);
seq__45012 = G__45028;
chunk__45013 = G__45029;
count__45014 = G__45030;
i__45015 = G__45031;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
}

var seq__45032 = cljs.core.seq.call(null,value);
var chunk__45033 = null;
var count__45034 = (0);
var i__45035 = (0);
while(true){
if((i__45035 < count__45034)){
var event = cljs.core._nth.call(null,chunk__45033,i__45035);
re_frame.router.dispatch.call(null,event);

var G__45036 = seq__45032;
var G__45037 = chunk__45033;
var G__45038 = count__45034;
var G__45039 = (i__45035 + (1));
seq__45032 = G__45036;
chunk__45033 = G__45037;
count__45034 = G__45038;
i__45035 = G__45039;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__45032);
if(temp__4657__auto__){
var seq__45032__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45032__$1)){
var c__27872__auto__ = cljs.core.chunk_first.call(null,seq__45032__$1);
var G__45040 = cljs.core.chunk_rest.call(null,seq__45032__$1);
var G__45041 = c__27872__auto__;
var G__45042 = cljs.core.count.call(null,c__27872__auto__);
var G__45043 = (0);
seq__45032 = G__45040;
chunk__45033 = G__45041;
count__45034 = G__45042;
i__45035 = G__45043;
continue;
} else {
var event = cljs.core.first.call(null,seq__45032__$1);
re_frame.router.dispatch.call(null,event);

var G__45044 = cljs.core.next.call(null,seq__45032__$1);
var G__45045 = null;
var G__45046 = (0);
var G__45047 = (0);
seq__45032 = G__45044;
chunk__45033 = G__45045;
count__45034 = G__45046;
i__45035 = G__45047;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__45048 = cljs.core.seq.call(null,((cljs.core.sequential_QMARK_.call(null,value))?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)));
var chunk__45049 = null;
var count__45050 = (0);
var i__45051 = (0);
while(true){
if((i__45051 < count__45050)){
var event = cljs.core._nth.call(null,chunk__45049,i__45051);
clear_event.call(null,event);

var G__45052 = seq__45048;
var G__45053 = chunk__45049;
var G__45054 = count__45050;
var G__45055 = (i__45051 + (1));
seq__45048 = G__45052;
chunk__45049 = G__45053;
count__45050 = G__45054;
i__45051 = G__45055;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__45048);
if(temp__4657__auto__){
var seq__45048__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45048__$1)){
var c__27872__auto__ = cljs.core.chunk_first.call(null,seq__45048__$1);
var G__45056 = cljs.core.chunk_rest.call(null,seq__45048__$1);
var G__45057 = c__27872__auto__;
var G__45058 = cljs.core.count.call(null,c__27872__auto__);
var G__45059 = (0);
seq__45048 = G__45056;
chunk__45049 = G__45057;
count__45050 = G__45058;
i__45051 = G__45059;
continue;
} else {
var event = cljs.core.first.call(null,seq__45048__$1);
clear_event.call(null,event);

var G__45060 = cljs.core.next.call(null,seq__45048__$1);
var G__45061 = null;
var G__45062 = (0);
var G__45063 = (0);
seq__45048 = G__45060;
chunk__45049 = G__45061;
count__45050 = G__45062;
i__45051 = G__45063;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
}));

//# sourceMappingURL=fx.js.map?rel=1501568768871