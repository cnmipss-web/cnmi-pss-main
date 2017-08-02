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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__35610_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__35610_SHARP_));
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
var seq__35611 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__35612 = null;
var count__35613 = (0);
var i__35614 = (0);
while(true){
if((i__35614 < count__35613)){
var n = cljs.core._nth.call(null,chunk__35612,i__35614);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__35615 = seq__35611;
var G__35616 = chunk__35612;
var G__35617 = count__35613;
var G__35618 = (i__35614 + (1));
seq__35611 = G__35615;
chunk__35612 = G__35616;
count__35613 = G__35617;
i__35614 = G__35618;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35611);
if(temp__4657__auto__){
var seq__35611__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35611__$1)){
var c__27872__auto__ = cljs.core.chunk_first.call(null,seq__35611__$1);
var G__35619 = cljs.core.chunk_rest.call(null,seq__35611__$1);
var G__35620 = c__27872__auto__;
var G__35621 = cljs.core.count.call(null,c__27872__auto__);
var G__35622 = (0);
seq__35611 = G__35619;
chunk__35612 = G__35620;
count__35613 = G__35621;
i__35614 = G__35622;
continue;
} else {
var n = cljs.core.first.call(null,seq__35611__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__35623 = cljs.core.next.call(null,seq__35611__$1);
var G__35624 = null;
var G__35625 = (0);
var G__35626 = (0);
seq__35611 = G__35623;
chunk__35612 = G__35624;
count__35613 = G__35625;
i__35614 = G__35626;
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

var seq__35636_35644 = cljs.core.seq.call(null,deps);
var chunk__35637_35645 = null;
var count__35638_35646 = (0);
var i__35639_35647 = (0);
while(true){
if((i__35639_35647 < count__35638_35646)){
var dep_35648 = cljs.core._nth.call(null,chunk__35637_35645,i__35639_35647);
topo_sort_helper_STAR_.call(null,dep_35648,(depth + (1)),state);

var G__35649 = seq__35636_35644;
var G__35650 = chunk__35637_35645;
var G__35651 = count__35638_35646;
var G__35652 = (i__35639_35647 + (1));
seq__35636_35644 = G__35649;
chunk__35637_35645 = G__35650;
count__35638_35646 = G__35651;
i__35639_35647 = G__35652;
continue;
} else {
var temp__4657__auto___35653 = cljs.core.seq.call(null,seq__35636_35644);
if(temp__4657__auto___35653){
var seq__35636_35654__$1 = temp__4657__auto___35653;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35636_35654__$1)){
var c__27872__auto___35655 = cljs.core.chunk_first.call(null,seq__35636_35654__$1);
var G__35656 = cljs.core.chunk_rest.call(null,seq__35636_35654__$1);
var G__35657 = c__27872__auto___35655;
var G__35658 = cljs.core.count.call(null,c__27872__auto___35655);
var G__35659 = (0);
seq__35636_35644 = G__35656;
chunk__35637_35645 = G__35657;
count__35638_35646 = G__35658;
i__35639_35647 = G__35659;
continue;
} else {
var dep_35660 = cljs.core.first.call(null,seq__35636_35654__$1);
topo_sort_helper_STAR_.call(null,dep_35660,(depth + (1)),state);

var G__35661 = cljs.core.next.call(null,seq__35636_35654__$1);
var G__35662 = null;
var G__35663 = (0);
var G__35664 = (0);
seq__35636_35644 = G__35661;
chunk__35637_35645 = G__35662;
count__35638_35646 = G__35663;
i__35639_35647 = G__35664;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__35640){
var vec__35641 = p__35640;
var seq__35642 = cljs.core.seq.call(null,vec__35641);
var first__35643 = cljs.core.first.call(null,seq__35642);
var seq__35642__$1 = cljs.core.next.call(null,seq__35642);
var x = first__35643;
var xs = seq__35642__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__35641,seq__35642,first__35643,seq__35642__$1,x,xs,get_deps__$1){
return (function (p1__35627_SHARP_){
return clojure.set.difference.call(null,p1__35627_SHARP_,x);
});})(vec__35641,seq__35642,first__35643,seq__35642__$1,x,xs,get_deps__$1))
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
var seq__35665 = cljs.core.seq.call(null,provides);
var chunk__35666 = null;
var count__35667 = (0);
var i__35668 = (0);
while(true){
if((i__35668 < count__35667)){
var prov = cljs.core._nth.call(null,chunk__35666,i__35668);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__35669_35677 = cljs.core.seq.call(null,requires);
var chunk__35670_35678 = null;
var count__35671_35679 = (0);
var i__35672_35680 = (0);
while(true){
if((i__35672_35680 < count__35671_35679)){
var req_35681 = cljs.core._nth.call(null,chunk__35670_35678,i__35672_35680);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35681,prov);

var G__35682 = seq__35669_35677;
var G__35683 = chunk__35670_35678;
var G__35684 = count__35671_35679;
var G__35685 = (i__35672_35680 + (1));
seq__35669_35677 = G__35682;
chunk__35670_35678 = G__35683;
count__35671_35679 = G__35684;
i__35672_35680 = G__35685;
continue;
} else {
var temp__4657__auto___35686 = cljs.core.seq.call(null,seq__35669_35677);
if(temp__4657__auto___35686){
var seq__35669_35687__$1 = temp__4657__auto___35686;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35669_35687__$1)){
var c__27872__auto___35688 = cljs.core.chunk_first.call(null,seq__35669_35687__$1);
var G__35689 = cljs.core.chunk_rest.call(null,seq__35669_35687__$1);
var G__35690 = c__27872__auto___35688;
var G__35691 = cljs.core.count.call(null,c__27872__auto___35688);
var G__35692 = (0);
seq__35669_35677 = G__35689;
chunk__35670_35678 = G__35690;
count__35671_35679 = G__35691;
i__35672_35680 = G__35692;
continue;
} else {
var req_35693 = cljs.core.first.call(null,seq__35669_35687__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35693,prov);

var G__35694 = cljs.core.next.call(null,seq__35669_35687__$1);
var G__35695 = null;
var G__35696 = (0);
var G__35697 = (0);
seq__35669_35677 = G__35694;
chunk__35670_35678 = G__35695;
count__35671_35679 = G__35696;
i__35672_35680 = G__35697;
continue;
}
} else {
}
}
break;
}

