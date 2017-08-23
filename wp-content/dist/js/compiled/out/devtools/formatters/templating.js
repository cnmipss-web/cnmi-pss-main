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
var x50679_50680 = value;
x50679_50680.devtools$protocols$IGroup$ = cljs.core.PROTOCOL_SENTINEL;


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
var x50682_50683 = value;
x50682_50683.devtools$protocols$ITemplate$ = cljs.core.PROTOCOL_SENTINEL;


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
var x50685_50686 = value;
x50685_50686.devtools$protocols$ISurrogate$ = cljs.core.PROTOCOL_SENTINEL;


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
var and__36745__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__36745__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__36745__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__37889__auto__ = [];
var len__37882__auto___50693 = arguments.length;
var i__37883__auto___50694 = (0);
while(true){
if((i__37883__auto___50694 < len__37882__auto___50693)){
args__37889__auto__.push((arguments[i__37883__auto___50694]));

var G__50695 = (i__37883__auto___50694 + (1));
i__37883__auto___50694 = G__50695;
continue;
} else {
}
break;
}

var argseq__37890__auto__ = ((((0) < args__37889__auto__.length))?(new cljs.core.IndexedSeq(args__37889__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__37890__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__50689_50696 = cljs.core.seq.call(null,items);
var chunk__50690_50697 = null;
var count__50691_50698 = (0);
var i__50692_50699 = (0);
while(true){
if((i__50692_50699 < count__50691_50698)){
var item_50700 = cljs.core._nth.call(null,chunk__50690_50697,i__50692_50699);
if(!((item_50700 == null))){
if(cljs.core.coll_QMARK_.call(null,item_50700)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_50700)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_50700));
}
} else {
}

var G__50701 = seq__50689_50696;
var G__50702 = chunk__50690_50697;
var G__50703 = count__50691_50698;
var G__50704 = (i__50692_50699 + (1));
seq__50689_50696 = G__50701;
chunk__50690_50697 = G__50702;
count__50691_50698 = G__50703;
i__50692_50699 = G__50704;
continue;
} else {
var temp__4657__auto___50705 = cljs.core.seq.call(null,seq__50689_50696);
if(temp__4657__auto___50705){
var seq__50689_50706__$1 = temp__4657__auto___50705;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50689_50706__$1)){
var c__37577__auto___50707 = cljs.core.chunk_first.call(null,seq__50689_50706__$1);
var G__50708 = cljs.core.chunk_rest.call(null,seq__50689_50706__$1);
var G__50709 = c__37577__auto___50707;
var G__50710 = cljs.core.count.call(null,c__37577__auto___50707);
var G__50711 = (0);
seq__50689_50696 = G__50708;
chunk__50690_50697 = G__50709;
count__50691_50698 = G__50710;
i__50692_50699 = G__50711;
continue;
} else {
var item_50712 = cljs.core.first.call(null,seq__50689_50706__$1);
if(!((item_50712 == null))){
if(cljs.core.coll_QMARK_.call(null,item_50712)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_50712)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_50712));
}
} else {
}

var G__50713 = cljs.core.next.call(null,seq__50689_50706__$1);
var G__50714 = null;
var G__50715 = (0);
var G__50716 = (0);
seq__50689_50696 = G__50713;
chunk__50690_50697 = G__50714;
count__50691_50698 = G__50715;
i__50692_50699 = G__50716;
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

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq50688){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50688));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__37889__auto__ = [];
var len__37882__auto___50724 = arguments.length;
var i__37883__auto___50725 = (0);
while(true){
if((i__37883__auto___50725 < len__37882__auto___50724)){
args__37889__auto__.push((arguments[i__37883__auto___50725]));

var G__50726 = (i__37883__auto___50725 + (1));
i__37883__auto___50725 = G__50726;
continue;
} else {
}
break;
}

var argseq__37890__auto__ = ((((2) < args__37889__auto__.length))?(new cljs.core.IndexedSeq(args__37889__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37890__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__50720_50727 = cljs.core.seq.call(null,children);
var chunk__50721_50728 = null;
var count__50722_50729 = (0);
var i__50723_50730 = (0);
while(true){
if((i__50723_50730 < count__50722_50729)){
var child_50731 = cljs.core._nth.call(null,chunk__50721_50728,i__50723_50730);
if(!((child_50731 == null))){
if(cljs.core.coll_QMARK_.call(null,child_50731)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_50731))));
} else {
var temp__4655__auto___50732 = devtools.formatters.helpers.pref.call(null,child_50731);
if(cljs.core.truth_(temp__4655__auto___50732)){
var child_value_50733 = temp__4655__auto___50732;
template.push(child_value_50733);
} else {
}
}
} else {
}

var G__50734 = seq__50720_50727;
var G__50735 = chunk__50721_50728;
var G__50736 = count__50722_50729;
var G__50737 = (i__50723_50730 + (1));
seq__50720_50727 = G__50734;
chunk__50721_50728 = G__50735;
count__50722_50729 = G__50736;
i__50723_50730 = G__50737;
continue;
} else {
var temp__4657__auto___50738 = cljs.core.seq.call(null,seq__50720_50727);
if(temp__4657__auto___50738){
var seq__50720_50739__$1 = temp__4657__auto___50738;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50720_50739__$1)){
var c__37577__auto___50740 = cljs.core.chunk_first.call(null,seq__50720_50739__$1);
var G__50741 = cljs.core.chunk_rest.call(null,seq__50720_50739__$1);
var G__50742 = c__37577__auto___50740;
var G__50743 = cljs.core.count.call(null,c__37577__auto___50740);
var G__50744 = (0);
seq__50720_50727 = G__50741;
chunk__50721_50728 = G__50742;
count__50722_50729 = G__50743;
i__50723_50730 = G__50744;
continue;
} else {
var child_50745 = cljs.core.first.call(null,seq__50720_50739__$1);
if(!((child_50745 == null))){
if(cljs.core.coll_QMARK_.call(null,child_50745)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_50745))));
} else {
var temp__4655__auto___50746 = devtools.formatters.helpers.pref.call(null,child_50745);
if(cljs.core.truth_(temp__4655__auto___50746)){
var child_value_50747 = temp__4655__auto___50746;
template.push(child_value_50747);
} else {
}
}
} else {
}

