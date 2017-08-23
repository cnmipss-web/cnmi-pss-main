// Compiled by ClojureScript 1.9.671 {}
goog.provide('klang.core');
goog.require('cljs.core');
goog.require('cljsjs.highlight');
goog.require('cljsjs.highlight.langs.clojure');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('goog.style');
goog.require('goog.ui.KeyboardShortcutHandler');
if(typeof klang.core.db !== 'undefined'){
} else {
klang.core.db = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"showing?","showing?",2094921488),false,new cljs.core.Keyword(null,"max-logs","max-logs",887829836),(500),new cljs.core.Keyword(null,"search","search",1564939822),"",new cljs.core.Keyword(null,"logs","logs",1068148008),[],new cljs.core.Keyword(null,"frozen-at","frozen-at",-773820763),null], null));
}
klang.core._BANG__BANG_ = (function klang$core$_BANG__BANG_(var_args){
var args__37889__auto__ = [];
var len__37882__auto___42708 = arguments.length;
var i__37883__auto___42709 = (0);
while(true){
if((i__37883__auto___42709 < len__37882__auto___42708)){
args__37889__auto__.push((arguments[i__37883__auto___42709]));

var G__42710 = (i__37883__auto___42709 + (1));
i__37883__auto___42709 = G__42710;
continue;
} else {
}
break;
}

var argseq__37890__auto__ = ((((0) < args__37889__auto__.length))?(new cljs.core.IndexedSeq(args__37889__auto__.slice((0)),(0),null)):null);
return klang.core._BANG__BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__37890__auto__);
});

klang.core._BANG__BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,klang.core.db,args);
});

klang.core._BANG__BANG_.cljs$lang$maxFixedArity = (0);

klang.core._BANG__BANG_.cljs$lang$applyTo = (function (seq42707){
return klang.core._BANG__BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42707));
});

/**
 * Ensures there is a div element in the body and returns it.
 */
klang.core.dom_el = (function klang$core$dom_el(){
var domid = "__klang2__id__";
var domel = document.getElementById(domid);
var or__36757__auto__ = domel;
if(cljs.core.truth_(or__36757__auto__)){
return or__36757__auto__;
} else {
var newdom = (function (){var G__42711 = document.createElement("div");
G__42711.setAttribute("id",domid);

return G__42711;
})();
document.body.appendChild(newdom);

return newdom;
}
});
klang.core.add_array = (function klang$core$add_array(ary,xs){
cljs.core.reduce.call(null,(function (ary__$1,x){
ary__$1.push(x);

return ary__$1;
}),ary,xs);

return ary;
});
/**
 * Helper for creating dom elements.
 */
klang.core.h = (function klang$core$h(var_args){
var args__37889__auto__ = [];
var len__37882__auto___42715 = arguments.length;
var i__37883__auto___42716 = (0);
while(true){
if((i__37883__auto___42716 < len__37882__auto___42715)){
args__37889__auto__.push((arguments[i__37883__auto___42716]));

var G__42717 = (i__37883__auto___42716 + (1));
i__37883__auto___42716 = G__42717;
continue;
} else {
}
break;
}

var argseq__37890__auto__ = ((((2) < args__37889__auto__.length))?(new cljs.core.IndexedSeq(args__37889__auto__.slice((2)),(0),null)):null);
return klang.core.h.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37890__auto__);
});

klang.core.h.cljs$core$IFn$_invoke$arity$variadic = (function (tag,props,children){
return React.createElement.apply(React.createElement,klang.core.add_array.call(null,[tag,props],children));
});

klang.core.h.cljs$lang$maxFixedArity = (2);

klang.core.h.cljs$lang$applyTo = (function (seq42712){
var G__42713 = cljs.core.first.call(null,seq42712);
var seq42712__$1 = cljs.core.next.call(null,seq42712);
var G__42714 = cljs.core.first.call(null,seq42712__$1);
var seq42712__$2 = cljs.core.next.call(null,seq42712__$1);
return klang.core.h.cljs$core$IFn$_invoke$arity$variadic(G__42713,G__42714,seq42712__$2);
});

/**
 * This is all done for performance... Smaller and more used functions can easier get optimized.
 */
klang.core.possibly_set_lifecycle_BANG_ = (function klang$core$possibly_set_lifecycle_BANG_(spec,name,f){
if(cljs.core.empty_QMARK_.call(null,f)){
} else {
goog.object.set(spec,name,f);
}

return null;
});
/**
 * The render function will always be called with 1 arg, the rum state.
 * It should return [dom rum-state].
 */
