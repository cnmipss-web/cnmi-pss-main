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
var or__36756__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__36756__auto__){
return or__36756__auto__;
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
var or__36756__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__36756__auto__)){
return or__36756__auto__;
} else {
var or__36756__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__36756__auto____$1)){
return or__36756__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__46372_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__46372_SHARP_));
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
var seq__46373 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__46374 = null;
var count__46375 = (0);
var i__46376 = (0);
while(true){
if((i__46376 < count__46375)){
var n = cljs.core._nth.call(null,chunk__46374,i__46376);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__46377 = seq__46373;
var G__46378 = chunk__46374;
var G__46379 = count__46375;
var G__46380 = (i__46376 + (1));
seq__46373 = G__46377;
chunk__46374 = G__46378;
count__46375 = G__46379;
i__46376 = G__46380;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__46373);
if(temp__4657__auto__){
var seq__46373__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46373__$1)){
var c__37576__auto__ = cljs.core.chunk_first.call(null,seq__46373__$1);
var G__46381 = cljs.core.chunk_rest.call(null,seq__46373__$1);
var G__46382 = c__37576__auto__;
var G__46383 = cljs.core.count.call(null,c__37576__auto__);
var G__46384 = (0);
seq__46373 = G__46381;
chunk__46374 = G__46382;
count__46375 = G__46383;
i__46376 = G__46384;
continue;
} else {
var n = cljs.core.first.call(null,seq__46373__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__46385 = cljs.core.next.call(null,seq__46373__$1);
var G__46386 = null;
var G__46387 = (0);
var G__46388 = (0);
seq__46373 = G__46385;
chunk__46374 = G__46386;
count__46375 = G__46387;
i__46376 = G__46388;
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

var seq__46398_46406 = cljs.core.seq.call(null,deps);
var chunk__46399_46407 = null;
var count__46400_46408 = (0);
var i__46401_46409 = (0);
while(true){
if((i__46401_46409 < count__46400_46408)){
var dep_46410 = cljs.core._nth.call(null,chunk__46399_46407,i__46401_46409);
topo_sort_helper_STAR_.call(null,dep_46410,(depth + (1)),state);

var G__46411 = seq__46398_46406;
var G__46412 = chunk__46399_46407;
var G__46413 = count__46400_46408;
var G__46414 = (i__46401_46409 + (1));
seq__46398_46406 = G__46411;
chunk__46399_46407 = G__46412;
count__46400_46408 = G__46413;
i__46401_46409 = G__46414;
continue;
} else {
var temp__4657__auto___46415 = cljs.core.seq.call(null,seq__46398_46406);
if(temp__4657__auto___46415){
var seq__46398_46416__$1 = temp__4657__auto___46415;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46398_46416__$1)){
var c__37576__auto___46417 = cljs.core.chunk_first.call(null,seq__46398_46416__$1);
var G__46418 = cljs.core.chunk_rest.call(null,seq__46398_46416__$1);
var G__46419 = c__37576__auto___46417;
var G__46420 = cljs.core.count.call(null,c__37576__auto___46417);
var G__46421 = (0);
seq__46398_46406 = G__46418;
chunk__46399_46407 = G__46419;
count__46400_46408 = G__46420;
i__46401_46409 = G__46421;
continue;
} else {
var dep_46422 = cljs.core.first.call(null,seq__46398_46416__$1);
topo_sort_helper_STAR_.call(null,dep_46422,(depth + (1)),state);

var G__46423 = cljs.core.next.call(null,seq__46398_46416__$1);
var G__46424 = null;
var G__46425 = (0);
var G__46426 = (0);
seq__46398_46406 = G__46423;
chunk__46399_46407 = G__46424;
count__46400_46408 = G__46425;
i__46401_46409 = G__46426;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__46402){
var vec__46403 = p__46402;
var seq__46404 = cljs.core.seq.call(null,vec__46403);
var first__46405 = cljs.core.first.call(null,seq__46404);
var seq__46404__$1 = cljs.core.next.call(null,seq__46404);
var x = first__46405;
var xs = seq__46404__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__46403,seq__46404,first__46405,seq__46404__$1,x,xs,get_deps__$1){
return (function (p1__46389_SHARP_){
return clojure.set.difference.call(null,p1__46389_SHARP_,x);
});})(vec__46403,seq__46404,first__46405,seq__46404__$1,x,xs,get_deps__$1))
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
var seq__46427 = cljs.core.seq.call(null,provides);
var chunk__46428 = null;
var count__46429 = (0);
var i__46430 = (0);
while(true){
if((i__46430 < count__46429)){
var prov = cljs.core._nth.call(null,chunk__46428,i__46430);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__46431_46439 = cljs.core.seq.call(null,requires);
var chunk__46432_46440 = null;
var count__46433_46441 = (0);
var i__46434_46442 = (0);
while(true){
if((i__46434_46442 < count__46433_46441)){
var req_46443 = cljs.core._nth.call(null,chunk__46432_46440,i__46434_46442);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_46443,prov);

var G__46444 = seq__46431_46439;
var G__46445 = chunk__46432_46440;
var G__46446 = count__46433_46441;
var G__46447 = (i__46434_46442 + (1));
seq__46431_46439 = G__46444;
chunk__46432_46440 = G__46445;
count__46433_46441 = G__46446;
i__46434_46442 = G__46447;
continue;
} else {
var temp__4657__auto___46448 = cljs.core.seq.call(null,seq__46431_46439);
if(temp__4657__auto___46448){
var seq__46431_46449__$1 = temp__4657__auto___46448;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46431_46449__$1)){
var c__37576__auto___46450 = cljs.core.chunk_first.call(null,seq__46431_46449__$1);
var G__46451 = cljs.core.chunk_rest.call(null,seq__46431_46449__$1);
var G__46452 = c__37576__auto___46450;
var G__46453 = cljs.core.count.call(null,c__37576__auto___46450);
var G__46454 = (0);
seq__46431_46439 = G__46451;
chunk__46432_46440 = G__46452;
count__46433_46441 = G__46453;
i__46434_46442 = G__46454;
continue;
} else {
var req_46455 = cljs.core.first.call(null,seq__46431_46449__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_46455,prov);

var G__46456 = cljs.core.next.call(null,seq__46431_46449__$1);
var G__46457 = null;
var G__46458 = (0);
var G__46459 = (0);
seq__46431_46439 = G__46456;
chunk__46432_46440 = G__46457;
count__46433_46441 = G__46458;
i__46434_46442 = G__46459;
continue;
}
} else {
}
}
break;
}

