// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.connect.build_dev');
goog.require('cljs.core');
goog.require('cnmipss.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__42694__delegate = function (x){
if(cljs.core.truth_(cnmipss.core.on_js_reload)){
return cljs.core.apply.call(null,cnmipss.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'cnmipss.core/on-js-reload' is missing");
}
};
var G__42694 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__42695__i = 0, G__42695__a = new Array(arguments.length -  0);
while (G__42695__i < G__42695__a.length) {G__42695__a[G__42695__i] = arguments[G__42695__i + 0]; ++G__42695__i;}
  x = new cljs.core.IndexedSeq(G__42695__a,0);
} 
return G__42694__delegate.call(this,x);};
G__42694.cljs$lang$maxFixedArity = 0;
G__42694.cljs$lang$applyTo = (function (arglist__42696){
var x = cljs.core.seq(arglist__42696);
return G__42694__delegate(x);
});
G__42694.cljs$core$IFn$_invoke$arity$variadic = G__42694__delegate;
return G__42694;
})()
,new cljs.core.Keyword(null,"open-urls","open-urls",-1478664930),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http://localhost:3449/index.html"], null),new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=build_dev.js.map?rel=1500617988083