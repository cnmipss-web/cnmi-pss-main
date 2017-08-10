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
var or__27054__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__27054__auto__){
return or__27054__auto__;
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
var or__27054__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__27054__auto__)){
return or__27054__auto__;
} else {
var or__27054__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__27054__auto____$1)){
return or__27054__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__35778_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__35778_SHARP_));
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
var seq__35779 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__35780 = null;
var count__35781 = (0);
var i__35782 = (0);
while(true){
if((i__35782 < count__35781)){
var n = cljs.core._nth.call(null,chunk__35780,i__35782);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__35783 = seq__35779;
var G__35784 = chunk__35780;
var G__35785 = count__35781;
var G__35786 = (i__35782 + (1));
seq__35779 = G__35783;
chunk__35780 = G__35784;
count__35781 = G__35785;
i__35782 = G__35786;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35779);
if(temp__4657__auto__){
var seq__35779__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35779__$1)){
var c__27874__auto__ = cljs.core.chunk_first.call(null,seq__35779__$1);
var G__35787 = cljs.core.chunk_rest.call(null,seq__35779__$1);
var G__35788 = c__27874__auto__;
var G__35789 = cljs.core.count.call(null,c__27874__auto__);
var G__35790 = (0);
seq__35779 = G__35787;
chunk__35780 = G__35788;
count__35781 = G__35789;
i__35782 = G__35790;
continue;
} else {
var n = cljs.core.first.call(null,seq__35779__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__35791 = cljs.core.next.call(null,seq__35779__$1);
var G__35792 = null;
var G__35793 = (0);
var G__35794 = (0);
seq__35779 = G__35791;
chunk__35780 = G__35792;
count__35781 = G__35793;
i__35782 = G__35794;
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

var seq__35804_35812 = cljs.core.seq.call(null,deps);
var chunk__35805_35813 = null;
var count__35806_35814 = (0);
var i__35807_35815 = (0);
while(true){
if((i__35807_35815 < count__35806_35814)){
var dep_35816 = cljs.core._nth.call(null,chunk__35805_35813,i__35807_35815);
topo_sort_helper_STAR_.call(null,dep_35816,(depth + (1)),state);

var G__35817 = seq__35804_35812;
var G__35818 = chunk__35805_35813;
var G__35819 = count__35806_35814;
var G__35820 = (i__35807_35815 + (1));
seq__35804_35812 = G__35817;
chunk__35805_35813 = G__35818;
count__35806_35814 = G__35819;
i__35807_35815 = G__35820;
continue;
} else {
var temp__4657__auto___35821 = cljs.core.seq.call(null,seq__35804_35812);
if(temp__4657__auto___35821){
var seq__35804_35822__$1 = temp__4657__auto___35821;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35804_35822__$1)){
var c__27874__auto___35823 = cljs.core.chunk_first.call(null,seq__35804_35822__$1);
var G__35824 = cljs.core.chunk_rest.call(null,seq__35804_35822__$1);
var G__35825 = c__27874__auto___35823;
var G__35826 = cljs.core.count.call(null,c__27874__auto___35823);
var G__35827 = (0);
seq__35804_35812 = G__35824;
chunk__35805_35813 = G__35825;
count__35806_35814 = G__35826;
i__35807_35815 = G__35827;
continue;
} else {
var dep_35828 = cljs.core.first.call(null,seq__35804_35822__$1);
topo_sort_helper_STAR_.call(null,dep_35828,(depth + (1)),state);

var G__35829 = cljs.core.next.call(null,seq__35804_35822__$1);
var G__35830 = null;
var G__35831 = (0);
var G__35832 = (0);
seq__35804_35812 = G__35829;
chunk__35805_35813 = G__35830;
count__35806_35814 = G__35831;
i__35807_35815 = G__35832;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__35808){
var vec__35809 = p__35808;
var seq__35810 = cljs.core.seq.call(null,vec__35809);
var first__35811 = cljs.core.first.call(null,seq__35810);
var seq__35810__$1 = cljs.core.next.call(null,seq__35810);
var x = first__35811;
var xs = seq__35810__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__35809,seq__35810,first__35811,seq__35810__$1,x,xs,get_deps__$1){
return (function (p1__35795_SHARP_){
return clojure.set.difference.call(null,p1__35795_SHARP_,x);
});})(vec__35809,seq__35810,first__35811,seq__35810__$1,x,xs,get_deps__$1))
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
var seq__35833 = cljs.core.seq.call(null,provides);
var chunk__35834 = null;
var count__35835 = (0);
var i__35836 = (0);
while(true){
if((i__35836 < count__35835)){
var prov = cljs.core._nth.call(null,chunk__35834,i__35836);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__35837_35845 = cljs.core.seq.call(null,requires);
var chunk__35838_35846 = null;
var count__35839_35847 = (0);
var i__35840_35848 = (0);
while(true){
if((i__35840_35848 < count__35839_35847)){
var req_35849 = cljs.core._nth.call(null,chunk__35838_35846,i__35840_35848);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35849,prov);

var G__35850 = seq__35837_35845;
var G__35851 = chunk__35838_35846;
var G__35852 = count__35839_35847;
var G__35853 = (i__35840_35848 + (1));
seq__35837_35845 = G__35850;
chunk__35838_35846 = G__35851;
count__35839_35847 = G__35852;
i__35840_35848 = G__35853;
continue;
} else {
var temp__4657__auto___35854 = cljs.core.seq.call(null,seq__35837_35845);
if(temp__4657__auto___35854){
var seq__35837_35855__$1 = temp__4657__auto___35854;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35837_35855__$1)){
var c__27874__auto___35856 = cljs.core.chunk_first.call(null,seq__35837_35855__$1);
var G__35857 = cljs.core.chunk_rest.call(null,seq__35837_35855__$1);
var G__35858 = c__27874__auto___35856;
var G__35859 = cljs.core.count.call(null,c__27874__auto___35856);
var G__35860 = (0);
seq__35837_35845 = G__35857;
chunk__35838_35846 = G__35858;
count__35839_35847 = G__35859;
i__35840_35848 = G__35860;
continue;
} else {
var req_35861 = cljs.core.first.call(null,seq__35837_35855__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35861,prov);

var G__35862 = cljs.core.next.call(null,seq__35837_35855__$1);
var G__35863 = null;
var G__35864 = (0);
var G__35865 = (0);
seq__35837_35845 = G__35862;
chunk__35838_35846 = G__35863;
count__35839_35847 = G__35864;
i__35840_35848 = G__35865;
continue;
}
} else {
}
}
break;
}

