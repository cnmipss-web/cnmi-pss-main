// Compiled by ClojureScript 1.9.671 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__37426__auto__ = (((value == null))?null:value);
var m__37427__auto__ = (devtools.format._header[goog.typeOf(x__37426__auto__)]);
if(!((m__37427__auto__ == null))){
return m__37427__auto__.call(null,value);
} else {
var m__37427__auto____$1 = (devtools.format._header["_"]);
if(!((m__37427__auto____$1 == null))){
return m__37427__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__37426__auto__ = (((value == null))?null:value);
var m__37427__auto__ = (devtools.format._has_body[goog.typeOf(x__37426__auto__)]);
if(!((m__37427__auto__ == null))){
return m__37427__auto__.call(null,value);
} else {
var m__37427__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__37427__auto____$1 == null))){
return m__37427__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__37426__auto__ = (((value == null))?null:value);
var m__37427__auto__ = (devtools.format._body[goog.typeOf(x__37426__auto__)]);
if(!((m__37427__auto__ == null))){
return m__37427__auto__.call(null,value);
} else {
var m__37427__auto____$1 = (devtools.format._body["_"]);
if(!((m__37427__auto____$1 == null))){
return m__37427__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__48582__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__48582__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__48582__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__48582__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__48581__auto__ = temp__4657__auto____$2;
return goog.object.get(o__48581__auto__,"make_template");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__48582__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__48582__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__48582__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__48582__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__48581__auto__ = temp__4657__auto____$2;
return goog.object.get(o__48581__auto__,"make_group");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__48582__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__48582__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__48582__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__48582__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__48581__auto__ = temp__4657__auto____$2;
return goog.object.get(o__48581__auto__,"make_reference");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__48582__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__48582__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__48582__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__48582__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__48581__auto__ = temp__4657__auto____$2;
return goog.object.get(o__48581__auto__,"make_surrogate");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__48582__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__48582__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__48582__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__48582__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__48581__auto__ = temp__4657__auto____$2;
return goog.object.get(o__48581__auto__,"render_markup");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__48582__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__48582__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__48582__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__48582__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__48581__auto__ = temp__4657__auto____$2;
return goog.object.get(o__48581__auto__,"_LT_header_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__48582__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__48582__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__48582__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__48582__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__48581__auto__ = temp__4657__auto____$2;
return goog.object.get(o__48581__auto__,"_LT_standard_body_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__37889__auto__ = [];
var len__37882__auto___48613 = arguments.length;
var i__37883__auto___48614 = (0);
while(true){
if((i__37883__auto___48614 < len__37882__auto___48613)){
args__37889__auto__.push((arguments[i__37883__auto___48614]));

var G__48615 = (i__37883__auto___48614 + (1));
i__37883__auto___48614 = G__48615;
continue;
} else {
}
break;
}

var argseq__37890__auto__ = ((((0) < args__37889__auto__.length))?(new cljs.core.IndexedSeq(args__37889__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__37890__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq48612){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48612));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__37889__auto__ = [];
var len__37882__auto___48617 = arguments.length;
var i__37883__auto___48618 = (0);
while(true){
if((i__37883__auto___48618 < len__37882__auto___48617)){
args__37889__auto__.push((arguments[i__37883__auto___48618]));

var G__48619 = (i__37883__auto___48618 + (1));
i__37883__auto___48618 = G__48619;
continue;
} else {
}
break;
}

var argseq__37890__auto__ = ((((0) < args__37889__auto__.length))?(new cljs.core.IndexedSeq(args__37889__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__37890__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq48616){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48616));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__37889__auto__ = [];
var len__37882__auto___48621 = arguments.length;
var i__37883__auto___48622 = (0);
while(true){
if((i__37883__auto___48622 < len__37882__auto___48621)){
args__37889__auto__.push((arguments[i__37883__auto___48622]));

var G__48623 = (i__37883__auto___48622 + (1));
i__37883__auto___48622 = G__48623;
continue;
} else {
}
break;
}

var argseq__37890__auto__ = ((((0) < args__37889__auto__.length))?(new cljs.core.IndexedSeq(args__37889__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__37890__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq48620){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48620));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__37889__auto__ = [];
var len__37882__auto___48625 = arguments.length;
var i__37883__auto___48626 = (0);
while(true){
if((i__37883__auto___48626 < len__37882__auto___48625)){
args__37889__auto__.push((arguments[i__37883__auto___48626]));

var G__48627 = (i__37883__auto___48626 + (1));
i__37883__auto___48626 = G__48627;
continue;
} else {
}
break;
}

var argseq__37890__auto__ = ((((0) < args__37889__auto__.length))?(new cljs.core.IndexedSeq(args__37889__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__37890__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq48624){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48624));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__37889__auto__ = [];
var len__37882__auto___48629 = arguments.length;
var i__37883__auto___48630 = (0);
while(true){
if((i__37883__auto___48630 < len__37882__auto___48629)){
args__37889__auto__.push((arguments[i__37883__auto___48630]));

var G__48631 = (i__37883__auto___48630 + (1));
i__37883__auto___48630 = G__48631;
continue;
} else {
}
break;
}

var argseq__37890__auto__ = ((((0) < args__37889__auto__.length))?(new cljs.core.IndexedSeq(args__37889__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__37890__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq48628){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48628));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__37889__auto__ = [];
var len__37882__auto___48633 = arguments.length;
var i__37883__auto___48634 = (0);
while(true){
if((i__37883__auto___48634 < len__37882__auto___48633)){
args__37889__auto__.push((arguments[i__37883__auto___48634]));

var G__48635 = (i__37883__auto___48634 + (1));
i__37883__auto___48634 = G__48635;
continue;
} else {
}
break;
}

var argseq__37890__auto__ = ((((0) < args__37889__auto__.length))?(new cljs.core.IndexedSeq(args__37889__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__37890__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq48632){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48632));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__37889__auto__ = [];
var len__37882__auto___48637 = arguments.length;
var i__37883__auto___48638 = (0);
while(true){
if((i__37883__auto___48638 < len__37882__auto___48637)){
args__37889__auto__.push((arguments[i__37883__auto___48638]));

var G__48639 = (i__37883__auto___48638 + (1));
i__37883__auto___48638 = G__48639;
continue;
} else {
}
break;
}

var argseq__37890__auto__ = ((((0) < args__37889__auto__.length))?(new cljs.core.IndexedSeq(args__37889__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__37890__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq48636){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48636));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__37889__auto__ = [];
var len__37882__auto___48647 = arguments.length;
var i__37883__auto___48648 = (0);
while(true){
if((i__37883__auto___48648 < len__37882__auto___48647)){
args__37889__auto__.push((arguments[i__37883__auto___48648]));

var G__48649 = (i__37883__auto___48648 + (1));
i__37883__auto___48648 = G__48649;
continue;
} else {
}
break;
}

var argseq__37890__auto__ = ((((1) < args__37889__auto__.length))?(new cljs.core.IndexedSeq(args__37889__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37890__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__48643){
var vec__48644 = p__48643;
var state_override = cljs.core.nth.call(null,vec__48644,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__48644,state_override){
return (function (p1__48640_SHARP_){
return cljs.core.merge.call(null,p1__48640_SHARP_,state_override);
});})(vec__48644,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq48641){
var G__48642 = cljs.core.first.call(null,seq48641);
var seq48641__$1 = cljs.core.next.call(null,seq48641);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__48642,seq48641__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__37889__auto__ = [];
var len__37882__auto___48651 = arguments.length;
var i__37883__auto___48652 = (0);
while(true){
if((i__37883__auto___48652 < len__37882__auto___48651)){
args__37889__auto__.push((arguments[i__37883__auto___48652]));

var G__48653 = (i__37883__auto___48652 + (1));
i__37883__auto___48652 = G__48653;
continue;
} else {
}
break;
}

var argseq__37890__auto__ = ((((0) < args__37889__auto__.length))?(new cljs.core.IndexedSeq(args__37889__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__37890__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq48650){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48650));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__37889__auto__ = [];
var len__37882__auto___48656 = arguments.length;
var i__37883__auto___48657 = (0);
while(true){
if((i__37883__auto___48657 < len__37882__auto___48656)){
args__37889__auto__.push((arguments[i__37883__auto___48657]));

var G__48658 = (i__37883__auto___48657 + (1));
i__37883__auto___48657 = G__48658;
continue;
} else {
}
break;
}

var argseq__37890__auto__ = ((((1) < args__37889__auto__.length))?(new cljs.core.IndexedSeq(args__37889__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37890__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq48654){
var G__48655 = cljs.core.first.call(null,seq48654);
var seq48654__$1 = cljs.core.next.call(null,seq48654);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__48655,seq48654__$1);
});


//# sourceMappingURL=format.js.map?rel=1503441681208