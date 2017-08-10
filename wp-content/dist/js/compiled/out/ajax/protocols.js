// Compiled by ClojureScript 1.9.671 {}
goog.provide('ajax.protocols');
goog.require('cljs.core');

/**
 * An abstraction for a javascript class that implements
 * Ajax calls.
 * @interface
 */
ajax.protocols.AjaxImpl = function(){};

/**
 * Makes an actual ajax request.  All parameters except opts
 *   are in JS format.  Should return an AjaxRequest.
 */
ajax.protocols._js_ajax_request = (function ajax$protocols$_js_ajax_request(this$,request,handler){
if((!((this$ == null))) && (!((this$.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 == null)))){
return this$.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3(this$,request,handler);
} else {
var x__37433__auto__ = (((this$ == null))?null:this$);
var m__37434__auto__ = (ajax.protocols._js_ajax_request[goog.typeOf(x__37433__auto__)]);
if(!((m__37434__auto__ == null))){
return m__37434__auto__.call(null,this$,request,handler);
} else {
var m__37434__auto____$1 = (ajax.protocols._js_ajax_request["_"]);
if(!((m__37434__auto____$1 == null))){
return m__37434__auto____$1.call(null,this$,request,handler);
} else {
throw cljs.core.missing_protocol.call(null,"AjaxImpl.-js-ajax-request",this$);
}
}
}
});


/**
 * An abstraction for a running ajax request.
 * @interface
 */
ajax.protocols.AjaxRequest = function(){};

/**
 * Aborts a running ajax request, if possible.
 */
ajax.protocols._abort = (function ajax$protocols$_abort(this$){
if((!((this$ == null))) && (!((this$.ajax$protocols$AjaxRequest$_abort$arity$1 == null)))){
return this$.ajax$protocols$AjaxRequest$_abort$arity$1(this$);
} else {
var x__37433__auto__ = (((this$ == null))?null:this$);
var m__37434__auto__ = (ajax.protocols._abort[goog.typeOf(x__37433__auto__)]);
if(!((m__37434__auto__ == null))){
return m__37434__auto__.call(null,this$);
} else {
var m__37434__auto____$1 = (ajax.protocols._abort["_"]);
if(!((m__37434__auto____$1 == null))){
return m__37434__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"AjaxRequest.-abort",this$);
}
}
}
});


/**
 * An abstraction for an ajax response.
 * @interface
 */
ajax.protocols.AjaxResponse = function(){};

/**
 * Returns the HTTP Status of the response as an integer.
 */
ajax.protocols._status = (function ajax$protocols$_status(this$){
if((!((this$ == null))) && (!((this$.ajax$protocols$AjaxResponse$_status$arity$1 == null)))){
return this$.ajax$protocols$AjaxResponse$_status$arity$1(this$);
} else {
var x__37433__auto__ = (((this$ == null))?null:this$);
var m__37434__auto__ = (ajax.protocols._status[goog.typeOf(x__37433__auto__)]);
if(!((m__37434__auto__ == null))){
return m__37434__auto__.call(null,this$);
} else {
var m__37434__auto____$1 = (ajax.protocols._status["_"]);
if(!((m__37434__auto____$1 == null))){
return m__37434__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"AjaxResponse.-status",this$);
}
}
}
});

/**
 * Returns the HTTP Status Text of the response as a string.
 */
ajax.protocols._status_text = (function ajax$protocols$_status_text(this$){
if((!((this$ == null))) && (!((this$.ajax$protocols$AjaxResponse$_status_text$arity$1 == null)))){
return this$.ajax$protocols$AjaxResponse$_status_text$arity$1(this$);
} else {
var x__37433__auto__ = (((this$ == null))?null:this$);
var m__37434__auto__ = (ajax.protocols._status_text[goog.typeOf(x__37433__auto__)]);
if(!((m__37434__auto__ == null))){
return m__37434__auto__.call(null,this$);
} else {
var m__37434__auto____$1 = (ajax.protocols._status_text["_"]);
if(!((m__37434__auto____$1 == null))){
return m__37434__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"AjaxResponse.-status-text",this$);
}
}
}
});

/**
 * Returns the response body as a string or as type specified in response-format such as a blob or arraybuffer.
 */
