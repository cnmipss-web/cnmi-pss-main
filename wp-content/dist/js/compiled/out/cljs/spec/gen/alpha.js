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

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__37368__auto__,writer__37369__auto__,opt__37370__auto__){
return cljs.core._write.call(null,writer__37369__auto__,"cljs.spec.gen.alpha/LazyVar");
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
var args__37889__auto__ = [];
var len__37882__auto___46997 = arguments.length;
var i__37883__auto___46998 = (0);
while(true){
if((i__37883__auto___46998 < len__37882__auto___46997)){
args__37889__auto__.push((arguments[i__37883__auto___46998]));

var G__46999 = (i__37883__auto___46998 + (1));
i__37883__auto___46998 = G__46999;
continue;
} else {
}
break;
}

var argseq__37890__auto__ = ((((0) < args__37889__auto__.length))?(new cljs.core.IndexedSeq(args__37889__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__37890__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq46996){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46996));
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
var args__37889__auto__ = [];
var len__37882__auto___47001 = arguments.length;
var i__37883__auto___47002 = (0);
while(true){
if((i__37883__auto___47002 < len__37882__auto___47001)){
args__37889__auto__.push((arguments[i__37883__auto___47002]));

var G__47003 = (i__37883__auto___47002 + (1));
i__37883__auto___47002 = G__47003;
continue;
} else {
}
break;
}

var argseq__37890__auto__ = ((((0) < args__37889__auto__.length))?(new cljs.core.IndexedSeq(args__37889__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__37890__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq47000){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47000));
});

var g_QMARK__47004 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_47005 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__47004){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__47004))
,null));
var mkg_47006 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__47004,g_47005){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__47004,g_47005))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__47004,g_47005,mkg_47006){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__47004).call(null,x);
});})(g_QMARK__47004,g_47005,mkg_47006))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__47004,g_47005,mkg_47006){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_47006).call(null,gfn);
});})(g_QMARK__47004,g_47005,mkg_47006))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__47004,g_47005,mkg_47006){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_47005).call(null,generator);
});})(g_QMARK__47004,g_47005,mkg_47006))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__40268__auto___47026 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__40268__auto___47026){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__37889__auto__ = [];
var len__37882__auto___47027 = arguments.length;
var i__37883__auto___47028 = (0);
while(true){
if((i__37883__auto___47028 < len__37882__auto___47027)){
args__37889__auto__.push((arguments[i__37883__auto___47028]));

var G__47029 = (i__37883__auto___47028 + (1));
i__37883__auto___47028 = G__47029;
continue;
} else {
}
break;
}

var argseq__37890__auto__ = ((((0) < args__37889__auto__.length))?(new cljs.core.IndexedSeq(args__37889__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__37890__auto__);
});})(g__40268__auto___47026))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40268__auto___47026){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40268__auto___47026),args);
});})(g__40268__auto___47026))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__40268__auto___47026){
return (function (seq47007){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47007));
});})(g__40268__auto___47026))
;


var g__40268__auto___47030 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__40268__auto___47030){
return (function cljs$spec$gen$alpha$list(var_args){
var args__37889__auto__ = [];
var len__37882__auto___47031 = arguments.length;
var i__37883__auto___47032 = (0);
while(true){
if((i__37883__auto___47032 < len__37882__auto___47031)){
args__37889__auto__.push((arguments[i__37883__auto___47032]));

var G__47033 = (i__37883__auto___47032 + (1));
i__37883__auto___47032 = G__47033;
continue;
} else {
}
break;
}

var argseq__37890__auto__ = ((((0) < args__37889__auto__.length))?(new cljs.core.IndexedSeq(args__37889__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__37890__auto__);
});})(g__40268__auto___47030))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40268__auto___47030){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40268__auto___47030),args);
});})(g__40268__auto___47030))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__40268__auto___47030){
return (function (seq47008){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47008));
});})(g__40268__auto___47030))
;


var g__40268__auto___47034 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__40268__auto___47034){
return (function cljs$spec$gen$alpha$map(var_args){
var args__37889__auto__ = [];
var len__37882__auto___47035 = arguments.length;
var i__37883__auto___47036 = (0);
while(true){
if((i__37883__auto___47036 < len__37882__auto___47035)){
args__37889__auto__.push((arguments[i__37883__auto___47036]));

var G__47037 = (i__37883__auto___47036 + (1));
i__37883__auto___47036 = G__47037;
continue;
} else {
}
break;
}

var argseq__37890__auto__ = ((((0) < args__37889__auto__.length))?(new cljs.core.IndexedSeq(args__37889__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__37890__auto__);
});})(g__40268__auto___47034))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40268__auto___47034){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40268__auto___47034),args);
});})(g__40268__auto___47034))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__40268__auto___47034){
return (function (seq47009){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47009));
});})(g__40268__auto___47034))
;


