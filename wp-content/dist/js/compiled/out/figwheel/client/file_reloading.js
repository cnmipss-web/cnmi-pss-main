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
var or__27052__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__27052__auto__){
return or__27052__auto__;
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
var or__27052__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__27052__auto__)){
return or__27052__auto__;
} else {
var or__27052__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__27052__auto____$1)){
return or__27052__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__47034_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__47034_SHARP_));
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
var seq__47035 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__47036 = null;
var count__47037 = (0);
var i__47038 = (0);
while(true){
if((i__47038 < count__47037)){
var n = cljs.core._nth.call(null,chunk__47036,i__47038);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__47039 = seq__47035;
var G__47040 = chunk__47036;
var G__47041 = count__47037;
var G__47042 = (i__47038 + (1));
seq__47035 = G__47039;
chunk__47036 = G__47040;
count__47037 = G__47041;
i__47038 = G__47042;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__47035);
if(temp__4657__auto__){
var seq__47035__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47035__$1)){
var c__27872__auto__ = cljs.core.chunk_first.call(null,seq__47035__$1);
var G__47043 = cljs.core.chunk_rest.call(null,seq__47035__$1);
var G__47044 = c__27872__auto__;
var G__47045 = cljs.core.count.call(null,c__27872__auto__);
var G__47046 = (0);
seq__47035 = G__47043;
chunk__47036 = G__47044;
count__47037 = G__47045;
i__47038 = G__47046;
continue;
} else {
var n = cljs.core.first.call(null,seq__47035__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__47047 = cljs.core.next.call(null,seq__47035__$1);
var G__47048 = null;
var G__47049 = (0);
var G__47050 = (0);
seq__47035 = G__47047;
chunk__47036 = G__47048;
count__47037 = G__47049;
i__47038 = G__47050;
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

var seq__47060_47068 = cljs.core.seq.call(null,deps);
var chunk__47061_47069 = null;
var count__47062_47070 = (0);
var i__47063_47071 = (0);
while(true){
if((i__47063_47071 < count__47062_47070)){
var dep_47072 = cljs.core._nth.call(null,chunk__47061_47069,i__47063_47071);
topo_sort_helper_STAR_.call(null,dep_47072,(depth + (1)),state);

var G__47073 = seq__47060_47068;
var G__47074 = chunk__47061_47069;
var G__47075 = count__47062_47070;
var G__47076 = (i__47063_47071 + (1));
seq__47060_47068 = G__47073;
chunk__47061_47069 = G__47074;
count__47062_47070 = G__47075;
i__47063_47071 = G__47076;
continue;
} else {
var temp__4657__auto___47077 = cljs.core.seq.call(null,seq__47060_47068);
if(temp__4657__auto___47077){
var seq__47060_47078__$1 = temp__4657__auto___47077;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47060_47078__$1)){
var c__27872__auto___47079 = cljs.core.chunk_first.call(null,seq__47060_47078__$1);
var G__47080 = cljs.core.chunk_rest.call(null,seq__47060_47078__$1);
var G__47081 = c__27872__auto___47079;
var G__47082 = cljs.core.count.call(null,c__27872__auto___47079);
var G__47083 = (0);
seq__47060_47068 = G__47080;
chunk__47061_47069 = G__47081;
count__47062_47070 = G__47082;
i__47063_47071 = G__47083;
continue;
} else {
var dep_47084 = cljs.core.first.call(null,seq__47060_47078__$1);
topo_sort_helper_STAR_.call(null,dep_47084,(depth + (1)),state);

var G__47085 = cljs.core.next.call(null,seq__47060_47078__$1);
var G__47086 = null;
var G__47087 = (0);
var G__47088 = (0);
seq__47060_47068 = G__47085;
chunk__47061_47069 = G__47086;
count__47062_47070 = G__47087;
i__47063_47071 = G__47088;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__47064){
var vec__47065 = p__47064;
var seq__47066 = cljs.core.seq.call(null,vec__47065);
var first__47067 = cljs.core.first.call(null,seq__47066);
var seq__47066__$1 = cljs.core.next.call(null,seq__47066);
var x = first__47067;
var xs = seq__47066__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__47065,seq__47066,first__47067,seq__47066__$1,x,xs,get_deps__$1){
return (function (p1__47051_SHARP_){
return clojure.set.difference.call(null,p1__47051_SHARP_,x);
});})(vec__47065,seq__47066,first__47067,seq__47066__$1,x,xs,get_deps__$1))
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
var seq__47089 = cljs.core.seq.call(null,provides);
var chunk__47090 = null;
var count__47091 = (0);
var i__47092 = (0);
while(true){
if((i__47092 < count__47091)){
var prov = cljs.core._nth.call(null,chunk__47090,i__47092);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__47093_47101 = cljs.core.seq.call(null,requires);
var chunk__47094_47102 = null;
var count__47095_47103 = (0);
var i__47096_47104 = (0);
while(true){
if((i__47096_47104 < count__47095_47103)){
var req_47105 = cljs.core._nth.call(null,chunk__47094_47102,i__47096_47104);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_47105,prov);

var G__47106 = seq__47093_47101;
var G__47107 = chunk__47094_47102;
var G__47108 = count__47095_47103;
var G__47109 = (i__47096_47104 + (1));
seq__47093_47101 = G__47106;
chunk__47094_47102 = G__47107;
count__47095_47103 = G__47108;
i__47096_47104 = G__47109;
continue;
} else {
var temp__4657__auto___47110 = cljs.core.seq.call(null,seq__47093_47101);
if(temp__4657__auto___47110){
var seq__47093_47111__$1 = temp__4657__auto___47110;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47093_47111__$1)){
var c__27872__auto___47112 = cljs.core.chunk_first.call(null,seq__47093_47111__$1);
var G__47113 = cljs.core.chunk_rest.call(null,seq__47093_47111__$1);
var G__47114 = c__27872__auto___47112;
var G__47115 = cljs.core.count.call(null,c__27872__auto___47112);
var G__47116 = (0);
seq__47093_47101 = G__47113;
chunk__47094_47102 = G__47114;
count__47095_47103 = G__47115;
i__47096_47104 = G__47116;
continue;
} else {
var req_47117 = cljs.core.first.call(null,seq__47093_47111__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_47117,prov);

var G__47118 = cljs.core.next.call(null,seq__47093_47111__$1);
var G__47119 = null;
var G__47120 = (0);
var G__47121 = (0);
seq__47093_47101 = G__47118;
chunk__47094_47102 = G__47119;
count__47095_47103 = G__47120;
i__47096_47104 = G__47121;
continue;
}
} else {
}
}
break;
}

