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
var G__44433 = arguments.length;
switch (G__44433) {
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
if(typeof cljs.core.async.t_cljs$core$async44434 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44434 = (function (f,blockable,meta44435){
this.f = f;
this.blockable = blockable;
this.meta44435 = meta44435;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async44434.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44436,meta44435__$1){
var self__ = this;
var _44436__$1 = this;
return (new cljs.core.async.t_cljs$core$async44434(self__.f,self__.blockable,meta44435__$1));
});

cljs.core.async.t_cljs$core$async44434.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44436){
var self__ = this;
var _44436__$1 = this;
return self__.meta44435;
});

cljs.core.async.t_cljs$core$async44434.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44434.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async44434.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async44434.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async44434.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta44435","meta44435",1096314505,null)], null);
});

cljs.core.async.t_cljs$core$async44434.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44434.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44434";

cljs.core.async.t_cljs$core$async44434.cljs$lang$ctorPrWriter = (function (this__37368__auto__,writer__37369__auto__,opt__37370__auto__){
return cljs.core._write.call(null,writer__37369__auto__,"cljs.core.async/t_cljs$core$async44434");
});

cljs.core.async.__GT_t_cljs$core$async44434 = (function cljs$core$async$__GT_t_cljs$core$async44434(f__$1,blockable__$1,meta44435){
return (new cljs.core.async.t_cljs$core$async44434(f__$1,blockable__$1,meta44435));
});

}

return (new cljs.core.async.t_cljs$core$async44434(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__44440 = arguments.length;
switch (G__44440) {
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
var G__44443 = arguments.length;
switch (G__44443) {
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
var G__44446 = arguments.length;
switch (G__44446) {
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
var val_44448 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_44448);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_44448,ret){
return (function (){
return fn1.call(null,val_44448);
});})(val_44448,ret))
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
var G__44450 = arguments.length;
switch (G__44450) {
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
var n__37681__auto___44452 = n;
var x_44453 = (0);
while(true){
if((x_44453 < n__37681__auto___44452)){
(a[x_44453] = (0));

var G__44454 = (x_44453 + (1));
x_44453 = G__44454;
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

var G__44455 = (i + (1));
i = G__44455;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async44456 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44456 = (function (flag,meta44457){
this.flag = flag;
this.meta44457 = meta44457;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async44456.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_44458,meta44457__$1){
var self__ = this;
var _44458__$1 = this;
return (new cljs.core.async.t_cljs$core$async44456(self__.flag,meta44457__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async44456.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_44458){
var self__ = this;
var _44458__$1 = this;
return self__.meta44457;
});})(flag))
;

cljs.core.async.t_cljs$core$async44456.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44456.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async44456.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async44456.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async44456.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta44457","meta44457",-1147699616,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async44456.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44456.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44456";

cljs.core.async.t_cljs$core$async44456.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__37368__auto__,writer__37369__auto__,opt__37370__auto__){
return cljs.core._write.call(null,writer__37369__auto__,"cljs.core.async/t_cljs$core$async44456");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async44456 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async44456(flag__$1,meta44457){
return (new cljs.core.async.t_cljs$core$async44456(flag__$1,meta44457));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async44456(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async44459 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44459 = (function (flag,cb,meta44460){
this.flag = flag;
this.cb = cb;
this.meta44460 = meta44460;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async44459.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44461,meta44460__$1){
var self__ = this;
var _44461__$1 = this;
return (new cljs.core.async.t_cljs$core$async44459(self__.flag,self__.cb,meta44460__$1));
});

cljs.core.async.t_cljs$core$async44459.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44461){
var self__ = this;
var _44461__$1 = this;
return self__.meta44460;
});

cljs.core.async.t_cljs$core$async44459.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44459.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async44459.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async44459.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async44459.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta44460","meta44460",-1392685437,null)], null);
});

cljs.core.async.t_cljs$core$async44459.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44459.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44459";

cljs.core.async.t_cljs$core$async44459.cljs$lang$ctorPrWriter = (function (this__37368__auto__,writer__37369__auto__,opt__37370__auto__){
return cljs.core._write.call(null,writer__37369__auto__,"cljs.core.async/t_cljs$core$async44459");
});

cljs.core.async.__GT_t_cljs$core$async44459 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async44459(flag__$1,cb__$1,meta44460){
return (new cljs.core.async.t_cljs$core$async44459(flag__$1,cb__$1,meta44460));
});

}

