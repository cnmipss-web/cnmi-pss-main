// Compiled by ClojureScript 1.9.671 {}
goog.provide('cnmipss.handlers.events');
goog.require('cljs.core');
goog.require('cnmipss.validation');
goog.require('cnmipss.util');
goog.require('cnmipss.handlers.api');
goog.require('struct.core');
goog.require('ajax.core');
goog.require('re_frame.core');
cnmipss.handlers.events.set_search_text = (function cnmipss$handlers$events$set_search_text(event){
var search = document.getElementById("search-certified").value;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-search-text","set-search-text",650643537),search], null));
});
cnmipss.handlers.events.pns_focus_invalid = (function cnmipss$handlers$events$pns_focus_invalid(){
var map__42981 = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pns-subs-errors","pns-subs-errors",-1721584085)], null)));
var map__42981__$1 = ((((!((map__42981 == null)))?((((map__42981.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42981.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42981):map__42981);
var company = cljs.core.get.call(null,map__42981__$1,new cljs.core.Keyword(null,"company","company",-340475075));
var person = cljs.core.get.call(null,map__42981__$1,new cljs.core.Keyword(null,"person","person",-1059806875));
var email = cljs.core.get.call(null,map__42981__$1,new cljs.core.Keyword(null,"email","email",1415816706));
var tel = cljs.core.get.call(null,map__42981__$1,new cljs.core.Keyword(null,"tel","tel",224138159));
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
var vec__42983 = struct.core.validate.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"company","company",-340475075),company,new cljs.core.Keyword(null,"person","person",-1059806875),person,new cljs.core.Keyword(null,"email","email",1415816706),email,new cljs.core.Keyword(null,"tel","tel",224138159),tel], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"company","company",-340475075),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [struct.core.required,struct.core.string], null),new cljs.core.Keyword(null,"person","person",-1059806875),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [struct.core.required,struct.core.string], null),new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cnmipss.validation.email_QMARK_], null),new cljs.core.Keyword(null,"tel","tel",224138159),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cnmipss.validation.tel_QMARK_], null)], null));
var errors = cljs.core.nth.call(null,vec__42983,(0),null);
var values = cljs.core.nth.call(null,vec__42983,(1),null);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pns-subs-errors","pns-subs-errors",-1721584085),errors], null));

if(!((errors == null))){
return cnmipss.handlers.events.pns_focus_invalid.call(null);
} else {
return ajax.core.ajax_request.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"uri","uri",-774711847),"/webtools/api/subscribe-procurement",new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"params","params",710516235),cnmipss.util.edn__GT_json.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"company","company",-340475075),company,new cljs.core.Keyword(null,"person","person",-1059806875),person,new cljs.core.Keyword(null,"email","email",1415816706),email,new cljs.core.Keyword(null,"tel","tel",224138159),tel,new cljs.core.Keyword(null,"rfp_id","rfp_id",-2126089212),(cljs.core.truth_(new cljs.core.Keyword(null,"rfp_no","rfp_no",-1735597295).cljs$core$IFn$_invoke$arity$1(pns))?new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(pns):null),new cljs.core.Keyword(null,"ifb_id","ifb_id",1028058615),(cljs.core.truth_(new cljs.core.Keyword(null,"ifb_no","ifb_no",282350117).cljs$core$IFn$_invoke$arity$1(pns))?new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(pns):null)], null)),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),cnmipss.util.full_response_format.call(null,ajax.core.json_response_format),new cljs.core.Keyword(null,"handler","handler",-195596612),cnmipss.handlers.api.subscribed.call(null,pns)], null));
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

//# sourceMappingURL=events.js.map?rel=1502846510178