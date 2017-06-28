// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.10";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args35661 = [];
var len__27054__auto___35664 = arguments.length;
var i__27055__auto___35665 = (0);
while(true){
if((i__27055__auto___35665 < len__27054__auto___35664)){
args35661.push((arguments[i__27055__auto___35665]));

var G__35666 = (i__27055__auto___35665 + (1));
i__27055__auto___35665 = G__35666;
continue;
} else {
}
break;
}

var G__35663 = args35661.length;
switch (G__35663) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35661.length)].join('')));

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
var args__27061__auto__ = [];
var len__27054__auto___35669 = arguments.length;
var i__27055__auto___35670 = (0);
while(true){
if((i__27055__auto___35670 < len__27054__auto___35669)){
args__27061__auto__.push((arguments[i__27055__auto___35670]));

var G__35671 = (i__27055__auto___35670 + (1));
i__27055__auto___35670 = G__35671;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq35668){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35668));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__27061__auto__ = [];
var len__27054__auto___35673 = arguments.length;
var i__27055__auto___35674 = (0);
while(true){
if((i__27055__auto___35674 < len__27054__auto___35673)){
args__27061__auto__.push((arguments[i__27055__auto___35674]));

var G__35675 = (i__27055__auto___35674 + (1));
i__27055__auto___35674 = G__35675;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq35672){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35672));
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
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)")].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

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
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__35676){
var map__35679 = p__35676;
var map__35679__$1 = ((((!((map__35679 == null)))?((((map__35679.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35679.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35679):map__35679);
var message = cljs.core.get.call(null,map__35679__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__35679__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__25979__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__25967__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__25967__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__25967__auto__;
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
var c__28200__auto___35841 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28200__auto___35841,ch){
return (function (){
var f__28201__auto__ = (function (){var switch__28088__auto__ = ((function (c__28200__auto___35841,ch){
return (function (state_35810){
var state_val_35811 = (state_35810[(1)]);
if((state_val_35811 === (7))){
var inst_35806 = (state_35810[(2)]);
var state_35810__$1 = state_35810;
var statearr_35812_35842 = state_35810__$1;
(statearr_35812_35842[(2)] = inst_35806);

(statearr_35812_35842[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35811 === (1))){
var state_35810__$1 = state_35810;
var statearr_35813_35843 = state_35810__$1;
(statearr_35813_35843[(2)] = null);

(statearr_35813_35843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35811 === (4))){
var inst_35763 = (state_35810[(7)]);
var inst_35763__$1 = (state_35810[(2)]);
var state_35810__$1 = (function (){var statearr_35814 = state_35810;
(statearr_35814[(7)] = inst_35763__$1);

return statearr_35814;
})();
if(cljs.core.truth_(inst_35763__$1)){
var statearr_35815_35844 = state_35810__$1;
(statearr_35815_35844[(1)] = (5));

} else {
var statearr_35816_35845 = state_35810__$1;
(statearr_35816_35845[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35811 === (15))){
var inst_35770 = (state_35810[(8)]);
var inst_35785 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_35770);
var inst_35786 = cljs.core.first.call(null,inst_35785);
var inst_35787 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_35786);
var inst_35788 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_35787)].join('');
var inst_35789 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_35788);
var state_35810__$1 = state_35810;
var statearr_35817_35846 = state_35810__$1;
(statearr_35817_35846[(2)] = inst_35789);

(statearr_35817_35846[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35811 === (13))){
var inst_35794 = (state_35810[(2)]);
var state_35810__$1 = state_35810;
var statearr_35818_35847 = state_35810__$1;
(statearr_35818_35847[(2)] = inst_35794);

(statearr_35818_35847[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35811 === (6))){
var state_35810__$1 = state_35810;
var statearr_35819_35848 = state_35810__$1;
(statearr_35819_35848[(2)] = null);

(statearr_35819_35848[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35811 === (17))){
var inst_35792 = (state_35810[(2)]);
var state_35810__$1 = state_35810;
var statearr_35820_35849 = state_35810__$1;
(statearr_35820_35849[(2)] = inst_35792);

(statearr_35820_35849[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35811 === (3))){
var inst_35808 = (state_35810[(2)]);
var state_35810__$1 = state_35810;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35810__$1,inst_35808);
} else {
if((state_val_35811 === (12))){
var inst_35769 = (state_35810[(9)]);
var inst_35783 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_35769,opts);
var state_35810__$1 = state_35810;
if(cljs.core.truth_(inst_35783)){
var statearr_35821_35850 = state_35810__$1;
(statearr_35821_35850[(1)] = (15));

} else {
var statearr_35822_35851 = state_35810__$1;
(statearr_35822_35851[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35811 === (2))){
var state_35810__$1 = state_35810;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35810__$1,(4),ch);
} else {
if((state_val_35811 === (11))){
var inst_35770 = (state_35810[(8)]);
var inst_35775 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35776 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_35770);
var inst_35777 = cljs.core.async.timeout.call(null,(1000));
var inst_35778 = [inst_35776,inst_35777];
var inst_35779 = (new cljs.core.PersistentVector(null,2,(5),inst_35775,inst_35778,null));
var state_35810__$1 = state_35810;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35810__$1,(14),inst_35779);
} else {
if((state_val_35811 === (9))){
var inst_35770 = (state_35810[(8)]);
var inst_35796 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_35797 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_35770);
var inst_35798 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35797);
var inst_35799 = [cljs.core.str("Not loading: "),cljs.core.str(inst_35798)].join('');
var inst_35800 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_35799);
var state_35810__$1 = (function (){var statearr_35823 = state_35810;
(statearr_35823[(10)] = inst_35796);

return statearr_35823;
})();
var statearr_35824_35852 = state_35810__$1;
(statearr_35824_35852[(2)] = inst_35800);

(statearr_35824_35852[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35811 === (5))){
var inst_35763 = (state_35810[(7)]);
var inst_35765 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_35766 = (new cljs.core.PersistentArrayMap(null,2,inst_35765,null));
var inst_35767 = (new cljs.core.PersistentHashSet(null,inst_35766,null));
var inst_35768 = figwheel.client.focus_msgs.call(null,inst_35767,inst_35763);
var inst_35769 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_35768);
var inst_35770 = cljs.core.first.call(null,inst_35768);
var inst_35771 = figwheel.client.autoload_QMARK_.call(null);
var state_35810__$1 = (function (){var statearr_35825 = state_35810;
(statearr_35825[(9)] = inst_35769);

(statearr_35825[(8)] = inst_35770);

return statearr_35825;
})();
if(cljs.core.truth_(inst_35771)){
var statearr_35826_35853 = state_35810__$1;
(statearr_35826_35853[(1)] = (8));

} else {
var statearr_35827_35854 = state_35810__$1;
(statearr_35827_35854[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35811 === (14))){
var inst_35781 = (state_35810[(2)]);
var state_35810__$1 = state_35810;
var statearr_35828_35855 = state_35810__$1;
(statearr_35828_35855[(2)] = inst_35781);

(statearr_35828_35855[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35811 === (16))){
var state_35810__$1 = state_35810;
var statearr_35829_35856 = state_35810__$1;
(statearr_35829_35856[(2)] = null);

(statearr_35829_35856[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35811 === (10))){
var inst_35802 = (state_35810[(2)]);
var state_35810__$1 = (function (){var statearr_35830 = state_35810;
(statearr_35830[(11)] = inst_35802);

return statearr_35830;
})();
var statearr_35831_35857 = state_35810__$1;
(statearr_35831_35857[(2)] = null);

(statearr_35831_35857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35811 === (8))){
var inst_35769 = (state_35810[(9)]);
var inst_35773 = figwheel.client.reload_file_state_QMARK_.call(null,inst_35769,opts);
var state_35810__$1 = state_35810;
if(cljs.core.truth_(inst_35773)){
var statearr_35832_35858 = state_35810__$1;
(statearr_35832_35858[(1)] = (11));

} else {
var statearr_35833_35859 = state_35810__$1;
(statearr_35833_35859[(1)] = (12));

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
});})(c__28200__auto___35841,ch))
;
return ((function (switch__28088__auto__,c__28200__auto___35841,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__28089__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__28089__auto____0 = (function (){
var statearr_35837 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35837[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__28089__auto__);

(statearr_35837[(1)] = (1));

return statearr_35837;
});
var figwheel$client$file_reloader_plugin_$_state_machine__28089__auto____1 = (function (state_35810){
while(true){
var ret_value__28090__auto__ = (function (){try{while(true){
var result__28091__auto__ = switch__28088__auto__.call(null,state_35810);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28091__auto__;
}
break;
}
}catch (e35838){if((e35838 instanceof Object)){
var ex__28092__auto__ = e35838;
var statearr_35839_35860 = state_35810;
(statearr_35839_35860[(5)] = ex__28092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35810);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35838;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35861 = state_35810;
state_35810 = G__35861;
continue;
} else {
return ret_value__28090__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__28089__auto__ = function(state_35810){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__28089__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__28089__auto____1.call(this,state_35810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__28089__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__28089__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__28089__auto__;
})()
;})(switch__28088__auto__,c__28200__auto___35841,ch))
})();
var state__28202__auto__ = (function (){var statearr_35840 = f__28201__auto__.call(null);
(statearr_35840[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28200__auto___35841);

return statearr_35840;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28202__auto__);
});})(c__28200__auto___35841,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__35862_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__35862_SHARP_));
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
var base_path_35865 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_35865){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e35864){if((e35864 instanceof Error)){
var e = e35864;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_35865], null));
} else {
var e = e35864;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_35865))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__35866){
var map__35875 = p__35866;
var map__35875__$1 = ((((!((map__35875 == null)))?((((map__35875.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35875.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35875):map__35875);
var opts = map__35875__$1;
var build_id = cljs.core.get.call(null,map__35875__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__35875,map__35875__$1,opts,build_id){
return (function (p__35877){
var vec__35878 = p__35877;
var seq__35879 = cljs.core.seq.call(null,vec__35878);
var first__35880 = cljs.core.first.call(null,seq__35879);
var seq__35879__$1 = cljs.core.next.call(null,seq__35879);
var map__35881 = first__35880;
var map__35881__$1 = ((((!((map__35881 == null)))?((((map__35881.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35881.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35881):map__35881);
var msg = map__35881__$1;
var msg_name = cljs.core.get.call(null,map__35881__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35879__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__35878,seq__35879,first__35880,seq__35879__$1,map__35881,map__35881__$1,msg,msg_name,_,map__35875,map__35875__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__35878,seq__35879,first__35880,seq__35879__$1,map__35881,map__35881__$1,msg,msg_name,_,map__35875,map__35875__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__35875,map__35875__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__35889){
var vec__35890 = p__35889;
var seq__35891 = cljs.core.seq.call(null,vec__35890);
var first__35892 = cljs.core.first.call(null,seq__35891);
var seq__35891__$1 = cljs.core.next.call(null,seq__35891);
var map__35893 = first__35892;
var map__35893__$1 = ((((!((map__35893 == null)))?((((map__35893.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35893.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35893):map__35893);
var msg = map__35893__$1;
var msg_name = cljs.core.get.call(null,map__35893__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35891__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__35895){
var map__35907 = p__35895;
var map__35907__$1 = ((((!((map__35907 == null)))?((((map__35907.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35907.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35907):map__35907);
var on_compile_warning = cljs.core.get.call(null,map__35907__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__35907__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__35907,map__35907__$1,on_compile_warning,on_compile_fail){
return (function (p__35909){
var vec__35910 = p__35909;
var seq__35911 = cljs.core.seq.call(null,vec__35910);
var first__35912 = cljs.core.first.call(null,seq__35911);
var seq__35911__$1 = cljs.core.next.call(null,seq__35911);
var map__35913 = first__35912;
var map__35913__$1 = ((((!((map__35913 == null)))?((((map__35913.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35913.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35913):map__35913);
var msg = map__35913__$1;
var msg_name = cljs.core.get.call(null,map__35913__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35911__$1;
var pred__35915 = cljs.core._EQ_;
var expr__35916 = msg_name;
if(cljs.core.truth_(pred__35915.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__35916))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__35915.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__35916))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__35907,map__35907__$1,on_compile_warning,on_compile_fail))
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
var c__28200__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28200__auto__,msg_hist,msg_names,msg){
return (function (){
var f__28201__auto__ = (function (){var switch__28088__auto__ = ((function (c__28200__auto__,msg_hist,msg_names,msg){
return (function (state_36144){
var state_val_36145 = (state_36144[(1)]);
if((state_val_36145 === (7))){
var inst_36064 = (state_36144[(2)]);
var state_36144__$1 = state_36144;
if(cljs.core.truth_(inst_36064)){
var statearr_36146_36196 = state_36144__$1;
(statearr_36146_36196[(1)] = (8));

} else {
var statearr_36147_36197 = state_36144__$1;
(statearr_36147_36197[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36145 === (20))){
var inst_36138 = (state_36144[(2)]);
var state_36144__$1 = state_36144;
var statearr_36148_36198 = state_36144__$1;
(statearr_36148_36198[(2)] = inst_36138);

(statearr_36148_36198[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36145 === (27))){
var inst_36134 = (state_36144[(2)]);
var state_36144__$1 = state_36144;
var statearr_36149_36199 = state_36144__$1;
(statearr_36149_36199[(2)] = inst_36134);

(statearr_36149_36199[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36145 === (1))){
var inst_36057 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_36144__$1 = state_36144;
if(cljs.core.truth_(inst_36057)){
var statearr_36150_36200 = state_36144__$1;
(statearr_36150_36200[(1)] = (2));

} else {
var statearr_36151_36201 = state_36144__$1;
(statearr_36151_36201[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36145 === (24))){
var inst_36136 = (state_36144[(2)]);
var state_36144__$1 = state_36144;
var statearr_36152_36202 = state_36144__$1;
(statearr_36152_36202[(2)] = inst_36136);

(statearr_36152_36202[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36145 === (4))){
var inst_36142 = (state_36144[(2)]);
var state_36144__$1 = state_36144;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36144__$1,inst_36142);
} else {
if((state_val_36145 === (15))){
var inst_36140 = (state_36144[(2)]);
var state_36144__$1 = state_36144;
var statearr_36153_36203 = state_36144__$1;
(statearr_36153_36203[(2)] = inst_36140);

(statearr_36153_36203[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36145 === (21))){
var inst_36093 = (state_36144[(2)]);
var inst_36094 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36095 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36094);
var state_36144__$1 = (function (){var statearr_36154 = state_36144;
(statearr_36154[(7)] = inst_36093);

return statearr_36154;
})();
var statearr_36155_36204 = state_36144__$1;
(statearr_36155_36204[(2)] = inst_36095);

(statearr_36155_36204[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36145 === (31))){
var inst_36123 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_36144__$1 = state_36144;
if(cljs.core.truth_(inst_36123)){
var statearr_36156_36205 = state_36144__$1;
(statearr_36156_36205[(1)] = (34));

} else {
var statearr_36157_36206 = state_36144__$1;
(statearr_36157_36206[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36145 === (32))){
var inst_36132 = (state_36144[(2)]);
var state_36144__$1 = state_36144;
var statearr_36158_36207 = state_36144__$1;
(statearr_36158_36207[(2)] = inst_36132);

(statearr_36158_36207[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36145 === (33))){
var inst_36119 = (state_36144[(2)]);
var inst_36120 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36121 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36120);
var state_36144__$1 = (function (){var statearr_36159 = state_36144;
(statearr_36159[(8)] = inst_36119);

return statearr_36159;
})();
var statearr_36160_36208 = state_36144__$1;
(statearr_36160_36208[(2)] = inst_36121);

(statearr_36160_36208[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36145 === (13))){
var inst_36078 = figwheel.client.heads_up.clear.call(null);
var state_36144__$1 = state_36144;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36144__$1,(16),inst_36078);
} else {
if((state_val_36145 === (22))){
var inst_36099 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36100 = figwheel.client.heads_up.append_warning_message.call(null,inst_36099);
var state_36144__$1 = state_36144;
var statearr_36161_36209 = state_36144__$1;
(statearr_36161_36209[(2)] = inst_36100);

(statearr_36161_36209[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36145 === (36))){
var inst_36130 = (state_36144[(2)]);
var state_36144__$1 = state_36144;
var statearr_36162_36210 = state_36144__$1;
(statearr_36162_36210[(2)] = inst_36130);

(statearr_36162_36210[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36145 === (29))){
var inst_36110 = (state_36144[(2)]);
var inst_36111 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36112 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36111);
var state_36144__$1 = (function (){var statearr_36163 = state_36144;
(statearr_36163[(9)] = inst_36110);

return statearr_36163;
})();
var statearr_36164_36211 = state_36144__$1;
(statearr_36164_36211[(2)] = inst_36112);

(statearr_36164_36211[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36145 === (6))){
var inst_36059 = (state_36144[(10)]);
var state_36144__$1 = state_36144;
var statearr_36165_36212 = state_36144__$1;
(statearr_36165_36212[(2)] = inst_36059);

(statearr_36165_36212[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36145 === (28))){
var inst_36106 = (state_36144[(2)]);
var inst_36107 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36108 = figwheel.client.heads_up.display_warning.call(null,inst_36107);
var state_36144__$1 = (function (){var statearr_36166 = state_36144;
(statearr_36166[(11)] = inst_36106);

return statearr_36166;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36144__$1,(29),inst_36108);
} else {
if((state_val_36145 === (25))){
var inst_36104 = figwheel.client.heads_up.clear.call(null);
var state_36144__$1 = state_36144;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36144__$1,(28),inst_36104);
} else {
if((state_val_36145 === (34))){
var inst_36125 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36144__$1 = state_36144;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36144__$1,(37),inst_36125);
} else {
if((state_val_36145 === (17))){
var inst_36084 = (state_36144[(2)]);
var inst_36085 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36086 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36085);
var state_36144__$1 = (function (){var statearr_36167 = state_36144;
(statearr_36167[(12)] = inst_36084);

return statearr_36167;
})();
var statearr_36168_36213 = state_36144__$1;
(statearr_36168_36213[(2)] = inst_36086);

(statearr_36168_36213[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36145 === (3))){
var inst_36076 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_36144__$1 = state_36144;
if(cljs.core.truth_(inst_36076)){
var statearr_36169_36214 = state_36144__$1;
(statearr_36169_36214[(1)] = (13));

} else {
var statearr_36170_36215 = state_36144__$1;
(statearr_36170_36215[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36145 === (12))){
var inst_36072 = (state_36144[(2)]);
var state_36144__$1 = state_36144;
var statearr_36171_36216 = state_36144__$1;
(statearr_36171_36216[(2)] = inst_36072);

(statearr_36171_36216[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36145 === (2))){
var inst_36059 = (state_36144[(10)]);
var inst_36059__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_36144__$1 = (function (){var statearr_36172 = state_36144;
(statearr_36172[(10)] = inst_36059__$1);

return statearr_36172;
})();
if(cljs.core.truth_(inst_36059__$1)){
var statearr_36173_36217 = state_36144__$1;
(statearr_36173_36217[(1)] = (5));

} else {
var statearr_36174_36218 = state_36144__$1;
(statearr_36174_36218[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36145 === (23))){
var inst_36102 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_36144__$1 = state_36144;
if(cljs.core.truth_(inst_36102)){
var statearr_36175_36219 = state_36144__$1;
(statearr_36175_36219[(1)] = (25));

} else {
var statearr_36176_36220 = state_36144__$1;
(statearr_36176_36220[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36145 === (35))){
var state_36144__$1 = state_36144;
var statearr_36177_36221 = state_36144__$1;
(statearr_36177_36221[(2)] = null);

(statearr_36177_36221[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36145 === (19))){
var inst_36097 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_36144__$1 = state_36144;
if(cljs.core.truth_(inst_36097)){
var statearr_36178_36222 = state_36144__$1;
(statearr_36178_36222[(1)] = (22));

} else {
var statearr_36179_36223 = state_36144__$1;
(statearr_36179_36223[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36145 === (11))){
var inst_36068 = (state_36144[(2)]);
var state_36144__$1 = state_36144;
var statearr_36180_36224 = state_36144__$1;
(statearr_36180_36224[(2)] = inst_36068);

(statearr_36180_36224[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36145 === (9))){
var inst_36070 = figwheel.client.heads_up.clear.call(null);
var state_36144__$1 = state_36144;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36144__$1,(12),inst_36070);
} else {
if((state_val_36145 === (5))){
var inst_36061 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_36144__$1 = state_36144;
var statearr_36181_36225 = state_36144__$1;
(statearr_36181_36225[(2)] = inst_36061);

(statearr_36181_36225[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36145 === (14))){
var inst_36088 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_36144__$1 = state_36144;
if(cljs.core.truth_(inst_36088)){
var statearr_36182_36226 = state_36144__$1;
(statearr_36182_36226[(1)] = (18));

} else {
var statearr_36183_36227 = state_36144__$1;
(statearr_36183_36227[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36145 === (26))){
var inst_36114 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_36144__$1 = state_36144;
if(cljs.core.truth_(inst_36114)){
var statearr_36184_36228 = state_36144__$1;
(statearr_36184_36228[(1)] = (30));

} else {
var statearr_36185_36229 = state_36144__$1;
(statearr_36185_36229[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36145 === (16))){
var inst_36080 = (state_36144[(2)]);
var inst_36081 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36082 = figwheel.client.heads_up.display_exception.call(null,inst_36081);
var state_36144__$1 = (function (){var statearr_36186 = state_36144;
(statearr_36186[(13)] = inst_36080);

return statearr_36186;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36144__$1,(17),inst_36082);
} else {
if((state_val_36145 === (30))){
var inst_36116 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36117 = figwheel.client.heads_up.display_warning.call(null,inst_36116);
var state_36144__$1 = state_36144;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36144__$1,(33),inst_36117);
} else {
if((state_val_36145 === (10))){
var inst_36074 = (state_36144[(2)]);
var state_36144__$1 = state_36144;
var statearr_36187_36230 = state_36144__$1;
(statearr_36187_36230[(2)] = inst_36074);

(statearr_36187_36230[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36145 === (18))){
var inst_36090 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36091 = figwheel.client.heads_up.display_exception.call(null,inst_36090);
var state_36144__$1 = state_36144;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36144__$1,(21),inst_36091);
} else {
if((state_val_36145 === (37))){
var inst_36127 = (state_36144[(2)]);
var state_36144__$1 = state_36144;
var statearr_36188_36231 = state_36144__$1;
(statearr_36188_36231[(2)] = inst_36127);

(statearr_36188_36231[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36145 === (8))){
var inst_36066 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36144__$1 = state_36144;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36144__$1,(11),inst_36066);
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
});})(c__28200__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__28088__auto__,c__28200__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28089__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28089__auto____0 = (function (){
var statearr_36192 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36192[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28089__auto__);

(statearr_36192[(1)] = (1));

return statearr_36192;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28089__auto____1 = (function (state_36144){
while(true){
var ret_value__28090__auto__ = (function (){try{while(true){
var result__28091__auto__ = switch__28088__auto__.call(null,state_36144);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28091__auto__;
}
break;
}
}catch (e36193){if((e36193 instanceof Object)){
var ex__28092__auto__ = e36193;
var statearr_36194_36232 = state_36144;
(statearr_36194_36232[(5)] = ex__28092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36144);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36193;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36233 = state_36144;
state_36144 = G__36233;
continue;
} else {
return ret_value__28090__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28089__auto__ = function(state_36144){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28089__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28089__auto____1.call(this,state_36144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28089__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28089__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28089__auto__;
})()
;})(switch__28088__auto__,c__28200__auto__,msg_hist,msg_names,msg))
})();
var state__28202__auto__ = (function (){var statearr_36195 = f__28201__auto__.call(null);
(statearr_36195[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28200__auto__);

return statearr_36195;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28202__auto__);
});})(c__28200__auto__,msg_hist,msg_names,msg))
);

return c__28200__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__28200__auto___36296 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28200__auto___36296,ch){
return (function (){
var f__28201__auto__ = (function (){var switch__28088__auto__ = ((function (c__28200__auto___36296,ch){
return (function (state_36279){
var state_val_36280 = (state_36279[(1)]);
if((state_val_36280 === (1))){
var state_36279__$1 = state_36279;
var statearr_36281_36297 = state_36279__$1;
(statearr_36281_36297[(2)] = null);

(statearr_36281_36297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36280 === (2))){
var state_36279__$1 = state_36279;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36279__$1,(4),ch);
} else {
if((state_val_36280 === (3))){
var inst_36277 = (state_36279[(2)]);
var state_36279__$1 = state_36279;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36279__$1,inst_36277);
} else {
if((state_val_36280 === (4))){
var inst_36267 = (state_36279[(7)]);
var inst_36267__$1 = (state_36279[(2)]);
var state_36279__$1 = (function (){var statearr_36282 = state_36279;
(statearr_36282[(7)] = inst_36267__$1);

return statearr_36282;
})();
if(cljs.core.truth_(inst_36267__$1)){
var statearr_36283_36298 = state_36279__$1;
(statearr_36283_36298[(1)] = (5));

} else {
var statearr_36284_36299 = state_36279__$1;
(statearr_36284_36299[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36280 === (5))){
var inst_36267 = (state_36279[(7)]);
var inst_36269 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_36267);
var state_36279__$1 = state_36279;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36279__$1,(8),inst_36269);
} else {
if((state_val_36280 === (6))){
var state_36279__$1 = state_36279;
var statearr_36285_36300 = state_36279__$1;
(statearr_36285_36300[(2)] = null);

(statearr_36285_36300[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36280 === (7))){
var inst_36275 = (state_36279[(2)]);
var state_36279__$1 = state_36279;
var statearr_36286_36301 = state_36279__$1;
(statearr_36286_36301[(2)] = inst_36275);

(statearr_36286_36301[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36280 === (8))){
var inst_36271 = (state_36279[(2)]);
var state_36279__$1 = (function (){var statearr_36287 = state_36279;
(statearr_36287[(8)] = inst_36271);

return statearr_36287;
})();
var statearr_36288_36302 = state_36279__$1;
(statearr_36288_36302[(2)] = null);

(statearr_36288_36302[(1)] = (2));


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
});})(c__28200__auto___36296,ch))
;
return ((function (switch__28088__auto__,c__28200__auto___36296,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__28089__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__28089__auto____0 = (function (){
var statearr_36292 = [null,null,null,null,null,null,null,null,null];
(statearr_36292[(0)] = figwheel$client$heads_up_plugin_$_state_machine__28089__auto__);

(statearr_36292[(1)] = (1));

return statearr_36292;
});
var figwheel$client$heads_up_plugin_$_state_machine__28089__auto____1 = (function (state_36279){
while(true){
var ret_value__28090__auto__ = (function (){try{while(true){
var result__28091__auto__ = switch__28088__auto__.call(null,state_36279);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28091__auto__;
}
break;
}
}catch (e36293){if((e36293 instanceof Object)){
var ex__28092__auto__ = e36293;
var statearr_36294_36303 = state_36279;
(statearr_36294_36303[(5)] = ex__28092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36279);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36293;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36304 = state_36279;
state_36279 = G__36304;
continue;
} else {
return ret_value__28090__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__28089__auto__ = function(state_36279){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__28089__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__28089__auto____1.call(this,state_36279);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__28089__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__28089__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__28089__auto__;
})()
;})(switch__28088__auto__,c__28200__auto___36296,ch))
})();
var state__28202__auto__ = (function (){var statearr_36295 = f__28201__auto__.call(null);
(statearr_36295[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28200__auto___36296);

return statearr_36295;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28202__auto__);
});})(c__28200__auto___36296,ch))
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
var c__28200__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28200__auto__){
return (function (){
var f__28201__auto__ = (function (){var switch__28088__auto__ = ((function (c__28200__auto__){
return (function (state_36325){
var state_val_36326 = (state_36325[(1)]);
if((state_val_36326 === (1))){
var inst_36320 = cljs.core.async.timeout.call(null,(3000));
var state_36325__$1 = state_36325;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36325__$1,(2),inst_36320);
} else {
if((state_val_36326 === (2))){
var inst_36322 = (state_36325[(2)]);
var inst_36323 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_36325__$1 = (function (){var statearr_36327 = state_36325;
(statearr_36327[(7)] = inst_36322);

return statearr_36327;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36325__$1,inst_36323);
} else {
return null;
}
}
});})(c__28200__auto__))
;
return ((function (switch__28088__auto__,c__28200__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__28089__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__28089__auto____0 = (function (){
var statearr_36331 = [null,null,null,null,null,null,null,null];
(statearr_36331[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__28089__auto__);

(statearr_36331[(1)] = (1));

return statearr_36331;
});
var figwheel$client$enforce_project_plugin_$_state_machine__28089__auto____1 = (function (state_36325){
while(true){
var ret_value__28090__auto__ = (function (){try{while(true){
var result__28091__auto__ = switch__28088__auto__.call(null,state_36325);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28091__auto__;
}
break;
}
}catch (e36332){if((e36332 instanceof Object)){
var ex__28092__auto__ = e36332;
var statearr_36333_36335 = state_36325;
(statearr_36333_36335[(5)] = ex__28092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36325);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36332;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36336 = state_36325;
state_36325 = G__36336;
continue;
} else {
return ret_value__28090__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__28089__auto__ = function(state_36325){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__28089__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__28089__auto____1.call(this,state_36325);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__28089__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__28089__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__28089__auto__;
})()
;})(switch__28088__auto__,c__28200__auto__))
})();
var state__28202__auto__ = (function (){var statearr_36334 = f__28201__auto__.call(null);
(statearr_36334[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28200__auto__);

return statearr_36334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28202__auto__);
});})(c__28200__auto__))
);

return c__28200__auto__;
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
var c__28200__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28200__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__28201__auto__ = (function (){var switch__28088__auto__ = ((function (c__28200__auto__,figwheel_version,temp__4657__auto__){
return (function (state_36359){
var state_val_36360 = (state_36359[(1)]);
if((state_val_36360 === (1))){
var inst_36353 = cljs.core.async.timeout.call(null,(2000));
var state_36359__$1 = state_36359;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36359__$1,(2),inst_36353);
} else {
if((state_val_36360 === (2))){
var inst_36355 = (state_36359[(2)]);
var inst_36356 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_36357 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_36356);
var state_36359__$1 = (function (){var statearr_36361 = state_36359;
(statearr_36361[(7)] = inst_36355);

return statearr_36361;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36359__$1,inst_36357);
} else {
return null;
}
}
});})(c__28200__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__28088__auto__,c__28200__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28089__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28089__auto____0 = (function (){
var statearr_36365 = [null,null,null,null,null,null,null,null];
(statearr_36365[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28089__auto__);

(statearr_36365[(1)] = (1));

return statearr_36365;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28089__auto____1 = (function (state_36359){
while(true){
var ret_value__28090__auto__ = (function (){try{while(true){
var result__28091__auto__ = switch__28088__auto__.call(null,state_36359);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28091__auto__;
}
break;
}
}catch (e36366){if((e36366 instanceof Object)){
var ex__28092__auto__ = e36366;
var statearr_36367_36369 = state_36359;
(statearr_36367_36369[(5)] = ex__28092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36359);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36366;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36370 = state_36359;
state_36359 = G__36370;
continue;
} else {
return ret_value__28090__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28089__auto__ = function(state_36359){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28089__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28089__auto____1.call(this,state_36359);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28089__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28089__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28089__auto__;
})()
;})(switch__28088__auto__,c__28200__auto__,figwheel_version,temp__4657__auto__))
})();
var state__28202__auto__ = (function (){var statearr_36368 = f__28201__auto__.call(null);
(statearr_36368[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28200__auto__);

return statearr_36368;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28202__auto__);
});})(c__28200__auto__,figwheel_version,temp__4657__auto__))
);

return c__28200__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__36371){
var map__36375 = p__36371;
var map__36375__$1 = ((((!((map__36375 == null)))?((((map__36375.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36375.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36375):map__36375);
var file = cljs.core.get.call(null,map__36375__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__36375__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__36375__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__36377 = "";
var G__36377__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__36377),cljs.core.str("file "),cljs.core.str(file)].join(''):G__36377);
var G__36377__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__36377__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__36377__$1);
if(cljs.core.truth_((function (){var and__25967__auto__ = line;
if(cljs.core.truth_(and__25967__auto__)){
return column;
} else {
return and__25967__auto__;
}
})())){
return [cljs.core.str(G__36377__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__36377__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__36378){
var map__36385 = p__36378;
var map__36385__$1 = ((((!((map__36385 == null)))?((((map__36385.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36385.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36385):map__36385);
var ed = map__36385__$1;
var formatted_exception = cljs.core.get.call(null,map__36385__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__36385__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__36385__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__36387_36391 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__36388_36392 = null;
var count__36389_36393 = (0);
var i__36390_36394 = (0);
while(true){
if((i__36390_36394 < count__36389_36393)){
var msg_36395 = cljs.core._nth.call(null,chunk__36388_36392,i__36390_36394);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_36395);

var G__36396 = seq__36387_36391;
var G__36397 = chunk__36388_36392;
var G__36398 = count__36389_36393;
var G__36399 = (i__36390_36394 + (1));
seq__36387_36391 = G__36396;
chunk__36388_36392 = G__36397;
count__36389_36393 = G__36398;
i__36390_36394 = G__36399;
continue;
} else {
var temp__4657__auto___36400 = cljs.core.seq.call(null,seq__36387_36391);
if(temp__4657__auto___36400){
var seq__36387_36401__$1 = temp__4657__auto___36400;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36387_36401__$1)){
var c__26790__auto___36402 = cljs.core.chunk_first.call(null,seq__36387_36401__$1);
var G__36403 = cljs.core.chunk_rest.call(null,seq__36387_36401__$1);
var G__36404 = c__26790__auto___36402;
var G__36405 = cljs.core.count.call(null,c__26790__auto___36402);
var G__36406 = (0);
seq__36387_36391 = G__36403;
chunk__36388_36392 = G__36404;
count__36389_36393 = G__36405;
i__36390_36394 = G__36406;
continue;
} else {
var msg_36407 = cljs.core.first.call(null,seq__36387_36401__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_36407);

var G__36408 = cljs.core.next.call(null,seq__36387_36401__$1);
var G__36409 = null;
var G__36410 = (0);
var G__36411 = (0);
seq__36387_36391 = G__36408;
chunk__36388_36392 = G__36409;
count__36389_36393 = G__36410;
i__36390_36394 = G__36411;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__36412){
var map__36415 = p__36412;
var map__36415__$1 = ((((!((map__36415 == null)))?((((map__36415.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36415.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36415):map__36415);
var w = map__36415__$1;
var message = cljs.core.get.call(null,map__36415__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

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
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"../../../dist/js/compiled/out/figwheel/client.cljs",33,1,357,357,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"../../../dist/js/compiled/out/figwheel/client.cljs",30,1,349,349,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
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
if(cljs.core.truth_((function (){var and__25967__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__25967__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__25967__auto__;
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
var seq__36427 = cljs.core.seq.call(null,plugins);
var chunk__36428 = null;
var count__36429 = (0);
var i__36430 = (0);
while(true){
if((i__36430 < count__36429)){
var vec__36431 = cljs.core._nth.call(null,chunk__36428,i__36430);
var k = cljs.core.nth.call(null,vec__36431,(0),null);
var plugin = cljs.core.nth.call(null,vec__36431,(1),null);
if(cljs.core.truth_(plugin)){
var pl_36437 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__36427,chunk__36428,count__36429,i__36430,pl_36437,vec__36431,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_36437.call(null,msg_hist);
});})(seq__36427,chunk__36428,count__36429,i__36430,pl_36437,vec__36431,k,plugin))
);
} else {
}

var G__36438 = seq__36427;
var G__36439 = chunk__36428;
var G__36440 = count__36429;
var G__36441 = (i__36430 + (1));
seq__36427 = G__36438;
chunk__36428 = G__36439;
count__36429 = G__36440;
i__36430 = G__36441;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36427);
if(temp__4657__auto__){
var seq__36427__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36427__$1)){
var c__26790__auto__ = cljs.core.chunk_first.call(null,seq__36427__$1);
var G__36442 = cljs.core.chunk_rest.call(null,seq__36427__$1);
var G__36443 = c__26790__auto__;
var G__36444 = cljs.core.count.call(null,c__26790__auto__);
var G__36445 = (0);
seq__36427 = G__36442;
chunk__36428 = G__36443;
count__36429 = G__36444;
i__36430 = G__36445;
continue;
} else {
var vec__36434 = cljs.core.first.call(null,seq__36427__$1);
var k = cljs.core.nth.call(null,vec__36434,(0),null);
var plugin = cljs.core.nth.call(null,vec__36434,(1),null);
if(cljs.core.truth_(plugin)){
var pl_36446 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__36427,chunk__36428,count__36429,i__36430,pl_36446,vec__36434,k,plugin,seq__36427__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_36446.call(null,msg_hist);
});})(seq__36427,chunk__36428,count__36429,i__36430,pl_36446,vec__36434,k,plugin,seq__36427__$1,temp__4657__auto__))
);
} else {
}

var G__36447 = cljs.core.next.call(null,seq__36427__$1);
var G__36448 = null;
var G__36449 = (0);
var G__36450 = (0);
seq__36427 = G__36447;
chunk__36428 = G__36448;
count__36429 = G__36449;
i__36430 = G__36450;
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
var args36451 = [];
var len__27054__auto___36458 = arguments.length;
var i__27055__auto___36459 = (0);
while(true){
if((i__27055__auto___36459 < len__27054__auto___36458)){
args36451.push((arguments[i__27055__auto___36459]));

var G__36460 = (i__27055__auto___36459 + (1));
i__27055__auto___36459 = G__36460;
continue;
} else {
}
break;
}

var G__36453 = args36451.length;
switch (G__36453) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36451.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__36454_36462 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__36455_36463 = null;
var count__36456_36464 = (0);
var i__36457_36465 = (0);
while(true){
if((i__36457_36465 < count__36456_36464)){
var msg_36466 = cljs.core._nth.call(null,chunk__36455_36463,i__36457_36465);
figwheel.client.socket.handle_incoming_message.call(null,msg_36466);

var G__36467 = seq__36454_36462;
var G__36468 = chunk__36455_36463;
var G__36469 = count__36456_36464;
var G__36470 = (i__36457_36465 + (1));
seq__36454_36462 = G__36467;
chunk__36455_36463 = G__36468;
count__36456_36464 = G__36469;
i__36457_36465 = G__36470;
continue;
} else {
var temp__4657__auto___36471 = cljs.core.seq.call(null,seq__36454_36462);
if(temp__4657__auto___36471){
var seq__36454_36472__$1 = temp__4657__auto___36471;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36454_36472__$1)){
var c__26790__auto___36473 = cljs.core.chunk_first.call(null,seq__36454_36472__$1);
var G__36474 = cljs.core.chunk_rest.call(null,seq__36454_36472__$1);
var G__36475 = c__26790__auto___36473;
var G__36476 = cljs.core.count.call(null,c__26790__auto___36473);
var G__36477 = (0);
seq__36454_36462 = G__36474;
chunk__36455_36463 = G__36475;
count__36456_36464 = G__36476;
i__36457_36465 = G__36477;
continue;
} else {
var msg_36478 = cljs.core.first.call(null,seq__36454_36472__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_36478);

var G__36479 = cljs.core.next.call(null,seq__36454_36472__$1);
var G__36480 = null;
var G__36481 = (0);
var G__36482 = (0);
seq__36454_36462 = G__36479;
chunk__36455_36463 = G__36480;
count__36456_36464 = G__36481;
i__36457_36465 = G__36482;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__27061__auto__ = [];
var len__27054__auto___36487 = arguments.length;
var i__27055__auto___36488 = (0);
while(true){
if((i__27055__auto___36488 < len__27054__auto___36487)){
args__27061__auto__.push((arguments[i__27055__auto___36488]));

var G__36489 = (i__27055__auto___36488 + (1));
i__27055__auto___36488 = G__36489;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__36484){
var map__36485 = p__36484;
var map__36485__$1 = ((((!((map__36485 == null)))?((((map__36485.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36485.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36485):map__36485);
var opts = map__36485__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq36483){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36483));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e36491){if((e36491 instanceof Error)){
var e = e36491;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e36491;

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
return (function (p__36495){
var map__36496 = p__36495;
var map__36496__$1 = ((((!((map__36496 == null)))?((((map__36496.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36496.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36496):map__36496);
var msg_name = cljs.core.get.call(null,map__36496__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1498622390393