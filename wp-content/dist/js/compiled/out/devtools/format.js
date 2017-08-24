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
var o__48748__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__48748__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__48748__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__48748__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__48747__auto__ = temp__4657__auto____$2;
return goog.object.get(o__48747__auto__,"make_template");
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
var o__48748__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__48748__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__48748__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__48748__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__48747__auto__ = temp__4657__auto____$2;
return goog.object.get(o__48747__auto__,"make_group");
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
var o__48748__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__48748__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__48748__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__48748__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__48747__auto__ = temp__4657__auto____$2;
return goog.object.get(o__48747__auto__,"make_reference");
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
var o__48748__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__48748__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__48748__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__48748__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__48747__auto__ = temp__4657__auto____$2;
return goog.object.get(o__48747__auto__,"make_surrogate");
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
var o__48748__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__48748__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__48748__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__48748__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__48747__auto__ = temp__4657__auto____$2;
return goog.object.get(o__48747__auto__,"render_markup");
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
var o__48748__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__48748__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__48748__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__48748__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__48747__auto__ = temp__4657__auto____$2;
return goog.object.get(o__48747__auto__,"_LT_header_GT_");
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
var o__48748__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__48748__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__48748__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__48748__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__48747__auto__ = temp__4657__auto____$2;
return goog.object.get(o__48747__auto__,"_LT_standard_body_GT_");
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
var len__37881__auto___48769 = arguments.length;
var i__37882__auto___48770 = (0);
while(true){
if((i__37882__auto___48770 < len__37881__auto___48769)){
args__37888__auto__.push((arguments[i__37882__auto___48770]));

var G__48771 = (i__37882__auto___48770 + (1));
i__37882__auto___48770 = G__48771;
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

devtools.format.render_markup.cljs$lang$applyTo = (function (seq48768){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48768));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__37888__auto__ = [];
var len__37881__auto___48773 = arguments.length;
var i__37882__auto___48774 = (0);
while(true){
if((i__37882__auto___48774 < len__37881__auto___48773)){
args__37888__auto__.push((arguments[i__37882__auto___48774]));

var G__48775 = (i__37882__auto___48774 + (1));
i__37882__auto___48774 = G__48775;
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

devtools.format.make_template.cljs$lang$applyTo = (function (seq48772){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48772));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__37888__auto__ = [];
var len__37881__auto___48777 = arguments.length;
var i__37882__auto___48778 = (0);
while(true){
if((i__37882__auto___48778 < len__37881__auto___48777)){
args__37888__auto__.push((arguments[i__37882__auto___48778]));

var G__48779 = (i__37882__auto___48778 + (1));
i__37882__auto___48778 = G__48779;
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

devtools.format.make_group.cljs$lang$applyTo = (function (seq48776){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48776));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__37888__auto__ = [];
var len__37881__auto___48781 = arguments.length;
var i__37882__auto___48782 = (0);
while(true){
if((i__37882__auto___48782 < len__37881__auto___48781)){
args__37888__auto__.push((arguments[i__37882__auto___48782]));

var G__48783 = (i__37882__auto___48782 + (1));
i__37882__auto___48782 = G__48783;
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

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq48780){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48780));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__37888__auto__ = [];
var len__37881__auto___48785 = arguments.length;
var i__37882__auto___48786 = (0);
while(true){
if((i__37882__auto___48786 < len__37881__auto___48785)){
args__37888__auto__.push((arguments[i__37882__auto___48786]));

var G__48787 = (i__37882__auto___48786 + (1));
i__37882__auto___48786 = G__48787;
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

devtools.format.template.cljs$lang$applyTo = (function (seq48784){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48784));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__37888__auto__ = [];
var len__37881__auto___48789 = arguments.length;
var i__37882__auto___48790 = (0);
while(true){
if((i__37882__auto___48790 < len__37881__auto___48789)){
args__37888__auto__.push((arguments[i__37882__auto___48790]));

var G__48791 = (i__37882__auto___48790 + (1));
i__37882__auto___48790 = G__48791;
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

devtools.format.group.cljs$lang$applyTo = (function (seq48788){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48788));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__37888__auto__ = [];
var len__37881__auto___48793 = arguments.length;
var i__37882__auto___48794 = (0);
while(true){
if((i__37882__auto___48794 < len__37881__auto___48793)){
args__37888__auto__.push((arguments[i__37882__auto___48794]));

var G__48795 = (i__37882__auto___48794 + (1));
i__37882__auto___48794 = G__48795;
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

devtools.format.surrogate.cljs$lang$applyTo = (function (seq48792){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48792));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__37888__auto__ = [];
var len__37881__auto___48803 = arguments.length;
var i__37882__auto___48804 = (0);
while(true){
if((i__37882__auto___48804 < len__37881__auto___48803)){
args__37888__auto__.push((arguments[i__37882__auto___48804]));

var G__48805 = (i__37882__auto___48804 + (1));
i__37882__auto___48804 = G__48805;
continue;
} else {
}
break;
}

var argseq__37889__auto__ = ((((1) < args__37888__auto__.length))?(new cljs.core.IndexedSeq(args__37888__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37889__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__48799){
var vec__48800 = p__48799;
var state_override = cljs.core.nth.call(null,vec__48800,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__48800,state_override){
return (function (p1__48796_SHARP_){
return cljs.core.merge.call(null,p1__48796_SHARP_,state_override);
});})(vec__48800,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq48797){
var G__48798 = cljs.core.first.call(null,seq48797);
var seq48797__$1 = cljs.core.next.call(null,seq48797);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__48798,seq48797__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__37888__auto__ = [];
var len__37881__auto___48807 = arguments.length;
var i__37882__auto___48808 = (0);
while(true){
if((i__37882__auto___48808 < len__37881__auto___48807)){
args__37888__auto__.push((arguments[i__37882__auto___48808]));

var G__48809 = (i__37882__auto___48808 + (1));
i__37882__auto___48808 = G__48809;
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

devtools.format.build_header.cljs$lang$applyTo = (function (seq48806){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48806));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__37888__auto__ = [];
var len__37881__auto___48812 = arguments.length;
var i__37882__auto___48813 = (0);
while(true){
if((i__37882__auto___48813 < len__37881__auto___48812)){
args__37888__auto__.push((arguments[i__37882__auto___48813]));

var G__48814 = (i__37882__auto___48813 + (1));
i__37882__auto___48813 = G__48814;
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

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq48810){
var G__48811 = cljs.core.first.call(null,seq48810);
var seq48810__$1 = cljs.core.next.call(null,seq48810);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__48811,seq48810__$1);
});


//# sourceMappingURL=format.js.map?rel=1503532146759