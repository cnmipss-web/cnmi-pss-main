// Compiled by ClojureScript 1.9.671 {}
goog.provide('cnmipss.components.tables');
goog.require('cljs.core');
goog.require('cnmipss.components.forms');
goog.require('cnmipss.components.buttons');
goog.require('cnmipss.components.modals');
goog.require('cljs_time.core');
goog.require('cljs_time.format');
goog.require('re_frame.core');
goog.require('clojure.string');
cnmipss.components.tables.filter_by = (function cnmipss$components$tables$filter_by(var_args){
var args__37889__auto__ = [];
var len__37882__auto___54717 = arguments.length;
var i__37883__auto___54718 = (0);
while(true){
if((i__37883__auto___54718 < len__37882__auto___54717)){
args__37889__auto__.push((arguments[i__37883__auto___54718]));

var G__54719 = (i__37883__auto___54718 + (1));
i__37883__auto___54718 = G__54719;
continue;
} else {
}
break;
}

var argseq__37890__auto__ = ((((1) < args__37889__auto__.length))?(new cljs.core.IndexedSeq(args__37889__auto__.slice((1)),(0),null)):null);
return cnmipss.components.tables.filter_by.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37890__auto__);
});

cnmipss.components.tables.filter_by.cljs$core$IFn$_invoke$arity$variadic = (function (rows,ks){
return cljs.core.filter.call(null,(function (row){
var search_text = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search-text","search-text",1559451259)], null)));
var searches = clojure.string.split.call(null,search_text,/ /);
return cljs.core.every_QMARK_.call(null,((function (search_text,searches){
return (function (p1__54714_SHARP_){
return cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("(?i)"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__54714_SHARP_)].join('')),clojure.string.join.call(null," ",cljs.core.map.call(null,row,ks)));
});})(search_text,searches))
,searches);
}),rows);
});

cnmipss.components.tables.filter_by.cljs$lang$maxFixedArity = (1);

cnmipss.components.tables.filter_by.cljs$lang$applyTo = (function (seq54715){
var G__54716 = cljs.core.first.call(null,seq54715);
var seq54715__$1 = cljs.core.next.call(null,seq54715);
return cnmipss.components.tables.filter_by.cljs$core$IFn$_invoke$arity$variadic(G__54716,seq54715__$1);
});

