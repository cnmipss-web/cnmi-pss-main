// Compiled by ClojureScript 1.9.229 {}
goog.provide('devtools.core');
goog.require('cljs.core');
goog.require('devtools.prefs');
goog.require('devtools.toolbox');
goog.require('devtools.hints');
goog.require('devtools.async');
goog.require('devtools.formatters');
goog.require('devtools.util');
goog.require('devtools.defaults');
devtools.core.is_feature_available_QMARK_ = (function devtools$core$is_feature_available_QMARK_(feature){
var G__41594 = (((feature instanceof cljs.core.Keyword))?feature.fqn:null);
switch (G__41594) {
case "formatters":
return devtools.formatters.available_QMARK_.call(null);

break;
case "hints":
return devtools.hints.available_QMARK_.call(null);

break;
case "async":
return devtools.async.available_QMARK_.call(null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(feature)].join('')));

}
});
devtools.core.available_QMARK_ = (function devtools$core$available_QMARK_(var_args){
var args41596 = [];
var len__27064__auto___41599 = arguments.length;
var i__27065__auto___41600 = (0);
while(true){
if((i__27065__auto___41600 < len__27064__auto___41599)){
args41596.push((arguments[i__27065__auto___41600]));

var G__41601 = (i__27065__auto___41600 + (1));
i__27065__auto___41600 = G__41601;
continue;
} else {
}
break;
}

var G__41598 = args41596.length;
switch (G__41598) {
case 0:
return devtools.core.available_QMARK_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return devtools.core.available_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41596.length)].join('')));

}
});

devtools.core.available_QMARK_.cljs$core$IFn$_invoke$arity$0 = (function (){
return devtools.core.available_QMARK_.call(null,devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"features-to-install","features-to-install",102899261)));
});

devtools.core.available_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (features_desc){
var features = devtools.util.resolve_features_BANG_.call(null,features_desc,devtools.defaults.feature_groups);
if(cljs.core.empty_QMARK_.call(null,features)){
return false;
} else {
return cljs.core.every_QMARK_.call(null,devtools.core.is_feature_available_QMARK_,features);
}
});

devtools.core.available_QMARK_.cljs$lang$maxFixedArity = 1;

devtools.core.is_feature_installed_QMARK_ = (function devtools$core$is_feature_installed_QMARK_(feature){
var G__41604 = (((feature instanceof cljs.core.Keyword))?feature.fqn:null);
switch (G__41604) {
case "formatters":
return devtools.formatters.installed_QMARK_.call(null);

break;
case "hints":
return devtools.hints.installed_QMARK_.call(null);

break;
case "async":
return devtools.async.installed_QMARK_.call(null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(feature)].join('')));

}
});
devtools.core.installed_QMARK_ = (function devtools$core$installed_QMARK_(var_args){
var args41606 = [];
var len__27064__auto___41609 = arguments.length;
var i__27065__auto___41610 = (0);
while(true){
if((i__27065__auto___41610 < len__27064__auto___41609)){
args41606.push((arguments[i__27065__auto___41610]));

var G__41611 = (i__27065__auto___41610 + (1));
i__27065__auto___41610 = G__41611;
continue;
} else {
}
break;
}

var G__41608 = args41606.length;
switch (G__41608) {
case 0:
return devtools.core.installed_QMARK_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return devtools.core.installed_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41606.length)].join('')));

}
});

devtools.core.installed_QMARK_.cljs$core$IFn$_invoke$arity$0 = (function (){
return devtools.core.installed_QMARK_.call(null,devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"features-to-install","features-to-install",102899261)));
});

devtools.core.installed_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (features_desc){
var features = devtools.util.resolve_features_BANG_.call(null,features_desc,devtools.defaults.feature_groups);
if(cljs.core.empty_QMARK_.call(null,features)){
return false;
} else {
return cljs.core.every_QMARK_.call(null,devtools.core.is_feature_installed_QMARK_,features);
}
});

devtools.core.installed_QMARK_.cljs$lang$maxFixedArity = 1;

devtools.core.install_BANG_ = (function devtools$core$install_BANG_(var_args){
var args41613 = [];
var len__27064__auto___41616 = arguments.length;
var i__27065__auto___41617 = (0);
while(true){
if((i__27065__auto___41617 < len__27064__auto___41616)){
args41613.push((arguments[i__27065__auto___41617]));

var G__41618 = (i__27065__auto___41617 + (1));
i__27065__auto___41617 = G__41618;
continue;
} else {
}
break;
}

var G__41615 = args41613.length;
switch (G__41615) {
case 0:
return devtools.core.install_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return devtools.core.install_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41613.length)].join('')));

}
});

