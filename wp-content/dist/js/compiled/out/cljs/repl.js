// Compiled by ClojureScript 1.9.671 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__47801){
var map__47802 = p__47801;
var map__47802__$1 = ((((!((map__47802 == null)))?((((map__47802.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47802.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47802):map__47802);
var m = map__47802__$1;
var n = cljs.core.get.call(null,map__47802__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__47802__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__47804_47826 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__47805_47827 = null;
var count__47806_47828 = (0);
var i__47807_47829 = (0);
while(true){
if((i__47807_47829 < count__47806_47828)){
var f_47830 = cljs.core._nth.call(null,chunk__47805_47827,i__47807_47829);
cljs.core.println.call(null,"  ",f_47830);

var G__47831 = seq__47804_47826;
var G__47832 = chunk__47805_47827;
var G__47833 = count__47806_47828;
var G__47834 = (i__47807_47829 + (1));
seq__47804_47826 = G__47831;
chunk__47805_47827 = G__47832;
count__47806_47828 = G__47833;
i__47807_47829 = G__47834;
continue;
} else {
var temp__4657__auto___47835 = cljs.core.seq.call(null,seq__47804_47826);
if(temp__4657__auto___47835){
var seq__47804_47836__$1 = temp__4657__auto___47835;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47804_47836__$1)){
var c__37589__auto___47837 = cljs.core.chunk_first.call(null,seq__47804_47836__$1);
var G__47838 = cljs.core.chunk_rest.call(null,seq__47804_47836__$1);
var G__47839 = c__37589__auto___47837;
var G__47840 = cljs.core.count.call(null,c__37589__auto___47837);
var G__47841 = (0);
seq__47804_47826 = G__47838;
chunk__47805_47827 = G__47839;
count__47806_47828 = G__47840;
i__47807_47829 = G__47841;
continue;
} else {
var f_47842 = cljs.core.first.call(null,seq__47804_47836__$1);
cljs.core.println.call(null,"  ",f_47842);

var G__47843 = cljs.core.next.call(null,seq__47804_47836__$1);
var G__47844 = null;
var G__47845 = (0);
var G__47846 = (0);
seq__47804_47826 = G__47843;
chunk__47805_47827 = G__47844;
count__47806_47828 = G__47845;
i__47807_47829 = G__47846;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_47847 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__36769__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__36769__auto__)){
return or__36769__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_47847);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_47847)))?cljs.core.second.call(null,arglists_47847):arglists_47847));
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
var seq__47808_47848 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__47809_47849 = null;
var count__47810_47850 = (0);
var i__47811_47851 = (0);
while(true){
if((i__47811_47851 < count__47810_47850)){
var vec__47812_47852 = cljs.core._nth.call(null,chunk__47809_47849,i__47811_47851);
var name_47853 = cljs.core.nth.call(null,vec__47812_47852,(0),null);
var map__47815_47854 = cljs.core.nth.call(null,vec__47812_47852,(1),null);
var map__47815_47855__$1 = ((((!((map__47815_47854 == null)))?((((map__47815_47854.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47815_47854.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47815_47854):map__47815_47854);
var doc_47856 = cljs.core.get.call(null,map__47815_47855__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_47857 = cljs.core.get.call(null,map__47815_47855__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_47853);

cljs.core.println.call(null," ",arglists_47857);

if(cljs.core.truth_(doc_47856)){
cljs.core.println.call(null," ",doc_47856);
} else {
}

var G__47858 = seq__47808_47848;
var G__47859 = chunk__47809_47849;
var G__47860 = count__47810_47850;
var G__47861 = (i__47811_47851 + (1));
seq__47808_47848 = G__47858;
chunk__47809_47849 = G__47859;
count__47810_47850 = G__47860;
i__47811_47851 = G__47861;
continue;
} else {
var temp__4657__auto___47862 = cljs.core.seq.call(null,seq__47808_47848);
if(temp__4657__auto___47862){
var seq__47808_47863__$1 = temp__4657__auto___47862;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47808_47863__$1)){
var c__37589__auto___47864 = cljs.core.chunk_first.call(null,seq__47808_47863__$1);
var G__47865 = cljs.core.chunk_rest.call(null,seq__47808_47863__$1);
var G__47866 = c__37589__auto___47864;
var G__47867 = cljs.core.count.call(null,c__37589__auto___47864);
var G__47868 = (0);
seq__47808_47848 = G__47865;
chunk__47809_47849 = G__47866;
count__47810_47850 = G__47867;
i__47811_47851 = G__47868;
continue;
} else {
var vec__47817_47869 = cljs.core.first.call(null,seq__47808_47863__$1);
var name_47870 = cljs.core.nth.call(null,vec__47817_47869,(0),null);
var map__47820_47871 = cljs.core.nth.call(null,vec__47817_47869,(1),null);
var map__47820_47872__$1 = ((((!((map__47820_47871 == null)))?((((map__47820_47871.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47820_47871.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47820_47871):map__47820_47871);
var doc_47873 = cljs.core.get.call(null,map__47820_47872__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_47874 = cljs.core.get.call(null,map__47820_47872__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_47870);

cljs.core.println.call(null," ",arglists_47874);

if(cljs.core.truth_(doc_47873)){
cljs.core.println.call(null," ",doc_47873);
} else {
}

var G__47875 = cljs.core.next.call(null,seq__47808_47863__$1);
var G__47876 = null;
var G__47877 = (0);
var G__47878 = (0);
seq__47808_47848 = G__47875;
chunk__47809_47849 = G__47876;
count__47810_47850 = G__47877;
i__47811_47851 = G__47878;
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

var seq__47822 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__47823 = null;
var count__47824 = (0);
var i__47825 = (0);
while(true){
if((i__47825 < count__47824)){
var role = cljs.core._nth.call(null,chunk__47823,i__47825);
var temp__4657__auto___47879__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___47879__$1)){
var spec_47880 = temp__4657__auto___47879__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_47880));
} else {
}

var G__47881 = seq__47822;
var G__47882 = chunk__47823;
var G__47883 = count__47824;
var G__47884 = (i__47825 + (1));
seq__47822 = G__47881;
chunk__47823 = G__47882;
count__47824 = G__47883;
i__47825 = G__47884;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__47822);
if(temp__4657__auto____$1){
var seq__47822__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47822__$1)){
var c__37589__auto__ = cljs.core.chunk_first.call(null,seq__47822__$1);
var G__47885 = cljs.core.chunk_rest.call(null,seq__47822__$1);
var G__47886 = c__37589__auto__;
var G__47887 = cljs.core.count.call(null,c__37589__auto__);
var G__47888 = (0);
seq__47822 = G__47885;
chunk__47823 = G__47886;
count__47824 = G__47887;
i__47825 = G__47888;
continue;
} else {
var role = cljs.core.first.call(null,seq__47822__$1);
var temp__4657__auto___47889__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___47889__$2)){
var spec_47890 = temp__4657__auto___47889__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_47890));
} else {
}

var G__47891 = cljs.core.next.call(null,seq__47822__$1);
var G__47892 = null;
var G__47893 = (0);
var G__47894 = (0);
seq__47822 = G__47891;
chunk__47823 = G__47892;
count__47824 = G__47893;
i__47825 = G__47894;
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

//# sourceMappingURL=repl.js.map?rel=1502846514393