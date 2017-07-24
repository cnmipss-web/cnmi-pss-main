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

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__27567__auto__,writer__27568__auto__,opt__27569__auto__){
return cljs.core._write.call(null,writer__27568__auto__,"cljs.spec.gen.alpha/LazyVar");
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
var args__28088__auto__ = [];
var len__28081__auto___36128 = arguments.length;
var i__28082__auto___36129 = (0);
while(true){
if((i__28082__auto___36129 < len__28081__auto___36128)){
args__28088__auto__.push((arguments[i__28082__auto___36129]));

var G__36130 = (i__28082__auto___36129 + (1));
i__28082__auto___36129 = G__36130;
continue;
} else {
}
break;
}

var argseq__28089__auto__ = ((((0) < args__28088__auto__.length))?(new cljs.core.IndexedSeq(args__28088__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__28089__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq36127){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36127));
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
var args__28088__auto__ = [];
var len__28081__auto___36132 = arguments.length;
var i__28082__auto___36133 = (0);
while(true){
if((i__28082__auto___36133 < len__28081__auto___36132)){
args__28088__auto__.push((arguments[i__28082__auto___36133]));

var G__36134 = (i__28082__auto___36133 + (1));
i__28082__auto___36133 = G__36134;
continue;
} else {
}
break;
}

var argseq__28089__auto__ = ((((0) < args__28088__auto__.length))?(new cljs.core.IndexedSeq(args__28088__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__28089__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq36131){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36131));
});

var g_QMARK__36135 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_36136 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__36135){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__36135))
,null));
var mkg_36137 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__36135,g_36136){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__36135,g_36136))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__36135,g_36136,mkg_36137){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__36135).call(null,x);
});})(g_QMARK__36135,g_36136,mkg_36137))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__36135,g_36136,mkg_36137){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_36137).call(null,gfn);
});})(g_QMARK__36135,g_36136,mkg_36137))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__36135,g_36136,mkg_36137){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_36136).call(null,generator);
});})(g_QMARK__36135,g_36136,mkg_36137))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__34092__auto___36157 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__34092__auto___36157){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__28088__auto__ = [];
var len__28081__auto___36158 = arguments.length;
var i__28082__auto___36159 = (0);
while(true){
if((i__28082__auto___36159 < len__28081__auto___36158)){
args__28088__auto__.push((arguments[i__28082__auto___36159]));

var G__36160 = (i__28082__auto___36159 + (1));
i__28082__auto___36159 = G__36160;
continue;
} else {
}
break;
}

var argseq__28089__auto__ = ((((0) < args__28088__auto__.length))?(new cljs.core.IndexedSeq(args__28088__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__28089__auto__);
});})(g__34092__auto___36157))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34092__auto___36157){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34092__auto___36157),args);
});})(g__34092__auto___36157))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__34092__auto___36157){
return (function (seq36138){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36138));
});})(g__34092__auto___36157))
;


var g__34092__auto___36161 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__34092__auto___36161){
return (function cljs$spec$gen$alpha$list(var_args){
var args__28088__auto__ = [];
var len__28081__auto___36162 = arguments.length;
var i__28082__auto___36163 = (0);
while(true){
if((i__28082__auto___36163 < len__28081__auto___36162)){
args__28088__auto__.push((arguments[i__28082__auto___36163]));

var G__36164 = (i__28082__auto___36163 + (1));
i__28082__auto___36163 = G__36164;
continue;
} else {
}
break;
}

var argseq__28089__auto__ = ((((0) < args__28088__auto__.length))?(new cljs.core.IndexedSeq(args__28088__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__28089__auto__);
});})(g__34092__auto___36161))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34092__auto___36161){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34092__auto___36161),args);
});})(g__34092__auto___36161))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__34092__auto___36161){
return (function (seq36139){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36139));
});})(g__34092__auto___36161))
;


var g__34092__auto___36165 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__34092__auto___36165){
return (function cljs$spec$gen$alpha$map(var_args){
var args__28088__auto__ = [];
var len__28081__auto___36166 = arguments.length;
var i__28082__auto___36167 = (0);
while(true){
if((i__28082__auto___36167 < len__28081__auto___36166)){
args__28088__auto__.push((arguments[i__28082__auto___36167]));

var G__36168 = (i__28082__auto___36167 + (1));
i__28082__auto___36167 = G__36168;
continue;
} else {
}
break;
}

var argseq__28089__auto__ = ((((0) < args__28088__auto__.length))?(new cljs.core.IndexedSeq(args__28088__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__28089__auto__);
});})(g__34092__auto___36165))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34092__auto___36165){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34092__auto___36165),args);
});})(g__34092__auto___36165))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__34092__auto___36165){
return (function (seq36140){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36140));
});})(g__34092__auto___36165))
;


