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
var x50800_50801 = value;
x50800_50801.devtools$protocols$IGroup$ = cljs.core.PROTOCOL_SENTINEL;


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
var x50803_50804 = value;
x50803_50804.devtools$protocols$ITemplate$ = cljs.core.PROTOCOL_SENTINEL;


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
var x50806_50807 = value;
x50806_50807.devtools$protocols$ISurrogate$ = cljs.core.PROTOCOL_SENTINEL;


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
var and__27040__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__27040__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__27040__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__28184__auto__ = [];
var len__28177__auto___50814 = arguments.length;
var i__28178__auto___50815 = (0);
while(true){
if((i__28178__auto___50815 < len__28177__auto___50814)){
args__28184__auto__.push((arguments[i__28178__auto___50815]));

var G__50816 = (i__28178__auto___50815 + (1));
i__28178__auto___50815 = G__50816;
continue;
} else {
}
break;
}

var argseq__28185__auto__ = ((((0) < args__28184__auto__.length))?(new cljs.core.IndexedSeq(args__28184__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__28185__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__50810_50817 = cljs.core.seq.call(null,items);
var chunk__50811_50818 = null;
var count__50812_50819 = (0);
var i__50813_50820 = (0);
while(true){
if((i__50813_50820 < count__50812_50819)){
var item_50821 = cljs.core._nth.call(null,chunk__50811_50818,i__50813_50820);
if(!((item_50821 == null))){
if(cljs.core.coll_QMARK_.call(null,item_50821)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_50821)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_50821));
}
} else {
}

var G__50822 = seq__50810_50817;
var G__50823 = chunk__50811_50818;
var G__50824 = count__50812_50819;
var G__50825 = (i__50813_50820 + (1));
seq__50810_50817 = G__50822;
chunk__50811_50818 = G__50823;
count__50812_50819 = G__50824;
i__50813_50820 = G__50825;
continue;
} else {
var temp__4657__auto___50826 = cljs.core.seq.call(null,seq__50810_50817);
if(temp__4657__auto___50826){
var seq__50810_50827__$1 = temp__4657__auto___50826;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50810_50827__$1)){
var c__27872__auto___50828 = cljs.core.chunk_first.call(null,seq__50810_50827__$1);
var G__50829 = cljs.core.chunk_rest.call(null,seq__50810_50827__$1);
var G__50830 = c__27872__auto___50828;
var G__50831 = cljs.core.count.call(null,c__27872__auto___50828);
var G__50832 = (0);
seq__50810_50817 = G__50829;
chunk__50811_50818 = G__50830;
count__50812_50819 = G__50831;
i__50813_50820 = G__50832;
continue;
} else {
var item_50833 = cljs.core.first.call(null,seq__50810_50827__$1);
if(!((item_50833 == null))){
if(cljs.core.coll_QMARK_.call(null,item_50833)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_50833)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_50833));
}
} else {
}

var G__50834 = cljs.core.next.call(null,seq__50810_50827__$1);
var G__50835 = null;
var G__50836 = (0);
var G__50837 = (0);
seq__50810_50817 = G__50834;
chunk__50811_50818 = G__50835;
count__50812_50819 = G__50836;
i__50813_50820 = G__50837;
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

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq50809){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50809));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__28184__auto__ = [];
var len__28177__auto___50845 = arguments.length;
var i__28178__auto___50846 = (0);
while(true){
if((i__28178__auto___50846 < len__28177__auto___50845)){
args__28184__auto__.push((arguments[i__28178__auto___50846]));

var G__50847 = (i__28178__auto___50846 + (1));
i__28178__auto___50846 = G__50847;
continue;
} else {
}
break;
}

var argseq__28185__auto__ = ((((2) < args__28184__auto__.length))?(new cljs.core.IndexedSeq(args__28184__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28185__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__50841_50848 = cljs.core.seq.call(null,children);
var chunk__50842_50849 = null;
var count__50843_50850 = (0);
var i__50844_50851 = (0);
while(true){
if((i__50844_50851 < count__50843_50850)){
var child_50852 = cljs.core._nth.call(null,chunk__50842_50849,i__50844_50851);
if(!((child_50852 == null))){
if(cljs.core.coll_QMARK_.call(null,child_50852)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_50852))));
} else {
var temp__4655__auto___50853 = devtools.formatters.helpers.pref.call(null,child_50852);
if(cljs.core.truth_(temp__4655__auto___50853)){
var child_value_50854 = temp__4655__auto___50853;
template.push(child_value_50854);
} else {
}
}
} else {
}

var G__50855 = seq__50841_50848;
var G__50856 = chunk__50842_50849;
var G__50857 = count__50843_50850;
var G__50858 = (i__50844_50851 + (1));
seq__50841_50848 = G__50855;
chunk__50842_50849 = G__50856;
count__50843_50850 = G__50857;
i__50844_50851 = G__50858;
continue;
} else {
var temp__4657__auto___50859 = cljs.core.seq.call(null,seq__50841_50848);
if(temp__4657__auto___50859){
var seq__50841_50860__$1 = temp__4657__auto___50859;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50841_50860__$1)){
var c__27872__auto___50861 = cljs.core.chunk_first.call(null,seq__50841_50860__$1);
var G__50862 = cljs.core.chunk_rest.call(null,seq__50841_50860__$1);
var G__50863 = c__27872__auto___50861;
var G__50864 = cljs.core.count.call(null,c__27872__auto___50861);
var G__50865 = (0);
seq__50841_50848 = G__50862;
chunk__50842_50849 = G__50863;
count__50843_50850 = G__50864;
i__50844_50851 = G__50865;
continue;
} else {
var child_50866 = cljs.core.first.call(null,seq__50841_50860__$1);
if(!((child_50866 == null))){
if(cljs.core.coll_QMARK_.call(null,child_50866)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_50866))));
} else {
var temp__4655__auto___50867 = devtools.formatters.helpers.pref.call(null,child_50866);
if(cljs.core.truth_(temp__4655__auto___50867)){
var child_value_50868 = temp__4655__auto___50867;
template.push(child_value_50868);
} else {
}
}
} else {
}