var G__35698 = seq__35665;
var G__35699 = chunk__35666;
var G__35700 = count__35667;
var G__35701 = (i__35668 + (1));
seq__35665 = G__35698;
chunk__35666 = G__35699;
count__35667 = G__35700;
i__35668 = G__35701;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35665);
if(temp__4657__auto__){
var seq__35665__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35665__$1)){
var c__27872__auto__ = cljs.core.chunk_first.call(null,seq__35665__$1);
var G__35702 = cljs.core.chunk_rest.call(null,seq__35665__$1);
var G__35703 = c__27872__auto__;
var G__35704 = cljs.core.count.call(null,c__27872__auto__);
var G__35705 = (0);
seq__35665 = G__35702;
chunk__35666 = G__35703;
count__35667 = G__35704;
i__35668 = G__35705;
continue;
} else {
var prov = cljs.core.first.call(null,seq__35665__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__35673_35706 = cljs.core.seq.call(null,requires);
var chunk__35674_35707 = null;
var count__35675_35708 = (0);
var i__35676_35709 = (0);
while(true){
if((i__35676_35709 < count__35675_35708)){
var req_35710 = cljs.core._nth.call(null,chunk__35674_35707,i__35676_35709);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35710,prov);

var G__35711 = seq__35673_35706;
var G__35712 = chunk__35674_35707;
var G__35713 = count__35675_35708;
var G__35714 = (i__35676_35709 + (1));
seq__35673_35706 = G__35711;
chunk__35674_35707 = G__35712;
count__35675_35708 = G__35713;
i__35676_35709 = G__35714;
continue;
} else {
var temp__4657__auto___35715__$1 = cljs.core.seq.call(null,seq__35673_35706);
if(temp__4657__auto___35715__$1){
var seq__35673_35716__$1 = temp__4657__auto___35715__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35673_35716__$1)){
var c__27872__auto___35717 = cljs.core.chunk_first.call(null,seq__35673_35716__$1);
var G__35718 = cljs.core.chunk_rest.call(null,seq__35673_35716__$1);
var G__35719 = c__27872__auto___35717;
var G__35720 = cljs.core.count.call(null,c__27872__auto___35717);
var G__35721 = (0);
seq__35673_35706 = G__35718;
chunk__35674_35707 = G__35719;
count__35675_35708 = G__35720;
i__35676_35709 = G__35721;
continue;
} else {
var req_35722 = cljs.core.first.call(null,seq__35673_35716__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35722,prov);

var G__35723 = cljs.core.next.call(null,seq__35673_35716__$1);
var G__35724 = null;
var G__35725 = (0);
var G__35726 = (0);
seq__35673_35706 = G__35723;
chunk__35674_35707 = G__35724;
count__35675_35708 = G__35725;
i__35676_35709 = G__35726;
continue;
}
} else {
}
}
break;
}