var g__40268__auto___47038 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__40268__auto___47038){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__37889__auto__ = [];
var len__37882__auto___47039 = arguments.length;
var i__37883__auto___47040 = (0);
while(true){
if((i__37883__auto___47040 < len__37882__auto___47039)){
args__37889__auto__.push((arguments[i__37883__auto___47040]));

var G__47041 = (i__37883__auto___47040 + (1));
i__37883__auto___47040 = G__47041;
continue;
} else {
}
break;
}

var argseq__37890__auto__ = ((((0) < args__37889__auto__.length))?(new cljs.core.IndexedSeq(args__37889__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__37890__auto__);
});})(g__40268__auto___47038))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40268__auto___47038){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40268__auto___47038),args);
});})(g__40268__auto___47038))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__40268__auto___47038){
return (function (seq47010){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47010));
});})(g__40268__auto___47038))
;


var g__40268__auto___47042 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__40268__auto___47042){
return (function cljs$spec$gen$alpha$set(var_args){
var args__37889__auto__ = [];
var len__37882__auto___47043 = arguments.length;
var i__37883__auto___47044 = (0);
while(true){
if((i__37883__auto___47044 < len__37882__auto___47043)){
args__37889__auto__.push((arguments[i__37883__auto___47044]));

var G__47045 = (i__37883__auto___47044 + (1));
i__37883__auto___47044 = G__47045;
continue;
} else {
}
break;
}

var argseq__37890__auto__ = ((((0) < args__37889__auto__.length))?(new cljs.core.IndexedSeq(args__37889__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__37890__auto__);
});})(g__40268__auto___47042))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40268__auto___47042){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40268__auto___47042),args);
});})(g__40268__auto___47042))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__40268__auto___47042){
return (function (seq47011){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47011));
});})(g__40268__auto___47042))
;


var g__40268__auto___47046 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__40268__auto___47046){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__37889__auto__ = [];
var len__37882__auto___47047 = arguments.length;
var i__37883__auto___47048 = (0);
while(true){
if((i__37883__auto___47048 < len__37882__auto___47047)){
args__37889__auto__.push((arguments[i__37883__auto___47048]));

var G__47049 = (i__37883__auto___47048 + (1));
i__37883__auto___47048 = G__47049;
continue;
} else {
}
break;
}

var argseq__37890__auto__ = ((((0) < args__37889__auto__.length))?(new cljs.core.IndexedSeq(args__37889__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__37890__auto__);
});})(g__40268__auto___47046))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40268__auto___47046){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40268__auto___47046),args);
});})(g__40268__auto___47046))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__40268__auto___47046){
return (function (seq47012){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47012));
});})(g__40268__auto___47046))
;


var g__40268__auto___47050 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__40268__auto___47050){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__37889__auto__ = [];
var len__37882__auto___47051 = arguments.length;
var i__37883__auto___47052 = (0);
while(true){
if((i__37883__auto___47052 < len__37882__auto___47051)){
args__37889__auto__.push((arguments[i__37883__auto___47052]));

var G__47053 = (i__37883__auto___47052 + (1));
i__37883__auto___47052 = G__47053;
continue;
} else {
}
break;
}

var argseq__37890__auto__ = ((((0) < args__37889__auto__.length))?(new cljs.core.IndexedSeq(args__37889__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__37890__auto__);
});})(g__40268__auto___47050))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40268__auto___47050){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40268__auto___47050),args);
});})(g__40268__auto___47050))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__40268__auto___47050){
return (function (seq47013){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47013));
});})(g__40268__auto___47050))
;


var g__40268__auto___47054 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__40268__auto___47054){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__37889__auto__ = [];
var len__37882__auto___47055 = arguments.length;
var i__37883__auto___47056 = (0);
while(true){
if((i__37883__auto___47056 < len__37882__auto___47055)){
args__37889__auto__.push((arguments[i__37883__auto___47056]));

var G__47057 = (i__37883__auto___47056 + (1));
i__37883__auto___47056 = G__47057;
continue;
} else {
}
break;
}

var argseq__37890__auto__ = ((((0) < args__37889__auto__.length))?(new cljs.core.IndexedSeq(args__37889__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__37890__auto__);
});})(g__40268__auto___47054))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40268__auto___47054){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40268__auto___47054),args);
});})(g__40268__auto___47054))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__40268__auto___47054){
return (function (seq47014){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47014));
});})(g__40268__auto___47054))
;


var g__40268__auto___47058 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__40268__auto___47058){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__37889__auto__ = [];
var len__37882__auto___47059 = arguments.length;
var i__37883__auto___47060 = (0);
while(true){
if((i__37883__auto___47060 < len__37882__auto___47059)){
args__37889__auto__.push((arguments[i__37883__auto___47060]));

var G__47061 = (i__37883__auto___47060 + (1));
i__37883__auto___47060 = G__47061;
continue;
} else {
}
break;
}

var argseq__37890__auto__ = ((((0) < args__37889__auto__.length))?(new cljs.core.IndexedSeq(args__37889__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__37890__auto__);
});})(g__40268__auto___47058))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40268__auto___47058){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40268__auto___47058),args);
});})(g__40268__auto___47058))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__40268__auto___47058){
return (function (seq47015){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47015));
});})(g__40268__auto___47058))
;


