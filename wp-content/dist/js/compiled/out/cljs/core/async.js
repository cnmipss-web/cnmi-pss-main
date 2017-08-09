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
var G__43701 = arguments.length;
switch (G__43701) {
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
if(typeof cljs.core.async.t_cljs$core$async43702 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43702 = (function (f,blockable,meta43703){
this.f = f;
this.blockable = blockable;
this.meta43703 = meta43703;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43702.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43704,meta43703__$1){
var self__ = this;
var _43704__$1 = this;
return (new cljs.core.async.t_cljs$core$async43702(self__.f,self__.blockable,meta43703__$1));
});

cljs.core.async.t_cljs$core$async43702.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43704){
var self__ = this;
var _43704__$1 = this;
return self__.meta43703;
});

cljs.core.async.t_cljs$core$async43702.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43702.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async43702.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async43702.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async43702.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta43703","meta43703",1905332205,null)], null);
});

cljs.core.async.t_cljs$core$async43702.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43702.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43702";

cljs.core.async.t_cljs$core$async43702.cljs$lang$ctorPrWriter = (function (this__37374__auto__,writer__37375__auto__,opt__37376__auto__){
return cljs.core._write.call(null,writer__37375__auto__,"cljs.core.async/t_cljs$core$async43702");
});

cljs.core.async.__GT_t_cljs$core$async43702 = (function cljs$core$async$__GT_t_cljs$core$async43702(f__$1,blockable__$1,meta43703){
return (new cljs.core.async.t_cljs$core$async43702(f__$1,blockable__$1,meta43703));
});

}

return (new cljs.core.async.t_cljs$core$async43702(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__43708 = arguments.length;
switch (G__43708) {
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
var G__43711 = arguments.length;
switch (G__43711) {
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
var G__43714 = arguments.length;
switch (G__43714) {
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
var val_43716 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_43716);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_43716,ret){
return (function (){
return fn1.call(null,val_43716);
});})(val_43716,ret))
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
var G__43718 = arguments.length;
switch (G__43718) {
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
var n__37687__auto___43720 = n;
var x_43721 = (0);
while(true){
if((x_43721 < n__37687__auto___43720)){
(a[x_43721] = (0));

var G__43722 = (x_43721 + (1));
x_43721 = G__43722;
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

var G__43723 = (i + (1));
i = G__43723;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async43724 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43724 = (function (flag,meta43725){
this.flag = flag;
this.meta43725 = meta43725;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43724.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_43726,meta43725__$1){
var self__ = this;
var _43726__$1 = this;
return (new cljs.core.async.t_cljs$core$async43724(self__.flag,meta43725__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async43724.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_43726){
var self__ = this;
var _43726__$1 = this;
return self__.meta43725;
});})(flag))
;

cljs.core.async.t_cljs$core$async43724.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43724.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async43724.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async43724.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async43724.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta43725","meta43725",-373924048,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async43724.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43724.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43724";

cljs.core.async.t_cljs$core$async43724.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__37374__auto__,writer__37375__auto__,opt__37376__auto__){
return cljs.core._write.call(null,writer__37375__auto__,"cljs.core.async/t_cljs$core$async43724");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async43724 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async43724(flag__$1,meta43725){
return (new cljs.core.async.t_cljs$core$async43724(flag__$1,meta43725));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async43724(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async43727 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43727 = (function (flag,cb,meta43728){
this.flag = flag;
this.cb = cb;
this.meta43728 = meta43728;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43727.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43729,meta43728__$1){
var self__ = this;
var _43729__$1 = this;
return (new cljs.core.async.t_cljs$core$async43727(self__.flag,self__.cb,meta43728__$1));
});

cljs.core.async.t_cljs$core$async43727.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43729){
var self__ = this;
var _43729__$1 = this;
return self__.meta43728;
});

cljs.core.async.t_cljs$core$async43727.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43727.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async43727.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async43727.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async43727.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta43728","meta43728",-1144226493,null)], null);
});

cljs.core.async.t_cljs$core$async43727.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43727.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43727";

cljs.core.async.t_cljs$core$async43727.cljs$lang$ctorPrWriter = (function (this__37374__auto__,writer__37375__auto__,opt__37376__auto__){
return cljs.core._write.call(null,writer__37375__auto__,"cljs.core.async/t_cljs$core$async43727");
});

cljs.core.async.__GT_t_cljs$core$async43727 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async43727(flag__$1,cb__$1,meta43728){
return (new cljs.core.async.t_cljs$core$async43727(flag__$1,cb__$1,meta43728));
});

}

