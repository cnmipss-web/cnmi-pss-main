// Compiled by ClojureScript 1.9.671 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.11";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__48740 = arguments.length;
switch (G__48740) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__28184__auto__ = [];
var len__28177__auto___48743 = arguments.length;
var i__28178__auto___48744 = (0);
while(true){
if((i__28178__auto___48744 < len__28177__auto___48743)){
args__28184__auto__.push((arguments[i__28178__auto___48744]));

var G__48745 = (i__28178__auto___48744 + (1));
i__28178__auto___48744 = G__48745;
continue;
} else {
}
break;
}

var argseq__28185__auto__ = ((((0) < args__28184__auto__.length))?(new cljs.core.IndexedSeq(args__28184__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__28185__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq48742){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48742));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__28184__auto__ = [];
var len__28177__auto___48747 = arguments.length;
var i__28178__auto___48748 = (0);
while(true){
if((i__28178__auto___48748 < len__28177__auto___48747)){
args__28184__auto__.push((arguments[i__28178__auto___48748]));

var G__48749 = (i__28178__auto___48748 + (1));
i__28178__auto___48748 = G__48749;
continue;
} else {
}
break;
}

var argseq__28185__auto__ = ((((0) < args__28184__auto__.length))?(new cljs.core.IndexedSeq(args__28184__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__28185__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq48746){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48746));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)")].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel autoloading "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method. 
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 *   
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__48750){
var map__48751 = p__48750;
var map__48751__$1 = ((((!((map__48751 == null)))?((((map__48751.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48751.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48751):map__48751);
var message = cljs.core.get.call(null,map__48751__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__48751__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" : "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__27052__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__27052__auto__)){
return or__27052__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__27040__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__27040__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__27040__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__33321__auto___48830 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33321__auto___48830,ch){
return (function (){
var f__33322__auto__ = (function (){var switch__33233__auto__ = ((function (c__33321__auto___48830,ch){
return (function (state_48802){
var state_val_48803 = (state_48802[(1)]);
if((state_val_48803 === (7))){
var inst_48798 = (state_48802[(2)]);
var state_48802__$1 = state_48802;
var statearr_48804_48831 = state_48802__$1;
(statearr_48804_48831[(2)] = inst_48798);

(statearr_48804_48831[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48803 === (1))){
var state_48802__$1 = state_48802;
var statearr_48805_48832 = state_48802__$1;
(statearr_48805_48832[(2)] = null);

(statearr_48805_48832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48803 === (4))){
var inst_48755 = (state_48802[(7)]);
var inst_48755__$1 = (state_48802[(2)]);
var state_48802__$1 = (function (){var statearr_48806 = state_48802;
(statearr_48806[(7)] = inst_48755__$1);

return statearr_48806;
})();
if(cljs.core.truth_(inst_48755__$1)){
var statearr_48807_48833 = state_48802__$1;
(statearr_48807_48833[(1)] = (5));

} else {
var statearr_48808_48834 = state_48802__$1;
(statearr_48808_48834[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48803 === (15))){
var inst_48762 = (state_48802[(8)]);
var inst_48777 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_48762);
var inst_48778 = cljs.core.first.call(null,inst_48777);
var inst_48779 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_48778);
var inst_48780 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not loading code with warnings - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_48779)].join('');
var inst_48781 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_48780);
var state_48802__$1 = state_48802;
var statearr_48809_48835 = state_48802__$1;
(statearr_48809_48835[(2)] = inst_48781);

(statearr_48809_48835[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48803 === (13))){
var inst_48786 = (state_48802[(2)]);
var state_48802__$1 = state_48802;
var statearr_48810_48836 = state_48802__$1;
(statearr_48810_48836[(2)] = inst_48786);

(statearr_48810_48836[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48803 === (6))){
var state_48802__$1 = state_48802;
var statearr_48811_48837 = state_48802__$1;
(statearr_48811_48837[(2)] = null);

(statearr_48811_48837[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48803 === (17))){
var inst_48784 = (state_48802[(2)]);
var state_48802__$1 = state_48802;
var statearr_48812_48838 = state_48802__$1;
(statearr_48812_48838[(2)] = inst_48784);

(statearr_48812_48838[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48803 === (3))){
var inst_48800 = (state_48802[(2)]);
var state_48802__$1 = state_48802;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48802__$1,inst_48800);
} else {
if((state_val_48803 === (12))){
var inst_48761 = (state_48802[(9)]);
var inst_48775 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_48761,opts);
var state_48802__$1 = state_48802;
if(cljs.core.truth_(inst_48775)){
var statearr_48813_48839 = state_48802__$1;
(statearr_48813_48839[(1)] = (15));

} else {
var statearr_48814_48840 = state_48802__$1;
(statearr_48814_48840[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48803 === (2))){
var state_48802__$1 = state_48802;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48802__$1,(4),ch);
} else {
if((state_val_48803 === (11))){
var inst_48762 = (state_48802[(8)]);
var inst_48767 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48768 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_48762);
var inst_48769 = cljs.core.async.timeout.call(null,(1000));
var inst_48770 = [inst_48768,inst_48769];
var inst_48771 = (new cljs.core.PersistentVector(null,2,(5),inst_48767,inst_48770,null));
var state_48802__$1 = state_48802;
return cljs.core.async.ioc_alts_BANG_.call(null,state_48802__$1,(14),inst_48771);
} else {
if((state_val_48803 === (9))){
var inst_48762 = (state_48802[(8)]);
var inst_48788 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_48789 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_48762);
var inst_48790 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_48789);
var inst_48791 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Not loading: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_48790)].join('');
var inst_48792 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_48791);
var state_48802__$1 = (function (){var statearr_48815 = state_48802;
(statearr_48815[(10)] = inst_48788);

return statearr_48815;
})();
var statearr_48816_48841 = state_48802__$1;
(statearr_48816_48841[(2)] = inst_48792);

(statearr_48816_48841[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48803 === (5))){
var inst_48755 = (state_48802[(7)]);
var inst_48757 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_48758 = (new cljs.core.PersistentArrayMap(null,2,inst_48757,null));
var inst_48759 = (new cljs.core.PersistentHashSet(null,inst_48758,null));
var inst_48760 = figwheel.client.focus_msgs.call(null,inst_48759,inst_48755);
var inst_48761 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_48760);
var inst_48762 = cljs.core.first.call(null,inst_48760);
var inst_48763 = figwheel.client.autoload_QMARK_.call(null);
var state_48802__$1 = (function (){var statearr_48817 = state_48802;
(statearr_48817[(9)] = inst_48761);

(statearr_48817[(8)] = inst_48762);

return statearr_48817;
})();
if(cljs.core.truth_(inst_48763)){
var statearr_48818_48842 = state_48802__$1;
(statearr_48818_48842[(1)] = (8));

} else {
var statearr_48819_48843 = state_48802__$1;
(statearr_48819_48843[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48803 === (14))){
var inst_48773 = (state_48802[(2)]);
var state_48802__$1 = state_48802;
var statearr_48820_48844 = state_48802__$1;
(statearr_48820_48844[(2)] = inst_48773);

(statearr_48820_48844[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48803 === (16))){
var state_48802__$1 = state_48802;
var statearr_48821_48845 = state_48802__$1;
(statearr_48821_48845[(2)] = null);

(statearr_48821_48845[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48803 === (10))){
var inst_48794 = (state_48802[(2)]);
var state_48802__$1 = (function (){var statearr_48822 = state_48802;
(statearr_48822[(11)] = inst_48794);

return statearr_48822;
})();
var statearr_48823_48846 = state_48802__$1;
(statearr_48823_48846[(2)] = null);

(statearr_48823_48846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48803 === (8))){
var inst_48761 = (state_48802[(9)]);
var inst_48765 = figwheel.client.reload_file_state_QMARK_.call(null,inst_48761,opts);
var state_48802__$1 = state_48802;
if(cljs.core.truth_(inst_48765)){
var statearr_48824_48847 = state_48802__$1;
(statearr_48824_48847[(1)] = (11));

} else {
var statearr_48825_48848 = state_48802__$1;
(statearr_48825_48848[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33321__auto___48830,ch))
;
return ((function (switch__33233__auto__,c__33321__auto___48830,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__33234__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__33234__auto____0 = (function (){
var statearr_48826 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48826[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__33234__auto__);

(statearr_48826[(1)] = (1));

return statearr_48826;
});
var figwheel$client$file_reloader_plugin_$_state_machine__33234__auto____1 = (function (state_48802){
while(true){
var ret_value__33235__auto__ = (function (){try{while(true){
var result__33236__auto__ = switch__33233__auto__.call(null,state_48802);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33236__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33236__auto__;
}
break;
}
}catch (e48827){if((e48827 instanceof Object)){
var ex__33237__auto__ = e48827;
var statearr_48828_48849 = state_48802;
(statearr_48828_48849[(5)] = ex__33237__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48802);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48827;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48850 = state_48802;
state_48802 = G__48850;
continue;
} else {
return ret_value__33235__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__33234__auto__ = function(state_48802){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__33234__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__33234__auto____1.call(this,state_48802);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__33234__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__33234__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__33234__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__33234__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__33234__auto__;
})()
;})(switch__33233__auto__,c__33321__auto___48830,ch))
})();
var state__33323__auto__ = (function (){var statearr_48829 = f__33322__auto__.call(null);
(statearr_48829[(6)] = c__33321__auto___48830);

return statearr_48829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33323__auto__);
});})(c__33321__auto___48830,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__48851_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__48851_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_48853 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_48853){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e48852){if((e48852 instanceof Error)){
var e = e48852;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_48853], null));
} else {
var e = e48852;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_48853))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__48854){
var map__48855 = p__48854;
var map__48855__$1 = ((((!((map__48855 == null)))?((((map__48855.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48855.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48855):map__48855);
var opts = map__48855__$1;
var build_id = cljs.core.get.call(null,map__48855__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__48855,map__48855__$1,opts,build_id){
return (function (p__48857){
var vec__48858 = p__48857;
var seq__48859 = cljs.core.seq.call(null,vec__48858);
var first__48860 = cljs.core.first.call(null,seq__48859);
var seq__48859__$1 = cljs.core.next.call(null,seq__48859);
var map__48861 = first__48860;
var map__48861__$1 = ((((!((map__48861 == null)))?((((map__48861.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48861.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48861):map__48861);
var msg = map__48861__$1;
var msg_name = cljs.core.get.call(null,map__48861__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__48859__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__48858,seq__48859,first__48860,seq__48859__$1,map__48861,map__48861__$1,msg,msg_name,_,map__48855,map__48855__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__48858,seq__48859,first__48860,seq__48859__$1,map__48861,map__48861__$1,msg,msg_name,_,map__48855,map__48855__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__48855,map__48855__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__48863){
var vec__48864 = p__48863;
var seq__48865 = cljs.core.seq.call(null,vec__48864);
var first__48866 = cljs.core.first.call(null,seq__48865);
var seq__48865__$1 = cljs.core.next.call(null,seq__48865);
var map__48867 = first__48866;
var map__48867__$1 = ((((!((map__48867 == null)))?((((map__48867.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48867.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48867):map__48867);
var msg = map__48867__$1;
var msg_name = cljs.core.get.call(null,map__48867__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__48865__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__48869){
var map__48870 = p__48869;
var map__48870__$1 = ((((!((map__48870 == null)))?((((map__48870.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48870.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48870):map__48870);
var on_compile_warning = cljs.core.get.call(null,map__48870__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__48870__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__48870,map__48870__$1,on_compile_warning,on_compile_fail){
return (function (p__48872){
var vec__48873 = p__48872;
var seq__48874 = cljs.core.seq.call(null,vec__48873);
var first__48875 = cljs.core.first.call(null,seq__48874);
var seq__48874__$1 = cljs.core.next.call(null,seq__48874);
var map__48876 = first__48875;
var map__48876__$1 = ((((!((map__48876 == null)))?((((map__48876.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48876.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48876):map__48876);
var msg = map__48876__$1;
var msg_name = cljs.core.get.call(null,map__48876__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__48874__$1;
var pred__48878 = cljs.core._EQ_;
var expr__48879 = msg_name;
if(cljs.core.truth_(pred__48878.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__48879))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__48878.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__48879))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__48870,map__48870__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__33321__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33321__auto__,msg_hist,msg_names,msg){
return (function (){
var f__33322__auto__ = (function (){var switch__33233__auto__ = ((function (c__33321__auto__,msg_hist,msg_names,msg){
return (function (state_48968){
var state_val_48969 = (state_48968[(1)]);
if((state_val_48969 === (7))){
var inst_48888 = (state_48968[(2)]);
var state_48968__$1 = state_48968;
if(cljs.core.truth_(inst_48888)){
var statearr_48970_49017 = state_48968__$1;
(statearr_48970_49017[(1)] = (8));

} else {
var statearr_48971_49018 = state_48968__$1;
(statearr_48971_49018[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48969 === (20))){
var inst_48962 = (state_48968[(2)]);
var state_48968__$1 = state_48968;
var statearr_48972_49019 = state_48968__$1;
(statearr_48972_49019[(2)] = inst_48962);

(statearr_48972_49019[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48969 === (27))){
var inst_48958 = (state_48968[(2)]);
var state_48968__$1 = state_48968;
var statearr_48973_49020 = state_48968__$1;
(statearr_48973_49020[(2)] = inst_48958);

(statearr_48973_49020[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48969 === (1))){
var inst_48881 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_48968__$1 = state_48968;
if(cljs.core.truth_(inst_48881)){
var statearr_48974_49021 = state_48968__$1;
(statearr_48974_49021[(1)] = (2));

} else {
var statearr_48975_49022 = state_48968__$1;
(statearr_48975_49022[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48969 === (24))){
var inst_48960 = (state_48968[(2)]);
var state_48968__$1 = state_48968;
var statearr_48976_49023 = state_48968__$1;
(statearr_48976_49023[(2)] = inst_48960);

(statearr_48976_49023[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48969 === (4))){
var inst_48966 = (state_48968[(2)]);
var state_48968__$1 = state_48968;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48968__$1,inst_48966);
} else {
if((state_val_48969 === (15))){
var inst_48964 = (state_48968[(2)]);
var state_48968__$1 = state_48968;
var statearr_48977_49024 = state_48968__$1;
(statearr_48977_49024[(2)] = inst_48964);

(statearr_48977_49024[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48969 === (21))){
var inst_48917 = (state_48968[(2)]);
var inst_48918 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48919 = figwheel.client.auto_jump_to_error.call(null,opts,inst_48918);
var state_48968__$1 = (function (){var statearr_48978 = state_48968;
(statearr_48978[(7)] = inst_48917);

return statearr_48978;
})();
var statearr_48979_49025 = state_48968__$1;
(statearr_48979_49025[(2)] = inst_48919);

(statearr_48979_49025[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48969 === (31))){
var inst_48947 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_48968__$1 = state_48968;
if(cljs.core.truth_(inst_48947)){
var statearr_48980_49026 = state_48968__$1;
(statearr_48980_49026[(1)] = (34));

} else {
var statearr_48981_49027 = state_48968__$1;
(statearr_48981_49027[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48969 === (32))){
var inst_48956 = (state_48968[(2)]);
var state_48968__$1 = state_48968;
var statearr_48982_49028 = state_48968__$1;
(statearr_48982_49028[(2)] = inst_48956);

(statearr_48982_49028[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48969 === (33))){
var inst_48943 = (state_48968[(2)]);
var inst_48944 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48945 = figwheel.client.auto_jump_to_error.call(null,opts,inst_48944);
var state_48968__$1 = (function (){var statearr_48983 = state_48968;
(statearr_48983[(8)] = inst_48943);

return statearr_48983;
})();
var statearr_48984_49029 = state_48968__$1;
(statearr_48984_49029[(2)] = inst_48945);

(statearr_48984_49029[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48969 === (13))){
var inst_48902 = figwheel.client.heads_up.clear.call(null);
var state_48968__$1 = state_48968;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48968__$1,(16),inst_48902);
} else {
if((state_val_48969 === (22))){
var inst_48923 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48924 = figwheel.client.heads_up.append_warning_message.call(null,inst_48923);
var state_48968__$1 = state_48968;
var statearr_48985_49030 = state_48968__$1;
(statearr_48985_49030[(2)] = inst_48924);

(statearr_48985_49030[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48969 === (36))){
var inst_48954 = (state_48968[(2)]);
var state_48968__$1 = state_48968;
var statearr_48986_49031 = state_48968__$1;
(statearr_48986_49031[(2)] = inst_48954);

(statearr_48986_49031[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48969 === (29))){
var inst_48934 = (state_48968[(2)]);
var inst_48935 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48936 = figwheel.client.auto_jump_to_error.call(null,opts,inst_48935);
var state_48968__$1 = (function (){var statearr_48987 = state_48968;
(statearr_48987[(9)] = inst_48934);

return statearr_48987;
})();
var statearr_48988_49032 = state_48968__$1;
(statearr_48988_49032[(2)] = inst_48936);

(statearr_48988_49032[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48969 === (6))){
var inst_48883 = (state_48968[(10)]);
var state_48968__$1 = state_48968;
var statearr_48989_49033 = state_48968__$1;
(statearr_48989_49033[(2)] = inst_48883);

(statearr_48989_49033[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48969 === (28))){
var inst_48930 = (state_48968[(2)]);
var inst_48931 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48932 = figwheel.client.heads_up.display_warning.call(null,inst_48931);
var state_48968__$1 = (function (){var statearr_48990 = state_48968;
(statearr_48990[(11)] = inst_48930);

return statearr_48990;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48968__$1,(29),inst_48932);
} else {
if((state_val_48969 === (25))){
var inst_48928 = figwheel.client.heads_up.clear.call(null);
var state_48968__$1 = state_48968;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48968__$1,(28),inst_48928);
} else {
if((state_val_48969 === (34))){
var inst_48949 = figwheel.client.heads_up.flash_loaded.call(null);
var state_48968__$1 = state_48968;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48968__$1,(37),inst_48949);
} else {
if((state_val_48969 === (17))){
var inst_48908 = (state_48968[(2)]);
var inst_48909 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48910 = figwheel.client.auto_jump_to_error.call(null,opts,inst_48909);
var state_48968__$1 = (function (){var statearr_48991 = state_48968;
(statearr_48991[(12)] = inst_48908);

return statearr_48991;
})();
var statearr_48992_49034 = state_48968__$1;
(statearr_48992_49034[(2)] = inst_48910);

(statearr_48992_49034[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48969 === (3))){
var inst_48900 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_48968__$1 = state_48968;
if(cljs.core.truth_(inst_48900)){
var statearr_48993_49035 = state_48968__$1;
(statearr_48993_49035[(1)] = (13));

} else {
var statearr_48994_49036 = state_48968__$1;
(statearr_48994_49036[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48969 === (12))){
var inst_48896 = (state_48968[(2)]);
var state_48968__$1 = state_48968;
var statearr_48995_49037 = state_48968__$1;
(statearr_48995_49037[(2)] = inst_48896);

(statearr_48995_49037[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48969 === (2))){
var inst_48883 = (state_48968[(10)]);
var inst_48883__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_48968__$1 = (function (){var statearr_48996 = state_48968;
(statearr_48996[(10)] = inst_48883__$1);

return statearr_48996;
})();
if(cljs.core.truth_(inst_48883__$1)){
var statearr_48997_49038 = state_48968__$1;
(statearr_48997_49038[(1)] = (5));

} else {
var statearr_48998_49039 = state_48968__$1;
(statearr_48998_49039[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48969 === (23))){
var inst_48926 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_48968__$1 = state_48968;
if(cljs.core.truth_(inst_48926)){
var statearr_48999_49040 = state_48968__$1;
(statearr_48999_49040[(1)] = (25));

} else {
var statearr_49000_49041 = state_48968__$1;
(statearr_49000_49041[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48969 === (35))){
var state_48968__$1 = state_48968;
var statearr_49001_49042 = state_48968__$1;
(statearr_49001_49042[(2)] = null);

(statearr_49001_49042[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48969 === (19))){
var inst_48921 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_48968__$1 = state_48968;
if(cljs.core.truth_(inst_48921)){
var statearr_49002_49043 = state_48968__$1;
(statearr_49002_49043[(1)] = (22));

} else {
var statearr_49003_49044 = state_48968__$1;
(statearr_49003_49044[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48969 === (11))){
var inst_48892 = (state_48968[(2)]);
var state_48968__$1 = state_48968;
var statearr_49004_49045 = state_48968__$1;
(statearr_49004_49045[(2)] = inst_48892);

(statearr_49004_49045[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48969 === (9))){
var inst_48894 = figwheel.client.heads_up.clear.call(null);
var state_48968__$1 = state_48968;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48968__$1,(12),inst_48894);
} else {
if((state_val_48969 === (5))){
var inst_48885 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_48968__$1 = state_48968;
var statearr_49005_49046 = state_48968__$1;
(statearr_49005_49046[(2)] = inst_48885);

(statearr_49005_49046[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48969 === (14))){
var inst_48912 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_48968__$1 = state_48968;
if(cljs.core.truth_(inst_48912)){
var statearr_49006_49047 = state_48968__$1;
(statearr_49006_49047[(1)] = (18));

} else {
var statearr_49007_49048 = state_48968__$1;
(statearr_49007_49048[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48969 === (26))){
var inst_48938 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_48968__$1 = state_48968;
if(cljs.core.truth_(inst_48938)){
var statearr_49008_49049 = state_48968__$1;
(statearr_49008_49049[(1)] = (30));

} else {
var statearr_49009_49050 = state_48968__$1;
(statearr_49009_49050[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48969 === (16))){
var inst_48904 = (state_48968[(2)]);
var inst_48905 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48906 = figwheel.client.heads_up.display_exception.call(null,inst_48905);
var state_48968__$1 = (function (){var statearr_49010 = state_48968;
(statearr_49010[(13)] = inst_48904);

return statearr_49010;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48968__$1,(17),inst_48906);
} else {
if((state_val_48969 === (30))){
var inst_48940 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48941 = figwheel.client.heads_up.display_warning.call(null,inst_48940);
var state_48968__$1 = state_48968;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48968__$1,(33),inst_48941);
} else {
if((state_val_48969 === (10))){
var inst_48898 = (state_48968[(2)]);
var state_48968__$1 = state_48968;
var statearr_49011_49051 = state_48968__$1;
(statearr_49011_49051[(2)] = inst_48898);

(statearr_49011_49051[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48969 === (18))){
var inst_48914 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48915 = figwheel.client.heads_up.display_exception.call(null,inst_48914);
var state_48968__$1 = state_48968;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48968__$1,(21),inst_48915);
} else {
if((state_val_48969 === (37))){
var inst_48951 = (state_48968[(2)]);
var state_48968__$1 = state_48968;
var statearr_49012_49052 = state_48968__$1;
(statearr_49012_49052[(2)] = inst_48951);

(statearr_49012_49052[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48969 === (8))){
var inst_48890 = figwheel.client.heads_up.flash_loaded.call(null);
var state_48968__$1 = state_48968;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48968__$1,(11),inst_48890);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33321__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__33233__auto__,c__33321__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33234__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33234__auto____0 = (function (){
var statearr_49013 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49013[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33234__auto__);

(statearr_49013[(1)] = (1));

return statearr_49013;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33234__auto____1 = (function (state_48968){
while(true){
var ret_value__33235__auto__ = (function (){try{while(true){
var result__33236__auto__ = switch__33233__auto__.call(null,state_48968);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33236__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33236__auto__;
}
break;
}
}catch (e49014){if((e49014 instanceof Object)){
var ex__33237__auto__ = e49014;
var statearr_49015_49053 = state_48968;
(statearr_49015_49053[(5)] = ex__33237__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48968);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49014;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49054 = state_48968;
state_48968 = G__49054;
continue;
} else {
return ret_value__33235__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33234__auto__ = function(state_48968){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33234__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33234__auto____1.call(this,state_48968);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33234__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33234__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33234__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33234__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33234__auto__;
})()
;})(switch__33233__auto__,c__33321__auto__,msg_hist,msg_names,msg))
})();
var state__33323__auto__ = (function (){var statearr_49016 = f__33322__auto__.call(null);
(statearr_49016[(6)] = c__33321__auto__);

return statearr_49016;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33323__auto__);
});})(c__33321__auto__,msg_hist,msg_names,msg))
);

return c__33321__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__33321__auto___49083 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33321__auto___49083,ch){
return (function (){
var f__33322__auto__ = (function (){var switch__33233__auto__ = ((function (c__33321__auto___49083,ch){
return (function (state_49069){
var state_val_49070 = (state_49069[(1)]);
if((state_val_49070 === (1))){
var state_49069__$1 = state_49069;
var statearr_49071_49084 = state_49069__$1;
(statearr_49071_49084[(2)] = null);

(statearr_49071_49084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49070 === (2))){
var state_49069__$1 = state_49069;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49069__$1,(4),ch);
} else {
if((state_val_49070 === (3))){
var inst_49067 = (state_49069[(2)]);
var state_49069__$1 = state_49069;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49069__$1,inst_49067);
} else {
if((state_val_49070 === (4))){
var inst_49057 = (state_49069[(7)]);
var inst_49057__$1 = (state_49069[(2)]);
var state_49069__$1 = (function (){var statearr_49072 = state_49069;
(statearr_49072[(7)] = inst_49057__$1);

return statearr_49072;
})();
if(cljs.core.truth_(inst_49057__$1)){
var statearr_49073_49085 = state_49069__$1;
(statearr_49073_49085[(1)] = (5));

} else {
var statearr_49074_49086 = state_49069__$1;
(statearr_49074_49086[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49070 === (5))){
var inst_49057 = (state_49069[(7)]);
var inst_49059 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_49057);
var state_49069__$1 = state_49069;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49069__$1,(8),inst_49059);
} else {
if((state_val_49070 === (6))){
var state_49069__$1 = state_49069;
var statearr_49075_49087 = state_49069__$1;
(statearr_49075_49087[(2)] = null);

(statearr_49075_49087[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49070 === (7))){
var inst_49065 = (state_49069[(2)]);
var state_49069__$1 = state_49069;
var statearr_49076_49088 = state_49069__$1;
(statearr_49076_49088[(2)] = inst_49065);

(statearr_49076_49088[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49070 === (8))){
var inst_49061 = (state_49069[(2)]);
var state_49069__$1 = (function (){var statearr_49077 = state_49069;
(statearr_49077[(8)] = inst_49061);

return statearr_49077;
})();
var statearr_49078_49089 = state_49069__$1;
(statearr_49078_49089[(2)] = null);

(statearr_49078_49089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__33321__auto___49083,ch))
;
return ((function (switch__33233__auto__,c__33321__auto___49083,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__33234__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__33234__auto____0 = (function (){
var statearr_49079 = [null,null,null,null,null,null,null,null,null];
(statearr_49079[(0)] = figwheel$client$heads_up_plugin_$_state_machine__33234__auto__);

(statearr_49079[(1)] = (1));

return statearr_49079;
});
var figwheel$client$heads_up_plugin_$_state_machine__33234__auto____1 = (function (state_49069){
while(true){
var ret_value__33235__auto__ = (function (){try{while(true){
var result__33236__auto__ = switch__33233__auto__.call(null,state_49069);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33236__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33236__auto__;
}
break;
}
}catch (e49080){if((e49080 instanceof Object)){
var ex__33237__auto__ = e49080;
var statearr_49081_49090 = state_49069;
(statearr_49081_49090[(5)] = ex__33237__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49069);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49080;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49091 = state_49069;
state_49069 = G__49091;
continue;
} else {
return ret_value__33235__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__33234__auto__ = function(state_49069){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__33234__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__33234__auto____1.call(this,state_49069);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__33234__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__33234__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__33234__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__33234__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__33234__auto__;
})()
;})(switch__33233__auto__,c__33321__auto___49083,ch))
})();
var state__33323__auto__ = (function (){var statearr_49082 = f__33322__auto__.call(null);
(statearr_49082[(6)] = c__33321__auto___49083);

return statearr_49082;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33323__auto__);
});})(c__33321__auto___49083,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__33321__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33321__auto__){
return (function (){
var f__33322__auto__ = (function (){var switch__33233__auto__ = ((function (c__33321__auto__){
return (function (state_49097){
var state_val_49098 = (state_49097[(1)]);
if((state_val_49098 === (1))){
var inst_49092 = cljs.core.async.timeout.call(null,(3000));
var state_49097__$1 = state_49097;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49097__$1,(2),inst_49092);
} else {
if((state_val_49098 === (2))){
var inst_49094 = (state_49097[(2)]);
var inst_49095 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_49097__$1 = (function (){var statearr_49099 = state_49097;
(statearr_49099[(7)] = inst_49094);

return statearr_49099;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49097__$1,inst_49095);
} else {
return null;
}
}
});})(c__33321__auto__))
;
return ((function (switch__33233__auto__,c__33321__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__33234__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__33234__auto____0 = (function (){
var statearr_49100 = [null,null,null,null,null,null,null,null];
(statearr_49100[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__33234__auto__);

(statearr_49100[(1)] = (1));

return statearr_49100;
});
var figwheel$client$enforce_project_plugin_$_state_machine__33234__auto____1 = (function (state_49097){
while(true){
var ret_value__33235__auto__ = (function (){try{while(true){
var result__33236__auto__ = switch__33233__auto__.call(null,state_49097);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33236__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33236__auto__;
}
break;
}
}catch (e49101){if((e49101 instanceof Object)){
var ex__33237__auto__ = e49101;
var statearr_49102_49104 = state_49097;
(statearr_49102_49104[(5)] = ex__33237__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49097);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49101;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49105 = state_49097;
state_49097 = G__49105;
continue;
} else {
return ret_value__33235__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__33234__auto__ = function(state_49097){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__33234__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__33234__auto____1.call(this,state_49097);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__33234__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__33234__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__33234__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__33234__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__33234__auto__;
})()
;})(switch__33233__auto__,c__33321__auto__))
})();
var state__33323__auto__ = (function (){var statearr_49103 = f__33322__auto__.call(null);
(statearr_49103[(6)] = c__33321__auto__);

return statearr_49103;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33323__auto__);
});})(c__33321__auto__))
);

return c__33321__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__33321__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33321__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__33322__auto__ = (function (){var switch__33233__auto__ = ((function (c__33321__auto__,figwheel_version,temp__4657__auto__){
return (function (state_49112){
var state_val_49113 = (state_49112[(1)]);
if((state_val_49113 === (1))){
var inst_49106 = cljs.core.async.timeout.call(null,(2000));
var state_49112__$1 = state_49112;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49112__$1,(2),inst_49106);
} else {
if((state_val_49113 === (2))){
var inst_49108 = (state_49112[(2)]);
var inst_49109 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Client Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong> is not equal to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Sidecar Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".  Shutting down Websocket Connection!"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<h4>To fix try:</h4>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_49110 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_49109);
var state_49112__$1 = (function (){var statearr_49114 = state_49112;
(statearr_49114[(7)] = inst_49108);

return statearr_49114;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49112__$1,inst_49110);
} else {
return null;
}
}
});})(c__33321__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__33233__auto__,c__33321__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33234__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33234__auto____0 = (function (){
var statearr_49115 = [null,null,null,null,null,null,null,null];
(statearr_49115[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33234__auto__);

(statearr_49115[(1)] = (1));

return statearr_49115;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33234__auto____1 = (function (state_49112){
while(true){
var ret_value__33235__auto__ = (function (){try{while(true){
var result__33236__auto__ = switch__33233__auto__.call(null,state_49112);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33236__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33236__auto__;
}
break;
}
}catch (e49116){if((e49116 instanceof Object)){
var ex__33237__auto__ = e49116;
var statearr_49117_49119 = state_49112;
(statearr_49117_49119[(5)] = ex__33237__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49112);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49116;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49120 = state_49112;
state_49112 = G__49120;
continue;
} else {
return ret_value__33235__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33234__auto__ = function(state_49112){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33234__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33234__auto____1.call(this,state_49112);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33234__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33234__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33234__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33234__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33234__auto__;
})()
;})(switch__33233__auto__,c__33321__auto__,figwheel_version,temp__4657__auto__))
})();
var state__33323__auto__ = (function (){var statearr_49118 = f__33322__auto__.call(null);
(statearr_49118[(6)] = c__33321__auto__);

return statearr_49118;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33323__auto__);
});})(c__33321__auto__,figwheel_version,temp__4657__auto__))
);

return c__33321__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__49121){
var map__49122 = p__49121;
var map__49122__$1 = ((((!((map__49122 == null)))?((((map__49122.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49122.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49122):map__49122);
var file = cljs.core.get.call(null,map__49122__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__49122__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__49122__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__49124 = "";
var G__49124__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49124),cljs.core.str.cljs$core$IFn$_invoke$arity$1("file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__49124);
var G__49124__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49124__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__49124__$1);
if(cljs.core.truth_((function (){var and__27040__auto__ = line;
if(cljs.core.truth_(and__27040__auto__)){
return column;
} else {
return and__27040__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49124__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__49124__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__49125){
var map__49126 = p__49125;
var map__49126__$1 = ((((!((map__49126 == null)))?((((map__49126.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49126.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49126):map__49126);
var ed = map__49126__$1;
var formatted_exception = cljs.core.get.call(null,map__49126__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__49126__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__49126__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__49128_49132 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__49129_49133 = null;
var count__49130_49134 = (0);
var i__49131_49135 = (0);
while(true){
if((i__49131_49135 < count__49130_49134)){
var msg_49136 = cljs.core._nth.call(null,chunk__49129_49133,i__49131_49135);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_49136);

var G__49137 = seq__49128_49132;
var G__49138 = chunk__49129_49133;
var G__49139 = count__49130_49134;
var G__49140 = (i__49131_49135 + (1));
seq__49128_49132 = G__49137;
chunk__49129_49133 = G__49138;
count__49130_49134 = G__49139;
i__49131_49135 = G__49140;
continue;
} else {
var temp__4657__auto___49141 = cljs.core.seq.call(null,seq__49128_49132);
if(temp__4657__auto___49141){
var seq__49128_49142__$1 = temp__4657__auto___49141;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49128_49142__$1)){
var c__27872__auto___49143 = cljs.core.chunk_first.call(null,seq__49128_49142__$1);
var G__49144 = cljs.core.chunk_rest.call(null,seq__49128_49142__$1);
var G__49145 = c__27872__auto___49143;
var G__49146 = cljs.core.count.call(null,c__27872__auto___49143);
var G__49147 = (0);
seq__49128_49132 = G__49144;
chunk__49129_49133 = G__49145;
count__49130_49134 = G__49146;
i__49131_49135 = G__49147;
continue;
} else {
var msg_49148 = cljs.core.first.call(null,seq__49128_49142__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_49148);

var G__49149 = cljs.core.next.call(null,seq__49128_49142__$1);
var G__49150 = null;
var G__49151 = (0);
var G__49152 = (0);
seq__49128_49132 = G__49149;
chunk__49129_49133 = G__49150;
count__49130_49134 = G__49151;
i__49131_49135 = G__49152;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Error on "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__49153){
var map__49154 = p__49153;
var map__49154__$1 = ((((!((map__49154 == null)))?((((map__49154.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49154.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49154):map__49154);
var w = map__49154__$1;
var message = cljs.core.get.call(null,map__49154__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Compile Warning - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"../../../dist/js/compiled/out/figwheel/client.cljs",33,1,357,357,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"../../../dist/js/compiled/out/figwheel/client.cljs",30,1,349,349,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("ws://"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__27040__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__27040__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__27040__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__49156 = cljs.core.seq.call(null,plugins);
var chunk__49157 = null;
var count__49158 = (0);
var i__49159 = (0);
while(true){
if((i__49159 < count__49158)){
var vec__49160 = cljs.core._nth.call(null,chunk__49157,i__49159);
var k = cljs.core.nth.call(null,vec__49160,(0),null);
var plugin = cljs.core.nth.call(null,vec__49160,(1),null);
if(cljs.core.truth_(plugin)){
var pl_49166 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__49156,chunk__49157,count__49158,i__49159,pl_49166,vec__49160,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_49166.call(null,msg_hist);
});})(seq__49156,chunk__49157,count__49158,i__49159,pl_49166,vec__49160,k,plugin))
);
} else {
}

var G__49167 = seq__49156;
var G__49168 = chunk__49157;
var G__49169 = count__49158;
var G__49170 = (i__49159 + (1));
seq__49156 = G__49167;
chunk__49157 = G__49168;
count__49158 = G__49169;
i__49159 = G__49170;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__49156);
if(temp__4657__auto__){
var seq__49156__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49156__$1)){
var c__27872__auto__ = cljs.core.chunk_first.call(null,seq__49156__$1);
var G__49171 = cljs.core.chunk_rest.call(null,seq__49156__$1);
var G__49172 = c__27872__auto__;
var G__49173 = cljs.core.count.call(null,c__27872__auto__);
var G__49174 = (0);
seq__49156 = G__49171;
chunk__49157 = G__49172;
count__49158 = G__49173;
i__49159 = G__49174;
continue;
} else {
var vec__49163 = cljs.core.first.call(null,seq__49156__$1);
var k = cljs.core.nth.call(null,vec__49163,(0),null);
var plugin = cljs.core.nth.call(null,vec__49163,(1),null);
if(cljs.core.truth_(plugin)){
var pl_49175 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__49156,chunk__49157,count__49158,i__49159,pl_49175,vec__49163,k,plugin,seq__49156__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_49175.call(null,msg_hist);
});})(seq__49156,chunk__49157,count__49158,i__49159,pl_49175,vec__49163,k,plugin,seq__49156__$1,temp__4657__auto__))
);
} else {
}

var G__49176 = cljs.core.next.call(null,seq__49156__$1);
var G__49177 = null;
var G__49178 = (0);
var G__49179 = (0);
seq__49156 = G__49176;
chunk__49157 = G__49177;
count__49158 = G__49178;
i__49159 = G__49179;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__49181 = arguments.length;
switch (G__49181) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__49182_49187 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__49183_49188 = null;
var count__49184_49189 = (0);
var i__49185_49190 = (0);
while(true){
if((i__49185_49190 < count__49184_49189)){
var msg_49191 = cljs.core._nth.call(null,chunk__49183_49188,i__49185_49190);
figwheel.client.socket.handle_incoming_message.call(null,msg_49191);

var G__49192 = seq__49182_49187;
var G__49193 = chunk__49183_49188;
var G__49194 = count__49184_49189;
var G__49195 = (i__49185_49190 + (1));
seq__49182_49187 = G__49192;
chunk__49183_49188 = G__49193;
count__49184_49189 = G__49194;
i__49185_49190 = G__49195;
continue;
} else {
var temp__4657__auto___49196 = cljs.core.seq.call(null,seq__49182_49187);
if(temp__4657__auto___49196){
var seq__49182_49197__$1 = temp__4657__auto___49196;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49182_49197__$1)){
var c__27872__auto___49198 = cljs.core.chunk_first.call(null,seq__49182_49197__$1);
var G__49199 = cljs.core.chunk_rest.call(null,seq__49182_49197__$1);
var G__49200 = c__27872__auto___49198;
var G__49201 = cljs.core.count.call(null,c__27872__auto___49198);
var G__49202 = (0);
seq__49182_49187 = G__49199;
chunk__49183_49188 = G__49200;
count__49184_49189 = G__49201;
i__49185_49190 = G__49202;
continue;
} else {
var msg_49203 = cljs.core.first.call(null,seq__49182_49197__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_49203);

var G__49204 = cljs.core.next.call(null,seq__49182_49197__$1);
var G__49205 = null;
var G__49206 = (0);
var G__49207 = (0);
seq__49182_49187 = G__49204;
chunk__49183_49188 = G__49205;
count__49184_49189 = G__49206;
i__49185_49190 = G__49207;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__28184__auto__ = [];
var len__28177__auto___49212 = arguments.length;
var i__28178__auto___49213 = (0);
while(true){
if((i__28178__auto___49213 < len__28177__auto___49212)){
args__28184__auto__.push((arguments[i__28178__auto___49213]));

var G__49214 = (i__28178__auto___49213 + (1));
i__28178__auto___49213 = G__49214;
continue;
} else {
}
break;
}

var argseq__28185__auto__ = ((((0) < args__28184__auto__.length))?(new cljs.core.IndexedSeq(args__28184__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__28185__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__49209){
var map__49210 = p__49209;
var map__49210__$1 = ((((!((map__49210 == null)))?((((map__49210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49210.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49210):map__49210);
var opts = map__49210__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq49208){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49208));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e49215){if((e49215 instanceof Error)){
var e = e49215;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e49215;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__49216){
var map__49217 = p__49216;
var map__49217__$1 = ((((!((map__49217 == null)))?((((map__49217.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49217.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49217):map__49217);
var msg_name = cljs.core.get.call(null,map__49217__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1501568773483