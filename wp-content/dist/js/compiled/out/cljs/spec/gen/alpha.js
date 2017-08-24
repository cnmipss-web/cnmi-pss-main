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

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__37367__auto__,writer__37368__auto__,opt__37369__auto__){
return cljs.core._write.call(null,writer__37368__auto__,"cljs.spec.gen.alpha/LazyVar");
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
var args__37888__auto__ = [];
var len__37881__auto___46994 = arguments.length;
var i__37882__auto___46995 = (0);
while(true){
if((i__37882__auto___46995 < len__37881__auto___46994)){
args__37888__auto__.push((arguments[i__37882__auto___46995]));

var G__46996 = (i__37882__auto___46995 + (1));
i__37882__auto___46995 = G__46996;
continue;
} else {
}
break;
}

var argseq__37889__auto__ = ((((0) < args__37888__auto__.length))?(new cljs.core.IndexedSeq(args__37888__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__37889__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq46993){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46993));
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
var args__37888__auto__ = [];
var len__37881__auto___46998 = arguments.length;
var i__37882__auto___46999 = (0);
while(true){
if((i__37882__auto___46999 < len__37881__auto___46998)){
args__37888__auto__.push((arguments[i__37882__auto___46999]));

var G__47000 = (i__37882__auto___46999 + (1));
i__37882__auto___46999 = G__47000;
continue;
} else {
}
break;
}

var argseq__37889__auto__ = ((((0) < args__37888__auto__.length))?(new cljs.core.IndexedSeq(args__37888__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__37889__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq46997){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46997));
});

var g_QMARK__47001 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_47002 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__47001){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__47001))
,null));
var mkg_47003 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__47001,g_47002){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__47001,g_47002))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__47001,g_47002,mkg_47003){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__47001).call(null,x);
});})(g_QMARK__47001,g_47002,mkg_47003))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__47001,g_47002,mkg_47003){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_47003).call(null,gfn);
});})(g_QMARK__47001,g_47002,mkg_47003))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__47001,g_47002,mkg_47003){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_47002).call(null,generator);
});})(g_QMARK__47001,g_47002,mkg_47003))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__39151__auto___47023 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__39151__auto___47023){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__37888__auto__ = [];
var len__37881__auto___47024 = arguments.length;
var i__37882__auto___47025 = (0);
while(true){
if((i__37882__auto___47025 < len__37881__auto___47024)){
args__37888__auto__.push((arguments[i__37882__auto___47025]));

var G__47026 = (i__37882__auto___47025 + (1));
i__37882__auto___47025 = G__47026;
continue;
} else {
}
break;
}

var argseq__37889__auto__ = ((((0) < args__37888__auto__.length))?(new cljs.core.IndexedSeq(args__37888__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__37889__auto__);
});})(g__39151__auto___47023))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39151__auto___47023){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__39151__auto___47023),args);
});})(g__39151__auto___47023))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__39151__auto___47023){
return (function (seq47004){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47004));
});})(g__39151__auto___47023))
;


var g__39151__auto___47027 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__39151__auto___47027){
return (function cljs$spec$gen$alpha$list(var_args){
var args__37888__auto__ = [];
var len__37881__auto___47028 = arguments.length;
var i__37882__auto___47029 = (0);
while(true){
if((i__37882__auto___47029 < len__37881__auto___47028)){
args__37888__auto__.push((arguments[i__37882__auto___47029]));

var G__47030 = (i__37882__auto___47029 + (1));
i__37882__auto___47029 = G__47030;
continue;
} else {
}
break;
}

var argseq__37889__auto__ = ((((0) < args__37888__auto__.length))?(new cljs.core.IndexedSeq(args__37888__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__37889__auto__);
});})(g__39151__auto___47027))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39151__auto___47027){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__39151__auto___47027),args);
});})(g__39151__auto___47027))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__39151__auto___47027){
return (function (seq47005){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47005));
});})(g__39151__auto___47027))
;


var g__39151__auto___47031 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__39151__auto___47031){
return (function cljs$spec$gen$alpha$map(var_args){
var args__37888__auto__ = [];
var len__37881__auto___47032 = arguments.length;
var i__37882__auto___47033 = (0);
while(true){
if((i__37882__auto___47033 < len__37881__auto___47032)){
args__37888__auto__.push((arguments[i__37882__auto___47033]));

var G__47034 = (i__37882__auto___47033 + (1));
i__37882__auto___47033 = G__47034;
continue;
} else {
}
break;
}

var argseq__37889__auto__ = ((((0) < args__37888__auto__.length))?(new cljs.core.IndexedSeq(args__37888__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__37889__auto__);
});})(g__39151__auto___47031))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39151__auto___47031){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__39151__auto___47031),args);
});})(g__39151__auto___47031))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__39151__auto___47031){
return (function (seq47006){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47006));
});})(g__39151__auto___47031))
;


