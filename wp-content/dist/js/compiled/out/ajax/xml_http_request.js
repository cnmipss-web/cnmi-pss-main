// Compiled by ClojureScript 1.9.229 {}
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
ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = true;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__27504,handler){
var map__27505 = p__27504;
var map__27505__$1 = ((((!((map__27505 == null)))?((((map__27505.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27505.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27505):map__27505);
var uri = cljs.core.get.call(null,map__27505__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__27505__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__27505__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__27505__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__27505__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__27505__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__27505__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__27505,map__27505__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__27503_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__27503_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__27505,map__27505__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___27517 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___27517)){
var response_type_27518 = temp__4657__auto___27517;
this$__$1.responseType = cljs.core.name.call(null,response_type_27518);
} else {
}

var seq__27507_27519 = cljs.core.seq.call(null,headers);
var chunk__27508_27520 = null;
var count__27509_27521 = (0);
var i__27510_27522 = (0);
while(true){
if((i__27510_27522 < count__27509_27521)){
var vec__27511_27523 = cljs.core._nth.call(null,chunk__27508_27520,i__27510_27522);
var k_27524 = cljs.core.nth.call(null,vec__27511_27523,(0),null);
var v_27525 = cljs.core.nth.call(null,vec__27511_27523,(1),null);
this$__$1.setRequestHeader(k_27524,v_27525);

var G__27526 = seq__27507_27519;
var G__27527 = chunk__27508_27520;
var G__27528 = count__27509_27521;
var G__27529 = (i__27510_27522 + (1));
seq__27507_27519 = G__27526;
chunk__27508_27520 = G__27527;
count__27509_27521 = G__27528;
i__27510_27522 = G__27529;
continue;
} else {
var temp__4657__auto___27530 = cljs.core.seq.call(null,seq__27507_27519);
if(temp__4657__auto___27530){
var seq__27507_27531__$1 = temp__4657__auto___27530;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27507_27531__$1)){
var c__26800__auto___27532 = cljs.core.chunk_first.call(null,seq__27507_27531__$1);
var G__27533 = cljs.core.chunk_rest.call(null,seq__27507_27531__$1);
var G__27534 = c__26800__auto___27532;
var G__27535 = cljs.core.count.call(null,c__26800__auto___27532);
var G__27536 = (0);
seq__27507_27519 = G__27533;
chunk__27508_27520 = G__27534;
count__27509_27521 = G__27535;
i__27510_27522 = G__27536;
continue;
} else {
var vec__27514_27537 = cljs.core.first.call(null,seq__27507_27531__$1);
var k_27538 = cljs.core.nth.call(null,vec__27514_27537,(0),null);
var v_27539 = cljs.core.nth.call(null,vec__27514_27537,(1),null);
this$__$1.setRequestHeader(k_27538,v_27539);

var G__27540 = cljs.core.next.call(null,seq__27507_27531__$1);
var G__27541 = null;
var G__27542 = (0);
var G__27543 = (0);
seq__27507_27519 = G__27540;
chunk__27508_27520 = G__27541;
count__27509_27521 = G__27542;
i__27510_27522 = G__27543;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__25989__auto__ = body;
if(cljs.core.truth_(or__25989__auto__)){
return or__25989__auto__;
} else {
return "";
}
})());

return this$__$1;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = true;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = true;

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

//# sourceMappingURL=xml_http_request.js.map?rel=1499813242118