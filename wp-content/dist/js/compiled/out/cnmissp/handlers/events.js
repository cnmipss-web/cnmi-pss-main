// Compiled by ClojureScript 1.9.671 {}
goog.provide('cnmissp.handlers.events');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('re_frame.core');
cnmissp.handlers.events.set_search_text = (function cnmissp$handlers$events$set_search_text(event){
var search = document.getElementById("search-certified").value;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-search-text","set-search-text",650643537),search], null));
});
cnmissp.handlers.events.pns_subscription = (function cnmissp$handlers$events$pns_subscription(pns){
return (function (){
var jq = jQuery;
var company = jq.call(null,"#pns-subs-cn").val();
var person = jq.call(null,"#pns-subs-cp").val();
var email = jq.call(null,"#pns-subs-em").val();
var tel = jq.call(null,"#pns-subs-twl").val();
return cljs.core.println.call(null,company,person,email,tel);
});
});

//# sourceMappingURL=events.js.map?rel=1502334043939