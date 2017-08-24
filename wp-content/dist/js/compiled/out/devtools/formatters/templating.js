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
var x50583_50584 = value;
x50583_50584.devtools$protocols$IGroup$ = cljs.core.PROTOCOL_SENTINEL;


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
var x50586_50587 = value;
x50586_50587.devtools$protocols$ITemplate$ = cljs.core.PROTOCOL_SENTINEL;


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
var x50589_50590 = value;
x50589_50590.devtools$protocols$ISurrogate$ = cljs.core.PROTOCOL_SENTINEL;


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
var len__37881__auto___50597 = arguments.length;
var i__37882__auto___50598 = (0);
while(true){
if((i__37882__auto___50598 < len__37881__auto___50597)){
args__37888__auto__.push((arguments[i__37882__auto___50598]));

var G__50599 = (i__37882__auto___50598 + (1));
i__37882__auto___50598 = G__50599;
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
var seq__50593_50600 = cljs.core.seq.call(null,items);
var chunk__50594_50601 = null;
var count__50595_50602 = (0);
var i__50596_50603 = (0);
while(true){
if((i__50596_50603 < count__50595_50602)){
var item_50604 = cljs.core._nth.call(null,chunk__50594_50601,i__50596_50603);
if(!((item_50604 == null))){
if(cljs.core.coll_QMARK_.call(null,item_50604)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_50604)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_50604));
}
} else {
}

var G__50605 = seq__50593_50600;
var G__50606 = chunk__50594_50601;
var G__50607 = count__50595_50602;
var G__50608 = (i__50596_50603 + (1));
seq__50593_50600 = G__50605;
chunk__50594_50601 = G__50606;
count__50595_50602 = G__50607;
i__50596_50603 = G__50608;
continue;
} else {
var temp__4657__auto___50609 = cljs.core.seq.call(null,seq__50593_50600);
if(temp__4657__auto___50609){
var seq__50593_50610__$1 = temp__4657__auto___50609;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50593_50610__$1)){
var c__37576__auto___50611 = cljs.core.chunk_first.call(null,seq__50593_50610__$1);
var G__50612 = cljs.core.chunk_rest.call(null,seq__50593_50610__$1);
var G__50613 = c__37576__auto___50611;
var G__50614 = cljs.core.count.call(null,c__37576__auto___50611);
var G__50615 = (0);
seq__50593_50600 = G__50612;
chunk__50594_50601 = G__50613;
count__50595_50602 = G__50614;
i__50596_50603 = G__50615;
continue;
} else {
var item_50616 = cljs.core.first.call(null,seq__50593_50610__$1);
if(!((item_50616 == null))){
if(cljs.core.coll_QMARK_.call(null,item_50616)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_50616)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_50616));
}
} else {
}

var G__50617 = cljs.core.next.call(null,seq__50593_50610__$1);
var G__50618 = null;
var G__50619 = (0);
var G__50620 = (0);
seq__50593_50600 = G__50617;
chunk__50594_50601 = G__50618;
count__50595_50602 = G__50619;
i__50596_50603 = G__50620;
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

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq50592){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50592));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__37888__auto__ = [];
var len__37881__auto___50628 = arguments.length;
var i__37882__auto___50629 = (0);
while(true){
if((i__37882__auto___50629 < len__37881__auto___50628)){
args__37888__auto__.push((arguments[i__37882__auto___50629]));

var G__50630 = (i__37882__auto___50629 + (1));
i__37882__auto___50629 = G__50630;
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
var seq__50624_50631 = cljs.core.seq.call(null,children);
var chunk__50625_50632 = null;
var count__50626_50633 = (0);
var i__50627_50634 = (0);
while(true){
if((i__50627_50634 < count__50626_50633)){
var child_50635 = cljs.core._nth.call(null,chunk__50625_50632,i__50627_50634);
if(!((child_50635 == null))){
if(cljs.core.coll_QMARK_.call(null,child_50635)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_50635))));
} else {
var temp__4655__auto___50636 = devtools.formatters.helpers.pref.call(null,child_50635);
if(cljs.core.truth_(temp__4655__auto___50636)){
var child_value_50637 = temp__4655__auto___50636;
template.push(child_value_50637);
} else {
}
}
} else {
}

var G__50638 = seq__50624_50631;
var G__50639 = chunk__50625_50632;
var G__50640 = count__50626_50633;
var G__50641 = (i__50627_50634 + (1));
seq__50624_50631 = G__50638;
chunk__50625_50632 = G__50639;
count__50626_50633 = G__50640;
i__50627_50634 = G__50641;
continue;
} else {
var temp__4657__auto___50642 = cljs.core.seq.call(null,seq__50624_50631);
if(temp__4657__auto___50642){
var seq__50624_50643__$1 = temp__4657__auto___50642;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50624_50643__$1)){
var c__37576__auto___50644 = cljs.core.chunk_first.call(null,seq__50624_50643__$1);
var G__50645 = cljs.core.chunk_rest.call(null,seq__50624_50643__$1);
var G__50646 = c__37576__auto___50644;
var G__50647 = cljs.core.count.call(null,c__37576__auto___50644);
var G__50648 = (0);
seq__50624_50631 = G__50645;
chunk__50625_50632 = G__50646;
count__50626_50633 = G__50647;
i__50627_50634 = G__50648;
continue;
} else {
var child_50649 = cljs.core.first.call(null,seq__50624_50643__$1);
if(!((child_50649 == null))){
if(cljs.core.coll_QMARK_.call(null,child_50649)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_50649))));
} else {
var temp__4655__auto___50650 = devtools.formatters.helpers.pref.call(null,child_50649);
if(cljs.core.truth_(temp__4655__auto___50650)){
var child_value_50651 = temp__4655__auto___50650;
template.push(child_value_50651);
} else {
}
}
} else {
}

