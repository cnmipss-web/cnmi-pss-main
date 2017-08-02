// Compiled by ClojureScript 1.9.671 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__33361 = arguments.length;
switch (G__33361) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async33362 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33362 = (function (f,blockable,meta33363){
this.f = f;
this.blockable = blockable;
this.meta33363 = meta33363;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33362.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33364,meta33363__$1){
var self__ = this;
var _33364__$1 = this;
return (new cljs.core.async.t_cljs$core$async33362(self__.f,self__.blockable,meta33363__$1));
});

cljs.core.async.t_cljs$core$async33362.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33364){
var self__ = this;
var _33364__$1 = this;
return self__.meta33363;
});

cljs.core.async.t_cljs$core$async33362.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33362.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33362.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async33362.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async33362.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta33363","meta33363",-1329544059,null)], null);
});

cljs.core.async.t_cljs$core$async33362.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33362.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33362";

cljs.core.async.t_cljs$core$async33362.cljs$lang$ctorPrWriter = (function (this__27663__auto__,writer__27664__auto__,opt__27665__auto__){
return cljs.core._write.call(null,writer__27664__auto__,"cljs.core.async/t_cljs$core$async33362");
});

cljs.core.async.__GT_t_cljs$core$async33362 = (function cljs$core$async$__GT_t_cljs$core$async33362(f__$1,blockable__$1,meta33363){
return (new cljs.core.async.t_cljs$core$async33362(f__$1,blockable__$1,meta33363));
});

}

return (new cljs.core.async.t_cljs$core$async33362(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
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
var G__33368 = arguments.length;
switch (G__33368) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buffer must be supplied when transducer is"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buf-or-n")].join('')));
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
var G__33371 = arguments.length;
switch (G__33371) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__33374 = arguments.length;
switch (G__33374) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_33376 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_33376);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_33376,ret){
return (function (){
return fn1.call(null,val_33376);
});})(val_33376,ret))
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
var G__33378 = arguments.length;
switch (G__33378) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var n__27976__auto___33380 = n;
var x_33381 = (0);
while(true){
if((x_33381 < n__27976__auto___33380)){
(a[x_33381] = (0));

var G__33382 = (x_33381 + (1));
x_33381 = G__33382;
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

var G__33383 = (i + (1));
i = G__33383;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async33384 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33384 = (function (flag,meta33385){
this.flag = flag;
this.meta33385 = meta33385;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33384.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_33386,meta33385__$1){
var self__ = this;
var _33386__$1 = this;
return (new cljs.core.async.t_cljs$core$async33384(self__.flag,meta33385__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async33384.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_33386){
var self__ = this;
var _33386__$1 = this;
return self__.meta33385;
});})(flag))
;

cljs.core.async.t_cljs$core$async33384.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33384.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async33384.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33384.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33384.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33385","meta33385",901556876,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async33384.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33384.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33384";

cljs.core.async.t_cljs$core$async33384.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__27663__auto__,writer__27664__auto__,opt__27665__auto__){
return cljs.core._write.call(null,writer__27664__auto__,"cljs.core.async/t_cljs$core$async33384");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async33384 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async33384(flag__$1,meta33385){
return (new cljs.core.async.t_cljs$core$async33384(flag__$1,meta33385));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async33384(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async33387 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33387 = (function (flag,cb,meta33388){
this.flag = flag;
this.cb = cb;
this.meta33388 = meta33388;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33387.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33389,meta33388__$1){
var self__ = this;
var _33389__$1 = this;
return (new cljs.core.async.t_cljs$core$async33387(self__.flag,self__.cb,meta33388__$1));
});

cljs.core.async.t_cljs$core$async33387.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33389){
var self__ = this;
var _33389__$1 = this;
return self__.meta33388;
});

cljs.core.async.t_cljs$core$async33387.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33387.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async33387.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33387.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async33387.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33388","meta33388",-930654676,null)], null);
});

cljs.core.async.t_cljs$core$async33387.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33387.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33387";

cljs.core.async.t_cljs$core$async33387.cljs$lang$ctorPrWriter = (function (this__27663__auto__,writer__27664__auto__,opt__27665__auto__){
return cljs.core._write.call(null,writer__27664__auto__,"cljs.core.async/t_cljs$core$async33387");
});

cljs.core.async.__GT_t_cljs$core$async33387 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async33387(flag__$1,cb__$1,meta33388){
return (new cljs.core.async.t_cljs$core$async33387(flag__$1,cb__$1,meta33388));
});

}