devtools.core.install_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return devtools.core.install_BANG_.call(null,devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"features-to-install","features-to-install",102899261)));
});

devtools.core.install_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (features_desc){
if(cljs.core.truth_(devtools.util.under_advanced_build_QMARK_.call(null))){
return devtools.util.display_advanced_build_warning_if_needed_BANG_.call(null);
} else {
var features = devtools.util.resolve_features_BANG_.call(null,features_desc,devtools.defaults.feature_groups);
devtools.util.display_banner_if_needed_BANG_.call(null,features,devtools.defaults.feature_groups);

devtools.util.print_config_overrides_if_requested_BANG_.call(null,"config overrides prior install:\n");

devtools.util.install_feature_BANG_.call(null,new cljs.core.Keyword(null,"formatters","formatters",-1875637118),features,devtools.core.is_feature_available_QMARK_,devtools.formatters.install_BANG_);

devtools.util.install_feature_BANG_.call(null,new cljs.core.Keyword(null,"hints","hints",-991113151),features,devtools.core.is_feature_available_QMARK_,devtools.hints.install_BANG_);

return devtools.util.install_feature_BANG_.call(null,new cljs.core.Keyword(null,"async","async",1050769601),features,devtools.core.is_feature_available_QMARK_,devtools.async.install_BANG_);
}
});

devtools.core.install_BANG_.cljs$lang$maxFixedArity = 1;

devtools.core.uninstall_BANG_ = (function devtools$core$uninstall_BANG_(){
devtools.formatters.uninstall_BANG_.call(null);

devtools.hints.uninstall_BANG_.call(null);

return devtools.async.uninstall_BANG_.call(null);
});
devtools.core.set_prefs_BANG_ = (function devtools$core$set_prefs_BANG_(new_prefs){
return devtools.prefs.set_prefs_BANG_.call(null,new_prefs);
});
devtools.core.get_prefs = (function devtools$core$get_prefs(){
return devtools.prefs.get_prefs.call(null);
});
devtools.core.set_pref_BANG_ = (function devtools$core$set_pref_BANG_(pref,val){
return devtools.prefs.set_pref_BANG_.call(null,pref,val);
});
devtools.core.enable_BANG_ = (function devtools$core$enable_BANG_(){
return console.warn([cljs.core.str("devtools.core/enable! was removed "),cljs.core.str("and has no effect in "),cljs.core.str(devtools.util.make_lib_info.call(null)),cljs.core.str(" "),cljs.core.str("=> remove the call")].join(''));
});
devtools.core.disable_BANG_ = (function devtools$core$disable_BANG_(){
return console.warn([cljs.core.str("devtools.core/disable! was removed "),cljs.core.str("and has no effect in "),cljs.core.str(devtools.util.make_lib_info.call(null)),cljs.core.str(" "),cljs.core.str("=> remove the call")].join(''));
});
devtools.core.set_single_feature_BANG_ = (function devtools$core$set_single_feature_BANG_(_feature,_val){
return console.warn([cljs.core.str("devtools.core/set-single-feature! was removed "),cljs.core.str("and has no effect in "),cljs.core.str(devtools.util.make_lib_info.call(null)),cljs.core.str(" "),cljs.core.str("=> use (devtools.core/install! features) to install custom features")].join(''));
});
devtools.core.enable_single_feature_BANG_ = (function devtools$core$enable_single_feature_BANG_(_feature){
return console.warn([cljs.core.str("devtools.core/enable-single-feature! was removed "),cljs.core.str("and has no effect in "),cljs.core.str(devtools.util.make_lib_info.call(null)),cljs.core.str(" "),cljs.core.str("=> use (devtools.core/install! features) to install custom features")].join(''));
});
devtools.core.disable_single_feature_BANG_ = (function devtools$core$disable_single_feature_BANG_(_feature){
return console.warn([cljs.core.str("devtools.core/disable-single-feature! was removed "),cljs.core.str("and has no effect in "),cljs.core.str(devtools.util.make_lib_info.call(null)),cljs.core.str(" "),cljs.core.str("=> use (devtools.core/install! features) to install custom features")].join(''));
});
devtools.core.enable_feature_BANG_ = (function devtools$core$enable_feature_BANG_(var_args){
var args__27071__auto__ = [];
var len__27064__auto___41621 = arguments.length;
var i__27065__auto___41622 = (0);
while(true){
if((i__27065__auto___41622 < len__27064__auto___41621)){
args__27071__auto__.push((arguments[i__27065__auto___41622]));

var G__41623 = (i__27065__auto___41622 + (1));
i__27065__auto___41622 = G__41623;
continue;
} else {
}
break;
}

var argseq__27072__auto__ = ((((0) < args__27071__auto__.length))?(new cljs.core.IndexedSeq(args__27071__auto__.slice((0)),(0),null)):null);
return devtools.core.enable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__27072__auto__);
});