var G__35727 = cljs.core.next.call(null,seq__35665__$1);
var G__35728 = null;
var G__35729 = (0);
var G__35730 = (0);
seq__35665 = G__35727;
chunk__35666 = G__35728;
count__35667 = G__35729;
i__35668 = G__35730;
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
var seq__35731_35735 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__35732_35736 = null;
var count__35733_35737 = (0);
var i__35734_35738 = (0);
while(true){
if((i__35734_35738 < count__35733_35737)){
var ns_35739 = cljs.core._nth.call(null,chunk__35732_35736,i__35734_35738);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35739);

var G__35740 = seq__35731_35735;
var G__35741 = chunk__35732_35736;
var G__35742 = count__35733_35737;
var G__35743 = (i__35734_35738 + (1));
seq__35731_35735 = G__35740;
chunk__35732_35736 = G__35741;
count__35733_35737 = G__35742;
i__35734_35738 = G__35743;
continue;
} else {
var temp__4657__auto___35744 = cljs.core.seq.call(null,seq__35731_35735);
if(temp__4657__auto___35744){
var seq__35731_35745__$1 = temp__4657__auto___35744;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35731_35745__$1)){
var c__27872__auto___35746 = cljs.core.chunk_first.call(null,seq__35731_35745__$1);
var G__35747 = cljs.core.chunk_rest.call(null,seq__35731_35745__$1);
var G__35748 = c__27872__auto___35746;
var G__35749 = cljs.core.count.call(null,c__27872__auto___35746);
var G__35750 = (0);
seq__35731_35735 = G__35747;
chunk__35732_35736 = G__35748;
count__35733_35737 = G__35749;
i__35734_35738 = G__35750;
continue;
} else {
var ns_35751 = cljs.core.first.call(null,seq__35731_35745__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35751);

var G__35752 = cljs.core.next.call(null,seq__35731_35745__$1);
var G__35753 = null;
var G__35754 = (0);
var G__35755 = (0);
seq__35731_35735 = G__35752;
chunk__35732_35736 = G__35753;
count__35733_35737 = G__35754;
i__35734_35738 = G__35755;
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
var G__35756__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__35756 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35757__i = 0, G__35757__a = new Array(arguments.length -  0);
while (G__35757__i < G__35757__a.length) {G__35757__a[G__35757__i] = arguments[G__35757__i + 0]; ++G__35757__i;}
  args = new cljs.core.IndexedSeq(G__35757__a,0,null);
} 
return G__35756__delegate.call(this,args);};
G__35756.cljs$lang$maxFixedArity = 0;
G__35756.cljs$lang$applyTo = (function (arglist__35758){
var args = cljs.core.seq(arglist__35758);
return G__35756__delegate(args);
});
G__35756.cljs$core$IFn$_invoke$arity$variadic = G__35756__delegate;
return G__35756;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__35759 = cljs.core._EQ_;
var expr__35760 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__35759.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__35760))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__35759,expr__35760){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__35759,expr__35760))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__35759,expr__35760){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e35762){if((e35762 instanceof Error)){
var e = e35762;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35762;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__35759,expr__35760))
} else {
if(cljs.core.truth_(pred__35759.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__35760))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__35759.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__35760))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__35759.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__35760))){
return ((function (pred__35759,expr__35760){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e35763){if((e35763 instanceof Error)){
var e = e35763;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35763;

}
}})());
});
;})(pred__35759,expr__35760))
} else {
return ((function (pred__35759,expr__35760){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__35759,expr__35760))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__35764,callback){
var map__35765 = p__35764;
var map__35765__$1 = ((((!((map__35765 == null)))?((((map__35765.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35765.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35765):map__35765);
var file_msg = map__35765__$1;
var request_url = cljs.core.get.call(null,map__35765__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Attempting to load "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__35765,map__35765__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Successfully loaded "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__35765,map__35765__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__33315__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33315__auto__){
return (function (){
var f__33316__auto__ = (function (){var switch__33227__auto__ = ((function (c__33315__auto__){
return (function (state_35789){
var state_val_35790 = (state_35789[(1)]);
if((state_val_35790 === (7))){
var inst_35785 = (state_35789[(2)]);
var state_35789__$1 = state_35789;
var statearr_35791_35808 = state_35789__$1;
(statearr_35791_35808[(2)] = inst_35785);

(statearr_35791_35808[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35790 === (1))){
var state_35789__$1 = state_35789;
var statearr_35792_35809 = state_35789__$1;
(statearr_35792_35809[(2)] = null);

(statearr_35792_35809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35790 === (4))){
var inst_35769 = (state_35789[(7)]);
var inst_35769__$1 = (state_35789[(2)]);
var state_35789__$1 = (function (){var statearr_35793 = state_35789;
(statearr_35793[(7)] = inst_35769__$1);

return statearr_35793;
})();
if(cljs.core.truth_(inst_35769__$1)){
var statearr_35794_35810 = state_35789__$1;
(statearr_35794_35810[(1)] = (5));

} else {
var statearr_35795_35811 = state_35789__$1;
(statearr_35795_35811[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35790 === (6))){
var state_35789__$1 = state_35789;
var statearr_35796_35812 = state_35789__$1;
(statearr_35796_35812[(2)] = null);

(statearr_35796_35812[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35790 === (3))){
var inst_35787 = (state_35789[(2)]);
var state_35789__$1 = state_35789;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35789__$1,inst_35787);
} else {
if((state_val_35790 === (2))){
var state_35789__$1 = state_35789;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35789__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_35790 === (11))){
var inst_35781 = (state_35789[(2)]);
var state_35789__$1 = (function (){var statearr_35797 = state_35789;
(statearr_35797[(8)] = inst_35781);

return statearr_35797;
})();
var statearr_35798_35813 = state_35789__$1;
(statearr_35798_35813[(2)] = null);

(statearr_35798_35813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35790 === (9))){
var inst_35775 = (state_35789[(9)]);
var inst_35773 = (state_35789[(10)]);
var inst_35777 = inst_35775.call(null,inst_35773);
var state_35789__$1 = state_35789;
var statearr_35799_35814 = state_35789__$1;
(statearr_35799_35814[(2)] = inst_35777);

(statearr_35799_35814[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35790 === (5))){
var inst_35769 = (state_35789[(7)]);
var inst_35771 = figwheel.client.file_reloading.blocking_load.call(null,inst_35769);
var state_35789__$1 = state_35789;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35789__$1,(8),inst_35771);
} else {
if((state_val_35790 === (10))){
var inst_35773 = (state_35789[(10)]);
var inst_35779 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_35773);
var state_35789__$1 = state_35789;
var statearr_35800_35815 = state_35789__$1;
(statearr_35800_35815[(2)] = inst_35779);

(statearr_35800_35815[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35790 === (8))){
var inst_35769 = (state_35789[(7)]);
var inst_35775 = (state_35789[(9)]);
var inst_35773 = (state_35789[(2)]);
var inst_35774 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_35775__$1 = cljs.core.get.call(null,inst_35774,inst_35769);
var state_35789__$1 = (function (){var statearr_35801 = state_35789;
(statearr_35801[(9)] = inst_35775__$1);

(statearr_35801[(10)] = inst_35773);

return statearr_35801;
})();
if(cljs.core.truth_(inst_35775__$1)){
var statearr_35802_35816 = state_35789__$1;
(statearr_35802_35816[(1)] = (9));

} else {
var statearr_35803_35817 = state_35789__$1;
(statearr_35803_35817[(1)] = (10));

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
});})(c__33315__auto__))
;
return ((function (switch__33227__auto__,c__33315__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__33228__auto__ = null;
var figwheel$client$file_reloading$state_machine__33228__auto____0 = (function (){
var statearr_35804 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35804[(0)] = figwheel$client$file_reloading$state_machine__33228__auto__);

(statearr_35804[(1)] = (1));

return statearr_35804;
});
var figwheel$client$file_reloading$state_machine__33228__auto____1 = (function (state_35789){
while(true){
var ret_value__33229__auto__ = (function (){try{while(true){
var result__33230__auto__ = switch__33227__auto__.call(null,state_35789);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33230__auto__;
}
break;
}
}catch (e35805){if((e35805 instanceof Object)){
var ex__33231__auto__ = e35805;
var statearr_35806_35818 = state_35789;
(statearr_35806_35818[(5)] = ex__33231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35789);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35805;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35819 = state_35789;
state_35789 = G__35819;
continue;
} else {
return ret_value__33229__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__33228__auto__ = function(state_35789){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__33228__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__33228__auto____1.call(this,state_35789);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__33228__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__33228__auto____0;
figwheel$client$file_reloading$state_machine__33228__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__33228__auto____1;
return figwheel$client$file_reloading$state_machine__33228__auto__;
})()
;})(switch__33227__auto__,c__33315__auto__))
})();
var state__33317__auto__ = (function (){var statearr_35807 = f__33316__auto__.call(null);
(statearr_35807[(6)] = c__33315__auto__);

return statearr_35807;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33317__auto__);
});})(c__33315__auto__))
);

return c__33315__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__35820,callback){
var map__35821 = p__35820;
var map__35821__$1 = ((((!((map__35821 == null)))?((((map__35821.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35821.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35821):map__35821);
var file_msg = map__35821__$1;
var namespace = cljs.core.get.call(null,map__35821__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__35821,map__35821__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__35821,map__35821__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__35823){
var map__35824 = p__35823;
var map__35824__$1 = ((((!((map__35824 == null)))?((((map__35824.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35824.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35824):map__35824);
var file_msg = map__35824__$1;
var namespace = cljs.core.get.call(null,map__35824__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__35826){
var map__35827 = p__35826;
var map__35827__$1 = ((((!((map__35827 == null)))?((((map__35827.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35827.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35827):map__35827);
var file_msg = map__35827__$1;
var namespace = cljs.core.get.call(null,map__35827__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__35829,callback){
var map__35830 = p__35829;
var map__35830__$1 = ((((!((map__35830 == null)))?((((map__35830.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35830.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35830):map__35830);
var file_msg = map__35830__$1;
var request_url = cljs.core.get.call(null,map__35830__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__35830__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__33315__auto___35880 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33315__auto___35880,out){
return (function (){
var f__33316__auto__ = (function (){var switch__33227__auto__ = ((function (c__33315__auto___35880,out){
return (function (state_35865){
var state_val_35866 = (state_35865[(1)]);
if((state_val_35866 === (1))){
var inst_35839 = cljs.core.seq.call(null,files);
var inst_35840 = cljs.core.first.call(null,inst_35839);
var inst_35841 = cljs.core.next.call(null,inst_35839);
var inst_35842 = files;
var state_35865__$1 = (function (){var statearr_35867 = state_35865;
(statearr_35867[(7)] = inst_35842);

(statearr_35867[(8)] = inst_35841);

(statearr_35867[(9)] = inst_35840);

return statearr_35867;
})();
var statearr_35868_35881 = state_35865__$1;
(statearr_35868_35881[(2)] = null);

(statearr_35868_35881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35866 === (2))){
var inst_35842 = (state_35865[(7)]);
var inst_35848 = (state_35865[(10)]);
var inst_35847 = cljs.core.seq.call(null,inst_35842);
var inst_35848__$1 = cljs.core.first.call(null,inst_35847);
var inst_35849 = cljs.core.next.call(null,inst_35847);
var inst_35850 = (inst_35848__$1 == null);
var inst_35851 = cljs.core.not.call(null,inst_35850);
var state_35865__$1 = (function (){var statearr_35869 = state_35865;
(statearr_35869[(11)] = inst_35849);

(statearr_35869[(10)] = inst_35848__$1);

return statearr_35869;
})();
if(inst_35851){
var statearr_35870_35882 = state_35865__$1;
(statearr_35870_35882[(1)] = (4));

} else {
var statearr_35871_35883 = state_35865__$1;
(statearr_35871_35883[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35866 === (3))){
var inst_35863 = (state_35865[(2)]);
var state_35865__$1 = state_35865;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35865__$1,inst_35863);
} else {
if((state_val_35866 === (4))){
var inst_35848 = (state_35865[(10)]);
var inst_35853 = figwheel.client.file_reloading.reload_js_file.call(null,inst_35848);
var state_35865__$1 = state_35865;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35865__$1,(7),inst_35853);
} else {
if((state_val_35866 === (5))){
var inst_35859 = cljs.core.async.close_BANG_.call(null,out);
var state_35865__$1 = state_35865;
var statearr_35872_35884 = state_35865__$1;
(statearr_35872_35884[(2)] = inst_35859);

(statearr_35872_35884[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35866 === (6))){
var inst_35861 = (state_35865[(2)]);
var state_35865__$1 = state_35865;
var statearr_35873_35885 = state_35865__$1;
(statearr_35873_35885[(2)] = inst_35861);

(statearr_35873_35885[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35866 === (7))){
var inst_35849 = (state_35865[(11)]);
var inst_35855 = (state_35865[(2)]);
var inst_35856 = cljs.core.async.put_BANG_.call(null,out,inst_35855);
var inst_35842 = inst_35849;
var state_35865__$1 = (function (){var statearr_35874 = state_35865;
(statearr_35874[(12)] = inst_35856);

(statearr_35874[(7)] = inst_35842);

return statearr_35874;
})();
var statearr_35875_35886 = state_35865__$1;
(statearr_35875_35886[(2)] = null);

(statearr_35875_35886[(1)] = (2));


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
});})(c__33315__auto___35880,out))
;
return ((function (switch__33227__auto__,c__33315__auto___35880,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33228__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33228__auto____0 = (function (){
var statearr_35876 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35876[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33228__auto__);

(statearr_35876[(1)] = (1));

return statearr_35876;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33228__auto____1 = (function (state_35865){
while(true){
var ret_value__33229__auto__ = (function (){try{while(true){
var result__33230__auto__ = switch__33227__auto__.call(null,state_35865);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33230__auto__;
}
break;
}
}catch (e35877){if((e35877 instanceof Object)){
var ex__33231__auto__ = e35877;
var statearr_35878_35887 = state_35865;
(statearr_35878_35887[(5)] = ex__33231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35865);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35877;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35888 = state_35865;
state_35865 = G__35888;
continue;
} else {
return ret_value__33229__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33228__auto__ = function(state_35865){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33228__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33228__auto____1.call(this,state_35865);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33228__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33228__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33228__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33228__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33228__auto__;
})()
;})(switch__33227__auto__,c__33315__auto___35880,out))
})();
var state__33317__auto__ = (function (){var statearr_35879 = f__33316__auto__.call(null);
(statearr_35879[(6)] = c__33315__auto___35880);

return statearr_35879;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33317__auto__);
});})(c__33315__auto___35880,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__35889,opts){
var map__35890 = p__35889;
var map__35890__$1 = ((((!((map__35890 == null)))?((((map__35890.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35890.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35890):map__35890);
var eval_body = cljs.core.get.call(null,map__35890__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__35890__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e35892){var e = e35892;
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
return (function (p1__35893_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35893_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__35894){
var vec__35895 = p__35894;
var k = cljs.core.nth.call(null,vec__35895,(0),null);
var v = cljs.core.nth.call(null,vec__35895,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__35898){
var vec__35899 = p__35898;
var k = cljs.core.nth.call(null,vec__35899,(0),null);
var v = cljs.core.nth.call(null,vec__35899,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__35905,p__35906){
var map__35907 = p__35905;
var map__35907__$1 = ((((!((map__35907 == null)))?((((map__35907.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35907.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35907):map__35907);
var opts = map__35907__$1;
var before_jsload = cljs.core.get.call(null,map__35907__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__35907__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__35907__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__35908 = p__35906;
var map__35908__$1 = ((((!((map__35908 == null)))?((((map__35908.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35908.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35908):map__35908);
var msg = map__35908__$1;
var files = cljs.core.get.call(null,map__35908__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__35908__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__35908__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__33315__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33315__auto__,map__35907,map__35907__$1,opts,before_jsload,on_jsload,reload_dependents,map__35908,map__35908__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__33316__auto__ = (function (){var switch__33227__auto__ = ((function (c__33315__auto__,map__35907,map__35907__$1,opts,before_jsload,on_jsload,reload_dependents,map__35908,map__35908__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_36062){
var state_val_36063 = (state_36062[(1)]);
if((state_val_36063 === (7))){
var inst_35923 = (state_36062[(7)]);
var inst_35922 = (state_36062[(8)]);
var inst_35925 = (state_36062[(9)]);
var inst_35924 = (state_36062[(10)]);
var inst_35930 = cljs.core._nth.call(null,inst_35923,inst_35925);
var inst_35931 = figwheel.client.file_reloading.eval_body.call(null,inst_35930,opts);
var inst_35932 = (inst_35925 + (1));
var tmp36064 = inst_35923;
var tmp36065 = inst_35922;
var tmp36066 = inst_35924;
var inst_35922__$1 = tmp36065;
var inst_35923__$1 = tmp36064;
var inst_35924__$1 = tmp36066;
var inst_35925__$1 = inst_35932;
var state_36062__$1 = (function (){var statearr_36067 = state_36062;
(statearr_36067[(11)] = inst_35931);

(statearr_36067[(7)] = inst_35923__$1);

(statearr_36067[(8)] = inst_35922__$1);

(statearr_36067[(9)] = inst_35925__$1);

(statearr_36067[(10)] = inst_35924__$1);

return statearr_36067;
})();
var statearr_36068_36151 = state_36062__$1;
(statearr_36068_36151[(2)] = null);

(statearr_36068_36151[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36063 === (20))){
var inst_35965 = (state_36062[(12)]);
var inst_35973 = figwheel.client.file_reloading.sort_files.call(null,inst_35965);
var state_36062__$1 = state_36062;
var statearr_36069_36152 = state_36062__$1;
(statearr_36069_36152[(2)] = inst_35973);

(statearr_36069_36152[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36063 === (27))){
var state_36062__$1 = state_36062;
var statearr_36070_36153 = state_36062__$1;
(statearr_36070_36153[(2)] = null);

(statearr_36070_36153[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36063 === (1))){
var inst_35914 = (state_36062[(13)]);
var inst_35911 = before_jsload.call(null,files);
var inst_35912 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_35913 = (function (){return ((function (inst_35914,inst_35911,inst_35912,state_val_36063,c__33315__auto__,map__35907,map__35907__$1,opts,before_jsload,on_jsload,reload_dependents,map__35908,map__35908__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35902_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35902_SHARP_);
});
;})(inst_35914,inst_35911,inst_35912,state_val_36063,c__33315__auto__,map__35907,map__35907__$1,opts,before_jsload,on_jsload,reload_dependents,map__35908,map__35908__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35914__$1 = cljs.core.filter.call(null,inst_35913,files);
var inst_35915 = cljs.core.not_empty.call(null,inst_35914__$1);
var state_36062__$1 = (function (){var statearr_36071 = state_36062;
(statearr_36071[(14)] = inst_35912);

(statearr_36071[(13)] = inst_35914__$1);

(statearr_36071[(15)] = inst_35911);

return statearr_36071;
})();
if(cljs.core.truth_(inst_35915)){
var statearr_36072_36154 = state_36062__$1;
(statearr_36072_36154[(1)] = (2));

} else {
var statearr_36073_36155 = state_36062__$1;
(statearr_36073_36155[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36063 === (24))){
var state_36062__$1 = state_36062;
var statearr_36074_36156 = state_36062__$1;
(statearr_36074_36156[(2)] = null);

(statearr_36074_36156[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36063 === (39))){
var inst_36015 = (state_36062[(16)]);
var state_36062__$1 = state_36062;
var statearr_36075_36157 = state_36062__$1;
(statearr_36075_36157[(2)] = inst_36015);

(statearr_36075_36157[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36063 === (46))){
var inst_36057 = (state_36062[(2)]);
var state_36062__$1 = state_36062;
var statearr_36076_36158 = state_36062__$1;
(statearr_36076_36158[(2)] = inst_36057);

(statearr_36076_36158[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36063 === (4))){
var inst_35959 = (state_36062[(2)]);
var inst_35960 = cljs.core.List.EMPTY;
var inst_35961 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_35960);
var inst_35962 = (function (){return ((function (inst_35959,inst_35960,inst_35961,state_val_36063,c__33315__auto__,map__35907,map__35907__$1,opts,before_jsload,on_jsload,reload_dependents,map__35908,map__35908__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35903_SHARP_){
var and__27040__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35903_SHARP_);
if(cljs.core.truth_(and__27040__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35903_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__35903_SHARP_)));
} else {
return and__27040__auto__;
}
});
;})(inst_35959,inst_35960,inst_35961,state_val_36063,c__33315__auto__,map__35907,map__35907__$1,opts,before_jsload,on_jsload,reload_dependents,map__35908,map__35908__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35963 = cljs.core.filter.call(null,inst_35962,files);
var inst_35964 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_35965 = cljs.core.concat.call(null,inst_35963,inst_35964);
var state_36062__$1 = (function (){var statearr_36077 = state_36062;
(statearr_36077[(17)] = inst_35961);

(statearr_36077[(12)] = inst_35965);

(statearr_36077[(18)] = inst_35959);

return statearr_36077;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_36078_36159 = state_36062__$1;
(statearr_36078_36159[(1)] = (16));

} else {
var statearr_36079_36160 = state_36062__$1;
(statearr_36079_36160[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36063 === (15))){
var inst_35949 = (state_36062[(2)]);
var state_36062__$1 = state_36062;
var statearr_36080_36161 = state_36062__$1;
(statearr_36080_36161[(2)] = inst_35949);

(statearr_36080_36161[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36063 === (21))){
var inst_35975 = (state_36062[(19)]);
var inst_35975__$1 = (state_36062[(2)]);
var inst_35976 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_35975__$1);
var state_36062__$1 = (function (){var statearr_36081 = state_36062;
(statearr_36081[(19)] = inst_35975__$1);

return statearr_36081;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36062__$1,(22),inst_35976);
} else {
if((state_val_36063 === (31))){
var inst_36060 = (state_36062[(2)]);
var state_36062__$1 = state_36062;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36062__$1,inst_36060);
} else {
if((state_val_36063 === (32))){
var inst_36015 = (state_36062[(16)]);
var inst_36020 = inst_36015.cljs$lang$protocol_mask$partition0$;
var inst_36021 = (inst_36020 & (64));
var inst_36022 = inst_36015.cljs$core$ISeq$;
var inst_36023 = (cljs.core.PROTOCOL_SENTINEL === inst_36022);
var inst_36024 = (inst_36021) || (inst_36023);
var state_36062__$1 = state_36062;
if(cljs.core.truth_(inst_36024)){
var statearr_36082_36162 = state_36062__$1;
(statearr_36082_36162[(1)] = (35));

} else {
var statearr_36083_36163 = state_36062__$1;
(statearr_36083_36163[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36063 === (40))){
var inst_36037 = (state_36062[(20)]);
var inst_36036 = (state_36062[(2)]);
var inst_36037__$1 = cljs.core.get.call(null,inst_36036,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_36038 = cljs.core.get.call(null,inst_36036,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_36039 = cljs.core.not_empty.call(null,inst_36037__$1);
var state_36062__$1 = (function (){var statearr_36084 = state_36062;
(statearr_36084[(20)] = inst_36037__$1);

(statearr_36084[(21)] = inst_36038);

return statearr_36084;
})();
if(cljs.core.truth_(inst_36039)){
var statearr_36085_36164 = state_36062__$1;
(statearr_36085_36164[(1)] = (41));

} else {
var statearr_36086_36165 = state_36062__$1;
(statearr_36086_36165[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36063 === (33))){
var state_36062__$1 = state_36062;
var statearr_36087_36166 = state_36062__$1;
(statearr_36087_36166[(2)] = false);

(statearr_36087_36166[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36063 === (13))){
var inst_35935 = (state_36062[(22)]);
var inst_35939 = cljs.core.chunk_first.call(null,inst_35935);
var inst_35940 = cljs.core.chunk_rest.call(null,inst_35935);
var inst_35941 = cljs.core.count.call(null,inst_35939);
var inst_35922 = inst_35940;
var inst_35923 = inst_35939;
var inst_35924 = inst_35941;
var inst_35925 = (0);
var state_36062__$1 = (function (){var statearr_36088 = state_36062;
(statearr_36088[(7)] = inst_35923);

(statearr_36088[(8)] = inst_35922);

(statearr_36088[(9)] = inst_35925);

(statearr_36088[(10)] = inst_35924);

return statearr_36088;
})();
var statearr_36089_36167 = state_36062__$1;
(statearr_36089_36167[(2)] = null);

(statearr_36089_36167[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36063 === (22))){
var inst_35975 = (state_36062[(19)]);
var inst_35978 = (state_36062[(23)]);
var inst_35979 = (state_36062[(24)]);
var inst_35983 = (state_36062[(25)]);
var inst_35978__$1 = (state_36062[(2)]);
var inst_35979__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35978__$1);
var inst_35980 = (function (){var all_files = inst_35975;
var res_SINGLEQUOTE_ = inst_35978__$1;
var res = inst_35979__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_35975,inst_35978,inst_35979,inst_35983,inst_35978__$1,inst_35979__$1,state_val_36063,c__33315__auto__,map__35907,map__35907__$1,opts,before_jsload,on_jsload,reload_dependents,map__35908,map__35908__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35904_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__35904_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_35975,inst_35978,inst_35979,inst_35983,inst_35978__$1,inst_35979__$1,state_val_36063,c__33315__auto__,map__35907,map__35907__$1,opts,before_jsload,on_jsload,reload_dependents,map__35908,map__35908__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35981 = cljs.core.filter.call(null,inst_35980,inst_35978__$1);
var inst_35982 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_35983__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35982);
var inst_35984 = cljs.core.not_empty.call(null,inst_35983__$1);
var state_36062__$1 = (function (){var statearr_36090 = state_36062;
(statearr_36090[(23)] = inst_35978__$1);

(statearr_36090[(24)] = inst_35979__$1);

(statearr_36090[(26)] = inst_35981);

(statearr_36090[(25)] = inst_35983__$1);

return statearr_36090;
})();
if(cljs.core.truth_(inst_35984)){
var statearr_36091_36168 = state_36062__$1;
(statearr_36091_36168[(1)] = (23));

} else {
var statearr_36092_36169 = state_36062__$1;
(statearr_36092_36169[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36063 === (36))){
var state_36062__$1 = state_36062;
var statearr_36093_36170 = state_36062__$1;
(statearr_36093_36170[(2)] = false);

(statearr_36093_36170[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36063 === (41))){
var inst_36037 = (state_36062[(20)]);
var inst_36041 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_36042 = cljs.core.map.call(null,inst_36041,inst_36037);
var inst_36043 = cljs.core.pr_str.call(null,inst_36042);
var inst_36044 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("figwheel-no-load meta-data: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36043)].join('');
var inst_36045 = figwheel.client.utils.log.call(null,inst_36044);
var state_36062__$1 = state_36062;
var statearr_36094_36171 = state_36062__$1;
(statearr_36094_36171[(2)] = inst_36045);

(statearr_36094_36171[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36063 === (43))){
var inst_36038 = (state_36062[(21)]);
var inst_36048 = (state_36062[(2)]);
var inst_36049 = cljs.core.not_empty.call(null,inst_36038);
var state_36062__$1 = (function (){var statearr_36095 = state_36062;
(statearr_36095[(27)] = inst_36048);

return statearr_36095;
})();
if(cljs.core.truth_(inst_36049)){
var statearr_36096_36172 = state_36062__$1;
(statearr_36096_36172[(1)] = (44));

} else {
var statearr_36097_36173 = state_36062__$1;
(statearr_36097_36173[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36063 === (29))){
var inst_35975 = (state_36062[(19)]);
var inst_35978 = (state_36062[(23)]);
var inst_35979 = (state_36062[(24)]);
var inst_36015 = (state_36062[(16)]);
var inst_35981 = (state_36062[(26)]);
var inst_35983 = (state_36062[(25)]);
var inst_36011 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_36014 = (function (){var all_files = inst_35975;
var res_SINGLEQUOTE_ = inst_35978;
var res = inst_35979;
var files_not_loaded = inst_35981;
var dependencies_that_loaded = inst_35983;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35975,inst_35978,inst_35979,inst_36015,inst_35981,inst_35983,inst_36011,state_val_36063,c__33315__auto__,map__35907,map__35907__$1,opts,before_jsload,on_jsload,reload_dependents,map__35908,map__35908__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36013){
var map__36098 = p__36013;
var map__36098__$1 = ((((!((map__36098 == null)))?((((map__36098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36098.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36098):map__36098);
var namespace = cljs.core.get.call(null,map__36098__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35975,inst_35978,inst_35979,inst_36015,inst_35981,inst_35983,inst_36011,state_val_36063,c__33315__auto__,map__35907,map__35907__$1,opts,before_jsload,on_jsload,reload_dependents,map__35908,map__35908__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36015__$1 = cljs.core.group_by.call(null,inst_36014,inst_35981);
var inst_36017 = (inst_36015__$1 == null);
var inst_36018 = cljs.core.not.call(null,inst_36017);
var state_36062__$1 = (function (){var statearr_36100 = state_36062;
(statearr_36100[(16)] = inst_36015__$1);

(statearr_36100[(28)] = inst_36011);

return statearr_36100;
})();
if(inst_36018){
var statearr_36101_36174 = state_36062__$1;
(statearr_36101_36174[(1)] = (32));

} else {
var statearr_36102_36175 = state_36062__$1;
(statearr_36102_36175[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36063 === (44))){
var inst_36038 = (state_36062[(21)]);
var inst_36051 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36038);
var inst_36052 = cljs.core.pr_str.call(null,inst_36051);
var inst_36053 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("not required: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36052)].join('');
var inst_36054 = figwheel.client.utils.log.call(null,inst_36053);
var state_36062__$1 = state_36062;
var statearr_36103_36176 = state_36062__$1;
(statearr_36103_36176[(2)] = inst_36054);

(statearr_36103_36176[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36063 === (6))){
var inst_35956 = (state_36062[(2)]);
var state_36062__$1 = state_36062;
var statearr_36104_36177 = state_36062__$1;
(statearr_36104_36177[(2)] = inst_35956);

(statearr_36104_36177[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36063 === (28))){
var inst_35981 = (state_36062[(26)]);
var inst_36008 = (state_36062[(2)]);
var inst_36009 = cljs.core.not_empty.call(null,inst_35981);
var state_36062__$1 = (function (){var statearr_36105 = state_36062;
(statearr_36105[(29)] = inst_36008);

return statearr_36105;
})();
if(cljs.core.truth_(inst_36009)){
var statearr_36106_36178 = state_36062__$1;
(statearr_36106_36178[(1)] = (29));

} else {
var statearr_36107_36179 = state_36062__$1;
(statearr_36107_36179[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36063 === (25))){
var inst_35979 = (state_36062[(24)]);
var inst_35995 = (state_36062[(2)]);
var inst_35996 = cljs.core.not_empty.call(null,inst_35979);
var state_36062__$1 = (function (){var statearr_36108 = state_36062;
(statearr_36108[(30)] = inst_35995);

return statearr_36108;
})();
if(cljs.core.truth_(inst_35996)){
var statearr_36109_36180 = state_36062__$1;
(statearr_36109_36180[(1)] = (26));

} else {
var statearr_36110_36181 = state_36062__$1;
(statearr_36110_36181[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36063 === (34))){
var inst_36031 = (state_36062[(2)]);
var state_36062__$1 = state_36062;
if(cljs.core.truth_(inst_36031)){
var statearr_36111_36182 = state_36062__$1;
(statearr_36111_36182[(1)] = (38));

} else {
var statearr_36112_36183 = state_36062__$1;
(statearr_36112_36183[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36063 === (17))){
var state_36062__$1 = state_36062;
var statearr_36113_36184 = state_36062__$1;
(statearr_36113_36184[(2)] = recompile_dependents);

(statearr_36113_36184[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36063 === (3))){
var state_36062__$1 = state_36062;
var statearr_36114_36185 = state_36062__$1;
(statearr_36114_36185[(2)] = null);

(statearr_36114_36185[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36063 === (12))){
var inst_35952 = (state_36062[(2)]);
var state_36062__$1 = state_36062;
var statearr_36115_36186 = state_36062__$1;
(statearr_36115_36186[(2)] = inst_35952);

(statearr_36115_36186[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36063 === (2))){
var inst_35914 = (state_36062[(13)]);
var inst_35921 = cljs.core.seq.call(null,inst_35914);
var inst_35922 = inst_35921;
var inst_35923 = null;
var inst_35924 = (0);
var inst_35925 = (0);
var state_36062__$1 = (function (){var statearr_36116 = state_36062;
(statearr_36116[(7)] = inst_35923);

(statearr_36116[(8)] = inst_35922);

(statearr_36116[(9)] = inst_35925);

(statearr_36116[(10)] = inst_35924);

return statearr_36116;
})();
var statearr_36117_36187 = state_36062__$1;
(statearr_36117_36187[(2)] = null);

(statearr_36117_36187[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36063 === (23))){
var inst_35975 = (state_36062[(19)]);
var inst_35978 = (state_36062[(23)]);
var inst_35979 = (state_36062[(24)]);
var inst_35981 = (state_36062[(26)]);
var inst_35983 = (state_36062[(25)]);
var inst_35986 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_35988 = (function (){var all_files = inst_35975;
var res_SINGLEQUOTE_ = inst_35978;
var res = inst_35979;
var files_not_loaded = inst_35981;
var dependencies_that_loaded = inst_35983;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35975,inst_35978,inst_35979,inst_35981,inst_35983,inst_35986,state_val_36063,c__33315__auto__,map__35907,map__35907__$1,opts,before_jsload,on_jsload,reload_dependents,map__35908,map__35908__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35987){
var map__36118 = p__35987;
var map__36118__$1 = ((((!((map__36118 == null)))?((((map__36118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36118.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36118):map__36118);
var request_url = cljs.core.get.call(null,map__36118__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35975,inst_35978,inst_35979,inst_35981,inst_35983,inst_35986,state_val_36063,c__33315__auto__,map__35907,map__35907__$1,opts,before_jsload,on_jsload,reload_dependents,map__35908,map__35908__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35989 = cljs.core.reverse.call(null,inst_35983);
var inst_35990 = cljs.core.map.call(null,inst_35988,inst_35989);
var inst_35991 = cljs.core.pr_str.call(null,inst_35990);
var inst_35992 = figwheel.client.utils.log.call(null,inst_35991);
var state_36062__$1 = (function (){var statearr_36120 = state_36062;
(statearr_36120[(31)] = inst_35986);

return statearr_36120;
})();
var statearr_36121_36188 = state_36062__$1;
(statearr_36121_36188[(2)] = inst_35992);

(statearr_36121_36188[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36063 === (35))){
var state_36062__$1 = state_36062;
var statearr_36122_36189 = state_36062__$1;
(statearr_36122_36189[(2)] = true);

(statearr_36122_36189[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36063 === (19))){
var inst_35965 = (state_36062[(12)]);
var inst_35971 = figwheel.client.file_reloading.expand_files.call(null,inst_35965);
var state_36062__$1 = state_36062;
var statearr_36123_36190 = state_36062__$1;
(statearr_36123_36190[(2)] = inst_35971);

(statearr_36123_36190[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36063 === (11))){
var state_36062__$1 = state_36062;
var statearr_36124_36191 = state_36062__$1;
(statearr_36124_36191[(2)] = null);

(statearr_36124_36191[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36063 === (9))){
var inst_35954 = (state_36062[(2)]);
var state_36062__$1 = state_36062;
var statearr_36125_36192 = state_36062__$1;
(statearr_36125_36192[(2)] = inst_35954);

(statearr_36125_36192[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36063 === (5))){
var inst_35925 = (state_36062[(9)]);
var inst_35924 = (state_36062[(10)]);
var inst_35927 = (inst_35925 < inst_35924);
var inst_35928 = inst_35927;
var state_36062__$1 = state_36062;
if(cljs.core.truth_(inst_35928)){
var statearr_36126_36193 = state_36062__$1;
(statearr_36126_36193[(1)] = (7));

} else {
var statearr_36127_36194 = state_36062__$1;
(statearr_36127_36194[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36063 === (14))){
var inst_35935 = (state_36062[(22)]);
var inst_35944 = cljs.core.first.call(null,inst_35935);
var inst_35945 = figwheel.client.file_reloading.eval_body.call(null,inst_35944,opts);
var inst_35946 = cljs.core.next.call(null,inst_35935);
var inst_35922 = inst_35946;
var inst_35923 = null;
var inst_35924 = (0);
var inst_35925 = (0);
var state_36062__$1 = (function (){var statearr_36128 = state_36062;
(statearr_36128[(7)] = inst_35923);

(statearr_36128[(8)] = inst_35922);

(statearr_36128[(9)] = inst_35925);

(statearr_36128[(10)] = inst_35924);

(statearr_36128[(32)] = inst_35945);

return statearr_36128;
})();
var statearr_36129_36195 = state_36062__$1;
(statearr_36129_36195[(2)] = null);

(statearr_36129_36195[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36063 === (45))){
var state_36062__$1 = state_36062;
var statearr_36130_36196 = state_36062__$1;
(statearr_36130_36196[(2)] = null);

(statearr_36130_36196[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36063 === (26))){
var inst_35975 = (state_36062[(19)]);
var inst_35978 = (state_36062[(23)]);
var inst_35979 = (state_36062[(24)]);
var inst_35981 = (state_36062[(26)]);
var inst_35983 = (state_36062[(25)]);
var inst_35998 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_36000 = (function (){var all_files = inst_35975;
var res_SINGLEQUOTE_ = inst_35978;
var res = inst_35979;
var files_not_loaded = inst_35981;
var dependencies_that_loaded = inst_35983;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35975,inst_35978,inst_35979,inst_35981,inst_35983,inst_35998,state_val_36063,c__33315__auto__,map__35907,map__35907__$1,opts,before_jsload,on_jsload,reload_dependents,map__35908,map__35908__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35999){
var map__36131 = p__35999;
var map__36131__$1 = ((((!((map__36131 == null)))?((((map__36131.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36131.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36131):map__36131);
var namespace = cljs.core.get.call(null,map__36131__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__36131__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35975,inst_35978,inst_35979,inst_35981,inst_35983,inst_35998,state_val_36063,c__33315__auto__,map__35907,map__35907__$1,opts,before_jsload,on_jsload,reload_dependents,map__35908,map__35908__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36001 = cljs.core.map.call(null,inst_36000,inst_35979);
var inst_36002 = cljs.core.pr_str.call(null,inst_36001);
var inst_36003 = figwheel.client.utils.log.call(null,inst_36002);
var inst_36004 = (function (){var all_files = inst_35975;
var res_SINGLEQUOTE_ = inst_35978;
var res = inst_35979;
var files_not_loaded = inst_35981;
var dependencies_that_loaded = inst_35983;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35975,inst_35978,inst_35979,inst_35981,inst_35983,inst_35998,inst_36000,inst_36001,inst_36002,inst_36003,state_val_36063,c__33315__auto__,map__35907,map__35907__$1,opts,before_jsload,on_jsload,reload_dependents,map__35908,map__35908__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35975,inst_35978,inst_35979,inst_35981,inst_35983,inst_35998,inst_36000,inst_36001,inst_36002,inst_36003,state_val_36063,c__33315__auto__,map__35907,map__35907__$1,opts,before_jsload,on_jsload,reload_dependents,map__35908,map__35908__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36005 = setTimeout(inst_36004,(10));
var state_36062__$1 = (function (){var statearr_36133 = state_36062;
(statearr_36133[(33)] = inst_35998);

(statearr_36133[(34)] = inst_36003);

return statearr_36133;
})();
var statearr_36134_36197 = state_36062__$1;
(statearr_36134_36197[(2)] = inst_36005);

(statearr_36134_36197[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36063 === (16))){
var state_36062__$1 = state_36062;
var statearr_36135_36198 = state_36062__$1;
(statearr_36135_36198[(2)] = reload_dependents);

(statearr_36135_36198[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36063 === (38))){
var inst_36015 = (state_36062[(16)]);
var inst_36033 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36015);
var state_36062__$1 = state_36062;
var statearr_36136_36199 = state_36062__$1;
(statearr_36136_36199[(2)] = inst_36033);

(statearr_36136_36199[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36063 === (30))){
var state_36062__$1 = state_36062;
var statearr_36137_36200 = state_36062__$1;
(statearr_36137_36200[(2)] = null);

(statearr_36137_36200[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36063 === (10))){
var inst_35935 = (state_36062[(22)]);
var inst_35937 = cljs.core.chunked_seq_QMARK_.call(null,inst_35935);
var state_36062__$1 = state_36062;
if(inst_35937){
var statearr_36138_36201 = state_36062__$1;
(statearr_36138_36201[(1)] = (13));

} else {
var statearr_36139_36202 = state_36062__$1;
(statearr_36139_36202[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36063 === (18))){
var inst_35969 = (state_36062[(2)]);
var state_36062__$1 = state_36062;
if(cljs.core.truth_(inst_35969)){
var statearr_36140_36203 = state_36062__$1;
(statearr_36140_36203[(1)] = (19));

} else {
var statearr_36141_36204 = state_36062__$1;
(statearr_36141_36204[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36063 === (42))){
var state_36062__$1 = state_36062;
var statearr_36142_36205 = state_36062__$1;
(statearr_36142_36205[(2)] = null);

(statearr_36142_36205[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36063 === (37))){
var inst_36028 = (state_36062[(2)]);
var state_36062__$1 = state_36062;
var statearr_36143_36206 = state_36062__$1;
(statearr_36143_36206[(2)] = inst_36028);

(statearr_36143_36206[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36063 === (8))){
var inst_35922 = (state_36062[(8)]);
var inst_35935 = (state_36062[(22)]);
var inst_35935__$1 = cljs.core.seq.call(null,inst_35922);
var state_36062__$1 = (function (){var statearr_36144 = state_36062;
(statearr_36144[(22)] = inst_35935__$1);

return statearr_36144;
})();
if(inst_35935__$1){
var statearr_36145_36207 = state_36062__$1;
(statearr_36145_36207[(1)] = (10));

} else {
var statearr_36146_36208 = state_36062__$1;
(statearr_36146_36208[(1)] = (11));

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
});})(c__33315__auto__,map__35907,map__35907__$1,opts,before_jsload,on_jsload,reload_dependents,map__35908,map__35908__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__33227__auto__,c__33315__auto__,map__35907,map__35907__$1,opts,before_jsload,on_jsload,reload_dependents,map__35908,map__35908__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33228__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33228__auto____0 = (function (){
var statearr_36147 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36147[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__33228__auto__);

(statearr_36147[(1)] = (1));

return statearr_36147;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33228__auto____1 = (function (state_36062){
while(true){
var ret_value__33229__auto__ = (function (){try{while(true){
var result__33230__auto__ = switch__33227__auto__.call(null,state_36062);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33230__auto__;
}
break;
}
}catch (e36148){if((e36148 instanceof Object)){
var ex__33231__auto__ = e36148;
var statearr_36149_36209 = state_36062;
(statearr_36149_36209[(5)] = ex__33231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36062);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36148;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36210 = state_36062;
state_36062 = G__36210;
continue;
} else {
return ret_value__33229__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__33228__auto__ = function(state_36062){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33228__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33228__auto____1.call(this,state_36062);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__33228__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33228__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__33228__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33228__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33228__auto__;
})()
;})(switch__33227__auto__,c__33315__auto__,map__35907,map__35907__$1,opts,before_jsload,on_jsload,reload_dependents,map__35908,map__35908__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__33317__auto__ = (function (){var statearr_36150 = f__33316__auto__.call(null);
(statearr_36150[(6)] = c__33315__auto__);

return statearr_36150;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33317__auto__);
});})(c__33315__auto__,map__35907,map__35907__$1,opts,before_jsload,on_jsload,reload_dependents,map__35908,map__35908__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__33315__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),cljs.core.str.cljs$core$IFn$_invoke$arity$1("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__36213,link){
var map__36214 = p__36213;
var map__36214__$1 = ((((!((map__36214 == null)))?((((map__36214.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36214.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36214):map__36214);
var file = cljs.core.get.call(null,map__36214__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__36214,map__36214__$1,file){
return (function (p1__36211_SHARP_,p2__36212_SHARP_){
if(cljs.core._EQ_.call(null,p1__36211_SHARP_,p2__36212_SHARP_)){
return p1__36211_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__36214,map__36214__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__36217){
var map__36218 = p__36217;
var map__36218__$1 = ((((!((map__36218 == null)))?((((map__36218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36218.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36218):map__36218);
var match_length = cljs.core.get.call(null,map__36218__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__36218__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__36216_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__36216_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__36220_SHARP_,p2__36221_SHARP_){
return cljs.core.assoc.call(null,p1__36220_SHARP_,cljs.core.get.call(null,p2__36221_SHARP_,key),p2__36221_SHARP_);
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
var loaded_f_datas_36222 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_36222);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_36222);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__36223,p__36224){
var map__36225 = p__36223;
var map__36225__$1 = ((((!((map__36225 == null)))?((((map__36225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36225.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36225):map__36225);
var on_cssload = cljs.core.get.call(null,map__36225__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__36226 = p__36224;
var map__36226__$1 = ((((!((map__36226 == null)))?((((map__36226.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36226.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36226):map__36226);
var files_msg = map__36226__$1;
var files = cljs.core.get.call(null,map__36226__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1501628491710