var g__34092__auto___36169 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__34092__auto___36169){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__28088__auto__ = [];
var len__28081__auto___36170 = arguments.length;
var i__28082__auto___36171 = (0);
while(true){
if((i__28082__auto___36171 < len__28081__auto___36170)){
args__28088__auto__.push((arguments[i__28082__auto___36171]));

var G__36172 = (i__28082__auto___36171 + (1));
i__28082__auto___36171 = G__36172;
continue;
} else {
}
break;
}

var argseq__28089__auto__ = ((((0) < args__28088__auto__.length))?(new cljs.core.IndexedSeq(args__28088__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__28089__auto__);
});})(g__34092__auto___36169))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34092__auto___36169){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34092__auto___36169),args);
});})(g__34092__auto___36169))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__34092__auto___36169){
return (function (seq36141){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36141));
});})(g__34092__auto___36169))
;


var g__34092__auto___36173 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__34092__auto___36173){
return (function cljs$spec$gen$alpha$set(var_args){
var args__28088__auto__ = [];
var len__28081__auto___36174 = arguments.length;
var i__28082__auto___36175 = (0);
while(true){
if((i__28082__auto___36175 < len__28081__auto___36174)){
args__28088__auto__.push((arguments[i__28082__auto___36175]));

var G__36176 = (i__28082__auto___36175 + (1));
i__28082__auto___36175 = G__36176;
continue;
} else {
}
break;
}

var argseq__28089__auto__ = ((((0) < args__28088__auto__.length))?(new cljs.core.IndexedSeq(args__28088__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__28089__auto__);
});})(g__34092__auto___36173))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34092__auto___36173){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34092__auto___36173),args);
});})(g__34092__auto___36173))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__34092__auto___36173){
return (function (seq36142){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36142));
});})(g__34092__auto___36173))
;


var g__34092__auto___36177 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__34092__auto___36177){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__28088__auto__ = [];
var len__28081__auto___36178 = arguments.length;
var i__28082__auto___36179 = (0);
while(true){
if((i__28082__auto___36179 < len__28081__auto___36178)){
args__28088__auto__.push((arguments[i__28082__auto___36179]));

var G__36180 = (i__28082__auto___36179 + (1));
i__28082__auto___36179 = G__36180;
continue;
} else {
}
break;
}

var argseq__28089__auto__ = ((((0) < args__28088__auto__.length))?(new cljs.core.IndexedSeq(args__28088__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__28089__auto__);
});})(g__34092__auto___36177))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34092__auto___36177){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34092__auto___36177),args);
});})(g__34092__auto___36177))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__34092__auto___36177){
return (function (seq36143){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36143));
});})(g__34092__auto___36177))
;


var g__34092__auto___36181 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__34092__auto___36181){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__28088__auto__ = [];
var len__28081__auto___36182 = arguments.length;
var i__28082__auto___36183 = (0);
while(true){
if((i__28082__auto___36183 < len__28081__auto___36182)){
args__28088__auto__.push((arguments[i__28082__auto___36183]));

var G__36184 = (i__28082__auto___36183 + (1));
i__28082__auto___36183 = G__36184;
continue;
} else {
}
break;
}

var argseq__28089__auto__ = ((((0) < args__28088__auto__.length))?(new cljs.core.IndexedSeq(args__28088__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__28089__auto__);
});})(g__34092__auto___36181))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34092__auto___36181){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34092__auto___36181),args);
});})(g__34092__auto___36181))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__34092__auto___36181){
return (function (seq36144){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36144));
});})(g__34092__auto___36181))
;


var g__34092__auto___36185 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__34092__auto___36185){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__28088__auto__ = [];
var len__28081__auto___36186 = arguments.length;
var i__28082__auto___36187 = (0);
while(true){
if((i__28082__auto___36187 < len__28081__auto___36186)){
args__28088__auto__.push((arguments[i__28082__auto___36187]));

var G__36188 = (i__28082__auto___36187 + (1));
i__28082__auto___36187 = G__36188;
continue;
} else {
}
break;
}

var argseq__28089__auto__ = ((((0) < args__28088__auto__.length))?(new cljs.core.IndexedSeq(args__28088__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__28089__auto__);
});})(g__34092__auto___36185))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34092__auto___36185){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34092__auto___36185),args);
});})(g__34092__auto___36185))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__34092__auto___36185){
return (function (seq36145){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36145));
});})(g__34092__auto___36185))
;


var g__34092__auto___36189 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__34092__auto___36189){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__28088__auto__ = [];
var len__28081__auto___36190 = arguments.length;
var i__28082__auto___36191 = (0);
while(true){
if((i__28082__auto___36191 < len__28081__auto___36190)){
args__28088__auto__.push((arguments[i__28082__auto___36191]));

var G__36192 = (i__28082__auto___36191 + (1));
i__28082__auto___36191 = G__36192;
continue;
} else {
}
break;
}

var argseq__28089__auto__ = ((((0) < args__28088__auto__.length))?(new cljs.core.IndexedSeq(args__28088__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__28089__auto__);
});})(g__34092__auto___36189))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34092__auto___36189){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34092__auto___36189),args);
});})(g__34092__auto___36189))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__34092__auto___36189){
return (function (seq36146){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36146));
});})(g__34092__auto___36189))
;