var G__35866 = seq__35833;
var G__35867 = chunk__35834;
var G__35868 = count__35835;
var G__35869 = (i__35836 + (1));
seq__35833 = G__35866;
chunk__35834 = G__35867;
count__35835 = G__35868;
i__35836 = G__35869;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35833);
if(temp__4657__auto__){
var seq__35833__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35833__$1)){
var c__27874__auto__ = cljs.core.chunk_first.call(null,seq__35833__$1);
var G__35870 = cljs.core.chunk_rest.call(null,seq__35833__$1);
var G__35871 = c__27874__auto__;
var G__35872 = cljs.core.count.call(null,c__27874__auto__);
var G__35873 = (0);
seq__35833 = G__35870;
chunk__35834 = G__35871;
count__35835 = G__35872;
i__35836 = G__35873;
continue;
} else {
var prov = cljs.core.first.call(null,seq__35833__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__35841_35874 = cljs.core.seq.call(null,requires);
var chunk__35842_35875 = null;
var count__35843_35876 = (0);
var i__35844_35877 = (0);
while(true){
if((i__35844_35877 < count__35843_35876)){
var req_35878 = cljs.core._nth.call(null,chunk__35842_35875,i__35844_35877);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35878,prov);

var G__35879 = seq__35841_35874;
var G__35880 = chunk__35842_35875;
var G__35881 = count__35843_35876;
var G__35882 = (i__35844_35877 + (1));
seq__35841_35874 = G__35879;
chunk__35842_35875 = G__35880;
count__35843_35876 = G__35881;
i__35844_35877 = G__35882;
continue;
} else {
var temp__4657__auto___35883__$1 = cljs.core.seq.call(null,seq__35841_35874);
if(temp__4657__auto___35883__$1){
var seq__35841_35884__$1 = temp__4657__auto___35883__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35841_35884__$1)){
var c__27874__auto___35885 = cljs.core.chunk_first.call(null,seq__35841_35884__$1);
var G__35886 = cljs.core.chunk_rest.call(null,seq__35841_35884__$1);
var G__35887 = c__27874__auto___35885;
var G__35888 = cljs.core.count.call(null,c__27874__auto___35885);
var G__35889 = (0);
seq__35841_35874 = G__35886;
chunk__35842_35875 = G__35887;
count__35843_35876 = G__35888;
i__35844_35877 = G__35889;
continue;
} else {
var req_35890 = cljs.core.first.call(null,seq__35841_35884__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35890,prov);

var G__35891 = cljs.core.next.call(null,seq__35841_35884__$1);
var G__35892 = null;
var G__35893 = (0);
var G__35894 = (0);
seq__35841_35874 = G__35891;
chunk__35842_35875 = G__35892;
count__35843_35876 = G__35893;
i__35844_35877 = G__35894;
continue;
}
} else {
}
}
break;
}

