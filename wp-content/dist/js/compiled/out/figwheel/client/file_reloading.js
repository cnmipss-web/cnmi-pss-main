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
var or__25979__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__25979__auto__){
return or__25979__auto__;
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
var or__25979__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, ["svgpan.SvgPan",null,"far.out",null,"cljs.nodejs",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__65594_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__65594_SHARP_));
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
var seq__65599 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__65600 = null;
var count__65601 = (0);
var i__65602 = (0);
while(true){
if((i__65602 < count__65601)){
var n = cljs.core._nth.call(null,chunk__65600,i__65602);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__65603 = seq__65599;
var G__65604 = chunk__65600;
var G__65605 = count__65601;
var G__65606 = (i__65602 + (1));
seq__65599 = G__65603;
chunk__65600 = G__65604;
count__65601 = G__65605;
i__65602 = G__65606;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__65599);
if(temp__4657__auto__){
var seq__65599__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65599__$1)){
var c__26790__auto__ = cljs.core.chunk_first.call(null,seq__65599__$1);
var G__65607 = cljs.core.chunk_rest.call(null,seq__65599__$1);
var G__65608 = c__26790__auto__;
var G__65609 = cljs.core.count.call(null,c__26790__auto__);
var G__65610 = (0);
seq__65599 = G__65607;
chunk__65600 = G__65608;
count__65601 = G__65609;
i__65602 = G__65610;
continue;
} else {
var n = cljs.core.first.call(null,seq__65599__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__65611 = cljs.core.next.call(null,seq__65599__$1);
var G__65612 = null;
var G__65613 = (0);
var G__65614 = (0);
seq__65599 = G__65611;
chunk__65600 = G__65612;
count__65601 = G__65613;
i__65602 = G__65614;
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

var seq__65665_65676 = cljs.core.seq.call(null,deps);
var chunk__65666_65677 = null;
var count__65667_65678 = (0);
var i__65668_65679 = (0);
while(true){
if((i__65668_65679 < count__65667_65678)){
var dep_65680 = cljs.core._nth.call(null,chunk__65666_65677,i__65668_65679);
topo_sort_helper_STAR_.call(null,dep_65680,(depth + (1)),state);

var G__65681 = seq__65665_65676;
var G__65682 = chunk__65666_65677;
var G__65683 = count__65667_65678;
var G__65684 = (i__65668_65679 + (1));
seq__65665_65676 = G__65681;
chunk__65666_65677 = G__65682;
count__65667_65678 = G__65683;
i__65668_65679 = G__65684;
continue;
} else {
var temp__4657__auto___65685 = cljs.core.seq.call(null,seq__65665_65676);
if(temp__4657__auto___65685){
var seq__65665_65686__$1 = temp__4657__auto___65685;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65665_65686__$1)){
var c__26790__auto___65687 = cljs.core.chunk_first.call(null,seq__65665_65686__$1);
var G__65688 = cljs.core.chunk_rest.call(null,seq__65665_65686__$1);
var G__65689 = c__26790__auto___65687;
var G__65690 = cljs.core.count.call(null,c__26790__auto___65687);
var G__65691 = (0);
seq__65665_65676 = G__65688;
chunk__65666_65677 = G__65689;
count__65667_65678 = G__65690;
i__65668_65679 = G__65691;
continue;
} else {
var dep_65692 = cljs.core.first.call(null,seq__65665_65686__$1);
topo_sort_helper_STAR_.call(null,dep_65692,(depth + (1)),state);

var G__65693 = cljs.core.next.call(null,seq__65665_65686__$1);
var G__65694 = null;
var G__65695 = (0);
var G__65696 = (0);
seq__65665_65676 = G__65693;
chunk__65666_65677 = G__65694;
count__65667_65678 = G__65695;
i__65668_65679 = G__65696;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__65669){
var vec__65673 = p__65669;
var seq__65674 = cljs.core.seq.call(null,vec__65673);
var first__65675 = cljs.core.first.call(null,seq__65674);
var seq__65674__$1 = cljs.core.next.call(null,seq__65674);
var x = first__65675;
var xs = seq__65674__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__65673,seq__65674,first__65675,seq__65674__$1,x,xs,get_deps__$1){
return (function (p1__65615_SHARP_){
return clojure.set.difference.call(null,p1__65615_SHARP_,x);
});})(vec__65673,seq__65674,first__65675,seq__65674__$1,x,xs,get_deps__$1))
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
var seq__65709 = cljs.core.seq.call(null,provides);
var chunk__65710 = null;
var count__65711 = (0);
var i__65712 = (0);
while(true){
if((i__65712 < count__65711)){
var prov = cljs.core._nth.call(null,chunk__65710,i__65712);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__65713_65721 = cljs.core.seq.call(null,requires);
var chunk__65714_65722 = null;
var count__65715_65723 = (0);
var i__65716_65724 = (0);
while(true){
if((i__65716_65724 < count__65715_65723)){
var req_65725 = cljs.core._nth.call(null,chunk__65714_65722,i__65716_65724);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_65725,prov);

var G__65726 = seq__65713_65721;
var G__65727 = chunk__65714_65722;
var G__65728 = count__65715_65723;
var G__65729 = (i__65716_65724 + (1));
seq__65713_65721 = G__65726;
chunk__65714_65722 = G__65727;
count__65715_65723 = G__65728;
i__65716_65724 = G__65729;
continue;
} else {
var temp__4657__auto___65730 = cljs.core.seq.call(null,seq__65713_65721);
if(temp__4657__auto___65730){
var seq__65713_65731__$1 = temp__4657__auto___65730;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65713_65731__$1)){
var c__26790__auto___65732 = cljs.core.chunk_first.call(null,seq__65713_65731__$1);
var G__65733 = cljs.core.chunk_rest.call(null,seq__65713_65731__$1);
var G__65734 = c__26790__auto___65732;
var G__65735 = cljs.core.count.call(null,c__26790__auto___65732);
var G__65736 = (0);
seq__65713_65721 = G__65733;
chunk__65714_65722 = G__65734;
count__65715_65723 = G__65735;
i__65716_65724 = G__65736;
continue;
} else {
var req_65737 = cljs.core.first.call(null,seq__65713_65731__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_65737,prov);

var G__65738 = cljs.core.next.call(null,seq__65713_65731__$1);
var G__65739 = null;
var G__65740 = (0);
var G__65741 = (0);
seq__65713_65721 = G__65738;
chunk__65714_65722 = G__65739;
count__65715_65723 = G__65740;
i__65716_65724 = G__65741;
continue;
}
} else {
}
}
break;
}

