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
var seq__31805 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__31806 = null;
var count__31807 = (0);
var i__31808 = (0);
while(true){
if((i__31808 < count__31807)){
var vec__31809 = cljs.core._nth.call(null,chunk__31806,i__31808);
var effect_k = cljs.core.nth.call(null,vec__31809,(0),null);
var value = cljs.core.nth.call(null,vec__31809,(1),null);
var temp__4655__auto___31815 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___31815)){
var effect_fn_31816 = temp__4655__auto___31815;
effect_fn_31816.call(null,value);
} else {
}

var G__31817 = seq__31805;
var G__31818 = chunk__31806;
var G__31819 = count__31807;
var G__31820 = (i__31808 + (1));
seq__31805 = G__31817;
chunk__31806 = G__31818;
count__31807 = G__31819;
i__31808 = G__31820;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31805);
if(temp__4657__auto__){
var seq__31805__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31805__$1)){
var c__27874__auto__ = cljs.core.chunk_first.call(null,seq__31805__$1);
var G__31821 = cljs.core.chunk_rest.call(null,seq__31805__$1);
var G__31822 = c__27874__auto__;
var G__31823 = cljs.core.count.call(null,c__27874__auto__);
var G__31824 = (0);
seq__31805 = G__31821;
chunk__31806 = G__31822;
count__31807 = G__31823;
i__31808 = G__31824;
continue;
} else {
var vec__31812 = cljs.core.first.call(null,seq__31805__$1);
var effect_k = cljs.core.nth.call(null,vec__31812,(0),null);
var value = cljs.core.nth.call(null,vec__31812,(1),null);
var temp__4655__auto___31825 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___31825)){
var effect_fn_31826 = temp__4655__auto___31825;
effect_fn_31826.call(null,value);
} else {
}

var G__31827 = cljs.core.next.call(null,seq__31805__$1);
var G__31828 = null;
var G__31829 = (0);
var G__31830 = (0);
seq__31805 = G__31827;
chunk__31806 = G__31828;
count__31807 = G__31829;
i__31808 = G__31830;
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
var seq__31831 = cljs.core.seq.call(null,value);
var chunk__31832 = null;
var count__31833 = (0);
var i__31834 = (0);
while(true){
if((i__31834 < count__31833)){
var map__31835 = cljs.core._nth.call(null,chunk__31832,i__31834);
var map__31835__$1 = ((((!((map__31835 == null)))?((((map__31835.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31835.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31835):map__31835);
var effect = map__31835__$1;
var ms = cljs.core.get.call(null,map__31835__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__31835__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__31831,chunk__31832,count__31833,i__31834,map__31835,map__31835__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__31831,chunk__31832,count__31833,i__31834,map__31835,map__31835__$1,effect,ms,dispatch))
,ms);
}

var G__31839 = seq__31831;
var G__31840 = chunk__31832;
var G__31841 = count__31833;
var G__31842 = (i__31834 + (1));
seq__31831 = G__31839;
chunk__31832 = G__31840;
count__31833 = G__31841;
i__31834 = G__31842;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31831);
if(temp__4657__auto__){
var seq__31831__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31831__$1)){
var c__27874__auto__ = cljs.core.chunk_first.call(null,seq__31831__$1);
var G__31843 = cljs.core.chunk_rest.call(null,seq__31831__$1);
var G__31844 = c__27874__auto__;
var G__31845 = cljs.core.count.call(null,c__27874__auto__);
var G__31846 = (0);
seq__31831 = G__31843;
chunk__31832 = G__31844;
count__31833 = G__31845;
i__31834 = G__31846;
continue;
} else {
var map__31837 = cljs.core.first.call(null,seq__31831__$1);
var map__31837__$1 = ((((!((map__31837 == null)))?((((map__31837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31837.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31837):map__31837);
var effect = map__31837__$1;
var ms = cljs.core.get.call(null,map__31837__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__31837__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__31831,chunk__31832,count__31833,i__31834,map__31837,map__31837__$1,effect,ms,dispatch,seq__31831__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__31831,chunk__31832,count__31833,i__31834,map__31837,map__31837__$1,effect,ms,dispatch,seq__31831__$1,temp__4657__auto__))
,ms);
}

var G__31847 = cljs.core.next.call(null,seq__31831__$1);
var G__31848 = null;
var G__31849 = (0);
var G__31850 = (0);
seq__31831 = G__31847;
chunk__31832 = G__31848;
count__31833 = G__31849;
i__31834 = G__31850;
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

var seq__31851 = cljs.core.seq.call(null,value);
var chunk__31852 = null;
var count__31853 = (0);
var i__31854 = (0);
while(true){
if((i__31854 < count__31853)){
var event = cljs.core._nth.call(null,chunk__31852,i__31854);
re_frame.router.dispatch.call(null,event);

var G__31855 = seq__31851;
var G__31856 = chunk__31852;
var G__31857 = count__31853;
var G__31858 = (i__31854 + (1));
seq__31851 = G__31855;
chunk__31852 = G__31856;
count__31853 = G__31857;
i__31854 = G__31858;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31851);
if(temp__4657__auto__){
var seq__31851__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31851__$1)){
var c__27874__auto__ = cljs.core.chunk_first.call(null,seq__31851__$1);
var G__31859 = cljs.core.chunk_rest.call(null,seq__31851__$1);
var G__31860 = c__27874__auto__;
var G__31861 = cljs.core.count.call(null,c__27874__auto__);
var G__31862 = (0);
seq__31851 = G__31859;
chunk__31852 = G__31860;
count__31853 = G__31861;
i__31854 = G__31862;
continue;
} else {
var event = cljs.core.first.call(null,seq__31851__$1);
re_frame.router.dispatch.call(null,event);

var G__31863 = cljs.core.next.call(null,seq__31851__$1);
var G__31864 = null;
var G__31865 = (0);
var G__31866 = (0);
seq__31851 = G__31863;
chunk__31852 = G__31864;
count__31853 = G__31865;
i__31854 = G__31866;
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
var seq__31867 = cljs.core.seq.call(null,((cljs.core.sequential_QMARK_.call(null,value))?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)));
var chunk__31868 = null;
var count__31869 = (0);
var i__31870 = (0);
while(true){
if((i__31870 < count__31869)){
var event = cljs.core._nth.call(null,chunk__31868,i__31870);
clear_event.call(null,event);

var G__31871 = seq__31867;
var G__31872 = chunk__31868;
var G__31873 = count__31869;
var G__31874 = (i__31870 + (1));
seq__31867 = G__31871;
chunk__31868 = G__31872;
count__31869 = G__31873;
i__31870 = G__31874;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31867);
if(temp__4657__auto__){
var seq__31867__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31867__$1)){
var c__27874__auto__ = cljs.core.chunk_first.call(null,seq__31867__$1);
var G__31875 = cljs.core.chunk_rest.call(null,seq__31867__$1);
var G__31876 = c__27874__auto__;
var G__31877 = cljs.core.count.call(null,c__27874__auto__);
var G__31878 = (0);
seq__31867 = G__31875;
chunk__31868 = G__31876;
count__31869 = G__31877;
i__31870 = G__31878;
continue;
} else {
var event = cljs.core.first.call(null,seq__31867__$1);
clear_event.call(null,event);

var G__31879 = cljs.core.next.call(null,seq__31867__$1);
var G__31880 = null;
var G__31881 = (0);
var G__31882 = (0);
seq__31867 = G__31879;
chunk__31868 = G__31880;
count__31869 = G__31881;
i__31870 = G__31882;
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

//# sourceMappingURL=fx.js.map?rel=1502330252523