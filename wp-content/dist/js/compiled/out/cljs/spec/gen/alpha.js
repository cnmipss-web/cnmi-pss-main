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

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__37374__auto__,writer__37375__auto__,opt__37376__auto__){
return cljs.core._write.call(null,writer__37375__auto__,"cljs.spec.gen.alpha/LazyVar");
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
var args__37896__auto__ = [];
var len__37889__auto___46540 = arguments.length;
var i__37890__auto___46541 = (0);
while(true){
if((i__37890__auto___46541 < len__37889__auto___46540)){
args__37896__auto__.push((arguments[i__37890__auto___46541]));

var G__46542 = (i__37890__auto___46541 + (1));
i__37890__auto___46541 = G__46542;
continue;
} else {
}
break;
}

var argseq__37897__auto__ = ((((0) < args__37896__auto__.length))?(new cljs.core.IndexedSeq(args__37896__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__37897__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq46539){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46539));
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
var args__37896__auto__ = [];
var len__37889__auto___46544 = arguments.length;
var i__37890__auto___46545 = (0);
while(true){
if((i__37890__auto___46545 < len__37889__auto___46544)){
args__37896__auto__.push((arguments[i__37890__auto___46545]));

var G__46546 = (i__37890__auto___46545 + (1));
i__37890__auto___46545 = G__46546;
continue;
} else {
}
break;
}

var argseq__37897__auto__ = ((((0) < args__37896__auto__.length))?(new cljs.core.IndexedSeq(args__37896__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__37897__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq46543){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46543));
});

var g_QMARK__46547 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_46548 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__46547){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__46547))
,null));
var mkg_46549 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__46547,g_46548){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__46547,g_46548))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__46547,g_46548,mkg_46549){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__46547).call(null,x);
});})(g_QMARK__46547,g_46548,mkg_46549))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__46547,g_46548,mkg_46549){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_46549).call(null,gfn);
});})(g_QMARK__46547,g_46548,mkg_46549))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__46547,g_46548,mkg_46549){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_46548).call(null,generator);
});})(g_QMARK__46547,g_46548,mkg_46549))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__37983__auto___46569 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__37983__auto___46569){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__37896__auto__ = [];
var len__37889__auto___46570 = arguments.length;
var i__37890__auto___46571 = (0);
while(true){
if((i__37890__auto___46571 < len__37889__auto___46570)){
args__37896__auto__.push((arguments[i__37890__auto___46571]));

var G__46572 = (i__37890__auto___46571 + (1));
i__37890__auto___46571 = G__46572;
continue;
} else {
}
break;
}

var argseq__37897__auto__ = ((((0) < args__37896__auto__.length))?(new cljs.core.IndexedSeq(args__37896__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__37897__auto__);
});})(g__37983__auto___46569))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37983__auto___46569){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37983__auto___46569),args);
});})(g__37983__auto___46569))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__37983__auto___46569){
return (function (seq46550){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46550));
});})(g__37983__auto___46569))
;


var g__37983__auto___46573 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__37983__auto___46573){
return (function cljs$spec$gen$alpha$list(var_args){
var args__37896__auto__ = [];
var len__37889__auto___46574 = arguments.length;
var i__37890__auto___46575 = (0);
while(true){
if((i__37890__auto___46575 < len__37889__auto___46574)){
args__37896__auto__.push((arguments[i__37890__auto___46575]));

var G__46576 = (i__37890__auto___46575 + (1));
i__37890__auto___46575 = G__46576;
continue;
} else {
}
break;
}

var argseq__37897__auto__ = ((((0) < args__37896__auto__.length))?(new cljs.core.IndexedSeq(args__37896__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__37897__auto__);
});})(g__37983__auto___46573))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37983__auto___46573){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37983__auto___46573),args);
});})(g__37983__auto___46573))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__37983__auto___46573){
return (function (seq46551){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46551));
});})(g__37983__auto___46573))
;


var g__37983__auto___46577 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__37983__auto___46577){
return (function cljs$spec$gen$alpha$map(var_args){
var args__37896__auto__ = [];
var len__37889__auto___46578 = arguments.length;
var i__37890__auto___46579 = (0);
while(true){
if((i__37890__auto___46579 < len__37889__auto___46578)){
args__37896__auto__.push((arguments[i__37890__auto___46579]));

var G__46580 = (i__37890__auto___46579 + (1));
i__37890__auto___46579 = G__46580;
continue;
} else {
}
break;
}

var argseq__37897__auto__ = ((((0) < args__37896__auto__.length))?(new cljs.core.IndexedSeq(args__37896__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__37897__auto__);
});})(g__37983__auto___46577))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37983__auto___46577){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37983__auto___46577),args);
});})(g__37983__auto___46577))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__37983__auto___46577){
return (function (seq46552){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46552));
});})(g__37983__auto___46577))
;


