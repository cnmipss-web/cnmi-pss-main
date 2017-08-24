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
var seq__42096 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__42097 = null;
var count__42098 = (0);
var i__42099 = (0);
while(true){
if((i__42099 < count__42098)){
var vec__42100 = cljs.core._nth.call(null,chunk__42097,i__42099);
var effect_k = cljs.core.nth.call(null,vec__42100,(0),null);
var value = cljs.core.nth.call(null,vec__42100,(1),null);
var temp__4655__auto___42106 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___42106)){
var effect_fn_42107 = temp__4655__auto___42106;
effect_fn_42107.call(null,value);
} else {
}

var G__42108 = seq__42096;
var G__42109 = chunk__42097;
var G__42110 = count__42098;
var G__42111 = (i__42099 + (1));
seq__42096 = G__42108;
chunk__42097 = G__42109;
count__42098 = G__42110;
i__42099 = G__42111;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__42096);
if(temp__4657__auto__){
var seq__42096__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42096__$1)){
var c__37576__auto__ = cljs.core.chunk_first.call(null,seq__42096__$1);
var G__42112 = cljs.core.chunk_rest.call(null,seq__42096__$1);
var G__42113 = c__37576__auto__;
var G__42114 = cljs.core.count.call(null,c__37576__auto__);
var G__42115 = (0);
seq__42096 = G__42112;
chunk__42097 = G__42113;
count__42098 = G__42114;
i__42099 = G__42115;
continue;
} else {
var vec__42103 = cljs.core.first.call(null,seq__42096__$1);
var effect_k = cljs.core.nth.call(null,vec__42103,(0),null);
var value = cljs.core.nth.call(null,vec__42103,(1),null);
var temp__4655__auto___42116 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___42116)){
var effect_fn_42117 = temp__4655__auto___42116;
effect_fn_42117.call(null,value);
} else {
}