devtools.core.enable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_features){
return console.warn([cljs.core.str("devtools.core/enable-feature! was removed "),cljs.core.str("and has no effect in "),cljs.core.str(devtools.util.make_lib_info.call(null)),cljs.core.str(" "),cljs.core.str("=> use (devtools.core/install! features) to install custom features")].join(''));
});

devtools.core.enable_feature_BANG_.cljs$lang$maxFixedArity = (0);

devtools.core.enable_feature_BANG_.cljs$lang$applyTo = (function (seq41620){
return devtools.core.enable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41620));
});

devtools.core.disable_feature_BANG_ = (function devtools$core$disable_feature_BANG_(var_args){
var args__27071__auto__ = [];
var len__27064__auto___41625 = arguments.length;
var i__27065__auto___41626 = (0);
while(true){
if((i__27065__auto___41626 < len__27064__auto___41625)){
args__27071__auto__.push((arguments[i__27065__auto___41626]));

var G__41627 = (i__27065__auto___41626 + (1));
i__27065__auto___41626 = G__41627;
continue;
} else {
}
break;
}

var argseq__27072__auto__ = ((((0) < args__27071__auto__.length))?(new cljs.core.IndexedSeq(args__27071__auto__.slice((0)),(0),null)):null);
return devtools.core.disable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__27072__auto__);
});

devtools.core.disable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_features){
return console.warn([cljs.core.str("devtools.core/disable-feature! was removed "),cljs.core.str("and has no effect in "),cljs.core.str(devtools.util.make_lib_info.call(null)),cljs.core.str(" "),cljs.core.str("=> use (devtools.core/install! features) to install custom features")].join(''));
});

devtools.core.disable_feature_BANG_.cljs$lang$maxFixedArity = (0);

devtools.core.disable_feature_BANG_.cljs$lang$applyTo = (function (seq41624){
return devtools.core.disable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41624));
});

devtools.core.single_feature_available_QMARK_ = (function devtools$core$single_feature_available_QMARK_(_feature){
return console.warn([cljs.core.str("devtools.core/single-feature-available? was removed "),cljs.core.str("and has no effect in "),cljs.core.str(devtools.util.make_lib_info.call(null)),cljs.core.str(" "),cljs.core.str("=> use devtools.core/is-feature-available? instead")].join(''));
});
devtools.core.feature_available_QMARK_ = (function devtools$core$feature_available_QMARK_(var_args){
var args__27071__auto__ = [];
var len__27064__auto___41629 = arguments.length;
var i__27065__auto___41630 = (0);
while(true){
if((i__27065__auto___41630 < len__27064__auto___41629)){
args__27071__auto__.push((arguments[i__27065__auto___41630]));

var G__41631 = (i__27065__auto___41630 + (1));
i__27065__auto___41630 = G__41631;
continue;
} else {
}
break;
}

var argseq__27072__auto__ = ((((0) < args__27071__auto__.length))?(new cljs.core.IndexedSeq(args__27071__auto__.slice((0)),(0),null)):null);
return devtools.core.feature_available_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__27072__auto__);
});

devtools.core.feature_available_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (_features){
return console.warn([cljs.core.str("devtools.core/feature-available? was removed "),cljs.core.str("and has no effect in "),cljs.core.str(devtools.util.make_lib_info.call(null)),cljs.core.str(" "),cljs.core.str("=> use devtools.core/is-feature-available? instead")].join(''));
});

devtools.core.feature_available_QMARK_.cljs$lang$maxFixedArity = (0);

devtools.core.feature_available_QMARK_.cljs$lang$applyTo = (function (seq41628){
return devtools.core.feature_available_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41628));
});


//# sourceMappingURL=core.js.map?rel=1500616868936