var g__34092__auto___36193 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__34092__auto___36193){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__28088__auto__ = [];
var len__28081__auto___36194 = arguments.length;
var i__28082__auto___36195 = (0);
while(true){
if((i__28082__auto___36195 < len__28081__auto___36194)){
args__28088__auto__.push((arguments[i__28082__auto___36195]));

var G__36196 = (i__28082__auto___36195 + (1));
i__28082__auto___36195 = G__36196;
continue;
} else {
}
break;
}

var argseq__28089__auto__ = ((((0) < args__28088__auto__.length))?(new cljs.core.IndexedSeq(args__28088__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__28089__auto__);
});})(g__34092__auto___36193))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34092__auto___36193){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34092__auto___36193),args);
});})(g__34092__auto___36193))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__34092__auto___36193){
return (function (seq36147){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36147));
});})(g__34092__auto___36193))
;


var g__34092__auto___36197 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__34092__auto___36197){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__28088__auto__ = [];
var len__28081__auto___36198 = arguments.length;
var i__28082__auto___36199 = (0);
while(true){
if((i__28082__auto___36199 < len__28081__auto___36198)){
args__28088__auto__.push((arguments[i__28082__auto___36199]));

var G__36200 = (i__28082__auto___36199 + (1));
i__28082__auto___36199 = G__36200;
continue;
} else {
}
break;
}

var argseq__28089__auto__ = ((((0) < args__28088__auto__.length))?(new cljs.core.IndexedSeq(args__28088__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__28089__auto__);
});})(g__34092__auto___36197))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34092__auto___36197){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34092__auto___36197),args);
});})(g__34092__auto___36197))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__34092__auto___36197){
return (function (seq36148){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36148));
});})(g__34092__auto___36197))
;


var g__34092__auto___36201 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__34092__auto___36201){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__28088__auto__ = [];
var len__28081__auto___36202 = arguments.length;
var i__28082__auto___36203 = (0);
while(true){
if((i__28082__auto___36203 < len__28081__auto___36202)){
args__28088__auto__.push((arguments[i__28082__auto___36203]));

var G__36204 = (i__28082__auto___36203 + (1));
i__28082__auto___36203 = G__36204;
continue;
} else {
}
break;
}

var argseq__28089__auto__ = ((((0) < args__28088__auto__.length))?(new cljs.core.IndexedSeq(args__28088__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__28089__auto__);
});})(g__34092__auto___36201))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34092__auto___36201){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34092__auto___36201),args);
});})(g__34092__auto___36201))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__34092__auto___36201){
return (function (seq36149){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36149));
});})(g__34092__auto___36201))
;


var g__34092__auto___36205 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__34092__auto___36205){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__28088__auto__ = [];
var len__28081__auto___36206 = arguments.length;
var i__28082__auto___36207 = (0);
while(true){
if((i__28082__auto___36207 < len__28081__auto___36206)){
args__28088__auto__.push((arguments[i__28082__auto___36207]));

var G__36208 = (i__28082__auto___36207 + (1));
i__28082__auto___36207 = G__36208;
continue;
} else {
}
break;
}

var argseq__28089__auto__ = ((((0) < args__28088__auto__.length))?(new cljs.core.IndexedSeq(args__28088__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__28089__auto__);
});})(g__34092__auto___36205))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34092__auto___36205){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34092__auto___36205),args);
});})(g__34092__auto___36205))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__34092__auto___36205){
return (function (seq36150){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36150));
});})(g__34092__auto___36205))
;


var g__34092__auto___36209 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__34092__auto___36209){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__28088__auto__ = [];
var len__28081__auto___36210 = arguments.length;
var i__28082__auto___36211 = (0);
while(true){
if((i__28082__auto___36211 < len__28081__auto___36210)){
args__28088__auto__.push((arguments[i__28082__auto___36211]));

var G__36212 = (i__28082__auto___36211 + (1));
i__28082__auto___36211 = G__36212;
continue;
} else {
}
break;
}

var argseq__28089__auto__ = ((((0) < args__28088__auto__.length))?(new cljs.core.IndexedSeq(args__28088__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__28089__auto__);
});})(g__34092__auto___36209))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34092__auto___36209){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34092__auto___36209),args);
});})(g__34092__auto___36209))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__34092__auto___36209){
return (function (seq36151){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36151));
});})(g__34092__auto___36209))
;


