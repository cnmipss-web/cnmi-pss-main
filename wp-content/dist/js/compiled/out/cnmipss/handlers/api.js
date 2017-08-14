// Compiled by ClojureScript 1.9.671 {}
goog.provide('cnmipss.handlers.api');
goog.require('cljs.core');
goog.require('re_frame.core');
cnmipss.handlers.api.subscribed = (function cnmipss$handlers$api$subscribed(pns){
return (function (p__41917){
var vec__41918 = p__41917;
var ok = cljs.core.nth.call(null,vec__41918,(0),null);
var n = cljs.core.nth.call(null,vec__41918,(1),null);
console.log("Results received...",ok,n);

if(cljs.core.truth_((function (){var and__36759__auto__ = ok;
if(cljs.core.truth_(and__36759__auto__)){
return cljs.core._EQ_.call(null,(1),n);
} else {
return and__36759__auto__;
}
})())){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subscribed","subscribed",1012088257),pns], null));
} else {
return null;
}
});
});

//# sourceMappingURL=api.js.map?rel=1502663000666