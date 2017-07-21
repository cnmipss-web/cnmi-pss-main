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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__34540_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__34540_SHARP_));
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
var seq__34545 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__34546 = null;
var count__34547 = (0);
var i__34548 = (0);
while(true){
if((i__34548 < count__34547)){
var n = cljs.core._nth.call(null,chunk__34546,i__34548);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34549 = seq__34545;
var G__34550 = chunk__34546;
var G__34551 = count__34547;
var G__34552 = (i__34548 + (1));
seq__34545 = G__34549;
chunk__34546 = G__34550;
count__34547 = G__34551;
i__34548 = G__34552;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34545);
if(temp__4657__auto__){
var seq__34545__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34545__$1)){
var c__26800__auto__ = cljs.core.chunk_first.call(null,seq__34545__$1);
var G__34553 = cljs.core.chunk_rest.call(null,seq__34545__$1);
var G__34554 = c__26800__auto__;
var G__34555 = cljs.core.count.call(null,c__26800__auto__);
var G__34556 = (0);
seq__34545 = G__34553;
chunk__34546 = G__34554;
count__34547 = G__34555;
i__34548 = G__34556;
continue;
} else {
var n = cljs.core.first.call(null,seq__34545__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34557 = cljs.core.next.call(null,seq__34545__$1);
var G__34558 = null;
var G__34559 = (0);
var G__34560 = (0);
seq__34545 = G__34557;
chunk__34546 = G__34558;
count__34547 = G__34559;
i__34548 = G__34560;
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

var seq__34611_34622 = cljs.core.seq.call(null,deps);
var chunk__34612_34623 = null;
var count__34613_34624 = (0);
var i__34614_34625 = (0);
while(true){
if((i__34614_34625 < count__34613_34624)){
var dep_34626 = cljs.core._nth.call(null,chunk__34612_34623,i__34614_34625);
topo_sort_helper_STAR_.call(null,dep_34626,(depth + (1)),state);

var G__34627 = seq__34611_34622;
var G__34628 = chunk__34612_34623;
var G__34629 = count__34613_34624;
var G__34630 = (i__34614_34625 + (1));
seq__34611_34622 = G__34627;
chunk__34612_34623 = G__34628;
count__34613_34624 = G__34629;
i__34614_34625 = G__34630;
continue;
} else {
var temp__4657__auto___34631 = cljs.core.seq.call(null,seq__34611_34622);
if(temp__4657__auto___34631){
var seq__34611_34632__$1 = temp__4657__auto___34631;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34611_34632__$1)){
var c__26800__auto___34633 = cljs.core.chunk_first.call(null,seq__34611_34632__$1);
var G__34634 = cljs.core.chunk_rest.call(null,seq__34611_34632__$1);
var G__34635 = c__26800__auto___34633;
var G__34636 = cljs.core.count.call(null,c__26800__auto___34633);
var G__34637 = (0);
seq__34611_34622 = G__34634;
chunk__34612_34623 = G__34635;
count__34613_34624 = G__34636;
i__34614_34625 = G__34637;
continue;
} else {
var dep_34638 = cljs.core.first.call(null,seq__34611_34632__$1);
topo_sort_helper_STAR_.call(null,dep_34638,(depth + (1)),state);

var G__34639 = cljs.core.next.call(null,seq__34611_34632__$1);
var G__34640 = null;
var G__34641 = (0);
var G__34642 = (0);
seq__34611_34622 = G__34639;
chunk__34612_34623 = G__34640;
count__34613_34624 = G__34641;
i__34614_34625 = G__34642;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__34615){
var vec__34619 = p__34615;
var seq__34620 = cljs.core.seq.call(null,vec__34619);
var first__34621 = cljs.core.first.call(null,seq__34620);
var seq__34620__$1 = cljs.core.next.call(null,seq__34620);
var x = first__34621;
var xs = seq__34620__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__34619,seq__34620,first__34621,seq__34620__$1,x,xs,get_deps__$1){
return (function (p1__34561_SHARP_){
return clojure.set.difference.call(null,p1__34561_SHARP_,x);
});})(vec__34619,seq__34620,first__34621,seq__34620__$1,x,xs,get_deps__$1))
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
var seq__34655 = cljs.core.seq.call(null,provides);
var chunk__34656 = null;
var count__34657 = (0);
var i__34658 = (0);
while(true){
if((i__34658 < count__34657)){
var prov = cljs.core._nth.call(null,chunk__34656,i__34658);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34659_34667 = cljs.core.seq.call(null,requires);
var chunk__34660_34668 = null;
var count__34661_34669 = (0);
var i__34662_34670 = (0);
while(true){
if((i__34662_34670 < count__34661_34669)){
var req_34671 = cljs.core._nth.call(null,chunk__34660_34668,i__34662_34670);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34671,prov);

var G__34672 = seq__34659_34667;
var G__34673 = chunk__34660_34668;
var G__34674 = count__34661_34669;
var G__34675 = (i__34662_34670 + (1));
seq__34659_34667 = G__34672;
chunk__34660_34668 = G__34673;
count__34661_34669 = G__34674;
i__34662_34670 = G__34675;
continue;
} else {
var temp__4657__auto___34676 = cljs.core.seq.call(null,seq__34659_34667);
if(temp__4657__auto___34676){
var seq__34659_34677__$1 = temp__4657__auto___34676;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34659_34677__$1)){
var c__26800__auto___34678 = cljs.core.chunk_first.call(null,seq__34659_34677__$1);
var G__34679 = cljs.core.chunk_rest.call(null,seq__34659_34677__$1);
var G__34680 = c__26800__auto___34678;
var G__34681 = cljs.core.count.call(null,c__26800__auto___34678);
var G__34682 = (0);
seq__34659_34667 = G__34679;
chunk__34660_34668 = G__34680;
count__34661_34669 = G__34681;
i__34662_34670 = G__34682;
continue;
} else {
var req_34683 = cljs.core.first.call(null,seq__34659_34677__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34683,prov);

var G__34684 = cljs.core.next.call(null,seq__34659_34677__$1);
var G__34685 = null;
var G__34686 = (0);
var G__34687 = (0);
seq__34659_34667 = G__34684;
chunk__34660_34668 = G__34685;
count__34661_34669 = G__34686;
i__34662_34670 = G__34687;
continue;
}
} else {
}
}
break;
}