var g__39151__auto___47035 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__39151__auto___47035){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__37888__auto__ = [];
var len__37881__auto___47036 = arguments.length;
var i__37882__auto___47037 = (0);
while(true){
if((i__37882__auto___47037 < len__37881__auto___47036)){
args__37888__auto__.push((arguments[i__37882__auto___47037]));

var G__47038 = (i__37882__auto___47037 + (1));
i__37882__auto___47037 = G__47038;
continue;
} else {
}
break;
}

var argseq__37889__auto__ = ((((0) < args__37888__auto__.length))?(new cljs.core.IndexedSeq(args__37888__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__37889__auto__);
});})(g__39151__auto___47035))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39151__auto___47035){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__39151__auto___47035),args);
});})(g__39151__auto___47035))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__39151__auto___47035){
return (function (seq47007){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47007));
});})(g__39151__auto___47035))
;


var g__39151__auto___47039 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__39151__auto___47039){
return (function cljs$spec$gen$alpha$set(var_args){
var args__37888__auto__ = [];
var len__37881__auto___47040 = arguments.length;
var i__37882__auto___47041 = (0);
while(true){
if((i__37882__auto___47041 < len__37881__auto___47040)){
args__37888__auto__.push((arguments[i__37882__auto___47041]));

var G__47042 = (i__37882__auto___47041 + (1));
i__37882__auto___47041 = G__47042;
continue;
} else {
}
break;
}

var argseq__37889__auto__ = ((((0) < args__37888__auto__.length))?(new cljs.core.IndexedSeq(args__37888__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__37889__auto__);
});})(g__39151__auto___47039))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39151__auto___47039){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__39151__auto___47039),args);
});})(g__39151__auto___47039))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__39151__auto___47039){
return (function (seq47008){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47008));
});})(g__39151__auto___47039))
;


var g__39151__auto___47043 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__39151__auto___47043){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__37888__auto__ = [];
var len__37881__auto___47044 = arguments.length;
var i__37882__auto___47045 = (0);
while(true){
if((i__37882__auto___47045 < len__37881__auto___47044)){
args__37888__auto__.push((arguments[i__37882__auto___47045]));

var G__47046 = (i__37882__auto___47045 + (1));
i__37882__auto___47045 = G__47046;
continue;
} else {
}
break;
}

var argseq__37889__auto__ = ((((0) < args__37888__auto__.length))?(new cljs.core.IndexedSeq(args__37888__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__37889__auto__);
});})(g__39151__auto___47043))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39151__auto___47043){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__39151__auto___47043),args);
});})(g__39151__auto___47043))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__39151__auto___47043){
return (function (seq47009){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47009));
});})(g__39151__auto___47043))
;


var g__39151__auto___47047 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__39151__auto___47047){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__37888__auto__ = [];
var len__37881__auto___47048 = arguments.length;
var i__37882__auto___47049 = (0);
while(true){
if((i__37882__auto___47049 < len__37881__auto___47048)){
args__37888__auto__.push((arguments[i__37882__auto___47049]));

var G__47050 = (i__37882__auto___47049 + (1));
i__37882__auto___47049 = G__47050;
continue;
} else {
}
break;
}

var argseq__37889__auto__ = ((((0) < args__37888__auto__.length))?(new cljs.core.IndexedSeq(args__37888__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__37889__auto__);
});})(g__39151__auto___47047))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39151__auto___47047){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__39151__auto___47047),args);
});})(g__39151__auto___47047))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__39151__auto___47047){
return (function (seq47010){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47010));
});})(g__39151__auto___47047))
;


var g__39151__auto___47051 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__39151__auto___47051){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__37888__auto__ = [];
var len__37881__auto___47052 = arguments.length;
var i__37882__auto___47053 = (0);
while(true){
if((i__37882__auto___47053 < len__37881__auto___47052)){
args__37888__auto__.push((arguments[i__37882__auto___47053]));

var G__47054 = (i__37882__auto___47053 + (1));
i__37882__auto___47053 = G__47054;
continue;
} else {
}
break;
}

var argseq__37889__auto__ = ((((0) < args__37888__auto__.length))?(new cljs.core.IndexedSeq(args__37888__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__37889__auto__);
});})(g__39151__auto___47051))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39151__auto___47051){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__39151__auto___47051),args);
});})(g__39151__auto___47051))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__39151__auto___47051){
return (function (seq47011){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47011));
});})(g__39151__auto___47051))
;


var g__39151__auto___47055 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__39151__auto___47055){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__37888__auto__ = [];
var len__37881__auto___47056 = arguments.length;
var i__37882__auto___47057 = (0);
while(true){
if((i__37882__auto___47057 < len__37881__auto___47056)){
args__37888__auto__.push((arguments[i__37882__auto___47057]));

var G__47058 = (i__37882__auto___47057 + (1));
i__37882__auto___47057 = G__47058;
continue;
} else {
}
break;
}

var argseq__37889__auto__ = ((((0) < args__37888__auto__.length))?(new cljs.core.IndexedSeq(args__37888__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__37889__auto__);
});})(g__39151__auto___47055))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39151__auto___47055){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__39151__auto___47055),args);
});})(g__39151__auto___47055))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__39151__auto___47055){
return (function (seq47012){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47012));
});})(g__39151__auto___47055))
;


