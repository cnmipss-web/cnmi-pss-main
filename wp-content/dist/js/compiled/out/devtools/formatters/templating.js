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
var x50736_50737 = value;
x50736_50737.devtools$protocols$IGroup$ = cljs.core.PROTOCOL_SENTINEL;


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
var x50739_50740 = value;
x50739_50740.devtools$protocols$ITemplate$ = cljs.core.PROTOCOL_SENTINEL;


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
var x50742_50743 = value;
x50742_50743.devtools$protocols$ISurrogate$ = cljs.core.PROTOCOL_SENTINEL;


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
var and__36744__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__36744__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__36744__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__37888__auto__ = [];
var len__37881__auto___50750 = arguments.length;
var i__37882__auto___50751 = (0);
while(true){
if((i__37882__auto___50751 < len__37881__auto___50750)){
args__37888__auto__.push((arguments[i__37882__auto___50751]));

var G__50752 = (i__37882__auto___50751 + (1));
i__37882__auto___50751 = G__50752;
continue;
} else {
}
break;
}

var argseq__37889__auto__ = ((((0) < args__37888__auto__.length))?(new cljs.core.IndexedSeq(args__37888__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__37889__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__50746_50753 = cljs.core.seq.call(null,items);
var chunk__50747_50754 = null;
var count__50748_50755 = (0);
var i__50749_50756 = (0);
while(true){
if((i__50749_50756 < count__50748_50755)){
var item_50757 = cljs.core._nth.call(null,chunk__50747_50754,i__50749_50756);
if(!((item_50757 == null))){
if(cljs.core.coll_QMARK_.call(null,item_50757)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_50757)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_50757));
}
} else {
}

var G__50758 = seq__50746_50753;
var G__50759 = chunk__50747_50754;
var G__50760 = count__50748_50755;
var G__50761 = (i__50749_50756 + (1));
seq__50746_50753 = G__50758;
chunk__50747_50754 = G__50759;
count__50748_50755 = G__50760;
i__50749_50756 = G__50761;
continue;
} else {
var temp__4657__auto___50762 = cljs.core.seq.call(null,seq__50746_50753);
if(temp__4657__auto___50762){
var seq__50746_50763__$1 = temp__4657__auto___50762;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50746_50763__$1)){
var c__37576__auto___50764 = cljs.core.chunk_first.call(null,seq__50746_50763__$1);
var G__50765 = cljs.core.chunk_rest.call(null,seq__50746_50763__$1);
var G__50766 = c__37576__auto___50764;
var G__50767 = cljs.core.count.call(null,c__37576__auto___50764);
var G__50768 = (0);
seq__50746_50753 = G__50765;
chunk__50747_50754 = G__50766;
count__50748_50755 = G__50767;
i__50749_50756 = G__50768;
continue;
} else {
var item_50769 = cljs.core.first.call(null,seq__50746_50763__$1);
if(!((item_50769 == null))){
if(cljs.core.coll_QMARK_.call(null,item_50769)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_50769)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_50769));
}
} else {
}

var G__50770 = cljs.core.next.call(null,seq__50746_50763__$1);
var G__50771 = null;
var G__50772 = (0);
var G__50773 = (0);
seq__50746_50753 = G__50770;
chunk__50747_50754 = G__50771;
count__50748_50755 = G__50772;
i__50749_50756 = G__50773;
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

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq50745){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50745));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__37888__auto__ = [];
var len__37881__auto___50781 = arguments.length;
var i__37882__auto___50782 = (0);
while(true){
if((i__37882__auto___50782 < len__37881__auto___50781)){
args__37888__auto__.push((arguments[i__37882__auto___50782]));

var G__50783 = (i__37882__auto___50782 + (1));
i__37882__auto___50782 = G__50783;
continue;
} else {
}
break;
}

var argseq__37889__auto__ = ((((2) < args__37888__auto__.length))?(new cljs.core.IndexedSeq(args__37888__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37889__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__50777_50784 = cljs.core.seq.call(null,children);
var chunk__50778_50785 = null;
var count__50779_50786 = (0);
var i__50780_50787 = (0);
while(true){
if((i__50780_50787 < count__50779_50786)){
var child_50788 = cljs.core._nth.call(null,chunk__50778_50785,i__50780_50787);
if(!((child_50788 == null))){
if(cljs.core.coll_QMARK_.call(null,child_50788)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_50788))));
} else {
var temp__4655__auto___50789 = devtools.formatters.helpers.pref.call(null,child_50788);
if(cljs.core.truth_(temp__4655__auto___50789)){
var child_value_50790 = temp__4655__auto___50789;
template.push(child_value_50790);
} else {
}
}
} else {
}

var G__50791 = seq__50777_50784;
var G__50792 = chunk__50778_50785;
var G__50793 = count__50779_50786;
var G__50794 = (i__50780_50787 + (1));
seq__50777_50784 = G__50791;
chunk__50778_50785 = G__50792;
count__50779_50786 = G__50793;
i__50780_50787 = G__50794;
continue;
} else {
var temp__4657__auto___50795 = cljs.core.seq.call(null,seq__50777_50784);
if(temp__4657__auto___50795){
var seq__50777_50796__$1 = temp__4657__auto___50795;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50777_50796__$1)){
var c__37576__auto___50797 = cljs.core.chunk_first.call(null,seq__50777_50796__$1);
var G__50798 = cljs.core.chunk_rest.call(null,seq__50777_50796__$1);
var G__50799 = c__37576__auto___50797;
var G__50800 = cljs.core.count.call(null,c__37576__auto___50797);
var G__50801 = (0);
seq__50777_50784 = G__50798;
chunk__50778_50785 = G__50799;
count__50779_50786 = G__50800;
i__50780_50787 = G__50801;
continue;
} else {
var child_50802 = cljs.core.first.call(null,seq__50777_50796__$1);
if(!((child_50802 == null))){
if(cljs.core.coll_QMARK_.call(null,child_50802)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_50802))));
} else {
var temp__4655__auto___50803 = devtools.formatters.helpers.pref.call(null,child_50802);
if(cljs.core.truth_(temp__4655__auto___50803)){
var child_value_50804 = temp__4655__auto___50803;
template.push(child_value_50804);
} else {
}
}
} else {
}

