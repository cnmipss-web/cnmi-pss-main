// Compiled by ClojureScript 1.9.671 {}
goog.provide('cnmipss.views');
goog.require('cljs.core');
goog.require('cnmipss.components.tables');
goog.require('re_frame.core');
goog.require('klang.core');
cnmipss.views.interactive_view = (function cnmipss$views$interactive_view(){
var active_view = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-view","active-view",-1531689252)], null)));
var data = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-data","page-data",1443840710)], null)));
klang.core.add_log_BANG_.call(null,"cnmipss.views","INFO",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("klang.core","meta-data","klang.core/meta-data",765484551),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"active-view","active-view",108842275,null),active_view,new cljs.core.Symbol(null,"data","data",1407862150,null),data], null),new cljs.core.Keyword(null,"trace","trace",-1082747415),(function (){try{throw (new Error());
}catch (e44862){var e__38742__auto__ = e44862;
return e__38742__auto__;
}})()], null)], null),"Rendering interactive-view",active_view);

var G__44863 = active_view;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"cnmi-certification-look-up-database","cnmi-certification-look-up-database",-1487727293),G__44863)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cnmipss.components.tables.lookup_table,data], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"job-vacancy-announcements","job-vacancy-announcements",-1555714791),G__44863)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cnmipss.components.tables.jva_table,data], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"contractors-and-vendors","contractors-and-vendors",1541875611),G__44863)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cnmipss.components.tables.procurement_tables,data], null);
} else {
if(cljs.core._EQ_.call(null,null,G__44863)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#floatingCirclesG","div#floatingCirclesG",-2116600059),(function (){var iter__37546__auto__ = ((function (G__44863,active_view,data){
return (function cnmipss$views$interactive_view_$_iter__44864(s__44865){
return (new cljs.core.LazySeq(null,((function (G__44863,active_view,data){
return (function (){
var s__44865__$1 = s__44865;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__44865__$1);
if(temp__4657__auto__){
var s__44865__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44865__$2)){
var c__37544__auto__ = cljs.core.chunk_first.call(null,s__44865__$2);
var size__37545__auto__ = cljs.core.count.call(null,c__37544__auto__);
var b__44867 = cljs.core.chunk_buffer.call(null,size__37545__auto__);
if((function (){var i__44866 = (0);
while(true){
if((i__44866 < size__37545__auto__)){
var i = cljs.core._nth.call(null,c__37544__auto__,i__44866);
cljs.core.chunk_append.call(null,b__44867,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.f_circleG","div.f_circleG",-526902688),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("frotateG_0"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("floating-circle-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null)));

var G__44868 = (i__44866 + (1));
i__44866 = G__44868;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44867),cnmipss$views$interactive_view_$_iter__44864.call(null,cljs.core.chunk_rest.call(null,s__44865__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44867),null);
}
} else {
var i = cljs.core.first.call(null,s__44865__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.f_circleG","div.f_circleG",-526902688),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("frotateG_0"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("floating-circle-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null)),cnmipss$views$interactive_view_$_iter__44864.call(null,cljs.core.rest.call(null,s__44865__$2)));
}
} else {
return null;
}
break;
}
});})(G__44863,active_view,data))
,null,null));
});})(G__44863,active_view,data))
;
return iter__37546__auto__.call(null,cljs.core.range.call(null,(1),(9)));
})()], null);
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44863)].join('')));

}
}
}
}
});

//# sourceMappingURL=views.js.map?rel=1502766047171