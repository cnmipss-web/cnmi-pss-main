// Compiled by ClojureScript 1.9.671 {}
// klang.core logging config: {:logger-fn klang.core/add-log!, :form-meta #{}, :compact-ns? false, :meta-env? true, :trace? true, :default-emit? true, :whitelist "", :blacklist ""}
goog.provide('cnmipss.handlers.api');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('klang.core');
cnmipss.handlers.api.subscribed = (function cnmipss$handlers$api$subscribed(pns){
return (function (p__42961){
var vec__42962 = p__42961;
var ok = cljs.core.nth.call(null,vec__42962,(0),null);
var res = cljs.core.nth.call(null,vec__42962,(1),null);
var response = vec__42962;
klang.core.add_log_BANG_.call(null,"cnmipss.handlers.api","INFO",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("klang.core","meta-data","klang.core/meta-data",765484551),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol(null,"pns","pns",-1697663013,null),pns,new cljs.core.Symbol(null,"p__42961","p__42961",-1905356889,null),p__42961,new cljs.core.Symbol(null,"vec__42962","vec__42962",1307906122,null),vec__42962,new cljs.core.Symbol(null,"ok","ok",-1686650533,null),ok,new cljs.core.Symbol(null,"res","res",245523648,null),res,new cljs.core.Symbol(null,"response","response",572107335,null),response], null),new cljs.core.Keyword(null,"trace","trace",-1082747415),(function (){try{throw (new Error());
}catch (e42965){var e__42908__auto__ = e42965;
return e__42908__auto__;
}})()], null)], null),"Subscribed: ",ok,res,response);

var jq = jQuery;
if(cljs.core.truth_(ok)){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subscribed","subscribed",1012088257),pns], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subscription-error","subscription-error",417516592),null], null));
} else {
var message = clojure.string.capitalize.call(null,cljs.core.get_in.call(null,clojure.walk.keywordize_keys.call(null,res),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"message","message",-406056002)], null)));
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subscription-error","subscription-error",417516592),message], null));
}
});
});

//# sourceMappingURL=api.js.map?rel=1503550040617