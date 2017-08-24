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
var G__40231__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__40231 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40232__i = 0, G__40232__a = new Array(arguments.length -  0);
while (G__40232__i < G__40232__a.length) {G__40232__a[G__40232__i] = arguments[G__40232__i + 0]; ++G__40232__i;}
  args = new cljs.core.IndexedSeq(G__40232__a,0,null);
} 
return G__40231__delegate.call(this,args);};
G__40231.cljs$lang$maxFixedArity = 0;
G__40231.cljs$lang$applyTo = (function (arglist__40233){
var args = cljs.core.seq(arglist__40233);
return G__40231__delegate(args);
});
G__40231.cljs$core$IFn$_invoke$arity$variadic = G__40231__delegate;
return G__40231;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__40234__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__40234 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40235__i = 0, G__40235__a = new Array(arguments.length -  0);
while (G__40235__i < G__40235__a.length) {G__40235__a[G__40235__i] = arguments[G__40235__i + 0]; ++G__40235__i;}
  args = new cljs.core.IndexedSeq(G__40235__a,0,null);
} 
return G__40234__delegate.call(this,args);};
G__40234.cljs$lang$maxFixedArity = 0;
G__40234.cljs$lang$applyTo = (function (arglist__40236){
var args = cljs.core.seq(arglist__40236);
return G__40234__delegate(args);
});
G__40234.cljs$core$IFn$_invoke$arity$variadic = G__40234__delegate;
return G__40234;
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

//# sourceMappingURL=debug.js.map?rel=1503550037320