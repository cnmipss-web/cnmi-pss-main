// Compiled by ClojureScript 1.9.671 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__47792){
var map__47793 = p__47792;
var map__47793__$1 = ((((!((map__47793 == null)))?((((map__47793.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47793.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47793):map__47793);
var m = map__47793__$1;
var n = cljs.core.get.call(null,map__47793__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__47793__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__47795_47817 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__47796_47818 = null;
var count__47797_47819 = (0);
var i__47798_47820 = (0);
while(true){
if((i__47798_47820 < count__47797_47819)){
var f_47821 = cljs.core._nth.call(null,chunk__47796_47818,i__47798_47820);
cljs.core.println.call(null,"  ",f_47821);

var G__47822 = seq__47795_47817;
var G__47823 = chunk__47796_47818;
var G__47824 = count__47797_47819;
var G__47825 = (i__47798_47820 + (1));
seq__47795_47817 = G__47822;
chunk__47796_47818 = G__47823;
count__47797_47819 = G__47824;
i__47798_47820 = G__47825;
continue;
} else {
var temp__4657__auto___47826 = cljs.core.seq.call(null,seq__47795_47817);
if(temp__4657__auto___47826){
var seq__47795_47827__$1 = temp__4657__auto___47826;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47795_47827__$1)){
var c__37577__auto___47828 = cljs.core.chunk_first.call(null,seq__47795_47827__$1);
var G__47829 = cljs.core.chunk_rest.call(null,seq__47795_47827__$1);
var G__47830 = c__37577__auto___47828;
var G__47831 = cljs.core.count.call(null,c__37577__auto___47828);
var G__47832 = (0);
seq__47795_47817 = G__47829;
chunk__47796_47818 = G__47830;
count__47797_47819 = G__47831;
i__47798_47820 = G__47832;
continue;
} else {
var f_47833 = cljs.core.first.call(null,seq__47795_47827__$1);
cljs.core.println.call(null,"  ",f_47833);

var G__47834 = cljs.core.next.call(null,seq__47795_47827__$1);
var G__47835 = null;
var G__47836 = (0);
var G__47837 = (0);
seq__47795_47817 = G__47834;
chunk__47796_47818 = G__47835;
count__47797_47819 = G__47836;
i__47798_47820 = G__47837;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_47838 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__36757__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__36757__auto__)){
return or__36757__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_47838);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_47838)))?cljs.core.second.call(null,arglists_47838):arglists_47838));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/special_forms#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__47799_47839 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__47800_47840 = null;
var count__47801_47841 = (0);
var i__47802_47842 = (0);
while(true){
if((i__47802_47842 < count__47801_47841)){
var vec__47803_47843 = cljs.core._nth.call(null,chunk__47800_47840,i__47802_47842);
var name_47844 = cljs.core.nth.call(null,vec__47803_47843,(0),null);
var map__47806_47845 = cljs.core.nth.call(null,vec__47803_47843,(1),null);
var map__47806_47846__$1 = ((((!((map__47806_47845 == null)))?((((map__47806_47845.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47806_47845.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47806_47845):map__47806_47845);
var doc_47847 = cljs.core.get.call(null,map__47806_47846__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_47848 = cljs.core.get.call(null,map__47806_47846__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_47844);

cljs.core.println.call(null," ",arglists_47848);

if(cljs.core.truth_(doc_47847)){
cljs.core.println.call(null," ",doc_47847);
} else {
}

var G__47849 = seq__47799_47839;
var G__47850 = chunk__47800_47840;
var G__47851 = count__47801_47841;
var G__47852 = (i__47802_47842 + (1));
seq__47799_47839 = G__47849;
chunk__47800_47840 = G__47850;
count__47801_47841 = G__47851;
i__47802_47842 = G__47852;
continue;
} else {
var temp__4657__auto___47853 = cljs.core.seq.call(null,seq__47799_47839);
if(temp__4657__auto___47853){
var seq__47799_47854__$1 = temp__4657__auto___47853;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47799_47854__$1)){
var c__37577__auto___47855 = cljs.core.chunk_first.call(null,seq__47799_47854__$1);
var G__47856 = cljs.core.chunk_rest.call(null,seq__47799_47854__$1);
var G__47857 = c__37577__auto___47855;
var G__47858 = cljs.core.count.call(null,c__37577__auto___47855);
var G__47859 = (0);
seq__47799_47839 = G__47856;
chunk__47800_47840 = G__47857;
count__47801_47841 = G__47858;
i__47802_47842 = G__47859;
continue;
} else {
var vec__47808_47860 = cljs.core.first.call(null,seq__47799_47854__$1);
var name_47861 = cljs.core.nth.call(null,vec__47808_47860,(0),null);
var map__47811_47862 = cljs.core.nth.call(null,vec__47808_47860,(1),null);
var map__47811_47863__$1 = ((((!((map__47811_47862 == null)))?((((map__47811_47862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47811_47862.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47811_47862):map__47811_47862);
var doc_47864 = cljs.core.get.call(null,map__47811_47863__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_47865 = cljs.core.get.call(null,map__47811_47863__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_47861);

cljs.core.println.call(null," ",arglists_47865);

if(cljs.core.truth_(doc_47864)){
cljs.core.println.call(null," ",doc_47864);
} else {
}

var G__47866 = cljs.core.next.call(null,seq__47799_47854__$1);
var G__47867 = null;
var G__47868 = (0);
var G__47869 = (0);
seq__47799_47839 = G__47866;
chunk__47800_47840 = G__47867;
count__47801_47841 = G__47868;
i__47802_47842 = G__47869;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__47813 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__47814 = null;
var count__47815 = (0);
var i__47816 = (0);
while(true){
if((i__47816 < count__47815)){
var role = cljs.core._nth.call(null,chunk__47814,i__47816);
var temp__4657__auto___47870__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___47870__$1)){
var spec_47871 = temp__4657__auto___47870__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_47871));
} else {
}

var G__47872 = seq__47813;
var G__47873 = chunk__47814;
var G__47874 = count__47815;
var G__47875 = (i__47816 + (1));
seq__47813 = G__47872;
chunk__47814 = G__47873;
count__47815 = G__47874;
i__47816 = G__47875;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__47813);
if(temp__4657__auto____$1){
var seq__47813__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47813__$1)){
var c__37577__auto__ = cljs.core.chunk_first.call(null,seq__47813__$1);
var G__47876 = cljs.core.chunk_rest.call(null,seq__47813__$1);
var G__47877 = c__37577__auto__;
var G__47878 = cljs.core.count.call(null,c__37577__auto__);
var G__47879 = (0);
seq__47813 = G__47876;
chunk__47814 = G__47877;
count__47815 = G__47878;
i__47816 = G__47879;
continue;
} else {
var role = cljs.core.first.call(null,seq__47813__$1);
var temp__4657__auto___47880__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___47880__$2)){
var spec_47881 = temp__4657__auto___47880__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_47881));
} else {
}

var G__47882 = cljs.core.next.call(null,seq__47813__$1);
var G__47883 = null;
var G__47884 = (0);
var G__47885 = (0);
seq__47813 = G__47882;
chunk__47814 = G__47883;
count__47815 = G__47884;
i__47816 = G__47885;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1503441680454