klang.core.build_class = (function klang$core$build_class(render,lcm){
var constr = (function (props){
var this$ = this;
React.Component.call(this$,props);

this$.props = props;

this$.state = ({"comp": this$});

return this$;
});
var should_update = (lcm["should-update"]);
var will_unmount = (lcm["will-unmount"]);
var will_mount = (lcm["will-mount"]);
var will_update = (lcm["will-update"]);
var did_update = (lcm["did-update"]);
var did_mount = (lcm["did-mount"]);
var class_props = (lcm["class-properties"]);
goog.inherits(constr,React.Component);

goog.object.set(constr,"displayName",(lcm["name"]));

var proto = constr.prototype;
goog.object.extend(proto,({"render": ((function (proto,constr,should_update,will_unmount,will_mount,will_update,did_update,did_mount,class_props){
return (function (){
var this$ = this;
return cljs.core.apply.call(null,render,(this$.props["props"]));
});})(proto,constr,should_update,will_unmount,will_mount,will_update,did_update,did_mount,class_props))
}));

klang.core.possibly_set_lifecycle_BANG_.call(null,proto,"componentWillMount",will_mount);

klang.core.possibly_set_lifecycle_BANG_.call(null,proto,"componentDidMount",did_mount);

klang.core.possibly_set_lifecycle_BANG_.call(null,proto,"componentDidUpdate",did_update);

klang.core.possibly_set_lifecycle_BANG_.call(null,proto,"componentWillUnmount",will_unmount);

if(!((will_update == null))){
goog.object.set(proto,"componentWillUpdate",will_update);
} else {
}

if(!((should_update == null))){
goog.object.set(proto,"shouldComponentUpdate",should_update);
} else {
}

if(!((class_props == null))){
var temp__4661__auto___42718 = cljs.core.clj__GT_js.call(null,cljs.core.apply.call(null,cljs.core.merge,class_props));
if((temp__4661__auto___42718 == null)){
} else {
var cp_42719 = temp__4661__auto___42718;
goog.object.extend(proto,cp_42719);
}
} else {
}

return constr;
});
klang.core.component = (function klang$core$component(lcm,render){
var cls = klang.core.build_class.call(null,render,lcm);
var key_fn = (lcm["key-fn"]);
return ((function (cls,key_fn){
return (function() { 
var klang$core$component_$_component__delegate = function (props){
var react_props = ((!((key_fn == null)))?({"props": props, "key": cljs.core.apply.call(null,key_fn,props)}):({"props": props}));
return React.createElement(cls,react_props);
};
var klang$core$component_$_component = function (var_args){
var props = null;
if (arguments.length > 0) {
var G__42720__i = 0, G__42720__a = new Array(arguments.length -  0);
while (G__42720__i < G__42720__a.length) {G__42720__a[G__42720__i] = arguments[G__42720__i + 0]; ++G__42720__i;}
  props = new cljs.core.IndexedSeq(G__42720__a,0,null);
} 
return klang$core$component_$_component__delegate.call(this,props);};
klang$core$component_$_component.cljs$lang$maxFixedArity = 0;
klang$core$component_$_component.cljs$lang$applyTo = (function (arglist__42721){
var props = cljs.core.seq(arglist__42721);
return klang$core$component_$_component__delegate(props);
});
klang$core$component_$_component.cljs$core$IFn$_invoke$arity$variadic = klang$core$component_$_component__delegate;
return klang$core$component_$_component;
})()
;
;})(cls,key_fn))
});
/**
 * Add component to the DOM tree. Idempotent. Subsequent mounts will just update component
 */
klang.core.mount = (function klang$core$mount(component,node){
return ReactDOM.render(component,node);
});
/**
 * Removes component from the DOM tree
 */
klang.core.unmount = (function klang$core$unmount(node){
return ReactDOM.unmountComponentAtNode(node);
});
if(typeof klang.core.id_counter !== 'undefined'){
} else {
klang.core.id_counter = (0);
}
/**
 * Generates a new log id.
 */
klang.core.gens = (function klang$core$gens(){
klang.core.id_counter = (klang.core.id_counter + (1));

return klang.core.id_counter;
});
/**
 * Freezes the UI. Toggle on no param
 */
klang.core.toggle_freeze = (function klang$core$toggle_freeze(){
return klang.core._BANG__BANG_.call(null,cljs.core.update,new cljs.core.Keyword(null,"frozen-at","frozen-at",-773820763),(function (idx){
if(!((idx == null))){
return null;
} else {
return klang.core.id_counter;
}
}));
});
/**
 * Makes the overlay show/hide. Toggle on no param
 */