var g__39151__auto___47059 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__39151__auto___47059){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__37888__auto__ = [];
var len__37881__auto___47060 = arguments.length;
var i__37882__auto___47061 = (0);
while(true){
if((i__37882__auto___47061 < len__37881__auto___47060)){
args__37888__auto__.push((arguments[i__37882__auto___47061]));

var G__47062 = (i__37882__auto___47061 + (1));
i__37882__auto___47061 = G__47062;
continue;
} else {
}
break;
}

var argseq__37889__auto__ = ((((0) < args__37888__auto__.length))?(new cljs.core.IndexedSeq(args__37888__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__37889__auto__);
});})(g__39151__auto___47059))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39151__auto___47059){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__39151__auto___47059),args);
});})(g__39151__auto___47059))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__39151__auto___47059){
return (function (seq47013){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47013));
});})(g__39151__auto___47059))
;


var g__39151__auto___47063 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__39151__auto___47063){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__37888__auto__ = [];
var len__37881__auto___47064 = arguments.length;
var i__37882__auto___47065 = (0);
while(true){
if((i__37882__auto___47065 < len__37881__auto___47064)){
args__37888__auto__.push((arguments[i__37882__auto___47065]));

var G__47066 = (i__37882__auto___47065 + (1));
i__37882__auto___47065 = G__47066;
continue;
} else {
}
break;
}

var argseq__37889__auto__ = ((((0) < args__37888__auto__.length))?(new cljs.core.IndexedSeq(args__37888__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__37889__auto__);
});})(g__39151__auto___47063))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39151__auto___47063){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__39151__auto___47063),args);
});})(g__39151__auto___47063))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__39151__auto___47063){
return (function (seq47014){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47014));
});})(g__39151__auto___47063))
;


var g__39151__auto___47067 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__39151__auto___47067){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__37888__auto__ = [];
var len__37881__auto___47068 = arguments.length;
var i__37882__auto___47069 = (0);
while(true){
if((i__37882__auto___47069 < len__37881__auto___47068)){
args__37888__auto__.push((arguments[i__37882__auto___47069]));

var G__47070 = (i__37882__auto___47069 + (1));
i__37882__auto___47069 = G__47070;
continue;
} else {
}
break;
}

var argseq__37889__auto__ = ((((0) < args__37888__auto__.length))?(new cljs.core.IndexedSeq(args__37888__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__37889__auto__);
});})(g__39151__auto___47067))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39151__auto___47067){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__39151__auto___47067),args);
});})(g__39151__auto___47067))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__39151__auto___47067){
return (function (seq47015){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47015));
});})(g__39151__auto___47067))
;


var g__39151__auto___47071 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__39151__auto___47071){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__37888__auto__ = [];
var len__37881__auto___47072 = arguments.length;
var i__37882__auto___47073 = (0);
while(true){
if((i__37882__auto___47073 < len__37881__auto___47072)){
args__37888__auto__.push((arguments[i__37882__auto___47073]));

var G__47074 = (i__37882__auto___47073 + (1));
i__37882__auto___47073 = G__47074;
continue;
} else {
}
break;
}

var argseq__37889__auto__ = ((((0) < args__37888__auto__.length))?(new cljs.core.IndexedSeq(args__37888__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__37889__auto__);
});})(g__39151__auto___47071))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39151__auto___47071){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__39151__auto___47071),args);
});})(g__39151__auto___47071))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__39151__auto___47071){
return (function (seq47016){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47016));
});})(g__39151__auto___47071))
;


var g__39151__auto___47075 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__39151__auto___47075){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__37888__auto__ = [];
var len__37881__auto___47076 = arguments.length;
var i__37882__auto___47077 = (0);
while(true){
if((i__37882__auto___47077 < len__37881__auto___47076)){
args__37888__auto__.push((arguments[i__37882__auto___47077]));

var G__47078 = (i__37882__auto___47077 + (1));
i__37882__auto___47077 = G__47078;
continue;
} else {
}
break;
}

var argseq__37889__auto__ = ((((0) < args__37888__auto__.length))?(new cljs.core.IndexedSeq(args__37888__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__37889__auto__);
});})(g__39151__auto___47075))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39151__auto___47075){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__39151__auto___47075),args);
});})(g__39151__auto___47075))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__39151__auto___47075){
return (function (seq47017){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47017));
});})(g__39151__auto___47075))
;