var g__40268__auto___47062 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__40268__auto___47062){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__37889__auto__ = [];
var len__37882__auto___47063 = arguments.length;
var i__37883__auto___47064 = (0);
while(true){
if((i__37883__auto___47064 < len__37882__auto___47063)){
args__37889__auto__.push((arguments[i__37883__auto___47064]));

var G__47065 = (i__37883__auto___47064 + (1));
i__37883__auto___47064 = G__47065;
continue;
} else {
}
break;
}

var argseq__37890__auto__ = ((((0) < args__37889__auto__.length))?(new cljs.core.IndexedSeq(args__37889__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__37890__auto__);
});})(g__40268__auto___47062))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40268__auto___47062){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40268__auto___47062),args);
});})(g__40268__auto___47062))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__40268__auto___47062){
return (function (seq47016){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47016));
});})(g__40268__auto___47062))
;


var g__40268__auto___47066 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__40268__auto___47066){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__37889__auto__ = [];
var len__37882__auto___47067 = arguments.length;
var i__37883__auto___47068 = (0);
while(true){
if((i__37883__auto___47068 < len__37882__auto___47067)){
args__37889__auto__.push((arguments[i__37883__auto___47068]));

var G__47069 = (i__37883__auto___47068 + (1));
i__37883__auto___47068 = G__47069;
continue;
} else {
}
break;
}

var argseq__37890__auto__ = ((((0) < args__37889__auto__.length))?(new cljs.core.IndexedSeq(args__37889__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__37890__auto__);
});})(g__40268__auto___47066))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40268__auto___47066){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40268__auto___47066),args);
});})(g__40268__auto___47066))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__40268__auto___47066){
return (function (seq47017){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47017));
});})(g__40268__auto___47066))
;


var g__40268__auto___47070 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__40268__auto___47070){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__37889__auto__ = [];
var len__37882__auto___47071 = arguments.length;
var i__37883__auto___47072 = (0);
while(true){
if((i__37883__auto___47072 < len__37882__auto___47071)){
args__37889__auto__.push((arguments[i__37883__auto___47072]));

var G__47073 = (i__37883__auto___47072 + (1));
i__37883__auto___47072 = G__47073;
continue;
} else {
}
break;
}

var argseq__37890__auto__ = ((((0) < args__37889__auto__.length))?(new cljs.core.IndexedSeq(args__37889__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__37890__auto__);
});})(g__40268__auto___47070))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40268__auto___47070){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40268__auto___47070),args);
});})(g__40268__auto___47070))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__40268__auto___47070){
return (function (seq47018){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47018));
});})(g__40268__auto___47070))
;


var g__40268__auto___47074 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__40268__auto___47074){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__37889__auto__ = [];
var len__37882__auto___47075 = arguments.length;
var i__37883__auto___47076 = (0);
while(true){
if((i__37883__auto___47076 < len__37882__auto___47075)){
args__37889__auto__.push((arguments[i__37883__auto___47076]));

var G__47077 = (i__37883__auto___47076 + (1));
i__37883__auto___47076 = G__47077;
continue;
} else {
}
break;
}

var argseq__37890__auto__ = ((((0) < args__37889__auto__.length))?(new cljs.core.IndexedSeq(args__37889__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__37890__auto__);
});})(g__40268__auto___47074))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40268__auto___47074){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40268__auto___47074),args);
});})(g__40268__auto___47074))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__40268__auto___47074){
return (function (seq47019){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47019));
});})(g__40268__auto___47074))
;


var g__40268__auto___47078 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__40268__auto___47078){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__37889__auto__ = [];
var len__37882__auto___47079 = arguments.length;
var i__37883__auto___47080 = (0);
while(true){
if((i__37883__auto___47080 < len__37882__auto___47079)){
args__37889__auto__.push((arguments[i__37883__auto___47080]));

var G__47081 = (i__37883__auto___47080 + (1));
i__37883__auto___47080 = G__47081;
continue;
} else {
}
break;
}

var argseq__37890__auto__ = ((((0) < args__37889__auto__.length))?(new cljs.core.IndexedSeq(args__37889__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__37890__auto__);
});})(g__40268__auto___47078))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40268__auto___47078){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40268__auto___47078),args);
});})(g__40268__auto___47078))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__40268__auto___47078){
return (function (seq47020){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47020));
});})(g__40268__auto___47078))
;


