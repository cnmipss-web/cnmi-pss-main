// Compiled by ClojureScript 1.9.671 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__27663__auto__,writer__27664__auto__,opt__27665__auto__){
return cljs.core._write.call(null,writer__27664__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__28184__auto__ = [];
var len__28177__auto___47656 = arguments.length;
var i__28178__auto___47657 = (0);
while(true){
if((i__28178__auto___47657 < len__28177__auto___47656)){
args__28184__auto__.push((arguments[i__28178__auto___47657]));

var G__47658 = (i__28178__auto___47657 + (1));
i__28178__auto___47657 = G__47658;
continue;
} else {
}
break;
}

var argseq__28185__auto__ = ((((0) < args__28184__auto__.length))?(new cljs.core.IndexedSeq(args__28184__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__28185__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq47655){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47655));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__28184__auto__ = [];
var len__28177__auto___47660 = arguments.length;
var i__28178__auto___47661 = (0);
while(true){
if((i__28178__auto___47661 < len__28177__auto___47660)){
args__28184__auto__.push((arguments[i__28178__auto___47661]));

var G__47662 = (i__28178__auto___47661 + (1));
i__28178__auto___47661 = G__47662;
continue;
} else {
}
break;
}

var argseq__28185__auto__ = ((((0) < args__28184__auto__.length))?(new cljs.core.IndexedSeq(args__28184__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__28185__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq47659){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47659));
});

var g_QMARK__47663 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_47664 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__47663){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__47663))
,null));
var mkg_47665 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__47663,g_47664){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__47663,g_47664))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__47663,g_47664,mkg_47665){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__47663).call(null,x);
});})(g_QMARK__47663,g_47664,mkg_47665))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__47663,g_47664,mkg_47665){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_47665).call(null,gfn);
});})(g_QMARK__47663,g_47664,mkg_47665))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__47663,g_47664,mkg_47665){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_47664).call(null,generator);
});})(g_QMARK__47663,g_47664,mkg_47665))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__30563__auto___47685 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__30563__auto___47685){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__28184__auto__ = [];
var len__28177__auto___47686 = arguments.length;
var i__28178__auto___47687 = (0);
while(true){
if((i__28178__auto___47687 < len__28177__auto___47686)){
args__28184__auto__.push((arguments[i__28178__auto___47687]));

var G__47688 = (i__28178__auto___47687 + (1));
i__28178__auto___47687 = G__47688;
continue;
} else {
}
break;
}

var argseq__28185__auto__ = ((((0) < args__28184__auto__.length))?(new cljs.core.IndexedSeq(args__28184__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__28185__auto__);
});})(g__30563__auto___47685))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30563__auto___47685){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30563__auto___47685),args);
});})(g__30563__auto___47685))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__30563__auto___47685){
return (function (seq47666){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47666));
});})(g__30563__auto___47685))
;


var g__30563__auto___47689 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__30563__auto___47689){
return (function cljs$spec$gen$alpha$list(var_args){
var args__28184__auto__ = [];
var len__28177__auto___47690 = arguments.length;
var i__28178__auto___47691 = (0);
while(true){
if((i__28178__auto___47691 < len__28177__auto___47690)){
args__28184__auto__.push((arguments[i__28178__auto___47691]));

var G__47692 = (i__28178__auto___47691 + (1));
i__28178__auto___47691 = G__47692;
continue;
} else {
}
break;
}

var argseq__28185__auto__ = ((((0) < args__28184__auto__.length))?(new cljs.core.IndexedSeq(args__28184__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__28185__auto__);
});})(g__30563__auto___47689))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30563__auto___47689){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30563__auto___47689),args);
});})(g__30563__auto___47689))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__30563__auto___47689){
return (function (seq47667){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47667));
});})(g__30563__auto___47689))
;


var g__30563__auto___47693 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__30563__auto___47693){
return (function cljs$spec$gen$alpha$map(var_args){
var args__28184__auto__ = [];
var len__28177__auto___47694 = arguments.length;
var i__28178__auto___47695 = (0);
while(true){
if((i__28178__auto___47695 < len__28177__auto___47694)){
args__28184__auto__.push((arguments[i__28178__auto___47695]));

var G__47696 = (i__28178__auto___47695 + (1));
i__28178__auto___47695 = G__47696;
continue;
} else {
}
break;
}

var argseq__28185__auto__ = ((((0) < args__28184__auto__.length))?(new cljs.core.IndexedSeq(args__28184__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__28185__auto__);
});})(g__30563__auto___47693))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30563__auto___47693){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30563__auto___47693),args);
});})(g__30563__auto___47693))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__30563__auto___47693){
return (function (seq47668){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47668));
});})(g__30563__auto___47693))
;


