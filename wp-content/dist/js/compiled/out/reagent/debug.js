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
var G__40244__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__40244 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40245__i = 0, G__40245__a = new Array(arguments.length -  0);
while (G__40245__i < G__40245__a.length) {G__40245__a[G__40245__i] = arguments[G__40245__i + 0]; ++G__40245__i;}
  args = new cljs.core.IndexedSeq(G__40245__a,0,null);
} 
return G__40244__delegate.call(this,args);};
G__40244.cljs$lang$maxFixedArity = 0;
G__40244.cljs$lang$applyTo = (function (arglist__40246){
var args = cljs.core.seq(arglist__40246);
return G__40244__delegate(args);
});
G__40244.cljs$core$IFn$_invoke$arity$variadic = G__40244__delegate;
return G__40244;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__40247__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__40247 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40248__i = 0, G__40248__a = new Array(arguments.length -  0);
while (G__40248__i < G__40248__a.length) {G__40248__a[G__40248__i] = arguments[G__40248__i + 0]; ++G__40248__i;}
  args = new cljs.core.IndexedSeq(G__40248__a,0,null);
} 
return G__40247__delegate.call(this,args);};
G__40247.cljs$lang$maxFixedArity = 0;
G__40247.cljs$lang$applyTo = (function (arglist__40249){
var args = cljs.core.seq(arglist__40249);
return G__40247__delegate(args);
});
G__40247.cljs$core$IFn$_invoke$arity$variadic = G__40247__delegate;
return G__40247;
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

//# sourceMappingURL=debug.js.map?rel=1502846506600