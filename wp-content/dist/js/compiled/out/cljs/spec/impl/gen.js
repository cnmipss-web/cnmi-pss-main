// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
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

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__26595__auto__,writer__26596__auto__,opt__26597__auto__){
return cljs.core._write.call(null,writer__26596__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__27071__auto__ = [];
var len__27064__auto___35611 = arguments.length;
var i__27065__auto___35612 = (0);
while(true){
if((i__27065__auto___35612 < len__27064__auto___35611)){
args__27071__auto__.push((arguments[i__27065__auto___35612]));

var G__35613 = (i__27065__auto___35612 + (1));
i__27065__auto___35612 = G__35613;
continue;
} else {
}
break;
}

var argseq__27072__auto__ = ((((0) < args__27071__auto__.length))?(new cljs.core.IndexedSeq(args__27071__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__27072__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq35610){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35610));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__27071__auto__ = [];
var len__27064__auto___35615 = arguments.length;
var i__27065__auto___35616 = (0);
while(true){
if((i__27065__auto___35616 < len__27064__auto___35615)){
args__27071__auto__.push((arguments[i__27065__auto___35616]));

var G__35617 = (i__27065__auto___35616 + (1));
i__27065__auto___35616 = G__35617;
continue;
} else {
}
break;
}

var argseq__27072__auto__ = ((((0) < args__27071__auto__.length))?(new cljs.core.IndexedSeq(args__27071__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__27072__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq35614){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35614));
});

var g_QMARK__35618 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_35619 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__35618){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__35618))
,null));
var mkg_35620 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__35618,g_35619){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__35618,g_35619))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__35618,g_35619,mkg_35620){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__35618).call(null,x);
});})(g_QMARK__35618,g_35619,mkg_35620))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__35618,g_35619,mkg_35620){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_35620).call(null,gfn);
});})(g_QMARK__35618,g_35619,mkg_35620))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__35618,g_35619,mkg_35620){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_35619).call(null,generator);
});})(g_QMARK__35618,g_35619,mkg_35620))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__35582__auto___35639 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__35582__auto___35639){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__27071__auto__ = [];
var len__27064__auto___35640 = arguments.length;
var i__27065__auto___35641 = (0);
while(true){
if((i__27065__auto___35641 < len__27064__auto___35640)){
args__27071__auto__.push((arguments[i__27065__auto___35641]));

var G__35642 = (i__27065__auto___35641 + (1));
i__27065__auto___35641 = G__35642;
continue;
} else {
}
break;
}

var argseq__27072__auto__ = ((((0) < args__27071__auto__.length))?(new cljs.core.IndexedSeq(args__27071__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__27072__auto__);
});})(g__35582__auto___35639))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35582__auto___35639){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35582__auto___35639),args);
});})(g__35582__auto___35639))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__35582__auto___35639){
return (function (seq35621){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35621));
});})(g__35582__auto___35639))
;


var g__35582__auto___35643 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__35582__auto___35643){
return (function cljs$spec$impl$gen$list(var_args){
var args__27071__auto__ = [];
var len__27064__auto___35644 = arguments.length;
var i__27065__auto___35645 = (0);
while(true){
if((i__27065__auto___35645 < len__27064__auto___35644)){
args__27071__auto__.push((arguments[i__27065__auto___35645]));

var G__35646 = (i__27065__auto___35645 + (1));
i__27065__auto___35645 = G__35646;
continue;
} else {
}
break;
}

var argseq__27072__auto__ = ((((0) < args__27071__auto__.length))?(new cljs.core.IndexedSeq(args__27071__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__27072__auto__);
});})(g__35582__auto___35643))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35582__auto___35643){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35582__auto___35643),args);
});})(g__35582__auto___35643))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__35582__auto___35643){
return (function (seq35622){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35622));
});})(g__35582__auto___35643))
;


var g__35582__auto___35647 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__35582__auto___35647){
return (function cljs$spec$impl$gen$map(var_args){
var args__27071__auto__ = [];
var len__27064__auto___35648 = arguments.length;
var i__27065__auto___35649 = (0);
while(true){
if((i__27065__auto___35649 < len__27064__auto___35648)){
args__27071__auto__.push((arguments[i__27065__auto___35649]));

var G__35650 = (i__27065__auto___35649 + (1));
i__27065__auto___35649 = G__35650;
continue;
} else {
}
break;
}

var argseq__27072__auto__ = ((((0) < args__27071__auto__.length))?(new cljs.core.IndexedSeq(args__27071__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__27072__auto__);
});})(g__35582__auto___35647))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35582__auto___35647){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35582__auto___35647),args);
});})(g__35582__auto___35647))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__35582__auto___35647){
return (function (seq35623){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35623));
});})(g__35582__auto___35647))
;