var g__37983__auto___46581 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__37983__auto___46581){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__37896__auto__ = [];
var len__37889__auto___46582 = arguments.length;
var i__37890__auto___46583 = (0);
while(true){
if((i__37890__auto___46583 < len__37889__auto___46582)){
args__37896__auto__.push((arguments[i__37890__auto___46583]));

var G__46584 = (i__37890__auto___46583 + (1));
i__37890__auto___46583 = G__46584;
continue;
} else {
}
break;
}

var argseq__37897__auto__ = ((((0) < args__37896__auto__.length))?(new cljs.core.IndexedSeq(args__37896__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__37897__auto__);
});})(g__37983__auto___46581))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37983__auto___46581){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37983__auto___46581),args);
});})(g__37983__auto___46581))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__37983__auto___46581){
return (function (seq46553){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46553));
});})(g__37983__auto___46581))
;


var g__37983__auto___46585 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__37983__auto___46585){
return (function cljs$spec$gen$alpha$set(var_args){
var args__37896__auto__ = [];
var len__37889__auto___46586 = arguments.length;
var i__37890__auto___46587 = (0);
while(true){
if((i__37890__auto___46587 < len__37889__auto___46586)){
args__37896__auto__.push((arguments[i__37890__auto___46587]));

var G__46588 = (i__37890__auto___46587 + (1));
i__37890__auto___46587 = G__46588;
continue;
} else {
}
break;
}

var argseq__37897__auto__ = ((((0) < args__37896__auto__.length))?(new cljs.core.IndexedSeq(args__37896__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__37897__auto__);
});})(g__37983__auto___46585))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37983__auto___46585){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37983__auto___46585),args);
});})(g__37983__auto___46585))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__37983__auto___46585){
return (function (seq46554){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46554));
});})(g__37983__auto___46585))
;


var g__37983__auto___46589 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__37983__auto___46589){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__37896__auto__ = [];
var len__37889__auto___46590 = arguments.length;
var i__37890__auto___46591 = (0);
while(true){
if((i__37890__auto___46591 < len__37889__auto___46590)){
args__37896__auto__.push((arguments[i__37890__auto___46591]));

var G__46592 = (i__37890__auto___46591 + (1));
i__37890__auto___46591 = G__46592;
continue;
} else {
}
break;
}

var argseq__37897__auto__ = ((((0) < args__37896__auto__.length))?(new cljs.core.IndexedSeq(args__37896__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__37897__auto__);
});})(g__37983__auto___46589))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37983__auto___46589){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37983__auto___46589),args);
});})(g__37983__auto___46589))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__37983__auto___46589){
return (function (seq46555){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46555));
});})(g__37983__auto___46589))
;


var g__37983__auto___46593 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__37983__auto___46593){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__37896__auto__ = [];
var len__37889__auto___46594 = arguments.length;
var i__37890__auto___46595 = (0);
while(true){
if((i__37890__auto___46595 < len__37889__auto___46594)){
args__37896__auto__.push((arguments[i__37890__auto___46595]));

var G__46596 = (i__37890__auto___46595 + (1));
i__37890__auto___46595 = G__46596;
continue;
} else {
}
break;
}

var argseq__37897__auto__ = ((((0) < args__37896__auto__.length))?(new cljs.core.IndexedSeq(args__37896__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__37897__auto__);
});})(g__37983__auto___46593))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37983__auto___46593){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37983__auto___46593),args);
});})(g__37983__auto___46593))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__37983__auto___46593){
return (function (seq46556){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46556));
});})(g__37983__auto___46593))
;


var g__37983__auto___46597 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__37983__auto___46597){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__37896__auto__ = [];
var len__37889__auto___46598 = arguments.length;
var i__37890__auto___46599 = (0);
while(true){
if((i__37890__auto___46599 < len__37889__auto___46598)){
args__37896__auto__.push((arguments[i__37890__auto___46599]));

var G__46600 = (i__37890__auto___46599 + (1));
i__37890__auto___46599 = G__46600;
continue;
} else {
}
break;
}

var argseq__37897__auto__ = ((((0) < args__37896__auto__.length))?(new cljs.core.IndexedSeq(args__37896__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__37897__auto__);
});})(g__37983__auto___46597))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37983__auto___46597){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37983__auto___46597),args);
});})(g__37983__auto___46597))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__37983__auto___46597){
return (function (seq46557){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46557));
});})(g__37983__auto___46597))
;


var g__37983__auto___46601 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__37983__auto___46601){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__37896__auto__ = [];
var len__37889__auto___46602 = arguments.length;
var i__37890__auto___46603 = (0);
while(true){
if((i__37890__auto___46603 < len__37889__auto___46602)){
args__37896__auto__.push((arguments[i__37890__auto___46603]));

var G__46604 = (i__37890__auto___46603 + (1));
i__37890__auto___46603 = G__46604;
continue;
} else {
}
break;
}

var argseq__37897__auto__ = ((((0) < args__37896__auto__.length))?(new cljs.core.IndexedSeq(args__37896__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__37897__auto__);
});})(g__37983__auto___46601))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37983__auto___46601){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37983__auto___46601),args);
});})(g__37983__auto___46601))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__37983__auto___46601){
return (function (seq46558){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46558));
});})(g__37983__auto___46601))
;


