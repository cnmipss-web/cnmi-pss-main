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
var x50688_50689 = value;
x50688_50689.devtools$protocols$IGroup$ = cljs.core.PROTOCOL_SENTINEL;


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
var x50691_50692 = value;
x50691_50692.devtools$protocols$ITemplate$ = cljs.core.PROTOCOL_SENTINEL;


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
var x50694_50695 = value;
x50694_50695.devtools$protocols$ISurrogate$ = cljs.core.PROTOCOL_SENTINEL;


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
var and__36757__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__36757__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__36757__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__37901__auto__ = [];
var len__37894__auto___50702 = arguments.length;
var i__37895__auto___50703 = (0);
while(true){
if((i__37895__auto___50703 < len__37894__auto___50702)){
args__37901__auto__.push((arguments[i__37895__auto___50703]));

var G__50704 = (i__37895__auto___50703 + (1));
i__37895__auto___50703 = G__50704;
continue;
} else {
}
break;
}

var argseq__37902__auto__ = ((((0) < args__37901__auto__.length))?(new cljs.core.IndexedSeq(args__37901__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__37902__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__50698_50705 = cljs.core.seq.call(null,items);
var chunk__50699_50706 = null;
var count__50700_50707 = (0);
var i__50701_50708 = (0);
while(true){
if((i__50701_50708 < count__50700_50707)){
var item_50709 = cljs.core._nth.call(null,chunk__50699_50706,i__50701_50708);
if(!((item_50709 == null))){
if(cljs.core.coll_QMARK_.call(null,item_50709)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_50709)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_50709));
}
} else {
}

var G__50710 = seq__50698_50705;
var G__50711 = chunk__50699_50706;
var G__50712 = count__50700_50707;
var G__50713 = (i__50701_50708 + (1));
seq__50698_50705 = G__50710;
chunk__50699_50706 = G__50711;
count__50700_50707 = G__50712;
i__50701_50708 = G__50713;
continue;
} else {
var temp__4657__auto___50714 = cljs.core.seq.call(null,seq__50698_50705);
if(temp__4657__auto___50714){
var seq__50698_50715__$1 = temp__4657__auto___50714;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50698_50715__$1)){
var c__37589__auto___50716 = cljs.core.chunk_first.call(null,seq__50698_50715__$1);
var G__50717 = cljs.core.chunk_rest.call(null,seq__50698_50715__$1);
var G__50718 = c__37589__auto___50716;
var G__50719 = cljs.core.count.call(null,c__37589__auto___50716);
var G__50720 = (0);
seq__50698_50705 = G__50717;
chunk__50699_50706 = G__50718;
count__50700_50707 = G__50719;
i__50701_50708 = G__50720;
continue;
} else {
var item_50721 = cljs.core.first.call(null,seq__50698_50715__$1);
if(!((item_50721 == null))){
if(cljs.core.coll_QMARK_.call(null,item_50721)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_50721)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_50721));
}
} else {
}

var G__50722 = cljs.core.next.call(null,seq__50698_50715__$1);
var G__50723 = null;
var G__50724 = (0);
var G__50725 = (0);
seq__50698_50705 = G__50722;
chunk__50699_50706 = G__50723;
count__50700_50707 = G__50724;
i__50701_50708 = G__50725;
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

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq50697){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50697));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__37901__auto__ = [];
var len__37894__auto___50733 = arguments.length;
var i__37895__auto___50734 = (0);
while(true){
if((i__37895__auto___50734 < len__37894__auto___50733)){
args__37901__auto__.push((arguments[i__37895__auto___50734]));

var G__50735 = (i__37895__auto___50734 + (1));
i__37895__auto___50734 = G__50735;
continue;
} else {
}
break;
}

var argseq__37902__auto__ = ((((2) < args__37901__auto__.length))?(new cljs.core.IndexedSeq(args__37901__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37902__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__50729_50736 = cljs.core.seq.call(null,children);
var chunk__50730_50737 = null;
var count__50731_50738 = (0);
var i__50732_50739 = (0);
while(true){
if((i__50732_50739 < count__50731_50738)){
var child_50740 = cljs.core._nth.call(null,chunk__50730_50737,i__50732_50739);
if(!((child_50740 == null))){
if(cljs.core.coll_QMARK_.call(null,child_50740)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_50740))));
} else {
var temp__4655__auto___50741 = devtools.formatters.helpers.pref.call(null,child_50740);
if(cljs.core.truth_(temp__4655__auto___50741)){
var child_value_50742 = temp__4655__auto___50741;
template.push(child_value_50742);
} else {
}
}
} else {
}

var G__50743 = seq__50729_50736;
var G__50744 = chunk__50730_50737;
var G__50745 = count__50731_50738;
var G__50746 = (i__50732_50739 + (1));
seq__50729_50736 = G__50743;
chunk__50730_50737 = G__50744;
count__50731_50738 = G__50745;
i__50732_50739 = G__50746;
continue;
} else {
var temp__4657__auto___50747 = cljs.core.seq.call(null,seq__50729_50736);
if(temp__4657__auto___50747){
var seq__50729_50748__$1 = temp__4657__auto___50747;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50729_50748__$1)){
var c__37589__auto___50749 = cljs.core.chunk_first.call(null,seq__50729_50748__$1);
var G__50750 = cljs.core.chunk_rest.call(null,seq__50729_50748__$1);
var G__50751 = c__37589__auto___50749;
var G__50752 = cljs.core.count.call(null,c__37589__auto___50749);
var G__50753 = (0);
seq__50729_50736 = G__50750;
chunk__50730_50737 = G__50751;
count__50731_50738 = G__50752;
i__50732_50739 = G__50753;
continue;
} else {
var child_50754 = cljs.core.first.call(null,seq__50729_50748__$1);
if(!((child_50754 == null))){
if(cljs.core.coll_QMARK_.call(null,child_50754)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_50754))));
} else {
var temp__4655__auto___50755 = devtools.formatters.helpers.pref.call(null,child_50754);
if(cljs.core.truth_(temp__4655__auto___50755)){
var child_value_50756 = temp__4655__auto___50755;
template.push(child_value_50756);
} else {
}
}
} else {
}

