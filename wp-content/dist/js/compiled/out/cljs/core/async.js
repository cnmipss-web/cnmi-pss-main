// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args29714 = [];
var len__27064__auto___29720 = arguments.length;
var i__27065__auto___29721 = (0);
while(true){
if((i__27065__auto___29721 < len__27064__auto___29720)){
args29714.push((arguments[i__27065__auto___29721]));

var G__29722 = (i__27065__auto___29721 + (1));
i__27065__auto___29721 = G__29722;
continue;
} else {
}
break;
}

var G__29716 = args29714.length;
switch (G__29716) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29714.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async29717 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29717 = (function (f,blockable,meta29718){
this.f = f;
this.blockable = blockable;
this.meta29718 = meta29718;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29717.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29719,meta29718__$1){
var self__ = this;
var _29719__$1 = this;
return (new cljs.core.async.t_cljs$core$async29717(self__.f,self__.blockable,meta29718__$1));
});

cljs.core.async.t_cljs$core$async29717.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29719){
var self__ = this;
var _29719__$1 = this;
return self__.meta29718;
});

cljs.core.async.t_cljs$core$async29717.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29717.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async29717.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async29717.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async29717.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29718","meta29718",-814497816,null)], null);
});

cljs.core.async.t_cljs$core$async29717.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29717.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29717";

cljs.core.async.t_cljs$core$async29717.cljs$lang$ctorPrWriter = (function (this__26595__auto__,writer__26596__auto__,opt__26597__auto__){
return cljs.core._write.call(null,writer__26596__auto__,"cljs.core.async/t_cljs$core$async29717");
});

cljs.core.async.__GT_t_cljs$core$async29717 = (function cljs$core$async$__GT_t_cljs$core$async29717(f__$1,blockable__$1,meta29718){
return (new cljs.core.async.t_cljs$core$async29717(f__$1,blockable__$1,meta29718));
});

}

return (new cljs.core.async.t_cljs$core$async29717(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args29726 = [];
var len__27064__auto___29729 = arguments.length;
var i__27065__auto___29730 = (0);
while(true){
if((i__27065__auto___29730 < len__27064__auto___29729)){
args29726.push((arguments[i__27065__auto___29730]));

var G__29731 = (i__27065__auto___29730 + (1));
i__27065__auto___29730 = G__29731;
continue;
} else {
}
break;
}

var G__29728 = args29726.length;
switch (G__29728) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29726.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args29733 = [];
var len__27064__auto___29736 = arguments.length;
var i__27065__auto___29737 = (0);
while(true){
if((i__27065__auto___29737 < len__27064__auto___29736)){
args29733.push((arguments[i__27065__auto___29737]));

var G__29738 = (i__27065__auto___29737 + (1));
i__27065__auto___29737 = G__29738;
continue;
} else {
}
break;
}

var G__29735 = args29733.length;
switch (G__29735) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29733.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args29740 = [];
var len__27064__auto___29743 = arguments.length;
var i__27065__auto___29744 = (0);
while(true){
if((i__27065__auto___29744 < len__27064__auto___29743)){
args29740.push((arguments[i__27065__auto___29744]));

var G__29745 = (i__27065__auto___29744 + (1));
i__27065__auto___29744 = G__29745;
continue;
} else {
}
break;
}

var G__29742 = args29740.length;
switch (G__29742) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29740.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_29747 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_29747);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_29747,ret){
return (function (){
return fn1.call(null,val_29747);
});})(val_29747,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args29748 = [];
var len__27064__auto___29751 = arguments.length;
var i__27065__auto___29752 = (0);
while(true){
if((i__27065__auto___29752 < len__27064__auto___29751)){
args29748.push((arguments[i__27065__auto___29752]));

var G__29753 = (i__27065__auto___29752 + (1));
i__27065__auto___29752 = G__29753;
continue;
} else {
}
break;
}

var G__29750 = args29748.length;
switch (G__29750) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29748.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__26904__auto___29755 = n;
var x_29756 = (0);
while(true){
if((x_29756 < n__26904__auto___29755)){
(a[x_29756] = (0));

var G__29757 = (x_29756 + (1));
x_29756 = G__29757;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__29758 = (i + (1));
i = G__29758;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async29762 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29762 = (function (alt_flag,flag,meta29763){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta29763 = meta29763;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29762.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_29764,meta29763__$1){
var self__ = this;
var _29764__$1 = this;
return (new cljs.core.async.t_cljs$core$async29762(self__.alt_flag,self__.flag,meta29763__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async29762.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_29764){
var self__ = this;
var _29764__$1 = this;
return self__.meta29763;
});})(flag))
;

cljs.core.async.t_cljs$core$async29762.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29762.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async29762.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async29762.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async29762.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29763","meta29763",-877725332,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async29762.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29762.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29762";

cljs.core.async.t_cljs$core$async29762.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__26595__auto__,writer__26596__auto__,opt__26597__auto__){
return cljs.core._write.call(null,writer__26596__auto__,"cljs.core.async/t_cljs$core$async29762");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async29762 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29762(alt_flag__$1,flag__$1,meta29763){
return (new cljs.core.async.t_cljs$core$async29762(alt_flag__$1,flag__$1,meta29763));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async29762(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async29768 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29768 = (function (alt_handler,flag,cb,meta29769){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta29769 = meta29769;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29768.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29770,meta29769__$1){
var self__ = this;
var _29770__$1 = this;
return (new cljs.core.async.t_cljs$core$async29768(self__.alt_handler,self__.flag,self__.cb,meta29769__$1));
});

cljs.core.async.t_cljs$core$async29768.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29770){
var self__ = this;
var _29770__$1 = this;
return self__.meta29769;
});

cljs.core.async.t_cljs$core$async29768.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29768.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async29768.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async29768.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async29768.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29769","meta29769",-1926237268,null)], null);
});

cljs.core.async.t_cljs$core$async29768.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29768.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29768";

cljs.core.async.t_cljs$core$async29768.cljs$lang$ctorPrWriter = (function (this__26595__auto__,writer__26596__auto__,opt__26597__auto__){
return cljs.core._write.call(null,writer__26596__auto__,"cljs.core.async/t_cljs$core$async29768");
});

cljs.core.async.__GT_t_cljs$core$async29768 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29768(alt_handler__$1,flag__$1,cb__$1,meta29769){
return (new cljs.core.async.t_cljs$core$async29768(alt_handler__$1,flag__$1,cb__$1,meta29769));
});

}

