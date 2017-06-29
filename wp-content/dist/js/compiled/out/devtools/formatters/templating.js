// Compiled by ClojureScript 1.9.229 {}
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
var x71202_71203 = value;
x71202_71203.devtools$protocols$IGroup$ = true;


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$IGroup$)){
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
var x71207_71208 = value;
x71207_71208.devtools$protocols$ITemplate$ = true;


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$ITemplate$)){
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
var x71212_71213 = value;
x71212_71213.devtools$protocols$ISurrogate$ = true;


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$ISurrogate$)){
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
var and__25967__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__25967__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__25967__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__27061__auto__ = [];
var len__27054__auto___71221 = arguments.length;
var i__27055__auto___71222 = (0);
while(true){
if((i__27055__auto___71222 < len__27054__auto___71221)){
args__27061__auto__.push((arguments[i__27055__auto___71222]));

var G__71223 = (i__27055__auto___71222 + (1));
i__27055__auto___71222 = G__71223;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__71217_71224 = cljs.core.seq.call(null,items);
var chunk__71218_71225 = null;
var count__71219_71226 = (0);
var i__71220_71227 = (0);
while(true){
if((i__71220_71227 < count__71219_71226)){
var item_71228 = cljs.core._nth.call(null,chunk__71218_71225,i__71220_71227);
if(cljs.core.some_QMARK_.call(null,item_71228)){
if(cljs.core.coll_QMARK_.call(null,item_71228)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_71228)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_71228));
}
} else {
}

var G__71229 = seq__71217_71224;
var G__71230 = chunk__71218_71225;
var G__71231 = count__71219_71226;
var G__71232 = (i__71220_71227 + (1));
seq__71217_71224 = G__71229;
chunk__71218_71225 = G__71230;
count__71219_71226 = G__71231;
i__71220_71227 = G__71232;
continue;
} else {
var temp__4657__auto___71233 = cljs.core.seq.call(null,seq__71217_71224);
if(temp__4657__auto___71233){
var seq__71217_71234__$1 = temp__4657__auto___71233;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__71217_71234__$1)){
var c__26790__auto___71235 = cljs.core.chunk_first.call(null,seq__71217_71234__$1);
var G__71236 = cljs.core.chunk_rest.call(null,seq__71217_71234__$1);
var G__71237 = c__26790__auto___71235;
var G__71238 = cljs.core.count.call(null,c__26790__auto___71235);
var G__71239 = (0);
seq__71217_71224 = G__71236;
chunk__71218_71225 = G__71237;
count__71219_71226 = G__71238;
i__71220_71227 = G__71239;
continue;
} else {
var item_71240 = cljs.core.first.call(null,seq__71217_71234__$1);
if(cljs.core.some_QMARK_.call(null,item_71240)){
if(cljs.core.coll_QMARK_.call(null,item_71240)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_71240)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_71240));
}
} else {
}

