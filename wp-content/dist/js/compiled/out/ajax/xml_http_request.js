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

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__40973,handler){
var map__40974 = p__40973;
var map__40974__$1 = ((((!((map__40974 == null)))?((((map__40974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40974.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40974):map__40974);
var uri = cljs.core.get.call(null,map__40974__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__40974__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__40974__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__40974__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__40974__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__40974__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__40974__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__40974,map__40974__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__40972_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__40972_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__40974,map__40974__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___40986 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___40986)){
var response_type_40987 = temp__4657__auto___40986;
this$__$1.responseType = cljs.core.name.call(null,response_type_40987);
} else {
}

var seq__40976_40988 = cljs.core.seq.call(null,headers);
var chunk__40977_40989 = null;
var count__40978_40990 = (0);
var i__40979_40991 = (0);
while(true){
if((i__40979_40991 < count__40978_40990)){
var vec__40980_40992 = cljs.core._nth.call(null,chunk__40977_40989,i__40979_40991);
var k_40993 = cljs.core.nth.call(null,vec__40980_40992,(0),null);
var v_40994 = cljs.core.nth.call(null,vec__40980_40992,(1),null);
this$__$1.setRequestHeader(k_40993,v_40994);

var G__40995 = seq__40976_40988;
var G__40996 = chunk__40977_40989;
var G__40997 = count__40978_40990;
var G__40998 = (i__40979_40991 + (1));
seq__40976_40988 = G__40995;
chunk__40977_40989 = G__40996;
count__40978_40990 = G__40997;
i__40979_40991 = G__40998;
continue;
} else {
var temp__4657__auto___40999 = cljs.core.seq.call(null,seq__40976_40988);
if(temp__4657__auto___40999){
var seq__40976_41000__$1 = temp__4657__auto___40999;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40976_41000__$1)){
var c__37576__auto___41001 = cljs.core.chunk_first.call(null,seq__40976_41000__$1);
var G__41002 = cljs.core.chunk_rest.call(null,seq__40976_41000__$1);
var G__41003 = c__37576__auto___41001;
var G__41004 = cljs.core.count.call(null,c__37576__auto___41001);
var G__41005 = (0);
seq__40976_40988 = G__41002;
chunk__40977_40989 = G__41003;
count__40978_40990 = G__41004;
i__40979_40991 = G__41005;
continue;
} else {
var vec__40983_41006 = cljs.core.first.call(null,seq__40976_41000__$1);
var k_41007 = cljs.core.nth.call(null,vec__40983_41006,(0),null);
var v_41008 = cljs.core.nth.call(null,vec__40983_41006,(1),null);
this$__$1.setRequestHeader(k_41007,v_41008);

var G__41009 = cljs.core.next.call(null,seq__40976_41000__$1);
var G__41010 = null;
var G__41011 = (0);
var G__41012 = (0);
seq__40976_40988 = G__41009;
chunk__40977_40989 = G__41010;
count__40978_40990 = G__41011;
i__40979_40991 = G__41012;
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

//# sourceMappingURL=xml_http_request.js.map?rel=1503532139340