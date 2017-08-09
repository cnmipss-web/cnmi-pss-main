// Compiled by ClojureScript 1.9.671 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__47335){
var map__47336 = p__47335;
var map__47336__$1 = ((((!((map__47336 == null)))?((((map__47336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47336.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47336):map__47336);
var m = map__47336__$1;
var n = cljs.core.get.call(null,map__47336__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__47336__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__47338_47360 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__47339_47361 = null;
var count__47340_47362 = (0);
var i__47341_47363 = (0);
while(true){
if((i__47341_47363 < count__47340_47362)){
var f_47364 = cljs.core._nth.call(null,chunk__47339_47361,i__47341_47363);
cljs.core.println.call(null,"  ",f_47364);

var G__47365 = seq__47338_47360;
var G__47366 = chunk__47339_47361;
var G__47367 = count__47340_47362;
var G__47368 = (i__47341_47363 + (1));
seq__47338_47360 = G__47365;
chunk__47339_47361 = G__47366;
count__47340_47362 = G__47367;
i__47341_47363 = G__47368;
continue;
} else {
var temp__4657__auto___47369 = cljs.core.seq.call(null,seq__47338_47360);
if(temp__4657__auto___47369){
var seq__47338_47370__$1 = temp__4657__auto___47369;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47338_47370__$1)){
var c__37583__auto___47371 = cljs.core.chunk_first.call(null,seq__47338_47370__$1);
var G__47372 = cljs.core.chunk_rest.call(null,seq__47338_47370__$1);
var G__47373 = c__37583__auto___47371;
var G__47374 = cljs.core.count.call(null,c__37583__auto___47371);
var G__47375 = (0);
seq__47338_47360 = G__47372;
chunk__47339_47361 = G__47373;
count__47340_47362 = G__47374;
i__47341_47363 = G__47375;
continue;
} else {
var f_47376 = cljs.core.first.call(null,seq__47338_47370__$1);
cljs.core.println.call(null,"  ",f_47376);

var G__47377 = cljs.core.next.call(null,seq__47338_47370__$1);
var G__47378 = null;
var G__47379 = (0);
var G__47380 = (0);
seq__47338_47360 = G__47377;
chunk__47339_47361 = G__47378;
count__47340_47362 = G__47379;
i__47341_47363 = G__47380;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_47381 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__36763__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__36763__auto__)){
return or__36763__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_47381);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_47381)))?cljs.core.second.call(null,arglists_47381):arglists_47381));
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
var seq__47342_47382 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__47343_47383 = null;
var count__47344_47384 = (0);
var i__47345_47385 = (0);
while(true){
if((i__47345_47385 < count__47344_47384)){
var vec__47346_47386 = cljs.core._nth.call(null,chunk__47343_47383,i__47345_47385);
var name_47387 = cljs.core.nth.call(null,vec__47346_47386,(0),null);
var map__47349_47388 = cljs.core.nth.call(null,vec__47346_47386,(1),null);
var map__47349_47389__$1 = ((((!((map__47349_47388 == null)))?((((map__47349_47388.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47349_47388.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47349_47388):map__47349_47388);
var doc_47390 = cljs.core.get.call(null,map__47349_47389__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_47391 = cljs.core.get.call(null,map__47349_47389__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_47387);

cljs.core.println.call(null," ",arglists_47391);

if(cljs.core.truth_(doc_47390)){
cljs.core.println.call(null," ",doc_47390);
} else {
}

var G__47392 = seq__47342_47382;
var G__47393 = chunk__47343_47383;
var G__47394 = count__47344_47384;
var G__47395 = (i__47345_47385 + (1));
seq__47342_47382 = G__47392;
chunk__47343_47383 = G__47393;
count__47344_47384 = G__47394;
i__47345_47385 = G__47395;
continue;
} else {
var temp__4657__auto___47396 = cljs.core.seq.call(null,seq__47342_47382);
if(temp__4657__auto___47396){
var seq__47342_47397__$1 = temp__4657__auto___47396;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47342_47397__$1)){
var c__37583__auto___47398 = cljs.core.chunk_first.call(null,seq__47342_47397__$1);
var G__47399 = cljs.core.chunk_rest.call(null,seq__47342_47397__$1);
var G__47400 = c__37583__auto___47398;
var G__47401 = cljs.core.count.call(null,c__37583__auto___47398);
var G__47402 = (0);
seq__47342_47382 = G__47399;
chunk__47343_47383 = G__47400;
count__47344_47384 = G__47401;
i__47345_47385 = G__47402;
continue;
} else {
var vec__47351_47403 = cljs.core.first.call(null,seq__47342_47397__$1);
var name_47404 = cljs.core.nth.call(null,vec__47351_47403,(0),null);
var map__47354_47405 = cljs.core.nth.call(null,vec__47351_47403,(1),null);
var map__47354_47406__$1 = ((((!((map__47354_47405 == null)))?((((map__47354_47405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47354_47405.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47354_47405):map__47354_47405);
var doc_47407 = cljs.core.get.call(null,map__47354_47406__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_47408 = cljs.core.get.call(null,map__47354_47406__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_47404);

cljs.core.println.call(null," ",arglists_47408);

if(cljs.core.truth_(doc_47407)){
cljs.core.println.call(null," ",doc_47407);
} else {
}

var G__47409 = cljs.core.next.call(null,seq__47342_47397__$1);
var G__47410 = null;
var G__47411 = (0);
var G__47412 = (0);
seq__47342_47382 = G__47409;
chunk__47343_47383 = G__47410;
count__47344_47384 = G__47411;
i__47345_47385 = G__47412;
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

var seq__47356 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__47357 = null;
var count__47358 = (0);
var i__47359 = (0);
while(true){
if((i__47359 < count__47358)){
var role = cljs.core._nth.call(null,chunk__47357,i__47359);
var temp__4657__auto___47413__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___47413__$1)){
var spec_47414 = temp__4657__auto___47413__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_47414));
} else {
}

var G__47415 = seq__47356;
var G__47416 = chunk__47357;
var G__47417 = count__47358;
var G__47418 = (i__47359 + (1));
seq__47356 = G__47415;
chunk__47357 = G__47416;
count__47358 = G__47417;
i__47359 = G__47418;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__47356);
if(temp__4657__auto____$1){
var seq__47356__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47356__$1)){
var c__37583__auto__ = cljs.core.chunk_first.call(null,seq__47356__$1);
var G__47419 = cljs.core.chunk_rest.call(null,seq__47356__$1);
var G__47420 = c__37583__auto__;
var G__47421 = cljs.core.count.call(null,c__37583__auto__);
var G__47422 = (0);
seq__47356 = G__47419;
chunk__47357 = G__47420;
count__47358 = G__47421;
i__47359 = G__47422;
continue;
} else {
var role = cljs.core.first.call(null,seq__47356__$1);
var temp__4657__auto___47423__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___47423__$2)){
var spec_47424 = temp__4657__auto___47423__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_47424));
} else {
}

var G__47425 = cljs.core.next.call(null,seq__47356__$1);
var G__47426 = null;
var G__47427 = (0);
var G__47428 = (0);
seq__47356 = G__47425;
chunk__47357 = G__47426;
count__47358 = G__47427;
i__47359 = G__47428;
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

//# sourceMappingURL=repl.js.map?rel=1502260266121