var G__47122 = seq__47089;
var G__47123 = chunk__47090;
var G__47124 = count__47091;
var G__47125 = (i__47092 + (1));
seq__47089 = G__47122;
chunk__47090 = G__47123;
count__47091 = G__47124;
i__47092 = G__47125;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__47089);
if(temp__4657__auto__){
var seq__47089__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47089__$1)){
var c__27872__auto__ = cljs.core.chunk_first.call(null,seq__47089__$1);
var G__47126 = cljs.core.chunk_rest.call(null,seq__47089__$1);
var G__47127 = c__27872__auto__;
var G__47128 = cljs.core.count.call(null,c__27872__auto__);
var G__47129 = (0);
seq__47089 = G__47126;
chunk__47090 = G__47127;
count__47091 = G__47128;
i__47092 = G__47129;
continue;
} else {
var prov = cljs.core.first.call(null,seq__47089__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__47097_47130 = cljs.core.seq.call(null,requires);
var chunk__47098_47131 = null;
var count__47099_47132 = (0);
var i__47100_47133 = (0);
while(true){
if((i__47100_47133 < count__47099_47132)){
var req_47134 = cljs.core._nth.call(null,chunk__47098_47131,i__47100_47133);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_47134,prov);

var G__47135 = seq__47097_47130;
var G__47136 = chunk__47098_47131;
var G__47137 = count__47099_47132;
var G__47138 = (i__47100_47133 + (1));
seq__47097_47130 = G__47135;
chunk__47098_47131 = G__47136;
count__47099_47132 = G__47137;
i__47100_47133 = G__47138;
continue;
} else {
var temp__4657__auto___47139__$1 = cljs.core.seq.call(null,seq__47097_47130);
if(temp__4657__auto___47139__$1){
var seq__47097_47140__$1 = temp__4657__auto___47139__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47097_47140__$1)){
var c__27872__auto___47141 = cljs.core.chunk_first.call(null,seq__47097_47140__$1);
var G__47142 = cljs.core.chunk_rest.call(null,seq__47097_47140__$1);
var G__47143 = c__27872__auto___47141;
var G__47144 = cljs.core.count.call(null,c__27872__auto___47141);
var G__47145 = (0);
seq__47097_47130 = G__47142;
chunk__47098_47131 = G__47143;
count__47099_47132 = G__47144;
i__47100_47133 = G__47145;
continue;
} else {
var req_47146 = cljs.core.first.call(null,seq__47097_47140__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_47146,prov);

var G__47147 = cljs.core.next.call(null,seq__47097_47140__$1);
var G__47148 = null;
var G__47149 = (0);
var G__47150 = (0);
seq__47097_47130 = G__47147;
chunk__47098_47131 = G__47148;
count__47099_47132 = G__47149;
i__47100_47133 = G__47150;
continue;
}
} else {
}
}
break;
}

