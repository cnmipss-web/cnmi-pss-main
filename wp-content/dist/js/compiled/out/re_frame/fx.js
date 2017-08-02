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
var seq__31797 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__31798 = null;
var count__31799 = (0);
var i__31800 = (0);
while(true){
if((i__31800 < count__31799)){
var vec__31801 = cljs.core._nth.call(null,chunk__31798,i__31800);
var effect_k = cljs.core.nth.call(null,vec__31801,(0),null);
var value = cljs.core.nth.call(null,vec__31801,(1),null);
var temp__4655__auto___31807 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___31807)){
var effect_fn_31808 = temp__4655__auto___31807;
effect_fn_31808.call(null,value);
} else {
}

var G__31809 = seq__31797;
var G__31810 = chunk__31798;
var G__31811 = count__31799;
var G__31812 = (i__31800 + (1));
seq__31797 = G__31809;
chunk__31798 = G__31810;
count__31799 = G__31811;
i__31800 = G__31812;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31797);
if(temp__4657__auto__){
var seq__31797__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31797__$1)){
var c__27872__auto__ = cljs.core.chunk_first.call(null,seq__31797__$1);
var G__31813 = cljs.core.chunk_rest.call(null,seq__31797__$1);
var G__31814 = c__27872__auto__;
var G__31815 = cljs.core.count.call(null,c__27872__auto__);
var G__31816 = (0);
seq__31797 = G__31813;
chunk__31798 = G__31814;
count__31799 = G__31815;
i__31800 = G__31816;
continue;
} else {
var vec__31804 = cljs.core.first.call(null,seq__31797__$1);
var effect_k = cljs.core.nth.call(null,vec__31804,(0),null);
var value = cljs.core.nth.call(null,vec__31804,(1),null);
var temp__4655__auto___31817 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___31817)){
var effect_fn_31818 = temp__4655__auto___31817;
effect_fn_31818.call(null,value);
} else {
}