var g__30563__auto___47697 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__30563__auto___47697){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__28184__auto__ = [];
var len__28177__auto___47698 = arguments.length;
var i__28178__auto___47699 = (0);
while(true){
if((i__28178__auto___47699 < len__28177__auto___47698)){
args__28184__auto__.push((arguments[i__28178__auto___47699]));

var G__47700 = (i__28178__auto___47699 + (1));
i__28178__auto___47699 = G__47700;
continue;
} else {
}
break;
}

var argseq__28185__auto__ = ((((0) < args__28184__auto__.length))?(new cljs.core.IndexedSeq(args__28184__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__28185__auto__);
});})(g__30563__auto___47697))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30563__auto___47697){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30563__auto___47697),args);
});})(g__30563__auto___47697))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__30563__auto___47697){
return (function (seq47669){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47669));
});})(g__30563__auto___47697))
;


var g__30563__auto___47701 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__30563__auto___47701){
return (function cljs$spec$gen$alpha$set(var_args){
var args__28184__auto__ = [];
var len__28177__auto___47702 = arguments.length;
var i__28178__auto___47703 = (0);
while(true){
if((i__28178__auto___47703 < len__28177__auto___47702)){
args__28184__auto__.push((arguments[i__28178__auto___47703]));

var G__47704 = (i__28178__auto___47703 + (1));
i__28178__auto___47703 = G__47704;
continue;
} else {
}
break;
}

var argseq__28185__auto__ = ((((0) < args__28184__auto__.length))?(new cljs.core.IndexedSeq(args__28184__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__28185__auto__);
});})(g__30563__auto___47701))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30563__auto___47701){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30563__auto___47701),args);
});})(g__30563__auto___47701))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__30563__auto___47701){
return (function (seq47670){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47670));
});})(g__30563__auto___47701))
;


var g__30563__auto___47705 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__30563__auto___47705){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__28184__auto__ = [];
var len__28177__auto___47706 = arguments.length;
var i__28178__auto___47707 = (0);
while(true){
if((i__28178__auto___47707 < len__28177__auto___47706)){
args__28184__auto__.push((arguments[i__28178__auto___47707]));

var G__47708 = (i__28178__auto___47707 + (1));
i__28178__auto___47707 = G__47708;
continue;
} else {
}
break;
}

var argseq__28185__auto__ = ((((0) < args__28184__auto__.length))?(new cljs.core.IndexedSeq(args__28184__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__28185__auto__);
});})(g__30563__auto___47705))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30563__auto___47705){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30563__auto___47705),args);
});})(g__30563__auto___47705))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__30563__auto___47705){
return (function (seq47671){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47671));
});})(g__30563__auto___47705))
;


var g__30563__auto___47709 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__30563__auto___47709){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__28184__auto__ = [];
var len__28177__auto___47710 = arguments.length;
var i__28178__auto___47711 = (0);
while(true){
if((i__28178__auto___47711 < len__28177__auto___47710)){
args__28184__auto__.push((arguments[i__28178__auto___47711]));

var G__47712 = (i__28178__auto___47711 + (1));
i__28178__auto___47711 = G__47712;
continue;
} else {
}
break;
}

var argseq__28185__auto__ = ((((0) < args__28184__auto__.length))?(new cljs.core.IndexedSeq(args__28184__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__28185__auto__);
});})(g__30563__auto___47709))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30563__auto___47709){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30563__auto___47709),args);
});})(g__30563__auto___47709))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__30563__auto___47709){
return (function (seq47672){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47672));
});})(g__30563__auto___47709))
;


var g__30563__auto___47713 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__30563__auto___47713){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__28184__auto__ = [];
var len__28177__auto___47714 = arguments.length;
var i__28178__auto___47715 = (0);
while(true){
if((i__28178__auto___47715 < len__28177__auto___47714)){
args__28184__auto__.push((arguments[i__28178__auto___47715]));

var G__47716 = (i__28178__auto___47715 + (1));
i__28178__auto___47715 = G__47716;
continue;
} else {
}
break;
}

var argseq__28185__auto__ = ((((0) < args__28184__auto__.length))?(new cljs.core.IndexedSeq(args__28184__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__28185__auto__);
});})(g__30563__auto___47713))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30563__auto___47713){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30563__auto___47713),args);
});})(g__30563__auto___47713))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__30563__auto___47713){
return (function (seq47673){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47673));
});})(g__30563__auto___47713))
;


var g__30563__auto___47717 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__30563__auto___47717){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__28184__auto__ = [];
var len__28177__auto___47718 = arguments.length;
var i__28178__auto___47719 = (0);
while(true){
if((i__28178__auto___47719 < len__28177__auto___47718)){
args__28184__auto__.push((arguments[i__28178__auto___47719]));

var G__47720 = (i__28178__auto___47719 + (1));
i__28178__auto___47719 = G__47720;
continue;
} else {
}
break;
}

var argseq__28185__auto__ = ((((0) < args__28184__auto__.length))?(new cljs.core.IndexedSeq(args__28184__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__28185__auto__);
});})(g__30563__auto___47717))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30563__auto___47717){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30563__auto___47717),args);
});})(g__30563__auto___47717))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__30563__auto___47717){
return (function (seq47674){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47674));
});})(g__30563__auto___47717))
;


