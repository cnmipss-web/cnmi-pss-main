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
var G__48078 = arguments.length;
switch (G__48078) {
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
var args__37888__auto__ = [];
var len__37881__auto___48081 = arguments.length;
var i__37882__auto___48082 = (0);
while(true){
if((i__37882__auto___48082 < len__37881__auto___48081)){
args__37888__auto__.push((arguments[i__37882__auto___48082]));

var G__48083 = (i__37882__auto___48082 + (1));
i__37882__auto___48082 = G__48083;
continue;
} else {
}
break;
}

var argseq__37889__auto__ = ((((0) < args__37888__auto__.length))?(new cljs.core.IndexedSeq(args__37888__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__37889__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq48080){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48080));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__37888__auto__ = [];
var len__37881__auto___48085 = arguments.length;
var i__37882__auto___48086 = (0);
while(true){
if((i__37882__auto___48086 < len__37881__auto___48085)){
args__37888__auto__.push((arguments[i__37882__auto___48086]));

var G__48087 = (i__37882__auto___48086 + (1));
i__37882__auto___48086 = G__48087;
continue;
} else {
}
break;
}

var argseq__37889__auto__ = ((((0) < args__37888__auto__.length))?(new cljs.core.IndexedSeq(args__37888__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__37889__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq48084){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48084));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__48088){
var map__48089 = p__48088;
var map__48089__$1 = ((((!((map__48089 == null)))?((((map__48089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48089.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48089):map__48089);
var message = cljs.core.get.call(null,map__48089__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__48089__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" : "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__36756__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__36756__auto__)){
return or__36756__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__36744__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__36744__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__36744__auto__;
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
var c__44389__auto___48168 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44389__auto___48168,ch){
return (function (){
var f__44390__auto__ = (function (){var switch__44301__auto__ = ((function (c__44389__auto___48168,ch){
return (function (state_48140){
var state_val_48141 = (state_48140[(1)]);
if((state_val_48141 === (7))){
var inst_48136 = (state_48140[(2)]);
var state_48140__$1 = state_48140;
var statearr_48142_48169 = state_48140__$1;
(statearr_48142_48169[(2)] = inst_48136);

(statearr_48142_48169[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48141 === (1))){
var state_48140__$1 = state_48140;
var statearr_48143_48170 = state_48140__$1;
(statearr_48143_48170[(2)] = null);

(statearr_48143_48170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48141 === (4))){
var inst_48093 = (state_48140[(7)]);
var inst_48093__$1 = (state_48140[(2)]);
var state_48140__$1 = (function (){var statearr_48144 = state_48140;
(statearr_48144[(7)] = inst_48093__$1);

return statearr_48144;
})();
if(cljs.core.truth_(inst_48093__$1)){
var statearr_48145_48171 = state_48140__$1;
(statearr_48145_48171[(1)] = (5));

} else {
var statearr_48146_48172 = state_48140__$1;
(statearr_48146_48172[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48141 === (15))){
var inst_48100 = (state_48140[(8)]);
var inst_48115 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_48100);
var inst_48116 = cljs.core.first.call(null,inst_48115);
var inst_48117 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_48116);
var inst_48118 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not loading code with warnings - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_48117)].join('');
var inst_48119 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_48118);
var state_48140__$1 = state_48140;
var statearr_48147_48173 = state_48140__$1;
(statearr_48147_48173[(2)] = inst_48119);

(statearr_48147_48173[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48141 === (13))){
var inst_48124 = (state_48140[(2)]);
var state_48140__$1 = state_48140;
var statearr_48148_48174 = state_48140__$1;
(statearr_48148_48174[(2)] = inst_48124);

(statearr_48148_48174[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48141 === (6))){
var state_48140__$1 = state_48140;
var statearr_48149_48175 = state_48140__$1;
(statearr_48149_48175[(2)] = null);

(statearr_48149_48175[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48141 === (17))){
var inst_48122 = (state_48140[(2)]);
var state_48140__$1 = state_48140;
var statearr_48150_48176 = state_48140__$1;
(statearr_48150_48176[(2)] = inst_48122);

(statearr_48150_48176[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48141 === (3))){
var inst_48138 = (state_48140[(2)]);
var state_48140__$1 = state_48140;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48140__$1,inst_48138);
} else {
if((state_val_48141 === (12))){
var inst_48099 = (state_48140[(9)]);
var inst_48113 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_48099,opts);
var state_48140__$1 = state_48140;
if(cljs.core.truth_(inst_48113)){
var statearr_48151_48177 = state_48140__$1;
(statearr_48151_48177[(1)] = (15));

} else {
var statearr_48152_48178 = state_48140__$1;
(statearr_48152_48178[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48141 === (2))){
var state_48140__$1 = state_48140;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48140__$1,(4),ch);
} else {
if((state_val_48141 === (11))){
var inst_48100 = (state_48140[(8)]);
var inst_48105 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48106 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_48100);
var inst_48107 = cljs.core.async.timeout.call(null,(1000));
var inst_48108 = [inst_48106,inst_48107];
var inst_48109 = (new cljs.core.PersistentVector(null,2,(5),inst_48105,inst_48108,null));
var state_48140__$1 = state_48140;
return cljs.core.async.ioc_alts_BANG_.call(null,state_48140__$1,(14),inst_48109);
} else {
if((state_val_48141 === (9))){
var inst_48100 = (state_48140[(8)]);
var inst_48126 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_48127 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_48100);
var inst_48128 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_48127);
var inst_48129 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Not loading: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_48128)].join('');
var inst_48130 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_48129);
var state_48140__$1 = (function (){var statearr_48153 = state_48140;
(statearr_48153[(10)] = inst_48126);

return statearr_48153;
})();
var statearr_48154_48179 = state_48140__$1;
(statearr_48154_48179[(2)] = inst_48130);

(statearr_48154_48179[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48141 === (5))){
var inst_48093 = (state_48140[(7)]);
var inst_48095 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_48096 = (new cljs.core.PersistentArrayMap(null,2,inst_48095,null));
var inst_48097 = (new cljs.core.PersistentHashSet(null,inst_48096,null));
var inst_48098 = figwheel.client.focus_msgs.call(null,inst_48097,inst_48093);
var inst_48099 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_48098);
var inst_48100 = cljs.core.first.call(null,inst_48098);
var inst_48101 = figwheel.client.autoload_QMARK_.call(null);
var state_48140__$1 = (function (){var statearr_48155 = state_48140;
(statearr_48155[(9)] = inst_48099);

(statearr_48155[(8)] = inst_48100);

return statearr_48155;
})();
if(cljs.core.truth_(inst_48101)){
var statearr_48156_48180 = state_48140__$1;
(statearr_48156_48180[(1)] = (8));

} else {
var statearr_48157_48181 = state_48140__$1;
(statearr_48157_48181[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48141 === (14))){
var inst_48111 = (state_48140[(2)]);
var state_48140__$1 = state_48140;
var statearr_48158_48182 = state_48140__$1;
(statearr_48158_48182[(2)] = inst_48111);

(statearr_48158_48182[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48141 === (16))){
var state_48140__$1 = state_48140;
var statearr_48159_48183 = state_48140__$1;
(statearr_48159_48183[(2)] = null);

(statearr_48159_48183[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48141 === (10))){
var inst_48132 = (state_48140[(2)]);
var state_48140__$1 = (function (){var statearr_48160 = state_48140;
(statearr_48160[(11)] = inst_48132);

return statearr_48160;
})();
var statearr_48161_48184 = state_48140__$1;
(statearr_48161_48184[(2)] = null);

(statearr_48161_48184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48141 === (8))){
var inst_48099 = (state_48140[(9)]);
var inst_48103 = figwheel.client.reload_file_state_QMARK_.call(null,inst_48099,opts);
var state_48140__$1 = state_48140;
if(cljs.core.truth_(inst_48103)){
var statearr_48162_48185 = state_48140__$1;
(statearr_48162_48185[(1)] = (11));

} else {
var statearr_48163_48186 = state_48140__$1;
(statearr_48163_48186[(1)] = (12));

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
});})(c__44389__auto___48168,ch))
;
return ((function (switch__44301__auto__,c__44389__auto___48168,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__44302__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__44302__auto____0 = (function (){
var statearr_48164 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48164[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__44302__auto__);

(statearr_48164[(1)] = (1));

return statearr_48164;
});
var figwheel$client$file_reloader_plugin_$_state_machine__44302__auto____1 = (function (state_48140){
while(true){
var ret_value__44303__auto__ = (function (){try{while(true){
var result__44304__auto__ = switch__44301__auto__.call(null,state_48140);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44304__auto__;
}
break;
}
}catch (e48165){if((e48165 instanceof Object)){
var ex__44305__auto__ = e48165;
var statearr_48166_48187 = state_48140;
(statearr_48166_48187[(5)] = ex__44305__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48140);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48165;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48188 = state_48140;
state_48140 = G__48188;
continue;
} else {
return ret_value__44303__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__44302__auto__ = function(state_48140){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__44302__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__44302__auto____1.call(this,state_48140);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__44302__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__44302__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__44302__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__44302__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__44302__auto__;
})()
;})(switch__44301__auto__,c__44389__auto___48168,ch))
})();
var state__44391__auto__ = (function (){var statearr_48167 = f__44390__auto__.call(null);
(statearr_48167[(6)] = c__44389__auto___48168);

return statearr_48167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44391__auto__);
});})(c__44389__auto___48168,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__48189_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__48189_SHARP_));
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
var base_path_48191 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_48191){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e48190){if((e48190 instanceof Error)){
var e = e48190;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_48191], null));
} else {
var e = e48190;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_48191))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__48192){
var map__48193 = p__48192;
var map__48193__$1 = ((((!((map__48193 == null)))?((((map__48193.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48193.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48193):map__48193);
var opts = map__48193__$1;
var build_id = cljs.core.get.call(null,map__48193__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__48193,map__48193__$1,opts,build_id){
return (function (p__48195){
var vec__48196 = p__48195;
var seq__48197 = cljs.core.seq.call(null,vec__48196);
var first__48198 = cljs.core.first.call(null,seq__48197);
var seq__48197__$1 = cljs.core.next.call(null,seq__48197);
var map__48199 = first__48198;
var map__48199__$1 = ((((!((map__48199 == null)))?((((map__48199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48199.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48199):map__48199);
var msg = map__48199__$1;
var msg_name = cljs.core.get.call(null,map__48199__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__48197__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__48196,seq__48197,first__48198,seq__48197__$1,map__48199,map__48199__$1,msg,msg_name,_,map__48193,map__48193__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__48196,seq__48197,first__48198,seq__48197__$1,map__48199,map__48199__$1,msg,msg_name,_,map__48193,map__48193__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__48193,map__48193__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__48201){
var vec__48202 = p__48201;
var seq__48203 = cljs.core.seq.call(null,vec__48202);
var first__48204 = cljs.core.first.call(null,seq__48203);
var seq__48203__$1 = cljs.core.next.call(null,seq__48203);
var map__48205 = first__48204;
var map__48205__$1 = ((((!((map__48205 == null)))?((((map__48205.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48205.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48205):map__48205);
var msg = map__48205__$1;
var msg_name = cljs.core.get.call(null,map__48205__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__48203__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__48207){
var map__48208 = p__48207;
var map__48208__$1 = ((((!((map__48208 == null)))?((((map__48208.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48208.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48208):map__48208);
var on_compile_warning = cljs.core.get.call(null,map__48208__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__48208__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__48208,map__48208__$1,on_compile_warning,on_compile_fail){
return (function (p__48210){
var vec__48211 = p__48210;
var seq__48212 = cljs.core.seq.call(null,vec__48211);
var first__48213 = cljs.core.first.call(null,seq__48212);
var seq__48212__$1 = cljs.core.next.call(null,seq__48212);
var map__48214 = first__48213;
var map__48214__$1 = ((((!((map__48214 == null)))?((((map__48214.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48214.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48214):map__48214);
var msg = map__48214__$1;
var msg_name = cljs.core.get.call(null,map__48214__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__48212__$1;
var pred__48216 = cljs.core._EQ_;
var expr__48217 = msg_name;
if(cljs.core.truth_(pred__48216.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__48217))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__48216.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__48217))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__48208,map__48208__$1,on_compile_warning,on_compile_fail))
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
var c__44389__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44389__auto__,msg_hist,msg_names,msg){
return (function (){
var f__44390__auto__ = (function (){var switch__44301__auto__ = ((function (c__44389__auto__,msg_hist,msg_names,msg){
return (function (state_48306){
var state_val_48307 = (state_48306[(1)]);
if((state_val_48307 === (7))){
var inst_48226 = (state_48306[(2)]);
var state_48306__$1 = state_48306;
if(cljs.core.truth_(inst_48226)){
var statearr_48308_48355 = state_48306__$1;
(statearr_48308_48355[(1)] = (8));

} else {
var statearr_48309_48356 = state_48306__$1;
(statearr_48309_48356[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48307 === (20))){
var inst_48300 = (state_48306[(2)]);
var state_48306__$1 = state_48306;
var statearr_48310_48357 = state_48306__$1;
(statearr_48310_48357[(2)] = inst_48300);

(statearr_48310_48357[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48307 === (27))){
var inst_48296 = (state_48306[(2)]);
var state_48306__$1 = state_48306;
var statearr_48311_48358 = state_48306__$1;
(statearr_48311_48358[(2)] = inst_48296);

(statearr_48311_48358[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48307 === (1))){
var inst_48219 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_48306__$1 = state_48306;
if(cljs.core.truth_(inst_48219)){
var statearr_48312_48359 = state_48306__$1;
(statearr_48312_48359[(1)] = (2));

} else {
var statearr_48313_48360 = state_48306__$1;
(statearr_48313_48360[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48307 === (24))){
var inst_48298 = (state_48306[(2)]);
var state_48306__$1 = state_48306;
var statearr_48314_48361 = state_48306__$1;
(statearr_48314_48361[(2)] = inst_48298);

(statearr_48314_48361[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48307 === (4))){
var inst_48304 = (state_48306[(2)]);
var state_48306__$1 = state_48306;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48306__$1,inst_48304);
} else {
if((state_val_48307 === (15))){
var inst_48302 = (state_48306[(2)]);
var state_48306__$1 = state_48306;
var statearr_48315_48362 = state_48306__$1;
(statearr_48315_48362[(2)] = inst_48302);

(statearr_48315_48362[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48307 === (21))){
var inst_48255 = (state_48306[(2)]);
var inst_48256 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48257 = figwheel.client.auto_jump_to_error.call(null,opts,inst_48256);
var state_48306__$1 = (function (){var statearr_48316 = state_48306;
(statearr_48316[(7)] = inst_48255);

return statearr_48316;
})();
var statearr_48317_48363 = state_48306__$1;
(statearr_48317_48363[(2)] = inst_48257);

(statearr_48317_48363[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48307 === (31))){
var inst_48285 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_48306__$1 = state_48306;
if(cljs.core.truth_(inst_48285)){
var statearr_48318_48364 = state_48306__$1;
(statearr_48318_48364[(1)] = (34));

} else {
var statearr_48319_48365 = state_48306__$1;
(statearr_48319_48365[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48307 === (32))){
var inst_48294 = (state_48306[(2)]);
var state_48306__$1 = state_48306;
var statearr_48320_48366 = state_48306__$1;
(statearr_48320_48366[(2)] = inst_48294);

(statearr_48320_48366[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48307 === (33))){
var inst_48281 = (state_48306[(2)]);
var inst_48282 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48283 = figwheel.client.auto_jump_to_error.call(null,opts,inst_48282);
var state_48306__$1 = (function (){var statearr_48321 = state_48306;
(statearr_48321[(8)] = inst_48281);

return statearr_48321;
})();
var statearr_48322_48367 = state_48306__$1;
(statearr_48322_48367[(2)] = inst_48283);

(statearr_48322_48367[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48307 === (13))){
var inst_48240 = figwheel.client.heads_up.clear.call(null);
var state_48306__$1 = state_48306;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48306__$1,(16),inst_48240);
} else {
if((state_val_48307 === (22))){
var inst_48261 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48262 = figwheel.client.heads_up.append_warning_message.call(null,inst_48261);
var state_48306__$1 = state_48306;
var statearr_48323_48368 = state_48306__$1;
(statearr_48323_48368[(2)] = inst_48262);

(statearr_48323_48368[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48307 === (36))){
var inst_48292 = (state_48306[(2)]);
var state_48306__$1 = state_48306;
var statearr_48324_48369 = state_48306__$1;
(statearr_48324_48369[(2)] = inst_48292);

(statearr_48324_48369[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48307 === (29))){
var inst_48272 = (state_48306[(2)]);
var inst_48273 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48274 = figwheel.client.auto_jump_to_error.call(null,opts,inst_48273);
var state_48306__$1 = (function (){var statearr_48325 = state_48306;
(statearr_48325[(9)] = inst_48272);

return statearr_48325;
})();
var statearr_48326_48370 = state_48306__$1;
(statearr_48326_48370[(2)] = inst_48274);

(statearr_48326_48370[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48307 === (6))){
var inst_48221 = (state_48306[(10)]);
var state_48306__$1 = state_48306;
var statearr_48327_48371 = state_48306__$1;
(statearr_48327_48371[(2)] = inst_48221);

(statearr_48327_48371[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48307 === (28))){
var inst_48268 = (state_48306[(2)]);
var inst_48269 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48270 = figwheel.client.heads_up.display_warning.call(null,inst_48269);
var state_48306__$1 = (function (){var statearr_48328 = state_48306;
(statearr_48328[(11)] = inst_48268);

return statearr_48328;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48306__$1,(29),inst_48270);
} else {
if((state_val_48307 === (25))){
var inst_48266 = figwheel.client.heads_up.clear.call(null);
var state_48306__$1 = state_48306;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48306__$1,(28),inst_48266);
} else {
if((state_val_48307 === (34))){
var inst_48287 = figwheel.client.heads_up.flash_loaded.call(null);
var state_48306__$1 = state_48306;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48306__$1,(37),inst_48287);
} else {
if((state_val_48307 === (17))){
var inst_48246 = (state_48306[(2)]);
var inst_48247 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48248 = figwheel.client.auto_jump_to_error.call(null,opts,inst_48247);
var state_48306__$1 = (function (){var statearr_48329 = state_48306;
(statearr_48329[(12)] = inst_48246);

return statearr_48329;
})();
var statearr_48330_48372 = state_48306__$1;
(statearr_48330_48372[(2)] = inst_48248);

(statearr_48330_48372[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48307 === (3))){
var inst_48238 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_48306__$1 = state_48306;
if(cljs.core.truth_(inst_48238)){
var statearr_48331_48373 = state_48306__$1;
(statearr_48331_48373[(1)] = (13));

} else {
var statearr_48332_48374 = state_48306__$1;
(statearr_48332_48374[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48307 === (12))){
var inst_48234 = (state_48306[(2)]);
var state_48306__$1 = state_48306;
var statearr_48333_48375 = state_48306__$1;
(statearr_48333_48375[(2)] = inst_48234);

(statearr_48333_48375[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48307 === (2))){
var inst_48221 = (state_48306[(10)]);
var inst_48221__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_48306__$1 = (function (){var statearr_48334 = state_48306;
(statearr_48334[(10)] = inst_48221__$1);

return statearr_48334;
})();
if(cljs.core.truth_(inst_48221__$1)){
var statearr_48335_48376 = state_48306__$1;
(statearr_48335_48376[(1)] = (5));

} else {
var statearr_48336_48377 = state_48306__$1;
(statearr_48336_48377[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48307 === (23))){
var inst_48264 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_48306__$1 = state_48306;
if(cljs.core.truth_(inst_48264)){
var statearr_48337_48378 = state_48306__$1;
(statearr_48337_48378[(1)] = (25));

} else {
var statearr_48338_48379 = state_48306__$1;
(statearr_48338_48379[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48307 === (35))){
var state_48306__$1 = state_48306;
var statearr_48339_48380 = state_48306__$1;
(statearr_48339_48380[(2)] = null);

(statearr_48339_48380[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48307 === (19))){
var inst_48259 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_48306__$1 = state_48306;
if(cljs.core.truth_(inst_48259)){
var statearr_48340_48381 = state_48306__$1;
(statearr_48340_48381[(1)] = (22));

} else {
var statearr_48341_48382 = state_48306__$1;
(statearr_48341_48382[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48307 === (11))){
var inst_48230 = (state_48306[(2)]);
var state_48306__$1 = state_48306;
var statearr_48342_48383 = state_48306__$1;
(statearr_48342_48383[(2)] = inst_48230);

(statearr_48342_48383[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48307 === (9))){
var inst_48232 = figwheel.client.heads_up.clear.call(null);
var state_48306__$1 = state_48306;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48306__$1,(12),inst_48232);
} else {
if((state_val_48307 === (5))){
var inst_48223 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_48306__$1 = state_48306;
var statearr_48343_48384 = state_48306__$1;
(statearr_48343_48384[(2)] = inst_48223);

(statearr_48343_48384[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48307 === (14))){
var inst_48250 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_48306__$1 = state_48306;
if(cljs.core.truth_(inst_48250)){
var statearr_48344_48385 = state_48306__$1;
(statearr_48344_48385[(1)] = (18));

} else {
var statearr_48345_48386 = state_48306__$1;
(statearr_48345_48386[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48307 === (26))){
var inst_48276 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_48306__$1 = state_48306;
if(cljs.core.truth_(inst_48276)){
var statearr_48346_48387 = state_48306__$1;
(statearr_48346_48387[(1)] = (30));

} else {
var statearr_48347_48388 = state_48306__$1;
(statearr_48347_48388[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48307 === (16))){
var inst_48242 = (state_48306[(2)]);
var inst_48243 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48244 = figwheel.client.heads_up.display_exception.call(null,inst_48243);
var state_48306__$1 = (function (){var statearr_48348 = state_48306;
(statearr_48348[(13)] = inst_48242);

return statearr_48348;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48306__$1,(17),inst_48244);
} else {
if((state_val_48307 === (30))){
var inst_48278 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48279 = figwheel.client.heads_up.display_warning.call(null,inst_48278);
var state_48306__$1 = state_48306;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48306__$1,(33),inst_48279);
} else {
if((state_val_48307 === (10))){
var inst_48236 = (state_48306[(2)]);
var state_48306__$1 = state_48306;
var statearr_48349_48389 = state_48306__$1;
(statearr_48349_48389[(2)] = inst_48236);

(statearr_48349_48389[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48307 === (18))){
var inst_48252 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48253 = figwheel.client.heads_up.display_exception.call(null,inst_48252);
var state_48306__$1 = state_48306;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48306__$1,(21),inst_48253);
} else {
if((state_val_48307 === (37))){
var inst_48289 = (state_48306[(2)]);
var state_48306__$1 = state_48306;
var statearr_48350_48390 = state_48306__$1;
(statearr_48350_48390[(2)] = inst_48289);

(statearr_48350_48390[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48307 === (8))){
var inst_48228 = figwheel.client.heads_up.flash_loaded.call(null);
var state_48306__$1 = state_48306;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48306__$1,(11),inst_48228);
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
});})(c__44389__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__44301__auto__,c__44389__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44302__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44302__auto____0 = (function (){
var statearr_48351 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48351[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44302__auto__);

(statearr_48351[(1)] = (1));

return statearr_48351;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44302__auto____1 = (function (state_48306){
while(true){
var ret_value__44303__auto__ = (function (){try{while(true){
var result__44304__auto__ = switch__44301__auto__.call(null,state_48306);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44304__auto__;
}
break;
}
}catch (e48352){if((e48352 instanceof Object)){
var ex__44305__auto__ = e48352;
var statearr_48353_48391 = state_48306;
(statearr_48353_48391[(5)] = ex__44305__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48306);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48352;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48392 = state_48306;
state_48306 = G__48392;
continue;
} else {
return ret_value__44303__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44302__auto__ = function(state_48306){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44302__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44302__auto____1.call(this,state_48306);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44302__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44302__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44302__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44302__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44302__auto__;
})()
;})(switch__44301__auto__,c__44389__auto__,msg_hist,msg_names,msg))
})();
var state__44391__auto__ = (function (){var statearr_48354 = f__44390__auto__.call(null);
(statearr_48354[(6)] = c__44389__auto__);

return statearr_48354;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44391__auto__);
});})(c__44389__auto__,msg_hist,msg_names,msg))
);

return c__44389__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__44389__auto___48421 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44389__auto___48421,ch){
return (function (){
var f__44390__auto__ = (function (){var switch__44301__auto__ = ((function (c__44389__auto___48421,ch){
return (function (state_48407){
var state_val_48408 = (state_48407[(1)]);
if((state_val_48408 === (1))){
var state_48407__$1 = state_48407;
var statearr_48409_48422 = state_48407__$1;
(statearr_48409_48422[(2)] = null);

(statearr_48409_48422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48408 === (2))){
var state_48407__$1 = state_48407;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48407__$1,(4),ch);
} else {
if((state_val_48408 === (3))){
var inst_48405 = (state_48407[(2)]);
var state_48407__$1 = state_48407;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48407__$1,inst_48405);
} else {
if((state_val_48408 === (4))){
var inst_48395 = (state_48407[(7)]);
var inst_48395__$1 = (state_48407[(2)]);
var state_48407__$1 = (function (){var statearr_48410 = state_48407;
(statearr_48410[(7)] = inst_48395__$1);

return statearr_48410;
})();
if(cljs.core.truth_(inst_48395__$1)){
var statearr_48411_48423 = state_48407__$1;
(statearr_48411_48423[(1)] = (5));

} else {
var statearr_48412_48424 = state_48407__$1;
(statearr_48412_48424[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48408 === (5))){
var inst_48395 = (state_48407[(7)]);
var inst_48397 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_48395);
var state_48407__$1 = state_48407;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48407__$1,(8),inst_48397);
} else {
if((state_val_48408 === (6))){
var state_48407__$1 = state_48407;
var statearr_48413_48425 = state_48407__$1;
(statearr_48413_48425[(2)] = null);

(statearr_48413_48425[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48408 === (7))){
var inst_48403 = (state_48407[(2)]);
var state_48407__$1 = state_48407;
var statearr_48414_48426 = state_48407__$1;
(statearr_48414_48426[(2)] = inst_48403);

(statearr_48414_48426[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48408 === (8))){
var inst_48399 = (state_48407[(2)]);
var state_48407__$1 = (function (){var statearr_48415 = state_48407;
(statearr_48415[(8)] = inst_48399);

return statearr_48415;
})();
var statearr_48416_48427 = state_48407__$1;
(statearr_48416_48427[(2)] = null);

(statearr_48416_48427[(1)] = (2));


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
});})(c__44389__auto___48421,ch))
;
return ((function (switch__44301__auto__,c__44389__auto___48421,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__44302__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__44302__auto____0 = (function (){
var statearr_48417 = [null,null,null,null,null,null,null,null,null];
(statearr_48417[(0)] = figwheel$client$heads_up_plugin_$_state_machine__44302__auto__);

(statearr_48417[(1)] = (1));

return statearr_48417;
});
var figwheel$client$heads_up_plugin_$_state_machine__44302__auto____1 = (function (state_48407){
while(true){
var ret_value__44303__auto__ = (function (){try{while(true){
var result__44304__auto__ = switch__44301__auto__.call(null,state_48407);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44304__auto__;
}
break;
}
}catch (e48418){if((e48418 instanceof Object)){
var ex__44305__auto__ = e48418;
var statearr_48419_48428 = state_48407;
(statearr_48419_48428[(5)] = ex__44305__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48407);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48418;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48429 = state_48407;
state_48407 = G__48429;
continue;
} else {
return ret_value__44303__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__44302__auto__ = function(state_48407){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__44302__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__44302__auto____1.call(this,state_48407);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__44302__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__44302__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__44302__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__44302__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__44302__auto__;
})()
;})(switch__44301__auto__,c__44389__auto___48421,ch))
})();
var state__44391__auto__ = (function (){var statearr_48420 = f__44390__auto__.call(null);
(statearr_48420[(6)] = c__44389__auto___48421);

return statearr_48420;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44391__auto__);
});})(c__44389__auto___48421,ch))
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
var c__44389__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44389__auto__){
return (function (){
var f__44390__auto__ = (function (){var switch__44301__auto__ = ((function (c__44389__auto__){
return (function (state_48435){
var state_val_48436 = (state_48435[(1)]);
if((state_val_48436 === (1))){
var inst_48430 = cljs.core.async.timeout.call(null,(3000));
var state_48435__$1 = state_48435;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48435__$1,(2),inst_48430);
} else {
if((state_val_48436 === (2))){
var inst_48432 = (state_48435[(2)]);
var inst_48433 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_48435__$1 = (function (){var statearr_48437 = state_48435;
(statearr_48437[(7)] = inst_48432);

return statearr_48437;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48435__$1,inst_48433);
} else {
return null;
}
}
});})(c__44389__auto__))
;
return ((function (switch__44301__auto__,c__44389__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__44302__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__44302__auto____0 = (function (){
var statearr_48438 = [null,null,null,null,null,null,null,null];
(statearr_48438[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__44302__auto__);

(statearr_48438[(1)] = (1));

return statearr_48438;
});
var figwheel$client$enforce_project_plugin_$_state_machine__44302__auto____1 = (function (state_48435){
while(true){
var ret_value__44303__auto__ = (function (){try{while(true){
var result__44304__auto__ = switch__44301__auto__.call(null,state_48435);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44304__auto__;
}
break;
}
}catch (e48439){if((e48439 instanceof Object)){
var ex__44305__auto__ = e48439;
var statearr_48440_48442 = state_48435;
(statearr_48440_48442[(5)] = ex__44305__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48435);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48439;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48443 = state_48435;
state_48435 = G__48443;
continue;
} else {
return ret_value__44303__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__44302__auto__ = function(state_48435){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__44302__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__44302__auto____1.call(this,state_48435);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__44302__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__44302__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__44302__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__44302__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__44302__auto__;
})()
;})(switch__44301__auto__,c__44389__auto__))
})();
var state__44391__auto__ = (function (){var statearr_48441 = f__44390__auto__.call(null);
(statearr_48441[(6)] = c__44389__auto__);

return statearr_48441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44391__auto__);
});})(c__44389__auto__))
);

return c__44389__auto__;
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
var c__44389__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44389__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__44390__auto__ = (function (){var switch__44301__auto__ = ((function (c__44389__auto__,figwheel_version,temp__4657__auto__){
return (function (state_48450){
var state_val_48451 = (state_48450[(1)]);
if((state_val_48451 === (1))){
var inst_48444 = cljs.core.async.timeout.call(null,(2000));
var state_48450__$1 = state_48450;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48450__$1,(2),inst_48444);
} else {
if((state_val_48451 === (2))){
var inst_48446 = (state_48450[(2)]);
var inst_48447 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Client Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong> is not equal to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Sidecar Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".  Shutting down Websocket Connection!"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<h4>To fix try:</h4>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_48448 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_48447);
var state_48450__$1 = (function (){var statearr_48452 = state_48450;
(statearr_48452[(7)] = inst_48446);

return statearr_48452;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48450__$1,inst_48448);
} else {
return null;
}
}
});})(c__44389__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__44301__auto__,c__44389__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44302__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44302__auto____0 = (function (){
var statearr_48453 = [null,null,null,null,null,null,null,null];
(statearr_48453[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44302__auto__);

(statearr_48453[(1)] = (1));

return statearr_48453;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44302__auto____1 = (function (state_48450){
while(true){
var ret_value__44303__auto__ = (function (){try{while(true){
var result__44304__auto__ = switch__44301__auto__.call(null,state_48450);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44304__auto__;
}
break;
}
}catch (e48454){if((e48454 instanceof Object)){
var ex__44305__auto__ = e48454;
var statearr_48455_48457 = state_48450;
(statearr_48455_48457[(5)] = ex__44305__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48450);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48454;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48458 = state_48450;
state_48450 = G__48458;
continue;
} else {
return ret_value__44303__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44302__auto__ = function(state_48450){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44302__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44302__auto____1.call(this,state_48450);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44302__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44302__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44302__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44302__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44302__auto__;
})()
;})(switch__44301__auto__,c__44389__auto__,figwheel_version,temp__4657__auto__))
})();
var state__44391__auto__ = (function (){var statearr_48456 = f__44390__auto__.call(null);
(statearr_48456[(6)] = c__44389__auto__);

return statearr_48456;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44391__auto__);
});})(c__44389__auto__,figwheel_version,temp__4657__auto__))
);

return c__44389__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__48459){
var map__48460 = p__48459;
var map__48460__$1 = ((((!((map__48460 == null)))?((((map__48460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48460.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48460):map__48460);
var file = cljs.core.get.call(null,map__48460__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__48460__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__48460__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__48462 = "";
var G__48462__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48462),cljs.core.str.cljs$core$IFn$_invoke$arity$1("file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__48462);
var G__48462__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48462__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__48462__$1);
if(cljs.core.truth_((function (){var and__36744__auto__ = line;
if(cljs.core.truth_(and__36744__auto__)){
return column;
} else {
return and__36744__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48462__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__48462__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__48463){
var map__48464 = p__48463;
var map__48464__$1 = ((((!((map__48464 == null)))?((((map__48464.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48464.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48464):map__48464);
var ed = map__48464__$1;
var formatted_exception = cljs.core.get.call(null,map__48464__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__48464__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__48464__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__48466_48470 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__48467_48471 = null;
var count__48468_48472 = (0);
var i__48469_48473 = (0);
while(true){
if((i__48469_48473 < count__48468_48472)){
var msg_48474 = cljs.core._nth.call(null,chunk__48467_48471,i__48469_48473);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_48474);

var G__48475 = seq__48466_48470;
var G__48476 = chunk__48467_48471;
var G__48477 = count__48468_48472;
var G__48478 = (i__48469_48473 + (1));
seq__48466_48470 = G__48475;
chunk__48467_48471 = G__48476;
count__48468_48472 = G__48477;
i__48469_48473 = G__48478;
continue;
} else {
var temp__4657__auto___48479 = cljs.core.seq.call(null,seq__48466_48470);
if(temp__4657__auto___48479){
var seq__48466_48480__$1 = temp__4657__auto___48479;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48466_48480__$1)){
var c__37576__auto___48481 = cljs.core.chunk_first.call(null,seq__48466_48480__$1);
var G__48482 = cljs.core.chunk_rest.call(null,seq__48466_48480__$1);
var G__48483 = c__37576__auto___48481;
var G__48484 = cljs.core.count.call(null,c__37576__auto___48481);
var G__48485 = (0);
seq__48466_48470 = G__48482;
chunk__48467_48471 = G__48483;
count__48468_48472 = G__48484;
i__48469_48473 = G__48485;
continue;
} else {
var msg_48486 = cljs.core.first.call(null,seq__48466_48480__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_48486);

var G__48487 = cljs.core.next.call(null,seq__48466_48480__$1);
var G__48488 = null;
var G__48489 = (0);
var G__48490 = (0);
seq__48466_48470 = G__48487;
chunk__48467_48471 = G__48488;
count__48468_48472 = G__48489;
i__48469_48473 = G__48490;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__48491){
var map__48492 = p__48491;
var map__48492__$1 = ((((!((map__48492 == null)))?((((map__48492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48492.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48492):map__48492);
var w = map__48492__$1;
var message = cljs.core.get.call(null,map__48492__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__36744__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__36744__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__36744__auto__;
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
var seq__48494 = cljs.core.seq.call(null,plugins);
var chunk__48495 = null;
var count__48496 = (0);
var i__48497 = (0);
while(true){
if((i__48497 < count__48496)){
var vec__48498 = cljs.core._nth.call(null,chunk__48495,i__48497);
var k = cljs.core.nth.call(null,vec__48498,(0),null);
var plugin = cljs.core.nth.call(null,vec__48498,(1),null);
if(cljs.core.truth_(plugin)){
var pl_48504 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__48494,chunk__48495,count__48496,i__48497,pl_48504,vec__48498,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_48504.call(null,msg_hist);
});})(seq__48494,chunk__48495,count__48496,i__48497,pl_48504,vec__48498,k,plugin))
);
} else {
}

var G__48505 = seq__48494;
var G__48506 = chunk__48495;
var G__48507 = count__48496;
var G__48508 = (i__48497 + (1));
seq__48494 = G__48505;
chunk__48495 = G__48506;
count__48496 = G__48507;
i__48497 = G__48508;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__48494);
if(temp__4657__auto__){
var seq__48494__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48494__$1)){
var c__37576__auto__ = cljs.core.chunk_first.call(null,seq__48494__$1);
var G__48509 = cljs.core.chunk_rest.call(null,seq__48494__$1);
var G__48510 = c__37576__auto__;
var G__48511 = cljs.core.count.call(null,c__37576__auto__);
var G__48512 = (0);
seq__48494 = G__48509;
chunk__48495 = G__48510;
count__48496 = G__48511;
i__48497 = G__48512;
continue;
} else {
var vec__48501 = cljs.core.first.call(null,seq__48494__$1);
var k = cljs.core.nth.call(null,vec__48501,(0),null);
var plugin = cljs.core.nth.call(null,vec__48501,(1),null);
if(cljs.core.truth_(plugin)){
var pl_48513 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__48494,chunk__48495,count__48496,i__48497,pl_48513,vec__48501,k,plugin,seq__48494__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_48513.call(null,msg_hist);
});})(seq__48494,chunk__48495,count__48496,i__48497,pl_48513,vec__48501,k,plugin,seq__48494__$1,temp__4657__auto__))
);
} else {
}

var G__48514 = cljs.core.next.call(null,seq__48494__$1);
var G__48515 = null;
var G__48516 = (0);
var G__48517 = (0);
seq__48494 = G__48514;
chunk__48495 = G__48515;
count__48496 = G__48516;
i__48497 = G__48517;
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
var G__48519 = arguments.length;
switch (G__48519) {
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

var seq__48520_48525 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__48521_48526 = null;
var count__48522_48527 = (0);
var i__48523_48528 = (0);
while(true){
if((i__48523_48528 < count__48522_48527)){
var msg_48529 = cljs.core._nth.call(null,chunk__48521_48526,i__48523_48528);
figwheel.client.socket.handle_incoming_message.call(null,msg_48529);

var G__48530 = seq__48520_48525;
var G__48531 = chunk__48521_48526;
var G__48532 = count__48522_48527;
var G__48533 = (i__48523_48528 + (1));
seq__48520_48525 = G__48530;
chunk__48521_48526 = G__48531;
count__48522_48527 = G__48532;
i__48523_48528 = G__48533;
continue;
} else {
var temp__4657__auto___48534 = cljs.core.seq.call(null,seq__48520_48525);
if(temp__4657__auto___48534){
var seq__48520_48535__$1 = temp__4657__auto___48534;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48520_48535__$1)){
var c__37576__auto___48536 = cljs.core.chunk_first.call(null,seq__48520_48535__$1);
var G__48537 = cljs.core.chunk_rest.call(null,seq__48520_48535__$1);
var G__48538 = c__37576__auto___48536;
var G__48539 = cljs.core.count.call(null,c__37576__auto___48536);
var G__48540 = (0);
seq__48520_48525 = G__48537;
chunk__48521_48526 = G__48538;
count__48522_48527 = G__48539;
i__48523_48528 = G__48540;
continue;
} else {
var msg_48541 = cljs.core.first.call(null,seq__48520_48535__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_48541);

var G__48542 = cljs.core.next.call(null,seq__48520_48535__$1);
var G__48543 = null;
var G__48544 = (0);
var G__48545 = (0);
seq__48520_48525 = G__48542;
chunk__48521_48526 = G__48543;
count__48522_48527 = G__48544;
i__48523_48528 = G__48545;
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
var args__37888__auto__ = [];
var len__37881__auto___48550 = arguments.length;
var i__37882__auto___48551 = (0);
while(true){
if((i__37882__auto___48551 < len__37881__auto___48550)){
args__37888__auto__.push((arguments[i__37882__auto___48551]));

var G__48552 = (i__37882__auto___48551 + (1));
i__37882__auto___48551 = G__48552;
continue;
} else {
}
break;
}

var argseq__37889__auto__ = ((((0) < args__37888__auto__.length))?(new cljs.core.IndexedSeq(args__37888__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__37889__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__48547){
var map__48548 = p__48547;
var map__48548__$1 = ((((!((map__48548 == null)))?((((map__48548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48548.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48548):map__48548);
var opts = map__48548__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq48546){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48546));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e48553){if((e48553 instanceof Error)){
var e = e48553;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e48553;

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
return (function (p__48554){
var map__48555 = p__48554;
var map__48555__$1 = ((((!((map__48555 == null)))?((((map__48555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48555.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48555):map__48555);
var msg_name = cljs.core.get.call(null,map__48555__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1503550045122