var G__65742 = seq__65709;
var G__65743 = chunk__65710;
var G__65744 = count__65711;
var G__65745 = (i__65712 + (1));
seq__65709 = G__65742;
chunk__65710 = G__65743;
count__65711 = G__65744;
i__65712 = G__65745;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__65709);
if(temp__4657__auto__){
var seq__65709__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65709__$1)){
var c__26790__auto__ = cljs.core.chunk_first.call(null,seq__65709__$1);
var G__65746 = cljs.core.chunk_rest.call(null,seq__65709__$1);
var G__65747 = c__26790__auto__;
var G__65748 = cljs.core.count.call(null,c__26790__auto__);
var G__65749 = (0);
seq__65709 = G__65746;
chunk__65710 = G__65747;
count__65711 = G__65748;
i__65712 = G__65749;
continue;
} else {
var prov = cljs.core.first.call(null,seq__65709__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__65717_65750 = cljs.core.seq.call(null,requires);
var chunk__65718_65751 = null;
var count__65719_65752 = (0);
var i__65720_65753 = (0);
while(true){
if((i__65720_65753 < count__65719_65752)){
var req_65754 = cljs.core._nth.call(null,chunk__65718_65751,i__65720_65753);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_65754,prov);

var G__65755 = seq__65717_65750;
var G__65756 = chunk__65718_65751;
var G__65757 = count__65719_65752;
var G__65758 = (i__65720_65753 + (1));
seq__65717_65750 = G__65755;
chunk__65718_65751 = G__65756;
count__65719_65752 = G__65757;
i__65720_65753 = G__65758;
continue;
} else {
var temp__4657__auto___65759__$1 = cljs.core.seq.call(null,seq__65717_65750);
if(temp__4657__auto___65759__$1){
var seq__65717_65760__$1 = temp__4657__auto___65759__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65717_65760__$1)){
var c__26790__auto___65761 = cljs.core.chunk_first.call(null,seq__65717_65760__$1);
var G__65762 = cljs.core.chunk_rest.call(null,seq__65717_65760__$1);
var G__65763 = c__26790__auto___65761;
var G__65764 = cljs.core.count.call(null,c__26790__auto___65761);
var G__65765 = (0);
seq__65717_65750 = G__65762;
chunk__65718_65751 = G__65763;
count__65719_65752 = G__65764;
i__65720_65753 = G__65765;
continue;
} else {
var req_65766 = cljs.core.first.call(null,seq__65717_65760__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_65766,prov);

var G__65767 = cljs.core.next.call(null,seq__65717_65760__$1);
var G__65768 = null;
var G__65769 = (0);
var G__65770 = (0);
seq__65717_65750 = G__65767;
chunk__65718_65751 = G__65768;
count__65719_65752 = G__65769;
i__65720_65753 = G__65770;
continue;
}
} else {
}
}
break;
}