var g__30563__auto___47721 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__30563__auto___47721){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__28184__auto__ = [];
var len__28177__auto___47722 = arguments.length;
var i__28178__auto___47723 = (0);
while(true){
if((i__28178__auto___47723 < len__28177__auto___47722)){
args__28184__auto__.push((arguments[i__28178__auto___47723]));

var G__47724 = (i__28178__auto___47723 + (1));
i__28178__auto___47723 = G__47724;
continue;
} else {
}
break;
}

var argseq__28185__auto__ = ((((0) < args__28184__auto__.length))?(new cljs.core.IndexedSeq(args__28184__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__28185__auto__);
});})(g__30563__auto___47721))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30563__auto___47721){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30563__auto___47721),args);
});})(g__30563__auto___47721))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__30563__auto___47721){
return (function (seq47675){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47675));
});})(g__30563__auto___47721))
;


var g__30563__auto___47725 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__30563__auto___47725){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__28184__auto__ = [];
var len__28177__auto___47726 = arguments.length;
var i__28178__auto___47727 = (0);
while(true){
if((i__28178__auto___47727 < len__28177__auto___47726)){
args__28184__auto__.push((arguments[i__28178__auto___47727]));

var G__47728 = (i__28178__auto___47727 + (1));
i__28178__auto___47727 = G__47728;
continue;
} else {
}
break;
}

var argseq__28185__auto__ = ((((0) < args__28184__auto__.length))?(new cljs.core.IndexedSeq(args__28184__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__28185__auto__);
});})(g__30563__auto___47725))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30563__auto___47725){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30563__auto___47725),args);
});})(g__30563__auto___47725))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__30563__auto___47725){
return (function (seq47676){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47676));
});})(g__30563__auto___47725))
;


var g__30563__auto___47729 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__30563__auto___47729){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__28184__auto__ = [];
var len__28177__auto___47730 = arguments.length;
var i__28178__auto___47731 = (0);
while(true){
if((i__28178__auto___47731 < len__28177__auto___47730)){
args__28184__auto__.push((arguments[i__28178__auto___47731]));

var G__47732 = (i__28178__auto___47731 + (1));
i__28178__auto___47731 = G__47732;
continue;
} else {
}
break;
}

var argseq__28185__auto__ = ((((0) < args__28184__auto__.length))?(new cljs.core.IndexedSeq(args__28184__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__28185__auto__);
});})(g__30563__auto___47729))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30563__auto___47729){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30563__auto___47729),args);
});})(g__30563__auto___47729))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__30563__auto___47729){
return (function (seq47677){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47677));
});})(g__30563__auto___47729))
;


var g__30563__auto___47733 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__30563__auto___47733){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__28184__auto__ = [];
var len__28177__auto___47734 = arguments.length;
var i__28178__auto___47735 = (0);
while(true){
if((i__28178__auto___47735 < len__28177__auto___47734)){
args__28184__auto__.push((arguments[i__28178__auto___47735]));

var G__47736 = (i__28178__auto___47735 + (1));
i__28178__auto___47735 = G__47736;
continue;
} else {
}
break;
}

var argseq__28185__auto__ = ((((0) < args__28184__auto__.length))?(new cljs.core.IndexedSeq(args__28184__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__28185__auto__);
});})(g__30563__auto___47733))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30563__auto___47733){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30563__auto___47733),args);
});})(g__30563__auto___47733))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__30563__auto___47733){
return (function (seq47678){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47678));
});})(g__30563__auto___47733))
;


var g__30563__auto___47737 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__30563__auto___47737){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__28184__auto__ = [];
var len__28177__auto___47738 = arguments.length;
var i__28178__auto___47739 = (0);
while(true){
if((i__28178__auto___47739 < len__28177__auto___47738)){
args__28184__auto__.push((arguments[i__28178__auto___47739]));

var G__47740 = (i__28178__auto___47739 + (1));
i__28178__auto___47739 = G__47740;
continue;
} else {
}
break;
}

var argseq__28185__auto__ = ((((0) < args__28184__auto__.length))?(new cljs.core.IndexedSeq(args__28184__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__28185__auto__);
});})(g__30563__auto___47737))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30563__auto___47737){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30563__auto___47737),args);
});})(g__30563__auto___47737))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__30563__auto___47737){
return (function (seq47679){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47679));
});})(g__30563__auto___47737))
;


