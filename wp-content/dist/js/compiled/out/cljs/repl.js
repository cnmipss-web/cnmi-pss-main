// Compiled by ClojureScript 1.9.671 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__48451){
var map__48452 = p__48451;
var map__48452__$1 = ((((!((map__48452 == null)))?((((map__48452.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48452.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48452):map__48452);
var m = map__48452__$1;
var n = cljs.core.get.call(null,map__48452__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__48452__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__48454_48476 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__48455_48477 = null;
var count__48456_48478 = (0);
var i__48457_48479 = (0);
while(true){
if((i__48457_48479 < count__48456_48478)){
var f_48480 = cljs.core._nth.call(null,chunk__48455_48477,i__48457_48479);
cljs.core.println.call(null,"  ",f_48480);

var G__48481 = seq__48454_48476;
var G__48482 = chunk__48455_48477;
var G__48483 = count__48456_48478;
var G__48484 = (i__48457_48479 + (1));
seq__48454_48476 = G__48481;
chunk__48455_48477 = G__48482;
count__48456_48478 = G__48483;
i__48457_48479 = G__48484;
continue;
} else {
var temp__4657__auto___48485 = cljs.core.seq.call(null,seq__48454_48476);
if(temp__4657__auto___48485){
var seq__48454_48486__$1 = temp__4657__auto___48485;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48454_48486__$1)){
var c__27872__auto___48487 = cljs.core.chunk_first.call(null,seq__48454_48486__$1);
var G__48488 = cljs.core.chunk_rest.call(null,seq__48454_48486__$1);
var G__48489 = c__27872__auto___48487;
var G__48490 = cljs.core.count.call(null,c__27872__auto___48487);
var G__48491 = (0);
seq__48454_48476 = G__48488;
chunk__48455_48477 = G__48489;
count__48456_48478 = G__48490;
i__48457_48479 = G__48491;
continue;
} else {
var f_48492 = cljs.core.first.call(null,seq__48454_48486__$1);
cljs.core.println.call(null,"  ",f_48492);

var G__48493 = cljs.core.next.call(null,seq__48454_48486__$1);
var G__48494 = null;
var G__48495 = (0);
var G__48496 = (0);
seq__48454_48476 = G__48493;
chunk__48455_48477 = G__48494;
count__48456_48478 = G__48495;
i__48457_48479 = G__48496;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_48497 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__27052__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__27052__auto__)){
return or__27052__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_48497);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_48497)))?cljs.core.second.call(null,arglists_48497):arglists_48497));
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
var seq__48458_48498 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__48459_48499 = null;
var count__48460_48500 = (0);
var i__48461_48501 = (0);
while(true){
if((i__48461_48501 < count__48460_48500)){
var vec__48462_48502 = cljs.core._nth.call(null,chunk__48459_48499,i__48461_48501);
var name_48503 = cljs.core.nth.call(null,vec__48462_48502,(0),null);
var map__48465_48504 = cljs.core.nth.call(null,vec__48462_48502,(1),null);
var map__48465_48505__$1 = ((((!((map__48465_48504 == null)))?((((map__48465_48504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48465_48504.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48465_48504):map__48465_48504);
var doc_48506 = cljs.core.get.call(null,map__48465_48505__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_48507 = cljs.core.get.call(null,map__48465_48505__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_48503);

cljs.core.println.call(null," ",arglists_48507);

if(cljs.core.truth_(doc_48506)){
cljs.core.println.call(null," ",doc_48506);
} else {
}

var G__48508 = seq__48458_48498;
var G__48509 = chunk__48459_48499;
var G__48510 = count__48460_48500;
var G__48511 = (i__48461_48501 + (1));
seq__48458_48498 = G__48508;
chunk__48459_48499 = G__48509;
count__48460_48500 = G__48510;
i__48461_48501 = G__48511;
continue;
} else {
var temp__4657__auto___48512 = cljs.core.seq.call(null,seq__48458_48498);
if(temp__4657__auto___48512){
var seq__48458_48513__$1 = temp__4657__auto___48512;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48458_48513__$1)){
var c__27872__auto___48514 = cljs.core.chunk_first.call(null,seq__48458_48513__$1);
var G__48515 = cljs.core.chunk_rest.call(null,seq__48458_48513__$1);
var G__48516 = c__27872__auto___48514;
var G__48517 = cljs.core.count.call(null,c__27872__auto___48514);
var G__48518 = (0);
seq__48458_48498 = G__48515;
chunk__48459_48499 = G__48516;
count__48460_48500 = G__48517;
i__48461_48501 = G__48518;
continue;
} else {
var vec__48467_48519 = cljs.core.first.call(null,seq__48458_48513__$1);
var name_48520 = cljs.core.nth.call(null,vec__48467_48519,(0),null);
var map__48470_48521 = cljs.core.nth.call(null,vec__48467_48519,(1),null);
var map__48470_48522__$1 = ((((!((map__48470_48521 == null)))?((((map__48470_48521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48470_48521.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48470_48521):map__48470_48521);
var doc_48523 = cljs.core.get.call(null,map__48470_48522__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_48524 = cljs.core.get.call(null,map__48470_48522__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_48520);

cljs.core.println.call(null," ",arglists_48524);

if(cljs.core.truth_(doc_48523)){
cljs.core.println.call(null," ",doc_48523);
} else {
}

var G__48525 = cljs.core.next.call(null,seq__48458_48513__$1);
var G__48526 = null;
var G__48527 = (0);
var G__48528 = (0);
seq__48458_48498 = G__48525;
chunk__48459_48499 = G__48526;
count__48460_48500 = G__48527;
i__48461_48501 = G__48528;
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

var seq__48472 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__48473 = null;
var count__48474 = (0);
var i__48475 = (0);
while(true){
if((i__48475 < count__48474)){
var role = cljs.core._nth.call(null,chunk__48473,i__48475);
var temp__4657__auto___48529__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___48529__$1)){
var spec_48530 = temp__4657__auto___48529__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_48530));
} else {
}

var G__48531 = seq__48472;
var G__48532 = chunk__48473;
var G__48533 = count__48474;
var G__48534 = (i__48475 + (1));
seq__48472 = G__48531;
chunk__48473 = G__48532;
count__48474 = G__48533;
i__48475 = G__48534;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__48472);
if(temp__4657__auto____$1){
var seq__48472__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48472__$1)){
var c__27872__auto__ = cljs.core.chunk_first.call(null,seq__48472__$1);
var G__48535 = cljs.core.chunk_rest.call(null,seq__48472__$1);
var G__48536 = c__27872__auto__;
var G__48537 = cljs.core.count.call(null,c__27872__auto__);
var G__48538 = (0);
seq__48472 = G__48535;
chunk__48473 = G__48536;
count__48474 = G__48537;
i__48475 = G__48538;
continue;
} else {
var role = cljs.core.first.call(null,seq__48472__$1);
var temp__4657__auto___48539__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___48539__$2)){
var spec_48540 = temp__4657__auto___48539__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_48540));
} else {
}

var G__48541 = cljs.core.next.call(null,seq__48472__$1);
var G__48542 = null;
var G__48543 = (0);
var G__48544 = (0);
seq__48472 = G__48541;
chunk__48473 = G__48542;
count__48474 = G__48543;
i__48475 = G__48544;
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

//# sourceMappingURL=repl.js.map?rel=1501568773044