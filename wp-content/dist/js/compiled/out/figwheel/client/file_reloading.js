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
var or__36757__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__36757__auto__){
return or__36757__auto__;
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
var or__36757__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__36757__auto__)){
return or__36757__auto__;
} else {
var or__36757__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__36757__auto____$1)){
return or__36757__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__46375_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__46375_SHARP_));
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
var seq__46376 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__46377 = null;
var count__46378 = (0);
var i__46379 = (0);
while(true){
if((i__46379 < count__46378)){
var n = cljs.core._nth.call(null,chunk__46377,i__46379);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__46380 = seq__46376;
var G__46381 = chunk__46377;
var G__46382 = count__46378;
var G__46383 = (i__46379 + (1));
seq__46376 = G__46380;
chunk__46377 = G__46381;
count__46378 = G__46382;
i__46379 = G__46383;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__46376);
if(temp__4657__auto__){
var seq__46376__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46376__$1)){
var c__37577__auto__ = cljs.core.chunk_first.call(null,seq__46376__$1);
var G__46384 = cljs.core.chunk_rest.call(null,seq__46376__$1);
var G__46385 = c__37577__auto__;
var G__46386 = cljs.core.count.call(null,c__37577__auto__);
var G__46387 = (0);
seq__46376 = G__46384;
chunk__46377 = G__46385;
count__46378 = G__46386;
i__46379 = G__46387;
continue;
} else {
var n = cljs.core.first.call(null,seq__46376__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__46388 = cljs.core.next.call(null,seq__46376__$1);
var G__46389 = null;
var G__46390 = (0);
var G__46391 = (0);
seq__46376 = G__46388;
chunk__46377 = G__46389;
count__46378 = G__46390;
i__46379 = G__46391;
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

var seq__46401_46409 = cljs.core.seq.call(null,deps);
var chunk__46402_46410 = null;
var count__46403_46411 = (0);
var i__46404_46412 = (0);
while(true){
if((i__46404_46412 < count__46403_46411)){
var dep_46413 = cljs.core._nth.call(null,chunk__46402_46410,i__46404_46412);
topo_sort_helper_STAR_.call(null,dep_46413,(depth + (1)),state);

var G__46414 = seq__46401_46409;
var G__46415 = chunk__46402_46410;
var G__46416 = count__46403_46411;
var G__46417 = (i__46404_46412 + (1));
seq__46401_46409 = G__46414;
chunk__46402_46410 = G__46415;
count__46403_46411 = G__46416;
i__46404_46412 = G__46417;
continue;
} else {
var temp__4657__auto___46418 = cljs.core.seq.call(null,seq__46401_46409);
if(temp__4657__auto___46418){
var seq__46401_46419__$1 = temp__4657__auto___46418;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46401_46419__$1)){
var c__37577__auto___46420 = cljs.core.chunk_first.call(null,seq__46401_46419__$1);
var G__46421 = cljs.core.chunk_rest.call(null,seq__46401_46419__$1);
var G__46422 = c__37577__auto___46420;
var G__46423 = cljs.core.count.call(null,c__37577__auto___46420);
var G__46424 = (0);
seq__46401_46409 = G__46421;
chunk__46402_46410 = G__46422;
count__46403_46411 = G__46423;
i__46404_46412 = G__46424;
continue;
} else {
var dep_46425 = cljs.core.first.call(null,seq__46401_46419__$1);
topo_sort_helper_STAR_.call(null,dep_46425,(depth + (1)),state);

var G__46426 = cljs.core.next.call(null,seq__46401_46419__$1);
var G__46427 = null;
var G__46428 = (0);
var G__46429 = (0);
seq__46401_46409 = G__46426;
chunk__46402_46410 = G__46427;
count__46403_46411 = G__46428;
i__46404_46412 = G__46429;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__46405){
var vec__46406 = p__46405;
var seq__46407 = cljs.core.seq.call(null,vec__46406);
var first__46408 = cljs.core.first.call(null,seq__46407);
var seq__46407__$1 = cljs.core.next.call(null,seq__46407);
var x = first__46408;
var xs = seq__46407__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__46406,seq__46407,first__46408,seq__46407__$1,x,xs,get_deps__$1){
return (function (p1__46392_SHARP_){
return clojure.set.difference.call(null,p1__46392_SHARP_,x);
});})(vec__46406,seq__46407,first__46408,seq__46407__$1,x,xs,get_deps__$1))
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
var seq__46430 = cljs.core.seq.call(null,provides);
var chunk__46431 = null;
var count__46432 = (0);
var i__46433 = (0);
while(true){
if((i__46433 < count__46432)){
var prov = cljs.core._nth.call(null,chunk__46431,i__46433);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__46434_46442 = cljs.core.seq.call(null,requires);
var chunk__46435_46443 = null;
var count__46436_46444 = (0);
var i__46437_46445 = (0);
while(true){
if((i__46437_46445 < count__46436_46444)){
var req_46446 = cljs.core._nth.call(null,chunk__46435_46443,i__46437_46445);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_46446,prov);

var G__46447 = seq__46434_46442;
var G__46448 = chunk__46435_46443;
var G__46449 = count__46436_46444;
var G__46450 = (i__46437_46445 + (1));
seq__46434_46442 = G__46447;
chunk__46435_46443 = G__46448;
count__46436_46444 = G__46449;
i__46437_46445 = G__46450;
continue;
} else {
var temp__4657__auto___46451 = cljs.core.seq.call(null,seq__46434_46442);
if(temp__4657__auto___46451){
var seq__46434_46452__$1 = temp__4657__auto___46451;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46434_46452__$1)){
var c__37577__auto___46453 = cljs.core.chunk_first.call(null,seq__46434_46452__$1);
var G__46454 = cljs.core.chunk_rest.call(null,seq__46434_46452__$1);
var G__46455 = c__37577__auto___46453;
var G__46456 = cljs.core.count.call(null,c__37577__auto___46453);
var G__46457 = (0);
seq__46434_46442 = G__46454;
chunk__46435_46443 = G__46455;
count__46436_46444 = G__46456;
i__46437_46445 = G__46457;
continue;
} else {
var req_46458 = cljs.core.first.call(null,seq__46434_46452__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_46458,prov);

var G__46459 = cljs.core.next.call(null,seq__46434_46452__$1);
var G__46460 = null;
var G__46461 = (0);
var G__46462 = (0);
seq__46434_46442 = G__46459;
chunk__46435_46443 = G__46460;
count__46436_46444 = G__46461;
i__46437_46445 = G__46462;
continue;
}
} else {
}
}
break;
}

