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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__32887_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__32887_SHARP_));
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
var seq__32892 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__32893 = null;
var count__32894 = (0);
var i__32895 = (0);
while(true){
if((i__32895 < count__32894)){
var n = cljs.core._nth.call(null,chunk__32893,i__32895);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__32896 = seq__32892;
var G__32897 = chunk__32893;
var G__32898 = count__32894;
var G__32899 = (i__32895 + (1));
seq__32892 = G__32896;
chunk__32893 = G__32897;
count__32894 = G__32898;
i__32895 = G__32899;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__32892);
if(temp__4657__auto__){
var seq__32892__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32892__$1)){
var c__26790__auto__ = cljs.core.chunk_first.call(null,seq__32892__$1);
var G__32900 = cljs.core.chunk_rest.call(null,seq__32892__$1);
var G__32901 = c__26790__auto__;
var G__32902 = cljs.core.count.call(null,c__26790__auto__);
var G__32903 = (0);
seq__32892 = G__32900;
chunk__32893 = G__32901;
count__32894 = G__32902;
i__32895 = G__32903;
continue;
} else {
var n = cljs.core.first.call(null,seq__32892__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__32904 = cljs.core.next.call(null,seq__32892__$1);
var G__32905 = null;
var G__32906 = (0);
var G__32907 = (0);
seq__32892 = G__32904;
chunk__32893 = G__32905;
count__32894 = G__32906;
i__32895 = G__32907;
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

var seq__32958_32969 = cljs.core.seq.call(null,deps);
var chunk__32959_32970 = null;
var count__32960_32971 = (0);
var i__32961_32972 = (0);
while(true){
if((i__32961_32972 < count__32960_32971)){
var dep_32973 = cljs.core._nth.call(null,chunk__32959_32970,i__32961_32972);
topo_sort_helper_STAR_.call(null,dep_32973,(depth + (1)),state);

var G__32974 = seq__32958_32969;
var G__32975 = chunk__32959_32970;
var G__32976 = count__32960_32971;
var G__32977 = (i__32961_32972 + (1));
seq__32958_32969 = G__32974;
chunk__32959_32970 = G__32975;
count__32960_32971 = G__32976;
i__32961_32972 = G__32977;
continue;
} else {
var temp__4657__auto___32978 = cljs.core.seq.call(null,seq__32958_32969);
if(temp__4657__auto___32978){
var seq__32958_32979__$1 = temp__4657__auto___32978;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32958_32979__$1)){
var c__26790__auto___32980 = cljs.core.chunk_first.call(null,seq__32958_32979__$1);
var G__32981 = cljs.core.chunk_rest.call(null,seq__32958_32979__$1);
var G__32982 = c__26790__auto___32980;
var G__32983 = cljs.core.count.call(null,c__26790__auto___32980);
var G__32984 = (0);
seq__32958_32969 = G__32981;
chunk__32959_32970 = G__32982;
count__32960_32971 = G__32983;
i__32961_32972 = G__32984;
continue;
} else {
var dep_32985 = cljs.core.first.call(null,seq__32958_32979__$1);
topo_sort_helper_STAR_.call(null,dep_32985,(depth + (1)),state);

var G__32986 = cljs.core.next.call(null,seq__32958_32979__$1);
var G__32987 = null;
var G__32988 = (0);
var G__32989 = (0);
seq__32958_32969 = G__32986;
chunk__32959_32970 = G__32987;
count__32960_32971 = G__32988;
i__32961_32972 = G__32989;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__32962){
var vec__32966 = p__32962;
var seq__32967 = cljs.core.seq.call(null,vec__32966);
var first__32968 = cljs.core.first.call(null,seq__32967);
var seq__32967__$1 = cljs.core.next.call(null,seq__32967);
var x = first__32968;
var xs = seq__32967__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__32966,seq__32967,first__32968,seq__32967__$1,x,xs,get_deps__$1){
return (function (p1__32908_SHARP_){
return clojure.set.difference.call(null,p1__32908_SHARP_,x);
});})(vec__32966,seq__32967,first__32968,seq__32967__$1,x,xs,get_deps__$1))
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
var seq__33002 = cljs.core.seq.call(null,provides);
var chunk__33003 = null;
var count__33004 = (0);
var i__33005 = (0);
while(true){
if((i__33005 < count__33004)){
var prov = cljs.core._nth.call(null,chunk__33003,i__33005);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__33006_33014 = cljs.core.seq.call(null,requires);
var chunk__33007_33015 = null;
var count__33008_33016 = (0);
var i__33009_33017 = (0);
while(true){
if((i__33009_33017 < count__33008_33016)){
var req_33018 = cljs.core._nth.call(null,chunk__33007_33015,i__33009_33017);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33018,prov);

var G__33019 = seq__33006_33014;
var G__33020 = chunk__33007_33015;
var G__33021 = count__33008_33016;
var G__33022 = (i__33009_33017 + (1));
seq__33006_33014 = G__33019;
chunk__33007_33015 = G__33020;
count__33008_33016 = G__33021;
i__33009_33017 = G__33022;
continue;
} else {
var temp__4657__auto___33023 = cljs.core.seq.call(null,seq__33006_33014);
if(temp__4657__auto___33023){
var seq__33006_33024__$1 = temp__4657__auto___33023;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33006_33024__$1)){
var c__26790__auto___33025 = cljs.core.chunk_first.call(null,seq__33006_33024__$1);
var G__33026 = cljs.core.chunk_rest.call(null,seq__33006_33024__$1);
var G__33027 = c__26790__auto___33025;
var G__33028 = cljs.core.count.call(null,c__26790__auto___33025);
var G__33029 = (0);
seq__33006_33014 = G__33026;
chunk__33007_33015 = G__33027;
count__33008_33016 = G__33028;
i__33009_33017 = G__33029;
continue;
} else {
var req_33030 = cljs.core.first.call(null,seq__33006_33024__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33030,prov);

var G__33031 = cljs.core.next.call(null,seq__33006_33024__$1);
var G__33032 = null;
var G__33033 = (0);
var G__33034 = (0);
seq__33006_33014 = G__33031;
chunk__33007_33015 = G__33032;
count__33008_33016 = G__33033;
i__33009_33017 = G__33034;
continue;
}
} else {
}
}
break;
}