var g__35582__auto___35651 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__35582__auto___35651){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__27071__auto__ = [];
var len__27064__auto___35652 = arguments.length;
var i__27065__auto___35653 = (0);
while(true){
if((i__27065__auto___35653 < len__27064__auto___35652)){
args__27071__auto__.push((arguments[i__27065__auto___35653]));

var G__35654 = (i__27065__auto___35653 + (1));
i__27065__auto___35653 = G__35654;
continue;
} else {
}
break;
}

var argseq__27072__auto__ = ((((0) < args__27071__auto__.length))?(new cljs.core.IndexedSeq(args__27071__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__27072__auto__);
});})(g__35582__auto___35651))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35582__auto___35651){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35582__auto___35651),args);
});})(g__35582__auto___35651))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__35582__auto___35651){
return (function (seq35624){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35624));
});})(g__35582__auto___35651))
;


var g__35582__auto___35655 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__35582__auto___35655){
return (function cljs$spec$impl$gen$set(var_args){
var args__27071__auto__ = [];
var len__27064__auto___35656 = arguments.length;
var i__27065__auto___35657 = (0);
while(true){
if((i__27065__auto___35657 < len__27064__auto___35656)){
args__27071__auto__.push((arguments[i__27065__auto___35657]));

var G__35658 = (i__27065__auto___35657 + (1));
i__27065__auto___35657 = G__35658;
continue;
} else {
}
break;
}

var argseq__27072__auto__ = ((((0) < args__27071__auto__.length))?(new cljs.core.IndexedSeq(args__27071__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__27072__auto__);
});})(g__35582__auto___35655))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35582__auto___35655){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35582__auto___35655),args);
});})(g__35582__auto___35655))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__35582__auto___35655){
return (function (seq35625){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35625));
});})(g__35582__auto___35655))
;


var g__35582__auto___35659 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__35582__auto___35659){
return (function cljs$spec$impl$gen$vector(var_args){
var args__27071__auto__ = [];
var len__27064__auto___35660 = arguments.length;
var i__27065__auto___35661 = (0);
while(true){
if((i__27065__auto___35661 < len__27064__auto___35660)){
args__27071__auto__.push((arguments[i__27065__auto___35661]));

var G__35662 = (i__27065__auto___35661 + (1));
i__27065__auto___35661 = G__35662;
continue;
} else {
}
break;
}

var argseq__27072__auto__ = ((((0) < args__27071__auto__.length))?(new cljs.core.IndexedSeq(args__27071__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__27072__auto__);
});})(g__35582__auto___35659))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35582__auto___35659){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35582__auto___35659),args);
});})(g__35582__auto___35659))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__35582__auto___35659){
return (function (seq35626){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35626));
});})(g__35582__auto___35659))
;


var g__35582__auto___35663 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__35582__auto___35663){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__27071__auto__ = [];
var len__27064__auto___35664 = arguments.length;
var i__27065__auto___35665 = (0);
while(true){
if((i__27065__auto___35665 < len__27064__auto___35664)){
args__27071__auto__.push((arguments[i__27065__auto___35665]));

var G__35666 = (i__27065__auto___35665 + (1));
i__27065__auto___35665 = G__35666;
continue;
} else {
}
break;
}

var argseq__27072__auto__ = ((((0) < args__27071__auto__.length))?(new cljs.core.IndexedSeq(args__27071__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__27072__auto__);
});})(g__35582__auto___35663))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35582__auto___35663){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35582__auto___35663),args);
});})(g__35582__auto___35663))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__35582__auto___35663){
return (function (seq35627){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35627));
});})(g__35582__auto___35663))
;


var g__35582__auto___35667 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__35582__auto___35667){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__27071__auto__ = [];
var len__27064__auto___35668 = arguments.length;
var i__27065__auto___35669 = (0);
while(true){
if((i__27065__auto___35669 < len__27064__auto___35668)){
args__27071__auto__.push((arguments[i__27065__auto___35669]));

var G__35670 = (i__27065__auto___35669 + (1));
i__27065__auto___35669 = G__35670;
continue;
} else {
}
break;
}

var argseq__27072__auto__ = ((((0) < args__27071__auto__.length))?(new cljs.core.IndexedSeq(args__27071__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__27072__auto__);
});})(g__35582__auto___35667))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35582__auto___35667){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35582__auto___35667),args);
});})(g__35582__auto___35667))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__35582__auto___35667){
return (function (seq35628){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35628));
});})(g__35582__auto___35667))
;


