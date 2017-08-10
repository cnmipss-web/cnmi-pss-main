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
var G__37478 = arguments.length;
switch (G__37478) {
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
var args__28186__auto__ = [];
var len__28179__auto___37481 = arguments.length;
var i__28180__auto___37482 = (0);
while(true){
if((i__28180__auto___37482 < len__28179__auto___37481)){
args__28186__auto__.push((arguments[i__28180__auto___37482]));

var G__37483 = (i__28180__auto___37482 + (1));
i__28180__auto___37482 = G__37483;
continue;
} else {
}
break;
}

var argseq__28187__auto__ = ((((0) < args__28186__auto__.length))?(new cljs.core.IndexedSeq(args__28186__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__28187__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq37480){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37480));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__28186__auto__ = [];
var len__28179__auto___37485 = arguments.length;
var i__28180__auto___37486 = (0);
while(true){
if((i__28180__auto___37486 < len__28179__auto___37485)){
args__28186__auto__.push((arguments[i__28180__auto___37486]));

var G__37487 = (i__28180__auto___37486 + (1));
i__28180__auto___37486 = G__37487;
continue;
} else {
}
break;
}

var argseq__28187__auto__ = ((((0) < args__28186__auto__.length))?(new cljs.core.IndexedSeq(args__28186__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__28187__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq37484){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37484));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__37488){
var map__37489 = p__37488;
var map__37489__$1 = ((((!((map__37489 == null)))?((((map__37489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37489.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37489):map__37489);
var message = cljs.core.get.call(null,map__37489__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__37489__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" : "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__27054__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__27054__auto__)){
return or__27054__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__27042__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__27042__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__27042__auto__;
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
var c__33471__auto___37568 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33471__auto___37568,ch){
return (function (){
var f__33472__auto__ = (function (){var switch__33383__auto__ = ((function (c__33471__auto___37568,ch){
return (function (state_37540){
var state_val_37541 = (state_37540[(1)]);
if((state_val_37541 === (7))){
var inst_37536 = (state_37540[(2)]);
var state_37540__$1 = state_37540;
var statearr_37542_37569 = state_37540__$1;
(statearr_37542_37569[(2)] = inst_37536);

(statearr_37542_37569[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37541 === (1))){
var state_37540__$1 = state_37540;
var statearr_37543_37570 = state_37540__$1;
(statearr_37543_37570[(2)] = null);

(statearr_37543_37570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37541 === (4))){
var inst_37493 = (state_37540[(7)]);
var inst_37493__$1 = (state_37540[(2)]);
var state_37540__$1 = (function (){var statearr_37544 = state_37540;
(statearr_37544[(7)] = inst_37493__$1);

return statearr_37544;
})();
if(cljs.core.truth_(inst_37493__$1)){
var statearr_37545_37571 = state_37540__$1;
(statearr_37545_37571[(1)] = (5));

} else {
var statearr_37546_37572 = state_37540__$1;
(statearr_37546_37572[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37541 === (15))){
var inst_37500 = (state_37540[(8)]);
var inst_37515 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37500);
var inst_37516 = cljs.core.first.call(null,inst_37515);
var inst_37517 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_37516);
var inst_37518 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not loading code with warnings - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37517)].join('');
var inst_37519 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_37518);
var state_37540__$1 = state_37540;
var statearr_37547_37573 = state_37540__$1;
(statearr_37547_37573[(2)] = inst_37519);

(statearr_37547_37573[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37541 === (13))){
var inst_37524 = (state_37540[(2)]);
var state_37540__$1 = state_37540;
var statearr_37548_37574 = state_37540__$1;
(statearr_37548_37574[(2)] = inst_37524);

(statearr_37548_37574[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37541 === (6))){
var state_37540__$1 = state_37540;
var statearr_37549_37575 = state_37540__$1;
(statearr_37549_37575[(2)] = null);

(statearr_37549_37575[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37541 === (17))){
var inst_37522 = (state_37540[(2)]);
var state_37540__$1 = state_37540;
var statearr_37550_37576 = state_37540__$1;
(statearr_37550_37576[(2)] = inst_37522);

(statearr_37550_37576[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37541 === (3))){
var inst_37538 = (state_37540[(2)]);
var state_37540__$1 = state_37540;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37540__$1,inst_37538);
} else {
if((state_val_37541 === (12))){
var inst_37499 = (state_37540[(9)]);
var inst_37513 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_37499,opts);
var state_37540__$1 = state_37540;
if(cljs.core.truth_(inst_37513)){
var statearr_37551_37577 = state_37540__$1;
(statearr_37551_37577[(1)] = (15));

} else {
var statearr_37552_37578 = state_37540__$1;
(statearr_37552_37578[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37541 === (2))){
var state_37540__$1 = state_37540;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37540__$1,(4),ch);
} else {
if((state_val_37541 === (11))){
var inst_37500 = (state_37540[(8)]);
var inst_37505 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37506 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_37500);
var inst_37507 = cljs.core.async.timeout.call(null,(1000));
var inst_37508 = [inst_37506,inst_37507];
var inst_37509 = (new cljs.core.PersistentVector(null,2,(5),inst_37505,inst_37508,null));
var state_37540__$1 = state_37540;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37540__$1,(14),inst_37509);
} else {
if((state_val_37541 === (9))){
var inst_37500 = (state_37540[(8)]);
var inst_37526 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_37527 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37500);
var inst_37528 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37527);
var inst_37529 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Not loading: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37528)].join('');
var inst_37530 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_37529);
var state_37540__$1 = (function (){var statearr_37553 = state_37540;
(statearr_37553[(10)] = inst_37526);

return statearr_37553;
})();
var statearr_37554_37579 = state_37540__$1;
(statearr_37554_37579[(2)] = inst_37530);

(statearr_37554_37579[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37541 === (5))){
var inst_37493 = (state_37540[(7)]);
var inst_37495 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_37496 = (new cljs.core.PersistentArrayMap(null,2,inst_37495,null));
var inst_37497 = (new cljs.core.PersistentHashSet(null,inst_37496,null));
var inst_37498 = figwheel.client.focus_msgs.call(null,inst_37497,inst_37493);
var inst_37499 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_37498);
var inst_37500 = cljs.core.first.call(null,inst_37498);
var inst_37501 = figwheel.client.autoload_QMARK_.call(null);
var state_37540__$1 = (function (){var statearr_37555 = state_37540;
(statearr_37555[(8)] = inst_37500);

(statearr_37555[(9)] = inst_37499);

return statearr_37555;
})();
if(cljs.core.truth_(inst_37501)){
var statearr_37556_37580 = state_37540__$1;
(statearr_37556_37580[(1)] = (8));

} else {
var statearr_37557_37581 = state_37540__$1;
(statearr_37557_37581[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37541 === (14))){
var inst_37511 = (state_37540[(2)]);
var state_37540__$1 = state_37540;
var statearr_37558_37582 = state_37540__$1;
(statearr_37558_37582[(2)] = inst_37511);

(statearr_37558_37582[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37541 === (16))){
var state_37540__$1 = state_37540;
var statearr_37559_37583 = state_37540__$1;
(statearr_37559_37583[(2)] = null);

(statearr_37559_37583[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37541 === (10))){
var inst_37532 = (state_37540[(2)]);
var state_37540__$1 = (function (){var statearr_37560 = state_37540;
(statearr_37560[(11)] = inst_37532);

return statearr_37560;
})();
var statearr_37561_37584 = state_37540__$1;
(statearr_37561_37584[(2)] = null);

(statearr_37561_37584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37541 === (8))){
var inst_37499 = (state_37540[(9)]);
var inst_37503 = figwheel.client.reload_file_state_QMARK_.call(null,inst_37499,opts);
var state_37540__$1 = state_37540;
if(cljs.core.truth_(inst_37503)){
var statearr_37562_37585 = state_37540__$1;
(statearr_37562_37585[(1)] = (11));

} else {
var statearr_37563_37586 = state_37540__$1;
(statearr_37563_37586[(1)] = (12));

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
});})(c__33471__auto___37568,ch))
;
return ((function (switch__33383__auto__,c__33471__auto___37568,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__33384__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__33384__auto____0 = (function (){
var statearr_37564 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37564[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__33384__auto__);

(statearr_37564[(1)] = (1));

return statearr_37564;
});
var figwheel$client$file_reloader_plugin_$_state_machine__33384__auto____1 = (function (state_37540){
while(true){
var ret_value__33385__auto__ = (function (){try{while(true){
var result__33386__auto__ = switch__33383__auto__.call(null,state_37540);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33386__auto__;
}
break;
}
}catch (e37565){if((e37565 instanceof Object)){
var ex__33387__auto__ = e37565;
var statearr_37566_37587 = state_37540;
(statearr_37566_37587[(5)] = ex__33387__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37540);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37565;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37588 = state_37540;
state_37540 = G__37588;
continue;
} else {
return ret_value__33385__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__33384__auto__ = function(state_37540){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__33384__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__33384__auto____1.call(this,state_37540);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__33384__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__33384__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__33384__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__33384__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__33384__auto__;
})()
;})(switch__33383__auto__,c__33471__auto___37568,ch))
})();
var state__33473__auto__ = (function (){var statearr_37567 = f__33472__auto__.call(null);
(statearr_37567[(6)] = c__33471__auto___37568);

return statearr_37567;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33473__auto__);
});})(c__33471__auto___37568,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__37589_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__37589_SHARP_));
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
var base_path_37591 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_37591){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e37590){if((e37590 instanceof Error)){
var e = e37590;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_37591], null));
} else {
var e = e37590;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_37591))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__37592){
var map__37593 = p__37592;
var map__37593__$1 = ((((!((map__37593 == null)))?((((map__37593.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37593.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37593):map__37593);
var opts = map__37593__$1;
var build_id = cljs.core.get.call(null,map__37593__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__37593,map__37593__$1,opts,build_id){
return (function (p__37595){
var vec__37596 = p__37595;
var seq__37597 = cljs.core.seq.call(null,vec__37596);
var first__37598 = cljs.core.first.call(null,seq__37597);
var seq__37597__$1 = cljs.core.next.call(null,seq__37597);
var map__37599 = first__37598;
var map__37599__$1 = ((((!((map__37599 == null)))?((((map__37599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37599.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37599):map__37599);
var msg = map__37599__$1;
var msg_name = cljs.core.get.call(null,map__37599__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37597__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__37596,seq__37597,first__37598,seq__37597__$1,map__37599,map__37599__$1,msg,msg_name,_,map__37593,map__37593__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__37596,seq__37597,first__37598,seq__37597__$1,map__37599,map__37599__$1,msg,msg_name,_,map__37593,map__37593__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__37593,map__37593__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__37601){
var vec__37602 = p__37601;
var seq__37603 = cljs.core.seq.call(null,vec__37602);
var first__37604 = cljs.core.first.call(null,seq__37603);
var seq__37603__$1 = cljs.core.next.call(null,seq__37603);
var map__37605 = first__37604;
var map__37605__$1 = ((((!((map__37605 == null)))?((((map__37605.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37605.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37605):map__37605);
var msg = map__37605__$1;
var msg_name = cljs.core.get.call(null,map__37605__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37603__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__37607){
var map__37608 = p__37607;
var map__37608__$1 = ((((!((map__37608 == null)))?((((map__37608.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37608.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37608):map__37608);
var on_compile_warning = cljs.core.get.call(null,map__37608__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__37608__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__37608,map__37608__$1,on_compile_warning,on_compile_fail){
return (function (p__37610){
var vec__37611 = p__37610;
var seq__37612 = cljs.core.seq.call(null,vec__37611);
var first__37613 = cljs.core.first.call(null,seq__37612);
var seq__37612__$1 = cljs.core.next.call(null,seq__37612);
var map__37614 = first__37613;
var map__37614__$1 = ((((!((map__37614 == null)))?((((map__37614.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37614.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37614):map__37614);
var msg = map__37614__$1;
var msg_name = cljs.core.get.call(null,map__37614__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37612__$1;
var pred__37616 = cljs.core._EQ_;
var expr__37617 = msg_name;
if(cljs.core.truth_(pred__37616.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__37617))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__37616.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__37617))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__37608,map__37608__$1,on_compile_warning,on_compile_fail))
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
var c__33471__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33471__auto__,msg_hist,msg_names,msg){
return (function (){
var f__33472__auto__ = (function (){var switch__33383__auto__ = ((function (c__33471__auto__,msg_hist,msg_names,msg){
return (function (state_37706){
var state_val_37707 = (state_37706[(1)]);
if((state_val_37707 === (7))){
var inst_37626 = (state_37706[(2)]);
var state_37706__$1 = state_37706;
if(cljs.core.truth_(inst_37626)){
var statearr_37708_37755 = state_37706__$1;
(statearr_37708_37755[(1)] = (8));

} else {
var statearr_37709_37756 = state_37706__$1;
(statearr_37709_37756[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (20))){
var inst_37700 = (state_37706[(2)]);
var state_37706__$1 = state_37706;
var statearr_37710_37757 = state_37706__$1;
(statearr_37710_37757[(2)] = inst_37700);

(statearr_37710_37757[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (27))){
var inst_37696 = (state_37706[(2)]);
var state_37706__$1 = state_37706;
var statearr_37711_37758 = state_37706__$1;
(statearr_37711_37758[(2)] = inst_37696);

(statearr_37711_37758[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (1))){
var inst_37619 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_37706__$1 = state_37706;
if(cljs.core.truth_(inst_37619)){
var statearr_37712_37759 = state_37706__$1;
(statearr_37712_37759[(1)] = (2));

} else {
var statearr_37713_37760 = state_37706__$1;
(statearr_37713_37760[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (24))){
var inst_37698 = (state_37706[(2)]);
var state_37706__$1 = state_37706;
var statearr_37714_37761 = state_37706__$1;
(statearr_37714_37761[(2)] = inst_37698);

(statearr_37714_37761[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (4))){
var inst_37704 = (state_37706[(2)]);
var state_37706__$1 = state_37706;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37706__$1,inst_37704);
} else {
if((state_val_37707 === (15))){
var inst_37702 = (state_37706[(2)]);
var state_37706__$1 = state_37706;
var statearr_37715_37762 = state_37706__$1;
(statearr_37715_37762[(2)] = inst_37702);

(statearr_37715_37762[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (21))){
var inst_37655 = (state_37706[(2)]);
var inst_37656 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37657 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37656);
var state_37706__$1 = (function (){var statearr_37716 = state_37706;
(statearr_37716[(7)] = inst_37655);

return statearr_37716;
})();
var statearr_37717_37763 = state_37706__$1;
(statearr_37717_37763[(2)] = inst_37657);

(statearr_37717_37763[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (31))){
var inst_37685 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_37706__$1 = state_37706;
if(cljs.core.truth_(inst_37685)){
var statearr_37718_37764 = state_37706__$1;
(statearr_37718_37764[(1)] = (34));

} else {
var statearr_37719_37765 = state_37706__$1;
(statearr_37719_37765[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (32))){
var inst_37694 = (state_37706[(2)]);
var state_37706__$1 = state_37706;
var statearr_37720_37766 = state_37706__$1;
(statearr_37720_37766[(2)] = inst_37694);

(statearr_37720_37766[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (33))){
var inst_37681 = (state_37706[(2)]);
var inst_37682 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37683 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37682);
var state_37706__$1 = (function (){var statearr_37721 = state_37706;
(statearr_37721[(8)] = inst_37681);

return statearr_37721;
})();
var statearr_37722_37767 = state_37706__$1;
(statearr_37722_37767[(2)] = inst_37683);

(statearr_37722_37767[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (13))){
var inst_37640 = figwheel.client.heads_up.clear.call(null);
var state_37706__$1 = state_37706;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37706__$1,(16),inst_37640);
} else {
if((state_val_37707 === (22))){
var inst_37661 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37662 = figwheel.client.heads_up.append_warning_message.call(null,inst_37661);
var state_37706__$1 = state_37706;
var statearr_37723_37768 = state_37706__$1;
(statearr_37723_37768[(2)] = inst_37662);

(statearr_37723_37768[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (36))){
var inst_37692 = (state_37706[(2)]);
var state_37706__$1 = state_37706;
var statearr_37724_37769 = state_37706__$1;
(statearr_37724_37769[(2)] = inst_37692);

(statearr_37724_37769[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (29))){
var inst_37672 = (state_37706[(2)]);
var inst_37673 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37674 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37673);
var state_37706__$1 = (function (){var statearr_37725 = state_37706;
(statearr_37725[(9)] = inst_37672);

return statearr_37725;
})();
var statearr_37726_37770 = state_37706__$1;
(statearr_37726_37770[(2)] = inst_37674);

(statearr_37726_37770[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (6))){
var inst_37621 = (state_37706[(10)]);
var state_37706__$1 = state_37706;
var statearr_37727_37771 = state_37706__$1;
(statearr_37727_37771[(2)] = inst_37621);

(statearr_37727_37771[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (28))){
var inst_37668 = (state_37706[(2)]);
var inst_37669 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37670 = figwheel.client.heads_up.display_warning.call(null,inst_37669);
var state_37706__$1 = (function (){var statearr_37728 = state_37706;
(statearr_37728[(11)] = inst_37668);

return statearr_37728;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37706__$1,(29),inst_37670);
} else {
if((state_val_37707 === (25))){
var inst_37666 = figwheel.client.heads_up.clear.call(null);
var state_37706__$1 = state_37706;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37706__$1,(28),inst_37666);
} else {
if((state_val_37707 === (34))){
var inst_37687 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37706__$1 = state_37706;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37706__$1,(37),inst_37687);
} else {
if((state_val_37707 === (17))){
var inst_37646 = (state_37706[(2)]);
var inst_37647 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37648 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37647);
var state_37706__$1 = (function (){var statearr_37729 = state_37706;
(statearr_37729[(12)] = inst_37646);

return statearr_37729;
})();
var statearr_37730_37772 = state_37706__$1;
(statearr_37730_37772[(2)] = inst_37648);

(statearr_37730_37772[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (3))){
var inst_37638 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_37706__$1 = state_37706;
if(cljs.core.truth_(inst_37638)){
var statearr_37731_37773 = state_37706__$1;
(statearr_37731_37773[(1)] = (13));

} else {
var statearr_37732_37774 = state_37706__$1;
(statearr_37732_37774[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (12))){
var inst_37634 = (state_37706[(2)]);
var state_37706__$1 = state_37706;
var statearr_37733_37775 = state_37706__$1;
(statearr_37733_37775[(2)] = inst_37634);

(statearr_37733_37775[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (2))){
var inst_37621 = (state_37706[(10)]);
var inst_37621__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_37706__$1 = (function (){var statearr_37734 = state_37706;
(statearr_37734[(10)] = inst_37621__$1);

return statearr_37734;
})();
if(cljs.core.truth_(inst_37621__$1)){
var statearr_37735_37776 = state_37706__$1;
(statearr_37735_37776[(1)] = (5));

} else {
var statearr_37736_37777 = state_37706__$1;
(statearr_37736_37777[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (23))){
var inst_37664 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_37706__$1 = state_37706;
if(cljs.core.truth_(inst_37664)){
var statearr_37737_37778 = state_37706__$1;
(statearr_37737_37778[(1)] = (25));

} else {
var statearr_37738_37779 = state_37706__$1;
(statearr_37738_37779[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (35))){
var state_37706__$1 = state_37706;
var statearr_37739_37780 = state_37706__$1;
(statearr_37739_37780[(2)] = null);

(statearr_37739_37780[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (19))){
var inst_37659 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_37706__$1 = state_37706;
if(cljs.core.truth_(inst_37659)){
var statearr_37740_37781 = state_37706__$1;
(statearr_37740_37781[(1)] = (22));

} else {
var statearr_37741_37782 = state_37706__$1;
(statearr_37741_37782[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (11))){
var inst_37630 = (state_37706[(2)]);
var state_37706__$1 = state_37706;
var statearr_37742_37783 = state_37706__$1;
(statearr_37742_37783[(2)] = inst_37630);

(statearr_37742_37783[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (9))){
var inst_37632 = figwheel.client.heads_up.clear.call(null);
var state_37706__$1 = state_37706;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37706__$1,(12),inst_37632);
} else {
if((state_val_37707 === (5))){
var inst_37623 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_37706__$1 = state_37706;
var statearr_37743_37784 = state_37706__$1;
(statearr_37743_37784[(2)] = inst_37623);

(statearr_37743_37784[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (14))){
var inst_37650 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_37706__$1 = state_37706;
if(cljs.core.truth_(inst_37650)){
var statearr_37744_37785 = state_37706__$1;
(statearr_37744_37785[(1)] = (18));

} else {
var statearr_37745_37786 = state_37706__$1;
(statearr_37745_37786[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (26))){
var inst_37676 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_37706__$1 = state_37706;
if(cljs.core.truth_(inst_37676)){
var statearr_37746_37787 = state_37706__$1;
(statearr_37746_37787[(1)] = (30));

} else {
var statearr_37747_37788 = state_37706__$1;
(statearr_37747_37788[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (16))){
var inst_37642 = (state_37706[(2)]);
var inst_37643 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37644 = figwheel.client.heads_up.display_exception.call(null,inst_37643);
var state_37706__$1 = (function (){var statearr_37748 = state_37706;
(statearr_37748[(13)] = inst_37642);

return statearr_37748;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37706__$1,(17),inst_37644);
} else {
if((state_val_37707 === (30))){
var inst_37678 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37679 = figwheel.client.heads_up.display_warning.call(null,inst_37678);
var state_37706__$1 = state_37706;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37706__$1,(33),inst_37679);
} else {
if((state_val_37707 === (10))){
var inst_37636 = (state_37706[(2)]);
var state_37706__$1 = state_37706;
var statearr_37749_37789 = state_37706__$1;
(statearr_37749_37789[(2)] = inst_37636);

(statearr_37749_37789[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (18))){
var inst_37652 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37653 = figwheel.client.heads_up.display_exception.call(null,inst_37652);
var state_37706__$1 = state_37706;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37706__$1,(21),inst_37653);
} else {
if((state_val_37707 === (37))){
var inst_37689 = (state_37706[(2)]);
var state_37706__$1 = state_37706;
var statearr_37750_37790 = state_37706__$1;
(statearr_37750_37790[(2)] = inst_37689);

(statearr_37750_37790[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (8))){
var inst_37628 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37706__$1 = state_37706;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37706__$1,(11),inst_37628);
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
});})(c__33471__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__33383__auto__,c__33471__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33384__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33384__auto____0 = (function (){
var statearr_37751 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37751[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33384__auto__);

(statearr_37751[(1)] = (1));

return statearr_37751;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33384__auto____1 = (function (state_37706){
while(true){
var ret_value__33385__auto__ = (function (){try{while(true){
var result__33386__auto__ = switch__33383__auto__.call(null,state_37706);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33386__auto__;
}
break;
}
}catch (e37752){if((e37752 instanceof Object)){
var ex__33387__auto__ = e37752;
var statearr_37753_37791 = state_37706;
(statearr_37753_37791[(5)] = ex__33387__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37706);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37752;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37792 = state_37706;
state_37706 = G__37792;
continue;
} else {
return ret_value__33385__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33384__auto__ = function(state_37706){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33384__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33384__auto____1.call(this,state_37706);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33384__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33384__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33384__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33384__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33384__auto__;
})()
;})(switch__33383__auto__,c__33471__auto__,msg_hist,msg_names,msg))
})();
var state__33473__auto__ = (function (){var statearr_37754 = f__33472__auto__.call(null);
(statearr_37754[(6)] = c__33471__auto__);

return statearr_37754;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33473__auto__);
});})(c__33471__auto__,msg_hist,msg_names,msg))
);

return c__33471__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__33471__auto___37821 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33471__auto___37821,ch){
return (function (){
var f__33472__auto__ = (function (){var switch__33383__auto__ = ((function (c__33471__auto___37821,ch){
return (function (state_37807){
var state_val_37808 = (state_37807[(1)]);
if((state_val_37808 === (1))){
var state_37807__$1 = state_37807;
var statearr_37809_37822 = state_37807__$1;
(statearr_37809_37822[(2)] = null);

(statearr_37809_37822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37808 === (2))){
var state_37807__$1 = state_37807;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37807__$1,(4),ch);
} else {
if((state_val_37808 === (3))){
var inst_37805 = (state_37807[(2)]);
var state_37807__$1 = state_37807;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37807__$1,inst_37805);
} else {
if((state_val_37808 === (4))){
var inst_37795 = (state_37807[(7)]);
var inst_37795__$1 = (state_37807[(2)]);
var state_37807__$1 = (function (){var statearr_37810 = state_37807;
(statearr_37810[(7)] = inst_37795__$1);

return statearr_37810;
})();
if(cljs.core.truth_(inst_37795__$1)){
var statearr_37811_37823 = state_37807__$1;
(statearr_37811_37823[(1)] = (5));

} else {
var statearr_37812_37824 = state_37807__$1;
(statearr_37812_37824[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37808 === (5))){
var inst_37795 = (state_37807[(7)]);
var inst_37797 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_37795);
var state_37807__$1 = state_37807;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37807__$1,(8),inst_37797);
} else {
if((state_val_37808 === (6))){
var state_37807__$1 = state_37807;
var statearr_37813_37825 = state_37807__$1;
(statearr_37813_37825[(2)] = null);

(statearr_37813_37825[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37808 === (7))){
var inst_37803 = (state_37807[(2)]);
var state_37807__$1 = state_37807;
var statearr_37814_37826 = state_37807__$1;
(statearr_37814_37826[(2)] = inst_37803);

(statearr_37814_37826[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37808 === (8))){
var inst_37799 = (state_37807[(2)]);
var state_37807__$1 = (function (){var statearr_37815 = state_37807;
(statearr_37815[(8)] = inst_37799);

return statearr_37815;
})();
var statearr_37816_37827 = state_37807__$1;
(statearr_37816_37827[(2)] = null);

(statearr_37816_37827[(1)] = (2));


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
});})(c__33471__auto___37821,ch))
;
return ((function (switch__33383__auto__,c__33471__auto___37821,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__33384__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__33384__auto____0 = (function (){
var statearr_37817 = [null,null,null,null,null,null,null,null,null];
(statearr_37817[(0)] = figwheel$client$heads_up_plugin_$_state_machine__33384__auto__);

(statearr_37817[(1)] = (1));

return statearr_37817;
});
var figwheel$client$heads_up_plugin_$_state_machine__33384__auto____1 = (function (state_37807){
while(true){
var ret_value__33385__auto__ = (function (){try{while(true){
var result__33386__auto__ = switch__33383__auto__.call(null,state_37807);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33386__auto__;
}
break;
}
}catch (e37818){if((e37818 instanceof Object)){
var ex__33387__auto__ = e37818;
var statearr_37819_37828 = state_37807;
(statearr_37819_37828[(5)] = ex__33387__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37807);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37818;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37829 = state_37807;
state_37807 = G__37829;
continue;
} else {
return ret_value__33385__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__33384__auto__ = function(state_37807){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__33384__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__33384__auto____1.call(this,state_37807);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__33384__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__33384__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__33384__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__33384__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__33384__auto__;
})()
;})(switch__33383__auto__,c__33471__auto___37821,ch))
})();
var state__33473__auto__ = (function (){var statearr_37820 = f__33472__auto__.call(null);
(statearr_37820[(6)] = c__33471__auto___37821);

return statearr_37820;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33473__auto__);
});})(c__33471__auto___37821,ch))
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
var c__33471__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33471__auto__){
return (function (){
var f__33472__auto__ = (function (){var switch__33383__auto__ = ((function (c__33471__auto__){
return (function (state_37835){
var state_val_37836 = (state_37835[(1)]);
if((state_val_37836 === (1))){
var inst_37830 = cljs.core.async.timeout.call(null,(3000));
var state_37835__$1 = state_37835;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37835__$1,(2),inst_37830);
} else {
if((state_val_37836 === (2))){
var inst_37832 = (state_37835[(2)]);
var inst_37833 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_37835__$1 = (function (){var statearr_37837 = state_37835;
(statearr_37837[(7)] = inst_37832);

return statearr_37837;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37835__$1,inst_37833);
} else {
return null;
}
}
});})(c__33471__auto__))
;
return ((function (switch__33383__auto__,c__33471__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__33384__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__33384__auto____0 = (function (){
var statearr_37838 = [null,null,null,null,null,null,null,null];
(statearr_37838[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__33384__auto__);

(statearr_37838[(1)] = (1));

return statearr_37838;
});
var figwheel$client$enforce_project_plugin_$_state_machine__33384__auto____1 = (function (state_37835){
while(true){
var ret_value__33385__auto__ = (function (){try{while(true){
var result__33386__auto__ = switch__33383__auto__.call(null,state_37835);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33386__auto__;
}
break;
}
}catch (e37839){if((e37839 instanceof Object)){
var ex__33387__auto__ = e37839;
var statearr_37840_37842 = state_37835;
(statearr_37840_37842[(5)] = ex__33387__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37835);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37839;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37843 = state_37835;
state_37835 = G__37843;
continue;
} else {
return ret_value__33385__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__33384__auto__ = function(state_37835){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__33384__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__33384__auto____1.call(this,state_37835);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__33384__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__33384__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__33384__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__33384__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__33384__auto__;
})()
;})(switch__33383__auto__,c__33471__auto__))
})();
var state__33473__auto__ = (function (){var statearr_37841 = f__33472__auto__.call(null);
(statearr_37841[(6)] = c__33471__auto__);

return statearr_37841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33473__auto__);
});})(c__33471__auto__))
);

return c__33471__auto__;
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
var c__33471__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33471__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__33472__auto__ = (function (){var switch__33383__auto__ = ((function (c__33471__auto__,figwheel_version,temp__4657__auto__){
return (function (state_37850){
var state_val_37851 = (state_37850[(1)]);
if((state_val_37851 === (1))){
var inst_37844 = cljs.core.async.timeout.call(null,(2000));
var state_37850__$1 = state_37850;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37850__$1,(2),inst_37844);
} else {
if((state_val_37851 === (2))){
var inst_37846 = (state_37850[(2)]);
var inst_37847 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Client Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong> is not equal to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Sidecar Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".  Shutting down Websocket Connection!"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<h4>To fix try:</h4>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_37848 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_37847);
var state_37850__$1 = (function (){var statearr_37852 = state_37850;
(statearr_37852[(7)] = inst_37846);

return statearr_37852;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37850__$1,inst_37848);
} else {
return null;
}
}
});})(c__33471__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__33383__auto__,c__33471__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33384__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33384__auto____0 = (function (){
var statearr_37853 = [null,null,null,null,null,null,null,null];
(statearr_37853[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33384__auto__);

(statearr_37853[(1)] = (1));

return statearr_37853;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33384__auto____1 = (function (state_37850){
while(true){
var ret_value__33385__auto__ = (function (){try{while(true){
var result__33386__auto__ = switch__33383__auto__.call(null,state_37850);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33386__auto__;
}
break;
}
}catch (e37854){if((e37854 instanceof Object)){
var ex__33387__auto__ = e37854;
var statearr_37855_37857 = state_37850;
(statearr_37855_37857[(5)] = ex__33387__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37850);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37854;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37858 = state_37850;
state_37850 = G__37858;
continue;
} else {
return ret_value__33385__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33384__auto__ = function(state_37850){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33384__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33384__auto____1.call(this,state_37850);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33384__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33384__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33384__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33384__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33384__auto__;
})()
;})(switch__33383__auto__,c__33471__auto__,figwheel_version,temp__4657__auto__))
})();
var state__33473__auto__ = (function (){var statearr_37856 = f__33472__auto__.call(null);
(statearr_37856[(6)] = c__33471__auto__);

return statearr_37856;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33473__auto__);
});})(c__33471__auto__,figwheel_version,temp__4657__auto__))
);

return c__33471__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__37859){
var map__37860 = p__37859;
var map__37860__$1 = ((((!((map__37860 == null)))?((((map__37860.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37860.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37860):map__37860);
var file = cljs.core.get.call(null,map__37860__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37860__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37860__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__37862 = "";
var G__37862__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37862),cljs.core.str.cljs$core$IFn$_invoke$arity$1("file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__37862);
var G__37862__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37862__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__37862__$1);
if(cljs.core.truth_((function (){var and__27042__auto__ = line;
if(cljs.core.truth_(and__27042__auto__)){
return column;
} else {
return and__27042__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37862__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__37862__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__37863){
var map__37864 = p__37863;
var map__37864__$1 = ((((!((map__37864 == null)))?((((map__37864.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37864.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37864):map__37864);
var ed = map__37864__$1;
var formatted_exception = cljs.core.get.call(null,map__37864__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__37864__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__37864__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__37866_37870 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__37867_37871 = null;
var count__37868_37872 = (0);
var i__37869_37873 = (0);
while(true){
if((i__37869_37873 < count__37868_37872)){
var msg_37874 = cljs.core._nth.call(null,chunk__37867_37871,i__37869_37873);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37874);

var G__37875 = seq__37866_37870;
var G__37876 = chunk__37867_37871;
var G__37877 = count__37868_37872;
var G__37878 = (i__37869_37873 + (1));
seq__37866_37870 = G__37875;
chunk__37867_37871 = G__37876;
count__37868_37872 = G__37877;
i__37869_37873 = G__37878;
continue;
} else {
var temp__4657__auto___37879 = cljs.core.seq.call(null,seq__37866_37870);
if(temp__4657__auto___37879){
var seq__37866_37880__$1 = temp__4657__auto___37879;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37866_37880__$1)){
var c__27874__auto___37881 = cljs.core.chunk_first.call(null,seq__37866_37880__$1);
var G__37882 = cljs.core.chunk_rest.call(null,seq__37866_37880__$1);
var G__37883 = c__27874__auto___37881;
var G__37884 = cljs.core.count.call(null,c__27874__auto___37881);
var G__37885 = (0);
seq__37866_37870 = G__37882;
chunk__37867_37871 = G__37883;
count__37868_37872 = G__37884;
i__37869_37873 = G__37885;
continue;
} else {
var msg_37886 = cljs.core.first.call(null,seq__37866_37880__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37886);

var G__37887 = cljs.core.next.call(null,seq__37866_37880__$1);
var G__37888 = null;
var G__37889 = (0);
var G__37890 = (0);
seq__37866_37870 = G__37887;
chunk__37867_37871 = G__37888;
count__37868_37872 = G__37889;
i__37869_37873 = G__37890;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__37891){
var map__37892 = p__37891;
var map__37892__$1 = ((((!((map__37892 == null)))?((((map__37892.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37892.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37892):map__37892);
var w = map__37892__$1;
var message = cljs.core.get.call(null,map__37892__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__27042__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__27042__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__27042__auto__;
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
var seq__37894 = cljs.core.seq.call(null,plugins);
var chunk__37895 = null;
var count__37896 = (0);
var i__37897 = (0);
while(true){
if((i__37897 < count__37896)){
var vec__37898 = cljs.core._nth.call(null,chunk__37895,i__37897);
var k = cljs.core.nth.call(null,vec__37898,(0),null);
var plugin = cljs.core.nth.call(null,vec__37898,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37904 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37894,chunk__37895,count__37896,i__37897,pl_37904,vec__37898,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_37904.call(null,msg_hist);
});})(seq__37894,chunk__37895,count__37896,i__37897,pl_37904,vec__37898,k,plugin))
);
} else {
}

var G__37905 = seq__37894;
var G__37906 = chunk__37895;
var G__37907 = count__37896;
var G__37908 = (i__37897 + (1));
seq__37894 = G__37905;
chunk__37895 = G__37906;
count__37896 = G__37907;
i__37897 = G__37908;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37894);
if(temp__4657__auto__){
var seq__37894__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37894__$1)){
var c__27874__auto__ = cljs.core.chunk_first.call(null,seq__37894__$1);
var G__37909 = cljs.core.chunk_rest.call(null,seq__37894__$1);
var G__37910 = c__27874__auto__;
var G__37911 = cljs.core.count.call(null,c__27874__auto__);
var G__37912 = (0);
seq__37894 = G__37909;
chunk__37895 = G__37910;
count__37896 = G__37911;
i__37897 = G__37912;
continue;
} else {
var vec__37901 = cljs.core.first.call(null,seq__37894__$1);
var k = cljs.core.nth.call(null,vec__37901,(0),null);
var plugin = cljs.core.nth.call(null,vec__37901,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37913 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37894,chunk__37895,count__37896,i__37897,pl_37913,vec__37901,k,plugin,seq__37894__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_37913.call(null,msg_hist);
});})(seq__37894,chunk__37895,count__37896,i__37897,pl_37913,vec__37901,k,plugin,seq__37894__$1,temp__4657__auto__))
);
} else {
}

var G__37914 = cljs.core.next.call(null,seq__37894__$1);
var G__37915 = null;
var G__37916 = (0);
var G__37917 = (0);
seq__37894 = G__37914;
chunk__37895 = G__37915;
count__37896 = G__37916;
i__37897 = G__37917;
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
var G__37919 = arguments.length;
switch (G__37919) {
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

var seq__37920_37925 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__37921_37926 = null;
var count__37922_37927 = (0);
var i__37923_37928 = (0);
while(true){
if((i__37923_37928 < count__37922_37927)){
var msg_37929 = cljs.core._nth.call(null,chunk__37921_37926,i__37923_37928);
figwheel.client.socket.handle_incoming_message.call(null,msg_37929);

var G__37930 = seq__37920_37925;
var G__37931 = chunk__37921_37926;
var G__37932 = count__37922_37927;
var G__37933 = (i__37923_37928 + (1));
seq__37920_37925 = G__37930;
chunk__37921_37926 = G__37931;
count__37922_37927 = G__37932;
i__37923_37928 = G__37933;
continue;
} else {
var temp__4657__auto___37934 = cljs.core.seq.call(null,seq__37920_37925);
if(temp__4657__auto___37934){
var seq__37920_37935__$1 = temp__4657__auto___37934;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37920_37935__$1)){
var c__27874__auto___37936 = cljs.core.chunk_first.call(null,seq__37920_37935__$1);
var G__37937 = cljs.core.chunk_rest.call(null,seq__37920_37935__$1);
var G__37938 = c__27874__auto___37936;
var G__37939 = cljs.core.count.call(null,c__27874__auto___37936);
var G__37940 = (0);
seq__37920_37925 = G__37937;
chunk__37921_37926 = G__37938;
count__37922_37927 = G__37939;
i__37923_37928 = G__37940;
continue;
} else {
var msg_37941 = cljs.core.first.call(null,seq__37920_37935__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_37941);

var G__37942 = cljs.core.next.call(null,seq__37920_37935__$1);
var G__37943 = null;
var G__37944 = (0);
var G__37945 = (0);
seq__37920_37925 = G__37942;
chunk__37921_37926 = G__37943;
count__37922_37927 = G__37944;
i__37923_37928 = G__37945;
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
var args__28186__auto__ = [];
var len__28179__auto___37950 = arguments.length;
var i__28180__auto___37951 = (0);
while(true){
if((i__28180__auto___37951 < len__28179__auto___37950)){
args__28186__auto__.push((arguments[i__28180__auto___37951]));

var G__37952 = (i__28180__auto___37951 + (1));
i__28180__auto___37951 = G__37952;
continue;
} else {
}
break;
}

var argseq__28187__auto__ = ((((0) < args__28186__auto__.length))?(new cljs.core.IndexedSeq(args__28186__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__28187__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__37947){
var map__37948 = p__37947;
var map__37948__$1 = ((((!((map__37948 == null)))?((((map__37948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37948.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37948):map__37948);
var opts = map__37948__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq37946){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37946));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e37953){if((e37953 instanceof Error)){
var e = e37953;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e37953;

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
return (function (p__37954){
var map__37955 = p__37954;
var map__37955__$1 = ((((!((map__37955 == null)))?((((map__37955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37955.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37955):map__37955);
var msg_name = cljs.core.get.call(null,map__37955__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1502330257410