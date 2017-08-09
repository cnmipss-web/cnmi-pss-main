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
var x__37432__auto__ = (((value == null))?null:value);
var m__37433__auto__ = (devtools.format._header[goog.typeOf(x__37432__auto__)]);
if(!((m__37433__auto__ == null))){
return m__37433__auto__.call(null,value);
} else {
var m__37433__auto____$1 = (devtools.format._header["_"]);
if(!((m__37433__auto____$1 == null))){
return m__37433__auto____$1.call(null,value);
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
var x__37432__auto__ = (((value == null))?null:value);
var m__37433__auto__ = (devtools.format._has_body[goog.typeOf(x__37432__auto__)]);
if(!((m__37433__auto__ == null))){
return m__37433__auto__.call(null,value);
} else {
var m__37433__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__37433__auto____$1 == null))){
return m__37433__auto____$1.call(null,value);
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
var x__37432__auto__ = (((value == null))?null:value);
var m__37433__auto__ = (devtools.format._body[goog.typeOf(x__37432__auto__)]);
if(!((m__37433__auto__ == null))){
return m__37433__auto__.call(null,value);
} else {
var m__37433__auto____$1 = (devtools.format._body["_"]);
if(!((m__37433__auto____$1 == null))){
return m__37433__auto____$1.call(null,value);
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
var o__48125__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__48125__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__48125__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__48125__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__48124__auto__ = temp__4657__auto____$2;
return goog.object.get(o__48124__auto__,"make_template");
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
var o__48125__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__48125__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__48125__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__48125__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__48124__auto__ = temp__4657__auto____$2;
return goog.object.get(o__48124__auto__,"make_group");
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
var o__48125__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__48125__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__48125__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__48125__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__48124__auto__ = temp__4657__auto____$2;
return goog.object.get(o__48124__auto__,"make_reference");
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
var o__48125__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__48125__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__48125__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__48125__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__48124__auto__ = temp__4657__auto____$2;
return goog.object.get(o__48124__auto__,"make_surrogate");
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
var o__48125__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__48125__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__48125__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__48125__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__48124__auto__ = temp__4657__auto____$2;
return goog.object.get(o__48124__auto__,"render_markup");
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
var o__48125__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__48125__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__48125__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__48125__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__48124__auto__ = temp__4657__auto____$2;
return goog.object.get(o__48124__auto__,"_LT_header_GT_");
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
var o__48125__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__48125__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__48125__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__48125__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__48124__auto__ = temp__4657__auto____$2;
return goog.object.get(o__48124__auto__,"_LT_standard_body_GT_");
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
var args__37896__auto__ = [];
var len__37889__auto___48156 = arguments.length;
var i__37890__auto___48157 = (0);
while(true){
if((i__37890__auto___48157 < len__37889__auto___48156)){
args__37896__auto__.push((arguments[i__37890__auto___48157]));

var G__48158 = (i__37890__auto___48157 + (1));
i__37890__auto___48157 = G__48158;
continue;
} else {
}
break;
}

var argseq__37897__auto__ = ((((0) < args__37896__auto__.length))?(new cljs.core.IndexedSeq(args__37896__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__37897__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq48155){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48155));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__37896__auto__ = [];
var len__37889__auto___48160 = arguments.length;
var i__37890__auto___48161 = (0);
while(true){
if((i__37890__auto___48161 < len__37889__auto___48160)){
args__37896__auto__.push((arguments[i__37890__auto___48161]));

var G__48162 = (i__37890__auto___48161 + (1));
i__37890__auto___48161 = G__48162;
continue;
} else {
}
break;
}

var argseq__37897__auto__ = ((((0) < args__37896__auto__.length))?(new cljs.core.IndexedSeq(args__37896__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__37897__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq48159){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48159));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__37896__auto__ = [];
var len__37889__auto___48164 = arguments.length;
var i__37890__auto___48165 = (0);
while(true){
if((i__37890__auto___48165 < len__37889__auto___48164)){
args__37896__auto__.push((arguments[i__37890__auto___48165]));

var G__48166 = (i__37890__auto___48165 + (1));
i__37890__auto___48165 = G__48166;
continue;
} else {
}
break;
}

var argseq__37897__auto__ = ((((0) < args__37896__auto__.length))?(new cljs.core.IndexedSeq(args__37896__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__37897__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq48163){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48163));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__37896__auto__ = [];
var len__37889__auto___48168 = arguments.length;
var i__37890__auto___48169 = (0);
while(true){
if((i__37890__auto___48169 < len__37889__auto___48168)){
args__37896__auto__.push((arguments[i__37890__auto___48169]));

var G__48170 = (i__37890__auto___48169 + (1));
i__37890__auto___48169 = G__48170;
continue;
} else {
}
break;
}

var argseq__37897__auto__ = ((((0) < args__37896__auto__.length))?(new cljs.core.IndexedSeq(args__37896__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__37897__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq48167){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48167));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__37896__auto__ = [];
var len__37889__auto___48172 = arguments.length;
var i__37890__auto___48173 = (0);
while(true){
if((i__37890__auto___48173 < len__37889__auto___48172)){
args__37896__auto__.push((arguments[i__37890__auto___48173]));

var G__48174 = (i__37890__auto___48173 + (1));
i__37890__auto___48173 = G__48174;
continue;
} else {
}
break;
}

var argseq__37897__auto__ = ((((0) < args__37896__auto__.length))?(new cljs.core.IndexedSeq(args__37896__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__37897__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq48171){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48171));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__37896__auto__ = [];
var len__37889__auto___48176 = arguments.length;
var i__37890__auto___48177 = (0);
while(true){
if((i__37890__auto___48177 < len__37889__auto___48176)){
args__37896__auto__.push((arguments[i__37890__auto___48177]));

var G__48178 = (i__37890__auto___48177 + (1));
i__37890__auto___48177 = G__48178;
continue;
} else {
}
break;
}

var argseq__37897__auto__ = ((((0) < args__37896__auto__.length))?(new cljs.core.IndexedSeq(args__37896__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__37897__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq48175){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48175));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__37896__auto__ = [];
var len__37889__auto___48180 = arguments.length;
var i__37890__auto___48181 = (0);
while(true){
if((i__37890__auto___48181 < len__37889__auto___48180)){
args__37896__auto__.push((arguments[i__37890__auto___48181]));

var G__48182 = (i__37890__auto___48181 + (1));
i__37890__auto___48181 = G__48182;
continue;
} else {
}
break;
}

var argseq__37897__auto__ = ((((0) < args__37896__auto__.length))?(new cljs.core.IndexedSeq(args__37896__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__37897__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq48179){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48179));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__37896__auto__ = [];
var len__37889__auto___48190 = arguments.length;
var i__37890__auto___48191 = (0);
while(true){
if((i__37890__auto___48191 < len__37889__auto___48190)){
args__37896__auto__.push((arguments[i__37890__auto___48191]));

var G__48192 = (i__37890__auto___48191 + (1));
i__37890__auto___48191 = G__48192;
continue;
} else {
}
break;
}

var argseq__37897__auto__ = ((((1) < args__37896__auto__.length))?(new cljs.core.IndexedSeq(args__37896__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37897__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__48186){
var vec__48187 = p__48186;
var state_override = cljs.core.nth.call(null,vec__48187,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__48187,state_override){
return (function (p1__48183_SHARP_){
return cljs.core.merge.call(null,p1__48183_SHARP_,state_override);
});})(vec__48187,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq48184){
var G__48185 = cljs.core.first.call(null,seq48184);
var seq48184__$1 = cljs.core.next.call(null,seq48184);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__48185,seq48184__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__37896__auto__ = [];
var len__37889__auto___48194 = arguments.length;
var i__37890__auto___48195 = (0);
while(true){
if((i__37890__auto___48195 < len__37889__auto___48194)){
args__37896__auto__.push((arguments[i__37890__auto___48195]));

var G__48196 = (i__37890__auto___48195 + (1));
i__37890__auto___48195 = G__48196;
continue;
} else {
}
break;
}

var argseq__37897__auto__ = ((((0) < args__37896__auto__.length))?(new cljs.core.IndexedSeq(args__37896__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__37897__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq48193){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48193));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__37896__auto__ = [];
var len__37889__auto___48199 = arguments.length;
var i__37890__auto___48200 = (0);
while(true){
if((i__37890__auto___48200 < len__37889__auto___48199)){
args__37896__auto__.push((arguments[i__37890__auto___48200]));

var G__48201 = (i__37890__auto___48200 + (1));
i__37890__auto___48200 = G__48201;
continue;
} else {
}
break;
}

var argseq__37897__auto__ = ((((1) < args__37896__auto__.length))?(new cljs.core.IndexedSeq(args__37896__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37897__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq48197){
var G__48198 = cljs.core.first.call(null,seq48197);
var seq48197__$1 = cljs.core.next.call(null,seq48197);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__48198,seq48197__$1);
});


//# sourceMappingURL=format.js.map?rel=1502260266830