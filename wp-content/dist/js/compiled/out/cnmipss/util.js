// Compiled by ClojureScript 1.9.671 {}
goog.provide('cnmipss.util');
goog.require('cljs.core');
var transforms_40525 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"keys","keys",1068423698),cljs.core.keyword,new cljs.core.Keyword(null,"strs","strs",1175537277),cljs.core.str,new cljs.core.Keyword(null,"syms","syms",-1575891762),cljs.core.identity], null);
var ret__37927__auto___40526 = (function (){
/**
 * Create a map in which, for each symbol S in vars, (keyword S) is a
 *   key mapping to the value of S in the current scope. If passed an optional
 *   :strs or :syms first argument, use strings or symbols as the keys instead.
 */
cnmipss.util.keyed = ((function (transforms_40525){
return (function cnmipss$util$keyed(var_args){
var G__40524 = arguments.length;
switch (G__40524) {
case 3:
return cnmipss.util.keyed.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cnmipss.util.keyed.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});})(transforms_40525))
;

cnmipss.util.keyed.cljs$core$IFn$_invoke$arity$3 = ((function (transforms_40525){
return (function (_AMPERSAND_form,_AMPERSAND_env,vars){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cnmipss.util","keyed","cnmipss.util/keyed",-191738580,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"keys","keys",1068423698)),(function (){var x__37605__auto__ = vars;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__37605__auto__);
})())));
});})(transforms_40525))
;

cnmipss.util.keyed.cljs$core$IFn$_invoke$arity$4 = ((function (transforms_40525){
return (function (_AMPERSAND_form,_AMPERSAND_env,key_type,vars){
var transform = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.list,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),transforms_40525.call(null,key_type));
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,transform,cljs.core.identity),vars));
});})(transforms_40525))
;

cnmipss.util.keyed.cljs$lang$maxFixedArity = 4;

return null;
})()
;
cnmipss.util.keyed.cljs$lang$macro = true;


//# sourceMappingURL=util.js.map?rel=1502335521640