var G__50652 = cljs.core.next.call(null,seq__50624_50643__$1);
var G__50653 = null;
var G__50654 = (0);
var G__50655 = (0);
seq__50624_50631 = G__50652;
chunk__50625_50632 = G__50653;
count__50626_50633 = G__50654;
i__50627_50634 = G__50655;
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

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq50621){
var G__50622 = cljs.core.first.call(null,seq50621);
var seq50621__$1 = cljs.core.next.call(null,seq50621);
var G__50623 = cljs.core.first.call(null,seq50621__$1);
var seq50621__$2 = cljs.core.next.call(null,seq50621__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__50622,G__50623,seq50621__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__37888__auto__ = [];
var len__37881__auto___50658 = arguments.length;
var i__37882__auto___50659 = (0);
while(true){
if((i__37882__auto___50659 < len__37881__auto___50658)){
args__37888__auto__.push((arguments[i__37882__auto___50659]));

var G__50660 = (i__37882__auto___50659 + (1));
i__37882__auto___50659 = G__50660;
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

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq50656){
var G__50657 = cljs.core.first.call(null,seq50656);
var seq50656__$1 = cljs.core.next.call(null,seq50656);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__50657,seq50656__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__37888__auto__ = [];
var len__37881__auto___50663 = arguments.length;
var i__37882__auto___50664 = (0);
while(true){
if((i__37882__auto___50664 < len__37881__auto___50663)){
args__37888__auto__.push((arguments[i__37882__auto___50664]));

var G__50665 = (i__37882__auto___50664 + (1));
i__37882__auto___50664 = G__50665;
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

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq50661){
var G__50662 = cljs.core.first.call(null,seq50661);
var seq50661__$1 = cljs.core.next.call(null,seq50661);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__50662,seq50661__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var G__50667 = arguments.length;
switch (G__50667) {
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
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj50669 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__36756__auto__ = start_index;
if(cljs.core.truth_(or__36756__auto__)){
return or__36756__auto__;
} else {
return (0);
}
})()};
return obj50669;
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
var len__37881__auto___50677 = arguments.length;
var i__37882__auto___50678 = (0);
while(true){
if((i__37882__auto___50678 < len__37881__auto___50677)){
args__37888__auto__.push((arguments[i__37882__auto___50678]));

var G__50679 = (i__37882__auto___50678 + (1));
i__37882__auto___50678 = G__50679;
continue;
} else {
}
break;
}

var argseq__37889__auto__ = ((((1) < args__37888__auto__.length))?(new cljs.core.IndexedSeq(args__37888__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37889__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__50673){
var vec__50674 = p__50673;
var state_override_fn = cljs.core.nth.call(null,vec__50674,(0),null);
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

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq50671){
var G__50672 = cljs.core.first.call(null,seq50671);
var seq50671__$1 = cljs.core.next.call(null,seq50671);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__50672,seq50671__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.pprint_str = (function devtools$formatters$templating$pprint_str(markup){
var sb__37762__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_50680_50683 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_50681_50684 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_50680_50683,_STAR_print_fn_STAR_50681_50684,sb__37762__auto__){
return (function (x__37763__auto__){
return sb__37762__auto__.append(x__37763__auto__);
});})(_STAR_print_newline_STAR_50680_50683,_STAR_print_fn_STAR_50681_50684,sb__37762__auto__))
;

try{var _STAR_print_level_STAR_50682_50685 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (300);

try{cljs.pprint.pprint.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_50682_50685;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_50681_50684;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_50680_50683;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__37762__auto__)].join('');
});
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_50686 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_50686;
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
var G__50687 = name;
switch (G__50687) {
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
var vec__50689 = tag;
var html_tag = cljs.core.nth.call(null,vec__50689,(0),null);
var style = cljs.core.nth.call(null,vec__50689,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_50692 = devtools.formatters.templating._STAR_current_render_path_STAR_;
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
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_50692;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_50693 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_50694 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_50694;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_50693;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("result of markup rendering must be a template,\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("resolved to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_str.call(null,value)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("initial value: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_str.call(null,initial_value))].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("false")].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__50695 = initial_value;
var G__50696 = value.call(null);
initial_value = G__50695;
value = G__50696;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__50697 = initial_value;
var G__50698 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__50697;
value = G__50698;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__50699 = initial_value;
var G__50700 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__50699;
value = G__50700;
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

//# sourceMappingURL=templating.js.map?rel=1503550047859