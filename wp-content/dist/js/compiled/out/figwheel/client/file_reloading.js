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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__46378_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__46378_SHARP_));
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
var seq__46379 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__46380 = null;
var count__46381 = (0);
var i__46382 = (0);
while(true){
if((i__46382 < count__46381)){
var n = cljs.core._nth.call(null,chunk__46380,i__46382);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__46383 = seq__46379;
var G__46384 = chunk__46380;
var G__46385 = count__46381;
var G__46386 = (i__46382 + (1));
seq__46379 = G__46383;
chunk__46380 = G__46384;
count__46381 = G__46385;
i__46382 = G__46386;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__46379);
if(temp__4657__auto__){
var seq__46379__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46379__$1)){
var c__37576__auto__ = cljs.core.chunk_first.call(null,seq__46379__$1);
var G__46387 = cljs.core.chunk_rest.call(null,seq__46379__$1);
var G__46388 = c__37576__auto__;
var G__46389 = cljs.core.count.call(null,c__37576__auto__);
var G__46390 = (0);
seq__46379 = G__46387;
chunk__46380 = G__46388;
count__46381 = G__46389;
i__46382 = G__46390;
continue;
} else {
var n = cljs.core.first.call(null,seq__46379__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__46391 = cljs.core.next.call(null,seq__46379__$1);
var G__46392 = null;
var G__46393 = (0);
var G__46394 = (0);
seq__46379 = G__46391;
chunk__46380 = G__46392;
count__46381 = G__46393;
i__46382 = G__46394;
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

var seq__46404_46412 = cljs.core.seq.call(null,deps);
var chunk__46405_46413 = null;
var count__46406_46414 = (0);
var i__46407_46415 = (0);
while(true){
if((i__46407_46415 < count__46406_46414)){
var dep_46416 = cljs.core._nth.call(null,chunk__46405_46413,i__46407_46415);
topo_sort_helper_STAR_.call(null,dep_46416,(depth + (1)),state);

var G__46417 = seq__46404_46412;
var G__46418 = chunk__46405_46413;
var G__46419 = count__46406_46414;
var G__46420 = (i__46407_46415 + (1));
seq__46404_46412 = G__46417;
chunk__46405_46413 = G__46418;
count__46406_46414 = G__46419;
i__46407_46415 = G__46420;
continue;
} else {
var temp__4657__auto___46421 = cljs.core.seq.call(null,seq__46404_46412);
if(temp__4657__auto___46421){
var seq__46404_46422__$1 = temp__4657__auto___46421;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46404_46422__$1)){
var c__37576__auto___46423 = cljs.core.chunk_first.call(null,seq__46404_46422__$1);
var G__46424 = cljs.core.chunk_rest.call(null,seq__46404_46422__$1);
var G__46425 = c__37576__auto___46423;
var G__46426 = cljs.core.count.call(null,c__37576__auto___46423);
var G__46427 = (0);
seq__46404_46412 = G__46424;
chunk__46405_46413 = G__46425;
count__46406_46414 = G__46426;
i__46407_46415 = G__46427;
continue;
} else {
var dep_46428 = cljs.core.first.call(null,seq__46404_46422__$1);
topo_sort_helper_STAR_.call(null,dep_46428,(depth + (1)),state);

var G__46429 = cljs.core.next.call(null,seq__46404_46422__$1);
var G__46430 = null;
var G__46431 = (0);
var G__46432 = (0);
seq__46404_46412 = G__46429;
chunk__46405_46413 = G__46430;
count__46406_46414 = G__46431;
i__46407_46415 = G__46432;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__46408){
var vec__46409 = p__46408;
var seq__46410 = cljs.core.seq.call(null,vec__46409);
var first__46411 = cljs.core.first.call(null,seq__46410);
var seq__46410__$1 = cljs.core.next.call(null,seq__46410);
var x = first__46411;
var xs = seq__46410__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__46409,seq__46410,first__46411,seq__46410__$1,x,xs,get_deps__$1){
return (function (p1__46395_SHARP_){
return clojure.set.difference.call(null,p1__46395_SHARP_,x);
});})(vec__46409,seq__46410,first__46411,seq__46410__$1,x,xs,get_deps__$1))
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
var seq__46433 = cljs.core.seq.call(null,provides);
var chunk__46434 = null;
var count__46435 = (0);
var i__46436 = (0);
while(true){
if((i__46436 < count__46435)){
var prov = cljs.core._nth.call(null,chunk__46434,i__46436);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__46437_46445 = cljs.core.seq.call(null,requires);
var chunk__46438_46446 = null;
var count__46439_46447 = (0);
var i__46440_46448 = (0);
while(true){
if((i__46440_46448 < count__46439_46447)){
var req_46449 = cljs.core._nth.call(null,chunk__46438_46446,i__46440_46448);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_46449,prov);

var G__46450 = seq__46437_46445;
var G__46451 = chunk__46438_46446;
var G__46452 = count__46439_46447;
var G__46453 = (i__46440_46448 + (1));
seq__46437_46445 = G__46450;
chunk__46438_46446 = G__46451;
count__46439_46447 = G__46452;
i__46440_46448 = G__46453;
continue;
} else {
var temp__4657__auto___46454 = cljs.core.seq.call(null,seq__46437_46445);
if(temp__4657__auto___46454){
var seq__46437_46455__$1 = temp__4657__auto___46454;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46437_46455__$1)){
var c__37576__auto___46456 = cljs.core.chunk_first.call(null,seq__46437_46455__$1);
var G__46457 = cljs.core.chunk_rest.call(null,seq__46437_46455__$1);
var G__46458 = c__37576__auto___46456;
var G__46459 = cljs.core.count.call(null,c__37576__auto___46456);
var G__46460 = (0);
seq__46437_46445 = G__46457;
chunk__46438_46446 = G__46458;
count__46439_46447 = G__46459;
i__46440_46448 = G__46460;
continue;
} else {
var req_46461 = cljs.core.first.call(null,seq__46437_46455__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_46461,prov);

var G__46462 = cljs.core.next.call(null,seq__46437_46455__$1);
var G__46463 = null;
var G__46464 = (0);
var G__46465 = (0);
seq__46437_46445 = G__46462;
chunk__46438_46446 = G__46463;
count__46439_46447 = G__46464;
i__46440_46448 = G__46465;
continue;
}
} else {
}
}
break;
}