var g__35582__auto___35671 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__35582__auto___35671){
return (function cljs$spec$impl$gen$elements(var_args){
var args__27071__auto__ = [];
var len__27064__auto___35672 = arguments.length;
var i__27065__auto___35673 = (0);
while(true){
if((i__27065__auto___35673 < len__27064__auto___35672)){
args__27071__auto__.push((arguments[i__27065__auto___35673]));

var G__35674 = (i__27065__auto___35673 + (1));
i__27065__auto___35673 = G__35674;
continue;
} else {
}
break;
}

var argseq__27072__auto__ = ((((0) < args__27071__auto__.length))?(new cljs.core.IndexedSeq(args__27071__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__27072__auto__);
});})(g__35582__auto___35671))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35582__auto___35671){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35582__auto___35671),args);
});})(g__35582__auto___35671))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__35582__auto___35671){
return (function (seq35629){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35629));
});})(g__35582__auto___35671))
;


var g__35582__auto___35675 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__35582__auto___35675){
return (function cljs$spec$impl$gen$bind(var_args){
var args__27071__auto__ = [];
var len__27064__auto___35676 = arguments.length;
var i__27065__auto___35677 = (0);
while(true){
if((i__27065__auto___35677 < len__27064__auto___35676)){
args__27071__auto__.push((arguments[i__27065__auto___35677]));

var G__35678 = (i__27065__auto___35677 + (1));
i__27065__auto___35677 = G__35678;
continue;
} else {
}
break;
}

var argseq__27072__auto__ = ((((0) < args__27071__auto__.length))?(new cljs.core.IndexedSeq(args__27071__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__27072__auto__);
});})(g__35582__auto___35675))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35582__auto___35675){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35582__auto___35675),args);
});})(g__35582__auto___35675))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__35582__auto___35675){
return (function (seq35630){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35630));
});})(g__35582__auto___35675))
;


var g__35582__auto___35679 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__35582__auto___35679){
return (function cljs$spec$impl$gen$choose(var_args){
var args__27071__auto__ = [];
var len__27064__auto___35680 = arguments.length;
var i__27065__auto___35681 = (0);
while(true){
if((i__27065__auto___35681 < len__27064__auto___35680)){
args__27071__auto__.push((arguments[i__27065__auto___35681]));

var G__35682 = (i__27065__auto___35681 + (1));
i__27065__auto___35681 = G__35682;
continue;
} else {
}
break;
}

var argseq__27072__auto__ = ((((0) < args__27071__auto__.length))?(new cljs.core.IndexedSeq(args__27071__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__27072__auto__);
});})(g__35582__auto___35679))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35582__auto___35679){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35582__auto___35679),args);
});})(g__35582__auto___35679))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__35582__auto___35679){
return (function (seq35631){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35631));
});})(g__35582__auto___35679))
;


var g__35582__auto___35683 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__35582__auto___35683){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__27071__auto__ = [];
var len__27064__auto___35684 = arguments.length;
var i__27065__auto___35685 = (0);
while(true){
if((i__27065__auto___35685 < len__27064__auto___35684)){
args__27071__auto__.push((arguments[i__27065__auto___35685]));

var G__35686 = (i__27065__auto___35685 + (1));
i__27065__auto___35685 = G__35686;
continue;
} else {
}
break;
}

var argseq__27072__auto__ = ((((0) < args__27071__auto__.length))?(new cljs.core.IndexedSeq(args__27071__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__27072__auto__);
});})(g__35582__auto___35683))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35582__auto___35683){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35582__auto___35683),args);
});})(g__35582__auto___35683))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__35582__auto___35683){
return (function (seq35632){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35632));
});})(g__35582__auto___35683))
;


var g__35582__auto___35687 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__35582__auto___35687){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__27071__auto__ = [];
var len__27064__auto___35688 = arguments.length;
var i__27065__auto___35689 = (0);
while(true){
if((i__27065__auto___35689 < len__27064__auto___35688)){
args__27071__auto__.push((arguments[i__27065__auto___35689]));

var G__35690 = (i__27065__auto___35689 + (1));
i__27065__auto___35689 = G__35690;
continue;
} else {
}
break;
}

var argseq__27072__auto__ = ((((0) < args__27071__auto__.length))?(new cljs.core.IndexedSeq(args__27071__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__27072__auto__);
});})(g__35582__auto___35687))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35582__auto___35687){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35582__auto___35687),args);
});})(g__35582__auto___35687))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__35582__auto___35687){
return (function (seq35633){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35633));
});})(g__35582__auto___35687))
;


var g__35582__auto___35691 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__35582__auto___35691){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__27071__auto__ = [];
var len__27064__auto___35692 = arguments.length;
var i__27065__auto___35693 = (0);
while(true){
if((i__27065__auto___35693 < len__27064__auto___35692)){
args__27071__auto__.push((arguments[i__27065__auto___35693]));

var G__35694 = (i__27065__auto___35693 + (1));
i__27065__auto___35693 = G__35694;
continue;
} else {
}
break;
}

var argseq__27072__auto__ = ((((0) < args__27071__auto__.length))?(new cljs.core.IndexedSeq(args__27071__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__27072__auto__);
});})(g__35582__auto___35691))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35582__auto___35691){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35582__auto___35691),args);
});})(g__35582__auto___35691))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__35582__auto___35691){
return (function (seq35634){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35634));
});})(g__35582__auto___35691))
;