var g__30563__auto___47741 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__30563__auto___47741){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__28184__auto__ = [];
var len__28177__auto___47742 = arguments.length;
var i__28178__auto___47743 = (0);
while(true){
if((i__28178__auto___47743 < len__28177__auto___47742)){
args__28184__auto__.push((arguments[i__28178__auto___47743]));

var G__47744 = (i__28178__auto___47743 + (1));
i__28178__auto___47743 = G__47744;
continue;
} else {
}
break;
}

var argseq__28185__auto__ = ((((0) < args__28184__auto__.length))?(new cljs.core.IndexedSeq(args__28184__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__28185__auto__);
});})(g__30563__auto___47741))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30563__auto___47741){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30563__auto___47741),args);
});})(g__30563__auto___47741))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__30563__auto___47741){
return (function (seq47680){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47680));
});})(g__30563__auto___47741))
;


var g__30563__auto___47745 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__30563__auto___47745){
return (function cljs$spec$gen$alpha$return(var_args){
var args__28184__auto__ = [];
var len__28177__auto___47746 = arguments.length;
var i__28178__auto___47747 = (0);
while(true){
if((i__28178__auto___47747 < len__28177__auto___47746)){
args__28184__auto__.push((arguments[i__28178__auto___47747]));

var G__47748 = (i__28178__auto___47747 + (1));
i__28178__auto___47747 = G__47748;
continue;
} else {
}
break;
}

var argseq__28185__auto__ = ((((0) < args__28184__auto__.length))?(new cljs.core.IndexedSeq(args__28184__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__28185__auto__);
});})(g__30563__auto___47745))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30563__auto___47745){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30563__auto___47745),args);
});})(g__30563__auto___47745))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__30563__auto___47745){
return (function (seq47681){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47681));
});})(g__30563__auto___47745))
;


var g__30563__auto___47749 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__30563__auto___47749){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__28184__auto__ = [];
var len__28177__auto___47750 = arguments.length;
var i__28178__auto___47751 = (0);
while(true){
if((i__28178__auto___47751 < len__28177__auto___47750)){
args__28184__auto__.push((arguments[i__28178__auto___47751]));

var G__47752 = (i__28178__auto___47751 + (1));
i__28178__auto___47751 = G__47752;
continue;
} else {
}
break;
}

var argseq__28185__auto__ = ((((0) < args__28184__auto__.length))?(new cljs.core.IndexedSeq(args__28184__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__28185__auto__);
});})(g__30563__auto___47749))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30563__auto___47749){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30563__auto___47749),args);
});})(g__30563__auto___47749))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__30563__auto___47749){
return (function (seq47682){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47682));
});})(g__30563__auto___47749))
;


var g__30563__auto___47753 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__30563__auto___47753){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__28184__auto__ = [];
var len__28177__auto___47754 = arguments.length;
var i__28178__auto___47755 = (0);
while(true){
if((i__28178__auto___47755 < len__28177__auto___47754)){
args__28184__auto__.push((arguments[i__28178__auto___47755]));

var G__47756 = (i__28178__auto___47755 + (1));
i__28178__auto___47755 = G__47756;
continue;
} else {
}
break;
}

var argseq__28185__auto__ = ((((0) < args__28184__auto__.length))?(new cljs.core.IndexedSeq(args__28184__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__28185__auto__);
});})(g__30563__auto___47753))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30563__auto___47753){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30563__auto___47753),args);
});})(g__30563__auto___47753))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__30563__auto___47753){
return (function (seq47683){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47683));
});})(g__30563__auto___47753))
;


var g__30563__auto___47757 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__30563__auto___47757){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__28184__auto__ = [];
var len__28177__auto___47758 = arguments.length;
var i__28178__auto___47759 = (0);
while(true){
if((i__28178__auto___47759 < len__28177__auto___47758)){
args__28184__auto__.push((arguments[i__28178__auto___47759]));

var G__47760 = (i__28178__auto___47759 + (1));
i__28178__auto___47759 = G__47760;
continue;
} else {
}
break;
}

var argseq__28185__auto__ = ((((0) < args__28184__auto__.length))?(new cljs.core.IndexedSeq(args__28184__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__28185__auto__);
});})(g__30563__auto___47757))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30563__auto___47757){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30563__auto___47757),args);
});})(g__30563__auto___47757))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__30563__auto___47757){
return (function (seq47684){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47684));
});})(g__30563__auto___47757))
;

var g__30576__auto___47782 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__30576__auto___47782){
return (function cljs$spec$gen$alpha$any(var_args){
var args__28184__auto__ = [];
var len__28177__auto___47783 = arguments.length;
var i__28178__auto___47784 = (0);
while(true){
if((i__28178__auto___47784 < len__28177__auto___47783)){
args__28184__auto__.push((arguments[i__28178__auto___47784]));

var G__47785 = (i__28178__auto___47784 + (1));
i__28178__auto___47784 = G__47785;
continue;
} else {
}
break;
}

var argseq__28185__auto__ = ((((0) < args__28184__auto__.length))?(new cljs.core.IndexedSeq(args__28184__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__28185__auto__);
});})(g__30576__auto___47782))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30576__auto___47782){
return (function (args){
return cljs.core.deref.call(null,g__30576__auto___47782);
});})(g__30576__auto___47782))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__30576__auto___47782){
return (function (seq47761){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47761));
});})(g__30576__auto___47782))
;