var g__39151__auto___47079 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__39151__auto___47079){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__37888__auto__ = [];
var len__37881__auto___47080 = arguments.length;
var i__37882__auto___47081 = (0);
while(true){
if((i__37882__auto___47081 < len__37881__auto___47080)){
args__37888__auto__.push((arguments[i__37882__auto___47081]));

var G__47082 = (i__37882__auto___47081 + (1));
i__37882__auto___47081 = G__47082;
continue;
} else {
}
break;
}

var argseq__37889__auto__ = ((((0) < args__37888__auto__.length))?(new cljs.core.IndexedSeq(args__37888__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__37889__auto__);
});})(g__39151__auto___47079))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39151__auto___47079){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__39151__auto___47079),args);
});})(g__39151__auto___47079))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__39151__auto___47079){
return (function (seq47018){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47018));
});})(g__39151__auto___47079))
;


var g__39151__auto___47083 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__39151__auto___47083){
return (function cljs$spec$gen$alpha$return(var_args){
var args__37888__auto__ = [];
var len__37881__auto___47084 = arguments.length;
var i__37882__auto___47085 = (0);
while(true){
if((i__37882__auto___47085 < len__37881__auto___47084)){
args__37888__auto__.push((arguments[i__37882__auto___47085]));

var G__47086 = (i__37882__auto___47085 + (1));
i__37882__auto___47085 = G__47086;
continue;
} else {
}
break;
}

var argseq__37889__auto__ = ((((0) < args__37888__auto__.length))?(new cljs.core.IndexedSeq(args__37888__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__37889__auto__);
});})(g__39151__auto___47083))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39151__auto___47083){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__39151__auto___47083),args);
});})(g__39151__auto___47083))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__39151__auto___47083){
return (function (seq47019){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47019));
});})(g__39151__auto___47083))
;


var g__39151__auto___47087 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__39151__auto___47087){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__37888__auto__ = [];
var len__37881__auto___47088 = arguments.length;
var i__37882__auto___47089 = (0);
while(true){
if((i__37882__auto___47089 < len__37881__auto___47088)){
args__37888__auto__.push((arguments[i__37882__auto___47089]));

var G__47090 = (i__37882__auto___47089 + (1));
i__37882__auto___47089 = G__47090;
continue;
} else {
}
break;
}

var argseq__37889__auto__ = ((((0) < args__37888__auto__.length))?(new cljs.core.IndexedSeq(args__37888__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__37889__auto__);
});})(g__39151__auto___47087))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39151__auto___47087){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__39151__auto___47087),args);
});})(g__39151__auto___47087))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__39151__auto___47087){
return (function (seq47020){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47020));
});})(g__39151__auto___47087))
;


var g__39151__auto___47091 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__39151__auto___47091){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__37888__auto__ = [];
var len__37881__auto___47092 = arguments.length;
var i__37882__auto___47093 = (0);
while(true){
if((i__37882__auto___47093 < len__37881__auto___47092)){
args__37888__auto__.push((arguments[i__37882__auto___47093]));

var G__47094 = (i__37882__auto___47093 + (1));
i__37882__auto___47093 = G__47094;
continue;
} else {
}
break;
}

var argseq__37889__auto__ = ((((0) < args__37888__auto__.length))?(new cljs.core.IndexedSeq(args__37888__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__37889__auto__);
});})(g__39151__auto___47091))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39151__auto___47091){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__39151__auto___47091),args);
});})(g__39151__auto___47091))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__39151__auto___47091){
return (function (seq47021){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47021));
});})(g__39151__auto___47091))
;


var g__39151__auto___47095 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__39151__auto___47095){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__37888__auto__ = [];
var len__37881__auto___47096 = arguments.length;
var i__37882__auto___47097 = (0);
while(true){
if((i__37882__auto___47097 < len__37881__auto___47096)){
args__37888__auto__.push((arguments[i__37882__auto___47097]));

var G__47098 = (i__37882__auto___47097 + (1));
i__37882__auto___47097 = G__47098;
continue;
} else {
}
break;
}

var argseq__37889__auto__ = ((((0) < args__37888__auto__.length))?(new cljs.core.IndexedSeq(args__37888__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__37889__auto__);
});})(g__39151__auto___47095))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39151__auto___47095){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__39151__auto___47095),args);
});})(g__39151__auto___47095))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__39151__auto___47095){
return (function (seq47022){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47022));
});})(g__39151__auto___47095))
;

var g__39164__auto___47120 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__39164__auto___47120){
return (function cljs$spec$gen$alpha$any(var_args){
var args__37888__auto__ = [];
var len__37881__auto___47121 = arguments.length;
var i__37882__auto___47122 = (0);
while(true){
if((i__37882__auto___47122 < len__37881__auto___47121)){
args__37888__auto__.push((arguments[i__37882__auto___47122]));

var G__47123 = (i__37882__auto___47122 + (1));
i__37882__auto___47122 = G__47123;
continue;
} else {
}
break;
}

var argseq__37889__auto__ = ((((0) < args__37888__auto__.length))?(new cljs.core.IndexedSeq(args__37888__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__37889__auto__);
});})(g__39164__auto___47120))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39164__auto___47120){
return (function (args){
return cljs.core.deref.call(null,g__39164__auto___47120);
});})(g__39164__auto___47120))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__39164__auto___47120){
return (function (seq47099){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47099));
});})(g__39164__auto___47120))
;