var g__37983__auto___46605 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__37983__auto___46605){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__37896__auto__ = [];
var len__37889__auto___46606 = arguments.length;
var i__37890__auto___46607 = (0);
while(true){
if((i__37890__auto___46607 < len__37889__auto___46606)){
args__37896__auto__.push((arguments[i__37890__auto___46607]));

var G__46608 = (i__37890__auto___46607 + (1));
i__37890__auto___46607 = G__46608;
continue;
} else {
}
break;
}

var argseq__37897__auto__ = ((((0) < args__37896__auto__.length))?(new cljs.core.IndexedSeq(args__37896__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__37897__auto__);
});})(g__37983__auto___46605))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37983__auto___46605){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37983__auto___46605),args);
});})(g__37983__auto___46605))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__37983__auto___46605){
return (function (seq46559){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46559));
});})(g__37983__auto___46605))
;


var g__37983__auto___46609 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__37983__auto___46609){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__37896__auto__ = [];
var len__37889__auto___46610 = arguments.length;
var i__37890__auto___46611 = (0);
while(true){
if((i__37890__auto___46611 < len__37889__auto___46610)){
args__37896__auto__.push((arguments[i__37890__auto___46611]));

var G__46612 = (i__37890__auto___46611 + (1));
i__37890__auto___46611 = G__46612;
continue;
} else {
}
break;
}

var argseq__37897__auto__ = ((((0) < args__37896__auto__.length))?(new cljs.core.IndexedSeq(args__37896__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__37897__auto__);
});})(g__37983__auto___46609))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37983__auto___46609){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37983__auto___46609),args);
});})(g__37983__auto___46609))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__37983__auto___46609){
return (function (seq46560){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46560));
});})(g__37983__auto___46609))
;


var g__37983__auto___46613 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__37983__auto___46613){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__37896__auto__ = [];
var len__37889__auto___46614 = arguments.length;
var i__37890__auto___46615 = (0);
while(true){
if((i__37890__auto___46615 < len__37889__auto___46614)){
args__37896__auto__.push((arguments[i__37890__auto___46615]));

var G__46616 = (i__37890__auto___46615 + (1));
i__37890__auto___46615 = G__46616;
continue;
} else {
}
break;
}

var argseq__37897__auto__ = ((((0) < args__37896__auto__.length))?(new cljs.core.IndexedSeq(args__37896__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__37897__auto__);
});})(g__37983__auto___46613))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37983__auto___46613){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37983__auto___46613),args);
});})(g__37983__auto___46613))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__37983__auto___46613){
return (function (seq46561){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46561));
});})(g__37983__auto___46613))
;


var g__37983__auto___46617 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__37983__auto___46617){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__37896__auto__ = [];
var len__37889__auto___46618 = arguments.length;
var i__37890__auto___46619 = (0);
while(true){
if((i__37890__auto___46619 < len__37889__auto___46618)){
args__37896__auto__.push((arguments[i__37890__auto___46619]));

var G__46620 = (i__37890__auto___46619 + (1));
i__37890__auto___46619 = G__46620;
continue;
} else {
}
break;
}

var argseq__37897__auto__ = ((((0) < args__37896__auto__.length))?(new cljs.core.IndexedSeq(args__37896__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__37897__auto__);
});})(g__37983__auto___46617))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37983__auto___46617){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37983__auto___46617),args);
});})(g__37983__auto___46617))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__37983__auto___46617){
return (function (seq46562){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46562));
});})(g__37983__auto___46617))
;


var g__37983__auto___46621 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__37983__auto___46621){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__37896__auto__ = [];
var len__37889__auto___46622 = arguments.length;
var i__37890__auto___46623 = (0);
while(true){
if((i__37890__auto___46623 < len__37889__auto___46622)){
args__37896__auto__.push((arguments[i__37890__auto___46623]));

var G__46624 = (i__37890__auto___46623 + (1));
i__37890__auto___46623 = G__46624;
continue;
} else {
}
break;
}

var argseq__37897__auto__ = ((((0) < args__37896__auto__.length))?(new cljs.core.IndexedSeq(args__37896__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__37897__auto__);
});})(g__37983__auto___46621))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37983__auto___46621){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37983__auto___46621),args);
});})(g__37983__auto___46621))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__37983__auto___46621){
return (function (seq46563){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46563));
});})(g__37983__auto___46621))
;