var g__40268__auto___47082 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__40268__auto___47082){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__37889__auto__ = [];
var len__37882__auto___47083 = arguments.length;
var i__37883__auto___47084 = (0);
while(true){
if((i__37883__auto___47084 < len__37882__auto___47083)){
args__37889__auto__.push((arguments[i__37883__auto___47084]));

var G__47085 = (i__37883__auto___47084 + (1));
i__37883__auto___47084 = G__47085;
continue;
} else {
}
break;
}

var argseq__37890__auto__ = ((((0) < args__37889__auto__.length))?(new cljs.core.IndexedSeq(args__37889__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__37890__auto__);
});})(g__40268__auto___47082))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40268__auto___47082){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40268__auto___47082),args);
});})(g__40268__auto___47082))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__40268__auto___47082){
return (function (seq47021){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47021));
});})(g__40268__auto___47082))
;


var g__40268__auto___47086 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__40268__auto___47086){
return (function cljs$spec$gen$alpha$return(var_args){
var args__37889__auto__ = [];
var len__37882__auto___47087 = arguments.length;
var i__37883__auto___47088 = (0);
while(true){
if((i__37883__auto___47088 < len__37882__auto___47087)){
args__37889__auto__.push((arguments[i__37883__auto___47088]));

var G__47089 = (i__37883__auto___47088 + (1));
i__37883__auto___47088 = G__47089;
continue;
} else {
}
break;
}

var argseq__37890__auto__ = ((((0) < args__37889__auto__.length))?(new cljs.core.IndexedSeq(args__37889__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__37890__auto__);
});})(g__40268__auto___47086))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40268__auto___47086){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40268__auto___47086),args);
});})(g__40268__auto___47086))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__40268__auto___47086){
return (function (seq47022){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47022));
});})(g__40268__auto___47086))
;


var g__40268__auto___47090 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__40268__auto___47090){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__37889__auto__ = [];
var len__37882__auto___47091 = arguments.length;
var i__37883__auto___47092 = (0);
while(true){
if((i__37883__auto___47092 < len__37882__auto___47091)){
args__37889__auto__.push((arguments[i__37883__auto___47092]));

var G__47093 = (i__37883__auto___47092 + (1));
i__37883__auto___47092 = G__47093;
continue;
} else {
}
break;
}

var argseq__37890__auto__ = ((((0) < args__37889__auto__.length))?(new cljs.core.IndexedSeq(args__37889__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__37890__auto__);
});})(g__40268__auto___47090))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40268__auto___47090){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40268__auto___47090),args);
});})(g__40268__auto___47090))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__40268__auto___47090){
return (function (seq47023){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47023));
});})(g__40268__auto___47090))
;


var g__40268__auto___47094 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__40268__auto___47094){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__37889__auto__ = [];
var len__37882__auto___47095 = arguments.length;
var i__37883__auto___47096 = (0);
while(true){
if((i__37883__auto___47096 < len__37882__auto___47095)){
args__37889__auto__.push((arguments[i__37883__auto___47096]));

var G__47097 = (i__37883__auto___47096 + (1));
i__37883__auto___47096 = G__47097;
continue;
} else {
}
break;
}

var argseq__37890__auto__ = ((((0) < args__37889__auto__.length))?(new cljs.core.IndexedSeq(args__37889__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__37890__auto__);
});})(g__40268__auto___47094))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40268__auto___47094){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40268__auto___47094),args);
});})(g__40268__auto___47094))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__40268__auto___47094){
return (function (seq47024){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47024));
});})(g__40268__auto___47094))
;


var g__40268__auto___47098 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__40268__auto___47098){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__37889__auto__ = [];
var len__37882__auto___47099 = arguments.length;
var i__37883__auto___47100 = (0);
while(true){
if((i__37883__auto___47100 < len__37882__auto___47099)){
args__37889__auto__.push((arguments[i__37883__auto___47100]));

var G__47101 = (i__37883__auto___47100 + (1));
i__37883__auto___47100 = G__47101;
continue;
} else {
}
break;
}

var argseq__37890__auto__ = ((((0) < args__37889__auto__.length))?(new cljs.core.IndexedSeq(args__37889__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__37890__auto__);
});})(g__40268__auto___47098))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40268__auto___47098){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40268__auto___47098),args);
});})(g__40268__auto___47098))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__40268__auto___47098){
return (function (seq47025){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47025));
});})(g__40268__auto___47098))
;

var g__40281__auto___47123 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__40281__auto___47123){
return (function cljs$spec$gen$alpha$any(var_args){
var args__37889__auto__ = [];
var len__37882__auto___47124 = arguments.length;
var i__37883__auto___47125 = (0);
while(true){
if((i__37883__auto___47125 < len__37882__auto___47124)){
args__37889__auto__.push((arguments[i__37883__auto___47125]));

var G__47126 = (i__37883__auto___47125 + (1));
i__37883__auto___47125 = G__47126;
continue;
} else {
}
break;
}

var argseq__37890__auto__ = ((((0) < args__37889__auto__.length))?(new cljs.core.IndexedSeq(args__37889__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__37890__auto__);
});})(g__40281__auto___47123))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40281__auto___47123){
return (function (args){
return cljs.core.deref.call(null,g__40281__auto___47123);
});})(g__40281__auto___47123))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__40281__auto___47123){
return (function (seq47102){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47102));
});})(g__40281__auto___47123))
;


