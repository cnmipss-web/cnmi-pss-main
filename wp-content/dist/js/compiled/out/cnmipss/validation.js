// Compiled by ClojureScript 1.9.671 {}
goog.provide('cnmipss.validation');
goog.require('cljs.core');
goog.require('struct.core');
cnmipss.validation.email_QMARK_ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"message","message",-406056002),"Must be a valid email address",new cljs.core.Keyword(null,"optional","optional",2053951509),false,new cljs.core.Keyword(null,"validate","validate",-201300827),(function (p1__41704_SHARP_){
return !((cljs.core.re_find.call(null,/^(([^<>()\[\]\\.,;:\s@\"]+(\.[^<>()\[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,p1__41704_SHARP_) == null));
})], null);
cnmipss.validation.tel_QMARK_ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"message","message",-406056002),"Must be a valid telephone number",new cljs.core.Keyword(null,"optional","optional",2053951509),false,new cljs.core.Keyword(null,"validate","validate",-201300827),(function (p1__41705_SHARP_){
return !((cljs.core.re_find.call(null,/^(\+\d{1,2}\s)?(\(?\d{3}\)?)?[\s.-]?\d{3}[\s.-]?\d{4}$/,p1__41705_SHARP_) == null));
})], null);

//# sourceMappingURL=validation.js.map?rel=1503532140232