var g__34092__auto___36213 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__34092__auto___36213){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__28088__auto__ = [];
var len__28081__auto___36214 = arguments.length;
var i__28082__auto___36215 = (0);
while(true){
if((i__28082__auto___36215 < len__28081__auto___36214)){
args__28088__auto__.push((arguments[i__28082__auto___36215]));

var G__36216 = (i__28082__auto___36215 + (1));
i__28082__auto___36215 = G__36216;
continue;
} else {
}
break;
}

var argseq__28089__auto__ = ((((0) < args__28088__auto__.length))?(new cljs.core.IndexedSeq(args__28088__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__28089__auto__);
});})(g__34092__auto___36213))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34092__auto___36213){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34092__auto___36213),args);
});})(g__34092__auto___36213))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__34092__auto___36213){
return (function (seq36152){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36152));
});})(g__34092__auto___36213))
;


var g__34092__auto___36217 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__34092__auto___36217){
return (function cljs$spec$gen$alpha$return(var_args){
var args__28088__auto__ = [];
var len__28081__auto___36218 = arguments.length;
var i__28082__auto___36219 = (0);
while(true){
if((i__28082__auto___36219 < len__28081__auto___36218)){
args__28088__auto__.push((arguments[i__28082__auto___36219]));

var G__36220 = (i__28082__auto___36219 + (1));
i__28082__auto___36219 = G__36220;
continue;
} else {
}
break;
}

var argseq__28089__auto__ = ((((0) < args__28088__auto__.length))?(new cljs.core.IndexedSeq(args__28088__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__28089__auto__);
});})(g__34092__auto___36217))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34092__auto___36217){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34092__auto___36217),args);
});})(g__34092__auto___36217))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__34092__auto___36217){
return (function (seq36153){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36153));
});})(g__34092__auto___36217))
;


var g__34092__auto___36221 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__34092__auto___36221){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__28088__auto__ = [];
var len__28081__auto___36222 = arguments.length;
var i__28082__auto___36223 = (0);
while(true){
if((i__28082__auto___36223 < len__28081__auto___36222)){
args__28088__auto__.push((arguments[i__28082__auto___36223]));

var G__36224 = (i__28082__auto___36223 + (1));
i__28082__auto___36223 = G__36224;
continue;
} else {
}
break;
}

var argseq__28089__auto__ = ((((0) < args__28088__auto__.length))?(new cljs.core.IndexedSeq(args__28088__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__28089__auto__);
});})(g__34092__auto___36221))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34092__auto___36221){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34092__auto___36221),args);
});})(g__34092__auto___36221))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__34092__auto___36221){
return (function (seq36154){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36154));
});})(g__34092__auto___36221))
;


var g__34092__auto___36225 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__34092__auto___36225){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__28088__auto__ = [];
var len__28081__auto___36226 = arguments.length;
var i__28082__auto___36227 = (0);
while(true){
if((i__28082__auto___36227 < len__28081__auto___36226)){
args__28088__auto__.push((arguments[i__28082__auto___36227]));

var G__36228 = (i__28082__auto___36227 + (1));
i__28082__auto___36227 = G__36228;
continue;
} else {
}
break;
}

var argseq__28089__auto__ = ((((0) < args__28088__auto__.length))?(new cljs.core.IndexedSeq(args__28088__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__28089__auto__);
});})(g__34092__auto___36225))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34092__auto___36225){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34092__auto___36225),args);
});})(g__34092__auto___36225))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__34092__auto___36225){
return (function (seq36155){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36155));
});})(g__34092__auto___36225))
;


var g__34092__auto___36229 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__34092__auto___36229){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__28088__auto__ = [];
var len__28081__auto___36230 = arguments.length;
var i__28082__auto___36231 = (0);
while(true){
if((i__28082__auto___36231 < len__28081__auto___36230)){
args__28088__auto__.push((arguments[i__28082__auto___36231]));

var G__36232 = (i__28082__auto___36231 + (1));
i__28082__auto___36231 = G__36232;
continue;
} else {
}
break;
}

var argseq__28089__auto__ = ((((0) < args__28088__auto__.length))?(new cljs.core.IndexedSeq(args__28088__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__28089__auto__);
});})(g__34092__auto___36229))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34092__auto___36229){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34092__auto___36229),args);
});})(g__34092__auto___36229))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__34092__auto___36229){
return (function (seq36156){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36156));
});})(g__34092__auto___36229))
;

var g__34105__auto___36254 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__34105__auto___36254){
return (function cljs$spec$gen$alpha$any(var_args){
var args__28088__auto__ = [];
var len__28081__auto___36255 = arguments.length;
var i__28082__auto___36256 = (0);
while(true){
if((i__28082__auto___36256 < len__28081__auto___36255)){
args__28088__auto__.push((arguments[i__28082__auto___36256]));

var G__36257 = (i__28082__auto___36256 + (1));
i__28082__auto___36256 = G__36257;
continue;
} else {
}
break;
}

var argseq__28089__auto__ = ((((0) < args__28088__auto__.length))?(new cljs.core.IndexedSeq(args__28088__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__28089__auto__);
});})(g__34105__auto___36254))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34105__auto___36254){
return (function (args){
return cljs.core.deref.call(null,g__34105__auto___36254);
});})(g__34105__auto___36254))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__34105__auto___36254){
return (function (seq36233){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36233));
});})(g__34105__auto___36254))
;