klang.core.show_BANG_ = (function klang$core$show_BANG_(var_args){
var G__42723 = arguments.length;
switch (G__42723) {
case 0:
return klang.core.show_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return klang.core.show_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

klang.core.show_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return klang.core._BANG__BANG_.call(null,cljs.core.update,new cljs.core.Keyword(null,"showing?","showing?",2094921488),cljs.core.not);
});

klang.core.show_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (tf){
return klang.core._BANG__BANG_.call(null,cljs.core.assoc,new cljs.core.Keyword(null,"showing?","showing?",2094921488),tf);
});

klang.core.show_BANG_.cljs$lang$maxFixedArity = 1;

/**
 * Return true if the namespace p is a parent of c. Expects two string
 */
klang.core.parent_QMARK_ = (function klang$core$parent_QMARK_(p,c){
var pd = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".")].join('');
return cljs.core._EQ_.call(null,cljs.core.subs.call(null,c,(0),cljs.core.count.call(null,pd)),pd);
});
/**
 * Return true if the namespace p==c or p is a parent of c. Expects two string
 */
klang.core.self_or_parent_QMARK_ = (function klang$core$self_or_parent_QMARK_(p,c){
var or__36757__auto__ = cljs.core._EQ_.call(null,c,p);
if(or__36757__auto__){
return or__36757__auto__;
} else {
return klang.core.parent_QMARK_.call(null,p,c);
}
});
klang.core.format_time = (function klang$core$format_time(d){
if((d instanceof Date)){
return (d.toJSON().split("T")[(1)]).slice((0),(-1));
} else {
return null;
}
});
/**
 * Takes a log event and dumps all kinds of info about it to the developer
 *   console. Works under chrome. Probably also under firefox.
 */
klang.core.dump_to_console_BANG_ = (function klang$core$dump_to_console_BANG_(lg_ev){
console.group(goog.string.format("%s%s%s%s -- %s",new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(lg_ev),((cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(lg_ev)))?"":"/"),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(lg_ev),(function (){var temp__4659__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(lg_ev));
if((temp__4659__auto__ == null)){
return "";
} else {
var lnum = temp__4659__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(":"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(lnum)].join('');
}
})(),klang.core.format_time.call(null,new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(lg_ev))));

var temp__4661__auto___42750 = new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(lg_ev);
if((temp__4661__auto___42750 == null)){
} else {
var meta_42751 = temp__4661__auto___42750;
console.group("Meta Data");

var G__42725_42752 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(meta_42751);
if((G__42725_42752 == null)){
} else {
console.log("Filename: %s",G__42725_42752);
}

var temp__4661__auto___42753__$1 = new cljs.core.Keyword(null,"trace","trace",-1082747415).cljs$core$IFn$_invoke$arity$1(meta_42751);
if((temp__4661__auto___42753__$1 == null)){
} else {
var trace_42754 = temp__4661__auto___42753__$1;
console.log("TRACE:");

console.log(trace_42754);
}

var temp__4661__auto___42755__$1 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(meta_42751));
if((temp__4661__auto___42755__$1 == null)){
} else {
var env_42756 = temp__4661__auto___42755__$1;
console.group("Local Bindings");

var seq__42726_42757 = cljs.core.seq.call(null,env_42756);
var chunk__42727_42758 = null;
var count__42728_42759 = (0);
var i__42729_42760 = (0);
while(true){
if((i__42729_42760 < count__42728_42759)){
var vec__42730_42761 = cljs.core._nth.call(null,chunk__42727_42758,i__42729_42760);
var k_42762 = cljs.core.nth.call(null,vec__42730_42761,(0),null);
var v_42763 = cljs.core.nth.call(null,vec__42730_42761,(1),null);
console.log("%s : %o",cljs.core.pr_str.call(null,k_42762),v_42763);

var G__42764 = seq__42726_42757;
var G__42765 = chunk__42727_42758;
var G__42766 = count__42728_42759;
var G__42767 = (i__42729_42760 + (1));
seq__42726_42757 = G__42764;
chunk__42727_42758 = G__42765;
count__42728_42759 = G__42766;
i__42729_42760 = G__42767;
continue;
} else {
var temp__4657__auto___42768 = cljs.core.seq.call(null,seq__42726_42757);
if(temp__4657__auto___42768){
var seq__42726_42769__$1 = temp__4657__auto___42768;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42726_42769__$1)){
var c__37577__auto___42770 = cljs.core.chunk_first.call(null,seq__42726_42769__$1);
var G__42771 = cljs.core.chunk_rest.call(null,seq__42726_42769__$1);
var G__42772 = c__37577__auto___42770;
var G__42773 = cljs.core.count.call(null,c__37577__auto___42770);
var G__42774 = (0);
seq__42726_42757 = G__42771;
chunk__42727_42758 = G__42772;
count__42728_42759 = G__42773;
i__42729_42760 = G__42774;
continue;
} else {
var vec__42733_42775 = cljs.core.first.call(null,seq__42726_42769__$1);
var k_42776 = cljs.core.nth.call(null,vec__42733_42775,(0),null);
var v_42777 = cljs.core.nth.call(null,vec__42733_42775,(1),null);
console.log("%s : %o",cljs.core.pr_str.call(null,k_42776),v_42777);

var G__42778 = cljs.core.next.call(null,seq__42726_42769__$1);
var G__42779 = null;
var G__42780 = (0);
var G__42781 = (0);
seq__42726_42757 = G__42778;
chunk__42727_42758 = G__42779;
count__42728_42759 = G__42780;
i__42729_42760 = G__42781;
continue;
}
} else {
}
}
break;
}

