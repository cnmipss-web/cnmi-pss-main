// Compiled by ClojureScript 1.9.229 {}
goog.provide('cnmipss.core');
goog.require('cljs.core');
goog.require('reagent.core');
cljs.core.enable_console_print_BANG_.call(null);
cnmipss.core.jq = jQuery;
cnmipss.core.debug_log = (function cnmipss$core$debug_log(var_args){
var args__27071__auto__ = [];
var len__27064__auto___32499 = arguments.length;
var i__27065__auto___32500 = (0);
while(true){
if((i__27065__auto___32500 < len__27064__auto___32499)){
args__27071__auto__.push((arguments[i__27065__auto___32500]));

var G__32501 = (i__27065__auto___32500 + (1));
i__27065__auto___32500 = G__32501;
continue;
} else {
}
break;
}

var argseq__27072__auto__ = ((((1) < args__27071__auto__.length))?(new cljs.core.IndexedSeq(args__27071__auto__.slice((1)),(0),null)):null);
return cnmipss.core.debug_log.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27072__auto__);
});

cnmipss.core.debug_log.cljs$core$IFn$_invoke$arity$variadic = (function (fn,msgs){
return cljs.core.println.call(null,"fn: ",fn,", ",msgs);
});

cnmipss.core.debug_log.cljs$lang$maxFixedArity = (1);

cnmipss.core.debug_log.cljs$lang$applyTo = (function (seq32497){
var G__32498 = cljs.core.first.call(null,seq32497);
var seq32497__$1 = cljs.core.next.call(null,seq32497);
return cnmipss.core.debug_log.cljs$core$IFn$_invoke$arity$variadic(G__32498,seq32497__$1);
});