var G__31819 = cljs.core.next.call(null,seq__31797__$1);
var G__31820 = null;
var G__31821 = (0);
var G__31822 = (0);
seq__31797 = G__31819;
chunk__31798 = G__31820;
count__31799 = G__31821;
i__31800 = G__31822;
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
var seq__31823 = cljs.core.seq.call(null,value);
var chunk__31824 = null;
var count__31825 = (0);
var i__31826 = (0);
while(true){
if((i__31826 < count__31825)){
var map__31827 = cljs.core._nth.call(null,chunk__31824,i__31826);
var map__31827__$1 = ((((!((map__31827 == null)))?((((map__31827.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31827.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31827):map__31827);
var effect = map__31827__$1;
var ms = cljs.core.get.call(null,map__31827__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__31827__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__31823,chunk__31824,count__31825,i__31826,map__31827,map__31827__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__31823,chunk__31824,count__31825,i__31826,map__31827,map__31827__$1,effect,ms,dispatch))
,ms);
}

var G__31831 = seq__31823;
var G__31832 = chunk__31824;
var G__31833 = count__31825;
var G__31834 = (i__31826 + (1));
seq__31823 = G__31831;
chunk__31824 = G__31832;
count__31825 = G__31833;
i__31826 = G__31834;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31823);
if(temp__4657__auto__){
var seq__31823__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31823__$1)){
var c__27872__auto__ = cljs.core.chunk_first.call(null,seq__31823__$1);
var G__31835 = cljs.core.chunk_rest.call(null,seq__31823__$1);
var G__31836 = c__27872__auto__;
var G__31837 = cljs.core.count.call(null,c__27872__auto__);
var G__31838 = (0);
seq__31823 = G__31835;
chunk__31824 = G__31836;
count__31825 = G__31837;
i__31826 = G__31838;
continue;
} else {
var map__31829 = cljs.core.first.call(null,seq__31823__$1);
var map__31829__$1 = ((((!((map__31829 == null)))?((((map__31829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31829.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31829):map__31829);
var effect = map__31829__$1;
var ms = cljs.core.get.call(null,map__31829__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__31829__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__31823,chunk__31824,count__31825,i__31826,map__31829,map__31829__$1,effect,ms,dispatch,seq__31823__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__31823,chunk__31824,count__31825,i__31826,map__31829,map__31829__$1,effect,ms,dispatch,seq__31823__$1,temp__4657__auto__))
,ms);
}

var G__31839 = cljs.core.next.call(null,seq__31823__$1);
var G__31840 = null;
var G__31841 = (0);
var G__31842 = (0);
seq__31823 = G__31839;
chunk__31824 = G__31840;
count__31825 = G__31841;
i__31826 = G__31842;
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

var seq__31843 = cljs.core.seq.call(null,value);
var chunk__31844 = null;
var count__31845 = (0);
var i__31846 = (0);
while(true){
if((i__31846 < count__31845)){
var event = cljs.core._nth.call(null,chunk__31844,i__31846);
re_frame.router.dispatch.call(null,event);

var G__31847 = seq__31843;
var G__31848 = chunk__31844;
var G__31849 = count__31845;
var G__31850 = (i__31846 + (1));
seq__31843 = G__31847;
chunk__31844 = G__31848;
count__31845 = G__31849;
i__31846 = G__31850;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31843);
if(temp__4657__auto__){
var seq__31843__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31843__$1)){
var c__27872__auto__ = cljs.core.chunk_first.call(null,seq__31843__$1);
var G__31851 = cljs.core.chunk_rest.call(null,seq__31843__$1);
var G__31852 = c__27872__auto__;
var G__31853 = cljs.core.count.call(null,c__27872__auto__);
var G__31854 = (0);
seq__31843 = G__31851;
chunk__31844 = G__31852;
count__31845 = G__31853;
i__31846 = G__31854;
continue;
} else {
var event = cljs.core.first.call(null,seq__31843__$1);
re_frame.router.dispatch.call(null,event);

var G__31855 = cljs.core.next.call(null,seq__31843__$1);
var G__31856 = null;
var G__31857 = (0);
var G__31858 = (0);
seq__31843 = G__31855;
chunk__31844 = G__31856;
count__31845 = G__31857;
i__31846 = G__31858;
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
var seq__31859 = cljs.core.seq.call(null,((cljs.core.sequential_QMARK_.call(null,value))?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)));
var chunk__31860 = null;
var count__31861 = (0);
var i__31862 = (0);
while(true){
if((i__31862 < count__31861)){
var event = cljs.core._nth.call(null,chunk__31860,i__31862);
clear_event.call(null,event);

var G__31863 = seq__31859;
var G__31864 = chunk__31860;
var G__31865 = count__31861;
var G__31866 = (i__31862 + (1));
seq__31859 = G__31863;
chunk__31860 = G__31864;
count__31861 = G__31865;
i__31862 = G__31866;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31859);
if(temp__4657__auto__){
var seq__31859__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31859__$1)){
var c__27872__auto__ = cljs.core.chunk_first.call(null,seq__31859__$1);
var G__31867 = cljs.core.chunk_rest.call(null,seq__31859__$1);
var G__31868 = c__27872__auto__;
var G__31869 = cljs.core.count.call(null,c__27872__auto__);
var G__31870 = (0);
seq__31859 = G__31867;
chunk__31860 = G__31868;
count__31861 = G__31869;
i__31862 = G__31870;
continue;
} else {
var event = cljs.core.first.call(null,seq__31859__$1);
clear_event.call(null,event);

var G__31871 = cljs.core.next.call(null,seq__31859__$1);
var G__31872 = null;
var G__31873 = (0);
var G__31874 = (0);
seq__31859 = G__31871;
chunk__31860 = G__31872;
count__31861 = G__31873;
i__31862 = G__31874;
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

//# sourceMappingURL=fx.js.map?rel=1501628488354