var g__39164__auto___47124 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__39164__auto___47124){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__37888__auto__ = [];
var len__37881__auto___47125 = arguments.length;
var i__37882__auto___47126 = (0);
while(true){
if((i__37882__auto___47126 < len__37881__auto___47125)){
args__37888__auto__.push((arguments[i__37882__auto___47126]));

var G__47127 = (i__37882__auto___47126 + (1));
i__37882__auto___47126 = G__47127;
continue;
} else {
}
break;
}

var argseq__37889__auto__ = ((((0) < args__37888__auto__.length))?(new cljs.core.IndexedSeq(args__37888__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__37889__auto__);
});})(g__39164__auto___47124))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39164__auto___47124){
return (function (args){
return cljs.core.deref.call(null,g__39164__auto___47124);
});})(g__39164__auto___47124))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__39164__auto___47124){
return (function (seq47100){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47100));
});})(g__39164__auto___47124))
;


var g__39164__auto___47128 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__39164__auto___47128){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__37888__auto__ = [];
var len__37881__auto___47129 = arguments.length;
var i__37882__auto___47130 = (0);
while(true){
if((i__37882__auto___47130 < len__37881__auto___47129)){
args__37888__auto__.push((arguments[i__37882__auto___47130]));

var G__47131 = (i__37882__auto___47130 + (1));
i__37882__auto___47130 = G__47131;
continue;
} else {
}
break;
}

var argseq__37889__auto__ = ((((0) < args__37888__auto__.length))?(new cljs.core.IndexedSeq(args__37888__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__37889__auto__);
});})(g__39164__auto___47128))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39164__auto___47128){
return (function (args){
return cljs.core.deref.call(null,g__39164__auto___47128);
});})(g__39164__auto___47128))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__39164__auto___47128){
return (function (seq47101){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47101));
});})(g__39164__auto___47128))
;


var g__39164__auto___47132 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__39164__auto___47132){
return (function cljs$spec$gen$alpha$char(var_args){
var args__37888__auto__ = [];
var len__37881__auto___47133 = arguments.length;
var i__37882__auto___47134 = (0);
while(true){
if((i__37882__auto___47134 < len__37881__auto___47133)){
args__37888__auto__.push((arguments[i__37882__auto___47134]));

var G__47135 = (i__37882__auto___47134 + (1));
i__37882__auto___47134 = G__47135;
continue;
} else {
}
break;
}

var argseq__37889__auto__ = ((((0) < args__37888__auto__.length))?(new cljs.core.IndexedSeq(args__37888__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__37889__auto__);
});})(g__39164__auto___47132))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39164__auto___47132){
return (function (args){
return cljs.core.deref.call(null,g__39164__auto___47132);
});})(g__39164__auto___47132))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__39164__auto___47132){
return (function (seq47102){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47102));
});})(g__39164__auto___47132))
;


var g__39164__auto___47136 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__39164__auto___47136){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__37888__auto__ = [];
var len__37881__auto___47137 = arguments.length;
var i__37882__auto___47138 = (0);
while(true){
if((i__37882__auto___47138 < len__37881__auto___47137)){
args__37888__auto__.push((arguments[i__37882__auto___47138]));

var G__47139 = (i__37882__auto___47138 + (1));
i__37882__auto___47138 = G__47139;
continue;
} else {
}
break;
}

var argseq__37889__auto__ = ((((0) < args__37888__auto__.length))?(new cljs.core.IndexedSeq(args__37888__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__37889__auto__);
});})(g__39164__auto___47136))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39164__auto___47136){
return (function (args){
return cljs.core.deref.call(null,g__39164__auto___47136);
});})(g__39164__auto___47136))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__39164__auto___47136){
return (function (seq47103){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47103));
});})(g__39164__auto___47136))
;


var g__39164__auto___47140 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__39164__auto___47140){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__37888__auto__ = [];
var len__37881__auto___47141 = arguments.length;
var i__37882__auto___47142 = (0);
while(true){
if((i__37882__auto___47142 < len__37881__auto___47141)){
args__37888__auto__.push((arguments[i__37882__auto___47142]));

var G__47143 = (i__37882__auto___47142 + (1));
i__37882__auto___47142 = G__47143;
continue;
} else {
}
break;
}

var argseq__37889__auto__ = ((((0) < args__37888__auto__.length))?(new cljs.core.IndexedSeq(args__37888__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__37889__auto__);
});})(g__39164__auto___47140))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39164__auto___47140){
return (function (args){
return cljs.core.deref.call(null,g__39164__auto___47140);
});})(g__39164__auto___47140))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__39164__auto___47140){
return (function (seq47104){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47104));
});})(g__39164__auto___47140))
;


