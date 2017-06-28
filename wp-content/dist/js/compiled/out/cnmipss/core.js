// Compiled by ClojureScript 1.9.229 {}
goog.provide('cnmipss.core');
goog.require('cljs.core');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"This text is printed from src/cnmipss/core.cljs. Go ahead and edit it and see reloading in action.");
if(typeof cnmipss.core.app_state !== 'undefined'){
} else {
cnmipss.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello world!"], null));
}
if(typeof cnmipss.core.jq !== 'undefined'){
} else {
cnmipss.core.jq = jQuery;
}
cnmipss.core.path = (function cnmipss$core$path(){
return location.pathname;
});
cnmipss.core.setup_reports = (function cnmipss$core$setup_reports(){
cljs.core.println.call(null,"Setting up reports...");

var active = cnmipss.core.jq.call(null,"li.active");
return active.click();
});
cnmipss.core.on_js_reload = (function cnmipss$core$on_js_reload(){
return null;
});
cnmipss.core.init_BANG_ = (function cnmipss$core$init_BANG_(){
return cljs.core.identity.call(null,(1));
});
cnmipss.core.init_BANG_.call(null);

//# sourceMappingURL=core.js.map?rel=1498623004177