var g__40281__auto___47127 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__40281__auto___47127){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__37889__auto__ = [];
var len__37882__auto___47128 = arguments.length;
var i__37883__auto___47129 = (0);
while(true){
if((i__37883__auto___47129 < len__37882__auto___47128)){
args__37889__auto__.push((arguments[i__37883__auto___47129]));

var G__47130 = (i__37883__auto___47129 + (1));
i__37883__auto___47129 = G__47130;
continue;
} else {
}
break;
}

var argseq__37890__auto__ = ((((0) < args__37889__auto__.length))?(new cljs.core.IndexedSeq(args__37889__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__37890__auto__);
});})(g__40281__auto___47127))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40281__auto___47127){
return (function (args){
return cljs.core.deref.call(null,g__40281__auto___47127);
});})(g__40281__auto___47127))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__40281__auto___47127){
return (function (seq47103){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47103));
});})(g__40281__auto___47127))
;


var g__40281__auto___47131 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__40281__auto___47131){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__37889__auto__ = [];
var len__37882__auto___47132 = arguments.length;
var i__37883__auto___47133 = (0);
while(true){
if((i__37883__auto___47133 < len__37882__auto___47132)){
args__37889__auto__.push((arguments[i__37883__auto___47133]));

var G__47134 = (i__37883__auto___47133 + (1));
i__37883__auto___47133 = G__47134;
continue;
} else {
}
break;
}

var argseq__37890__auto__ = ((((0) < args__37889__auto__.length))?(new cljs.core.IndexedSeq(args__37889__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__37890__auto__);
});})(g__40281__auto___47131))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40281__auto___47131){
return (function (args){
return cljs.core.deref.call(null,g__40281__auto___47131);
});})(g__40281__auto___47131))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__40281__auto___47131){
return (function (seq47104){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47104));
});})(g__40281__auto___47131))
;


var g__40281__auto___47135 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__40281__auto___47135){
return (function cljs$spec$gen$alpha$char(var_args){
var args__37889__auto__ = [];
var len__37882__auto___47136 = arguments.length;
var i__37883__auto___47137 = (0);
while(true){
if((i__37883__auto___47137 < len__37882__auto___47136)){
args__37889__auto__.push((arguments[i__37883__auto___47137]));

var G__47138 = (i__37883__auto___47137 + (1));
i__37883__auto___47137 = G__47138;
continue;
} else {
}
break;
}

var argseq__37890__auto__ = ((((0) < args__37889__auto__.length))?(new cljs.core.IndexedSeq(args__37889__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__37890__auto__);
});})(g__40281__auto___47135))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40281__auto___47135){
return (function (args){
return cljs.core.deref.call(null,g__40281__auto___47135);
});})(g__40281__auto___47135))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__40281__auto___47135){
return (function (seq47105){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47105));
});})(g__40281__auto___47135))
;


var g__40281__auto___47139 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__40281__auto___47139){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__37889__auto__ = [];
var len__37882__auto___47140 = arguments.length;
var i__37883__auto___47141 = (0);
while(true){
if((i__37883__auto___47141 < len__37882__auto___47140)){
args__37889__auto__.push((arguments[i__37883__auto___47141]));

var G__47142 = (i__37883__auto___47141 + (1));
i__37883__auto___47141 = G__47142;
continue;
} else {
}
break;
}

var argseq__37890__auto__ = ((((0) < args__37889__auto__.length))?(new cljs.core.IndexedSeq(args__37889__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__37890__auto__);
});})(g__40281__auto___47139))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40281__auto___47139){
return (function (args){
return cljs.core.deref.call(null,g__40281__auto___47139);
});})(g__40281__auto___47139))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__40281__auto___47139){
return (function (seq47106){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47106));
});})(g__40281__auto___47139))
;


var g__40281__auto___47143 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__40281__auto___47143){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__37889__auto__ = [];
var len__37882__auto___47144 = arguments.length;
var i__37883__auto___47145 = (0);
while(true){
if((i__37883__auto___47145 < len__37882__auto___47144)){
args__37889__auto__.push((arguments[i__37883__auto___47145]));

var G__47146 = (i__37883__auto___47145 + (1));
i__37883__auto___47145 = G__47146;
continue;
} else {
}
break;
}

var argseq__37890__auto__ = ((((0) < args__37889__auto__.length))?(new cljs.core.IndexedSeq(args__37889__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__37890__auto__);
});})(g__40281__auto___47143))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40281__auto___47143){
return (function (args){
return cljs.core.deref.call(null,g__40281__auto___47143);
});})(g__40281__auto___47143))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__40281__auto___47143){
return (function (seq47107){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47107));
});})(g__40281__auto___47143))
;


