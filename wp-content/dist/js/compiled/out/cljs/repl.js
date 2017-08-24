// Compiled by ClojureScript 1.9.671 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__47789){
var map__47790 = p__47789;
var map__47790__$1 = ((((!((map__47790 == null)))?((((map__47790.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47790.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47790):map__47790);
var m = map__47790__$1;
var n = cljs.core.get.call(null,map__47790__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__47790__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__47792_47814 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__47793_47815 = null;
var count__47794_47816 = (0);
var i__47795_47817 = (0);
while(true){
if((i__47795_47817 < count__47794_47816)){
var f_47818 = cljs.core._nth.call(null,chunk__47793_47815,i__47795_47817);
cljs.core.println.call(null,"  ",f_47818);

var G__47819 = seq__47792_47814;
var G__47820 = chunk__47793_47815;
var G__47821 = count__47794_47816;
var G__47822 = (i__47795_47817 + (1));
seq__47792_47814 = G__47819;
chunk__47793_47815 = G__47820;
count__47794_47816 = G__47821;
i__47795_47817 = G__47822;
continue;
} else {
var temp__4657__auto___47823 = cljs.core.seq.call(null,seq__47792_47814);
if(temp__4657__auto___47823){
var seq__47792_47824__$1 = temp__4657__auto___47823;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47792_47824__$1)){
var c__37576__auto___47825 = cljs.core.chunk_first.call(null,seq__47792_47824__$1);
var G__47826 = cljs.core.chunk_rest.call(null,seq__47792_47824__$1);
var G__47827 = c__37576__auto___47825;
var G__47828 = cljs.core.count.call(null,c__37576__auto___47825);
var G__47829 = (0);
seq__47792_47814 = G__47826;
chunk__47793_47815 = G__47827;
count__47794_47816 = G__47828;
i__47795_47817 = G__47829;
continue;
} else {
var f_47830 = cljs.core.first.call(null,seq__47792_47824__$1);
cljs.core.println.call(null,"  ",f_47830);

var G__47831 = cljs.core.next.call(null,seq__47792_47824__$1);
var G__47832 = null;
var G__47833 = (0);
var G__47834 = (0);
seq__47792_47814 = G__47831;
chunk__47793_47815 = G__47832;
count__47794_47816 = G__47833;
i__47795_47817 = G__47834;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_47835 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__36756__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__36756__auto__)){
return or__36756__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_47835);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_47835)))?cljs.core.second.call(null,arglists_47835):arglists_47835));
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
var seq__47796_47836 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__47797_47837 = null;
var count__47798_47838 = (0);
var i__47799_47839 = (0);
while(true){
if((i__47799_47839 < count__47798_47838)){
var vec__47800_47840 = cljs.core._nth.call(null,chunk__47797_47837,i__47799_47839);
var name_47841 = cljs.core.nth.call(null,vec__47800_47840,(0),null);
var map__47803_47842 = cljs.core.nth.call(null,vec__47800_47840,(1),null);
var map__47803_47843__$1 = ((((!((map__47803_47842 == null)))?((((map__47803_47842.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47803_47842.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47803_47842):map__47803_47842);
var doc_47844 = cljs.core.get.call(null,map__47803_47843__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_47845 = cljs.core.get.call(null,map__47803_47843__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_47841);

cljs.core.println.call(null," ",arglists_47845);

if(cljs.core.truth_(doc_47844)){
cljs.core.println.call(null," ",doc_47844);
} else {
}

var G__47846 = seq__47796_47836;
var G__47847 = chunk__47797_47837;
var G__47848 = count__47798_47838;
var G__47849 = (i__47799_47839 + (1));
seq__47796_47836 = G__47846;
chunk__47797_47837 = G__47847;
count__47798_47838 = G__47848;
i__47799_47839 = G__47849;
continue;
} else {
var temp__4657__auto___47850 = cljs.core.seq.call(null,seq__47796_47836);
if(temp__4657__auto___47850){
var seq__47796_47851__$1 = temp__4657__auto___47850;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47796_47851__$1)){
var c__37576__auto___47852 = cljs.core.chunk_first.call(null,seq__47796_47851__$1);
var G__47853 = cljs.core.chunk_rest.call(null,seq__47796_47851__$1);
var G__47854 = c__37576__auto___47852;
var G__47855 = cljs.core.count.call(null,c__37576__auto___47852);
var G__47856 = (0);
seq__47796_47836 = G__47853;
chunk__47797_47837 = G__47854;
count__47798_47838 = G__47855;
i__47799_47839 = G__47856;
continue;
} else {
var vec__47805_47857 = cljs.core.first.call(null,seq__47796_47851__$1);
var name_47858 = cljs.core.nth.call(null,vec__47805_47857,(0),null);
var map__47808_47859 = cljs.core.nth.call(null,vec__47805_47857,(1),null);
var map__47808_47860__$1 = ((((!((map__47808_47859 == null)))?((((map__47808_47859.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47808_47859.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47808_47859):map__47808_47859);
var doc_47861 = cljs.core.get.call(null,map__47808_47860__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_47862 = cljs.core.get.call(null,map__47808_47860__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_47858);

cljs.core.println.call(null," ",arglists_47862);

if(cljs.core.truth_(doc_47861)){
cljs.core.println.call(null," ",doc_47861);
} else {
}

var G__47863 = cljs.core.next.call(null,seq__47796_47851__$1);
var G__47864 = null;
var G__47865 = (0);
var G__47866 = (0);
seq__47796_47836 = G__47863;
chunk__47797_47837 = G__47864;
count__47798_47838 = G__47865;
i__47799_47839 = G__47866;
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

var seq__47810 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__47811 = null;
var count__47812 = (0);
var i__47813 = (0);
while(true){
if((i__47813 < count__47812)){
var role = cljs.core._nth.call(null,chunk__47811,i__47813);
var temp__4657__auto___47867__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___47867__$1)){
var spec_47868 = temp__4657__auto___47867__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_47868));
} else {
}

var G__47869 = seq__47810;
var G__47870 = chunk__47811;
var G__47871 = count__47812;
var G__47872 = (i__47813 + (1));
seq__47810 = G__47869;
chunk__47811 = G__47870;
count__47812 = G__47871;
i__47813 = G__47872;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__47810);
if(temp__4657__auto____$1){
var seq__47810__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47810__$1)){
var c__37576__auto__ = cljs.core.chunk_first.call(null,seq__47810__$1);
var G__47873 = cljs.core.chunk_rest.call(null,seq__47810__$1);
var G__47874 = c__37576__auto__;
var G__47875 = cljs.core.count.call(null,c__37576__auto__);
var G__47876 = (0);
seq__47810 = G__47873;
chunk__47811 = G__47874;
count__47812 = G__47875;
i__47813 = G__47876;
continue;
} else {
var role = cljs.core.first.call(null,seq__47810__$1);
var temp__4657__auto___47877__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___47877__$2)){
var spec_47878 = temp__4657__auto___47877__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_47878));
} else {
}

var G__47879 = cljs.core.next.call(null,seq__47810__$1);
var G__47880 = null;
var G__47881 = (0);
var G__47882 = (0);
seq__47810 = G__47879;
chunk__47811 = G__47880;
count__47812 = G__47881;
i__47813 = G__47882;
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

//# sourceMappingURL=repl.js.map?rel=1503532145954