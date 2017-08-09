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
var or__36763__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__36763__auto__){
return or__36763__auto__;
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
var or__36763__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__36763__auto__)){
return or__36763__auto__;
} else {
var or__36763__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__36763__auto____$1)){
return or__36763__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__45918_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__45918_SHARP_));
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
var seq__45919 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__45920 = null;
var count__45921 = (0);
var i__45922 = (0);
while(true){
if((i__45922 < count__45921)){
var n = cljs.core._nth.call(null,chunk__45920,i__45922);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__45923 = seq__45919;
var G__45924 = chunk__45920;
var G__45925 = count__45921;
var G__45926 = (i__45922 + (1));
seq__45919 = G__45923;
chunk__45920 = G__45924;
count__45921 = G__45925;
i__45922 = G__45926;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__45919);
if(temp__4657__auto__){
var seq__45919__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45919__$1)){
var c__37583__auto__ = cljs.core.chunk_first.call(null,seq__45919__$1);
var G__45927 = cljs.core.chunk_rest.call(null,seq__45919__$1);
var G__45928 = c__37583__auto__;
var G__45929 = cljs.core.count.call(null,c__37583__auto__);
var G__45930 = (0);
seq__45919 = G__45927;
chunk__45920 = G__45928;
count__45921 = G__45929;
i__45922 = G__45930;
continue;
} else {
var n = cljs.core.first.call(null,seq__45919__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__45931 = cljs.core.next.call(null,seq__45919__$1);
var G__45932 = null;
var G__45933 = (0);
var G__45934 = (0);
seq__45919 = G__45931;
chunk__45920 = G__45932;
count__45921 = G__45933;
i__45922 = G__45934;
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

var seq__45944_45952 = cljs.core.seq.call(null,deps);
var chunk__45945_45953 = null;
var count__45946_45954 = (0);
var i__45947_45955 = (0);
while(true){
if((i__45947_45955 < count__45946_45954)){
var dep_45956 = cljs.core._nth.call(null,chunk__45945_45953,i__45947_45955);
topo_sort_helper_STAR_.call(null,dep_45956,(depth + (1)),state);

var G__45957 = seq__45944_45952;
var G__45958 = chunk__45945_45953;
var G__45959 = count__45946_45954;
var G__45960 = (i__45947_45955 + (1));
seq__45944_45952 = G__45957;
chunk__45945_45953 = G__45958;
count__45946_45954 = G__45959;
i__45947_45955 = G__45960;
continue;
} else {
var temp__4657__auto___45961 = cljs.core.seq.call(null,seq__45944_45952);
if(temp__4657__auto___45961){
var seq__45944_45962__$1 = temp__4657__auto___45961;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45944_45962__$1)){
var c__37583__auto___45963 = cljs.core.chunk_first.call(null,seq__45944_45962__$1);
var G__45964 = cljs.core.chunk_rest.call(null,seq__45944_45962__$1);
var G__45965 = c__37583__auto___45963;
var G__45966 = cljs.core.count.call(null,c__37583__auto___45963);
var G__45967 = (0);
seq__45944_45952 = G__45964;
chunk__45945_45953 = G__45965;
count__45946_45954 = G__45966;
i__45947_45955 = G__45967;
continue;
} else {
var dep_45968 = cljs.core.first.call(null,seq__45944_45962__$1);
topo_sort_helper_STAR_.call(null,dep_45968,(depth + (1)),state);

var G__45969 = cljs.core.next.call(null,seq__45944_45962__$1);
var G__45970 = null;
var G__45971 = (0);
var G__45972 = (0);
seq__45944_45952 = G__45969;
chunk__45945_45953 = G__45970;
count__45946_45954 = G__45971;
i__45947_45955 = G__45972;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__45948){
var vec__45949 = p__45948;
var seq__45950 = cljs.core.seq.call(null,vec__45949);
var first__45951 = cljs.core.first.call(null,seq__45950);
var seq__45950__$1 = cljs.core.next.call(null,seq__45950);
var x = first__45951;
var xs = seq__45950__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__45949,seq__45950,first__45951,seq__45950__$1,x,xs,get_deps__$1){
return (function (p1__45935_SHARP_){
return clojure.set.difference.call(null,p1__45935_SHARP_,x);
});})(vec__45949,seq__45950,first__45951,seq__45950__$1,x,xs,get_deps__$1))
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
var seq__45973 = cljs.core.seq.call(null,provides);
var chunk__45974 = null;
var count__45975 = (0);
var i__45976 = (0);
while(true){
if((i__45976 < count__45975)){
var prov = cljs.core._nth.call(null,chunk__45974,i__45976);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__45977_45985 = cljs.core.seq.call(null,requires);
var chunk__45978_45986 = null;
var count__45979_45987 = (0);
var i__45980_45988 = (0);
while(true){
if((i__45980_45988 < count__45979_45987)){
var req_45989 = cljs.core._nth.call(null,chunk__45978_45986,i__45980_45988);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_45989,prov);

var G__45990 = seq__45977_45985;
var G__45991 = chunk__45978_45986;
var G__45992 = count__45979_45987;
var G__45993 = (i__45980_45988 + (1));
seq__45977_45985 = G__45990;
chunk__45978_45986 = G__45991;
count__45979_45987 = G__45992;
i__45980_45988 = G__45993;
continue;
} else {
var temp__4657__auto___45994 = cljs.core.seq.call(null,seq__45977_45985);
if(temp__4657__auto___45994){
var seq__45977_45995__$1 = temp__4657__auto___45994;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45977_45995__$1)){
var c__37583__auto___45996 = cljs.core.chunk_first.call(null,seq__45977_45995__$1);
var G__45997 = cljs.core.chunk_rest.call(null,seq__45977_45995__$1);
var G__45998 = c__37583__auto___45996;
var G__45999 = cljs.core.count.call(null,c__37583__auto___45996);
var G__46000 = (0);
seq__45977_45985 = G__45997;
chunk__45978_45986 = G__45998;
count__45979_45987 = G__45999;
i__45980_45988 = G__46000;
continue;
} else {
var req_46001 = cljs.core.first.call(null,seq__45977_45995__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_46001,prov);

var G__46002 = cljs.core.next.call(null,seq__45977_45995__$1);
var G__46003 = null;
var G__46004 = (0);
var G__46005 = (0);
seq__45977_45985 = G__46002;
chunk__45978_45986 = G__46003;
count__45979_45987 = G__46004;
i__45980_45988 = G__46005;
continue;
}
} else {
}
}
break;
}

