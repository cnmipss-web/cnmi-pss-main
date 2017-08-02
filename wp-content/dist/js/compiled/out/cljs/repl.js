// Compiled by ClojureScript 1.9.671 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__37027){
var map__37028 = p__37027;
var map__37028__$1 = ((((!((map__37028 == null)))?((((map__37028.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37028.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37028):map__37028);
var m = map__37028__$1;
var n = cljs.core.get.call(null,map__37028__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__37028__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__37030_37052 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37031_37053 = null;
var count__37032_37054 = (0);
var i__37033_37055 = (0);
while(true){
if((i__37033_37055 < count__37032_37054)){
var f_37056 = cljs.core._nth.call(null,chunk__37031_37053,i__37033_37055);
cljs.core.println.call(null,"  ",f_37056);

var G__37057 = seq__37030_37052;
var G__37058 = chunk__37031_37053;
var G__37059 = count__37032_37054;
var G__37060 = (i__37033_37055 + (1));
seq__37030_37052 = G__37057;
chunk__37031_37053 = G__37058;
count__37032_37054 = G__37059;
i__37033_37055 = G__37060;
continue;
} else {
var temp__4657__auto___37061 = cljs.core.seq.call(null,seq__37030_37052);
if(temp__4657__auto___37061){
var seq__37030_37062__$1 = temp__4657__auto___37061;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37030_37062__$1)){
var c__27872__auto___37063 = cljs.core.chunk_first.call(null,seq__37030_37062__$1);
var G__37064 = cljs.core.chunk_rest.call(null,seq__37030_37062__$1);
var G__37065 = c__27872__auto___37063;
var G__37066 = cljs.core.count.call(null,c__27872__auto___37063);
var G__37067 = (0);
seq__37030_37052 = G__37064;
chunk__37031_37053 = G__37065;
count__37032_37054 = G__37066;
i__37033_37055 = G__37067;
continue;
} else {
var f_37068 = cljs.core.first.call(null,seq__37030_37062__$1);
cljs.core.println.call(null,"  ",f_37068);

var G__37069 = cljs.core.next.call(null,seq__37030_37062__$1);
var G__37070 = null;
var G__37071 = (0);
var G__37072 = (0);
seq__37030_37052 = G__37069;
chunk__37031_37053 = G__37070;
count__37032_37054 = G__37071;
i__37033_37055 = G__37072;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_37073 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__27052__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__27052__auto__)){
return or__27052__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_37073);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_37073)))?cljs.core.second.call(null,arglists_37073):arglists_37073));
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
var seq__37034_37074 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37035_37075 = null;
var count__37036_37076 = (0);
var i__37037_37077 = (0);
while(true){
if((i__37037_37077 < count__37036_37076)){
var vec__37038_37078 = cljs.core._nth.call(null,chunk__37035_37075,i__37037_37077);
var name_37079 = cljs.core.nth.call(null,vec__37038_37078,(0),null);
var map__37041_37080 = cljs.core.nth.call(null,vec__37038_37078,(1),null);
var map__37041_37081__$1 = ((((!((map__37041_37080 == null)))?((((map__37041_37080.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37041_37080.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37041_37080):map__37041_37080);
var doc_37082 = cljs.core.get.call(null,map__37041_37081__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37083 = cljs.core.get.call(null,map__37041_37081__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37079);

cljs.core.println.call(null," ",arglists_37083);

if(cljs.core.truth_(doc_37082)){
cljs.core.println.call(null," ",doc_37082);
} else {
}

var G__37084 = seq__37034_37074;
var G__37085 = chunk__37035_37075;
var G__37086 = count__37036_37076;
var G__37087 = (i__37037_37077 + (1));
seq__37034_37074 = G__37084;
chunk__37035_37075 = G__37085;
count__37036_37076 = G__37086;
i__37037_37077 = G__37087;
continue;
} else {
var temp__4657__auto___37088 = cljs.core.seq.call(null,seq__37034_37074);
if(temp__4657__auto___37088){
var seq__37034_37089__$1 = temp__4657__auto___37088;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37034_37089__$1)){
var c__27872__auto___37090 = cljs.core.chunk_first.call(null,seq__37034_37089__$1);
var G__37091 = cljs.core.chunk_rest.call(null,seq__37034_37089__$1);
var G__37092 = c__27872__auto___37090;
var G__37093 = cljs.core.count.call(null,c__27872__auto___37090);
var G__37094 = (0);
seq__37034_37074 = G__37091;
chunk__37035_37075 = G__37092;
count__37036_37076 = G__37093;
i__37037_37077 = G__37094;
continue;
} else {
var vec__37043_37095 = cljs.core.first.call(null,seq__37034_37089__$1);
var name_37096 = cljs.core.nth.call(null,vec__37043_37095,(0),null);
var map__37046_37097 = cljs.core.nth.call(null,vec__37043_37095,(1),null);
var map__37046_37098__$1 = ((((!((map__37046_37097 == null)))?((((map__37046_37097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37046_37097.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37046_37097):map__37046_37097);
var doc_37099 = cljs.core.get.call(null,map__37046_37098__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37100 = cljs.core.get.call(null,map__37046_37098__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37096);

cljs.core.println.call(null," ",arglists_37100);

if(cljs.core.truth_(doc_37099)){
cljs.core.println.call(null," ",doc_37099);
} else {
}

var G__37101 = cljs.core.next.call(null,seq__37034_37089__$1);
var G__37102 = null;
var G__37103 = (0);
var G__37104 = (0);
seq__37034_37074 = G__37101;
chunk__37035_37075 = G__37102;
count__37036_37076 = G__37103;
i__37037_37077 = G__37104;
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

var seq__37048 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__37049 = null;
var count__37050 = (0);
var i__37051 = (0);
while(true){
if((i__37051 < count__37050)){
var role = cljs.core._nth.call(null,chunk__37049,i__37051);
var temp__4657__auto___37105__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___37105__$1)){
var spec_37106 = temp__4657__auto___37105__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_37106));
} else {
}

var G__37107 = seq__37048;
var G__37108 = chunk__37049;
var G__37109 = count__37050;
var G__37110 = (i__37051 + (1));
seq__37048 = G__37107;
chunk__37049 = G__37108;
count__37050 = G__37109;
i__37051 = G__37110;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__37048);
if(temp__4657__auto____$1){
var seq__37048__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37048__$1)){
var c__27872__auto__ = cljs.core.chunk_first.call(null,seq__37048__$1);
var G__37111 = cljs.core.chunk_rest.call(null,seq__37048__$1);
var G__37112 = c__27872__auto__;
var G__37113 = cljs.core.count.call(null,c__27872__auto__);
var G__37114 = (0);
seq__37048 = G__37111;
chunk__37049 = G__37112;
count__37050 = G__37113;
i__37051 = G__37114;
continue;
} else {
var role = cljs.core.first.call(null,seq__37048__$1);
var temp__4657__auto___37115__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___37115__$2)){
var spec_37116 = temp__4657__auto___37115__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_37116));
} else {
}

var G__37117 = cljs.core.next.call(null,seq__37048__$1);
var G__37118 = null;
var G__37119 = (0);
var G__37120 = (0);
seq__37048 = G__37117;
chunk__37049 = G__37118;
count__37050 = G__37119;
i__37051 = G__37120;
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

//# sourceMappingURL=repl.js.map?rel=1501628493314