var g__37983__auto___46625 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__37983__auto___46625){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__37896__auto__ = [];
var len__37889__auto___46626 = arguments.length;
var i__37890__auto___46627 = (0);
while(true){
if((i__37890__auto___46627 < len__37889__auto___46626)){
args__37896__auto__.push((arguments[i__37890__auto___46627]));

var G__46628 = (i__37890__auto___46627 + (1));
i__37890__auto___46627 = G__46628;
continue;
} else {
}
break;
}

var argseq__37897__auto__ = ((((0) < args__37896__auto__.length))?(new cljs.core.IndexedSeq(args__37896__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__37897__auto__);
});})(g__37983__auto___46625))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37983__auto___46625){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37983__auto___46625),args);
});})(g__37983__auto___46625))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__37983__auto___46625){
return (function (seq46564){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46564));
});})(g__37983__auto___46625))
;


var g__37983__auto___46629 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__37983__auto___46629){
return (function cljs$spec$gen$alpha$return(var_args){
var args__37896__auto__ = [];
var len__37889__auto___46630 = arguments.length;
var i__37890__auto___46631 = (0);
while(true){
if((i__37890__auto___46631 < len__37889__auto___46630)){
args__37896__auto__.push((arguments[i__37890__auto___46631]));

var G__46632 = (i__37890__auto___46631 + (1));
i__37890__auto___46631 = G__46632;
continue;
} else {
}
break;
}

var argseq__37897__auto__ = ((((0) < args__37896__auto__.length))?(new cljs.core.IndexedSeq(args__37896__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__37897__auto__);
});})(g__37983__auto___46629))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37983__auto___46629){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37983__auto___46629),args);
});})(g__37983__auto___46629))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__37983__auto___46629){
return (function (seq46565){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46565));
});})(g__37983__auto___46629))
;


var g__37983__auto___46633 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__37983__auto___46633){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__37896__auto__ = [];
var len__37889__auto___46634 = arguments.length;
var i__37890__auto___46635 = (0);
while(true){
if((i__37890__auto___46635 < len__37889__auto___46634)){
args__37896__auto__.push((arguments[i__37890__auto___46635]));

var G__46636 = (i__37890__auto___46635 + (1));
i__37890__auto___46635 = G__46636;
continue;
} else {
}
break;
}

var argseq__37897__auto__ = ((((0) < args__37896__auto__.length))?(new cljs.core.IndexedSeq(args__37896__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__37897__auto__);
});})(g__37983__auto___46633))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37983__auto___46633){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37983__auto___46633),args);
});})(g__37983__auto___46633))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__37983__auto___46633){
return (function (seq46566){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46566));
});})(g__37983__auto___46633))
;


var g__37983__auto___46637 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__37983__auto___46637){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__37896__auto__ = [];
var len__37889__auto___46638 = arguments.length;
var i__37890__auto___46639 = (0);
while(true){
if((i__37890__auto___46639 < len__37889__auto___46638)){
args__37896__auto__.push((arguments[i__37890__auto___46639]));

var G__46640 = (i__37890__auto___46639 + (1));
i__37890__auto___46639 = G__46640;
continue;
} else {
}
break;
}

var argseq__37897__auto__ = ((((0) < args__37896__auto__.length))?(new cljs.core.IndexedSeq(args__37896__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__37897__auto__);
});})(g__37983__auto___46637))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37983__auto___46637){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37983__auto___46637),args);
});})(g__37983__auto___46637))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__37983__auto___46637){
return (function (seq46567){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46567));
});})(g__37983__auto___46637))
;


var g__37983__auto___46641 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__37983__auto___46641){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__37896__auto__ = [];
var len__37889__auto___46642 = arguments.length;
var i__37890__auto___46643 = (0);
while(true){
if((i__37890__auto___46643 < len__37889__auto___46642)){
args__37896__auto__.push((arguments[i__37890__auto___46643]));

var G__46644 = (i__37890__auto___46643 + (1));
i__37890__auto___46643 = G__46644;
continue;
} else {
}
break;
}

var argseq__37897__auto__ = ((((0) < args__37896__auto__.length))?(new cljs.core.IndexedSeq(args__37896__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__37897__auto__);
});})(g__37983__auto___46641))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37983__auto___46641){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37983__auto___46641),args);
});})(g__37983__auto___46641))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__37983__auto___46641){
return (function (seq46568){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46568));
});})(g__37983__auto___46641))
;

var g__37996__auto___46666 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__37996__auto___46666){
return (function cljs$spec$gen$alpha$any(var_args){
var args__37896__auto__ = [];
var len__37889__auto___46667 = arguments.length;
var i__37890__auto___46668 = (0);
while(true){
if((i__37890__auto___46668 < len__37889__auto___46667)){
args__37896__auto__.push((arguments[i__37890__auto___46668]));

var G__46669 = (i__37890__auto___46668 + (1));
i__37890__auto___46668 = G__46669;
continue;
} else {
}
break;
}

var argseq__37897__auto__ = ((((0) < args__37896__auto__.length))?(new cljs.core.IndexedSeq(args__37896__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__37897__auto__);
});})(g__37996__auto___46666))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37996__auto___46666){
return (function (args){
return cljs.core.deref.call(null,g__37996__auto___46666);
});})(g__37996__auto___46666))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__37996__auto___46666){
return (function (seq46645){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46645));
});})(g__37996__auto___46666))
;


