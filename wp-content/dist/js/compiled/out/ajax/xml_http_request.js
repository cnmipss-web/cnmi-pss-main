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

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__41200,handler){
var map__41201 = p__41200;
var map__41201__$1 = ((((!((map__41201 == null)))?((((map__41201.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41201.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41201):map__41201);
var uri = cljs.core.get.call(null,map__41201__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__41201__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__41201__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__41201__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__41201__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__41201__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__41201__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__41201,map__41201__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__41199_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__41199_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__41201,map__41201__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___41213 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___41213)){
var response_type_41214 = temp__4657__auto___41213;
this$__$1.responseType = cljs.core.name.call(null,response_type_41214);
} else {
}

var seq__41203_41215 = cljs.core.seq.call(null,headers);
var chunk__41204_41216 = null;
var count__41205_41217 = (0);
var i__41206_41218 = (0);
while(true){
if((i__41206_41218 < count__41205_41217)){
var vec__41207_41219 = cljs.core._nth.call(null,chunk__41204_41216,i__41206_41218);
var k_41220 = cljs.core.nth.call(null,vec__41207_41219,(0),null);
var v_41221 = cljs.core.nth.call(null,vec__41207_41219,(1),null);
this$__$1.setRequestHeader(k_41220,v_41221);

var G__41222 = seq__41203_41215;
var G__41223 = chunk__41204_41216;
var G__41224 = count__41205_41217;
var G__41225 = (i__41206_41218 + (1));
seq__41203_41215 = G__41222;
chunk__41204_41216 = G__41223;
count__41205_41217 = G__41224;
i__41206_41218 = G__41225;
continue;
} else {
var temp__4657__auto___41226 = cljs.core.seq.call(null,seq__41203_41215);
if(temp__4657__auto___41226){
var seq__41203_41227__$1 = temp__4657__auto___41226;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41203_41227__$1)){
var c__37576__auto___41228 = cljs.core.chunk_first.call(null,seq__41203_41227__$1);
var G__41229 = cljs.core.chunk_rest.call(null,seq__41203_41227__$1);
var G__41230 = c__37576__auto___41228;
var G__41231 = cljs.core.count.call(null,c__37576__auto___41228);
var G__41232 = (0);
seq__41203_41215 = G__41229;
chunk__41204_41216 = G__41230;
count__41205_41217 = G__41231;
i__41206_41218 = G__41232;
continue;
} else {
var vec__41210_41233 = cljs.core.first.call(null,seq__41203_41227__$1);
var k_41234 = cljs.core.nth.call(null,vec__41210_41233,(0),null);
var v_41235 = cljs.core.nth.call(null,vec__41210_41233,(1),null);
this$__$1.setRequestHeader(k_41234,v_41235);

var G__41236 = cljs.core.next.call(null,seq__41203_41227__$1);
var G__41237 = null;
var G__41238 = (0);
var G__41239 = (0);
seq__41203_41215 = G__41236;
chunk__41204_41216 = G__41237;
count__41205_41217 = G__41238;
i__41206_41218 = G__41239;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__36756__auto__ = body;
if(cljs.core.truth_(or__36756__auto__)){
return or__36756__auto__;
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

//# sourceMappingURL=xml_http_request.js.map?rel=1503550038714