var G__35895 = cljs.core.next.call(null,seq__35833__$1);
var G__35896 = null;
var G__35897 = (0);
var G__35898 = (0);
seq__35833 = G__35895;
chunk__35834 = G__35896;
count__35835 = G__35897;
i__35836 = G__35898;
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
var seq__35899_35903 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__35900_35904 = null;
var count__35901_35905 = (0);
var i__35902_35906 = (0);
while(true){
if((i__35902_35906 < count__35901_35905)){
var ns_35907 = cljs.core._nth.call(null,chunk__35900_35904,i__35902_35906);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35907);

var G__35908 = seq__35899_35903;
var G__35909 = chunk__35900_35904;
var G__35910 = count__35901_35905;
var G__35911 = (i__35902_35906 + (1));
seq__35899_35903 = G__35908;
chunk__35900_35904 = G__35909;
count__35901_35905 = G__35910;
i__35902_35906 = G__35911;
continue;
} else {
var temp__4657__auto___35912 = cljs.core.seq.call(null,seq__35899_35903);
if(temp__4657__auto___35912){
var seq__35899_35913__$1 = temp__4657__auto___35912;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35899_35913__$1)){
var c__27874__auto___35914 = cljs.core.chunk_first.call(null,seq__35899_35913__$1);
var G__35915 = cljs.core.chunk_rest.call(null,seq__35899_35913__$1);
var G__35916 = c__27874__auto___35914;
var G__35917 = cljs.core.count.call(null,c__27874__auto___35914);
var G__35918 = (0);
seq__35899_35903 = G__35915;
chunk__35900_35904 = G__35916;
count__35901_35905 = G__35917;
i__35902_35906 = G__35918;
continue;
} else {
var ns_35919 = cljs.core.first.call(null,seq__35899_35913__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35919);

var G__35920 = cljs.core.next.call(null,seq__35899_35913__$1);
var G__35921 = null;
var G__35922 = (0);
var G__35923 = (0);
seq__35899_35903 = G__35920;
chunk__35900_35904 = G__35921;
count__35901_35905 = G__35922;
i__35902_35906 = G__35923;
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
goog.require_figwheel_backup_ = (function (){var or__27054__auto__ = goog.require__;
if(cljs.core.truth_(or__27054__auto__)){
return or__27054__auto__;
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
var G__35924__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__35924 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35925__i = 0, G__35925__a = new Array(arguments.length -  0);
while (G__35925__i < G__35925__a.length) {G__35925__a[G__35925__i] = arguments[G__35925__i + 0]; ++G__35925__i;}
  args = new cljs.core.IndexedSeq(G__35925__a,0,null);
} 
return G__35924__delegate.call(this,args);};
G__35924.cljs$lang$maxFixedArity = 0;
G__35924.cljs$lang$applyTo = (function (arglist__35926){
var args = cljs.core.seq(arglist__35926);
return G__35924__delegate(args);
});
G__35924.cljs$core$IFn$_invoke$arity$variadic = G__35924__delegate;
return G__35924;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__35927 = cljs.core._EQ_;
var expr__35928 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__35927.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__35928))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__35927,expr__35928){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__35927,expr__35928))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__35927,expr__35928){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e35930){if((e35930 instanceof Error)){
var e = e35930;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35930;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__35927,expr__35928))
} else {
if(cljs.core.truth_(pred__35927.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__35928))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__35927.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__35928))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__35927.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__35928))){
return ((function (pred__35927,expr__35928){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e35931){if((e35931 instanceof Error)){
var e = e35931;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35931;

}
}})());
});
;})(pred__35927,expr__35928))
} else {
return ((function (pred__35927,expr__35928){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__35927,expr__35928))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__35932,callback){
var map__35933 = p__35932;
var map__35933__$1 = ((((!((map__35933 == null)))?((((map__35933.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35933.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35933):map__35933);
var file_msg = map__35933__$1;
var request_url = cljs.core.get.call(null,map__35933__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Attempting to load "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__35933,map__35933__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Successfully loaded "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__35933,map__35933__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__33471__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33471__auto__){
return (function (){
var f__33472__auto__ = (function (){var switch__33383__auto__ = ((function (c__33471__auto__){
return (function (state_35957){
var state_val_35958 = (state_35957[(1)]);
if((state_val_35958 === (7))){
var inst_35953 = (state_35957[(2)]);
var state_35957__$1 = state_35957;
var statearr_35959_35976 = state_35957__$1;
(statearr_35959_35976[(2)] = inst_35953);

(statearr_35959_35976[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35958 === (1))){
var state_35957__$1 = state_35957;
var statearr_35960_35977 = state_35957__$1;
(statearr_35960_35977[(2)] = null);

(statearr_35960_35977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35958 === (4))){
var inst_35937 = (state_35957[(7)]);
var inst_35937__$1 = (state_35957[(2)]);
var state_35957__$1 = (function (){var statearr_35961 = state_35957;
(statearr_35961[(7)] = inst_35937__$1);

return statearr_35961;
})();
if(cljs.core.truth_(inst_35937__$1)){
var statearr_35962_35978 = state_35957__$1;
(statearr_35962_35978[(1)] = (5));

} else {
var statearr_35963_35979 = state_35957__$1;
(statearr_35963_35979[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35958 === (6))){
var state_35957__$1 = state_35957;
var statearr_35964_35980 = state_35957__$1;
(statearr_35964_35980[(2)] = null);

(statearr_35964_35980[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35958 === (3))){
var inst_35955 = (state_35957[(2)]);
var state_35957__$1 = state_35957;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35957__$1,inst_35955);
} else {
if((state_val_35958 === (2))){
var state_35957__$1 = state_35957;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35957__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_35958 === (11))){
var inst_35949 = (state_35957[(2)]);
var state_35957__$1 = (function (){var statearr_35965 = state_35957;
(statearr_35965[(8)] = inst_35949);

return statearr_35965;
})();
var statearr_35966_35981 = state_35957__$1;
(statearr_35966_35981[(2)] = null);

(statearr_35966_35981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35958 === (9))){
var inst_35941 = (state_35957[(9)]);
var inst_35943 = (state_35957[(10)]);
var inst_35945 = inst_35943.call(null,inst_35941);
var state_35957__$1 = state_35957;
var statearr_35967_35982 = state_35957__$1;
(statearr_35967_35982[(2)] = inst_35945);

(statearr_35967_35982[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35958 === (5))){
var inst_35937 = (state_35957[(7)]);
var inst_35939 = figwheel.client.file_reloading.blocking_load.call(null,inst_35937);
var state_35957__$1 = state_35957;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35957__$1,(8),inst_35939);
} else {
if((state_val_35958 === (10))){
var inst_35941 = (state_35957[(9)]);
var inst_35947 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_35941);
var state_35957__$1 = state_35957;
var statearr_35968_35983 = state_35957__$1;
(statearr_35968_35983[(2)] = inst_35947);

(statearr_35968_35983[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35958 === (8))){
var inst_35943 = (state_35957[(10)]);
var inst_35937 = (state_35957[(7)]);
var inst_35941 = (state_35957[(2)]);
var inst_35942 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_35943__$1 = cljs.core.get.call(null,inst_35942,inst_35937);
var state_35957__$1 = (function (){var statearr_35969 = state_35957;
(statearr_35969[(9)] = inst_35941);

(statearr_35969[(10)] = inst_35943__$1);

return statearr_35969;
})();
if(cljs.core.truth_(inst_35943__$1)){
var statearr_35970_35984 = state_35957__$1;
(statearr_35970_35984[(1)] = (9));

} else {
var statearr_35971_35985 = state_35957__$1;
(statearr_35971_35985[(1)] = (10));

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
});})(c__33471__auto__))
;
return ((function (switch__33383__auto__,c__33471__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__33384__auto__ = null;
var figwheel$client$file_reloading$state_machine__33384__auto____0 = (function (){
var statearr_35972 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35972[(0)] = figwheel$client$file_reloading$state_machine__33384__auto__);

(statearr_35972[(1)] = (1));

return statearr_35972;
});
var figwheel$client$file_reloading$state_machine__33384__auto____1 = (function (state_35957){
while(true){
var ret_value__33385__auto__ = (function (){try{while(true){
var result__33386__auto__ = switch__33383__auto__.call(null,state_35957);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33386__auto__;
}
break;
}
}catch (e35973){if((e35973 instanceof Object)){
var ex__33387__auto__ = e35973;
var statearr_35974_35986 = state_35957;
(statearr_35974_35986[(5)] = ex__33387__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35957);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35973;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35987 = state_35957;
state_35957 = G__35987;
continue;
} else {
return ret_value__33385__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__33384__auto__ = function(state_35957){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__33384__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__33384__auto____1.call(this,state_35957);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__33384__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__33384__auto____0;
figwheel$client$file_reloading$state_machine__33384__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__33384__auto____1;
return figwheel$client$file_reloading$state_machine__33384__auto__;
})()
;})(switch__33383__auto__,c__33471__auto__))
})();
var state__33473__auto__ = (function (){var statearr_35975 = f__33472__auto__.call(null);
(statearr_35975[(6)] = c__33471__auto__);

return statearr_35975;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33473__auto__);
});})(c__33471__auto__))
);

return c__33471__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__35988,callback){
var map__35989 = p__35988;
var map__35989__$1 = ((((!((map__35989 == null)))?((((map__35989.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35989.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35989):map__35989);
var file_msg = map__35989__$1;
var namespace = cljs.core.get.call(null,map__35989__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__35989,map__35989__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__35989,map__35989__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__35991){
var map__35992 = p__35991;
var map__35992__$1 = ((((!((map__35992 == null)))?((((map__35992.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35992.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35992):map__35992);
var file_msg = map__35992__$1;
var namespace = cljs.core.get.call(null,map__35992__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__35994){
var map__35995 = p__35994;
var map__35995__$1 = ((((!((map__35995 == null)))?((((map__35995.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35995.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35995):map__35995);
var file_msg = map__35995__$1;
var namespace = cljs.core.get.call(null,map__35995__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__27042__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__27042__auto__){
var or__27054__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__27054__auto__)){
return or__27054__auto__;
} else {
var or__27054__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__27054__auto____$1)){
return or__27054__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__27042__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__35997,callback){
var map__35998 = p__35997;
var map__35998__$1 = ((((!((map__35998 == null)))?((((map__35998.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35998.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35998):map__35998);
var file_msg = map__35998__$1;
var request_url = cljs.core.get.call(null,map__35998__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__35998__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__33471__auto___36048 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33471__auto___36048,out){
return (function (){
var f__33472__auto__ = (function (){var switch__33383__auto__ = ((function (c__33471__auto___36048,out){
return (function (state_36033){
var state_val_36034 = (state_36033[(1)]);
if((state_val_36034 === (1))){
var inst_36007 = cljs.core.seq.call(null,files);
var inst_36008 = cljs.core.first.call(null,inst_36007);
var inst_36009 = cljs.core.next.call(null,inst_36007);
var inst_36010 = files;
var state_36033__$1 = (function (){var statearr_36035 = state_36033;
(statearr_36035[(7)] = inst_36008);

(statearr_36035[(8)] = inst_36009);

(statearr_36035[(9)] = inst_36010);

return statearr_36035;
})();
var statearr_36036_36049 = state_36033__$1;
(statearr_36036_36049[(2)] = null);

(statearr_36036_36049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36034 === (2))){
var inst_36016 = (state_36033[(10)]);
var inst_36010 = (state_36033[(9)]);
var inst_36015 = cljs.core.seq.call(null,inst_36010);
var inst_36016__$1 = cljs.core.first.call(null,inst_36015);
var inst_36017 = cljs.core.next.call(null,inst_36015);
var inst_36018 = (inst_36016__$1 == null);
var inst_36019 = cljs.core.not.call(null,inst_36018);
var state_36033__$1 = (function (){var statearr_36037 = state_36033;
(statearr_36037[(10)] = inst_36016__$1);

(statearr_36037[(11)] = inst_36017);

return statearr_36037;
})();
if(inst_36019){
var statearr_36038_36050 = state_36033__$1;
(statearr_36038_36050[(1)] = (4));

} else {
var statearr_36039_36051 = state_36033__$1;
(statearr_36039_36051[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36034 === (3))){
var inst_36031 = (state_36033[(2)]);
var state_36033__$1 = state_36033;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36033__$1,inst_36031);
} else {
if((state_val_36034 === (4))){
var inst_36016 = (state_36033[(10)]);
var inst_36021 = figwheel.client.file_reloading.reload_js_file.call(null,inst_36016);
var state_36033__$1 = state_36033;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36033__$1,(7),inst_36021);
} else {
if((state_val_36034 === (5))){
var inst_36027 = cljs.core.async.close_BANG_.call(null,out);
var state_36033__$1 = state_36033;
var statearr_36040_36052 = state_36033__$1;
(statearr_36040_36052[(2)] = inst_36027);

(statearr_36040_36052[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36034 === (6))){
var inst_36029 = (state_36033[(2)]);
var state_36033__$1 = state_36033;
var statearr_36041_36053 = state_36033__$1;
(statearr_36041_36053[(2)] = inst_36029);

(statearr_36041_36053[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36034 === (7))){
var inst_36017 = (state_36033[(11)]);
var inst_36023 = (state_36033[(2)]);
var inst_36024 = cljs.core.async.put_BANG_.call(null,out,inst_36023);
var inst_36010 = inst_36017;
var state_36033__$1 = (function (){var statearr_36042 = state_36033;
(statearr_36042[(12)] = inst_36024);

(statearr_36042[(9)] = inst_36010);

return statearr_36042;
})();
var statearr_36043_36054 = state_36033__$1;
(statearr_36043_36054[(2)] = null);

(statearr_36043_36054[(1)] = (2));


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
});})(c__33471__auto___36048,out))
;
return ((function (switch__33383__auto__,c__33471__auto___36048,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33384__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33384__auto____0 = (function (){
var statearr_36044 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36044[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33384__auto__);

(statearr_36044[(1)] = (1));

return statearr_36044;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33384__auto____1 = (function (state_36033){
while(true){
var ret_value__33385__auto__ = (function (){try{while(true){
var result__33386__auto__ = switch__33383__auto__.call(null,state_36033);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33386__auto__;
}
break;
}
}catch (e36045){if((e36045 instanceof Object)){
var ex__33387__auto__ = e36045;
var statearr_36046_36055 = state_36033;
(statearr_36046_36055[(5)] = ex__33387__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36033);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36045;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36056 = state_36033;
state_36033 = G__36056;
continue;
} else {
return ret_value__33385__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33384__auto__ = function(state_36033){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33384__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33384__auto____1.call(this,state_36033);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33384__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33384__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33384__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33384__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33384__auto__;
})()
;})(switch__33383__auto__,c__33471__auto___36048,out))
})();
var state__33473__auto__ = (function (){var statearr_36047 = f__33472__auto__.call(null);
(statearr_36047[(6)] = c__33471__auto___36048);

return statearr_36047;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33473__auto__);
});})(c__33471__auto___36048,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__36057,opts){
var map__36058 = p__36057;
var map__36058__$1 = ((((!((map__36058 == null)))?((((map__36058.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36058.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36058):map__36058);
var eval_body = cljs.core.get.call(null,map__36058__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__36058__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__27042__auto__ = eval_body;
if(cljs.core.truth_(and__27042__auto__)){
return typeof eval_body === 'string';
} else {
return and__27042__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Evaling file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e36060){var e = e36060;
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
return (function (p1__36061_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36061_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__36062){
var vec__36063 = p__36062;
var k = cljs.core.nth.call(null,vec__36063,(0),null);
var v = cljs.core.nth.call(null,vec__36063,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__36066){
var vec__36067 = p__36066;
var k = cljs.core.nth.call(null,vec__36067,(0),null);
var v = cljs.core.nth.call(null,vec__36067,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__36073,p__36074){
var map__36075 = p__36073;
var map__36075__$1 = ((((!((map__36075 == null)))?((((map__36075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36075.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36075):map__36075);
var opts = map__36075__$1;
var before_jsload = cljs.core.get.call(null,map__36075__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__36075__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__36075__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__36076 = p__36074;
var map__36076__$1 = ((((!((map__36076 == null)))?((((map__36076.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36076.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36076):map__36076);
var msg = map__36076__$1;
var files = cljs.core.get.call(null,map__36076__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__36076__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__36076__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__33471__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33471__auto__,map__36075,map__36075__$1,opts,before_jsload,on_jsload,reload_dependents,map__36076,map__36076__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__33472__auto__ = (function (){var switch__33383__auto__ = ((function (c__33471__auto__,map__36075,map__36075__$1,opts,before_jsload,on_jsload,reload_dependents,map__36076,map__36076__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_36230){
var state_val_36231 = (state_36230[(1)]);
if((state_val_36231 === (7))){
var inst_36092 = (state_36230[(7)]);
var inst_36091 = (state_36230[(8)]);
var inst_36093 = (state_36230[(9)]);
var inst_36090 = (state_36230[(10)]);
var inst_36098 = cljs.core._nth.call(null,inst_36091,inst_36093);
var inst_36099 = figwheel.client.file_reloading.eval_body.call(null,inst_36098,opts);
var inst_36100 = (inst_36093 + (1));
var tmp36232 = inst_36092;
var tmp36233 = inst_36091;
var tmp36234 = inst_36090;
var inst_36090__$1 = tmp36234;
var inst_36091__$1 = tmp36233;
var inst_36092__$1 = tmp36232;
var inst_36093__$1 = inst_36100;
var state_36230__$1 = (function (){var statearr_36235 = state_36230;
(statearr_36235[(7)] = inst_36092__$1);

(statearr_36235[(8)] = inst_36091__$1);

(statearr_36235[(11)] = inst_36099);

(statearr_36235[(9)] = inst_36093__$1);

(statearr_36235[(10)] = inst_36090__$1);

return statearr_36235;
})();
var statearr_36236_36319 = state_36230__$1;
(statearr_36236_36319[(2)] = null);

(statearr_36236_36319[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36231 === (20))){
var inst_36133 = (state_36230[(12)]);
var inst_36141 = figwheel.client.file_reloading.sort_files.call(null,inst_36133);
var state_36230__$1 = state_36230;
var statearr_36237_36320 = state_36230__$1;
(statearr_36237_36320[(2)] = inst_36141);

(statearr_36237_36320[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36231 === (27))){
var state_36230__$1 = state_36230;
var statearr_36238_36321 = state_36230__$1;
(statearr_36238_36321[(2)] = null);

(statearr_36238_36321[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36231 === (1))){
var inst_36082 = (state_36230[(13)]);
var inst_36079 = before_jsload.call(null,files);
var inst_36080 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_36081 = (function (){return ((function (inst_36082,inst_36079,inst_36080,state_val_36231,c__33471__auto__,map__36075,map__36075__$1,opts,before_jsload,on_jsload,reload_dependents,map__36076,map__36076__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36070_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36070_SHARP_);
});
;})(inst_36082,inst_36079,inst_36080,state_val_36231,c__33471__auto__,map__36075,map__36075__$1,opts,before_jsload,on_jsload,reload_dependents,map__36076,map__36076__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36082__$1 = cljs.core.filter.call(null,inst_36081,files);
var inst_36083 = cljs.core.not_empty.call(null,inst_36082__$1);
var state_36230__$1 = (function (){var statearr_36239 = state_36230;
(statearr_36239[(14)] = inst_36080);

(statearr_36239[(13)] = inst_36082__$1);

(statearr_36239[(15)] = inst_36079);

return statearr_36239;
})();
if(cljs.core.truth_(inst_36083)){
var statearr_36240_36322 = state_36230__$1;
(statearr_36240_36322[(1)] = (2));

} else {
var statearr_36241_36323 = state_36230__$1;
(statearr_36241_36323[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36231 === (24))){
var state_36230__$1 = state_36230;
var statearr_36242_36324 = state_36230__$1;
(statearr_36242_36324[(2)] = null);

(statearr_36242_36324[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36231 === (39))){
var inst_36183 = (state_36230[(16)]);
var state_36230__$1 = state_36230;
var statearr_36243_36325 = state_36230__$1;
(statearr_36243_36325[(2)] = inst_36183);

(statearr_36243_36325[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36231 === (46))){
var inst_36225 = (state_36230[(2)]);
var state_36230__$1 = state_36230;
var statearr_36244_36326 = state_36230__$1;
(statearr_36244_36326[(2)] = inst_36225);

(statearr_36244_36326[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36231 === (4))){
var inst_36127 = (state_36230[(2)]);
var inst_36128 = cljs.core.List.EMPTY;
var inst_36129 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_36128);
var inst_36130 = (function (){return ((function (inst_36127,inst_36128,inst_36129,state_val_36231,c__33471__auto__,map__36075,map__36075__$1,opts,before_jsload,on_jsload,reload_dependents,map__36076,map__36076__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36071_SHARP_){
var and__27042__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36071_SHARP_);
if(cljs.core.truth_(and__27042__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36071_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__36071_SHARP_)));
} else {
return and__27042__auto__;
}
});
;})(inst_36127,inst_36128,inst_36129,state_val_36231,c__33471__auto__,map__36075,map__36075__$1,opts,before_jsload,on_jsload,reload_dependents,map__36076,map__36076__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36131 = cljs.core.filter.call(null,inst_36130,files);
var inst_36132 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_36133 = cljs.core.concat.call(null,inst_36131,inst_36132);
var state_36230__$1 = (function (){var statearr_36245 = state_36230;
(statearr_36245[(12)] = inst_36133);

(statearr_36245[(17)] = inst_36129);

(statearr_36245[(18)] = inst_36127);

return statearr_36245;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_36246_36327 = state_36230__$1;
(statearr_36246_36327[(1)] = (16));

} else {
var statearr_36247_36328 = state_36230__$1;
(statearr_36247_36328[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36231 === (15))){
var inst_36117 = (state_36230[(2)]);
var state_36230__$1 = state_36230;
var statearr_36248_36329 = state_36230__$1;
(statearr_36248_36329[(2)] = inst_36117);

(statearr_36248_36329[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36231 === (21))){
var inst_36143 = (state_36230[(19)]);
var inst_36143__$1 = (state_36230[(2)]);
var inst_36144 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_36143__$1);
var state_36230__$1 = (function (){var statearr_36249 = state_36230;
(statearr_36249[(19)] = inst_36143__$1);

return statearr_36249;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36230__$1,(22),inst_36144);
} else {
if((state_val_36231 === (31))){
var inst_36228 = (state_36230[(2)]);
var state_36230__$1 = state_36230;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36230__$1,inst_36228);
} else {
if((state_val_36231 === (32))){
var inst_36183 = (state_36230[(16)]);
var inst_36188 = inst_36183.cljs$lang$protocol_mask$partition0$;
var inst_36189 = (inst_36188 & (64));
var inst_36190 = inst_36183.cljs$core$ISeq$;
var inst_36191 = (cljs.core.PROTOCOL_SENTINEL === inst_36190);
var inst_36192 = (inst_36189) || (inst_36191);
var state_36230__$1 = state_36230;
if(cljs.core.truth_(inst_36192)){
var statearr_36250_36330 = state_36230__$1;
(statearr_36250_36330[(1)] = (35));

} else {
var statearr_36251_36331 = state_36230__$1;
(statearr_36251_36331[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36231 === (40))){
var inst_36205 = (state_36230[(20)]);
var inst_36204 = (state_36230[(2)]);
var inst_36205__$1 = cljs.core.get.call(null,inst_36204,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_36206 = cljs.core.get.call(null,inst_36204,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_36207 = cljs.core.not_empty.call(null,inst_36205__$1);
var state_36230__$1 = (function (){var statearr_36252 = state_36230;
(statearr_36252[(21)] = inst_36206);

(statearr_36252[(20)] = inst_36205__$1);

return statearr_36252;
})();
if(cljs.core.truth_(inst_36207)){
var statearr_36253_36332 = state_36230__$1;
(statearr_36253_36332[(1)] = (41));

} else {
var statearr_36254_36333 = state_36230__$1;
(statearr_36254_36333[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36231 === (33))){
var state_36230__$1 = state_36230;
var statearr_36255_36334 = state_36230__$1;
(statearr_36255_36334[(2)] = false);

(statearr_36255_36334[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36231 === (13))){
var inst_36103 = (state_36230[(22)]);
var inst_36107 = cljs.core.chunk_first.call(null,inst_36103);
var inst_36108 = cljs.core.chunk_rest.call(null,inst_36103);
var inst_36109 = cljs.core.count.call(null,inst_36107);
var inst_36090 = inst_36108;
var inst_36091 = inst_36107;
var inst_36092 = inst_36109;
var inst_36093 = (0);
var state_36230__$1 = (function (){var statearr_36256 = state_36230;
(statearr_36256[(7)] = inst_36092);

(statearr_36256[(8)] = inst_36091);

(statearr_36256[(9)] = inst_36093);

(statearr_36256[(10)] = inst_36090);

return statearr_36256;
})();
var statearr_36257_36335 = state_36230__$1;
(statearr_36257_36335[(2)] = null);

(statearr_36257_36335[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36231 === (22))){
var inst_36147 = (state_36230[(23)]);
var inst_36146 = (state_36230[(24)]);
var inst_36143 = (state_36230[(19)]);
var inst_36151 = (state_36230[(25)]);
var inst_36146__$1 = (state_36230[(2)]);
var inst_36147__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36146__$1);
var inst_36148 = (function (){var all_files = inst_36143;
var res_SINGLEQUOTE_ = inst_36146__$1;
var res = inst_36147__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_36147,inst_36146,inst_36143,inst_36151,inst_36146__$1,inst_36147__$1,state_val_36231,c__33471__auto__,map__36075,map__36075__$1,opts,before_jsload,on_jsload,reload_dependents,map__36076,map__36076__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36072_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__36072_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_36147,inst_36146,inst_36143,inst_36151,inst_36146__$1,inst_36147__$1,state_val_36231,c__33471__auto__,map__36075,map__36075__$1,opts,before_jsload,on_jsload,reload_dependents,map__36076,map__36076__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36149 = cljs.core.filter.call(null,inst_36148,inst_36146__$1);
var inst_36150 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_36151__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36150);
var inst_36152 = cljs.core.not_empty.call(null,inst_36151__$1);
var state_36230__$1 = (function (){var statearr_36258 = state_36230;
(statearr_36258[(23)] = inst_36147__$1);

(statearr_36258[(24)] = inst_36146__$1);

(statearr_36258[(26)] = inst_36149);

(statearr_36258[(25)] = inst_36151__$1);

return statearr_36258;
})();
if(cljs.core.truth_(inst_36152)){
var statearr_36259_36336 = state_36230__$1;
(statearr_36259_36336[(1)] = (23));

} else {
var statearr_36260_36337 = state_36230__$1;
(statearr_36260_36337[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36231 === (36))){
var state_36230__$1 = state_36230;
var statearr_36261_36338 = state_36230__$1;
(statearr_36261_36338[(2)] = false);

(statearr_36261_36338[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36231 === (41))){
var inst_36205 = (state_36230[(20)]);
var inst_36209 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_36210 = cljs.core.map.call(null,inst_36209,inst_36205);
var inst_36211 = cljs.core.pr_str.call(null,inst_36210);
var inst_36212 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("figwheel-no-load meta-data: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36211)].join('');
var inst_36213 = figwheel.client.utils.log.call(null,inst_36212);
var state_36230__$1 = state_36230;
var statearr_36262_36339 = state_36230__$1;
(statearr_36262_36339[(2)] = inst_36213);

(statearr_36262_36339[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36231 === (43))){
var inst_36206 = (state_36230[(21)]);
var inst_36216 = (state_36230[(2)]);
var inst_36217 = cljs.core.not_empty.call(null,inst_36206);
var state_36230__$1 = (function (){var statearr_36263 = state_36230;
(statearr_36263[(27)] = inst_36216);

return statearr_36263;
})();
if(cljs.core.truth_(inst_36217)){
var statearr_36264_36340 = state_36230__$1;
(statearr_36264_36340[(1)] = (44));

} else {
var statearr_36265_36341 = state_36230__$1;
(statearr_36265_36341[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36231 === (29))){
var inst_36147 = (state_36230[(23)]);
var inst_36146 = (state_36230[(24)]);
var inst_36143 = (state_36230[(19)]);
var inst_36149 = (state_36230[(26)]);
var inst_36183 = (state_36230[(16)]);
var inst_36151 = (state_36230[(25)]);
var inst_36179 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_36182 = (function (){var all_files = inst_36143;
var res_SINGLEQUOTE_ = inst_36146;
var res = inst_36147;
var files_not_loaded = inst_36149;
var dependencies_that_loaded = inst_36151;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36147,inst_36146,inst_36143,inst_36149,inst_36183,inst_36151,inst_36179,state_val_36231,c__33471__auto__,map__36075,map__36075__$1,opts,before_jsload,on_jsload,reload_dependents,map__36076,map__36076__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36181){
var map__36266 = p__36181;
var map__36266__$1 = ((((!((map__36266 == null)))?((((map__36266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36266.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36266):map__36266);
var namespace = cljs.core.get.call(null,map__36266__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36147,inst_36146,inst_36143,inst_36149,inst_36183,inst_36151,inst_36179,state_val_36231,c__33471__auto__,map__36075,map__36075__$1,opts,before_jsload,on_jsload,reload_dependents,map__36076,map__36076__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36183__$1 = cljs.core.group_by.call(null,inst_36182,inst_36149);
var inst_36185 = (inst_36183__$1 == null);
var inst_36186 = cljs.core.not.call(null,inst_36185);
var state_36230__$1 = (function (){var statearr_36268 = state_36230;
(statearr_36268[(16)] = inst_36183__$1);

(statearr_36268[(28)] = inst_36179);

return statearr_36268;
})();
if(inst_36186){
var statearr_36269_36342 = state_36230__$1;
(statearr_36269_36342[(1)] = (32));

} else {
var statearr_36270_36343 = state_36230__$1;
(statearr_36270_36343[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36231 === (44))){
var inst_36206 = (state_36230[(21)]);
var inst_36219 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36206);
var inst_36220 = cljs.core.pr_str.call(null,inst_36219);
var inst_36221 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("not required: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36220)].join('');
var inst_36222 = figwheel.client.utils.log.call(null,inst_36221);
var state_36230__$1 = state_36230;
var statearr_36271_36344 = state_36230__$1;
(statearr_36271_36344[(2)] = inst_36222);

(statearr_36271_36344[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36231 === (6))){
var inst_36124 = (state_36230[(2)]);
var state_36230__$1 = state_36230;
var statearr_36272_36345 = state_36230__$1;
(statearr_36272_36345[(2)] = inst_36124);

(statearr_36272_36345[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36231 === (28))){
var inst_36149 = (state_36230[(26)]);
var inst_36176 = (state_36230[(2)]);
var inst_36177 = cljs.core.not_empty.call(null,inst_36149);
var state_36230__$1 = (function (){var statearr_36273 = state_36230;
(statearr_36273[(29)] = inst_36176);

return statearr_36273;
})();
if(cljs.core.truth_(inst_36177)){
var statearr_36274_36346 = state_36230__$1;
(statearr_36274_36346[(1)] = (29));

} else {
var statearr_36275_36347 = state_36230__$1;
(statearr_36275_36347[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36231 === (25))){
var inst_36147 = (state_36230[(23)]);
var inst_36163 = (state_36230[(2)]);
var inst_36164 = cljs.core.not_empty.call(null,inst_36147);
var state_36230__$1 = (function (){var statearr_36276 = state_36230;
(statearr_36276[(30)] = inst_36163);

return statearr_36276;
})();
if(cljs.core.truth_(inst_36164)){
var statearr_36277_36348 = state_36230__$1;
(statearr_36277_36348[(1)] = (26));

} else {
var statearr_36278_36349 = state_36230__$1;
(statearr_36278_36349[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36231 === (34))){
var inst_36199 = (state_36230[(2)]);
var state_36230__$1 = state_36230;
if(cljs.core.truth_(inst_36199)){
var statearr_36279_36350 = state_36230__$1;
(statearr_36279_36350[(1)] = (38));

} else {
var statearr_36280_36351 = state_36230__$1;
(statearr_36280_36351[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36231 === (17))){
var state_36230__$1 = state_36230;
var statearr_36281_36352 = state_36230__$1;
(statearr_36281_36352[(2)] = recompile_dependents);

(statearr_36281_36352[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36231 === (3))){
var state_36230__$1 = state_36230;
var statearr_36282_36353 = state_36230__$1;
(statearr_36282_36353[(2)] = null);

(statearr_36282_36353[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36231 === (12))){
var inst_36120 = (state_36230[(2)]);
var state_36230__$1 = state_36230;
var statearr_36283_36354 = state_36230__$1;
(statearr_36283_36354[(2)] = inst_36120);

(statearr_36283_36354[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36231 === (2))){
var inst_36082 = (state_36230[(13)]);
var inst_36089 = cljs.core.seq.call(null,inst_36082);
var inst_36090 = inst_36089;
var inst_36091 = null;
var inst_36092 = (0);
var inst_36093 = (0);
var state_36230__$1 = (function (){var statearr_36284 = state_36230;
(statearr_36284[(7)] = inst_36092);

(statearr_36284[(8)] = inst_36091);

(statearr_36284[(9)] = inst_36093);

(statearr_36284[(10)] = inst_36090);

return statearr_36284;
})();
var statearr_36285_36355 = state_36230__$1;
(statearr_36285_36355[(2)] = null);

(statearr_36285_36355[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36231 === (23))){
var inst_36147 = (state_36230[(23)]);
var inst_36146 = (state_36230[(24)]);
var inst_36143 = (state_36230[(19)]);
var inst_36149 = (state_36230[(26)]);
var inst_36151 = (state_36230[(25)]);
var inst_36154 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_36156 = (function (){var all_files = inst_36143;
var res_SINGLEQUOTE_ = inst_36146;
var res = inst_36147;
var files_not_loaded = inst_36149;
var dependencies_that_loaded = inst_36151;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36147,inst_36146,inst_36143,inst_36149,inst_36151,inst_36154,state_val_36231,c__33471__auto__,map__36075,map__36075__$1,opts,before_jsload,on_jsload,reload_dependents,map__36076,map__36076__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36155){
var map__36286 = p__36155;
var map__36286__$1 = ((((!((map__36286 == null)))?((((map__36286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36286.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36286):map__36286);
var request_url = cljs.core.get.call(null,map__36286__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36147,inst_36146,inst_36143,inst_36149,inst_36151,inst_36154,state_val_36231,c__33471__auto__,map__36075,map__36075__$1,opts,before_jsload,on_jsload,reload_dependents,map__36076,map__36076__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36157 = cljs.core.reverse.call(null,inst_36151);
var inst_36158 = cljs.core.map.call(null,inst_36156,inst_36157);
var inst_36159 = cljs.core.pr_str.call(null,inst_36158);
var inst_36160 = figwheel.client.utils.log.call(null,inst_36159);
var state_36230__$1 = (function (){var statearr_36288 = state_36230;
(statearr_36288[(31)] = inst_36154);

return statearr_36288;
})();
var statearr_36289_36356 = state_36230__$1;
(statearr_36289_36356[(2)] = inst_36160);

(statearr_36289_36356[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36231 === (35))){
var state_36230__$1 = state_36230;
var statearr_36290_36357 = state_36230__$1;
(statearr_36290_36357[(2)] = true);

(statearr_36290_36357[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36231 === (19))){
var inst_36133 = (state_36230[(12)]);
var inst_36139 = figwheel.client.file_reloading.expand_files.call(null,inst_36133);
var state_36230__$1 = state_36230;
var statearr_36291_36358 = state_36230__$1;
(statearr_36291_36358[(2)] = inst_36139);

(statearr_36291_36358[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36231 === (11))){
var state_36230__$1 = state_36230;
var statearr_36292_36359 = state_36230__$1;
(statearr_36292_36359[(2)] = null);

(statearr_36292_36359[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36231 === (9))){
var inst_36122 = (state_36230[(2)]);
var state_36230__$1 = state_36230;
var statearr_36293_36360 = state_36230__$1;
(statearr_36293_36360[(2)] = inst_36122);

(statearr_36293_36360[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36231 === (5))){
var inst_36092 = (state_36230[(7)]);
var inst_36093 = (state_36230[(9)]);
var inst_36095 = (inst_36093 < inst_36092);
var inst_36096 = inst_36095;
var state_36230__$1 = state_36230;
if(cljs.core.truth_(inst_36096)){
var statearr_36294_36361 = state_36230__$1;
(statearr_36294_36361[(1)] = (7));

} else {
var statearr_36295_36362 = state_36230__$1;
(statearr_36295_36362[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36231 === (14))){
var inst_36103 = (state_36230[(22)]);
var inst_36112 = cljs.core.first.call(null,inst_36103);
var inst_36113 = figwheel.client.file_reloading.eval_body.call(null,inst_36112,opts);
var inst_36114 = cljs.core.next.call(null,inst_36103);
var inst_36090 = inst_36114;
var inst_36091 = null;
var inst_36092 = (0);
var inst_36093 = (0);
var state_36230__$1 = (function (){var statearr_36296 = state_36230;
(statearr_36296[(7)] = inst_36092);

(statearr_36296[(8)] = inst_36091);

(statearr_36296[(32)] = inst_36113);

(statearr_36296[(9)] = inst_36093);

(statearr_36296[(10)] = inst_36090);

return statearr_36296;
})();
var statearr_36297_36363 = state_36230__$1;
(statearr_36297_36363[(2)] = null);

(statearr_36297_36363[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36231 === (45))){
var state_36230__$1 = state_36230;
var statearr_36298_36364 = state_36230__$1;
(statearr_36298_36364[(2)] = null);

(statearr_36298_36364[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36231 === (26))){
var inst_36147 = (state_36230[(23)]);
var inst_36146 = (state_36230[(24)]);
var inst_36143 = (state_36230[(19)]);
var inst_36149 = (state_36230[(26)]);
var inst_36151 = (state_36230[(25)]);
var inst_36166 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_36168 = (function (){var all_files = inst_36143;
var res_SINGLEQUOTE_ = inst_36146;
var res = inst_36147;
var files_not_loaded = inst_36149;
var dependencies_that_loaded = inst_36151;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36147,inst_36146,inst_36143,inst_36149,inst_36151,inst_36166,state_val_36231,c__33471__auto__,map__36075,map__36075__$1,opts,before_jsload,on_jsload,reload_dependents,map__36076,map__36076__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36167){
var map__36299 = p__36167;
var map__36299__$1 = ((((!((map__36299 == null)))?((((map__36299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36299.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36299):map__36299);
var namespace = cljs.core.get.call(null,map__36299__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__36299__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36147,inst_36146,inst_36143,inst_36149,inst_36151,inst_36166,state_val_36231,c__33471__auto__,map__36075,map__36075__$1,opts,before_jsload,on_jsload,reload_dependents,map__36076,map__36076__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36169 = cljs.core.map.call(null,inst_36168,inst_36147);
var inst_36170 = cljs.core.pr_str.call(null,inst_36169);
var inst_36171 = figwheel.client.utils.log.call(null,inst_36170);
var inst_36172 = (function (){var all_files = inst_36143;
var res_SINGLEQUOTE_ = inst_36146;
var res = inst_36147;
var files_not_loaded = inst_36149;
var dependencies_that_loaded = inst_36151;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36147,inst_36146,inst_36143,inst_36149,inst_36151,inst_36166,inst_36168,inst_36169,inst_36170,inst_36171,state_val_36231,c__33471__auto__,map__36075,map__36075__$1,opts,before_jsload,on_jsload,reload_dependents,map__36076,map__36076__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36147,inst_36146,inst_36143,inst_36149,inst_36151,inst_36166,inst_36168,inst_36169,inst_36170,inst_36171,state_val_36231,c__33471__auto__,map__36075,map__36075__$1,opts,before_jsload,on_jsload,reload_dependents,map__36076,map__36076__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36173 = setTimeout(inst_36172,(10));
var state_36230__$1 = (function (){var statearr_36301 = state_36230;
(statearr_36301[(33)] = inst_36166);

(statearr_36301[(34)] = inst_36171);

return statearr_36301;
})();
var statearr_36302_36365 = state_36230__$1;
(statearr_36302_36365[(2)] = inst_36173);

(statearr_36302_36365[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36231 === (16))){
var state_36230__$1 = state_36230;
var statearr_36303_36366 = state_36230__$1;
(statearr_36303_36366[(2)] = reload_dependents);

(statearr_36303_36366[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36231 === (38))){
var inst_36183 = (state_36230[(16)]);
var inst_36201 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36183);
var state_36230__$1 = state_36230;
var statearr_36304_36367 = state_36230__$1;
(statearr_36304_36367[(2)] = inst_36201);

(statearr_36304_36367[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36231 === (30))){
var state_36230__$1 = state_36230;
var statearr_36305_36368 = state_36230__$1;
(statearr_36305_36368[(2)] = null);

(statearr_36305_36368[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36231 === (10))){
var inst_36103 = (state_36230[(22)]);
var inst_36105 = cljs.core.chunked_seq_QMARK_.call(null,inst_36103);
var state_36230__$1 = state_36230;
if(inst_36105){
var statearr_36306_36369 = state_36230__$1;
(statearr_36306_36369[(1)] = (13));

} else {
var statearr_36307_36370 = state_36230__$1;
(statearr_36307_36370[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36231 === (18))){
var inst_36137 = (state_36230[(2)]);
var state_36230__$1 = state_36230;
if(cljs.core.truth_(inst_36137)){
var statearr_36308_36371 = state_36230__$1;
(statearr_36308_36371[(1)] = (19));

} else {
var statearr_36309_36372 = state_36230__$1;
(statearr_36309_36372[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36231 === (42))){
var state_36230__$1 = state_36230;
var statearr_36310_36373 = state_36230__$1;
(statearr_36310_36373[(2)] = null);

(statearr_36310_36373[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36231 === (37))){
var inst_36196 = (state_36230[(2)]);
var state_36230__$1 = state_36230;
var statearr_36311_36374 = state_36230__$1;
(statearr_36311_36374[(2)] = inst_36196);

(statearr_36311_36374[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36231 === (8))){
var inst_36103 = (state_36230[(22)]);
var inst_36090 = (state_36230[(10)]);
var inst_36103__$1 = cljs.core.seq.call(null,inst_36090);
var state_36230__$1 = (function (){var statearr_36312 = state_36230;
(statearr_36312[(22)] = inst_36103__$1);

return statearr_36312;
})();
if(inst_36103__$1){
var statearr_36313_36375 = state_36230__$1;
(statearr_36313_36375[(1)] = (10));

} else {
var statearr_36314_36376 = state_36230__$1;
(statearr_36314_36376[(1)] = (11));

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
});})(c__33471__auto__,map__36075,map__36075__$1,opts,before_jsload,on_jsload,reload_dependents,map__36076,map__36076__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__33383__auto__,c__33471__auto__,map__36075,map__36075__$1,opts,before_jsload,on_jsload,reload_dependents,map__36076,map__36076__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33384__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33384__auto____0 = (function (){
var statearr_36315 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36315[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__33384__auto__);

(statearr_36315[(1)] = (1));

return statearr_36315;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33384__auto____1 = (function (state_36230){
while(true){
var ret_value__33385__auto__ = (function (){try{while(true){
var result__33386__auto__ = switch__33383__auto__.call(null,state_36230);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33386__auto__;
}
break;
}
}catch (e36316){if((e36316 instanceof Object)){
var ex__33387__auto__ = e36316;
var statearr_36317_36377 = state_36230;
(statearr_36317_36377[(5)] = ex__33387__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36230);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36316;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36378 = state_36230;
state_36230 = G__36378;
continue;
} else {
return ret_value__33385__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__33384__auto__ = function(state_36230){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33384__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33384__auto____1.call(this,state_36230);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__33384__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33384__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__33384__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33384__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33384__auto__;
})()
;})(switch__33383__auto__,c__33471__auto__,map__36075,map__36075__$1,opts,before_jsload,on_jsload,reload_dependents,map__36076,map__36076__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__33473__auto__ = (function (){var statearr_36318 = f__33472__auto__.call(null);
(statearr_36318[(6)] = c__33471__auto__);

return statearr_36318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33473__auto__);
});})(c__33471__auto__,map__36075,map__36075__$1,opts,before_jsload,on_jsload,reload_dependents,map__36076,map__36076__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__33471__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),cljs.core.str.cljs$core$IFn$_invoke$arity$1("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__36381,link){
var map__36382 = p__36381;
var map__36382__$1 = ((((!((map__36382 == null)))?((((map__36382.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36382.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36382):map__36382);
var file = cljs.core.get.call(null,map__36382__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__36382,map__36382__$1,file){
return (function (p1__36379_SHARP_,p2__36380_SHARP_){
if(cljs.core._EQ_.call(null,p1__36379_SHARP_,p2__36380_SHARP_)){
return p1__36379_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__36382,map__36382__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__36385){
var map__36386 = p__36385;
var map__36386__$1 = ((((!((map__36386 == null)))?((((map__36386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36386.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36386):map__36386);
var match_length = cljs.core.get.call(null,map__36386__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__36386__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__36384_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__36384_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__36388_SHARP_,p2__36389_SHARP_){
return cljs.core.assoc.call(null,p1__36388_SHARP_,cljs.core.get.call(null,p2__36389_SHARP_,key),p2__36389_SHARP_);
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
var loaded_f_datas_36390 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_36390);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_36390);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__36391,p__36392){
var map__36393 = p__36391;
var map__36393__$1 = ((((!((map__36393 == null)))?((((map__36393.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36393.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36393):map__36393);
var on_cssload = cljs.core.get.call(null,map__36393__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__36394 = p__36392;
var map__36394__$1 = ((((!((map__36394 == null)))?((((map__36394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36394.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36394):map__36394);
var files_msg = map__36394__$1;
var files = cljs.core.get.call(null,map__36394__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1502330255820