cnmipss.components.tables.table_row = (function cnmipss$components$tables$table_row(row){
var map__54720 = row;
var map__54720__$1 = ((((!((map__54720 == null)))?((((map__54720.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54720.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54720):map__54720);
var last_name = cljs.core.get.call(null,map__54720__$1,new cljs.core.Keyword(null,"last_name","last_name",44937527));
var first_name = cljs.core.get.call(null,map__54720__$1,new cljs.core.Keyword(null,"first_name","first_name",-1744629757));
var cert_type = cljs.core.get.call(null,map__54720__$1,new cljs.core.Keyword(null,"cert_type","cert_type",-819377859));
var cert_no = cljs.core.get.call(null,map__54720__$1,new cljs.core.Keyword(null,"cert_no","cert_no",1804182717));
var start_date = cljs.core.get.call(null,map__54720__$1,new cljs.core.Keyword(null,"start_date","start_date",1712466867));
var expiry_date = cljs.core.get.call(null,map__54720__$1,new cljs.core.Keyword(null,"expiry_date","expiry_date",818597655));
var mi = cljs.core.get.call(null,map__54720__$1,new cljs.core.Keyword(null,"mi","mi",-387784306));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.row.lookup-row","tr.row.lookup-row",1254023354),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.col-xs-2","th.col-xs-2",2064545047),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scope","scope",-439358418),"row"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-center","p.text-center",1457951226),cljs.core.second.call(null,cljs.core.re_find.call(null,/(.*?)(\-renewal\-\d+)?$/,cert_no))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.col-xs-2","td.col-xs-2",1886590271),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-center","p.text-center",1457951226),last_name], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.col-xs-2","td.col-xs-2",1886590271),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-center","p.text-center",1457951226),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(first_name),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mi)].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.col-xs-2","td.col-xs-2",1886590271),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-center","p.text-center",1457951226),cert_type], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.col-xs-2","td.col-xs-2",1886590271),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-center","p.text-center",1457951226),start_date], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.col-xs-2","td.col-xs-2",1886590271),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-center","p.text-center",1457951226),expiry_date], null)], null)], null);
});
cnmipss.components.tables.table_list = (function cnmipss$components$tables$table_list(table){
var th_props = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scope","scope",-439358418),"col"], null);
var n_results = cljs.core.count.call(null,table);
var results_str = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_results),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((n_results > (1)))?" results.":" result."))].join('');
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.sr-only","p.sr-only",-1556215496),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-live","aria-live",-467182502),"polite"], null),results_str], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.lookup-list","table.lookup-list",-81104040),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"caption.sr-only","caption.sr-only",-1528135565),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Certified Personnel Table ")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.row.lookup-row","tr.row.lookup-row",1254023354),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.col-xs-2.text-center","th.col-xs-2.text-center",1400964608),th_props,"Cert Number"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.col-xs-2.text-center","th.col-xs-2.text-center",1400964608),th_props,"Last Name"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.col-xs-2.text-center","th.col-xs-2.text-center",1400964608),th_props,"First Name"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.col-xs-2.text-center","th.col-xs-2.text-center",1400964608),th_props,"Cert Type"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.col-xs-2.text-center","th.col-xs-2.text-center",1400964608),th_props,"Effective Date"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.col-xs-2.text-center","th.col-xs-2.text-center",1400964608),th_props,"Expiration Date"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),((((0) < cljs.core.count.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search-text","search-text",1559451259)], null))))))?(function (){var iter__37546__auto__ = ((function (th_props,n_results,results_str){
return (function cnmipss$components$tables$table_list_$_iter__54722(s__54723){
return (new cljs.core.LazySeq(null,((function (th_props,n_results,results_str){
return (function (){
var s__54723__$1 = s__54723;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__54723__$1);
if(temp__4657__auto__){
var s__54723__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__54723__$2)){
var c__37544__auto__ = cljs.core.chunk_first.call(null,s__54723__$2);
var size__37545__auto__ = cljs.core.count.call(null,c__37544__auto__);
var b__54725 = cljs.core.chunk_buffer.call(null,size__37545__auto__);
if((function (){var i__54724 = (0);
while(true){
if((i__54724 < size__37545__auto__)){
var row = cljs.core._nth.call(null,c__37544__auto__,i__54724);
cljs.core.chunk_append.call(null,b__54725,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cnmipss.components.tables.table_row,row], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),clojure.string.join.call(null," ",cljs.core.map.call(null,row,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cert_no","cert_no",1804182717),new cljs.core.Keyword(null,"first_name","first_name",-1744629757),new cljs.core.Keyword(null,"last_name","last_name",44937527)], null)))], null)));

var G__54726 = (i__54724 + (1));
i__54724 = G__54726;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__54725),cnmipss$components$tables$table_list_$_iter__54722.call(null,cljs.core.chunk_rest.call(null,s__54723__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__54725),null);
}
} else {
var row = cljs.core.first.call(null,s__54723__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cnmipss.components.tables.table_row,row], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),clojure.string.join.call(null," ",cljs.core.map.call(null,row,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cert_no","cert_no",1804182717),new cljs.core.Keyword(null,"first_name","first_name",-1744629757),new cljs.core.Keyword(null,"last_name","last_name",44937527)], null)))], null)),cnmipss$components$tables$table_list_$_iter__54722.call(null,cljs.core.rest.call(null,s__54723__$2)));
}
} else {
return null;
}
break;
}
});})(th_props,n_results,results_str))
,null,null));
});})(th_props,n_results,results_str))
;
return iter__37546__auto__.call(null,table);
})():null)], null)], null)], null);
});
cnmipss.components.tables.sort_certs = (function cnmipss$components$tables$sort_certs(certs){
return cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"cert_no","cert_no",1804182717),certs);
});
cnmipss.components.tables.lookup_table = (function cnmipss$components$tables$lookup_table(state){
var table = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-data","page-data",1443840710)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cnmipss.components.forms.search_bar,"Search Certified Personnel"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cnmipss.components.tables.table_list,cnmipss.components.tables.sort_certs.call(null,cnmipss.components.tables.filter_by.call(null,clojure.walk.keywordize_keys.call(null,cljs.core.js__GT_clj.call(null,table)),new cljs.core.Keyword(null,"cert_no","cert_no",1804182717),new cljs.core.Keyword(null,"first_name","first_name",-1744629757),new cljs.core.Keyword(null,"last_name","last_name",44937527)))], null)], null);
});
cnmipss.components.tables.parse_date = (function cnmipss$components$tables$parse_date(date){
try{return cljs_time.format.parse.call(null,cljs_time.format.formatter.call(null,"MMMM dd, YYYY"),date);
}catch (e54727){var e = e54727;
var parser = cljs.core.partial.call(null,cljs_time.format.parse,cljs_time.format.formatter.call(null,"MMMM dd, YYYY h:mm a"));
return parser.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,date,/at/,""),/\s+/," "));
}});
cnmipss.components.tables.force_close_QMARK_ = (function cnmipss$components$tables$force_close_QMARK_(p__54728){
var map__54729 = p__54728;
var map__54729__$1 = ((((!((map__54729 == null)))?((((map__54729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54729.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54729):map__54729);
var status = cljs.core.get.call(null,map__54729__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var close_date = cljs.core.get.call(null,map__54729__$1,new cljs.core.Keyword(null,"close_date","close_date",1327596200));
var or__36757__auto__ = cljs.core.not.call(null,status);
if(or__36757__auto__){
return or__36757__auto__;
} else {
var and__36745__auto__ = close_date;
if(cljs.core.truth_(and__36745__auto__)){
return cljs_time.core.after_QMARK_.call(null,cljs_time.core.now.call(null),cnmipss.components.tables.parse_date.call(null,close_date));
} else {
return and__36745__auto__;
}
}
});
cnmipss.components.tables.jva_row = (function cnmipss$components$tables$jva_row(jva){
var map__54731 = jva;
var map__54731__$1 = ((((!((map__54731 == null)))?((((map__54731.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54731.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54731):map__54731);
var status = cljs.core.get.call(null,map__54731__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var close_date = cljs.core.get.call(null,map__54731__$1,new cljs.core.Keyword(null,"close_date","close_date",1327596200));
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.row.jva-list-row","tr.row.jva-list-row",-1122969385),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(cnmipss.components.tables.force_close_QMARK_.call(null,jva))?"closed":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.col-xs-1","th.col-xs-1",192329086),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"scope","scope",-439358418),"row",new cljs.core.Keyword(null,"role","role",-736691072),"rowheader"], null),jva.call(null,new cljs.core.Keyword(null,"announce_no","announce_no",588651612))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.col-xs-2","td.col-xs-2",1886590271),jva.call(null,new cljs.core.Keyword(null,"position","position",-2011731912))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.col-xs-1.text-center","td.col-xs-1.text-center",148369567),(cljs.core.truth_(cnmipss.components.tables.force_close_QMARK_.call(null,jva))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),"Closed"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Open"], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.col-xs-1","td.col-xs-1",-1379788183),jva.call(null,new cljs.core.Keyword(null,"open_date","open_date",-706531074))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.col-xs-1","td.col-xs-1",-1379788183),(cljs.core.truth_(close_date)?close_date:"Until Filled")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.col-xs-3","td.col-xs-3",875171480),jva.call(null,new cljs.core.Keyword(null,"salary","salary",1283904063))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.col-xs-2","td.col-xs-2",1886590271),jva.call(null,new cljs.core.Keyword(null,"location","location",1815599388))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.col-xs-1.text-center","td.col-xs-1.text-center",148369567),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-info.table-link","a.btn.btn-info.table-link",-572117832),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),jva.call(null,new cljs.core.Keyword(null,"file_link","file_link",-256542498))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.sr-only","span.sr-only",2081743235),"Download"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-download","i.fa.fa-download",-637194109)], null)], null)], null)], null);
});
cnmipss.components.tables.sort_jvas = (function cnmipss$components$tables$sort_jvas(jvas){
return cljs.core.concat.call(null,cljs.core.reverse.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"announce_no","announce_no",588651612),cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cnmipss.components.tables.force_close_QMARK_),jvas))),cljs.core.reverse.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"announce_no","announce_no",588651612),cljs.core.filter.call(null,cnmipss.components.tables.force_close_QMARK_,jvas))));
});
cnmipss.components.tables.jva_list = (function cnmipss$components$tables$jva_list(table){
var th_props = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scope","scope",-439358418),"col"], null);
var n_results = cljs.core.count.call(null,table);
var results_str = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_results),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((n_results > (1)))?" results.":" result."))].join('');
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.sr-only","p.sr-only",-1556215496),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-live","aria-live",-467182502),"polite"], null),results_str], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.lookup-list","table.lookup-list",-81104040),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"caption.sr-only","caption.sr-only",-1528135565),"Job Vacancy List Table"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.row.jva-list-row","tr.row.jva-list-row",-1122969385),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.col-xs-1.text-center","th.col-xs-1.text-center",1322024325),th_props,"Number"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.col-xs-2.text-center","th.col-xs-2.text-center",1400964608),th_props,"Position/Title"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.col-xs-1.text-center","th.col-xs-1.text-center",1322024325),th_props,"Status"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.col-xs-1.text-center","th.col-xs-1.text-center",1322024325),th_props,"Opening Date"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.col-xs-1.text-center","th.col-xs-1.text-center",1322024325),th_props,"Closing Date"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.col-xs-3.text-center","th.col-xs-3.text-center",169753689),th_props,"Salary"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.col-xs-2.text-center","th.col-xs-2.text-center",1400964608),th_props,"Location"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.col-xs-1.text-center","th.col-xs-1.text-center",1322024325),th_props,"Link"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__37546__auto__ = ((function (th_props,n_results,results_str){
return (function cnmipss$components$tables$jva_list_$_iter__54733(s__54734){
return (new cljs.core.LazySeq(null,((function (th_props,n_results,results_str){
return (function (){
var s__54734__$1 = s__54734;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__54734__$1);
if(temp__4657__auto__){
var s__54734__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__54734__$2)){
var c__37544__auto__ = cljs.core.chunk_first.call(null,s__54734__$2);
var size__37545__auto__ = cljs.core.count.call(null,c__37544__auto__);
var b__54736 = cljs.core.chunk_buffer.call(null,size__37545__auto__);
if((function (){var i__54735 = (0);
while(true){
if((i__54735 < size__37545__auto__)){
var jva = cljs.core._nth.call(null,c__37544__auto__,i__54735);
cljs.core.chunk_append.call(null,b__54736,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cnmipss.components.tables.jva_row,jva], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("jva-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"announce_no","announce_no",588651612).cljs$core$IFn$_invoke$arity$1(jva))].join('')], null)));

var G__54737 = (i__54735 + (1));
i__54735 = G__54737;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__54736),cnmipss$components$tables$jva_list_$_iter__54733.call(null,cljs.core.chunk_rest.call(null,s__54734__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__54736),null);
}
} else {
var jva = cljs.core.first.call(null,s__54734__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cnmipss.components.tables.jva_row,jva], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("jva-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"announce_no","announce_no",588651612).cljs$core$IFn$_invoke$arity$1(jva))].join('')], null)),cnmipss$components$tables$jva_list_$_iter__54733.call(null,cljs.core.rest.call(null,s__54734__$2)));
}
} else {
return null;
}
break;
}
});})(th_props,n_results,results_str))
,null,null));
});})(th_props,n_results,results_str))
;
return iter__37546__auto__.call(null,table);
})()], null)], null)], null);
});
cnmipss.components.tables.jva_table = (function cnmipss$components$tables$jva_table(state){
var table = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-data","page-data",1443840710)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cnmipss.components.forms.search_bar,"Search Job Vacancies"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cnmipss.components.tables.jva_list,cnmipss.components.tables.sort_jvas.call(null,cnmipss.components.tables.filter_by.call(null,clojure.walk.keywordize_keys.call(null,cljs.core.js__GT_clj.call(null,table)),new cljs.core.Keyword(null,"announce_no","announce_no",588651612),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"location","location",1815599388)))], null)], null);
});
/**
 * Determine if a pns-announcement has been close for more than 48 hours
 */