var g__37996__auto___46670 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__37996__auto___46670){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__37896__auto__ = [];
var len__37889__auto___46671 = arguments.length;
var i__37890__auto___46672 = (0);
while(true){
if((i__37890__auto___46672 < len__37889__auto___46671)){
args__37896__auto__.push((arguments[i__37890__auto___46672]));

var G__46673 = (i__37890__auto___46672 + (1));
i__37890__auto___46672 = G__46673;
continue;
} else {
}
break;
}

var argseq__37897__auto__ = ((((0) < args__37896__auto__.length))?(new cljs.core.IndexedSeq(args__37896__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__37897__auto__);
});})(g__37996__auto___46670))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37996__auto___46670){
return (function (args){
return cljs.core.deref.call(null,g__37996__auto___46670);
});})(g__37996__auto___46670))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__37996__auto___46670){
return (function (seq46646){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46646));
});})(g__37996__auto___46670))
;


var g__37996__auto___46674 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__37996__auto___46674){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__37896__auto__ = [];
var len__37889__auto___46675 = arguments.length;
var i__37890__auto___46676 = (0);
while(true){
if((i__37890__auto___46676 < len__37889__auto___46675)){
args__37896__auto__.push((arguments[i__37890__auto___46676]));

var G__46677 = (i__37890__auto___46676 + (1));
i__37890__auto___46676 = G__46677;
continue;
} else {
}
break;
}

var argseq__37897__auto__ = ((((0) < args__37896__auto__.length))?(new cljs.core.IndexedSeq(args__37896__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__37897__auto__);
});})(g__37996__auto___46674))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37996__auto___46674){
return (function (args){
return cljs.core.deref.call(null,g__37996__auto___46674);
});})(g__37996__auto___46674))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__37996__auto___46674){
return (function (seq46647){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46647));
});})(g__37996__auto___46674))
;


var g__37996__auto___46678 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__37996__auto___46678){
return (function cljs$spec$gen$alpha$char(var_args){
var args__37896__auto__ = [];
var len__37889__auto___46679 = arguments.length;
var i__37890__auto___46680 = (0);
while(true){
if((i__37890__auto___46680 < len__37889__auto___46679)){
args__37896__auto__.push((arguments[i__37890__auto___46680]));

var G__46681 = (i__37890__auto___46680 + (1));
i__37890__auto___46680 = G__46681;
continue;
} else {
}
break;
}

var argseq__37897__auto__ = ((((0) < args__37896__auto__.length))?(new cljs.core.IndexedSeq(args__37896__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__37897__auto__);
});})(g__37996__auto___46678))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37996__auto___46678){
return (function (args){
return cljs.core.deref.call(null,g__37996__auto___46678);
});})(g__37996__auto___46678))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__37996__auto___46678){
return (function (seq46648){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46648));
});})(g__37996__auto___46678))
;


var g__37996__auto___46682 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__37996__auto___46682){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__37896__auto__ = [];
var len__37889__auto___46683 = arguments.length;
var i__37890__auto___46684 = (0);
while(true){
if((i__37890__auto___46684 < len__37889__auto___46683)){
args__37896__auto__.push((arguments[i__37890__auto___46684]));

var G__46685 = (i__37890__auto___46684 + (1));
i__37890__auto___46684 = G__46685;
continue;
} else {
}
break;
}

var argseq__37897__auto__ = ((((0) < args__37896__auto__.length))?(new cljs.core.IndexedSeq(args__37896__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__37897__auto__);
});})(g__37996__auto___46682))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37996__auto___46682){
return (function (args){
return cljs.core.deref.call(null,g__37996__auto___46682);
});})(g__37996__auto___46682))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__37996__auto___46682){
return (function (seq46649){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46649));
});})(g__37996__auto___46682))
;


var g__37996__auto___46686 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__37996__auto___46686){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__37896__auto__ = [];
var len__37889__auto___46687 = arguments.length;
var i__37890__auto___46688 = (0);
while(true){
if((i__37890__auto___46688 < len__37889__auto___46687)){
args__37896__auto__.push((arguments[i__37890__auto___46688]));

var G__46689 = (i__37890__auto___46688 + (1));
i__37890__auto___46688 = G__46689;
continue;
} else {
}
break;
}

var argseq__37897__auto__ = ((((0) < args__37896__auto__.length))?(new cljs.core.IndexedSeq(args__37896__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__37897__auto__);
});})(g__37996__auto___46686))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37996__auto___46686){
return (function (args){
return cljs.core.deref.call(null,g__37996__auto___46686);
});})(g__37996__auto___46686))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__37996__auto___46686){
return (function (seq46650){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46650));
});})(g__37996__auto___46686))
;