ajax.protocols._body = (function ajax$protocols$_body(this$){
if((!((this$ == null))) && (!((this$.ajax$protocols$AjaxResponse$_body$arity$1 == null)))){
return this$.ajax$protocols$AjaxResponse$_body$arity$1(this$);
} else {
var x__37433__auto__ = (((this$ == null))?null:this$);
var m__37434__auto__ = (ajax.protocols._body[goog.typeOf(x__37433__auto__)]);
if(!((m__37434__auto__ == null))){
return m__37434__auto__.call(null,this$);
} else {
var m__37434__auto____$1 = (ajax.protocols._body["_"]);
if(!((m__37434__auto____$1 == null))){
return m__37434__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"AjaxResponse.-body",this$);
}
}
}
});

/**
 * Gets the specified response header (specified by a string) as a string.
 */
ajax.protocols._get_response_header = (function ajax$protocols$_get_response_header(this$,header){
if((!((this$ == null))) && (!((this$.ajax$protocols$AjaxResponse$_get_response_header$arity$2 == null)))){
return this$.ajax$protocols$AjaxResponse$_get_response_header$arity$2(this$,header);
} else {
var x__37433__auto__ = (((this$ == null))?null:this$);
var m__37434__auto__ = (ajax.protocols._get_response_header[goog.typeOf(x__37433__auto__)]);
if(!((m__37434__auto__ == null))){
return m__37434__auto__.call(null,this$,header);
} else {
var m__37434__auto____$1 = (ajax.protocols._get_response_header["_"]);
if(!((m__37434__auto____$1 == null))){
return m__37434__auto____$1.call(null,this$,header);
} else {
throw cljs.core.missing_protocol.call(null,"AjaxResponse.-get-response-header",this$);
}
}
}
});

/**
 * Was the response aborted.
 */
ajax.protocols._was_aborted = (function ajax$protocols$_was_aborted(this$){
if((!((this$ == null))) && (!((this$.ajax$protocols$AjaxResponse$_was_aborted$arity$1 == null)))){
return this$.ajax$protocols$AjaxResponse$_was_aborted$arity$1(this$);
} else {
var x__37433__auto__ = (((this$ == null))?null:this$);
var m__37434__auto__ = (ajax.protocols._was_aborted[goog.typeOf(x__37433__auto__)]);
if(!((m__37434__auto__ == null))){
return m__37434__auto__.call(null,this$);
} else {
var m__37434__auto____$1 = (ajax.protocols._was_aborted["_"]);
if(!((m__37434__auto____$1 == null))){
return m__37434__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"AjaxResponse.-was-aborted",this$);
}
}
}
});


/**
 * An abstraction for something that processes requests and responses.
 * @interface
 */
ajax.protocols.Interceptor = function(){};

/**
 * Transforms the opts
 */
ajax.protocols._process_request = (function ajax$protocols$_process_request(this$,request){
if((!((this$ == null))) && (!((this$.ajax$protocols$Interceptor$_process_request$arity$2 == null)))){
return this$.ajax$protocols$Interceptor$_process_request$arity$2(this$,request);
} else {
var x__37433__auto__ = (((this$ == null))?null:this$);
var m__37434__auto__ = (ajax.protocols._process_request[goog.typeOf(x__37433__auto__)]);
if(!((m__37434__auto__ == null))){
return m__37434__auto__.call(null,this$,request);
} else {
var m__37434__auto____$1 = (ajax.protocols._process_request["_"]);
if(!((m__37434__auto____$1 == null))){
return m__37434__auto____$1.call(null,this$,request);
} else {
throw cljs.core.missing_protocol.call(null,"Interceptor.-process-request",this$);
}
}
}
});

/**
 * Transforms the raw response (an implementation of AjaxResponse)
 */