return (new cljs.core.async.t_cljs$core$async33387(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__33390_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33390_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33391_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33391_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__27052__auto__ = wport;
if(cljs.core.truth_(or__27052__auto__)){
return or__27052__auto__;
} else {
return port;
}
})()], null));
} else {
var G__33392 = (i + (1));
i = G__33392;
continue;
}
} else {
return null;
}
break;
}
})();
var or__27052__auto__ = ret;
if(cljs.core.truth_(or__27052__auto__)){
return or__27052__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__27040__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__27040__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__27040__auto__;
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
var args__28184__auto__ = [];
var len__28177__auto___33398 = arguments.length;
var i__28178__auto___33399 = (0);
while(true){
if((i__28178__auto___33399 < len__28177__auto___33398)){
args__28184__auto__.push((arguments[i__28178__auto___33399]));

var G__33400 = (i__28178__auto___33399 + (1));
i__28178__auto___33399 = G__33400;
continue;
} else {
}
break;
}

var argseq__28185__auto__ = ((((1) < args__28184__auto__.length))?(new cljs.core.IndexedSeq(args__28184__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28185__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33395){
var map__33396 = p__33395;
var map__33396__$1 = ((((!((map__33396 == null)))?((((map__33396.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33396.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33396):map__33396);
var opts = map__33396__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33393){
var G__33394 = cljs.core.first.call(null,seq33393);
var seq33393__$1 = cljs.core.next.call(null,seq33393);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33394,seq33393__$1);
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
var G__33402 = arguments.length;
switch (G__33402) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__33315__auto___33448 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33315__auto___33448){
return (function (){
var f__33316__auto__ = (function (){var switch__33227__auto__ = ((function (c__33315__auto___33448){
return (function (state_33426){
var state_val_33427 = (state_33426[(1)]);
if((state_val_33427 === (7))){
var inst_33422 = (state_33426[(2)]);
var state_33426__$1 = state_33426;
var statearr_33428_33449 = state_33426__$1;
(statearr_33428_33449[(2)] = inst_33422);

(statearr_33428_33449[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33427 === (1))){
var state_33426__$1 = state_33426;
var statearr_33429_33450 = state_33426__$1;
(statearr_33429_33450[(2)] = null);

(statearr_33429_33450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33427 === (4))){
var inst_33405 = (state_33426[(7)]);
var inst_33405__$1 = (state_33426[(2)]);
var inst_33406 = (inst_33405__$1 == null);
var state_33426__$1 = (function (){var statearr_33430 = state_33426;
(statearr_33430[(7)] = inst_33405__$1);

return statearr_33430;
})();
if(cljs.core.truth_(inst_33406)){
var statearr_33431_33451 = state_33426__$1;
(statearr_33431_33451[(1)] = (5));

} else {
var statearr_33432_33452 = state_33426__$1;
(statearr_33432_33452[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33427 === (13))){
var state_33426__$1 = state_33426;
var statearr_33433_33453 = state_33426__$1;
(statearr_33433_33453[(2)] = null);

(statearr_33433_33453[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33427 === (6))){
var inst_33405 = (state_33426[(7)]);
var state_33426__$1 = state_33426;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33426__$1,(11),to,inst_33405);
} else {
if((state_val_33427 === (3))){
var inst_33424 = (state_33426[(2)]);
var state_33426__$1 = state_33426;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33426__$1,inst_33424);
} else {
if((state_val_33427 === (12))){
var state_33426__$1 = state_33426;
var statearr_33434_33454 = state_33426__$1;
(statearr_33434_33454[(2)] = null);

(statearr_33434_33454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33427 === (2))){
var state_33426__$1 = state_33426;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33426__$1,(4),from);
} else {
if((state_val_33427 === (11))){
var inst_33415 = (state_33426[(2)]);
var state_33426__$1 = state_33426;
if(cljs.core.truth_(inst_33415)){
var statearr_33435_33455 = state_33426__$1;
(statearr_33435_33455[(1)] = (12));

} else {
var statearr_33436_33456 = state_33426__$1;
(statearr_33436_33456[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33427 === (9))){
var state_33426__$1 = state_33426;
var statearr_33437_33457 = state_33426__$1;
(statearr_33437_33457[(2)] = null);

(statearr_33437_33457[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33427 === (5))){
var state_33426__$1 = state_33426;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33438_33458 = state_33426__$1;
(statearr_33438_33458[(1)] = (8));

} else {
var statearr_33439_33459 = state_33426__$1;
(statearr_33439_33459[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33427 === (14))){
var inst_33420 = (state_33426[(2)]);
var state_33426__$1 = state_33426;
var statearr_33440_33460 = state_33426__$1;
(statearr_33440_33460[(2)] = inst_33420);

(statearr_33440_33460[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33427 === (10))){
var inst_33412 = (state_33426[(2)]);
var state_33426__$1 = state_33426;
var statearr_33441_33461 = state_33426__$1;
(statearr_33441_33461[(2)] = inst_33412);

(statearr_33441_33461[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33427 === (8))){
var inst_33409 = cljs.core.async.close_BANG_.call(null,to);
var state_33426__$1 = state_33426;
var statearr_33442_33462 = state_33426__$1;
(statearr_33442_33462[(2)] = inst_33409);

(statearr_33442_33462[(1)] = (10));


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
});})(c__33315__auto___33448))
;
return ((function (switch__33227__auto__,c__33315__auto___33448){
return (function() {
var cljs$core$async$state_machine__33228__auto__ = null;
var cljs$core$async$state_machine__33228__auto____0 = (function (){
var statearr_33443 = [null,null,null,null,null,null,null,null];
(statearr_33443[(0)] = cljs$core$async$state_machine__33228__auto__);

(statearr_33443[(1)] = (1));

return statearr_33443;
});
var cljs$core$async$state_machine__33228__auto____1 = (function (state_33426){
while(true){
var ret_value__33229__auto__ = (function (){try{while(true){
var result__33230__auto__ = switch__33227__auto__.call(null,state_33426);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33230__auto__;
}
break;
}
}catch (e33444){if((e33444 instanceof Object)){
var ex__33231__auto__ = e33444;
var statearr_33445_33463 = state_33426;
(statearr_33445_33463[(5)] = ex__33231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33426);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33444;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33464 = state_33426;
state_33426 = G__33464;
continue;
} else {
return ret_value__33229__auto__;
}
break;
}
});
cljs$core$async$state_machine__33228__auto__ = function(state_33426){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33228__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33228__auto____1.call(this,state_33426);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33228__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33228__auto____0;
cljs$core$async$state_machine__33228__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33228__auto____1;
return cljs$core$async$state_machine__33228__auto__;
})()
;})(switch__33227__auto__,c__33315__auto___33448))
})();
var state__33317__auto__ = (function (){var statearr_33446 = f__33316__auto__.call(null);
(statearr_33446[(6)] = c__33315__auto___33448);

return statearr_33446;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33317__auto__);
});})(c__33315__auto___33448))
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
return (function (p__33465){
var vec__33466 = p__33465;
var v = cljs.core.nth.call(null,vec__33466,(0),null);
var p = cljs.core.nth.call(null,vec__33466,(1),null);
var job = vec__33466;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__33315__auto___33637 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33315__auto___33637,res,vec__33466,v,p,job,jobs,results){
return (function (){
var f__33316__auto__ = (function (){var switch__33227__auto__ = ((function (c__33315__auto___33637,res,vec__33466,v,p,job,jobs,results){
return (function (state_33473){
var state_val_33474 = (state_33473[(1)]);
if((state_val_33474 === (1))){
var state_33473__$1 = state_33473;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33473__$1,(2),res,v);
} else {
if((state_val_33474 === (2))){
var inst_33470 = (state_33473[(2)]);
var inst_33471 = cljs.core.async.close_BANG_.call(null,res);
var state_33473__$1 = (function (){var statearr_33475 = state_33473;
(statearr_33475[(7)] = inst_33470);

return statearr_33475;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33473__$1,inst_33471);
} else {
return null;
}
}
});})(c__33315__auto___33637,res,vec__33466,v,p,job,jobs,results))
;
return ((function (switch__33227__auto__,c__33315__auto___33637,res,vec__33466,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33228__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33228__auto____0 = (function (){
var statearr_33476 = [null,null,null,null,null,null,null,null];
(statearr_33476[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33228__auto__);

(statearr_33476[(1)] = (1));

return statearr_33476;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33228__auto____1 = (function (state_33473){
while(true){
var ret_value__33229__auto__ = (function (){try{while(true){
var result__33230__auto__ = switch__33227__auto__.call(null,state_33473);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33230__auto__;
}
break;
}
}catch (e33477){if((e33477 instanceof Object)){
var ex__33231__auto__ = e33477;
var statearr_33478_33638 = state_33473;
(statearr_33478_33638[(5)] = ex__33231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33473);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33477;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33639 = state_33473;
state_33473 = G__33639;
continue;
} else {
return ret_value__33229__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33228__auto__ = function(state_33473){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33228__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33228__auto____1.call(this,state_33473);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33228__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33228__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33228__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33228__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33228__auto__;
})()
;})(switch__33227__auto__,c__33315__auto___33637,res,vec__33466,v,p,job,jobs,results))
})();
var state__33317__auto__ = (function (){var statearr_33479 = f__33316__auto__.call(null);
(statearr_33479[(6)] = c__33315__auto___33637);

return statearr_33479;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33317__auto__);
});})(c__33315__auto___33637,res,vec__33466,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__33480){
var vec__33481 = p__33480;
var v = cljs.core.nth.call(null,vec__33481,(0),null);
var p = cljs.core.nth.call(null,vec__33481,(1),null);
var job = vec__33481;
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
var n__27976__auto___33640 = n;
var __33641 = (0);
while(true){
if((__33641 < n__27976__auto___33640)){
var G__33484_33642 = type;
var G__33484_33643__$1 = (((G__33484_33642 instanceof cljs.core.Keyword))?G__33484_33642.fqn:null);
switch (G__33484_33643__$1) {
case "compute":
var c__33315__auto___33645 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__33641,c__33315__auto___33645,G__33484_33642,G__33484_33643__$1,n__27976__auto___33640,jobs,results,process,async){
return (function (){
var f__33316__auto__ = (function (){var switch__33227__auto__ = ((function (__33641,c__33315__auto___33645,G__33484_33642,G__33484_33643__$1,n__27976__auto___33640,jobs,results,process,async){
return (function (state_33497){
var state_val_33498 = (state_33497[(1)]);
if((state_val_33498 === (1))){
var state_33497__$1 = state_33497;
var statearr_33499_33646 = state_33497__$1;
(statearr_33499_33646[(2)] = null);

(statearr_33499_33646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33498 === (2))){
var state_33497__$1 = state_33497;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33497__$1,(4),jobs);
} else {
if((state_val_33498 === (3))){
var inst_33495 = (state_33497[(2)]);
var state_33497__$1 = state_33497;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33497__$1,inst_33495);
} else {
if((state_val_33498 === (4))){
var inst_33487 = (state_33497[(2)]);
var inst_33488 = process.call(null,inst_33487);
var state_33497__$1 = state_33497;
if(cljs.core.truth_(inst_33488)){
var statearr_33500_33647 = state_33497__$1;
(statearr_33500_33647[(1)] = (5));

} else {
var statearr_33501_33648 = state_33497__$1;
(statearr_33501_33648[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33498 === (5))){
var state_33497__$1 = state_33497;
var statearr_33502_33649 = state_33497__$1;
(statearr_33502_33649[(2)] = null);

(statearr_33502_33649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33498 === (6))){
var state_33497__$1 = state_33497;
var statearr_33503_33650 = state_33497__$1;
(statearr_33503_33650[(2)] = null);

(statearr_33503_33650[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33498 === (7))){
var inst_33493 = (state_33497[(2)]);
var state_33497__$1 = state_33497;
var statearr_33504_33651 = state_33497__$1;
(statearr_33504_33651[(2)] = inst_33493);

(statearr_33504_33651[(1)] = (3));


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
});})(__33641,c__33315__auto___33645,G__33484_33642,G__33484_33643__$1,n__27976__auto___33640,jobs,results,process,async))
;
return ((function (__33641,switch__33227__auto__,c__33315__auto___33645,G__33484_33642,G__33484_33643__$1,n__27976__auto___33640,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33228__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33228__auto____0 = (function (){
var statearr_33505 = [null,null,null,null,null,null,null];
(statearr_33505[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33228__auto__);

(statearr_33505[(1)] = (1));

return statearr_33505;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33228__auto____1 = (function (state_33497){
while(true){
var ret_value__33229__auto__ = (function (){try{while(true){
var result__33230__auto__ = switch__33227__auto__.call(null,state_33497);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33230__auto__;
}
break;
}
}catch (e33506){if((e33506 instanceof Object)){
var ex__33231__auto__ = e33506;
var statearr_33507_33652 = state_33497;
(statearr_33507_33652[(5)] = ex__33231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33497);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33506;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33653 = state_33497;
state_33497 = G__33653;
continue;
} else {
return ret_value__33229__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33228__auto__ = function(state_33497){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33228__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33228__auto____1.call(this,state_33497);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33228__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33228__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33228__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33228__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33228__auto__;
})()
;})(__33641,switch__33227__auto__,c__33315__auto___33645,G__33484_33642,G__33484_33643__$1,n__27976__auto___33640,jobs,results,process,async))
})();
var state__33317__auto__ = (function (){var statearr_33508 = f__33316__auto__.call(null);
(statearr_33508[(6)] = c__33315__auto___33645);

return statearr_33508;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33317__auto__);
});})(__33641,c__33315__auto___33645,G__33484_33642,G__33484_33643__$1,n__27976__auto___33640,jobs,results,process,async))
);


break;
case "async":
var c__33315__auto___33654 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__33641,c__33315__auto___33654,G__33484_33642,G__33484_33643__$1,n__27976__auto___33640,jobs,results,process,async){
return (function (){
var f__33316__auto__ = (function (){var switch__33227__auto__ = ((function (__33641,c__33315__auto___33654,G__33484_33642,G__33484_33643__$1,n__27976__auto___33640,jobs,results,process,async){
return (function (state_33521){
var state_val_33522 = (state_33521[(1)]);
if((state_val_33522 === (1))){
var state_33521__$1 = state_33521;
var statearr_33523_33655 = state_33521__$1;
(statearr_33523_33655[(2)] = null);

(statearr_33523_33655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33522 === (2))){
var state_33521__$1 = state_33521;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33521__$1,(4),jobs);
} else {
if((state_val_33522 === (3))){
var inst_33519 = (state_33521[(2)]);
var state_33521__$1 = state_33521;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33521__$1,inst_33519);
} else {
if((state_val_33522 === (4))){
var inst_33511 = (state_33521[(2)]);
var inst_33512 = async.call(null,inst_33511);
var state_33521__$1 = state_33521;
if(cljs.core.truth_(inst_33512)){
var statearr_33524_33656 = state_33521__$1;
(statearr_33524_33656[(1)] = (5));

} else {
var statearr_33525_33657 = state_33521__$1;
(statearr_33525_33657[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33522 === (5))){
var state_33521__$1 = state_33521;
var statearr_33526_33658 = state_33521__$1;
(statearr_33526_33658[(2)] = null);

(statearr_33526_33658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33522 === (6))){
var state_33521__$1 = state_33521;
var statearr_33527_33659 = state_33521__$1;
(statearr_33527_33659[(2)] = null);

(statearr_33527_33659[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33522 === (7))){
var inst_33517 = (state_33521[(2)]);
var state_33521__$1 = state_33521;
var statearr_33528_33660 = state_33521__$1;
(statearr_33528_33660[(2)] = inst_33517);

(statearr_33528_33660[(1)] = (3));


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
});})(__33641,c__33315__auto___33654,G__33484_33642,G__33484_33643__$1,n__27976__auto___33640,jobs,results,process,async))
;
return ((function (__33641,switch__33227__auto__,c__33315__auto___33654,G__33484_33642,G__33484_33643__$1,n__27976__auto___33640,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33228__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33228__auto____0 = (function (){
var statearr_33529 = [null,null,null,null,null,null,null];
(statearr_33529[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33228__auto__);

(statearr_33529[(1)] = (1));

return statearr_33529;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33228__auto____1 = (function (state_33521){
while(true){
var ret_value__33229__auto__ = (function (){try{while(true){
var result__33230__auto__ = switch__33227__auto__.call(null,state_33521);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33230__auto__;
}
break;
}
}catch (e33530){if((e33530 instanceof Object)){
var ex__33231__auto__ = e33530;
var statearr_33531_33661 = state_33521;
(statearr_33531_33661[(5)] = ex__33231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33521);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33530;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33662 = state_33521;
state_33521 = G__33662;
continue;
} else {
return ret_value__33229__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33228__auto__ = function(state_33521){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33228__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33228__auto____1.call(this,state_33521);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33228__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33228__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33228__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33228__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33228__auto__;
})()
;})(__33641,switch__33227__auto__,c__33315__auto___33654,G__33484_33642,G__33484_33643__$1,n__27976__auto___33640,jobs,results,process,async))
})();
var state__33317__auto__ = (function (){var statearr_33532 = f__33316__auto__.call(null);
(statearr_33532[(6)] = c__33315__auto___33654);

return statearr_33532;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33317__auto__);
});})(__33641,c__33315__auto___33654,G__33484_33642,G__33484_33643__$1,n__27976__auto___33640,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33484_33643__$1)].join('')));

}

var G__33663 = (__33641 + (1));
__33641 = G__33663;
continue;
} else {
}
break;
}

var c__33315__auto___33664 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33315__auto___33664,jobs,results,process,async){
return (function (){
var f__33316__auto__ = (function (){var switch__33227__auto__ = ((function (c__33315__auto___33664,jobs,results,process,async){
return (function (state_33554){
var state_val_33555 = (state_33554[(1)]);
if((state_val_33555 === (1))){
var state_33554__$1 = state_33554;
var statearr_33556_33665 = state_33554__$1;
(statearr_33556_33665[(2)] = null);

(statearr_33556_33665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33555 === (2))){
var state_33554__$1 = state_33554;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33554__$1,(4),from);
} else {
if((state_val_33555 === (3))){
var inst_33552 = (state_33554[(2)]);
var state_33554__$1 = state_33554;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33554__$1,inst_33552);
} else {
if((state_val_33555 === (4))){
var inst_33535 = (state_33554[(7)]);
var inst_33535__$1 = (state_33554[(2)]);
var inst_33536 = (inst_33535__$1 == null);
var state_33554__$1 = (function (){var statearr_33557 = state_33554;
(statearr_33557[(7)] = inst_33535__$1);

return statearr_33557;
})();
if(cljs.core.truth_(inst_33536)){
var statearr_33558_33666 = state_33554__$1;
(statearr_33558_33666[(1)] = (5));

} else {
var statearr_33559_33667 = state_33554__$1;
(statearr_33559_33667[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33555 === (5))){
var inst_33538 = cljs.core.async.close_BANG_.call(null,jobs);
var state_33554__$1 = state_33554;
var statearr_33560_33668 = state_33554__$1;
(statearr_33560_33668[(2)] = inst_33538);

(statearr_33560_33668[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33555 === (6))){
var inst_33540 = (state_33554[(8)]);
var inst_33535 = (state_33554[(7)]);
var inst_33540__$1 = cljs.core.async.chan.call(null,(1));
var inst_33541 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33542 = [inst_33535,inst_33540__$1];
var inst_33543 = (new cljs.core.PersistentVector(null,2,(5),inst_33541,inst_33542,null));
var state_33554__$1 = (function (){var statearr_33561 = state_33554;
(statearr_33561[(8)] = inst_33540__$1);

return statearr_33561;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33554__$1,(8),jobs,inst_33543);
} else {
if((state_val_33555 === (7))){
var inst_33550 = (state_33554[(2)]);
var state_33554__$1 = state_33554;
var statearr_33562_33669 = state_33554__$1;
(statearr_33562_33669[(2)] = inst_33550);

(statearr_33562_33669[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33555 === (8))){
var inst_33540 = (state_33554[(8)]);
var inst_33545 = (state_33554[(2)]);
var state_33554__$1 = (function (){var statearr_33563 = state_33554;
(statearr_33563[(9)] = inst_33545);

return statearr_33563;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33554__$1,(9),results,inst_33540);
} else {
if((state_val_33555 === (9))){
var inst_33547 = (state_33554[(2)]);
var state_33554__$1 = (function (){var statearr_33564 = state_33554;
(statearr_33564[(10)] = inst_33547);

return statearr_33564;
})();
var statearr_33565_33670 = state_33554__$1;
(statearr_33565_33670[(2)] = null);

(statearr_33565_33670[(1)] = (2));


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
});})(c__33315__auto___33664,jobs,results,process,async))
;
return ((function (switch__33227__auto__,c__33315__auto___33664,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33228__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33228__auto____0 = (function (){
var statearr_33566 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33566[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33228__auto__);

(statearr_33566[(1)] = (1));

return statearr_33566;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33228__auto____1 = (function (state_33554){
while(true){
var ret_value__33229__auto__ = (function (){try{while(true){
var result__33230__auto__ = switch__33227__auto__.call(null,state_33554);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33230__auto__;
}
break;
}
}catch (e33567){if((e33567 instanceof Object)){
var ex__33231__auto__ = e33567;
var statearr_33568_33671 = state_33554;
(statearr_33568_33671[(5)] = ex__33231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33554);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33567;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33672 = state_33554;
state_33554 = G__33672;
continue;
} else {
return ret_value__33229__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33228__auto__ = function(state_33554){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33228__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33228__auto____1.call(this,state_33554);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33228__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33228__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33228__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33228__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33228__auto__;
})()
;})(switch__33227__auto__,c__33315__auto___33664,jobs,results,process,async))
})();
var state__33317__auto__ = (function (){var statearr_33569 = f__33316__auto__.call(null);
(statearr_33569[(6)] = c__33315__auto___33664);

return statearr_33569;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33317__auto__);
});})(c__33315__auto___33664,jobs,results,process,async))
);


var c__33315__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33315__auto__,jobs,results,process,async){
return (function (){
var f__33316__auto__ = (function (){var switch__33227__auto__ = ((function (c__33315__auto__,jobs,results,process,async){
return (function (state_33607){
var state_val_33608 = (state_33607[(1)]);
if((state_val_33608 === (7))){
var inst_33603 = (state_33607[(2)]);
var state_33607__$1 = state_33607;
var statearr_33609_33673 = state_33607__$1;
(statearr_33609_33673[(2)] = inst_33603);

(statearr_33609_33673[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33608 === (20))){
var state_33607__$1 = state_33607;
var statearr_33610_33674 = state_33607__$1;
(statearr_33610_33674[(2)] = null);

(statearr_33610_33674[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33608 === (1))){
var state_33607__$1 = state_33607;
var statearr_33611_33675 = state_33607__$1;
(statearr_33611_33675[(2)] = null);

(statearr_33611_33675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33608 === (4))){
var inst_33572 = (state_33607[(7)]);
var inst_33572__$1 = (state_33607[(2)]);
var inst_33573 = (inst_33572__$1 == null);
var state_33607__$1 = (function (){var statearr_33612 = state_33607;
(statearr_33612[(7)] = inst_33572__$1);

return statearr_33612;
})();
if(cljs.core.truth_(inst_33573)){
var statearr_33613_33676 = state_33607__$1;
(statearr_33613_33676[(1)] = (5));

} else {
var statearr_33614_33677 = state_33607__$1;
(statearr_33614_33677[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33608 === (15))){
var inst_33585 = (state_33607[(8)]);
var state_33607__$1 = state_33607;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33607__$1,(18),to,inst_33585);
} else {
if((state_val_33608 === (21))){
var inst_33598 = (state_33607[(2)]);
var state_33607__$1 = state_33607;
var statearr_33615_33678 = state_33607__$1;
(statearr_33615_33678[(2)] = inst_33598);

(statearr_33615_33678[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33608 === (13))){
var inst_33600 = (state_33607[(2)]);
var state_33607__$1 = (function (){var statearr_33616 = state_33607;
(statearr_33616[(9)] = inst_33600);

return statearr_33616;
})();
var statearr_33617_33679 = state_33607__$1;
(statearr_33617_33679[(2)] = null);

(statearr_33617_33679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33608 === (6))){
var inst_33572 = (state_33607[(7)]);
var state_33607__$1 = state_33607;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33607__$1,(11),inst_33572);
} else {
if((state_val_33608 === (17))){
var inst_33593 = (state_33607[(2)]);
var state_33607__$1 = state_33607;
if(cljs.core.truth_(inst_33593)){
var statearr_33618_33680 = state_33607__$1;
(statearr_33618_33680[(1)] = (19));

} else {
var statearr_33619_33681 = state_33607__$1;
(statearr_33619_33681[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33608 === (3))){
var inst_33605 = (state_33607[(2)]);
var state_33607__$1 = state_33607;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33607__$1,inst_33605);
} else {
if((state_val_33608 === (12))){
var inst_33582 = (state_33607[(10)]);
var state_33607__$1 = state_33607;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33607__$1,(14),inst_33582);
} else {
if((state_val_33608 === (2))){
var state_33607__$1 = state_33607;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33607__$1,(4),results);
} else {
if((state_val_33608 === (19))){
var state_33607__$1 = state_33607;
var statearr_33620_33682 = state_33607__$1;
(statearr_33620_33682[(2)] = null);

(statearr_33620_33682[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33608 === (11))){
var inst_33582 = (state_33607[(2)]);
var state_33607__$1 = (function (){var statearr_33621 = state_33607;
(statearr_33621[(10)] = inst_33582);

return statearr_33621;
})();
var statearr_33622_33683 = state_33607__$1;
(statearr_33622_33683[(2)] = null);

(statearr_33622_33683[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33608 === (9))){
var state_33607__$1 = state_33607;
var statearr_33623_33684 = state_33607__$1;
(statearr_33623_33684[(2)] = null);

(statearr_33623_33684[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33608 === (5))){
var state_33607__$1 = state_33607;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33624_33685 = state_33607__$1;
(statearr_33624_33685[(1)] = (8));

} else {
var statearr_33625_33686 = state_33607__$1;
(statearr_33625_33686[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33608 === (14))){
var inst_33587 = (state_33607[(11)]);
var inst_33585 = (state_33607[(8)]);
var inst_33585__$1 = (state_33607[(2)]);
var inst_33586 = (inst_33585__$1 == null);
var inst_33587__$1 = cljs.core.not.call(null,inst_33586);
var state_33607__$1 = (function (){var statearr_33626 = state_33607;
(statearr_33626[(11)] = inst_33587__$1);

(statearr_33626[(8)] = inst_33585__$1);

return statearr_33626;
})();
if(inst_33587__$1){
var statearr_33627_33687 = state_33607__$1;
(statearr_33627_33687[(1)] = (15));

} else {
var statearr_33628_33688 = state_33607__$1;
(statearr_33628_33688[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33608 === (16))){
var inst_33587 = (state_33607[(11)]);
var state_33607__$1 = state_33607;
var statearr_33629_33689 = state_33607__$1;
(statearr_33629_33689[(2)] = inst_33587);

(statearr_33629_33689[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33608 === (10))){
var inst_33579 = (state_33607[(2)]);
var state_33607__$1 = state_33607;
var statearr_33630_33690 = state_33607__$1;
(statearr_33630_33690[(2)] = inst_33579);

(statearr_33630_33690[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33608 === (18))){
var inst_33590 = (state_33607[(2)]);
var state_33607__$1 = state_33607;
var statearr_33631_33691 = state_33607__$1;
(statearr_33631_33691[(2)] = inst_33590);

(statearr_33631_33691[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33608 === (8))){
var inst_33576 = cljs.core.async.close_BANG_.call(null,to);
var state_33607__$1 = state_33607;
var statearr_33632_33692 = state_33607__$1;
(statearr_33632_33692[(2)] = inst_33576);

(statearr_33632_33692[(1)] = (10));


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
});})(c__33315__auto__,jobs,results,process,async))
;
return ((function (switch__33227__auto__,c__33315__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33228__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33228__auto____0 = (function (){
var statearr_33633 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33633[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33228__auto__);

(statearr_33633[(1)] = (1));

return statearr_33633;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33228__auto____1 = (function (state_33607){
while(true){
var ret_value__33229__auto__ = (function (){try{while(true){
var result__33230__auto__ = switch__33227__auto__.call(null,state_33607);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33230__auto__;
}
break;
}
}catch (e33634){if((e33634 instanceof Object)){
var ex__33231__auto__ = e33634;
var statearr_33635_33693 = state_33607;
(statearr_33635_33693[(5)] = ex__33231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33607);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33634;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33694 = state_33607;
state_33607 = G__33694;
continue;
} else {
return ret_value__33229__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33228__auto__ = function(state_33607){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33228__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33228__auto____1.call(this,state_33607);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33228__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33228__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33228__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33228__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33228__auto__;
})()
;})(switch__33227__auto__,c__33315__auto__,jobs,results,process,async))
})();
var state__33317__auto__ = (function (){var statearr_33636 = f__33316__auto__.call(null);
(statearr_33636[(6)] = c__33315__auto__);

return statearr_33636;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33317__auto__);
});})(c__33315__auto__,jobs,results,process,async))
);

return c__33315__auto__;
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
var G__33696 = arguments.length;
switch (G__33696) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__33699 = arguments.length;
switch (G__33699) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__33702 = arguments.length;
switch (G__33702) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__33315__auto___33751 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33315__auto___33751,tc,fc){
return (function (){
var f__33316__auto__ = (function (){var switch__33227__auto__ = ((function (c__33315__auto___33751,tc,fc){
return (function (state_33728){
var state_val_33729 = (state_33728[(1)]);
if((state_val_33729 === (7))){
var inst_33724 = (state_33728[(2)]);
var state_33728__$1 = state_33728;
var statearr_33730_33752 = state_33728__$1;
(statearr_33730_33752[(2)] = inst_33724);

(statearr_33730_33752[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33729 === (1))){
var state_33728__$1 = state_33728;
var statearr_33731_33753 = state_33728__$1;
(statearr_33731_33753[(2)] = null);

(statearr_33731_33753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33729 === (4))){
var inst_33705 = (state_33728[(7)]);
var inst_33705__$1 = (state_33728[(2)]);
var inst_33706 = (inst_33705__$1 == null);
var state_33728__$1 = (function (){var statearr_33732 = state_33728;
(statearr_33732[(7)] = inst_33705__$1);

return statearr_33732;
})();
if(cljs.core.truth_(inst_33706)){
var statearr_33733_33754 = state_33728__$1;
(statearr_33733_33754[(1)] = (5));

} else {
var statearr_33734_33755 = state_33728__$1;
(statearr_33734_33755[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33729 === (13))){
var state_33728__$1 = state_33728;
var statearr_33735_33756 = state_33728__$1;
(statearr_33735_33756[(2)] = null);

(statearr_33735_33756[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33729 === (6))){
var inst_33705 = (state_33728[(7)]);
var inst_33711 = p.call(null,inst_33705);
var state_33728__$1 = state_33728;
if(cljs.core.truth_(inst_33711)){
var statearr_33736_33757 = state_33728__$1;
(statearr_33736_33757[(1)] = (9));

} else {
var statearr_33737_33758 = state_33728__$1;
(statearr_33737_33758[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33729 === (3))){
var inst_33726 = (state_33728[(2)]);
var state_33728__$1 = state_33728;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33728__$1,inst_33726);
} else {
if((state_val_33729 === (12))){
var state_33728__$1 = state_33728;
var statearr_33738_33759 = state_33728__$1;
(statearr_33738_33759[(2)] = null);

(statearr_33738_33759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33729 === (2))){
var state_33728__$1 = state_33728;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33728__$1,(4),ch);
} else {
if((state_val_33729 === (11))){
var inst_33705 = (state_33728[(7)]);
var inst_33715 = (state_33728[(2)]);
var state_33728__$1 = state_33728;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33728__$1,(8),inst_33715,inst_33705);
} else {
if((state_val_33729 === (9))){
var state_33728__$1 = state_33728;
var statearr_33739_33760 = state_33728__$1;
(statearr_33739_33760[(2)] = tc);

(statearr_33739_33760[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33729 === (5))){
var inst_33708 = cljs.core.async.close_BANG_.call(null,tc);
var inst_33709 = cljs.core.async.close_BANG_.call(null,fc);
var state_33728__$1 = (function (){var statearr_33740 = state_33728;
(statearr_33740[(8)] = inst_33708);

return statearr_33740;
})();
var statearr_33741_33761 = state_33728__$1;
(statearr_33741_33761[(2)] = inst_33709);

(statearr_33741_33761[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33729 === (14))){
var inst_33722 = (state_33728[(2)]);
var state_33728__$1 = state_33728;
var statearr_33742_33762 = state_33728__$1;
(statearr_33742_33762[(2)] = inst_33722);

(statearr_33742_33762[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33729 === (10))){
var state_33728__$1 = state_33728;
var statearr_33743_33763 = state_33728__$1;
(statearr_33743_33763[(2)] = fc);

(statearr_33743_33763[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33729 === (8))){
var inst_33717 = (state_33728[(2)]);
var state_33728__$1 = state_33728;
if(cljs.core.truth_(inst_33717)){
var statearr_33744_33764 = state_33728__$1;
(statearr_33744_33764[(1)] = (12));

} else {
var statearr_33745_33765 = state_33728__$1;
(statearr_33745_33765[(1)] = (13));

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
});})(c__33315__auto___33751,tc,fc))
;
return ((function (switch__33227__auto__,c__33315__auto___33751,tc,fc){
return (function() {
var cljs$core$async$state_machine__33228__auto__ = null;
var cljs$core$async$state_machine__33228__auto____0 = (function (){
var statearr_33746 = [null,null,null,null,null,null,null,null,null];
(statearr_33746[(0)] = cljs$core$async$state_machine__33228__auto__);

(statearr_33746[(1)] = (1));

return statearr_33746;
});
var cljs$core$async$state_machine__33228__auto____1 = (function (state_33728){
while(true){
var ret_value__33229__auto__ = (function (){try{while(true){
var result__33230__auto__ = switch__33227__auto__.call(null,state_33728);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33230__auto__;
}
break;
}
}catch (e33747){if((e33747 instanceof Object)){
var ex__33231__auto__ = e33747;
var statearr_33748_33766 = state_33728;
(statearr_33748_33766[(5)] = ex__33231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33728);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33747;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33767 = state_33728;
state_33728 = G__33767;
continue;
} else {
return ret_value__33229__auto__;
}
break;
}
});
cljs$core$async$state_machine__33228__auto__ = function(state_33728){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33228__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33228__auto____1.call(this,state_33728);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33228__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33228__auto____0;
cljs$core$async$state_machine__33228__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33228__auto____1;
return cljs$core$async$state_machine__33228__auto__;
})()
;})(switch__33227__auto__,c__33315__auto___33751,tc,fc))
})();
var state__33317__auto__ = (function (){var statearr_33749 = f__33316__auto__.call(null);
(statearr_33749[(6)] = c__33315__auto___33751);

return statearr_33749;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33317__auto__);
});})(c__33315__auto___33751,tc,fc))
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
var c__33315__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33315__auto__){
return (function (){
var f__33316__auto__ = (function (){var switch__33227__auto__ = ((function (c__33315__auto__){
return (function (state_33788){
var state_val_33789 = (state_33788[(1)]);
if((state_val_33789 === (7))){
var inst_33784 = (state_33788[(2)]);
var state_33788__$1 = state_33788;
var statearr_33790_33808 = state_33788__$1;
(statearr_33790_33808[(2)] = inst_33784);

(statearr_33790_33808[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33789 === (1))){
var inst_33768 = init;
var state_33788__$1 = (function (){var statearr_33791 = state_33788;
(statearr_33791[(7)] = inst_33768);

return statearr_33791;
})();
var statearr_33792_33809 = state_33788__$1;
(statearr_33792_33809[(2)] = null);

(statearr_33792_33809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33789 === (4))){
var inst_33771 = (state_33788[(8)]);
var inst_33771__$1 = (state_33788[(2)]);
var inst_33772 = (inst_33771__$1 == null);
var state_33788__$1 = (function (){var statearr_33793 = state_33788;
(statearr_33793[(8)] = inst_33771__$1);

return statearr_33793;
})();
if(cljs.core.truth_(inst_33772)){
var statearr_33794_33810 = state_33788__$1;
(statearr_33794_33810[(1)] = (5));

} else {
var statearr_33795_33811 = state_33788__$1;
(statearr_33795_33811[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33789 === (6))){
var inst_33775 = (state_33788[(9)]);
var inst_33768 = (state_33788[(7)]);
var inst_33771 = (state_33788[(8)]);
var inst_33775__$1 = f.call(null,inst_33768,inst_33771);
var inst_33776 = cljs.core.reduced_QMARK_.call(null,inst_33775__$1);
var state_33788__$1 = (function (){var statearr_33796 = state_33788;
(statearr_33796[(9)] = inst_33775__$1);

return statearr_33796;
})();
if(inst_33776){
var statearr_33797_33812 = state_33788__$1;
(statearr_33797_33812[(1)] = (8));

} else {
var statearr_33798_33813 = state_33788__$1;
(statearr_33798_33813[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33789 === (3))){
var inst_33786 = (state_33788[(2)]);
var state_33788__$1 = state_33788;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33788__$1,inst_33786);
} else {
if((state_val_33789 === (2))){
var state_33788__$1 = state_33788;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33788__$1,(4),ch);
} else {
if((state_val_33789 === (9))){
var inst_33775 = (state_33788[(9)]);
var inst_33768 = inst_33775;
var state_33788__$1 = (function (){var statearr_33799 = state_33788;
(statearr_33799[(7)] = inst_33768);

return statearr_33799;
})();
var statearr_33800_33814 = state_33788__$1;
(statearr_33800_33814[(2)] = null);

(statearr_33800_33814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33789 === (5))){
var inst_33768 = (state_33788[(7)]);
var state_33788__$1 = state_33788;
var statearr_33801_33815 = state_33788__$1;
(statearr_33801_33815[(2)] = inst_33768);

(statearr_33801_33815[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33789 === (10))){
var inst_33782 = (state_33788[(2)]);
var state_33788__$1 = state_33788;
var statearr_33802_33816 = state_33788__$1;
(statearr_33802_33816[(2)] = inst_33782);

(statearr_33802_33816[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33789 === (8))){
var inst_33775 = (state_33788[(9)]);
var inst_33778 = cljs.core.deref.call(null,inst_33775);
var state_33788__$1 = state_33788;
var statearr_33803_33817 = state_33788__$1;
(statearr_33803_33817[(2)] = inst_33778);

(statearr_33803_33817[(1)] = (10));


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
});})(c__33315__auto__))
;
return ((function (switch__33227__auto__,c__33315__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__33228__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33228__auto____0 = (function (){
var statearr_33804 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33804[(0)] = cljs$core$async$reduce_$_state_machine__33228__auto__);

(statearr_33804[(1)] = (1));

return statearr_33804;
});
var cljs$core$async$reduce_$_state_machine__33228__auto____1 = (function (state_33788){
while(true){
var ret_value__33229__auto__ = (function (){try{while(true){
var result__33230__auto__ = switch__33227__auto__.call(null,state_33788);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33230__auto__;
}
break;
}
}catch (e33805){if((e33805 instanceof Object)){
var ex__33231__auto__ = e33805;
var statearr_33806_33818 = state_33788;
(statearr_33806_33818[(5)] = ex__33231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33788);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33805;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33819 = state_33788;
state_33788 = G__33819;
continue;
} else {
return ret_value__33229__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33228__auto__ = function(state_33788){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33228__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33228__auto____1.call(this,state_33788);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__33228__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33228__auto____0;
cljs$core$async$reduce_$_state_machine__33228__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33228__auto____1;
return cljs$core$async$reduce_$_state_machine__33228__auto__;
})()
;})(switch__33227__auto__,c__33315__auto__))
})();
var state__33317__auto__ = (function (){var statearr_33807 = f__33316__auto__.call(null);
(statearr_33807[(6)] = c__33315__auto__);

return statearr_33807;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33317__auto__);
});})(c__33315__auto__))
);

return c__33315__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__33315__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33315__auto__,f__$1){
return (function (){
var f__33316__auto__ = (function (){var switch__33227__auto__ = ((function (c__33315__auto__,f__$1){
return (function (state_33825){
var state_val_33826 = (state_33825[(1)]);
if((state_val_33826 === (1))){
var inst_33820 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_33825__$1 = state_33825;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33825__$1,(2),inst_33820);
} else {
if((state_val_33826 === (2))){
var inst_33822 = (state_33825[(2)]);
var inst_33823 = f__$1.call(null,inst_33822);
var state_33825__$1 = state_33825;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33825__$1,inst_33823);
} else {
return null;
}
}
});})(c__33315__auto__,f__$1))
;
return ((function (switch__33227__auto__,c__33315__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__33228__auto__ = null;
var cljs$core$async$transduce_$_state_machine__33228__auto____0 = (function (){
var statearr_33827 = [null,null,null,null,null,null,null];
(statearr_33827[(0)] = cljs$core$async$transduce_$_state_machine__33228__auto__);

(statearr_33827[(1)] = (1));

return statearr_33827;
});
var cljs$core$async$transduce_$_state_machine__33228__auto____1 = (function (state_33825){
while(true){
var ret_value__33229__auto__ = (function (){try{while(true){
var result__33230__auto__ = switch__33227__auto__.call(null,state_33825);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33230__auto__;
}
break;
}
}catch (e33828){if((e33828 instanceof Object)){
var ex__33231__auto__ = e33828;
var statearr_33829_33831 = state_33825;
(statearr_33829_33831[(5)] = ex__33231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33825);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33828;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33832 = state_33825;
state_33825 = G__33832;
continue;
} else {
return ret_value__33229__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__33228__auto__ = function(state_33825){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__33228__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__33228__auto____1.call(this,state_33825);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__33228__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__33228__auto____0;
cljs$core$async$transduce_$_state_machine__33228__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__33228__auto____1;
return cljs$core$async$transduce_$_state_machine__33228__auto__;
})()
;})(switch__33227__auto__,c__33315__auto__,f__$1))
})();
var state__33317__auto__ = (function (){var statearr_33830 = f__33316__auto__.call(null);
(statearr_33830[(6)] = c__33315__auto__);

return statearr_33830;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33317__auto__);
});})(c__33315__auto__,f__$1))
);

return c__33315__auto__;
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
var G__33834 = arguments.length;
switch (G__33834) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__33315__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33315__auto__){
return (function (){
var f__33316__auto__ = (function (){var switch__33227__auto__ = ((function (c__33315__auto__){
return (function (state_33859){
var state_val_33860 = (state_33859[(1)]);
if((state_val_33860 === (7))){
var inst_33841 = (state_33859[(2)]);
var state_33859__$1 = state_33859;
var statearr_33861_33882 = state_33859__$1;
(statearr_33861_33882[(2)] = inst_33841);

(statearr_33861_33882[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33860 === (1))){
var inst_33835 = cljs.core.seq.call(null,coll);
var inst_33836 = inst_33835;
var state_33859__$1 = (function (){var statearr_33862 = state_33859;
(statearr_33862[(7)] = inst_33836);

return statearr_33862;
})();
var statearr_33863_33883 = state_33859__$1;
(statearr_33863_33883[(2)] = null);

(statearr_33863_33883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33860 === (4))){
var inst_33836 = (state_33859[(7)]);
var inst_33839 = cljs.core.first.call(null,inst_33836);
var state_33859__$1 = state_33859;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33859__$1,(7),ch,inst_33839);
} else {
if((state_val_33860 === (13))){
var inst_33853 = (state_33859[(2)]);
var state_33859__$1 = state_33859;
var statearr_33864_33884 = state_33859__$1;
(statearr_33864_33884[(2)] = inst_33853);

(statearr_33864_33884[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33860 === (6))){
var inst_33844 = (state_33859[(2)]);
var state_33859__$1 = state_33859;
if(cljs.core.truth_(inst_33844)){
var statearr_33865_33885 = state_33859__$1;
(statearr_33865_33885[(1)] = (8));

} else {
var statearr_33866_33886 = state_33859__$1;
(statearr_33866_33886[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33860 === (3))){
var inst_33857 = (state_33859[(2)]);
var state_33859__$1 = state_33859;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33859__$1,inst_33857);
} else {
if((state_val_33860 === (12))){
var state_33859__$1 = state_33859;
var statearr_33867_33887 = state_33859__$1;
(statearr_33867_33887[(2)] = null);

(statearr_33867_33887[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33860 === (2))){
var inst_33836 = (state_33859[(7)]);
var state_33859__$1 = state_33859;
if(cljs.core.truth_(inst_33836)){
var statearr_33868_33888 = state_33859__$1;
(statearr_33868_33888[(1)] = (4));

} else {
var statearr_33869_33889 = state_33859__$1;
(statearr_33869_33889[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33860 === (11))){
var inst_33850 = cljs.core.async.close_BANG_.call(null,ch);
var state_33859__$1 = state_33859;
var statearr_33870_33890 = state_33859__$1;
(statearr_33870_33890[(2)] = inst_33850);

(statearr_33870_33890[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33860 === (9))){
var state_33859__$1 = state_33859;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33871_33891 = state_33859__$1;
(statearr_33871_33891[(1)] = (11));

} else {
var statearr_33872_33892 = state_33859__$1;
(statearr_33872_33892[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33860 === (5))){
var inst_33836 = (state_33859[(7)]);
var state_33859__$1 = state_33859;
var statearr_33873_33893 = state_33859__$1;
(statearr_33873_33893[(2)] = inst_33836);

(statearr_33873_33893[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33860 === (10))){
var inst_33855 = (state_33859[(2)]);
var state_33859__$1 = state_33859;
var statearr_33874_33894 = state_33859__$1;
(statearr_33874_33894[(2)] = inst_33855);

(statearr_33874_33894[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33860 === (8))){
var inst_33836 = (state_33859[(7)]);
var inst_33846 = cljs.core.next.call(null,inst_33836);
var inst_33836__$1 = inst_33846;
var state_33859__$1 = (function (){var statearr_33875 = state_33859;
(statearr_33875[(7)] = inst_33836__$1);

return statearr_33875;
})();
var statearr_33876_33895 = state_33859__$1;
(statearr_33876_33895[(2)] = null);

(statearr_33876_33895[(1)] = (2));


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
});})(c__33315__auto__))
;
return ((function (switch__33227__auto__,c__33315__auto__){
return (function() {
var cljs$core$async$state_machine__33228__auto__ = null;
var cljs$core$async$state_machine__33228__auto____0 = (function (){
var statearr_33877 = [null,null,null,null,null,null,null,null];
(statearr_33877[(0)] = cljs$core$async$state_machine__33228__auto__);

(statearr_33877[(1)] = (1));

return statearr_33877;
});
var cljs$core$async$state_machine__33228__auto____1 = (function (state_33859){
while(true){
var ret_value__33229__auto__ = (function (){try{while(true){
var result__33230__auto__ = switch__33227__auto__.call(null,state_33859);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33230__auto__;
}
break;
}
}catch (e33878){if((e33878 instanceof Object)){
var ex__33231__auto__ = e33878;
var statearr_33879_33896 = state_33859;
(statearr_33879_33896[(5)] = ex__33231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33859);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33878;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33897 = state_33859;
state_33859 = G__33897;
continue;
} else {
return ret_value__33229__auto__;
}
break;
}
});
cljs$core$async$state_machine__33228__auto__ = function(state_33859){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33228__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33228__auto____1.call(this,state_33859);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33228__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33228__auto____0;
cljs$core$async$state_machine__33228__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33228__auto____1;
return cljs$core$async$state_machine__33228__auto__;
})()
;})(switch__33227__auto__,c__33315__auto__))
})();
var state__33317__auto__ = (function (){var statearr_33880 = f__33316__auto__.call(null);
(statearr_33880[(6)] = c__33315__auto__);

return statearr_33880;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33317__auto__);
});})(c__33315__auto__))
);

return c__33315__auto__;
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
var x__27721__auto__ = (((_ == null))?null:_);
var m__27722__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__27721__auto__)]);
if(!((m__27722__auto__ == null))){
return m__27722__auto__.call(null,_);
} else {
var m__27722__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__27722__auto____$1 == null))){
return m__27722__auto____$1.call(null,_);
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
var x__27721__auto__ = (((m == null))?null:m);
var m__27722__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__27721__auto__)]);
if(!((m__27722__auto__ == null))){
return m__27722__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__27722__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__27722__auto____$1 == null))){
return m__27722__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__27721__auto__ = (((m == null))?null:m);
var m__27722__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__27721__auto__)]);
if(!((m__27722__auto__ == null))){
return m__27722__auto__.call(null,m,ch);
} else {
var m__27722__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__27722__auto____$1 == null))){
return m__27722__auto____$1.call(null,m,ch);
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
var x__27721__auto__ = (((m == null))?null:m);
var m__27722__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__27721__auto__)]);
if(!((m__27722__auto__ == null))){
return m__27722__auto__.call(null,m);
} else {
var m__27722__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__27722__auto____$1 == null))){
return m__27722__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async33898 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33898 = (function (ch,cs,meta33899){
this.ch = ch;
this.cs = cs;
this.meta33899 = meta33899;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33898.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_33900,meta33899__$1){
var self__ = this;
var _33900__$1 = this;
return (new cljs.core.async.t_cljs$core$async33898(self__.ch,self__.cs,meta33899__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async33898.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_33900){
var self__ = this;
var _33900__$1 = this;
return self__.meta33899;
});})(cs))
;

cljs.core.async.t_cljs$core$async33898.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33898.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async33898.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33898.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33898.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33898.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33898.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33899","meta33899",-1430978039,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async33898.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33898.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33898";

cljs.core.async.t_cljs$core$async33898.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__27663__auto__,writer__27664__auto__,opt__27665__auto__){
return cljs.core._write.call(null,writer__27664__auto__,"cljs.core.async/t_cljs$core$async33898");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async33898 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async33898(ch__$1,cs__$1,meta33899){
return (new cljs.core.async.t_cljs$core$async33898(ch__$1,cs__$1,meta33899));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async33898(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__33315__auto___34120 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33315__auto___34120,cs,m,dchan,dctr,done){
return (function (){
var f__33316__auto__ = (function (){var switch__33227__auto__ = ((function (c__33315__auto___34120,cs,m,dchan,dctr,done){
return (function (state_34035){
var state_val_34036 = (state_34035[(1)]);
if((state_val_34036 === (7))){
var inst_34031 = (state_34035[(2)]);
var state_34035__$1 = state_34035;
var statearr_34037_34121 = state_34035__$1;
(statearr_34037_34121[(2)] = inst_34031);

(statearr_34037_34121[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34036 === (20))){
var inst_33934 = (state_34035[(7)]);
var inst_33946 = cljs.core.first.call(null,inst_33934);
var inst_33947 = cljs.core.nth.call(null,inst_33946,(0),null);
var inst_33948 = cljs.core.nth.call(null,inst_33946,(1),null);
var state_34035__$1 = (function (){var statearr_34038 = state_34035;
(statearr_34038[(8)] = inst_33947);

return statearr_34038;
})();
if(cljs.core.truth_(inst_33948)){
var statearr_34039_34122 = state_34035__$1;
(statearr_34039_34122[(1)] = (22));

} else {
var statearr_34040_34123 = state_34035__$1;
(statearr_34040_34123[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34036 === (27))){
var inst_33983 = (state_34035[(9)]);
var inst_33976 = (state_34035[(10)]);
var inst_33978 = (state_34035[(11)]);
var inst_33903 = (state_34035[(12)]);
var inst_33983__$1 = cljs.core._nth.call(null,inst_33976,inst_33978);
var inst_33984 = cljs.core.async.put_BANG_.call(null,inst_33983__$1,inst_33903,done);
var state_34035__$1 = (function (){var statearr_34041 = state_34035;
(statearr_34041[(9)] = inst_33983__$1);

return statearr_34041;
})();
if(cljs.core.truth_(inst_33984)){
var statearr_34042_34124 = state_34035__$1;
(statearr_34042_34124[(1)] = (30));

} else {
var statearr_34043_34125 = state_34035__$1;
(statearr_34043_34125[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34036 === (1))){
var state_34035__$1 = state_34035;
var statearr_34044_34126 = state_34035__$1;
(statearr_34044_34126[(2)] = null);

(statearr_34044_34126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34036 === (24))){
var inst_33934 = (state_34035[(7)]);
var inst_33953 = (state_34035[(2)]);
var inst_33954 = cljs.core.next.call(null,inst_33934);
var inst_33912 = inst_33954;
var inst_33913 = null;
var inst_33914 = (0);
var inst_33915 = (0);
var state_34035__$1 = (function (){var statearr_34045 = state_34035;
(statearr_34045[(13)] = inst_33913);

(statearr_34045[(14)] = inst_33914);

(statearr_34045[(15)] = inst_33953);

(statearr_34045[(16)] = inst_33915);

(statearr_34045[(17)] = inst_33912);

return statearr_34045;
})();
var statearr_34046_34127 = state_34035__$1;
(statearr_34046_34127[(2)] = null);

(statearr_34046_34127[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34036 === (39))){
var state_34035__$1 = state_34035;
var statearr_34050_34128 = state_34035__$1;
(statearr_34050_34128[(2)] = null);

(statearr_34050_34128[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34036 === (4))){
var inst_33903 = (state_34035[(12)]);
var inst_33903__$1 = (state_34035[(2)]);
var inst_33904 = (inst_33903__$1 == null);
var state_34035__$1 = (function (){var statearr_34051 = state_34035;
(statearr_34051[(12)] = inst_33903__$1);

return statearr_34051;
})();
if(cljs.core.truth_(inst_33904)){
var statearr_34052_34129 = state_34035__$1;
(statearr_34052_34129[(1)] = (5));

} else {
var statearr_34053_34130 = state_34035__$1;
(statearr_34053_34130[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34036 === (15))){
var inst_33913 = (state_34035[(13)]);
var inst_33914 = (state_34035[(14)]);
var inst_33915 = (state_34035[(16)]);
var inst_33912 = (state_34035[(17)]);
var inst_33930 = (state_34035[(2)]);
var inst_33931 = (inst_33915 + (1));
var tmp34047 = inst_33913;
var tmp34048 = inst_33914;
var tmp34049 = inst_33912;
var inst_33912__$1 = tmp34049;
var inst_33913__$1 = tmp34047;
var inst_33914__$1 = tmp34048;
var inst_33915__$1 = inst_33931;
var state_34035__$1 = (function (){var statearr_34054 = state_34035;
(statearr_34054[(18)] = inst_33930);

(statearr_34054[(13)] = inst_33913__$1);

(statearr_34054[(14)] = inst_33914__$1);

(statearr_34054[(16)] = inst_33915__$1);

(statearr_34054[(17)] = inst_33912__$1);

return statearr_34054;
})();
var statearr_34055_34131 = state_34035__$1;
(statearr_34055_34131[(2)] = null);

(statearr_34055_34131[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34036 === (21))){
var inst_33957 = (state_34035[(2)]);
var state_34035__$1 = state_34035;
var statearr_34059_34132 = state_34035__$1;
(statearr_34059_34132[(2)] = inst_33957);

(statearr_34059_34132[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34036 === (31))){
var inst_33983 = (state_34035[(9)]);
var inst_33987 = done.call(null,null);
var inst_33988 = cljs.core.async.untap_STAR_.call(null,m,inst_33983);
var state_34035__$1 = (function (){var statearr_34060 = state_34035;
(statearr_34060[(19)] = inst_33987);

return statearr_34060;
})();
var statearr_34061_34133 = state_34035__$1;
(statearr_34061_34133[(2)] = inst_33988);

(statearr_34061_34133[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34036 === (32))){
var inst_33975 = (state_34035[(20)]);
var inst_33976 = (state_34035[(10)]);
var inst_33977 = (state_34035[(21)]);
var inst_33978 = (state_34035[(11)]);
var inst_33990 = (state_34035[(2)]);
var inst_33991 = (inst_33978 + (1));
var tmp34056 = inst_33975;
var tmp34057 = inst_33976;
var tmp34058 = inst_33977;
var inst_33975__$1 = tmp34056;
var inst_33976__$1 = tmp34057;
var inst_33977__$1 = tmp34058;
var inst_33978__$1 = inst_33991;
var state_34035__$1 = (function (){var statearr_34062 = state_34035;
(statearr_34062[(20)] = inst_33975__$1);

(statearr_34062[(22)] = inst_33990);

(statearr_34062[(10)] = inst_33976__$1);

(statearr_34062[(21)] = inst_33977__$1);

(statearr_34062[(11)] = inst_33978__$1);

return statearr_34062;
})();
var statearr_34063_34134 = state_34035__$1;
(statearr_34063_34134[(2)] = null);

(statearr_34063_34134[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34036 === (40))){
var inst_34003 = (state_34035[(23)]);
var inst_34007 = done.call(null,null);
var inst_34008 = cljs.core.async.untap_STAR_.call(null,m,inst_34003);
var state_34035__$1 = (function (){var statearr_34064 = state_34035;
(statearr_34064[(24)] = inst_34007);

return statearr_34064;
})();
var statearr_34065_34135 = state_34035__$1;
(statearr_34065_34135[(2)] = inst_34008);

(statearr_34065_34135[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34036 === (33))){
var inst_33994 = (state_34035[(25)]);
var inst_33996 = cljs.core.chunked_seq_QMARK_.call(null,inst_33994);
var state_34035__$1 = state_34035;
if(inst_33996){
var statearr_34066_34136 = state_34035__$1;
(statearr_34066_34136[(1)] = (36));

} else {
var statearr_34067_34137 = state_34035__$1;
(statearr_34067_34137[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34036 === (13))){
var inst_33924 = (state_34035[(26)]);
var inst_33927 = cljs.core.async.close_BANG_.call(null,inst_33924);
var state_34035__$1 = state_34035;
var statearr_34068_34138 = state_34035__$1;
(statearr_34068_34138[(2)] = inst_33927);

(statearr_34068_34138[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34036 === (22))){
var inst_33947 = (state_34035[(8)]);
var inst_33950 = cljs.core.async.close_BANG_.call(null,inst_33947);
var state_34035__$1 = state_34035;
var statearr_34069_34139 = state_34035__$1;
(statearr_34069_34139[(2)] = inst_33950);

(statearr_34069_34139[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34036 === (36))){
var inst_33994 = (state_34035[(25)]);
var inst_33998 = cljs.core.chunk_first.call(null,inst_33994);
var inst_33999 = cljs.core.chunk_rest.call(null,inst_33994);
var inst_34000 = cljs.core.count.call(null,inst_33998);
var inst_33975 = inst_33999;
var inst_33976 = inst_33998;
var inst_33977 = inst_34000;
var inst_33978 = (0);
var state_34035__$1 = (function (){var statearr_34070 = state_34035;
(statearr_34070[(20)] = inst_33975);

(statearr_34070[(10)] = inst_33976);

(statearr_34070[(21)] = inst_33977);

(statearr_34070[(11)] = inst_33978);

return statearr_34070;
})();
var statearr_34071_34140 = state_34035__$1;
(statearr_34071_34140[(2)] = null);

(statearr_34071_34140[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34036 === (41))){
var inst_33994 = (state_34035[(25)]);
var inst_34010 = (state_34035[(2)]);
var inst_34011 = cljs.core.next.call(null,inst_33994);
var inst_33975 = inst_34011;
var inst_33976 = null;
var inst_33977 = (0);
var inst_33978 = (0);
var state_34035__$1 = (function (){var statearr_34072 = state_34035;
(statearr_34072[(20)] = inst_33975);

(statearr_34072[(27)] = inst_34010);

(statearr_34072[(10)] = inst_33976);

(statearr_34072[(21)] = inst_33977);

(statearr_34072[(11)] = inst_33978);

return statearr_34072;
})();
var statearr_34073_34141 = state_34035__$1;
(statearr_34073_34141[(2)] = null);

(statearr_34073_34141[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34036 === (43))){
var state_34035__$1 = state_34035;
var statearr_34074_34142 = state_34035__$1;
(statearr_34074_34142[(2)] = null);

(statearr_34074_34142[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34036 === (29))){
var inst_34019 = (state_34035[(2)]);
var state_34035__$1 = state_34035;
var statearr_34075_34143 = state_34035__$1;
(statearr_34075_34143[(2)] = inst_34019);

(statearr_34075_34143[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34036 === (44))){
var inst_34028 = (state_34035[(2)]);
var state_34035__$1 = (function (){var statearr_34076 = state_34035;
(statearr_34076[(28)] = inst_34028);

return statearr_34076;
})();
var statearr_34077_34144 = state_34035__$1;
(statearr_34077_34144[(2)] = null);

(statearr_34077_34144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34036 === (6))){
var inst_33967 = (state_34035[(29)]);
var inst_33966 = cljs.core.deref.call(null,cs);
var inst_33967__$1 = cljs.core.keys.call(null,inst_33966);
var inst_33968 = cljs.core.count.call(null,inst_33967__$1);
var inst_33969 = cljs.core.reset_BANG_.call(null,dctr,inst_33968);
var inst_33974 = cljs.core.seq.call(null,inst_33967__$1);
var inst_33975 = inst_33974;
var inst_33976 = null;
var inst_33977 = (0);
var inst_33978 = (0);
var state_34035__$1 = (function (){var statearr_34078 = state_34035;
(statearr_34078[(20)] = inst_33975);

(statearr_34078[(10)] = inst_33976);

(statearr_34078[(21)] = inst_33977);

(statearr_34078[(29)] = inst_33967__$1);

(statearr_34078[(11)] = inst_33978);

(statearr_34078[(30)] = inst_33969);

return statearr_34078;
})();
var statearr_34079_34145 = state_34035__$1;
(statearr_34079_34145[(2)] = null);

(statearr_34079_34145[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34036 === (28))){
var inst_33975 = (state_34035[(20)]);
var inst_33994 = (state_34035[(25)]);
var inst_33994__$1 = cljs.core.seq.call(null,inst_33975);
var state_34035__$1 = (function (){var statearr_34080 = state_34035;
(statearr_34080[(25)] = inst_33994__$1);

return statearr_34080;
})();
if(inst_33994__$1){
var statearr_34081_34146 = state_34035__$1;
(statearr_34081_34146[(1)] = (33));

} else {
var statearr_34082_34147 = state_34035__$1;
(statearr_34082_34147[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34036 === (25))){
var inst_33977 = (state_34035[(21)]);
var inst_33978 = (state_34035[(11)]);
var inst_33980 = (inst_33978 < inst_33977);
var inst_33981 = inst_33980;
var state_34035__$1 = state_34035;
if(cljs.core.truth_(inst_33981)){
var statearr_34083_34148 = state_34035__$1;
(statearr_34083_34148[(1)] = (27));

} else {
var statearr_34084_34149 = state_34035__$1;
(statearr_34084_34149[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34036 === (34))){
var state_34035__$1 = state_34035;
var statearr_34085_34150 = state_34035__$1;
(statearr_34085_34150[(2)] = null);

(statearr_34085_34150[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34036 === (17))){
var state_34035__$1 = state_34035;
var statearr_34086_34151 = state_34035__$1;
(statearr_34086_34151[(2)] = null);

(statearr_34086_34151[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34036 === (3))){
var inst_34033 = (state_34035[(2)]);
var state_34035__$1 = state_34035;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34035__$1,inst_34033);
} else {
if((state_val_34036 === (12))){
var inst_33962 = (state_34035[(2)]);
var state_34035__$1 = state_34035;
var statearr_34087_34152 = state_34035__$1;
(statearr_34087_34152[(2)] = inst_33962);

(statearr_34087_34152[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34036 === (2))){
var state_34035__$1 = state_34035;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34035__$1,(4),ch);
} else {
if((state_val_34036 === (23))){
var state_34035__$1 = state_34035;
var statearr_34088_34153 = state_34035__$1;
(statearr_34088_34153[(2)] = null);

(statearr_34088_34153[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34036 === (35))){
var inst_34017 = (state_34035[(2)]);
var state_34035__$1 = state_34035;
var statearr_34089_34154 = state_34035__$1;
(statearr_34089_34154[(2)] = inst_34017);

(statearr_34089_34154[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34036 === (19))){
var inst_33934 = (state_34035[(7)]);
var inst_33938 = cljs.core.chunk_first.call(null,inst_33934);
var inst_33939 = cljs.core.chunk_rest.call(null,inst_33934);
var inst_33940 = cljs.core.count.call(null,inst_33938);
var inst_33912 = inst_33939;
var inst_33913 = inst_33938;
var inst_33914 = inst_33940;
var inst_33915 = (0);
var state_34035__$1 = (function (){var statearr_34090 = state_34035;
(statearr_34090[(13)] = inst_33913);

(statearr_34090[(14)] = inst_33914);

(statearr_34090[(16)] = inst_33915);

(statearr_34090[(17)] = inst_33912);

return statearr_34090;
})();
var statearr_34091_34155 = state_34035__$1;
(statearr_34091_34155[(2)] = null);

(statearr_34091_34155[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34036 === (11))){
var inst_33934 = (state_34035[(7)]);
var inst_33912 = (state_34035[(17)]);
var inst_33934__$1 = cljs.core.seq.call(null,inst_33912);
var state_34035__$1 = (function (){var statearr_34092 = state_34035;
(statearr_34092[(7)] = inst_33934__$1);

return statearr_34092;
})();
if(inst_33934__$1){
var statearr_34093_34156 = state_34035__$1;
(statearr_34093_34156[(1)] = (16));

} else {
var statearr_34094_34157 = state_34035__$1;
(statearr_34094_34157[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34036 === (9))){
var inst_33964 = (state_34035[(2)]);
var state_34035__$1 = state_34035;
var statearr_34095_34158 = state_34035__$1;
(statearr_34095_34158[(2)] = inst_33964);

(statearr_34095_34158[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34036 === (5))){
var inst_33910 = cljs.core.deref.call(null,cs);
var inst_33911 = cljs.core.seq.call(null,inst_33910);
var inst_33912 = inst_33911;
var inst_33913 = null;
var inst_33914 = (0);
var inst_33915 = (0);
var state_34035__$1 = (function (){var statearr_34096 = state_34035;
(statearr_34096[(13)] = inst_33913);

(statearr_34096[(14)] = inst_33914);

(statearr_34096[(16)] = inst_33915);

(statearr_34096[(17)] = inst_33912);

return statearr_34096;
})();
var statearr_34097_34159 = state_34035__$1;
(statearr_34097_34159[(2)] = null);

(statearr_34097_34159[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34036 === (14))){
var state_34035__$1 = state_34035;
var statearr_34098_34160 = state_34035__$1;
(statearr_34098_34160[(2)] = null);

(statearr_34098_34160[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34036 === (45))){
var inst_34025 = (state_34035[(2)]);
var state_34035__$1 = state_34035;
var statearr_34099_34161 = state_34035__$1;
(statearr_34099_34161[(2)] = inst_34025);

(statearr_34099_34161[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34036 === (26))){
var inst_33967 = (state_34035[(29)]);
var inst_34021 = (state_34035[(2)]);
var inst_34022 = cljs.core.seq.call(null,inst_33967);
var state_34035__$1 = (function (){var statearr_34100 = state_34035;
(statearr_34100[(31)] = inst_34021);

return statearr_34100;
})();
if(inst_34022){
var statearr_34101_34162 = state_34035__$1;
(statearr_34101_34162[(1)] = (42));

} else {
var statearr_34102_34163 = state_34035__$1;
(statearr_34102_34163[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34036 === (16))){
var inst_33934 = (state_34035[(7)]);
var inst_33936 = cljs.core.chunked_seq_QMARK_.call(null,inst_33934);
var state_34035__$1 = state_34035;
if(inst_33936){
var statearr_34103_34164 = state_34035__$1;
(statearr_34103_34164[(1)] = (19));

} else {
var statearr_34104_34165 = state_34035__$1;
(statearr_34104_34165[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34036 === (38))){
var inst_34014 = (state_34035[(2)]);
var state_34035__$1 = state_34035;
var statearr_34105_34166 = state_34035__$1;
(statearr_34105_34166[(2)] = inst_34014);

(statearr_34105_34166[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34036 === (30))){
var state_34035__$1 = state_34035;
var statearr_34106_34167 = state_34035__$1;
(statearr_34106_34167[(2)] = null);

(statearr_34106_34167[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34036 === (10))){
var inst_33913 = (state_34035[(13)]);
var inst_33915 = (state_34035[(16)]);
var inst_33923 = cljs.core._nth.call(null,inst_33913,inst_33915);
var inst_33924 = cljs.core.nth.call(null,inst_33923,(0),null);
var inst_33925 = cljs.core.nth.call(null,inst_33923,(1),null);
var state_34035__$1 = (function (){var statearr_34107 = state_34035;
(statearr_34107[(26)] = inst_33924);

return statearr_34107;
})();
if(cljs.core.truth_(inst_33925)){
var statearr_34108_34168 = state_34035__$1;
(statearr_34108_34168[(1)] = (13));

} else {
var statearr_34109_34169 = state_34035__$1;
(statearr_34109_34169[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34036 === (18))){
var inst_33960 = (state_34035[(2)]);
var state_34035__$1 = state_34035;
var statearr_34110_34170 = state_34035__$1;
(statearr_34110_34170[(2)] = inst_33960);

(statearr_34110_34170[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34036 === (42))){
var state_34035__$1 = state_34035;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34035__$1,(45),dchan);
} else {
if((state_val_34036 === (37))){
var inst_34003 = (state_34035[(23)]);
var inst_33994 = (state_34035[(25)]);
var inst_33903 = (state_34035[(12)]);
var inst_34003__$1 = cljs.core.first.call(null,inst_33994);
var inst_34004 = cljs.core.async.put_BANG_.call(null,inst_34003__$1,inst_33903,done);
var state_34035__$1 = (function (){var statearr_34111 = state_34035;
(statearr_34111[(23)] = inst_34003__$1);

return statearr_34111;
})();
if(cljs.core.truth_(inst_34004)){
var statearr_34112_34171 = state_34035__$1;
(statearr_34112_34171[(1)] = (39));

} else {
var statearr_34113_34172 = state_34035__$1;
(statearr_34113_34172[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34036 === (8))){
var inst_33914 = (state_34035[(14)]);
var inst_33915 = (state_34035[(16)]);
var inst_33917 = (inst_33915 < inst_33914);
var inst_33918 = inst_33917;
var state_34035__$1 = state_34035;
if(cljs.core.truth_(inst_33918)){
var statearr_34114_34173 = state_34035__$1;
(statearr_34114_34173[(1)] = (10));

} else {
var statearr_34115_34174 = state_34035__$1;
(statearr_34115_34174[(1)] = (11));

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
});})(c__33315__auto___34120,cs,m,dchan,dctr,done))
;
return ((function (switch__33227__auto__,c__33315__auto___34120,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__33228__auto__ = null;
var cljs$core$async$mult_$_state_machine__33228__auto____0 = (function (){
var statearr_34116 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34116[(0)] = cljs$core$async$mult_$_state_machine__33228__auto__);

(statearr_34116[(1)] = (1));

return statearr_34116;
});
var cljs$core$async$mult_$_state_machine__33228__auto____1 = (function (state_34035){
while(true){
var ret_value__33229__auto__ = (function (){try{while(true){
var result__33230__auto__ = switch__33227__auto__.call(null,state_34035);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33230__auto__;
}
break;
}
}catch (e34117){if((e34117 instanceof Object)){
var ex__33231__auto__ = e34117;
var statearr_34118_34175 = state_34035;
(statearr_34118_34175[(5)] = ex__33231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34035);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34117;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34176 = state_34035;
state_34035 = G__34176;
continue;
} else {
return ret_value__33229__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33228__auto__ = function(state_34035){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33228__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33228__auto____1.call(this,state_34035);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__33228__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33228__auto____0;
cljs$core$async$mult_$_state_machine__33228__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33228__auto____1;
return cljs$core$async$mult_$_state_machine__33228__auto__;
})()
;})(switch__33227__auto__,c__33315__auto___34120,cs,m,dchan,dctr,done))
})();
var state__33317__auto__ = (function (){var statearr_34119 = f__33316__auto__.call(null);
(statearr_34119[(6)] = c__33315__auto___34120);

return statearr_34119;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33317__auto__);
});})(c__33315__auto___34120,cs,m,dchan,dctr,done))
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
var G__34178 = arguments.length;
switch (G__34178) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var x__27721__auto__ = (((m == null))?null:m);
var m__27722__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__27721__auto__)]);
if(!((m__27722__auto__ == null))){
return m__27722__auto__.call(null,m,ch);
} else {
var m__27722__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__27722__auto____$1 == null))){
return m__27722__auto____$1.call(null,m,ch);
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
var x__27721__auto__ = (((m == null))?null:m);
var m__27722__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__27721__auto__)]);
if(!((m__27722__auto__ == null))){
return m__27722__auto__.call(null,m,ch);
} else {
var m__27722__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__27722__auto____$1 == null))){
return m__27722__auto____$1.call(null,m,ch);
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
var x__27721__auto__ = (((m == null))?null:m);
var m__27722__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__27721__auto__)]);
if(!((m__27722__auto__ == null))){
return m__27722__auto__.call(null,m);
} else {
var m__27722__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__27722__auto____$1 == null))){
return m__27722__auto____$1.call(null,m);
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
var x__27721__auto__ = (((m == null))?null:m);
var m__27722__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__27721__auto__)]);
if(!((m__27722__auto__ == null))){
return m__27722__auto__.call(null,m,state_map);
} else {
var m__27722__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__27722__auto____$1 == null))){
return m__27722__auto____$1.call(null,m,state_map);
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
var x__27721__auto__ = (((m == null))?null:m);
var m__27722__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__27721__auto__)]);
if(!((m__27722__auto__ == null))){
return m__27722__auto__.call(null,m,mode);
} else {
var m__27722__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__27722__auto____$1 == null))){
return m__27722__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__28184__auto__ = [];
var len__28177__auto___34190 = arguments.length;
var i__28178__auto___34191 = (0);
while(true){
if((i__28178__auto___34191 < len__28177__auto___34190)){
args__28184__auto__.push((arguments[i__28178__auto___34191]));

var G__34192 = (i__28178__auto___34191 + (1));
i__28178__auto___34191 = G__34192;
continue;
} else {
}
break;
}

var argseq__28185__auto__ = ((((3) < args__28184__auto__.length))?(new cljs.core.IndexedSeq(args__28184__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__28185__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__34184){
var map__34185 = p__34184;
var map__34185__$1 = ((((!((map__34185 == null)))?((((map__34185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34185.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34185):map__34185);
var opts = map__34185__$1;
var statearr_34187_34193 = state;
(statearr_34187_34193[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__34185,map__34185__$1,opts){
return (function (val){
var statearr_34188_34194 = state;
(statearr_34188_34194[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__34185,map__34185__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_34189_34195 = state;
(statearr_34189_34195[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq34180){
var G__34181 = cljs.core.first.call(null,seq34180);
var seq34180__$1 = cljs.core.next.call(null,seq34180);
var G__34182 = cljs.core.first.call(null,seq34180__$1);
var seq34180__$2 = cljs.core.next.call(null,seq34180__$1);
var G__34183 = cljs.core.first.call(null,seq34180__$2);
var seq34180__$3 = cljs.core.next.call(null,seq34180__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__34181,G__34182,G__34183,seq34180__$3);
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
if(typeof cljs.core.async.t_cljs$core$async34196 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34196 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta34197){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta34197 = meta34197;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34196.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34198,meta34197__$1){
var self__ = this;
var _34198__$1 = this;
return (new cljs.core.async.t_cljs$core$async34196(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta34197__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34196.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34198){
var self__ = this;
var _34198__$1 = this;
return self__.meta34197;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34196.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34196.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34196.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34196.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34196.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34196.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34196.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34196.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("mode must be one of: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34196.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta34197","meta34197",-811825149,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34196.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34196.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34196";

cljs.core.async.t_cljs$core$async34196.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__27663__auto__,writer__27664__auto__,opt__27665__auto__){
return cljs.core._write.call(null,writer__27664__auto__,"cljs.core.async/t_cljs$core$async34196");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async34196 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async34196(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta34197){
return (new cljs.core.async.t_cljs$core$async34196(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta34197));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async34196(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33315__auto___34360 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33315__auto___34360,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__33316__auto__ = (function (){var switch__33227__auto__ = ((function (c__33315__auto___34360,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_34300){
var state_val_34301 = (state_34300[(1)]);
if((state_val_34301 === (7))){
var inst_34215 = (state_34300[(2)]);
var state_34300__$1 = state_34300;
var statearr_34302_34361 = state_34300__$1;
(statearr_34302_34361[(2)] = inst_34215);

(statearr_34302_34361[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34301 === (20))){
var inst_34227 = (state_34300[(7)]);
var state_34300__$1 = state_34300;
var statearr_34303_34362 = state_34300__$1;
(statearr_34303_34362[(2)] = inst_34227);

(statearr_34303_34362[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34301 === (27))){
var state_34300__$1 = state_34300;
var statearr_34304_34363 = state_34300__$1;
(statearr_34304_34363[(2)] = null);

(statearr_34304_34363[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34301 === (1))){
var inst_34202 = (state_34300[(8)]);
var inst_34202__$1 = calc_state.call(null);
var inst_34204 = (inst_34202__$1 == null);
var inst_34205 = cljs.core.not.call(null,inst_34204);
var state_34300__$1 = (function (){var statearr_34305 = state_34300;
(statearr_34305[(8)] = inst_34202__$1);

return statearr_34305;
})();
if(inst_34205){
var statearr_34306_34364 = state_34300__$1;
(statearr_34306_34364[(1)] = (2));

} else {
var statearr_34307_34365 = state_34300__$1;
(statearr_34307_34365[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34301 === (24))){
var inst_34274 = (state_34300[(9)]);
var inst_34251 = (state_34300[(10)]);
var inst_34260 = (state_34300[(11)]);
var inst_34274__$1 = inst_34251.call(null,inst_34260);
var state_34300__$1 = (function (){var statearr_34308 = state_34300;
(statearr_34308[(9)] = inst_34274__$1);

return statearr_34308;
})();
if(cljs.core.truth_(inst_34274__$1)){
var statearr_34309_34366 = state_34300__$1;
(statearr_34309_34366[(1)] = (29));

} else {
var statearr_34310_34367 = state_34300__$1;
(statearr_34310_34367[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34301 === (4))){
var inst_34218 = (state_34300[(2)]);
var state_34300__$1 = state_34300;
if(cljs.core.truth_(inst_34218)){
var statearr_34311_34368 = state_34300__$1;
(statearr_34311_34368[(1)] = (8));

} else {
var statearr_34312_34369 = state_34300__$1;
(statearr_34312_34369[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34301 === (15))){
var inst_34245 = (state_34300[(2)]);
var state_34300__$1 = state_34300;
if(cljs.core.truth_(inst_34245)){
var statearr_34313_34370 = state_34300__$1;
(statearr_34313_34370[(1)] = (19));

} else {
var statearr_34314_34371 = state_34300__$1;
(statearr_34314_34371[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34301 === (21))){
var inst_34250 = (state_34300[(12)]);
var inst_34250__$1 = (state_34300[(2)]);
var inst_34251 = cljs.core.get.call(null,inst_34250__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34252 = cljs.core.get.call(null,inst_34250__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34253 = cljs.core.get.call(null,inst_34250__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_34300__$1 = (function (){var statearr_34315 = state_34300;
(statearr_34315[(12)] = inst_34250__$1);

(statearr_34315[(10)] = inst_34251);

(statearr_34315[(13)] = inst_34252);

return statearr_34315;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_34300__$1,(22),inst_34253);
} else {
if((state_val_34301 === (31))){
var inst_34282 = (state_34300[(2)]);
var state_34300__$1 = state_34300;
if(cljs.core.truth_(inst_34282)){
var statearr_34316_34372 = state_34300__$1;
(statearr_34316_34372[(1)] = (32));

} else {
var statearr_34317_34373 = state_34300__$1;
(statearr_34317_34373[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34301 === (32))){
var inst_34259 = (state_34300[(14)]);
var state_34300__$1 = state_34300;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34300__$1,(35),out,inst_34259);
} else {
if((state_val_34301 === (33))){
var inst_34250 = (state_34300[(12)]);
var inst_34227 = inst_34250;
var state_34300__$1 = (function (){var statearr_34318 = state_34300;
(statearr_34318[(7)] = inst_34227);

return statearr_34318;
})();
var statearr_34319_34374 = state_34300__$1;
(statearr_34319_34374[(2)] = null);

(statearr_34319_34374[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34301 === (13))){
var inst_34227 = (state_34300[(7)]);
var inst_34234 = inst_34227.cljs$lang$protocol_mask$partition0$;
var inst_34235 = (inst_34234 & (64));
var inst_34236 = inst_34227.cljs$core$ISeq$;
var inst_34237 = (cljs.core.PROTOCOL_SENTINEL === inst_34236);
var inst_34238 = (inst_34235) || (inst_34237);
var state_34300__$1 = state_34300;
if(cljs.core.truth_(inst_34238)){
var statearr_34320_34375 = state_34300__$1;
(statearr_34320_34375[(1)] = (16));

} else {
var statearr_34321_34376 = state_34300__$1;
(statearr_34321_34376[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34301 === (22))){
var inst_34259 = (state_34300[(14)]);
var inst_34260 = (state_34300[(11)]);
var inst_34258 = (state_34300[(2)]);
var inst_34259__$1 = cljs.core.nth.call(null,inst_34258,(0),null);
var inst_34260__$1 = cljs.core.nth.call(null,inst_34258,(1),null);
var inst_34261 = (inst_34259__$1 == null);
var inst_34262 = cljs.core._EQ_.call(null,inst_34260__$1,change);
var inst_34263 = (inst_34261) || (inst_34262);
var state_34300__$1 = (function (){var statearr_34322 = state_34300;
(statearr_34322[(14)] = inst_34259__$1);

(statearr_34322[(11)] = inst_34260__$1);

return statearr_34322;
})();
if(cljs.core.truth_(inst_34263)){
var statearr_34323_34377 = state_34300__$1;
(statearr_34323_34377[(1)] = (23));

} else {
var statearr_34324_34378 = state_34300__$1;
(statearr_34324_34378[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34301 === (36))){
var inst_34250 = (state_34300[(12)]);
var inst_34227 = inst_34250;
var state_34300__$1 = (function (){var statearr_34325 = state_34300;
(statearr_34325[(7)] = inst_34227);

return statearr_34325;
})();
var statearr_34326_34379 = state_34300__$1;
(statearr_34326_34379[(2)] = null);

(statearr_34326_34379[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34301 === (29))){
var inst_34274 = (state_34300[(9)]);
var state_34300__$1 = state_34300;
var statearr_34327_34380 = state_34300__$1;
(statearr_34327_34380[(2)] = inst_34274);

(statearr_34327_34380[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34301 === (6))){
var state_34300__$1 = state_34300;
var statearr_34328_34381 = state_34300__$1;
(statearr_34328_34381[(2)] = false);

(statearr_34328_34381[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34301 === (28))){
var inst_34270 = (state_34300[(2)]);
var inst_34271 = calc_state.call(null);
var inst_34227 = inst_34271;
var state_34300__$1 = (function (){var statearr_34329 = state_34300;
(statearr_34329[(7)] = inst_34227);

(statearr_34329[(15)] = inst_34270);

return statearr_34329;
})();
var statearr_34330_34382 = state_34300__$1;
(statearr_34330_34382[(2)] = null);

(statearr_34330_34382[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34301 === (25))){
var inst_34296 = (state_34300[(2)]);
var state_34300__$1 = state_34300;
var statearr_34331_34383 = state_34300__$1;
(statearr_34331_34383[(2)] = inst_34296);

(statearr_34331_34383[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34301 === (34))){
var inst_34294 = (state_34300[(2)]);
var state_34300__$1 = state_34300;
var statearr_34332_34384 = state_34300__$1;
(statearr_34332_34384[(2)] = inst_34294);

(statearr_34332_34384[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34301 === (17))){
var state_34300__$1 = state_34300;
var statearr_34333_34385 = state_34300__$1;
(statearr_34333_34385[(2)] = false);

(statearr_34333_34385[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34301 === (3))){
var state_34300__$1 = state_34300;
var statearr_34334_34386 = state_34300__$1;
(statearr_34334_34386[(2)] = false);

(statearr_34334_34386[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34301 === (12))){
var inst_34298 = (state_34300[(2)]);
var state_34300__$1 = state_34300;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34300__$1,inst_34298);
} else {
if((state_val_34301 === (2))){
var inst_34202 = (state_34300[(8)]);
var inst_34207 = inst_34202.cljs$lang$protocol_mask$partition0$;
var inst_34208 = (inst_34207 & (64));
var inst_34209 = inst_34202.cljs$core$ISeq$;
var inst_34210 = (cljs.core.PROTOCOL_SENTINEL === inst_34209);
var inst_34211 = (inst_34208) || (inst_34210);
var state_34300__$1 = state_34300;
if(cljs.core.truth_(inst_34211)){
var statearr_34335_34387 = state_34300__$1;
(statearr_34335_34387[(1)] = (5));

} else {
var statearr_34336_34388 = state_34300__$1;
(statearr_34336_34388[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34301 === (23))){
var inst_34259 = (state_34300[(14)]);
var inst_34265 = (inst_34259 == null);
var state_34300__$1 = state_34300;
if(cljs.core.truth_(inst_34265)){
var statearr_34337_34389 = state_34300__$1;
(statearr_34337_34389[(1)] = (26));

} else {
var statearr_34338_34390 = state_34300__$1;
(statearr_34338_34390[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34301 === (35))){
var inst_34285 = (state_34300[(2)]);
var state_34300__$1 = state_34300;
if(cljs.core.truth_(inst_34285)){
var statearr_34339_34391 = state_34300__$1;
(statearr_34339_34391[(1)] = (36));

} else {
var statearr_34340_34392 = state_34300__$1;
(statearr_34340_34392[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34301 === (19))){
var inst_34227 = (state_34300[(7)]);
var inst_34247 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34227);
var state_34300__$1 = state_34300;
var statearr_34341_34393 = state_34300__$1;
(statearr_34341_34393[(2)] = inst_34247);

(statearr_34341_34393[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34301 === (11))){
var inst_34227 = (state_34300[(7)]);
var inst_34231 = (inst_34227 == null);
var inst_34232 = cljs.core.not.call(null,inst_34231);
var state_34300__$1 = state_34300;
if(inst_34232){
var statearr_34342_34394 = state_34300__$1;
(statearr_34342_34394[(1)] = (13));

} else {
var statearr_34343_34395 = state_34300__$1;
(statearr_34343_34395[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34301 === (9))){
var inst_34202 = (state_34300[(8)]);
var state_34300__$1 = state_34300;
var statearr_34344_34396 = state_34300__$1;
(statearr_34344_34396[(2)] = inst_34202);

(statearr_34344_34396[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34301 === (5))){
var state_34300__$1 = state_34300;
var statearr_34345_34397 = state_34300__$1;
(statearr_34345_34397[(2)] = true);

(statearr_34345_34397[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34301 === (14))){
var state_34300__$1 = state_34300;
var statearr_34346_34398 = state_34300__$1;
(statearr_34346_34398[(2)] = false);

(statearr_34346_34398[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34301 === (26))){
var inst_34260 = (state_34300[(11)]);
var inst_34267 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_34260);
var state_34300__$1 = state_34300;
var statearr_34347_34399 = state_34300__$1;
(statearr_34347_34399[(2)] = inst_34267);

(statearr_34347_34399[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34301 === (16))){
var state_34300__$1 = state_34300;
var statearr_34348_34400 = state_34300__$1;
(statearr_34348_34400[(2)] = true);

(statearr_34348_34400[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34301 === (38))){
var inst_34290 = (state_34300[(2)]);
var state_34300__$1 = state_34300;
var statearr_34349_34401 = state_34300__$1;
(statearr_34349_34401[(2)] = inst_34290);

(statearr_34349_34401[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34301 === (30))){
var inst_34251 = (state_34300[(10)]);
var inst_34260 = (state_34300[(11)]);
var inst_34252 = (state_34300[(13)]);
var inst_34277 = cljs.core.empty_QMARK_.call(null,inst_34251);
var inst_34278 = inst_34252.call(null,inst_34260);
var inst_34279 = cljs.core.not.call(null,inst_34278);
var inst_34280 = (inst_34277) && (inst_34279);
var state_34300__$1 = state_34300;
var statearr_34350_34402 = state_34300__$1;
(statearr_34350_34402[(2)] = inst_34280);

(statearr_34350_34402[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34301 === (10))){
var inst_34202 = (state_34300[(8)]);
var inst_34223 = (state_34300[(2)]);
var inst_34224 = cljs.core.get.call(null,inst_34223,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34225 = cljs.core.get.call(null,inst_34223,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34226 = cljs.core.get.call(null,inst_34223,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_34227 = inst_34202;
var state_34300__$1 = (function (){var statearr_34351 = state_34300;
(statearr_34351[(7)] = inst_34227);

(statearr_34351[(16)] = inst_34224);

(statearr_34351[(17)] = inst_34225);

(statearr_34351[(18)] = inst_34226);

return statearr_34351;
})();
var statearr_34352_34403 = state_34300__$1;
(statearr_34352_34403[(2)] = null);

(statearr_34352_34403[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34301 === (18))){
var inst_34242 = (state_34300[(2)]);
var state_34300__$1 = state_34300;
var statearr_34353_34404 = state_34300__$1;
(statearr_34353_34404[(2)] = inst_34242);

(statearr_34353_34404[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34301 === (37))){
var state_34300__$1 = state_34300;
var statearr_34354_34405 = state_34300__$1;
(statearr_34354_34405[(2)] = null);

(statearr_34354_34405[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34301 === (8))){
var inst_34202 = (state_34300[(8)]);
var inst_34220 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34202);
var state_34300__$1 = state_34300;
var statearr_34355_34406 = state_34300__$1;
(statearr_34355_34406[(2)] = inst_34220);

(statearr_34355_34406[(1)] = (10));


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
});})(c__33315__auto___34360,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__33227__auto__,c__33315__auto___34360,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__33228__auto__ = null;
var cljs$core$async$mix_$_state_machine__33228__auto____0 = (function (){
var statearr_34356 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34356[(0)] = cljs$core$async$mix_$_state_machine__33228__auto__);

(statearr_34356[(1)] = (1));

return statearr_34356;
});
var cljs$core$async$mix_$_state_machine__33228__auto____1 = (function (state_34300){
while(true){
var ret_value__33229__auto__ = (function (){try{while(true){
var result__33230__auto__ = switch__33227__auto__.call(null,state_34300);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33230__auto__;
}
break;
}
}catch (e34357){if((e34357 instanceof Object)){
var ex__33231__auto__ = e34357;
var statearr_34358_34407 = state_34300;
(statearr_34358_34407[(5)] = ex__33231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34300);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34357;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34408 = state_34300;
state_34300 = G__34408;
continue;
} else {
return ret_value__33229__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33228__auto__ = function(state_34300){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33228__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33228__auto____1.call(this,state_34300);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__33228__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33228__auto____0;
cljs$core$async$mix_$_state_machine__33228__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33228__auto____1;
return cljs$core$async$mix_$_state_machine__33228__auto__;
})()
;})(switch__33227__auto__,c__33315__auto___34360,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__33317__auto__ = (function (){var statearr_34359 = f__33316__auto__.call(null);
(statearr_34359[(6)] = c__33315__auto___34360);

return statearr_34359;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33317__auto__);
});})(c__33315__auto___34360,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__27721__auto__ = (((p == null))?null:p);
var m__27722__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__27721__auto__)]);
if(!((m__27722__auto__ == null))){
return m__27722__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__27722__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__27722__auto____$1 == null))){
return m__27722__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__27721__auto__ = (((p == null))?null:p);
var m__27722__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__27721__auto__)]);
if(!((m__27722__auto__ == null))){
return m__27722__auto__.call(null,p,v,ch);
} else {
var m__27722__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__27722__auto____$1 == null))){
return m__27722__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__34410 = arguments.length;
switch (G__34410) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__27721__auto__ = (((p == null))?null:p);
var m__27722__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__27721__auto__)]);
if(!((m__27722__auto__ == null))){
return m__27722__auto__.call(null,p);
} else {
var m__27722__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__27722__auto____$1 == null))){
return m__27722__auto____$1.call(null,p);
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
var x__27721__auto__ = (((p == null))?null:p);
var m__27722__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__27721__auto__)]);
if(!((m__27722__auto__ == null))){
return m__27722__auto__.call(null,p,v);
} else {
var m__27722__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__27722__auto____$1 == null))){
return m__27722__auto____$1.call(null,p,v);
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
var G__34414 = arguments.length;
switch (G__34414) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__27052__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__27052__auto__)){
return or__27052__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__27052__auto__,mults){
return (function (p1__34412_SHARP_){
if(cljs.core.truth_(p1__34412_SHARP_.call(null,topic))){
return p1__34412_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__34412_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__27052__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async34415 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34415 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta34416){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta34416 = meta34416;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34415.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_34417,meta34416__$1){
var self__ = this;
var _34417__$1 = this;
return (new cljs.core.async.t_cljs$core$async34415(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta34416__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34415.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_34417){
var self__ = this;
var _34417__$1 = this;
return self__.meta34416;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34415.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34415.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34415.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34415.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34415.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async34415.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34415.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34415.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta34416","meta34416",610137824,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34415.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34415.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34415";

cljs.core.async.t_cljs$core$async34415.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__27663__auto__,writer__27664__auto__,opt__27665__auto__){
return cljs.core._write.call(null,writer__27664__auto__,"cljs.core.async/t_cljs$core$async34415");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async34415 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async34415(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34416){
return (new cljs.core.async.t_cljs$core$async34415(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34416));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async34415(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33315__auto___34535 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33315__auto___34535,mults,ensure_mult,p){
return (function (){
var f__33316__auto__ = (function (){var switch__33227__auto__ = ((function (c__33315__auto___34535,mults,ensure_mult,p){
return (function (state_34489){
var state_val_34490 = (state_34489[(1)]);
if((state_val_34490 === (7))){
var inst_34485 = (state_34489[(2)]);
var state_34489__$1 = state_34489;
var statearr_34491_34536 = state_34489__$1;
(statearr_34491_34536[(2)] = inst_34485);

(statearr_34491_34536[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34490 === (20))){
var state_34489__$1 = state_34489;
var statearr_34492_34537 = state_34489__$1;
(statearr_34492_34537[(2)] = null);

(statearr_34492_34537[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34490 === (1))){
var state_34489__$1 = state_34489;
var statearr_34493_34538 = state_34489__$1;
(statearr_34493_34538[(2)] = null);

(statearr_34493_34538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34490 === (24))){
var inst_34468 = (state_34489[(7)]);
var inst_34477 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_34468);
var state_34489__$1 = state_34489;
var statearr_34494_34539 = state_34489__$1;
(statearr_34494_34539[(2)] = inst_34477);

(statearr_34494_34539[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34490 === (4))){
var inst_34420 = (state_34489[(8)]);
var inst_34420__$1 = (state_34489[(2)]);
var inst_34421 = (inst_34420__$1 == null);
var state_34489__$1 = (function (){var statearr_34495 = state_34489;
(statearr_34495[(8)] = inst_34420__$1);

return statearr_34495;
})();
if(cljs.core.truth_(inst_34421)){
var statearr_34496_34540 = state_34489__$1;
(statearr_34496_34540[(1)] = (5));

} else {
var statearr_34497_34541 = state_34489__$1;
(statearr_34497_34541[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34490 === (15))){
var inst_34462 = (state_34489[(2)]);
var state_34489__$1 = state_34489;
var statearr_34498_34542 = state_34489__$1;
(statearr_34498_34542[(2)] = inst_34462);

(statearr_34498_34542[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34490 === (21))){
var inst_34482 = (state_34489[(2)]);
var state_34489__$1 = (function (){var statearr_34499 = state_34489;
(statearr_34499[(9)] = inst_34482);

return statearr_34499;
})();
var statearr_34500_34543 = state_34489__$1;
(statearr_34500_34543[(2)] = null);

(statearr_34500_34543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34490 === (13))){
var inst_34444 = (state_34489[(10)]);
var inst_34446 = cljs.core.chunked_seq_QMARK_.call(null,inst_34444);
var state_34489__$1 = state_34489;
if(inst_34446){
var statearr_34501_34544 = state_34489__$1;
(statearr_34501_34544[(1)] = (16));

} else {
var statearr_34502_34545 = state_34489__$1;
(statearr_34502_34545[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34490 === (22))){
var inst_34474 = (state_34489[(2)]);
var state_34489__$1 = state_34489;
if(cljs.core.truth_(inst_34474)){
var statearr_34503_34546 = state_34489__$1;
(statearr_34503_34546[(1)] = (23));

} else {
var statearr_34504_34547 = state_34489__$1;
(statearr_34504_34547[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34490 === (6))){
var inst_34470 = (state_34489[(11)]);
var inst_34420 = (state_34489[(8)]);
var inst_34468 = (state_34489[(7)]);
var inst_34468__$1 = topic_fn.call(null,inst_34420);
var inst_34469 = cljs.core.deref.call(null,mults);
var inst_34470__$1 = cljs.core.get.call(null,inst_34469,inst_34468__$1);
var state_34489__$1 = (function (){var statearr_34505 = state_34489;
(statearr_34505[(11)] = inst_34470__$1);

(statearr_34505[(7)] = inst_34468__$1);

return statearr_34505;
})();
if(cljs.core.truth_(inst_34470__$1)){
var statearr_34506_34548 = state_34489__$1;
(statearr_34506_34548[(1)] = (19));

} else {
var statearr_34507_34549 = state_34489__$1;
(statearr_34507_34549[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34490 === (25))){
var inst_34479 = (state_34489[(2)]);
var state_34489__$1 = state_34489;
var statearr_34508_34550 = state_34489__$1;
(statearr_34508_34550[(2)] = inst_34479);

(statearr_34508_34550[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34490 === (17))){
var inst_34444 = (state_34489[(10)]);
var inst_34453 = cljs.core.first.call(null,inst_34444);
var inst_34454 = cljs.core.async.muxch_STAR_.call(null,inst_34453);
var inst_34455 = cljs.core.async.close_BANG_.call(null,inst_34454);
var inst_34456 = cljs.core.next.call(null,inst_34444);
var inst_34430 = inst_34456;
var inst_34431 = null;
var inst_34432 = (0);
var inst_34433 = (0);
var state_34489__$1 = (function (){var statearr_34509 = state_34489;
(statearr_34509[(12)] = inst_34433);

(statearr_34509[(13)] = inst_34430);

(statearr_34509[(14)] = inst_34455);

(statearr_34509[(15)] = inst_34431);

(statearr_34509[(16)] = inst_34432);

return statearr_34509;
})();
var statearr_34510_34551 = state_34489__$1;
(statearr_34510_34551[(2)] = null);

(statearr_34510_34551[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34490 === (3))){
var inst_34487 = (state_34489[(2)]);
var state_34489__$1 = state_34489;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34489__$1,inst_34487);
} else {
if((state_val_34490 === (12))){
var inst_34464 = (state_34489[(2)]);
var state_34489__$1 = state_34489;
var statearr_34511_34552 = state_34489__$1;
(statearr_34511_34552[(2)] = inst_34464);

(statearr_34511_34552[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34490 === (2))){
var state_34489__$1 = state_34489;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34489__$1,(4),ch);
} else {
if((state_val_34490 === (23))){
var state_34489__$1 = state_34489;
var statearr_34512_34553 = state_34489__$1;
(statearr_34512_34553[(2)] = null);

(statearr_34512_34553[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34490 === (19))){
var inst_34470 = (state_34489[(11)]);
var inst_34420 = (state_34489[(8)]);
var inst_34472 = cljs.core.async.muxch_STAR_.call(null,inst_34470);
var state_34489__$1 = state_34489;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34489__$1,(22),inst_34472,inst_34420);
} else {
if((state_val_34490 === (11))){
var inst_34430 = (state_34489[(13)]);
var inst_34444 = (state_34489[(10)]);
var inst_34444__$1 = cljs.core.seq.call(null,inst_34430);
var state_34489__$1 = (function (){var statearr_34513 = state_34489;
(statearr_34513[(10)] = inst_34444__$1);

return statearr_34513;
})();
if(inst_34444__$1){
var statearr_34514_34554 = state_34489__$1;
(statearr_34514_34554[(1)] = (13));

} else {
var statearr_34515_34555 = state_34489__$1;
(statearr_34515_34555[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34490 === (9))){
var inst_34466 = (state_34489[(2)]);
var state_34489__$1 = state_34489;
var statearr_34516_34556 = state_34489__$1;
(statearr_34516_34556[(2)] = inst_34466);

(statearr_34516_34556[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34490 === (5))){
var inst_34427 = cljs.core.deref.call(null,mults);
var inst_34428 = cljs.core.vals.call(null,inst_34427);
var inst_34429 = cljs.core.seq.call(null,inst_34428);
var inst_34430 = inst_34429;
var inst_34431 = null;
var inst_34432 = (0);
var inst_34433 = (0);
var state_34489__$1 = (function (){var statearr_34517 = state_34489;
(statearr_34517[(12)] = inst_34433);

(statearr_34517[(13)] = inst_34430);

(statearr_34517[(15)] = inst_34431);

(statearr_34517[(16)] = inst_34432);

return statearr_34517;
})();
var statearr_34518_34557 = state_34489__$1;
(statearr_34518_34557[(2)] = null);

(statearr_34518_34557[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34490 === (14))){
var state_34489__$1 = state_34489;
var statearr_34522_34558 = state_34489__$1;
(statearr_34522_34558[(2)] = null);

(statearr_34522_34558[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34490 === (16))){
var inst_34444 = (state_34489[(10)]);
var inst_34448 = cljs.core.chunk_first.call(null,inst_34444);
var inst_34449 = cljs.core.chunk_rest.call(null,inst_34444);
var inst_34450 = cljs.core.count.call(null,inst_34448);
var inst_34430 = inst_34449;
var inst_34431 = inst_34448;
var inst_34432 = inst_34450;
var inst_34433 = (0);
var state_34489__$1 = (function (){var statearr_34523 = state_34489;
(statearr_34523[(12)] = inst_34433);

(statearr_34523[(13)] = inst_34430);

(statearr_34523[(15)] = inst_34431);

(statearr_34523[(16)] = inst_34432);

return statearr_34523;
})();
var statearr_34524_34559 = state_34489__$1;
(statearr_34524_34559[(2)] = null);

(statearr_34524_34559[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34490 === (10))){
var inst_34433 = (state_34489[(12)]);
var inst_34430 = (state_34489[(13)]);
var inst_34431 = (state_34489[(15)]);
var inst_34432 = (state_34489[(16)]);
var inst_34438 = cljs.core._nth.call(null,inst_34431,inst_34433);
var inst_34439 = cljs.core.async.muxch_STAR_.call(null,inst_34438);
var inst_34440 = cljs.core.async.close_BANG_.call(null,inst_34439);
var inst_34441 = (inst_34433 + (1));
var tmp34519 = inst_34430;
var tmp34520 = inst_34431;
var tmp34521 = inst_34432;
var inst_34430__$1 = tmp34519;
var inst_34431__$1 = tmp34520;
var inst_34432__$1 = tmp34521;
var inst_34433__$1 = inst_34441;
var state_34489__$1 = (function (){var statearr_34525 = state_34489;
(statearr_34525[(12)] = inst_34433__$1);

(statearr_34525[(13)] = inst_34430__$1);

(statearr_34525[(15)] = inst_34431__$1);

(statearr_34525[(17)] = inst_34440);

(statearr_34525[(16)] = inst_34432__$1);

return statearr_34525;
})();
var statearr_34526_34560 = state_34489__$1;
(statearr_34526_34560[(2)] = null);

(statearr_34526_34560[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34490 === (18))){
var inst_34459 = (state_34489[(2)]);
var state_34489__$1 = state_34489;
var statearr_34527_34561 = state_34489__$1;
(statearr_34527_34561[(2)] = inst_34459);

(statearr_34527_34561[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34490 === (8))){
var inst_34433 = (state_34489[(12)]);
var inst_34432 = (state_34489[(16)]);
var inst_34435 = (inst_34433 < inst_34432);
var inst_34436 = inst_34435;
var state_34489__$1 = state_34489;
if(cljs.core.truth_(inst_34436)){
var statearr_34528_34562 = state_34489__$1;
(statearr_34528_34562[(1)] = (10));

} else {
var statearr_34529_34563 = state_34489__$1;
(statearr_34529_34563[(1)] = (11));

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
});})(c__33315__auto___34535,mults,ensure_mult,p))
;
return ((function (switch__33227__auto__,c__33315__auto___34535,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__33228__auto__ = null;
var cljs$core$async$state_machine__33228__auto____0 = (function (){
var statearr_34530 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34530[(0)] = cljs$core$async$state_machine__33228__auto__);

(statearr_34530[(1)] = (1));

return statearr_34530;
});
var cljs$core$async$state_machine__33228__auto____1 = (function (state_34489){
while(true){
var ret_value__33229__auto__ = (function (){try{while(true){
var result__33230__auto__ = switch__33227__auto__.call(null,state_34489);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33230__auto__;
}
break;
}
}catch (e34531){if((e34531 instanceof Object)){
var ex__33231__auto__ = e34531;
var statearr_34532_34564 = state_34489;
(statearr_34532_34564[(5)] = ex__33231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34489);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34531;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34565 = state_34489;
state_34489 = G__34565;
continue;
} else {
return ret_value__33229__auto__;
}
break;
}
});
cljs$core$async$state_machine__33228__auto__ = function(state_34489){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33228__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33228__auto____1.call(this,state_34489);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33228__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33228__auto____0;
cljs$core$async$state_machine__33228__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33228__auto____1;
return cljs$core$async$state_machine__33228__auto__;
})()
;})(switch__33227__auto__,c__33315__auto___34535,mults,ensure_mult,p))
})();
var state__33317__auto__ = (function (){var statearr_34533 = f__33316__auto__.call(null);
(statearr_34533[(6)] = c__33315__auto___34535);

return statearr_34533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33317__auto__);
});})(c__33315__auto___34535,mults,ensure_mult,p))
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
var G__34567 = arguments.length;
switch (G__34567) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__34570 = arguments.length;
switch (G__34570) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__34573 = arguments.length;
switch (G__34573) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var c__33315__auto___34640 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33315__auto___34640,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__33316__auto__ = (function (){var switch__33227__auto__ = ((function (c__33315__auto___34640,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_34612){
var state_val_34613 = (state_34612[(1)]);
if((state_val_34613 === (7))){
var state_34612__$1 = state_34612;
var statearr_34614_34641 = state_34612__$1;
(statearr_34614_34641[(2)] = null);

(statearr_34614_34641[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (1))){
var state_34612__$1 = state_34612;
var statearr_34615_34642 = state_34612__$1;
(statearr_34615_34642[(2)] = null);

(statearr_34615_34642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (4))){
var inst_34576 = (state_34612[(7)]);
var inst_34578 = (inst_34576 < cnt);
var state_34612__$1 = state_34612;
if(cljs.core.truth_(inst_34578)){
var statearr_34616_34643 = state_34612__$1;
(statearr_34616_34643[(1)] = (6));

} else {
var statearr_34617_34644 = state_34612__$1;
(statearr_34617_34644[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (15))){
var inst_34608 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34618_34645 = state_34612__$1;
(statearr_34618_34645[(2)] = inst_34608);

(statearr_34618_34645[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (13))){
var inst_34601 = cljs.core.async.close_BANG_.call(null,out);
var state_34612__$1 = state_34612;
var statearr_34619_34646 = state_34612__$1;
(statearr_34619_34646[(2)] = inst_34601);

(statearr_34619_34646[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (6))){
var state_34612__$1 = state_34612;
var statearr_34620_34647 = state_34612__$1;
(statearr_34620_34647[(2)] = null);

(statearr_34620_34647[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (3))){
var inst_34610 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34612__$1,inst_34610);
} else {
if((state_val_34613 === (12))){
var inst_34598 = (state_34612[(8)]);
var inst_34598__$1 = (state_34612[(2)]);
var inst_34599 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_34598__$1);
var state_34612__$1 = (function (){var statearr_34621 = state_34612;
(statearr_34621[(8)] = inst_34598__$1);

return statearr_34621;
})();
if(cljs.core.truth_(inst_34599)){
var statearr_34622_34648 = state_34612__$1;
(statearr_34622_34648[(1)] = (13));

} else {
var statearr_34623_34649 = state_34612__$1;
(statearr_34623_34649[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (2))){
var inst_34575 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_34576 = (0);
var state_34612__$1 = (function (){var statearr_34624 = state_34612;
(statearr_34624[(7)] = inst_34576);

(statearr_34624[(9)] = inst_34575);

return statearr_34624;
})();
var statearr_34625_34650 = state_34612__$1;
(statearr_34625_34650[(2)] = null);

(statearr_34625_34650[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (11))){
var inst_34576 = (state_34612[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34612,(10),Object,null,(9));
var inst_34585 = chs__$1.call(null,inst_34576);
var inst_34586 = done.call(null,inst_34576);
var inst_34587 = cljs.core.async.take_BANG_.call(null,inst_34585,inst_34586);
var state_34612__$1 = state_34612;
var statearr_34626_34651 = state_34612__$1;
(statearr_34626_34651[(2)] = inst_34587);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34612__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (9))){
var inst_34576 = (state_34612[(7)]);
var inst_34589 = (state_34612[(2)]);
var inst_34590 = (inst_34576 + (1));
var inst_34576__$1 = inst_34590;
var state_34612__$1 = (function (){var statearr_34627 = state_34612;
(statearr_34627[(10)] = inst_34589);

(statearr_34627[(7)] = inst_34576__$1);

return statearr_34627;
})();
var statearr_34628_34652 = state_34612__$1;
(statearr_34628_34652[(2)] = null);

(statearr_34628_34652[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (5))){
var inst_34596 = (state_34612[(2)]);
var state_34612__$1 = (function (){var statearr_34629 = state_34612;
(statearr_34629[(11)] = inst_34596);

return statearr_34629;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34612__$1,(12),dchan);
} else {
if((state_val_34613 === (14))){
var inst_34598 = (state_34612[(8)]);
var inst_34603 = cljs.core.apply.call(null,f,inst_34598);
var state_34612__$1 = state_34612;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34612__$1,(16),out,inst_34603);
} else {
if((state_val_34613 === (16))){
var inst_34605 = (state_34612[(2)]);
var state_34612__$1 = (function (){var statearr_34630 = state_34612;
(statearr_34630[(12)] = inst_34605);

return statearr_34630;
})();
var statearr_34631_34653 = state_34612__$1;
(statearr_34631_34653[(2)] = null);

(statearr_34631_34653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (10))){
var inst_34580 = (state_34612[(2)]);
var inst_34581 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_34612__$1 = (function (){var statearr_34632 = state_34612;
(statearr_34632[(13)] = inst_34580);

return statearr_34632;
})();
var statearr_34633_34654 = state_34612__$1;
(statearr_34633_34654[(2)] = inst_34581);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34612__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (8))){
var inst_34594 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34634_34655 = state_34612__$1;
(statearr_34634_34655[(2)] = inst_34594);

(statearr_34634_34655[(1)] = (5));


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
});})(c__33315__auto___34640,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__33227__auto__,c__33315__auto___34640,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__33228__auto__ = null;
var cljs$core$async$state_machine__33228__auto____0 = (function (){
var statearr_34635 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34635[(0)] = cljs$core$async$state_machine__33228__auto__);

(statearr_34635[(1)] = (1));

return statearr_34635;
});
var cljs$core$async$state_machine__33228__auto____1 = (function (state_34612){
while(true){
var ret_value__33229__auto__ = (function (){try{while(true){
var result__33230__auto__ = switch__33227__auto__.call(null,state_34612);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33230__auto__;
}
break;
}
}catch (e34636){if((e34636 instanceof Object)){
var ex__33231__auto__ = e34636;
var statearr_34637_34656 = state_34612;
(statearr_34637_34656[(5)] = ex__33231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34636;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34657 = state_34612;
state_34612 = G__34657;
continue;
} else {
return ret_value__33229__auto__;
}
break;
}
});
cljs$core$async$state_machine__33228__auto__ = function(state_34612){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33228__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33228__auto____1.call(this,state_34612);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33228__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33228__auto____0;
cljs$core$async$state_machine__33228__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33228__auto____1;
return cljs$core$async$state_machine__33228__auto__;
})()
;})(switch__33227__auto__,c__33315__auto___34640,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__33317__auto__ = (function (){var statearr_34638 = f__33316__auto__.call(null);
(statearr_34638[(6)] = c__33315__auto___34640);

return statearr_34638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33317__auto__);
});})(c__33315__auto___34640,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__34660 = arguments.length;
switch (G__34660) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33315__auto___34714 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33315__auto___34714,out){
return (function (){
var f__33316__auto__ = (function (){var switch__33227__auto__ = ((function (c__33315__auto___34714,out){
return (function (state_34692){
var state_val_34693 = (state_34692[(1)]);
if((state_val_34693 === (7))){
var inst_34671 = (state_34692[(7)]);
var inst_34672 = (state_34692[(8)]);
var inst_34671__$1 = (state_34692[(2)]);
var inst_34672__$1 = cljs.core.nth.call(null,inst_34671__$1,(0),null);
var inst_34673 = cljs.core.nth.call(null,inst_34671__$1,(1),null);
var inst_34674 = (inst_34672__$1 == null);
var state_34692__$1 = (function (){var statearr_34694 = state_34692;
(statearr_34694[(7)] = inst_34671__$1);

(statearr_34694[(8)] = inst_34672__$1);

(statearr_34694[(9)] = inst_34673);

return statearr_34694;
})();
if(cljs.core.truth_(inst_34674)){
var statearr_34695_34715 = state_34692__$1;
(statearr_34695_34715[(1)] = (8));

} else {
var statearr_34696_34716 = state_34692__$1;
(statearr_34696_34716[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (1))){
var inst_34661 = cljs.core.vec.call(null,chs);
var inst_34662 = inst_34661;
var state_34692__$1 = (function (){var statearr_34697 = state_34692;
(statearr_34697[(10)] = inst_34662);

return statearr_34697;
})();
var statearr_34698_34717 = state_34692__$1;
(statearr_34698_34717[(2)] = null);

(statearr_34698_34717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (4))){
var inst_34662 = (state_34692[(10)]);
var state_34692__$1 = state_34692;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34692__$1,(7),inst_34662);
} else {
if((state_val_34693 === (6))){
var inst_34688 = (state_34692[(2)]);
var state_34692__$1 = state_34692;
var statearr_34699_34718 = state_34692__$1;
(statearr_34699_34718[(2)] = inst_34688);

(statearr_34699_34718[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (3))){
var inst_34690 = (state_34692[(2)]);
var state_34692__$1 = state_34692;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34692__$1,inst_34690);
} else {
if((state_val_34693 === (2))){
var inst_34662 = (state_34692[(10)]);
var inst_34664 = cljs.core.count.call(null,inst_34662);
var inst_34665 = (inst_34664 > (0));
var state_34692__$1 = state_34692;
if(cljs.core.truth_(inst_34665)){
var statearr_34701_34719 = state_34692__$1;
(statearr_34701_34719[(1)] = (4));

} else {
var statearr_34702_34720 = state_34692__$1;
(statearr_34702_34720[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (11))){
var inst_34662 = (state_34692[(10)]);
var inst_34681 = (state_34692[(2)]);
var tmp34700 = inst_34662;
var inst_34662__$1 = tmp34700;
var state_34692__$1 = (function (){var statearr_34703 = state_34692;
(statearr_34703[(11)] = inst_34681);

(statearr_34703[(10)] = inst_34662__$1);

return statearr_34703;
})();
var statearr_34704_34721 = state_34692__$1;
(statearr_34704_34721[(2)] = null);

(statearr_34704_34721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (9))){
var inst_34672 = (state_34692[(8)]);
var state_34692__$1 = state_34692;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34692__$1,(11),out,inst_34672);
} else {
if((state_val_34693 === (5))){
var inst_34686 = cljs.core.async.close_BANG_.call(null,out);
var state_34692__$1 = state_34692;
var statearr_34705_34722 = state_34692__$1;
(statearr_34705_34722[(2)] = inst_34686);

(statearr_34705_34722[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (10))){
var inst_34684 = (state_34692[(2)]);
var state_34692__$1 = state_34692;
var statearr_34706_34723 = state_34692__$1;
(statearr_34706_34723[(2)] = inst_34684);

(statearr_34706_34723[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (8))){
var inst_34671 = (state_34692[(7)]);
var inst_34672 = (state_34692[(8)]);
var inst_34673 = (state_34692[(9)]);
var inst_34662 = (state_34692[(10)]);
var inst_34676 = (function (){var cs = inst_34662;
var vec__34667 = inst_34671;
var v = inst_34672;
var c = inst_34673;
return ((function (cs,vec__34667,v,c,inst_34671,inst_34672,inst_34673,inst_34662,state_val_34693,c__33315__auto___34714,out){
return (function (p1__34658_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__34658_SHARP_);
});
;})(cs,vec__34667,v,c,inst_34671,inst_34672,inst_34673,inst_34662,state_val_34693,c__33315__auto___34714,out))
})();
var inst_34677 = cljs.core.filterv.call(null,inst_34676,inst_34662);
var inst_34662__$1 = inst_34677;
var state_34692__$1 = (function (){var statearr_34707 = state_34692;
(statearr_34707[(10)] = inst_34662__$1);

return statearr_34707;
})();
var statearr_34708_34724 = state_34692__$1;
(statearr_34708_34724[(2)] = null);

(statearr_34708_34724[(1)] = (2));


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
});})(c__33315__auto___34714,out))
;
return ((function (switch__33227__auto__,c__33315__auto___34714,out){
return (function() {
var cljs$core$async$state_machine__33228__auto__ = null;
var cljs$core$async$state_machine__33228__auto____0 = (function (){
var statearr_34709 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34709[(0)] = cljs$core$async$state_machine__33228__auto__);

(statearr_34709[(1)] = (1));

return statearr_34709;
});
var cljs$core$async$state_machine__33228__auto____1 = (function (state_34692){
while(true){
var ret_value__33229__auto__ = (function (){try{while(true){
var result__33230__auto__ = switch__33227__auto__.call(null,state_34692);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33230__auto__;
}
break;
}
}catch (e34710){if((e34710 instanceof Object)){
var ex__33231__auto__ = e34710;
var statearr_34711_34725 = state_34692;
(statearr_34711_34725[(5)] = ex__33231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34692);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34710;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34726 = state_34692;
state_34692 = G__34726;
continue;
} else {
return ret_value__33229__auto__;
}
break;
}
});
cljs$core$async$state_machine__33228__auto__ = function(state_34692){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33228__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33228__auto____1.call(this,state_34692);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33228__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33228__auto____0;
cljs$core$async$state_machine__33228__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33228__auto____1;
return cljs$core$async$state_machine__33228__auto__;
})()
;})(switch__33227__auto__,c__33315__auto___34714,out))
})();
var state__33317__auto__ = (function (){var statearr_34712 = f__33316__auto__.call(null);
(statearr_34712[(6)] = c__33315__auto___34714);

return statearr_34712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33317__auto__);
});})(c__33315__auto___34714,out))
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
var G__34728 = arguments.length;
switch (G__34728) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33315__auto___34773 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33315__auto___34773,out){
return (function (){
var f__33316__auto__ = (function (){var switch__33227__auto__ = ((function (c__33315__auto___34773,out){
return (function (state_34752){
var state_val_34753 = (state_34752[(1)]);
if((state_val_34753 === (7))){
var inst_34734 = (state_34752[(7)]);
var inst_34734__$1 = (state_34752[(2)]);
var inst_34735 = (inst_34734__$1 == null);
var inst_34736 = cljs.core.not.call(null,inst_34735);
var state_34752__$1 = (function (){var statearr_34754 = state_34752;
(statearr_34754[(7)] = inst_34734__$1);

return statearr_34754;
})();
if(inst_34736){
var statearr_34755_34774 = state_34752__$1;
(statearr_34755_34774[(1)] = (8));

} else {
var statearr_34756_34775 = state_34752__$1;
(statearr_34756_34775[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34753 === (1))){
var inst_34729 = (0);
var state_34752__$1 = (function (){var statearr_34757 = state_34752;
(statearr_34757[(8)] = inst_34729);

return statearr_34757;
})();
var statearr_34758_34776 = state_34752__$1;
(statearr_34758_34776[(2)] = null);

(statearr_34758_34776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34753 === (4))){
var state_34752__$1 = state_34752;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34752__$1,(7),ch);
} else {
if((state_val_34753 === (6))){
var inst_34747 = (state_34752[(2)]);
var state_34752__$1 = state_34752;
var statearr_34759_34777 = state_34752__$1;
(statearr_34759_34777[(2)] = inst_34747);

(statearr_34759_34777[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34753 === (3))){
var inst_34749 = (state_34752[(2)]);
var inst_34750 = cljs.core.async.close_BANG_.call(null,out);
var state_34752__$1 = (function (){var statearr_34760 = state_34752;
(statearr_34760[(9)] = inst_34749);

return statearr_34760;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34752__$1,inst_34750);
} else {
if((state_val_34753 === (2))){
var inst_34729 = (state_34752[(8)]);
var inst_34731 = (inst_34729 < n);
var state_34752__$1 = state_34752;
if(cljs.core.truth_(inst_34731)){
var statearr_34761_34778 = state_34752__$1;
(statearr_34761_34778[(1)] = (4));

} else {
var statearr_34762_34779 = state_34752__$1;
(statearr_34762_34779[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34753 === (11))){
var inst_34729 = (state_34752[(8)]);
var inst_34739 = (state_34752[(2)]);
var inst_34740 = (inst_34729 + (1));
var inst_34729__$1 = inst_34740;
var state_34752__$1 = (function (){var statearr_34763 = state_34752;
(statearr_34763[(10)] = inst_34739);

(statearr_34763[(8)] = inst_34729__$1);

return statearr_34763;
})();
var statearr_34764_34780 = state_34752__$1;
(statearr_34764_34780[(2)] = null);

(statearr_34764_34780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34753 === (9))){
var state_34752__$1 = state_34752;
var statearr_34765_34781 = state_34752__$1;
(statearr_34765_34781[(2)] = null);

(statearr_34765_34781[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34753 === (5))){
var state_34752__$1 = state_34752;
var statearr_34766_34782 = state_34752__$1;
(statearr_34766_34782[(2)] = null);

(statearr_34766_34782[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34753 === (10))){
var inst_34744 = (state_34752[(2)]);
var state_34752__$1 = state_34752;
var statearr_34767_34783 = state_34752__$1;
(statearr_34767_34783[(2)] = inst_34744);

(statearr_34767_34783[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34753 === (8))){
var inst_34734 = (state_34752[(7)]);
var state_34752__$1 = state_34752;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34752__$1,(11),out,inst_34734);
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
});})(c__33315__auto___34773,out))
;
return ((function (switch__33227__auto__,c__33315__auto___34773,out){
return (function() {
var cljs$core$async$state_machine__33228__auto__ = null;
var cljs$core$async$state_machine__33228__auto____0 = (function (){
var statearr_34768 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34768[(0)] = cljs$core$async$state_machine__33228__auto__);

(statearr_34768[(1)] = (1));

return statearr_34768;
});
var cljs$core$async$state_machine__33228__auto____1 = (function (state_34752){
while(true){
var ret_value__33229__auto__ = (function (){try{while(true){
var result__33230__auto__ = switch__33227__auto__.call(null,state_34752);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33230__auto__;
}
break;
}
}catch (e34769){if((e34769 instanceof Object)){
var ex__33231__auto__ = e34769;
var statearr_34770_34784 = state_34752;
(statearr_34770_34784[(5)] = ex__33231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34752);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34769;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34785 = state_34752;
state_34752 = G__34785;
continue;
} else {
return ret_value__33229__auto__;
}
break;
}
});
cljs$core$async$state_machine__33228__auto__ = function(state_34752){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33228__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33228__auto____1.call(this,state_34752);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33228__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33228__auto____0;
cljs$core$async$state_machine__33228__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33228__auto____1;
return cljs$core$async$state_machine__33228__auto__;
})()
;})(switch__33227__auto__,c__33315__auto___34773,out))
})();
var state__33317__auto__ = (function (){var statearr_34771 = f__33316__auto__.call(null);
(statearr_34771[(6)] = c__33315__auto___34773);

return statearr_34771;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33317__auto__);
});})(c__33315__auto___34773,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async34787 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34787 = (function (f,ch,meta34788){
this.f = f;
this.ch = ch;
this.meta34788 = meta34788;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34787.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34789,meta34788__$1){
var self__ = this;
var _34789__$1 = this;
return (new cljs.core.async.t_cljs$core$async34787(self__.f,self__.ch,meta34788__$1));
});

cljs.core.async.t_cljs$core$async34787.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34789){
var self__ = this;
var _34789__$1 = this;
return self__.meta34788;
});

cljs.core.async.t_cljs$core$async34787.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34787.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34787.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34787.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34787.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async34790 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34790 = (function (f,ch,meta34788,_,fn1,meta34791){
this.f = f;
this.ch = ch;
this.meta34788 = meta34788;
this._ = _;
this.fn1 = fn1;
this.meta34791 = meta34791;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34790.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_34792,meta34791__$1){
var self__ = this;
var _34792__$1 = this;
return (new cljs.core.async.t_cljs$core$async34790(self__.f,self__.ch,self__.meta34788,self__._,self__.fn1,meta34791__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async34790.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_34792){
var self__ = this;
var _34792__$1 = this;
return self__.meta34791;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34790.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34790.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34790.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34790.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__34786_SHARP_){
return f1.call(null,(((p1__34786_SHARP_ == null))?null:self__.f.call(null,p1__34786_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async34790.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34788","meta34788",1137088260,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34787","cljs.core.async/t_cljs$core$async34787",-1593199544,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34791","meta34791",652968503,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34790.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34790.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34790";

cljs.core.async.t_cljs$core$async34790.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__27663__auto__,writer__27664__auto__,opt__27665__auto__){
return cljs.core._write.call(null,writer__27664__auto__,"cljs.core.async/t_cljs$core$async34790");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async34790 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34790(f__$1,ch__$1,meta34788__$1,___$2,fn1__$1,meta34791){
return (new cljs.core.async.t_cljs$core$async34790(f__$1,ch__$1,meta34788__$1,___$2,fn1__$1,meta34791));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async34790(self__.f,self__.ch,self__.meta34788,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__27040__auto__ = ret;
if(cljs.core.truth_(and__27040__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__27040__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async34787.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34787.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async34787.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34788","meta34788",1137088260,null)], null);
});

cljs.core.async.t_cljs$core$async34787.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34787.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34787";

cljs.core.async.t_cljs$core$async34787.cljs$lang$ctorPrWriter = (function (this__27663__auto__,writer__27664__auto__,opt__27665__auto__){
return cljs.core._write.call(null,writer__27664__auto__,"cljs.core.async/t_cljs$core$async34787");
});

cljs.core.async.__GT_t_cljs$core$async34787 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34787(f__$1,ch__$1,meta34788){
return (new cljs.core.async.t_cljs$core$async34787(f__$1,ch__$1,meta34788));
});

}

return (new cljs.core.async.t_cljs$core$async34787(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async34793 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34793 = (function (f,ch,meta34794){
this.f = f;
this.ch = ch;
this.meta34794 = meta34794;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34793.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34795,meta34794__$1){
var self__ = this;
var _34795__$1 = this;
return (new cljs.core.async.t_cljs$core$async34793(self__.f,self__.ch,meta34794__$1));
});

cljs.core.async.t_cljs$core$async34793.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34795){
var self__ = this;
var _34795__$1 = this;
return self__.meta34794;
});

cljs.core.async.t_cljs$core$async34793.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34793.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34793.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34793.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34793.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34793.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async34793.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34794","meta34794",1189101184,null)], null);
});

cljs.core.async.t_cljs$core$async34793.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34793.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34793";

cljs.core.async.t_cljs$core$async34793.cljs$lang$ctorPrWriter = (function (this__27663__auto__,writer__27664__auto__,opt__27665__auto__){
return cljs.core._write.call(null,writer__27664__auto__,"cljs.core.async/t_cljs$core$async34793");
});

cljs.core.async.__GT_t_cljs$core$async34793 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34793(f__$1,ch__$1,meta34794){
return (new cljs.core.async.t_cljs$core$async34793(f__$1,ch__$1,meta34794));
});

}

return (new cljs.core.async.t_cljs$core$async34793(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async34796 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34796 = (function (p,ch,meta34797){
this.p = p;
this.ch = ch;
this.meta34797 = meta34797;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34796.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34798,meta34797__$1){
var self__ = this;
var _34798__$1 = this;
return (new cljs.core.async.t_cljs$core$async34796(self__.p,self__.ch,meta34797__$1));
});

cljs.core.async.t_cljs$core$async34796.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34798){
var self__ = this;
var _34798__$1 = this;
return self__.meta34797;
});

cljs.core.async.t_cljs$core$async34796.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34796.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34796.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34796.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34796.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34796.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34796.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async34796.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34797","meta34797",424760951,null)], null);
});

cljs.core.async.t_cljs$core$async34796.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34796.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34796";

cljs.core.async.t_cljs$core$async34796.cljs$lang$ctorPrWriter = (function (this__27663__auto__,writer__27664__auto__,opt__27665__auto__){
return cljs.core._write.call(null,writer__27664__auto__,"cljs.core.async/t_cljs$core$async34796");
});

cljs.core.async.__GT_t_cljs$core$async34796 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34796(p__$1,ch__$1,meta34797){
return (new cljs.core.async.t_cljs$core$async34796(p__$1,ch__$1,meta34797));
});

}

return (new cljs.core.async.t_cljs$core$async34796(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__34800 = arguments.length;
switch (G__34800) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33315__auto___34840 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33315__auto___34840,out){
return (function (){
var f__33316__auto__ = (function (){var switch__33227__auto__ = ((function (c__33315__auto___34840,out){
return (function (state_34821){
var state_val_34822 = (state_34821[(1)]);
if((state_val_34822 === (7))){
var inst_34817 = (state_34821[(2)]);
var state_34821__$1 = state_34821;
var statearr_34823_34841 = state_34821__$1;
(statearr_34823_34841[(2)] = inst_34817);

(statearr_34823_34841[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34822 === (1))){
var state_34821__$1 = state_34821;
var statearr_34824_34842 = state_34821__$1;
(statearr_34824_34842[(2)] = null);

(statearr_34824_34842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34822 === (4))){
var inst_34803 = (state_34821[(7)]);
var inst_34803__$1 = (state_34821[(2)]);
var inst_34804 = (inst_34803__$1 == null);
var state_34821__$1 = (function (){var statearr_34825 = state_34821;
(statearr_34825[(7)] = inst_34803__$1);

return statearr_34825;
})();
if(cljs.core.truth_(inst_34804)){
var statearr_34826_34843 = state_34821__$1;
(statearr_34826_34843[(1)] = (5));

} else {
var statearr_34827_34844 = state_34821__$1;
(statearr_34827_34844[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34822 === (6))){
var inst_34803 = (state_34821[(7)]);
var inst_34808 = p.call(null,inst_34803);
var state_34821__$1 = state_34821;
if(cljs.core.truth_(inst_34808)){
var statearr_34828_34845 = state_34821__$1;
(statearr_34828_34845[(1)] = (8));

} else {
var statearr_34829_34846 = state_34821__$1;
(statearr_34829_34846[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34822 === (3))){
var inst_34819 = (state_34821[(2)]);
var state_34821__$1 = state_34821;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34821__$1,inst_34819);
} else {
if((state_val_34822 === (2))){
var state_34821__$1 = state_34821;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34821__$1,(4),ch);
} else {
if((state_val_34822 === (11))){
var inst_34811 = (state_34821[(2)]);
var state_34821__$1 = state_34821;
var statearr_34830_34847 = state_34821__$1;
(statearr_34830_34847[(2)] = inst_34811);

(statearr_34830_34847[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34822 === (9))){
var state_34821__$1 = state_34821;
var statearr_34831_34848 = state_34821__$1;
(statearr_34831_34848[(2)] = null);

(statearr_34831_34848[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34822 === (5))){
var inst_34806 = cljs.core.async.close_BANG_.call(null,out);
var state_34821__$1 = state_34821;
var statearr_34832_34849 = state_34821__$1;
(statearr_34832_34849[(2)] = inst_34806);

(statearr_34832_34849[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34822 === (10))){
var inst_34814 = (state_34821[(2)]);
var state_34821__$1 = (function (){var statearr_34833 = state_34821;
(statearr_34833[(8)] = inst_34814);

return statearr_34833;
})();
var statearr_34834_34850 = state_34821__$1;
(statearr_34834_34850[(2)] = null);

(statearr_34834_34850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34822 === (8))){
var inst_34803 = (state_34821[(7)]);
var state_34821__$1 = state_34821;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34821__$1,(11),out,inst_34803);
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
});})(c__33315__auto___34840,out))
;
return ((function (switch__33227__auto__,c__33315__auto___34840,out){
return (function() {
var cljs$core$async$state_machine__33228__auto__ = null;
var cljs$core$async$state_machine__33228__auto____0 = (function (){
var statearr_34835 = [null,null,null,null,null,null,null,null,null];
(statearr_34835[(0)] = cljs$core$async$state_machine__33228__auto__);

(statearr_34835[(1)] = (1));

return statearr_34835;
});
var cljs$core$async$state_machine__33228__auto____1 = (function (state_34821){
while(true){
var ret_value__33229__auto__ = (function (){try{while(true){
var result__33230__auto__ = switch__33227__auto__.call(null,state_34821);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33230__auto__;
}
break;
}
}catch (e34836){if((e34836 instanceof Object)){
var ex__33231__auto__ = e34836;
var statearr_34837_34851 = state_34821;
(statearr_34837_34851[(5)] = ex__33231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34821);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34836;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34852 = state_34821;
state_34821 = G__34852;
continue;
} else {
return ret_value__33229__auto__;
}
break;
}
});
cljs$core$async$state_machine__33228__auto__ = function(state_34821){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33228__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33228__auto____1.call(this,state_34821);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33228__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33228__auto____0;
cljs$core$async$state_machine__33228__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33228__auto____1;
return cljs$core$async$state_machine__33228__auto__;
})()
;})(switch__33227__auto__,c__33315__auto___34840,out))
})();
var state__33317__auto__ = (function (){var statearr_34838 = f__33316__auto__.call(null);
(statearr_34838[(6)] = c__33315__auto___34840);

return statearr_34838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33317__auto__);
});})(c__33315__auto___34840,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34854 = arguments.length;
switch (G__34854) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var c__33315__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33315__auto__){
return (function (){
var f__33316__auto__ = (function (){var switch__33227__auto__ = ((function (c__33315__auto__){
return (function (state_34917){
var state_val_34918 = (state_34917[(1)]);
if((state_val_34918 === (7))){
var inst_34913 = (state_34917[(2)]);
var state_34917__$1 = state_34917;
var statearr_34919_34957 = state_34917__$1;
(statearr_34919_34957[(2)] = inst_34913);

(statearr_34919_34957[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34918 === (20))){
var inst_34883 = (state_34917[(7)]);
var inst_34894 = (state_34917[(2)]);
var inst_34895 = cljs.core.next.call(null,inst_34883);
var inst_34869 = inst_34895;
var inst_34870 = null;
var inst_34871 = (0);
var inst_34872 = (0);
var state_34917__$1 = (function (){var statearr_34920 = state_34917;
(statearr_34920[(8)] = inst_34869);

(statearr_34920[(9)] = inst_34870);

(statearr_34920[(10)] = inst_34871);

(statearr_34920[(11)] = inst_34872);

(statearr_34920[(12)] = inst_34894);

return statearr_34920;
})();
var statearr_34921_34958 = state_34917__$1;
(statearr_34921_34958[(2)] = null);

(statearr_34921_34958[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34918 === (1))){
var state_34917__$1 = state_34917;
var statearr_34922_34959 = state_34917__$1;
(statearr_34922_34959[(2)] = null);

(statearr_34922_34959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34918 === (4))){
var inst_34858 = (state_34917[(13)]);
var inst_34858__$1 = (state_34917[(2)]);
var inst_34859 = (inst_34858__$1 == null);
var state_34917__$1 = (function (){var statearr_34923 = state_34917;
(statearr_34923[(13)] = inst_34858__$1);

return statearr_34923;
})();
if(cljs.core.truth_(inst_34859)){
var statearr_34924_34960 = state_34917__$1;
(statearr_34924_34960[(1)] = (5));

} else {
var statearr_34925_34961 = state_34917__$1;
(statearr_34925_34961[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34918 === (15))){
var state_34917__$1 = state_34917;
var statearr_34929_34962 = state_34917__$1;
(statearr_34929_34962[(2)] = null);

(statearr_34929_34962[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34918 === (21))){
var state_34917__$1 = state_34917;
var statearr_34930_34963 = state_34917__$1;
(statearr_34930_34963[(2)] = null);

(statearr_34930_34963[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34918 === (13))){
var inst_34869 = (state_34917[(8)]);
var inst_34870 = (state_34917[(9)]);
var inst_34871 = (state_34917[(10)]);
var inst_34872 = (state_34917[(11)]);
var inst_34879 = (state_34917[(2)]);
var inst_34880 = (inst_34872 + (1));
var tmp34926 = inst_34869;
var tmp34927 = inst_34870;
var tmp34928 = inst_34871;
var inst_34869__$1 = tmp34926;
var inst_34870__$1 = tmp34927;
var inst_34871__$1 = tmp34928;
var inst_34872__$1 = inst_34880;
var state_34917__$1 = (function (){var statearr_34931 = state_34917;
(statearr_34931[(8)] = inst_34869__$1);

(statearr_34931[(14)] = inst_34879);

(statearr_34931[(9)] = inst_34870__$1);

(statearr_34931[(10)] = inst_34871__$1);

(statearr_34931[(11)] = inst_34872__$1);

return statearr_34931;
})();
var statearr_34932_34964 = state_34917__$1;
(statearr_34932_34964[(2)] = null);

(statearr_34932_34964[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34918 === (22))){
var state_34917__$1 = state_34917;
var statearr_34933_34965 = state_34917__$1;
(statearr_34933_34965[(2)] = null);

(statearr_34933_34965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34918 === (6))){
var inst_34858 = (state_34917[(13)]);
var inst_34867 = f.call(null,inst_34858);
var inst_34868 = cljs.core.seq.call(null,inst_34867);
var inst_34869 = inst_34868;
var inst_34870 = null;
var inst_34871 = (0);
var inst_34872 = (0);
var state_34917__$1 = (function (){var statearr_34934 = state_34917;
(statearr_34934[(8)] = inst_34869);

(statearr_34934[(9)] = inst_34870);

(statearr_34934[(10)] = inst_34871);

(statearr_34934[(11)] = inst_34872);

return statearr_34934;
})();
var statearr_34935_34966 = state_34917__$1;
(statearr_34935_34966[(2)] = null);

(statearr_34935_34966[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34918 === (17))){
var inst_34883 = (state_34917[(7)]);
var inst_34887 = cljs.core.chunk_first.call(null,inst_34883);
var inst_34888 = cljs.core.chunk_rest.call(null,inst_34883);
var inst_34889 = cljs.core.count.call(null,inst_34887);
var inst_34869 = inst_34888;
var inst_34870 = inst_34887;
var inst_34871 = inst_34889;
var inst_34872 = (0);
var state_34917__$1 = (function (){var statearr_34936 = state_34917;
(statearr_34936[(8)] = inst_34869);

(statearr_34936[(9)] = inst_34870);

(statearr_34936[(10)] = inst_34871);

(statearr_34936[(11)] = inst_34872);

return statearr_34936;
})();
var statearr_34937_34967 = state_34917__$1;
(statearr_34937_34967[(2)] = null);

(statearr_34937_34967[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34918 === (3))){
var inst_34915 = (state_34917[(2)]);
var state_34917__$1 = state_34917;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34917__$1,inst_34915);
} else {
if((state_val_34918 === (12))){
var inst_34903 = (state_34917[(2)]);
var state_34917__$1 = state_34917;
var statearr_34938_34968 = state_34917__$1;
(statearr_34938_34968[(2)] = inst_34903);

(statearr_34938_34968[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34918 === (2))){
var state_34917__$1 = state_34917;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34917__$1,(4),in$);
} else {
if((state_val_34918 === (23))){
var inst_34911 = (state_34917[(2)]);
var state_34917__$1 = state_34917;
var statearr_34939_34969 = state_34917__$1;
(statearr_34939_34969[(2)] = inst_34911);

(statearr_34939_34969[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34918 === (19))){
var inst_34898 = (state_34917[(2)]);
var state_34917__$1 = state_34917;
var statearr_34940_34970 = state_34917__$1;
(statearr_34940_34970[(2)] = inst_34898);

(statearr_34940_34970[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34918 === (11))){
var inst_34869 = (state_34917[(8)]);
var inst_34883 = (state_34917[(7)]);
var inst_34883__$1 = cljs.core.seq.call(null,inst_34869);
var state_34917__$1 = (function (){var statearr_34941 = state_34917;
(statearr_34941[(7)] = inst_34883__$1);

return statearr_34941;
})();
if(inst_34883__$1){
var statearr_34942_34971 = state_34917__$1;
(statearr_34942_34971[(1)] = (14));

} else {
var statearr_34943_34972 = state_34917__$1;
(statearr_34943_34972[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34918 === (9))){
var inst_34905 = (state_34917[(2)]);
var inst_34906 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_34917__$1 = (function (){var statearr_34944 = state_34917;
(statearr_34944[(15)] = inst_34905);

return statearr_34944;
})();
if(cljs.core.truth_(inst_34906)){
var statearr_34945_34973 = state_34917__$1;
(statearr_34945_34973[(1)] = (21));

} else {
var statearr_34946_34974 = state_34917__$1;
(statearr_34946_34974[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34918 === (5))){
var inst_34861 = cljs.core.async.close_BANG_.call(null,out);
var state_34917__$1 = state_34917;
var statearr_34947_34975 = state_34917__$1;
(statearr_34947_34975[(2)] = inst_34861);

(statearr_34947_34975[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34918 === (14))){
var inst_34883 = (state_34917[(7)]);
var inst_34885 = cljs.core.chunked_seq_QMARK_.call(null,inst_34883);
var state_34917__$1 = state_34917;
if(inst_34885){
var statearr_34948_34976 = state_34917__$1;
(statearr_34948_34976[(1)] = (17));

} else {
var statearr_34949_34977 = state_34917__$1;
(statearr_34949_34977[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34918 === (16))){
var inst_34901 = (state_34917[(2)]);
var state_34917__$1 = state_34917;
var statearr_34950_34978 = state_34917__$1;
(statearr_34950_34978[(2)] = inst_34901);

(statearr_34950_34978[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34918 === (10))){
var inst_34870 = (state_34917[(9)]);
var inst_34872 = (state_34917[(11)]);
var inst_34877 = cljs.core._nth.call(null,inst_34870,inst_34872);
var state_34917__$1 = state_34917;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34917__$1,(13),out,inst_34877);
} else {
if((state_val_34918 === (18))){
var inst_34883 = (state_34917[(7)]);
var inst_34892 = cljs.core.first.call(null,inst_34883);
var state_34917__$1 = state_34917;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34917__$1,(20),out,inst_34892);
} else {
if((state_val_34918 === (8))){
var inst_34871 = (state_34917[(10)]);
var inst_34872 = (state_34917[(11)]);
var inst_34874 = (inst_34872 < inst_34871);
var inst_34875 = inst_34874;
var state_34917__$1 = state_34917;
if(cljs.core.truth_(inst_34875)){
var statearr_34951_34979 = state_34917__$1;
(statearr_34951_34979[(1)] = (10));

} else {
var statearr_34952_34980 = state_34917__$1;
(statearr_34952_34980[(1)] = (11));

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
});})(c__33315__auto__))
;
return ((function (switch__33227__auto__,c__33315__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__33228__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33228__auto____0 = (function (){
var statearr_34953 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34953[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33228__auto__);

(statearr_34953[(1)] = (1));

return statearr_34953;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33228__auto____1 = (function (state_34917){
while(true){
var ret_value__33229__auto__ = (function (){try{while(true){
var result__33230__auto__ = switch__33227__auto__.call(null,state_34917);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33230__auto__;
}
break;
}
}catch (e34954){if((e34954 instanceof Object)){
var ex__33231__auto__ = e34954;
var statearr_34955_34981 = state_34917;
(statearr_34955_34981[(5)] = ex__33231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34917);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34954;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34982 = state_34917;
state_34917 = G__34982;
continue;
} else {
return ret_value__33229__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33228__auto__ = function(state_34917){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33228__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33228__auto____1.call(this,state_34917);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__33228__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33228__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33228__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33228__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33228__auto__;
})()
;})(switch__33227__auto__,c__33315__auto__))
})();
var state__33317__auto__ = (function (){var statearr_34956 = f__33316__auto__.call(null);
(statearr_34956[(6)] = c__33315__auto__);

return statearr_34956;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33317__auto__);
});})(c__33315__auto__))
);

return c__33315__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34984 = arguments.length;
switch (G__34984) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__34987 = arguments.length;
switch (G__34987) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__34990 = arguments.length;
switch (G__34990) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33315__auto___35037 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33315__auto___35037,out){
return (function (){
var f__33316__auto__ = (function (){var switch__33227__auto__ = ((function (c__33315__auto___35037,out){
return (function (state_35014){
var state_val_35015 = (state_35014[(1)]);
if((state_val_35015 === (7))){
var inst_35009 = (state_35014[(2)]);
var state_35014__$1 = state_35014;
var statearr_35016_35038 = state_35014__$1;
(statearr_35016_35038[(2)] = inst_35009);

(statearr_35016_35038[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35015 === (1))){
var inst_34991 = null;
var state_35014__$1 = (function (){var statearr_35017 = state_35014;
(statearr_35017[(7)] = inst_34991);

return statearr_35017;
})();
var statearr_35018_35039 = state_35014__$1;
(statearr_35018_35039[(2)] = null);

(statearr_35018_35039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35015 === (4))){
var inst_34994 = (state_35014[(8)]);
var inst_34994__$1 = (state_35014[(2)]);
var inst_34995 = (inst_34994__$1 == null);
var inst_34996 = cljs.core.not.call(null,inst_34995);
var state_35014__$1 = (function (){var statearr_35019 = state_35014;
(statearr_35019[(8)] = inst_34994__$1);

return statearr_35019;
})();
if(inst_34996){
var statearr_35020_35040 = state_35014__$1;
(statearr_35020_35040[(1)] = (5));

} else {
var statearr_35021_35041 = state_35014__$1;
(statearr_35021_35041[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35015 === (6))){
var state_35014__$1 = state_35014;
var statearr_35022_35042 = state_35014__$1;
(statearr_35022_35042[(2)] = null);

(statearr_35022_35042[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35015 === (3))){
var inst_35011 = (state_35014[(2)]);
var inst_35012 = cljs.core.async.close_BANG_.call(null,out);
var state_35014__$1 = (function (){var statearr_35023 = state_35014;
(statearr_35023[(9)] = inst_35011);

return statearr_35023;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35014__$1,inst_35012);
} else {
if((state_val_35015 === (2))){
var state_35014__$1 = state_35014;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35014__$1,(4),ch);
} else {
if((state_val_35015 === (11))){
var inst_34994 = (state_35014[(8)]);
var inst_35003 = (state_35014[(2)]);
var inst_34991 = inst_34994;
var state_35014__$1 = (function (){var statearr_35024 = state_35014;
(statearr_35024[(10)] = inst_35003);

(statearr_35024[(7)] = inst_34991);

return statearr_35024;
})();
var statearr_35025_35043 = state_35014__$1;
(statearr_35025_35043[(2)] = null);

(statearr_35025_35043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35015 === (9))){
var inst_34994 = (state_35014[(8)]);
var state_35014__$1 = state_35014;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35014__$1,(11),out,inst_34994);
} else {
if((state_val_35015 === (5))){
var inst_34991 = (state_35014[(7)]);
var inst_34994 = (state_35014[(8)]);
var inst_34998 = cljs.core._EQ_.call(null,inst_34994,inst_34991);
var state_35014__$1 = state_35014;
if(inst_34998){
var statearr_35027_35044 = state_35014__$1;
(statearr_35027_35044[(1)] = (8));

} else {
var statearr_35028_35045 = state_35014__$1;
(statearr_35028_35045[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35015 === (10))){
var inst_35006 = (state_35014[(2)]);
var state_35014__$1 = state_35014;
var statearr_35029_35046 = state_35014__$1;
(statearr_35029_35046[(2)] = inst_35006);

(statearr_35029_35046[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35015 === (8))){
var inst_34991 = (state_35014[(7)]);
var tmp35026 = inst_34991;
var inst_34991__$1 = tmp35026;
var state_35014__$1 = (function (){var statearr_35030 = state_35014;
(statearr_35030[(7)] = inst_34991__$1);

return statearr_35030;
})();
var statearr_35031_35047 = state_35014__$1;
(statearr_35031_35047[(2)] = null);

(statearr_35031_35047[(1)] = (2));


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
});})(c__33315__auto___35037,out))
;
return ((function (switch__33227__auto__,c__33315__auto___35037,out){
return (function() {
var cljs$core$async$state_machine__33228__auto__ = null;
var cljs$core$async$state_machine__33228__auto____0 = (function (){
var statearr_35032 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35032[(0)] = cljs$core$async$state_machine__33228__auto__);

(statearr_35032[(1)] = (1));

return statearr_35032;
});
var cljs$core$async$state_machine__33228__auto____1 = (function (state_35014){
while(true){
var ret_value__33229__auto__ = (function (){try{while(true){
var result__33230__auto__ = switch__33227__auto__.call(null,state_35014);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33230__auto__;
}
break;
}
}catch (e35033){if((e35033 instanceof Object)){
var ex__33231__auto__ = e35033;
var statearr_35034_35048 = state_35014;
(statearr_35034_35048[(5)] = ex__33231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35014);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35033;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35049 = state_35014;
state_35014 = G__35049;
continue;
} else {
return ret_value__33229__auto__;
}
break;
}
});
cljs$core$async$state_machine__33228__auto__ = function(state_35014){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33228__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33228__auto____1.call(this,state_35014);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33228__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33228__auto____0;
cljs$core$async$state_machine__33228__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33228__auto____1;
return cljs$core$async$state_machine__33228__auto__;
})()
;})(switch__33227__auto__,c__33315__auto___35037,out))
})();
var state__33317__auto__ = (function (){var statearr_35035 = f__33316__auto__.call(null);
(statearr_35035[(6)] = c__33315__auto___35037);

return statearr_35035;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33317__auto__);
});})(c__33315__auto___35037,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__35051 = arguments.length;
switch (G__35051) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33315__auto___35117 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33315__auto___35117,out){
return (function (){
var f__33316__auto__ = (function (){var switch__33227__auto__ = ((function (c__33315__auto___35117,out){
return (function (state_35089){
var state_val_35090 = (state_35089[(1)]);
if((state_val_35090 === (7))){
var inst_35085 = (state_35089[(2)]);
var state_35089__$1 = state_35089;
var statearr_35091_35118 = state_35089__$1;
(statearr_35091_35118[(2)] = inst_35085);

(statearr_35091_35118[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35090 === (1))){
var inst_35052 = (new Array(n));
var inst_35053 = inst_35052;
var inst_35054 = (0);
var state_35089__$1 = (function (){var statearr_35092 = state_35089;
(statearr_35092[(7)] = inst_35054);

(statearr_35092[(8)] = inst_35053);

return statearr_35092;
})();
var statearr_35093_35119 = state_35089__$1;
(statearr_35093_35119[(2)] = null);

(statearr_35093_35119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35090 === (4))){
var inst_35057 = (state_35089[(9)]);
var inst_35057__$1 = (state_35089[(2)]);
var inst_35058 = (inst_35057__$1 == null);
var inst_35059 = cljs.core.not.call(null,inst_35058);
var state_35089__$1 = (function (){var statearr_35094 = state_35089;
(statearr_35094[(9)] = inst_35057__$1);

return statearr_35094;
})();
if(inst_35059){
var statearr_35095_35120 = state_35089__$1;
(statearr_35095_35120[(1)] = (5));

} else {
var statearr_35096_35121 = state_35089__$1;
(statearr_35096_35121[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35090 === (15))){
var inst_35079 = (state_35089[(2)]);
var state_35089__$1 = state_35089;
var statearr_35097_35122 = state_35089__$1;
(statearr_35097_35122[(2)] = inst_35079);

(statearr_35097_35122[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35090 === (13))){
var state_35089__$1 = state_35089;
var statearr_35098_35123 = state_35089__$1;
(statearr_35098_35123[(2)] = null);

(statearr_35098_35123[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35090 === (6))){
var inst_35054 = (state_35089[(7)]);
var inst_35075 = (inst_35054 > (0));
var state_35089__$1 = state_35089;
if(cljs.core.truth_(inst_35075)){
var statearr_35099_35124 = state_35089__$1;
(statearr_35099_35124[(1)] = (12));

} else {
var statearr_35100_35125 = state_35089__$1;
(statearr_35100_35125[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35090 === (3))){
var inst_35087 = (state_35089[(2)]);
var state_35089__$1 = state_35089;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35089__$1,inst_35087);
} else {
if((state_val_35090 === (12))){
var inst_35053 = (state_35089[(8)]);
var inst_35077 = cljs.core.vec.call(null,inst_35053);
var state_35089__$1 = state_35089;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35089__$1,(15),out,inst_35077);
} else {
if((state_val_35090 === (2))){
var state_35089__$1 = state_35089;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35089__$1,(4),ch);
} else {
if((state_val_35090 === (11))){
var inst_35069 = (state_35089[(2)]);
var inst_35070 = (new Array(n));
var inst_35053 = inst_35070;
var inst_35054 = (0);
var state_35089__$1 = (function (){var statearr_35101 = state_35089;
(statearr_35101[(7)] = inst_35054);

(statearr_35101[(8)] = inst_35053);

(statearr_35101[(10)] = inst_35069);

return statearr_35101;
})();
var statearr_35102_35126 = state_35089__$1;
(statearr_35102_35126[(2)] = null);

(statearr_35102_35126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35090 === (9))){
var inst_35053 = (state_35089[(8)]);
var inst_35067 = cljs.core.vec.call(null,inst_35053);
var state_35089__$1 = state_35089;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35089__$1,(11),out,inst_35067);
} else {
if((state_val_35090 === (5))){
var inst_35054 = (state_35089[(7)]);
var inst_35057 = (state_35089[(9)]);
var inst_35053 = (state_35089[(8)]);
var inst_35062 = (state_35089[(11)]);
var inst_35061 = (inst_35053[inst_35054] = inst_35057);
var inst_35062__$1 = (inst_35054 + (1));
var inst_35063 = (inst_35062__$1 < n);
var state_35089__$1 = (function (){var statearr_35103 = state_35089;
(statearr_35103[(12)] = inst_35061);

(statearr_35103[(11)] = inst_35062__$1);

return statearr_35103;
})();
if(cljs.core.truth_(inst_35063)){
var statearr_35104_35127 = state_35089__$1;
(statearr_35104_35127[(1)] = (8));

} else {
var statearr_35105_35128 = state_35089__$1;
(statearr_35105_35128[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35090 === (14))){
var inst_35082 = (state_35089[(2)]);
var inst_35083 = cljs.core.async.close_BANG_.call(null,out);
var state_35089__$1 = (function (){var statearr_35107 = state_35089;
(statearr_35107[(13)] = inst_35082);

return statearr_35107;
})();
var statearr_35108_35129 = state_35089__$1;
(statearr_35108_35129[(2)] = inst_35083);

(statearr_35108_35129[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35090 === (10))){
var inst_35073 = (state_35089[(2)]);
var state_35089__$1 = state_35089;
var statearr_35109_35130 = state_35089__$1;
(statearr_35109_35130[(2)] = inst_35073);

(statearr_35109_35130[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35090 === (8))){
var inst_35053 = (state_35089[(8)]);
var inst_35062 = (state_35089[(11)]);
var tmp35106 = inst_35053;
var inst_35053__$1 = tmp35106;
var inst_35054 = inst_35062;
var state_35089__$1 = (function (){var statearr_35110 = state_35089;
(statearr_35110[(7)] = inst_35054);

(statearr_35110[(8)] = inst_35053__$1);

return statearr_35110;
})();
var statearr_35111_35131 = state_35089__$1;
(statearr_35111_35131[(2)] = null);

(statearr_35111_35131[(1)] = (2));


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
});})(c__33315__auto___35117,out))
;
return ((function (switch__33227__auto__,c__33315__auto___35117,out){
return (function() {
var cljs$core$async$state_machine__33228__auto__ = null;
var cljs$core$async$state_machine__33228__auto____0 = (function (){
var statearr_35112 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35112[(0)] = cljs$core$async$state_machine__33228__auto__);

(statearr_35112[(1)] = (1));

return statearr_35112;
});
var cljs$core$async$state_machine__33228__auto____1 = (function (state_35089){
while(true){
var ret_value__33229__auto__ = (function (){try{while(true){
var result__33230__auto__ = switch__33227__auto__.call(null,state_35089);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33230__auto__;
}
break;
}
}catch (e35113){if((e35113 instanceof Object)){
var ex__33231__auto__ = e35113;
var statearr_35114_35132 = state_35089;
(statearr_35114_35132[(5)] = ex__33231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35089);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35113;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35133 = state_35089;
state_35089 = G__35133;
continue;
} else {
return ret_value__33229__auto__;
}
break;
}
});
cljs$core$async$state_machine__33228__auto__ = function(state_35089){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33228__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33228__auto____1.call(this,state_35089);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33228__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33228__auto____0;
cljs$core$async$state_machine__33228__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33228__auto____1;
return cljs$core$async$state_machine__33228__auto__;
})()
;})(switch__33227__auto__,c__33315__auto___35117,out))
})();
var state__33317__auto__ = (function (){var statearr_35115 = f__33316__auto__.call(null);
(statearr_35115[(6)] = c__33315__auto___35117);

return statearr_35115;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33317__auto__);
});})(c__33315__auto___35117,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__35135 = arguments.length;
switch (G__35135) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33315__auto___35205 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33315__auto___35205,out){
return (function (){
var f__33316__auto__ = (function (){var switch__33227__auto__ = ((function (c__33315__auto___35205,out){
return (function (state_35177){
var state_val_35178 = (state_35177[(1)]);
if((state_val_35178 === (7))){
var inst_35173 = (state_35177[(2)]);
var state_35177__$1 = state_35177;
var statearr_35179_35206 = state_35177__$1;
(statearr_35179_35206[(2)] = inst_35173);

(statearr_35179_35206[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35178 === (1))){
var inst_35136 = [];
var inst_35137 = inst_35136;
var inst_35138 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_35177__$1 = (function (){var statearr_35180 = state_35177;
(statearr_35180[(7)] = inst_35138);

(statearr_35180[(8)] = inst_35137);

return statearr_35180;
})();
var statearr_35181_35207 = state_35177__$1;
(statearr_35181_35207[(2)] = null);

(statearr_35181_35207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35178 === (4))){
var inst_35141 = (state_35177[(9)]);
var inst_35141__$1 = (state_35177[(2)]);
var inst_35142 = (inst_35141__$1 == null);
var inst_35143 = cljs.core.not.call(null,inst_35142);
var state_35177__$1 = (function (){var statearr_35182 = state_35177;
(statearr_35182[(9)] = inst_35141__$1);

return statearr_35182;
})();
if(inst_35143){
var statearr_35183_35208 = state_35177__$1;
(statearr_35183_35208[(1)] = (5));

} else {
var statearr_35184_35209 = state_35177__$1;
(statearr_35184_35209[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35178 === (15))){
var inst_35167 = (state_35177[(2)]);
var state_35177__$1 = state_35177;
var statearr_35185_35210 = state_35177__$1;
(statearr_35185_35210[(2)] = inst_35167);

(statearr_35185_35210[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35178 === (13))){
var state_35177__$1 = state_35177;
var statearr_35186_35211 = state_35177__$1;
(statearr_35186_35211[(2)] = null);

(statearr_35186_35211[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35178 === (6))){
var inst_35137 = (state_35177[(8)]);
var inst_35162 = inst_35137.length;
var inst_35163 = (inst_35162 > (0));
var state_35177__$1 = state_35177;
if(cljs.core.truth_(inst_35163)){
var statearr_35187_35212 = state_35177__$1;
(statearr_35187_35212[(1)] = (12));

} else {
var statearr_35188_35213 = state_35177__$1;
(statearr_35188_35213[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35178 === (3))){
var inst_35175 = (state_35177[(2)]);
var state_35177__$1 = state_35177;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35177__$1,inst_35175);
} else {
if((state_val_35178 === (12))){
var inst_35137 = (state_35177[(8)]);
var inst_35165 = cljs.core.vec.call(null,inst_35137);
var state_35177__$1 = state_35177;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35177__$1,(15),out,inst_35165);
} else {
if((state_val_35178 === (2))){
var state_35177__$1 = state_35177;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35177__$1,(4),ch);
} else {
if((state_val_35178 === (11))){
var inst_35145 = (state_35177[(10)]);
var inst_35141 = (state_35177[(9)]);
var inst_35155 = (state_35177[(2)]);
var inst_35156 = [];
var inst_35157 = inst_35156.push(inst_35141);
var inst_35137 = inst_35156;
var inst_35138 = inst_35145;
var state_35177__$1 = (function (){var statearr_35189 = state_35177;
(statearr_35189[(11)] = inst_35155);

(statearr_35189[(12)] = inst_35157);

(statearr_35189[(7)] = inst_35138);

(statearr_35189[(8)] = inst_35137);

return statearr_35189;
})();
var statearr_35190_35214 = state_35177__$1;
(statearr_35190_35214[(2)] = null);

(statearr_35190_35214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35178 === (9))){
var inst_35137 = (state_35177[(8)]);
var inst_35153 = cljs.core.vec.call(null,inst_35137);
var state_35177__$1 = state_35177;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35177__$1,(11),out,inst_35153);
} else {
if((state_val_35178 === (5))){
var inst_35145 = (state_35177[(10)]);
var inst_35138 = (state_35177[(7)]);
var inst_35141 = (state_35177[(9)]);
var inst_35145__$1 = f.call(null,inst_35141);
var inst_35146 = cljs.core._EQ_.call(null,inst_35145__$1,inst_35138);
var inst_35147 = cljs.core.keyword_identical_QMARK_.call(null,inst_35138,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_35148 = (inst_35146) || (inst_35147);
var state_35177__$1 = (function (){var statearr_35191 = state_35177;
(statearr_35191[(10)] = inst_35145__$1);

return statearr_35191;
})();
if(cljs.core.truth_(inst_35148)){
var statearr_35192_35215 = state_35177__$1;
(statearr_35192_35215[(1)] = (8));

} else {
var statearr_35193_35216 = state_35177__$1;
(statearr_35193_35216[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35178 === (14))){
var inst_35170 = (state_35177[(2)]);
var inst_35171 = cljs.core.async.close_BANG_.call(null,out);
var state_35177__$1 = (function (){var statearr_35195 = state_35177;
(statearr_35195[(13)] = inst_35170);

return statearr_35195;
})();
var statearr_35196_35217 = state_35177__$1;
(statearr_35196_35217[(2)] = inst_35171);

(statearr_35196_35217[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35178 === (10))){
var inst_35160 = (state_35177[(2)]);
var state_35177__$1 = state_35177;
var statearr_35197_35218 = state_35177__$1;
(statearr_35197_35218[(2)] = inst_35160);

(statearr_35197_35218[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35178 === (8))){
var inst_35145 = (state_35177[(10)]);
var inst_35137 = (state_35177[(8)]);
var inst_35141 = (state_35177[(9)]);
var inst_35150 = inst_35137.push(inst_35141);
var tmp35194 = inst_35137;
var inst_35137__$1 = tmp35194;
var inst_35138 = inst_35145;
var state_35177__$1 = (function (){var statearr_35198 = state_35177;
(statearr_35198[(7)] = inst_35138);

(statearr_35198[(8)] = inst_35137__$1);

(statearr_35198[(14)] = inst_35150);

return statearr_35198;
})();
var statearr_35199_35219 = state_35177__$1;
(statearr_35199_35219[(2)] = null);

(statearr_35199_35219[(1)] = (2));


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
});})(c__33315__auto___35205,out))
;
return ((function (switch__33227__auto__,c__33315__auto___35205,out){
return (function() {
var cljs$core$async$state_machine__33228__auto__ = null;
var cljs$core$async$state_machine__33228__auto____0 = (function (){
var statearr_35200 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35200[(0)] = cljs$core$async$state_machine__33228__auto__);

(statearr_35200[(1)] = (1));

return statearr_35200;
});
var cljs$core$async$state_machine__33228__auto____1 = (function (state_35177){
while(true){
var ret_value__33229__auto__ = (function (){try{while(true){
var result__33230__auto__ = switch__33227__auto__.call(null,state_35177);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33230__auto__;
}
break;
}
}catch (e35201){if((e35201 instanceof Object)){
var ex__33231__auto__ = e35201;
var statearr_35202_35220 = state_35177;
(statearr_35202_35220[(5)] = ex__33231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35177);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35201;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35221 = state_35177;
state_35177 = G__35221;
continue;
} else {
return ret_value__33229__auto__;
}
break;
}
});
cljs$core$async$state_machine__33228__auto__ = function(state_35177){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33228__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33228__auto____1.call(this,state_35177);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33228__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33228__auto____0;
cljs$core$async$state_machine__33228__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33228__auto____1;
return cljs$core$async$state_machine__33228__auto__;
})()
;})(switch__33227__auto__,c__33315__auto___35205,out))
})();
var state__33317__auto__ = (function (){var statearr_35203 = f__33316__auto__.call(null);
(statearr_35203[(6)] = c__33315__auto___35205);

return statearr_35203;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33317__auto__);
});})(c__33315__auto___35205,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1501628490424