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

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__41201,handler){
var map__41202 = p__41201;
var map__41202__$1 = ((((!((map__41202 == null)))?((((map__41202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41202.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41202):map__41202);
var uri = cljs.core.get.call(null,map__41202__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__41202__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__41202__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__41202__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__41202__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__41202__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__41202__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__41202,map__41202__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__41200_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__41200_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__41202,map__41202__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___41214 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___41214)){
var response_type_41215 = temp__4657__auto___41214;
this$__$1.responseType = cljs.core.name.call(null,response_type_41215);
} else {
}

var seq__41204_41216 = cljs.core.seq.call(null,headers);
var chunk__41205_41217 = null;
var count__41206_41218 = (0);
var i__41207_41219 = (0);
while(true){
if((i__41207_41219 < count__41206_41218)){
var vec__41208_41220 = cljs.core._nth.call(null,chunk__41205_41217,i__41207_41219);
var k_41221 = cljs.core.nth.call(null,vec__41208_41220,(0),null);
var v_41222 = cljs.core.nth.call(null,vec__41208_41220,(1),null);
this$__$1.setRequestHeader(k_41221,v_41222);

var G__41223 = seq__41204_41216;
var G__41224 = chunk__41205_41217;
var G__41225 = count__41206_41218;
var G__41226 = (i__41207_41219 + (1));
seq__41204_41216 = G__41223;
chunk__41205_41217 = G__41224;
count__41206_41218 = G__41225;
i__41207_41219 = G__41226;
continue;
} else {
var temp__4657__auto___41227 = cljs.core.seq.call(null,seq__41204_41216);
if(temp__4657__auto___41227){
var seq__41204_41228__$1 = temp__4657__auto___41227;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41204_41228__$1)){
var c__37577__auto___41229 = cljs.core.chunk_first.call(null,seq__41204_41228__$1);
var G__41230 = cljs.core.chunk_rest.call(null,seq__41204_41228__$1);
var G__41231 = c__37577__auto___41229;
var G__41232 = cljs.core.count.call(null,c__37577__auto___41229);
var G__41233 = (0);
seq__41204_41216 = G__41230;
chunk__41205_41217 = G__41231;
count__41206_41218 = G__41232;
i__41207_41219 = G__41233;
continue;
} else {
var vec__41211_41234 = cljs.core.first.call(null,seq__41204_41228__$1);
var k_41235 = cljs.core.nth.call(null,vec__41211_41234,(0),null);
var v_41236 = cljs.core.nth.call(null,vec__41211_41234,(1),null);
this$__$1.setRequestHeader(k_41235,v_41236);

var G__41237 = cljs.core.next.call(null,seq__41204_41228__$1);
var G__41238 = null;
var G__41239 = (0);
var G__41240 = (0);
seq__41204_41216 = G__41237;
chunk__41205_41217 = G__41238;
count__41206_41218 = G__41239;
i__41207_41219 = G__41240;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__36757__auto__ = body;
if(cljs.core.truth_(or__36757__auto__)){
return or__36757__auto__;
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

//# sourceMappingURL=xml_http_request.js.map?rel=1503441674251