ajax.protocols._process_response = (function ajax$protocols$_process_response(this$,response){
if((!((this$ == null))) && (!((this$.ajax$protocols$Interceptor$_process_response$arity$2 == null)))){
return this$.ajax$protocols$Interceptor$_process_response$arity$2(this$,response);
} else {
var x__37433__auto__ = (((this$ == null))?null:this$);
var m__37434__auto__ = (ajax.protocols._process_response[goog.typeOf(x__37433__auto__)]);
if(!((m__37434__auto__ == null))){
return m__37434__auto__.call(null,this$,response);
} else {
var m__37434__auto____$1 = (ajax.protocols._process_response["_"]);
if(!((m__37434__auto____$1 == null))){
return m__37434__auto____$1.call(null,this$,response);
} else {
throw cljs.core.missing_protocol.call(null,"Interceptor.-process-response",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.AjaxResponse}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.protocols.Response = (function (status,body,status_text,headers,was_aborted,__meta,__extmap,__hash){
this.status = status;
this.body = body;
this.status_text = status_text;
this.headers = headers;
this.was_aborted = was_aborted;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.protocols.Response.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__37390__auto__,k__37391__auto__){
var self__ = this;
var this__37390__auto____$1 = this;
return this__37390__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__37391__auto__,null);
});

ajax.protocols.Response.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__37392__auto__,k40321,else__37393__auto__){
var self__ = this;
var this__37392__auto____$1 = this;
var G__40325 = k40321;
var G__40325__$1 = (((G__40325 instanceof cljs.core.Keyword))?G__40325.fqn:null);
switch (G__40325__$1) {
case "status":
return self__.status;

break;
case "body":
return self__.body;

break;
case "status-text":
return self__.status_text;

break;
case "headers":
return self__.headers;

break;
case "was-aborted":
return self__.was_aborted;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k40321,else__37393__auto__);

}
});

ajax.protocols.Response.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__37404__auto__,writer__37405__auto__,opts__37406__auto__){
var self__ = this;
var this__37404__auto____$1 = this;
var pr_pair__37407__auto__ = ((function (this__37404__auto____$1){
return (function (keyval__37408__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__37405__auto__,cljs.core.pr_writer,""," ","",opts__37406__auto__,keyval__37408__auto__);
});})(this__37404__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__37405__auto__,pr_pair__37407__auto__,"#ajax.protocols.Response{",", ","}",opts__37406__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"status","status",-1997798413),self__.status],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"body","body",-2049205669),self__.body],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"status-text","status-text",-1834235478),self__.status_text],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"headers","headers",-835030129),self__.headers],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"was-aborted","was-aborted",-2120084828),self__.was_aborted],null))], null),self__.__extmap));
});

ajax.protocols.Response.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__40320){
var self__ = this;
var G__40320__$1 = this;
return (new cljs.core.RecordIter((0),G__40320__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"status-text","status-text",-1834235478),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"was-aborted","was-aborted",-2120084828)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.protocols.Response.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__37388__auto__){
var self__ = this;
var this__37388__auto____$1 = this;
return self__.__meta;
});

ajax.protocols.Response.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__37385__auto__){
var self__ = this;
var this__37385__auto____$1 = this;
return (new ajax.protocols.Response(self__.status,self__.body,self__.status_text,self__.headers,self__.was_aborted,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.protocols.Response.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__37394__auto__){
var self__ = this;
var this__37394__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

ajax.protocols.Response.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__37386__auto__){
var self__ = this;
var this__37386__auto____$1 = this;
var h__37204__auto__ = self__.__hash;
if(!((h__37204__auto__ == null))){
return h__37204__auto__;
} else {
var h__37204__auto____$1 = ((function (h__37204__auto__,this__37386__auto____$1){
return (function (coll__37387__auto__){
return (-473222333 ^ cljs.core.hash_unordered_coll.call(null,coll__37387__auto__));
});})(h__37204__auto__,this__37386__auto____$1))
.call(null,this__37386__auto____$1);
self__.__hash = h__37204__auto____$1;

return h__37204__auto____$1;
}
});

ajax.protocols.Response.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this40322,other40323){
var self__ = this;
var this40322__$1 = this;
return (!((other40323 == null))) && ((this40322__$1.constructor === other40323.constructor)) && (cljs.core._EQ_.call(null,this40322__$1.status,other40323.status)) && (cljs.core._EQ_.call(null,this40322__$1.body,other40323.body)) && (cljs.core._EQ_.call(null,this40322__$1.status_text,other40323.status_text)) && (cljs.core._EQ_.call(null,this40322__$1.headers,other40323.headers)) && (cljs.core._EQ_.call(null,this40322__$1.was_aborted,other40323.was_aborted)) && (cljs.core._EQ_.call(null,this40322__$1.__extmap,other40323.__extmap));
});

ajax.protocols.Response.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

ajax.protocols.Response.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(this$__$1);
});

ajax.protocols.Response.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(this$__$1);
});

ajax.protocols.Response.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"status-text","status-text",-1834235478).cljs$core$IFn$_invoke$arity$1(this$__$1);
});

ajax.protocols.Response.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var self__ = this;
var this$__$1 = this;
return cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(this$__$1),header);
});

ajax.protocols.Response.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"was-aborted","was-aborted",-2120084828).cljs$core$IFn$_invoke$arity$1(this$__$1);
});