return (new cljs.core.async.t_cljs$core$async43727(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__43730_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__43730_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__43731_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__43731_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__36763__auto__ = wport;
if(cljs.core.truth_(or__36763__auto__)){
return or__36763__auto__;
} else {
return port;
}
})()], null));
} else {
var G__43732 = (i + (1));
i = G__43732;
continue;
}
} else {
return null;
}
break;
}
})();
var or__36763__auto__ = ret;
if(cljs.core.truth_(or__36763__auto__)){
return or__36763__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__36751__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__36751__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__36751__auto__;
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
var args__37896__auto__ = [];
var len__37889__auto___43738 = arguments.length;
var i__37890__auto___43739 = (0);
while(true){
if((i__37890__auto___43739 < len__37889__auto___43738)){
args__37896__auto__.push((arguments[i__37890__auto___43739]));

var G__43740 = (i__37890__auto___43739 + (1));
i__37890__auto___43739 = G__43740;
continue;
} else {
}
break;
}

var argseq__37897__auto__ = ((((1) < args__37896__auto__.length))?(new cljs.core.IndexedSeq(args__37896__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37897__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__43735){
var map__43736 = p__43735;
var map__43736__$1 = ((((!((map__43736 == null)))?((((map__43736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43736.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43736):map__43736);
var opts = map__43736__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq43733){
var G__43734 = cljs.core.first.call(null,seq43733);
var seq43733__$1 = cljs.core.next.call(null,seq43733);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__43734,seq43733__$1);
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
var G__43742 = arguments.length;
switch (G__43742) {
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
var c__39480__auto___43788 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39480__auto___43788){
return (function (){
var f__39481__auto__ = (function (){var switch__39459__auto__ = ((function (c__39480__auto___43788){
return (function (state_43766){
var state_val_43767 = (state_43766[(1)]);
if((state_val_43767 === (7))){
var inst_43762 = (state_43766[(2)]);
var state_43766__$1 = state_43766;
var statearr_43768_43789 = state_43766__$1;
(statearr_43768_43789[(2)] = inst_43762);

(statearr_43768_43789[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43767 === (1))){
var state_43766__$1 = state_43766;
var statearr_43769_43790 = state_43766__$1;
(statearr_43769_43790[(2)] = null);

(statearr_43769_43790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43767 === (4))){
var inst_43745 = (state_43766[(7)]);
var inst_43745__$1 = (state_43766[(2)]);
var inst_43746 = (inst_43745__$1 == null);
var state_43766__$1 = (function (){var statearr_43770 = state_43766;
(statearr_43770[(7)] = inst_43745__$1);

return statearr_43770;
})();
if(cljs.core.truth_(inst_43746)){
var statearr_43771_43791 = state_43766__$1;
(statearr_43771_43791[(1)] = (5));

} else {
var statearr_43772_43792 = state_43766__$1;
(statearr_43772_43792[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43767 === (13))){
var state_43766__$1 = state_43766;
var statearr_43773_43793 = state_43766__$1;
(statearr_43773_43793[(2)] = null);

(statearr_43773_43793[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43767 === (6))){
var inst_43745 = (state_43766[(7)]);
var state_43766__$1 = state_43766;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43766__$1,(11),to,inst_43745);
} else {
if((state_val_43767 === (3))){
var inst_43764 = (state_43766[(2)]);
var state_43766__$1 = state_43766;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43766__$1,inst_43764);
} else {
if((state_val_43767 === (12))){
var state_43766__$1 = state_43766;
var statearr_43774_43794 = state_43766__$1;
(statearr_43774_43794[(2)] = null);

(statearr_43774_43794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43767 === (2))){
var state_43766__$1 = state_43766;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43766__$1,(4),from);
} else {
if((state_val_43767 === (11))){
var inst_43755 = (state_43766[(2)]);
var state_43766__$1 = state_43766;
if(cljs.core.truth_(inst_43755)){
var statearr_43775_43795 = state_43766__$1;
(statearr_43775_43795[(1)] = (12));

} else {
var statearr_43776_43796 = state_43766__$1;
(statearr_43776_43796[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43767 === (9))){
var state_43766__$1 = state_43766;
var statearr_43777_43797 = state_43766__$1;
(statearr_43777_43797[(2)] = null);

(statearr_43777_43797[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43767 === (5))){
var state_43766__$1 = state_43766;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43778_43798 = state_43766__$1;
(statearr_43778_43798[(1)] = (8));

} else {
var statearr_43779_43799 = state_43766__$1;
(statearr_43779_43799[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43767 === (14))){
var inst_43760 = (state_43766[(2)]);
var state_43766__$1 = state_43766;
var statearr_43780_43800 = state_43766__$1;
(statearr_43780_43800[(2)] = inst_43760);

(statearr_43780_43800[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43767 === (10))){
var inst_43752 = (state_43766[(2)]);
var state_43766__$1 = state_43766;
var statearr_43781_43801 = state_43766__$1;
(statearr_43781_43801[(2)] = inst_43752);

(statearr_43781_43801[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43767 === (8))){
var inst_43749 = cljs.core.async.close_BANG_.call(null,to);
var state_43766__$1 = state_43766;
var statearr_43782_43802 = state_43766__$1;
(statearr_43782_43802[(2)] = inst_43749);

(statearr_43782_43802[(1)] = (10));


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
});})(c__39480__auto___43788))
;
return ((function (switch__39459__auto__,c__39480__auto___43788){
return (function() {
var cljs$core$async$state_machine__39460__auto__ = null;
var cljs$core$async$state_machine__39460__auto____0 = (function (){
var statearr_43783 = [null,null,null,null,null,null,null,null];
(statearr_43783[(0)] = cljs$core$async$state_machine__39460__auto__);

(statearr_43783[(1)] = (1));

return statearr_43783;
});
var cljs$core$async$state_machine__39460__auto____1 = (function (state_43766){
while(true){
var ret_value__39461__auto__ = (function (){try{while(true){
var result__39462__auto__ = switch__39459__auto__.call(null,state_43766);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39462__auto__;
}
break;
}
}catch (e43784){if((e43784 instanceof Object)){
var ex__39463__auto__ = e43784;
var statearr_43785_43803 = state_43766;
(statearr_43785_43803[(5)] = ex__39463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43766);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43784;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43804 = state_43766;
state_43766 = G__43804;
continue;
} else {
return ret_value__39461__auto__;
}
break;
}
});
cljs$core$async$state_machine__39460__auto__ = function(state_43766){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39460__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39460__auto____1.call(this,state_43766);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__39460__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39460__auto____0;
cljs$core$async$state_machine__39460__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39460__auto____1;
return cljs$core$async$state_machine__39460__auto__;
})()
;})(switch__39459__auto__,c__39480__auto___43788))
})();
var state__39482__auto__ = (function (){var statearr_43786 = f__39481__auto__.call(null);
(statearr_43786[(6)] = c__39480__auto___43788);

return statearr_43786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39482__auto__);
});})(c__39480__auto___43788))
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
return (function (p__43805){
var vec__43806 = p__43805;
var v = cljs.core.nth.call(null,vec__43806,(0),null);
var p = cljs.core.nth.call(null,vec__43806,(1),null);
var job = vec__43806;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__39480__auto___43977 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39480__auto___43977,res,vec__43806,v,p,job,jobs,results){
return (function (){
var f__39481__auto__ = (function (){var switch__39459__auto__ = ((function (c__39480__auto___43977,res,vec__43806,v,p,job,jobs,results){
return (function (state_43813){
var state_val_43814 = (state_43813[(1)]);
if((state_val_43814 === (1))){
var state_43813__$1 = state_43813;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43813__$1,(2),res,v);
} else {
if((state_val_43814 === (2))){
var inst_43810 = (state_43813[(2)]);
var inst_43811 = cljs.core.async.close_BANG_.call(null,res);
var state_43813__$1 = (function (){var statearr_43815 = state_43813;
(statearr_43815[(7)] = inst_43810);

return statearr_43815;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43813__$1,inst_43811);
} else {
return null;
}
}
});})(c__39480__auto___43977,res,vec__43806,v,p,job,jobs,results))
;
return ((function (switch__39459__auto__,c__39480__auto___43977,res,vec__43806,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39460__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39460__auto____0 = (function (){
var statearr_43816 = [null,null,null,null,null,null,null,null];
(statearr_43816[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39460__auto__);

(statearr_43816[(1)] = (1));

return statearr_43816;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39460__auto____1 = (function (state_43813){
while(true){
var ret_value__39461__auto__ = (function (){try{while(true){
var result__39462__auto__ = switch__39459__auto__.call(null,state_43813);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39462__auto__;
}
break;
}
}catch (e43817){if((e43817 instanceof Object)){
var ex__39463__auto__ = e43817;
var statearr_43818_43978 = state_43813;
(statearr_43818_43978[(5)] = ex__39463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43813);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43817;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43979 = state_43813;
state_43813 = G__43979;
continue;
} else {
return ret_value__39461__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39460__auto__ = function(state_43813){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39460__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39460__auto____1.call(this,state_43813);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__39460__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39460__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39460__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39460__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39460__auto__;
})()
;})(switch__39459__auto__,c__39480__auto___43977,res,vec__43806,v,p,job,jobs,results))
})();
var state__39482__auto__ = (function (){var statearr_43819 = f__39481__auto__.call(null);
(statearr_43819[(6)] = c__39480__auto___43977);

return statearr_43819;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39482__auto__);
});})(c__39480__auto___43977,res,vec__43806,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__43820){
var vec__43821 = p__43820;
var v = cljs.core.nth.call(null,vec__43821,(0),null);
var p = cljs.core.nth.call(null,vec__43821,(1),null);
var job = vec__43821;
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
var n__37687__auto___43980 = n;
var __43981 = (0);
while(true){
if((__43981 < n__37687__auto___43980)){
var G__43824_43982 = type;
var G__43824_43983__$1 = (((G__43824_43982 instanceof cljs.core.Keyword))?G__43824_43982.fqn:null);
switch (G__43824_43983__$1) {
case "compute":
var c__39480__auto___43985 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__43981,c__39480__auto___43985,G__43824_43982,G__43824_43983__$1,n__37687__auto___43980,jobs,results,process,async){
return (function (){
var f__39481__auto__ = (function (){var switch__39459__auto__ = ((function (__43981,c__39480__auto___43985,G__43824_43982,G__43824_43983__$1,n__37687__auto___43980,jobs,results,process,async){
return (function (state_43837){
var state_val_43838 = (state_43837[(1)]);
if((state_val_43838 === (1))){
var state_43837__$1 = state_43837;
var statearr_43839_43986 = state_43837__$1;
(statearr_43839_43986[(2)] = null);

(statearr_43839_43986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43838 === (2))){
var state_43837__$1 = state_43837;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43837__$1,(4),jobs);
} else {
if((state_val_43838 === (3))){
var inst_43835 = (state_43837[(2)]);
var state_43837__$1 = state_43837;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43837__$1,inst_43835);
} else {
if((state_val_43838 === (4))){
var inst_43827 = (state_43837[(2)]);
var inst_43828 = process.call(null,inst_43827);
var state_43837__$1 = state_43837;
if(cljs.core.truth_(inst_43828)){
var statearr_43840_43987 = state_43837__$1;
(statearr_43840_43987[(1)] = (5));

} else {
var statearr_43841_43988 = state_43837__$1;
(statearr_43841_43988[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43838 === (5))){
var state_43837__$1 = state_43837;
var statearr_43842_43989 = state_43837__$1;
(statearr_43842_43989[(2)] = null);

(statearr_43842_43989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43838 === (6))){
var state_43837__$1 = state_43837;
var statearr_43843_43990 = state_43837__$1;
(statearr_43843_43990[(2)] = null);

(statearr_43843_43990[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43838 === (7))){
var inst_43833 = (state_43837[(2)]);
var state_43837__$1 = state_43837;
var statearr_43844_43991 = state_43837__$1;
(statearr_43844_43991[(2)] = inst_43833);

(statearr_43844_43991[(1)] = (3));


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
});})(__43981,c__39480__auto___43985,G__43824_43982,G__43824_43983__$1,n__37687__auto___43980,jobs,results,process,async))
;
return ((function (__43981,switch__39459__auto__,c__39480__auto___43985,G__43824_43982,G__43824_43983__$1,n__37687__auto___43980,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39460__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39460__auto____0 = (function (){
var statearr_43845 = [null,null,null,null,null,null,null];
(statearr_43845[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39460__auto__);

(statearr_43845[(1)] = (1));

return statearr_43845;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39460__auto____1 = (function (state_43837){
while(true){
var ret_value__39461__auto__ = (function (){try{while(true){
var result__39462__auto__ = switch__39459__auto__.call(null,state_43837);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39462__auto__;
}
break;
}
}catch (e43846){if((e43846 instanceof Object)){
var ex__39463__auto__ = e43846;
var statearr_43847_43992 = state_43837;
(statearr_43847_43992[(5)] = ex__39463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43837);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43846;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43993 = state_43837;
state_43837 = G__43993;
continue;
} else {
return ret_value__39461__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39460__auto__ = function(state_43837){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39460__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39460__auto____1.call(this,state_43837);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__39460__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39460__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39460__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39460__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39460__auto__;
})()
;})(__43981,switch__39459__auto__,c__39480__auto___43985,G__43824_43982,G__43824_43983__$1,n__37687__auto___43980,jobs,results,process,async))
})();
var state__39482__auto__ = (function (){var statearr_43848 = f__39481__auto__.call(null);
(statearr_43848[(6)] = c__39480__auto___43985);

return statearr_43848;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39482__auto__);
});})(__43981,c__39480__auto___43985,G__43824_43982,G__43824_43983__$1,n__37687__auto___43980,jobs,results,process,async))
);


break;
case "async":
var c__39480__auto___43994 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__43981,c__39480__auto___43994,G__43824_43982,G__43824_43983__$1,n__37687__auto___43980,jobs,results,process,async){
return (function (){
var f__39481__auto__ = (function (){var switch__39459__auto__ = ((function (__43981,c__39480__auto___43994,G__43824_43982,G__43824_43983__$1,n__37687__auto___43980,jobs,results,process,async){
return (function (state_43861){
var state_val_43862 = (state_43861[(1)]);
if((state_val_43862 === (1))){
var state_43861__$1 = state_43861;
var statearr_43863_43995 = state_43861__$1;
(statearr_43863_43995[(2)] = null);

(statearr_43863_43995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43862 === (2))){
var state_43861__$1 = state_43861;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43861__$1,(4),jobs);
} else {
if((state_val_43862 === (3))){
var inst_43859 = (state_43861[(2)]);
var state_43861__$1 = state_43861;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43861__$1,inst_43859);
} else {
if((state_val_43862 === (4))){
var inst_43851 = (state_43861[(2)]);
var inst_43852 = async.call(null,inst_43851);
var state_43861__$1 = state_43861;
if(cljs.core.truth_(inst_43852)){
var statearr_43864_43996 = state_43861__$1;
(statearr_43864_43996[(1)] = (5));

} else {
var statearr_43865_43997 = state_43861__$1;
(statearr_43865_43997[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43862 === (5))){
var state_43861__$1 = state_43861;
var statearr_43866_43998 = state_43861__$1;
(statearr_43866_43998[(2)] = null);

(statearr_43866_43998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43862 === (6))){
var state_43861__$1 = state_43861;
var statearr_43867_43999 = state_43861__$1;
(statearr_43867_43999[(2)] = null);

(statearr_43867_43999[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43862 === (7))){
var inst_43857 = (state_43861[(2)]);
var state_43861__$1 = state_43861;
var statearr_43868_44000 = state_43861__$1;
(statearr_43868_44000[(2)] = inst_43857);

(statearr_43868_44000[(1)] = (3));


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
});})(__43981,c__39480__auto___43994,G__43824_43982,G__43824_43983__$1,n__37687__auto___43980,jobs,results,process,async))
;
return ((function (__43981,switch__39459__auto__,c__39480__auto___43994,G__43824_43982,G__43824_43983__$1,n__37687__auto___43980,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39460__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39460__auto____0 = (function (){
var statearr_43869 = [null,null,null,null,null,null,null];
(statearr_43869[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39460__auto__);

(statearr_43869[(1)] = (1));

return statearr_43869;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39460__auto____1 = (function (state_43861){
while(true){
var ret_value__39461__auto__ = (function (){try{while(true){
var result__39462__auto__ = switch__39459__auto__.call(null,state_43861);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39462__auto__;
}
break;
}
}catch (e43870){if((e43870 instanceof Object)){
var ex__39463__auto__ = e43870;
var statearr_43871_44001 = state_43861;
(statearr_43871_44001[(5)] = ex__39463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43861);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43870;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44002 = state_43861;
state_43861 = G__44002;
continue;
} else {
return ret_value__39461__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39460__auto__ = function(state_43861){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39460__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39460__auto____1.call(this,state_43861);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__39460__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39460__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39460__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39460__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39460__auto__;
})()
;})(__43981,switch__39459__auto__,c__39480__auto___43994,G__43824_43982,G__43824_43983__$1,n__37687__auto___43980,jobs,results,process,async))
})();
var state__39482__auto__ = (function (){var statearr_43872 = f__39481__auto__.call(null);
(statearr_43872[(6)] = c__39480__auto___43994);

return statearr_43872;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39482__auto__);
});})(__43981,c__39480__auto___43994,G__43824_43982,G__43824_43983__$1,n__37687__auto___43980,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43824_43983__$1)].join('')));

}

var G__44003 = (__43981 + (1));
__43981 = G__44003;
continue;
} else {
}
break;
}

var c__39480__auto___44004 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39480__auto___44004,jobs,results,process,async){
return (function (){
var f__39481__auto__ = (function (){var switch__39459__auto__ = ((function (c__39480__auto___44004,jobs,results,process,async){
return (function (state_43894){
var state_val_43895 = (state_43894[(1)]);
if((state_val_43895 === (1))){
var state_43894__$1 = state_43894;
var statearr_43896_44005 = state_43894__$1;
(statearr_43896_44005[(2)] = null);

(statearr_43896_44005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43895 === (2))){
var state_43894__$1 = state_43894;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43894__$1,(4),from);
} else {
if((state_val_43895 === (3))){
var inst_43892 = (state_43894[(2)]);
var state_43894__$1 = state_43894;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43894__$1,inst_43892);
} else {
if((state_val_43895 === (4))){
var inst_43875 = (state_43894[(7)]);
var inst_43875__$1 = (state_43894[(2)]);
var inst_43876 = (inst_43875__$1 == null);
var state_43894__$1 = (function (){var statearr_43897 = state_43894;
(statearr_43897[(7)] = inst_43875__$1);

return statearr_43897;
})();
if(cljs.core.truth_(inst_43876)){
var statearr_43898_44006 = state_43894__$1;
(statearr_43898_44006[(1)] = (5));

} else {
var statearr_43899_44007 = state_43894__$1;
(statearr_43899_44007[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43895 === (5))){
var inst_43878 = cljs.core.async.close_BANG_.call(null,jobs);
var state_43894__$1 = state_43894;
var statearr_43900_44008 = state_43894__$1;
(statearr_43900_44008[(2)] = inst_43878);

(statearr_43900_44008[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43895 === (6))){
var inst_43880 = (state_43894[(8)]);
var inst_43875 = (state_43894[(7)]);
var inst_43880__$1 = cljs.core.async.chan.call(null,(1));
var inst_43881 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43882 = [inst_43875,inst_43880__$1];
var inst_43883 = (new cljs.core.PersistentVector(null,2,(5),inst_43881,inst_43882,null));
var state_43894__$1 = (function (){var statearr_43901 = state_43894;
(statearr_43901[(8)] = inst_43880__$1);

return statearr_43901;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43894__$1,(8),jobs,inst_43883);
} else {
if((state_val_43895 === (7))){
var inst_43890 = (state_43894[(2)]);
var state_43894__$1 = state_43894;
var statearr_43902_44009 = state_43894__$1;
(statearr_43902_44009[(2)] = inst_43890);

(statearr_43902_44009[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43895 === (8))){
var inst_43880 = (state_43894[(8)]);
var inst_43885 = (state_43894[(2)]);
var state_43894__$1 = (function (){var statearr_43903 = state_43894;
(statearr_43903[(9)] = inst_43885);

return statearr_43903;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43894__$1,(9),results,inst_43880);
} else {
if((state_val_43895 === (9))){
var inst_43887 = (state_43894[(2)]);
var state_43894__$1 = (function (){var statearr_43904 = state_43894;
(statearr_43904[(10)] = inst_43887);

return statearr_43904;
})();
var statearr_43905_44010 = state_43894__$1;
(statearr_43905_44010[(2)] = null);

(statearr_43905_44010[(1)] = (2));


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
});})(c__39480__auto___44004,jobs,results,process,async))
;
return ((function (switch__39459__auto__,c__39480__auto___44004,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39460__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39460__auto____0 = (function (){
var statearr_43906 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43906[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39460__auto__);

(statearr_43906[(1)] = (1));

return statearr_43906;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39460__auto____1 = (function (state_43894){
while(true){
var ret_value__39461__auto__ = (function (){try{while(true){
var result__39462__auto__ = switch__39459__auto__.call(null,state_43894);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39462__auto__;
}
break;
}
}catch (e43907){if((e43907 instanceof Object)){
var ex__39463__auto__ = e43907;
var statearr_43908_44011 = state_43894;
(statearr_43908_44011[(5)] = ex__39463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43894);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43907;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44012 = state_43894;
state_43894 = G__44012;
continue;
} else {
return ret_value__39461__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39460__auto__ = function(state_43894){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39460__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39460__auto____1.call(this,state_43894);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__39460__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39460__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39460__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39460__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39460__auto__;
})()
;})(switch__39459__auto__,c__39480__auto___44004,jobs,results,process,async))
})();
var state__39482__auto__ = (function (){var statearr_43909 = f__39481__auto__.call(null);
(statearr_43909[(6)] = c__39480__auto___44004);

return statearr_43909;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39482__auto__);
});})(c__39480__auto___44004,jobs,results,process,async))
);


var c__39480__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39480__auto__,jobs,results,process,async){
return (function (){
var f__39481__auto__ = (function (){var switch__39459__auto__ = ((function (c__39480__auto__,jobs,results,process,async){
return (function (state_43947){
var state_val_43948 = (state_43947[(1)]);
if((state_val_43948 === (7))){
var inst_43943 = (state_43947[(2)]);
var state_43947__$1 = state_43947;
var statearr_43949_44013 = state_43947__$1;
(statearr_43949_44013[(2)] = inst_43943);

(statearr_43949_44013[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43948 === (20))){
var state_43947__$1 = state_43947;
var statearr_43950_44014 = state_43947__$1;
(statearr_43950_44014[(2)] = null);

(statearr_43950_44014[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43948 === (1))){
var state_43947__$1 = state_43947;
var statearr_43951_44015 = state_43947__$1;
(statearr_43951_44015[(2)] = null);

(statearr_43951_44015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43948 === (4))){
var inst_43912 = (state_43947[(7)]);
var inst_43912__$1 = (state_43947[(2)]);
var inst_43913 = (inst_43912__$1 == null);
var state_43947__$1 = (function (){var statearr_43952 = state_43947;
(statearr_43952[(7)] = inst_43912__$1);

return statearr_43952;
})();
if(cljs.core.truth_(inst_43913)){
var statearr_43953_44016 = state_43947__$1;
(statearr_43953_44016[(1)] = (5));

} else {
var statearr_43954_44017 = state_43947__$1;
(statearr_43954_44017[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43948 === (15))){
var inst_43925 = (state_43947[(8)]);
var state_43947__$1 = state_43947;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43947__$1,(18),to,inst_43925);
} else {
if((state_val_43948 === (21))){
var inst_43938 = (state_43947[(2)]);
var state_43947__$1 = state_43947;
var statearr_43955_44018 = state_43947__$1;
(statearr_43955_44018[(2)] = inst_43938);

(statearr_43955_44018[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43948 === (13))){
var inst_43940 = (state_43947[(2)]);
var state_43947__$1 = (function (){var statearr_43956 = state_43947;
(statearr_43956[(9)] = inst_43940);

return statearr_43956;
})();
var statearr_43957_44019 = state_43947__$1;
(statearr_43957_44019[(2)] = null);

(statearr_43957_44019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43948 === (6))){
var inst_43912 = (state_43947[(7)]);
var state_43947__$1 = state_43947;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43947__$1,(11),inst_43912);
} else {
if((state_val_43948 === (17))){
var inst_43933 = (state_43947[(2)]);
var state_43947__$1 = state_43947;
if(cljs.core.truth_(inst_43933)){
var statearr_43958_44020 = state_43947__$1;
(statearr_43958_44020[(1)] = (19));

} else {
var statearr_43959_44021 = state_43947__$1;
(statearr_43959_44021[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43948 === (3))){
var inst_43945 = (state_43947[(2)]);
var state_43947__$1 = state_43947;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43947__$1,inst_43945);
} else {
if((state_val_43948 === (12))){
var inst_43922 = (state_43947[(10)]);
var state_43947__$1 = state_43947;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43947__$1,(14),inst_43922);
} else {
if((state_val_43948 === (2))){
var state_43947__$1 = state_43947;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43947__$1,(4),results);
} else {
if((state_val_43948 === (19))){
var state_43947__$1 = state_43947;
var statearr_43960_44022 = state_43947__$1;
(statearr_43960_44022[(2)] = null);

(statearr_43960_44022[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43948 === (11))){
var inst_43922 = (state_43947[(2)]);
var state_43947__$1 = (function (){var statearr_43961 = state_43947;
(statearr_43961[(10)] = inst_43922);

return statearr_43961;
})();
var statearr_43962_44023 = state_43947__$1;
(statearr_43962_44023[(2)] = null);

(statearr_43962_44023[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43948 === (9))){
var state_43947__$1 = state_43947;
var statearr_43963_44024 = state_43947__$1;
(statearr_43963_44024[(2)] = null);

(statearr_43963_44024[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43948 === (5))){
var state_43947__$1 = state_43947;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43964_44025 = state_43947__$1;
(statearr_43964_44025[(1)] = (8));

} else {
var statearr_43965_44026 = state_43947__$1;
(statearr_43965_44026[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43948 === (14))){
var inst_43927 = (state_43947[(11)]);
var inst_43925 = (state_43947[(8)]);
var inst_43925__$1 = (state_43947[(2)]);
var inst_43926 = (inst_43925__$1 == null);
var inst_43927__$1 = cljs.core.not.call(null,inst_43926);
var state_43947__$1 = (function (){var statearr_43966 = state_43947;
(statearr_43966[(11)] = inst_43927__$1);

(statearr_43966[(8)] = inst_43925__$1);

return statearr_43966;
})();
if(inst_43927__$1){
var statearr_43967_44027 = state_43947__$1;
(statearr_43967_44027[(1)] = (15));

} else {
var statearr_43968_44028 = state_43947__$1;
(statearr_43968_44028[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43948 === (16))){
var inst_43927 = (state_43947[(11)]);
var state_43947__$1 = state_43947;
var statearr_43969_44029 = state_43947__$1;
(statearr_43969_44029[(2)] = inst_43927);

(statearr_43969_44029[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43948 === (10))){
var inst_43919 = (state_43947[(2)]);
var state_43947__$1 = state_43947;
var statearr_43970_44030 = state_43947__$1;
(statearr_43970_44030[(2)] = inst_43919);

(statearr_43970_44030[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43948 === (18))){
var inst_43930 = (state_43947[(2)]);
var state_43947__$1 = state_43947;
var statearr_43971_44031 = state_43947__$1;
(statearr_43971_44031[(2)] = inst_43930);

(statearr_43971_44031[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43948 === (8))){
var inst_43916 = cljs.core.async.close_BANG_.call(null,to);
var state_43947__$1 = state_43947;
var statearr_43972_44032 = state_43947__$1;
(statearr_43972_44032[(2)] = inst_43916);

(statearr_43972_44032[(1)] = (10));


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
});})(c__39480__auto__,jobs,results,process,async))
;
return ((function (switch__39459__auto__,c__39480__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39460__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39460__auto____0 = (function (){
var statearr_43973 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43973[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39460__auto__);

(statearr_43973[(1)] = (1));

return statearr_43973;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39460__auto____1 = (function (state_43947){
while(true){
var ret_value__39461__auto__ = (function (){try{while(true){
var result__39462__auto__ = switch__39459__auto__.call(null,state_43947);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39462__auto__;
}
break;
}
}catch (e43974){if((e43974 instanceof Object)){
var ex__39463__auto__ = e43974;
var statearr_43975_44033 = state_43947;
(statearr_43975_44033[(5)] = ex__39463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43947);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43974;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44034 = state_43947;
state_43947 = G__44034;
continue;
} else {
return ret_value__39461__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39460__auto__ = function(state_43947){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39460__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39460__auto____1.call(this,state_43947);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__39460__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39460__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39460__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39460__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39460__auto__;
})()
;})(switch__39459__auto__,c__39480__auto__,jobs,results,process,async))
})();
var state__39482__auto__ = (function (){var statearr_43976 = f__39481__auto__.call(null);
(statearr_43976[(6)] = c__39480__auto__);

return statearr_43976;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39482__auto__);
});})(c__39480__auto__,jobs,results,process,async))
);

return c__39480__auto__;
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
var G__44036 = arguments.length;
switch (G__44036) {
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
var G__44039 = arguments.length;
switch (G__44039) {
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
var G__44042 = arguments.length;
switch (G__44042) {
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
var c__39480__auto___44091 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39480__auto___44091,tc,fc){
return (function (){
var f__39481__auto__ = (function (){var switch__39459__auto__ = ((function (c__39480__auto___44091,tc,fc){
return (function (state_44068){
var state_val_44069 = (state_44068[(1)]);
if((state_val_44069 === (7))){
var inst_44064 = (state_44068[(2)]);
var state_44068__$1 = state_44068;
var statearr_44070_44092 = state_44068__$1;
(statearr_44070_44092[(2)] = inst_44064);

(statearr_44070_44092[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44069 === (1))){
var state_44068__$1 = state_44068;
var statearr_44071_44093 = state_44068__$1;
(statearr_44071_44093[(2)] = null);

(statearr_44071_44093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44069 === (4))){
var inst_44045 = (state_44068[(7)]);
var inst_44045__$1 = (state_44068[(2)]);
var inst_44046 = (inst_44045__$1 == null);
var state_44068__$1 = (function (){var statearr_44072 = state_44068;
(statearr_44072[(7)] = inst_44045__$1);

return statearr_44072;
})();
if(cljs.core.truth_(inst_44046)){
var statearr_44073_44094 = state_44068__$1;
(statearr_44073_44094[(1)] = (5));

} else {
var statearr_44074_44095 = state_44068__$1;
(statearr_44074_44095[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44069 === (13))){
var state_44068__$1 = state_44068;
var statearr_44075_44096 = state_44068__$1;
(statearr_44075_44096[(2)] = null);

(statearr_44075_44096[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44069 === (6))){
var inst_44045 = (state_44068[(7)]);
var inst_44051 = p.call(null,inst_44045);
var state_44068__$1 = state_44068;
if(cljs.core.truth_(inst_44051)){
var statearr_44076_44097 = state_44068__$1;
(statearr_44076_44097[(1)] = (9));

} else {
var statearr_44077_44098 = state_44068__$1;
(statearr_44077_44098[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44069 === (3))){
var inst_44066 = (state_44068[(2)]);
var state_44068__$1 = state_44068;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44068__$1,inst_44066);
} else {
if((state_val_44069 === (12))){
var state_44068__$1 = state_44068;
var statearr_44078_44099 = state_44068__$1;
(statearr_44078_44099[(2)] = null);

(statearr_44078_44099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44069 === (2))){
var state_44068__$1 = state_44068;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44068__$1,(4),ch);
} else {
if((state_val_44069 === (11))){
var inst_44045 = (state_44068[(7)]);
var inst_44055 = (state_44068[(2)]);
var state_44068__$1 = state_44068;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44068__$1,(8),inst_44055,inst_44045);
} else {
if((state_val_44069 === (9))){
var state_44068__$1 = state_44068;
var statearr_44079_44100 = state_44068__$1;
(statearr_44079_44100[(2)] = tc);

(statearr_44079_44100[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44069 === (5))){
var inst_44048 = cljs.core.async.close_BANG_.call(null,tc);
var inst_44049 = cljs.core.async.close_BANG_.call(null,fc);
var state_44068__$1 = (function (){var statearr_44080 = state_44068;
(statearr_44080[(8)] = inst_44048);

return statearr_44080;
})();
var statearr_44081_44101 = state_44068__$1;
(statearr_44081_44101[(2)] = inst_44049);

(statearr_44081_44101[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44069 === (14))){
var inst_44062 = (state_44068[(2)]);
var state_44068__$1 = state_44068;
var statearr_44082_44102 = state_44068__$1;
(statearr_44082_44102[(2)] = inst_44062);

(statearr_44082_44102[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44069 === (10))){
var state_44068__$1 = state_44068;
var statearr_44083_44103 = state_44068__$1;
(statearr_44083_44103[(2)] = fc);

(statearr_44083_44103[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44069 === (8))){
var inst_44057 = (state_44068[(2)]);
var state_44068__$1 = state_44068;
if(cljs.core.truth_(inst_44057)){
var statearr_44084_44104 = state_44068__$1;
(statearr_44084_44104[(1)] = (12));

} else {
var statearr_44085_44105 = state_44068__$1;
(statearr_44085_44105[(1)] = (13));

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
});})(c__39480__auto___44091,tc,fc))
;
return ((function (switch__39459__auto__,c__39480__auto___44091,tc,fc){
return (function() {
var cljs$core$async$state_machine__39460__auto__ = null;
var cljs$core$async$state_machine__39460__auto____0 = (function (){
var statearr_44086 = [null,null,null,null,null,null,null,null,null];
(statearr_44086[(0)] = cljs$core$async$state_machine__39460__auto__);

(statearr_44086[(1)] = (1));

return statearr_44086;
});
var cljs$core$async$state_machine__39460__auto____1 = (function (state_44068){
while(true){
var ret_value__39461__auto__ = (function (){try{while(true){
var result__39462__auto__ = switch__39459__auto__.call(null,state_44068);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39462__auto__;
}
break;
}
}catch (e44087){if((e44087 instanceof Object)){
var ex__39463__auto__ = e44087;
var statearr_44088_44106 = state_44068;
(statearr_44088_44106[(5)] = ex__39463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44068);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44087;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44107 = state_44068;
state_44068 = G__44107;
continue;
} else {
return ret_value__39461__auto__;
}
break;
}
});
cljs$core$async$state_machine__39460__auto__ = function(state_44068){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39460__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39460__auto____1.call(this,state_44068);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__39460__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39460__auto____0;
cljs$core$async$state_machine__39460__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39460__auto____1;
return cljs$core$async$state_machine__39460__auto__;
})()
;})(switch__39459__auto__,c__39480__auto___44091,tc,fc))
})();
var state__39482__auto__ = (function (){var statearr_44089 = f__39481__auto__.call(null);
(statearr_44089[(6)] = c__39480__auto___44091);

return statearr_44089;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39482__auto__);
});})(c__39480__auto___44091,tc,fc))
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
var c__39480__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39480__auto__){
return (function (){
var f__39481__auto__ = (function (){var switch__39459__auto__ = ((function (c__39480__auto__){
return (function (state_44128){
var state_val_44129 = (state_44128[(1)]);
if((state_val_44129 === (7))){
var inst_44124 = (state_44128[(2)]);
var state_44128__$1 = state_44128;
var statearr_44130_44148 = state_44128__$1;
(statearr_44130_44148[(2)] = inst_44124);

(statearr_44130_44148[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44129 === (1))){
var inst_44108 = init;
var state_44128__$1 = (function (){var statearr_44131 = state_44128;
(statearr_44131[(7)] = inst_44108);

return statearr_44131;
})();
var statearr_44132_44149 = state_44128__$1;
(statearr_44132_44149[(2)] = null);

(statearr_44132_44149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44129 === (4))){
var inst_44111 = (state_44128[(8)]);
var inst_44111__$1 = (state_44128[(2)]);
var inst_44112 = (inst_44111__$1 == null);
var state_44128__$1 = (function (){var statearr_44133 = state_44128;
(statearr_44133[(8)] = inst_44111__$1);

return statearr_44133;
})();
if(cljs.core.truth_(inst_44112)){
var statearr_44134_44150 = state_44128__$1;
(statearr_44134_44150[(1)] = (5));

} else {
var statearr_44135_44151 = state_44128__$1;
(statearr_44135_44151[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44129 === (6))){
var inst_44108 = (state_44128[(7)]);
var inst_44115 = (state_44128[(9)]);
var inst_44111 = (state_44128[(8)]);
var inst_44115__$1 = f.call(null,inst_44108,inst_44111);
var inst_44116 = cljs.core.reduced_QMARK_.call(null,inst_44115__$1);
var state_44128__$1 = (function (){var statearr_44136 = state_44128;
(statearr_44136[(9)] = inst_44115__$1);

return statearr_44136;
})();
if(inst_44116){
var statearr_44137_44152 = state_44128__$1;
(statearr_44137_44152[(1)] = (8));

} else {
var statearr_44138_44153 = state_44128__$1;
(statearr_44138_44153[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44129 === (3))){
var inst_44126 = (state_44128[(2)]);
var state_44128__$1 = state_44128;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44128__$1,inst_44126);
} else {
if((state_val_44129 === (2))){
var state_44128__$1 = state_44128;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44128__$1,(4),ch);
} else {
if((state_val_44129 === (9))){
var inst_44115 = (state_44128[(9)]);
var inst_44108 = inst_44115;
var state_44128__$1 = (function (){var statearr_44139 = state_44128;
(statearr_44139[(7)] = inst_44108);

return statearr_44139;
})();
var statearr_44140_44154 = state_44128__$1;
(statearr_44140_44154[(2)] = null);

(statearr_44140_44154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44129 === (5))){
var inst_44108 = (state_44128[(7)]);
var state_44128__$1 = state_44128;
var statearr_44141_44155 = state_44128__$1;
(statearr_44141_44155[(2)] = inst_44108);

(statearr_44141_44155[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44129 === (10))){
var inst_44122 = (state_44128[(2)]);
var state_44128__$1 = state_44128;
var statearr_44142_44156 = state_44128__$1;
(statearr_44142_44156[(2)] = inst_44122);

(statearr_44142_44156[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44129 === (8))){
var inst_44115 = (state_44128[(9)]);
var inst_44118 = cljs.core.deref.call(null,inst_44115);
var state_44128__$1 = state_44128;
var statearr_44143_44157 = state_44128__$1;
(statearr_44143_44157[(2)] = inst_44118);

(statearr_44143_44157[(1)] = (10));


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
});})(c__39480__auto__))
;
return ((function (switch__39459__auto__,c__39480__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__39460__auto__ = null;
var cljs$core$async$reduce_$_state_machine__39460__auto____0 = (function (){
var statearr_44144 = [null,null,null,null,null,null,null,null,null,null];
(statearr_44144[(0)] = cljs$core$async$reduce_$_state_machine__39460__auto__);

(statearr_44144[(1)] = (1));

return statearr_44144;
});
var cljs$core$async$reduce_$_state_machine__39460__auto____1 = (function (state_44128){
while(true){
var ret_value__39461__auto__ = (function (){try{while(true){
var result__39462__auto__ = switch__39459__auto__.call(null,state_44128);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39462__auto__;
}
break;
}
}catch (e44145){if((e44145 instanceof Object)){
var ex__39463__auto__ = e44145;
var statearr_44146_44158 = state_44128;
(statearr_44146_44158[(5)] = ex__39463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44128);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44145;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44159 = state_44128;
state_44128 = G__44159;
continue;
} else {
return ret_value__39461__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__39460__auto__ = function(state_44128){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__39460__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__39460__auto____1.call(this,state_44128);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__39460__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__39460__auto____0;
cljs$core$async$reduce_$_state_machine__39460__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__39460__auto____1;
return cljs$core$async$reduce_$_state_machine__39460__auto__;
})()
;})(switch__39459__auto__,c__39480__auto__))
})();
var state__39482__auto__ = (function (){var statearr_44147 = f__39481__auto__.call(null);
(statearr_44147[(6)] = c__39480__auto__);

return statearr_44147;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39482__auto__);
});})(c__39480__auto__))
);

return c__39480__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__39480__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39480__auto__,f__$1){
return (function (){
var f__39481__auto__ = (function (){var switch__39459__auto__ = ((function (c__39480__auto__,f__$1){
return (function (state_44165){
var state_val_44166 = (state_44165[(1)]);
if((state_val_44166 === (1))){
var inst_44160 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_44165__$1 = state_44165;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44165__$1,(2),inst_44160);
} else {
if((state_val_44166 === (2))){
var inst_44162 = (state_44165[(2)]);
var inst_44163 = f__$1.call(null,inst_44162);
var state_44165__$1 = state_44165;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44165__$1,inst_44163);
} else {
return null;
}
}
});})(c__39480__auto__,f__$1))
;
return ((function (switch__39459__auto__,c__39480__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__39460__auto__ = null;
var cljs$core$async$transduce_$_state_machine__39460__auto____0 = (function (){
var statearr_44167 = [null,null,null,null,null,null,null];
(statearr_44167[(0)] = cljs$core$async$transduce_$_state_machine__39460__auto__);

(statearr_44167[(1)] = (1));

return statearr_44167;
});
var cljs$core$async$transduce_$_state_machine__39460__auto____1 = (function (state_44165){
while(true){
var ret_value__39461__auto__ = (function (){try{while(true){
var result__39462__auto__ = switch__39459__auto__.call(null,state_44165);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39462__auto__;
}
break;
}
}catch (e44168){if((e44168 instanceof Object)){
var ex__39463__auto__ = e44168;
var statearr_44169_44171 = state_44165;
(statearr_44169_44171[(5)] = ex__39463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44165);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44168;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44172 = state_44165;
state_44165 = G__44172;
continue;
} else {
return ret_value__39461__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__39460__auto__ = function(state_44165){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__39460__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__39460__auto____1.call(this,state_44165);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__39460__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__39460__auto____0;
cljs$core$async$transduce_$_state_machine__39460__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__39460__auto____1;
return cljs$core$async$transduce_$_state_machine__39460__auto__;
})()
;})(switch__39459__auto__,c__39480__auto__,f__$1))
})();
var state__39482__auto__ = (function (){var statearr_44170 = f__39481__auto__.call(null);
(statearr_44170[(6)] = c__39480__auto__);

return statearr_44170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39482__auto__);
});})(c__39480__auto__,f__$1))
);

return c__39480__auto__;
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
var G__44174 = arguments.length;
switch (G__44174) {
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
var c__39480__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39480__auto__){
return (function (){
var f__39481__auto__ = (function (){var switch__39459__auto__ = ((function (c__39480__auto__){
return (function (state_44199){
var state_val_44200 = (state_44199[(1)]);
if((state_val_44200 === (7))){
var inst_44181 = (state_44199[(2)]);
var state_44199__$1 = state_44199;
var statearr_44201_44222 = state_44199__$1;
(statearr_44201_44222[(2)] = inst_44181);

(statearr_44201_44222[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44200 === (1))){
var inst_44175 = cljs.core.seq.call(null,coll);
var inst_44176 = inst_44175;
var state_44199__$1 = (function (){var statearr_44202 = state_44199;
(statearr_44202[(7)] = inst_44176);

return statearr_44202;
})();
var statearr_44203_44223 = state_44199__$1;
(statearr_44203_44223[(2)] = null);

(statearr_44203_44223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44200 === (4))){
var inst_44176 = (state_44199[(7)]);
var inst_44179 = cljs.core.first.call(null,inst_44176);
var state_44199__$1 = state_44199;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44199__$1,(7),ch,inst_44179);
} else {
if((state_val_44200 === (13))){
var inst_44193 = (state_44199[(2)]);
var state_44199__$1 = state_44199;
var statearr_44204_44224 = state_44199__$1;
(statearr_44204_44224[(2)] = inst_44193);

(statearr_44204_44224[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44200 === (6))){
var inst_44184 = (state_44199[(2)]);
var state_44199__$1 = state_44199;
if(cljs.core.truth_(inst_44184)){
var statearr_44205_44225 = state_44199__$1;
(statearr_44205_44225[(1)] = (8));

} else {
var statearr_44206_44226 = state_44199__$1;
(statearr_44206_44226[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44200 === (3))){
var inst_44197 = (state_44199[(2)]);
var state_44199__$1 = state_44199;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44199__$1,inst_44197);
} else {
if((state_val_44200 === (12))){
var state_44199__$1 = state_44199;
var statearr_44207_44227 = state_44199__$1;
(statearr_44207_44227[(2)] = null);

(statearr_44207_44227[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44200 === (2))){
var inst_44176 = (state_44199[(7)]);
var state_44199__$1 = state_44199;
if(cljs.core.truth_(inst_44176)){
var statearr_44208_44228 = state_44199__$1;
(statearr_44208_44228[(1)] = (4));

} else {
var statearr_44209_44229 = state_44199__$1;
(statearr_44209_44229[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44200 === (11))){
var inst_44190 = cljs.core.async.close_BANG_.call(null,ch);
var state_44199__$1 = state_44199;
var statearr_44210_44230 = state_44199__$1;
(statearr_44210_44230[(2)] = inst_44190);

(statearr_44210_44230[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44200 === (9))){
var state_44199__$1 = state_44199;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44211_44231 = state_44199__$1;
(statearr_44211_44231[(1)] = (11));

} else {
var statearr_44212_44232 = state_44199__$1;
(statearr_44212_44232[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44200 === (5))){
var inst_44176 = (state_44199[(7)]);
var state_44199__$1 = state_44199;
var statearr_44213_44233 = state_44199__$1;
(statearr_44213_44233[(2)] = inst_44176);

(statearr_44213_44233[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44200 === (10))){
var inst_44195 = (state_44199[(2)]);
var state_44199__$1 = state_44199;
var statearr_44214_44234 = state_44199__$1;
(statearr_44214_44234[(2)] = inst_44195);

(statearr_44214_44234[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44200 === (8))){
var inst_44176 = (state_44199[(7)]);
var inst_44186 = cljs.core.next.call(null,inst_44176);
var inst_44176__$1 = inst_44186;
var state_44199__$1 = (function (){var statearr_44215 = state_44199;
(statearr_44215[(7)] = inst_44176__$1);

return statearr_44215;
})();
var statearr_44216_44235 = state_44199__$1;
(statearr_44216_44235[(2)] = null);

(statearr_44216_44235[(1)] = (2));


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
});})(c__39480__auto__))
;
return ((function (switch__39459__auto__,c__39480__auto__){
return (function() {
var cljs$core$async$state_machine__39460__auto__ = null;
var cljs$core$async$state_machine__39460__auto____0 = (function (){
var statearr_44217 = [null,null,null,null,null,null,null,null];
(statearr_44217[(0)] = cljs$core$async$state_machine__39460__auto__);

(statearr_44217[(1)] = (1));

return statearr_44217;
});
var cljs$core$async$state_machine__39460__auto____1 = (function (state_44199){
while(true){
var ret_value__39461__auto__ = (function (){try{while(true){
var result__39462__auto__ = switch__39459__auto__.call(null,state_44199);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39462__auto__;
}
break;
}
}catch (e44218){if((e44218 instanceof Object)){
var ex__39463__auto__ = e44218;
var statearr_44219_44236 = state_44199;
(statearr_44219_44236[(5)] = ex__39463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44199);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44218;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44237 = state_44199;
state_44199 = G__44237;
continue;
} else {
return ret_value__39461__auto__;
}
break;
}
});
cljs$core$async$state_machine__39460__auto__ = function(state_44199){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39460__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39460__auto____1.call(this,state_44199);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__39460__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39460__auto____0;
cljs$core$async$state_machine__39460__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39460__auto____1;
return cljs$core$async$state_machine__39460__auto__;
})()
;})(switch__39459__auto__,c__39480__auto__))
})();
var state__39482__auto__ = (function (){var statearr_44220 = f__39481__auto__.call(null);
(statearr_44220[(6)] = c__39480__auto__);

return statearr_44220;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39482__auto__);
});})(c__39480__auto__))
);

return c__39480__auto__;
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
var x__37432__auto__ = (((_ == null))?null:_);
var m__37433__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__37432__auto__)]);
if(!((m__37433__auto__ == null))){
return m__37433__auto__.call(null,_);
} else {
var m__37433__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__37433__auto____$1 == null))){
return m__37433__auto____$1.call(null,_);
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
var x__37432__auto__ = (((m == null))?null:m);
var m__37433__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__37432__auto__)]);
if(!((m__37433__auto__ == null))){
return m__37433__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__37433__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__37433__auto____$1 == null))){
return m__37433__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__37432__auto__ = (((m == null))?null:m);
var m__37433__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__37432__auto__)]);
if(!((m__37433__auto__ == null))){
return m__37433__auto__.call(null,m,ch);
} else {
var m__37433__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__37433__auto____$1 == null))){
return m__37433__auto____$1.call(null,m,ch);
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
var x__37432__auto__ = (((m == null))?null:m);
var m__37433__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__37432__auto__)]);
if(!((m__37433__auto__ == null))){
return m__37433__auto__.call(null,m);
} else {
var m__37433__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__37433__auto____$1 == null))){
return m__37433__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async44238 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44238 = (function (ch,cs,meta44239){
this.ch = ch;
this.cs = cs;
this.meta44239 = meta44239;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async44238.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_44240,meta44239__$1){
var self__ = this;
var _44240__$1 = this;
return (new cljs.core.async.t_cljs$core$async44238(self__.ch,self__.cs,meta44239__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async44238.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_44240){
var self__ = this;
var _44240__$1 = this;
return self__.meta44239;
});})(cs))
;

cljs.core.async.t_cljs$core$async44238.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44238.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async44238.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44238.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async44238.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async44238.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async44238.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta44239","meta44239",-1059951022,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async44238.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44238.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44238";

cljs.core.async.t_cljs$core$async44238.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__37374__auto__,writer__37375__auto__,opt__37376__auto__){
return cljs.core._write.call(null,writer__37375__auto__,"cljs.core.async/t_cljs$core$async44238");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async44238 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async44238(ch__$1,cs__$1,meta44239){
return (new cljs.core.async.t_cljs$core$async44238(ch__$1,cs__$1,meta44239));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async44238(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__39480__auto___44460 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39480__auto___44460,cs,m,dchan,dctr,done){
return (function (){
var f__39481__auto__ = (function (){var switch__39459__auto__ = ((function (c__39480__auto___44460,cs,m,dchan,dctr,done){
return (function (state_44375){
var state_val_44376 = (state_44375[(1)]);
if((state_val_44376 === (7))){
var inst_44371 = (state_44375[(2)]);
var state_44375__$1 = state_44375;
var statearr_44377_44461 = state_44375__$1;
(statearr_44377_44461[(2)] = inst_44371);

(statearr_44377_44461[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44376 === (20))){
var inst_44274 = (state_44375[(7)]);
var inst_44286 = cljs.core.first.call(null,inst_44274);
var inst_44287 = cljs.core.nth.call(null,inst_44286,(0),null);
var inst_44288 = cljs.core.nth.call(null,inst_44286,(1),null);
var state_44375__$1 = (function (){var statearr_44378 = state_44375;
(statearr_44378[(8)] = inst_44287);

return statearr_44378;
})();
if(cljs.core.truth_(inst_44288)){
var statearr_44379_44462 = state_44375__$1;
(statearr_44379_44462[(1)] = (22));

} else {
var statearr_44380_44463 = state_44375__$1;
(statearr_44380_44463[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44376 === (27))){
var inst_44243 = (state_44375[(9)]);
var inst_44316 = (state_44375[(10)]);
var inst_44323 = (state_44375[(11)]);
var inst_44318 = (state_44375[(12)]);
var inst_44323__$1 = cljs.core._nth.call(null,inst_44316,inst_44318);
var inst_44324 = cljs.core.async.put_BANG_.call(null,inst_44323__$1,inst_44243,done);
var state_44375__$1 = (function (){var statearr_44381 = state_44375;
(statearr_44381[(11)] = inst_44323__$1);

return statearr_44381;
})();
if(cljs.core.truth_(inst_44324)){
var statearr_44382_44464 = state_44375__$1;
(statearr_44382_44464[(1)] = (30));

} else {
var statearr_44383_44465 = state_44375__$1;
(statearr_44383_44465[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44376 === (1))){
var state_44375__$1 = state_44375;
var statearr_44384_44466 = state_44375__$1;
(statearr_44384_44466[(2)] = null);

(statearr_44384_44466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44376 === (24))){
var inst_44274 = (state_44375[(7)]);
var inst_44293 = (state_44375[(2)]);
var inst_44294 = cljs.core.next.call(null,inst_44274);
var inst_44252 = inst_44294;
var inst_44253 = null;
var inst_44254 = (0);
var inst_44255 = (0);
var state_44375__$1 = (function (){var statearr_44385 = state_44375;
(statearr_44385[(13)] = inst_44255);

(statearr_44385[(14)] = inst_44293);

(statearr_44385[(15)] = inst_44252);

(statearr_44385[(16)] = inst_44254);

(statearr_44385[(17)] = inst_44253);

return statearr_44385;
})();
var statearr_44386_44467 = state_44375__$1;
(statearr_44386_44467[(2)] = null);

(statearr_44386_44467[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44376 === (39))){
var state_44375__$1 = state_44375;
var statearr_44390_44468 = state_44375__$1;
(statearr_44390_44468[(2)] = null);

(statearr_44390_44468[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44376 === (4))){
var inst_44243 = (state_44375[(9)]);
var inst_44243__$1 = (state_44375[(2)]);
var inst_44244 = (inst_44243__$1 == null);
var state_44375__$1 = (function (){var statearr_44391 = state_44375;
(statearr_44391[(9)] = inst_44243__$1);

return statearr_44391;
})();
if(cljs.core.truth_(inst_44244)){
var statearr_44392_44469 = state_44375__$1;
(statearr_44392_44469[(1)] = (5));

} else {
var statearr_44393_44470 = state_44375__$1;
(statearr_44393_44470[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44376 === (15))){
var inst_44255 = (state_44375[(13)]);
var inst_44252 = (state_44375[(15)]);
var inst_44254 = (state_44375[(16)]);
var inst_44253 = (state_44375[(17)]);
var inst_44270 = (state_44375[(2)]);
var inst_44271 = (inst_44255 + (1));
var tmp44387 = inst_44252;
var tmp44388 = inst_44254;
var tmp44389 = inst_44253;
var inst_44252__$1 = tmp44387;
var inst_44253__$1 = tmp44389;
var inst_44254__$1 = tmp44388;
var inst_44255__$1 = inst_44271;
var state_44375__$1 = (function (){var statearr_44394 = state_44375;
(statearr_44394[(13)] = inst_44255__$1);

(statearr_44394[(15)] = inst_44252__$1);

(statearr_44394[(16)] = inst_44254__$1);

(statearr_44394[(17)] = inst_44253__$1);

(statearr_44394[(18)] = inst_44270);

return statearr_44394;
})();
var statearr_44395_44471 = state_44375__$1;
(statearr_44395_44471[(2)] = null);

(statearr_44395_44471[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44376 === (21))){
var inst_44297 = (state_44375[(2)]);
var state_44375__$1 = state_44375;
var statearr_44399_44472 = state_44375__$1;
(statearr_44399_44472[(2)] = inst_44297);

(statearr_44399_44472[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44376 === (31))){
var inst_44323 = (state_44375[(11)]);
var inst_44327 = done.call(null,null);
var inst_44328 = cljs.core.async.untap_STAR_.call(null,m,inst_44323);
var state_44375__$1 = (function (){var statearr_44400 = state_44375;
(statearr_44400[(19)] = inst_44327);

return statearr_44400;
})();
var statearr_44401_44473 = state_44375__$1;
(statearr_44401_44473[(2)] = inst_44328);

(statearr_44401_44473[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44376 === (32))){
var inst_44316 = (state_44375[(10)]);
var inst_44315 = (state_44375[(20)]);
var inst_44318 = (state_44375[(12)]);
var inst_44317 = (state_44375[(21)]);
var inst_44330 = (state_44375[(2)]);
var inst_44331 = (inst_44318 + (1));
var tmp44396 = inst_44316;
var tmp44397 = inst_44315;
var tmp44398 = inst_44317;
var inst_44315__$1 = tmp44397;
var inst_44316__$1 = tmp44396;
var inst_44317__$1 = tmp44398;
var inst_44318__$1 = inst_44331;
var state_44375__$1 = (function (){var statearr_44402 = state_44375;
(statearr_44402[(22)] = inst_44330);

(statearr_44402[(10)] = inst_44316__$1);

(statearr_44402[(20)] = inst_44315__$1);

(statearr_44402[(12)] = inst_44318__$1);

(statearr_44402[(21)] = inst_44317__$1);

return statearr_44402;
})();
var statearr_44403_44474 = state_44375__$1;
(statearr_44403_44474[(2)] = null);

(statearr_44403_44474[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44376 === (40))){
var inst_44343 = (state_44375[(23)]);
var inst_44347 = done.call(null,null);
var inst_44348 = cljs.core.async.untap_STAR_.call(null,m,inst_44343);
var state_44375__$1 = (function (){var statearr_44404 = state_44375;
(statearr_44404[(24)] = inst_44347);

return statearr_44404;
})();
var statearr_44405_44475 = state_44375__$1;
(statearr_44405_44475[(2)] = inst_44348);

(statearr_44405_44475[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44376 === (33))){
var inst_44334 = (state_44375[(25)]);
var inst_44336 = cljs.core.chunked_seq_QMARK_.call(null,inst_44334);
var state_44375__$1 = state_44375;
if(inst_44336){
var statearr_44406_44476 = state_44375__$1;
(statearr_44406_44476[(1)] = (36));

} else {
var statearr_44407_44477 = state_44375__$1;
(statearr_44407_44477[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44376 === (13))){
var inst_44264 = (state_44375[(26)]);
var inst_44267 = cljs.core.async.close_BANG_.call(null,inst_44264);
var state_44375__$1 = state_44375;
var statearr_44408_44478 = state_44375__$1;
(statearr_44408_44478[(2)] = inst_44267);

(statearr_44408_44478[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44376 === (22))){
var inst_44287 = (state_44375[(8)]);
var inst_44290 = cljs.core.async.close_BANG_.call(null,inst_44287);
var state_44375__$1 = state_44375;
var statearr_44409_44479 = state_44375__$1;
(statearr_44409_44479[(2)] = inst_44290);

(statearr_44409_44479[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44376 === (36))){
var inst_44334 = (state_44375[(25)]);
var inst_44338 = cljs.core.chunk_first.call(null,inst_44334);
var inst_44339 = cljs.core.chunk_rest.call(null,inst_44334);
var inst_44340 = cljs.core.count.call(null,inst_44338);
var inst_44315 = inst_44339;
var inst_44316 = inst_44338;
var inst_44317 = inst_44340;
var inst_44318 = (0);
var state_44375__$1 = (function (){var statearr_44410 = state_44375;
(statearr_44410[(10)] = inst_44316);

(statearr_44410[(20)] = inst_44315);

(statearr_44410[(12)] = inst_44318);

(statearr_44410[(21)] = inst_44317);

return statearr_44410;
})();
var statearr_44411_44480 = state_44375__$1;
(statearr_44411_44480[(2)] = null);

(statearr_44411_44480[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44376 === (41))){
var inst_44334 = (state_44375[(25)]);
var inst_44350 = (state_44375[(2)]);
var inst_44351 = cljs.core.next.call(null,inst_44334);
var inst_44315 = inst_44351;
var inst_44316 = null;
var inst_44317 = (0);
var inst_44318 = (0);
var state_44375__$1 = (function (){var statearr_44412 = state_44375;
(statearr_44412[(10)] = inst_44316);

(statearr_44412[(20)] = inst_44315);

(statearr_44412[(12)] = inst_44318);

(statearr_44412[(21)] = inst_44317);

(statearr_44412[(27)] = inst_44350);

return statearr_44412;
})();
var statearr_44413_44481 = state_44375__$1;
(statearr_44413_44481[(2)] = null);

(statearr_44413_44481[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44376 === (43))){
var state_44375__$1 = state_44375;
var statearr_44414_44482 = state_44375__$1;
(statearr_44414_44482[(2)] = null);

(statearr_44414_44482[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44376 === (29))){
var inst_44359 = (state_44375[(2)]);
var state_44375__$1 = state_44375;
var statearr_44415_44483 = state_44375__$1;
(statearr_44415_44483[(2)] = inst_44359);

(statearr_44415_44483[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44376 === (44))){
var inst_44368 = (state_44375[(2)]);
var state_44375__$1 = (function (){var statearr_44416 = state_44375;
(statearr_44416[(28)] = inst_44368);

return statearr_44416;
})();
var statearr_44417_44484 = state_44375__$1;
(statearr_44417_44484[(2)] = null);

(statearr_44417_44484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44376 === (6))){
var inst_44307 = (state_44375[(29)]);
var inst_44306 = cljs.core.deref.call(null,cs);
var inst_44307__$1 = cljs.core.keys.call(null,inst_44306);
var inst_44308 = cljs.core.count.call(null,inst_44307__$1);
var inst_44309 = cljs.core.reset_BANG_.call(null,dctr,inst_44308);
var inst_44314 = cljs.core.seq.call(null,inst_44307__$1);
var inst_44315 = inst_44314;
var inst_44316 = null;
var inst_44317 = (0);
var inst_44318 = (0);
var state_44375__$1 = (function (){var statearr_44418 = state_44375;
(statearr_44418[(29)] = inst_44307__$1);

(statearr_44418[(10)] = inst_44316);

(statearr_44418[(20)] = inst_44315);

(statearr_44418[(30)] = inst_44309);

(statearr_44418[(12)] = inst_44318);

(statearr_44418[(21)] = inst_44317);

return statearr_44418;
})();
var statearr_44419_44485 = state_44375__$1;
(statearr_44419_44485[(2)] = null);

(statearr_44419_44485[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44376 === (28))){
var inst_44334 = (state_44375[(25)]);
var inst_44315 = (state_44375[(20)]);
var inst_44334__$1 = cljs.core.seq.call(null,inst_44315);
var state_44375__$1 = (function (){var statearr_44420 = state_44375;
(statearr_44420[(25)] = inst_44334__$1);

return statearr_44420;
})();
if(inst_44334__$1){
var statearr_44421_44486 = state_44375__$1;
(statearr_44421_44486[(1)] = (33));

} else {
var statearr_44422_44487 = state_44375__$1;
(statearr_44422_44487[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44376 === (25))){
var inst_44318 = (state_44375[(12)]);
var inst_44317 = (state_44375[(21)]);
var inst_44320 = (inst_44318 < inst_44317);
var inst_44321 = inst_44320;
var state_44375__$1 = state_44375;
if(cljs.core.truth_(inst_44321)){
var statearr_44423_44488 = state_44375__$1;
(statearr_44423_44488[(1)] = (27));

} else {
var statearr_44424_44489 = state_44375__$1;
(statearr_44424_44489[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44376 === (34))){
var state_44375__$1 = state_44375;
var statearr_44425_44490 = state_44375__$1;
(statearr_44425_44490[(2)] = null);

(statearr_44425_44490[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44376 === (17))){
var state_44375__$1 = state_44375;
var statearr_44426_44491 = state_44375__$1;
(statearr_44426_44491[(2)] = null);

(statearr_44426_44491[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44376 === (3))){
var inst_44373 = (state_44375[(2)]);
var state_44375__$1 = state_44375;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44375__$1,inst_44373);
} else {
if((state_val_44376 === (12))){
var inst_44302 = (state_44375[(2)]);
var state_44375__$1 = state_44375;
var statearr_44427_44492 = state_44375__$1;
(statearr_44427_44492[(2)] = inst_44302);

(statearr_44427_44492[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44376 === (2))){
var state_44375__$1 = state_44375;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44375__$1,(4),ch);
} else {
if((state_val_44376 === (23))){
var state_44375__$1 = state_44375;
var statearr_44428_44493 = state_44375__$1;
(statearr_44428_44493[(2)] = null);

(statearr_44428_44493[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44376 === (35))){
var inst_44357 = (state_44375[(2)]);
var state_44375__$1 = state_44375;
var statearr_44429_44494 = state_44375__$1;
(statearr_44429_44494[(2)] = inst_44357);

(statearr_44429_44494[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44376 === (19))){
var inst_44274 = (state_44375[(7)]);
var inst_44278 = cljs.core.chunk_first.call(null,inst_44274);
var inst_44279 = cljs.core.chunk_rest.call(null,inst_44274);
var inst_44280 = cljs.core.count.call(null,inst_44278);
var inst_44252 = inst_44279;
var inst_44253 = inst_44278;
var inst_44254 = inst_44280;
var inst_44255 = (0);
var state_44375__$1 = (function (){var statearr_44430 = state_44375;
(statearr_44430[(13)] = inst_44255);

(statearr_44430[(15)] = inst_44252);

(statearr_44430[(16)] = inst_44254);

(statearr_44430[(17)] = inst_44253);

return statearr_44430;
})();
var statearr_44431_44495 = state_44375__$1;
(statearr_44431_44495[(2)] = null);

(statearr_44431_44495[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44376 === (11))){
var inst_44274 = (state_44375[(7)]);
var inst_44252 = (state_44375[(15)]);
var inst_44274__$1 = cljs.core.seq.call(null,inst_44252);
var state_44375__$1 = (function (){var statearr_44432 = state_44375;
(statearr_44432[(7)] = inst_44274__$1);

return statearr_44432;
})();
if(inst_44274__$1){
var statearr_44433_44496 = state_44375__$1;
(statearr_44433_44496[(1)] = (16));

} else {
var statearr_44434_44497 = state_44375__$1;
(statearr_44434_44497[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44376 === (9))){
var inst_44304 = (state_44375[(2)]);
var state_44375__$1 = state_44375;
var statearr_44435_44498 = state_44375__$1;
(statearr_44435_44498[(2)] = inst_44304);

(statearr_44435_44498[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44376 === (5))){
var inst_44250 = cljs.core.deref.call(null,cs);
var inst_44251 = cljs.core.seq.call(null,inst_44250);
var inst_44252 = inst_44251;
var inst_44253 = null;
var inst_44254 = (0);
var inst_44255 = (0);
var state_44375__$1 = (function (){var statearr_44436 = state_44375;
(statearr_44436[(13)] = inst_44255);

(statearr_44436[(15)] = inst_44252);

(statearr_44436[(16)] = inst_44254);

(statearr_44436[(17)] = inst_44253);

return statearr_44436;
})();
var statearr_44437_44499 = state_44375__$1;
(statearr_44437_44499[(2)] = null);

(statearr_44437_44499[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44376 === (14))){
var state_44375__$1 = state_44375;
var statearr_44438_44500 = state_44375__$1;
(statearr_44438_44500[(2)] = null);

(statearr_44438_44500[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44376 === (45))){
var inst_44365 = (state_44375[(2)]);
var state_44375__$1 = state_44375;
var statearr_44439_44501 = state_44375__$1;
(statearr_44439_44501[(2)] = inst_44365);

(statearr_44439_44501[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44376 === (26))){
var inst_44307 = (state_44375[(29)]);
var inst_44361 = (state_44375[(2)]);
var inst_44362 = cljs.core.seq.call(null,inst_44307);
var state_44375__$1 = (function (){var statearr_44440 = state_44375;
(statearr_44440[(31)] = inst_44361);

return statearr_44440;
})();
if(inst_44362){
var statearr_44441_44502 = state_44375__$1;
(statearr_44441_44502[(1)] = (42));

} else {
var statearr_44442_44503 = state_44375__$1;
(statearr_44442_44503[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44376 === (16))){
var inst_44274 = (state_44375[(7)]);
var inst_44276 = cljs.core.chunked_seq_QMARK_.call(null,inst_44274);
var state_44375__$1 = state_44375;
if(inst_44276){
var statearr_44443_44504 = state_44375__$1;
(statearr_44443_44504[(1)] = (19));

} else {
var statearr_44444_44505 = state_44375__$1;
(statearr_44444_44505[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44376 === (38))){
var inst_44354 = (state_44375[(2)]);
var state_44375__$1 = state_44375;
var statearr_44445_44506 = state_44375__$1;
(statearr_44445_44506[(2)] = inst_44354);

(statearr_44445_44506[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44376 === (30))){
var state_44375__$1 = state_44375;
var statearr_44446_44507 = state_44375__$1;
(statearr_44446_44507[(2)] = null);

(statearr_44446_44507[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44376 === (10))){
var inst_44255 = (state_44375[(13)]);
var inst_44253 = (state_44375[(17)]);
var inst_44263 = cljs.core._nth.call(null,inst_44253,inst_44255);
var inst_44264 = cljs.core.nth.call(null,inst_44263,(0),null);
var inst_44265 = cljs.core.nth.call(null,inst_44263,(1),null);
var state_44375__$1 = (function (){var statearr_44447 = state_44375;
(statearr_44447[(26)] = inst_44264);

return statearr_44447;
})();
if(cljs.core.truth_(inst_44265)){
var statearr_44448_44508 = state_44375__$1;
(statearr_44448_44508[(1)] = (13));

} else {
var statearr_44449_44509 = state_44375__$1;
(statearr_44449_44509[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44376 === (18))){
var inst_44300 = (state_44375[(2)]);
var state_44375__$1 = state_44375;
var statearr_44450_44510 = state_44375__$1;
(statearr_44450_44510[(2)] = inst_44300);

(statearr_44450_44510[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44376 === (42))){
var state_44375__$1 = state_44375;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44375__$1,(45),dchan);
} else {
if((state_val_44376 === (37))){
var inst_44343 = (state_44375[(23)]);
var inst_44334 = (state_44375[(25)]);
var inst_44243 = (state_44375[(9)]);
var inst_44343__$1 = cljs.core.first.call(null,inst_44334);
var inst_44344 = cljs.core.async.put_BANG_.call(null,inst_44343__$1,inst_44243,done);
var state_44375__$1 = (function (){var statearr_44451 = state_44375;
(statearr_44451[(23)] = inst_44343__$1);

return statearr_44451;
})();
if(cljs.core.truth_(inst_44344)){
var statearr_44452_44511 = state_44375__$1;
(statearr_44452_44511[(1)] = (39));

} else {
var statearr_44453_44512 = state_44375__$1;
(statearr_44453_44512[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44376 === (8))){
var inst_44255 = (state_44375[(13)]);
var inst_44254 = (state_44375[(16)]);
var inst_44257 = (inst_44255 < inst_44254);
var inst_44258 = inst_44257;
var state_44375__$1 = state_44375;
if(cljs.core.truth_(inst_44258)){
var statearr_44454_44513 = state_44375__$1;
(statearr_44454_44513[(1)] = (10));

} else {
var statearr_44455_44514 = state_44375__$1;
(statearr_44455_44514[(1)] = (11));

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
});})(c__39480__auto___44460,cs,m,dchan,dctr,done))
;
return ((function (switch__39459__auto__,c__39480__auto___44460,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__39460__auto__ = null;
var cljs$core$async$mult_$_state_machine__39460__auto____0 = (function (){
var statearr_44456 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44456[(0)] = cljs$core$async$mult_$_state_machine__39460__auto__);

(statearr_44456[(1)] = (1));

return statearr_44456;
});
var cljs$core$async$mult_$_state_machine__39460__auto____1 = (function (state_44375){
while(true){
var ret_value__39461__auto__ = (function (){try{while(true){
var result__39462__auto__ = switch__39459__auto__.call(null,state_44375);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39462__auto__;
}
break;
}
}catch (e44457){if((e44457 instanceof Object)){
var ex__39463__auto__ = e44457;
var statearr_44458_44515 = state_44375;
(statearr_44458_44515[(5)] = ex__39463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44375);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44457;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44516 = state_44375;
state_44375 = G__44516;
continue;
} else {
return ret_value__39461__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__39460__auto__ = function(state_44375){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__39460__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__39460__auto____1.call(this,state_44375);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__39460__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__39460__auto____0;
cljs$core$async$mult_$_state_machine__39460__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__39460__auto____1;
return cljs$core$async$mult_$_state_machine__39460__auto__;
})()
;})(switch__39459__auto__,c__39480__auto___44460,cs,m,dchan,dctr,done))
})();
var state__39482__auto__ = (function (){var statearr_44459 = f__39481__auto__.call(null);
(statearr_44459[(6)] = c__39480__auto___44460);

return statearr_44459;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39482__auto__);
});})(c__39480__auto___44460,cs,m,dchan,dctr,done))
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
var G__44518 = arguments.length;
switch (G__44518) {
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
var x__37432__auto__ = (((m == null))?null:m);
var m__37433__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__37432__auto__)]);
if(!((m__37433__auto__ == null))){
return m__37433__auto__.call(null,m,ch);
} else {
var m__37433__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__37433__auto____$1 == null))){
return m__37433__auto____$1.call(null,m,ch);
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
var x__37432__auto__ = (((m == null))?null:m);
var m__37433__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__37432__auto__)]);
if(!((m__37433__auto__ == null))){
return m__37433__auto__.call(null,m,ch);
} else {
var m__37433__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__37433__auto____$1 == null))){
return m__37433__auto____$1.call(null,m,ch);
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
var x__37432__auto__ = (((m == null))?null:m);
var m__37433__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__37432__auto__)]);
if(!((m__37433__auto__ == null))){
return m__37433__auto__.call(null,m);
} else {
var m__37433__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__37433__auto____$1 == null))){
return m__37433__auto____$1.call(null,m);
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
var x__37432__auto__ = (((m == null))?null:m);
var m__37433__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__37432__auto__)]);
if(!((m__37433__auto__ == null))){
return m__37433__auto__.call(null,m,state_map);
} else {
var m__37433__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__37433__auto____$1 == null))){
return m__37433__auto____$1.call(null,m,state_map);
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
var x__37432__auto__ = (((m == null))?null:m);
var m__37433__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__37432__auto__)]);
if(!((m__37433__auto__ == null))){
return m__37433__auto__.call(null,m,mode);
} else {
var m__37433__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__37433__auto____$1 == null))){
return m__37433__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__37896__auto__ = [];
var len__37889__auto___44530 = arguments.length;
var i__37890__auto___44531 = (0);
while(true){
if((i__37890__auto___44531 < len__37889__auto___44530)){
args__37896__auto__.push((arguments[i__37890__auto___44531]));

var G__44532 = (i__37890__auto___44531 + (1));
i__37890__auto___44531 = G__44532;
continue;
} else {
}
break;
}

var argseq__37897__auto__ = ((((3) < args__37896__auto__.length))?(new cljs.core.IndexedSeq(args__37896__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__37897__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__44524){
var map__44525 = p__44524;
var map__44525__$1 = ((((!((map__44525 == null)))?((((map__44525.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44525.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44525):map__44525);
var opts = map__44525__$1;
var statearr_44527_44533 = state;
(statearr_44527_44533[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__44525,map__44525__$1,opts){
return (function (val){
var statearr_44528_44534 = state;
(statearr_44528_44534[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__44525,map__44525__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_44529_44535 = state;
(statearr_44529_44535[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq44520){
var G__44521 = cljs.core.first.call(null,seq44520);
var seq44520__$1 = cljs.core.next.call(null,seq44520);
var G__44522 = cljs.core.first.call(null,seq44520__$1);
var seq44520__$2 = cljs.core.next.call(null,seq44520__$1);
var G__44523 = cljs.core.first.call(null,seq44520__$2);
var seq44520__$3 = cljs.core.next.call(null,seq44520__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__44521,G__44522,G__44523,seq44520__$3);
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
if(typeof cljs.core.async.t_cljs$core$async44536 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44536 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta44537){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta44537 = meta44537;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async44536.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_44538,meta44537__$1){
var self__ = this;
var _44538__$1 = this;
return (new cljs.core.async.t_cljs$core$async44536(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta44537__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44536.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_44538){
var self__ = this;
var _44538__$1 = this;
return self__.meta44537;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44536.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44536.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44536.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44536.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44536.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44536.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44536.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44536.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async44536.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta44537","meta44537",2001099701,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44536.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44536.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44536";

cljs.core.async.t_cljs$core$async44536.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__37374__auto__,writer__37375__auto__,opt__37376__auto__){
return cljs.core._write.call(null,writer__37375__auto__,"cljs.core.async/t_cljs$core$async44536");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async44536 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async44536(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta44537){
return (new cljs.core.async.t_cljs$core$async44536(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta44537));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async44536(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__39480__auto___44700 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39480__auto___44700,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__39481__auto__ = (function (){var switch__39459__auto__ = ((function (c__39480__auto___44700,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_44640){
var state_val_44641 = (state_44640[(1)]);
if((state_val_44641 === (7))){
var inst_44555 = (state_44640[(2)]);
var state_44640__$1 = state_44640;
var statearr_44642_44701 = state_44640__$1;
(statearr_44642_44701[(2)] = inst_44555);

(statearr_44642_44701[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44641 === (20))){
var inst_44567 = (state_44640[(7)]);
var state_44640__$1 = state_44640;
var statearr_44643_44702 = state_44640__$1;
(statearr_44643_44702[(2)] = inst_44567);

(statearr_44643_44702[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44641 === (27))){
var state_44640__$1 = state_44640;
var statearr_44644_44703 = state_44640__$1;
(statearr_44644_44703[(2)] = null);

(statearr_44644_44703[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44641 === (1))){
var inst_44542 = (state_44640[(8)]);
var inst_44542__$1 = calc_state.call(null);
var inst_44544 = (inst_44542__$1 == null);
var inst_44545 = cljs.core.not.call(null,inst_44544);
var state_44640__$1 = (function (){var statearr_44645 = state_44640;
(statearr_44645[(8)] = inst_44542__$1);

return statearr_44645;
})();
if(inst_44545){
var statearr_44646_44704 = state_44640__$1;
(statearr_44646_44704[(1)] = (2));

} else {
var statearr_44647_44705 = state_44640__$1;
(statearr_44647_44705[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44641 === (24))){
var inst_44600 = (state_44640[(9)]);
var inst_44591 = (state_44640[(10)]);
var inst_44614 = (state_44640[(11)]);
var inst_44614__$1 = inst_44591.call(null,inst_44600);
var state_44640__$1 = (function (){var statearr_44648 = state_44640;
(statearr_44648[(11)] = inst_44614__$1);

return statearr_44648;
})();
if(cljs.core.truth_(inst_44614__$1)){
var statearr_44649_44706 = state_44640__$1;
(statearr_44649_44706[(1)] = (29));

} else {
var statearr_44650_44707 = state_44640__$1;
(statearr_44650_44707[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44641 === (4))){
var inst_44558 = (state_44640[(2)]);
var state_44640__$1 = state_44640;
if(cljs.core.truth_(inst_44558)){
var statearr_44651_44708 = state_44640__$1;
(statearr_44651_44708[(1)] = (8));

} else {
var statearr_44652_44709 = state_44640__$1;
(statearr_44652_44709[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44641 === (15))){
var inst_44585 = (state_44640[(2)]);
var state_44640__$1 = state_44640;
if(cljs.core.truth_(inst_44585)){
var statearr_44653_44710 = state_44640__$1;
(statearr_44653_44710[(1)] = (19));

} else {
var statearr_44654_44711 = state_44640__$1;
(statearr_44654_44711[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44641 === (21))){
var inst_44590 = (state_44640[(12)]);
var inst_44590__$1 = (state_44640[(2)]);
var inst_44591 = cljs.core.get.call(null,inst_44590__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_44592 = cljs.core.get.call(null,inst_44590__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_44593 = cljs.core.get.call(null,inst_44590__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_44640__$1 = (function (){var statearr_44655 = state_44640;
(statearr_44655[(10)] = inst_44591);

(statearr_44655[(13)] = inst_44592);

(statearr_44655[(12)] = inst_44590__$1);

return statearr_44655;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_44640__$1,(22),inst_44593);
} else {
if((state_val_44641 === (31))){
var inst_44622 = (state_44640[(2)]);
var state_44640__$1 = state_44640;
if(cljs.core.truth_(inst_44622)){
var statearr_44656_44712 = state_44640__$1;
(statearr_44656_44712[(1)] = (32));

} else {
var statearr_44657_44713 = state_44640__$1;
(statearr_44657_44713[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44641 === (32))){
var inst_44599 = (state_44640[(14)]);
var state_44640__$1 = state_44640;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44640__$1,(35),out,inst_44599);
} else {
if((state_val_44641 === (33))){
var inst_44590 = (state_44640[(12)]);
var inst_44567 = inst_44590;
var state_44640__$1 = (function (){var statearr_44658 = state_44640;
(statearr_44658[(7)] = inst_44567);

return statearr_44658;
})();
var statearr_44659_44714 = state_44640__$1;
(statearr_44659_44714[(2)] = null);

(statearr_44659_44714[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44641 === (13))){
var inst_44567 = (state_44640[(7)]);
var inst_44574 = inst_44567.cljs$lang$protocol_mask$partition0$;
var inst_44575 = (inst_44574 & (64));
var inst_44576 = inst_44567.cljs$core$ISeq$;
var inst_44577 = (cljs.core.PROTOCOL_SENTINEL === inst_44576);
var inst_44578 = (inst_44575) || (inst_44577);
var state_44640__$1 = state_44640;
if(cljs.core.truth_(inst_44578)){
var statearr_44660_44715 = state_44640__$1;
(statearr_44660_44715[(1)] = (16));

} else {
var statearr_44661_44716 = state_44640__$1;
(statearr_44661_44716[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44641 === (22))){
var inst_44600 = (state_44640[(9)]);
var inst_44599 = (state_44640[(14)]);
var inst_44598 = (state_44640[(2)]);
var inst_44599__$1 = cljs.core.nth.call(null,inst_44598,(0),null);
var inst_44600__$1 = cljs.core.nth.call(null,inst_44598,(1),null);
var inst_44601 = (inst_44599__$1 == null);
var inst_44602 = cljs.core._EQ_.call(null,inst_44600__$1,change);
var inst_44603 = (inst_44601) || (inst_44602);
var state_44640__$1 = (function (){var statearr_44662 = state_44640;
(statearr_44662[(9)] = inst_44600__$1);

(statearr_44662[(14)] = inst_44599__$1);

return statearr_44662;
})();
if(cljs.core.truth_(inst_44603)){
var statearr_44663_44717 = state_44640__$1;
(statearr_44663_44717[(1)] = (23));

} else {
var statearr_44664_44718 = state_44640__$1;
(statearr_44664_44718[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44641 === (36))){
var inst_44590 = (state_44640[(12)]);
var inst_44567 = inst_44590;
var state_44640__$1 = (function (){var statearr_44665 = state_44640;
(statearr_44665[(7)] = inst_44567);

return statearr_44665;
})();
var statearr_44666_44719 = state_44640__$1;
(statearr_44666_44719[(2)] = null);

(statearr_44666_44719[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44641 === (29))){
var inst_44614 = (state_44640[(11)]);
var state_44640__$1 = state_44640;
var statearr_44667_44720 = state_44640__$1;
(statearr_44667_44720[(2)] = inst_44614);

(statearr_44667_44720[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44641 === (6))){
var state_44640__$1 = state_44640;
var statearr_44668_44721 = state_44640__$1;
(statearr_44668_44721[(2)] = false);

(statearr_44668_44721[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44641 === (28))){
var inst_44610 = (state_44640[(2)]);
var inst_44611 = calc_state.call(null);
var inst_44567 = inst_44611;
var state_44640__$1 = (function (){var statearr_44669 = state_44640;
(statearr_44669[(7)] = inst_44567);

(statearr_44669[(15)] = inst_44610);

return statearr_44669;
})();
var statearr_44670_44722 = state_44640__$1;
(statearr_44670_44722[(2)] = null);

(statearr_44670_44722[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44641 === (25))){
var inst_44636 = (state_44640[(2)]);
var state_44640__$1 = state_44640;
var statearr_44671_44723 = state_44640__$1;
(statearr_44671_44723[(2)] = inst_44636);

(statearr_44671_44723[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44641 === (34))){
var inst_44634 = (state_44640[(2)]);
var state_44640__$1 = state_44640;
var statearr_44672_44724 = state_44640__$1;
(statearr_44672_44724[(2)] = inst_44634);

(statearr_44672_44724[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44641 === (17))){
var state_44640__$1 = state_44640;
var statearr_44673_44725 = state_44640__$1;
(statearr_44673_44725[(2)] = false);

(statearr_44673_44725[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44641 === (3))){
var state_44640__$1 = state_44640;
var statearr_44674_44726 = state_44640__$1;
(statearr_44674_44726[(2)] = false);

(statearr_44674_44726[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44641 === (12))){
var inst_44638 = (state_44640[(2)]);
var state_44640__$1 = state_44640;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44640__$1,inst_44638);
} else {
if((state_val_44641 === (2))){
var inst_44542 = (state_44640[(8)]);
var inst_44547 = inst_44542.cljs$lang$protocol_mask$partition0$;
var inst_44548 = (inst_44547 & (64));
var inst_44549 = inst_44542.cljs$core$ISeq$;
var inst_44550 = (cljs.core.PROTOCOL_SENTINEL === inst_44549);
var inst_44551 = (inst_44548) || (inst_44550);
var state_44640__$1 = state_44640;
if(cljs.core.truth_(inst_44551)){
var statearr_44675_44727 = state_44640__$1;
(statearr_44675_44727[(1)] = (5));

} else {
var statearr_44676_44728 = state_44640__$1;
(statearr_44676_44728[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44641 === (23))){
var inst_44599 = (state_44640[(14)]);
var inst_44605 = (inst_44599 == null);
var state_44640__$1 = state_44640;
if(cljs.core.truth_(inst_44605)){
var statearr_44677_44729 = state_44640__$1;
(statearr_44677_44729[(1)] = (26));

} else {
var statearr_44678_44730 = state_44640__$1;
(statearr_44678_44730[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44641 === (35))){
var inst_44625 = (state_44640[(2)]);
var state_44640__$1 = state_44640;
if(cljs.core.truth_(inst_44625)){
var statearr_44679_44731 = state_44640__$1;
(statearr_44679_44731[(1)] = (36));

} else {
var statearr_44680_44732 = state_44640__$1;
(statearr_44680_44732[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44641 === (19))){
var inst_44567 = (state_44640[(7)]);
var inst_44587 = cljs.core.apply.call(null,cljs.core.hash_map,inst_44567);
var state_44640__$1 = state_44640;
var statearr_44681_44733 = state_44640__$1;
(statearr_44681_44733[(2)] = inst_44587);

(statearr_44681_44733[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44641 === (11))){
var inst_44567 = (state_44640[(7)]);
var inst_44571 = (inst_44567 == null);
var inst_44572 = cljs.core.not.call(null,inst_44571);
var state_44640__$1 = state_44640;
if(inst_44572){
var statearr_44682_44734 = state_44640__$1;
(statearr_44682_44734[(1)] = (13));

} else {
var statearr_44683_44735 = state_44640__$1;
(statearr_44683_44735[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44641 === (9))){
var inst_44542 = (state_44640[(8)]);
var state_44640__$1 = state_44640;
var statearr_44684_44736 = state_44640__$1;
(statearr_44684_44736[(2)] = inst_44542);

(statearr_44684_44736[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44641 === (5))){
var state_44640__$1 = state_44640;
var statearr_44685_44737 = state_44640__$1;
(statearr_44685_44737[(2)] = true);

(statearr_44685_44737[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44641 === (14))){
var state_44640__$1 = state_44640;
var statearr_44686_44738 = state_44640__$1;
(statearr_44686_44738[(2)] = false);

(statearr_44686_44738[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44641 === (26))){
var inst_44600 = (state_44640[(9)]);
var inst_44607 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_44600);
var state_44640__$1 = state_44640;
var statearr_44687_44739 = state_44640__$1;
(statearr_44687_44739[(2)] = inst_44607);

(statearr_44687_44739[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44641 === (16))){
var state_44640__$1 = state_44640;
var statearr_44688_44740 = state_44640__$1;
(statearr_44688_44740[(2)] = true);

(statearr_44688_44740[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44641 === (38))){
var inst_44630 = (state_44640[(2)]);
var state_44640__$1 = state_44640;
var statearr_44689_44741 = state_44640__$1;
(statearr_44689_44741[(2)] = inst_44630);

(statearr_44689_44741[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44641 === (30))){
var inst_44600 = (state_44640[(9)]);
var inst_44591 = (state_44640[(10)]);
var inst_44592 = (state_44640[(13)]);
var inst_44617 = cljs.core.empty_QMARK_.call(null,inst_44591);
var inst_44618 = inst_44592.call(null,inst_44600);
var inst_44619 = cljs.core.not.call(null,inst_44618);
var inst_44620 = (inst_44617) && (inst_44619);
var state_44640__$1 = state_44640;
var statearr_44690_44742 = state_44640__$1;
(statearr_44690_44742[(2)] = inst_44620);

(statearr_44690_44742[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44641 === (10))){
var inst_44542 = (state_44640[(8)]);
var inst_44563 = (state_44640[(2)]);
var inst_44564 = cljs.core.get.call(null,inst_44563,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_44565 = cljs.core.get.call(null,inst_44563,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_44566 = cljs.core.get.call(null,inst_44563,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_44567 = inst_44542;
var state_44640__$1 = (function (){var statearr_44691 = state_44640;
(statearr_44691[(7)] = inst_44567);

(statearr_44691[(16)] = inst_44564);

(statearr_44691[(17)] = inst_44565);

(statearr_44691[(18)] = inst_44566);

return statearr_44691;
})();
var statearr_44692_44743 = state_44640__$1;
(statearr_44692_44743[(2)] = null);

(statearr_44692_44743[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44641 === (18))){
var inst_44582 = (state_44640[(2)]);
var state_44640__$1 = state_44640;
var statearr_44693_44744 = state_44640__$1;
(statearr_44693_44744[(2)] = inst_44582);

(statearr_44693_44744[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44641 === (37))){
var state_44640__$1 = state_44640;
var statearr_44694_44745 = state_44640__$1;
(statearr_44694_44745[(2)] = null);

(statearr_44694_44745[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44641 === (8))){
var inst_44542 = (state_44640[(8)]);
var inst_44560 = cljs.core.apply.call(null,cljs.core.hash_map,inst_44542);
var state_44640__$1 = state_44640;
var statearr_44695_44746 = state_44640__$1;
(statearr_44695_44746[(2)] = inst_44560);

(statearr_44695_44746[(1)] = (10));


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
});})(c__39480__auto___44700,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__39459__auto__,c__39480__auto___44700,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__39460__auto__ = null;
var cljs$core$async$mix_$_state_machine__39460__auto____0 = (function (){
var statearr_44696 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44696[(0)] = cljs$core$async$mix_$_state_machine__39460__auto__);

(statearr_44696[(1)] = (1));

return statearr_44696;
});
var cljs$core$async$mix_$_state_machine__39460__auto____1 = (function (state_44640){
while(true){
var ret_value__39461__auto__ = (function (){try{while(true){
var result__39462__auto__ = switch__39459__auto__.call(null,state_44640);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39462__auto__;
}
break;
}
}catch (e44697){if((e44697 instanceof Object)){
var ex__39463__auto__ = e44697;
var statearr_44698_44747 = state_44640;
(statearr_44698_44747[(5)] = ex__39463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44640);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44697;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44748 = state_44640;
state_44640 = G__44748;
continue;
} else {
return ret_value__39461__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__39460__auto__ = function(state_44640){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__39460__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__39460__auto____1.call(this,state_44640);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__39460__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__39460__auto____0;
cljs$core$async$mix_$_state_machine__39460__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__39460__auto____1;
return cljs$core$async$mix_$_state_machine__39460__auto__;
})()
;})(switch__39459__auto__,c__39480__auto___44700,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__39482__auto__ = (function (){var statearr_44699 = f__39481__auto__.call(null);
(statearr_44699[(6)] = c__39480__auto___44700);

return statearr_44699;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39482__auto__);
});})(c__39480__auto___44700,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__37432__auto__ = (((p == null))?null:p);
var m__37433__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__37432__auto__)]);
if(!((m__37433__auto__ == null))){
return m__37433__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__37433__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__37433__auto____$1 == null))){
return m__37433__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__37432__auto__ = (((p == null))?null:p);
var m__37433__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__37432__auto__)]);
if(!((m__37433__auto__ == null))){
return m__37433__auto__.call(null,p,v,ch);
} else {
var m__37433__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__37433__auto____$1 == null))){
return m__37433__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__44750 = arguments.length;
switch (G__44750) {
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
var x__37432__auto__ = (((p == null))?null:p);
var m__37433__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__37432__auto__)]);
if(!((m__37433__auto__ == null))){
return m__37433__auto__.call(null,p);
} else {
var m__37433__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__37433__auto____$1 == null))){
return m__37433__auto____$1.call(null,p);
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
var x__37432__auto__ = (((p == null))?null:p);
var m__37433__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__37432__auto__)]);
if(!((m__37433__auto__ == null))){
return m__37433__auto__.call(null,p,v);
} else {
var m__37433__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__37433__auto____$1 == null))){
return m__37433__auto____$1.call(null,p,v);
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
var G__44754 = arguments.length;
switch (G__44754) {
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
var or__36763__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__36763__auto__)){
return or__36763__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__36763__auto__,mults){
return (function (p1__44752_SHARP_){
if(cljs.core.truth_(p1__44752_SHARP_.call(null,topic))){
return p1__44752_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__44752_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__36763__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async44755 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44755 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta44756){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta44756 = meta44756;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async44755.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_44757,meta44756__$1){
var self__ = this;
var _44757__$1 = this;
return (new cljs.core.async.t_cljs$core$async44755(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta44756__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44755.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_44757){
var self__ = this;
var _44757__$1 = this;
return self__.meta44756;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44755.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44755.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44755.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44755.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44755.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async44755.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44755.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44755.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta44756","meta44756",1359985615,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44755.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44755.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44755";

cljs.core.async.t_cljs$core$async44755.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__37374__auto__,writer__37375__auto__,opt__37376__auto__){
return cljs.core._write.call(null,writer__37375__auto__,"cljs.core.async/t_cljs$core$async44755");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async44755 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async44755(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta44756){
return (new cljs.core.async.t_cljs$core$async44755(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta44756));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async44755(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__39480__auto___44875 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39480__auto___44875,mults,ensure_mult,p){
return (function (){
var f__39481__auto__ = (function (){var switch__39459__auto__ = ((function (c__39480__auto___44875,mults,ensure_mult,p){
return (function (state_44829){
var state_val_44830 = (state_44829[(1)]);
if((state_val_44830 === (7))){
var inst_44825 = (state_44829[(2)]);
var state_44829__$1 = state_44829;
var statearr_44831_44876 = state_44829__$1;
(statearr_44831_44876[(2)] = inst_44825);

(statearr_44831_44876[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44830 === (20))){
var state_44829__$1 = state_44829;
var statearr_44832_44877 = state_44829__$1;
(statearr_44832_44877[(2)] = null);

(statearr_44832_44877[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44830 === (1))){
var state_44829__$1 = state_44829;
var statearr_44833_44878 = state_44829__$1;
(statearr_44833_44878[(2)] = null);

(statearr_44833_44878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44830 === (24))){
var inst_44808 = (state_44829[(7)]);
var inst_44817 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_44808);
var state_44829__$1 = state_44829;
var statearr_44834_44879 = state_44829__$1;
(statearr_44834_44879[(2)] = inst_44817);

(statearr_44834_44879[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44830 === (4))){
var inst_44760 = (state_44829[(8)]);
var inst_44760__$1 = (state_44829[(2)]);
var inst_44761 = (inst_44760__$1 == null);
var state_44829__$1 = (function (){var statearr_44835 = state_44829;
(statearr_44835[(8)] = inst_44760__$1);

return statearr_44835;
})();
if(cljs.core.truth_(inst_44761)){
var statearr_44836_44880 = state_44829__$1;
(statearr_44836_44880[(1)] = (5));

} else {
var statearr_44837_44881 = state_44829__$1;
(statearr_44837_44881[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44830 === (15))){
var inst_44802 = (state_44829[(2)]);
var state_44829__$1 = state_44829;
var statearr_44838_44882 = state_44829__$1;
(statearr_44838_44882[(2)] = inst_44802);

(statearr_44838_44882[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44830 === (21))){
var inst_44822 = (state_44829[(2)]);
var state_44829__$1 = (function (){var statearr_44839 = state_44829;
(statearr_44839[(9)] = inst_44822);

return statearr_44839;
})();
var statearr_44840_44883 = state_44829__$1;
(statearr_44840_44883[(2)] = null);

(statearr_44840_44883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44830 === (13))){
var inst_44784 = (state_44829[(10)]);
var inst_44786 = cljs.core.chunked_seq_QMARK_.call(null,inst_44784);
var state_44829__$1 = state_44829;
if(inst_44786){
var statearr_44841_44884 = state_44829__$1;
(statearr_44841_44884[(1)] = (16));

} else {
var statearr_44842_44885 = state_44829__$1;
(statearr_44842_44885[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44830 === (22))){
var inst_44814 = (state_44829[(2)]);
var state_44829__$1 = state_44829;
if(cljs.core.truth_(inst_44814)){
var statearr_44843_44886 = state_44829__$1;
(statearr_44843_44886[(1)] = (23));

} else {
var statearr_44844_44887 = state_44829__$1;
(statearr_44844_44887[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44830 === (6))){
var inst_44808 = (state_44829[(7)]);
var inst_44810 = (state_44829[(11)]);
var inst_44760 = (state_44829[(8)]);
var inst_44808__$1 = topic_fn.call(null,inst_44760);
var inst_44809 = cljs.core.deref.call(null,mults);
var inst_44810__$1 = cljs.core.get.call(null,inst_44809,inst_44808__$1);
var state_44829__$1 = (function (){var statearr_44845 = state_44829;
(statearr_44845[(7)] = inst_44808__$1);

(statearr_44845[(11)] = inst_44810__$1);

return statearr_44845;
})();
if(cljs.core.truth_(inst_44810__$1)){
var statearr_44846_44888 = state_44829__$1;
(statearr_44846_44888[(1)] = (19));

} else {
var statearr_44847_44889 = state_44829__$1;
(statearr_44847_44889[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44830 === (25))){
var inst_44819 = (state_44829[(2)]);
var state_44829__$1 = state_44829;
var statearr_44848_44890 = state_44829__$1;
(statearr_44848_44890[(2)] = inst_44819);

(statearr_44848_44890[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44830 === (17))){
var inst_44784 = (state_44829[(10)]);
var inst_44793 = cljs.core.first.call(null,inst_44784);
var inst_44794 = cljs.core.async.muxch_STAR_.call(null,inst_44793);
var inst_44795 = cljs.core.async.close_BANG_.call(null,inst_44794);
var inst_44796 = cljs.core.next.call(null,inst_44784);
var inst_44770 = inst_44796;
var inst_44771 = null;
var inst_44772 = (0);
var inst_44773 = (0);
var state_44829__$1 = (function (){var statearr_44849 = state_44829;
(statearr_44849[(12)] = inst_44795);

(statearr_44849[(13)] = inst_44771);

(statearr_44849[(14)] = inst_44772);

(statearr_44849[(15)] = inst_44770);

(statearr_44849[(16)] = inst_44773);

return statearr_44849;
})();
var statearr_44850_44891 = state_44829__$1;
(statearr_44850_44891[(2)] = null);

(statearr_44850_44891[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44830 === (3))){
var inst_44827 = (state_44829[(2)]);
var state_44829__$1 = state_44829;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44829__$1,inst_44827);
} else {
if((state_val_44830 === (12))){
var inst_44804 = (state_44829[(2)]);
var state_44829__$1 = state_44829;
var statearr_44851_44892 = state_44829__$1;
(statearr_44851_44892[(2)] = inst_44804);

(statearr_44851_44892[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44830 === (2))){
var state_44829__$1 = state_44829;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44829__$1,(4),ch);
} else {
if((state_val_44830 === (23))){
var state_44829__$1 = state_44829;
var statearr_44852_44893 = state_44829__$1;
(statearr_44852_44893[(2)] = null);

(statearr_44852_44893[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44830 === (19))){
var inst_44810 = (state_44829[(11)]);
var inst_44760 = (state_44829[(8)]);
var inst_44812 = cljs.core.async.muxch_STAR_.call(null,inst_44810);
var state_44829__$1 = state_44829;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44829__$1,(22),inst_44812,inst_44760);
} else {
if((state_val_44830 === (11))){
var inst_44770 = (state_44829[(15)]);
var inst_44784 = (state_44829[(10)]);
var inst_44784__$1 = cljs.core.seq.call(null,inst_44770);
var state_44829__$1 = (function (){var statearr_44853 = state_44829;
(statearr_44853[(10)] = inst_44784__$1);

return statearr_44853;
})();
if(inst_44784__$1){
var statearr_44854_44894 = state_44829__$1;
(statearr_44854_44894[(1)] = (13));

} else {
var statearr_44855_44895 = state_44829__$1;
(statearr_44855_44895[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44830 === (9))){
var inst_44806 = (state_44829[(2)]);
var state_44829__$1 = state_44829;
var statearr_44856_44896 = state_44829__$1;
(statearr_44856_44896[(2)] = inst_44806);

(statearr_44856_44896[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44830 === (5))){
var inst_44767 = cljs.core.deref.call(null,mults);
var inst_44768 = cljs.core.vals.call(null,inst_44767);
var inst_44769 = cljs.core.seq.call(null,inst_44768);
var inst_44770 = inst_44769;
var inst_44771 = null;
var inst_44772 = (0);
var inst_44773 = (0);
var state_44829__$1 = (function (){var statearr_44857 = state_44829;
(statearr_44857[(13)] = inst_44771);

(statearr_44857[(14)] = inst_44772);

(statearr_44857[(15)] = inst_44770);

(statearr_44857[(16)] = inst_44773);

return statearr_44857;
})();
var statearr_44858_44897 = state_44829__$1;
(statearr_44858_44897[(2)] = null);

(statearr_44858_44897[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44830 === (14))){
var state_44829__$1 = state_44829;
var statearr_44862_44898 = state_44829__$1;
(statearr_44862_44898[(2)] = null);

(statearr_44862_44898[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44830 === (16))){
var inst_44784 = (state_44829[(10)]);
var inst_44788 = cljs.core.chunk_first.call(null,inst_44784);
var inst_44789 = cljs.core.chunk_rest.call(null,inst_44784);
var inst_44790 = cljs.core.count.call(null,inst_44788);
var inst_44770 = inst_44789;
var inst_44771 = inst_44788;
var inst_44772 = inst_44790;
var inst_44773 = (0);
var state_44829__$1 = (function (){var statearr_44863 = state_44829;
(statearr_44863[(13)] = inst_44771);

(statearr_44863[(14)] = inst_44772);

(statearr_44863[(15)] = inst_44770);

(statearr_44863[(16)] = inst_44773);

return statearr_44863;
})();
var statearr_44864_44899 = state_44829__$1;
(statearr_44864_44899[(2)] = null);

(statearr_44864_44899[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44830 === (10))){
var inst_44771 = (state_44829[(13)]);
var inst_44772 = (state_44829[(14)]);
var inst_44770 = (state_44829[(15)]);
var inst_44773 = (state_44829[(16)]);
var inst_44778 = cljs.core._nth.call(null,inst_44771,inst_44773);
var inst_44779 = cljs.core.async.muxch_STAR_.call(null,inst_44778);
var inst_44780 = cljs.core.async.close_BANG_.call(null,inst_44779);
var inst_44781 = (inst_44773 + (1));
var tmp44859 = inst_44771;
var tmp44860 = inst_44772;
var tmp44861 = inst_44770;
var inst_44770__$1 = tmp44861;
var inst_44771__$1 = tmp44859;
var inst_44772__$1 = tmp44860;
var inst_44773__$1 = inst_44781;
var state_44829__$1 = (function (){var statearr_44865 = state_44829;
(statearr_44865[(17)] = inst_44780);

(statearr_44865[(13)] = inst_44771__$1);

(statearr_44865[(14)] = inst_44772__$1);

(statearr_44865[(15)] = inst_44770__$1);

(statearr_44865[(16)] = inst_44773__$1);

return statearr_44865;
})();
var statearr_44866_44900 = state_44829__$1;
(statearr_44866_44900[(2)] = null);

(statearr_44866_44900[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44830 === (18))){
var inst_44799 = (state_44829[(2)]);
var state_44829__$1 = state_44829;
var statearr_44867_44901 = state_44829__$1;
(statearr_44867_44901[(2)] = inst_44799);

(statearr_44867_44901[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44830 === (8))){
var inst_44772 = (state_44829[(14)]);
var inst_44773 = (state_44829[(16)]);
var inst_44775 = (inst_44773 < inst_44772);
var inst_44776 = inst_44775;
var state_44829__$1 = state_44829;
if(cljs.core.truth_(inst_44776)){
var statearr_44868_44902 = state_44829__$1;
(statearr_44868_44902[(1)] = (10));

} else {
var statearr_44869_44903 = state_44829__$1;
(statearr_44869_44903[(1)] = (11));

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
});})(c__39480__auto___44875,mults,ensure_mult,p))
;
return ((function (switch__39459__auto__,c__39480__auto___44875,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__39460__auto__ = null;
var cljs$core$async$state_machine__39460__auto____0 = (function (){
var statearr_44870 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44870[(0)] = cljs$core$async$state_machine__39460__auto__);

(statearr_44870[(1)] = (1));

return statearr_44870;
});
var cljs$core$async$state_machine__39460__auto____1 = (function (state_44829){
while(true){
var ret_value__39461__auto__ = (function (){try{while(true){
var result__39462__auto__ = switch__39459__auto__.call(null,state_44829);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39462__auto__;
}
break;
}
}catch (e44871){if((e44871 instanceof Object)){
var ex__39463__auto__ = e44871;
var statearr_44872_44904 = state_44829;
(statearr_44872_44904[(5)] = ex__39463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44829);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44871;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44905 = state_44829;
state_44829 = G__44905;
continue;
} else {
return ret_value__39461__auto__;
}
break;
}
});
cljs$core$async$state_machine__39460__auto__ = function(state_44829){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39460__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39460__auto____1.call(this,state_44829);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__39460__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39460__auto____0;
cljs$core$async$state_machine__39460__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39460__auto____1;
return cljs$core$async$state_machine__39460__auto__;
})()
;})(switch__39459__auto__,c__39480__auto___44875,mults,ensure_mult,p))
})();
var state__39482__auto__ = (function (){var statearr_44873 = f__39481__auto__.call(null);
(statearr_44873[(6)] = c__39480__auto___44875);

return statearr_44873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39482__auto__);
});})(c__39480__auto___44875,mults,ensure_mult,p))
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
var G__44907 = arguments.length;
switch (G__44907) {
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
var G__44910 = arguments.length;
switch (G__44910) {
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
var G__44913 = arguments.length;
switch (G__44913) {
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
var c__39480__auto___44980 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39480__auto___44980,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__39481__auto__ = (function (){var switch__39459__auto__ = ((function (c__39480__auto___44980,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_44952){
var state_val_44953 = (state_44952[(1)]);
if((state_val_44953 === (7))){
var state_44952__$1 = state_44952;
var statearr_44954_44981 = state_44952__$1;
(statearr_44954_44981[(2)] = null);

(statearr_44954_44981[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44953 === (1))){
var state_44952__$1 = state_44952;
var statearr_44955_44982 = state_44952__$1;
(statearr_44955_44982[(2)] = null);

(statearr_44955_44982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44953 === (4))){
var inst_44916 = (state_44952[(7)]);
var inst_44918 = (inst_44916 < cnt);
var state_44952__$1 = state_44952;
if(cljs.core.truth_(inst_44918)){
var statearr_44956_44983 = state_44952__$1;
(statearr_44956_44983[(1)] = (6));

} else {
var statearr_44957_44984 = state_44952__$1;
(statearr_44957_44984[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44953 === (15))){
var inst_44948 = (state_44952[(2)]);
var state_44952__$1 = state_44952;
var statearr_44958_44985 = state_44952__$1;
(statearr_44958_44985[(2)] = inst_44948);

(statearr_44958_44985[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44953 === (13))){
var inst_44941 = cljs.core.async.close_BANG_.call(null,out);
var state_44952__$1 = state_44952;
var statearr_44959_44986 = state_44952__$1;
(statearr_44959_44986[(2)] = inst_44941);

(statearr_44959_44986[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44953 === (6))){
var state_44952__$1 = state_44952;
var statearr_44960_44987 = state_44952__$1;
(statearr_44960_44987[(2)] = null);

(statearr_44960_44987[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44953 === (3))){
var inst_44950 = (state_44952[(2)]);
var state_44952__$1 = state_44952;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44952__$1,inst_44950);
} else {
if((state_val_44953 === (12))){
var inst_44938 = (state_44952[(8)]);
var inst_44938__$1 = (state_44952[(2)]);
var inst_44939 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_44938__$1);
var state_44952__$1 = (function (){var statearr_44961 = state_44952;
(statearr_44961[(8)] = inst_44938__$1);

return statearr_44961;
})();
if(cljs.core.truth_(inst_44939)){
var statearr_44962_44988 = state_44952__$1;
(statearr_44962_44988[(1)] = (13));

} else {
var statearr_44963_44989 = state_44952__$1;
(statearr_44963_44989[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44953 === (2))){
var inst_44915 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_44916 = (0);
var state_44952__$1 = (function (){var statearr_44964 = state_44952;
(statearr_44964[(7)] = inst_44916);

(statearr_44964[(9)] = inst_44915);

return statearr_44964;
})();
var statearr_44965_44990 = state_44952__$1;
(statearr_44965_44990[(2)] = null);

(statearr_44965_44990[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44953 === (11))){
var inst_44916 = (state_44952[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_44952,(10),Object,null,(9));
var inst_44925 = chs__$1.call(null,inst_44916);
var inst_44926 = done.call(null,inst_44916);
var inst_44927 = cljs.core.async.take_BANG_.call(null,inst_44925,inst_44926);
var state_44952__$1 = state_44952;
var statearr_44966_44991 = state_44952__$1;
(statearr_44966_44991[(2)] = inst_44927);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44952__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44953 === (9))){
var inst_44916 = (state_44952[(7)]);
var inst_44929 = (state_44952[(2)]);
var inst_44930 = (inst_44916 + (1));
var inst_44916__$1 = inst_44930;
var state_44952__$1 = (function (){var statearr_44967 = state_44952;
(statearr_44967[(7)] = inst_44916__$1);

(statearr_44967[(10)] = inst_44929);

return statearr_44967;
})();
var statearr_44968_44992 = state_44952__$1;
(statearr_44968_44992[(2)] = null);

(statearr_44968_44992[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44953 === (5))){
var inst_44936 = (state_44952[(2)]);
var state_44952__$1 = (function (){var statearr_44969 = state_44952;
(statearr_44969[(11)] = inst_44936);

return statearr_44969;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44952__$1,(12),dchan);
} else {
if((state_val_44953 === (14))){
var inst_44938 = (state_44952[(8)]);
var inst_44943 = cljs.core.apply.call(null,f,inst_44938);
var state_44952__$1 = state_44952;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44952__$1,(16),out,inst_44943);
} else {
if((state_val_44953 === (16))){
var inst_44945 = (state_44952[(2)]);
var state_44952__$1 = (function (){var statearr_44970 = state_44952;
(statearr_44970[(12)] = inst_44945);

return statearr_44970;
})();
var statearr_44971_44993 = state_44952__$1;
(statearr_44971_44993[(2)] = null);

(statearr_44971_44993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44953 === (10))){
var inst_44920 = (state_44952[(2)]);
var inst_44921 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_44952__$1 = (function (){var statearr_44972 = state_44952;
(statearr_44972[(13)] = inst_44920);

return statearr_44972;
})();
var statearr_44973_44994 = state_44952__$1;
(statearr_44973_44994[(2)] = inst_44921);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44952__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44953 === (8))){
var inst_44934 = (state_44952[(2)]);
var state_44952__$1 = state_44952;
var statearr_44974_44995 = state_44952__$1;
(statearr_44974_44995[(2)] = inst_44934);

(statearr_44974_44995[(1)] = (5));


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
});})(c__39480__auto___44980,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__39459__auto__,c__39480__auto___44980,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__39460__auto__ = null;
var cljs$core$async$state_machine__39460__auto____0 = (function (){
var statearr_44975 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44975[(0)] = cljs$core$async$state_machine__39460__auto__);

(statearr_44975[(1)] = (1));

return statearr_44975;
});
var cljs$core$async$state_machine__39460__auto____1 = (function (state_44952){
while(true){
var ret_value__39461__auto__ = (function (){try{while(true){
var result__39462__auto__ = switch__39459__auto__.call(null,state_44952);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39462__auto__;
}
break;
}
}catch (e44976){if((e44976 instanceof Object)){
var ex__39463__auto__ = e44976;
var statearr_44977_44996 = state_44952;
(statearr_44977_44996[(5)] = ex__39463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44952);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44976;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44997 = state_44952;
state_44952 = G__44997;
continue;
} else {
return ret_value__39461__auto__;
}
break;
}
});
cljs$core$async$state_machine__39460__auto__ = function(state_44952){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39460__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39460__auto____1.call(this,state_44952);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__39460__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39460__auto____0;
cljs$core$async$state_machine__39460__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39460__auto____1;
return cljs$core$async$state_machine__39460__auto__;
})()
;})(switch__39459__auto__,c__39480__auto___44980,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__39482__auto__ = (function (){var statearr_44978 = f__39481__auto__.call(null);
(statearr_44978[(6)] = c__39480__auto___44980);

return statearr_44978;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39482__auto__);
});})(c__39480__auto___44980,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__45000 = arguments.length;
switch (G__45000) {
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
var c__39480__auto___45054 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39480__auto___45054,out){
return (function (){
var f__39481__auto__ = (function (){var switch__39459__auto__ = ((function (c__39480__auto___45054,out){
return (function (state_45032){
var state_val_45033 = (state_45032[(1)]);
if((state_val_45033 === (7))){
var inst_45011 = (state_45032[(7)]);
var inst_45012 = (state_45032[(8)]);
var inst_45011__$1 = (state_45032[(2)]);
var inst_45012__$1 = cljs.core.nth.call(null,inst_45011__$1,(0),null);
var inst_45013 = cljs.core.nth.call(null,inst_45011__$1,(1),null);
var inst_45014 = (inst_45012__$1 == null);
var state_45032__$1 = (function (){var statearr_45034 = state_45032;
(statearr_45034[(7)] = inst_45011__$1);

(statearr_45034[(8)] = inst_45012__$1);

(statearr_45034[(9)] = inst_45013);

return statearr_45034;
})();
if(cljs.core.truth_(inst_45014)){
var statearr_45035_45055 = state_45032__$1;
(statearr_45035_45055[(1)] = (8));

} else {
var statearr_45036_45056 = state_45032__$1;
(statearr_45036_45056[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45033 === (1))){
var inst_45001 = cljs.core.vec.call(null,chs);
var inst_45002 = inst_45001;
var state_45032__$1 = (function (){var statearr_45037 = state_45032;
(statearr_45037[(10)] = inst_45002);

return statearr_45037;
})();
var statearr_45038_45057 = state_45032__$1;
(statearr_45038_45057[(2)] = null);

(statearr_45038_45057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45033 === (4))){
var inst_45002 = (state_45032[(10)]);
var state_45032__$1 = state_45032;
return cljs.core.async.ioc_alts_BANG_.call(null,state_45032__$1,(7),inst_45002);
} else {
if((state_val_45033 === (6))){
var inst_45028 = (state_45032[(2)]);
var state_45032__$1 = state_45032;
var statearr_45039_45058 = state_45032__$1;
(statearr_45039_45058[(2)] = inst_45028);

(statearr_45039_45058[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45033 === (3))){
var inst_45030 = (state_45032[(2)]);
var state_45032__$1 = state_45032;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45032__$1,inst_45030);
} else {
if((state_val_45033 === (2))){
var inst_45002 = (state_45032[(10)]);
var inst_45004 = cljs.core.count.call(null,inst_45002);
var inst_45005 = (inst_45004 > (0));
var state_45032__$1 = state_45032;
if(cljs.core.truth_(inst_45005)){
var statearr_45041_45059 = state_45032__$1;
(statearr_45041_45059[(1)] = (4));

} else {
var statearr_45042_45060 = state_45032__$1;
(statearr_45042_45060[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45033 === (11))){
var inst_45002 = (state_45032[(10)]);
var inst_45021 = (state_45032[(2)]);
var tmp45040 = inst_45002;
var inst_45002__$1 = tmp45040;
var state_45032__$1 = (function (){var statearr_45043 = state_45032;
(statearr_45043[(11)] = inst_45021);

(statearr_45043[(10)] = inst_45002__$1);

return statearr_45043;
})();
var statearr_45044_45061 = state_45032__$1;
(statearr_45044_45061[(2)] = null);

(statearr_45044_45061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45033 === (9))){
var inst_45012 = (state_45032[(8)]);
var state_45032__$1 = state_45032;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45032__$1,(11),out,inst_45012);
} else {
if((state_val_45033 === (5))){
var inst_45026 = cljs.core.async.close_BANG_.call(null,out);
var state_45032__$1 = state_45032;
var statearr_45045_45062 = state_45032__$1;
(statearr_45045_45062[(2)] = inst_45026);

(statearr_45045_45062[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45033 === (10))){
var inst_45024 = (state_45032[(2)]);
var state_45032__$1 = state_45032;
var statearr_45046_45063 = state_45032__$1;
(statearr_45046_45063[(2)] = inst_45024);

(statearr_45046_45063[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45033 === (8))){
var inst_45011 = (state_45032[(7)]);
var inst_45012 = (state_45032[(8)]);
var inst_45013 = (state_45032[(9)]);
var inst_45002 = (state_45032[(10)]);
var inst_45016 = (function (){var cs = inst_45002;
var vec__45007 = inst_45011;
var v = inst_45012;
var c = inst_45013;
return ((function (cs,vec__45007,v,c,inst_45011,inst_45012,inst_45013,inst_45002,state_val_45033,c__39480__auto___45054,out){
return (function (p1__44998_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__44998_SHARP_);
});
;})(cs,vec__45007,v,c,inst_45011,inst_45012,inst_45013,inst_45002,state_val_45033,c__39480__auto___45054,out))
})();
var inst_45017 = cljs.core.filterv.call(null,inst_45016,inst_45002);
var inst_45002__$1 = inst_45017;
var state_45032__$1 = (function (){var statearr_45047 = state_45032;
(statearr_45047[(10)] = inst_45002__$1);

return statearr_45047;
})();
var statearr_45048_45064 = state_45032__$1;
(statearr_45048_45064[(2)] = null);

(statearr_45048_45064[(1)] = (2));


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
});})(c__39480__auto___45054,out))
;
return ((function (switch__39459__auto__,c__39480__auto___45054,out){
return (function() {
var cljs$core$async$state_machine__39460__auto__ = null;
var cljs$core$async$state_machine__39460__auto____0 = (function (){
var statearr_45049 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45049[(0)] = cljs$core$async$state_machine__39460__auto__);

(statearr_45049[(1)] = (1));

return statearr_45049;
});
var cljs$core$async$state_machine__39460__auto____1 = (function (state_45032){
while(true){
var ret_value__39461__auto__ = (function (){try{while(true){
var result__39462__auto__ = switch__39459__auto__.call(null,state_45032);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39462__auto__;
}
break;
}
}catch (e45050){if((e45050 instanceof Object)){
var ex__39463__auto__ = e45050;
var statearr_45051_45065 = state_45032;
(statearr_45051_45065[(5)] = ex__39463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45032);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45050;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45066 = state_45032;
state_45032 = G__45066;
continue;
} else {
return ret_value__39461__auto__;
}
break;
}
});
cljs$core$async$state_machine__39460__auto__ = function(state_45032){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39460__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39460__auto____1.call(this,state_45032);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__39460__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39460__auto____0;
cljs$core$async$state_machine__39460__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39460__auto____1;
return cljs$core$async$state_machine__39460__auto__;
})()
;})(switch__39459__auto__,c__39480__auto___45054,out))
})();
var state__39482__auto__ = (function (){var statearr_45052 = f__39481__auto__.call(null);
(statearr_45052[(6)] = c__39480__auto___45054);

return statearr_45052;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39482__auto__);
});})(c__39480__auto___45054,out))
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
var G__45068 = arguments.length;
switch (G__45068) {
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
var c__39480__auto___45113 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39480__auto___45113,out){
return (function (){
var f__39481__auto__ = (function (){var switch__39459__auto__ = ((function (c__39480__auto___45113,out){
return (function (state_45092){
var state_val_45093 = (state_45092[(1)]);
if((state_val_45093 === (7))){
var inst_45074 = (state_45092[(7)]);
var inst_45074__$1 = (state_45092[(2)]);
var inst_45075 = (inst_45074__$1 == null);
var inst_45076 = cljs.core.not.call(null,inst_45075);
var state_45092__$1 = (function (){var statearr_45094 = state_45092;
(statearr_45094[(7)] = inst_45074__$1);

return statearr_45094;
})();
if(inst_45076){
var statearr_45095_45114 = state_45092__$1;
(statearr_45095_45114[(1)] = (8));

} else {
var statearr_45096_45115 = state_45092__$1;
(statearr_45096_45115[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45093 === (1))){
var inst_45069 = (0);
var state_45092__$1 = (function (){var statearr_45097 = state_45092;
(statearr_45097[(8)] = inst_45069);

return statearr_45097;
})();
var statearr_45098_45116 = state_45092__$1;
(statearr_45098_45116[(2)] = null);

(statearr_45098_45116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45093 === (4))){
var state_45092__$1 = state_45092;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45092__$1,(7),ch);
} else {
if((state_val_45093 === (6))){
var inst_45087 = (state_45092[(2)]);
var state_45092__$1 = state_45092;
var statearr_45099_45117 = state_45092__$1;
(statearr_45099_45117[(2)] = inst_45087);

(statearr_45099_45117[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45093 === (3))){
var inst_45089 = (state_45092[(2)]);
var inst_45090 = cljs.core.async.close_BANG_.call(null,out);
var state_45092__$1 = (function (){var statearr_45100 = state_45092;
(statearr_45100[(9)] = inst_45089);

return statearr_45100;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45092__$1,inst_45090);
} else {
if((state_val_45093 === (2))){
var inst_45069 = (state_45092[(8)]);
var inst_45071 = (inst_45069 < n);
var state_45092__$1 = state_45092;
if(cljs.core.truth_(inst_45071)){
var statearr_45101_45118 = state_45092__$1;
(statearr_45101_45118[(1)] = (4));

} else {
var statearr_45102_45119 = state_45092__$1;
(statearr_45102_45119[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45093 === (11))){
var inst_45069 = (state_45092[(8)]);
var inst_45079 = (state_45092[(2)]);
var inst_45080 = (inst_45069 + (1));
var inst_45069__$1 = inst_45080;
var state_45092__$1 = (function (){var statearr_45103 = state_45092;
(statearr_45103[(10)] = inst_45079);

(statearr_45103[(8)] = inst_45069__$1);

return statearr_45103;
})();
var statearr_45104_45120 = state_45092__$1;
(statearr_45104_45120[(2)] = null);

(statearr_45104_45120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45093 === (9))){
var state_45092__$1 = state_45092;
var statearr_45105_45121 = state_45092__$1;
(statearr_45105_45121[(2)] = null);

(statearr_45105_45121[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45093 === (5))){
var state_45092__$1 = state_45092;
var statearr_45106_45122 = state_45092__$1;
(statearr_45106_45122[(2)] = null);

(statearr_45106_45122[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45093 === (10))){
var inst_45084 = (state_45092[(2)]);
var state_45092__$1 = state_45092;
var statearr_45107_45123 = state_45092__$1;
(statearr_45107_45123[(2)] = inst_45084);

(statearr_45107_45123[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45093 === (8))){
var inst_45074 = (state_45092[(7)]);
var state_45092__$1 = state_45092;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45092__$1,(11),out,inst_45074);
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
});})(c__39480__auto___45113,out))
;
return ((function (switch__39459__auto__,c__39480__auto___45113,out){
return (function() {
var cljs$core$async$state_machine__39460__auto__ = null;
var cljs$core$async$state_machine__39460__auto____0 = (function (){
var statearr_45108 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45108[(0)] = cljs$core$async$state_machine__39460__auto__);

(statearr_45108[(1)] = (1));

return statearr_45108;
});
var cljs$core$async$state_machine__39460__auto____1 = (function (state_45092){
while(true){
var ret_value__39461__auto__ = (function (){try{while(true){
var result__39462__auto__ = switch__39459__auto__.call(null,state_45092);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39462__auto__;
}
break;
}
}catch (e45109){if((e45109 instanceof Object)){
var ex__39463__auto__ = e45109;
var statearr_45110_45124 = state_45092;
(statearr_45110_45124[(5)] = ex__39463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45092);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45109;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45125 = state_45092;
state_45092 = G__45125;
continue;
} else {
return ret_value__39461__auto__;
}
break;
}
});
cljs$core$async$state_machine__39460__auto__ = function(state_45092){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39460__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39460__auto____1.call(this,state_45092);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__39460__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39460__auto____0;
cljs$core$async$state_machine__39460__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39460__auto____1;
return cljs$core$async$state_machine__39460__auto__;
})()
;})(switch__39459__auto__,c__39480__auto___45113,out))
})();
var state__39482__auto__ = (function (){var statearr_45111 = f__39481__auto__.call(null);
(statearr_45111[(6)] = c__39480__auto___45113);

return statearr_45111;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39482__auto__);
});})(c__39480__auto___45113,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async45127 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45127 = (function (f,ch,meta45128){
this.f = f;
this.ch = ch;
this.meta45128 = meta45128;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45127.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45129,meta45128__$1){
var self__ = this;
var _45129__$1 = this;
return (new cljs.core.async.t_cljs$core$async45127(self__.f,self__.ch,meta45128__$1));
});

cljs.core.async.t_cljs$core$async45127.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45129){
var self__ = this;
var _45129__$1 = this;
return self__.meta45128;
});

cljs.core.async.t_cljs$core$async45127.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45127.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async45127.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async45127.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45127.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async45130 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45130 = (function (f,ch,meta45128,_,fn1,meta45131){
this.f = f;
this.ch = ch;
this.meta45128 = meta45128;
this._ = _;
this.fn1 = fn1;
this.meta45131 = meta45131;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45130.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_45132,meta45131__$1){
var self__ = this;
var _45132__$1 = this;
return (new cljs.core.async.t_cljs$core$async45130(self__.f,self__.ch,self__.meta45128,self__._,self__.fn1,meta45131__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async45130.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_45132){
var self__ = this;
var _45132__$1 = this;
return self__.meta45131;
});})(___$1))
;

cljs.core.async.t_cljs$core$async45130.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45130.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async45130.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async45130.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__45126_SHARP_){
return f1.call(null,(((p1__45126_SHARP_ == null))?null:self__.f.call(null,p1__45126_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async45130.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45128","meta45128",-965683246,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async45127","cljs.core.async/t_cljs$core$async45127",-488954664,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta45131","meta45131",-2086828648,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async45130.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45130.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45130";

cljs.core.async.t_cljs$core$async45130.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__37374__auto__,writer__37375__auto__,opt__37376__auto__){
return cljs.core._write.call(null,writer__37375__auto__,"cljs.core.async/t_cljs$core$async45130");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async45130 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async45130(f__$1,ch__$1,meta45128__$1,___$2,fn1__$1,meta45131){
return (new cljs.core.async.t_cljs$core$async45130(f__$1,ch__$1,meta45128__$1,___$2,fn1__$1,meta45131));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async45130(self__.f,self__.ch,self__.meta45128,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__36751__auto__ = ret;
if(cljs.core.truth_(and__36751__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__36751__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async45127.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45127.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async45127.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45128","meta45128",-965683246,null)], null);
});

cljs.core.async.t_cljs$core$async45127.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45127.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45127";

cljs.core.async.t_cljs$core$async45127.cljs$lang$ctorPrWriter = (function (this__37374__auto__,writer__37375__auto__,opt__37376__auto__){
return cljs.core._write.call(null,writer__37375__auto__,"cljs.core.async/t_cljs$core$async45127");
});

cljs.core.async.__GT_t_cljs$core$async45127 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async45127(f__$1,ch__$1,meta45128){
return (new cljs.core.async.t_cljs$core$async45127(f__$1,ch__$1,meta45128));
});

}

return (new cljs.core.async.t_cljs$core$async45127(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async45133 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45133 = (function (f,ch,meta45134){
this.f = f;
this.ch = ch;
this.meta45134 = meta45134;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45133.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45135,meta45134__$1){
var self__ = this;
var _45135__$1 = this;
return (new cljs.core.async.t_cljs$core$async45133(self__.f,self__.ch,meta45134__$1));
});

cljs.core.async.t_cljs$core$async45133.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45135){
var self__ = this;
var _45135__$1 = this;
return self__.meta45134;
});

cljs.core.async.t_cljs$core$async45133.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45133.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async45133.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45133.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async45133.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45133.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async45133.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45134","meta45134",-1861873730,null)], null);
});

cljs.core.async.t_cljs$core$async45133.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45133.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45133";

cljs.core.async.t_cljs$core$async45133.cljs$lang$ctorPrWriter = (function (this__37374__auto__,writer__37375__auto__,opt__37376__auto__){
return cljs.core._write.call(null,writer__37375__auto__,"cljs.core.async/t_cljs$core$async45133");
});

cljs.core.async.__GT_t_cljs$core$async45133 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async45133(f__$1,ch__$1,meta45134){
return (new cljs.core.async.t_cljs$core$async45133(f__$1,ch__$1,meta45134));
});

}

return (new cljs.core.async.t_cljs$core$async45133(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async45136 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45136 = (function (p,ch,meta45137){
this.p = p;
this.ch = ch;
this.meta45137 = meta45137;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45136.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45138,meta45137__$1){
var self__ = this;
var _45138__$1 = this;
return (new cljs.core.async.t_cljs$core$async45136(self__.p,self__.ch,meta45137__$1));
});

cljs.core.async.t_cljs$core$async45136.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45138){
var self__ = this;
var _45138__$1 = this;
return self__.meta45137;
});

cljs.core.async.t_cljs$core$async45136.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45136.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async45136.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async45136.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45136.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async45136.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45136.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async45136.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45137","meta45137",1069905072,null)], null);
});

cljs.core.async.t_cljs$core$async45136.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45136.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45136";

cljs.core.async.t_cljs$core$async45136.cljs$lang$ctorPrWriter = (function (this__37374__auto__,writer__37375__auto__,opt__37376__auto__){
return cljs.core._write.call(null,writer__37375__auto__,"cljs.core.async/t_cljs$core$async45136");
});

cljs.core.async.__GT_t_cljs$core$async45136 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async45136(p__$1,ch__$1,meta45137){
return (new cljs.core.async.t_cljs$core$async45136(p__$1,ch__$1,meta45137));
});

}

return (new cljs.core.async.t_cljs$core$async45136(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__45140 = arguments.length;
switch (G__45140) {
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
var c__39480__auto___45180 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39480__auto___45180,out){
return (function (){
var f__39481__auto__ = (function (){var switch__39459__auto__ = ((function (c__39480__auto___45180,out){
return (function (state_45161){
var state_val_45162 = (state_45161[(1)]);
if((state_val_45162 === (7))){
var inst_45157 = (state_45161[(2)]);
var state_45161__$1 = state_45161;
var statearr_45163_45181 = state_45161__$1;
(statearr_45163_45181[(2)] = inst_45157);

(statearr_45163_45181[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45162 === (1))){
var state_45161__$1 = state_45161;
var statearr_45164_45182 = state_45161__$1;
(statearr_45164_45182[(2)] = null);

(statearr_45164_45182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45162 === (4))){
var inst_45143 = (state_45161[(7)]);
var inst_45143__$1 = (state_45161[(2)]);
var inst_45144 = (inst_45143__$1 == null);
var state_45161__$1 = (function (){var statearr_45165 = state_45161;
(statearr_45165[(7)] = inst_45143__$1);

return statearr_45165;
})();
if(cljs.core.truth_(inst_45144)){
var statearr_45166_45183 = state_45161__$1;
(statearr_45166_45183[(1)] = (5));

} else {
var statearr_45167_45184 = state_45161__$1;
(statearr_45167_45184[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45162 === (6))){
var inst_45143 = (state_45161[(7)]);
var inst_45148 = p.call(null,inst_45143);
var state_45161__$1 = state_45161;
if(cljs.core.truth_(inst_45148)){
var statearr_45168_45185 = state_45161__$1;
(statearr_45168_45185[(1)] = (8));

} else {
var statearr_45169_45186 = state_45161__$1;
(statearr_45169_45186[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45162 === (3))){
var inst_45159 = (state_45161[(2)]);
var state_45161__$1 = state_45161;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45161__$1,inst_45159);
} else {
if((state_val_45162 === (2))){
var state_45161__$1 = state_45161;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45161__$1,(4),ch);
} else {
if((state_val_45162 === (11))){
var inst_45151 = (state_45161[(2)]);
var state_45161__$1 = state_45161;
var statearr_45170_45187 = state_45161__$1;
(statearr_45170_45187[(2)] = inst_45151);

(statearr_45170_45187[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45162 === (9))){
var state_45161__$1 = state_45161;
var statearr_45171_45188 = state_45161__$1;
(statearr_45171_45188[(2)] = null);

(statearr_45171_45188[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45162 === (5))){
var inst_45146 = cljs.core.async.close_BANG_.call(null,out);
var state_45161__$1 = state_45161;
var statearr_45172_45189 = state_45161__$1;
(statearr_45172_45189[(2)] = inst_45146);

(statearr_45172_45189[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45162 === (10))){
var inst_45154 = (state_45161[(2)]);
var state_45161__$1 = (function (){var statearr_45173 = state_45161;
(statearr_45173[(8)] = inst_45154);

return statearr_45173;
})();
var statearr_45174_45190 = state_45161__$1;
(statearr_45174_45190[(2)] = null);

(statearr_45174_45190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45162 === (8))){
var inst_45143 = (state_45161[(7)]);
var state_45161__$1 = state_45161;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45161__$1,(11),out,inst_45143);
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
});})(c__39480__auto___45180,out))
;
return ((function (switch__39459__auto__,c__39480__auto___45180,out){
return (function() {
var cljs$core$async$state_machine__39460__auto__ = null;
var cljs$core$async$state_machine__39460__auto____0 = (function (){
var statearr_45175 = [null,null,null,null,null,null,null,null,null];
(statearr_45175[(0)] = cljs$core$async$state_machine__39460__auto__);

(statearr_45175[(1)] = (1));

return statearr_45175;
});
var cljs$core$async$state_machine__39460__auto____1 = (function (state_45161){
while(true){
var ret_value__39461__auto__ = (function (){try{while(true){
var result__39462__auto__ = switch__39459__auto__.call(null,state_45161);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39462__auto__;
}
break;
}
}catch (e45176){if((e45176 instanceof Object)){
var ex__39463__auto__ = e45176;
var statearr_45177_45191 = state_45161;
(statearr_45177_45191[(5)] = ex__39463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45161);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45176;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45192 = state_45161;
state_45161 = G__45192;
continue;
} else {
return ret_value__39461__auto__;
}
break;
}
});
cljs$core$async$state_machine__39460__auto__ = function(state_45161){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39460__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39460__auto____1.call(this,state_45161);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__39460__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39460__auto____0;
cljs$core$async$state_machine__39460__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39460__auto____1;
return cljs$core$async$state_machine__39460__auto__;
})()
;})(switch__39459__auto__,c__39480__auto___45180,out))
})();
var state__39482__auto__ = (function (){var statearr_45178 = f__39481__auto__.call(null);
(statearr_45178[(6)] = c__39480__auto___45180);

return statearr_45178;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39482__auto__);
});})(c__39480__auto___45180,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__45194 = arguments.length;
switch (G__45194) {
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
var c__39480__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39480__auto__){
return (function (){
var f__39481__auto__ = (function (){var switch__39459__auto__ = ((function (c__39480__auto__){
return (function (state_45257){
var state_val_45258 = (state_45257[(1)]);
if((state_val_45258 === (7))){
var inst_45253 = (state_45257[(2)]);
var state_45257__$1 = state_45257;
var statearr_45259_45297 = state_45257__$1;
(statearr_45259_45297[(2)] = inst_45253);

(statearr_45259_45297[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45258 === (20))){
var inst_45223 = (state_45257[(7)]);
var inst_45234 = (state_45257[(2)]);
var inst_45235 = cljs.core.next.call(null,inst_45223);
var inst_45209 = inst_45235;
var inst_45210 = null;
var inst_45211 = (0);
var inst_45212 = (0);
var state_45257__$1 = (function (){var statearr_45260 = state_45257;
(statearr_45260[(8)] = inst_45209);

(statearr_45260[(9)] = inst_45234);

(statearr_45260[(10)] = inst_45212);

(statearr_45260[(11)] = inst_45210);

(statearr_45260[(12)] = inst_45211);

return statearr_45260;
})();
var statearr_45261_45298 = state_45257__$1;
(statearr_45261_45298[(2)] = null);

(statearr_45261_45298[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45258 === (1))){
var state_45257__$1 = state_45257;
var statearr_45262_45299 = state_45257__$1;
(statearr_45262_45299[(2)] = null);

(statearr_45262_45299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45258 === (4))){
var inst_45198 = (state_45257[(13)]);
var inst_45198__$1 = (state_45257[(2)]);
var inst_45199 = (inst_45198__$1 == null);
var state_45257__$1 = (function (){var statearr_45263 = state_45257;
(statearr_45263[(13)] = inst_45198__$1);

return statearr_45263;
})();
if(cljs.core.truth_(inst_45199)){
var statearr_45264_45300 = state_45257__$1;
(statearr_45264_45300[(1)] = (5));

} else {
var statearr_45265_45301 = state_45257__$1;
(statearr_45265_45301[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45258 === (15))){
var state_45257__$1 = state_45257;
var statearr_45269_45302 = state_45257__$1;
(statearr_45269_45302[(2)] = null);

(statearr_45269_45302[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45258 === (21))){
var state_45257__$1 = state_45257;
var statearr_45270_45303 = state_45257__$1;
(statearr_45270_45303[(2)] = null);

(statearr_45270_45303[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45258 === (13))){
var inst_45209 = (state_45257[(8)]);
var inst_45212 = (state_45257[(10)]);
var inst_45210 = (state_45257[(11)]);
var inst_45211 = (state_45257[(12)]);
var inst_45219 = (state_45257[(2)]);
var inst_45220 = (inst_45212 + (1));
var tmp45266 = inst_45209;
var tmp45267 = inst_45210;
var tmp45268 = inst_45211;
var inst_45209__$1 = tmp45266;
var inst_45210__$1 = tmp45267;
var inst_45211__$1 = tmp45268;
var inst_45212__$1 = inst_45220;
var state_45257__$1 = (function (){var statearr_45271 = state_45257;
(statearr_45271[(8)] = inst_45209__$1);

(statearr_45271[(14)] = inst_45219);

(statearr_45271[(10)] = inst_45212__$1);

(statearr_45271[(11)] = inst_45210__$1);

(statearr_45271[(12)] = inst_45211__$1);

return statearr_45271;
})();
var statearr_45272_45304 = state_45257__$1;
(statearr_45272_45304[(2)] = null);

(statearr_45272_45304[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45258 === (22))){
var state_45257__$1 = state_45257;
var statearr_45273_45305 = state_45257__$1;
(statearr_45273_45305[(2)] = null);

(statearr_45273_45305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45258 === (6))){
var inst_45198 = (state_45257[(13)]);
var inst_45207 = f.call(null,inst_45198);
var inst_45208 = cljs.core.seq.call(null,inst_45207);
var inst_45209 = inst_45208;
var inst_45210 = null;
var inst_45211 = (0);
var inst_45212 = (0);
var state_45257__$1 = (function (){var statearr_45274 = state_45257;
(statearr_45274[(8)] = inst_45209);

(statearr_45274[(10)] = inst_45212);

(statearr_45274[(11)] = inst_45210);

(statearr_45274[(12)] = inst_45211);

return statearr_45274;
})();
var statearr_45275_45306 = state_45257__$1;
(statearr_45275_45306[(2)] = null);

(statearr_45275_45306[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45258 === (17))){
var inst_45223 = (state_45257[(7)]);
var inst_45227 = cljs.core.chunk_first.call(null,inst_45223);
var inst_45228 = cljs.core.chunk_rest.call(null,inst_45223);
var inst_45229 = cljs.core.count.call(null,inst_45227);
var inst_45209 = inst_45228;
var inst_45210 = inst_45227;
var inst_45211 = inst_45229;
var inst_45212 = (0);
var state_45257__$1 = (function (){var statearr_45276 = state_45257;
(statearr_45276[(8)] = inst_45209);

(statearr_45276[(10)] = inst_45212);

(statearr_45276[(11)] = inst_45210);

(statearr_45276[(12)] = inst_45211);

return statearr_45276;
})();
var statearr_45277_45307 = state_45257__$1;
(statearr_45277_45307[(2)] = null);

(statearr_45277_45307[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45258 === (3))){
var inst_45255 = (state_45257[(2)]);
var state_45257__$1 = state_45257;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45257__$1,inst_45255);
} else {
if((state_val_45258 === (12))){
var inst_45243 = (state_45257[(2)]);
var state_45257__$1 = state_45257;
var statearr_45278_45308 = state_45257__$1;
(statearr_45278_45308[(2)] = inst_45243);

(statearr_45278_45308[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45258 === (2))){
var state_45257__$1 = state_45257;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45257__$1,(4),in$);
} else {
if((state_val_45258 === (23))){
var inst_45251 = (state_45257[(2)]);
var state_45257__$1 = state_45257;
var statearr_45279_45309 = state_45257__$1;
(statearr_45279_45309[(2)] = inst_45251);

(statearr_45279_45309[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45258 === (19))){
var inst_45238 = (state_45257[(2)]);
var state_45257__$1 = state_45257;
var statearr_45280_45310 = state_45257__$1;
(statearr_45280_45310[(2)] = inst_45238);

(statearr_45280_45310[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45258 === (11))){
var inst_45209 = (state_45257[(8)]);
var inst_45223 = (state_45257[(7)]);
var inst_45223__$1 = cljs.core.seq.call(null,inst_45209);
var state_45257__$1 = (function (){var statearr_45281 = state_45257;
(statearr_45281[(7)] = inst_45223__$1);

return statearr_45281;
})();
if(inst_45223__$1){
var statearr_45282_45311 = state_45257__$1;
(statearr_45282_45311[(1)] = (14));

} else {
var statearr_45283_45312 = state_45257__$1;
(statearr_45283_45312[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45258 === (9))){
var inst_45245 = (state_45257[(2)]);
var inst_45246 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_45257__$1 = (function (){var statearr_45284 = state_45257;
(statearr_45284[(15)] = inst_45245);

return statearr_45284;
})();
if(cljs.core.truth_(inst_45246)){
var statearr_45285_45313 = state_45257__$1;
(statearr_45285_45313[(1)] = (21));

} else {
var statearr_45286_45314 = state_45257__$1;
(statearr_45286_45314[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45258 === (5))){
var inst_45201 = cljs.core.async.close_BANG_.call(null,out);
var state_45257__$1 = state_45257;
var statearr_45287_45315 = state_45257__$1;
(statearr_45287_45315[(2)] = inst_45201);

(statearr_45287_45315[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45258 === (14))){
var inst_45223 = (state_45257[(7)]);
var inst_45225 = cljs.core.chunked_seq_QMARK_.call(null,inst_45223);
var state_45257__$1 = state_45257;
if(inst_45225){
var statearr_45288_45316 = state_45257__$1;
(statearr_45288_45316[(1)] = (17));

} else {
var statearr_45289_45317 = state_45257__$1;
(statearr_45289_45317[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45258 === (16))){
var inst_45241 = (state_45257[(2)]);
var state_45257__$1 = state_45257;
var statearr_45290_45318 = state_45257__$1;
(statearr_45290_45318[(2)] = inst_45241);

(statearr_45290_45318[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45258 === (10))){
var inst_45212 = (state_45257[(10)]);
var inst_45210 = (state_45257[(11)]);
var inst_45217 = cljs.core._nth.call(null,inst_45210,inst_45212);
var state_45257__$1 = state_45257;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45257__$1,(13),out,inst_45217);
} else {
if((state_val_45258 === (18))){
var inst_45223 = (state_45257[(7)]);
var inst_45232 = cljs.core.first.call(null,inst_45223);
var state_45257__$1 = state_45257;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45257__$1,(20),out,inst_45232);
} else {
if((state_val_45258 === (8))){
var inst_45212 = (state_45257[(10)]);
var inst_45211 = (state_45257[(12)]);
var inst_45214 = (inst_45212 < inst_45211);
var inst_45215 = inst_45214;
var state_45257__$1 = state_45257;
if(cljs.core.truth_(inst_45215)){
var statearr_45291_45319 = state_45257__$1;
(statearr_45291_45319[(1)] = (10));

} else {
var statearr_45292_45320 = state_45257__$1;
(statearr_45292_45320[(1)] = (11));

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
});})(c__39480__auto__))
;
return ((function (switch__39459__auto__,c__39480__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__39460__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__39460__auto____0 = (function (){
var statearr_45293 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45293[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__39460__auto__);

(statearr_45293[(1)] = (1));

return statearr_45293;
});
var cljs$core$async$mapcat_STAR__$_state_machine__39460__auto____1 = (function (state_45257){
while(true){
var ret_value__39461__auto__ = (function (){try{while(true){
var result__39462__auto__ = switch__39459__auto__.call(null,state_45257);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39462__auto__;
}
break;
}
}catch (e45294){if((e45294 instanceof Object)){
var ex__39463__auto__ = e45294;
var statearr_45295_45321 = state_45257;
(statearr_45295_45321[(5)] = ex__39463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45257);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45294;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45322 = state_45257;
state_45257 = G__45322;
continue;
} else {
return ret_value__39461__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__39460__auto__ = function(state_45257){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__39460__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__39460__auto____1.call(this,state_45257);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__39460__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__39460__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__39460__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__39460__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__39460__auto__;
})()
;})(switch__39459__auto__,c__39480__auto__))
})();
var state__39482__auto__ = (function (){var statearr_45296 = f__39481__auto__.call(null);
(statearr_45296[(6)] = c__39480__auto__);

return statearr_45296;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39482__auto__);
});})(c__39480__auto__))
);

return c__39480__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__45324 = arguments.length;
switch (G__45324) {
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
var G__45327 = arguments.length;
switch (G__45327) {
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
var G__45330 = arguments.length;
switch (G__45330) {
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
var c__39480__auto___45377 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39480__auto___45377,out){
return (function (){
var f__39481__auto__ = (function (){var switch__39459__auto__ = ((function (c__39480__auto___45377,out){
return (function (state_45354){
var state_val_45355 = (state_45354[(1)]);
if((state_val_45355 === (7))){
var inst_45349 = (state_45354[(2)]);
var state_45354__$1 = state_45354;
var statearr_45356_45378 = state_45354__$1;
(statearr_45356_45378[(2)] = inst_45349);

(statearr_45356_45378[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45355 === (1))){
var inst_45331 = null;
var state_45354__$1 = (function (){var statearr_45357 = state_45354;
(statearr_45357[(7)] = inst_45331);

return statearr_45357;
})();
var statearr_45358_45379 = state_45354__$1;
(statearr_45358_45379[(2)] = null);

(statearr_45358_45379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45355 === (4))){
var inst_45334 = (state_45354[(8)]);
var inst_45334__$1 = (state_45354[(2)]);
var inst_45335 = (inst_45334__$1 == null);
var inst_45336 = cljs.core.not.call(null,inst_45335);
var state_45354__$1 = (function (){var statearr_45359 = state_45354;
(statearr_45359[(8)] = inst_45334__$1);

return statearr_45359;
})();
if(inst_45336){
var statearr_45360_45380 = state_45354__$1;
(statearr_45360_45380[(1)] = (5));

} else {
var statearr_45361_45381 = state_45354__$1;
(statearr_45361_45381[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45355 === (6))){
var state_45354__$1 = state_45354;
var statearr_45362_45382 = state_45354__$1;
(statearr_45362_45382[(2)] = null);

(statearr_45362_45382[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45355 === (3))){
var inst_45351 = (state_45354[(2)]);
var inst_45352 = cljs.core.async.close_BANG_.call(null,out);
var state_45354__$1 = (function (){var statearr_45363 = state_45354;
(statearr_45363[(9)] = inst_45351);

return statearr_45363;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45354__$1,inst_45352);
} else {
if((state_val_45355 === (2))){
var state_45354__$1 = state_45354;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45354__$1,(4),ch);
} else {
if((state_val_45355 === (11))){
var inst_45334 = (state_45354[(8)]);
var inst_45343 = (state_45354[(2)]);
var inst_45331 = inst_45334;
var state_45354__$1 = (function (){var statearr_45364 = state_45354;
(statearr_45364[(7)] = inst_45331);

(statearr_45364[(10)] = inst_45343);

return statearr_45364;
})();
var statearr_45365_45383 = state_45354__$1;
(statearr_45365_45383[(2)] = null);

(statearr_45365_45383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45355 === (9))){
var inst_45334 = (state_45354[(8)]);
var state_45354__$1 = state_45354;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45354__$1,(11),out,inst_45334);
} else {
if((state_val_45355 === (5))){
var inst_45334 = (state_45354[(8)]);
var inst_45331 = (state_45354[(7)]);
var inst_45338 = cljs.core._EQ_.call(null,inst_45334,inst_45331);
var state_45354__$1 = state_45354;
if(inst_45338){
var statearr_45367_45384 = state_45354__$1;
(statearr_45367_45384[(1)] = (8));

} else {
var statearr_45368_45385 = state_45354__$1;
(statearr_45368_45385[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45355 === (10))){
var inst_45346 = (state_45354[(2)]);
var state_45354__$1 = state_45354;
var statearr_45369_45386 = state_45354__$1;
(statearr_45369_45386[(2)] = inst_45346);

(statearr_45369_45386[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45355 === (8))){
var inst_45331 = (state_45354[(7)]);
var tmp45366 = inst_45331;
var inst_45331__$1 = tmp45366;
var state_45354__$1 = (function (){var statearr_45370 = state_45354;
(statearr_45370[(7)] = inst_45331__$1);

return statearr_45370;
})();
var statearr_45371_45387 = state_45354__$1;
(statearr_45371_45387[(2)] = null);

(statearr_45371_45387[(1)] = (2));


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
});})(c__39480__auto___45377,out))
;
return ((function (switch__39459__auto__,c__39480__auto___45377,out){
return (function() {
var cljs$core$async$state_machine__39460__auto__ = null;
var cljs$core$async$state_machine__39460__auto____0 = (function (){
var statearr_45372 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45372[(0)] = cljs$core$async$state_machine__39460__auto__);

(statearr_45372[(1)] = (1));

return statearr_45372;
});
var cljs$core$async$state_machine__39460__auto____1 = (function (state_45354){
while(true){
var ret_value__39461__auto__ = (function (){try{while(true){
var result__39462__auto__ = switch__39459__auto__.call(null,state_45354);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39462__auto__;
}
break;
}
}catch (e45373){if((e45373 instanceof Object)){
var ex__39463__auto__ = e45373;
var statearr_45374_45388 = state_45354;
(statearr_45374_45388[(5)] = ex__39463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45354);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45373;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45389 = state_45354;
state_45354 = G__45389;
continue;
} else {
return ret_value__39461__auto__;
}
break;
}
});
cljs$core$async$state_machine__39460__auto__ = function(state_45354){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39460__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39460__auto____1.call(this,state_45354);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__39460__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39460__auto____0;
cljs$core$async$state_machine__39460__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39460__auto____1;
return cljs$core$async$state_machine__39460__auto__;
})()
;})(switch__39459__auto__,c__39480__auto___45377,out))
})();
var state__39482__auto__ = (function (){var statearr_45375 = f__39481__auto__.call(null);
(statearr_45375[(6)] = c__39480__auto___45377);

return statearr_45375;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39482__auto__);
});})(c__39480__auto___45377,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__45391 = arguments.length;
switch (G__45391) {
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
var c__39480__auto___45457 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39480__auto___45457,out){
return (function (){
var f__39481__auto__ = (function (){var switch__39459__auto__ = ((function (c__39480__auto___45457,out){
return (function (state_45429){
var state_val_45430 = (state_45429[(1)]);
if((state_val_45430 === (7))){
var inst_45425 = (state_45429[(2)]);
var state_45429__$1 = state_45429;
var statearr_45431_45458 = state_45429__$1;
(statearr_45431_45458[(2)] = inst_45425);

(statearr_45431_45458[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45430 === (1))){
var inst_45392 = (new Array(n));
var inst_45393 = inst_45392;
var inst_45394 = (0);
var state_45429__$1 = (function (){var statearr_45432 = state_45429;
(statearr_45432[(7)] = inst_45393);

(statearr_45432[(8)] = inst_45394);

return statearr_45432;
})();
var statearr_45433_45459 = state_45429__$1;
(statearr_45433_45459[(2)] = null);

(statearr_45433_45459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45430 === (4))){
var inst_45397 = (state_45429[(9)]);
var inst_45397__$1 = (state_45429[(2)]);
var inst_45398 = (inst_45397__$1 == null);
var inst_45399 = cljs.core.not.call(null,inst_45398);
var state_45429__$1 = (function (){var statearr_45434 = state_45429;
(statearr_45434[(9)] = inst_45397__$1);

return statearr_45434;
})();
if(inst_45399){
var statearr_45435_45460 = state_45429__$1;
(statearr_45435_45460[(1)] = (5));

} else {
var statearr_45436_45461 = state_45429__$1;
(statearr_45436_45461[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45430 === (15))){
var inst_45419 = (state_45429[(2)]);
var state_45429__$1 = state_45429;
var statearr_45437_45462 = state_45429__$1;
(statearr_45437_45462[(2)] = inst_45419);

(statearr_45437_45462[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45430 === (13))){
var state_45429__$1 = state_45429;
var statearr_45438_45463 = state_45429__$1;
(statearr_45438_45463[(2)] = null);

(statearr_45438_45463[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45430 === (6))){
var inst_45394 = (state_45429[(8)]);
var inst_45415 = (inst_45394 > (0));
var state_45429__$1 = state_45429;
if(cljs.core.truth_(inst_45415)){
var statearr_45439_45464 = state_45429__$1;
(statearr_45439_45464[(1)] = (12));

} else {
var statearr_45440_45465 = state_45429__$1;
(statearr_45440_45465[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45430 === (3))){
var inst_45427 = (state_45429[(2)]);
var state_45429__$1 = state_45429;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45429__$1,inst_45427);
} else {
if((state_val_45430 === (12))){
var inst_45393 = (state_45429[(7)]);
var inst_45417 = cljs.core.vec.call(null,inst_45393);
var state_45429__$1 = state_45429;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45429__$1,(15),out,inst_45417);
} else {
if((state_val_45430 === (2))){
var state_45429__$1 = state_45429;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45429__$1,(4),ch);
} else {
if((state_val_45430 === (11))){
var inst_45409 = (state_45429[(2)]);
var inst_45410 = (new Array(n));
var inst_45393 = inst_45410;
var inst_45394 = (0);
var state_45429__$1 = (function (){var statearr_45441 = state_45429;
(statearr_45441[(10)] = inst_45409);

(statearr_45441[(7)] = inst_45393);

(statearr_45441[(8)] = inst_45394);

return statearr_45441;
})();
var statearr_45442_45466 = state_45429__$1;
(statearr_45442_45466[(2)] = null);

(statearr_45442_45466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45430 === (9))){
var inst_45393 = (state_45429[(7)]);
var inst_45407 = cljs.core.vec.call(null,inst_45393);
var state_45429__$1 = state_45429;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45429__$1,(11),out,inst_45407);
} else {
if((state_val_45430 === (5))){
var inst_45393 = (state_45429[(7)]);
var inst_45397 = (state_45429[(9)]);
var inst_45402 = (state_45429[(11)]);
var inst_45394 = (state_45429[(8)]);
var inst_45401 = (inst_45393[inst_45394] = inst_45397);
var inst_45402__$1 = (inst_45394 + (1));
var inst_45403 = (inst_45402__$1 < n);
var state_45429__$1 = (function (){var statearr_45443 = state_45429;
(statearr_45443[(12)] = inst_45401);

(statearr_45443[(11)] = inst_45402__$1);

return statearr_45443;
})();
if(cljs.core.truth_(inst_45403)){
var statearr_45444_45467 = state_45429__$1;
(statearr_45444_45467[(1)] = (8));

} else {
var statearr_45445_45468 = state_45429__$1;
(statearr_45445_45468[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45430 === (14))){
var inst_45422 = (state_45429[(2)]);
var inst_45423 = cljs.core.async.close_BANG_.call(null,out);
var state_45429__$1 = (function (){var statearr_45447 = state_45429;
(statearr_45447[(13)] = inst_45422);

return statearr_45447;
})();
var statearr_45448_45469 = state_45429__$1;
(statearr_45448_45469[(2)] = inst_45423);

(statearr_45448_45469[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45430 === (10))){
var inst_45413 = (state_45429[(2)]);
var state_45429__$1 = state_45429;
var statearr_45449_45470 = state_45429__$1;
(statearr_45449_45470[(2)] = inst_45413);

(statearr_45449_45470[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45430 === (8))){
var inst_45393 = (state_45429[(7)]);
var inst_45402 = (state_45429[(11)]);
var tmp45446 = inst_45393;
var inst_45393__$1 = tmp45446;
var inst_45394 = inst_45402;
var state_45429__$1 = (function (){var statearr_45450 = state_45429;
(statearr_45450[(7)] = inst_45393__$1);

(statearr_45450[(8)] = inst_45394);

return statearr_45450;
})();
var statearr_45451_45471 = state_45429__$1;
(statearr_45451_45471[(2)] = null);

(statearr_45451_45471[(1)] = (2));


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
});})(c__39480__auto___45457,out))
;
return ((function (switch__39459__auto__,c__39480__auto___45457,out){
return (function() {
var cljs$core$async$state_machine__39460__auto__ = null;
var cljs$core$async$state_machine__39460__auto____0 = (function (){
var statearr_45452 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45452[(0)] = cljs$core$async$state_machine__39460__auto__);

(statearr_45452[(1)] = (1));

return statearr_45452;
});
var cljs$core$async$state_machine__39460__auto____1 = (function (state_45429){
while(true){
var ret_value__39461__auto__ = (function (){try{while(true){
var result__39462__auto__ = switch__39459__auto__.call(null,state_45429);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39462__auto__;
}
break;
}
}catch (e45453){if((e45453 instanceof Object)){
var ex__39463__auto__ = e45453;
var statearr_45454_45472 = state_45429;
(statearr_45454_45472[(5)] = ex__39463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45429);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45453;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45473 = state_45429;
state_45429 = G__45473;
continue;
} else {
return ret_value__39461__auto__;
}
break;
}
});
cljs$core$async$state_machine__39460__auto__ = function(state_45429){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39460__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39460__auto____1.call(this,state_45429);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__39460__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39460__auto____0;
cljs$core$async$state_machine__39460__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39460__auto____1;
return cljs$core$async$state_machine__39460__auto__;
})()
;})(switch__39459__auto__,c__39480__auto___45457,out))
})();
var state__39482__auto__ = (function (){var statearr_45455 = f__39481__auto__.call(null);
(statearr_45455[(6)] = c__39480__auto___45457);

return statearr_45455;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39482__auto__);
});})(c__39480__auto___45457,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__45475 = arguments.length;
switch (G__45475) {
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
var c__39480__auto___45545 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39480__auto___45545,out){
return (function (){
var f__39481__auto__ = (function (){var switch__39459__auto__ = ((function (c__39480__auto___45545,out){
return (function (state_45517){
var state_val_45518 = (state_45517[(1)]);
if((state_val_45518 === (7))){
var inst_45513 = (state_45517[(2)]);
var state_45517__$1 = state_45517;
var statearr_45519_45546 = state_45517__$1;
(statearr_45519_45546[(2)] = inst_45513);

(statearr_45519_45546[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45518 === (1))){
var inst_45476 = [];
var inst_45477 = inst_45476;
var inst_45478 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_45517__$1 = (function (){var statearr_45520 = state_45517;
(statearr_45520[(7)] = inst_45478);

(statearr_45520[(8)] = inst_45477);

return statearr_45520;
})();
var statearr_45521_45547 = state_45517__$1;
(statearr_45521_45547[(2)] = null);

(statearr_45521_45547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45518 === (4))){
var inst_45481 = (state_45517[(9)]);
var inst_45481__$1 = (state_45517[(2)]);
var inst_45482 = (inst_45481__$1 == null);
var inst_45483 = cljs.core.not.call(null,inst_45482);
var state_45517__$1 = (function (){var statearr_45522 = state_45517;
(statearr_45522[(9)] = inst_45481__$1);

return statearr_45522;
})();
if(inst_45483){
var statearr_45523_45548 = state_45517__$1;
(statearr_45523_45548[(1)] = (5));

} else {
var statearr_45524_45549 = state_45517__$1;
(statearr_45524_45549[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45518 === (15))){
var inst_45507 = (state_45517[(2)]);
var state_45517__$1 = state_45517;
var statearr_45525_45550 = state_45517__$1;
(statearr_45525_45550[(2)] = inst_45507);

(statearr_45525_45550[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45518 === (13))){
var state_45517__$1 = state_45517;
var statearr_45526_45551 = state_45517__$1;
(statearr_45526_45551[(2)] = null);

(statearr_45526_45551[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45518 === (6))){
var inst_45477 = (state_45517[(8)]);
var inst_45502 = inst_45477.length;
var inst_45503 = (inst_45502 > (0));
var state_45517__$1 = state_45517;
if(cljs.core.truth_(inst_45503)){
var statearr_45527_45552 = state_45517__$1;
(statearr_45527_45552[(1)] = (12));

} else {
var statearr_45528_45553 = state_45517__$1;
(statearr_45528_45553[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45518 === (3))){
var inst_45515 = (state_45517[(2)]);
var state_45517__$1 = state_45517;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45517__$1,inst_45515);
} else {
if((state_val_45518 === (12))){
var inst_45477 = (state_45517[(8)]);
var inst_45505 = cljs.core.vec.call(null,inst_45477);
var state_45517__$1 = state_45517;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45517__$1,(15),out,inst_45505);
} else {
if((state_val_45518 === (2))){
var state_45517__$1 = state_45517;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45517__$1,(4),ch);
} else {
if((state_val_45518 === (11))){
var inst_45485 = (state_45517[(10)]);
var inst_45481 = (state_45517[(9)]);
var inst_45495 = (state_45517[(2)]);
var inst_45496 = [];
var inst_45497 = inst_45496.push(inst_45481);
var inst_45477 = inst_45496;
var inst_45478 = inst_45485;
var state_45517__$1 = (function (){var statearr_45529 = state_45517;
(statearr_45529[(11)] = inst_45495);

(statearr_45529[(7)] = inst_45478);

(statearr_45529[(12)] = inst_45497);

(statearr_45529[(8)] = inst_45477);

return statearr_45529;
})();
var statearr_45530_45554 = state_45517__$1;
(statearr_45530_45554[(2)] = null);

(statearr_45530_45554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45518 === (9))){
var inst_45477 = (state_45517[(8)]);
var inst_45493 = cljs.core.vec.call(null,inst_45477);
var state_45517__$1 = state_45517;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45517__$1,(11),out,inst_45493);
} else {
if((state_val_45518 === (5))){
var inst_45478 = (state_45517[(7)]);
var inst_45485 = (state_45517[(10)]);
var inst_45481 = (state_45517[(9)]);
var inst_45485__$1 = f.call(null,inst_45481);
var inst_45486 = cljs.core._EQ_.call(null,inst_45485__$1,inst_45478);
var inst_45487 = cljs.core.keyword_identical_QMARK_.call(null,inst_45478,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_45488 = (inst_45486) || (inst_45487);
var state_45517__$1 = (function (){var statearr_45531 = state_45517;
(statearr_45531[(10)] = inst_45485__$1);

return statearr_45531;
})();
if(cljs.core.truth_(inst_45488)){
var statearr_45532_45555 = state_45517__$1;
(statearr_45532_45555[(1)] = (8));

} else {
var statearr_45533_45556 = state_45517__$1;
(statearr_45533_45556[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45518 === (14))){
var inst_45510 = (state_45517[(2)]);
var inst_45511 = cljs.core.async.close_BANG_.call(null,out);
var state_45517__$1 = (function (){var statearr_45535 = state_45517;
(statearr_45535[(13)] = inst_45510);

return statearr_45535;
})();
var statearr_45536_45557 = state_45517__$1;
(statearr_45536_45557[(2)] = inst_45511);

(statearr_45536_45557[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45518 === (10))){
var inst_45500 = (state_45517[(2)]);
var state_45517__$1 = state_45517;
var statearr_45537_45558 = state_45517__$1;
(statearr_45537_45558[(2)] = inst_45500);

(statearr_45537_45558[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45518 === (8))){
var inst_45485 = (state_45517[(10)]);
var inst_45477 = (state_45517[(8)]);
var inst_45481 = (state_45517[(9)]);
var inst_45490 = inst_45477.push(inst_45481);
var tmp45534 = inst_45477;
var inst_45477__$1 = tmp45534;
var inst_45478 = inst_45485;
var state_45517__$1 = (function (){var statearr_45538 = state_45517;
(statearr_45538[(14)] = inst_45490);

(statearr_45538[(7)] = inst_45478);

(statearr_45538[(8)] = inst_45477__$1);

return statearr_45538;
})();
var statearr_45539_45559 = state_45517__$1;
(statearr_45539_45559[(2)] = null);

(statearr_45539_45559[(1)] = (2));


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
});})(c__39480__auto___45545,out))
;
return ((function (switch__39459__auto__,c__39480__auto___45545,out){
return (function() {
var cljs$core$async$state_machine__39460__auto__ = null;
var cljs$core$async$state_machine__39460__auto____0 = (function (){
var statearr_45540 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45540[(0)] = cljs$core$async$state_machine__39460__auto__);

(statearr_45540[(1)] = (1));

return statearr_45540;
});
var cljs$core$async$state_machine__39460__auto____1 = (function (state_45517){
while(true){
var ret_value__39461__auto__ = (function (){try{while(true){
var result__39462__auto__ = switch__39459__auto__.call(null,state_45517);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39462__auto__;
}
break;
}
}catch (e45541){if((e45541 instanceof Object)){
var ex__39463__auto__ = e45541;
var statearr_45542_45560 = state_45517;
(statearr_45542_45560[(5)] = ex__39463__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45517);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45541;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45561 = state_45517;
state_45517 = G__45561;
continue;
} else {
return ret_value__39461__auto__;
}
break;
}
});
cljs$core$async$state_machine__39460__auto__ = function(state_45517){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39460__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39460__auto____1.call(this,state_45517);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__39460__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39460__auto____0;
cljs$core$async$state_machine__39460__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39460__auto____1;
return cljs$core$async$state_machine__39460__auto__;
})()
;})(switch__39459__auto__,c__39480__auto___45545,out))
})();
var state__39482__auto__ = (function (){var statearr_45543 = f__39481__auto__.call(null);
(statearr_45543[(6)] = c__39480__auto___45545);

return statearr_45543;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39482__auto__);
});})(c__39480__auto___45545,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1502260263563