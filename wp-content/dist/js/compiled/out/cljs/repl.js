// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36640){
var map__36665 = p__36640;
var map__36665__$1 = ((((!((map__36665 == null)))?((((map__36665.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36665.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36665):map__36665);
var m = map__36665__$1;
var n = cljs.core.get.call(null,map__36665__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__36665__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__36667_36689 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36668_36690 = null;
var count__36669_36691 = (0);
var i__36670_36692 = (0);
while(true){
if((i__36670_36692 < count__36669_36691)){
var f_36693 = cljs.core._nth.call(null,chunk__36668_36690,i__36670_36692);
cljs.core.println.call(null,"  ",f_36693);

var G__36694 = seq__36667_36689;
var G__36695 = chunk__36668_36690;
var G__36696 = count__36669_36691;
var G__36697 = (i__36670_36692 + (1));
seq__36667_36689 = G__36694;
chunk__36668_36690 = G__36695;
count__36669_36691 = G__36696;
i__36670_36692 = G__36697;
continue;
} else {
var temp__4657__auto___36698 = cljs.core.seq.call(null,seq__36667_36689);
if(temp__4657__auto___36698){
var seq__36667_36699__$1 = temp__4657__auto___36698;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36667_36699__$1)){
var c__26800__auto___36700 = cljs.core.chunk_first.call(null,seq__36667_36699__$1);
var G__36701 = cljs.core.chunk_rest.call(null,seq__36667_36699__$1);
var G__36702 = c__26800__auto___36700;
var G__36703 = cljs.core.count.call(null,c__26800__auto___36700);
var G__36704 = (0);
seq__36667_36689 = G__36701;
chunk__36668_36690 = G__36702;
count__36669_36691 = G__36703;
i__36670_36692 = G__36704;
continue;
} else {
var f_36705 = cljs.core.first.call(null,seq__36667_36699__$1);
cljs.core.println.call(null,"  ",f_36705);

var G__36706 = cljs.core.next.call(null,seq__36667_36699__$1);
var G__36707 = null;
var G__36708 = (0);
var G__36709 = (0);
seq__36667_36689 = G__36706;
chunk__36668_36690 = G__36707;
count__36669_36691 = G__36708;
i__36670_36692 = G__36709;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36710 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__25989__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__25989__auto__)){
return or__25989__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_36710);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_36710)))?cljs.core.second.call(null,arglists_36710):arglists_36710));
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
var seq__36671_36711 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36672_36712 = null;
var count__36673_36713 = (0);
var i__36674_36714 = (0);
while(true){
if((i__36674_36714 < count__36673_36713)){
var vec__36675_36715 = cljs.core._nth.call(null,chunk__36672_36712,i__36674_36714);
var name_36716 = cljs.core.nth.call(null,vec__36675_36715,(0),null);
var map__36678_36717 = cljs.core.nth.call(null,vec__36675_36715,(1),null);
var map__36678_36718__$1 = ((((!((map__36678_36717 == null)))?((((map__36678_36717.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36678_36717.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36678_36717):map__36678_36717);
var doc_36719 = cljs.core.get.call(null,map__36678_36718__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36720 = cljs.core.get.call(null,map__36678_36718__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36716);

cljs.core.println.call(null," ",arglists_36720);

if(cljs.core.truth_(doc_36719)){
cljs.core.println.call(null," ",doc_36719);
} else {
}

var G__36721 = seq__36671_36711;
var G__36722 = chunk__36672_36712;
var G__36723 = count__36673_36713;
var G__36724 = (i__36674_36714 + (1));
seq__36671_36711 = G__36721;
chunk__36672_36712 = G__36722;
count__36673_36713 = G__36723;
i__36674_36714 = G__36724;
continue;
} else {
var temp__4657__auto___36725 = cljs.core.seq.call(null,seq__36671_36711);
if(temp__4657__auto___36725){
var seq__36671_36726__$1 = temp__4657__auto___36725;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36671_36726__$1)){
var c__26800__auto___36727 = cljs.core.chunk_first.call(null,seq__36671_36726__$1);
var G__36728 = cljs.core.chunk_rest.call(null,seq__36671_36726__$1);
var G__36729 = c__26800__auto___36727;
var G__36730 = cljs.core.count.call(null,c__26800__auto___36727);
var G__36731 = (0);
seq__36671_36711 = G__36728;
chunk__36672_36712 = G__36729;
count__36673_36713 = G__36730;
i__36674_36714 = G__36731;
continue;
} else {
var vec__36680_36732 = cljs.core.first.call(null,seq__36671_36726__$1);
var name_36733 = cljs.core.nth.call(null,vec__36680_36732,(0),null);
var map__36683_36734 = cljs.core.nth.call(null,vec__36680_36732,(1),null);
var map__36683_36735__$1 = ((((!((map__36683_36734 == null)))?((((map__36683_36734.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36683_36734.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36683_36734):map__36683_36734);
var doc_36736 = cljs.core.get.call(null,map__36683_36735__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36737 = cljs.core.get.call(null,map__36683_36735__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36733);

cljs.core.println.call(null," ",arglists_36737);

if(cljs.core.truth_(doc_36736)){
cljs.core.println.call(null," ",doc_36736);
} else {
}

var G__36738 = cljs.core.next.call(null,seq__36671_36726__$1);
var G__36739 = null;
var G__36740 = (0);
var G__36741 = (0);
seq__36671_36711 = G__36738;
chunk__36672_36712 = G__36739;
count__36673_36713 = G__36740;
i__36674_36714 = G__36741;
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

var seq__36685 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36686 = null;
var count__36687 = (0);
var i__36688 = (0);
while(true){
if((i__36688 < count__36687)){
var role = cljs.core._nth.call(null,chunk__36686,i__36688);
var temp__4657__auto___36742__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___36742__$1)){
var spec_36743 = temp__4657__auto___36742__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_36743));
} else {
}

var G__36744 = seq__36685;
var G__36745 = chunk__36686;
var G__36746 = count__36687;
var G__36747 = (i__36688 + (1));
seq__36685 = G__36744;
chunk__36686 = G__36745;
count__36687 = G__36746;
i__36688 = G__36747;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__36685);
if(temp__4657__auto____$1){
var seq__36685__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36685__$1)){
var c__26800__auto__ = cljs.core.chunk_first.call(null,seq__36685__$1);
var G__36748 = cljs.core.chunk_rest.call(null,seq__36685__$1);
var G__36749 = c__26800__auto__;
var G__36750 = cljs.core.count.call(null,c__26800__auto__);
var G__36751 = (0);
seq__36685 = G__36748;
chunk__36686 = G__36749;
count__36687 = G__36750;
i__36688 = G__36751;
continue;
} else {
var role = cljs.core.first.call(null,seq__36685__$1);
var temp__4657__auto___36752__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___36752__$2)){
var spec_36753 = temp__4657__auto___36752__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_36753));
} else {
}

var G__36754 = cljs.core.next.call(null,seq__36685__$1);
var G__36755 = null;
var G__36756 = (0);
var G__36757 = (0);
seq__36685 = G__36754;
chunk__36686 = G__36755;
count__36687 = G__36756;
i__36688 = G__36757;
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

//# sourceMappingURL=repl.js.map?rel=1499813249116