return (new cljs.core.async.t_cljs$core$async29768(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29771_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29771_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29772_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29772_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__25989__auto__ = wport;
if(cljs.core.truth_(or__25989__auto__)){
return or__25989__auto__;
} else {
return port;
}
})()], null));
} else {
var G__29773 = (i + (1));
i = G__29773;
continue;
}
} else {
return null;
}
break;
}
})();
var or__25989__auto__ = ret;
if(cljs.core.truth_(or__25989__auto__)){
return or__25989__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__25977__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__25977__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__25977__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__27071__auto__ = [];
var len__27064__auto___29779 = arguments.length;
var i__27065__auto___29780 = (0);
while(true){
if((i__27065__auto___29780 < len__27064__auto___29779)){
args__27071__auto__.push((arguments[i__27065__auto___29780]));

var G__29781 = (i__27065__auto___29780 + (1));
i__27065__auto___29780 = G__29781;
continue;
} else {
}
break;
}

var argseq__27072__auto__ = ((((1) < args__27071__auto__.length))?(new cljs.core.IndexedSeq(args__27071__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27072__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29776){
var map__29777 = p__29776;
var map__29777__$1 = ((((!((map__29777 == null)))?((((map__29777.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29777.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29777):map__29777);
var opts = map__29777__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29774){
var G__29775 = cljs.core.first.call(null,seq29774);
var seq29774__$1 = cljs.core.next.call(null,seq29774);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29775,seq29774__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args29782 = [];
var len__27064__auto___29832 = arguments.length;
var i__27065__auto___29833 = (0);
while(true){
if((i__27065__auto___29833 < len__27064__auto___29832)){
args29782.push((arguments[i__27065__auto___29833]));

var G__29834 = (i__27065__auto___29833 + (1));
i__27065__auto___29833 = G__29834;
continue;
} else {
}
break;
}

var G__29784 = args29782.length;
switch (G__29784) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29782.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29669__auto___29836 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29669__auto___29836){
return (function (){
var f__29670__auto__ = (function (){var switch__29557__auto__ = ((function (c__29669__auto___29836){
return (function (state_29808){
var state_val_29809 = (state_29808[(1)]);
if((state_val_29809 === (7))){
var inst_29804 = (state_29808[(2)]);
var state_29808__$1 = state_29808;
var statearr_29810_29837 = state_29808__$1;
(statearr_29810_29837[(2)] = inst_29804);

(statearr_29810_29837[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29809 === (1))){
var state_29808__$1 = state_29808;
var statearr_29811_29838 = state_29808__$1;
(statearr_29811_29838[(2)] = null);

(statearr_29811_29838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29809 === (4))){
var inst_29787 = (state_29808[(7)]);
var inst_29787__$1 = (state_29808[(2)]);
var inst_29788 = (inst_29787__$1 == null);
var state_29808__$1 = (function (){var statearr_29812 = state_29808;
(statearr_29812[(7)] = inst_29787__$1);

return statearr_29812;
})();
if(cljs.core.truth_(inst_29788)){
var statearr_29813_29839 = state_29808__$1;
(statearr_29813_29839[(1)] = (5));

} else {
var statearr_29814_29840 = state_29808__$1;
(statearr_29814_29840[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29809 === (13))){
var state_29808__$1 = state_29808;
var statearr_29815_29841 = state_29808__$1;
(statearr_29815_29841[(2)] = null);

(statearr_29815_29841[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29809 === (6))){
var inst_29787 = (state_29808[(7)]);
var state_29808__$1 = state_29808;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29808__$1,(11),to,inst_29787);
} else {
if((state_val_29809 === (3))){
var inst_29806 = (state_29808[(2)]);
var state_29808__$1 = state_29808;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29808__$1,inst_29806);
} else {
if((state_val_29809 === (12))){
var state_29808__$1 = state_29808;
var statearr_29816_29842 = state_29808__$1;
(statearr_29816_29842[(2)] = null);

(statearr_29816_29842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29809 === (2))){
var state_29808__$1 = state_29808;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29808__$1,(4),from);
} else {
if((state_val_29809 === (11))){
var inst_29797 = (state_29808[(2)]);
var state_29808__$1 = state_29808;
if(cljs.core.truth_(inst_29797)){
var statearr_29817_29843 = state_29808__$1;
(statearr_29817_29843[(1)] = (12));

} else {
var statearr_29818_29844 = state_29808__$1;
(statearr_29818_29844[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29809 === (9))){
var state_29808__$1 = state_29808;
var statearr_29819_29845 = state_29808__$1;
(statearr_29819_29845[(2)] = null);

(statearr_29819_29845[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29809 === (5))){
var state_29808__$1 = state_29808;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29820_29846 = state_29808__$1;
(statearr_29820_29846[(1)] = (8));

} else {
var statearr_29821_29847 = state_29808__$1;
(statearr_29821_29847[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29809 === (14))){
var inst_29802 = (state_29808[(2)]);
var state_29808__$1 = state_29808;
var statearr_29822_29848 = state_29808__$1;
(statearr_29822_29848[(2)] = inst_29802);

(statearr_29822_29848[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29809 === (10))){
var inst_29794 = (state_29808[(2)]);
var state_29808__$1 = state_29808;
var statearr_29823_29849 = state_29808__$1;
(statearr_29823_29849[(2)] = inst_29794);

(statearr_29823_29849[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29809 === (8))){
var inst_29791 = cljs.core.async.close_BANG_.call(null,to);
var state_29808__$1 = state_29808;
var statearr_29824_29850 = state_29808__$1;
(statearr_29824_29850[(2)] = inst_29791);

(statearr_29824_29850[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29669__auto___29836))
;
return ((function (switch__29557__auto__,c__29669__auto___29836){
return (function() {
var cljs$core$async$state_machine__29558__auto__ = null;
var cljs$core$async$state_machine__29558__auto____0 = (function (){
var statearr_29828 = [null,null,null,null,null,null,null,null];
(statearr_29828[(0)] = cljs$core$async$state_machine__29558__auto__);

(statearr_29828[(1)] = (1));

return statearr_29828;
});
var cljs$core$async$state_machine__29558__auto____1 = (function (state_29808){
while(true){
var ret_value__29559__auto__ = (function (){try{while(true){
var result__29560__auto__ = switch__29557__auto__.call(null,state_29808);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29560__auto__;
}
break;
}
}catch (e29829){if((e29829 instanceof Object)){
var ex__29561__auto__ = e29829;
var statearr_29830_29851 = state_29808;
(statearr_29830_29851[(5)] = ex__29561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29808);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29829;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29852 = state_29808;
state_29808 = G__29852;
continue;
} else {
return ret_value__29559__auto__;
}
break;
}
});
cljs$core$async$state_machine__29558__auto__ = function(state_29808){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29558__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29558__auto____1.call(this,state_29808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29558__auto____0;
cljs$core$async$state_machine__29558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29558__auto____1;
return cljs$core$async$state_machine__29558__auto__;
})()
;})(switch__29557__auto__,c__29669__auto___29836))
})();
var state__29671__auto__ = (function (){var statearr_29831 = f__29670__auto__.call(null);
(statearr_29831[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29669__auto___29836);

return statearr_29831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29671__auto__);
});})(c__29669__auto___29836))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__30040){
var vec__30041 = p__30040;
var v = cljs.core.nth.call(null,vec__30041,(0),null);
var p = cljs.core.nth.call(null,vec__30041,(1),null);
var job = vec__30041;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__29669__auto___30227 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29669__auto___30227,res,vec__30041,v,p,job,jobs,results){
return (function (){
var f__29670__auto__ = (function (){var switch__29557__auto__ = ((function (c__29669__auto___30227,res,vec__30041,v,p,job,jobs,results){
return (function (state_30048){
var state_val_30049 = (state_30048[(1)]);
if((state_val_30049 === (1))){
var state_30048__$1 = state_30048;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30048__$1,(2),res,v);
} else {
if((state_val_30049 === (2))){
var inst_30045 = (state_30048[(2)]);
var inst_30046 = cljs.core.async.close_BANG_.call(null,res);
var state_30048__$1 = (function (){var statearr_30050 = state_30048;
(statearr_30050[(7)] = inst_30045);

return statearr_30050;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30048__$1,inst_30046);
} else {
return null;
}
}
});})(c__29669__auto___30227,res,vec__30041,v,p,job,jobs,results))
;
return ((function (switch__29557__auto__,c__29669__auto___30227,res,vec__30041,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29558__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29558__auto____0 = (function (){
var statearr_30054 = [null,null,null,null,null,null,null,null];
(statearr_30054[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29558__auto__);

(statearr_30054[(1)] = (1));

return statearr_30054;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29558__auto____1 = (function (state_30048){
while(true){
var ret_value__29559__auto__ = (function (){try{while(true){
var result__29560__auto__ = switch__29557__auto__.call(null,state_30048);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29560__auto__;
}
break;
}
}catch (e30055){if((e30055 instanceof Object)){
var ex__29561__auto__ = e30055;
var statearr_30056_30228 = state_30048;
(statearr_30056_30228[(5)] = ex__29561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30048);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30055;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30229 = state_30048;
state_30048 = G__30229;
continue;
} else {
return ret_value__29559__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29558__auto__ = function(state_30048){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29558__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29558__auto____1.call(this,state_30048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29558__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29558__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29558__auto__;
})()
;})(switch__29557__auto__,c__29669__auto___30227,res,vec__30041,v,p,job,jobs,results))
})();
var state__29671__auto__ = (function (){var statearr_30057 = f__29670__auto__.call(null);
(statearr_30057[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29669__auto___30227);

return statearr_30057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29671__auto__);
});})(c__29669__auto___30227,res,vec__30041,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__30058){
var vec__30059 = p__30058;
var v = cljs.core.nth.call(null,vec__30059,(0),null);
var p = cljs.core.nth.call(null,vec__30059,(1),null);
var job = vec__30059;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__26904__auto___30230 = n;
var __30231 = (0);
while(true){
if((__30231 < n__26904__auto___30230)){
var G__30062_30232 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__30062_30232) {
case "compute":
var c__29669__auto___30234 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30231,c__29669__auto___30234,G__30062_30232,n__26904__auto___30230,jobs,results,process,async){
return (function (){
var f__29670__auto__ = (function (){var switch__29557__auto__ = ((function (__30231,c__29669__auto___30234,G__30062_30232,n__26904__auto___30230,jobs,results,process,async){
return (function (state_30075){
var state_val_30076 = (state_30075[(1)]);
if((state_val_30076 === (1))){
var state_30075__$1 = state_30075;
var statearr_30077_30235 = state_30075__$1;
(statearr_30077_30235[(2)] = null);

(statearr_30077_30235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30076 === (2))){
var state_30075__$1 = state_30075;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30075__$1,(4),jobs);
} else {
if((state_val_30076 === (3))){
var inst_30073 = (state_30075[(2)]);
var state_30075__$1 = state_30075;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30075__$1,inst_30073);
} else {
if((state_val_30076 === (4))){
var inst_30065 = (state_30075[(2)]);
var inst_30066 = process.call(null,inst_30065);
var state_30075__$1 = state_30075;
if(cljs.core.truth_(inst_30066)){
var statearr_30078_30236 = state_30075__$1;
(statearr_30078_30236[(1)] = (5));

} else {
var statearr_30079_30237 = state_30075__$1;
(statearr_30079_30237[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30076 === (5))){
var state_30075__$1 = state_30075;
var statearr_30080_30238 = state_30075__$1;
(statearr_30080_30238[(2)] = null);

(statearr_30080_30238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30076 === (6))){
var state_30075__$1 = state_30075;
var statearr_30081_30239 = state_30075__$1;
(statearr_30081_30239[(2)] = null);

(statearr_30081_30239[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30076 === (7))){
var inst_30071 = (state_30075[(2)]);
var state_30075__$1 = state_30075;
var statearr_30082_30240 = state_30075__$1;
(statearr_30082_30240[(2)] = inst_30071);

(statearr_30082_30240[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__30231,c__29669__auto___30234,G__30062_30232,n__26904__auto___30230,jobs,results,process,async))
;
return ((function (__30231,switch__29557__auto__,c__29669__auto___30234,G__30062_30232,n__26904__auto___30230,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29558__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29558__auto____0 = (function (){
var statearr_30086 = [null,null,null,null,null,null,null];
(statearr_30086[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29558__auto__);

(statearr_30086[(1)] = (1));

return statearr_30086;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29558__auto____1 = (function (state_30075){
while(true){
var ret_value__29559__auto__ = (function (){try{while(true){
var result__29560__auto__ = switch__29557__auto__.call(null,state_30075);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29560__auto__;
}
break;
}
}catch (e30087){if((e30087 instanceof Object)){
var ex__29561__auto__ = e30087;
var statearr_30088_30241 = state_30075;
(statearr_30088_30241[(5)] = ex__29561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30075);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30087;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30242 = state_30075;
state_30075 = G__30242;
continue;
} else {
return ret_value__29559__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29558__auto__ = function(state_30075){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29558__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29558__auto____1.call(this,state_30075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29558__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29558__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29558__auto__;
})()
;})(__30231,switch__29557__auto__,c__29669__auto___30234,G__30062_30232,n__26904__auto___30230,jobs,results,process,async))
})();
var state__29671__auto__ = (function (){var statearr_30089 = f__29670__auto__.call(null);
(statearr_30089[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29669__auto___30234);

return statearr_30089;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29671__auto__);
});})(__30231,c__29669__auto___30234,G__30062_30232,n__26904__auto___30230,jobs,results,process,async))
);


break;
case "async":
var c__29669__auto___30243 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30231,c__29669__auto___30243,G__30062_30232,n__26904__auto___30230,jobs,results,process,async){
return (function (){
var f__29670__auto__ = (function (){var switch__29557__auto__ = ((function (__30231,c__29669__auto___30243,G__30062_30232,n__26904__auto___30230,jobs,results,process,async){
return (function (state_30102){
var state_val_30103 = (state_30102[(1)]);
if((state_val_30103 === (1))){
var state_30102__$1 = state_30102;
var statearr_30104_30244 = state_30102__$1;
(statearr_30104_30244[(2)] = null);

(statearr_30104_30244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30103 === (2))){
var state_30102__$1 = state_30102;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30102__$1,(4),jobs);
} else {
if((state_val_30103 === (3))){
var inst_30100 = (state_30102[(2)]);
var state_30102__$1 = state_30102;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30102__$1,inst_30100);
} else {
if((state_val_30103 === (4))){
var inst_30092 = (state_30102[(2)]);
var inst_30093 = async.call(null,inst_30092);
var state_30102__$1 = state_30102;
if(cljs.core.truth_(inst_30093)){
var statearr_30105_30245 = state_30102__$1;
(statearr_30105_30245[(1)] = (5));

} else {
var statearr_30106_30246 = state_30102__$1;
(statearr_30106_30246[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30103 === (5))){
var state_30102__$1 = state_30102;
var statearr_30107_30247 = state_30102__$1;
(statearr_30107_30247[(2)] = null);

(statearr_30107_30247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30103 === (6))){
var state_30102__$1 = state_30102;
var statearr_30108_30248 = state_30102__$1;
(statearr_30108_30248[(2)] = null);

(statearr_30108_30248[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30103 === (7))){
var inst_30098 = (state_30102[(2)]);
var state_30102__$1 = state_30102;
var statearr_30109_30249 = state_30102__$1;
(statearr_30109_30249[(2)] = inst_30098);

(statearr_30109_30249[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__30231,c__29669__auto___30243,G__30062_30232,n__26904__auto___30230,jobs,results,process,async))
;
return ((function (__30231,switch__29557__auto__,c__29669__auto___30243,G__30062_30232,n__26904__auto___30230,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29558__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29558__auto____0 = (function (){
var statearr_30113 = [null,null,null,null,null,null,null];
(statearr_30113[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29558__auto__);

(statearr_30113[(1)] = (1));

return statearr_30113;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29558__auto____1 = (function (state_30102){
while(true){
var ret_value__29559__auto__ = (function (){try{while(true){
var result__29560__auto__ = switch__29557__auto__.call(null,state_30102);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29560__auto__;
}
break;
}
}catch (e30114){if((e30114 instanceof Object)){
var ex__29561__auto__ = e30114;
var statearr_30115_30250 = state_30102;
(statearr_30115_30250[(5)] = ex__29561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30102);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30114;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30251 = state_30102;
state_30102 = G__30251;
continue;
} else {
return ret_value__29559__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29558__auto__ = function(state_30102){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29558__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29558__auto____1.call(this,state_30102);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29558__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29558__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29558__auto__;
})()
;})(__30231,switch__29557__auto__,c__29669__auto___30243,G__30062_30232,n__26904__auto___30230,jobs,results,process,async))
})();
var state__29671__auto__ = (function (){var statearr_30116 = f__29670__auto__.call(null);
(statearr_30116[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29669__auto___30243);

return statearr_30116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29671__auto__);
});})(__30231,c__29669__auto___30243,G__30062_30232,n__26904__auto___30230,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__30252 = (__30231 + (1));
__30231 = G__30252;
continue;
} else {
}
break;
}

var c__29669__auto___30253 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29669__auto___30253,jobs,results,process,async){
return (function (){
var f__29670__auto__ = (function (){var switch__29557__auto__ = ((function (c__29669__auto___30253,jobs,results,process,async){
return (function (state_30138){
var state_val_30139 = (state_30138[(1)]);
if((state_val_30139 === (1))){
var state_30138__$1 = state_30138;
var statearr_30140_30254 = state_30138__$1;
(statearr_30140_30254[(2)] = null);

(statearr_30140_30254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30139 === (2))){
var state_30138__$1 = state_30138;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30138__$1,(4),from);
} else {
if((state_val_30139 === (3))){
var inst_30136 = (state_30138[(2)]);
var state_30138__$1 = state_30138;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30138__$1,inst_30136);
} else {
if((state_val_30139 === (4))){
var inst_30119 = (state_30138[(7)]);
var inst_30119__$1 = (state_30138[(2)]);
var inst_30120 = (inst_30119__$1 == null);
var state_30138__$1 = (function (){var statearr_30141 = state_30138;
(statearr_30141[(7)] = inst_30119__$1);

return statearr_30141;
})();
if(cljs.core.truth_(inst_30120)){
var statearr_30142_30255 = state_30138__$1;
(statearr_30142_30255[(1)] = (5));

} else {
var statearr_30143_30256 = state_30138__$1;
(statearr_30143_30256[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30139 === (5))){
var inst_30122 = cljs.core.async.close_BANG_.call(null,jobs);
var state_30138__$1 = state_30138;
var statearr_30144_30257 = state_30138__$1;
(statearr_30144_30257[(2)] = inst_30122);

(statearr_30144_30257[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30139 === (6))){
var inst_30124 = (state_30138[(8)]);
var inst_30119 = (state_30138[(7)]);
var inst_30124__$1 = cljs.core.async.chan.call(null,(1));
var inst_30125 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30126 = [inst_30119,inst_30124__$1];
var inst_30127 = (new cljs.core.PersistentVector(null,2,(5),inst_30125,inst_30126,null));
var state_30138__$1 = (function (){var statearr_30145 = state_30138;
(statearr_30145[(8)] = inst_30124__$1);

return statearr_30145;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30138__$1,(8),jobs,inst_30127);
} else {
if((state_val_30139 === (7))){
var inst_30134 = (state_30138[(2)]);
var state_30138__$1 = state_30138;
var statearr_30146_30258 = state_30138__$1;
(statearr_30146_30258[(2)] = inst_30134);

(statearr_30146_30258[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30139 === (8))){
var inst_30124 = (state_30138[(8)]);
var inst_30129 = (state_30138[(2)]);
var state_30138__$1 = (function (){var statearr_30147 = state_30138;
(statearr_30147[(9)] = inst_30129);

return statearr_30147;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30138__$1,(9),results,inst_30124);
} else {
if((state_val_30139 === (9))){
var inst_30131 = (state_30138[(2)]);
var state_30138__$1 = (function (){var statearr_30148 = state_30138;
(statearr_30148[(10)] = inst_30131);

return statearr_30148;
})();
var statearr_30149_30259 = state_30138__$1;
(statearr_30149_30259[(2)] = null);

(statearr_30149_30259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__29669__auto___30253,jobs,results,process,async))
;
return ((function (switch__29557__auto__,c__29669__auto___30253,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29558__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29558__auto____0 = (function (){
var statearr_30153 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30153[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29558__auto__);

(statearr_30153[(1)] = (1));

return statearr_30153;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29558__auto____1 = (function (state_30138){
while(true){
var ret_value__29559__auto__ = (function (){try{while(true){
var result__29560__auto__ = switch__29557__auto__.call(null,state_30138);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29560__auto__;
}
break;
}
}catch (e30154){if((e30154 instanceof Object)){
var ex__29561__auto__ = e30154;
var statearr_30155_30260 = state_30138;
(statearr_30155_30260[(5)] = ex__29561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30138);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30154;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30261 = state_30138;
state_30138 = G__30261;
continue;
} else {
return ret_value__29559__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29558__auto__ = function(state_30138){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29558__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29558__auto____1.call(this,state_30138);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29558__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29558__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29558__auto__;
})()
;})(switch__29557__auto__,c__29669__auto___30253,jobs,results,process,async))
})();
var state__29671__auto__ = (function (){var statearr_30156 = f__29670__auto__.call(null);
(statearr_30156[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29669__auto___30253);

return statearr_30156;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29671__auto__);
});})(c__29669__auto___30253,jobs,results,process,async))
);


var c__29669__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29669__auto__,jobs,results,process,async){
return (function (){
var f__29670__auto__ = (function (){var switch__29557__auto__ = ((function (c__29669__auto__,jobs,results,process,async){
return (function (state_30194){
var state_val_30195 = (state_30194[(1)]);
if((state_val_30195 === (7))){
var inst_30190 = (state_30194[(2)]);
var state_30194__$1 = state_30194;
var statearr_30196_30262 = state_30194__$1;
(statearr_30196_30262[(2)] = inst_30190);

(statearr_30196_30262[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30195 === (20))){
var state_30194__$1 = state_30194;
var statearr_30197_30263 = state_30194__$1;
(statearr_30197_30263[(2)] = null);

(statearr_30197_30263[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30195 === (1))){
var state_30194__$1 = state_30194;
var statearr_30198_30264 = state_30194__$1;
(statearr_30198_30264[(2)] = null);

(statearr_30198_30264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30195 === (4))){
var inst_30159 = (state_30194[(7)]);
var inst_30159__$1 = (state_30194[(2)]);
var inst_30160 = (inst_30159__$1 == null);
var state_30194__$1 = (function (){var statearr_30199 = state_30194;
(statearr_30199[(7)] = inst_30159__$1);

return statearr_30199;
})();
if(cljs.core.truth_(inst_30160)){
var statearr_30200_30265 = state_30194__$1;
(statearr_30200_30265[(1)] = (5));

} else {
var statearr_30201_30266 = state_30194__$1;
(statearr_30201_30266[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30195 === (15))){
var inst_30172 = (state_30194[(8)]);
var state_30194__$1 = state_30194;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30194__$1,(18),to,inst_30172);
} else {
if((state_val_30195 === (21))){
var inst_30185 = (state_30194[(2)]);
var state_30194__$1 = state_30194;
var statearr_30202_30267 = state_30194__$1;
(statearr_30202_30267[(2)] = inst_30185);

(statearr_30202_30267[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30195 === (13))){
var inst_30187 = (state_30194[(2)]);
var state_30194__$1 = (function (){var statearr_30203 = state_30194;
(statearr_30203[(9)] = inst_30187);

return statearr_30203;
})();
var statearr_30204_30268 = state_30194__$1;
(statearr_30204_30268[(2)] = null);

(statearr_30204_30268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30195 === (6))){
var inst_30159 = (state_30194[(7)]);
var state_30194__$1 = state_30194;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30194__$1,(11),inst_30159);
} else {
if((state_val_30195 === (17))){
var inst_30180 = (state_30194[(2)]);
var state_30194__$1 = state_30194;
if(cljs.core.truth_(inst_30180)){
var statearr_30205_30269 = state_30194__$1;
(statearr_30205_30269[(1)] = (19));

} else {
var statearr_30206_30270 = state_30194__$1;
(statearr_30206_30270[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30195 === (3))){
var inst_30192 = (state_30194[(2)]);
var state_30194__$1 = state_30194;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30194__$1,inst_30192);
} else {
if((state_val_30195 === (12))){
var inst_30169 = (state_30194[(10)]);
var state_30194__$1 = state_30194;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30194__$1,(14),inst_30169);
} else {
if((state_val_30195 === (2))){
var state_30194__$1 = state_30194;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30194__$1,(4),results);
} else {
if((state_val_30195 === (19))){
var state_30194__$1 = state_30194;
var statearr_30207_30271 = state_30194__$1;
(statearr_30207_30271[(2)] = null);

(statearr_30207_30271[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30195 === (11))){
var inst_30169 = (state_30194[(2)]);
var state_30194__$1 = (function (){var statearr_30208 = state_30194;
(statearr_30208[(10)] = inst_30169);

return statearr_30208;
})();
var statearr_30209_30272 = state_30194__$1;
(statearr_30209_30272[(2)] = null);

(statearr_30209_30272[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30195 === (9))){
var state_30194__$1 = state_30194;
var statearr_30210_30273 = state_30194__$1;
(statearr_30210_30273[(2)] = null);

(statearr_30210_30273[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30195 === (5))){
var state_30194__$1 = state_30194;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30211_30274 = state_30194__$1;
(statearr_30211_30274[(1)] = (8));

} else {
var statearr_30212_30275 = state_30194__$1;
(statearr_30212_30275[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30195 === (14))){
var inst_30174 = (state_30194[(11)]);
var inst_30172 = (state_30194[(8)]);
var inst_30172__$1 = (state_30194[(2)]);
var inst_30173 = (inst_30172__$1 == null);
var inst_30174__$1 = cljs.core.not.call(null,inst_30173);
var state_30194__$1 = (function (){var statearr_30213 = state_30194;
(statearr_30213[(11)] = inst_30174__$1);

(statearr_30213[(8)] = inst_30172__$1);

return statearr_30213;
})();
if(inst_30174__$1){
var statearr_30214_30276 = state_30194__$1;
(statearr_30214_30276[(1)] = (15));

} else {
var statearr_30215_30277 = state_30194__$1;
(statearr_30215_30277[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30195 === (16))){
var inst_30174 = (state_30194[(11)]);
var state_30194__$1 = state_30194;
var statearr_30216_30278 = state_30194__$1;
(statearr_30216_30278[(2)] = inst_30174);

(statearr_30216_30278[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30195 === (10))){
var inst_30166 = (state_30194[(2)]);
var state_30194__$1 = state_30194;
var statearr_30217_30279 = state_30194__$1;
(statearr_30217_30279[(2)] = inst_30166);

(statearr_30217_30279[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30195 === (18))){
var inst_30177 = (state_30194[(2)]);
var state_30194__$1 = state_30194;
var statearr_30218_30280 = state_30194__$1;
(statearr_30218_30280[(2)] = inst_30177);

(statearr_30218_30280[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30195 === (8))){
var inst_30163 = cljs.core.async.close_BANG_.call(null,to);
var state_30194__$1 = state_30194;
var statearr_30219_30281 = state_30194__$1;
(statearr_30219_30281[(2)] = inst_30163);

(statearr_30219_30281[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29669__auto__,jobs,results,process,async))
;
return ((function (switch__29557__auto__,c__29669__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29558__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29558__auto____0 = (function (){
var statearr_30223 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30223[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29558__auto__);

(statearr_30223[(1)] = (1));

return statearr_30223;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29558__auto____1 = (function (state_30194){
while(true){
var ret_value__29559__auto__ = (function (){try{while(true){
var result__29560__auto__ = switch__29557__auto__.call(null,state_30194);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29560__auto__;
}
break;
}
}catch (e30224){if((e30224 instanceof Object)){
var ex__29561__auto__ = e30224;
var statearr_30225_30282 = state_30194;
(statearr_30225_30282[(5)] = ex__29561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30194);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30224;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30283 = state_30194;
state_30194 = G__30283;
continue;
} else {
return ret_value__29559__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29558__auto__ = function(state_30194){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29558__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29558__auto____1.call(this,state_30194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29558__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29558__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29558__auto__;
})()
;})(switch__29557__auto__,c__29669__auto__,jobs,results,process,async))
})();
var state__29671__auto__ = (function (){var statearr_30226 = f__29670__auto__.call(null);
(statearr_30226[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29669__auto__);

return statearr_30226;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29671__auto__);
});})(c__29669__auto__,jobs,results,process,async))
);

return c__29669__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args30284 = [];
var len__27064__auto___30287 = arguments.length;
var i__27065__auto___30288 = (0);
while(true){
if((i__27065__auto___30288 < len__27064__auto___30287)){
args30284.push((arguments[i__27065__auto___30288]));

var G__30289 = (i__27065__auto___30288 + (1));
i__27065__auto___30288 = G__30289;
continue;
} else {
}
break;
}

var G__30286 = args30284.length;
switch (G__30286) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30284.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args30291 = [];
var len__27064__auto___30294 = arguments.length;
var i__27065__auto___30295 = (0);
while(true){
if((i__27065__auto___30295 < len__27064__auto___30294)){
args30291.push((arguments[i__27065__auto___30295]));

var G__30296 = (i__27065__auto___30295 + (1));
i__27065__auto___30295 = G__30296;
continue;
} else {
}
break;
}

var G__30293 = args30291.length;
switch (G__30293) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30291.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args30298 = [];
var len__27064__auto___30351 = arguments.length;
var i__27065__auto___30352 = (0);
while(true){
if((i__27065__auto___30352 < len__27064__auto___30351)){
args30298.push((arguments[i__27065__auto___30352]));

var G__30353 = (i__27065__auto___30352 + (1));
i__27065__auto___30352 = G__30353;
continue;
} else {
}
break;
}

var G__30300 = args30298.length;
switch (G__30300) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30298.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__29669__auto___30355 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29669__auto___30355,tc,fc){
return (function (){
var f__29670__auto__ = (function (){var switch__29557__auto__ = ((function (c__29669__auto___30355,tc,fc){
return (function (state_30326){
var state_val_30327 = (state_30326[(1)]);
if((state_val_30327 === (7))){
var inst_30322 = (state_30326[(2)]);
var state_30326__$1 = state_30326;
var statearr_30328_30356 = state_30326__$1;
(statearr_30328_30356[(2)] = inst_30322);

(statearr_30328_30356[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30327 === (1))){
var state_30326__$1 = state_30326;
var statearr_30329_30357 = state_30326__$1;
(statearr_30329_30357[(2)] = null);

(statearr_30329_30357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30327 === (4))){
var inst_30303 = (state_30326[(7)]);
var inst_30303__$1 = (state_30326[(2)]);
var inst_30304 = (inst_30303__$1 == null);
var state_30326__$1 = (function (){var statearr_30330 = state_30326;
(statearr_30330[(7)] = inst_30303__$1);

return statearr_30330;
})();
if(cljs.core.truth_(inst_30304)){
var statearr_30331_30358 = state_30326__$1;
(statearr_30331_30358[(1)] = (5));

} else {
var statearr_30332_30359 = state_30326__$1;
(statearr_30332_30359[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30327 === (13))){
var state_30326__$1 = state_30326;
var statearr_30333_30360 = state_30326__$1;
(statearr_30333_30360[(2)] = null);

(statearr_30333_30360[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30327 === (6))){
var inst_30303 = (state_30326[(7)]);
var inst_30309 = p.call(null,inst_30303);
var state_30326__$1 = state_30326;
if(cljs.core.truth_(inst_30309)){
var statearr_30334_30361 = state_30326__$1;
(statearr_30334_30361[(1)] = (9));

} else {
var statearr_30335_30362 = state_30326__$1;
(statearr_30335_30362[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30327 === (3))){
var inst_30324 = (state_30326[(2)]);
var state_30326__$1 = state_30326;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30326__$1,inst_30324);
} else {
if((state_val_30327 === (12))){
var state_30326__$1 = state_30326;
var statearr_30336_30363 = state_30326__$1;
(statearr_30336_30363[(2)] = null);

(statearr_30336_30363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30327 === (2))){
var state_30326__$1 = state_30326;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30326__$1,(4),ch);
} else {
if((state_val_30327 === (11))){
var inst_30303 = (state_30326[(7)]);
var inst_30313 = (state_30326[(2)]);
var state_30326__$1 = state_30326;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30326__$1,(8),inst_30313,inst_30303);
} else {
if((state_val_30327 === (9))){
var state_30326__$1 = state_30326;
var statearr_30337_30364 = state_30326__$1;
(statearr_30337_30364[(2)] = tc);

(statearr_30337_30364[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30327 === (5))){
var inst_30306 = cljs.core.async.close_BANG_.call(null,tc);
var inst_30307 = cljs.core.async.close_BANG_.call(null,fc);
var state_30326__$1 = (function (){var statearr_30338 = state_30326;
(statearr_30338[(8)] = inst_30306);

return statearr_30338;
})();
var statearr_30339_30365 = state_30326__$1;
(statearr_30339_30365[(2)] = inst_30307);

(statearr_30339_30365[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30327 === (14))){
var inst_30320 = (state_30326[(2)]);
var state_30326__$1 = state_30326;
var statearr_30340_30366 = state_30326__$1;
(statearr_30340_30366[(2)] = inst_30320);

(statearr_30340_30366[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30327 === (10))){
var state_30326__$1 = state_30326;
var statearr_30341_30367 = state_30326__$1;
(statearr_30341_30367[(2)] = fc);

(statearr_30341_30367[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30327 === (8))){
var inst_30315 = (state_30326[(2)]);
var state_30326__$1 = state_30326;
if(cljs.core.truth_(inst_30315)){
var statearr_30342_30368 = state_30326__$1;
(statearr_30342_30368[(1)] = (12));

} else {
var statearr_30343_30369 = state_30326__$1;
(statearr_30343_30369[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29669__auto___30355,tc,fc))
;
return ((function (switch__29557__auto__,c__29669__auto___30355,tc,fc){
return (function() {
var cljs$core$async$state_machine__29558__auto__ = null;
var cljs$core$async$state_machine__29558__auto____0 = (function (){
var statearr_30347 = [null,null,null,null,null,null,null,null,null];
(statearr_30347[(0)] = cljs$core$async$state_machine__29558__auto__);

(statearr_30347[(1)] = (1));

return statearr_30347;
});
var cljs$core$async$state_machine__29558__auto____1 = (function (state_30326){
while(true){
var ret_value__29559__auto__ = (function (){try{while(true){
var result__29560__auto__ = switch__29557__auto__.call(null,state_30326);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29560__auto__;
}
break;
}
}catch (e30348){if((e30348 instanceof Object)){
var ex__29561__auto__ = e30348;
var statearr_30349_30370 = state_30326;
(statearr_30349_30370[(5)] = ex__29561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30326);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30348;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30371 = state_30326;
state_30326 = G__30371;
continue;
} else {
return ret_value__29559__auto__;
}
break;
}
});
cljs$core$async$state_machine__29558__auto__ = function(state_30326){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29558__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29558__auto____1.call(this,state_30326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29558__auto____0;
cljs$core$async$state_machine__29558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29558__auto____1;
return cljs$core$async$state_machine__29558__auto__;
})()
;})(switch__29557__auto__,c__29669__auto___30355,tc,fc))
})();
var state__29671__auto__ = (function (){var statearr_30350 = f__29670__auto__.call(null);
(statearr_30350[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29669__auto___30355);

return statearr_30350;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29671__auto__);
});})(c__29669__auto___30355,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__29669__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29669__auto__){
return (function (){
var f__29670__auto__ = (function (){var switch__29557__auto__ = ((function (c__29669__auto__){
return (function (state_30435){
var state_val_30436 = (state_30435[(1)]);
if((state_val_30436 === (7))){
var inst_30431 = (state_30435[(2)]);
var state_30435__$1 = state_30435;
var statearr_30437_30458 = state_30435__$1;
(statearr_30437_30458[(2)] = inst_30431);

(statearr_30437_30458[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30436 === (1))){
var inst_30415 = init;
var state_30435__$1 = (function (){var statearr_30438 = state_30435;
(statearr_30438[(7)] = inst_30415);

return statearr_30438;
})();
var statearr_30439_30459 = state_30435__$1;
(statearr_30439_30459[(2)] = null);

(statearr_30439_30459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30436 === (4))){
var inst_30418 = (state_30435[(8)]);
var inst_30418__$1 = (state_30435[(2)]);
var inst_30419 = (inst_30418__$1 == null);
var state_30435__$1 = (function (){var statearr_30440 = state_30435;
(statearr_30440[(8)] = inst_30418__$1);

return statearr_30440;
})();
if(cljs.core.truth_(inst_30419)){
var statearr_30441_30460 = state_30435__$1;
(statearr_30441_30460[(1)] = (5));

} else {
var statearr_30442_30461 = state_30435__$1;
(statearr_30442_30461[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30436 === (6))){
var inst_30418 = (state_30435[(8)]);
var inst_30422 = (state_30435[(9)]);
var inst_30415 = (state_30435[(7)]);
var inst_30422__$1 = f.call(null,inst_30415,inst_30418);
var inst_30423 = cljs.core.reduced_QMARK_.call(null,inst_30422__$1);
var state_30435__$1 = (function (){var statearr_30443 = state_30435;
(statearr_30443[(9)] = inst_30422__$1);

return statearr_30443;
})();
if(inst_30423){
var statearr_30444_30462 = state_30435__$1;
(statearr_30444_30462[(1)] = (8));

} else {
var statearr_30445_30463 = state_30435__$1;
(statearr_30445_30463[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30436 === (3))){
var inst_30433 = (state_30435[(2)]);
var state_30435__$1 = state_30435;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30435__$1,inst_30433);
} else {
if((state_val_30436 === (2))){
var state_30435__$1 = state_30435;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30435__$1,(4),ch);
} else {
if((state_val_30436 === (9))){
var inst_30422 = (state_30435[(9)]);
var inst_30415 = inst_30422;
var state_30435__$1 = (function (){var statearr_30446 = state_30435;
(statearr_30446[(7)] = inst_30415);

return statearr_30446;
})();
var statearr_30447_30464 = state_30435__$1;
(statearr_30447_30464[(2)] = null);

(statearr_30447_30464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30436 === (5))){
var inst_30415 = (state_30435[(7)]);
var state_30435__$1 = state_30435;
var statearr_30448_30465 = state_30435__$1;
(statearr_30448_30465[(2)] = inst_30415);

(statearr_30448_30465[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30436 === (10))){
var inst_30429 = (state_30435[(2)]);
var state_30435__$1 = state_30435;
var statearr_30449_30466 = state_30435__$1;
(statearr_30449_30466[(2)] = inst_30429);

(statearr_30449_30466[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30436 === (8))){
var inst_30422 = (state_30435[(9)]);
var inst_30425 = cljs.core.deref.call(null,inst_30422);
var state_30435__$1 = state_30435;
var statearr_30450_30467 = state_30435__$1;
(statearr_30450_30467[(2)] = inst_30425);

(statearr_30450_30467[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__29669__auto__))
;
return ((function (switch__29557__auto__,c__29669__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__29558__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29558__auto____0 = (function (){
var statearr_30454 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30454[(0)] = cljs$core$async$reduce_$_state_machine__29558__auto__);

(statearr_30454[(1)] = (1));

return statearr_30454;
});
var cljs$core$async$reduce_$_state_machine__29558__auto____1 = (function (state_30435){
while(true){
var ret_value__29559__auto__ = (function (){try{while(true){
var result__29560__auto__ = switch__29557__auto__.call(null,state_30435);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29560__auto__;
}
break;
}
}catch (e30455){if((e30455 instanceof Object)){
var ex__29561__auto__ = e30455;
var statearr_30456_30468 = state_30435;
(statearr_30456_30468[(5)] = ex__29561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30435);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30455;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30469 = state_30435;
state_30435 = G__30469;
continue;
} else {
return ret_value__29559__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29558__auto__ = function(state_30435){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29558__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29558__auto____1.call(this,state_30435);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29558__auto____0;
cljs$core$async$reduce_$_state_machine__29558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29558__auto____1;
return cljs$core$async$reduce_$_state_machine__29558__auto__;
})()
;})(switch__29557__auto__,c__29669__auto__))
})();
var state__29671__auto__ = (function (){var statearr_30457 = f__29670__auto__.call(null);
(statearr_30457[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29669__auto__);

return statearr_30457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29671__auto__);
});})(c__29669__auto__))
);

return c__29669__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__29669__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29669__auto__,f__$1){
return (function (){
var f__29670__auto__ = (function (){var switch__29557__auto__ = ((function (c__29669__auto__,f__$1){
return (function (state_30489){
var state_val_30490 = (state_30489[(1)]);
if((state_val_30490 === (1))){
var inst_30484 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_30489__$1 = state_30489;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30489__$1,(2),inst_30484);
} else {
if((state_val_30490 === (2))){
var inst_30486 = (state_30489[(2)]);
var inst_30487 = f__$1.call(null,inst_30486);
var state_30489__$1 = state_30489;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30489__$1,inst_30487);
} else {
return null;
}
}
});})(c__29669__auto__,f__$1))
;
return ((function (switch__29557__auto__,c__29669__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__29558__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29558__auto____0 = (function (){
var statearr_30494 = [null,null,null,null,null,null,null];
(statearr_30494[(0)] = cljs$core$async$transduce_$_state_machine__29558__auto__);

(statearr_30494[(1)] = (1));

return statearr_30494;
});
var cljs$core$async$transduce_$_state_machine__29558__auto____1 = (function (state_30489){
while(true){
var ret_value__29559__auto__ = (function (){try{while(true){
var result__29560__auto__ = switch__29557__auto__.call(null,state_30489);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29560__auto__;
}
break;
}
}catch (e30495){if((e30495 instanceof Object)){
var ex__29561__auto__ = e30495;
var statearr_30496_30498 = state_30489;
(statearr_30496_30498[(5)] = ex__29561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30489);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30495;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30499 = state_30489;
state_30489 = G__30499;
continue;
} else {
return ret_value__29559__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29558__auto__ = function(state_30489){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29558__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29558__auto____1.call(this,state_30489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29558__auto____0;
cljs$core$async$transduce_$_state_machine__29558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29558__auto____1;
return cljs$core$async$transduce_$_state_machine__29558__auto__;
})()
;})(switch__29557__auto__,c__29669__auto__,f__$1))
})();
var state__29671__auto__ = (function (){var statearr_30497 = f__29670__auto__.call(null);
(statearr_30497[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29669__auto__);

return statearr_30497;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29671__auto__);
});})(c__29669__auto__,f__$1))
);

return c__29669__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args30500 = [];
var len__27064__auto___30552 = arguments.length;
var i__27065__auto___30553 = (0);
while(true){
if((i__27065__auto___30553 < len__27064__auto___30552)){
args30500.push((arguments[i__27065__auto___30553]));

var G__30554 = (i__27065__auto___30553 + (1));
i__27065__auto___30553 = G__30554;
continue;
} else {
}
break;
}

var G__30502 = args30500.length;
switch (G__30502) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30500.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29669__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29669__auto__){
return (function (){
var f__29670__auto__ = (function (){var switch__29557__auto__ = ((function (c__29669__auto__){
return (function (state_30527){
var state_val_30528 = (state_30527[(1)]);
if((state_val_30528 === (7))){
var inst_30509 = (state_30527[(2)]);
var state_30527__$1 = state_30527;
var statearr_30529_30556 = state_30527__$1;
(statearr_30529_30556[(2)] = inst_30509);

(statearr_30529_30556[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30528 === (1))){
var inst_30503 = cljs.core.seq.call(null,coll);
var inst_30504 = inst_30503;
var state_30527__$1 = (function (){var statearr_30530 = state_30527;
(statearr_30530[(7)] = inst_30504);

return statearr_30530;
})();
var statearr_30531_30557 = state_30527__$1;
(statearr_30531_30557[(2)] = null);

(statearr_30531_30557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30528 === (4))){
var inst_30504 = (state_30527[(7)]);
var inst_30507 = cljs.core.first.call(null,inst_30504);
var state_30527__$1 = state_30527;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30527__$1,(7),ch,inst_30507);
} else {
if((state_val_30528 === (13))){
var inst_30521 = (state_30527[(2)]);
var state_30527__$1 = state_30527;
var statearr_30532_30558 = state_30527__$1;
(statearr_30532_30558[(2)] = inst_30521);

(statearr_30532_30558[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30528 === (6))){
var inst_30512 = (state_30527[(2)]);
var state_30527__$1 = state_30527;
if(cljs.core.truth_(inst_30512)){
var statearr_30533_30559 = state_30527__$1;
(statearr_30533_30559[(1)] = (8));

} else {
var statearr_30534_30560 = state_30527__$1;
(statearr_30534_30560[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30528 === (3))){
var inst_30525 = (state_30527[(2)]);
var state_30527__$1 = state_30527;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30527__$1,inst_30525);
} else {
if((state_val_30528 === (12))){
var state_30527__$1 = state_30527;
var statearr_30535_30561 = state_30527__$1;
(statearr_30535_30561[(2)] = null);

(statearr_30535_30561[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30528 === (2))){
var inst_30504 = (state_30527[(7)]);
var state_30527__$1 = state_30527;
if(cljs.core.truth_(inst_30504)){
var statearr_30536_30562 = state_30527__$1;
(statearr_30536_30562[(1)] = (4));

} else {
var statearr_30537_30563 = state_30527__$1;
(statearr_30537_30563[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30528 === (11))){
var inst_30518 = cljs.core.async.close_BANG_.call(null,ch);
var state_30527__$1 = state_30527;
var statearr_30538_30564 = state_30527__$1;
(statearr_30538_30564[(2)] = inst_30518);

(statearr_30538_30564[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30528 === (9))){
var state_30527__$1 = state_30527;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30539_30565 = state_30527__$1;
(statearr_30539_30565[(1)] = (11));

} else {
var statearr_30540_30566 = state_30527__$1;
(statearr_30540_30566[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30528 === (5))){
var inst_30504 = (state_30527[(7)]);
var state_30527__$1 = state_30527;
var statearr_30541_30567 = state_30527__$1;
(statearr_30541_30567[(2)] = inst_30504);

(statearr_30541_30567[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30528 === (10))){
var inst_30523 = (state_30527[(2)]);
var state_30527__$1 = state_30527;
var statearr_30542_30568 = state_30527__$1;
(statearr_30542_30568[(2)] = inst_30523);

(statearr_30542_30568[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30528 === (8))){
var inst_30504 = (state_30527[(7)]);
var inst_30514 = cljs.core.next.call(null,inst_30504);
var inst_30504__$1 = inst_30514;
var state_30527__$1 = (function (){var statearr_30543 = state_30527;
(statearr_30543[(7)] = inst_30504__$1);

return statearr_30543;
})();
var statearr_30544_30569 = state_30527__$1;
(statearr_30544_30569[(2)] = null);

(statearr_30544_30569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29669__auto__))
;
return ((function (switch__29557__auto__,c__29669__auto__){
return (function() {
var cljs$core$async$state_machine__29558__auto__ = null;
var cljs$core$async$state_machine__29558__auto____0 = (function (){
var statearr_30548 = [null,null,null,null,null,null,null,null];
(statearr_30548[(0)] = cljs$core$async$state_machine__29558__auto__);

(statearr_30548[(1)] = (1));

return statearr_30548;
});
var cljs$core$async$state_machine__29558__auto____1 = (function (state_30527){
while(true){
var ret_value__29559__auto__ = (function (){try{while(true){
var result__29560__auto__ = switch__29557__auto__.call(null,state_30527);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29560__auto__;
}
break;
}
}catch (e30549){if((e30549 instanceof Object)){
var ex__29561__auto__ = e30549;
var statearr_30550_30570 = state_30527;
(statearr_30550_30570[(5)] = ex__29561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30527);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30549;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30571 = state_30527;
state_30527 = G__30571;
continue;
} else {
return ret_value__29559__auto__;
}
break;
}
});
cljs$core$async$state_machine__29558__auto__ = function(state_30527){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29558__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29558__auto____1.call(this,state_30527);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29558__auto____0;
cljs$core$async$state_machine__29558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29558__auto____1;
return cljs$core$async$state_machine__29558__auto__;
})()
;})(switch__29557__auto__,c__29669__auto__))
})();
var state__29671__auto__ = (function (){var statearr_30551 = f__29670__auto__.call(null);
(statearr_30551[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29669__auto__);

return statearr_30551;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29671__auto__);
});})(c__29669__auto__))
);

return c__29669__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__26652__auto__ = (((_ == null))?null:_);
var m__26653__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__26652__auto__)]);
if(!((m__26653__auto__ == null))){
return m__26653__auto__.call(null,_);
} else {
var m__26653__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__26653__auto____$1 == null))){
return m__26653__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__26652__auto__ = (((m == null))?null:m);
var m__26653__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__26652__auto__)]);
if(!((m__26653__auto__ == null))){
return m__26653__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__26653__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__26653__auto____$1 == null))){
return m__26653__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__26652__auto__ = (((m == null))?null:m);
var m__26653__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__26652__auto__)]);
if(!((m__26653__auto__ == null))){
return m__26653__auto__.call(null,m,ch);
} else {
var m__26653__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__26653__auto____$1 == null))){
return m__26653__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__26652__auto__ = (((m == null))?null:m);
var m__26653__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__26652__auto__)]);
if(!((m__26653__auto__ == null))){
return m__26653__auto__.call(null,m);
} else {
var m__26653__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__26653__auto____$1 == null))){
return m__26653__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async30797 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30797 = (function (mult,ch,cs,meta30798){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta30798 = meta30798;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30797.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_30799,meta30798__$1){
var self__ = this;
var _30799__$1 = this;
return (new cljs.core.async.t_cljs$core$async30797(self__.mult,self__.ch,self__.cs,meta30798__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async30797.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_30799){
var self__ = this;
var _30799__$1 = this;
return self__.meta30798;
});})(cs))
;

cljs.core.async.t_cljs$core$async30797.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30797.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async30797.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async30797.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30797.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30797.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30797.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30798","meta30798",101158698,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async30797.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30797.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30797";

cljs.core.async.t_cljs$core$async30797.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__26595__auto__,writer__26596__auto__,opt__26597__auto__){
return cljs.core._write.call(null,writer__26596__auto__,"cljs.core.async/t_cljs$core$async30797");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async30797 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async30797(mult__$1,ch__$1,cs__$1,meta30798){
return (new cljs.core.async.t_cljs$core$async30797(mult__$1,ch__$1,cs__$1,meta30798));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async30797(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__29669__auto___31022 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29669__auto___31022,cs,m,dchan,dctr,done){
return (function (){
var f__29670__auto__ = (function (){var switch__29557__auto__ = ((function (c__29669__auto___31022,cs,m,dchan,dctr,done){
return (function (state_30934){
var state_val_30935 = (state_30934[(1)]);
if((state_val_30935 === (7))){
var inst_30930 = (state_30934[(2)]);
var state_30934__$1 = state_30934;
var statearr_30936_31023 = state_30934__$1;
(statearr_30936_31023[(2)] = inst_30930);

(statearr_30936_31023[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30935 === (20))){
var inst_30833 = (state_30934[(7)]);
var inst_30845 = cljs.core.first.call(null,inst_30833);
var inst_30846 = cljs.core.nth.call(null,inst_30845,(0),null);
var inst_30847 = cljs.core.nth.call(null,inst_30845,(1),null);
var state_30934__$1 = (function (){var statearr_30937 = state_30934;
(statearr_30937[(8)] = inst_30846);

return statearr_30937;
})();
if(cljs.core.truth_(inst_30847)){
var statearr_30938_31024 = state_30934__$1;
(statearr_30938_31024[(1)] = (22));

} else {
var statearr_30939_31025 = state_30934__$1;
(statearr_30939_31025[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30935 === (27))){
var inst_30802 = (state_30934[(9)]);
var inst_30882 = (state_30934[(10)]);
var inst_30877 = (state_30934[(11)]);
var inst_30875 = (state_30934[(12)]);
var inst_30882__$1 = cljs.core._nth.call(null,inst_30875,inst_30877);
var inst_30883 = cljs.core.async.put_BANG_.call(null,inst_30882__$1,inst_30802,done);
var state_30934__$1 = (function (){var statearr_30940 = state_30934;
(statearr_30940[(10)] = inst_30882__$1);

return statearr_30940;
})();
if(cljs.core.truth_(inst_30883)){
var statearr_30941_31026 = state_30934__$1;
(statearr_30941_31026[(1)] = (30));

} else {
var statearr_30942_31027 = state_30934__$1;
(statearr_30942_31027[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30935 === (1))){
var state_30934__$1 = state_30934;
var statearr_30943_31028 = state_30934__$1;
(statearr_30943_31028[(2)] = null);

(statearr_30943_31028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30935 === (24))){
var inst_30833 = (state_30934[(7)]);
var inst_30852 = (state_30934[(2)]);
var inst_30853 = cljs.core.next.call(null,inst_30833);
var inst_30811 = inst_30853;
var inst_30812 = null;
var inst_30813 = (0);
var inst_30814 = (0);
var state_30934__$1 = (function (){var statearr_30944 = state_30934;
(statearr_30944[(13)] = inst_30814);

(statearr_30944[(14)] = inst_30812);

(statearr_30944[(15)] = inst_30813);

(statearr_30944[(16)] = inst_30811);

(statearr_30944[(17)] = inst_30852);

return statearr_30944;
})();
var statearr_30945_31029 = state_30934__$1;
(statearr_30945_31029[(2)] = null);

(statearr_30945_31029[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30935 === (39))){
var state_30934__$1 = state_30934;
var statearr_30949_31030 = state_30934__$1;
(statearr_30949_31030[(2)] = null);

(statearr_30949_31030[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30935 === (4))){
var inst_30802 = (state_30934[(9)]);
var inst_30802__$1 = (state_30934[(2)]);
var inst_30803 = (inst_30802__$1 == null);
var state_30934__$1 = (function (){var statearr_30950 = state_30934;
(statearr_30950[(9)] = inst_30802__$1);

return statearr_30950;
})();
if(cljs.core.truth_(inst_30803)){
var statearr_30951_31031 = state_30934__$1;
(statearr_30951_31031[(1)] = (5));

} else {
var statearr_30952_31032 = state_30934__$1;
(statearr_30952_31032[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30935 === (15))){
var inst_30814 = (state_30934[(13)]);
var inst_30812 = (state_30934[(14)]);
var inst_30813 = (state_30934[(15)]);
var inst_30811 = (state_30934[(16)]);
var inst_30829 = (state_30934[(2)]);
var inst_30830 = (inst_30814 + (1));
var tmp30946 = inst_30812;
var tmp30947 = inst_30813;
var tmp30948 = inst_30811;
var inst_30811__$1 = tmp30948;
var inst_30812__$1 = tmp30946;
var inst_30813__$1 = tmp30947;
var inst_30814__$1 = inst_30830;
var state_30934__$1 = (function (){var statearr_30953 = state_30934;
(statearr_30953[(13)] = inst_30814__$1);

(statearr_30953[(18)] = inst_30829);

(statearr_30953[(14)] = inst_30812__$1);

(statearr_30953[(15)] = inst_30813__$1);

(statearr_30953[(16)] = inst_30811__$1);

return statearr_30953;
})();
var statearr_30954_31033 = state_30934__$1;
(statearr_30954_31033[(2)] = null);

(statearr_30954_31033[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30935 === (21))){
var inst_30856 = (state_30934[(2)]);
var state_30934__$1 = state_30934;
var statearr_30958_31034 = state_30934__$1;
(statearr_30958_31034[(2)] = inst_30856);

(statearr_30958_31034[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30935 === (31))){
var inst_30882 = (state_30934[(10)]);
var inst_30886 = done.call(null,null);
var inst_30887 = cljs.core.async.untap_STAR_.call(null,m,inst_30882);
var state_30934__$1 = (function (){var statearr_30959 = state_30934;
(statearr_30959[(19)] = inst_30886);

return statearr_30959;
})();
var statearr_30960_31035 = state_30934__$1;
(statearr_30960_31035[(2)] = inst_30887);

(statearr_30960_31035[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30935 === (32))){
var inst_30874 = (state_30934[(20)]);
var inst_30876 = (state_30934[(21)]);
var inst_30877 = (state_30934[(11)]);
var inst_30875 = (state_30934[(12)]);
var inst_30889 = (state_30934[(2)]);
var inst_30890 = (inst_30877 + (1));
var tmp30955 = inst_30874;
var tmp30956 = inst_30876;
var tmp30957 = inst_30875;
var inst_30874__$1 = tmp30955;
var inst_30875__$1 = tmp30957;
var inst_30876__$1 = tmp30956;
var inst_30877__$1 = inst_30890;
var state_30934__$1 = (function (){var statearr_30961 = state_30934;
(statearr_30961[(22)] = inst_30889);

(statearr_30961[(20)] = inst_30874__$1);

(statearr_30961[(21)] = inst_30876__$1);

(statearr_30961[(11)] = inst_30877__$1);

(statearr_30961[(12)] = inst_30875__$1);

return statearr_30961;
})();
var statearr_30962_31036 = state_30934__$1;
(statearr_30962_31036[(2)] = null);

(statearr_30962_31036[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30935 === (40))){
var inst_30902 = (state_30934[(23)]);
var inst_30906 = done.call(null,null);
var inst_30907 = cljs.core.async.untap_STAR_.call(null,m,inst_30902);
var state_30934__$1 = (function (){var statearr_30963 = state_30934;
(statearr_30963[(24)] = inst_30906);

return statearr_30963;
})();
var statearr_30964_31037 = state_30934__$1;
(statearr_30964_31037[(2)] = inst_30907);

(statearr_30964_31037[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30935 === (33))){
var inst_30893 = (state_30934[(25)]);
var inst_30895 = cljs.core.chunked_seq_QMARK_.call(null,inst_30893);
var state_30934__$1 = state_30934;
if(inst_30895){
var statearr_30965_31038 = state_30934__$1;
(statearr_30965_31038[(1)] = (36));

} else {
var statearr_30966_31039 = state_30934__$1;
(statearr_30966_31039[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30935 === (13))){
var inst_30823 = (state_30934[(26)]);
var inst_30826 = cljs.core.async.close_BANG_.call(null,inst_30823);
var state_30934__$1 = state_30934;
var statearr_30967_31040 = state_30934__$1;
(statearr_30967_31040[(2)] = inst_30826);

(statearr_30967_31040[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30935 === (22))){
var inst_30846 = (state_30934[(8)]);
var inst_30849 = cljs.core.async.close_BANG_.call(null,inst_30846);
var state_30934__$1 = state_30934;
var statearr_30968_31041 = state_30934__$1;
(statearr_30968_31041[(2)] = inst_30849);

(statearr_30968_31041[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30935 === (36))){
var inst_30893 = (state_30934[(25)]);
var inst_30897 = cljs.core.chunk_first.call(null,inst_30893);
var inst_30898 = cljs.core.chunk_rest.call(null,inst_30893);
var inst_30899 = cljs.core.count.call(null,inst_30897);
var inst_30874 = inst_30898;
var inst_30875 = inst_30897;
var inst_30876 = inst_30899;
var inst_30877 = (0);
var state_30934__$1 = (function (){var statearr_30969 = state_30934;
(statearr_30969[(20)] = inst_30874);

(statearr_30969[(21)] = inst_30876);

(statearr_30969[(11)] = inst_30877);

(statearr_30969[(12)] = inst_30875);

return statearr_30969;
})();
var statearr_30970_31042 = state_30934__$1;
(statearr_30970_31042[(2)] = null);

(statearr_30970_31042[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30935 === (41))){
var inst_30893 = (state_30934[(25)]);
var inst_30909 = (state_30934[(2)]);
var inst_30910 = cljs.core.next.call(null,inst_30893);
var inst_30874 = inst_30910;
var inst_30875 = null;
var inst_30876 = (0);
var inst_30877 = (0);
var state_30934__$1 = (function (){var statearr_30971 = state_30934;
(statearr_30971[(20)] = inst_30874);

(statearr_30971[(21)] = inst_30876);

(statearr_30971[(27)] = inst_30909);

(statearr_30971[(11)] = inst_30877);

(statearr_30971[(12)] = inst_30875);

return statearr_30971;
})();
var statearr_30972_31043 = state_30934__$1;
(statearr_30972_31043[(2)] = null);

(statearr_30972_31043[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30935 === (43))){
var state_30934__$1 = state_30934;
var statearr_30973_31044 = state_30934__$1;
(statearr_30973_31044[(2)] = null);

(statearr_30973_31044[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30935 === (29))){
var inst_30918 = (state_30934[(2)]);
var state_30934__$1 = state_30934;
var statearr_30974_31045 = state_30934__$1;
(statearr_30974_31045[(2)] = inst_30918);

(statearr_30974_31045[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30935 === (44))){
var inst_30927 = (state_30934[(2)]);
var state_30934__$1 = (function (){var statearr_30975 = state_30934;
(statearr_30975[(28)] = inst_30927);

return statearr_30975;
})();
var statearr_30976_31046 = state_30934__$1;
(statearr_30976_31046[(2)] = null);

(statearr_30976_31046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30935 === (6))){
var inst_30866 = (state_30934[(29)]);
var inst_30865 = cljs.core.deref.call(null,cs);
var inst_30866__$1 = cljs.core.keys.call(null,inst_30865);
var inst_30867 = cljs.core.count.call(null,inst_30866__$1);
var inst_30868 = cljs.core.reset_BANG_.call(null,dctr,inst_30867);
var inst_30873 = cljs.core.seq.call(null,inst_30866__$1);
var inst_30874 = inst_30873;
var inst_30875 = null;
var inst_30876 = (0);
var inst_30877 = (0);
var state_30934__$1 = (function (){var statearr_30977 = state_30934;
(statearr_30977[(20)] = inst_30874);

(statearr_30977[(29)] = inst_30866__$1);

(statearr_30977[(21)] = inst_30876);

(statearr_30977[(30)] = inst_30868);

(statearr_30977[(11)] = inst_30877);

(statearr_30977[(12)] = inst_30875);

return statearr_30977;
})();
var statearr_30978_31047 = state_30934__$1;
(statearr_30978_31047[(2)] = null);

(statearr_30978_31047[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30935 === (28))){
var inst_30874 = (state_30934[(20)]);
var inst_30893 = (state_30934[(25)]);
var inst_30893__$1 = cljs.core.seq.call(null,inst_30874);
var state_30934__$1 = (function (){var statearr_30979 = state_30934;
(statearr_30979[(25)] = inst_30893__$1);

return statearr_30979;
})();
if(inst_30893__$1){
var statearr_30980_31048 = state_30934__$1;
(statearr_30980_31048[(1)] = (33));

} else {
var statearr_30981_31049 = state_30934__$1;
(statearr_30981_31049[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30935 === (25))){
var inst_30876 = (state_30934[(21)]);
var inst_30877 = (state_30934[(11)]);
var inst_30879 = (inst_30877 < inst_30876);
var inst_30880 = inst_30879;
var state_30934__$1 = state_30934;
if(cljs.core.truth_(inst_30880)){
var statearr_30982_31050 = state_30934__$1;
(statearr_30982_31050[(1)] = (27));

} else {
var statearr_30983_31051 = state_30934__$1;
(statearr_30983_31051[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30935 === (34))){
var state_30934__$1 = state_30934;
var statearr_30984_31052 = state_30934__$1;
(statearr_30984_31052[(2)] = null);

(statearr_30984_31052[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30935 === (17))){
var state_30934__$1 = state_30934;
var statearr_30985_31053 = state_30934__$1;
(statearr_30985_31053[(2)] = null);

(statearr_30985_31053[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30935 === (3))){
var inst_30932 = (state_30934[(2)]);
var state_30934__$1 = state_30934;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30934__$1,inst_30932);
} else {
if((state_val_30935 === (12))){
var inst_30861 = (state_30934[(2)]);
var state_30934__$1 = state_30934;
var statearr_30986_31054 = state_30934__$1;
(statearr_30986_31054[(2)] = inst_30861);

(statearr_30986_31054[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30935 === (2))){
var state_30934__$1 = state_30934;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30934__$1,(4),ch);
} else {
if((state_val_30935 === (23))){
var state_30934__$1 = state_30934;
var statearr_30987_31055 = state_30934__$1;
(statearr_30987_31055[(2)] = null);

(statearr_30987_31055[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30935 === (35))){
var inst_30916 = (state_30934[(2)]);
var state_30934__$1 = state_30934;
var statearr_30988_31056 = state_30934__$1;
(statearr_30988_31056[(2)] = inst_30916);

(statearr_30988_31056[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30935 === (19))){
var inst_30833 = (state_30934[(7)]);
var inst_30837 = cljs.core.chunk_first.call(null,inst_30833);
var inst_30838 = cljs.core.chunk_rest.call(null,inst_30833);
var inst_30839 = cljs.core.count.call(null,inst_30837);
var inst_30811 = inst_30838;
var inst_30812 = inst_30837;
var inst_30813 = inst_30839;
var inst_30814 = (0);
var state_30934__$1 = (function (){var statearr_30989 = state_30934;
(statearr_30989[(13)] = inst_30814);

(statearr_30989[(14)] = inst_30812);

(statearr_30989[(15)] = inst_30813);

(statearr_30989[(16)] = inst_30811);

return statearr_30989;
})();
var statearr_30990_31057 = state_30934__$1;
(statearr_30990_31057[(2)] = null);

(statearr_30990_31057[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30935 === (11))){
var inst_30833 = (state_30934[(7)]);
var inst_30811 = (state_30934[(16)]);
var inst_30833__$1 = cljs.core.seq.call(null,inst_30811);
var state_30934__$1 = (function (){var statearr_30991 = state_30934;
(statearr_30991[(7)] = inst_30833__$1);

return statearr_30991;
})();
if(inst_30833__$1){
var statearr_30992_31058 = state_30934__$1;
(statearr_30992_31058[(1)] = (16));

} else {
var statearr_30993_31059 = state_30934__$1;
(statearr_30993_31059[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30935 === (9))){
var inst_30863 = (state_30934[(2)]);
var state_30934__$1 = state_30934;
var statearr_30994_31060 = state_30934__$1;
(statearr_30994_31060[(2)] = inst_30863);

(statearr_30994_31060[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30935 === (5))){
var inst_30809 = cljs.core.deref.call(null,cs);
var inst_30810 = cljs.core.seq.call(null,inst_30809);
var inst_30811 = inst_30810;
var inst_30812 = null;
var inst_30813 = (0);
var inst_30814 = (0);
var state_30934__$1 = (function (){var statearr_30995 = state_30934;
(statearr_30995[(13)] = inst_30814);

(statearr_30995[(14)] = inst_30812);

(statearr_30995[(15)] = inst_30813);

(statearr_30995[(16)] = inst_30811);

return statearr_30995;
})();
var statearr_30996_31061 = state_30934__$1;
(statearr_30996_31061[(2)] = null);

(statearr_30996_31061[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30935 === (14))){
var state_30934__$1 = state_30934;
var statearr_30997_31062 = state_30934__$1;
(statearr_30997_31062[(2)] = null);

(statearr_30997_31062[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30935 === (45))){
var inst_30924 = (state_30934[(2)]);
var state_30934__$1 = state_30934;
var statearr_30998_31063 = state_30934__$1;
(statearr_30998_31063[(2)] = inst_30924);

(statearr_30998_31063[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30935 === (26))){
var inst_30866 = (state_30934[(29)]);
var inst_30920 = (state_30934[(2)]);
var inst_30921 = cljs.core.seq.call(null,inst_30866);
var state_30934__$1 = (function (){var statearr_30999 = state_30934;
(statearr_30999[(31)] = inst_30920);

return statearr_30999;
})();
if(inst_30921){
var statearr_31000_31064 = state_30934__$1;
(statearr_31000_31064[(1)] = (42));

} else {
var statearr_31001_31065 = state_30934__$1;
(statearr_31001_31065[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30935 === (16))){
var inst_30833 = (state_30934[(7)]);
var inst_30835 = cljs.core.chunked_seq_QMARK_.call(null,inst_30833);
var state_30934__$1 = state_30934;
if(inst_30835){
var statearr_31002_31066 = state_30934__$1;
(statearr_31002_31066[(1)] = (19));

} else {
var statearr_31003_31067 = state_30934__$1;
(statearr_31003_31067[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30935 === (38))){
var inst_30913 = (state_30934[(2)]);
var state_30934__$1 = state_30934;
var statearr_31004_31068 = state_30934__$1;
(statearr_31004_31068[(2)] = inst_30913);

(statearr_31004_31068[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30935 === (30))){
var state_30934__$1 = state_30934;
var statearr_31005_31069 = state_30934__$1;
(statearr_31005_31069[(2)] = null);

(statearr_31005_31069[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30935 === (10))){
var inst_30814 = (state_30934[(13)]);
var inst_30812 = (state_30934[(14)]);
var inst_30822 = cljs.core._nth.call(null,inst_30812,inst_30814);
var inst_30823 = cljs.core.nth.call(null,inst_30822,(0),null);
var inst_30824 = cljs.core.nth.call(null,inst_30822,(1),null);
var state_30934__$1 = (function (){var statearr_31006 = state_30934;
(statearr_31006[(26)] = inst_30823);

return statearr_31006;
})();
if(cljs.core.truth_(inst_30824)){
var statearr_31007_31070 = state_30934__$1;
(statearr_31007_31070[(1)] = (13));

} else {
var statearr_31008_31071 = state_30934__$1;
(statearr_31008_31071[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30935 === (18))){
var inst_30859 = (state_30934[(2)]);
var state_30934__$1 = state_30934;
var statearr_31009_31072 = state_30934__$1;
(statearr_31009_31072[(2)] = inst_30859);

(statearr_31009_31072[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30935 === (42))){
var state_30934__$1 = state_30934;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30934__$1,(45),dchan);
} else {
if((state_val_30935 === (37))){
var inst_30802 = (state_30934[(9)]);
var inst_30893 = (state_30934[(25)]);
var inst_30902 = (state_30934[(23)]);
var inst_30902__$1 = cljs.core.first.call(null,inst_30893);
var inst_30903 = cljs.core.async.put_BANG_.call(null,inst_30902__$1,inst_30802,done);
var state_30934__$1 = (function (){var statearr_31010 = state_30934;
(statearr_31010[(23)] = inst_30902__$1);

return statearr_31010;
})();
if(cljs.core.truth_(inst_30903)){
var statearr_31011_31073 = state_30934__$1;
(statearr_31011_31073[(1)] = (39));

} else {
var statearr_31012_31074 = state_30934__$1;
(statearr_31012_31074[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30935 === (8))){
var inst_30814 = (state_30934[(13)]);
var inst_30813 = (state_30934[(15)]);
var inst_30816 = (inst_30814 < inst_30813);
var inst_30817 = inst_30816;
var state_30934__$1 = state_30934;
if(cljs.core.truth_(inst_30817)){
var statearr_31013_31075 = state_30934__$1;
(statearr_31013_31075[(1)] = (10));

} else {
var statearr_31014_31076 = state_30934__$1;
(statearr_31014_31076[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29669__auto___31022,cs,m,dchan,dctr,done))
;
return ((function (switch__29557__auto__,c__29669__auto___31022,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__29558__auto__ = null;
var cljs$core$async$mult_$_state_machine__29558__auto____0 = (function (){
var statearr_31018 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31018[(0)] = cljs$core$async$mult_$_state_machine__29558__auto__);

(statearr_31018[(1)] = (1));

return statearr_31018;
});
var cljs$core$async$mult_$_state_machine__29558__auto____1 = (function (state_30934){
while(true){
var ret_value__29559__auto__ = (function (){try{while(true){
var result__29560__auto__ = switch__29557__auto__.call(null,state_30934);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29560__auto__;
}
break;
}
}catch (e31019){if((e31019 instanceof Object)){
var ex__29561__auto__ = e31019;
var statearr_31020_31077 = state_30934;
(statearr_31020_31077[(5)] = ex__29561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30934);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31019;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31078 = state_30934;
state_30934 = G__31078;
continue;
} else {
return ret_value__29559__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29558__auto__ = function(state_30934){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29558__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29558__auto____1.call(this,state_30934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29558__auto____0;
cljs$core$async$mult_$_state_machine__29558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29558__auto____1;
return cljs$core$async$mult_$_state_machine__29558__auto__;
})()
;})(switch__29557__auto__,c__29669__auto___31022,cs,m,dchan,dctr,done))
})();
var state__29671__auto__ = (function (){var statearr_31021 = f__29670__auto__.call(null);
(statearr_31021[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29669__auto___31022);

return statearr_31021;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29671__auto__);
});})(c__29669__auto___31022,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args31079 = [];
var len__27064__auto___31082 = arguments.length;
var i__27065__auto___31083 = (0);
while(true){
if((i__27065__auto___31083 < len__27064__auto___31082)){
args31079.push((arguments[i__27065__auto___31083]));

var G__31084 = (i__27065__auto___31083 + (1));
i__27065__auto___31083 = G__31084;
continue;
} else {
}
break;
}

var G__31081 = args31079.length;
switch (G__31081) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31079.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__26652__auto__ = (((m == null))?null:m);
var m__26653__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__26652__auto__)]);
if(!((m__26653__auto__ == null))){
return m__26653__auto__.call(null,m,ch);
} else {
var m__26653__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__26653__auto____$1 == null))){
return m__26653__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__26652__auto__ = (((m == null))?null:m);
var m__26653__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__26652__auto__)]);
if(!((m__26653__auto__ == null))){
return m__26653__auto__.call(null,m,ch);
} else {
var m__26653__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__26653__auto____$1 == null))){
return m__26653__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__26652__auto__ = (((m == null))?null:m);
var m__26653__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__26652__auto__)]);
if(!((m__26653__auto__ == null))){
return m__26653__auto__.call(null,m);
} else {
var m__26653__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__26653__auto____$1 == null))){
return m__26653__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__26652__auto__ = (((m == null))?null:m);
var m__26653__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__26652__auto__)]);
if(!((m__26653__auto__ == null))){
return m__26653__auto__.call(null,m,state_map);
} else {
var m__26653__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__26653__auto____$1 == null))){
return m__26653__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__26652__auto__ = (((m == null))?null:m);
var m__26653__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__26652__auto__)]);
if(!((m__26653__auto__ == null))){
return m__26653__auto__.call(null,m,mode);
} else {
var m__26653__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__26653__auto____$1 == null))){
return m__26653__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__27071__auto__ = [];
var len__27064__auto___31096 = arguments.length;
var i__27065__auto___31097 = (0);
while(true){
if((i__27065__auto___31097 < len__27064__auto___31096)){
args__27071__auto__.push((arguments[i__27065__auto___31097]));

var G__31098 = (i__27065__auto___31097 + (1));
i__27065__auto___31097 = G__31098;
continue;
} else {
}
break;
}

var argseq__27072__auto__ = ((((3) < args__27071__auto__.length))?(new cljs.core.IndexedSeq(args__27071__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__27072__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31090){
var map__31091 = p__31090;
var map__31091__$1 = ((((!((map__31091 == null)))?((((map__31091.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31091.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31091):map__31091);
var opts = map__31091__$1;
var statearr_31093_31099 = state;
(statearr_31093_31099[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__31091,map__31091__$1,opts){
return (function (val){
var statearr_31094_31100 = state;
(statearr_31094_31100[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__31091,map__31091__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_31095_31101 = state;
(statearr_31095_31101[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31086){
var G__31087 = cljs.core.first.call(null,seq31086);
var seq31086__$1 = cljs.core.next.call(null,seq31086);
var G__31088 = cljs.core.first.call(null,seq31086__$1);
var seq31086__$2 = cljs.core.next.call(null,seq31086__$1);
var G__31089 = cljs.core.first.call(null,seq31086__$2);
var seq31086__$3 = cljs.core.next.call(null,seq31086__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31087,G__31088,G__31089,seq31086__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async31267 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31267 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31268){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31268 = meta31268;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31267.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31269,meta31268__$1){
var self__ = this;
var _31269__$1 = this;
return (new cljs.core.async.t_cljs$core$async31267(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31268__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31267.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31269){
var self__ = this;
var _31269__$1 = this;
return self__.meta31268;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31267.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async31267.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31267.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async31267.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31267.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31267.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31267.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31267.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31267.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31268","meta31268",1194045177,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31267.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31267.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31267";

cljs.core.async.t_cljs$core$async31267.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__26595__auto__,writer__26596__auto__,opt__26597__auto__){
return cljs.core._write.call(null,writer__26596__auto__,"cljs.core.async/t_cljs$core$async31267");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async31267 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async31267(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31268){
return (new cljs.core.async.t_cljs$core$async31267(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31268));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async31267(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29669__auto___31432 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29669__auto___31432,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__29670__auto__ = (function (){var switch__29557__auto__ = ((function (c__29669__auto___31432,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_31369){
var state_val_31370 = (state_31369[(1)]);
if((state_val_31370 === (7))){
var inst_31285 = (state_31369[(2)]);
var state_31369__$1 = state_31369;
var statearr_31371_31433 = state_31369__$1;
(statearr_31371_31433[(2)] = inst_31285);

(statearr_31371_31433[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31370 === (20))){
var inst_31297 = (state_31369[(7)]);
var state_31369__$1 = state_31369;
var statearr_31372_31434 = state_31369__$1;
(statearr_31372_31434[(2)] = inst_31297);

(statearr_31372_31434[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31370 === (27))){
var state_31369__$1 = state_31369;
var statearr_31373_31435 = state_31369__$1;
(statearr_31373_31435[(2)] = null);

(statearr_31373_31435[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31370 === (1))){
var inst_31273 = (state_31369[(8)]);
var inst_31273__$1 = calc_state.call(null);
var inst_31275 = (inst_31273__$1 == null);
var inst_31276 = cljs.core.not.call(null,inst_31275);
var state_31369__$1 = (function (){var statearr_31374 = state_31369;
(statearr_31374[(8)] = inst_31273__$1);

return statearr_31374;
})();
if(inst_31276){
var statearr_31375_31436 = state_31369__$1;
(statearr_31375_31436[(1)] = (2));

} else {
var statearr_31376_31437 = state_31369__$1;
(statearr_31376_31437[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31370 === (24))){
var inst_31320 = (state_31369[(9)]);
var inst_31343 = (state_31369[(10)]);
var inst_31329 = (state_31369[(11)]);
var inst_31343__$1 = inst_31320.call(null,inst_31329);
var state_31369__$1 = (function (){var statearr_31377 = state_31369;
(statearr_31377[(10)] = inst_31343__$1);

return statearr_31377;
})();
if(cljs.core.truth_(inst_31343__$1)){
var statearr_31378_31438 = state_31369__$1;
(statearr_31378_31438[(1)] = (29));

} else {
var statearr_31379_31439 = state_31369__$1;
(statearr_31379_31439[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31370 === (4))){
var inst_31288 = (state_31369[(2)]);
var state_31369__$1 = state_31369;
if(cljs.core.truth_(inst_31288)){
var statearr_31380_31440 = state_31369__$1;
(statearr_31380_31440[(1)] = (8));

} else {
var statearr_31381_31441 = state_31369__$1;
(statearr_31381_31441[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31370 === (15))){
var inst_31314 = (state_31369[(2)]);
var state_31369__$1 = state_31369;
if(cljs.core.truth_(inst_31314)){
var statearr_31382_31442 = state_31369__$1;
(statearr_31382_31442[(1)] = (19));

} else {
var statearr_31383_31443 = state_31369__$1;
(statearr_31383_31443[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31370 === (21))){
var inst_31319 = (state_31369[(12)]);
var inst_31319__$1 = (state_31369[(2)]);
var inst_31320 = cljs.core.get.call(null,inst_31319__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31321 = cljs.core.get.call(null,inst_31319__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31322 = cljs.core.get.call(null,inst_31319__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31369__$1 = (function (){var statearr_31384 = state_31369;
(statearr_31384[(12)] = inst_31319__$1);

(statearr_31384[(9)] = inst_31320);

(statearr_31384[(13)] = inst_31321);

return statearr_31384;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_31369__$1,(22),inst_31322);
} else {
if((state_val_31370 === (31))){
var inst_31351 = (state_31369[(2)]);
var state_31369__$1 = state_31369;
if(cljs.core.truth_(inst_31351)){
var statearr_31385_31444 = state_31369__$1;
(statearr_31385_31444[(1)] = (32));

} else {
var statearr_31386_31445 = state_31369__$1;
(statearr_31386_31445[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31370 === (32))){
var inst_31328 = (state_31369[(14)]);
var state_31369__$1 = state_31369;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31369__$1,(35),out,inst_31328);
} else {
if((state_val_31370 === (33))){
var inst_31319 = (state_31369[(12)]);
var inst_31297 = inst_31319;
var state_31369__$1 = (function (){var statearr_31387 = state_31369;
(statearr_31387[(7)] = inst_31297);

return statearr_31387;
})();
var statearr_31388_31446 = state_31369__$1;
(statearr_31388_31446[(2)] = null);

(statearr_31388_31446[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31370 === (13))){
var inst_31297 = (state_31369[(7)]);
var inst_31304 = inst_31297.cljs$lang$protocol_mask$partition0$;
var inst_31305 = (inst_31304 & (64));
var inst_31306 = inst_31297.cljs$core$ISeq$;
var inst_31307 = (inst_31305) || (inst_31306);
var state_31369__$1 = state_31369;
if(cljs.core.truth_(inst_31307)){
var statearr_31389_31447 = state_31369__$1;
(statearr_31389_31447[(1)] = (16));

} else {
var statearr_31390_31448 = state_31369__$1;
(statearr_31390_31448[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31370 === (22))){
var inst_31328 = (state_31369[(14)]);
var inst_31329 = (state_31369[(11)]);
var inst_31327 = (state_31369[(2)]);
var inst_31328__$1 = cljs.core.nth.call(null,inst_31327,(0),null);
var inst_31329__$1 = cljs.core.nth.call(null,inst_31327,(1),null);
var inst_31330 = (inst_31328__$1 == null);
var inst_31331 = cljs.core._EQ_.call(null,inst_31329__$1,change);
var inst_31332 = (inst_31330) || (inst_31331);
var state_31369__$1 = (function (){var statearr_31391 = state_31369;
(statearr_31391[(14)] = inst_31328__$1);

(statearr_31391[(11)] = inst_31329__$1);

return statearr_31391;
})();
if(cljs.core.truth_(inst_31332)){
var statearr_31392_31449 = state_31369__$1;
(statearr_31392_31449[(1)] = (23));

} else {
var statearr_31393_31450 = state_31369__$1;
(statearr_31393_31450[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31370 === (36))){
var inst_31319 = (state_31369[(12)]);
var inst_31297 = inst_31319;
var state_31369__$1 = (function (){var statearr_31394 = state_31369;
(statearr_31394[(7)] = inst_31297);

return statearr_31394;
})();
var statearr_31395_31451 = state_31369__$1;
(statearr_31395_31451[(2)] = null);

(statearr_31395_31451[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31370 === (29))){
var inst_31343 = (state_31369[(10)]);
var state_31369__$1 = state_31369;
var statearr_31396_31452 = state_31369__$1;
(statearr_31396_31452[(2)] = inst_31343);

(statearr_31396_31452[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31370 === (6))){
var state_31369__$1 = state_31369;
var statearr_31397_31453 = state_31369__$1;
(statearr_31397_31453[(2)] = false);

(statearr_31397_31453[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31370 === (28))){
var inst_31339 = (state_31369[(2)]);
var inst_31340 = calc_state.call(null);
var inst_31297 = inst_31340;
var state_31369__$1 = (function (){var statearr_31398 = state_31369;
(statearr_31398[(15)] = inst_31339);

(statearr_31398[(7)] = inst_31297);

return statearr_31398;
})();
var statearr_31399_31454 = state_31369__$1;
(statearr_31399_31454[(2)] = null);

(statearr_31399_31454[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31370 === (25))){
var inst_31365 = (state_31369[(2)]);
var state_31369__$1 = state_31369;
var statearr_31400_31455 = state_31369__$1;
(statearr_31400_31455[(2)] = inst_31365);

(statearr_31400_31455[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31370 === (34))){
var inst_31363 = (state_31369[(2)]);
var state_31369__$1 = state_31369;
var statearr_31401_31456 = state_31369__$1;
(statearr_31401_31456[(2)] = inst_31363);

(statearr_31401_31456[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31370 === (17))){
var state_31369__$1 = state_31369;
var statearr_31402_31457 = state_31369__$1;
(statearr_31402_31457[(2)] = false);

(statearr_31402_31457[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31370 === (3))){
var state_31369__$1 = state_31369;
var statearr_31403_31458 = state_31369__$1;
(statearr_31403_31458[(2)] = false);

(statearr_31403_31458[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31370 === (12))){
var inst_31367 = (state_31369[(2)]);
var state_31369__$1 = state_31369;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31369__$1,inst_31367);
} else {
if((state_val_31370 === (2))){
var inst_31273 = (state_31369[(8)]);
var inst_31278 = inst_31273.cljs$lang$protocol_mask$partition0$;
var inst_31279 = (inst_31278 & (64));
var inst_31280 = inst_31273.cljs$core$ISeq$;
var inst_31281 = (inst_31279) || (inst_31280);
var state_31369__$1 = state_31369;
if(cljs.core.truth_(inst_31281)){
var statearr_31404_31459 = state_31369__$1;
(statearr_31404_31459[(1)] = (5));

} else {
var statearr_31405_31460 = state_31369__$1;
(statearr_31405_31460[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31370 === (23))){
var inst_31328 = (state_31369[(14)]);
var inst_31334 = (inst_31328 == null);
var state_31369__$1 = state_31369;
if(cljs.core.truth_(inst_31334)){
var statearr_31406_31461 = state_31369__$1;
(statearr_31406_31461[(1)] = (26));

} else {
var statearr_31407_31462 = state_31369__$1;
(statearr_31407_31462[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31370 === (35))){
var inst_31354 = (state_31369[(2)]);
var state_31369__$1 = state_31369;
if(cljs.core.truth_(inst_31354)){
var statearr_31408_31463 = state_31369__$1;
(statearr_31408_31463[(1)] = (36));

} else {
var statearr_31409_31464 = state_31369__$1;
(statearr_31409_31464[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31370 === (19))){
var inst_31297 = (state_31369[(7)]);
var inst_31316 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31297);
var state_31369__$1 = state_31369;
var statearr_31410_31465 = state_31369__$1;
(statearr_31410_31465[(2)] = inst_31316);

(statearr_31410_31465[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31370 === (11))){
var inst_31297 = (state_31369[(7)]);
var inst_31301 = (inst_31297 == null);
var inst_31302 = cljs.core.not.call(null,inst_31301);
var state_31369__$1 = state_31369;
if(inst_31302){
var statearr_31411_31466 = state_31369__$1;
(statearr_31411_31466[(1)] = (13));

} else {
var statearr_31412_31467 = state_31369__$1;
(statearr_31412_31467[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31370 === (9))){
var inst_31273 = (state_31369[(8)]);
var state_31369__$1 = state_31369;
var statearr_31413_31468 = state_31369__$1;
(statearr_31413_31468[(2)] = inst_31273);

(statearr_31413_31468[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31370 === (5))){
var state_31369__$1 = state_31369;
var statearr_31414_31469 = state_31369__$1;
(statearr_31414_31469[(2)] = true);

(statearr_31414_31469[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31370 === (14))){
var state_31369__$1 = state_31369;
var statearr_31415_31470 = state_31369__$1;
(statearr_31415_31470[(2)] = false);

(statearr_31415_31470[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31370 === (26))){
var inst_31329 = (state_31369[(11)]);
var inst_31336 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_31329);
var state_31369__$1 = state_31369;
var statearr_31416_31471 = state_31369__$1;
(statearr_31416_31471[(2)] = inst_31336);

(statearr_31416_31471[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31370 === (16))){
var state_31369__$1 = state_31369;
var statearr_31417_31472 = state_31369__$1;
(statearr_31417_31472[(2)] = true);

(statearr_31417_31472[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31370 === (38))){
var inst_31359 = (state_31369[(2)]);
var state_31369__$1 = state_31369;
var statearr_31418_31473 = state_31369__$1;
(statearr_31418_31473[(2)] = inst_31359);

(statearr_31418_31473[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31370 === (30))){
var inst_31320 = (state_31369[(9)]);
var inst_31321 = (state_31369[(13)]);
var inst_31329 = (state_31369[(11)]);
var inst_31346 = cljs.core.empty_QMARK_.call(null,inst_31320);
var inst_31347 = inst_31321.call(null,inst_31329);
var inst_31348 = cljs.core.not.call(null,inst_31347);
var inst_31349 = (inst_31346) && (inst_31348);
var state_31369__$1 = state_31369;
var statearr_31419_31474 = state_31369__$1;
(statearr_31419_31474[(2)] = inst_31349);

(statearr_31419_31474[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31370 === (10))){
var inst_31273 = (state_31369[(8)]);
var inst_31293 = (state_31369[(2)]);
var inst_31294 = cljs.core.get.call(null,inst_31293,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31295 = cljs.core.get.call(null,inst_31293,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31296 = cljs.core.get.call(null,inst_31293,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31297 = inst_31273;
var state_31369__$1 = (function (){var statearr_31420 = state_31369;
(statearr_31420[(16)] = inst_31294);

(statearr_31420[(17)] = inst_31296);

(statearr_31420[(18)] = inst_31295);

(statearr_31420[(7)] = inst_31297);

return statearr_31420;
})();
var statearr_31421_31475 = state_31369__$1;
(statearr_31421_31475[(2)] = null);

(statearr_31421_31475[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31370 === (18))){
var inst_31311 = (state_31369[(2)]);
var state_31369__$1 = state_31369;
var statearr_31422_31476 = state_31369__$1;
(statearr_31422_31476[(2)] = inst_31311);

(statearr_31422_31476[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31370 === (37))){
var state_31369__$1 = state_31369;
var statearr_31423_31477 = state_31369__$1;
(statearr_31423_31477[(2)] = null);

(statearr_31423_31477[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31370 === (8))){
var inst_31273 = (state_31369[(8)]);
var inst_31290 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31273);
var state_31369__$1 = state_31369;
var statearr_31424_31478 = state_31369__$1;
(statearr_31424_31478[(2)] = inst_31290);

(statearr_31424_31478[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29669__auto___31432,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__29557__auto__,c__29669__auto___31432,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__29558__auto__ = null;
var cljs$core$async$mix_$_state_machine__29558__auto____0 = (function (){
var statearr_31428 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31428[(0)] = cljs$core$async$mix_$_state_machine__29558__auto__);

(statearr_31428[(1)] = (1));

return statearr_31428;
});
var cljs$core$async$mix_$_state_machine__29558__auto____1 = (function (state_31369){
while(true){
var ret_value__29559__auto__ = (function (){try{while(true){
var result__29560__auto__ = switch__29557__auto__.call(null,state_31369);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29560__auto__;
}
break;
}
}catch (e31429){if((e31429 instanceof Object)){
var ex__29561__auto__ = e31429;
var statearr_31430_31479 = state_31369;
(statearr_31430_31479[(5)] = ex__29561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31369);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31429;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31480 = state_31369;
state_31369 = G__31480;
continue;
} else {
return ret_value__29559__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29558__auto__ = function(state_31369){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29558__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29558__auto____1.call(this,state_31369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29558__auto____0;
cljs$core$async$mix_$_state_machine__29558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29558__auto____1;
return cljs$core$async$mix_$_state_machine__29558__auto__;
})()
;})(switch__29557__auto__,c__29669__auto___31432,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__29671__auto__ = (function (){var statearr_31431 = f__29670__auto__.call(null);
(statearr_31431[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29669__auto___31432);

return statearr_31431;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29671__auto__);
});})(c__29669__auto___31432,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__26652__auto__ = (((p == null))?null:p);
var m__26653__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__26652__auto__)]);
if(!((m__26653__auto__ == null))){
return m__26653__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__26653__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__26653__auto____$1 == null))){
return m__26653__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__26652__auto__ = (((p == null))?null:p);
var m__26653__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__26652__auto__)]);
if(!((m__26653__auto__ == null))){
return m__26653__auto__.call(null,p,v,ch);
} else {
var m__26653__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__26653__auto____$1 == null))){
return m__26653__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args31481 = [];
var len__27064__auto___31484 = arguments.length;
var i__27065__auto___31485 = (0);
while(true){
if((i__27065__auto___31485 < len__27064__auto___31484)){
args31481.push((arguments[i__27065__auto___31485]));

var G__31486 = (i__27065__auto___31485 + (1));
i__27065__auto___31485 = G__31486;
continue;
} else {
}
break;
}

var G__31483 = args31481.length;
switch (G__31483) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31481.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__26652__auto__ = (((p == null))?null:p);
var m__26653__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__26652__auto__)]);
if(!((m__26653__auto__ == null))){
return m__26653__auto__.call(null,p);
} else {
var m__26653__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__26653__auto____$1 == null))){
return m__26653__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__26652__auto__ = (((p == null))?null:p);
var m__26653__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__26652__auto__)]);
if(!((m__26653__auto__ == null))){
return m__26653__auto__.call(null,p,v);
} else {
var m__26653__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__26653__auto____$1 == null))){
return m__26653__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args31489 = [];
var len__27064__auto___31614 = arguments.length;
var i__27065__auto___31615 = (0);
while(true){
if((i__27065__auto___31615 < len__27064__auto___31614)){
args31489.push((arguments[i__27065__auto___31615]));

var G__31616 = (i__27065__auto___31615 + (1));
i__27065__auto___31615 = G__31616;
continue;
} else {
}
break;
}

var G__31491 = args31489.length;
switch (G__31491) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31489.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__25989__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__25989__auto__)){
return or__25989__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__25989__auto__,mults){
return (function (p1__31488_SHARP_){
if(cljs.core.truth_(p1__31488_SHARP_.call(null,topic))){
return p1__31488_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__31488_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__25989__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async31492 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31492 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31493){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31493 = meta31493;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31492.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_31494,meta31493__$1){
var self__ = this;
var _31494__$1 = this;
return (new cljs.core.async.t_cljs$core$async31492(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31493__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31492.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_31494){
var self__ = this;
var _31494__$1 = this;
return self__.meta31493;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31492.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async31492.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31492.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async31492.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31492.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31492.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31492.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31492.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31493","meta31493",-2100015289,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31492.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31492.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31492";

cljs.core.async.t_cljs$core$async31492.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__26595__auto__,writer__26596__auto__,opt__26597__auto__){
return cljs.core._write.call(null,writer__26596__auto__,"cljs.core.async/t_cljs$core$async31492");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async31492 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async31492(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31493){
return (new cljs.core.async.t_cljs$core$async31492(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31493));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async31492(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29669__auto___31618 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29669__auto___31618,mults,ensure_mult,p){
return (function (){
var f__29670__auto__ = (function (){var switch__29557__auto__ = ((function (c__29669__auto___31618,mults,ensure_mult,p){
return (function (state_31566){
var state_val_31567 = (state_31566[(1)]);
if((state_val_31567 === (7))){
var inst_31562 = (state_31566[(2)]);
var state_31566__$1 = state_31566;
var statearr_31568_31619 = state_31566__$1;
(statearr_31568_31619[(2)] = inst_31562);

(statearr_31568_31619[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31567 === (20))){
var state_31566__$1 = state_31566;
var statearr_31569_31620 = state_31566__$1;
(statearr_31569_31620[(2)] = null);

(statearr_31569_31620[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31567 === (1))){
var state_31566__$1 = state_31566;
var statearr_31570_31621 = state_31566__$1;
(statearr_31570_31621[(2)] = null);

(statearr_31570_31621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31567 === (24))){
var inst_31545 = (state_31566[(7)]);
var inst_31554 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_31545);
var state_31566__$1 = state_31566;
var statearr_31571_31622 = state_31566__$1;
(statearr_31571_31622[(2)] = inst_31554);

(statearr_31571_31622[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31567 === (4))){
var inst_31497 = (state_31566[(8)]);
var inst_31497__$1 = (state_31566[(2)]);
var inst_31498 = (inst_31497__$1 == null);
var state_31566__$1 = (function (){var statearr_31572 = state_31566;
(statearr_31572[(8)] = inst_31497__$1);

return statearr_31572;
})();
if(cljs.core.truth_(inst_31498)){
var statearr_31573_31623 = state_31566__$1;
(statearr_31573_31623[(1)] = (5));

} else {
var statearr_31574_31624 = state_31566__$1;
(statearr_31574_31624[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31567 === (15))){
var inst_31539 = (state_31566[(2)]);
var state_31566__$1 = state_31566;
var statearr_31575_31625 = state_31566__$1;
(statearr_31575_31625[(2)] = inst_31539);

(statearr_31575_31625[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31567 === (21))){
var inst_31559 = (state_31566[(2)]);
var state_31566__$1 = (function (){var statearr_31576 = state_31566;
(statearr_31576[(9)] = inst_31559);

return statearr_31576;
})();
var statearr_31577_31626 = state_31566__$1;
(statearr_31577_31626[(2)] = null);

(statearr_31577_31626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31567 === (13))){
var inst_31521 = (state_31566[(10)]);
var inst_31523 = cljs.core.chunked_seq_QMARK_.call(null,inst_31521);
var state_31566__$1 = state_31566;
if(inst_31523){
var statearr_31578_31627 = state_31566__$1;
(statearr_31578_31627[(1)] = (16));

} else {
var statearr_31579_31628 = state_31566__$1;
(statearr_31579_31628[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31567 === (22))){
var inst_31551 = (state_31566[(2)]);
var state_31566__$1 = state_31566;
if(cljs.core.truth_(inst_31551)){
var statearr_31580_31629 = state_31566__$1;
(statearr_31580_31629[(1)] = (23));

} else {
var statearr_31581_31630 = state_31566__$1;
(statearr_31581_31630[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31567 === (6))){
var inst_31545 = (state_31566[(7)]);
var inst_31547 = (state_31566[(11)]);
var inst_31497 = (state_31566[(8)]);
var inst_31545__$1 = topic_fn.call(null,inst_31497);
var inst_31546 = cljs.core.deref.call(null,mults);
var inst_31547__$1 = cljs.core.get.call(null,inst_31546,inst_31545__$1);
var state_31566__$1 = (function (){var statearr_31582 = state_31566;
(statearr_31582[(7)] = inst_31545__$1);

(statearr_31582[(11)] = inst_31547__$1);

return statearr_31582;
})();
if(cljs.core.truth_(inst_31547__$1)){
var statearr_31583_31631 = state_31566__$1;
(statearr_31583_31631[(1)] = (19));

} else {
var statearr_31584_31632 = state_31566__$1;
(statearr_31584_31632[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31567 === (25))){
var inst_31556 = (state_31566[(2)]);
var state_31566__$1 = state_31566;
var statearr_31585_31633 = state_31566__$1;
(statearr_31585_31633[(2)] = inst_31556);

(statearr_31585_31633[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31567 === (17))){
var inst_31521 = (state_31566[(10)]);
var inst_31530 = cljs.core.first.call(null,inst_31521);
var inst_31531 = cljs.core.async.muxch_STAR_.call(null,inst_31530);
var inst_31532 = cljs.core.async.close_BANG_.call(null,inst_31531);
var inst_31533 = cljs.core.next.call(null,inst_31521);
var inst_31507 = inst_31533;
var inst_31508 = null;
var inst_31509 = (0);
var inst_31510 = (0);
var state_31566__$1 = (function (){var statearr_31586 = state_31566;
(statearr_31586[(12)] = inst_31508);

(statearr_31586[(13)] = inst_31532);

(statearr_31586[(14)] = inst_31507);

(statearr_31586[(15)] = inst_31510);

(statearr_31586[(16)] = inst_31509);

return statearr_31586;
})();
var statearr_31587_31634 = state_31566__$1;
(statearr_31587_31634[(2)] = null);

(statearr_31587_31634[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31567 === (3))){
var inst_31564 = (state_31566[(2)]);
var state_31566__$1 = state_31566;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31566__$1,inst_31564);
} else {
if((state_val_31567 === (12))){
var inst_31541 = (state_31566[(2)]);
var state_31566__$1 = state_31566;
var statearr_31588_31635 = state_31566__$1;
(statearr_31588_31635[(2)] = inst_31541);

(statearr_31588_31635[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31567 === (2))){
var state_31566__$1 = state_31566;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31566__$1,(4),ch);
} else {
if((state_val_31567 === (23))){
var state_31566__$1 = state_31566;
var statearr_31589_31636 = state_31566__$1;
(statearr_31589_31636[(2)] = null);

(statearr_31589_31636[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31567 === (19))){
var inst_31547 = (state_31566[(11)]);
var inst_31497 = (state_31566[(8)]);
var inst_31549 = cljs.core.async.muxch_STAR_.call(null,inst_31547);
var state_31566__$1 = state_31566;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31566__$1,(22),inst_31549,inst_31497);
} else {
if((state_val_31567 === (11))){
var inst_31521 = (state_31566[(10)]);
var inst_31507 = (state_31566[(14)]);
var inst_31521__$1 = cljs.core.seq.call(null,inst_31507);
var state_31566__$1 = (function (){var statearr_31590 = state_31566;
(statearr_31590[(10)] = inst_31521__$1);

return statearr_31590;
})();
if(inst_31521__$1){
var statearr_31591_31637 = state_31566__$1;
(statearr_31591_31637[(1)] = (13));

} else {
var statearr_31592_31638 = state_31566__$1;
(statearr_31592_31638[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31567 === (9))){
var inst_31543 = (state_31566[(2)]);
var state_31566__$1 = state_31566;
var statearr_31593_31639 = state_31566__$1;
(statearr_31593_31639[(2)] = inst_31543);

(statearr_31593_31639[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31567 === (5))){
var inst_31504 = cljs.core.deref.call(null,mults);
var inst_31505 = cljs.core.vals.call(null,inst_31504);
var inst_31506 = cljs.core.seq.call(null,inst_31505);
var inst_31507 = inst_31506;
var inst_31508 = null;
var inst_31509 = (0);
var inst_31510 = (0);
var state_31566__$1 = (function (){var statearr_31594 = state_31566;
(statearr_31594[(12)] = inst_31508);

(statearr_31594[(14)] = inst_31507);

(statearr_31594[(15)] = inst_31510);

(statearr_31594[(16)] = inst_31509);

return statearr_31594;
})();
var statearr_31595_31640 = state_31566__$1;
(statearr_31595_31640[(2)] = null);

(statearr_31595_31640[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31567 === (14))){
var state_31566__$1 = state_31566;
var statearr_31599_31641 = state_31566__$1;
(statearr_31599_31641[(2)] = null);

(statearr_31599_31641[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31567 === (16))){
var inst_31521 = (state_31566[(10)]);
var inst_31525 = cljs.core.chunk_first.call(null,inst_31521);
var inst_31526 = cljs.core.chunk_rest.call(null,inst_31521);
var inst_31527 = cljs.core.count.call(null,inst_31525);
var inst_31507 = inst_31526;
var inst_31508 = inst_31525;
var inst_31509 = inst_31527;
var inst_31510 = (0);
var state_31566__$1 = (function (){var statearr_31600 = state_31566;
(statearr_31600[(12)] = inst_31508);

(statearr_31600[(14)] = inst_31507);

(statearr_31600[(15)] = inst_31510);

(statearr_31600[(16)] = inst_31509);

return statearr_31600;
})();
var statearr_31601_31642 = state_31566__$1;
(statearr_31601_31642[(2)] = null);

(statearr_31601_31642[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31567 === (10))){
var inst_31508 = (state_31566[(12)]);
var inst_31507 = (state_31566[(14)]);
var inst_31510 = (state_31566[(15)]);
var inst_31509 = (state_31566[(16)]);
var inst_31515 = cljs.core._nth.call(null,inst_31508,inst_31510);
var inst_31516 = cljs.core.async.muxch_STAR_.call(null,inst_31515);
var inst_31517 = cljs.core.async.close_BANG_.call(null,inst_31516);
var inst_31518 = (inst_31510 + (1));
var tmp31596 = inst_31508;
var tmp31597 = inst_31507;
var tmp31598 = inst_31509;
var inst_31507__$1 = tmp31597;
var inst_31508__$1 = tmp31596;
var inst_31509__$1 = tmp31598;
var inst_31510__$1 = inst_31518;
var state_31566__$1 = (function (){var statearr_31602 = state_31566;
(statearr_31602[(12)] = inst_31508__$1);

(statearr_31602[(14)] = inst_31507__$1);

(statearr_31602[(15)] = inst_31510__$1);

(statearr_31602[(17)] = inst_31517);

(statearr_31602[(16)] = inst_31509__$1);

return statearr_31602;
})();
var statearr_31603_31643 = state_31566__$1;
(statearr_31603_31643[(2)] = null);

(statearr_31603_31643[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31567 === (18))){
var inst_31536 = (state_31566[(2)]);
var state_31566__$1 = state_31566;
var statearr_31604_31644 = state_31566__$1;
(statearr_31604_31644[(2)] = inst_31536);

(statearr_31604_31644[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31567 === (8))){
var inst_31510 = (state_31566[(15)]);
var inst_31509 = (state_31566[(16)]);
var inst_31512 = (inst_31510 < inst_31509);
var inst_31513 = inst_31512;
var state_31566__$1 = state_31566;
if(cljs.core.truth_(inst_31513)){
var statearr_31605_31645 = state_31566__$1;
(statearr_31605_31645[(1)] = (10));

} else {
var statearr_31606_31646 = state_31566__$1;
(statearr_31606_31646[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29669__auto___31618,mults,ensure_mult,p))
;
return ((function (switch__29557__auto__,c__29669__auto___31618,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__29558__auto__ = null;
var cljs$core$async$state_machine__29558__auto____0 = (function (){
var statearr_31610 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31610[(0)] = cljs$core$async$state_machine__29558__auto__);

(statearr_31610[(1)] = (1));

return statearr_31610;
});
var cljs$core$async$state_machine__29558__auto____1 = (function (state_31566){
while(true){
var ret_value__29559__auto__ = (function (){try{while(true){
var result__29560__auto__ = switch__29557__auto__.call(null,state_31566);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29560__auto__;
}
break;
}
}catch (e31611){if((e31611 instanceof Object)){
var ex__29561__auto__ = e31611;
var statearr_31612_31647 = state_31566;
(statearr_31612_31647[(5)] = ex__29561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31566);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31611;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31648 = state_31566;
state_31566 = G__31648;
continue;
} else {
return ret_value__29559__auto__;
}
break;
}
});
cljs$core$async$state_machine__29558__auto__ = function(state_31566){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29558__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29558__auto____1.call(this,state_31566);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29558__auto____0;
cljs$core$async$state_machine__29558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29558__auto____1;
return cljs$core$async$state_machine__29558__auto__;
})()
;})(switch__29557__auto__,c__29669__auto___31618,mults,ensure_mult,p))
})();
var state__29671__auto__ = (function (){var statearr_31613 = f__29670__auto__.call(null);
(statearr_31613[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29669__auto___31618);

return statearr_31613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29671__auto__);
});})(c__29669__auto___31618,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args31649 = [];
var len__27064__auto___31652 = arguments.length;
var i__27065__auto___31653 = (0);
while(true){
if((i__27065__auto___31653 < len__27064__auto___31652)){
args31649.push((arguments[i__27065__auto___31653]));

var G__31654 = (i__27065__auto___31653 + (1));
i__27065__auto___31653 = G__31654;
continue;
} else {
}
break;
}

var G__31651 = args31649.length;
switch (G__31651) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31649.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args31656 = [];
var len__27064__auto___31659 = arguments.length;
var i__27065__auto___31660 = (0);
while(true){
if((i__27065__auto___31660 < len__27064__auto___31659)){
args31656.push((arguments[i__27065__auto___31660]));

var G__31661 = (i__27065__auto___31660 + (1));
i__27065__auto___31660 = G__31661;
continue;
} else {
}
break;
}

var G__31658 = args31656.length;
switch (G__31658) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31656.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args31663 = [];
var len__27064__auto___31734 = arguments.length;
var i__27065__auto___31735 = (0);
while(true){
if((i__27065__auto___31735 < len__27064__auto___31734)){
args31663.push((arguments[i__27065__auto___31735]));

var G__31736 = (i__27065__auto___31735 + (1));
i__27065__auto___31735 = G__31736;
continue;
} else {
}
break;
}

var G__31665 = args31663.length;
switch (G__31665) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31663.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__29669__auto___31738 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29669__auto___31738,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__29670__auto__ = (function (){var switch__29557__auto__ = ((function (c__29669__auto___31738,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_31704){
var state_val_31705 = (state_31704[(1)]);
if((state_val_31705 === (7))){
var state_31704__$1 = state_31704;
var statearr_31706_31739 = state_31704__$1;
(statearr_31706_31739[(2)] = null);

(statearr_31706_31739[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31705 === (1))){
var state_31704__$1 = state_31704;
var statearr_31707_31740 = state_31704__$1;
(statearr_31707_31740[(2)] = null);

(statearr_31707_31740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31705 === (4))){
var inst_31668 = (state_31704[(7)]);
var inst_31670 = (inst_31668 < cnt);
var state_31704__$1 = state_31704;
if(cljs.core.truth_(inst_31670)){
var statearr_31708_31741 = state_31704__$1;
(statearr_31708_31741[(1)] = (6));

} else {
var statearr_31709_31742 = state_31704__$1;
(statearr_31709_31742[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31705 === (15))){
var inst_31700 = (state_31704[(2)]);
var state_31704__$1 = state_31704;
var statearr_31710_31743 = state_31704__$1;
(statearr_31710_31743[(2)] = inst_31700);

(statearr_31710_31743[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31705 === (13))){
var inst_31693 = cljs.core.async.close_BANG_.call(null,out);
var state_31704__$1 = state_31704;
var statearr_31711_31744 = state_31704__$1;
(statearr_31711_31744[(2)] = inst_31693);

(statearr_31711_31744[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31705 === (6))){
var state_31704__$1 = state_31704;
var statearr_31712_31745 = state_31704__$1;
(statearr_31712_31745[(2)] = null);

(statearr_31712_31745[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31705 === (3))){
var inst_31702 = (state_31704[(2)]);
var state_31704__$1 = state_31704;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31704__$1,inst_31702);
} else {
if((state_val_31705 === (12))){
var inst_31690 = (state_31704[(8)]);
var inst_31690__$1 = (state_31704[(2)]);
var inst_31691 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_31690__$1);
var state_31704__$1 = (function (){var statearr_31713 = state_31704;
(statearr_31713[(8)] = inst_31690__$1);

return statearr_31713;
})();
if(cljs.core.truth_(inst_31691)){
var statearr_31714_31746 = state_31704__$1;
(statearr_31714_31746[(1)] = (13));

} else {
var statearr_31715_31747 = state_31704__$1;
(statearr_31715_31747[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31705 === (2))){
var inst_31667 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_31668 = (0);
var state_31704__$1 = (function (){var statearr_31716 = state_31704;
(statearr_31716[(7)] = inst_31668);

(statearr_31716[(9)] = inst_31667);

return statearr_31716;
})();
var statearr_31717_31748 = state_31704__$1;
(statearr_31717_31748[(2)] = null);

(statearr_31717_31748[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31705 === (11))){
var inst_31668 = (state_31704[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31704,(10),Object,null,(9));
var inst_31677 = chs__$1.call(null,inst_31668);
var inst_31678 = done.call(null,inst_31668);
var inst_31679 = cljs.core.async.take_BANG_.call(null,inst_31677,inst_31678);
var state_31704__$1 = state_31704;
var statearr_31718_31749 = state_31704__$1;
(statearr_31718_31749[(2)] = inst_31679);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31704__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31705 === (9))){
var inst_31668 = (state_31704[(7)]);
var inst_31681 = (state_31704[(2)]);
var inst_31682 = (inst_31668 + (1));
var inst_31668__$1 = inst_31682;
var state_31704__$1 = (function (){var statearr_31719 = state_31704;
(statearr_31719[(7)] = inst_31668__$1);

(statearr_31719[(10)] = inst_31681);

return statearr_31719;
})();
var statearr_31720_31750 = state_31704__$1;
(statearr_31720_31750[(2)] = null);

(statearr_31720_31750[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31705 === (5))){
var inst_31688 = (state_31704[(2)]);
var state_31704__$1 = (function (){var statearr_31721 = state_31704;
(statearr_31721[(11)] = inst_31688);

return statearr_31721;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31704__$1,(12),dchan);
} else {
if((state_val_31705 === (14))){
var inst_31690 = (state_31704[(8)]);
var inst_31695 = cljs.core.apply.call(null,f,inst_31690);
var state_31704__$1 = state_31704;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31704__$1,(16),out,inst_31695);
} else {
if((state_val_31705 === (16))){
var inst_31697 = (state_31704[(2)]);
var state_31704__$1 = (function (){var statearr_31722 = state_31704;
(statearr_31722[(12)] = inst_31697);

return statearr_31722;
})();
var statearr_31723_31751 = state_31704__$1;
(statearr_31723_31751[(2)] = null);

(statearr_31723_31751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31705 === (10))){
var inst_31672 = (state_31704[(2)]);
var inst_31673 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_31704__$1 = (function (){var statearr_31724 = state_31704;
(statearr_31724[(13)] = inst_31672);

return statearr_31724;
})();
var statearr_31725_31752 = state_31704__$1;
(statearr_31725_31752[(2)] = inst_31673);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31704__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31705 === (8))){
var inst_31686 = (state_31704[(2)]);
var state_31704__$1 = state_31704;
var statearr_31726_31753 = state_31704__$1;
(statearr_31726_31753[(2)] = inst_31686);

(statearr_31726_31753[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29669__auto___31738,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__29557__auto__,c__29669__auto___31738,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__29558__auto__ = null;
var cljs$core$async$state_machine__29558__auto____0 = (function (){
var statearr_31730 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31730[(0)] = cljs$core$async$state_machine__29558__auto__);

(statearr_31730[(1)] = (1));

return statearr_31730;
});
var cljs$core$async$state_machine__29558__auto____1 = (function (state_31704){
while(true){
var ret_value__29559__auto__ = (function (){try{while(true){
var result__29560__auto__ = switch__29557__auto__.call(null,state_31704);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29560__auto__;
}
break;
}
}catch (e31731){if((e31731 instanceof Object)){
var ex__29561__auto__ = e31731;
var statearr_31732_31754 = state_31704;
(statearr_31732_31754[(5)] = ex__29561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31704);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31731;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31755 = state_31704;
state_31704 = G__31755;
continue;
} else {
return ret_value__29559__auto__;
}
break;
}
});
cljs$core$async$state_machine__29558__auto__ = function(state_31704){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29558__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29558__auto____1.call(this,state_31704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29558__auto____0;
cljs$core$async$state_machine__29558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29558__auto____1;
return cljs$core$async$state_machine__29558__auto__;
})()
;})(switch__29557__auto__,c__29669__auto___31738,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__29671__auto__ = (function (){var statearr_31733 = f__29670__auto__.call(null);
(statearr_31733[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29669__auto___31738);

return statearr_31733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29671__auto__);
});})(c__29669__auto___31738,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args31757 = [];
var len__27064__auto___31815 = arguments.length;
var i__27065__auto___31816 = (0);
while(true){
if((i__27065__auto___31816 < len__27064__auto___31815)){
args31757.push((arguments[i__27065__auto___31816]));

var G__31817 = (i__27065__auto___31816 + (1));
i__27065__auto___31816 = G__31817;
continue;
} else {
}
break;
}

var G__31759 = args31757.length;
switch (G__31759) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31757.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29669__auto___31819 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29669__auto___31819,out){
return (function (){
var f__29670__auto__ = (function (){var switch__29557__auto__ = ((function (c__29669__auto___31819,out){
return (function (state_31791){
var state_val_31792 = (state_31791[(1)]);
if((state_val_31792 === (7))){
var inst_31770 = (state_31791[(7)]);
var inst_31771 = (state_31791[(8)]);
var inst_31770__$1 = (state_31791[(2)]);
var inst_31771__$1 = cljs.core.nth.call(null,inst_31770__$1,(0),null);
var inst_31772 = cljs.core.nth.call(null,inst_31770__$1,(1),null);
var inst_31773 = (inst_31771__$1 == null);
var state_31791__$1 = (function (){var statearr_31793 = state_31791;
(statearr_31793[(7)] = inst_31770__$1);

(statearr_31793[(8)] = inst_31771__$1);

(statearr_31793[(9)] = inst_31772);

return statearr_31793;
})();
if(cljs.core.truth_(inst_31773)){
var statearr_31794_31820 = state_31791__$1;
(statearr_31794_31820[(1)] = (8));

} else {
var statearr_31795_31821 = state_31791__$1;
(statearr_31795_31821[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31792 === (1))){
var inst_31760 = cljs.core.vec.call(null,chs);
var inst_31761 = inst_31760;
var state_31791__$1 = (function (){var statearr_31796 = state_31791;
(statearr_31796[(10)] = inst_31761);

return statearr_31796;
})();
var statearr_31797_31822 = state_31791__$1;
(statearr_31797_31822[(2)] = null);

(statearr_31797_31822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31792 === (4))){
var inst_31761 = (state_31791[(10)]);
var state_31791__$1 = state_31791;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31791__$1,(7),inst_31761);
} else {
if((state_val_31792 === (6))){
var inst_31787 = (state_31791[(2)]);
var state_31791__$1 = state_31791;
var statearr_31798_31823 = state_31791__$1;
(statearr_31798_31823[(2)] = inst_31787);

(statearr_31798_31823[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31792 === (3))){
var inst_31789 = (state_31791[(2)]);
var state_31791__$1 = state_31791;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31791__$1,inst_31789);
} else {
if((state_val_31792 === (2))){
var inst_31761 = (state_31791[(10)]);
var inst_31763 = cljs.core.count.call(null,inst_31761);
var inst_31764 = (inst_31763 > (0));
var state_31791__$1 = state_31791;
if(cljs.core.truth_(inst_31764)){
var statearr_31800_31824 = state_31791__$1;
(statearr_31800_31824[(1)] = (4));

} else {
var statearr_31801_31825 = state_31791__$1;
(statearr_31801_31825[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31792 === (11))){
var inst_31761 = (state_31791[(10)]);
var inst_31780 = (state_31791[(2)]);
var tmp31799 = inst_31761;
var inst_31761__$1 = tmp31799;
var state_31791__$1 = (function (){var statearr_31802 = state_31791;
(statearr_31802[(10)] = inst_31761__$1);

(statearr_31802[(11)] = inst_31780);

return statearr_31802;
})();
var statearr_31803_31826 = state_31791__$1;
(statearr_31803_31826[(2)] = null);

(statearr_31803_31826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31792 === (9))){
var inst_31771 = (state_31791[(8)]);
var state_31791__$1 = state_31791;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31791__$1,(11),out,inst_31771);
} else {
if((state_val_31792 === (5))){
var inst_31785 = cljs.core.async.close_BANG_.call(null,out);
var state_31791__$1 = state_31791;
var statearr_31804_31827 = state_31791__$1;
(statearr_31804_31827[(2)] = inst_31785);

(statearr_31804_31827[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31792 === (10))){
var inst_31783 = (state_31791[(2)]);
var state_31791__$1 = state_31791;
var statearr_31805_31828 = state_31791__$1;
(statearr_31805_31828[(2)] = inst_31783);

(statearr_31805_31828[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31792 === (8))){
var inst_31770 = (state_31791[(7)]);
var inst_31761 = (state_31791[(10)]);
var inst_31771 = (state_31791[(8)]);
var inst_31772 = (state_31791[(9)]);
var inst_31775 = (function (){var cs = inst_31761;
var vec__31766 = inst_31770;
var v = inst_31771;
var c = inst_31772;
return ((function (cs,vec__31766,v,c,inst_31770,inst_31761,inst_31771,inst_31772,state_val_31792,c__29669__auto___31819,out){
return (function (p1__31756_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__31756_SHARP_);
});
;})(cs,vec__31766,v,c,inst_31770,inst_31761,inst_31771,inst_31772,state_val_31792,c__29669__auto___31819,out))
})();
var inst_31776 = cljs.core.filterv.call(null,inst_31775,inst_31761);
var inst_31761__$1 = inst_31776;
var state_31791__$1 = (function (){var statearr_31806 = state_31791;
(statearr_31806[(10)] = inst_31761__$1);

return statearr_31806;
})();
var statearr_31807_31829 = state_31791__$1;
(statearr_31807_31829[(2)] = null);

(statearr_31807_31829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__29669__auto___31819,out))
;
return ((function (switch__29557__auto__,c__29669__auto___31819,out){
return (function() {
var cljs$core$async$state_machine__29558__auto__ = null;
var cljs$core$async$state_machine__29558__auto____0 = (function (){
var statearr_31811 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31811[(0)] = cljs$core$async$state_machine__29558__auto__);

(statearr_31811[(1)] = (1));

return statearr_31811;
});
var cljs$core$async$state_machine__29558__auto____1 = (function (state_31791){
while(true){
var ret_value__29559__auto__ = (function (){try{while(true){
var result__29560__auto__ = switch__29557__auto__.call(null,state_31791);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29560__auto__;
}
break;
}
}catch (e31812){if((e31812 instanceof Object)){
var ex__29561__auto__ = e31812;
var statearr_31813_31830 = state_31791;
(statearr_31813_31830[(5)] = ex__29561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31791);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31812;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31831 = state_31791;
state_31791 = G__31831;
continue;
} else {
return ret_value__29559__auto__;
}
break;
}
});
cljs$core$async$state_machine__29558__auto__ = function(state_31791){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29558__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29558__auto____1.call(this,state_31791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29558__auto____0;
cljs$core$async$state_machine__29558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29558__auto____1;
return cljs$core$async$state_machine__29558__auto__;
})()
;})(switch__29557__auto__,c__29669__auto___31819,out))
})();
var state__29671__auto__ = (function (){var statearr_31814 = f__29670__auto__.call(null);
(statearr_31814[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29669__auto___31819);

return statearr_31814;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29671__auto__);
});})(c__29669__auto___31819,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args31832 = [];
var len__27064__auto___31881 = arguments.length;
var i__27065__auto___31882 = (0);
while(true){
if((i__27065__auto___31882 < len__27064__auto___31881)){
args31832.push((arguments[i__27065__auto___31882]));

var G__31883 = (i__27065__auto___31882 + (1));
i__27065__auto___31882 = G__31883;
continue;
} else {
}
break;
}

var G__31834 = args31832.length;
switch (G__31834) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31832.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29669__auto___31885 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29669__auto___31885,out){
return (function (){
var f__29670__auto__ = (function (){var switch__29557__auto__ = ((function (c__29669__auto___31885,out){
return (function (state_31858){
var state_val_31859 = (state_31858[(1)]);
if((state_val_31859 === (7))){
var inst_31840 = (state_31858[(7)]);
var inst_31840__$1 = (state_31858[(2)]);
var inst_31841 = (inst_31840__$1 == null);
var inst_31842 = cljs.core.not.call(null,inst_31841);
var state_31858__$1 = (function (){var statearr_31860 = state_31858;
(statearr_31860[(7)] = inst_31840__$1);

return statearr_31860;
})();
if(inst_31842){
var statearr_31861_31886 = state_31858__$1;
(statearr_31861_31886[(1)] = (8));

} else {
var statearr_31862_31887 = state_31858__$1;
(statearr_31862_31887[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31859 === (1))){
var inst_31835 = (0);
var state_31858__$1 = (function (){var statearr_31863 = state_31858;
(statearr_31863[(8)] = inst_31835);

return statearr_31863;
})();
var statearr_31864_31888 = state_31858__$1;
(statearr_31864_31888[(2)] = null);

(statearr_31864_31888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31859 === (4))){
var state_31858__$1 = state_31858;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31858__$1,(7),ch);
} else {
if((state_val_31859 === (6))){
var inst_31853 = (state_31858[(2)]);
var state_31858__$1 = state_31858;
var statearr_31865_31889 = state_31858__$1;
(statearr_31865_31889[(2)] = inst_31853);

(statearr_31865_31889[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31859 === (3))){
var inst_31855 = (state_31858[(2)]);
var inst_31856 = cljs.core.async.close_BANG_.call(null,out);
var state_31858__$1 = (function (){var statearr_31866 = state_31858;
(statearr_31866[(9)] = inst_31855);

return statearr_31866;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31858__$1,inst_31856);
} else {
if((state_val_31859 === (2))){
var inst_31835 = (state_31858[(8)]);
var inst_31837 = (inst_31835 < n);
var state_31858__$1 = state_31858;
if(cljs.core.truth_(inst_31837)){
var statearr_31867_31890 = state_31858__$1;
(statearr_31867_31890[(1)] = (4));

} else {
var statearr_31868_31891 = state_31858__$1;
(statearr_31868_31891[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31859 === (11))){
var inst_31835 = (state_31858[(8)]);
var inst_31845 = (state_31858[(2)]);
var inst_31846 = (inst_31835 + (1));
var inst_31835__$1 = inst_31846;
var state_31858__$1 = (function (){var statearr_31869 = state_31858;
(statearr_31869[(10)] = inst_31845);

(statearr_31869[(8)] = inst_31835__$1);

return statearr_31869;
})();
var statearr_31870_31892 = state_31858__$1;
(statearr_31870_31892[(2)] = null);

(statearr_31870_31892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31859 === (9))){
var state_31858__$1 = state_31858;
var statearr_31871_31893 = state_31858__$1;
(statearr_31871_31893[(2)] = null);

(statearr_31871_31893[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31859 === (5))){
var state_31858__$1 = state_31858;
var statearr_31872_31894 = state_31858__$1;
(statearr_31872_31894[(2)] = null);

(statearr_31872_31894[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31859 === (10))){
var inst_31850 = (state_31858[(2)]);
var state_31858__$1 = state_31858;
var statearr_31873_31895 = state_31858__$1;
(statearr_31873_31895[(2)] = inst_31850);

(statearr_31873_31895[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31859 === (8))){
var inst_31840 = (state_31858[(7)]);
var state_31858__$1 = state_31858;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31858__$1,(11),out,inst_31840);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__29669__auto___31885,out))
;
return ((function (switch__29557__auto__,c__29669__auto___31885,out){
return (function() {
var cljs$core$async$state_machine__29558__auto__ = null;
var cljs$core$async$state_machine__29558__auto____0 = (function (){
var statearr_31877 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31877[(0)] = cljs$core$async$state_machine__29558__auto__);

(statearr_31877[(1)] = (1));

return statearr_31877;
});
var cljs$core$async$state_machine__29558__auto____1 = (function (state_31858){
while(true){
var ret_value__29559__auto__ = (function (){try{while(true){
var result__29560__auto__ = switch__29557__auto__.call(null,state_31858);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29560__auto__;
}
break;
}
}catch (e31878){if((e31878 instanceof Object)){
var ex__29561__auto__ = e31878;
var statearr_31879_31896 = state_31858;
(statearr_31879_31896[(5)] = ex__29561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31858);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31878;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31897 = state_31858;
state_31858 = G__31897;
continue;
} else {
return ret_value__29559__auto__;
}
break;
}
});
cljs$core$async$state_machine__29558__auto__ = function(state_31858){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29558__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29558__auto____1.call(this,state_31858);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29558__auto____0;
cljs$core$async$state_machine__29558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29558__auto____1;
return cljs$core$async$state_machine__29558__auto__;
})()
;})(switch__29557__auto__,c__29669__auto___31885,out))
})();
var state__29671__auto__ = (function (){var statearr_31880 = f__29670__auto__.call(null);
(statearr_31880[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29669__auto___31885);

return statearr_31880;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29671__auto__);
});})(c__29669__auto___31885,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async31905 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31905 = (function (map_LT_,f,ch,meta31906){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta31906 = meta31906;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31905.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31907,meta31906__$1){
var self__ = this;
var _31907__$1 = this;
return (new cljs.core.async.t_cljs$core$async31905(self__.map_LT_,self__.f,self__.ch,meta31906__$1));
});

cljs.core.async.t_cljs$core$async31905.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31907){
var self__ = this;
var _31907__$1 = this;
return self__.meta31906;
});

cljs.core.async.t_cljs$core$async31905.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async31905.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31905.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31905.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async31905.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async31908 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31908 = (function (map_LT_,f,ch,meta31906,_,fn1,meta31909){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta31906 = meta31906;
this._ = _;
this.fn1 = fn1;
this.meta31909 = meta31909;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31908.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_31910,meta31909__$1){
var self__ = this;
var _31910__$1 = this;
return (new cljs.core.async.t_cljs$core$async31908(self__.map_LT_,self__.f,self__.ch,self__.meta31906,self__._,self__.fn1,meta31909__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async31908.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_31910){
var self__ = this;
var _31910__$1 = this;
return self__.meta31909;
});})(___$1))
;

cljs.core.async.t_cljs$core$async31908.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async31908.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31908.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async31908.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__31898_SHARP_){
return f1.call(null,(((p1__31898_SHARP_ == null))?null:self__.f.call(null,p1__31898_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async31908.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31906","meta31906",-1876277531,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31905","cljs.core.async/t_cljs$core$async31905",933017681,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31909","meta31909",-1359203051,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31908.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31908.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31908";

cljs.core.async.t_cljs$core$async31908.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__26595__auto__,writer__26596__auto__,opt__26597__auto__){
return cljs.core._write.call(null,writer__26596__auto__,"cljs.core.async/t_cljs$core$async31908");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async31908 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31908(map_LT___$1,f__$1,ch__$1,meta31906__$1,___$2,fn1__$1,meta31909){
return (new cljs.core.async.t_cljs$core$async31908(map_LT___$1,f__$1,ch__$1,meta31906__$1,___$2,fn1__$1,meta31909));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async31908(self__.map_LT_,self__.f,self__.ch,self__.meta31906,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__25977__auto__ = ret;
if(cljs.core.truth_(and__25977__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__25977__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async31905.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async31905.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async31905.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31906","meta31906",-1876277531,null)], null);
});

cljs.core.async.t_cljs$core$async31905.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31905.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31905";

cljs.core.async.t_cljs$core$async31905.cljs$lang$ctorPrWriter = (function (this__26595__auto__,writer__26596__auto__,opt__26597__auto__){
return cljs.core._write.call(null,writer__26596__auto__,"cljs.core.async/t_cljs$core$async31905");
});

cljs.core.async.__GT_t_cljs$core$async31905 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31905(map_LT___$1,f__$1,ch__$1,meta31906){
return (new cljs.core.async.t_cljs$core$async31905(map_LT___$1,f__$1,ch__$1,meta31906));
});

}

return (new cljs.core.async.t_cljs$core$async31905(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async31914 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31914 = (function (map_GT_,f,ch,meta31915){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta31915 = meta31915;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31914.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31916,meta31915__$1){
var self__ = this;
var _31916__$1 = this;
return (new cljs.core.async.t_cljs$core$async31914(self__.map_GT_,self__.f,self__.ch,meta31915__$1));
});

cljs.core.async.t_cljs$core$async31914.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31916){
var self__ = this;
var _31916__$1 = this;
return self__.meta31915;
});

cljs.core.async.t_cljs$core$async31914.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async31914.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31914.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async31914.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31914.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async31914.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async31914.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31915","meta31915",1273601790,null)], null);
});

cljs.core.async.t_cljs$core$async31914.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31914.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31914";

cljs.core.async.t_cljs$core$async31914.cljs$lang$ctorPrWriter = (function (this__26595__auto__,writer__26596__auto__,opt__26597__auto__){
return cljs.core._write.call(null,writer__26596__auto__,"cljs.core.async/t_cljs$core$async31914");
});

cljs.core.async.__GT_t_cljs$core$async31914 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31914(map_GT___$1,f__$1,ch__$1,meta31915){
return (new cljs.core.async.t_cljs$core$async31914(map_GT___$1,f__$1,ch__$1,meta31915));
});

}

return (new cljs.core.async.t_cljs$core$async31914(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async31920 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31920 = (function (filter_GT_,p,ch,meta31921){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta31921 = meta31921;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31920.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31922,meta31921__$1){
var self__ = this;
var _31922__$1 = this;
return (new cljs.core.async.t_cljs$core$async31920(self__.filter_GT_,self__.p,self__.ch,meta31921__$1));
});

cljs.core.async.t_cljs$core$async31920.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31922){
var self__ = this;
var _31922__$1 = this;
return self__.meta31921;
});

cljs.core.async.t_cljs$core$async31920.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async31920.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31920.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31920.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async31920.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31920.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async31920.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async31920.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31921","meta31921",799603693,null)], null);
});

cljs.core.async.t_cljs$core$async31920.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31920.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31920";

cljs.core.async.t_cljs$core$async31920.cljs$lang$ctorPrWriter = (function (this__26595__auto__,writer__26596__auto__,opt__26597__auto__){
return cljs.core._write.call(null,writer__26596__auto__,"cljs.core.async/t_cljs$core$async31920");
});

cljs.core.async.__GT_t_cljs$core$async31920 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31920(filter_GT___$1,p__$1,ch__$1,meta31921){
return (new cljs.core.async.t_cljs$core$async31920(filter_GT___$1,p__$1,ch__$1,meta31921));
});

}

return (new cljs.core.async.t_cljs$core$async31920(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args31923 = [];
var len__27064__auto___31967 = arguments.length;
var i__27065__auto___31968 = (0);
while(true){
if((i__27065__auto___31968 < len__27064__auto___31967)){
args31923.push((arguments[i__27065__auto___31968]));

var G__31969 = (i__27065__auto___31968 + (1));
i__27065__auto___31968 = G__31969;
continue;
} else {
}
break;
}

var G__31925 = args31923.length;
switch (G__31925) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31923.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29669__auto___31971 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29669__auto___31971,out){
return (function (){
var f__29670__auto__ = (function (){var switch__29557__auto__ = ((function (c__29669__auto___31971,out){
return (function (state_31946){
var state_val_31947 = (state_31946[(1)]);
if((state_val_31947 === (7))){
var inst_31942 = (state_31946[(2)]);
var state_31946__$1 = state_31946;
var statearr_31948_31972 = state_31946__$1;
(statearr_31948_31972[(2)] = inst_31942);

(statearr_31948_31972[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31947 === (1))){
var state_31946__$1 = state_31946;
var statearr_31949_31973 = state_31946__$1;
(statearr_31949_31973[(2)] = null);

(statearr_31949_31973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31947 === (4))){
var inst_31928 = (state_31946[(7)]);
var inst_31928__$1 = (state_31946[(2)]);
var inst_31929 = (inst_31928__$1 == null);
var state_31946__$1 = (function (){var statearr_31950 = state_31946;
(statearr_31950[(7)] = inst_31928__$1);

return statearr_31950;
})();
if(cljs.core.truth_(inst_31929)){
var statearr_31951_31974 = state_31946__$1;
(statearr_31951_31974[(1)] = (5));

} else {
var statearr_31952_31975 = state_31946__$1;
(statearr_31952_31975[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31947 === (6))){
var inst_31928 = (state_31946[(7)]);
var inst_31933 = p.call(null,inst_31928);
var state_31946__$1 = state_31946;
if(cljs.core.truth_(inst_31933)){
var statearr_31953_31976 = state_31946__$1;
(statearr_31953_31976[(1)] = (8));

} else {
var statearr_31954_31977 = state_31946__$1;
(statearr_31954_31977[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31947 === (3))){
var inst_31944 = (state_31946[(2)]);
var state_31946__$1 = state_31946;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31946__$1,inst_31944);
} else {
if((state_val_31947 === (2))){
var state_31946__$1 = state_31946;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31946__$1,(4),ch);
} else {
if((state_val_31947 === (11))){
var inst_31936 = (state_31946[(2)]);
var state_31946__$1 = state_31946;
var statearr_31955_31978 = state_31946__$1;
(statearr_31955_31978[(2)] = inst_31936);

(statearr_31955_31978[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31947 === (9))){
var state_31946__$1 = state_31946;
var statearr_31956_31979 = state_31946__$1;
(statearr_31956_31979[(2)] = null);

(statearr_31956_31979[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31947 === (5))){
var inst_31931 = cljs.core.async.close_BANG_.call(null,out);
var state_31946__$1 = state_31946;
var statearr_31957_31980 = state_31946__$1;
(statearr_31957_31980[(2)] = inst_31931);

(statearr_31957_31980[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31947 === (10))){
var inst_31939 = (state_31946[(2)]);
var state_31946__$1 = (function (){var statearr_31958 = state_31946;
(statearr_31958[(8)] = inst_31939);

return statearr_31958;
})();
var statearr_31959_31981 = state_31946__$1;
(statearr_31959_31981[(2)] = null);

(statearr_31959_31981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31947 === (8))){
var inst_31928 = (state_31946[(7)]);
var state_31946__$1 = state_31946;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31946__$1,(11),out,inst_31928);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__29669__auto___31971,out))
;
return ((function (switch__29557__auto__,c__29669__auto___31971,out){
return (function() {
var cljs$core$async$state_machine__29558__auto__ = null;
var cljs$core$async$state_machine__29558__auto____0 = (function (){
var statearr_31963 = [null,null,null,null,null,null,null,null,null];
(statearr_31963[(0)] = cljs$core$async$state_machine__29558__auto__);

(statearr_31963[(1)] = (1));

return statearr_31963;
});
var cljs$core$async$state_machine__29558__auto____1 = (function (state_31946){
while(true){
var ret_value__29559__auto__ = (function (){try{while(true){
var result__29560__auto__ = switch__29557__auto__.call(null,state_31946);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29560__auto__;
}
break;
}
}catch (e31964){if((e31964 instanceof Object)){
var ex__29561__auto__ = e31964;
var statearr_31965_31982 = state_31946;
(statearr_31965_31982[(5)] = ex__29561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31946);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31964;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31983 = state_31946;
state_31946 = G__31983;
continue;
} else {
return ret_value__29559__auto__;
}
break;
}
});
cljs$core$async$state_machine__29558__auto__ = function(state_31946){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29558__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29558__auto____1.call(this,state_31946);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29558__auto____0;
cljs$core$async$state_machine__29558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29558__auto____1;
return cljs$core$async$state_machine__29558__auto__;
})()
;})(switch__29557__auto__,c__29669__auto___31971,out))
})();
var state__29671__auto__ = (function (){var statearr_31966 = f__29670__auto__.call(null);
(statearr_31966[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29669__auto___31971);

return statearr_31966;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29671__auto__);
});})(c__29669__auto___31971,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args31984 = [];
var len__27064__auto___31987 = arguments.length;
var i__27065__auto___31988 = (0);
while(true){
if((i__27065__auto___31988 < len__27064__auto___31987)){
args31984.push((arguments[i__27065__auto___31988]));

var G__31989 = (i__27065__auto___31988 + (1));
i__27065__auto___31988 = G__31989;
continue;
} else {
}
break;
}

var G__31986 = args31984.length;
switch (G__31986) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31984.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__29669__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29669__auto__){
return (function (){
var f__29670__auto__ = (function (){var switch__29557__auto__ = ((function (c__29669__auto__){
return (function (state_32156){
var state_val_32157 = (state_32156[(1)]);
if((state_val_32157 === (7))){
var inst_32152 = (state_32156[(2)]);
var state_32156__$1 = state_32156;
var statearr_32158_32199 = state_32156__$1;
(statearr_32158_32199[(2)] = inst_32152);

(statearr_32158_32199[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32157 === (20))){
var inst_32122 = (state_32156[(7)]);
var inst_32133 = (state_32156[(2)]);
var inst_32134 = cljs.core.next.call(null,inst_32122);
var inst_32108 = inst_32134;
var inst_32109 = null;
var inst_32110 = (0);
var inst_32111 = (0);
var state_32156__$1 = (function (){var statearr_32159 = state_32156;
(statearr_32159[(8)] = inst_32108);

(statearr_32159[(9)] = inst_32109);

(statearr_32159[(10)] = inst_32111);

(statearr_32159[(11)] = inst_32110);

(statearr_32159[(12)] = inst_32133);

return statearr_32159;
})();
var statearr_32160_32200 = state_32156__$1;
(statearr_32160_32200[(2)] = null);

(statearr_32160_32200[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32157 === (1))){
var state_32156__$1 = state_32156;
var statearr_32161_32201 = state_32156__$1;
(statearr_32161_32201[(2)] = null);

(statearr_32161_32201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32157 === (4))){
var inst_32097 = (state_32156[(13)]);
var inst_32097__$1 = (state_32156[(2)]);
var inst_32098 = (inst_32097__$1 == null);
var state_32156__$1 = (function (){var statearr_32162 = state_32156;
(statearr_32162[(13)] = inst_32097__$1);

return statearr_32162;
})();
if(cljs.core.truth_(inst_32098)){
var statearr_32163_32202 = state_32156__$1;
(statearr_32163_32202[(1)] = (5));

} else {
var statearr_32164_32203 = state_32156__$1;
(statearr_32164_32203[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32157 === (15))){
var state_32156__$1 = state_32156;
var statearr_32168_32204 = state_32156__$1;
(statearr_32168_32204[(2)] = null);

(statearr_32168_32204[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32157 === (21))){
var state_32156__$1 = state_32156;
var statearr_32169_32205 = state_32156__$1;
(statearr_32169_32205[(2)] = null);

(statearr_32169_32205[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32157 === (13))){
var inst_32108 = (state_32156[(8)]);
var inst_32109 = (state_32156[(9)]);
var inst_32111 = (state_32156[(10)]);
var inst_32110 = (state_32156[(11)]);
var inst_32118 = (state_32156[(2)]);
var inst_32119 = (inst_32111 + (1));
var tmp32165 = inst_32108;
var tmp32166 = inst_32109;
var tmp32167 = inst_32110;
var inst_32108__$1 = tmp32165;
var inst_32109__$1 = tmp32166;
var inst_32110__$1 = tmp32167;
var inst_32111__$1 = inst_32119;
var state_32156__$1 = (function (){var statearr_32170 = state_32156;
(statearr_32170[(8)] = inst_32108__$1);

(statearr_32170[(9)] = inst_32109__$1);

(statearr_32170[(10)] = inst_32111__$1);

(statearr_32170[(11)] = inst_32110__$1);

(statearr_32170[(14)] = inst_32118);

return statearr_32170;
})();
var statearr_32171_32206 = state_32156__$1;
(statearr_32171_32206[(2)] = null);

(statearr_32171_32206[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32157 === (22))){
var state_32156__$1 = state_32156;
var statearr_32172_32207 = state_32156__$1;
(statearr_32172_32207[(2)] = null);

(statearr_32172_32207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32157 === (6))){
var inst_32097 = (state_32156[(13)]);
var inst_32106 = f.call(null,inst_32097);
var inst_32107 = cljs.core.seq.call(null,inst_32106);
var inst_32108 = inst_32107;
var inst_32109 = null;
var inst_32110 = (0);
var inst_32111 = (0);
var state_32156__$1 = (function (){var statearr_32173 = state_32156;
(statearr_32173[(8)] = inst_32108);

(statearr_32173[(9)] = inst_32109);

(statearr_32173[(10)] = inst_32111);

(statearr_32173[(11)] = inst_32110);

return statearr_32173;
})();
var statearr_32174_32208 = state_32156__$1;
(statearr_32174_32208[(2)] = null);

(statearr_32174_32208[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32157 === (17))){
var inst_32122 = (state_32156[(7)]);
var inst_32126 = cljs.core.chunk_first.call(null,inst_32122);
var inst_32127 = cljs.core.chunk_rest.call(null,inst_32122);
var inst_32128 = cljs.core.count.call(null,inst_32126);
var inst_32108 = inst_32127;
var inst_32109 = inst_32126;
var inst_32110 = inst_32128;
var inst_32111 = (0);
var state_32156__$1 = (function (){var statearr_32175 = state_32156;
(statearr_32175[(8)] = inst_32108);

(statearr_32175[(9)] = inst_32109);

(statearr_32175[(10)] = inst_32111);

(statearr_32175[(11)] = inst_32110);

return statearr_32175;
})();
var statearr_32176_32209 = state_32156__$1;
(statearr_32176_32209[(2)] = null);

(statearr_32176_32209[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32157 === (3))){
var inst_32154 = (state_32156[(2)]);
var state_32156__$1 = state_32156;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32156__$1,inst_32154);
} else {
if((state_val_32157 === (12))){
var inst_32142 = (state_32156[(2)]);
var state_32156__$1 = state_32156;
var statearr_32177_32210 = state_32156__$1;
(statearr_32177_32210[(2)] = inst_32142);

(statearr_32177_32210[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32157 === (2))){
var state_32156__$1 = state_32156;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32156__$1,(4),in$);
} else {
if((state_val_32157 === (23))){
var inst_32150 = (state_32156[(2)]);
var state_32156__$1 = state_32156;
var statearr_32178_32211 = state_32156__$1;
(statearr_32178_32211[(2)] = inst_32150);

(statearr_32178_32211[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32157 === (19))){
var inst_32137 = (state_32156[(2)]);
var state_32156__$1 = state_32156;
var statearr_32179_32212 = state_32156__$1;
(statearr_32179_32212[(2)] = inst_32137);

(statearr_32179_32212[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32157 === (11))){
var inst_32108 = (state_32156[(8)]);
var inst_32122 = (state_32156[(7)]);
var inst_32122__$1 = cljs.core.seq.call(null,inst_32108);
var state_32156__$1 = (function (){var statearr_32180 = state_32156;
(statearr_32180[(7)] = inst_32122__$1);

return statearr_32180;
})();
if(inst_32122__$1){
var statearr_32181_32213 = state_32156__$1;
(statearr_32181_32213[(1)] = (14));

} else {
var statearr_32182_32214 = state_32156__$1;
(statearr_32182_32214[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32157 === (9))){
var inst_32144 = (state_32156[(2)]);
var inst_32145 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_32156__$1 = (function (){var statearr_32183 = state_32156;
(statearr_32183[(15)] = inst_32144);

return statearr_32183;
})();
if(cljs.core.truth_(inst_32145)){
var statearr_32184_32215 = state_32156__$1;
(statearr_32184_32215[(1)] = (21));

} else {
var statearr_32185_32216 = state_32156__$1;
(statearr_32185_32216[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32157 === (5))){
var inst_32100 = cljs.core.async.close_BANG_.call(null,out);
var state_32156__$1 = state_32156;
var statearr_32186_32217 = state_32156__$1;
(statearr_32186_32217[(2)] = inst_32100);

(statearr_32186_32217[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32157 === (14))){
var inst_32122 = (state_32156[(7)]);
var inst_32124 = cljs.core.chunked_seq_QMARK_.call(null,inst_32122);
var state_32156__$1 = state_32156;
if(inst_32124){
var statearr_32187_32218 = state_32156__$1;
(statearr_32187_32218[(1)] = (17));

} else {
var statearr_32188_32219 = state_32156__$1;
(statearr_32188_32219[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32157 === (16))){
var inst_32140 = (state_32156[(2)]);
var state_32156__$1 = state_32156;
var statearr_32189_32220 = state_32156__$1;
(statearr_32189_32220[(2)] = inst_32140);

(statearr_32189_32220[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32157 === (10))){
var inst_32109 = (state_32156[(9)]);
var inst_32111 = (state_32156[(10)]);
var inst_32116 = cljs.core._nth.call(null,inst_32109,inst_32111);
var state_32156__$1 = state_32156;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32156__$1,(13),out,inst_32116);
} else {
if((state_val_32157 === (18))){
var inst_32122 = (state_32156[(7)]);
var inst_32131 = cljs.core.first.call(null,inst_32122);
var state_32156__$1 = state_32156;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32156__$1,(20),out,inst_32131);
} else {
if((state_val_32157 === (8))){
var inst_32111 = (state_32156[(10)]);
var inst_32110 = (state_32156[(11)]);
var inst_32113 = (inst_32111 < inst_32110);
var inst_32114 = inst_32113;
var state_32156__$1 = state_32156;
if(cljs.core.truth_(inst_32114)){
var statearr_32190_32221 = state_32156__$1;
(statearr_32190_32221[(1)] = (10));

} else {
var statearr_32191_32222 = state_32156__$1;
(statearr_32191_32222[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29669__auto__))
;
return ((function (switch__29557__auto__,c__29669__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29558__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29558__auto____0 = (function (){
var statearr_32195 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32195[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29558__auto__);

(statearr_32195[(1)] = (1));

return statearr_32195;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29558__auto____1 = (function (state_32156){
while(true){
var ret_value__29559__auto__ = (function (){try{while(true){
var result__29560__auto__ = switch__29557__auto__.call(null,state_32156);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29560__auto__;
}
break;
}
}catch (e32196){if((e32196 instanceof Object)){
var ex__29561__auto__ = e32196;
var statearr_32197_32223 = state_32156;
(statearr_32197_32223[(5)] = ex__29561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32156);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32196;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32224 = state_32156;
state_32156 = G__32224;
continue;
} else {
return ret_value__29559__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29558__auto__ = function(state_32156){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29558__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29558__auto____1.call(this,state_32156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29558__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29558__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29558__auto__;
})()
;})(switch__29557__auto__,c__29669__auto__))
})();
var state__29671__auto__ = (function (){var statearr_32198 = f__29670__auto__.call(null);
(statearr_32198[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29669__auto__);

return statearr_32198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29671__auto__);
});})(c__29669__auto__))
);

return c__29669__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args32225 = [];
var len__27064__auto___32228 = arguments.length;
var i__27065__auto___32229 = (0);
while(true){
if((i__27065__auto___32229 < len__27064__auto___32228)){
args32225.push((arguments[i__27065__auto___32229]));

var G__32230 = (i__27065__auto___32229 + (1));
i__27065__auto___32229 = G__32230;
continue;
} else {
}
break;
}

var G__32227 = args32225.length;
switch (G__32227) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32225.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args32232 = [];
var len__27064__auto___32235 = arguments.length;
var i__27065__auto___32236 = (0);
while(true){
if((i__27065__auto___32236 < len__27064__auto___32235)){
args32232.push((arguments[i__27065__auto___32236]));

var G__32237 = (i__27065__auto___32236 + (1));
i__27065__auto___32236 = G__32237;
continue;
} else {
}
break;
}

var G__32234 = args32232.length;
switch (G__32234) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32232.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args32239 = [];
var len__27064__auto___32290 = arguments.length;
var i__27065__auto___32291 = (0);
while(true){
if((i__27065__auto___32291 < len__27064__auto___32290)){
args32239.push((arguments[i__27065__auto___32291]));

var G__32292 = (i__27065__auto___32291 + (1));
i__27065__auto___32291 = G__32292;
continue;
} else {
}
break;
}

var G__32241 = args32239.length;
switch (G__32241) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32239.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29669__auto___32294 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29669__auto___32294,out){
return (function (){
var f__29670__auto__ = (function (){var switch__29557__auto__ = ((function (c__29669__auto___32294,out){
return (function (state_32265){
var state_val_32266 = (state_32265[(1)]);
if((state_val_32266 === (7))){
var inst_32260 = (state_32265[(2)]);
var state_32265__$1 = state_32265;
var statearr_32267_32295 = state_32265__$1;
(statearr_32267_32295[(2)] = inst_32260);

(statearr_32267_32295[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32266 === (1))){
var inst_32242 = null;
var state_32265__$1 = (function (){var statearr_32268 = state_32265;
(statearr_32268[(7)] = inst_32242);

return statearr_32268;
})();
var statearr_32269_32296 = state_32265__$1;
(statearr_32269_32296[(2)] = null);

(statearr_32269_32296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32266 === (4))){
var inst_32245 = (state_32265[(8)]);
var inst_32245__$1 = (state_32265[(2)]);
var inst_32246 = (inst_32245__$1 == null);
var inst_32247 = cljs.core.not.call(null,inst_32246);
var state_32265__$1 = (function (){var statearr_32270 = state_32265;
(statearr_32270[(8)] = inst_32245__$1);

return statearr_32270;
})();
if(inst_32247){
var statearr_32271_32297 = state_32265__$1;
(statearr_32271_32297[(1)] = (5));

} else {
var statearr_32272_32298 = state_32265__$1;
(statearr_32272_32298[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32266 === (6))){
var state_32265__$1 = state_32265;
var statearr_32273_32299 = state_32265__$1;
(statearr_32273_32299[(2)] = null);

(statearr_32273_32299[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32266 === (3))){
var inst_32262 = (state_32265[(2)]);
var inst_32263 = cljs.core.async.close_BANG_.call(null,out);
var state_32265__$1 = (function (){var statearr_32274 = state_32265;
(statearr_32274[(9)] = inst_32262);

return statearr_32274;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32265__$1,inst_32263);
} else {
if((state_val_32266 === (2))){
var state_32265__$1 = state_32265;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32265__$1,(4),ch);
} else {
if((state_val_32266 === (11))){
var inst_32245 = (state_32265[(8)]);
var inst_32254 = (state_32265[(2)]);
var inst_32242 = inst_32245;
var state_32265__$1 = (function (){var statearr_32275 = state_32265;
(statearr_32275[(7)] = inst_32242);

(statearr_32275[(10)] = inst_32254);

return statearr_32275;
})();
var statearr_32276_32300 = state_32265__$1;
(statearr_32276_32300[(2)] = null);

(statearr_32276_32300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32266 === (9))){
var inst_32245 = (state_32265[(8)]);
var state_32265__$1 = state_32265;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32265__$1,(11),out,inst_32245);
} else {
if((state_val_32266 === (5))){
var inst_32242 = (state_32265[(7)]);
var inst_32245 = (state_32265[(8)]);
var inst_32249 = cljs.core._EQ_.call(null,inst_32245,inst_32242);
var state_32265__$1 = state_32265;
if(inst_32249){
var statearr_32278_32301 = state_32265__$1;
(statearr_32278_32301[(1)] = (8));

} else {
var statearr_32279_32302 = state_32265__$1;
(statearr_32279_32302[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32266 === (10))){
var inst_32257 = (state_32265[(2)]);
var state_32265__$1 = state_32265;
var statearr_32280_32303 = state_32265__$1;
(statearr_32280_32303[(2)] = inst_32257);

(statearr_32280_32303[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32266 === (8))){
var inst_32242 = (state_32265[(7)]);
var tmp32277 = inst_32242;
var inst_32242__$1 = tmp32277;
var state_32265__$1 = (function (){var statearr_32281 = state_32265;
(statearr_32281[(7)] = inst_32242__$1);

return statearr_32281;
})();
var statearr_32282_32304 = state_32265__$1;
(statearr_32282_32304[(2)] = null);

(statearr_32282_32304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__29669__auto___32294,out))
;
return ((function (switch__29557__auto__,c__29669__auto___32294,out){
return (function() {
var cljs$core$async$state_machine__29558__auto__ = null;
var cljs$core$async$state_machine__29558__auto____0 = (function (){
var statearr_32286 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32286[(0)] = cljs$core$async$state_machine__29558__auto__);

(statearr_32286[(1)] = (1));

return statearr_32286;
});
var cljs$core$async$state_machine__29558__auto____1 = (function (state_32265){
while(true){
var ret_value__29559__auto__ = (function (){try{while(true){
var result__29560__auto__ = switch__29557__auto__.call(null,state_32265);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29560__auto__;
}
break;
}
}catch (e32287){if((e32287 instanceof Object)){
var ex__29561__auto__ = e32287;
var statearr_32288_32305 = state_32265;
(statearr_32288_32305[(5)] = ex__29561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32265);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32287;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32306 = state_32265;
state_32265 = G__32306;
continue;
} else {
return ret_value__29559__auto__;
}
break;
}
});
cljs$core$async$state_machine__29558__auto__ = function(state_32265){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29558__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29558__auto____1.call(this,state_32265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29558__auto____0;
cljs$core$async$state_machine__29558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29558__auto____1;
return cljs$core$async$state_machine__29558__auto__;
})()
;})(switch__29557__auto__,c__29669__auto___32294,out))
})();
var state__29671__auto__ = (function (){var statearr_32289 = f__29670__auto__.call(null);
(statearr_32289[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29669__auto___32294);

return statearr_32289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29671__auto__);
});})(c__29669__auto___32294,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args32307 = [];
var len__27064__auto___32377 = arguments.length;
var i__27065__auto___32378 = (0);
while(true){
if((i__27065__auto___32378 < len__27064__auto___32377)){
args32307.push((arguments[i__27065__auto___32378]));

var G__32379 = (i__27065__auto___32378 + (1));
i__27065__auto___32378 = G__32379;
continue;
} else {
}
break;
}

var G__32309 = args32307.length;
switch (G__32309) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32307.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29669__auto___32381 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29669__auto___32381,out){
return (function (){
var f__29670__auto__ = (function (){var switch__29557__auto__ = ((function (c__29669__auto___32381,out){
return (function (state_32347){
var state_val_32348 = (state_32347[(1)]);
if((state_val_32348 === (7))){
var inst_32343 = (state_32347[(2)]);
var state_32347__$1 = state_32347;
var statearr_32349_32382 = state_32347__$1;
(statearr_32349_32382[(2)] = inst_32343);

(statearr_32349_32382[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32348 === (1))){
var inst_32310 = (new Array(n));
var inst_32311 = inst_32310;
var inst_32312 = (0);
var state_32347__$1 = (function (){var statearr_32350 = state_32347;
(statearr_32350[(7)] = inst_32311);

(statearr_32350[(8)] = inst_32312);

return statearr_32350;
})();
var statearr_32351_32383 = state_32347__$1;
(statearr_32351_32383[(2)] = null);

(statearr_32351_32383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32348 === (4))){
var inst_32315 = (state_32347[(9)]);
var inst_32315__$1 = (state_32347[(2)]);
var inst_32316 = (inst_32315__$1 == null);
var inst_32317 = cljs.core.not.call(null,inst_32316);
var state_32347__$1 = (function (){var statearr_32352 = state_32347;
(statearr_32352[(9)] = inst_32315__$1);

return statearr_32352;
})();
if(inst_32317){
var statearr_32353_32384 = state_32347__$1;
(statearr_32353_32384[(1)] = (5));

} else {
var statearr_32354_32385 = state_32347__$1;
(statearr_32354_32385[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32348 === (15))){
var inst_32337 = (state_32347[(2)]);
var state_32347__$1 = state_32347;
var statearr_32355_32386 = state_32347__$1;
(statearr_32355_32386[(2)] = inst_32337);

(statearr_32355_32386[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32348 === (13))){
var state_32347__$1 = state_32347;
var statearr_32356_32387 = state_32347__$1;
(statearr_32356_32387[(2)] = null);

(statearr_32356_32387[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32348 === (6))){
var inst_32312 = (state_32347[(8)]);
var inst_32333 = (inst_32312 > (0));
var state_32347__$1 = state_32347;
if(cljs.core.truth_(inst_32333)){
var statearr_32357_32388 = state_32347__$1;
(statearr_32357_32388[(1)] = (12));

} else {
var statearr_32358_32389 = state_32347__$1;
(statearr_32358_32389[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32348 === (3))){
var inst_32345 = (state_32347[(2)]);
var state_32347__$1 = state_32347;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32347__$1,inst_32345);
} else {
if((state_val_32348 === (12))){
var inst_32311 = (state_32347[(7)]);
var inst_32335 = cljs.core.vec.call(null,inst_32311);
var state_32347__$1 = state_32347;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32347__$1,(15),out,inst_32335);
} else {
if((state_val_32348 === (2))){
var state_32347__$1 = state_32347;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32347__$1,(4),ch);
} else {
if((state_val_32348 === (11))){
var inst_32327 = (state_32347[(2)]);
var inst_32328 = (new Array(n));
var inst_32311 = inst_32328;
var inst_32312 = (0);
var state_32347__$1 = (function (){var statearr_32359 = state_32347;
(statearr_32359[(7)] = inst_32311);

(statearr_32359[(10)] = inst_32327);

(statearr_32359[(8)] = inst_32312);

return statearr_32359;
})();
var statearr_32360_32390 = state_32347__$1;
(statearr_32360_32390[(2)] = null);

(statearr_32360_32390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32348 === (9))){
var inst_32311 = (state_32347[(7)]);
var inst_32325 = cljs.core.vec.call(null,inst_32311);
var state_32347__$1 = state_32347;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32347__$1,(11),out,inst_32325);
} else {
if((state_val_32348 === (5))){
var inst_32320 = (state_32347[(11)]);
var inst_32311 = (state_32347[(7)]);
var inst_32315 = (state_32347[(9)]);
var inst_32312 = (state_32347[(8)]);
var inst_32319 = (inst_32311[inst_32312] = inst_32315);
var inst_32320__$1 = (inst_32312 + (1));
var inst_32321 = (inst_32320__$1 < n);
var state_32347__$1 = (function (){var statearr_32361 = state_32347;
(statearr_32361[(11)] = inst_32320__$1);

(statearr_32361[(12)] = inst_32319);

return statearr_32361;
})();
if(cljs.core.truth_(inst_32321)){
var statearr_32362_32391 = state_32347__$1;
(statearr_32362_32391[(1)] = (8));

} else {
var statearr_32363_32392 = state_32347__$1;
(statearr_32363_32392[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32348 === (14))){
var inst_32340 = (state_32347[(2)]);
var inst_32341 = cljs.core.async.close_BANG_.call(null,out);
var state_32347__$1 = (function (){var statearr_32365 = state_32347;
(statearr_32365[(13)] = inst_32340);

return statearr_32365;
})();
var statearr_32366_32393 = state_32347__$1;
(statearr_32366_32393[(2)] = inst_32341);

(statearr_32366_32393[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32348 === (10))){
var inst_32331 = (state_32347[(2)]);
var state_32347__$1 = state_32347;
var statearr_32367_32394 = state_32347__$1;
(statearr_32367_32394[(2)] = inst_32331);

(statearr_32367_32394[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32348 === (8))){
var inst_32320 = (state_32347[(11)]);
var inst_32311 = (state_32347[(7)]);
var tmp32364 = inst_32311;
var inst_32311__$1 = tmp32364;
var inst_32312 = inst_32320;
var state_32347__$1 = (function (){var statearr_32368 = state_32347;
(statearr_32368[(7)] = inst_32311__$1);

(statearr_32368[(8)] = inst_32312);

return statearr_32368;
})();
var statearr_32369_32395 = state_32347__$1;
(statearr_32369_32395[(2)] = null);

(statearr_32369_32395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29669__auto___32381,out))
;
return ((function (switch__29557__auto__,c__29669__auto___32381,out){
return (function() {
var cljs$core$async$state_machine__29558__auto__ = null;
var cljs$core$async$state_machine__29558__auto____0 = (function (){
var statearr_32373 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32373[(0)] = cljs$core$async$state_machine__29558__auto__);

(statearr_32373[(1)] = (1));

return statearr_32373;
});
var cljs$core$async$state_machine__29558__auto____1 = (function (state_32347){
while(true){
var ret_value__29559__auto__ = (function (){try{while(true){
var result__29560__auto__ = switch__29557__auto__.call(null,state_32347);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29560__auto__;
}
break;
}
}catch (e32374){if((e32374 instanceof Object)){
var ex__29561__auto__ = e32374;
var statearr_32375_32396 = state_32347;
(statearr_32375_32396[(5)] = ex__29561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32347);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32374;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32397 = state_32347;
state_32347 = G__32397;
continue;
} else {
return ret_value__29559__auto__;
}
break;
}
});
cljs$core$async$state_machine__29558__auto__ = function(state_32347){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29558__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29558__auto____1.call(this,state_32347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29558__auto____0;
cljs$core$async$state_machine__29558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29558__auto____1;
return cljs$core$async$state_machine__29558__auto__;
})()
;})(switch__29557__auto__,c__29669__auto___32381,out))
})();
var state__29671__auto__ = (function (){var statearr_32376 = f__29670__auto__.call(null);
(statearr_32376[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29669__auto___32381);

return statearr_32376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29671__auto__);
});})(c__29669__auto___32381,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args32398 = [];
var len__27064__auto___32472 = arguments.length;
var i__27065__auto___32473 = (0);
while(true){
if((i__27065__auto___32473 < len__27064__auto___32472)){
args32398.push((arguments[i__27065__auto___32473]));

var G__32474 = (i__27065__auto___32473 + (1));
i__27065__auto___32473 = G__32474;
continue;
} else {
}
break;
}

var G__32400 = args32398.length;
switch (G__32400) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32398.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29669__auto___32476 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29669__auto___32476,out){
return (function (){
var f__29670__auto__ = (function (){var switch__29557__auto__ = ((function (c__29669__auto___32476,out){
return (function (state_32442){
var state_val_32443 = (state_32442[(1)]);
if((state_val_32443 === (7))){
var inst_32438 = (state_32442[(2)]);
var state_32442__$1 = state_32442;
var statearr_32444_32477 = state_32442__$1;
(statearr_32444_32477[(2)] = inst_32438);

(statearr_32444_32477[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32443 === (1))){
var inst_32401 = [];
var inst_32402 = inst_32401;
var inst_32403 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32442__$1 = (function (){var statearr_32445 = state_32442;
(statearr_32445[(7)] = inst_32402);

(statearr_32445[(8)] = inst_32403);

return statearr_32445;
})();
var statearr_32446_32478 = state_32442__$1;
(statearr_32446_32478[(2)] = null);

(statearr_32446_32478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32443 === (4))){
var inst_32406 = (state_32442[(9)]);
var inst_32406__$1 = (state_32442[(2)]);
var inst_32407 = (inst_32406__$1 == null);
var inst_32408 = cljs.core.not.call(null,inst_32407);
var state_32442__$1 = (function (){var statearr_32447 = state_32442;
(statearr_32447[(9)] = inst_32406__$1);

return statearr_32447;
})();
if(inst_32408){
var statearr_32448_32479 = state_32442__$1;
(statearr_32448_32479[(1)] = (5));

} else {
var statearr_32449_32480 = state_32442__$1;
(statearr_32449_32480[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32443 === (15))){
var inst_32432 = (state_32442[(2)]);
var state_32442__$1 = state_32442;
var statearr_32450_32481 = state_32442__$1;
(statearr_32450_32481[(2)] = inst_32432);

(statearr_32450_32481[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32443 === (13))){
var state_32442__$1 = state_32442;
var statearr_32451_32482 = state_32442__$1;
(statearr_32451_32482[(2)] = null);

(statearr_32451_32482[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32443 === (6))){
var inst_32402 = (state_32442[(7)]);
var inst_32427 = inst_32402.length;
var inst_32428 = (inst_32427 > (0));
var state_32442__$1 = state_32442;
if(cljs.core.truth_(inst_32428)){
var statearr_32452_32483 = state_32442__$1;
(statearr_32452_32483[(1)] = (12));

} else {
var statearr_32453_32484 = state_32442__$1;
(statearr_32453_32484[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32443 === (3))){
var inst_32440 = (state_32442[(2)]);
var state_32442__$1 = state_32442;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32442__$1,inst_32440);
} else {
if((state_val_32443 === (12))){
var inst_32402 = (state_32442[(7)]);
var inst_32430 = cljs.core.vec.call(null,inst_32402);
var state_32442__$1 = state_32442;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32442__$1,(15),out,inst_32430);
} else {
if((state_val_32443 === (2))){
var state_32442__$1 = state_32442;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32442__$1,(4),ch);
} else {
if((state_val_32443 === (11))){
var inst_32406 = (state_32442[(9)]);
var inst_32410 = (state_32442[(10)]);
var inst_32420 = (state_32442[(2)]);
var inst_32421 = [];
var inst_32422 = inst_32421.push(inst_32406);
var inst_32402 = inst_32421;
var inst_32403 = inst_32410;
var state_32442__$1 = (function (){var statearr_32454 = state_32442;
(statearr_32454[(11)] = inst_32420);

(statearr_32454[(12)] = inst_32422);

(statearr_32454[(7)] = inst_32402);

(statearr_32454[(8)] = inst_32403);

return statearr_32454;
})();
var statearr_32455_32485 = state_32442__$1;
(statearr_32455_32485[(2)] = null);

(statearr_32455_32485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32443 === (9))){
var inst_32402 = (state_32442[(7)]);
var inst_32418 = cljs.core.vec.call(null,inst_32402);
var state_32442__$1 = state_32442;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32442__$1,(11),out,inst_32418);
} else {
if((state_val_32443 === (5))){
var inst_32406 = (state_32442[(9)]);
var inst_32410 = (state_32442[(10)]);
var inst_32403 = (state_32442[(8)]);
var inst_32410__$1 = f.call(null,inst_32406);
var inst_32411 = cljs.core._EQ_.call(null,inst_32410__$1,inst_32403);
var inst_32412 = cljs.core.keyword_identical_QMARK_.call(null,inst_32403,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32413 = (inst_32411) || (inst_32412);
var state_32442__$1 = (function (){var statearr_32456 = state_32442;
(statearr_32456[(10)] = inst_32410__$1);

return statearr_32456;
})();
if(cljs.core.truth_(inst_32413)){
var statearr_32457_32486 = state_32442__$1;
(statearr_32457_32486[(1)] = (8));

} else {
var statearr_32458_32487 = state_32442__$1;
(statearr_32458_32487[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32443 === (14))){
var inst_32435 = (state_32442[(2)]);
var inst_32436 = cljs.core.async.close_BANG_.call(null,out);
var state_32442__$1 = (function (){var statearr_32460 = state_32442;
(statearr_32460[(13)] = inst_32435);

return statearr_32460;
})();
var statearr_32461_32488 = state_32442__$1;
(statearr_32461_32488[(2)] = inst_32436);

(statearr_32461_32488[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32443 === (10))){
var inst_32425 = (state_32442[(2)]);
var state_32442__$1 = state_32442;
var statearr_32462_32489 = state_32442__$1;
(statearr_32462_32489[(2)] = inst_32425);

(statearr_32462_32489[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32443 === (8))){
var inst_32406 = (state_32442[(9)]);
var inst_32402 = (state_32442[(7)]);
var inst_32410 = (state_32442[(10)]);
var inst_32415 = inst_32402.push(inst_32406);
var tmp32459 = inst_32402;
var inst_32402__$1 = tmp32459;
var inst_32403 = inst_32410;
var state_32442__$1 = (function (){var statearr_32463 = state_32442;
(statearr_32463[(7)] = inst_32402__$1);

(statearr_32463[(14)] = inst_32415);

(statearr_32463[(8)] = inst_32403);

return statearr_32463;
})();
var statearr_32464_32490 = state_32442__$1;
(statearr_32464_32490[(2)] = null);

(statearr_32464_32490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29669__auto___32476,out))
;
return ((function (switch__29557__auto__,c__29669__auto___32476,out){
return (function() {
var cljs$core$async$state_machine__29558__auto__ = null;
var cljs$core$async$state_machine__29558__auto____0 = (function (){
var statearr_32468 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32468[(0)] = cljs$core$async$state_machine__29558__auto__);

(statearr_32468[(1)] = (1));

return statearr_32468;
});
var cljs$core$async$state_machine__29558__auto____1 = (function (state_32442){
while(true){
var ret_value__29559__auto__ = (function (){try{while(true){
var result__29560__auto__ = switch__29557__auto__.call(null,state_32442);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29560__auto__;
}
break;
}
}catch (e32469){if((e32469 instanceof Object)){
var ex__29561__auto__ = e32469;
var statearr_32470_32491 = state_32442;
(statearr_32470_32491[(5)] = ex__29561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32442);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32469;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32492 = state_32442;
state_32442 = G__32492;
continue;
} else {
return ret_value__29559__auto__;
}
break;
}
});
cljs$core$async$state_machine__29558__auto__ = function(state_32442){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29558__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29558__auto____1.call(this,state_32442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29558__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29558__auto____0;
cljs$core$async$state_machine__29558__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29558__auto____1;
return cljs$core$async$state_machine__29558__auto__;
})()
;})(switch__29557__auto__,c__29669__auto___32476,out))
})();
var state__29671__auto__ = (function (){var statearr_32471 = f__29670__auto__.call(null);
(statearr_32471[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29669__auto___32476);

return statearr_32471;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29671__auto__);
});})(c__29669__auto___32476,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1499813245131