var g__40281__auto___47147 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__40281__auto___47147){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__37889__auto__ = [];
var len__37882__auto___47148 = arguments.length;
var i__37883__auto___47149 = (0);
while(true){
if((i__37883__auto___47149 < len__37882__auto___47148)){
args__37889__auto__.push((arguments[i__37883__auto___47149]));

var G__47150 = (i__37883__auto___47149 + (1));
i__37883__auto___47149 = G__47150;
continue;
} else {
}
break;
}

var argseq__37890__auto__ = ((((0) < args__37889__auto__.length))?(new cljs.core.IndexedSeq(args__37889__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__37890__auto__);
});})(g__40281__auto___47147))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40281__auto___47147){
return (function (args){
return cljs.core.deref.call(null,g__40281__auto___47147);
});})(g__40281__auto___47147))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__40281__auto___47147){
return (function (seq47108){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47108));
});})(g__40281__auto___47147))
;


var g__40281__auto___47151 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__40281__auto___47151){
return (function cljs$spec$gen$alpha$double(var_args){
var args__37889__auto__ = [];
var len__37882__auto___47152 = arguments.length;
var i__37883__auto___47153 = (0);
while(true){
if((i__37883__auto___47153 < len__37882__auto___47152)){
args__37889__auto__.push((arguments[i__37883__auto___47153]));

var G__47154 = (i__37883__auto___47153 + (1));
i__37883__auto___47153 = G__47154;
continue;
} else {
}
break;
}

var argseq__37890__auto__ = ((((0) < args__37889__auto__.length))?(new cljs.core.IndexedSeq(args__37889__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__37890__auto__);
});})(g__40281__auto___47151))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40281__auto___47151){
return (function (args){
return cljs.core.deref.call(null,g__40281__auto___47151);
});})(g__40281__auto___47151))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__40281__auto___47151){
return (function (seq47109){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47109));
});})(g__40281__auto___47151))
;


var g__40281__auto___47155 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__40281__auto___47155){
return (function cljs$spec$gen$alpha$int(var_args){
var args__37889__auto__ = [];
var len__37882__auto___47156 = arguments.length;
var i__37883__auto___47157 = (0);
while(true){
if((i__37883__auto___47157 < len__37882__auto___47156)){
args__37889__auto__.push((arguments[i__37883__auto___47157]));

var G__47158 = (i__37883__auto___47157 + (1));
i__37883__auto___47157 = G__47158;
continue;
} else {
}
break;
}

var argseq__37890__auto__ = ((((0) < args__37889__auto__.length))?(new cljs.core.IndexedSeq(args__37889__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__37890__auto__);
});})(g__40281__auto___47155))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40281__auto___47155){
return (function (args){
return cljs.core.deref.call(null,g__40281__auto___47155);
});})(g__40281__auto___47155))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__40281__auto___47155){
return (function (seq47110){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47110));
});})(g__40281__auto___47155))
;


var g__40281__auto___47159 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__40281__auto___47159){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__37889__auto__ = [];
var len__37882__auto___47160 = arguments.length;
var i__37883__auto___47161 = (0);
while(true){
if((i__37883__auto___47161 < len__37882__auto___47160)){
args__37889__auto__.push((arguments[i__37883__auto___47161]));

var G__47162 = (i__37883__auto___47161 + (1));
i__37883__auto___47161 = G__47162;
continue;
} else {
}
break;
}

var argseq__37890__auto__ = ((((0) < args__37889__auto__.length))?(new cljs.core.IndexedSeq(args__37889__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__37890__auto__);
});})(g__40281__auto___47159))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40281__auto___47159){
return (function (args){
return cljs.core.deref.call(null,g__40281__auto___47159);
});})(g__40281__auto___47159))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__40281__auto___47159){
return (function (seq47111){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47111));
});})(g__40281__auto___47159))
;


var g__40281__auto___47163 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__40281__auto___47163){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__37889__auto__ = [];
var len__37882__auto___47164 = arguments.length;
var i__37883__auto___47165 = (0);
while(true){
if((i__37883__auto___47165 < len__37882__auto___47164)){
args__37889__auto__.push((arguments[i__37883__auto___47165]));

var G__47166 = (i__37883__auto___47165 + (1));
i__37883__auto___47165 = G__47166;
continue;
} else {
}
break;
}

var argseq__37890__auto__ = ((((0) < args__37889__auto__.length))?(new cljs.core.IndexedSeq(args__37889__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__37890__auto__);
});})(g__40281__auto___47163))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40281__auto___47163){
return (function (args){
return cljs.core.deref.call(null,g__40281__auto___47163);
});})(g__40281__auto___47163))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__40281__auto___47163){
return (function (seq47112){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47112));
});})(g__40281__auto___47163))
;


