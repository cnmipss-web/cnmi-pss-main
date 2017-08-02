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
var x__27721__auto__ = (((value == null))?null:value);
var m__27722__auto__ = (devtools.format._header[goog.typeOf(x__27721__auto__)]);
if(!((m__27722__auto__ == null))){
return m__27722__auto__.call(null,value);
} else {
var m__27722__auto____$1 = (devtools.format._header["_"]);
if(!((m__27722__auto____$1 == null))){
return m__27722__auto____$1.call(null,value);
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
var x__27721__auto__ = (((value == null))?null:value);
var m__27722__auto__ = (devtools.format._has_body[goog.typeOf(x__27721__auto__)]);
if(!((m__27722__auto__ == null))){
return m__27722__auto__.call(null,value);
} else {
var m__27722__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__27722__auto____$1 == null))){
return m__27722__auto____$1.call(null,value);
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
var x__27721__auto__ = (((value == null))?null:value);
var m__27722__auto__ = (devtools.format._body[goog.typeOf(x__27721__auto__)]);
if(!((m__27722__auto__ == null))){
return m__27722__auto__.call(null,value);
} else {
var m__27722__auto____$1 = (devtools.format._body["_"]);
if(!((m__27722__auto____$1 == null))){
return m__27722__auto____$1.call(null,value);
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
var o__38017__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__38017__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__38017__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__38017__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__38016__auto__ = temp__4657__auto____$2;
return goog.object.get(o__38016__auto__,"make_template");
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
var o__38017__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__38017__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__38017__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__38017__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__38016__auto__ = temp__4657__auto____$2;
return goog.object.get(o__38016__auto__,"make_group");
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
var o__38017__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__38017__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__38017__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__38017__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__38016__auto__ = temp__4657__auto____$2;
return goog.object.get(o__38016__auto__,"make_reference");
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
var o__38017__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__38017__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__38017__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__38017__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__38016__auto__ = temp__4657__auto____$2;
return goog.object.get(o__38016__auto__,"make_surrogate");
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
var o__38017__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__38017__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__38017__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__38017__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__38016__auto__ = temp__4657__auto____$2;
return goog.object.get(o__38016__auto__,"render_markup");
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
var o__38017__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__38017__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__38017__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__38017__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__38016__auto__ = temp__4657__auto____$2;
return goog.object.get(o__38016__auto__,"_LT_header_GT_");
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
var o__38017__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__38017__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__38017__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__38017__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__38016__auto__ = temp__4657__auto____$2;
return goog.object.get(o__38016__auto__,"_LT_standard_body_GT_");
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
var args__28184__auto__ = [];
var len__28177__auto___38038 = arguments.length;
var i__28178__auto___38039 = (0);
while(true){
if((i__28178__auto___38039 < len__28177__auto___38038)){
args__28184__auto__.push((arguments[i__28178__auto___38039]));

var G__38040 = (i__28178__auto___38039 + (1));
i__28178__auto___38039 = G__38040;
continue;
} else {
}
break;
}

var argseq__28185__auto__ = ((((0) < args__28184__auto__.length))?(new cljs.core.IndexedSeq(args__28184__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__28185__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq38037){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38037));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__28184__auto__ = [];
var len__28177__auto___38042 = arguments.length;
var i__28178__auto___38043 = (0);
while(true){
if((i__28178__auto___38043 < len__28177__auto___38042)){
args__28184__auto__.push((arguments[i__28178__auto___38043]));

var G__38044 = (i__28178__auto___38043 + (1));
i__28178__auto___38043 = G__38044;
continue;
} else {
}
break;
}

var argseq__28185__auto__ = ((((0) < args__28184__auto__.length))?(new cljs.core.IndexedSeq(args__28184__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__28185__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq38041){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38041));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__28184__auto__ = [];
var len__28177__auto___38046 = arguments.length;
var i__28178__auto___38047 = (0);
while(true){
if((i__28178__auto___38047 < len__28177__auto___38046)){
args__28184__auto__.push((arguments[i__28178__auto___38047]));

var G__38048 = (i__28178__auto___38047 + (1));
i__28178__auto___38047 = G__38048;
continue;
} else {
}
break;
}

var argseq__28185__auto__ = ((((0) < args__28184__auto__.length))?(new cljs.core.IndexedSeq(args__28184__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__28185__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq38045){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38045));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__28184__auto__ = [];
var len__28177__auto___38050 = arguments.length;
var i__28178__auto___38051 = (0);
while(true){
if((i__28178__auto___38051 < len__28177__auto___38050)){
args__28184__auto__.push((arguments[i__28178__auto___38051]));

var G__38052 = (i__28178__auto___38051 + (1));
i__28178__auto___38051 = G__38052;
continue;
} else {
}
break;
}

var argseq__28185__auto__ = ((((0) < args__28184__auto__.length))?(new cljs.core.IndexedSeq(args__28184__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__28185__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq38049){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38049));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__28184__auto__ = [];
var len__28177__auto___38054 = arguments.length;
var i__28178__auto___38055 = (0);
while(true){
if((i__28178__auto___38055 < len__28177__auto___38054)){
args__28184__auto__.push((arguments[i__28178__auto___38055]));

var G__38056 = (i__28178__auto___38055 + (1));
i__28178__auto___38055 = G__38056;
continue;
} else {
}
break;
}

var argseq__28185__auto__ = ((((0) < args__28184__auto__.length))?(new cljs.core.IndexedSeq(args__28184__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__28185__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq38053){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38053));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__28184__auto__ = [];
var len__28177__auto___38058 = arguments.length;
var i__28178__auto___38059 = (0);
while(true){
if((i__28178__auto___38059 < len__28177__auto___38058)){
args__28184__auto__.push((arguments[i__28178__auto___38059]));

var G__38060 = (i__28178__auto___38059 + (1));
i__28178__auto___38059 = G__38060;
continue;
} else {
}
break;
}

var argseq__28185__auto__ = ((((0) < args__28184__auto__.length))?(new cljs.core.IndexedSeq(args__28184__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__28185__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq38057){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38057));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__28184__auto__ = [];
var len__28177__auto___38062 = arguments.length;
var i__28178__auto___38063 = (0);
while(true){
if((i__28178__auto___38063 < len__28177__auto___38062)){
args__28184__auto__.push((arguments[i__28178__auto___38063]));

var G__38064 = (i__28178__auto___38063 + (1));
i__28178__auto___38063 = G__38064;
continue;
} else {
}
break;
}

var argseq__28185__auto__ = ((((0) < args__28184__auto__.length))?(new cljs.core.IndexedSeq(args__28184__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__28185__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq38061){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38061));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__28184__auto__ = [];
var len__28177__auto___38072 = arguments.length;
var i__28178__auto___38073 = (0);
while(true){
if((i__28178__auto___38073 < len__28177__auto___38072)){
args__28184__auto__.push((arguments[i__28178__auto___38073]));

var G__38074 = (i__28178__auto___38073 + (1));
i__28178__auto___38073 = G__38074;
continue;
} else {
}
break;
}

var argseq__28185__auto__ = ((((1) < args__28184__auto__.length))?(new cljs.core.IndexedSeq(args__28184__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28185__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__38068){
var vec__38069 = p__38068;
var state_override = cljs.core.nth.call(null,vec__38069,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__38069,state_override){
return (function (p1__38065_SHARP_){
return cljs.core.merge.call(null,p1__38065_SHARP_,state_override);
});})(vec__38069,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq38066){
var G__38067 = cljs.core.first.call(null,seq38066);
var seq38066__$1 = cljs.core.next.call(null,seq38066);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__38067,seq38066__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__28184__auto__ = [];
var len__28177__auto___38076 = arguments.length;
var i__28178__auto___38077 = (0);
while(true){
if((i__28178__auto___38077 < len__28177__auto___38076)){
args__28184__auto__.push((arguments[i__28178__auto___38077]));

var G__38078 = (i__28178__auto___38077 + (1));
i__28178__auto___38077 = G__38078;
continue;
} else {
}
break;
}

var argseq__28185__auto__ = ((((0) < args__28184__auto__.length))?(new cljs.core.IndexedSeq(args__28184__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__28185__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq38075){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38075));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__28184__auto__ = [];
var len__28177__auto___38081 = arguments.length;
var i__28178__auto___38082 = (0);
while(true){
if((i__28178__auto___38082 < len__28177__auto___38081)){
args__28184__auto__.push((arguments[i__28178__auto___38082]));

var G__38083 = (i__28178__auto___38082 + (1));
i__28178__auto___38082 = G__38083;
continue;
} else {
}
break;
}

var argseq__28185__auto__ = ((((1) < args__28184__auto__.length))?(new cljs.core.IndexedSeq(args__28184__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28185__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq38079){
var G__38080 = cljs.core.first.call(null,seq38079);
var seq38079__$1 = cljs.core.next.call(null,seq38079);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__38080,seq38079__$1);
});


//# sourceMappingURL=format.js.map?rel=1501628494323