var G__33035 = seq__33002;
var G__33036 = chunk__33003;
var G__33037 = count__33004;
var G__33038 = (i__33005 + (1));
seq__33002 = G__33035;
chunk__33003 = G__33036;
count__33004 = G__33037;
i__33005 = G__33038;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33002);
if(temp__4657__auto__){
var seq__33002__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33002__$1)){
var c__26790__auto__ = cljs.core.chunk_first.call(null,seq__33002__$1);
var G__33039 = cljs.core.chunk_rest.call(null,seq__33002__$1);
var G__33040 = c__26790__auto__;
var G__33041 = cljs.core.count.call(null,c__26790__auto__);
var G__33042 = (0);
seq__33002 = G__33039;
chunk__33003 = G__33040;
count__33004 = G__33041;
i__33005 = G__33042;
continue;
} else {
var prov = cljs.core.first.call(null,seq__33002__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__33010_33043 = cljs.core.seq.call(null,requires);
var chunk__33011_33044 = null;
var count__33012_33045 = (0);
var i__33013_33046 = (0);
while(true){
if((i__33013_33046 < count__33012_33045)){
var req_33047 = cljs.core._nth.call(null,chunk__33011_33044,i__33013_33046);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33047,prov);

var G__33048 = seq__33010_33043;
var G__33049 = chunk__33011_33044;
var G__33050 = count__33012_33045;
var G__33051 = (i__33013_33046 + (1));
seq__33010_33043 = G__33048;
chunk__33011_33044 = G__33049;
count__33012_33045 = G__33050;
i__33013_33046 = G__33051;
continue;
} else {
var temp__4657__auto___33052__$1 = cljs.core.seq.call(null,seq__33010_33043);
if(temp__4657__auto___33052__$1){
var seq__33010_33053__$1 = temp__4657__auto___33052__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33010_33053__$1)){
var c__26790__auto___33054 = cljs.core.chunk_first.call(null,seq__33010_33053__$1);
var G__33055 = cljs.core.chunk_rest.call(null,seq__33010_33053__$1);
var G__33056 = c__26790__auto___33054;
var G__33057 = cljs.core.count.call(null,c__26790__auto___33054);
var G__33058 = (0);
seq__33010_33043 = G__33055;
chunk__33011_33044 = G__33056;
count__33012_33045 = G__33057;
i__33013_33046 = G__33058;
continue;
} else {
var req_33059 = cljs.core.first.call(null,seq__33010_33053__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33059,prov);

var G__33060 = cljs.core.next.call(null,seq__33010_33053__$1);
var G__33061 = null;
var G__33062 = (0);
var G__33063 = (0);
seq__33010_33043 = G__33060;
chunk__33011_33044 = G__33061;
count__33012_33045 = G__33062;
i__33013_33046 = G__33063;
continue;
}
} else {
}
}
break;
}

