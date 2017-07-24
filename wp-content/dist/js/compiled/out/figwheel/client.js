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
figwheel.client._figwheel_version_ = "0.5.10";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__37212 = arguments.length;
switch (G__37212) {
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
var args__28088__auto__ = [];
var len__28081__auto___37215 = arguments.length;
var i__28082__auto___37216 = (0);
while(true){
if((i__28082__auto___37216 < len__28081__auto___37215)){
args__28088__auto__.push((arguments[i__28082__auto___37216]));

var G__37217 = (i__28082__auto___37216 + (1));
i__28082__auto___37216 = G__37217;
continue;
} else {
}
break;
}

var argseq__28089__auto__ = ((((0) < args__28088__auto__.length))?(new cljs.core.IndexedSeq(args__28088__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__28089__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq37214){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37214));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__28088__auto__ = [];
var len__28081__auto___37219 = arguments.length;
var i__28082__auto___37220 = (0);
while(true){
if((i__28082__auto___37220 < len__28081__auto___37219)){
args__28088__auto__.push((arguments[i__28082__auto___37220]));

var G__37221 = (i__28082__auto___37220 + (1));
i__28082__auto___37220 = G__37221;
continue;
} else {
}
break;
}

var argseq__28089__auto__ = ((((0) < args__28088__auto__.length))?(new cljs.core.IndexedSeq(args__28088__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__28089__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq37218){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37218));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__37222){
var map__37223 = p__37222;
var map__37223__$1 = ((((!((map__37223 == null)))?((((map__37223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37223.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37223):map__37223);
var message = cljs.core.get.call(null,map__37223__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__37223__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" : "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__26956__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__26956__auto__)){
return or__26956__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__26944__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__26944__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__26944__auto__;
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
var c__30037__auto___37302 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30037__auto___37302,ch){
return (function (){
var f__30038__auto__ = (function (){var switch__29949__auto__ = ((function (c__30037__auto___37302,ch){
return (function (state_37274){
var state_val_37275 = (state_37274[(1)]);
if((state_val_37275 === (7))){
var inst_37270 = (state_37274[(2)]);
var state_37274__$1 = state_37274;
var statearr_37276_37303 = state_37274__$1;
(statearr_37276_37303[(2)] = inst_37270);

(statearr_37276_37303[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37275 === (1))){
var state_37274__$1 = state_37274;
var statearr_37277_37304 = state_37274__$1;
(statearr_37277_37304[(2)] = null);

(statearr_37277_37304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37275 === (4))){
var inst_37227 = (state_37274[(7)]);
var inst_37227__$1 = (state_37274[(2)]);
var state_37274__$1 = (function (){var statearr_37278 = state_37274;
(statearr_37278[(7)] = inst_37227__$1);

return statearr_37278;
})();
if(cljs.core.truth_(inst_37227__$1)){
var statearr_37279_37305 = state_37274__$1;
(statearr_37279_37305[(1)] = (5));

} else {
var statearr_37280_37306 = state_37274__$1;
(statearr_37280_37306[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37275 === (15))){
var inst_37234 = (state_37274[(8)]);
var inst_37249 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37234);
var inst_37250 = cljs.core.first.call(null,inst_37249);
var inst_37251 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_37250);
var inst_37252 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not loading code with warnings - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37251)].join('');
var inst_37253 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_37252);
var state_37274__$1 = state_37274;
var statearr_37281_37307 = state_37274__$1;
(statearr_37281_37307[(2)] = inst_37253);

(statearr_37281_37307[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37275 === (13))){
var inst_37258 = (state_37274[(2)]);
var state_37274__$1 = state_37274;
var statearr_37282_37308 = state_37274__$1;
(statearr_37282_37308[(2)] = inst_37258);

(statearr_37282_37308[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37275 === (6))){
var state_37274__$1 = state_37274;
var statearr_37283_37309 = state_37274__$1;
(statearr_37283_37309[(2)] = null);

(statearr_37283_37309[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37275 === (17))){
var inst_37256 = (state_37274[(2)]);
var state_37274__$1 = state_37274;
var statearr_37284_37310 = state_37274__$1;
(statearr_37284_37310[(2)] = inst_37256);

(statearr_37284_37310[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37275 === (3))){
var inst_37272 = (state_37274[(2)]);
var state_37274__$1 = state_37274;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37274__$1,inst_37272);
} else {
if((state_val_37275 === (12))){
var inst_37233 = (state_37274[(9)]);
var inst_37247 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_37233,opts);
var state_37274__$1 = state_37274;
if(cljs.core.truth_(inst_37247)){
var statearr_37285_37311 = state_37274__$1;
(statearr_37285_37311[(1)] = (15));

} else {
var statearr_37286_37312 = state_37274__$1;
(statearr_37286_37312[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37275 === (2))){
var state_37274__$1 = state_37274;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37274__$1,(4),ch);
} else {
if((state_val_37275 === (11))){
var inst_37234 = (state_37274[(8)]);
var inst_37239 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37240 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_37234);
var inst_37241 = cljs.core.async.timeout.call(null,(1000));
var inst_37242 = [inst_37240,inst_37241];
var inst_37243 = (new cljs.core.PersistentVector(null,2,(5),inst_37239,inst_37242,null));
var state_37274__$1 = state_37274;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37274__$1,(14),inst_37243);
} else {
if((state_val_37275 === (9))){
var inst_37234 = (state_37274[(8)]);
var inst_37260 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_37261 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37234);
var inst_37262 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37261);
var inst_37263 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Not loading: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37262)].join('');
var inst_37264 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_37263);
var state_37274__$1 = (function (){var statearr_37287 = state_37274;
(statearr_37287[(10)] = inst_37260);

return statearr_37287;
})();
var statearr_37288_37313 = state_37274__$1;
(statearr_37288_37313[(2)] = inst_37264);

(statearr_37288_37313[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37275 === (5))){
var inst_37227 = (state_37274[(7)]);
var inst_37229 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_37230 = (new cljs.core.PersistentArrayMap(null,2,inst_37229,null));
var inst_37231 = (new cljs.core.PersistentHashSet(null,inst_37230,null));
var inst_37232 = figwheel.client.focus_msgs.call(null,inst_37231,inst_37227);
var inst_37233 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_37232);
var inst_37234 = cljs.core.first.call(null,inst_37232);
var inst_37235 = figwheel.client.autoload_QMARK_.call(null);
var state_37274__$1 = (function (){var statearr_37289 = state_37274;
(statearr_37289[(8)] = inst_37234);

(statearr_37289[(9)] = inst_37233);

return statearr_37289;
})();
if(cljs.core.truth_(inst_37235)){
var statearr_37290_37314 = state_37274__$1;
(statearr_37290_37314[(1)] = (8));

} else {
var statearr_37291_37315 = state_37274__$1;
(statearr_37291_37315[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37275 === (14))){
var inst_37245 = (state_37274[(2)]);
var state_37274__$1 = state_37274;
var statearr_37292_37316 = state_37274__$1;
(statearr_37292_37316[(2)] = inst_37245);

(statearr_37292_37316[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37275 === (16))){
var state_37274__$1 = state_37274;
var statearr_37293_37317 = state_37274__$1;
(statearr_37293_37317[(2)] = null);

(statearr_37293_37317[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37275 === (10))){
var inst_37266 = (state_37274[(2)]);
var state_37274__$1 = (function (){var statearr_37294 = state_37274;
(statearr_37294[(11)] = inst_37266);

return statearr_37294;
})();
var statearr_37295_37318 = state_37274__$1;
(statearr_37295_37318[(2)] = null);

(statearr_37295_37318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37275 === (8))){
var inst_37233 = (state_37274[(9)]);
var inst_37237 = figwheel.client.reload_file_state_QMARK_.call(null,inst_37233,opts);
var state_37274__$1 = state_37274;
if(cljs.core.truth_(inst_37237)){
var statearr_37296_37319 = state_37274__$1;
(statearr_37296_37319[(1)] = (11));

} else {
var statearr_37297_37320 = state_37274__$1;
(statearr_37297_37320[(1)] = (12));

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
});})(c__30037__auto___37302,ch))
;
return ((function (switch__29949__auto__,c__30037__auto___37302,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__29950__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__29950__auto____0 = (function (){
var statearr_37298 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37298[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__29950__auto__);

(statearr_37298[(1)] = (1));

return statearr_37298;
});
var figwheel$client$file_reloader_plugin_$_state_machine__29950__auto____1 = (function (state_37274){
while(true){
var ret_value__29951__auto__ = (function (){try{while(true){
var result__29952__auto__ = switch__29949__auto__.call(null,state_37274);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29952__auto__;
}
break;
}
}catch (e37299){if((e37299 instanceof Object)){
var ex__29953__auto__ = e37299;
var statearr_37300_37321 = state_37274;
(statearr_37300_37321[(5)] = ex__29953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37274);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37299;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37322 = state_37274;
state_37274 = G__37322;
continue;
} else {
return ret_value__29951__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__29950__auto__ = function(state_37274){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__29950__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__29950__auto____1.call(this,state_37274);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__29950__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__29950__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__29950__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__29950__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__29950__auto__;
})()
;})(switch__29949__auto__,c__30037__auto___37302,ch))
})();
var state__30039__auto__ = (function (){var statearr_37301 = f__30038__auto__.call(null);
(statearr_37301[(6)] = c__30037__auto___37302);

return statearr_37301;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30039__auto__);
});})(c__30037__auto___37302,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__37323_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__37323_SHARP_));
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
var base_path_37325 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_37325){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e37324){if((e37324 instanceof Error)){
var e = e37324;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_37325], null));
} else {
var e = e37324;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_37325))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__37326){
var map__37327 = p__37326;
var map__37327__$1 = ((((!((map__37327 == null)))?((((map__37327.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37327.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37327):map__37327);
var opts = map__37327__$1;
var build_id = cljs.core.get.call(null,map__37327__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__37327,map__37327__$1,opts,build_id){
return (function (p__37329){
var vec__37330 = p__37329;
var seq__37331 = cljs.core.seq.call(null,vec__37330);
var first__37332 = cljs.core.first.call(null,seq__37331);
var seq__37331__$1 = cljs.core.next.call(null,seq__37331);
var map__37333 = first__37332;
var map__37333__$1 = ((((!((map__37333 == null)))?((((map__37333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37333.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37333):map__37333);
var msg = map__37333__$1;
var msg_name = cljs.core.get.call(null,map__37333__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37331__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__37330,seq__37331,first__37332,seq__37331__$1,map__37333,map__37333__$1,msg,msg_name,_,map__37327,map__37327__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__37330,seq__37331,first__37332,seq__37331__$1,map__37333,map__37333__$1,msg,msg_name,_,map__37327,map__37327__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__37327,map__37327__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__37335){
var vec__37336 = p__37335;
var seq__37337 = cljs.core.seq.call(null,vec__37336);
var first__37338 = cljs.core.first.call(null,seq__37337);
var seq__37337__$1 = cljs.core.next.call(null,seq__37337);
var map__37339 = first__37338;
var map__37339__$1 = ((((!((map__37339 == null)))?((((map__37339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37339.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37339):map__37339);
var msg = map__37339__$1;
var msg_name = cljs.core.get.call(null,map__37339__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37337__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__37341){
var map__37342 = p__37341;
var map__37342__$1 = ((((!((map__37342 == null)))?((((map__37342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37342.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37342):map__37342);
var on_compile_warning = cljs.core.get.call(null,map__37342__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__37342__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__37342,map__37342__$1,on_compile_warning,on_compile_fail){
return (function (p__37344){
var vec__37345 = p__37344;
var seq__37346 = cljs.core.seq.call(null,vec__37345);
var first__37347 = cljs.core.first.call(null,seq__37346);
var seq__37346__$1 = cljs.core.next.call(null,seq__37346);
var map__37348 = first__37347;
var map__37348__$1 = ((((!((map__37348 == null)))?((((map__37348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37348.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37348):map__37348);
var msg = map__37348__$1;
var msg_name = cljs.core.get.call(null,map__37348__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37346__$1;
var pred__37350 = cljs.core._EQ_;
var expr__37351 = msg_name;
if(cljs.core.truth_(pred__37350.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__37351))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__37350.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__37351))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__37342,map__37342__$1,on_compile_warning,on_compile_fail))
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
var c__30037__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30037__auto__,msg_hist,msg_names,msg){
return (function (){
var f__30038__auto__ = (function (){var switch__29949__auto__ = ((function (c__30037__auto__,msg_hist,msg_names,msg){
return (function (state_37440){
var state_val_37441 = (state_37440[(1)]);
if((state_val_37441 === (7))){
var inst_37360 = (state_37440[(2)]);
var state_37440__$1 = state_37440;
if(cljs.core.truth_(inst_37360)){
var statearr_37442_37489 = state_37440__$1;
(statearr_37442_37489[(1)] = (8));

} else {
var statearr_37443_37490 = state_37440__$1;
(statearr_37443_37490[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37441 === (20))){
var inst_37434 = (state_37440[(2)]);
var state_37440__$1 = state_37440;
var statearr_37444_37491 = state_37440__$1;
(statearr_37444_37491[(2)] = inst_37434);

(statearr_37444_37491[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37441 === (27))){
var inst_37430 = (state_37440[(2)]);
var state_37440__$1 = state_37440;
var statearr_37445_37492 = state_37440__$1;
(statearr_37445_37492[(2)] = inst_37430);

(statearr_37445_37492[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37441 === (1))){
var inst_37353 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_37440__$1 = state_37440;
if(cljs.core.truth_(inst_37353)){
var statearr_37446_37493 = state_37440__$1;
(statearr_37446_37493[(1)] = (2));

} else {
var statearr_37447_37494 = state_37440__$1;
(statearr_37447_37494[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37441 === (24))){
var inst_37432 = (state_37440[(2)]);
var state_37440__$1 = state_37440;
var statearr_37448_37495 = state_37440__$1;
(statearr_37448_37495[(2)] = inst_37432);

(statearr_37448_37495[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37441 === (4))){
var inst_37438 = (state_37440[(2)]);
var state_37440__$1 = state_37440;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37440__$1,inst_37438);
} else {
if((state_val_37441 === (15))){
var inst_37436 = (state_37440[(2)]);
var state_37440__$1 = state_37440;
var statearr_37449_37496 = state_37440__$1;
(statearr_37449_37496[(2)] = inst_37436);

(statearr_37449_37496[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37441 === (21))){
var inst_37389 = (state_37440[(2)]);
var inst_37390 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37391 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37390);
var state_37440__$1 = (function (){var statearr_37450 = state_37440;
(statearr_37450[(7)] = inst_37389);

return statearr_37450;
})();
var statearr_37451_37497 = state_37440__$1;
(statearr_37451_37497[(2)] = inst_37391);

(statearr_37451_37497[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37441 === (31))){
var inst_37419 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_37440__$1 = state_37440;
if(cljs.core.truth_(inst_37419)){
var statearr_37452_37498 = state_37440__$1;
(statearr_37452_37498[(1)] = (34));

} else {
var statearr_37453_37499 = state_37440__$1;
(statearr_37453_37499[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37441 === (32))){
var inst_37428 = (state_37440[(2)]);
var state_37440__$1 = state_37440;
var statearr_37454_37500 = state_37440__$1;
(statearr_37454_37500[(2)] = inst_37428);

(statearr_37454_37500[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37441 === (33))){
var inst_37415 = (state_37440[(2)]);
var inst_37416 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37417 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37416);
var state_37440__$1 = (function (){var statearr_37455 = state_37440;
(statearr_37455[(8)] = inst_37415);

return statearr_37455;
})();
var statearr_37456_37501 = state_37440__$1;
(statearr_37456_37501[(2)] = inst_37417);

(statearr_37456_37501[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37441 === (13))){
var inst_37374 = figwheel.client.heads_up.clear.call(null);
var state_37440__$1 = state_37440;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37440__$1,(16),inst_37374);
} else {
if((state_val_37441 === (22))){
var inst_37395 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37396 = figwheel.client.heads_up.append_warning_message.call(null,inst_37395);
var state_37440__$1 = state_37440;
var statearr_37457_37502 = state_37440__$1;
(statearr_37457_37502[(2)] = inst_37396);

(statearr_37457_37502[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37441 === (36))){
var inst_37426 = (state_37440[(2)]);
var state_37440__$1 = state_37440;
var statearr_37458_37503 = state_37440__$1;
(statearr_37458_37503[(2)] = inst_37426);

(statearr_37458_37503[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37441 === (29))){
var inst_37406 = (state_37440[(2)]);
var inst_37407 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37408 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37407);
var state_37440__$1 = (function (){var statearr_37459 = state_37440;
(statearr_37459[(9)] = inst_37406);

return statearr_37459;
})();
var statearr_37460_37504 = state_37440__$1;
(statearr_37460_37504[(2)] = inst_37408);

(statearr_37460_37504[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37441 === (6))){
var inst_37355 = (state_37440[(10)]);
var state_37440__$1 = state_37440;
var statearr_37461_37505 = state_37440__$1;
(statearr_37461_37505[(2)] = inst_37355);

(statearr_37461_37505[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37441 === (28))){
var inst_37402 = (state_37440[(2)]);
var inst_37403 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37404 = figwheel.client.heads_up.display_warning.call(null,inst_37403);
var state_37440__$1 = (function (){var statearr_37462 = state_37440;
(statearr_37462[(11)] = inst_37402);

return statearr_37462;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37440__$1,(29),inst_37404);
} else {
if((state_val_37441 === (25))){
var inst_37400 = figwheel.client.heads_up.clear.call(null);
var state_37440__$1 = state_37440;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37440__$1,(28),inst_37400);
} else {
if((state_val_37441 === (34))){
var inst_37421 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37440__$1 = state_37440;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37440__$1,(37),inst_37421);
} else {
if((state_val_37441 === (17))){
var inst_37380 = (state_37440[(2)]);
var inst_37381 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37382 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37381);
var state_37440__$1 = (function (){var statearr_37463 = state_37440;
(statearr_37463[(12)] = inst_37380);

return statearr_37463;
})();
var statearr_37464_37506 = state_37440__$1;
(statearr_37464_37506[(2)] = inst_37382);

(statearr_37464_37506[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37441 === (3))){
var inst_37372 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_37440__$1 = state_37440;
if(cljs.core.truth_(inst_37372)){
var statearr_37465_37507 = state_37440__$1;
(statearr_37465_37507[(1)] = (13));

} else {
var statearr_37466_37508 = state_37440__$1;
(statearr_37466_37508[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37441 === (12))){
var inst_37368 = (state_37440[(2)]);
var state_37440__$1 = state_37440;
var statearr_37467_37509 = state_37440__$1;
(statearr_37467_37509[(2)] = inst_37368);

(statearr_37467_37509[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37441 === (2))){
var inst_37355 = (state_37440[(10)]);
var inst_37355__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_37440__$1 = (function (){var statearr_37468 = state_37440;
(statearr_37468[(10)] = inst_37355__$1);

return statearr_37468;
})();
if(cljs.core.truth_(inst_37355__$1)){
var statearr_37469_37510 = state_37440__$1;
(statearr_37469_37510[(1)] = (5));

} else {
var statearr_37470_37511 = state_37440__$1;
(statearr_37470_37511[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37441 === (23))){
var inst_37398 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_37440__$1 = state_37440;
if(cljs.core.truth_(inst_37398)){
var statearr_37471_37512 = state_37440__$1;
(statearr_37471_37512[(1)] = (25));

} else {
var statearr_37472_37513 = state_37440__$1;
(statearr_37472_37513[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37441 === (35))){
var state_37440__$1 = state_37440;
var statearr_37473_37514 = state_37440__$1;
(statearr_37473_37514[(2)] = null);

(statearr_37473_37514[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37441 === (19))){
var inst_37393 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_37440__$1 = state_37440;
if(cljs.core.truth_(inst_37393)){
var statearr_37474_37515 = state_37440__$1;
(statearr_37474_37515[(1)] = (22));

} else {
var statearr_37475_37516 = state_37440__$1;
(statearr_37475_37516[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37441 === (11))){
var inst_37364 = (state_37440[(2)]);
var state_37440__$1 = state_37440;
var statearr_37476_37517 = state_37440__$1;
(statearr_37476_37517[(2)] = inst_37364);

(statearr_37476_37517[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37441 === (9))){
var inst_37366 = figwheel.client.heads_up.clear.call(null);
var state_37440__$1 = state_37440;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37440__$1,(12),inst_37366);
} else {
if((state_val_37441 === (5))){
var inst_37357 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_37440__$1 = state_37440;
var statearr_37477_37518 = state_37440__$1;
(statearr_37477_37518[(2)] = inst_37357);

(statearr_37477_37518[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37441 === (14))){
var inst_37384 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_37440__$1 = state_37440;
if(cljs.core.truth_(inst_37384)){
var statearr_37478_37519 = state_37440__$1;
(statearr_37478_37519[(1)] = (18));

} else {
var statearr_37479_37520 = state_37440__$1;
(statearr_37479_37520[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37441 === (26))){
var inst_37410 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_37440__$1 = state_37440;
if(cljs.core.truth_(inst_37410)){
var statearr_37480_37521 = state_37440__$1;
(statearr_37480_37521[(1)] = (30));

} else {
var statearr_37481_37522 = state_37440__$1;
(statearr_37481_37522[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37441 === (16))){
var inst_37376 = (state_37440[(2)]);
var inst_37377 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37378 = figwheel.client.heads_up.display_exception.call(null,inst_37377);
var state_37440__$1 = (function (){var statearr_37482 = state_37440;
(statearr_37482[(13)] = inst_37376);

return statearr_37482;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37440__$1,(17),inst_37378);
} else {
if((state_val_37441 === (30))){
var inst_37412 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37413 = figwheel.client.heads_up.display_warning.call(null,inst_37412);
var state_37440__$1 = state_37440;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37440__$1,(33),inst_37413);
} else {
if((state_val_37441 === (10))){
var inst_37370 = (state_37440[(2)]);
var state_37440__$1 = state_37440;
var statearr_37483_37523 = state_37440__$1;
(statearr_37483_37523[(2)] = inst_37370);

(statearr_37483_37523[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37441 === (18))){
var inst_37386 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37387 = figwheel.client.heads_up.display_exception.call(null,inst_37386);
var state_37440__$1 = state_37440;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37440__$1,(21),inst_37387);
} else {
if((state_val_37441 === (37))){
var inst_37423 = (state_37440[(2)]);
var state_37440__$1 = state_37440;
var statearr_37484_37524 = state_37440__$1;
(statearr_37484_37524[(2)] = inst_37423);

(statearr_37484_37524[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37441 === (8))){
var inst_37362 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37440__$1 = state_37440;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37440__$1,(11),inst_37362);
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
});})(c__30037__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__29949__auto__,c__30037__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29950__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29950__auto____0 = (function (){
var statearr_37485 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37485[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29950__auto__);

(statearr_37485[(1)] = (1));

return statearr_37485;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29950__auto____1 = (function (state_37440){
while(true){
var ret_value__29951__auto__ = (function (){try{while(true){
var result__29952__auto__ = switch__29949__auto__.call(null,state_37440);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29952__auto__;
}
break;
}
}catch (e37486){if((e37486 instanceof Object)){
var ex__29953__auto__ = e37486;
var statearr_37487_37525 = state_37440;
(statearr_37487_37525[(5)] = ex__29953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37440);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37486;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37526 = state_37440;
state_37440 = G__37526;
continue;
} else {
return ret_value__29951__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29950__auto__ = function(state_37440){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29950__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29950__auto____1.call(this,state_37440);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29950__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29950__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29950__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29950__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29950__auto__;
})()
;})(switch__29949__auto__,c__30037__auto__,msg_hist,msg_names,msg))
})();
var state__30039__auto__ = (function (){var statearr_37488 = f__30038__auto__.call(null);
(statearr_37488[(6)] = c__30037__auto__);

return statearr_37488;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30039__auto__);
});})(c__30037__auto__,msg_hist,msg_names,msg))
);

return c__30037__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__30037__auto___37555 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30037__auto___37555,ch){
return (function (){
var f__30038__auto__ = (function (){var switch__29949__auto__ = ((function (c__30037__auto___37555,ch){
return (function (state_37541){
var state_val_37542 = (state_37541[(1)]);
if((state_val_37542 === (1))){
var state_37541__$1 = state_37541;
var statearr_37543_37556 = state_37541__$1;
(statearr_37543_37556[(2)] = null);

(statearr_37543_37556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37542 === (2))){
var state_37541__$1 = state_37541;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37541__$1,(4),ch);
} else {
if((state_val_37542 === (3))){
var inst_37539 = (state_37541[(2)]);
var state_37541__$1 = state_37541;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37541__$1,inst_37539);
} else {
if((state_val_37542 === (4))){
var inst_37529 = (state_37541[(7)]);
var inst_37529__$1 = (state_37541[(2)]);
var state_37541__$1 = (function (){var statearr_37544 = state_37541;
(statearr_37544[(7)] = inst_37529__$1);

return statearr_37544;
})();
if(cljs.core.truth_(inst_37529__$1)){
var statearr_37545_37557 = state_37541__$1;
(statearr_37545_37557[(1)] = (5));

} else {
var statearr_37546_37558 = state_37541__$1;
(statearr_37546_37558[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37542 === (5))){
var inst_37529 = (state_37541[(7)]);
var inst_37531 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_37529);
var state_37541__$1 = state_37541;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37541__$1,(8),inst_37531);
} else {
if((state_val_37542 === (6))){
var state_37541__$1 = state_37541;
var statearr_37547_37559 = state_37541__$1;
(statearr_37547_37559[(2)] = null);

(statearr_37547_37559[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37542 === (7))){
var inst_37537 = (state_37541[(2)]);
var state_37541__$1 = state_37541;
var statearr_37548_37560 = state_37541__$1;
(statearr_37548_37560[(2)] = inst_37537);

(statearr_37548_37560[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37542 === (8))){
var inst_37533 = (state_37541[(2)]);
var state_37541__$1 = (function (){var statearr_37549 = state_37541;
(statearr_37549[(8)] = inst_37533);

return statearr_37549;
})();
var statearr_37550_37561 = state_37541__$1;
(statearr_37550_37561[(2)] = null);

(statearr_37550_37561[(1)] = (2));


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
});})(c__30037__auto___37555,ch))
;
return ((function (switch__29949__auto__,c__30037__auto___37555,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__29950__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__29950__auto____0 = (function (){
var statearr_37551 = [null,null,null,null,null,null,null,null,null];
(statearr_37551[(0)] = figwheel$client$heads_up_plugin_$_state_machine__29950__auto__);

(statearr_37551[(1)] = (1));

return statearr_37551;
});
var figwheel$client$heads_up_plugin_$_state_machine__29950__auto____1 = (function (state_37541){
while(true){
var ret_value__29951__auto__ = (function (){try{while(true){
var result__29952__auto__ = switch__29949__auto__.call(null,state_37541);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29952__auto__;
}
break;
}
}catch (e37552){if((e37552 instanceof Object)){
var ex__29953__auto__ = e37552;
var statearr_37553_37562 = state_37541;
(statearr_37553_37562[(5)] = ex__29953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37541);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37552;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37563 = state_37541;
state_37541 = G__37563;
continue;
} else {
return ret_value__29951__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__29950__auto__ = function(state_37541){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__29950__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__29950__auto____1.call(this,state_37541);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__29950__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__29950__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__29950__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__29950__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__29950__auto__;
})()
;})(switch__29949__auto__,c__30037__auto___37555,ch))
})();
var state__30039__auto__ = (function (){var statearr_37554 = f__30038__auto__.call(null);
(statearr_37554[(6)] = c__30037__auto___37555);

return statearr_37554;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30039__auto__);
});})(c__30037__auto___37555,ch))
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
var c__30037__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30037__auto__){
return (function (){
var f__30038__auto__ = (function (){var switch__29949__auto__ = ((function (c__30037__auto__){
return (function (state_37569){
var state_val_37570 = (state_37569[(1)]);
if((state_val_37570 === (1))){
var inst_37564 = cljs.core.async.timeout.call(null,(3000));
var state_37569__$1 = state_37569;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37569__$1,(2),inst_37564);
} else {
if((state_val_37570 === (2))){
var inst_37566 = (state_37569[(2)]);
var inst_37567 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_37569__$1 = (function (){var statearr_37571 = state_37569;
(statearr_37571[(7)] = inst_37566);

return statearr_37571;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37569__$1,inst_37567);
} else {
return null;
}
}
});})(c__30037__auto__))
;
return ((function (switch__29949__auto__,c__30037__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__29950__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__29950__auto____0 = (function (){
var statearr_37572 = [null,null,null,null,null,null,null,null];
(statearr_37572[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__29950__auto__);

(statearr_37572[(1)] = (1));

return statearr_37572;
});
var figwheel$client$enforce_project_plugin_$_state_machine__29950__auto____1 = (function (state_37569){
while(true){
var ret_value__29951__auto__ = (function (){try{while(true){
var result__29952__auto__ = switch__29949__auto__.call(null,state_37569);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29952__auto__;
}
break;
}
}catch (e37573){if((e37573 instanceof Object)){
var ex__29953__auto__ = e37573;
var statearr_37574_37576 = state_37569;
(statearr_37574_37576[(5)] = ex__29953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37569);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37573;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37577 = state_37569;
state_37569 = G__37577;
continue;
} else {
return ret_value__29951__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__29950__auto__ = function(state_37569){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__29950__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__29950__auto____1.call(this,state_37569);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__29950__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__29950__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__29950__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__29950__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__29950__auto__;
})()
;})(switch__29949__auto__,c__30037__auto__))
})();
var state__30039__auto__ = (function (){var statearr_37575 = f__30038__auto__.call(null);
(statearr_37575[(6)] = c__30037__auto__);

return statearr_37575;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30039__auto__);
});})(c__30037__auto__))
);

return c__30037__auto__;
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
var c__30037__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30037__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__30038__auto__ = (function (){var switch__29949__auto__ = ((function (c__30037__auto__,figwheel_version,temp__4657__auto__){
return (function (state_37584){
var state_val_37585 = (state_37584[(1)]);
if((state_val_37585 === (1))){
var inst_37578 = cljs.core.async.timeout.call(null,(2000));
var state_37584__$1 = state_37584;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37584__$1,(2),inst_37578);
} else {
if((state_val_37585 === (2))){
var inst_37580 = (state_37584[(2)]);
var inst_37581 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Client Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong> is not equal to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Sidecar Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".  Shutting down Websocket Connection!"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<h4>To fix try:</h4>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_37582 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_37581);
var state_37584__$1 = (function (){var statearr_37586 = state_37584;
(statearr_37586[(7)] = inst_37580);

return statearr_37586;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37584__$1,inst_37582);
} else {
return null;
}
}
});})(c__30037__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__29949__auto__,c__30037__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29950__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29950__auto____0 = (function (){
var statearr_37587 = [null,null,null,null,null,null,null,null];
(statearr_37587[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29950__auto__);

(statearr_37587[(1)] = (1));

return statearr_37587;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29950__auto____1 = (function (state_37584){
while(true){
var ret_value__29951__auto__ = (function (){try{while(true){
var result__29952__auto__ = switch__29949__auto__.call(null,state_37584);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29952__auto__;
}
break;
}
}catch (e37588){if((e37588 instanceof Object)){
var ex__29953__auto__ = e37588;
var statearr_37589_37591 = state_37584;
(statearr_37589_37591[(5)] = ex__29953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37584);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37588;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37592 = state_37584;
state_37584 = G__37592;
continue;
} else {
return ret_value__29951__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29950__auto__ = function(state_37584){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29950__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29950__auto____1.call(this,state_37584);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29950__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29950__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29950__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29950__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29950__auto__;
})()
;})(switch__29949__auto__,c__30037__auto__,figwheel_version,temp__4657__auto__))
})();
var state__30039__auto__ = (function (){var statearr_37590 = f__30038__auto__.call(null);
(statearr_37590[(6)] = c__30037__auto__);

return statearr_37590;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30039__auto__);
});})(c__30037__auto__,figwheel_version,temp__4657__auto__))
);

return c__30037__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__37593){
var map__37594 = p__37593;
var map__37594__$1 = ((((!((map__37594 == null)))?((((map__37594.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37594.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37594):map__37594);
var file = cljs.core.get.call(null,map__37594__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37594__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37594__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__37596 = "";
var G__37596__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37596),cljs.core.str.cljs$core$IFn$_invoke$arity$1("file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__37596);
var G__37596__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37596__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__37596__$1);
if(cljs.core.truth_((function (){var and__26944__auto__ = line;
if(cljs.core.truth_(and__26944__auto__)){
return column;
} else {
return and__26944__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37596__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__37596__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__37597){
var map__37598 = p__37597;
var map__37598__$1 = ((((!((map__37598 == null)))?((((map__37598.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37598.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37598):map__37598);
var ed = map__37598__$1;
var formatted_exception = cljs.core.get.call(null,map__37598__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__37598__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__37598__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__37600_37604 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__37601_37605 = null;
var count__37602_37606 = (0);
var i__37603_37607 = (0);
while(true){
if((i__37603_37607 < count__37602_37606)){
var msg_37608 = cljs.core._nth.call(null,chunk__37601_37605,i__37603_37607);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37608);

var G__37609 = seq__37600_37604;
var G__37610 = chunk__37601_37605;
var G__37611 = count__37602_37606;
var G__37612 = (i__37603_37607 + (1));
seq__37600_37604 = G__37609;
chunk__37601_37605 = G__37610;
count__37602_37606 = G__37611;
i__37603_37607 = G__37612;
continue;
} else {
var temp__4657__auto___37613 = cljs.core.seq.call(null,seq__37600_37604);
if(temp__4657__auto___37613){
var seq__37600_37614__$1 = temp__4657__auto___37613;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37600_37614__$1)){
var c__27776__auto___37615 = cljs.core.chunk_first.call(null,seq__37600_37614__$1);
var G__37616 = cljs.core.chunk_rest.call(null,seq__37600_37614__$1);
var G__37617 = c__27776__auto___37615;
var G__37618 = cljs.core.count.call(null,c__27776__auto___37615);
var G__37619 = (0);
seq__37600_37604 = G__37616;
chunk__37601_37605 = G__37617;
count__37602_37606 = G__37618;
i__37603_37607 = G__37619;
continue;
} else {
var msg_37620 = cljs.core.first.call(null,seq__37600_37614__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37620);

var G__37621 = cljs.core.next.call(null,seq__37600_37614__$1);
var G__37622 = null;
var G__37623 = (0);
var G__37624 = (0);
seq__37600_37604 = G__37621;
chunk__37601_37605 = G__37622;
count__37602_37606 = G__37623;
i__37603_37607 = G__37624;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__37625){
var map__37626 = p__37625;
var map__37626__$1 = ((((!((map__37626 == null)))?((((map__37626.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37626.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37626):map__37626);
var w = map__37626__$1;
var message = cljs.core.get.call(null,map__37626__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__26944__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__26944__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__26944__auto__;
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
var seq__37628 = cljs.core.seq.call(null,plugins);
var chunk__37629 = null;
var count__37630 = (0);
var i__37631 = (0);
while(true){
if((i__37631 < count__37630)){
var vec__37632 = cljs.core._nth.call(null,chunk__37629,i__37631);
var k = cljs.core.nth.call(null,vec__37632,(0),null);
var plugin = cljs.core.nth.call(null,vec__37632,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37638 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37628,chunk__37629,count__37630,i__37631,pl_37638,vec__37632,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_37638.call(null,msg_hist);
});})(seq__37628,chunk__37629,count__37630,i__37631,pl_37638,vec__37632,k,plugin))
);
} else {
}

var G__37639 = seq__37628;
var G__37640 = chunk__37629;
var G__37641 = count__37630;
var G__37642 = (i__37631 + (1));
seq__37628 = G__37639;
chunk__37629 = G__37640;
count__37630 = G__37641;
i__37631 = G__37642;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37628);
if(temp__4657__auto__){
var seq__37628__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37628__$1)){
var c__27776__auto__ = cljs.core.chunk_first.call(null,seq__37628__$1);
var G__37643 = cljs.core.chunk_rest.call(null,seq__37628__$1);
var G__37644 = c__27776__auto__;
var G__37645 = cljs.core.count.call(null,c__27776__auto__);
var G__37646 = (0);
seq__37628 = G__37643;
chunk__37629 = G__37644;
count__37630 = G__37645;
i__37631 = G__37646;
continue;
} else {
var vec__37635 = cljs.core.first.call(null,seq__37628__$1);
var k = cljs.core.nth.call(null,vec__37635,(0),null);
var plugin = cljs.core.nth.call(null,vec__37635,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37647 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37628,chunk__37629,count__37630,i__37631,pl_37647,vec__37635,k,plugin,seq__37628__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_37647.call(null,msg_hist);
});})(seq__37628,chunk__37629,count__37630,i__37631,pl_37647,vec__37635,k,plugin,seq__37628__$1,temp__4657__auto__))
);
} else {
}

var G__37648 = cljs.core.next.call(null,seq__37628__$1);
var G__37649 = null;
var G__37650 = (0);
var G__37651 = (0);
seq__37628 = G__37648;
chunk__37629 = G__37649;
count__37630 = G__37650;
i__37631 = G__37651;
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
var G__37653 = arguments.length;
switch (G__37653) {
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

var seq__37654_37659 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__37655_37660 = null;
var count__37656_37661 = (0);
var i__37657_37662 = (0);
while(true){
if((i__37657_37662 < count__37656_37661)){
var msg_37663 = cljs.core._nth.call(null,chunk__37655_37660,i__37657_37662);
figwheel.client.socket.handle_incoming_message.call(null,msg_37663);

var G__37664 = seq__37654_37659;
var G__37665 = chunk__37655_37660;
var G__37666 = count__37656_37661;
var G__37667 = (i__37657_37662 + (1));
seq__37654_37659 = G__37664;
chunk__37655_37660 = G__37665;
count__37656_37661 = G__37666;
i__37657_37662 = G__37667;
continue;
} else {
var temp__4657__auto___37668 = cljs.core.seq.call(null,seq__37654_37659);
if(temp__4657__auto___37668){
var seq__37654_37669__$1 = temp__4657__auto___37668;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37654_37669__$1)){
var c__27776__auto___37670 = cljs.core.chunk_first.call(null,seq__37654_37669__$1);
var G__37671 = cljs.core.chunk_rest.call(null,seq__37654_37669__$1);
var G__37672 = c__27776__auto___37670;
var G__37673 = cljs.core.count.call(null,c__27776__auto___37670);
var G__37674 = (0);
seq__37654_37659 = G__37671;
chunk__37655_37660 = G__37672;
count__37656_37661 = G__37673;
i__37657_37662 = G__37674;
continue;
} else {
var msg_37675 = cljs.core.first.call(null,seq__37654_37669__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_37675);

var G__37676 = cljs.core.next.call(null,seq__37654_37669__$1);
var G__37677 = null;
var G__37678 = (0);
var G__37679 = (0);
seq__37654_37659 = G__37676;
chunk__37655_37660 = G__37677;
count__37656_37661 = G__37678;
i__37657_37662 = G__37679;
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
var args__28088__auto__ = [];
var len__28081__auto___37684 = arguments.length;
var i__28082__auto___37685 = (0);
while(true){
if((i__28082__auto___37685 < len__28081__auto___37684)){
args__28088__auto__.push((arguments[i__28082__auto___37685]));

var G__37686 = (i__28082__auto___37685 + (1));
i__28082__auto___37685 = G__37686;
continue;
} else {
}
break;
}

var argseq__28089__auto__ = ((((0) < args__28088__auto__.length))?(new cljs.core.IndexedSeq(args__28088__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__28089__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__37681){
var map__37682 = p__37681;
var map__37682__$1 = ((((!((map__37682 == null)))?((((map__37682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37682.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37682):map__37682);
var opts = map__37682__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq37680){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37680));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e37687){if((e37687 instanceof Error)){
var e = e37687;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e37687;

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
return (function (p__37688){
var map__37689 = p__37688;
var map__37689__$1 = ((((!((map__37689 == null)))?((((map__37689.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37689.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37689):map__37689);
var msg_name = cljs.core.get.call(null,map__37689__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1500852803441