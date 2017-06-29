// Compiled by ClojureScript 1.9.229 {}
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
var x__26642__auto__ = (((value == null))?null:value);
var m__26643__auto__ = (devtools.format._header[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,value);
} else {
var m__26643__auto____$1 = (devtools.format._header["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,value);
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
var x__26642__auto__ = (((value == null))?null:value);
var m__26643__auto__ = (devtools.format._has_body[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,value);
} else {
var m__26643__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,value);
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
var x__26642__auto__ = (((value == null))?null:value);
var m__26643__auto__ = (devtools.format._body[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,value);
} else {
var m__26643__auto____$1 = (devtools.format._body["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,value);
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
var o__47188__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__47188__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__47188__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__47188__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__47187__auto__ = temp__4657__auto____$2;
return goog.object.get(o__47187__auto__,"make_template");
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
var o__47188__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__47188__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__47188__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__47188__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__47187__auto__ = temp__4657__auto____$2;
return goog.object.get(o__47187__auto__,"make_group");
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
var o__47188__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__47188__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__47188__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__47188__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__47187__auto__ = temp__4657__auto____$2;
return goog.object.get(o__47187__auto__,"make_reference");
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
var o__47188__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__47188__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__47188__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__47188__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__47187__auto__ = temp__4657__auto____$2;
return goog.object.get(o__47187__auto__,"make_surrogate");
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
var o__47188__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__47188__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__47188__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__47188__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__47187__auto__ = temp__4657__auto____$2;
return goog.object.get(o__47187__auto__,"render_markup");
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
var o__47188__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__47188__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__47188__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__47188__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__47187__auto__ = temp__4657__auto____$2;
return goog.object.get(o__47187__auto__,"_LT_header_GT_");
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
var o__47188__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__47188__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__47188__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__47188__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__47187__auto__ = temp__4657__auto____$2;
return goog.object.get(o__47187__auto__,"_LT_standard_body_GT_");
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
var args__27061__auto__ = [];
var len__27054__auto___69017 = arguments.length;
var i__27055__auto___69018 = (0);
while(true){
if((i__27055__auto___69018 < len__27054__auto___69017)){
args__27061__auto__.push((arguments[i__27055__auto___69018]));

var G__69019 = (i__27055__auto___69018 + (1));
i__27055__auto___69018 = G__69019;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq69016){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq69016));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__27061__auto__ = [];
var len__27054__auto___69021 = arguments.length;
var i__27055__auto___69022 = (0);
while(true){
if((i__27055__auto___69022 < len__27054__auto___69021)){
args__27061__auto__.push((arguments[i__27055__auto___69022]));

var G__69023 = (i__27055__auto___69022 + (1));
i__27055__auto___69022 = G__69023;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq69020){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq69020));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__27061__auto__ = [];
var len__27054__auto___69025 = arguments.length;
var i__27055__auto___69026 = (0);
while(true){
if((i__27055__auto___69026 < len__27054__auto___69025)){
args__27061__auto__.push((arguments[i__27055__auto___69026]));

var G__69027 = (i__27055__auto___69026 + (1));
i__27055__auto___69026 = G__69027;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq69024){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq69024));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__27061__auto__ = [];
var len__27054__auto___69029 = arguments.length;
var i__27055__auto___69030 = (0);
while(true){
if((i__27055__auto___69030 < len__27054__auto___69029)){
args__27061__auto__.push((arguments[i__27055__auto___69030]));

var G__69031 = (i__27055__auto___69030 + (1));
i__27055__auto___69030 = G__69031;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq69028){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq69028));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__27061__auto__ = [];
var len__27054__auto___69033 = arguments.length;
var i__27055__auto___69034 = (0);
while(true){
if((i__27055__auto___69034 < len__27054__auto___69033)){
args__27061__auto__.push((arguments[i__27055__auto___69034]));

var G__69035 = (i__27055__auto___69034 + (1));
i__27055__auto___69034 = G__69035;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq69032){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq69032));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__27061__auto__ = [];
var len__27054__auto___69037 = arguments.length;
var i__27055__auto___69038 = (0);
while(true){
if((i__27055__auto___69038 < len__27054__auto___69037)){
args__27061__auto__.push((arguments[i__27055__auto___69038]));

var G__69039 = (i__27055__auto___69038 + (1));
i__27055__auto___69038 = G__69039;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq69036){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq69036));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__27061__auto__ = [];
var len__27054__auto___69041 = arguments.length;
var i__27055__auto___69042 = (0);
while(true){
if((i__27055__auto___69042 < len__27054__auto___69041)){
args__27061__auto__.push((arguments[i__27055__auto___69042]));

var G__69043 = (i__27055__auto___69042 + (1));
i__27055__auto___69042 = G__69043;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq69040){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq69040));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__27061__auto__ = [];
var len__27054__auto___69051 = arguments.length;
var i__27055__auto___69052 = (0);
while(true){
if((i__27055__auto___69052 < len__27054__auto___69051)){
args__27061__auto__.push((arguments[i__27055__auto___69052]));

var G__69053 = (i__27055__auto___69052 + (1));
i__27055__auto___69052 = G__69053;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((1) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27062__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__69047){
var vec__69048 = p__69047;
var state_override = cljs.core.nth.call(null,vec__69048,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__69048,state_override){
return (function (p1__69044_SHARP_){
return cljs.core.merge.call(null,p1__69044_SHARP_,state_override);
});})(vec__69048,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq69045){
var G__69046 = cljs.core.first.call(null,seq69045);
var seq69045__$1 = cljs.core.next.call(null,seq69045);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__69046,seq69045__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__27061__auto__ = [];
var len__27054__auto___69055 = arguments.length;
var i__27055__auto___69056 = (0);
while(true){
if((i__27055__auto___69056 < len__27054__auto___69055)){
args__27061__auto__.push((arguments[i__27055__auto___69056]));

var G__69057 = (i__27055__auto___69056 + (1));
i__27055__auto___69056 = G__69057;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq69054){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq69054));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__27061__auto__ = [];
var len__27054__auto___69060 = arguments.length;
var i__27055__auto___69061 = (0);
while(true){
if((i__27055__auto___69061 < len__27054__auto___69060)){
args__27061__auto__.push((arguments[i__27055__auto___69061]));

var G__69062 = (i__27055__auto___69061 + (1));
i__27055__auto___69061 = G__69062;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((1) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27062__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq69058){
var G__69059 = cljs.core.first.call(null,seq69058);
var seq69058__$1 = cljs.core.next.call(null,seq69058);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__69059,seq69058__$1);
});


//# sourceMappingURL=format.js.map?rel=1498707053710