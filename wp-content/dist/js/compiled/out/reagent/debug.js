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
var G__44213__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__44213 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44214__i = 0, G__44214__a = new Array(arguments.length -  0);
while (G__44214__i < G__44214__a.length) {G__44214__a[G__44214__i] = arguments[G__44214__i + 0]; ++G__44214__i;}
  args = new cljs.core.IndexedSeq(G__44214__a,0,null);
} 
return G__44213__delegate.call(this,args);};
G__44213.cljs$lang$maxFixedArity = 0;
G__44213.cljs$lang$applyTo = (function (arglist__44215){
var args = cljs.core.seq(arglist__44215);
return G__44213__delegate(args);
});
G__44213.cljs$core$IFn$_invoke$arity$variadic = G__44213__delegate;
return G__44213;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__44216__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__44216 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44217__i = 0, G__44217__a = new Array(arguments.length -  0);
while (G__44217__i < G__44217__a.length) {G__44217__a[G__44217__i] = arguments[G__44217__i + 0]; ++G__44217__i;}
  args = new cljs.core.IndexedSeq(G__44217__a,0,null);
} 
return G__44216__delegate.call(this,args);};
G__44216.cljs$lang$maxFixedArity = 0;
G__44216.cljs$lang$applyTo = (function (arglist__44218){
var args = cljs.core.seq(arglist__44218);
return G__44216__delegate(args);
});
G__44216.cljs$core$IFn$_invoke$arity$variadic = G__44216__delegate;
return G__44216;
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

//# sourceMappingURL=debug.js.map?rel=1501568767495