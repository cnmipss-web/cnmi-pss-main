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
var seq__35234 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__35235 = null;
var count__35236 = (0);
var i__35237 = (0);
while(true){
if((i__35237 < count__35236)){
var vec__35238 = cljs.core._nth.call(null,chunk__35235,i__35237);
var effect_k = cljs.core.nth.call(null,vec__35238,(0),null);
var value = cljs.core.nth.call(null,vec__35238,(1),null);
var temp__4655__auto___35244 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___35244)){
var effect_fn_35245 = temp__4655__auto___35244;
effect_fn_35245.call(null,value);
} else {
}

var G__35246 = seq__35234;
var G__35247 = chunk__35235;
var G__35248 = count__35236;
var G__35249 = (i__35237 + (1));
seq__35234 = G__35246;
chunk__35235 = G__35247;
count__35236 = G__35248;
i__35237 = G__35249;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35234);
if(temp__4657__auto__){
var seq__35234__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35234__$1)){
var c__27776__auto__ = cljs.core.chunk_first.call(null,seq__35234__$1);
var G__35250 = cljs.core.chunk_rest.call(null,seq__35234__$1);
var G__35251 = c__27776__auto__;
var G__35252 = cljs.core.count.call(null,c__27776__auto__);
var G__35253 = (0);
seq__35234 = G__35250;
chunk__35235 = G__35251;
count__35236 = G__35252;
i__35237 = G__35253;
continue;
} else {
var vec__35241 = cljs.core.first.call(null,seq__35234__$1);
var effect_k = cljs.core.nth.call(null,vec__35241,(0),null);
var value = cljs.core.nth.call(null,vec__35241,(1),null);
var temp__4655__auto___35254 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___35254)){
var effect_fn_35255 = temp__4655__auto___35254;
effect_fn_35255.call(null,value);
} else {
}

