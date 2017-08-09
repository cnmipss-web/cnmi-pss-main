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
var seq__43083 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__43084 = null;
var count__43085 = (0);
var i__43086 = (0);
while(true){
if((i__43086 < count__43085)){
var vec__43087 = cljs.core._nth.call(null,chunk__43084,i__43086);
var effect_k = cljs.core.nth.call(null,vec__43087,(0),null);
var value = cljs.core.nth.call(null,vec__43087,(1),null);
var temp__4655__auto___43093 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___43093)){
var effect_fn_43094 = temp__4655__auto___43093;
effect_fn_43094.call(null,value);
} else {
}

var G__43095 = seq__43083;
var G__43096 = chunk__43084;
var G__43097 = count__43085;
var G__43098 = (i__43086 + (1));
seq__43083 = G__43095;
chunk__43084 = G__43096;
count__43085 = G__43097;
i__43086 = G__43098;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__43083);
if(temp__4657__auto__){
var seq__43083__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43083__$1)){
var c__37583__auto__ = cljs.core.chunk_first.call(null,seq__43083__$1);
var G__43099 = cljs.core.chunk_rest.call(null,seq__43083__$1);
var G__43100 = c__37583__auto__;
var G__43101 = cljs.core.count.call(null,c__37583__auto__);
var G__43102 = (0);
seq__43083 = G__43099;
chunk__43084 = G__43100;
count__43085 = G__43101;
i__43086 = G__43102;
continue;
} else {
var vec__43090 = cljs.core.first.call(null,seq__43083__$1);
var effect_k = cljs.core.nth.call(null,vec__43090,(0),null);
var value = cljs.core.nth.call(null,vec__43090,(1),null);
var temp__4655__auto___43103 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___43103)){
var effect_fn_43104 = temp__4655__auto___43103;
effect_fn_43104.call(null,value);
} else {
}