console.groupEnd();
}

var temp__4661__auto___42782__$1 = cljs.core.seq.call(null,cljs.core.dissoc.call(null,meta_42751,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"trace","trace",-1082747415)));
if((temp__4661__auto___42782__$1 == null)){
} else {
var meta_SINGLEQUOTE__42783 = temp__4661__auto___42782__$1;
var seq__42736_42784 = cljs.core.seq.call(null,meta_SINGLEQUOTE__42783);
var chunk__42737_42785 = null;
var count__42738_42786 = (0);
var i__42739_42787 = (0);
while(true){
if((i__42739_42787 < count__42738_42786)){
var vec__42740_42788 = cljs.core._nth.call(null,chunk__42737_42785,i__42739_42787);
var k_42789 = cljs.core.nth.call(null,vec__42740_42788,(0),null);
var v_42790 = cljs.core.nth.call(null,vec__42740_42788,(1),null);
console.log("%s : %o",cljs.core.pr_str.call(null,k_42789),v_42790);

var G__42791 = seq__42736_42784;
var G__42792 = chunk__42737_42785;
var G__42793 = count__42738_42786;
var G__42794 = (i__42739_42787 + (1));
seq__42736_42784 = G__42791;
chunk__42737_42785 = G__42792;
count__42738_42786 = G__42793;
i__42739_42787 = G__42794;
continue;
} else {
var temp__4657__auto___42795 = cljs.core.seq.call(null,seq__42736_42784);
if(temp__4657__auto___42795){
var seq__42736_42796__$1 = temp__4657__auto___42795;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42736_42796__$1)){
var c__37577__auto___42797 = cljs.core.chunk_first.call(null,seq__42736_42796__$1);
var G__42798 = cljs.core.chunk_rest.call(null,seq__42736_42796__$1);
var G__42799 = c__37577__auto___42797;
var G__42800 = cljs.core.count.call(null,c__37577__auto___42797);
var G__42801 = (0);
seq__42736_42784 = G__42798;
chunk__42737_42785 = G__42799;
count__42738_42786 = G__42800;
i__42739_42787 = G__42801;
continue;
} else {
var vec__42743_42802 = cljs.core.first.call(null,seq__42736_42796__$1);
var k_42803 = cljs.core.nth.call(null,vec__42743_42802,(0),null);
var v_42804 = cljs.core.nth.call(null,vec__42743_42802,(1),null);
console.log("%s : %o",cljs.core.pr_str.call(null,k_42803),v_42804);

var G__42805 = cljs.core.next.call(null,seq__42736_42796__$1);
var G__42806 = null;
var G__42807 = (0);
var G__42808 = (0);
seq__42736_42784 = G__42805;
chunk__42737_42785 = G__42806;
count__42738_42786 = G__42807;
i__42739_42787 = G__42808;
continue;
}
} else {
}
}
break;
}
}

console.groupEnd();
}