return (new cljs.core.async.t_cljs$core$async44459(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__44462_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44462_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__44463_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44463_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__36757__auto__ = wport;
if(cljs.core.truth_(or__36757__auto__)){
return or__36757__auto__;
} else {
return port;
}
})()], null));
} else {
var G__44464 = (i + (1));
i = G__44464;
continue;
}
} else {
return null;
}
break;
}
})();
var or__36757__auto__ = ret;
if(cljs.core.truth_(or__36757__auto__)){
return or__36757__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__36745__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__36745__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__36745__auto__;
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
var args__37889__auto__ = [];
var len__37882__auto___44470 = arguments.length;
var i__37883__auto___44471 = (0);
while(true){
if((i__37883__auto___44471 < len__37882__auto___44470)){
args__37889__auto__.push((arguments[i__37883__auto___44471]));

var G__44472 = (i__37883__auto___44471 + (1));
i__37883__auto___44471 = G__44472;
continue;
} else {
}
break;
}

var argseq__37890__auto__ = ((((1) < args__37889__auto__.length))?(new cljs.core.IndexedSeq(args__37889__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37890__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__44467){
var map__44468 = p__44467;
var map__44468__$1 = ((((!((map__44468 == null)))?((((map__44468.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44468.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44468):map__44468);
var opts = map__44468__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq44465){
var G__44466 = cljs.core.first.call(null,seq44465);
var seq44465__$1 = cljs.core.next.call(null,seq44465);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__44466,seq44465__$1);
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
var G__44474 = arguments.length;
switch (G__44474) {
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
var c__44387__auto___44520 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44387__auto___44520){
return (function (){
var f__44388__auto__ = (function (){var switch__44299__auto__ = ((function (c__44387__auto___44520){
return (function (state_44498){
var state_val_44499 = (state_44498[(1)]);
if((state_val_44499 === (7))){
var inst_44494 = (state_44498[(2)]);
var state_44498__$1 = state_44498;
var statearr_44500_44521 = state_44498__$1;
(statearr_44500_44521[(2)] = inst_44494);

(statearr_44500_44521[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44499 === (1))){
var state_44498__$1 = state_44498;
var statearr_44501_44522 = state_44498__$1;
(statearr_44501_44522[(2)] = null);

(statearr_44501_44522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44499 === (4))){
var inst_44477 = (state_44498[(7)]);
var inst_44477__$1 = (state_44498[(2)]);
var inst_44478 = (inst_44477__$1 == null);
var state_44498__$1 = (function (){var statearr_44502 = state_44498;
(statearr_44502[(7)] = inst_44477__$1);

return statearr_44502;
})();
if(cljs.core.truth_(inst_44478)){
var statearr_44503_44523 = state_44498__$1;
(statearr_44503_44523[(1)] = (5));

} else {
var statearr_44504_44524 = state_44498__$1;
(statearr_44504_44524[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44499 === (13))){
var state_44498__$1 = state_44498;
var statearr_44505_44525 = state_44498__$1;
(statearr_44505_44525[(2)] = null);

(statearr_44505_44525[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44499 === (6))){
var inst_44477 = (state_44498[(7)]);
var state_44498__$1 = state_44498;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44498__$1,(11),to,inst_44477);
} else {
if((state_val_44499 === (3))){
var inst_44496 = (state_44498[(2)]);
var state_44498__$1 = state_44498;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44498__$1,inst_44496);
} else {
if((state_val_44499 === (12))){
var state_44498__$1 = state_44498;
var statearr_44506_44526 = state_44498__$1;
(statearr_44506_44526[(2)] = null);

(statearr_44506_44526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44499 === (2))){
var state_44498__$1 = state_44498;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44498__$1,(4),from);
} else {
if((state_val_44499 === (11))){
var inst_44487 = (state_44498[(2)]);
var state_44498__$1 = state_44498;
if(cljs.core.truth_(inst_44487)){
var statearr_44507_44527 = state_44498__$1;
(statearr_44507_44527[(1)] = (12));

} else {
var statearr_44508_44528 = state_44498__$1;
(statearr_44508_44528[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44499 === (9))){
var state_44498__$1 = state_44498;
var statearr_44509_44529 = state_44498__$1;
(statearr_44509_44529[(2)] = null);

(statearr_44509_44529[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44499 === (5))){
var state_44498__$1 = state_44498;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44510_44530 = state_44498__$1;
(statearr_44510_44530[(1)] = (8));

} else {
var statearr_44511_44531 = state_44498__$1;
(statearr_44511_44531[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44499 === (14))){
var inst_44492 = (state_44498[(2)]);
var state_44498__$1 = state_44498;
var statearr_44512_44532 = state_44498__$1;
(statearr_44512_44532[(2)] = inst_44492);

(statearr_44512_44532[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44499 === (10))){
var inst_44484 = (state_44498[(2)]);
var state_44498__$1 = state_44498;
var statearr_44513_44533 = state_44498__$1;
(statearr_44513_44533[(2)] = inst_44484);

(statearr_44513_44533[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44499 === (8))){
var inst_44481 = cljs.core.async.close_BANG_.call(null,to);
var state_44498__$1 = state_44498;
var statearr_44514_44534 = state_44498__$1;
(statearr_44514_44534[(2)] = inst_44481);

(statearr_44514_44534[(1)] = (10));


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
});})(c__44387__auto___44520))
;
return ((function (switch__44299__auto__,c__44387__auto___44520){
return (function() {
var cljs$core$async$state_machine__44300__auto__ = null;
var cljs$core$async$state_machine__44300__auto____0 = (function (){
var statearr_44515 = [null,null,null,null,null,null,null,null];
(statearr_44515[(0)] = cljs$core$async$state_machine__44300__auto__);

(statearr_44515[(1)] = (1));

return statearr_44515;
});
var cljs$core$async$state_machine__44300__auto____1 = (function (state_44498){
while(true){
var ret_value__44301__auto__ = (function (){try{while(true){
var result__44302__auto__ = switch__44299__auto__.call(null,state_44498);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44302__auto__;
}
break;
}
}catch (e44516){if((e44516 instanceof Object)){
var ex__44303__auto__ = e44516;
var statearr_44517_44535 = state_44498;
(statearr_44517_44535[(5)] = ex__44303__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44498);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44516;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44536 = state_44498;
state_44498 = G__44536;
continue;
} else {
return ret_value__44301__auto__;
}
break;
}
});
cljs$core$async$state_machine__44300__auto__ = function(state_44498){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44300__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44300__auto____1.call(this,state_44498);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__44300__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44300__auto____0;
cljs$core$async$state_machine__44300__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44300__auto____1;
return cljs$core$async$state_machine__44300__auto__;
})()
;})(switch__44299__auto__,c__44387__auto___44520))
})();
var state__44389__auto__ = (function (){var statearr_44518 = f__44388__auto__.call(null);
(statearr_44518[(6)] = c__44387__auto___44520);

return statearr_44518;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44389__auto__);
});})(c__44387__auto___44520))
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
return (function (p__44537){
var vec__44538 = p__44537;
var v = cljs.core.nth.call(null,vec__44538,(0),null);
var p = cljs.core.nth.call(null,vec__44538,(1),null);
var job = vec__44538;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__44387__auto___44709 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44387__auto___44709,res,vec__44538,v,p,job,jobs,results){
return (function (){
var f__44388__auto__ = (function (){var switch__44299__auto__ = ((function (c__44387__auto___44709,res,vec__44538,v,p,job,jobs,results){
return (function (state_44545){
var state_val_44546 = (state_44545[(1)]);
if((state_val_44546 === (1))){
var state_44545__$1 = state_44545;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44545__$1,(2),res,v);
} else {
if((state_val_44546 === (2))){
var inst_44542 = (state_44545[(2)]);
var inst_44543 = cljs.core.async.close_BANG_.call(null,res);
var state_44545__$1 = (function (){var statearr_44547 = state_44545;
(statearr_44547[(7)] = inst_44542);

return statearr_44547;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44545__$1,inst_44543);
} else {
return null;
}
}
});})(c__44387__auto___44709,res,vec__44538,v,p,job,jobs,results))
;
return ((function (switch__44299__auto__,c__44387__auto___44709,res,vec__44538,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44300__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44300__auto____0 = (function (){
var statearr_44548 = [null,null,null,null,null,null,null,null];
(statearr_44548[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44300__auto__);

(statearr_44548[(1)] = (1));

return statearr_44548;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44300__auto____1 = (function (state_44545){
while(true){
var ret_value__44301__auto__ = (function (){try{while(true){
var result__44302__auto__ = switch__44299__auto__.call(null,state_44545);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44302__auto__;
}
break;
}
}catch (e44549){if((e44549 instanceof Object)){
var ex__44303__auto__ = e44549;
var statearr_44550_44710 = state_44545;
(statearr_44550_44710[(5)] = ex__44303__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44545);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44549;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44711 = state_44545;
state_44545 = G__44711;
continue;
} else {
return ret_value__44301__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44300__auto__ = function(state_44545){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44300__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44300__auto____1.call(this,state_44545);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__44300__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44300__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44300__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44300__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44300__auto__;
})()
;})(switch__44299__auto__,c__44387__auto___44709,res,vec__44538,v,p,job,jobs,results))
})();
var state__44389__auto__ = (function (){var statearr_44551 = f__44388__auto__.call(null);
(statearr_44551[(6)] = c__44387__auto___44709);

return statearr_44551;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44389__auto__);
});})(c__44387__auto___44709,res,vec__44538,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__44552){
var vec__44553 = p__44552;
var v = cljs.core.nth.call(null,vec__44553,(0),null);
var p = cljs.core.nth.call(null,vec__44553,(1),null);
var job = vec__44553;
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
var n__37681__auto___44712 = n;
var __44713 = (0);
while(true){
if((__44713 < n__37681__auto___44712)){
var G__44556_44714 = type;
var G__44556_44715__$1 = (((G__44556_44714 instanceof cljs.core.Keyword))?G__44556_44714.fqn:null);
switch (G__44556_44715__$1) {
case "compute":
var c__44387__auto___44717 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__44713,c__44387__auto___44717,G__44556_44714,G__44556_44715__$1,n__37681__auto___44712,jobs,results,process,async){
return (function (){
var f__44388__auto__ = (function (){var switch__44299__auto__ = ((function (__44713,c__44387__auto___44717,G__44556_44714,G__44556_44715__$1,n__37681__auto___44712,jobs,results,process,async){
return (function (state_44569){
var state_val_44570 = (state_44569[(1)]);
if((state_val_44570 === (1))){
var state_44569__$1 = state_44569;
var statearr_44571_44718 = state_44569__$1;
(statearr_44571_44718[(2)] = null);

(statearr_44571_44718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44570 === (2))){
var state_44569__$1 = state_44569;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44569__$1,(4),jobs);
} else {
if((state_val_44570 === (3))){
var inst_44567 = (state_44569[(2)]);
var state_44569__$1 = state_44569;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44569__$1,inst_44567);
} else {
if((state_val_44570 === (4))){
var inst_44559 = (state_44569[(2)]);
var inst_44560 = process.call(null,inst_44559);
var state_44569__$1 = state_44569;
if(cljs.core.truth_(inst_44560)){
var statearr_44572_44719 = state_44569__$1;
(statearr_44572_44719[(1)] = (5));

} else {
var statearr_44573_44720 = state_44569__$1;
(statearr_44573_44720[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44570 === (5))){
var state_44569__$1 = state_44569;
var statearr_44574_44721 = state_44569__$1;
(statearr_44574_44721[(2)] = null);

(statearr_44574_44721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44570 === (6))){
var state_44569__$1 = state_44569;
var statearr_44575_44722 = state_44569__$1;
(statearr_44575_44722[(2)] = null);

(statearr_44575_44722[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44570 === (7))){
var inst_44565 = (state_44569[(2)]);
var state_44569__$1 = state_44569;
var statearr_44576_44723 = state_44569__$1;
(statearr_44576_44723[(2)] = inst_44565);

(statearr_44576_44723[(1)] = (3));


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
});})(__44713,c__44387__auto___44717,G__44556_44714,G__44556_44715__$1,n__37681__auto___44712,jobs,results,process,async))
;
return ((function (__44713,switch__44299__auto__,c__44387__auto___44717,G__44556_44714,G__44556_44715__$1,n__37681__auto___44712,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44300__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44300__auto____0 = (function (){
var statearr_44577 = [null,null,null,null,null,null,null];
(statearr_44577[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44300__auto__);

(statearr_44577[(1)] = (1));

return statearr_44577;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44300__auto____1 = (function (state_44569){
while(true){
var ret_value__44301__auto__ = (function (){try{while(true){
var result__44302__auto__ = switch__44299__auto__.call(null,state_44569);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44302__auto__;
}
break;
}
}catch (e44578){if((e44578 instanceof Object)){
var ex__44303__auto__ = e44578;
var statearr_44579_44724 = state_44569;
(statearr_44579_44724[(5)] = ex__44303__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44569);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44578;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44725 = state_44569;
state_44569 = G__44725;
continue;
} else {
return ret_value__44301__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44300__auto__ = function(state_44569){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44300__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44300__auto____1.call(this,state_44569);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__44300__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44300__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44300__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44300__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44300__auto__;
})()
;})(__44713,switch__44299__auto__,c__44387__auto___44717,G__44556_44714,G__44556_44715__$1,n__37681__auto___44712,jobs,results,process,async))
})();
var state__44389__auto__ = (function (){var statearr_44580 = f__44388__auto__.call(null);
(statearr_44580[(6)] = c__44387__auto___44717);

return statearr_44580;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44389__auto__);
});})(__44713,c__44387__auto___44717,G__44556_44714,G__44556_44715__$1,n__37681__auto___44712,jobs,results,process,async))
);


break;
case "async":
var c__44387__auto___44726 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__44713,c__44387__auto___44726,G__44556_44714,G__44556_44715__$1,n__37681__auto___44712,jobs,results,process,async){
return (function (){
var f__44388__auto__ = (function (){var switch__44299__auto__ = ((function (__44713,c__44387__auto___44726,G__44556_44714,G__44556_44715__$1,n__37681__auto___44712,jobs,results,process,async){
return (function (state_44593){
var state_val_44594 = (state_44593[(1)]);
if((state_val_44594 === (1))){
var state_44593__$1 = state_44593;
var statearr_44595_44727 = state_44593__$1;
(statearr_44595_44727[(2)] = null);

(statearr_44595_44727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44594 === (2))){
var state_44593__$1 = state_44593;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44593__$1,(4),jobs);
} else {
if((state_val_44594 === (3))){
var inst_44591 = (state_44593[(2)]);
var state_44593__$1 = state_44593;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44593__$1,inst_44591);
} else {
if((state_val_44594 === (4))){
var inst_44583 = (state_44593[(2)]);
var inst_44584 = async.call(null,inst_44583);
var state_44593__$1 = state_44593;
if(cljs.core.truth_(inst_44584)){
var statearr_44596_44728 = state_44593__$1;
(statearr_44596_44728[(1)] = (5));

} else {
var statearr_44597_44729 = state_44593__$1;
(statearr_44597_44729[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44594 === (5))){
var state_44593__$1 = state_44593;
var statearr_44598_44730 = state_44593__$1;
(statearr_44598_44730[(2)] = null);

(statearr_44598_44730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44594 === (6))){
var state_44593__$1 = state_44593;
var statearr_44599_44731 = state_44593__$1;
(statearr_44599_44731[(2)] = null);

(statearr_44599_44731[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44594 === (7))){
var inst_44589 = (state_44593[(2)]);
var state_44593__$1 = state_44593;
var statearr_44600_44732 = state_44593__$1;
(statearr_44600_44732[(2)] = inst_44589);

(statearr_44600_44732[(1)] = (3));


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
});})(__44713,c__44387__auto___44726,G__44556_44714,G__44556_44715__$1,n__37681__auto___44712,jobs,results,process,async))
;
return ((function (__44713,switch__44299__auto__,c__44387__auto___44726,G__44556_44714,G__44556_44715__$1,n__37681__auto___44712,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44300__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44300__auto____0 = (function (){
var statearr_44601 = [null,null,null,null,null,null,null];
(statearr_44601[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44300__auto__);

(statearr_44601[(1)] = (1));

return statearr_44601;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44300__auto____1 = (function (state_44593){
while(true){
var ret_value__44301__auto__ = (function (){try{while(true){
var result__44302__auto__ = switch__44299__auto__.call(null,state_44593);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44302__auto__;
}
break;
}
}catch (e44602){if((e44602 instanceof Object)){
var ex__44303__auto__ = e44602;
var statearr_44603_44733 = state_44593;
(statearr_44603_44733[(5)] = ex__44303__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44593);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44602;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44734 = state_44593;
state_44593 = G__44734;
continue;
} else {
return ret_value__44301__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44300__auto__ = function(state_44593){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44300__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44300__auto____1.call(this,state_44593);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__44300__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44300__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44300__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44300__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44300__auto__;
})()
;})(__44713,switch__44299__auto__,c__44387__auto___44726,G__44556_44714,G__44556_44715__$1,n__37681__auto___44712,jobs,results,process,async))
})();
var state__44389__auto__ = (function (){var statearr_44604 = f__44388__auto__.call(null);
(statearr_44604[(6)] = c__44387__auto___44726);

return statearr_44604;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44389__auto__);
});})(__44713,c__44387__auto___44726,G__44556_44714,G__44556_44715__$1,n__37681__auto___44712,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44556_44715__$1)].join('')));

}

var G__44735 = (__44713 + (1));
__44713 = G__44735;
continue;
} else {
}
break;
}

var c__44387__auto___44736 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44387__auto___44736,jobs,results,process,async){
return (function (){
var f__44388__auto__ = (function (){var switch__44299__auto__ = ((function (c__44387__auto___44736,jobs,results,process,async){
return (function (state_44626){
var state_val_44627 = (state_44626[(1)]);
if((state_val_44627 === (1))){
var state_44626__$1 = state_44626;
var statearr_44628_44737 = state_44626__$1;
(statearr_44628_44737[(2)] = null);

(statearr_44628_44737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44627 === (2))){
var state_44626__$1 = state_44626;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44626__$1,(4),from);
} else {
if((state_val_44627 === (3))){
var inst_44624 = (state_44626[(2)]);
var state_44626__$1 = state_44626;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44626__$1,inst_44624);
} else {
if((state_val_44627 === (4))){
var inst_44607 = (state_44626[(7)]);
var inst_44607__$1 = (state_44626[(2)]);
var inst_44608 = (inst_44607__$1 == null);
var state_44626__$1 = (function (){var statearr_44629 = state_44626;
(statearr_44629[(7)] = inst_44607__$1);

return statearr_44629;
})();
if(cljs.core.truth_(inst_44608)){
var statearr_44630_44738 = state_44626__$1;
(statearr_44630_44738[(1)] = (5));

} else {
var statearr_44631_44739 = state_44626__$1;
(statearr_44631_44739[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44627 === (5))){
var inst_44610 = cljs.core.async.close_BANG_.call(null,jobs);
var state_44626__$1 = state_44626;
var statearr_44632_44740 = state_44626__$1;
(statearr_44632_44740[(2)] = inst_44610);

(statearr_44632_44740[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44627 === (6))){
var inst_44607 = (state_44626[(7)]);
var inst_44612 = (state_44626[(8)]);
var inst_44612__$1 = cljs.core.async.chan.call(null,(1));
var inst_44613 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44614 = [inst_44607,inst_44612__$1];
var inst_44615 = (new cljs.core.PersistentVector(null,2,(5),inst_44613,inst_44614,null));
var state_44626__$1 = (function (){var statearr_44633 = state_44626;
(statearr_44633[(8)] = inst_44612__$1);

return statearr_44633;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44626__$1,(8),jobs,inst_44615);
} else {
if((state_val_44627 === (7))){
var inst_44622 = (state_44626[(2)]);
var state_44626__$1 = state_44626;
var statearr_44634_44741 = state_44626__$1;
(statearr_44634_44741[(2)] = inst_44622);

(statearr_44634_44741[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44627 === (8))){
var inst_44612 = (state_44626[(8)]);
var inst_44617 = (state_44626[(2)]);
var state_44626__$1 = (function (){var statearr_44635 = state_44626;
(statearr_44635[(9)] = inst_44617);

return statearr_44635;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44626__$1,(9),results,inst_44612);
} else {
if((state_val_44627 === (9))){
var inst_44619 = (state_44626[(2)]);
var state_44626__$1 = (function (){var statearr_44636 = state_44626;
(statearr_44636[(10)] = inst_44619);

return statearr_44636;
})();
var statearr_44637_44742 = state_44626__$1;
(statearr_44637_44742[(2)] = null);

(statearr_44637_44742[(1)] = (2));


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
});})(c__44387__auto___44736,jobs,results,process,async))
;
return ((function (switch__44299__auto__,c__44387__auto___44736,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44300__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44300__auto____0 = (function (){
var statearr_44638 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44638[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44300__auto__);

(statearr_44638[(1)] = (1));

return statearr_44638;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44300__auto____1 = (function (state_44626){
while(true){
var ret_value__44301__auto__ = (function (){try{while(true){
var result__44302__auto__ = switch__44299__auto__.call(null,state_44626);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44302__auto__;
}
break;
}
}catch (e44639){if((e44639 instanceof Object)){
var ex__44303__auto__ = e44639;
var statearr_44640_44743 = state_44626;
(statearr_44640_44743[(5)] = ex__44303__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44626);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44639;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44744 = state_44626;
state_44626 = G__44744;
continue;
} else {
return ret_value__44301__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44300__auto__ = function(state_44626){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44300__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44300__auto____1.call(this,state_44626);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__44300__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44300__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44300__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44300__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44300__auto__;
})()
;})(switch__44299__auto__,c__44387__auto___44736,jobs,results,process,async))
})();
var state__44389__auto__ = (function (){var statearr_44641 = f__44388__auto__.call(null);
(statearr_44641[(6)] = c__44387__auto___44736);

return statearr_44641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44389__auto__);
});})(c__44387__auto___44736,jobs,results,process,async))
);


var c__44387__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44387__auto__,jobs,results,process,async){
return (function (){
var f__44388__auto__ = (function (){var switch__44299__auto__ = ((function (c__44387__auto__,jobs,results,process,async){
return (function (state_44679){
var state_val_44680 = (state_44679[(1)]);
if((state_val_44680 === (7))){
var inst_44675 = (state_44679[(2)]);
var state_44679__$1 = state_44679;
var statearr_44681_44745 = state_44679__$1;
(statearr_44681_44745[(2)] = inst_44675);

(statearr_44681_44745[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44680 === (20))){
var state_44679__$1 = state_44679;
var statearr_44682_44746 = state_44679__$1;
(statearr_44682_44746[(2)] = null);

(statearr_44682_44746[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44680 === (1))){
var state_44679__$1 = state_44679;
var statearr_44683_44747 = state_44679__$1;
(statearr_44683_44747[(2)] = null);

(statearr_44683_44747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44680 === (4))){
var inst_44644 = (state_44679[(7)]);
var inst_44644__$1 = (state_44679[(2)]);
var inst_44645 = (inst_44644__$1 == null);
var state_44679__$1 = (function (){var statearr_44684 = state_44679;
(statearr_44684[(7)] = inst_44644__$1);

return statearr_44684;
})();
if(cljs.core.truth_(inst_44645)){
var statearr_44685_44748 = state_44679__$1;
(statearr_44685_44748[(1)] = (5));

} else {
var statearr_44686_44749 = state_44679__$1;
(statearr_44686_44749[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44680 === (15))){
var inst_44657 = (state_44679[(8)]);
var state_44679__$1 = state_44679;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44679__$1,(18),to,inst_44657);
} else {
if((state_val_44680 === (21))){
var inst_44670 = (state_44679[(2)]);
var state_44679__$1 = state_44679;
var statearr_44687_44750 = state_44679__$1;
(statearr_44687_44750[(2)] = inst_44670);

(statearr_44687_44750[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44680 === (13))){
var inst_44672 = (state_44679[(2)]);
var state_44679__$1 = (function (){var statearr_44688 = state_44679;
(statearr_44688[(9)] = inst_44672);

return statearr_44688;
})();
var statearr_44689_44751 = state_44679__$1;
(statearr_44689_44751[(2)] = null);

(statearr_44689_44751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44680 === (6))){
var inst_44644 = (state_44679[(7)]);
var state_44679__$1 = state_44679;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44679__$1,(11),inst_44644);
} else {
if((state_val_44680 === (17))){
var inst_44665 = (state_44679[(2)]);
var state_44679__$1 = state_44679;
if(cljs.core.truth_(inst_44665)){
var statearr_44690_44752 = state_44679__$1;
(statearr_44690_44752[(1)] = (19));

} else {
var statearr_44691_44753 = state_44679__$1;
(statearr_44691_44753[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44680 === (3))){
var inst_44677 = (state_44679[(2)]);
var state_44679__$1 = state_44679;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44679__$1,inst_44677);
} else {
if((state_val_44680 === (12))){
var inst_44654 = (state_44679[(10)]);
var state_44679__$1 = state_44679;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44679__$1,(14),inst_44654);
} else {
if((state_val_44680 === (2))){
var state_44679__$1 = state_44679;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44679__$1,(4),results);
} else {
if((state_val_44680 === (19))){
var state_44679__$1 = state_44679;
var statearr_44692_44754 = state_44679__$1;
(statearr_44692_44754[(2)] = null);

(statearr_44692_44754[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44680 === (11))){
var inst_44654 = (state_44679[(2)]);
var state_44679__$1 = (function (){var statearr_44693 = state_44679;
(statearr_44693[(10)] = inst_44654);

return statearr_44693;
})();
var statearr_44694_44755 = state_44679__$1;
(statearr_44694_44755[(2)] = null);

(statearr_44694_44755[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44680 === (9))){
var state_44679__$1 = state_44679;
var statearr_44695_44756 = state_44679__$1;
(statearr_44695_44756[(2)] = null);

(statearr_44695_44756[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44680 === (5))){
var state_44679__$1 = state_44679;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44696_44757 = state_44679__$1;
(statearr_44696_44757[(1)] = (8));

} else {
var statearr_44697_44758 = state_44679__$1;
(statearr_44697_44758[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44680 === (14))){
var inst_44657 = (state_44679[(8)]);
var inst_44659 = (state_44679[(11)]);
var inst_44657__$1 = (state_44679[(2)]);
var inst_44658 = (inst_44657__$1 == null);
var inst_44659__$1 = cljs.core.not.call(null,inst_44658);
var state_44679__$1 = (function (){var statearr_44698 = state_44679;
(statearr_44698[(8)] = inst_44657__$1);

(statearr_44698[(11)] = inst_44659__$1);

return statearr_44698;
})();
if(inst_44659__$1){
var statearr_44699_44759 = state_44679__$1;
(statearr_44699_44759[(1)] = (15));

} else {
var statearr_44700_44760 = state_44679__$1;
(statearr_44700_44760[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44680 === (16))){
var inst_44659 = (state_44679[(11)]);
var state_44679__$1 = state_44679;
var statearr_44701_44761 = state_44679__$1;
(statearr_44701_44761[(2)] = inst_44659);

(statearr_44701_44761[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44680 === (10))){
var inst_44651 = (state_44679[(2)]);
var state_44679__$1 = state_44679;
var statearr_44702_44762 = state_44679__$1;
(statearr_44702_44762[(2)] = inst_44651);

(statearr_44702_44762[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44680 === (18))){
var inst_44662 = (state_44679[(2)]);
var state_44679__$1 = state_44679;
var statearr_44703_44763 = state_44679__$1;
(statearr_44703_44763[(2)] = inst_44662);

(statearr_44703_44763[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44680 === (8))){
var inst_44648 = cljs.core.async.close_BANG_.call(null,to);
var state_44679__$1 = state_44679;
var statearr_44704_44764 = state_44679__$1;
(statearr_44704_44764[(2)] = inst_44648);

(statearr_44704_44764[(1)] = (10));


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
});})(c__44387__auto__,jobs,results,process,async))
;
return ((function (switch__44299__auto__,c__44387__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44300__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44300__auto____0 = (function (){
var statearr_44705 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44705[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44300__auto__);

(statearr_44705[(1)] = (1));

return statearr_44705;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44300__auto____1 = (function (state_44679){
while(true){
var ret_value__44301__auto__ = (function (){try{while(true){
var result__44302__auto__ = switch__44299__auto__.call(null,state_44679);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44302__auto__;
}
break;
}
}catch (e44706){if((e44706 instanceof Object)){
var ex__44303__auto__ = e44706;
var statearr_44707_44765 = state_44679;
(statearr_44707_44765[(5)] = ex__44303__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44679);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44706;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44766 = state_44679;
state_44679 = G__44766;
continue;
} else {
return ret_value__44301__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44300__auto__ = function(state_44679){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44300__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44300__auto____1.call(this,state_44679);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__44300__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44300__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44300__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44300__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44300__auto__;
})()
;})(switch__44299__auto__,c__44387__auto__,jobs,results,process,async))
})();
var state__44389__auto__ = (function (){var statearr_44708 = f__44388__auto__.call(null);
(statearr_44708[(6)] = c__44387__auto__);

return statearr_44708;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44389__auto__);
});})(c__44387__auto__,jobs,results,process,async))
);

return c__44387__auto__;
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
var G__44768 = arguments.length;
switch (G__44768) {
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
var G__44771 = arguments.length;
switch (G__44771) {
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
var G__44774 = arguments.length;
switch (G__44774) {
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
var c__44387__auto___44823 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44387__auto___44823,tc,fc){
return (function (){
var f__44388__auto__ = (function (){var switch__44299__auto__ = ((function (c__44387__auto___44823,tc,fc){
return (function (state_44800){
var state_val_44801 = (state_44800[(1)]);
if((state_val_44801 === (7))){
var inst_44796 = (state_44800[(2)]);
var state_44800__$1 = state_44800;
var statearr_44802_44824 = state_44800__$1;
(statearr_44802_44824[(2)] = inst_44796);

(statearr_44802_44824[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44801 === (1))){
var state_44800__$1 = state_44800;
var statearr_44803_44825 = state_44800__$1;
(statearr_44803_44825[(2)] = null);

(statearr_44803_44825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44801 === (4))){
var inst_44777 = (state_44800[(7)]);
var inst_44777__$1 = (state_44800[(2)]);
var inst_44778 = (inst_44777__$1 == null);
var state_44800__$1 = (function (){var statearr_44804 = state_44800;
(statearr_44804[(7)] = inst_44777__$1);

return statearr_44804;
})();
if(cljs.core.truth_(inst_44778)){
var statearr_44805_44826 = state_44800__$1;
(statearr_44805_44826[(1)] = (5));

} else {
var statearr_44806_44827 = state_44800__$1;
(statearr_44806_44827[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44801 === (13))){
var state_44800__$1 = state_44800;
var statearr_44807_44828 = state_44800__$1;
(statearr_44807_44828[(2)] = null);

(statearr_44807_44828[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44801 === (6))){
var inst_44777 = (state_44800[(7)]);
var inst_44783 = p.call(null,inst_44777);
var state_44800__$1 = state_44800;
if(cljs.core.truth_(inst_44783)){
var statearr_44808_44829 = state_44800__$1;
(statearr_44808_44829[(1)] = (9));

} else {
var statearr_44809_44830 = state_44800__$1;
(statearr_44809_44830[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44801 === (3))){
var inst_44798 = (state_44800[(2)]);
var state_44800__$1 = state_44800;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44800__$1,inst_44798);
} else {
if((state_val_44801 === (12))){
var state_44800__$1 = state_44800;
var statearr_44810_44831 = state_44800__$1;
(statearr_44810_44831[(2)] = null);

(statearr_44810_44831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44801 === (2))){
var state_44800__$1 = state_44800;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44800__$1,(4),ch);
} else {
if((state_val_44801 === (11))){
var inst_44777 = (state_44800[(7)]);
var inst_44787 = (state_44800[(2)]);
var state_44800__$1 = state_44800;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44800__$1,(8),inst_44787,inst_44777);
} else {
if((state_val_44801 === (9))){
var state_44800__$1 = state_44800;
var statearr_44811_44832 = state_44800__$1;
(statearr_44811_44832[(2)] = tc);

(statearr_44811_44832[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44801 === (5))){
var inst_44780 = cljs.core.async.close_BANG_.call(null,tc);
var inst_44781 = cljs.core.async.close_BANG_.call(null,fc);
var state_44800__$1 = (function (){var statearr_44812 = state_44800;
(statearr_44812[(8)] = inst_44780);

return statearr_44812;
})();
var statearr_44813_44833 = state_44800__$1;
(statearr_44813_44833[(2)] = inst_44781);

(statearr_44813_44833[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44801 === (14))){
var inst_44794 = (state_44800[(2)]);
var state_44800__$1 = state_44800;
var statearr_44814_44834 = state_44800__$1;
(statearr_44814_44834[(2)] = inst_44794);

(statearr_44814_44834[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44801 === (10))){
var state_44800__$1 = state_44800;
var statearr_44815_44835 = state_44800__$1;
(statearr_44815_44835[(2)] = fc);

(statearr_44815_44835[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44801 === (8))){
var inst_44789 = (state_44800[(2)]);
var state_44800__$1 = state_44800;
if(cljs.core.truth_(inst_44789)){
var statearr_44816_44836 = state_44800__$1;
(statearr_44816_44836[(1)] = (12));

} else {
var statearr_44817_44837 = state_44800__$1;
(statearr_44817_44837[(1)] = (13));

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
});})(c__44387__auto___44823,tc,fc))
;
return ((function (switch__44299__auto__,c__44387__auto___44823,tc,fc){
return (function() {
var cljs$core$async$state_machine__44300__auto__ = null;
var cljs$core$async$state_machine__44300__auto____0 = (function (){
var statearr_44818 = [null,null,null,null,null,null,null,null,null];
(statearr_44818[(0)] = cljs$core$async$state_machine__44300__auto__);

(statearr_44818[(1)] = (1));

return statearr_44818;
});
var cljs$core$async$state_machine__44300__auto____1 = (function (state_44800){
while(true){
var ret_value__44301__auto__ = (function (){try{while(true){
var result__44302__auto__ = switch__44299__auto__.call(null,state_44800);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44302__auto__;
}
break;
}
}catch (e44819){if((e44819 instanceof Object)){
var ex__44303__auto__ = e44819;
var statearr_44820_44838 = state_44800;
(statearr_44820_44838[(5)] = ex__44303__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44800);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44819;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44839 = state_44800;
state_44800 = G__44839;
continue;
} else {
return ret_value__44301__auto__;
}
break;
}
});
cljs$core$async$state_machine__44300__auto__ = function(state_44800){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44300__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44300__auto____1.call(this,state_44800);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__44300__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44300__auto____0;
cljs$core$async$state_machine__44300__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44300__auto____1;
return cljs$core$async$state_machine__44300__auto__;
})()
;})(switch__44299__auto__,c__44387__auto___44823,tc,fc))
})();
var state__44389__auto__ = (function (){var statearr_44821 = f__44388__auto__.call(null);
(statearr_44821[(6)] = c__44387__auto___44823);

return statearr_44821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44389__auto__);
});})(c__44387__auto___44823,tc,fc))
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
var c__44387__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44387__auto__){
return (function (){
var f__44388__auto__ = (function (){var switch__44299__auto__ = ((function (c__44387__auto__){
return (function (state_44860){
var state_val_44861 = (state_44860[(1)]);
if((state_val_44861 === (7))){
var inst_44856 = (state_44860[(2)]);
var state_44860__$1 = state_44860;
var statearr_44862_44880 = state_44860__$1;
(statearr_44862_44880[(2)] = inst_44856);

(statearr_44862_44880[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44861 === (1))){
var inst_44840 = init;
var state_44860__$1 = (function (){var statearr_44863 = state_44860;
(statearr_44863[(7)] = inst_44840);

return statearr_44863;
})();
var statearr_44864_44881 = state_44860__$1;
(statearr_44864_44881[(2)] = null);

(statearr_44864_44881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44861 === (4))){
var inst_44843 = (state_44860[(8)]);
var inst_44843__$1 = (state_44860[(2)]);
var inst_44844 = (inst_44843__$1 == null);
var state_44860__$1 = (function (){var statearr_44865 = state_44860;
(statearr_44865[(8)] = inst_44843__$1);

return statearr_44865;
})();
if(cljs.core.truth_(inst_44844)){
var statearr_44866_44882 = state_44860__$1;
(statearr_44866_44882[(1)] = (5));

} else {
var statearr_44867_44883 = state_44860__$1;
(statearr_44867_44883[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44861 === (6))){
var inst_44847 = (state_44860[(9)]);
var inst_44840 = (state_44860[(7)]);
var inst_44843 = (state_44860[(8)]);
var inst_44847__$1 = f.call(null,inst_44840,inst_44843);
var inst_44848 = cljs.core.reduced_QMARK_.call(null,inst_44847__$1);
var state_44860__$1 = (function (){var statearr_44868 = state_44860;
(statearr_44868[(9)] = inst_44847__$1);

return statearr_44868;
})();
if(inst_44848){
var statearr_44869_44884 = state_44860__$1;
(statearr_44869_44884[(1)] = (8));

} else {
var statearr_44870_44885 = state_44860__$1;
(statearr_44870_44885[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44861 === (3))){
var inst_44858 = (state_44860[(2)]);
var state_44860__$1 = state_44860;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44860__$1,inst_44858);
} else {
if((state_val_44861 === (2))){
var state_44860__$1 = state_44860;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44860__$1,(4),ch);
} else {
if((state_val_44861 === (9))){
var inst_44847 = (state_44860[(9)]);
var inst_44840 = inst_44847;
var state_44860__$1 = (function (){var statearr_44871 = state_44860;
(statearr_44871[(7)] = inst_44840);

return statearr_44871;
})();
var statearr_44872_44886 = state_44860__$1;
(statearr_44872_44886[(2)] = null);

(statearr_44872_44886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44861 === (5))){
var inst_44840 = (state_44860[(7)]);
var state_44860__$1 = state_44860;
var statearr_44873_44887 = state_44860__$1;
(statearr_44873_44887[(2)] = inst_44840);

(statearr_44873_44887[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44861 === (10))){
var inst_44854 = (state_44860[(2)]);
var state_44860__$1 = state_44860;
var statearr_44874_44888 = state_44860__$1;
(statearr_44874_44888[(2)] = inst_44854);

(statearr_44874_44888[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44861 === (8))){
var inst_44847 = (state_44860[(9)]);
var inst_44850 = cljs.core.deref.call(null,inst_44847);
var state_44860__$1 = state_44860;
var statearr_44875_44889 = state_44860__$1;
(statearr_44875_44889[(2)] = inst_44850);

(statearr_44875_44889[(1)] = (10));


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
});})(c__44387__auto__))
;
return ((function (switch__44299__auto__,c__44387__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__44300__auto__ = null;
var cljs$core$async$reduce_$_state_machine__44300__auto____0 = (function (){
var statearr_44876 = [null,null,null,null,null,null,null,null,null,null];
(statearr_44876[(0)] = cljs$core$async$reduce_$_state_machine__44300__auto__);

(statearr_44876[(1)] = (1));

return statearr_44876;
});
var cljs$core$async$reduce_$_state_machine__44300__auto____1 = (function (state_44860){
while(true){
var ret_value__44301__auto__ = (function (){try{while(true){
var result__44302__auto__ = switch__44299__auto__.call(null,state_44860);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44302__auto__;
}
break;
}
}catch (e44877){if((e44877 instanceof Object)){
var ex__44303__auto__ = e44877;
var statearr_44878_44890 = state_44860;
(statearr_44878_44890[(5)] = ex__44303__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44860);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44877;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44891 = state_44860;
state_44860 = G__44891;
continue;
} else {
return ret_value__44301__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__44300__auto__ = function(state_44860){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__44300__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__44300__auto____1.call(this,state_44860);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__44300__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__44300__auto____0;
cljs$core$async$reduce_$_state_machine__44300__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__44300__auto____1;
return cljs$core$async$reduce_$_state_machine__44300__auto__;
})()
;})(switch__44299__auto__,c__44387__auto__))
})();
var state__44389__auto__ = (function (){var statearr_44879 = f__44388__auto__.call(null);
(statearr_44879[(6)] = c__44387__auto__);

return statearr_44879;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44389__auto__);
});})(c__44387__auto__))
);

return c__44387__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__44387__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44387__auto__,f__$1){
return (function (){
var f__44388__auto__ = (function (){var switch__44299__auto__ = ((function (c__44387__auto__,f__$1){
return (function (state_44897){
var state_val_44898 = (state_44897[(1)]);
if((state_val_44898 === (1))){
var inst_44892 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_44897__$1 = state_44897;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44897__$1,(2),inst_44892);
} else {
if((state_val_44898 === (2))){
var inst_44894 = (state_44897[(2)]);
var inst_44895 = f__$1.call(null,inst_44894);
var state_44897__$1 = state_44897;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44897__$1,inst_44895);
} else {
return null;
}
}
});})(c__44387__auto__,f__$1))
;
return ((function (switch__44299__auto__,c__44387__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__44300__auto__ = null;
var cljs$core$async$transduce_$_state_machine__44300__auto____0 = (function (){
var statearr_44899 = [null,null,null,null,null,null,null];
(statearr_44899[(0)] = cljs$core$async$transduce_$_state_machine__44300__auto__);

(statearr_44899[(1)] = (1));

return statearr_44899;
});
var cljs$core$async$transduce_$_state_machine__44300__auto____1 = (function (state_44897){
while(true){
var ret_value__44301__auto__ = (function (){try{while(true){
var result__44302__auto__ = switch__44299__auto__.call(null,state_44897);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44302__auto__;
}
break;
}
}catch (e44900){if((e44900 instanceof Object)){
var ex__44303__auto__ = e44900;
var statearr_44901_44903 = state_44897;
(statearr_44901_44903[(5)] = ex__44303__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44897);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44900;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44904 = state_44897;
state_44897 = G__44904;
continue;
} else {
return ret_value__44301__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__44300__auto__ = function(state_44897){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__44300__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__44300__auto____1.call(this,state_44897);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__44300__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__44300__auto____0;
cljs$core$async$transduce_$_state_machine__44300__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__44300__auto____1;
return cljs$core$async$transduce_$_state_machine__44300__auto__;
})()
;})(switch__44299__auto__,c__44387__auto__,f__$1))
})();
var state__44389__auto__ = (function (){var statearr_44902 = f__44388__auto__.call(null);
(statearr_44902[(6)] = c__44387__auto__);

return statearr_44902;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44389__auto__);
});})(c__44387__auto__,f__$1))
);

return c__44387__auto__;
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
var G__44906 = arguments.length;
switch (G__44906) {
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
var c__44387__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44387__auto__){
return (function (){
var f__44388__auto__ = (function (){var switch__44299__auto__ = ((function (c__44387__auto__){
return (function (state_44931){
var state_val_44932 = (state_44931[(1)]);
if((state_val_44932 === (7))){
var inst_44913 = (state_44931[(2)]);
var state_44931__$1 = state_44931;
var statearr_44933_44954 = state_44931__$1;
(statearr_44933_44954[(2)] = inst_44913);

(statearr_44933_44954[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44932 === (1))){
var inst_44907 = cljs.core.seq.call(null,coll);
var inst_44908 = inst_44907;
var state_44931__$1 = (function (){var statearr_44934 = state_44931;
(statearr_44934[(7)] = inst_44908);

return statearr_44934;
})();
var statearr_44935_44955 = state_44931__$1;
(statearr_44935_44955[(2)] = null);

(statearr_44935_44955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44932 === (4))){
var inst_44908 = (state_44931[(7)]);
var inst_44911 = cljs.core.first.call(null,inst_44908);
var state_44931__$1 = state_44931;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44931__$1,(7),ch,inst_44911);
} else {
if((state_val_44932 === (13))){
var inst_44925 = (state_44931[(2)]);
var state_44931__$1 = state_44931;
var statearr_44936_44956 = state_44931__$1;
(statearr_44936_44956[(2)] = inst_44925);

(statearr_44936_44956[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44932 === (6))){
var inst_44916 = (state_44931[(2)]);
var state_44931__$1 = state_44931;
if(cljs.core.truth_(inst_44916)){
var statearr_44937_44957 = state_44931__$1;
(statearr_44937_44957[(1)] = (8));

} else {
var statearr_44938_44958 = state_44931__$1;
(statearr_44938_44958[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44932 === (3))){
var inst_44929 = (state_44931[(2)]);
var state_44931__$1 = state_44931;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44931__$1,inst_44929);
} else {
if((state_val_44932 === (12))){
var state_44931__$1 = state_44931;
var statearr_44939_44959 = state_44931__$1;
(statearr_44939_44959[(2)] = null);

(statearr_44939_44959[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44932 === (2))){
var inst_44908 = (state_44931[(7)]);
var state_44931__$1 = state_44931;
if(cljs.core.truth_(inst_44908)){
var statearr_44940_44960 = state_44931__$1;
(statearr_44940_44960[(1)] = (4));

} else {
var statearr_44941_44961 = state_44931__$1;
(statearr_44941_44961[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44932 === (11))){
var inst_44922 = cljs.core.async.close_BANG_.call(null,ch);
var state_44931__$1 = state_44931;
var statearr_44942_44962 = state_44931__$1;
(statearr_44942_44962[(2)] = inst_44922);

(statearr_44942_44962[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44932 === (9))){
var state_44931__$1 = state_44931;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44943_44963 = state_44931__$1;
(statearr_44943_44963[(1)] = (11));

} else {
var statearr_44944_44964 = state_44931__$1;
(statearr_44944_44964[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44932 === (5))){
var inst_44908 = (state_44931[(7)]);
var state_44931__$1 = state_44931;
var statearr_44945_44965 = state_44931__$1;
(statearr_44945_44965[(2)] = inst_44908);

(statearr_44945_44965[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44932 === (10))){
var inst_44927 = (state_44931[(2)]);
var state_44931__$1 = state_44931;
var statearr_44946_44966 = state_44931__$1;
(statearr_44946_44966[(2)] = inst_44927);

(statearr_44946_44966[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44932 === (8))){
var inst_44908 = (state_44931[(7)]);
var inst_44918 = cljs.core.next.call(null,inst_44908);
var inst_44908__$1 = inst_44918;
var state_44931__$1 = (function (){var statearr_44947 = state_44931;
(statearr_44947[(7)] = inst_44908__$1);

return statearr_44947;
})();
var statearr_44948_44967 = state_44931__$1;
(statearr_44948_44967[(2)] = null);

(statearr_44948_44967[(1)] = (2));


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
});})(c__44387__auto__))
;
return ((function (switch__44299__auto__,c__44387__auto__){
return (function() {
var cljs$core$async$state_machine__44300__auto__ = null;
var cljs$core$async$state_machine__44300__auto____0 = (function (){
var statearr_44949 = [null,null,null,null,null,null,null,null];
(statearr_44949[(0)] = cljs$core$async$state_machine__44300__auto__);

(statearr_44949[(1)] = (1));

return statearr_44949;
});
var cljs$core$async$state_machine__44300__auto____1 = (function (state_44931){
while(true){
var ret_value__44301__auto__ = (function (){try{while(true){
var result__44302__auto__ = switch__44299__auto__.call(null,state_44931);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44302__auto__;
}
break;
}
}catch (e44950){if((e44950 instanceof Object)){
var ex__44303__auto__ = e44950;
var statearr_44951_44968 = state_44931;
(statearr_44951_44968[(5)] = ex__44303__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44931);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44950;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44969 = state_44931;
state_44931 = G__44969;
continue;
} else {
return ret_value__44301__auto__;
}
break;
}
});
cljs$core$async$state_machine__44300__auto__ = function(state_44931){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44300__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44300__auto____1.call(this,state_44931);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__44300__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44300__auto____0;
cljs$core$async$state_machine__44300__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44300__auto____1;
return cljs$core$async$state_machine__44300__auto__;
})()
;})(switch__44299__auto__,c__44387__auto__))
})();
var state__44389__auto__ = (function (){var statearr_44952 = f__44388__auto__.call(null);
(statearr_44952[(6)] = c__44387__auto__);

return statearr_44952;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44389__auto__);
});})(c__44387__auto__))
);

return c__44387__auto__;
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
var x__37426__auto__ = (((_ == null))?null:_);
var m__37427__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__37426__auto__)]);
if(!((m__37427__auto__ == null))){
return m__37427__auto__.call(null,_);
} else {
var m__37427__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__37427__auto____$1 == null))){
return m__37427__auto____$1.call(null,_);
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
var x__37426__auto__ = (((m == null))?null:m);
var m__37427__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__37426__auto__)]);
if(!((m__37427__auto__ == null))){
return m__37427__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__37427__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__37427__auto____$1 == null))){
return m__37427__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__37426__auto__ = (((m == null))?null:m);
var m__37427__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__37426__auto__)]);
if(!((m__37427__auto__ == null))){
return m__37427__auto__.call(null,m,ch);
} else {
var m__37427__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__37427__auto____$1 == null))){
return m__37427__auto____$1.call(null,m,ch);
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
var x__37426__auto__ = (((m == null))?null:m);
var m__37427__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__37426__auto__)]);
if(!((m__37427__auto__ == null))){
return m__37427__auto__.call(null,m);
} else {
var m__37427__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__37427__auto____$1 == null))){
return m__37427__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async44970 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44970 = (function (ch,cs,meta44971){
this.ch = ch;
this.cs = cs;
this.meta44971 = meta44971;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async44970.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_44972,meta44971__$1){
var self__ = this;
var _44972__$1 = this;
return (new cljs.core.async.t_cljs$core$async44970(self__.ch,self__.cs,meta44971__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async44970.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_44972){
var self__ = this;
var _44972__$1 = this;
return self__.meta44971;
});})(cs))
;

cljs.core.async.t_cljs$core$async44970.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44970.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async44970.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44970.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async44970.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async44970.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async44970.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta44971","meta44971",-1365651901,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async44970.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44970.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44970";

cljs.core.async.t_cljs$core$async44970.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__37368__auto__,writer__37369__auto__,opt__37370__auto__){
return cljs.core._write.call(null,writer__37369__auto__,"cljs.core.async/t_cljs$core$async44970");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async44970 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async44970(ch__$1,cs__$1,meta44971){
return (new cljs.core.async.t_cljs$core$async44970(ch__$1,cs__$1,meta44971));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async44970(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__44387__auto___45192 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44387__auto___45192,cs,m,dchan,dctr,done){
return (function (){
var f__44388__auto__ = (function (){var switch__44299__auto__ = ((function (c__44387__auto___45192,cs,m,dchan,dctr,done){
return (function (state_45107){
var state_val_45108 = (state_45107[(1)]);
if((state_val_45108 === (7))){
var inst_45103 = (state_45107[(2)]);
var state_45107__$1 = state_45107;
var statearr_45109_45193 = state_45107__$1;
(statearr_45109_45193[(2)] = inst_45103);

(statearr_45109_45193[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45108 === (20))){
var inst_45006 = (state_45107[(7)]);
var inst_45018 = cljs.core.first.call(null,inst_45006);
var inst_45019 = cljs.core.nth.call(null,inst_45018,(0),null);
var inst_45020 = cljs.core.nth.call(null,inst_45018,(1),null);
var state_45107__$1 = (function (){var statearr_45110 = state_45107;
(statearr_45110[(8)] = inst_45019);

return statearr_45110;
})();
if(cljs.core.truth_(inst_45020)){
var statearr_45111_45194 = state_45107__$1;
(statearr_45111_45194[(1)] = (22));

} else {
var statearr_45112_45195 = state_45107__$1;
(statearr_45112_45195[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45108 === (27))){
var inst_45055 = (state_45107[(9)]);
var inst_44975 = (state_45107[(10)]);
var inst_45048 = (state_45107[(11)]);
var inst_45050 = (state_45107[(12)]);
var inst_45055__$1 = cljs.core._nth.call(null,inst_45048,inst_45050);
var inst_45056 = cljs.core.async.put_BANG_.call(null,inst_45055__$1,inst_44975,done);
var state_45107__$1 = (function (){var statearr_45113 = state_45107;
(statearr_45113[(9)] = inst_45055__$1);

return statearr_45113;
})();
if(cljs.core.truth_(inst_45056)){
var statearr_45114_45196 = state_45107__$1;
(statearr_45114_45196[(1)] = (30));

} else {
var statearr_45115_45197 = state_45107__$1;
(statearr_45115_45197[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45108 === (1))){
var state_45107__$1 = state_45107;
var statearr_45116_45198 = state_45107__$1;
(statearr_45116_45198[(2)] = null);

(statearr_45116_45198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45108 === (24))){
var inst_45006 = (state_45107[(7)]);
var inst_45025 = (state_45107[(2)]);
var inst_45026 = cljs.core.next.call(null,inst_45006);
var inst_44984 = inst_45026;
var inst_44985 = null;
var inst_44986 = (0);
var inst_44987 = (0);
var state_45107__$1 = (function (){var statearr_45117 = state_45107;
(statearr_45117[(13)] = inst_44985);

(statearr_45117[(14)] = inst_44986);

(statearr_45117[(15)] = inst_44984);

(statearr_45117[(16)] = inst_44987);

(statearr_45117[(17)] = inst_45025);

return statearr_45117;
})();
var statearr_45118_45199 = state_45107__$1;
(statearr_45118_45199[(2)] = null);

(statearr_45118_45199[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45108 === (39))){
var state_45107__$1 = state_45107;
var statearr_45122_45200 = state_45107__$1;
(statearr_45122_45200[(2)] = null);

(statearr_45122_45200[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45108 === (4))){
var inst_44975 = (state_45107[(10)]);
var inst_44975__$1 = (state_45107[(2)]);
var inst_44976 = (inst_44975__$1 == null);
var state_45107__$1 = (function (){var statearr_45123 = state_45107;
(statearr_45123[(10)] = inst_44975__$1);

return statearr_45123;
})();
if(cljs.core.truth_(inst_44976)){
var statearr_45124_45201 = state_45107__$1;
(statearr_45124_45201[(1)] = (5));

} else {
var statearr_45125_45202 = state_45107__$1;
(statearr_45125_45202[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45108 === (15))){
var inst_44985 = (state_45107[(13)]);
var inst_44986 = (state_45107[(14)]);
var inst_44984 = (state_45107[(15)]);
var inst_44987 = (state_45107[(16)]);
var inst_45002 = (state_45107[(2)]);
var inst_45003 = (inst_44987 + (1));
var tmp45119 = inst_44985;
var tmp45120 = inst_44986;
var tmp45121 = inst_44984;
var inst_44984__$1 = tmp45121;
var inst_44985__$1 = tmp45119;
var inst_44986__$1 = tmp45120;
var inst_44987__$1 = inst_45003;
var state_45107__$1 = (function (){var statearr_45126 = state_45107;
(statearr_45126[(13)] = inst_44985__$1);

(statearr_45126[(14)] = inst_44986__$1);

(statearr_45126[(15)] = inst_44984__$1);

(statearr_45126[(16)] = inst_44987__$1);

(statearr_45126[(18)] = inst_45002);

return statearr_45126;
})();
var statearr_45127_45203 = state_45107__$1;
(statearr_45127_45203[(2)] = null);

(statearr_45127_45203[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45108 === (21))){
var inst_45029 = (state_45107[(2)]);
var state_45107__$1 = state_45107;
var statearr_45131_45204 = state_45107__$1;
(statearr_45131_45204[(2)] = inst_45029);

(statearr_45131_45204[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45108 === (31))){
var inst_45055 = (state_45107[(9)]);
var inst_45059 = done.call(null,null);
var inst_45060 = cljs.core.async.untap_STAR_.call(null,m,inst_45055);
var state_45107__$1 = (function (){var statearr_45132 = state_45107;
(statearr_45132[(19)] = inst_45059);

return statearr_45132;
})();
var statearr_45133_45205 = state_45107__$1;
(statearr_45133_45205[(2)] = inst_45060);

(statearr_45133_45205[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45108 === (32))){
var inst_45049 = (state_45107[(20)]);
var inst_45047 = (state_45107[(21)]);
var inst_45048 = (state_45107[(11)]);
var inst_45050 = (state_45107[(12)]);
var inst_45062 = (state_45107[(2)]);
var inst_45063 = (inst_45050 + (1));
var tmp45128 = inst_45049;
var tmp45129 = inst_45047;
var tmp45130 = inst_45048;
var inst_45047__$1 = tmp45129;
var inst_45048__$1 = tmp45130;
var inst_45049__$1 = tmp45128;
var inst_45050__$1 = inst_45063;
var state_45107__$1 = (function (){var statearr_45134 = state_45107;
(statearr_45134[(20)] = inst_45049__$1);

(statearr_45134[(21)] = inst_45047__$1);

(statearr_45134[(11)] = inst_45048__$1);

(statearr_45134[(12)] = inst_45050__$1);

(statearr_45134[(22)] = inst_45062);

return statearr_45134;
})();
var statearr_45135_45206 = state_45107__$1;
(statearr_45135_45206[(2)] = null);

(statearr_45135_45206[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45108 === (40))){
var inst_45075 = (state_45107[(23)]);
var inst_45079 = done.call(null,null);
var inst_45080 = cljs.core.async.untap_STAR_.call(null,m,inst_45075);
var state_45107__$1 = (function (){var statearr_45136 = state_45107;
(statearr_45136[(24)] = inst_45079);

return statearr_45136;
})();
var statearr_45137_45207 = state_45107__$1;
(statearr_45137_45207[(2)] = inst_45080);

(statearr_45137_45207[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45108 === (33))){
var inst_45066 = (state_45107[(25)]);
var inst_45068 = cljs.core.chunked_seq_QMARK_.call(null,inst_45066);
var state_45107__$1 = state_45107;
if(inst_45068){
var statearr_45138_45208 = state_45107__$1;
(statearr_45138_45208[(1)] = (36));

} else {
var statearr_45139_45209 = state_45107__$1;
(statearr_45139_45209[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45108 === (13))){
var inst_44996 = (state_45107[(26)]);
var inst_44999 = cljs.core.async.close_BANG_.call(null,inst_44996);
var state_45107__$1 = state_45107;
var statearr_45140_45210 = state_45107__$1;
(statearr_45140_45210[(2)] = inst_44999);

(statearr_45140_45210[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45108 === (22))){
var inst_45019 = (state_45107[(8)]);
var inst_45022 = cljs.core.async.close_BANG_.call(null,inst_45019);
var state_45107__$1 = state_45107;
var statearr_45141_45211 = state_45107__$1;
(statearr_45141_45211[(2)] = inst_45022);

(statearr_45141_45211[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45108 === (36))){
var inst_45066 = (state_45107[(25)]);
var inst_45070 = cljs.core.chunk_first.call(null,inst_45066);
var inst_45071 = cljs.core.chunk_rest.call(null,inst_45066);
var inst_45072 = cljs.core.count.call(null,inst_45070);
var inst_45047 = inst_45071;
var inst_45048 = inst_45070;
var inst_45049 = inst_45072;
var inst_45050 = (0);
var state_45107__$1 = (function (){var statearr_45142 = state_45107;
(statearr_45142[(20)] = inst_45049);

(statearr_45142[(21)] = inst_45047);

(statearr_45142[(11)] = inst_45048);

(statearr_45142[(12)] = inst_45050);

return statearr_45142;
})();
var statearr_45143_45212 = state_45107__$1;
(statearr_45143_45212[(2)] = null);

(statearr_45143_45212[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45108 === (41))){
var inst_45066 = (state_45107[(25)]);
var inst_45082 = (state_45107[(2)]);
var inst_45083 = cljs.core.next.call(null,inst_45066);
var inst_45047 = inst_45083;
var inst_45048 = null;
var inst_45049 = (0);
var inst_45050 = (0);
var state_45107__$1 = (function (){var statearr_45144 = state_45107;
(statearr_45144[(20)] = inst_45049);

(statearr_45144[(21)] = inst_45047);

(statearr_45144[(11)] = inst_45048);

(statearr_45144[(12)] = inst_45050);

(statearr_45144[(27)] = inst_45082);

return statearr_45144;
})();
var statearr_45145_45213 = state_45107__$1;
(statearr_45145_45213[(2)] = null);

(statearr_45145_45213[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45108 === (43))){
var state_45107__$1 = state_45107;
var statearr_45146_45214 = state_45107__$1;
(statearr_45146_45214[(2)] = null);

(statearr_45146_45214[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45108 === (29))){
var inst_45091 = (state_45107[(2)]);
var state_45107__$1 = state_45107;
var statearr_45147_45215 = state_45107__$1;
(statearr_45147_45215[(2)] = inst_45091);

(statearr_45147_45215[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45108 === (44))){
var inst_45100 = (state_45107[(2)]);
var state_45107__$1 = (function (){var statearr_45148 = state_45107;
(statearr_45148[(28)] = inst_45100);

return statearr_45148;
})();
var statearr_45149_45216 = state_45107__$1;
(statearr_45149_45216[(2)] = null);

(statearr_45149_45216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45108 === (6))){
var inst_45039 = (state_45107[(29)]);
var inst_45038 = cljs.core.deref.call(null,cs);
var inst_45039__$1 = cljs.core.keys.call(null,inst_45038);
var inst_45040 = cljs.core.count.call(null,inst_45039__$1);
var inst_45041 = cljs.core.reset_BANG_.call(null,dctr,inst_45040);
var inst_45046 = cljs.core.seq.call(null,inst_45039__$1);
var inst_45047 = inst_45046;
var inst_45048 = null;
var inst_45049 = (0);
var inst_45050 = (0);
var state_45107__$1 = (function (){var statearr_45150 = state_45107;
(statearr_45150[(20)] = inst_45049);

(statearr_45150[(21)] = inst_45047);

(statearr_45150[(30)] = inst_45041);

(statearr_45150[(11)] = inst_45048);

(statearr_45150[(29)] = inst_45039__$1);

(statearr_45150[(12)] = inst_45050);

return statearr_45150;
})();
var statearr_45151_45217 = state_45107__$1;
(statearr_45151_45217[(2)] = null);

(statearr_45151_45217[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45108 === (28))){
var inst_45047 = (state_45107[(21)]);
var inst_45066 = (state_45107[(25)]);
var inst_45066__$1 = cljs.core.seq.call(null,inst_45047);
var state_45107__$1 = (function (){var statearr_45152 = state_45107;
(statearr_45152[(25)] = inst_45066__$1);

return statearr_45152;
})();
if(inst_45066__$1){
var statearr_45153_45218 = state_45107__$1;
(statearr_45153_45218[(1)] = (33));

} else {
var statearr_45154_45219 = state_45107__$1;
(statearr_45154_45219[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45108 === (25))){
var inst_45049 = (state_45107[(20)]);
var inst_45050 = (state_45107[(12)]);
var inst_45052 = (inst_45050 < inst_45049);
var inst_45053 = inst_45052;
var state_45107__$1 = state_45107;
if(cljs.core.truth_(inst_45053)){
var statearr_45155_45220 = state_45107__$1;
(statearr_45155_45220[(1)] = (27));

} else {
var statearr_45156_45221 = state_45107__$1;
(statearr_45156_45221[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45108 === (34))){
var state_45107__$1 = state_45107;
var statearr_45157_45222 = state_45107__$1;
(statearr_45157_45222[(2)] = null);

(statearr_45157_45222[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45108 === (17))){
var state_45107__$1 = state_45107;
var statearr_45158_45223 = state_45107__$1;
(statearr_45158_45223[(2)] = null);

(statearr_45158_45223[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45108 === (3))){
var inst_45105 = (state_45107[(2)]);
var state_45107__$1 = state_45107;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45107__$1,inst_45105);
} else {
if((state_val_45108 === (12))){
var inst_45034 = (state_45107[(2)]);
var state_45107__$1 = state_45107;
var statearr_45159_45224 = state_45107__$1;
(statearr_45159_45224[(2)] = inst_45034);

(statearr_45159_45224[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45108 === (2))){
var state_45107__$1 = state_45107;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45107__$1,(4),ch);
} else {
if((state_val_45108 === (23))){
var state_45107__$1 = state_45107;
var statearr_45160_45225 = state_45107__$1;
(statearr_45160_45225[(2)] = null);

(statearr_45160_45225[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45108 === (35))){
var inst_45089 = (state_45107[(2)]);
var state_45107__$1 = state_45107;
var statearr_45161_45226 = state_45107__$1;
(statearr_45161_45226[(2)] = inst_45089);

(statearr_45161_45226[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45108 === (19))){
var inst_45006 = (state_45107[(7)]);
var inst_45010 = cljs.core.chunk_first.call(null,inst_45006);
var inst_45011 = cljs.core.chunk_rest.call(null,inst_45006);
var inst_45012 = cljs.core.count.call(null,inst_45010);
var inst_44984 = inst_45011;
var inst_44985 = inst_45010;
var inst_44986 = inst_45012;
var inst_44987 = (0);
var state_45107__$1 = (function (){var statearr_45162 = state_45107;
(statearr_45162[(13)] = inst_44985);

(statearr_45162[(14)] = inst_44986);

(statearr_45162[(15)] = inst_44984);

(statearr_45162[(16)] = inst_44987);

return statearr_45162;
})();
var statearr_45163_45227 = state_45107__$1;
(statearr_45163_45227[(2)] = null);

(statearr_45163_45227[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45108 === (11))){
var inst_44984 = (state_45107[(15)]);
var inst_45006 = (state_45107[(7)]);
var inst_45006__$1 = cljs.core.seq.call(null,inst_44984);
var state_45107__$1 = (function (){var statearr_45164 = state_45107;
(statearr_45164[(7)] = inst_45006__$1);

return statearr_45164;
})();
if(inst_45006__$1){
var statearr_45165_45228 = state_45107__$1;
(statearr_45165_45228[(1)] = (16));

} else {
var statearr_45166_45229 = state_45107__$1;
(statearr_45166_45229[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45108 === (9))){
var inst_45036 = (state_45107[(2)]);
var state_45107__$1 = state_45107;
var statearr_45167_45230 = state_45107__$1;
(statearr_45167_45230[(2)] = inst_45036);

(statearr_45167_45230[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45108 === (5))){
var inst_44982 = cljs.core.deref.call(null,cs);
var inst_44983 = cljs.core.seq.call(null,inst_44982);
var inst_44984 = inst_44983;
var inst_44985 = null;
var inst_44986 = (0);
var inst_44987 = (0);
var state_45107__$1 = (function (){var statearr_45168 = state_45107;
(statearr_45168[(13)] = inst_44985);

(statearr_45168[(14)] = inst_44986);

(statearr_45168[(15)] = inst_44984);

(statearr_45168[(16)] = inst_44987);

return statearr_45168;
})();
var statearr_45169_45231 = state_45107__$1;
(statearr_45169_45231[(2)] = null);

(statearr_45169_45231[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45108 === (14))){
var state_45107__$1 = state_45107;
var statearr_45170_45232 = state_45107__$1;
(statearr_45170_45232[(2)] = null);

(statearr_45170_45232[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45108 === (45))){
var inst_45097 = (state_45107[(2)]);
var state_45107__$1 = state_45107;
var statearr_45171_45233 = state_45107__$1;
(statearr_45171_45233[(2)] = inst_45097);

(statearr_45171_45233[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45108 === (26))){
var inst_45039 = (state_45107[(29)]);
var inst_45093 = (state_45107[(2)]);
var inst_45094 = cljs.core.seq.call(null,inst_45039);
var state_45107__$1 = (function (){var statearr_45172 = state_45107;
(statearr_45172[(31)] = inst_45093);

return statearr_45172;
})();
if(inst_45094){
var statearr_45173_45234 = state_45107__$1;
(statearr_45173_45234[(1)] = (42));

} else {
var statearr_45174_45235 = state_45107__$1;
(statearr_45174_45235[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45108 === (16))){
var inst_45006 = (state_45107[(7)]);
var inst_45008 = cljs.core.chunked_seq_QMARK_.call(null,inst_45006);
var state_45107__$1 = state_45107;
if(inst_45008){
var statearr_45175_45236 = state_45107__$1;
(statearr_45175_45236[(1)] = (19));

} else {
var statearr_45176_45237 = state_45107__$1;
(statearr_45176_45237[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45108 === (38))){
var inst_45086 = (state_45107[(2)]);
var state_45107__$1 = state_45107;
var statearr_45177_45238 = state_45107__$1;
(statearr_45177_45238[(2)] = inst_45086);

(statearr_45177_45238[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45108 === (30))){
var state_45107__$1 = state_45107;
var statearr_45178_45239 = state_45107__$1;
(statearr_45178_45239[(2)] = null);

(statearr_45178_45239[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45108 === (10))){
var inst_44985 = (state_45107[(13)]);
var inst_44987 = (state_45107[(16)]);
var inst_44995 = cljs.core._nth.call(null,inst_44985,inst_44987);
var inst_44996 = cljs.core.nth.call(null,inst_44995,(0),null);
var inst_44997 = cljs.core.nth.call(null,inst_44995,(1),null);
var state_45107__$1 = (function (){var statearr_45179 = state_45107;
(statearr_45179[(26)] = inst_44996);

return statearr_45179;
})();
if(cljs.core.truth_(inst_44997)){
var statearr_45180_45240 = state_45107__$1;
(statearr_45180_45240[(1)] = (13));

} else {
var statearr_45181_45241 = state_45107__$1;
(statearr_45181_45241[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45108 === (18))){
var inst_45032 = (state_45107[(2)]);
var state_45107__$1 = state_45107;
var statearr_45182_45242 = state_45107__$1;
(statearr_45182_45242[(2)] = inst_45032);

(statearr_45182_45242[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45108 === (42))){
var state_45107__$1 = state_45107;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45107__$1,(45),dchan);
} else {
if((state_val_45108 === (37))){
var inst_44975 = (state_45107[(10)]);
var inst_45075 = (state_45107[(23)]);
var inst_45066 = (state_45107[(25)]);
var inst_45075__$1 = cljs.core.first.call(null,inst_45066);
var inst_45076 = cljs.core.async.put_BANG_.call(null,inst_45075__$1,inst_44975,done);
var state_45107__$1 = (function (){var statearr_45183 = state_45107;
(statearr_45183[(23)] = inst_45075__$1);

return statearr_45183;
})();
if(cljs.core.truth_(inst_45076)){
var statearr_45184_45243 = state_45107__$1;
(statearr_45184_45243[(1)] = (39));

} else {
var statearr_45185_45244 = state_45107__$1;
(statearr_45185_45244[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45108 === (8))){
var inst_44986 = (state_45107[(14)]);
var inst_44987 = (state_45107[(16)]);
var inst_44989 = (inst_44987 < inst_44986);
var inst_44990 = inst_44989;
var state_45107__$1 = state_45107;
if(cljs.core.truth_(inst_44990)){
var statearr_45186_45245 = state_45107__$1;
(statearr_45186_45245[(1)] = (10));

} else {
var statearr_45187_45246 = state_45107__$1;
(statearr_45187_45246[(1)] = (11));

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
});})(c__44387__auto___45192,cs,m,dchan,dctr,done))
;
return ((function (switch__44299__auto__,c__44387__auto___45192,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__44300__auto__ = null;
var cljs$core$async$mult_$_state_machine__44300__auto____0 = (function (){
var statearr_45188 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45188[(0)] = cljs$core$async$mult_$_state_machine__44300__auto__);

(statearr_45188[(1)] = (1));

return statearr_45188;
});
var cljs$core$async$mult_$_state_machine__44300__auto____1 = (function (state_45107){
while(true){
var ret_value__44301__auto__ = (function (){try{while(true){
var result__44302__auto__ = switch__44299__auto__.call(null,state_45107);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44302__auto__;
}
break;
}
}catch (e45189){if((e45189 instanceof Object)){
var ex__44303__auto__ = e45189;
var statearr_45190_45247 = state_45107;
(statearr_45190_45247[(5)] = ex__44303__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45107);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45189;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45248 = state_45107;
state_45107 = G__45248;
continue;
} else {
return ret_value__44301__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__44300__auto__ = function(state_45107){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__44300__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__44300__auto____1.call(this,state_45107);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__44300__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__44300__auto____0;
cljs$core$async$mult_$_state_machine__44300__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__44300__auto____1;
return cljs$core$async$mult_$_state_machine__44300__auto__;
})()
;})(switch__44299__auto__,c__44387__auto___45192,cs,m,dchan,dctr,done))
})();
var state__44389__auto__ = (function (){var statearr_45191 = f__44388__auto__.call(null);
(statearr_45191[(6)] = c__44387__auto___45192);

return statearr_45191;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44389__auto__);
});})(c__44387__auto___45192,cs,m,dchan,dctr,done))
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
var G__45250 = arguments.length;
switch (G__45250) {
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
var x__37426__auto__ = (((m == null))?null:m);
var m__37427__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__37426__auto__)]);
if(!((m__37427__auto__ == null))){
return m__37427__auto__.call(null,m,ch);
} else {
var m__37427__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__37427__auto____$1 == null))){
return m__37427__auto____$1.call(null,m,ch);
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
var x__37426__auto__ = (((m == null))?null:m);
var m__37427__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__37426__auto__)]);
if(!((m__37427__auto__ == null))){
return m__37427__auto__.call(null,m,ch);
} else {
var m__37427__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__37427__auto____$1 == null))){
return m__37427__auto____$1.call(null,m,ch);
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
var x__37426__auto__ = (((m == null))?null:m);
var m__37427__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__37426__auto__)]);
if(!((m__37427__auto__ == null))){
return m__37427__auto__.call(null,m);
} else {
var m__37427__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__37427__auto____$1 == null))){
return m__37427__auto____$1.call(null,m);
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
var x__37426__auto__ = (((m == null))?null:m);
var m__37427__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__37426__auto__)]);
if(!((m__37427__auto__ == null))){
return m__37427__auto__.call(null,m,state_map);
} else {
var m__37427__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__37427__auto____$1 == null))){
return m__37427__auto____$1.call(null,m,state_map);
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
var x__37426__auto__ = (((m == null))?null:m);
var m__37427__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__37426__auto__)]);
if(!((m__37427__auto__ == null))){
return m__37427__auto__.call(null,m,mode);
} else {
var m__37427__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__37427__auto____$1 == null))){
return m__37427__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__37889__auto__ = [];
var len__37882__auto___45262 = arguments.length;
var i__37883__auto___45263 = (0);
while(true){
if((i__37883__auto___45263 < len__37882__auto___45262)){
args__37889__auto__.push((arguments[i__37883__auto___45263]));

var G__45264 = (i__37883__auto___45263 + (1));
i__37883__auto___45263 = G__45264;
continue;
} else {
}
break;
}

var argseq__37890__auto__ = ((((3) < args__37889__auto__.length))?(new cljs.core.IndexedSeq(args__37889__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__37890__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__45256){
var map__45257 = p__45256;
var map__45257__$1 = ((((!((map__45257 == null)))?((((map__45257.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45257.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45257):map__45257);
var opts = map__45257__$1;
var statearr_45259_45265 = state;
(statearr_45259_45265[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__45257,map__45257__$1,opts){
return (function (val){
var statearr_45260_45266 = state;
(statearr_45260_45266[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__45257,map__45257__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_45261_45267 = state;
(statearr_45261_45267[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq45252){
var G__45253 = cljs.core.first.call(null,seq45252);
var seq45252__$1 = cljs.core.next.call(null,seq45252);
var G__45254 = cljs.core.first.call(null,seq45252__$1);
var seq45252__$2 = cljs.core.next.call(null,seq45252__$1);
var G__45255 = cljs.core.first.call(null,seq45252__$2);
var seq45252__$3 = cljs.core.next.call(null,seq45252__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__45253,G__45254,G__45255,seq45252__$3);
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
if(typeof cljs.core.async.t_cljs$core$async45268 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45268 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta45269){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta45269 = meta45269;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45268.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_45270,meta45269__$1){
var self__ = this;
var _45270__$1 = this;
return (new cljs.core.async.t_cljs$core$async45268(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta45269__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45268.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_45270){
var self__ = this;
var _45270__$1 = this;
return self__.meta45269;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45268.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45268.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45268.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45268.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45268.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45268.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45268.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45268.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async45268.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta45269","meta45269",-1134894382,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45268.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45268.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45268";

cljs.core.async.t_cljs$core$async45268.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__37368__auto__,writer__37369__auto__,opt__37370__auto__){
return cljs.core._write.call(null,writer__37369__auto__,"cljs.core.async/t_cljs$core$async45268");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async45268 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async45268(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta45269){
return (new cljs.core.async.t_cljs$core$async45268(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta45269));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async45268(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__44387__auto___45432 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44387__auto___45432,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__44388__auto__ = (function (){var switch__44299__auto__ = ((function (c__44387__auto___45432,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_45372){
var state_val_45373 = (state_45372[(1)]);
if((state_val_45373 === (7))){
var inst_45287 = (state_45372[(2)]);
var state_45372__$1 = state_45372;
var statearr_45374_45433 = state_45372__$1;
(statearr_45374_45433[(2)] = inst_45287);

(statearr_45374_45433[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45373 === (20))){
var inst_45299 = (state_45372[(7)]);
var state_45372__$1 = state_45372;
var statearr_45375_45434 = state_45372__$1;
(statearr_45375_45434[(2)] = inst_45299);

(statearr_45375_45434[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45373 === (27))){
var state_45372__$1 = state_45372;
var statearr_45376_45435 = state_45372__$1;
(statearr_45376_45435[(2)] = null);

(statearr_45376_45435[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45373 === (1))){
var inst_45274 = (state_45372[(8)]);
var inst_45274__$1 = calc_state.call(null);
var inst_45276 = (inst_45274__$1 == null);
var inst_45277 = cljs.core.not.call(null,inst_45276);
var state_45372__$1 = (function (){var statearr_45377 = state_45372;
(statearr_45377[(8)] = inst_45274__$1);

return statearr_45377;
})();
if(inst_45277){
var statearr_45378_45436 = state_45372__$1;
(statearr_45378_45436[(1)] = (2));

} else {
var statearr_45379_45437 = state_45372__$1;
(statearr_45379_45437[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45373 === (24))){
var inst_45332 = (state_45372[(9)]);
var inst_45323 = (state_45372[(10)]);
var inst_45346 = (state_45372[(11)]);
var inst_45346__$1 = inst_45323.call(null,inst_45332);
var state_45372__$1 = (function (){var statearr_45380 = state_45372;
(statearr_45380[(11)] = inst_45346__$1);

return statearr_45380;
})();
if(cljs.core.truth_(inst_45346__$1)){
var statearr_45381_45438 = state_45372__$1;
(statearr_45381_45438[(1)] = (29));

} else {
var statearr_45382_45439 = state_45372__$1;
(statearr_45382_45439[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45373 === (4))){
var inst_45290 = (state_45372[(2)]);
var state_45372__$1 = state_45372;
if(cljs.core.truth_(inst_45290)){
var statearr_45383_45440 = state_45372__$1;
(statearr_45383_45440[(1)] = (8));

} else {
var statearr_45384_45441 = state_45372__$1;
(statearr_45384_45441[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45373 === (15))){
var inst_45317 = (state_45372[(2)]);
var state_45372__$1 = state_45372;
if(cljs.core.truth_(inst_45317)){
var statearr_45385_45442 = state_45372__$1;
(statearr_45385_45442[(1)] = (19));

} else {
var statearr_45386_45443 = state_45372__$1;
(statearr_45386_45443[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45373 === (21))){
var inst_45322 = (state_45372[(12)]);
var inst_45322__$1 = (state_45372[(2)]);
var inst_45323 = cljs.core.get.call(null,inst_45322__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_45324 = cljs.core.get.call(null,inst_45322__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_45325 = cljs.core.get.call(null,inst_45322__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_45372__$1 = (function (){var statearr_45387 = state_45372;
(statearr_45387[(13)] = inst_45324);

(statearr_45387[(10)] = inst_45323);

(statearr_45387[(12)] = inst_45322__$1);

return statearr_45387;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_45372__$1,(22),inst_45325);
} else {
if((state_val_45373 === (31))){
var inst_45354 = (state_45372[(2)]);
var state_45372__$1 = state_45372;
if(cljs.core.truth_(inst_45354)){
var statearr_45388_45444 = state_45372__$1;
(statearr_45388_45444[(1)] = (32));

} else {
var statearr_45389_45445 = state_45372__$1;
(statearr_45389_45445[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45373 === (32))){
var inst_45331 = (state_45372[(14)]);
var state_45372__$1 = state_45372;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45372__$1,(35),out,inst_45331);
} else {
if((state_val_45373 === (33))){
var inst_45322 = (state_45372[(12)]);
var inst_45299 = inst_45322;
var state_45372__$1 = (function (){var statearr_45390 = state_45372;
(statearr_45390[(7)] = inst_45299);

return statearr_45390;
})();
var statearr_45391_45446 = state_45372__$1;
(statearr_45391_45446[(2)] = null);

(statearr_45391_45446[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45373 === (13))){
var inst_45299 = (state_45372[(7)]);
var inst_45306 = inst_45299.cljs$lang$protocol_mask$partition0$;
var inst_45307 = (inst_45306 & (64));
var inst_45308 = inst_45299.cljs$core$ISeq$;
var inst_45309 = (cljs.core.PROTOCOL_SENTINEL === inst_45308);
var inst_45310 = (inst_45307) || (inst_45309);
var state_45372__$1 = state_45372;
if(cljs.core.truth_(inst_45310)){
var statearr_45392_45447 = state_45372__$1;
(statearr_45392_45447[(1)] = (16));

} else {
var statearr_45393_45448 = state_45372__$1;
(statearr_45393_45448[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45373 === (22))){
var inst_45332 = (state_45372[(9)]);
var inst_45331 = (state_45372[(14)]);
var inst_45330 = (state_45372[(2)]);
var inst_45331__$1 = cljs.core.nth.call(null,inst_45330,(0),null);
var inst_45332__$1 = cljs.core.nth.call(null,inst_45330,(1),null);
var inst_45333 = (inst_45331__$1 == null);
var inst_45334 = cljs.core._EQ_.call(null,inst_45332__$1,change);
var inst_45335 = (inst_45333) || (inst_45334);
var state_45372__$1 = (function (){var statearr_45394 = state_45372;
(statearr_45394[(9)] = inst_45332__$1);

(statearr_45394[(14)] = inst_45331__$1);

return statearr_45394;
})();
if(cljs.core.truth_(inst_45335)){
var statearr_45395_45449 = state_45372__$1;
(statearr_45395_45449[(1)] = (23));

} else {
var statearr_45396_45450 = state_45372__$1;
(statearr_45396_45450[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45373 === (36))){
var inst_45322 = (state_45372[(12)]);
var inst_45299 = inst_45322;
var state_45372__$1 = (function (){var statearr_45397 = state_45372;
(statearr_45397[(7)] = inst_45299);

return statearr_45397;
})();
var statearr_45398_45451 = state_45372__$1;
(statearr_45398_45451[(2)] = null);

(statearr_45398_45451[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45373 === (29))){
var inst_45346 = (state_45372[(11)]);
var state_45372__$1 = state_45372;
var statearr_45399_45452 = state_45372__$1;
(statearr_45399_45452[(2)] = inst_45346);

(statearr_45399_45452[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45373 === (6))){
var state_45372__$1 = state_45372;
var statearr_45400_45453 = state_45372__$1;
(statearr_45400_45453[(2)] = false);

(statearr_45400_45453[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45373 === (28))){
var inst_45342 = (state_45372[(2)]);
var inst_45343 = calc_state.call(null);
var inst_45299 = inst_45343;
var state_45372__$1 = (function (){var statearr_45401 = state_45372;
(statearr_45401[(15)] = inst_45342);

(statearr_45401[(7)] = inst_45299);

return statearr_45401;
})();
var statearr_45402_45454 = state_45372__$1;
(statearr_45402_45454[(2)] = null);

(statearr_45402_45454[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45373 === (25))){
var inst_45368 = (state_45372[(2)]);
var state_45372__$1 = state_45372;
var statearr_45403_45455 = state_45372__$1;
(statearr_45403_45455[(2)] = inst_45368);

(statearr_45403_45455[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45373 === (34))){
var inst_45366 = (state_45372[(2)]);
var state_45372__$1 = state_45372;
var statearr_45404_45456 = state_45372__$1;
(statearr_45404_45456[(2)] = inst_45366);

(statearr_45404_45456[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45373 === (17))){
var state_45372__$1 = state_45372;
var statearr_45405_45457 = state_45372__$1;
(statearr_45405_45457[(2)] = false);

(statearr_45405_45457[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45373 === (3))){
var state_45372__$1 = state_45372;
var statearr_45406_45458 = state_45372__$1;
(statearr_45406_45458[(2)] = false);

(statearr_45406_45458[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45373 === (12))){
var inst_45370 = (state_45372[(2)]);
var state_45372__$1 = state_45372;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45372__$1,inst_45370);
} else {
if((state_val_45373 === (2))){
var inst_45274 = (state_45372[(8)]);
var inst_45279 = inst_45274.cljs$lang$protocol_mask$partition0$;
var inst_45280 = (inst_45279 & (64));
var inst_45281 = inst_45274.cljs$core$ISeq$;
var inst_45282 = (cljs.core.PROTOCOL_SENTINEL === inst_45281);
var inst_45283 = (inst_45280) || (inst_45282);
var state_45372__$1 = state_45372;
if(cljs.core.truth_(inst_45283)){
var statearr_45407_45459 = state_45372__$1;
(statearr_45407_45459[(1)] = (5));

} else {
var statearr_45408_45460 = state_45372__$1;
(statearr_45408_45460[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45373 === (23))){
var inst_45331 = (state_45372[(14)]);
var inst_45337 = (inst_45331 == null);
var state_45372__$1 = state_45372;
if(cljs.core.truth_(inst_45337)){
var statearr_45409_45461 = state_45372__$1;
(statearr_45409_45461[(1)] = (26));

} else {
var statearr_45410_45462 = state_45372__$1;
(statearr_45410_45462[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45373 === (35))){
var inst_45357 = (state_45372[(2)]);
var state_45372__$1 = state_45372;
if(cljs.core.truth_(inst_45357)){
var statearr_45411_45463 = state_45372__$1;
(statearr_45411_45463[(1)] = (36));

} else {
var statearr_45412_45464 = state_45372__$1;
(statearr_45412_45464[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45373 === (19))){
var inst_45299 = (state_45372[(7)]);
var inst_45319 = cljs.core.apply.call(null,cljs.core.hash_map,inst_45299);
var state_45372__$1 = state_45372;
var statearr_45413_45465 = state_45372__$1;
(statearr_45413_45465[(2)] = inst_45319);

(statearr_45413_45465[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45373 === (11))){
var inst_45299 = (state_45372[(7)]);
var inst_45303 = (inst_45299 == null);
var inst_45304 = cljs.core.not.call(null,inst_45303);
var state_45372__$1 = state_45372;
if(inst_45304){
var statearr_45414_45466 = state_45372__$1;
(statearr_45414_45466[(1)] = (13));

} else {
var statearr_45415_45467 = state_45372__$1;
(statearr_45415_45467[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45373 === (9))){
var inst_45274 = (state_45372[(8)]);
var state_45372__$1 = state_45372;
var statearr_45416_45468 = state_45372__$1;
(statearr_45416_45468[(2)] = inst_45274);

(statearr_45416_45468[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45373 === (5))){
var state_45372__$1 = state_45372;
var statearr_45417_45469 = state_45372__$1;
(statearr_45417_45469[(2)] = true);

(statearr_45417_45469[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45373 === (14))){
var state_45372__$1 = state_45372;
var statearr_45418_45470 = state_45372__$1;
(statearr_45418_45470[(2)] = false);

(statearr_45418_45470[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45373 === (26))){
var inst_45332 = (state_45372[(9)]);
var inst_45339 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_45332);
var state_45372__$1 = state_45372;
var statearr_45419_45471 = state_45372__$1;
(statearr_45419_45471[(2)] = inst_45339);

(statearr_45419_45471[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45373 === (16))){
var state_45372__$1 = state_45372;
var statearr_45420_45472 = state_45372__$1;
(statearr_45420_45472[(2)] = true);

(statearr_45420_45472[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45373 === (38))){
var inst_45362 = (state_45372[(2)]);
var state_45372__$1 = state_45372;
var statearr_45421_45473 = state_45372__$1;
(statearr_45421_45473[(2)] = inst_45362);

(statearr_45421_45473[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45373 === (30))){
var inst_45324 = (state_45372[(13)]);
var inst_45332 = (state_45372[(9)]);
var inst_45323 = (state_45372[(10)]);
var inst_45349 = cljs.core.empty_QMARK_.call(null,inst_45323);
var inst_45350 = inst_45324.call(null,inst_45332);
var inst_45351 = cljs.core.not.call(null,inst_45350);
var inst_45352 = (inst_45349) && (inst_45351);
var state_45372__$1 = state_45372;
var statearr_45422_45474 = state_45372__$1;
(statearr_45422_45474[(2)] = inst_45352);

(statearr_45422_45474[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45373 === (10))){
var inst_45274 = (state_45372[(8)]);
var inst_45295 = (state_45372[(2)]);
var inst_45296 = cljs.core.get.call(null,inst_45295,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_45297 = cljs.core.get.call(null,inst_45295,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_45298 = cljs.core.get.call(null,inst_45295,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_45299 = inst_45274;
var state_45372__$1 = (function (){var statearr_45423 = state_45372;
(statearr_45423[(7)] = inst_45299);

(statearr_45423[(16)] = inst_45297);

(statearr_45423[(17)] = inst_45296);

(statearr_45423[(18)] = inst_45298);

return statearr_45423;
})();
var statearr_45424_45475 = state_45372__$1;
(statearr_45424_45475[(2)] = null);

(statearr_45424_45475[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45373 === (18))){
var inst_45314 = (state_45372[(2)]);
var state_45372__$1 = state_45372;
var statearr_45425_45476 = state_45372__$1;
(statearr_45425_45476[(2)] = inst_45314);

(statearr_45425_45476[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45373 === (37))){
var state_45372__$1 = state_45372;
var statearr_45426_45477 = state_45372__$1;
(statearr_45426_45477[(2)] = null);

(statearr_45426_45477[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45373 === (8))){
var inst_45274 = (state_45372[(8)]);
var inst_45292 = cljs.core.apply.call(null,cljs.core.hash_map,inst_45274);
var state_45372__$1 = state_45372;
var statearr_45427_45478 = state_45372__$1;
(statearr_45427_45478[(2)] = inst_45292);

(statearr_45427_45478[(1)] = (10));


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
});})(c__44387__auto___45432,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__44299__auto__,c__44387__auto___45432,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__44300__auto__ = null;
var cljs$core$async$mix_$_state_machine__44300__auto____0 = (function (){
var statearr_45428 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45428[(0)] = cljs$core$async$mix_$_state_machine__44300__auto__);

(statearr_45428[(1)] = (1));

return statearr_45428;
});
var cljs$core$async$mix_$_state_machine__44300__auto____1 = (function (state_45372){
while(true){
var ret_value__44301__auto__ = (function (){try{while(true){
var result__44302__auto__ = switch__44299__auto__.call(null,state_45372);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44302__auto__;
}
break;
}
}catch (e45429){if((e45429 instanceof Object)){
var ex__44303__auto__ = e45429;
var statearr_45430_45479 = state_45372;
(statearr_45430_45479[(5)] = ex__44303__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45372);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45429;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45480 = state_45372;
state_45372 = G__45480;
continue;
} else {
return ret_value__44301__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__44300__auto__ = function(state_45372){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__44300__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__44300__auto____1.call(this,state_45372);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__44300__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__44300__auto____0;
cljs$core$async$mix_$_state_machine__44300__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__44300__auto____1;
return cljs$core$async$mix_$_state_machine__44300__auto__;
})()
;})(switch__44299__auto__,c__44387__auto___45432,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__44389__auto__ = (function (){var statearr_45431 = f__44388__auto__.call(null);
(statearr_45431[(6)] = c__44387__auto___45432);

return statearr_45431;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44389__auto__);
});})(c__44387__auto___45432,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__37426__auto__ = (((p == null))?null:p);
var m__37427__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__37426__auto__)]);
if(!((m__37427__auto__ == null))){
return m__37427__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__37427__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__37427__auto____$1 == null))){
return m__37427__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__37426__auto__ = (((p == null))?null:p);
var m__37427__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__37426__auto__)]);
if(!((m__37427__auto__ == null))){
return m__37427__auto__.call(null,p,v,ch);
} else {
var m__37427__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__37427__auto____$1 == null))){
return m__37427__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__45482 = arguments.length;
switch (G__45482) {
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
var x__37426__auto__ = (((p == null))?null:p);
var m__37427__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__37426__auto__)]);
if(!((m__37427__auto__ == null))){
return m__37427__auto__.call(null,p);
} else {
var m__37427__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__37427__auto____$1 == null))){
return m__37427__auto____$1.call(null,p);
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
var x__37426__auto__ = (((p == null))?null:p);
var m__37427__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__37426__auto__)]);
if(!((m__37427__auto__ == null))){
return m__37427__auto__.call(null,p,v);
} else {
var m__37427__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__37427__auto____$1 == null))){
return m__37427__auto____$1.call(null,p,v);
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
var G__45486 = arguments.length;
switch (G__45486) {
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
var or__36757__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__36757__auto__)){
return or__36757__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__36757__auto__,mults){
return (function (p1__45484_SHARP_){
if(cljs.core.truth_(p1__45484_SHARP_.call(null,topic))){
return p1__45484_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__45484_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__36757__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async45487 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45487 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta45488){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta45488 = meta45488;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45487.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_45489,meta45488__$1){
var self__ = this;
var _45489__$1 = this;
return (new cljs.core.async.t_cljs$core$async45487(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta45488__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45487.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_45489){
var self__ = this;
var _45489__$1 = this;
return self__.meta45488;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45487.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45487.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45487.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45487.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45487.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async45487.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45487.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45487.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta45488","meta45488",-1596112907,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45487.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45487.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45487";

cljs.core.async.t_cljs$core$async45487.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__37368__auto__,writer__37369__auto__,opt__37370__auto__){
return cljs.core._write.call(null,writer__37369__auto__,"cljs.core.async/t_cljs$core$async45487");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async45487 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async45487(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta45488){
return (new cljs.core.async.t_cljs$core$async45487(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta45488));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async45487(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__44387__auto___45607 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44387__auto___45607,mults,ensure_mult,p){
return (function (){
var f__44388__auto__ = (function (){var switch__44299__auto__ = ((function (c__44387__auto___45607,mults,ensure_mult,p){
return (function (state_45561){
var state_val_45562 = (state_45561[(1)]);
if((state_val_45562 === (7))){
var inst_45557 = (state_45561[(2)]);
var state_45561__$1 = state_45561;
var statearr_45563_45608 = state_45561__$1;
(statearr_45563_45608[(2)] = inst_45557);

(statearr_45563_45608[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45562 === (20))){
var state_45561__$1 = state_45561;
var statearr_45564_45609 = state_45561__$1;
(statearr_45564_45609[(2)] = null);

(statearr_45564_45609[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45562 === (1))){
var state_45561__$1 = state_45561;
var statearr_45565_45610 = state_45561__$1;
(statearr_45565_45610[(2)] = null);

(statearr_45565_45610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45562 === (24))){
var inst_45540 = (state_45561[(7)]);
var inst_45549 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_45540);
var state_45561__$1 = state_45561;
var statearr_45566_45611 = state_45561__$1;
(statearr_45566_45611[(2)] = inst_45549);

(statearr_45566_45611[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45562 === (4))){
var inst_45492 = (state_45561[(8)]);
var inst_45492__$1 = (state_45561[(2)]);
var inst_45493 = (inst_45492__$1 == null);
var state_45561__$1 = (function (){var statearr_45567 = state_45561;
(statearr_45567[(8)] = inst_45492__$1);

return statearr_45567;
})();
if(cljs.core.truth_(inst_45493)){
var statearr_45568_45612 = state_45561__$1;
(statearr_45568_45612[(1)] = (5));

} else {
var statearr_45569_45613 = state_45561__$1;
(statearr_45569_45613[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45562 === (15))){
var inst_45534 = (state_45561[(2)]);
var state_45561__$1 = state_45561;
var statearr_45570_45614 = state_45561__$1;
(statearr_45570_45614[(2)] = inst_45534);

(statearr_45570_45614[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45562 === (21))){
var inst_45554 = (state_45561[(2)]);
var state_45561__$1 = (function (){var statearr_45571 = state_45561;
(statearr_45571[(9)] = inst_45554);

return statearr_45571;
})();
var statearr_45572_45615 = state_45561__$1;
(statearr_45572_45615[(2)] = null);

(statearr_45572_45615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45562 === (13))){
var inst_45516 = (state_45561[(10)]);
var inst_45518 = cljs.core.chunked_seq_QMARK_.call(null,inst_45516);
var state_45561__$1 = state_45561;
if(inst_45518){
var statearr_45573_45616 = state_45561__$1;
(statearr_45573_45616[(1)] = (16));

} else {
var statearr_45574_45617 = state_45561__$1;
(statearr_45574_45617[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45562 === (22))){
var inst_45546 = (state_45561[(2)]);
var state_45561__$1 = state_45561;
if(cljs.core.truth_(inst_45546)){
var statearr_45575_45618 = state_45561__$1;
(statearr_45575_45618[(1)] = (23));

} else {
var statearr_45576_45619 = state_45561__$1;
(statearr_45576_45619[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45562 === (6))){
var inst_45542 = (state_45561[(11)]);
var inst_45492 = (state_45561[(8)]);
var inst_45540 = (state_45561[(7)]);
var inst_45540__$1 = topic_fn.call(null,inst_45492);
var inst_45541 = cljs.core.deref.call(null,mults);
var inst_45542__$1 = cljs.core.get.call(null,inst_45541,inst_45540__$1);
var state_45561__$1 = (function (){var statearr_45577 = state_45561;
(statearr_45577[(11)] = inst_45542__$1);

(statearr_45577[(7)] = inst_45540__$1);

return statearr_45577;
})();
if(cljs.core.truth_(inst_45542__$1)){
var statearr_45578_45620 = state_45561__$1;
(statearr_45578_45620[(1)] = (19));

} else {
var statearr_45579_45621 = state_45561__$1;
(statearr_45579_45621[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45562 === (25))){
var inst_45551 = (state_45561[(2)]);
var state_45561__$1 = state_45561;
var statearr_45580_45622 = state_45561__$1;
(statearr_45580_45622[(2)] = inst_45551);

(statearr_45580_45622[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45562 === (17))){
var inst_45516 = (state_45561[(10)]);
var inst_45525 = cljs.core.first.call(null,inst_45516);
var inst_45526 = cljs.core.async.muxch_STAR_.call(null,inst_45525);
var inst_45527 = cljs.core.async.close_BANG_.call(null,inst_45526);
var inst_45528 = cljs.core.next.call(null,inst_45516);
var inst_45502 = inst_45528;
var inst_45503 = null;
var inst_45504 = (0);
var inst_45505 = (0);
var state_45561__$1 = (function (){var statearr_45581 = state_45561;
(statearr_45581[(12)] = inst_45505);

(statearr_45581[(13)] = inst_45527);

(statearr_45581[(14)] = inst_45503);

(statearr_45581[(15)] = inst_45502);

(statearr_45581[(16)] = inst_45504);

return statearr_45581;
})();
var statearr_45582_45623 = state_45561__$1;
(statearr_45582_45623[(2)] = null);

(statearr_45582_45623[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45562 === (3))){
var inst_45559 = (state_45561[(2)]);
var state_45561__$1 = state_45561;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45561__$1,inst_45559);
} else {
if((state_val_45562 === (12))){
var inst_45536 = (state_45561[(2)]);
var state_45561__$1 = state_45561;
var statearr_45583_45624 = state_45561__$1;
(statearr_45583_45624[(2)] = inst_45536);

(statearr_45583_45624[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45562 === (2))){
var state_45561__$1 = state_45561;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45561__$1,(4),ch);
} else {
if((state_val_45562 === (23))){
var state_45561__$1 = state_45561;
var statearr_45584_45625 = state_45561__$1;
(statearr_45584_45625[(2)] = null);

(statearr_45584_45625[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45562 === (19))){
var inst_45542 = (state_45561[(11)]);
var inst_45492 = (state_45561[(8)]);
var inst_45544 = cljs.core.async.muxch_STAR_.call(null,inst_45542);
var state_45561__$1 = state_45561;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45561__$1,(22),inst_45544,inst_45492);
} else {
if((state_val_45562 === (11))){
var inst_45516 = (state_45561[(10)]);
var inst_45502 = (state_45561[(15)]);
var inst_45516__$1 = cljs.core.seq.call(null,inst_45502);
var state_45561__$1 = (function (){var statearr_45585 = state_45561;
(statearr_45585[(10)] = inst_45516__$1);

return statearr_45585;
})();
if(inst_45516__$1){
var statearr_45586_45626 = state_45561__$1;
(statearr_45586_45626[(1)] = (13));

} else {
var statearr_45587_45627 = state_45561__$1;
(statearr_45587_45627[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45562 === (9))){
var inst_45538 = (state_45561[(2)]);
var state_45561__$1 = state_45561;
var statearr_45588_45628 = state_45561__$1;
(statearr_45588_45628[(2)] = inst_45538);

(statearr_45588_45628[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45562 === (5))){
var inst_45499 = cljs.core.deref.call(null,mults);
var inst_45500 = cljs.core.vals.call(null,inst_45499);
var inst_45501 = cljs.core.seq.call(null,inst_45500);
var inst_45502 = inst_45501;
var inst_45503 = null;
var inst_45504 = (0);
var inst_45505 = (0);
var state_45561__$1 = (function (){var statearr_45589 = state_45561;
(statearr_45589[(12)] = inst_45505);

(statearr_45589[(14)] = inst_45503);

(statearr_45589[(15)] = inst_45502);

(statearr_45589[(16)] = inst_45504);

return statearr_45589;
})();
var statearr_45590_45629 = state_45561__$1;
(statearr_45590_45629[(2)] = null);

(statearr_45590_45629[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45562 === (14))){
var state_45561__$1 = state_45561;
var statearr_45594_45630 = state_45561__$1;
(statearr_45594_45630[(2)] = null);

(statearr_45594_45630[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45562 === (16))){
var inst_45516 = (state_45561[(10)]);
var inst_45520 = cljs.core.chunk_first.call(null,inst_45516);
var inst_45521 = cljs.core.chunk_rest.call(null,inst_45516);
var inst_45522 = cljs.core.count.call(null,inst_45520);
var inst_45502 = inst_45521;
var inst_45503 = inst_45520;
var inst_45504 = inst_45522;
var inst_45505 = (0);
var state_45561__$1 = (function (){var statearr_45595 = state_45561;
(statearr_45595[(12)] = inst_45505);

(statearr_45595[(14)] = inst_45503);

(statearr_45595[(15)] = inst_45502);

(statearr_45595[(16)] = inst_45504);

return statearr_45595;
})();
var statearr_45596_45631 = state_45561__$1;
(statearr_45596_45631[(2)] = null);

(statearr_45596_45631[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45562 === (10))){
var inst_45505 = (state_45561[(12)]);
var inst_45503 = (state_45561[(14)]);
var inst_45502 = (state_45561[(15)]);
var inst_45504 = (state_45561[(16)]);
var inst_45510 = cljs.core._nth.call(null,inst_45503,inst_45505);
var inst_45511 = cljs.core.async.muxch_STAR_.call(null,inst_45510);
var inst_45512 = cljs.core.async.close_BANG_.call(null,inst_45511);
var inst_45513 = (inst_45505 + (1));
var tmp45591 = inst_45503;
var tmp45592 = inst_45502;
var tmp45593 = inst_45504;
var inst_45502__$1 = tmp45592;
var inst_45503__$1 = tmp45591;
var inst_45504__$1 = tmp45593;
var inst_45505__$1 = inst_45513;
var state_45561__$1 = (function (){var statearr_45597 = state_45561;
(statearr_45597[(12)] = inst_45505__$1);

(statearr_45597[(14)] = inst_45503__$1);

(statearr_45597[(17)] = inst_45512);

(statearr_45597[(15)] = inst_45502__$1);

(statearr_45597[(16)] = inst_45504__$1);

return statearr_45597;
})();
var statearr_45598_45632 = state_45561__$1;
(statearr_45598_45632[(2)] = null);

(statearr_45598_45632[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45562 === (18))){
var inst_45531 = (state_45561[(2)]);
var state_45561__$1 = state_45561;
var statearr_45599_45633 = state_45561__$1;
(statearr_45599_45633[(2)] = inst_45531);

(statearr_45599_45633[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45562 === (8))){
var inst_45505 = (state_45561[(12)]);
var inst_45504 = (state_45561[(16)]);
var inst_45507 = (inst_45505 < inst_45504);
var inst_45508 = inst_45507;
var state_45561__$1 = state_45561;
if(cljs.core.truth_(inst_45508)){
var statearr_45600_45634 = state_45561__$1;
(statearr_45600_45634[(1)] = (10));

} else {
var statearr_45601_45635 = state_45561__$1;
(statearr_45601_45635[(1)] = (11));

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
});})(c__44387__auto___45607,mults,ensure_mult,p))
;
return ((function (switch__44299__auto__,c__44387__auto___45607,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__44300__auto__ = null;
var cljs$core$async$state_machine__44300__auto____0 = (function (){
var statearr_45602 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45602[(0)] = cljs$core$async$state_machine__44300__auto__);

(statearr_45602[(1)] = (1));

return statearr_45602;
});
var cljs$core$async$state_machine__44300__auto____1 = (function (state_45561){
while(true){
var ret_value__44301__auto__ = (function (){try{while(true){
var result__44302__auto__ = switch__44299__auto__.call(null,state_45561);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44302__auto__;
}
break;
}
}catch (e45603){if((e45603 instanceof Object)){
var ex__44303__auto__ = e45603;
var statearr_45604_45636 = state_45561;
(statearr_45604_45636[(5)] = ex__44303__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45561);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45603;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45637 = state_45561;
state_45561 = G__45637;
continue;
} else {
return ret_value__44301__auto__;
}
break;
}
});
cljs$core$async$state_machine__44300__auto__ = function(state_45561){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44300__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44300__auto____1.call(this,state_45561);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__44300__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44300__auto____0;
cljs$core$async$state_machine__44300__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44300__auto____1;
return cljs$core$async$state_machine__44300__auto__;
})()
;})(switch__44299__auto__,c__44387__auto___45607,mults,ensure_mult,p))
})();
var state__44389__auto__ = (function (){var statearr_45605 = f__44388__auto__.call(null);
(statearr_45605[(6)] = c__44387__auto___45607);

return statearr_45605;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44389__auto__);
});})(c__44387__auto___45607,mults,ensure_mult,p))
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
var G__45639 = arguments.length;
switch (G__45639) {
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
var G__45642 = arguments.length;
switch (G__45642) {
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
var G__45645 = arguments.length;
switch (G__45645) {
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
var c__44387__auto___45712 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44387__auto___45712,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__44388__auto__ = (function (){var switch__44299__auto__ = ((function (c__44387__auto___45712,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_45684){
var state_val_45685 = (state_45684[(1)]);
if((state_val_45685 === (7))){
var state_45684__$1 = state_45684;
var statearr_45686_45713 = state_45684__$1;
(statearr_45686_45713[(2)] = null);

(statearr_45686_45713[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45685 === (1))){
var state_45684__$1 = state_45684;
var statearr_45687_45714 = state_45684__$1;
(statearr_45687_45714[(2)] = null);

(statearr_45687_45714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45685 === (4))){
var inst_45648 = (state_45684[(7)]);
var inst_45650 = (inst_45648 < cnt);
var state_45684__$1 = state_45684;
if(cljs.core.truth_(inst_45650)){
var statearr_45688_45715 = state_45684__$1;
(statearr_45688_45715[(1)] = (6));

} else {
var statearr_45689_45716 = state_45684__$1;
(statearr_45689_45716[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45685 === (15))){
var inst_45680 = (state_45684[(2)]);
var state_45684__$1 = state_45684;
var statearr_45690_45717 = state_45684__$1;
(statearr_45690_45717[(2)] = inst_45680);

(statearr_45690_45717[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45685 === (13))){
var inst_45673 = cljs.core.async.close_BANG_.call(null,out);
var state_45684__$1 = state_45684;
var statearr_45691_45718 = state_45684__$1;
(statearr_45691_45718[(2)] = inst_45673);

(statearr_45691_45718[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45685 === (6))){
var state_45684__$1 = state_45684;
var statearr_45692_45719 = state_45684__$1;
(statearr_45692_45719[(2)] = null);

(statearr_45692_45719[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45685 === (3))){
var inst_45682 = (state_45684[(2)]);
var state_45684__$1 = state_45684;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45684__$1,inst_45682);
} else {
if((state_val_45685 === (12))){
var inst_45670 = (state_45684[(8)]);
var inst_45670__$1 = (state_45684[(2)]);
var inst_45671 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_45670__$1);
var state_45684__$1 = (function (){var statearr_45693 = state_45684;
(statearr_45693[(8)] = inst_45670__$1);

return statearr_45693;
})();
if(cljs.core.truth_(inst_45671)){
var statearr_45694_45720 = state_45684__$1;
(statearr_45694_45720[(1)] = (13));

} else {
var statearr_45695_45721 = state_45684__$1;
(statearr_45695_45721[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45685 === (2))){
var inst_45647 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_45648 = (0);
var state_45684__$1 = (function (){var statearr_45696 = state_45684;
(statearr_45696[(9)] = inst_45647);

(statearr_45696[(7)] = inst_45648);

return statearr_45696;
})();
var statearr_45697_45722 = state_45684__$1;
(statearr_45697_45722[(2)] = null);

(statearr_45697_45722[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45685 === (11))){
var inst_45648 = (state_45684[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_45684,(10),Object,null,(9));
var inst_45657 = chs__$1.call(null,inst_45648);
var inst_45658 = done.call(null,inst_45648);
var inst_45659 = cljs.core.async.take_BANG_.call(null,inst_45657,inst_45658);
var state_45684__$1 = state_45684;
var statearr_45698_45723 = state_45684__$1;
(statearr_45698_45723[(2)] = inst_45659);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45684__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45685 === (9))){
var inst_45648 = (state_45684[(7)]);
var inst_45661 = (state_45684[(2)]);
var inst_45662 = (inst_45648 + (1));
var inst_45648__$1 = inst_45662;
var state_45684__$1 = (function (){var statearr_45699 = state_45684;
(statearr_45699[(10)] = inst_45661);

(statearr_45699[(7)] = inst_45648__$1);

return statearr_45699;
})();
var statearr_45700_45724 = state_45684__$1;
(statearr_45700_45724[(2)] = null);

(statearr_45700_45724[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45685 === (5))){
var inst_45668 = (state_45684[(2)]);
var state_45684__$1 = (function (){var statearr_45701 = state_45684;
(statearr_45701[(11)] = inst_45668);

return statearr_45701;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45684__$1,(12),dchan);
} else {
if((state_val_45685 === (14))){
var inst_45670 = (state_45684[(8)]);
var inst_45675 = cljs.core.apply.call(null,f,inst_45670);
var state_45684__$1 = state_45684;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45684__$1,(16),out,inst_45675);
} else {
if((state_val_45685 === (16))){
var inst_45677 = (state_45684[(2)]);
var state_45684__$1 = (function (){var statearr_45702 = state_45684;
(statearr_45702[(12)] = inst_45677);

return statearr_45702;
})();
var statearr_45703_45725 = state_45684__$1;
(statearr_45703_45725[(2)] = null);

(statearr_45703_45725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45685 === (10))){
var inst_45652 = (state_45684[(2)]);
var inst_45653 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_45684__$1 = (function (){var statearr_45704 = state_45684;
(statearr_45704[(13)] = inst_45652);

return statearr_45704;
})();
var statearr_45705_45726 = state_45684__$1;
(statearr_45705_45726[(2)] = inst_45653);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45684__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45685 === (8))){
var inst_45666 = (state_45684[(2)]);
var state_45684__$1 = state_45684;
var statearr_45706_45727 = state_45684__$1;
(statearr_45706_45727[(2)] = inst_45666);

(statearr_45706_45727[(1)] = (5));


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
});})(c__44387__auto___45712,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__44299__auto__,c__44387__auto___45712,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__44300__auto__ = null;
var cljs$core$async$state_machine__44300__auto____0 = (function (){
var statearr_45707 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45707[(0)] = cljs$core$async$state_machine__44300__auto__);

(statearr_45707[(1)] = (1));

return statearr_45707;
});
var cljs$core$async$state_machine__44300__auto____1 = (function (state_45684){
while(true){
var ret_value__44301__auto__ = (function (){try{while(true){
var result__44302__auto__ = switch__44299__auto__.call(null,state_45684);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44302__auto__;
}
break;
}
}catch (e45708){if((e45708 instanceof Object)){
var ex__44303__auto__ = e45708;
var statearr_45709_45728 = state_45684;
(statearr_45709_45728[(5)] = ex__44303__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45684);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45708;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45729 = state_45684;
state_45684 = G__45729;
continue;
} else {
return ret_value__44301__auto__;
}
break;
}
});
cljs$core$async$state_machine__44300__auto__ = function(state_45684){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44300__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44300__auto____1.call(this,state_45684);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__44300__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44300__auto____0;
cljs$core$async$state_machine__44300__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44300__auto____1;
return cljs$core$async$state_machine__44300__auto__;
})()
;})(switch__44299__auto__,c__44387__auto___45712,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__44389__auto__ = (function (){var statearr_45710 = f__44388__auto__.call(null);
(statearr_45710[(6)] = c__44387__auto___45712);

return statearr_45710;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44389__auto__);
});})(c__44387__auto___45712,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__45732 = arguments.length;
switch (G__45732) {
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
var c__44387__auto___45786 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44387__auto___45786,out){
return (function (){
var f__44388__auto__ = (function (){var switch__44299__auto__ = ((function (c__44387__auto___45786,out){
return (function (state_45764){
var state_val_45765 = (state_45764[(1)]);
if((state_val_45765 === (7))){
var inst_45743 = (state_45764[(7)]);
var inst_45744 = (state_45764[(8)]);
var inst_45743__$1 = (state_45764[(2)]);
var inst_45744__$1 = cljs.core.nth.call(null,inst_45743__$1,(0),null);
var inst_45745 = cljs.core.nth.call(null,inst_45743__$1,(1),null);
var inst_45746 = (inst_45744__$1 == null);
var state_45764__$1 = (function (){var statearr_45766 = state_45764;
(statearr_45766[(7)] = inst_45743__$1);

(statearr_45766[(8)] = inst_45744__$1);

(statearr_45766[(9)] = inst_45745);

return statearr_45766;
})();
if(cljs.core.truth_(inst_45746)){
var statearr_45767_45787 = state_45764__$1;
(statearr_45767_45787[(1)] = (8));

} else {
var statearr_45768_45788 = state_45764__$1;
(statearr_45768_45788[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45765 === (1))){
var inst_45733 = cljs.core.vec.call(null,chs);
var inst_45734 = inst_45733;
var state_45764__$1 = (function (){var statearr_45769 = state_45764;
(statearr_45769[(10)] = inst_45734);

return statearr_45769;
})();
var statearr_45770_45789 = state_45764__$1;
(statearr_45770_45789[(2)] = null);

(statearr_45770_45789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45765 === (4))){
var inst_45734 = (state_45764[(10)]);
var state_45764__$1 = state_45764;
return cljs.core.async.ioc_alts_BANG_.call(null,state_45764__$1,(7),inst_45734);
} else {
if((state_val_45765 === (6))){
var inst_45760 = (state_45764[(2)]);
var state_45764__$1 = state_45764;
var statearr_45771_45790 = state_45764__$1;
(statearr_45771_45790[(2)] = inst_45760);

(statearr_45771_45790[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45765 === (3))){
var inst_45762 = (state_45764[(2)]);
var state_45764__$1 = state_45764;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45764__$1,inst_45762);
} else {
if((state_val_45765 === (2))){
var inst_45734 = (state_45764[(10)]);
var inst_45736 = cljs.core.count.call(null,inst_45734);
var inst_45737 = (inst_45736 > (0));
var state_45764__$1 = state_45764;
if(cljs.core.truth_(inst_45737)){
var statearr_45773_45791 = state_45764__$1;
(statearr_45773_45791[(1)] = (4));

} else {
var statearr_45774_45792 = state_45764__$1;
(statearr_45774_45792[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45765 === (11))){
var inst_45734 = (state_45764[(10)]);
var inst_45753 = (state_45764[(2)]);
var tmp45772 = inst_45734;
var inst_45734__$1 = tmp45772;
var state_45764__$1 = (function (){var statearr_45775 = state_45764;
(statearr_45775[(10)] = inst_45734__$1);

(statearr_45775[(11)] = inst_45753);

return statearr_45775;
})();
var statearr_45776_45793 = state_45764__$1;
(statearr_45776_45793[(2)] = null);

(statearr_45776_45793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45765 === (9))){
var inst_45744 = (state_45764[(8)]);
var state_45764__$1 = state_45764;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45764__$1,(11),out,inst_45744);
} else {
if((state_val_45765 === (5))){
var inst_45758 = cljs.core.async.close_BANG_.call(null,out);
var state_45764__$1 = state_45764;
var statearr_45777_45794 = state_45764__$1;
(statearr_45777_45794[(2)] = inst_45758);

(statearr_45777_45794[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45765 === (10))){
var inst_45756 = (state_45764[(2)]);
var state_45764__$1 = state_45764;
var statearr_45778_45795 = state_45764__$1;
(statearr_45778_45795[(2)] = inst_45756);

(statearr_45778_45795[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45765 === (8))){
var inst_45743 = (state_45764[(7)]);
var inst_45734 = (state_45764[(10)]);
var inst_45744 = (state_45764[(8)]);
var inst_45745 = (state_45764[(9)]);
var inst_45748 = (function (){var cs = inst_45734;
var vec__45739 = inst_45743;
var v = inst_45744;
var c = inst_45745;
return ((function (cs,vec__45739,v,c,inst_45743,inst_45734,inst_45744,inst_45745,state_val_45765,c__44387__auto___45786,out){
return (function (p1__45730_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__45730_SHARP_);
});
;})(cs,vec__45739,v,c,inst_45743,inst_45734,inst_45744,inst_45745,state_val_45765,c__44387__auto___45786,out))
})();
var inst_45749 = cljs.core.filterv.call(null,inst_45748,inst_45734);
var inst_45734__$1 = inst_45749;
var state_45764__$1 = (function (){var statearr_45779 = state_45764;
(statearr_45779[(10)] = inst_45734__$1);

return statearr_45779;
})();
var statearr_45780_45796 = state_45764__$1;
(statearr_45780_45796[(2)] = null);

(statearr_45780_45796[(1)] = (2));


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
});})(c__44387__auto___45786,out))
;
return ((function (switch__44299__auto__,c__44387__auto___45786,out){
return (function() {
var cljs$core$async$state_machine__44300__auto__ = null;
var cljs$core$async$state_machine__44300__auto____0 = (function (){
var statearr_45781 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45781[(0)] = cljs$core$async$state_machine__44300__auto__);

(statearr_45781[(1)] = (1));

return statearr_45781;
});
var cljs$core$async$state_machine__44300__auto____1 = (function (state_45764){
while(true){
var ret_value__44301__auto__ = (function (){try{while(true){
var result__44302__auto__ = switch__44299__auto__.call(null,state_45764);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44302__auto__;
}
break;
}
}catch (e45782){if((e45782 instanceof Object)){
var ex__44303__auto__ = e45782;
var statearr_45783_45797 = state_45764;
(statearr_45783_45797[(5)] = ex__44303__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45764);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45782;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45798 = state_45764;
state_45764 = G__45798;
continue;
} else {
return ret_value__44301__auto__;
}
break;
}
});
cljs$core$async$state_machine__44300__auto__ = function(state_45764){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44300__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44300__auto____1.call(this,state_45764);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__44300__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44300__auto____0;
cljs$core$async$state_machine__44300__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44300__auto____1;
return cljs$core$async$state_machine__44300__auto__;
})()
;})(switch__44299__auto__,c__44387__auto___45786,out))
})();
var state__44389__auto__ = (function (){var statearr_45784 = f__44388__auto__.call(null);
(statearr_45784[(6)] = c__44387__auto___45786);

return statearr_45784;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44389__auto__);
});})(c__44387__auto___45786,out))
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
var G__45800 = arguments.length;
switch (G__45800) {
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
var c__44387__auto___45845 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44387__auto___45845,out){
return (function (){
var f__44388__auto__ = (function (){var switch__44299__auto__ = ((function (c__44387__auto___45845,out){
return (function (state_45824){
var state_val_45825 = (state_45824[(1)]);
if((state_val_45825 === (7))){
var inst_45806 = (state_45824[(7)]);
var inst_45806__$1 = (state_45824[(2)]);
var inst_45807 = (inst_45806__$1 == null);
var inst_45808 = cljs.core.not.call(null,inst_45807);
var state_45824__$1 = (function (){var statearr_45826 = state_45824;
(statearr_45826[(7)] = inst_45806__$1);

return statearr_45826;
})();
if(inst_45808){
var statearr_45827_45846 = state_45824__$1;
(statearr_45827_45846[(1)] = (8));

} else {
var statearr_45828_45847 = state_45824__$1;
(statearr_45828_45847[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45825 === (1))){
var inst_45801 = (0);
var state_45824__$1 = (function (){var statearr_45829 = state_45824;
(statearr_45829[(8)] = inst_45801);

return statearr_45829;
})();
var statearr_45830_45848 = state_45824__$1;
(statearr_45830_45848[(2)] = null);

(statearr_45830_45848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45825 === (4))){
var state_45824__$1 = state_45824;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45824__$1,(7),ch);
} else {
if((state_val_45825 === (6))){
var inst_45819 = (state_45824[(2)]);
var state_45824__$1 = state_45824;
var statearr_45831_45849 = state_45824__$1;
(statearr_45831_45849[(2)] = inst_45819);

(statearr_45831_45849[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45825 === (3))){
var inst_45821 = (state_45824[(2)]);
var inst_45822 = cljs.core.async.close_BANG_.call(null,out);
var state_45824__$1 = (function (){var statearr_45832 = state_45824;
(statearr_45832[(9)] = inst_45821);

return statearr_45832;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45824__$1,inst_45822);
} else {
if((state_val_45825 === (2))){
var inst_45801 = (state_45824[(8)]);
var inst_45803 = (inst_45801 < n);
var state_45824__$1 = state_45824;
if(cljs.core.truth_(inst_45803)){
var statearr_45833_45850 = state_45824__$1;
(statearr_45833_45850[(1)] = (4));

} else {
var statearr_45834_45851 = state_45824__$1;
(statearr_45834_45851[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45825 === (11))){
var inst_45801 = (state_45824[(8)]);
var inst_45811 = (state_45824[(2)]);
var inst_45812 = (inst_45801 + (1));
var inst_45801__$1 = inst_45812;
var state_45824__$1 = (function (){var statearr_45835 = state_45824;
(statearr_45835[(10)] = inst_45811);

(statearr_45835[(8)] = inst_45801__$1);

return statearr_45835;
})();
var statearr_45836_45852 = state_45824__$1;
(statearr_45836_45852[(2)] = null);

(statearr_45836_45852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45825 === (9))){
var state_45824__$1 = state_45824;
var statearr_45837_45853 = state_45824__$1;
(statearr_45837_45853[(2)] = null);

(statearr_45837_45853[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45825 === (5))){
var state_45824__$1 = state_45824;
var statearr_45838_45854 = state_45824__$1;
(statearr_45838_45854[(2)] = null);

(statearr_45838_45854[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45825 === (10))){
var inst_45816 = (state_45824[(2)]);
var state_45824__$1 = state_45824;
var statearr_45839_45855 = state_45824__$1;
(statearr_45839_45855[(2)] = inst_45816);

(statearr_45839_45855[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45825 === (8))){
var inst_45806 = (state_45824[(7)]);
var state_45824__$1 = state_45824;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45824__$1,(11),out,inst_45806);
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
});})(c__44387__auto___45845,out))
;
return ((function (switch__44299__auto__,c__44387__auto___45845,out){
return (function() {
var cljs$core$async$state_machine__44300__auto__ = null;
var cljs$core$async$state_machine__44300__auto____0 = (function (){
var statearr_45840 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45840[(0)] = cljs$core$async$state_machine__44300__auto__);

(statearr_45840[(1)] = (1));

return statearr_45840;
});
var cljs$core$async$state_machine__44300__auto____1 = (function (state_45824){
while(true){
var ret_value__44301__auto__ = (function (){try{while(true){
var result__44302__auto__ = switch__44299__auto__.call(null,state_45824);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44302__auto__;
}
break;
}
}catch (e45841){if((e45841 instanceof Object)){
var ex__44303__auto__ = e45841;
var statearr_45842_45856 = state_45824;
(statearr_45842_45856[(5)] = ex__44303__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45824);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45841;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45857 = state_45824;
state_45824 = G__45857;
continue;
} else {
return ret_value__44301__auto__;
}
break;
}
});
cljs$core$async$state_machine__44300__auto__ = function(state_45824){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44300__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44300__auto____1.call(this,state_45824);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__44300__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44300__auto____0;
cljs$core$async$state_machine__44300__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44300__auto____1;
return cljs$core$async$state_machine__44300__auto__;
})()
;})(switch__44299__auto__,c__44387__auto___45845,out))
})();
var state__44389__auto__ = (function (){var statearr_45843 = f__44388__auto__.call(null);
(statearr_45843[(6)] = c__44387__auto___45845);

return statearr_45843;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44389__auto__);
});})(c__44387__auto___45845,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async45859 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45859 = (function (f,ch,meta45860){
this.f = f;
this.ch = ch;
this.meta45860 = meta45860;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45859.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45861,meta45860__$1){
var self__ = this;
var _45861__$1 = this;
return (new cljs.core.async.t_cljs$core$async45859(self__.f,self__.ch,meta45860__$1));
});

cljs.core.async.t_cljs$core$async45859.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45861){
var self__ = this;
var _45861__$1 = this;
return self__.meta45860;
});

cljs.core.async.t_cljs$core$async45859.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45859.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async45859.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async45859.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45859.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async45862 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45862 = (function (f,ch,meta45860,_,fn1,meta45863){
this.f = f;
this.ch = ch;
this.meta45860 = meta45860;
this._ = _;
this.fn1 = fn1;
this.meta45863 = meta45863;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45862.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_45864,meta45863__$1){
var self__ = this;
var _45864__$1 = this;
return (new cljs.core.async.t_cljs$core$async45862(self__.f,self__.ch,self__.meta45860,self__._,self__.fn1,meta45863__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async45862.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_45864){
var self__ = this;
var _45864__$1 = this;
return self__.meta45863;
});})(___$1))
;

cljs.core.async.t_cljs$core$async45862.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45862.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async45862.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async45862.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__45858_SHARP_){
return f1.call(null,(((p1__45858_SHARP_ == null))?null:self__.f.call(null,p1__45858_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async45862.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45860","meta45860",1952494505,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async45859","cljs.core.async/t_cljs$core$async45859",-743080849,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta45863","meta45863",-1413758356,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async45862.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45862.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45862";

cljs.core.async.t_cljs$core$async45862.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__37368__auto__,writer__37369__auto__,opt__37370__auto__){
return cljs.core._write.call(null,writer__37369__auto__,"cljs.core.async/t_cljs$core$async45862");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async45862 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async45862(f__$1,ch__$1,meta45860__$1,___$2,fn1__$1,meta45863){
return (new cljs.core.async.t_cljs$core$async45862(f__$1,ch__$1,meta45860__$1,___$2,fn1__$1,meta45863));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async45862(self__.f,self__.ch,self__.meta45860,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__36745__auto__ = ret;
if(cljs.core.truth_(and__36745__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__36745__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async45859.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45859.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async45859.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45860","meta45860",1952494505,null)], null);
});

cljs.core.async.t_cljs$core$async45859.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45859.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45859";

cljs.core.async.t_cljs$core$async45859.cljs$lang$ctorPrWriter = (function (this__37368__auto__,writer__37369__auto__,opt__37370__auto__){
return cljs.core._write.call(null,writer__37369__auto__,"cljs.core.async/t_cljs$core$async45859");
});

cljs.core.async.__GT_t_cljs$core$async45859 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async45859(f__$1,ch__$1,meta45860){
return (new cljs.core.async.t_cljs$core$async45859(f__$1,ch__$1,meta45860));
});

}

return (new cljs.core.async.t_cljs$core$async45859(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async45865 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45865 = (function (f,ch,meta45866){
this.f = f;
this.ch = ch;
this.meta45866 = meta45866;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45865.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45867,meta45866__$1){
var self__ = this;
var _45867__$1 = this;
return (new cljs.core.async.t_cljs$core$async45865(self__.f,self__.ch,meta45866__$1));
});

cljs.core.async.t_cljs$core$async45865.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45867){
var self__ = this;
var _45867__$1 = this;
return self__.meta45866;
});

cljs.core.async.t_cljs$core$async45865.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45865.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async45865.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45865.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async45865.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45865.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async45865.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45866","meta45866",-2132540268,null)], null);
});

cljs.core.async.t_cljs$core$async45865.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45865.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45865";

cljs.core.async.t_cljs$core$async45865.cljs$lang$ctorPrWriter = (function (this__37368__auto__,writer__37369__auto__,opt__37370__auto__){
return cljs.core._write.call(null,writer__37369__auto__,"cljs.core.async/t_cljs$core$async45865");
});

cljs.core.async.__GT_t_cljs$core$async45865 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async45865(f__$1,ch__$1,meta45866){
return (new cljs.core.async.t_cljs$core$async45865(f__$1,ch__$1,meta45866));
});

}

return (new cljs.core.async.t_cljs$core$async45865(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async45868 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45868 = (function (p,ch,meta45869){
this.p = p;
this.ch = ch;
this.meta45869 = meta45869;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45868.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45870,meta45869__$1){
var self__ = this;
var _45870__$1 = this;
return (new cljs.core.async.t_cljs$core$async45868(self__.p,self__.ch,meta45869__$1));
});

cljs.core.async.t_cljs$core$async45868.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45870){
var self__ = this;
var _45870__$1 = this;
return self__.meta45869;
});

cljs.core.async.t_cljs$core$async45868.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45868.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async45868.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async45868.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45868.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async45868.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45868.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async45868.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45869","meta45869",-1900366548,null)], null);
});

cljs.core.async.t_cljs$core$async45868.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45868.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45868";

cljs.core.async.t_cljs$core$async45868.cljs$lang$ctorPrWriter = (function (this__37368__auto__,writer__37369__auto__,opt__37370__auto__){
return cljs.core._write.call(null,writer__37369__auto__,"cljs.core.async/t_cljs$core$async45868");
});

cljs.core.async.__GT_t_cljs$core$async45868 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async45868(p__$1,ch__$1,meta45869){
return (new cljs.core.async.t_cljs$core$async45868(p__$1,ch__$1,meta45869));
});

}

return (new cljs.core.async.t_cljs$core$async45868(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__45872 = arguments.length;
switch (G__45872) {
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
var c__44387__auto___45912 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44387__auto___45912,out){
return (function (){
var f__44388__auto__ = (function (){var switch__44299__auto__ = ((function (c__44387__auto___45912,out){
return (function (state_45893){
var state_val_45894 = (state_45893[(1)]);
if((state_val_45894 === (7))){
var inst_45889 = (state_45893[(2)]);
var state_45893__$1 = state_45893;
var statearr_45895_45913 = state_45893__$1;
(statearr_45895_45913[(2)] = inst_45889);

(statearr_45895_45913[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45894 === (1))){
var state_45893__$1 = state_45893;
var statearr_45896_45914 = state_45893__$1;
(statearr_45896_45914[(2)] = null);

(statearr_45896_45914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45894 === (4))){
var inst_45875 = (state_45893[(7)]);
var inst_45875__$1 = (state_45893[(2)]);
var inst_45876 = (inst_45875__$1 == null);
var state_45893__$1 = (function (){var statearr_45897 = state_45893;
(statearr_45897[(7)] = inst_45875__$1);

return statearr_45897;
})();
if(cljs.core.truth_(inst_45876)){
var statearr_45898_45915 = state_45893__$1;
(statearr_45898_45915[(1)] = (5));

} else {
var statearr_45899_45916 = state_45893__$1;
(statearr_45899_45916[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45894 === (6))){
var inst_45875 = (state_45893[(7)]);
var inst_45880 = p.call(null,inst_45875);
var state_45893__$1 = state_45893;
if(cljs.core.truth_(inst_45880)){
var statearr_45900_45917 = state_45893__$1;
(statearr_45900_45917[(1)] = (8));

} else {
var statearr_45901_45918 = state_45893__$1;
(statearr_45901_45918[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45894 === (3))){
var inst_45891 = (state_45893[(2)]);
var state_45893__$1 = state_45893;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45893__$1,inst_45891);
} else {
if((state_val_45894 === (2))){
var state_45893__$1 = state_45893;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45893__$1,(4),ch);
} else {
if((state_val_45894 === (11))){
var inst_45883 = (state_45893[(2)]);
var state_45893__$1 = state_45893;
var statearr_45902_45919 = state_45893__$1;
(statearr_45902_45919[(2)] = inst_45883);

(statearr_45902_45919[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45894 === (9))){
var state_45893__$1 = state_45893;
var statearr_45903_45920 = state_45893__$1;
(statearr_45903_45920[(2)] = null);

(statearr_45903_45920[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45894 === (5))){
var inst_45878 = cljs.core.async.close_BANG_.call(null,out);
var state_45893__$1 = state_45893;
var statearr_45904_45921 = state_45893__$1;
(statearr_45904_45921[(2)] = inst_45878);

(statearr_45904_45921[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45894 === (10))){
var inst_45886 = (state_45893[(2)]);
var state_45893__$1 = (function (){var statearr_45905 = state_45893;
(statearr_45905[(8)] = inst_45886);

return statearr_45905;
})();
var statearr_45906_45922 = state_45893__$1;
(statearr_45906_45922[(2)] = null);

(statearr_45906_45922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45894 === (8))){
var inst_45875 = (state_45893[(7)]);
var state_45893__$1 = state_45893;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45893__$1,(11),out,inst_45875);
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
});})(c__44387__auto___45912,out))
;
return ((function (switch__44299__auto__,c__44387__auto___45912,out){
return (function() {
var cljs$core$async$state_machine__44300__auto__ = null;
var cljs$core$async$state_machine__44300__auto____0 = (function (){
var statearr_45907 = [null,null,null,null,null,null,null,null,null];
(statearr_45907[(0)] = cljs$core$async$state_machine__44300__auto__);

(statearr_45907[(1)] = (1));

return statearr_45907;
});
var cljs$core$async$state_machine__44300__auto____1 = (function (state_45893){
while(true){
var ret_value__44301__auto__ = (function (){try{while(true){
var result__44302__auto__ = switch__44299__auto__.call(null,state_45893);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44302__auto__;
}
break;
}
}catch (e45908){if((e45908 instanceof Object)){
var ex__44303__auto__ = e45908;
var statearr_45909_45923 = state_45893;
(statearr_45909_45923[(5)] = ex__44303__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45893);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45908;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45924 = state_45893;
state_45893 = G__45924;
continue;
} else {
return ret_value__44301__auto__;
}
break;
}
});
cljs$core$async$state_machine__44300__auto__ = function(state_45893){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44300__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44300__auto____1.call(this,state_45893);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__44300__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44300__auto____0;
cljs$core$async$state_machine__44300__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44300__auto____1;
return cljs$core$async$state_machine__44300__auto__;
})()
;})(switch__44299__auto__,c__44387__auto___45912,out))
})();
var state__44389__auto__ = (function (){var statearr_45910 = f__44388__auto__.call(null);
(statearr_45910[(6)] = c__44387__auto___45912);

return statearr_45910;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44389__auto__);
});})(c__44387__auto___45912,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__45926 = arguments.length;
switch (G__45926) {
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
var c__44387__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44387__auto__){
return (function (){
var f__44388__auto__ = (function (){var switch__44299__auto__ = ((function (c__44387__auto__){
return (function (state_45989){
var state_val_45990 = (state_45989[(1)]);
if((state_val_45990 === (7))){
var inst_45985 = (state_45989[(2)]);
var state_45989__$1 = state_45989;
var statearr_45991_46029 = state_45989__$1;
(statearr_45991_46029[(2)] = inst_45985);

(statearr_45991_46029[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45990 === (20))){
var inst_45955 = (state_45989[(7)]);
var inst_45966 = (state_45989[(2)]);
var inst_45967 = cljs.core.next.call(null,inst_45955);
var inst_45941 = inst_45967;
var inst_45942 = null;
var inst_45943 = (0);
var inst_45944 = (0);
var state_45989__$1 = (function (){var statearr_45992 = state_45989;
(statearr_45992[(8)] = inst_45941);

(statearr_45992[(9)] = inst_45966);

(statearr_45992[(10)] = inst_45944);

(statearr_45992[(11)] = inst_45943);

(statearr_45992[(12)] = inst_45942);

return statearr_45992;
})();
var statearr_45993_46030 = state_45989__$1;
(statearr_45993_46030[(2)] = null);

(statearr_45993_46030[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45990 === (1))){
var state_45989__$1 = state_45989;
var statearr_45994_46031 = state_45989__$1;
(statearr_45994_46031[(2)] = null);

(statearr_45994_46031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45990 === (4))){
var inst_45930 = (state_45989[(13)]);
var inst_45930__$1 = (state_45989[(2)]);
var inst_45931 = (inst_45930__$1 == null);
var state_45989__$1 = (function (){var statearr_45995 = state_45989;
(statearr_45995[(13)] = inst_45930__$1);

return statearr_45995;
})();
if(cljs.core.truth_(inst_45931)){
var statearr_45996_46032 = state_45989__$1;
(statearr_45996_46032[(1)] = (5));

} else {
var statearr_45997_46033 = state_45989__$1;
(statearr_45997_46033[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45990 === (15))){
var state_45989__$1 = state_45989;
var statearr_46001_46034 = state_45989__$1;
(statearr_46001_46034[(2)] = null);

(statearr_46001_46034[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45990 === (21))){
var state_45989__$1 = state_45989;
var statearr_46002_46035 = state_45989__$1;
(statearr_46002_46035[(2)] = null);

(statearr_46002_46035[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45990 === (13))){
var inst_45941 = (state_45989[(8)]);
var inst_45944 = (state_45989[(10)]);
var inst_45943 = (state_45989[(11)]);
var inst_45942 = (state_45989[(12)]);
var inst_45951 = (state_45989[(2)]);
var inst_45952 = (inst_45944 + (1));
var tmp45998 = inst_45941;
var tmp45999 = inst_45943;
var tmp46000 = inst_45942;
var inst_45941__$1 = tmp45998;
var inst_45942__$1 = tmp46000;
var inst_45943__$1 = tmp45999;
var inst_45944__$1 = inst_45952;
var state_45989__$1 = (function (){var statearr_46003 = state_45989;
(statearr_46003[(14)] = inst_45951);

(statearr_46003[(8)] = inst_45941__$1);

(statearr_46003[(10)] = inst_45944__$1);

(statearr_46003[(11)] = inst_45943__$1);

(statearr_46003[(12)] = inst_45942__$1);

return statearr_46003;
})();
var statearr_46004_46036 = state_45989__$1;
(statearr_46004_46036[(2)] = null);

(statearr_46004_46036[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45990 === (22))){
var state_45989__$1 = state_45989;
var statearr_46005_46037 = state_45989__$1;
(statearr_46005_46037[(2)] = null);

(statearr_46005_46037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45990 === (6))){
var inst_45930 = (state_45989[(13)]);
var inst_45939 = f.call(null,inst_45930);
var inst_45940 = cljs.core.seq.call(null,inst_45939);
var inst_45941 = inst_45940;
var inst_45942 = null;
var inst_45943 = (0);
var inst_45944 = (0);
var state_45989__$1 = (function (){var statearr_46006 = state_45989;
(statearr_46006[(8)] = inst_45941);

(statearr_46006[(10)] = inst_45944);

(statearr_46006[(11)] = inst_45943);

(statearr_46006[(12)] = inst_45942);

return statearr_46006;
})();
var statearr_46007_46038 = state_45989__$1;
(statearr_46007_46038[(2)] = null);

(statearr_46007_46038[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45990 === (17))){
var inst_45955 = (state_45989[(7)]);
var inst_45959 = cljs.core.chunk_first.call(null,inst_45955);
var inst_45960 = cljs.core.chunk_rest.call(null,inst_45955);
var inst_45961 = cljs.core.count.call(null,inst_45959);
var inst_45941 = inst_45960;
var inst_45942 = inst_45959;
var inst_45943 = inst_45961;
var inst_45944 = (0);
var state_45989__$1 = (function (){var statearr_46008 = state_45989;
(statearr_46008[(8)] = inst_45941);

(statearr_46008[(10)] = inst_45944);

(statearr_46008[(11)] = inst_45943);

(statearr_46008[(12)] = inst_45942);

return statearr_46008;
})();
var statearr_46009_46039 = state_45989__$1;
(statearr_46009_46039[(2)] = null);

(statearr_46009_46039[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45990 === (3))){
var inst_45987 = (state_45989[(2)]);
var state_45989__$1 = state_45989;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45989__$1,inst_45987);
} else {
if((state_val_45990 === (12))){
var inst_45975 = (state_45989[(2)]);
var state_45989__$1 = state_45989;
var statearr_46010_46040 = state_45989__$1;
(statearr_46010_46040[(2)] = inst_45975);

(statearr_46010_46040[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45990 === (2))){
var state_45989__$1 = state_45989;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45989__$1,(4),in$);
} else {
if((state_val_45990 === (23))){
var inst_45983 = (state_45989[(2)]);
var state_45989__$1 = state_45989;
var statearr_46011_46041 = state_45989__$1;
(statearr_46011_46041[(2)] = inst_45983);

(statearr_46011_46041[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45990 === (19))){
var inst_45970 = (state_45989[(2)]);
var state_45989__$1 = state_45989;
var statearr_46012_46042 = state_45989__$1;
(statearr_46012_46042[(2)] = inst_45970);

(statearr_46012_46042[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45990 === (11))){
var inst_45941 = (state_45989[(8)]);
var inst_45955 = (state_45989[(7)]);
var inst_45955__$1 = cljs.core.seq.call(null,inst_45941);
var state_45989__$1 = (function (){var statearr_46013 = state_45989;
(statearr_46013[(7)] = inst_45955__$1);

return statearr_46013;
})();
if(inst_45955__$1){
var statearr_46014_46043 = state_45989__$1;
(statearr_46014_46043[(1)] = (14));

} else {
var statearr_46015_46044 = state_45989__$1;
(statearr_46015_46044[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45990 === (9))){
var inst_45977 = (state_45989[(2)]);
var inst_45978 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_45989__$1 = (function (){var statearr_46016 = state_45989;
(statearr_46016[(15)] = inst_45977);

return statearr_46016;
})();
if(cljs.core.truth_(inst_45978)){
var statearr_46017_46045 = state_45989__$1;
(statearr_46017_46045[(1)] = (21));

} else {
var statearr_46018_46046 = state_45989__$1;
(statearr_46018_46046[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45990 === (5))){
var inst_45933 = cljs.core.async.close_BANG_.call(null,out);
var state_45989__$1 = state_45989;
var statearr_46019_46047 = state_45989__$1;
(statearr_46019_46047[(2)] = inst_45933);

(statearr_46019_46047[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45990 === (14))){
var inst_45955 = (state_45989[(7)]);
var inst_45957 = cljs.core.chunked_seq_QMARK_.call(null,inst_45955);
var state_45989__$1 = state_45989;
if(inst_45957){
var statearr_46020_46048 = state_45989__$1;
(statearr_46020_46048[(1)] = (17));

} else {
var statearr_46021_46049 = state_45989__$1;
(statearr_46021_46049[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45990 === (16))){
var inst_45973 = (state_45989[(2)]);
var state_45989__$1 = state_45989;
var statearr_46022_46050 = state_45989__$1;
(statearr_46022_46050[(2)] = inst_45973);

(statearr_46022_46050[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45990 === (10))){
var inst_45944 = (state_45989[(10)]);
var inst_45942 = (state_45989[(12)]);
var inst_45949 = cljs.core._nth.call(null,inst_45942,inst_45944);
var state_45989__$1 = state_45989;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45989__$1,(13),out,inst_45949);
} else {
if((state_val_45990 === (18))){
var inst_45955 = (state_45989[(7)]);
var inst_45964 = cljs.core.first.call(null,inst_45955);
var state_45989__$1 = state_45989;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45989__$1,(20),out,inst_45964);
} else {
if((state_val_45990 === (8))){
var inst_45944 = (state_45989[(10)]);
var inst_45943 = (state_45989[(11)]);
var inst_45946 = (inst_45944 < inst_45943);
var inst_45947 = inst_45946;
var state_45989__$1 = state_45989;
if(cljs.core.truth_(inst_45947)){
var statearr_46023_46051 = state_45989__$1;
(statearr_46023_46051[(1)] = (10));

} else {
var statearr_46024_46052 = state_45989__$1;
(statearr_46024_46052[(1)] = (11));

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
});})(c__44387__auto__))
;
return ((function (switch__44299__auto__,c__44387__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__44300__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__44300__auto____0 = (function (){
var statearr_46025 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46025[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__44300__auto__);

(statearr_46025[(1)] = (1));

return statearr_46025;
});
var cljs$core$async$mapcat_STAR__$_state_machine__44300__auto____1 = (function (state_45989){
while(true){
var ret_value__44301__auto__ = (function (){try{while(true){
var result__44302__auto__ = switch__44299__auto__.call(null,state_45989);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44302__auto__;
}
break;
}
}catch (e46026){if((e46026 instanceof Object)){
var ex__44303__auto__ = e46026;
var statearr_46027_46053 = state_45989;
(statearr_46027_46053[(5)] = ex__44303__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45989);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46026;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46054 = state_45989;
state_45989 = G__46054;
continue;
} else {
return ret_value__44301__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__44300__auto__ = function(state_45989){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__44300__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__44300__auto____1.call(this,state_45989);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__44300__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__44300__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__44300__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__44300__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__44300__auto__;
})()
;})(switch__44299__auto__,c__44387__auto__))
})();
var state__44389__auto__ = (function (){var statearr_46028 = f__44388__auto__.call(null);
(statearr_46028[(6)] = c__44387__auto__);

return statearr_46028;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44389__auto__);
});})(c__44387__auto__))
);

return c__44387__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__46056 = arguments.length;
switch (G__46056) {
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
var G__46059 = arguments.length;
switch (G__46059) {
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
var G__46062 = arguments.length;
switch (G__46062) {
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
var c__44387__auto___46109 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44387__auto___46109,out){
return (function (){
var f__44388__auto__ = (function (){var switch__44299__auto__ = ((function (c__44387__auto___46109,out){
return (function (state_46086){
var state_val_46087 = (state_46086[(1)]);
if((state_val_46087 === (7))){
var inst_46081 = (state_46086[(2)]);
var state_46086__$1 = state_46086;
var statearr_46088_46110 = state_46086__$1;
(statearr_46088_46110[(2)] = inst_46081);

(statearr_46088_46110[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46087 === (1))){
var inst_46063 = null;
var state_46086__$1 = (function (){var statearr_46089 = state_46086;
(statearr_46089[(7)] = inst_46063);

return statearr_46089;
})();
var statearr_46090_46111 = state_46086__$1;
(statearr_46090_46111[(2)] = null);

(statearr_46090_46111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46087 === (4))){
var inst_46066 = (state_46086[(8)]);
var inst_46066__$1 = (state_46086[(2)]);
var inst_46067 = (inst_46066__$1 == null);
var inst_46068 = cljs.core.not.call(null,inst_46067);
var state_46086__$1 = (function (){var statearr_46091 = state_46086;
(statearr_46091[(8)] = inst_46066__$1);

return statearr_46091;
})();
if(inst_46068){
var statearr_46092_46112 = state_46086__$1;
(statearr_46092_46112[(1)] = (5));

} else {
var statearr_46093_46113 = state_46086__$1;
(statearr_46093_46113[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46087 === (6))){
var state_46086__$1 = state_46086;
var statearr_46094_46114 = state_46086__$1;
(statearr_46094_46114[(2)] = null);

(statearr_46094_46114[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46087 === (3))){
var inst_46083 = (state_46086[(2)]);
var inst_46084 = cljs.core.async.close_BANG_.call(null,out);
var state_46086__$1 = (function (){var statearr_46095 = state_46086;
(statearr_46095[(9)] = inst_46083);

return statearr_46095;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46086__$1,inst_46084);
} else {
if((state_val_46087 === (2))){
var state_46086__$1 = state_46086;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46086__$1,(4),ch);
} else {
if((state_val_46087 === (11))){
var inst_46066 = (state_46086[(8)]);
var inst_46075 = (state_46086[(2)]);
var inst_46063 = inst_46066;
var state_46086__$1 = (function (){var statearr_46096 = state_46086;
(statearr_46096[(10)] = inst_46075);

(statearr_46096[(7)] = inst_46063);

return statearr_46096;
})();
var statearr_46097_46115 = state_46086__$1;
(statearr_46097_46115[(2)] = null);

(statearr_46097_46115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46087 === (9))){
var inst_46066 = (state_46086[(8)]);
var state_46086__$1 = state_46086;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46086__$1,(11),out,inst_46066);
} else {
if((state_val_46087 === (5))){
var inst_46066 = (state_46086[(8)]);
var inst_46063 = (state_46086[(7)]);
var inst_46070 = cljs.core._EQ_.call(null,inst_46066,inst_46063);
var state_46086__$1 = state_46086;
if(inst_46070){
var statearr_46099_46116 = state_46086__$1;
(statearr_46099_46116[(1)] = (8));

} else {
var statearr_46100_46117 = state_46086__$1;
(statearr_46100_46117[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46087 === (10))){
var inst_46078 = (state_46086[(2)]);
var state_46086__$1 = state_46086;
var statearr_46101_46118 = state_46086__$1;
(statearr_46101_46118[(2)] = inst_46078);

(statearr_46101_46118[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46087 === (8))){
var inst_46063 = (state_46086[(7)]);
var tmp46098 = inst_46063;
var inst_46063__$1 = tmp46098;
var state_46086__$1 = (function (){var statearr_46102 = state_46086;
(statearr_46102[(7)] = inst_46063__$1);

return statearr_46102;
})();
var statearr_46103_46119 = state_46086__$1;
(statearr_46103_46119[(2)] = null);

(statearr_46103_46119[(1)] = (2));


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
});})(c__44387__auto___46109,out))
;
return ((function (switch__44299__auto__,c__44387__auto___46109,out){
return (function() {
var cljs$core$async$state_machine__44300__auto__ = null;
var cljs$core$async$state_machine__44300__auto____0 = (function (){
var statearr_46104 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46104[(0)] = cljs$core$async$state_machine__44300__auto__);

(statearr_46104[(1)] = (1));

return statearr_46104;
});
var cljs$core$async$state_machine__44300__auto____1 = (function (state_46086){
while(true){
var ret_value__44301__auto__ = (function (){try{while(true){
var result__44302__auto__ = switch__44299__auto__.call(null,state_46086);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44302__auto__;
}
break;
}
}catch (e46105){if((e46105 instanceof Object)){
var ex__44303__auto__ = e46105;
var statearr_46106_46120 = state_46086;
(statearr_46106_46120[(5)] = ex__44303__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46086);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46105;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46121 = state_46086;
state_46086 = G__46121;
continue;
} else {
return ret_value__44301__auto__;
}
break;
}
});
cljs$core$async$state_machine__44300__auto__ = function(state_46086){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44300__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44300__auto____1.call(this,state_46086);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__44300__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44300__auto____0;
cljs$core$async$state_machine__44300__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44300__auto____1;
return cljs$core$async$state_machine__44300__auto__;
})()
;})(switch__44299__auto__,c__44387__auto___46109,out))
})();
var state__44389__auto__ = (function (){var statearr_46107 = f__44388__auto__.call(null);
(statearr_46107[(6)] = c__44387__auto___46109);

return statearr_46107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44389__auto__);
});})(c__44387__auto___46109,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__46123 = arguments.length;
switch (G__46123) {
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
var c__44387__auto___46189 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44387__auto___46189,out){
return (function (){
var f__44388__auto__ = (function (){var switch__44299__auto__ = ((function (c__44387__auto___46189,out){
return (function (state_46161){
var state_val_46162 = (state_46161[(1)]);
if((state_val_46162 === (7))){
var inst_46157 = (state_46161[(2)]);
var state_46161__$1 = state_46161;
var statearr_46163_46190 = state_46161__$1;
(statearr_46163_46190[(2)] = inst_46157);

(statearr_46163_46190[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46162 === (1))){
var inst_46124 = (new Array(n));
var inst_46125 = inst_46124;
var inst_46126 = (0);
var state_46161__$1 = (function (){var statearr_46164 = state_46161;
(statearr_46164[(7)] = inst_46126);

(statearr_46164[(8)] = inst_46125);

return statearr_46164;
})();
var statearr_46165_46191 = state_46161__$1;
(statearr_46165_46191[(2)] = null);

(statearr_46165_46191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46162 === (4))){
var inst_46129 = (state_46161[(9)]);
var inst_46129__$1 = (state_46161[(2)]);
var inst_46130 = (inst_46129__$1 == null);
var inst_46131 = cljs.core.not.call(null,inst_46130);
var state_46161__$1 = (function (){var statearr_46166 = state_46161;
(statearr_46166[(9)] = inst_46129__$1);

return statearr_46166;
})();
if(inst_46131){
var statearr_46167_46192 = state_46161__$1;
(statearr_46167_46192[(1)] = (5));

} else {
var statearr_46168_46193 = state_46161__$1;
(statearr_46168_46193[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46162 === (15))){
var inst_46151 = (state_46161[(2)]);
var state_46161__$1 = state_46161;
var statearr_46169_46194 = state_46161__$1;
(statearr_46169_46194[(2)] = inst_46151);

(statearr_46169_46194[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46162 === (13))){
var state_46161__$1 = state_46161;
var statearr_46170_46195 = state_46161__$1;
(statearr_46170_46195[(2)] = null);

(statearr_46170_46195[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46162 === (6))){
var inst_46126 = (state_46161[(7)]);
var inst_46147 = (inst_46126 > (0));
var state_46161__$1 = state_46161;
if(cljs.core.truth_(inst_46147)){
var statearr_46171_46196 = state_46161__$1;
(statearr_46171_46196[(1)] = (12));

} else {
var statearr_46172_46197 = state_46161__$1;
(statearr_46172_46197[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46162 === (3))){
var inst_46159 = (state_46161[(2)]);
var state_46161__$1 = state_46161;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46161__$1,inst_46159);
} else {
if((state_val_46162 === (12))){
var inst_46125 = (state_46161[(8)]);
var inst_46149 = cljs.core.vec.call(null,inst_46125);
var state_46161__$1 = state_46161;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46161__$1,(15),out,inst_46149);
} else {
if((state_val_46162 === (2))){
var state_46161__$1 = state_46161;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46161__$1,(4),ch);
} else {
if((state_val_46162 === (11))){
var inst_46141 = (state_46161[(2)]);
var inst_46142 = (new Array(n));
var inst_46125 = inst_46142;
var inst_46126 = (0);
var state_46161__$1 = (function (){var statearr_46173 = state_46161;
(statearr_46173[(10)] = inst_46141);

(statearr_46173[(7)] = inst_46126);

(statearr_46173[(8)] = inst_46125);

return statearr_46173;
})();
var statearr_46174_46198 = state_46161__$1;
(statearr_46174_46198[(2)] = null);

(statearr_46174_46198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46162 === (9))){
var inst_46125 = (state_46161[(8)]);
var inst_46139 = cljs.core.vec.call(null,inst_46125);
var state_46161__$1 = state_46161;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46161__$1,(11),out,inst_46139);
} else {
if((state_val_46162 === (5))){
var inst_46126 = (state_46161[(7)]);
var inst_46134 = (state_46161[(11)]);
var inst_46125 = (state_46161[(8)]);
var inst_46129 = (state_46161[(9)]);
var inst_46133 = (inst_46125[inst_46126] = inst_46129);
var inst_46134__$1 = (inst_46126 + (1));
var inst_46135 = (inst_46134__$1 < n);
var state_46161__$1 = (function (){var statearr_46175 = state_46161;
(statearr_46175[(12)] = inst_46133);

(statearr_46175[(11)] = inst_46134__$1);

return statearr_46175;
})();
if(cljs.core.truth_(inst_46135)){
var statearr_46176_46199 = state_46161__$1;
(statearr_46176_46199[(1)] = (8));

} else {
var statearr_46177_46200 = state_46161__$1;
(statearr_46177_46200[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46162 === (14))){
var inst_46154 = (state_46161[(2)]);
var inst_46155 = cljs.core.async.close_BANG_.call(null,out);
var state_46161__$1 = (function (){var statearr_46179 = state_46161;
(statearr_46179[(13)] = inst_46154);

return statearr_46179;
})();
var statearr_46180_46201 = state_46161__$1;
(statearr_46180_46201[(2)] = inst_46155);

(statearr_46180_46201[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46162 === (10))){
var inst_46145 = (state_46161[(2)]);
var state_46161__$1 = state_46161;
var statearr_46181_46202 = state_46161__$1;
(statearr_46181_46202[(2)] = inst_46145);

(statearr_46181_46202[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46162 === (8))){
var inst_46134 = (state_46161[(11)]);
var inst_46125 = (state_46161[(8)]);
var tmp46178 = inst_46125;
var inst_46125__$1 = tmp46178;
var inst_46126 = inst_46134;
var state_46161__$1 = (function (){var statearr_46182 = state_46161;
(statearr_46182[(7)] = inst_46126);

(statearr_46182[(8)] = inst_46125__$1);

return statearr_46182;
})();
var statearr_46183_46203 = state_46161__$1;
(statearr_46183_46203[(2)] = null);

(statearr_46183_46203[(1)] = (2));


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
});})(c__44387__auto___46189,out))
;
return ((function (switch__44299__auto__,c__44387__auto___46189,out){
return (function() {
var cljs$core$async$state_machine__44300__auto__ = null;
var cljs$core$async$state_machine__44300__auto____0 = (function (){
var statearr_46184 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46184[(0)] = cljs$core$async$state_machine__44300__auto__);

(statearr_46184[(1)] = (1));

return statearr_46184;
});
var cljs$core$async$state_machine__44300__auto____1 = (function (state_46161){
while(true){
var ret_value__44301__auto__ = (function (){try{while(true){
var result__44302__auto__ = switch__44299__auto__.call(null,state_46161);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44302__auto__;
}
break;
}
}catch (e46185){if((e46185 instanceof Object)){
var ex__44303__auto__ = e46185;
var statearr_46186_46204 = state_46161;
(statearr_46186_46204[(5)] = ex__44303__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46161);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46185;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46205 = state_46161;
state_46161 = G__46205;
continue;
} else {
return ret_value__44301__auto__;
}
break;
}
});
cljs$core$async$state_machine__44300__auto__ = function(state_46161){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44300__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44300__auto____1.call(this,state_46161);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__44300__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44300__auto____0;
cljs$core$async$state_machine__44300__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44300__auto____1;
return cljs$core$async$state_machine__44300__auto__;
})()
;})(switch__44299__auto__,c__44387__auto___46189,out))
})();
var state__44389__auto__ = (function (){var statearr_46187 = f__44388__auto__.call(null);
(statearr_46187[(6)] = c__44387__auto___46189);

return statearr_46187;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44389__auto__);
});})(c__44387__auto___46189,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__46207 = arguments.length;
switch (G__46207) {
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
var c__44387__auto___46277 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44387__auto___46277,out){
return (function (){
var f__44388__auto__ = (function (){var switch__44299__auto__ = ((function (c__44387__auto___46277,out){
return (function (state_46249){
var state_val_46250 = (state_46249[(1)]);
if((state_val_46250 === (7))){
var inst_46245 = (state_46249[(2)]);
var state_46249__$1 = state_46249;
var statearr_46251_46278 = state_46249__$1;
(statearr_46251_46278[(2)] = inst_46245);

(statearr_46251_46278[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46250 === (1))){
var inst_46208 = [];
var inst_46209 = inst_46208;
var inst_46210 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_46249__$1 = (function (){var statearr_46252 = state_46249;
(statearr_46252[(7)] = inst_46209);

(statearr_46252[(8)] = inst_46210);

return statearr_46252;
})();
var statearr_46253_46279 = state_46249__$1;
(statearr_46253_46279[(2)] = null);

(statearr_46253_46279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46250 === (4))){
var inst_46213 = (state_46249[(9)]);
var inst_46213__$1 = (state_46249[(2)]);
var inst_46214 = (inst_46213__$1 == null);
var inst_46215 = cljs.core.not.call(null,inst_46214);
var state_46249__$1 = (function (){var statearr_46254 = state_46249;
(statearr_46254[(9)] = inst_46213__$1);

return statearr_46254;
})();
if(inst_46215){
var statearr_46255_46280 = state_46249__$1;
(statearr_46255_46280[(1)] = (5));

} else {
var statearr_46256_46281 = state_46249__$1;
(statearr_46256_46281[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46250 === (15))){
var inst_46239 = (state_46249[(2)]);
var state_46249__$1 = state_46249;
var statearr_46257_46282 = state_46249__$1;
(statearr_46257_46282[(2)] = inst_46239);

(statearr_46257_46282[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46250 === (13))){
var state_46249__$1 = state_46249;
var statearr_46258_46283 = state_46249__$1;
(statearr_46258_46283[(2)] = null);

(statearr_46258_46283[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46250 === (6))){
var inst_46209 = (state_46249[(7)]);
var inst_46234 = inst_46209.length;
var inst_46235 = (inst_46234 > (0));
var state_46249__$1 = state_46249;
if(cljs.core.truth_(inst_46235)){
var statearr_46259_46284 = state_46249__$1;
(statearr_46259_46284[(1)] = (12));

} else {
var statearr_46260_46285 = state_46249__$1;
(statearr_46260_46285[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46250 === (3))){
var inst_46247 = (state_46249[(2)]);
var state_46249__$1 = state_46249;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46249__$1,inst_46247);
} else {
if((state_val_46250 === (12))){
var inst_46209 = (state_46249[(7)]);
var inst_46237 = cljs.core.vec.call(null,inst_46209);
var state_46249__$1 = state_46249;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46249__$1,(15),out,inst_46237);
} else {
if((state_val_46250 === (2))){
var state_46249__$1 = state_46249;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46249__$1,(4),ch);
} else {
if((state_val_46250 === (11))){
var inst_46213 = (state_46249[(9)]);
var inst_46217 = (state_46249[(10)]);
var inst_46227 = (state_46249[(2)]);
var inst_46228 = [];
var inst_46229 = inst_46228.push(inst_46213);
var inst_46209 = inst_46228;
var inst_46210 = inst_46217;
var state_46249__$1 = (function (){var statearr_46261 = state_46249;
(statearr_46261[(11)] = inst_46229);

(statearr_46261[(12)] = inst_46227);

(statearr_46261[(7)] = inst_46209);

(statearr_46261[(8)] = inst_46210);

return statearr_46261;
})();
var statearr_46262_46286 = state_46249__$1;
(statearr_46262_46286[(2)] = null);

(statearr_46262_46286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46250 === (9))){
var inst_46209 = (state_46249[(7)]);
var inst_46225 = cljs.core.vec.call(null,inst_46209);
var state_46249__$1 = state_46249;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46249__$1,(11),out,inst_46225);
} else {
if((state_val_46250 === (5))){
var inst_46213 = (state_46249[(9)]);
var inst_46217 = (state_46249[(10)]);
var inst_46210 = (state_46249[(8)]);
var inst_46217__$1 = f.call(null,inst_46213);
var inst_46218 = cljs.core._EQ_.call(null,inst_46217__$1,inst_46210);
var inst_46219 = cljs.core.keyword_identical_QMARK_.call(null,inst_46210,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_46220 = (inst_46218) || (inst_46219);
var state_46249__$1 = (function (){var statearr_46263 = state_46249;
(statearr_46263[(10)] = inst_46217__$1);

return statearr_46263;
})();
if(cljs.core.truth_(inst_46220)){
var statearr_46264_46287 = state_46249__$1;
(statearr_46264_46287[(1)] = (8));

} else {
var statearr_46265_46288 = state_46249__$1;
(statearr_46265_46288[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46250 === (14))){
var inst_46242 = (state_46249[(2)]);
var inst_46243 = cljs.core.async.close_BANG_.call(null,out);
var state_46249__$1 = (function (){var statearr_46267 = state_46249;
(statearr_46267[(13)] = inst_46242);

return statearr_46267;
})();
var statearr_46268_46289 = state_46249__$1;
(statearr_46268_46289[(2)] = inst_46243);

(statearr_46268_46289[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46250 === (10))){
var inst_46232 = (state_46249[(2)]);
var state_46249__$1 = state_46249;
var statearr_46269_46290 = state_46249__$1;
(statearr_46269_46290[(2)] = inst_46232);

(statearr_46269_46290[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46250 === (8))){
var inst_46213 = (state_46249[(9)]);
var inst_46217 = (state_46249[(10)]);
var inst_46209 = (state_46249[(7)]);
var inst_46222 = inst_46209.push(inst_46213);
var tmp46266 = inst_46209;
var inst_46209__$1 = tmp46266;
var inst_46210 = inst_46217;
var state_46249__$1 = (function (){var statearr_46270 = state_46249;
(statearr_46270[(14)] = inst_46222);

(statearr_46270[(7)] = inst_46209__$1);

(statearr_46270[(8)] = inst_46210);

return statearr_46270;
})();
var statearr_46271_46291 = state_46249__$1;
(statearr_46271_46291[(2)] = null);

(statearr_46271_46291[(1)] = (2));


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
});})(c__44387__auto___46277,out))
;
return ((function (switch__44299__auto__,c__44387__auto___46277,out){
return (function() {
var cljs$core$async$state_machine__44300__auto__ = null;
var cljs$core$async$state_machine__44300__auto____0 = (function (){
var statearr_46272 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46272[(0)] = cljs$core$async$state_machine__44300__auto__);

(statearr_46272[(1)] = (1));

return statearr_46272;
});
var cljs$core$async$state_machine__44300__auto____1 = (function (state_46249){
while(true){
var ret_value__44301__auto__ = (function (){try{while(true){
var result__44302__auto__ = switch__44299__auto__.call(null,state_46249);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44302__auto__;
}
break;
}
}catch (e46273){if((e46273 instanceof Object)){
var ex__44303__auto__ = e46273;
var statearr_46274_46292 = state_46249;
(statearr_46274_46292[(5)] = ex__44303__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46249);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46273;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46293 = state_46249;
state_46249 = G__46293;
continue;
} else {
return ret_value__44301__auto__;
}
break;
}
});
cljs$core$async$state_machine__44300__auto__ = function(state_46249){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44300__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44300__auto____1.call(this,state_46249);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__44300__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44300__auto____0;
cljs$core$async$state_machine__44300__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44300__auto____1;
return cljs$core$async$state_machine__44300__auto__;
})()
;})(switch__44299__auto__,c__44387__auto___46277,out))
})();
var state__44389__auto__ = (function (){var statearr_46275 = f__44388__auto__.call(null);
(statearr_46275[(6)] = c__44387__auto___46277);

return statearr_46275;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44389__auto__);
});})(c__44387__auto___46277,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1503441678438