var g__40281__auto___47167 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__40281__auto___47167){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__37889__auto__ = [];
var len__37882__auto___47168 = arguments.length;
var i__37883__auto___47169 = (0);
while(true){
if((i__37883__auto___47169 < len__37882__auto___47168)){
args__37889__auto__.push((arguments[i__37883__auto___47169]));

var G__47170 = (i__37883__auto___47169 + (1));
i__37883__auto___47169 = G__47170;
continue;
} else {
}
break;
}

var argseq__37890__auto__ = ((((0) < args__37889__auto__.length))?(new cljs.core.IndexedSeq(args__37889__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__37890__auto__);
});})(g__40281__auto___47167))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40281__auto___47167){
return (function (args){
return cljs.core.deref.call(null,g__40281__auto___47167);
});})(g__40281__auto___47167))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__40281__auto___47167){
return (function (seq47113){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47113));
});})(g__40281__auto___47167))
;


var g__40281__auto___47171 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__40281__auto___47171){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__37889__auto__ = [];
var len__37882__auto___47172 = arguments.length;
var i__37883__auto___47173 = (0);
while(true){
if((i__37883__auto___47173 < len__37882__auto___47172)){
args__37889__auto__.push((arguments[i__37883__auto___47173]));

var G__47174 = (i__37883__auto___47173 + (1));
i__37883__auto___47173 = G__47174;
continue;
} else {
}
break;
}

var argseq__37890__auto__ = ((((0) < args__37889__auto__.length))?(new cljs.core.IndexedSeq(args__37889__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__37890__auto__);
});})(g__40281__auto___47171))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40281__auto___47171){
return (function (args){
return cljs.core.deref.call(null,g__40281__auto___47171);
});})(g__40281__auto___47171))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__40281__auto___47171){
return (function (seq47114){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47114));
});})(g__40281__auto___47171))
;


var g__40281__auto___47175 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__40281__auto___47175){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__37889__auto__ = [];
var len__37882__auto___47176 = arguments.length;
var i__37883__auto___47177 = (0);
while(true){
if((i__37883__auto___47177 < len__37882__auto___47176)){
args__37889__auto__.push((arguments[i__37883__auto___47177]));

var G__47178 = (i__37883__auto___47177 + (1));
i__37883__auto___47177 = G__47178;
continue;
} else {
}
break;
}

var argseq__37890__auto__ = ((((0) < args__37889__auto__.length))?(new cljs.core.IndexedSeq(args__37889__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__37890__auto__);
});})(g__40281__auto___47175))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40281__auto___47175){
return (function (args){
return cljs.core.deref.call(null,g__40281__auto___47175);
});})(g__40281__auto___47175))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__40281__auto___47175){
return (function (seq47115){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47115));
});})(g__40281__auto___47175))
;


var g__40281__auto___47179 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__40281__auto___47179){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__37889__auto__ = [];
var len__37882__auto___47180 = arguments.length;
var i__37883__auto___47181 = (0);
while(true){
if((i__37883__auto___47181 < len__37882__auto___47180)){
args__37889__auto__.push((arguments[i__37883__auto___47181]));

var G__47182 = (i__37883__auto___47181 + (1));
i__37883__auto___47181 = G__47182;
continue;
} else {
}
break;
}

var argseq__37890__auto__ = ((((0) < args__37889__auto__.length))?(new cljs.core.IndexedSeq(args__37889__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__37890__auto__);
});})(g__40281__auto___47179))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40281__auto___47179){
return (function (args){
return cljs.core.deref.call(null,g__40281__auto___47179);
});})(g__40281__auto___47179))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__40281__auto___47179){
return (function (seq47116){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47116));
});})(g__40281__auto___47179))
;


var g__40281__auto___47183 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__40281__auto___47183){
return (function cljs$spec$gen$alpha$string(var_args){
var args__37889__auto__ = [];
var len__37882__auto___47184 = arguments.length;
var i__37883__auto___47185 = (0);
while(true){
if((i__37883__auto___47185 < len__37882__auto___47184)){
args__37889__auto__.push((arguments[i__37883__auto___47185]));

var G__47186 = (i__37883__auto___47185 + (1));
i__37883__auto___47185 = G__47186;
continue;
} else {
}
break;
}

var argseq__37890__auto__ = ((((0) < args__37889__auto__.length))?(new cljs.core.IndexedSeq(args__37889__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__37890__auto__);
});})(g__40281__auto___47183))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40281__auto___47183){
return (function (args){
return cljs.core.deref.call(null,g__40281__auto___47183);
});})(g__40281__auto___47183))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__40281__auto___47183){
return (function (seq47117){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47117));
});})(g__40281__auto___47183))
;


