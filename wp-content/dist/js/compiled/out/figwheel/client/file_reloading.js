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
var or__36769__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__36769__auto__){
return or__36769__auto__;
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
var or__36769__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__36769__auto__)){
return or__36769__auto__;
} else {
var or__36769__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__36769__auto____$1)){
return or__36769__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__46384_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__46384_SHARP_));
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
var seq__46385 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__46386 = null;
var count__46387 = (0);
var i__46388 = (0);
while(true){
if((i__46388 < count__46387)){
var n = cljs.core._nth.call(null,chunk__46386,i__46388);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__46389 = seq__46385;
var G__46390 = chunk__46386;
var G__46391 = count__46387;
var G__46392 = (i__46388 + (1));
seq__46385 = G__46389;
chunk__46386 = G__46390;
count__46387 = G__46391;
i__46388 = G__46392;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__46385);
if(temp__4657__auto__){
var seq__46385__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46385__$1)){
var c__37589__auto__ = cljs.core.chunk_first.call(null,seq__46385__$1);
var G__46393 = cljs.core.chunk_rest.call(null,seq__46385__$1);
var G__46394 = c__37589__auto__;
var G__46395 = cljs.core.count.call(null,c__37589__auto__);
var G__46396 = (0);
seq__46385 = G__46393;
chunk__46386 = G__46394;
count__46387 = G__46395;
i__46388 = G__46396;
continue;
} else {
var n = cljs.core.first.call(null,seq__46385__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__46397 = cljs.core.next.call(null,seq__46385__$1);
var G__46398 = null;
var G__46399 = (0);
var G__46400 = (0);
seq__46385 = G__46397;
chunk__46386 = G__46398;
count__46387 = G__46399;
i__46388 = G__46400;
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

var seq__46410_46418 = cljs.core.seq.call(null,deps);
var chunk__46411_46419 = null;
var count__46412_46420 = (0);
var i__46413_46421 = (0);
while(true){
if((i__46413_46421 < count__46412_46420)){
var dep_46422 = cljs.core._nth.call(null,chunk__46411_46419,i__46413_46421);
topo_sort_helper_STAR_.call(null,dep_46422,(depth + (1)),state);

var G__46423 = seq__46410_46418;
var G__46424 = chunk__46411_46419;
var G__46425 = count__46412_46420;
var G__46426 = (i__46413_46421 + (1));
seq__46410_46418 = G__46423;
chunk__46411_46419 = G__46424;
count__46412_46420 = G__46425;
i__46413_46421 = G__46426;
continue;
} else {
var temp__4657__auto___46427 = cljs.core.seq.call(null,seq__46410_46418);
if(temp__4657__auto___46427){
var seq__46410_46428__$1 = temp__4657__auto___46427;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46410_46428__$1)){
var c__37589__auto___46429 = cljs.core.chunk_first.call(null,seq__46410_46428__$1);
var G__46430 = cljs.core.chunk_rest.call(null,seq__46410_46428__$1);
var G__46431 = c__37589__auto___46429;
var G__46432 = cljs.core.count.call(null,c__37589__auto___46429);
var G__46433 = (0);
seq__46410_46418 = G__46430;
chunk__46411_46419 = G__46431;
count__46412_46420 = G__46432;
i__46413_46421 = G__46433;
continue;
} else {
var dep_46434 = cljs.core.first.call(null,seq__46410_46428__$1);
topo_sort_helper_STAR_.call(null,dep_46434,(depth + (1)),state);

var G__46435 = cljs.core.next.call(null,seq__46410_46428__$1);
var G__46436 = null;
var G__46437 = (0);
var G__46438 = (0);
seq__46410_46418 = G__46435;
chunk__46411_46419 = G__46436;
count__46412_46420 = G__46437;
i__46413_46421 = G__46438;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__46414){
var vec__46415 = p__46414;
var seq__46416 = cljs.core.seq.call(null,vec__46415);
var first__46417 = cljs.core.first.call(null,seq__46416);
var seq__46416__$1 = cljs.core.next.call(null,seq__46416);
var x = first__46417;
var xs = seq__46416__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__46415,seq__46416,first__46417,seq__46416__$1,x,xs,get_deps__$1){
return (function (p1__46401_SHARP_){
return clojure.set.difference.call(null,p1__46401_SHARP_,x);
});})(vec__46415,seq__46416,first__46417,seq__46416__$1,x,xs,get_deps__$1))
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
var seq__46439 = cljs.core.seq.call(null,provides);
var chunk__46440 = null;
var count__46441 = (0);
var i__46442 = (0);
while(true){
if((i__46442 < count__46441)){
var prov = cljs.core._nth.call(null,chunk__46440,i__46442);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__46443_46451 = cljs.core.seq.call(null,requires);
var chunk__46444_46452 = null;
var count__46445_46453 = (0);
var i__46446_46454 = (0);
while(true){
if((i__46446_46454 < count__46445_46453)){
var req_46455 = cljs.core._nth.call(null,chunk__46444_46452,i__46446_46454);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_46455,prov);

var G__46456 = seq__46443_46451;
var G__46457 = chunk__46444_46452;
var G__46458 = count__46445_46453;
var G__46459 = (i__46446_46454 + (1));
seq__46443_46451 = G__46456;
chunk__46444_46452 = G__46457;
count__46445_46453 = G__46458;
i__46446_46454 = G__46459;
continue;
} else {
var temp__4657__auto___46460 = cljs.core.seq.call(null,seq__46443_46451);
if(temp__4657__auto___46460){
var seq__46443_46461__$1 = temp__4657__auto___46460;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46443_46461__$1)){
var c__37589__auto___46462 = cljs.core.chunk_first.call(null,seq__46443_46461__$1);
var G__46463 = cljs.core.chunk_rest.call(null,seq__46443_46461__$1);
var G__46464 = c__37589__auto___46462;
var G__46465 = cljs.core.count.call(null,c__37589__auto___46462);
var G__46466 = (0);
seq__46443_46451 = G__46463;
chunk__46444_46452 = G__46464;
count__46445_46453 = G__46465;
i__46446_46454 = G__46466;
continue;
} else {
var req_46467 = cljs.core.first.call(null,seq__46443_46461__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_46467,prov);

var G__46468 = cljs.core.next.call(null,seq__46443_46461__$1);
var G__46469 = null;
var G__46470 = (0);
var G__46471 = (0);
seq__46443_46451 = G__46468;
chunk__46444_46452 = G__46469;
count__46445_46453 = G__46470;
i__46446_46454 = G__46471;
continue;
}
} else {
}
}
break;
}