var G__46460 = seq__46427;
var G__46461 = chunk__46428;
var G__46462 = count__46429;
var G__46463 = (i__46430 + (1));
seq__46427 = G__46460;
chunk__46428 = G__46461;
count__46429 = G__46462;
i__46430 = G__46463;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__46427);
if(temp__4657__auto__){
var seq__46427__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46427__$1)){
var c__37576__auto__ = cljs.core.chunk_first.call(null,seq__46427__$1);
var G__46464 = cljs.core.chunk_rest.call(null,seq__46427__$1);
var G__46465 = c__37576__auto__;
var G__46466 = cljs.core.count.call(null,c__37576__auto__);
var G__46467 = (0);
seq__46427 = G__46464;
chunk__46428 = G__46465;
count__46429 = G__46466;
i__46430 = G__46467;
continue;
} else {
var prov = cljs.core.first.call(null,seq__46427__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__46435_46468 = cljs.core.seq.call(null,requires);
var chunk__46436_46469 = null;
var count__46437_46470 = (0);
var i__46438_46471 = (0);
while(true){
if((i__46438_46471 < count__46437_46470)){
var req_46472 = cljs.core._nth.call(null,chunk__46436_46469,i__46438_46471);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_46472,prov);

var G__46473 = seq__46435_46468;
var G__46474 = chunk__46436_46469;
var G__46475 = count__46437_46470;
var G__46476 = (i__46438_46471 + (1));
seq__46435_46468 = G__46473;
chunk__46436_46469 = G__46474;
count__46437_46470 = G__46475;
i__46438_46471 = G__46476;
continue;
} else {
var temp__4657__auto___46477__$1 = cljs.core.seq.call(null,seq__46435_46468);
if(temp__4657__auto___46477__$1){
var seq__46435_46478__$1 = temp__4657__auto___46477__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46435_46478__$1)){
var c__37576__auto___46479 = cljs.core.chunk_first.call(null,seq__46435_46478__$1);
var G__46480 = cljs.core.chunk_rest.call(null,seq__46435_46478__$1);
var G__46481 = c__37576__auto___46479;
var G__46482 = cljs.core.count.call(null,c__37576__auto___46479);
var G__46483 = (0);
seq__46435_46468 = G__46480;
chunk__46436_46469 = G__46481;
count__46437_46470 = G__46482;
i__46438_46471 = G__46483;
continue;
} else {
var req_46484 = cljs.core.first.call(null,seq__46435_46478__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_46484,prov);

var G__46485 = cljs.core.next.call(null,seq__46435_46478__$1);
var G__46486 = null;
var G__46487 = (0);
var G__46488 = (0);
seq__46435_46468 = G__46485;
chunk__46436_46469 = G__46486;
count__46437_46470 = G__46487;
i__46438_46471 = G__46488;
continue;
}
} else {
}
}
break;
}