var G__50805 = cljs.core.next.call(null,seq__50777_50796__$1);
var G__50806 = null;
var G__50807 = (0);
var G__50808 = (0);
seq__50777_50784 = G__50805;
chunk__50778_50785 = G__50806;
count__50779_50786 = G__50807;
i__50780_50787 = G__50808;
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

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq50774){
var G__50775 = cljs.core.first.call(null,seq50774);
var seq50774__$1 = cljs.core.next.call(null,seq50774);
var G__50776 = cljs.core.first.call(null,seq50774__$1);
var seq50774__$2 = cljs.core.next.call(null,seq50774__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__50775,G__50776,seq50774__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__37888__auto__ = [];
var len__37881__auto___50811 = arguments.length;
var i__37882__auto___50812 = (0);
while(true){
if((i__37882__auto___50812 < len__37881__auto___50811)){
args__37888__auto__.push((arguments[i__37882__auto___50812]));

var G__50813 = (i__37882__auto___50812 + (1));
i__37882__auto___50812 = G__50813;
continue;
} else {
}
break;
}

var argseq__37889__auto__ = ((((1) < args__37888__auto__.length))?(new cljs.core.IndexedSeq(args__37888__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37889__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,goog.object.get(template,"concat").apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq50809){
var G__50810 = cljs.core.first.call(null,seq50809);
var seq50809__$1 = cljs.core.next.call(null,seq50809);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__50810,seq50809__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__37888__auto__ = [];
var len__37881__auto___50816 = arguments.length;
var i__37882__auto___50817 = (0);
while(true){
if((i__37882__auto___50817 < len__37881__auto___50816)){
args__37888__auto__.push((arguments[i__37882__auto___50817]));

var G__50818 = (i__37882__auto___50817 + (1));
i__37882__auto___50817 = G__50818;
continue;
} else {
}
break;
}

var argseq__37889__auto__ = ((((1) < args__37888__auto__.length))?(new cljs.core.IndexedSeq(args__37888__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37889__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq50814){
var G__50815 = cljs.core.first.call(null,seq50814);
var seq50814__$1 = cljs.core.next.call(null,seq50814);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__50815,seq50814__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var G__50820 = arguments.length;
switch (G__50820) {
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
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj50822 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__36756__auto__ = start_index;
if(cljs.core.truth_(or__36756__auto__)){
return or__36756__auto__;
} else {
return (0);
}
})()};
return obj50822;
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
var args__37888__auto__ = [];
var len__37881__auto___50830 = arguments.length;
var i__37882__auto___50831 = (0);
while(true){
if((i__37882__auto___50831 < len__37881__auto___50830)){
args__37888__auto__.push((arguments[i__37882__auto___50831]));

var G__50832 = (i__37882__auto___50831 + (1));
i__37882__auto___50831 = G__50832;
continue;
} else {
}
break;
}

var argseq__37889__auto__ = ((((1) < args__37888__auto__.length))?(new cljs.core.IndexedSeq(args__37888__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37889__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__50826){
var vec__50827 = p__50826;
var state_override_fn = cljs.core.nth.call(null,vec__50827,(0),null);
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

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq50824){
var G__50825 = cljs.core.first.call(null,seq50824);
var seq50824__$1 = cljs.core.next.call(null,seq50824);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__50825,seq50824__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.pprint_str = (function devtools$formatters$templating$pprint_str(markup){
var sb__37762__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_50833_50836 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_50834_50837 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_50833_50836,_STAR_print_fn_STAR_50834_50837,sb__37762__auto__){
return (function (x__37763__auto__){
return sb__37762__auto__.append(x__37763__auto__);
});})(_STAR_print_newline_STAR_50833_50836,_STAR_print_fn_STAR_50834_50837,sb__37762__auto__))
;

try{var _STAR_print_level_STAR_50835_50838 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (300);

try{cljs.pprint.pprint.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_50835_50838;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_50834_50837;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_50833_50836;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__37762__auto__)].join('');
});
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_50839 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_50839;
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
var G__50840 = name;
switch (G__50840) {
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
var vec__50842 = tag;
var html_tag = cljs.core.nth.call(null,vec__50842,(0),null);
var style = cljs.core.nth.call(null,vec__50842,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_50845 = devtools.formatters.templating._STAR_current_render_path_STAR_;
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
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_50845;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_50846 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_50847 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_50847;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_50846;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("result of markup rendering must be a template,\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("resolved to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_str.call(null,value)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("initial value: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_str.call(null,initial_value))].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("false")].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__50848 = initial_value;
var G__50849 = value.call(null);
initial_value = G__50848;
value = G__50849;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__50850 = initial_value;
var G__50851 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__50850;
value = G__50851;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__50852 = initial_value;
var G__50853 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__50852;
value = G__50853;
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

//# sourceMappingURL=templating.js.map?rel=1503532149130