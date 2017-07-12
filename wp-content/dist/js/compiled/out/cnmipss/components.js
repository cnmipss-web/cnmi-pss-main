// Compiled by ClojureScript 1.9.229 {}
goog.provide('cnmipss.components');
goog.require('cljs.core');
cnmipss.components.jq = jQuery;
cnmipss.components.set_search_text = (function cnmipss$components$set_search_text(event){
var search = document.getElementById("search-certified").value;
return cljs.core.swap_BANG_.call(null,cnmipss.components.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search-text","search-text",1559451259)], null),search);
});
cnmipss.components.search_bar = (function cnmipss$components$search_bar(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#search-box","div#search-box",-723907324),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"role","role",-736691072),"search"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.sr-only","label.sr-only",-964684571),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"search-certified"], null),"Search Certified Personnel"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"search",new cljs.core.Keyword(null,"id","id",-1388402092),"search-certified",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Search Certified Personnel",new cljs.core.Keyword(null,"on-change","on-change",-732046149),cnmipss.components.set_search_text,new cljs.core.Keyword(null,"ref","ref",1289896967),"search-certified"], null)], null)], null)], null)], null);
});
cnmipss.components.display_row = (function cnmipss$components$display_row(row,search_text){
var searches = clojure.string.split.call(null,search_text,/ /);
var map__29199 = row;
var map__29199__$1 = ((((!((map__29199 == null)))?((((map__29199.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29199.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29199):map__29199);
var last_name = cljs.core.get.call(null,map__29199__$1,new cljs.core.Keyword(null,"last_name","last_name",44937527));
var first_name = cljs.core.get.call(null,map__29199__$1,new cljs.core.Keyword(null,"first_name","first_name",-1744629757));
var cert_no = cljs.core.get.call(null,map__29199__$1,new cljs.core.Keyword(null,"cert_no","cert_no",1804182717));
return cljs.core.every_QMARK_.call(null,((function (searches,map__29199,map__29199__$1,last_name,first_name,cert_no){
return (function (p1__29196_SHARP_){
return cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,[cljs.core.str("(?i)"),cljs.core.str(p1__29196_SHARP_)].join('')),[cljs.core.str(last_name),cljs.core.str(" "),cljs.core.str(first_name),cljs.core.str(" "),cljs.core.str(cert_no)].join(''));
});})(searches,map__29199,map__29199__$1,last_name,first_name,cert_no))
,searches);
});
cnmipss.components.table_row = (function cnmipss$components$table_row(row,search_text){
var map__29203 = row;
var map__29203__$1 = ((((!((map__29203 == null)))?((((map__29203.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29203.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29203):map__29203);
var last_name = cljs.core.get.call(null,map__29203__$1,new cljs.core.Keyword(null,"last_name","last_name",44937527));
var first_name = cljs.core.get.call(null,map__29203__$1,new cljs.core.Keyword(null,"first_name","first_name",-1744629757));
var cert_type = cljs.core.get.call(null,map__29203__$1,new cljs.core.Keyword(null,"cert_type","cert_type",-819377859));
var cert_no = cljs.core.get.call(null,map__29203__$1,new cljs.core.Keyword(null,"cert_no","cert_no",1804182717));
var start_date = cljs.core.get.call(null,map__29203__$1,new cljs.core.Keyword(null,"start_date","start_date",1712466867));
var expiry_date = cljs.core.get.call(null,map__29203__$1,new cljs.core.Keyword(null,"expiry_date","expiry_date",818597655));
var mi = cljs.core.get.call(null,map__29203__$1,new cljs.core.Keyword(null,"mi","mi",-387784306));
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.row.lookup-row","tr.row.lookup-row",1254023354),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),cnmipss.components.display_row.call(null,row,search_text)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.col-xs-2","td.col-xs-2",1886590271),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-center","p.text-center",1457951226),last_name], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.col-xs-2","td.col-xs-2",1886590271),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-center","p.text-center",1457951226),[cljs.core.str(first_name),cljs.core.str(" "),cljs.core.str(mi)].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.col-xs-2","td.col-xs-2",1886590271),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-center","p.text-center",1457951226),cert_type], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.col-xs-2","td.col-xs-2",1886590271),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-center","p.text-center",1457951226),cert_no], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.col-xs-2","td.col-xs-2",1886590271),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-center","p.text-center",1457951226),start_date], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.col-xs-2","td.col-xs-2",1886590271),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-center","p.text-center",1457951226),expiry_date], null)], null)], null);
});
cnmipss.components.table_list = (function cnmipss$components$table_list(table){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.lookup-list","table.lookup-list",-81104040),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"caption.sr-only","caption.sr-only",-1528135565),"Certified Personnel Table"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary.sr-only","summary.sr-only",580841995),"This table lists records of CNMI Board of Education certifications for teachers and administrators.  Entering text in the search box above will filter the table to display only those records matching the search terms.  You may search by name or by certification number."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.row.lookup-row","tr.row.lookup-row",1254023354),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.col-xs-2.text-center","th.col-xs-2.text-center",1400964608),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scope","scope",-439358418),"col"], null),"Last Name"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.col-xs-2.text-center","th.col-xs-2.text-center",1400964608),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scope","scope",-439358418),"col"], null),"First Name"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.col-xs-2.text-center","th.col-xs-2.text-center",1400964608),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scope","scope",-439358418),"col"], null),"Cert Type"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.col-xs-2.text-center","th.col-xs-2.text-center",1400964608),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scope","scope",-439358418),"col"], null),"Cert No"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.col-xs-2.text-center","th.col-xs-2.text-center",1400964608),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scope","scope",-439358418),"col"], null),"Effective Date"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.col-xs-2.text-center","th.col-xs-2.text-center",1400964608),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scope","scope",-439358418),"col"], null),"Expiration Date"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__26769__auto__ = (function cnmipss$components$table_list_$_iter__29209(s__29210){
return (new cljs.core.LazySeq(null,(function (){
var s__29210__$1 = s__29210;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__29210__$1);
if(temp__4657__auto__){
var s__29210__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29210__$2)){
var c__26767__auto__ = cljs.core.chunk_first.call(null,s__29210__$2);
var size__26768__auto__ = cljs.core.count.call(null,c__26767__auto__);
var b__29212 = cljs.core.chunk_buffer.call(null,size__26768__auto__);
if((function (){var i__29211 = (0);
while(true){
if((i__29211 < size__26768__auto__)){
var row = cljs.core._nth.call(null,c__26767__auto__,i__29211);
cljs.core.chunk_append.call(null,b__29212,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cnmipss.components.table_row,row,cnmipss.components.search_text], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.get.call(null,row,new cljs.core.Keyword(null,"cert_no","cert_no",1804182717))], null)));

var G__29213 = (i__29211 + (1));
i__29211 = G__29213;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29212),cnmipss$components$table_list_$_iter__29209.call(null,cljs.core.chunk_rest.call(null,s__29210__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29212),null);
}
} else {
var row = cljs.core.first.call(null,s__29210__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cnmipss.components.table_row,row,cnmipss.components.search_text], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.get.call(null,row,new cljs.core.Keyword(null,"cert_no","cert_no",1804182717))], null)),cnmipss$components$table_list_$_iter__29209.call(null,cljs.core.rest.call(null,s__29210__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__26769__auto__.call(null,table);
})()], null)], null);
});
cnmipss.components.lookup_table = (function cnmipss$components$lookup_table(state){
var search_text = new cljs.core.Keyword(null,"search-text","search-text",1559451259).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
var table = new cljs.core.Keyword(null,"table","table",-564943036).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cnmipss.components.search_bar], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cnmipss.components.table_list,cljs.core.reverse.call(null,cljs.core.filter.call(null,((function (search_text,table){
return (function (p1__29214_SHARP_){
var and__25977__auto__ = cljs.core.every_QMARK_.call(null,((function (search_text,table){
return (function (el){
return typeof cljs.core.second.call(null,el) === 'string';
});})(search_text,table))
,p1__29214_SHARP_);
if(and__25977__auto__){
return cnmipss.components.display_row.call(null,p1__29214_SHARP_);
} else {
return and__25977__auto__;
}
});})(search_text,table))
,clojure.walk.keywordize_keys.call(null,cljs.core.js__GT_clj.call(null,table)))),search_text], null)], null);
});

//# sourceMappingURL=components.js.map?rel=1499831527225