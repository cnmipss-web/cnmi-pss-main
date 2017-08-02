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
var G__37316 = arguments.length;
switch (G__37316) {
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
var len__28177__auto___37319 = arguments.length;
var i__28178__auto___37320 = (0);
while(true){
if((i__28178__auto___37320 < len__28177__auto___37319)){
args__28184__auto__.push((arguments[i__28178__auto___37320]));

var G__37321 = (i__28178__auto___37320 + (1));
i__28178__auto___37320 = G__37321;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq37318){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37318));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__28184__auto__ = [];
var len__28177__auto___37323 = arguments.length;
var i__28178__auto___37324 = (0);
while(true){
if((i__28178__auto___37324 < len__28177__auto___37323)){
args__28184__auto__.push((arguments[i__28178__auto___37324]));

var G__37325 = (i__28178__auto___37324 + (1));
i__28178__auto___37324 = G__37325;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq37322){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37322));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__37326){
var map__37327 = p__37326;
var map__37327__$1 = ((((!((map__37327 == null)))?((((map__37327.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37327.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37327):map__37327);
var message = cljs.core.get.call(null,map__37327__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__37327__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__33315__auto___37406 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33315__auto___37406,ch){
return (function (){
var f__33316__auto__ = (function (){var switch__33227__auto__ = ((function (c__33315__auto___37406,ch){
return (function (state_37378){
var state_val_37379 = (state_37378[(1)]);
if((state_val_37379 === (7))){
var inst_37374 = (state_37378[(2)]);
var state_37378__$1 = state_37378;
var statearr_37380_37407 = state_37378__$1;
(statearr_37380_37407[(2)] = inst_37374);

(statearr_37380_37407[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37379 === (1))){
var state_37378__$1 = state_37378;
var statearr_37381_37408 = state_37378__$1;
(statearr_37381_37408[(2)] = null);

(statearr_37381_37408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37379 === (4))){
var inst_37331 = (state_37378[(7)]);
var inst_37331__$1 = (state_37378[(2)]);
var state_37378__$1 = (function (){var statearr_37382 = state_37378;
(statearr_37382[(7)] = inst_37331__$1);

return statearr_37382;
})();
if(cljs.core.truth_(inst_37331__$1)){
var statearr_37383_37409 = state_37378__$1;
(statearr_37383_37409[(1)] = (5));

} else {
var statearr_37384_37410 = state_37378__$1;
(statearr_37384_37410[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37379 === (15))){
var inst_37338 = (state_37378[(8)]);
var inst_37353 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37338);
var inst_37354 = cljs.core.first.call(null,inst_37353);
var inst_37355 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_37354);
var inst_37356 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not loading code with warnings - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37355)].join('');
var inst_37357 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_37356);
var state_37378__$1 = state_37378;
var statearr_37385_37411 = state_37378__$1;
(statearr_37385_37411[(2)] = inst_37357);

(statearr_37385_37411[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37379 === (13))){
var inst_37362 = (state_37378[(2)]);
var state_37378__$1 = state_37378;
var statearr_37386_37412 = state_37378__$1;
(statearr_37386_37412[(2)] = inst_37362);

(statearr_37386_37412[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37379 === (6))){
var state_37378__$1 = state_37378;
var statearr_37387_37413 = state_37378__$1;
(statearr_37387_37413[(2)] = null);

(statearr_37387_37413[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37379 === (17))){
var inst_37360 = (state_37378[(2)]);
var state_37378__$1 = state_37378;
var statearr_37388_37414 = state_37378__$1;
(statearr_37388_37414[(2)] = inst_37360);

(statearr_37388_37414[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37379 === (3))){
var inst_37376 = (state_37378[(2)]);
var state_37378__$1 = state_37378;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37378__$1,inst_37376);
} else {
if((state_val_37379 === (12))){
var inst_37337 = (state_37378[(9)]);
var inst_37351 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_37337,opts);
var state_37378__$1 = state_37378;
if(cljs.core.truth_(inst_37351)){
var statearr_37389_37415 = state_37378__$1;
(statearr_37389_37415[(1)] = (15));

} else {
var statearr_37390_37416 = state_37378__$1;
(statearr_37390_37416[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37379 === (2))){
var state_37378__$1 = state_37378;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37378__$1,(4),ch);
} else {
if((state_val_37379 === (11))){
var inst_37338 = (state_37378[(8)]);
var inst_37343 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37344 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_37338);
var inst_37345 = cljs.core.async.timeout.call(null,(1000));
var inst_37346 = [inst_37344,inst_37345];
var inst_37347 = (new cljs.core.PersistentVector(null,2,(5),inst_37343,inst_37346,null));
var state_37378__$1 = state_37378;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37378__$1,(14),inst_37347);
} else {
if((state_val_37379 === (9))){
var inst_37338 = (state_37378[(8)]);
var inst_37364 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_37365 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37338);
var inst_37366 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37365);
var inst_37367 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Not loading: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37366)].join('');
var inst_37368 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_37367);
var state_37378__$1 = (function (){var statearr_37391 = state_37378;
(statearr_37391[(10)] = inst_37364);

return statearr_37391;
})();
var statearr_37392_37417 = state_37378__$1;
(statearr_37392_37417[(2)] = inst_37368);

(statearr_37392_37417[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37379 === (5))){
var inst_37331 = (state_37378[(7)]);
var inst_37333 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_37334 = (new cljs.core.PersistentArrayMap(null,2,inst_37333,null));
var inst_37335 = (new cljs.core.PersistentHashSet(null,inst_37334,null));
var inst_37336 = figwheel.client.focus_msgs.call(null,inst_37335,inst_37331);
var inst_37337 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_37336);
var inst_37338 = cljs.core.first.call(null,inst_37336);
var inst_37339 = figwheel.client.autoload_QMARK_.call(null);
var state_37378__$1 = (function (){var statearr_37393 = state_37378;
(statearr_37393[(9)] = inst_37337);

(statearr_37393[(8)] = inst_37338);

return statearr_37393;
})();
if(cljs.core.truth_(inst_37339)){
var statearr_37394_37418 = state_37378__$1;
(statearr_37394_37418[(1)] = (8));

} else {
var statearr_37395_37419 = state_37378__$1;
(statearr_37395_37419[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37379 === (14))){
var inst_37349 = (state_37378[(2)]);
var state_37378__$1 = state_37378;
var statearr_37396_37420 = state_37378__$1;
(statearr_37396_37420[(2)] = inst_37349);

(statearr_37396_37420[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37379 === (16))){
var state_37378__$1 = state_37378;
var statearr_37397_37421 = state_37378__$1;
(statearr_37397_37421[(2)] = null);

(statearr_37397_37421[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37379 === (10))){
var inst_37370 = (state_37378[(2)]);
var state_37378__$1 = (function (){var statearr_37398 = state_37378;
(statearr_37398[(11)] = inst_37370);

return statearr_37398;
})();
var statearr_37399_37422 = state_37378__$1;
(statearr_37399_37422[(2)] = null);

(statearr_37399_37422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37379 === (8))){
var inst_37337 = (state_37378[(9)]);
var inst_37341 = figwheel.client.reload_file_state_QMARK_.call(null,inst_37337,opts);
var state_37378__$1 = state_37378;
if(cljs.core.truth_(inst_37341)){
var statearr_37400_37423 = state_37378__$1;
(statearr_37400_37423[(1)] = (11));

} else {
var statearr_37401_37424 = state_37378__$1;
(statearr_37401_37424[(1)] = (12));

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
});})(c__33315__auto___37406,ch))
;
return ((function (switch__33227__auto__,c__33315__auto___37406,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__33228__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__33228__auto____0 = (function (){
var statearr_37402 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37402[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__33228__auto__);

(statearr_37402[(1)] = (1));

return statearr_37402;
});
var figwheel$client$file_reloader_plugin_$_state_machine__33228__auto____1 = (function (state_37378){
while(true){
var ret_value__33229__auto__ = (function (){try{while(true){
var result__33230__auto__ = switch__33227__auto__.call(null,state_37378);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33230__auto__;
}
break;
}
}catch (e37403){if((e37403 instanceof Object)){
var ex__33231__auto__ = e37403;
var statearr_37404_37425 = state_37378;
(statearr_37404_37425[(5)] = ex__33231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37378);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37403;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37426 = state_37378;
state_37378 = G__37426;
continue;
} else {
return ret_value__33229__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__33228__auto__ = function(state_37378){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__33228__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__33228__auto____1.call(this,state_37378);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__33228__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__33228__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__33228__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__33228__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__33228__auto__;
})()
;})(switch__33227__auto__,c__33315__auto___37406,ch))
})();
var state__33317__auto__ = (function (){var statearr_37405 = f__33316__auto__.call(null);
(statearr_37405[(6)] = c__33315__auto___37406);

return statearr_37405;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33317__auto__);
});})(c__33315__auto___37406,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__37427_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__37427_SHARP_));
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
var base_path_37429 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_37429){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e37428){if((e37428 instanceof Error)){
var e = e37428;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_37429], null));
} else {
var e = e37428;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_37429))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__37430){
var map__37431 = p__37430;
var map__37431__$1 = ((((!((map__37431 == null)))?((((map__37431.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37431.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37431):map__37431);
var opts = map__37431__$1;
var build_id = cljs.core.get.call(null,map__37431__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__37431,map__37431__$1,opts,build_id){
return (function (p__37433){
var vec__37434 = p__37433;
var seq__37435 = cljs.core.seq.call(null,vec__37434);
var first__37436 = cljs.core.first.call(null,seq__37435);
var seq__37435__$1 = cljs.core.next.call(null,seq__37435);
var map__37437 = first__37436;
var map__37437__$1 = ((((!((map__37437 == null)))?((((map__37437.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37437.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37437):map__37437);
var msg = map__37437__$1;
var msg_name = cljs.core.get.call(null,map__37437__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37435__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__37434,seq__37435,first__37436,seq__37435__$1,map__37437,map__37437__$1,msg,msg_name,_,map__37431,map__37431__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__37434,seq__37435,first__37436,seq__37435__$1,map__37437,map__37437__$1,msg,msg_name,_,map__37431,map__37431__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__37431,map__37431__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__37439){
var vec__37440 = p__37439;
var seq__37441 = cljs.core.seq.call(null,vec__37440);
var first__37442 = cljs.core.first.call(null,seq__37441);
var seq__37441__$1 = cljs.core.next.call(null,seq__37441);
var map__37443 = first__37442;
var map__37443__$1 = ((((!((map__37443 == null)))?((((map__37443.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37443.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37443):map__37443);
var msg = map__37443__$1;
var msg_name = cljs.core.get.call(null,map__37443__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37441__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__37445){
var map__37446 = p__37445;
var map__37446__$1 = ((((!((map__37446 == null)))?((((map__37446.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37446.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37446):map__37446);
var on_compile_warning = cljs.core.get.call(null,map__37446__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__37446__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__37446,map__37446__$1,on_compile_warning,on_compile_fail){
return (function (p__37448){
var vec__37449 = p__37448;
var seq__37450 = cljs.core.seq.call(null,vec__37449);
var first__37451 = cljs.core.first.call(null,seq__37450);
var seq__37450__$1 = cljs.core.next.call(null,seq__37450);
var map__37452 = first__37451;
var map__37452__$1 = ((((!((map__37452 == null)))?((((map__37452.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37452.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37452):map__37452);
var msg = map__37452__$1;
var msg_name = cljs.core.get.call(null,map__37452__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37450__$1;
var pred__37454 = cljs.core._EQ_;
var expr__37455 = msg_name;
if(cljs.core.truth_(pred__37454.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__37455))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__37454.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__37455))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__37446,map__37446__$1,on_compile_warning,on_compile_fail))
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
var c__33315__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33315__auto__,msg_hist,msg_names,msg){
return (function (){
var f__33316__auto__ = (function (){var switch__33227__auto__ = ((function (c__33315__auto__,msg_hist,msg_names,msg){
return (function (state_37544){
var state_val_37545 = (state_37544[(1)]);
if((state_val_37545 === (7))){
var inst_37464 = (state_37544[(2)]);
var state_37544__$1 = state_37544;
if(cljs.core.truth_(inst_37464)){
var statearr_37546_37593 = state_37544__$1;
(statearr_37546_37593[(1)] = (8));

} else {
var statearr_37547_37594 = state_37544__$1;
(statearr_37547_37594[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37545 === (20))){
var inst_37538 = (state_37544[(2)]);
var state_37544__$1 = state_37544;
var statearr_37548_37595 = state_37544__$1;
(statearr_37548_37595[(2)] = inst_37538);

(statearr_37548_37595[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37545 === (27))){
var inst_37534 = (state_37544[(2)]);
var state_37544__$1 = state_37544;
var statearr_37549_37596 = state_37544__$1;
(statearr_37549_37596[(2)] = inst_37534);

(statearr_37549_37596[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37545 === (1))){
var inst_37457 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_37544__$1 = state_37544;
if(cljs.core.truth_(inst_37457)){
var statearr_37550_37597 = state_37544__$1;
(statearr_37550_37597[(1)] = (2));

} else {
var statearr_37551_37598 = state_37544__$1;
(statearr_37551_37598[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37545 === (24))){
var inst_37536 = (state_37544[(2)]);
var state_37544__$1 = state_37544;
var statearr_37552_37599 = state_37544__$1;
(statearr_37552_37599[(2)] = inst_37536);

(statearr_37552_37599[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37545 === (4))){
var inst_37542 = (state_37544[(2)]);
var state_37544__$1 = state_37544;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37544__$1,inst_37542);
} else {
if((state_val_37545 === (15))){
var inst_37540 = (state_37544[(2)]);
var state_37544__$1 = state_37544;
var statearr_37553_37600 = state_37544__$1;
(statearr_37553_37600[(2)] = inst_37540);

(statearr_37553_37600[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37545 === (21))){
var inst_37493 = (state_37544[(2)]);
var inst_37494 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37495 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37494);
var state_37544__$1 = (function (){var statearr_37554 = state_37544;
(statearr_37554[(7)] = inst_37493);

return statearr_37554;
})();
var statearr_37555_37601 = state_37544__$1;
(statearr_37555_37601[(2)] = inst_37495);

(statearr_37555_37601[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37545 === (31))){
var inst_37523 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_37544__$1 = state_37544;
if(cljs.core.truth_(inst_37523)){
var statearr_37556_37602 = state_37544__$1;
(statearr_37556_37602[(1)] = (34));

} else {
var statearr_37557_37603 = state_37544__$1;
(statearr_37557_37603[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37545 === (32))){
var inst_37532 = (state_37544[(2)]);
var state_37544__$1 = state_37544;
var statearr_37558_37604 = state_37544__$1;
(statearr_37558_37604[(2)] = inst_37532);

(statearr_37558_37604[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37545 === (33))){
var inst_37519 = (state_37544[(2)]);
var inst_37520 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37521 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37520);
var state_37544__$1 = (function (){var statearr_37559 = state_37544;
(statearr_37559[(8)] = inst_37519);

return statearr_37559;
})();
var statearr_37560_37605 = state_37544__$1;
(statearr_37560_37605[(2)] = inst_37521);

(statearr_37560_37605[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37545 === (13))){
var inst_37478 = figwheel.client.heads_up.clear.call(null);
var state_37544__$1 = state_37544;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37544__$1,(16),inst_37478);
} else {
if((state_val_37545 === (22))){
var inst_37499 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37500 = figwheel.client.heads_up.append_warning_message.call(null,inst_37499);
var state_37544__$1 = state_37544;
var statearr_37561_37606 = state_37544__$1;
(statearr_37561_37606[(2)] = inst_37500);

(statearr_37561_37606[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37545 === (36))){
var inst_37530 = (state_37544[(2)]);
var state_37544__$1 = state_37544;
var statearr_37562_37607 = state_37544__$1;
(statearr_37562_37607[(2)] = inst_37530);

(statearr_37562_37607[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37545 === (29))){
var inst_37510 = (state_37544[(2)]);
var inst_37511 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37512 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37511);
var state_37544__$1 = (function (){var statearr_37563 = state_37544;
(statearr_37563[(9)] = inst_37510);

return statearr_37563;
})();
var statearr_37564_37608 = state_37544__$1;
(statearr_37564_37608[(2)] = inst_37512);

(statearr_37564_37608[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37545 === (6))){
var inst_37459 = (state_37544[(10)]);
var state_37544__$1 = state_37544;
var statearr_37565_37609 = state_37544__$1;
(statearr_37565_37609[(2)] = inst_37459);

(statearr_37565_37609[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37545 === (28))){
var inst_37506 = (state_37544[(2)]);
var inst_37507 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37508 = figwheel.client.heads_up.display_warning.call(null,inst_37507);
var state_37544__$1 = (function (){var statearr_37566 = state_37544;
(statearr_37566[(11)] = inst_37506);

return statearr_37566;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37544__$1,(29),inst_37508);
} else {
if((state_val_37545 === (25))){
var inst_37504 = figwheel.client.heads_up.clear.call(null);
var state_37544__$1 = state_37544;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37544__$1,(28),inst_37504);
} else {
if((state_val_37545 === (34))){
var inst_37525 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37544__$1 = state_37544;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37544__$1,(37),inst_37525);
} else {
if((state_val_37545 === (17))){
var inst_37484 = (state_37544[(2)]);
var inst_37485 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37486 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37485);
var state_37544__$1 = (function (){var statearr_37567 = state_37544;
(statearr_37567[(12)] = inst_37484);

return statearr_37567;
})();
var statearr_37568_37610 = state_37544__$1;
(statearr_37568_37610[(2)] = inst_37486);

(statearr_37568_37610[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37545 === (3))){
var inst_37476 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_37544__$1 = state_37544;
if(cljs.core.truth_(inst_37476)){
var statearr_37569_37611 = state_37544__$1;
(statearr_37569_37611[(1)] = (13));

} else {
var statearr_37570_37612 = state_37544__$1;
(statearr_37570_37612[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37545 === (12))){
var inst_37472 = (state_37544[(2)]);
var state_37544__$1 = state_37544;
var statearr_37571_37613 = state_37544__$1;
(statearr_37571_37613[(2)] = inst_37472);

(statearr_37571_37613[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37545 === (2))){
var inst_37459 = (state_37544[(10)]);
var inst_37459__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_37544__$1 = (function (){var statearr_37572 = state_37544;
(statearr_37572[(10)] = inst_37459__$1);

return statearr_37572;
})();
if(cljs.core.truth_(inst_37459__$1)){
var statearr_37573_37614 = state_37544__$1;
(statearr_37573_37614[(1)] = (5));

} else {
var statearr_37574_37615 = state_37544__$1;
(statearr_37574_37615[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37545 === (23))){
var inst_37502 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_37544__$1 = state_37544;
if(cljs.core.truth_(inst_37502)){
var statearr_37575_37616 = state_37544__$1;
(statearr_37575_37616[(1)] = (25));

} else {
var statearr_37576_37617 = state_37544__$1;
(statearr_37576_37617[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37545 === (35))){
var state_37544__$1 = state_37544;
var statearr_37577_37618 = state_37544__$1;
(statearr_37577_37618[(2)] = null);

(statearr_37577_37618[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37545 === (19))){
var inst_37497 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_37544__$1 = state_37544;
if(cljs.core.truth_(inst_37497)){
var statearr_37578_37619 = state_37544__$1;
(statearr_37578_37619[(1)] = (22));

} else {
var statearr_37579_37620 = state_37544__$1;
(statearr_37579_37620[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37545 === (11))){
var inst_37468 = (state_37544[(2)]);
var state_37544__$1 = state_37544;
var statearr_37580_37621 = state_37544__$1;
(statearr_37580_37621[(2)] = inst_37468);

(statearr_37580_37621[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37545 === (9))){
var inst_37470 = figwheel.client.heads_up.clear.call(null);
var state_37544__$1 = state_37544;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37544__$1,(12),inst_37470);
} else {
if((state_val_37545 === (5))){
var inst_37461 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_37544__$1 = state_37544;
var statearr_37581_37622 = state_37544__$1;
(statearr_37581_37622[(2)] = inst_37461);

(statearr_37581_37622[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37545 === (14))){
var inst_37488 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_37544__$1 = state_37544;
if(cljs.core.truth_(inst_37488)){
var statearr_37582_37623 = state_37544__$1;
(statearr_37582_37623[(1)] = (18));

} else {
var statearr_37583_37624 = state_37544__$1;
(statearr_37583_37624[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37545 === (26))){
var inst_37514 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_37544__$1 = state_37544;
if(cljs.core.truth_(inst_37514)){
var statearr_37584_37625 = state_37544__$1;
(statearr_37584_37625[(1)] = (30));

} else {
var statearr_37585_37626 = state_37544__$1;
(statearr_37585_37626[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37545 === (16))){
var inst_37480 = (state_37544[(2)]);
var inst_37481 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37482 = figwheel.client.heads_up.display_exception.call(null,inst_37481);
var state_37544__$1 = (function (){var statearr_37586 = state_37544;
(statearr_37586[(13)] = inst_37480);

return statearr_37586;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37544__$1,(17),inst_37482);
} else {
if((state_val_37545 === (30))){
var inst_37516 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37517 = figwheel.client.heads_up.display_warning.call(null,inst_37516);
var state_37544__$1 = state_37544;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37544__$1,(33),inst_37517);
} else {
if((state_val_37545 === (10))){
var inst_37474 = (state_37544[(2)]);
var state_37544__$1 = state_37544;
var statearr_37587_37627 = state_37544__$1;
(statearr_37587_37627[(2)] = inst_37474);

(statearr_37587_37627[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37545 === (18))){
var inst_37490 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37491 = figwheel.client.heads_up.display_exception.call(null,inst_37490);
var state_37544__$1 = state_37544;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37544__$1,(21),inst_37491);
} else {
if((state_val_37545 === (37))){
var inst_37527 = (state_37544[(2)]);
var state_37544__$1 = state_37544;
var statearr_37588_37628 = state_37544__$1;
(statearr_37588_37628[(2)] = inst_37527);

(statearr_37588_37628[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37545 === (8))){
var inst_37466 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37544__$1 = state_37544;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37544__$1,(11),inst_37466);
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
});})(c__33315__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__33227__auto__,c__33315__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33228__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33228__auto____0 = (function (){
var statearr_37589 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37589[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33228__auto__);

(statearr_37589[(1)] = (1));

return statearr_37589;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33228__auto____1 = (function (state_37544){
while(true){
var ret_value__33229__auto__ = (function (){try{while(true){
var result__33230__auto__ = switch__33227__auto__.call(null,state_37544);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33230__auto__;
}
break;
}
}catch (e37590){if((e37590 instanceof Object)){
var ex__33231__auto__ = e37590;
var statearr_37591_37629 = state_37544;
(statearr_37591_37629[(5)] = ex__33231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37544);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37590;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37630 = state_37544;
state_37544 = G__37630;
continue;
} else {
return ret_value__33229__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33228__auto__ = function(state_37544){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33228__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33228__auto____1.call(this,state_37544);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33228__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33228__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33228__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33228__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33228__auto__;
})()
;})(switch__33227__auto__,c__33315__auto__,msg_hist,msg_names,msg))
})();
var state__33317__auto__ = (function (){var statearr_37592 = f__33316__auto__.call(null);
(statearr_37592[(6)] = c__33315__auto__);

return statearr_37592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33317__auto__);
});})(c__33315__auto__,msg_hist,msg_names,msg))
);

return c__33315__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__33315__auto___37659 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33315__auto___37659,ch){
return (function (){
var f__33316__auto__ = (function (){var switch__33227__auto__ = ((function (c__33315__auto___37659,ch){
return (function (state_37645){
var state_val_37646 = (state_37645[(1)]);
if((state_val_37646 === (1))){
var state_37645__$1 = state_37645;
var statearr_37647_37660 = state_37645__$1;
(statearr_37647_37660[(2)] = null);

(statearr_37647_37660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37646 === (2))){
var state_37645__$1 = state_37645;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37645__$1,(4),ch);
} else {
if((state_val_37646 === (3))){
var inst_37643 = (state_37645[(2)]);
var state_37645__$1 = state_37645;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37645__$1,inst_37643);
} else {
if((state_val_37646 === (4))){
var inst_37633 = (state_37645[(7)]);
var inst_37633__$1 = (state_37645[(2)]);
var state_37645__$1 = (function (){var statearr_37648 = state_37645;
(statearr_37648[(7)] = inst_37633__$1);

return statearr_37648;
})();
if(cljs.core.truth_(inst_37633__$1)){
var statearr_37649_37661 = state_37645__$1;
(statearr_37649_37661[(1)] = (5));

} else {
var statearr_37650_37662 = state_37645__$1;
(statearr_37650_37662[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37646 === (5))){
var inst_37633 = (state_37645[(7)]);
var inst_37635 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_37633);
var state_37645__$1 = state_37645;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37645__$1,(8),inst_37635);
} else {
if((state_val_37646 === (6))){
var state_37645__$1 = state_37645;
var statearr_37651_37663 = state_37645__$1;
(statearr_37651_37663[(2)] = null);

(statearr_37651_37663[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37646 === (7))){
var inst_37641 = (state_37645[(2)]);
var state_37645__$1 = state_37645;
var statearr_37652_37664 = state_37645__$1;
(statearr_37652_37664[(2)] = inst_37641);

(statearr_37652_37664[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37646 === (8))){
var inst_37637 = (state_37645[(2)]);
var state_37645__$1 = (function (){var statearr_37653 = state_37645;
(statearr_37653[(8)] = inst_37637);

return statearr_37653;
})();
var statearr_37654_37665 = state_37645__$1;
(statearr_37654_37665[(2)] = null);

(statearr_37654_37665[(1)] = (2));


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
});})(c__33315__auto___37659,ch))
;
return ((function (switch__33227__auto__,c__33315__auto___37659,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__33228__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__33228__auto____0 = (function (){
var statearr_37655 = [null,null,null,null,null,null,null,null,null];
(statearr_37655[(0)] = figwheel$client$heads_up_plugin_$_state_machine__33228__auto__);

(statearr_37655[(1)] = (1));

return statearr_37655;
});
var figwheel$client$heads_up_plugin_$_state_machine__33228__auto____1 = (function (state_37645){
while(true){
var ret_value__33229__auto__ = (function (){try{while(true){
var result__33230__auto__ = switch__33227__auto__.call(null,state_37645);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33230__auto__;
}
break;
}
}catch (e37656){if((e37656 instanceof Object)){
var ex__33231__auto__ = e37656;
var statearr_37657_37666 = state_37645;
(statearr_37657_37666[(5)] = ex__33231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37645);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37656;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37667 = state_37645;
state_37645 = G__37667;
continue;
} else {
return ret_value__33229__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__33228__auto__ = function(state_37645){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__33228__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__33228__auto____1.call(this,state_37645);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__33228__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__33228__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__33228__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__33228__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__33228__auto__;
})()
;})(switch__33227__auto__,c__33315__auto___37659,ch))
})();
var state__33317__auto__ = (function (){var statearr_37658 = f__33316__auto__.call(null);
(statearr_37658[(6)] = c__33315__auto___37659);

return statearr_37658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33317__auto__);
});})(c__33315__auto___37659,ch))
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
var c__33315__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33315__auto__){
return (function (){
var f__33316__auto__ = (function (){var switch__33227__auto__ = ((function (c__33315__auto__){
return (function (state_37673){
var state_val_37674 = (state_37673[(1)]);
if((state_val_37674 === (1))){
var inst_37668 = cljs.core.async.timeout.call(null,(3000));
var state_37673__$1 = state_37673;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37673__$1,(2),inst_37668);
} else {
if((state_val_37674 === (2))){
var inst_37670 = (state_37673[(2)]);
var inst_37671 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_37673__$1 = (function (){var statearr_37675 = state_37673;
(statearr_37675[(7)] = inst_37670);

return statearr_37675;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37673__$1,inst_37671);
} else {
return null;
}
}
});})(c__33315__auto__))
;
return ((function (switch__33227__auto__,c__33315__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__33228__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__33228__auto____0 = (function (){
var statearr_37676 = [null,null,null,null,null,null,null,null];
(statearr_37676[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__33228__auto__);

(statearr_37676[(1)] = (1));

return statearr_37676;
});
var figwheel$client$enforce_project_plugin_$_state_machine__33228__auto____1 = (function (state_37673){
while(true){
var ret_value__33229__auto__ = (function (){try{while(true){
var result__33230__auto__ = switch__33227__auto__.call(null,state_37673);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33230__auto__;
}
break;
}
}catch (e37677){if((e37677 instanceof Object)){
var ex__33231__auto__ = e37677;
var statearr_37678_37680 = state_37673;
(statearr_37678_37680[(5)] = ex__33231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37677;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37681 = state_37673;
state_37673 = G__37681;
continue;
} else {
return ret_value__33229__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__33228__auto__ = function(state_37673){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__33228__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__33228__auto____1.call(this,state_37673);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__33228__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__33228__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__33228__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__33228__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__33228__auto__;
})()
;})(switch__33227__auto__,c__33315__auto__))
})();
var state__33317__auto__ = (function (){var statearr_37679 = f__33316__auto__.call(null);
(statearr_37679[(6)] = c__33315__auto__);

return statearr_37679;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33317__auto__);
});})(c__33315__auto__))
);

return c__33315__auto__;
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
var c__33315__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33315__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__33316__auto__ = (function (){var switch__33227__auto__ = ((function (c__33315__auto__,figwheel_version,temp__4657__auto__){
return (function (state_37688){
var state_val_37689 = (state_37688[(1)]);
if((state_val_37689 === (1))){
var inst_37682 = cljs.core.async.timeout.call(null,(2000));
var state_37688__$1 = state_37688;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37688__$1,(2),inst_37682);
} else {
if((state_val_37689 === (2))){
var inst_37684 = (state_37688[(2)]);
var inst_37685 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Client Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong> is not equal to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Sidecar Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".  Shutting down Websocket Connection!"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<h4>To fix try:</h4>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_37686 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_37685);
var state_37688__$1 = (function (){var statearr_37690 = state_37688;
(statearr_37690[(7)] = inst_37684);

return statearr_37690;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37688__$1,inst_37686);
} else {
return null;
}
}
});})(c__33315__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__33227__auto__,c__33315__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33228__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33228__auto____0 = (function (){
var statearr_37691 = [null,null,null,null,null,null,null,null];
(statearr_37691[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33228__auto__);

(statearr_37691[(1)] = (1));

return statearr_37691;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33228__auto____1 = (function (state_37688){
while(true){
var ret_value__33229__auto__ = (function (){try{while(true){
var result__33230__auto__ = switch__33227__auto__.call(null,state_37688);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33230__auto__;
}
break;
}
}catch (e37692){if((e37692 instanceof Object)){
var ex__33231__auto__ = e37692;
var statearr_37693_37695 = state_37688;
(statearr_37693_37695[(5)] = ex__33231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37688);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37692;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37696 = state_37688;
state_37688 = G__37696;
continue;
} else {
return ret_value__33229__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33228__auto__ = function(state_37688){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33228__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33228__auto____1.call(this,state_37688);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33228__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33228__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33228__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33228__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33228__auto__;
})()
;})(switch__33227__auto__,c__33315__auto__,figwheel_version,temp__4657__auto__))
})();
var state__33317__auto__ = (function (){var statearr_37694 = f__33316__auto__.call(null);
(statearr_37694[(6)] = c__33315__auto__);

return statearr_37694;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33317__auto__);
});})(c__33315__auto__,figwheel_version,temp__4657__auto__))
);

return c__33315__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__37697){
var map__37698 = p__37697;
var map__37698__$1 = ((((!((map__37698 == null)))?((((map__37698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37698.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37698):map__37698);
var file = cljs.core.get.call(null,map__37698__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37698__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37698__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__37700 = "";
var G__37700__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37700),cljs.core.str.cljs$core$IFn$_invoke$arity$1("file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__37700);
var G__37700__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37700__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__37700__$1);
if(cljs.core.truth_((function (){var and__27040__auto__ = line;
if(cljs.core.truth_(and__27040__auto__)){
return column;
} else {
return and__27040__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37700__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__37700__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__37701){
var map__37702 = p__37701;
var map__37702__$1 = ((((!((map__37702 == null)))?((((map__37702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37702.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37702):map__37702);
var ed = map__37702__$1;
var formatted_exception = cljs.core.get.call(null,map__37702__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__37702__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__37702__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__37704_37708 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__37705_37709 = null;
var count__37706_37710 = (0);
var i__37707_37711 = (0);
while(true){
if((i__37707_37711 < count__37706_37710)){
var msg_37712 = cljs.core._nth.call(null,chunk__37705_37709,i__37707_37711);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37712);

var G__37713 = seq__37704_37708;
var G__37714 = chunk__37705_37709;
var G__37715 = count__37706_37710;
var G__37716 = (i__37707_37711 + (1));
seq__37704_37708 = G__37713;
chunk__37705_37709 = G__37714;
count__37706_37710 = G__37715;
i__37707_37711 = G__37716;
continue;
} else {
var temp__4657__auto___37717 = cljs.core.seq.call(null,seq__37704_37708);
if(temp__4657__auto___37717){
var seq__37704_37718__$1 = temp__4657__auto___37717;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37704_37718__$1)){
var c__27872__auto___37719 = cljs.core.chunk_first.call(null,seq__37704_37718__$1);
var G__37720 = cljs.core.chunk_rest.call(null,seq__37704_37718__$1);
var G__37721 = c__27872__auto___37719;
var G__37722 = cljs.core.count.call(null,c__27872__auto___37719);
var G__37723 = (0);
seq__37704_37708 = G__37720;
chunk__37705_37709 = G__37721;
count__37706_37710 = G__37722;
i__37707_37711 = G__37723;
continue;
} else {
var msg_37724 = cljs.core.first.call(null,seq__37704_37718__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37724);

var G__37725 = cljs.core.next.call(null,seq__37704_37718__$1);
var G__37726 = null;
var G__37727 = (0);
var G__37728 = (0);
seq__37704_37708 = G__37725;
chunk__37705_37709 = G__37726;
count__37706_37710 = G__37727;
i__37707_37711 = G__37728;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__37729){
var map__37730 = p__37729;
var map__37730__$1 = ((((!((map__37730 == null)))?((((map__37730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37730.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37730):map__37730);
var w = map__37730__$1;
var message = cljs.core.get.call(null,map__37730__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__37732 = cljs.core.seq.call(null,plugins);
var chunk__37733 = null;
var count__37734 = (0);
var i__37735 = (0);
while(true){
if((i__37735 < count__37734)){
var vec__37736 = cljs.core._nth.call(null,chunk__37733,i__37735);
var k = cljs.core.nth.call(null,vec__37736,(0),null);
var plugin = cljs.core.nth.call(null,vec__37736,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37742 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37732,chunk__37733,count__37734,i__37735,pl_37742,vec__37736,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_37742.call(null,msg_hist);
});})(seq__37732,chunk__37733,count__37734,i__37735,pl_37742,vec__37736,k,plugin))
);
} else {
}

var G__37743 = seq__37732;
var G__37744 = chunk__37733;
var G__37745 = count__37734;
var G__37746 = (i__37735 + (1));
seq__37732 = G__37743;
chunk__37733 = G__37744;
count__37734 = G__37745;
i__37735 = G__37746;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37732);
if(temp__4657__auto__){
var seq__37732__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37732__$1)){
var c__27872__auto__ = cljs.core.chunk_first.call(null,seq__37732__$1);
var G__37747 = cljs.core.chunk_rest.call(null,seq__37732__$1);
var G__37748 = c__27872__auto__;
var G__37749 = cljs.core.count.call(null,c__27872__auto__);
var G__37750 = (0);
seq__37732 = G__37747;
chunk__37733 = G__37748;
count__37734 = G__37749;
i__37735 = G__37750;
continue;
} else {
var vec__37739 = cljs.core.first.call(null,seq__37732__$1);
var k = cljs.core.nth.call(null,vec__37739,(0),null);
var plugin = cljs.core.nth.call(null,vec__37739,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37751 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37732,chunk__37733,count__37734,i__37735,pl_37751,vec__37739,k,plugin,seq__37732__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_37751.call(null,msg_hist);
});})(seq__37732,chunk__37733,count__37734,i__37735,pl_37751,vec__37739,k,plugin,seq__37732__$1,temp__4657__auto__))
);
} else {
}

var G__37752 = cljs.core.next.call(null,seq__37732__$1);
var G__37753 = null;
var G__37754 = (0);
var G__37755 = (0);
seq__37732 = G__37752;
chunk__37733 = G__37753;
count__37734 = G__37754;
i__37735 = G__37755;
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
var G__37757 = arguments.length;
switch (G__37757) {
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

var seq__37758_37763 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__37759_37764 = null;
var count__37760_37765 = (0);
var i__37761_37766 = (0);
while(true){
if((i__37761_37766 < count__37760_37765)){
var msg_37767 = cljs.core._nth.call(null,chunk__37759_37764,i__37761_37766);
figwheel.client.socket.handle_incoming_message.call(null,msg_37767);

var G__37768 = seq__37758_37763;
var G__37769 = chunk__37759_37764;
var G__37770 = count__37760_37765;
var G__37771 = (i__37761_37766 + (1));
seq__37758_37763 = G__37768;
chunk__37759_37764 = G__37769;
count__37760_37765 = G__37770;
i__37761_37766 = G__37771;
continue;
} else {
var temp__4657__auto___37772 = cljs.core.seq.call(null,seq__37758_37763);
if(temp__4657__auto___37772){
var seq__37758_37773__$1 = temp__4657__auto___37772;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37758_37773__$1)){
var c__27872__auto___37774 = cljs.core.chunk_first.call(null,seq__37758_37773__$1);
var G__37775 = cljs.core.chunk_rest.call(null,seq__37758_37773__$1);
var G__37776 = c__27872__auto___37774;
var G__37777 = cljs.core.count.call(null,c__27872__auto___37774);
var G__37778 = (0);
seq__37758_37763 = G__37775;
chunk__37759_37764 = G__37776;
count__37760_37765 = G__37777;
i__37761_37766 = G__37778;
continue;
} else {
var msg_37779 = cljs.core.first.call(null,seq__37758_37773__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_37779);

var G__37780 = cljs.core.next.call(null,seq__37758_37773__$1);
var G__37781 = null;
var G__37782 = (0);
var G__37783 = (0);
seq__37758_37763 = G__37780;
chunk__37759_37764 = G__37781;
count__37760_37765 = G__37782;
i__37761_37766 = G__37783;
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
var len__28177__auto___37788 = arguments.length;
var i__28178__auto___37789 = (0);
while(true){
if((i__28178__auto___37789 < len__28177__auto___37788)){
args__28184__auto__.push((arguments[i__28178__auto___37789]));

var G__37790 = (i__28178__auto___37789 + (1));
i__28178__auto___37789 = G__37790;
continue;
} else {
}
break;
}

var argseq__28185__auto__ = ((((0) < args__28184__auto__.length))?(new cljs.core.IndexedSeq(args__28184__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__28185__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__37785){
var map__37786 = p__37785;
var map__37786__$1 = ((((!((map__37786 == null)))?((((map__37786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37786.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37786):map__37786);
var opts = map__37786__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq37784){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37784));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e37791){if((e37791 instanceof Error)){
var e = e37791;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e37791;

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
return (function (p__37792){
var map__37793 = p__37792;
var map__37793__$1 = ((((!((map__37793 == null)))?((((map__37793.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37793.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37793):map__37793);
var msg_name = cljs.core.get.call(null,map__37793__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1501628493863