// Compiled by ClojureScript 1.9.671 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__26956__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__26956__auto__){
return or__26956__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__26956__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, ["svgpan.SvgPan",null,"far.out",null,"cljs.nodejs",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__26956__auto__)){
return or__26956__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__33323_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__33323_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__33324 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__33325 = null;
var count__33326 = (0);
var i__33327 = (0);
while(true){
if((i__33327 < count__33326)){
var n = cljs.core._nth.call(null,chunk__33325,i__33327);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__33328 = seq__33324;
var G__33329 = chunk__33325;
var G__33330 = count__33326;
var G__33331 = (i__33327 + (1));
seq__33324 = G__33328;
chunk__33325 = G__33329;
count__33326 = G__33330;
i__33327 = G__33331;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33324);
if(temp__4657__auto__){
var seq__33324__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33324__$1)){
var c__27776__auto__ = cljs.core.chunk_first.call(null,seq__33324__$1);
var G__33332 = cljs.core.chunk_rest.call(null,seq__33324__$1);
var G__33333 = c__27776__auto__;
var G__33334 = cljs.core.count.call(null,c__27776__auto__);
var G__33335 = (0);
seq__33324 = G__33332;
chunk__33325 = G__33333;
count__33326 = G__33334;
i__33327 = G__33335;
continue;
} else {
var n = cljs.core.first.call(null,seq__33324__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__33336 = cljs.core.next.call(null,seq__33324__$1);
var G__33337 = null;
var G__33338 = (0);
var G__33339 = (0);
seq__33324 = G__33336;
chunk__33325 = G__33337;
count__33326 = G__33338;
i__33327 = G__33339;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__33349_33357 = cljs.core.seq.call(null,deps);
var chunk__33350_33358 = null;
var count__33351_33359 = (0);
var i__33352_33360 = (0);
while(true){
if((i__33352_33360 < count__33351_33359)){
var dep_33361 = cljs.core._nth.call(null,chunk__33350_33358,i__33352_33360);
topo_sort_helper_STAR_.call(null,dep_33361,(depth + (1)),state);

var G__33362 = seq__33349_33357;
var G__33363 = chunk__33350_33358;
var G__33364 = count__33351_33359;
var G__33365 = (i__33352_33360 + (1));
seq__33349_33357 = G__33362;
chunk__33350_33358 = G__33363;
count__33351_33359 = G__33364;
i__33352_33360 = G__33365;
continue;
} else {
var temp__4657__auto___33366 = cljs.core.seq.call(null,seq__33349_33357);
if(temp__4657__auto___33366){
var seq__33349_33367__$1 = temp__4657__auto___33366;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33349_33367__$1)){
var c__27776__auto___33368 = cljs.core.chunk_first.call(null,seq__33349_33367__$1);
var G__33369 = cljs.core.chunk_rest.call(null,seq__33349_33367__$1);
var G__33370 = c__27776__auto___33368;
var G__33371 = cljs.core.count.call(null,c__27776__auto___33368);
var G__33372 = (0);
seq__33349_33357 = G__33369;
chunk__33350_33358 = G__33370;
count__33351_33359 = G__33371;
i__33352_33360 = G__33372;
continue;
} else {
var dep_33373 = cljs.core.first.call(null,seq__33349_33367__$1);
topo_sort_helper_STAR_.call(null,dep_33373,(depth + (1)),state);

var G__33374 = cljs.core.next.call(null,seq__33349_33367__$1);
var G__33375 = null;
var G__33376 = (0);
var G__33377 = (0);
seq__33349_33357 = G__33374;
chunk__33350_33358 = G__33375;
count__33351_33359 = G__33376;
i__33352_33360 = G__33377;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__33353){
var vec__33354 = p__33353;
var seq__33355 = cljs.core.seq.call(null,vec__33354);
var first__33356 = cljs.core.first.call(null,seq__33355);
var seq__33355__$1 = cljs.core.next.call(null,seq__33355);
var x = first__33356;
var xs = seq__33355__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__33354,seq__33355,first__33356,seq__33355__$1,x,xs,get_deps__$1){
return (function (p1__33340_SHARP_){
return clojure.set.difference.call(null,p1__33340_SHARP_,x);
});})(vec__33354,seq__33355,first__33356,seq__33355__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__33378 = cljs.core.seq.call(null,provides);
var chunk__33379 = null;
var count__33380 = (0);
var i__33381 = (0);
while(true){
if((i__33381 < count__33380)){
var prov = cljs.core._nth.call(null,chunk__33379,i__33381);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__33382_33390 = cljs.core.seq.call(null,requires);
var chunk__33383_33391 = null;
var count__33384_33392 = (0);
var i__33385_33393 = (0);
while(true){
if((i__33385_33393 < count__33384_33392)){
var req_33394 = cljs.core._nth.call(null,chunk__33383_33391,i__33385_33393);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33394,prov);

var G__33395 = seq__33382_33390;
var G__33396 = chunk__33383_33391;
var G__33397 = count__33384_33392;
var G__33398 = (i__33385_33393 + (1));
seq__33382_33390 = G__33395;
chunk__33383_33391 = G__33396;
count__33384_33392 = G__33397;
i__33385_33393 = G__33398;
continue;
} else {
var temp__4657__auto___33399 = cljs.core.seq.call(null,seq__33382_33390);
if(temp__4657__auto___33399){
var seq__33382_33400__$1 = temp__4657__auto___33399;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33382_33400__$1)){
var c__27776__auto___33401 = cljs.core.chunk_first.call(null,seq__33382_33400__$1);
var G__33402 = cljs.core.chunk_rest.call(null,seq__33382_33400__$1);
var G__33403 = c__27776__auto___33401;
var G__33404 = cljs.core.count.call(null,c__27776__auto___33401);
var G__33405 = (0);
seq__33382_33390 = G__33402;
chunk__33383_33391 = G__33403;
count__33384_33392 = G__33404;
i__33385_33393 = G__33405;
continue;
} else {
var req_33406 = cljs.core.first.call(null,seq__33382_33400__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33406,prov);

var G__33407 = cljs.core.next.call(null,seq__33382_33400__$1);
var G__33408 = null;
var G__33409 = (0);
var G__33410 = (0);
seq__33382_33390 = G__33407;
chunk__33383_33391 = G__33408;
count__33384_33392 = G__33409;
i__33385_33393 = G__33410;
continue;
}
} else {
}
}
break;
}

var G__33411 = seq__33378;
var G__33412 = chunk__33379;
var G__33413 = count__33380;
var G__33414 = (i__33381 + (1));
seq__33378 = G__33411;
chunk__33379 = G__33412;
count__33380 = G__33413;
i__33381 = G__33414;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33378);
if(temp__4657__auto__){
var seq__33378__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33378__$1)){
var c__27776__auto__ = cljs.core.chunk_first.call(null,seq__33378__$1);
var G__33415 = cljs.core.chunk_rest.call(null,seq__33378__$1);
var G__33416 = c__27776__auto__;
var G__33417 = cljs.core.count.call(null,c__27776__auto__);
var G__33418 = (0);
seq__33378 = G__33415;
chunk__33379 = G__33416;
count__33380 = G__33417;
i__33381 = G__33418;
continue;
} else {
var prov = cljs.core.first.call(null,seq__33378__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__33386_33419 = cljs.core.seq.call(null,requires);
var chunk__33387_33420 = null;
var count__33388_33421 = (0);
var i__33389_33422 = (0);
while(true){
if((i__33389_33422 < count__33388_33421)){
var req_33423 = cljs.core._nth.call(null,chunk__33387_33420,i__33389_33422);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33423,prov);

var G__33424 = seq__33386_33419;
var G__33425 = chunk__33387_33420;
var G__33426 = count__33388_33421;
var G__33427 = (i__33389_33422 + (1));
seq__33386_33419 = G__33424;
chunk__33387_33420 = G__33425;
count__33388_33421 = G__33426;
i__33389_33422 = G__33427;
continue;
} else {
var temp__4657__auto___33428__$1 = cljs.core.seq.call(null,seq__33386_33419);
if(temp__4657__auto___33428__$1){
var seq__33386_33429__$1 = temp__4657__auto___33428__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33386_33429__$1)){
var c__27776__auto___33430 = cljs.core.chunk_first.call(null,seq__33386_33429__$1);
var G__33431 = cljs.core.chunk_rest.call(null,seq__33386_33429__$1);
var G__33432 = c__27776__auto___33430;
var G__33433 = cljs.core.count.call(null,c__27776__auto___33430);
var G__33434 = (0);
seq__33386_33419 = G__33431;
chunk__33387_33420 = G__33432;
count__33388_33421 = G__33433;
i__33389_33422 = G__33434;
continue;
} else {
var req_33435 = cljs.core.first.call(null,seq__33386_33429__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33435,prov);

var G__33436 = cljs.core.next.call(null,seq__33386_33429__$1);
var G__33437 = null;
var G__33438 = (0);
var G__33439 = (0);
seq__33386_33419 = G__33436;
chunk__33387_33420 = G__33437;
count__33388_33421 = G__33438;
i__33389_33422 = G__33439;
continue;
}
} else {
}
}
break;
}