cnmipss.components.tables.expired_QMARK_ = (function cnmipss$components$tables$expired_QMARK_(p__54738){
var map__54739 = p__54738;
var map__54739__$1 = ((((!((map__54739 == null)))?((((map__54739.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54739.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54739):map__54739);
var close_date = cljs.core.get.call(null,map__54739__$1,new cljs.core.Keyword(null,"close_date","close_date",1327596200));
return cljs_time.core.after_QMARK_.call(null,cljs_time.core.minus.call(null,cljs_time.core.now.call(null),cljs_time.core.days.call(null,(2))),cnmipss.components.tables.parse_date.call(null,close_date));
});
cnmipss.components.tables.pns_announcement_row = (function cnmipss$components$tables$pns_announcement_row(row){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.row.jva-list-row","tr.row.jva-list-row",-1122969385),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(cnmipss.components.tables.force_close_QMARK_.call(null,row))?"closed":null),new cljs.core.Keyword(null,"style","style",-496642736),(cljs.core.truth_(cnmipss.components.tables.expired_QMARK_.call(null,row))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null):null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.col-xs-1.text-center","th.col-xs-1.text-center",1322024325),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scope","scope",-439358418),"row"], null),(function (){var or__36757__auto__ = new cljs.core.Keyword(null,"rfp_no","rfp_no",-1735597295).cljs$core$IFn$_invoke$arity$1(row);
if(cljs.core.truth_(or__36757__auto__)){
return or__36757__auto__;
} else {
return new cljs.core.Keyword(null,"ifb_no","ifb_no",282350117).cljs$core$IFn$_invoke$arity$1(row);
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.col-xs-1","td.col-xs-1",-1379788183),new cljs.core.Keyword(null,"open_date","open_date",-706531074).cljs$core$IFn$_invoke$arity$1(row)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.col-xs-1","td.col-xs-1",-1379788183),new cljs.core.Keyword(null,"close_date","close_date",1327596200).cljs$core$IFn$_invoke$arity$1(row)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.col-xs-3","td.col-xs-3",875171480),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(row)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.col-xs-4","td.col-xs-4",509335343),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(row),(0),(280))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("...")].join('')], null),(cljs.core.truth_(cnmipss.components.tables.force_close_QMARK_.call(null,row))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.col-xs-2","td.col-xs-2",1886590271),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-center","p.text-center",1457951226),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),"Closed"], null)], null)], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.col-xs-2","td.col-xs-2",1886590271),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cnmipss.components.buttons.link_file,new cljs.core.Keyword(null,"file_link","file_link",-256542498).cljs$core$IFn$_invoke$arity$1(row),"Full Announcement"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cnmipss.components.buttons.get_addendums,row], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-primary.table-link.full-width","button.btn.btn-primary.table-link.full-width",-1002181773),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pns-subscribe","pns-subscribe",359854594),row], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subscription-error","subscription-error",417516592),null], null));

