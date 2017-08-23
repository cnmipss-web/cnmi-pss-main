// Compiled by ClojureScript 1.9.671 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('cljs.core.async');
goog.require('goog.string');
goog.require('goog.dom.dataset');
goog.require('goog.object');
goog.require('goog.dom');
goog.require('cljs.pprint');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__37889__auto__ = [];
var len__37882__auto___47899 = arguments.length;
var i__37883__auto___47900 = (0);
while(true){
if((i__37883__auto___47900 < len__37882__auto___47899)){
args__37889__auto__.push((arguments[i__37883__auto___47900]));

var G__47901 = (i__37883__auto___47900 + (1));
i__37883__auto___47900 = G__47901;
continue;
} else {
}
break;
}

var argseq__37890__auto__ = ((((2) < args__37889__auto__.length))?(new cljs.core.IndexedSeq(args__37889__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37890__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__47891_47902 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__47892_47903 = null;
var count__47893_47904 = (0);
var i__47894_47905 = (0);
while(true){
if((i__47894_47905 < count__47893_47904)){
var k_47906 = cljs.core._nth.call(null,chunk__47892_47903,i__47894_47905);
e.setAttribute(cljs.core.name.call(null,k_47906),cljs.core.get.call(null,attrs,k_47906));

var G__47907 = seq__47891_47902;
var G__47908 = chunk__47892_47903;
var G__47909 = count__47893_47904;
var G__47910 = (i__47894_47905 + (1));
seq__47891_47902 = G__47907;
chunk__47892_47903 = G__47908;
count__47893_47904 = G__47909;
i__47894_47905 = G__47910;
continue;
} else {
var temp__4657__auto___47911 = cljs.core.seq.call(null,seq__47891_47902);
if(temp__4657__auto___47911){
var seq__47891_47912__$1 = temp__4657__auto___47911;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47891_47912__$1)){
var c__37577__auto___47913 = cljs.core.chunk_first.call(null,seq__47891_47912__$1);
var G__47914 = cljs.core.chunk_rest.call(null,seq__47891_47912__$1);
var G__47915 = c__37577__auto___47913;
var G__47916 = cljs.core.count.call(null,c__37577__auto___47913);
var G__47917 = (0);
seq__47891_47902 = G__47914;
chunk__47892_47903 = G__47915;
count__47893_47904 = G__47916;
i__47894_47905 = G__47917;
continue;
} else {
var k_47918 = cljs.core.first.call(null,seq__47891_47912__$1);
e.setAttribute(cljs.core.name.call(null,k_47918),cljs.core.get.call(null,attrs,k_47918));

var G__47919 = cljs.core.next.call(null,seq__47891_47912__$1);
var G__47920 = null;
var G__47921 = (0);
var G__47922 = (0);
seq__47891_47902 = G__47919;
chunk__47892_47903 = G__47920;
count__47893_47904 = G__47921;
i__47894_47905 = G__47922;
continue;
}
} else {
}
}
break;
}

var seq__47895_47923 = cljs.core.seq.call(null,children);
var chunk__47896_47924 = null;
var count__47897_47925 = (0);
var i__47898_47926 = (0);
while(true){
if((i__47898_47926 < count__47897_47925)){
var ch_47927 = cljs.core._nth.call(null,chunk__47896_47924,i__47898_47926);
e.appendChild(ch_47927);

var G__47928 = seq__47895_47923;
var G__47929 = chunk__47896_47924;
var G__47930 = count__47897_47925;
var G__47931 = (i__47898_47926 + (1));
seq__47895_47923 = G__47928;
chunk__47896_47924 = G__47929;
count__47897_47925 = G__47930;
i__47898_47926 = G__47931;
continue;
} else {
var temp__4657__auto___47932 = cljs.core.seq.call(null,seq__47895_47923);
if(temp__4657__auto___47932){
var seq__47895_47933__$1 = temp__4657__auto___47932;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47895_47933__$1)){
var c__37577__auto___47934 = cljs.core.chunk_first.call(null,seq__47895_47933__$1);
var G__47935 = cljs.core.chunk_rest.call(null,seq__47895_47933__$1);
var G__47936 = c__37577__auto___47934;
var G__47937 = cljs.core.count.call(null,c__37577__auto___47934);
var G__47938 = (0);
seq__47895_47923 = G__47935;
chunk__47896_47924 = G__47936;
count__47897_47925 = G__47937;
i__47898_47926 = G__47938;
continue;
} else {
var ch_47939 = cljs.core.first.call(null,seq__47895_47933__$1);
e.appendChild(ch_47939);

var G__47940 = cljs.core.next.call(null,seq__47895_47933__$1);
var G__47941 = null;
var G__47942 = (0);
var G__47943 = (0);
seq__47895_47923 = G__47940;
chunk__47896_47924 = G__47941;
count__47897_47925 = G__47942;
i__47898_47926 = G__47943;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq47888){
var G__47889 = cljs.core.first.call(null,seq47888);
var seq47888__$1 = cljs.core.next.call(null,seq47888);
var G__47890 = cljs.core.first.call(null,seq47888__$1);
var seq47888__$2 = cljs.core.next.call(null,seq47888__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__47889,G__47890,seq47888__$2);
});

if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__37691__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__37692__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__37693__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__37694__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__37695__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__37691__auto__,prefer_table__37692__auto__,method_cache__37693__auto__,cached_hierarchy__37694__auto__,hierarchy__37695__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__37691__auto__,prefer_table__37692__auto__,method_cache__37693__auto__,cached_hierarchy__37694__auto__,hierarchy__37695__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__37695__auto__,method_table__37691__auto__,prefer_table__37692__auto__,method_cache__37693__auto__,cached_hierarchy__37694__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine,new cljs.core.Keyword(null,"file-column","file-column",1543934780),dataset.fileColumn], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1("#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cont_id)].join('')))){
var el_47944 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-o-transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 13px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("border-top: 1px solid #f5f5f5;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("line-height: 18px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("color: #333;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-family: monospace;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("padding: 0px 10px 0px 70px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("position: fixed;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("bottom: 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("left: 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("height: 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("opacity: 0.0;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("box-sizing: border-box;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("z-index: 10000;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("text-align: left;")].join('')], null));
el_47944.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_47944.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_47944.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_47944);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__47945,st_map){
var map__47946 = p__47945;
var map__47946__$1 = ((((!((map__47946 == null)))?((((map__47946.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47946.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47946):map__47946);
var container_el = cljs.core.get.call(null,map__47946__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__47946,map__47946__$1,container_el){
return (function (p__47948){
var vec__47949 = p__47948;
var k = cljs.core.nth.call(null,vec__47949,(0),null);
var v = cljs.core.nth.call(null,vec__47949,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__47946,map__47946__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__47952,dom_str){
var map__47953 = p__47952;
var map__47953__$1 = ((((!((map__47953 == null)))?((((map__47953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47953.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47953):map__47953);
var c = map__47953__$1;
var content_area_el = cljs.core.get.call(null,map__47953__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__47955){
var map__47956 = p__47955;
var map__47956__$1 = ((((!((map__47956 == null)))?((((map__47956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47956.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47956):map__47956);
var content_area_el = cljs.core.get.call(null,map__47956__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<a style=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1("float: right;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 18px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("text-decoration: none;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("text-align: right;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("width: 30px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("height: 30px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("color: rgba(84,84,84, 0.5);"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("x"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__44387__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44387__auto__){
return (function (){
var f__44388__auto__ = (function (){var switch__44299__auto__ = ((function (c__44387__auto__){
return (function (state_47973){
var state_val_47974 = (state_47973[(1)]);
if((state_val_47974 === (1))){
var inst_47958 = (state_47973[(7)]);
var inst_47958__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_47959 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_47960 = ["10px","10px","100%","68px","1.0"];
var inst_47961 = cljs.core.PersistentHashMap.fromArrays(inst_47959,inst_47960);
var inst_47962 = cljs.core.merge.call(null,inst_47961,style);
var inst_47963 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_47958__$1,inst_47962);
var inst_47964 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_47958__$1,msg);
var inst_47965 = cljs.core.async.timeout.call(null,(300));
var state_47973__$1 = (function (){var statearr_47975 = state_47973;
(statearr_47975[(8)] = inst_47964);

(statearr_47975[(7)] = inst_47958__$1);

(statearr_47975[(9)] = inst_47963);

return statearr_47975;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47973__$1,(2),inst_47965);
} else {
if((state_val_47974 === (2))){
var inst_47958 = (state_47973[(7)]);
var inst_47967 = (state_47973[(2)]);
var inst_47968 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_47969 = ["auto"];
var inst_47970 = cljs.core.PersistentHashMap.fromArrays(inst_47968,inst_47969);
var inst_47971 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_47958,inst_47970);
var state_47973__$1 = (function (){var statearr_47976 = state_47973;
(statearr_47976[(10)] = inst_47967);

return statearr_47976;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47973__$1,inst_47971);
} else {
return null;
}
}
});})(c__44387__auto__))
;
return ((function (switch__44299__auto__,c__44387__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__44300__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__44300__auto____0 = (function (){
var statearr_47977 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47977[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__44300__auto__);

(statearr_47977[(1)] = (1));

return statearr_47977;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__44300__auto____1 = (function (state_47973){
while(true){
var ret_value__44301__auto__ = (function (){try{while(true){
var result__44302__auto__ = switch__44299__auto__.call(null,state_47973);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44302__auto__;
}
break;
}
}catch (e47978){if((e47978 instanceof Object)){
var ex__44303__auto__ = e47978;
var statearr_47979_47981 = state_47973;
(statearr_47979_47981[(5)] = ex__44303__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47973);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47978;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47982 = state_47973;
state_47973 = G__47982;
continue;
} else {
return ret_value__44301__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__44300__auto__ = function(state_47973){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__44300__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__44300__auto____1.call(this,state_47973);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__44300__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__44300__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__44300__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__44300__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__44300__auto__;
})()
;})(switch__44299__auto__,c__44387__auto__))
})();
var state__44389__auto__ = (function (){var statearr_47980 = f__44388__auto__.call(null);
(statearr_47980[(6)] = c__44387__auto__);

return statearr_47980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44389__auto__);
});})(c__44387__auto__))
);

return c__44387__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(var_args){
var G__47984 = arguments.length;
switch (G__47984) {
case 1:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1 = (function (s){
return figwheel.client.heads_up.heading.call(null,s,"");
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2 = (function (s,sub_head){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div style=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 26px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("line-height: 26px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("margin-bottom: 2px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("padding-top: 1px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" <span style=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1("display: inline-block;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 13px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_head),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</span></div>")].join('');
});

figwheel.client.heads_up.heading.cljs$lang$maxFixedArity = 2;

figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,column_number,msg){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div style=\"cursor: pointer;\" data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" data-file-line=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" data-file-column=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_number),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg,p__47986){
var map__47987 = p__47986;
var map__47987__$1 = ((((!((map__47987 == null)))?((((map__47987.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47987.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47987):map__47987);
var file = cljs.core.get.call(null,map__47987__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__47987__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__47987__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg__$1 = goog.string.htmlEscape(msg);
if(cljs.core.truth_((function (){var or__36757__auto__ = file;
if(cljs.core.truth_(or__36757__auto__)){
return or__36757__auto__;
} else {
return line;
}
})())){
return figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg__$1);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
}
});
figwheel.client.heads_up.escape = (function figwheel$client$heads_up$escape(x){
return goog.string.htmlEscape(x);
});
figwheel.client.heads_up.pad_line_number = (function figwheel$client$heads_up$pad_line_number(n,line_number){
var len = cljs.core.count.call(null,cljs.core.fnil.call(null,cljs.core.str,"").call(null,line_number));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((len < n))?cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(n - len)," ")):"")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number)].join('');
});
figwheel.client.heads_up.inline_error_line = (function figwheel$client$heads_up$inline_error_line(style,line_number,line){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<span style='"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(style),cljs.core.str.cljs$core$IFn$_invoke$arity$1("'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<span style='color: #757575;'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number),cljs.core.str.cljs$core$IFn$_invoke$arity$1("  </span>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,line)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</span>")].join('');
});
figwheel.client.heads_up.format_inline_error_line = (function figwheel$client$heads_up$format_inline_error_line(p__47989){
var vec__47990 = p__47989;
var typ = cljs.core.nth.call(null,vec__47990,(0),null);
var line_number = cljs.core.nth.call(null,vec__47990,(1),null);
var line = cljs.core.nth.call(null,vec__47990,(2),null);
var pred__47993 = cljs.core._EQ_;
var expr__47994 = typ;
if(cljs.core.truth_(pred__47993.call(null,new cljs.core.Keyword(null,"code-line","code-line",-2138627853),expr__47994))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #999;",line_number,line);
} else {
if(cljs.core.truth_(pred__47993.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),expr__47994))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #ccc; font-weight: bold;",line_number,line);
} else {
if(cljs.core.truth_(pred__47993.call(null,new cljs.core.Keyword(null,"error-message","error-message",1756021561),expr__47994))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #D07D7D;",line_number,line);
} else {
return figwheel.client.heads_up.inline_error_line.call(null,"color: #666;",line_number,line);
}
}
}
});
figwheel.client.heads_up.pad_line_numbers = (function figwheel$client$heads_up$pad_line_numbers(inline_error){
var max_line_number_length = cljs.core.count.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.second,inline_error)))].join(''));
return cljs.core.map.call(null,((function (max_line_number_length){
return (function (p1__47996_SHARP_){
return cljs.core.update_in.call(null,p1__47996_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),cljs.core.partial.call(null,figwheel.client.heads_up.pad_line_number,max_line_number_length));
});})(max_line_number_length))
,inline_error);
});
figwheel.client.heads_up.format_inline_error = (function figwheel$client$heads_up$format_inline_error(inline_error){
var lines = cljs.core.map.call(null,figwheel.client.heads_up.format_inline_error_line,figwheel.client.heads_up.pad_line_numbers.call(null,inline_error));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<pre style='whitespace:pre; overflow-x: scroll; display:block; font-family:monospace; font-size:0.8em; border-radius: 3px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" line-height: 1.1em; padding: 10px; background-color: rgb(24,26,38); margin-right: 5px'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"\n",lines)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</pre>")].join('');
});
figwheel.client.heads_up.flatten_exception = (function figwheel$client$heads_up$flatten_exception(p1__47997_SHARP_){
return cljs.core.take_while.call(null,cljs.core.some_QMARK_,cljs.core.iterate.call(null,new cljs.core.Keyword(null,"cause","cause",231901252),p1__47997_SHARP_));
});
figwheel.client.heads_up.exception__GT_display_data = (function figwheel$client$heads_up$exception__GT_display_data(p__48000){
var map__48001 = p__48000;
var map__48001__$1 = ((((!((map__48001 == null)))?((((map__48001.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48001.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48001):map__48001);
var exception = map__48001__$1;
var message = cljs.core.get.call(null,map__48001__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var failed_loading_clj_file = cljs.core.get.call(null,map__48001__$1,new cljs.core.Keyword(null,"failed-loading-clj-file","failed-loading-clj-file",-1682536481));
var reader_exception = cljs.core.get.call(null,map__48001__$1,new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098));
var file = cljs.core.get.call(null,map__48001__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var column = cljs.core.get.call(null,map__48001__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var failed_compiling = cljs.core.get.call(null,map__48001__$1,new cljs.core.Keyword(null,"failed-compiling","failed-compiling",1768639503));
var error_inline = cljs.core.get.call(null,map__48001__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var line = cljs.core.get.call(null,map__48001__$1,new cljs.core.Keyword(null,"line","line",212345235));
var class$ = cljs.core.get.call(null,map__48001__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var analysis_exception = cljs.core.get.call(null,map__48001__$1,new cljs.core.Keyword(null,"analysis-exception","analysis-exception",591623285));
var display_ex_data = cljs.core.get.call(null,map__48001__$1,new cljs.core.Keyword(null,"display-ex-data","display-ex-data",-1611558730));
var last_message = (cljs.core.truth_((function (){var and__36745__auto__ = file;
if(cljs.core.truth_(and__36745__auto__)){
return line;
} else {
return and__36745__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Please see line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" of file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Please see "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),(cljs.core.truth_(failed_loading_clj_file)?"Couldn't load Clojure file":(cljs.core.truth_(analysis_exception)?"Could not Analyze":(cljs.core.truth_(reader_exception)?"Could not Read":(cljs.core.truth_(failed_compiling)?"Could not Compile":"Compile Exception"
)))),new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__48001,map__48001__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data){
return (function (p1__47998_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__47998_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
});})(last_message,map__48001,map__48001__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data))
,(cljs.core.truth_(message)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(class$)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,class$)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(": ")].join(''):"")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<span style=\"font-weight:bold;\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</span>")].join(''),(cljs.core.truth_(display_ex_data)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<pre>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.utils.pprint_to_string.call(null,display_ex_data)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</pre>")].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null):cljs.core.map.call(null,((function (last_message,map__48001,map__48001__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data){
return (function (p1__47999_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1__47999_SHARP_))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(": "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(p1__47999_SHARP_)))].join('');
});})(last_message,map__48001,map__48001__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data))
,figwheel.client.heads_up.flatten_exception.call(null,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(exception))))),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div style=\"color: #AD4F4F; padding-top: 3px;\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,last_message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.auto_notify_source_file_line = (function figwheel$client$heads_up$auto_notify_source_file_line(p__48003){
var map__48004 = p__48003;
var map__48004__$1 = ((((!((map__48004 == null)))?((((map__48004.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48004.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48004):map__48004);
var file = cljs.core.get.call(null,map__48004__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__48004__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__48004__$1,new cljs.core.Keyword(null,"column","column",2078222095));
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''),new cljs.core.Keyword(null,"file-line","file-line",-1228823138),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''),new cljs.core.Keyword(null,"file-column","file-column",1543934780),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('')], null));
});
figwheel.client.heads_up.display_exception = (function figwheel$client$heads_up$display_exception(exception_data){
var map__48007 = figwheel.client.heads_up.exception__GT_display_data.call(null,exception_data);
var map__48007__$1 = ((((!((map__48007 == null)))?((((map__48007.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48007.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48007):map__48007);
var head = cljs.core.get.call(null,map__48007__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__48007__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__48007__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__48007__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__48007__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__48007__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__48007__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg))].join(''));
});
figwheel.client.heads_up.warning_data__GT_display_data = (function figwheel$client$heads_up$warning_data__GT_display_data(p__48010){
var map__48011 = p__48010;
var map__48011__$1 = ((((!((map__48011 == null)))?((((map__48011.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48011.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48011):map__48011);
var warning_data = map__48011__$1;
var file = cljs.core.get.call(null,map__48011__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__48011__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__48011__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var message = cljs.core.get.call(null,map__48011__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var error_inline = cljs.core.get.call(null,map__48011__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var last_message = (cljs.core.truth_((function (){var and__36745__auto__ = file;
if(cljs.core.truth_(and__36745__auto__)){
return line;
} else {
return and__36745__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Please see line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" of file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Please see "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),"Compile Warning",new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__48011,map__48011__$1,warning_data,file,line,column,message,error_inline){
return (function (p1__48009_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__48009_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
});})(last_message,map__48011,map__48011__$1,warning_data,file,line,column,message,error_inline))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(message)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<span style=\"font-weight:bold;\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</span>")].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null)),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div style=\"color: #AD4F4F; padding-top: 3px; margin-bottom: 10px;\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,last_message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(warning_data){
var map__48013 = figwheel.client.heads_up.warning_data__GT_display_data.call(null,warning_data);
var map__48013__$1 = ((((!((map__48013 == null)))?((((map__48013.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48013.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48013):map__48013);
var head = cljs.core.get.call(null,map__48013__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__48013__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__48013__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__48013__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__48013__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__48013__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__48013__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg))].join(''));
});
figwheel.client.heads_up.format_warning_message = (function figwheel$client$heads_up$format_warning_message(p__48015){
var map__48016 = p__48015;
var map__48016__$1 = ((((!((map__48016 == null)))?((((map__48016.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48016.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48016):map__48016);
var warning_data = map__48016__$1;
var message = cljs.core.get.call(null,map__48016__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__48016__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__48016__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__48016__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__48018 = message;
var G__48018__$1 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48018),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__48018);
var G__48018__$2 = (cljs.core.truth_((function (){var and__36745__auto__ = line;
if(cljs.core.truth_(and__36745__auto__)){
return column;
} else {
return and__36745__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48018__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):G__48018__$1);
if(cljs.core.truth_(file)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48018__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join('');
} else {
return G__48018__$2;
}
});
figwheel.client.heads_up.append_warning_message = (function figwheel$client$heads_up$append_warning_message(p__48019){
var map__48020 = p__48019;
var map__48020__$1 = ((((!((map__48020 == null)))?((((map__48020.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48020.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48020):map__48020);
var warning_data = map__48020__$1;
var message = cljs.core.get.call(null,map__48020__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__48020__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__48020__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__48020__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(cljs.core.truth_(message)){
var map__48022 = figwheel.client.heads_up.ensure_container.call(null);
var map__48022__$1 = ((((!((map__48022 == null)))?((((map__48022.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48022.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48022):map__48022);
var content_area_el = cljs.core.get.call(null,map__48022__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = goog.dom.createElement("div");
var child_count = goog.dom.getChildren(content_area_el).length;
if((child_count < (6))){
el.innerHTML = figwheel.client.heads_up.format_line.call(null,figwheel.client.heads_up.format_warning_message.call(null,warning_data),warning_data);

return goog.dom.append(content_area_el,el);
} else {
var temp__4657__auto__ = goog.dom.getLastElementChild(content_area_el);
if(cljs.core.truth_(temp__4657__auto__)){
var last_child = temp__4657__auto__;
var temp__4655__auto__ = goog.dom.dataset.get(last_child,"figwheel_count");
if(cljs.core.truth_(temp__4655__auto__)){
var message_count = temp__4655__auto__;
var message_count__$1 = (parseInt(message_count) + (1));
goog.dom.dataset.set(last_child,"figwheel_count",message_count__$1);

return last_child.innerHTML = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(message_count__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" more warnings have not been displayed ...")].join('');
} else {
return goog.dom.append(content_area_el,goog.dom.createDom("div",({"data-figwheel_count": (1), "style": "margin-top: 3px; font-weight: bold"}),"1 more warning that has not been displayed ..."));
}
} else {
return null;
}
}
} else {
return null;
}
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__44387__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44387__auto__){
return (function (){
var f__44388__auto__ = (function (){var switch__44299__auto__ = ((function (c__44387__auto__){
return (function (state_48041){
var state_val_48042 = (state_48041[(1)]);
if((state_val_48042 === (1))){
var inst_48024 = (state_48041[(7)]);
var inst_48024__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_48025 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_48026 = ["0.0"];
var inst_48027 = cljs.core.PersistentHashMap.fromArrays(inst_48025,inst_48026);
var inst_48028 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_48024__$1,inst_48027);
var inst_48029 = cljs.core.async.timeout.call(null,(300));
var state_48041__$1 = (function (){var statearr_48043 = state_48041;
(statearr_48043[(7)] = inst_48024__$1);

(statearr_48043[(8)] = inst_48028);

return statearr_48043;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48041__$1,(2),inst_48029);
} else {
if((state_val_48042 === (2))){
var inst_48024 = (state_48041[(7)]);
var inst_48031 = (state_48041[(2)]);
var inst_48032 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_48033 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_48034 = cljs.core.PersistentHashMap.fromArrays(inst_48032,inst_48033);
var inst_48035 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_48024,inst_48034);
var inst_48036 = cljs.core.async.timeout.call(null,(200));
var state_48041__$1 = (function (){var statearr_48044 = state_48041;
(statearr_48044[(9)] = inst_48031);

(statearr_48044[(10)] = inst_48035);

return statearr_48044;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48041__$1,(3),inst_48036);
} else {
if((state_val_48042 === (3))){
var inst_48024 = (state_48041[(7)]);
var inst_48038 = (state_48041[(2)]);
var inst_48039 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_48024,"");
var state_48041__$1 = (function (){var statearr_48045 = state_48041;
(statearr_48045[(11)] = inst_48038);

return statearr_48045;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48041__$1,inst_48039);
} else {
return null;
}
}
}
});})(c__44387__auto__))
;
return ((function (switch__44299__auto__,c__44387__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__44300__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__44300__auto____0 = (function (){
var statearr_48046 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48046[(0)] = figwheel$client$heads_up$clear_$_state_machine__44300__auto__);

(statearr_48046[(1)] = (1));

return statearr_48046;
});
var figwheel$client$heads_up$clear_$_state_machine__44300__auto____1 = (function (state_48041){
while(true){
var ret_value__44301__auto__ = (function (){try{while(true){
var result__44302__auto__ = switch__44299__auto__.call(null,state_48041);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44302__auto__;
}
break;
}
}catch (e48047){if((e48047 instanceof Object)){
var ex__44303__auto__ = e48047;
var statearr_48048_48050 = state_48041;
(statearr_48048_48050[(5)] = ex__44303__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48041);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48047;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48051 = state_48041;
state_48041 = G__48051;
continue;
} else {
return ret_value__44301__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__44300__auto__ = function(state_48041){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__44300__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__44300__auto____1.call(this,state_48041);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up$clear_$_state_machine__44300__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__44300__auto____0;
figwheel$client$heads_up$clear_$_state_machine__44300__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__44300__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__44300__auto__;
})()
;})(switch__44299__auto__,c__44387__auto__))
})();
var state__44389__auto__ = (function (){var statearr_48049 = f__44388__auto__.call(null);
(statearr_48049[(6)] = c__44387__auto__);

return statearr_48049;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44389__auto__);
});})(c__44387__auto__))
);

return c__44387__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__44387__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44387__auto__){
return (function (){
var f__44388__auto__ = (function (){var switch__44299__auto__ = ((function (c__44387__auto__){
return (function (state_48062){
var state_val_48063 = (state_48062[(1)]);
if((state_val_48063 === (1))){
var inst_48052 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_48062__$1 = state_48062;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48062__$1,(2),inst_48052);
} else {
if((state_val_48063 === (2))){
var inst_48054 = (state_48062[(2)]);
var inst_48055 = cljs.core.async.timeout.call(null,(400));
var state_48062__$1 = (function (){var statearr_48064 = state_48062;
(statearr_48064[(7)] = inst_48054);

return statearr_48064;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48062__$1,(3),inst_48055);
} else {
if((state_val_48063 === (3))){
var inst_48057 = (state_48062[(2)]);
var inst_48058 = figwheel.client.heads_up.clear.call(null);
var state_48062__$1 = (function (){var statearr_48065 = state_48062;
(statearr_48065[(8)] = inst_48057);

return statearr_48065;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48062__$1,(4),inst_48058);
} else {
if((state_val_48063 === (4))){
var inst_48060 = (state_48062[(2)]);
var state_48062__$1 = state_48062;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48062__$1,inst_48060);
} else {
return null;
}
}
}
}
});})(c__44387__auto__))
;
return ((function (switch__44299__auto__,c__44387__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__44300__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__44300__auto____0 = (function (){
var statearr_48066 = [null,null,null,null,null,null,null,null,null];
(statearr_48066[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__44300__auto__);

(statearr_48066[(1)] = (1));

return statearr_48066;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__44300__auto____1 = (function (state_48062){
while(true){
var ret_value__44301__auto__ = (function (){try{while(true){
var result__44302__auto__ = switch__44299__auto__.call(null,state_48062);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44302__auto__;
}
break;
}
}catch (e48067){if((e48067 instanceof Object)){
var ex__44303__auto__ = e48067;
var statearr_48068_48070 = state_48062;
(statearr_48068_48070[(5)] = ex__44303__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48062);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48067;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48071 = state_48062;
state_48062 = G__48071;
continue;
} else {
return ret_value__44301__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__44300__auto__ = function(state_48062){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__44300__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__44300__auto____1.call(this,state_48062);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__44300__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__44300__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__44300__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__44300__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__44300__auto__;
})()
;})(switch__44299__auto__,c__44387__auto__))
})();
var state__44389__auto__ = (function (){var statearr_48069 = f__44388__auto__.call(null);
(statearr_48069[(6)] = c__44387__auto__);

return statearr_48069;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44389__auto__);
});})(c__44387__auto__))
);

return c__44387__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";
figwheel.client.heads_up.close_bad_compile_screen = (function figwheel$client$heads_up$close_bad_compile_screen(){
var temp__4657__auto__ = document.getElementById("figwheelFailScreen");
if(cljs.core.truth_(temp__4657__auto__)){
var el = temp__4657__auto__;
return goog.dom.removeNode(el);
} else {
return null;
}
});
figwheel.client.heads_up.bad_compile_screen = (function figwheel$client$heads_up$bad_compile_screen(){
var body = (goog.dom.getElementsByTagNameAndClass("body")[(0)]);
figwheel.client.heads_up.close_bad_compile_screen.call(null);

return goog.dom.append(body,goog.dom.createDom("div",({"id": "figwheelFailScreen", "style": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("background-color: rgba(24, 26, 38, 0.95);"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("position: absolute;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("z-index: 9000;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("width: 100vw;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("height: 100vh;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("top: 0px; left: 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-family: monospace")].join('')}),goog.dom.createDom("div",({"class": "message", "style": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("color: #FFF5DB;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("width: 100vw;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("margin: auto;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("margin-top: 10px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("text-align: center; "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("padding: 2px 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 13px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("position: relative")].join('')}),goog.dom.createDom("a",({"onclick": ((function (body){
return (function (e){
e.preventDefault();

return figwheel.client.heads_up.close_bad_compile_screen.call(null);
});})(body))
, "href": "javascript:", "style": "position: absolute; right: 10px; top: 10px; color: #666"}),"X"),goog.dom.createDom("h2",({"style": "color: #FFF5DB"}),"Figwheel Says: Your code didn't compile."),goog.dom.createDom("div",({"style": "font-size: 12px"}),goog.dom.createDom("p",({"style": "color: #D07D7D;"}),"Keep trying. This page will auto-refresh when your code compiles successfully.")))));
});

//# sourceMappingURL=heads_up.js.map?rel=1503441680613