var G__33440 = cljs.core.next.call(null,seq__33378__$1);
var G__33441 = null;
var G__33442 = (0);
var G__33443 = (0);
seq__33378 = G__33440;
chunk__33379 = G__33441;
count__33380 = G__33442;
i__33381 = G__33443;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__33444_33448 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__33445_33449 = null;
var count__33446_33450 = (0);
var i__33447_33451 = (0);
while(true){
if((i__33447_33451 < count__33446_33450)){
var ns_33452 = cljs.core._nth.call(null,chunk__33445_33449,i__33447_33451);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_33452);

var G__33453 = seq__33444_33448;
var G__33454 = chunk__33445_33449;
var G__33455 = count__33446_33450;
var G__33456 = (i__33447_33451 + (1));
seq__33444_33448 = G__33453;
chunk__33445_33449 = G__33454;
count__33446_33450 = G__33455;
i__33447_33451 = G__33456;
continue;
} else {
var temp__4657__auto___33457 = cljs.core.seq.call(null,seq__33444_33448);
if(temp__4657__auto___33457){
var seq__33444_33458__$1 = temp__4657__auto___33457;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33444_33458__$1)){
var c__27776__auto___33459 = cljs.core.chunk_first.call(null,seq__33444_33458__$1);
var G__33460 = cljs.core.chunk_rest.call(null,seq__33444_33458__$1);
var G__33461 = c__27776__auto___33459;
var G__33462 = cljs.core.count.call(null,c__27776__auto___33459);
var G__33463 = (0);
seq__33444_33448 = G__33460;
chunk__33445_33449 = G__33461;
count__33446_33450 = G__33462;
i__33447_33451 = G__33463;
continue;
} else {
var ns_33464 = cljs.core.first.call(null,seq__33444_33458__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_33464);

var G__33465 = cljs.core.next.call(null,seq__33444_33458__$1);
var G__33466 = null;
var G__33467 = (0);
var G__33468 = (0);
seq__33444_33448 = G__33465;
chunk__33445_33449 = G__33466;
count__33446_33450 = G__33467;
i__33447_33451 = G__33468;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__26956__auto__ = goog.require__;
if(cljs.core.truth_(or__26956__auto__)){
return or__26956__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__33469__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__33469 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33470__i = 0, G__33470__a = new Array(arguments.length -  0);
while (G__33470__i < G__33470__a.length) {G__33470__a[G__33470__i] = arguments[G__33470__i + 0]; ++G__33470__i;}
  args = new cljs.core.IndexedSeq(G__33470__a,0,null);
} 
return G__33469__delegate.call(this,args);};
G__33469.cljs$lang$maxFixedArity = 0;
G__33469.cljs$lang$applyTo = (function (arglist__33471){
var args = cljs.core.seq(arglist__33471);
return G__33469__delegate(args);
});
G__33469.cljs$core$IFn$_invoke$arity$variadic = G__33469__delegate;
return G__33469;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__33472 = cljs.core._EQ_;
var expr__33473 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__33472.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__33473))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__33472,expr__33473){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__33472,expr__33473))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__33472,expr__33473){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e33475){if((e33475 instanceof Error)){
var e = e33475;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e33475;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__33472,expr__33473))
} else {
if(cljs.core.truth_(pred__33472.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__33473))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__33472.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__33473))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__33472.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__33473))){
return ((function (pred__33472,expr__33473){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e33476){if((e33476 instanceof Error)){
var e = e33476;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e33476;

}
}})());
});
;})(pred__33472,expr__33473))
} else {
return ((function (pred__33472,expr__33473){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__33472,expr__33473))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__33477,callback){
var map__33478 = p__33477;
var map__33478__$1 = ((((!((map__33478 == null)))?((((map__33478.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33478.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33478):map__33478);
var file_msg = map__33478__$1;
var request_url = cljs.core.get.call(null,map__33478__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Attempting to load "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__33478,map__33478__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Successfully loaded "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__33478,map__33478__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__30037__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30037__auto__){
return (function (){
var f__30038__auto__ = (function (){var switch__29949__auto__ = ((function (c__30037__auto__){
return (function (state_33502){
var state_val_33503 = (state_33502[(1)]);
if((state_val_33503 === (7))){
var inst_33498 = (state_33502[(2)]);
var state_33502__$1 = state_33502;
var statearr_33504_33521 = state_33502__$1;
(statearr_33504_33521[(2)] = inst_33498);

(statearr_33504_33521[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33503 === (1))){
var state_33502__$1 = state_33502;
var statearr_33505_33522 = state_33502__$1;
(statearr_33505_33522[(2)] = null);

(statearr_33505_33522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33503 === (4))){
var inst_33482 = (state_33502[(7)]);
var inst_33482__$1 = (state_33502[(2)]);
var state_33502__$1 = (function (){var statearr_33506 = state_33502;
(statearr_33506[(7)] = inst_33482__$1);

return statearr_33506;
})();
if(cljs.core.truth_(inst_33482__$1)){
var statearr_33507_33523 = state_33502__$1;
(statearr_33507_33523[(1)] = (5));

} else {
var statearr_33508_33524 = state_33502__$1;
(statearr_33508_33524[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33503 === (6))){
var state_33502__$1 = state_33502;
var statearr_33509_33525 = state_33502__$1;
(statearr_33509_33525[(2)] = null);

(statearr_33509_33525[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33503 === (3))){
var inst_33500 = (state_33502[(2)]);
var state_33502__$1 = state_33502;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33502__$1,inst_33500);
} else {
if((state_val_33503 === (2))){
var state_33502__$1 = state_33502;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33502__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_33503 === (11))){
var inst_33494 = (state_33502[(2)]);
var state_33502__$1 = (function (){var statearr_33510 = state_33502;
(statearr_33510[(8)] = inst_33494);

return statearr_33510;
})();
var statearr_33511_33526 = state_33502__$1;
(statearr_33511_33526[(2)] = null);

(statearr_33511_33526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33503 === (9))){
var inst_33488 = (state_33502[(9)]);
var inst_33486 = (state_33502[(10)]);
var inst_33490 = inst_33488.call(null,inst_33486);
var state_33502__$1 = state_33502;
var statearr_33512_33527 = state_33502__$1;
(statearr_33512_33527[(2)] = inst_33490);

(statearr_33512_33527[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33503 === (5))){
var inst_33482 = (state_33502[(7)]);
var inst_33484 = figwheel.client.file_reloading.blocking_load.call(null,inst_33482);
var state_33502__$1 = state_33502;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33502__$1,(8),inst_33484);
} else {
if((state_val_33503 === (10))){
var inst_33486 = (state_33502[(10)]);
var inst_33492 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_33486);
var state_33502__$1 = state_33502;
var statearr_33513_33528 = state_33502__$1;
(statearr_33513_33528[(2)] = inst_33492);

(statearr_33513_33528[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33503 === (8))){
var inst_33488 = (state_33502[(9)]);
var inst_33482 = (state_33502[(7)]);
var inst_33486 = (state_33502[(2)]);
var inst_33487 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_33488__$1 = cljs.core.get.call(null,inst_33487,inst_33482);
var state_33502__$1 = (function (){var statearr_33514 = state_33502;
(statearr_33514[(9)] = inst_33488__$1);

(statearr_33514[(10)] = inst_33486);

return statearr_33514;
})();
if(cljs.core.truth_(inst_33488__$1)){
var statearr_33515_33529 = state_33502__$1;
(statearr_33515_33529[(1)] = (9));

} else {
var statearr_33516_33530 = state_33502__$1;
(statearr_33516_33530[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__30037__auto__))
;
return ((function (switch__29949__auto__,c__30037__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__29950__auto__ = null;
var figwheel$client$file_reloading$state_machine__29950__auto____0 = (function (){
var statearr_33517 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33517[(0)] = figwheel$client$file_reloading$state_machine__29950__auto__);

(statearr_33517[(1)] = (1));

return statearr_33517;
});
var figwheel$client$file_reloading$state_machine__29950__auto____1 = (function (state_33502){
while(true){
var ret_value__29951__auto__ = (function (){try{while(true){
var result__29952__auto__ = switch__29949__auto__.call(null,state_33502);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29952__auto__;
}
break;
}
}catch (e33518){if((e33518 instanceof Object)){
var ex__29953__auto__ = e33518;
var statearr_33519_33531 = state_33502;
(statearr_33519_33531[(5)] = ex__29953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33502);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33518;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33532 = state_33502;
state_33502 = G__33532;
continue;
} else {
return ret_value__29951__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__29950__auto__ = function(state_33502){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__29950__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__29950__auto____1.call(this,state_33502);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__29950__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__29950__auto____0;
figwheel$client$file_reloading$state_machine__29950__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__29950__auto____1;
return figwheel$client$file_reloading$state_machine__29950__auto__;
})()
;})(switch__29949__auto__,c__30037__auto__))
})();
var state__30039__auto__ = (function (){var statearr_33520 = f__30038__auto__.call(null);
(statearr_33520[(6)] = c__30037__auto__);

return statearr_33520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30039__auto__);
});})(c__30037__auto__))
);

return c__30037__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__33533,callback){
var map__33534 = p__33533;
var map__33534__$1 = ((((!((map__33534 == null)))?((((map__33534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33534.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33534):map__33534);
var file_msg = map__33534__$1;
var namespace = cljs.core.get.call(null,map__33534__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__33534,map__33534__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__33534,map__33534__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__33536){
var map__33537 = p__33536;
var map__33537__$1 = ((((!((map__33537 == null)))?((((map__33537.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33537.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33537):map__33537);
var file_msg = map__33537__$1;
var namespace = cljs.core.get.call(null,map__33537__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__33539){
var map__33540 = p__33539;
var map__33540__$1 = ((((!((map__33540 == null)))?((((map__33540.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33540.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33540):map__33540);
var file_msg = map__33540__$1;
var namespace = cljs.core.get.call(null,map__33540__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__26944__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__26944__auto__){
var or__26956__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__26956__auto__)){
return or__26956__auto__;
} else {
var or__26956__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__26956__auto____$1)){
return or__26956__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__26944__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__33542,callback){
var map__33543 = p__33542;
var map__33543__$1 = ((((!((map__33543 == null)))?((((map__33543.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33543.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33543):map__33543);
var file_msg = map__33543__$1;
var request_url = cljs.core.get.call(null,map__33543__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__33543__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not trying to load file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__30037__auto___33593 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30037__auto___33593,out){
return (function (){
var f__30038__auto__ = (function (){var switch__29949__auto__ = ((function (c__30037__auto___33593,out){
return (function (state_33578){
var state_val_33579 = (state_33578[(1)]);
if((state_val_33579 === (1))){
var inst_33552 = cljs.core.seq.call(null,files);
var inst_33553 = cljs.core.first.call(null,inst_33552);
var inst_33554 = cljs.core.next.call(null,inst_33552);
var inst_33555 = files;
var state_33578__$1 = (function (){var statearr_33580 = state_33578;
(statearr_33580[(7)] = inst_33554);

(statearr_33580[(8)] = inst_33553);

(statearr_33580[(9)] = inst_33555);

return statearr_33580;
})();
var statearr_33581_33594 = state_33578__$1;
(statearr_33581_33594[(2)] = null);

(statearr_33581_33594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33579 === (2))){
var inst_33561 = (state_33578[(10)]);
var inst_33555 = (state_33578[(9)]);
var inst_33560 = cljs.core.seq.call(null,inst_33555);
var inst_33561__$1 = cljs.core.first.call(null,inst_33560);
var inst_33562 = cljs.core.next.call(null,inst_33560);
var inst_33563 = (inst_33561__$1 == null);
var inst_33564 = cljs.core.not.call(null,inst_33563);
var state_33578__$1 = (function (){var statearr_33582 = state_33578;
(statearr_33582[(10)] = inst_33561__$1);

(statearr_33582[(11)] = inst_33562);

return statearr_33582;
})();
if(inst_33564){
var statearr_33583_33595 = state_33578__$1;
(statearr_33583_33595[(1)] = (4));

} else {
var statearr_33584_33596 = state_33578__$1;
(statearr_33584_33596[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33579 === (3))){
var inst_33576 = (state_33578[(2)]);
var state_33578__$1 = state_33578;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33578__$1,inst_33576);
} else {
if((state_val_33579 === (4))){
var inst_33561 = (state_33578[(10)]);
var inst_33566 = figwheel.client.file_reloading.reload_js_file.call(null,inst_33561);
var state_33578__$1 = state_33578;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33578__$1,(7),inst_33566);
} else {
if((state_val_33579 === (5))){
var inst_33572 = cljs.core.async.close_BANG_.call(null,out);
var state_33578__$1 = state_33578;
var statearr_33585_33597 = state_33578__$1;
(statearr_33585_33597[(2)] = inst_33572);

(statearr_33585_33597[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33579 === (6))){
var inst_33574 = (state_33578[(2)]);
var state_33578__$1 = state_33578;
var statearr_33586_33598 = state_33578__$1;
(statearr_33586_33598[(2)] = inst_33574);

(statearr_33586_33598[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33579 === (7))){
var inst_33562 = (state_33578[(11)]);
var inst_33568 = (state_33578[(2)]);
var inst_33569 = cljs.core.async.put_BANG_.call(null,out,inst_33568);
var inst_33555 = inst_33562;
var state_33578__$1 = (function (){var statearr_33587 = state_33578;
(statearr_33587[(12)] = inst_33569);

(statearr_33587[(9)] = inst_33555);

return statearr_33587;
})();
var statearr_33588_33599 = state_33578__$1;
(statearr_33588_33599[(2)] = null);

(statearr_33588_33599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__30037__auto___33593,out))
;
return ((function (switch__29949__auto__,c__30037__auto___33593,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29950__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29950__auto____0 = (function (){
var statearr_33589 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33589[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29950__auto__);

(statearr_33589[(1)] = (1));

return statearr_33589;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29950__auto____1 = (function (state_33578){
while(true){
var ret_value__29951__auto__ = (function (){try{while(true){
var result__29952__auto__ = switch__29949__auto__.call(null,state_33578);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29952__auto__;
}
break;
}
}catch (e33590){if((e33590 instanceof Object)){
var ex__29953__auto__ = e33590;
var statearr_33591_33600 = state_33578;
(statearr_33591_33600[(5)] = ex__29953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33578);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33590;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33601 = state_33578;
state_33578 = G__33601;
continue;
} else {
return ret_value__29951__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29950__auto__ = function(state_33578){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29950__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29950__auto____1.call(this,state_33578);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29950__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29950__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29950__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29950__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29950__auto__;
})()
;})(switch__29949__auto__,c__30037__auto___33593,out))
})();
var state__30039__auto__ = (function (){var statearr_33592 = f__30038__auto__.call(null);
(statearr_33592[(6)] = c__30037__auto___33593);

return statearr_33592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30039__auto__);
});})(c__30037__auto___33593,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__33602,opts){
var map__33603 = p__33602;
var map__33603__$1 = ((((!((map__33603 == null)))?((((map__33603.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33603.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33603):map__33603);
var eval_body = cljs.core.get.call(null,map__33603__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__33603__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__26944__auto__ = eval_body;
if(cljs.core.truth_(and__26944__auto__)){
return typeof eval_body === 'string';
} else {
return and__26944__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Evaling file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e33605){var e = e33605;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unable to evaluate "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__33606_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__33606_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__33607){
var vec__33608 = p__33607;
var k = cljs.core.nth.call(null,vec__33608,(0),null);
var v = cljs.core.nth.call(null,vec__33608,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__33611){
var vec__33612 = p__33611;
var k = cljs.core.nth.call(null,vec__33612,(0),null);
var v = cljs.core.nth.call(null,vec__33612,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__33618,p__33619){
var map__33620 = p__33618;
var map__33620__$1 = ((((!((map__33620 == null)))?((((map__33620.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33620.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33620):map__33620);
var opts = map__33620__$1;
var before_jsload = cljs.core.get.call(null,map__33620__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__33620__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__33620__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__33621 = p__33619;
var map__33621__$1 = ((((!((map__33621 == null)))?((((map__33621.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33621.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33621):map__33621);
var msg = map__33621__$1;
var files = cljs.core.get.call(null,map__33621__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__33621__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__33621__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__30037__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30037__auto__,map__33620,map__33620__$1,opts,before_jsload,on_jsload,reload_dependents,map__33621,map__33621__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__30038__auto__ = (function (){var switch__29949__auto__ = ((function (c__30037__auto__,map__33620,map__33620__$1,opts,before_jsload,on_jsload,reload_dependents,map__33621,map__33621__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_33775){
var state_val_33776 = (state_33775[(1)]);
if((state_val_33776 === (7))){
var inst_33635 = (state_33775[(7)]);
var inst_33636 = (state_33775[(8)]);
var inst_33638 = (state_33775[(9)]);
var inst_33637 = (state_33775[(10)]);
var inst_33643 = cljs.core._nth.call(null,inst_33636,inst_33638);
var inst_33644 = figwheel.client.file_reloading.eval_body.call(null,inst_33643,opts);
var inst_33645 = (inst_33638 + (1));
var tmp33777 = inst_33635;
var tmp33778 = inst_33636;
var tmp33779 = inst_33637;
var inst_33635__$1 = tmp33777;
var inst_33636__$1 = tmp33778;
var inst_33637__$1 = tmp33779;
var inst_33638__$1 = inst_33645;
var state_33775__$1 = (function (){var statearr_33780 = state_33775;
(statearr_33780[(7)] = inst_33635__$1);

(statearr_33780[(8)] = inst_33636__$1);

(statearr_33780[(9)] = inst_33638__$1);

(statearr_33780[(11)] = inst_33644);

(statearr_33780[(10)] = inst_33637__$1);

return statearr_33780;
})();
var statearr_33781_33864 = state_33775__$1;
(statearr_33781_33864[(2)] = null);

(statearr_33781_33864[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33776 === (20))){
var inst_33678 = (state_33775[(12)]);
var inst_33686 = figwheel.client.file_reloading.sort_files.call(null,inst_33678);
var state_33775__$1 = state_33775;
var statearr_33782_33865 = state_33775__$1;
(statearr_33782_33865[(2)] = inst_33686);

(statearr_33782_33865[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33776 === (27))){
var state_33775__$1 = state_33775;
var statearr_33783_33866 = state_33775__$1;
(statearr_33783_33866[(2)] = null);

(statearr_33783_33866[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33776 === (1))){
var inst_33627 = (state_33775[(13)]);
var inst_33624 = before_jsload.call(null,files);
var inst_33625 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_33626 = (function (){return ((function (inst_33627,inst_33624,inst_33625,state_val_33776,c__30037__auto__,map__33620,map__33620__$1,opts,before_jsload,on_jsload,reload_dependents,map__33621,map__33621__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__33615_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__33615_SHARP_);
});
;})(inst_33627,inst_33624,inst_33625,state_val_33776,c__30037__auto__,map__33620,map__33620__$1,opts,before_jsload,on_jsload,reload_dependents,map__33621,map__33621__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33627__$1 = cljs.core.filter.call(null,inst_33626,files);
var inst_33628 = cljs.core.not_empty.call(null,inst_33627__$1);
var state_33775__$1 = (function (){var statearr_33784 = state_33775;
(statearr_33784[(13)] = inst_33627__$1);

(statearr_33784[(14)] = inst_33624);

(statearr_33784[(15)] = inst_33625);

return statearr_33784;
})();
if(cljs.core.truth_(inst_33628)){
var statearr_33785_33867 = state_33775__$1;
(statearr_33785_33867[(1)] = (2));

} else {
var statearr_33786_33868 = state_33775__$1;
(statearr_33786_33868[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33776 === (24))){
var state_33775__$1 = state_33775;
var statearr_33787_33869 = state_33775__$1;
(statearr_33787_33869[(2)] = null);

(statearr_33787_33869[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33776 === (39))){
var inst_33728 = (state_33775[(16)]);
var state_33775__$1 = state_33775;
var statearr_33788_33870 = state_33775__$1;
(statearr_33788_33870[(2)] = inst_33728);

(statearr_33788_33870[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33776 === (46))){
var inst_33770 = (state_33775[(2)]);
var state_33775__$1 = state_33775;
var statearr_33789_33871 = state_33775__$1;
(statearr_33789_33871[(2)] = inst_33770);

(statearr_33789_33871[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33776 === (4))){
var inst_33672 = (state_33775[(2)]);
var inst_33673 = cljs.core.List.EMPTY;
var inst_33674 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_33673);
var inst_33675 = (function (){return ((function (inst_33672,inst_33673,inst_33674,state_val_33776,c__30037__auto__,map__33620,map__33620__$1,opts,before_jsload,on_jsload,reload_dependents,map__33621,map__33621__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__33616_SHARP_){
var and__26944__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__33616_SHARP_);
if(cljs.core.truth_(and__26944__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__33616_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__33616_SHARP_)));
} else {
return and__26944__auto__;
}
});
;})(inst_33672,inst_33673,inst_33674,state_val_33776,c__30037__auto__,map__33620,map__33620__$1,opts,before_jsload,on_jsload,reload_dependents,map__33621,map__33621__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33676 = cljs.core.filter.call(null,inst_33675,files);
var inst_33677 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_33678 = cljs.core.concat.call(null,inst_33676,inst_33677);
var state_33775__$1 = (function (){var statearr_33790 = state_33775;
(statearr_33790[(17)] = inst_33674);

(statearr_33790[(18)] = inst_33672);

(statearr_33790[(12)] = inst_33678);

return statearr_33790;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_33791_33872 = state_33775__$1;
(statearr_33791_33872[(1)] = (16));

} else {
var statearr_33792_33873 = state_33775__$1;
(statearr_33792_33873[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33776 === (15))){
var inst_33662 = (state_33775[(2)]);
var state_33775__$1 = state_33775;
var statearr_33793_33874 = state_33775__$1;
(statearr_33793_33874[(2)] = inst_33662);

(statearr_33793_33874[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33776 === (21))){
var inst_33688 = (state_33775[(19)]);
var inst_33688__$1 = (state_33775[(2)]);
var inst_33689 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_33688__$1);
var state_33775__$1 = (function (){var statearr_33794 = state_33775;
(statearr_33794[(19)] = inst_33688__$1);

return statearr_33794;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33775__$1,(22),inst_33689);
} else {
if((state_val_33776 === (31))){
var inst_33773 = (state_33775[(2)]);
var state_33775__$1 = state_33775;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33775__$1,inst_33773);
} else {
if((state_val_33776 === (32))){
var inst_33728 = (state_33775[(16)]);
var inst_33733 = inst_33728.cljs$lang$protocol_mask$partition0$;
var inst_33734 = (inst_33733 & (64));
var inst_33735 = inst_33728.cljs$core$ISeq$;
var inst_33736 = (cljs.core.PROTOCOL_SENTINEL === inst_33735);
var inst_33737 = (inst_33734) || (inst_33736);
var state_33775__$1 = state_33775;
if(cljs.core.truth_(inst_33737)){
var statearr_33795_33875 = state_33775__$1;
(statearr_33795_33875[(1)] = (35));

} else {
var statearr_33796_33876 = state_33775__$1;
(statearr_33796_33876[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33776 === (40))){
var inst_33750 = (state_33775[(20)]);
var inst_33749 = (state_33775[(2)]);
var inst_33750__$1 = cljs.core.get.call(null,inst_33749,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_33751 = cljs.core.get.call(null,inst_33749,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_33752 = cljs.core.not_empty.call(null,inst_33750__$1);
var state_33775__$1 = (function (){var statearr_33797 = state_33775;
(statearr_33797[(21)] = inst_33751);

(statearr_33797[(20)] = inst_33750__$1);

return statearr_33797;
})();
if(cljs.core.truth_(inst_33752)){
var statearr_33798_33877 = state_33775__$1;
(statearr_33798_33877[(1)] = (41));

} else {
var statearr_33799_33878 = state_33775__$1;
(statearr_33799_33878[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33776 === (33))){
var state_33775__$1 = state_33775;
var statearr_33800_33879 = state_33775__$1;
(statearr_33800_33879[(2)] = false);

(statearr_33800_33879[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33776 === (13))){
var inst_33648 = (state_33775[(22)]);
var inst_33652 = cljs.core.chunk_first.call(null,inst_33648);
var inst_33653 = cljs.core.chunk_rest.call(null,inst_33648);
var inst_33654 = cljs.core.count.call(null,inst_33652);
var inst_33635 = inst_33653;
var inst_33636 = inst_33652;
var inst_33637 = inst_33654;
var inst_33638 = (0);
var state_33775__$1 = (function (){var statearr_33801 = state_33775;
(statearr_33801[(7)] = inst_33635);

(statearr_33801[(8)] = inst_33636);

(statearr_33801[(9)] = inst_33638);

(statearr_33801[(10)] = inst_33637);

return statearr_33801;
})();
var statearr_33802_33880 = state_33775__$1;
(statearr_33802_33880[(2)] = null);

(statearr_33802_33880[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33776 === (22))){
var inst_33688 = (state_33775[(19)]);
var inst_33691 = (state_33775[(23)]);
var inst_33696 = (state_33775[(24)]);
var inst_33692 = (state_33775[(25)]);
var inst_33691__$1 = (state_33775[(2)]);
var inst_33692__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_33691__$1);
var inst_33693 = (function (){var all_files = inst_33688;
var res_SINGLEQUOTE_ = inst_33691__$1;
var res = inst_33692__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_33688,inst_33691,inst_33696,inst_33692,inst_33691__$1,inst_33692__$1,state_val_33776,c__30037__auto__,map__33620,map__33620__$1,opts,before_jsload,on_jsload,reload_dependents,map__33621,map__33621__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__33617_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__33617_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_33688,inst_33691,inst_33696,inst_33692,inst_33691__$1,inst_33692__$1,state_val_33776,c__30037__auto__,map__33620,map__33620__$1,opts,before_jsload,on_jsload,reload_dependents,map__33621,map__33621__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33694 = cljs.core.filter.call(null,inst_33693,inst_33691__$1);
var inst_33695 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_33696__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_33695);
var inst_33697 = cljs.core.not_empty.call(null,inst_33696__$1);
var state_33775__$1 = (function (){var statearr_33803 = state_33775;
(statearr_33803[(23)] = inst_33691__$1);

(statearr_33803[(24)] = inst_33696__$1);

(statearr_33803[(25)] = inst_33692__$1);

(statearr_33803[(26)] = inst_33694);

return statearr_33803;
})();
if(cljs.core.truth_(inst_33697)){
var statearr_33804_33881 = state_33775__$1;
(statearr_33804_33881[(1)] = (23));

} else {
var statearr_33805_33882 = state_33775__$1;
(statearr_33805_33882[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33776 === (36))){
var state_33775__$1 = state_33775;
var statearr_33806_33883 = state_33775__$1;
(statearr_33806_33883[(2)] = false);

(statearr_33806_33883[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33776 === (41))){
var inst_33750 = (state_33775[(20)]);
var inst_33754 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_33755 = cljs.core.map.call(null,inst_33754,inst_33750);
var inst_33756 = cljs.core.pr_str.call(null,inst_33755);
var inst_33757 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("figwheel-no-load meta-data: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_33756)].join('');
var inst_33758 = figwheel.client.utils.log.call(null,inst_33757);
var state_33775__$1 = state_33775;
var statearr_33807_33884 = state_33775__$1;
(statearr_33807_33884[(2)] = inst_33758);

(statearr_33807_33884[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33776 === (43))){
var inst_33751 = (state_33775[(21)]);
var inst_33761 = (state_33775[(2)]);
var inst_33762 = cljs.core.not_empty.call(null,inst_33751);
var state_33775__$1 = (function (){var statearr_33808 = state_33775;
(statearr_33808[(27)] = inst_33761);

return statearr_33808;
})();
if(cljs.core.truth_(inst_33762)){
var statearr_33809_33885 = state_33775__$1;
(statearr_33809_33885[(1)] = (44));

} else {
var statearr_33810_33886 = state_33775__$1;
(statearr_33810_33886[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33776 === (29))){
var inst_33688 = (state_33775[(19)]);
var inst_33691 = (state_33775[(23)]);
var inst_33696 = (state_33775[(24)]);
var inst_33728 = (state_33775[(16)]);
var inst_33692 = (state_33775[(25)]);
var inst_33694 = (state_33775[(26)]);
var inst_33724 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_33727 = (function (){var all_files = inst_33688;
var res_SINGLEQUOTE_ = inst_33691;
var res = inst_33692;
var files_not_loaded = inst_33694;
var dependencies_that_loaded = inst_33696;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33688,inst_33691,inst_33696,inst_33728,inst_33692,inst_33694,inst_33724,state_val_33776,c__30037__auto__,map__33620,map__33620__$1,opts,before_jsload,on_jsload,reload_dependents,map__33621,map__33621__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__33726){
var map__33811 = p__33726;
var map__33811__$1 = ((((!((map__33811 == null)))?((((map__33811.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33811.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33811):map__33811);
var namespace = cljs.core.get.call(null,map__33811__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33688,inst_33691,inst_33696,inst_33728,inst_33692,inst_33694,inst_33724,state_val_33776,c__30037__auto__,map__33620,map__33620__$1,opts,before_jsload,on_jsload,reload_dependents,map__33621,map__33621__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33728__$1 = cljs.core.group_by.call(null,inst_33727,inst_33694);
var inst_33730 = (inst_33728__$1 == null);
var inst_33731 = cljs.core.not.call(null,inst_33730);
var state_33775__$1 = (function (){var statearr_33813 = state_33775;
(statearr_33813[(28)] = inst_33724);

(statearr_33813[(16)] = inst_33728__$1);

return statearr_33813;
})();
if(inst_33731){
var statearr_33814_33887 = state_33775__$1;
(statearr_33814_33887[(1)] = (32));

} else {
var statearr_33815_33888 = state_33775__$1;
(statearr_33815_33888[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33776 === (44))){
var inst_33751 = (state_33775[(21)]);
var inst_33764 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_33751);
var inst_33765 = cljs.core.pr_str.call(null,inst_33764);
var inst_33766 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("not required: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_33765)].join('');
var inst_33767 = figwheel.client.utils.log.call(null,inst_33766);
var state_33775__$1 = state_33775;
var statearr_33816_33889 = state_33775__$1;
(statearr_33816_33889[(2)] = inst_33767);

(statearr_33816_33889[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33776 === (6))){
var inst_33669 = (state_33775[(2)]);
var state_33775__$1 = state_33775;
var statearr_33817_33890 = state_33775__$1;
(statearr_33817_33890[(2)] = inst_33669);

(statearr_33817_33890[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33776 === (28))){
var inst_33694 = (state_33775[(26)]);
var inst_33721 = (state_33775[(2)]);
var inst_33722 = cljs.core.not_empty.call(null,inst_33694);
var state_33775__$1 = (function (){var statearr_33818 = state_33775;
(statearr_33818[(29)] = inst_33721);

return statearr_33818;
})();
if(cljs.core.truth_(inst_33722)){
var statearr_33819_33891 = state_33775__$1;
(statearr_33819_33891[(1)] = (29));

} else {
var statearr_33820_33892 = state_33775__$1;
(statearr_33820_33892[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33776 === (25))){
var inst_33692 = (state_33775[(25)]);
var inst_33708 = (state_33775[(2)]);
var inst_33709 = cljs.core.not_empty.call(null,inst_33692);
var state_33775__$1 = (function (){var statearr_33821 = state_33775;
(statearr_33821[(30)] = inst_33708);

return statearr_33821;
})();
if(cljs.core.truth_(inst_33709)){
var statearr_33822_33893 = state_33775__$1;
(statearr_33822_33893[(1)] = (26));

} else {
var statearr_33823_33894 = state_33775__$1;
(statearr_33823_33894[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33776 === (34))){
var inst_33744 = (state_33775[(2)]);
var state_33775__$1 = state_33775;
if(cljs.core.truth_(inst_33744)){
var statearr_33824_33895 = state_33775__$1;
(statearr_33824_33895[(1)] = (38));

} else {
var statearr_33825_33896 = state_33775__$1;
(statearr_33825_33896[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33776 === (17))){
var state_33775__$1 = state_33775;
var statearr_33826_33897 = state_33775__$1;
(statearr_33826_33897[(2)] = recompile_dependents);

(statearr_33826_33897[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33776 === (3))){
var state_33775__$1 = state_33775;
var statearr_33827_33898 = state_33775__$1;
(statearr_33827_33898[(2)] = null);

(statearr_33827_33898[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33776 === (12))){
var inst_33665 = (state_33775[(2)]);
var state_33775__$1 = state_33775;
var statearr_33828_33899 = state_33775__$1;
(statearr_33828_33899[(2)] = inst_33665);

(statearr_33828_33899[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33776 === (2))){
var inst_33627 = (state_33775[(13)]);
var inst_33634 = cljs.core.seq.call(null,inst_33627);
var inst_33635 = inst_33634;
var inst_33636 = null;
var inst_33637 = (0);
var inst_33638 = (0);
var state_33775__$1 = (function (){var statearr_33829 = state_33775;
(statearr_33829[(7)] = inst_33635);

(statearr_33829[(8)] = inst_33636);

(statearr_33829[(9)] = inst_33638);

(statearr_33829[(10)] = inst_33637);

return statearr_33829;
})();
var statearr_33830_33900 = state_33775__$1;
(statearr_33830_33900[(2)] = null);

(statearr_33830_33900[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33776 === (23))){
var inst_33688 = (state_33775[(19)]);
var inst_33691 = (state_33775[(23)]);
var inst_33696 = (state_33775[(24)]);
var inst_33692 = (state_33775[(25)]);
var inst_33694 = (state_33775[(26)]);
var inst_33699 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_33701 = (function (){var all_files = inst_33688;
var res_SINGLEQUOTE_ = inst_33691;
var res = inst_33692;
var files_not_loaded = inst_33694;
var dependencies_that_loaded = inst_33696;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33688,inst_33691,inst_33696,inst_33692,inst_33694,inst_33699,state_val_33776,c__30037__auto__,map__33620,map__33620__$1,opts,before_jsload,on_jsload,reload_dependents,map__33621,map__33621__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__33700){
var map__33831 = p__33700;
var map__33831__$1 = ((((!((map__33831 == null)))?((((map__33831.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33831.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33831):map__33831);
var request_url = cljs.core.get.call(null,map__33831__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33688,inst_33691,inst_33696,inst_33692,inst_33694,inst_33699,state_val_33776,c__30037__auto__,map__33620,map__33620__$1,opts,before_jsload,on_jsload,reload_dependents,map__33621,map__33621__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33702 = cljs.core.reverse.call(null,inst_33696);
var inst_33703 = cljs.core.map.call(null,inst_33701,inst_33702);
var inst_33704 = cljs.core.pr_str.call(null,inst_33703);
var inst_33705 = figwheel.client.utils.log.call(null,inst_33704);
var state_33775__$1 = (function (){var statearr_33833 = state_33775;
(statearr_33833[(31)] = inst_33699);

return statearr_33833;
})();
var statearr_33834_33901 = state_33775__$1;
(statearr_33834_33901[(2)] = inst_33705);

(statearr_33834_33901[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33776 === (35))){
var state_33775__$1 = state_33775;
var statearr_33835_33902 = state_33775__$1;
(statearr_33835_33902[(2)] = true);

(statearr_33835_33902[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33776 === (19))){
var inst_33678 = (state_33775[(12)]);
var inst_33684 = figwheel.client.file_reloading.expand_files.call(null,inst_33678);
var state_33775__$1 = state_33775;
var statearr_33836_33903 = state_33775__$1;
(statearr_33836_33903[(2)] = inst_33684);

(statearr_33836_33903[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33776 === (11))){
var state_33775__$1 = state_33775;
var statearr_33837_33904 = state_33775__$1;
(statearr_33837_33904[(2)] = null);

(statearr_33837_33904[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33776 === (9))){
var inst_33667 = (state_33775[(2)]);
var state_33775__$1 = state_33775;
var statearr_33838_33905 = state_33775__$1;
(statearr_33838_33905[(2)] = inst_33667);

(statearr_33838_33905[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33776 === (5))){
var inst_33638 = (state_33775[(9)]);
var inst_33637 = (state_33775[(10)]);
var inst_33640 = (inst_33638 < inst_33637);
var inst_33641 = inst_33640;
var state_33775__$1 = state_33775;
if(cljs.core.truth_(inst_33641)){
var statearr_33839_33906 = state_33775__$1;
(statearr_33839_33906[(1)] = (7));

} else {
var statearr_33840_33907 = state_33775__$1;
(statearr_33840_33907[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33776 === (14))){
var inst_33648 = (state_33775[(22)]);
var inst_33657 = cljs.core.first.call(null,inst_33648);
var inst_33658 = figwheel.client.file_reloading.eval_body.call(null,inst_33657,opts);
var inst_33659 = cljs.core.next.call(null,inst_33648);
var inst_33635 = inst_33659;
var inst_33636 = null;
var inst_33637 = (0);
var inst_33638 = (0);
var state_33775__$1 = (function (){var statearr_33841 = state_33775;
(statearr_33841[(7)] = inst_33635);

(statearr_33841[(32)] = inst_33658);

(statearr_33841[(8)] = inst_33636);

(statearr_33841[(9)] = inst_33638);

(statearr_33841[(10)] = inst_33637);

return statearr_33841;
})();
var statearr_33842_33908 = state_33775__$1;
(statearr_33842_33908[(2)] = null);

(statearr_33842_33908[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33776 === (45))){
var state_33775__$1 = state_33775;
var statearr_33843_33909 = state_33775__$1;
(statearr_33843_33909[(2)] = null);

(statearr_33843_33909[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33776 === (26))){
var inst_33688 = (state_33775[(19)]);
var inst_33691 = (state_33775[(23)]);
var inst_33696 = (state_33775[(24)]);
var inst_33692 = (state_33775[(25)]);
var inst_33694 = (state_33775[(26)]);
var inst_33711 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_33713 = (function (){var all_files = inst_33688;
var res_SINGLEQUOTE_ = inst_33691;
var res = inst_33692;
var files_not_loaded = inst_33694;
var dependencies_that_loaded = inst_33696;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33688,inst_33691,inst_33696,inst_33692,inst_33694,inst_33711,state_val_33776,c__30037__auto__,map__33620,map__33620__$1,opts,before_jsload,on_jsload,reload_dependents,map__33621,map__33621__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__33712){
var map__33844 = p__33712;
var map__33844__$1 = ((((!((map__33844 == null)))?((((map__33844.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33844.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33844):map__33844);
var namespace = cljs.core.get.call(null,map__33844__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__33844__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33688,inst_33691,inst_33696,inst_33692,inst_33694,inst_33711,state_val_33776,c__30037__auto__,map__33620,map__33620__$1,opts,before_jsload,on_jsload,reload_dependents,map__33621,map__33621__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33714 = cljs.core.map.call(null,inst_33713,inst_33692);
var inst_33715 = cljs.core.pr_str.call(null,inst_33714);
var inst_33716 = figwheel.client.utils.log.call(null,inst_33715);
var inst_33717 = (function (){var all_files = inst_33688;
var res_SINGLEQUOTE_ = inst_33691;
var res = inst_33692;
var files_not_loaded = inst_33694;
var dependencies_that_loaded = inst_33696;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33688,inst_33691,inst_33696,inst_33692,inst_33694,inst_33711,inst_33713,inst_33714,inst_33715,inst_33716,state_val_33776,c__30037__auto__,map__33620,map__33620__$1,opts,before_jsload,on_jsload,reload_dependents,map__33621,map__33621__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33688,inst_33691,inst_33696,inst_33692,inst_33694,inst_33711,inst_33713,inst_33714,inst_33715,inst_33716,state_val_33776,c__30037__auto__,map__33620,map__33620__$1,opts,before_jsload,on_jsload,reload_dependents,map__33621,map__33621__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33718 = setTimeout(inst_33717,(10));
var state_33775__$1 = (function (){var statearr_33846 = state_33775;
(statearr_33846[(33)] = inst_33716);

(statearr_33846[(34)] = inst_33711);

return statearr_33846;
})();
var statearr_33847_33910 = state_33775__$1;
(statearr_33847_33910[(2)] = inst_33718);

(statearr_33847_33910[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33776 === (16))){
var state_33775__$1 = state_33775;
var statearr_33848_33911 = state_33775__$1;
(statearr_33848_33911[(2)] = reload_dependents);

(statearr_33848_33911[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33776 === (38))){
var inst_33728 = (state_33775[(16)]);
var inst_33746 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33728);
var state_33775__$1 = state_33775;
var statearr_33849_33912 = state_33775__$1;
(statearr_33849_33912[(2)] = inst_33746);

(statearr_33849_33912[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33776 === (30))){
var state_33775__$1 = state_33775;
var statearr_33850_33913 = state_33775__$1;
(statearr_33850_33913[(2)] = null);

(statearr_33850_33913[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33776 === (10))){
var inst_33648 = (state_33775[(22)]);
var inst_33650 = cljs.core.chunked_seq_QMARK_.call(null,inst_33648);
var state_33775__$1 = state_33775;
if(inst_33650){
var statearr_33851_33914 = state_33775__$1;
(statearr_33851_33914[(1)] = (13));

} else {
var statearr_33852_33915 = state_33775__$1;
(statearr_33852_33915[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33776 === (18))){
var inst_33682 = (state_33775[(2)]);
var state_33775__$1 = state_33775;
if(cljs.core.truth_(inst_33682)){
var statearr_33853_33916 = state_33775__$1;
(statearr_33853_33916[(1)] = (19));

} else {
var statearr_33854_33917 = state_33775__$1;
(statearr_33854_33917[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33776 === (42))){
var state_33775__$1 = state_33775;
var statearr_33855_33918 = state_33775__$1;
(statearr_33855_33918[(2)] = null);

(statearr_33855_33918[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33776 === (37))){
var inst_33741 = (state_33775[(2)]);
var state_33775__$1 = state_33775;
var statearr_33856_33919 = state_33775__$1;
(statearr_33856_33919[(2)] = inst_33741);

(statearr_33856_33919[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33776 === (8))){
var inst_33635 = (state_33775[(7)]);
var inst_33648 = (state_33775[(22)]);
var inst_33648__$1 = cljs.core.seq.call(null,inst_33635);
var state_33775__$1 = (function (){var statearr_33857 = state_33775;
(statearr_33857[(22)] = inst_33648__$1);

return statearr_33857;
})();
if(inst_33648__$1){
var statearr_33858_33920 = state_33775__$1;
(statearr_33858_33920[(1)] = (10));

} else {
var statearr_33859_33921 = state_33775__$1;
(statearr_33859_33921[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30037__auto__,map__33620,map__33620__$1,opts,before_jsload,on_jsload,reload_dependents,map__33621,map__33621__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__29949__auto__,c__30037__auto__,map__33620,map__33620__$1,opts,before_jsload,on_jsload,reload_dependents,map__33621,map__33621__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29950__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29950__auto____0 = (function (){
var statearr_33860 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33860[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__29950__auto__);

(statearr_33860[(1)] = (1));

return statearr_33860;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29950__auto____1 = (function (state_33775){
while(true){
var ret_value__29951__auto__ = (function (){try{while(true){
var result__29952__auto__ = switch__29949__auto__.call(null,state_33775);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29952__auto__;
}
break;
}
}catch (e33861){if((e33861 instanceof Object)){
var ex__29953__auto__ = e33861;
var statearr_33862_33922 = state_33775;
(statearr_33862_33922[(5)] = ex__29953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33775);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33861;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33923 = state_33775;
state_33775 = G__33923;
continue;
} else {
return ret_value__29951__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__29950__auto__ = function(state_33775){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29950__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29950__auto____1.call(this,state_33775);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__29950__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29950__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__29950__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29950__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29950__auto__;
})()
;})(switch__29949__auto__,c__30037__auto__,map__33620,map__33620__$1,opts,before_jsload,on_jsload,reload_dependents,map__33621,map__33621__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__30039__auto__ = (function (){var statearr_33863 = f__30038__auto__.call(null);
(statearr_33863[(6)] = c__30037__auto__);

return statearr_33863;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30039__auto__);
});})(c__30037__auto__,map__33620,map__33620__$1,opts,before_jsload,on_jsload,reload_dependents,map__33621,map__33621__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__30037__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),cljs.core.str.cljs$core$IFn$_invoke$arity$1("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__33926,link){
var map__33927 = p__33926;
var map__33927__$1 = ((((!((map__33927 == null)))?((((map__33927.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33927.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33927):map__33927);
var file = cljs.core.get.call(null,map__33927__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__33927,map__33927__$1,file){
return (function (p1__33924_SHARP_,p2__33925_SHARP_){
if(cljs.core._EQ_.call(null,p1__33924_SHARP_,p2__33925_SHARP_)){
return p1__33924_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__33927,map__33927__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__33930){
var map__33931 = p__33930;
var map__33931__$1 = ((((!((map__33931 == null)))?((((map__33931.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33931.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33931):map__33931);
var match_length = cljs.core.get.call(null,map__33931__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__33931__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__33929_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__33929_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__33933_SHARP_,p2__33934_SHARP_){
return cljs.core.assoc.call(null,p1__33933_SHARP_,cljs.core.get.call(null,p2__33934_SHARP_,key),p2__33934_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_33935 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_33935);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_33935);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__33936,p__33937){
var map__33938 = p__33936;
var map__33938__$1 = ((((!((map__33938 == null)))?((((map__33938.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33938.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33938):map__33938);
var on_cssload = cljs.core.get.call(null,map__33938__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__33939 = p__33937;
var map__33939__$1 = ((((!((map__33939 == null)))?((((map__33939.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33939.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33939):map__33939);
var files_msg = map__33939__$1;
var files = cljs.core.get.call(null,map__33939__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1500852798622