var G__46472 = seq__46439;
var G__46473 = chunk__46440;
var G__46474 = count__46441;
var G__46475 = (i__46442 + (1));
seq__46439 = G__46472;
chunk__46440 = G__46473;
count__46441 = G__46474;
i__46442 = G__46475;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__46439);
if(temp__4657__auto__){
var seq__46439__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46439__$1)){
var c__37589__auto__ = cljs.core.chunk_first.call(null,seq__46439__$1);
var G__46476 = cljs.core.chunk_rest.call(null,seq__46439__$1);
var G__46477 = c__37589__auto__;
var G__46478 = cljs.core.count.call(null,c__37589__auto__);
var G__46479 = (0);
seq__46439 = G__46476;
chunk__46440 = G__46477;
count__46441 = G__46478;
i__46442 = G__46479;
continue;
} else {
var prov = cljs.core.first.call(null,seq__46439__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__46447_46480 = cljs.core.seq.call(null,requires);
var chunk__46448_46481 = null;
var count__46449_46482 = (0);
var i__46450_46483 = (0);
while(true){
if((i__46450_46483 < count__46449_46482)){
var req_46484 = cljs.core._nth.call(null,chunk__46448_46481,i__46450_46483);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_46484,prov);

var G__46485 = seq__46447_46480;
var G__46486 = chunk__46448_46481;
var G__46487 = count__46449_46482;
var G__46488 = (i__46450_46483 + (1));
seq__46447_46480 = G__46485;
chunk__46448_46481 = G__46486;
count__46449_46482 = G__46487;
i__46450_46483 = G__46488;
continue;
} else {
var temp__4657__auto___46489__$1 = cljs.core.seq.call(null,seq__46447_46480);
if(temp__4657__auto___46489__$1){
var seq__46447_46490__$1 = temp__4657__auto___46489__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46447_46490__$1)){
var c__37589__auto___46491 = cljs.core.chunk_first.call(null,seq__46447_46490__$1);
var G__46492 = cljs.core.chunk_rest.call(null,seq__46447_46490__$1);
var G__46493 = c__37589__auto___46491;
var G__46494 = cljs.core.count.call(null,c__37589__auto___46491);
var G__46495 = (0);
seq__46447_46480 = G__46492;
chunk__46448_46481 = G__46493;
count__46449_46482 = G__46494;
i__46450_46483 = G__46495;
continue;
} else {
var req_46496 = cljs.core.first.call(null,seq__46447_46490__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_46496,prov);

var G__46497 = cljs.core.next.call(null,seq__46447_46490__$1);
var G__46498 = null;
var G__46499 = (0);
var G__46500 = (0);
seq__46447_46480 = G__46497;
chunk__46448_46481 = G__46498;
count__46449_46482 = G__46499;
i__46450_46483 = G__46500;
continue;
}
} else {
}
}
break;
}