var g__39164__auto___47144 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__39164__auto___47144){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__37888__auto__ = [];
var len__37881__auto___47145 = arguments.length;
var i__37882__auto___47146 = (0);
while(true){
if((i__37882__auto___47146 < len__37881__auto___47145)){
args__37888__auto__.push((arguments[i__37882__auto___47146]));

var G__47147 = (i__37882__auto___47146 + (1));
i__37882__auto___47146 = G__47147;
continue;
} else {
}
break;
}

var argseq__37889__auto__ = ((((0) < args__37888__auto__.length))?(new cljs.core.IndexedSeq(args__37888__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__37889__auto__);
});})(g__39164__auto___47144))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39164__auto___47144){
return (function (args){
return cljs.core.deref.call(null,g__39164__auto___47144);
});})(g__39164__auto___47144))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__39164__auto___47144){
return (function (seq47105){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47105));
});})(g__39164__auto___47144))
;


var g__39164__auto___47148 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__39164__auto___47148){
return (function cljs$spec$gen$alpha$double(var_args){
var args__37888__auto__ = [];
var len__37881__auto___47149 = arguments.length;
var i__37882__auto___47150 = (0);
while(true){
if((i__37882__auto___47150 < len__37881__auto___47149)){
args__37888__auto__.push((arguments[i__37882__auto___47150]));

var G__47151 = (i__37882__auto___47150 + (1));
i__37882__auto___47150 = G__47151;
continue;
} else {
}
break;
}

var argseq__37889__auto__ = ((((0) < args__37888__auto__.length))?(new cljs.core.IndexedSeq(args__37888__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__37889__auto__);
});})(g__39164__auto___47148))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39164__auto___47148){
return (function (args){
return cljs.core.deref.call(null,g__39164__auto___47148);
});})(g__39164__auto___47148))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__39164__auto___47148){
return (function (seq47106){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47106));
});})(g__39164__auto___47148))
;


var g__39164__auto___47152 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__39164__auto___47152){
return (function cljs$spec$gen$alpha$int(var_args){
var args__37888__auto__ = [];
var len__37881__auto___47153 = arguments.length;
var i__37882__auto___47154 = (0);
while(true){
if((i__37882__auto___47154 < len__37881__auto___47153)){
args__37888__auto__.push((arguments[i__37882__auto___47154]));

var G__47155 = (i__37882__auto___47154 + (1));
i__37882__auto___47154 = G__47155;
continue;
} else {
}
break;
}

var argseq__37889__auto__ = ((((0) < args__37888__auto__.length))?(new cljs.core.IndexedSeq(args__37888__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__37889__auto__);
});})(g__39164__auto___47152))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39164__auto___47152){
return (function (args){
return cljs.core.deref.call(null,g__39164__auto___47152);
});})(g__39164__auto___47152))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__39164__auto___47152){
return (function (seq47107){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47107));
});})(g__39164__auto___47152))
;


var g__39164__auto___47156 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__39164__auto___47156){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__37888__auto__ = [];
var len__37881__auto___47157 = arguments.length;
var i__37882__auto___47158 = (0);
while(true){
if((i__37882__auto___47158 < len__37881__auto___47157)){
args__37888__auto__.push((arguments[i__37882__auto___47158]));

var G__47159 = (i__37882__auto___47158 + (1));
i__37882__auto___47158 = G__47159;
continue;
} else {
}
break;
}

var argseq__37889__auto__ = ((((0) < args__37888__auto__.length))?(new cljs.core.IndexedSeq(args__37888__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__37889__auto__);
});})(g__39164__auto___47156))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39164__auto___47156){
return (function (args){
return cljs.core.deref.call(null,g__39164__auto___47156);
});})(g__39164__auto___47156))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__39164__auto___47156){
return (function (seq47108){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47108));
});})(g__39164__auto___47156))
;


var g__39164__auto___47160 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__39164__auto___47160){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__37888__auto__ = [];
var len__37881__auto___47161 = arguments.length;
var i__37882__auto___47162 = (0);
while(true){
if((i__37882__auto___47162 < len__37881__auto___47161)){
args__37888__auto__.push((arguments[i__37882__auto___47162]));

var G__47163 = (i__37882__auto___47162 + (1));
i__37882__auto___47162 = G__47163;
continue;
} else {
}
break;
}

var argseq__37889__auto__ = ((((0) < args__37888__auto__.length))?(new cljs.core.IndexedSeq(args__37888__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__37889__auto__);
});})(g__39164__auto___47160))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39164__auto___47160){
return (function (args){
return cljs.core.deref.call(null,g__39164__auto___47160);
});})(g__39164__auto___47160))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__39164__auto___47160){
return (function (seq47109){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47109));
});})(g__39164__auto___47160))
;


