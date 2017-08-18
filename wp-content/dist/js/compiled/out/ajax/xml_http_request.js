// Compiled by ClojureScript 1.9.671 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.call(null,cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("@pupeno/xmlhttprequest").XMLHttpRequest;
goog.object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():window.XMLHttpRequest);
ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__41213,handler){
var map__41214 = p__41213;
var map__41214__$1 = ((((!((map__41214 == null)))?((((map__41214.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41214.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41214):map__41214);
var uri = cljs.core.get.call(null,map__41214__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__41214__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__41214__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__41214__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__41214__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__41214__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__41214__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__41214,map__41214__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__41212_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__41212_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__41214,map__41214__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___41226 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___41226)){
var response_type_41227 = temp__4657__auto___41226;
this$__$1.responseType = cljs.core.name.call(null,response_type_41227);
} else {
}

var seq__41216_41228 = cljs.core.seq.call(null,headers);
var chunk__41217_41229 = null;
var count__41218_41230 = (0);
var i__41219_41231 = (0);
while(true){
if((i__41219_41231 < count__41218_41230)){
var vec__41220_41232 = cljs.core._nth.call(null,chunk__41217_41229,i__41219_41231);
var k_41233 = cljs.core.nth.call(null,vec__41220_41232,(0),null);
var v_41234 = cljs.core.nth.call(null,vec__41220_41232,(1),null);
this$__$1.setRequestHeader(k_41233,v_41234);

var G__41235 = seq__41216_41228;
var G__41236 = chunk__41217_41229;
var G__41237 = count__41218_41230;
var G__41238 = (i__41219_41231 + (1));
seq__41216_41228 = G__41235;
chunk__41217_41229 = G__41236;
count__41218_41230 = G__41237;
i__41219_41231 = G__41238;
continue;
} else {
var temp__4657__auto___41239 = cljs.core.seq.call(null,seq__41216_41228);
if(temp__4657__auto___41239){
var seq__41216_41240__$1 = temp__4657__auto___41239;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41216_41240__$1)){
var c__37589__auto___41241 = cljs.core.chunk_first.call(null,seq__41216_41240__$1);
var G__41242 = cljs.core.chunk_rest.call(null,seq__41216_41240__$1);
var G__41243 = c__37589__auto___41241;
var G__41244 = cljs.core.count.call(null,c__37589__auto___41241);
var G__41245 = (0);
seq__41216_41228 = G__41242;
chunk__41217_41229 = G__41243;
count__41218_41230 = G__41244;
i__41219_41231 = G__41245;
continue;
} else {
var vec__41223_41246 = cljs.core.first.call(null,seq__41216_41240__$1);
var k_41247 = cljs.core.nth.call(null,vec__41223_41246,(0),null);
var v_41248 = cljs.core.nth.call(null,vec__41223_41246,(1),null);
this$__$1.setRequestHeader(k_41247,v_41248);

var G__41249 = cljs.core.next.call(null,seq__41216_41240__$1);
var G__41250 = null;
var G__41251 = (0);
var G__41252 = (0);
seq__41216_41228 = G__41249;
chunk__41217_41229 = G__41250;
count__41218_41230 = G__41251;
i__41219_41231 = G__41252;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__36769__auto__ = body;
if(cljs.core.truth_(or__36769__auto__)){
return or__36769__auto__;
} else {
return "";
}
})());

return this$__$1;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

//# sourceMappingURL=xml_http_request.js.map?rel=1502846508134