var g__40281__auto___47187 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__40281__auto___47187){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__37889__auto__ = [];
var len__37882__auto___47188 = arguments.length;
var i__37883__auto___47189 = (0);
while(true){
if((i__37883__auto___47189 < len__37882__auto___47188)){
args__37889__auto__.push((arguments[i__37883__auto___47189]));

var G__47190 = (i__37883__auto___47189 + (1));
i__37883__auto___47189 = G__47190;
continue;
} else {
}
break;
}

var argseq__37890__auto__ = ((((0) < args__37889__auto__.length))?(new cljs.core.IndexedSeq(args__37889__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__37890__auto__);
});})(g__40281__auto___47187))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40281__auto___47187){
return (function (args){
return cljs.core.deref.call(null,g__40281__auto___47187);
});})(g__40281__auto___47187))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__40281__auto___47187){
return (function (seq47118){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47118));
});})(g__40281__auto___47187))
;


var g__40281__auto___47191 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__40281__auto___47191){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__37889__auto__ = [];
var len__37882__auto___47192 = arguments.length;
var i__37883__auto___47193 = (0);
while(true){
if((i__37883__auto___47193 < len__37882__auto___47192)){
args__37889__auto__.push((arguments[i__37883__auto___47193]));

var G__47194 = (i__37883__auto___47193 + (1));
i__37883__auto___47193 = G__47194;
continue;
} else {
}
break;
}

var argseq__37890__auto__ = ((((0) < args__37889__auto__.length))?(new cljs.core.IndexedSeq(args__37889__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__37890__auto__);
});})(g__40281__auto___47191))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40281__auto___47191){
return (function (args){
return cljs.core.deref.call(null,g__40281__auto___47191);
});})(g__40281__auto___47191))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__40281__auto___47191){
return (function (seq47119){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47119));
});})(g__40281__auto___47191))
;


var g__40281__auto___47195 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__40281__auto___47195){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__37889__auto__ = [];
var len__37882__auto___47196 = arguments.length;
var i__37883__auto___47197 = (0);
while(true){
if((i__37883__auto___47197 < len__37882__auto___47196)){
args__37889__auto__.push((arguments[i__37883__auto___47197]));

var G__47198 = (i__37883__auto___47197 + (1));
i__37883__auto___47197 = G__47198;
continue;
} else {
}
break;
}

var argseq__37890__auto__ = ((((0) < args__37889__auto__.length))?(new cljs.core.IndexedSeq(args__37889__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__37890__auto__);
});})(g__40281__auto___47195))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40281__auto___47195){
return (function (args){
return cljs.core.deref.call(null,g__40281__auto___47195);
});})(g__40281__auto___47195))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__40281__auto___47195){
return (function (seq47120){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47120));
});})(g__40281__auto___47195))
;


var g__40281__auto___47199 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__40281__auto___47199){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__37889__auto__ = [];
var len__37882__auto___47200 = arguments.length;
var i__37883__auto___47201 = (0);
while(true){
if((i__37883__auto___47201 < len__37882__auto___47200)){
args__37889__auto__.push((arguments[i__37883__auto___47201]));

var G__47202 = (i__37883__auto___47201 + (1));
i__37883__auto___47201 = G__47202;
continue;
} else {
}
break;
}

var argseq__37890__auto__ = ((((0) < args__37889__auto__.length))?(new cljs.core.IndexedSeq(args__37889__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__37890__auto__);
});})(g__40281__auto___47199))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40281__auto___47199){
return (function (args){
return cljs.core.deref.call(null,g__40281__auto___47199);
});})(g__40281__auto___47199))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__40281__auto___47199){
return (function (seq47121){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47121));
});})(g__40281__auto___47199))
;


var g__40281__auto___47203 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__40281__auto___47203){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__37889__auto__ = [];
var len__37882__auto___47204 = arguments.length;
var i__37883__auto___47205 = (0);
while(true){
if((i__37883__auto___47205 < len__37882__auto___47204)){
args__37889__auto__.push((arguments[i__37883__auto___47205]));

var G__47206 = (i__37883__auto___47205 + (1));
i__37883__auto___47205 = G__47206;
continue;
} else {
}
break;
}

var argseq__37890__auto__ = ((((0) < args__37889__auto__.length))?(new cljs.core.IndexedSeq(args__37889__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__37890__auto__);
});})(g__40281__auto___47203))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40281__auto___47203){
return (function (args){
return cljs.core.deref.call(null,g__40281__auto___47203);
});})(g__40281__auto___47203))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__40281__auto___47203){
return (function (seq47122){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47122));
});})(g__40281__auto___47203))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__37889__auto__ = [];
var len__37882__auto___47209 = arguments.length;
var i__37883__auto___47210 = (0);
while(true){
if((i__37883__auto___47210 < len__37882__auto___47209)){
args__37889__auto__.push((arguments[i__37883__auto___47210]));

var G__47211 = (i__37883__auto___47210 + (1));
i__37883__auto___47210 = G__47211;
continue;
} else {
}
break;
}

var argseq__37890__auto__ = ((((0) < args__37889__auto__.length))?(new cljs.core.IndexedSeq(args__37889__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__37890__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__47207_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__47207_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq47208){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47208));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__47212_SHARP_){
return (new Date(p1__47212_SHARP_));
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

//# sourceMappingURL=alpha.js.map?rel=1503441679275