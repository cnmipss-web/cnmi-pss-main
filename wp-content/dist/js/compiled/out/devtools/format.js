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
var x__37425__auto__ = (((value == null))?null:value);
var m__37426__auto__ = (devtools.format._header[goog.typeOf(x__37425__auto__)]);
if(!((m__37426__auto__ == null))){
return m__37426__auto__.call(null,value);
} else {
var m__37426__auto____$1 = (devtools.format._header["_"]);
if(!((m__37426__auto____$1 == null))){
return m__37426__auto____$1.call(null,value);
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
var x__37425__auto__ = (((value == null))?null:value);
var m__37426__auto__ = (devtools.format._has_body[goog.typeOf(x__37425__auto__)]);
if(!((m__37426__auto__ == null))){
return m__37426__auto__.call(null,value);
} else {
var m__37426__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__37426__auto____$1 == null))){
return m__37426__auto____$1.call(null,value);
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
var x__37425__auto__ = (((value == null))?null:value);
var m__37426__auto__ = (devtools.format._body[goog.typeOf(x__37425__auto__)]);
if(!((m__37426__auto__ == null))){
return m__37426__auto__.call(null,value);
} else {
var m__37426__auto____$1 = (devtools.format._body["_"]);
if(!((m__37426__auto____$1 == null))){
return m__37426__auto____$1.call(null,value);
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
var o__48585__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__48585__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__48585__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__48585__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__48584__auto__ = temp__4657__auto____$2;
return goog.object.get(o__48584__auto__,"make_template");
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
var o__48585__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__48585__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__48585__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__48585__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__48584__auto__ = temp__4657__auto____$2;
return goog.object.get(o__48584__auto__,"make_group");
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
var o__48585__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__48585__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__48585__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__48585__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__48584__auto__ = temp__4657__auto____$2;
return goog.object.get(o__48584__auto__,"make_reference");
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
var o__48585__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__48585__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__48585__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__48585__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__48584__auto__ = temp__4657__auto____$2;
return goog.object.get(o__48584__auto__,"make_surrogate");
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
var o__48585__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__48585__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__48585__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__48585__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__48584__auto__ = temp__4657__auto____$2;
return goog.object.get(o__48584__auto__,"render_markup");
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
var o__48585__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__48585__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__48585__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__48585__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__48584__auto__ = temp__4657__auto____$2;
return goog.object.get(o__48584__auto__,"_LT_header_GT_");
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
var o__48585__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__48585__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__48585__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__48585__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__48584__auto__ = temp__4657__auto____$2;
return goog.object.get(o__48584__auto__,"_LT_standard_body_GT_");
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
var args__37888__auto__ = [];
var len__37881__auto___48616 = arguments.length;
var i__37882__auto___48617 = (0);
while(true){
if((i__37882__auto___48617 < len__37881__auto___48616)){
args__37888__auto__.push((arguments[i__37882__auto___48617]));

var G__48618 = (i__37882__auto___48617 + (1));
i__37882__auto___48617 = G__48618;
continue;
} else {
}
break;
}

var argseq__37889__auto__ = ((((0) < args__37888__auto__.length))?(new cljs.core.IndexedSeq(args__37888__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__37889__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq48615){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48615));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__37888__auto__ = [];
var len__37881__auto___48620 = arguments.length;
var i__37882__auto___48621 = (0);
while(true){
if((i__37882__auto___48621 < len__37881__auto___48620)){
args__37888__auto__.push((arguments[i__37882__auto___48621]));

var G__48622 = (i__37882__auto___48621 + (1));
i__37882__auto___48621 = G__48622;
continue;
} else {
}
break;
}

var argseq__37889__auto__ = ((((0) < args__37888__auto__.length))?(new cljs.core.IndexedSeq(args__37888__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__37889__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq48619){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48619));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__37888__auto__ = [];
var len__37881__auto___48624 = arguments.length;
var i__37882__auto___48625 = (0);
while(true){
if((i__37882__auto___48625 < len__37881__auto___48624)){
args__37888__auto__.push((arguments[i__37882__auto___48625]));

var G__48626 = (i__37882__auto___48625 + (1));
i__37882__auto___48625 = G__48626;
continue;
} else {
}
break;
}

var argseq__37889__auto__ = ((((0) < args__37888__auto__.length))?(new cljs.core.IndexedSeq(args__37888__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__37889__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq48623){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48623));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__37888__auto__ = [];
var len__37881__auto___48628 = arguments.length;
var i__37882__auto___48629 = (0);
while(true){
if((i__37882__auto___48629 < len__37881__auto___48628)){
args__37888__auto__.push((arguments[i__37882__auto___48629]));

var G__48630 = (i__37882__auto___48629 + (1));
i__37882__auto___48629 = G__48630;
continue;
} else {
}
break;
}

var argseq__37889__auto__ = ((((0) < args__37888__auto__.length))?(new cljs.core.IndexedSeq(args__37888__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__37889__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq48627){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48627));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__37888__auto__ = [];
var len__37881__auto___48632 = arguments.length;
var i__37882__auto___48633 = (0);
while(true){
if((i__37882__auto___48633 < len__37881__auto___48632)){
args__37888__auto__.push((arguments[i__37882__auto___48633]));

var G__48634 = (i__37882__auto___48633 + (1));
i__37882__auto___48633 = G__48634;
continue;
} else {
}
break;
}

var argseq__37889__auto__ = ((((0) < args__37888__auto__.length))?(new cljs.core.IndexedSeq(args__37888__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__37889__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq48631){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48631));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__37888__auto__ = [];
var len__37881__auto___48636 = arguments.length;
var i__37882__auto___48637 = (0);
while(true){
if((i__37882__auto___48637 < len__37881__auto___48636)){
args__37888__auto__.push((arguments[i__37882__auto___48637]));

var G__48638 = (i__37882__auto___48637 + (1));
i__37882__auto___48637 = G__48638;
continue;
} else {
}
break;
}

var argseq__37889__auto__ = ((((0) < args__37888__auto__.length))?(new cljs.core.IndexedSeq(args__37888__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__37889__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq48635){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48635));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__37888__auto__ = [];
var len__37881__auto___48640 = arguments.length;
var i__37882__auto___48641 = (0);
while(true){
if((i__37882__auto___48641 < len__37881__auto___48640)){
args__37888__auto__.push((arguments[i__37882__auto___48641]));

var G__48642 = (i__37882__auto___48641 + (1));
i__37882__auto___48641 = G__48642;
continue;
} else {
}
break;
}

var argseq__37889__auto__ = ((((0) < args__37888__auto__.length))?(new cljs.core.IndexedSeq(args__37888__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__37889__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq48639){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48639));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__37888__auto__ = [];
var len__37881__auto___48650 = arguments.length;
var i__37882__auto___48651 = (0);
while(true){
if((i__37882__auto___48651 < len__37881__auto___48650)){
args__37888__auto__.push((arguments[i__37882__auto___48651]));

var G__48652 = (i__37882__auto___48651 + (1));
i__37882__auto___48651 = G__48652;
continue;
} else {
}
break;
}

var argseq__37889__auto__ = ((((1) < args__37888__auto__.length))?(new cljs.core.IndexedSeq(args__37888__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37889__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__48646){
var vec__48647 = p__48646;
var state_override = cljs.core.nth.call(null,vec__48647,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__48647,state_override){
return (function (p1__48643_SHARP_){
return cljs.core.merge.call(null,p1__48643_SHARP_,state_override);
});})(vec__48647,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq48644){
var G__48645 = cljs.core.first.call(null,seq48644);
var seq48644__$1 = cljs.core.next.call(null,seq48644);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__48645,seq48644__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__37888__auto__ = [];
var len__37881__auto___48654 = arguments.length;
var i__37882__auto___48655 = (0);
while(true){
if((i__37882__auto___48655 < len__37881__auto___48654)){
args__37888__auto__.push((arguments[i__37882__auto___48655]));

var G__48656 = (i__37882__auto___48655 + (1));
i__37882__auto___48655 = G__48656;
continue;
} else {
}
break;
}

var argseq__37889__auto__ = ((((0) < args__37888__auto__.length))?(new cljs.core.IndexedSeq(args__37888__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__37889__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq48653){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48653));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__37888__auto__ = [];
var len__37881__auto___48659 = arguments.length;
var i__37882__auto___48660 = (0);
while(true){
if((i__37882__auto___48660 < len__37881__auto___48659)){
args__37888__auto__.push((arguments[i__37882__auto___48660]));

var G__48661 = (i__37882__auto___48660 + (1));
i__37882__auto___48660 = G__48661;
continue;
} else {
}
break;
}

var argseq__37889__auto__ = ((((1) < args__37888__auto__.length))?(new cljs.core.IndexedSeq(args__37888__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37889__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq48657){
var G__48658 = cljs.core.first.call(null,seq48657);
var seq48657__$1 = cljs.core.next.call(null,seq48657);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__48658,seq48657__$1);
});


//# sourceMappingURL=format.js.map?rel=1503550045441