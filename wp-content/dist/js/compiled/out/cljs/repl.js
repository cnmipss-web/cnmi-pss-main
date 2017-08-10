// Compiled by ClojureScript 1.9.671 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__37195){
var map__37196 = p__37195;
var map__37196__$1 = ((((!((map__37196 == null)))?((((map__37196.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37196.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37196):map__37196);
var m = map__37196__$1;
var n = cljs.core.get.call(null,map__37196__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__37196__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__37198_37220 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37199_37221 = null;
var count__37200_37222 = (0);
var i__37201_37223 = (0);
while(true){
if((i__37201_37223 < count__37200_37222)){
var f_37224 = cljs.core._nth.call(null,chunk__37199_37221,i__37201_37223);
cljs.core.println.call(null,"  ",f_37224);

var G__37225 = seq__37198_37220;
var G__37226 = chunk__37199_37221;
var G__37227 = count__37200_37222;
var G__37228 = (i__37201_37223 + (1));
seq__37198_37220 = G__37225;
chunk__37199_37221 = G__37226;
count__37200_37222 = G__37227;
i__37201_37223 = G__37228;
continue;
} else {
var temp__4657__auto___37229 = cljs.core.seq.call(null,seq__37198_37220);
if(temp__4657__auto___37229){
var seq__37198_37230__$1 = temp__4657__auto___37229;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37198_37230__$1)){
var c__27874__auto___37231 = cljs.core.chunk_first.call(null,seq__37198_37230__$1);
var G__37232 = cljs.core.chunk_rest.call(null,seq__37198_37230__$1);
var G__37233 = c__27874__auto___37231;
var G__37234 = cljs.core.count.call(null,c__27874__auto___37231);
var G__37235 = (0);
seq__37198_37220 = G__37232;
chunk__37199_37221 = G__37233;
count__37200_37222 = G__37234;
i__37201_37223 = G__37235;
continue;
} else {
var f_37236 = cljs.core.first.call(null,seq__37198_37230__$1);
cljs.core.println.call(null,"  ",f_37236);

var G__37237 = cljs.core.next.call(null,seq__37198_37230__$1);
var G__37238 = null;
var G__37239 = (0);
var G__37240 = (0);
seq__37198_37220 = G__37237;
chunk__37199_37221 = G__37238;
count__37200_37222 = G__37239;
i__37201_37223 = G__37240;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_37241 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__27054__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__27054__auto__)){
return or__27054__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_37241);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_37241)))?cljs.core.second.call(null,arglists_37241):arglists_37241));
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
var seq__37202_37242 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37203_37243 = null;
var count__37204_37244 = (0);
var i__37205_37245 = (0);
while(true){
if((i__37205_37245 < count__37204_37244)){
var vec__37206_37246 = cljs.core._nth.call(null,chunk__37203_37243,i__37205_37245);
var name_37247 = cljs.core.nth.call(null,vec__37206_37246,(0),null);
var map__37209_37248 = cljs.core.nth.call(null,vec__37206_37246,(1),null);
var map__37209_37249__$1 = ((((!((map__37209_37248 == null)))?((((map__37209_37248.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37209_37248.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37209_37248):map__37209_37248);
var doc_37250 = cljs.core.get.call(null,map__37209_37249__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37251 = cljs.core.get.call(null,map__37209_37249__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37247);

cljs.core.println.call(null," ",arglists_37251);

if(cljs.core.truth_(doc_37250)){
cljs.core.println.call(null," ",doc_37250);
} else {
}

var G__37252 = seq__37202_37242;
var G__37253 = chunk__37203_37243;
var G__37254 = count__37204_37244;
var G__37255 = (i__37205_37245 + (1));
seq__37202_37242 = G__37252;
chunk__37203_37243 = G__37253;
count__37204_37244 = G__37254;
i__37205_37245 = G__37255;
continue;
} else {
var temp__4657__auto___37256 = cljs.core.seq.call(null,seq__37202_37242);
if(temp__4657__auto___37256){
var seq__37202_37257__$1 = temp__4657__auto___37256;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37202_37257__$1)){
var c__27874__auto___37258 = cljs.core.chunk_first.call(null,seq__37202_37257__$1);
var G__37259 = cljs.core.chunk_rest.call(null,seq__37202_37257__$1);
var G__37260 = c__27874__auto___37258;
var G__37261 = cljs.core.count.call(null,c__27874__auto___37258);
var G__37262 = (0);
seq__37202_37242 = G__37259;
chunk__37203_37243 = G__37260;
count__37204_37244 = G__37261;
i__37205_37245 = G__37262;
continue;
} else {
var vec__37211_37263 = cljs.core.first.call(null,seq__37202_37257__$1);
var name_37264 = cljs.core.nth.call(null,vec__37211_37263,(0),null);
var map__37214_37265 = cljs.core.nth.call(null,vec__37211_37263,(1),null);
var map__37214_37266__$1 = ((((!((map__37214_37265 == null)))?((((map__37214_37265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37214_37265.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37214_37265):map__37214_37265);
var doc_37267 = cljs.core.get.call(null,map__37214_37266__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37268 = cljs.core.get.call(null,map__37214_37266__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37264);

cljs.core.println.call(null," ",arglists_37268);

if(cljs.core.truth_(doc_37267)){
cljs.core.println.call(null," ",doc_37267);
} else {
}

var G__37269 = cljs.core.next.call(null,seq__37202_37257__$1);
var G__37270 = null;
var G__37271 = (0);
var G__37272 = (0);
seq__37202_37242 = G__37269;
chunk__37203_37243 = G__37270;
count__37204_37244 = G__37271;
i__37205_37245 = G__37272;
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

var seq__37216 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__37217 = null;
var count__37218 = (0);
var i__37219 = (0);
while(true){
if((i__37219 < count__37218)){
var role = cljs.core._nth.call(null,chunk__37217,i__37219);
var temp__4657__auto___37273__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___37273__$1)){
var spec_37274 = temp__4657__auto___37273__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_37274));
} else {
}

var G__37275 = seq__37216;
var G__37276 = chunk__37217;
var G__37277 = count__37218;
var G__37278 = (i__37219 + (1));
seq__37216 = G__37275;
chunk__37217 = G__37276;
count__37218 = G__37277;
i__37219 = G__37278;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__37216);
if(temp__4657__auto____$1){
var seq__37216__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37216__$1)){
var c__27874__auto__ = cljs.core.chunk_first.call(null,seq__37216__$1);
var G__37279 = cljs.core.chunk_rest.call(null,seq__37216__$1);
var G__37280 = c__27874__auto__;
var G__37281 = cljs.core.count.call(null,c__27874__auto__);
var G__37282 = (0);
seq__37216 = G__37279;
chunk__37217 = G__37280;
count__37218 = G__37281;
i__37219 = G__37282;
continue;
} else {
var role = cljs.core.first.call(null,seq__37216__$1);
var temp__4657__auto___37283__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___37283__$2)){
var spec_37284 = temp__4657__auto___37283__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_37284));
} else {
}

var G__37285 = cljs.core.next.call(null,seq__37216__$1);
var G__37286 = null;
var G__37287 = (0);
var G__37288 = (0);
seq__37216 = G__37285;
chunk__37217 = G__37286;
count__37218 = G__37287;
i__37219 = G__37288;
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

//# sourceMappingURL=repl.js.map?rel=1502330257004