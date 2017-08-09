// Compiled by ClojureScript 1.9.671 {}
goog.provide('devtools.formatters.templating');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('clojure.walk');
goog.require('devtools.util');
goog.require('devtools.protocols');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.state');
goog.require('clojure.string');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x50222_50223 = value;
x50222_50223.devtools$protocols$IGroup$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$IGroup$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
var x50225_50226 = value;
x50225_50226.devtools$protocols$ITemplate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ITemplate$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
var x50228_50229 = value;
x50228_50229.devtools$protocols$ISurrogate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ISurrogate$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
var and__36751__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__36751__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__36751__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__37896__auto__ = [];
var len__37889__auto___50236 = arguments.length;
var i__37890__auto___50237 = (0);
while(true){
if((i__37890__auto___50237 < len__37889__auto___50236)){
args__37896__auto__.push((arguments[i__37890__auto___50237]));

var G__50238 = (i__37890__auto___50237 + (1));
i__37890__auto___50237 = G__50238;
continue;
} else {
}
break;
}

var argseq__37897__auto__ = ((((0) < args__37896__auto__.length))?(new cljs.core.IndexedSeq(args__37896__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__37897__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__50232_50239 = cljs.core.seq.call(null,items);
var chunk__50233_50240 = null;
var count__50234_50241 = (0);
var i__50235_50242 = (0);
while(true){
if((i__50235_50242 < count__50234_50241)){
var item_50243 = cljs.core._nth.call(null,chunk__50233_50240,i__50235_50242);
if(!((item_50243 == null))){
if(cljs.core.coll_QMARK_.call(null,item_50243)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_50243)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_50243));
}
} else {
}

var G__50244 = seq__50232_50239;
var G__50245 = chunk__50233_50240;
var G__50246 = count__50234_50241;
var G__50247 = (i__50235_50242 + (1));
seq__50232_50239 = G__50244;
chunk__50233_50240 = G__50245;
count__50234_50241 = G__50246;
i__50235_50242 = G__50247;
continue;
} else {
var temp__4657__auto___50248 = cljs.core.seq.call(null,seq__50232_50239);
if(temp__4657__auto___50248){
var seq__50232_50249__$1 = temp__4657__auto___50248;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50232_50249__$1)){
var c__37583__auto___50250 = cljs.core.chunk_first.call(null,seq__50232_50249__$1);
var G__50251 = cljs.core.chunk_rest.call(null,seq__50232_50249__$1);
var G__50252 = c__37583__auto___50250;
var G__50253 = cljs.core.count.call(null,c__37583__auto___50250);
var G__50254 = (0);
seq__50232_50239 = G__50251;
chunk__50233_50240 = G__50252;
count__50234_50241 = G__50253;
i__50235_50242 = G__50254;
continue;
} else {
var item_50255 = cljs.core.first.call(null,seq__50232_50249__$1);
if(!((item_50255 == null))){
if(cljs.core.coll_QMARK_.call(null,item_50255)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_50255)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_50255));
}
} else {
}

var G__50256 = cljs.core.next.call(null,seq__50232_50249__$1);
var G__50257 = null;
var G__50258 = (0);
var G__50259 = (0);
seq__50232_50239 = G__50256;
chunk__50233_50240 = G__50257;
count__50234_50241 = G__50258;
i__50235_50242 = G__50259;
continue;
}
} else {
}
}
break;
}

return group;
});

devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0);

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq50231){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50231));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__37896__auto__ = [];
var len__37889__auto___50267 = arguments.length;
var i__37890__auto___50268 = (0);
while(true){
if((i__37890__auto___50268 < len__37889__auto___50267)){
args__37896__auto__.push((arguments[i__37890__auto___50268]));

var G__50269 = (i__37890__auto___50268 + (1));
i__37890__auto___50268 = G__50269;
continue;
} else {
}
break;
}