var g__37996__auto___46690 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__37996__auto___46690){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__37896__auto__ = [];
var len__37889__auto___46691 = arguments.length;
var i__37890__auto___46692 = (0);
while(true){
if((i__37890__auto___46692 < len__37889__auto___46691)){
args__37896__auto__.push((arguments[i__37890__auto___46692]));

var G__46693 = (i__37890__auto___46692 + (1));
i__37890__auto___46692 = G__46693;
continue;
} else {
}
break;
}

var argseq__37897__auto__ = ((((0) < args__37896__auto__.length))?(new cljs.core.IndexedSeq(args__37896__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__37897__auto__);
});})(g__37996__auto___46690))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37996__auto___46690){
return (function (args){
return cljs.core.deref.call(null,g__37996__auto___46690);
});})(g__37996__auto___46690))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__37996__auto___46690){
return (function (seq46651){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46651));
});})(g__37996__auto___46690))
;


var g__37996__auto___46694 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__37996__auto___46694){
return (function cljs$spec$gen$alpha$double(var_args){
var args__37896__auto__ = [];
var len__37889__auto___46695 = arguments.length;
var i__37890__auto___46696 = (0);
while(true){
if((i__37890__auto___46696 < len__37889__auto___46695)){
args__37896__auto__.push((arguments[i__37890__auto___46696]));

var G__46697 = (i__37890__auto___46696 + (1));
i__37890__auto___46696 = G__46697;
continue;
} else {
}
break;
}

var argseq__37897__auto__ = ((((0) < args__37896__auto__.length))?(new cljs.core.IndexedSeq(args__37896__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__37897__auto__);
});})(g__37996__auto___46694))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37996__auto___46694){
return (function (args){
return cljs.core.deref.call(null,g__37996__auto___46694);
});})(g__37996__auto___46694))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__37996__auto___46694){
return (function (seq46652){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46652));
});})(g__37996__auto___46694))
;


var g__37996__auto___46698 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__37996__auto___46698){
return (function cljs$spec$gen$alpha$int(var_args){
var args__37896__auto__ = [];
var len__37889__auto___46699 = arguments.length;
var i__37890__auto___46700 = (0);
while(true){
if((i__37890__auto___46700 < len__37889__auto___46699)){
args__37896__auto__.push((arguments[i__37890__auto___46700]));

var G__46701 = (i__37890__auto___46700 + (1));
i__37890__auto___46700 = G__46701;
continue;
} else {
}
break;
}

var argseq__37897__auto__ = ((((0) < args__37896__auto__.length))?(new cljs.core.IndexedSeq(args__37896__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__37897__auto__);
});})(g__37996__auto___46698))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37996__auto___46698){
return (function (args){
return cljs.core.deref.call(null,g__37996__auto___46698);
});})(g__37996__auto___46698))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__37996__auto___46698){
return (function (seq46653){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46653));
});})(g__37996__auto___46698))
;


var g__37996__auto___46702 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__37996__auto___46702){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__37896__auto__ = [];
var len__37889__auto___46703 = arguments.length;
var i__37890__auto___46704 = (0);
while(true){
if((i__37890__auto___46704 < len__37889__auto___46703)){
args__37896__auto__.push((arguments[i__37890__auto___46704]));

var G__46705 = (i__37890__auto___46704 + (1));
i__37890__auto___46704 = G__46705;
continue;
} else {
}
break;
}

var argseq__37897__auto__ = ((((0) < args__37896__auto__.length))?(new cljs.core.IndexedSeq(args__37896__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__37897__auto__);
});})(g__37996__auto___46702))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37996__auto___46702){
return (function (args){
return cljs.core.deref.call(null,g__37996__auto___46702);
});})(g__37996__auto___46702))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__37996__auto___46702){
return (function (seq46654){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46654));
});})(g__37996__auto___46702))
;


var g__37996__auto___46706 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__37996__auto___46706){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__37896__auto__ = [];
var len__37889__auto___46707 = arguments.length;
var i__37890__auto___46708 = (0);
while(true){
if((i__37890__auto___46708 < len__37889__auto___46707)){
args__37896__auto__.push((arguments[i__37890__auto___46708]));

var G__46709 = (i__37890__auto___46708 + (1));
i__37890__auto___46708 = G__46709;
continue;
} else {
}
break;
}

var argseq__37897__auto__ = ((((0) < args__37896__auto__.length))?(new cljs.core.IndexedSeq(args__37896__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__37897__auto__);
});})(g__37996__auto___46706))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37996__auto___46706){
return (function (args){
return cljs.core.deref.call(null,g__37996__auto___46706);
});})(g__37996__auto___46706))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__37996__auto___46706){
return (function (seq46655){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46655));
});})(g__37996__auto___46706))
;


