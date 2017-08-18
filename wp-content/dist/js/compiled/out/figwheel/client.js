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
var G__48084 = arguments.length;
switch (G__48084) {
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
var args__37901__auto__ = [];
var len__37894__auto___48087 = arguments.length;
var i__37895__auto___48088 = (0);
while(true){
if((i__37895__auto___48088 < len__37894__auto___48087)){
args__37901__auto__.push((arguments[i__37895__auto___48088]));

var G__48089 = (i__37895__auto___48088 + (1));
i__37895__auto___48088 = G__48089;
continue;
} else {
}
break;
}

var argseq__37902__auto__ = ((((0) < args__37901__auto__.length))?(new cljs.core.IndexedSeq(args__37901__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__37902__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq48086){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48086));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__37901__auto__ = [];
var len__37894__auto___48091 = arguments.length;
var i__37895__auto___48092 = (0);
while(true){
if((i__37895__auto___48092 < len__37894__auto___48091)){
args__37901__auto__.push((arguments[i__37895__auto___48092]));

var G__48093 = (i__37895__auto___48092 + (1));
i__37895__auto___48092 = G__48093;
continue;
} else {
}
break;
}

var argseq__37902__auto__ = ((((0) < args__37901__auto__.length))?(new cljs.core.IndexedSeq(args__37901__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__37902__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq48090){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48090));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__48094){
var map__48095 = p__48094;
var map__48095__$1 = ((((!((map__48095 == null)))?((((map__48095.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48095.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48095):map__48095);
var message = cljs.core.get.call(null,map__48095__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__48095__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" : "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__36769__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__36769__auto__)){
return or__36769__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__36757__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__36757__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__36757__auto__;
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
var c__44396__auto___48174 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44396__auto___48174,ch){
return (function (){
var f__44397__auto__ = (function (){var switch__44308__auto__ = ((function (c__44396__auto___48174,ch){
return (function (state_48146){
var state_val_48147 = (state_48146[(1)]);
if((state_val_48147 === (7))){
var inst_48142 = (state_48146[(2)]);
var state_48146__$1 = state_48146;
var statearr_48148_48175 = state_48146__$1;
(statearr_48148_48175[(2)] = inst_48142);

(statearr_48148_48175[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48147 === (1))){
var state_48146__$1 = state_48146;
var statearr_48149_48176 = state_48146__$1;
(statearr_48149_48176[(2)] = null);

(statearr_48149_48176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48147 === (4))){
var inst_48099 = (state_48146[(7)]);
var inst_48099__$1 = (state_48146[(2)]);
var state_48146__$1 = (function (){var statearr_48150 = state_48146;
(statearr_48150[(7)] = inst_48099__$1);

return statearr_48150;
})();
if(cljs.core.truth_(inst_48099__$1)){
var statearr_48151_48177 = state_48146__$1;
(statearr_48151_48177[(1)] = (5));

} else {
var statearr_48152_48178 = state_48146__$1;
(statearr_48152_48178[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48147 === (15))){
var inst_48106 = (state_48146[(8)]);
var inst_48121 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_48106);
var inst_48122 = cljs.core.first.call(null,inst_48121);
var inst_48123 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_48122);
var inst_48124 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not loading code with warnings - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_48123)].join('');
var inst_48125 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_48124);
var state_48146__$1 = state_48146;
var statearr_48153_48179 = state_48146__$1;
(statearr_48153_48179[(2)] = inst_48125);

(statearr_48153_48179[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48147 === (13))){
var inst_48130 = (state_48146[(2)]);
var state_48146__$1 = state_48146;
var statearr_48154_48180 = state_48146__$1;
(statearr_48154_48180[(2)] = inst_48130);

(statearr_48154_48180[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48147 === (6))){
var state_48146__$1 = state_48146;
var statearr_48155_48181 = state_48146__$1;
(statearr_48155_48181[(2)] = null);

(statearr_48155_48181[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48147 === (17))){
var inst_48128 = (state_48146[(2)]);
var state_48146__$1 = state_48146;
var statearr_48156_48182 = state_48146__$1;
(statearr_48156_48182[(2)] = inst_48128);

(statearr_48156_48182[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48147 === (3))){
var inst_48144 = (state_48146[(2)]);
var state_48146__$1 = state_48146;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48146__$1,inst_48144);
} else {
if((state_val_48147 === (12))){
var inst_48105 = (state_48146[(9)]);
var inst_48119 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_48105,opts);
var state_48146__$1 = state_48146;
if(cljs.core.truth_(inst_48119)){
var statearr_48157_48183 = state_48146__$1;
(statearr_48157_48183[(1)] = (15));

} else {
var statearr_48158_48184 = state_48146__$1;
(statearr_48158_48184[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48147 === (2))){
var state_48146__$1 = state_48146;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48146__$1,(4),ch);
} else {
if((state_val_48147 === (11))){
var inst_48106 = (state_48146[(8)]);
var inst_48111 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48112 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_48106);
var inst_48113 = cljs.core.async.timeout.call(null,(1000));
var inst_48114 = [inst_48112,inst_48113];
var inst_48115 = (new cljs.core.PersistentVector(null,2,(5),inst_48111,inst_48114,null));
var state_48146__$1 = state_48146;
return cljs.core.async.ioc_alts_BANG_.call(null,state_48146__$1,(14),inst_48115);
} else {
if((state_val_48147 === (9))){
var inst_48106 = (state_48146[(8)]);
var inst_48132 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_48133 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_48106);
var inst_48134 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_48133);
var inst_48135 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Not loading: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_48134)].join('');
var inst_48136 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_48135);
var state_48146__$1 = (function (){var statearr_48159 = state_48146;
(statearr_48159[(10)] = inst_48132);

return statearr_48159;
})();
var statearr_48160_48185 = state_48146__$1;
(statearr_48160_48185[(2)] = inst_48136);

(statearr_48160_48185[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48147 === (5))){
var inst_48099 = (state_48146[(7)]);
var inst_48101 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_48102 = (new cljs.core.PersistentArrayMap(null,2,inst_48101,null));
var inst_48103 = (new cljs.core.PersistentHashSet(null,inst_48102,null));
var inst_48104 = figwheel.client.focus_msgs.call(null,inst_48103,inst_48099);
var inst_48105 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_48104);
var inst_48106 = cljs.core.first.call(null,inst_48104);
var inst_48107 = figwheel.client.autoload_QMARK_.call(null);
var state_48146__$1 = (function (){var statearr_48161 = state_48146;
(statearr_48161[(9)] = inst_48105);

(statearr_48161[(8)] = inst_48106);

return statearr_48161;
})();
if(cljs.core.truth_(inst_48107)){
var statearr_48162_48186 = state_48146__$1;
(statearr_48162_48186[(1)] = (8));

} else {
var statearr_48163_48187 = state_48146__$1;
(statearr_48163_48187[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48147 === (14))){
var inst_48117 = (state_48146[(2)]);
var state_48146__$1 = state_48146;
var statearr_48164_48188 = state_48146__$1;
(statearr_48164_48188[(2)] = inst_48117);

(statearr_48164_48188[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48147 === (16))){
var state_48146__$1 = state_48146;
var statearr_48165_48189 = state_48146__$1;
(statearr_48165_48189[(2)] = null);

(statearr_48165_48189[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48147 === (10))){
var inst_48138 = (state_48146[(2)]);
var state_48146__$1 = (function (){var statearr_48166 = state_48146;
(statearr_48166[(11)] = inst_48138);

return statearr_48166;
})();
var statearr_48167_48190 = state_48146__$1;
(statearr_48167_48190[(2)] = null);

(statearr_48167_48190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48147 === (8))){
var inst_48105 = (state_48146[(9)]);
var inst_48109 = figwheel.client.reload_file_state_QMARK_.call(null,inst_48105,opts);
var state_48146__$1 = state_48146;
if(cljs.core.truth_(inst_48109)){
var statearr_48168_48191 = state_48146__$1;
(statearr_48168_48191[(1)] = (11));

} else {
var statearr_48169_48192 = state_48146__$1;
(statearr_48169_48192[(1)] = (12));

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
});})(c__44396__auto___48174,ch))
;
return ((function (switch__44308__auto__,c__44396__auto___48174,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__44309__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__44309__auto____0 = (function (){
var statearr_48170 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48170[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__44309__auto__);

(statearr_48170[(1)] = (1));

return statearr_48170;
});
var figwheel$client$file_reloader_plugin_$_state_machine__44309__auto____1 = (function (state_48146){
while(true){
var ret_value__44310__auto__ = (function (){try{while(true){
var result__44311__auto__ = switch__44308__auto__.call(null,state_48146);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44311__auto__;
}
break;
}
}catch (e48171){if((e48171 instanceof Object)){
var ex__44312__auto__ = e48171;
var statearr_48172_48193 = state_48146;
(statearr_48172_48193[(5)] = ex__44312__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48146);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48171;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48194 = state_48146;
state_48146 = G__48194;
continue;
} else {
return ret_value__44310__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__44309__auto__ = function(state_48146){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__44309__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__44309__auto____1.call(this,state_48146);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__44309__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__44309__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__44309__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__44309__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__44309__auto__;
})()
;})(switch__44308__auto__,c__44396__auto___48174,ch))
})();
var state__44398__auto__ = (function (){var statearr_48173 = f__44397__auto__.call(null);
(statearr_48173[(6)] = c__44396__auto___48174);

return statearr_48173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44398__auto__);
});})(c__44396__auto___48174,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__48195_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__48195_SHARP_));
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
var base_path_48197 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_48197){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e48196){if((e48196 instanceof Error)){
var e = e48196;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_48197], null));
} else {
var e = e48196;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_48197))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__48198){
var map__48199 = p__48198;
var map__48199__$1 = ((((!((map__48199 == null)))?((((map__48199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48199.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48199):map__48199);
var opts = map__48199__$1;
var build_id = cljs.core.get.call(null,map__48199__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__48199,map__48199__$1,opts,build_id){
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
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__48202,seq__48203,first__48204,seq__48203__$1,map__48205,map__48205__$1,msg,msg_name,_,map__48199,map__48199__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__48202,seq__48203,first__48204,seq__48203__$1,map__48205,map__48205__$1,msg,msg_name,_,map__48199,map__48199__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__48199,map__48199__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__48207){
var vec__48208 = p__48207;
var seq__48209 = cljs.core.seq.call(null,vec__48208);
var first__48210 = cljs.core.first.call(null,seq__48209);
var seq__48209__$1 = cljs.core.next.call(null,seq__48209);
var map__48211 = first__48210;
var map__48211__$1 = ((((!((map__48211 == null)))?((((map__48211.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48211.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48211):map__48211);
var msg = map__48211__$1;
var msg_name = cljs.core.get.call(null,map__48211__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__48209__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__48213){
var map__48214 = p__48213;
var map__48214__$1 = ((((!((map__48214 == null)))?((((map__48214.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48214.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48214):map__48214);
var on_compile_warning = cljs.core.get.call(null,map__48214__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__48214__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__48214,map__48214__$1,on_compile_warning,on_compile_fail){
return (function (p__48216){
var vec__48217 = p__48216;
var seq__48218 = cljs.core.seq.call(null,vec__48217);
var first__48219 = cljs.core.first.call(null,seq__48218);
var seq__48218__$1 = cljs.core.next.call(null,seq__48218);
var map__48220 = first__48219;
var map__48220__$1 = ((((!((map__48220 == null)))?((((map__48220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48220.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48220):map__48220);
var msg = map__48220__$1;
var msg_name = cljs.core.get.call(null,map__48220__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__48218__$1;
var pred__48222 = cljs.core._EQ_;
var expr__48223 = msg_name;
if(cljs.core.truth_(pred__48222.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__48223))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__48222.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__48223))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__48214,map__48214__$1,on_compile_warning,on_compile_fail))
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
var c__44396__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44396__auto__,msg_hist,msg_names,msg){
return (function (){
var f__44397__auto__ = (function (){var switch__44308__auto__ = ((function (c__44396__auto__,msg_hist,msg_names,msg){
return (function (state_48312){
var state_val_48313 = (state_48312[(1)]);
if((state_val_48313 === (7))){
var inst_48232 = (state_48312[(2)]);
var state_48312__$1 = state_48312;
if(cljs.core.truth_(inst_48232)){
var statearr_48314_48361 = state_48312__$1;
(statearr_48314_48361[(1)] = (8));

} else {
var statearr_48315_48362 = state_48312__$1;
(statearr_48315_48362[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48313 === (20))){
var inst_48306 = (state_48312[(2)]);
var state_48312__$1 = state_48312;
var statearr_48316_48363 = state_48312__$1;
(statearr_48316_48363[(2)] = inst_48306);

(statearr_48316_48363[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48313 === (27))){
var inst_48302 = (state_48312[(2)]);
var state_48312__$1 = state_48312;
var statearr_48317_48364 = state_48312__$1;
(statearr_48317_48364[(2)] = inst_48302);

(statearr_48317_48364[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48313 === (1))){
var inst_48225 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_48312__$1 = state_48312;
if(cljs.core.truth_(inst_48225)){
var statearr_48318_48365 = state_48312__$1;
(statearr_48318_48365[(1)] = (2));

} else {
var statearr_48319_48366 = state_48312__$1;
(statearr_48319_48366[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48313 === (24))){
var inst_48304 = (state_48312[(2)]);
var state_48312__$1 = state_48312;
var statearr_48320_48367 = state_48312__$1;
(statearr_48320_48367[(2)] = inst_48304);

(statearr_48320_48367[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48313 === (4))){
var inst_48310 = (state_48312[(2)]);
var state_48312__$1 = state_48312;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48312__$1,inst_48310);
} else {
if((state_val_48313 === (15))){
var inst_48308 = (state_48312[(2)]);
var state_48312__$1 = state_48312;
var statearr_48321_48368 = state_48312__$1;
(statearr_48321_48368[(2)] = inst_48308);

(statearr_48321_48368[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48313 === (21))){
var inst_48261 = (state_48312[(2)]);
var inst_48262 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48263 = figwheel.client.auto_jump_to_error.call(null,opts,inst_48262);
var state_48312__$1 = (function (){var statearr_48322 = state_48312;
(statearr_48322[(7)] = inst_48261);

return statearr_48322;
})();
var statearr_48323_48369 = state_48312__$1;
(statearr_48323_48369[(2)] = inst_48263);

(statearr_48323_48369[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48313 === (31))){
var inst_48291 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_48312__$1 = state_48312;
if(cljs.core.truth_(inst_48291)){
var statearr_48324_48370 = state_48312__$1;
(statearr_48324_48370[(1)] = (34));

} else {
var statearr_48325_48371 = state_48312__$1;
(statearr_48325_48371[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48313 === (32))){
var inst_48300 = (state_48312[(2)]);
var state_48312__$1 = state_48312;
var statearr_48326_48372 = state_48312__$1;
(statearr_48326_48372[(2)] = inst_48300);

(statearr_48326_48372[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48313 === (33))){
var inst_48287 = (state_48312[(2)]);
var inst_48288 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48289 = figwheel.client.auto_jump_to_error.call(null,opts,inst_48288);
var state_48312__$1 = (function (){var statearr_48327 = state_48312;
(statearr_48327[(8)] = inst_48287);

return statearr_48327;
})();
var statearr_48328_48373 = state_48312__$1;
(statearr_48328_48373[(2)] = inst_48289);

(statearr_48328_48373[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48313 === (13))){
var inst_48246 = figwheel.client.heads_up.clear.call(null);
var state_48312__$1 = state_48312;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48312__$1,(16),inst_48246);
} else {
if((state_val_48313 === (22))){
var inst_48267 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48268 = figwheel.client.heads_up.append_warning_message.call(null,inst_48267);
var state_48312__$1 = state_48312;
var statearr_48329_48374 = state_48312__$1;
(statearr_48329_48374[(2)] = inst_48268);

(statearr_48329_48374[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48313 === (36))){
var inst_48298 = (state_48312[(2)]);
var state_48312__$1 = state_48312;
var statearr_48330_48375 = state_48312__$1;
(statearr_48330_48375[(2)] = inst_48298);

(statearr_48330_48375[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48313 === (29))){
var inst_48278 = (state_48312[(2)]);
var inst_48279 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48280 = figwheel.client.auto_jump_to_error.call(null,opts,inst_48279);
var state_48312__$1 = (function (){var statearr_48331 = state_48312;
(statearr_48331[(9)] = inst_48278);

return statearr_48331;
})();
var statearr_48332_48376 = state_48312__$1;
(statearr_48332_48376[(2)] = inst_48280);

(statearr_48332_48376[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48313 === (6))){
var inst_48227 = (state_48312[(10)]);
var state_48312__$1 = state_48312;
var statearr_48333_48377 = state_48312__$1;
(statearr_48333_48377[(2)] = inst_48227);

(statearr_48333_48377[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48313 === (28))){
var inst_48274 = (state_48312[(2)]);
var inst_48275 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48276 = figwheel.client.heads_up.display_warning.call(null,inst_48275);
var state_48312__$1 = (function (){var statearr_48334 = state_48312;
(statearr_48334[(11)] = inst_48274);

return statearr_48334;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48312__$1,(29),inst_48276);
} else {
if((state_val_48313 === (25))){
var inst_48272 = figwheel.client.heads_up.clear.call(null);
var state_48312__$1 = state_48312;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48312__$1,(28),inst_48272);
} else {
if((state_val_48313 === (34))){
var inst_48293 = figwheel.client.heads_up.flash_loaded.call(null);
var state_48312__$1 = state_48312;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48312__$1,(37),inst_48293);
} else {
if((state_val_48313 === (17))){
var inst_48252 = (state_48312[(2)]);
var inst_48253 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48254 = figwheel.client.auto_jump_to_error.call(null,opts,inst_48253);
var state_48312__$1 = (function (){var statearr_48335 = state_48312;
(statearr_48335[(12)] = inst_48252);

return statearr_48335;
})();
var statearr_48336_48378 = state_48312__$1;
(statearr_48336_48378[(2)] = inst_48254);

(statearr_48336_48378[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48313 === (3))){
var inst_48244 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_48312__$1 = state_48312;
if(cljs.core.truth_(inst_48244)){
var statearr_48337_48379 = state_48312__$1;
(statearr_48337_48379[(1)] = (13));

} else {
var statearr_48338_48380 = state_48312__$1;
(statearr_48338_48380[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48313 === (12))){
var inst_48240 = (state_48312[(2)]);
var state_48312__$1 = state_48312;
var statearr_48339_48381 = state_48312__$1;
(statearr_48339_48381[(2)] = inst_48240);

(statearr_48339_48381[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48313 === (2))){
var inst_48227 = (state_48312[(10)]);
var inst_48227__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_48312__$1 = (function (){var statearr_48340 = state_48312;
(statearr_48340[(10)] = inst_48227__$1);

return statearr_48340;
})();
if(cljs.core.truth_(inst_48227__$1)){
var statearr_48341_48382 = state_48312__$1;
(statearr_48341_48382[(1)] = (5));

} else {
var statearr_48342_48383 = state_48312__$1;
(statearr_48342_48383[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48313 === (23))){
var inst_48270 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_48312__$1 = state_48312;
if(cljs.core.truth_(inst_48270)){
var statearr_48343_48384 = state_48312__$1;
(statearr_48343_48384[(1)] = (25));

} else {
var statearr_48344_48385 = state_48312__$1;
(statearr_48344_48385[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48313 === (35))){
var state_48312__$1 = state_48312;
var statearr_48345_48386 = state_48312__$1;
(statearr_48345_48386[(2)] = null);

(statearr_48345_48386[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48313 === (19))){
var inst_48265 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_48312__$1 = state_48312;
if(cljs.core.truth_(inst_48265)){
var statearr_48346_48387 = state_48312__$1;
(statearr_48346_48387[(1)] = (22));

} else {
var statearr_48347_48388 = state_48312__$1;
(statearr_48347_48388[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48313 === (11))){
var inst_48236 = (state_48312[(2)]);
var state_48312__$1 = state_48312;
var statearr_48348_48389 = state_48312__$1;
(statearr_48348_48389[(2)] = inst_48236);

(statearr_48348_48389[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48313 === (9))){
var inst_48238 = figwheel.client.heads_up.clear.call(null);
var state_48312__$1 = state_48312;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48312__$1,(12),inst_48238);
} else {
if((state_val_48313 === (5))){
var inst_48229 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_48312__$1 = state_48312;
var statearr_48349_48390 = state_48312__$1;
(statearr_48349_48390[(2)] = inst_48229);

(statearr_48349_48390[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48313 === (14))){
var inst_48256 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_48312__$1 = state_48312;
if(cljs.core.truth_(inst_48256)){
var statearr_48350_48391 = state_48312__$1;
(statearr_48350_48391[(1)] = (18));

} else {
var statearr_48351_48392 = state_48312__$1;
(statearr_48351_48392[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48313 === (26))){
var inst_48282 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_48312__$1 = state_48312;
if(cljs.core.truth_(inst_48282)){
var statearr_48352_48393 = state_48312__$1;
(statearr_48352_48393[(1)] = (30));

} else {
var statearr_48353_48394 = state_48312__$1;
(statearr_48353_48394[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48313 === (16))){
var inst_48248 = (state_48312[(2)]);
var inst_48249 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48250 = figwheel.client.heads_up.display_exception.call(null,inst_48249);
var state_48312__$1 = (function (){var statearr_48354 = state_48312;
(statearr_48354[(13)] = inst_48248);

return statearr_48354;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48312__$1,(17),inst_48250);
} else {
if((state_val_48313 === (30))){
var inst_48284 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48285 = figwheel.client.heads_up.display_warning.call(null,inst_48284);
var state_48312__$1 = state_48312;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48312__$1,(33),inst_48285);
} else {
if((state_val_48313 === (10))){
var inst_48242 = (state_48312[(2)]);
var state_48312__$1 = state_48312;
var statearr_48355_48395 = state_48312__$1;
(statearr_48355_48395[(2)] = inst_48242);

(statearr_48355_48395[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48313 === (18))){
var inst_48258 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48259 = figwheel.client.heads_up.display_exception.call(null,inst_48258);
var state_48312__$1 = state_48312;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48312__$1,(21),inst_48259);
} else {
if((state_val_48313 === (37))){
var inst_48295 = (state_48312[(2)]);
var state_48312__$1 = state_48312;
var statearr_48356_48396 = state_48312__$1;
(statearr_48356_48396[(2)] = inst_48295);

(statearr_48356_48396[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48313 === (8))){
var inst_48234 = figwheel.client.heads_up.flash_loaded.call(null);
var state_48312__$1 = state_48312;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48312__$1,(11),inst_48234);
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
});})(c__44396__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__44308__auto__,c__44396__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44309__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44309__auto____0 = (function (){
var statearr_48357 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48357[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44309__auto__);

(statearr_48357[(1)] = (1));

return statearr_48357;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44309__auto____1 = (function (state_48312){
while(true){
var ret_value__44310__auto__ = (function (){try{while(true){
var result__44311__auto__ = switch__44308__auto__.call(null,state_48312);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44311__auto__;
}
break;
}
}catch (e48358){if((e48358 instanceof Object)){
var ex__44312__auto__ = e48358;
var statearr_48359_48397 = state_48312;
(statearr_48359_48397[(5)] = ex__44312__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48312);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48358;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48398 = state_48312;
state_48312 = G__48398;
continue;
} else {
return ret_value__44310__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44309__auto__ = function(state_48312){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44309__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44309__auto____1.call(this,state_48312);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44309__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44309__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44309__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44309__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44309__auto__;
})()
;})(switch__44308__auto__,c__44396__auto__,msg_hist,msg_names,msg))
})();
var state__44398__auto__ = (function (){var statearr_48360 = f__44397__auto__.call(null);
(statearr_48360[(6)] = c__44396__auto__);

return statearr_48360;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44398__auto__);
});})(c__44396__auto__,msg_hist,msg_names,msg))
);

return c__44396__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__44396__auto___48427 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44396__auto___48427,ch){
return (function (){
var f__44397__auto__ = (function (){var switch__44308__auto__ = ((function (c__44396__auto___48427,ch){
return (function (state_48413){
var state_val_48414 = (state_48413[(1)]);
if((state_val_48414 === (1))){
var state_48413__$1 = state_48413;
var statearr_48415_48428 = state_48413__$1;
(statearr_48415_48428[(2)] = null);

(statearr_48415_48428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48414 === (2))){
var state_48413__$1 = state_48413;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48413__$1,(4),ch);
} else {
if((state_val_48414 === (3))){
var inst_48411 = (state_48413[(2)]);
var state_48413__$1 = state_48413;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48413__$1,inst_48411);
} else {
if((state_val_48414 === (4))){
var inst_48401 = (state_48413[(7)]);
var inst_48401__$1 = (state_48413[(2)]);
var state_48413__$1 = (function (){var statearr_48416 = state_48413;
(statearr_48416[(7)] = inst_48401__$1);

return statearr_48416;
})();
if(cljs.core.truth_(inst_48401__$1)){
var statearr_48417_48429 = state_48413__$1;
(statearr_48417_48429[(1)] = (5));

} else {
var statearr_48418_48430 = state_48413__$1;
(statearr_48418_48430[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48414 === (5))){
var inst_48401 = (state_48413[(7)]);
var inst_48403 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_48401);
var state_48413__$1 = state_48413;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48413__$1,(8),inst_48403);
} else {
if((state_val_48414 === (6))){
var state_48413__$1 = state_48413;
var statearr_48419_48431 = state_48413__$1;
(statearr_48419_48431[(2)] = null);

(statearr_48419_48431[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48414 === (7))){
var inst_48409 = (state_48413[(2)]);
var state_48413__$1 = state_48413;
var statearr_48420_48432 = state_48413__$1;
(statearr_48420_48432[(2)] = inst_48409);

(statearr_48420_48432[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48414 === (8))){
var inst_48405 = (state_48413[(2)]);
var state_48413__$1 = (function (){var statearr_48421 = state_48413;
(statearr_48421[(8)] = inst_48405);

return statearr_48421;
})();
var statearr_48422_48433 = state_48413__$1;
(statearr_48422_48433[(2)] = null);

(statearr_48422_48433[(1)] = (2));


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
});})(c__44396__auto___48427,ch))
;
return ((function (switch__44308__auto__,c__44396__auto___48427,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__44309__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__44309__auto____0 = (function (){
var statearr_48423 = [null,null,null,null,null,null,null,null,null];
(statearr_48423[(0)] = figwheel$client$heads_up_plugin_$_state_machine__44309__auto__);

(statearr_48423[(1)] = (1));

return statearr_48423;
});
var figwheel$client$heads_up_plugin_$_state_machine__44309__auto____1 = (function (state_48413){
while(true){
var ret_value__44310__auto__ = (function (){try{while(true){
var result__44311__auto__ = switch__44308__auto__.call(null,state_48413);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44311__auto__;
}
break;
}
}catch (e48424){if((e48424 instanceof Object)){
var ex__44312__auto__ = e48424;
var statearr_48425_48434 = state_48413;
(statearr_48425_48434[(5)] = ex__44312__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48413);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48424;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48435 = state_48413;
state_48413 = G__48435;
continue;
} else {
return ret_value__44310__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__44309__auto__ = function(state_48413){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__44309__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__44309__auto____1.call(this,state_48413);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__44309__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__44309__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__44309__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__44309__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__44309__auto__;
})()
;})(switch__44308__auto__,c__44396__auto___48427,ch))
})();
var state__44398__auto__ = (function (){var statearr_48426 = f__44397__auto__.call(null);
(statearr_48426[(6)] = c__44396__auto___48427);

return statearr_48426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44398__auto__);
});})(c__44396__auto___48427,ch))
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
var c__44396__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44396__auto__){
return (function (){
var f__44397__auto__ = (function (){var switch__44308__auto__ = ((function (c__44396__auto__){
return (function (state_48441){
var state_val_48442 = (state_48441[(1)]);
if((state_val_48442 === (1))){
var inst_48436 = cljs.core.async.timeout.call(null,(3000));
var state_48441__$1 = state_48441;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48441__$1,(2),inst_48436);
} else {
if((state_val_48442 === (2))){
var inst_48438 = (state_48441[(2)]);
var inst_48439 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_48441__$1 = (function (){var statearr_48443 = state_48441;
(statearr_48443[(7)] = inst_48438);

return statearr_48443;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48441__$1,inst_48439);
} else {
return null;
}
}
});})(c__44396__auto__))
;
return ((function (switch__44308__auto__,c__44396__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__44309__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__44309__auto____0 = (function (){
var statearr_48444 = [null,null,null,null,null,null,null,null];
(statearr_48444[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__44309__auto__);

(statearr_48444[(1)] = (1));

return statearr_48444;
});
var figwheel$client$enforce_project_plugin_$_state_machine__44309__auto____1 = (function (state_48441){
while(true){
var ret_value__44310__auto__ = (function (){try{while(true){
var result__44311__auto__ = switch__44308__auto__.call(null,state_48441);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44311__auto__;
}
break;
}
}catch (e48445){if((e48445 instanceof Object)){
var ex__44312__auto__ = e48445;
var statearr_48446_48448 = state_48441;
(statearr_48446_48448[(5)] = ex__44312__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48441);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48445;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48449 = state_48441;
state_48441 = G__48449;
continue;
} else {
return ret_value__44310__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__44309__auto__ = function(state_48441){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__44309__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__44309__auto____1.call(this,state_48441);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__44309__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__44309__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__44309__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__44309__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__44309__auto__;
})()
;})(switch__44308__auto__,c__44396__auto__))
})();
var state__44398__auto__ = (function (){var statearr_48447 = f__44397__auto__.call(null);
(statearr_48447[(6)] = c__44396__auto__);

return statearr_48447;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44398__auto__);
});})(c__44396__auto__))
);

return c__44396__auto__;
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
var c__44396__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44396__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__44397__auto__ = (function (){var switch__44308__auto__ = ((function (c__44396__auto__,figwheel_version,temp__4657__auto__){
return (function (state_48456){
var state_val_48457 = (state_48456[(1)]);
if((state_val_48457 === (1))){
var inst_48450 = cljs.core.async.timeout.call(null,(2000));
var state_48456__$1 = state_48456;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48456__$1,(2),inst_48450);
} else {
if((state_val_48457 === (2))){
var inst_48452 = (state_48456[(2)]);
var inst_48453 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Client Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong> is not equal to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Sidecar Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".  Shutting down Websocket Connection!"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<h4>To fix try:</h4>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_48454 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_48453);
var state_48456__$1 = (function (){var statearr_48458 = state_48456;
(statearr_48458[(7)] = inst_48452);

return statearr_48458;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48456__$1,inst_48454);
} else {
return null;
}
}
});})(c__44396__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__44308__auto__,c__44396__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44309__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44309__auto____0 = (function (){
var statearr_48459 = [null,null,null,null,null,null,null,null];
(statearr_48459[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44309__auto__);

(statearr_48459[(1)] = (1));

return statearr_48459;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44309__auto____1 = (function (state_48456){
while(true){
var ret_value__44310__auto__ = (function (){try{while(true){
var result__44311__auto__ = switch__44308__auto__.call(null,state_48456);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44311__auto__;
}
break;
}
}catch (e48460){if((e48460 instanceof Object)){
var ex__44312__auto__ = e48460;
var statearr_48461_48463 = state_48456;
(statearr_48461_48463[(5)] = ex__44312__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48456);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48460;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48464 = state_48456;
state_48456 = G__48464;
continue;
} else {
return ret_value__44310__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44309__auto__ = function(state_48456){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44309__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44309__auto____1.call(this,state_48456);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44309__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44309__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44309__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44309__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44309__auto__;
})()
;})(switch__44308__auto__,c__44396__auto__,figwheel_version,temp__4657__auto__))
})();
var state__44398__auto__ = (function (){var statearr_48462 = f__44397__auto__.call(null);
(statearr_48462[(6)] = c__44396__auto__);

return statearr_48462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44398__auto__);
});})(c__44396__auto__,figwheel_version,temp__4657__auto__))
);

return c__44396__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__48465){
var map__48466 = p__48465;
var map__48466__$1 = ((((!((map__48466 == null)))?((((map__48466.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48466.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48466):map__48466);
var file = cljs.core.get.call(null,map__48466__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__48466__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__48466__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__48468 = "";
var G__48468__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48468),cljs.core.str.cljs$core$IFn$_invoke$arity$1("file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__48468);
var G__48468__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48468__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__48468__$1);
if(cljs.core.truth_((function (){var and__36757__auto__ = line;
if(cljs.core.truth_(and__36757__auto__)){
return column;
} else {
return and__36757__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48468__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__48468__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__48469){
var map__48470 = p__48469;
var map__48470__$1 = ((((!((map__48470 == null)))?((((map__48470.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48470.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48470):map__48470);
var ed = map__48470__$1;
var formatted_exception = cljs.core.get.call(null,map__48470__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__48470__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__48470__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__48472_48476 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__48473_48477 = null;
var count__48474_48478 = (0);
var i__48475_48479 = (0);
while(true){
if((i__48475_48479 < count__48474_48478)){
var msg_48480 = cljs.core._nth.call(null,chunk__48473_48477,i__48475_48479);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_48480);

var G__48481 = seq__48472_48476;
var G__48482 = chunk__48473_48477;
var G__48483 = count__48474_48478;
var G__48484 = (i__48475_48479 + (1));
seq__48472_48476 = G__48481;
chunk__48473_48477 = G__48482;
count__48474_48478 = G__48483;
i__48475_48479 = G__48484;
continue;
} else {
var temp__4657__auto___48485 = cljs.core.seq.call(null,seq__48472_48476);
if(temp__4657__auto___48485){
var seq__48472_48486__$1 = temp__4657__auto___48485;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48472_48486__$1)){
var c__37589__auto___48487 = cljs.core.chunk_first.call(null,seq__48472_48486__$1);
var G__48488 = cljs.core.chunk_rest.call(null,seq__48472_48486__$1);
var G__48489 = c__37589__auto___48487;
var G__48490 = cljs.core.count.call(null,c__37589__auto___48487);
var G__48491 = (0);
seq__48472_48476 = G__48488;
chunk__48473_48477 = G__48489;
count__48474_48478 = G__48490;
i__48475_48479 = G__48491;
continue;
} else {
var msg_48492 = cljs.core.first.call(null,seq__48472_48486__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_48492);

var G__48493 = cljs.core.next.call(null,seq__48472_48486__$1);
var G__48494 = null;
var G__48495 = (0);
var G__48496 = (0);
seq__48472_48476 = G__48493;
chunk__48473_48477 = G__48494;
count__48474_48478 = G__48495;
i__48475_48479 = G__48496;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__48497){
var map__48498 = p__48497;
var map__48498__$1 = ((((!((map__48498 == null)))?((((map__48498.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48498.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48498):map__48498);
var w = map__48498__$1;
var message = cljs.core.get.call(null,map__48498__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__36757__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__36757__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__36757__auto__;
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
var seq__48500 = cljs.core.seq.call(null,plugins);
var chunk__48501 = null;
var count__48502 = (0);
var i__48503 = (0);
while(true){
if((i__48503 < count__48502)){
var vec__48504 = cljs.core._nth.call(null,chunk__48501,i__48503);
var k = cljs.core.nth.call(null,vec__48504,(0),null);
var plugin = cljs.core.nth.call(null,vec__48504,(1),null);
if(cljs.core.truth_(plugin)){
var pl_48510 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__48500,chunk__48501,count__48502,i__48503,pl_48510,vec__48504,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_48510.call(null,msg_hist);
});})(seq__48500,chunk__48501,count__48502,i__48503,pl_48510,vec__48504,k,plugin))
);
} else {
}

var G__48511 = seq__48500;
var G__48512 = chunk__48501;
var G__48513 = count__48502;
var G__48514 = (i__48503 + (1));
seq__48500 = G__48511;
chunk__48501 = G__48512;
count__48502 = G__48513;
i__48503 = G__48514;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__48500);
if(temp__4657__auto__){
var seq__48500__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48500__$1)){
var c__37589__auto__ = cljs.core.chunk_first.call(null,seq__48500__$1);
var G__48515 = cljs.core.chunk_rest.call(null,seq__48500__$1);
var G__48516 = c__37589__auto__;
var G__48517 = cljs.core.count.call(null,c__37589__auto__);
var G__48518 = (0);
seq__48500 = G__48515;
chunk__48501 = G__48516;
count__48502 = G__48517;
i__48503 = G__48518;
continue;
} else {
var vec__48507 = cljs.core.first.call(null,seq__48500__$1);
var k = cljs.core.nth.call(null,vec__48507,(0),null);
var plugin = cljs.core.nth.call(null,vec__48507,(1),null);
if(cljs.core.truth_(plugin)){
var pl_48519 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__48500,chunk__48501,count__48502,i__48503,pl_48519,vec__48507,k,plugin,seq__48500__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_48519.call(null,msg_hist);
});})(seq__48500,chunk__48501,count__48502,i__48503,pl_48519,vec__48507,k,plugin,seq__48500__$1,temp__4657__auto__))
);
} else {
}

var G__48520 = cljs.core.next.call(null,seq__48500__$1);
var G__48521 = null;
var G__48522 = (0);
var G__48523 = (0);
seq__48500 = G__48520;
chunk__48501 = G__48521;
count__48502 = G__48522;
i__48503 = G__48523;
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
var G__48525 = arguments.length;
switch (G__48525) {
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

var seq__48526_48531 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__48527_48532 = null;
var count__48528_48533 = (0);
var i__48529_48534 = (0);
while(true){
if((i__48529_48534 < count__48528_48533)){
var msg_48535 = cljs.core._nth.call(null,chunk__48527_48532,i__48529_48534);
figwheel.client.socket.handle_incoming_message.call(null,msg_48535);

var G__48536 = seq__48526_48531;
var G__48537 = chunk__48527_48532;
var G__48538 = count__48528_48533;
var G__48539 = (i__48529_48534 + (1));
seq__48526_48531 = G__48536;
chunk__48527_48532 = G__48537;
count__48528_48533 = G__48538;
i__48529_48534 = G__48539;
continue;
} else {
var temp__4657__auto___48540 = cljs.core.seq.call(null,seq__48526_48531);
if(temp__4657__auto___48540){
var seq__48526_48541__$1 = temp__4657__auto___48540;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48526_48541__$1)){
var c__37589__auto___48542 = cljs.core.chunk_first.call(null,seq__48526_48541__$1);
var G__48543 = cljs.core.chunk_rest.call(null,seq__48526_48541__$1);
var G__48544 = c__37589__auto___48542;
var G__48545 = cljs.core.count.call(null,c__37589__auto___48542);
var G__48546 = (0);
seq__48526_48531 = G__48543;
chunk__48527_48532 = G__48544;
count__48528_48533 = G__48545;
i__48529_48534 = G__48546;
continue;
} else {
var msg_48547 = cljs.core.first.call(null,seq__48526_48541__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_48547);

var G__48548 = cljs.core.next.call(null,seq__48526_48541__$1);
var G__48549 = null;
var G__48550 = (0);
var G__48551 = (0);
seq__48526_48531 = G__48548;
chunk__48527_48532 = G__48549;
count__48528_48533 = G__48550;
i__48529_48534 = G__48551;
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
var args__37901__auto__ = [];
var len__37894__auto___48556 = arguments.length;
var i__37895__auto___48557 = (0);
while(true){
if((i__37895__auto___48557 < len__37894__auto___48556)){
args__37901__auto__.push((arguments[i__37895__auto___48557]));

var G__48558 = (i__37895__auto___48557 + (1));
i__37895__auto___48557 = G__48558;
continue;
} else {
}
break;
}

var argseq__37902__auto__ = ((((0) < args__37901__auto__.length))?(new cljs.core.IndexedSeq(args__37901__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__37902__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__48553){
var map__48554 = p__48553;
var map__48554__$1 = ((((!((map__48554 == null)))?((((map__48554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48554.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48554):map__48554);
var opts = map__48554__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq48552){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48552));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e48559){if((e48559 instanceof Error)){
var e = e48559;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e48559;

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
return (function (p__48560){
var map__48561 = p__48560;
var map__48561__$1 = ((((!((map__48561 == null)))?((((map__48561.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48561.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48561):map__48561);
var msg_name = cljs.core.get.call(null,map__48561__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1502846514846