var G__50757 = cljs.core.next.call(null,seq__50729_50748__$1);
var G__50758 = null;
var G__50759 = (0);
var G__50760 = (0);
seq__50729_50736 = G__50757;
chunk__50730_50737 = G__50758;
count__50731_50738 = G__50759;
i__50732_50739 = G__50760;
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

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq50726){
var G__50727 = cljs.core.first.call(null,seq50726);
var seq50726__$1 = cljs.core.next.call(null,seq50726);
var G__50728 = cljs.core.first.call(null,seq50726__$1);
var seq50726__$2 = cljs.core.next.call(null,seq50726__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__50727,G__50728,seq50726__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__37901__auto__ = [];
var len__37894__auto___50763 = arguments.length;
var i__37895__auto___50764 = (0);
while(true){
if((i__37895__auto___50764 < len__37894__auto___50763)){
args__37901__auto__.push((arguments[i__37895__auto___50764]));

var G__50765 = (i__37895__auto___50764 + (1));
i__37895__auto___50764 = G__50765;
continue;
} else {
}
break;
}

var argseq__37902__auto__ = ((((1) < args__37901__auto__.length))?(new cljs.core.IndexedSeq(args__37901__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37902__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,goog.object.get(template,"concat").apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq50761){
var G__50762 = cljs.core.first.call(null,seq50761);
var seq50761__$1 = cljs.core.next.call(null,seq50761);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__50762,seq50761__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__37901__auto__ = [];
var len__37894__auto___50768 = arguments.length;
var i__37895__auto___50769 = (0);
while(true){
if((i__37895__auto___50769 < len__37894__auto___50768)){
args__37901__auto__.push((arguments[i__37895__auto___50769]));

var G__50770 = (i__37895__auto___50769 + (1));
i__37895__auto___50769 = G__50770;
continue;
} else {
}
break;
}

var argseq__37902__auto__ = ((((1) < args__37901__auto__.length))?(new cljs.core.IndexedSeq(args__37901__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37902__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq50766){
var G__50767 = cljs.core.first.call(null,seq50766);
var seq50766__$1 = cljs.core.next.call(null,seq50766);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__50767,seq50766__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var G__50772 = arguments.length;
switch (G__50772) {
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
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj50774 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__36769__auto__ = start_index;
if(cljs.core.truth_(or__36769__auto__)){
return or__36769__auto__;
} else {
return (0);
}
})()};
return obj50774;
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
var args__37901__auto__ = [];
var len__37894__auto___50782 = arguments.length;
var i__37895__auto___50783 = (0);
while(true){
if((i__37895__auto___50783 < len__37894__auto___50782)){
args__37901__auto__.push((arguments[i__37895__auto___50783]));

var G__50784 = (i__37895__auto___50783 + (1));
i__37895__auto___50783 = G__50784;
continue;
} else {
}
break;
}

var argseq__37902__auto__ = ((((1) < args__37901__auto__.length))?(new cljs.core.IndexedSeq(args__37901__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37902__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__50778){
var vec__50779 = p__50778;
var state_override_fn = cljs.core.nth.call(null,vec__50779,(0),null);
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

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq50776){
var G__50777 = cljs.core.first.call(null,seq50776);
var seq50776__$1 = cljs.core.next.call(null,seq50776);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__50777,seq50776__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.pprint_str = (function devtools$formatters$templating$pprint_str(markup){
var sb__37775__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_50785_50788 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_50786_50789 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_50785_50788,_STAR_print_fn_STAR_50786_50789,sb__37775__auto__){
return (function (x__37776__auto__){
return sb__37775__auto__.append(x__37776__auto__);
});})(_STAR_print_newline_STAR_50785_50788,_STAR_print_fn_STAR_50786_50789,sb__37775__auto__))
;

try{var _STAR_print_level_STAR_50787_50790 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (300);

try{cljs.pprint.pprint.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_50787_50790;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_50786_50789;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_50785_50788;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__37775__auto__)].join('');
});
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_50791 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_50791;
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
var G__50792 = name;
switch (G__50792) {
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
var vec__50794 = tag;
var html_tag = cljs.core.nth.call(null,vec__50794,(0),null);
var style = cljs.core.nth.call(null,vec__50794,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_50797 = devtools.formatters.templating._STAR_current_render_path_STAR_;
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
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_50797;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_50798 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_50799 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_50799;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_50798;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("result of markup rendering must be a template,\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("resolved to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_str.call(null,value)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("initial value: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_str.call(null,initial_value))].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("false")].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__50800 = initial_value;
var G__50801 = value.call(null);
initial_value = G__50800;
value = G__50801;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__50802 = initial_value;
var G__50803 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__50802;
value = G__50803;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__50804 = initial_value;
var G__50805 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__50804;
value = G__50805;
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

//# sourceMappingURL=templating.js.map?rel=1502846517765