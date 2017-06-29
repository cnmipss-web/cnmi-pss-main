// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__67628){
var map__67653 = p__67628;
var map__67653__$1 = ((((!((map__67653 == null)))?((((map__67653.cljs$lang$protocol_mask$partition0$ & (64))) || (map__67653.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67653):map__67653);
var m = map__67653__$1;
var n = cljs.core.get.call(null,map__67653__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__67653__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__67655_67677 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__67656_67678 = null;
var count__67657_67679 = (0);
var i__67658_67680 = (0);
while(true){
if((i__67658_67680 < count__67657_67679)){
var f_67681 = cljs.core._nth.call(null,chunk__67656_67678,i__67658_67680);
cljs.core.println.call(null,"  ",f_67681);

var G__67682 = seq__67655_67677;
var G__67683 = chunk__67656_67678;
var G__67684 = count__67657_67679;
var G__67685 = (i__67658_67680 + (1));
seq__67655_67677 = G__67682;
chunk__67656_67678 = G__67683;
count__67657_67679 = G__67684;
i__67658_67680 = G__67685;
continue;
} else {
var temp__4657__auto___67686 = cljs.core.seq.call(null,seq__67655_67677);
if(temp__4657__auto___67686){
var seq__67655_67687__$1 = temp__4657__auto___67686;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__67655_67687__$1)){
var c__26790__auto___67688 = cljs.core.chunk_first.call(null,seq__67655_67687__$1);
var G__67689 = cljs.core.chunk_rest.call(null,seq__67655_67687__$1);
var G__67690 = c__26790__auto___67688;
var G__67691 = cljs.core.count.call(null,c__26790__auto___67688);
var G__67692 = (0);
seq__67655_67677 = G__67689;
chunk__67656_67678 = G__67690;
count__67657_67679 = G__67691;
i__67658_67680 = G__67692;
continue;
} else {
var f_67693 = cljs.core.first.call(null,seq__67655_67687__$1);
cljs.core.println.call(null,"  ",f_67693);

var G__67694 = cljs.core.next.call(null,seq__67655_67687__$1);
var G__67695 = null;
var G__67696 = (0);
var G__67697 = (0);
seq__67655_67677 = G__67694;
chunk__67656_67678 = G__67695;
count__67657_67679 = G__67696;
i__67658_67680 = G__67697;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_67698 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__25979__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_67698);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_67698)))?cljs.core.second.call(null,arglists_67698):arglists_67698));
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
var seq__67659_67699 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__67660_67700 = null;
var count__67661_67701 = (0);
var i__67662_67702 = (0);
while(true){
if((i__67662_67702 < count__67661_67701)){
var vec__67663_67703 = cljs.core._nth.call(null,chunk__67660_67700,i__67662_67702);
var name_67704 = cljs.core.nth.call(null,vec__67663_67703,(0),null);
var map__67666_67705 = cljs.core.nth.call(null,vec__67663_67703,(1),null);
var map__67666_67706__$1 = ((((!((map__67666_67705 == null)))?((((map__67666_67705.cljs$lang$protocol_mask$partition0$ & (64))) || (map__67666_67705.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67666_67705):map__67666_67705);
var doc_67707 = cljs.core.get.call(null,map__67666_67706__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_67708 = cljs.core.get.call(null,map__67666_67706__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_67704);

cljs.core.println.call(null," ",arglists_67708);

if(cljs.core.truth_(doc_67707)){
cljs.core.println.call(null," ",doc_67707);
} else {
}

var G__67709 = seq__67659_67699;
var G__67710 = chunk__67660_67700;
var G__67711 = count__67661_67701;
var G__67712 = (i__67662_67702 + (1));
seq__67659_67699 = G__67709;
chunk__67660_67700 = G__67710;
count__67661_67701 = G__67711;
i__67662_67702 = G__67712;
continue;
} else {
var temp__4657__auto___67713 = cljs.core.seq.call(null,seq__67659_67699);
if(temp__4657__auto___67713){
var seq__67659_67714__$1 = temp__4657__auto___67713;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__67659_67714__$1)){
var c__26790__auto___67715 = cljs.core.chunk_first.call(null,seq__67659_67714__$1);
var G__67716 = cljs.core.chunk_rest.call(null,seq__67659_67714__$1);
var G__67717 = c__26790__auto___67715;
var G__67718 = cljs.core.count.call(null,c__26790__auto___67715);
var G__67719 = (0);
seq__67659_67699 = G__67716;
chunk__67660_67700 = G__67717;
count__67661_67701 = G__67718;
i__67662_67702 = G__67719;
continue;
} else {
var vec__67668_67720 = cljs.core.first.call(null,seq__67659_67714__$1);
var name_67721 = cljs.core.nth.call(null,vec__67668_67720,(0),null);
var map__67671_67722 = cljs.core.nth.call(null,vec__67668_67720,(1),null);
var map__67671_67723__$1 = ((((!((map__67671_67722 == null)))?((((map__67671_67722.cljs$lang$protocol_mask$partition0$ & (64))) || (map__67671_67722.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67671_67722):map__67671_67722);
var doc_67724 = cljs.core.get.call(null,map__67671_67723__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_67725 = cljs.core.get.call(null,map__67671_67723__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_67721);

cljs.core.println.call(null," ",arglists_67725);

if(cljs.core.truth_(doc_67724)){
cljs.core.println.call(null," ",doc_67724);
} else {
}

var G__67726 = cljs.core.next.call(null,seq__67659_67714__$1);
var G__67727 = null;
var G__67728 = (0);
var G__67729 = (0);
seq__67659_67699 = G__67726;
chunk__67660_67700 = G__67727;
count__67661_67701 = G__67728;
i__67662_67702 = G__67729;
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

var seq__67673 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__67674 = null;
var count__67675 = (0);
var i__67676 = (0);
while(true){
if((i__67676 < count__67675)){
var role = cljs.core._nth.call(null,chunk__67674,i__67676);
var temp__4657__auto___67730__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___67730__$1)){
var spec_67731 = temp__4657__auto___67730__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_67731));
} else {
}

var G__67732 = seq__67673;
var G__67733 = chunk__67674;
var G__67734 = count__67675;
var G__67735 = (i__67676 + (1));
seq__67673 = G__67732;
chunk__67674 = G__67733;
count__67675 = G__67734;
i__67676 = G__67735;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__67673);
if(temp__4657__auto____$1){
var seq__67673__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__67673__$1)){
var c__26790__auto__ = cljs.core.chunk_first.call(null,seq__67673__$1);
var G__67736 = cljs.core.chunk_rest.call(null,seq__67673__$1);
var G__67737 = c__26790__auto__;
var G__67738 = cljs.core.count.call(null,c__26790__auto__);
var G__67739 = (0);
seq__67673 = G__67736;
chunk__67674 = G__67737;
count__67675 = G__67738;
i__67676 = G__67739;
continue;
} else {
var role = cljs.core.first.call(null,seq__67673__$1);
var temp__4657__auto___67740__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___67740__$2)){
var spec_67741 = temp__4657__auto___67740__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_67741));
} else {
}

var G__67742 = cljs.core.next.call(null,seq__67673__$1);
var G__67743 = null;
var G__67744 = (0);
var G__67745 = (0);
seq__67673 = G__67742;
chunk__67674 = G__67743;
count__67675 = G__67744;
i__67676 = G__67745;
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

//# sourceMappingURL=repl.js.map?rel=1498707052776