var G__65771 = cljs.core.next.call(null,seq__65709__$1);
var G__65772 = null;
var G__65773 = (0);
var G__65774 = (0);
seq__65709 = G__65771;
chunk__65710 = G__65772;
count__65711 = G__65773;
i__65712 = G__65774;
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
var seq__65779_65783 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__65780_65784 = null;
var count__65781_65785 = (0);
var i__65782_65786 = (0);
while(true){
if((i__65782_65786 < count__65781_65785)){
var ns_65787 = cljs.core._nth.call(null,chunk__65780_65784,i__65782_65786);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_65787);

var G__65788 = seq__65779_65783;
var G__65789 = chunk__65780_65784;
var G__65790 = count__65781_65785;
var G__65791 = (i__65782_65786 + (1));
seq__65779_65783 = G__65788;
chunk__65780_65784 = G__65789;
count__65781_65785 = G__65790;
i__65782_65786 = G__65791;
continue;
} else {
var temp__4657__auto___65792 = cljs.core.seq.call(null,seq__65779_65783);
if(temp__4657__auto___65792){
var seq__65779_65793__$1 = temp__4657__auto___65792;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65779_65793__$1)){
var c__26790__auto___65794 = cljs.core.chunk_first.call(null,seq__65779_65793__$1);
var G__65795 = cljs.core.chunk_rest.call(null,seq__65779_65793__$1);
var G__65796 = c__26790__auto___65794;
var G__65797 = cljs.core.count.call(null,c__26790__auto___65794);
var G__65798 = (0);
seq__65779_65783 = G__65795;
chunk__65780_65784 = G__65796;
count__65781_65785 = G__65797;
i__65782_65786 = G__65798;
continue;
} else {
var ns_65799 = cljs.core.first.call(null,seq__65779_65793__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_65799);

var G__65800 = cljs.core.next.call(null,seq__65779_65793__$1);
var G__65801 = null;
var G__65802 = (0);
var G__65803 = (0);
seq__65779_65783 = G__65800;
chunk__65780_65784 = G__65801;
count__65781_65785 = G__65802;
i__65782_65786 = G__65803;
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
goog.require_figwheel_backup_ = (function (){var or__25979__auto__ = goog.require__;
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
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
var G__65804__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__65804 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__65805__i = 0, G__65805__a = new Array(arguments.length -  0);
while (G__65805__i < G__65805__a.length) {G__65805__a[G__65805__i] = arguments[G__65805__i + 0]; ++G__65805__i;}
  args = new cljs.core.IndexedSeq(G__65805__a,0);
} 
return G__65804__delegate.call(this,args);};
G__65804.cljs$lang$maxFixedArity = 0;
G__65804.cljs$lang$applyTo = (function (arglist__65806){
var args = cljs.core.seq(arglist__65806);
return G__65804__delegate(args);
});
G__65804.cljs$core$IFn$_invoke$arity$variadic = G__65804__delegate;
return G__65804;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__65807 = cljs.core._EQ_;
var expr__65808 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__65807.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__65808))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str(node_path_lib.sep),cljs.core.str(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__65807,expr__65808){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__65807,expr__65808))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__65807,expr__65808){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e65810){if((e65810 instanceof Error)){
var e = e65810;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e65810;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__65807,expr__65808))
} else {
if(cljs.core.truth_(pred__65807.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__65808))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__65807.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__65808))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__65807.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__65808))){
return ((function (pred__65807,expr__65808){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e65811){if((e65811 instanceof Error)){
var e = e65811;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e65811;

}
}})());
});
;})(pred__65807,expr__65808))
} else {
return ((function (pred__65807,expr__65808){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__65807,expr__65808))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__65812,callback){
var map__65815 = p__65812;
var map__65815__$1 = ((((!((map__65815 == null)))?((((map__65815.cljs$lang$protocol_mask$partition0$ & (64))) || (map__65815.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65815):map__65815);
var file_msg = map__65815__$1;
var request_url = cljs.core.get.call(null,map__65815__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__65815,map__65815__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__65815,map__65815__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__28201__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28201__auto__){
return (function (){
var f__28202__auto__ = (function (){var switch__28088__auto__ = ((function (c__28201__auto__){
return (function (state_65839){
var state_val_65840 = (state_65839[(1)]);
if((state_val_65840 === (7))){
var inst_65835 = (state_65839[(2)]);
var state_65839__$1 = state_65839;
var statearr_65841_65861 = state_65839__$1;
(statearr_65841_65861[(2)] = inst_65835);

(statearr_65841_65861[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65840 === (1))){
var state_65839__$1 = state_65839;
var statearr_65842_65862 = state_65839__$1;
(statearr_65842_65862[(2)] = null);

(statearr_65842_65862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65840 === (4))){
var inst_65819 = (state_65839[(7)]);
var inst_65819__$1 = (state_65839[(2)]);
var state_65839__$1 = (function (){var statearr_65843 = state_65839;
(statearr_65843[(7)] = inst_65819__$1);

return statearr_65843;
})();
if(cljs.core.truth_(inst_65819__$1)){
var statearr_65844_65863 = state_65839__$1;
(statearr_65844_65863[(1)] = (5));

} else {
var statearr_65845_65864 = state_65839__$1;
(statearr_65845_65864[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65840 === (6))){
var state_65839__$1 = state_65839;
var statearr_65846_65865 = state_65839__$1;
(statearr_65846_65865[(2)] = null);

(statearr_65846_65865[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65840 === (3))){
var inst_65837 = (state_65839[(2)]);
var state_65839__$1 = state_65839;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65839__$1,inst_65837);
} else {
if((state_val_65840 === (2))){
var state_65839__$1 = state_65839;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65839__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_65840 === (11))){
var inst_65831 = (state_65839[(2)]);
var state_65839__$1 = (function (){var statearr_65847 = state_65839;
(statearr_65847[(8)] = inst_65831);

return statearr_65847;
})();
var statearr_65848_65866 = state_65839__$1;
(statearr_65848_65866[(2)] = null);

(statearr_65848_65866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65840 === (9))){
var inst_65823 = (state_65839[(9)]);
var inst_65825 = (state_65839[(10)]);
var inst_65827 = inst_65825.call(null,inst_65823);
var state_65839__$1 = state_65839;
var statearr_65849_65867 = state_65839__$1;
(statearr_65849_65867[(2)] = inst_65827);

(statearr_65849_65867[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65840 === (5))){
var inst_65819 = (state_65839[(7)]);
var inst_65821 = figwheel.client.file_reloading.blocking_load.call(null,inst_65819);
var state_65839__$1 = state_65839;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65839__$1,(8),inst_65821);
} else {
if((state_val_65840 === (10))){
var inst_65823 = (state_65839[(9)]);
var inst_65829 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_65823);
var state_65839__$1 = state_65839;
var statearr_65850_65868 = state_65839__$1;
(statearr_65850_65868[(2)] = inst_65829);

(statearr_65850_65868[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65840 === (8))){
var inst_65819 = (state_65839[(7)]);
var inst_65825 = (state_65839[(10)]);
var inst_65823 = (state_65839[(2)]);
var inst_65824 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_65825__$1 = cljs.core.get.call(null,inst_65824,inst_65819);
var state_65839__$1 = (function (){var statearr_65851 = state_65839;
(statearr_65851[(9)] = inst_65823);

(statearr_65851[(10)] = inst_65825__$1);

return statearr_65851;
})();
if(cljs.core.truth_(inst_65825__$1)){
var statearr_65852_65869 = state_65839__$1;
(statearr_65852_65869[(1)] = (9));

} else {
var statearr_65853_65870 = state_65839__$1;
(statearr_65853_65870[(1)] = (10));

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
});})(c__28201__auto__))
;
return ((function (switch__28088__auto__,c__28201__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__28089__auto__ = null;
var figwheel$client$file_reloading$state_machine__28089__auto____0 = (function (){
var statearr_65857 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_65857[(0)] = figwheel$client$file_reloading$state_machine__28089__auto__);

(statearr_65857[(1)] = (1));

return statearr_65857;
});
var figwheel$client$file_reloading$state_machine__28089__auto____1 = (function (state_65839){
while(true){
var ret_value__28090__auto__ = (function (){try{while(true){
var result__28091__auto__ = switch__28088__auto__.call(null,state_65839);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28091__auto__;
}
break;
}
}catch (e65858){if((e65858 instanceof Object)){
var ex__28092__auto__ = e65858;
var statearr_65859_65871 = state_65839;
(statearr_65859_65871[(5)] = ex__28092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65839);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65858;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65872 = state_65839;
state_65839 = G__65872;
continue;
} else {
return ret_value__28090__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__28089__auto__ = function(state_65839){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__28089__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__28089__auto____1.call(this,state_65839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__28089__auto____0;
figwheel$client$file_reloading$state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__28089__auto____1;
return figwheel$client$file_reloading$state_machine__28089__auto__;
})()
;})(switch__28088__auto__,c__28201__auto__))
})();
var state__28203__auto__ = (function (){var statearr_65860 = f__28202__auto__.call(null);
(statearr_65860[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28201__auto__);

return statearr_65860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28203__auto__);
});})(c__28201__auto__))
);

return c__28201__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__65873,callback){
var map__65876 = p__65873;
var map__65876__$1 = ((((!((map__65876 == null)))?((((map__65876.cljs$lang$protocol_mask$partition0$ & (64))) || (map__65876.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65876):map__65876);
var file_msg = map__65876__$1;
var namespace = cljs.core.get.call(null,map__65876__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__65876,map__65876__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__65876,map__65876__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__65878){
var map__65881 = p__65878;
var map__65881__$1 = ((((!((map__65881 == null)))?((((map__65881.cljs$lang$protocol_mask$partition0$ & (64))) || (map__65881.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65881):map__65881);
var file_msg = map__65881__$1;
var namespace = cljs.core.get.call(null,map__65881__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__65883){
var map__65886 = p__65883;
var map__65886__$1 = ((((!((map__65886 == null)))?((((map__65886.cljs$lang$protocol_mask$partition0$ & (64))) || (map__65886.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65886):map__65886);
var file_msg = map__65886__$1;
var namespace = cljs.core.get.call(null,map__65886__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__25967__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__25967__auto__){
var or__25979__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
var or__25979__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__25979__auto____$1)){
return or__25979__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__25967__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__65888,callback){
var map__65891 = p__65888;
var map__65891__$1 = ((((!((map__65891 == null)))?((((map__65891.cljs$lang$protocol_mask$partition0$ & (64))) || (map__65891.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65891):map__65891);
var file_msg = map__65891__$1;
var request_url = cljs.core.get.call(null,map__65891__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__65891__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__28201__auto___65995 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28201__auto___65995,out){
return (function (){
var f__28202__auto__ = (function (){var switch__28088__auto__ = ((function (c__28201__auto___65995,out){
return (function (state_65977){
var state_val_65978 = (state_65977[(1)]);
if((state_val_65978 === (1))){
var inst_65951 = cljs.core.seq.call(null,files);
var inst_65952 = cljs.core.first.call(null,inst_65951);
var inst_65953 = cljs.core.next.call(null,inst_65951);
var inst_65954 = files;
var state_65977__$1 = (function (){var statearr_65979 = state_65977;
(statearr_65979[(7)] = inst_65953);

(statearr_65979[(8)] = inst_65954);

(statearr_65979[(9)] = inst_65952);

return statearr_65979;
})();
var statearr_65980_65996 = state_65977__$1;
(statearr_65980_65996[(2)] = null);

(statearr_65980_65996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65978 === (2))){
var inst_65954 = (state_65977[(8)]);
var inst_65960 = (state_65977[(10)]);
var inst_65959 = cljs.core.seq.call(null,inst_65954);
var inst_65960__$1 = cljs.core.first.call(null,inst_65959);
var inst_65961 = cljs.core.next.call(null,inst_65959);
var inst_65962 = (inst_65960__$1 == null);
var inst_65963 = cljs.core.not.call(null,inst_65962);
var state_65977__$1 = (function (){var statearr_65981 = state_65977;
(statearr_65981[(11)] = inst_65961);

(statearr_65981[(10)] = inst_65960__$1);

return statearr_65981;
})();
if(inst_65963){
var statearr_65982_65997 = state_65977__$1;
(statearr_65982_65997[(1)] = (4));

} else {
var statearr_65983_65998 = state_65977__$1;
(statearr_65983_65998[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65978 === (3))){
var inst_65975 = (state_65977[(2)]);
var state_65977__$1 = state_65977;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65977__$1,inst_65975);
} else {
if((state_val_65978 === (4))){
var inst_65960 = (state_65977[(10)]);
var inst_65965 = figwheel.client.file_reloading.reload_js_file.call(null,inst_65960);
var state_65977__$1 = state_65977;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65977__$1,(7),inst_65965);
} else {
if((state_val_65978 === (5))){
var inst_65971 = cljs.core.async.close_BANG_.call(null,out);
var state_65977__$1 = state_65977;
var statearr_65984_65999 = state_65977__$1;
(statearr_65984_65999[(2)] = inst_65971);

(statearr_65984_65999[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65978 === (6))){
var inst_65973 = (state_65977[(2)]);
var state_65977__$1 = state_65977;
var statearr_65985_66000 = state_65977__$1;
(statearr_65985_66000[(2)] = inst_65973);

(statearr_65985_66000[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65978 === (7))){
var inst_65961 = (state_65977[(11)]);
var inst_65967 = (state_65977[(2)]);
var inst_65968 = cljs.core.async.put_BANG_.call(null,out,inst_65967);
var inst_65954 = inst_65961;
var state_65977__$1 = (function (){var statearr_65986 = state_65977;
(statearr_65986[(12)] = inst_65968);

(statearr_65986[(8)] = inst_65954);

return statearr_65986;
})();
var statearr_65987_66001 = state_65977__$1;
(statearr_65987_66001[(2)] = null);

(statearr_65987_66001[(1)] = (2));


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
});})(c__28201__auto___65995,out))
;
return ((function (switch__28088__auto__,c__28201__auto___65995,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28089__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28089__auto____0 = (function (){
var statearr_65991 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_65991[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28089__auto__);

(statearr_65991[(1)] = (1));

return statearr_65991;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28089__auto____1 = (function (state_65977){
while(true){
var ret_value__28090__auto__ = (function (){try{while(true){
var result__28091__auto__ = switch__28088__auto__.call(null,state_65977);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28091__auto__;
}
break;
}
}catch (e65992){if((e65992 instanceof Object)){
var ex__28092__auto__ = e65992;
var statearr_65993_66002 = state_65977;
(statearr_65993_66002[(5)] = ex__28092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65977);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65992;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66003 = state_65977;
state_65977 = G__66003;
continue;
} else {
return ret_value__28090__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28089__auto__ = function(state_65977){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28089__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28089__auto____1.call(this,state_65977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28089__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28089__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28089__auto__;
})()
;})(switch__28088__auto__,c__28201__auto___65995,out))
})();
var state__28203__auto__ = (function (){var statearr_65994 = f__28202__auto__.call(null);
(statearr_65994[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28201__auto___65995);

return statearr_65994;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28203__auto__);
});})(c__28201__auto___65995,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__66004,opts){
var map__66008 = p__66004;
var map__66008__$1 = ((((!((map__66008 == null)))?((((map__66008.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66008.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66008):map__66008);
var eval_body__$1 = cljs.core.get.call(null,map__66008__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__66008__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__25967__auto__ = eval_body__$1;
if(cljs.core.truth_(and__25967__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__25967__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e66010){var e = e66010;
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
return (function (p1__66011_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__66011_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__66020){
var vec__66021 = p__66020;
var k = cljs.core.nth.call(null,vec__66021,(0),null);
var v = cljs.core.nth.call(null,vec__66021,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__66024){
var vec__66025 = p__66024;
var k = cljs.core.nth.call(null,vec__66025,(0),null);
var v = cljs.core.nth.call(null,vec__66025,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__66031,p__66032){
var map__66279 = p__66031;
var map__66279__$1 = ((((!((map__66279 == null)))?((((map__66279.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66279.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66279):map__66279);
var opts = map__66279__$1;
var before_jsload = cljs.core.get.call(null,map__66279__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__66279__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__66279__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__66280 = p__66032;
var map__66280__$1 = ((((!((map__66280 == null)))?((((map__66280.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66280.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66280):map__66280);
var msg = map__66280__$1;
var files = cljs.core.get.call(null,map__66280__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__66280__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__66280__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__28201__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28201__auto__,map__66279,map__66279__$1,opts,before_jsload,on_jsload,reload_dependents,map__66280,map__66280__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__28202__auto__ = (function (){var switch__28088__auto__ = ((function (c__28201__auto__,map__66279,map__66279__$1,opts,before_jsload,on_jsload,reload_dependents,map__66280,map__66280__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_66433){
var state_val_66434 = (state_66433[(1)]);
if((state_val_66434 === (7))){
var inst_66297 = (state_66433[(7)]);
var inst_66295 = (state_66433[(8)]);
var inst_66296 = (state_66433[(9)]);
var inst_66294 = (state_66433[(10)]);
var inst_66302 = cljs.core._nth.call(null,inst_66295,inst_66297);
var inst_66303 = figwheel.client.file_reloading.eval_body.call(null,inst_66302,opts);
var inst_66304 = (inst_66297 + (1));
var tmp66435 = inst_66295;
var tmp66436 = inst_66296;
var tmp66437 = inst_66294;
var inst_66294__$1 = tmp66437;
var inst_66295__$1 = tmp66435;
var inst_66296__$1 = tmp66436;
var inst_66297__$1 = inst_66304;
var state_66433__$1 = (function (){var statearr_66438 = state_66433;
(statearr_66438[(7)] = inst_66297__$1);

(statearr_66438[(8)] = inst_66295__$1);

(statearr_66438[(11)] = inst_66303);

(statearr_66438[(9)] = inst_66296__$1);

(statearr_66438[(10)] = inst_66294__$1);

return statearr_66438;
})();
var statearr_66439_66525 = state_66433__$1;
(statearr_66439_66525[(2)] = null);

(statearr_66439_66525[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66434 === (20))){
var inst_66337 = (state_66433[(12)]);
var inst_66345 = figwheel.client.file_reloading.sort_files.call(null,inst_66337);
var state_66433__$1 = state_66433;
var statearr_66440_66526 = state_66433__$1;
(statearr_66440_66526[(2)] = inst_66345);

(statearr_66440_66526[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66434 === (27))){
var state_66433__$1 = state_66433;
var statearr_66441_66527 = state_66433__$1;
(statearr_66441_66527[(2)] = null);

(statearr_66441_66527[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66434 === (1))){
var inst_66286 = (state_66433[(13)]);
var inst_66283 = before_jsload.call(null,files);
var inst_66284 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_66285 = (function (){return ((function (inst_66286,inst_66283,inst_66284,state_val_66434,c__28201__auto__,map__66279,map__66279__$1,opts,before_jsload,on_jsload,reload_dependents,map__66280,map__66280__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__66028_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__66028_SHARP_);
});
;})(inst_66286,inst_66283,inst_66284,state_val_66434,c__28201__auto__,map__66279,map__66279__$1,opts,before_jsload,on_jsload,reload_dependents,map__66280,map__66280__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_66286__$1 = cljs.core.filter.call(null,inst_66285,files);
var inst_66287 = cljs.core.not_empty.call(null,inst_66286__$1);
var state_66433__$1 = (function (){var statearr_66442 = state_66433;
(statearr_66442[(13)] = inst_66286__$1);

(statearr_66442[(14)] = inst_66283);

(statearr_66442[(15)] = inst_66284);

return statearr_66442;
})();
if(cljs.core.truth_(inst_66287)){
var statearr_66443_66528 = state_66433__$1;
(statearr_66443_66528[(1)] = (2));

} else {
var statearr_66444_66529 = state_66433__$1;
(statearr_66444_66529[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66434 === (24))){
var state_66433__$1 = state_66433;
var statearr_66445_66530 = state_66433__$1;
(statearr_66445_66530[(2)] = null);

(statearr_66445_66530[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66434 === (39))){
var inst_66387 = (state_66433[(16)]);
var state_66433__$1 = state_66433;
var statearr_66446_66531 = state_66433__$1;
(statearr_66446_66531[(2)] = inst_66387);

(statearr_66446_66531[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66434 === (46))){
var inst_66428 = (state_66433[(2)]);
var state_66433__$1 = state_66433;
var statearr_66447_66532 = state_66433__$1;
(statearr_66447_66532[(2)] = inst_66428);

(statearr_66447_66532[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66434 === (4))){
var inst_66331 = (state_66433[(2)]);
var inst_66332 = cljs.core.List.EMPTY;
var inst_66333 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_66332);
var inst_66334 = (function (){return ((function (inst_66331,inst_66332,inst_66333,state_val_66434,c__28201__auto__,map__66279,map__66279__$1,opts,before_jsload,on_jsload,reload_dependents,map__66280,map__66280__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__66029_SHARP_){
var and__25967__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__66029_SHARP_);
if(cljs.core.truth_(and__25967__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__66029_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__66029_SHARP_)));
} else {
return and__25967__auto__;
}
});
;})(inst_66331,inst_66332,inst_66333,state_val_66434,c__28201__auto__,map__66279,map__66279__$1,opts,before_jsload,on_jsload,reload_dependents,map__66280,map__66280__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_66335 = cljs.core.filter.call(null,inst_66334,files);
var inst_66336 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_66337 = cljs.core.concat.call(null,inst_66335,inst_66336);
var state_66433__$1 = (function (){var statearr_66448 = state_66433;
(statearr_66448[(17)] = inst_66333);

(statearr_66448[(12)] = inst_66337);

(statearr_66448[(18)] = inst_66331);

return statearr_66448;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_66449_66533 = state_66433__$1;
(statearr_66449_66533[(1)] = (16));

} else {
var statearr_66450_66534 = state_66433__$1;
(statearr_66450_66534[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66434 === (15))){
var inst_66321 = (state_66433[(2)]);
var state_66433__$1 = state_66433;
var statearr_66451_66535 = state_66433__$1;
(statearr_66451_66535[(2)] = inst_66321);

(statearr_66451_66535[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66434 === (21))){
var inst_66347 = (state_66433[(19)]);
var inst_66347__$1 = (state_66433[(2)]);
var inst_66348 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_66347__$1);
var state_66433__$1 = (function (){var statearr_66452 = state_66433;
(statearr_66452[(19)] = inst_66347__$1);

return statearr_66452;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66433__$1,(22),inst_66348);
} else {
if((state_val_66434 === (31))){
var inst_66431 = (state_66433[(2)]);
var state_66433__$1 = state_66433;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66433__$1,inst_66431);
} else {
if((state_val_66434 === (32))){
var inst_66387 = (state_66433[(16)]);
var inst_66392 = inst_66387.cljs$lang$protocol_mask$partition0$;
var inst_66393 = (inst_66392 & (64));
var inst_66394 = inst_66387.cljs$core$ISeq$;
var inst_66395 = (inst_66393) || (inst_66394);
var state_66433__$1 = state_66433;
if(cljs.core.truth_(inst_66395)){
var statearr_66453_66536 = state_66433__$1;
(statearr_66453_66536[(1)] = (35));

} else {
var statearr_66454_66537 = state_66433__$1;
(statearr_66454_66537[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66434 === (40))){
var inst_66408 = (state_66433[(20)]);
var inst_66407 = (state_66433[(2)]);
var inst_66408__$1 = cljs.core.get.call(null,inst_66407,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_66409 = cljs.core.get.call(null,inst_66407,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_66410 = cljs.core.not_empty.call(null,inst_66408__$1);
var state_66433__$1 = (function (){var statearr_66455 = state_66433;
(statearr_66455[(21)] = inst_66409);

(statearr_66455[(20)] = inst_66408__$1);

return statearr_66455;
})();
if(cljs.core.truth_(inst_66410)){
var statearr_66456_66538 = state_66433__$1;
(statearr_66456_66538[(1)] = (41));

} else {
var statearr_66457_66539 = state_66433__$1;
(statearr_66457_66539[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66434 === (33))){
var state_66433__$1 = state_66433;
var statearr_66458_66540 = state_66433__$1;
(statearr_66458_66540[(2)] = false);

(statearr_66458_66540[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66434 === (13))){
var inst_66307 = (state_66433[(22)]);
var inst_66311 = cljs.core.chunk_first.call(null,inst_66307);
var inst_66312 = cljs.core.chunk_rest.call(null,inst_66307);
var inst_66313 = cljs.core.count.call(null,inst_66311);
var inst_66294 = inst_66312;
var inst_66295 = inst_66311;
var inst_66296 = inst_66313;
var inst_66297 = (0);
var state_66433__$1 = (function (){var statearr_66459 = state_66433;
(statearr_66459[(7)] = inst_66297);

(statearr_66459[(8)] = inst_66295);

(statearr_66459[(9)] = inst_66296);

(statearr_66459[(10)] = inst_66294);

return statearr_66459;
})();
var statearr_66460_66541 = state_66433__$1;
(statearr_66460_66541[(2)] = null);

(statearr_66460_66541[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66434 === (22))){
var inst_66350 = (state_66433[(23)]);
var inst_66347 = (state_66433[(19)]);
var inst_66355 = (state_66433[(24)]);
var inst_66351 = (state_66433[(25)]);
var inst_66350__$1 = (state_66433[(2)]);
var inst_66351__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_66350__$1);
var inst_66352 = (function (){var all_files = inst_66347;
var res_SINGLEQUOTE_ = inst_66350__$1;
var res = inst_66351__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_66350,inst_66347,inst_66355,inst_66351,inst_66350__$1,inst_66351__$1,state_val_66434,c__28201__auto__,map__66279,map__66279__$1,opts,before_jsload,on_jsload,reload_dependents,map__66280,map__66280__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__66030_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__66030_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_66350,inst_66347,inst_66355,inst_66351,inst_66350__$1,inst_66351__$1,state_val_66434,c__28201__auto__,map__66279,map__66279__$1,opts,before_jsload,on_jsload,reload_dependents,map__66280,map__66280__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_66353 = cljs.core.filter.call(null,inst_66352,inst_66350__$1);
var inst_66354 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_66355__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_66354);
var inst_66356 = cljs.core.not_empty.call(null,inst_66355__$1);
var state_66433__$1 = (function (){var statearr_66461 = state_66433;
(statearr_66461[(23)] = inst_66350__$1);

(statearr_66461[(26)] = inst_66353);

(statearr_66461[(24)] = inst_66355__$1);

(statearr_66461[(25)] = inst_66351__$1);

return statearr_66461;
})();
if(cljs.core.truth_(inst_66356)){
var statearr_66462_66542 = state_66433__$1;
(statearr_66462_66542[(1)] = (23));

} else {
var statearr_66463_66543 = state_66433__$1;
(statearr_66463_66543[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66434 === (36))){
var state_66433__$1 = state_66433;
var statearr_66464_66544 = state_66433__$1;
(statearr_66464_66544[(2)] = false);

(statearr_66464_66544[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66434 === (41))){
var inst_66408 = (state_66433[(20)]);
var inst_66412 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_66413 = cljs.core.map.call(null,inst_66412,inst_66408);
var inst_66414 = cljs.core.pr_str.call(null,inst_66413);
var inst_66415 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_66414)].join('');
var inst_66416 = figwheel.client.utils.log.call(null,inst_66415);
var state_66433__$1 = state_66433;
var statearr_66465_66545 = state_66433__$1;
(statearr_66465_66545[(2)] = inst_66416);

(statearr_66465_66545[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66434 === (43))){
var inst_66409 = (state_66433[(21)]);
var inst_66419 = (state_66433[(2)]);
var inst_66420 = cljs.core.not_empty.call(null,inst_66409);
var state_66433__$1 = (function (){var statearr_66466 = state_66433;
(statearr_66466[(27)] = inst_66419);

return statearr_66466;
})();
if(cljs.core.truth_(inst_66420)){
var statearr_66467_66546 = state_66433__$1;
(statearr_66467_66546[(1)] = (44));

} else {
var statearr_66468_66547 = state_66433__$1;
(statearr_66468_66547[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66434 === (29))){
var inst_66350 = (state_66433[(23)]);
var inst_66347 = (state_66433[(19)]);
var inst_66387 = (state_66433[(16)]);
var inst_66353 = (state_66433[(26)]);
var inst_66355 = (state_66433[(24)]);
var inst_66351 = (state_66433[(25)]);
var inst_66383 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_66386 = (function (){var all_files = inst_66347;
var res_SINGLEQUOTE_ = inst_66350;
var res = inst_66351;
var files_not_loaded = inst_66353;
var dependencies_that_loaded = inst_66355;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_66350,inst_66347,inst_66387,inst_66353,inst_66355,inst_66351,inst_66383,state_val_66434,c__28201__auto__,map__66279,map__66279__$1,opts,before_jsload,on_jsload,reload_dependents,map__66280,map__66280__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__66385){
var map__66469 = p__66385;
var map__66469__$1 = ((((!((map__66469 == null)))?((((map__66469.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66469.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66469):map__66469);
var namespace = cljs.core.get.call(null,map__66469__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_66350,inst_66347,inst_66387,inst_66353,inst_66355,inst_66351,inst_66383,state_val_66434,c__28201__auto__,map__66279,map__66279__$1,opts,before_jsload,on_jsload,reload_dependents,map__66280,map__66280__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_66387__$1 = cljs.core.group_by.call(null,inst_66386,inst_66353);
var inst_66389 = (inst_66387__$1 == null);
var inst_66390 = cljs.core.not.call(null,inst_66389);
var state_66433__$1 = (function (){var statearr_66471 = state_66433;
(statearr_66471[(16)] = inst_66387__$1);

(statearr_66471[(28)] = inst_66383);

return statearr_66471;
})();
if(inst_66390){
var statearr_66472_66548 = state_66433__$1;
(statearr_66472_66548[(1)] = (32));

} else {
var statearr_66473_66549 = state_66433__$1;
(statearr_66473_66549[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66434 === (44))){
var inst_66409 = (state_66433[(21)]);
var inst_66422 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_66409);
var inst_66423 = cljs.core.pr_str.call(null,inst_66422);
var inst_66424 = [cljs.core.str("not required: "),cljs.core.str(inst_66423)].join('');
var inst_66425 = figwheel.client.utils.log.call(null,inst_66424);
var state_66433__$1 = state_66433;
var statearr_66474_66550 = state_66433__$1;
(statearr_66474_66550[(2)] = inst_66425);

(statearr_66474_66550[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66434 === (6))){
var inst_66328 = (state_66433[(2)]);
var state_66433__$1 = state_66433;
var statearr_66475_66551 = state_66433__$1;
(statearr_66475_66551[(2)] = inst_66328);

(statearr_66475_66551[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66434 === (28))){
var inst_66353 = (state_66433[(26)]);
var inst_66380 = (state_66433[(2)]);
var inst_66381 = cljs.core.not_empty.call(null,inst_66353);
var state_66433__$1 = (function (){var statearr_66476 = state_66433;
(statearr_66476[(29)] = inst_66380);

return statearr_66476;
})();
if(cljs.core.truth_(inst_66381)){
var statearr_66477_66552 = state_66433__$1;
(statearr_66477_66552[(1)] = (29));

} else {
var statearr_66478_66553 = state_66433__$1;
(statearr_66478_66553[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66434 === (25))){
var inst_66351 = (state_66433[(25)]);
var inst_66367 = (state_66433[(2)]);
var inst_66368 = cljs.core.not_empty.call(null,inst_66351);
var state_66433__$1 = (function (){var statearr_66479 = state_66433;
(statearr_66479[(30)] = inst_66367);

return statearr_66479;
})();
if(cljs.core.truth_(inst_66368)){
var statearr_66480_66554 = state_66433__$1;
(statearr_66480_66554[(1)] = (26));

} else {
var statearr_66481_66555 = state_66433__$1;
(statearr_66481_66555[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66434 === (34))){
var inst_66402 = (state_66433[(2)]);
var state_66433__$1 = state_66433;
if(cljs.core.truth_(inst_66402)){
var statearr_66482_66556 = state_66433__$1;
(statearr_66482_66556[(1)] = (38));

} else {
var statearr_66483_66557 = state_66433__$1;
(statearr_66483_66557[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66434 === (17))){
var state_66433__$1 = state_66433;
var statearr_66484_66558 = state_66433__$1;
(statearr_66484_66558[(2)] = recompile_dependents);

(statearr_66484_66558[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66434 === (3))){
var state_66433__$1 = state_66433;
var statearr_66485_66559 = state_66433__$1;
(statearr_66485_66559[(2)] = null);

(statearr_66485_66559[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66434 === (12))){
var inst_66324 = (state_66433[(2)]);
var state_66433__$1 = state_66433;
var statearr_66486_66560 = state_66433__$1;
(statearr_66486_66560[(2)] = inst_66324);

(statearr_66486_66560[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66434 === (2))){
var inst_66286 = (state_66433[(13)]);
var inst_66293 = cljs.core.seq.call(null,inst_66286);
var inst_66294 = inst_66293;
var inst_66295 = null;
var inst_66296 = (0);
var inst_66297 = (0);
var state_66433__$1 = (function (){var statearr_66487 = state_66433;
(statearr_66487[(7)] = inst_66297);

(statearr_66487[(8)] = inst_66295);

(statearr_66487[(9)] = inst_66296);

(statearr_66487[(10)] = inst_66294);

return statearr_66487;
})();
var statearr_66488_66561 = state_66433__$1;
(statearr_66488_66561[(2)] = null);

(statearr_66488_66561[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66434 === (23))){
var inst_66350 = (state_66433[(23)]);
var inst_66347 = (state_66433[(19)]);
var inst_66353 = (state_66433[(26)]);
var inst_66355 = (state_66433[(24)]);
var inst_66351 = (state_66433[(25)]);
var inst_66358 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_66360 = (function (){var all_files = inst_66347;
var res_SINGLEQUOTE_ = inst_66350;
var res = inst_66351;
var files_not_loaded = inst_66353;
var dependencies_that_loaded = inst_66355;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_66350,inst_66347,inst_66353,inst_66355,inst_66351,inst_66358,state_val_66434,c__28201__auto__,map__66279,map__66279__$1,opts,before_jsload,on_jsload,reload_dependents,map__66280,map__66280__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__66359){
var map__66489 = p__66359;
var map__66489__$1 = ((((!((map__66489 == null)))?((((map__66489.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66489.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66489):map__66489);
var request_url = cljs.core.get.call(null,map__66489__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_66350,inst_66347,inst_66353,inst_66355,inst_66351,inst_66358,state_val_66434,c__28201__auto__,map__66279,map__66279__$1,opts,before_jsload,on_jsload,reload_dependents,map__66280,map__66280__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_66361 = cljs.core.reverse.call(null,inst_66355);
var inst_66362 = cljs.core.map.call(null,inst_66360,inst_66361);
var inst_66363 = cljs.core.pr_str.call(null,inst_66362);
var inst_66364 = figwheel.client.utils.log.call(null,inst_66363);
var state_66433__$1 = (function (){var statearr_66491 = state_66433;
(statearr_66491[(31)] = inst_66358);

return statearr_66491;
})();
var statearr_66492_66562 = state_66433__$1;
(statearr_66492_66562[(2)] = inst_66364);

(statearr_66492_66562[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66434 === (35))){
var state_66433__$1 = state_66433;
var statearr_66493_66563 = state_66433__$1;
(statearr_66493_66563[(2)] = true);

(statearr_66493_66563[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66434 === (19))){
var inst_66337 = (state_66433[(12)]);
var inst_66343 = figwheel.client.file_reloading.expand_files.call(null,inst_66337);
var state_66433__$1 = state_66433;
var statearr_66494_66564 = state_66433__$1;
(statearr_66494_66564[(2)] = inst_66343);

(statearr_66494_66564[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66434 === (11))){
var state_66433__$1 = state_66433;
var statearr_66495_66565 = state_66433__$1;
(statearr_66495_66565[(2)] = null);

(statearr_66495_66565[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66434 === (9))){
var inst_66326 = (state_66433[(2)]);
var state_66433__$1 = state_66433;
var statearr_66496_66566 = state_66433__$1;
(statearr_66496_66566[(2)] = inst_66326);

(statearr_66496_66566[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66434 === (5))){
var inst_66297 = (state_66433[(7)]);
var inst_66296 = (state_66433[(9)]);
var inst_66299 = (inst_66297 < inst_66296);
var inst_66300 = inst_66299;
var state_66433__$1 = state_66433;
if(cljs.core.truth_(inst_66300)){
var statearr_66497_66567 = state_66433__$1;
(statearr_66497_66567[(1)] = (7));

} else {
var statearr_66498_66568 = state_66433__$1;
(statearr_66498_66568[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66434 === (14))){
var inst_66307 = (state_66433[(22)]);
var inst_66316 = cljs.core.first.call(null,inst_66307);
var inst_66317 = figwheel.client.file_reloading.eval_body.call(null,inst_66316,opts);
var inst_66318 = cljs.core.next.call(null,inst_66307);
var inst_66294 = inst_66318;
var inst_66295 = null;
var inst_66296 = (0);
var inst_66297 = (0);
var state_66433__$1 = (function (){var statearr_66499 = state_66433;
(statearr_66499[(7)] = inst_66297);

(statearr_66499[(8)] = inst_66295);

(statearr_66499[(32)] = inst_66317);

(statearr_66499[(9)] = inst_66296);

(statearr_66499[(10)] = inst_66294);

return statearr_66499;
})();
var statearr_66500_66569 = state_66433__$1;
(statearr_66500_66569[(2)] = null);

(statearr_66500_66569[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66434 === (45))){
var state_66433__$1 = state_66433;
var statearr_66501_66570 = state_66433__$1;
(statearr_66501_66570[(2)] = null);

(statearr_66501_66570[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66434 === (26))){
var inst_66350 = (state_66433[(23)]);
var inst_66347 = (state_66433[(19)]);
var inst_66353 = (state_66433[(26)]);
var inst_66355 = (state_66433[(24)]);
var inst_66351 = (state_66433[(25)]);
var inst_66370 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_66372 = (function (){var all_files = inst_66347;
var res_SINGLEQUOTE_ = inst_66350;
var res = inst_66351;
var files_not_loaded = inst_66353;
var dependencies_that_loaded = inst_66355;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_66350,inst_66347,inst_66353,inst_66355,inst_66351,inst_66370,state_val_66434,c__28201__auto__,map__66279,map__66279__$1,opts,before_jsload,on_jsload,reload_dependents,map__66280,map__66280__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__66371){
var map__66502 = p__66371;
var map__66502__$1 = ((((!((map__66502 == null)))?((((map__66502.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66502.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66502):map__66502);
var namespace = cljs.core.get.call(null,map__66502__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__66502__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_66350,inst_66347,inst_66353,inst_66355,inst_66351,inst_66370,state_val_66434,c__28201__auto__,map__66279,map__66279__$1,opts,before_jsload,on_jsload,reload_dependents,map__66280,map__66280__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_66373 = cljs.core.map.call(null,inst_66372,inst_66351);
var inst_66374 = cljs.core.pr_str.call(null,inst_66373);
var inst_66375 = figwheel.client.utils.log.call(null,inst_66374);
var inst_66376 = (function (){var all_files = inst_66347;
var res_SINGLEQUOTE_ = inst_66350;
var res = inst_66351;
var files_not_loaded = inst_66353;
var dependencies_that_loaded = inst_66355;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_66350,inst_66347,inst_66353,inst_66355,inst_66351,inst_66370,inst_66372,inst_66373,inst_66374,inst_66375,state_val_66434,c__28201__auto__,map__66279,map__66279__$1,opts,before_jsload,on_jsload,reload_dependents,map__66280,map__66280__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_66350,inst_66347,inst_66353,inst_66355,inst_66351,inst_66370,inst_66372,inst_66373,inst_66374,inst_66375,state_val_66434,c__28201__auto__,map__66279,map__66279__$1,opts,before_jsload,on_jsload,reload_dependents,map__66280,map__66280__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_66377 = setTimeout(inst_66376,(10));
var state_66433__$1 = (function (){var statearr_66504 = state_66433;
(statearr_66504[(33)] = inst_66375);

(statearr_66504[(34)] = inst_66370);

return statearr_66504;
})();
var statearr_66505_66571 = state_66433__$1;
(statearr_66505_66571[(2)] = inst_66377);

(statearr_66505_66571[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66434 === (16))){
var state_66433__$1 = state_66433;
var statearr_66506_66572 = state_66433__$1;
(statearr_66506_66572[(2)] = reload_dependents);

(statearr_66506_66572[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66434 === (38))){
var inst_66387 = (state_66433[(16)]);
var inst_66404 = cljs.core.apply.call(null,cljs.core.hash_map,inst_66387);
var state_66433__$1 = state_66433;
var statearr_66507_66573 = state_66433__$1;
(statearr_66507_66573[(2)] = inst_66404);

(statearr_66507_66573[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66434 === (30))){
var state_66433__$1 = state_66433;
var statearr_66508_66574 = state_66433__$1;
(statearr_66508_66574[(2)] = null);

(statearr_66508_66574[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66434 === (10))){
var inst_66307 = (state_66433[(22)]);
var inst_66309 = cljs.core.chunked_seq_QMARK_.call(null,inst_66307);
var state_66433__$1 = state_66433;
if(inst_66309){
var statearr_66509_66575 = state_66433__$1;
(statearr_66509_66575[(1)] = (13));

} else {
var statearr_66510_66576 = state_66433__$1;
(statearr_66510_66576[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66434 === (18))){
var inst_66341 = (state_66433[(2)]);
var state_66433__$1 = state_66433;
if(cljs.core.truth_(inst_66341)){
var statearr_66511_66577 = state_66433__$1;
(statearr_66511_66577[(1)] = (19));

} else {
var statearr_66512_66578 = state_66433__$1;
(statearr_66512_66578[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66434 === (42))){
var state_66433__$1 = state_66433;
var statearr_66513_66579 = state_66433__$1;
(statearr_66513_66579[(2)] = null);

(statearr_66513_66579[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66434 === (37))){
var inst_66399 = (state_66433[(2)]);
var state_66433__$1 = state_66433;
var statearr_66514_66580 = state_66433__$1;
(statearr_66514_66580[(2)] = inst_66399);

(statearr_66514_66580[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66434 === (8))){
var inst_66307 = (state_66433[(22)]);
var inst_66294 = (state_66433[(10)]);
var inst_66307__$1 = cljs.core.seq.call(null,inst_66294);
var state_66433__$1 = (function (){var statearr_66515 = state_66433;
(statearr_66515[(22)] = inst_66307__$1);

return statearr_66515;
})();
if(inst_66307__$1){
var statearr_66516_66581 = state_66433__$1;
(statearr_66516_66581[(1)] = (10));

} else {
var statearr_66517_66582 = state_66433__$1;
(statearr_66517_66582[(1)] = (11));

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
});})(c__28201__auto__,map__66279,map__66279__$1,opts,before_jsload,on_jsload,reload_dependents,map__66280,map__66280__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__28088__auto__,c__28201__auto__,map__66279,map__66279__$1,opts,before_jsload,on_jsload,reload_dependents,map__66280,map__66280__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28089__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28089__auto____0 = (function (){
var statearr_66521 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_66521[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__28089__auto__);

(statearr_66521[(1)] = (1));

return statearr_66521;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28089__auto____1 = (function (state_66433){
while(true){
var ret_value__28090__auto__ = (function (){try{while(true){
var result__28091__auto__ = switch__28088__auto__.call(null,state_66433);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28091__auto__;
}
break;
}
}catch (e66522){if((e66522 instanceof Object)){
var ex__28092__auto__ = e66522;
var statearr_66523_66583 = state_66433;
(statearr_66523_66583[(5)] = ex__28092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66433);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66522;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66584 = state_66433;
state_66433 = G__66584;
continue;
} else {
return ret_value__28090__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__28089__auto__ = function(state_66433){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28089__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28089__auto____1.call(this,state_66433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28089__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28089__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28089__auto__;
})()
;})(switch__28088__auto__,c__28201__auto__,map__66279,map__66279__$1,opts,before_jsload,on_jsload,reload_dependents,map__66280,map__66280__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__28203__auto__ = (function (){var statearr_66524 = f__28202__auto__.call(null);
(statearr_66524[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28201__auto__);

return statearr_66524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28203__auto__);
});})(c__28201__auto__,map__66279,map__66279__$1,opts,before_jsload,on_jsload,reload_dependents,map__66280,map__66280__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__28201__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__66587,link){
var map__66590 = p__66587;
var map__66590__$1 = ((((!((map__66590 == null)))?((((map__66590.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66590.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66590):map__66590);
var file = cljs.core.get.call(null,map__66590__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__66590,map__66590__$1,file){
return (function (p1__66585_SHARP_,p2__66586_SHARP_){
if(cljs.core._EQ_.call(null,p1__66585_SHARP_,p2__66586_SHARP_)){
return p1__66585_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__66590,map__66590__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__66596){
var map__66597 = p__66596;
var map__66597__$1 = ((((!((map__66597 == null)))?((((map__66597.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66597.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66597):map__66597);
var match_length = cljs.core.get.call(null,map__66597__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__66597__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__66592_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__66592_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__66599_SHARP_,p2__66600_SHARP_){
return cljs.core.assoc.call(null,p1__66599_SHARP_,cljs.core.get.call(null,p2__66600_SHARP_,key),p2__66600_SHARP_);
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
var loaded_f_datas_66601 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_66601);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_66601);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__66602,p__66603){
var map__66608 = p__66602;
var map__66608__$1 = ((((!((map__66608 == null)))?((((map__66608.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66608.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66608):map__66608);
var on_cssload = cljs.core.get.call(null,map__66608__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__66609 = p__66603;
var map__66609__$1 = ((((!((map__66609 == null)))?((((map__66609.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66609.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66609):map__66609);
var files_msg = map__66609__$1;
var files = cljs.core.get.call(null,map__66609__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1498707051423