var g__30576__auto___47786 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__30576__auto___47786){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__28184__auto__ = [];
var len__28177__auto___47787 = arguments.length;
var i__28178__auto___47788 = (0);
while(true){
if((i__28178__auto___47788 < len__28177__auto___47787)){
args__28184__auto__.push((arguments[i__28178__auto___47788]));

var G__47789 = (i__28178__auto___47788 + (1));
i__28178__auto___47788 = G__47789;
continue;
} else {
}
break;
}

var argseq__28185__auto__ = ((((0) < args__28184__auto__.length))?(new cljs.core.IndexedSeq(args__28184__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__28185__auto__);
});})(g__30576__auto___47786))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30576__auto___47786){
return (function (args){
return cljs.core.deref.call(null,g__30576__auto___47786);
});})(g__30576__auto___47786))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__30576__auto___47786){
return (function (seq47762){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47762));
});})(g__30576__auto___47786))
;


var g__30576__auto___47790 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__30576__auto___47790){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__28184__auto__ = [];
var len__28177__auto___47791 = arguments.length;
var i__28178__auto___47792 = (0);
while(true){
if((i__28178__auto___47792 < len__28177__auto___47791)){
args__28184__auto__.push((arguments[i__28178__auto___47792]));

var G__47793 = (i__28178__auto___47792 + (1));
i__28178__auto___47792 = G__47793;
continue;
} else {
}
break;
}

var argseq__28185__auto__ = ((((0) < args__28184__auto__.length))?(new cljs.core.IndexedSeq(args__28184__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__28185__auto__);
});})(g__30576__auto___47790))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30576__auto___47790){
return (function (args){
return cljs.core.deref.call(null,g__30576__auto___47790);
});})(g__30576__auto___47790))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__30576__auto___47790){
return (function (seq47763){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47763));
});})(g__30576__auto___47790))
;


var g__30576__auto___47794 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__30576__auto___47794){
return (function cljs$spec$gen$alpha$char(var_args){
var args__28184__auto__ = [];
var len__28177__auto___47795 = arguments.length;
var i__28178__auto___47796 = (0);
while(true){
if((i__28178__auto___47796 < len__28177__auto___47795)){
args__28184__auto__.push((arguments[i__28178__auto___47796]));

var G__47797 = (i__28178__auto___47796 + (1));
i__28178__auto___47796 = G__47797;
continue;
} else {
}
break;
}

var argseq__28185__auto__ = ((((0) < args__28184__auto__.length))?(new cljs.core.IndexedSeq(args__28184__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__28185__auto__);
});})(g__30576__auto___47794))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30576__auto___47794){
return (function (args){
return cljs.core.deref.call(null,g__30576__auto___47794);
});})(g__30576__auto___47794))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__30576__auto___47794){
return (function (seq47764){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47764));
});})(g__30576__auto___47794))
;


var g__30576__auto___47798 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__30576__auto___47798){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__28184__auto__ = [];
var len__28177__auto___47799 = arguments.length;
var i__28178__auto___47800 = (0);
while(true){
if((i__28178__auto___47800 < len__28177__auto___47799)){
args__28184__auto__.push((arguments[i__28178__auto___47800]));

var G__47801 = (i__28178__auto___47800 + (1));
i__28178__auto___47800 = G__47801;
continue;
} else {
}
break;
}

var argseq__28185__auto__ = ((((0) < args__28184__auto__.length))?(new cljs.core.IndexedSeq(args__28184__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__28185__auto__);
});})(g__30576__auto___47798))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30576__auto___47798){
return (function (args){
return cljs.core.deref.call(null,g__30576__auto___47798);
});})(g__30576__auto___47798))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__30576__auto___47798){
return (function (seq47765){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47765));
});})(g__30576__auto___47798))
;


var g__30576__auto___47802 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__30576__auto___47802){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__28184__auto__ = [];
var len__28177__auto___47803 = arguments.length;
var i__28178__auto___47804 = (0);
while(true){
if((i__28178__auto___47804 < len__28177__auto___47803)){
args__28184__auto__.push((arguments[i__28178__auto___47804]));

var G__47805 = (i__28178__auto___47804 + (1));
i__28178__auto___47804 = G__47805;
continue;
} else {
}
break;
}

var argseq__28185__auto__ = ((((0) < args__28184__auto__.length))?(new cljs.core.IndexedSeq(args__28184__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__28185__auto__);
});})(g__30576__auto___47802))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30576__auto___47802){
return (function (args){
return cljs.core.deref.call(null,g__30576__auto___47802);
});})(g__30576__auto___47802))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__30576__auto___47802){
return (function (seq47766){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47766));
});})(g__30576__auto___47802))
;