var G__46466 = seq__46433;
var G__46467 = chunk__46434;
var G__46468 = count__46435;
var G__46469 = (i__46436 + (1));
seq__46433 = G__46466;
chunk__46434 = G__46467;
count__46435 = G__46468;
i__46436 = G__46469;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__46433);
if(temp__4657__auto__){
var seq__46433__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46433__$1)){
var c__37576__auto__ = cljs.core.chunk_first.call(null,seq__46433__$1);
var G__46470 = cljs.core.chunk_rest.call(null,seq__46433__$1);
var G__46471 = c__37576__auto__;
var G__46472 = cljs.core.count.call(null,c__37576__auto__);
var G__46473 = (0);
seq__46433 = G__46470;
chunk__46434 = G__46471;
count__46435 = G__46472;
i__46436 = G__46473;
continue;
} else {
var prov = cljs.core.first.call(null,seq__46433__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__46441_46474 = cljs.core.seq.call(null,requires);
var chunk__46442_46475 = null;
var count__46443_46476 = (0);
var i__46444_46477 = (0);
while(true){
if((i__46444_46477 < count__46443_46476)){
var req_46478 = cljs.core._nth.call(null,chunk__46442_46475,i__46444_46477);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_46478,prov);

var G__46479 = seq__46441_46474;
var G__46480 = chunk__46442_46475;
var G__46481 = count__46443_46476;
var G__46482 = (i__46444_46477 + (1));
seq__46441_46474 = G__46479;
chunk__46442_46475 = G__46480;
count__46443_46476 = G__46481;
i__46444_46477 = G__46482;
continue;
} else {
var temp__4657__auto___46483__$1 = cljs.core.seq.call(null,seq__46441_46474);
if(temp__4657__auto___46483__$1){
var seq__46441_46484__$1 = temp__4657__auto___46483__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46441_46484__$1)){
var c__37576__auto___46485 = cljs.core.chunk_first.call(null,seq__46441_46484__$1);
var G__46486 = cljs.core.chunk_rest.call(null,seq__46441_46484__$1);
var G__46487 = c__37576__auto___46485;
var G__46488 = cljs.core.count.call(null,c__37576__auto___46485);
var G__46489 = (0);
seq__46441_46474 = G__46486;
chunk__46442_46475 = G__46487;
count__46443_46476 = G__46488;
i__46444_46477 = G__46489;
continue;
} else {
var req_46490 = cljs.core.first.call(null,seq__46441_46484__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_46490,prov);

var G__46491 = cljs.core.next.call(null,seq__46441_46484__$1);
var G__46492 = null;
var G__46493 = (0);
var G__46494 = (0);
seq__46441_46474 = G__46491;
chunk__46442_46475 = G__46492;
count__46443_46476 = G__46493;
i__46444_46477 = G__46494;
continue;
}
} else {
}
}
break;
}

