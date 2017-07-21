// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36857){
var map__36882 = p__36857;
var map__36882__$1 = ((((!((map__36882 == null)))?((((map__36882.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36882.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36882):map__36882);
var m = map__36882__$1;
var n = cljs.core.get.call(null,map__36882__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__36882__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36884_36906 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36885_36907 = null;
var count__36886_36908 = (0);
var i__36887_36909 = (0);
while(true){
if((i__36887_36909 < count__36886_36908)){
var f_36910 = cljs.core._nth.call(null,chunk__36885_36907,i__36887_36909);
cljs.core.println.call(null,"  ",f_36910);

var G__36911 = seq__36884_36906;
var G__36912 = chunk__36885_36907;
var G__36913 = count__36886_36908;
var G__36914 = (i__36887_36909 + (1));
seq__36884_36906 = G__36911;
chunk__36885_36907 = G__36912;
count__36886_36908 = G__36913;
i__36887_36909 = G__36914;
continue;
} else {
var temp__4657__auto___36915 = cljs.core.seq.call(null,seq__36884_36906);
if(temp__4657__auto___36915){
var seq__36884_36916__$1 = temp__4657__auto___36915;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36884_36916__$1)){
var c__26800__auto___36917 = cljs.core.chunk_first.call(null,seq__36884_36916__$1);
var G__36918 = cljs.core.chunk_rest.call(null,seq__36884_36916__$1);
var G__36919 = c__26800__auto___36917;
var G__36920 = cljs.core.count.call(null,c__26800__auto___36917);
var G__36921 = (0);
seq__36884_36906 = G__36918;
chunk__36885_36907 = G__36919;
count__36886_36908 = G__36920;
i__36887_36909 = G__36921;
continue;
} else {
var f_36922 = cljs.core.first.call(null,seq__36884_36916__$1);
cljs.core.println.call(null,"  ",f_36922);

var G__36923 = cljs.core.next.call(null,seq__36884_36916__$1);
var G__36924 = null;
var G__36925 = (0);
var G__36926 = (0);
seq__36884_36906 = G__36923;
chunk__36885_36907 = G__36924;
count__36886_36908 = G__36925;
i__36887_36909 = G__36926;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36927 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__25989__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__25989__auto__)){
return or__25989__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_36927);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_36927)))?cljs.core.second.call(null,arglists_36927):arglists_36927));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
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
var seq__36888_36928 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36889_36929 = null;
var count__36890_36930 = (0);
var i__36891_36931 = (0);
while(true){
if((i__36891_36931 < count__36890_36930)){
var vec__36892_36932 = cljs.core._nth.call(null,chunk__36889_36929,i__36891_36931);
var name_36933 = cljs.core.nth.call(null,vec__36892_36932,(0),null);
var map__36895_36934 = cljs.core.nth.call(null,vec__36892_36932,(1),null);
var map__36895_36935__$1 = ((((!((map__36895_36934 == null)))?((((map__36895_36934.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36895_36934.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36895_36934):map__36895_36934);
var doc_36936 = cljs.core.get.call(null,map__36895_36935__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36937 = cljs.core.get.call(null,map__36895_36935__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36933);

cljs.core.println.call(null," ",arglists_36937);

if(cljs.core.truth_(doc_36936)){
cljs.core.println.call(null," ",doc_36936);
} else {
}

var G__36938 = seq__36888_36928;
var G__36939 = chunk__36889_36929;
var G__36940 = count__36890_36930;
var G__36941 = (i__36891_36931 + (1));
seq__36888_36928 = G__36938;
chunk__36889_36929 = G__36939;
count__36890_36930 = G__36940;
i__36891_36931 = G__36941;
continue;
} else {
var temp__4657__auto___36942 = cljs.core.seq.call(null,seq__36888_36928);
if(temp__4657__auto___36942){
var seq__36888_36943__$1 = temp__4657__auto___36942;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36888_36943__$1)){
var c__26800__auto___36944 = cljs.core.chunk_first.call(null,seq__36888_36943__$1);
var G__36945 = cljs.core.chunk_rest.call(null,seq__36888_36943__$1);
var G__36946 = c__26800__auto___36944;
var G__36947 = cljs.core.count.call(null,c__26800__auto___36944);
var G__36948 = (0);
seq__36888_36928 = G__36945;
chunk__36889_36929 = G__36946;
count__36890_36930 = G__36947;
i__36891_36931 = G__36948;
continue;
} else {
var vec__36897_36949 = cljs.core.first.call(null,seq__36888_36943__$1);
var name_36950 = cljs.core.nth.call(null,vec__36897_36949,(0),null);
var map__36900_36951 = cljs.core.nth.call(null,vec__36897_36949,(1),null);
var map__36900_36952__$1 = ((((!((map__36900_36951 == null)))?((((map__36900_36951.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36900_36951.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36900_36951):map__36900_36951);
var doc_36953 = cljs.core.get.call(null,map__36900_36952__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36954 = cljs.core.get.call(null,map__36900_36952__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36950);

cljs.core.println.call(null," ",arglists_36954);

if(cljs.core.truth_(doc_36953)){
cljs.core.println.call(null," ",doc_36953);
} else {
}

var G__36955 = cljs.core.next.call(null,seq__36888_36943__$1);
var G__36956 = null;
var G__36957 = (0);
var G__36958 = (0);
seq__36888_36928 = G__36955;
chunk__36889_36929 = G__36956;
count__36890_36930 = G__36957;
i__36891_36931 = G__36958;
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
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__36902 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36903 = null;
var count__36904 = (0);
var i__36905 = (0);
while(true){
if((i__36905 < count__36904)){
var role = cljs.core._nth.call(null,chunk__36903,i__36905);
var temp__4657__auto___36959__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___36959__$1)){
var spec_36960 = temp__4657__auto___36959__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_36960));
} else {
}

var G__36961 = seq__36902;
var G__36962 = chunk__36903;
var G__36963 = count__36904;
var G__36964 = (i__36905 + (1));
seq__36902 = G__36961;
chunk__36903 = G__36962;
count__36904 = G__36963;
i__36905 = G__36964;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__36902);
if(temp__4657__auto____$1){
var seq__36902__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36902__$1)){
var c__26800__auto__ = cljs.core.chunk_first.call(null,seq__36902__$1);
var G__36965 = cljs.core.chunk_rest.call(null,seq__36902__$1);
var G__36966 = c__26800__auto__;
var G__36967 = cljs.core.count.call(null,c__26800__auto__);
var G__36968 = (0);
seq__36902 = G__36965;
chunk__36903 = G__36966;
count__36904 = G__36967;
i__36905 = G__36968;
continue;
} else {
var role = cljs.core.first.call(null,seq__36902__$1);
var temp__4657__auto___36969__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___36969__$2)){
var spec_36970 = temp__4657__auto___36969__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_36970));
} else {
}

var G__36971 = cljs.core.next.call(null,seq__36902__$1);
var G__36972 = null;
var G__36973 = (0);
var G__36974 = (0);
seq__36902 = G__36971;
chunk__36903 = G__36972;
count__36904 = G__36973;
i__36905 = G__36974;
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

//# sourceMappingURL=repl.js.map?rel=1500616864281