var seq__42746_42809 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"msg","msg",-1386103444).cljs$core$IFn$_invoke$arity$1(lg_ev));
var chunk__42747_42810 = null;
var count__42748_42811 = (0);
var i__42749_42812 = (0);
while(true){
if((i__42749_42812 < count__42748_42811)){
var v_42813 = cljs.core._nth.call(null,chunk__42747_42810,i__42749_42812);
if(typeof v_42813 === 'string'){
console.log("%o",v_42813);
} else {
console.log("%o --- %s",v_42813,goog.string.truncate(cljs.core.pr_str.call(null,v_42813),(20)));
}

var G__42814 = seq__42746_42809;
var G__42815 = chunk__42747_42810;
var G__42816 = count__42748_42811;
var G__42817 = (i__42749_42812 + (1));
seq__42746_42809 = G__42814;
chunk__42747_42810 = G__42815;
count__42748_42811 = G__42816;
i__42749_42812 = G__42817;
continue;
} else {
var temp__4657__auto___42818 = cljs.core.seq.call(null,seq__42746_42809);
if(temp__4657__auto___42818){
var seq__42746_42819__$1 = temp__4657__auto___42818;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42746_42819__$1)){
var c__37577__auto___42820 = cljs.core.chunk_first.call(null,seq__42746_42819__$1);
var G__42821 = cljs.core.chunk_rest.call(null,seq__42746_42819__$1);
var G__42822 = c__37577__auto___42820;
var G__42823 = cljs.core.count.call(null,c__37577__auto___42820);
var G__42824 = (0);
seq__42746_42809 = G__42821;
chunk__42747_42810 = G__42822;
count__42748_42811 = G__42823;
i__42749_42812 = G__42824;
continue;
} else {
var v_42825 = cljs.core.first.call(null,seq__42746_42819__$1);
if(typeof v_42825 === 'string'){
console.log("%o",v_42825);
} else {
console.log("%o --- %s",v_42825,goog.string.truncate(cljs.core.pr_str.call(null,v_42825),(20)));
}

var G__42826 = cljs.core.next.call(null,seq__42746_42819__$1);
var G__42827 = null;
var G__42828 = (0);
var G__42829 = (0);
seq__42746_42809 = G__42826;
chunk__42747_42810 = G__42827;
count__42748_42811 = G__42828;
i__42749_42812 = G__42829;
continue;
}
} else {
}
}
break;
}

return console.groupEnd();
});
/**
 * Returns a color for the given severity
 * http://www.w3schools.com/cssref/css_colornames.asp
 */
klang.core.severity__GT_color = (function klang$core$severity__GT_color(severity){
var G__42830 = severity;
switch (G__42830) {
case "DEBG":
return "gray";

break;
case "TRAC":
return "darkgray";

break;
case "INFO":
return "steelblue";

break;
case "ERRO":
return "darkred";

break;
case "CRIT":
return "red";

break;
case "FATA":
return "firebrick";

break;
case "WARN":
return "orange";

break;
default:
return null;

}
});
/**
 * Returns a string containing HTML that highlights the message. Takes a string
 *   of clojure syntax. Such as map, set etc.
 *   Ex:
 *   (hl-clj-str "{:foo :bar}")
 */
klang.core.hl_clj_str = (function klang$core$hl_clj_str(msg){
return hljs.highlight("clojure",msg,true).value;
});
/**
 * Converts a message to a string.
 */
klang.core.msg__GT_str = (function klang$core$msg__GT_str(msg){
var s = cljs.core.pr_str.call(null,msg);
return s.substr((1),(s.length - (2)));
});
klang.core.render_msg = (function klang$core$render_msg(msg){
return klang.core.h.call(null,"span",({"dangerouslySetInnerHTML": ({"__html": klang.core.hl_clj_str.call(null,klang.core.msg__GT_str.call(null,msg))})}));
});
/**
 * Renders a single log message.
 */