var g__35582__auto___35695 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__35582__auto___35695){
return (function cljs$spec$impl$gen$sample(var_args){
var args__27071__auto__ = [];
var len__27064__auto___35696 = arguments.length;
var i__27065__auto___35697 = (0);
while(true){
if((i__27065__auto___35697 < len__27064__auto___35696)){
args__27071__auto__.push((arguments[i__27065__auto___35697]));

var G__35698 = (i__27065__auto___35697 + (1));
i__27065__auto___35697 = G__35698;
continue;
} else {
}
break;
}

var argseq__27072__auto__ = ((((0) < args__27071__auto__.length))?(new cljs.core.IndexedSeq(args__27071__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__27072__auto__);
});})(g__35582__auto___35695))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35582__auto___35695){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35582__auto___35695),args);
});})(g__35582__auto___35695))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__35582__auto___35695){
return (function (seq35635){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35635));
});})(g__35582__auto___35695))
;


var g__35582__auto___35699 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__35582__auto___35699){
return (function cljs$spec$impl$gen$return(var_args){
var args__27071__auto__ = [];
var len__27064__auto___35700 = arguments.length;
var i__27065__auto___35701 = (0);
while(true){
if((i__27065__auto___35701 < len__27064__auto___35700)){
args__27071__auto__.push((arguments[i__27065__auto___35701]));

var G__35702 = (i__27065__auto___35701 + (1));
i__27065__auto___35701 = G__35702;
continue;
} else {
}
break;
}

var argseq__27072__auto__ = ((((0) < args__27071__auto__.length))?(new cljs.core.IndexedSeq(args__27071__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__27072__auto__);
});})(g__35582__auto___35699))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35582__auto___35699){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35582__auto___35699),args);
});})(g__35582__auto___35699))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__35582__auto___35699){
return (function (seq35636){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35636));
});})(g__35582__auto___35699))
;


var g__35582__auto___35703 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__35582__auto___35703){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__27071__auto__ = [];
var len__27064__auto___35704 = arguments.length;
var i__27065__auto___35705 = (0);
while(true){
if((i__27065__auto___35705 < len__27064__auto___35704)){
args__27071__auto__.push((arguments[i__27065__auto___35705]));

var G__35706 = (i__27065__auto___35705 + (1));
i__27065__auto___35705 = G__35706;
continue;
} else {
}
break;
}

var argseq__27072__auto__ = ((((0) < args__27071__auto__.length))?(new cljs.core.IndexedSeq(args__27071__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__27072__auto__);
});})(g__35582__auto___35703))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35582__auto___35703){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35582__auto___35703),args);
});})(g__35582__auto___35703))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__35582__auto___35703){
return (function (seq35637){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35637));
});})(g__35582__auto___35703))
;


var g__35582__auto___35707 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__35582__auto___35707){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__27071__auto__ = [];
var len__27064__auto___35708 = arguments.length;
var i__27065__auto___35709 = (0);
while(true){
if((i__27065__auto___35709 < len__27064__auto___35708)){
args__27071__auto__.push((arguments[i__27065__auto___35709]));

var G__35710 = (i__27065__auto___35709 + (1));
i__27065__auto___35709 = G__35710;
continue;
} else {
}
break;
}

var argseq__27072__auto__ = ((((0) < args__27071__auto__.length))?(new cljs.core.IndexedSeq(args__27071__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__27072__auto__);
});})(g__35582__auto___35707))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35582__auto___35707){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35582__auto___35707),args);
});})(g__35582__auto___35707))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__35582__auto___35707){
return (function (seq35638){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35638));
});})(g__35582__auto___35707))
;

var g__35595__auto___35732 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__35595__auto___35732){
return (function cljs$spec$impl$gen$any(var_args){
var args__27071__auto__ = [];
var len__27064__auto___35733 = arguments.length;
var i__27065__auto___35734 = (0);
while(true){
if((i__27065__auto___35734 < len__27064__auto___35733)){
args__27071__auto__.push((arguments[i__27065__auto___35734]));

var G__35735 = (i__27065__auto___35734 + (1));
i__27065__auto___35734 = G__35735;
continue;
} else {
}
break;
}

var argseq__27072__auto__ = ((((0) < args__27071__auto__.length))?(new cljs.core.IndexedSeq(args__27071__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__27072__auto__);
});})(g__35595__auto___35732))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35595__auto___35732){
return (function (args){
return cljs.core.deref.call(null,g__35595__auto___35732);
});})(g__35595__auto___35732))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__35595__auto___35732){
return (function (seq35711){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35711));
});})(g__35595__auto___35732))
;