var g__34105__auto___36258 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__34105__auto___36258){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__28088__auto__ = [];
var len__28081__auto___36259 = arguments.length;
var i__28082__auto___36260 = (0);
while(true){
if((i__28082__auto___36260 < len__28081__auto___36259)){
args__28088__auto__.push((arguments[i__28082__auto___36260]));

var G__36261 = (i__28082__auto___36260 + (1));
i__28082__auto___36260 = G__36261;
continue;
} else {
}
break;
}

var argseq__28089__auto__ = ((((0) < args__28088__auto__.length))?(new cljs.core.IndexedSeq(args__28088__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__28089__auto__);
});})(g__34105__auto___36258))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34105__auto___36258){
return (function (args){
return cljs.core.deref.call(null,g__34105__auto___36258);
});})(g__34105__auto___36258))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__34105__auto___36258){
return (function (seq36234){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36234));
});})(g__34105__auto___36258))
;


var g__34105__auto___36262 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__34105__auto___36262){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__28088__auto__ = [];
var len__28081__auto___36263 = arguments.length;
var i__28082__auto___36264 = (0);
while(true){
if((i__28082__auto___36264 < len__28081__auto___36263)){
args__28088__auto__.push((arguments[i__28082__auto___36264]));

var G__36265 = (i__28082__auto___36264 + (1));
i__28082__auto___36264 = G__36265;
continue;
} else {
}
break;
}

var argseq__28089__auto__ = ((((0) < args__28088__auto__.length))?(new cljs.core.IndexedSeq(args__28088__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__28089__auto__);
});})(g__34105__auto___36262))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34105__auto___36262){
return (function (args){
return cljs.core.deref.call(null,g__34105__auto___36262);
});})(g__34105__auto___36262))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__34105__auto___36262){
return (function (seq36235){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36235));
});})(g__34105__auto___36262))
;


var g__34105__auto___36266 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__34105__auto___36266){
return (function cljs$spec$gen$alpha$char(var_args){
var args__28088__auto__ = [];
var len__28081__auto___36267 = arguments.length;
var i__28082__auto___36268 = (0);
while(true){
if((i__28082__auto___36268 < len__28081__auto___36267)){
args__28088__auto__.push((arguments[i__28082__auto___36268]));

var G__36269 = (i__28082__auto___36268 + (1));
i__28082__auto___36268 = G__36269;
continue;
} else {
}
break;
}

var argseq__28089__auto__ = ((((0) < args__28088__auto__.length))?(new cljs.core.IndexedSeq(args__28088__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__28089__auto__);
});})(g__34105__auto___36266))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34105__auto___36266){
return (function (args){
return cljs.core.deref.call(null,g__34105__auto___36266);
});})(g__34105__auto___36266))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__34105__auto___36266){
return (function (seq36236){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36236));
});})(g__34105__auto___36266))
;


var g__34105__auto___36270 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__34105__auto___36270){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__28088__auto__ = [];
var len__28081__auto___36271 = arguments.length;
var i__28082__auto___36272 = (0);
while(true){
if((i__28082__auto___36272 < len__28081__auto___36271)){
args__28088__auto__.push((arguments[i__28082__auto___36272]));

var G__36273 = (i__28082__auto___36272 + (1));
i__28082__auto___36272 = G__36273;
continue;
} else {
}
break;
}

var argseq__28089__auto__ = ((((0) < args__28088__auto__.length))?(new cljs.core.IndexedSeq(args__28088__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__28089__auto__);
});})(g__34105__auto___36270))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34105__auto___36270){
return (function (args){
return cljs.core.deref.call(null,g__34105__auto___36270);
});})(g__34105__auto___36270))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__34105__auto___36270){
return (function (seq36237){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36237));
});})(g__34105__auto___36270))
;


var g__34105__auto___36274 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__34105__auto___36274){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__28088__auto__ = [];
var len__28081__auto___36275 = arguments.length;
var i__28082__auto___36276 = (0);
while(true){
if((i__28082__auto___36276 < len__28081__auto___36275)){
args__28088__auto__.push((arguments[i__28082__auto___36276]));

var G__36277 = (i__28082__auto___36276 + (1));
i__28082__auto___36276 = G__36277;
continue;
} else {
}
break;
}

var argseq__28089__auto__ = ((((0) < args__28088__auto__.length))?(new cljs.core.IndexedSeq(args__28088__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__28089__auto__);
});})(g__34105__auto___36274))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34105__auto___36274){
return (function (args){
return cljs.core.deref.call(null,g__34105__auto___36274);
});})(g__34105__auto___36274))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__34105__auto___36274){
return (function (seq36238){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36238));
});})(g__34105__auto___36274))
;


