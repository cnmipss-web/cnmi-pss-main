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
var args68067 = [];
var len__27054__auto___68070 = arguments.length;
var i__27055__auto___68071 = (0);
while(true){
if((i__27055__auto___68071 < len__27054__auto___68070)){
args68067.push((arguments[i__27055__auto___68071]));

var G__68072 = (i__27055__auto___68071 + (1));
i__27055__auto___68071 = G__68072;
continue;
} else {
}
break;
}

var G__68069 = args68067.length;
switch (G__68069) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args68067.length)].join('')));

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
var len__27054__auto___68075 = arguments.length;
var i__27055__auto___68076 = (0);
while(true){
if((i__27055__auto___68076 < len__27054__auto___68075)){
args__27061__auto__.push((arguments[i__27055__auto___68076]));

var G__68077 = (i__27055__auto___68076 + (1));
i__27055__auto___68076 = G__68077;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq68074){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq68074));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__27061__auto__ = [];
var len__27054__auto___68079 = arguments.length;
var i__27055__auto___68080 = (0);
while(true){
if((i__27055__auto___68080 < len__27054__auto___68079)){
args__27061__auto__.push((arguments[i__27055__auto___68080]));

var G__68081 = (i__27055__auto___68080 + (1));
i__27055__auto___68080 = G__68081;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq68078){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq68078));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__68082){
var map__68085 = p__68082;
var map__68085__$1 = ((((!((map__68085 == null)))?((((map__68085.cljs$lang$protocol_mask$partition0$ & (64))) || (map__68085.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68085):map__68085);
var message = cljs.core.get.call(null,map__68085__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__68085__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__28201__auto___68247 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28201__auto___68247,ch){
return (function (){
var f__28202__auto__ = (function (){var switch__28088__auto__ = ((function (c__28201__auto___68247,ch){
return (function (state_68216){
var state_val_68217 = (state_68216[(1)]);
if((state_val_68217 === (7))){
var inst_68212 = (state_68216[(2)]);
var state_68216__$1 = state_68216;
var statearr_68218_68248 = state_68216__$1;
(statearr_68218_68248[(2)] = inst_68212);

(statearr_68218_68248[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68217 === (1))){
var state_68216__$1 = state_68216;
var statearr_68219_68249 = state_68216__$1;
(statearr_68219_68249[(2)] = null);

(statearr_68219_68249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68217 === (4))){
var inst_68169 = (state_68216[(7)]);
var inst_68169__$1 = (state_68216[(2)]);
var state_68216__$1 = (function (){var statearr_68220 = state_68216;
(statearr_68220[(7)] = inst_68169__$1);

return statearr_68220;
})();
if(cljs.core.truth_(inst_68169__$1)){
var statearr_68221_68250 = state_68216__$1;
(statearr_68221_68250[(1)] = (5));

} else {
var statearr_68222_68251 = state_68216__$1;
(statearr_68222_68251[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68217 === (15))){
var inst_68176 = (state_68216[(8)]);
var inst_68191 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_68176);
var inst_68192 = cljs.core.first.call(null,inst_68191);
var inst_68193 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_68192);
var inst_68194 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_68193)].join('');
var inst_68195 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_68194);
var state_68216__$1 = state_68216;
var statearr_68223_68252 = state_68216__$1;
(statearr_68223_68252[(2)] = inst_68195);

(statearr_68223_68252[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68217 === (13))){
var inst_68200 = (state_68216[(2)]);
var state_68216__$1 = state_68216;
var statearr_68224_68253 = state_68216__$1;
(statearr_68224_68253[(2)] = inst_68200);

(statearr_68224_68253[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68217 === (6))){
var state_68216__$1 = state_68216;
var statearr_68225_68254 = state_68216__$1;
(statearr_68225_68254[(2)] = null);

(statearr_68225_68254[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68217 === (17))){
var inst_68198 = (state_68216[(2)]);
var state_68216__$1 = state_68216;
var statearr_68226_68255 = state_68216__$1;
(statearr_68226_68255[(2)] = inst_68198);

(statearr_68226_68255[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68217 === (3))){
var inst_68214 = (state_68216[(2)]);
var state_68216__$1 = state_68216;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_68216__$1,inst_68214);
} else {
if((state_val_68217 === (12))){
var inst_68175 = (state_68216[(9)]);
var inst_68189 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_68175,opts);
var state_68216__$1 = state_68216;
if(cljs.core.truth_(inst_68189)){
var statearr_68227_68256 = state_68216__$1;
(statearr_68227_68256[(1)] = (15));

} else {
var statearr_68228_68257 = state_68216__$1;
(statearr_68228_68257[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68217 === (2))){
var state_68216__$1 = state_68216;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68216__$1,(4),ch);
} else {
if((state_val_68217 === (11))){
var inst_68176 = (state_68216[(8)]);
var inst_68181 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_68182 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_68176);
var inst_68183 = cljs.core.async.timeout.call(null,(1000));
var inst_68184 = [inst_68182,inst_68183];
var inst_68185 = (new cljs.core.PersistentVector(null,2,(5),inst_68181,inst_68184,null));
var state_68216__$1 = state_68216;
return cljs.core.async.ioc_alts_BANG_.call(null,state_68216__$1,(14),inst_68185);
} else {
if((state_val_68217 === (9))){
var inst_68176 = (state_68216[(8)]);
var inst_68202 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_68203 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_68176);
var inst_68204 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_68203);
var inst_68205 = [cljs.core.str("Not loading: "),cljs.core.str(inst_68204)].join('');
var inst_68206 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_68205);
var state_68216__$1 = (function (){var statearr_68229 = state_68216;
(statearr_68229[(10)] = inst_68202);

return statearr_68229;
})();
var statearr_68230_68258 = state_68216__$1;
(statearr_68230_68258[(2)] = inst_68206);

(statearr_68230_68258[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68217 === (5))){
var inst_68169 = (state_68216[(7)]);
var inst_68171 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_68172 = (new cljs.core.PersistentArrayMap(null,2,inst_68171,null));
var inst_68173 = (new cljs.core.PersistentHashSet(null,inst_68172,null));
var inst_68174 = figwheel.client.focus_msgs.call(null,inst_68173,inst_68169);
var inst_68175 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_68174);
var inst_68176 = cljs.core.first.call(null,inst_68174);
var inst_68177 = figwheel.client.autoload_QMARK_.call(null);
var state_68216__$1 = (function (){var statearr_68231 = state_68216;
(statearr_68231[(8)] = inst_68176);

(statearr_68231[(9)] = inst_68175);

return statearr_68231;
})();
if(cljs.core.truth_(inst_68177)){
var statearr_68232_68259 = state_68216__$1;
(statearr_68232_68259[(1)] = (8));

} else {
var statearr_68233_68260 = state_68216__$1;
(statearr_68233_68260[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68217 === (14))){
var inst_68187 = (state_68216[(2)]);
var state_68216__$1 = state_68216;
var statearr_68234_68261 = state_68216__$1;
(statearr_68234_68261[(2)] = inst_68187);

(statearr_68234_68261[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68217 === (16))){
var state_68216__$1 = state_68216;
var statearr_68235_68262 = state_68216__$1;
(statearr_68235_68262[(2)] = null);

(statearr_68235_68262[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68217 === (10))){
var inst_68208 = (state_68216[(2)]);
var state_68216__$1 = (function (){var statearr_68236 = state_68216;
(statearr_68236[(11)] = inst_68208);

return statearr_68236;
})();
var statearr_68237_68263 = state_68216__$1;
(statearr_68237_68263[(2)] = null);

(statearr_68237_68263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68217 === (8))){
var inst_68175 = (state_68216[(9)]);
var inst_68179 = figwheel.client.reload_file_state_QMARK_.call(null,inst_68175,opts);
var state_68216__$1 = state_68216;
if(cljs.core.truth_(inst_68179)){
var statearr_68238_68264 = state_68216__$1;
(statearr_68238_68264[(1)] = (11));

} else {
var statearr_68239_68265 = state_68216__$1;
(statearr_68239_68265[(1)] = (12));

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
});})(c__28201__auto___68247,ch))
;
return ((function (switch__28088__auto__,c__28201__auto___68247,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__28089__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__28089__auto____0 = (function (){
var statearr_68243 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_68243[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__28089__auto__);

(statearr_68243[(1)] = (1));

return statearr_68243;
});
var figwheel$client$file_reloader_plugin_$_state_machine__28089__auto____1 = (function (state_68216){
while(true){
var ret_value__28090__auto__ = (function (){try{while(true){
var result__28091__auto__ = switch__28088__auto__.call(null,state_68216);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28091__auto__;
}
break;
}
}catch (e68244){if((e68244 instanceof Object)){
var ex__28092__auto__ = e68244;
var statearr_68245_68266 = state_68216;
(statearr_68245_68266[(5)] = ex__28092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68216);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68244;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68267 = state_68216;
state_68216 = G__68267;
continue;
} else {
return ret_value__28090__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__28089__auto__ = function(state_68216){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__28089__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__28089__auto____1.call(this,state_68216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__28089__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__28089__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__28089__auto__;
})()
;})(switch__28088__auto__,c__28201__auto___68247,ch))
})();
var state__28203__auto__ = (function (){var statearr_68246 = f__28202__auto__.call(null);
(statearr_68246[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28201__auto___68247);

return statearr_68246;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28203__auto__);
});})(c__28201__auto___68247,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__68268_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__68268_SHARP_));
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
var base_path_68271 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_68271){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e68270){if((e68270 instanceof Error)){
var e = e68270;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_68271], null));
} else {
var e = e68270;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_68271))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__68272){
var map__68281 = p__68272;
var map__68281__$1 = ((((!((map__68281 == null)))?((((map__68281.cljs$lang$protocol_mask$partition0$ & (64))) || (map__68281.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68281):map__68281);
var opts = map__68281__$1;
var build_id = cljs.core.get.call(null,map__68281__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__68281,map__68281__$1,opts,build_id){
return (function (p__68283){
var vec__68284 = p__68283;
var seq__68285 = cljs.core.seq.call(null,vec__68284);
var first__68286 = cljs.core.first.call(null,seq__68285);
var seq__68285__$1 = cljs.core.next.call(null,seq__68285);
var map__68287 = first__68286;
var map__68287__$1 = ((((!((map__68287 == null)))?((((map__68287.cljs$lang$protocol_mask$partition0$ & (64))) || (map__68287.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68287):map__68287);
var msg = map__68287__$1;
var msg_name = cljs.core.get.call(null,map__68287__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__68285__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__68284,seq__68285,first__68286,seq__68285__$1,map__68287,map__68287__$1,msg,msg_name,_,map__68281,map__68281__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__68284,seq__68285,first__68286,seq__68285__$1,map__68287,map__68287__$1,msg,msg_name,_,map__68281,map__68281__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__68281,map__68281__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__68295){
var vec__68296 = p__68295;
var seq__68297 = cljs.core.seq.call(null,vec__68296);
var first__68298 = cljs.core.first.call(null,seq__68297);
var seq__68297__$1 = cljs.core.next.call(null,seq__68297);
var map__68299 = first__68298;
var map__68299__$1 = ((((!((map__68299 == null)))?((((map__68299.cljs$lang$protocol_mask$partition0$ & (64))) || (map__68299.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68299):map__68299);
var msg = map__68299__$1;
var msg_name = cljs.core.get.call(null,map__68299__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__68297__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__68301){
var map__68313 = p__68301;
var map__68313__$1 = ((((!((map__68313 == null)))?((((map__68313.cljs$lang$protocol_mask$partition0$ & (64))) || (map__68313.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68313):map__68313);
var on_compile_warning = cljs.core.get.call(null,map__68313__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__68313__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__68313,map__68313__$1,on_compile_warning,on_compile_fail){
return (function (p__68315){
var vec__68316 = p__68315;
var seq__68317 = cljs.core.seq.call(null,vec__68316);
var first__68318 = cljs.core.first.call(null,seq__68317);
var seq__68317__$1 = cljs.core.next.call(null,seq__68317);
var map__68319 = first__68318;
var map__68319__$1 = ((((!((map__68319 == null)))?((((map__68319.cljs$lang$protocol_mask$partition0$ & (64))) || (map__68319.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68319):map__68319);
var msg = map__68319__$1;
var msg_name = cljs.core.get.call(null,map__68319__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__68317__$1;
var pred__68321 = cljs.core._EQ_;
var expr__68322 = msg_name;
if(cljs.core.truth_(pred__68321.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__68322))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__68321.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__68322))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__68313,map__68313__$1,on_compile_warning,on_compile_fail))
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
var c__28201__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28201__auto__,msg_hist,msg_names,msg){
return (function (){
var f__28202__auto__ = (function (){var switch__28088__auto__ = ((function (c__28201__auto__,msg_hist,msg_names,msg){
return (function (state_68550){
var state_val_68551 = (state_68550[(1)]);
if((state_val_68551 === (7))){
var inst_68470 = (state_68550[(2)]);
var state_68550__$1 = state_68550;
if(cljs.core.truth_(inst_68470)){
var statearr_68552_68602 = state_68550__$1;
(statearr_68552_68602[(1)] = (8));

} else {
var statearr_68553_68603 = state_68550__$1;
(statearr_68553_68603[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68551 === (20))){
var inst_68544 = (state_68550[(2)]);
var state_68550__$1 = state_68550;
var statearr_68554_68604 = state_68550__$1;
(statearr_68554_68604[(2)] = inst_68544);

(statearr_68554_68604[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68551 === (27))){
var inst_68540 = (state_68550[(2)]);
var state_68550__$1 = state_68550;
var statearr_68555_68605 = state_68550__$1;
(statearr_68555_68605[(2)] = inst_68540);

(statearr_68555_68605[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68551 === (1))){
var inst_68463 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_68550__$1 = state_68550;
if(cljs.core.truth_(inst_68463)){
var statearr_68556_68606 = state_68550__$1;
(statearr_68556_68606[(1)] = (2));

} else {
var statearr_68557_68607 = state_68550__$1;
(statearr_68557_68607[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68551 === (24))){
var inst_68542 = (state_68550[(2)]);
var state_68550__$1 = state_68550;
var statearr_68558_68608 = state_68550__$1;
(statearr_68558_68608[(2)] = inst_68542);

(statearr_68558_68608[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68551 === (4))){
var inst_68548 = (state_68550[(2)]);
var state_68550__$1 = state_68550;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_68550__$1,inst_68548);
} else {
if((state_val_68551 === (15))){
var inst_68546 = (state_68550[(2)]);
var state_68550__$1 = state_68550;
var statearr_68559_68609 = state_68550__$1;
(statearr_68559_68609[(2)] = inst_68546);

(statearr_68559_68609[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68551 === (21))){
var inst_68499 = (state_68550[(2)]);
var inst_68500 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_68501 = figwheel.client.auto_jump_to_error.call(null,opts,inst_68500);
var state_68550__$1 = (function (){var statearr_68560 = state_68550;
(statearr_68560[(7)] = inst_68499);

return statearr_68560;
})();
var statearr_68561_68610 = state_68550__$1;
(statearr_68561_68610[(2)] = inst_68501);

(statearr_68561_68610[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68551 === (31))){
var inst_68529 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_68550__$1 = state_68550;
if(cljs.core.truth_(inst_68529)){
var statearr_68562_68611 = state_68550__$1;
(statearr_68562_68611[(1)] = (34));

} else {
var statearr_68563_68612 = state_68550__$1;
(statearr_68563_68612[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68551 === (32))){
var inst_68538 = (state_68550[(2)]);
var state_68550__$1 = state_68550;
var statearr_68564_68613 = state_68550__$1;
(statearr_68564_68613[(2)] = inst_68538);

(statearr_68564_68613[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68551 === (33))){
var inst_68525 = (state_68550[(2)]);
var inst_68526 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_68527 = figwheel.client.auto_jump_to_error.call(null,opts,inst_68526);
var state_68550__$1 = (function (){var statearr_68565 = state_68550;
(statearr_68565[(8)] = inst_68525);

return statearr_68565;
})();
var statearr_68566_68614 = state_68550__$1;
(statearr_68566_68614[(2)] = inst_68527);

(statearr_68566_68614[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68551 === (13))){
var inst_68484 = figwheel.client.heads_up.clear.call(null);
var state_68550__$1 = state_68550;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68550__$1,(16),inst_68484);
} else {
if((state_val_68551 === (22))){
var inst_68505 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_68506 = figwheel.client.heads_up.append_warning_message.call(null,inst_68505);
var state_68550__$1 = state_68550;
var statearr_68567_68615 = state_68550__$1;
(statearr_68567_68615[(2)] = inst_68506);

(statearr_68567_68615[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68551 === (36))){
var inst_68536 = (state_68550[(2)]);
var state_68550__$1 = state_68550;
var statearr_68568_68616 = state_68550__$1;
(statearr_68568_68616[(2)] = inst_68536);

(statearr_68568_68616[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68551 === (29))){
var inst_68516 = (state_68550[(2)]);
var inst_68517 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_68518 = figwheel.client.auto_jump_to_error.call(null,opts,inst_68517);
var state_68550__$1 = (function (){var statearr_68569 = state_68550;
(statearr_68569[(9)] = inst_68516);

return statearr_68569;
})();
var statearr_68570_68617 = state_68550__$1;
(statearr_68570_68617[(2)] = inst_68518);

(statearr_68570_68617[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68551 === (6))){
var inst_68465 = (state_68550[(10)]);
var state_68550__$1 = state_68550;
var statearr_68571_68618 = state_68550__$1;
(statearr_68571_68618[(2)] = inst_68465);

(statearr_68571_68618[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68551 === (28))){
var inst_68512 = (state_68550[(2)]);
var inst_68513 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_68514 = figwheel.client.heads_up.display_warning.call(null,inst_68513);
var state_68550__$1 = (function (){var statearr_68572 = state_68550;
(statearr_68572[(11)] = inst_68512);

return statearr_68572;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68550__$1,(29),inst_68514);
} else {
if((state_val_68551 === (25))){
var inst_68510 = figwheel.client.heads_up.clear.call(null);
var state_68550__$1 = state_68550;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68550__$1,(28),inst_68510);
} else {
if((state_val_68551 === (34))){
var inst_68531 = figwheel.client.heads_up.flash_loaded.call(null);
var state_68550__$1 = state_68550;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68550__$1,(37),inst_68531);
} else {
if((state_val_68551 === (17))){
var inst_68490 = (state_68550[(2)]);
var inst_68491 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_68492 = figwheel.client.auto_jump_to_error.call(null,opts,inst_68491);
var state_68550__$1 = (function (){var statearr_68573 = state_68550;
(statearr_68573[(12)] = inst_68490);

return statearr_68573;
})();
var statearr_68574_68619 = state_68550__$1;
(statearr_68574_68619[(2)] = inst_68492);

(statearr_68574_68619[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68551 === (3))){
var inst_68482 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_68550__$1 = state_68550;
if(cljs.core.truth_(inst_68482)){
var statearr_68575_68620 = state_68550__$1;
(statearr_68575_68620[(1)] = (13));

} else {
var statearr_68576_68621 = state_68550__$1;
(statearr_68576_68621[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68551 === (12))){
var inst_68478 = (state_68550[(2)]);
var state_68550__$1 = state_68550;
var statearr_68577_68622 = state_68550__$1;
(statearr_68577_68622[(2)] = inst_68478);

(statearr_68577_68622[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68551 === (2))){
var inst_68465 = (state_68550[(10)]);
var inst_68465__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_68550__$1 = (function (){var statearr_68578 = state_68550;
(statearr_68578[(10)] = inst_68465__$1);

return statearr_68578;
})();
if(cljs.core.truth_(inst_68465__$1)){
var statearr_68579_68623 = state_68550__$1;
(statearr_68579_68623[(1)] = (5));

} else {
var statearr_68580_68624 = state_68550__$1;
(statearr_68580_68624[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68551 === (23))){
var inst_68508 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_68550__$1 = state_68550;
if(cljs.core.truth_(inst_68508)){
var statearr_68581_68625 = state_68550__$1;
(statearr_68581_68625[(1)] = (25));

} else {
var statearr_68582_68626 = state_68550__$1;
(statearr_68582_68626[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68551 === (35))){
var state_68550__$1 = state_68550;
var statearr_68583_68627 = state_68550__$1;
(statearr_68583_68627[(2)] = null);

(statearr_68583_68627[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68551 === (19))){
var inst_68503 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_68550__$1 = state_68550;
if(cljs.core.truth_(inst_68503)){
var statearr_68584_68628 = state_68550__$1;
(statearr_68584_68628[(1)] = (22));

} else {
var statearr_68585_68629 = state_68550__$1;
(statearr_68585_68629[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68551 === (11))){
var inst_68474 = (state_68550[(2)]);
var state_68550__$1 = state_68550;
var statearr_68586_68630 = state_68550__$1;
(statearr_68586_68630[(2)] = inst_68474);

(statearr_68586_68630[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68551 === (9))){
var inst_68476 = figwheel.client.heads_up.clear.call(null);
var state_68550__$1 = state_68550;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68550__$1,(12),inst_68476);
} else {
if((state_val_68551 === (5))){
var inst_68467 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_68550__$1 = state_68550;
var statearr_68587_68631 = state_68550__$1;
(statearr_68587_68631[(2)] = inst_68467);

(statearr_68587_68631[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68551 === (14))){
var inst_68494 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_68550__$1 = state_68550;
if(cljs.core.truth_(inst_68494)){
var statearr_68588_68632 = state_68550__$1;
(statearr_68588_68632[(1)] = (18));

} else {
var statearr_68589_68633 = state_68550__$1;
(statearr_68589_68633[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68551 === (26))){
var inst_68520 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_68550__$1 = state_68550;
if(cljs.core.truth_(inst_68520)){
var statearr_68590_68634 = state_68550__$1;
(statearr_68590_68634[(1)] = (30));

} else {
var statearr_68591_68635 = state_68550__$1;
(statearr_68591_68635[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68551 === (16))){
var inst_68486 = (state_68550[(2)]);
var inst_68487 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_68488 = figwheel.client.heads_up.display_exception.call(null,inst_68487);
var state_68550__$1 = (function (){var statearr_68592 = state_68550;
(statearr_68592[(13)] = inst_68486);

return statearr_68592;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68550__$1,(17),inst_68488);
} else {
if((state_val_68551 === (30))){
var inst_68522 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_68523 = figwheel.client.heads_up.display_warning.call(null,inst_68522);
var state_68550__$1 = state_68550;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68550__$1,(33),inst_68523);
} else {
if((state_val_68551 === (10))){
var inst_68480 = (state_68550[(2)]);
var state_68550__$1 = state_68550;
var statearr_68593_68636 = state_68550__$1;
(statearr_68593_68636[(2)] = inst_68480);

(statearr_68593_68636[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68551 === (18))){
var inst_68496 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_68497 = figwheel.client.heads_up.display_exception.call(null,inst_68496);
var state_68550__$1 = state_68550;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68550__$1,(21),inst_68497);
} else {
if((state_val_68551 === (37))){
var inst_68533 = (state_68550[(2)]);
var state_68550__$1 = state_68550;
var statearr_68594_68637 = state_68550__$1;
(statearr_68594_68637[(2)] = inst_68533);

(statearr_68594_68637[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68551 === (8))){
var inst_68472 = figwheel.client.heads_up.flash_loaded.call(null);
var state_68550__$1 = state_68550;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68550__$1,(11),inst_68472);
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
});})(c__28201__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__28088__auto__,c__28201__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28089__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28089__auto____0 = (function (){
var statearr_68598 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_68598[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28089__auto__);

(statearr_68598[(1)] = (1));

return statearr_68598;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28089__auto____1 = (function (state_68550){
while(true){
var ret_value__28090__auto__ = (function (){try{while(true){
var result__28091__auto__ = switch__28088__auto__.call(null,state_68550);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28091__auto__;
}
break;
}
}catch (e68599){if((e68599 instanceof Object)){
var ex__28092__auto__ = e68599;
var statearr_68600_68638 = state_68550;
(statearr_68600_68638[(5)] = ex__28092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68550);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68599;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68639 = state_68550;
state_68550 = G__68639;
continue;
} else {
return ret_value__28090__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28089__auto__ = function(state_68550){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28089__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28089__auto____1.call(this,state_68550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28089__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28089__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28089__auto__;
})()
;})(switch__28088__auto__,c__28201__auto__,msg_hist,msg_names,msg))
})();
var state__28203__auto__ = (function (){var statearr_68601 = f__28202__auto__.call(null);
(statearr_68601[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28201__auto__);

return statearr_68601;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28203__auto__);
});})(c__28201__auto__,msg_hist,msg_names,msg))
);

return c__28201__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__28201__auto___68702 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28201__auto___68702,ch){
return (function (){
var f__28202__auto__ = (function (){var switch__28088__auto__ = ((function (c__28201__auto___68702,ch){
return (function (state_68685){
var state_val_68686 = (state_68685[(1)]);
if((state_val_68686 === (1))){
var state_68685__$1 = state_68685;
var statearr_68687_68703 = state_68685__$1;
(statearr_68687_68703[(2)] = null);

(statearr_68687_68703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68686 === (2))){
var state_68685__$1 = state_68685;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68685__$1,(4),ch);
} else {
if((state_val_68686 === (3))){
var inst_68683 = (state_68685[(2)]);
var state_68685__$1 = state_68685;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_68685__$1,inst_68683);
} else {
if((state_val_68686 === (4))){
var inst_68673 = (state_68685[(7)]);
var inst_68673__$1 = (state_68685[(2)]);
var state_68685__$1 = (function (){var statearr_68688 = state_68685;
(statearr_68688[(7)] = inst_68673__$1);

return statearr_68688;
})();
if(cljs.core.truth_(inst_68673__$1)){
var statearr_68689_68704 = state_68685__$1;
(statearr_68689_68704[(1)] = (5));

} else {
var statearr_68690_68705 = state_68685__$1;
(statearr_68690_68705[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68686 === (5))){
var inst_68673 = (state_68685[(7)]);
var inst_68675 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_68673);
var state_68685__$1 = state_68685;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68685__$1,(8),inst_68675);
} else {
if((state_val_68686 === (6))){
var state_68685__$1 = state_68685;
var statearr_68691_68706 = state_68685__$1;
(statearr_68691_68706[(2)] = null);

(statearr_68691_68706[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68686 === (7))){
var inst_68681 = (state_68685[(2)]);
var state_68685__$1 = state_68685;
var statearr_68692_68707 = state_68685__$1;
(statearr_68692_68707[(2)] = inst_68681);

(statearr_68692_68707[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68686 === (8))){
var inst_68677 = (state_68685[(2)]);
var state_68685__$1 = (function (){var statearr_68693 = state_68685;
(statearr_68693[(8)] = inst_68677);

return statearr_68693;
})();
var statearr_68694_68708 = state_68685__$1;
(statearr_68694_68708[(2)] = null);

(statearr_68694_68708[(1)] = (2));


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
});})(c__28201__auto___68702,ch))
;
return ((function (switch__28088__auto__,c__28201__auto___68702,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__28089__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__28089__auto____0 = (function (){
var statearr_68698 = [null,null,null,null,null,null,null,null,null];
(statearr_68698[(0)] = figwheel$client$heads_up_plugin_$_state_machine__28089__auto__);

(statearr_68698[(1)] = (1));

return statearr_68698;
});
var figwheel$client$heads_up_plugin_$_state_machine__28089__auto____1 = (function (state_68685){
while(true){
var ret_value__28090__auto__ = (function (){try{while(true){
var result__28091__auto__ = switch__28088__auto__.call(null,state_68685);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28091__auto__;
}
break;
}
}catch (e68699){if((e68699 instanceof Object)){
var ex__28092__auto__ = e68699;
var statearr_68700_68709 = state_68685;
(statearr_68700_68709[(5)] = ex__28092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68685);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68699;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68710 = state_68685;
state_68685 = G__68710;
continue;
} else {
return ret_value__28090__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__28089__auto__ = function(state_68685){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__28089__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__28089__auto____1.call(this,state_68685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__28089__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__28089__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__28089__auto__;
})()
;})(switch__28088__auto__,c__28201__auto___68702,ch))
})();
var state__28203__auto__ = (function (){var statearr_68701 = f__28202__auto__.call(null);
(statearr_68701[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28201__auto___68702);

return statearr_68701;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28203__auto__);
});})(c__28201__auto___68702,ch))
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
var c__28201__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28201__auto__){
return (function (){
var f__28202__auto__ = (function (){var switch__28088__auto__ = ((function (c__28201__auto__){
return (function (state_68731){
var state_val_68732 = (state_68731[(1)]);
if((state_val_68732 === (1))){
var inst_68726 = cljs.core.async.timeout.call(null,(3000));
var state_68731__$1 = state_68731;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68731__$1,(2),inst_68726);
} else {
if((state_val_68732 === (2))){
var inst_68728 = (state_68731[(2)]);
var inst_68729 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_68731__$1 = (function (){var statearr_68733 = state_68731;
(statearr_68733[(7)] = inst_68728);

return statearr_68733;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_68731__$1,inst_68729);
} else {
return null;
}
}
});})(c__28201__auto__))
;
return ((function (switch__28088__auto__,c__28201__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__28089__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__28089__auto____0 = (function (){
var statearr_68737 = [null,null,null,null,null,null,null,null];
(statearr_68737[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__28089__auto__);

(statearr_68737[(1)] = (1));

return statearr_68737;
});
var figwheel$client$enforce_project_plugin_$_state_machine__28089__auto____1 = (function (state_68731){
while(true){
var ret_value__28090__auto__ = (function (){try{while(true){
var result__28091__auto__ = switch__28088__auto__.call(null,state_68731);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28091__auto__;
}
break;
}
}catch (e68738){if((e68738 instanceof Object)){
var ex__28092__auto__ = e68738;
var statearr_68739_68741 = state_68731;
(statearr_68739_68741[(5)] = ex__28092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68731);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68738;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68742 = state_68731;
state_68731 = G__68742;
continue;
} else {
return ret_value__28090__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__28089__auto__ = function(state_68731){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__28089__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__28089__auto____1.call(this,state_68731);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__28089__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__28089__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__28089__auto__;
})()
;})(switch__28088__auto__,c__28201__auto__))
})();
var state__28203__auto__ = (function (){var statearr_68740 = f__28202__auto__.call(null);
(statearr_68740[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28201__auto__);

return statearr_68740;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28203__auto__);
});})(c__28201__auto__))
);

return c__28201__auto__;
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
var c__28201__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28201__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__28202__auto__ = (function (){var switch__28088__auto__ = ((function (c__28201__auto__,figwheel_version,temp__4657__auto__){
return (function (state_68765){
var state_val_68766 = (state_68765[(1)]);
if((state_val_68766 === (1))){
var inst_68759 = cljs.core.async.timeout.call(null,(2000));
var state_68765__$1 = state_68765;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68765__$1,(2),inst_68759);
} else {
if((state_val_68766 === (2))){
var inst_68761 = (state_68765[(2)]);
var inst_68762 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_68763 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_68762);
var state_68765__$1 = (function (){var statearr_68767 = state_68765;
(statearr_68767[(7)] = inst_68761);

return statearr_68767;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_68765__$1,inst_68763);
} else {
return null;
}
}
});})(c__28201__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__28088__auto__,c__28201__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28089__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28089__auto____0 = (function (){
var statearr_68771 = [null,null,null,null,null,null,null,null];
(statearr_68771[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28089__auto__);

(statearr_68771[(1)] = (1));

return statearr_68771;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28089__auto____1 = (function (state_68765){
while(true){
var ret_value__28090__auto__ = (function (){try{while(true){
var result__28091__auto__ = switch__28088__auto__.call(null,state_68765);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28091__auto__;
}
break;
}
}catch (e68772){if((e68772 instanceof Object)){
var ex__28092__auto__ = e68772;
var statearr_68773_68775 = state_68765;
(statearr_68773_68775[(5)] = ex__28092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68765);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68772;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68776 = state_68765;
state_68765 = G__68776;
continue;
} else {
return ret_value__28090__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28089__auto__ = function(state_68765){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28089__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28089__auto____1.call(this,state_68765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28089__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28089__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28089__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28089__auto__;
})()
;})(switch__28088__auto__,c__28201__auto__,figwheel_version,temp__4657__auto__))
})();
var state__28203__auto__ = (function (){var statearr_68774 = f__28202__auto__.call(null);
(statearr_68774[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28201__auto__);

return statearr_68774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28203__auto__);
});})(c__28201__auto__,figwheel_version,temp__4657__auto__))
);

return c__28201__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__68777){
var map__68781 = p__68777;
var map__68781__$1 = ((((!((map__68781 == null)))?((((map__68781.cljs$lang$protocol_mask$partition0$ & (64))) || (map__68781.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68781):map__68781);
var file = cljs.core.get.call(null,map__68781__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__68781__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__68781__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__68783 = "";
var G__68783__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__68783),cljs.core.str("file "),cljs.core.str(file)].join(''):G__68783);
var G__68783__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__68783__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__68783__$1);
if(cljs.core.truth_((function (){var and__25967__auto__ = line;
if(cljs.core.truth_(and__25967__auto__)){
return column;
} else {
return and__25967__auto__;
}
})())){
return [cljs.core.str(G__68783__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__68783__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__68784){
var map__68791 = p__68784;
var map__68791__$1 = ((((!((map__68791 == null)))?((((map__68791.cljs$lang$protocol_mask$partition0$ & (64))) || (map__68791.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68791):map__68791);
var ed = map__68791__$1;
var formatted_exception = cljs.core.get.call(null,map__68791__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__68791__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__68791__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__68793_68797 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__68794_68798 = null;
var count__68795_68799 = (0);
var i__68796_68800 = (0);
while(true){
if((i__68796_68800 < count__68795_68799)){
var msg_68801 = cljs.core._nth.call(null,chunk__68794_68798,i__68796_68800);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_68801);

var G__68802 = seq__68793_68797;
var G__68803 = chunk__68794_68798;
var G__68804 = count__68795_68799;
var G__68805 = (i__68796_68800 + (1));
seq__68793_68797 = G__68802;
chunk__68794_68798 = G__68803;
count__68795_68799 = G__68804;
i__68796_68800 = G__68805;
continue;
} else {
var temp__4657__auto___68806 = cljs.core.seq.call(null,seq__68793_68797);
if(temp__4657__auto___68806){
var seq__68793_68807__$1 = temp__4657__auto___68806;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__68793_68807__$1)){
var c__26790__auto___68808 = cljs.core.chunk_first.call(null,seq__68793_68807__$1);
var G__68809 = cljs.core.chunk_rest.call(null,seq__68793_68807__$1);
var G__68810 = c__26790__auto___68808;
var G__68811 = cljs.core.count.call(null,c__26790__auto___68808);
var G__68812 = (0);
seq__68793_68797 = G__68809;
chunk__68794_68798 = G__68810;
count__68795_68799 = G__68811;
i__68796_68800 = G__68812;
continue;
} else {
var msg_68813 = cljs.core.first.call(null,seq__68793_68807__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_68813);

var G__68814 = cljs.core.next.call(null,seq__68793_68807__$1);
var G__68815 = null;
var G__68816 = (0);
var G__68817 = (0);
seq__68793_68797 = G__68814;
chunk__68794_68798 = G__68815;
count__68795_68799 = G__68816;
i__68796_68800 = G__68817;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__68818){
var map__68821 = p__68818;
var map__68821__$1 = ((((!((map__68821 == null)))?((((map__68821.cljs$lang$protocol_mask$partition0$ & (64))) || (map__68821.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68821):map__68821);
var w = map__68821__$1;
var message = cljs.core.get.call(null,map__68821__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__68833 = cljs.core.seq.call(null,plugins);
var chunk__68834 = null;
var count__68835 = (0);
var i__68836 = (0);
while(true){
if((i__68836 < count__68835)){
var vec__68837 = cljs.core._nth.call(null,chunk__68834,i__68836);
var k = cljs.core.nth.call(null,vec__68837,(0),null);
var plugin = cljs.core.nth.call(null,vec__68837,(1),null);
if(cljs.core.truth_(plugin)){
var pl_68843 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__68833,chunk__68834,count__68835,i__68836,pl_68843,vec__68837,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_68843.call(null,msg_hist);
});})(seq__68833,chunk__68834,count__68835,i__68836,pl_68843,vec__68837,k,plugin))
);
} else {
}

var G__68844 = seq__68833;
var G__68845 = chunk__68834;
var G__68846 = count__68835;
var G__68847 = (i__68836 + (1));
seq__68833 = G__68844;
chunk__68834 = G__68845;
count__68835 = G__68846;
i__68836 = G__68847;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__68833);
if(temp__4657__auto__){
var seq__68833__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__68833__$1)){
var c__26790__auto__ = cljs.core.chunk_first.call(null,seq__68833__$1);
var G__68848 = cljs.core.chunk_rest.call(null,seq__68833__$1);
var G__68849 = c__26790__auto__;
var G__68850 = cljs.core.count.call(null,c__26790__auto__);
var G__68851 = (0);
seq__68833 = G__68848;
chunk__68834 = G__68849;
count__68835 = G__68850;
i__68836 = G__68851;
continue;
} else {
var vec__68840 = cljs.core.first.call(null,seq__68833__$1);
var k = cljs.core.nth.call(null,vec__68840,(0),null);
var plugin = cljs.core.nth.call(null,vec__68840,(1),null);
if(cljs.core.truth_(plugin)){
var pl_68852 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__68833,chunk__68834,count__68835,i__68836,pl_68852,vec__68840,k,plugin,seq__68833__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_68852.call(null,msg_hist);
});})(seq__68833,chunk__68834,count__68835,i__68836,pl_68852,vec__68840,k,plugin,seq__68833__$1,temp__4657__auto__))
);
} else {
}

var G__68853 = cljs.core.next.call(null,seq__68833__$1);
var G__68854 = null;
var G__68855 = (0);
var G__68856 = (0);
seq__68833 = G__68853;
chunk__68834 = G__68854;
count__68835 = G__68855;
i__68836 = G__68856;
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
var args68857 = [];
var len__27054__auto___68864 = arguments.length;
var i__27055__auto___68865 = (0);
while(true){
if((i__27055__auto___68865 < len__27054__auto___68864)){
args68857.push((arguments[i__27055__auto___68865]));

var G__68866 = (i__27055__auto___68865 + (1));
i__27055__auto___68865 = G__68866;
continue;
} else {
}
break;
}

var G__68859 = args68857.length;
switch (G__68859) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args68857.length)].join('')));

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

var seq__68860_68868 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__68861_68869 = null;
var count__68862_68870 = (0);
var i__68863_68871 = (0);
while(true){
if((i__68863_68871 < count__68862_68870)){
var msg_68872 = cljs.core._nth.call(null,chunk__68861_68869,i__68863_68871);
figwheel.client.socket.handle_incoming_message.call(null,msg_68872);

var G__68873 = seq__68860_68868;
var G__68874 = chunk__68861_68869;
var G__68875 = count__68862_68870;
var G__68876 = (i__68863_68871 + (1));
seq__68860_68868 = G__68873;
chunk__68861_68869 = G__68874;
count__68862_68870 = G__68875;
i__68863_68871 = G__68876;
continue;
} else {
var temp__4657__auto___68877 = cljs.core.seq.call(null,seq__68860_68868);
if(temp__4657__auto___68877){
var seq__68860_68878__$1 = temp__4657__auto___68877;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__68860_68878__$1)){
var c__26790__auto___68879 = cljs.core.chunk_first.call(null,seq__68860_68878__$1);
var G__68880 = cljs.core.chunk_rest.call(null,seq__68860_68878__$1);
var G__68881 = c__26790__auto___68879;
var G__68882 = cljs.core.count.call(null,c__26790__auto___68879);
var G__68883 = (0);
seq__68860_68868 = G__68880;
chunk__68861_68869 = G__68881;
count__68862_68870 = G__68882;
i__68863_68871 = G__68883;
continue;
} else {
var msg_68884 = cljs.core.first.call(null,seq__68860_68878__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_68884);

var G__68885 = cljs.core.next.call(null,seq__68860_68878__$1);
var G__68886 = null;
var G__68887 = (0);
var G__68888 = (0);
seq__68860_68868 = G__68885;
chunk__68861_68869 = G__68886;
count__68862_68870 = G__68887;
i__68863_68871 = G__68888;
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
var len__27054__auto___68893 = arguments.length;
var i__27055__auto___68894 = (0);
while(true){
if((i__27055__auto___68894 < len__27054__auto___68893)){
args__27061__auto__.push((arguments[i__27055__auto___68894]));

var G__68895 = (i__27055__auto___68894 + (1));
i__27055__auto___68894 = G__68895;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__68890){
var map__68891 = p__68890;
var map__68891__$1 = ((((!((map__68891 == null)))?((((map__68891.cljs$lang$protocol_mask$partition0$ & (64))) || (map__68891.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68891):map__68891);
var opts = map__68891__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq68889){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq68889));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e68897){if((e68897 instanceof Error)){
var e = e68897;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e68897;

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
return (function (p__68901){
var map__68902 = p__68901;
var map__68902__$1 = ((((!((map__68902 == null)))?((((map__68902.cljs$lang$protocol_mask$partition0$ & (64))) || (map__68902.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68902):map__68902);
var msg_name = cljs.core.get.call(null,map__68902__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1498707053372