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

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__40333,handler){
var map__40334 = p__40333;
var map__40334__$1 = ((((!((map__40334 == null)))?((((map__40334.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40334.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40334):map__40334);
var uri = cljs.core.get.call(null,map__40334__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__40334__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__40334__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__40334__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__40334__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__40334__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__40334__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__40334,map__40334__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__40332_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__40332_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__40334,map__40334__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___40346 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___40346)){
var response_type_40347 = temp__4657__auto___40346;
this$__$1.responseType = cljs.core.name.call(null,response_type_40347);
} else {
}

var seq__40336_40348 = cljs.core.seq.call(null,headers);
var chunk__40337_40349 = null;
var count__40338_40350 = (0);
var i__40339_40351 = (0);
while(true){
if((i__40339_40351 < count__40338_40350)){
var vec__40340_40352 = cljs.core._nth.call(null,chunk__40337_40349,i__40339_40351);
var k_40353 = cljs.core.nth.call(null,vec__40340_40352,(0),null);
var v_40354 = cljs.core.nth.call(null,vec__40340_40352,(1),null);
this$__$1.setRequestHeader(k_40353,v_40354);

var G__40355 = seq__40336_40348;
var G__40356 = chunk__40337_40349;
var G__40357 = count__40338_40350;
var G__40358 = (i__40339_40351 + (1));
seq__40336_40348 = G__40355;
chunk__40337_40349 = G__40356;
count__40338_40350 = G__40357;
i__40339_40351 = G__40358;
continue;
} else {
var temp__4657__auto___40359 = cljs.core.seq.call(null,seq__40336_40348);
if(temp__4657__auto___40359){
var seq__40336_40360__$1 = temp__4657__auto___40359;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40336_40360__$1)){
var c__37584__auto___40361 = cljs.core.chunk_first.call(null,seq__40336_40360__$1);
var G__40362 = cljs.core.chunk_rest.call(null,seq__40336_40360__$1);
var G__40363 = c__37584__auto___40361;
var G__40364 = cljs.core.count.call(null,c__37584__auto___40361);
var G__40365 = (0);
seq__40336_40348 = G__40362;
chunk__40337_40349 = G__40363;
count__40338_40350 = G__40364;
i__40339_40351 = G__40365;
continue;
} else {
var vec__40343_40366 = cljs.core.first.call(null,seq__40336_40360__$1);
var k_40367 = cljs.core.nth.call(null,vec__40343_40366,(0),null);
var v_40368 = cljs.core.nth.call(null,vec__40343_40366,(1),null);
this$__$1.setRequestHeader(k_40367,v_40368);

var G__40369 = cljs.core.next.call(null,seq__40336_40360__$1);
var G__40370 = null;
var G__40371 = (0);
var G__40372 = (0);
seq__40336_40348 = G__40369;
chunk__40337_40349 = G__40370;
count__40338_40350 = G__40371;
i__40339_40351 = G__40372;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__36764__auto__ = body;
if(cljs.core.truth_(or__36764__auto__)){
return or__36764__auto__;
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

//# sourceMappingURL=xml_http_request.js.map?rel=1502332936247