ajax.protocols.Response.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__37399__auto__,k__37400__auto__){
var self__ = this;
var this__37399__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"was-aborted","was-aborted",-2120084828),null,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),null,new cljs.core.Keyword(null,"headers","headers",-835030129),null,new cljs.core.Keyword(null,"status","status",-1997798413),null,new cljs.core.Keyword(null,"body","body",-2049205669),null], null), null),k__37400__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__37399__auto____$1),self__.__meta),k__37400__auto__);
} else {
return (new ajax.protocols.Response(self__.status,self__.body,self__.status_text,self__.headers,self__.was_aborted,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__37400__auto__)),null));
}
});

ajax.protocols.Response.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__37397__auto__,k__37398__auto__,G__40320){
var self__ = this;
var this__37397__auto____$1 = this;
var pred__40326 = cljs.core.keyword_identical_QMARK_;
var expr__40327 = k__37398__auto__;
if(cljs.core.truth_(pred__40326.call(null,new cljs.core.Keyword(null,"status","status",-1997798413),expr__40327))){
return (new ajax.protocols.Response(G__40320,self__.body,self__.status_text,self__.headers,self__.was_aborted,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__40326.call(null,new cljs.core.Keyword(null,"body","body",-2049205669),expr__40327))){
return (new ajax.protocols.Response(self__.status,G__40320,self__.status_text,self__.headers,self__.was_aborted,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__40326.call(null,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),expr__40327))){
return (new ajax.protocols.Response(self__.status,self__.body,G__40320,self__.headers,self__.was_aborted,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__40326.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129),expr__40327))){
return (new ajax.protocols.Response(self__.status,self__.body,self__.status_text,G__40320,self__.was_aborted,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__40326.call(null,new cljs.core.Keyword(null,"was-aborted","was-aborted",-2120084828),expr__40327))){
return (new ajax.protocols.Response(self__.status,self__.body,self__.status_text,self__.headers,G__40320,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.protocols.Response(self__.status,self__.body,self__.status_text,self__.headers,self__.was_aborted,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__37398__auto__,G__40320),null));
}
}
}
}
}
});

ajax.protocols.Response.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__37402__auto__){
var self__ = this;
var this__37402__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"status","status",-1997798413),self__.status],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"body","body",-2049205669),self__.body],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"status-text","status-text",-1834235478),self__.status_text],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"headers","headers",-835030129),self__.headers],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"was-aborted","was-aborted",-2120084828),self__.was_aborted],null))], null),self__.__extmap));
});

ajax.protocols.Response.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__37389__auto__,G__40320){
var self__ = this;
var this__37389__auto____$1 = this;
return (new ajax.protocols.Response(self__.status,self__.body,self__.status_text,self__.headers,self__.was_aborted,G__40320,self__.__extmap,self__.__hash));
});

ajax.protocols.Response.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__37395__auto__,entry__37396__auto__){
var self__ = this;
var this__37395__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__37396__auto__)){
return this__37395__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__37396__auto__,(0)),cljs.core._nth.call(null,entry__37396__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__37395__auto____$1,entry__37396__auto__);
}
});

ajax.protocols.Response.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"status","status",-357266886,null),new cljs.core.Symbol(null,"body","body",-408674142,null),new cljs.core.Symbol(null,"status-text","status-text",-193703951,null),new cljs.core.Symbol(null,"headers","headers",805501398,null),new cljs.core.Symbol(null,"was-aborted","was-aborted",-479553301,null)], null);
});

ajax.protocols.Response.cljs$lang$type = true;

ajax.protocols.Response.cljs$lang$ctorPrSeq = (function (this__37426__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.protocols/Response");
});

ajax.protocols.Response.cljs$lang$ctorPrWriter = (function (this__37426__auto__,writer__37427__auto__){
return cljs.core._write.call(null,writer__37427__auto__,"ajax.protocols/Response");
});

ajax.protocols.__GT_Response = (function ajax$protocols$__GT_Response(status,body,status_text,headers,was_aborted){
return (new ajax.protocols.Response(status,body,status_text,headers,was_aborted,null,null,null));
});

ajax.protocols.map__GT_Response = (function ajax$protocols$map__GT_Response(G__40324){
return (new ajax.protocols.Response(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(G__40324),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(G__40324),new cljs.core.Keyword(null,"status-text","status-text",-1834235478).cljs$core$IFn$_invoke$arity$1(G__40324),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(G__40324),new cljs.core.Keyword(null,"was-aborted","was-aborted",-2120084828).cljs$core$IFn$_invoke$arity$1(G__40324),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__40324,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"status-text","status-text",-1834235478),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"was-aborted","was-aborted",-2120084828))),null));
});


//# sourceMappingURL=protocols.js.map?rel=1502332936214