var G__46463 = seq__46430;
var G__46464 = chunk__46431;
var G__46465 = count__46432;
var G__46466 = (i__46433 + (1));
seq__46430 = G__46463;
chunk__46431 = G__46464;
count__46432 = G__46465;
i__46433 = G__46466;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__46430);
if(temp__4657__auto__){
var seq__46430__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46430__$1)){
var c__37577__auto__ = cljs.core.chunk_first.call(null,seq__46430__$1);
var G__46467 = cljs.core.chunk_rest.call(null,seq__46430__$1);
var G__46468 = c__37577__auto__;
var G__46469 = cljs.core.count.call(null,c__37577__auto__);
var G__46470 = (0);
seq__46430 = G__46467;
chunk__46431 = G__46468;
count__46432 = G__46469;
i__46433 = G__46470;
continue;
} else {
var prov = cljs.core.first.call(null,seq__46430__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__46438_46471 = cljs.core.seq.call(null,requires);
var chunk__46439_46472 = null;
var count__46440_46473 = (0);
var i__46441_46474 = (0);
while(true){
if((i__46441_46474 < count__46440_46473)){
var req_46475 = cljs.core._nth.call(null,chunk__46439_46472,i__46441_46474);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_46475,prov);

var G__46476 = seq__46438_46471;
var G__46477 = chunk__46439_46472;
var G__46478 = count__46440_46473;
var G__46479 = (i__46441_46474 + (1));
seq__46438_46471 = G__46476;
chunk__46439_46472 = G__46477;
count__46440_46473 = G__46478;
i__46441_46474 = G__46479;
continue;
} else {
var temp__4657__auto___46480__$1 = cljs.core.seq.call(null,seq__46438_46471);
if(temp__4657__auto___46480__$1){
var seq__46438_46481__$1 = temp__4657__auto___46480__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46438_46481__$1)){
var c__37577__auto___46482 = cljs.core.chunk_first.call(null,seq__46438_46481__$1);
var G__46483 = cljs.core.chunk_rest.call(null,seq__46438_46481__$1);
var G__46484 = c__37577__auto___46482;
var G__46485 = cljs.core.count.call(null,c__37577__auto___46482);
var G__46486 = (0);
seq__46438_46471 = G__46483;
chunk__46439_46472 = G__46484;
count__46440_46473 = G__46485;
i__46441_46474 = G__46486;
continue;
} else {
var req_46487 = cljs.core.first.call(null,seq__46438_46481__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_46487,prov);

var G__46488 = cljs.core.next.call(null,seq__46438_46481__$1);
var G__46489 = null;
var G__46490 = (0);
var G__46491 = (0);
seq__46438_46471 = G__46488;
chunk__46439_46472 = G__46489;
count__46440_46473 = G__46490;
i__46441_46474 = G__46491;
continue;
}
} else {
}
}
break;
}

