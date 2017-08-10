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
var x__27723__auto__ = (((value == null))?null:value);
var m__27724__auto__ = (devtools.format._header[goog.typeOf(x__27723__auto__)]);
if(!((m__27724__auto__ == null))){
return m__27724__auto__.call(null,value);
} else {
var m__27724__auto____$1 = (devtools.format._header["_"]);
if(!((m__27724__auto____$1 == null))){
return m__27724__auto____$1.call(null,value);
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
var x__27723__auto__ = (((value == null))?null:value);
var m__27724__auto__ = (devtools.format._has_body[goog.typeOf(x__27723__auto__)]);
if(!((m__27724__auto__ == null))){
return m__27724__auto__.call(null,value);
} else {
var m__27724__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__27724__auto____$1 == null))){
return m__27724__auto____$1.call(null,value);
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
var x__27723__auto__ = (((value == null))?null:value);
var m__27724__auto__ = (devtools.format._body[goog.typeOf(x__27723__auto__)]);
if(!((m__27724__auto__ == null))){
return m__27724__auto__.call(null,value);
} else {
var m__27724__auto____$1 = (devtools.format._body["_"]);
if(!((m__27724__auto____$1 == null))){
return m__27724__auto____$1.call(null,value);
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
var o__37985__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__37985__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__37985__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__37985__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__37984__auto__ = temp__4657__auto____$2;
return goog.object.get(o__37984__auto__,"make_template");
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
var o__37985__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__37985__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__37985__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__37985__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__37984__auto__ = temp__4657__auto____$2;
return goog.object.get(o__37984__auto__,"make_group");
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
var o__37985__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__37985__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__37985__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__37985__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__37984__auto__ = temp__4657__auto____$2;
return goog.object.get(o__37984__auto__,"make_reference");
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
var o__37985__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__37985__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__37985__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__37985__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__37984__auto__ = temp__4657__auto____$2;
return goog.object.get(o__37984__auto__,"make_surrogate");
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
var o__37985__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__37985__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__37985__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__37985__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__37984__auto__ = temp__4657__auto____$2;
return goog.object.get(o__37984__auto__,"render_markup");
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
var o__37985__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__37985__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__37985__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__37985__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__37984__auto__ = temp__4657__auto____$2;
return goog.object.get(o__37984__auto__,"_LT_header_GT_");
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
var o__37985__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__37985__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__37985__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__37985__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__37984__auto__ = temp__4657__auto____$2;
return goog.object.get(o__37984__auto__,"_LT_standard_body_GT_");
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
var args__28186__auto__ = [];
var len__28179__auto___38016 = arguments.length;
var i__28180__auto___38017 = (0);
while(true){
if((i__28180__auto___38017 < len__28179__auto___38016)){
args__28186__auto__.push((arguments[i__28180__auto___38017]));

var G__38018 = (i__28180__auto___38017 + (1));
i__28180__auto___38017 = G__38018;
continue;
} else {
}
break;
}

var argseq__28187__auto__ = ((((0) < args__28186__auto__.length))?(new cljs.core.IndexedSeq(args__28186__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__28187__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq38015){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38015));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__28186__auto__ = [];
var len__28179__auto___38020 = arguments.length;
var i__28180__auto___38021 = (0);
while(true){
if((i__28180__auto___38021 < len__28179__auto___38020)){
args__28186__auto__.push((arguments[i__28180__auto___38021]));

var G__38022 = (i__28180__auto___38021 + (1));
i__28180__auto___38021 = G__38022;
continue;
} else {
}
break;
}

var argseq__28187__auto__ = ((((0) < args__28186__auto__.length))?(new cljs.core.IndexedSeq(args__28186__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__28187__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq38019){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38019));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__28186__auto__ = [];
var len__28179__auto___38024 = arguments.length;
var i__28180__auto___38025 = (0);
while(true){
if((i__28180__auto___38025 < len__28179__auto___38024)){
args__28186__auto__.push((arguments[i__28180__auto___38025]));

var G__38026 = (i__28180__auto___38025 + (1));
i__28180__auto___38025 = G__38026;
continue;
} else {
}
break;
}

var argseq__28187__auto__ = ((((0) < args__28186__auto__.length))?(new cljs.core.IndexedSeq(args__28186__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__28187__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq38023){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38023));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__28186__auto__ = [];
var len__28179__auto___38028 = arguments.length;
var i__28180__auto___38029 = (0);
while(true){
if((i__28180__auto___38029 < len__28179__auto___38028)){
args__28186__auto__.push((arguments[i__28180__auto___38029]));

var G__38030 = (i__28180__auto___38029 + (1));
i__28180__auto___38029 = G__38030;
continue;
} else {
}
break;
}

var argseq__28187__auto__ = ((((0) < args__28186__auto__.length))?(new cljs.core.IndexedSeq(args__28186__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__28187__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq38027){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38027));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__28186__auto__ = [];
var len__28179__auto___38032 = arguments.length;
var i__28180__auto___38033 = (0);
while(true){
if((i__28180__auto___38033 < len__28179__auto___38032)){
args__28186__auto__.push((arguments[i__28180__auto___38033]));

var G__38034 = (i__28180__auto___38033 + (1));
i__28180__auto___38033 = G__38034;
continue;
} else {
}
break;
}

var argseq__28187__auto__ = ((((0) < args__28186__auto__.length))?(new cljs.core.IndexedSeq(args__28186__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__28187__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq38031){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38031));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__28186__auto__ = [];
var len__28179__auto___38036 = arguments.length;
var i__28180__auto___38037 = (0);
while(true){
if((i__28180__auto___38037 < len__28179__auto___38036)){
args__28186__auto__.push((arguments[i__28180__auto___38037]));

var G__38038 = (i__28180__auto___38037 + (1));
i__28180__auto___38037 = G__38038;
continue;
} else {
}
break;
}

var argseq__28187__auto__ = ((((0) < args__28186__auto__.length))?(new cljs.core.IndexedSeq(args__28186__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__28187__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq38035){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38035));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__28186__auto__ = [];
var len__28179__auto___38040 = arguments.length;
var i__28180__auto___38041 = (0);
while(true){
if((i__28180__auto___38041 < len__28179__auto___38040)){
args__28186__auto__.push((arguments[i__28180__auto___38041]));

var G__38042 = (i__28180__auto___38041 + (1));
i__28180__auto___38041 = G__38042;
continue;
} else {
}
break;
}

var argseq__28187__auto__ = ((((0) < args__28186__auto__.length))?(new cljs.core.IndexedSeq(args__28186__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__28187__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq38039){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38039));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__28186__auto__ = [];
var len__28179__auto___38050 = arguments.length;
var i__28180__auto___38051 = (0);
while(true){
if((i__28180__auto___38051 < len__28179__auto___38050)){
args__28186__auto__.push((arguments[i__28180__auto___38051]));

var G__38052 = (i__28180__auto___38051 + (1));
i__28180__auto___38051 = G__38052;
continue;
} else {
}
break;
}

var argseq__28187__auto__ = ((((1) < args__28186__auto__.length))?(new cljs.core.IndexedSeq(args__28186__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28187__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__38046){
var vec__38047 = p__38046;
var state_override = cljs.core.nth.call(null,vec__38047,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__38047,state_override){
return (function (p1__38043_SHARP_){
return cljs.core.merge.call(null,p1__38043_SHARP_,state_override);
});})(vec__38047,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq38044){
var G__38045 = cljs.core.first.call(null,seq38044);
var seq38044__$1 = cljs.core.next.call(null,seq38044);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__38045,seq38044__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__28186__auto__ = [];
var len__28179__auto___38054 = arguments.length;
var i__28180__auto___38055 = (0);
while(true){
if((i__28180__auto___38055 < len__28179__auto___38054)){
args__28186__auto__.push((arguments[i__28180__auto___38055]));

var G__38056 = (i__28180__auto___38055 + (1));
i__28180__auto___38055 = G__38056;
continue;
} else {
}
break;
}

var argseq__28187__auto__ = ((((0) < args__28186__auto__.length))?(new cljs.core.IndexedSeq(args__28186__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__28187__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq38053){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38053));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__28186__auto__ = [];
var len__28179__auto___38059 = arguments.length;
var i__28180__auto___38060 = (0);
while(true){
if((i__28180__auto___38060 < len__28179__auto___38059)){
args__28186__auto__.push((arguments[i__28180__auto___38060]));

var G__38061 = (i__28180__auto___38060 + (1));
i__28180__auto___38060 = G__38061;
continue;
} else {
}
break;
}

var argseq__28187__auto__ = ((((1) < args__28186__auto__.length))?(new cljs.core.IndexedSeq(args__28186__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28187__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq38057){
var G__38058 = cljs.core.first.call(null,seq38057);
var seq38057__$1 = cljs.core.next.call(null,seq38057);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__38058,seq38057__$1);
});


//# sourceMappingURL=format.js.map?rel=1502330257627