klang.core.render_log_event = klang.core.component.call(null,({"name": "LogEvent", "key-fn": (function (props){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props);
}), "should-update": (function (){
return false;
})}),(function (p__42832){
var map__42833 = p__42832;
var map__42833__$1 = ((((!((map__42833 == null)))?((((map__42833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42833.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42833):map__42833);
var lg_ev = map__42833__$1;
var time = cljs.core.get.call(null,map__42833__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var ns = cljs.core.get.call(null,map__42833__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var type = cljs.core.get.call(null,map__42833__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var msg = cljs.core.get.call(null,map__42833__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
return klang.core.h.call(null,"li",({"style": ({"listStyleType": "none"})}),klang.core.format_time.call(null,time)," ",ns,((cljs.core.empty_QMARK_.call(null,ns))?null:"/"),klang.core.h.call(null,"span",({"style": ({"color": klang.core.severity__GT_color.call(null,type)})}),type)," ",klang.core.h.call(null,"span",({"style": ({"cursor": "pointer"}), "onClick": ((function (map__42833,map__42833__$1,lg_ev,time,ns,type,msg){
return (function (){
return klang.core.dump_to_console_BANG_.call(null,lg_ev);
});})(map__42833,map__42833__$1,lg_ev,time,ns,type,msg))
}),klang.core.render_msg.call(null,msg)));
}));
/**
 * Returns a transducer that filters given the log messages according to the
 *   search term given in the database for the current active tab.
 *   Does a full text search on time, namespace, type and message.
 *   The format is like:
 *   11:28:27.793 my.ns/INFO ["Log msg 0"]
 */
klang.core.search_filter_fn = (function klang$core$search_filter_fn(search){
var search__$1 = search.replace(" ",".*");
var re = (function (){try{return (new RegExp(search__$1,"i"));
}catch (e42835){var _ = e42835;
return RegExp("");
}})();
return ((function (search__$1,re){
return (function (lg_ev){
var log_str = [klang.core.format_time.call(null,new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(lg_ev))," ",new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(lg_ev),((cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(lg_ev)))?null:"/"),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(lg_ev)," ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"msg","msg",-1386103444).cljs$core$IFn$_invoke$arity$1(lg_ev))].join('')].join("");
var test = re.test(log_str);
if((void 0 === test)){
return true;
} else {
return test;
}
});
;})(search__$1,re))
});
/**
 * Renders an array of log messages.
 */
klang.core.render_logs = (function klang$core$render_logs(logs){
return klang.core.h.call(null,"ul",({"style": ({"padding": ".5em", "margin": "0em", "lineHeight": "1.06em"})}),(function (){var frozen_idx = new cljs.core.Keyword(null,"frozen-at","frozen-at",-773820763).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,klang.core.db));
var last_to_start = ((!((frozen_idx == null)))?frozen_idx:cljs.core.count.call(null,logs));
var search = cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"search","search",1564939822).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,klang.core.db)));
var filter_fn = (cljs.core.truth_(search)?klang.core.search_filter_fn.call(null,search):cljs.core.identity);
var aout = [];
var n__37681__auto___42836 = last_to_start;
var i_42837 = (0);
while(true){
if((i_42837 < n__37681__auto___42836)){
var lg_ev_42838 = (logs[((last_to_start - i_42837) - (1))]);
if(filter_fn.call(null,lg_ev_42838)){
aout.push(klang.core.render_log_event.call(null,lg_ev_42838));
} else {
}

var G__42839 = (i_42837 + (1));
i_42837 = G__42839;
continue;
} else {
}
break;
}

return aout;
})());
});
/**
 * Renders the entire log message overlay in a div when :showing? is true.
 */
klang.core.render_overlay = (function klang$core$render_overlay(){
return klang.core.h.call(null,"div",({"style": ({"top": "6px", "width": "calc(100% - 12px)", "fontFamily": "monospace", "zIndex": (9922), "display": (cljs.core.truth_(new cljs.core.Keyword(null,"showing?","showing?",2094921488).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,klang.core.db)))?"block":"none"), "position": "fixed", "fontSize": "90%", "height": "calc(100% - 12px)", "left": "6px"})}),klang.core.h.call(null,"div",({"style": ({"height": "28px", "width": "calc(100% - 12px)", "justifyContent": "center", "display": "flex"})}),klang.core.h.call(null,"input",({"style": ({"background": "#000", "color": "white", "width": "350px"}), "onChange": (function (e){
return klang.core._BANG__BANG_.call(null,cljs.core.assoc,new cljs.core.Keyword(null,"search","search",1564939822),e.target.value);
}), "type": "text", "defaultValue": new cljs.core.Keyword(null,"search","search",1564939822).cljs$core$IFn$_invoke$arity$2(cljs.core.deref.call(null,klang.core.db),""), "placeholder": "Search"})),klang.core.h.call(null,"button",({"style": ({"cursor": "pointer", "color": (cljs.core.truth_(new cljs.core.Keyword(null,"frozen-at","frozen-at",-773820763).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,klang.core.db)))?"orange":"green")}), "onClick": (function (){
return klang.core.toggle_freeze.call(null);
})}),(cljs.core.truth_(new cljs.core.Keyword(null,"frozen-at","frozen-at",-773820763).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,klang.core.db)))?"Thaw":"Freeze"))),klang.core.h.call(null,"div",({"style": ({"color": "#fff", "width": "calc(100% - 12px)", "background": "#000", "overflowY": "auto", "opacity": 0.9, "padding": (0), "outline": "none", "zIndex": (9922), "position": "fixed", "height": "calc(100% - 40px)"})}),klang.core.render_logs.call(null,new cljs.core.Keyword(null,"logs","logs",1068148008).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,klang.core.db)))));
});
klang.core.css_molokai = (function klang$core$css_molokai(){
return ".hljs {\n  display: block;\n  overflow-x: auto;\n  padding: 0.2em;\n  background: #23241f;\n  -webkit-text-size-adjust: none;\n}\n.hljs,.hljs-tag,.css .hljs-rule,.css .hljs-value,.css .hljs-function .hljs-preprocessor,\n.hljs-pragma {\n  color: #f8f8f2;\n}\n.hljs-strongemphasis,.hljs-strong,.hljs-emphasis {\n  color: #a8a8a2;\n}\n.hljs-bullet,.hljs-blockquote,.hljs-horizontal_rule,.hljs-number,.hljs-regexp,\n.alias .hljs-keyword,.hljs-literal,.hljs-hexcolor {\n  color: #ae81ff;\n}\n.hljs-tag .hljs-value,.hljs-code,.hljs-title,.css .hljs-class,\n.hljs-class .hljs-title:last-child {\n  color: #a6e22e;\n}\n.hljs-link_url {\n  font-size: 80%;\n}\n.hljs-strong,.hljs-strongemphasis {\n  font-weight: bold;\n}\n.hljs-emphasis,.hljs-strongemphasis,.hljs-class .hljs-title:last-child,.hljs-typename {\n  font-style: italic;\n}\n.hljs-keyword,.hljs-function,.hljs-change,.hljs-winutils,.hljs-flow,.hljs-header,.hljs-attribute,\n.hljs-symbol,.hljs-symbol .hljs-string,.hljs-tag .hljs-title,.hljs-value,.alias .hljs-keyword:first-child,\n.css .hljs-tag,.css .unit,.css .hljs-important {\n  color: #f92672;\n}\n.hljs-function .hljs-keyword,.hljs-class .hljs-keyword:first-child,.hljs-aspect .hljs-keyword:first-child,\n.hljs-constant,.hljs-typename,.hljs-name,.css .hljs-attribute {\n  color: #66d9ef;\n}\n.hljs-variable,.hljs-params,.hljs-class .hljs-title,.hljs-aspect .hljs-title {\n  color: #f8f8f2;\n}\n.hljs-string,.hljs-subst,.hljs-type,.hljs-built_in,.hljs-attr_selector,.hljs-pseudo,.hljs-addition,\n.hljs-stream,.hljs-envvar,.hljs-prompt,.hljs-link_label,.hljs-link_url {\n  color: #e6db74;\n}\n.hljs-comment,.hljs-javadoc,.hljs-annotation,.hljs-decorator,.hljs-pi,.hljs-doctype,.hljs-deletion,\n.hljs-shebang {\n  color: #75715e;\n}";
});
/**
 * Installs a Keyboard Shortcut handler that show/hide the log overlay.
 * Call the return function to unregister.
 */