var g__35595__auto___35736 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__35595__auto___35736){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__27071__auto__ = [];
var len__27064__auto___35737 = arguments.length;
var i__27065__auto___35738 = (0);
while(true){
if((i__27065__auto___35738 < len__27064__auto___35737)){
args__27071__auto__.push((arguments[i__27065__auto___35738]));

var G__35739 = (i__27065__auto___35738 + (1));
i__27065__auto___35738 = G__35739;
continue;
} else {
}
break;
}

var argseq__27072__auto__ = ((((0) < args__27071__auto__.length))?(new cljs.core.IndexedSeq(args__27071__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__27072__auto__);
});})(g__35595__auto___35736))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35595__auto___35736){
return (function (args){
return cljs.core.deref.call(null,g__35595__auto___35736);
});})(g__35595__auto___35736))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__35595__auto___35736){
return (function (seq35712){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35712));
});})(g__35595__auto___35736))
;


var g__35595__auto___35740 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__35595__auto___35740){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__27071__auto__ = [];
var len__27064__auto___35741 = arguments.length;
var i__27065__auto___35742 = (0);
while(true){
if((i__27065__auto___35742 < len__27064__auto___35741)){
args__27071__auto__.push((arguments[i__27065__auto___35742]));

var G__35743 = (i__27065__auto___35742 + (1));
i__27065__auto___35742 = G__35743;
continue;
} else {
}
break;
}

var argseq__27072__auto__ = ((((0) < args__27071__auto__.length))?(new cljs.core.IndexedSeq(args__27071__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__27072__auto__);
});})(g__35595__auto___35740))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35595__auto___35740){
return (function (args){
return cljs.core.deref.call(null,g__35595__auto___35740);
});})(g__35595__auto___35740))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__35595__auto___35740){
return (function (seq35713){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35713));
});})(g__35595__auto___35740))
;


var g__35595__auto___35744 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__35595__auto___35744){
return (function cljs$spec$impl$gen$char(var_args){
var args__27071__auto__ = [];
var len__27064__auto___35745 = arguments.length;
var i__27065__auto___35746 = (0);
while(true){
if((i__27065__auto___35746 < len__27064__auto___35745)){
args__27071__auto__.push((arguments[i__27065__auto___35746]));

var G__35747 = (i__27065__auto___35746 + (1));
i__27065__auto___35746 = G__35747;
continue;
} else {
}
break;
}

var argseq__27072__auto__ = ((((0) < args__27071__auto__.length))?(new cljs.core.IndexedSeq(args__27071__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__27072__auto__);
});})(g__35595__auto___35744))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35595__auto___35744){
return (function (args){
return cljs.core.deref.call(null,g__35595__auto___35744);
});})(g__35595__auto___35744))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__35595__auto___35744){
return (function (seq35714){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35714));
});})(g__35595__auto___35744))
;


var g__35595__auto___35748 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__35595__auto___35748){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__27071__auto__ = [];
var len__27064__auto___35749 = arguments.length;
var i__27065__auto___35750 = (0);
while(true){
if((i__27065__auto___35750 < len__27064__auto___35749)){
args__27071__auto__.push((arguments[i__27065__auto___35750]));

var G__35751 = (i__27065__auto___35750 + (1));
i__27065__auto___35750 = G__35751;
continue;
} else {
}
break;
}

var argseq__27072__auto__ = ((((0) < args__27071__auto__.length))?(new cljs.core.IndexedSeq(args__27071__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__27072__auto__);
});})(g__35595__auto___35748))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35595__auto___35748){
return (function (args){
return cljs.core.deref.call(null,g__35595__auto___35748);
});})(g__35595__auto___35748))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__35595__auto___35748){
return (function (seq35715){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35715));
});})(g__35595__auto___35748))
;


var g__35595__auto___35752 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__35595__auto___35752){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__27071__auto__ = [];
var len__27064__auto___35753 = arguments.length;
var i__27065__auto___35754 = (0);
while(true){
if((i__27065__auto___35754 < len__27064__auto___35753)){
args__27071__auto__.push((arguments[i__27065__auto___35754]));

var G__35755 = (i__27065__auto___35754 + (1));
i__27065__auto___35754 = G__35755;
continue;
} else {
}
break;
}

var argseq__27072__auto__ = ((((0) < args__27071__auto__.length))?(new cljs.core.IndexedSeq(args__27071__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__27072__auto__);
});})(g__35595__auto___35752))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35595__auto___35752){
return (function (args){
return cljs.core.deref.call(null,g__35595__auto___35752);
});})(g__35595__auto___35752))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__35595__auto___35752){
return (function (seq35716){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35716));
});})(g__35595__auto___35752))
;