var g__30576__auto___47806 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__30576__auto___47806){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__28184__auto__ = [];
var len__28177__auto___47807 = arguments.length;
var i__28178__auto___47808 = (0);
while(true){
if((i__28178__auto___47808 < len__28177__auto___47807)){
args__28184__auto__.push((arguments[i__28178__auto___47808]));

var G__47809 = (i__28178__auto___47808 + (1));
i__28178__auto___47808 = G__47809;
continue;
} else {
}
break;
}

var argseq__28185__auto__ = ((((0) < args__28184__auto__.length))?(new cljs.core.IndexedSeq(args__28184__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__28185__auto__);
});})(g__30576__auto___47806))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30576__auto___47806){
return (function (args){
return cljs.core.deref.call(null,g__30576__auto___47806);
});})(g__30576__auto___47806))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__30576__auto___47806){
return (function (seq47767){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47767));
});})(g__30576__auto___47806))
;


var g__30576__auto___47810 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__30576__auto___47810){
return (function cljs$spec$gen$alpha$double(var_args){
var args__28184__auto__ = [];
var len__28177__auto___47811 = arguments.length;
var i__28178__auto___47812 = (0);
while(true){
if((i__28178__auto___47812 < len__28177__auto___47811)){
args__28184__auto__.push((arguments[i__28178__auto___47812]));

var G__47813 = (i__28178__auto___47812 + (1));
i__28178__auto___47812 = G__47813;
continue;
} else {
}
break;
}

var argseq__28185__auto__ = ((((0) < args__28184__auto__.length))?(new cljs.core.IndexedSeq(args__28184__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__28185__auto__);
});})(g__30576__auto___47810))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30576__auto___47810){
return (function (args){
return cljs.core.deref.call(null,g__30576__auto___47810);
});})(g__30576__auto___47810))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__30576__auto___47810){
return (function (seq47768){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47768));
});})(g__30576__auto___47810))
;


var g__30576__auto___47814 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__30576__auto___47814){
return (function cljs$spec$gen$alpha$int(var_args){
var args__28184__auto__ = [];
var len__28177__auto___47815 = arguments.length;
var i__28178__auto___47816 = (0);
while(true){
if((i__28178__auto___47816 < len__28177__auto___47815)){
args__28184__auto__.push((arguments[i__28178__auto___47816]));

var G__47817 = (i__28178__auto___47816 + (1));
i__28178__auto___47816 = G__47817;
continue;
} else {
}
break;
}

var argseq__28185__auto__ = ((((0) < args__28184__auto__.length))?(new cljs.core.IndexedSeq(args__28184__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__28185__auto__);
});})(g__30576__auto___47814))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30576__auto___47814){
return (function (args){
return cljs.core.deref.call(null,g__30576__auto___47814);
});})(g__30576__auto___47814))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__30576__auto___47814){
return (function (seq47769){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47769));
});})(g__30576__auto___47814))
;


var g__30576__auto___47818 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__30576__auto___47818){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__28184__auto__ = [];
var len__28177__auto___47819 = arguments.length;
var i__28178__auto___47820 = (0);
while(true){
if((i__28178__auto___47820 < len__28177__auto___47819)){
args__28184__auto__.push((arguments[i__28178__auto___47820]));

var G__47821 = (i__28178__auto___47820 + (1));
i__28178__auto___47820 = G__47821;
continue;
} else {
}
break;
}

var argseq__28185__auto__ = ((((0) < args__28184__auto__.length))?(new cljs.core.IndexedSeq(args__28184__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__28185__auto__);
});})(g__30576__auto___47818))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30576__auto___47818){
return (function (args){
return cljs.core.deref.call(null,g__30576__auto___47818);
});})(g__30576__auto___47818))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__30576__auto___47818){
return (function (seq47770){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47770));
});})(g__30576__auto___47818))
;


var g__30576__auto___47822 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__30576__auto___47822){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__28184__auto__ = [];
var len__28177__auto___47823 = arguments.length;
var i__28178__auto___47824 = (0);
while(true){
if((i__28178__auto___47824 < len__28177__auto___47823)){
args__28184__auto__.push((arguments[i__28178__auto___47824]));

var G__47825 = (i__28178__auto___47824 + (1));
i__28178__auto___47824 = G__47825;
continue;
} else {
}
break;
}

var argseq__28185__auto__ = ((((0) < args__28184__auto__.length))?(new cljs.core.IndexedSeq(args__28184__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__28185__auto__);
});})(g__30576__auto___47822))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30576__auto___47822){
return (function (args){
return cljs.core.deref.call(null,g__30576__auto___47822);
});})(g__30576__auto___47822))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__30576__auto___47822){
return (function (seq47771){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47771));
});})(g__30576__auto___47822))
;