var G__71241 = cljs.core.next.call(null,seq__71217_71234__$1);
var G__71242 = null;
var G__71243 = (0);
var G__71244 = (0);
seq__71217_71224 = G__71241;
chunk__71218_71225 = G__71242;
count__71219_71226 = G__71243;
i__71220_71227 = G__71244;
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

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq71216){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq71216));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__27061__auto__ = [];
var len__27054__auto___71252 = arguments.length;
var i__27055__auto___71253 = (0);
while(true){
if((i__27055__auto___71253 < len__27054__auto___71252)){
args__27061__auto__.push((arguments[i__27055__auto___71253]));

var G__71254 = (i__27055__auto___71253 + (1));
i__27055__auto___71253 = G__71254;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((2) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__27062__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__71248_71255 = cljs.core.seq.call(null,children);
var chunk__71249_71256 = null;
var count__71250_71257 = (0);
var i__71251_71258 = (0);
while(true){
if((i__71251_71258 < count__71250_71257)){
var child_71259 = cljs.core._nth.call(null,chunk__71249_71256,i__71251_71258);
if(cljs.core.some_QMARK_.call(null,child_71259)){
if(cljs.core.coll_QMARK_.call(null,child_71259)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_71259))));
} else {
var temp__4655__auto___71260 = devtools.formatters.helpers.pref.call(null,child_71259);
if(cljs.core.truth_(temp__4655__auto___71260)){
var child_value_71261 = temp__4655__auto___71260;
template.push(child_value_71261);
} else {
}
}
} else {
}

var G__71262 = seq__71248_71255;
var G__71263 = chunk__71249_71256;
var G__71264 = count__71250_71257;
var G__71265 = (i__71251_71258 + (1));
seq__71248_71255 = G__71262;
chunk__71249_71256 = G__71263;
count__71250_71257 = G__71264;
i__71251_71258 = G__71265;
continue;
} else {
var temp__4657__auto___71266 = cljs.core.seq.call(null,seq__71248_71255);
if(temp__4657__auto___71266){
var seq__71248_71267__$1 = temp__4657__auto___71266;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__71248_71267__$1)){
var c__26790__auto___71268 = cljs.core.chunk_first.call(null,seq__71248_71267__$1);
var G__71269 = cljs.core.chunk_rest.call(null,seq__71248_71267__$1);
var G__71270 = c__26790__auto___71268;
var G__71271 = cljs.core.count.call(null,c__26790__auto___71268);
var G__71272 = (0);
seq__71248_71255 = G__71269;
chunk__71249_71256 = G__71270;
count__71250_71257 = G__71271;
i__71251_71258 = G__71272;
continue;
} else {
var child_71273 = cljs.core.first.call(null,seq__71248_71267__$1);
if(cljs.core.some_QMARK_.call(null,child_71273)){
if(cljs.core.coll_QMARK_.call(null,child_71273)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_71273))));
} else {
var temp__4655__auto___71274 = devtools.formatters.helpers.pref.call(null,child_71273);
if(cljs.core.truth_(temp__4655__auto___71274)){
var child_value_71275 = temp__4655__auto___71274;
template.push(child_value_71275);
} else {
}
}
} else {
}

var G__71276 = cljs.core.next.call(null,seq__71248_71267__$1);
var G__71277 = null;
var G__71278 = (0);
var G__71279 = (0);
seq__71248_71255 = G__71276;
chunk__71249_71256 = G__71277;
count__71250_71257 = G__71278;
i__71251_71258 = G__71279;
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

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq71245){
var G__71246 = cljs.core.first.call(null,seq71245);
var seq71245__$1 = cljs.core.next.call(null,seq71245);
var G__71247 = cljs.core.first.call(null,seq71245__$1);
var seq71245__$2 = cljs.core.next.call(null,seq71245__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__71246,G__71247,seq71245__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__27061__auto__ = [];
var len__27054__auto___71282 = arguments.length;
var i__27055__auto___71283 = (0);
while(true){
if((i__27055__auto___71283 < len__27054__auto___71282)){
args__27061__auto__.push((arguments[i__27055__auto___71283]));

var G__71284 = (i__27055__auto___71283 + (1));
i__27055__auto___71283 = G__71284;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((1) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27062__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,goog.object.get(template,"concat").apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq71280){
var G__71281 = cljs.core.first.call(null,seq71280);
var seq71280__$1 = cljs.core.next.call(null,seq71280);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__71281,seq71280__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__27061__auto__ = [];
var len__27054__auto___71287 = arguments.length;
var i__27055__auto___71288 = (0);
while(true){
if((i__27055__auto___71288 < len__27054__auto___71287)){
args__27061__auto__.push((arguments[i__27055__auto___71288]));

var G__71289 = (i__27055__auto___71288 + (1));
i__27055__auto___71288 = G__71289;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((1) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27062__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq71285){
var G__71286 = cljs.core.first.call(null,seq71285);
var seq71285__$1 = cljs.core.next.call(null,seq71285);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__71286,seq71285__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var args71290 = [];
var len__27054__auto___71295 = arguments.length;
var i__27055__auto___71296 = (0);
while(true){
if((i__27055__auto___71296 < len__27054__auto___71295)){
args71290.push((arguments[i__27055__auto___71296]));

var G__71297 = (i__27055__auto___71296 + (1));
i__27055__auto___71296 = G__71297;
continue;
} else {
}
break;
}

var G__71292 = args71290.length;
switch (G__71292) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args71290.length)].join('')));

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
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj71294 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__25979__auto__ = start_index;
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return (0);
}
})()};
return obj71294;
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
var args__27061__auto__ = [];
var len__27054__auto___71305 = arguments.length;
var i__27055__auto___71306 = (0);
while(true){
if((i__27055__auto___71306 < len__27054__auto___71305)){
args__27061__auto__.push((arguments[i__27055__auto___71306]));

var G__71307 = (i__27055__auto___71306 + (1));
i__27055__auto___71306 = G__71307;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((1) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27062__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__71301){
var vec__71302 = p__71301;
var state_override_fn = cljs.core.nth.call(null,vec__71302,(0),null);
if(((state_override_fn == null)) || (cljs.core.fn_QMARK_.call(null,state_override_fn))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203));
} else {
var sub_state = ((cljs.core.some_QMARK_.call(null,state_override_fn))?state_override_fn.call(null,devtools.formatters.state.get_current_state.call(null)):devtools.formatters.state.get_current_state.call(null));
return devtools.formatters.templating.make_group.call(null,"object",({"object": object, "config": sub_state}));
}
});

devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq71299){
var G__71300 = cljs.core.first.call(null,seq71299);
var seq71299__$1 = cljs.core.next.call(null,seq71299);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__71300,seq71299__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.pprint_str = (function devtools$formatters$templating$pprint_str(markup){
var sb__26965__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_71311_71314 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_71312_71315 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_71311_71314,_STAR_print_fn_STAR_71312_71315,sb__26965__auto__){
return (function (x__26966__auto__){
return sb__26965__auto__.append(x__26966__auto__);
});})(_STAR_print_newline_STAR_71311_71314,_STAR_print_fn_STAR_71312_71315,sb__26965__auto__))
;

try{var _STAR_print_level_STAR_71313_71316 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (300);

try{cljs.pprint.pprint.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_71313_71316;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_71312_71315;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_71311_71314;
}
return [cljs.core.str(sb__26965__auto__)].join('');
});
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_71318 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_71318;
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
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str(msg),cljs.core.str("\n"),cljs.core.str("Render path: "),cljs.core.str(devtools.formatters.templating.pprint_render_path.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_)),cljs.core.str("\n"),cljs.core.str("Render stack:\n"),cljs.core.str(devtools.formatters.templating.pprint_render_stack.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return (cljs.core.sequential_QMARK_.call(null,markup)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,markup),"surrogate"));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__71320 = name;
switch (G__71320) {
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
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str("no matching special tag name: '"),cljs.core.str(name),cljs.core.str("'")].join(''));

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
var vec__71325 = tag;
var html_tag = cljs.core.nth.call(null,vec__71325,(0),null);
var style = cljs.core.nth.call(null,vec__71325,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_71329 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first.call(null,markup));

try{var tag = devtools.formatters.helpers.pref.call(null,cljs.core.first.call(null,markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special.call(null,tag,cljs.core.rest.call(null,markup));
} else {
if(cljs.core.sequential_QMARK_.call(null,tag)){
return devtools.formatters.templating.render_subtree.call(null,tag,cljs.core.rest.call(null,markup));
} else {
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str("invalid json-ml markup at "),cljs.core.str(devtools.formatters.templating.print_preview.call(null,markup)),cljs.core.str(":")].join(''));

}
}
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_71329;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_71332 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_71333 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_71333;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_71332;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("result of markup rendering must be a template,\n"),cljs.core.str("resolved to "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,value)),cljs.core.str("initial value: "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,initial_value))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__71334 = initial_value;
var G__71335 = value.call(null);
initial_value = G__71334;
value = G__71335;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__71336 = initial_value;
var G__71337 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__71336;
value = G__71337;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__71338 = initial_value;
var G__71339 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__71338;
value = G__71339;
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

//# sourceMappingURL=templating.js.map?rel=1498707056466