var G__46495 = cljs.core.next.call(null,seq__46433__$1);
var G__46496 = null;
var G__46497 = (0);
var G__46498 = (0);
seq__46433 = G__46495;
chunk__46434 = G__46496;
count__46435 = G__46497;
i__46436 = G__46498;
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
var seq__46499_46503 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__46500_46504 = null;
var count__46501_46505 = (0);
var i__46502_46506 = (0);
while(true){
if((i__46502_46506 < count__46501_46505)){
var ns_46507 = cljs.core._nth.call(null,chunk__46500_46504,i__46502_46506);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_46507);

var G__46508 = seq__46499_46503;
var G__46509 = chunk__46500_46504;
var G__46510 = count__46501_46505;
var G__46511 = (i__46502_46506 + (1));
seq__46499_46503 = G__46508;
chunk__46500_46504 = G__46509;
count__46501_46505 = G__46510;
i__46502_46506 = G__46511;
continue;
} else {
var temp__4657__auto___46512 = cljs.core.seq.call(null,seq__46499_46503);
if(temp__4657__auto___46512){
var seq__46499_46513__$1 = temp__4657__auto___46512;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46499_46513__$1)){
var c__37576__auto___46514 = cljs.core.chunk_first.call(null,seq__46499_46513__$1);
var G__46515 = cljs.core.chunk_rest.call(null,seq__46499_46513__$1);
var G__46516 = c__37576__auto___46514;
var G__46517 = cljs.core.count.call(null,c__37576__auto___46514);
var G__46518 = (0);
seq__46499_46503 = G__46515;
chunk__46500_46504 = G__46516;
count__46501_46505 = G__46517;
i__46502_46506 = G__46518;
continue;
} else {
var ns_46519 = cljs.core.first.call(null,seq__46499_46513__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_46519);

var G__46520 = cljs.core.next.call(null,seq__46499_46513__$1);
var G__46521 = null;
var G__46522 = (0);
var G__46523 = (0);
seq__46499_46503 = G__46520;
chunk__46500_46504 = G__46521;
count__46501_46505 = G__46522;
i__46502_46506 = G__46523;
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
var G__46524__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__46524 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46525__i = 0, G__46525__a = new Array(arguments.length -  0);
while (G__46525__i < G__46525__a.length) {G__46525__a[G__46525__i] = arguments[G__46525__i + 0]; ++G__46525__i;}
  args = new cljs.core.IndexedSeq(G__46525__a,0,null);
} 
return G__46524__delegate.call(this,args);};
G__46524.cljs$lang$maxFixedArity = 0;
G__46524.cljs$lang$applyTo = (function (arglist__46526){
var args = cljs.core.seq(arglist__46526);
return G__46524__delegate(args);
});
G__46524.cljs$core$IFn$_invoke$arity$variadic = G__46524__delegate;
return G__46524;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__46527 = cljs.core._EQ_;
var expr__46528 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__46527.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__46528))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__46527,expr__46528){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__46527,expr__46528))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__46527,expr__46528){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e46530){if((e46530 instanceof Error)){
var e = e46530;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e46530;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__46527,expr__46528))
} else {
if(cljs.core.truth_(pred__46527.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__46528))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__46527.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__46528))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__46527.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__46528))){
return ((function (pred__46527,expr__46528){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e46531){if((e46531 instanceof Error)){
var e = e46531;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e46531;

}
}})());
});
;})(pred__46527,expr__46528))
} else {
return ((function (pred__46527,expr__46528){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__46527,expr__46528))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__46532,callback){
var map__46533 = p__46532;
var map__46533__$1 = ((((!((map__46533 == null)))?((((map__46533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46533.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46533):map__46533);
var file_msg = map__46533__$1;
var request_url = cljs.core.get.call(null,map__46533__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Attempting to load "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__46533,map__46533__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Successfully loaded "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__46533,map__46533__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__44389__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44389__auto__){
return (function (){
var f__44390__auto__ = (function (){var switch__44301__auto__ = ((function (c__44389__auto__){
return (function (state_46557){
var state_val_46558 = (state_46557[(1)]);
if((state_val_46558 === (7))){
var inst_46553 = (state_46557[(2)]);
var state_46557__$1 = state_46557;
var statearr_46559_46576 = state_46557__$1;
(statearr_46559_46576[(2)] = inst_46553);

(statearr_46559_46576[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46558 === (1))){
var state_46557__$1 = state_46557;
var statearr_46560_46577 = state_46557__$1;
(statearr_46560_46577[(2)] = null);

(statearr_46560_46577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46558 === (4))){
var inst_46537 = (state_46557[(7)]);
var inst_46537__$1 = (state_46557[(2)]);
var state_46557__$1 = (function (){var statearr_46561 = state_46557;
(statearr_46561[(7)] = inst_46537__$1);

return statearr_46561;
})();
if(cljs.core.truth_(inst_46537__$1)){
var statearr_46562_46578 = state_46557__$1;
(statearr_46562_46578[(1)] = (5));

} else {
var statearr_46563_46579 = state_46557__$1;
(statearr_46563_46579[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46558 === (6))){
var state_46557__$1 = state_46557;
var statearr_46564_46580 = state_46557__$1;
(statearr_46564_46580[(2)] = null);

(statearr_46564_46580[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46558 === (3))){
var inst_46555 = (state_46557[(2)]);
var state_46557__$1 = state_46557;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46557__$1,inst_46555);
} else {
if((state_val_46558 === (2))){
var state_46557__$1 = state_46557;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46557__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_46558 === (11))){
var inst_46549 = (state_46557[(2)]);
var state_46557__$1 = (function (){var statearr_46565 = state_46557;
(statearr_46565[(8)] = inst_46549);

return statearr_46565;
})();
var statearr_46566_46581 = state_46557__$1;
(statearr_46566_46581[(2)] = null);

(statearr_46566_46581[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46558 === (9))){
var inst_46541 = (state_46557[(9)]);
var inst_46543 = (state_46557[(10)]);
var inst_46545 = inst_46543.call(null,inst_46541);
var state_46557__$1 = state_46557;
var statearr_46567_46582 = state_46557__$1;
(statearr_46567_46582[(2)] = inst_46545);

(statearr_46567_46582[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46558 === (5))){
var inst_46537 = (state_46557[(7)]);
var inst_46539 = figwheel.client.file_reloading.blocking_load.call(null,inst_46537);
var state_46557__$1 = state_46557;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46557__$1,(8),inst_46539);
} else {
if((state_val_46558 === (10))){
var inst_46541 = (state_46557[(9)]);
var inst_46547 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_46541);
var state_46557__$1 = state_46557;
var statearr_46568_46583 = state_46557__$1;
(statearr_46568_46583[(2)] = inst_46547);

(statearr_46568_46583[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46558 === (8))){
var inst_46537 = (state_46557[(7)]);
var inst_46543 = (state_46557[(10)]);
var inst_46541 = (state_46557[(2)]);
var inst_46542 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_46543__$1 = cljs.core.get.call(null,inst_46542,inst_46537);
var state_46557__$1 = (function (){var statearr_46569 = state_46557;
(statearr_46569[(9)] = inst_46541);

(statearr_46569[(10)] = inst_46543__$1);

return statearr_46569;
})();
if(cljs.core.truth_(inst_46543__$1)){
var statearr_46570_46584 = state_46557__$1;
(statearr_46570_46584[(1)] = (9));

} else {
var statearr_46571_46585 = state_46557__$1;
(statearr_46571_46585[(1)] = (10));

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
});})(c__44389__auto__))
;
return ((function (switch__44301__auto__,c__44389__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__44302__auto__ = null;
var figwheel$client$file_reloading$state_machine__44302__auto____0 = (function (){
var statearr_46572 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46572[(0)] = figwheel$client$file_reloading$state_machine__44302__auto__);

(statearr_46572[(1)] = (1));

return statearr_46572;
});
var figwheel$client$file_reloading$state_machine__44302__auto____1 = (function (state_46557){
while(true){
var ret_value__44303__auto__ = (function (){try{while(true){
var result__44304__auto__ = switch__44301__auto__.call(null,state_46557);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44304__auto__;
}
break;
}
}catch (e46573){if((e46573 instanceof Object)){
var ex__44305__auto__ = e46573;
var statearr_46574_46586 = state_46557;
(statearr_46574_46586[(5)] = ex__44305__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46557);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46573;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46587 = state_46557;
state_46557 = G__46587;
continue;
} else {
return ret_value__44303__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__44302__auto__ = function(state_46557){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__44302__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__44302__auto____1.call(this,state_46557);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__44302__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__44302__auto____0;
figwheel$client$file_reloading$state_machine__44302__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__44302__auto____1;
return figwheel$client$file_reloading$state_machine__44302__auto__;
})()
;})(switch__44301__auto__,c__44389__auto__))
})();
var state__44391__auto__ = (function (){var statearr_46575 = f__44390__auto__.call(null);
(statearr_46575[(6)] = c__44389__auto__);

return statearr_46575;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44391__auto__);
});})(c__44389__auto__))
);

return c__44389__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__46588,callback){
var map__46589 = p__46588;
var map__46589__$1 = ((((!((map__46589 == null)))?((((map__46589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46589.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46589):map__46589);
var file_msg = map__46589__$1;
var namespace = cljs.core.get.call(null,map__46589__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__46589,map__46589__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__46589,map__46589__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__46591){
var map__46592 = p__46591;
var map__46592__$1 = ((((!((map__46592 == null)))?((((map__46592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46592.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46592):map__46592);
var file_msg = map__46592__$1;
var namespace = cljs.core.get.call(null,map__46592__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__46594){
var map__46595 = p__46594;
var map__46595__$1 = ((((!((map__46595 == null)))?((((map__46595.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46595.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46595):map__46595);
var file_msg = map__46595__$1;
var namespace = cljs.core.get.call(null,map__46595__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__46597,callback){
var map__46598 = p__46597;
var map__46598__$1 = ((((!((map__46598 == null)))?((((map__46598.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46598.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46598):map__46598);
var file_msg = map__46598__$1;
var request_url = cljs.core.get.call(null,map__46598__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__46598__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__44389__auto___46648 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44389__auto___46648,out){
return (function (){
var f__44390__auto__ = (function (){var switch__44301__auto__ = ((function (c__44389__auto___46648,out){
return (function (state_46633){
var state_val_46634 = (state_46633[(1)]);
if((state_val_46634 === (1))){
var inst_46607 = cljs.core.seq.call(null,files);
var inst_46608 = cljs.core.first.call(null,inst_46607);
var inst_46609 = cljs.core.next.call(null,inst_46607);
var inst_46610 = files;
var state_46633__$1 = (function (){var statearr_46635 = state_46633;
(statearr_46635[(7)] = inst_46609);

(statearr_46635[(8)] = inst_46610);

(statearr_46635[(9)] = inst_46608);

return statearr_46635;
})();
var statearr_46636_46649 = state_46633__$1;
(statearr_46636_46649[(2)] = null);

(statearr_46636_46649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46634 === (2))){
var inst_46610 = (state_46633[(8)]);
var inst_46616 = (state_46633[(10)]);
var inst_46615 = cljs.core.seq.call(null,inst_46610);
var inst_46616__$1 = cljs.core.first.call(null,inst_46615);
var inst_46617 = cljs.core.next.call(null,inst_46615);
var inst_46618 = (inst_46616__$1 == null);
var inst_46619 = cljs.core.not.call(null,inst_46618);
var state_46633__$1 = (function (){var statearr_46637 = state_46633;
(statearr_46637[(11)] = inst_46617);

(statearr_46637[(10)] = inst_46616__$1);

return statearr_46637;
})();
if(inst_46619){
var statearr_46638_46650 = state_46633__$1;
(statearr_46638_46650[(1)] = (4));

} else {
var statearr_46639_46651 = state_46633__$1;
(statearr_46639_46651[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46634 === (3))){
var inst_46631 = (state_46633[(2)]);
var state_46633__$1 = state_46633;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46633__$1,inst_46631);
} else {
if((state_val_46634 === (4))){
var inst_46616 = (state_46633[(10)]);
var inst_46621 = figwheel.client.file_reloading.reload_js_file.call(null,inst_46616);
var state_46633__$1 = state_46633;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46633__$1,(7),inst_46621);
} else {
if((state_val_46634 === (5))){
var inst_46627 = cljs.core.async.close_BANG_.call(null,out);
var state_46633__$1 = state_46633;
var statearr_46640_46652 = state_46633__$1;
(statearr_46640_46652[(2)] = inst_46627);

(statearr_46640_46652[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46634 === (6))){
var inst_46629 = (state_46633[(2)]);
var state_46633__$1 = state_46633;
var statearr_46641_46653 = state_46633__$1;
(statearr_46641_46653[(2)] = inst_46629);

(statearr_46641_46653[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46634 === (7))){
var inst_46617 = (state_46633[(11)]);
var inst_46623 = (state_46633[(2)]);
var inst_46624 = cljs.core.async.put_BANG_.call(null,out,inst_46623);
var inst_46610 = inst_46617;
var state_46633__$1 = (function (){var statearr_46642 = state_46633;
(statearr_46642[(8)] = inst_46610);

(statearr_46642[(12)] = inst_46624);

return statearr_46642;
})();
var statearr_46643_46654 = state_46633__$1;
(statearr_46643_46654[(2)] = null);

(statearr_46643_46654[(1)] = (2));


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
});})(c__44389__auto___46648,out))
;
return ((function (switch__44301__auto__,c__44389__auto___46648,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__44302__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__44302__auto____0 = (function (){
var statearr_46644 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46644[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__44302__auto__);

(statearr_46644[(1)] = (1));

return statearr_46644;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__44302__auto____1 = (function (state_46633){
while(true){
var ret_value__44303__auto__ = (function (){try{while(true){
var result__44304__auto__ = switch__44301__auto__.call(null,state_46633);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44304__auto__;
}
break;
}
}catch (e46645){if((e46645 instanceof Object)){
var ex__44305__auto__ = e46645;
var statearr_46646_46655 = state_46633;
(statearr_46646_46655[(5)] = ex__44305__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46633);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46645;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46656 = state_46633;
state_46633 = G__46656;
continue;
} else {
return ret_value__44303__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__44302__auto__ = function(state_46633){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__44302__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__44302__auto____1.call(this,state_46633);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__44302__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__44302__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__44302__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__44302__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__44302__auto__;
})()
;})(switch__44301__auto__,c__44389__auto___46648,out))
})();
var state__44391__auto__ = (function (){var statearr_46647 = f__44390__auto__.call(null);
(statearr_46647[(6)] = c__44389__auto___46648);

return statearr_46647;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44391__auto__);
});})(c__44389__auto___46648,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__46657,opts){
var map__46658 = p__46657;
var map__46658__$1 = ((((!((map__46658 == null)))?((((map__46658.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46658.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46658):map__46658);
var eval_body = cljs.core.get.call(null,map__46658__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__46658__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e46660){var e = e46660;
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
return (function (p1__46661_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__46661_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__46662){
var vec__46663 = p__46662;
var k = cljs.core.nth.call(null,vec__46663,(0),null);
var v = cljs.core.nth.call(null,vec__46663,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__46666){
var vec__46667 = p__46666;
var k = cljs.core.nth.call(null,vec__46667,(0),null);
var v = cljs.core.nth.call(null,vec__46667,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__46673,p__46674){
var map__46675 = p__46673;
var map__46675__$1 = ((((!((map__46675 == null)))?((((map__46675.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46675.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46675):map__46675);
var opts = map__46675__$1;
var before_jsload = cljs.core.get.call(null,map__46675__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__46675__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__46675__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__46676 = p__46674;
var map__46676__$1 = ((((!((map__46676 == null)))?((((map__46676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46676.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46676):map__46676);
var msg = map__46676__$1;
var files = cljs.core.get.call(null,map__46676__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__46676__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__46676__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__44389__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44389__auto__,map__46675,map__46675__$1,opts,before_jsload,on_jsload,reload_dependents,map__46676,map__46676__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__44390__auto__ = (function (){var switch__44301__auto__ = ((function (c__44389__auto__,map__46675,map__46675__$1,opts,before_jsload,on_jsload,reload_dependents,map__46676,map__46676__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_46830){
var state_val_46831 = (state_46830[(1)]);
if((state_val_46831 === (7))){
var inst_46692 = (state_46830[(7)]);
var inst_46690 = (state_46830[(8)]);
var inst_46693 = (state_46830[(9)]);
var inst_46691 = (state_46830[(10)]);
var inst_46698 = cljs.core._nth.call(null,inst_46691,inst_46693);
var inst_46699 = figwheel.client.file_reloading.eval_body.call(null,inst_46698,opts);
var inst_46700 = (inst_46693 + (1));
var tmp46832 = inst_46692;
var tmp46833 = inst_46690;
var tmp46834 = inst_46691;
var inst_46690__$1 = tmp46833;
var inst_46691__$1 = tmp46834;
var inst_46692__$1 = tmp46832;
var inst_46693__$1 = inst_46700;
var state_46830__$1 = (function (){var statearr_46835 = state_46830;
(statearr_46835[(7)] = inst_46692__$1);

(statearr_46835[(8)] = inst_46690__$1);

(statearr_46835[(9)] = inst_46693__$1);

(statearr_46835[(10)] = inst_46691__$1);

(statearr_46835[(11)] = inst_46699);

return statearr_46835;
})();
var statearr_46836_46919 = state_46830__$1;
(statearr_46836_46919[(2)] = null);

(statearr_46836_46919[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46831 === (20))){
var inst_46733 = (state_46830[(12)]);
var inst_46741 = figwheel.client.file_reloading.sort_files.call(null,inst_46733);
var state_46830__$1 = state_46830;
var statearr_46837_46920 = state_46830__$1;
(statearr_46837_46920[(2)] = inst_46741);

(statearr_46837_46920[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46831 === (27))){
var state_46830__$1 = state_46830;
var statearr_46838_46921 = state_46830__$1;
(statearr_46838_46921[(2)] = null);

(statearr_46838_46921[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46831 === (1))){
var inst_46682 = (state_46830[(13)]);
var inst_46679 = before_jsload.call(null,files);
var inst_46680 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_46681 = (function (){return ((function (inst_46682,inst_46679,inst_46680,state_val_46831,c__44389__auto__,map__46675,map__46675__$1,opts,before_jsload,on_jsload,reload_dependents,map__46676,map__46676__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__46670_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__46670_SHARP_);
});
;})(inst_46682,inst_46679,inst_46680,state_val_46831,c__44389__auto__,map__46675,map__46675__$1,opts,before_jsload,on_jsload,reload_dependents,map__46676,map__46676__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_46682__$1 = cljs.core.filter.call(null,inst_46681,files);
var inst_46683 = cljs.core.not_empty.call(null,inst_46682__$1);
var state_46830__$1 = (function (){var statearr_46839 = state_46830;
(statearr_46839[(13)] = inst_46682__$1);

(statearr_46839[(14)] = inst_46679);

(statearr_46839[(15)] = inst_46680);

return statearr_46839;
})();
if(cljs.core.truth_(inst_46683)){
var statearr_46840_46922 = state_46830__$1;
(statearr_46840_46922[(1)] = (2));

} else {
var statearr_46841_46923 = state_46830__$1;
(statearr_46841_46923[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46831 === (24))){
var state_46830__$1 = state_46830;
var statearr_46842_46924 = state_46830__$1;
(statearr_46842_46924[(2)] = null);

(statearr_46842_46924[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46831 === (39))){
var inst_46783 = (state_46830[(16)]);
var state_46830__$1 = state_46830;
var statearr_46843_46925 = state_46830__$1;
(statearr_46843_46925[(2)] = inst_46783);

(statearr_46843_46925[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46831 === (46))){
var inst_46825 = (state_46830[(2)]);
var state_46830__$1 = state_46830;
var statearr_46844_46926 = state_46830__$1;
(statearr_46844_46926[(2)] = inst_46825);

(statearr_46844_46926[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46831 === (4))){
var inst_46727 = (state_46830[(2)]);
var inst_46728 = cljs.core.List.EMPTY;
var inst_46729 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_46728);
var inst_46730 = (function (){return ((function (inst_46727,inst_46728,inst_46729,state_val_46831,c__44389__auto__,map__46675,map__46675__$1,opts,before_jsload,on_jsload,reload_dependents,map__46676,map__46676__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__46671_SHARP_){
var and__36744__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__46671_SHARP_);
if(cljs.core.truth_(and__36744__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__46671_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__46671_SHARP_)));
} else {
return and__36744__auto__;
}
});
;})(inst_46727,inst_46728,inst_46729,state_val_46831,c__44389__auto__,map__46675,map__46675__$1,opts,before_jsload,on_jsload,reload_dependents,map__46676,map__46676__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_46731 = cljs.core.filter.call(null,inst_46730,files);
var inst_46732 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_46733 = cljs.core.concat.call(null,inst_46731,inst_46732);
var state_46830__$1 = (function (){var statearr_46845 = state_46830;
(statearr_46845[(12)] = inst_46733);

(statearr_46845[(17)] = inst_46727);

(statearr_46845[(18)] = inst_46729);

return statearr_46845;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_46846_46927 = state_46830__$1;
(statearr_46846_46927[(1)] = (16));

} else {
var statearr_46847_46928 = state_46830__$1;
(statearr_46847_46928[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46831 === (15))){
var inst_46717 = (state_46830[(2)]);
var state_46830__$1 = state_46830;
var statearr_46848_46929 = state_46830__$1;
(statearr_46848_46929[(2)] = inst_46717);

(statearr_46848_46929[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46831 === (21))){
var inst_46743 = (state_46830[(19)]);
var inst_46743__$1 = (state_46830[(2)]);
var inst_46744 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_46743__$1);
var state_46830__$1 = (function (){var statearr_46849 = state_46830;
(statearr_46849[(19)] = inst_46743__$1);

return statearr_46849;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46830__$1,(22),inst_46744);
} else {
if((state_val_46831 === (31))){
var inst_46828 = (state_46830[(2)]);
var state_46830__$1 = state_46830;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46830__$1,inst_46828);
} else {
if((state_val_46831 === (32))){
var inst_46783 = (state_46830[(16)]);
var inst_46788 = inst_46783.cljs$lang$protocol_mask$partition0$;
var inst_46789 = (inst_46788 & (64));
var inst_46790 = inst_46783.cljs$core$ISeq$;
var inst_46791 = (cljs.core.PROTOCOL_SENTINEL === inst_46790);
var inst_46792 = (inst_46789) || (inst_46791);
var state_46830__$1 = state_46830;
if(cljs.core.truth_(inst_46792)){
var statearr_46850_46930 = state_46830__$1;
(statearr_46850_46930[(1)] = (35));

} else {
var statearr_46851_46931 = state_46830__$1;
(statearr_46851_46931[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46831 === (40))){
var inst_46805 = (state_46830[(20)]);
var inst_46804 = (state_46830[(2)]);
var inst_46805__$1 = cljs.core.get.call(null,inst_46804,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_46806 = cljs.core.get.call(null,inst_46804,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_46807 = cljs.core.not_empty.call(null,inst_46805__$1);
var state_46830__$1 = (function (){var statearr_46852 = state_46830;
(statearr_46852[(20)] = inst_46805__$1);

(statearr_46852[(21)] = inst_46806);

return statearr_46852;
})();
if(cljs.core.truth_(inst_46807)){
var statearr_46853_46932 = state_46830__$1;
(statearr_46853_46932[(1)] = (41));

} else {
var statearr_46854_46933 = state_46830__$1;
(statearr_46854_46933[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46831 === (33))){
var state_46830__$1 = state_46830;
var statearr_46855_46934 = state_46830__$1;
(statearr_46855_46934[(2)] = false);

(statearr_46855_46934[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46831 === (13))){
var inst_46703 = (state_46830[(22)]);
var inst_46707 = cljs.core.chunk_first.call(null,inst_46703);
var inst_46708 = cljs.core.chunk_rest.call(null,inst_46703);
var inst_46709 = cljs.core.count.call(null,inst_46707);
var inst_46690 = inst_46708;
var inst_46691 = inst_46707;
var inst_46692 = inst_46709;
var inst_46693 = (0);
var state_46830__$1 = (function (){var statearr_46856 = state_46830;
(statearr_46856[(7)] = inst_46692);

(statearr_46856[(8)] = inst_46690);

(statearr_46856[(9)] = inst_46693);

(statearr_46856[(10)] = inst_46691);

return statearr_46856;
})();
var statearr_46857_46935 = state_46830__$1;
(statearr_46857_46935[(2)] = null);

(statearr_46857_46935[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46831 === (22))){
var inst_46747 = (state_46830[(23)]);
var inst_46743 = (state_46830[(19)]);
var inst_46746 = (state_46830[(24)]);
var inst_46751 = (state_46830[(25)]);
var inst_46746__$1 = (state_46830[(2)]);
var inst_46747__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_46746__$1);
var inst_46748 = (function (){var all_files = inst_46743;
var res_SINGLEQUOTE_ = inst_46746__$1;
var res = inst_46747__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_46747,inst_46743,inst_46746,inst_46751,inst_46746__$1,inst_46747__$1,state_val_46831,c__44389__auto__,map__46675,map__46675__$1,opts,before_jsload,on_jsload,reload_dependents,map__46676,map__46676__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__46672_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__46672_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_46747,inst_46743,inst_46746,inst_46751,inst_46746__$1,inst_46747__$1,state_val_46831,c__44389__auto__,map__46675,map__46675__$1,opts,before_jsload,on_jsload,reload_dependents,map__46676,map__46676__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_46749 = cljs.core.filter.call(null,inst_46748,inst_46746__$1);
var inst_46750 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_46751__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_46750);
var inst_46752 = cljs.core.not_empty.call(null,inst_46751__$1);
var state_46830__$1 = (function (){var statearr_46858 = state_46830;
(statearr_46858[(23)] = inst_46747__$1);

(statearr_46858[(24)] = inst_46746__$1);

(statearr_46858[(25)] = inst_46751__$1);

(statearr_46858[(26)] = inst_46749);

return statearr_46858;
})();
if(cljs.core.truth_(inst_46752)){
var statearr_46859_46936 = state_46830__$1;
(statearr_46859_46936[(1)] = (23));

} else {
var statearr_46860_46937 = state_46830__$1;
(statearr_46860_46937[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46831 === (36))){
var state_46830__$1 = state_46830;
var statearr_46861_46938 = state_46830__$1;
(statearr_46861_46938[(2)] = false);

(statearr_46861_46938[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46831 === (41))){
var inst_46805 = (state_46830[(20)]);
var inst_46809 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_46810 = cljs.core.map.call(null,inst_46809,inst_46805);
var inst_46811 = cljs.core.pr_str.call(null,inst_46810);
var inst_46812 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("figwheel-no-load meta-data: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_46811)].join('');
var inst_46813 = figwheel.client.utils.log.call(null,inst_46812);
var state_46830__$1 = state_46830;
var statearr_46862_46939 = state_46830__$1;
(statearr_46862_46939[(2)] = inst_46813);

(statearr_46862_46939[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46831 === (43))){
var inst_46806 = (state_46830[(21)]);
var inst_46816 = (state_46830[(2)]);
var inst_46817 = cljs.core.not_empty.call(null,inst_46806);
var state_46830__$1 = (function (){var statearr_46863 = state_46830;
(statearr_46863[(27)] = inst_46816);

return statearr_46863;
})();
if(cljs.core.truth_(inst_46817)){
var statearr_46864_46940 = state_46830__$1;
(statearr_46864_46940[(1)] = (44));

} else {
var statearr_46865_46941 = state_46830__$1;
(statearr_46865_46941[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46831 === (29))){
var inst_46747 = (state_46830[(23)]);
var inst_46783 = (state_46830[(16)]);
var inst_46743 = (state_46830[(19)]);
var inst_46746 = (state_46830[(24)]);
var inst_46751 = (state_46830[(25)]);
var inst_46749 = (state_46830[(26)]);
var inst_46779 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_46782 = (function (){var all_files = inst_46743;
var res_SINGLEQUOTE_ = inst_46746;
var res = inst_46747;
var files_not_loaded = inst_46749;
var dependencies_that_loaded = inst_46751;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46747,inst_46783,inst_46743,inst_46746,inst_46751,inst_46749,inst_46779,state_val_46831,c__44389__auto__,map__46675,map__46675__$1,opts,before_jsload,on_jsload,reload_dependents,map__46676,map__46676__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__46781){
var map__46866 = p__46781;
var map__46866__$1 = ((((!((map__46866 == null)))?((((map__46866.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46866.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46866):map__46866);
var namespace = cljs.core.get.call(null,map__46866__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46747,inst_46783,inst_46743,inst_46746,inst_46751,inst_46749,inst_46779,state_val_46831,c__44389__auto__,map__46675,map__46675__$1,opts,before_jsload,on_jsload,reload_dependents,map__46676,map__46676__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_46783__$1 = cljs.core.group_by.call(null,inst_46782,inst_46749);
var inst_46785 = (inst_46783__$1 == null);
var inst_46786 = cljs.core.not.call(null,inst_46785);
var state_46830__$1 = (function (){var statearr_46868 = state_46830;
(statearr_46868[(28)] = inst_46779);

(statearr_46868[(16)] = inst_46783__$1);

return statearr_46868;
})();
if(inst_46786){
var statearr_46869_46942 = state_46830__$1;
(statearr_46869_46942[(1)] = (32));

} else {
var statearr_46870_46943 = state_46830__$1;
(statearr_46870_46943[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46831 === (44))){
var inst_46806 = (state_46830[(21)]);
var inst_46819 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_46806);
var inst_46820 = cljs.core.pr_str.call(null,inst_46819);
var inst_46821 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("not required: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_46820)].join('');
var inst_46822 = figwheel.client.utils.log.call(null,inst_46821);
var state_46830__$1 = state_46830;
var statearr_46871_46944 = state_46830__$1;
(statearr_46871_46944[(2)] = inst_46822);

(statearr_46871_46944[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46831 === (6))){
var inst_46724 = (state_46830[(2)]);
var state_46830__$1 = state_46830;
var statearr_46872_46945 = state_46830__$1;
(statearr_46872_46945[(2)] = inst_46724);

(statearr_46872_46945[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46831 === (28))){
var inst_46749 = (state_46830[(26)]);
var inst_46776 = (state_46830[(2)]);
var inst_46777 = cljs.core.not_empty.call(null,inst_46749);
var state_46830__$1 = (function (){var statearr_46873 = state_46830;
(statearr_46873[(29)] = inst_46776);

return statearr_46873;
})();
if(cljs.core.truth_(inst_46777)){
var statearr_46874_46946 = state_46830__$1;
(statearr_46874_46946[(1)] = (29));

} else {
var statearr_46875_46947 = state_46830__$1;
(statearr_46875_46947[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46831 === (25))){
var inst_46747 = (state_46830[(23)]);
var inst_46763 = (state_46830[(2)]);
var inst_46764 = cljs.core.not_empty.call(null,inst_46747);
var state_46830__$1 = (function (){var statearr_46876 = state_46830;
(statearr_46876[(30)] = inst_46763);

return statearr_46876;
})();
if(cljs.core.truth_(inst_46764)){
var statearr_46877_46948 = state_46830__$1;
(statearr_46877_46948[(1)] = (26));

} else {
var statearr_46878_46949 = state_46830__$1;
(statearr_46878_46949[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46831 === (34))){
var inst_46799 = (state_46830[(2)]);
var state_46830__$1 = state_46830;
if(cljs.core.truth_(inst_46799)){
var statearr_46879_46950 = state_46830__$1;
(statearr_46879_46950[(1)] = (38));

} else {
var statearr_46880_46951 = state_46830__$1;
(statearr_46880_46951[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46831 === (17))){
var state_46830__$1 = state_46830;
var statearr_46881_46952 = state_46830__$1;
(statearr_46881_46952[(2)] = recompile_dependents);

(statearr_46881_46952[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46831 === (3))){
var state_46830__$1 = state_46830;
var statearr_46882_46953 = state_46830__$1;
(statearr_46882_46953[(2)] = null);

(statearr_46882_46953[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46831 === (12))){
var inst_46720 = (state_46830[(2)]);
var state_46830__$1 = state_46830;
var statearr_46883_46954 = state_46830__$1;
(statearr_46883_46954[(2)] = inst_46720);

(statearr_46883_46954[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46831 === (2))){
var inst_46682 = (state_46830[(13)]);
var inst_46689 = cljs.core.seq.call(null,inst_46682);
var inst_46690 = inst_46689;
var inst_46691 = null;
var inst_46692 = (0);
var inst_46693 = (0);
var state_46830__$1 = (function (){var statearr_46884 = state_46830;
(statearr_46884[(7)] = inst_46692);

(statearr_46884[(8)] = inst_46690);

(statearr_46884[(9)] = inst_46693);

(statearr_46884[(10)] = inst_46691);

return statearr_46884;
})();
var statearr_46885_46955 = state_46830__$1;
(statearr_46885_46955[(2)] = null);

(statearr_46885_46955[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46831 === (23))){
var inst_46747 = (state_46830[(23)]);
var inst_46743 = (state_46830[(19)]);
var inst_46746 = (state_46830[(24)]);
var inst_46751 = (state_46830[(25)]);
var inst_46749 = (state_46830[(26)]);
var inst_46754 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_46756 = (function (){var all_files = inst_46743;
var res_SINGLEQUOTE_ = inst_46746;
var res = inst_46747;
var files_not_loaded = inst_46749;
var dependencies_that_loaded = inst_46751;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46747,inst_46743,inst_46746,inst_46751,inst_46749,inst_46754,state_val_46831,c__44389__auto__,map__46675,map__46675__$1,opts,before_jsload,on_jsload,reload_dependents,map__46676,map__46676__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__46755){
var map__46886 = p__46755;
var map__46886__$1 = ((((!((map__46886 == null)))?((((map__46886.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46886.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46886):map__46886);
var request_url = cljs.core.get.call(null,map__46886__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46747,inst_46743,inst_46746,inst_46751,inst_46749,inst_46754,state_val_46831,c__44389__auto__,map__46675,map__46675__$1,opts,before_jsload,on_jsload,reload_dependents,map__46676,map__46676__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_46757 = cljs.core.reverse.call(null,inst_46751);
var inst_46758 = cljs.core.map.call(null,inst_46756,inst_46757);
var inst_46759 = cljs.core.pr_str.call(null,inst_46758);
var inst_46760 = figwheel.client.utils.log.call(null,inst_46759);
var state_46830__$1 = (function (){var statearr_46888 = state_46830;
(statearr_46888[(31)] = inst_46754);

return statearr_46888;
})();
var statearr_46889_46956 = state_46830__$1;
(statearr_46889_46956[(2)] = inst_46760);

(statearr_46889_46956[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46831 === (35))){
var state_46830__$1 = state_46830;
var statearr_46890_46957 = state_46830__$1;
(statearr_46890_46957[(2)] = true);

(statearr_46890_46957[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46831 === (19))){
var inst_46733 = (state_46830[(12)]);
var inst_46739 = figwheel.client.file_reloading.expand_files.call(null,inst_46733);
var state_46830__$1 = state_46830;
var statearr_46891_46958 = state_46830__$1;
(statearr_46891_46958[(2)] = inst_46739);

(statearr_46891_46958[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46831 === (11))){
var state_46830__$1 = state_46830;
var statearr_46892_46959 = state_46830__$1;
(statearr_46892_46959[(2)] = null);

(statearr_46892_46959[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46831 === (9))){
var inst_46722 = (state_46830[(2)]);
var state_46830__$1 = state_46830;
var statearr_46893_46960 = state_46830__$1;
(statearr_46893_46960[(2)] = inst_46722);

(statearr_46893_46960[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46831 === (5))){
var inst_46692 = (state_46830[(7)]);
var inst_46693 = (state_46830[(9)]);
var inst_46695 = (inst_46693 < inst_46692);
var inst_46696 = inst_46695;
var state_46830__$1 = state_46830;
if(cljs.core.truth_(inst_46696)){
var statearr_46894_46961 = state_46830__$1;
(statearr_46894_46961[(1)] = (7));

} else {
var statearr_46895_46962 = state_46830__$1;
(statearr_46895_46962[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46831 === (14))){
var inst_46703 = (state_46830[(22)]);
var inst_46712 = cljs.core.first.call(null,inst_46703);
var inst_46713 = figwheel.client.file_reloading.eval_body.call(null,inst_46712,opts);
var inst_46714 = cljs.core.next.call(null,inst_46703);
var inst_46690 = inst_46714;
var inst_46691 = null;
var inst_46692 = (0);
var inst_46693 = (0);
var state_46830__$1 = (function (){var statearr_46896 = state_46830;
(statearr_46896[(7)] = inst_46692);

(statearr_46896[(8)] = inst_46690);

(statearr_46896[(32)] = inst_46713);

(statearr_46896[(9)] = inst_46693);

(statearr_46896[(10)] = inst_46691);

return statearr_46896;
})();
var statearr_46897_46963 = state_46830__$1;
(statearr_46897_46963[(2)] = null);

(statearr_46897_46963[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46831 === (45))){
var state_46830__$1 = state_46830;
var statearr_46898_46964 = state_46830__$1;
(statearr_46898_46964[(2)] = null);

(statearr_46898_46964[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46831 === (26))){
var inst_46747 = (state_46830[(23)]);
var inst_46743 = (state_46830[(19)]);
var inst_46746 = (state_46830[(24)]);
var inst_46751 = (state_46830[(25)]);
var inst_46749 = (state_46830[(26)]);
var inst_46766 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_46768 = (function (){var all_files = inst_46743;
var res_SINGLEQUOTE_ = inst_46746;
var res = inst_46747;
var files_not_loaded = inst_46749;
var dependencies_that_loaded = inst_46751;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46747,inst_46743,inst_46746,inst_46751,inst_46749,inst_46766,state_val_46831,c__44389__auto__,map__46675,map__46675__$1,opts,before_jsload,on_jsload,reload_dependents,map__46676,map__46676__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__46767){
var map__46899 = p__46767;
var map__46899__$1 = ((((!((map__46899 == null)))?((((map__46899.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46899.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46899):map__46899);
var namespace = cljs.core.get.call(null,map__46899__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__46899__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46747,inst_46743,inst_46746,inst_46751,inst_46749,inst_46766,state_val_46831,c__44389__auto__,map__46675,map__46675__$1,opts,before_jsload,on_jsload,reload_dependents,map__46676,map__46676__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_46769 = cljs.core.map.call(null,inst_46768,inst_46747);
var inst_46770 = cljs.core.pr_str.call(null,inst_46769);
var inst_46771 = figwheel.client.utils.log.call(null,inst_46770);
var inst_46772 = (function (){var all_files = inst_46743;
var res_SINGLEQUOTE_ = inst_46746;
var res = inst_46747;
var files_not_loaded = inst_46749;
var dependencies_that_loaded = inst_46751;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46747,inst_46743,inst_46746,inst_46751,inst_46749,inst_46766,inst_46768,inst_46769,inst_46770,inst_46771,state_val_46831,c__44389__auto__,map__46675,map__46675__$1,opts,before_jsload,on_jsload,reload_dependents,map__46676,map__46676__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46747,inst_46743,inst_46746,inst_46751,inst_46749,inst_46766,inst_46768,inst_46769,inst_46770,inst_46771,state_val_46831,c__44389__auto__,map__46675,map__46675__$1,opts,before_jsload,on_jsload,reload_dependents,map__46676,map__46676__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_46773 = setTimeout(inst_46772,(10));
var state_46830__$1 = (function (){var statearr_46901 = state_46830;
(statearr_46901[(33)] = inst_46766);

(statearr_46901[(34)] = inst_46771);

return statearr_46901;
})();
var statearr_46902_46965 = state_46830__$1;
(statearr_46902_46965[(2)] = inst_46773);

(statearr_46902_46965[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46831 === (16))){
var state_46830__$1 = state_46830;
var statearr_46903_46966 = state_46830__$1;
(statearr_46903_46966[(2)] = reload_dependents);

(statearr_46903_46966[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46831 === (38))){
var inst_46783 = (state_46830[(16)]);
var inst_46801 = cljs.core.apply.call(null,cljs.core.hash_map,inst_46783);
var state_46830__$1 = state_46830;
var statearr_46904_46967 = state_46830__$1;
(statearr_46904_46967[(2)] = inst_46801);

(statearr_46904_46967[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46831 === (30))){
var state_46830__$1 = state_46830;
var statearr_46905_46968 = state_46830__$1;
(statearr_46905_46968[(2)] = null);

(statearr_46905_46968[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46831 === (10))){
var inst_46703 = (state_46830[(22)]);
var inst_46705 = cljs.core.chunked_seq_QMARK_.call(null,inst_46703);
var state_46830__$1 = state_46830;
if(inst_46705){
var statearr_46906_46969 = state_46830__$1;
(statearr_46906_46969[(1)] = (13));

} else {
var statearr_46907_46970 = state_46830__$1;
(statearr_46907_46970[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46831 === (18))){
var inst_46737 = (state_46830[(2)]);
var state_46830__$1 = state_46830;
if(cljs.core.truth_(inst_46737)){
var statearr_46908_46971 = state_46830__$1;
(statearr_46908_46971[(1)] = (19));

} else {
var statearr_46909_46972 = state_46830__$1;
(statearr_46909_46972[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46831 === (42))){
var state_46830__$1 = state_46830;
var statearr_46910_46973 = state_46830__$1;
(statearr_46910_46973[(2)] = null);

(statearr_46910_46973[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46831 === (37))){
var inst_46796 = (state_46830[(2)]);
var state_46830__$1 = state_46830;
var statearr_46911_46974 = state_46830__$1;
(statearr_46911_46974[(2)] = inst_46796);

(statearr_46911_46974[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46831 === (8))){
var inst_46690 = (state_46830[(8)]);
var inst_46703 = (state_46830[(22)]);
var inst_46703__$1 = cljs.core.seq.call(null,inst_46690);
var state_46830__$1 = (function (){var statearr_46912 = state_46830;
(statearr_46912[(22)] = inst_46703__$1);

return statearr_46912;
})();
if(inst_46703__$1){
var statearr_46913_46975 = state_46830__$1;
(statearr_46913_46975[(1)] = (10));

} else {
var statearr_46914_46976 = state_46830__$1;
(statearr_46914_46976[(1)] = (11));

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
});})(c__44389__auto__,map__46675,map__46675__$1,opts,before_jsload,on_jsload,reload_dependents,map__46676,map__46676__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__44301__auto__,c__44389__auto__,map__46675,map__46675__$1,opts,before_jsload,on_jsload,reload_dependents,map__46676,map__46676__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__44302__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__44302__auto____0 = (function (){
var statearr_46915 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46915[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__44302__auto__);

(statearr_46915[(1)] = (1));

return statearr_46915;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__44302__auto____1 = (function (state_46830){
while(true){
var ret_value__44303__auto__ = (function (){try{while(true){
var result__44304__auto__ = switch__44301__auto__.call(null,state_46830);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44304__auto__;
}
break;
}
}catch (e46916){if((e46916 instanceof Object)){
var ex__44305__auto__ = e46916;
var statearr_46917_46977 = state_46830;
(statearr_46917_46977[(5)] = ex__44305__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46830);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46916;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46978 = state_46830;
state_46830 = G__46978;
continue;
} else {
return ret_value__44303__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__44302__auto__ = function(state_46830){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__44302__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__44302__auto____1.call(this,state_46830);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__44302__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__44302__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__44302__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__44302__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__44302__auto__;
})()
;})(switch__44301__auto__,c__44389__auto__,map__46675,map__46675__$1,opts,before_jsload,on_jsload,reload_dependents,map__46676,map__46676__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__44391__auto__ = (function (){var statearr_46918 = f__44390__auto__.call(null);
(statearr_46918[(6)] = c__44389__auto__);

return statearr_46918;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44391__auto__);
});})(c__44389__auto__,map__46675,map__46675__$1,opts,before_jsload,on_jsload,reload_dependents,map__46676,map__46676__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__44389__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),cljs.core.str.cljs$core$IFn$_invoke$arity$1("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__46981,link){
var map__46982 = p__46981;
var map__46982__$1 = ((((!((map__46982 == null)))?((((map__46982.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46982.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46982):map__46982);
var file = cljs.core.get.call(null,map__46982__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__46982,map__46982__$1,file){
return (function (p1__46979_SHARP_,p2__46980_SHARP_){
if(cljs.core._EQ_.call(null,p1__46979_SHARP_,p2__46980_SHARP_)){
return p1__46979_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__46982,map__46982__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__46985){
var map__46986 = p__46985;
var map__46986__$1 = ((((!((map__46986 == null)))?((((map__46986.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46986.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46986):map__46986);
var match_length = cljs.core.get.call(null,map__46986__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__46986__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__46984_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__46984_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__46988_SHARP_,p2__46989_SHARP_){
return cljs.core.assoc.call(null,p1__46988_SHARP_,cljs.core.get.call(null,p2__46989_SHARP_,key),p2__46989_SHARP_);
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
var loaded_f_datas_46990 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_46990);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_46990);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__46991,p__46992){
var map__46993 = p__46991;
var map__46993__$1 = ((((!((map__46993 == null)))?((((map__46993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46993.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46993):map__46993);
var on_cssload = cljs.core.get.call(null,map__46993__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__46994 = p__46992;
var map__46994__$1 = ((((!((map__46994 == null)))?((((map__46994.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46994.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46994):map__46994);
var files_msg = map__46994__$1;
var files = cljs.core.get.call(null,map__46994__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1503550043352