var G__35256 = cljs.core.next.call(null,seq__35234__$1);
var G__35257 = null;
var G__35258 = (0);
var G__35259 = (0);
seq__35234 = G__35256;
chunk__35235 = G__35257;
count__35236 = G__35258;
i__35237 = G__35259;
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
var seq__35260 = cljs.core.seq.call(null,value);
var chunk__35261 = null;
var count__35262 = (0);
var i__35263 = (0);
while(true){
if((i__35263 < count__35262)){
var map__35264 = cljs.core._nth.call(null,chunk__35261,i__35263);
var map__35264__$1 = ((((!((map__35264 == null)))?((((map__35264.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35264.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35264):map__35264);
var effect = map__35264__$1;
var ms = cljs.core.get.call(null,map__35264__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__35264__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__35260,chunk__35261,count__35262,i__35263,map__35264,map__35264__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__35260,chunk__35261,count__35262,i__35263,map__35264,map__35264__$1,effect,ms,dispatch))
,ms);
}

var G__35268 = seq__35260;
var G__35269 = chunk__35261;
var G__35270 = count__35262;
var G__35271 = (i__35263 + (1));
seq__35260 = G__35268;
chunk__35261 = G__35269;
count__35262 = G__35270;
i__35263 = G__35271;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35260);
if(temp__4657__auto__){
var seq__35260__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35260__$1)){
var c__27776__auto__ = cljs.core.chunk_first.call(null,seq__35260__$1);
var G__35272 = cljs.core.chunk_rest.call(null,seq__35260__$1);
var G__35273 = c__27776__auto__;
var G__35274 = cljs.core.count.call(null,c__27776__auto__);
var G__35275 = (0);
seq__35260 = G__35272;
chunk__35261 = G__35273;
count__35262 = G__35274;
i__35263 = G__35275;
continue;
} else {
var map__35266 = cljs.core.first.call(null,seq__35260__$1);
var map__35266__$1 = ((((!((map__35266 == null)))?((((map__35266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35266.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35266):map__35266);
var effect = map__35266__$1;
var ms = cljs.core.get.call(null,map__35266__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__35266__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__35260,chunk__35261,count__35262,i__35263,map__35266,map__35266__$1,effect,ms,dispatch,seq__35260__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__35260,chunk__35261,count__35262,i__35263,map__35266,map__35266__$1,effect,ms,dispatch,seq__35260__$1,temp__4657__auto__))
,ms);
}

var G__35276 = cljs.core.next.call(null,seq__35260__$1);
var G__35277 = null;
var G__35278 = (0);
var G__35279 = (0);
seq__35260 = G__35276;
chunk__35261 = G__35277;
count__35262 = G__35278;
i__35263 = G__35279;
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

var seq__35280 = cljs.core.seq.call(null,value);
var chunk__35281 = null;
var count__35282 = (0);
var i__35283 = (0);
while(true){
if((i__35283 < count__35282)){
var event = cljs.core._nth.call(null,chunk__35281,i__35283);
re_frame.router.dispatch.call(null,event);

var G__35284 = seq__35280;
var G__35285 = chunk__35281;
var G__35286 = count__35282;
var G__35287 = (i__35283 + (1));
seq__35280 = G__35284;
chunk__35281 = G__35285;
count__35282 = G__35286;
i__35283 = G__35287;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35280);
if(temp__4657__auto__){
var seq__35280__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35280__$1)){
var c__27776__auto__ = cljs.core.chunk_first.call(null,seq__35280__$1);
var G__35288 = cljs.core.chunk_rest.call(null,seq__35280__$1);
var G__35289 = c__27776__auto__;
var G__35290 = cljs.core.count.call(null,c__27776__auto__);
var G__35291 = (0);
seq__35280 = G__35288;
chunk__35281 = G__35289;
count__35282 = G__35290;
i__35283 = G__35291;
continue;
} else {
var event = cljs.core.first.call(null,seq__35280__$1);
re_frame.router.dispatch.call(null,event);

var G__35292 = cljs.core.next.call(null,seq__35280__$1);
var G__35293 = null;
var G__35294 = (0);
var G__35295 = (0);
seq__35280 = G__35292;
chunk__35281 = G__35293;
count__35282 = G__35294;
i__35283 = G__35295;
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
var seq__35296 = cljs.core.seq.call(null,((cljs.core.sequential_QMARK_.call(null,value))?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)));
var chunk__35297 = null;
var count__35298 = (0);
var i__35299 = (0);
while(true){
if((i__35299 < count__35298)){
var event = cljs.core._nth.call(null,chunk__35297,i__35299);
clear_event.call(null,event);

var G__35300 = seq__35296;
var G__35301 = chunk__35297;
var G__35302 = count__35298;
var G__35303 = (i__35299 + (1));
seq__35296 = G__35300;
chunk__35297 = G__35301;
count__35298 = G__35302;
i__35299 = G__35303;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35296);
if(temp__4657__auto__){
var seq__35296__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35296__$1)){
var c__27776__auto__ = cljs.core.chunk_first.call(null,seq__35296__$1);
var G__35304 = cljs.core.chunk_rest.call(null,seq__35296__$1);
var G__35305 = c__27776__auto__;
var G__35306 = cljs.core.count.call(null,c__27776__auto__);
var G__35307 = (0);
seq__35296 = G__35304;
chunk__35297 = G__35305;
count__35298 = G__35306;
i__35299 = G__35307;
continue;
} else {
var event = cljs.core.first.call(null,seq__35296__$1);
clear_event.call(null,event);

var G__35308 = cljs.core.next.call(null,seq__35296__$1);
var G__35309 = null;
var G__35310 = (0);
var G__35311 = (0);
seq__35296 = G__35308;
chunk__35297 = G__35309;
count__35298 = G__35310;
i__35299 = G__35311;
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

//# sourceMappingURL=fx.js.map?rel=1500852800307