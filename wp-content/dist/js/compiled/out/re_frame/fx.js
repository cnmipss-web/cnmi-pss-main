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
var seq__42097 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__42098 = null;
var count__42099 = (0);
var i__42100 = (0);
while(true){
if((i__42100 < count__42099)){
var vec__42101 = cljs.core._nth.call(null,chunk__42098,i__42100);
var effect_k = cljs.core.nth.call(null,vec__42101,(0),null);
var value = cljs.core.nth.call(null,vec__42101,(1),null);
var temp__4655__auto___42107 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___42107)){
var effect_fn_42108 = temp__4655__auto___42107;
effect_fn_42108.call(null,value);
} else {
}

var G__42109 = seq__42097;
var G__42110 = chunk__42098;
var G__42111 = count__42099;
var G__42112 = (i__42100 + (1));
seq__42097 = G__42109;
chunk__42098 = G__42110;
count__42099 = G__42111;
i__42100 = G__42112;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__42097);
if(temp__4657__auto__){
var seq__42097__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42097__$1)){
var c__37577__auto__ = cljs.core.chunk_first.call(null,seq__42097__$1);
var G__42113 = cljs.core.chunk_rest.call(null,seq__42097__$1);
var G__42114 = c__37577__auto__;
var G__42115 = cljs.core.count.call(null,c__37577__auto__);
var G__42116 = (0);
seq__42097 = G__42113;
chunk__42098 = G__42114;
count__42099 = G__42115;
i__42100 = G__42116;
continue;
} else {
var vec__42104 = cljs.core.first.call(null,seq__42097__$1);
var effect_k = cljs.core.nth.call(null,vec__42104,(0),null);
var value = cljs.core.nth.call(null,vec__42104,(1),null);
var temp__4655__auto___42117 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___42117)){
var effect_fn_42118 = temp__4655__auto___42117;
effect_fn_42118.call(null,value);
} else {
}

