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
var seq__42109 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__42110 = null;
var count__42111 = (0);
var i__42112 = (0);
while(true){
if((i__42112 < count__42111)){
var vec__42113 = cljs.core._nth.call(null,chunk__42110,i__42112);
var effect_k = cljs.core.nth.call(null,vec__42113,(0),null);
var value = cljs.core.nth.call(null,vec__42113,(1),null);
var temp__4655__auto___42119 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___42119)){
var effect_fn_42120 = temp__4655__auto___42119;
effect_fn_42120.call(null,value);
} else {
}

var G__42121 = seq__42109;
var G__42122 = chunk__42110;
var G__42123 = count__42111;
var G__42124 = (i__42112 + (1));
seq__42109 = G__42121;
chunk__42110 = G__42122;
count__42111 = G__42123;
i__42112 = G__42124;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__42109);
if(temp__4657__auto__){
var seq__42109__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42109__$1)){
var c__37589__auto__ = cljs.core.chunk_first.call(null,seq__42109__$1);
var G__42125 = cljs.core.chunk_rest.call(null,seq__42109__$1);
var G__42126 = c__37589__auto__;
var G__42127 = cljs.core.count.call(null,c__37589__auto__);
var G__42128 = (0);
seq__42109 = G__42125;
chunk__42110 = G__42126;
count__42111 = G__42127;
i__42112 = G__42128;
continue;
} else {
var vec__42116 = cljs.core.first.call(null,seq__42109__$1);
var effect_k = cljs.core.nth.call(null,vec__42116,(0),null);
var value = cljs.core.nth.call(null,vec__42116,(1),null);
var temp__4655__auto___42129 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___42129)){
var effect_fn_42130 = temp__4655__auto___42129;
effect_fn_42130.call(null,value);
} else {
}

var G__42131 = cljs.core.next.call(null,seq__42109__$1);
var G__42132 = null;
var G__42133 = (0);
var G__42134 = (0);
seq__42109 = G__42131;
chunk__42110 = G__42132;
count__42111 = G__42133;
i__42112 = G__42134;
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
var seq__42135 = cljs.core.seq.call(null,value);
var chunk__42136 = null;
var count__42137 = (0);
var i__42138 = (0);
while(true){
if((i__42138 < count__42137)){
var map__42139 = cljs.core._nth.call(null,chunk__42136,i__42138);
var map__42139__$1 = ((((!((map__42139 == null)))?((((map__42139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42139.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42139):map__42139);
var effect = map__42139__$1;
var ms = cljs.core.get.call(null,map__42139__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__42139__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__42135,chunk__42136,count__42137,i__42138,map__42139,map__42139__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__42135,chunk__42136,count__42137,i__42138,map__42139,map__42139__$1,effect,ms,dispatch))
,ms);
}

var G__42143 = seq__42135;
var G__42144 = chunk__42136;
var G__42145 = count__42137;
var G__42146 = (i__42138 + (1));
seq__42135 = G__42143;
chunk__42136 = G__42144;
count__42137 = G__42145;
i__42138 = G__42146;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__42135);
if(temp__4657__auto__){
var seq__42135__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42135__$1)){
var c__37589__auto__ = cljs.core.chunk_first.call(null,seq__42135__$1);
var G__42147 = cljs.core.chunk_rest.call(null,seq__42135__$1);
var G__42148 = c__37589__auto__;
var G__42149 = cljs.core.count.call(null,c__37589__auto__);
var G__42150 = (0);
seq__42135 = G__42147;
chunk__42136 = G__42148;
count__42137 = G__42149;
i__42138 = G__42150;
continue;
} else {
var map__42141 = cljs.core.first.call(null,seq__42135__$1);
var map__42141__$1 = ((((!((map__42141 == null)))?((((map__42141.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42141.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42141):map__42141);
var effect = map__42141__$1;
var ms = cljs.core.get.call(null,map__42141__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__42141__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__42135,chunk__42136,count__42137,i__42138,map__42141,map__42141__$1,effect,ms,dispatch,seq__42135__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__42135,chunk__42136,count__42137,i__42138,map__42141,map__42141__$1,effect,ms,dispatch,seq__42135__$1,temp__4657__auto__))
,ms);
}

var G__42151 = cljs.core.next.call(null,seq__42135__$1);
var G__42152 = null;
var G__42153 = (0);
var G__42154 = (0);
seq__42135 = G__42151;
chunk__42136 = G__42152;
count__42137 = G__42153;
i__42138 = G__42154;
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

var seq__42155 = cljs.core.seq.call(null,value);
var chunk__42156 = null;
var count__42157 = (0);
var i__42158 = (0);
while(true){
if((i__42158 < count__42157)){
var event = cljs.core._nth.call(null,chunk__42156,i__42158);
re_frame.router.dispatch.call(null,event);

var G__42159 = seq__42155;
var G__42160 = chunk__42156;
var G__42161 = count__42157;
var G__42162 = (i__42158 + (1));
seq__42155 = G__42159;
chunk__42156 = G__42160;
count__42157 = G__42161;
i__42158 = G__42162;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__42155);
if(temp__4657__auto__){
var seq__42155__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42155__$1)){
var c__37589__auto__ = cljs.core.chunk_first.call(null,seq__42155__$1);
var G__42163 = cljs.core.chunk_rest.call(null,seq__42155__$1);
var G__42164 = c__37589__auto__;
var G__42165 = cljs.core.count.call(null,c__37589__auto__);
var G__42166 = (0);
seq__42155 = G__42163;
chunk__42156 = G__42164;
count__42157 = G__42165;
i__42158 = G__42166;
continue;
} else {
var event = cljs.core.first.call(null,seq__42155__$1);
re_frame.router.dispatch.call(null,event);

var G__42167 = cljs.core.next.call(null,seq__42155__$1);
var G__42168 = null;
var G__42169 = (0);
var G__42170 = (0);
seq__42155 = G__42167;
chunk__42156 = G__42168;
count__42157 = G__42169;
i__42158 = G__42170;
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
var seq__42171 = cljs.core.seq.call(null,((cljs.core.sequential_QMARK_.call(null,value))?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)));
var chunk__42172 = null;
var count__42173 = (0);
var i__42174 = (0);
while(true){
if((i__42174 < count__42173)){
var event = cljs.core._nth.call(null,chunk__42172,i__42174);
clear_event.call(null,event);

var G__42175 = seq__42171;
var G__42176 = chunk__42172;
var G__42177 = count__42173;
var G__42178 = (i__42174 + (1));
seq__42171 = G__42175;
chunk__42172 = G__42176;
count__42173 = G__42177;
i__42174 = G__42178;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__42171);
if(temp__4657__auto__){
var seq__42171__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42171__$1)){
var c__37589__auto__ = cljs.core.chunk_first.call(null,seq__42171__$1);
var G__42179 = cljs.core.chunk_rest.call(null,seq__42171__$1);
var G__42180 = c__37589__auto__;
var G__42181 = cljs.core.count.call(null,c__37589__auto__);
var G__42182 = (0);
seq__42171 = G__42179;
chunk__42172 = G__42180;
count__42173 = G__42181;
i__42174 = G__42182;
continue;
} else {
var event = cljs.core.first.call(null,seq__42171__$1);
clear_event.call(null,event);

var G__42183 = cljs.core.next.call(null,seq__42171__$1);
var G__42184 = null;
var G__42185 = (0);
var G__42186 = (0);
seq__42171 = G__42183;
chunk__42172 = G__42184;
count__42173 = G__42185;
i__42174 = G__42186;
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

//# sourceMappingURL=fx.js.map?rel=1502846509260