var g__30576__auto___47826 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__30576__auto___47826){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__28184__auto__ = [];
var len__28177__auto___47827 = arguments.length;
var i__28178__auto___47828 = (0);
while(true){
if((i__28178__auto___47828 < len__28177__auto___47827)){
args__28184__auto__.push((arguments[i__28178__auto___47828]));

var G__47829 = (i__28178__auto___47828 + (1));
i__28178__auto___47828 = G__47829;
continue;
} else {
}
break;
}

var argseq__28185__auto__ = ((((0) < args__28184__auto__.length))?(new cljs.core.IndexedSeq(args__28184__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__28185__auto__);
});})(g__30576__auto___47826))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30576__auto___47826){
return (function (args){
return cljs.core.deref.call(null,g__30576__auto___47826);
});})(g__30576__auto___47826))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__30576__auto___47826){
return (function (seq47772){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47772));
});})(g__30576__auto___47826))
;


var g__30576__auto___47830 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__30576__auto___47830){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__28184__auto__ = [];
var len__28177__auto___47831 = arguments.length;
var i__28178__auto___47832 = (0);
while(true){
if((i__28178__auto___47832 < len__28177__auto___47831)){
args__28184__auto__.push((arguments[i__28178__auto___47832]));

var G__47833 = (i__28178__auto___47832 + (1));
i__28178__auto___47832 = G__47833;
continue;
} else {
}
break;
}

var argseq__28185__auto__ = ((((0) < args__28184__auto__.length))?(new cljs.core.IndexedSeq(args__28184__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__28185__auto__);
});})(g__30576__auto___47830))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30576__auto___47830){
return (function (args){
return cljs.core.deref.call(null,g__30576__auto___47830);
});})(g__30576__auto___47830))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__30576__auto___47830){
return (function (seq47773){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47773));
});})(g__30576__auto___47830))
;


var g__30576__auto___47834 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__30576__auto___47834){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__28184__auto__ = [];
var len__28177__auto___47835 = arguments.length;
var i__28178__auto___47836 = (0);
while(true){
if((i__28178__auto___47836 < len__28177__auto___47835)){
args__28184__auto__.push((arguments[i__28178__auto___47836]));

var G__47837 = (i__28178__auto___47836 + (1));
i__28178__auto___47836 = G__47837;
continue;
} else {
}
break;
}

var argseq__28185__auto__ = ((((0) < args__28184__auto__.length))?(new cljs.core.IndexedSeq(args__28184__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__28185__auto__);
});})(g__30576__auto___47834))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30576__auto___47834){
return (function (args){
return cljs.core.deref.call(null,g__30576__auto___47834);
});})(g__30576__auto___47834))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__30576__auto___47834){
return (function (seq47774){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47774));
});})(g__30576__auto___47834))
;


var g__30576__auto___47838 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__30576__auto___47838){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__28184__auto__ = [];
var len__28177__auto___47839 = arguments.length;
var i__28178__auto___47840 = (0);
while(true){
if((i__28178__auto___47840 < len__28177__auto___47839)){
args__28184__auto__.push((arguments[i__28178__auto___47840]));

var G__47841 = (i__28178__auto___47840 + (1));
i__28178__auto___47840 = G__47841;
continue;
} else {
}
break;
}

var argseq__28185__auto__ = ((((0) < args__28184__auto__.length))?(new cljs.core.IndexedSeq(args__28184__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__28185__auto__);
});})(g__30576__auto___47838))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30576__auto___47838){
return (function (args){
return cljs.core.deref.call(null,g__30576__auto___47838);
});})(g__30576__auto___47838))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__30576__auto___47838){
return (function (seq47775){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47775));
});})(g__30576__auto___47838))
;


var g__30576__auto___47842 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__30576__auto___47842){
return (function cljs$spec$gen$alpha$string(var_args){
var args__28184__auto__ = [];
var len__28177__auto___47843 = arguments.length;
var i__28178__auto___47844 = (0);
while(true){
if((i__28178__auto___47844 < len__28177__auto___47843)){
args__28184__auto__.push((arguments[i__28178__auto___47844]));

var G__47845 = (i__28178__auto___47844 + (1));
i__28178__auto___47844 = G__47845;
continue;
} else {
}
break;
}

var argseq__28185__auto__ = ((((0) < args__28184__auto__.length))?(new cljs.core.IndexedSeq(args__28184__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__28185__auto__);
});})(g__30576__auto___47842))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30576__auto___47842){
return (function (args){
return cljs.core.deref.call(null,g__30576__auto___47842);
});})(g__30576__auto___47842))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__30576__auto___47842){
return (function (seq47776){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47776));
});})(g__30576__auto___47842))
;