var G__42118 = cljs.core.next.call(null,seq__42096__$1);
var G__42119 = null;
var G__42120 = (0);
var G__42121 = (0);
seq__42096 = G__42118;
chunk__42097 = G__42119;
count__42098 = G__42120;
i__42099 = G__42121;
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
var seq__42122 = cljs.core.seq.call(null,value);
var chunk__42123 = null;
var count__42124 = (0);
var i__42125 = (0);
while(true){
if((i__42125 < count__42124)){
var map__42126 = cljs.core._nth.call(null,chunk__42123,i__42125);
var map__42126__$1 = ((((!((map__42126 == null)))?((((map__42126.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42126.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42126):map__42126);
var effect = map__42126__$1;
var ms = cljs.core.get.call(null,map__42126__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__42126__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__42122,chunk__42123,count__42124,i__42125,map__42126,map__42126__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__42122,chunk__42123,count__42124,i__42125,map__42126,map__42126__$1,effect,ms,dispatch))
,ms);
}

var G__42130 = seq__42122;
var G__42131 = chunk__42123;
var G__42132 = count__42124;
var G__42133 = (i__42125 + (1));
seq__42122 = G__42130;
chunk__42123 = G__42131;
count__42124 = G__42132;
i__42125 = G__42133;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__42122);
if(temp__4657__auto__){
var seq__42122__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42122__$1)){
var c__37576__auto__ = cljs.core.chunk_first.call(null,seq__42122__$1);
var G__42134 = cljs.core.chunk_rest.call(null,seq__42122__$1);
var G__42135 = c__37576__auto__;
var G__42136 = cljs.core.count.call(null,c__37576__auto__);
var G__42137 = (0);
seq__42122 = G__42134;
chunk__42123 = G__42135;
count__42124 = G__42136;
i__42125 = G__42137;
continue;
} else {
var map__42128 = cljs.core.first.call(null,seq__42122__$1);
var map__42128__$1 = ((((!((map__42128 == null)))?((((map__42128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42128.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42128):map__42128);
var effect = map__42128__$1;
var ms = cljs.core.get.call(null,map__42128__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__42128__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__42122,chunk__42123,count__42124,i__42125,map__42128,map__42128__$1,effect,ms,dispatch,seq__42122__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__42122,chunk__42123,count__42124,i__42125,map__42128,map__42128__$1,effect,ms,dispatch,seq__42122__$1,temp__4657__auto__))
,ms);
}

var G__42138 = cljs.core.next.call(null,seq__42122__$1);
var G__42139 = null;
var G__42140 = (0);
var G__42141 = (0);
seq__42122 = G__42138;
chunk__42123 = G__42139;
count__42124 = G__42140;
i__42125 = G__42141;
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

var seq__42142 = cljs.core.seq.call(null,value);
var chunk__42143 = null;
var count__42144 = (0);
var i__42145 = (0);
while(true){
if((i__42145 < count__42144)){
var event = cljs.core._nth.call(null,chunk__42143,i__42145);
re_frame.router.dispatch.call(null,event);

var G__42146 = seq__42142;
var G__42147 = chunk__42143;
var G__42148 = count__42144;
var G__42149 = (i__42145 + (1));
seq__42142 = G__42146;
chunk__42143 = G__42147;
count__42144 = G__42148;
i__42145 = G__42149;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__42142);
if(temp__4657__auto__){
var seq__42142__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42142__$1)){
var c__37576__auto__ = cljs.core.chunk_first.call(null,seq__42142__$1);
var G__42150 = cljs.core.chunk_rest.call(null,seq__42142__$1);
var G__42151 = c__37576__auto__;
var G__42152 = cljs.core.count.call(null,c__37576__auto__);
var G__42153 = (0);
seq__42142 = G__42150;
chunk__42143 = G__42151;
count__42144 = G__42152;
i__42145 = G__42153;
continue;
} else {
var event = cljs.core.first.call(null,seq__42142__$1);
re_frame.router.dispatch.call(null,event);

var G__42154 = cljs.core.next.call(null,seq__42142__$1);
var G__42155 = null;
var G__42156 = (0);
var G__42157 = (0);
seq__42142 = G__42154;
chunk__42143 = G__42155;
count__42144 = G__42156;
i__42145 = G__42157;
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
var seq__42158 = cljs.core.seq.call(null,((cljs.core.sequential_QMARK_.call(null,value))?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)));
var chunk__42159 = null;
var count__42160 = (0);
var i__42161 = (0);
while(true){
if((i__42161 < count__42160)){
var event = cljs.core._nth.call(null,chunk__42159,i__42161);
clear_event.call(null,event);

var G__42162 = seq__42158;
var G__42163 = chunk__42159;
var G__42164 = count__42160;
var G__42165 = (i__42161 + (1));
seq__42158 = G__42162;
chunk__42159 = G__42163;
count__42160 = G__42164;
i__42161 = G__42165;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__42158);
if(temp__4657__auto__){
var seq__42158__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42158__$1)){
var c__37576__auto__ = cljs.core.chunk_first.call(null,seq__42158__$1);
var G__42166 = cljs.core.chunk_rest.call(null,seq__42158__$1);
var G__42167 = c__37576__auto__;
var G__42168 = cljs.core.count.call(null,c__37576__auto__);
var G__42169 = (0);
seq__42158 = G__42166;
chunk__42159 = G__42167;
count__42160 = G__42168;
i__42161 = G__42169;
continue;
} else {
var event = cljs.core.first.call(null,seq__42158__$1);
clear_event.call(null,event);

var G__42170 = cljs.core.next.call(null,seq__42158__$1);
var G__42171 = null;
var G__42172 = (0);
var G__42173 = (0);
seq__42158 = G__42170;
chunk__42159 = G__42171;
count__42160 = G__42172;
i__42161 = G__42173;
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

//# sourceMappingURL=fx.js.map?rel=1503550039781