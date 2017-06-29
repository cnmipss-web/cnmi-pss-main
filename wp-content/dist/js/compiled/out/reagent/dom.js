// Compiled by ClojureScript 1.9.229 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('cljsjs.react.dom');
goog.require('reagent.debug');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(cljs.core.some_QMARK_.call(null,reagent.dom.imported)){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__25979__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_60949 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_60949){
return (function (){
var _STAR_always_update_STAR_60950 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_60950;
}});})(_STAR_always_update_STAR_60949))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_60949;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args60951 = [];
var len__27054__auto___60954 = arguments.length;
var i__27055__auto___60955 = (0);
while(true){
if((i__27055__auto___60955 < len__27054__auto___60954)){
args60951.push((arguments[i__27055__auto___60955]));

var G__60956 = (i__27055__auto___60955 + (1));
i__27055__auto___60955 = G__60956;
continue;
} else {
}
break;
}

var G__60953 = args60951.length;
switch (G__60953) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args60951.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module.call(null)["findDOMNode"])(this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__60962_60966 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__60963_60967 = null;
var count__60964_60968 = (0);
var i__60965_60969 = (0);
while(true){
if((i__60965_60969 < count__60964_60968)){
var v_60970 = cljs.core._nth.call(null,chunk__60963_60967,i__60965_60969);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_60970);

var G__60971 = seq__60962_60966;
var G__60972 = chunk__60963_60967;
var G__60973 = count__60964_60968;
var G__60974 = (i__60965_60969 + (1));
seq__60962_60966 = G__60971;
chunk__60963_60967 = G__60972;
count__60964_60968 = G__60973;
i__60965_60969 = G__60974;
continue;
} else {
var temp__4657__auto___60975 = cljs.core.seq.call(null,seq__60962_60966);
if(temp__4657__auto___60975){
var seq__60962_60976__$1 = temp__4657__auto___60975;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60962_60976__$1)){
var c__26790__auto___60977 = cljs.core.chunk_first.call(null,seq__60962_60976__$1);
var G__60978 = cljs.core.chunk_rest.call(null,seq__60962_60976__$1);
var G__60979 = c__26790__auto___60977;
var G__60980 = cljs.core.count.call(null,c__26790__auto___60977);
var G__60981 = (0);
seq__60962_60966 = G__60978;
chunk__60963_60967 = G__60979;
count__60964_60968 = G__60980;
i__60965_60969 = G__60981;
continue;
} else {
var v_60982 = cljs.core.first.call(null,seq__60962_60976__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_60982);

var G__60983 = cljs.core.next.call(null,seq__60962_60976__$1);
var G__60984 = null;
var G__60985 = (0);
var G__60986 = (0);
seq__60962_60966 = G__60983;
chunk__60963_60967 = G__60984;
count__60964_60968 = G__60985;
i__60965_60969 = G__60986;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map?rel=1498707047520