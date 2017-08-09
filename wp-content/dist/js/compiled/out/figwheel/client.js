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
var G__47618 = arguments.length;
switch (G__47618) {
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
var args__37896__auto__ = [];
var len__37889__auto___47621 = arguments.length;
var i__37890__auto___47622 = (0);
while(true){
if((i__37890__auto___47622 < len__37889__auto___47621)){
args__37896__auto__.push((arguments[i__37890__auto___47622]));

var G__47623 = (i__37890__auto___47622 + (1));
i__37890__auto___47622 = G__47623;
continue;
} else {
}
break;
}

var argseq__37897__auto__ = ((((0) < args__37896__auto__.length))?(new cljs.core.IndexedSeq(args__37896__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__37897__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq47620){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47620));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__37896__auto__ = [];
var len__37889__auto___47625 = arguments.length;
var i__37890__auto___47626 = (0);
while(true){
if((i__37890__auto___47626 < len__37889__auto___47625)){
args__37896__auto__.push((arguments[i__37890__auto___47626]));

var G__47627 = (i__37890__auto___47626 + (1));
i__37890__auto___47626 = G__47627;
continue;
} else {
}
break;
}

var argseq__37897__auto__ = ((((0) < args__37896__auto__.length))?(new cljs.core.IndexedSeq(args__37896__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__37897__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq47624){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47624));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__47628){
var map__47629 = p__47628;
var map__47629__$1 = ((((!((map__47629 == null)))?((((map__47629.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47629.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47629):map__47629);
var message = cljs.core.get.call(null,map__47629__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__47629__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" : "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__36763__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__36763__auto__)){
return or__36763__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__36751__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__36751__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__36751__auto__;
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
var c__39480__auto___47708 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39480__auto___47708,ch){
return (function (){
var f__39481__auto__ = (function (){var switch__39459__auto__ = ((function (c__39480__auto___47708,ch){
return (function (state_47680){
var state_val_47681 = (state_47680[(1)]);
if((state_val_47681 === (7))){
var inst_47676 = (state_47680[(2)]);
var state_47680__$1 = state_47680;
var statearr_47682_47709 = state_47680__$1;
(statearr_47682_47709[(2)] = inst_47676);

(statearr_47682_47709[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47681 === (1))){
var state_47680__$1 = state_47680;
var statearr_47683_47710 = state_47680__$1;
(statearr_47683_47710[(2)] = null);

(statearr_47683_47710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47681 === (4))){
var inst_47633 = (state_47680[(7)]);
var inst_47633__$1 = (state_47680[(2)]);
var state_47680__$1 = (function (){var statearr_47684 = state_47680;
(statearr_47684[(7)] = inst_47633__$1);

return statearr_47684;
})();
if(cljs.core.truth_(inst_47633__$1)){
var statearr_47685_47711 = state_47680__$1;
(statearr_47685_47711[(1)] = (5));

} else {
var statearr_47686_47712 = state_47680__$1;
(statearr_47686_47712[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47681 === (15))){
var inst_47640 = (state_47680[(8)]);
var inst_47655 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_47640);
var inst_47656 = cljs.core.first.call(null,inst_47655);
var inst_47657 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_47656);
var inst_47658 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not loading code with warnings - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_47657)].join('');
var inst_47659 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_47658);
var state_47680__$1 = state_47680;
var statearr_47687_47713 = state_47680__$1;
(statearr_47687_47713[(2)] = inst_47659);

(statearr_47687_47713[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47681 === (13))){
var inst_47664 = (state_47680[(2)]);
var state_47680__$1 = state_47680;
var statearr_47688_47714 = state_47680__$1;
(statearr_47688_47714[(2)] = inst_47664);

(statearr_47688_47714[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47681 === (6))){
var state_47680__$1 = state_47680;
var statearr_47689_47715 = state_47680__$1;
(statearr_47689_47715[(2)] = null);

(statearr_47689_47715[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47681 === (17))){
var inst_47662 = (state_47680[(2)]);
var state_47680__$1 = state_47680;
var statearr_47690_47716 = state_47680__$1;
(statearr_47690_47716[(2)] = inst_47662);

(statearr_47690_47716[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47681 === (3))){
var inst_47678 = (state_47680[(2)]);
var state_47680__$1 = state_47680;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47680__$1,inst_47678);
} else {
if((state_val_47681 === (12))){
var inst_47639 = (state_47680[(9)]);
var inst_47653 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_47639,opts);
var state_47680__$1 = state_47680;
if(cljs.core.truth_(inst_47653)){
var statearr_47691_47717 = state_47680__$1;
(statearr_47691_47717[(1)] = (15));

} else {
var statearr_47692_47718 = state_47680__$1;
(statearr_47692_47718[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47681 === (2))){
var state_47680__$1 = state_47680;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47680__$1,(4),ch);
} else {
if((state_val_47681 === (11))){
var inst_47640 = (state_47680[(8)]);
var inst_47645 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_47646 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_47640);
var inst_47647 = cljs.core.async.timeout.call(null,(1000));
var inst_47648 = [inst_47646,inst_47647];
var inst_47649 = (new cljs.core.PersistentVector(null,2,(5),inst_47645,inst_47648,null));
var state_47680__$1 = state_47680;
return cljs.core.async.ioc_alts_BANG_.call(null,state_47680__$1,(14),inst_47649);
} else {
if((state_val_47681 === (9))){
var inst_47640 = (state_47680[(8)]);
var inst_47666 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_47667 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_47640);
var inst_47668 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_47667);
var inst_47669 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Not loading: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_47668)].join('');
var inst_47670 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_47669);
var state_47680__$1 = (function (){var statearr_47693 = state_47680;
(statearr_47693[(10)] = inst_47666);

return statearr_47693;
})();
var statearr_47694_47719 = state_47680__$1;
(statearr_47694_47719[(2)] = inst_47670);

(statearr_47694_47719[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47681 === (5))){
var inst_47633 = (state_47680[(7)]);
var inst_47635 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_47636 = (new cljs.core.PersistentArrayMap(null,2,inst_47635,null));
var inst_47637 = (new cljs.core.PersistentHashSet(null,inst_47636,null));
var inst_47638 = figwheel.client.focus_msgs.call(null,inst_47637,inst_47633);
var inst_47639 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_47638);
var inst_47640 = cljs.core.first.call(null,inst_47638);
var inst_47641 = figwheel.client.autoload_QMARK_.call(null);
var state_47680__$1 = (function (){var statearr_47695 = state_47680;
(statearr_47695[(9)] = inst_47639);

(statearr_47695[(8)] = inst_47640);

return statearr_47695;
})();
if(cljs.core.truth_(inst_47641)){
var statearr_47696_47720 = state_47680__$1;
(statearr_47696_47720[(1)] = (8));

} else {
var statearr_47697_47721 = state_47680__$1;
(statearr_47697_47721[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47681 === (14))){
var inst_47651 = (state_47680[(2)]);
var state_47680__$1 = state_47680;
var statearr_47698_47722 = state_47680__$1;
(statearr_47698_47722[(2)] = inst_47651);

(statearr_47698_47722[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47681 === (16))){
var state_47680__$1 = state_47680;
var statearr_47699_47723 = state_47680__$1;
(statearr_47699_47723[(2)] = null);

(statearr_47699_47723[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47681 === (10))){
var inst_47672 = (state_47680[(2)]);
var state_47680__$1 = (function (){var statearr_47700 = state_47680;
(statearr_47700[(11)] = inst_47672);

return statearr_47700;
})();
var statearr_47701_47724 = state_47680__$1;
(statearr_47701_47724[(2)] = null);

(statearr_47701_47724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47681 === (8))){
var inst_47639 = (state_47680[(9)]);
var inst_47643 = figwheel.client.reload_file_state_QMARK_.call(null,inst_47639,opts);
var state_47680__$1 = state_47680;
if(cljs.core.truth_(inst_47643)){
var statearr_47702_47725 = state_47680__$1;
(statearr_47702_47725[(1)] = (11));

} else {
var statearr_47703_47726 = state_47680__$1;
(statearr_47703_47726[(1)] = (12));

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
});})(c__39480__auto___47708,ch))
;
return ((function (switch__39459__auto__,c__39480__auto___47708,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__39460__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__39460__auto____0 = (function (){
var statearr_47704 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47704[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__39460__auto__);

(statearr_47704[(1)] = (1));

return statearr_47704;
});
var figwheel$client$file_reloader_plugin_$_state_machine__39460__auto____1 = (function (state_47680){
while(true){
var ret_value__39461__auto__ = (function (){try{while(true){
var result__39462__auto__ = switch__39459__auto__.call(null,state_47680);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39462__auto__;
}
break;
}
}catch (e47705){if((e47705 instanceof Object)){
var ex__39463__auto__ = e47705;
var statearr_47706_47727 = state_47680;
(statearr_47706_47727[(5)] = ex__39463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47680);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47705;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47728 = state_47680;
state_47680 = G__47728;
continue;
} else {
return ret_value__39461__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__39460__auto__ = function(state_47680){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__39460__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__39460__auto____1.call(this,state_47680);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__39460__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__39460__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__39460__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__39460__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__39460__auto__;
})()
;})(switch__39459__auto__,c__39480__auto___47708,ch))
})();
var state__39482__auto__ = (function (){var statearr_47707 = f__39481__auto__.call(null);
(statearr_47707[(6)] = c__39480__auto___47708);

return statearr_47707;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39482__auto__);
});})(c__39480__auto___47708,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__47729_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__47729_SHARP_));
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
var base_path_47731 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_47731){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e47730){if((e47730 instanceof Error)){
var e = e47730;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_47731], null));
} else {
var e = e47730;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_47731))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__47732){
var map__47733 = p__47732;
var map__47733__$1 = ((((!((map__47733 == null)))?((((map__47733.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47733.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47733):map__47733);
var opts = map__47733__$1;
var build_id = cljs.core.get.call(null,map__47733__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__47733,map__47733__$1,opts,build_id){
return (function (p__47735){
var vec__47736 = p__47735;
var seq__47737 = cljs.core.seq.call(null,vec__47736);
var first__47738 = cljs.core.first.call(null,seq__47737);
var seq__47737__$1 = cljs.core.next.call(null,seq__47737);
var map__47739 = first__47738;
var map__47739__$1 = ((((!((map__47739 == null)))?((((map__47739.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47739.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47739):map__47739);
var msg = map__47739__$1;
var msg_name = cljs.core.get.call(null,map__47739__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__47737__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__47736,seq__47737,first__47738,seq__47737__$1,map__47739,map__47739__$1,msg,msg_name,_,map__47733,map__47733__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__47736,seq__47737,first__47738,seq__47737__$1,map__47739,map__47739__$1,msg,msg_name,_,map__47733,map__47733__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__47733,map__47733__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__47741){
var vec__47742 = p__47741;
var seq__47743 = cljs.core.seq.call(null,vec__47742);
var first__47744 = cljs.core.first.call(null,seq__47743);
var seq__47743__$1 = cljs.core.next.call(null,seq__47743);
var map__47745 = first__47744;
var map__47745__$1 = ((((!((map__47745 == null)))?((((map__47745.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47745.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47745):map__47745);
var msg = map__47745__$1;
var msg_name = cljs.core.get.call(null,map__47745__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__47743__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__47747){
var map__47748 = p__47747;
var map__47748__$1 = ((((!((map__47748 == null)))?((((map__47748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47748.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47748):map__47748);
var on_compile_warning = cljs.core.get.call(null,map__47748__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__47748__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__47748,map__47748__$1,on_compile_warning,on_compile_fail){
return (function (p__47750){
var vec__47751 = p__47750;
var seq__47752 = cljs.core.seq.call(null,vec__47751);
var first__47753 = cljs.core.first.call(null,seq__47752);
var seq__47752__$1 = cljs.core.next.call(null,seq__47752);
var map__47754 = first__47753;
var map__47754__$1 = ((((!((map__47754 == null)))?((((map__47754.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47754.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47754):map__47754);
var msg = map__47754__$1;
var msg_name = cljs.core.get.call(null,map__47754__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__47752__$1;
var pred__47756 = cljs.core._EQ_;
var expr__47757 = msg_name;
if(cljs.core.truth_(pred__47756.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__47757))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__47756.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__47757))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__47748,map__47748__$1,on_compile_warning,on_compile_fail))
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
var c__39480__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39480__auto__,msg_hist,msg_names,msg){
return (function (){
var f__39481__auto__ = (function (){var switch__39459__auto__ = ((function (c__39480__auto__,msg_hist,msg_names,msg){
return (function (state_47846){
var state_val_47847 = (state_47846[(1)]);
if((state_val_47847 === (7))){
var inst_47766 = (state_47846[(2)]);
var state_47846__$1 = state_47846;
if(cljs.core.truth_(inst_47766)){
var statearr_47848_47895 = state_47846__$1;
(statearr_47848_47895[(1)] = (8));

} else {
var statearr_47849_47896 = state_47846__$1;
(statearr_47849_47896[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47847 === (20))){
var inst_47840 = (state_47846[(2)]);
var state_47846__$1 = state_47846;
var statearr_47850_47897 = state_47846__$1;
(statearr_47850_47897[(2)] = inst_47840);

(statearr_47850_47897[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47847 === (27))){
var inst_47836 = (state_47846[(2)]);
var state_47846__$1 = state_47846;
var statearr_47851_47898 = state_47846__$1;
(statearr_47851_47898[(2)] = inst_47836);

(statearr_47851_47898[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47847 === (1))){
var inst_47759 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_47846__$1 = state_47846;
if(cljs.core.truth_(inst_47759)){
var statearr_47852_47899 = state_47846__$1;
(statearr_47852_47899[(1)] = (2));

} else {
var statearr_47853_47900 = state_47846__$1;
(statearr_47853_47900[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47847 === (24))){
var inst_47838 = (state_47846[(2)]);
var state_47846__$1 = state_47846;
var statearr_47854_47901 = state_47846__$1;
(statearr_47854_47901[(2)] = inst_47838);

(statearr_47854_47901[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47847 === (4))){
var inst_47844 = (state_47846[(2)]);
var state_47846__$1 = state_47846;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47846__$1,inst_47844);
} else {
if((state_val_47847 === (15))){
var inst_47842 = (state_47846[(2)]);
var state_47846__$1 = state_47846;
var statearr_47855_47902 = state_47846__$1;
(statearr_47855_47902[(2)] = inst_47842);

(statearr_47855_47902[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47847 === (21))){
var inst_47795 = (state_47846[(2)]);
var inst_47796 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_47797 = figwheel.client.auto_jump_to_error.call(null,opts,inst_47796);
var state_47846__$1 = (function (){var statearr_47856 = state_47846;
(statearr_47856[(7)] = inst_47795);

return statearr_47856;
})();
var statearr_47857_47903 = state_47846__$1;
(statearr_47857_47903[(2)] = inst_47797);

(statearr_47857_47903[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47847 === (31))){
var inst_47825 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_47846__$1 = state_47846;
if(cljs.core.truth_(inst_47825)){
var statearr_47858_47904 = state_47846__$1;
(statearr_47858_47904[(1)] = (34));

} else {
var statearr_47859_47905 = state_47846__$1;
(statearr_47859_47905[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47847 === (32))){
var inst_47834 = (state_47846[(2)]);
var state_47846__$1 = state_47846;
var statearr_47860_47906 = state_47846__$1;
(statearr_47860_47906[(2)] = inst_47834);

(statearr_47860_47906[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47847 === (33))){
var inst_47821 = (state_47846[(2)]);
var inst_47822 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_47823 = figwheel.client.auto_jump_to_error.call(null,opts,inst_47822);
var state_47846__$1 = (function (){var statearr_47861 = state_47846;
(statearr_47861[(8)] = inst_47821);

return statearr_47861;
})();
var statearr_47862_47907 = state_47846__$1;
(statearr_47862_47907[(2)] = inst_47823);

(statearr_47862_47907[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47847 === (13))){
var inst_47780 = figwheel.client.heads_up.clear.call(null);
var state_47846__$1 = state_47846;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47846__$1,(16),inst_47780);
} else {
if((state_val_47847 === (22))){
var inst_47801 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_47802 = figwheel.client.heads_up.append_warning_message.call(null,inst_47801);
var state_47846__$1 = state_47846;
var statearr_47863_47908 = state_47846__$1;
(statearr_47863_47908[(2)] = inst_47802);

(statearr_47863_47908[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47847 === (36))){
var inst_47832 = (state_47846[(2)]);
var state_47846__$1 = state_47846;
var statearr_47864_47909 = state_47846__$1;
(statearr_47864_47909[(2)] = inst_47832);

(statearr_47864_47909[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47847 === (29))){
var inst_47812 = (state_47846[(2)]);
var inst_47813 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_47814 = figwheel.client.auto_jump_to_error.call(null,opts,inst_47813);
var state_47846__$1 = (function (){var statearr_47865 = state_47846;
(statearr_47865[(9)] = inst_47812);

return statearr_47865;
})();
var statearr_47866_47910 = state_47846__$1;
(statearr_47866_47910[(2)] = inst_47814);

(statearr_47866_47910[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47847 === (6))){
var inst_47761 = (state_47846[(10)]);
var state_47846__$1 = state_47846;
var statearr_47867_47911 = state_47846__$1;
(statearr_47867_47911[(2)] = inst_47761);

(statearr_47867_47911[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47847 === (28))){
var inst_47808 = (state_47846[(2)]);
var inst_47809 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_47810 = figwheel.client.heads_up.display_warning.call(null,inst_47809);
var state_47846__$1 = (function (){var statearr_47868 = state_47846;
(statearr_47868[(11)] = inst_47808);

return statearr_47868;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47846__$1,(29),inst_47810);
} else {
if((state_val_47847 === (25))){
var inst_47806 = figwheel.client.heads_up.clear.call(null);
var state_47846__$1 = state_47846;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47846__$1,(28),inst_47806);
} else {
if((state_val_47847 === (34))){
var inst_47827 = figwheel.client.heads_up.flash_loaded.call(null);
var state_47846__$1 = state_47846;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47846__$1,(37),inst_47827);
} else {
if((state_val_47847 === (17))){
var inst_47786 = (state_47846[(2)]);
var inst_47787 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_47788 = figwheel.client.auto_jump_to_error.call(null,opts,inst_47787);
var state_47846__$1 = (function (){var statearr_47869 = state_47846;
(statearr_47869[(12)] = inst_47786);

return statearr_47869;
})();
var statearr_47870_47912 = state_47846__$1;
(statearr_47870_47912[(2)] = inst_47788);

(statearr_47870_47912[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47847 === (3))){
var inst_47778 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_47846__$1 = state_47846;
if(cljs.core.truth_(inst_47778)){
var statearr_47871_47913 = state_47846__$1;
(statearr_47871_47913[(1)] = (13));

} else {
var statearr_47872_47914 = state_47846__$1;
(statearr_47872_47914[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47847 === (12))){
var inst_47774 = (state_47846[(2)]);
var state_47846__$1 = state_47846;
var statearr_47873_47915 = state_47846__$1;
(statearr_47873_47915[(2)] = inst_47774);

(statearr_47873_47915[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47847 === (2))){
var inst_47761 = (state_47846[(10)]);
var inst_47761__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_47846__$1 = (function (){var statearr_47874 = state_47846;
(statearr_47874[(10)] = inst_47761__$1);

return statearr_47874;
})();
if(cljs.core.truth_(inst_47761__$1)){
var statearr_47875_47916 = state_47846__$1;
(statearr_47875_47916[(1)] = (5));

} else {
var statearr_47876_47917 = state_47846__$1;
(statearr_47876_47917[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47847 === (23))){
var inst_47804 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_47846__$1 = state_47846;
if(cljs.core.truth_(inst_47804)){
var statearr_47877_47918 = state_47846__$1;
(statearr_47877_47918[(1)] = (25));

} else {
var statearr_47878_47919 = state_47846__$1;
(statearr_47878_47919[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47847 === (35))){
var state_47846__$1 = state_47846;
var statearr_47879_47920 = state_47846__$1;
(statearr_47879_47920[(2)] = null);

(statearr_47879_47920[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47847 === (19))){
var inst_47799 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_47846__$1 = state_47846;
if(cljs.core.truth_(inst_47799)){
var statearr_47880_47921 = state_47846__$1;
(statearr_47880_47921[(1)] = (22));

} else {
var statearr_47881_47922 = state_47846__$1;
(statearr_47881_47922[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47847 === (11))){
var inst_47770 = (state_47846[(2)]);
var state_47846__$1 = state_47846;
var statearr_47882_47923 = state_47846__$1;
(statearr_47882_47923[(2)] = inst_47770);

(statearr_47882_47923[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47847 === (9))){
var inst_47772 = figwheel.client.heads_up.clear.call(null);
var state_47846__$1 = state_47846;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47846__$1,(12),inst_47772);
} else {
if((state_val_47847 === (5))){
var inst_47763 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_47846__$1 = state_47846;
var statearr_47883_47924 = state_47846__$1;
(statearr_47883_47924[(2)] = inst_47763);

(statearr_47883_47924[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47847 === (14))){
var inst_47790 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_47846__$1 = state_47846;
if(cljs.core.truth_(inst_47790)){
var statearr_47884_47925 = state_47846__$1;
(statearr_47884_47925[(1)] = (18));

} else {
var statearr_47885_47926 = state_47846__$1;
(statearr_47885_47926[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47847 === (26))){
var inst_47816 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_47846__$1 = state_47846;
if(cljs.core.truth_(inst_47816)){
var statearr_47886_47927 = state_47846__$1;
(statearr_47886_47927[(1)] = (30));

} else {
var statearr_47887_47928 = state_47846__$1;
(statearr_47887_47928[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47847 === (16))){
var inst_47782 = (state_47846[(2)]);
var inst_47783 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_47784 = figwheel.client.heads_up.display_exception.call(null,inst_47783);
var state_47846__$1 = (function (){var statearr_47888 = state_47846;
(statearr_47888[(13)] = inst_47782);

return statearr_47888;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47846__$1,(17),inst_47784);
} else {
if((state_val_47847 === (30))){
var inst_47818 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_47819 = figwheel.client.heads_up.display_warning.call(null,inst_47818);
var state_47846__$1 = state_47846;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47846__$1,(33),inst_47819);
} else {
if((state_val_47847 === (10))){
var inst_47776 = (state_47846[(2)]);
var state_47846__$1 = state_47846;
var statearr_47889_47929 = state_47846__$1;
(statearr_47889_47929[(2)] = inst_47776);

(statearr_47889_47929[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47847 === (18))){
var inst_47792 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_47793 = figwheel.client.heads_up.display_exception.call(null,inst_47792);
var state_47846__$1 = state_47846;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47846__$1,(21),inst_47793);
} else {
if((state_val_47847 === (37))){
var inst_47829 = (state_47846[(2)]);
var state_47846__$1 = state_47846;
var statearr_47890_47930 = state_47846__$1;
(statearr_47890_47930[(2)] = inst_47829);

(statearr_47890_47930[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47847 === (8))){
var inst_47768 = figwheel.client.heads_up.flash_loaded.call(null);
var state_47846__$1 = state_47846;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47846__$1,(11),inst_47768);
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
});})(c__39480__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__39459__auto__,c__39480__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39460__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39460__auto____0 = (function (){
var statearr_47891 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47891[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39460__auto__);

(statearr_47891[(1)] = (1));

return statearr_47891;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39460__auto____1 = (function (state_47846){
while(true){
var ret_value__39461__auto__ = (function (){try{while(true){
var result__39462__auto__ = switch__39459__auto__.call(null,state_47846);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39462__auto__;
}
break;
}
}catch (e47892){if((e47892 instanceof Object)){
var ex__39463__auto__ = e47892;
var statearr_47893_47931 = state_47846;
(statearr_47893_47931[(5)] = ex__39463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47846);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47892;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47932 = state_47846;
state_47846 = G__47932;
continue;
} else {
return ret_value__39461__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39460__auto__ = function(state_47846){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39460__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39460__auto____1.call(this,state_47846);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39460__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39460__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39460__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39460__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39460__auto__;
})()
;})(switch__39459__auto__,c__39480__auto__,msg_hist,msg_names,msg))
})();
var state__39482__auto__ = (function (){var statearr_47894 = f__39481__auto__.call(null);
(statearr_47894[(6)] = c__39480__auto__);

return statearr_47894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39482__auto__);
});})(c__39480__auto__,msg_hist,msg_names,msg))
);

return c__39480__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__39480__auto___47961 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39480__auto___47961,ch){
return (function (){
var f__39481__auto__ = (function (){var switch__39459__auto__ = ((function (c__39480__auto___47961,ch){
return (function (state_47947){
var state_val_47948 = (state_47947[(1)]);
if((state_val_47948 === (1))){
var state_47947__$1 = state_47947;
var statearr_47949_47962 = state_47947__$1;
(statearr_47949_47962[(2)] = null);

(statearr_47949_47962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47948 === (2))){
var state_47947__$1 = state_47947;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47947__$1,(4),ch);
} else {
if((state_val_47948 === (3))){
var inst_47945 = (state_47947[(2)]);
var state_47947__$1 = state_47947;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47947__$1,inst_47945);
} else {
if((state_val_47948 === (4))){
var inst_47935 = (state_47947[(7)]);
var inst_47935__$1 = (state_47947[(2)]);
var state_47947__$1 = (function (){var statearr_47950 = state_47947;
(statearr_47950[(7)] = inst_47935__$1);

return statearr_47950;
})();
if(cljs.core.truth_(inst_47935__$1)){
var statearr_47951_47963 = state_47947__$1;
(statearr_47951_47963[(1)] = (5));

} else {
var statearr_47952_47964 = state_47947__$1;
(statearr_47952_47964[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47948 === (5))){
var inst_47935 = (state_47947[(7)]);
var inst_47937 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_47935);
var state_47947__$1 = state_47947;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47947__$1,(8),inst_47937);
} else {
if((state_val_47948 === (6))){
var state_47947__$1 = state_47947;
var statearr_47953_47965 = state_47947__$1;
(statearr_47953_47965[(2)] = null);

(statearr_47953_47965[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47948 === (7))){
var inst_47943 = (state_47947[(2)]);
var state_47947__$1 = state_47947;
var statearr_47954_47966 = state_47947__$1;
(statearr_47954_47966[(2)] = inst_47943);

(statearr_47954_47966[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47948 === (8))){
var inst_47939 = (state_47947[(2)]);
var state_47947__$1 = (function (){var statearr_47955 = state_47947;
(statearr_47955[(8)] = inst_47939);

return statearr_47955;
})();
var statearr_47956_47967 = state_47947__$1;
(statearr_47956_47967[(2)] = null);

(statearr_47956_47967[(1)] = (2));


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
});})(c__39480__auto___47961,ch))
;
return ((function (switch__39459__auto__,c__39480__auto___47961,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__39460__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__39460__auto____0 = (function (){
var statearr_47957 = [null,null,null,null,null,null,null,null,null];
(statearr_47957[(0)] = figwheel$client$heads_up_plugin_$_state_machine__39460__auto__);

(statearr_47957[(1)] = (1));

return statearr_47957;
});
var figwheel$client$heads_up_plugin_$_state_machine__39460__auto____1 = (function (state_47947){
while(true){
var ret_value__39461__auto__ = (function (){try{while(true){
var result__39462__auto__ = switch__39459__auto__.call(null,state_47947);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39462__auto__;
}
break;
}
}catch (e47958){if((e47958 instanceof Object)){
var ex__39463__auto__ = e47958;
var statearr_47959_47968 = state_47947;
(statearr_47959_47968[(5)] = ex__39463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47947);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47958;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47969 = state_47947;
state_47947 = G__47969;
continue;
} else {
return ret_value__39461__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__39460__auto__ = function(state_47947){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__39460__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__39460__auto____1.call(this,state_47947);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__39460__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__39460__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__39460__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__39460__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__39460__auto__;
})()
;})(switch__39459__auto__,c__39480__auto___47961,ch))
})();
var state__39482__auto__ = (function (){var statearr_47960 = f__39481__auto__.call(null);
(statearr_47960[(6)] = c__39480__auto___47961);

return statearr_47960;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39482__auto__);
});})(c__39480__auto___47961,ch))
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
var c__39480__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39480__auto__){
return (function (){
var f__39481__auto__ = (function (){var switch__39459__auto__ = ((function (c__39480__auto__){
return (function (state_47975){
var state_val_47976 = (state_47975[(1)]);
if((state_val_47976 === (1))){
var inst_47970 = cljs.core.async.timeout.call(null,(3000));
var state_47975__$1 = state_47975;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47975__$1,(2),inst_47970);
} else {
if((state_val_47976 === (2))){
var inst_47972 = (state_47975[(2)]);
var inst_47973 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_47975__$1 = (function (){var statearr_47977 = state_47975;
(statearr_47977[(7)] = inst_47972);

return statearr_47977;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47975__$1,inst_47973);
} else {
return null;
}
}
});})(c__39480__auto__))
;
return ((function (switch__39459__auto__,c__39480__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__39460__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__39460__auto____0 = (function (){
var statearr_47978 = [null,null,null,null,null,null,null,null];
(statearr_47978[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__39460__auto__);

(statearr_47978[(1)] = (1));

return statearr_47978;
});
var figwheel$client$enforce_project_plugin_$_state_machine__39460__auto____1 = (function (state_47975){
while(true){
var ret_value__39461__auto__ = (function (){try{while(true){
var result__39462__auto__ = switch__39459__auto__.call(null,state_47975);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39462__auto__;
}
break;
}
}catch (e47979){if((e47979 instanceof Object)){
var ex__39463__auto__ = e47979;
var statearr_47980_47982 = state_47975;
(statearr_47980_47982[(5)] = ex__39463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47975);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47979;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47983 = state_47975;
state_47975 = G__47983;
continue;
} else {
return ret_value__39461__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__39460__auto__ = function(state_47975){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__39460__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__39460__auto____1.call(this,state_47975);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__39460__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__39460__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__39460__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__39460__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__39460__auto__;
})()
;})(switch__39459__auto__,c__39480__auto__))
})();
var state__39482__auto__ = (function (){var statearr_47981 = f__39481__auto__.call(null);
(statearr_47981[(6)] = c__39480__auto__);

return statearr_47981;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39482__auto__);
});})(c__39480__auto__))
);

return c__39480__auto__;
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
var c__39480__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39480__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__39481__auto__ = (function (){var switch__39459__auto__ = ((function (c__39480__auto__,figwheel_version,temp__4657__auto__){
return (function (state_47990){
var state_val_47991 = (state_47990[(1)]);
if((state_val_47991 === (1))){
var inst_47984 = cljs.core.async.timeout.call(null,(2000));
var state_47990__$1 = state_47990;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47990__$1,(2),inst_47984);
} else {
if((state_val_47991 === (2))){
var inst_47986 = (state_47990[(2)]);
var inst_47987 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Client Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong> is not equal to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Sidecar Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".  Shutting down Websocket Connection!"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<h4>To fix try:</h4>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_47988 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_47987);
var state_47990__$1 = (function (){var statearr_47992 = state_47990;
(statearr_47992[(7)] = inst_47986);

return statearr_47992;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47990__$1,inst_47988);
} else {
return null;
}
}
});})(c__39480__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__39459__auto__,c__39480__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39460__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39460__auto____0 = (function (){
var statearr_47993 = [null,null,null,null,null,null,null,null];
(statearr_47993[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39460__auto__);

(statearr_47993[(1)] = (1));

return statearr_47993;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39460__auto____1 = (function (state_47990){
while(true){
var ret_value__39461__auto__ = (function (){try{while(true){
var result__39462__auto__ = switch__39459__auto__.call(null,state_47990);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39462__auto__;
}
break;
}
}catch (e47994){if((e47994 instanceof Object)){
var ex__39463__auto__ = e47994;
var statearr_47995_47997 = state_47990;
(statearr_47995_47997[(5)] = ex__39463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47990);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47994;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47998 = state_47990;
state_47990 = G__47998;
continue;
} else {
return ret_value__39461__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39460__auto__ = function(state_47990){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39460__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39460__auto____1.call(this,state_47990);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39460__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39460__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39460__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39460__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39460__auto__;
})()
;})(switch__39459__auto__,c__39480__auto__,figwheel_version,temp__4657__auto__))
})();
var state__39482__auto__ = (function (){var statearr_47996 = f__39481__auto__.call(null);
(statearr_47996[(6)] = c__39480__auto__);

return statearr_47996;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39482__auto__);
});})(c__39480__auto__,figwheel_version,temp__4657__auto__))
);

return c__39480__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__47999){
var map__48000 = p__47999;
var map__48000__$1 = ((((!((map__48000 == null)))?((((map__48000.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48000.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48000):map__48000);
var file = cljs.core.get.call(null,map__48000__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__48000__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__48000__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__48002 = "";
var G__48002__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48002),cljs.core.str.cljs$core$IFn$_invoke$arity$1("file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__48002);
var G__48002__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48002__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__48002__$1);
if(cljs.core.truth_((function (){var and__36751__auto__ = line;
if(cljs.core.truth_(and__36751__auto__)){
return column;
} else {
return and__36751__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48002__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__48002__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__48003){
var map__48004 = p__48003;
var map__48004__$1 = ((((!((map__48004 == null)))?((((map__48004.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48004.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48004):map__48004);
var ed = map__48004__$1;
var formatted_exception = cljs.core.get.call(null,map__48004__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__48004__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__48004__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__48006_48010 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__48007_48011 = null;
var count__48008_48012 = (0);
var i__48009_48013 = (0);
while(true){
if((i__48009_48013 < count__48008_48012)){
var msg_48014 = cljs.core._nth.call(null,chunk__48007_48011,i__48009_48013);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_48014);

var G__48015 = seq__48006_48010;
var G__48016 = chunk__48007_48011;
var G__48017 = count__48008_48012;
var G__48018 = (i__48009_48013 + (1));
seq__48006_48010 = G__48015;
chunk__48007_48011 = G__48016;
count__48008_48012 = G__48017;
i__48009_48013 = G__48018;
continue;
} else {
var temp__4657__auto___48019 = cljs.core.seq.call(null,seq__48006_48010);
if(temp__4657__auto___48019){
var seq__48006_48020__$1 = temp__4657__auto___48019;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48006_48020__$1)){
var c__37583__auto___48021 = cljs.core.chunk_first.call(null,seq__48006_48020__$1);
var G__48022 = cljs.core.chunk_rest.call(null,seq__48006_48020__$1);
var G__48023 = c__37583__auto___48021;
var G__48024 = cljs.core.count.call(null,c__37583__auto___48021);
var G__48025 = (0);
seq__48006_48010 = G__48022;
chunk__48007_48011 = G__48023;
count__48008_48012 = G__48024;
i__48009_48013 = G__48025;
continue;
} else {
var msg_48026 = cljs.core.first.call(null,seq__48006_48020__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_48026);

var G__48027 = cljs.core.next.call(null,seq__48006_48020__$1);
var G__48028 = null;
var G__48029 = (0);
var G__48030 = (0);
seq__48006_48010 = G__48027;
chunk__48007_48011 = G__48028;
count__48008_48012 = G__48029;
i__48009_48013 = G__48030;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__48031){
var map__48032 = p__48031;
var map__48032__$1 = ((((!((map__48032 == null)))?((((map__48032.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48032.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48032):map__48032);
var w = map__48032__$1;
var message = cljs.core.get.call(null,map__48032__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__36751__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__36751__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__36751__auto__;
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
var seq__48034 = cljs.core.seq.call(null,plugins);
var chunk__48035 = null;
var count__48036 = (0);
var i__48037 = (0);
while(true){
if((i__48037 < count__48036)){
var vec__48038 = cljs.core._nth.call(null,chunk__48035,i__48037);
var k = cljs.core.nth.call(null,vec__48038,(0),null);
var plugin = cljs.core.nth.call(null,vec__48038,(1),null);
if(cljs.core.truth_(plugin)){
var pl_48044 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__48034,chunk__48035,count__48036,i__48037,pl_48044,vec__48038,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_48044.call(null,msg_hist);
});})(seq__48034,chunk__48035,count__48036,i__48037,pl_48044,vec__48038,k,plugin))
);
} else {
}

var G__48045 = seq__48034;
var G__48046 = chunk__48035;
var G__48047 = count__48036;
var G__48048 = (i__48037 + (1));
seq__48034 = G__48045;
chunk__48035 = G__48046;
count__48036 = G__48047;
i__48037 = G__48048;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__48034);
if(temp__4657__auto__){
var seq__48034__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48034__$1)){
var c__37583__auto__ = cljs.core.chunk_first.call(null,seq__48034__$1);
var G__48049 = cljs.core.chunk_rest.call(null,seq__48034__$1);
var G__48050 = c__37583__auto__;
var G__48051 = cljs.core.count.call(null,c__37583__auto__);
var G__48052 = (0);
seq__48034 = G__48049;
chunk__48035 = G__48050;
count__48036 = G__48051;
i__48037 = G__48052;
continue;
} else {
var vec__48041 = cljs.core.first.call(null,seq__48034__$1);
var k = cljs.core.nth.call(null,vec__48041,(0),null);
var plugin = cljs.core.nth.call(null,vec__48041,(1),null);
if(cljs.core.truth_(plugin)){
var pl_48053 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__48034,chunk__48035,count__48036,i__48037,pl_48053,vec__48041,k,plugin,seq__48034__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_48053.call(null,msg_hist);
});})(seq__48034,chunk__48035,count__48036,i__48037,pl_48053,vec__48041,k,plugin,seq__48034__$1,temp__4657__auto__))
);
} else {
}

var G__48054 = cljs.core.next.call(null,seq__48034__$1);
var G__48055 = null;
var G__48056 = (0);
var G__48057 = (0);
seq__48034 = G__48054;
chunk__48035 = G__48055;
count__48036 = G__48056;
i__48037 = G__48057;
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
var G__48059 = arguments.length;
switch (G__48059) {
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

var seq__48060_48065 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__48061_48066 = null;
var count__48062_48067 = (0);
var i__48063_48068 = (0);
while(true){
if((i__48063_48068 < count__48062_48067)){
var msg_48069 = cljs.core._nth.call(null,chunk__48061_48066,i__48063_48068);
figwheel.client.socket.handle_incoming_message.call(null,msg_48069);

var G__48070 = seq__48060_48065;
var G__48071 = chunk__48061_48066;
var G__48072 = count__48062_48067;
var G__48073 = (i__48063_48068 + (1));
seq__48060_48065 = G__48070;
chunk__48061_48066 = G__48071;
count__48062_48067 = G__48072;
i__48063_48068 = G__48073;
continue;
} else {
var temp__4657__auto___48074 = cljs.core.seq.call(null,seq__48060_48065);
if(temp__4657__auto___48074){
var seq__48060_48075__$1 = temp__4657__auto___48074;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48060_48075__$1)){
var c__37583__auto___48076 = cljs.core.chunk_first.call(null,seq__48060_48075__$1);
var G__48077 = cljs.core.chunk_rest.call(null,seq__48060_48075__$1);
var G__48078 = c__37583__auto___48076;
var G__48079 = cljs.core.count.call(null,c__37583__auto___48076);
var G__48080 = (0);
seq__48060_48065 = G__48077;
chunk__48061_48066 = G__48078;
count__48062_48067 = G__48079;
i__48063_48068 = G__48080;
continue;
} else {
var msg_48081 = cljs.core.first.call(null,seq__48060_48075__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_48081);

var G__48082 = cljs.core.next.call(null,seq__48060_48075__$1);
var G__48083 = null;
var G__48084 = (0);
var G__48085 = (0);
seq__48060_48065 = G__48082;
chunk__48061_48066 = G__48083;
count__48062_48067 = G__48084;
i__48063_48068 = G__48085;
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
var args__37896__auto__ = [];
var len__37889__auto___48090 = arguments.length;
var i__37890__auto___48091 = (0);
while(true){
if((i__37890__auto___48091 < len__37889__auto___48090)){
args__37896__auto__.push((arguments[i__37890__auto___48091]));

var G__48092 = (i__37890__auto___48091 + (1));
i__37890__auto___48091 = G__48092;
continue;
} else {
}
break;
}

var argseq__37897__auto__ = ((((0) < args__37896__auto__.length))?(new cljs.core.IndexedSeq(args__37896__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__37897__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__48087){
var map__48088 = p__48087;
var map__48088__$1 = ((((!((map__48088 == null)))?((((map__48088.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48088.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48088):map__48088);
var opts = map__48088__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq48086){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48086));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e48093){if((e48093 instanceof Error)){
var e = e48093;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e48093;

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
return (function (p__48094){
var map__48095 = p__48094;
var map__48095__$1 = ((((!((map__48095 == null)))?((((map__48095.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48095.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48095):map__48095);
var msg_name = cljs.core.get.call(null,map__48095__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1502260266616