var G__34688 = seq__34655;
var G__34689 = chunk__34656;
var G__34690 = count__34657;
var G__34691 = (i__34658 + (1));
seq__34655 = G__34688;
chunk__34656 = G__34689;
count__34657 = G__34690;
i__34658 = G__34691;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34655);
if(temp__4657__auto__){
var seq__34655__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34655__$1)){
var c__26800__auto__ = cljs.core.chunk_first.call(null,seq__34655__$1);
var G__34692 = cljs.core.chunk_rest.call(null,seq__34655__$1);
var G__34693 = c__26800__auto__;
var G__34694 = cljs.core.count.call(null,c__26800__auto__);
var G__34695 = (0);
seq__34655 = G__34692;
chunk__34656 = G__34693;
count__34657 = G__34694;
i__34658 = G__34695;
continue;
} else {
var prov = cljs.core.first.call(null,seq__34655__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34663_34696 = cljs.core.seq.call(null,requires);
var chunk__34664_34697 = null;
var count__34665_34698 = (0);
var i__34666_34699 = (0);
while(true){
if((i__34666_34699 < count__34665_34698)){
var req_34700 = cljs.core._nth.call(null,chunk__34664_34697,i__34666_34699);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34700,prov);

var G__34701 = seq__34663_34696;
var G__34702 = chunk__34664_34697;
var G__34703 = count__34665_34698;
var G__34704 = (i__34666_34699 + (1));
seq__34663_34696 = G__34701;
chunk__34664_34697 = G__34702;
count__34665_34698 = G__34703;
i__34666_34699 = G__34704;
continue;
} else {
var temp__4657__auto___34705__$1 = cljs.core.seq.call(null,seq__34663_34696);
if(temp__4657__auto___34705__$1){
var seq__34663_34706__$1 = temp__4657__auto___34705__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34663_34706__$1)){
var c__26800__auto___34707 = cljs.core.chunk_first.call(null,seq__34663_34706__$1);
var G__34708 = cljs.core.chunk_rest.call(null,seq__34663_34706__$1);
var G__34709 = c__26800__auto___34707;
var G__34710 = cljs.core.count.call(null,c__26800__auto___34707);
var G__34711 = (0);
seq__34663_34696 = G__34708;
chunk__34664_34697 = G__34709;
count__34665_34698 = G__34710;
i__34666_34699 = G__34711;
continue;
} else {
var req_34712 = cljs.core.first.call(null,seq__34663_34706__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34712,prov);

var G__34713 = cljs.core.next.call(null,seq__34663_34706__$1);
var G__34714 = null;
var G__34715 = (0);
var G__34716 = (0);
seq__34663_34696 = G__34713;
chunk__34664_34697 = G__34714;
count__34665_34698 = G__34715;
i__34666_34699 = G__34716;
continue;
}
} else {
}
}
break;
}