var G__46489 = cljs.core.next.call(null,seq__46427__$1);
var G__46490 = null;
var G__46491 = (0);
var G__46492 = (0);
seq__46427 = G__46489;
chunk__46428 = G__46490;
count__46429 = G__46491;
i__46430 = G__46492;
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
var seq__46493_46497 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__46494_46498 = null;
var count__46495_46499 = (0);
var i__46496_46500 = (0);
while(true){
if((i__46496_46500 < count__46495_46499)){
var ns_46501 = cljs.core._nth.call(null,chunk__46494_46498,i__46496_46500);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_46501);

var G__46502 = seq__46493_46497;
var G__46503 = chunk__46494_46498;
var G__46504 = count__46495_46499;
var G__46505 = (i__46496_46500 + (1));
seq__46493_46497 = G__46502;
chunk__46494_46498 = G__46503;
count__46495_46499 = G__46504;
i__46496_46500 = G__46505;
continue;
} else {
var temp__4657__auto___46506 = cljs.core.seq.call(null,seq__46493_46497);
if(temp__4657__auto___46506){
var seq__46493_46507__$1 = temp__4657__auto___46506;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46493_46507__$1)){
var c__37576__auto___46508 = cljs.core.chunk_first.call(null,seq__46493_46507__$1);
var G__46509 = cljs.core.chunk_rest.call(null,seq__46493_46507__$1);
var G__46510 = c__37576__auto___46508;
var G__46511 = cljs.core.count.call(null,c__37576__auto___46508);
var G__46512 = (0);
seq__46493_46497 = G__46509;
chunk__46494_46498 = G__46510;
count__46495_46499 = G__46511;
i__46496_46500 = G__46512;
continue;
} else {
var ns_46513 = cljs.core.first.call(null,seq__46493_46507__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_46513);

var G__46514 = cljs.core.next.call(null,seq__46493_46507__$1);
var G__46515 = null;
var G__46516 = (0);
var G__46517 = (0);
seq__46493_46497 = G__46514;
chunk__46494_46498 = G__46515;
count__46495_46499 = G__46516;
i__46496_46500 = G__46517;
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
goog.require_figwheel_backup_ = (function (){var or__36756__auto__ = goog.require__;
if(cljs.core.truth_(or__36756__auto__)){
return or__36756__auto__;
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
var G__46518__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__46518 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46519__i = 0, G__46519__a = new Array(arguments.length -  0);
while (G__46519__i < G__46519__a.length) {G__46519__a[G__46519__i] = arguments[G__46519__i + 0]; ++G__46519__i;}
  args = new cljs.core.IndexedSeq(G__46519__a,0,null);
} 
return G__46518__delegate.call(this,args);};
G__46518.cljs$lang$maxFixedArity = 0;
G__46518.cljs$lang$applyTo = (function (arglist__46520){
var args = cljs.core.seq(arglist__46520);
return G__46518__delegate(args);
});
G__46518.cljs$core$IFn$_invoke$arity$variadic = G__46518__delegate;
return G__46518;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__46521 = cljs.core._EQ_;
var expr__46522 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__46521.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__46522))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__46521,expr__46522){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__46521,expr__46522))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__46521,expr__46522){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e46524){if((e46524 instanceof Error)){
var e = e46524;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e46524;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__46521,expr__46522))
} else {
if(cljs.core.truth_(pred__46521.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__46522))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__46521.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__46522))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__46521.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__46522))){
return ((function (pred__46521,expr__46522){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e46525){if((e46525 instanceof Error)){
var e = e46525;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e46525;

}
}})());
});
;})(pred__46521,expr__46522))
} else {
return ((function (pred__46521,expr__46522){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__46521,expr__46522))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__46526,callback){
var map__46527 = p__46526;
var map__46527__$1 = ((((!((map__46527 == null)))?((((map__46527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46527.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46527):map__46527);
var file_msg = map__46527__$1;
var request_url = cljs.core.get.call(null,map__46527__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Attempting to load "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__46527,map__46527__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Successfully loaded "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__46527,map__46527__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__43129__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43129__auto__){
return (function (){
var f__43130__auto__ = (function (){var switch__43041__auto__ = ((function (c__43129__auto__){
return (function (state_46551){
var state_val_46552 = (state_46551[(1)]);
if((state_val_46552 === (7))){
var inst_46547 = (state_46551[(2)]);
var state_46551__$1 = state_46551;
var statearr_46553_46570 = state_46551__$1;
(statearr_46553_46570[(2)] = inst_46547);

(statearr_46553_46570[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46552 === (1))){
var state_46551__$1 = state_46551;
var statearr_46554_46571 = state_46551__$1;
(statearr_46554_46571[(2)] = null);

(statearr_46554_46571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46552 === (4))){
var inst_46531 = (state_46551[(7)]);
var inst_46531__$1 = (state_46551[(2)]);
var state_46551__$1 = (function (){var statearr_46555 = state_46551;
(statearr_46555[(7)] = inst_46531__$1);

return statearr_46555;
})();
if(cljs.core.truth_(inst_46531__$1)){
var statearr_46556_46572 = state_46551__$1;
(statearr_46556_46572[(1)] = (5));

} else {
var statearr_46557_46573 = state_46551__$1;
(statearr_46557_46573[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46552 === (6))){
var state_46551__$1 = state_46551;
var statearr_46558_46574 = state_46551__$1;
(statearr_46558_46574[(2)] = null);

(statearr_46558_46574[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46552 === (3))){
var inst_46549 = (state_46551[(2)]);
var state_46551__$1 = state_46551;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46551__$1,inst_46549);
} else {
if((state_val_46552 === (2))){
var state_46551__$1 = state_46551;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46551__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_46552 === (11))){
var inst_46543 = (state_46551[(2)]);
var state_46551__$1 = (function (){var statearr_46559 = state_46551;
(statearr_46559[(8)] = inst_46543);

return statearr_46559;
})();
var statearr_46560_46575 = state_46551__$1;
(statearr_46560_46575[(2)] = null);

(statearr_46560_46575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46552 === (9))){
var inst_46537 = (state_46551[(9)]);
var inst_46535 = (state_46551[(10)]);
var inst_46539 = inst_46537.call(null,inst_46535);
var state_46551__$1 = state_46551;
var statearr_46561_46576 = state_46551__$1;
(statearr_46561_46576[(2)] = inst_46539);

(statearr_46561_46576[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46552 === (5))){
var inst_46531 = (state_46551[(7)]);
var inst_46533 = figwheel.client.file_reloading.blocking_load.call(null,inst_46531);
var state_46551__$1 = state_46551;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46551__$1,(8),inst_46533);
} else {
if((state_val_46552 === (10))){
var inst_46535 = (state_46551[(10)]);
var inst_46541 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_46535);
var state_46551__$1 = state_46551;
var statearr_46562_46577 = state_46551__$1;
(statearr_46562_46577[(2)] = inst_46541);

(statearr_46562_46577[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46552 === (8))){
var inst_46531 = (state_46551[(7)]);
var inst_46537 = (state_46551[(9)]);
var inst_46535 = (state_46551[(2)]);
var inst_46536 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_46537__$1 = cljs.core.get.call(null,inst_46536,inst_46531);
var state_46551__$1 = (function (){var statearr_46563 = state_46551;
(statearr_46563[(9)] = inst_46537__$1);

(statearr_46563[(10)] = inst_46535);

return statearr_46563;
})();
if(cljs.core.truth_(inst_46537__$1)){
var statearr_46564_46578 = state_46551__$1;
(statearr_46564_46578[(1)] = (9));

} else {
var statearr_46565_46579 = state_46551__$1;
(statearr_46565_46579[(1)] = (10));

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
});})(c__43129__auto__))
;
return ((function (switch__43041__auto__,c__43129__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__43042__auto__ = null;
var figwheel$client$file_reloading$state_machine__43042__auto____0 = (function (){
var statearr_46566 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46566[(0)] = figwheel$client$file_reloading$state_machine__43042__auto__);

(statearr_46566[(1)] = (1));

return statearr_46566;
});
var figwheel$client$file_reloading$state_machine__43042__auto____1 = (function (state_46551){
while(true){
var ret_value__43043__auto__ = (function (){try{while(true){
var result__43044__auto__ = switch__43041__auto__.call(null,state_46551);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43044__auto__;
}
break;
}
}catch (e46567){if((e46567 instanceof Object)){
var ex__43045__auto__ = e46567;
var statearr_46568_46580 = state_46551;
(statearr_46568_46580[(5)] = ex__43045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46551);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46567;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46581 = state_46551;
state_46551 = G__46581;
continue;
} else {
return ret_value__43043__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__43042__auto__ = function(state_46551){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__43042__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__43042__auto____1.call(this,state_46551);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__43042__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__43042__auto____0;
figwheel$client$file_reloading$state_machine__43042__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__43042__auto____1;
return figwheel$client$file_reloading$state_machine__43042__auto__;
})()
;})(switch__43041__auto__,c__43129__auto__))
})();
var state__43131__auto__ = (function (){var statearr_46569 = f__43130__auto__.call(null);
(statearr_46569[(6)] = c__43129__auto__);

return statearr_46569;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43131__auto__);
});})(c__43129__auto__))
);

return c__43129__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__46582,callback){
var map__46583 = p__46582;
var map__46583__$1 = ((((!((map__46583 == null)))?((((map__46583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46583.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46583):map__46583);
var file_msg = map__46583__$1;
var namespace = cljs.core.get.call(null,map__46583__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__46583,map__46583__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__46583,map__46583__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__46585){
var map__46586 = p__46585;
var map__46586__$1 = ((((!((map__46586 == null)))?((((map__46586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46586.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46586):map__46586);
var file_msg = map__46586__$1;
var namespace = cljs.core.get.call(null,map__46586__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__46588){
var map__46589 = p__46588;
var map__46589__$1 = ((((!((map__46589 == null)))?((((map__46589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46589.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46589):map__46589);
var file_msg = map__46589__$1;
var namespace = cljs.core.get.call(null,map__46589__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__36744__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__36744__auto__){
var or__36756__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__36756__auto__)){
return or__36756__auto__;
} else {
var or__36756__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__36756__auto____$1)){
return or__36756__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__36744__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__46591,callback){
var map__46592 = p__46591;
var map__46592__$1 = ((((!((map__46592 == null)))?((((map__46592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46592.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46592):map__46592);
var file_msg = map__46592__$1;
var request_url = cljs.core.get.call(null,map__46592__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__46592__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__43129__auto___46642 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43129__auto___46642,out){
return (function (){
var f__43130__auto__ = (function (){var switch__43041__auto__ = ((function (c__43129__auto___46642,out){
return (function (state_46627){
var state_val_46628 = (state_46627[(1)]);
if((state_val_46628 === (1))){
var inst_46601 = cljs.core.seq.call(null,files);
var inst_46602 = cljs.core.first.call(null,inst_46601);
var inst_46603 = cljs.core.next.call(null,inst_46601);
var inst_46604 = files;
var state_46627__$1 = (function (){var statearr_46629 = state_46627;
(statearr_46629[(7)] = inst_46604);

(statearr_46629[(8)] = inst_46603);

(statearr_46629[(9)] = inst_46602);

return statearr_46629;
})();
var statearr_46630_46643 = state_46627__$1;
(statearr_46630_46643[(2)] = null);

(statearr_46630_46643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46628 === (2))){
var inst_46604 = (state_46627[(7)]);
var inst_46610 = (state_46627[(10)]);
var inst_46609 = cljs.core.seq.call(null,inst_46604);
var inst_46610__$1 = cljs.core.first.call(null,inst_46609);
var inst_46611 = cljs.core.next.call(null,inst_46609);
var inst_46612 = (inst_46610__$1 == null);
var inst_46613 = cljs.core.not.call(null,inst_46612);
var state_46627__$1 = (function (){var statearr_46631 = state_46627;
(statearr_46631[(10)] = inst_46610__$1);

(statearr_46631[(11)] = inst_46611);

return statearr_46631;
})();
if(inst_46613){
var statearr_46632_46644 = state_46627__$1;
(statearr_46632_46644[(1)] = (4));

} else {
var statearr_46633_46645 = state_46627__$1;
(statearr_46633_46645[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46628 === (3))){
var inst_46625 = (state_46627[(2)]);
var state_46627__$1 = state_46627;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46627__$1,inst_46625);
} else {
if((state_val_46628 === (4))){
var inst_46610 = (state_46627[(10)]);
var inst_46615 = figwheel.client.file_reloading.reload_js_file.call(null,inst_46610);
var state_46627__$1 = state_46627;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46627__$1,(7),inst_46615);
} else {
if((state_val_46628 === (5))){
var inst_46621 = cljs.core.async.close_BANG_.call(null,out);
var state_46627__$1 = state_46627;
var statearr_46634_46646 = state_46627__$1;
(statearr_46634_46646[(2)] = inst_46621);

(statearr_46634_46646[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46628 === (6))){
var inst_46623 = (state_46627[(2)]);
var state_46627__$1 = state_46627;
var statearr_46635_46647 = state_46627__$1;
(statearr_46635_46647[(2)] = inst_46623);

(statearr_46635_46647[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46628 === (7))){
var inst_46611 = (state_46627[(11)]);
var inst_46617 = (state_46627[(2)]);
var inst_46618 = cljs.core.async.put_BANG_.call(null,out,inst_46617);
var inst_46604 = inst_46611;
var state_46627__$1 = (function (){var statearr_46636 = state_46627;
(statearr_46636[(7)] = inst_46604);

(statearr_46636[(12)] = inst_46618);

return statearr_46636;
})();
var statearr_46637_46648 = state_46627__$1;
(statearr_46637_46648[(2)] = null);

(statearr_46637_46648[(1)] = (2));


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
});})(c__43129__auto___46642,out))
;
return ((function (switch__43041__auto__,c__43129__auto___46642,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__43042__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__43042__auto____0 = (function (){
var statearr_46638 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46638[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__43042__auto__);

(statearr_46638[(1)] = (1));

return statearr_46638;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__43042__auto____1 = (function (state_46627){
while(true){
var ret_value__43043__auto__ = (function (){try{while(true){
var result__43044__auto__ = switch__43041__auto__.call(null,state_46627);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43044__auto__;
}
break;
}
}catch (e46639){if((e46639 instanceof Object)){
var ex__43045__auto__ = e46639;
var statearr_46640_46649 = state_46627;
(statearr_46640_46649[(5)] = ex__43045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46627);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46639;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46650 = state_46627;
state_46627 = G__46650;
continue;
} else {
return ret_value__43043__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__43042__auto__ = function(state_46627){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__43042__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__43042__auto____1.call(this,state_46627);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__43042__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__43042__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__43042__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__43042__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__43042__auto__;
})()
;})(switch__43041__auto__,c__43129__auto___46642,out))
})();
var state__43131__auto__ = (function (){var statearr_46641 = f__43130__auto__.call(null);
(statearr_46641[(6)] = c__43129__auto___46642);

return statearr_46641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43131__auto__);
});})(c__43129__auto___46642,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__46651,opts){
var map__46652 = p__46651;
var map__46652__$1 = ((((!((map__46652 == null)))?((((map__46652.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46652.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46652):map__46652);
var eval_body = cljs.core.get.call(null,map__46652__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__46652__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__36744__auto__ = eval_body;
if(cljs.core.truth_(and__36744__auto__)){
return typeof eval_body === 'string';
} else {
return and__36744__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Evaling file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e46654){var e = e46654;
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
return (function (p1__46655_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__46655_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__46656){
var vec__46657 = p__46656;
var k = cljs.core.nth.call(null,vec__46657,(0),null);
var v = cljs.core.nth.call(null,vec__46657,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__46660){
var vec__46661 = p__46660;
var k = cljs.core.nth.call(null,vec__46661,(0),null);
var v = cljs.core.nth.call(null,vec__46661,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__46667,p__46668){
var map__46669 = p__46667;
var map__46669__$1 = ((((!((map__46669 == null)))?((((map__46669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46669.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46669):map__46669);
var opts = map__46669__$1;
var before_jsload = cljs.core.get.call(null,map__46669__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__46669__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__46669__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__46670 = p__46668;
var map__46670__$1 = ((((!((map__46670 == null)))?((((map__46670.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46670.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46670):map__46670);
var msg = map__46670__$1;
var files = cljs.core.get.call(null,map__46670__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__46670__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__46670__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__43129__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43129__auto__,map__46669,map__46669__$1,opts,before_jsload,on_jsload,reload_dependents,map__46670,map__46670__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__43130__auto__ = (function (){var switch__43041__auto__ = ((function (c__43129__auto__,map__46669,map__46669__$1,opts,before_jsload,on_jsload,reload_dependents,map__46670,map__46670__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_46824){
var state_val_46825 = (state_46824[(1)]);
if((state_val_46825 === (7))){
var inst_46687 = (state_46824[(7)]);
var inst_46686 = (state_46824[(8)]);
var inst_46685 = (state_46824[(9)]);
var inst_46684 = (state_46824[(10)]);
var inst_46692 = cljs.core._nth.call(null,inst_46685,inst_46687);
var inst_46693 = figwheel.client.file_reloading.eval_body.call(null,inst_46692,opts);
var inst_46694 = (inst_46687 + (1));
var tmp46826 = inst_46686;
var tmp46827 = inst_46685;
var tmp46828 = inst_46684;
var inst_46684__$1 = tmp46828;
var inst_46685__$1 = tmp46827;
var inst_46686__$1 = tmp46826;
var inst_46687__$1 = inst_46694;
var state_46824__$1 = (function (){var statearr_46829 = state_46824;
(statearr_46829[(7)] = inst_46687__$1);

(statearr_46829[(8)] = inst_46686__$1);

(statearr_46829[(9)] = inst_46685__$1);

(statearr_46829[(10)] = inst_46684__$1);

(statearr_46829[(11)] = inst_46693);

return statearr_46829;
})();
var statearr_46830_46913 = state_46824__$1;
(statearr_46830_46913[(2)] = null);

(statearr_46830_46913[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46825 === (20))){
var inst_46727 = (state_46824[(12)]);
var inst_46735 = figwheel.client.file_reloading.sort_files.call(null,inst_46727);
var state_46824__$1 = state_46824;
var statearr_46831_46914 = state_46824__$1;
(statearr_46831_46914[(2)] = inst_46735);

(statearr_46831_46914[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46825 === (27))){
var state_46824__$1 = state_46824;
var statearr_46832_46915 = state_46824__$1;
(statearr_46832_46915[(2)] = null);

(statearr_46832_46915[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46825 === (1))){
var inst_46676 = (state_46824[(13)]);
var inst_46673 = before_jsload.call(null,files);
var inst_46674 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_46675 = (function (){return ((function (inst_46676,inst_46673,inst_46674,state_val_46825,c__43129__auto__,map__46669,map__46669__$1,opts,before_jsload,on_jsload,reload_dependents,map__46670,map__46670__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__46664_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__46664_SHARP_);
});
;})(inst_46676,inst_46673,inst_46674,state_val_46825,c__43129__auto__,map__46669,map__46669__$1,opts,before_jsload,on_jsload,reload_dependents,map__46670,map__46670__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_46676__$1 = cljs.core.filter.call(null,inst_46675,files);
var inst_46677 = cljs.core.not_empty.call(null,inst_46676__$1);
var state_46824__$1 = (function (){var statearr_46833 = state_46824;
(statearr_46833[(14)] = inst_46674);

(statearr_46833[(15)] = inst_46673);

(statearr_46833[(13)] = inst_46676__$1);

return statearr_46833;
})();
if(cljs.core.truth_(inst_46677)){
var statearr_46834_46916 = state_46824__$1;
(statearr_46834_46916[(1)] = (2));

} else {
var statearr_46835_46917 = state_46824__$1;
(statearr_46835_46917[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46825 === (24))){
var state_46824__$1 = state_46824;
var statearr_46836_46918 = state_46824__$1;
(statearr_46836_46918[(2)] = null);

(statearr_46836_46918[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46825 === (39))){
var inst_46777 = (state_46824[(16)]);
var state_46824__$1 = state_46824;
var statearr_46837_46919 = state_46824__$1;
(statearr_46837_46919[(2)] = inst_46777);

(statearr_46837_46919[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46825 === (46))){
var inst_46819 = (state_46824[(2)]);
var state_46824__$1 = state_46824;
var statearr_46838_46920 = state_46824__$1;
(statearr_46838_46920[(2)] = inst_46819);

(statearr_46838_46920[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46825 === (4))){
var inst_46721 = (state_46824[(2)]);
var inst_46722 = cljs.core.List.EMPTY;
var inst_46723 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_46722);
var inst_46724 = (function (){return ((function (inst_46721,inst_46722,inst_46723,state_val_46825,c__43129__auto__,map__46669,map__46669__$1,opts,before_jsload,on_jsload,reload_dependents,map__46670,map__46670__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__46665_SHARP_){
var and__36744__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__46665_SHARP_);
if(cljs.core.truth_(and__36744__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__46665_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__46665_SHARP_)));
} else {
return and__36744__auto__;
}
});
;})(inst_46721,inst_46722,inst_46723,state_val_46825,c__43129__auto__,map__46669,map__46669__$1,opts,before_jsload,on_jsload,reload_dependents,map__46670,map__46670__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_46725 = cljs.core.filter.call(null,inst_46724,files);
var inst_46726 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_46727 = cljs.core.concat.call(null,inst_46725,inst_46726);
var state_46824__$1 = (function (){var statearr_46839 = state_46824;
(statearr_46839[(17)] = inst_46721);

(statearr_46839[(18)] = inst_46723);

(statearr_46839[(12)] = inst_46727);

return statearr_46839;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_46840_46921 = state_46824__$1;
(statearr_46840_46921[(1)] = (16));

} else {
var statearr_46841_46922 = state_46824__$1;
(statearr_46841_46922[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46825 === (15))){
var inst_46711 = (state_46824[(2)]);
var state_46824__$1 = state_46824;
var statearr_46842_46923 = state_46824__$1;
(statearr_46842_46923[(2)] = inst_46711);

(statearr_46842_46923[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46825 === (21))){
var inst_46737 = (state_46824[(19)]);
var inst_46737__$1 = (state_46824[(2)]);
var inst_46738 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_46737__$1);
var state_46824__$1 = (function (){var statearr_46843 = state_46824;
(statearr_46843[(19)] = inst_46737__$1);

return statearr_46843;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46824__$1,(22),inst_46738);
} else {
if((state_val_46825 === (31))){
var inst_46822 = (state_46824[(2)]);
var state_46824__$1 = state_46824;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46824__$1,inst_46822);
} else {
if((state_val_46825 === (32))){
var inst_46777 = (state_46824[(16)]);
var inst_46782 = inst_46777.cljs$lang$protocol_mask$partition0$;
var inst_46783 = (inst_46782 & (64));
var inst_46784 = inst_46777.cljs$core$ISeq$;
var inst_46785 = (cljs.core.PROTOCOL_SENTINEL === inst_46784);
var inst_46786 = (inst_46783) || (inst_46785);
var state_46824__$1 = state_46824;
if(cljs.core.truth_(inst_46786)){
var statearr_46844_46924 = state_46824__$1;
(statearr_46844_46924[(1)] = (35));

} else {
var statearr_46845_46925 = state_46824__$1;
(statearr_46845_46925[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46825 === (40))){
var inst_46799 = (state_46824[(20)]);
var inst_46798 = (state_46824[(2)]);
var inst_46799__$1 = cljs.core.get.call(null,inst_46798,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_46800 = cljs.core.get.call(null,inst_46798,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_46801 = cljs.core.not_empty.call(null,inst_46799__$1);
var state_46824__$1 = (function (){var statearr_46846 = state_46824;
(statearr_46846[(21)] = inst_46800);

(statearr_46846[(20)] = inst_46799__$1);

return statearr_46846;
})();
if(cljs.core.truth_(inst_46801)){
var statearr_46847_46926 = state_46824__$1;
(statearr_46847_46926[(1)] = (41));

} else {
var statearr_46848_46927 = state_46824__$1;
(statearr_46848_46927[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46825 === (33))){
var state_46824__$1 = state_46824;
var statearr_46849_46928 = state_46824__$1;
(statearr_46849_46928[(2)] = false);

(statearr_46849_46928[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46825 === (13))){
var inst_46697 = (state_46824[(22)]);
var inst_46701 = cljs.core.chunk_first.call(null,inst_46697);
var inst_46702 = cljs.core.chunk_rest.call(null,inst_46697);
var inst_46703 = cljs.core.count.call(null,inst_46701);
var inst_46684 = inst_46702;
var inst_46685 = inst_46701;
var inst_46686 = inst_46703;
var inst_46687 = (0);
var state_46824__$1 = (function (){var statearr_46850 = state_46824;
(statearr_46850[(7)] = inst_46687);

(statearr_46850[(8)] = inst_46686);

(statearr_46850[(9)] = inst_46685);

(statearr_46850[(10)] = inst_46684);

return statearr_46850;
})();
var statearr_46851_46929 = state_46824__$1;
(statearr_46851_46929[(2)] = null);

(statearr_46851_46929[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46825 === (22))){
var inst_46740 = (state_46824[(23)]);
var inst_46737 = (state_46824[(19)]);
var inst_46745 = (state_46824[(24)]);
var inst_46741 = (state_46824[(25)]);
var inst_46740__$1 = (state_46824[(2)]);
var inst_46741__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_46740__$1);
var inst_46742 = (function (){var all_files = inst_46737;
var res_SINGLEQUOTE_ = inst_46740__$1;
var res = inst_46741__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_46740,inst_46737,inst_46745,inst_46741,inst_46740__$1,inst_46741__$1,state_val_46825,c__43129__auto__,map__46669,map__46669__$1,opts,before_jsload,on_jsload,reload_dependents,map__46670,map__46670__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__46666_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__46666_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_46740,inst_46737,inst_46745,inst_46741,inst_46740__$1,inst_46741__$1,state_val_46825,c__43129__auto__,map__46669,map__46669__$1,opts,before_jsload,on_jsload,reload_dependents,map__46670,map__46670__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_46743 = cljs.core.filter.call(null,inst_46742,inst_46740__$1);
var inst_46744 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_46745__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_46744);
var inst_46746 = cljs.core.not_empty.call(null,inst_46745__$1);
var state_46824__$1 = (function (){var statearr_46852 = state_46824;
(statearr_46852[(23)] = inst_46740__$1);

(statearr_46852[(24)] = inst_46745__$1);

(statearr_46852[(25)] = inst_46741__$1);

(statearr_46852[(26)] = inst_46743);

return statearr_46852;
})();
if(cljs.core.truth_(inst_46746)){
var statearr_46853_46930 = state_46824__$1;
(statearr_46853_46930[(1)] = (23));

} else {
var statearr_46854_46931 = state_46824__$1;
(statearr_46854_46931[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46825 === (36))){
var state_46824__$1 = state_46824;
var statearr_46855_46932 = state_46824__$1;
(statearr_46855_46932[(2)] = false);

(statearr_46855_46932[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46825 === (41))){
var inst_46799 = (state_46824[(20)]);
var inst_46803 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_46804 = cljs.core.map.call(null,inst_46803,inst_46799);
var inst_46805 = cljs.core.pr_str.call(null,inst_46804);
var inst_46806 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("figwheel-no-load meta-data: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_46805)].join('');
var inst_46807 = figwheel.client.utils.log.call(null,inst_46806);
var state_46824__$1 = state_46824;
var statearr_46856_46933 = state_46824__$1;
(statearr_46856_46933[(2)] = inst_46807);

(statearr_46856_46933[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46825 === (43))){
var inst_46800 = (state_46824[(21)]);
var inst_46810 = (state_46824[(2)]);
var inst_46811 = cljs.core.not_empty.call(null,inst_46800);
var state_46824__$1 = (function (){var statearr_46857 = state_46824;
(statearr_46857[(27)] = inst_46810);

return statearr_46857;
})();
if(cljs.core.truth_(inst_46811)){
var statearr_46858_46934 = state_46824__$1;
(statearr_46858_46934[(1)] = (44));

} else {
var statearr_46859_46935 = state_46824__$1;
(statearr_46859_46935[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46825 === (29))){
var inst_46740 = (state_46824[(23)]);
var inst_46737 = (state_46824[(19)]);
var inst_46745 = (state_46824[(24)]);
var inst_46777 = (state_46824[(16)]);
var inst_46741 = (state_46824[(25)]);
var inst_46743 = (state_46824[(26)]);
var inst_46773 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_46776 = (function (){var all_files = inst_46737;
var res_SINGLEQUOTE_ = inst_46740;
var res = inst_46741;
var files_not_loaded = inst_46743;
var dependencies_that_loaded = inst_46745;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46740,inst_46737,inst_46745,inst_46777,inst_46741,inst_46743,inst_46773,state_val_46825,c__43129__auto__,map__46669,map__46669__$1,opts,before_jsload,on_jsload,reload_dependents,map__46670,map__46670__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__46775){
var map__46860 = p__46775;
var map__46860__$1 = ((((!((map__46860 == null)))?((((map__46860.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46860.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46860):map__46860);
var namespace = cljs.core.get.call(null,map__46860__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46740,inst_46737,inst_46745,inst_46777,inst_46741,inst_46743,inst_46773,state_val_46825,c__43129__auto__,map__46669,map__46669__$1,opts,before_jsload,on_jsload,reload_dependents,map__46670,map__46670__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_46777__$1 = cljs.core.group_by.call(null,inst_46776,inst_46743);
var inst_46779 = (inst_46777__$1 == null);
var inst_46780 = cljs.core.not.call(null,inst_46779);
var state_46824__$1 = (function (){var statearr_46862 = state_46824;
(statearr_46862[(28)] = inst_46773);

(statearr_46862[(16)] = inst_46777__$1);

return statearr_46862;
})();
if(inst_46780){
var statearr_46863_46936 = state_46824__$1;
(statearr_46863_46936[(1)] = (32));

} else {
var statearr_46864_46937 = state_46824__$1;
(statearr_46864_46937[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46825 === (44))){
var inst_46800 = (state_46824[(21)]);
var inst_46813 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_46800);
var inst_46814 = cljs.core.pr_str.call(null,inst_46813);
var inst_46815 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("not required: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_46814)].join('');
var inst_46816 = figwheel.client.utils.log.call(null,inst_46815);
var state_46824__$1 = state_46824;
var statearr_46865_46938 = state_46824__$1;
(statearr_46865_46938[(2)] = inst_46816);

(statearr_46865_46938[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46825 === (6))){
var inst_46718 = (state_46824[(2)]);
var state_46824__$1 = state_46824;
var statearr_46866_46939 = state_46824__$1;
(statearr_46866_46939[(2)] = inst_46718);

(statearr_46866_46939[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46825 === (28))){
var inst_46743 = (state_46824[(26)]);
var inst_46770 = (state_46824[(2)]);
var inst_46771 = cljs.core.not_empty.call(null,inst_46743);
var state_46824__$1 = (function (){var statearr_46867 = state_46824;
(statearr_46867[(29)] = inst_46770);

return statearr_46867;
})();
if(cljs.core.truth_(inst_46771)){
var statearr_46868_46940 = state_46824__$1;
(statearr_46868_46940[(1)] = (29));

} else {
var statearr_46869_46941 = state_46824__$1;
(statearr_46869_46941[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46825 === (25))){
var inst_46741 = (state_46824[(25)]);
var inst_46757 = (state_46824[(2)]);
var inst_46758 = cljs.core.not_empty.call(null,inst_46741);
var state_46824__$1 = (function (){var statearr_46870 = state_46824;
(statearr_46870[(30)] = inst_46757);

return statearr_46870;
})();
if(cljs.core.truth_(inst_46758)){
var statearr_46871_46942 = state_46824__$1;
(statearr_46871_46942[(1)] = (26));

} else {
var statearr_46872_46943 = state_46824__$1;
(statearr_46872_46943[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46825 === (34))){
var inst_46793 = (state_46824[(2)]);
var state_46824__$1 = state_46824;
if(cljs.core.truth_(inst_46793)){
var statearr_46873_46944 = state_46824__$1;
(statearr_46873_46944[(1)] = (38));

} else {
var statearr_46874_46945 = state_46824__$1;
(statearr_46874_46945[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46825 === (17))){
var state_46824__$1 = state_46824;
var statearr_46875_46946 = state_46824__$1;
(statearr_46875_46946[(2)] = recompile_dependents);

(statearr_46875_46946[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46825 === (3))){
var state_46824__$1 = state_46824;
var statearr_46876_46947 = state_46824__$1;
(statearr_46876_46947[(2)] = null);

(statearr_46876_46947[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46825 === (12))){
var inst_46714 = (state_46824[(2)]);
var state_46824__$1 = state_46824;
var statearr_46877_46948 = state_46824__$1;
(statearr_46877_46948[(2)] = inst_46714);

(statearr_46877_46948[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46825 === (2))){
var inst_46676 = (state_46824[(13)]);
var inst_46683 = cljs.core.seq.call(null,inst_46676);
var inst_46684 = inst_46683;
var inst_46685 = null;
var inst_46686 = (0);
var inst_46687 = (0);
var state_46824__$1 = (function (){var statearr_46878 = state_46824;
(statearr_46878[(7)] = inst_46687);

(statearr_46878[(8)] = inst_46686);

(statearr_46878[(9)] = inst_46685);

(statearr_46878[(10)] = inst_46684);

return statearr_46878;
})();
var statearr_46879_46949 = state_46824__$1;
(statearr_46879_46949[(2)] = null);

(statearr_46879_46949[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46825 === (23))){
var inst_46740 = (state_46824[(23)]);
var inst_46737 = (state_46824[(19)]);
var inst_46745 = (state_46824[(24)]);
var inst_46741 = (state_46824[(25)]);
var inst_46743 = (state_46824[(26)]);
var inst_46748 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_46750 = (function (){var all_files = inst_46737;
var res_SINGLEQUOTE_ = inst_46740;
var res = inst_46741;
var files_not_loaded = inst_46743;
var dependencies_that_loaded = inst_46745;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46740,inst_46737,inst_46745,inst_46741,inst_46743,inst_46748,state_val_46825,c__43129__auto__,map__46669,map__46669__$1,opts,before_jsload,on_jsload,reload_dependents,map__46670,map__46670__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__46749){
var map__46880 = p__46749;
var map__46880__$1 = ((((!((map__46880 == null)))?((((map__46880.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46880.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46880):map__46880);
var request_url = cljs.core.get.call(null,map__46880__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46740,inst_46737,inst_46745,inst_46741,inst_46743,inst_46748,state_val_46825,c__43129__auto__,map__46669,map__46669__$1,opts,before_jsload,on_jsload,reload_dependents,map__46670,map__46670__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_46751 = cljs.core.reverse.call(null,inst_46745);
var inst_46752 = cljs.core.map.call(null,inst_46750,inst_46751);
var inst_46753 = cljs.core.pr_str.call(null,inst_46752);
var inst_46754 = figwheel.client.utils.log.call(null,inst_46753);
var state_46824__$1 = (function (){var statearr_46882 = state_46824;
(statearr_46882[(31)] = inst_46748);

return statearr_46882;
})();
var statearr_46883_46950 = state_46824__$1;
(statearr_46883_46950[(2)] = inst_46754);

(statearr_46883_46950[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46825 === (35))){
var state_46824__$1 = state_46824;
var statearr_46884_46951 = state_46824__$1;
(statearr_46884_46951[(2)] = true);

(statearr_46884_46951[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46825 === (19))){
var inst_46727 = (state_46824[(12)]);
var inst_46733 = figwheel.client.file_reloading.expand_files.call(null,inst_46727);
var state_46824__$1 = state_46824;
var statearr_46885_46952 = state_46824__$1;
(statearr_46885_46952[(2)] = inst_46733);

(statearr_46885_46952[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46825 === (11))){
var state_46824__$1 = state_46824;
var statearr_46886_46953 = state_46824__$1;
(statearr_46886_46953[(2)] = null);

(statearr_46886_46953[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46825 === (9))){
var inst_46716 = (state_46824[(2)]);
var state_46824__$1 = state_46824;
var statearr_46887_46954 = state_46824__$1;
(statearr_46887_46954[(2)] = inst_46716);

(statearr_46887_46954[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46825 === (5))){
var inst_46687 = (state_46824[(7)]);
var inst_46686 = (state_46824[(8)]);
var inst_46689 = (inst_46687 < inst_46686);
var inst_46690 = inst_46689;
var state_46824__$1 = state_46824;
if(cljs.core.truth_(inst_46690)){
var statearr_46888_46955 = state_46824__$1;
(statearr_46888_46955[(1)] = (7));

} else {
var statearr_46889_46956 = state_46824__$1;
(statearr_46889_46956[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46825 === (14))){
var inst_46697 = (state_46824[(22)]);
var inst_46706 = cljs.core.first.call(null,inst_46697);
var inst_46707 = figwheel.client.file_reloading.eval_body.call(null,inst_46706,opts);
var inst_46708 = cljs.core.next.call(null,inst_46697);
var inst_46684 = inst_46708;
var inst_46685 = null;
var inst_46686 = (0);
var inst_46687 = (0);
var state_46824__$1 = (function (){var statearr_46890 = state_46824;
(statearr_46890[(7)] = inst_46687);

(statearr_46890[(8)] = inst_46686);

(statearr_46890[(9)] = inst_46685);

(statearr_46890[(10)] = inst_46684);

(statearr_46890[(32)] = inst_46707);

return statearr_46890;
})();
var statearr_46891_46957 = state_46824__$1;
(statearr_46891_46957[(2)] = null);

(statearr_46891_46957[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46825 === (45))){
var state_46824__$1 = state_46824;
var statearr_46892_46958 = state_46824__$1;
(statearr_46892_46958[(2)] = null);

(statearr_46892_46958[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46825 === (26))){
var inst_46740 = (state_46824[(23)]);
var inst_46737 = (state_46824[(19)]);
var inst_46745 = (state_46824[(24)]);
var inst_46741 = (state_46824[(25)]);
var inst_46743 = (state_46824[(26)]);
var inst_46760 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_46762 = (function (){var all_files = inst_46737;
var res_SINGLEQUOTE_ = inst_46740;
var res = inst_46741;
var files_not_loaded = inst_46743;
var dependencies_that_loaded = inst_46745;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46740,inst_46737,inst_46745,inst_46741,inst_46743,inst_46760,state_val_46825,c__43129__auto__,map__46669,map__46669__$1,opts,before_jsload,on_jsload,reload_dependents,map__46670,map__46670__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__46761){
var map__46893 = p__46761;
var map__46893__$1 = ((((!((map__46893 == null)))?((((map__46893.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46893.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46893):map__46893);
var namespace = cljs.core.get.call(null,map__46893__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__46893__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46740,inst_46737,inst_46745,inst_46741,inst_46743,inst_46760,state_val_46825,c__43129__auto__,map__46669,map__46669__$1,opts,before_jsload,on_jsload,reload_dependents,map__46670,map__46670__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_46763 = cljs.core.map.call(null,inst_46762,inst_46741);
var inst_46764 = cljs.core.pr_str.call(null,inst_46763);
var inst_46765 = figwheel.client.utils.log.call(null,inst_46764);
var inst_46766 = (function (){var all_files = inst_46737;
var res_SINGLEQUOTE_ = inst_46740;
var res = inst_46741;
var files_not_loaded = inst_46743;
var dependencies_that_loaded = inst_46745;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46740,inst_46737,inst_46745,inst_46741,inst_46743,inst_46760,inst_46762,inst_46763,inst_46764,inst_46765,state_val_46825,c__43129__auto__,map__46669,map__46669__$1,opts,before_jsload,on_jsload,reload_dependents,map__46670,map__46670__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46740,inst_46737,inst_46745,inst_46741,inst_46743,inst_46760,inst_46762,inst_46763,inst_46764,inst_46765,state_val_46825,c__43129__auto__,map__46669,map__46669__$1,opts,before_jsload,on_jsload,reload_dependents,map__46670,map__46670__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_46767 = setTimeout(inst_46766,(10));
var state_46824__$1 = (function (){var statearr_46895 = state_46824;
(statearr_46895[(33)] = inst_46765);

(statearr_46895[(34)] = inst_46760);

return statearr_46895;
})();
var statearr_46896_46959 = state_46824__$1;
(statearr_46896_46959[(2)] = inst_46767);

(statearr_46896_46959[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46825 === (16))){
var state_46824__$1 = state_46824;
var statearr_46897_46960 = state_46824__$1;
(statearr_46897_46960[(2)] = reload_dependents);

(statearr_46897_46960[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46825 === (38))){
var inst_46777 = (state_46824[(16)]);
var inst_46795 = cljs.core.apply.call(null,cljs.core.hash_map,inst_46777);
var state_46824__$1 = state_46824;
var statearr_46898_46961 = state_46824__$1;
(statearr_46898_46961[(2)] = inst_46795);

(statearr_46898_46961[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46825 === (30))){
var state_46824__$1 = state_46824;
var statearr_46899_46962 = state_46824__$1;
(statearr_46899_46962[(2)] = null);

(statearr_46899_46962[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46825 === (10))){
var inst_46697 = (state_46824[(22)]);
var inst_46699 = cljs.core.chunked_seq_QMARK_.call(null,inst_46697);
var state_46824__$1 = state_46824;
if(inst_46699){
var statearr_46900_46963 = state_46824__$1;
(statearr_46900_46963[(1)] = (13));

} else {
var statearr_46901_46964 = state_46824__$1;
(statearr_46901_46964[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46825 === (18))){
var inst_46731 = (state_46824[(2)]);
var state_46824__$1 = state_46824;
if(cljs.core.truth_(inst_46731)){
var statearr_46902_46965 = state_46824__$1;
(statearr_46902_46965[(1)] = (19));

} else {
var statearr_46903_46966 = state_46824__$1;
(statearr_46903_46966[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46825 === (42))){
var state_46824__$1 = state_46824;
var statearr_46904_46967 = state_46824__$1;
(statearr_46904_46967[(2)] = null);

(statearr_46904_46967[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46825 === (37))){
var inst_46790 = (state_46824[(2)]);
var state_46824__$1 = state_46824;
var statearr_46905_46968 = state_46824__$1;
(statearr_46905_46968[(2)] = inst_46790);

(statearr_46905_46968[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46825 === (8))){
var inst_46697 = (state_46824[(22)]);
var inst_46684 = (state_46824[(10)]);
var inst_46697__$1 = cljs.core.seq.call(null,inst_46684);
var state_46824__$1 = (function (){var statearr_46906 = state_46824;
(statearr_46906[(22)] = inst_46697__$1);

return statearr_46906;
})();
if(inst_46697__$1){
var statearr_46907_46969 = state_46824__$1;
(statearr_46907_46969[(1)] = (10));

} else {
var statearr_46908_46970 = state_46824__$1;
(statearr_46908_46970[(1)] = (11));

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
});})(c__43129__auto__,map__46669,map__46669__$1,opts,before_jsload,on_jsload,reload_dependents,map__46670,map__46670__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__43041__auto__,c__43129__auto__,map__46669,map__46669__$1,opts,before_jsload,on_jsload,reload_dependents,map__46670,map__46670__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__43042__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__43042__auto____0 = (function (){
var statearr_46909 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46909[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__43042__auto__);

(statearr_46909[(1)] = (1));

return statearr_46909;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__43042__auto____1 = (function (state_46824){
while(true){
var ret_value__43043__auto__ = (function (){try{while(true){
var result__43044__auto__ = switch__43041__auto__.call(null,state_46824);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43044__auto__;
}
break;
}
}catch (e46910){if((e46910 instanceof Object)){
var ex__43045__auto__ = e46910;
var statearr_46911_46971 = state_46824;
(statearr_46911_46971[(5)] = ex__43045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46824);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46910;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46972 = state_46824;
state_46824 = G__46972;
continue;
} else {
return ret_value__43043__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__43042__auto__ = function(state_46824){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__43042__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__43042__auto____1.call(this,state_46824);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__43042__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__43042__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__43042__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__43042__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__43042__auto__;
})()
;})(switch__43041__auto__,c__43129__auto__,map__46669,map__46669__$1,opts,before_jsload,on_jsload,reload_dependents,map__46670,map__46670__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__43131__auto__ = (function (){var statearr_46912 = f__43130__auto__.call(null);
(statearr_46912[(6)] = c__43129__auto__);

return statearr_46912;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43131__auto__);
});})(c__43129__auto__,map__46669,map__46669__$1,opts,before_jsload,on_jsload,reload_dependents,map__46670,map__46670__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__43129__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),cljs.core.str.cljs$core$IFn$_invoke$arity$1("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__46975,link){
var map__46976 = p__46975;
var map__46976__$1 = ((((!((map__46976 == null)))?((((map__46976.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46976.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46976):map__46976);
var file = cljs.core.get.call(null,map__46976__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__46976,map__46976__$1,file){
return (function (p1__46973_SHARP_,p2__46974_SHARP_){
if(cljs.core._EQ_.call(null,p1__46973_SHARP_,p2__46974_SHARP_)){
return p1__46973_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__46976,map__46976__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__46979){
var map__46980 = p__46979;
var map__46980__$1 = ((((!((map__46980 == null)))?((((map__46980.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46980.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46980):map__46980);
var match_length = cljs.core.get.call(null,map__46980__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__46980__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__46978_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__46978_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__46982_SHARP_,p2__46983_SHARP_){
return cljs.core.assoc.call(null,p1__46982_SHARP_,cljs.core.get.call(null,p2__46983_SHARP_,key),p2__46983_SHARP_);
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
var loaded_f_datas_46984 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_46984);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_46984);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__46985,p__46986){
var map__46987 = p__46985;
var map__46987__$1 = ((((!((map__46987 == null)))?((((map__46987.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46987.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46987):map__46987);
var on_cssload = cljs.core.get.call(null,map__46987__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__46988 = p__46986;
var map__46988__$1 = ((((!((map__46988 == null)))?((((map__46988.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46988.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46988):map__46988);
var files_msg = map__46988__$1;
var files = cljs.core.get.call(null,map__46988__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1503532144688