var G__46006 = seq__45973;
var G__46007 = chunk__45974;
var G__46008 = count__45975;
var G__46009 = (i__45976 + (1));
seq__45973 = G__46006;
chunk__45974 = G__46007;
count__45975 = G__46008;
i__45976 = G__46009;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__45973);
if(temp__4657__auto__){
var seq__45973__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45973__$1)){
var c__37583__auto__ = cljs.core.chunk_first.call(null,seq__45973__$1);
var G__46010 = cljs.core.chunk_rest.call(null,seq__45973__$1);
var G__46011 = c__37583__auto__;
var G__46012 = cljs.core.count.call(null,c__37583__auto__);
var G__46013 = (0);
seq__45973 = G__46010;
chunk__45974 = G__46011;
count__45975 = G__46012;
i__45976 = G__46013;
continue;
} else {
var prov = cljs.core.first.call(null,seq__45973__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__45981_46014 = cljs.core.seq.call(null,requires);
var chunk__45982_46015 = null;
var count__45983_46016 = (0);
var i__45984_46017 = (0);
while(true){
if((i__45984_46017 < count__45983_46016)){
var req_46018 = cljs.core._nth.call(null,chunk__45982_46015,i__45984_46017);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_46018,prov);

var G__46019 = seq__45981_46014;
var G__46020 = chunk__45982_46015;
var G__46021 = count__45983_46016;
var G__46022 = (i__45984_46017 + (1));
seq__45981_46014 = G__46019;
chunk__45982_46015 = G__46020;
count__45983_46016 = G__46021;
i__45984_46017 = G__46022;
continue;
} else {
var temp__4657__auto___46023__$1 = cljs.core.seq.call(null,seq__45981_46014);
if(temp__4657__auto___46023__$1){
var seq__45981_46024__$1 = temp__4657__auto___46023__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45981_46024__$1)){
var c__37583__auto___46025 = cljs.core.chunk_first.call(null,seq__45981_46024__$1);
var G__46026 = cljs.core.chunk_rest.call(null,seq__45981_46024__$1);
var G__46027 = c__37583__auto___46025;
var G__46028 = cljs.core.count.call(null,c__37583__auto___46025);
var G__46029 = (0);
seq__45981_46014 = G__46026;
chunk__45982_46015 = G__46027;
count__45983_46016 = G__46028;
i__45984_46017 = G__46029;
continue;
} else {
var req_46030 = cljs.core.first.call(null,seq__45981_46024__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_46030,prov);

var G__46031 = cljs.core.next.call(null,seq__45981_46024__$1);
var G__46032 = null;
var G__46033 = (0);
var G__46034 = (0);
seq__45981_46014 = G__46031;
chunk__45982_46015 = G__46032;
count__45983_46016 = G__46033;
i__45984_46017 = G__46034;
continue;
}
} else {
}
}
break;
}

