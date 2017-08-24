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
var seq__40183 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__40184 = null;
var count__40185 = (0);
var i__40186 = (0);
while(true){
if((i__40186 < count__40185)){
var vec__40187 = cljs.core._nth.call(null,chunk__40184,i__40186);
var effect_k = cljs.core.nth.call(null,vec__40187,(0),null);
var value = cljs.core.nth.call(null,vec__40187,(1),null);
var temp__4655__auto___40193 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___40193)){
var effect_fn_40194 = temp__4655__auto___40193;
effect_fn_40194.call(null,value);
} else {
}

var G__40195 = seq__40183;
var G__40196 = chunk__40184;
var G__40197 = count__40185;
var G__40198 = (i__40186 + (1));
seq__40183 = G__40195;
chunk__40184 = G__40196;
count__40185 = G__40197;
i__40186 = G__40198;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__40183);
if(temp__4657__auto__){
var seq__40183__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40183__$1)){
var c__37576__auto__ = cljs.core.chunk_first.call(null,seq__40183__$1);
var G__40199 = cljs.core.chunk_rest.call(null,seq__40183__$1);
var G__40200 = c__37576__auto__;
var G__40201 = cljs.core.count.call(null,c__37576__auto__);
var G__40202 = (0);
seq__40183 = G__40199;
chunk__40184 = G__40200;
count__40185 = G__40201;
i__40186 = G__40202;
continue;
} else {
var vec__40190 = cljs.core.first.call(null,seq__40183__$1);
var effect_k = cljs.core.nth.call(null,vec__40190,(0),null);
var value = cljs.core.nth.call(null,vec__40190,(1),null);
var temp__4655__auto___40203 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___40203)){
var effect_fn_40204 = temp__4655__auto___40203;
effect_fn_40204.call(null,value);
} else {
}

var G__40205 = cljs.core.next.call(null,seq__40183__$1);
var G__40206 = null;
var G__40207 = (0);
var G__40208 = (0);
seq__40183 = G__40205;
chunk__40184 = G__40206;
count__40185 = G__40207;
i__40186 = G__40208;
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
var seq__40209 = cljs.core.seq.call(null,value);
var chunk__40210 = null;
var count__40211 = (0);
var i__40212 = (0);
while(true){
if((i__40212 < count__40211)){
var map__40213 = cljs.core._nth.call(null,chunk__40210,i__40212);
var map__40213__$1 = ((((!((map__40213 == null)))?((((map__40213.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40213.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40213):map__40213);
var effect = map__40213__$1;
var ms = cljs.core.get.call(null,map__40213__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__40213__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__40209,chunk__40210,count__40211,i__40212,map__40213,map__40213__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__40209,chunk__40210,count__40211,i__40212,map__40213,map__40213__$1,effect,ms,dispatch))
,ms);
}

var G__40217 = seq__40209;
var G__40218 = chunk__40210;
var G__40219 = count__40211;
var G__40220 = (i__40212 + (1));
seq__40209 = G__40217;
chunk__40210 = G__40218;
count__40211 = G__40219;
i__40212 = G__40220;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__40209);
if(temp__4657__auto__){
var seq__40209__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40209__$1)){
var c__37576__auto__ = cljs.core.chunk_first.call(null,seq__40209__$1);
var G__40221 = cljs.core.chunk_rest.call(null,seq__40209__$1);
var G__40222 = c__37576__auto__;
var G__40223 = cljs.core.count.call(null,c__37576__auto__);
var G__40224 = (0);
seq__40209 = G__40221;
chunk__40210 = G__40222;
count__40211 = G__40223;
i__40212 = G__40224;
continue;
} else {
var map__40215 = cljs.core.first.call(null,seq__40209__$1);
var map__40215__$1 = ((((!((map__40215 == null)))?((((map__40215.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40215.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40215):map__40215);
var effect = map__40215__$1;
var ms = cljs.core.get.call(null,map__40215__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__40215__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__40209,chunk__40210,count__40211,i__40212,map__40215,map__40215__$1,effect,ms,dispatch,seq__40209__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__40209,chunk__40210,count__40211,i__40212,map__40215,map__40215__$1,effect,ms,dispatch,seq__40209__$1,temp__4657__auto__))
,ms);
}

var G__40225 = cljs.core.next.call(null,seq__40209__$1);
var G__40226 = null;
var G__40227 = (0);
var G__40228 = (0);
seq__40209 = G__40225;
chunk__40210 = G__40226;
count__40211 = G__40227;
i__40212 = G__40228;
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

var seq__40229 = cljs.core.seq.call(null,value);
var chunk__40230 = null;
var count__40231 = (0);
var i__40232 = (0);
while(true){
if((i__40232 < count__40231)){
var event = cljs.core._nth.call(null,chunk__40230,i__40232);
re_frame.router.dispatch.call(null,event);

var G__40233 = seq__40229;
var G__40234 = chunk__40230;
var G__40235 = count__40231;
var G__40236 = (i__40232 + (1));
seq__40229 = G__40233;
chunk__40230 = G__40234;
count__40231 = G__40235;
i__40232 = G__40236;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__40229);
if(temp__4657__auto__){
var seq__40229__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40229__$1)){
var c__37576__auto__ = cljs.core.chunk_first.call(null,seq__40229__$1);
var G__40237 = cljs.core.chunk_rest.call(null,seq__40229__$1);
var G__40238 = c__37576__auto__;
var G__40239 = cljs.core.count.call(null,c__37576__auto__);
var G__40240 = (0);
seq__40229 = G__40237;
chunk__40230 = G__40238;
count__40231 = G__40239;
i__40232 = G__40240;
continue;
} else {
var event = cljs.core.first.call(null,seq__40229__$1);
re_frame.router.dispatch.call(null,event);

var G__40241 = cljs.core.next.call(null,seq__40229__$1);
var G__40242 = null;
var G__40243 = (0);
var G__40244 = (0);
seq__40229 = G__40241;
chunk__40230 = G__40242;
count__40231 = G__40243;
i__40232 = G__40244;
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
var seq__40245 = cljs.core.seq.call(null,((cljs.core.sequential_QMARK_.call(null,value))?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)));
var chunk__40246 = null;
var count__40247 = (0);
var i__40248 = (0);
while(true){
if((i__40248 < count__40247)){
var event = cljs.core._nth.call(null,chunk__40246,i__40248);
clear_event.call(null,event);

var G__40249 = seq__40245;
var G__40250 = chunk__40246;
var G__40251 = count__40247;
var G__40252 = (i__40248 + (1));
seq__40245 = G__40249;
chunk__40246 = G__40250;
count__40247 = G__40251;
i__40248 = G__40252;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__40245);
if(temp__4657__auto__){
var seq__40245__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40245__$1)){
var c__37576__auto__ = cljs.core.chunk_first.call(null,seq__40245__$1);
var G__40253 = cljs.core.chunk_rest.call(null,seq__40245__$1);
var G__40254 = c__37576__auto__;
var G__40255 = cljs.core.count.call(null,c__37576__auto__);
var G__40256 = (0);
seq__40245 = G__40253;
chunk__40246 = G__40254;
count__40247 = G__40255;
i__40248 = G__40256;
continue;
} else {
var event = cljs.core.first.call(null,seq__40245__$1);
clear_event.call(null,event);

var G__40257 = cljs.core.next.call(null,seq__40245__$1);
var G__40258 = null;
var G__40259 = (0);
var G__40260 = (0);
seq__40245 = G__40257;
chunk__40246 = G__40258;
count__40247 = G__40259;
i__40248 = G__40260;
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

//# sourceMappingURL=fx.js.map?rel=1503532138533