var G__33064 = cljs.core.next.call(null,seq__33002__$1);
var G__33065 = null;
var G__33066 = (0);
var G__33067 = (0);
seq__33002 = G__33064;
chunk__33003 = G__33065;
count__33004 = G__33066;
i__33005 = G__33067;
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
var seq__33072_33076 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__33073_33077 = null;
var count__33074_33078 = (0);
var i__33075_33079 = (0);
while(true){
if((i__33075_33079 < count__33074_33078)){
var ns_33080 = cljs.core._nth.call(null,chunk__33073_33077,i__33075_33079);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_33080);

var G__33081 = seq__33072_33076;
var G__33082 = chunk__33073_33077;
var G__33083 = count__33074_33078;
var G__33084 = (i__33075_33079 + (1));
seq__33072_33076 = G__33081;
chunk__33073_33077 = G__33082;
count__33074_33078 = G__33083;
i__33075_33079 = G__33084;
continue;
} else {
var temp__4657__auto___33085 = cljs.core.seq.call(null,seq__33072_33076);
if(temp__4657__auto___33085){
var seq__33072_33086__$1 = temp__4657__auto___33085;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33072_33086__$1)){
var c__26790__auto___33087 = cljs.core.chunk_first.call(null,seq__33072_33086__$1);
var G__33088 = cljs.core.chunk_rest.call(null,seq__33072_33086__$1);
var G__33089 = c__26790__auto___33087;
var G__33090 = cljs.core.count.call(null,c__26790__auto___33087);
var G__33091 = (0);
seq__33072_33076 = G__33088;
chunk__33073_33077 = G__33089;
count__33074_33078 = G__33090;
i__33075_33079 = G__33091;
continue;
} else {
var ns_33092 = cljs.core.first.call(null,seq__33072_33086__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_33092);

var G__33093 = cljs.core.next.call(null,seq__33072_33086__$1);
var G__33094 = null;
var G__33095 = (0);
var G__33096 = (0);
seq__33072_33076 = G__33093;
chunk__33073_33077 = G__33094;
count__33074_33078 = G__33095;
i__33075_33079 = G__33096;
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
var G__33097__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__33097 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33098__i = 0, G__33098__a = new Array(arguments.length -  0);
while (G__33098__i < G__33098__a.length) {G__33098__a[G__33098__i] = arguments[G__33098__i + 0]; ++G__33098__i;}
  args = new cljs.core.IndexedSeq(G__33098__a,0);
} 
return G__33097__delegate.call(this,args);};
G__33097.cljs$lang$maxFixedArity = 0;
G__33097.cljs$lang$applyTo = (function (arglist__33099){
var args = cljs.core.seq(arglist__33099);
return G__33097__delegate(args);
});
G__33097.cljs$core$IFn$_invoke$arity$variadic = G__33097__delegate;
return G__33097;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__33100 = cljs.core._EQ_;
var expr__33101 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__33100.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__33101))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str(node_path_lib.sep),cljs.core.str(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__33100,expr__33101){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__33100,expr__33101))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__33100,expr__33101){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e33103){if((e33103 instanceof Error)){
var e = e33103;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e33103;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__33100,expr__33101))
} else {
if(cljs.core.truth_(pred__33100.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__33101))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__33100.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__33101))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__33100.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__33101))){
return ((function (pred__33100,expr__33101){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e33104){if((e33104 instanceof Error)){
var e = e33104;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e33104;

}
}})());
});
;})(pred__33100,expr__33101))
} else {
return ((function (pred__33100,expr__33101){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__33100,expr__33101))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__33105,callback){
var map__33108 = p__33105;
var map__33108__$1 = ((((!((map__33108 == null)))?((((map__33108.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33108.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33108):map__33108);
var file_msg = map__33108__$1;
var request_url = cljs.core.get.call(null,map__33108__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__33108,map__33108__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__33108,map__33108__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__28200__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28200__auto__){
return (function (){
var f__28201__auto__ = (function (){var switch__28088__auto__ = ((function (c__28200__auto__){
return (function (state_33132){
var state_val_33133 = (state_33132[(1)]);
if((state_val_33133 === (7))){
var inst_33128 = (state_33132[(2)]);
var state_33132__$1 = state_33132;
var statearr_33134_33154 = state_33132__$1;
(statearr_33134_33154[(2)] = inst_33128);

(statearr_33134_33154[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33133 === (1))){
var state_33132__$1 = state_33132;
var statearr_33135_33155 = state_33132__$1;
(statearr_33135_33155[(2)] = null);

(statearr_33135_33155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33133 === (4))){
var inst_33112 = (state_33132[(7)]);
var inst_33112__$1 = (state_33132[(2)]);
var state_33132__$1 = (function (){var statearr_33136 = state_33132;
(statearr_33136[(7)] = inst_33112__$1);

return statearr_33136;
})();
if(cljs.core.truth_(inst_33112__$1)){
var statearr_33137_33156 = state_33132__$1;
(statearr_33137_33156[(1)] = (5));

} else {
var statearr_33138_33157 = state_33132__$1;
(statearr_33138_33157[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33133 === (6))){
var state_33132__$1 = state_33132;
var statearr_33139_33158 = state_33132__$1;
(statearr_33139_33158[(2)] = null);

(statearr_33139_33158[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33133 === (3))){
var inst_33130 = (state_33132[(2)]);
var state_33132__$1 = state_33132;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33132__$1,inst_33130);
} else {
if((state_val_33133 === (2))){
var state_33132__$1 = state_33132;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33132__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_33133 === (11))){
var inst_33124 = (state_33132[(2)]);
var state_33132__$1 = (function (){var statearr_33140 = state_33132;
(statearr_33140[(8)] = inst_33124);

return statearr_33140;
})();
var statearr_33141_33159 = state_33132__$1;
(statearr_33141_33159[(2)] = null);

(statearr_33141_33159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33133 === (9))){
var inst_33116 = (state_33132[(9)]);
var inst_33118 = (state_33132[(10)]);
var inst_33120 = inst_33118.call(null,inst_33116);
var state_33132__$1 = state_33132;
var statearr_33142_33160 = state_33132__$1;
(statearr_33142_33160[(2)] = inst_33120);

(statearr_33142_33160[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33133 === (5))){
var inst_33112 = (state_33132[(7)]);
var inst_33114 = figwheel.client.file_reloading.blocking_load.call(null,inst_33112);
var state_33132__$1 = state_33132;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33132__$1,(8),inst_33114);
} else {
if((state_val_33133 === (10))){
var inst_33116 = (state_33132[(9)]);
var inst_33122 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_33116);
var state_33132__$1 = state_33132;
var statearr_33143_33161 = state_33132__$1;
(statearr_33143_33161[(2)] = inst_33122);

(statearr_33143_33161[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33133 === (8))){
var inst_33112 = (state_33132[(7)]);
var inst_33118 = (state_33132[(10)]);
var inst_33116 = (state_33132[(2)]);
var inst_33117 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_33118__$1 = cljs.core.get.call(null,inst_33117,inst_33112);
var state_33132__$1 = (function (){var statearr_33144 = state_33132;
(statearr_33144[(9)] = inst_33116);

(statearr_33144[(10)] = inst_33118__$1);

return statearr_33144;
})();
if(cljs.core.truth_(inst_33118__$1)){
var statearr_33145_33162 = state_33132__$1;
(statearr_33145_33162[(1)] = (9));

} else {
var statearr_33146_33163 = state_33132__$1;
(statearr_33146_33163[(1)] = (10));

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
});})(c__28200__auto__))
;
return ((function (switch__28088__auto__,c__28200__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__28089__auto__ = null;
var figwheel$client$file_reloading$state_machine__28089__auto____0 = (function (){
var statearr_33150 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33150[(0)] = figwheel$client$file_reloading$state_machine__28089__auto__);

(statearr_33150[(1)] = (1));

return statearr_33150;
});
var figwheel$client$file_reloading$state_machine__28089__auto____1 = (function (state_33132){
while(true){
var ret_value__28090__auto__ = (function (){try{while(true){
var result__28091__auto__ = switch__28088__auto__.call(null,state_33132);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28091__auto__;
}
break;
}
}catch (e33151){if((e33151 instanceof Object)){
var ex__28092__auto__ = e33151;
var statearr_33152_33164 = state_33132;
(statearr_33152_33164[(5)] = ex__28092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33132);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33151;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33165 = state_33132;
state_33132 = G__33165;
continue;
} else {
return ret_value__28090__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__28089__auto__ = function(state_33132){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__28089__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__28089__auto____1.call(this,state_33132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__28089__auto____0;
figwheel$client$file_reloading$state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__28089__auto____1;
return figwheel$client$file_reloading$state_machine__28089__auto__;
})()
;})(switch__28088__auto__,c__28200__auto__))
})();
var state__28202__auto__ = (function (){var statearr_33153 = f__28201__auto__.call(null);
(statearr_33153[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28200__auto__);

return statearr_33153;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28202__auto__);
});})(c__28200__auto__))
);

return c__28200__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__33166,callback){
var map__33169 = p__33166;
var map__33169__$1 = ((((!((map__33169 == null)))?((((map__33169.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33169.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33169):map__33169);
var file_msg = map__33169__$1;
var namespace = cljs.core.get.call(null,map__33169__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__33169,map__33169__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__33169,map__33169__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__33171){
var map__33174 = p__33171;
var map__33174__$1 = ((((!((map__33174 == null)))?((((map__33174.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33174.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33174):map__33174);
var file_msg = map__33174__$1;
var namespace = cljs.core.get.call(null,map__33174__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__33176){
var map__33179 = p__33176;
var map__33179__$1 = ((((!((map__33179 == null)))?((((map__33179.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33179.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33179):map__33179);
var file_msg = map__33179__$1;
var namespace = cljs.core.get.call(null,map__33179__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__33181,callback){
var map__33184 = p__33181;
var map__33184__$1 = ((((!((map__33184 == null)))?((((map__33184.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33184.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33184):map__33184);
var file_msg = map__33184__$1;
var request_url = cljs.core.get.call(null,map__33184__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__33184__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__28200__auto___33288 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28200__auto___33288,out){
return (function (){
var f__28201__auto__ = (function (){var switch__28088__auto__ = ((function (c__28200__auto___33288,out){
return (function (state_33270){
var state_val_33271 = (state_33270[(1)]);
if((state_val_33271 === (1))){
var inst_33244 = cljs.core.seq.call(null,files);
var inst_33245 = cljs.core.first.call(null,inst_33244);
var inst_33246 = cljs.core.next.call(null,inst_33244);
var inst_33247 = files;
var state_33270__$1 = (function (){var statearr_33272 = state_33270;
(statearr_33272[(7)] = inst_33246);

(statearr_33272[(8)] = inst_33245);

(statearr_33272[(9)] = inst_33247);

return statearr_33272;
})();
var statearr_33273_33289 = state_33270__$1;
(statearr_33273_33289[(2)] = null);

(statearr_33273_33289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33271 === (2))){
var inst_33247 = (state_33270[(9)]);
var inst_33253 = (state_33270[(10)]);
var inst_33252 = cljs.core.seq.call(null,inst_33247);
var inst_33253__$1 = cljs.core.first.call(null,inst_33252);
var inst_33254 = cljs.core.next.call(null,inst_33252);
var inst_33255 = (inst_33253__$1 == null);
var inst_33256 = cljs.core.not.call(null,inst_33255);
var state_33270__$1 = (function (){var statearr_33274 = state_33270;
(statearr_33274[(11)] = inst_33254);

(statearr_33274[(10)] = inst_33253__$1);

return statearr_33274;
})();
if(inst_33256){
var statearr_33275_33290 = state_33270__$1;
(statearr_33275_33290[(1)] = (4));

} else {
var statearr_33276_33291 = state_33270__$1;
(statearr_33276_33291[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33271 === (3))){
var inst_33268 = (state_33270[(2)]);
var state_33270__$1 = state_33270;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33270__$1,inst_33268);
} else {
if((state_val_33271 === (4))){
var inst_33253 = (state_33270[(10)]);
var inst_33258 = figwheel.client.file_reloading.reload_js_file.call(null,inst_33253);
var state_33270__$1 = state_33270;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33270__$1,(7),inst_33258);
} else {
if((state_val_33271 === (5))){
var inst_33264 = cljs.core.async.close_BANG_.call(null,out);
var state_33270__$1 = state_33270;
var statearr_33277_33292 = state_33270__$1;
(statearr_33277_33292[(2)] = inst_33264);

(statearr_33277_33292[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33271 === (6))){
var inst_33266 = (state_33270[(2)]);
var state_33270__$1 = state_33270;
var statearr_33278_33293 = state_33270__$1;
(statearr_33278_33293[(2)] = inst_33266);

(statearr_33278_33293[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33271 === (7))){
var inst_33254 = (state_33270[(11)]);
var inst_33260 = (state_33270[(2)]);
var inst_33261 = cljs.core.async.put_BANG_.call(null,out,inst_33260);
var inst_33247 = inst_33254;
var state_33270__$1 = (function (){var statearr_33279 = state_33270;
(statearr_33279[(12)] = inst_33261);

(statearr_33279[(9)] = inst_33247);

return statearr_33279;
})();
var statearr_33280_33294 = state_33270__$1;
(statearr_33280_33294[(2)] = null);

(statearr_33280_33294[(1)] = (2));


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
});})(c__28200__auto___33288,out))
;
return ((function (switch__28088__auto__,c__28200__auto___33288,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28089__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28089__auto____0 = (function (){
var statearr_33284 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33284[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28089__auto__);

(statearr_33284[(1)] = (1));

return statearr_33284;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28089__auto____1 = (function (state_33270){
while(true){
var ret_value__28090__auto__ = (function (){try{while(true){
var result__28091__auto__ = switch__28088__auto__.call(null,state_33270);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28091__auto__;
}
break;
}
}catch (e33285){if((e33285 instanceof Object)){
var ex__28092__auto__ = e33285;
var statearr_33286_33295 = state_33270;
(statearr_33286_33295[(5)] = ex__28092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33270);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33285;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33296 = state_33270;
state_33270 = G__33296;
continue;
} else {
return ret_value__28090__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28089__auto__ = function(state_33270){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28089__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28089__auto____1.call(this,state_33270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28089__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28089__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28089__auto__;
})()
;})(switch__28088__auto__,c__28200__auto___33288,out))
})();
var state__28202__auto__ = (function (){var statearr_33287 = f__28201__auto__.call(null);
(statearr_33287[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28200__auto___33288);

return statearr_33287;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28202__auto__);
});})(c__28200__auto___33288,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__33297,opts){
var map__33301 = p__33297;
var map__33301__$1 = ((((!((map__33301 == null)))?((((map__33301.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33301.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33301):map__33301);
var eval_body__$1 = cljs.core.get.call(null,map__33301__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__33301__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e33303){var e = e33303;
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
return (function (p1__33304_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__33304_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__33313){
var vec__33314 = p__33313;
var k = cljs.core.nth.call(null,vec__33314,(0),null);
var v = cljs.core.nth.call(null,vec__33314,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__33317){
var vec__33318 = p__33317;
var k = cljs.core.nth.call(null,vec__33318,(0),null);
var v = cljs.core.nth.call(null,vec__33318,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__33324,p__33325){
var map__33572 = p__33324;
var map__33572__$1 = ((((!((map__33572 == null)))?((((map__33572.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33572.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33572):map__33572);
var opts = map__33572__$1;
var before_jsload = cljs.core.get.call(null,map__33572__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__33572__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__33572__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__33573 = p__33325;
var map__33573__$1 = ((((!((map__33573 == null)))?((((map__33573.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33573.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33573):map__33573);
var msg = map__33573__$1;
var files = cljs.core.get.call(null,map__33573__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__33573__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__33573__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__28200__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28200__auto__,map__33572,map__33572__$1,opts,before_jsload,on_jsload,reload_dependents,map__33573,map__33573__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__28201__auto__ = (function (){var switch__28088__auto__ = ((function (c__28200__auto__,map__33572,map__33572__$1,opts,before_jsload,on_jsload,reload_dependents,map__33573,map__33573__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_33726){
var state_val_33727 = (state_33726[(1)]);
if((state_val_33727 === (7))){
var inst_33589 = (state_33726[(7)]);
var inst_33587 = (state_33726[(8)]);
var inst_33588 = (state_33726[(9)]);
var inst_33590 = (state_33726[(10)]);
var inst_33595 = cljs.core._nth.call(null,inst_33588,inst_33590);
var inst_33596 = figwheel.client.file_reloading.eval_body.call(null,inst_33595,opts);
var inst_33597 = (inst_33590 + (1));
var tmp33728 = inst_33589;
var tmp33729 = inst_33587;
var tmp33730 = inst_33588;
var inst_33587__$1 = tmp33729;
var inst_33588__$1 = tmp33730;
var inst_33589__$1 = tmp33728;
var inst_33590__$1 = inst_33597;
var state_33726__$1 = (function (){var statearr_33731 = state_33726;
(statearr_33731[(11)] = inst_33596);

(statearr_33731[(7)] = inst_33589__$1);

(statearr_33731[(8)] = inst_33587__$1);

(statearr_33731[(9)] = inst_33588__$1);

(statearr_33731[(10)] = inst_33590__$1);

return statearr_33731;
})();
var statearr_33732_33818 = state_33726__$1;
(statearr_33732_33818[(2)] = null);

(statearr_33732_33818[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33727 === (20))){
var inst_33630 = (state_33726[(12)]);
var inst_33638 = figwheel.client.file_reloading.sort_files.call(null,inst_33630);
var state_33726__$1 = state_33726;
var statearr_33733_33819 = state_33726__$1;
(statearr_33733_33819[(2)] = inst_33638);

(statearr_33733_33819[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33727 === (27))){
var state_33726__$1 = state_33726;
var statearr_33734_33820 = state_33726__$1;
(statearr_33734_33820[(2)] = null);

(statearr_33734_33820[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33727 === (1))){
var inst_33579 = (state_33726[(13)]);
var inst_33576 = before_jsload.call(null,files);
var inst_33577 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_33578 = (function (){return ((function (inst_33579,inst_33576,inst_33577,state_val_33727,c__28200__auto__,map__33572,map__33572__$1,opts,before_jsload,on_jsload,reload_dependents,map__33573,map__33573__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__33321_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__33321_SHARP_);
});
;})(inst_33579,inst_33576,inst_33577,state_val_33727,c__28200__auto__,map__33572,map__33572__$1,opts,before_jsload,on_jsload,reload_dependents,map__33573,map__33573__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33579__$1 = cljs.core.filter.call(null,inst_33578,files);
var inst_33580 = cljs.core.not_empty.call(null,inst_33579__$1);
var state_33726__$1 = (function (){var statearr_33735 = state_33726;
(statearr_33735[(13)] = inst_33579__$1);

(statearr_33735[(14)] = inst_33577);

(statearr_33735[(15)] = inst_33576);

return statearr_33735;
})();
if(cljs.core.truth_(inst_33580)){
var statearr_33736_33821 = state_33726__$1;
(statearr_33736_33821[(1)] = (2));

} else {
var statearr_33737_33822 = state_33726__$1;
(statearr_33737_33822[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33727 === (24))){
var state_33726__$1 = state_33726;
var statearr_33738_33823 = state_33726__$1;
(statearr_33738_33823[(2)] = null);

(statearr_33738_33823[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33727 === (39))){
var inst_33680 = (state_33726[(16)]);
var state_33726__$1 = state_33726;
var statearr_33739_33824 = state_33726__$1;
(statearr_33739_33824[(2)] = inst_33680);

(statearr_33739_33824[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33727 === (46))){
var inst_33721 = (state_33726[(2)]);
var state_33726__$1 = state_33726;
var statearr_33740_33825 = state_33726__$1;
(statearr_33740_33825[(2)] = inst_33721);

(statearr_33740_33825[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33727 === (4))){
var inst_33624 = (state_33726[(2)]);
var inst_33625 = cljs.core.List.EMPTY;
var inst_33626 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_33625);
var inst_33627 = (function (){return ((function (inst_33624,inst_33625,inst_33626,state_val_33727,c__28200__auto__,map__33572,map__33572__$1,opts,before_jsload,on_jsload,reload_dependents,map__33573,map__33573__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__33322_SHARP_){
var and__25967__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__33322_SHARP_);
if(cljs.core.truth_(and__25967__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__33322_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__33322_SHARP_)));
} else {
return and__25967__auto__;
}
});
;})(inst_33624,inst_33625,inst_33626,state_val_33727,c__28200__auto__,map__33572,map__33572__$1,opts,before_jsload,on_jsload,reload_dependents,map__33573,map__33573__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33628 = cljs.core.filter.call(null,inst_33627,files);
var inst_33629 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_33630 = cljs.core.concat.call(null,inst_33628,inst_33629);
var state_33726__$1 = (function (){var statearr_33741 = state_33726;
(statearr_33741[(17)] = inst_33626);

(statearr_33741[(18)] = inst_33624);

(statearr_33741[(12)] = inst_33630);

return statearr_33741;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_33742_33826 = state_33726__$1;
(statearr_33742_33826[(1)] = (16));

} else {
var statearr_33743_33827 = state_33726__$1;
(statearr_33743_33827[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33727 === (15))){
var inst_33614 = (state_33726[(2)]);
var state_33726__$1 = state_33726;
var statearr_33744_33828 = state_33726__$1;
(statearr_33744_33828[(2)] = inst_33614);

(statearr_33744_33828[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33727 === (21))){
var inst_33640 = (state_33726[(19)]);
var inst_33640__$1 = (state_33726[(2)]);
var inst_33641 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_33640__$1);
var state_33726__$1 = (function (){var statearr_33745 = state_33726;
(statearr_33745[(19)] = inst_33640__$1);

return statearr_33745;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33726__$1,(22),inst_33641);
} else {
if((state_val_33727 === (31))){
var inst_33724 = (state_33726[(2)]);
var state_33726__$1 = state_33726;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33726__$1,inst_33724);
} else {
if((state_val_33727 === (32))){
var inst_33680 = (state_33726[(16)]);
var inst_33685 = inst_33680.cljs$lang$protocol_mask$partition0$;
var inst_33686 = (inst_33685 & (64));
var inst_33687 = inst_33680.cljs$core$ISeq$;
var inst_33688 = (inst_33686) || (inst_33687);
var state_33726__$1 = state_33726;
if(cljs.core.truth_(inst_33688)){
var statearr_33746_33829 = state_33726__$1;
(statearr_33746_33829[(1)] = (35));

} else {
var statearr_33747_33830 = state_33726__$1;
(statearr_33747_33830[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33727 === (40))){
var inst_33701 = (state_33726[(20)]);
var inst_33700 = (state_33726[(2)]);
var inst_33701__$1 = cljs.core.get.call(null,inst_33700,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_33702 = cljs.core.get.call(null,inst_33700,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_33703 = cljs.core.not_empty.call(null,inst_33701__$1);
var state_33726__$1 = (function (){var statearr_33748 = state_33726;
(statearr_33748[(20)] = inst_33701__$1);

(statearr_33748[(21)] = inst_33702);

return statearr_33748;
})();
if(cljs.core.truth_(inst_33703)){
var statearr_33749_33831 = state_33726__$1;
(statearr_33749_33831[(1)] = (41));

} else {
var statearr_33750_33832 = state_33726__$1;
(statearr_33750_33832[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33727 === (33))){
var state_33726__$1 = state_33726;
var statearr_33751_33833 = state_33726__$1;
(statearr_33751_33833[(2)] = false);

(statearr_33751_33833[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33727 === (13))){
var inst_33600 = (state_33726[(22)]);
var inst_33604 = cljs.core.chunk_first.call(null,inst_33600);
var inst_33605 = cljs.core.chunk_rest.call(null,inst_33600);
var inst_33606 = cljs.core.count.call(null,inst_33604);
var inst_33587 = inst_33605;
var inst_33588 = inst_33604;
var inst_33589 = inst_33606;
var inst_33590 = (0);
var state_33726__$1 = (function (){var statearr_33752 = state_33726;
(statearr_33752[(7)] = inst_33589);

(statearr_33752[(8)] = inst_33587);

(statearr_33752[(9)] = inst_33588);

(statearr_33752[(10)] = inst_33590);

return statearr_33752;
})();
var statearr_33753_33834 = state_33726__$1;
(statearr_33753_33834[(2)] = null);

(statearr_33753_33834[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33727 === (22))){
var inst_33643 = (state_33726[(23)]);
var inst_33644 = (state_33726[(24)]);
var inst_33640 = (state_33726[(19)]);
var inst_33648 = (state_33726[(25)]);
var inst_33643__$1 = (state_33726[(2)]);
var inst_33644__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_33643__$1);
var inst_33645 = (function (){var all_files = inst_33640;
var res_SINGLEQUOTE_ = inst_33643__$1;
var res = inst_33644__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_33643,inst_33644,inst_33640,inst_33648,inst_33643__$1,inst_33644__$1,state_val_33727,c__28200__auto__,map__33572,map__33572__$1,opts,before_jsload,on_jsload,reload_dependents,map__33573,map__33573__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__33323_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__33323_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_33643,inst_33644,inst_33640,inst_33648,inst_33643__$1,inst_33644__$1,state_val_33727,c__28200__auto__,map__33572,map__33572__$1,opts,before_jsload,on_jsload,reload_dependents,map__33573,map__33573__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33646 = cljs.core.filter.call(null,inst_33645,inst_33643__$1);
var inst_33647 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_33648__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_33647);
var inst_33649 = cljs.core.not_empty.call(null,inst_33648__$1);
var state_33726__$1 = (function (){var statearr_33754 = state_33726;
(statearr_33754[(26)] = inst_33646);

(statearr_33754[(23)] = inst_33643__$1);

(statearr_33754[(24)] = inst_33644__$1);

(statearr_33754[(25)] = inst_33648__$1);

return statearr_33754;
})();
if(cljs.core.truth_(inst_33649)){
var statearr_33755_33835 = state_33726__$1;
(statearr_33755_33835[(1)] = (23));

} else {
var statearr_33756_33836 = state_33726__$1;
(statearr_33756_33836[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33727 === (36))){
var state_33726__$1 = state_33726;
var statearr_33757_33837 = state_33726__$1;
(statearr_33757_33837[(2)] = false);

(statearr_33757_33837[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33727 === (41))){
var inst_33701 = (state_33726[(20)]);
var inst_33705 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_33706 = cljs.core.map.call(null,inst_33705,inst_33701);
var inst_33707 = cljs.core.pr_str.call(null,inst_33706);
var inst_33708 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_33707)].join('');
var inst_33709 = figwheel.client.utils.log.call(null,inst_33708);
var state_33726__$1 = state_33726;
var statearr_33758_33838 = state_33726__$1;
(statearr_33758_33838[(2)] = inst_33709);

(statearr_33758_33838[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33727 === (43))){
var inst_33702 = (state_33726[(21)]);
var inst_33712 = (state_33726[(2)]);
var inst_33713 = cljs.core.not_empty.call(null,inst_33702);
var state_33726__$1 = (function (){var statearr_33759 = state_33726;
(statearr_33759[(27)] = inst_33712);

return statearr_33759;
})();
if(cljs.core.truth_(inst_33713)){
var statearr_33760_33839 = state_33726__$1;
(statearr_33760_33839[(1)] = (44));

} else {
var statearr_33761_33840 = state_33726__$1;
(statearr_33761_33840[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33727 === (29))){
var inst_33646 = (state_33726[(26)]);
var inst_33643 = (state_33726[(23)]);
var inst_33644 = (state_33726[(24)]);
var inst_33640 = (state_33726[(19)]);
var inst_33648 = (state_33726[(25)]);
var inst_33680 = (state_33726[(16)]);
var inst_33676 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_33679 = (function (){var all_files = inst_33640;
var res_SINGLEQUOTE_ = inst_33643;
var res = inst_33644;
var files_not_loaded = inst_33646;
var dependencies_that_loaded = inst_33648;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33646,inst_33643,inst_33644,inst_33640,inst_33648,inst_33680,inst_33676,state_val_33727,c__28200__auto__,map__33572,map__33572__$1,opts,before_jsload,on_jsload,reload_dependents,map__33573,map__33573__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__33678){
var map__33762 = p__33678;
var map__33762__$1 = ((((!((map__33762 == null)))?((((map__33762.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33762.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33762):map__33762);
var namespace = cljs.core.get.call(null,map__33762__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33646,inst_33643,inst_33644,inst_33640,inst_33648,inst_33680,inst_33676,state_val_33727,c__28200__auto__,map__33572,map__33572__$1,opts,before_jsload,on_jsload,reload_dependents,map__33573,map__33573__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33680__$1 = cljs.core.group_by.call(null,inst_33679,inst_33646);
var inst_33682 = (inst_33680__$1 == null);
var inst_33683 = cljs.core.not.call(null,inst_33682);
var state_33726__$1 = (function (){var statearr_33764 = state_33726;
(statearr_33764[(28)] = inst_33676);

(statearr_33764[(16)] = inst_33680__$1);

return statearr_33764;
})();
if(inst_33683){
var statearr_33765_33841 = state_33726__$1;
(statearr_33765_33841[(1)] = (32));

} else {
var statearr_33766_33842 = state_33726__$1;
(statearr_33766_33842[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33727 === (44))){
var inst_33702 = (state_33726[(21)]);
var inst_33715 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_33702);
var inst_33716 = cljs.core.pr_str.call(null,inst_33715);
var inst_33717 = [cljs.core.str("not required: "),cljs.core.str(inst_33716)].join('');
var inst_33718 = figwheel.client.utils.log.call(null,inst_33717);
var state_33726__$1 = state_33726;
var statearr_33767_33843 = state_33726__$1;
(statearr_33767_33843[(2)] = inst_33718);

(statearr_33767_33843[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33727 === (6))){
var inst_33621 = (state_33726[(2)]);
var state_33726__$1 = state_33726;
var statearr_33768_33844 = state_33726__$1;
(statearr_33768_33844[(2)] = inst_33621);

(statearr_33768_33844[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33727 === (28))){
var inst_33646 = (state_33726[(26)]);
var inst_33673 = (state_33726[(2)]);
var inst_33674 = cljs.core.not_empty.call(null,inst_33646);
var state_33726__$1 = (function (){var statearr_33769 = state_33726;
(statearr_33769[(29)] = inst_33673);

return statearr_33769;
})();
if(cljs.core.truth_(inst_33674)){
var statearr_33770_33845 = state_33726__$1;
(statearr_33770_33845[(1)] = (29));

} else {
var statearr_33771_33846 = state_33726__$1;
(statearr_33771_33846[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33727 === (25))){
var inst_33644 = (state_33726[(24)]);
var inst_33660 = (state_33726[(2)]);
var inst_33661 = cljs.core.not_empty.call(null,inst_33644);
var state_33726__$1 = (function (){var statearr_33772 = state_33726;
(statearr_33772[(30)] = inst_33660);

return statearr_33772;
})();
if(cljs.core.truth_(inst_33661)){
var statearr_33773_33847 = state_33726__$1;
(statearr_33773_33847[(1)] = (26));

} else {
var statearr_33774_33848 = state_33726__$1;
(statearr_33774_33848[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33727 === (34))){
var inst_33695 = (state_33726[(2)]);
var state_33726__$1 = state_33726;
if(cljs.core.truth_(inst_33695)){
var statearr_33775_33849 = state_33726__$1;
(statearr_33775_33849[(1)] = (38));

} else {
var statearr_33776_33850 = state_33726__$1;
(statearr_33776_33850[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33727 === (17))){
var state_33726__$1 = state_33726;
var statearr_33777_33851 = state_33726__$1;
(statearr_33777_33851[(2)] = recompile_dependents);

(statearr_33777_33851[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33727 === (3))){
var state_33726__$1 = state_33726;
var statearr_33778_33852 = state_33726__$1;
(statearr_33778_33852[(2)] = null);

(statearr_33778_33852[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33727 === (12))){
var inst_33617 = (state_33726[(2)]);
var state_33726__$1 = state_33726;
var statearr_33779_33853 = state_33726__$1;
(statearr_33779_33853[(2)] = inst_33617);

(statearr_33779_33853[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33727 === (2))){
var inst_33579 = (state_33726[(13)]);
var inst_33586 = cljs.core.seq.call(null,inst_33579);
var inst_33587 = inst_33586;
var inst_33588 = null;
var inst_33589 = (0);
var inst_33590 = (0);
var state_33726__$1 = (function (){var statearr_33780 = state_33726;
(statearr_33780[(7)] = inst_33589);

(statearr_33780[(8)] = inst_33587);

(statearr_33780[(9)] = inst_33588);

(statearr_33780[(10)] = inst_33590);

return statearr_33780;
})();
var statearr_33781_33854 = state_33726__$1;
(statearr_33781_33854[(2)] = null);

(statearr_33781_33854[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33727 === (23))){
var inst_33646 = (state_33726[(26)]);
var inst_33643 = (state_33726[(23)]);
var inst_33644 = (state_33726[(24)]);
var inst_33640 = (state_33726[(19)]);
var inst_33648 = (state_33726[(25)]);
var inst_33651 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_33653 = (function (){var all_files = inst_33640;
var res_SINGLEQUOTE_ = inst_33643;
var res = inst_33644;
var files_not_loaded = inst_33646;
var dependencies_that_loaded = inst_33648;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33646,inst_33643,inst_33644,inst_33640,inst_33648,inst_33651,state_val_33727,c__28200__auto__,map__33572,map__33572__$1,opts,before_jsload,on_jsload,reload_dependents,map__33573,map__33573__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__33652){
var map__33782 = p__33652;
var map__33782__$1 = ((((!((map__33782 == null)))?((((map__33782.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33782.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33782):map__33782);
var request_url = cljs.core.get.call(null,map__33782__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33646,inst_33643,inst_33644,inst_33640,inst_33648,inst_33651,state_val_33727,c__28200__auto__,map__33572,map__33572__$1,opts,before_jsload,on_jsload,reload_dependents,map__33573,map__33573__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33654 = cljs.core.reverse.call(null,inst_33648);
var inst_33655 = cljs.core.map.call(null,inst_33653,inst_33654);
var inst_33656 = cljs.core.pr_str.call(null,inst_33655);
var inst_33657 = figwheel.client.utils.log.call(null,inst_33656);
var state_33726__$1 = (function (){var statearr_33784 = state_33726;
(statearr_33784[(31)] = inst_33651);

return statearr_33784;
})();
var statearr_33785_33855 = state_33726__$1;
(statearr_33785_33855[(2)] = inst_33657);

(statearr_33785_33855[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33727 === (35))){
var state_33726__$1 = state_33726;
var statearr_33786_33856 = state_33726__$1;
(statearr_33786_33856[(2)] = true);

(statearr_33786_33856[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33727 === (19))){
var inst_33630 = (state_33726[(12)]);
var inst_33636 = figwheel.client.file_reloading.expand_files.call(null,inst_33630);
var state_33726__$1 = state_33726;
var statearr_33787_33857 = state_33726__$1;
(statearr_33787_33857[(2)] = inst_33636);

(statearr_33787_33857[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33727 === (11))){
var state_33726__$1 = state_33726;
var statearr_33788_33858 = state_33726__$1;
(statearr_33788_33858[(2)] = null);

(statearr_33788_33858[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33727 === (9))){
var inst_33619 = (state_33726[(2)]);
var state_33726__$1 = state_33726;
var statearr_33789_33859 = state_33726__$1;
(statearr_33789_33859[(2)] = inst_33619);

(statearr_33789_33859[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33727 === (5))){
var inst_33589 = (state_33726[(7)]);
var inst_33590 = (state_33726[(10)]);
var inst_33592 = (inst_33590 < inst_33589);
var inst_33593 = inst_33592;
var state_33726__$1 = state_33726;
if(cljs.core.truth_(inst_33593)){
var statearr_33790_33860 = state_33726__$1;
(statearr_33790_33860[(1)] = (7));

} else {
var statearr_33791_33861 = state_33726__$1;
(statearr_33791_33861[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33727 === (14))){
var inst_33600 = (state_33726[(22)]);
var inst_33609 = cljs.core.first.call(null,inst_33600);
var inst_33610 = figwheel.client.file_reloading.eval_body.call(null,inst_33609,opts);
var inst_33611 = cljs.core.next.call(null,inst_33600);
var inst_33587 = inst_33611;
var inst_33588 = null;
var inst_33589 = (0);
var inst_33590 = (0);
var state_33726__$1 = (function (){var statearr_33792 = state_33726;
(statearr_33792[(32)] = inst_33610);

(statearr_33792[(7)] = inst_33589);

(statearr_33792[(8)] = inst_33587);

(statearr_33792[(9)] = inst_33588);

(statearr_33792[(10)] = inst_33590);

return statearr_33792;
})();
var statearr_33793_33862 = state_33726__$1;
(statearr_33793_33862[(2)] = null);

(statearr_33793_33862[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33727 === (45))){
var state_33726__$1 = state_33726;
var statearr_33794_33863 = state_33726__$1;
(statearr_33794_33863[(2)] = null);

(statearr_33794_33863[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33727 === (26))){
var inst_33646 = (state_33726[(26)]);
var inst_33643 = (state_33726[(23)]);
var inst_33644 = (state_33726[(24)]);
var inst_33640 = (state_33726[(19)]);
var inst_33648 = (state_33726[(25)]);
var inst_33663 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_33665 = (function (){var all_files = inst_33640;
var res_SINGLEQUOTE_ = inst_33643;
var res = inst_33644;
var files_not_loaded = inst_33646;
var dependencies_that_loaded = inst_33648;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33646,inst_33643,inst_33644,inst_33640,inst_33648,inst_33663,state_val_33727,c__28200__auto__,map__33572,map__33572__$1,opts,before_jsload,on_jsload,reload_dependents,map__33573,map__33573__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__33664){
var map__33795 = p__33664;
var map__33795__$1 = ((((!((map__33795 == null)))?((((map__33795.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33795.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33795):map__33795);
var namespace = cljs.core.get.call(null,map__33795__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__33795__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33646,inst_33643,inst_33644,inst_33640,inst_33648,inst_33663,state_val_33727,c__28200__auto__,map__33572,map__33572__$1,opts,before_jsload,on_jsload,reload_dependents,map__33573,map__33573__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33666 = cljs.core.map.call(null,inst_33665,inst_33644);
var inst_33667 = cljs.core.pr_str.call(null,inst_33666);
var inst_33668 = figwheel.client.utils.log.call(null,inst_33667);
var inst_33669 = (function (){var all_files = inst_33640;
var res_SINGLEQUOTE_ = inst_33643;
var res = inst_33644;
var files_not_loaded = inst_33646;
var dependencies_that_loaded = inst_33648;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33646,inst_33643,inst_33644,inst_33640,inst_33648,inst_33663,inst_33665,inst_33666,inst_33667,inst_33668,state_val_33727,c__28200__auto__,map__33572,map__33572__$1,opts,before_jsload,on_jsload,reload_dependents,map__33573,map__33573__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33646,inst_33643,inst_33644,inst_33640,inst_33648,inst_33663,inst_33665,inst_33666,inst_33667,inst_33668,state_val_33727,c__28200__auto__,map__33572,map__33572__$1,opts,before_jsload,on_jsload,reload_dependents,map__33573,map__33573__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33670 = setTimeout(inst_33669,(10));
var state_33726__$1 = (function (){var statearr_33797 = state_33726;
(statearr_33797[(33)] = inst_33663);

(statearr_33797[(34)] = inst_33668);

return statearr_33797;
})();
var statearr_33798_33864 = state_33726__$1;
(statearr_33798_33864[(2)] = inst_33670);

(statearr_33798_33864[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33727 === (16))){
var state_33726__$1 = state_33726;
var statearr_33799_33865 = state_33726__$1;
(statearr_33799_33865[(2)] = reload_dependents);

(statearr_33799_33865[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33727 === (38))){
var inst_33680 = (state_33726[(16)]);
var inst_33697 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33680);
var state_33726__$1 = state_33726;
var statearr_33800_33866 = state_33726__$1;
(statearr_33800_33866[(2)] = inst_33697);

(statearr_33800_33866[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33727 === (30))){
var state_33726__$1 = state_33726;
var statearr_33801_33867 = state_33726__$1;
(statearr_33801_33867[(2)] = null);

(statearr_33801_33867[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33727 === (10))){
var inst_33600 = (state_33726[(22)]);
var inst_33602 = cljs.core.chunked_seq_QMARK_.call(null,inst_33600);
var state_33726__$1 = state_33726;
if(inst_33602){
var statearr_33802_33868 = state_33726__$1;
(statearr_33802_33868[(1)] = (13));

} else {
var statearr_33803_33869 = state_33726__$1;
(statearr_33803_33869[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33727 === (18))){
var inst_33634 = (state_33726[(2)]);
var state_33726__$1 = state_33726;
if(cljs.core.truth_(inst_33634)){
var statearr_33804_33870 = state_33726__$1;
(statearr_33804_33870[(1)] = (19));

} else {
var statearr_33805_33871 = state_33726__$1;
(statearr_33805_33871[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33727 === (42))){
var state_33726__$1 = state_33726;
var statearr_33806_33872 = state_33726__$1;
(statearr_33806_33872[(2)] = null);

(statearr_33806_33872[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33727 === (37))){
var inst_33692 = (state_33726[(2)]);
var state_33726__$1 = state_33726;
var statearr_33807_33873 = state_33726__$1;
(statearr_33807_33873[(2)] = inst_33692);

(statearr_33807_33873[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33727 === (8))){
var inst_33587 = (state_33726[(8)]);
var inst_33600 = (state_33726[(22)]);
var inst_33600__$1 = cljs.core.seq.call(null,inst_33587);
var state_33726__$1 = (function (){var statearr_33808 = state_33726;
(statearr_33808[(22)] = inst_33600__$1);

return statearr_33808;
})();
if(inst_33600__$1){
var statearr_33809_33874 = state_33726__$1;
(statearr_33809_33874[(1)] = (10));

} else {
var statearr_33810_33875 = state_33726__$1;
(statearr_33810_33875[(1)] = (11));

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
});})(c__28200__auto__,map__33572,map__33572__$1,opts,before_jsload,on_jsload,reload_dependents,map__33573,map__33573__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__28088__auto__,c__28200__auto__,map__33572,map__33572__$1,opts,before_jsload,on_jsload,reload_dependents,map__33573,map__33573__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28089__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28089__auto____0 = (function (){
var statearr_33814 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33814[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__28089__auto__);

(statearr_33814[(1)] = (1));

return statearr_33814;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28089__auto____1 = (function (state_33726){
while(true){
var ret_value__28090__auto__ = (function (){try{while(true){
var result__28091__auto__ = switch__28088__auto__.call(null,state_33726);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28091__auto__;
}
break;
}
}catch (e33815){if((e33815 instanceof Object)){
var ex__28092__auto__ = e33815;
var statearr_33816_33876 = state_33726;
(statearr_33816_33876[(5)] = ex__28092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33726);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33815;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33877 = state_33726;
state_33726 = G__33877;
continue;
} else {
return ret_value__28090__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__28089__auto__ = function(state_33726){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28089__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28089__auto____1.call(this,state_33726);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28089__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28089__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28089__auto__;
})()
;})(switch__28088__auto__,c__28200__auto__,map__33572,map__33572__$1,opts,before_jsload,on_jsload,reload_dependents,map__33573,map__33573__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__28202__auto__ = (function (){var statearr_33817 = f__28201__auto__.call(null);
(statearr_33817[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28200__auto__);

return statearr_33817;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28202__auto__);
});})(c__28200__auto__,map__33572,map__33572__$1,opts,before_jsload,on_jsload,reload_dependents,map__33573,map__33573__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__28200__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__33880,link){
var map__33883 = p__33880;
var map__33883__$1 = ((((!((map__33883 == null)))?((((map__33883.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33883.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33883):map__33883);
var file = cljs.core.get.call(null,map__33883__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__33883,map__33883__$1,file){
return (function (p1__33878_SHARP_,p2__33879_SHARP_){
if(cljs.core._EQ_.call(null,p1__33878_SHARP_,p2__33879_SHARP_)){
return p1__33878_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__33883,map__33883__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__33889){
var map__33890 = p__33889;
var map__33890__$1 = ((((!((map__33890 == null)))?((((map__33890.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33890.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33890):map__33890);
var match_length = cljs.core.get.call(null,map__33890__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__33890__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__33885_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__33885_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__33892_SHARP_,p2__33893_SHARP_){
return cljs.core.assoc.call(null,p1__33892_SHARP_,cljs.core.get.call(null,p2__33893_SHARP_,key),p2__33893_SHARP_);
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
var loaded_f_datas_33894 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_33894);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_33894);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__33895,p__33896){
var map__33901 = p__33895;
var map__33901__$1 = ((((!((map__33901 == null)))?((((map__33901.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33901.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33901):map__33901);
var on_cssload = cljs.core.get.call(null,map__33901__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__33902 = p__33896;
var map__33902__$1 = ((((!((map__33902 == null)))?((((map__33902.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33902.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33902):map__33902);
var files_msg = map__33902__$1;
var files = cljs.core.get.call(null,map__33902__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1498622388393