var G__34717 = cljs.core.next.call(null,seq__34655__$1);
var G__34718 = null;
var G__34719 = (0);
var G__34720 = (0);
seq__34655 = G__34717;
chunk__34656 = G__34718;
count__34657 = G__34719;
i__34658 = G__34720;
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
var seq__34725_34729 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__34726_34730 = null;
var count__34727_34731 = (0);
var i__34728_34732 = (0);
while(true){
if((i__34728_34732 < count__34727_34731)){
var ns_34733 = cljs.core._nth.call(null,chunk__34726_34730,i__34728_34732);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34733);

var G__34734 = seq__34725_34729;
var G__34735 = chunk__34726_34730;
var G__34736 = count__34727_34731;
var G__34737 = (i__34728_34732 + (1));
seq__34725_34729 = G__34734;
chunk__34726_34730 = G__34735;
count__34727_34731 = G__34736;
i__34728_34732 = G__34737;
continue;
} else {
var temp__4657__auto___34738 = cljs.core.seq.call(null,seq__34725_34729);
if(temp__4657__auto___34738){
var seq__34725_34739__$1 = temp__4657__auto___34738;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34725_34739__$1)){
var c__26800__auto___34740 = cljs.core.chunk_first.call(null,seq__34725_34739__$1);
var G__34741 = cljs.core.chunk_rest.call(null,seq__34725_34739__$1);
var G__34742 = c__26800__auto___34740;
var G__34743 = cljs.core.count.call(null,c__26800__auto___34740);
var G__34744 = (0);
seq__34725_34729 = G__34741;
chunk__34726_34730 = G__34742;
count__34727_34731 = G__34743;
i__34728_34732 = G__34744;
continue;
} else {
var ns_34745 = cljs.core.first.call(null,seq__34725_34739__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34745);

var G__34746 = cljs.core.next.call(null,seq__34725_34739__$1);
var G__34747 = null;
var G__34748 = (0);
var G__34749 = (0);
seq__34725_34729 = G__34746;
chunk__34726_34730 = G__34747;
count__34727_34731 = G__34748;
i__34728_34732 = G__34749;
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
var G__34750__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__34750 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34751__i = 0, G__34751__a = new Array(arguments.length -  0);
while (G__34751__i < G__34751__a.length) {G__34751__a[G__34751__i] = arguments[G__34751__i + 0]; ++G__34751__i;}
  args = new cljs.core.IndexedSeq(G__34751__a,0);
} 
return G__34750__delegate.call(this,args);};
G__34750.cljs$lang$maxFixedArity = 0;
G__34750.cljs$lang$applyTo = (function (arglist__34752){
var args = cljs.core.seq(arglist__34752);
return G__34750__delegate(args);
});
G__34750.cljs$core$IFn$_invoke$arity$variadic = G__34750__delegate;
return G__34750;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__34753 = cljs.core._EQ_;
var expr__34754 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__34753.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__34754))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str(node_path_lib.sep),cljs.core.str(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__34753,expr__34754){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__34753,expr__34754))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__34753,expr__34754){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e34756){if((e34756 instanceof Error)){
var e = e34756;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34756;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__34753,expr__34754))
} else {
if(cljs.core.truth_(pred__34753.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__34754))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__34753.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__34754))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__34753.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__34754))){
return ((function (pred__34753,expr__34754){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e34757){if((e34757 instanceof Error)){
var e = e34757;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34757;

}
}})());
});
;})(pred__34753,expr__34754))
} else {
return ((function (pred__34753,expr__34754){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__34753,expr__34754))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__34758,callback){
var map__34761 = p__34758;
var map__34761__$1 = ((((!((map__34761 == null)))?((((map__34761.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34761.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34761):map__34761);
var file_msg = map__34761__$1;
var request_url = cljs.core.get.call(null,map__34761__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__34761,map__34761__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__34761,map__34761__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__29436__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29436__auto__){
return (function (){
var f__29437__auto__ = (function (){var switch__29324__auto__ = ((function (c__29436__auto__){
return (function (state_34785){
var state_val_34786 = (state_34785[(1)]);
if((state_val_34786 === (7))){
var inst_34781 = (state_34785[(2)]);
var state_34785__$1 = state_34785;
var statearr_34787_34807 = state_34785__$1;
(statearr_34787_34807[(2)] = inst_34781);

(statearr_34787_34807[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34786 === (1))){
var state_34785__$1 = state_34785;
var statearr_34788_34808 = state_34785__$1;
(statearr_34788_34808[(2)] = null);

(statearr_34788_34808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34786 === (4))){
var inst_34765 = (state_34785[(7)]);
var inst_34765__$1 = (state_34785[(2)]);
var state_34785__$1 = (function (){var statearr_34789 = state_34785;
(statearr_34789[(7)] = inst_34765__$1);

return statearr_34789;
})();
if(cljs.core.truth_(inst_34765__$1)){
var statearr_34790_34809 = state_34785__$1;
(statearr_34790_34809[(1)] = (5));

} else {
var statearr_34791_34810 = state_34785__$1;
(statearr_34791_34810[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34786 === (6))){
var state_34785__$1 = state_34785;
var statearr_34792_34811 = state_34785__$1;
(statearr_34792_34811[(2)] = null);

(statearr_34792_34811[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34786 === (3))){
var inst_34783 = (state_34785[(2)]);
var state_34785__$1 = state_34785;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34785__$1,inst_34783);
} else {
if((state_val_34786 === (2))){
var state_34785__$1 = state_34785;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34785__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_34786 === (11))){
var inst_34777 = (state_34785[(2)]);
var state_34785__$1 = (function (){var statearr_34793 = state_34785;
(statearr_34793[(8)] = inst_34777);

return statearr_34793;
})();
var statearr_34794_34812 = state_34785__$1;
(statearr_34794_34812[(2)] = null);

(statearr_34794_34812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34786 === (9))){
var inst_34771 = (state_34785[(9)]);
var inst_34769 = (state_34785[(10)]);
var inst_34773 = inst_34771.call(null,inst_34769);
var state_34785__$1 = state_34785;
var statearr_34795_34813 = state_34785__$1;
(statearr_34795_34813[(2)] = inst_34773);

(statearr_34795_34813[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34786 === (5))){
var inst_34765 = (state_34785[(7)]);
var inst_34767 = figwheel.client.file_reloading.blocking_load.call(null,inst_34765);
var state_34785__$1 = state_34785;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34785__$1,(8),inst_34767);
} else {
if((state_val_34786 === (10))){
var inst_34769 = (state_34785[(10)]);
var inst_34775 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_34769);
var state_34785__$1 = state_34785;
var statearr_34796_34814 = state_34785__$1;
(statearr_34796_34814[(2)] = inst_34775);

(statearr_34796_34814[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34786 === (8))){
var inst_34771 = (state_34785[(9)]);
var inst_34765 = (state_34785[(7)]);
var inst_34769 = (state_34785[(2)]);
var inst_34770 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_34771__$1 = cljs.core.get.call(null,inst_34770,inst_34765);
var state_34785__$1 = (function (){var statearr_34797 = state_34785;
(statearr_34797[(9)] = inst_34771__$1);

(statearr_34797[(10)] = inst_34769);

return statearr_34797;
})();
if(cljs.core.truth_(inst_34771__$1)){
var statearr_34798_34815 = state_34785__$1;
(statearr_34798_34815[(1)] = (9));

} else {
var statearr_34799_34816 = state_34785__$1;
(statearr_34799_34816[(1)] = (10));

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
});})(c__29436__auto__))
;
return ((function (switch__29324__auto__,c__29436__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__29325__auto__ = null;
var figwheel$client$file_reloading$state_machine__29325__auto____0 = (function (){
var statearr_34803 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34803[(0)] = figwheel$client$file_reloading$state_machine__29325__auto__);

(statearr_34803[(1)] = (1));

return statearr_34803;
});
var figwheel$client$file_reloading$state_machine__29325__auto____1 = (function (state_34785){
while(true){
var ret_value__29326__auto__ = (function (){try{while(true){
var result__29327__auto__ = switch__29324__auto__.call(null,state_34785);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29327__auto__;
}
break;
}
}catch (e34804){if((e34804 instanceof Object)){
var ex__29328__auto__ = e34804;
var statearr_34805_34817 = state_34785;
(statearr_34805_34817[(5)] = ex__29328__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34785);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34804;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34818 = state_34785;
state_34785 = G__34818;
continue;
} else {
return ret_value__29326__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__29325__auto__ = function(state_34785){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__29325__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__29325__auto____1.call(this,state_34785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__29325__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__29325__auto____0;
figwheel$client$file_reloading$state_machine__29325__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__29325__auto____1;
return figwheel$client$file_reloading$state_machine__29325__auto__;
})()
;})(switch__29324__auto__,c__29436__auto__))
})();
var state__29438__auto__ = (function (){var statearr_34806 = f__29437__auto__.call(null);
(statearr_34806[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29436__auto__);

return statearr_34806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29438__auto__);
});})(c__29436__auto__))
);

return c__29436__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__34819,callback){
var map__34822 = p__34819;
var map__34822__$1 = ((((!((map__34822 == null)))?((((map__34822.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34822.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34822):map__34822);
var file_msg = map__34822__$1;
var namespace = cljs.core.get.call(null,map__34822__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__34822,map__34822__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__34822,map__34822__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__34824){
var map__34827 = p__34824;
var map__34827__$1 = ((((!((map__34827 == null)))?((((map__34827.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34827.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34827):map__34827);
var file_msg = map__34827__$1;
var namespace = cljs.core.get.call(null,map__34827__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__34829){
var map__34832 = p__34829;
var map__34832__$1 = ((((!((map__34832 == null)))?((((map__34832.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34832.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34832):map__34832);
var file_msg = map__34832__$1;
var namespace = cljs.core.get.call(null,map__34832__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__34834,callback){
var map__34837 = p__34834;
var map__34837__$1 = ((((!((map__34837 == null)))?((((map__34837.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34837.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34837):map__34837);
var file_msg = map__34837__$1;
var request_url = cljs.core.get.call(null,map__34837__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__34837__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__29436__auto___34941 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29436__auto___34941,out){
return (function (){
var f__29437__auto__ = (function (){var switch__29324__auto__ = ((function (c__29436__auto___34941,out){
return (function (state_34923){
var state_val_34924 = (state_34923[(1)]);
if((state_val_34924 === (1))){
var inst_34897 = cljs.core.seq.call(null,files);
var inst_34898 = cljs.core.first.call(null,inst_34897);
var inst_34899 = cljs.core.next.call(null,inst_34897);
var inst_34900 = files;
var state_34923__$1 = (function (){var statearr_34925 = state_34923;
(statearr_34925[(7)] = inst_34898);

(statearr_34925[(8)] = inst_34899);

(statearr_34925[(9)] = inst_34900);

return statearr_34925;
})();
var statearr_34926_34942 = state_34923__$1;
(statearr_34926_34942[(2)] = null);

(statearr_34926_34942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34924 === (2))){
var inst_34900 = (state_34923[(9)]);
var inst_34906 = (state_34923[(10)]);
var inst_34905 = cljs.core.seq.call(null,inst_34900);
var inst_34906__$1 = cljs.core.first.call(null,inst_34905);
var inst_34907 = cljs.core.next.call(null,inst_34905);
var inst_34908 = (inst_34906__$1 == null);
var inst_34909 = cljs.core.not.call(null,inst_34908);
var state_34923__$1 = (function (){var statearr_34927 = state_34923;
(statearr_34927[(10)] = inst_34906__$1);

(statearr_34927[(11)] = inst_34907);

return statearr_34927;
})();
if(inst_34909){
var statearr_34928_34943 = state_34923__$1;
(statearr_34928_34943[(1)] = (4));

} else {
var statearr_34929_34944 = state_34923__$1;
(statearr_34929_34944[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34924 === (3))){
var inst_34921 = (state_34923[(2)]);
var state_34923__$1 = state_34923;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34923__$1,inst_34921);
} else {
if((state_val_34924 === (4))){
var inst_34906 = (state_34923[(10)]);
var inst_34911 = figwheel.client.file_reloading.reload_js_file.call(null,inst_34906);
var state_34923__$1 = state_34923;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34923__$1,(7),inst_34911);
} else {
if((state_val_34924 === (5))){
var inst_34917 = cljs.core.async.close_BANG_.call(null,out);
var state_34923__$1 = state_34923;
var statearr_34930_34945 = state_34923__$1;
(statearr_34930_34945[(2)] = inst_34917);

(statearr_34930_34945[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34924 === (6))){
var inst_34919 = (state_34923[(2)]);
var state_34923__$1 = state_34923;
var statearr_34931_34946 = state_34923__$1;
(statearr_34931_34946[(2)] = inst_34919);

(statearr_34931_34946[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34924 === (7))){
var inst_34907 = (state_34923[(11)]);
var inst_34913 = (state_34923[(2)]);
var inst_34914 = cljs.core.async.put_BANG_.call(null,out,inst_34913);
var inst_34900 = inst_34907;
var state_34923__$1 = (function (){var statearr_34932 = state_34923;
(statearr_34932[(12)] = inst_34914);

(statearr_34932[(9)] = inst_34900);

return statearr_34932;
})();
var statearr_34933_34947 = state_34923__$1;
(statearr_34933_34947[(2)] = null);

(statearr_34933_34947[(1)] = (2));


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
});})(c__29436__auto___34941,out))
;
return ((function (switch__29324__auto__,c__29436__auto___34941,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29325__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29325__auto____0 = (function (){
var statearr_34937 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34937[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29325__auto__);

(statearr_34937[(1)] = (1));

return statearr_34937;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29325__auto____1 = (function (state_34923){
while(true){
var ret_value__29326__auto__ = (function (){try{while(true){
var result__29327__auto__ = switch__29324__auto__.call(null,state_34923);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29327__auto__;
}
break;
}
}catch (e34938){if((e34938 instanceof Object)){
var ex__29328__auto__ = e34938;
var statearr_34939_34948 = state_34923;
(statearr_34939_34948[(5)] = ex__29328__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34923);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34938;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34949 = state_34923;
state_34923 = G__34949;
continue;
} else {
return ret_value__29326__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29325__auto__ = function(state_34923){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29325__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29325__auto____1.call(this,state_34923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29325__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29325__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29325__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29325__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29325__auto__;
})()
;})(switch__29324__auto__,c__29436__auto___34941,out))
})();
var state__29438__auto__ = (function (){var statearr_34940 = f__29437__auto__.call(null);
(statearr_34940[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29436__auto___34941);

return statearr_34940;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29438__auto__);
});})(c__29436__auto___34941,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__34950,opts){
var map__34954 = p__34950;
var map__34954__$1 = ((((!((map__34954 == null)))?((((map__34954.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34954.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34954):map__34954);
var eval_body__$1 = cljs.core.get.call(null,map__34954__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__34954__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e34956){var e = e34956;
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
return (function (p1__34957_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34957_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__34966){
var vec__34967 = p__34966;
var k = cljs.core.nth.call(null,vec__34967,(0),null);
var v = cljs.core.nth.call(null,vec__34967,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__34970){
var vec__34971 = p__34970;
var k = cljs.core.nth.call(null,vec__34971,(0),null);
var v = cljs.core.nth.call(null,vec__34971,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__34977,p__34978){
var map__35225 = p__34977;
var map__35225__$1 = ((((!((map__35225 == null)))?((((map__35225.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35225.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35225):map__35225);
var opts = map__35225__$1;
var before_jsload = cljs.core.get.call(null,map__35225__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__35225__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__35225__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__35226 = p__34978;
var map__35226__$1 = ((((!((map__35226 == null)))?((((map__35226.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35226.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35226):map__35226);
var msg = map__35226__$1;
var files = cljs.core.get.call(null,map__35226__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__35226__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__35226__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__29436__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29436__auto__,map__35225,map__35225__$1,opts,before_jsload,on_jsload,reload_dependents,map__35226,map__35226__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__29437__auto__ = (function (){var switch__29324__auto__ = ((function (c__29436__auto__,map__35225,map__35225__$1,opts,before_jsload,on_jsload,reload_dependents,map__35226,map__35226__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_35379){
var state_val_35380 = (state_35379[(1)]);
if((state_val_35380 === (7))){
var inst_35241 = (state_35379[(7)]);
var inst_35243 = (state_35379[(8)]);
var inst_35242 = (state_35379[(9)]);
var inst_35240 = (state_35379[(10)]);
var inst_35248 = cljs.core._nth.call(null,inst_35241,inst_35243);
var inst_35249 = figwheel.client.file_reloading.eval_body.call(null,inst_35248,opts);
var inst_35250 = (inst_35243 + (1));
var tmp35381 = inst_35241;
var tmp35382 = inst_35242;
var tmp35383 = inst_35240;
var inst_35240__$1 = tmp35383;
var inst_35241__$1 = tmp35381;
var inst_35242__$1 = tmp35382;
var inst_35243__$1 = inst_35250;
var state_35379__$1 = (function (){var statearr_35384 = state_35379;
(statearr_35384[(11)] = inst_35249);

(statearr_35384[(7)] = inst_35241__$1);

(statearr_35384[(8)] = inst_35243__$1);

(statearr_35384[(9)] = inst_35242__$1);

(statearr_35384[(10)] = inst_35240__$1);

return statearr_35384;
})();
var statearr_35385_35471 = state_35379__$1;
(statearr_35385_35471[(2)] = null);

(statearr_35385_35471[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35380 === (20))){
var inst_35283 = (state_35379[(12)]);
var inst_35291 = figwheel.client.file_reloading.sort_files.call(null,inst_35283);
var state_35379__$1 = state_35379;
var statearr_35386_35472 = state_35379__$1;
(statearr_35386_35472[(2)] = inst_35291);

(statearr_35386_35472[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35380 === (27))){
var state_35379__$1 = state_35379;
var statearr_35387_35473 = state_35379__$1;
(statearr_35387_35473[(2)] = null);

(statearr_35387_35473[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35380 === (1))){
var inst_35232 = (state_35379[(13)]);
var inst_35229 = before_jsload.call(null,files);
var inst_35230 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_35231 = (function (){return ((function (inst_35232,inst_35229,inst_35230,state_val_35380,c__29436__auto__,map__35225,map__35225__$1,opts,before_jsload,on_jsload,reload_dependents,map__35226,map__35226__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34974_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34974_SHARP_);
});
;})(inst_35232,inst_35229,inst_35230,state_val_35380,c__29436__auto__,map__35225,map__35225__$1,opts,before_jsload,on_jsload,reload_dependents,map__35226,map__35226__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35232__$1 = cljs.core.filter.call(null,inst_35231,files);
var inst_35233 = cljs.core.not_empty.call(null,inst_35232__$1);
var state_35379__$1 = (function (){var statearr_35388 = state_35379;
(statearr_35388[(13)] = inst_35232__$1);

(statearr_35388[(14)] = inst_35230);

(statearr_35388[(15)] = inst_35229);

return statearr_35388;
})();
if(cljs.core.truth_(inst_35233)){
var statearr_35389_35474 = state_35379__$1;
(statearr_35389_35474[(1)] = (2));

} else {
var statearr_35390_35475 = state_35379__$1;
(statearr_35390_35475[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35380 === (24))){
var state_35379__$1 = state_35379;
var statearr_35391_35476 = state_35379__$1;
(statearr_35391_35476[(2)] = null);

(statearr_35391_35476[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35380 === (39))){
var inst_35333 = (state_35379[(16)]);
var state_35379__$1 = state_35379;
var statearr_35392_35477 = state_35379__$1;
(statearr_35392_35477[(2)] = inst_35333);

(statearr_35392_35477[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35380 === (46))){
var inst_35374 = (state_35379[(2)]);
var state_35379__$1 = state_35379;
var statearr_35393_35478 = state_35379__$1;
(statearr_35393_35478[(2)] = inst_35374);

(statearr_35393_35478[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35380 === (4))){
var inst_35277 = (state_35379[(2)]);
var inst_35278 = cljs.core.List.EMPTY;
var inst_35279 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_35278);
var inst_35280 = (function (){return ((function (inst_35277,inst_35278,inst_35279,state_val_35380,c__29436__auto__,map__35225,map__35225__$1,opts,before_jsload,on_jsload,reload_dependents,map__35226,map__35226__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34975_SHARP_){
var and__25977__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34975_SHARP_);
if(cljs.core.truth_(and__25977__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34975_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__34975_SHARP_)));
} else {
return and__25977__auto__;
}
});
;})(inst_35277,inst_35278,inst_35279,state_val_35380,c__29436__auto__,map__35225,map__35225__$1,opts,before_jsload,on_jsload,reload_dependents,map__35226,map__35226__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35281 = cljs.core.filter.call(null,inst_35280,files);
var inst_35282 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_35283 = cljs.core.concat.call(null,inst_35281,inst_35282);
var state_35379__$1 = (function (){var statearr_35394 = state_35379;
(statearr_35394[(17)] = inst_35279);

(statearr_35394[(12)] = inst_35283);

(statearr_35394[(18)] = inst_35277);

return statearr_35394;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_35395_35479 = state_35379__$1;
(statearr_35395_35479[(1)] = (16));

} else {
var statearr_35396_35480 = state_35379__$1;
(statearr_35396_35480[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35380 === (15))){
var inst_35267 = (state_35379[(2)]);
var state_35379__$1 = state_35379;
var statearr_35397_35481 = state_35379__$1;
(statearr_35397_35481[(2)] = inst_35267);

(statearr_35397_35481[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35380 === (21))){
var inst_35293 = (state_35379[(19)]);
var inst_35293__$1 = (state_35379[(2)]);
var inst_35294 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_35293__$1);
var state_35379__$1 = (function (){var statearr_35398 = state_35379;
(statearr_35398[(19)] = inst_35293__$1);

return statearr_35398;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35379__$1,(22),inst_35294);
} else {
if((state_val_35380 === (31))){
var inst_35377 = (state_35379[(2)]);
var state_35379__$1 = state_35379;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35379__$1,inst_35377);
} else {
if((state_val_35380 === (32))){
var inst_35333 = (state_35379[(16)]);
var inst_35338 = inst_35333.cljs$lang$protocol_mask$partition0$;
var inst_35339 = (inst_35338 & (64));
var inst_35340 = inst_35333.cljs$core$ISeq$;
var inst_35341 = (inst_35339) || (inst_35340);
var state_35379__$1 = state_35379;
if(cljs.core.truth_(inst_35341)){
var statearr_35399_35482 = state_35379__$1;
(statearr_35399_35482[(1)] = (35));

} else {
var statearr_35400_35483 = state_35379__$1;
(statearr_35400_35483[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35380 === (40))){
var inst_35354 = (state_35379[(20)]);
var inst_35353 = (state_35379[(2)]);
var inst_35354__$1 = cljs.core.get.call(null,inst_35353,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_35355 = cljs.core.get.call(null,inst_35353,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_35356 = cljs.core.not_empty.call(null,inst_35354__$1);
var state_35379__$1 = (function (){var statearr_35401 = state_35379;
(statearr_35401[(20)] = inst_35354__$1);

(statearr_35401[(21)] = inst_35355);

return statearr_35401;
})();
if(cljs.core.truth_(inst_35356)){
var statearr_35402_35484 = state_35379__$1;
(statearr_35402_35484[(1)] = (41));

} else {
var statearr_35403_35485 = state_35379__$1;
(statearr_35403_35485[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35380 === (33))){
var state_35379__$1 = state_35379;
var statearr_35404_35486 = state_35379__$1;
(statearr_35404_35486[(2)] = false);

(statearr_35404_35486[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35380 === (13))){
var inst_35253 = (state_35379[(22)]);
var inst_35257 = cljs.core.chunk_first.call(null,inst_35253);
var inst_35258 = cljs.core.chunk_rest.call(null,inst_35253);
var inst_35259 = cljs.core.count.call(null,inst_35257);
var inst_35240 = inst_35258;
var inst_35241 = inst_35257;
var inst_35242 = inst_35259;
var inst_35243 = (0);
var state_35379__$1 = (function (){var statearr_35405 = state_35379;
(statearr_35405[(7)] = inst_35241);

(statearr_35405[(8)] = inst_35243);

(statearr_35405[(9)] = inst_35242);

(statearr_35405[(10)] = inst_35240);

return statearr_35405;
})();
var statearr_35406_35487 = state_35379__$1;
(statearr_35406_35487[(2)] = null);

(statearr_35406_35487[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35380 === (22))){
var inst_35296 = (state_35379[(23)]);
var inst_35293 = (state_35379[(19)]);
var inst_35301 = (state_35379[(24)]);
var inst_35297 = (state_35379[(25)]);
var inst_35296__$1 = (state_35379[(2)]);
var inst_35297__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35296__$1);
var inst_35298 = (function (){var all_files = inst_35293;
var res_SINGLEQUOTE_ = inst_35296__$1;
var res = inst_35297__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_35296,inst_35293,inst_35301,inst_35297,inst_35296__$1,inst_35297__$1,state_val_35380,c__29436__auto__,map__35225,map__35225__$1,opts,before_jsload,on_jsload,reload_dependents,map__35226,map__35226__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34976_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__34976_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_35296,inst_35293,inst_35301,inst_35297,inst_35296__$1,inst_35297__$1,state_val_35380,c__29436__auto__,map__35225,map__35225__$1,opts,before_jsload,on_jsload,reload_dependents,map__35226,map__35226__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35299 = cljs.core.filter.call(null,inst_35298,inst_35296__$1);
var inst_35300 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_35301__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35300);
var inst_35302 = cljs.core.not_empty.call(null,inst_35301__$1);
var state_35379__$1 = (function (){var statearr_35407 = state_35379;
(statearr_35407[(23)] = inst_35296__$1);

(statearr_35407[(24)] = inst_35301__$1);

(statearr_35407[(25)] = inst_35297__$1);

(statearr_35407[(26)] = inst_35299);

return statearr_35407;
})();
if(cljs.core.truth_(inst_35302)){
var statearr_35408_35488 = state_35379__$1;
(statearr_35408_35488[(1)] = (23));

} else {
var statearr_35409_35489 = state_35379__$1;
(statearr_35409_35489[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35380 === (36))){
var state_35379__$1 = state_35379;
var statearr_35410_35490 = state_35379__$1;
(statearr_35410_35490[(2)] = false);

(statearr_35410_35490[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35380 === (41))){
var inst_35354 = (state_35379[(20)]);
var inst_35358 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_35359 = cljs.core.map.call(null,inst_35358,inst_35354);
var inst_35360 = cljs.core.pr_str.call(null,inst_35359);
var inst_35361 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_35360)].join('');
var inst_35362 = figwheel.client.utils.log.call(null,inst_35361);
var state_35379__$1 = state_35379;
var statearr_35411_35491 = state_35379__$1;
(statearr_35411_35491[(2)] = inst_35362);

(statearr_35411_35491[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35380 === (43))){
var inst_35355 = (state_35379[(21)]);
var inst_35365 = (state_35379[(2)]);
var inst_35366 = cljs.core.not_empty.call(null,inst_35355);
var state_35379__$1 = (function (){var statearr_35412 = state_35379;
(statearr_35412[(27)] = inst_35365);

return statearr_35412;
})();
if(cljs.core.truth_(inst_35366)){
var statearr_35413_35492 = state_35379__$1;
(statearr_35413_35492[(1)] = (44));

} else {
var statearr_35414_35493 = state_35379__$1;
(statearr_35414_35493[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35380 === (29))){
var inst_35296 = (state_35379[(23)]);
var inst_35293 = (state_35379[(19)]);
var inst_35333 = (state_35379[(16)]);
var inst_35301 = (state_35379[(24)]);
var inst_35297 = (state_35379[(25)]);
var inst_35299 = (state_35379[(26)]);
var inst_35329 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_35332 = (function (){var all_files = inst_35293;
var res_SINGLEQUOTE_ = inst_35296;
var res = inst_35297;
var files_not_loaded = inst_35299;
var dependencies_that_loaded = inst_35301;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35296,inst_35293,inst_35333,inst_35301,inst_35297,inst_35299,inst_35329,state_val_35380,c__29436__auto__,map__35225,map__35225__$1,opts,before_jsload,on_jsload,reload_dependents,map__35226,map__35226__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35331){
var map__35415 = p__35331;
var map__35415__$1 = ((((!((map__35415 == null)))?((((map__35415.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35415.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35415):map__35415);
var namespace = cljs.core.get.call(null,map__35415__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35296,inst_35293,inst_35333,inst_35301,inst_35297,inst_35299,inst_35329,state_val_35380,c__29436__auto__,map__35225,map__35225__$1,opts,before_jsload,on_jsload,reload_dependents,map__35226,map__35226__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35333__$1 = cljs.core.group_by.call(null,inst_35332,inst_35299);
var inst_35335 = (inst_35333__$1 == null);
var inst_35336 = cljs.core.not.call(null,inst_35335);
var state_35379__$1 = (function (){var statearr_35417 = state_35379;
(statearr_35417[(16)] = inst_35333__$1);

(statearr_35417[(28)] = inst_35329);

return statearr_35417;
})();
if(inst_35336){
var statearr_35418_35494 = state_35379__$1;
(statearr_35418_35494[(1)] = (32));

} else {
var statearr_35419_35495 = state_35379__$1;
(statearr_35419_35495[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35380 === (44))){
var inst_35355 = (state_35379[(21)]);
var inst_35368 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35355);
var inst_35369 = cljs.core.pr_str.call(null,inst_35368);
var inst_35370 = [cljs.core.str("not required: "),cljs.core.str(inst_35369)].join('');
var inst_35371 = figwheel.client.utils.log.call(null,inst_35370);
var state_35379__$1 = state_35379;
var statearr_35420_35496 = state_35379__$1;
(statearr_35420_35496[(2)] = inst_35371);

(statearr_35420_35496[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35380 === (6))){
var inst_35274 = (state_35379[(2)]);
var state_35379__$1 = state_35379;
var statearr_35421_35497 = state_35379__$1;
(statearr_35421_35497[(2)] = inst_35274);

(statearr_35421_35497[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35380 === (28))){
var inst_35299 = (state_35379[(26)]);
var inst_35326 = (state_35379[(2)]);
var inst_35327 = cljs.core.not_empty.call(null,inst_35299);
var state_35379__$1 = (function (){var statearr_35422 = state_35379;
(statearr_35422[(29)] = inst_35326);

return statearr_35422;
})();
if(cljs.core.truth_(inst_35327)){
var statearr_35423_35498 = state_35379__$1;
(statearr_35423_35498[(1)] = (29));

} else {
var statearr_35424_35499 = state_35379__$1;
(statearr_35424_35499[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35380 === (25))){
var inst_35297 = (state_35379[(25)]);
var inst_35313 = (state_35379[(2)]);
var inst_35314 = cljs.core.not_empty.call(null,inst_35297);
var state_35379__$1 = (function (){var statearr_35425 = state_35379;
(statearr_35425[(30)] = inst_35313);

return statearr_35425;
})();
if(cljs.core.truth_(inst_35314)){
var statearr_35426_35500 = state_35379__$1;
(statearr_35426_35500[(1)] = (26));

} else {
var statearr_35427_35501 = state_35379__$1;
(statearr_35427_35501[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35380 === (34))){
var inst_35348 = (state_35379[(2)]);
var state_35379__$1 = state_35379;
if(cljs.core.truth_(inst_35348)){
var statearr_35428_35502 = state_35379__$1;
(statearr_35428_35502[(1)] = (38));

} else {
var statearr_35429_35503 = state_35379__$1;
(statearr_35429_35503[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35380 === (17))){
var state_35379__$1 = state_35379;
var statearr_35430_35504 = state_35379__$1;
(statearr_35430_35504[(2)] = recompile_dependents);

(statearr_35430_35504[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35380 === (3))){
var state_35379__$1 = state_35379;
var statearr_35431_35505 = state_35379__$1;
(statearr_35431_35505[(2)] = null);

(statearr_35431_35505[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35380 === (12))){
var inst_35270 = (state_35379[(2)]);
var state_35379__$1 = state_35379;
var statearr_35432_35506 = state_35379__$1;
(statearr_35432_35506[(2)] = inst_35270);

(statearr_35432_35506[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35380 === (2))){
var inst_35232 = (state_35379[(13)]);
var inst_35239 = cljs.core.seq.call(null,inst_35232);
var inst_35240 = inst_35239;
var inst_35241 = null;
var inst_35242 = (0);
var inst_35243 = (0);
var state_35379__$1 = (function (){var statearr_35433 = state_35379;
(statearr_35433[(7)] = inst_35241);

(statearr_35433[(8)] = inst_35243);

(statearr_35433[(9)] = inst_35242);

(statearr_35433[(10)] = inst_35240);

return statearr_35433;
})();
var statearr_35434_35507 = state_35379__$1;
(statearr_35434_35507[(2)] = null);

(statearr_35434_35507[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35380 === (23))){
var inst_35296 = (state_35379[(23)]);
var inst_35293 = (state_35379[(19)]);
var inst_35301 = (state_35379[(24)]);
var inst_35297 = (state_35379[(25)]);
var inst_35299 = (state_35379[(26)]);
var inst_35304 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_35306 = (function (){var all_files = inst_35293;
var res_SINGLEQUOTE_ = inst_35296;
var res = inst_35297;
var files_not_loaded = inst_35299;
var dependencies_that_loaded = inst_35301;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35296,inst_35293,inst_35301,inst_35297,inst_35299,inst_35304,state_val_35380,c__29436__auto__,map__35225,map__35225__$1,opts,before_jsload,on_jsload,reload_dependents,map__35226,map__35226__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35305){
var map__35435 = p__35305;
var map__35435__$1 = ((((!((map__35435 == null)))?((((map__35435.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35435.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35435):map__35435);
var request_url = cljs.core.get.call(null,map__35435__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35296,inst_35293,inst_35301,inst_35297,inst_35299,inst_35304,state_val_35380,c__29436__auto__,map__35225,map__35225__$1,opts,before_jsload,on_jsload,reload_dependents,map__35226,map__35226__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35307 = cljs.core.reverse.call(null,inst_35301);
var inst_35308 = cljs.core.map.call(null,inst_35306,inst_35307);
var inst_35309 = cljs.core.pr_str.call(null,inst_35308);
var inst_35310 = figwheel.client.utils.log.call(null,inst_35309);
var state_35379__$1 = (function (){var statearr_35437 = state_35379;
(statearr_35437[(31)] = inst_35304);

return statearr_35437;
})();
var statearr_35438_35508 = state_35379__$1;
(statearr_35438_35508[(2)] = inst_35310);

(statearr_35438_35508[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35380 === (35))){
var state_35379__$1 = state_35379;
var statearr_35439_35509 = state_35379__$1;
(statearr_35439_35509[(2)] = true);

(statearr_35439_35509[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35380 === (19))){
var inst_35283 = (state_35379[(12)]);
var inst_35289 = figwheel.client.file_reloading.expand_files.call(null,inst_35283);
var state_35379__$1 = state_35379;
var statearr_35440_35510 = state_35379__$1;
(statearr_35440_35510[(2)] = inst_35289);

(statearr_35440_35510[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35380 === (11))){
var state_35379__$1 = state_35379;
var statearr_35441_35511 = state_35379__$1;
(statearr_35441_35511[(2)] = null);

(statearr_35441_35511[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35380 === (9))){
var inst_35272 = (state_35379[(2)]);
var state_35379__$1 = state_35379;
var statearr_35442_35512 = state_35379__$1;
(statearr_35442_35512[(2)] = inst_35272);

(statearr_35442_35512[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35380 === (5))){
var inst_35243 = (state_35379[(8)]);
var inst_35242 = (state_35379[(9)]);
var inst_35245 = (inst_35243 < inst_35242);
var inst_35246 = inst_35245;
var state_35379__$1 = state_35379;
if(cljs.core.truth_(inst_35246)){
var statearr_35443_35513 = state_35379__$1;
(statearr_35443_35513[(1)] = (7));

} else {
var statearr_35444_35514 = state_35379__$1;
(statearr_35444_35514[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35380 === (14))){
var inst_35253 = (state_35379[(22)]);
var inst_35262 = cljs.core.first.call(null,inst_35253);
var inst_35263 = figwheel.client.file_reloading.eval_body.call(null,inst_35262,opts);
var inst_35264 = cljs.core.next.call(null,inst_35253);
var inst_35240 = inst_35264;
var inst_35241 = null;
var inst_35242 = (0);
var inst_35243 = (0);
var state_35379__$1 = (function (){var statearr_35445 = state_35379;
(statearr_35445[(7)] = inst_35241);

(statearr_35445[(8)] = inst_35243);

(statearr_35445[(9)] = inst_35242);

(statearr_35445[(32)] = inst_35263);

(statearr_35445[(10)] = inst_35240);

return statearr_35445;
})();
var statearr_35446_35515 = state_35379__$1;
(statearr_35446_35515[(2)] = null);

(statearr_35446_35515[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35380 === (45))){
var state_35379__$1 = state_35379;
var statearr_35447_35516 = state_35379__$1;
(statearr_35447_35516[(2)] = null);

(statearr_35447_35516[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35380 === (26))){
var inst_35296 = (state_35379[(23)]);
var inst_35293 = (state_35379[(19)]);
var inst_35301 = (state_35379[(24)]);
var inst_35297 = (state_35379[(25)]);
var inst_35299 = (state_35379[(26)]);
var inst_35316 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_35318 = (function (){var all_files = inst_35293;
var res_SINGLEQUOTE_ = inst_35296;
var res = inst_35297;
var files_not_loaded = inst_35299;
var dependencies_that_loaded = inst_35301;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35296,inst_35293,inst_35301,inst_35297,inst_35299,inst_35316,state_val_35380,c__29436__auto__,map__35225,map__35225__$1,opts,before_jsload,on_jsload,reload_dependents,map__35226,map__35226__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35317){
var map__35448 = p__35317;
var map__35448__$1 = ((((!((map__35448 == null)))?((((map__35448.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35448.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35448):map__35448);
var namespace = cljs.core.get.call(null,map__35448__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__35448__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35296,inst_35293,inst_35301,inst_35297,inst_35299,inst_35316,state_val_35380,c__29436__auto__,map__35225,map__35225__$1,opts,before_jsload,on_jsload,reload_dependents,map__35226,map__35226__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35319 = cljs.core.map.call(null,inst_35318,inst_35297);
var inst_35320 = cljs.core.pr_str.call(null,inst_35319);
var inst_35321 = figwheel.client.utils.log.call(null,inst_35320);
var inst_35322 = (function (){var all_files = inst_35293;
var res_SINGLEQUOTE_ = inst_35296;
var res = inst_35297;
var files_not_loaded = inst_35299;
var dependencies_that_loaded = inst_35301;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35296,inst_35293,inst_35301,inst_35297,inst_35299,inst_35316,inst_35318,inst_35319,inst_35320,inst_35321,state_val_35380,c__29436__auto__,map__35225,map__35225__$1,opts,before_jsload,on_jsload,reload_dependents,map__35226,map__35226__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35296,inst_35293,inst_35301,inst_35297,inst_35299,inst_35316,inst_35318,inst_35319,inst_35320,inst_35321,state_val_35380,c__29436__auto__,map__35225,map__35225__$1,opts,before_jsload,on_jsload,reload_dependents,map__35226,map__35226__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35323 = setTimeout(inst_35322,(10));
var state_35379__$1 = (function (){var statearr_35450 = state_35379;
(statearr_35450[(33)] = inst_35321);

(statearr_35450[(34)] = inst_35316);

return statearr_35450;
})();
var statearr_35451_35517 = state_35379__$1;
(statearr_35451_35517[(2)] = inst_35323);

(statearr_35451_35517[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35380 === (16))){
var state_35379__$1 = state_35379;
var statearr_35452_35518 = state_35379__$1;
(statearr_35452_35518[(2)] = reload_dependents);

(statearr_35452_35518[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35380 === (38))){
var inst_35333 = (state_35379[(16)]);
var inst_35350 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35333);
var state_35379__$1 = state_35379;
var statearr_35453_35519 = state_35379__$1;
(statearr_35453_35519[(2)] = inst_35350);

(statearr_35453_35519[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35380 === (30))){
var state_35379__$1 = state_35379;
var statearr_35454_35520 = state_35379__$1;
(statearr_35454_35520[(2)] = null);

(statearr_35454_35520[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35380 === (10))){
var inst_35253 = (state_35379[(22)]);
var inst_35255 = cljs.core.chunked_seq_QMARK_.call(null,inst_35253);
var state_35379__$1 = state_35379;
if(inst_35255){
var statearr_35455_35521 = state_35379__$1;
(statearr_35455_35521[(1)] = (13));

} else {
var statearr_35456_35522 = state_35379__$1;
(statearr_35456_35522[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35380 === (18))){
var inst_35287 = (state_35379[(2)]);
var state_35379__$1 = state_35379;
if(cljs.core.truth_(inst_35287)){
var statearr_35457_35523 = state_35379__$1;
(statearr_35457_35523[(1)] = (19));

} else {
var statearr_35458_35524 = state_35379__$1;
(statearr_35458_35524[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35380 === (42))){
var state_35379__$1 = state_35379;
var statearr_35459_35525 = state_35379__$1;
(statearr_35459_35525[(2)] = null);

(statearr_35459_35525[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35380 === (37))){
var inst_35345 = (state_35379[(2)]);
var state_35379__$1 = state_35379;
var statearr_35460_35526 = state_35379__$1;
(statearr_35460_35526[(2)] = inst_35345);

(statearr_35460_35526[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35380 === (8))){
var inst_35253 = (state_35379[(22)]);
var inst_35240 = (state_35379[(10)]);
var inst_35253__$1 = cljs.core.seq.call(null,inst_35240);
var state_35379__$1 = (function (){var statearr_35461 = state_35379;
(statearr_35461[(22)] = inst_35253__$1);

return statearr_35461;
})();
if(inst_35253__$1){
var statearr_35462_35527 = state_35379__$1;
(statearr_35462_35527[(1)] = (10));

} else {
var statearr_35463_35528 = state_35379__$1;
(statearr_35463_35528[(1)] = (11));

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
});})(c__29436__auto__,map__35225,map__35225__$1,opts,before_jsload,on_jsload,reload_dependents,map__35226,map__35226__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__29324__auto__,c__29436__auto__,map__35225,map__35225__$1,opts,before_jsload,on_jsload,reload_dependents,map__35226,map__35226__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29325__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29325__auto____0 = (function (){
var statearr_35467 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35467[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__29325__auto__);

(statearr_35467[(1)] = (1));

return statearr_35467;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29325__auto____1 = (function (state_35379){
while(true){
var ret_value__29326__auto__ = (function (){try{while(true){
var result__29327__auto__ = switch__29324__auto__.call(null,state_35379);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29327__auto__;
}
break;
}
}catch (e35468){if((e35468 instanceof Object)){
var ex__29328__auto__ = e35468;
var statearr_35469_35529 = state_35379;
(statearr_35469_35529[(5)] = ex__29328__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35379);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35468;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35530 = state_35379;
state_35379 = G__35530;
continue;
} else {
return ret_value__29326__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__29325__auto__ = function(state_35379){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29325__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29325__auto____1.call(this,state_35379);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__29325__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29325__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__29325__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29325__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29325__auto__;
})()
;})(switch__29324__auto__,c__29436__auto__,map__35225,map__35225__$1,opts,before_jsload,on_jsload,reload_dependents,map__35226,map__35226__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__29438__auto__ = (function (){var statearr_35470 = f__29437__auto__.call(null);
(statearr_35470[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29436__auto__);

return statearr_35470;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29438__auto__);
});})(c__29436__auto__,map__35225,map__35225__$1,opts,before_jsload,on_jsload,reload_dependents,map__35226,map__35226__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__29436__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__35533,link){
var map__35536 = p__35533;
var map__35536__$1 = ((((!((map__35536 == null)))?((((map__35536.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35536.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35536):map__35536);
var file = cljs.core.get.call(null,map__35536__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__35536,map__35536__$1,file){
return (function (p1__35531_SHARP_,p2__35532_SHARP_){
if(cljs.core._EQ_.call(null,p1__35531_SHARP_,p2__35532_SHARP_)){
return p1__35531_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__35536,map__35536__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__35542){
var map__35543 = p__35542;
var map__35543__$1 = ((((!((map__35543 == null)))?((((map__35543.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35543.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35543):map__35543);
var match_length = cljs.core.get.call(null,map__35543__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__35543__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__35538_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__35538_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__35545_SHARP_,p2__35546_SHARP_){
return cljs.core.assoc.call(null,p1__35545_SHARP_,cljs.core.get.call(null,p2__35546_SHARP_,key),p2__35546_SHARP_);
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
var loaded_f_datas_35547 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_35547);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_35547);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__35548,p__35549){
var map__35554 = p__35548;
var map__35554__$1 = ((((!((map__35554 == null)))?((((map__35554.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35554.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35554):map__35554);
var on_cssload = cljs.core.get.call(null,map__35554__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__35555 = p__35549;
var map__35555__$1 = ((((!((map__35555 == null)))?((((map__35555.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35555.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35555):map__35555);
var files_msg = map__35555__$1;
var files = cljs.core.get.call(null,map__35555__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1500616862866