var G__46501 = cljs.core.next.call(null,seq__46439__$1);
var G__46502 = null;
var G__46503 = (0);
var G__46504 = (0);
seq__46439 = G__46501;
chunk__46440 = G__46502;
count__46441 = G__46503;
i__46442 = G__46504;
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
var seq__46505_46509 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__46506_46510 = null;
var count__46507_46511 = (0);
var i__46508_46512 = (0);
while(true){
if((i__46508_46512 < count__46507_46511)){
var ns_46513 = cljs.core._nth.call(null,chunk__46506_46510,i__46508_46512);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_46513);

var G__46514 = seq__46505_46509;
var G__46515 = chunk__46506_46510;
var G__46516 = count__46507_46511;
var G__46517 = (i__46508_46512 + (1));
seq__46505_46509 = G__46514;
chunk__46506_46510 = G__46515;
count__46507_46511 = G__46516;
i__46508_46512 = G__46517;
continue;
} else {
var temp__4657__auto___46518 = cljs.core.seq.call(null,seq__46505_46509);
if(temp__4657__auto___46518){
var seq__46505_46519__$1 = temp__4657__auto___46518;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46505_46519__$1)){
var c__37589__auto___46520 = cljs.core.chunk_first.call(null,seq__46505_46519__$1);
var G__46521 = cljs.core.chunk_rest.call(null,seq__46505_46519__$1);
var G__46522 = c__37589__auto___46520;
var G__46523 = cljs.core.count.call(null,c__37589__auto___46520);
var G__46524 = (0);
seq__46505_46509 = G__46521;
chunk__46506_46510 = G__46522;
count__46507_46511 = G__46523;
i__46508_46512 = G__46524;
continue;
} else {
var ns_46525 = cljs.core.first.call(null,seq__46505_46519__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_46525);

var G__46526 = cljs.core.next.call(null,seq__46505_46519__$1);
var G__46527 = null;
var G__46528 = (0);
var G__46529 = (0);
seq__46505_46509 = G__46526;
chunk__46506_46510 = G__46527;
count__46507_46511 = G__46528;
i__46508_46512 = G__46529;
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
goog.require_figwheel_backup_ = (function (){var or__36769__auto__ = goog.require__;
if(cljs.core.truth_(or__36769__auto__)){
return or__36769__auto__;
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
var G__46530__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__46530 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46531__i = 0, G__46531__a = new Array(arguments.length -  0);
while (G__46531__i < G__46531__a.length) {G__46531__a[G__46531__i] = arguments[G__46531__i + 0]; ++G__46531__i;}
  args = new cljs.core.IndexedSeq(G__46531__a,0,null);
} 
return G__46530__delegate.call(this,args);};
G__46530.cljs$lang$maxFixedArity = 0;
G__46530.cljs$lang$applyTo = (function (arglist__46532){
var args = cljs.core.seq(arglist__46532);
return G__46530__delegate(args);
});
G__46530.cljs$core$IFn$_invoke$arity$variadic = G__46530__delegate;
return G__46530;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__46533 = cljs.core._EQ_;
var expr__46534 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__46533.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__46534))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__46533,expr__46534){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__46533,expr__46534))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__46533,expr__46534){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e46536){if((e46536 instanceof Error)){
var e = e46536;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e46536;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__46533,expr__46534))
} else {
if(cljs.core.truth_(pred__46533.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__46534))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__46533.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__46534))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__46533.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__46534))){
return ((function (pred__46533,expr__46534){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e46537){if((e46537 instanceof Error)){
var e = e46537;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e46537;

}
}})());
});
;})(pred__46533,expr__46534))
} else {
return ((function (pred__46533,expr__46534){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__46533,expr__46534))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__46538,callback){
var map__46539 = p__46538;
var map__46539__$1 = ((((!((map__46539 == null)))?((((map__46539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46539.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46539):map__46539);
var file_msg = map__46539__$1;
var request_url = cljs.core.get.call(null,map__46539__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Attempting to load "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__46539,map__46539__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Successfully loaded "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__46539,map__46539__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__44396__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44396__auto__){
return (function (){
var f__44397__auto__ = (function (){var switch__44308__auto__ = ((function (c__44396__auto__){
return (function (state_46563){
var state_val_46564 = (state_46563[(1)]);
if((state_val_46564 === (7))){
var inst_46559 = (state_46563[(2)]);
var state_46563__$1 = state_46563;
var statearr_46565_46582 = state_46563__$1;
(statearr_46565_46582[(2)] = inst_46559);

(statearr_46565_46582[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46564 === (1))){
var state_46563__$1 = state_46563;
var statearr_46566_46583 = state_46563__$1;
(statearr_46566_46583[(2)] = null);

(statearr_46566_46583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46564 === (4))){
var inst_46543 = (state_46563[(7)]);
var inst_46543__$1 = (state_46563[(2)]);
var state_46563__$1 = (function (){var statearr_46567 = state_46563;
(statearr_46567[(7)] = inst_46543__$1);

return statearr_46567;
})();
if(cljs.core.truth_(inst_46543__$1)){
var statearr_46568_46584 = state_46563__$1;
(statearr_46568_46584[(1)] = (5));

} else {
var statearr_46569_46585 = state_46563__$1;
(statearr_46569_46585[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46564 === (6))){
var state_46563__$1 = state_46563;
var statearr_46570_46586 = state_46563__$1;
(statearr_46570_46586[(2)] = null);

(statearr_46570_46586[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46564 === (3))){
var inst_46561 = (state_46563[(2)]);
var state_46563__$1 = state_46563;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46563__$1,inst_46561);
} else {
if((state_val_46564 === (2))){
var state_46563__$1 = state_46563;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46563__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_46564 === (11))){
var inst_46555 = (state_46563[(2)]);
var state_46563__$1 = (function (){var statearr_46571 = state_46563;
(statearr_46571[(8)] = inst_46555);

return statearr_46571;
})();
var statearr_46572_46587 = state_46563__$1;
(statearr_46572_46587[(2)] = null);

(statearr_46572_46587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46564 === (9))){
var inst_46549 = (state_46563[(9)]);
var inst_46547 = (state_46563[(10)]);
var inst_46551 = inst_46549.call(null,inst_46547);
var state_46563__$1 = state_46563;
var statearr_46573_46588 = state_46563__$1;
(statearr_46573_46588[(2)] = inst_46551);

(statearr_46573_46588[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46564 === (5))){
var inst_46543 = (state_46563[(7)]);
var inst_46545 = figwheel.client.file_reloading.blocking_load.call(null,inst_46543);
var state_46563__$1 = state_46563;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46563__$1,(8),inst_46545);
} else {
if((state_val_46564 === (10))){
var inst_46547 = (state_46563[(10)]);
var inst_46553 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_46547);
var state_46563__$1 = state_46563;
var statearr_46574_46589 = state_46563__$1;
(statearr_46574_46589[(2)] = inst_46553);

(statearr_46574_46589[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46564 === (8))){
var inst_46549 = (state_46563[(9)]);
var inst_46543 = (state_46563[(7)]);
var inst_46547 = (state_46563[(2)]);
var inst_46548 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_46549__$1 = cljs.core.get.call(null,inst_46548,inst_46543);
var state_46563__$1 = (function (){var statearr_46575 = state_46563;
(statearr_46575[(9)] = inst_46549__$1);

(statearr_46575[(10)] = inst_46547);

return statearr_46575;
})();
if(cljs.core.truth_(inst_46549__$1)){
var statearr_46576_46590 = state_46563__$1;
(statearr_46576_46590[(1)] = (9));

} else {
var statearr_46577_46591 = state_46563__$1;
(statearr_46577_46591[(1)] = (10));

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
});})(c__44396__auto__))
;
return ((function (switch__44308__auto__,c__44396__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__44309__auto__ = null;
var figwheel$client$file_reloading$state_machine__44309__auto____0 = (function (){
var statearr_46578 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46578[(0)] = figwheel$client$file_reloading$state_machine__44309__auto__);

(statearr_46578[(1)] = (1));

return statearr_46578;
});
var figwheel$client$file_reloading$state_machine__44309__auto____1 = (function (state_46563){
while(true){
var ret_value__44310__auto__ = (function (){try{while(true){
var result__44311__auto__ = switch__44308__auto__.call(null,state_46563);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44311__auto__;
}
break;
}
}catch (e46579){if((e46579 instanceof Object)){
var ex__44312__auto__ = e46579;
var statearr_46580_46592 = state_46563;
(statearr_46580_46592[(5)] = ex__44312__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46563);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46579;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46593 = state_46563;
state_46563 = G__46593;
continue;
} else {
return ret_value__44310__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__44309__auto__ = function(state_46563){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__44309__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__44309__auto____1.call(this,state_46563);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__44309__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__44309__auto____0;
figwheel$client$file_reloading$state_machine__44309__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__44309__auto____1;
return figwheel$client$file_reloading$state_machine__44309__auto__;
})()
;})(switch__44308__auto__,c__44396__auto__))
})();
var state__44398__auto__ = (function (){var statearr_46581 = f__44397__auto__.call(null);
(statearr_46581[(6)] = c__44396__auto__);

return statearr_46581;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44398__auto__);
});})(c__44396__auto__))
);

return c__44396__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__46594,callback){
var map__46595 = p__46594;
var map__46595__$1 = ((((!((map__46595 == null)))?((((map__46595.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46595.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46595):map__46595);
var file_msg = map__46595__$1;
var namespace = cljs.core.get.call(null,map__46595__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__46595,map__46595__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__46595,map__46595__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__46597){
var map__46598 = p__46597;
var map__46598__$1 = ((((!((map__46598 == null)))?((((map__46598.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46598.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46598):map__46598);
var file_msg = map__46598__$1;
var namespace = cljs.core.get.call(null,map__46598__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__46600){
var map__46601 = p__46600;
var map__46601__$1 = ((((!((map__46601 == null)))?((((map__46601.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46601.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46601):map__46601);
var file_msg = map__46601__$1;
var namespace = cljs.core.get.call(null,map__46601__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__36757__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__36757__auto__){
var or__36769__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__36769__auto__)){
return or__36769__auto__;
} else {
var or__36769__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__36769__auto____$1)){
return or__36769__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__36757__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__46603,callback){
var map__46604 = p__46603;
var map__46604__$1 = ((((!((map__46604 == null)))?((((map__46604.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46604.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46604):map__46604);
var file_msg = map__46604__$1;
var request_url = cljs.core.get.call(null,map__46604__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__46604__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__44396__auto___46654 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44396__auto___46654,out){
return (function (){
var f__44397__auto__ = (function (){var switch__44308__auto__ = ((function (c__44396__auto___46654,out){
return (function (state_46639){
var state_val_46640 = (state_46639[(1)]);
if((state_val_46640 === (1))){
var inst_46613 = cljs.core.seq.call(null,files);
var inst_46614 = cljs.core.first.call(null,inst_46613);
var inst_46615 = cljs.core.next.call(null,inst_46613);
var inst_46616 = files;
var state_46639__$1 = (function (){var statearr_46641 = state_46639;
(statearr_46641[(7)] = inst_46614);

(statearr_46641[(8)] = inst_46615);

(statearr_46641[(9)] = inst_46616);

return statearr_46641;
})();
var statearr_46642_46655 = state_46639__$1;
(statearr_46642_46655[(2)] = null);

(statearr_46642_46655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46640 === (2))){
var inst_46622 = (state_46639[(10)]);
var inst_46616 = (state_46639[(9)]);
var inst_46621 = cljs.core.seq.call(null,inst_46616);
var inst_46622__$1 = cljs.core.first.call(null,inst_46621);
var inst_46623 = cljs.core.next.call(null,inst_46621);
var inst_46624 = (inst_46622__$1 == null);
var inst_46625 = cljs.core.not.call(null,inst_46624);
var state_46639__$1 = (function (){var statearr_46643 = state_46639;
(statearr_46643[(10)] = inst_46622__$1);

(statearr_46643[(11)] = inst_46623);

return statearr_46643;
})();
if(inst_46625){
var statearr_46644_46656 = state_46639__$1;
(statearr_46644_46656[(1)] = (4));

} else {
var statearr_46645_46657 = state_46639__$1;
(statearr_46645_46657[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46640 === (3))){
var inst_46637 = (state_46639[(2)]);
var state_46639__$1 = state_46639;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46639__$1,inst_46637);
} else {
if((state_val_46640 === (4))){
var inst_46622 = (state_46639[(10)]);
var inst_46627 = figwheel.client.file_reloading.reload_js_file.call(null,inst_46622);
var state_46639__$1 = state_46639;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46639__$1,(7),inst_46627);
} else {
if((state_val_46640 === (5))){
var inst_46633 = cljs.core.async.close_BANG_.call(null,out);
var state_46639__$1 = state_46639;
var statearr_46646_46658 = state_46639__$1;
(statearr_46646_46658[(2)] = inst_46633);

(statearr_46646_46658[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46640 === (6))){
var inst_46635 = (state_46639[(2)]);
var state_46639__$1 = state_46639;
var statearr_46647_46659 = state_46639__$1;
(statearr_46647_46659[(2)] = inst_46635);

(statearr_46647_46659[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46640 === (7))){
var inst_46623 = (state_46639[(11)]);
var inst_46629 = (state_46639[(2)]);
var inst_46630 = cljs.core.async.put_BANG_.call(null,out,inst_46629);
var inst_46616 = inst_46623;
var state_46639__$1 = (function (){var statearr_46648 = state_46639;
(statearr_46648[(12)] = inst_46630);

(statearr_46648[(9)] = inst_46616);

return statearr_46648;
})();
var statearr_46649_46660 = state_46639__$1;
(statearr_46649_46660[(2)] = null);

(statearr_46649_46660[(1)] = (2));


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
});})(c__44396__auto___46654,out))
;
return ((function (switch__44308__auto__,c__44396__auto___46654,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__44309__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__44309__auto____0 = (function (){
var statearr_46650 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46650[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__44309__auto__);

(statearr_46650[(1)] = (1));

return statearr_46650;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__44309__auto____1 = (function (state_46639){
while(true){
var ret_value__44310__auto__ = (function (){try{while(true){
var result__44311__auto__ = switch__44308__auto__.call(null,state_46639);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44311__auto__;
}
break;
}
}catch (e46651){if((e46651 instanceof Object)){
var ex__44312__auto__ = e46651;
var statearr_46652_46661 = state_46639;
(statearr_46652_46661[(5)] = ex__44312__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46639);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46651;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46662 = state_46639;
state_46639 = G__46662;
continue;
} else {
return ret_value__44310__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__44309__auto__ = function(state_46639){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__44309__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__44309__auto____1.call(this,state_46639);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__44309__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__44309__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__44309__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__44309__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__44309__auto__;
})()
;})(switch__44308__auto__,c__44396__auto___46654,out))
})();
var state__44398__auto__ = (function (){var statearr_46653 = f__44397__auto__.call(null);
(statearr_46653[(6)] = c__44396__auto___46654);

return statearr_46653;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44398__auto__);
});})(c__44396__auto___46654,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__46663,opts){
var map__46664 = p__46663;
var map__46664__$1 = ((((!((map__46664 == null)))?((((map__46664.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46664.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46664):map__46664);
var eval_body = cljs.core.get.call(null,map__46664__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__46664__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__36757__auto__ = eval_body;
if(cljs.core.truth_(and__36757__auto__)){
return typeof eval_body === 'string';
} else {
return and__36757__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Evaling file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e46666){var e = e46666;
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
return (function (p1__46667_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__46667_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__46668){
var vec__46669 = p__46668;
var k = cljs.core.nth.call(null,vec__46669,(0),null);
var v = cljs.core.nth.call(null,vec__46669,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__46672){
var vec__46673 = p__46672;
var k = cljs.core.nth.call(null,vec__46673,(0),null);
var v = cljs.core.nth.call(null,vec__46673,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__46679,p__46680){
var map__46681 = p__46679;
var map__46681__$1 = ((((!((map__46681 == null)))?((((map__46681.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46681.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46681):map__46681);
var opts = map__46681__$1;
var before_jsload = cljs.core.get.call(null,map__46681__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__46681__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__46681__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__46682 = p__46680;
var map__46682__$1 = ((((!((map__46682 == null)))?((((map__46682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46682.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46682):map__46682);
var msg = map__46682__$1;
var files = cljs.core.get.call(null,map__46682__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__46682__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__46682__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__44396__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44396__auto__,map__46681,map__46681__$1,opts,before_jsload,on_jsload,reload_dependents,map__46682,map__46682__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__44397__auto__ = (function (){var switch__44308__auto__ = ((function (c__44396__auto__,map__46681,map__46681__$1,opts,before_jsload,on_jsload,reload_dependents,map__46682,map__46682__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_46836){
var state_val_46837 = (state_46836[(1)]);
if((state_val_46837 === (7))){
var inst_46698 = (state_46836[(7)]);
var inst_46696 = (state_46836[(8)]);
var inst_46697 = (state_46836[(9)]);
var inst_46699 = (state_46836[(10)]);
var inst_46704 = cljs.core._nth.call(null,inst_46697,inst_46699);
var inst_46705 = figwheel.client.file_reloading.eval_body.call(null,inst_46704,opts);
var inst_46706 = (inst_46699 + (1));
var tmp46838 = inst_46698;
var tmp46839 = inst_46696;
var tmp46840 = inst_46697;
var inst_46696__$1 = tmp46839;
var inst_46697__$1 = tmp46840;
var inst_46698__$1 = tmp46838;
var inst_46699__$1 = inst_46706;
var state_46836__$1 = (function (){var statearr_46841 = state_46836;
(statearr_46841[(7)] = inst_46698__$1);

(statearr_46841[(8)] = inst_46696__$1);

(statearr_46841[(9)] = inst_46697__$1);

(statearr_46841[(11)] = inst_46705);

(statearr_46841[(10)] = inst_46699__$1);

return statearr_46841;
})();
var statearr_46842_46925 = state_46836__$1;
(statearr_46842_46925[(2)] = null);

(statearr_46842_46925[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (20))){
var inst_46739 = (state_46836[(12)]);
var inst_46747 = figwheel.client.file_reloading.sort_files.call(null,inst_46739);
var state_46836__$1 = state_46836;
var statearr_46843_46926 = state_46836__$1;
(statearr_46843_46926[(2)] = inst_46747);

(statearr_46843_46926[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (27))){
var state_46836__$1 = state_46836;
var statearr_46844_46927 = state_46836__$1;
(statearr_46844_46927[(2)] = null);

(statearr_46844_46927[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (1))){
var inst_46688 = (state_46836[(13)]);
var inst_46685 = before_jsload.call(null,files);
var inst_46686 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_46687 = (function (){return ((function (inst_46688,inst_46685,inst_46686,state_val_46837,c__44396__auto__,map__46681,map__46681__$1,opts,before_jsload,on_jsload,reload_dependents,map__46682,map__46682__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__46676_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__46676_SHARP_);
});
;})(inst_46688,inst_46685,inst_46686,state_val_46837,c__44396__auto__,map__46681,map__46681__$1,opts,before_jsload,on_jsload,reload_dependents,map__46682,map__46682__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_46688__$1 = cljs.core.filter.call(null,inst_46687,files);
var inst_46689 = cljs.core.not_empty.call(null,inst_46688__$1);
var state_46836__$1 = (function (){var statearr_46845 = state_46836;
(statearr_46845[(13)] = inst_46688__$1);

(statearr_46845[(14)] = inst_46686);

(statearr_46845[(15)] = inst_46685);

return statearr_46845;
})();
if(cljs.core.truth_(inst_46689)){
var statearr_46846_46928 = state_46836__$1;
(statearr_46846_46928[(1)] = (2));

} else {
var statearr_46847_46929 = state_46836__$1;
(statearr_46847_46929[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (24))){
var state_46836__$1 = state_46836;
var statearr_46848_46930 = state_46836__$1;
(statearr_46848_46930[(2)] = null);

(statearr_46848_46930[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (39))){
var inst_46789 = (state_46836[(16)]);
var state_46836__$1 = state_46836;
var statearr_46849_46931 = state_46836__$1;
(statearr_46849_46931[(2)] = inst_46789);

(statearr_46849_46931[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (46))){
var inst_46831 = (state_46836[(2)]);
var state_46836__$1 = state_46836;
var statearr_46850_46932 = state_46836__$1;
(statearr_46850_46932[(2)] = inst_46831);

(statearr_46850_46932[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (4))){
var inst_46733 = (state_46836[(2)]);
var inst_46734 = cljs.core.List.EMPTY;
var inst_46735 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_46734);
var inst_46736 = (function (){return ((function (inst_46733,inst_46734,inst_46735,state_val_46837,c__44396__auto__,map__46681,map__46681__$1,opts,before_jsload,on_jsload,reload_dependents,map__46682,map__46682__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__46677_SHARP_){
var and__36757__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__46677_SHARP_);
if(cljs.core.truth_(and__36757__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__46677_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__46677_SHARP_)));
} else {
return and__36757__auto__;
}
});
;})(inst_46733,inst_46734,inst_46735,state_val_46837,c__44396__auto__,map__46681,map__46681__$1,opts,before_jsload,on_jsload,reload_dependents,map__46682,map__46682__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_46737 = cljs.core.filter.call(null,inst_46736,files);
var inst_46738 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_46739 = cljs.core.concat.call(null,inst_46737,inst_46738);
var state_46836__$1 = (function (){var statearr_46851 = state_46836;
(statearr_46851[(17)] = inst_46733);

(statearr_46851[(18)] = inst_46735);

(statearr_46851[(12)] = inst_46739);

return statearr_46851;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_46852_46933 = state_46836__$1;
(statearr_46852_46933[(1)] = (16));

} else {
var statearr_46853_46934 = state_46836__$1;
(statearr_46853_46934[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (15))){
var inst_46723 = (state_46836[(2)]);
var state_46836__$1 = state_46836;
var statearr_46854_46935 = state_46836__$1;
(statearr_46854_46935[(2)] = inst_46723);

(statearr_46854_46935[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (21))){
var inst_46749 = (state_46836[(19)]);
var inst_46749__$1 = (state_46836[(2)]);
var inst_46750 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_46749__$1);
var state_46836__$1 = (function (){var statearr_46855 = state_46836;
(statearr_46855[(19)] = inst_46749__$1);

return statearr_46855;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46836__$1,(22),inst_46750);
} else {
if((state_val_46837 === (31))){
var inst_46834 = (state_46836[(2)]);
var state_46836__$1 = state_46836;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46836__$1,inst_46834);
} else {
if((state_val_46837 === (32))){
var inst_46789 = (state_46836[(16)]);
var inst_46794 = inst_46789.cljs$lang$protocol_mask$partition0$;
var inst_46795 = (inst_46794 & (64));
var inst_46796 = inst_46789.cljs$core$ISeq$;
var inst_46797 = (cljs.core.PROTOCOL_SENTINEL === inst_46796);
var inst_46798 = (inst_46795) || (inst_46797);
var state_46836__$1 = state_46836;
if(cljs.core.truth_(inst_46798)){
var statearr_46856_46936 = state_46836__$1;
(statearr_46856_46936[(1)] = (35));

} else {
var statearr_46857_46937 = state_46836__$1;
(statearr_46857_46937[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (40))){
var inst_46811 = (state_46836[(20)]);
var inst_46810 = (state_46836[(2)]);
var inst_46811__$1 = cljs.core.get.call(null,inst_46810,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_46812 = cljs.core.get.call(null,inst_46810,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_46813 = cljs.core.not_empty.call(null,inst_46811__$1);
var state_46836__$1 = (function (){var statearr_46858 = state_46836;
(statearr_46858[(20)] = inst_46811__$1);

(statearr_46858[(21)] = inst_46812);

return statearr_46858;
})();
if(cljs.core.truth_(inst_46813)){
var statearr_46859_46938 = state_46836__$1;
(statearr_46859_46938[(1)] = (41));

} else {
var statearr_46860_46939 = state_46836__$1;
(statearr_46860_46939[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (33))){
var state_46836__$1 = state_46836;
var statearr_46861_46940 = state_46836__$1;
(statearr_46861_46940[(2)] = false);

(statearr_46861_46940[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (13))){
var inst_46709 = (state_46836[(22)]);
var inst_46713 = cljs.core.chunk_first.call(null,inst_46709);
var inst_46714 = cljs.core.chunk_rest.call(null,inst_46709);
var inst_46715 = cljs.core.count.call(null,inst_46713);
var inst_46696 = inst_46714;
var inst_46697 = inst_46713;
var inst_46698 = inst_46715;
var inst_46699 = (0);
var state_46836__$1 = (function (){var statearr_46862 = state_46836;
(statearr_46862[(7)] = inst_46698);

(statearr_46862[(8)] = inst_46696);

(statearr_46862[(9)] = inst_46697);

(statearr_46862[(10)] = inst_46699);

return statearr_46862;
})();
var statearr_46863_46941 = state_46836__$1;
(statearr_46863_46941[(2)] = null);

(statearr_46863_46941[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (22))){
var inst_46757 = (state_46836[(23)]);
var inst_46753 = (state_46836[(24)]);
var inst_46752 = (state_46836[(25)]);
var inst_46749 = (state_46836[(19)]);
var inst_46752__$1 = (state_46836[(2)]);
var inst_46753__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_46752__$1);
var inst_46754 = (function (){var all_files = inst_46749;
var res_SINGLEQUOTE_ = inst_46752__$1;
var res = inst_46753__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_46757,inst_46753,inst_46752,inst_46749,inst_46752__$1,inst_46753__$1,state_val_46837,c__44396__auto__,map__46681,map__46681__$1,opts,before_jsload,on_jsload,reload_dependents,map__46682,map__46682__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__46678_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__46678_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_46757,inst_46753,inst_46752,inst_46749,inst_46752__$1,inst_46753__$1,state_val_46837,c__44396__auto__,map__46681,map__46681__$1,opts,before_jsload,on_jsload,reload_dependents,map__46682,map__46682__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_46755 = cljs.core.filter.call(null,inst_46754,inst_46752__$1);
var inst_46756 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_46757__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_46756);
var inst_46758 = cljs.core.not_empty.call(null,inst_46757__$1);
var state_46836__$1 = (function (){var statearr_46864 = state_46836;
(statearr_46864[(23)] = inst_46757__$1);

(statearr_46864[(24)] = inst_46753__$1);

(statearr_46864[(26)] = inst_46755);

(statearr_46864[(25)] = inst_46752__$1);

return statearr_46864;
})();
if(cljs.core.truth_(inst_46758)){
var statearr_46865_46942 = state_46836__$1;
(statearr_46865_46942[(1)] = (23));

} else {
var statearr_46866_46943 = state_46836__$1;
(statearr_46866_46943[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (36))){
var state_46836__$1 = state_46836;
var statearr_46867_46944 = state_46836__$1;
(statearr_46867_46944[(2)] = false);

(statearr_46867_46944[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (41))){
var inst_46811 = (state_46836[(20)]);
var inst_46815 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_46816 = cljs.core.map.call(null,inst_46815,inst_46811);
var inst_46817 = cljs.core.pr_str.call(null,inst_46816);
var inst_46818 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("figwheel-no-load meta-data: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_46817)].join('');
var inst_46819 = figwheel.client.utils.log.call(null,inst_46818);
var state_46836__$1 = state_46836;
var statearr_46868_46945 = state_46836__$1;
(statearr_46868_46945[(2)] = inst_46819);

(statearr_46868_46945[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (43))){
var inst_46812 = (state_46836[(21)]);
var inst_46822 = (state_46836[(2)]);
var inst_46823 = cljs.core.not_empty.call(null,inst_46812);
var state_46836__$1 = (function (){var statearr_46869 = state_46836;
(statearr_46869[(27)] = inst_46822);

return statearr_46869;
})();
if(cljs.core.truth_(inst_46823)){
var statearr_46870_46946 = state_46836__$1;
(statearr_46870_46946[(1)] = (44));

} else {
var statearr_46871_46947 = state_46836__$1;
(statearr_46871_46947[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (29))){
var inst_46757 = (state_46836[(23)]);
var inst_46753 = (state_46836[(24)]);
var inst_46789 = (state_46836[(16)]);
var inst_46755 = (state_46836[(26)]);
var inst_46752 = (state_46836[(25)]);
var inst_46749 = (state_46836[(19)]);
var inst_46785 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_46788 = (function (){var all_files = inst_46749;
var res_SINGLEQUOTE_ = inst_46752;
var res = inst_46753;
var files_not_loaded = inst_46755;
var dependencies_that_loaded = inst_46757;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46757,inst_46753,inst_46789,inst_46755,inst_46752,inst_46749,inst_46785,state_val_46837,c__44396__auto__,map__46681,map__46681__$1,opts,before_jsload,on_jsload,reload_dependents,map__46682,map__46682__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__46787){
var map__46872 = p__46787;
var map__46872__$1 = ((((!((map__46872 == null)))?((((map__46872.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46872.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46872):map__46872);
var namespace = cljs.core.get.call(null,map__46872__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46757,inst_46753,inst_46789,inst_46755,inst_46752,inst_46749,inst_46785,state_val_46837,c__44396__auto__,map__46681,map__46681__$1,opts,before_jsload,on_jsload,reload_dependents,map__46682,map__46682__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_46789__$1 = cljs.core.group_by.call(null,inst_46788,inst_46755);
var inst_46791 = (inst_46789__$1 == null);
var inst_46792 = cljs.core.not.call(null,inst_46791);
var state_46836__$1 = (function (){var statearr_46874 = state_46836;
(statearr_46874[(28)] = inst_46785);

(statearr_46874[(16)] = inst_46789__$1);

return statearr_46874;
})();
if(inst_46792){
var statearr_46875_46948 = state_46836__$1;
(statearr_46875_46948[(1)] = (32));

} else {
var statearr_46876_46949 = state_46836__$1;
(statearr_46876_46949[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (44))){
var inst_46812 = (state_46836[(21)]);
var inst_46825 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_46812);
var inst_46826 = cljs.core.pr_str.call(null,inst_46825);
var inst_46827 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("not required: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_46826)].join('');
var inst_46828 = figwheel.client.utils.log.call(null,inst_46827);
var state_46836__$1 = state_46836;
var statearr_46877_46950 = state_46836__$1;
(statearr_46877_46950[(2)] = inst_46828);

(statearr_46877_46950[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (6))){
var inst_46730 = (state_46836[(2)]);
var state_46836__$1 = state_46836;
var statearr_46878_46951 = state_46836__$1;
(statearr_46878_46951[(2)] = inst_46730);

(statearr_46878_46951[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (28))){
var inst_46755 = (state_46836[(26)]);
var inst_46782 = (state_46836[(2)]);
var inst_46783 = cljs.core.not_empty.call(null,inst_46755);
var state_46836__$1 = (function (){var statearr_46879 = state_46836;
(statearr_46879[(29)] = inst_46782);

return statearr_46879;
})();
if(cljs.core.truth_(inst_46783)){
var statearr_46880_46952 = state_46836__$1;
(statearr_46880_46952[(1)] = (29));

} else {
var statearr_46881_46953 = state_46836__$1;
(statearr_46881_46953[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (25))){
var inst_46753 = (state_46836[(24)]);
var inst_46769 = (state_46836[(2)]);
var inst_46770 = cljs.core.not_empty.call(null,inst_46753);
var state_46836__$1 = (function (){var statearr_46882 = state_46836;
(statearr_46882[(30)] = inst_46769);

return statearr_46882;
})();
if(cljs.core.truth_(inst_46770)){
var statearr_46883_46954 = state_46836__$1;
(statearr_46883_46954[(1)] = (26));

} else {
var statearr_46884_46955 = state_46836__$1;
(statearr_46884_46955[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (34))){
var inst_46805 = (state_46836[(2)]);
var state_46836__$1 = state_46836;
if(cljs.core.truth_(inst_46805)){
var statearr_46885_46956 = state_46836__$1;
(statearr_46885_46956[(1)] = (38));

} else {
var statearr_46886_46957 = state_46836__$1;
(statearr_46886_46957[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (17))){
var state_46836__$1 = state_46836;
var statearr_46887_46958 = state_46836__$1;
(statearr_46887_46958[(2)] = recompile_dependents);

(statearr_46887_46958[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (3))){
var state_46836__$1 = state_46836;
var statearr_46888_46959 = state_46836__$1;
(statearr_46888_46959[(2)] = null);

(statearr_46888_46959[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (12))){
var inst_46726 = (state_46836[(2)]);
var state_46836__$1 = state_46836;
var statearr_46889_46960 = state_46836__$1;
(statearr_46889_46960[(2)] = inst_46726);

(statearr_46889_46960[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (2))){
var inst_46688 = (state_46836[(13)]);
var inst_46695 = cljs.core.seq.call(null,inst_46688);
var inst_46696 = inst_46695;
var inst_46697 = null;
var inst_46698 = (0);
var inst_46699 = (0);
var state_46836__$1 = (function (){var statearr_46890 = state_46836;
(statearr_46890[(7)] = inst_46698);

(statearr_46890[(8)] = inst_46696);

(statearr_46890[(9)] = inst_46697);

(statearr_46890[(10)] = inst_46699);

return statearr_46890;
})();
var statearr_46891_46961 = state_46836__$1;
(statearr_46891_46961[(2)] = null);

(statearr_46891_46961[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (23))){
var inst_46757 = (state_46836[(23)]);
var inst_46753 = (state_46836[(24)]);
var inst_46755 = (state_46836[(26)]);
var inst_46752 = (state_46836[(25)]);
var inst_46749 = (state_46836[(19)]);
var inst_46760 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_46762 = (function (){var all_files = inst_46749;
var res_SINGLEQUOTE_ = inst_46752;
var res = inst_46753;
var files_not_loaded = inst_46755;
var dependencies_that_loaded = inst_46757;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46757,inst_46753,inst_46755,inst_46752,inst_46749,inst_46760,state_val_46837,c__44396__auto__,map__46681,map__46681__$1,opts,before_jsload,on_jsload,reload_dependents,map__46682,map__46682__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__46761){
var map__46892 = p__46761;
var map__46892__$1 = ((((!((map__46892 == null)))?((((map__46892.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46892.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46892):map__46892);
var request_url = cljs.core.get.call(null,map__46892__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46757,inst_46753,inst_46755,inst_46752,inst_46749,inst_46760,state_val_46837,c__44396__auto__,map__46681,map__46681__$1,opts,before_jsload,on_jsload,reload_dependents,map__46682,map__46682__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_46763 = cljs.core.reverse.call(null,inst_46757);
var inst_46764 = cljs.core.map.call(null,inst_46762,inst_46763);
var inst_46765 = cljs.core.pr_str.call(null,inst_46764);
var inst_46766 = figwheel.client.utils.log.call(null,inst_46765);
var state_46836__$1 = (function (){var statearr_46894 = state_46836;
(statearr_46894[(31)] = inst_46760);

return statearr_46894;
})();
var statearr_46895_46962 = state_46836__$1;
(statearr_46895_46962[(2)] = inst_46766);

(statearr_46895_46962[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (35))){
var state_46836__$1 = state_46836;
var statearr_46896_46963 = state_46836__$1;
(statearr_46896_46963[(2)] = true);

(statearr_46896_46963[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (19))){
var inst_46739 = (state_46836[(12)]);
var inst_46745 = figwheel.client.file_reloading.expand_files.call(null,inst_46739);
var state_46836__$1 = state_46836;
var statearr_46897_46964 = state_46836__$1;
(statearr_46897_46964[(2)] = inst_46745);

(statearr_46897_46964[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (11))){
var state_46836__$1 = state_46836;
var statearr_46898_46965 = state_46836__$1;
(statearr_46898_46965[(2)] = null);

(statearr_46898_46965[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (9))){
var inst_46728 = (state_46836[(2)]);
var state_46836__$1 = state_46836;
var statearr_46899_46966 = state_46836__$1;
(statearr_46899_46966[(2)] = inst_46728);

(statearr_46899_46966[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (5))){
var inst_46698 = (state_46836[(7)]);
var inst_46699 = (state_46836[(10)]);
var inst_46701 = (inst_46699 < inst_46698);
var inst_46702 = inst_46701;
var state_46836__$1 = state_46836;
if(cljs.core.truth_(inst_46702)){
var statearr_46900_46967 = state_46836__$1;
(statearr_46900_46967[(1)] = (7));

} else {
var statearr_46901_46968 = state_46836__$1;
(statearr_46901_46968[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (14))){
var inst_46709 = (state_46836[(22)]);
var inst_46718 = cljs.core.first.call(null,inst_46709);
var inst_46719 = figwheel.client.file_reloading.eval_body.call(null,inst_46718,opts);
var inst_46720 = cljs.core.next.call(null,inst_46709);
var inst_46696 = inst_46720;
var inst_46697 = null;
var inst_46698 = (0);
var inst_46699 = (0);
var state_46836__$1 = (function (){var statearr_46902 = state_46836;
(statearr_46902[(7)] = inst_46698);

(statearr_46902[(8)] = inst_46696);

(statearr_46902[(9)] = inst_46697);

(statearr_46902[(32)] = inst_46719);

(statearr_46902[(10)] = inst_46699);

return statearr_46902;
})();
var statearr_46903_46969 = state_46836__$1;
(statearr_46903_46969[(2)] = null);

(statearr_46903_46969[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (45))){
var state_46836__$1 = state_46836;
var statearr_46904_46970 = state_46836__$1;
(statearr_46904_46970[(2)] = null);

(statearr_46904_46970[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (26))){
var inst_46757 = (state_46836[(23)]);
var inst_46753 = (state_46836[(24)]);
var inst_46755 = (state_46836[(26)]);
var inst_46752 = (state_46836[(25)]);
var inst_46749 = (state_46836[(19)]);
var inst_46772 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_46774 = (function (){var all_files = inst_46749;
var res_SINGLEQUOTE_ = inst_46752;
var res = inst_46753;
var files_not_loaded = inst_46755;
var dependencies_that_loaded = inst_46757;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46757,inst_46753,inst_46755,inst_46752,inst_46749,inst_46772,state_val_46837,c__44396__auto__,map__46681,map__46681__$1,opts,before_jsload,on_jsload,reload_dependents,map__46682,map__46682__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__46773){
var map__46905 = p__46773;
var map__46905__$1 = ((((!((map__46905 == null)))?((((map__46905.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46905.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46905):map__46905);
var namespace = cljs.core.get.call(null,map__46905__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__46905__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46757,inst_46753,inst_46755,inst_46752,inst_46749,inst_46772,state_val_46837,c__44396__auto__,map__46681,map__46681__$1,opts,before_jsload,on_jsload,reload_dependents,map__46682,map__46682__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_46775 = cljs.core.map.call(null,inst_46774,inst_46753);
var inst_46776 = cljs.core.pr_str.call(null,inst_46775);
var inst_46777 = figwheel.client.utils.log.call(null,inst_46776);
var inst_46778 = (function (){var all_files = inst_46749;
var res_SINGLEQUOTE_ = inst_46752;
var res = inst_46753;
var files_not_loaded = inst_46755;
var dependencies_that_loaded = inst_46757;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46757,inst_46753,inst_46755,inst_46752,inst_46749,inst_46772,inst_46774,inst_46775,inst_46776,inst_46777,state_val_46837,c__44396__auto__,map__46681,map__46681__$1,opts,before_jsload,on_jsload,reload_dependents,map__46682,map__46682__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46757,inst_46753,inst_46755,inst_46752,inst_46749,inst_46772,inst_46774,inst_46775,inst_46776,inst_46777,state_val_46837,c__44396__auto__,map__46681,map__46681__$1,opts,before_jsload,on_jsload,reload_dependents,map__46682,map__46682__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_46779 = setTimeout(inst_46778,(10));
var state_46836__$1 = (function (){var statearr_46907 = state_46836;
(statearr_46907[(33)] = inst_46777);

(statearr_46907[(34)] = inst_46772);

return statearr_46907;
})();
var statearr_46908_46971 = state_46836__$1;
(statearr_46908_46971[(2)] = inst_46779);

(statearr_46908_46971[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (16))){
var state_46836__$1 = state_46836;
var statearr_46909_46972 = state_46836__$1;
(statearr_46909_46972[(2)] = reload_dependents);

(statearr_46909_46972[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (38))){
var inst_46789 = (state_46836[(16)]);
var inst_46807 = cljs.core.apply.call(null,cljs.core.hash_map,inst_46789);
var state_46836__$1 = state_46836;
var statearr_46910_46973 = state_46836__$1;
(statearr_46910_46973[(2)] = inst_46807);

(statearr_46910_46973[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (30))){
var state_46836__$1 = state_46836;
var statearr_46911_46974 = state_46836__$1;
(statearr_46911_46974[(2)] = null);

(statearr_46911_46974[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (10))){
var inst_46709 = (state_46836[(22)]);
var inst_46711 = cljs.core.chunked_seq_QMARK_.call(null,inst_46709);
var state_46836__$1 = state_46836;
if(inst_46711){
var statearr_46912_46975 = state_46836__$1;
(statearr_46912_46975[(1)] = (13));

} else {
var statearr_46913_46976 = state_46836__$1;
(statearr_46913_46976[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (18))){
var inst_46743 = (state_46836[(2)]);
var state_46836__$1 = state_46836;
if(cljs.core.truth_(inst_46743)){
var statearr_46914_46977 = state_46836__$1;
(statearr_46914_46977[(1)] = (19));

} else {
var statearr_46915_46978 = state_46836__$1;
(statearr_46915_46978[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (42))){
var state_46836__$1 = state_46836;
var statearr_46916_46979 = state_46836__$1;
(statearr_46916_46979[(2)] = null);

(statearr_46916_46979[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (37))){
var inst_46802 = (state_46836[(2)]);
var state_46836__$1 = state_46836;
var statearr_46917_46980 = state_46836__$1;
(statearr_46917_46980[(2)] = inst_46802);

(statearr_46917_46980[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (8))){
var inst_46696 = (state_46836[(8)]);
var inst_46709 = (state_46836[(22)]);
var inst_46709__$1 = cljs.core.seq.call(null,inst_46696);
var state_46836__$1 = (function (){var statearr_46918 = state_46836;
(statearr_46918[(22)] = inst_46709__$1);

return statearr_46918;
})();
if(inst_46709__$1){
var statearr_46919_46981 = state_46836__$1;
(statearr_46919_46981[(1)] = (10));

} else {
var statearr_46920_46982 = state_46836__$1;
(statearr_46920_46982[(1)] = (11));

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
});})(c__44396__auto__,map__46681,map__46681__$1,opts,before_jsload,on_jsload,reload_dependents,map__46682,map__46682__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__44308__auto__,c__44396__auto__,map__46681,map__46681__$1,opts,before_jsload,on_jsload,reload_dependents,map__46682,map__46682__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__44309__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__44309__auto____0 = (function (){
var statearr_46921 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46921[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__44309__auto__);

(statearr_46921[(1)] = (1));

return statearr_46921;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__44309__auto____1 = (function (state_46836){
while(true){
var ret_value__44310__auto__ = (function (){try{while(true){
var result__44311__auto__ = switch__44308__auto__.call(null,state_46836);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44311__auto__;
}
break;
}
}catch (e46922){if((e46922 instanceof Object)){
var ex__44312__auto__ = e46922;
var statearr_46923_46983 = state_46836;
(statearr_46923_46983[(5)] = ex__44312__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46836);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46922;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46984 = state_46836;
state_46836 = G__46984;
continue;
} else {
return ret_value__44310__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__44309__auto__ = function(state_46836){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__44309__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__44309__auto____1.call(this,state_46836);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__44309__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__44309__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__44309__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__44309__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__44309__auto__;
})()
;})(switch__44308__auto__,c__44396__auto__,map__46681,map__46681__$1,opts,before_jsload,on_jsload,reload_dependents,map__46682,map__46682__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__44398__auto__ = (function (){var statearr_46924 = f__44397__auto__.call(null);
(statearr_46924[(6)] = c__44396__auto__);

return statearr_46924;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44398__auto__);
});})(c__44396__auto__,map__46681,map__46681__$1,opts,before_jsload,on_jsload,reload_dependents,map__46682,map__46682__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__44396__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),cljs.core.str.cljs$core$IFn$_invoke$arity$1("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__46987,link){
var map__46988 = p__46987;
var map__46988__$1 = ((((!((map__46988 == null)))?((((map__46988.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46988.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46988):map__46988);
var file = cljs.core.get.call(null,map__46988__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__46988,map__46988__$1,file){
return (function (p1__46985_SHARP_,p2__46986_SHARP_){
if(cljs.core._EQ_.call(null,p1__46985_SHARP_,p2__46986_SHARP_)){
return p1__46985_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__46988,map__46988__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__46991){
var map__46992 = p__46991;
var map__46992__$1 = ((((!((map__46992 == null)))?((((map__46992.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46992.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46992):map__46992);
var match_length = cljs.core.get.call(null,map__46992__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__46992__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__46990_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__46990_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__46994_SHARP_,p2__46995_SHARP_){
return cljs.core.assoc.call(null,p1__46994_SHARP_,cljs.core.get.call(null,p2__46995_SHARP_,key),p2__46995_SHARP_);
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
var loaded_f_datas_46996 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_46996);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_46996);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__46997,p__46998){
var map__46999 = p__46997;
var map__46999__$1 = ((((!((map__46999 == null)))?((((map__46999.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46999.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46999):map__46999);
var on_cssload = cljs.core.get.call(null,map__46999__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__47000 = p__46998;
var map__47000__$1 = ((((!((map__47000 == null)))?((((map__47000.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47000.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47000):map__47000);
var files_msg = map__47000__$1;
var files = cljs.core.get.call(null,map__47000__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1502846513072