var G__50748 = cljs.core.next.call(null,seq__50720_50739__$1);
var G__50749 = null;
var G__50750 = (0);
var G__50751 = (0);
seq__50720_50727 = G__50748;
chunk__50721_50728 = G__50749;
count__50722_50729 = G__50750;
i__50723_50730 = G__50751;
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

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq50717){
var G__50718 = cljs.core.first.call(null,seq50717);
var seq50717__$1 = cljs.core.next.call(null,seq50717);
var G__50719 = cljs.core.first.call(null,seq50717__$1);
var seq50717__$2 = cljs.core.next.call(null,seq50717__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__50718,G__50719,seq50717__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__37889__auto__ = [];
var len__37882__auto___50754 = arguments.length;
var i__37883__auto___50755 = (0);
while(true){
if((i__37883__auto___50755 < len__37882__auto___50754)){
args__37889__auto__.push((arguments[i__37883__auto___50755]));

var G__50756 = (i__37883__auto___50755 + (1));
i__37883__auto___50755 = G__50756;
continue;
} else {
}
break;
}

var argseq__37890__auto__ = ((((1) < args__37889__auto__.length))?(new cljs.core.IndexedSeq(args__37889__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37890__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,goog.object.get(template,"concat").apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq50752){
var G__50753 = cljs.core.first.call(null,seq50752);
var seq50752__$1 = cljs.core.next.call(null,seq50752);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__50753,seq50752__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__37889__auto__ = [];
var len__37882__auto___50759 = arguments.length;
var i__37883__auto___50760 = (0);
while(true){
if((i__37883__auto___50760 < len__37882__auto___50759)){
args__37889__auto__.push((arguments[i__37883__auto___50760]));

var G__50761 = (i__37883__auto___50760 + (1));
i__37883__auto___50760 = G__50761;
continue;
} else {
}
break;
}

var argseq__37890__auto__ = ((((1) < args__37889__auto__.length))?(new cljs.core.IndexedSeq(args__37889__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37890__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq50757){
var G__50758 = cljs.core.first.call(null,seq50757);
var seq50757__$1 = cljs.core.next.call(null,seq50757);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__50758,seq50757__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var G__50763 = arguments.length;
switch (G__50763) {
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
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj50765 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__36757__auto__ = start_index;
if(cljs.core.truth_(or__36757__auto__)){
return or__36757__auto__;
} else {
return (0);
}
})()};
return obj50765;
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
var args__37889__auto__ = [];
var len__37882__auto___50773 = arguments.length;
var i__37883__auto___50774 = (0);
while(true){
if((i__37883__auto___50774 < len__37882__auto___50773)){
args__37889__auto__.push((arguments[i__37883__auto___50774]));

var G__50775 = (i__37883__auto___50774 + (1));
i__37883__auto___50774 = G__50775;
continue;
} else {
}
break;
}

var argseq__37890__auto__ = ((((1) < args__37889__auto__.length))?(new cljs.core.IndexedSeq(args__37889__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37890__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__50769){
var vec__50770 = p__50769;
var state_override_fn = cljs.core.nth.call(null,vec__50770,(0),null);
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

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq50767){
var G__50768 = cljs.core.first.call(null,seq50767);
var seq50767__$1 = cljs.core.next.call(null,seq50767);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__50768,seq50767__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.pprint_str = (function devtools$formatters$templating$pprint_str(markup){
var sb__37763__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_50776_50779 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_50777_50780 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_50776_50779,_STAR_print_fn_STAR_50777_50780,sb__37763__auto__){
return (function (x__37764__auto__){
return sb__37763__auto__.append(x__37764__auto__);
});})(_STAR_print_newline_STAR_50776_50779,_STAR_print_fn_STAR_50777_50780,sb__37763__auto__))
;

try{var _STAR_print_level_STAR_50778_50781 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (300);

try{cljs.pprint.pprint.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_50778_50781;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_50777_50780;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_50776_50779;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__37763__auto__)].join('');
});
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_50782 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_50782;
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
var G__50783 = name;
switch (G__50783) {
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
var vec__50785 = tag;
var html_tag = cljs.core.nth.call(null,vec__50785,(0),null);
var style = cljs.core.nth.call(null,vec__50785,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_50788 = devtools.formatters.templating._STAR_current_render_path_STAR_;
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
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_50788;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_50789 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_50790 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_50790;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_50789;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("result of markup rendering must be a template,\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("resolved to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_str.call(null,value)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("initial value: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_str.call(null,initial_value))].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("false")].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__50791 = initial_value;
var G__50792 = value.call(null);
initial_value = G__50791;
value = G__50792;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__50793 = initial_value;
var G__50794 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__50793;
value = G__50794;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__50795 = initial_value;
var G__50796 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__50795;
value = G__50796;
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

//# sourceMappingURL=templating.js.map?rel=1503441683977