var g__34105__auto___36278 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__34105__auto___36278){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__28088__auto__ = [];
var len__28081__auto___36279 = arguments.length;
var i__28082__auto___36280 = (0);
while(true){
if((i__28082__auto___36280 < len__28081__auto___36279)){
args__28088__auto__.push((arguments[i__28082__auto___36280]));

var G__36281 = (i__28082__auto___36280 + (1));
i__28082__auto___36280 = G__36281;
continue;
} else {
}
break;
}

var argseq__28089__auto__ = ((((0) < args__28088__auto__.length))?(new cljs.core.IndexedSeq(args__28088__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__28089__auto__);
});})(g__34105__auto___36278))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34105__auto___36278){
return (function (args){
return cljs.core.deref.call(null,g__34105__auto___36278);
});})(g__34105__auto___36278))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__34105__auto___36278){
return (function (seq36239){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36239));
});})(g__34105__auto___36278))
;


var g__34105__auto___36282 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__34105__auto___36282){
return (function cljs$spec$gen$alpha$double(var_args){
var args__28088__auto__ = [];
var len__28081__auto___36283 = arguments.length;
var i__28082__auto___36284 = (0);
while(true){
if((i__28082__auto___36284 < len__28081__auto___36283)){
args__28088__auto__.push((arguments[i__28082__auto___36284]));

var G__36285 = (i__28082__auto___36284 + (1));
i__28082__auto___36284 = G__36285;
continue;
} else {
}
break;
}

var argseq__28089__auto__ = ((((0) < args__28088__auto__.length))?(new cljs.core.IndexedSeq(args__28088__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__28089__auto__);
});})(g__34105__auto___36282))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34105__auto___36282){
return (function (args){
return cljs.core.deref.call(null,g__34105__auto___36282);
});})(g__34105__auto___36282))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__34105__auto___36282){
return (function (seq36240){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36240));
});})(g__34105__auto___36282))
;


var g__34105__auto___36286 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__34105__auto___36286){
return (function cljs$spec$gen$alpha$int(var_args){
var args__28088__auto__ = [];
var len__28081__auto___36287 = arguments.length;
var i__28082__auto___36288 = (0);
while(true){
if((i__28082__auto___36288 < len__28081__auto___36287)){
args__28088__auto__.push((arguments[i__28082__auto___36288]));

var G__36289 = (i__28082__auto___36288 + (1));
i__28082__auto___36288 = G__36289;
continue;
} else {
}
break;
}

var argseq__28089__auto__ = ((((0) < args__28088__auto__.length))?(new cljs.core.IndexedSeq(args__28088__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__28089__auto__);
});})(g__34105__auto___36286))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34105__auto___36286){
return (function (args){
return cljs.core.deref.call(null,g__34105__auto___36286);
});})(g__34105__auto___36286))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__34105__auto___36286){
return (function (seq36241){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36241));
});})(g__34105__auto___36286))
;


var g__34105__auto___36290 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__34105__auto___36290){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__28088__auto__ = [];
var len__28081__auto___36291 = arguments.length;
var i__28082__auto___36292 = (0);
while(true){
if((i__28082__auto___36292 < len__28081__auto___36291)){
args__28088__auto__.push((arguments[i__28082__auto___36292]));

var G__36293 = (i__28082__auto___36292 + (1));
i__28082__auto___36292 = G__36293;
continue;
} else {
}
break;
}

var argseq__28089__auto__ = ((((0) < args__28088__auto__.length))?(new cljs.core.IndexedSeq(args__28088__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__28089__auto__);
});})(g__34105__auto___36290))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34105__auto___36290){
return (function (args){
return cljs.core.deref.call(null,g__34105__auto___36290);
});})(g__34105__auto___36290))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__34105__auto___36290){
return (function (seq36242){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36242));
});})(g__34105__auto___36290))
;


var g__34105__auto___36294 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__34105__auto___36294){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__28088__auto__ = [];
var len__28081__auto___36295 = arguments.length;
var i__28082__auto___36296 = (0);
while(true){
if((i__28082__auto___36296 < len__28081__auto___36295)){
args__28088__auto__.push((arguments[i__28082__auto___36296]));

var G__36297 = (i__28082__auto___36296 + (1));
i__28082__auto___36296 = G__36297;
continue;
} else {
}
break;
}

var argseq__28089__auto__ = ((((0) < args__28088__auto__.length))?(new cljs.core.IndexedSeq(args__28088__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__28089__auto__);
});})(g__34105__auto___36294))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34105__auto___36294){
return (function (args){
return cljs.core.deref.call(null,g__34105__auto___36294);
});})(g__34105__auto___36294))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__34105__auto___36294){
return (function (seq36243){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36243));
});})(g__34105__auto___36294))
;