var G__46492 = cljs.core.next.call(null,seq__46430__$1);
var G__46493 = null;
var G__46494 = (0);
var G__46495 = (0);
seq__46430 = G__46492;
chunk__46431 = G__46493;
count__46432 = G__46494;
i__46433 = G__46495;
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
var seq__46496_46500 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__46497_46501 = null;
var count__46498_46502 = (0);
var i__46499_46503 = (0);
while(true){
if((i__46499_46503 < count__46498_46502)){
var ns_46504 = cljs.core._nth.call(null,chunk__46497_46501,i__46499_46503);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_46504);

var G__46505 = seq__46496_46500;
var G__46506 = chunk__46497_46501;
var G__46507 = count__46498_46502;
var G__46508 = (i__46499_46503 + (1));
seq__46496_46500 = G__46505;
chunk__46497_46501 = G__46506;
count__46498_46502 = G__46507;
i__46499_46503 = G__46508;
continue;
} else {
var temp__4657__auto___46509 = cljs.core.seq.call(null,seq__46496_46500);
if(temp__4657__auto___46509){
var seq__46496_46510__$1 = temp__4657__auto___46509;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46496_46510__$1)){
var c__37577__auto___46511 = cljs.core.chunk_first.call(null,seq__46496_46510__$1);
var G__46512 = cljs.core.chunk_rest.call(null,seq__46496_46510__$1);
var G__46513 = c__37577__auto___46511;
var G__46514 = cljs.core.count.call(null,c__37577__auto___46511);
var G__46515 = (0);
seq__46496_46500 = G__46512;
chunk__46497_46501 = G__46513;
count__46498_46502 = G__46514;
i__46499_46503 = G__46515;
continue;
} else {
var ns_46516 = cljs.core.first.call(null,seq__46496_46510__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_46516);

var G__46517 = cljs.core.next.call(null,seq__46496_46510__$1);
var G__46518 = null;
var G__46519 = (0);
var G__46520 = (0);
seq__46496_46500 = G__46517;
chunk__46497_46501 = G__46518;
count__46498_46502 = G__46519;
i__46499_46503 = G__46520;
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
goog.require_figwheel_backup_ = (function (){var or__36757__auto__ = goog.require__;
if(cljs.core.truth_(or__36757__auto__)){
return or__36757__auto__;
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
var G__46521__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__46521 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46522__i = 0, G__46522__a = new Array(arguments.length -  0);
while (G__46522__i < G__46522__a.length) {G__46522__a[G__46522__i] = arguments[G__46522__i + 0]; ++G__46522__i;}
  args = new cljs.core.IndexedSeq(G__46522__a,0,null);
} 
return G__46521__delegate.call(this,args);};
G__46521.cljs$lang$maxFixedArity = 0;
G__46521.cljs$lang$applyTo = (function (arglist__46523){
var args = cljs.core.seq(arglist__46523);
return G__46521__delegate(args);
});
G__46521.cljs$core$IFn$_invoke$arity$variadic = G__46521__delegate;
return G__46521;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__46524 = cljs.core._EQ_;
var expr__46525 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__46524.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__46525))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__46524,expr__46525){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__46524,expr__46525))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__46524,expr__46525){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e46527){if((e46527 instanceof Error)){
var e = e46527;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e46527;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__46524,expr__46525))
} else {
if(cljs.core.truth_(pred__46524.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__46525))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__46524.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__46525))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__46524.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__46525))){
return ((function (pred__46524,expr__46525){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e46528){if((e46528 instanceof Error)){
var e = e46528;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e46528;

}
}})());
});
;})(pred__46524,expr__46525))
} else {
return ((function (pred__46524,expr__46525){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__46524,expr__46525))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__46529,callback){
var map__46530 = p__46529;
var map__46530__$1 = ((((!((map__46530 == null)))?((((map__46530.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46530.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46530):map__46530);
var file_msg = map__46530__$1;
var request_url = cljs.core.get.call(null,map__46530__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Attempting to load "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__46530,map__46530__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Successfully loaded "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__46530,map__46530__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__44387__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44387__auto__){
return (function (){
var f__44388__auto__ = (function (){var switch__44299__auto__ = ((function (c__44387__auto__){
return (function (state_46554){
var state_val_46555 = (state_46554[(1)]);
if((state_val_46555 === (7))){
var inst_46550 = (state_46554[(2)]);
var state_46554__$1 = state_46554;
var statearr_46556_46573 = state_46554__$1;
(statearr_46556_46573[(2)] = inst_46550);

(statearr_46556_46573[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46555 === (1))){
var state_46554__$1 = state_46554;
var statearr_46557_46574 = state_46554__$1;
(statearr_46557_46574[(2)] = null);

(statearr_46557_46574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46555 === (4))){
var inst_46534 = (state_46554[(7)]);
var inst_46534__$1 = (state_46554[(2)]);
var state_46554__$1 = (function (){var statearr_46558 = state_46554;
(statearr_46558[(7)] = inst_46534__$1);

return statearr_46558;
})();
if(cljs.core.truth_(inst_46534__$1)){
var statearr_46559_46575 = state_46554__$1;
(statearr_46559_46575[(1)] = (5));

} else {
var statearr_46560_46576 = state_46554__$1;
(statearr_46560_46576[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46555 === (6))){
var state_46554__$1 = state_46554;
var statearr_46561_46577 = state_46554__$1;
(statearr_46561_46577[(2)] = null);

(statearr_46561_46577[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46555 === (3))){
var inst_46552 = (state_46554[(2)]);
var state_46554__$1 = state_46554;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46554__$1,inst_46552);
} else {
if((state_val_46555 === (2))){
var state_46554__$1 = state_46554;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46554__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_46555 === (11))){
var inst_46546 = (state_46554[(2)]);
var state_46554__$1 = (function (){var statearr_46562 = state_46554;
(statearr_46562[(8)] = inst_46546);

return statearr_46562;
})();
var statearr_46563_46578 = state_46554__$1;
(statearr_46563_46578[(2)] = null);

(statearr_46563_46578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46555 === (9))){
var inst_46540 = (state_46554[(9)]);
var inst_46538 = (state_46554[(10)]);
var inst_46542 = inst_46540.call(null,inst_46538);
var state_46554__$1 = state_46554;
var statearr_46564_46579 = state_46554__$1;
(statearr_46564_46579[(2)] = inst_46542);

(statearr_46564_46579[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46555 === (5))){
var inst_46534 = (state_46554[(7)]);
var inst_46536 = figwheel.client.file_reloading.blocking_load.call(null,inst_46534);
var state_46554__$1 = state_46554;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46554__$1,(8),inst_46536);
} else {
if((state_val_46555 === (10))){
var inst_46538 = (state_46554[(10)]);
var inst_46544 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_46538);
var state_46554__$1 = state_46554;
var statearr_46565_46580 = state_46554__$1;
(statearr_46565_46580[(2)] = inst_46544);

(statearr_46565_46580[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46555 === (8))){
var inst_46534 = (state_46554[(7)]);
var inst_46540 = (state_46554[(9)]);
var inst_46538 = (state_46554[(2)]);
var inst_46539 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_46540__$1 = cljs.core.get.call(null,inst_46539,inst_46534);
var state_46554__$1 = (function (){var statearr_46566 = state_46554;
(statearr_46566[(9)] = inst_46540__$1);

(statearr_46566[(10)] = inst_46538);

return statearr_46566;
})();
if(cljs.core.truth_(inst_46540__$1)){
var statearr_46567_46581 = state_46554__$1;
(statearr_46567_46581[(1)] = (9));

} else {
var statearr_46568_46582 = state_46554__$1;
(statearr_46568_46582[(1)] = (10));

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
});})(c__44387__auto__))
;
return ((function (switch__44299__auto__,c__44387__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__44300__auto__ = null;
var figwheel$client$file_reloading$state_machine__44300__auto____0 = (function (){
var statearr_46569 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46569[(0)] = figwheel$client$file_reloading$state_machine__44300__auto__);

(statearr_46569[(1)] = (1));

return statearr_46569;
});
var figwheel$client$file_reloading$state_machine__44300__auto____1 = (function (state_46554){
while(true){
var ret_value__44301__auto__ = (function (){try{while(true){
var result__44302__auto__ = switch__44299__auto__.call(null,state_46554);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44302__auto__;
}
break;
}
}catch (e46570){if((e46570 instanceof Object)){
var ex__44303__auto__ = e46570;
var statearr_46571_46583 = state_46554;
(statearr_46571_46583[(5)] = ex__44303__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46554);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46570;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46584 = state_46554;
state_46554 = G__46584;
continue;
} else {
return ret_value__44301__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__44300__auto__ = function(state_46554){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__44300__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__44300__auto____1.call(this,state_46554);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__44300__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__44300__auto____0;
figwheel$client$file_reloading$state_machine__44300__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__44300__auto____1;
return figwheel$client$file_reloading$state_machine__44300__auto__;
})()
;})(switch__44299__auto__,c__44387__auto__))
})();
var state__44389__auto__ = (function (){var statearr_46572 = f__44388__auto__.call(null);
(statearr_46572[(6)] = c__44387__auto__);

return statearr_46572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44389__auto__);
});})(c__44387__auto__))
);

return c__44387__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__46585,callback){
var map__46586 = p__46585;
var map__46586__$1 = ((((!((map__46586 == null)))?((((map__46586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46586.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46586):map__46586);
var file_msg = map__46586__$1;
var namespace = cljs.core.get.call(null,map__46586__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__46586,map__46586__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__46586,map__46586__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__46588){
var map__46589 = p__46588;
var map__46589__$1 = ((((!((map__46589 == null)))?((((map__46589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46589.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46589):map__46589);
var file_msg = map__46589__$1;
var namespace = cljs.core.get.call(null,map__46589__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__46591){
var map__46592 = p__46591;
var map__46592__$1 = ((((!((map__46592 == null)))?((((map__46592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46592.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46592):map__46592);
var file_msg = map__46592__$1;
var namespace = cljs.core.get.call(null,map__46592__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__36745__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__36745__auto__){
var or__36757__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__36757__auto__)){
return or__36757__auto__;
} else {
var or__36757__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__36757__auto____$1)){
return or__36757__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__36745__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__46594,callback){
var map__46595 = p__46594;
var map__46595__$1 = ((((!((map__46595 == null)))?((((map__46595.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46595.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46595):map__46595);
var file_msg = map__46595__$1;
var request_url = cljs.core.get.call(null,map__46595__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__46595__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__44387__auto___46645 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44387__auto___46645,out){
return (function (){
var f__44388__auto__ = (function (){var switch__44299__auto__ = ((function (c__44387__auto___46645,out){
return (function (state_46630){
var state_val_46631 = (state_46630[(1)]);
if((state_val_46631 === (1))){
var inst_46604 = cljs.core.seq.call(null,files);
var inst_46605 = cljs.core.first.call(null,inst_46604);
var inst_46606 = cljs.core.next.call(null,inst_46604);
var inst_46607 = files;
var state_46630__$1 = (function (){var statearr_46632 = state_46630;
(statearr_46632[(7)] = inst_46605);

(statearr_46632[(8)] = inst_46606);

(statearr_46632[(9)] = inst_46607);

return statearr_46632;
})();
var statearr_46633_46646 = state_46630__$1;
(statearr_46633_46646[(2)] = null);

(statearr_46633_46646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46631 === (2))){
var inst_46607 = (state_46630[(9)]);
var inst_46613 = (state_46630[(10)]);
var inst_46612 = cljs.core.seq.call(null,inst_46607);
var inst_46613__$1 = cljs.core.first.call(null,inst_46612);
var inst_46614 = cljs.core.next.call(null,inst_46612);
var inst_46615 = (inst_46613__$1 == null);
var inst_46616 = cljs.core.not.call(null,inst_46615);
var state_46630__$1 = (function (){var statearr_46634 = state_46630;
(statearr_46634[(11)] = inst_46614);

(statearr_46634[(10)] = inst_46613__$1);

return statearr_46634;
})();
if(inst_46616){
var statearr_46635_46647 = state_46630__$1;
(statearr_46635_46647[(1)] = (4));

} else {
var statearr_46636_46648 = state_46630__$1;
(statearr_46636_46648[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46631 === (3))){
var inst_46628 = (state_46630[(2)]);
var state_46630__$1 = state_46630;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46630__$1,inst_46628);
} else {
if((state_val_46631 === (4))){
var inst_46613 = (state_46630[(10)]);
var inst_46618 = figwheel.client.file_reloading.reload_js_file.call(null,inst_46613);
var state_46630__$1 = state_46630;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46630__$1,(7),inst_46618);
} else {
if((state_val_46631 === (5))){
var inst_46624 = cljs.core.async.close_BANG_.call(null,out);
var state_46630__$1 = state_46630;
var statearr_46637_46649 = state_46630__$1;
(statearr_46637_46649[(2)] = inst_46624);

(statearr_46637_46649[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46631 === (6))){
var inst_46626 = (state_46630[(2)]);
var state_46630__$1 = state_46630;
var statearr_46638_46650 = state_46630__$1;
(statearr_46638_46650[(2)] = inst_46626);

(statearr_46638_46650[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46631 === (7))){
var inst_46614 = (state_46630[(11)]);
var inst_46620 = (state_46630[(2)]);
var inst_46621 = cljs.core.async.put_BANG_.call(null,out,inst_46620);
var inst_46607 = inst_46614;
var state_46630__$1 = (function (){var statearr_46639 = state_46630;
(statearr_46639[(12)] = inst_46621);

(statearr_46639[(9)] = inst_46607);

return statearr_46639;
})();
var statearr_46640_46651 = state_46630__$1;
(statearr_46640_46651[(2)] = null);

(statearr_46640_46651[(1)] = (2));


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
});})(c__44387__auto___46645,out))
;
return ((function (switch__44299__auto__,c__44387__auto___46645,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__44300__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__44300__auto____0 = (function (){
var statearr_46641 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46641[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__44300__auto__);

(statearr_46641[(1)] = (1));

return statearr_46641;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__44300__auto____1 = (function (state_46630){
while(true){
var ret_value__44301__auto__ = (function (){try{while(true){
var result__44302__auto__ = switch__44299__auto__.call(null,state_46630);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44302__auto__;
}
break;
}
}catch (e46642){if((e46642 instanceof Object)){
var ex__44303__auto__ = e46642;
var statearr_46643_46652 = state_46630;
(statearr_46643_46652[(5)] = ex__44303__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46630);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46642;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46653 = state_46630;
state_46630 = G__46653;
continue;
} else {
return ret_value__44301__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__44300__auto__ = function(state_46630){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__44300__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__44300__auto____1.call(this,state_46630);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__44300__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__44300__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__44300__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__44300__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__44300__auto__;
})()
;})(switch__44299__auto__,c__44387__auto___46645,out))
})();
var state__44389__auto__ = (function (){var statearr_46644 = f__44388__auto__.call(null);
(statearr_46644[(6)] = c__44387__auto___46645);

return statearr_46644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44389__auto__);
});})(c__44387__auto___46645,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__46654,opts){
var map__46655 = p__46654;
var map__46655__$1 = ((((!((map__46655 == null)))?((((map__46655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46655.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46655):map__46655);
var eval_body = cljs.core.get.call(null,map__46655__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__46655__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__36745__auto__ = eval_body;
if(cljs.core.truth_(and__36745__auto__)){
return typeof eval_body === 'string';
} else {
return and__36745__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Evaling file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e46657){var e = e46657;
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
return (function (p1__46658_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__46658_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__46659){
var vec__46660 = p__46659;
var k = cljs.core.nth.call(null,vec__46660,(0),null);
var v = cljs.core.nth.call(null,vec__46660,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__46663){
var vec__46664 = p__46663;
var k = cljs.core.nth.call(null,vec__46664,(0),null);
var v = cljs.core.nth.call(null,vec__46664,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__46670,p__46671){
var map__46672 = p__46670;
var map__46672__$1 = ((((!((map__46672 == null)))?((((map__46672.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46672.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46672):map__46672);
var opts = map__46672__$1;
var before_jsload = cljs.core.get.call(null,map__46672__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__46672__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__46672__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__46673 = p__46671;
var map__46673__$1 = ((((!((map__46673 == null)))?((((map__46673.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46673.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46673):map__46673);
var msg = map__46673__$1;
var files = cljs.core.get.call(null,map__46673__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__46673__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__46673__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__44387__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44387__auto__,map__46672,map__46672__$1,opts,before_jsload,on_jsload,reload_dependents,map__46673,map__46673__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__44388__auto__ = (function (){var switch__44299__auto__ = ((function (c__44387__auto__,map__46672,map__46672__$1,opts,before_jsload,on_jsload,reload_dependents,map__46673,map__46673__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_46827){
var state_val_46828 = (state_46827[(1)]);
if((state_val_46828 === (7))){
var inst_46688 = (state_46827[(7)]);
var inst_46687 = (state_46827[(8)]);
var inst_46690 = (state_46827[(9)]);
var inst_46689 = (state_46827[(10)]);
var inst_46695 = cljs.core._nth.call(null,inst_46688,inst_46690);
var inst_46696 = figwheel.client.file_reloading.eval_body.call(null,inst_46695,opts);
var inst_46697 = (inst_46690 + (1));
var tmp46829 = inst_46688;
var tmp46830 = inst_46687;
var tmp46831 = inst_46689;
var inst_46687__$1 = tmp46830;
var inst_46688__$1 = tmp46829;
var inst_46689__$1 = tmp46831;
var inst_46690__$1 = inst_46697;
var state_46827__$1 = (function (){var statearr_46832 = state_46827;
(statearr_46832[(7)] = inst_46688__$1);

(statearr_46832[(11)] = inst_46696);

(statearr_46832[(8)] = inst_46687__$1);

(statearr_46832[(9)] = inst_46690__$1);

(statearr_46832[(10)] = inst_46689__$1);

return statearr_46832;
})();
var statearr_46833_46916 = state_46827__$1;
(statearr_46833_46916[(2)] = null);

(statearr_46833_46916[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46828 === (20))){
var inst_46730 = (state_46827[(12)]);
var inst_46738 = figwheel.client.file_reloading.sort_files.call(null,inst_46730);
var state_46827__$1 = state_46827;
var statearr_46834_46917 = state_46827__$1;
(statearr_46834_46917[(2)] = inst_46738);

(statearr_46834_46917[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46828 === (27))){
var state_46827__$1 = state_46827;
var statearr_46835_46918 = state_46827__$1;
(statearr_46835_46918[(2)] = null);

(statearr_46835_46918[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46828 === (1))){
var inst_46679 = (state_46827[(13)]);
var inst_46676 = before_jsload.call(null,files);
var inst_46677 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_46678 = (function (){return ((function (inst_46679,inst_46676,inst_46677,state_val_46828,c__44387__auto__,map__46672,map__46672__$1,opts,before_jsload,on_jsload,reload_dependents,map__46673,map__46673__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__46667_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__46667_SHARP_);
});
;})(inst_46679,inst_46676,inst_46677,state_val_46828,c__44387__auto__,map__46672,map__46672__$1,opts,before_jsload,on_jsload,reload_dependents,map__46673,map__46673__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_46679__$1 = cljs.core.filter.call(null,inst_46678,files);
var inst_46680 = cljs.core.not_empty.call(null,inst_46679__$1);
var state_46827__$1 = (function (){var statearr_46836 = state_46827;
(statearr_46836[(14)] = inst_46677);

(statearr_46836[(13)] = inst_46679__$1);

(statearr_46836[(15)] = inst_46676);

return statearr_46836;
})();
if(cljs.core.truth_(inst_46680)){
var statearr_46837_46919 = state_46827__$1;
(statearr_46837_46919[(1)] = (2));

} else {
var statearr_46838_46920 = state_46827__$1;
(statearr_46838_46920[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46828 === (24))){
var state_46827__$1 = state_46827;
var statearr_46839_46921 = state_46827__$1;
(statearr_46839_46921[(2)] = null);

(statearr_46839_46921[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46828 === (39))){
var inst_46780 = (state_46827[(16)]);
var state_46827__$1 = state_46827;
var statearr_46840_46922 = state_46827__$1;
(statearr_46840_46922[(2)] = inst_46780);

(statearr_46840_46922[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46828 === (46))){
var inst_46822 = (state_46827[(2)]);
var state_46827__$1 = state_46827;
var statearr_46841_46923 = state_46827__$1;
(statearr_46841_46923[(2)] = inst_46822);

(statearr_46841_46923[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46828 === (4))){
var inst_46724 = (state_46827[(2)]);
var inst_46725 = cljs.core.List.EMPTY;
var inst_46726 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_46725);
var inst_46727 = (function (){return ((function (inst_46724,inst_46725,inst_46726,state_val_46828,c__44387__auto__,map__46672,map__46672__$1,opts,before_jsload,on_jsload,reload_dependents,map__46673,map__46673__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__46668_SHARP_){
var and__36745__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__46668_SHARP_);
if(cljs.core.truth_(and__36745__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__46668_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__46668_SHARP_)));
} else {
return and__36745__auto__;
}
});
;})(inst_46724,inst_46725,inst_46726,state_val_46828,c__44387__auto__,map__46672,map__46672__$1,opts,before_jsload,on_jsload,reload_dependents,map__46673,map__46673__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_46728 = cljs.core.filter.call(null,inst_46727,files);
var inst_46729 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_46730 = cljs.core.concat.call(null,inst_46728,inst_46729);
var state_46827__$1 = (function (){var statearr_46842 = state_46827;
(statearr_46842[(17)] = inst_46724);

(statearr_46842[(12)] = inst_46730);

(statearr_46842[(18)] = inst_46726);

return statearr_46842;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_46843_46924 = state_46827__$1;
(statearr_46843_46924[(1)] = (16));

} else {
var statearr_46844_46925 = state_46827__$1;
(statearr_46844_46925[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46828 === (15))){
var inst_46714 = (state_46827[(2)]);
var state_46827__$1 = state_46827;
var statearr_46845_46926 = state_46827__$1;
(statearr_46845_46926[(2)] = inst_46714);

(statearr_46845_46926[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46828 === (21))){
var inst_46740 = (state_46827[(19)]);
var inst_46740__$1 = (state_46827[(2)]);
var inst_46741 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_46740__$1);
var state_46827__$1 = (function (){var statearr_46846 = state_46827;
(statearr_46846[(19)] = inst_46740__$1);

return statearr_46846;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46827__$1,(22),inst_46741);
} else {
if((state_val_46828 === (31))){
var inst_46825 = (state_46827[(2)]);
var state_46827__$1 = state_46827;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46827__$1,inst_46825);
} else {
if((state_val_46828 === (32))){
var inst_46780 = (state_46827[(16)]);
var inst_46785 = inst_46780.cljs$lang$protocol_mask$partition0$;
var inst_46786 = (inst_46785 & (64));
var inst_46787 = inst_46780.cljs$core$ISeq$;
var inst_46788 = (cljs.core.PROTOCOL_SENTINEL === inst_46787);
var inst_46789 = (inst_46786) || (inst_46788);
var state_46827__$1 = state_46827;
if(cljs.core.truth_(inst_46789)){
var statearr_46847_46927 = state_46827__$1;
(statearr_46847_46927[(1)] = (35));

} else {
var statearr_46848_46928 = state_46827__$1;
(statearr_46848_46928[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46828 === (40))){
var inst_46802 = (state_46827[(20)]);
var inst_46801 = (state_46827[(2)]);
var inst_46802__$1 = cljs.core.get.call(null,inst_46801,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_46803 = cljs.core.get.call(null,inst_46801,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_46804 = cljs.core.not_empty.call(null,inst_46802__$1);
var state_46827__$1 = (function (){var statearr_46849 = state_46827;
(statearr_46849[(20)] = inst_46802__$1);

(statearr_46849[(21)] = inst_46803);

return statearr_46849;
})();
if(cljs.core.truth_(inst_46804)){
var statearr_46850_46929 = state_46827__$1;
(statearr_46850_46929[(1)] = (41));

} else {
var statearr_46851_46930 = state_46827__$1;
(statearr_46851_46930[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46828 === (33))){
var state_46827__$1 = state_46827;
var statearr_46852_46931 = state_46827__$1;
(statearr_46852_46931[(2)] = false);

(statearr_46852_46931[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46828 === (13))){
var inst_46700 = (state_46827[(22)]);
var inst_46704 = cljs.core.chunk_first.call(null,inst_46700);
var inst_46705 = cljs.core.chunk_rest.call(null,inst_46700);
var inst_46706 = cljs.core.count.call(null,inst_46704);
var inst_46687 = inst_46705;
var inst_46688 = inst_46704;
var inst_46689 = inst_46706;
var inst_46690 = (0);
var state_46827__$1 = (function (){var statearr_46853 = state_46827;
(statearr_46853[(7)] = inst_46688);

(statearr_46853[(8)] = inst_46687);

(statearr_46853[(9)] = inst_46690);

(statearr_46853[(10)] = inst_46689);

return statearr_46853;
})();
var statearr_46854_46932 = state_46827__$1;
(statearr_46854_46932[(2)] = null);

(statearr_46854_46932[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46828 === (22))){
var inst_46740 = (state_46827[(19)]);
var inst_46744 = (state_46827[(23)]);
var inst_46743 = (state_46827[(24)]);
var inst_46748 = (state_46827[(25)]);
var inst_46743__$1 = (state_46827[(2)]);
var inst_46744__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_46743__$1);
var inst_46745 = (function (){var all_files = inst_46740;
var res_SINGLEQUOTE_ = inst_46743__$1;
var res = inst_46744__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_46740,inst_46744,inst_46743,inst_46748,inst_46743__$1,inst_46744__$1,state_val_46828,c__44387__auto__,map__46672,map__46672__$1,opts,before_jsload,on_jsload,reload_dependents,map__46673,map__46673__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__46669_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__46669_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_46740,inst_46744,inst_46743,inst_46748,inst_46743__$1,inst_46744__$1,state_val_46828,c__44387__auto__,map__46672,map__46672__$1,opts,before_jsload,on_jsload,reload_dependents,map__46673,map__46673__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_46746 = cljs.core.filter.call(null,inst_46745,inst_46743__$1);
var inst_46747 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_46748__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_46747);
var inst_46749 = cljs.core.not_empty.call(null,inst_46748__$1);
var state_46827__$1 = (function (){var statearr_46855 = state_46827;
(statearr_46855[(23)] = inst_46744__$1);

(statearr_46855[(24)] = inst_46743__$1);

(statearr_46855[(25)] = inst_46748__$1);

(statearr_46855[(26)] = inst_46746);

return statearr_46855;
})();
if(cljs.core.truth_(inst_46749)){
var statearr_46856_46933 = state_46827__$1;
(statearr_46856_46933[(1)] = (23));

} else {
var statearr_46857_46934 = state_46827__$1;
(statearr_46857_46934[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46828 === (36))){
var state_46827__$1 = state_46827;
var statearr_46858_46935 = state_46827__$1;
(statearr_46858_46935[(2)] = false);

(statearr_46858_46935[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46828 === (41))){
var inst_46802 = (state_46827[(20)]);
var inst_46806 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_46807 = cljs.core.map.call(null,inst_46806,inst_46802);
var inst_46808 = cljs.core.pr_str.call(null,inst_46807);
var inst_46809 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("figwheel-no-load meta-data: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_46808)].join('');
var inst_46810 = figwheel.client.utils.log.call(null,inst_46809);
var state_46827__$1 = state_46827;
var statearr_46859_46936 = state_46827__$1;
(statearr_46859_46936[(2)] = inst_46810);

(statearr_46859_46936[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46828 === (43))){
var inst_46803 = (state_46827[(21)]);
var inst_46813 = (state_46827[(2)]);
var inst_46814 = cljs.core.not_empty.call(null,inst_46803);
var state_46827__$1 = (function (){var statearr_46860 = state_46827;
(statearr_46860[(27)] = inst_46813);

return statearr_46860;
})();
if(cljs.core.truth_(inst_46814)){
var statearr_46861_46937 = state_46827__$1;
(statearr_46861_46937[(1)] = (44));

} else {
var statearr_46862_46938 = state_46827__$1;
(statearr_46862_46938[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46828 === (29))){
var inst_46740 = (state_46827[(19)]);
var inst_46780 = (state_46827[(16)]);
var inst_46744 = (state_46827[(23)]);
var inst_46743 = (state_46827[(24)]);
var inst_46748 = (state_46827[(25)]);
var inst_46746 = (state_46827[(26)]);
var inst_46776 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_46779 = (function (){var all_files = inst_46740;
var res_SINGLEQUOTE_ = inst_46743;
var res = inst_46744;
var files_not_loaded = inst_46746;
var dependencies_that_loaded = inst_46748;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46740,inst_46780,inst_46744,inst_46743,inst_46748,inst_46746,inst_46776,state_val_46828,c__44387__auto__,map__46672,map__46672__$1,opts,before_jsload,on_jsload,reload_dependents,map__46673,map__46673__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__46778){
var map__46863 = p__46778;
var map__46863__$1 = ((((!((map__46863 == null)))?((((map__46863.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46863.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46863):map__46863);
var namespace = cljs.core.get.call(null,map__46863__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46740,inst_46780,inst_46744,inst_46743,inst_46748,inst_46746,inst_46776,state_val_46828,c__44387__auto__,map__46672,map__46672__$1,opts,before_jsload,on_jsload,reload_dependents,map__46673,map__46673__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_46780__$1 = cljs.core.group_by.call(null,inst_46779,inst_46746);
var inst_46782 = (inst_46780__$1 == null);
var inst_46783 = cljs.core.not.call(null,inst_46782);
var state_46827__$1 = (function (){var statearr_46865 = state_46827;
(statearr_46865[(16)] = inst_46780__$1);

(statearr_46865[(28)] = inst_46776);

return statearr_46865;
})();
if(inst_46783){
var statearr_46866_46939 = state_46827__$1;
(statearr_46866_46939[(1)] = (32));

} else {
var statearr_46867_46940 = state_46827__$1;
(statearr_46867_46940[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46828 === (44))){
var inst_46803 = (state_46827[(21)]);
var inst_46816 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_46803);
var inst_46817 = cljs.core.pr_str.call(null,inst_46816);
var inst_46818 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("not required: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_46817)].join('');
var inst_46819 = figwheel.client.utils.log.call(null,inst_46818);
var state_46827__$1 = state_46827;
var statearr_46868_46941 = state_46827__$1;
(statearr_46868_46941[(2)] = inst_46819);

(statearr_46868_46941[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46828 === (6))){
var inst_46721 = (state_46827[(2)]);
var state_46827__$1 = state_46827;
var statearr_46869_46942 = state_46827__$1;
(statearr_46869_46942[(2)] = inst_46721);

(statearr_46869_46942[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46828 === (28))){
var inst_46746 = (state_46827[(26)]);
var inst_46773 = (state_46827[(2)]);
var inst_46774 = cljs.core.not_empty.call(null,inst_46746);
var state_46827__$1 = (function (){var statearr_46870 = state_46827;
(statearr_46870[(29)] = inst_46773);

return statearr_46870;
})();
if(cljs.core.truth_(inst_46774)){
var statearr_46871_46943 = state_46827__$1;
(statearr_46871_46943[(1)] = (29));

} else {
var statearr_46872_46944 = state_46827__$1;
(statearr_46872_46944[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46828 === (25))){
var inst_46744 = (state_46827[(23)]);
var inst_46760 = (state_46827[(2)]);
var inst_46761 = cljs.core.not_empty.call(null,inst_46744);
var state_46827__$1 = (function (){var statearr_46873 = state_46827;
(statearr_46873[(30)] = inst_46760);

return statearr_46873;
})();
if(cljs.core.truth_(inst_46761)){
var statearr_46874_46945 = state_46827__$1;
(statearr_46874_46945[(1)] = (26));

} else {
var statearr_46875_46946 = state_46827__$1;
(statearr_46875_46946[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46828 === (34))){
var inst_46796 = (state_46827[(2)]);
var state_46827__$1 = state_46827;
if(cljs.core.truth_(inst_46796)){
var statearr_46876_46947 = state_46827__$1;
(statearr_46876_46947[(1)] = (38));

} else {
var statearr_46877_46948 = state_46827__$1;
(statearr_46877_46948[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46828 === (17))){
var state_46827__$1 = state_46827;
var statearr_46878_46949 = state_46827__$1;
(statearr_46878_46949[(2)] = recompile_dependents);

(statearr_46878_46949[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46828 === (3))){
var state_46827__$1 = state_46827;
var statearr_46879_46950 = state_46827__$1;
(statearr_46879_46950[(2)] = null);

(statearr_46879_46950[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46828 === (12))){
var inst_46717 = (state_46827[(2)]);
var state_46827__$1 = state_46827;
var statearr_46880_46951 = state_46827__$1;
(statearr_46880_46951[(2)] = inst_46717);

(statearr_46880_46951[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46828 === (2))){
var inst_46679 = (state_46827[(13)]);
var inst_46686 = cljs.core.seq.call(null,inst_46679);
var inst_46687 = inst_46686;
var inst_46688 = null;
var inst_46689 = (0);
var inst_46690 = (0);
var state_46827__$1 = (function (){var statearr_46881 = state_46827;
(statearr_46881[(7)] = inst_46688);

(statearr_46881[(8)] = inst_46687);

(statearr_46881[(9)] = inst_46690);

(statearr_46881[(10)] = inst_46689);

return statearr_46881;
})();
var statearr_46882_46952 = state_46827__$1;
(statearr_46882_46952[(2)] = null);

(statearr_46882_46952[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46828 === (23))){
var inst_46740 = (state_46827[(19)]);
var inst_46744 = (state_46827[(23)]);
var inst_46743 = (state_46827[(24)]);
var inst_46748 = (state_46827[(25)]);
var inst_46746 = (state_46827[(26)]);
var inst_46751 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_46753 = (function (){var all_files = inst_46740;
var res_SINGLEQUOTE_ = inst_46743;
var res = inst_46744;
var files_not_loaded = inst_46746;
var dependencies_that_loaded = inst_46748;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46740,inst_46744,inst_46743,inst_46748,inst_46746,inst_46751,state_val_46828,c__44387__auto__,map__46672,map__46672__$1,opts,before_jsload,on_jsload,reload_dependents,map__46673,map__46673__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__46752){
var map__46883 = p__46752;
var map__46883__$1 = ((((!((map__46883 == null)))?((((map__46883.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46883.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46883):map__46883);
var request_url = cljs.core.get.call(null,map__46883__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46740,inst_46744,inst_46743,inst_46748,inst_46746,inst_46751,state_val_46828,c__44387__auto__,map__46672,map__46672__$1,opts,before_jsload,on_jsload,reload_dependents,map__46673,map__46673__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_46754 = cljs.core.reverse.call(null,inst_46748);
var inst_46755 = cljs.core.map.call(null,inst_46753,inst_46754);
var inst_46756 = cljs.core.pr_str.call(null,inst_46755);
var inst_46757 = figwheel.client.utils.log.call(null,inst_46756);
var state_46827__$1 = (function (){var statearr_46885 = state_46827;
(statearr_46885[(31)] = inst_46751);

return statearr_46885;
})();
var statearr_46886_46953 = state_46827__$1;
(statearr_46886_46953[(2)] = inst_46757);

(statearr_46886_46953[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46828 === (35))){
var state_46827__$1 = state_46827;
var statearr_46887_46954 = state_46827__$1;
(statearr_46887_46954[(2)] = true);

(statearr_46887_46954[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46828 === (19))){
var inst_46730 = (state_46827[(12)]);
var inst_46736 = figwheel.client.file_reloading.expand_files.call(null,inst_46730);
var state_46827__$1 = state_46827;
var statearr_46888_46955 = state_46827__$1;
(statearr_46888_46955[(2)] = inst_46736);

(statearr_46888_46955[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46828 === (11))){
var state_46827__$1 = state_46827;
var statearr_46889_46956 = state_46827__$1;
(statearr_46889_46956[(2)] = null);

(statearr_46889_46956[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46828 === (9))){
var inst_46719 = (state_46827[(2)]);
var state_46827__$1 = state_46827;
var statearr_46890_46957 = state_46827__$1;
(statearr_46890_46957[(2)] = inst_46719);

(statearr_46890_46957[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46828 === (5))){
var inst_46690 = (state_46827[(9)]);
var inst_46689 = (state_46827[(10)]);
var inst_46692 = (inst_46690 < inst_46689);
var inst_46693 = inst_46692;
var state_46827__$1 = state_46827;
if(cljs.core.truth_(inst_46693)){
var statearr_46891_46958 = state_46827__$1;
(statearr_46891_46958[(1)] = (7));

} else {
var statearr_46892_46959 = state_46827__$1;
(statearr_46892_46959[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46828 === (14))){
var inst_46700 = (state_46827[(22)]);
var inst_46709 = cljs.core.first.call(null,inst_46700);
var inst_46710 = figwheel.client.file_reloading.eval_body.call(null,inst_46709,opts);
var inst_46711 = cljs.core.next.call(null,inst_46700);
var inst_46687 = inst_46711;
var inst_46688 = null;
var inst_46689 = (0);
var inst_46690 = (0);
var state_46827__$1 = (function (){var statearr_46893 = state_46827;
(statearr_46893[(7)] = inst_46688);

(statearr_46893[(8)] = inst_46687);

(statearr_46893[(9)] = inst_46690);

(statearr_46893[(32)] = inst_46710);

(statearr_46893[(10)] = inst_46689);

return statearr_46893;
})();
var statearr_46894_46960 = state_46827__$1;
(statearr_46894_46960[(2)] = null);

(statearr_46894_46960[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46828 === (45))){
var state_46827__$1 = state_46827;
var statearr_46895_46961 = state_46827__$1;
(statearr_46895_46961[(2)] = null);

(statearr_46895_46961[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46828 === (26))){
var inst_46740 = (state_46827[(19)]);
var inst_46744 = (state_46827[(23)]);
var inst_46743 = (state_46827[(24)]);
var inst_46748 = (state_46827[(25)]);
var inst_46746 = (state_46827[(26)]);
var inst_46763 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_46765 = (function (){var all_files = inst_46740;
var res_SINGLEQUOTE_ = inst_46743;
var res = inst_46744;
var files_not_loaded = inst_46746;
var dependencies_that_loaded = inst_46748;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46740,inst_46744,inst_46743,inst_46748,inst_46746,inst_46763,state_val_46828,c__44387__auto__,map__46672,map__46672__$1,opts,before_jsload,on_jsload,reload_dependents,map__46673,map__46673__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__46764){
var map__46896 = p__46764;
var map__46896__$1 = ((((!((map__46896 == null)))?((((map__46896.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46896.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46896):map__46896);
var namespace = cljs.core.get.call(null,map__46896__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__46896__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46740,inst_46744,inst_46743,inst_46748,inst_46746,inst_46763,state_val_46828,c__44387__auto__,map__46672,map__46672__$1,opts,before_jsload,on_jsload,reload_dependents,map__46673,map__46673__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_46766 = cljs.core.map.call(null,inst_46765,inst_46744);
var inst_46767 = cljs.core.pr_str.call(null,inst_46766);
var inst_46768 = figwheel.client.utils.log.call(null,inst_46767);
var inst_46769 = (function (){var all_files = inst_46740;
var res_SINGLEQUOTE_ = inst_46743;
var res = inst_46744;
var files_not_loaded = inst_46746;
var dependencies_that_loaded = inst_46748;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46740,inst_46744,inst_46743,inst_46748,inst_46746,inst_46763,inst_46765,inst_46766,inst_46767,inst_46768,state_val_46828,c__44387__auto__,map__46672,map__46672__$1,opts,before_jsload,on_jsload,reload_dependents,map__46673,map__46673__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46740,inst_46744,inst_46743,inst_46748,inst_46746,inst_46763,inst_46765,inst_46766,inst_46767,inst_46768,state_val_46828,c__44387__auto__,map__46672,map__46672__$1,opts,before_jsload,on_jsload,reload_dependents,map__46673,map__46673__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_46770 = setTimeout(inst_46769,(10));
var state_46827__$1 = (function (){var statearr_46898 = state_46827;
(statearr_46898[(33)] = inst_46763);

(statearr_46898[(34)] = inst_46768);

return statearr_46898;
})();
var statearr_46899_46962 = state_46827__$1;
(statearr_46899_46962[(2)] = inst_46770);

(statearr_46899_46962[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46828 === (16))){
var state_46827__$1 = state_46827;
var statearr_46900_46963 = state_46827__$1;
(statearr_46900_46963[(2)] = reload_dependents);

(statearr_46900_46963[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46828 === (38))){
var inst_46780 = (state_46827[(16)]);
var inst_46798 = cljs.core.apply.call(null,cljs.core.hash_map,inst_46780);
var state_46827__$1 = state_46827;
var statearr_46901_46964 = state_46827__$1;
(statearr_46901_46964[(2)] = inst_46798);

(statearr_46901_46964[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46828 === (30))){
var state_46827__$1 = state_46827;
var statearr_46902_46965 = state_46827__$1;
(statearr_46902_46965[(2)] = null);

(statearr_46902_46965[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46828 === (10))){
var inst_46700 = (state_46827[(22)]);
var inst_46702 = cljs.core.chunked_seq_QMARK_.call(null,inst_46700);
var state_46827__$1 = state_46827;
if(inst_46702){
var statearr_46903_46966 = state_46827__$1;
(statearr_46903_46966[(1)] = (13));

} else {
var statearr_46904_46967 = state_46827__$1;
(statearr_46904_46967[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46828 === (18))){
var inst_46734 = (state_46827[(2)]);
var state_46827__$1 = state_46827;
if(cljs.core.truth_(inst_46734)){
var statearr_46905_46968 = state_46827__$1;
(statearr_46905_46968[(1)] = (19));

} else {
var statearr_46906_46969 = state_46827__$1;
(statearr_46906_46969[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46828 === (42))){
var state_46827__$1 = state_46827;
var statearr_46907_46970 = state_46827__$1;
(statearr_46907_46970[(2)] = null);

(statearr_46907_46970[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46828 === (37))){
var inst_46793 = (state_46827[(2)]);
var state_46827__$1 = state_46827;
var statearr_46908_46971 = state_46827__$1;
(statearr_46908_46971[(2)] = inst_46793);

(statearr_46908_46971[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46828 === (8))){
var inst_46687 = (state_46827[(8)]);
var inst_46700 = (state_46827[(22)]);
var inst_46700__$1 = cljs.core.seq.call(null,inst_46687);
var state_46827__$1 = (function (){var statearr_46909 = state_46827;
(statearr_46909[(22)] = inst_46700__$1);

return statearr_46909;
})();
if(inst_46700__$1){
var statearr_46910_46972 = state_46827__$1;
(statearr_46910_46972[(1)] = (10));

} else {
var statearr_46911_46973 = state_46827__$1;
(statearr_46911_46973[(1)] = (11));

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
});})(c__44387__auto__,map__46672,map__46672__$1,opts,before_jsload,on_jsload,reload_dependents,map__46673,map__46673__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__44299__auto__,c__44387__auto__,map__46672,map__46672__$1,opts,before_jsload,on_jsload,reload_dependents,map__46673,map__46673__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__44300__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__44300__auto____0 = (function (){
var statearr_46912 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46912[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__44300__auto__);

(statearr_46912[(1)] = (1));

return statearr_46912;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__44300__auto____1 = (function (state_46827){
while(true){
var ret_value__44301__auto__ = (function (){try{while(true){
var result__44302__auto__ = switch__44299__auto__.call(null,state_46827);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44302__auto__;
}
break;
}
}catch (e46913){if((e46913 instanceof Object)){
var ex__44303__auto__ = e46913;
var statearr_46914_46974 = state_46827;
(statearr_46914_46974[(5)] = ex__44303__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46827);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46913;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46975 = state_46827;
state_46827 = G__46975;
continue;
} else {
return ret_value__44301__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__44300__auto__ = function(state_46827){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__44300__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__44300__auto____1.call(this,state_46827);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__44300__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__44300__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__44300__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__44300__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__44300__auto__;
})()
;})(switch__44299__auto__,c__44387__auto__,map__46672,map__46672__$1,opts,before_jsload,on_jsload,reload_dependents,map__46673,map__46673__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__44389__auto__ = (function (){var statearr_46915 = f__44388__auto__.call(null);
(statearr_46915[(6)] = c__44387__auto__);

return statearr_46915;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44389__auto__);
});})(c__44387__auto__,map__46672,map__46672__$1,opts,before_jsload,on_jsload,reload_dependents,map__46673,map__46673__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__44387__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),cljs.core.str.cljs$core$IFn$_invoke$arity$1("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__46978,link){
var map__46979 = p__46978;
var map__46979__$1 = ((((!((map__46979 == null)))?((((map__46979.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46979.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46979):map__46979);
var file = cljs.core.get.call(null,map__46979__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__46979,map__46979__$1,file){
return (function (p1__46976_SHARP_,p2__46977_SHARP_){
if(cljs.core._EQ_.call(null,p1__46976_SHARP_,p2__46977_SHARP_)){
return p1__46976_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__46979,map__46979__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__46982){
var map__46983 = p__46982;
var map__46983__$1 = ((((!((map__46983 == null)))?((((map__46983.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46983.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46983):map__46983);
var match_length = cljs.core.get.call(null,map__46983__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__46983__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__46981_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__46981_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__46985_SHARP_,p2__46986_SHARP_){
return cljs.core.assoc.call(null,p1__46985_SHARP_,cljs.core.get.call(null,p2__46986_SHARP_,key),p2__46986_SHARP_);
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
var loaded_f_datas_46987 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_46987);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_46987);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__46988,p__46989){
var map__46990 = p__46988;
var map__46990__$1 = ((((!((map__46990 == null)))?((((map__46990.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46990.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46990):map__46990);
var on_cssload = cljs.core.get.call(null,map__46990__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__46991 = p__46989;
var map__46991__$1 = ((((!((map__46991 == null)))?((((map__46991.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46991.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46991):map__46991);
var files_msg = map__46991__$1;
var files = cljs.core.get.call(null,map__46991__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1503441678966