if(typeof cnmipss.core.state !== 'undefined'){
} else {
cnmipss.core.state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"search-text","search-text",1559451259),"",new cljs.core.Keyword(null,"table","table",-564943036),cljs.core.PersistentVector.EMPTY], null));
}
cnmipss.core.set_search_text = (function cnmipss$core$set_search_text(event){
var search = document.getElementById("search-certified").value;
return cljs.core.swap_BANG_.call(null,cnmipss.core.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search-text","search-text",1559451259)], null),search);
});
cnmipss.core.search_bar = (function cnmipss$core$search_bar(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#search-box","div#search-box",-723907324),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"role","role",-736691072),"search"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.sr-only","label.sr-only",-964684571),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"search-certified"], null),"Search Certified Personnel"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"search",new cljs.core.Keyword(null,"id","id",-1388402092),"search-certified",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Search Certified Personnel",new cljs.core.Keyword(null,"on-change","on-change",-732046149),cnmipss.core.set_search_text,new cljs.core.Keyword(null,"ref","ref",1289896967),"search-certified"], null)], null)], null)], null)], null);
});
cnmipss.core.display_row = (function cnmipss$core$display_row(row){
var searches = clojure.string.split.call(null,cljs.core.deref.call(null,cnmipss.core.state).call(null,new cljs.core.Keyword(null,"search-text","search-text",1559451259)),/ /);
var map__32505 = row;
var map__32505__$1 = ((((!((map__32505 == null)))?((((map__32505.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32505.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32505):map__32505);
var last_name = cljs.core.get.call(null,map__32505__$1,new cljs.core.Keyword(null,"last_name","last_name",44937527));
var first_name = cljs.core.get.call(null,map__32505__$1,new cljs.core.Keyword(null,"first_name","first_name",-1744629757));
var cert_no = cljs.core.get.call(null,map__32505__$1,new cljs.core.Keyword(null,"cert_no","cert_no",1804182717));
return cljs.core.every_QMARK_.call(null,((function (searches,map__32505,map__32505__$1,last_name,first_name,cert_no){
return (function (p1__32502_SHARP_){
return cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,[cljs.core.str("(?i)"),cljs.core.str(p1__32502_SHARP_)].join('')),[cljs.core.str(last_name),cljs.core.str(" "),cljs.core.str(first_name),cljs.core.str(" "),cljs.core.str(cert_no)].join(''));
});})(searches,map__32505,map__32505__$1,last_name,first_name,cert_no))
,searches);
});
cnmipss.core.table_row = (function cnmipss$core$table_row(row){
var map__32509 = row;
var map__32509__$1 = ((((!((map__32509 == null)))?((((map__32509.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32509.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32509):map__32509);
var last_name = cljs.core.get.call(null,map__32509__$1,new cljs.core.Keyword(null,"last_name","last_name",44937527));
var first_name = cljs.core.get.call(null,map__32509__$1,new cljs.core.Keyword(null,"first_name","first_name",-1744629757));
var cert_type = cljs.core.get.call(null,map__32509__$1,new cljs.core.Keyword(null,"cert_type","cert_type",-819377859));
var cert_no = cljs.core.get.call(null,map__32509__$1,new cljs.core.Keyword(null,"cert_no","cert_no",1804182717));
var start_date = cljs.core.get.call(null,map__32509__$1,new cljs.core.Keyword(null,"start_date","start_date",1712466867));
var expiry_date = cljs.core.get.call(null,map__32509__$1,new cljs.core.Keyword(null,"expiry_date","expiry_date",818597655));
var mi = cljs.core.get.call(null,map__32509__$1,new cljs.core.Keyword(null,"mi","mi",-387784306));
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.row.lookup-row","tr.row.lookup-row",1254023354),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),cnmipss.core.display_row.call(null,row)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.col-xs-2","td.col-xs-2",1886590271),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-center","p.text-center",1457951226),last_name], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.col-xs-2","td.col-xs-2",1886590271),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-center","p.text-center",1457951226),[cljs.core.str(first_name),cljs.core.str(" "),cljs.core.str(mi)].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.col-xs-2","td.col-xs-2",1886590271),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-center","p.text-center",1457951226),cert_type], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.col-xs-2","td.col-xs-2",1886590271),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-center","p.text-center",1457951226),cert_no], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.col-xs-2","td.col-xs-2",1886590271),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-center","p.text-center",1457951226),start_date], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.col-xs-2","td.col-xs-2",1886590271),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-center","p.text-center",1457951226),expiry_date], null)], null)], null);
});
cnmipss.core.table_list = (function cnmipss$core$table_list(table){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.lookup-list","table.lookup-list",-81104040),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"caption.sr-only","caption.sr-only",-1528135565),"Certified Personnel Table"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary.sr-only","summary.sr-only",580841995),"This table lists records of CNMI Board of Education certifications for teachers and administrators.  Entering text in the search box above will filter the table to display only those records matching the search terms.  You may search by name or by certification number."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.row.lookup-row","tr.row.lookup-row",1254023354),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.col-xs-2.text-center","th.col-xs-2.text-center",1400964608),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scope","scope",-439358418),"col"], null),"Last Name"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.col-xs-2.text-center","th.col-xs-2.text-center",1400964608),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scope","scope",-439358418),"col"], null),"First Name"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.col-xs-2.text-center","th.col-xs-2.text-center",1400964608),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scope","scope",-439358418),"col"], null),"Cert Type"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.col-xs-2.text-center","th.col-xs-2.text-center",1400964608),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scope","scope",-439358418),"col"], null),"Cert No"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.col-xs-2.text-center","th.col-xs-2.text-center",1400964608),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scope","scope",-439358418),"col"], null),"Effective Date"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.col-xs-2.text-center","th.col-xs-2.text-center",1400964608),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scope","scope",-439358418),"col"], null),"Expiration Date"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__26769__auto__ = (function cnmipss$core$table_list_$_iter__32515(s__32516){
return (new cljs.core.LazySeq(null,(function (){
var s__32516__$1 = s__32516;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32516__$1);
if(temp__4657__auto__){
var s__32516__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32516__$2)){
var c__26767__auto__ = cljs.core.chunk_first.call(null,s__32516__$2);
var size__26768__auto__ = cljs.core.count.call(null,c__26767__auto__);
var b__32518 = cljs.core.chunk_buffer.call(null,size__26768__auto__);
if((function (){var i__32517 = (0);
while(true){
if((i__32517 < size__26768__auto__)){
var row = cljs.core._nth.call(null,c__26767__auto__,i__32517);
cljs.core.chunk_append.call(null,b__32518,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cnmipss.core.table_row,row], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.get.call(null,row,new cljs.core.Keyword(null,"cert_no","cert_no",1804182717))], null)));

var G__32519 = (i__32517 + (1));
i__32517 = G__32519;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32518),cnmipss$core$table_list_$_iter__32515.call(null,cljs.core.chunk_rest.call(null,s__32516__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32518),null);
}
} else {
var row = cljs.core.first.call(null,s__32516__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cnmipss.core.table_row,row], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.get.call(null,row,new cljs.core.Keyword(null,"cert_no","cert_no",1804182717))], null)),cnmipss$core$table_list_$_iter__32515.call(null,cljs.core.rest.call(null,s__32516__$2)));
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
cnmipss.core.lookup_table = (function cnmipss$core$lookup_table(state){
var search_text = new cljs.core.Keyword(null,"search-text","search-text",1559451259).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
var table = new cljs.core.Keyword(null,"table","table",-564943036).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cnmipss.core.search_bar], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cnmipss.core.table_list,cljs.core.reverse.call(null,cljs.core.filter.call(null,((function (search_text,table){
return (function (p1__32520_SHARP_){
var and__25977__auto__ = cljs.core.every_QMARK_.call(null,((function (search_text,table){
return (function (el){
return typeof cljs.core.second.call(null,el) === 'string';
});})(search_text,table))
,p1__32520_SHARP_);
if(and__25977__auto__){
return cnmipss.core.display_row.call(null,p1__32520_SHARP_);
} else {
return and__25977__auto__;
}
});})(search_text,table))
,clojure.walk.keywordize_keys.call(null,cljs.core.js__GT_clj.call(null,table))))], null)], null);
});
cnmipss.core.path = (function cnmipss$core$path(){
return location.pathname;
});
cnmipss.core.on_js_reload = (function cnmipss$core$on_js_reload(){
return null;
});
cnmipss.core.init_BANG_ = (function cnmipss$core$init_BANG_(){
if(cljs.core._EQ_.call(null,cnmipss.core.path.call(null),"/cnmi-certification-look-up-database/")){
return cnmipss.core.jq.get("http://localhost:3000/api/lookup",(function (data){
cljs.core.swap_BANG_.call(null,cnmipss.core.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036)], null),data);

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cnmipss.core.lookup_table,cnmipss.core.state], null),document.getElementById("certification-lookup"));
}));
} else {
return null;
}
});
goog.exportSymbol('cnmipss.core.init_BANG_', cnmipss.core.init_BANG_);
cnmipss.core.init_BANG_.call(null);

//# sourceMappingURL=core.js.map?rel=1499827411562