klang.core.install_shortcut_BANG_ = (function klang$core$install_shortcut_BANG_(shortcut){
var temp__4661__auto___42840 = new cljs.core.Keyword(null,"shortcut-keys","shortcut-keys",-1570032504).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,klang.core.db));
if((temp__4661__auto___42840 == null)){
} else {
var prev_42841 = temp__4661__auto___42840;
prev_42841.call(null);
}

var handler = (new goog.ui.KeyboardShortcutHandler(window));
handler.registerShortcut("klang.toggle",shortcut);

goog.events.listen(handler,goog.ui.KeyboardShortcutHandler.EventType.SHORTCUT_TRIGGERED,((function (handler){
return (function (e){
return klang.core.show_BANG_.call(null);
});})(handler))
);

console.info("Klang: Keyboard shortcut installed:",shortcut);

return klang.core._BANG__BANG_.call(null,cljs.core.assoc,new cljs.core.Keyword(null,"shortcut-keys","shortcut-keys",-1570032504),((function (handler){
return (function (){
return handler.unregisterShortcut(shortcut);
});})(handler))
);
});
/**
 * Only keep the last n logs. If nil: No truncating.
 */
klang.core.set_max_logs_BANG_ = (function klang$core$set_max_logs_BANG_(n){
return klang.core._BANG__BANG_.call(null,cljs.core.assoc,new cljs.core.Keyword(null,"max-logs","max-logs",887829836),n);
});
klang.core.possibly_truncate = (function klang$core$possibly_truncate(db){
var temp__4661__auto__ = new cljs.core.Keyword(null,"max-logs","max-logs",887829836).cljs$core$IFn$_invoke$arity$1(db);
if((temp__4661__auto__ == null)){
return null;
} else {
var num = temp__4661__auto__;
var logs = new cljs.core.Keyword(null,"logs","logs",1068148008).cljs$core$IFn$_invoke$arity$1(db);
return logs.splice((0),(logs.length - num));
}
});
klang.core.rAF = window.requestAnimationFrame;
klang.core.scheduled_QMARK_ = false;
klang.core.request_rerender_BANG_ = (function klang$core$request_rerender_BANG_(){
if(klang.core.scheduled_QMARK_){
return null;
} else {
klang.core.scheduled_QMARK_ = true;

return klang.core.rAF.call(null,(function (){
klang.core.possibly_truncate.call(null,klang.core.db);

klang.core.mount.call(null,klang.core.render_overlay.call(null),klang.core.dom_el.call(null));

return klang.core.scheduled_QMARK_ = false;
}));
}
});
/**
 * This will get DCE'd!
 */
