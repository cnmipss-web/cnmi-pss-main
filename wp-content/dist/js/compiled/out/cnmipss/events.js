// Compiled by ClojureScript 1.9.671 {}
goog.provide('cnmipss.events');
goog.require('cljs.core');
goog.require('re_frame.core');
cnmipss.events.set_search_text = (function cnmipss$events$set_search_text(event){
var search = document.getElementById("search-certified").value;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-search-text","set-search-text",650643537),search], null));
});

//# sourceMappingURL=events.js.map?rel=1501568769294