var g__34105__auto___36298 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__34105__auto___36298){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__28088__auto__ = [];
var len__28081__auto___36299 = arguments.length;
var i__28082__auto___36300 = (0);
while(true){
if((i__28082__auto___36300 < len__28081__auto___36299)){
args__28088__auto__.push((arguments[i__28082__auto___36300]));

var G__36301 = (i__28082__auto___36300 + (1));
i__28082__auto___36300 = G__36301;
continue;
} else {
}
break;
}

var argseq__28089__auto__ = ((((0) < args__28088__auto__.length))?(new cljs.core.IndexedSeq(args__28088__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__28089__auto__);
});})(g__34105__auto___36298))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34105__auto___36298){
return (function (args){
return cljs.core.deref.call(null,g__34105__auto___36298);
});})(g__34105__auto___36298))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__34105__auto___36298){
return (function (seq36244){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36244));
});})(g__34105__auto___36298))
;


var g__34105__auto___36302 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__34105__auto___36302){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__28088__auto__ = [];
var len__28081__auto___36303 = arguments.length;
var i__28082__auto___36304 = (0);
while(true){
if((i__28082__auto___36304 < len__28081__auto___36303)){
args__28088__auto__.push((arguments[i__28082__auto___36304]));

var G__36305 = (i__28082__auto___36304 + (1));
i__28082__auto___36304 = G__36305;
continue;
} else {
}
break;
}

var argseq__28089__auto__ = ((((0) < args__28088__auto__.length))?(new cljs.core.IndexedSeq(args__28088__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__28089__auto__);
});})(g__34105__auto___36302))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34105__auto___36302){
return (function (args){
return cljs.core.deref.call(null,g__34105__auto___36302);
});})(g__34105__auto___36302))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__34105__auto___36302){
return (function (seq36245){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36245));
});})(g__34105__auto___36302))
;


var g__34105__auto___36306 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__34105__auto___36306){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__28088__auto__ = [];
var len__28081__auto___36307 = arguments.length;
var i__28082__auto___36308 = (0);
while(true){
if((i__28082__auto___36308 < len__28081__auto___36307)){
args__28088__auto__.push((arguments[i__28082__auto___36308]));

var G__36309 = (i__28082__auto___36308 + (1));
i__28082__auto___36308 = G__36309;
continue;
} else {
}
break;
}

var argseq__28089__auto__ = ((((0) < args__28088__auto__.length))?(new cljs.core.IndexedSeq(args__28088__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__28089__auto__);
});})(g__34105__auto___36306))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34105__auto___36306){
return (function (args){
return cljs.core.deref.call(null,g__34105__auto___36306);
});})(g__34105__auto___36306))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__34105__auto___36306){
return (function (seq36246){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36246));
});})(g__34105__auto___36306))
;


var g__34105__auto___36310 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__34105__auto___36310){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__28088__auto__ = [];
var len__28081__auto___36311 = arguments.length;
var i__28082__auto___36312 = (0);
while(true){
if((i__28082__auto___36312 < len__28081__auto___36311)){
args__28088__auto__.push((arguments[i__28082__auto___36312]));

var G__36313 = (i__28082__auto___36312 + (1));
i__28082__auto___36312 = G__36313;
continue;
} else {
}
break;
}

var argseq__28089__auto__ = ((((0) < args__28088__auto__.length))?(new cljs.core.IndexedSeq(args__28088__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__28089__auto__);
});})(g__34105__auto___36310))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34105__auto___36310){
return (function (args){
return cljs.core.deref.call(null,g__34105__auto___36310);
});})(g__34105__auto___36310))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__34105__auto___36310){
return (function (seq36247){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36247));
});})(g__34105__auto___36310))
;


var g__34105__auto___36314 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__34105__auto___36314){
return (function cljs$spec$gen$alpha$string(var_args){
var args__28088__auto__ = [];
var len__28081__auto___36315 = arguments.length;
var i__28082__auto___36316 = (0);
while(true){
if((i__28082__auto___36316 < len__28081__auto___36315)){
args__28088__auto__.push((arguments[i__28082__auto___36316]));

var G__36317 = (i__28082__auto___36316 + (1));
i__28082__auto___36316 = G__36317;
continue;
} else {
}
break;
}

var argseq__28089__auto__ = ((((0) < args__28088__auto__.length))?(new cljs.core.IndexedSeq(args__28088__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__28089__auto__);
});})(g__34105__auto___36314))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34105__auto___36314){
return (function (args){
return cljs.core.deref.call(null,g__34105__auto___36314);
});})(g__34105__auto___36314))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__34105__auto___36314){
return (function (seq36248){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36248));
});})(g__34105__auto___36314))
;