var g__30576__auto___47846 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__30576__auto___47846){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__28184__auto__ = [];
var len__28177__auto___47847 = arguments.length;
var i__28178__auto___47848 = (0);
while(true){
if((i__28178__auto___47848 < len__28177__auto___47847)){
args__28184__auto__.push((arguments[i__28178__auto___47848]));

var G__47849 = (i__28178__auto___47848 + (1));
i__28178__auto___47848 = G__47849;
continue;
} else {
}
break;
}

var argseq__28185__auto__ = ((((0) < args__28184__auto__.length))?(new cljs.core.IndexedSeq(args__28184__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__28185__auto__);
});})(g__30576__auto___47846))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30576__auto___47846){
return (function (args){
return cljs.core.deref.call(null,g__30576__auto___47846);
});})(g__30576__auto___47846))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__30576__auto___47846){
return (function (seq47777){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47777));
});})(g__30576__auto___47846))
;


var g__30576__auto___47850 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__30576__auto___47850){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__28184__auto__ = [];
var len__28177__auto___47851 = arguments.length;
var i__28178__auto___47852 = (0);
while(true){
if((i__28178__auto___47852 < len__28177__auto___47851)){
args__28184__auto__.push((arguments[i__28178__auto___47852]));

var G__47853 = (i__28178__auto___47852 + (1));
i__28178__auto___47852 = G__47853;
continue;
} else {
}
break;
}

var argseq__28185__auto__ = ((((0) < args__28184__auto__.length))?(new cljs.core.IndexedSeq(args__28184__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__28185__auto__);
});})(g__30576__auto___47850))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30576__auto___47850){
return (function (args){
return cljs.core.deref.call(null,g__30576__auto___47850);
});})(g__30576__auto___47850))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__30576__auto___47850){
return (function (seq47778){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47778));
});})(g__30576__auto___47850))
;


var g__30576__auto___47854 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__30576__auto___47854){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__28184__auto__ = [];
var len__28177__auto___47855 = arguments.length;
var i__28178__auto___47856 = (0);
while(true){
if((i__28178__auto___47856 < len__28177__auto___47855)){
args__28184__auto__.push((arguments[i__28178__auto___47856]));

var G__47857 = (i__28178__auto___47856 + (1));
i__28178__auto___47856 = G__47857;
continue;
} else {
}
break;
}

var argseq__28185__auto__ = ((((0) < args__28184__auto__.length))?(new cljs.core.IndexedSeq(args__28184__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__28185__auto__);
});})(g__30576__auto___47854))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30576__auto___47854){
return (function (args){
return cljs.core.deref.call(null,g__30576__auto___47854);
});})(g__30576__auto___47854))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__30576__auto___47854){
return (function (seq47779){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47779));
});})(g__30576__auto___47854))
;


var g__30576__auto___47858 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__30576__auto___47858){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__28184__auto__ = [];
var len__28177__auto___47859 = arguments.length;
var i__28178__auto___47860 = (0);
while(true){
if((i__28178__auto___47860 < len__28177__auto___47859)){
args__28184__auto__.push((arguments[i__28178__auto___47860]));

var G__47861 = (i__28178__auto___47860 + (1));
i__28178__auto___47860 = G__47861;
continue;
} else {
}
break;
}

var argseq__28185__auto__ = ((((0) < args__28184__auto__.length))?(new cljs.core.IndexedSeq(args__28184__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__28185__auto__);
});})(g__30576__auto___47858))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30576__auto___47858){
return (function (args){
return cljs.core.deref.call(null,g__30576__auto___47858);
});})(g__30576__auto___47858))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__30576__auto___47858){
return (function (seq47780){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47780));
});})(g__30576__auto___47858))
;


var g__30576__auto___47862 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__30576__auto___47862){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__28184__auto__ = [];
var len__28177__auto___47863 = arguments.length;
var i__28178__auto___47864 = (0);
while(true){
if((i__28178__auto___47864 < len__28177__auto___47863)){
args__28184__auto__.push((arguments[i__28178__auto___47864]));

var G__47865 = (i__28178__auto___47864 + (1));
i__28178__auto___47864 = G__47865;
continue;
} else {
}
break;
}

var argseq__28185__auto__ = ((((0) < args__28184__auto__.length))?(new cljs.core.IndexedSeq(args__28184__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__28185__auto__);
});})(g__30576__auto___47862))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30576__auto___47862){
return (function (args){
return cljs.core.deref.call(null,g__30576__auto___47862);
});})(g__30576__auto___47862))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__30576__auto___47862){
return (function (seq47781){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47781));
});})(g__30576__auto___47862))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__28184__auto__ = [];
var len__28177__auto___47868 = arguments.length;
var i__28178__auto___47869 = (0);
while(true){
if((i__28178__auto___47869 < len__28177__auto___47868)){
args__28184__auto__.push((arguments[i__28178__auto___47869]));

var G__47870 = (i__28178__auto___47869 + (1));
i__28178__auto___47869 = G__47870;
continue;
} else {
}
break;
}

var argseq__28185__auto__ = ((((0) < args__28184__auto__.length))?(new cljs.core.IndexedSeq(args__28184__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__28185__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__47866_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__47866_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq47867){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47867));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__47871_SHARP_){
return (new Date(p1__47871_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map?rel=1501568772136