return setTimeout((function (){
return jQuery("#pns-modal-label").focus();
}),(500));
}),new cljs.core.Keyword(null,"data-toggle","data-toggle",436966687),"modal",new cljs.core.Keyword(null,"data-target","data-target",-113904678),"#pns-modal",new cljs.core.Keyword(null,"aria-controls","aria-controls",-1872379154),"pns-modal"], null),"Subscribe"], null)], null))], null);
});
cnmipss.components.tables.pns_announcement_table = (function cnmipss$components$tables$pns_announcement_table(k,table){
var th_props = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scope","scope",-439358418),"col"], null);
var data = cljs.core.get.call(null,table,k);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.col-xs-12.lookup-list","table.col-xs-12.lookup-list",-1618963424),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"caption","caption",-855383902),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"rfps","rfps",2147303477),k))?"Requests for Proposals":"Invitations for Bids")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.row.jva-list-row","tr.row.jva-list-row",-1122969385),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.col-xs-1.text-center","th.col-xs-1.text-center",1322024325),th_props,"Number"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.col-xs-1.text-center","th.col-xs-1.text-center",1322024325),th_props,"Open Date"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.col-xs-1.text-center","th.col-xs-1.text-center",1322024325),th_props,"Close Date"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.col-xs-3.text-center","th.col-xs-3.text-center",169753689),th_props,"Title"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.col-xs-4.text-center","th.col-xs-4.text-center",1625214779),th_props,"Description"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.col-xs-2.text-center","th.col-xs-2.text-center",1400964608),th_props,"Links"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__37546__auto__ = ((function (th_props,data){
return (function cnmipss$components$tables$pns_announcement_table_$_iter__54741(s__54742){
return (new cljs.core.LazySeq(null,((function (th_props,data){
return (function (){
var s__54742__$1 = s__54742;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__54742__$1);
if(temp__4657__auto__){
var s__54742__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__54742__$2)){
var c__37544__auto__ = cljs.core.chunk_first.call(null,s__54742__$2);
var size__37545__auto__ = cljs.core.count.call(null,c__37544__auto__);
var b__54744 = cljs.core.chunk_buffer.call(null,size__37545__auto__);
if((function (){var i__54743 = (0);
while(true){
if((i__54743 < size__37545__auto__)){
var row = cljs.core._nth.call(null,c__37544__auto__,i__54743);
cljs.core.chunk_append.call(null,b__54744,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cnmipss.components.tables.pns_announcement_row,cljs.core.assoc.call(null,row,new cljs.core.Keyword(null,"status","status",-1997798413),true)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("pns-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(row))].join('')], null)));

var G__54745 = (i__54743 + (1));
i__54743 = G__54745;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__54744),cnmipss$components$tables$pns_announcement_table_$_iter__54741.call(null,cljs.core.chunk_rest.call(null,s__54742__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__54744),null);
}
} else {
var row = cljs.core.first.call(null,s__54742__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cnmipss.components.tables.pns_announcement_row,cljs.core.assoc.call(null,row,new cljs.core.Keyword(null,"status","status",-1997798413),true)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("pns-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(row))].join('')], null)),cnmipss$components$tables$pns_announcement_table_$_iter__54741.call(null,cljs.core.rest.call(null,s__54742__$2)));
}
} else {
return null;
}
break;
}
});})(th_props,data))
,null,null));
});})(th_props,data))
;
return iter__37546__auto__.call(null,data);
})()], null)], null);
});
cnmipss.components.tables.procurement_tables = (function cnmipss$components$tables$procurement_tables(){
var table = clojure.walk.keywordize_keys.call(null,cljs.core.js__GT_clj.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-data","page-data",1443840710)], null)))));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cnmipss.components.modals.pns_modal], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cnmipss.components.tables.pns_announcement_table,new cljs.core.Keyword(null,"rfps","rfps",2147303477),table], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cnmipss.components.tables.pns_announcement_table,new cljs.core.Keyword(null,"ifbs","ifbs",-2063993480),table], null)], null);
});

//# sourceMappingURL=tables.js.map?rel=1503451500511