var g__39164__auto___47164 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__39164__auto___47164){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__37888__auto__ = [];
var len__37881__auto___47165 = arguments.length;
var i__37882__auto___47166 = (0);
while(true){
if((i__37882__auto___47166 < len__37881__auto___47165)){
args__37888__auto__.push((arguments[i__37882__auto___47166]));

var G__47167 = (i__37882__auto___47166 + (1));
i__37882__auto___47166 = G__47167;
continue;
} else {
}
break;
}

var argseq__37889__auto__ = ((((0) < args__37888__auto__.length))?(new cljs.core.IndexedSeq(args__37888__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__37889__auto__);
});})(g__39164__auto___47164))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39164__auto___47164){
return (function (args){
return cljs.core.deref.call(null,g__39164__auto___47164);
});})(g__39164__auto___47164))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__39164__auto___47164){
return (function (seq47110){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47110));
});})(g__39164__auto___47164))
;


var g__39164__auto___47168 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__39164__auto___47168){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__37888__auto__ = [];
var len__37881__auto___47169 = arguments.length;
var i__37882__auto___47170 = (0);
while(true){
if((i__37882__auto___47170 < len__37881__auto___47169)){
args__37888__auto__.push((arguments[i__37882__auto___47170]));

var G__47171 = (i__37882__auto___47170 + (1));
i__37882__auto___47170 = G__47171;
continue;
} else {
}
break;
}

var argseq__37889__auto__ = ((((0) < args__37888__auto__.length))?(new cljs.core.IndexedSeq(args__37888__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__37889__auto__);
});})(g__39164__auto___47168))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39164__auto___47168){
return (function (args){
return cljs.core.deref.call(null,g__39164__auto___47168);
});})(g__39164__auto___47168))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__39164__auto___47168){
return (function (seq47111){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47111));
});})(g__39164__auto___47168))
;


var g__39164__auto___47172 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__39164__auto___47172){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__37888__auto__ = [];
var len__37881__auto___47173 = arguments.length;
var i__37882__auto___47174 = (0);
while(true){
if((i__37882__auto___47174 < len__37881__auto___47173)){
args__37888__auto__.push((arguments[i__37882__auto___47174]));

var G__47175 = (i__37882__auto___47174 + (1));
i__37882__auto___47174 = G__47175;
continue;
} else {
}
break;
}

var argseq__37889__auto__ = ((((0) < args__37888__auto__.length))?(new cljs.core.IndexedSeq(args__37888__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__37889__auto__);
});})(g__39164__auto___47172))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39164__auto___47172){
return (function (args){
return cljs.core.deref.call(null,g__39164__auto___47172);
});})(g__39164__auto___47172))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__39164__auto___47172){
return (function (seq47112){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47112));
});})(g__39164__auto___47172))
;


var g__39164__auto___47176 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__39164__auto___47176){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__37888__auto__ = [];
var len__37881__auto___47177 = arguments.length;
var i__37882__auto___47178 = (0);
while(true){
if((i__37882__auto___47178 < len__37881__auto___47177)){
args__37888__auto__.push((arguments[i__37882__auto___47178]));

var G__47179 = (i__37882__auto___47178 + (1));
i__37882__auto___47178 = G__47179;
continue;
} else {
}
break;
}

var argseq__37889__auto__ = ((((0) < args__37888__auto__.length))?(new cljs.core.IndexedSeq(args__37888__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__37889__auto__);
});})(g__39164__auto___47176))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39164__auto___47176){
return (function (args){
return cljs.core.deref.call(null,g__39164__auto___47176);
});})(g__39164__auto___47176))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__39164__auto___47176){
return (function (seq47113){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47113));
});})(g__39164__auto___47176))
;


var g__39164__auto___47180 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__39164__auto___47180){
return (function cljs$spec$gen$alpha$string(var_args){
var args__37888__auto__ = [];
var len__37881__auto___47181 = arguments.length;
var i__37882__auto___47182 = (0);
while(true){
if((i__37882__auto___47182 < len__37881__auto___47181)){
args__37888__auto__.push((arguments[i__37882__auto___47182]));

var G__47183 = (i__37882__auto___47182 + (1));
i__37882__auto___47182 = G__47183;
continue;
} else {
}
break;
}

var argseq__37889__auto__ = ((((0) < args__37888__auto__.length))?(new cljs.core.IndexedSeq(args__37888__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__37889__auto__);
});})(g__39164__auto___47180))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39164__auto___47180){
return (function (args){
return cljs.core.deref.call(null,g__39164__auto___47180);
});})(g__39164__auto___47180))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__39164__auto___47180){
return (function (seq47114){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47114));
});})(g__39164__auto___47180))
;


