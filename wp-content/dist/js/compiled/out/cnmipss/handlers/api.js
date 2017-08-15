// Compiled by ClojureScript 1.9.671 {}
goog.provide('cnmipss.handlers.api');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('klang.core');
cnmipss.handlers.api.subscribed = (function cnmipss$handlers$api$subscribed(pns){
return (function (p__44803){
var vec__44804 = p__44803;
var ok = cljs.core.nth.call(null,vec__44804,(0),null);
var res = cljs.core.nth.call(null,vec__44804,(1),null);
var jq = jQuery;
klang.core.add_log_BANG_.call(null,"cnmipss.handlers.api","INFO",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("klang.core","meta-data","klang.core/meta-data",765484551),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol(null,"pns","pns",-1697663013,null),pns,new cljs.core.Symbol(null,"p__44803","p__44803",413055950,null),p__44803,new cljs.core.Symbol(null,"vec__44804","vec__44804",2108873744,null),vec__44804,new cljs.core.Symbol(null,"ok","ok",-1686650533,null),ok,new cljs.core.Symbol(null,"res","res",245523648,null),res,new cljs.core.Symbol(null,"jq","jq",874219947,null),jq], null),new cljs.core.Keyword(null,"trace","trace",-1082747415),(function (){try{throw (new Error());
}catch (e44807){var e__38742__auto__ = e44807;
return e__38742__auto__;
}})()], null)], null),"Subscribed: ",ok,res);

if(cljs.core.truth_(ok)){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subscribed","subscribed",1012088257),pns], null));
} else {
var message = clojure.string.capitalize.call(null,cljs.core.get_in.call(null,clojure.walk.keywordize_keys.call(null,res),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"message","message",-406056002)], null)));
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subscription-error","subscription-error",417516592),message], null));
}
});
});

//# sourceMappingURL=api.js.map?rel=1502766047002