klang.core.ensure_klang_init = (new cljs.core.Delay((function (){
if(typeof React !== 'undefined'){
} else {
console.error("Klang: Can't find React. Load by yourself beforehand.");
}

klang.core.install_shortcut_BANG_.call(null,"m");

klang.core.set_max_logs_BANG_.call(null,(2000));

cljs.core.add_watch.call(null,klang.core.db,new cljs.core.Keyword(null,"rerender","rerender",-1601192263),klang.core.request_rerender_BANG_);

return goog.style.installStyles(klang.core.css_molokai.call(null));
}),null));
/**
 * This is the main log functions:
 *   - ns - string
 *   - severity - string, like "INFO" or "WARN"
 *   - msg0 - If the map {::meta-data {...}} attaches this to the msg
 *  Otherwise the first message
 */
klang.core.add_log_BANG_ = (function klang$core$add_log_BANG_(var_args){
var args__37889__auto__ = [];
var len__37882__auto___42846 = arguments.length;
var i__37883__auto___42847 = (0);
while(true){
if((i__37883__auto___42847 < len__37882__auto___42846)){
args__37889__auto__.push((arguments[i__37883__auto___42847]));

var G__42848 = (i__37883__auto___42847 + (1));
i__37883__auto___42847 = G__42848;
continue;
} else {
}
break;
}

var argseq__37890__auto__ = ((((3) < args__37889__auto__.length))?(new cljs.core.IndexedSeq(args__37889__auto__.slice((3)),(0),null)):null);
return klang.core.add_log_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__37890__auto__);
});

klang.core.add_log_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ns,severity,msg0,msg){
cljs.core.deref.call(null,klang.core.ensure_klang_init);

var db = cljs.core.deref.call(null,klang.core.db);
var meta = new cljs.core.Keyword("klang.core","meta-data","klang.core/meta-data",765484551).cljs$core$IFn$_invoke$arity$1(msg0);
var msg__$1 = ((!((meta == null)))?cljs.core.vec.call(null,msg):cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg0], null),msg));
new cljs.core.Keyword(null,"logs","logs",1068148008).cljs$core$IFn$_invoke$arity$1(db).push(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"time","time",1385887882),(new Date()),new cljs.core.Keyword(null,"id","id",-1388402092),klang.core.gens.call(null),new cljs.core.Keyword(null,"ns","ns",441598760),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join(''),new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.name.call(null,severity),new cljs.core.Keyword(null,"meta","meta",1499536964),meta,new cljs.core.Keyword(null,"msg","msg",-1386103444),msg__$1], null));

klang.core.request_rerender_BANG_.call(null);

if((cljs.core.count.call(null,msg__$1) > (0))){
return cljs.core.last.call(null,msg__$1);
} else {
return msg0;
}
});

klang.core.add_log_BANG_.cljs$lang$maxFixedArity = (3);

klang.core.add_log_BANG_.cljs$lang$applyTo = (function (seq42842){
var G__42843 = cljs.core.first.call(null,seq42842);
var seq42842__$1 = cljs.core.next.call(null,seq42842);
var G__42844 = cljs.core.first.call(null,seq42842__$1);
var seq42842__$2 = cljs.core.next.call(null,seq42842__$1);
var G__42845 = cljs.core.first.call(null,seq42842__$2);
var seq42842__$3 = cljs.core.next.call(null,seq42842__$2);
return klang.core.add_log_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__42843,G__42844,G__42845,seq42842__$3);
});

/**
 * Clears all logs
 */
klang.core.clear_BANG_ = (function klang$core$clear_BANG_(){
new cljs.core.Keyword(null,"logs","logs",1068148008).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,klang.core.db)).length = (0);

return klang.core.request_rerender_BANG_.call(null);
});

//# sourceMappingURL=core.js.map?rel=1503441675999