var g__35595__auto___35756 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__35595__auto___35756){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__27071__auto__ = [];
var len__27064__auto___35757 = arguments.length;
var i__27065__auto___35758 = (0);
while(true){
if((i__27065__auto___35758 < len__27064__auto___35757)){
args__27071__auto__.push((arguments[i__27065__auto___35758]));

var G__35759 = (i__27065__auto___35758 + (1));
i__27065__auto___35758 = G__35759;
continue;
} else {
}
break;
}

var argseq__27072__auto__ = ((((0) < args__27071__auto__.length))?(new cljs.core.IndexedSeq(args__27071__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__27072__auto__);
});})(g__35595__auto___35756))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35595__auto___35756){
return (function (args){
return cljs.core.deref.call(null,g__35595__auto___35756);
});})(g__35595__auto___35756))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__35595__auto___35756){
return (function (seq35717){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35717));
});})(g__35595__auto___35756))
;


var g__35595__auto___35760 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__35595__auto___35760){
return (function cljs$spec$impl$gen$double(var_args){
var args__27071__auto__ = [];
var len__27064__auto___35761 = arguments.length;
var i__27065__auto___35762 = (0);
while(true){
if((i__27065__auto___35762 < len__27064__auto___35761)){
args__27071__auto__.push((arguments[i__27065__auto___35762]));

var G__35763 = (i__27065__auto___35762 + (1));
i__27065__auto___35762 = G__35763;
continue;
} else {
}
break;
}

var argseq__27072__auto__ = ((((0) < args__27071__auto__.length))?(new cljs.core.IndexedSeq(args__27071__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__27072__auto__);
});})(g__35595__auto___35760))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35595__auto___35760){
return (function (args){
return cljs.core.deref.call(null,g__35595__auto___35760);
});})(g__35595__auto___35760))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__35595__auto___35760){
return (function (seq35718){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35718));
});})(g__35595__auto___35760))
;


var g__35595__auto___35764 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__35595__auto___35764){
return (function cljs$spec$impl$gen$int(var_args){
var args__27071__auto__ = [];
var len__27064__auto___35765 = arguments.length;
var i__27065__auto___35766 = (0);
while(true){
if((i__27065__auto___35766 < len__27064__auto___35765)){
args__27071__auto__.push((arguments[i__27065__auto___35766]));

var G__35767 = (i__27065__auto___35766 + (1));
i__27065__auto___35766 = G__35767;
continue;
} else {
}
break;
}

var argseq__27072__auto__ = ((((0) < args__27071__auto__.length))?(new cljs.core.IndexedSeq(args__27071__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__27072__auto__);
});})(g__35595__auto___35764))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35595__auto___35764){
return (function (args){
return cljs.core.deref.call(null,g__35595__auto___35764);
});})(g__35595__auto___35764))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__35595__auto___35764){
return (function (seq35719){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35719));
});})(g__35595__auto___35764))
;


var g__35595__auto___35768 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__35595__auto___35768){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__27071__auto__ = [];
var len__27064__auto___35769 = arguments.length;
var i__27065__auto___35770 = (0);
while(true){
if((i__27065__auto___35770 < len__27064__auto___35769)){
args__27071__auto__.push((arguments[i__27065__auto___35770]));

var G__35771 = (i__27065__auto___35770 + (1));
i__27065__auto___35770 = G__35771;
continue;
} else {
}
break;
}

var argseq__27072__auto__ = ((((0) < args__27071__auto__.length))?(new cljs.core.IndexedSeq(args__27071__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__27072__auto__);
});})(g__35595__auto___35768))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35595__auto___35768){
return (function (args){
return cljs.core.deref.call(null,g__35595__auto___35768);
});})(g__35595__auto___35768))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__35595__auto___35768){
return (function (seq35720){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35720));
});})(g__35595__auto___35768))
;


var g__35595__auto___35772 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__35595__auto___35772){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__27071__auto__ = [];
var len__27064__auto___35773 = arguments.length;
var i__27065__auto___35774 = (0);
while(true){
if((i__27065__auto___35774 < len__27064__auto___35773)){
args__27071__auto__.push((arguments[i__27065__auto___35774]));

var G__35775 = (i__27065__auto___35774 + (1));
i__27065__auto___35774 = G__35775;
continue;
} else {
}
break;
}

var argseq__27072__auto__ = ((((0) < args__27071__auto__.length))?(new cljs.core.IndexedSeq(args__27071__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__27072__auto__);
});})(g__35595__auto___35772))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35595__auto___35772){
return (function (args){
return cljs.core.deref.call(null,g__35595__auto___35772);
});})(g__35595__auto___35772))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__35595__auto___35772){
return (function (seq35721){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35721));
});})(g__35595__auto___35772))
;


