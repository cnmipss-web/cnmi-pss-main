// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.async.Deferred');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
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
var or__25989__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__25989__auto__){
return or__25989__auto__;
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
var or__25989__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, ["svgpan.SvgPan",null,"far.out",null,"cljs.nodejs",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__25989__auto__)){
return or__25989__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__34302_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__34302_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
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
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
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
var seq__34307 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__34308 = null;
var count__34309 = (0);
var i__34310 = (0);
while(true){
if((i__34310 < count__34309)){
var n = cljs.core._nth.call(null,chunk__34308,i__34310);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34311 = seq__34307;
var G__34312 = chunk__34308;
var G__34313 = count__34309;
var G__34314 = (i__34310 + (1));
seq__34307 = G__34311;
chunk__34308 = G__34312;
count__34309 = G__34313;
i__34310 = G__34314;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34307);
if(temp__4657__auto__){
var seq__34307__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34307__$1)){
var c__26800__auto__ = cljs.core.chunk_first.call(null,seq__34307__$1);
var G__34315 = cljs.core.chunk_rest.call(null,seq__34307__$1);
var G__34316 = c__26800__auto__;
var G__34317 = cljs.core.count.call(null,c__26800__auto__);
var G__34318 = (0);
seq__34307 = G__34315;
chunk__34308 = G__34316;
count__34309 = G__34317;
i__34310 = G__34318;
continue;
} else {
var n = cljs.core.first.call(null,seq__34307__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34319 = cljs.core.next.call(null,seq__34307__$1);
var G__34320 = null;
var G__34321 = (0);
var G__34322 = (0);
seq__34307 = G__34319;
chunk__34308 = G__34320;
count__34309 = G__34321;
i__34310 = G__34322;
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

var seq__34373_34384 = cljs.core.seq.call(null,deps);
var chunk__34374_34385 = null;
var count__34375_34386 = (0);
var i__34376_34387 = (0);
while(true){
if((i__34376_34387 < count__34375_34386)){
var dep_34388 = cljs.core._nth.call(null,chunk__34374_34385,i__34376_34387);
topo_sort_helper_STAR_.call(null,dep_34388,(depth + (1)),state);

var G__34389 = seq__34373_34384;
var G__34390 = chunk__34374_34385;
var G__34391 = count__34375_34386;
var G__34392 = (i__34376_34387 + (1));
seq__34373_34384 = G__34389;
chunk__34374_34385 = G__34390;
count__34375_34386 = G__34391;
i__34376_34387 = G__34392;
continue;
} else {
var temp__4657__auto___34393 = cljs.core.seq.call(null,seq__34373_34384);
if(temp__4657__auto___34393){
var seq__34373_34394__$1 = temp__4657__auto___34393;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34373_34394__$1)){
var c__26800__auto___34395 = cljs.core.chunk_first.call(null,seq__34373_34394__$1);
var G__34396 = cljs.core.chunk_rest.call(null,seq__34373_34394__$1);
var G__34397 = c__26800__auto___34395;
var G__34398 = cljs.core.count.call(null,c__26800__auto___34395);
var G__34399 = (0);
seq__34373_34384 = G__34396;
chunk__34374_34385 = G__34397;
count__34375_34386 = G__34398;
i__34376_34387 = G__34399;
continue;
} else {
var dep_34400 = cljs.core.first.call(null,seq__34373_34394__$1);
topo_sort_helper_STAR_.call(null,dep_34400,(depth + (1)),state);

var G__34401 = cljs.core.next.call(null,seq__34373_34394__$1);
var G__34402 = null;
var G__34403 = (0);
var G__34404 = (0);
seq__34373_34384 = G__34401;
chunk__34374_34385 = G__34402;
count__34375_34386 = G__34403;
i__34376_34387 = G__34404;
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
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__34377){
var vec__34381 = p__34377;
var seq__34382 = cljs.core.seq.call(null,vec__34381);
var first__34383 = cljs.core.first.call(null,seq__34382);
var seq__34382__$1 = cljs.core.next.call(null,seq__34382);
var x = first__34383;
var xs = seq__34382__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__34381,seq__34382,first__34383,seq__34382__$1,x,xs,get_deps__$1){
return (function (p1__34323_SHARP_){
return clojure.set.difference.call(null,p1__34323_SHARP_,x);
});})(vec__34381,seq__34382,first__34383,seq__34382__$1,x,xs,get_deps__$1))
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

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__34417 = cljs.core.seq.call(null,provides);
var chunk__34418 = null;
var count__34419 = (0);
var i__34420 = (0);
while(true){
if((i__34420 < count__34419)){
var prov = cljs.core._nth.call(null,chunk__34418,i__34420);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34421_34429 = cljs.core.seq.call(null,requires);
var chunk__34422_34430 = null;
var count__34423_34431 = (0);
var i__34424_34432 = (0);
while(true){
if((i__34424_34432 < count__34423_34431)){
var req_34433 = cljs.core._nth.call(null,chunk__34422_34430,i__34424_34432);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34433,prov);

var G__34434 = seq__34421_34429;
var G__34435 = chunk__34422_34430;
var G__34436 = count__34423_34431;
var G__34437 = (i__34424_34432 + (1));
seq__34421_34429 = G__34434;
chunk__34422_34430 = G__34435;
count__34423_34431 = G__34436;
i__34424_34432 = G__34437;
continue;
} else {
var temp__4657__auto___34438 = cljs.core.seq.call(null,seq__34421_34429);
if(temp__4657__auto___34438){
var seq__34421_34439__$1 = temp__4657__auto___34438;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34421_34439__$1)){
var c__26800__auto___34440 = cljs.core.chunk_first.call(null,seq__34421_34439__$1);
var G__34441 = cljs.core.chunk_rest.call(null,seq__34421_34439__$1);
var G__34442 = c__26800__auto___34440;
var G__34443 = cljs.core.count.call(null,c__26800__auto___34440);
var G__34444 = (0);
seq__34421_34429 = G__34441;
chunk__34422_34430 = G__34442;
count__34423_34431 = G__34443;
i__34424_34432 = G__34444;
continue;
} else {
var req_34445 = cljs.core.first.call(null,seq__34421_34439__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34445,prov);

var G__34446 = cljs.core.next.call(null,seq__34421_34439__$1);
var G__34447 = null;
var G__34448 = (0);
var G__34449 = (0);
seq__34421_34429 = G__34446;
chunk__34422_34430 = G__34447;
count__34423_34431 = G__34448;
i__34424_34432 = G__34449;
continue;
}
} else {
}
}
break;
}

var G__34450 = seq__34417;
var G__34451 = chunk__34418;
var G__34452 = count__34419;
var G__34453 = (i__34420 + (1));
seq__34417 = G__34450;
chunk__34418 = G__34451;
count__34419 = G__34452;
i__34420 = G__34453;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34417);
if(temp__4657__auto__){
var seq__34417__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34417__$1)){
var c__26800__auto__ = cljs.core.chunk_first.call(null,seq__34417__$1);
var G__34454 = cljs.core.chunk_rest.call(null,seq__34417__$1);
var G__34455 = c__26800__auto__;
var G__34456 = cljs.core.count.call(null,c__26800__auto__);
var G__34457 = (0);
seq__34417 = G__34454;
chunk__34418 = G__34455;
count__34419 = G__34456;
i__34420 = G__34457;
continue;
} else {
var prov = cljs.core.first.call(null,seq__34417__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34425_34458 = cljs.core.seq.call(null,requires);
var chunk__34426_34459 = null;
var count__34427_34460 = (0);
var i__34428_34461 = (0);
while(true){
if((i__34428_34461 < count__34427_34460)){
var req_34462 = cljs.core._nth.call(null,chunk__34426_34459,i__34428_34461);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34462,prov);

var G__34463 = seq__34425_34458;
var G__34464 = chunk__34426_34459;
var G__34465 = count__34427_34460;
var G__34466 = (i__34428_34461 + (1));
seq__34425_34458 = G__34463;
chunk__34426_34459 = G__34464;
count__34427_34460 = G__34465;
i__34428_34461 = G__34466;
continue;
} else {
var temp__4657__auto___34467__$1 = cljs.core.seq.call(null,seq__34425_34458);
if(temp__4657__auto___34467__$1){
var seq__34425_34468__$1 = temp__4657__auto___34467__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34425_34468__$1)){
var c__26800__auto___34469 = cljs.core.chunk_first.call(null,seq__34425_34468__$1);
var G__34470 = cljs.core.chunk_rest.call(null,seq__34425_34468__$1);
var G__34471 = c__26800__auto___34469;
var G__34472 = cljs.core.count.call(null,c__26800__auto___34469);
var G__34473 = (0);
seq__34425_34458 = G__34470;
chunk__34426_34459 = G__34471;
count__34427_34460 = G__34472;
i__34428_34461 = G__34473;
continue;
} else {
var req_34474 = cljs.core.first.call(null,seq__34425_34468__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34474,prov);

var G__34475 = cljs.core.next.call(null,seq__34425_34468__$1);
var G__34476 = null;
var G__34477 = (0);
var G__34478 = (0);
seq__34425_34458 = G__34475;
chunk__34426_34459 = G__34476;
count__34427_34460 = G__34477;
i__34428_34461 = G__34478;
continue;
}
} else {
}
}
break;
}

