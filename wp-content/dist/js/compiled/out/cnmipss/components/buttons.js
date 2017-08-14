// Compiled by ClojureScript 1.9.671 {}
goog.provide('cnmipss.components.buttons');
goog.require('cljs.core');
goog.require('cnmipss.handlers.events');
goog.require('re_frame.core');
cnmipss.components.buttons.link_file = (function cnmipss$components$buttons$link_file(href,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-info.table-link","a.btn.btn-info.table-link",-572117832),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),href,new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.type.call(null,""),cljs.core.type.call(null,text)))?"full-width":null)], null),text], null);
});
cnmipss.components.buttons.get_addendums = (function cnmipss$components$buttons$get_addendums(p__42726){
var map__42727 = p__42726;
var map__42727__$1 = ((((!((map__42727 == null)))?((((map__42727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42727.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42727):map__42727);
var pns = map__42727__$1;
var id = cljs.core.get.call(null,map__42727__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var addenda = cljs.core.filter.call(null,((function (map__42727,map__42727__$1,pns,id){
return (function (p1__42725_SHARP_){
return (cljs.core._EQ_.call(null,id,new cljs.core.Keyword(null,"rfp_id","rfp_id",-2126089212).cljs$core$IFn$_invoke$arity$1(p1__42725_SHARP_))) || (cljs.core._EQ_.call(null,id,new cljs.core.Keyword(null,"ifb_id","ifb_id",1028058615).cljs$core$IFn$_invoke$arity$1(p1__42725_SHARP_)));
});})(map__42727,map__42727__$1,pns,id))
,new cljs.core.Keyword(null,"addenda","addenda",1190896711).cljs$core$IFn$_invoke$arity$1(clojure.walk.keywordize_keys.call(null,cljs.core.js__GT_clj.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036)], null)))))));
if(cljs.core.truth_(cljs.core.comp.call(null,cljs.core.not,cljs.core.empty_QMARK_).call(null,addenda))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-warning.table-link.full-width","button.btn.btn-warning.table-link.full-width",-117589665),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),cnmipss.handlers.events.download_addenda.call(null,addenda)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,addenda)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" Addendums")].join('')], null);
} else {
return null;
}
});

//# sourceMappingURL=buttons.js.map?rel=1502666782448