var g__37996__auto___46710 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__37996__auto___46710){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__37896__auto__ = [];
var len__37889__auto___46711 = arguments.length;
var i__37890__auto___46712 = (0);
while(true){
if((i__37890__auto___46712 < len__37889__auto___46711)){
args__37896__auto__.push((arguments[i__37890__auto___46712]));

var G__46713 = (i__37890__auto___46712 + (1));
i__37890__auto___46712 = G__46713;
continue;
} else {
}
break;
}

var argseq__37897__auto__ = ((((0) < args__37896__auto__.length))?(new cljs.core.IndexedSeq(args__37896__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__37897__auto__);
});})(g__37996__auto___46710))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37996__auto___46710){
return (function (args){
return cljs.core.deref.call(null,g__37996__auto___46710);
});})(g__37996__auto___46710))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__37996__auto___46710){
return (function (seq46656){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46656));
});})(g__37996__auto___46710))
;


var g__37996__auto___46714 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__37996__auto___46714){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__37896__auto__ = [];
var len__37889__auto___46715 = arguments.length;
var i__37890__auto___46716 = (0);
while(true){
if((i__37890__auto___46716 < len__37889__auto___46715)){
args__37896__auto__.push((arguments[i__37890__auto___46716]));

var G__46717 = (i__37890__auto___46716 + (1));
i__37890__auto___46716 = G__46717;
continue;
} else {
}
break;
}

var argseq__37897__auto__ = ((((0) < args__37896__auto__.length))?(new cljs.core.IndexedSeq(args__37896__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__37897__auto__);
});})(g__37996__auto___46714))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37996__auto___46714){
return (function (args){
return cljs.core.deref.call(null,g__37996__auto___46714);
});})(g__37996__auto___46714))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__37996__auto___46714){
return (function (seq46657){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46657));
});})(g__37996__auto___46714))
;


var g__37996__auto___46718 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__37996__auto___46718){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__37896__auto__ = [];
var len__37889__auto___46719 = arguments.length;
var i__37890__auto___46720 = (0);
while(true){
if((i__37890__auto___46720 < len__37889__auto___46719)){
args__37896__auto__.push((arguments[i__37890__auto___46720]));

var G__46721 = (i__37890__auto___46720 + (1));
i__37890__auto___46720 = G__46721;
continue;
} else {
}
break;
}

var argseq__37897__auto__ = ((((0) < args__37896__auto__.length))?(new cljs.core.IndexedSeq(args__37896__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__37897__auto__);
});})(g__37996__auto___46718))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37996__auto___46718){
return (function (args){
return cljs.core.deref.call(null,g__37996__auto___46718);
});})(g__37996__auto___46718))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__37996__auto___46718){
return (function (seq46658){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46658));
});})(g__37996__auto___46718))
;


var g__37996__auto___46722 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__37996__auto___46722){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__37896__auto__ = [];
var len__37889__auto___46723 = arguments.length;
var i__37890__auto___46724 = (0);
while(true){
if((i__37890__auto___46724 < len__37889__auto___46723)){
args__37896__auto__.push((arguments[i__37890__auto___46724]));

var G__46725 = (i__37890__auto___46724 + (1));
i__37890__auto___46724 = G__46725;
continue;
} else {
}
break;
}

var argseq__37897__auto__ = ((((0) < args__37896__auto__.length))?(new cljs.core.IndexedSeq(args__37896__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__37897__auto__);
});})(g__37996__auto___46722))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37996__auto___46722){
return (function (args){
return cljs.core.deref.call(null,g__37996__auto___46722);
});})(g__37996__auto___46722))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__37996__auto___46722){
return (function (seq46659){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46659));
});})(g__37996__auto___46722))
;


var g__37996__auto___46726 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__37996__auto___46726){
return (function cljs$spec$gen$alpha$string(var_args){
var args__37896__auto__ = [];
var len__37889__auto___46727 = arguments.length;
var i__37890__auto___46728 = (0);
while(true){
if((i__37890__auto___46728 < len__37889__auto___46727)){
args__37896__auto__.push((arguments[i__37890__auto___46728]));

var G__46729 = (i__37890__auto___46728 + (1));
i__37890__auto___46728 = G__46729;
continue;
} else {
}
break;
}

var argseq__37897__auto__ = ((((0) < args__37896__auto__.length))?(new cljs.core.IndexedSeq(args__37896__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__37897__auto__);
});})(g__37996__auto___46726))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37996__auto___46726){
return (function (args){
return cljs.core.deref.call(null,g__37996__auto___46726);
});})(g__37996__auto___46726))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__37996__auto___46726){
return (function (seq46660){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46660));
});})(g__37996__auto___46726))
;


