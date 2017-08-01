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
var G__42348 = arguments.length;
switch (G__42348) {
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
if(typeof cljs.core.async.t_cljs$core$async42349 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42349 = (function (f,blockable,meta42350){
this.f = f;
this.blockable = blockable;
this.meta42350 = meta42350;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42349.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42351,meta42350__$1){
var self__ = this;
var _42351__$1 = this;
return (new cljs.core.async.t_cljs$core$async42349(self__.f,self__.blockable,meta42350__$1));
});

cljs.core.async.t_cljs$core$async42349.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42351){
var self__ = this;
var _42351__$1 = this;
return self__.meta42350;
});

cljs.core.async.t_cljs$core$async42349.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42349.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async42349.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async42349.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async42349.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta42350","meta42350",-1972047009,null)], null);
});

cljs.core.async.t_cljs$core$async42349.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42349.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42349";

cljs.core.async.t_cljs$core$async42349.cljs$lang$ctorPrWriter = (function (this__27663__auto__,writer__27664__auto__,opt__27665__auto__){
return cljs.core._write.call(null,writer__27664__auto__,"cljs.core.async/t_cljs$core$async42349");
});

cljs.core.async.__GT_t_cljs$core$async42349 = (function cljs$core$async$__GT_t_cljs$core$async42349(f__$1,blockable__$1,meta42350){
return (new cljs.core.async.t_cljs$core$async42349(f__$1,blockable__$1,meta42350));
});

}

return (new cljs.core.async.t_cljs$core$async42349(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__42355 = arguments.length;
switch (G__42355) {
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
var G__42358 = arguments.length;
switch (G__42358) {
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
var G__42361 = arguments.length;
switch (G__42361) {
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
var val_42363 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_42363);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_42363,ret){
return (function (){
return fn1.call(null,val_42363);
});})(val_42363,ret))
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
var G__42365 = arguments.length;
switch (G__42365) {
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
var n__27976__auto___42367 = n;
var x_42368 = (0);
while(true){
if((x_42368 < n__27976__auto___42367)){
(a[x_42368] = (0));

var G__42369 = (x_42368 + (1));
x_42368 = G__42369;
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

var G__42370 = (i + (1));
i = G__42370;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async42371 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42371 = (function (flag,meta42372){
this.flag = flag;
this.meta42372 = meta42372;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42371.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_42373,meta42372__$1){
var self__ = this;
var _42373__$1 = this;
return (new cljs.core.async.t_cljs$core$async42371(self__.flag,meta42372__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async42371.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_42373){
var self__ = this;
var _42373__$1 = this;
return self__.meta42372;
});})(flag))
;

cljs.core.async.t_cljs$core$async42371.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42371.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async42371.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async42371.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async42371.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta42372","meta42372",-948633902,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async42371.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42371.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42371";

cljs.core.async.t_cljs$core$async42371.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__27663__auto__,writer__27664__auto__,opt__27665__auto__){
return cljs.core._write.call(null,writer__27664__auto__,"cljs.core.async/t_cljs$core$async42371");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async42371 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async42371(flag__$1,meta42372){
return (new cljs.core.async.t_cljs$core$async42371(flag__$1,meta42372));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async42371(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async42374 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42374 = (function (flag,cb,meta42375){
this.flag = flag;
this.cb = cb;
this.meta42375 = meta42375;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42374.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42376,meta42375__$1){
var self__ = this;
var _42376__$1 = this;
return (new cljs.core.async.t_cljs$core$async42374(self__.flag,self__.cb,meta42375__$1));
});

cljs.core.async.t_cljs$core$async42374.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42376){
var self__ = this;
var _42376__$1 = this;
return self__.meta42375;
});

cljs.core.async.t_cljs$core$async42374.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42374.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async42374.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async42374.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async42374.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta42375","meta42375",1359859158,null)], null);
});

cljs.core.async.t_cljs$core$async42374.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42374.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42374";

cljs.core.async.t_cljs$core$async42374.cljs$lang$ctorPrWriter = (function (this__27663__auto__,writer__27664__auto__,opt__27665__auto__){
return cljs.core._write.call(null,writer__27664__auto__,"cljs.core.async/t_cljs$core$async42374");
});

cljs.core.async.__GT_t_cljs$core$async42374 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async42374(flag__$1,cb__$1,meta42375){
return (new cljs.core.async.t_cljs$core$async42374(flag__$1,cb__$1,meta42375));
});

}

return (new cljs.core.async.t_cljs$core$async42374(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__42377_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42377_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__42378_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42378_SHARP_,port], null));
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
var G__42379 = (i + (1));
i = G__42379;
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
var len__28177__auto___42385 = arguments.length;
var i__28178__auto___42386 = (0);
while(true){
if((i__28178__auto___42386 < len__28177__auto___42385)){
args__28184__auto__.push((arguments[i__28178__auto___42386]));

var G__42387 = (i__28178__auto___42386 + (1));
i__28178__auto___42386 = G__42387;
continue;
} else {
}
break;
}

