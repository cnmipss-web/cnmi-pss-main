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
var G__27364__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__27364 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27365__i = 0, G__27365__a = new Array(arguments.length -  0);
while (G__27365__i < G__27365__a.length) {G__27365__a[G__27365__i] = arguments[G__27365__i + 0]; ++G__27365__i;}
  args = new cljs.core.IndexedSeq(G__27365__a,0);
} 
return G__27364__delegate.call(this,args);};
G__27364.cljs$lang$maxFixedArity = 0;
G__27364.cljs$lang$applyTo = (function (arglist__27366){
var args = cljs.core.seq(arglist__27366);
return G__27364__delegate(args);
});
G__27364.cljs$core$IFn$_invoke$arity$variadic = G__27364__delegate;
return G__27364;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__27367__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__27367 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27368__i = 0, G__27368__a = new Array(arguments.length -  0);
while (G__27368__i < G__27368__a.length) {G__27368__a[G__27368__i] = arguments[G__27368__i + 0]; ++G__27368__i;}
  args = new cljs.core.IndexedSeq(G__27368__a,0);
} 
return G__27367__delegate.call(this,args);};
G__27367.cljs$lang$maxFixedArity = 0;
G__27367.cljs$lang$applyTo = (function (arglist__27369){
var args = cljs.core.seq(arglist__27369);
return G__27367__delegate(args);
});
G__27367.cljs$core$IFn$_invoke$arity$variadic = G__27367__delegate;
return G__27367;
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

//# sourceMappingURL=debug.js.map?rel=1499813241414