var G__43105 = cljs.core.next.call(null,seq__43083__$1);
var G__43106 = null;
var G__43107 = (0);
var G__43108 = (0);
seq__43083 = G__43105;
chunk__43084 = G__43106;
count__43085 = G__43107;
i__43086 = G__43108;
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
var seq__43109 = cljs.core.seq.call(null,value);
var chunk__43110 = null;
var count__43111 = (0);
var i__43112 = (0);
while(true){
if((i__43112 < count__43111)){
var map__43113 = cljs.core._nth.call(null,chunk__43110,i__43112);
var map__43113__$1 = ((((!((map__43113 == null)))?((((map__43113.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43113.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43113):map__43113);
var effect = map__43113__$1;
var ms = cljs.core.get.call(null,map__43113__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__43113__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__43109,chunk__43110,count__43111,i__43112,map__43113,map__43113__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__43109,chunk__43110,count__43111,i__43112,map__43113,map__43113__$1,effect,ms,dispatch))
,ms);
}

var G__43117 = seq__43109;
var G__43118 = chunk__43110;
var G__43119 = count__43111;
var G__43120 = (i__43112 + (1));
seq__43109 = G__43117;
chunk__43110 = G__43118;
count__43111 = G__43119;
i__43112 = G__43120;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__43109);
if(temp__4657__auto__){
var seq__43109__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43109__$1)){
var c__37583__auto__ = cljs.core.chunk_first.call(null,seq__43109__$1);
var G__43121 = cljs.core.chunk_rest.call(null,seq__43109__$1);
var G__43122 = c__37583__auto__;
var G__43123 = cljs.core.count.call(null,c__37583__auto__);
var G__43124 = (0);
seq__43109 = G__43121;
chunk__43110 = G__43122;
count__43111 = G__43123;
i__43112 = G__43124;
continue;
} else {
var map__43115 = cljs.core.first.call(null,seq__43109__$1);
var map__43115__$1 = ((((!((map__43115 == null)))?((((map__43115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43115.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43115):map__43115);
var effect = map__43115__$1;
var ms = cljs.core.get.call(null,map__43115__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__43115__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__43109,chunk__43110,count__43111,i__43112,map__43115,map__43115__$1,effect,ms,dispatch,seq__43109__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__43109,chunk__43110,count__43111,i__43112,map__43115,map__43115__$1,effect,ms,dispatch,seq__43109__$1,temp__4657__auto__))
,ms);
}

var G__43125 = cljs.core.next.call(null,seq__43109__$1);
var G__43126 = null;
var G__43127 = (0);
var G__43128 = (0);
seq__43109 = G__43125;
chunk__43110 = G__43126;
count__43111 = G__43127;
i__43112 = G__43128;
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

var seq__43129 = cljs.core.seq.call(null,value);
var chunk__43130 = null;
var count__43131 = (0);
var i__43132 = (0);
while(true){
if((i__43132 < count__43131)){
var event = cljs.core._nth.call(null,chunk__43130,i__43132);
re_frame.router.dispatch.call(null,event);

var G__43133 = seq__43129;
var G__43134 = chunk__43130;
var G__43135 = count__43131;
var G__43136 = (i__43132 + (1));
seq__43129 = G__43133;
chunk__43130 = G__43134;
count__43131 = G__43135;
i__43132 = G__43136;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__43129);
if(temp__4657__auto__){
var seq__43129__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43129__$1)){
var c__37583__auto__ = cljs.core.chunk_first.call(null,seq__43129__$1);
var G__43137 = cljs.core.chunk_rest.call(null,seq__43129__$1);
var G__43138 = c__37583__auto__;
var G__43139 = cljs.core.count.call(null,c__37583__auto__);
var G__43140 = (0);
seq__43129 = G__43137;
chunk__43130 = G__43138;
count__43131 = G__43139;
i__43132 = G__43140;
continue;
} else {
var event = cljs.core.first.call(null,seq__43129__$1);
re_frame.router.dispatch.call(null,event);

var G__43141 = cljs.core.next.call(null,seq__43129__$1);
var G__43142 = null;
var G__43143 = (0);
var G__43144 = (0);
seq__43129 = G__43141;
chunk__43130 = G__43142;
count__43131 = G__43143;
i__43132 = G__43144;
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
var seq__43145 = cljs.core.seq.call(null,((cljs.core.sequential_QMARK_.call(null,value))?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)));
var chunk__43146 = null;
var count__43147 = (0);
var i__43148 = (0);
while(true){
if((i__43148 < count__43147)){
var event = cljs.core._nth.call(null,chunk__43146,i__43148);
clear_event.call(null,event);

var G__43149 = seq__43145;
var G__43150 = chunk__43146;
var G__43151 = count__43147;
var G__43152 = (i__43148 + (1));
seq__43145 = G__43149;
chunk__43146 = G__43150;
count__43147 = G__43151;
i__43148 = G__43152;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__43145);
if(temp__4657__auto__){
var seq__43145__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43145__$1)){
var c__37583__auto__ = cljs.core.chunk_first.call(null,seq__43145__$1);
var G__43153 = cljs.core.chunk_rest.call(null,seq__43145__$1);
var G__43154 = c__37583__auto__;
var G__43155 = cljs.core.count.call(null,c__37583__auto__);
var G__43156 = (0);
seq__43145 = G__43153;
chunk__43146 = G__43154;
count__43147 = G__43155;
i__43148 = G__43156;
continue;
} else {
var event = cljs.core.first.call(null,seq__43145__$1);
clear_event.call(null,event);

var G__43157 = cljs.core.next.call(null,seq__43145__$1);
var G__43158 = null;
var G__43159 = (0);
var G__43160 = (0);
seq__43145 = G__43157;
chunk__43146 = G__43158;
count__43147 = G__43159;
i__43148 = G__43160;
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

//# sourceMappingURL=fx.js.map?rel=1502260261978