var G__42119 = cljs.core.next.call(null,seq__42097__$1);
var G__42120 = null;
var G__42121 = (0);
var G__42122 = (0);
seq__42097 = G__42119;
chunk__42098 = G__42120;
count__42099 = G__42121;
i__42100 = G__42122;
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
var seq__42123 = cljs.core.seq.call(null,value);
var chunk__42124 = null;
var count__42125 = (0);
var i__42126 = (0);
while(true){
if((i__42126 < count__42125)){
var map__42127 = cljs.core._nth.call(null,chunk__42124,i__42126);
var map__42127__$1 = ((((!((map__42127 == null)))?((((map__42127.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42127.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42127):map__42127);
var effect = map__42127__$1;
var ms = cljs.core.get.call(null,map__42127__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__42127__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__42123,chunk__42124,count__42125,i__42126,map__42127,map__42127__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__42123,chunk__42124,count__42125,i__42126,map__42127,map__42127__$1,effect,ms,dispatch))
,ms);
}

var G__42131 = seq__42123;
var G__42132 = chunk__42124;
var G__42133 = count__42125;
var G__42134 = (i__42126 + (1));
seq__42123 = G__42131;
chunk__42124 = G__42132;
count__42125 = G__42133;
i__42126 = G__42134;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__42123);
if(temp__4657__auto__){
var seq__42123__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42123__$1)){
var c__37577__auto__ = cljs.core.chunk_first.call(null,seq__42123__$1);
var G__42135 = cljs.core.chunk_rest.call(null,seq__42123__$1);
var G__42136 = c__37577__auto__;
var G__42137 = cljs.core.count.call(null,c__37577__auto__);
var G__42138 = (0);
seq__42123 = G__42135;
chunk__42124 = G__42136;
count__42125 = G__42137;
i__42126 = G__42138;
continue;
} else {
var map__42129 = cljs.core.first.call(null,seq__42123__$1);
var map__42129__$1 = ((((!((map__42129 == null)))?((((map__42129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42129.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42129):map__42129);
var effect = map__42129__$1;
var ms = cljs.core.get.call(null,map__42129__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__42129__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__42123,chunk__42124,count__42125,i__42126,map__42129,map__42129__$1,effect,ms,dispatch,seq__42123__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__42123,chunk__42124,count__42125,i__42126,map__42129,map__42129__$1,effect,ms,dispatch,seq__42123__$1,temp__4657__auto__))
,ms);
}

var G__42139 = cljs.core.next.call(null,seq__42123__$1);
var G__42140 = null;
var G__42141 = (0);
var G__42142 = (0);
seq__42123 = G__42139;
chunk__42124 = G__42140;
count__42125 = G__42141;
i__42126 = G__42142;
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

var seq__42143 = cljs.core.seq.call(null,value);
var chunk__42144 = null;
var count__42145 = (0);
var i__42146 = (0);
while(true){
if((i__42146 < count__42145)){
var event = cljs.core._nth.call(null,chunk__42144,i__42146);
re_frame.router.dispatch.call(null,event);

var G__42147 = seq__42143;
var G__42148 = chunk__42144;
var G__42149 = count__42145;
var G__42150 = (i__42146 + (1));
seq__42143 = G__42147;
chunk__42144 = G__42148;
count__42145 = G__42149;
i__42146 = G__42150;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__42143);
if(temp__4657__auto__){
var seq__42143__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42143__$1)){
var c__37577__auto__ = cljs.core.chunk_first.call(null,seq__42143__$1);
var G__42151 = cljs.core.chunk_rest.call(null,seq__42143__$1);
var G__42152 = c__37577__auto__;
var G__42153 = cljs.core.count.call(null,c__37577__auto__);
var G__42154 = (0);
seq__42143 = G__42151;
chunk__42144 = G__42152;
count__42145 = G__42153;
i__42146 = G__42154;
continue;
} else {
var event = cljs.core.first.call(null,seq__42143__$1);
re_frame.router.dispatch.call(null,event);

var G__42155 = cljs.core.next.call(null,seq__42143__$1);
var G__42156 = null;
var G__42157 = (0);
var G__42158 = (0);
seq__42143 = G__42155;
chunk__42144 = G__42156;
count__42145 = G__42157;
i__42146 = G__42158;
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
var seq__42159 = cljs.core.seq.call(null,((cljs.core.sequential_QMARK_.call(null,value))?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)));
var chunk__42160 = null;
var count__42161 = (0);
var i__42162 = (0);
while(true){
if((i__42162 < count__42161)){
var event = cljs.core._nth.call(null,chunk__42160,i__42162);
clear_event.call(null,event);

var G__42163 = seq__42159;
var G__42164 = chunk__42160;
var G__42165 = count__42161;
var G__42166 = (i__42162 + (1));
seq__42159 = G__42163;
chunk__42160 = G__42164;
count__42161 = G__42165;
i__42162 = G__42166;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__42159);
if(temp__4657__auto__){
var seq__42159__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42159__$1)){
var c__37577__auto__ = cljs.core.chunk_first.call(null,seq__42159__$1);
var G__42167 = cljs.core.chunk_rest.call(null,seq__42159__$1);
var G__42168 = c__37577__auto__;
var G__42169 = cljs.core.count.call(null,c__37577__auto__);
var G__42170 = (0);
seq__42159 = G__42167;
chunk__42160 = G__42168;
count__42161 = G__42169;
i__42162 = G__42170;
continue;
} else {
var event = cljs.core.first.call(null,seq__42159__$1);
clear_event.call(null,event);

var G__42171 = cljs.core.next.call(null,seq__42159__$1);
var G__42172 = null;
var G__42173 = (0);
var G__42174 = (0);
seq__42159 = G__42171;
chunk__42160 = G__42172;
count__42161 = G__42173;
i__42162 = G__42174;
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

//# sourceMappingURL=fx.js.map?rel=1503441675271