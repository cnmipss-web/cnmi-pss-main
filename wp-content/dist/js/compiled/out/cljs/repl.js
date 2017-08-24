// Compiled by ClojureScript 1.9.671 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__47795){
var map__47796 = p__47795;
var map__47796__$1 = ((((!((map__47796 == null)))?((((map__47796.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47796.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47796):map__47796);
var m = map__47796__$1;
var n = cljs.core.get.call(null,map__47796__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__47796__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__47798_47820 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__47799_47821 = null;
var count__47800_47822 = (0);
var i__47801_47823 = (0);
while(true){
if((i__47801_47823 < count__47800_47822)){
var f_47824 = cljs.core._nth.call(null,chunk__47799_47821,i__47801_47823);
cljs.core.println.call(null,"  ",f_47824);

var G__47825 = seq__47798_47820;
var G__47826 = chunk__47799_47821;
var G__47827 = count__47800_47822;
var G__47828 = (i__47801_47823 + (1));
seq__47798_47820 = G__47825;
chunk__47799_47821 = G__47826;
count__47800_47822 = G__47827;
i__47801_47823 = G__47828;
continue;
} else {
var temp__4657__auto___47829 = cljs.core.seq.call(null,seq__47798_47820);
if(temp__4657__auto___47829){
var seq__47798_47830__$1 = temp__4657__auto___47829;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47798_47830__$1)){
var c__37576__auto___47831 = cljs.core.chunk_first.call(null,seq__47798_47830__$1);
var G__47832 = cljs.core.chunk_rest.call(null,seq__47798_47830__$1);
var G__47833 = c__37576__auto___47831;
var G__47834 = cljs.core.count.call(null,c__37576__auto___47831);
var G__47835 = (0);
seq__47798_47820 = G__47832;
chunk__47799_47821 = G__47833;
count__47800_47822 = G__47834;
i__47801_47823 = G__47835;
continue;
} else {
var f_47836 = cljs.core.first.call(null,seq__47798_47830__$1);
cljs.core.println.call(null,"  ",f_47836);

var G__47837 = cljs.core.next.call(null,seq__47798_47830__$1);
var G__47838 = null;
var G__47839 = (0);
var G__47840 = (0);
seq__47798_47820 = G__47837;
chunk__47799_47821 = G__47838;
count__47800_47822 = G__47839;
i__47801_47823 = G__47840;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_47841 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__36756__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__36756__auto__)){
return or__36756__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_47841);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_47841)))?cljs.core.second.call(null,arglists_47841):arglists_47841));
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
var seq__47802_47842 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__47803_47843 = null;
var count__47804_47844 = (0);
var i__47805_47845 = (0);
while(true){
if((i__47805_47845 < count__47804_47844)){
var vec__47806_47846 = cljs.core._nth.call(null,chunk__47803_47843,i__47805_47845);
var name_47847 = cljs.core.nth.call(null,vec__47806_47846,(0),null);
var map__47809_47848 = cljs.core.nth.call(null,vec__47806_47846,(1),null);
var map__47809_47849__$1 = ((((!((map__47809_47848 == null)))?((((map__47809_47848.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47809_47848.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47809_47848):map__47809_47848);
var doc_47850 = cljs.core.get.call(null,map__47809_47849__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_47851 = cljs.core.get.call(null,map__47809_47849__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_47847);

cljs.core.println.call(null," ",arglists_47851);

if(cljs.core.truth_(doc_47850)){
cljs.core.println.call(null," ",doc_47850);
} else {
}

var G__47852 = seq__47802_47842;
var G__47853 = chunk__47803_47843;
var G__47854 = count__47804_47844;
var G__47855 = (i__47805_47845 + (1));
seq__47802_47842 = G__47852;
chunk__47803_47843 = G__47853;
count__47804_47844 = G__47854;
i__47805_47845 = G__47855;
continue;
} else {
var temp__4657__auto___47856 = cljs.core.seq.call(null,seq__47802_47842);
if(temp__4657__auto___47856){
var seq__47802_47857__$1 = temp__4657__auto___47856;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47802_47857__$1)){
var c__37576__auto___47858 = cljs.core.chunk_first.call(null,seq__47802_47857__$1);
var G__47859 = cljs.core.chunk_rest.call(null,seq__47802_47857__$1);
var G__47860 = c__37576__auto___47858;
var G__47861 = cljs.core.count.call(null,c__37576__auto___47858);
var G__47862 = (0);
seq__47802_47842 = G__47859;
chunk__47803_47843 = G__47860;
count__47804_47844 = G__47861;
i__47805_47845 = G__47862;
continue;
} else {
var vec__47811_47863 = cljs.core.first.call(null,seq__47802_47857__$1);
var name_47864 = cljs.core.nth.call(null,vec__47811_47863,(0),null);
var map__47814_47865 = cljs.core.nth.call(null,vec__47811_47863,(1),null);
var map__47814_47866__$1 = ((((!((map__47814_47865 == null)))?((((map__47814_47865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47814_47865.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47814_47865):map__47814_47865);
var doc_47867 = cljs.core.get.call(null,map__47814_47866__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_47868 = cljs.core.get.call(null,map__47814_47866__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_47864);

cljs.core.println.call(null," ",arglists_47868);

if(cljs.core.truth_(doc_47867)){
cljs.core.println.call(null," ",doc_47867);
} else {
}

var G__47869 = cljs.core.next.call(null,seq__47802_47857__$1);
var G__47870 = null;
var G__47871 = (0);
var G__47872 = (0);
seq__47802_47842 = G__47869;
chunk__47803_47843 = G__47870;
count__47804_47844 = G__47871;
i__47805_47845 = G__47872;
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

var seq__47816 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__47817 = null;
var count__47818 = (0);
var i__47819 = (0);
while(true){
if((i__47819 < count__47818)){
var role = cljs.core._nth.call(null,chunk__47817,i__47819);
var temp__4657__auto___47873__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___47873__$1)){
var spec_47874 = temp__4657__auto___47873__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_47874));
} else {
}

var G__47875 = seq__47816;
var G__47876 = chunk__47817;
var G__47877 = count__47818;
var G__47878 = (i__47819 + (1));
seq__47816 = G__47875;
chunk__47817 = G__47876;
count__47818 = G__47877;
i__47819 = G__47878;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__47816);
if(temp__4657__auto____$1){
var seq__47816__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47816__$1)){
var c__37576__auto__ = cljs.core.chunk_first.call(null,seq__47816__$1);
var G__47879 = cljs.core.chunk_rest.call(null,seq__47816__$1);
var G__47880 = c__37576__auto__;
var G__47881 = cljs.core.count.call(null,c__37576__auto__);
var G__47882 = (0);
seq__47816 = G__47879;
chunk__47817 = G__47880;
count__47818 = G__47881;
i__47819 = G__47882;
continue;
} else {
var role = cljs.core.first.call(null,seq__47816__$1);
var temp__4657__auto___47883__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___47883__$2)){
var spec_47884 = temp__4657__auto___47883__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_47884));
} else {
}

var G__47885 = cljs.core.next.call(null,seq__47816__$1);
var G__47886 = null;
var G__47887 = (0);
var G__47888 = (0);
seq__47816 = G__47885;
chunk__47817 = G__47886;
count__47818 = G__47887;
i__47819 = G__47888;
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

//# sourceMappingURL=repl.js.map?rel=1503550044658