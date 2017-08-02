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
var G__30521__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__30521 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30522__i = 0, G__30522__a = new Array(arguments.length -  0);
while (G__30522__i < G__30522__a.length) {G__30522__a[G__30522__i] = arguments[G__30522__i + 0]; ++G__30522__i;}
  args = new cljs.core.IndexedSeq(G__30522__a,0,null);
} 
return G__30521__delegate.call(this,args);};
G__30521.cljs$lang$maxFixedArity = 0;
G__30521.cljs$lang$applyTo = (function (arglist__30523){
var args = cljs.core.seq(arglist__30523);
return G__30521__delegate(args);
});
G__30521.cljs$core$IFn$_invoke$arity$variadic = G__30521__delegate;
return G__30521;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__30524__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__30524 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30525__i = 0, G__30525__a = new Array(arguments.length -  0);
while (G__30525__i < G__30525__a.length) {G__30525__a[G__30525__i] = arguments[G__30525__i + 0]; ++G__30525__i;}
  args = new cljs.core.IndexedSeq(G__30525__a,0,null);
} 
return G__30524__delegate.call(this,args);};
G__30524.cljs$lang$maxFixedArity = 0;
G__30524.cljs$lang$applyTo = (function (arglist__30526){
var args = cljs.core.seq(arglist__30526);
return G__30524__delegate(args);
});
G__30524.cljs$core$IFn$_invoke$arity$variadic = G__30524__delegate;
return G__30524;
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

//# sourceMappingURL=debug.js.map?rel=1501628486547