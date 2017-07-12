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
var x__26652__auto__ = (((value == null))?null:value);
var m__26653__auto__ = (devtools.format._header[goog.typeOf(x__26652__auto__)]);
if(!((m__26653__auto__ == null))){
return m__26653__auto__.call(null,value);
} else {
var m__26653__auto____$1 = (devtools.format._header["_"]);
if(!((m__26653__auto____$1 == null))){
return m__26653__auto____$1.call(null,value);
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
var x__26652__auto__ = (((value == null))?null:value);
var m__26653__auto__ = (devtools.format._has_body[goog.typeOf(x__26652__auto__)]);
if(!((m__26653__auto__ == null))){
return m__26653__auto__.call(null,value);
} else {
var m__26653__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__26653__auto____$1 == null))){
return m__26653__auto____$1.call(null,value);
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
var x__26652__auto__ = (((value == null))?null:value);
var m__26653__auto__ = (devtools.format._body[goog.typeOf(x__26652__auto__)]);
if(!((m__26653__auto__ == null))){
return m__26653__auto__.call(null,value);
} else {
var m__26653__auto____$1 = (devtools.format._body["_"]);
if(!((m__26653__auto____$1 == null))){
return m__26653__auto____$1.call(null,value);
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
var o__38049__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__38049__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__38049__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__38049__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__38048__auto__ = temp__4657__auto____$2;
return goog.object.get(o__38048__auto__,"make_template");
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
var o__38049__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__38049__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__38049__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__38049__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__38048__auto__ = temp__4657__auto____$2;
return goog.object.get(o__38048__auto__,"make_group");
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
var o__38049__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__38049__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__38049__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__38049__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__38048__auto__ = temp__4657__auto____$2;
return goog.object.get(o__38048__auto__,"make_reference");
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
var o__38049__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__38049__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__38049__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__38049__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__38048__auto__ = temp__4657__auto____$2;
return goog.object.get(o__38048__auto__,"make_surrogate");
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
var o__38049__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__38049__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__38049__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__38049__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__38048__auto__ = temp__4657__auto____$2;
return goog.object.get(o__38048__auto__,"render_markup");
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
var o__38049__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__38049__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__38049__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__38049__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__38048__auto__ = temp__4657__auto____$2;
return goog.object.get(o__38048__auto__,"_LT_header_GT_");
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
var o__38049__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__38049__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__38049__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__38049__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__38048__auto__ = temp__4657__auto____$2;
return goog.object.get(o__38048__auto__,"_LT_standard_body_GT_");
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
var args__27071__auto__ = [];
var len__27064__auto___38070 = arguments.length;
var i__27065__auto___38071 = (0);
while(true){
if((i__27065__auto___38071 < len__27064__auto___38070)){
args__27071__auto__.push((arguments[i__27065__auto___38071]));

var G__38072 = (i__27065__auto___38071 + (1));
i__27065__auto___38071 = G__38072;
continue;
} else {
}
break;
}

var argseq__27072__auto__ = ((((0) < args__27071__auto__.length))?(new cljs.core.IndexedSeq(args__27071__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__27072__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq38069){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38069));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__27071__auto__ = [];
var len__27064__auto___38074 = arguments.length;
var i__27065__auto___38075 = (0);
while(true){
if((i__27065__auto___38075 < len__27064__auto___38074)){
args__27071__auto__.push((arguments[i__27065__auto___38075]));

var G__38076 = (i__27065__auto___38075 + (1));
i__27065__auto___38075 = G__38076;
continue;
} else {
}
break;
}

var argseq__27072__auto__ = ((((0) < args__27071__auto__.length))?(new cljs.core.IndexedSeq(args__27071__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__27072__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq38073){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38073));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__27071__auto__ = [];
var len__27064__auto___38078 = arguments.length;
var i__27065__auto___38079 = (0);
while(true){
if((i__27065__auto___38079 < len__27064__auto___38078)){
args__27071__auto__.push((arguments[i__27065__auto___38079]));

var G__38080 = (i__27065__auto___38079 + (1));
i__27065__auto___38079 = G__38080;
continue;
} else {
}
break;
}

var argseq__27072__auto__ = ((((0) < args__27071__auto__.length))?(new cljs.core.IndexedSeq(args__27071__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__27072__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq38077){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38077));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__27071__auto__ = [];
var len__27064__auto___38082 = arguments.length;
var i__27065__auto___38083 = (0);
while(true){
if((i__27065__auto___38083 < len__27064__auto___38082)){
args__27071__auto__.push((arguments[i__27065__auto___38083]));

var G__38084 = (i__27065__auto___38083 + (1));
i__27065__auto___38083 = G__38084;
continue;
} else {
}
break;
}

var argseq__27072__auto__ = ((((0) < args__27071__auto__.length))?(new cljs.core.IndexedSeq(args__27071__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__27072__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq38081){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38081));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__27071__auto__ = [];
var len__27064__auto___38086 = arguments.length;
var i__27065__auto___38087 = (0);
while(true){
if((i__27065__auto___38087 < len__27064__auto___38086)){
args__27071__auto__.push((arguments[i__27065__auto___38087]));

var G__38088 = (i__27065__auto___38087 + (1));
i__27065__auto___38087 = G__38088;
continue;
} else {
}
break;
}

var argseq__27072__auto__ = ((((0) < args__27071__auto__.length))?(new cljs.core.IndexedSeq(args__27071__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__27072__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq38085){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38085));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__27071__auto__ = [];
var len__27064__auto___38090 = arguments.length;
var i__27065__auto___38091 = (0);
while(true){
if((i__27065__auto___38091 < len__27064__auto___38090)){
args__27071__auto__.push((arguments[i__27065__auto___38091]));

var G__38092 = (i__27065__auto___38091 + (1));
i__27065__auto___38091 = G__38092;
continue;
} else {
}
break;
}

var argseq__27072__auto__ = ((((0) < args__27071__auto__.length))?(new cljs.core.IndexedSeq(args__27071__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__27072__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq38089){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38089));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__27071__auto__ = [];
var len__27064__auto___38094 = arguments.length;
var i__27065__auto___38095 = (0);
while(true){
if((i__27065__auto___38095 < len__27064__auto___38094)){
args__27071__auto__.push((arguments[i__27065__auto___38095]));

var G__38096 = (i__27065__auto___38095 + (1));
i__27065__auto___38095 = G__38096;
continue;
} else {
}
break;
}

var argseq__27072__auto__ = ((((0) < args__27071__auto__.length))?(new cljs.core.IndexedSeq(args__27071__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__27072__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq38093){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38093));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__27071__auto__ = [];
var len__27064__auto___38104 = arguments.length;
var i__27065__auto___38105 = (0);
while(true){
if((i__27065__auto___38105 < len__27064__auto___38104)){
args__27071__auto__.push((arguments[i__27065__auto___38105]));

var G__38106 = (i__27065__auto___38105 + (1));
i__27065__auto___38105 = G__38106;
continue;
} else {
}
break;
}

var argseq__27072__auto__ = ((((1) < args__27071__auto__.length))?(new cljs.core.IndexedSeq(args__27071__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27072__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__38100){
var vec__38101 = p__38100;
var state_override = cljs.core.nth.call(null,vec__38101,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__38101,state_override){
return (function (p1__38097_SHARP_){
return cljs.core.merge.call(null,p1__38097_SHARP_,state_override);
});})(vec__38101,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq38098){
var G__38099 = cljs.core.first.call(null,seq38098);
var seq38098__$1 = cljs.core.next.call(null,seq38098);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__38099,seq38098__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__27071__auto__ = [];
var len__27064__auto___38108 = arguments.length;
var i__27065__auto___38109 = (0);
while(true){
if((i__27065__auto___38109 < len__27064__auto___38108)){
args__27071__auto__.push((arguments[i__27065__auto___38109]));

var G__38110 = (i__27065__auto___38109 + (1));
i__27065__auto___38109 = G__38110;
continue;
} else {
}
break;
}

var argseq__27072__auto__ = ((((0) < args__27071__auto__.length))?(new cljs.core.IndexedSeq(args__27071__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__27072__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq38107){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38107));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__27071__auto__ = [];
var len__27064__auto___38113 = arguments.length;
var i__27065__auto___38114 = (0);
while(true){
if((i__27065__auto___38114 < len__27064__auto___38113)){
args__27071__auto__.push((arguments[i__27065__auto___38114]));

var G__38115 = (i__27065__auto___38114 + (1));
i__27065__auto___38114 = G__38115;
continue;
} else {
}
break;
}

var argseq__27072__auto__ = ((((1) < args__27071__auto__.length))?(new cljs.core.IndexedSeq(args__27071__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27072__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq38111){
var G__38112 = cljs.core.first.call(null,seq38111);
var seq38111__$1 = cljs.core.next.call(null,seq38111);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__38112,seq38111__$1);
});


//# sourceMappingURL=format.js.map?rel=1499813250054