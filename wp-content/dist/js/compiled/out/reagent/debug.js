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
var G__39084__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__39084 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39085__i = 0, G__39085__a = new Array(arguments.length -  0);
while (G__39085__i < G__39085__a.length) {G__39085__a[G__39085__i] = arguments[G__39085__i + 0]; ++G__39085__i;}
  args = new cljs.core.IndexedSeq(G__39085__a,0,null);
} 
return G__39084__delegate.call(this,args);};
G__39084.cljs$lang$maxFixedArity = 0;
G__39084.cljs$lang$applyTo = (function (arglist__39086){
var args = cljs.core.seq(arglist__39086);
return G__39084__delegate(args);
});
G__39084.cljs$core$IFn$_invoke$arity$variadic = G__39084__delegate;
return G__39084;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__39087__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__39087 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39088__i = 0, G__39088__a = new Array(arguments.length -  0);
while (G__39088__i < G__39088__a.length) {G__39088__a[G__39088__i] = arguments[G__39088__i + 0]; ++G__39088__i;}
  args = new cljs.core.IndexedSeq(G__39088__a,0,null);
} 
return G__39087__delegate.call(this,args);};
G__39087.cljs$lang$maxFixedArity = 0;
G__39087.cljs$lang$applyTo = (function (arglist__39089){
var args = cljs.core.seq(arglist__39089);
return G__39087__delegate(args);
});
G__39087.cljs$core$IFn$_invoke$arity$variadic = G__39087__delegate;
return G__39087;
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

//# sourceMappingURL=debug.js.map?rel=1503532137197