var G__50869 = cljs.core.next.call(null,seq__50841_50860__$1);
var G__50870 = null;
var G__50871 = (0);
var G__50872 = (0);
seq__50841_50848 = G__50869;
chunk__50842_50849 = G__50870;
count__50843_50850 = G__50871;
i__50844_50851 = G__50872;
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

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq50838){
var G__50839 = cljs.core.first.call(null,seq50838);
var seq50838__$1 = cljs.core.next.call(null,seq50838);
var G__50840 = cljs.core.first.call(null,seq50838__$1);
var seq50838__$2 = cljs.core.next.call(null,seq50838__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__50839,G__50840,seq50838__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__28184__auto__ = [];
var len__28177__auto___50875 = arguments.length;
var i__28178__auto___50876 = (0);
while(true){
if((i__28178__auto___50876 < len__28177__auto___50875)){
args__28184__auto__.push((arguments[i__28178__auto___50876]));

var G__50877 = (i__28178__auto___50876 + (1));
i__28178__auto___50876 = G__50877;
continue;
} else {
}
break;
}

var argseq__28185__auto__ = ((((1) < args__28184__auto__.length))?(new cljs.core.IndexedSeq(args__28184__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28185__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,goog.object.get(template,"concat").apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq50873){
var G__50874 = cljs.core.first.call(null,seq50873);
var seq50873__$1 = cljs.core.next.call(null,seq50873);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__50874,seq50873__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__28184__auto__ = [];
var len__28177__auto___50880 = arguments.length;
var i__28178__auto___50881 = (0);
while(true){
if((i__28178__auto___50881 < len__28177__auto___50880)){
args__28184__auto__.push((arguments[i__28178__auto___50881]));

var G__50882 = (i__28178__auto___50881 + (1));
i__28178__auto___50881 = G__50882;
continue;
} else {
}
break;
}

var argseq__28185__auto__ = ((((1) < args__28184__auto__.length))?(new cljs.core.IndexedSeq(args__28184__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28185__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq50878){
var G__50879 = cljs.core.first.call(null,seq50878);
var seq50878__$1 = cljs.core.next.call(null,seq50878);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__50879,seq50878__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var G__50884 = arguments.length;
switch (G__50884) {
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
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj50886 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__27052__auto__ = start_index;
if(cljs.core.truth_(or__27052__auto__)){
return or__27052__auto__;
} else {
return (0);
}
})()};
return obj50886;
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
var args__28184__auto__ = [];
var len__28177__auto___50894 = arguments.length;
var i__28178__auto___50895 = (0);
while(true){
if((i__28178__auto___50895 < len__28177__auto___50894)){
args__28184__auto__.push((arguments[i__28178__auto___50895]));

var G__50896 = (i__28178__auto___50895 + (1));
i__28178__auto___50895 = G__50896;
continue;
} else {
}
break;
}

var argseq__28185__auto__ = ((((1) < args__28184__auto__.length))?(new cljs.core.IndexedSeq(args__28184__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28185__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__50890){
var vec__50891 = p__50890;
var state_override_fn = cljs.core.nth.call(null,vec__50891,(0),null);
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

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq50888){
var G__50889 = cljs.core.first.call(null,seq50888);
var seq50888__$1 = cljs.core.next.call(null,seq50888);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__50889,seq50888__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.pprint_str = (function devtools$formatters$templating$pprint_str(markup){
var sb__28058__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_50897_50900 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_50898_50901 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_50897_50900,_STAR_print_fn_STAR_50898_50901,sb__28058__auto__){
return (function (x__28059__auto__){
return sb__28058__auto__.append(x__28059__auto__);
});})(_STAR_print_newline_STAR_50897_50900,_STAR_print_fn_STAR_50898_50901,sb__28058__auto__))
;

try{var _STAR_print_level_STAR_50899_50902 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (300);

try{cljs.pprint.pprint.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_50899_50902;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_50898_50901;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_50897_50900;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__28058__auto__)].join('');
});
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_50903 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_50903;
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
var G__50904 = name;
switch (G__50904) {
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
var vec__50906 = tag;
var html_tag = cljs.core.nth.call(null,vec__50906,(0),null);
var style = cljs.core.nth.call(null,vec__50906,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_50909 = devtools.formatters.templating._STAR_current_render_path_STAR_;
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
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_50909;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_50910 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_50911 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_50911;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_50910;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("result of markup rendering must be a template,\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("resolved to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_str.call(null,value)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("initial value: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_str.call(null,initial_value))].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("false")].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__50912 = initial_value;
var G__50913 = value.call(null);
initial_value = G__50912;
value = G__50913;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__50914 = initial_value;
var G__50915 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__50914;
value = G__50915;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__50916 = initial_value;
var G__50917 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__50916;
value = G__50917;
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

//# sourceMappingURL=templating.js.map?rel=1501568775704