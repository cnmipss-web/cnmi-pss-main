// Compiled by ClojureScript 1.9.671 {}
goog.provide('cnmipss.handlers.events');
goog.require('cljs.core');
goog.require('cnmipss.validation');
goog.require('cnmipss.util');
goog.require('struct.core');
goog.require('ajax.core');
goog.require('re_frame.core');
cnmipss.handlers.events.set_search_text = (function cnmipss$handlers$events$set_search_text(event){
var search = document.getElementById("search-certified").value;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-search-text","set-search-text",650643537),search], null));
});
cnmipss.handlers.events.pns_focus_invalid = (function cnmipss$handlers$events$pns_focus_invalid(){
var map__44507 = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pns-subs-errors","pns-subs-errors",-1721584085)], null)));
var map__44507__$1 = ((((!((map__44507 == null)))?((((map__44507.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44507.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44507):map__44507);
var company = cljs.core.get.call(null,map__44507__$1,new cljs.core.Keyword(null,"company","company",-340475075));
var person = cljs.core.get.call(null,map__44507__$1,new cljs.core.Keyword(null,"person","person",-1059806875));
var email = cljs.core.get.call(null,map__44507__$1,new cljs.core.Keyword(null,"email","email",1415816706));
var tel = cljs.core.get.call(null,map__44507__$1,new cljs.core.Keyword(null,"tel","tel",224138159));
if(!((company == null))){
return document.getElementById("pns-subs-cn").focus();
} else {
if(!((person == null))){
return document.getElementById("pns-subs-cp").focus();
} else {
if(!((email == null))){
return document.getElementById("pns-subs-em").focus();
} else {
if(!((tel == null))){
return document.getElementById("pns-subs-tel").focus();
} else {
return null;
}
}
}
}
});
cnmipss.handlers.events.pns_subscription = (function cnmipss$handlers$events$pns_subscription(pns){
return (function (e){
e.preventDefault();

var jq = jQuery;
var company = jq.call(null,"#pns-subs-cn").val();
var person = jq.call(null,"#pns-subs-cp").val();
var email = jq.call(null,"#pns-subs-em").val();
var tel = jq.call(null,"#pns-subs-tel").val();
var vec__44509 = struct.core.validate.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"company","company",-340475075),company,new cljs.core.Keyword(null,"person","person",-1059806875),person,new cljs.core.Keyword(null,"email","email",1415816706),email,new cljs.core.Keyword(null,"tel","tel",224138159),tel], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"company","company",-340475075),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [struct.core.required,struct.core.string], null),new cljs.core.Keyword(null,"person","person",-1059806875),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [struct.core.required,struct.core.string], null),new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cnmipss.validation.email_QMARK_], null),new cljs.core.Keyword(null,"tel","tel",224138159),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cnmipss.validation.tel_QMARK_], null)], null));
var map__44512 = cljs.core.nth.call(null,vec__44509,(0),null);
var map__44512__$1 = ((((!((map__44512 == null)))?((((map__44512.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44512.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44512):map__44512);
var errors = map__44512__$1;
var company__$1 = cljs.core.get.call(null,map__44512__$1,new cljs.core.Keyword(null,"company","company",-340475075));
var person__$1 = cljs.core.get.call(null,map__44512__$1,new cljs.core.Keyword(null,"person","person",-1059806875));
var email__$1 = cljs.core.get.call(null,map__44512__$1,new cljs.core.Keyword(null,"email","email",1415816706));
var tel__$1 = cljs.core.get.call(null,map__44512__$1,new cljs.core.Keyword(null,"tel","tel",224138159));
var values = cljs.core.nth.call(null,vec__44509,(1),null);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pns-subs-errors","pns-subs-errors",-1721584085),errors], null));

if(!((errors == null))){
return cnmipss.handlers.events.pns_focus_invalid.call(null);
} else {
return null;
}
});
});
cnmipss.handlers.events.download_addenda = (function cnmipss$handlers$events$download_addenda(items){
return (function (){
var jq = jQuery;
var item = cljs.core.first.call(null,items);
var r = cljs.core.next.call(null,items);
var a = jq.call(null,document.createElement("a")).attr("href",new cljs.core.Keyword(null,"file_link","file_link",-256542498).cljs$core$IFn$_invoke$arity$1(item)).attr("target","_blank");
jq.call(null,"body").append(a);

(a[(0)]).click();

a.remove();

if(!(cljs.core.empty_QMARK_.call(null,r))){
return setTimeout(cnmipss.handlers.events.download_addenda.call(null,r),(500));
} else {
return null;
}
});
});

//# sourceMappingURL=events.js.map?rel=1502404036752