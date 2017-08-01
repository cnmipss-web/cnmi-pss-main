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
var o__37823__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__37823__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__37823__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__37823__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__37822__auto__ = temp__4657__auto____$2;
return goog.object.get(o__37822__auto__,"make_template");
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
var o__37823__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__37823__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__37823__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__37823__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__37822__auto__ = temp__4657__auto____$2;
return goog.object.get(o__37822__auto__,"make_group");
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
var o__37823__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__37823__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__37823__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__37823__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__37822__auto__ = temp__4657__auto____$2;
return goog.object.get(o__37822__auto__,"make_reference");
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
var o__37823__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__37823__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__37823__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__37823__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__37822__auto__ = temp__4657__auto____$2;
return goog.object.get(o__37822__auto__,"make_surrogate");
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
var o__37823__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__37823__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__37823__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__37823__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__37822__auto__ = temp__4657__auto____$2;
return goog.object.get(o__37822__auto__,"render_markup");
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
var o__37823__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__37823__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__37823__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__37823__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__37822__auto__ = temp__4657__auto____$2;
return goog.object.get(o__37822__auto__,"_LT_header_GT_");
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
var o__37823__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__37823__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__37823__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__37823__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__37822__auto__ = temp__4657__auto____$2;
return goog.object.get(o__37822__auto__,"_LT_standard_body_GT_");
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
var len__28177__auto___49239 = arguments.length;
var i__28178__auto___49240 = (0);
while(true){
if((i__28178__auto___49240 < len__28177__auto___49239)){
args__28184__auto__.push((arguments[i__28178__auto___49240]));

var G__49241 = (i__28178__auto___49240 + (1));
i__28178__auto___49240 = G__49241;
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

devtools.format.render_markup.cljs$lang$applyTo = (function (seq49238){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49238));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__28184__auto__ = [];
var len__28177__auto___49243 = arguments.length;
var i__28178__auto___49244 = (0);
while(true){
if((i__28178__auto___49244 < len__28177__auto___49243)){
args__28184__auto__.push((arguments[i__28178__auto___49244]));

var G__49245 = (i__28178__auto___49244 + (1));
i__28178__auto___49244 = G__49245;
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

devtools.format.make_template.cljs$lang$applyTo = (function (seq49242){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49242));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__28184__auto__ = [];
var len__28177__auto___49247 = arguments.length;
var i__28178__auto___49248 = (0);
while(true){
if((i__28178__auto___49248 < len__28177__auto___49247)){
args__28184__auto__.push((arguments[i__28178__auto___49248]));

var G__49249 = (i__28178__auto___49248 + (1));
i__28178__auto___49248 = G__49249;
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

devtools.format.make_group.cljs$lang$applyTo = (function (seq49246){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49246));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__28184__auto__ = [];
var len__28177__auto___49251 = arguments.length;
var i__28178__auto___49252 = (0);
while(true){
if((i__28178__auto___49252 < len__28177__auto___49251)){
args__28184__auto__.push((arguments[i__28178__auto___49252]));

var G__49253 = (i__28178__auto___49252 + (1));
i__28178__auto___49252 = G__49253;
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

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq49250){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49250));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__28184__auto__ = [];
var len__28177__auto___49255 = arguments.length;
var i__28178__auto___49256 = (0);
while(true){
if((i__28178__auto___49256 < len__28177__auto___49255)){
args__28184__auto__.push((arguments[i__28178__auto___49256]));

var G__49257 = (i__28178__auto___49256 + (1));
i__28178__auto___49256 = G__49257;
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

devtools.format.template.cljs$lang$applyTo = (function (seq49254){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49254));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__28184__auto__ = [];
var len__28177__auto___49259 = arguments.length;
var i__28178__auto___49260 = (0);
while(true){
if((i__28178__auto___49260 < len__28177__auto___49259)){
args__28184__auto__.push((arguments[i__28178__auto___49260]));

var G__49261 = (i__28178__auto___49260 + (1));
i__28178__auto___49260 = G__49261;
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

devtools.format.group.cljs$lang$applyTo = (function (seq49258){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49258));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__28184__auto__ = [];
var len__28177__auto___49263 = arguments.length;
var i__28178__auto___49264 = (0);
while(true){
if((i__28178__auto___49264 < len__28177__auto___49263)){
args__28184__auto__.push((arguments[i__28178__auto___49264]));

var G__49265 = (i__28178__auto___49264 + (1));
i__28178__auto___49264 = G__49265;
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

devtools.format.surrogate.cljs$lang$applyTo = (function (seq49262){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49262));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__28184__auto__ = [];
var len__28177__auto___49273 = arguments.length;
var i__28178__auto___49274 = (0);
while(true){
if((i__28178__auto___49274 < len__28177__auto___49273)){
args__28184__auto__.push((arguments[i__28178__auto___49274]));

var G__49275 = (i__28178__auto___49274 + (1));
i__28178__auto___49274 = G__49275;
continue;
} else {
}
break;
}

var argseq__28185__auto__ = ((((1) < args__28184__auto__.length))?(new cljs.core.IndexedSeq(args__28184__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28185__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__49269){
var vec__49270 = p__49269;
var state_override = cljs.core.nth.call(null,vec__49270,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__49270,state_override){
return (function (p1__49266_SHARP_){
return cljs.core.merge.call(null,p1__49266_SHARP_,state_override);
});})(vec__49270,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq49267){
var G__49268 = cljs.core.first.call(null,seq49267);
var seq49267__$1 = cljs.core.next.call(null,seq49267);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__49268,seq49267__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__28184__auto__ = [];
var len__28177__auto___49277 = arguments.length;
var i__28178__auto___49278 = (0);
while(true){
if((i__28178__auto___49278 < len__28177__auto___49277)){
args__28184__auto__.push((arguments[i__28178__auto___49278]));

var G__49279 = (i__28178__auto___49278 + (1));
i__28178__auto___49278 = G__49279;
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

devtools.format.build_header.cljs$lang$applyTo = (function (seq49276){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49276));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__28184__auto__ = [];
var len__28177__auto___49282 = arguments.length;
var i__28178__auto___49283 = (0);
while(true){
if((i__28178__auto___49283 < len__28177__auto___49282)){
args__28184__auto__.push((arguments[i__28178__auto___49283]));

var G__49284 = (i__28178__auto___49283 + (1));
i__28178__auto___49283 = G__49284;
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

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq49280){
var G__49281 = cljs.core.first.call(null,seq49280);
var seq49280__$1 = cljs.core.next.call(null,seq49280);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__49281,seq49280__$1);
});


//# sourceMappingURL=format.js.map?rel=1501568773679