var g__37996__auto___46730 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__37996__auto___46730){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__37896__auto__ = [];
var len__37889__auto___46731 = arguments.length;
var i__37890__auto___46732 = (0);
while(true){
if((i__37890__auto___46732 < len__37889__auto___46731)){
args__37896__auto__.push((arguments[i__37890__auto___46732]));

var G__46733 = (i__37890__auto___46732 + (1));
i__37890__auto___46732 = G__46733;
continue;
} else {
}
break;
}

var argseq__37897__auto__ = ((((0) < args__37896__auto__.length))?(new cljs.core.IndexedSeq(args__37896__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__37897__auto__);
});})(g__37996__auto___46730))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37996__auto___46730){
return (function (args){
return cljs.core.deref.call(null,g__37996__auto___46730);
});})(g__37996__auto___46730))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__37996__auto___46730){
return (function (seq46661){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46661));
});})(g__37996__auto___46730))
;


var g__37996__auto___46734 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__37996__auto___46734){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__37896__auto__ = [];
var len__37889__auto___46735 = arguments.length;
var i__37890__auto___46736 = (0);
while(true){
if((i__37890__auto___46736 < len__37889__auto___46735)){
args__37896__auto__.push((arguments[i__37890__auto___46736]));

var G__46737 = (i__37890__auto___46736 + (1));
i__37890__auto___46736 = G__46737;
continue;
} else {
}
break;
}

var argseq__37897__auto__ = ((((0) < args__37896__auto__.length))?(new cljs.core.IndexedSeq(args__37896__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__37897__auto__);
});})(g__37996__auto___46734))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37996__auto___46734){
return (function (args){
return cljs.core.deref.call(null,g__37996__auto___46734);
});})(g__37996__auto___46734))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__37996__auto___46734){
return (function (seq46662){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46662));
});})(g__37996__auto___46734))
;


var g__37996__auto___46738 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__37996__auto___46738){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__37896__auto__ = [];
var len__37889__auto___46739 = arguments.length;
var i__37890__auto___46740 = (0);
while(true){
if((i__37890__auto___46740 < len__37889__auto___46739)){
args__37896__auto__.push((arguments[i__37890__auto___46740]));

var G__46741 = (i__37890__auto___46740 + (1));
i__37890__auto___46740 = G__46741;
continue;
} else {
}
break;
}

var argseq__37897__auto__ = ((((0) < args__37896__auto__.length))?(new cljs.core.IndexedSeq(args__37896__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__37897__auto__);
});})(g__37996__auto___46738))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37996__auto___46738){
return (function (args){
return cljs.core.deref.call(null,g__37996__auto___46738);
});})(g__37996__auto___46738))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__37996__auto___46738){
return (function (seq46663){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46663));
});})(g__37996__auto___46738))
;


var g__37996__auto___46742 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__37996__auto___46742){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__37896__auto__ = [];
var len__37889__auto___46743 = arguments.length;
var i__37890__auto___46744 = (0);
while(true){
if((i__37890__auto___46744 < len__37889__auto___46743)){
args__37896__auto__.push((arguments[i__37890__auto___46744]));

var G__46745 = (i__37890__auto___46744 + (1));
i__37890__auto___46744 = G__46745;
continue;
} else {
}
break;
}

var argseq__37897__auto__ = ((((0) < args__37896__auto__.length))?(new cljs.core.IndexedSeq(args__37896__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__37897__auto__);
});})(g__37996__auto___46742))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37996__auto___46742){
return (function (args){
return cljs.core.deref.call(null,g__37996__auto___46742);
});})(g__37996__auto___46742))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__37996__auto___46742){
return (function (seq46664){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46664));
});})(g__37996__auto___46742))
;


var g__37996__auto___46746 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__37996__auto___46746){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__37896__auto__ = [];
var len__37889__auto___46747 = arguments.length;
var i__37890__auto___46748 = (0);
while(true){
if((i__37890__auto___46748 < len__37889__auto___46747)){
args__37896__auto__.push((arguments[i__37890__auto___46748]));

var G__46749 = (i__37890__auto___46748 + (1));
i__37890__auto___46748 = G__46749;
continue;
} else {
}
break;
}

var argseq__37897__auto__ = ((((0) < args__37896__auto__.length))?(new cljs.core.IndexedSeq(args__37896__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__37897__auto__);
});})(g__37996__auto___46746))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37996__auto___46746){
return (function (args){
return cljs.core.deref.call(null,g__37996__auto___46746);
});})(g__37996__auto___46746))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__37996__auto___46746){
return (function (seq46665){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46665));
});})(g__37996__auto___46746))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__37896__auto__ = [];
var len__37889__auto___46752 = arguments.length;
var i__37890__auto___46753 = (0);
while(true){
if((i__37890__auto___46753 < len__37889__auto___46752)){
args__37896__auto__.push((arguments[i__37890__auto___46753]));

var G__46754 = (i__37890__auto___46753 + (1));
i__37890__auto___46753 = G__46754;
continue;
} else {
}
break;
}

var argseq__37897__auto__ = ((((0) < args__37896__auto__.length))?(new cljs.core.IndexedSeq(args__37896__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__37897__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__46750_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__46750_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq46751){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46751));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__46755_SHARP_){
return (new Date(p1__46755_SHARP_));
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

//# sourceMappingURL=alpha.js.map?rel=1502260265095