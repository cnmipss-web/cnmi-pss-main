// Compiled by ClojureScript 1.9.229 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__60479__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__60479 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__60480__i = 0, G__60480__a = new Array(arguments.length -  0);
while (G__60480__i < G__60480__a.length) {G__60480__a[G__60480__i] = arguments[G__60480__i + 0]; ++G__60480__i;}
  args = new cljs.core.IndexedSeq(G__60480__a,0);
} 
return G__60479__delegate.call(this,args);};
G__60479.cljs$lang$maxFixedArity = 0;
G__60479.cljs$lang$applyTo = (function (arglist__60481){
var args = cljs.core.seq(arglist__60481);
return G__60479__delegate(args);
});
G__60479.cljs$core$IFn$_invoke$arity$variadic = G__60479__delegate;
return G__60479;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__60482__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__60482 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__60483__i = 0, G__60483__a = new Array(arguments.length -  0);
while (G__60483__i < G__60483__a.length) {G__60483__a[G__60483__i] = arguments[G__60483__i + 0]; ++G__60483__i;}
  args = new cljs.core.IndexedSeq(G__60483__a,0);
} 
return G__60482__delegate.call(this,args);};
G__60482.cljs$lang$maxFixedArity = 0;
G__60482.cljs$lang$applyTo = (function (arglist__60484){
var args = cljs.core.seq(arglist__60484);
return G__60482__delegate(args);
});
G__60482.cljs$core$IFn$_invoke$arity$variadic = G__60482__delegate;
return G__60482;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1498707046581