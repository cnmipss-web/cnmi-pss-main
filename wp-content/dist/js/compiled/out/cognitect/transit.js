// Compiled by ClojureScript 1.9.229 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__27550_27554 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__27551_27555 = null;
var count__27552_27556 = (0);
var i__27553_27557 = (0);
while(true){
if((i__27553_27557 < count__27552_27556)){
var k_27558 = cljs.core._nth.call(null,chunk__27551_27555,i__27553_27557);
var v_27559 = (b[k_27558]);
(a[k_27558] = v_27559);

var G__27560 = seq__27550_27554;
var G__27561 = chunk__27551_27555;
var G__27562 = count__27552_27556;
var G__27563 = (i__27553_27557 + (1));
seq__27550_27554 = G__27560;
chunk__27551_27555 = G__27561;
count__27552_27556 = G__27562;
i__27553_27557 = G__27563;
continue;
} else {
var temp__4657__auto___27564 = cljs.core.seq.call(null,seq__27550_27554);
if(temp__4657__auto___27564){
var seq__27550_27565__$1 = temp__4657__auto___27564;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27550_27565__$1)){
var c__26800__auto___27566 = cljs.core.chunk_first.call(null,seq__27550_27565__$1);
var G__27567 = cljs.core.chunk_rest.call(null,seq__27550_27565__$1);
var G__27568 = c__26800__auto___27566;
var G__27569 = cljs.core.count.call(null,c__26800__auto___27566);
var G__27570 = (0);
seq__27550_27554 = G__27567;
chunk__27551_27555 = G__27568;
count__27552_27556 = G__27569;
i__27553_27557 = G__27570;
continue;
} else {
var k_27571 = cljs.core.first.call(null,seq__27550_27565__$1);
var v_27572 = (b[k_27571]);
(a[k_27571] = v_27572);

var G__27573 = cljs.core.next.call(null,seq__27550_27565__$1);
var G__27574 = null;
var G__27575 = (0);
var G__27576 = (0);
seq__27550_27554 = G__27573;
chunk__27551_27555 = G__27574;
count__27552_27556 = G__27575;
i__27553_27557 = G__27576;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__26595__auto__,writer__26596__auto__,opt__26597__auto__){
return cljs.core._write.call(null,writer__26596__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__26595__auto__,writer__26596__auto__,opt__26597__auto__){
return cljs.core._write.call(null,writer__26596__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args27577 = [];
var len__27064__auto___27580 = arguments.length;
var i__27065__auto___27581 = (0);
while(true){
if((i__27065__auto___27581 < len__27064__auto___27580)){
args27577.push((arguments[i__27065__auto___27581]));

var G__27582 = (i__27065__auto___27581 + (1));
i__27065__auto___27581 = G__27582;
continue;
} else {
}
break;
}

var G__27579 = args27577.length;
switch (G__27579) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27577.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__27584 = (i + (2));
var G__27585 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__27584;
ret = G__27585;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;

/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__26595__auto__,writer__26596__auto__,opt__26597__auto__){
return cljs.core._write.call(null,writer__26596__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__26595__auto__,writer__26596__auto__,opt__26597__auto__){
return cljs.core._write.call(null,writer__26596__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__27586_27590 = cljs.core.seq.call(null,v);
var chunk__27587_27591 = null;
var count__27588_27592 = (0);
var i__27589_27593 = (0);
while(true){
if((i__27589_27593 < count__27588_27592)){
var x_27594 = cljs.core._nth.call(null,chunk__27587_27591,i__27589_27593);
ret.push(x_27594);

var G__27595 = seq__27586_27590;
var G__27596 = chunk__27587_27591;
var G__27597 = count__27588_27592;
var G__27598 = (i__27589_27593 + (1));
seq__27586_27590 = G__27595;
chunk__27587_27591 = G__27596;
count__27588_27592 = G__27597;
i__27589_27593 = G__27598;
continue;
} else {
var temp__4657__auto___27599 = cljs.core.seq.call(null,seq__27586_27590);
if(temp__4657__auto___27599){
var seq__27586_27600__$1 = temp__4657__auto___27599;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27586_27600__$1)){
var c__26800__auto___27601 = cljs.core.chunk_first.call(null,seq__27586_27600__$1);
var G__27602 = cljs.core.chunk_rest.call(null,seq__27586_27600__$1);
var G__27603 = c__26800__auto___27601;
var G__27604 = cljs.core.count.call(null,c__26800__auto___27601);
var G__27605 = (0);
seq__27586_27590 = G__27602;
chunk__27587_27591 = G__27603;
count__27588_27592 = G__27604;
i__27589_27593 = G__27605;
continue;
} else {
var x_27606 = cljs.core.first.call(null,seq__27586_27600__$1);
ret.push(x_27606);

var G__27607 = cljs.core.next.call(null,seq__27586_27600__$1);
var G__27608 = null;
var G__27609 = (0);
var G__27610 = (0);
seq__27586_27590 = G__27607;
chunk__27587_27591 = G__27608;
count__27588_27592 = G__27609;
i__27589_27593 = G__27610;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__26595__auto__,writer__26596__auto__,opt__26597__auto__){
return cljs.core._write.call(null,writer__26596__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__26595__auto__,writer__26596__auto__,opt__26597__auto__){
return cljs.core._write.call(null,writer__26596__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__27611_27615 = cljs.core.seq.call(null,v);
var chunk__27612_27616 = null;
var count__27613_27617 = (0);
var i__27614_27618 = (0);
while(true){
if((i__27614_27618 < count__27613_27617)){
var x_27619 = cljs.core._nth.call(null,chunk__27612_27616,i__27614_27618);
ret.push(x_27619);

var G__27620 = seq__27611_27615;
var G__27621 = chunk__27612_27616;
var G__27622 = count__27613_27617;
var G__27623 = (i__27614_27618 + (1));
seq__27611_27615 = G__27620;
chunk__27612_27616 = G__27621;
count__27613_27617 = G__27622;
i__27614_27618 = G__27623;
continue;
} else {
var temp__4657__auto___27624 = cljs.core.seq.call(null,seq__27611_27615);
if(temp__4657__auto___27624){
var seq__27611_27625__$1 = temp__4657__auto___27624;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27611_27625__$1)){
var c__26800__auto___27626 = cljs.core.chunk_first.call(null,seq__27611_27625__$1);
var G__27627 = cljs.core.chunk_rest.call(null,seq__27611_27625__$1);
var G__27628 = c__26800__auto___27626;
var G__27629 = cljs.core.count.call(null,c__26800__auto___27626);
var G__27630 = (0);
seq__27611_27615 = G__27627;
chunk__27612_27616 = G__27628;
count__27613_27617 = G__27629;
i__27614_27618 = G__27630;
continue;
} else {
var x_27631 = cljs.core.first.call(null,seq__27611_27625__$1);
ret.push(x_27631);

var G__27632 = cljs.core.next.call(null,seq__27611_27625__$1);
var G__27633 = null;
var G__27634 = (0);
var G__27635 = (0);
seq__27611_27615 = G__27632;
chunk__27612_27616 = G__27633;
count__27613_27617 = G__27634;
i__27614_27618 = G__27635;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__26595__auto__,writer__26596__auto__,opt__26597__auto__){
return cljs.core._write.call(null,writer__26596__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__27636_27640 = cljs.core.seq.call(null,v);
var chunk__27637_27641 = null;
var count__27638_27642 = (0);
var i__27639_27643 = (0);
while(true){
if((i__27639_27643 < count__27638_27642)){
var x_27644 = cljs.core._nth.call(null,chunk__27637_27641,i__27639_27643);
ret.push(x_27644);

var G__27645 = seq__27636_27640;
var G__27646 = chunk__27637_27641;
var G__27647 = count__27638_27642;
var G__27648 = (i__27639_27643 + (1));
seq__27636_27640 = G__27645;
chunk__27637_27641 = G__27646;
count__27638_27642 = G__27647;
i__27639_27643 = G__27648;
continue;
} else {
var temp__4657__auto___27649 = cljs.core.seq.call(null,seq__27636_27640);
if(temp__4657__auto___27649){
var seq__27636_27650__$1 = temp__4657__auto___27649;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27636_27650__$1)){
var c__26800__auto___27651 = cljs.core.chunk_first.call(null,seq__27636_27650__$1);
var G__27652 = cljs.core.chunk_rest.call(null,seq__27636_27650__$1);
var G__27653 = c__26800__auto___27651;
var G__27654 = cljs.core.count.call(null,c__26800__auto___27651);
var G__27655 = (0);
seq__27636_27640 = G__27652;
chunk__27637_27641 = G__27653;
count__27638_27642 = G__27654;
i__27639_27643 = G__27655;
continue;
} else {
var x_27656 = cljs.core.first.call(null,seq__27636_27650__$1);
ret.push(x_27656);

var G__27657 = cljs.core.next.call(null,seq__27636_27650__$1);
var G__27658 = null;
var G__27659 = (0);
var G__27660 = (0);
seq__27636_27640 = G__27657;
chunk__27637_27641 = G__27658;
count__27638_27642 = G__27659;
i__27639_27643 = G__27660;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__26595__auto__,writer__26596__auto__,opt__26597__auto__){
return cljs.core._write.call(null,writer__26596__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__26595__auto__,writer__26596__auto__,opt__26597__auto__){
return cljs.core._write.call(null,writer__26596__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args27661 = [];
var len__27064__auto___27676 = arguments.length;
var i__27065__auto___27677 = (0);
while(true){
if((i__27065__auto___27677 < len__27064__auto___27676)){
args27661.push((arguments[i__27065__auto___27677]));

var G__27678 = (i__27065__auto___27677 + (1));
i__27065__auto___27677 = G__27678;
continue;
} else {
}
break;
}

var G__27663 = args27661.length;
switch (G__27663) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27661.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__27664 = obj;
G__27664.push(kfn.call(null,k),vfn.call(null,v));

return G__27664;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x27665 = cljs.core.clone.call(null,handlers);
x27665.forEach = ((function (x27665,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__27666 = cljs.core.seq.call(null,coll);
var chunk__27667 = null;
var count__27668 = (0);
var i__27669 = (0);
while(true){
if((i__27669 < count__27668)){
var vec__27670 = cljs.core._nth.call(null,chunk__27667,i__27669);
var k = cljs.core.nth.call(null,vec__27670,(0),null);
var v = cljs.core.nth.call(null,vec__27670,(1),null);
f.call(null,v,k);

var G__27680 = seq__27666;
var G__27681 = chunk__27667;
var G__27682 = count__27668;
var G__27683 = (i__27669 + (1));
seq__27666 = G__27680;
chunk__27667 = G__27681;
count__27668 = G__27682;
i__27669 = G__27683;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27666);
if(temp__4657__auto__){
var seq__27666__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27666__$1)){
var c__26800__auto__ = cljs.core.chunk_first.call(null,seq__27666__$1);
var G__27684 = cljs.core.chunk_rest.call(null,seq__27666__$1);
var G__27685 = c__26800__auto__;
var G__27686 = cljs.core.count.call(null,c__26800__auto__);
var G__27687 = (0);
seq__27666 = G__27684;
chunk__27667 = G__27685;
count__27668 = G__27686;
i__27669 = G__27687;
continue;
} else {
var vec__27673 = cljs.core.first.call(null,seq__27666__$1);
var k = cljs.core.nth.call(null,vec__27673,(0),null);
var v = cljs.core.nth.call(null,vec__27673,(1),null);
f.call(null,v,k);

var G__27688 = cljs.core.next.call(null,seq__27666__$1);
var G__27689 = null;
var G__27690 = (0);
var G__27691 = (0);
seq__27666 = G__27688;
chunk__27667 = G__27689;
count__27668 = G__27690;
i__27669 = G__27691;
continue;
}
} else {
return null;
}
}
break;
}
});})(x27665,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x27665;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;

/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args27692 = [];
var len__27064__auto___27698 = arguments.length;
var i__27065__auto___27699 = (0);
while(true){
if((i__27065__auto___27699 < len__27064__auto___27698)){
args27692.push((arguments[i__27065__auto___27699]));

var G__27700 = (i__27065__auto___27699 + (1));
i__27065__auto___27699 = G__27700;
continue;
} else {
}
break;
}

var G__27694 = args27692.length;
switch (G__27694) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27692.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit27695 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit27695 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta27696){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta27696 = meta27696;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit27695.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27697,meta27696__$1){
var self__ = this;
var _27697__$1 = this;
return (new cognitect.transit.t_cognitect$transit27695(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta27696__$1));
});

cognitect.transit.t_cognitect$transit27695.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27697){
var self__ = this;
var _27697__$1 = this;
return self__.meta27696;
});

cognitect.transit.t_cognitect$transit27695.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit27695.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit27695.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit27695.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit27695.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta27696","meta27696",-711450283,null)], null);
});

cognitect.transit.t_cognitect$transit27695.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit27695.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit27695";

cognitect.transit.t_cognitect$transit27695.cljs$lang$ctorPrWriter = (function (this__26595__auto__,writer__26596__auto__,opt__26597__auto__){
return cljs.core._write.call(null,writer__26596__auto__,"cognitect.transit/t_cognitect$transit27695");
});

cognitect.transit.__GT_t_cognitect$transit27695 = (function cognitect$transit$__GT_t_cognitect$transit27695(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta27696){
return (new cognitect.transit.t_cognitect$transit27695(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta27696));
});

}

return (new cognitect.transit.t_cognitect$transit27695(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;

/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__25989__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__25989__auto__)){
return or__25989__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map?rel=1499813242259