var argseq__28185__auto__ = ((((1) < args__28184__auto__.length))?(new cljs.core.IndexedSeq(args__28184__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28185__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__42382){
var map__42383 = p__42382;
var map__42383__$1 = ((((!((map__42383 == null)))?((((map__42383.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42383.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42383):map__42383);
var opts = map__42383__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq42380){
var G__42381 = cljs.core.first.call(null,seq42380);
var seq42380__$1 = cljs.core.next.call(null,seq42380);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__42381,seq42380__$1);
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
var G__42389 = arguments.length;
switch (G__42389) {
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
var c__33321__auto___42435 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33321__auto___42435){
return (function (){
var f__33322__auto__ = (function (){var switch__33233__auto__ = ((function (c__33321__auto___42435){
return (function (state_42413){
var state_val_42414 = (state_42413[(1)]);
if((state_val_42414 === (7))){
var inst_42409 = (state_42413[(2)]);
var state_42413__$1 = state_42413;
var statearr_42415_42436 = state_42413__$1;
(statearr_42415_42436[(2)] = inst_42409);

(statearr_42415_42436[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42414 === (1))){
var state_42413__$1 = state_42413;
var statearr_42416_42437 = state_42413__$1;
(statearr_42416_42437[(2)] = null);

(statearr_42416_42437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42414 === (4))){
var inst_42392 = (state_42413[(7)]);
var inst_42392__$1 = (state_42413[(2)]);
var inst_42393 = (inst_42392__$1 == null);
var state_42413__$1 = (function (){var statearr_42417 = state_42413;
(statearr_42417[(7)] = inst_42392__$1);

return statearr_42417;
})();
if(cljs.core.truth_(inst_42393)){
var statearr_42418_42438 = state_42413__$1;
(statearr_42418_42438[(1)] = (5));

} else {
var statearr_42419_42439 = state_42413__$1;
(statearr_42419_42439[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42414 === (13))){
var state_42413__$1 = state_42413;
var statearr_42420_42440 = state_42413__$1;
(statearr_42420_42440[(2)] = null);

(statearr_42420_42440[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42414 === (6))){
var inst_42392 = (state_42413[(7)]);
var state_42413__$1 = state_42413;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42413__$1,(11),to,inst_42392);
} else {
if((state_val_42414 === (3))){
var inst_42411 = (state_42413[(2)]);
var state_42413__$1 = state_42413;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42413__$1,inst_42411);
} else {
if((state_val_42414 === (12))){
var state_42413__$1 = state_42413;
var statearr_42421_42441 = state_42413__$1;
(statearr_42421_42441[(2)] = null);

(statearr_42421_42441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42414 === (2))){
var state_42413__$1 = state_42413;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42413__$1,(4),from);
} else {
if((state_val_42414 === (11))){
var inst_42402 = (state_42413[(2)]);
var state_42413__$1 = state_42413;
if(cljs.core.truth_(inst_42402)){
var statearr_42422_42442 = state_42413__$1;
(statearr_42422_42442[(1)] = (12));

} else {
var statearr_42423_42443 = state_42413__$1;
(statearr_42423_42443[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42414 === (9))){
var state_42413__$1 = state_42413;
var statearr_42424_42444 = state_42413__$1;
(statearr_42424_42444[(2)] = null);

(statearr_42424_42444[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42414 === (5))){
var state_42413__$1 = state_42413;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42425_42445 = state_42413__$1;
(statearr_42425_42445[(1)] = (8));

} else {
var statearr_42426_42446 = state_42413__$1;
(statearr_42426_42446[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42414 === (14))){
var inst_42407 = (state_42413[(2)]);
var state_42413__$1 = state_42413;
var statearr_42427_42447 = state_42413__$1;
(statearr_42427_42447[(2)] = inst_42407);

(statearr_42427_42447[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42414 === (10))){
var inst_42399 = (state_42413[(2)]);
var state_42413__$1 = state_42413;
var statearr_42428_42448 = state_42413__$1;
(statearr_42428_42448[(2)] = inst_42399);

(statearr_42428_42448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42414 === (8))){
var inst_42396 = cljs.core.async.close_BANG_.call(null,to);
var state_42413__$1 = state_42413;
var statearr_42429_42449 = state_42413__$1;
(statearr_42429_42449[(2)] = inst_42396);

(statearr_42429_42449[(1)] = (10));


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
});})(c__33321__auto___42435))
;
return ((function (switch__33233__auto__,c__33321__auto___42435){
return (function() {
var cljs$core$async$state_machine__33234__auto__ = null;
var cljs$core$async$state_machine__33234__auto____0 = (function (){
var statearr_42430 = [null,null,null,null,null,null,null,null];
(statearr_42430[(0)] = cljs$core$async$state_machine__33234__auto__);

(statearr_42430[(1)] = (1));

return statearr_42430;
});
var cljs$core$async$state_machine__33234__auto____1 = (function (state_42413){
while(true){
var ret_value__33235__auto__ = (function (){try{while(true){
var result__33236__auto__ = switch__33233__auto__.call(null,state_42413);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33236__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33236__auto__;
}
break;
}
}catch (e42431){if((e42431 instanceof Object)){
var ex__33237__auto__ = e42431;
var statearr_42432_42450 = state_42413;
(statearr_42432_42450[(5)] = ex__33237__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42413);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42431;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42451 = state_42413;
state_42413 = G__42451;
continue;
} else {
return ret_value__33235__auto__;
}
break;
}
});
cljs$core$async$state_machine__33234__auto__ = function(state_42413){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33234__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33234__auto____1.call(this,state_42413);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33234__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33234__auto____0;
cljs$core$async$state_machine__33234__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33234__auto____1;
return cljs$core$async$state_machine__33234__auto__;
})()
;})(switch__33233__auto__,c__33321__auto___42435))
})();
var state__33323__auto__ = (function (){var statearr_42433 = f__33322__auto__.call(null);
(statearr_42433[(6)] = c__33321__auto___42435);

return statearr_42433;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33323__auto__);
});})(c__33321__auto___42435))
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
return (function (p__42452){
var vec__42453 = p__42452;
var v = cljs.core.nth.call(null,vec__42453,(0),null);
var p = cljs.core.nth.call(null,vec__42453,(1),null);
var job = vec__42453;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__33321__auto___42624 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33321__auto___42624,res,vec__42453,v,p,job,jobs,results){
return (function (){
var f__33322__auto__ = (function (){var switch__33233__auto__ = ((function (c__33321__auto___42624,res,vec__42453,v,p,job,jobs,results){
return (function (state_42460){
var state_val_42461 = (state_42460[(1)]);
if((state_val_42461 === (1))){
var state_42460__$1 = state_42460;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42460__$1,(2),res,v);
} else {
if((state_val_42461 === (2))){
var inst_42457 = (state_42460[(2)]);
var inst_42458 = cljs.core.async.close_BANG_.call(null,res);
var state_42460__$1 = (function (){var statearr_42462 = state_42460;
(statearr_42462[(7)] = inst_42457);

return statearr_42462;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42460__$1,inst_42458);
} else {
return null;
}
}
});})(c__33321__auto___42624,res,vec__42453,v,p,job,jobs,results))
;
return ((function (switch__33233__auto__,c__33321__auto___42624,res,vec__42453,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33234__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33234__auto____0 = (function (){
var statearr_42463 = [null,null,null,null,null,null,null,null];
(statearr_42463[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33234__auto__);

(statearr_42463[(1)] = (1));

return statearr_42463;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33234__auto____1 = (function (state_42460){
while(true){
var ret_value__33235__auto__ = (function (){try{while(true){
var result__33236__auto__ = switch__33233__auto__.call(null,state_42460);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33236__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33236__auto__;
}
break;
}
}catch (e42464){if((e42464 instanceof Object)){
var ex__33237__auto__ = e42464;
var statearr_42465_42625 = state_42460;
(statearr_42465_42625[(5)] = ex__33237__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42460);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42464;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42626 = state_42460;
state_42460 = G__42626;
continue;
} else {
return ret_value__33235__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33234__auto__ = function(state_42460){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33234__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33234__auto____1.call(this,state_42460);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33234__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33234__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33234__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33234__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33234__auto__;
})()
;})(switch__33233__auto__,c__33321__auto___42624,res,vec__42453,v,p,job,jobs,results))
})();
var state__33323__auto__ = (function (){var statearr_42466 = f__33322__auto__.call(null);
(statearr_42466[(6)] = c__33321__auto___42624);

return statearr_42466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33323__auto__);
});})(c__33321__auto___42624,res,vec__42453,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__42467){
var vec__42468 = p__42467;
var v = cljs.core.nth.call(null,vec__42468,(0),null);
var p = cljs.core.nth.call(null,vec__42468,(1),null);
var job = vec__42468;
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
var n__27976__auto___42627 = n;
var __42628 = (0);
while(true){
if((__42628 < n__27976__auto___42627)){
var G__42471_42629 = type;
var G__42471_42630__$1 = (((G__42471_42629 instanceof cljs.core.Keyword))?G__42471_42629.fqn:null);
switch (G__42471_42630__$1) {
case "compute":
var c__33321__auto___42632 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__42628,c__33321__auto___42632,G__42471_42629,G__42471_42630__$1,n__27976__auto___42627,jobs,results,process,async){
return (function (){
var f__33322__auto__ = (function (){var switch__33233__auto__ = ((function (__42628,c__33321__auto___42632,G__42471_42629,G__42471_42630__$1,n__27976__auto___42627,jobs,results,process,async){
return (function (state_42484){
var state_val_42485 = (state_42484[(1)]);
if((state_val_42485 === (1))){
var state_42484__$1 = state_42484;
var statearr_42486_42633 = state_42484__$1;
(statearr_42486_42633[(2)] = null);

(statearr_42486_42633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42485 === (2))){
var state_42484__$1 = state_42484;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42484__$1,(4),jobs);
} else {
if((state_val_42485 === (3))){
var inst_42482 = (state_42484[(2)]);
var state_42484__$1 = state_42484;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42484__$1,inst_42482);
} else {
if((state_val_42485 === (4))){
var inst_42474 = (state_42484[(2)]);
var inst_42475 = process.call(null,inst_42474);
var state_42484__$1 = state_42484;
if(cljs.core.truth_(inst_42475)){
var statearr_42487_42634 = state_42484__$1;
(statearr_42487_42634[(1)] = (5));

} else {
var statearr_42488_42635 = state_42484__$1;
(statearr_42488_42635[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42485 === (5))){
var state_42484__$1 = state_42484;
var statearr_42489_42636 = state_42484__$1;
(statearr_42489_42636[(2)] = null);

(statearr_42489_42636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42485 === (6))){
var state_42484__$1 = state_42484;
var statearr_42490_42637 = state_42484__$1;
(statearr_42490_42637[(2)] = null);

(statearr_42490_42637[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42485 === (7))){
var inst_42480 = (state_42484[(2)]);
var state_42484__$1 = state_42484;
var statearr_42491_42638 = state_42484__$1;
(statearr_42491_42638[(2)] = inst_42480);

(statearr_42491_42638[(1)] = (3));


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
});})(__42628,c__33321__auto___42632,G__42471_42629,G__42471_42630__$1,n__27976__auto___42627,jobs,results,process,async))
;
return ((function (__42628,switch__33233__auto__,c__33321__auto___42632,G__42471_42629,G__42471_42630__$1,n__27976__auto___42627,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33234__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33234__auto____0 = (function (){
var statearr_42492 = [null,null,null,null,null,null,null];
(statearr_42492[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33234__auto__);

(statearr_42492[(1)] = (1));

return statearr_42492;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33234__auto____1 = (function (state_42484){
while(true){
var ret_value__33235__auto__ = (function (){try{while(true){
var result__33236__auto__ = switch__33233__auto__.call(null,state_42484);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33236__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33236__auto__;
}
break;
}
}catch (e42493){if((e42493 instanceof Object)){
var ex__33237__auto__ = e42493;
var statearr_42494_42639 = state_42484;
(statearr_42494_42639[(5)] = ex__33237__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42484);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42493;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42640 = state_42484;
state_42484 = G__42640;
continue;
} else {
return ret_value__33235__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33234__auto__ = function(state_42484){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33234__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33234__auto____1.call(this,state_42484);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33234__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33234__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33234__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33234__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33234__auto__;
})()
;})(__42628,switch__33233__auto__,c__33321__auto___42632,G__42471_42629,G__42471_42630__$1,n__27976__auto___42627,jobs,results,process,async))
})();
var state__33323__auto__ = (function (){var statearr_42495 = f__33322__auto__.call(null);
(statearr_42495[(6)] = c__33321__auto___42632);

return statearr_42495;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33323__auto__);
});})(__42628,c__33321__auto___42632,G__42471_42629,G__42471_42630__$1,n__27976__auto___42627,jobs,results,process,async))
);


break;
case "async":
var c__33321__auto___42641 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__42628,c__33321__auto___42641,G__42471_42629,G__42471_42630__$1,n__27976__auto___42627,jobs,results,process,async){
return (function (){
var f__33322__auto__ = (function (){var switch__33233__auto__ = ((function (__42628,c__33321__auto___42641,G__42471_42629,G__42471_42630__$1,n__27976__auto___42627,jobs,results,process,async){
return (function (state_42508){
var state_val_42509 = (state_42508[(1)]);
if((state_val_42509 === (1))){
var state_42508__$1 = state_42508;
var statearr_42510_42642 = state_42508__$1;
(statearr_42510_42642[(2)] = null);

(statearr_42510_42642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42509 === (2))){
var state_42508__$1 = state_42508;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42508__$1,(4),jobs);
} else {
if((state_val_42509 === (3))){
var inst_42506 = (state_42508[(2)]);
var state_42508__$1 = state_42508;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42508__$1,inst_42506);
} else {
if((state_val_42509 === (4))){
var inst_42498 = (state_42508[(2)]);
var inst_42499 = async.call(null,inst_42498);
var state_42508__$1 = state_42508;
if(cljs.core.truth_(inst_42499)){
var statearr_42511_42643 = state_42508__$1;
(statearr_42511_42643[(1)] = (5));

} else {
var statearr_42512_42644 = state_42508__$1;
(statearr_42512_42644[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42509 === (5))){
var state_42508__$1 = state_42508;
var statearr_42513_42645 = state_42508__$1;
(statearr_42513_42645[(2)] = null);

(statearr_42513_42645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42509 === (6))){
var state_42508__$1 = state_42508;
var statearr_42514_42646 = state_42508__$1;
(statearr_42514_42646[(2)] = null);

(statearr_42514_42646[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42509 === (7))){
var inst_42504 = (state_42508[(2)]);
var state_42508__$1 = state_42508;
var statearr_42515_42647 = state_42508__$1;
(statearr_42515_42647[(2)] = inst_42504);

(statearr_42515_42647[(1)] = (3));


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
});})(__42628,c__33321__auto___42641,G__42471_42629,G__42471_42630__$1,n__27976__auto___42627,jobs,results,process,async))
;
return ((function (__42628,switch__33233__auto__,c__33321__auto___42641,G__42471_42629,G__42471_42630__$1,n__27976__auto___42627,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33234__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33234__auto____0 = (function (){
var statearr_42516 = [null,null,null,null,null,null,null];
(statearr_42516[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33234__auto__);

(statearr_42516[(1)] = (1));

return statearr_42516;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33234__auto____1 = (function (state_42508){
while(true){
var ret_value__33235__auto__ = (function (){try{while(true){
var result__33236__auto__ = switch__33233__auto__.call(null,state_42508);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33236__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33236__auto__;
}
break;
}
}catch (e42517){if((e42517 instanceof Object)){
var ex__33237__auto__ = e42517;
var statearr_42518_42648 = state_42508;
(statearr_42518_42648[(5)] = ex__33237__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42508);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42517;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42649 = state_42508;
state_42508 = G__42649;
continue;
} else {
return ret_value__33235__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33234__auto__ = function(state_42508){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33234__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33234__auto____1.call(this,state_42508);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33234__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33234__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33234__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33234__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33234__auto__;
})()
;})(__42628,switch__33233__auto__,c__33321__auto___42641,G__42471_42629,G__42471_42630__$1,n__27976__auto___42627,jobs,results,process,async))
})();
var state__33323__auto__ = (function (){var statearr_42519 = f__33322__auto__.call(null);
(statearr_42519[(6)] = c__33321__auto___42641);

return statearr_42519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33323__auto__);
});})(__42628,c__33321__auto___42641,G__42471_42629,G__42471_42630__$1,n__27976__auto___42627,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42471_42630__$1)].join('')));

}

var G__42650 = (__42628 + (1));
__42628 = G__42650;
continue;
} else {
}
break;
}

var c__33321__auto___42651 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33321__auto___42651,jobs,results,process,async){
return (function (){
var f__33322__auto__ = (function (){var switch__33233__auto__ = ((function (c__33321__auto___42651,jobs,results,process,async){
return (function (state_42541){
var state_val_42542 = (state_42541[(1)]);
if((state_val_42542 === (1))){
var state_42541__$1 = state_42541;
var statearr_42543_42652 = state_42541__$1;
(statearr_42543_42652[(2)] = null);

(statearr_42543_42652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42542 === (2))){
var state_42541__$1 = state_42541;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42541__$1,(4),from);
} else {
if((state_val_42542 === (3))){
var inst_42539 = (state_42541[(2)]);
var state_42541__$1 = state_42541;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42541__$1,inst_42539);
} else {
if((state_val_42542 === (4))){
var inst_42522 = (state_42541[(7)]);
var inst_42522__$1 = (state_42541[(2)]);
var inst_42523 = (inst_42522__$1 == null);
var state_42541__$1 = (function (){var statearr_42544 = state_42541;
(statearr_42544[(7)] = inst_42522__$1);

return statearr_42544;
})();
if(cljs.core.truth_(inst_42523)){
var statearr_42545_42653 = state_42541__$1;
(statearr_42545_42653[(1)] = (5));

} else {
var statearr_42546_42654 = state_42541__$1;
(statearr_42546_42654[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42542 === (5))){
var inst_42525 = cljs.core.async.close_BANG_.call(null,jobs);
var state_42541__$1 = state_42541;
var statearr_42547_42655 = state_42541__$1;
(statearr_42547_42655[(2)] = inst_42525);

(statearr_42547_42655[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42542 === (6))){
var inst_42527 = (state_42541[(8)]);
var inst_42522 = (state_42541[(7)]);
var inst_42527__$1 = cljs.core.async.chan.call(null,(1));
var inst_42528 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42529 = [inst_42522,inst_42527__$1];
var inst_42530 = (new cljs.core.PersistentVector(null,2,(5),inst_42528,inst_42529,null));
var state_42541__$1 = (function (){var statearr_42548 = state_42541;
(statearr_42548[(8)] = inst_42527__$1);

return statearr_42548;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42541__$1,(8),jobs,inst_42530);
} else {
if((state_val_42542 === (7))){
var inst_42537 = (state_42541[(2)]);
var state_42541__$1 = state_42541;
var statearr_42549_42656 = state_42541__$1;
(statearr_42549_42656[(2)] = inst_42537);

(statearr_42549_42656[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42542 === (8))){
var inst_42527 = (state_42541[(8)]);
var inst_42532 = (state_42541[(2)]);
var state_42541__$1 = (function (){var statearr_42550 = state_42541;
(statearr_42550[(9)] = inst_42532);

return statearr_42550;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42541__$1,(9),results,inst_42527);
} else {
if((state_val_42542 === (9))){
var inst_42534 = (state_42541[(2)]);
var state_42541__$1 = (function (){var statearr_42551 = state_42541;
(statearr_42551[(10)] = inst_42534);

return statearr_42551;
})();
var statearr_42552_42657 = state_42541__$1;
(statearr_42552_42657[(2)] = null);

(statearr_42552_42657[(1)] = (2));


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
});})(c__33321__auto___42651,jobs,results,process,async))
;
return ((function (switch__33233__auto__,c__33321__auto___42651,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33234__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33234__auto____0 = (function (){
var statearr_42553 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42553[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33234__auto__);

(statearr_42553[(1)] = (1));

return statearr_42553;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33234__auto____1 = (function (state_42541){
while(true){
var ret_value__33235__auto__ = (function (){try{while(true){
var result__33236__auto__ = switch__33233__auto__.call(null,state_42541);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33236__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33236__auto__;
}
break;
}
}catch (e42554){if((e42554 instanceof Object)){
var ex__33237__auto__ = e42554;
var statearr_42555_42658 = state_42541;
(statearr_42555_42658[(5)] = ex__33237__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42541);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42554;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42659 = state_42541;
state_42541 = G__42659;
continue;
} else {
return ret_value__33235__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33234__auto__ = function(state_42541){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33234__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33234__auto____1.call(this,state_42541);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33234__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33234__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33234__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33234__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33234__auto__;
})()
;})(switch__33233__auto__,c__33321__auto___42651,jobs,results,process,async))
})();
var state__33323__auto__ = (function (){var statearr_42556 = f__33322__auto__.call(null);
(statearr_42556[(6)] = c__33321__auto___42651);

return statearr_42556;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33323__auto__);
});})(c__33321__auto___42651,jobs,results,process,async))
);


var c__33321__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33321__auto__,jobs,results,process,async){
return (function (){
var f__33322__auto__ = (function (){var switch__33233__auto__ = ((function (c__33321__auto__,jobs,results,process,async){
return (function (state_42594){
var state_val_42595 = (state_42594[(1)]);
if((state_val_42595 === (7))){
var inst_42590 = (state_42594[(2)]);
var state_42594__$1 = state_42594;
var statearr_42596_42660 = state_42594__$1;
(statearr_42596_42660[(2)] = inst_42590);

(statearr_42596_42660[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42595 === (20))){
var state_42594__$1 = state_42594;
var statearr_42597_42661 = state_42594__$1;
(statearr_42597_42661[(2)] = null);

(statearr_42597_42661[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42595 === (1))){
var state_42594__$1 = state_42594;
var statearr_42598_42662 = state_42594__$1;
(statearr_42598_42662[(2)] = null);

(statearr_42598_42662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42595 === (4))){
var inst_42559 = (state_42594[(7)]);
var inst_42559__$1 = (state_42594[(2)]);
var inst_42560 = (inst_42559__$1 == null);
var state_42594__$1 = (function (){var statearr_42599 = state_42594;
(statearr_42599[(7)] = inst_42559__$1);

return statearr_42599;
})();
if(cljs.core.truth_(inst_42560)){
var statearr_42600_42663 = state_42594__$1;
(statearr_42600_42663[(1)] = (5));

} else {
var statearr_42601_42664 = state_42594__$1;
(statearr_42601_42664[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42595 === (15))){
var inst_42572 = (state_42594[(8)]);
var state_42594__$1 = state_42594;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42594__$1,(18),to,inst_42572);
} else {
if((state_val_42595 === (21))){
var inst_42585 = (state_42594[(2)]);
var state_42594__$1 = state_42594;
var statearr_42602_42665 = state_42594__$1;
(statearr_42602_42665[(2)] = inst_42585);

(statearr_42602_42665[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42595 === (13))){
var inst_42587 = (state_42594[(2)]);
var state_42594__$1 = (function (){var statearr_42603 = state_42594;
(statearr_42603[(9)] = inst_42587);

return statearr_42603;
})();
var statearr_42604_42666 = state_42594__$1;
(statearr_42604_42666[(2)] = null);

(statearr_42604_42666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42595 === (6))){
var inst_42559 = (state_42594[(7)]);
var state_42594__$1 = state_42594;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42594__$1,(11),inst_42559);
} else {
if((state_val_42595 === (17))){
var inst_42580 = (state_42594[(2)]);
var state_42594__$1 = state_42594;
if(cljs.core.truth_(inst_42580)){
var statearr_42605_42667 = state_42594__$1;
(statearr_42605_42667[(1)] = (19));

} else {
var statearr_42606_42668 = state_42594__$1;
(statearr_42606_42668[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42595 === (3))){
var inst_42592 = (state_42594[(2)]);
var state_42594__$1 = state_42594;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42594__$1,inst_42592);
} else {
if((state_val_42595 === (12))){
var inst_42569 = (state_42594[(10)]);
var state_42594__$1 = state_42594;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42594__$1,(14),inst_42569);
} else {
if((state_val_42595 === (2))){
var state_42594__$1 = state_42594;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42594__$1,(4),results);
} else {
if((state_val_42595 === (19))){
var state_42594__$1 = state_42594;
var statearr_42607_42669 = state_42594__$1;
(statearr_42607_42669[(2)] = null);

(statearr_42607_42669[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42595 === (11))){
var inst_42569 = (state_42594[(2)]);
var state_42594__$1 = (function (){var statearr_42608 = state_42594;
(statearr_42608[(10)] = inst_42569);

return statearr_42608;
})();
var statearr_42609_42670 = state_42594__$1;
(statearr_42609_42670[(2)] = null);

(statearr_42609_42670[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42595 === (9))){
var state_42594__$1 = state_42594;
var statearr_42610_42671 = state_42594__$1;
(statearr_42610_42671[(2)] = null);

(statearr_42610_42671[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42595 === (5))){
var state_42594__$1 = state_42594;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42611_42672 = state_42594__$1;
(statearr_42611_42672[(1)] = (8));

} else {
var statearr_42612_42673 = state_42594__$1;
(statearr_42612_42673[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42595 === (14))){
var inst_42572 = (state_42594[(8)]);
var inst_42574 = (state_42594[(11)]);
var inst_42572__$1 = (state_42594[(2)]);
var inst_42573 = (inst_42572__$1 == null);
var inst_42574__$1 = cljs.core.not.call(null,inst_42573);
var state_42594__$1 = (function (){var statearr_42613 = state_42594;
(statearr_42613[(8)] = inst_42572__$1);

(statearr_42613[(11)] = inst_42574__$1);

return statearr_42613;
})();
if(inst_42574__$1){
var statearr_42614_42674 = state_42594__$1;
(statearr_42614_42674[(1)] = (15));

} else {
var statearr_42615_42675 = state_42594__$1;
(statearr_42615_42675[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42595 === (16))){
var inst_42574 = (state_42594[(11)]);
var state_42594__$1 = state_42594;
var statearr_42616_42676 = state_42594__$1;
(statearr_42616_42676[(2)] = inst_42574);

(statearr_42616_42676[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42595 === (10))){
var inst_42566 = (state_42594[(2)]);
var state_42594__$1 = state_42594;
var statearr_42617_42677 = state_42594__$1;
(statearr_42617_42677[(2)] = inst_42566);

(statearr_42617_42677[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42595 === (18))){
var inst_42577 = (state_42594[(2)]);
var state_42594__$1 = state_42594;
var statearr_42618_42678 = state_42594__$1;
(statearr_42618_42678[(2)] = inst_42577);

(statearr_42618_42678[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42595 === (8))){
var inst_42563 = cljs.core.async.close_BANG_.call(null,to);
var state_42594__$1 = state_42594;
var statearr_42619_42679 = state_42594__$1;
(statearr_42619_42679[(2)] = inst_42563);

(statearr_42619_42679[(1)] = (10));


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
});})(c__33321__auto__,jobs,results,process,async))
;
return ((function (switch__33233__auto__,c__33321__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33234__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33234__auto____0 = (function (){
var statearr_42620 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42620[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33234__auto__);

(statearr_42620[(1)] = (1));

return statearr_42620;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33234__auto____1 = (function (state_42594){
while(true){
var ret_value__33235__auto__ = (function (){try{while(true){
var result__33236__auto__ = switch__33233__auto__.call(null,state_42594);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33236__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33236__auto__;
}
break;
}
}catch (e42621){if((e42621 instanceof Object)){
var ex__33237__auto__ = e42621;
var statearr_42622_42680 = state_42594;
(statearr_42622_42680[(5)] = ex__33237__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42594);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42621;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42681 = state_42594;
state_42594 = G__42681;
continue;
} else {
return ret_value__33235__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33234__auto__ = function(state_42594){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33234__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33234__auto____1.call(this,state_42594);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33234__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33234__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33234__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33234__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33234__auto__;
})()
;})(switch__33233__auto__,c__33321__auto__,jobs,results,process,async))
})();
var state__33323__auto__ = (function (){var statearr_42623 = f__33322__auto__.call(null);
(statearr_42623[(6)] = c__33321__auto__);

return statearr_42623;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33323__auto__);
});})(c__33321__auto__,jobs,results,process,async))
);

return c__33321__auto__;
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
var G__42683 = arguments.length;
switch (G__42683) {
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
var G__42686 = arguments.length;
switch (G__42686) {
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
var G__42689 = arguments.length;
switch (G__42689) {
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
var c__33321__auto___42738 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33321__auto___42738,tc,fc){
return (function (){
var f__33322__auto__ = (function (){var switch__33233__auto__ = ((function (c__33321__auto___42738,tc,fc){
return (function (state_42715){
var state_val_42716 = (state_42715[(1)]);
if((state_val_42716 === (7))){
var inst_42711 = (state_42715[(2)]);
var state_42715__$1 = state_42715;
var statearr_42717_42739 = state_42715__$1;
(statearr_42717_42739[(2)] = inst_42711);

(statearr_42717_42739[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42716 === (1))){
var state_42715__$1 = state_42715;
var statearr_42718_42740 = state_42715__$1;
(statearr_42718_42740[(2)] = null);

(statearr_42718_42740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42716 === (4))){
var inst_42692 = (state_42715[(7)]);
var inst_42692__$1 = (state_42715[(2)]);
var inst_42693 = (inst_42692__$1 == null);
var state_42715__$1 = (function (){var statearr_42719 = state_42715;
(statearr_42719[(7)] = inst_42692__$1);

return statearr_42719;
})();
if(cljs.core.truth_(inst_42693)){
var statearr_42720_42741 = state_42715__$1;
(statearr_42720_42741[(1)] = (5));

} else {
var statearr_42721_42742 = state_42715__$1;
(statearr_42721_42742[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42716 === (13))){
var state_42715__$1 = state_42715;
var statearr_42722_42743 = state_42715__$1;
(statearr_42722_42743[(2)] = null);

(statearr_42722_42743[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42716 === (6))){
var inst_42692 = (state_42715[(7)]);
var inst_42698 = p.call(null,inst_42692);
var state_42715__$1 = state_42715;
if(cljs.core.truth_(inst_42698)){
var statearr_42723_42744 = state_42715__$1;
(statearr_42723_42744[(1)] = (9));

} else {
var statearr_42724_42745 = state_42715__$1;
(statearr_42724_42745[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42716 === (3))){
var inst_42713 = (state_42715[(2)]);
var state_42715__$1 = state_42715;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42715__$1,inst_42713);
} else {
if((state_val_42716 === (12))){
var state_42715__$1 = state_42715;
var statearr_42725_42746 = state_42715__$1;
(statearr_42725_42746[(2)] = null);

(statearr_42725_42746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42716 === (2))){
var state_42715__$1 = state_42715;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42715__$1,(4),ch);
} else {
if((state_val_42716 === (11))){
var inst_42692 = (state_42715[(7)]);
var inst_42702 = (state_42715[(2)]);
var state_42715__$1 = state_42715;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42715__$1,(8),inst_42702,inst_42692);
} else {
if((state_val_42716 === (9))){
var state_42715__$1 = state_42715;
var statearr_42726_42747 = state_42715__$1;
(statearr_42726_42747[(2)] = tc);

(statearr_42726_42747[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42716 === (5))){
var inst_42695 = cljs.core.async.close_BANG_.call(null,tc);
var inst_42696 = cljs.core.async.close_BANG_.call(null,fc);
var state_42715__$1 = (function (){var statearr_42727 = state_42715;
(statearr_42727[(8)] = inst_42695);

return statearr_42727;
})();
var statearr_42728_42748 = state_42715__$1;
(statearr_42728_42748[(2)] = inst_42696);

(statearr_42728_42748[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42716 === (14))){
var inst_42709 = (state_42715[(2)]);
var state_42715__$1 = state_42715;
var statearr_42729_42749 = state_42715__$1;
(statearr_42729_42749[(2)] = inst_42709);

(statearr_42729_42749[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42716 === (10))){
var state_42715__$1 = state_42715;
var statearr_42730_42750 = state_42715__$1;
(statearr_42730_42750[(2)] = fc);

(statearr_42730_42750[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42716 === (8))){
var inst_42704 = (state_42715[(2)]);
var state_42715__$1 = state_42715;
if(cljs.core.truth_(inst_42704)){
var statearr_42731_42751 = state_42715__$1;
(statearr_42731_42751[(1)] = (12));

} else {
var statearr_42732_42752 = state_42715__$1;
(statearr_42732_42752[(1)] = (13));

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
});})(c__33321__auto___42738,tc,fc))
;
return ((function (switch__33233__auto__,c__33321__auto___42738,tc,fc){
return (function() {
var cljs$core$async$state_machine__33234__auto__ = null;
var cljs$core$async$state_machine__33234__auto____0 = (function (){
var statearr_42733 = [null,null,null,null,null,null,null,null,null];
(statearr_42733[(0)] = cljs$core$async$state_machine__33234__auto__);

(statearr_42733[(1)] = (1));

return statearr_42733;
});
var cljs$core$async$state_machine__33234__auto____1 = (function (state_42715){
while(true){
var ret_value__33235__auto__ = (function (){try{while(true){
var result__33236__auto__ = switch__33233__auto__.call(null,state_42715);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33236__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33236__auto__;
}
break;
}
}catch (e42734){if((e42734 instanceof Object)){
var ex__33237__auto__ = e42734;
var statearr_42735_42753 = state_42715;
(statearr_42735_42753[(5)] = ex__33237__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42715);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42734;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42754 = state_42715;
state_42715 = G__42754;
continue;
} else {
return ret_value__33235__auto__;
}
break;
}
});
cljs$core$async$state_machine__33234__auto__ = function(state_42715){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33234__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33234__auto____1.call(this,state_42715);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33234__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33234__auto____0;
cljs$core$async$state_machine__33234__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33234__auto____1;
return cljs$core$async$state_machine__33234__auto__;
})()
;})(switch__33233__auto__,c__33321__auto___42738,tc,fc))
})();
var state__33323__auto__ = (function (){var statearr_42736 = f__33322__auto__.call(null);
(statearr_42736[(6)] = c__33321__auto___42738);

return statearr_42736;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33323__auto__);
});})(c__33321__auto___42738,tc,fc))
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
var c__33321__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33321__auto__){
return (function (){
var f__33322__auto__ = (function (){var switch__33233__auto__ = ((function (c__33321__auto__){
return (function (state_42775){
var state_val_42776 = (state_42775[(1)]);
if((state_val_42776 === (7))){
var inst_42771 = (state_42775[(2)]);
var state_42775__$1 = state_42775;
var statearr_42777_42795 = state_42775__$1;
(statearr_42777_42795[(2)] = inst_42771);

(statearr_42777_42795[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42776 === (1))){
var inst_42755 = init;
var state_42775__$1 = (function (){var statearr_42778 = state_42775;
(statearr_42778[(7)] = inst_42755);

return statearr_42778;
})();
var statearr_42779_42796 = state_42775__$1;
(statearr_42779_42796[(2)] = null);

(statearr_42779_42796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42776 === (4))){
var inst_42758 = (state_42775[(8)]);
var inst_42758__$1 = (state_42775[(2)]);
var inst_42759 = (inst_42758__$1 == null);
var state_42775__$1 = (function (){var statearr_42780 = state_42775;
(statearr_42780[(8)] = inst_42758__$1);

return statearr_42780;
})();
if(cljs.core.truth_(inst_42759)){
var statearr_42781_42797 = state_42775__$1;
(statearr_42781_42797[(1)] = (5));

} else {
var statearr_42782_42798 = state_42775__$1;
(statearr_42782_42798[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42776 === (6))){
var inst_42762 = (state_42775[(9)]);
var inst_42755 = (state_42775[(7)]);
var inst_42758 = (state_42775[(8)]);
var inst_42762__$1 = f.call(null,inst_42755,inst_42758);
var inst_42763 = cljs.core.reduced_QMARK_.call(null,inst_42762__$1);
var state_42775__$1 = (function (){var statearr_42783 = state_42775;
(statearr_42783[(9)] = inst_42762__$1);

return statearr_42783;
})();
if(inst_42763){
var statearr_42784_42799 = state_42775__$1;
(statearr_42784_42799[(1)] = (8));

} else {
var statearr_42785_42800 = state_42775__$1;
(statearr_42785_42800[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42776 === (3))){
var inst_42773 = (state_42775[(2)]);
var state_42775__$1 = state_42775;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42775__$1,inst_42773);
} else {
if((state_val_42776 === (2))){
var state_42775__$1 = state_42775;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42775__$1,(4),ch);
} else {
if((state_val_42776 === (9))){
var inst_42762 = (state_42775[(9)]);
var inst_42755 = inst_42762;
var state_42775__$1 = (function (){var statearr_42786 = state_42775;
(statearr_42786[(7)] = inst_42755);

return statearr_42786;
})();
var statearr_42787_42801 = state_42775__$1;
(statearr_42787_42801[(2)] = null);

(statearr_42787_42801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42776 === (5))){
var inst_42755 = (state_42775[(7)]);
var state_42775__$1 = state_42775;
var statearr_42788_42802 = state_42775__$1;
(statearr_42788_42802[(2)] = inst_42755);

(statearr_42788_42802[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42776 === (10))){
var inst_42769 = (state_42775[(2)]);
var state_42775__$1 = state_42775;
var statearr_42789_42803 = state_42775__$1;
(statearr_42789_42803[(2)] = inst_42769);

(statearr_42789_42803[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42776 === (8))){
var inst_42762 = (state_42775[(9)]);
var inst_42765 = cljs.core.deref.call(null,inst_42762);
var state_42775__$1 = state_42775;
var statearr_42790_42804 = state_42775__$1;
(statearr_42790_42804[(2)] = inst_42765);

(statearr_42790_42804[(1)] = (10));


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
});})(c__33321__auto__))
;
return ((function (switch__33233__auto__,c__33321__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__33234__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33234__auto____0 = (function (){
var statearr_42791 = [null,null,null,null,null,null,null,null,null,null];
(statearr_42791[(0)] = cljs$core$async$reduce_$_state_machine__33234__auto__);

(statearr_42791[(1)] = (1));

return statearr_42791;
});
var cljs$core$async$reduce_$_state_machine__33234__auto____1 = (function (state_42775){
while(true){
var ret_value__33235__auto__ = (function (){try{while(true){
var result__33236__auto__ = switch__33233__auto__.call(null,state_42775);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33236__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33236__auto__;
}
break;
}
}catch (e42792){if((e42792 instanceof Object)){
var ex__33237__auto__ = e42792;
var statearr_42793_42805 = state_42775;
(statearr_42793_42805[(5)] = ex__33237__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42775);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42792;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42806 = state_42775;
state_42775 = G__42806;
continue;
} else {
return ret_value__33235__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33234__auto__ = function(state_42775){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33234__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33234__auto____1.call(this,state_42775);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__33234__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33234__auto____0;
cljs$core$async$reduce_$_state_machine__33234__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33234__auto____1;
return cljs$core$async$reduce_$_state_machine__33234__auto__;
})()
;})(switch__33233__auto__,c__33321__auto__))
})();
var state__33323__auto__ = (function (){var statearr_42794 = f__33322__auto__.call(null);
(statearr_42794[(6)] = c__33321__auto__);

return statearr_42794;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33323__auto__);
});})(c__33321__auto__))
);

return c__33321__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__33321__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33321__auto__,f__$1){
return (function (){
var f__33322__auto__ = (function (){var switch__33233__auto__ = ((function (c__33321__auto__,f__$1){
return (function (state_42812){
var state_val_42813 = (state_42812[(1)]);
if((state_val_42813 === (1))){
var inst_42807 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_42812__$1 = state_42812;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42812__$1,(2),inst_42807);
} else {
if((state_val_42813 === (2))){
var inst_42809 = (state_42812[(2)]);
var inst_42810 = f__$1.call(null,inst_42809);
var state_42812__$1 = state_42812;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42812__$1,inst_42810);
} else {
return null;
}
}
});})(c__33321__auto__,f__$1))
;
return ((function (switch__33233__auto__,c__33321__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__33234__auto__ = null;
var cljs$core$async$transduce_$_state_machine__33234__auto____0 = (function (){
var statearr_42814 = [null,null,null,null,null,null,null];
(statearr_42814[(0)] = cljs$core$async$transduce_$_state_machine__33234__auto__);

(statearr_42814[(1)] = (1));

return statearr_42814;
});
var cljs$core$async$transduce_$_state_machine__33234__auto____1 = (function (state_42812){
while(true){
var ret_value__33235__auto__ = (function (){try{while(true){
var result__33236__auto__ = switch__33233__auto__.call(null,state_42812);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33236__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33236__auto__;
}
break;
}
}catch (e42815){if((e42815 instanceof Object)){
var ex__33237__auto__ = e42815;
var statearr_42816_42818 = state_42812;
(statearr_42816_42818[(5)] = ex__33237__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42812);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42815;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42819 = state_42812;
state_42812 = G__42819;
continue;
} else {
return ret_value__33235__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__33234__auto__ = function(state_42812){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__33234__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__33234__auto____1.call(this,state_42812);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__33234__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__33234__auto____0;
cljs$core$async$transduce_$_state_machine__33234__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__33234__auto____1;
return cljs$core$async$transduce_$_state_machine__33234__auto__;
})()
;})(switch__33233__auto__,c__33321__auto__,f__$1))
})();
var state__33323__auto__ = (function (){var statearr_42817 = f__33322__auto__.call(null);
(statearr_42817[(6)] = c__33321__auto__);

return statearr_42817;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33323__auto__);
});})(c__33321__auto__,f__$1))
);

return c__33321__auto__;
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
var G__42821 = arguments.length;
switch (G__42821) {
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
var c__33321__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33321__auto__){
return (function (){
var f__33322__auto__ = (function (){var switch__33233__auto__ = ((function (c__33321__auto__){
return (function (state_42846){
var state_val_42847 = (state_42846[(1)]);
if((state_val_42847 === (7))){
var inst_42828 = (state_42846[(2)]);
var state_42846__$1 = state_42846;
var statearr_42848_42869 = state_42846__$1;
(statearr_42848_42869[(2)] = inst_42828);

(statearr_42848_42869[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42847 === (1))){
var inst_42822 = cljs.core.seq.call(null,coll);
var inst_42823 = inst_42822;
var state_42846__$1 = (function (){var statearr_42849 = state_42846;
(statearr_42849[(7)] = inst_42823);

return statearr_42849;
})();
var statearr_42850_42870 = state_42846__$1;
(statearr_42850_42870[(2)] = null);

(statearr_42850_42870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42847 === (4))){
var inst_42823 = (state_42846[(7)]);
var inst_42826 = cljs.core.first.call(null,inst_42823);
var state_42846__$1 = state_42846;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42846__$1,(7),ch,inst_42826);
} else {
if((state_val_42847 === (13))){
var inst_42840 = (state_42846[(2)]);
var state_42846__$1 = state_42846;
var statearr_42851_42871 = state_42846__$1;
(statearr_42851_42871[(2)] = inst_42840);

(statearr_42851_42871[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42847 === (6))){
var inst_42831 = (state_42846[(2)]);
var state_42846__$1 = state_42846;
if(cljs.core.truth_(inst_42831)){
var statearr_42852_42872 = state_42846__$1;
(statearr_42852_42872[(1)] = (8));

} else {
var statearr_42853_42873 = state_42846__$1;
(statearr_42853_42873[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42847 === (3))){
var inst_42844 = (state_42846[(2)]);
var state_42846__$1 = state_42846;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42846__$1,inst_42844);
} else {
if((state_val_42847 === (12))){
var state_42846__$1 = state_42846;
var statearr_42854_42874 = state_42846__$1;
(statearr_42854_42874[(2)] = null);

(statearr_42854_42874[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42847 === (2))){
var inst_42823 = (state_42846[(7)]);
var state_42846__$1 = state_42846;
if(cljs.core.truth_(inst_42823)){
var statearr_42855_42875 = state_42846__$1;
(statearr_42855_42875[(1)] = (4));

} else {
var statearr_42856_42876 = state_42846__$1;
(statearr_42856_42876[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42847 === (11))){
var inst_42837 = cljs.core.async.close_BANG_.call(null,ch);
var state_42846__$1 = state_42846;
var statearr_42857_42877 = state_42846__$1;
(statearr_42857_42877[(2)] = inst_42837);

(statearr_42857_42877[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42847 === (9))){
var state_42846__$1 = state_42846;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42858_42878 = state_42846__$1;
(statearr_42858_42878[(1)] = (11));

} else {
var statearr_42859_42879 = state_42846__$1;
(statearr_42859_42879[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42847 === (5))){
var inst_42823 = (state_42846[(7)]);
var state_42846__$1 = state_42846;
var statearr_42860_42880 = state_42846__$1;
(statearr_42860_42880[(2)] = inst_42823);

(statearr_42860_42880[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42847 === (10))){
var inst_42842 = (state_42846[(2)]);
var state_42846__$1 = state_42846;
var statearr_42861_42881 = state_42846__$1;
(statearr_42861_42881[(2)] = inst_42842);

(statearr_42861_42881[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42847 === (8))){
var inst_42823 = (state_42846[(7)]);
var inst_42833 = cljs.core.next.call(null,inst_42823);
var inst_42823__$1 = inst_42833;
var state_42846__$1 = (function (){var statearr_42862 = state_42846;
(statearr_42862[(7)] = inst_42823__$1);

return statearr_42862;
})();
var statearr_42863_42882 = state_42846__$1;
(statearr_42863_42882[(2)] = null);

(statearr_42863_42882[(1)] = (2));


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
});})(c__33321__auto__))
;
return ((function (switch__33233__auto__,c__33321__auto__){
return (function() {
var cljs$core$async$state_machine__33234__auto__ = null;
var cljs$core$async$state_machine__33234__auto____0 = (function (){
var statearr_42864 = [null,null,null,null,null,null,null,null];
(statearr_42864[(0)] = cljs$core$async$state_machine__33234__auto__);

(statearr_42864[(1)] = (1));

return statearr_42864;
});
var cljs$core$async$state_machine__33234__auto____1 = (function (state_42846){
while(true){
var ret_value__33235__auto__ = (function (){try{while(true){
var result__33236__auto__ = switch__33233__auto__.call(null,state_42846);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33236__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33236__auto__;
}
break;
}
}catch (e42865){if((e42865 instanceof Object)){
var ex__33237__auto__ = e42865;
var statearr_42866_42883 = state_42846;
(statearr_42866_42883[(5)] = ex__33237__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42846);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42865;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42884 = state_42846;
state_42846 = G__42884;
continue;
} else {
return ret_value__33235__auto__;
}
break;
}
});
cljs$core$async$state_machine__33234__auto__ = function(state_42846){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33234__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33234__auto____1.call(this,state_42846);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33234__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33234__auto____0;
cljs$core$async$state_machine__33234__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33234__auto____1;
return cljs$core$async$state_machine__33234__auto__;
})()
;})(switch__33233__auto__,c__33321__auto__))
})();
var state__33323__auto__ = (function (){var statearr_42867 = f__33322__auto__.call(null);
(statearr_42867[(6)] = c__33321__auto__);

return statearr_42867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33323__auto__);
});})(c__33321__auto__))
);

return c__33321__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async42885 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42885 = (function (ch,cs,meta42886){
this.ch = ch;
this.cs = cs;
this.meta42886 = meta42886;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42885.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_42887,meta42886__$1){
var self__ = this;
var _42887__$1 = this;
return (new cljs.core.async.t_cljs$core$async42885(self__.ch,self__.cs,meta42886__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async42885.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_42887){
var self__ = this;
var _42887__$1 = this;
return self__.meta42886;
});})(cs))
;

cljs.core.async.t_cljs$core$async42885.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42885.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async42885.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42885.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async42885.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async42885.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async42885.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta42886","meta42886",-59384304,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async42885.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42885.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42885";

cljs.core.async.t_cljs$core$async42885.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__27663__auto__,writer__27664__auto__,opt__27665__auto__){
return cljs.core._write.call(null,writer__27664__auto__,"cljs.core.async/t_cljs$core$async42885");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async42885 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async42885(ch__$1,cs__$1,meta42886){
return (new cljs.core.async.t_cljs$core$async42885(ch__$1,cs__$1,meta42886));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async42885(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__33321__auto___43107 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33321__auto___43107,cs,m,dchan,dctr,done){
return (function (){
var f__33322__auto__ = (function (){var switch__33233__auto__ = ((function (c__33321__auto___43107,cs,m,dchan,dctr,done){
return (function (state_43022){
var state_val_43023 = (state_43022[(1)]);
if((state_val_43023 === (7))){
var inst_43018 = (state_43022[(2)]);
var state_43022__$1 = state_43022;
var statearr_43024_43108 = state_43022__$1;
(statearr_43024_43108[(2)] = inst_43018);

(statearr_43024_43108[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43023 === (20))){
var inst_42921 = (state_43022[(7)]);
var inst_42933 = cljs.core.first.call(null,inst_42921);
var inst_42934 = cljs.core.nth.call(null,inst_42933,(0),null);
var inst_42935 = cljs.core.nth.call(null,inst_42933,(1),null);
var state_43022__$1 = (function (){var statearr_43025 = state_43022;
(statearr_43025[(8)] = inst_42934);

return statearr_43025;
})();
if(cljs.core.truth_(inst_42935)){
var statearr_43026_43109 = state_43022__$1;
(statearr_43026_43109[(1)] = (22));

} else {
var statearr_43027_43110 = state_43022__$1;
(statearr_43027_43110[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43023 === (27))){
var inst_42965 = (state_43022[(9)]);
var inst_42963 = (state_43022[(10)]);
var inst_42970 = (state_43022[(11)]);
var inst_42890 = (state_43022[(12)]);
var inst_42970__$1 = cljs.core._nth.call(null,inst_42963,inst_42965);
var inst_42971 = cljs.core.async.put_BANG_.call(null,inst_42970__$1,inst_42890,done);
var state_43022__$1 = (function (){var statearr_43028 = state_43022;
(statearr_43028[(11)] = inst_42970__$1);

return statearr_43028;
})();
if(cljs.core.truth_(inst_42971)){
var statearr_43029_43111 = state_43022__$1;
(statearr_43029_43111[(1)] = (30));

} else {
var statearr_43030_43112 = state_43022__$1;
(statearr_43030_43112[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43023 === (1))){
var state_43022__$1 = state_43022;
var statearr_43031_43113 = state_43022__$1;
(statearr_43031_43113[(2)] = null);

(statearr_43031_43113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43023 === (24))){
var inst_42921 = (state_43022[(7)]);
var inst_42940 = (state_43022[(2)]);
var inst_42941 = cljs.core.next.call(null,inst_42921);
var inst_42899 = inst_42941;
var inst_42900 = null;
var inst_42901 = (0);
var inst_42902 = (0);
var state_43022__$1 = (function (){var statearr_43032 = state_43022;
(statearr_43032[(13)] = inst_42900);

(statearr_43032[(14)] = inst_42899);

(statearr_43032[(15)] = inst_42901);

(statearr_43032[(16)] = inst_42902);

(statearr_43032[(17)] = inst_42940);

return statearr_43032;
})();
var statearr_43033_43114 = state_43022__$1;
(statearr_43033_43114[(2)] = null);

(statearr_43033_43114[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43023 === (39))){
var state_43022__$1 = state_43022;
var statearr_43037_43115 = state_43022__$1;
(statearr_43037_43115[(2)] = null);

(statearr_43037_43115[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43023 === (4))){
var inst_42890 = (state_43022[(12)]);
var inst_42890__$1 = (state_43022[(2)]);
var inst_42891 = (inst_42890__$1 == null);
var state_43022__$1 = (function (){var statearr_43038 = state_43022;
(statearr_43038[(12)] = inst_42890__$1);

return statearr_43038;
})();
if(cljs.core.truth_(inst_42891)){
var statearr_43039_43116 = state_43022__$1;
(statearr_43039_43116[(1)] = (5));

} else {
var statearr_43040_43117 = state_43022__$1;
(statearr_43040_43117[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43023 === (15))){
var inst_42900 = (state_43022[(13)]);
var inst_42899 = (state_43022[(14)]);
var inst_42901 = (state_43022[(15)]);
var inst_42902 = (state_43022[(16)]);
var inst_42917 = (state_43022[(2)]);
var inst_42918 = (inst_42902 + (1));
var tmp43034 = inst_42900;
var tmp43035 = inst_42899;
var tmp43036 = inst_42901;
var inst_42899__$1 = tmp43035;
var inst_42900__$1 = tmp43034;
var inst_42901__$1 = tmp43036;
var inst_42902__$1 = inst_42918;
var state_43022__$1 = (function (){var statearr_43041 = state_43022;
(statearr_43041[(13)] = inst_42900__$1);

(statearr_43041[(14)] = inst_42899__$1);

(statearr_43041[(15)] = inst_42901__$1);

(statearr_43041[(18)] = inst_42917);

(statearr_43041[(16)] = inst_42902__$1);

return statearr_43041;
})();
var statearr_43042_43118 = state_43022__$1;
(statearr_43042_43118[(2)] = null);

(statearr_43042_43118[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43023 === (21))){
var inst_42944 = (state_43022[(2)]);
var state_43022__$1 = state_43022;
var statearr_43046_43119 = state_43022__$1;
(statearr_43046_43119[(2)] = inst_42944);

(statearr_43046_43119[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43023 === (31))){
var inst_42970 = (state_43022[(11)]);
var inst_42974 = done.call(null,null);
var inst_42975 = cljs.core.async.untap_STAR_.call(null,m,inst_42970);
var state_43022__$1 = (function (){var statearr_43047 = state_43022;
(statearr_43047[(19)] = inst_42974);

return statearr_43047;
})();
var statearr_43048_43120 = state_43022__$1;
(statearr_43048_43120[(2)] = inst_42975);

(statearr_43048_43120[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43023 === (32))){
var inst_42965 = (state_43022[(9)]);
var inst_42962 = (state_43022[(20)]);
var inst_42964 = (state_43022[(21)]);
var inst_42963 = (state_43022[(10)]);
var inst_42977 = (state_43022[(2)]);
var inst_42978 = (inst_42965 + (1));
var tmp43043 = inst_42962;
var tmp43044 = inst_42964;
var tmp43045 = inst_42963;
var inst_42962__$1 = tmp43043;
var inst_42963__$1 = tmp43045;
var inst_42964__$1 = tmp43044;
var inst_42965__$1 = inst_42978;
var state_43022__$1 = (function (){var statearr_43049 = state_43022;
(statearr_43049[(9)] = inst_42965__$1);

(statearr_43049[(20)] = inst_42962__$1);

(statearr_43049[(21)] = inst_42964__$1);

(statearr_43049[(22)] = inst_42977);

(statearr_43049[(10)] = inst_42963__$1);

return statearr_43049;
})();
var statearr_43050_43121 = state_43022__$1;
(statearr_43050_43121[(2)] = null);

(statearr_43050_43121[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43023 === (40))){
var inst_42990 = (state_43022[(23)]);
var inst_42994 = done.call(null,null);
var inst_42995 = cljs.core.async.untap_STAR_.call(null,m,inst_42990);
var state_43022__$1 = (function (){var statearr_43051 = state_43022;
(statearr_43051[(24)] = inst_42994);

return statearr_43051;
})();
var statearr_43052_43122 = state_43022__$1;
(statearr_43052_43122[(2)] = inst_42995);

(statearr_43052_43122[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43023 === (33))){
var inst_42981 = (state_43022[(25)]);
var inst_42983 = cljs.core.chunked_seq_QMARK_.call(null,inst_42981);
var state_43022__$1 = state_43022;
if(inst_42983){
var statearr_43053_43123 = state_43022__$1;
(statearr_43053_43123[(1)] = (36));

} else {
var statearr_43054_43124 = state_43022__$1;
(statearr_43054_43124[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43023 === (13))){
var inst_42911 = (state_43022[(26)]);
var inst_42914 = cljs.core.async.close_BANG_.call(null,inst_42911);
var state_43022__$1 = state_43022;
var statearr_43055_43125 = state_43022__$1;
(statearr_43055_43125[(2)] = inst_42914);

(statearr_43055_43125[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43023 === (22))){
var inst_42934 = (state_43022[(8)]);
var inst_42937 = cljs.core.async.close_BANG_.call(null,inst_42934);
var state_43022__$1 = state_43022;
var statearr_43056_43126 = state_43022__$1;
(statearr_43056_43126[(2)] = inst_42937);

(statearr_43056_43126[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43023 === (36))){
var inst_42981 = (state_43022[(25)]);
var inst_42985 = cljs.core.chunk_first.call(null,inst_42981);
var inst_42986 = cljs.core.chunk_rest.call(null,inst_42981);
var inst_42987 = cljs.core.count.call(null,inst_42985);
var inst_42962 = inst_42986;
var inst_42963 = inst_42985;
var inst_42964 = inst_42987;
var inst_42965 = (0);
var state_43022__$1 = (function (){var statearr_43057 = state_43022;
(statearr_43057[(9)] = inst_42965);

(statearr_43057[(20)] = inst_42962);

(statearr_43057[(21)] = inst_42964);

(statearr_43057[(10)] = inst_42963);

return statearr_43057;
})();
var statearr_43058_43127 = state_43022__$1;
(statearr_43058_43127[(2)] = null);

(statearr_43058_43127[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43023 === (41))){
var inst_42981 = (state_43022[(25)]);
var inst_42997 = (state_43022[(2)]);
var inst_42998 = cljs.core.next.call(null,inst_42981);
var inst_42962 = inst_42998;
var inst_42963 = null;
var inst_42964 = (0);
var inst_42965 = (0);
var state_43022__$1 = (function (){var statearr_43059 = state_43022;
(statearr_43059[(9)] = inst_42965);

(statearr_43059[(20)] = inst_42962);

(statearr_43059[(21)] = inst_42964);

(statearr_43059[(27)] = inst_42997);

(statearr_43059[(10)] = inst_42963);

return statearr_43059;
})();
var statearr_43060_43128 = state_43022__$1;
(statearr_43060_43128[(2)] = null);

(statearr_43060_43128[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43023 === (43))){
var state_43022__$1 = state_43022;
var statearr_43061_43129 = state_43022__$1;
(statearr_43061_43129[(2)] = null);

(statearr_43061_43129[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43023 === (29))){
var inst_43006 = (state_43022[(2)]);
var state_43022__$1 = state_43022;
var statearr_43062_43130 = state_43022__$1;
(statearr_43062_43130[(2)] = inst_43006);

(statearr_43062_43130[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43023 === (44))){
var inst_43015 = (state_43022[(2)]);
var state_43022__$1 = (function (){var statearr_43063 = state_43022;
(statearr_43063[(28)] = inst_43015);

return statearr_43063;
})();
var statearr_43064_43131 = state_43022__$1;
(statearr_43064_43131[(2)] = null);

(statearr_43064_43131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43023 === (6))){
var inst_42954 = (state_43022[(29)]);
var inst_42953 = cljs.core.deref.call(null,cs);
var inst_42954__$1 = cljs.core.keys.call(null,inst_42953);
var inst_42955 = cljs.core.count.call(null,inst_42954__$1);
var inst_42956 = cljs.core.reset_BANG_.call(null,dctr,inst_42955);
var inst_42961 = cljs.core.seq.call(null,inst_42954__$1);
var inst_42962 = inst_42961;
var inst_42963 = null;
var inst_42964 = (0);
var inst_42965 = (0);
var state_43022__$1 = (function (){var statearr_43065 = state_43022;
(statearr_43065[(9)] = inst_42965);

(statearr_43065[(20)] = inst_42962);

(statearr_43065[(30)] = inst_42956);

(statearr_43065[(21)] = inst_42964);

(statearr_43065[(29)] = inst_42954__$1);

(statearr_43065[(10)] = inst_42963);

return statearr_43065;
})();
var statearr_43066_43132 = state_43022__$1;
(statearr_43066_43132[(2)] = null);

(statearr_43066_43132[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43023 === (28))){
var inst_42962 = (state_43022[(20)]);
var inst_42981 = (state_43022[(25)]);
var inst_42981__$1 = cljs.core.seq.call(null,inst_42962);
var state_43022__$1 = (function (){var statearr_43067 = state_43022;
(statearr_43067[(25)] = inst_42981__$1);

return statearr_43067;
})();
if(inst_42981__$1){
var statearr_43068_43133 = state_43022__$1;
(statearr_43068_43133[(1)] = (33));

} else {
var statearr_43069_43134 = state_43022__$1;
(statearr_43069_43134[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43023 === (25))){
var inst_42965 = (state_43022[(9)]);
var inst_42964 = (state_43022[(21)]);
var inst_42967 = (inst_42965 < inst_42964);
var inst_42968 = inst_42967;
var state_43022__$1 = state_43022;
if(cljs.core.truth_(inst_42968)){
var statearr_43070_43135 = state_43022__$1;
(statearr_43070_43135[(1)] = (27));

} else {
var statearr_43071_43136 = state_43022__$1;
(statearr_43071_43136[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43023 === (34))){
var state_43022__$1 = state_43022;
var statearr_43072_43137 = state_43022__$1;
(statearr_43072_43137[(2)] = null);

(statearr_43072_43137[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43023 === (17))){
var state_43022__$1 = state_43022;
var statearr_43073_43138 = state_43022__$1;
(statearr_43073_43138[(2)] = null);

(statearr_43073_43138[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43023 === (3))){
var inst_43020 = (state_43022[(2)]);
var state_43022__$1 = state_43022;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43022__$1,inst_43020);
} else {
if((state_val_43023 === (12))){
var inst_42949 = (state_43022[(2)]);
var state_43022__$1 = state_43022;
var statearr_43074_43139 = state_43022__$1;
(statearr_43074_43139[(2)] = inst_42949);

(statearr_43074_43139[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43023 === (2))){
var state_43022__$1 = state_43022;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43022__$1,(4),ch);
} else {
if((state_val_43023 === (23))){
var state_43022__$1 = state_43022;
var statearr_43075_43140 = state_43022__$1;
(statearr_43075_43140[(2)] = null);

(statearr_43075_43140[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43023 === (35))){
var inst_43004 = (state_43022[(2)]);
var state_43022__$1 = state_43022;
var statearr_43076_43141 = state_43022__$1;
(statearr_43076_43141[(2)] = inst_43004);

(statearr_43076_43141[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43023 === (19))){
var inst_42921 = (state_43022[(7)]);
var inst_42925 = cljs.core.chunk_first.call(null,inst_42921);
var inst_42926 = cljs.core.chunk_rest.call(null,inst_42921);
var inst_42927 = cljs.core.count.call(null,inst_42925);
var inst_42899 = inst_42926;
var inst_42900 = inst_42925;
var inst_42901 = inst_42927;
var inst_42902 = (0);
var state_43022__$1 = (function (){var statearr_43077 = state_43022;
(statearr_43077[(13)] = inst_42900);

(statearr_43077[(14)] = inst_42899);

(statearr_43077[(15)] = inst_42901);

(statearr_43077[(16)] = inst_42902);

return statearr_43077;
})();
var statearr_43078_43142 = state_43022__$1;
(statearr_43078_43142[(2)] = null);

(statearr_43078_43142[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43023 === (11))){
var inst_42921 = (state_43022[(7)]);
var inst_42899 = (state_43022[(14)]);
var inst_42921__$1 = cljs.core.seq.call(null,inst_42899);
var state_43022__$1 = (function (){var statearr_43079 = state_43022;
(statearr_43079[(7)] = inst_42921__$1);

return statearr_43079;
})();
if(inst_42921__$1){
var statearr_43080_43143 = state_43022__$1;
(statearr_43080_43143[(1)] = (16));

} else {
var statearr_43081_43144 = state_43022__$1;
(statearr_43081_43144[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43023 === (9))){
var inst_42951 = (state_43022[(2)]);
var state_43022__$1 = state_43022;
var statearr_43082_43145 = state_43022__$1;
(statearr_43082_43145[(2)] = inst_42951);

(statearr_43082_43145[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43023 === (5))){
var inst_42897 = cljs.core.deref.call(null,cs);
var inst_42898 = cljs.core.seq.call(null,inst_42897);
var inst_42899 = inst_42898;
var inst_42900 = null;
var inst_42901 = (0);
var inst_42902 = (0);
var state_43022__$1 = (function (){var statearr_43083 = state_43022;
(statearr_43083[(13)] = inst_42900);

(statearr_43083[(14)] = inst_42899);

(statearr_43083[(15)] = inst_42901);

(statearr_43083[(16)] = inst_42902);

return statearr_43083;
})();
var statearr_43084_43146 = state_43022__$1;
(statearr_43084_43146[(2)] = null);

(statearr_43084_43146[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43023 === (14))){
var state_43022__$1 = state_43022;
var statearr_43085_43147 = state_43022__$1;
(statearr_43085_43147[(2)] = null);

(statearr_43085_43147[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43023 === (45))){
var inst_43012 = (state_43022[(2)]);
var state_43022__$1 = state_43022;
var statearr_43086_43148 = state_43022__$1;
(statearr_43086_43148[(2)] = inst_43012);

(statearr_43086_43148[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43023 === (26))){
var inst_42954 = (state_43022[(29)]);
var inst_43008 = (state_43022[(2)]);
var inst_43009 = cljs.core.seq.call(null,inst_42954);
var state_43022__$1 = (function (){var statearr_43087 = state_43022;
(statearr_43087[(31)] = inst_43008);

return statearr_43087;
})();
if(inst_43009){
var statearr_43088_43149 = state_43022__$1;
(statearr_43088_43149[(1)] = (42));

} else {
var statearr_43089_43150 = state_43022__$1;
(statearr_43089_43150[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43023 === (16))){
var inst_42921 = (state_43022[(7)]);
var inst_42923 = cljs.core.chunked_seq_QMARK_.call(null,inst_42921);
var state_43022__$1 = state_43022;
if(inst_42923){
var statearr_43090_43151 = state_43022__$1;
(statearr_43090_43151[(1)] = (19));

} else {
var statearr_43091_43152 = state_43022__$1;
(statearr_43091_43152[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43023 === (38))){
var inst_43001 = (state_43022[(2)]);
var state_43022__$1 = state_43022;
var statearr_43092_43153 = state_43022__$1;
(statearr_43092_43153[(2)] = inst_43001);

(statearr_43092_43153[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43023 === (30))){
var state_43022__$1 = state_43022;
var statearr_43093_43154 = state_43022__$1;
(statearr_43093_43154[(2)] = null);

(statearr_43093_43154[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43023 === (10))){
var inst_42900 = (state_43022[(13)]);
var inst_42902 = (state_43022[(16)]);
var inst_42910 = cljs.core._nth.call(null,inst_42900,inst_42902);
var inst_42911 = cljs.core.nth.call(null,inst_42910,(0),null);
var inst_42912 = cljs.core.nth.call(null,inst_42910,(1),null);
var state_43022__$1 = (function (){var statearr_43094 = state_43022;
(statearr_43094[(26)] = inst_42911);

return statearr_43094;
})();
if(cljs.core.truth_(inst_42912)){
var statearr_43095_43155 = state_43022__$1;
(statearr_43095_43155[(1)] = (13));

} else {
var statearr_43096_43156 = state_43022__$1;
(statearr_43096_43156[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43023 === (18))){
var inst_42947 = (state_43022[(2)]);
var state_43022__$1 = state_43022;
var statearr_43097_43157 = state_43022__$1;
(statearr_43097_43157[(2)] = inst_42947);

(statearr_43097_43157[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43023 === (42))){
var state_43022__$1 = state_43022;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43022__$1,(45),dchan);
} else {
if((state_val_43023 === (37))){
var inst_42990 = (state_43022[(23)]);
var inst_42890 = (state_43022[(12)]);
var inst_42981 = (state_43022[(25)]);
var inst_42990__$1 = cljs.core.first.call(null,inst_42981);
var inst_42991 = cljs.core.async.put_BANG_.call(null,inst_42990__$1,inst_42890,done);
var state_43022__$1 = (function (){var statearr_43098 = state_43022;
(statearr_43098[(23)] = inst_42990__$1);

return statearr_43098;
})();
if(cljs.core.truth_(inst_42991)){
var statearr_43099_43158 = state_43022__$1;
(statearr_43099_43158[(1)] = (39));

} else {
var statearr_43100_43159 = state_43022__$1;
(statearr_43100_43159[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43023 === (8))){
var inst_42901 = (state_43022[(15)]);
var inst_42902 = (state_43022[(16)]);
var inst_42904 = (inst_42902 < inst_42901);
var inst_42905 = inst_42904;
var state_43022__$1 = state_43022;
if(cljs.core.truth_(inst_42905)){
var statearr_43101_43160 = state_43022__$1;
(statearr_43101_43160[(1)] = (10));

} else {
var statearr_43102_43161 = state_43022__$1;
(statearr_43102_43161[(1)] = (11));

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
});})(c__33321__auto___43107,cs,m,dchan,dctr,done))
;
return ((function (switch__33233__auto__,c__33321__auto___43107,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__33234__auto__ = null;
var cljs$core$async$mult_$_state_machine__33234__auto____0 = (function (){
var statearr_43103 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43103[(0)] = cljs$core$async$mult_$_state_machine__33234__auto__);

(statearr_43103[(1)] = (1));

return statearr_43103;
});
var cljs$core$async$mult_$_state_machine__33234__auto____1 = (function (state_43022){
while(true){
var ret_value__33235__auto__ = (function (){try{while(true){
var result__33236__auto__ = switch__33233__auto__.call(null,state_43022);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33236__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33236__auto__;
}
break;
}
}catch (e43104){if((e43104 instanceof Object)){
var ex__33237__auto__ = e43104;
var statearr_43105_43162 = state_43022;
(statearr_43105_43162[(5)] = ex__33237__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43022);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43104;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43163 = state_43022;
state_43022 = G__43163;
continue;
} else {
return ret_value__33235__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33234__auto__ = function(state_43022){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33234__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33234__auto____1.call(this,state_43022);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__33234__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33234__auto____0;
cljs$core$async$mult_$_state_machine__33234__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33234__auto____1;
return cljs$core$async$mult_$_state_machine__33234__auto__;
})()
;})(switch__33233__auto__,c__33321__auto___43107,cs,m,dchan,dctr,done))
})();
var state__33323__auto__ = (function (){var statearr_43106 = f__33322__auto__.call(null);
(statearr_43106[(6)] = c__33321__auto___43107);

return statearr_43106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33323__auto__);
});})(c__33321__auto___43107,cs,m,dchan,dctr,done))
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
var G__43165 = arguments.length;
switch (G__43165) {
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
var len__28177__auto___43177 = arguments.length;
var i__28178__auto___43178 = (0);
while(true){
if((i__28178__auto___43178 < len__28177__auto___43177)){
args__28184__auto__.push((arguments[i__28178__auto___43178]));

var G__43179 = (i__28178__auto___43178 + (1));
i__28178__auto___43178 = G__43179;
continue;
} else {
}
break;
}

var argseq__28185__auto__ = ((((3) < args__28184__auto__.length))?(new cljs.core.IndexedSeq(args__28184__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__28185__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__43171){
var map__43172 = p__43171;
var map__43172__$1 = ((((!((map__43172 == null)))?((((map__43172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43172.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43172):map__43172);
var opts = map__43172__$1;
var statearr_43174_43180 = state;
(statearr_43174_43180[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__43172,map__43172__$1,opts){
return (function (val){
var statearr_43175_43181 = state;
(statearr_43175_43181[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__43172,map__43172__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_43176_43182 = state;
(statearr_43176_43182[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq43167){
var G__43168 = cljs.core.first.call(null,seq43167);
var seq43167__$1 = cljs.core.next.call(null,seq43167);
var G__43169 = cljs.core.first.call(null,seq43167__$1);
var seq43167__$2 = cljs.core.next.call(null,seq43167__$1);
var G__43170 = cljs.core.first.call(null,seq43167__$2);
var seq43167__$3 = cljs.core.next.call(null,seq43167__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__43168,G__43169,G__43170,seq43167__$3);
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
if(typeof cljs.core.async.t_cljs$core$async43183 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43183 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta43184){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta43184 = meta43184;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43183.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_43185,meta43184__$1){
var self__ = this;
var _43185__$1 = this;
return (new cljs.core.async.t_cljs$core$async43183(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta43184__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43183.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_43185){
var self__ = this;
var _43185__$1 = this;
return self__.meta43184;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43183.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43183.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43183.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43183.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43183.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43183.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43183.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43183.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async43183.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta43184","meta43184",-1300357782,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43183.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43183.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43183";

cljs.core.async.t_cljs$core$async43183.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__27663__auto__,writer__27664__auto__,opt__27665__auto__){
return cljs.core._write.call(null,writer__27664__auto__,"cljs.core.async/t_cljs$core$async43183");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async43183 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async43183(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta43184){
return (new cljs.core.async.t_cljs$core$async43183(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta43184));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async43183(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33321__auto___43347 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33321__auto___43347,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__33322__auto__ = (function (){var switch__33233__auto__ = ((function (c__33321__auto___43347,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_43287){
var state_val_43288 = (state_43287[(1)]);
if((state_val_43288 === (7))){
var inst_43202 = (state_43287[(2)]);
var state_43287__$1 = state_43287;
var statearr_43289_43348 = state_43287__$1;
(statearr_43289_43348[(2)] = inst_43202);

(statearr_43289_43348[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43288 === (20))){
var inst_43214 = (state_43287[(7)]);
var state_43287__$1 = state_43287;
var statearr_43290_43349 = state_43287__$1;
(statearr_43290_43349[(2)] = inst_43214);

(statearr_43290_43349[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43288 === (27))){
var state_43287__$1 = state_43287;
var statearr_43291_43350 = state_43287__$1;
(statearr_43291_43350[(2)] = null);

(statearr_43291_43350[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43288 === (1))){
var inst_43189 = (state_43287[(8)]);
var inst_43189__$1 = calc_state.call(null);
var inst_43191 = (inst_43189__$1 == null);
var inst_43192 = cljs.core.not.call(null,inst_43191);
var state_43287__$1 = (function (){var statearr_43292 = state_43287;
(statearr_43292[(8)] = inst_43189__$1);

return statearr_43292;
})();
if(inst_43192){
var statearr_43293_43351 = state_43287__$1;
(statearr_43293_43351[(1)] = (2));

} else {
var statearr_43294_43352 = state_43287__$1;
(statearr_43294_43352[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43288 === (24))){
var inst_43238 = (state_43287[(9)]);
var inst_43247 = (state_43287[(10)]);
var inst_43261 = (state_43287[(11)]);
var inst_43261__$1 = inst_43238.call(null,inst_43247);
var state_43287__$1 = (function (){var statearr_43295 = state_43287;
(statearr_43295[(11)] = inst_43261__$1);

return statearr_43295;
})();
if(cljs.core.truth_(inst_43261__$1)){
var statearr_43296_43353 = state_43287__$1;
(statearr_43296_43353[(1)] = (29));

} else {
var statearr_43297_43354 = state_43287__$1;
(statearr_43297_43354[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43288 === (4))){
var inst_43205 = (state_43287[(2)]);
var state_43287__$1 = state_43287;
if(cljs.core.truth_(inst_43205)){
var statearr_43298_43355 = state_43287__$1;
(statearr_43298_43355[(1)] = (8));

} else {
var statearr_43299_43356 = state_43287__$1;
(statearr_43299_43356[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43288 === (15))){
var inst_43232 = (state_43287[(2)]);
var state_43287__$1 = state_43287;
if(cljs.core.truth_(inst_43232)){
var statearr_43300_43357 = state_43287__$1;
(statearr_43300_43357[(1)] = (19));

} else {
var statearr_43301_43358 = state_43287__$1;
(statearr_43301_43358[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43288 === (21))){
var inst_43237 = (state_43287[(12)]);
var inst_43237__$1 = (state_43287[(2)]);
var inst_43238 = cljs.core.get.call(null,inst_43237__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_43239 = cljs.core.get.call(null,inst_43237__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_43240 = cljs.core.get.call(null,inst_43237__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_43287__$1 = (function (){var statearr_43302 = state_43287;
(statearr_43302[(12)] = inst_43237__$1);

(statearr_43302[(9)] = inst_43238);

(statearr_43302[(13)] = inst_43239);

return statearr_43302;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_43287__$1,(22),inst_43240);
} else {
if((state_val_43288 === (31))){
var inst_43269 = (state_43287[(2)]);
var state_43287__$1 = state_43287;
if(cljs.core.truth_(inst_43269)){
var statearr_43303_43359 = state_43287__$1;
(statearr_43303_43359[(1)] = (32));

} else {
var statearr_43304_43360 = state_43287__$1;
(statearr_43304_43360[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43288 === (32))){
var inst_43246 = (state_43287[(14)]);
var state_43287__$1 = state_43287;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43287__$1,(35),out,inst_43246);
} else {
if((state_val_43288 === (33))){
var inst_43237 = (state_43287[(12)]);
var inst_43214 = inst_43237;
var state_43287__$1 = (function (){var statearr_43305 = state_43287;
(statearr_43305[(7)] = inst_43214);

return statearr_43305;
})();
var statearr_43306_43361 = state_43287__$1;
(statearr_43306_43361[(2)] = null);

(statearr_43306_43361[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43288 === (13))){
var inst_43214 = (state_43287[(7)]);
var inst_43221 = inst_43214.cljs$lang$protocol_mask$partition0$;
var inst_43222 = (inst_43221 & (64));
var inst_43223 = inst_43214.cljs$core$ISeq$;
var inst_43224 = (cljs.core.PROTOCOL_SENTINEL === inst_43223);
var inst_43225 = (inst_43222) || (inst_43224);
var state_43287__$1 = state_43287;
if(cljs.core.truth_(inst_43225)){
var statearr_43307_43362 = state_43287__$1;
(statearr_43307_43362[(1)] = (16));

} else {
var statearr_43308_43363 = state_43287__$1;
(statearr_43308_43363[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43288 === (22))){
var inst_43246 = (state_43287[(14)]);
var inst_43247 = (state_43287[(10)]);
var inst_43245 = (state_43287[(2)]);
var inst_43246__$1 = cljs.core.nth.call(null,inst_43245,(0),null);
var inst_43247__$1 = cljs.core.nth.call(null,inst_43245,(1),null);
var inst_43248 = (inst_43246__$1 == null);
var inst_43249 = cljs.core._EQ_.call(null,inst_43247__$1,change);
var inst_43250 = (inst_43248) || (inst_43249);
var state_43287__$1 = (function (){var statearr_43309 = state_43287;
(statearr_43309[(14)] = inst_43246__$1);

(statearr_43309[(10)] = inst_43247__$1);

return statearr_43309;
})();
if(cljs.core.truth_(inst_43250)){
var statearr_43310_43364 = state_43287__$1;
(statearr_43310_43364[(1)] = (23));

} else {
var statearr_43311_43365 = state_43287__$1;
(statearr_43311_43365[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43288 === (36))){
var inst_43237 = (state_43287[(12)]);
var inst_43214 = inst_43237;
var state_43287__$1 = (function (){var statearr_43312 = state_43287;
(statearr_43312[(7)] = inst_43214);

return statearr_43312;
})();
var statearr_43313_43366 = state_43287__$1;
(statearr_43313_43366[(2)] = null);

(statearr_43313_43366[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43288 === (29))){
var inst_43261 = (state_43287[(11)]);
var state_43287__$1 = state_43287;
var statearr_43314_43367 = state_43287__$1;
(statearr_43314_43367[(2)] = inst_43261);

(statearr_43314_43367[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43288 === (6))){
var state_43287__$1 = state_43287;
var statearr_43315_43368 = state_43287__$1;
(statearr_43315_43368[(2)] = false);

(statearr_43315_43368[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43288 === (28))){
var inst_43257 = (state_43287[(2)]);
var inst_43258 = calc_state.call(null);
var inst_43214 = inst_43258;
var state_43287__$1 = (function (){var statearr_43316 = state_43287;
(statearr_43316[(15)] = inst_43257);

(statearr_43316[(7)] = inst_43214);

return statearr_43316;
})();
var statearr_43317_43369 = state_43287__$1;
(statearr_43317_43369[(2)] = null);

(statearr_43317_43369[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43288 === (25))){
var inst_43283 = (state_43287[(2)]);
var state_43287__$1 = state_43287;
var statearr_43318_43370 = state_43287__$1;
(statearr_43318_43370[(2)] = inst_43283);

(statearr_43318_43370[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43288 === (34))){
var inst_43281 = (state_43287[(2)]);
var state_43287__$1 = state_43287;
var statearr_43319_43371 = state_43287__$1;
(statearr_43319_43371[(2)] = inst_43281);

(statearr_43319_43371[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43288 === (17))){
var state_43287__$1 = state_43287;
var statearr_43320_43372 = state_43287__$1;
(statearr_43320_43372[(2)] = false);

(statearr_43320_43372[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43288 === (3))){
var state_43287__$1 = state_43287;
var statearr_43321_43373 = state_43287__$1;
(statearr_43321_43373[(2)] = false);

(statearr_43321_43373[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43288 === (12))){
var inst_43285 = (state_43287[(2)]);
var state_43287__$1 = state_43287;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43287__$1,inst_43285);
} else {
if((state_val_43288 === (2))){
var inst_43189 = (state_43287[(8)]);
var inst_43194 = inst_43189.cljs$lang$protocol_mask$partition0$;
var inst_43195 = (inst_43194 & (64));
var inst_43196 = inst_43189.cljs$core$ISeq$;
var inst_43197 = (cljs.core.PROTOCOL_SENTINEL === inst_43196);
var inst_43198 = (inst_43195) || (inst_43197);
var state_43287__$1 = state_43287;
if(cljs.core.truth_(inst_43198)){
var statearr_43322_43374 = state_43287__$1;
(statearr_43322_43374[(1)] = (5));

} else {
var statearr_43323_43375 = state_43287__$1;
(statearr_43323_43375[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43288 === (23))){
var inst_43246 = (state_43287[(14)]);
var inst_43252 = (inst_43246 == null);
var state_43287__$1 = state_43287;
if(cljs.core.truth_(inst_43252)){
var statearr_43324_43376 = state_43287__$1;
(statearr_43324_43376[(1)] = (26));

} else {
var statearr_43325_43377 = state_43287__$1;
(statearr_43325_43377[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43288 === (35))){
var inst_43272 = (state_43287[(2)]);
var state_43287__$1 = state_43287;
if(cljs.core.truth_(inst_43272)){
var statearr_43326_43378 = state_43287__$1;
(statearr_43326_43378[(1)] = (36));

} else {
var statearr_43327_43379 = state_43287__$1;
(statearr_43327_43379[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43288 === (19))){
var inst_43214 = (state_43287[(7)]);
var inst_43234 = cljs.core.apply.call(null,cljs.core.hash_map,inst_43214);
var state_43287__$1 = state_43287;
var statearr_43328_43380 = state_43287__$1;
(statearr_43328_43380[(2)] = inst_43234);

(statearr_43328_43380[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43288 === (11))){
var inst_43214 = (state_43287[(7)]);
var inst_43218 = (inst_43214 == null);
var inst_43219 = cljs.core.not.call(null,inst_43218);
var state_43287__$1 = state_43287;
if(inst_43219){
var statearr_43329_43381 = state_43287__$1;
(statearr_43329_43381[(1)] = (13));

} else {
var statearr_43330_43382 = state_43287__$1;
(statearr_43330_43382[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43288 === (9))){
var inst_43189 = (state_43287[(8)]);
var state_43287__$1 = state_43287;
var statearr_43331_43383 = state_43287__$1;
(statearr_43331_43383[(2)] = inst_43189);

(statearr_43331_43383[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43288 === (5))){
var state_43287__$1 = state_43287;
var statearr_43332_43384 = state_43287__$1;
(statearr_43332_43384[(2)] = true);

(statearr_43332_43384[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43288 === (14))){
var state_43287__$1 = state_43287;
var statearr_43333_43385 = state_43287__$1;
(statearr_43333_43385[(2)] = false);

(statearr_43333_43385[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43288 === (26))){
var inst_43247 = (state_43287[(10)]);
var inst_43254 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_43247);
var state_43287__$1 = state_43287;
var statearr_43334_43386 = state_43287__$1;
(statearr_43334_43386[(2)] = inst_43254);

(statearr_43334_43386[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43288 === (16))){
var state_43287__$1 = state_43287;
var statearr_43335_43387 = state_43287__$1;
(statearr_43335_43387[(2)] = true);

(statearr_43335_43387[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43288 === (38))){
var inst_43277 = (state_43287[(2)]);
var state_43287__$1 = state_43287;
var statearr_43336_43388 = state_43287__$1;
(statearr_43336_43388[(2)] = inst_43277);

(statearr_43336_43388[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43288 === (30))){
var inst_43238 = (state_43287[(9)]);
var inst_43239 = (state_43287[(13)]);
var inst_43247 = (state_43287[(10)]);
var inst_43264 = cljs.core.empty_QMARK_.call(null,inst_43238);
var inst_43265 = inst_43239.call(null,inst_43247);
var inst_43266 = cljs.core.not.call(null,inst_43265);
var inst_43267 = (inst_43264) && (inst_43266);
var state_43287__$1 = state_43287;
var statearr_43337_43389 = state_43287__$1;
(statearr_43337_43389[(2)] = inst_43267);

(statearr_43337_43389[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43288 === (10))){
var inst_43189 = (state_43287[(8)]);
var inst_43210 = (state_43287[(2)]);
var inst_43211 = cljs.core.get.call(null,inst_43210,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_43212 = cljs.core.get.call(null,inst_43210,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_43213 = cljs.core.get.call(null,inst_43210,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_43214 = inst_43189;
var state_43287__$1 = (function (){var statearr_43338 = state_43287;
(statearr_43338[(16)] = inst_43213);

(statearr_43338[(17)] = inst_43211);

(statearr_43338[(18)] = inst_43212);

(statearr_43338[(7)] = inst_43214);

return statearr_43338;
})();
var statearr_43339_43390 = state_43287__$1;
(statearr_43339_43390[(2)] = null);

(statearr_43339_43390[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43288 === (18))){
var inst_43229 = (state_43287[(2)]);
var state_43287__$1 = state_43287;
var statearr_43340_43391 = state_43287__$1;
(statearr_43340_43391[(2)] = inst_43229);

(statearr_43340_43391[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43288 === (37))){
var state_43287__$1 = state_43287;
var statearr_43341_43392 = state_43287__$1;
(statearr_43341_43392[(2)] = null);

(statearr_43341_43392[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43288 === (8))){
var inst_43189 = (state_43287[(8)]);
var inst_43207 = cljs.core.apply.call(null,cljs.core.hash_map,inst_43189);
var state_43287__$1 = state_43287;
var statearr_43342_43393 = state_43287__$1;
(statearr_43342_43393[(2)] = inst_43207);

(statearr_43342_43393[(1)] = (10));


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
});})(c__33321__auto___43347,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__33233__auto__,c__33321__auto___43347,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__33234__auto__ = null;
var cljs$core$async$mix_$_state_machine__33234__auto____0 = (function (){
var statearr_43343 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43343[(0)] = cljs$core$async$mix_$_state_machine__33234__auto__);

(statearr_43343[(1)] = (1));

return statearr_43343;
});
var cljs$core$async$mix_$_state_machine__33234__auto____1 = (function (state_43287){
while(true){
var ret_value__33235__auto__ = (function (){try{while(true){
var result__33236__auto__ = switch__33233__auto__.call(null,state_43287);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33236__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33236__auto__;
}
break;
}
}catch (e43344){if((e43344 instanceof Object)){
var ex__33237__auto__ = e43344;
var statearr_43345_43394 = state_43287;
(statearr_43345_43394[(5)] = ex__33237__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43287);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43344;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43395 = state_43287;
state_43287 = G__43395;
continue;
} else {
return ret_value__33235__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33234__auto__ = function(state_43287){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33234__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33234__auto____1.call(this,state_43287);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__33234__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33234__auto____0;
cljs$core$async$mix_$_state_machine__33234__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33234__auto____1;
return cljs$core$async$mix_$_state_machine__33234__auto__;
})()
;})(switch__33233__auto__,c__33321__auto___43347,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__33323__auto__ = (function (){var statearr_43346 = f__33322__auto__.call(null);
(statearr_43346[(6)] = c__33321__auto___43347);

return statearr_43346;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33323__auto__);
});})(c__33321__auto___43347,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__43397 = arguments.length;
switch (G__43397) {
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
var G__43401 = arguments.length;
switch (G__43401) {
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
return (function (p1__43399_SHARP_){
if(cljs.core.truth_(p1__43399_SHARP_.call(null,topic))){
return p1__43399_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__43399_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__27052__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async43402 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43402 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta43403){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta43403 = meta43403;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43402.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_43404,meta43403__$1){
var self__ = this;
var _43404__$1 = this;
return (new cljs.core.async.t_cljs$core$async43402(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta43403__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43402.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_43404){
var self__ = this;
var _43404__$1 = this;
return self__.meta43403;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43402.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43402.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43402.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43402.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43402.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async43402.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43402.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43402.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta43403","meta43403",-1803388059,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43402.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43402.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43402";

cljs.core.async.t_cljs$core$async43402.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__27663__auto__,writer__27664__auto__,opt__27665__auto__){
return cljs.core._write.call(null,writer__27664__auto__,"cljs.core.async/t_cljs$core$async43402");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async43402 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async43402(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta43403){
return (new cljs.core.async.t_cljs$core$async43402(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta43403));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async43402(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33321__auto___43522 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33321__auto___43522,mults,ensure_mult,p){
return (function (){
var f__33322__auto__ = (function (){var switch__33233__auto__ = ((function (c__33321__auto___43522,mults,ensure_mult,p){
return (function (state_43476){
var state_val_43477 = (state_43476[(1)]);
if((state_val_43477 === (7))){
var inst_43472 = (state_43476[(2)]);
var state_43476__$1 = state_43476;
var statearr_43478_43523 = state_43476__$1;
(statearr_43478_43523[(2)] = inst_43472);

(statearr_43478_43523[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43477 === (20))){
var state_43476__$1 = state_43476;
var statearr_43479_43524 = state_43476__$1;
(statearr_43479_43524[(2)] = null);

(statearr_43479_43524[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43477 === (1))){
var state_43476__$1 = state_43476;
var statearr_43480_43525 = state_43476__$1;
(statearr_43480_43525[(2)] = null);

(statearr_43480_43525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43477 === (24))){
var inst_43455 = (state_43476[(7)]);
var inst_43464 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_43455);
var state_43476__$1 = state_43476;
var statearr_43481_43526 = state_43476__$1;
(statearr_43481_43526[(2)] = inst_43464);

(statearr_43481_43526[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43477 === (4))){
var inst_43407 = (state_43476[(8)]);
var inst_43407__$1 = (state_43476[(2)]);
var inst_43408 = (inst_43407__$1 == null);
var state_43476__$1 = (function (){var statearr_43482 = state_43476;
(statearr_43482[(8)] = inst_43407__$1);

return statearr_43482;
})();
if(cljs.core.truth_(inst_43408)){
var statearr_43483_43527 = state_43476__$1;
(statearr_43483_43527[(1)] = (5));

} else {
var statearr_43484_43528 = state_43476__$1;
(statearr_43484_43528[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43477 === (15))){
var inst_43449 = (state_43476[(2)]);
var state_43476__$1 = state_43476;
var statearr_43485_43529 = state_43476__$1;
(statearr_43485_43529[(2)] = inst_43449);

(statearr_43485_43529[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43477 === (21))){
var inst_43469 = (state_43476[(2)]);
var state_43476__$1 = (function (){var statearr_43486 = state_43476;
(statearr_43486[(9)] = inst_43469);

return statearr_43486;
})();
var statearr_43487_43530 = state_43476__$1;
(statearr_43487_43530[(2)] = null);

(statearr_43487_43530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43477 === (13))){
var inst_43431 = (state_43476[(10)]);
var inst_43433 = cljs.core.chunked_seq_QMARK_.call(null,inst_43431);
var state_43476__$1 = state_43476;
if(inst_43433){
var statearr_43488_43531 = state_43476__$1;
(statearr_43488_43531[(1)] = (16));

} else {
var statearr_43489_43532 = state_43476__$1;
(statearr_43489_43532[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43477 === (22))){
var inst_43461 = (state_43476[(2)]);
var state_43476__$1 = state_43476;
if(cljs.core.truth_(inst_43461)){
var statearr_43490_43533 = state_43476__$1;
(statearr_43490_43533[(1)] = (23));

} else {
var statearr_43491_43534 = state_43476__$1;
(statearr_43491_43534[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43477 === (6))){
var inst_43457 = (state_43476[(11)]);
var inst_43455 = (state_43476[(7)]);
var inst_43407 = (state_43476[(8)]);
var inst_43455__$1 = topic_fn.call(null,inst_43407);
var inst_43456 = cljs.core.deref.call(null,mults);
var inst_43457__$1 = cljs.core.get.call(null,inst_43456,inst_43455__$1);
var state_43476__$1 = (function (){var statearr_43492 = state_43476;
(statearr_43492[(11)] = inst_43457__$1);

(statearr_43492[(7)] = inst_43455__$1);

return statearr_43492;
})();
if(cljs.core.truth_(inst_43457__$1)){
var statearr_43493_43535 = state_43476__$1;
(statearr_43493_43535[(1)] = (19));

} else {
var statearr_43494_43536 = state_43476__$1;
(statearr_43494_43536[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43477 === (25))){
var inst_43466 = (state_43476[(2)]);
var state_43476__$1 = state_43476;
var statearr_43495_43537 = state_43476__$1;
(statearr_43495_43537[(2)] = inst_43466);

(statearr_43495_43537[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43477 === (17))){
var inst_43431 = (state_43476[(10)]);
var inst_43440 = cljs.core.first.call(null,inst_43431);
var inst_43441 = cljs.core.async.muxch_STAR_.call(null,inst_43440);
var inst_43442 = cljs.core.async.close_BANG_.call(null,inst_43441);
var inst_43443 = cljs.core.next.call(null,inst_43431);
var inst_43417 = inst_43443;
var inst_43418 = null;
var inst_43419 = (0);
var inst_43420 = (0);
var state_43476__$1 = (function (){var statearr_43496 = state_43476;
(statearr_43496[(12)] = inst_43419);

(statearr_43496[(13)] = inst_43420);

(statearr_43496[(14)] = inst_43442);

(statearr_43496[(15)] = inst_43417);

(statearr_43496[(16)] = inst_43418);

return statearr_43496;
})();
var statearr_43497_43538 = state_43476__$1;
(statearr_43497_43538[(2)] = null);

(statearr_43497_43538[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43477 === (3))){
var inst_43474 = (state_43476[(2)]);
var state_43476__$1 = state_43476;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43476__$1,inst_43474);
} else {
if((state_val_43477 === (12))){
var inst_43451 = (state_43476[(2)]);
var state_43476__$1 = state_43476;
var statearr_43498_43539 = state_43476__$1;
(statearr_43498_43539[(2)] = inst_43451);

(statearr_43498_43539[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43477 === (2))){
var state_43476__$1 = state_43476;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43476__$1,(4),ch);
} else {
if((state_val_43477 === (23))){
var state_43476__$1 = state_43476;
var statearr_43499_43540 = state_43476__$1;
(statearr_43499_43540[(2)] = null);

(statearr_43499_43540[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43477 === (19))){
var inst_43457 = (state_43476[(11)]);
var inst_43407 = (state_43476[(8)]);
var inst_43459 = cljs.core.async.muxch_STAR_.call(null,inst_43457);
var state_43476__$1 = state_43476;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43476__$1,(22),inst_43459,inst_43407);
} else {
if((state_val_43477 === (11))){
var inst_43431 = (state_43476[(10)]);
var inst_43417 = (state_43476[(15)]);
var inst_43431__$1 = cljs.core.seq.call(null,inst_43417);
var state_43476__$1 = (function (){var statearr_43500 = state_43476;
(statearr_43500[(10)] = inst_43431__$1);

return statearr_43500;
})();
if(inst_43431__$1){
var statearr_43501_43541 = state_43476__$1;
(statearr_43501_43541[(1)] = (13));

} else {
var statearr_43502_43542 = state_43476__$1;
(statearr_43502_43542[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43477 === (9))){
var inst_43453 = (state_43476[(2)]);
var state_43476__$1 = state_43476;
var statearr_43503_43543 = state_43476__$1;
(statearr_43503_43543[(2)] = inst_43453);

(statearr_43503_43543[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43477 === (5))){
var inst_43414 = cljs.core.deref.call(null,mults);
var inst_43415 = cljs.core.vals.call(null,inst_43414);
var inst_43416 = cljs.core.seq.call(null,inst_43415);
var inst_43417 = inst_43416;
var inst_43418 = null;
var inst_43419 = (0);
var inst_43420 = (0);
var state_43476__$1 = (function (){var statearr_43504 = state_43476;
(statearr_43504[(12)] = inst_43419);

(statearr_43504[(13)] = inst_43420);

(statearr_43504[(15)] = inst_43417);

(statearr_43504[(16)] = inst_43418);

return statearr_43504;
})();
var statearr_43505_43544 = state_43476__$1;
(statearr_43505_43544[(2)] = null);

(statearr_43505_43544[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43477 === (14))){
var state_43476__$1 = state_43476;
var statearr_43509_43545 = state_43476__$1;
(statearr_43509_43545[(2)] = null);

(statearr_43509_43545[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43477 === (16))){
var inst_43431 = (state_43476[(10)]);
var inst_43435 = cljs.core.chunk_first.call(null,inst_43431);
var inst_43436 = cljs.core.chunk_rest.call(null,inst_43431);
var inst_43437 = cljs.core.count.call(null,inst_43435);
var inst_43417 = inst_43436;
var inst_43418 = inst_43435;
var inst_43419 = inst_43437;
var inst_43420 = (0);
var state_43476__$1 = (function (){var statearr_43510 = state_43476;
(statearr_43510[(12)] = inst_43419);

(statearr_43510[(13)] = inst_43420);

(statearr_43510[(15)] = inst_43417);

(statearr_43510[(16)] = inst_43418);

return statearr_43510;
})();
var statearr_43511_43546 = state_43476__$1;
(statearr_43511_43546[(2)] = null);

(statearr_43511_43546[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43477 === (10))){
var inst_43419 = (state_43476[(12)]);
var inst_43420 = (state_43476[(13)]);
var inst_43417 = (state_43476[(15)]);
var inst_43418 = (state_43476[(16)]);
var inst_43425 = cljs.core._nth.call(null,inst_43418,inst_43420);
var inst_43426 = cljs.core.async.muxch_STAR_.call(null,inst_43425);
var inst_43427 = cljs.core.async.close_BANG_.call(null,inst_43426);
var inst_43428 = (inst_43420 + (1));
var tmp43506 = inst_43419;
var tmp43507 = inst_43417;
var tmp43508 = inst_43418;
var inst_43417__$1 = tmp43507;
var inst_43418__$1 = tmp43508;
var inst_43419__$1 = tmp43506;
var inst_43420__$1 = inst_43428;
var state_43476__$1 = (function (){var statearr_43512 = state_43476;
(statearr_43512[(12)] = inst_43419__$1);

(statearr_43512[(13)] = inst_43420__$1);

(statearr_43512[(17)] = inst_43427);

(statearr_43512[(15)] = inst_43417__$1);

(statearr_43512[(16)] = inst_43418__$1);

return statearr_43512;
})();
var statearr_43513_43547 = state_43476__$1;
(statearr_43513_43547[(2)] = null);

(statearr_43513_43547[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43477 === (18))){
var inst_43446 = (state_43476[(2)]);
var state_43476__$1 = state_43476;
var statearr_43514_43548 = state_43476__$1;
(statearr_43514_43548[(2)] = inst_43446);

(statearr_43514_43548[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43477 === (8))){
var inst_43419 = (state_43476[(12)]);
var inst_43420 = (state_43476[(13)]);
var inst_43422 = (inst_43420 < inst_43419);
var inst_43423 = inst_43422;
var state_43476__$1 = state_43476;
if(cljs.core.truth_(inst_43423)){
var statearr_43515_43549 = state_43476__$1;
(statearr_43515_43549[(1)] = (10));

} else {
var statearr_43516_43550 = state_43476__$1;
(statearr_43516_43550[(1)] = (11));

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
});})(c__33321__auto___43522,mults,ensure_mult,p))
;
return ((function (switch__33233__auto__,c__33321__auto___43522,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__33234__auto__ = null;
var cljs$core$async$state_machine__33234__auto____0 = (function (){
var statearr_43517 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43517[(0)] = cljs$core$async$state_machine__33234__auto__);

(statearr_43517[(1)] = (1));

return statearr_43517;
});
var cljs$core$async$state_machine__33234__auto____1 = (function (state_43476){
while(true){
var ret_value__33235__auto__ = (function (){try{while(true){
var result__33236__auto__ = switch__33233__auto__.call(null,state_43476);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33236__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33236__auto__;
}
break;
}
}catch (e43518){if((e43518 instanceof Object)){
var ex__33237__auto__ = e43518;
var statearr_43519_43551 = state_43476;
(statearr_43519_43551[(5)] = ex__33237__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43476);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43518;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43552 = state_43476;
state_43476 = G__43552;
continue;
} else {
return ret_value__33235__auto__;
}
break;
}
});
cljs$core$async$state_machine__33234__auto__ = function(state_43476){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33234__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33234__auto____1.call(this,state_43476);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33234__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33234__auto____0;
cljs$core$async$state_machine__33234__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33234__auto____1;
return cljs$core$async$state_machine__33234__auto__;
})()
;})(switch__33233__auto__,c__33321__auto___43522,mults,ensure_mult,p))
})();
var state__33323__auto__ = (function (){var statearr_43520 = f__33322__auto__.call(null);
(statearr_43520[(6)] = c__33321__auto___43522);

return statearr_43520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33323__auto__);
});})(c__33321__auto___43522,mults,ensure_mult,p))
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
var G__43554 = arguments.length;
switch (G__43554) {
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
var G__43557 = arguments.length;
switch (G__43557) {
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
var G__43560 = arguments.length;
switch (G__43560) {
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
var c__33321__auto___43627 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33321__auto___43627,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__33322__auto__ = (function (){var switch__33233__auto__ = ((function (c__33321__auto___43627,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_43599){
var state_val_43600 = (state_43599[(1)]);
if((state_val_43600 === (7))){
var state_43599__$1 = state_43599;
var statearr_43601_43628 = state_43599__$1;
(statearr_43601_43628[(2)] = null);

(statearr_43601_43628[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43600 === (1))){
var state_43599__$1 = state_43599;
var statearr_43602_43629 = state_43599__$1;
(statearr_43602_43629[(2)] = null);

(statearr_43602_43629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43600 === (4))){
var inst_43563 = (state_43599[(7)]);
var inst_43565 = (inst_43563 < cnt);
var state_43599__$1 = state_43599;
if(cljs.core.truth_(inst_43565)){
var statearr_43603_43630 = state_43599__$1;
(statearr_43603_43630[(1)] = (6));

} else {
var statearr_43604_43631 = state_43599__$1;
(statearr_43604_43631[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43600 === (15))){
var inst_43595 = (state_43599[(2)]);
var state_43599__$1 = state_43599;
var statearr_43605_43632 = state_43599__$1;
(statearr_43605_43632[(2)] = inst_43595);

(statearr_43605_43632[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43600 === (13))){
var inst_43588 = cljs.core.async.close_BANG_.call(null,out);
var state_43599__$1 = state_43599;
var statearr_43606_43633 = state_43599__$1;
(statearr_43606_43633[(2)] = inst_43588);

(statearr_43606_43633[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43600 === (6))){
var state_43599__$1 = state_43599;
var statearr_43607_43634 = state_43599__$1;
(statearr_43607_43634[(2)] = null);

(statearr_43607_43634[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43600 === (3))){
var inst_43597 = (state_43599[(2)]);
var state_43599__$1 = state_43599;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43599__$1,inst_43597);
} else {
if((state_val_43600 === (12))){
var inst_43585 = (state_43599[(8)]);
var inst_43585__$1 = (state_43599[(2)]);
var inst_43586 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_43585__$1);
var state_43599__$1 = (function (){var statearr_43608 = state_43599;
(statearr_43608[(8)] = inst_43585__$1);

return statearr_43608;
})();
if(cljs.core.truth_(inst_43586)){
var statearr_43609_43635 = state_43599__$1;
(statearr_43609_43635[(1)] = (13));

} else {
var statearr_43610_43636 = state_43599__$1;
(statearr_43610_43636[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43600 === (2))){
var inst_43562 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_43563 = (0);
var state_43599__$1 = (function (){var statearr_43611 = state_43599;
(statearr_43611[(9)] = inst_43562);

(statearr_43611[(7)] = inst_43563);

return statearr_43611;
})();
var statearr_43612_43637 = state_43599__$1;
(statearr_43612_43637[(2)] = null);

(statearr_43612_43637[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43600 === (11))){
var inst_43563 = (state_43599[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_43599,(10),Object,null,(9));
var inst_43572 = chs__$1.call(null,inst_43563);
var inst_43573 = done.call(null,inst_43563);
var inst_43574 = cljs.core.async.take_BANG_.call(null,inst_43572,inst_43573);
var state_43599__$1 = state_43599;
var statearr_43613_43638 = state_43599__$1;
(statearr_43613_43638[(2)] = inst_43574);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43599__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43600 === (9))){
var inst_43563 = (state_43599[(7)]);
var inst_43576 = (state_43599[(2)]);
var inst_43577 = (inst_43563 + (1));
var inst_43563__$1 = inst_43577;
var state_43599__$1 = (function (){var statearr_43614 = state_43599;
(statearr_43614[(10)] = inst_43576);

(statearr_43614[(7)] = inst_43563__$1);

return statearr_43614;
})();
var statearr_43615_43639 = state_43599__$1;
(statearr_43615_43639[(2)] = null);

(statearr_43615_43639[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43600 === (5))){
var inst_43583 = (state_43599[(2)]);
var state_43599__$1 = (function (){var statearr_43616 = state_43599;
(statearr_43616[(11)] = inst_43583);

return statearr_43616;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43599__$1,(12),dchan);
} else {
if((state_val_43600 === (14))){
var inst_43585 = (state_43599[(8)]);
var inst_43590 = cljs.core.apply.call(null,f,inst_43585);
var state_43599__$1 = state_43599;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43599__$1,(16),out,inst_43590);
} else {
if((state_val_43600 === (16))){
var inst_43592 = (state_43599[(2)]);
var state_43599__$1 = (function (){var statearr_43617 = state_43599;
(statearr_43617[(12)] = inst_43592);

return statearr_43617;
})();
var statearr_43618_43640 = state_43599__$1;
(statearr_43618_43640[(2)] = null);

(statearr_43618_43640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43600 === (10))){
var inst_43567 = (state_43599[(2)]);
var inst_43568 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_43599__$1 = (function (){var statearr_43619 = state_43599;
(statearr_43619[(13)] = inst_43567);

return statearr_43619;
})();
var statearr_43620_43641 = state_43599__$1;
(statearr_43620_43641[(2)] = inst_43568);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43599__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43600 === (8))){
var inst_43581 = (state_43599[(2)]);
var state_43599__$1 = state_43599;
var statearr_43621_43642 = state_43599__$1;
(statearr_43621_43642[(2)] = inst_43581);

(statearr_43621_43642[(1)] = (5));


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
});})(c__33321__auto___43627,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__33233__auto__,c__33321__auto___43627,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__33234__auto__ = null;
var cljs$core$async$state_machine__33234__auto____0 = (function (){
var statearr_43622 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43622[(0)] = cljs$core$async$state_machine__33234__auto__);

(statearr_43622[(1)] = (1));

return statearr_43622;
});
var cljs$core$async$state_machine__33234__auto____1 = (function (state_43599){
while(true){
var ret_value__33235__auto__ = (function (){try{while(true){
var result__33236__auto__ = switch__33233__auto__.call(null,state_43599);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33236__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33236__auto__;
}
break;
}
}catch (e43623){if((e43623 instanceof Object)){
var ex__33237__auto__ = e43623;
var statearr_43624_43643 = state_43599;
(statearr_43624_43643[(5)] = ex__33237__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43599);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43623;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43644 = state_43599;
state_43599 = G__43644;
continue;
} else {
return ret_value__33235__auto__;
}
break;
}
});
cljs$core$async$state_machine__33234__auto__ = function(state_43599){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33234__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33234__auto____1.call(this,state_43599);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33234__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33234__auto____0;
cljs$core$async$state_machine__33234__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33234__auto____1;
return cljs$core$async$state_machine__33234__auto__;
})()
;})(switch__33233__auto__,c__33321__auto___43627,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__33323__auto__ = (function (){var statearr_43625 = f__33322__auto__.call(null);
(statearr_43625[(6)] = c__33321__auto___43627);

return statearr_43625;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33323__auto__);
});})(c__33321__auto___43627,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__43647 = arguments.length;
switch (G__43647) {
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
var c__33321__auto___43701 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33321__auto___43701,out){
return (function (){
var f__33322__auto__ = (function (){var switch__33233__auto__ = ((function (c__33321__auto___43701,out){
return (function (state_43679){
var state_val_43680 = (state_43679[(1)]);
if((state_val_43680 === (7))){
var inst_43659 = (state_43679[(7)]);
var inst_43658 = (state_43679[(8)]);
var inst_43658__$1 = (state_43679[(2)]);
var inst_43659__$1 = cljs.core.nth.call(null,inst_43658__$1,(0),null);
var inst_43660 = cljs.core.nth.call(null,inst_43658__$1,(1),null);
var inst_43661 = (inst_43659__$1 == null);
var state_43679__$1 = (function (){var statearr_43681 = state_43679;
(statearr_43681[(9)] = inst_43660);

(statearr_43681[(7)] = inst_43659__$1);

(statearr_43681[(8)] = inst_43658__$1);

return statearr_43681;
})();
if(cljs.core.truth_(inst_43661)){
var statearr_43682_43702 = state_43679__$1;
(statearr_43682_43702[(1)] = (8));

} else {
var statearr_43683_43703 = state_43679__$1;
(statearr_43683_43703[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43680 === (1))){
var inst_43648 = cljs.core.vec.call(null,chs);
var inst_43649 = inst_43648;
var state_43679__$1 = (function (){var statearr_43684 = state_43679;
(statearr_43684[(10)] = inst_43649);

return statearr_43684;
})();
var statearr_43685_43704 = state_43679__$1;
(statearr_43685_43704[(2)] = null);

(statearr_43685_43704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43680 === (4))){
var inst_43649 = (state_43679[(10)]);
var state_43679__$1 = state_43679;
return cljs.core.async.ioc_alts_BANG_.call(null,state_43679__$1,(7),inst_43649);
} else {
if((state_val_43680 === (6))){
var inst_43675 = (state_43679[(2)]);
var state_43679__$1 = state_43679;
var statearr_43686_43705 = state_43679__$1;
(statearr_43686_43705[(2)] = inst_43675);

(statearr_43686_43705[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43680 === (3))){
var inst_43677 = (state_43679[(2)]);
var state_43679__$1 = state_43679;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43679__$1,inst_43677);
} else {
if((state_val_43680 === (2))){
var inst_43649 = (state_43679[(10)]);
var inst_43651 = cljs.core.count.call(null,inst_43649);
var inst_43652 = (inst_43651 > (0));
var state_43679__$1 = state_43679;
if(cljs.core.truth_(inst_43652)){
var statearr_43688_43706 = state_43679__$1;
(statearr_43688_43706[(1)] = (4));

} else {
var statearr_43689_43707 = state_43679__$1;
(statearr_43689_43707[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43680 === (11))){
var inst_43649 = (state_43679[(10)]);
var inst_43668 = (state_43679[(2)]);
var tmp43687 = inst_43649;
var inst_43649__$1 = tmp43687;
var state_43679__$1 = (function (){var statearr_43690 = state_43679;
(statearr_43690[(11)] = inst_43668);

(statearr_43690[(10)] = inst_43649__$1);

return statearr_43690;
})();
var statearr_43691_43708 = state_43679__$1;
(statearr_43691_43708[(2)] = null);

(statearr_43691_43708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43680 === (9))){
var inst_43659 = (state_43679[(7)]);
var state_43679__$1 = state_43679;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43679__$1,(11),out,inst_43659);
} else {
if((state_val_43680 === (5))){
var inst_43673 = cljs.core.async.close_BANG_.call(null,out);
var state_43679__$1 = state_43679;
var statearr_43692_43709 = state_43679__$1;
(statearr_43692_43709[(2)] = inst_43673);

(statearr_43692_43709[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43680 === (10))){
var inst_43671 = (state_43679[(2)]);
var state_43679__$1 = state_43679;
var statearr_43693_43710 = state_43679__$1;
(statearr_43693_43710[(2)] = inst_43671);

(statearr_43693_43710[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43680 === (8))){
var inst_43660 = (state_43679[(9)]);
var inst_43659 = (state_43679[(7)]);
var inst_43649 = (state_43679[(10)]);
var inst_43658 = (state_43679[(8)]);
var inst_43663 = (function (){var cs = inst_43649;
var vec__43654 = inst_43658;
var v = inst_43659;
var c = inst_43660;
return ((function (cs,vec__43654,v,c,inst_43660,inst_43659,inst_43649,inst_43658,state_val_43680,c__33321__auto___43701,out){
return (function (p1__43645_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__43645_SHARP_);
});
;})(cs,vec__43654,v,c,inst_43660,inst_43659,inst_43649,inst_43658,state_val_43680,c__33321__auto___43701,out))
})();
var inst_43664 = cljs.core.filterv.call(null,inst_43663,inst_43649);
var inst_43649__$1 = inst_43664;
var state_43679__$1 = (function (){var statearr_43694 = state_43679;
(statearr_43694[(10)] = inst_43649__$1);

return statearr_43694;
})();
var statearr_43695_43711 = state_43679__$1;
(statearr_43695_43711[(2)] = null);

(statearr_43695_43711[(1)] = (2));


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
});})(c__33321__auto___43701,out))
;
return ((function (switch__33233__auto__,c__33321__auto___43701,out){
return (function() {
var cljs$core$async$state_machine__33234__auto__ = null;
var cljs$core$async$state_machine__33234__auto____0 = (function (){
var statearr_43696 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43696[(0)] = cljs$core$async$state_machine__33234__auto__);

(statearr_43696[(1)] = (1));

return statearr_43696;
});
var cljs$core$async$state_machine__33234__auto____1 = (function (state_43679){
while(true){
var ret_value__33235__auto__ = (function (){try{while(true){
var result__33236__auto__ = switch__33233__auto__.call(null,state_43679);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33236__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33236__auto__;
}
break;
}
}catch (e43697){if((e43697 instanceof Object)){
var ex__33237__auto__ = e43697;
var statearr_43698_43712 = state_43679;
(statearr_43698_43712[(5)] = ex__33237__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43679);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43697;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43713 = state_43679;
state_43679 = G__43713;
continue;
} else {
return ret_value__33235__auto__;
}
break;
}
});
cljs$core$async$state_machine__33234__auto__ = function(state_43679){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33234__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33234__auto____1.call(this,state_43679);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33234__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33234__auto____0;
cljs$core$async$state_machine__33234__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33234__auto____1;
return cljs$core$async$state_machine__33234__auto__;
})()
;})(switch__33233__auto__,c__33321__auto___43701,out))
})();
var state__33323__auto__ = (function (){var statearr_43699 = f__33322__auto__.call(null);
(statearr_43699[(6)] = c__33321__auto___43701);

return statearr_43699;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33323__auto__);
});})(c__33321__auto___43701,out))
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
var G__43715 = arguments.length;
switch (G__43715) {
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
var c__33321__auto___43760 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33321__auto___43760,out){
return (function (){
var f__33322__auto__ = (function (){var switch__33233__auto__ = ((function (c__33321__auto___43760,out){
return (function (state_43739){
var state_val_43740 = (state_43739[(1)]);
if((state_val_43740 === (7))){
var inst_43721 = (state_43739[(7)]);
var inst_43721__$1 = (state_43739[(2)]);
var inst_43722 = (inst_43721__$1 == null);
var inst_43723 = cljs.core.not.call(null,inst_43722);
var state_43739__$1 = (function (){var statearr_43741 = state_43739;
(statearr_43741[(7)] = inst_43721__$1);

return statearr_43741;
})();
if(inst_43723){
var statearr_43742_43761 = state_43739__$1;
(statearr_43742_43761[(1)] = (8));

} else {
var statearr_43743_43762 = state_43739__$1;
(statearr_43743_43762[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43740 === (1))){
var inst_43716 = (0);
var state_43739__$1 = (function (){var statearr_43744 = state_43739;
(statearr_43744[(8)] = inst_43716);

return statearr_43744;
})();
var statearr_43745_43763 = state_43739__$1;
(statearr_43745_43763[(2)] = null);

(statearr_43745_43763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43740 === (4))){
var state_43739__$1 = state_43739;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43739__$1,(7),ch);
} else {
if((state_val_43740 === (6))){
var inst_43734 = (state_43739[(2)]);
var state_43739__$1 = state_43739;
var statearr_43746_43764 = state_43739__$1;
(statearr_43746_43764[(2)] = inst_43734);

(statearr_43746_43764[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43740 === (3))){
var inst_43736 = (state_43739[(2)]);
var inst_43737 = cljs.core.async.close_BANG_.call(null,out);
var state_43739__$1 = (function (){var statearr_43747 = state_43739;
(statearr_43747[(9)] = inst_43736);

return statearr_43747;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43739__$1,inst_43737);
} else {
if((state_val_43740 === (2))){
var inst_43716 = (state_43739[(8)]);
var inst_43718 = (inst_43716 < n);
var state_43739__$1 = state_43739;
if(cljs.core.truth_(inst_43718)){
var statearr_43748_43765 = state_43739__$1;
(statearr_43748_43765[(1)] = (4));

} else {
var statearr_43749_43766 = state_43739__$1;
(statearr_43749_43766[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43740 === (11))){
var inst_43716 = (state_43739[(8)]);
var inst_43726 = (state_43739[(2)]);
var inst_43727 = (inst_43716 + (1));
var inst_43716__$1 = inst_43727;
var state_43739__$1 = (function (){var statearr_43750 = state_43739;
(statearr_43750[(8)] = inst_43716__$1);

(statearr_43750[(10)] = inst_43726);

return statearr_43750;
})();
var statearr_43751_43767 = state_43739__$1;
(statearr_43751_43767[(2)] = null);

(statearr_43751_43767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43740 === (9))){
var state_43739__$1 = state_43739;
var statearr_43752_43768 = state_43739__$1;
(statearr_43752_43768[(2)] = null);

(statearr_43752_43768[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43740 === (5))){
var state_43739__$1 = state_43739;
var statearr_43753_43769 = state_43739__$1;
(statearr_43753_43769[(2)] = null);

(statearr_43753_43769[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43740 === (10))){
var inst_43731 = (state_43739[(2)]);
var state_43739__$1 = state_43739;
var statearr_43754_43770 = state_43739__$1;
(statearr_43754_43770[(2)] = inst_43731);

(statearr_43754_43770[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43740 === (8))){
var inst_43721 = (state_43739[(7)]);
var state_43739__$1 = state_43739;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43739__$1,(11),out,inst_43721);
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
});})(c__33321__auto___43760,out))
;
return ((function (switch__33233__auto__,c__33321__auto___43760,out){
return (function() {
var cljs$core$async$state_machine__33234__auto__ = null;
var cljs$core$async$state_machine__33234__auto____0 = (function (){
var statearr_43755 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43755[(0)] = cljs$core$async$state_machine__33234__auto__);

(statearr_43755[(1)] = (1));

return statearr_43755;
});
var cljs$core$async$state_machine__33234__auto____1 = (function (state_43739){
while(true){
var ret_value__33235__auto__ = (function (){try{while(true){
var result__33236__auto__ = switch__33233__auto__.call(null,state_43739);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33236__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33236__auto__;
}
break;
}
}catch (e43756){if((e43756 instanceof Object)){
var ex__33237__auto__ = e43756;
var statearr_43757_43771 = state_43739;
(statearr_43757_43771[(5)] = ex__33237__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43739);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43756;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43772 = state_43739;
state_43739 = G__43772;
continue;
} else {
return ret_value__33235__auto__;
}
break;
}
});
cljs$core$async$state_machine__33234__auto__ = function(state_43739){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33234__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33234__auto____1.call(this,state_43739);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33234__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33234__auto____0;
cljs$core$async$state_machine__33234__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33234__auto____1;
return cljs$core$async$state_machine__33234__auto__;
})()
;})(switch__33233__auto__,c__33321__auto___43760,out))
})();
var state__33323__auto__ = (function (){var statearr_43758 = f__33322__auto__.call(null);
(statearr_43758[(6)] = c__33321__auto___43760);

return statearr_43758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33323__auto__);
});})(c__33321__auto___43760,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async43774 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43774 = (function (f,ch,meta43775){
this.f = f;
this.ch = ch;
this.meta43775 = meta43775;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43774.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43776,meta43775__$1){
var self__ = this;
var _43776__$1 = this;
return (new cljs.core.async.t_cljs$core$async43774(self__.f,self__.ch,meta43775__$1));
});

cljs.core.async.t_cljs$core$async43774.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43776){
var self__ = this;
var _43776__$1 = this;
return self__.meta43775;
});

cljs.core.async.t_cljs$core$async43774.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43774.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43774.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43774.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43774.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async43777 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43777 = (function (f,ch,meta43775,_,fn1,meta43778){
this.f = f;
this.ch = ch;
this.meta43775 = meta43775;
this._ = _;
this.fn1 = fn1;
this.meta43778 = meta43778;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43777.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_43779,meta43778__$1){
var self__ = this;
var _43779__$1 = this;
return (new cljs.core.async.t_cljs$core$async43777(self__.f,self__.ch,self__.meta43775,self__._,self__.fn1,meta43778__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async43777.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_43779){
var self__ = this;
var _43779__$1 = this;
return self__.meta43778;
});})(___$1))
;

cljs.core.async.t_cljs$core$async43777.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43777.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async43777.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async43777.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__43773_SHARP_){
return f1.call(null,(((p1__43773_SHARP_ == null))?null:self__.f.call(null,p1__43773_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async43777.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43775","meta43775",480629499,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async43774","cljs.core.async/t_cljs$core$async43774",217904251,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta43778","meta43778",626984906,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async43777.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43777.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43777";

cljs.core.async.t_cljs$core$async43777.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__27663__auto__,writer__27664__auto__,opt__27665__auto__){
return cljs.core._write.call(null,writer__27664__auto__,"cljs.core.async/t_cljs$core$async43777");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async43777 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async43777(f__$1,ch__$1,meta43775__$1,___$2,fn1__$1,meta43778){
return (new cljs.core.async.t_cljs$core$async43777(f__$1,ch__$1,meta43775__$1,___$2,fn1__$1,meta43778));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async43777(self__.f,self__.ch,self__.meta43775,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async43774.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43774.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async43774.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43775","meta43775",480629499,null)], null);
});

cljs.core.async.t_cljs$core$async43774.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43774.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43774";

cljs.core.async.t_cljs$core$async43774.cljs$lang$ctorPrWriter = (function (this__27663__auto__,writer__27664__auto__,opt__27665__auto__){
return cljs.core._write.call(null,writer__27664__auto__,"cljs.core.async/t_cljs$core$async43774");
});

cljs.core.async.__GT_t_cljs$core$async43774 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async43774(f__$1,ch__$1,meta43775){
return (new cljs.core.async.t_cljs$core$async43774(f__$1,ch__$1,meta43775));
});

}

return (new cljs.core.async.t_cljs$core$async43774(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async43780 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43780 = (function (f,ch,meta43781){
this.f = f;
this.ch = ch;
this.meta43781 = meta43781;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43780.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43782,meta43781__$1){
var self__ = this;
var _43782__$1 = this;
return (new cljs.core.async.t_cljs$core$async43780(self__.f,self__.ch,meta43781__$1));
});

cljs.core.async.t_cljs$core$async43780.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43782){
var self__ = this;
var _43782__$1 = this;
return self__.meta43781;
});

cljs.core.async.t_cljs$core$async43780.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43780.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43780.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43780.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async43780.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43780.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async43780.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43781","meta43781",960453715,null)], null);
});

cljs.core.async.t_cljs$core$async43780.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43780.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43780";

cljs.core.async.t_cljs$core$async43780.cljs$lang$ctorPrWriter = (function (this__27663__auto__,writer__27664__auto__,opt__27665__auto__){
return cljs.core._write.call(null,writer__27664__auto__,"cljs.core.async/t_cljs$core$async43780");
});

cljs.core.async.__GT_t_cljs$core$async43780 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async43780(f__$1,ch__$1,meta43781){
return (new cljs.core.async.t_cljs$core$async43780(f__$1,ch__$1,meta43781));
});

}

return (new cljs.core.async.t_cljs$core$async43780(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async43783 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43783 = (function (p,ch,meta43784){
this.p = p;
this.ch = ch;
this.meta43784 = meta43784;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43783.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43785,meta43784__$1){
var self__ = this;
var _43785__$1 = this;
return (new cljs.core.async.t_cljs$core$async43783(self__.p,self__.ch,meta43784__$1));
});

cljs.core.async.t_cljs$core$async43783.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43785){
var self__ = this;
var _43785__$1 = this;
return self__.meta43784;
});

cljs.core.async.t_cljs$core$async43783.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43783.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43783.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43783.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43783.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async43783.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43783.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async43783.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43784","meta43784",1279334945,null)], null);
});

cljs.core.async.t_cljs$core$async43783.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43783.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43783";

cljs.core.async.t_cljs$core$async43783.cljs$lang$ctorPrWriter = (function (this__27663__auto__,writer__27664__auto__,opt__27665__auto__){
return cljs.core._write.call(null,writer__27664__auto__,"cljs.core.async/t_cljs$core$async43783");
});

cljs.core.async.__GT_t_cljs$core$async43783 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async43783(p__$1,ch__$1,meta43784){
return (new cljs.core.async.t_cljs$core$async43783(p__$1,ch__$1,meta43784));
});

}

return (new cljs.core.async.t_cljs$core$async43783(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__43787 = arguments.length;
switch (G__43787) {
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
var c__33321__auto___43827 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33321__auto___43827,out){
return (function (){
var f__33322__auto__ = (function (){var switch__33233__auto__ = ((function (c__33321__auto___43827,out){
return (function (state_43808){
var state_val_43809 = (state_43808[(1)]);
if((state_val_43809 === (7))){
var inst_43804 = (state_43808[(2)]);
var state_43808__$1 = state_43808;
var statearr_43810_43828 = state_43808__$1;
(statearr_43810_43828[(2)] = inst_43804);

(statearr_43810_43828[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43809 === (1))){
var state_43808__$1 = state_43808;
var statearr_43811_43829 = state_43808__$1;
(statearr_43811_43829[(2)] = null);

(statearr_43811_43829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43809 === (4))){
var inst_43790 = (state_43808[(7)]);
var inst_43790__$1 = (state_43808[(2)]);
var inst_43791 = (inst_43790__$1 == null);
var state_43808__$1 = (function (){var statearr_43812 = state_43808;
(statearr_43812[(7)] = inst_43790__$1);

return statearr_43812;
})();
if(cljs.core.truth_(inst_43791)){
var statearr_43813_43830 = state_43808__$1;
(statearr_43813_43830[(1)] = (5));

} else {
var statearr_43814_43831 = state_43808__$1;
(statearr_43814_43831[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43809 === (6))){
var inst_43790 = (state_43808[(7)]);
var inst_43795 = p.call(null,inst_43790);
var state_43808__$1 = state_43808;
if(cljs.core.truth_(inst_43795)){
var statearr_43815_43832 = state_43808__$1;
(statearr_43815_43832[(1)] = (8));

} else {
var statearr_43816_43833 = state_43808__$1;
(statearr_43816_43833[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43809 === (3))){
var inst_43806 = (state_43808[(2)]);
var state_43808__$1 = state_43808;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43808__$1,inst_43806);
} else {
if((state_val_43809 === (2))){
var state_43808__$1 = state_43808;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43808__$1,(4),ch);
} else {
if((state_val_43809 === (11))){
var inst_43798 = (state_43808[(2)]);
var state_43808__$1 = state_43808;
var statearr_43817_43834 = state_43808__$1;
(statearr_43817_43834[(2)] = inst_43798);

(statearr_43817_43834[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43809 === (9))){
var state_43808__$1 = state_43808;
var statearr_43818_43835 = state_43808__$1;
(statearr_43818_43835[(2)] = null);

(statearr_43818_43835[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43809 === (5))){
var inst_43793 = cljs.core.async.close_BANG_.call(null,out);
var state_43808__$1 = state_43808;
var statearr_43819_43836 = state_43808__$1;
(statearr_43819_43836[(2)] = inst_43793);

(statearr_43819_43836[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43809 === (10))){
var inst_43801 = (state_43808[(2)]);
var state_43808__$1 = (function (){var statearr_43820 = state_43808;
(statearr_43820[(8)] = inst_43801);

return statearr_43820;
})();
var statearr_43821_43837 = state_43808__$1;
(statearr_43821_43837[(2)] = null);

(statearr_43821_43837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43809 === (8))){
var inst_43790 = (state_43808[(7)]);
var state_43808__$1 = state_43808;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43808__$1,(11),out,inst_43790);
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
});})(c__33321__auto___43827,out))
;
return ((function (switch__33233__auto__,c__33321__auto___43827,out){
return (function() {
var cljs$core$async$state_machine__33234__auto__ = null;
var cljs$core$async$state_machine__33234__auto____0 = (function (){
var statearr_43822 = [null,null,null,null,null,null,null,null,null];
(statearr_43822[(0)] = cljs$core$async$state_machine__33234__auto__);

(statearr_43822[(1)] = (1));

return statearr_43822;
});
var cljs$core$async$state_machine__33234__auto____1 = (function (state_43808){
while(true){
var ret_value__33235__auto__ = (function (){try{while(true){
var result__33236__auto__ = switch__33233__auto__.call(null,state_43808);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33236__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33236__auto__;
}
break;
}
}catch (e43823){if((e43823 instanceof Object)){
var ex__33237__auto__ = e43823;
var statearr_43824_43838 = state_43808;
(statearr_43824_43838[(5)] = ex__33237__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43808);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43823;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43839 = state_43808;
state_43808 = G__43839;
continue;
} else {
return ret_value__33235__auto__;
}
break;
}
});
cljs$core$async$state_machine__33234__auto__ = function(state_43808){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33234__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33234__auto____1.call(this,state_43808);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33234__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33234__auto____0;
cljs$core$async$state_machine__33234__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33234__auto____1;
return cljs$core$async$state_machine__33234__auto__;
})()
;})(switch__33233__auto__,c__33321__auto___43827,out))
})();
var state__33323__auto__ = (function (){var statearr_43825 = f__33322__auto__.call(null);
(statearr_43825[(6)] = c__33321__auto___43827);

return statearr_43825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33323__auto__);
});})(c__33321__auto___43827,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__43841 = arguments.length;
switch (G__43841) {
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
var c__33321__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33321__auto__){
return (function (){
var f__33322__auto__ = (function (){var switch__33233__auto__ = ((function (c__33321__auto__){
return (function (state_43904){
var state_val_43905 = (state_43904[(1)]);
if((state_val_43905 === (7))){
var inst_43900 = (state_43904[(2)]);
var state_43904__$1 = state_43904;
var statearr_43906_43944 = state_43904__$1;
(statearr_43906_43944[(2)] = inst_43900);

(statearr_43906_43944[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43905 === (20))){
var inst_43870 = (state_43904[(7)]);
var inst_43881 = (state_43904[(2)]);
var inst_43882 = cljs.core.next.call(null,inst_43870);
var inst_43856 = inst_43882;
var inst_43857 = null;
var inst_43858 = (0);
var inst_43859 = (0);
var state_43904__$1 = (function (){var statearr_43907 = state_43904;
(statearr_43907[(8)] = inst_43856);

(statearr_43907[(9)] = inst_43859);

(statearr_43907[(10)] = inst_43881);

(statearr_43907[(11)] = inst_43858);

(statearr_43907[(12)] = inst_43857);

return statearr_43907;
})();
var statearr_43908_43945 = state_43904__$1;
(statearr_43908_43945[(2)] = null);

(statearr_43908_43945[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43905 === (1))){
var state_43904__$1 = state_43904;
var statearr_43909_43946 = state_43904__$1;
(statearr_43909_43946[(2)] = null);

(statearr_43909_43946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43905 === (4))){
var inst_43845 = (state_43904[(13)]);
var inst_43845__$1 = (state_43904[(2)]);
var inst_43846 = (inst_43845__$1 == null);
var state_43904__$1 = (function (){var statearr_43910 = state_43904;
(statearr_43910[(13)] = inst_43845__$1);

return statearr_43910;
})();
if(cljs.core.truth_(inst_43846)){
var statearr_43911_43947 = state_43904__$1;
(statearr_43911_43947[(1)] = (5));

} else {
var statearr_43912_43948 = state_43904__$1;
(statearr_43912_43948[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43905 === (15))){
var state_43904__$1 = state_43904;
var statearr_43916_43949 = state_43904__$1;
(statearr_43916_43949[(2)] = null);

(statearr_43916_43949[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43905 === (21))){
var state_43904__$1 = state_43904;
var statearr_43917_43950 = state_43904__$1;
(statearr_43917_43950[(2)] = null);

(statearr_43917_43950[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43905 === (13))){
var inst_43856 = (state_43904[(8)]);
var inst_43859 = (state_43904[(9)]);
var inst_43858 = (state_43904[(11)]);
var inst_43857 = (state_43904[(12)]);
var inst_43866 = (state_43904[(2)]);
var inst_43867 = (inst_43859 + (1));
var tmp43913 = inst_43856;
var tmp43914 = inst_43858;
var tmp43915 = inst_43857;
var inst_43856__$1 = tmp43913;
var inst_43857__$1 = tmp43915;
var inst_43858__$1 = tmp43914;
var inst_43859__$1 = inst_43867;
var state_43904__$1 = (function (){var statearr_43918 = state_43904;
(statearr_43918[(8)] = inst_43856__$1);

(statearr_43918[(9)] = inst_43859__$1);

(statearr_43918[(11)] = inst_43858__$1);

(statearr_43918[(14)] = inst_43866);

(statearr_43918[(12)] = inst_43857__$1);

return statearr_43918;
})();
var statearr_43919_43951 = state_43904__$1;
(statearr_43919_43951[(2)] = null);

(statearr_43919_43951[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43905 === (22))){
var state_43904__$1 = state_43904;
var statearr_43920_43952 = state_43904__$1;
(statearr_43920_43952[(2)] = null);

(statearr_43920_43952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43905 === (6))){
var inst_43845 = (state_43904[(13)]);
var inst_43854 = f.call(null,inst_43845);
var inst_43855 = cljs.core.seq.call(null,inst_43854);
var inst_43856 = inst_43855;
var inst_43857 = null;
var inst_43858 = (0);
var inst_43859 = (0);
var state_43904__$1 = (function (){var statearr_43921 = state_43904;
(statearr_43921[(8)] = inst_43856);

(statearr_43921[(9)] = inst_43859);

(statearr_43921[(11)] = inst_43858);

(statearr_43921[(12)] = inst_43857);

return statearr_43921;
})();
var statearr_43922_43953 = state_43904__$1;
(statearr_43922_43953[(2)] = null);

(statearr_43922_43953[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43905 === (17))){
var inst_43870 = (state_43904[(7)]);
var inst_43874 = cljs.core.chunk_first.call(null,inst_43870);
var inst_43875 = cljs.core.chunk_rest.call(null,inst_43870);
var inst_43876 = cljs.core.count.call(null,inst_43874);
var inst_43856 = inst_43875;
var inst_43857 = inst_43874;
var inst_43858 = inst_43876;
var inst_43859 = (0);
var state_43904__$1 = (function (){var statearr_43923 = state_43904;
(statearr_43923[(8)] = inst_43856);

(statearr_43923[(9)] = inst_43859);

(statearr_43923[(11)] = inst_43858);

(statearr_43923[(12)] = inst_43857);

return statearr_43923;
})();
var statearr_43924_43954 = state_43904__$1;
(statearr_43924_43954[(2)] = null);

(statearr_43924_43954[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43905 === (3))){
var inst_43902 = (state_43904[(2)]);
var state_43904__$1 = state_43904;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43904__$1,inst_43902);
} else {
if((state_val_43905 === (12))){
var inst_43890 = (state_43904[(2)]);
var state_43904__$1 = state_43904;
var statearr_43925_43955 = state_43904__$1;
(statearr_43925_43955[(2)] = inst_43890);

(statearr_43925_43955[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43905 === (2))){
var state_43904__$1 = state_43904;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43904__$1,(4),in$);
} else {
if((state_val_43905 === (23))){
var inst_43898 = (state_43904[(2)]);
var state_43904__$1 = state_43904;
var statearr_43926_43956 = state_43904__$1;
(statearr_43926_43956[(2)] = inst_43898);

(statearr_43926_43956[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43905 === (19))){
var inst_43885 = (state_43904[(2)]);
var state_43904__$1 = state_43904;
var statearr_43927_43957 = state_43904__$1;
(statearr_43927_43957[(2)] = inst_43885);

(statearr_43927_43957[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43905 === (11))){
var inst_43856 = (state_43904[(8)]);
var inst_43870 = (state_43904[(7)]);
var inst_43870__$1 = cljs.core.seq.call(null,inst_43856);
var state_43904__$1 = (function (){var statearr_43928 = state_43904;
(statearr_43928[(7)] = inst_43870__$1);

return statearr_43928;
})();
if(inst_43870__$1){
var statearr_43929_43958 = state_43904__$1;
(statearr_43929_43958[(1)] = (14));

} else {
var statearr_43930_43959 = state_43904__$1;
(statearr_43930_43959[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43905 === (9))){
var inst_43892 = (state_43904[(2)]);
var inst_43893 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_43904__$1 = (function (){var statearr_43931 = state_43904;
(statearr_43931[(15)] = inst_43892);

return statearr_43931;
})();
if(cljs.core.truth_(inst_43893)){
var statearr_43932_43960 = state_43904__$1;
(statearr_43932_43960[(1)] = (21));

} else {
var statearr_43933_43961 = state_43904__$1;
(statearr_43933_43961[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43905 === (5))){
var inst_43848 = cljs.core.async.close_BANG_.call(null,out);
var state_43904__$1 = state_43904;
var statearr_43934_43962 = state_43904__$1;
(statearr_43934_43962[(2)] = inst_43848);

(statearr_43934_43962[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43905 === (14))){
var inst_43870 = (state_43904[(7)]);
var inst_43872 = cljs.core.chunked_seq_QMARK_.call(null,inst_43870);
var state_43904__$1 = state_43904;
if(inst_43872){
var statearr_43935_43963 = state_43904__$1;
(statearr_43935_43963[(1)] = (17));

} else {
var statearr_43936_43964 = state_43904__$1;
(statearr_43936_43964[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43905 === (16))){
var inst_43888 = (state_43904[(2)]);
var state_43904__$1 = state_43904;
var statearr_43937_43965 = state_43904__$1;
(statearr_43937_43965[(2)] = inst_43888);

(statearr_43937_43965[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43905 === (10))){
var inst_43859 = (state_43904[(9)]);
var inst_43857 = (state_43904[(12)]);
var inst_43864 = cljs.core._nth.call(null,inst_43857,inst_43859);
var state_43904__$1 = state_43904;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43904__$1,(13),out,inst_43864);
} else {
if((state_val_43905 === (18))){
var inst_43870 = (state_43904[(7)]);
var inst_43879 = cljs.core.first.call(null,inst_43870);
var state_43904__$1 = state_43904;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43904__$1,(20),out,inst_43879);
} else {
if((state_val_43905 === (8))){
var inst_43859 = (state_43904[(9)]);
var inst_43858 = (state_43904[(11)]);
var inst_43861 = (inst_43859 < inst_43858);
var inst_43862 = inst_43861;
var state_43904__$1 = state_43904;
if(cljs.core.truth_(inst_43862)){
var statearr_43938_43966 = state_43904__$1;
(statearr_43938_43966[(1)] = (10));

} else {
var statearr_43939_43967 = state_43904__$1;
(statearr_43939_43967[(1)] = (11));

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
});})(c__33321__auto__))
;
return ((function (switch__33233__auto__,c__33321__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__33234__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33234__auto____0 = (function (){
var statearr_43940 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43940[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33234__auto__);

(statearr_43940[(1)] = (1));

return statearr_43940;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33234__auto____1 = (function (state_43904){
while(true){
var ret_value__33235__auto__ = (function (){try{while(true){
var result__33236__auto__ = switch__33233__auto__.call(null,state_43904);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33236__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33236__auto__;
}
break;
}
}catch (e43941){if((e43941 instanceof Object)){
var ex__33237__auto__ = e43941;
var statearr_43942_43968 = state_43904;
(statearr_43942_43968[(5)] = ex__33237__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43904);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43941;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43969 = state_43904;
state_43904 = G__43969;
continue;
} else {
return ret_value__33235__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33234__auto__ = function(state_43904){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33234__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33234__auto____1.call(this,state_43904);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__33234__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33234__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33234__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33234__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33234__auto__;
})()
;})(switch__33233__auto__,c__33321__auto__))
})();
var state__33323__auto__ = (function (){var statearr_43943 = f__33322__auto__.call(null);
(statearr_43943[(6)] = c__33321__auto__);

return statearr_43943;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33323__auto__);
});})(c__33321__auto__))
);

return c__33321__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__43971 = arguments.length;
switch (G__43971) {
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
var G__43974 = arguments.length;
switch (G__43974) {
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
var G__43977 = arguments.length;
switch (G__43977) {
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
var c__33321__auto___44024 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33321__auto___44024,out){
return (function (){
var f__33322__auto__ = (function (){var switch__33233__auto__ = ((function (c__33321__auto___44024,out){
return (function (state_44001){
var state_val_44002 = (state_44001[(1)]);
if((state_val_44002 === (7))){
var inst_43996 = (state_44001[(2)]);
var state_44001__$1 = state_44001;
var statearr_44003_44025 = state_44001__$1;
(statearr_44003_44025[(2)] = inst_43996);

(statearr_44003_44025[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44002 === (1))){
var inst_43978 = null;
var state_44001__$1 = (function (){var statearr_44004 = state_44001;
(statearr_44004[(7)] = inst_43978);

return statearr_44004;
})();
var statearr_44005_44026 = state_44001__$1;
(statearr_44005_44026[(2)] = null);

(statearr_44005_44026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44002 === (4))){
var inst_43981 = (state_44001[(8)]);
var inst_43981__$1 = (state_44001[(2)]);
var inst_43982 = (inst_43981__$1 == null);
var inst_43983 = cljs.core.not.call(null,inst_43982);
var state_44001__$1 = (function (){var statearr_44006 = state_44001;
(statearr_44006[(8)] = inst_43981__$1);

return statearr_44006;
})();
if(inst_43983){
var statearr_44007_44027 = state_44001__$1;
(statearr_44007_44027[(1)] = (5));

} else {
var statearr_44008_44028 = state_44001__$1;
(statearr_44008_44028[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44002 === (6))){
var state_44001__$1 = state_44001;
var statearr_44009_44029 = state_44001__$1;
(statearr_44009_44029[(2)] = null);

(statearr_44009_44029[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44002 === (3))){
var inst_43998 = (state_44001[(2)]);
var inst_43999 = cljs.core.async.close_BANG_.call(null,out);
var state_44001__$1 = (function (){var statearr_44010 = state_44001;
(statearr_44010[(9)] = inst_43998);

return statearr_44010;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44001__$1,inst_43999);
} else {
if((state_val_44002 === (2))){
var state_44001__$1 = state_44001;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44001__$1,(4),ch);
} else {
if((state_val_44002 === (11))){
var inst_43981 = (state_44001[(8)]);
var inst_43990 = (state_44001[(2)]);
var inst_43978 = inst_43981;
var state_44001__$1 = (function (){var statearr_44011 = state_44001;
(statearr_44011[(7)] = inst_43978);

(statearr_44011[(10)] = inst_43990);

return statearr_44011;
})();
var statearr_44012_44030 = state_44001__$1;
(statearr_44012_44030[(2)] = null);

(statearr_44012_44030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44002 === (9))){
var inst_43981 = (state_44001[(8)]);
var state_44001__$1 = state_44001;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44001__$1,(11),out,inst_43981);
} else {
if((state_val_44002 === (5))){
var inst_43978 = (state_44001[(7)]);
var inst_43981 = (state_44001[(8)]);
var inst_43985 = cljs.core._EQ_.call(null,inst_43981,inst_43978);
var state_44001__$1 = state_44001;
if(inst_43985){
var statearr_44014_44031 = state_44001__$1;
(statearr_44014_44031[(1)] = (8));

} else {
var statearr_44015_44032 = state_44001__$1;
(statearr_44015_44032[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44002 === (10))){
var inst_43993 = (state_44001[(2)]);
var state_44001__$1 = state_44001;
var statearr_44016_44033 = state_44001__$1;
(statearr_44016_44033[(2)] = inst_43993);

(statearr_44016_44033[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44002 === (8))){
var inst_43978 = (state_44001[(7)]);
var tmp44013 = inst_43978;
var inst_43978__$1 = tmp44013;
var state_44001__$1 = (function (){var statearr_44017 = state_44001;
(statearr_44017[(7)] = inst_43978__$1);

return statearr_44017;
})();
var statearr_44018_44034 = state_44001__$1;
(statearr_44018_44034[(2)] = null);

(statearr_44018_44034[(1)] = (2));


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
});})(c__33321__auto___44024,out))
;
return ((function (switch__33233__auto__,c__33321__auto___44024,out){
return (function() {
var cljs$core$async$state_machine__33234__auto__ = null;
var cljs$core$async$state_machine__33234__auto____0 = (function (){
var statearr_44019 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44019[(0)] = cljs$core$async$state_machine__33234__auto__);

(statearr_44019[(1)] = (1));

return statearr_44019;
});
var cljs$core$async$state_machine__33234__auto____1 = (function (state_44001){
while(true){
var ret_value__33235__auto__ = (function (){try{while(true){
var result__33236__auto__ = switch__33233__auto__.call(null,state_44001);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33236__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33236__auto__;
}
break;
}
}catch (e44020){if((e44020 instanceof Object)){
var ex__33237__auto__ = e44020;
var statearr_44021_44035 = state_44001;
(statearr_44021_44035[(5)] = ex__33237__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44001);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44020;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44036 = state_44001;
state_44001 = G__44036;
continue;
} else {
return ret_value__33235__auto__;
}
break;
}
});
cljs$core$async$state_machine__33234__auto__ = function(state_44001){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33234__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33234__auto____1.call(this,state_44001);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33234__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33234__auto____0;
cljs$core$async$state_machine__33234__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33234__auto____1;
return cljs$core$async$state_machine__33234__auto__;
})()
;})(switch__33233__auto__,c__33321__auto___44024,out))
})();
var state__33323__auto__ = (function (){var statearr_44022 = f__33322__auto__.call(null);
(statearr_44022[(6)] = c__33321__auto___44024);

return statearr_44022;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33323__auto__);
});})(c__33321__auto___44024,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__44038 = arguments.length;
switch (G__44038) {
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
var c__33321__auto___44104 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33321__auto___44104,out){
return (function (){
var f__33322__auto__ = (function (){var switch__33233__auto__ = ((function (c__33321__auto___44104,out){
return (function (state_44076){
var state_val_44077 = (state_44076[(1)]);
if((state_val_44077 === (7))){
var inst_44072 = (state_44076[(2)]);
var state_44076__$1 = state_44076;
var statearr_44078_44105 = state_44076__$1;
(statearr_44078_44105[(2)] = inst_44072);

(statearr_44078_44105[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44077 === (1))){
var inst_44039 = (new Array(n));
var inst_44040 = inst_44039;
var inst_44041 = (0);
var state_44076__$1 = (function (){var statearr_44079 = state_44076;
(statearr_44079[(7)] = inst_44040);

(statearr_44079[(8)] = inst_44041);

return statearr_44079;
})();
var statearr_44080_44106 = state_44076__$1;
(statearr_44080_44106[(2)] = null);

(statearr_44080_44106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44077 === (4))){
var inst_44044 = (state_44076[(9)]);
var inst_44044__$1 = (state_44076[(2)]);
var inst_44045 = (inst_44044__$1 == null);
var inst_44046 = cljs.core.not.call(null,inst_44045);
var state_44076__$1 = (function (){var statearr_44081 = state_44076;
(statearr_44081[(9)] = inst_44044__$1);

return statearr_44081;
})();
if(inst_44046){
var statearr_44082_44107 = state_44076__$1;
(statearr_44082_44107[(1)] = (5));

} else {
var statearr_44083_44108 = state_44076__$1;
(statearr_44083_44108[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44077 === (15))){
var inst_44066 = (state_44076[(2)]);
var state_44076__$1 = state_44076;
var statearr_44084_44109 = state_44076__$1;
(statearr_44084_44109[(2)] = inst_44066);

(statearr_44084_44109[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44077 === (13))){
var state_44076__$1 = state_44076;
var statearr_44085_44110 = state_44076__$1;
(statearr_44085_44110[(2)] = null);

(statearr_44085_44110[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44077 === (6))){
var inst_44041 = (state_44076[(8)]);
var inst_44062 = (inst_44041 > (0));
var state_44076__$1 = state_44076;
if(cljs.core.truth_(inst_44062)){
var statearr_44086_44111 = state_44076__$1;
(statearr_44086_44111[(1)] = (12));

} else {
var statearr_44087_44112 = state_44076__$1;
(statearr_44087_44112[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44077 === (3))){
var inst_44074 = (state_44076[(2)]);
var state_44076__$1 = state_44076;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44076__$1,inst_44074);
} else {
if((state_val_44077 === (12))){
var inst_44040 = (state_44076[(7)]);
var inst_44064 = cljs.core.vec.call(null,inst_44040);
var state_44076__$1 = state_44076;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44076__$1,(15),out,inst_44064);
} else {
if((state_val_44077 === (2))){
var state_44076__$1 = state_44076;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44076__$1,(4),ch);
} else {
if((state_val_44077 === (11))){
var inst_44056 = (state_44076[(2)]);
var inst_44057 = (new Array(n));
var inst_44040 = inst_44057;
var inst_44041 = (0);
var state_44076__$1 = (function (){var statearr_44088 = state_44076;
(statearr_44088[(10)] = inst_44056);

(statearr_44088[(7)] = inst_44040);

(statearr_44088[(8)] = inst_44041);

return statearr_44088;
})();
var statearr_44089_44113 = state_44076__$1;
(statearr_44089_44113[(2)] = null);

(statearr_44089_44113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44077 === (9))){
var inst_44040 = (state_44076[(7)]);
var inst_44054 = cljs.core.vec.call(null,inst_44040);
var state_44076__$1 = state_44076;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44076__$1,(11),out,inst_44054);
} else {
if((state_val_44077 === (5))){
var inst_44044 = (state_44076[(9)]);
var inst_44049 = (state_44076[(11)]);
var inst_44040 = (state_44076[(7)]);
var inst_44041 = (state_44076[(8)]);
var inst_44048 = (inst_44040[inst_44041] = inst_44044);
var inst_44049__$1 = (inst_44041 + (1));
var inst_44050 = (inst_44049__$1 < n);
var state_44076__$1 = (function (){var statearr_44090 = state_44076;
(statearr_44090[(11)] = inst_44049__$1);

(statearr_44090[(12)] = inst_44048);

return statearr_44090;
})();
if(cljs.core.truth_(inst_44050)){
var statearr_44091_44114 = state_44076__$1;
(statearr_44091_44114[(1)] = (8));

} else {
var statearr_44092_44115 = state_44076__$1;
(statearr_44092_44115[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44077 === (14))){
var inst_44069 = (state_44076[(2)]);
var inst_44070 = cljs.core.async.close_BANG_.call(null,out);
var state_44076__$1 = (function (){var statearr_44094 = state_44076;
(statearr_44094[(13)] = inst_44069);

return statearr_44094;
})();
var statearr_44095_44116 = state_44076__$1;
(statearr_44095_44116[(2)] = inst_44070);

(statearr_44095_44116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44077 === (10))){
var inst_44060 = (state_44076[(2)]);
var state_44076__$1 = state_44076;
var statearr_44096_44117 = state_44076__$1;
(statearr_44096_44117[(2)] = inst_44060);

(statearr_44096_44117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44077 === (8))){
var inst_44049 = (state_44076[(11)]);
var inst_44040 = (state_44076[(7)]);
var tmp44093 = inst_44040;
var inst_44040__$1 = tmp44093;
var inst_44041 = inst_44049;
var state_44076__$1 = (function (){var statearr_44097 = state_44076;
(statearr_44097[(7)] = inst_44040__$1);

(statearr_44097[(8)] = inst_44041);

return statearr_44097;
})();
var statearr_44098_44118 = state_44076__$1;
(statearr_44098_44118[(2)] = null);

(statearr_44098_44118[(1)] = (2));


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
});})(c__33321__auto___44104,out))
;
return ((function (switch__33233__auto__,c__33321__auto___44104,out){
return (function() {
var cljs$core$async$state_machine__33234__auto__ = null;
var cljs$core$async$state_machine__33234__auto____0 = (function (){
var statearr_44099 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44099[(0)] = cljs$core$async$state_machine__33234__auto__);

(statearr_44099[(1)] = (1));

return statearr_44099;
});
var cljs$core$async$state_machine__33234__auto____1 = (function (state_44076){
while(true){
var ret_value__33235__auto__ = (function (){try{while(true){
var result__33236__auto__ = switch__33233__auto__.call(null,state_44076);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33236__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33236__auto__;
}
break;
}
}catch (e44100){if((e44100 instanceof Object)){
var ex__33237__auto__ = e44100;
var statearr_44101_44119 = state_44076;
(statearr_44101_44119[(5)] = ex__33237__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44076);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44100;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44120 = state_44076;
state_44076 = G__44120;
continue;
} else {
return ret_value__33235__auto__;
}
break;
}
});
cljs$core$async$state_machine__33234__auto__ = function(state_44076){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33234__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33234__auto____1.call(this,state_44076);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33234__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33234__auto____0;
cljs$core$async$state_machine__33234__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33234__auto____1;
return cljs$core$async$state_machine__33234__auto__;
})()
;})(switch__33233__auto__,c__33321__auto___44104,out))
})();
var state__33323__auto__ = (function (){var statearr_44102 = f__33322__auto__.call(null);
(statearr_44102[(6)] = c__33321__auto___44104);

return statearr_44102;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33323__auto__);
});})(c__33321__auto___44104,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__44122 = arguments.length;
switch (G__44122) {
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
var c__33321__auto___44192 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33321__auto___44192,out){
return (function (){
var f__33322__auto__ = (function (){var switch__33233__auto__ = ((function (c__33321__auto___44192,out){
return (function (state_44164){
var state_val_44165 = (state_44164[(1)]);
if((state_val_44165 === (7))){
var inst_44160 = (state_44164[(2)]);
var state_44164__$1 = state_44164;
var statearr_44166_44193 = state_44164__$1;
(statearr_44166_44193[(2)] = inst_44160);

(statearr_44166_44193[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44165 === (1))){
var inst_44123 = [];
var inst_44124 = inst_44123;
var inst_44125 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_44164__$1 = (function (){var statearr_44167 = state_44164;
(statearr_44167[(7)] = inst_44125);

(statearr_44167[(8)] = inst_44124);

return statearr_44167;
})();
var statearr_44168_44194 = state_44164__$1;
(statearr_44168_44194[(2)] = null);

(statearr_44168_44194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44165 === (4))){
var inst_44128 = (state_44164[(9)]);
var inst_44128__$1 = (state_44164[(2)]);
var inst_44129 = (inst_44128__$1 == null);
var inst_44130 = cljs.core.not.call(null,inst_44129);
var state_44164__$1 = (function (){var statearr_44169 = state_44164;
(statearr_44169[(9)] = inst_44128__$1);

return statearr_44169;
})();
if(inst_44130){
var statearr_44170_44195 = state_44164__$1;
(statearr_44170_44195[(1)] = (5));

} else {
var statearr_44171_44196 = state_44164__$1;
(statearr_44171_44196[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44165 === (15))){
var inst_44154 = (state_44164[(2)]);
var state_44164__$1 = state_44164;
var statearr_44172_44197 = state_44164__$1;
(statearr_44172_44197[(2)] = inst_44154);

(statearr_44172_44197[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44165 === (13))){
var state_44164__$1 = state_44164;
var statearr_44173_44198 = state_44164__$1;
(statearr_44173_44198[(2)] = null);

(statearr_44173_44198[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44165 === (6))){
var inst_44124 = (state_44164[(8)]);
var inst_44149 = inst_44124.length;
var inst_44150 = (inst_44149 > (0));
var state_44164__$1 = state_44164;
if(cljs.core.truth_(inst_44150)){
var statearr_44174_44199 = state_44164__$1;
(statearr_44174_44199[(1)] = (12));

} else {
var statearr_44175_44200 = state_44164__$1;
(statearr_44175_44200[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44165 === (3))){
var inst_44162 = (state_44164[(2)]);
var state_44164__$1 = state_44164;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44164__$1,inst_44162);
} else {
if((state_val_44165 === (12))){
var inst_44124 = (state_44164[(8)]);
var inst_44152 = cljs.core.vec.call(null,inst_44124);
var state_44164__$1 = state_44164;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44164__$1,(15),out,inst_44152);
} else {
if((state_val_44165 === (2))){
var state_44164__$1 = state_44164;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44164__$1,(4),ch);
} else {
if((state_val_44165 === (11))){
var inst_44128 = (state_44164[(9)]);
var inst_44132 = (state_44164[(10)]);
var inst_44142 = (state_44164[(2)]);
var inst_44143 = [];
var inst_44144 = inst_44143.push(inst_44128);
var inst_44124 = inst_44143;
var inst_44125 = inst_44132;
var state_44164__$1 = (function (){var statearr_44176 = state_44164;
(statearr_44176[(11)] = inst_44144);

(statearr_44176[(7)] = inst_44125);

(statearr_44176[(12)] = inst_44142);

(statearr_44176[(8)] = inst_44124);

return statearr_44176;
})();
var statearr_44177_44201 = state_44164__$1;
(statearr_44177_44201[(2)] = null);

(statearr_44177_44201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44165 === (9))){
var inst_44124 = (state_44164[(8)]);
var inst_44140 = cljs.core.vec.call(null,inst_44124);
var state_44164__$1 = state_44164;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44164__$1,(11),out,inst_44140);
} else {
if((state_val_44165 === (5))){
var inst_44128 = (state_44164[(9)]);
var inst_44125 = (state_44164[(7)]);
var inst_44132 = (state_44164[(10)]);
var inst_44132__$1 = f.call(null,inst_44128);
var inst_44133 = cljs.core._EQ_.call(null,inst_44132__$1,inst_44125);
var inst_44134 = cljs.core.keyword_identical_QMARK_.call(null,inst_44125,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_44135 = (inst_44133) || (inst_44134);
var state_44164__$1 = (function (){var statearr_44178 = state_44164;
(statearr_44178[(10)] = inst_44132__$1);

return statearr_44178;
})();
if(cljs.core.truth_(inst_44135)){
var statearr_44179_44202 = state_44164__$1;
(statearr_44179_44202[(1)] = (8));

} else {
var statearr_44180_44203 = state_44164__$1;
(statearr_44180_44203[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44165 === (14))){
var inst_44157 = (state_44164[(2)]);
var inst_44158 = cljs.core.async.close_BANG_.call(null,out);
var state_44164__$1 = (function (){var statearr_44182 = state_44164;
(statearr_44182[(13)] = inst_44157);

return statearr_44182;
})();
var statearr_44183_44204 = state_44164__$1;
(statearr_44183_44204[(2)] = inst_44158);

(statearr_44183_44204[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44165 === (10))){
var inst_44147 = (state_44164[(2)]);
var state_44164__$1 = state_44164;
var statearr_44184_44205 = state_44164__$1;
(statearr_44184_44205[(2)] = inst_44147);

(statearr_44184_44205[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44165 === (8))){
var inst_44128 = (state_44164[(9)]);
var inst_44132 = (state_44164[(10)]);
var inst_44124 = (state_44164[(8)]);
var inst_44137 = inst_44124.push(inst_44128);
var tmp44181 = inst_44124;
var inst_44124__$1 = tmp44181;
var inst_44125 = inst_44132;
var state_44164__$1 = (function (){var statearr_44185 = state_44164;
(statearr_44185[(14)] = inst_44137);

(statearr_44185[(7)] = inst_44125);

(statearr_44185[(8)] = inst_44124__$1);

return statearr_44185;
})();
var statearr_44186_44206 = state_44164__$1;
(statearr_44186_44206[(2)] = null);

(statearr_44186_44206[(1)] = (2));


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
});})(c__33321__auto___44192,out))
;
return ((function (switch__33233__auto__,c__33321__auto___44192,out){
return (function() {
var cljs$core$async$state_machine__33234__auto__ = null;
var cljs$core$async$state_machine__33234__auto____0 = (function (){
var statearr_44187 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44187[(0)] = cljs$core$async$state_machine__33234__auto__);

(statearr_44187[(1)] = (1));

return statearr_44187;
});
var cljs$core$async$state_machine__33234__auto____1 = (function (state_44164){
while(true){
var ret_value__33235__auto__ = (function (){try{while(true){
var result__33236__auto__ = switch__33233__auto__.call(null,state_44164);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33236__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33236__auto__;
}
break;
}
}catch (e44188){if((e44188 instanceof Object)){
var ex__33237__auto__ = e44188;
var statearr_44189_44207 = state_44164;
(statearr_44189_44207[(5)] = ex__33237__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44164);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44188;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44208 = state_44164;
state_44164 = G__44208;
continue;
} else {
return ret_value__33235__auto__;
}
break;
}
});
cljs$core$async$state_machine__33234__auto__ = function(state_44164){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33234__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33234__auto____1.call(this,state_44164);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33234__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33234__auto____0;
cljs$core$async$state_machine__33234__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33234__auto____1;
return cljs$core$async$state_machine__33234__auto__;
})()
;})(switch__33233__auto__,c__33321__auto___44192,out))
})();
var state__33323__auto__ = (function (){var statearr_44190 = f__33322__auto__.call(null);
(statearr_44190[(6)] = c__33321__auto___44192);

return statearr_44190;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33323__auto__);
});})(c__33321__auto___44192,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1501568767367