var G__34479 = cljs.core.next.call(null,seq__34417__$1);
var G__34480 = null;
var G__34481 = (0);
var G__34482 = (0);
seq__34417 = G__34479;
chunk__34418 = G__34480;
count__34419 = G__34481;
i__34420 = G__34482;
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
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__34487_34491 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__34488_34492 = null;
var count__34489_34493 = (0);
var i__34490_34494 = (0);
while(true){
if((i__34490_34494 < count__34489_34493)){
var ns_34495 = cljs.core._nth.call(null,chunk__34488_34492,i__34490_34494);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34495);

var G__34496 = seq__34487_34491;
var G__34497 = chunk__34488_34492;
var G__34498 = count__34489_34493;
var G__34499 = (i__34490_34494 + (1));
seq__34487_34491 = G__34496;
chunk__34488_34492 = G__34497;
count__34489_34493 = G__34498;
i__34490_34494 = G__34499;
continue;
} else {
var temp__4657__auto___34500 = cljs.core.seq.call(null,seq__34487_34491);
if(temp__4657__auto___34500){
var seq__34487_34501__$1 = temp__4657__auto___34500;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34487_34501__$1)){
var c__26800__auto___34502 = cljs.core.chunk_first.call(null,seq__34487_34501__$1);
var G__34503 = cljs.core.chunk_rest.call(null,seq__34487_34501__$1);
var G__34504 = c__26800__auto___34502;
var G__34505 = cljs.core.count.call(null,c__26800__auto___34502);
var G__34506 = (0);
seq__34487_34491 = G__34503;
chunk__34488_34492 = G__34504;
count__34489_34493 = G__34505;
i__34490_34494 = G__34506;
continue;
} else {
var ns_34507 = cljs.core.first.call(null,seq__34487_34501__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34507);

var G__34508 = cljs.core.next.call(null,seq__34487_34501__$1);
var G__34509 = null;
var G__34510 = (0);
var G__34511 = (0);
seq__34487_34491 = G__34508;
chunk__34488_34492 = G__34509;
count__34489_34493 = G__34510;
i__34490_34494 = G__34511;
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
goog.require_figwheel_backup_ = (function (){var or__25989__auto__ = goog.require__;
if(cljs.core.truth_(or__25989__auto__)){
return or__25989__auto__;
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
var G__34512__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__34512 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34513__i = 0, G__34513__a = new Array(arguments.length -  0);
while (G__34513__i < G__34513__a.length) {G__34513__a[G__34513__i] = arguments[G__34513__i + 0]; ++G__34513__i;}
  args = new cljs.core.IndexedSeq(G__34513__a,0);
} 
return G__34512__delegate.call(this,args);};
G__34512.cljs$lang$maxFixedArity = 0;
G__34512.cljs$lang$applyTo = (function (arglist__34514){
var args = cljs.core.seq(arglist__34514);
return G__34512__delegate(args);
});
G__34512.cljs$core$IFn$_invoke$arity$variadic = G__34512__delegate;
return G__34512;
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
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__34515 = cljs.core._EQ_;
var expr__34516 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__34515.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__34516))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str(node_path_lib.sep),cljs.core.str(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__34515,expr__34516){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__34515,expr__34516))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__34515,expr__34516){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e34518){if((e34518 instanceof Error)){
var e = e34518;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34518;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__34515,expr__34516))
} else {
if(cljs.core.truth_(pred__34515.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__34516))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__34515.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__34516))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__34515.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__34516))){
return ((function (pred__34515,expr__34516){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e34519){if((e34519 instanceof Error)){
var e = e34519;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34519;

}
}})());
});
;})(pred__34515,expr__34516))
} else {
return ((function (pred__34515,expr__34516){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__34515,expr__34516))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__34520,callback){
var map__34523 = p__34520;
var map__34523__$1 = ((((!((map__34523 == null)))?((((map__34523.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34523.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34523):map__34523);
var file_msg = map__34523__$1;
var request_url = cljs.core.get.call(null,map__34523__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__34523,map__34523__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__34523,map__34523__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__29669__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29669__auto__){
return (function (){
var f__29670__auto__ = (function (){var switch__29557__auto__ = ((function (c__29669__auto__){
return (function (state_34547){
var state_val_34548 = (state_34547[(1)]);
if((state_val_34548 === (7))){
var inst_34543 = (state_34547[(2)]);
var state_34547__$1 = state_34547;
var statearr_34549_34569 = state_34547__$1;
(statearr_34549_34569[(2)] = inst_34543);

(statearr_34549_34569[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34548 === (1))){
var state_34547__$1 = state_34547;
var statearr_34550_34570 = state_34547__$1;
(statearr_34550_34570[(2)] = null);

(statearr_34550_34570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34548 === (4))){
var inst_34527 = (state_34547[(7)]);
var inst_34527__$1 = (state_34547[(2)]);
var state_34547__$1 = (function (){var statearr_34551 = state_34547;
(statearr_34551[(7)] = inst_34527__$1);

return statearr_34551;
})();
if(cljs.core.truth_(inst_34527__$1)){
var statearr_34552_34571 = state_34547__$1;
(statearr_34552_34571[(1)] = (5));

} else {
var statearr_34553_34572 = state_34547__$1;
(statearr_34553_34572[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34548 === (6))){
var state_34547__$1 = state_34547;
var statearr_34554_34573 = state_34547__$1;
(statearr_34554_34573[(2)] = null);

(statearr_34554_34573[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34548 === (3))){
var inst_34545 = (state_34547[(2)]);
var state_34547__$1 = state_34547;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34547__$1,inst_34545);
} else {
if((state_val_34548 === (2))){
var state_34547__$1 = state_34547;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34547__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_34548 === (11))){
var inst_34539 = (state_34547[(2)]);
var state_34547__$1 = (function (){var statearr_34555 = state_34547;
(statearr_34555[(8)] = inst_34539);

return statearr_34555;
})();
var statearr_34556_34574 = state_34547__$1;
(statearr_34556_34574[(2)] = null);

(statearr_34556_34574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34548 === (9))){
var inst_34533 = (state_34547[(9)]);
var inst_34531 = (state_34547[(10)]);
var inst_34535 = inst_34533.call(null,inst_34531);
var state_34547__$1 = state_34547;
var statearr_34557_34575 = state_34547__$1;
(statearr_34557_34575[(2)] = inst_34535);

(statearr_34557_34575[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34548 === (5))){
var inst_34527 = (state_34547[(7)]);
var inst_34529 = figwheel.client.file_reloading.blocking_load.call(null,inst_34527);
var state_34547__$1 = state_34547;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34547__$1,(8),inst_34529);
} else {
if((state_val_34548 === (10))){
var inst_34531 = (state_34547[(10)]);
var inst_34537 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_34531);
var state_34547__$1 = state_34547;
var statearr_34558_34576 = state_34547__$1;
(statearr_34558_34576[(2)] = inst_34537);

(statearr_34558_34576[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34548 === (8))){
var inst_34527 = (state_34547[(7)]);
var inst_34533 = (state_34547[(9)]);
var inst_34531 = (state_34547[(2)]);
var inst_34532 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_34533__$1 = cljs.core.get.call(null,inst_34532,inst_34527);
var state_34547__$1 = (function (){var statearr_34559 = state_34547;
(statearr_34559[(9)] = inst_34533__$1);

(statearr_34559[(10)] = inst_34531);

return statearr_34559;
})();
if(cljs.core.truth_(inst_34533__$1)){
var statearr_34560_34577 = state_34547__$1;
(statearr_34560_34577[(1)] = (9));

} else {
var statearr_34561_34578 = state_34547__$1;
(statearr_34561_34578[(1)] = (10));

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
});})(c__29669__auto__))
;
return ((function (switch__29557__auto__,c__29669__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__29558__auto__ = null;
var figwheel$client$file_reloading$state_machine__29558__auto____0 = (function (){
var statearr_34565 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34565[(0)] = figwheel$client$file_reloading$state_machine__29558__auto__);

(statearr_34565[(1)] = (1));

return statearr_34565;
});
var figwheel$client$file_reloading$state_machine__29558__auto____1 = (function (state_34547){
while(true){
var ret_value__29559__auto__ = (function (){try{while(true){
var result__29560__auto__ = switch__29557__auto__.call(null,state_34547);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29560__auto__;
}
break;
}
}catch (e34566){if((e34566 instanceof Object)){
var ex__29561__auto__ = e34566;
var statearr_34567_34579 = state_34547;
(statearr_34567_34579[(5)] = ex__29561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34547);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34566;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34580 = state_34547;
state_34547 = G__34580;
continue;
} else {
return ret_value__29559__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__29558__auto__ = function(state_34547){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__29558__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__29558__auto____1.call(this,state_34547);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__29558__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__29558__auto____0;
figwheel$client$file_reloading$state_machine__29558__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__29558__auto____1;
return figwheel$client$file_reloading$state_machine__29558__auto__;
})()
;})(switch__29557__auto__,c__29669__auto__))
})();
var state__29671__auto__ = (function (){var statearr_34568 = f__29670__auto__.call(null);
(statearr_34568[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29669__auto__);

return statearr_34568;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29671__auto__);
});})(c__29669__auto__))
);

return c__29669__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__34581,callback){
var map__34584 = p__34581;
var map__34584__$1 = ((((!((map__34584 == null)))?((((map__34584.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34584.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34584):map__34584);
var file_msg = map__34584__$1;
var namespace = cljs.core.get.call(null,map__34584__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__34584,map__34584__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__34584,map__34584__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__34586){
var map__34589 = p__34586;
var map__34589__$1 = ((((!((map__34589 == null)))?((((map__34589.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34589.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34589):map__34589);
var file_msg = map__34589__$1;
var namespace = cljs.core.get.call(null,map__34589__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__34591){
var map__34594 = p__34591;
var map__34594__$1 = ((((!((map__34594 == null)))?((((map__34594.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34594.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34594):map__34594);
var file_msg = map__34594__$1;
var namespace = cljs.core.get.call(null,map__34594__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__25977__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__25977__auto__){
var or__25989__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__25989__auto__)){
return or__25989__auto__;
} else {
var or__25989__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__25989__auto____$1)){
return or__25989__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__25977__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__34596,callback){
var map__34599 = p__34596;
var map__34599__$1 = ((((!((map__34599 == null)))?((((map__34599.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34599.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34599):map__34599);
var file_msg = map__34599__$1;
var request_url = cljs.core.get.call(null,map__34599__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__34599__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

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
var c__29669__auto___34703 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29669__auto___34703,out){
return (function (){
var f__29670__auto__ = (function (){var switch__29557__auto__ = ((function (c__29669__auto___34703,out){
return (function (state_34685){
var state_val_34686 = (state_34685[(1)]);
if((state_val_34686 === (1))){
var inst_34659 = cljs.core.seq.call(null,files);
var inst_34660 = cljs.core.first.call(null,inst_34659);
var inst_34661 = cljs.core.next.call(null,inst_34659);
var inst_34662 = files;
var state_34685__$1 = (function (){var statearr_34687 = state_34685;
(statearr_34687[(7)] = inst_34660);

(statearr_34687[(8)] = inst_34661);

(statearr_34687[(9)] = inst_34662);

return statearr_34687;
})();
var statearr_34688_34704 = state_34685__$1;
(statearr_34688_34704[(2)] = null);

(statearr_34688_34704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34686 === (2))){
var inst_34668 = (state_34685[(10)]);
var inst_34662 = (state_34685[(9)]);
var inst_34667 = cljs.core.seq.call(null,inst_34662);
var inst_34668__$1 = cljs.core.first.call(null,inst_34667);
var inst_34669 = cljs.core.next.call(null,inst_34667);
var inst_34670 = (inst_34668__$1 == null);
var inst_34671 = cljs.core.not.call(null,inst_34670);
var state_34685__$1 = (function (){var statearr_34689 = state_34685;
(statearr_34689[(10)] = inst_34668__$1);

(statearr_34689[(11)] = inst_34669);

return statearr_34689;
})();
if(inst_34671){
var statearr_34690_34705 = state_34685__$1;
(statearr_34690_34705[(1)] = (4));

} else {
var statearr_34691_34706 = state_34685__$1;
(statearr_34691_34706[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34686 === (3))){
var inst_34683 = (state_34685[(2)]);
var state_34685__$1 = state_34685;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34685__$1,inst_34683);
} else {
if((state_val_34686 === (4))){
var inst_34668 = (state_34685[(10)]);
var inst_34673 = figwheel.client.file_reloading.reload_js_file.call(null,inst_34668);
var state_34685__$1 = state_34685;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34685__$1,(7),inst_34673);
} else {
if((state_val_34686 === (5))){
var inst_34679 = cljs.core.async.close_BANG_.call(null,out);
var state_34685__$1 = state_34685;
var statearr_34692_34707 = state_34685__$1;
(statearr_34692_34707[(2)] = inst_34679);

(statearr_34692_34707[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34686 === (6))){
var inst_34681 = (state_34685[(2)]);
var state_34685__$1 = state_34685;
var statearr_34693_34708 = state_34685__$1;
(statearr_34693_34708[(2)] = inst_34681);

(statearr_34693_34708[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34686 === (7))){
var inst_34669 = (state_34685[(11)]);
var inst_34675 = (state_34685[(2)]);
var inst_34676 = cljs.core.async.put_BANG_.call(null,out,inst_34675);
var inst_34662 = inst_34669;
var state_34685__$1 = (function (){var statearr_34694 = state_34685;
(statearr_34694[(12)] = inst_34676);

(statearr_34694[(9)] = inst_34662);

return statearr_34694;
})();
var statearr_34695_34709 = state_34685__$1;
(statearr_34695_34709[(2)] = null);

(statearr_34695_34709[(1)] = (2));


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
});})(c__29669__auto___34703,out))
;
return ((function (switch__29557__auto__,c__29669__auto___34703,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29558__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29558__auto____0 = (function (){
var statearr_34699 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34699[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29558__auto__);

(statearr_34699[(1)] = (1));

return statearr_34699;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29558__auto____1 = (function (state_34685){
while(true){
var ret_value__29559__auto__ = (function (){try{while(true){
var result__29560__auto__ = switch__29557__auto__.call(null,state_34685);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29560__auto__;
}
break;
}
}catch (e34700){if((e34700 instanceof Object)){
var ex__29561__auto__ = e34700;
var statearr_34701_34710 = state_34685;
(statearr_34701_34710[(5)] = ex__29561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34685);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34700;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34711 = state_34685;
state_34685 = G__34711;
continue;
} else {
return ret_value__29559__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29558__auto__ = function(state_34685){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29558__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29558__auto____1.call(this,state_34685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29558__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29558__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29558__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29558__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29558__auto__;
})()
;})(switch__29557__auto__,c__29669__auto___34703,out))
})();
var state__29671__auto__ = (function (){var statearr_34702 = f__29670__auto__.call(null);
(statearr_34702[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29669__auto___34703);

return statearr_34702;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29671__auto__);
});})(c__29669__auto___34703,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__34712,opts){
var map__34716 = p__34712;
var map__34716__$1 = ((((!((map__34716 == null)))?((((map__34716.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34716.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34716):map__34716);
var eval_body__$1 = cljs.core.get.call(null,map__34716__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__34716__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__25977__auto__ = eval_body__$1;
if(cljs.core.truth_(and__25977__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__25977__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e34718){var e = e34718;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__34719_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34719_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__34728){
var vec__34729 = p__34728;
var k = cljs.core.nth.call(null,vec__34729,(0),null);
var v = cljs.core.nth.call(null,vec__34729,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__34732){
var vec__34733 = p__34732;
var k = cljs.core.nth.call(null,vec__34733,(0),null);
var v = cljs.core.nth.call(null,vec__34733,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__34739,p__34740){
var map__34987 = p__34739;
var map__34987__$1 = ((((!((map__34987 == null)))?((((map__34987.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34987.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34987):map__34987);
var opts = map__34987__$1;
var before_jsload = cljs.core.get.call(null,map__34987__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__34987__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__34987__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__34988 = p__34740;
var map__34988__$1 = ((((!((map__34988 == null)))?((((map__34988.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34988.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34988):map__34988);
var msg = map__34988__$1;
var files = cljs.core.get.call(null,map__34988__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__34988__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__34988__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__29669__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29669__auto__,map__34987,map__34987__$1,opts,before_jsload,on_jsload,reload_dependents,map__34988,map__34988__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__29670__auto__ = (function (){var switch__29557__auto__ = ((function (c__29669__auto__,map__34987,map__34987__$1,opts,before_jsload,on_jsload,reload_dependents,map__34988,map__34988__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_35141){
var state_val_35142 = (state_35141[(1)]);
if((state_val_35142 === (7))){
var inst_35004 = (state_35141[(7)]);
var inst_35005 = (state_35141[(8)]);
var inst_35003 = (state_35141[(9)]);
var inst_35002 = (state_35141[(10)]);
var inst_35010 = cljs.core._nth.call(null,inst_35003,inst_35005);
var inst_35011 = figwheel.client.file_reloading.eval_body.call(null,inst_35010,opts);
var inst_35012 = (inst_35005 + (1));
var tmp35143 = inst_35004;
var tmp35144 = inst_35003;
var tmp35145 = inst_35002;
var inst_35002__$1 = tmp35145;
var inst_35003__$1 = tmp35144;
var inst_35004__$1 = tmp35143;
var inst_35005__$1 = inst_35012;
var state_35141__$1 = (function (){var statearr_35146 = state_35141;
(statearr_35146[(7)] = inst_35004__$1);

(statearr_35146[(8)] = inst_35005__$1);

(statearr_35146[(9)] = inst_35003__$1);

(statearr_35146[(10)] = inst_35002__$1);

(statearr_35146[(11)] = inst_35011);

return statearr_35146;
})();
var statearr_35147_35233 = state_35141__$1;
(statearr_35147_35233[(2)] = null);

(statearr_35147_35233[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35142 === (20))){
var inst_35045 = (state_35141[(12)]);
var inst_35053 = figwheel.client.file_reloading.sort_files.call(null,inst_35045);
var state_35141__$1 = state_35141;
var statearr_35148_35234 = state_35141__$1;
(statearr_35148_35234[(2)] = inst_35053);

(statearr_35148_35234[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35142 === (27))){
var state_35141__$1 = state_35141;
var statearr_35149_35235 = state_35141__$1;
(statearr_35149_35235[(2)] = null);

(statearr_35149_35235[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35142 === (1))){
var inst_34994 = (state_35141[(13)]);
var inst_34991 = before_jsload.call(null,files);
var inst_34992 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_34993 = (function (){return ((function (inst_34994,inst_34991,inst_34992,state_val_35142,c__29669__auto__,map__34987,map__34987__$1,opts,before_jsload,on_jsload,reload_dependents,map__34988,map__34988__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34736_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34736_SHARP_);
});
;})(inst_34994,inst_34991,inst_34992,state_val_35142,c__29669__auto__,map__34987,map__34987__$1,opts,before_jsload,on_jsload,reload_dependents,map__34988,map__34988__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34994__$1 = cljs.core.filter.call(null,inst_34993,files);
var inst_34995 = cljs.core.not_empty.call(null,inst_34994__$1);
var state_35141__$1 = (function (){var statearr_35150 = state_35141;
(statearr_35150[(14)] = inst_34991);

(statearr_35150[(15)] = inst_34992);

(statearr_35150[(13)] = inst_34994__$1);

return statearr_35150;
})();
if(cljs.core.truth_(inst_34995)){
var statearr_35151_35236 = state_35141__$1;
(statearr_35151_35236[(1)] = (2));

} else {
var statearr_35152_35237 = state_35141__$1;
(statearr_35152_35237[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35142 === (24))){
var state_35141__$1 = state_35141;
var statearr_35153_35238 = state_35141__$1;
(statearr_35153_35238[(2)] = null);

(statearr_35153_35238[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35142 === (39))){
var inst_35095 = (state_35141[(16)]);
var state_35141__$1 = state_35141;
var statearr_35154_35239 = state_35141__$1;
(statearr_35154_35239[(2)] = inst_35095);

(statearr_35154_35239[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35142 === (46))){
var inst_35136 = (state_35141[(2)]);
var state_35141__$1 = state_35141;
var statearr_35155_35240 = state_35141__$1;
(statearr_35155_35240[(2)] = inst_35136);

(statearr_35155_35240[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35142 === (4))){
var inst_35039 = (state_35141[(2)]);
var inst_35040 = cljs.core.List.EMPTY;
var inst_35041 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_35040);
var inst_35042 = (function (){return ((function (inst_35039,inst_35040,inst_35041,state_val_35142,c__29669__auto__,map__34987,map__34987__$1,opts,before_jsload,on_jsload,reload_dependents,map__34988,map__34988__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34737_SHARP_){
var and__25977__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34737_SHARP_);
if(cljs.core.truth_(and__25977__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34737_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__34737_SHARP_)));
} else {
return and__25977__auto__;
}
});
;})(inst_35039,inst_35040,inst_35041,state_val_35142,c__29669__auto__,map__34987,map__34987__$1,opts,before_jsload,on_jsload,reload_dependents,map__34988,map__34988__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35043 = cljs.core.filter.call(null,inst_35042,files);
var inst_35044 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_35045 = cljs.core.concat.call(null,inst_35043,inst_35044);
var state_35141__$1 = (function (){var statearr_35156 = state_35141;
(statearr_35156[(17)] = inst_35039);

(statearr_35156[(18)] = inst_35041);

(statearr_35156[(12)] = inst_35045);

return statearr_35156;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_35157_35241 = state_35141__$1;
(statearr_35157_35241[(1)] = (16));

} else {
var statearr_35158_35242 = state_35141__$1;
(statearr_35158_35242[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35142 === (15))){
var inst_35029 = (state_35141[(2)]);
var state_35141__$1 = state_35141;
var statearr_35159_35243 = state_35141__$1;
(statearr_35159_35243[(2)] = inst_35029);

(statearr_35159_35243[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35142 === (21))){
var inst_35055 = (state_35141[(19)]);
var inst_35055__$1 = (state_35141[(2)]);
var inst_35056 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_35055__$1);
var state_35141__$1 = (function (){var statearr_35160 = state_35141;
(statearr_35160[(19)] = inst_35055__$1);

return statearr_35160;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35141__$1,(22),inst_35056);
} else {
if((state_val_35142 === (31))){
var inst_35139 = (state_35141[(2)]);
var state_35141__$1 = state_35141;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35141__$1,inst_35139);
} else {
if((state_val_35142 === (32))){
var inst_35095 = (state_35141[(16)]);
var inst_35100 = inst_35095.cljs$lang$protocol_mask$partition0$;
var inst_35101 = (inst_35100 & (64));
var inst_35102 = inst_35095.cljs$core$ISeq$;
var inst_35103 = (inst_35101) || (inst_35102);
var state_35141__$1 = state_35141;
if(cljs.core.truth_(inst_35103)){
var statearr_35161_35244 = state_35141__$1;
(statearr_35161_35244[(1)] = (35));

} else {
var statearr_35162_35245 = state_35141__$1;
(statearr_35162_35245[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35142 === (40))){
var inst_35116 = (state_35141[(20)]);
var inst_35115 = (state_35141[(2)]);
var inst_35116__$1 = cljs.core.get.call(null,inst_35115,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_35117 = cljs.core.get.call(null,inst_35115,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_35118 = cljs.core.not_empty.call(null,inst_35116__$1);
var state_35141__$1 = (function (){var statearr_35163 = state_35141;
(statearr_35163[(20)] = inst_35116__$1);

(statearr_35163[(21)] = inst_35117);

return statearr_35163;
})();
if(cljs.core.truth_(inst_35118)){
var statearr_35164_35246 = state_35141__$1;
(statearr_35164_35246[(1)] = (41));

} else {
var statearr_35165_35247 = state_35141__$1;
(statearr_35165_35247[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35142 === (33))){
var state_35141__$1 = state_35141;
var statearr_35166_35248 = state_35141__$1;
(statearr_35166_35248[(2)] = false);

(statearr_35166_35248[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35142 === (13))){
var inst_35015 = (state_35141[(22)]);
var inst_35019 = cljs.core.chunk_first.call(null,inst_35015);
var inst_35020 = cljs.core.chunk_rest.call(null,inst_35015);
var inst_35021 = cljs.core.count.call(null,inst_35019);
var inst_35002 = inst_35020;
var inst_35003 = inst_35019;
var inst_35004 = inst_35021;
var inst_35005 = (0);
var state_35141__$1 = (function (){var statearr_35167 = state_35141;
(statearr_35167[(7)] = inst_35004);

(statearr_35167[(8)] = inst_35005);

(statearr_35167[(9)] = inst_35003);

(statearr_35167[(10)] = inst_35002);

return statearr_35167;
})();
var statearr_35168_35249 = state_35141__$1;
(statearr_35168_35249[(2)] = null);

(statearr_35168_35249[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35142 === (22))){
var inst_35063 = (state_35141[(23)]);
var inst_35058 = (state_35141[(24)]);
var inst_35055 = (state_35141[(19)]);
var inst_35059 = (state_35141[(25)]);
var inst_35058__$1 = (state_35141[(2)]);
var inst_35059__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35058__$1);
var inst_35060 = (function (){var all_files = inst_35055;
var res_SINGLEQUOTE_ = inst_35058__$1;
var res = inst_35059__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_35063,inst_35058,inst_35055,inst_35059,inst_35058__$1,inst_35059__$1,state_val_35142,c__29669__auto__,map__34987,map__34987__$1,opts,before_jsload,on_jsload,reload_dependents,map__34988,map__34988__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34738_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__34738_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_35063,inst_35058,inst_35055,inst_35059,inst_35058__$1,inst_35059__$1,state_val_35142,c__29669__auto__,map__34987,map__34987__$1,opts,before_jsload,on_jsload,reload_dependents,map__34988,map__34988__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35061 = cljs.core.filter.call(null,inst_35060,inst_35058__$1);
var inst_35062 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_35063__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35062);
var inst_35064 = cljs.core.not_empty.call(null,inst_35063__$1);
var state_35141__$1 = (function (){var statearr_35169 = state_35141;
(statearr_35169[(23)] = inst_35063__$1);

(statearr_35169[(26)] = inst_35061);

(statearr_35169[(24)] = inst_35058__$1);

(statearr_35169[(25)] = inst_35059__$1);

return statearr_35169;
})();
if(cljs.core.truth_(inst_35064)){
var statearr_35170_35250 = state_35141__$1;
(statearr_35170_35250[(1)] = (23));

} else {
var statearr_35171_35251 = state_35141__$1;
(statearr_35171_35251[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35142 === (36))){
var state_35141__$1 = state_35141;
var statearr_35172_35252 = state_35141__$1;
(statearr_35172_35252[(2)] = false);

(statearr_35172_35252[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35142 === (41))){
var inst_35116 = (state_35141[(20)]);
var inst_35120 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_35121 = cljs.core.map.call(null,inst_35120,inst_35116);
var inst_35122 = cljs.core.pr_str.call(null,inst_35121);
var inst_35123 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_35122)].join('');
var inst_35124 = figwheel.client.utils.log.call(null,inst_35123);
var state_35141__$1 = state_35141;
var statearr_35173_35253 = state_35141__$1;
(statearr_35173_35253[(2)] = inst_35124);

(statearr_35173_35253[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35142 === (43))){
var inst_35117 = (state_35141[(21)]);
var inst_35127 = (state_35141[(2)]);
var inst_35128 = cljs.core.not_empty.call(null,inst_35117);
var state_35141__$1 = (function (){var statearr_35174 = state_35141;
(statearr_35174[(27)] = inst_35127);

return statearr_35174;
})();
if(cljs.core.truth_(inst_35128)){
var statearr_35175_35254 = state_35141__$1;
(statearr_35175_35254[(1)] = (44));

} else {
var statearr_35176_35255 = state_35141__$1;
(statearr_35176_35255[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35142 === (29))){
var inst_35063 = (state_35141[(23)]);
var inst_35061 = (state_35141[(26)]);
var inst_35095 = (state_35141[(16)]);
var inst_35058 = (state_35141[(24)]);
var inst_35055 = (state_35141[(19)]);
var inst_35059 = (state_35141[(25)]);
var inst_35091 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_35094 = (function (){var all_files = inst_35055;
var res_SINGLEQUOTE_ = inst_35058;
var res = inst_35059;
var files_not_loaded = inst_35061;
var dependencies_that_loaded = inst_35063;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35063,inst_35061,inst_35095,inst_35058,inst_35055,inst_35059,inst_35091,state_val_35142,c__29669__auto__,map__34987,map__34987__$1,opts,before_jsload,on_jsload,reload_dependents,map__34988,map__34988__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35093){
var map__35177 = p__35093;
var map__35177__$1 = ((((!((map__35177 == null)))?((((map__35177.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35177.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35177):map__35177);
var namespace = cljs.core.get.call(null,map__35177__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35063,inst_35061,inst_35095,inst_35058,inst_35055,inst_35059,inst_35091,state_val_35142,c__29669__auto__,map__34987,map__34987__$1,opts,before_jsload,on_jsload,reload_dependents,map__34988,map__34988__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35095__$1 = cljs.core.group_by.call(null,inst_35094,inst_35061);
var inst_35097 = (inst_35095__$1 == null);
var inst_35098 = cljs.core.not.call(null,inst_35097);
var state_35141__$1 = (function (){var statearr_35179 = state_35141;
(statearr_35179[(16)] = inst_35095__$1);

(statearr_35179[(28)] = inst_35091);

return statearr_35179;
})();
if(inst_35098){
var statearr_35180_35256 = state_35141__$1;
(statearr_35180_35256[(1)] = (32));

} else {
var statearr_35181_35257 = state_35141__$1;
(statearr_35181_35257[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35142 === (44))){
var inst_35117 = (state_35141[(21)]);
var inst_35130 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35117);
var inst_35131 = cljs.core.pr_str.call(null,inst_35130);
var inst_35132 = [cljs.core.str("not required: "),cljs.core.str(inst_35131)].join('');
var inst_35133 = figwheel.client.utils.log.call(null,inst_35132);
var state_35141__$1 = state_35141;
var statearr_35182_35258 = state_35141__$1;
(statearr_35182_35258[(2)] = inst_35133);

(statearr_35182_35258[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35142 === (6))){
var inst_35036 = (state_35141[(2)]);
var state_35141__$1 = state_35141;
var statearr_35183_35259 = state_35141__$1;
(statearr_35183_35259[(2)] = inst_35036);

(statearr_35183_35259[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35142 === (28))){
var inst_35061 = (state_35141[(26)]);
var inst_35088 = (state_35141[(2)]);
var inst_35089 = cljs.core.not_empty.call(null,inst_35061);
var state_35141__$1 = (function (){var statearr_35184 = state_35141;
(statearr_35184[(29)] = inst_35088);

return statearr_35184;
})();
if(cljs.core.truth_(inst_35089)){
var statearr_35185_35260 = state_35141__$1;
(statearr_35185_35260[(1)] = (29));

} else {
var statearr_35186_35261 = state_35141__$1;
(statearr_35186_35261[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35142 === (25))){
var inst_35059 = (state_35141[(25)]);
var inst_35075 = (state_35141[(2)]);
var inst_35076 = cljs.core.not_empty.call(null,inst_35059);
var state_35141__$1 = (function (){var statearr_35187 = state_35141;
(statearr_35187[(30)] = inst_35075);

return statearr_35187;
})();
if(cljs.core.truth_(inst_35076)){
var statearr_35188_35262 = state_35141__$1;
(statearr_35188_35262[(1)] = (26));

} else {
var statearr_35189_35263 = state_35141__$1;
(statearr_35189_35263[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35142 === (34))){
var inst_35110 = (state_35141[(2)]);
var state_35141__$1 = state_35141;
if(cljs.core.truth_(inst_35110)){
var statearr_35190_35264 = state_35141__$1;
(statearr_35190_35264[(1)] = (38));

} else {
var statearr_35191_35265 = state_35141__$1;
(statearr_35191_35265[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35142 === (17))){
var state_35141__$1 = state_35141;
var statearr_35192_35266 = state_35141__$1;
(statearr_35192_35266[(2)] = recompile_dependents);

(statearr_35192_35266[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35142 === (3))){
var state_35141__$1 = state_35141;
var statearr_35193_35267 = state_35141__$1;
(statearr_35193_35267[(2)] = null);

(statearr_35193_35267[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35142 === (12))){
var inst_35032 = (state_35141[(2)]);
var state_35141__$1 = state_35141;
var statearr_35194_35268 = state_35141__$1;
(statearr_35194_35268[(2)] = inst_35032);

(statearr_35194_35268[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35142 === (2))){
var inst_34994 = (state_35141[(13)]);
var inst_35001 = cljs.core.seq.call(null,inst_34994);
var inst_35002 = inst_35001;
var inst_35003 = null;
var inst_35004 = (0);
var inst_35005 = (0);
var state_35141__$1 = (function (){var statearr_35195 = state_35141;
(statearr_35195[(7)] = inst_35004);

(statearr_35195[(8)] = inst_35005);

(statearr_35195[(9)] = inst_35003);

(statearr_35195[(10)] = inst_35002);

return statearr_35195;
})();
var statearr_35196_35269 = state_35141__$1;
(statearr_35196_35269[(2)] = null);

(statearr_35196_35269[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35142 === (23))){
var inst_35063 = (state_35141[(23)]);
var inst_35061 = (state_35141[(26)]);
var inst_35058 = (state_35141[(24)]);
var inst_35055 = (state_35141[(19)]);
var inst_35059 = (state_35141[(25)]);
var inst_35066 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_35068 = (function (){var all_files = inst_35055;
var res_SINGLEQUOTE_ = inst_35058;
var res = inst_35059;
var files_not_loaded = inst_35061;
var dependencies_that_loaded = inst_35063;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35063,inst_35061,inst_35058,inst_35055,inst_35059,inst_35066,state_val_35142,c__29669__auto__,map__34987,map__34987__$1,opts,before_jsload,on_jsload,reload_dependents,map__34988,map__34988__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35067){
var map__35197 = p__35067;
var map__35197__$1 = ((((!((map__35197 == null)))?((((map__35197.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35197.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35197):map__35197);
var request_url = cljs.core.get.call(null,map__35197__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35063,inst_35061,inst_35058,inst_35055,inst_35059,inst_35066,state_val_35142,c__29669__auto__,map__34987,map__34987__$1,opts,before_jsload,on_jsload,reload_dependents,map__34988,map__34988__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35069 = cljs.core.reverse.call(null,inst_35063);
var inst_35070 = cljs.core.map.call(null,inst_35068,inst_35069);
var inst_35071 = cljs.core.pr_str.call(null,inst_35070);
var inst_35072 = figwheel.client.utils.log.call(null,inst_35071);
var state_35141__$1 = (function (){var statearr_35199 = state_35141;
(statearr_35199[(31)] = inst_35066);

return statearr_35199;
})();
var statearr_35200_35270 = state_35141__$1;
(statearr_35200_35270[(2)] = inst_35072);

(statearr_35200_35270[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35142 === (35))){
var state_35141__$1 = state_35141;
var statearr_35201_35271 = state_35141__$1;
(statearr_35201_35271[(2)] = true);

(statearr_35201_35271[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35142 === (19))){
var inst_35045 = (state_35141[(12)]);
var inst_35051 = figwheel.client.file_reloading.expand_files.call(null,inst_35045);
var state_35141__$1 = state_35141;
var statearr_35202_35272 = state_35141__$1;
(statearr_35202_35272[(2)] = inst_35051);

(statearr_35202_35272[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35142 === (11))){
var state_35141__$1 = state_35141;
var statearr_35203_35273 = state_35141__$1;
(statearr_35203_35273[(2)] = null);

(statearr_35203_35273[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35142 === (9))){
var inst_35034 = (state_35141[(2)]);
var state_35141__$1 = state_35141;
var statearr_35204_35274 = state_35141__$1;
(statearr_35204_35274[(2)] = inst_35034);

(statearr_35204_35274[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35142 === (5))){
var inst_35004 = (state_35141[(7)]);
var inst_35005 = (state_35141[(8)]);
var inst_35007 = (inst_35005 < inst_35004);
var inst_35008 = inst_35007;
var state_35141__$1 = state_35141;
if(cljs.core.truth_(inst_35008)){
var statearr_35205_35275 = state_35141__$1;
(statearr_35205_35275[(1)] = (7));

} else {
var statearr_35206_35276 = state_35141__$1;
(statearr_35206_35276[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35142 === (14))){
var inst_35015 = (state_35141[(22)]);
var inst_35024 = cljs.core.first.call(null,inst_35015);
var inst_35025 = figwheel.client.file_reloading.eval_body.call(null,inst_35024,opts);
var inst_35026 = cljs.core.next.call(null,inst_35015);
var inst_35002 = inst_35026;
var inst_35003 = null;
var inst_35004 = (0);
var inst_35005 = (0);
var state_35141__$1 = (function (){var statearr_35207 = state_35141;
(statearr_35207[(7)] = inst_35004);

(statearr_35207[(8)] = inst_35005);

(statearr_35207[(9)] = inst_35003);

(statearr_35207[(10)] = inst_35002);

(statearr_35207[(32)] = inst_35025);

return statearr_35207;
})();
var statearr_35208_35277 = state_35141__$1;
(statearr_35208_35277[(2)] = null);

(statearr_35208_35277[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35142 === (45))){
var state_35141__$1 = state_35141;
var statearr_35209_35278 = state_35141__$1;
(statearr_35209_35278[(2)] = null);

(statearr_35209_35278[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35142 === (26))){
var inst_35063 = (state_35141[(23)]);
var inst_35061 = (state_35141[(26)]);
var inst_35058 = (state_35141[(24)]);
var inst_35055 = (state_35141[(19)]);
var inst_35059 = (state_35141[(25)]);
var inst_35078 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_35080 = (function (){var all_files = inst_35055;
var res_SINGLEQUOTE_ = inst_35058;
var res = inst_35059;
var files_not_loaded = inst_35061;
var dependencies_that_loaded = inst_35063;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35063,inst_35061,inst_35058,inst_35055,inst_35059,inst_35078,state_val_35142,c__29669__auto__,map__34987,map__34987__$1,opts,before_jsload,on_jsload,reload_dependents,map__34988,map__34988__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35079){
var map__35210 = p__35079;
var map__35210__$1 = ((((!((map__35210 == null)))?((((map__35210.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35210.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35210):map__35210);
var namespace = cljs.core.get.call(null,map__35210__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__35210__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35063,inst_35061,inst_35058,inst_35055,inst_35059,inst_35078,state_val_35142,c__29669__auto__,map__34987,map__34987__$1,opts,before_jsload,on_jsload,reload_dependents,map__34988,map__34988__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35081 = cljs.core.map.call(null,inst_35080,inst_35059);
var inst_35082 = cljs.core.pr_str.call(null,inst_35081);
var inst_35083 = figwheel.client.utils.log.call(null,inst_35082);
var inst_35084 = (function (){var all_files = inst_35055;
var res_SINGLEQUOTE_ = inst_35058;
var res = inst_35059;
var files_not_loaded = inst_35061;
var dependencies_that_loaded = inst_35063;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35063,inst_35061,inst_35058,inst_35055,inst_35059,inst_35078,inst_35080,inst_35081,inst_35082,inst_35083,state_val_35142,c__29669__auto__,map__34987,map__34987__$1,opts,before_jsload,on_jsload,reload_dependents,map__34988,map__34988__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35063,inst_35061,inst_35058,inst_35055,inst_35059,inst_35078,inst_35080,inst_35081,inst_35082,inst_35083,state_val_35142,c__29669__auto__,map__34987,map__34987__$1,opts,before_jsload,on_jsload,reload_dependents,map__34988,map__34988__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35085 = setTimeout(inst_35084,(10));
var state_35141__$1 = (function (){var statearr_35212 = state_35141;
(statearr_35212[(33)] = inst_35083);

(statearr_35212[(34)] = inst_35078);

return statearr_35212;
})();
var statearr_35213_35279 = state_35141__$1;
(statearr_35213_35279[(2)] = inst_35085);

(statearr_35213_35279[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35142 === (16))){
var state_35141__$1 = state_35141;
var statearr_35214_35280 = state_35141__$1;
(statearr_35214_35280[(2)] = reload_dependents);

(statearr_35214_35280[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35142 === (38))){
var inst_35095 = (state_35141[(16)]);
var inst_35112 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35095);
var state_35141__$1 = state_35141;
var statearr_35215_35281 = state_35141__$1;
(statearr_35215_35281[(2)] = inst_35112);

(statearr_35215_35281[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35142 === (30))){
var state_35141__$1 = state_35141;
var statearr_35216_35282 = state_35141__$1;
(statearr_35216_35282[(2)] = null);

(statearr_35216_35282[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35142 === (10))){
var inst_35015 = (state_35141[(22)]);
var inst_35017 = cljs.core.chunked_seq_QMARK_.call(null,inst_35015);
var state_35141__$1 = state_35141;
if(inst_35017){
var statearr_35217_35283 = state_35141__$1;
(statearr_35217_35283[(1)] = (13));

} else {
var statearr_35218_35284 = state_35141__$1;
(statearr_35218_35284[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35142 === (18))){
var inst_35049 = (state_35141[(2)]);
var state_35141__$1 = state_35141;
if(cljs.core.truth_(inst_35049)){
var statearr_35219_35285 = state_35141__$1;
(statearr_35219_35285[(1)] = (19));

} else {
var statearr_35220_35286 = state_35141__$1;
(statearr_35220_35286[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35142 === (42))){
var state_35141__$1 = state_35141;
var statearr_35221_35287 = state_35141__$1;
(statearr_35221_35287[(2)] = null);

(statearr_35221_35287[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35142 === (37))){
var inst_35107 = (state_35141[(2)]);
var state_35141__$1 = state_35141;
var statearr_35222_35288 = state_35141__$1;
(statearr_35222_35288[(2)] = inst_35107);

(statearr_35222_35288[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35142 === (8))){
var inst_35015 = (state_35141[(22)]);
var inst_35002 = (state_35141[(10)]);
var inst_35015__$1 = cljs.core.seq.call(null,inst_35002);
var state_35141__$1 = (function (){var statearr_35223 = state_35141;
(statearr_35223[(22)] = inst_35015__$1);

return statearr_35223;
})();
if(inst_35015__$1){
var statearr_35224_35289 = state_35141__$1;
(statearr_35224_35289[(1)] = (10));

} else {
var statearr_35225_35290 = state_35141__$1;
(statearr_35225_35290[(1)] = (11));

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
});})(c__29669__auto__,map__34987,map__34987__$1,opts,before_jsload,on_jsload,reload_dependents,map__34988,map__34988__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__29557__auto__,c__29669__auto__,map__34987,map__34987__$1,opts,before_jsload,on_jsload,reload_dependents,map__34988,map__34988__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29558__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29558__auto____0 = (function (){
var statearr_35229 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35229[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__29558__auto__);

(statearr_35229[(1)] = (1));

return statearr_35229;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29558__auto____1 = (function (state_35141){
while(true){
var ret_value__29559__auto__ = (function (){try{while(true){
var result__29560__auto__ = switch__29557__auto__.call(null,state_35141);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29560__auto__;
}
break;
}
}catch (e35230){if((e35230 instanceof Object)){
var ex__29561__auto__ = e35230;
var statearr_35231_35291 = state_35141;
(statearr_35231_35291[(5)] = ex__29561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35141);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35230;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35292 = state_35141;
state_35141 = G__35292;
continue;
} else {
return ret_value__29559__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__29558__auto__ = function(state_35141){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29558__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29558__auto____1.call(this,state_35141);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__29558__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29558__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__29558__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29558__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29558__auto__;
})()
;})(switch__29557__auto__,c__29669__auto__,map__34987,map__34987__$1,opts,before_jsload,on_jsload,reload_dependents,map__34988,map__34988__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__29671__auto__ = (function (){var statearr_35232 = f__29670__auto__.call(null);
(statearr_35232[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29669__auto__);

return statearr_35232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29671__auto__);
});})(c__29669__auto__,map__34987,map__34987__$1,opts,before_jsload,on_jsload,reload_dependents,map__34988,map__34988__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__29669__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__35295,link){
var map__35298 = p__35295;
var map__35298__$1 = ((((!((map__35298 == null)))?((((map__35298.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35298.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35298):map__35298);
var file = cljs.core.get.call(null,map__35298__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__35298,map__35298__$1,file){
return (function (p1__35293_SHARP_,p2__35294_SHARP_){
if(cljs.core._EQ_.call(null,p1__35293_SHARP_,p2__35294_SHARP_)){
return p1__35293_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__35298,map__35298__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__35304){
var map__35305 = p__35304;
var map__35305__$1 = ((((!((map__35305 == null)))?((((map__35305.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35305.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35305):map__35305);
var match_length = cljs.core.get.call(null,map__35305__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__35305__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__35300_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__35300_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__35307_SHARP_,p2__35308_SHARP_){
return cljs.core.assoc.call(null,p1__35307_SHARP_,cljs.core.get.call(null,p2__35308_SHARP_,key),p2__35308_SHARP_);
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
var loaded_f_datas_35309 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_35309);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_35309);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__35310,p__35311){
var map__35316 = p__35310;
var map__35316__$1 = ((((!((map__35316 == null)))?((((map__35316.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35316.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35316):map__35316);
var on_cssload = cljs.core.get.call(null,map__35316__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__35317 = p__35311;
var map__35317__$1 = ((((!((map__35317 == null)))?((((map__35317.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35317.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35317):map__35317);
var files_msg = map__35317__$1;
var files = cljs.core.get.call(null,map__35317__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1499813247651