var G__46035 = cljs.core.next.call(null,seq__45973__$1);
var G__46036 = null;
var G__46037 = (0);
var G__46038 = (0);
seq__45973 = G__46035;
chunk__45974 = G__46036;
count__45975 = G__46037;
i__45976 = G__46038;
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
var seq__46039_46043 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__46040_46044 = null;
var count__46041_46045 = (0);
var i__46042_46046 = (0);
while(true){
if((i__46042_46046 < count__46041_46045)){
var ns_46047 = cljs.core._nth.call(null,chunk__46040_46044,i__46042_46046);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_46047);

var G__46048 = seq__46039_46043;
var G__46049 = chunk__46040_46044;
var G__46050 = count__46041_46045;
var G__46051 = (i__46042_46046 + (1));
seq__46039_46043 = G__46048;
chunk__46040_46044 = G__46049;
count__46041_46045 = G__46050;
i__46042_46046 = G__46051;
continue;
} else {
var temp__4657__auto___46052 = cljs.core.seq.call(null,seq__46039_46043);
if(temp__4657__auto___46052){
var seq__46039_46053__$1 = temp__4657__auto___46052;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46039_46053__$1)){
var c__37583__auto___46054 = cljs.core.chunk_first.call(null,seq__46039_46053__$1);
var G__46055 = cljs.core.chunk_rest.call(null,seq__46039_46053__$1);
var G__46056 = c__37583__auto___46054;
var G__46057 = cljs.core.count.call(null,c__37583__auto___46054);
var G__46058 = (0);
seq__46039_46043 = G__46055;
chunk__46040_46044 = G__46056;
count__46041_46045 = G__46057;
i__46042_46046 = G__46058;
continue;
} else {
var ns_46059 = cljs.core.first.call(null,seq__46039_46053__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_46059);

var G__46060 = cljs.core.next.call(null,seq__46039_46053__$1);
var G__46061 = null;
var G__46062 = (0);
var G__46063 = (0);
seq__46039_46043 = G__46060;
chunk__46040_46044 = G__46061;
count__46041_46045 = G__46062;
i__46042_46046 = G__46063;
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
goog.require_figwheel_backup_ = (function (){var or__36763__auto__ = goog.require__;
if(cljs.core.truth_(or__36763__auto__)){
return or__36763__auto__;
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
var G__46064__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__46064 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46065__i = 0, G__46065__a = new Array(arguments.length -  0);
while (G__46065__i < G__46065__a.length) {G__46065__a[G__46065__i] = arguments[G__46065__i + 0]; ++G__46065__i;}
  args = new cljs.core.IndexedSeq(G__46065__a,0,null);
} 
return G__46064__delegate.call(this,args);};
G__46064.cljs$lang$maxFixedArity = 0;
G__46064.cljs$lang$applyTo = (function (arglist__46066){
var args = cljs.core.seq(arglist__46066);
return G__46064__delegate(args);
});
G__46064.cljs$core$IFn$_invoke$arity$variadic = G__46064__delegate;
return G__46064;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__46067 = cljs.core._EQ_;
var expr__46068 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__46067.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__46068))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__46067,expr__46068){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__46067,expr__46068))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__46067,expr__46068){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e46070){if((e46070 instanceof Error)){
var e = e46070;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e46070;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__46067,expr__46068))
} else {
if(cljs.core.truth_(pred__46067.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__46068))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__46067.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__46068))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__46067.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__46068))){
return ((function (pred__46067,expr__46068){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e46071){if((e46071 instanceof Error)){
var e = e46071;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e46071;

}
}})());
});
;})(pred__46067,expr__46068))
} else {
return ((function (pred__46067,expr__46068){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__46067,expr__46068))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__46072,callback){
var map__46073 = p__46072;
var map__46073__$1 = ((((!((map__46073 == null)))?((((map__46073.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46073.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46073):map__46073);
var file_msg = map__46073__$1;
var request_url = cljs.core.get.call(null,map__46073__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Attempting to load "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__46073,map__46073__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Successfully loaded "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__46073,map__46073__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__39480__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39480__auto__){
return (function (){
var f__39481__auto__ = (function (){var switch__39459__auto__ = ((function (c__39480__auto__){
return (function (state_46097){
var state_val_46098 = (state_46097[(1)]);
if((state_val_46098 === (7))){
var inst_46093 = (state_46097[(2)]);
var state_46097__$1 = state_46097;
var statearr_46099_46116 = state_46097__$1;
(statearr_46099_46116[(2)] = inst_46093);

(statearr_46099_46116[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46098 === (1))){
var state_46097__$1 = state_46097;
var statearr_46100_46117 = state_46097__$1;
(statearr_46100_46117[(2)] = null);

(statearr_46100_46117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46098 === (4))){
var inst_46077 = (state_46097[(7)]);
var inst_46077__$1 = (state_46097[(2)]);
var state_46097__$1 = (function (){var statearr_46101 = state_46097;
(statearr_46101[(7)] = inst_46077__$1);

return statearr_46101;
})();
if(cljs.core.truth_(inst_46077__$1)){
var statearr_46102_46118 = state_46097__$1;
(statearr_46102_46118[(1)] = (5));

} else {
var statearr_46103_46119 = state_46097__$1;
(statearr_46103_46119[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46098 === (6))){
var state_46097__$1 = state_46097;
var statearr_46104_46120 = state_46097__$1;
(statearr_46104_46120[(2)] = null);

(statearr_46104_46120[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46098 === (3))){
var inst_46095 = (state_46097[(2)]);
var state_46097__$1 = state_46097;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46097__$1,inst_46095);
} else {
if((state_val_46098 === (2))){
var state_46097__$1 = state_46097;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46097__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_46098 === (11))){
var inst_46089 = (state_46097[(2)]);
var state_46097__$1 = (function (){var statearr_46105 = state_46097;
(statearr_46105[(8)] = inst_46089);

return statearr_46105;
})();
var statearr_46106_46121 = state_46097__$1;
(statearr_46106_46121[(2)] = null);

(statearr_46106_46121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46098 === (9))){
var inst_46083 = (state_46097[(9)]);
var inst_46081 = (state_46097[(10)]);
var inst_46085 = inst_46083.call(null,inst_46081);
var state_46097__$1 = state_46097;
var statearr_46107_46122 = state_46097__$1;
(statearr_46107_46122[(2)] = inst_46085);

(statearr_46107_46122[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46098 === (5))){
var inst_46077 = (state_46097[(7)]);
var inst_46079 = figwheel.client.file_reloading.blocking_load.call(null,inst_46077);
var state_46097__$1 = state_46097;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46097__$1,(8),inst_46079);
} else {
if((state_val_46098 === (10))){
var inst_46081 = (state_46097[(10)]);
var inst_46087 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_46081);
var state_46097__$1 = state_46097;
var statearr_46108_46123 = state_46097__$1;
(statearr_46108_46123[(2)] = inst_46087);

(statearr_46108_46123[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46098 === (8))){
var inst_46083 = (state_46097[(9)]);
var inst_46077 = (state_46097[(7)]);
var inst_46081 = (state_46097[(2)]);
var inst_46082 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_46083__$1 = cljs.core.get.call(null,inst_46082,inst_46077);
var state_46097__$1 = (function (){var statearr_46109 = state_46097;
(statearr_46109[(9)] = inst_46083__$1);

(statearr_46109[(10)] = inst_46081);

return statearr_46109;
})();
if(cljs.core.truth_(inst_46083__$1)){
var statearr_46110_46124 = state_46097__$1;
(statearr_46110_46124[(1)] = (9));

} else {
var statearr_46111_46125 = state_46097__$1;
(statearr_46111_46125[(1)] = (10));

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
});})(c__39480__auto__))
;
return ((function (switch__39459__auto__,c__39480__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__39460__auto__ = null;
var figwheel$client$file_reloading$state_machine__39460__auto____0 = (function (){
var statearr_46112 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46112[(0)] = figwheel$client$file_reloading$state_machine__39460__auto__);

(statearr_46112[(1)] = (1));

return statearr_46112;
});
var figwheel$client$file_reloading$state_machine__39460__auto____1 = (function (state_46097){
while(true){
var ret_value__39461__auto__ = (function (){try{while(true){
var result__39462__auto__ = switch__39459__auto__.call(null,state_46097);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39462__auto__;
}
break;
}
}catch (e46113){if((e46113 instanceof Object)){
var ex__39463__auto__ = e46113;
var statearr_46114_46126 = state_46097;
(statearr_46114_46126[(5)] = ex__39463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46097);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46113;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46127 = state_46097;
state_46097 = G__46127;
continue;
} else {
return ret_value__39461__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__39460__auto__ = function(state_46097){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__39460__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__39460__auto____1.call(this,state_46097);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__39460__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__39460__auto____0;
figwheel$client$file_reloading$state_machine__39460__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__39460__auto____1;
return figwheel$client$file_reloading$state_machine__39460__auto__;
})()
;})(switch__39459__auto__,c__39480__auto__))
})();
var state__39482__auto__ = (function (){var statearr_46115 = f__39481__auto__.call(null);
(statearr_46115[(6)] = c__39480__auto__);

return statearr_46115;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39482__auto__);
});})(c__39480__auto__))
);

return c__39480__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__46128,callback){
var map__46129 = p__46128;
var map__46129__$1 = ((((!((map__46129 == null)))?((((map__46129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46129.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46129):map__46129);
var file_msg = map__46129__$1;
var namespace = cljs.core.get.call(null,map__46129__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__46129,map__46129__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__46129,map__46129__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__46131){
var map__46132 = p__46131;
var map__46132__$1 = ((((!((map__46132 == null)))?((((map__46132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46132.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46132):map__46132);
var file_msg = map__46132__$1;
var namespace = cljs.core.get.call(null,map__46132__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__46134){
var map__46135 = p__46134;
var map__46135__$1 = ((((!((map__46135 == null)))?((((map__46135.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46135.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46135):map__46135);
var file_msg = map__46135__$1;
var namespace = cljs.core.get.call(null,map__46135__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__36751__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__36751__auto__){
var or__36763__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__36763__auto__)){
return or__36763__auto__;
} else {
var or__36763__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__36763__auto____$1)){
return or__36763__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__36751__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__46137,callback){
var map__46138 = p__46137;
var map__46138__$1 = ((((!((map__46138 == null)))?((((map__46138.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46138.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46138):map__46138);
var file_msg = map__46138__$1;
var request_url = cljs.core.get.call(null,map__46138__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__46138__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__39480__auto___46188 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39480__auto___46188,out){
return (function (){
var f__39481__auto__ = (function (){var switch__39459__auto__ = ((function (c__39480__auto___46188,out){
return (function (state_46173){
var state_val_46174 = (state_46173[(1)]);
if((state_val_46174 === (1))){
var inst_46147 = cljs.core.seq.call(null,files);
var inst_46148 = cljs.core.first.call(null,inst_46147);
var inst_46149 = cljs.core.next.call(null,inst_46147);
var inst_46150 = files;
var state_46173__$1 = (function (){var statearr_46175 = state_46173;
(statearr_46175[(7)] = inst_46148);

(statearr_46175[(8)] = inst_46150);

(statearr_46175[(9)] = inst_46149);

return statearr_46175;
})();
var statearr_46176_46189 = state_46173__$1;
(statearr_46176_46189[(2)] = null);

(statearr_46176_46189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46174 === (2))){
var inst_46150 = (state_46173[(8)]);
var inst_46156 = (state_46173[(10)]);
var inst_46155 = cljs.core.seq.call(null,inst_46150);
var inst_46156__$1 = cljs.core.first.call(null,inst_46155);
var inst_46157 = cljs.core.next.call(null,inst_46155);
var inst_46158 = (inst_46156__$1 == null);
var inst_46159 = cljs.core.not.call(null,inst_46158);
var state_46173__$1 = (function (){var statearr_46177 = state_46173;
(statearr_46177[(11)] = inst_46157);

(statearr_46177[(10)] = inst_46156__$1);

return statearr_46177;
})();
if(inst_46159){
var statearr_46178_46190 = state_46173__$1;
(statearr_46178_46190[(1)] = (4));

} else {
var statearr_46179_46191 = state_46173__$1;
(statearr_46179_46191[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46174 === (3))){
var inst_46171 = (state_46173[(2)]);
var state_46173__$1 = state_46173;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46173__$1,inst_46171);
} else {
if((state_val_46174 === (4))){
var inst_46156 = (state_46173[(10)]);
var inst_46161 = figwheel.client.file_reloading.reload_js_file.call(null,inst_46156);
var state_46173__$1 = state_46173;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46173__$1,(7),inst_46161);
} else {
if((state_val_46174 === (5))){
var inst_46167 = cljs.core.async.close_BANG_.call(null,out);
var state_46173__$1 = state_46173;
var statearr_46180_46192 = state_46173__$1;
(statearr_46180_46192[(2)] = inst_46167);

(statearr_46180_46192[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46174 === (6))){
var inst_46169 = (state_46173[(2)]);
var state_46173__$1 = state_46173;
var statearr_46181_46193 = state_46173__$1;
(statearr_46181_46193[(2)] = inst_46169);

(statearr_46181_46193[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46174 === (7))){
var inst_46157 = (state_46173[(11)]);
var inst_46163 = (state_46173[(2)]);
var inst_46164 = cljs.core.async.put_BANG_.call(null,out,inst_46163);
var inst_46150 = inst_46157;
var state_46173__$1 = (function (){var statearr_46182 = state_46173;
(statearr_46182[(12)] = inst_46164);

(statearr_46182[(8)] = inst_46150);

return statearr_46182;
})();
var statearr_46183_46194 = state_46173__$1;
(statearr_46183_46194[(2)] = null);

(statearr_46183_46194[(1)] = (2));


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
});})(c__39480__auto___46188,out))
;
return ((function (switch__39459__auto__,c__39480__auto___46188,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__39460__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__39460__auto____0 = (function (){
var statearr_46184 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46184[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__39460__auto__);

(statearr_46184[(1)] = (1));

return statearr_46184;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__39460__auto____1 = (function (state_46173){
while(true){
var ret_value__39461__auto__ = (function (){try{while(true){
var result__39462__auto__ = switch__39459__auto__.call(null,state_46173);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39462__auto__;
}
break;
}
}catch (e46185){if((e46185 instanceof Object)){
var ex__39463__auto__ = e46185;
var statearr_46186_46195 = state_46173;
(statearr_46186_46195[(5)] = ex__39463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46173);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46185;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46196 = state_46173;
state_46173 = G__46196;
continue;
} else {
return ret_value__39461__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__39460__auto__ = function(state_46173){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__39460__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__39460__auto____1.call(this,state_46173);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__39460__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__39460__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__39460__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__39460__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__39460__auto__;
})()
;})(switch__39459__auto__,c__39480__auto___46188,out))
})();
var state__39482__auto__ = (function (){var statearr_46187 = f__39481__auto__.call(null);
(statearr_46187[(6)] = c__39480__auto___46188);

return statearr_46187;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39482__auto__);
});})(c__39480__auto___46188,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__46197,opts){
var map__46198 = p__46197;
var map__46198__$1 = ((((!((map__46198 == null)))?((((map__46198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46198.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46198):map__46198);
var eval_body = cljs.core.get.call(null,map__46198__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__46198__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__36751__auto__ = eval_body;
if(cljs.core.truth_(and__36751__auto__)){
return typeof eval_body === 'string';
} else {
return and__36751__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Evaling file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e46200){var e = e46200;
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
return (function (p1__46201_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__46201_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__46202){
var vec__46203 = p__46202;
var k = cljs.core.nth.call(null,vec__46203,(0),null);
var v = cljs.core.nth.call(null,vec__46203,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__46206){
var vec__46207 = p__46206;
var k = cljs.core.nth.call(null,vec__46207,(0),null);
var v = cljs.core.nth.call(null,vec__46207,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__46213,p__46214){
var map__46215 = p__46213;
var map__46215__$1 = ((((!((map__46215 == null)))?((((map__46215.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46215.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46215):map__46215);
var opts = map__46215__$1;
var before_jsload = cljs.core.get.call(null,map__46215__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__46215__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__46215__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__46216 = p__46214;
var map__46216__$1 = ((((!((map__46216 == null)))?((((map__46216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46216.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46216):map__46216);
var msg = map__46216__$1;
var files = cljs.core.get.call(null,map__46216__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__46216__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__46216__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__39480__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39480__auto__,map__46215,map__46215__$1,opts,before_jsload,on_jsload,reload_dependents,map__46216,map__46216__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__39481__auto__ = (function (){var switch__39459__auto__ = ((function (c__39480__auto__,map__46215,map__46215__$1,opts,before_jsload,on_jsload,reload_dependents,map__46216,map__46216__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_46370){
var state_val_46371 = (state_46370[(1)]);
if((state_val_46371 === (7))){
var inst_46230 = (state_46370[(7)]);
var inst_46231 = (state_46370[(8)]);
var inst_46232 = (state_46370[(9)]);
var inst_46233 = (state_46370[(10)]);
var inst_46238 = cljs.core._nth.call(null,inst_46231,inst_46233);
var inst_46239 = figwheel.client.file_reloading.eval_body.call(null,inst_46238,opts);
var inst_46240 = (inst_46233 + (1));
var tmp46372 = inst_46230;
var tmp46373 = inst_46231;
var tmp46374 = inst_46232;
var inst_46230__$1 = tmp46372;
var inst_46231__$1 = tmp46373;
var inst_46232__$1 = tmp46374;
var inst_46233__$1 = inst_46240;
var state_46370__$1 = (function (){var statearr_46375 = state_46370;
(statearr_46375[(7)] = inst_46230__$1);

(statearr_46375[(8)] = inst_46231__$1);

(statearr_46375[(9)] = inst_46232__$1);

(statearr_46375[(10)] = inst_46233__$1);

(statearr_46375[(11)] = inst_46239);

return statearr_46375;
})();
var statearr_46376_46459 = state_46370__$1;
(statearr_46376_46459[(2)] = null);

(statearr_46376_46459[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46371 === (20))){
var inst_46273 = (state_46370[(12)]);
var inst_46281 = figwheel.client.file_reloading.sort_files.call(null,inst_46273);
var state_46370__$1 = state_46370;
var statearr_46377_46460 = state_46370__$1;
(statearr_46377_46460[(2)] = inst_46281);

(statearr_46377_46460[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46371 === (27))){
var state_46370__$1 = state_46370;
var statearr_46378_46461 = state_46370__$1;
(statearr_46378_46461[(2)] = null);

(statearr_46378_46461[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46371 === (1))){
var inst_46222 = (state_46370[(13)]);
var inst_46219 = before_jsload.call(null,files);
var inst_46220 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_46221 = (function (){return ((function (inst_46222,inst_46219,inst_46220,state_val_46371,c__39480__auto__,map__46215,map__46215__$1,opts,before_jsload,on_jsload,reload_dependents,map__46216,map__46216__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__46210_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__46210_SHARP_);
});
;})(inst_46222,inst_46219,inst_46220,state_val_46371,c__39480__auto__,map__46215,map__46215__$1,opts,before_jsload,on_jsload,reload_dependents,map__46216,map__46216__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_46222__$1 = cljs.core.filter.call(null,inst_46221,files);
var inst_46223 = cljs.core.not_empty.call(null,inst_46222__$1);
var state_46370__$1 = (function (){var statearr_46379 = state_46370;
(statearr_46379[(13)] = inst_46222__$1);

(statearr_46379[(14)] = inst_46220);

(statearr_46379[(15)] = inst_46219);

return statearr_46379;
})();
if(cljs.core.truth_(inst_46223)){
var statearr_46380_46462 = state_46370__$1;
(statearr_46380_46462[(1)] = (2));

} else {
var statearr_46381_46463 = state_46370__$1;
(statearr_46381_46463[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46371 === (24))){
var state_46370__$1 = state_46370;
var statearr_46382_46464 = state_46370__$1;
(statearr_46382_46464[(2)] = null);

(statearr_46382_46464[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46371 === (39))){
var inst_46323 = (state_46370[(16)]);
var state_46370__$1 = state_46370;
var statearr_46383_46465 = state_46370__$1;
(statearr_46383_46465[(2)] = inst_46323);

(statearr_46383_46465[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46371 === (46))){
var inst_46365 = (state_46370[(2)]);
var state_46370__$1 = state_46370;
var statearr_46384_46466 = state_46370__$1;
(statearr_46384_46466[(2)] = inst_46365);

(statearr_46384_46466[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46371 === (4))){
var inst_46267 = (state_46370[(2)]);
var inst_46268 = cljs.core.List.EMPTY;
var inst_46269 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_46268);
var inst_46270 = (function (){return ((function (inst_46267,inst_46268,inst_46269,state_val_46371,c__39480__auto__,map__46215,map__46215__$1,opts,before_jsload,on_jsload,reload_dependents,map__46216,map__46216__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__46211_SHARP_){
var and__36751__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__46211_SHARP_);
if(cljs.core.truth_(and__36751__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__46211_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__46211_SHARP_)));
} else {
return and__36751__auto__;
}
});
;})(inst_46267,inst_46268,inst_46269,state_val_46371,c__39480__auto__,map__46215,map__46215__$1,opts,before_jsload,on_jsload,reload_dependents,map__46216,map__46216__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_46271 = cljs.core.filter.call(null,inst_46270,files);
var inst_46272 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_46273 = cljs.core.concat.call(null,inst_46271,inst_46272);
var state_46370__$1 = (function (){var statearr_46385 = state_46370;
(statearr_46385[(12)] = inst_46273);

(statearr_46385[(17)] = inst_46269);

(statearr_46385[(18)] = inst_46267);

return statearr_46385;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_46386_46467 = state_46370__$1;
(statearr_46386_46467[(1)] = (16));

} else {
var statearr_46387_46468 = state_46370__$1;
(statearr_46387_46468[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46371 === (15))){
var inst_46257 = (state_46370[(2)]);
var state_46370__$1 = state_46370;
var statearr_46388_46469 = state_46370__$1;
(statearr_46388_46469[(2)] = inst_46257);

(statearr_46388_46469[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46371 === (21))){
var inst_46283 = (state_46370[(19)]);
var inst_46283__$1 = (state_46370[(2)]);
var inst_46284 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_46283__$1);
var state_46370__$1 = (function (){var statearr_46389 = state_46370;
(statearr_46389[(19)] = inst_46283__$1);

return statearr_46389;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46370__$1,(22),inst_46284);
} else {
if((state_val_46371 === (31))){
var inst_46368 = (state_46370[(2)]);
var state_46370__$1 = state_46370;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46370__$1,inst_46368);
} else {
if((state_val_46371 === (32))){
var inst_46323 = (state_46370[(16)]);
var inst_46328 = inst_46323.cljs$lang$protocol_mask$partition0$;
var inst_46329 = (inst_46328 & (64));
var inst_46330 = inst_46323.cljs$core$ISeq$;
var inst_46331 = (cljs.core.PROTOCOL_SENTINEL === inst_46330);
var inst_46332 = (inst_46329) || (inst_46331);
var state_46370__$1 = state_46370;
if(cljs.core.truth_(inst_46332)){
var statearr_46390_46470 = state_46370__$1;
(statearr_46390_46470[(1)] = (35));

} else {
var statearr_46391_46471 = state_46370__$1;
(statearr_46391_46471[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46371 === (40))){
var inst_46345 = (state_46370[(20)]);
var inst_46344 = (state_46370[(2)]);
var inst_46345__$1 = cljs.core.get.call(null,inst_46344,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_46346 = cljs.core.get.call(null,inst_46344,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_46347 = cljs.core.not_empty.call(null,inst_46345__$1);
var state_46370__$1 = (function (){var statearr_46392 = state_46370;
(statearr_46392[(20)] = inst_46345__$1);

(statearr_46392[(21)] = inst_46346);

return statearr_46392;
})();
if(cljs.core.truth_(inst_46347)){
var statearr_46393_46472 = state_46370__$1;
(statearr_46393_46472[(1)] = (41));

} else {
var statearr_46394_46473 = state_46370__$1;
(statearr_46394_46473[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46371 === (33))){
var state_46370__$1 = state_46370;
var statearr_46395_46474 = state_46370__$1;
(statearr_46395_46474[(2)] = false);

(statearr_46395_46474[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46371 === (13))){
var inst_46243 = (state_46370[(22)]);
var inst_46247 = cljs.core.chunk_first.call(null,inst_46243);
var inst_46248 = cljs.core.chunk_rest.call(null,inst_46243);
var inst_46249 = cljs.core.count.call(null,inst_46247);
var inst_46230 = inst_46248;
var inst_46231 = inst_46247;
var inst_46232 = inst_46249;
var inst_46233 = (0);
var state_46370__$1 = (function (){var statearr_46396 = state_46370;
(statearr_46396[(7)] = inst_46230);

(statearr_46396[(8)] = inst_46231);

(statearr_46396[(9)] = inst_46232);

(statearr_46396[(10)] = inst_46233);

return statearr_46396;
})();
var statearr_46397_46475 = state_46370__$1;
(statearr_46397_46475[(2)] = null);

(statearr_46397_46475[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46371 === (22))){
var inst_46283 = (state_46370[(19)]);
var inst_46291 = (state_46370[(23)]);
var inst_46287 = (state_46370[(24)]);
var inst_46286 = (state_46370[(25)]);
var inst_46286__$1 = (state_46370[(2)]);
var inst_46287__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_46286__$1);
var inst_46288 = (function (){var all_files = inst_46283;
var res_SINGLEQUOTE_ = inst_46286__$1;
var res = inst_46287__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_46283,inst_46291,inst_46287,inst_46286,inst_46286__$1,inst_46287__$1,state_val_46371,c__39480__auto__,map__46215,map__46215__$1,opts,before_jsload,on_jsload,reload_dependents,map__46216,map__46216__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__46212_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__46212_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_46283,inst_46291,inst_46287,inst_46286,inst_46286__$1,inst_46287__$1,state_val_46371,c__39480__auto__,map__46215,map__46215__$1,opts,before_jsload,on_jsload,reload_dependents,map__46216,map__46216__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_46289 = cljs.core.filter.call(null,inst_46288,inst_46286__$1);
var inst_46290 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_46291__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_46290);
var inst_46292 = cljs.core.not_empty.call(null,inst_46291__$1);
var state_46370__$1 = (function (){var statearr_46398 = state_46370;
(statearr_46398[(23)] = inst_46291__$1);

(statearr_46398[(26)] = inst_46289);

(statearr_46398[(24)] = inst_46287__$1);

(statearr_46398[(25)] = inst_46286__$1);

return statearr_46398;
})();
if(cljs.core.truth_(inst_46292)){
var statearr_46399_46476 = state_46370__$1;
(statearr_46399_46476[(1)] = (23));

} else {
var statearr_46400_46477 = state_46370__$1;
(statearr_46400_46477[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46371 === (36))){
var state_46370__$1 = state_46370;
var statearr_46401_46478 = state_46370__$1;
(statearr_46401_46478[(2)] = false);

(statearr_46401_46478[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46371 === (41))){
var inst_46345 = (state_46370[(20)]);
var inst_46349 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_46350 = cljs.core.map.call(null,inst_46349,inst_46345);
var inst_46351 = cljs.core.pr_str.call(null,inst_46350);
var inst_46352 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("figwheel-no-load meta-data: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_46351)].join('');
var inst_46353 = figwheel.client.utils.log.call(null,inst_46352);
var state_46370__$1 = state_46370;
var statearr_46402_46479 = state_46370__$1;
(statearr_46402_46479[(2)] = inst_46353);

(statearr_46402_46479[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46371 === (43))){
var inst_46346 = (state_46370[(21)]);
var inst_46356 = (state_46370[(2)]);
var inst_46357 = cljs.core.not_empty.call(null,inst_46346);
var state_46370__$1 = (function (){var statearr_46403 = state_46370;
(statearr_46403[(27)] = inst_46356);

return statearr_46403;
})();
if(cljs.core.truth_(inst_46357)){
var statearr_46404_46480 = state_46370__$1;
(statearr_46404_46480[(1)] = (44));

} else {
var statearr_46405_46481 = state_46370__$1;
(statearr_46405_46481[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46371 === (29))){
var inst_46283 = (state_46370[(19)]);
var inst_46323 = (state_46370[(16)]);
var inst_46291 = (state_46370[(23)]);
var inst_46289 = (state_46370[(26)]);
var inst_46287 = (state_46370[(24)]);
var inst_46286 = (state_46370[(25)]);
var inst_46319 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_46322 = (function (){var all_files = inst_46283;
var res_SINGLEQUOTE_ = inst_46286;
var res = inst_46287;
var files_not_loaded = inst_46289;
var dependencies_that_loaded = inst_46291;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46283,inst_46323,inst_46291,inst_46289,inst_46287,inst_46286,inst_46319,state_val_46371,c__39480__auto__,map__46215,map__46215__$1,opts,before_jsload,on_jsload,reload_dependents,map__46216,map__46216__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__46321){
var map__46406 = p__46321;
var map__46406__$1 = ((((!((map__46406 == null)))?((((map__46406.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46406.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46406):map__46406);
var namespace = cljs.core.get.call(null,map__46406__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46283,inst_46323,inst_46291,inst_46289,inst_46287,inst_46286,inst_46319,state_val_46371,c__39480__auto__,map__46215,map__46215__$1,opts,before_jsload,on_jsload,reload_dependents,map__46216,map__46216__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_46323__$1 = cljs.core.group_by.call(null,inst_46322,inst_46289);
var inst_46325 = (inst_46323__$1 == null);
var inst_46326 = cljs.core.not.call(null,inst_46325);
var state_46370__$1 = (function (){var statearr_46408 = state_46370;
(statearr_46408[(16)] = inst_46323__$1);

(statearr_46408[(28)] = inst_46319);

return statearr_46408;
})();
if(inst_46326){
var statearr_46409_46482 = state_46370__$1;
(statearr_46409_46482[(1)] = (32));

} else {
var statearr_46410_46483 = state_46370__$1;
(statearr_46410_46483[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46371 === (44))){
var inst_46346 = (state_46370[(21)]);
var inst_46359 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_46346);
var inst_46360 = cljs.core.pr_str.call(null,inst_46359);
var inst_46361 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("not required: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_46360)].join('');
var inst_46362 = figwheel.client.utils.log.call(null,inst_46361);
var state_46370__$1 = state_46370;
var statearr_46411_46484 = state_46370__$1;
(statearr_46411_46484[(2)] = inst_46362);

(statearr_46411_46484[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46371 === (6))){
var inst_46264 = (state_46370[(2)]);
var state_46370__$1 = state_46370;
var statearr_46412_46485 = state_46370__$1;
(statearr_46412_46485[(2)] = inst_46264);

(statearr_46412_46485[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46371 === (28))){
var inst_46289 = (state_46370[(26)]);
var inst_46316 = (state_46370[(2)]);
var inst_46317 = cljs.core.not_empty.call(null,inst_46289);
var state_46370__$1 = (function (){var statearr_46413 = state_46370;
(statearr_46413[(29)] = inst_46316);

return statearr_46413;
})();
if(cljs.core.truth_(inst_46317)){
var statearr_46414_46486 = state_46370__$1;
(statearr_46414_46486[(1)] = (29));

} else {
var statearr_46415_46487 = state_46370__$1;
(statearr_46415_46487[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46371 === (25))){
var inst_46287 = (state_46370[(24)]);
var inst_46303 = (state_46370[(2)]);
var inst_46304 = cljs.core.not_empty.call(null,inst_46287);
var state_46370__$1 = (function (){var statearr_46416 = state_46370;
(statearr_46416[(30)] = inst_46303);

return statearr_46416;
})();
if(cljs.core.truth_(inst_46304)){
var statearr_46417_46488 = state_46370__$1;
(statearr_46417_46488[(1)] = (26));

} else {
var statearr_46418_46489 = state_46370__$1;
(statearr_46418_46489[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46371 === (34))){
var inst_46339 = (state_46370[(2)]);
var state_46370__$1 = state_46370;
if(cljs.core.truth_(inst_46339)){
var statearr_46419_46490 = state_46370__$1;
(statearr_46419_46490[(1)] = (38));

} else {
var statearr_46420_46491 = state_46370__$1;
(statearr_46420_46491[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46371 === (17))){
var state_46370__$1 = state_46370;
var statearr_46421_46492 = state_46370__$1;
(statearr_46421_46492[(2)] = recompile_dependents);

(statearr_46421_46492[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46371 === (3))){
var state_46370__$1 = state_46370;
var statearr_46422_46493 = state_46370__$1;
(statearr_46422_46493[(2)] = null);

(statearr_46422_46493[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46371 === (12))){
var inst_46260 = (state_46370[(2)]);
var state_46370__$1 = state_46370;
var statearr_46423_46494 = state_46370__$1;
(statearr_46423_46494[(2)] = inst_46260);

(statearr_46423_46494[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46371 === (2))){
var inst_46222 = (state_46370[(13)]);
var inst_46229 = cljs.core.seq.call(null,inst_46222);
var inst_46230 = inst_46229;
var inst_46231 = null;
var inst_46232 = (0);
var inst_46233 = (0);
var state_46370__$1 = (function (){var statearr_46424 = state_46370;
(statearr_46424[(7)] = inst_46230);

(statearr_46424[(8)] = inst_46231);

(statearr_46424[(9)] = inst_46232);

(statearr_46424[(10)] = inst_46233);

return statearr_46424;
})();
var statearr_46425_46495 = state_46370__$1;
(statearr_46425_46495[(2)] = null);

(statearr_46425_46495[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46371 === (23))){
var inst_46283 = (state_46370[(19)]);
var inst_46291 = (state_46370[(23)]);
var inst_46289 = (state_46370[(26)]);
var inst_46287 = (state_46370[(24)]);
var inst_46286 = (state_46370[(25)]);
var inst_46294 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_46296 = (function (){var all_files = inst_46283;
var res_SINGLEQUOTE_ = inst_46286;
var res = inst_46287;
var files_not_loaded = inst_46289;
var dependencies_that_loaded = inst_46291;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46283,inst_46291,inst_46289,inst_46287,inst_46286,inst_46294,state_val_46371,c__39480__auto__,map__46215,map__46215__$1,opts,before_jsload,on_jsload,reload_dependents,map__46216,map__46216__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__46295){
var map__46426 = p__46295;
var map__46426__$1 = ((((!((map__46426 == null)))?((((map__46426.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46426.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46426):map__46426);
var request_url = cljs.core.get.call(null,map__46426__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46283,inst_46291,inst_46289,inst_46287,inst_46286,inst_46294,state_val_46371,c__39480__auto__,map__46215,map__46215__$1,opts,before_jsload,on_jsload,reload_dependents,map__46216,map__46216__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_46297 = cljs.core.reverse.call(null,inst_46291);
var inst_46298 = cljs.core.map.call(null,inst_46296,inst_46297);
var inst_46299 = cljs.core.pr_str.call(null,inst_46298);
var inst_46300 = figwheel.client.utils.log.call(null,inst_46299);
var state_46370__$1 = (function (){var statearr_46428 = state_46370;
(statearr_46428[(31)] = inst_46294);

return statearr_46428;
})();
var statearr_46429_46496 = state_46370__$1;
(statearr_46429_46496[(2)] = inst_46300);

(statearr_46429_46496[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46371 === (35))){
var state_46370__$1 = state_46370;
var statearr_46430_46497 = state_46370__$1;
(statearr_46430_46497[(2)] = true);

(statearr_46430_46497[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46371 === (19))){
var inst_46273 = (state_46370[(12)]);
var inst_46279 = figwheel.client.file_reloading.expand_files.call(null,inst_46273);
var state_46370__$1 = state_46370;
var statearr_46431_46498 = state_46370__$1;
(statearr_46431_46498[(2)] = inst_46279);

(statearr_46431_46498[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46371 === (11))){
var state_46370__$1 = state_46370;
var statearr_46432_46499 = state_46370__$1;
(statearr_46432_46499[(2)] = null);

(statearr_46432_46499[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46371 === (9))){
var inst_46262 = (state_46370[(2)]);
var state_46370__$1 = state_46370;
var statearr_46433_46500 = state_46370__$1;
(statearr_46433_46500[(2)] = inst_46262);

(statearr_46433_46500[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46371 === (5))){
var inst_46232 = (state_46370[(9)]);
var inst_46233 = (state_46370[(10)]);
var inst_46235 = (inst_46233 < inst_46232);
var inst_46236 = inst_46235;
var state_46370__$1 = state_46370;
if(cljs.core.truth_(inst_46236)){
var statearr_46434_46501 = state_46370__$1;
(statearr_46434_46501[(1)] = (7));

} else {
var statearr_46435_46502 = state_46370__$1;
(statearr_46435_46502[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46371 === (14))){
var inst_46243 = (state_46370[(22)]);
var inst_46252 = cljs.core.first.call(null,inst_46243);
var inst_46253 = figwheel.client.file_reloading.eval_body.call(null,inst_46252,opts);
var inst_46254 = cljs.core.next.call(null,inst_46243);
var inst_46230 = inst_46254;
var inst_46231 = null;
var inst_46232 = (0);
var inst_46233 = (0);
var state_46370__$1 = (function (){var statearr_46436 = state_46370;
(statearr_46436[(32)] = inst_46253);

(statearr_46436[(7)] = inst_46230);

(statearr_46436[(8)] = inst_46231);

(statearr_46436[(9)] = inst_46232);

(statearr_46436[(10)] = inst_46233);

return statearr_46436;
})();
var statearr_46437_46503 = state_46370__$1;
(statearr_46437_46503[(2)] = null);

(statearr_46437_46503[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46371 === (45))){
var state_46370__$1 = state_46370;
var statearr_46438_46504 = state_46370__$1;
(statearr_46438_46504[(2)] = null);

(statearr_46438_46504[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46371 === (26))){
var inst_46283 = (state_46370[(19)]);
var inst_46291 = (state_46370[(23)]);
var inst_46289 = (state_46370[(26)]);
var inst_46287 = (state_46370[(24)]);
var inst_46286 = (state_46370[(25)]);
var inst_46306 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_46308 = (function (){var all_files = inst_46283;
var res_SINGLEQUOTE_ = inst_46286;
var res = inst_46287;
var files_not_loaded = inst_46289;
var dependencies_that_loaded = inst_46291;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46283,inst_46291,inst_46289,inst_46287,inst_46286,inst_46306,state_val_46371,c__39480__auto__,map__46215,map__46215__$1,opts,before_jsload,on_jsload,reload_dependents,map__46216,map__46216__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__46307){
var map__46439 = p__46307;
var map__46439__$1 = ((((!((map__46439 == null)))?((((map__46439.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46439.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46439):map__46439);
var namespace = cljs.core.get.call(null,map__46439__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__46439__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46283,inst_46291,inst_46289,inst_46287,inst_46286,inst_46306,state_val_46371,c__39480__auto__,map__46215,map__46215__$1,opts,before_jsload,on_jsload,reload_dependents,map__46216,map__46216__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_46309 = cljs.core.map.call(null,inst_46308,inst_46287);
var inst_46310 = cljs.core.pr_str.call(null,inst_46309);
var inst_46311 = figwheel.client.utils.log.call(null,inst_46310);
var inst_46312 = (function (){var all_files = inst_46283;
var res_SINGLEQUOTE_ = inst_46286;
var res = inst_46287;
var files_not_loaded = inst_46289;
var dependencies_that_loaded = inst_46291;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46283,inst_46291,inst_46289,inst_46287,inst_46286,inst_46306,inst_46308,inst_46309,inst_46310,inst_46311,state_val_46371,c__39480__auto__,map__46215,map__46215__$1,opts,before_jsload,on_jsload,reload_dependents,map__46216,map__46216__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46283,inst_46291,inst_46289,inst_46287,inst_46286,inst_46306,inst_46308,inst_46309,inst_46310,inst_46311,state_val_46371,c__39480__auto__,map__46215,map__46215__$1,opts,before_jsload,on_jsload,reload_dependents,map__46216,map__46216__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_46313 = setTimeout(inst_46312,(10));
var state_46370__$1 = (function (){var statearr_46441 = state_46370;
(statearr_46441[(33)] = inst_46311);

(statearr_46441[(34)] = inst_46306);

return statearr_46441;
})();
var statearr_46442_46505 = state_46370__$1;
(statearr_46442_46505[(2)] = inst_46313);

(statearr_46442_46505[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46371 === (16))){
var state_46370__$1 = state_46370;
var statearr_46443_46506 = state_46370__$1;
(statearr_46443_46506[(2)] = reload_dependents);

(statearr_46443_46506[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46371 === (38))){
var inst_46323 = (state_46370[(16)]);
var inst_46341 = cljs.core.apply.call(null,cljs.core.hash_map,inst_46323);
var state_46370__$1 = state_46370;
var statearr_46444_46507 = state_46370__$1;
(statearr_46444_46507[(2)] = inst_46341);

(statearr_46444_46507[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46371 === (30))){
var state_46370__$1 = state_46370;
var statearr_46445_46508 = state_46370__$1;
(statearr_46445_46508[(2)] = null);

(statearr_46445_46508[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46371 === (10))){
var inst_46243 = (state_46370[(22)]);
var inst_46245 = cljs.core.chunked_seq_QMARK_.call(null,inst_46243);
var state_46370__$1 = state_46370;
if(inst_46245){
var statearr_46446_46509 = state_46370__$1;
(statearr_46446_46509[(1)] = (13));

} else {
var statearr_46447_46510 = state_46370__$1;
(statearr_46447_46510[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46371 === (18))){
var inst_46277 = (state_46370[(2)]);
var state_46370__$1 = state_46370;
if(cljs.core.truth_(inst_46277)){
var statearr_46448_46511 = state_46370__$1;
(statearr_46448_46511[(1)] = (19));

} else {
var statearr_46449_46512 = state_46370__$1;
(statearr_46449_46512[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46371 === (42))){
var state_46370__$1 = state_46370;
var statearr_46450_46513 = state_46370__$1;
(statearr_46450_46513[(2)] = null);

(statearr_46450_46513[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46371 === (37))){
var inst_46336 = (state_46370[(2)]);
var state_46370__$1 = state_46370;
var statearr_46451_46514 = state_46370__$1;
(statearr_46451_46514[(2)] = inst_46336);

(statearr_46451_46514[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46371 === (8))){
var inst_46230 = (state_46370[(7)]);
var inst_46243 = (state_46370[(22)]);
var inst_46243__$1 = cljs.core.seq.call(null,inst_46230);
var state_46370__$1 = (function (){var statearr_46452 = state_46370;
(statearr_46452[(22)] = inst_46243__$1);

return statearr_46452;
})();
if(inst_46243__$1){
var statearr_46453_46515 = state_46370__$1;
(statearr_46453_46515[(1)] = (10));

} else {
var statearr_46454_46516 = state_46370__$1;
(statearr_46454_46516[(1)] = (11));

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
});})(c__39480__auto__,map__46215,map__46215__$1,opts,before_jsload,on_jsload,reload_dependents,map__46216,map__46216__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__39459__auto__,c__39480__auto__,map__46215,map__46215__$1,opts,before_jsload,on_jsload,reload_dependents,map__46216,map__46216__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__39460__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__39460__auto____0 = (function (){
var statearr_46455 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46455[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__39460__auto__);

(statearr_46455[(1)] = (1));

return statearr_46455;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__39460__auto____1 = (function (state_46370){
while(true){
var ret_value__39461__auto__ = (function (){try{while(true){
var result__39462__auto__ = switch__39459__auto__.call(null,state_46370);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39462__auto__;
}
break;
}
}catch (e46456){if((e46456 instanceof Object)){
var ex__39463__auto__ = e46456;
var statearr_46457_46517 = state_46370;
(statearr_46457_46517[(5)] = ex__39463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46370);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46456;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46518 = state_46370;
state_46370 = G__46518;
continue;
} else {
return ret_value__39461__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__39460__auto__ = function(state_46370){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__39460__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__39460__auto____1.call(this,state_46370);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__39460__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__39460__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__39460__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__39460__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__39460__auto__;
})()
;})(switch__39459__auto__,c__39480__auto__,map__46215,map__46215__$1,opts,before_jsload,on_jsload,reload_dependents,map__46216,map__46216__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__39482__auto__ = (function (){var statearr_46458 = f__39481__auto__.call(null);
(statearr_46458[(6)] = c__39480__auto__);

return statearr_46458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39482__auto__);
});})(c__39480__auto__,map__46215,map__46215__$1,opts,before_jsload,on_jsload,reload_dependents,map__46216,map__46216__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__39480__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),cljs.core.str.cljs$core$IFn$_invoke$arity$1("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__46521,link){
var map__46522 = p__46521;
var map__46522__$1 = ((((!((map__46522 == null)))?((((map__46522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46522.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46522):map__46522);
var file = cljs.core.get.call(null,map__46522__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__46522,map__46522__$1,file){
return (function (p1__46519_SHARP_,p2__46520_SHARP_){
if(cljs.core._EQ_.call(null,p1__46519_SHARP_,p2__46520_SHARP_)){
return p1__46519_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__46522,map__46522__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__46525){
var map__46526 = p__46525;
var map__46526__$1 = ((((!((map__46526 == null)))?((((map__46526.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46526.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46526):map__46526);
var match_length = cljs.core.get.call(null,map__46526__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__46526__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__46524_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__46524_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__46528_SHARP_,p2__46529_SHARP_){
return cljs.core.assoc.call(null,p1__46528_SHARP_,cljs.core.get.call(null,p2__46529_SHARP_,key),p2__46529_SHARP_);
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
var loaded_f_datas_46530 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_46530);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_46530);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__46531,p__46532){
var map__46533 = p__46531;
var map__46533__$1 = ((((!((map__46533 == null)))?((((map__46533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46533.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46533):map__46533);
var on_cssload = cljs.core.get.call(null,map__46533__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__46534 = p__46532;
var map__46534__$1 = ((((!((map__46534 == null)))?((((map__46534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46534.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46534):map__46534);
var files_msg = map__46534__$1;
var files = cljs.core.get.call(null,map__46534__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1502260264788