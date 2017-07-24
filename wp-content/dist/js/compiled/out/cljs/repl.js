// Compiled by ClojureScript 1.9.671 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36923){
var map__36924 = p__36923;
var map__36924__$1 = ((((!((map__36924 == null)))?((((map__36924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36924.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36924):map__36924);
var m = map__36924__$1;
var n = cljs.core.get.call(null,map__36924__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__36924__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__36926_36948 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36927_36949 = null;
var count__36928_36950 = (0);
var i__36929_36951 = (0);
while(true){
if((i__36929_36951 < count__36928_36950)){
var f_36952 = cljs.core._nth.call(null,chunk__36927_36949,i__36929_36951);
cljs.core.println.call(null,"  ",f_36952);

var G__36953 = seq__36926_36948;
var G__36954 = chunk__36927_36949;
var G__36955 = count__36928_36950;
var G__36956 = (i__36929_36951 + (1));
seq__36926_36948 = G__36953;
chunk__36927_36949 = G__36954;
count__36928_36950 = G__36955;
i__36929_36951 = G__36956;
continue;
} else {
var temp__4657__auto___36957 = cljs.core.seq.call(null,seq__36926_36948);
if(temp__4657__auto___36957){
var seq__36926_36958__$1 = temp__4657__auto___36957;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36926_36958__$1)){
var c__27776__auto___36959 = cljs.core.chunk_first.call(null,seq__36926_36958__$1);
var G__36960 = cljs.core.chunk_rest.call(null,seq__36926_36958__$1);
var G__36961 = c__27776__auto___36959;
var G__36962 = cljs.core.count.call(null,c__27776__auto___36959);
var G__36963 = (0);
seq__36926_36948 = G__36960;
chunk__36927_36949 = G__36961;
count__36928_36950 = G__36962;
i__36929_36951 = G__36963;
continue;
} else {
var f_36964 = cljs.core.first.call(null,seq__36926_36958__$1);
cljs.core.println.call(null,"  ",f_36964);

var G__36965 = cljs.core.next.call(null,seq__36926_36958__$1);
var G__36966 = null;
var G__36967 = (0);
var G__36968 = (0);
seq__36926_36948 = G__36965;
chunk__36927_36949 = G__36966;
count__36928_36950 = G__36967;
i__36929_36951 = G__36968;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36969 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__26956__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__26956__auto__)){
return or__26956__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_36969);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_36969)))?cljs.core.second.call(null,arglists_36969):arglists_36969));
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
var seq__36930_36970 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36931_36971 = null;
var count__36932_36972 = (0);
var i__36933_36973 = (0);
while(true){
if((i__36933_36973 < count__36932_36972)){
var vec__36934_36974 = cljs.core._nth.call(null,chunk__36931_36971,i__36933_36973);
var name_36975 = cljs.core.nth.call(null,vec__36934_36974,(0),null);
var map__36937_36976 = cljs.core.nth.call(null,vec__36934_36974,(1),null);
var map__36937_36977__$1 = ((((!((map__36937_36976 == null)))?((((map__36937_36976.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36937_36976.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36937_36976):map__36937_36976);
var doc_36978 = cljs.core.get.call(null,map__36937_36977__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36979 = cljs.core.get.call(null,map__36937_36977__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36975);

cljs.core.println.call(null," ",arglists_36979);

if(cljs.core.truth_(doc_36978)){
cljs.core.println.call(null," ",doc_36978);
} else {
}

var G__36980 = seq__36930_36970;
var G__36981 = chunk__36931_36971;
var G__36982 = count__36932_36972;
var G__36983 = (i__36933_36973 + (1));
seq__36930_36970 = G__36980;
chunk__36931_36971 = G__36981;
count__36932_36972 = G__36982;
i__36933_36973 = G__36983;
continue;
} else {
var temp__4657__auto___36984 = cljs.core.seq.call(null,seq__36930_36970);
if(temp__4657__auto___36984){
var seq__36930_36985__$1 = temp__4657__auto___36984;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36930_36985__$1)){
var c__27776__auto___36986 = cljs.core.chunk_first.call(null,seq__36930_36985__$1);
var G__36987 = cljs.core.chunk_rest.call(null,seq__36930_36985__$1);
var G__36988 = c__27776__auto___36986;
var G__36989 = cljs.core.count.call(null,c__27776__auto___36986);
var G__36990 = (0);
seq__36930_36970 = G__36987;
chunk__36931_36971 = G__36988;
count__36932_36972 = G__36989;
i__36933_36973 = G__36990;
continue;
} else {
var vec__36939_36991 = cljs.core.first.call(null,seq__36930_36985__$1);
var name_36992 = cljs.core.nth.call(null,vec__36939_36991,(0),null);
var map__36942_36993 = cljs.core.nth.call(null,vec__36939_36991,(1),null);
var map__36942_36994__$1 = ((((!((map__36942_36993 == null)))?((((map__36942_36993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36942_36993.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36942_36993):map__36942_36993);
var doc_36995 = cljs.core.get.call(null,map__36942_36994__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36996 = cljs.core.get.call(null,map__36942_36994__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36992);

cljs.core.println.call(null," ",arglists_36996);

if(cljs.core.truth_(doc_36995)){
cljs.core.println.call(null," ",doc_36995);
} else {
}

var G__36997 = cljs.core.next.call(null,seq__36930_36985__$1);
var G__36998 = null;
var G__36999 = (0);
var G__37000 = (0);
seq__36930_36970 = G__36997;
chunk__36931_36971 = G__36998;
count__36932_36972 = G__36999;
i__36933_36973 = G__37000;
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

var seq__36944 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36945 = null;
var count__36946 = (0);
var i__36947 = (0);
while(true){
if((i__36947 < count__36946)){
var role = cljs.core._nth.call(null,chunk__36945,i__36947);
var temp__4657__auto___37001__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___37001__$1)){
var spec_37002 = temp__4657__auto___37001__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_37002));
} else {
}

var G__37003 = seq__36944;
var G__37004 = chunk__36945;
var G__37005 = count__36946;
var G__37006 = (i__36947 + (1));
seq__36944 = G__37003;
chunk__36945 = G__37004;
count__36946 = G__37005;
i__36947 = G__37006;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__36944);
if(temp__4657__auto____$1){
var seq__36944__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36944__$1)){
var c__27776__auto__ = cljs.core.chunk_first.call(null,seq__36944__$1);
var G__37007 = cljs.core.chunk_rest.call(null,seq__36944__$1);
var G__37008 = c__27776__auto__;
var G__37009 = cljs.core.count.call(null,c__27776__auto__);
var G__37010 = (0);
seq__36944 = G__37007;
chunk__36945 = G__37008;
count__36946 = G__37009;
i__36947 = G__37010;
continue;
} else {
var role = cljs.core.first.call(null,seq__36944__$1);
var temp__4657__auto___37011__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___37011__$2)){
var spec_37012 = temp__4657__auto___37011__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_37012));
} else {
}

var G__37013 = cljs.core.next.call(null,seq__36944__$1);
var G__37014 = null;
var G__37015 = (0);
var G__37016 = (0);
seq__36944 = G__37013;
chunk__36945 = G__37014;
count__36946 = G__37015;
i__36947 = G__37016;
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

//# sourceMappingURL=repl.js.map?rel=1500852802930