var g__35595__auto___35776 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__35595__auto___35776){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__27071__auto__ = [];
var len__27064__auto___35777 = arguments.length;
var i__27065__auto___35778 = (0);
while(true){
if((i__27065__auto___35778 < len__27064__auto___35777)){
args__27071__auto__.push((arguments[i__27065__auto___35778]));

var G__35779 = (i__27065__auto___35778 + (1));
i__27065__auto___35778 = G__35779;
continue;
} else {
}
break;
}

var argseq__27072__auto__ = ((((0) < args__27071__auto__.length))?(new cljs.core.IndexedSeq(args__27071__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__27072__auto__);
});})(g__35595__auto___35776))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35595__auto___35776){
return (function (args){
return cljs.core.deref.call(null,g__35595__auto___35776);
});})(g__35595__auto___35776))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__35595__auto___35776){
return (function (seq35722){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35722));
});})(g__35595__auto___35776))
;


var g__35595__auto___35780 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__35595__auto___35780){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__27071__auto__ = [];
var len__27064__auto___35781 = arguments.length;
var i__27065__auto___35782 = (0);
while(true){
if((i__27065__auto___35782 < len__27064__auto___35781)){
args__27071__auto__.push((arguments[i__27065__auto___35782]));

var G__35783 = (i__27065__auto___35782 + (1));
i__27065__auto___35782 = G__35783;
continue;
} else {
}
break;
}

var argseq__27072__auto__ = ((((0) < args__27071__auto__.length))?(new cljs.core.IndexedSeq(args__27071__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__27072__auto__);
});})(g__35595__auto___35780))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35595__auto___35780){
return (function (args){
return cljs.core.deref.call(null,g__35595__auto___35780);
});})(g__35595__auto___35780))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__35595__auto___35780){
return (function (seq35723){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35723));
});})(g__35595__auto___35780))
;


var g__35595__auto___35784 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__35595__auto___35784){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__27071__auto__ = [];
var len__27064__auto___35785 = arguments.length;
var i__27065__auto___35786 = (0);
while(true){
if((i__27065__auto___35786 < len__27064__auto___35785)){
args__27071__auto__.push((arguments[i__27065__auto___35786]));

var G__35787 = (i__27065__auto___35786 + (1));
i__27065__auto___35786 = G__35787;
continue;
} else {
}
break;
}

var argseq__27072__auto__ = ((((0) < args__27071__auto__.length))?(new cljs.core.IndexedSeq(args__27071__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__27072__auto__);
});})(g__35595__auto___35784))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35595__auto___35784){
return (function (args){
return cljs.core.deref.call(null,g__35595__auto___35784);
});})(g__35595__auto___35784))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__35595__auto___35784){
return (function (seq35724){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35724));
});})(g__35595__auto___35784))
;


var g__35595__auto___35788 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__35595__auto___35788){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__27071__auto__ = [];
var len__27064__auto___35789 = arguments.length;
var i__27065__auto___35790 = (0);
while(true){
if((i__27065__auto___35790 < len__27064__auto___35789)){
args__27071__auto__.push((arguments[i__27065__auto___35790]));

var G__35791 = (i__27065__auto___35790 + (1));
i__27065__auto___35790 = G__35791;
continue;
} else {
}
break;
}

var argseq__27072__auto__ = ((((0) < args__27071__auto__.length))?(new cljs.core.IndexedSeq(args__27071__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__27072__auto__);
});})(g__35595__auto___35788))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35595__auto___35788){
return (function (args){
return cljs.core.deref.call(null,g__35595__auto___35788);
});})(g__35595__auto___35788))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__35595__auto___35788){
return (function (seq35725){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35725));
});})(g__35595__auto___35788))
;


var g__35595__auto___35792 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__35595__auto___35792){
return (function cljs$spec$impl$gen$string(var_args){
var args__27071__auto__ = [];
var len__27064__auto___35793 = arguments.length;
var i__27065__auto___35794 = (0);
while(true){
if((i__27065__auto___35794 < len__27064__auto___35793)){
args__27071__auto__.push((arguments[i__27065__auto___35794]));

var G__35795 = (i__27065__auto___35794 + (1));
i__27065__auto___35794 = G__35795;
continue;
} else {
}
break;
}

var argseq__27072__auto__ = ((((0) < args__27071__auto__.length))?(new cljs.core.IndexedSeq(args__27071__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__27072__auto__);
});})(g__35595__auto___35792))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35595__auto___35792){
return (function (args){
return cljs.core.deref.call(null,g__35595__auto___35792);
});})(g__35595__auto___35792))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__35595__auto___35792){
return (function (seq35726){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35726));
});})(g__35595__auto___35792))
;


var g__35595__auto___35796 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__35595__auto___35796){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__27071__auto__ = [];
var len__27064__auto___35797 = arguments.length;
var i__27065__auto___35798 = (0);
while(true){
if((i__27065__auto___35798 < len__27064__auto___35797)){
args__27071__auto__.push((arguments[i__27065__auto___35798]));

var G__35799 = (i__27065__auto___35798 + (1));
i__27065__auto___35798 = G__35799;
continue;
} else {
}
break;
}

var argseq__27072__auto__ = ((((0) < args__27071__auto__.length))?(new cljs.core.IndexedSeq(args__27071__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__27072__auto__);
});})(g__35595__auto___35796))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35595__auto___35796){
return (function (args){
return cljs.core.deref.call(null,g__35595__auto___35796);
});})(g__35595__auto___35796))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__35595__auto___35796){
return (function (seq35727){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35727));
});})(g__35595__auto___35796))
;