var argseq__37897__auto__ = ((((2) < args__37896__auto__.length))?(new cljs.core.IndexedSeq(args__37896__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37897__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__50263_50270 = cljs.core.seq.call(null,children);
var chunk__50264_50271 = null;
var count__50265_50272 = (0);
var i__50266_50273 = (0);
while(true){
if((i__50266_50273 < count__50265_50272)){
var child_50274 = cljs.core._nth.call(null,chunk__50264_50271,i__50266_50273);
if(!((child_50274 == null))){
if(cljs.core.coll_QMARK_.call(null,child_50274)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_50274))));
} else {
var temp__4655__auto___50275 = devtools.formatters.helpers.pref.call(null,child_50274);
if(cljs.core.truth_(temp__4655__auto___50275)){
var child_value_50276 = temp__4655__auto___50275;
template.push(child_value_50276);
} else {
}
}
} else {
}

var G__50277 = seq__50263_50270;
var G__50278 = chunk__50264_50271;
var G__50279 = count__50265_50272;
var G__50280 = (i__50266_50273 + (1));
seq__50263_50270 = G__50277;
chunk__50264_50271 = G__50278;
count__50265_50272 = G__50279;
i__50266_50273 = G__50280;
continue;
} else {
var temp__4657__auto___50281 = cljs.core.seq.call(null,seq__50263_50270);
if(temp__4657__auto___50281){
var seq__50263_50282__$1 = temp__4657__auto___50281;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50263_50282__$1)){
var c__37583__auto___50283 = cljs.core.chunk_first.call(null,seq__50263_50282__$1);
var G__50284 = cljs.core.chunk_rest.call(null,seq__50263_50282__$1);
var G__50285 = c__37583__auto___50283;
var G__50286 = cljs.core.count.call(null,c__37583__auto___50283);
var G__50287 = (0);
seq__50263_50270 = G__50284;
chunk__50264_50271 = G__50285;
count__50265_50272 = G__50286;
i__50266_50273 = G__50287;
continue;
} else {
var child_50288 = cljs.core.first.call(null,seq__50263_50282__$1);
if(!((child_50288 == null))){
if(cljs.core.coll_QMARK_.call(null,child_50288)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_50288))));
} else {
var temp__4655__auto___50289 = devtools.formatters.helpers.pref.call(null,child_50288);
if(cljs.core.truth_(temp__4655__auto___50289)){
var child_value_50290 = temp__4655__auto___50289;
template.push(child_value_50290);
} else {
}
}
} else {
}

var G__50291 = cljs.core.next.call(null,seq__50263_50282__$1);
var G__50292 = null;
var G__50293 = (0);
var G__50294 = (0);
seq__50263_50270 = G__50291;
chunk__50264_50271 = G__50292;
count__50265_50272 = G__50293;
i__50266_50273 = G__50294;
continue;
}
} else {
}
}
break;
}

return template;
});

devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2);

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq50260){
var G__50261 = cljs.core.first.call(null,seq50260);
var seq50260__$1 = cljs.core.next.call(null,seq50260);
var G__50262 = cljs.core.first.call(null,seq50260__$1);
var seq50260__$2 = cljs.core.next.call(null,seq50260__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__50261,G__50262,seq50260__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__37896__auto__ = [];
var len__37889__auto___50297 = arguments.length;
var i__37890__auto___50298 = (0);
while(true){
if((i__37890__auto___50298 < len__37889__auto___50297)){
args__37896__auto__.push((arguments[i__37890__auto___50298]));

var G__50299 = (i__37890__auto___50298 + (1));
i__37890__auto___50298 = G__50299;
continue;
} else {
}
break;
}

var argseq__37897__auto__ = ((((1) < args__37896__auto__.length))?(new cljs.core.IndexedSeq(args__37896__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37897__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,goog.object.get(template,"concat").apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq50295){
var G__50296 = cljs.core.first.call(null,seq50295);
var seq50295__$1 = cljs.core.next.call(null,seq50295);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__50296,seq50295__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__37896__auto__ = [];
var len__37889__auto___50302 = arguments.length;
var i__37890__auto___50303 = (0);
while(true){
if((i__37890__auto___50303 < len__37889__auto___50302)){
args__37896__auto__.push((arguments[i__37890__auto___50303]));

var G__50304 = (i__37890__auto___50303 + (1));
i__37890__auto___50303 = G__50304;
continue;
} else {
}
break;
}

var argseq__37897__auto__ = ((((1) < args__37896__auto__.length))?(new cljs.core.IndexedSeq(args__37896__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37897__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq50300){
var G__50301 = cljs.core.first.call(null,seq50300);
var seq50300__$1 = cljs.core.next.call(null,seq50300);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__50301,seq50300__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var G__50306 = arguments.length;
switch (G__50306) {
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.call(null,object,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.call(null,object,header,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.call(null,object,header,body,(0));
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj50308 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__36763__auto__ = start_index;
if(cljs.core.truth_(or__36763__auto__)){
return or__36763__auto__;
} else {
return (0);
}
})()};
return obj50308;
})());
});

devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4;

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"target");
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"header");
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"body");
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"startIndex");
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__37896__auto__ = [];
var len__37889__auto___50316 = arguments.length;
var i__37890__auto___50317 = (0);
while(true){
if((i__37890__auto___50317 < len__37889__auto___50316)){
args__37896__auto__.push((arguments[i__37890__auto___50317]));

var G__50318 = (i__37890__auto___50317 + (1));
i__37890__auto___50317 = G__50318;
continue;
} else {
}
break;
}

