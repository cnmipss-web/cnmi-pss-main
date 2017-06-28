// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35222){
var map__35247 = p__35222;
var map__35247__$1 = ((((!((map__35247 == null)))?((((map__35247.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35247.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35247):map__35247);
var m = map__35247__$1;
var n = cljs.core.get.call(null,map__35247__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__35247__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__35249_35271 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35250_35272 = null;
var count__35251_35273 = (0);
var i__35252_35274 = (0);
while(true){
if((i__35252_35274 < count__35251_35273)){
var f_35275 = cljs.core._nth.call(null,chunk__35250_35272,i__35252_35274);
cljs.core.println.call(null,"  ",f_35275);

var G__35276 = seq__35249_35271;
var G__35277 = chunk__35250_35272;
var G__35278 = count__35251_35273;
var G__35279 = (i__35252_35274 + (1));
seq__35249_35271 = G__35276;
chunk__35250_35272 = G__35277;
count__35251_35273 = G__35278;
i__35252_35274 = G__35279;
continue;
} else {
var temp__4657__auto___35280 = cljs.core.seq.call(null,seq__35249_35271);
if(temp__4657__auto___35280){
var seq__35249_35281__$1 = temp__4657__auto___35280;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35249_35281__$1)){
var c__26790__auto___35282 = cljs.core.chunk_first.call(null,seq__35249_35281__$1);
var G__35283 = cljs.core.chunk_rest.call(null,seq__35249_35281__$1);
var G__35284 = c__26790__auto___35282;
var G__35285 = cljs.core.count.call(null,c__26790__auto___35282);
var G__35286 = (0);
seq__35249_35271 = G__35283;
chunk__35250_35272 = G__35284;
count__35251_35273 = G__35285;
i__35252_35274 = G__35286;
continue;
} else {
var f_35287 = cljs.core.first.call(null,seq__35249_35281__$1);
cljs.core.println.call(null,"  ",f_35287);

var G__35288 = cljs.core.next.call(null,seq__35249_35281__$1);
var G__35289 = null;
var G__35290 = (0);
var G__35291 = (0);
seq__35249_35271 = G__35288;
chunk__35250_35272 = G__35289;
count__35251_35273 = G__35290;
i__35252_35274 = G__35291;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35292 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__25979__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_35292);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_35292)))?cljs.core.second.call(null,arglists_35292):arglists_35292));
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
var seq__35253_35293 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35254_35294 = null;
var count__35255_35295 = (0);
var i__35256_35296 = (0);
while(true){
if((i__35256_35296 < count__35255_35295)){
var vec__35257_35297 = cljs.core._nth.call(null,chunk__35254_35294,i__35256_35296);
var name_35298 = cljs.core.nth.call(null,vec__35257_35297,(0),null);
var map__35260_35299 = cljs.core.nth.call(null,vec__35257_35297,(1),null);
var map__35260_35300__$1 = ((((!((map__35260_35299 == null)))?((((map__35260_35299.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35260_35299.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35260_35299):map__35260_35299);
var doc_35301 = cljs.core.get.call(null,map__35260_35300__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35302 = cljs.core.get.call(null,map__35260_35300__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35298);

cljs.core.println.call(null," ",arglists_35302);

if(cljs.core.truth_(doc_35301)){
cljs.core.println.call(null," ",doc_35301);
} else {
}

var G__35303 = seq__35253_35293;
var G__35304 = chunk__35254_35294;
var G__35305 = count__35255_35295;
var G__35306 = (i__35256_35296 + (1));
seq__35253_35293 = G__35303;
chunk__35254_35294 = G__35304;
count__35255_35295 = G__35305;
i__35256_35296 = G__35306;
continue;
} else {
var temp__4657__auto___35307 = cljs.core.seq.call(null,seq__35253_35293);
if(temp__4657__auto___35307){
var seq__35253_35308__$1 = temp__4657__auto___35307;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35253_35308__$1)){
var c__26790__auto___35309 = cljs.core.chunk_first.call(null,seq__35253_35308__$1);
var G__35310 = cljs.core.chunk_rest.call(null,seq__35253_35308__$1);
var G__35311 = c__26790__auto___35309;
var G__35312 = cljs.core.count.call(null,c__26790__auto___35309);
var G__35313 = (0);
seq__35253_35293 = G__35310;
chunk__35254_35294 = G__35311;
count__35255_35295 = G__35312;
i__35256_35296 = G__35313;
continue;
} else {
var vec__35262_35314 = cljs.core.first.call(null,seq__35253_35308__$1);
var name_35315 = cljs.core.nth.call(null,vec__35262_35314,(0),null);
var map__35265_35316 = cljs.core.nth.call(null,vec__35262_35314,(1),null);
var map__35265_35317__$1 = ((((!((map__35265_35316 == null)))?((((map__35265_35316.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35265_35316.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35265_35316):map__35265_35316);
var doc_35318 = cljs.core.get.call(null,map__35265_35317__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35319 = cljs.core.get.call(null,map__35265_35317__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35315);

cljs.core.println.call(null," ",arglists_35319);

if(cljs.core.truth_(doc_35318)){
cljs.core.println.call(null," ",doc_35318);
} else {
}

var G__35320 = cljs.core.next.call(null,seq__35253_35308__$1);
var G__35321 = null;
var G__35322 = (0);
var G__35323 = (0);
seq__35253_35293 = G__35320;
chunk__35254_35294 = G__35321;
count__35255_35295 = G__35322;
i__35256_35296 = G__35323;
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

var seq__35267 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35268 = null;
var count__35269 = (0);
var i__35270 = (0);
while(true){
if((i__35270 < count__35269)){
var role = cljs.core._nth.call(null,chunk__35268,i__35270);
var temp__4657__auto___35324__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___35324__$1)){
var spec_35325 = temp__4657__auto___35324__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_35325));
} else {
}

var G__35326 = seq__35267;
var G__35327 = chunk__35268;
var G__35328 = count__35269;
var G__35329 = (i__35270 + (1));
seq__35267 = G__35326;
chunk__35268 = G__35327;
count__35269 = G__35328;
i__35270 = G__35329;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__35267);
if(temp__4657__auto____$1){
var seq__35267__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35267__$1)){
var c__26790__auto__ = cljs.core.chunk_first.call(null,seq__35267__$1);
var G__35330 = cljs.core.chunk_rest.call(null,seq__35267__$1);
var G__35331 = c__26790__auto__;
var G__35332 = cljs.core.count.call(null,c__26790__auto__);
var G__35333 = (0);
seq__35267 = G__35330;
chunk__35268 = G__35331;
count__35269 = G__35332;
i__35270 = G__35333;
continue;
} else {
var role = cljs.core.first.call(null,seq__35267__$1);
var temp__4657__auto___35334__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___35334__$2)){
var spec_35335 = temp__4657__auto___35334__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_35335));
} else {
}

var G__35336 = cljs.core.next.call(null,seq__35267__$1);
var G__35337 = null;
var G__35338 = (0);
var G__35339 = (0);
seq__35267 = G__35336;
chunk__35268 = G__35337;
count__35269 = G__35338;
i__35270 = G__35339;
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

//# sourceMappingURL=repl.js.map?rel=1498622389740