var g__39164__auto___47184 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__39164__auto___47184){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__37888__auto__ = [];
var len__37881__auto___47185 = arguments.length;
var i__37882__auto___47186 = (0);
while(true){
if((i__37882__auto___47186 < len__37881__auto___47185)){
args__37888__auto__.push((arguments[i__37882__auto___47186]));

var G__47187 = (i__37882__auto___47186 + (1));
i__37882__auto___47186 = G__47187;
continue;
} else {
}
break;
}

var argseq__37889__auto__ = ((((0) < args__37888__auto__.length))?(new cljs.core.IndexedSeq(args__37888__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__37889__auto__);
});})(g__39164__auto___47184))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39164__auto___47184){
return (function (args){
return cljs.core.deref.call(null,g__39164__auto___47184);
});})(g__39164__auto___47184))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__39164__auto___47184){
return (function (seq47115){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47115));
});})(g__39164__auto___47184))
;


var g__39164__auto___47188 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__39164__auto___47188){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__37888__auto__ = [];
var len__37881__auto___47189 = arguments.length;
var i__37882__auto___47190 = (0);
while(true){
if((i__37882__auto___47190 < len__37881__auto___47189)){
args__37888__auto__.push((arguments[i__37882__auto___47190]));

var G__47191 = (i__37882__auto___47190 + (1));
i__37882__auto___47190 = G__47191;
continue;
} else {
}
break;
}

var argseq__37889__auto__ = ((((0) < args__37888__auto__.length))?(new cljs.core.IndexedSeq(args__37888__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__37889__auto__);
});})(g__39164__auto___47188))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39164__auto___47188){
return (function (args){
return cljs.core.deref.call(null,g__39164__auto___47188);
});})(g__39164__auto___47188))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__39164__auto___47188){
return (function (seq47116){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47116));
});})(g__39164__auto___47188))
;


var g__39164__auto___47192 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__39164__auto___47192){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__37888__auto__ = [];
var len__37881__auto___47193 = arguments.length;
var i__37882__auto___47194 = (0);
while(true){
if((i__37882__auto___47194 < len__37881__auto___47193)){
args__37888__auto__.push((arguments[i__37882__auto___47194]));

var G__47195 = (i__37882__auto___47194 + (1));
i__37882__auto___47194 = G__47195;
continue;
} else {
}
break;
}

var argseq__37889__auto__ = ((((0) < args__37888__auto__.length))?(new cljs.core.IndexedSeq(args__37888__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__37889__auto__);
});})(g__39164__auto___47192))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39164__auto___47192){
return (function (args){
return cljs.core.deref.call(null,g__39164__auto___47192);
});})(g__39164__auto___47192))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__39164__auto___47192){
return (function (seq47117){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47117));
});})(g__39164__auto___47192))
;


var g__39164__auto___47196 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__39164__auto___47196){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__37888__auto__ = [];
var len__37881__auto___47197 = arguments.length;
var i__37882__auto___47198 = (0);
while(true){
if((i__37882__auto___47198 < len__37881__auto___47197)){
args__37888__auto__.push((arguments[i__37882__auto___47198]));

var G__47199 = (i__37882__auto___47198 + (1));
i__37882__auto___47198 = G__47199;
continue;
} else {
}
break;
}

var argseq__37889__auto__ = ((((0) < args__37888__auto__.length))?(new cljs.core.IndexedSeq(args__37888__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__37889__auto__);
});})(g__39164__auto___47196))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39164__auto___47196){
return (function (args){
return cljs.core.deref.call(null,g__39164__auto___47196);
});})(g__39164__auto___47196))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__39164__auto___47196){
return (function (seq47118){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47118));
});})(g__39164__auto___47196))
;


var g__39164__auto___47200 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__39164__auto___47200){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__37888__auto__ = [];
var len__37881__auto___47201 = arguments.length;
var i__37882__auto___47202 = (0);
while(true){
if((i__37882__auto___47202 < len__37881__auto___47201)){
args__37888__auto__.push((arguments[i__37882__auto___47202]));

var G__47203 = (i__37882__auto___47202 + (1));
i__37882__auto___47202 = G__47203;
continue;
} else {
}
break;
}

var argseq__37889__auto__ = ((((0) < args__37888__auto__.length))?(new cljs.core.IndexedSeq(args__37888__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__37889__auto__);
});})(g__39164__auto___47200))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__39164__auto___47200){
return (function (args){
return cljs.core.deref.call(null,g__39164__auto___47200);
});})(g__39164__auto___47200))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__39164__auto___47200){
return (function (seq47119){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47119));
});})(g__39164__auto___47200))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__37888__auto__ = [];
var len__37881__auto___47206 = arguments.length;
var i__37882__auto___47207 = (0);
while(true){
if((i__37882__auto___47207 < len__37881__auto___47206)){
args__37888__auto__.push((arguments[i__37882__auto___47207]));

var G__47208 = (i__37882__auto___47207 + (1));
i__37882__auto___47207 = G__47208;
continue;
} else {
}
break;
}

var argseq__37889__auto__ = ((((0) < args__37888__auto__.length))?(new cljs.core.IndexedSeq(args__37888__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__37889__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__47204_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__47204_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq47205){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47205));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__47209_SHARP_){
return (new Date(p1__47209_SHARP_));
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

//# sourceMappingURL=alpha.js.map?rel=1503532145002