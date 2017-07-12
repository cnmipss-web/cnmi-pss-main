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
var args37079 = [];
var len__27064__auto___37082 = arguments.length;
var i__27065__auto___37083 = (0);
while(true){
if((i__27065__auto___37083 < len__27064__auto___37082)){
args37079.push((arguments[i__27065__auto___37083]));

var G__37084 = (i__27065__auto___37083 + (1));
i__27065__auto___37083 = G__37084;
continue;
} else {
}
break;
}

var G__37081 = args37079.length;
switch (G__37081) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37079.length)].join('')));

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
var args__27071__auto__ = [];
var len__27064__auto___37087 = arguments.length;
var i__27065__auto___37088 = (0);
while(true){
if((i__27065__auto___37088 < len__27064__auto___37087)){
args__27071__auto__.push((arguments[i__27065__auto___37088]));

var G__37089 = (i__27065__auto___37088 + (1));
i__27065__auto___37088 = G__37089;
continue;
} else {
}
break;
}

var argseq__27072__auto__ = ((((0) < args__27071__auto__.length))?(new cljs.core.IndexedSeq(args__27071__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__27072__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq37086){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37086));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__27071__auto__ = [];
var len__27064__auto___37091 = arguments.length;
var i__27065__auto___37092 = (0);
while(true){
if((i__27065__auto___37092 < len__27064__auto___37091)){
args__27071__auto__.push((arguments[i__27065__auto___37092]));

var G__37093 = (i__27065__auto___37092 + (1));
i__27065__auto___37092 = G__37093;
continue;
} else {
}
break;
}

var argseq__27072__auto__ = ((((0) < args__27071__auto__.length))?(new cljs.core.IndexedSeq(args__27071__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__27072__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq37090){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37090));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__37094){
var map__37097 = p__37094;
var map__37097__$1 = ((((!((map__37097 == null)))?((((map__37097.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37097.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37097):map__37097);
var message = cljs.core.get.call(null,map__37097__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__37097__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__25989__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__25989__auto__)){
return or__25989__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__25977__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__25977__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__25977__auto__;
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
var c__29669__auto___37259 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29669__auto___37259,ch){
return (function (){
var f__29670__auto__ = (function (){var switch__29557__auto__ = ((function (c__29669__auto___37259,ch){
return (function (state_37228){
var state_val_37229 = (state_37228[(1)]);
if((state_val_37229 === (7))){
var inst_37224 = (state_37228[(2)]);
var state_37228__$1 = state_37228;
var statearr_37230_37260 = state_37228__$1;
(statearr_37230_37260[(2)] = inst_37224);

(statearr_37230_37260[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37229 === (1))){
var state_37228__$1 = state_37228;
var statearr_37231_37261 = state_37228__$1;
(statearr_37231_37261[(2)] = null);

(statearr_37231_37261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37229 === (4))){
var inst_37181 = (state_37228[(7)]);
var inst_37181__$1 = (state_37228[(2)]);
var state_37228__$1 = (function (){var statearr_37232 = state_37228;
(statearr_37232[(7)] = inst_37181__$1);

return statearr_37232;
})();
if(cljs.core.truth_(inst_37181__$1)){
var statearr_37233_37262 = state_37228__$1;
(statearr_37233_37262[(1)] = (5));

} else {
var statearr_37234_37263 = state_37228__$1;
(statearr_37234_37263[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37229 === (15))){
var inst_37188 = (state_37228[(8)]);
var inst_37203 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37188);
var inst_37204 = cljs.core.first.call(null,inst_37203);
var inst_37205 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_37204);
var inst_37206 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_37205)].join('');
var inst_37207 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_37206);
var state_37228__$1 = state_37228;
var statearr_37235_37264 = state_37228__$1;
(statearr_37235_37264[(2)] = inst_37207);

(statearr_37235_37264[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37229 === (13))){
var inst_37212 = (state_37228[(2)]);
var state_37228__$1 = state_37228;
var statearr_37236_37265 = state_37228__$1;
(statearr_37236_37265[(2)] = inst_37212);

(statearr_37236_37265[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37229 === (6))){
var state_37228__$1 = state_37228;
var statearr_37237_37266 = state_37228__$1;
(statearr_37237_37266[(2)] = null);

(statearr_37237_37266[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37229 === (17))){
var inst_37210 = (state_37228[(2)]);
var state_37228__$1 = state_37228;
var statearr_37238_37267 = state_37228__$1;
(statearr_37238_37267[(2)] = inst_37210);

(statearr_37238_37267[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37229 === (3))){
var inst_37226 = (state_37228[(2)]);
var state_37228__$1 = state_37228;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37228__$1,inst_37226);
} else {
if((state_val_37229 === (12))){
var inst_37187 = (state_37228[(9)]);
var inst_37201 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_37187,opts);
var state_37228__$1 = state_37228;
if(cljs.core.truth_(inst_37201)){
var statearr_37239_37268 = state_37228__$1;
(statearr_37239_37268[(1)] = (15));

} else {
var statearr_37240_37269 = state_37228__$1;
(statearr_37240_37269[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37229 === (2))){
var state_37228__$1 = state_37228;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37228__$1,(4),ch);
} else {
if((state_val_37229 === (11))){
var inst_37188 = (state_37228[(8)]);
var inst_37193 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37194 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_37188);
var inst_37195 = cljs.core.async.timeout.call(null,(1000));
var inst_37196 = [inst_37194,inst_37195];
var inst_37197 = (new cljs.core.PersistentVector(null,2,(5),inst_37193,inst_37196,null));
var state_37228__$1 = state_37228;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37228__$1,(14),inst_37197);
} else {
if((state_val_37229 === (9))){
var inst_37188 = (state_37228[(8)]);
var inst_37214 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_37215 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37188);
var inst_37216 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37215);
var inst_37217 = [cljs.core.str("Not loading: "),cljs.core.str(inst_37216)].join('');
var inst_37218 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_37217);
var state_37228__$1 = (function (){var statearr_37241 = state_37228;
(statearr_37241[(10)] = inst_37214);

return statearr_37241;
})();
var statearr_37242_37270 = state_37228__$1;
(statearr_37242_37270[(2)] = inst_37218);

(statearr_37242_37270[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37229 === (5))){
var inst_37181 = (state_37228[(7)]);
var inst_37183 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_37184 = (new cljs.core.PersistentArrayMap(null,2,inst_37183,null));
var inst_37185 = (new cljs.core.PersistentHashSet(null,inst_37184,null));
var inst_37186 = figwheel.client.focus_msgs.call(null,inst_37185,inst_37181);
var inst_37187 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_37186);
var inst_37188 = cljs.core.first.call(null,inst_37186);
var inst_37189 = figwheel.client.autoload_QMARK_.call(null);
var state_37228__$1 = (function (){var statearr_37243 = state_37228;
(statearr_37243[(8)] = inst_37188);

(statearr_37243[(9)] = inst_37187);

return statearr_37243;
})();
if(cljs.core.truth_(inst_37189)){
var statearr_37244_37271 = state_37228__$1;
(statearr_37244_37271[(1)] = (8));

} else {
var statearr_37245_37272 = state_37228__$1;
(statearr_37245_37272[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37229 === (14))){
var inst_37199 = (state_37228[(2)]);
var state_37228__$1 = state_37228;
var statearr_37246_37273 = state_37228__$1;
(statearr_37246_37273[(2)] = inst_37199);

(statearr_37246_37273[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37229 === (16))){
var state_37228__$1 = state_37228;
var statearr_37247_37274 = state_37228__$1;
(statearr_37247_37274[(2)] = null);

(statearr_37247_37274[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37229 === (10))){
var inst_37220 = (state_37228[(2)]);
var state_37228__$1 = (function (){var statearr_37248 = state_37228;
(statearr_37248[(11)] = inst_37220);

return statearr_37248;
})();
var statearr_37249_37275 = state_37228__$1;
(statearr_37249_37275[(2)] = null);

(statearr_37249_37275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37229 === (8))){
var inst_37187 = (state_37228[(9)]);
var inst_37191 = figwheel.client.reload_file_state_QMARK_.call(null,inst_37187,opts);
var state_37228__$1 = state_37228;
if(cljs.core.truth_(inst_37191)){
var statearr_37250_37276 = state_37228__$1;
(statearr_37250_37276[(1)] = (11));

} else {
var statearr_37251_37277 = state_37228__$1;
(statearr_37251_37277[(1)] = (12));

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
});})(c__29669__auto___37259,ch))
;
return ((function (switch__29557__auto__,c__29669__auto___37259,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__29558__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__29558__auto____0 = (function (){
var statearr_37255 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37255[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__29558__auto__);

(statearr_37255[(1)] = (1));

return statearr_37255;
});
var figwheel$client$file_reloader_plugin_$_state_machine__29558__auto____1 = (function (state_37228){
while(true){
var ret_value__29559__auto__ = (function (){try{while(true){
var result__29560__auto__ = switch__29557__auto__.call(null,state_37228);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29560__auto__;
}
break;
}
}catch (e37256){if((e37256 instanceof Object)){
var ex__29561__auto__ = e37256;
var statearr_37257_37278 = state_37228;
(statearr_37257_37278[(5)] = ex__29561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37228);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37256;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37279 = state_37228;
state_37228 = G__37279;
continue;
} else {
return ret_value__29559__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__29558__auto__ = function(state_37228){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__29558__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__29558__auto____1.call(this,state_37228);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__29558__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__29558__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__29558__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__29558__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__29558__auto__;
})()
;})(switch__29557__auto__,c__29669__auto___37259,ch))
})();
var state__29671__auto__ = (function (){var statearr_37258 = f__29670__auto__.call(null);
(statearr_37258[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29669__auto___37259);

return statearr_37258;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29671__auto__);
});})(c__29669__auto___37259,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__37280_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__37280_SHARP_));
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
var base_path_37283 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_37283){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e37282){if((e37282 instanceof Error)){
var e = e37282;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_37283], null));
} else {
var e = e37282;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_37283))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__37284){
var map__37293 = p__37284;
var map__37293__$1 = ((((!((map__37293 == null)))?((((map__37293.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37293.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37293):map__37293);
var opts = map__37293__$1;
var build_id = cljs.core.get.call(null,map__37293__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__37293,map__37293__$1,opts,build_id){
return (function (p__37295){
var vec__37296 = p__37295;
var seq__37297 = cljs.core.seq.call(null,vec__37296);
var first__37298 = cljs.core.first.call(null,seq__37297);
var seq__37297__$1 = cljs.core.next.call(null,seq__37297);
var map__37299 = first__37298;
var map__37299__$1 = ((((!((map__37299 == null)))?((((map__37299.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37299.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37299):map__37299);
var msg = map__37299__$1;
var msg_name = cljs.core.get.call(null,map__37299__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37297__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__37296,seq__37297,first__37298,seq__37297__$1,map__37299,map__37299__$1,msg,msg_name,_,map__37293,map__37293__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__37296,seq__37297,first__37298,seq__37297__$1,map__37299,map__37299__$1,msg,msg_name,_,map__37293,map__37293__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__37293,map__37293__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__37307){
var vec__37308 = p__37307;
var seq__37309 = cljs.core.seq.call(null,vec__37308);
var first__37310 = cljs.core.first.call(null,seq__37309);
var seq__37309__$1 = cljs.core.next.call(null,seq__37309);
var map__37311 = first__37310;
var map__37311__$1 = ((((!((map__37311 == null)))?((((map__37311.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37311.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37311):map__37311);
var msg = map__37311__$1;
var msg_name = cljs.core.get.call(null,map__37311__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37309__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__37313){
var map__37325 = p__37313;
var map__37325__$1 = ((((!((map__37325 == null)))?((((map__37325.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37325.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37325):map__37325);
var on_compile_warning = cljs.core.get.call(null,map__37325__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__37325__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__37325,map__37325__$1,on_compile_warning,on_compile_fail){
return (function (p__37327){
var vec__37328 = p__37327;
var seq__37329 = cljs.core.seq.call(null,vec__37328);
var first__37330 = cljs.core.first.call(null,seq__37329);
var seq__37329__$1 = cljs.core.next.call(null,seq__37329);
var map__37331 = first__37330;
var map__37331__$1 = ((((!((map__37331 == null)))?((((map__37331.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37331.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37331):map__37331);
var msg = map__37331__$1;
var msg_name = cljs.core.get.call(null,map__37331__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37329__$1;
var pred__37333 = cljs.core._EQ_;
var expr__37334 = msg_name;
if(cljs.core.truth_(pred__37333.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__37334))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__37333.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__37334))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__37325,map__37325__$1,on_compile_warning,on_compile_fail))
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
var c__29669__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29669__auto__,msg_hist,msg_names,msg){
return (function (){
var f__29670__auto__ = (function (){var switch__29557__auto__ = ((function (c__29669__auto__,msg_hist,msg_names,msg){
return (function (state_37562){
var state_val_37563 = (state_37562[(1)]);
if((state_val_37563 === (7))){
var inst_37482 = (state_37562[(2)]);
var state_37562__$1 = state_37562;
if(cljs.core.truth_(inst_37482)){
var statearr_37564_37614 = state_37562__$1;
(statearr_37564_37614[(1)] = (8));

} else {
var statearr_37565_37615 = state_37562__$1;
(statearr_37565_37615[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37563 === (20))){
var inst_37556 = (state_37562[(2)]);
var state_37562__$1 = state_37562;
var statearr_37566_37616 = state_37562__$1;
(statearr_37566_37616[(2)] = inst_37556);

(statearr_37566_37616[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37563 === (27))){
var inst_37552 = (state_37562[(2)]);
var state_37562__$1 = state_37562;
var statearr_37567_37617 = state_37562__$1;
(statearr_37567_37617[(2)] = inst_37552);

(statearr_37567_37617[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37563 === (1))){
var inst_37475 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_37562__$1 = state_37562;
if(cljs.core.truth_(inst_37475)){
var statearr_37568_37618 = state_37562__$1;
(statearr_37568_37618[(1)] = (2));

} else {
var statearr_37569_37619 = state_37562__$1;
(statearr_37569_37619[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37563 === (24))){
var inst_37554 = (state_37562[(2)]);
var state_37562__$1 = state_37562;
var statearr_37570_37620 = state_37562__$1;
(statearr_37570_37620[(2)] = inst_37554);

(statearr_37570_37620[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37563 === (4))){
var inst_37560 = (state_37562[(2)]);
var state_37562__$1 = state_37562;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37562__$1,inst_37560);
} else {
if((state_val_37563 === (15))){
var inst_37558 = (state_37562[(2)]);
var state_37562__$1 = state_37562;
var statearr_37571_37621 = state_37562__$1;
(statearr_37571_37621[(2)] = inst_37558);

(statearr_37571_37621[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37563 === (21))){
var inst_37511 = (state_37562[(2)]);
var inst_37512 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37513 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37512);
var state_37562__$1 = (function (){var statearr_37572 = state_37562;
(statearr_37572[(7)] = inst_37511);

return statearr_37572;
})();
var statearr_37573_37622 = state_37562__$1;
(statearr_37573_37622[(2)] = inst_37513);

(statearr_37573_37622[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37563 === (31))){
var inst_37541 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_37562__$1 = state_37562;
if(cljs.core.truth_(inst_37541)){
var statearr_37574_37623 = state_37562__$1;
(statearr_37574_37623[(1)] = (34));

} else {
var statearr_37575_37624 = state_37562__$1;
(statearr_37575_37624[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37563 === (32))){
var inst_37550 = (state_37562[(2)]);
var state_37562__$1 = state_37562;
var statearr_37576_37625 = state_37562__$1;
(statearr_37576_37625[(2)] = inst_37550);

(statearr_37576_37625[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37563 === (33))){
var inst_37537 = (state_37562[(2)]);
var inst_37538 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37539 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37538);
var state_37562__$1 = (function (){var statearr_37577 = state_37562;
(statearr_37577[(8)] = inst_37537);

return statearr_37577;
})();
var statearr_37578_37626 = state_37562__$1;
(statearr_37578_37626[(2)] = inst_37539);

(statearr_37578_37626[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37563 === (13))){
var inst_37496 = figwheel.client.heads_up.clear.call(null);
var state_37562__$1 = state_37562;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37562__$1,(16),inst_37496);
} else {
if((state_val_37563 === (22))){
var inst_37517 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37518 = figwheel.client.heads_up.append_warning_message.call(null,inst_37517);
var state_37562__$1 = state_37562;
var statearr_37579_37627 = state_37562__$1;
(statearr_37579_37627[(2)] = inst_37518);

(statearr_37579_37627[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37563 === (36))){
var inst_37548 = (state_37562[(2)]);
var state_37562__$1 = state_37562;
var statearr_37580_37628 = state_37562__$1;
(statearr_37580_37628[(2)] = inst_37548);

(statearr_37580_37628[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37563 === (29))){
var inst_37528 = (state_37562[(2)]);
var inst_37529 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37530 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37529);
var state_37562__$1 = (function (){var statearr_37581 = state_37562;
(statearr_37581[(9)] = inst_37528);

return statearr_37581;
})();
var statearr_37582_37629 = state_37562__$1;
(statearr_37582_37629[(2)] = inst_37530);

(statearr_37582_37629[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37563 === (6))){
var inst_37477 = (state_37562[(10)]);
var state_37562__$1 = state_37562;
var statearr_37583_37630 = state_37562__$1;
(statearr_37583_37630[(2)] = inst_37477);

(statearr_37583_37630[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37563 === (28))){
var inst_37524 = (state_37562[(2)]);
var inst_37525 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37526 = figwheel.client.heads_up.display_warning.call(null,inst_37525);
var state_37562__$1 = (function (){var statearr_37584 = state_37562;
(statearr_37584[(11)] = inst_37524);

return statearr_37584;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37562__$1,(29),inst_37526);
} else {
if((state_val_37563 === (25))){
var inst_37522 = figwheel.client.heads_up.clear.call(null);
var state_37562__$1 = state_37562;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37562__$1,(28),inst_37522);
} else {
if((state_val_37563 === (34))){
var inst_37543 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37562__$1 = state_37562;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37562__$1,(37),inst_37543);
} else {
if((state_val_37563 === (17))){
var inst_37502 = (state_37562[(2)]);
var inst_37503 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37504 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37503);
var state_37562__$1 = (function (){var statearr_37585 = state_37562;
(statearr_37585[(12)] = inst_37502);

return statearr_37585;
})();
var statearr_37586_37631 = state_37562__$1;
(statearr_37586_37631[(2)] = inst_37504);

(statearr_37586_37631[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37563 === (3))){
var inst_37494 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_37562__$1 = state_37562;
if(cljs.core.truth_(inst_37494)){
var statearr_37587_37632 = state_37562__$1;
(statearr_37587_37632[(1)] = (13));

} else {
var statearr_37588_37633 = state_37562__$1;
(statearr_37588_37633[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37563 === (12))){
var inst_37490 = (state_37562[(2)]);
var state_37562__$1 = state_37562;
var statearr_37589_37634 = state_37562__$1;
(statearr_37589_37634[(2)] = inst_37490);

(statearr_37589_37634[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37563 === (2))){
var inst_37477 = (state_37562[(10)]);
var inst_37477__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_37562__$1 = (function (){var statearr_37590 = state_37562;
(statearr_37590[(10)] = inst_37477__$1);

return statearr_37590;
})();
if(cljs.core.truth_(inst_37477__$1)){
var statearr_37591_37635 = state_37562__$1;
(statearr_37591_37635[(1)] = (5));

} else {
var statearr_37592_37636 = state_37562__$1;
(statearr_37592_37636[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37563 === (23))){
var inst_37520 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_37562__$1 = state_37562;
if(cljs.core.truth_(inst_37520)){
var statearr_37593_37637 = state_37562__$1;
(statearr_37593_37637[(1)] = (25));

} else {
var statearr_37594_37638 = state_37562__$1;
(statearr_37594_37638[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37563 === (35))){
var state_37562__$1 = state_37562;
var statearr_37595_37639 = state_37562__$1;
(statearr_37595_37639[(2)] = null);

(statearr_37595_37639[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37563 === (19))){
var inst_37515 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_37562__$1 = state_37562;
if(cljs.core.truth_(inst_37515)){
var statearr_37596_37640 = state_37562__$1;
(statearr_37596_37640[(1)] = (22));

} else {
var statearr_37597_37641 = state_37562__$1;
(statearr_37597_37641[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37563 === (11))){
var inst_37486 = (state_37562[(2)]);
var state_37562__$1 = state_37562;
var statearr_37598_37642 = state_37562__$1;
(statearr_37598_37642[(2)] = inst_37486);

(statearr_37598_37642[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37563 === (9))){
var inst_37488 = figwheel.client.heads_up.clear.call(null);
var state_37562__$1 = state_37562;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37562__$1,(12),inst_37488);
} else {
if((state_val_37563 === (5))){
var inst_37479 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_37562__$1 = state_37562;
var statearr_37599_37643 = state_37562__$1;
(statearr_37599_37643[(2)] = inst_37479);

(statearr_37599_37643[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37563 === (14))){
var inst_37506 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_37562__$1 = state_37562;
if(cljs.core.truth_(inst_37506)){
var statearr_37600_37644 = state_37562__$1;
(statearr_37600_37644[(1)] = (18));

} else {
var statearr_37601_37645 = state_37562__$1;
(statearr_37601_37645[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37563 === (26))){
var inst_37532 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_37562__$1 = state_37562;
if(cljs.core.truth_(inst_37532)){
var statearr_37602_37646 = state_37562__$1;
(statearr_37602_37646[(1)] = (30));

} else {
var statearr_37603_37647 = state_37562__$1;
(statearr_37603_37647[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37563 === (16))){
var inst_37498 = (state_37562[(2)]);
var inst_37499 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37500 = figwheel.client.heads_up.display_exception.call(null,inst_37499);
var state_37562__$1 = (function (){var statearr_37604 = state_37562;
(statearr_37604[(13)] = inst_37498);

return statearr_37604;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37562__$1,(17),inst_37500);
} else {
if((state_val_37563 === (30))){
var inst_37534 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37535 = figwheel.client.heads_up.display_warning.call(null,inst_37534);
var state_37562__$1 = state_37562;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37562__$1,(33),inst_37535);
} else {
if((state_val_37563 === (10))){
var inst_37492 = (state_37562[(2)]);
var state_37562__$1 = state_37562;
var statearr_37605_37648 = state_37562__$1;
(statearr_37605_37648[(2)] = inst_37492);

(statearr_37605_37648[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37563 === (18))){
var inst_37508 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37509 = figwheel.client.heads_up.display_exception.call(null,inst_37508);
var state_37562__$1 = state_37562;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37562__$1,(21),inst_37509);
} else {
if((state_val_37563 === (37))){
var inst_37545 = (state_37562[(2)]);
var state_37562__$1 = state_37562;
var statearr_37606_37649 = state_37562__$1;
(statearr_37606_37649[(2)] = inst_37545);

(statearr_37606_37649[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37563 === (8))){
var inst_37484 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37562__$1 = state_37562;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37562__$1,(11),inst_37484);
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
});})(c__29669__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__29557__auto__,c__29669__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29558__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29558__auto____0 = (function (){
var statearr_37610 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37610[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29558__auto__);

(statearr_37610[(1)] = (1));

return statearr_37610;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29558__auto____1 = (function (state_37562){
while(true){
var ret_value__29559__auto__ = (function (){try{while(true){
var result__29560__auto__ = switch__29557__auto__.call(null,state_37562);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29560__auto__;
}
break;
}
}catch (e37611){if((e37611 instanceof Object)){
var ex__29561__auto__ = e37611;
var statearr_37612_37650 = state_37562;
(statearr_37612_37650[(5)] = ex__29561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37562);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37611;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37651 = state_37562;
state_37562 = G__37651;
continue;
} else {
return ret_value__29559__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29558__auto__ = function(state_37562){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29558__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29558__auto____1.call(this,state_37562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29558__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29558__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29558__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29558__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29558__auto__;
})()
;})(switch__29557__auto__,c__29669__auto__,msg_hist,msg_names,msg))
})();
var state__29671__auto__ = (function (){var statearr_37613 = f__29670__auto__.call(null);
(statearr_37613[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29669__auto__);

return statearr_37613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29671__auto__);
});})(c__29669__auto__,msg_hist,msg_names,msg))
);

return c__29669__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__29669__auto___37714 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29669__auto___37714,ch){
return (function (){
var f__29670__auto__ = (function (){var switch__29557__auto__ = ((function (c__29669__auto___37714,ch){
return (function (state_37697){
var state_val_37698 = (state_37697[(1)]);
if((state_val_37698 === (1))){
var state_37697__$1 = state_37697;
var statearr_37699_37715 = state_37697__$1;
(statearr_37699_37715[(2)] = null);

(statearr_37699_37715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37698 === (2))){
var state_37697__$1 = state_37697;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37697__$1,(4),ch);
} else {
if((state_val_37698 === (3))){
var inst_37695 = (state_37697[(2)]);
var state_37697__$1 = state_37697;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37697__$1,inst_37695);
} else {
if((state_val_37698 === (4))){
var inst_37685 = (state_37697[(7)]);
var inst_37685__$1 = (state_37697[(2)]);
var state_37697__$1 = (function (){var statearr_37700 = state_37697;
(statearr_37700[(7)] = inst_37685__$1);

return statearr_37700;
})();
if(cljs.core.truth_(inst_37685__$1)){
var statearr_37701_37716 = state_37697__$1;
(statearr_37701_37716[(1)] = (5));

} else {
var statearr_37702_37717 = state_37697__$1;
(statearr_37702_37717[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37698 === (5))){
var inst_37685 = (state_37697[(7)]);
var inst_37687 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_37685);
var state_37697__$1 = state_37697;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37697__$1,(8),inst_37687);
} else {
if((state_val_37698 === (6))){
var state_37697__$1 = state_37697;
var statearr_37703_37718 = state_37697__$1;
(statearr_37703_37718[(2)] = null);

(statearr_37703_37718[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37698 === (7))){
var inst_37693 = (state_37697[(2)]);
var state_37697__$1 = state_37697;
var statearr_37704_37719 = state_37697__$1;
(statearr_37704_37719[(2)] = inst_37693);

(statearr_37704_37719[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37698 === (8))){
var inst_37689 = (state_37697[(2)]);
var state_37697__$1 = (function (){var statearr_37705 = state_37697;
(statearr_37705[(8)] = inst_37689);

return statearr_37705;
})();
var statearr_37706_37720 = state_37697__$1;
(statearr_37706_37720[(2)] = null);

(statearr_37706_37720[(1)] = (2));


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
});})(c__29669__auto___37714,ch))
;
return ((function (switch__29557__auto__,c__29669__auto___37714,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__29558__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__29558__auto____0 = (function (){
var statearr_37710 = [null,null,null,null,null,null,null,null,null];
(statearr_37710[(0)] = figwheel$client$heads_up_plugin_$_state_machine__29558__auto__);

(statearr_37710[(1)] = (1));

return statearr_37710;
});
var figwheel$client$heads_up_plugin_$_state_machine__29558__auto____1 = (function (state_37697){
while(true){
var ret_value__29559__auto__ = (function (){try{while(true){
var result__29560__auto__ = switch__29557__auto__.call(null,state_37697);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29560__auto__;
}
break;
}
}catch (e37711){if((e37711 instanceof Object)){
var ex__29561__auto__ = e37711;
var statearr_37712_37721 = state_37697;
(statearr_37712_37721[(5)] = ex__29561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37697);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37711;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37722 = state_37697;
state_37697 = G__37722;
continue;
} else {
return ret_value__29559__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__29558__auto__ = function(state_37697){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__29558__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__29558__auto____1.call(this,state_37697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__29558__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__29558__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__29558__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__29558__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__29558__auto__;
})()
;})(switch__29557__auto__,c__29669__auto___37714,ch))
})();
var state__29671__auto__ = (function (){var statearr_37713 = f__29670__auto__.call(null);
(statearr_37713[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29669__auto___37714);

return statearr_37713;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29671__auto__);
});})(c__29669__auto___37714,ch))
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
var c__29669__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29669__auto__){
return (function (){
var f__29670__auto__ = (function (){var switch__29557__auto__ = ((function (c__29669__auto__){
return (function (state_37743){
var state_val_37744 = (state_37743[(1)]);
if((state_val_37744 === (1))){
var inst_37738 = cljs.core.async.timeout.call(null,(3000));
var state_37743__$1 = state_37743;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37743__$1,(2),inst_37738);
} else {
if((state_val_37744 === (2))){
var inst_37740 = (state_37743[(2)]);
var inst_37741 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_37743__$1 = (function (){var statearr_37745 = state_37743;
(statearr_37745[(7)] = inst_37740);

return statearr_37745;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37743__$1,inst_37741);
} else {
return null;
}
}
});})(c__29669__auto__))
;
return ((function (switch__29557__auto__,c__29669__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__29558__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__29558__auto____0 = (function (){
var statearr_37749 = [null,null,null,null,null,null,null,null];
(statearr_37749[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__29558__auto__);

(statearr_37749[(1)] = (1));

return statearr_37749;
});
var figwheel$client$enforce_project_plugin_$_state_machine__29558__auto____1 = (function (state_37743){
while(true){
var ret_value__29559__auto__ = (function (){try{while(true){
var result__29560__auto__ = switch__29557__auto__.call(null,state_37743);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29560__auto__;
}
break;
}
}catch (e37750){if((e37750 instanceof Object)){
var ex__29561__auto__ = e37750;
var statearr_37751_37753 = state_37743;
(statearr_37751_37753[(5)] = ex__29561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37743);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37750;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37754 = state_37743;
state_37743 = G__37754;
continue;
} else {
return ret_value__29559__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__29558__auto__ = function(state_37743){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__29558__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__29558__auto____1.call(this,state_37743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__29558__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__29558__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__29558__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__29558__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__29558__auto__;
})()
;})(switch__29557__auto__,c__29669__auto__))
})();
var state__29671__auto__ = (function (){var statearr_37752 = f__29670__auto__.call(null);
(statearr_37752[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29669__auto__);

return statearr_37752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29671__auto__);
});})(c__29669__auto__))
);

return c__29669__auto__;
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
var c__29669__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29669__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__29670__auto__ = (function (){var switch__29557__auto__ = ((function (c__29669__auto__,figwheel_version,temp__4657__auto__){
return (function (state_37777){
var state_val_37778 = (state_37777[(1)]);
if((state_val_37778 === (1))){
var inst_37771 = cljs.core.async.timeout.call(null,(2000));
var state_37777__$1 = state_37777;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37777__$1,(2),inst_37771);
} else {
if((state_val_37778 === (2))){
var inst_37773 = (state_37777[(2)]);
var inst_37774 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_37775 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_37774);
var state_37777__$1 = (function (){var statearr_37779 = state_37777;
(statearr_37779[(7)] = inst_37773);

return statearr_37779;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37777__$1,inst_37775);
} else {
return null;
}
}
});})(c__29669__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__29557__auto__,c__29669__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29558__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29558__auto____0 = (function (){
var statearr_37783 = [null,null,null,null,null,null,null,null];
(statearr_37783[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29558__auto__);

(statearr_37783[(1)] = (1));

return statearr_37783;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29558__auto____1 = (function (state_37777){
while(true){
var ret_value__29559__auto__ = (function (){try{while(true){
var result__29560__auto__ = switch__29557__auto__.call(null,state_37777);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29560__auto__;
}
break;
}
}catch (e37784){if((e37784 instanceof Object)){
var ex__29561__auto__ = e37784;
var statearr_37785_37787 = state_37777;
(statearr_37785_37787[(5)] = ex__29561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37777);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37784;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37788 = state_37777;
state_37777 = G__37788;
continue;
} else {
return ret_value__29559__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29558__auto__ = function(state_37777){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29558__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29558__auto____1.call(this,state_37777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29558__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29558__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29558__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29558__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29558__auto__;
})()
;})(switch__29557__auto__,c__29669__auto__,figwheel_version,temp__4657__auto__))
})();
var state__29671__auto__ = (function (){var statearr_37786 = f__29670__auto__.call(null);
(statearr_37786[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29669__auto__);

return statearr_37786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29671__auto__);
});})(c__29669__auto__,figwheel_version,temp__4657__auto__))
);

return c__29669__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__37789){
var map__37793 = p__37789;
var map__37793__$1 = ((((!((map__37793 == null)))?((((map__37793.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37793.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37793):map__37793);
var file = cljs.core.get.call(null,map__37793__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37793__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37793__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__37795 = "";
var G__37795__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__37795),cljs.core.str("file "),cljs.core.str(file)].join(''):G__37795);
var G__37795__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__37795__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__37795__$1);
if(cljs.core.truth_((function (){var and__25977__auto__ = line;
if(cljs.core.truth_(and__25977__auto__)){
return column;
} else {
return and__25977__auto__;
}
})())){
return [cljs.core.str(G__37795__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__37795__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__37796){
var map__37803 = p__37796;
var map__37803__$1 = ((((!((map__37803 == null)))?((((map__37803.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37803.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37803):map__37803);
var ed = map__37803__$1;
var formatted_exception = cljs.core.get.call(null,map__37803__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__37803__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__37803__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__37805_37809 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__37806_37810 = null;
var count__37807_37811 = (0);
var i__37808_37812 = (0);
while(true){
if((i__37808_37812 < count__37807_37811)){
var msg_37813 = cljs.core._nth.call(null,chunk__37806_37810,i__37808_37812);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37813);

var G__37814 = seq__37805_37809;
var G__37815 = chunk__37806_37810;
var G__37816 = count__37807_37811;
var G__37817 = (i__37808_37812 + (1));
seq__37805_37809 = G__37814;
chunk__37806_37810 = G__37815;
count__37807_37811 = G__37816;
i__37808_37812 = G__37817;
continue;
} else {
var temp__4657__auto___37818 = cljs.core.seq.call(null,seq__37805_37809);
if(temp__4657__auto___37818){
var seq__37805_37819__$1 = temp__4657__auto___37818;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37805_37819__$1)){
var c__26800__auto___37820 = cljs.core.chunk_first.call(null,seq__37805_37819__$1);
var G__37821 = cljs.core.chunk_rest.call(null,seq__37805_37819__$1);
var G__37822 = c__26800__auto___37820;
var G__37823 = cljs.core.count.call(null,c__26800__auto___37820);
var G__37824 = (0);
seq__37805_37809 = G__37821;
chunk__37806_37810 = G__37822;
count__37807_37811 = G__37823;
i__37808_37812 = G__37824;
continue;
} else {
var msg_37825 = cljs.core.first.call(null,seq__37805_37819__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37825);

var G__37826 = cljs.core.next.call(null,seq__37805_37819__$1);
var G__37827 = null;
var G__37828 = (0);
var G__37829 = (0);
seq__37805_37809 = G__37826;
chunk__37806_37810 = G__37827;
count__37807_37811 = G__37828;
i__37808_37812 = G__37829;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__37830){
var map__37833 = p__37830;
var map__37833__$1 = ((((!((map__37833 == null)))?((((map__37833.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37833.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37833):map__37833);
var w = map__37833__$1;
var message = cljs.core.get.call(null,map__37833__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__25977__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__25977__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__25977__auto__;
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
var seq__37845 = cljs.core.seq.call(null,plugins);
var chunk__37846 = null;
var count__37847 = (0);
var i__37848 = (0);
while(true){
if((i__37848 < count__37847)){
var vec__37849 = cljs.core._nth.call(null,chunk__37846,i__37848);
var k = cljs.core.nth.call(null,vec__37849,(0),null);
var plugin = cljs.core.nth.call(null,vec__37849,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37855 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37845,chunk__37846,count__37847,i__37848,pl_37855,vec__37849,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_37855.call(null,msg_hist);
});})(seq__37845,chunk__37846,count__37847,i__37848,pl_37855,vec__37849,k,plugin))
);
} else {
}

var G__37856 = seq__37845;
var G__37857 = chunk__37846;
var G__37858 = count__37847;
var G__37859 = (i__37848 + (1));
seq__37845 = G__37856;
chunk__37846 = G__37857;
count__37847 = G__37858;
i__37848 = G__37859;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37845);
if(temp__4657__auto__){
var seq__37845__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37845__$1)){
var c__26800__auto__ = cljs.core.chunk_first.call(null,seq__37845__$1);
var G__37860 = cljs.core.chunk_rest.call(null,seq__37845__$1);
var G__37861 = c__26800__auto__;
var G__37862 = cljs.core.count.call(null,c__26800__auto__);
var G__37863 = (0);
seq__37845 = G__37860;
chunk__37846 = G__37861;
count__37847 = G__37862;
i__37848 = G__37863;
continue;
} else {
var vec__37852 = cljs.core.first.call(null,seq__37845__$1);
var k = cljs.core.nth.call(null,vec__37852,(0),null);
var plugin = cljs.core.nth.call(null,vec__37852,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37864 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37845,chunk__37846,count__37847,i__37848,pl_37864,vec__37852,k,plugin,seq__37845__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_37864.call(null,msg_hist);
});})(seq__37845,chunk__37846,count__37847,i__37848,pl_37864,vec__37852,k,plugin,seq__37845__$1,temp__4657__auto__))
);
} else {
}

var G__37865 = cljs.core.next.call(null,seq__37845__$1);
var G__37866 = null;
var G__37867 = (0);
var G__37868 = (0);
seq__37845 = G__37865;
chunk__37846 = G__37866;
count__37847 = G__37867;
i__37848 = G__37868;
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
var args37869 = [];
var len__27064__auto___37876 = arguments.length;
var i__27065__auto___37877 = (0);
while(true){
if((i__27065__auto___37877 < len__27064__auto___37876)){
args37869.push((arguments[i__27065__auto___37877]));

var G__37878 = (i__27065__auto___37877 + (1));
i__27065__auto___37877 = G__37878;
continue;
} else {
}
break;
}

var G__37871 = args37869.length;
switch (G__37871) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37869.length)].join('')));

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

var seq__37872_37880 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__37873_37881 = null;
var count__37874_37882 = (0);
var i__37875_37883 = (0);
while(true){
if((i__37875_37883 < count__37874_37882)){
var msg_37884 = cljs.core._nth.call(null,chunk__37873_37881,i__37875_37883);
figwheel.client.socket.handle_incoming_message.call(null,msg_37884);

var G__37885 = seq__37872_37880;
var G__37886 = chunk__37873_37881;
var G__37887 = count__37874_37882;
var G__37888 = (i__37875_37883 + (1));
seq__37872_37880 = G__37885;
chunk__37873_37881 = G__37886;
count__37874_37882 = G__37887;
i__37875_37883 = G__37888;
continue;
} else {
var temp__4657__auto___37889 = cljs.core.seq.call(null,seq__37872_37880);
if(temp__4657__auto___37889){
var seq__37872_37890__$1 = temp__4657__auto___37889;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37872_37890__$1)){
var c__26800__auto___37891 = cljs.core.chunk_first.call(null,seq__37872_37890__$1);
var G__37892 = cljs.core.chunk_rest.call(null,seq__37872_37890__$1);
var G__37893 = c__26800__auto___37891;
var G__37894 = cljs.core.count.call(null,c__26800__auto___37891);
var G__37895 = (0);
seq__37872_37880 = G__37892;
chunk__37873_37881 = G__37893;
count__37874_37882 = G__37894;
i__37875_37883 = G__37895;
continue;
} else {
var msg_37896 = cljs.core.first.call(null,seq__37872_37890__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_37896);

var G__37897 = cljs.core.next.call(null,seq__37872_37890__$1);
var G__37898 = null;
var G__37899 = (0);
var G__37900 = (0);
seq__37872_37880 = G__37897;
chunk__37873_37881 = G__37898;
count__37874_37882 = G__37899;
i__37875_37883 = G__37900;
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
var args__27071__auto__ = [];
var len__27064__auto___37905 = arguments.length;
var i__27065__auto___37906 = (0);
while(true){
if((i__27065__auto___37906 < len__27064__auto___37905)){
args__27071__auto__.push((arguments[i__27065__auto___37906]));

var G__37907 = (i__27065__auto___37906 + (1));
i__27065__auto___37906 = G__37907;
continue;
} else {
}
break;
}

var argseq__27072__auto__ = ((((0) < args__27071__auto__.length))?(new cljs.core.IndexedSeq(args__27071__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__27072__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__37902){
var map__37903 = p__37902;
var map__37903__$1 = ((((!((map__37903 == null)))?((((map__37903.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37903.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37903):map__37903);
var opts = map__37903__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq37901){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37901));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e37909){if((e37909 instanceof Error)){
var e = e37909;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e37909;

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
return (function (p__37913){
var map__37914 = p__37913;
var map__37914__$1 = ((((!((map__37914 == null)))?((((map__37914.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37914.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37914):map__37914);
var msg_name = cljs.core.get.call(null,map__37914__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1499813249704