var g__34105__auto___36318 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__34105__auto___36318){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__28088__auto__ = [];
var len__28081__auto___36319 = arguments.length;
var i__28082__auto___36320 = (0);
while(true){
if((i__28082__auto___36320 < len__28081__auto___36319)){
args__28088__auto__.push((arguments[i__28082__auto___36320]));

var G__36321 = (i__28082__auto___36320 + (1));
i__28082__auto___36320 = G__36321;
continue;
} else {
}
break;
}

var argseq__28089__auto__ = ((((0) < args__28088__auto__.length))?(new cljs.core.IndexedSeq(args__28088__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__28089__auto__);
});})(g__34105__auto___36318))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34105__auto___36318){
return (function (args){
return cljs.core.deref.call(null,g__34105__auto___36318);
});})(g__34105__auto___36318))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__34105__auto___36318){
return (function (seq36249){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36249));
});})(g__34105__auto___36318))
;


var g__34105__auto___36322 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__34105__auto___36322){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__28088__auto__ = [];
var len__28081__auto___36323 = arguments.length;
var i__28082__auto___36324 = (0);
while(true){
if((i__28082__auto___36324 < len__28081__auto___36323)){
args__28088__auto__.push((arguments[i__28082__auto___36324]));

var G__36325 = (i__28082__auto___36324 + (1));
i__28082__auto___36324 = G__36325;
continue;
} else {
}
break;
}

var argseq__28089__auto__ = ((((0) < args__28088__auto__.length))?(new cljs.core.IndexedSeq(args__28088__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__28089__auto__);
});})(g__34105__auto___36322))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34105__auto___36322){
return (function (args){
return cljs.core.deref.call(null,g__34105__auto___36322);
});})(g__34105__auto___36322))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__34105__auto___36322){
return (function (seq36250){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36250));
});})(g__34105__auto___36322))
;


var g__34105__auto___36326 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__34105__auto___36326){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__28088__auto__ = [];
var len__28081__auto___36327 = arguments.length;
var i__28082__auto___36328 = (0);
while(true){
if((i__28082__auto___36328 < len__28081__auto___36327)){
args__28088__auto__.push((arguments[i__28082__auto___36328]));

var G__36329 = (i__28082__auto___36328 + (1));
i__28082__auto___36328 = G__36329;
continue;
} else {
}
break;
}

var argseq__28089__auto__ = ((((0) < args__28088__auto__.length))?(new cljs.core.IndexedSeq(args__28088__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__28089__auto__);
});})(g__34105__auto___36326))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34105__auto___36326){
return (function (args){
return cljs.core.deref.call(null,g__34105__auto___36326);
});})(g__34105__auto___36326))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__34105__auto___36326){
return (function (seq36251){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36251));
});})(g__34105__auto___36326))
;


var g__34105__auto___36330 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__34105__auto___36330){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__28088__auto__ = [];
var len__28081__auto___36331 = arguments.length;
var i__28082__auto___36332 = (0);
while(true){
if((i__28082__auto___36332 < len__28081__auto___36331)){
args__28088__auto__.push((arguments[i__28082__auto___36332]));

var G__36333 = (i__28082__auto___36332 + (1));
i__28082__auto___36332 = G__36333;
continue;
} else {
}
break;
}

var argseq__28089__auto__ = ((((0) < args__28088__auto__.length))?(new cljs.core.IndexedSeq(args__28088__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__28089__auto__);
});})(g__34105__auto___36330))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34105__auto___36330){
return (function (args){
return cljs.core.deref.call(null,g__34105__auto___36330);
});})(g__34105__auto___36330))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__34105__auto___36330){
return (function (seq36252){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36252));
});})(g__34105__auto___36330))
;


var g__34105__auto___36334 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__34105__auto___36334){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__28088__auto__ = [];
var len__28081__auto___36335 = arguments.length;
var i__28082__auto___36336 = (0);
while(true){
if((i__28082__auto___36336 < len__28081__auto___36335)){
args__28088__auto__.push((arguments[i__28082__auto___36336]));

var G__36337 = (i__28082__auto___36336 + (1));
i__28082__auto___36336 = G__36337;
continue;
} else {
}
break;
}

var argseq__28089__auto__ = ((((0) < args__28088__auto__.length))?(new cljs.core.IndexedSeq(args__28088__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__28089__auto__);
});})(g__34105__auto___36334))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34105__auto___36334){
return (function (args){
return cljs.core.deref.call(null,g__34105__auto___36334);
});})(g__34105__auto___36334))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__34105__auto___36334){
return (function (seq36253){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36253));
});})(g__34105__auto___36334))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__28088__auto__ = [];
var len__28081__auto___36340 = arguments.length;
var i__28082__auto___36341 = (0);
while(true){
if((i__28082__auto___36341 < len__28081__auto___36340)){
args__28088__auto__.push((arguments[i__28082__auto___36341]));

var G__36342 = (i__28082__auto___36341 + (1));
i__28082__auto___36341 = G__36342;
continue;
} else {
}
break;
}

var argseq__28089__auto__ = ((((0) < args__28088__auto__.length))?(new cljs.core.IndexedSeq(args__28088__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__28089__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__36338_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__36338_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq36339){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36339));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__36343_SHARP_){
return (new Date(p1__36343_SHARP_));
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

//# sourceMappingURL=alpha.js.map?rel=1500852801820