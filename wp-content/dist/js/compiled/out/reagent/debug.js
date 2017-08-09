// Compiled by ClojureScript 1.9.671 {}
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
var G__42301__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__42301 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42302__i = 0, G__42302__a = new Array(arguments.length -  0);
while (G__42302__i < G__42302__a.length) {G__42302__a[G__42302__i] = arguments[G__42302__i + 0]; ++G__42302__i;}
  args = new cljs.core.IndexedSeq(G__42302__a,0,null);
} 
return G__42301__delegate.call(this,args);};
G__42301.cljs$lang$maxFixedArity = 0;
G__42301.cljs$lang$applyTo = (function (arglist__42303){
var args = cljs.core.seq(arglist__42303);
return G__42301__delegate(args);
});
G__42301.cljs$core$IFn$_invoke$arity$variadic = G__42301__delegate;
return G__42301;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__42304__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__42304 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42305__i = 0, G__42305__a = new Array(arguments.length -  0);
while (G__42305__i < G__42305__a.length) {G__42305__a[G__42305__i] = arguments[G__42305__i + 0]; ++G__42305__i;}
  args = new cljs.core.IndexedSeq(G__42305__a,0,null);
} 
return G__42304__delegate.call(this,args);};
G__42304.cljs$lang$maxFixedArity = 0;
G__42304.cljs$lang$applyTo = (function (arglist__42306){
var args = cljs.core.seq(arglist__42306);
return G__42304__delegate(args);
});
G__42304.cljs$core$IFn$_invoke$arity$variadic = G__42304__delegate;
return G__42304;
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

//# sourceMappingURL=debug.js.map?rel=1502260260451