var g__35595__auto___35800 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__35595__auto___35800){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__27071__auto__ = [];
var len__27064__auto___35801 = arguments.length;
var i__27065__auto___35802 = (0);
while(true){
if((i__27065__auto___35802 < len__27064__auto___35801)){
args__27071__auto__.push((arguments[i__27065__auto___35802]));

var G__35803 = (i__27065__auto___35802 + (1));
i__27065__auto___35802 = G__35803;
continue;
} else {
}
break;
}

var argseq__27072__auto__ = ((((0) < args__27071__auto__.length))?(new cljs.core.IndexedSeq(args__27071__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__27072__auto__);
});})(g__35595__auto___35800))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35595__auto___35800){
return (function (args){
return cljs.core.deref.call(null,g__35595__auto___35800);
});})(g__35595__auto___35800))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__35595__auto___35800){
return (function (seq35728){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35728));
});})(g__35595__auto___35800))
;


var g__35595__auto___35804 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__35595__auto___35804){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__27071__auto__ = [];
var len__27064__auto___35805 = arguments.length;
var i__27065__auto___35806 = (0);
while(true){
if((i__27065__auto___35806 < len__27064__auto___35805)){
args__27071__auto__.push((arguments[i__27065__auto___35806]));

var G__35807 = (i__27065__auto___35806 + (1));
i__27065__auto___35806 = G__35807;
continue;
} else {
}
break;
}

var argseq__27072__auto__ = ((((0) < args__27071__auto__.length))?(new cljs.core.IndexedSeq(args__27071__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__27072__auto__);
});})(g__35595__auto___35804))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35595__auto___35804){
return (function (args){
return cljs.core.deref.call(null,g__35595__auto___35804);
});})(g__35595__auto___35804))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__35595__auto___35804){
return (function (seq35729){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35729));
});})(g__35595__auto___35804))
;


var g__35595__auto___35808 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__35595__auto___35808){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__27071__auto__ = [];
var len__27064__auto___35809 = arguments.length;
var i__27065__auto___35810 = (0);
while(true){
if((i__27065__auto___35810 < len__27064__auto___35809)){
args__27071__auto__.push((arguments[i__27065__auto___35810]));

var G__35811 = (i__27065__auto___35810 + (1));
i__27065__auto___35810 = G__35811;
continue;
} else {
}
break;
}

var argseq__27072__auto__ = ((((0) < args__27071__auto__.length))?(new cljs.core.IndexedSeq(args__27071__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__27072__auto__);
});})(g__35595__auto___35808))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35595__auto___35808){
return (function (args){
return cljs.core.deref.call(null,g__35595__auto___35808);
});})(g__35595__auto___35808))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__35595__auto___35808){
return (function (seq35730){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35730));
});})(g__35595__auto___35808))
;


var g__35595__auto___35812 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__35595__auto___35812){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__27071__auto__ = [];
var len__27064__auto___35813 = arguments.length;
var i__27065__auto___35814 = (0);
while(true){
if((i__27065__auto___35814 < len__27064__auto___35813)){
args__27071__auto__.push((arguments[i__27065__auto___35814]));

var G__35815 = (i__27065__auto___35814 + (1));
i__27065__auto___35814 = G__35815;
continue;
} else {
}
break;
}

var argseq__27072__auto__ = ((((0) < args__27071__auto__.length))?(new cljs.core.IndexedSeq(args__27071__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__27072__auto__);
});})(g__35595__auto___35812))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35595__auto___35812){
return (function (args){
return cljs.core.deref.call(null,g__35595__auto___35812);
});})(g__35595__auto___35812))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__35595__auto___35812){
return (function (seq35731){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35731));
});})(g__35595__auto___35812))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__27071__auto__ = [];
var len__27064__auto___35818 = arguments.length;
var i__27065__auto___35819 = (0);
while(true){
if((i__27065__auto___35819 < len__27064__auto___35818)){
args__27071__auto__.push((arguments[i__27065__auto___35819]));

var G__35820 = (i__27065__auto___35819 + (1));
i__27065__auto___35819 = G__35820;
continue;
} else {
}
break;
}

var argseq__27072__auto__ = ((((0) < args__27071__auto__.length))?(new cljs.core.IndexedSeq(args__27071__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__27072__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__35816_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__35816_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq35817){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35817));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__35821_SHARP_){
return (new Date(p1__35821_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map?rel=1500616863201