var G__47151 = cljs.core.next.call(null,seq__47089__$1);
var G__47152 = null;
var G__47153 = (0);
var G__47154 = (0);
seq__47089 = G__47151;
chunk__47090 = G__47152;
count__47091 = G__47153;
i__47092 = G__47154;
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
var seq__47155_47159 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__47156_47160 = null;
var count__47157_47161 = (0);
var i__47158_47162 = (0);
while(true){
if((i__47158_47162 < count__47157_47161)){
var ns_47163 = cljs.core._nth.call(null,chunk__47156_47160,i__47158_47162);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_47163);

var G__47164 = seq__47155_47159;
var G__47165 = chunk__47156_47160;
var G__47166 = count__47157_47161;
var G__47167 = (i__47158_47162 + (1));
seq__47155_47159 = G__47164;
chunk__47156_47160 = G__47165;
count__47157_47161 = G__47166;
i__47158_47162 = G__47167;
continue;
} else {
var temp__4657__auto___47168 = cljs.core.seq.call(null,seq__47155_47159);
if(temp__4657__auto___47168){
var seq__47155_47169__$1 = temp__4657__auto___47168;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47155_47169__$1)){
var c__27872__auto___47170 = cljs.core.chunk_first.call(null,seq__47155_47169__$1);
var G__47171 = cljs.core.chunk_rest.call(null,seq__47155_47169__$1);
var G__47172 = c__27872__auto___47170;
var G__47173 = cljs.core.count.call(null,c__27872__auto___47170);
var G__47174 = (0);
seq__47155_47159 = G__47171;
chunk__47156_47160 = G__47172;
count__47157_47161 = G__47173;
i__47158_47162 = G__47174;
continue;
} else {
var ns_47175 = cljs.core.first.call(null,seq__47155_47169__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_47175);

var G__47176 = cljs.core.next.call(null,seq__47155_47169__$1);
var G__47177 = null;
var G__47178 = (0);
var G__47179 = (0);
seq__47155_47159 = G__47176;
chunk__47156_47160 = G__47177;
count__47157_47161 = G__47178;
i__47158_47162 = G__47179;
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
goog.require_figwheel_backup_ = (function (){var or__27052__auto__ = goog.require__;
if(cljs.core.truth_(or__27052__auto__)){
return or__27052__auto__;
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
var G__47180__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__47180 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47181__i = 0, G__47181__a = new Array(arguments.length -  0);
while (G__47181__i < G__47181__a.length) {G__47181__a[G__47181__i] = arguments[G__47181__i + 0]; ++G__47181__i;}
  args = new cljs.core.IndexedSeq(G__47181__a,0,null);
} 
return G__47180__delegate.call(this,args);};
G__47180.cljs$lang$maxFixedArity = 0;
G__47180.cljs$lang$applyTo = (function (arglist__47182){
var args = cljs.core.seq(arglist__47182);
return G__47180__delegate(args);
});
G__47180.cljs$core$IFn$_invoke$arity$variadic = G__47180__delegate;
return G__47180;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__47183 = cljs.core._EQ_;
var expr__47184 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__47183.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__47184))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__47183,expr__47184){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__47183,expr__47184))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__47183,expr__47184){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e47186){if((e47186 instanceof Error)){
var e = e47186;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e47186;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__47183,expr__47184))
} else {
if(cljs.core.truth_(pred__47183.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__47184))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__47183.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__47184))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__47183.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__47184))){
return ((function (pred__47183,expr__47184){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e47187){if((e47187 instanceof Error)){
var e = e47187;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e47187;

}
}})());
});
;})(pred__47183,expr__47184))
} else {
return ((function (pred__47183,expr__47184){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__47183,expr__47184))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__47188,callback){
var map__47189 = p__47188;
var map__47189__$1 = ((((!((map__47189 == null)))?((((map__47189.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47189.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47189):map__47189);
var file_msg = map__47189__$1;
var request_url = cljs.core.get.call(null,map__47189__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Attempting to load "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__47189,map__47189__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Successfully loaded "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__47189,map__47189__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__33321__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33321__auto__){
return (function (){
var f__33322__auto__ = (function (){var switch__33233__auto__ = ((function (c__33321__auto__){
return (function (state_47213){
var state_val_47214 = (state_47213[(1)]);
if((state_val_47214 === (7))){
var inst_47209 = (state_47213[(2)]);
var state_47213__$1 = state_47213;
var statearr_47215_47232 = state_47213__$1;
(statearr_47215_47232[(2)] = inst_47209);

(statearr_47215_47232[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47214 === (1))){
var state_47213__$1 = state_47213;
var statearr_47216_47233 = state_47213__$1;
(statearr_47216_47233[(2)] = null);

(statearr_47216_47233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47214 === (4))){
var inst_47193 = (state_47213[(7)]);
var inst_47193__$1 = (state_47213[(2)]);
var state_47213__$1 = (function (){var statearr_47217 = state_47213;
(statearr_47217[(7)] = inst_47193__$1);

return statearr_47217;
})();
if(cljs.core.truth_(inst_47193__$1)){
var statearr_47218_47234 = state_47213__$1;
(statearr_47218_47234[(1)] = (5));

} else {
var statearr_47219_47235 = state_47213__$1;
(statearr_47219_47235[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47214 === (6))){
var state_47213__$1 = state_47213;
var statearr_47220_47236 = state_47213__$1;
(statearr_47220_47236[(2)] = null);

(statearr_47220_47236[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47214 === (3))){
var inst_47211 = (state_47213[(2)]);
var state_47213__$1 = state_47213;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47213__$1,inst_47211);
} else {
if((state_val_47214 === (2))){
var state_47213__$1 = state_47213;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47213__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_47214 === (11))){
var inst_47205 = (state_47213[(2)]);
var state_47213__$1 = (function (){var statearr_47221 = state_47213;
(statearr_47221[(8)] = inst_47205);

return statearr_47221;
})();
var statearr_47222_47237 = state_47213__$1;
(statearr_47222_47237[(2)] = null);

(statearr_47222_47237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47214 === (9))){
var inst_47199 = (state_47213[(9)]);
var inst_47197 = (state_47213[(10)]);
var inst_47201 = inst_47199.call(null,inst_47197);
var state_47213__$1 = state_47213;
var statearr_47223_47238 = state_47213__$1;
(statearr_47223_47238[(2)] = inst_47201);

(statearr_47223_47238[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47214 === (5))){
var inst_47193 = (state_47213[(7)]);
var inst_47195 = figwheel.client.file_reloading.blocking_load.call(null,inst_47193);
var state_47213__$1 = state_47213;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47213__$1,(8),inst_47195);
} else {
if((state_val_47214 === (10))){
var inst_47197 = (state_47213[(10)]);
var inst_47203 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_47197);
var state_47213__$1 = state_47213;
var statearr_47224_47239 = state_47213__$1;
(statearr_47224_47239[(2)] = inst_47203);

(statearr_47224_47239[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47214 === (8))){
var inst_47199 = (state_47213[(9)]);
var inst_47193 = (state_47213[(7)]);
var inst_47197 = (state_47213[(2)]);
var inst_47198 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_47199__$1 = cljs.core.get.call(null,inst_47198,inst_47193);
var state_47213__$1 = (function (){var statearr_47225 = state_47213;
(statearr_47225[(9)] = inst_47199__$1);

(statearr_47225[(10)] = inst_47197);

return statearr_47225;
})();
if(cljs.core.truth_(inst_47199__$1)){
var statearr_47226_47240 = state_47213__$1;
(statearr_47226_47240[(1)] = (9));

} else {
var statearr_47227_47241 = state_47213__$1;
(statearr_47227_47241[(1)] = (10));

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
});})(c__33321__auto__))
;
return ((function (switch__33233__auto__,c__33321__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__33234__auto__ = null;
var figwheel$client$file_reloading$state_machine__33234__auto____0 = (function (){
var statearr_47228 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47228[(0)] = figwheel$client$file_reloading$state_machine__33234__auto__);

(statearr_47228[(1)] = (1));

return statearr_47228;
});
var figwheel$client$file_reloading$state_machine__33234__auto____1 = (function (state_47213){
while(true){
var ret_value__33235__auto__ = (function (){try{while(true){
var result__33236__auto__ = switch__33233__auto__.call(null,state_47213);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33236__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33236__auto__;
}
break;
}
}catch (e47229){if((e47229 instanceof Object)){
var ex__33237__auto__ = e47229;
var statearr_47230_47242 = state_47213;
(statearr_47230_47242[(5)] = ex__33237__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47213);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47229;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47243 = state_47213;
state_47213 = G__47243;
continue;
} else {
return ret_value__33235__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__33234__auto__ = function(state_47213){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__33234__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__33234__auto____1.call(this,state_47213);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__33234__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__33234__auto____0;
figwheel$client$file_reloading$state_machine__33234__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__33234__auto____1;
return figwheel$client$file_reloading$state_machine__33234__auto__;
})()
;})(switch__33233__auto__,c__33321__auto__))
})();
var state__33323__auto__ = (function (){var statearr_47231 = f__33322__auto__.call(null);
(statearr_47231[(6)] = c__33321__auto__);

return statearr_47231;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33323__auto__);
});})(c__33321__auto__))
);

return c__33321__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__47244,callback){
var map__47245 = p__47244;
var map__47245__$1 = ((((!((map__47245 == null)))?((((map__47245.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47245.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47245):map__47245);
var file_msg = map__47245__$1;
var namespace = cljs.core.get.call(null,map__47245__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__47245,map__47245__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__47245,map__47245__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__47247){
var map__47248 = p__47247;
var map__47248__$1 = ((((!((map__47248 == null)))?((((map__47248.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47248.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47248):map__47248);
var file_msg = map__47248__$1;
var namespace = cljs.core.get.call(null,map__47248__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__47250){
var map__47251 = p__47250;
var map__47251__$1 = ((((!((map__47251 == null)))?((((map__47251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47251.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47251):map__47251);
var file_msg = map__47251__$1;
var namespace = cljs.core.get.call(null,map__47251__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__27040__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__27040__auto__){
var or__27052__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__27052__auto__)){
return or__27052__auto__;
} else {
var or__27052__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__27052__auto____$1)){
return or__27052__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__27040__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__47253,callback){
var map__47254 = p__47253;
var map__47254__$1 = ((((!((map__47254 == null)))?((((map__47254.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47254.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47254):map__47254);
var file_msg = map__47254__$1;
var request_url = cljs.core.get.call(null,map__47254__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__47254__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__33321__auto___47304 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33321__auto___47304,out){
return (function (){
var f__33322__auto__ = (function (){var switch__33233__auto__ = ((function (c__33321__auto___47304,out){
return (function (state_47289){
var state_val_47290 = (state_47289[(1)]);
if((state_val_47290 === (1))){
var inst_47263 = cljs.core.seq.call(null,files);
var inst_47264 = cljs.core.first.call(null,inst_47263);
var inst_47265 = cljs.core.next.call(null,inst_47263);
var inst_47266 = files;
var state_47289__$1 = (function (){var statearr_47291 = state_47289;
(statearr_47291[(7)] = inst_47264);

(statearr_47291[(8)] = inst_47266);

(statearr_47291[(9)] = inst_47265);

return statearr_47291;
})();
var statearr_47292_47305 = state_47289__$1;
(statearr_47292_47305[(2)] = null);

(statearr_47292_47305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47290 === (2))){
var inst_47272 = (state_47289[(10)]);
var inst_47266 = (state_47289[(8)]);
var inst_47271 = cljs.core.seq.call(null,inst_47266);
var inst_47272__$1 = cljs.core.first.call(null,inst_47271);
var inst_47273 = cljs.core.next.call(null,inst_47271);
var inst_47274 = (inst_47272__$1 == null);
var inst_47275 = cljs.core.not.call(null,inst_47274);
var state_47289__$1 = (function (){var statearr_47293 = state_47289;
(statearr_47293[(11)] = inst_47273);

(statearr_47293[(10)] = inst_47272__$1);

return statearr_47293;
})();
if(inst_47275){
var statearr_47294_47306 = state_47289__$1;
(statearr_47294_47306[(1)] = (4));

} else {
var statearr_47295_47307 = state_47289__$1;
(statearr_47295_47307[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47290 === (3))){
var inst_47287 = (state_47289[(2)]);
var state_47289__$1 = state_47289;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47289__$1,inst_47287);
} else {
if((state_val_47290 === (4))){
var inst_47272 = (state_47289[(10)]);
var inst_47277 = figwheel.client.file_reloading.reload_js_file.call(null,inst_47272);
var state_47289__$1 = state_47289;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47289__$1,(7),inst_47277);
} else {
if((state_val_47290 === (5))){
var inst_47283 = cljs.core.async.close_BANG_.call(null,out);
var state_47289__$1 = state_47289;
var statearr_47296_47308 = state_47289__$1;
(statearr_47296_47308[(2)] = inst_47283);

(statearr_47296_47308[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47290 === (6))){
var inst_47285 = (state_47289[(2)]);
var state_47289__$1 = state_47289;
var statearr_47297_47309 = state_47289__$1;
(statearr_47297_47309[(2)] = inst_47285);

(statearr_47297_47309[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47290 === (7))){
var inst_47273 = (state_47289[(11)]);
var inst_47279 = (state_47289[(2)]);
var inst_47280 = cljs.core.async.put_BANG_.call(null,out,inst_47279);
var inst_47266 = inst_47273;
var state_47289__$1 = (function (){var statearr_47298 = state_47289;
(statearr_47298[(12)] = inst_47280);

(statearr_47298[(8)] = inst_47266);

return statearr_47298;
})();
var statearr_47299_47310 = state_47289__$1;
(statearr_47299_47310[(2)] = null);

(statearr_47299_47310[(1)] = (2));


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
});})(c__33321__auto___47304,out))
;
return ((function (switch__33233__auto__,c__33321__auto___47304,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33234__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33234__auto____0 = (function (){
var statearr_47300 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47300[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33234__auto__);

(statearr_47300[(1)] = (1));

return statearr_47300;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33234__auto____1 = (function (state_47289){
while(true){
var ret_value__33235__auto__ = (function (){try{while(true){
var result__33236__auto__ = switch__33233__auto__.call(null,state_47289);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33236__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33236__auto__;
}
break;
}
}catch (e47301){if((e47301 instanceof Object)){
var ex__33237__auto__ = e47301;
var statearr_47302_47311 = state_47289;
(statearr_47302_47311[(5)] = ex__33237__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47289);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47301;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47312 = state_47289;
state_47289 = G__47312;
continue;
} else {
return ret_value__33235__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33234__auto__ = function(state_47289){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33234__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33234__auto____1.call(this,state_47289);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33234__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33234__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33234__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33234__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33234__auto__;
})()
;})(switch__33233__auto__,c__33321__auto___47304,out))
})();
var state__33323__auto__ = (function (){var statearr_47303 = f__33322__auto__.call(null);
(statearr_47303[(6)] = c__33321__auto___47304);

return statearr_47303;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33323__auto__);
});})(c__33321__auto___47304,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__47313,opts){
var map__47314 = p__47313;
var map__47314__$1 = ((((!((map__47314 == null)))?((((map__47314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47314.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47314):map__47314);
var eval_body = cljs.core.get.call(null,map__47314__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__47314__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__27040__auto__ = eval_body;
if(cljs.core.truth_(and__27040__auto__)){
return typeof eval_body === 'string';
} else {
return and__27040__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Evaling file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e47316){var e = e47316;
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
return (function (p1__47317_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__47317_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__47318){
var vec__47319 = p__47318;
var k = cljs.core.nth.call(null,vec__47319,(0),null);
var v = cljs.core.nth.call(null,vec__47319,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__47322){
var vec__47323 = p__47322;
var k = cljs.core.nth.call(null,vec__47323,(0),null);
var v = cljs.core.nth.call(null,vec__47323,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__47329,p__47330){
var map__47331 = p__47329;
var map__47331__$1 = ((((!((map__47331 == null)))?((((map__47331.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47331.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47331):map__47331);
var opts = map__47331__$1;
var before_jsload = cljs.core.get.call(null,map__47331__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__47331__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__47331__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__47332 = p__47330;
var map__47332__$1 = ((((!((map__47332 == null)))?((((map__47332.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47332.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47332):map__47332);
var msg = map__47332__$1;
var files = cljs.core.get.call(null,map__47332__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__47332__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__47332__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__33321__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33321__auto__,map__47331,map__47331__$1,opts,before_jsload,on_jsload,reload_dependents,map__47332,map__47332__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__33322__auto__ = (function (){var switch__33233__auto__ = ((function (c__33321__auto__,map__47331,map__47331__$1,opts,before_jsload,on_jsload,reload_dependents,map__47332,map__47332__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_47486){
var state_val_47487 = (state_47486[(1)]);
if((state_val_47487 === (7))){
var inst_47349 = (state_47486[(7)]);
var inst_47347 = (state_47486[(8)]);
var inst_47348 = (state_47486[(9)]);
var inst_47346 = (state_47486[(10)]);
var inst_47354 = cljs.core._nth.call(null,inst_47347,inst_47349);
var inst_47355 = figwheel.client.file_reloading.eval_body.call(null,inst_47354,opts);
var inst_47356 = (inst_47349 + (1));
var tmp47488 = inst_47347;
var tmp47489 = inst_47348;
var tmp47490 = inst_47346;
var inst_47346__$1 = tmp47490;
var inst_47347__$1 = tmp47488;
var inst_47348__$1 = tmp47489;
var inst_47349__$1 = inst_47356;
var state_47486__$1 = (function (){var statearr_47491 = state_47486;
(statearr_47491[(7)] = inst_47349__$1);

(statearr_47491[(8)] = inst_47347__$1);

(statearr_47491[(9)] = inst_47348__$1);

(statearr_47491[(10)] = inst_47346__$1);

(statearr_47491[(11)] = inst_47355);

return statearr_47491;
})();
var statearr_47492_47575 = state_47486__$1;
(statearr_47492_47575[(2)] = null);

(statearr_47492_47575[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47487 === (20))){
var inst_47389 = (state_47486[(12)]);
var inst_47397 = figwheel.client.file_reloading.sort_files.call(null,inst_47389);
var state_47486__$1 = state_47486;
var statearr_47493_47576 = state_47486__$1;
(statearr_47493_47576[(2)] = inst_47397);

(statearr_47493_47576[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47487 === (27))){
var state_47486__$1 = state_47486;
var statearr_47494_47577 = state_47486__$1;
(statearr_47494_47577[(2)] = null);

(statearr_47494_47577[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47487 === (1))){
var inst_47338 = (state_47486[(13)]);
var inst_47335 = before_jsload.call(null,files);
var inst_47336 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_47337 = (function (){return ((function (inst_47338,inst_47335,inst_47336,state_val_47487,c__33321__auto__,map__47331,map__47331__$1,opts,before_jsload,on_jsload,reload_dependents,map__47332,map__47332__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__47326_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__47326_SHARP_);
});
;})(inst_47338,inst_47335,inst_47336,state_val_47487,c__33321__auto__,map__47331,map__47331__$1,opts,before_jsload,on_jsload,reload_dependents,map__47332,map__47332__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47338__$1 = cljs.core.filter.call(null,inst_47337,files);
var inst_47339 = cljs.core.not_empty.call(null,inst_47338__$1);
var state_47486__$1 = (function (){var statearr_47495 = state_47486;
(statearr_47495[(13)] = inst_47338__$1);

(statearr_47495[(14)] = inst_47335);

(statearr_47495[(15)] = inst_47336);

return statearr_47495;
})();
if(cljs.core.truth_(inst_47339)){
var statearr_47496_47578 = state_47486__$1;
(statearr_47496_47578[(1)] = (2));

} else {
var statearr_47497_47579 = state_47486__$1;
(statearr_47497_47579[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47487 === (24))){
var state_47486__$1 = state_47486;
var statearr_47498_47580 = state_47486__$1;
(statearr_47498_47580[(2)] = null);

(statearr_47498_47580[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47487 === (39))){
var inst_47439 = (state_47486[(16)]);
var state_47486__$1 = state_47486;
var statearr_47499_47581 = state_47486__$1;
(statearr_47499_47581[(2)] = inst_47439);

(statearr_47499_47581[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47487 === (46))){
var inst_47481 = (state_47486[(2)]);
var state_47486__$1 = state_47486;
var statearr_47500_47582 = state_47486__$1;
(statearr_47500_47582[(2)] = inst_47481);

(statearr_47500_47582[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47487 === (4))){
var inst_47383 = (state_47486[(2)]);
var inst_47384 = cljs.core.List.EMPTY;
var inst_47385 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_47384);
var inst_47386 = (function (){return ((function (inst_47383,inst_47384,inst_47385,state_val_47487,c__33321__auto__,map__47331,map__47331__$1,opts,before_jsload,on_jsload,reload_dependents,map__47332,map__47332__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__47327_SHARP_){
var and__27040__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__47327_SHARP_);
if(cljs.core.truth_(and__27040__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__47327_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__47327_SHARP_)));
} else {
return and__27040__auto__;
}
});
;})(inst_47383,inst_47384,inst_47385,state_val_47487,c__33321__auto__,map__47331,map__47331__$1,opts,before_jsload,on_jsload,reload_dependents,map__47332,map__47332__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47387 = cljs.core.filter.call(null,inst_47386,files);
var inst_47388 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_47389 = cljs.core.concat.call(null,inst_47387,inst_47388);
var state_47486__$1 = (function (){var statearr_47501 = state_47486;
(statearr_47501[(17)] = inst_47385);

(statearr_47501[(18)] = inst_47383);

(statearr_47501[(12)] = inst_47389);

return statearr_47501;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_47502_47583 = state_47486__$1;
(statearr_47502_47583[(1)] = (16));

} else {
var statearr_47503_47584 = state_47486__$1;
(statearr_47503_47584[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47487 === (15))){
var inst_47373 = (state_47486[(2)]);
var state_47486__$1 = state_47486;
var statearr_47504_47585 = state_47486__$1;
(statearr_47504_47585[(2)] = inst_47373);

(statearr_47504_47585[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47487 === (21))){
var inst_47399 = (state_47486[(19)]);
var inst_47399__$1 = (state_47486[(2)]);
var inst_47400 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_47399__$1);
var state_47486__$1 = (function (){var statearr_47505 = state_47486;
(statearr_47505[(19)] = inst_47399__$1);

return statearr_47505;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47486__$1,(22),inst_47400);
} else {
if((state_val_47487 === (31))){
var inst_47484 = (state_47486[(2)]);
var state_47486__$1 = state_47486;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47486__$1,inst_47484);
} else {
if((state_val_47487 === (32))){
var inst_47439 = (state_47486[(16)]);
var inst_47444 = inst_47439.cljs$lang$protocol_mask$partition0$;
var inst_47445 = (inst_47444 & (64));
var inst_47446 = inst_47439.cljs$core$ISeq$;
var inst_47447 = (cljs.core.PROTOCOL_SENTINEL === inst_47446);
var inst_47448 = (inst_47445) || (inst_47447);
var state_47486__$1 = state_47486;
if(cljs.core.truth_(inst_47448)){
var statearr_47506_47586 = state_47486__$1;
(statearr_47506_47586[(1)] = (35));

} else {
var statearr_47507_47587 = state_47486__$1;
(statearr_47507_47587[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47487 === (40))){
var inst_47461 = (state_47486[(20)]);
var inst_47460 = (state_47486[(2)]);
var inst_47461__$1 = cljs.core.get.call(null,inst_47460,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_47462 = cljs.core.get.call(null,inst_47460,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_47463 = cljs.core.not_empty.call(null,inst_47461__$1);
var state_47486__$1 = (function (){var statearr_47508 = state_47486;
(statearr_47508[(21)] = inst_47462);

(statearr_47508[(20)] = inst_47461__$1);

return statearr_47508;
})();
if(cljs.core.truth_(inst_47463)){
var statearr_47509_47588 = state_47486__$1;
(statearr_47509_47588[(1)] = (41));

} else {
var statearr_47510_47589 = state_47486__$1;
(statearr_47510_47589[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47487 === (33))){
var state_47486__$1 = state_47486;
var statearr_47511_47590 = state_47486__$1;
(statearr_47511_47590[(2)] = false);

(statearr_47511_47590[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47487 === (13))){
var inst_47359 = (state_47486[(22)]);
var inst_47363 = cljs.core.chunk_first.call(null,inst_47359);
var inst_47364 = cljs.core.chunk_rest.call(null,inst_47359);
var inst_47365 = cljs.core.count.call(null,inst_47363);
var inst_47346 = inst_47364;
var inst_47347 = inst_47363;
var inst_47348 = inst_47365;
var inst_47349 = (0);
var state_47486__$1 = (function (){var statearr_47512 = state_47486;
(statearr_47512[(7)] = inst_47349);

(statearr_47512[(8)] = inst_47347);

(statearr_47512[(9)] = inst_47348);

(statearr_47512[(10)] = inst_47346);

return statearr_47512;
})();
var statearr_47513_47591 = state_47486__$1;
(statearr_47513_47591[(2)] = null);

(statearr_47513_47591[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47487 === (22))){
var inst_47402 = (state_47486[(23)]);
var inst_47403 = (state_47486[(24)]);
var inst_47399 = (state_47486[(19)]);
var inst_47407 = (state_47486[(25)]);
var inst_47402__$1 = (state_47486[(2)]);
var inst_47403__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_47402__$1);
var inst_47404 = (function (){var all_files = inst_47399;
var res_SINGLEQUOTE_ = inst_47402__$1;
var res = inst_47403__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_47402,inst_47403,inst_47399,inst_47407,inst_47402__$1,inst_47403__$1,state_val_47487,c__33321__auto__,map__47331,map__47331__$1,opts,before_jsload,on_jsload,reload_dependents,map__47332,map__47332__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__47328_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__47328_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_47402,inst_47403,inst_47399,inst_47407,inst_47402__$1,inst_47403__$1,state_val_47487,c__33321__auto__,map__47331,map__47331__$1,opts,before_jsload,on_jsload,reload_dependents,map__47332,map__47332__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47405 = cljs.core.filter.call(null,inst_47404,inst_47402__$1);
var inst_47406 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_47407__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_47406);
var inst_47408 = cljs.core.not_empty.call(null,inst_47407__$1);
var state_47486__$1 = (function (){var statearr_47514 = state_47486;
(statearr_47514[(26)] = inst_47405);

(statearr_47514[(23)] = inst_47402__$1);

(statearr_47514[(24)] = inst_47403__$1);

(statearr_47514[(25)] = inst_47407__$1);

return statearr_47514;
})();
if(cljs.core.truth_(inst_47408)){
var statearr_47515_47592 = state_47486__$1;
(statearr_47515_47592[(1)] = (23));

} else {
var statearr_47516_47593 = state_47486__$1;
(statearr_47516_47593[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47487 === (36))){
var state_47486__$1 = state_47486;
var statearr_47517_47594 = state_47486__$1;
(statearr_47517_47594[(2)] = false);

(statearr_47517_47594[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47487 === (41))){
var inst_47461 = (state_47486[(20)]);
var inst_47465 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_47466 = cljs.core.map.call(null,inst_47465,inst_47461);
var inst_47467 = cljs.core.pr_str.call(null,inst_47466);
var inst_47468 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("figwheel-no-load meta-data: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_47467)].join('');
var inst_47469 = figwheel.client.utils.log.call(null,inst_47468);
var state_47486__$1 = state_47486;
var statearr_47518_47595 = state_47486__$1;
(statearr_47518_47595[(2)] = inst_47469);

(statearr_47518_47595[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47487 === (43))){
var inst_47462 = (state_47486[(21)]);
var inst_47472 = (state_47486[(2)]);
var inst_47473 = cljs.core.not_empty.call(null,inst_47462);
var state_47486__$1 = (function (){var statearr_47519 = state_47486;
(statearr_47519[(27)] = inst_47472);

return statearr_47519;
})();
if(cljs.core.truth_(inst_47473)){
var statearr_47520_47596 = state_47486__$1;
(statearr_47520_47596[(1)] = (44));

} else {
var statearr_47521_47597 = state_47486__$1;
(statearr_47521_47597[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47487 === (29))){
var inst_47439 = (state_47486[(16)]);
var inst_47405 = (state_47486[(26)]);
var inst_47402 = (state_47486[(23)]);
var inst_47403 = (state_47486[(24)]);
var inst_47399 = (state_47486[(19)]);
var inst_47407 = (state_47486[(25)]);
var inst_47435 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_47438 = (function (){var all_files = inst_47399;
var res_SINGLEQUOTE_ = inst_47402;
var res = inst_47403;
var files_not_loaded = inst_47405;
var dependencies_that_loaded = inst_47407;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47439,inst_47405,inst_47402,inst_47403,inst_47399,inst_47407,inst_47435,state_val_47487,c__33321__auto__,map__47331,map__47331__$1,opts,before_jsload,on_jsload,reload_dependents,map__47332,map__47332__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__47437){
var map__47522 = p__47437;
var map__47522__$1 = ((((!((map__47522 == null)))?((((map__47522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47522.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47522):map__47522);
var namespace = cljs.core.get.call(null,map__47522__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47439,inst_47405,inst_47402,inst_47403,inst_47399,inst_47407,inst_47435,state_val_47487,c__33321__auto__,map__47331,map__47331__$1,opts,before_jsload,on_jsload,reload_dependents,map__47332,map__47332__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47439__$1 = cljs.core.group_by.call(null,inst_47438,inst_47405);
var inst_47441 = (inst_47439__$1 == null);
var inst_47442 = cljs.core.not.call(null,inst_47441);
var state_47486__$1 = (function (){var statearr_47524 = state_47486;
(statearr_47524[(16)] = inst_47439__$1);

(statearr_47524[(28)] = inst_47435);

return statearr_47524;
})();
if(inst_47442){
var statearr_47525_47598 = state_47486__$1;
(statearr_47525_47598[(1)] = (32));

} else {
var statearr_47526_47599 = state_47486__$1;
(statearr_47526_47599[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47487 === (44))){
var inst_47462 = (state_47486[(21)]);
var inst_47475 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_47462);
var inst_47476 = cljs.core.pr_str.call(null,inst_47475);
var inst_47477 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("not required: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_47476)].join('');
var inst_47478 = figwheel.client.utils.log.call(null,inst_47477);
var state_47486__$1 = state_47486;
var statearr_47527_47600 = state_47486__$1;
(statearr_47527_47600[(2)] = inst_47478);

(statearr_47527_47600[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47487 === (6))){
var inst_47380 = (state_47486[(2)]);
var state_47486__$1 = state_47486;
var statearr_47528_47601 = state_47486__$1;
(statearr_47528_47601[(2)] = inst_47380);

(statearr_47528_47601[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47487 === (28))){
var inst_47405 = (state_47486[(26)]);
var inst_47432 = (state_47486[(2)]);
var inst_47433 = cljs.core.not_empty.call(null,inst_47405);
var state_47486__$1 = (function (){var statearr_47529 = state_47486;
(statearr_47529[(29)] = inst_47432);

return statearr_47529;
})();
if(cljs.core.truth_(inst_47433)){
var statearr_47530_47602 = state_47486__$1;
(statearr_47530_47602[(1)] = (29));

} else {
var statearr_47531_47603 = state_47486__$1;
(statearr_47531_47603[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47487 === (25))){
var inst_47403 = (state_47486[(24)]);
var inst_47419 = (state_47486[(2)]);
var inst_47420 = cljs.core.not_empty.call(null,inst_47403);
var state_47486__$1 = (function (){var statearr_47532 = state_47486;
(statearr_47532[(30)] = inst_47419);

return statearr_47532;
})();
if(cljs.core.truth_(inst_47420)){
var statearr_47533_47604 = state_47486__$1;
(statearr_47533_47604[(1)] = (26));

} else {
var statearr_47534_47605 = state_47486__$1;
(statearr_47534_47605[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47487 === (34))){
var inst_47455 = (state_47486[(2)]);
var state_47486__$1 = state_47486;
if(cljs.core.truth_(inst_47455)){
var statearr_47535_47606 = state_47486__$1;
(statearr_47535_47606[(1)] = (38));

} else {
var statearr_47536_47607 = state_47486__$1;
(statearr_47536_47607[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47487 === (17))){
var state_47486__$1 = state_47486;
var statearr_47537_47608 = state_47486__$1;
(statearr_47537_47608[(2)] = recompile_dependents);

(statearr_47537_47608[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47487 === (3))){
var state_47486__$1 = state_47486;
var statearr_47538_47609 = state_47486__$1;
(statearr_47538_47609[(2)] = null);

(statearr_47538_47609[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47487 === (12))){
var inst_47376 = (state_47486[(2)]);
var state_47486__$1 = state_47486;
var statearr_47539_47610 = state_47486__$1;
(statearr_47539_47610[(2)] = inst_47376);

(statearr_47539_47610[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47487 === (2))){
var inst_47338 = (state_47486[(13)]);
var inst_47345 = cljs.core.seq.call(null,inst_47338);
var inst_47346 = inst_47345;
var inst_47347 = null;
var inst_47348 = (0);
var inst_47349 = (0);
var state_47486__$1 = (function (){var statearr_47540 = state_47486;
(statearr_47540[(7)] = inst_47349);

(statearr_47540[(8)] = inst_47347);

(statearr_47540[(9)] = inst_47348);

(statearr_47540[(10)] = inst_47346);

return statearr_47540;
})();
var statearr_47541_47611 = state_47486__$1;
(statearr_47541_47611[(2)] = null);

(statearr_47541_47611[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47487 === (23))){
var inst_47405 = (state_47486[(26)]);
var inst_47402 = (state_47486[(23)]);
var inst_47403 = (state_47486[(24)]);
var inst_47399 = (state_47486[(19)]);
var inst_47407 = (state_47486[(25)]);
var inst_47410 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_47412 = (function (){var all_files = inst_47399;
var res_SINGLEQUOTE_ = inst_47402;
var res = inst_47403;
var files_not_loaded = inst_47405;
var dependencies_that_loaded = inst_47407;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47405,inst_47402,inst_47403,inst_47399,inst_47407,inst_47410,state_val_47487,c__33321__auto__,map__47331,map__47331__$1,opts,before_jsload,on_jsload,reload_dependents,map__47332,map__47332__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__47411){
var map__47542 = p__47411;
var map__47542__$1 = ((((!((map__47542 == null)))?((((map__47542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47542.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47542):map__47542);
var request_url = cljs.core.get.call(null,map__47542__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47405,inst_47402,inst_47403,inst_47399,inst_47407,inst_47410,state_val_47487,c__33321__auto__,map__47331,map__47331__$1,opts,before_jsload,on_jsload,reload_dependents,map__47332,map__47332__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47413 = cljs.core.reverse.call(null,inst_47407);
var inst_47414 = cljs.core.map.call(null,inst_47412,inst_47413);
var inst_47415 = cljs.core.pr_str.call(null,inst_47414);
var inst_47416 = figwheel.client.utils.log.call(null,inst_47415);
var state_47486__$1 = (function (){var statearr_47544 = state_47486;
(statearr_47544[(31)] = inst_47410);

return statearr_47544;
})();
var statearr_47545_47612 = state_47486__$1;
(statearr_47545_47612[(2)] = inst_47416);

(statearr_47545_47612[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47487 === (35))){
var state_47486__$1 = state_47486;
var statearr_47546_47613 = state_47486__$1;
(statearr_47546_47613[(2)] = true);

(statearr_47546_47613[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47487 === (19))){
var inst_47389 = (state_47486[(12)]);
var inst_47395 = figwheel.client.file_reloading.expand_files.call(null,inst_47389);
var state_47486__$1 = state_47486;
var statearr_47547_47614 = state_47486__$1;
(statearr_47547_47614[(2)] = inst_47395);

(statearr_47547_47614[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47487 === (11))){
var state_47486__$1 = state_47486;
var statearr_47548_47615 = state_47486__$1;
(statearr_47548_47615[(2)] = null);

(statearr_47548_47615[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47487 === (9))){
var inst_47378 = (state_47486[(2)]);
var state_47486__$1 = state_47486;
var statearr_47549_47616 = state_47486__$1;
(statearr_47549_47616[(2)] = inst_47378);

(statearr_47549_47616[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47487 === (5))){
var inst_47349 = (state_47486[(7)]);
var inst_47348 = (state_47486[(9)]);
var inst_47351 = (inst_47349 < inst_47348);
var inst_47352 = inst_47351;
var state_47486__$1 = state_47486;
if(cljs.core.truth_(inst_47352)){
var statearr_47550_47617 = state_47486__$1;
(statearr_47550_47617[(1)] = (7));

} else {
var statearr_47551_47618 = state_47486__$1;
(statearr_47551_47618[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47487 === (14))){
var inst_47359 = (state_47486[(22)]);
var inst_47368 = cljs.core.first.call(null,inst_47359);
var inst_47369 = figwheel.client.file_reloading.eval_body.call(null,inst_47368,opts);
var inst_47370 = cljs.core.next.call(null,inst_47359);
var inst_47346 = inst_47370;
var inst_47347 = null;
var inst_47348 = (0);
var inst_47349 = (0);
var state_47486__$1 = (function (){var statearr_47552 = state_47486;
(statearr_47552[(7)] = inst_47349);

(statearr_47552[(8)] = inst_47347);

(statearr_47552[(9)] = inst_47348);

(statearr_47552[(10)] = inst_47346);

(statearr_47552[(32)] = inst_47369);

return statearr_47552;
})();
var statearr_47553_47619 = state_47486__$1;
(statearr_47553_47619[(2)] = null);

(statearr_47553_47619[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47487 === (45))){
var state_47486__$1 = state_47486;
var statearr_47554_47620 = state_47486__$1;
(statearr_47554_47620[(2)] = null);

(statearr_47554_47620[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47487 === (26))){
var inst_47405 = (state_47486[(26)]);
var inst_47402 = (state_47486[(23)]);
var inst_47403 = (state_47486[(24)]);
var inst_47399 = (state_47486[(19)]);
var inst_47407 = (state_47486[(25)]);
var inst_47422 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_47424 = (function (){var all_files = inst_47399;
var res_SINGLEQUOTE_ = inst_47402;
var res = inst_47403;
var files_not_loaded = inst_47405;
var dependencies_that_loaded = inst_47407;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47405,inst_47402,inst_47403,inst_47399,inst_47407,inst_47422,state_val_47487,c__33321__auto__,map__47331,map__47331__$1,opts,before_jsload,on_jsload,reload_dependents,map__47332,map__47332__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__47423){
var map__47555 = p__47423;
var map__47555__$1 = ((((!((map__47555 == null)))?((((map__47555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47555.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47555):map__47555);
var namespace = cljs.core.get.call(null,map__47555__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__47555__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47405,inst_47402,inst_47403,inst_47399,inst_47407,inst_47422,state_val_47487,c__33321__auto__,map__47331,map__47331__$1,opts,before_jsload,on_jsload,reload_dependents,map__47332,map__47332__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47425 = cljs.core.map.call(null,inst_47424,inst_47403);
var inst_47426 = cljs.core.pr_str.call(null,inst_47425);
var inst_47427 = figwheel.client.utils.log.call(null,inst_47426);
var inst_47428 = (function (){var all_files = inst_47399;
var res_SINGLEQUOTE_ = inst_47402;
var res = inst_47403;
var files_not_loaded = inst_47405;
var dependencies_that_loaded = inst_47407;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47405,inst_47402,inst_47403,inst_47399,inst_47407,inst_47422,inst_47424,inst_47425,inst_47426,inst_47427,state_val_47487,c__33321__auto__,map__47331,map__47331__$1,opts,before_jsload,on_jsload,reload_dependents,map__47332,map__47332__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47405,inst_47402,inst_47403,inst_47399,inst_47407,inst_47422,inst_47424,inst_47425,inst_47426,inst_47427,state_val_47487,c__33321__auto__,map__47331,map__47331__$1,opts,before_jsload,on_jsload,reload_dependents,map__47332,map__47332__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47429 = setTimeout(inst_47428,(10));
var state_47486__$1 = (function (){var statearr_47557 = state_47486;
(statearr_47557[(33)] = inst_47427);

(statearr_47557[(34)] = inst_47422);

return statearr_47557;
})();
var statearr_47558_47621 = state_47486__$1;
(statearr_47558_47621[(2)] = inst_47429);

(statearr_47558_47621[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47487 === (16))){
var state_47486__$1 = state_47486;
var statearr_47559_47622 = state_47486__$1;
(statearr_47559_47622[(2)] = reload_dependents);

(statearr_47559_47622[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47487 === (38))){
var inst_47439 = (state_47486[(16)]);
var inst_47457 = cljs.core.apply.call(null,cljs.core.hash_map,inst_47439);
var state_47486__$1 = state_47486;
var statearr_47560_47623 = state_47486__$1;
(statearr_47560_47623[(2)] = inst_47457);

(statearr_47560_47623[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47487 === (30))){
var state_47486__$1 = state_47486;
var statearr_47561_47624 = state_47486__$1;
(statearr_47561_47624[(2)] = null);

(statearr_47561_47624[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47487 === (10))){
var inst_47359 = (state_47486[(22)]);
var inst_47361 = cljs.core.chunked_seq_QMARK_.call(null,inst_47359);
var state_47486__$1 = state_47486;
if(inst_47361){
var statearr_47562_47625 = state_47486__$1;
(statearr_47562_47625[(1)] = (13));

} else {
var statearr_47563_47626 = state_47486__$1;
(statearr_47563_47626[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47487 === (18))){
var inst_47393 = (state_47486[(2)]);
var state_47486__$1 = state_47486;
if(cljs.core.truth_(inst_47393)){
var statearr_47564_47627 = state_47486__$1;
(statearr_47564_47627[(1)] = (19));

} else {
var statearr_47565_47628 = state_47486__$1;
(statearr_47565_47628[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47487 === (42))){
var state_47486__$1 = state_47486;
var statearr_47566_47629 = state_47486__$1;
(statearr_47566_47629[(2)] = null);

(statearr_47566_47629[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47487 === (37))){
var inst_47452 = (state_47486[(2)]);
var state_47486__$1 = state_47486;
var statearr_47567_47630 = state_47486__$1;
(statearr_47567_47630[(2)] = inst_47452);

(statearr_47567_47630[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47487 === (8))){
var inst_47346 = (state_47486[(10)]);
var inst_47359 = (state_47486[(22)]);
var inst_47359__$1 = cljs.core.seq.call(null,inst_47346);
var state_47486__$1 = (function (){var statearr_47568 = state_47486;
(statearr_47568[(22)] = inst_47359__$1);

return statearr_47568;
})();
if(inst_47359__$1){
var statearr_47569_47631 = state_47486__$1;
(statearr_47569_47631[(1)] = (10));

} else {
var statearr_47570_47632 = state_47486__$1;
(statearr_47570_47632[(1)] = (11));

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
});})(c__33321__auto__,map__47331,map__47331__$1,opts,before_jsload,on_jsload,reload_dependents,map__47332,map__47332__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__33233__auto__,c__33321__auto__,map__47331,map__47331__$1,opts,before_jsload,on_jsload,reload_dependents,map__47332,map__47332__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33234__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33234__auto____0 = (function (){
var statearr_47571 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47571[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__33234__auto__);

(statearr_47571[(1)] = (1));

return statearr_47571;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33234__auto____1 = (function (state_47486){
while(true){
var ret_value__33235__auto__ = (function (){try{while(true){
var result__33236__auto__ = switch__33233__auto__.call(null,state_47486);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33236__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33236__auto__;
}
break;
}
}catch (e47572){if((e47572 instanceof Object)){
var ex__33237__auto__ = e47572;
var statearr_47573_47633 = state_47486;
(statearr_47573_47633[(5)] = ex__33237__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47486);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47572;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47634 = state_47486;
state_47486 = G__47634;
continue;
} else {
return ret_value__33235__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__33234__auto__ = function(state_47486){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33234__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33234__auto____1.call(this,state_47486);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__33234__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33234__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__33234__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33234__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33234__auto__;
})()
;})(switch__33233__auto__,c__33321__auto__,map__47331,map__47331__$1,opts,before_jsload,on_jsload,reload_dependents,map__47332,map__47332__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__33323__auto__ = (function (){var statearr_47574 = f__33322__auto__.call(null);
(statearr_47574[(6)] = c__33321__auto__);

return statearr_47574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33323__auto__);
});})(c__33321__auto__,map__47331,map__47331__$1,opts,before_jsload,on_jsload,reload_dependents,map__47332,map__47332__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__33321__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),cljs.core.str.cljs$core$IFn$_invoke$arity$1("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__47637,link){
var map__47638 = p__47637;
var map__47638__$1 = ((((!((map__47638 == null)))?((((map__47638.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47638.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47638):map__47638);
var file = cljs.core.get.call(null,map__47638__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__47638,map__47638__$1,file){
return (function (p1__47635_SHARP_,p2__47636_SHARP_){
if(cljs.core._EQ_.call(null,p1__47635_SHARP_,p2__47636_SHARP_)){
return p1__47635_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__47638,map__47638__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__47641){
var map__47642 = p__47641;
var map__47642__$1 = ((((!((map__47642 == null)))?((((map__47642.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47642.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47642):map__47642);
var match_length = cljs.core.get.call(null,map__47642__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__47642__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__47640_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__47640_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__47644_SHARP_,p2__47645_SHARP_){
return cljs.core.assoc.call(null,p1__47644_SHARP_,cljs.core.get.call(null,p2__47645_SHARP_,key),p2__47645_SHARP_);
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
var loaded_f_datas_47646 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_47646);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_47646);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__47647,p__47648){
var map__47649 = p__47647;
var map__47649__$1 = ((((!((map__47649 == null)))?((((map__47649.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47649.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47649):map__47649);
var on_cssload = cljs.core.get.call(null,map__47649__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__47650 = p__47648;
var map__47650__$1 = ((((!((map__47650 == null)))?((((map__47650.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47650.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47650):map__47650);
var files_msg = map__47650__$1;
var files = cljs.core.get.call(null,map__47650__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1501568771862