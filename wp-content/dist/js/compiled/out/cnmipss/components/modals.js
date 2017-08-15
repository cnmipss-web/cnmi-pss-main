// Compiled by ClojureScript 1.9.671 {}
goog.provide('cnmipss.components.modals');
goog.require('cljs.core');
goog.require('cnmipss.components.forms');
goog.require('re_frame.core');
goog.require('klang.core');
cnmipss.components.modals.procurement_type = (function cnmipss$components$modals$procurement_type(item){
if(cljs.core.truth_(new cljs.core.Keyword(null,"rfp_no","rfp_no",-1735597295).cljs$core$IFn$_invoke$arity$1(item))){
return "RFP";
} else {
return "IFB";
}
});
cnmipss.components.modals.pns_modal = (function cnmipss$components$modals$pns_modal(){
var pns = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pns-modal","pns-modal",-205148737)], null)));
klang.core.add_log_BANG_.call(null,"cnmipss.components.modals","INFO",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("klang.core","meta-data","klang.core/meta-data",765484551),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"pns","pns",-1697663013,null),pns], null),new cljs.core.Keyword(null,"trace","trace",-1082747415),(function (){try{throw (new Error());
}catch (e44828){var e__38742__auto__ = e44828;
return e__38742__auto__;
}})()], null)], null),"Building pns-modal",pns,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subscribed","subscribed",1012088257)], null))));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#pns-modal.modal.fade","div#pns-modal.modal.fade",-1047664576),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"role","role",-736691072),"dialog",new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),"-1",new cljs.core.Keyword(null,"aria-labelledby","aria-labelledby",1817118667),"pns-modal-label",new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-dialog","div.modal-dialog",-237012986),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"role","role",-736691072),"document"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-content","div.modal-content",-83470844),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-header","div.modal-header",-799180845),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.close","button.close",-1545560743),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-dismiss","data-dismiss",-2004576016),"modal",new cljs.core.Keyword(null,"aria-label","aria-label",455891514),"Close"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true"], null),"\u00D7"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2#pns-modal-label.modal-title","h2#pns-modal-label.modal-title",-1093511577),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Requesting Information on "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnmipss.components.modals.procurement_type.call(null,pns)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__36757__auto__ = new cljs.core.Keyword(null,"rfp_no","rfp_no",-1735597295).cljs$core$IFn$_invoke$arity$1(pns);
if(cljs.core.truth_(or__36757__auto__)){
return or__36757__auto__;
} else {
return new cljs.core.Keyword(null,"ifb_no","ifb_no",282350117).cljs$core$IFn$_invoke$arity$1(pns);
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(pns))].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-body","div.modal-body",-2141892968),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Please enter your contact information below and click 'Subscribe' to request be notified of any addendums or additional information relevant to this "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnmipss.components.modals.procurement_type.call(null,pns)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".  If you have any questions please contact PSS Procurement & Supply via any of the methods listed at the bottom of this page.")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cnmipss.components.forms.pns_subscribe,pns], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-footer","div.modal-footer",1309572241),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-xs-6","div.col-xs-6",1179108318),((!(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,((function (pns){
return (function (p1__44827_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(pns),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__44827_SHARP_));
});})(pns))
,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subscribed","subscribed",1012088257)], null)))))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p#subscription-success","p#subscription-success",1811725622),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-live","aria-live",-467182502),"polite"], null),"You have successfully subscribed to this announcement."], null):null),(function (){var temp__4655__auto__ = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subscription-error","subscription-error",417516592)], null)));
if(cljs.core.truth_(temp__4655__auto__)){
var message = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p#subscription-error","p#subscription-error",1864954675),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"role","role",-736691072),"alert"], null),"Error: ",message], null);
} else {
return null;
}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-xs-6","div.col-xs-6",1179108318),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default","button.btn.btn-default",-991846011),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-dismiss","data-dismiss",-2004576016),"modal"], null),"Exit"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-primary","button.btn.btn-primary",510358192),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"form","form",-1624062471),"pns-subscribe"], null),"Subscribe"], null)], null)], null)], null)], null)], null);
});

//# sourceMappingURL=modals.js.map?rel=1502766047067