var argseq__37897__auto__ = ((((1) < args__37896__auto__.length))?(new cljs.core.IndexedSeq(args__37896__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37897__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__50312){
var vec__50313 = p__50312;
var state_override_fn = cljs.core.nth.call(null,vec__50313,(0),null);
if(((state_override_fn == null)) || (cljs.core.fn_QMARK_.call(null,state_override_fn))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203));
} else {
var sub_state = ((!((state_override_fn == null)))?state_override_fn.call(null,devtools.formatters.state.get_current_state.call(null)):devtools.formatters.state.get_current_state.call(null));
return devtools.formatters.templating.make_group.call(null,"object",({"object": object, "config": sub_state}));
}
});

devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq50310){
var G__50311 = cljs.core.first.call(null,seq50310);
var seq50310__$1 = cljs.core.next.call(null,seq50310);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__50311,seq50310__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.pprint_str = (function devtools$formatters$templating$pprint_str(markup){
var sb__37769__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_50319_50322 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_50320_50323 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_50319_50322,_STAR_print_fn_STAR_50320_50323,sb__37769__auto__){
return (function (x__37770__auto__){
return sb__37769__auto__.append(x__37770__auto__);
});})(_STAR_print_newline_STAR_50319_50322,_STAR_print_fn_STAR_50320_50323,sb__37769__auto__))
;

try{var _STAR_print_level_STAR_50321_50324 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (300);

try{cljs.pprint.pprint.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_50321_50324;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_50320_50323;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_50319_50322;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__37769__auto__)].join('');
});
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_50325 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_50325;
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.call(null,"-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_.call(null,v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk.call(null,f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.call(null,devtools.formatters.templating.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.call(null,"\n",devtools.formatters.templating.add_stack_separators.call(null,devtools.formatters.templating.pprint_render_calls.call(null,devtools.formatters.templating.replace_fns_with_markers.call(null,cljs.core.reverse.call(null,stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.formatters.templating.pprint_str.call(null,path);
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Render path: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_render_path.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Render stack:\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_render_stack.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_))].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("false")].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return (cljs.core.sequential_QMARK_.call(null,markup)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,markup),"surrogate"));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__50326 = name;
switch (G__50326) {
case "surrogate":
var obj = cljs.core.first.call(null,args);
var converted_args = cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest.call(null,args));
return cljs.core.apply.call(null,devtools.formatters.templating.make_surrogate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first.call(null,args);
var converted_obj = (cljs.core.truth_(devtools.formatters.templating.surrogate_markup_QMARK_.call(null,obj))?devtools.formatters.templating.render_json_ml_STAR_.call(null,obj):obj);
return cljs.core.apply.call(null,devtools.formatters.templating.make_reference,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest.call(null,args)));

break;
default:
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("no matching special tag name: '"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),cljs.core.str.cljs$core$IFn$_invoke$arity$1("'")].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if((cljs.core.seqable_QMARK_.call(null,v)) || (cljs.core.array_QMARK_.call(null,v)) || (typeof v === 'string')){
return cljs.core.empty_QMARK_.call(null,v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
var vec__50328 = tag;
var html_tag = cljs.core.nth.call(null,vec__50328,(0),null);
var style = cljs.core.nth.call(null,vec__50328,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_50331 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first.call(null,markup));

try{var tag = devtools.formatters.helpers.pref.call(null,cljs.core.first.call(null,markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special.call(null,tag,cljs.core.rest.call(null,markup));
} else {
if(cljs.core.sequential_QMARK_.call(null,tag)){
return devtools.formatters.templating.render_subtree.call(null,tag,cljs.core.rest.call(null,markup));
} else {
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid json-ml markup at "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.print_preview.call(null,markup)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''));

}
}
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_50331;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_50332 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_50333 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_50333;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_50332;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("result of markup rendering must be a template,\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("resolved to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_str.call(null,value)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("initial value: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_str.call(null,initial_value))].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("false")].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__50334 = initial_value;
var G__50335 = value.call(null);
initial_value = G__50334;
value = G__50335;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__50336 = initial_value;
var G__50337 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__50336;
value = G__50337;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__50338 = initial_value;
var G__50339 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__50338;
value = G__50339;
continue;
} else {
if(cljs.core.truth_(devtools.formatters.templating.template_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.reference_QMARK_.call(null,value))){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_.call(null,value,value);
});

//# sourceMappingURL=templating.js.map?rel=1502260269496