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
var G__44442 = arguments.length;
switch (G__44442) {
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
if(typeof cljs.core.async.t_cljs$core$async44443 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44443 = (function (f,blockable,meta44444){
this.f = f;
this.blockable = blockable;
this.meta44444 = meta44444;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async44443.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44445,meta44444__$1){
var self__ = this;
var _44445__$1 = this;
return (new cljs.core.async.t_cljs$core$async44443(self__.f,self__.blockable,meta44444__$1));
});

cljs.core.async.t_cljs$core$async44443.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44445){
var self__ = this;
var _44445__$1 = this;
return self__.meta44444;
});

cljs.core.async.t_cljs$core$async44443.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44443.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async44443.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async44443.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async44443.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta44444","meta44444",-1639149441,null)], null);
});

cljs.core.async.t_cljs$core$async44443.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44443.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44443";

cljs.core.async.t_cljs$core$async44443.cljs$lang$ctorPrWriter = (function (this__37380__auto__,writer__37381__auto__,opt__37382__auto__){
return cljs.core._write.call(null,writer__37381__auto__,"cljs.core.async/t_cljs$core$async44443");
});

cljs.core.async.__GT_t_cljs$core$async44443 = (function cljs$core$async$__GT_t_cljs$core$async44443(f__$1,blockable__$1,meta44444){
return (new cljs.core.async.t_cljs$core$async44443(f__$1,blockable__$1,meta44444));
});

}

return (new cljs.core.async.t_cljs$core$async44443(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__44449 = arguments.length;
switch (G__44449) {
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
var G__44452 = arguments.length;
switch (G__44452) {
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
var G__44455 = arguments.length;
switch (G__44455) {
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
var val_44457 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_44457);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_44457,ret){
return (function (){
return fn1.call(null,val_44457);
});})(val_44457,ret))
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
var G__44459 = arguments.length;
switch (G__44459) {
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
var n__37693__auto___44461 = n;
var x_44462 = (0);
while(true){
if((x_44462 < n__37693__auto___44461)){
(a[x_44462] = (0));

var G__44463 = (x_44462 + (1));
x_44462 = G__44463;
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

var G__44464 = (i + (1));
i = G__44464;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async44465 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44465 = (function (flag,meta44466){
this.flag = flag;
this.meta44466 = meta44466;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async44465.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_44467,meta44466__$1){
var self__ = this;
var _44467__$1 = this;
return (new cljs.core.async.t_cljs$core$async44465(self__.flag,meta44466__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async44465.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_44467){
var self__ = this;
var _44467__$1 = this;
return self__.meta44466;
});})(flag))
;

cljs.core.async.t_cljs$core$async44465.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44465.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async44465.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async44465.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async44465.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta44466","meta44466",1139979236,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async44465.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44465.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44465";

cljs.core.async.t_cljs$core$async44465.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__37380__auto__,writer__37381__auto__,opt__37382__auto__){
return cljs.core._write.call(null,writer__37381__auto__,"cljs.core.async/t_cljs$core$async44465");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async44465 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async44465(flag__$1,meta44466){
return (new cljs.core.async.t_cljs$core$async44465(flag__$1,meta44466));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async44465(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async44468 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44468 = (function (flag,cb,meta44469){
this.flag = flag;
this.cb = cb;
this.meta44469 = meta44469;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async44468.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44470,meta44469__$1){
var self__ = this;
var _44470__$1 = this;
return (new cljs.core.async.t_cljs$core$async44468(self__.flag,self__.cb,meta44469__$1));
});

cljs.core.async.t_cljs$core$async44468.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44470){
var self__ = this;
var _44470__$1 = this;
return self__.meta44469;
});

cljs.core.async.t_cljs$core$async44468.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44468.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async44468.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async44468.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async44468.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta44469","meta44469",-588366480,null)], null);
});

cljs.core.async.t_cljs$core$async44468.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44468.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44468";

cljs.core.async.t_cljs$core$async44468.cljs$lang$ctorPrWriter = (function (this__37380__auto__,writer__37381__auto__,opt__37382__auto__){
return cljs.core._write.call(null,writer__37381__auto__,"cljs.core.async/t_cljs$core$async44468");
});

cljs.core.async.__GT_t_cljs$core$async44468 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async44468(flag__$1,cb__$1,meta44469){
return (new cljs.core.async.t_cljs$core$async44468(flag__$1,cb__$1,meta44469));
});

}

return (new cljs.core.async.t_cljs$core$async44468(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__44471_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44471_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__44472_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44472_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__36769__auto__ = wport;
if(cljs.core.truth_(or__36769__auto__)){
return or__36769__auto__;
} else {
return port;
}
})()], null));
} else {
var G__44473 = (i + (1));
i = G__44473;
continue;
}
} else {
return null;
}
break;
}
})();
var or__36769__auto__ = ret;
if(cljs.core.truth_(or__36769__auto__)){
return or__36769__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__36757__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__36757__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__36757__auto__;
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
var args__37901__auto__ = [];
var len__37894__auto___44479 = arguments.length;
var i__37895__auto___44480 = (0);
while(true){
if((i__37895__auto___44480 < len__37894__auto___44479)){
args__37901__auto__.push((arguments[i__37895__auto___44480]));

var G__44481 = (i__37895__auto___44480 + (1));
i__37895__auto___44480 = G__44481;
continue;
} else {
}
break;
}

var argseq__37902__auto__ = ((((1) < args__37901__auto__.length))?(new cljs.core.IndexedSeq(args__37901__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37902__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__44476){
var map__44477 = p__44476;
var map__44477__$1 = ((((!((map__44477 == null)))?((((map__44477.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44477.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44477):map__44477);
var opts = map__44477__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq44474){
var G__44475 = cljs.core.first.call(null,seq44474);
var seq44474__$1 = cljs.core.next.call(null,seq44474);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__44475,seq44474__$1);
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
var G__44483 = arguments.length;
switch (G__44483) {
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
var c__44396__auto___44529 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44396__auto___44529){
return (function (){
var f__44397__auto__ = (function (){var switch__44308__auto__ = ((function (c__44396__auto___44529){
return (function (state_44507){
var state_val_44508 = (state_44507[(1)]);
if((state_val_44508 === (7))){
var inst_44503 = (state_44507[(2)]);
var state_44507__$1 = state_44507;
var statearr_44509_44530 = state_44507__$1;
(statearr_44509_44530[(2)] = inst_44503);

(statearr_44509_44530[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44508 === (1))){
var state_44507__$1 = state_44507;
var statearr_44510_44531 = state_44507__$1;
(statearr_44510_44531[(2)] = null);

(statearr_44510_44531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44508 === (4))){
var inst_44486 = (state_44507[(7)]);
var inst_44486__$1 = (state_44507[(2)]);
var inst_44487 = (inst_44486__$1 == null);
var state_44507__$1 = (function (){var statearr_44511 = state_44507;
(statearr_44511[(7)] = inst_44486__$1);

return statearr_44511;
})();
if(cljs.core.truth_(inst_44487)){
var statearr_44512_44532 = state_44507__$1;
(statearr_44512_44532[(1)] = (5));

} else {
var statearr_44513_44533 = state_44507__$1;
(statearr_44513_44533[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44508 === (13))){
var state_44507__$1 = state_44507;
var statearr_44514_44534 = state_44507__$1;
(statearr_44514_44534[(2)] = null);

(statearr_44514_44534[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44508 === (6))){
var inst_44486 = (state_44507[(7)]);
var state_44507__$1 = state_44507;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44507__$1,(11),to,inst_44486);
} else {
if((state_val_44508 === (3))){
var inst_44505 = (state_44507[(2)]);
var state_44507__$1 = state_44507;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44507__$1,inst_44505);
} else {
if((state_val_44508 === (12))){
var state_44507__$1 = state_44507;
var statearr_44515_44535 = state_44507__$1;
(statearr_44515_44535[(2)] = null);

(statearr_44515_44535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44508 === (2))){
var state_44507__$1 = state_44507;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44507__$1,(4),from);
} else {
if((state_val_44508 === (11))){
var inst_44496 = (state_44507[(2)]);
var state_44507__$1 = state_44507;
if(cljs.core.truth_(inst_44496)){
var statearr_44516_44536 = state_44507__$1;
(statearr_44516_44536[(1)] = (12));

} else {
var statearr_44517_44537 = state_44507__$1;
(statearr_44517_44537[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44508 === (9))){
var state_44507__$1 = state_44507;
var statearr_44518_44538 = state_44507__$1;
(statearr_44518_44538[(2)] = null);

(statearr_44518_44538[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44508 === (5))){
var state_44507__$1 = state_44507;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44519_44539 = state_44507__$1;
(statearr_44519_44539[(1)] = (8));

} else {
var statearr_44520_44540 = state_44507__$1;
(statearr_44520_44540[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44508 === (14))){
var inst_44501 = (state_44507[(2)]);
var state_44507__$1 = state_44507;
var statearr_44521_44541 = state_44507__$1;
(statearr_44521_44541[(2)] = inst_44501);

(statearr_44521_44541[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44508 === (10))){
var inst_44493 = (state_44507[(2)]);
var state_44507__$1 = state_44507;
var statearr_44522_44542 = state_44507__$1;
(statearr_44522_44542[(2)] = inst_44493);

(statearr_44522_44542[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44508 === (8))){
var inst_44490 = cljs.core.async.close_BANG_.call(null,to);
var state_44507__$1 = state_44507;
var statearr_44523_44543 = state_44507__$1;
(statearr_44523_44543[(2)] = inst_44490);

(statearr_44523_44543[(1)] = (10));


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
});})(c__44396__auto___44529))
;
return ((function (switch__44308__auto__,c__44396__auto___44529){
return (function() {
var cljs$core$async$state_machine__44309__auto__ = null;
var cljs$core$async$state_machine__44309__auto____0 = (function (){
var statearr_44524 = [null,null,null,null,null,null,null,null];
(statearr_44524[(0)] = cljs$core$async$state_machine__44309__auto__);

(statearr_44524[(1)] = (1));

return statearr_44524;
});
var cljs$core$async$state_machine__44309__auto____1 = (function (state_44507){
while(true){
var ret_value__44310__auto__ = (function (){try{while(true){
var result__44311__auto__ = switch__44308__auto__.call(null,state_44507);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44311__auto__;
}
break;
}
}catch (e44525){if((e44525 instanceof Object)){
var ex__44312__auto__ = e44525;
var statearr_44526_44544 = state_44507;
(statearr_44526_44544[(5)] = ex__44312__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44507);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44525;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44545 = state_44507;
state_44507 = G__44545;
continue;
} else {
return ret_value__44310__auto__;
}
break;
}
});
cljs$core$async$state_machine__44309__auto__ = function(state_44507){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44309__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44309__auto____1.call(this,state_44507);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__44309__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44309__auto____0;
cljs$core$async$state_machine__44309__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44309__auto____1;
return cljs$core$async$state_machine__44309__auto__;
})()
;})(switch__44308__auto__,c__44396__auto___44529))
})();
var state__44398__auto__ = (function (){var statearr_44527 = f__44397__auto__.call(null);
(statearr_44527[(6)] = c__44396__auto___44529);

return statearr_44527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44398__auto__);
});})(c__44396__auto___44529))
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
return (function (p__44546){
var vec__44547 = p__44546;
var v = cljs.core.nth.call(null,vec__44547,(0),null);
var p = cljs.core.nth.call(null,vec__44547,(1),null);
var job = vec__44547;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__44396__auto___44718 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44396__auto___44718,res,vec__44547,v,p,job,jobs,results){
return (function (){
var f__44397__auto__ = (function (){var switch__44308__auto__ = ((function (c__44396__auto___44718,res,vec__44547,v,p,job,jobs,results){
return (function (state_44554){
var state_val_44555 = (state_44554[(1)]);
if((state_val_44555 === (1))){
var state_44554__$1 = state_44554;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44554__$1,(2),res,v);
} else {
if((state_val_44555 === (2))){
var inst_44551 = (state_44554[(2)]);
var inst_44552 = cljs.core.async.close_BANG_.call(null,res);
var state_44554__$1 = (function (){var statearr_44556 = state_44554;
(statearr_44556[(7)] = inst_44551);

return statearr_44556;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44554__$1,inst_44552);
} else {
return null;
}
}
});})(c__44396__auto___44718,res,vec__44547,v,p,job,jobs,results))
;
return ((function (switch__44308__auto__,c__44396__auto___44718,res,vec__44547,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44309__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44309__auto____0 = (function (){
var statearr_44557 = [null,null,null,null,null,null,null,null];
(statearr_44557[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44309__auto__);

(statearr_44557[(1)] = (1));

return statearr_44557;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44309__auto____1 = (function (state_44554){
while(true){
var ret_value__44310__auto__ = (function (){try{while(true){
var result__44311__auto__ = switch__44308__auto__.call(null,state_44554);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44311__auto__;
}
break;
}
}catch (e44558){if((e44558 instanceof Object)){
var ex__44312__auto__ = e44558;
var statearr_44559_44719 = state_44554;
(statearr_44559_44719[(5)] = ex__44312__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44554);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44558;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44720 = state_44554;
state_44554 = G__44720;
continue;
} else {
return ret_value__44310__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44309__auto__ = function(state_44554){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44309__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44309__auto____1.call(this,state_44554);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__44309__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44309__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44309__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44309__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44309__auto__;
})()
;})(switch__44308__auto__,c__44396__auto___44718,res,vec__44547,v,p,job,jobs,results))
})();
var state__44398__auto__ = (function (){var statearr_44560 = f__44397__auto__.call(null);
(statearr_44560[(6)] = c__44396__auto___44718);

return statearr_44560;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44398__auto__);
});})(c__44396__auto___44718,res,vec__44547,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__44561){
var vec__44562 = p__44561;
var v = cljs.core.nth.call(null,vec__44562,(0),null);
var p = cljs.core.nth.call(null,vec__44562,(1),null);
var job = vec__44562;
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
var n__37693__auto___44721 = n;
var __44722 = (0);
while(true){
if((__44722 < n__37693__auto___44721)){
var G__44565_44723 = type;
var G__44565_44724__$1 = (((G__44565_44723 instanceof cljs.core.Keyword))?G__44565_44723.fqn:null);
switch (G__44565_44724__$1) {
case "compute":
var c__44396__auto___44726 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__44722,c__44396__auto___44726,G__44565_44723,G__44565_44724__$1,n__37693__auto___44721,jobs,results,process,async){
return (function (){
var f__44397__auto__ = (function (){var switch__44308__auto__ = ((function (__44722,c__44396__auto___44726,G__44565_44723,G__44565_44724__$1,n__37693__auto___44721,jobs,results,process,async){
return (function (state_44578){
var state_val_44579 = (state_44578[(1)]);
if((state_val_44579 === (1))){
var state_44578__$1 = state_44578;
var statearr_44580_44727 = state_44578__$1;
(statearr_44580_44727[(2)] = null);

(statearr_44580_44727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44579 === (2))){
var state_44578__$1 = state_44578;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44578__$1,(4),jobs);
} else {
if((state_val_44579 === (3))){
var inst_44576 = (state_44578[(2)]);
var state_44578__$1 = state_44578;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44578__$1,inst_44576);
} else {
if((state_val_44579 === (4))){
var inst_44568 = (state_44578[(2)]);
var inst_44569 = process.call(null,inst_44568);
var state_44578__$1 = state_44578;
if(cljs.core.truth_(inst_44569)){
var statearr_44581_44728 = state_44578__$1;
(statearr_44581_44728[(1)] = (5));

} else {
var statearr_44582_44729 = state_44578__$1;
(statearr_44582_44729[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44579 === (5))){
var state_44578__$1 = state_44578;
var statearr_44583_44730 = state_44578__$1;
(statearr_44583_44730[(2)] = null);

(statearr_44583_44730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44579 === (6))){
var state_44578__$1 = state_44578;
var statearr_44584_44731 = state_44578__$1;
(statearr_44584_44731[(2)] = null);

(statearr_44584_44731[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44579 === (7))){
var inst_44574 = (state_44578[(2)]);
var state_44578__$1 = state_44578;
var statearr_44585_44732 = state_44578__$1;
(statearr_44585_44732[(2)] = inst_44574);

(statearr_44585_44732[(1)] = (3));


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
});})(__44722,c__44396__auto___44726,G__44565_44723,G__44565_44724__$1,n__37693__auto___44721,jobs,results,process,async))
;
return ((function (__44722,switch__44308__auto__,c__44396__auto___44726,G__44565_44723,G__44565_44724__$1,n__37693__auto___44721,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44309__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44309__auto____0 = (function (){
var statearr_44586 = [null,null,null,null,null,null,null];
(statearr_44586[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44309__auto__);

(statearr_44586[(1)] = (1));

return statearr_44586;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44309__auto____1 = (function (state_44578){
while(true){
var ret_value__44310__auto__ = (function (){try{while(true){
var result__44311__auto__ = switch__44308__auto__.call(null,state_44578);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44311__auto__;
}
break;
}
}catch (e44587){if((e44587 instanceof Object)){
var ex__44312__auto__ = e44587;
var statearr_44588_44733 = state_44578;
(statearr_44588_44733[(5)] = ex__44312__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44578);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44587;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44734 = state_44578;
state_44578 = G__44734;
continue;
} else {
return ret_value__44310__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44309__auto__ = function(state_44578){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44309__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44309__auto____1.call(this,state_44578);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__44309__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44309__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44309__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44309__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44309__auto__;
})()
;})(__44722,switch__44308__auto__,c__44396__auto___44726,G__44565_44723,G__44565_44724__$1,n__37693__auto___44721,jobs,results,process,async))
})();
var state__44398__auto__ = (function (){var statearr_44589 = f__44397__auto__.call(null);
(statearr_44589[(6)] = c__44396__auto___44726);

return statearr_44589;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44398__auto__);
});})(__44722,c__44396__auto___44726,G__44565_44723,G__44565_44724__$1,n__37693__auto___44721,jobs,results,process,async))
);


break;
case "async":
var c__44396__auto___44735 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__44722,c__44396__auto___44735,G__44565_44723,G__44565_44724__$1,n__37693__auto___44721,jobs,results,process,async){
return (function (){
var f__44397__auto__ = (function (){var switch__44308__auto__ = ((function (__44722,c__44396__auto___44735,G__44565_44723,G__44565_44724__$1,n__37693__auto___44721,jobs,results,process,async){
return (function (state_44602){
var state_val_44603 = (state_44602[(1)]);
if((state_val_44603 === (1))){
var state_44602__$1 = state_44602;
var statearr_44604_44736 = state_44602__$1;
(statearr_44604_44736[(2)] = null);

(statearr_44604_44736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44603 === (2))){
var state_44602__$1 = state_44602;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44602__$1,(4),jobs);
} else {
if((state_val_44603 === (3))){
var inst_44600 = (state_44602[(2)]);
var state_44602__$1 = state_44602;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44602__$1,inst_44600);
} else {
if((state_val_44603 === (4))){
var inst_44592 = (state_44602[(2)]);
var inst_44593 = async.call(null,inst_44592);
var state_44602__$1 = state_44602;
if(cljs.core.truth_(inst_44593)){
var statearr_44605_44737 = state_44602__$1;
(statearr_44605_44737[(1)] = (5));

} else {
var statearr_44606_44738 = state_44602__$1;
(statearr_44606_44738[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44603 === (5))){
var state_44602__$1 = state_44602;
var statearr_44607_44739 = state_44602__$1;
(statearr_44607_44739[(2)] = null);

(statearr_44607_44739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44603 === (6))){
var state_44602__$1 = state_44602;
var statearr_44608_44740 = state_44602__$1;
(statearr_44608_44740[(2)] = null);

(statearr_44608_44740[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44603 === (7))){
var inst_44598 = (state_44602[(2)]);
var state_44602__$1 = state_44602;
var statearr_44609_44741 = state_44602__$1;
(statearr_44609_44741[(2)] = inst_44598);

(statearr_44609_44741[(1)] = (3));


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
});})(__44722,c__44396__auto___44735,G__44565_44723,G__44565_44724__$1,n__37693__auto___44721,jobs,results,process,async))
;
return ((function (__44722,switch__44308__auto__,c__44396__auto___44735,G__44565_44723,G__44565_44724__$1,n__37693__auto___44721,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44309__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44309__auto____0 = (function (){
var statearr_44610 = [null,null,null,null,null,null,null];
(statearr_44610[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44309__auto__);

(statearr_44610[(1)] = (1));

return statearr_44610;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44309__auto____1 = (function (state_44602){
while(true){
var ret_value__44310__auto__ = (function (){try{while(true){
var result__44311__auto__ = switch__44308__auto__.call(null,state_44602);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44311__auto__;
}
break;
}
}catch (e44611){if((e44611 instanceof Object)){
var ex__44312__auto__ = e44611;
var statearr_44612_44742 = state_44602;
(statearr_44612_44742[(5)] = ex__44312__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44602);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44611;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44743 = state_44602;
state_44602 = G__44743;
continue;
} else {
return ret_value__44310__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44309__auto__ = function(state_44602){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44309__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44309__auto____1.call(this,state_44602);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__44309__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44309__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44309__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44309__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44309__auto__;
})()
;})(__44722,switch__44308__auto__,c__44396__auto___44735,G__44565_44723,G__44565_44724__$1,n__37693__auto___44721,jobs,results,process,async))
})();
var state__44398__auto__ = (function (){var statearr_44613 = f__44397__auto__.call(null);
(statearr_44613[(6)] = c__44396__auto___44735);

return statearr_44613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44398__auto__);
});})(__44722,c__44396__auto___44735,G__44565_44723,G__44565_44724__$1,n__37693__auto___44721,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44565_44724__$1)].join('')));

}

var G__44744 = (__44722 + (1));
__44722 = G__44744;
continue;
} else {
}
break;
}

var c__44396__auto___44745 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44396__auto___44745,jobs,results,process,async){
return (function (){
var f__44397__auto__ = (function (){var switch__44308__auto__ = ((function (c__44396__auto___44745,jobs,results,process,async){
return (function (state_44635){
var state_val_44636 = (state_44635[(1)]);
if((state_val_44636 === (1))){
var state_44635__$1 = state_44635;
var statearr_44637_44746 = state_44635__$1;
(statearr_44637_44746[(2)] = null);

(statearr_44637_44746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44636 === (2))){
var state_44635__$1 = state_44635;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44635__$1,(4),from);
} else {
if((state_val_44636 === (3))){
var inst_44633 = (state_44635[(2)]);
var state_44635__$1 = state_44635;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44635__$1,inst_44633);
} else {
if((state_val_44636 === (4))){
var inst_44616 = (state_44635[(7)]);
var inst_44616__$1 = (state_44635[(2)]);
var inst_44617 = (inst_44616__$1 == null);
var state_44635__$1 = (function (){var statearr_44638 = state_44635;
(statearr_44638[(7)] = inst_44616__$1);

return statearr_44638;
})();
if(cljs.core.truth_(inst_44617)){
var statearr_44639_44747 = state_44635__$1;
(statearr_44639_44747[(1)] = (5));

} else {
var statearr_44640_44748 = state_44635__$1;
(statearr_44640_44748[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44636 === (5))){
var inst_44619 = cljs.core.async.close_BANG_.call(null,jobs);
var state_44635__$1 = state_44635;
var statearr_44641_44749 = state_44635__$1;
(statearr_44641_44749[(2)] = inst_44619);

(statearr_44641_44749[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44636 === (6))){
var inst_44616 = (state_44635[(7)]);
var inst_44621 = (state_44635[(8)]);
var inst_44621__$1 = cljs.core.async.chan.call(null,(1));
var inst_44622 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44623 = [inst_44616,inst_44621__$1];
var inst_44624 = (new cljs.core.PersistentVector(null,2,(5),inst_44622,inst_44623,null));
var state_44635__$1 = (function (){var statearr_44642 = state_44635;
(statearr_44642[(8)] = inst_44621__$1);

return statearr_44642;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44635__$1,(8),jobs,inst_44624);
} else {
if((state_val_44636 === (7))){
var inst_44631 = (state_44635[(2)]);
var state_44635__$1 = state_44635;
var statearr_44643_44750 = state_44635__$1;
(statearr_44643_44750[(2)] = inst_44631);

(statearr_44643_44750[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44636 === (8))){
var inst_44621 = (state_44635[(8)]);
var inst_44626 = (state_44635[(2)]);
var state_44635__$1 = (function (){var statearr_44644 = state_44635;
(statearr_44644[(9)] = inst_44626);

return statearr_44644;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44635__$1,(9),results,inst_44621);
} else {
if((state_val_44636 === (9))){
var inst_44628 = (state_44635[(2)]);
var state_44635__$1 = (function (){var statearr_44645 = state_44635;
(statearr_44645[(10)] = inst_44628);

return statearr_44645;
})();
var statearr_44646_44751 = state_44635__$1;
(statearr_44646_44751[(2)] = null);

(statearr_44646_44751[(1)] = (2));


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
});})(c__44396__auto___44745,jobs,results,process,async))
;
return ((function (switch__44308__auto__,c__44396__auto___44745,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44309__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44309__auto____0 = (function (){
var statearr_44647 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44647[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44309__auto__);

(statearr_44647[(1)] = (1));

return statearr_44647;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44309__auto____1 = (function (state_44635){
while(true){
var ret_value__44310__auto__ = (function (){try{while(true){
var result__44311__auto__ = switch__44308__auto__.call(null,state_44635);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44311__auto__;
}
break;
}
}catch (e44648){if((e44648 instanceof Object)){
var ex__44312__auto__ = e44648;
var statearr_44649_44752 = state_44635;
(statearr_44649_44752[(5)] = ex__44312__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44635);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44648;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44753 = state_44635;
state_44635 = G__44753;
continue;
} else {
return ret_value__44310__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44309__auto__ = function(state_44635){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44309__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44309__auto____1.call(this,state_44635);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__44309__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44309__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44309__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44309__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44309__auto__;
})()
;})(switch__44308__auto__,c__44396__auto___44745,jobs,results,process,async))
})();
var state__44398__auto__ = (function (){var statearr_44650 = f__44397__auto__.call(null);
(statearr_44650[(6)] = c__44396__auto___44745);

return statearr_44650;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44398__auto__);
});})(c__44396__auto___44745,jobs,results,process,async))
);


var c__44396__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44396__auto__,jobs,results,process,async){
return (function (){
var f__44397__auto__ = (function (){var switch__44308__auto__ = ((function (c__44396__auto__,jobs,results,process,async){
return (function (state_44688){
var state_val_44689 = (state_44688[(1)]);
if((state_val_44689 === (7))){
var inst_44684 = (state_44688[(2)]);
var state_44688__$1 = state_44688;
var statearr_44690_44754 = state_44688__$1;
(statearr_44690_44754[(2)] = inst_44684);

(statearr_44690_44754[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44689 === (20))){
var state_44688__$1 = state_44688;
var statearr_44691_44755 = state_44688__$1;
(statearr_44691_44755[(2)] = null);

(statearr_44691_44755[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44689 === (1))){
var state_44688__$1 = state_44688;
var statearr_44692_44756 = state_44688__$1;
(statearr_44692_44756[(2)] = null);

(statearr_44692_44756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44689 === (4))){
var inst_44653 = (state_44688[(7)]);
var inst_44653__$1 = (state_44688[(2)]);
var inst_44654 = (inst_44653__$1 == null);
var state_44688__$1 = (function (){var statearr_44693 = state_44688;
(statearr_44693[(7)] = inst_44653__$1);

return statearr_44693;
})();
if(cljs.core.truth_(inst_44654)){
var statearr_44694_44757 = state_44688__$1;
(statearr_44694_44757[(1)] = (5));

} else {
var statearr_44695_44758 = state_44688__$1;
(statearr_44695_44758[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44689 === (15))){
var inst_44666 = (state_44688[(8)]);
var state_44688__$1 = state_44688;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44688__$1,(18),to,inst_44666);
} else {
if((state_val_44689 === (21))){
var inst_44679 = (state_44688[(2)]);
var state_44688__$1 = state_44688;
var statearr_44696_44759 = state_44688__$1;
(statearr_44696_44759[(2)] = inst_44679);

(statearr_44696_44759[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44689 === (13))){
var inst_44681 = (state_44688[(2)]);
var state_44688__$1 = (function (){var statearr_44697 = state_44688;
(statearr_44697[(9)] = inst_44681);

return statearr_44697;
})();
var statearr_44698_44760 = state_44688__$1;
(statearr_44698_44760[(2)] = null);

(statearr_44698_44760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44689 === (6))){
var inst_44653 = (state_44688[(7)]);
var state_44688__$1 = state_44688;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44688__$1,(11),inst_44653);
} else {
if((state_val_44689 === (17))){
var inst_44674 = (state_44688[(2)]);
var state_44688__$1 = state_44688;
if(cljs.core.truth_(inst_44674)){
var statearr_44699_44761 = state_44688__$1;
(statearr_44699_44761[(1)] = (19));

} else {
var statearr_44700_44762 = state_44688__$1;
(statearr_44700_44762[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44689 === (3))){
var inst_44686 = (state_44688[(2)]);
var state_44688__$1 = state_44688;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44688__$1,inst_44686);
} else {
if((state_val_44689 === (12))){
var inst_44663 = (state_44688[(10)]);
var state_44688__$1 = state_44688;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44688__$1,(14),inst_44663);
} else {
if((state_val_44689 === (2))){
var state_44688__$1 = state_44688;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44688__$1,(4),results);
} else {
if((state_val_44689 === (19))){
var state_44688__$1 = state_44688;
var statearr_44701_44763 = state_44688__$1;
(statearr_44701_44763[(2)] = null);

(statearr_44701_44763[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44689 === (11))){
var inst_44663 = (state_44688[(2)]);
var state_44688__$1 = (function (){var statearr_44702 = state_44688;
(statearr_44702[(10)] = inst_44663);

return statearr_44702;
})();
var statearr_44703_44764 = state_44688__$1;
(statearr_44703_44764[(2)] = null);

(statearr_44703_44764[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44689 === (9))){
var state_44688__$1 = state_44688;
var statearr_44704_44765 = state_44688__$1;
(statearr_44704_44765[(2)] = null);

(statearr_44704_44765[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44689 === (5))){
var state_44688__$1 = state_44688;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44705_44766 = state_44688__$1;
(statearr_44705_44766[(1)] = (8));

} else {
var statearr_44706_44767 = state_44688__$1;
(statearr_44706_44767[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44689 === (14))){
var inst_44668 = (state_44688[(11)]);
var inst_44666 = (state_44688[(8)]);
var inst_44666__$1 = (state_44688[(2)]);
var inst_44667 = (inst_44666__$1 == null);
var inst_44668__$1 = cljs.core.not.call(null,inst_44667);
var state_44688__$1 = (function (){var statearr_44707 = state_44688;
(statearr_44707[(11)] = inst_44668__$1);

(statearr_44707[(8)] = inst_44666__$1);

return statearr_44707;
})();
if(inst_44668__$1){
var statearr_44708_44768 = state_44688__$1;
(statearr_44708_44768[(1)] = (15));

} else {
var statearr_44709_44769 = state_44688__$1;
(statearr_44709_44769[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44689 === (16))){
var inst_44668 = (state_44688[(11)]);
var state_44688__$1 = state_44688;
var statearr_44710_44770 = state_44688__$1;
(statearr_44710_44770[(2)] = inst_44668);

(statearr_44710_44770[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44689 === (10))){
var inst_44660 = (state_44688[(2)]);
var state_44688__$1 = state_44688;
var statearr_44711_44771 = state_44688__$1;
(statearr_44711_44771[(2)] = inst_44660);

(statearr_44711_44771[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44689 === (18))){
var inst_44671 = (state_44688[(2)]);
var state_44688__$1 = state_44688;
var statearr_44712_44772 = state_44688__$1;
(statearr_44712_44772[(2)] = inst_44671);

(statearr_44712_44772[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44689 === (8))){
var inst_44657 = cljs.core.async.close_BANG_.call(null,to);
var state_44688__$1 = state_44688;
var statearr_44713_44773 = state_44688__$1;
(statearr_44713_44773[(2)] = inst_44657);

(statearr_44713_44773[(1)] = (10));


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
});})(c__44396__auto__,jobs,results,process,async))
;
return ((function (switch__44308__auto__,c__44396__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44309__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44309__auto____0 = (function (){
var statearr_44714 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44714[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44309__auto__);

(statearr_44714[(1)] = (1));

return statearr_44714;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44309__auto____1 = (function (state_44688){
while(true){
var ret_value__44310__auto__ = (function (){try{while(true){
var result__44311__auto__ = switch__44308__auto__.call(null,state_44688);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44311__auto__;
}
break;
}
}catch (e44715){if((e44715 instanceof Object)){
var ex__44312__auto__ = e44715;
var statearr_44716_44774 = state_44688;
(statearr_44716_44774[(5)] = ex__44312__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44688);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44715;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44775 = state_44688;
state_44688 = G__44775;
continue;
} else {
return ret_value__44310__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44309__auto__ = function(state_44688){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44309__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44309__auto____1.call(this,state_44688);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__44309__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44309__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44309__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44309__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44309__auto__;
})()
;})(switch__44308__auto__,c__44396__auto__,jobs,results,process,async))
})();
var state__44398__auto__ = (function (){var statearr_44717 = f__44397__auto__.call(null);
(statearr_44717[(6)] = c__44396__auto__);

return statearr_44717;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44398__auto__);
});})(c__44396__auto__,jobs,results,process,async))
);

return c__44396__auto__;
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
var G__44777 = arguments.length;
switch (G__44777) {
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
var G__44780 = arguments.length;
switch (G__44780) {
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
var G__44783 = arguments.length;
switch (G__44783) {
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
var c__44396__auto___44832 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44396__auto___44832,tc,fc){
return (function (){
var f__44397__auto__ = (function (){var switch__44308__auto__ = ((function (c__44396__auto___44832,tc,fc){
return (function (state_44809){
var state_val_44810 = (state_44809[(1)]);
if((state_val_44810 === (7))){
var inst_44805 = (state_44809[(2)]);
var state_44809__$1 = state_44809;
var statearr_44811_44833 = state_44809__$1;
(statearr_44811_44833[(2)] = inst_44805);

(statearr_44811_44833[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44810 === (1))){
var state_44809__$1 = state_44809;
var statearr_44812_44834 = state_44809__$1;
(statearr_44812_44834[(2)] = null);

(statearr_44812_44834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44810 === (4))){
var inst_44786 = (state_44809[(7)]);
var inst_44786__$1 = (state_44809[(2)]);
var inst_44787 = (inst_44786__$1 == null);
var state_44809__$1 = (function (){var statearr_44813 = state_44809;
(statearr_44813[(7)] = inst_44786__$1);

return statearr_44813;
})();
if(cljs.core.truth_(inst_44787)){
var statearr_44814_44835 = state_44809__$1;
(statearr_44814_44835[(1)] = (5));

} else {
var statearr_44815_44836 = state_44809__$1;
(statearr_44815_44836[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44810 === (13))){
var state_44809__$1 = state_44809;
var statearr_44816_44837 = state_44809__$1;
(statearr_44816_44837[(2)] = null);

(statearr_44816_44837[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44810 === (6))){
var inst_44786 = (state_44809[(7)]);
var inst_44792 = p.call(null,inst_44786);
var state_44809__$1 = state_44809;
if(cljs.core.truth_(inst_44792)){
var statearr_44817_44838 = state_44809__$1;
(statearr_44817_44838[(1)] = (9));

} else {
var statearr_44818_44839 = state_44809__$1;
(statearr_44818_44839[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44810 === (3))){
var inst_44807 = (state_44809[(2)]);
var state_44809__$1 = state_44809;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44809__$1,inst_44807);
} else {
if((state_val_44810 === (12))){
var state_44809__$1 = state_44809;
var statearr_44819_44840 = state_44809__$1;
(statearr_44819_44840[(2)] = null);

(statearr_44819_44840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44810 === (2))){
var state_44809__$1 = state_44809;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44809__$1,(4),ch);
} else {
if((state_val_44810 === (11))){
var inst_44786 = (state_44809[(7)]);
var inst_44796 = (state_44809[(2)]);
var state_44809__$1 = state_44809;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44809__$1,(8),inst_44796,inst_44786);
} else {
if((state_val_44810 === (9))){
var state_44809__$1 = state_44809;
var statearr_44820_44841 = state_44809__$1;
(statearr_44820_44841[(2)] = tc);

(statearr_44820_44841[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44810 === (5))){
var inst_44789 = cljs.core.async.close_BANG_.call(null,tc);
var inst_44790 = cljs.core.async.close_BANG_.call(null,fc);
var state_44809__$1 = (function (){var statearr_44821 = state_44809;
(statearr_44821[(8)] = inst_44789);

return statearr_44821;
})();
var statearr_44822_44842 = state_44809__$1;
(statearr_44822_44842[(2)] = inst_44790);

(statearr_44822_44842[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44810 === (14))){
var inst_44803 = (state_44809[(2)]);
var state_44809__$1 = state_44809;
var statearr_44823_44843 = state_44809__$1;
(statearr_44823_44843[(2)] = inst_44803);

(statearr_44823_44843[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44810 === (10))){
var state_44809__$1 = state_44809;
var statearr_44824_44844 = state_44809__$1;
(statearr_44824_44844[(2)] = fc);

(statearr_44824_44844[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44810 === (8))){
var inst_44798 = (state_44809[(2)]);
var state_44809__$1 = state_44809;
if(cljs.core.truth_(inst_44798)){
var statearr_44825_44845 = state_44809__$1;
(statearr_44825_44845[(1)] = (12));

} else {
var statearr_44826_44846 = state_44809__$1;
(statearr_44826_44846[(1)] = (13));

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
});})(c__44396__auto___44832,tc,fc))
;
return ((function (switch__44308__auto__,c__44396__auto___44832,tc,fc){
return (function() {
var cljs$core$async$state_machine__44309__auto__ = null;
var cljs$core$async$state_machine__44309__auto____0 = (function (){
var statearr_44827 = [null,null,null,null,null,null,null,null,null];
(statearr_44827[(0)] = cljs$core$async$state_machine__44309__auto__);

(statearr_44827[(1)] = (1));

return statearr_44827;
});
var cljs$core$async$state_machine__44309__auto____1 = (function (state_44809){
while(true){
var ret_value__44310__auto__ = (function (){try{while(true){
var result__44311__auto__ = switch__44308__auto__.call(null,state_44809);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44311__auto__;
}
break;
}
}catch (e44828){if((e44828 instanceof Object)){
var ex__44312__auto__ = e44828;
var statearr_44829_44847 = state_44809;
(statearr_44829_44847[(5)] = ex__44312__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44809);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44828;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44848 = state_44809;
state_44809 = G__44848;
continue;
} else {
return ret_value__44310__auto__;
}
break;
}
});
cljs$core$async$state_machine__44309__auto__ = function(state_44809){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44309__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44309__auto____1.call(this,state_44809);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__44309__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44309__auto____0;
cljs$core$async$state_machine__44309__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44309__auto____1;
return cljs$core$async$state_machine__44309__auto__;
})()
;})(switch__44308__auto__,c__44396__auto___44832,tc,fc))
})();
var state__44398__auto__ = (function (){var statearr_44830 = f__44397__auto__.call(null);
(statearr_44830[(6)] = c__44396__auto___44832);

return statearr_44830;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44398__auto__);
});})(c__44396__auto___44832,tc,fc))
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
var c__44396__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44396__auto__){
return (function (){
var f__44397__auto__ = (function (){var switch__44308__auto__ = ((function (c__44396__auto__){
return (function (state_44869){
var state_val_44870 = (state_44869[(1)]);
if((state_val_44870 === (7))){
var inst_44865 = (state_44869[(2)]);
var state_44869__$1 = state_44869;
var statearr_44871_44889 = state_44869__$1;
(statearr_44871_44889[(2)] = inst_44865);

(statearr_44871_44889[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44870 === (1))){
var inst_44849 = init;
var state_44869__$1 = (function (){var statearr_44872 = state_44869;
(statearr_44872[(7)] = inst_44849);

return statearr_44872;
})();
var statearr_44873_44890 = state_44869__$1;
(statearr_44873_44890[(2)] = null);

(statearr_44873_44890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44870 === (4))){
var inst_44852 = (state_44869[(8)]);
var inst_44852__$1 = (state_44869[(2)]);
var inst_44853 = (inst_44852__$1 == null);
var state_44869__$1 = (function (){var statearr_44874 = state_44869;
(statearr_44874[(8)] = inst_44852__$1);

return statearr_44874;
})();
if(cljs.core.truth_(inst_44853)){
var statearr_44875_44891 = state_44869__$1;
(statearr_44875_44891[(1)] = (5));

} else {
var statearr_44876_44892 = state_44869__$1;
(statearr_44876_44892[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44870 === (6))){
var inst_44856 = (state_44869[(9)]);
var inst_44852 = (state_44869[(8)]);
var inst_44849 = (state_44869[(7)]);
var inst_44856__$1 = f.call(null,inst_44849,inst_44852);
var inst_44857 = cljs.core.reduced_QMARK_.call(null,inst_44856__$1);
var state_44869__$1 = (function (){var statearr_44877 = state_44869;
(statearr_44877[(9)] = inst_44856__$1);

return statearr_44877;
})();
if(inst_44857){
var statearr_44878_44893 = state_44869__$1;
(statearr_44878_44893[(1)] = (8));

} else {
var statearr_44879_44894 = state_44869__$1;
(statearr_44879_44894[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44870 === (3))){
var inst_44867 = (state_44869[(2)]);
var state_44869__$1 = state_44869;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44869__$1,inst_44867);
} else {
if((state_val_44870 === (2))){
var state_44869__$1 = state_44869;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44869__$1,(4),ch);
} else {
if((state_val_44870 === (9))){
var inst_44856 = (state_44869[(9)]);
var inst_44849 = inst_44856;
var state_44869__$1 = (function (){var statearr_44880 = state_44869;
(statearr_44880[(7)] = inst_44849);

return statearr_44880;
})();
var statearr_44881_44895 = state_44869__$1;
(statearr_44881_44895[(2)] = null);

(statearr_44881_44895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44870 === (5))){
var inst_44849 = (state_44869[(7)]);
var state_44869__$1 = state_44869;
var statearr_44882_44896 = state_44869__$1;
(statearr_44882_44896[(2)] = inst_44849);

(statearr_44882_44896[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44870 === (10))){
var inst_44863 = (state_44869[(2)]);
var state_44869__$1 = state_44869;
var statearr_44883_44897 = state_44869__$1;
(statearr_44883_44897[(2)] = inst_44863);

(statearr_44883_44897[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44870 === (8))){
var inst_44856 = (state_44869[(9)]);
var inst_44859 = cljs.core.deref.call(null,inst_44856);
var state_44869__$1 = state_44869;
var statearr_44884_44898 = state_44869__$1;
(statearr_44884_44898[(2)] = inst_44859);

(statearr_44884_44898[(1)] = (10));


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
});})(c__44396__auto__))
;
return ((function (switch__44308__auto__,c__44396__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__44309__auto__ = null;
var cljs$core$async$reduce_$_state_machine__44309__auto____0 = (function (){
var statearr_44885 = [null,null,null,null,null,null,null,null,null,null];
(statearr_44885[(0)] = cljs$core$async$reduce_$_state_machine__44309__auto__);

(statearr_44885[(1)] = (1));

return statearr_44885;
});
var cljs$core$async$reduce_$_state_machine__44309__auto____1 = (function (state_44869){
while(true){
var ret_value__44310__auto__ = (function (){try{while(true){
var result__44311__auto__ = switch__44308__auto__.call(null,state_44869);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44311__auto__;
}
break;
}
}catch (e44886){if((e44886 instanceof Object)){
var ex__44312__auto__ = e44886;
var statearr_44887_44899 = state_44869;
(statearr_44887_44899[(5)] = ex__44312__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44869);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44886;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44900 = state_44869;
state_44869 = G__44900;
continue;
} else {
return ret_value__44310__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__44309__auto__ = function(state_44869){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__44309__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__44309__auto____1.call(this,state_44869);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__44309__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__44309__auto____0;
cljs$core$async$reduce_$_state_machine__44309__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__44309__auto____1;
return cljs$core$async$reduce_$_state_machine__44309__auto__;
})()
;})(switch__44308__auto__,c__44396__auto__))
})();
var state__44398__auto__ = (function (){var statearr_44888 = f__44397__auto__.call(null);
(statearr_44888[(6)] = c__44396__auto__);

return statearr_44888;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44398__auto__);
});})(c__44396__auto__))
);

return c__44396__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__44396__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44396__auto__,f__$1){
return (function (){
var f__44397__auto__ = (function (){var switch__44308__auto__ = ((function (c__44396__auto__,f__$1){
return (function (state_44906){
var state_val_44907 = (state_44906[(1)]);
if((state_val_44907 === (1))){
var inst_44901 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_44906__$1 = state_44906;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44906__$1,(2),inst_44901);
} else {
if((state_val_44907 === (2))){
var inst_44903 = (state_44906[(2)]);
var inst_44904 = f__$1.call(null,inst_44903);
var state_44906__$1 = state_44906;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44906__$1,inst_44904);
} else {
return null;
}
}
});})(c__44396__auto__,f__$1))
;
return ((function (switch__44308__auto__,c__44396__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__44309__auto__ = null;
var cljs$core$async$transduce_$_state_machine__44309__auto____0 = (function (){
var statearr_44908 = [null,null,null,null,null,null,null];
(statearr_44908[(0)] = cljs$core$async$transduce_$_state_machine__44309__auto__);

(statearr_44908[(1)] = (1));

return statearr_44908;
});
var cljs$core$async$transduce_$_state_machine__44309__auto____1 = (function (state_44906){
while(true){
var ret_value__44310__auto__ = (function (){try{while(true){
var result__44311__auto__ = switch__44308__auto__.call(null,state_44906);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44311__auto__;
}
break;
}
}catch (e44909){if((e44909 instanceof Object)){
var ex__44312__auto__ = e44909;
var statearr_44910_44912 = state_44906;
(statearr_44910_44912[(5)] = ex__44312__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44906);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44909;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44913 = state_44906;
state_44906 = G__44913;
continue;
} else {
return ret_value__44310__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__44309__auto__ = function(state_44906){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__44309__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__44309__auto____1.call(this,state_44906);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__44309__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__44309__auto____0;
cljs$core$async$transduce_$_state_machine__44309__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__44309__auto____1;
return cljs$core$async$transduce_$_state_machine__44309__auto__;
})()
;})(switch__44308__auto__,c__44396__auto__,f__$1))
})();
var state__44398__auto__ = (function (){var statearr_44911 = f__44397__auto__.call(null);
(statearr_44911[(6)] = c__44396__auto__);

return statearr_44911;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44398__auto__);
});})(c__44396__auto__,f__$1))
);

return c__44396__auto__;
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
var G__44915 = arguments.length;
switch (G__44915) {
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
var c__44396__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44396__auto__){
return (function (){
var f__44397__auto__ = (function (){var switch__44308__auto__ = ((function (c__44396__auto__){
return (function (state_44940){
var state_val_44941 = (state_44940[(1)]);
if((state_val_44941 === (7))){
var inst_44922 = (state_44940[(2)]);
var state_44940__$1 = state_44940;
var statearr_44942_44963 = state_44940__$1;
(statearr_44942_44963[(2)] = inst_44922);

(statearr_44942_44963[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44941 === (1))){
var inst_44916 = cljs.core.seq.call(null,coll);
var inst_44917 = inst_44916;
var state_44940__$1 = (function (){var statearr_44943 = state_44940;
(statearr_44943[(7)] = inst_44917);

return statearr_44943;
})();
var statearr_44944_44964 = state_44940__$1;
(statearr_44944_44964[(2)] = null);

(statearr_44944_44964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44941 === (4))){
var inst_44917 = (state_44940[(7)]);
var inst_44920 = cljs.core.first.call(null,inst_44917);
var state_44940__$1 = state_44940;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44940__$1,(7),ch,inst_44920);
} else {
if((state_val_44941 === (13))){
var inst_44934 = (state_44940[(2)]);
var state_44940__$1 = state_44940;
var statearr_44945_44965 = state_44940__$1;
(statearr_44945_44965[(2)] = inst_44934);

(statearr_44945_44965[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44941 === (6))){
var inst_44925 = (state_44940[(2)]);
var state_44940__$1 = state_44940;
if(cljs.core.truth_(inst_44925)){
var statearr_44946_44966 = state_44940__$1;
(statearr_44946_44966[(1)] = (8));

} else {
var statearr_44947_44967 = state_44940__$1;
(statearr_44947_44967[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44941 === (3))){
var inst_44938 = (state_44940[(2)]);
var state_44940__$1 = state_44940;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44940__$1,inst_44938);
} else {
if((state_val_44941 === (12))){
var state_44940__$1 = state_44940;
var statearr_44948_44968 = state_44940__$1;
(statearr_44948_44968[(2)] = null);

(statearr_44948_44968[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44941 === (2))){
var inst_44917 = (state_44940[(7)]);
var state_44940__$1 = state_44940;
if(cljs.core.truth_(inst_44917)){
var statearr_44949_44969 = state_44940__$1;
(statearr_44949_44969[(1)] = (4));

} else {
var statearr_44950_44970 = state_44940__$1;
(statearr_44950_44970[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44941 === (11))){
var inst_44931 = cljs.core.async.close_BANG_.call(null,ch);
var state_44940__$1 = state_44940;
var statearr_44951_44971 = state_44940__$1;
(statearr_44951_44971[(2)] = inst_44931);

(statearr_44951_44971[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44941 === (9))){
var state_44940__$1 = state_44940;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44952_44972 = state_44940__$1;
(statearr_44952_44972[(1)] = (11));

} else {
var statearr_44953_44973 = state_44940__$1;
(statearr_44953_44973[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44941 === (5))){
var inst_44917 = (state_44940[(7)]);
var state_44940__$1 = state_44940;
var statearr_44954_44974 = state_44940__$1;
(statearr_44954_44974[(2)] = inst_44917);

(statearr_44954_44974[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44941 === (10))){
var inst_44936 = (state_44940[(2)]);
var state_44940__$1 = state_44940;
var statearr_44955_44975 = state_44940__$1;
(statearr_44955_44975[(2)] = inst_44936);

(statearr_44955_44975[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44941 === (8))){
var inst_44917 = (state_44940[(7)]);
var inst_44927 = cljs.core.next.call(null,inst_44917);
var inst_44917__$1 = inst_44927;
var state_44940__$1 = (function (){var statearr_44956 = state_44940;
(statearr_44956[(7)] = inst_44917__$1);

return statearr_44956;
})();
var statearr_44957_44976 = state_44940__$1;
(statearr_44957_44976[(2)] = null);

(statearr_44957_44976[(1)] = (2));


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
});})(c__44396__auto__))
;
return ((function (switch__44308__auto__,c__44396__auto__){
return (function() {
var cljs$core$async$state_machine__44309__auto__ = null;
var cljs$core$async$state_machine__44309__auto____0 = (function (){
var statearr_44958 = [null,null,null,null,null,null,null,null];
(statearr_44958[(0)] = cljs$core$async$state_machine__44309__auto__);

(statearr_44958[(1)] = (1));

return statearr_44958;
});
var cljs$core$async$state_machine__44309__auto____1 = (function (state_44940){
while(true){
var ret_value__44310__auto__ = (function (){try{while(true){
var result__44311__auto__ = switch__44308__auto__.call(null,state_44940);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44311__auto__;
}
break;
}
}catch (e44959){if((e44959 instanceof Object)){
var ex__44312__auto__ = e44959;
var statearr_44960_44977 = state_44940;
(statearr_44960_44977[(5)] = ex__44312__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44940);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44959;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44978 = state_44940;
state_44940 = G__44978;
continue;
} else {
return ret_value__44310__auto__;
}
break;
}
});
cljs$core$async$state_machine__44309__auto__ = function(state_44940){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44309__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44309__auto____1.call(this,state_44940);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__44309__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44309__auto____0;
cljs$core$async$state_machine__44309__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44309__auto____1;
return cljs$core$async$state_machine__44309__auto__;
})()
;})(switch__44308__auto__,c__44396__auto__))
})();
var state__44398__auto__ = (function (){var statearr_44961 = f__44397__auto__.call(null);
(statearr_44961[(6)] = c__44396__auto__);

return statearr_44961;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44398__auto__);
});})(c__44396__auto__))
);

return c__44396__auto__;
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
var x__37438__auto__ = (((_ == null))?null:_);
var m__37439__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__37438__auto__)]);
if(!((m__37439__auto__ == null))){
return m__37439__auto__.call(null,_);
} else {
var m__37439__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__37439__auto____$1 == null))){
return m__37439__auto____$1.call(null,_);
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
var x__37438__auto__ = (((m == null))?null:m);
var m__37439__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__37438__auto__)]);
if(!((m__37439__auto__ == null))){
return m__37439__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__37439__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__37439__auto____$1 == null))){
return m__37439__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__37438__auto__ = (((m == null))?null:m);
var m__37439__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__37438__auto__)]);
if(!((m__37439__auto__ == null))){
return m__37439__auto__.call(null,m,ch);
} else {
var m__37439__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__37439__auto____$1 == null))){
return m__37439__auto____$1.call(null,m,ch);
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
var x__37438__auto__ = (((m == null))?null:m);
var m__37439__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__37438__auto__)]);
if(!((m__37439__auto__ == null))){
return m__37439__auto__.call(null,m);
} else {
var m__37439__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__37439__auto____$1 == null))){
return m__37439__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async44979 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44979 = (function (ch,cs,meta44980){
this.ch = ch;
this.cs = cs;
this.meta44980 = meta44980;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async44979.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_44981,meta44980__$1){
var self__ = this;
var _44981__$1 = this;
return (new cljs.core.async.t_cljs$core$async44979(self__.ch,self__.cs,meta44980__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async44979.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_44981){
var self__ = this;
var _44981__$1 = this;
return self__.meta44980;
});})(cs))
;

cljs.core.async.t_cljs$core$async44979.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44979.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async44979.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44979.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async44979.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async44979.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async44979.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta44980","meta44980",566867781,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async44979.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44979.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44979";

cljs.core.async.t_cljs$core$async44979.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__37380__auto__,writer__37381__auto__,opt__37382__auto__){
return cljs.core._write.call(null,writer__37381__auto__,"cljs.core.async/t_cljs$core$async44979");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async44979 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async44979(ch__$1,cs__$1,meta44980){
return (new cljs.core.async.t_cljs$core$async44979(ch__$1,cs__$1,meta44980));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async44979(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__44396__auto___45201 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44396__auto___45201,cs,m,dchan,dctr,done){
return (function (){
var f__44397__auto__ = (function (){var switch__44308__auto__ = ((function (c__44396__auto___45201,cs,m,dchan,dctr,done){
return (function (state_45116){
var state_val_45117 = (state_45116[(1)]);
if((state_val_45117 === (7))){
var inst_45112 = (state_45116[(2)]);
var state_45116__$1 = state_45116;
var statearr_45118_45202 = state_45116__$1;
(statearr_45118_45202[(2)] = inst_45112);

(statearr_45118_45202[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45117 === (20))){
var inst_45015 = (state_45116[(7)]);
var inst_45027 = cljs.core.first.call(null,inst_45015);
var inst_45028 = cljs.core.nth.call(null,inst_45027,(0),null);
var inst_45029 = cljs.core.nth.call(null,inst_45027,(1),null);
var state_45116__$1 = (function (){var statearr_45119 = state_45116;
(statearr_45119[(8)] = inst_45028);

return statearr_45119;
})();
if(cljs.core.truth_(inst_45029)){
var statearr_45120_45203 = state_45116__$1;
(statearr_45120_45203[(1)] = (22));

} else {
var statearr_45121_45204 = state_45116__$1;
(statearr_45121_45204[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45117 === (27))){
var inst_44984 = (state_45116[(9)]);
var inst_45059 = (state_45116[(10)]);
var inst_45057 = (state_45116[(11)]);
var inst_45064 = (state_45116[(12)]);
var inst_45064__$1 = cljs.core._nth.call(null,inst_45057,inst_45059);
var inst_45065 = cljs.core.async.put_BANG_.call(null,inst_45064__$1,inst_44984,done);
var state_45116__$1 = (function (){var statearr_45122 = state_45116;
(statearr_45122[(12)] = inst_45064__$1);

return statearr_45122;
})();
if(cljs.core.truth_(inst_45065)){
var statearr_45123_45205 = state_45116__$1;
(statearr_45123_45205[(1)] = (30));

} else {
var statearr_45124_45206 = state_45116__$1;
(statearr_45124_45206[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45117 === (1))){
var state_45116__$1 = state_45116;
var statearr_45125_45207 = state_45116__$1;
(statearr_45125_45207[(2)] = null);

(statearr_45125_45207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45117 === (24))){
var inst_45015 = (state_45116[(7)]);
var inst_45034 = (state_45116[(2)]);
var inst_45035 = cljs.core.next.call(null,inst_45015);
var inst_44993 = inst_45035;
var inst_44994 = null;
var inst_44995 = (0);
var inst_44996 = (0);
var state_45116__$1 = (function (){var statearr_45126 = state_45116;
(statearr_45126[(13)] = inst_44995);

(statearr_45126[(14)] = inst_44993);

(statearr_45126[(15)] = inst_45034);

(statearr_45126[(16)] = inst_44996);

(statearr_45126[(17)] = inst_44994);

return statearr_45126;
})();
var statearr_45127_45208 = state_45116__$1;
(statearr_45127_45208[(2)] = null);

(statearr_45127_45208[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45117 === (39))){
var state_45116__$1 = state_45116;
var statearr_45131_45209 = state_45116__$1;
(statearr_45131_45209[(2)] = null);

(statearr_45131_45209[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45117 === (4))){
var inst_44984 = (state_45116[(9)]);
var inst_44984__$1 = (state_45116[(2)]);
var inst_44985 = (inst_44984__$1 == null);
var state_45116__$1 = (function (){var statearr_45132 = state_45116;
(statearr_45132[(9)] = inst_44984__$1);

return statearr_45132;
})();
if(cljs.core.truth_(inst_44985)){
var statearr_45133_45210 = state_45116__$1;
(statearr_45133_45210[(1)] = (5));

} else {
var statearr_45134_45211 = state_45116__$1;
(statearr_45134_45211[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45117 === (15))){
var inst_44995 = (state_45116[(13)]);
var inst_44993 = (state_45116[(14)]);
var inst_44996 = (state_45116[(16)]);
var inst_44994 = (state_45116[(17)]);
var inst_45011 = (state_45116[(2)]);
var inst_45012 = (inst_44996 + (1));
var tmp45128 = inst_44995;
var tmp45129 = inst_44993;
var tmp45130 = inst_44994;
var inst_44993__$1 = tmp45129;
var inst_44994__$1 = tmp45130;
var inst_44995__$1 = tmp45128;
var inst_44996__$1 = inst_45012;
var state_45116__$1 = (function (){var statearr_45135 = state_45116;
(statearr_45135[(13)] = inst_44995__$1);

(statearr_45135[(18)] = inst_45011);

(statearr_45135[(14)] = inst_44993__$1);

(statearr_45135[(16)] = inst_44996__$1);

(statearr_45135[(17)] = inst_44994__$1);

return statearr_45135;
})();
var statearr_45136_45212 = state_45116__$1;
(statearr_45136_45212[(2)] = null);

(statearr_45136_45212[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45117 === (21))){
var inst_45038 = (state_45116[(2)]);
var state_45116__$1 = state_45116;
var statearr_45140_45213 = state_45116__$1;
(statearr_45140_45213[(2)] = inst_45038);

(statearr_45140_45213[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45117 === (31))){
var inst_45064 = (state_45116[(12)]);
var inst_45068 = done.call(null,null);
var inst_45069 = cljs.core.async.untap_STAR_.call(null,m,inst_45064);
var state_45116__$1 = (function (){var statearr_45141 = state_45116;
(statearr_45141[(19)] = inst_45068);

return statearr_45141;
})();
var statearr_45142_45214 = state_45116__$1;
(statearr_45142_45214[(2)] = inst_45069);

(statearr_45142_45214[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45117 === (32))){
var inst_45056 = (state_45116[(20)]);
var inst_45059 = (state_45116[(10)]);
var inst_45057 = (state_45116[(11)]);
var inst_45058 = (state_45116[(21)]);
var inst_45071 = (state_45116[(2)]);
var inst_45072 = (inst_45059 + (1));
var tmp45137 = inst_45056;
var tmp45138 = inst_45057;
var tmp45139 = inst_45058;
var inst_45056__$1 = tmp45137;
var inst_45057__$1 = tmp45138;
var inst_45058__$1 = tmp45139;
var inst_45059__$1 = inst_45072;
var state_45116__$1 = (function (){var statearr_45143 = state_45116;
(statearr_45143[(20)] = inst_45056__$1);

(statearr_45143[(22)] = inst_45071);

(statearr_45143[(10)] = inst_45059__$1);

(statearr_45143[(11)] = inst_45057__$1);

(statearr_45143[(21)] = inst_45058__$1);

return statearr_45143;
})();
var statearr_45144_45215 = state_45116__$1;
(statearr_45144_45215[(2)] = null);

(statearr_45144_45215[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45117 === (40))){
var inst_45084 = (state_45116[(23)]);
var inst_45088 = done.call(null,null);
var inst_45089 = cljs.core.async.untap_STAR_.call(null,m,inst_45084);
var state_45116__$1 = (function (){var statearr_45145 = state_45116;
(statearr_45145[(24)] = inst_45088);

return statearr_45145;
})();
var statearr_45146_45216 = state_45116__$1;
(statearr_45146_45216[(2)] = inst_45089);

(statearr_45146_45216[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45117 === (33))){
var inst_45075 = (state_45116[(25)]);
var inst_45077 = cljs.core.chunked_seq_QMARK_.call(null,inst_45075);
var state_45116__$1 = state_45116;
if(inst_45077){
var statearr_45147_45217 = state_45116__$1;
(statearr_45147_45217[(1)] = (36));

} else {
var statearr_45148_45218 = state_45116__$1;
(statearr_45148_45218[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45117 === (13))){
var inst_45005 = (state_45116[(26)]);
var inst_45008 = cljs.core.async.close_BANG_.call(null,inst_45005);
var state_45116__$1 = state_45116;
var statearr_45149_45219 = state_45116__$1;
(statearr_45149_45219[(2)] = inst_45008);

(statearr_45149_45219[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45117 === (22))){
var inst_45028 = (state_45116[(8)]);
var inst_45031 = cljs.core.async.close_BANG_.call(null,inst_45028);
var state_45116__$1 = state_45116;
var statearr_45150_45220 = state_45116__$1;
(statearr_45150_45220[(2)] = inst_45031);

(statearr_45150_45220[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45117 === (36))){
var inst_45075 = (state_45116[(25)]);
var inst_45079 = cljs.core.chunk_first.call(null,inst_45075);
var inst_45080 = cljs.core.chunk_rest.call(null,inst_45075);
var inst_45081 = cljs.core.count.call(null,inst_45079);
var inst_45056 = inst_45080;
var inst_45057 = inst_45079;
var inst_45058 = inst_45081;
var inst_45059 = (0);
var state_45116__$1 = (function (){var statearr_45151 = state_45116;
(statearr_45151[(20)] = inst_45056);

(statearr_45151[(10)] = inst_45059);

(statearr_45151[(11)] = inst_45057);

(statearr_45151[(21)] = inst_45058);

return statearr_45151;
})();
var statearr_45152_45221 = state_45116__$1;
(statearr_45152_45221[(2)] = null);

(statearr_45152_45221[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45117 === (41))){
var inst_45075 = (state_45116[(25)]);
var inst_45091 = (state_45116[(2)]);
var inst_45092 = cljs.core.next.call(null,inst_45075);
var inst_45056 = inst_45092;
var inst_45057 = null;
var inst_45058 = (0);
var inst_45059 = (0);
var state_45116__$1 = (function (){var statearr_45153 = state_45116;
(statearr_45153[(20)] = inst_45056);

(statearr_45153[(10)] = inst_45059);

(statearr_45153[(11)] = inst_45057);

(statearr_45153[(27)] = inst_45091);

(statearr_45153[(21)] = inst_45058);

return statearr_45153;
})();
var statearr_45154_45222 = state_45116__$1;
(statearr_45154_45222[(2)] = null);

(statearr_45154_45222[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45117 === (43))){
var state_45116__$1 = state_45116;
var statearr_45155_45223 = state_45116__$1;
(statearr_45155_45223[(2)] = null);

(statearr_45155_45223[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45117 === (29))){
var inst_45100 = (state_45116[(2)]);
var state_45116__$1 = state_45116;
var statearr_45156_45224 = state_45116__$1;
(statearr_45156_45224[(2)] = inst_45100);

(statearr_45156_45224[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45117 === (44))){
var inst_45109 = (state_45116[(2)]);
var state_45116__$1 = (function (){var statearr_45157 = state_45116;
(statearr_45157[(28)] = inst_45109);

return statearr_45157;
})();
var statearr_45158_45225 = state_45116__$1;
(statearr_45158_45225[(2)] = null);

(statearr_45158_45225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45117 === (6))){
var inst_45048 = (state_45116[(29)]);
var inst_45047 = cljs.core.deref.call(null,cs);
var inst_45048__$1 = cljs.core.keys.call(null,inst_45047);
var inst_45049 = cljs.core.count.call(null,inst_45048__$1);
var inst_45050 = cljs.core.reset_BANG_.call(null,dctr,inst_45049);
var inst_45055 = cljs.core.seq.call(null,inst_45048__$1);
var inst_45056 = inst_45055;
var inst_45057 = null;
var inst_45058 = (0);
var inst_45059 = (0);
var state_45116__$1 = (function (){var statearr_45159 = state_45116;
(statearr_45159[(20)] = inst_45056);

(statearr_45159[(29)] = inst_45048__$1);

(statearr_45159[(10)] = inst_45059);

(statearr_45159[(11)] = inst_45057);

(statearr_45159[(30)] = inst_45050);

(statearr_45159[(21)] = inst_45058);

return statearr_45159;
})();
var statearr_45160_45226 = state_45116__$1;
(statearr_45160_45226[(2)] = null);

(statearr_45160_45226[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45117 === (28))){
var inst_45056 = (state_45116[(20)]);
var inst_45075 = (state_45116[(25)]);
var inst_45075__$1 = cljs.core.seq.call(null,inst_45056);
var state_45116__$1 = (function (){var statearr_45161 = state_45116;
(statearr_45161[(25)] = inst_45075__$1);

return statearr_45161;
})();
if(inst_45075__$1){
var statearr_45162_45227 = state_45116__$1;
(statearr_45162_45227[(1)] = (33));

} else {
var statearr_45163_45228 = state_45116__$1;
(statearr_45163_45228[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45117 === (25))){
var inst_45059 = (state_45116[(10)]);
var inst_45058 = (state_45116[(21)]);
var inst_45061 = (inst_45059 < inst_45058);
var inst_45062 = inst_45061;
var state_45116__$1 = state_45116;
if(cljs.core.truth_(inst_45062)){
var statearr_45164_45229 = state_45116__$1;
(statearr_45164_45229[(1)] = (27));

} else {
var statearr_45165_45230 = state_45116__$1;
(statearr_45165_45230[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45117 === (34))){
var state_45116__$1 = state_45116;
var statearr_45166_45231 = state_45116__$1;
(statearr_45166_45231[(2)] = null);

(statearr_45166_45231[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45117 === (17))){
var state_45116__$1 = state_45116;
var statearr_45167_45232 = state_45116__$1;
(statearr_45167_45232[(2)] = null);

(statearr_45167_45232[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45117 === (3))){
var inst_45114 = (state_45116[(2)]);
var state_45116__$1 = state_45116;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45116__$1,inst_45114);
} else {
if((state_val_45117 === (12))){
var inst_45043 = (state_45116[(2)]);
var state_45116__$1 = state_45116;
var statearr_45168_45233 = state_45116__$1;
(statearr_45168_45233[(2)] = inst_45043);

(statearr_45168_45233[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45117 === (2))){
var state_45116__$1 = state_45116;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45116__$1,(4),ch);
} else {
if((state_val_45117 === (23))){
var state_45116__$1 = state_45116;
var statearr_45169_45234 = state_45116__$1;
(statearr_45169_45234[(2)] = null);

(statearr_45169_45234[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45117 === (35))){
var inst_45098 = (state_45116[(2)]);
var state_45116__$1 = state_45116;
var statearr_45170_45235 = state_45116__$1;
(statearr_45170_45235[(2)] = inst_45098);

(statearr_45170_45235[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45117 === (19))){
var inst_45015 = (state_45116[(7)]);
var inst_45019 = cljs.core.chunk_first.call(null,inst_45015);
var inst_45020 = cljs.core.chunk_rest.call(null,inst_45015);
var inst_45021 = cljs.core.count.call(null,inst_45019);
var inst_44993 = inst_45020;
var inst_44994 = inst_45019;
var inst_44995 = inst_45021;
var inst_44996 = (0);
var state_45116__$1 = (function (){var statearr_45171 = state_45116;
(statearr_45171[(13)] = inst_44995);

(statearr_45171[(14)] = inst_44993);

(statearr_45171[(16)] = inst_44996);

(statearr_45171[(17)] = inst_44994);

return statearr_45171;
})();
var statearr_45172_45236 = state_45116__$1;
(statearr_45172_45236[(2)] = null);

(statearr_45172_45236[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45117 === (11))){
var inst_44993 = (state_45116[(14)]);
var inst_45015 = (state_45116[(7)]);
var inst_45015__$1 = cljs.core.seq.call(null,inst_44993);
var state_45116__$1 = (function (){var statearr_45173 = state_45116;
(statearr_45173[(7)] = inst_45015__$1);

return statearr_45173;
})();
if(inst_45015__$1){
var statearr_45174_45237 = state_45116__$1;
(statearr_45174_45237[(1)] = (16));

} else {
var statearr_45175_45238 = state_45116__$1;
(statearr_45175_45238[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45117 === (9))){
var inst_45045 = (state_45116[(2)]);
var state_45116__$1 = state_45116;
var statearr_45176_45239 = state_45116__$1;
(statearr_45176_45239[(2)] = inst_45045);

(statearr_45176_45239[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45117 === (5))){
var inst_44991 = cljs.core.deref.call(null,cs);
var inst_44992 = cljs.core.seq.call(null,inst_44991);
var inst_44993 = inst_44992;
var inst_44994 = null;
var inst_44995 = (0);
var inst_44996 = (0);
var state_45116__$1 = (function (){var statearr_45177 = state_45116;
(statearr_45177[(13)] = inst_44995);

(statearr_45177[(14)] = inst_44993);

(statearr_45177[(16)] = inst_44996);

(statearr_45177[(17)] = inst_44994);

return statearr_45177;
})();
var statearr_45178_45240 = state_45116__$1;
(statearr_45178_45240[(2)] = null);

(statearr_45178_45240[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45117 === (14))){
var state_45116__$1 = state_45116;
var statearr_45179_45241 = state_45116__$1;
(statearr_45179_45241[(2)] = null);

(statearr_45179_45241[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45117 === (45))){
var inst_45106 = (state_45116[(2)]);
var state_45116__$1 = state_45116;
var statearr_45180_45242 = state_45116__$1;
(statearr_45180_45242[(2)] = inst_45106);

(statearr_45180_45242[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45117 === (26))){
var inst_45048 = (state_45116[(29)]);
var inst_45102 = (state_45116[(2)]);
var inst_45103 = cljs.core.seq.call(null,inst_45048);
var state_45116__$1 = (function (){var statearr_45181 = state_45116;
(statearr_45181[(31)] = inst_45102);

return statearr_45181;
})();
if(inst_45103){
var statearr_45182_45243 = state_45116__$1;
(statearr_45182_45243[(1)] = (42));

} else {
var statearr_45183_45244 = state_45116__$1;
(statearr_45183_45244[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45117 === (16))){
var inst_45015 = (state_45116[(7)]);
var inst_45017 = cljs.core.chunked_seq_QMARK_.call(null,inst_45015);
var state_45116__$1 = state_45116;
if(inst_45017){
var statearr_45184_45245 = state_45116__$1;
(statearr_45184_45245[(1)] = (19));

} else {
var statearr_45185_45246 = state_45116__$1;
(statearr_45185_45246[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45117 === (38))){
var inst_45095 = (state_45116[(2)]);
var state_45116__$1 = state_45116;
var statearr_45186_45247 = state_45116__$1;
(statearr_45186_45247[(2)] = inst_45095);

(statearr_45186_45247[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45117 === (30))){
var state_45116__$1 = state_45116;
var statearr_45187_45248 = state_45116__$1;
(statearr_45187_45248[(2)] = null);

(statearr_45187_45248[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45117 === (10))){
var inst_44996 = (state_45116[(16)]);
var inst_44994 = (state_45116[(17)]);
var inst_45004 = cljs.core._nth.call(null,inst_44994,inst_44996);
var inst_45005 = cljs.core.nth.call(null,inst_45004,(0),null);
var inst_45006 = cljs.core.nth.call(null,inst_45004,(1),null);
var state_45116__$1 = (function (){var statearr_45188 = state_45116;
(statearr_45188[(26)] = inst_45005);

return statearr_45188;
})();
if(cljs.core.truth_(inst_45006)){
var statearr_45189_45249 = state_45116__$1;
(statearr_45189_45249[(1)] = (13));

} else {
var statearr_45190_45250 = state_45116__$1;
(statearr_45190_45250[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45117 === (18))){
var inst_45041 = (state_45116[(2)]);
var state_45116__$1 = state_45116;
var statearr_45191_45251 = state_45116__$1;
(statearr_45191_45251[(2)] = inst_45041);

(statearr_45191_45251[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45117 === (42))){
var state_45116__$1 = state_45116;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45116__$1,(45),dchan);
} else {
if((state_val_45117 === (37))){
var inst_44984 = (state_45116[(9)]);
var inst_45084 = (state_45116[(23)]);
var inst_45075 = (state_45116[(25)]);
var inst_45084__$1 = cljs.core.first.call(null,inst_45075);
var inst_45085 = cljs.core.async.put_BANG_.call(null,inst_45084__$1,inst_44984,done);
var state_45116__$1 = (function (){var statearr_45192 = state_45116;
(statearr_45192[(23)] = inst_45084__$1);

return statearr_45192;
})();
if(cljs.core.truth_(inst_45085)){
var statearr_45193_45252 = state_45116__$1;
(statearr_45193_45252[(1)] = (39));

} else {
var statearr_45194_45253 = state_45116__$1;
(statearr_45194_45253[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45117 === (8))){
var inst_44995 = (state_45116[(13)]);
var inst_44996 = (state_45116[(16)]);
var inst_44998 = (inst_44996 < inst_44995);
var inst_44999 = inst_44998;
var state_45116__$1 = state_45116;
if(cljs.core.truth_(inst_44999)){
var statearr_45195_45254 = state_45116__$1;
(statearr_45195_45254[(1)] = (10));

} else {
var statearr_45196_45255 = state_45116__$1;
(statearr_45196_45255[(1)] = (11));

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
});})(c__44396__auto___45201,cs,m,dchan,dctr,done))
;
return ((function (switch__44308__auto__,c__44396__auto___45201,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__44309__auto__ = null;
var cljs$core$async$mult_$_state_machine__44309__auto____0 = (function (){
var statearr_45197 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45197[(0)] = cljs$core$async$mult_$_state_machine__44309__auto__);

(statearr_45197[(1)] = (1));

return statearr_45197;
});
var cljs$core$async$mult_$_state_machine__44309__auto____1 = (function (state_45116){
while(true){
var ret_value__44310__auto__ = (function (){try{while(true){
var result__44311__auto__ = switch__44308__auto__.call(null,state_45116);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44311__auto__;
}
break;
}
}catch (e45198){if((e45198 instanceof Object)){
var ex__44312__auto__ = e45198;
var statearr_45199_45256 = state_45116;
(statearr_45199_45256[(5)] = ex__44312__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45116);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45198;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45257 = state_45116;
state_45116 = G__45257;
continue;
} else {
return ret_value__44310__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__44309__auto__ = function(state_45116){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__44309__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__44309__auto____1.call(this,state_45116);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__44309__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__44309__auto____0;
cljs$core$async$mult_$_state_machine__44309__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__44309__auto____1;
return cljs$core$async$mult_$_state_machine__44309__auto__;
})()
;})(switch__44308__auto__,c__44396__auto___45201,cs,m,dchan,dctr,done))
})();
var state__44398__auto__ = (function (){var statearr_45200 = f__44397__auto__.call(null);
(statearr_45200[(6)] = c__44396__auto___45201);

return statearr_45200;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44398__auto__);
});})(c__44396__auto___45201,cs,m,dchan,dctr,done))
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
var G__45259 = arguments.length;
switch (G__45259) {
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
var x__37438__auto__ = (((m == null))?null:m);
var m__37439__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__37438__auto__)]);
if(!((m__37439__auto__ == null))){
return m__37439__auto__.call(null,m,ch);
} else {
var m__37439__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__37439__auto____$1 == null))){
return m__37439__auto____$1.call(null,m,ch);
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
var x__37438__auto__ = (((m == null))?null:m);
var m__37439__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__37438__auto__)]);
if(!((m__37439__auto__ == null))){
return m__37439__auto__.call(null,m,ch);
} else {
var m__37439__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__37439__auto____$1 == null))){
return m__37439__auto____$1.call(null,m,ch);
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
var x__37438__auto__ = (((m == null))?null:m);
var m__37439__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__37438__auto__)]);
if(!((m__37439__auto__ == null))){
return m__37439__auto__.call(null,m);
} else {
var m__37439__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__37439__auto____$1 == null))){
return m__37439__auto____$1.call(null,m);
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
var x__37438__auto__ = (((m == null))?null:m);
var m__37439__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__37438__auto__)]);
if(!((m__37439__auto__ == null))){
return m__37439__auto__.call(null,m,state_map);
} else {
var m__37439__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__37439__auto____$1 == null))){
return m__37439__auto____$1.call(null,m,state_map);
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
var x__37438__auto__ = (((m == null))?null:m);
var m__37439__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__37438__auto__)]);
if(!((m__37439__auto__ == null))){
return m__37439__auto__.call(null,m,mode);
} else {
var m__37439__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__37439__auto____$1 == null))){
return m__37439__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__37901__auto__ = [];
var len__37894__auto___45271 = arguments.length;
var i__37895__auto___45272 = (0);
while(true){
if((i__37895__auto___45272 < len__37894__auto___45271)){
args__37901__auto__.push((arguments[i__37895__auto___45272]));

var G__45273 = (i__37895__auto___45272 + (1));
i__37895__auto___45272 = G__45273;
continue;
} else {
}
break;
}

var argseq__37902__auto__ = ((((3) < args__37901__auto__.length))?(new cljs.core.IndexedSeq(args__37901__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__37902__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__45265){
var map__45266 = p__45265;
var map__45266__$1 = ((((!((map__45266 == null)))?((((map__45266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45266.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45266):map__45266);
var opts = map__45266__$1;
var statearr_45268_45274 = state;
(statearr_45268_45274[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__45266,map__45266__$1,opts){
return (function (val){
var statearr_45269_45275 = state;
(statearr_45269_45275[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__45266,map__45266__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_45270_45276 = state;
(statearr_45270_45276[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq45261){
var G__45262 = cljs.core.first.call(null,seq45261);
var seq45261__$1 = cljs.core.next.call(null,seq45261);
var G__45263 = cljs.core.first.call(null,seq45261__$1);
var seq45261__$2 = cljs.core.next.call(null,seq45261__$1);
var G__45264 = cljs.core.first.call(null,seq45261__$2);
var seq45261__$3 = cljs.core.next.call(null,seq45261__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__45262,G__45263,G__45264,seq45261__$3);
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
if(typeof cljs.core.async.t_cljs$core$async45277 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45277 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta45278){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta45278 = meta45278;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45277.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_45279,meta45278__$1){
var self__ = this;
var _45279__$1 = this;
return (new cljs.core.async.t_cljs$core$async45277(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta45278__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45277.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_45279){
var self__ = this;
var _45279__$1 = this;
return self__.meta45278;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45277.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45277.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45277.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45277.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45277.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45277.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45277.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45277.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async45277.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta45278","meta45278",1297532003,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45277.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45277.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45277";

cljs.core.async.t_cljs$core$async45277.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__37380__auto__,writer__37381__auto__,opt__37382__auto__){
return cljs.core._write.call(null,writer__37381__auto__,"cljs.core.async/t_cljs$core$async45277");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async45277 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async45277(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta45278){
return (new cljs.core.async.t_cljs$core$async45277(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta45278));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async45277(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__44396__auto___45441 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44396__auto___45441,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__44397__auto__ = (function (){var switch__44308__auto__ = ((function (c__44396__auto___45441,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_45381){
var state_val_45382 = (state_45381[(1)]);
if((state_val_45382 === (7))){
var inst_45296 = (state_45381[(2)]);
var state_45381__$1 = state_45381;
var statearr_45383_45442 = state_45381__$1;
(statearr_45383_45442[(2)] = inst_45296);

(statearr_45383_45442[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45382 === (20))){
var inst_45308 = (state_45381[(7)]);
var state_45381__$1 = state_45381;
var statearr_45384_45443 = state_45381__$1;
(statearr_45384_45443[(2)] = inst_45308);

(statearr_45384_45443[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45382 === (27))){
var state_45381__$1 = state_45381;
var statearr_45385_45444 = state_45381__$1;
(statearr_45385_45444[(2)] = null);

(statearr_45385_45444[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45382 === (1))){
var inst_45283 = (state_45381[(8)]);
var inst_45283__$1 = calc_state.call(null);
var inst_45285 = (inst_45283__$1 == null);
var inst_45286 = cljs.core.not.call(null,inst_45285);
var state_45381__$1 = (function (){var statearr_45386 = state_45381;
(statearr_45386[(8)] = inst_45283__$1);

return statearr_45386;
})();
if(inst_45286){
var statearr_45387_45445 = state_45381__$1;
(statearr_45387_45445[(1)] = (2));

} else {
var statearr_45388_45446 = state_45381__$1;
(statearr_45388_45446[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45382 === (24))){
var inst_45332 = (state_45381[(9)]);
var inst_45341 = (state_45381[(10)]);
var inst_45355 = (state_45381[(11)]);
var inst_45355__$1 = inst_45332.call(null,inst_45341);
var state_45381__$1 = (function (){var statearr_45389 = state_45381;
(statearr_45389[(11)] = inst_45355__$1);

return statearr_45389;
})();
if(cljs.core.truth_(inst_45355__$1)){
var statearr_45390_45447 = state_45381__$1;
(statearr_45390_45447[(1)] = (29));

} else {
var statearr_45391_45448 = state_45381__$1;
(statearr_45391_45448[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45382 === (4))){
var inst_45299 = (state_45381[(2)]);
var state_45381__$1 = state_45381;
if(cljs.core.truth_(inst_45299)){
var statearr_45392_45449 = state_45381__$1;
(statearr_45392_45449[(1)] = (8));

} else {
var statearr_45393_45450 = state_45381__$1;
(statearr_45393_45450[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45382 === (15))){
var inst_45326 = (state_45381[(2)]);
var state_45381__$1 = state_45381;
if(cljs.core.truth_(inst_45326)){
var statearr_45394_45451 = state_45381__$1;
(statearr_45394_45451[(1)] = (19));

} else {
var statearr_45395_45452 = state_45381__$1;
(statearr_45395_45452[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45382 === (21))){
var inst_45331 = (state_45381[(12)]);
var inst_45331__$1 = (state_45381[(2)]);
var inst_45332 = cljs.core.get.call(null,inst_45331__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_45333 = cljs.core.get.call(null,inst_45331__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_45334 = cljs.core.get.call(null,inst_45331__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_45381__$1 = (function (){var statearr_45396 = state_45381;
(statearr_45396[(9)] = inst_45332);

(statearr_45396[(12)] = inst_45331__$1);

(statearr_45396[(13)] = inst_45333);

return statearr_45396;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_45381__$1,(22),inst_45334);
} else {
if((state_val_45382 === (31))){
var inst_45363 = (state_45381[(2)]);
var state_45381__$1 = state_45381;
if(cljs.core.truth_(inst_45363)){
var statearr_45397_45453 = state_45381__$1;
(statearr_45397_45453[(1)] = (32));

} else {
var statearr_45398_45454 = state_45381__$1;
(statearr_45398_45454[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45382 === (32))){
var inst_45340 = (state_45381[(14)]);
var state_45381__$1 = state_45381;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45381__$1,(35),out,inst_45340);
} else {
if((state_val_45382 === (33))){
var inst_45331 = (state_45381[(12)]);
var inst_45308 = inst_45331;
var state_45381__$1 = (function (){var statearr_45399 = state_45381;
(statearr_45399[(7)] = inst_45308);

return statearr_45399;
})();
var statearr_45400_45455 = state_45381__$1;
(statearr_45400_45455[(2)] = null);

(statearr_45400_45455[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45382 === (13))){
var inst_45308 = (state_45381[(7)]);
var inst_45315 = inst_45308.cljs$lang$protocol_mask$partition0$;
var inst_45316 = (inst_45315 & (64));
var inst_45317 = inst_45308.cljs$core$ISeq$;
var inst_45318 = (cljs.core.PROTOCOL_SENTINEL === inst_45317);
var inst_45319 = (inst_45316) || (inst_45318);
var state_45381__$1 = state_45381;
if(cljs.core.truth_(inst_45319)){
var statearr_45401_45456 = state_45381__$1;
(statearr_45401_45456[(1)] = (16));

} else {
var statearr_45402_45457 = state_45381__$1;
(statearr_45402_45457[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45382 === (22))){
var inst_45340 = (state_45381[(14)]);
var inst_45341 = (state_45381[(10)]);
var inst_45339 = (state_45381[(2)]);
var inst_45340__$1 = cljs.core.nth.call(null,inst_45339,(0),null);
var inst_45341__$1 = cljs.core.nth.call(null,inst_45339,(1),null);
var inst_45342 = (inst_45340__$1 == null);
var inst_45343 = cljs.core._EQ_.call(null,inst_45341__$1,change);
var inst_45344 = (inst_45342) || (inst_45343);
var state_45381__$1 = (function (){var statearr_45403 = state_45381;
(statearr_45403[(14)] = inst_45340__$1);

(statearr_45403[(10)] = inst_45341__$1);

return statearr_45403;
})();
if(cljs.core.truth_(inst_45344)){
var statearr_45404_45458 = state_45381__$1;
(statearr_45404_45458[(1)] = (23));

} else {
var statearr_45405_45459 = state_45381__$1;
(statearr_45405_45459[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45382 === (36))){
var inst_45331 = (state_45381[(12)]);
var inst_45308 = inst_45331;
var state_45381__$1 = (function (){var statearr_45406 = state_45381;
(statearr_45406[(7)] = inst_45308);

return statearr_45406;
})();
var statearr_45407_45460 = state_45381__$1;
(statearr_45407_45460[(2)] = null);

(statearr_45407_45460[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45382 === (29))){
var inst_45355 = (state_45381[(11)]);
var state_45381__$1 = state_45381;
var statearr_45408_45461 = state_45381__$1;
(statearr_45408_45461[(2)] = inst_45355);

(statearr_45408_45461[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45382 === (6))){
var state_45381__$1 = state_45381;
var statearr_45409_45462 = state_45381__$1;
(statearr_45409_45462[(2)] = false);

(statearr_45409_45462[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45382 === (28))){
var inst_45351 = (state_45381[(2)]);
var inst_45352 = calc_state.call(null);
var inst_45308 = inst_45352;
var state_45381__$1 = (function (){var statearr_45410 = state_45381;
(statearr_45410[(7)] = inst_45308);

(statearr_45410[(15)] = inst_45351);

return statearr_45410;
})();
var statearr_45411_45463 = state_45381__$1;
(statearr_45411_45463[(2)] = null);

(statearr_45411_45463[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45382 === (25))){
var inst_45377 = (state_45381[(2)]);
var state_45381__$1 = state_45381;
var statearr_45412_45464 = state_45381__$1;
(statearr_45412_45464[(2)] = inst_45377);

(statearr_45412_45464[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45382 === (34))){
var inst_45375 = (state_45381[(2)]);
var state_45381__$1 = state_45381;
var statearr_45413_45465 = state_45381__$1;
(statearr_45413_45465[(2)] = inst_45375);

(statearr_45413_45465[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45382 === (17))){
var state_45381__$1 = state_45381;
var statearr_45414_45466 = state_45381__$1;
(statearr_45414_45466[(2)] = false);

(statearr_45414_45466[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45382 === (3))){
var state_45381__$1 = state_45381;
var statearr_45415_45467 = state_45381__$1;
(statearr_45415_45467[(2)] = false);

(statearr_45415_45467[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45382 === (12))){
var inst_45379 = (state_45381[(2)]);
var state_45381__$1 = state_45381;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45381__$1,inst_45379);
} else {
if((state_val_45382 === (2))){
var inst_45283 = (state_45381[(8)]);
var inst_45288 = inst_45283.cljs$lang$protocol_mask$partition0$;
var inst_45289 = (inst_45288 & (64));
var inst_45290 = inst_45283.cljs$core$ISeq$;
var inst_45291 = (cljs.core.PROTOCOL_SENTINEL === inst_45290);
var inst_45292 = (inst_45289) || (inst_45291);
var state_45381__$1 = state_45381;
if(cljs.core.truth_(inst_45292)){
var statearr_45416_45468 = state_45381__$1;
(statearr_45416_45468[(1)] = (5));

} else {
var statearr_45417_45469 = state_45381__$1;
(statearr_45417_45469[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45382 === (23))){
var inst_45340 = (state_45381[(14)]);
var inst_45346 = (inst_45340 == null);
var state_45381__$1 = state_45381;
if(cljs.core.truth_(inst_45346)){
var statearr_45418_45470 = state_45381__$1;
(statearr_45418_45470[(1)] = (26));

} else {
var statearr_45419_45471 = state_45381__$1;
(statearr_45419_45471[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45382 === (35))){
var inst_45366 = (state_45381[(2)]);
var state_45381__$1 = state_45381;
if(cljs.core.truth_(inst_45366)){
var statearr_45420_45472 = state_45381__$1;
(statearr_45420_45472[(1)] = (36));

} else {
var statearr_45421_45473 = state_45381__$1;
(statearr_45421_45473[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45382 === (19))){
var inst_45308 = (state_45381[(7)]);
var inst_45328 = cljs.core.apply.call(null,cljs.core.hash_map,inst_45308);
var state_45381__$1 = state_45381;
var statearr_45422_45474 = state_45381__$1;
(statearr_45422_45474[(2)] = inst_45328);

(statearr_45422_45474[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45382 === (11))){
var inst_45308 = (state_45381[(7)]);
var inst_45312 = (inst_45308 == null);
var inst_45313 = cljs.core.not.call(null,inst_45312);
var state_45381__$1 = state_45381;
if(inst_45313){
var statearr_45423_45475 = state_45381__$1;
(statearr_45423_45475[(1)] = (13));

} else {
var statearr_45424_45476 = state_45381__$1;
(statearr_45424_45476[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45382 === (9))){
var inst_45283 = (state_45381[(8)]);
var state_45381__$1 = state_45381;
var statearr_45425_45477 = state_45381__$1;
(statearr_45425_45477[(2)] = inst_45283);

(statearr_45425_45477[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45382 === (5))){
var state_45381__$1 = state_45381;
var statearr_45426_45478 = state_45381__$1;
(statearr_45426_45478[(2)] = true);

(statearr_45426_45478[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45382 === (14))){
var state_45381__$1 = state_45381;
var statearr_45427_45479 = state_45381__$1;
(statearr_45427_45479[(2)] = false);

(statearr_45427_45479[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45382 === (26))){
var inst_45341 = (state_45381[(10)]);
var inst_45348 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_45341);
var state_45381__$1 = state_45381;
var statearr_45428_45480 = state_45381__$1;
(statearr_45428_45480[(2)] = inst_45348);

(statearr_45428_45480[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45382 === (16))){
var state_45381__$1 = state_45381;
var statearr_45429_45481 = state_45381__$1;
(statearr_45429_45481[(2)] = true);

(statearr_45429_45481[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45382 === (38))){
var inst_45371 = (state_45381[(2)]);
var state_45381__$1 = state_45381;
var statearr_45430_45482 = state_45381__$1;
(statearr_45430_45482[(2)] = inst_45371);

(statearr_45430_45482[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45382 === (30))){
var inst_45332 = (state_45381[(9)]);
var inst_45341 = (state_45381[(10)]);
var inst_45333 = (state_45381[(13)]);
var inst_45358 = cljs.core.empty_QMARK_.call(null,inst_45332);
var inst_45359 = inst_45333.call(null,inst_45341);
var inst_45360 = cljs.core.not.call(null,inst_45359);
var inst_45361 = (inst_45358) && (inst_45360);
var state_45381__$1 = state_45381;
var statearr_45431_45483 = state_45381__$1;
(statearr_45431_45483[(2)] = inst_45361);

(statearr_45431_45483[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45382 === (10))){
var inst_45283 = (state_45381[(8)]);
var inst_45304 = (state_45381[(2)]);
var inst_45305 = cljs.core.get.call(null,inst_45304,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_45306 = cljs.core.get.call(null,inst_45304,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_45307 = cljs.core.get.call(null,inst_45304,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_45308 = inst_45283;
var state_45381__$1 = (function (){var statearr_45432 = state_45381;
(statearr_45432[(16)] = inst_45306);

(statearr_45432[(7)] = inst_45308);

(statearr_45432[(17)] = inst_45305);

(statearr_45432[(18)] = inst_45307);

return statearr_45432;
})();
var statearr_45433_45484 = state_45381__$1;
(statearr_45433_45484[(2)] = null);

(statearr_45433_45484[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45382 === (18))){
var inst_45323 = (state_45381[(2)]);
var state_45381__$1 = state_45381;
var statearr_45434_45485 = state_45381__$1;
(statearr_45434_45485[(2)] = inst_45323);

(statearr_45434_45485[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45382 === (37))){
var state_45381__$1 = state_45381;
var statearr_45435_45486 = state_45381__$1;
(statearr_45435_45486[(2)] = null);

(statearr_45435_45486[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45382 === (8))){
var inst_45283 = (state_45381[(8)]);
var inst_45301 = cljs.core.apply.call(null,cljs.core.hash_map,inst_45283);
var state_45381__$1 = state_45381;
var statearr_45436_45487 = state_45381__$1;
(statearr_45436_45487[(2)] = inst_45301);

(statearr_45436_45487[(1)] = (10));


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
});})(c__44396__auto___45441,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__44308__auto__,c__44396__auto___45441,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__44309__auto__ = null;
var cljs$core$async$mix_$_state_machine__44309__auto____0 = (function (){
var statearr_45437 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45437[(0)] = cljs$core$async$mix_$_state_machine__44309__auto__);

(statearr_45437[(1)] = (1));

return statearr_45437;
});
var cljs$core$async$mix_$_state_machine__44309__auto____1 = (function (state_45381){
while(true){
var ret_value__44310__auto__ = (function (){try{while(true){
var result__44311__auto__ = switch__44308__auto__.call(null,state_45381);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44311__auto__;
}
break;
}
}catch (e45438){if((e45438 instanceof Object)){
var ex__44312__auto__ = e45438;
var statearr_45439_45488 = state_45381;
(statearr_45439_45488[(5)] = ex__44312__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45381);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45438;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45489 = state_45381;
state_45381 = G__45489;
continue;
} else {
return ret_value__44310__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__44309__auto__ = function(state_45381){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__44309__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__44309__auto____1.call(this,state_45381);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__44309__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__44309__auto____0;
cljs$core$async$mix_$_state_machine__44309__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__44309__auto____1;
return cljs$core$async$mix_$_state_machine__44309__auto__;
})()
;})(switch__44308__auto__,c__44396__auto___45441,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__44398__auto__ = (function (){var statearr_45440 = f__44397__auto__.call(null);
(statearr_45440[(6)] = c__44396__auto___45441);

return statearr_45440;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44398__auto__);
});})(c__44396__auto___45441,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__37438__auto__ = (((p == null))?null:p);
var m__37439__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__37438__auto__)]);
if(!((m__37439__auto__ == null))){
return m__37439__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__37439__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__37439__auto____$1 == null))){
return m__37439__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__37438__auto__ = (((p == null))?null:p);
var m__37439__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__37438__auto__)]);
if(!((m__37439__auto__ == null))){
return m__37439__auto__.call(null,p,v,ch);
} else {
var m__37439__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__37439__auto____$1 == null))){
return m__37439__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__45491 = arguments.length;
switch (G__45491) {
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
var x__37438__auto__ = (((p == null))?null:p);
var m__37439__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__37438__auto__)]);
if(!((m__37439__auto__ == null))){
return m__37439__auto__.call(null,p);
} else {
var m__37439__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__37439__auto____$1 == null))){
return m__37439__auto____$1.call(null,p);
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
var x__37438__auto__ = (((p == null))?null:p);
var m__37439__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__37438__auto__)]);
if(!((m__37439__auto__ == null))){
return m__37439__auto__.call(null,p,v);
} else {
var m__37439__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__37439__auto____$1 == null))){
return m__37439__auto____$1.call(null,p,v);
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
var G__45495 = arguments.length;
switch (G__45495) {
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
var or__36769__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__36769__auto__)){
return or__36769__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__36769__auto__,mults){
return (function (p1__45493_SHARP_){
if(cljs.core.truth_(p1__45493_SHARP_.call(null,topic))){
return p1__45493_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__45493_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__36769__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async45496 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45496 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta45497){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta45497 = meta45497;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45496.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_45498,meta45497__$1){
var self__ = this;
var _45498__$1 = this;
return (new cljs.core.async.t_cljs$core$async45496(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta45497__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45496.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_45498){
var self__ = this;
var _45498__$1 = this;
return self__.meta45497;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45496.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45496.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45496.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45496.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45496.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async45496.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45496.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45496.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta45497","meta45497",-462563971,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45496.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45496.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45496";

cljs.core.async.t_cljs$core$async45496.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__37380__auto__,writer__37381__auto__,opt__37382__auto__){
return cljs.core._write.call(null,writer__37381__auto__,"cljs.core.async/t_cljs$core$async45496");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async45496 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async45496(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta45497){
return (new cljs.core.async.t_cljs$core$async45496(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta45497));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async45496(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__44396__auto___45616 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44396__auto___45616,mults,ensure_mult,p){
return (function (){
var f__44397__auto__ = (function (){var switch__44308__auto__ = ((function (c__44396__auto___45616,mults,ensure_mult,p){
return (function (state_45570){
var state_val_45571 = (state_45570[(1)]);
if((state_val_45571 === (7))){
var inst_45566 = (state_45570[(2)]);
var state_45570__$1 = state_45570;
var statearr_45572_45617 = state_45570__$1;
(statearr_45572_45617[(2)] = inst_45566);

(statearr_45572_45617[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45571 === (20))){
var state_45570__$1 = state_45570;
var statearr_45573_45618 = state_45570__$1;
(statearr_45573_45618[(2)] = null);

(statearr_45573_45618[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45571 === (1))){
var state_45570__$1 = state_45570;
var statearr_45574_45619 = state_45570__$1;
(statearr_45574_45619[(2)] = null);

(statearr_45574_45619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45571 === (24))){
var inst_45549 = (state_45570[(7)]);
var inst_45558 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_45549);
var state_45570__$1 = state_45570;
var statearr_45575_45620 = state_45570__$1;
(statearr_45575_45620[(2)] = inst_45558);

(statearr_45575_45620[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45571 === (4))){
var inst_45501 = (state_45570[(8)]);
var inst_45501__$1 = (state_45570[(2)]);
var inst_45502 = (inst_45501__$1 == null);
var state_45570__$1 = (function (){var statearr_45576 = state_45570;
(statearr_45576[(8)] = inst_45501__$1);

return statearr_45576;
})();
if(cljs.core.truth_(inst_45502)){
var statearr_45577_45621 = state_45570__$1;
(statearr_45577_45621[(1)] = (5));

} else {
var statearr_45578_45622 = state_45570__$1;
(statearr_45578_45622[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45571 === (15))){
var inst_45543 = (state_45570[(2)]);
var state_45570__$1 = state_45570;
var statearr_45579_45623 = state_45570__$1;
(statearr_45579_45623[(2)] = inst_45543);

(statearr_45579_45623[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45571 === (21))){
var inst_45563 = (state_45570[(2)]);
var state_45570__$1 = (function (){var statearr_45580 = state_45570;
(statearr_45580[(9)] = inst_45563);

return statearr_45580;
})();
var statearr_45581_45624 = state_45570__$1;
(statearr_45581_45624[(2)] = null);

(statearr_45581_45624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45571 === (13))){
var inst_45525 = (state_45570[(10)]);
var inst_45527 = cljs.core.chunked_seq_QMARK_.call(null,inst_45525);
var state_45570__$1 = state_45570;
if(inst_45527){
var statearr_45582_45625 = state_45570__$1;
(statearr_45582_45625[(1)] = (16));

} else {
var statearr_45583_45626 = state_45570__$1;
(statearr_45583_45626[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45571 === (22))){
var inst_45555 = (state_45570[(2)]);
var state_45570__$1 = state_45570;
if(cljs.core.truth_(inst_45555)){
var statearr_45584_45627 = state_45570__$1;
(statearr_45584_45627[(1)] = (23));

} else {
var statearr_45585_45628 = state_45570__$1;
(statearr_45585_45628[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45571 === (6))){
var inst_45549 = (state_45570[(7)]);
var inst_45551 = (state_45570[(11)]);
var inst_45501 = (state_45570[(8)]);
var inst_45549__$1 = topic_fn.call(null,inst_45501);
var inst_45550 = cljs.core.deref.call(null,mults);
var inst_45551__$1 = cljs.core.get.call(null,inst_45550,inst_45549__$1);
var state_45570__$1 = (function (){var statearr_45586 = state_45570;
(statearr_45586[(7)] = inst_45549__$1);

(statearr_45586[(11)] = inst_45551__$1);

return statearr_45586;
})();
if(cljs.core.truth_(inst_45551__$1)){
var statearr_45587_45629 = state_45570__$1;
(statearr_45587_45629[(1)] = (19));

} else {
var statearr_45588_45630 = state_45570__$1;
(statearr_45588_45630[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45571 === (25))){
var inst_45560 = (state_45570[(2)]);
var state_45570__$1 = state_45570;
var statearr_45589_45631 = state_45570__$1;
(statearr_45589_45631[(2)] = inst_45560);

(statearr_45589_45631[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45571 === (17))){
var inst_45525 = (state_45570[(10)]);
var inst_45534 = cljs.core.first.call(null,inst_45525);
var inst_45535 = cljs.core.async.muxch_STAR_.call(null,inst_45534);
var inst_45536 = cljs.core.async.close_BANG_.call(null,inst_45535);
var inst_45537 = cljs.core.next.call(null,inst_45525);
var inst_45511 = inst_45537;
var inst_45512 = null;
var inst_45513 = (0);
var inst_45514 = (0);
var state_45570__$1 = (function (){var statearr_45590 = state_45570;
(statearr_45590[(12)] = inst_45512);

(statearr_45590[(13)] = inst_45514);

(statearr_45590[(14)] = inst_45536);

(statearr_45590[(15)] = inst_45513);

(statearr_45590[(16)] = inst_45511);

return statearr_45590;
})();
var statearr_45591_45632 = state_45570__$1;
(statearr_45591_45632[(2)] = null);

(statearr_45591_45632[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45571 === (3))){
var inst_45568 = (state_45570[(2)]);
var state_45570__$1 = state_45570;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45570__$1,inst_45568);
} else {
if((state_val_45571 === (12))){
var inst_45545 = (state_45570[(2)]);
var state_45570__$1 = state_45570;
var statearr_45592_45633 = state_45570__$1;
(statearr_45592_45633[(2)] = inst_45545);

(statearr_45592_45633[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45571 === (2))){
var state_45570__$1 = state_45570;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45570__$1,(4),ch);
} else {
if((state_val_45571 === (23))){
var state_45570__$1 = state_45570;
var statearr_45593_45634 = state_45570__$1;
(statearr_45593_45634[(2)] = null);

(statearr_45593_45634[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45571 === (19))){
var inst_45551 = (state_45570[(11)]);
var inst_45501 = (state_45570[(8)]);
var inst_45553 = cljs.core.async.muxch_STAR_.call(null,inst_45551);
var state_45570__$1 = state_45570;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45570__$1,(22),inst_45553,inst_45501);
} else {
if((state_val_45571 === (11))){
var inst_45525 = (state_45570[(10)]);
var inst_45511 = (state_45570[(16)]);
var inst_45525__$1 = cljs.core.seq.call(null,inst_45511);
var state_45570__$1 = (function (){var statearr_45594 = state_45570;
(statearr_45594[(10)] = inst_45525__$1);

return statearr_45594;
})();
if(inst_45525__$1){
var statearr_45595_45635 = state_45570__$1;
(statearr_45595_45635[(1)] = (13));

} else {
var statearr_45596_45636 = state_45570__$1;
(statearr_45596_45636[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45571 === (9))){
var inst_45547 = (state_45570[(2)]);
var state_45570__$1 = state_45570;
var statearr_45597_45637 = state_45570__$1;
(statearr_45597_45637[(2)] = inst_45547);

(statearr_45597_45637[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45571 === (5))){
var inst_45508 = cljs.core.deref.call(null,mults);
var inst_45509 = cljs.core.vals.call(null,inst_45508);
var inst_45510 = cljs.core.seq.call(null,inst_45509);
var inst_45511 = inst_45510;
var inst_45512 = null;
var inst_45513 = (0);
var inst_45514 = (0);
var state_45570__$1 = (function (){var statearr_45598 = state_45570;
(statearr_45598[(12)] = inst_45512);

(statearr_45598[(13)] = inst_45514);

(statearr_45598[(15)] = inst_45513);

(statearr_45598[(16)] = inst_45511);

return statearr_45598;
})();
var statearr_45599_45638 = state_45570__$1;
(statearr_45599_45638[(2)] = null);

(statearr_45599_45638[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45571 === (14))){
var state_45570__$1 = state_45570;
var statearr_45603_45639 = state_45570__$1;
(statearr_45603_45639[(2)] = null);

(statearr_45603_45639[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45571 === (16))){
var inst_45525 = (state_45570[(10)]);
var inst_45529 = cljs.core.chunk_first.call(null,inst_45525);
var inst_45530 = cljs.core.chunk_rest.call(null,inst_45525);
var inst_45531 = cljs.core.count.call(null,inst_45529);
var inst_45511 = inst_45530;
var inst_45512 = inst_45529;
var inst_45513 = inst_45531;
var inst_45514 = (0);
var state_45570__$1 = (function (){var statearr_45604 = state_45570;
(statearr_45604[(12)] = inst_45512);

(statearr_45604[(13)] = inst_45514);

(statearr_45604[(15)] = inst_45513);

(statearr_45604[(16)] = inst_45511);

return statearr_45604;
})();
var statearr_45605_45640 = state_45570__$1;
(statearr_45605_45640[(2)] = null);

(statearr_45605_45640[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45571 === (10))){
var inst_45512 = (state_45570[(12)]);
var inst_45514 = (state_45570[(13)]);
var inst_45513 = (state_45570[(15)]);
var inst_45511 = (state_45570[(16)]);
var inst_45519 = cljs.core._nth.call(null,inst_45512,inst_45514);
var inst_45520 = cljs.core.async.muxch_STAR_.call(null,inst_45519);
var inst_45521 = cljs.core.async.close_BANG_.call(null,inst_45520);
var inst_45522 = (inst_45514 + (1));
var tmp45600 = inst_45512;
var tmp45601 = inst_45513;
var tmp45602 = inst_45511;
var inst_45511__$1 = tmp45602;
var inst_45512__$1 = tmp45600;
var inst_45513__$1 = tmp45601;
var inst_45514__$1 = inst_45522;
var state_45570__$1 = (function (){var statearr_45606 = state_45570;
(statearr_45606[(12)] = inst_45512__$1);

(statearr_45606[(13)] = inst_45514__$1);

(statearr_45606[(17)] = inst_45521);

(statearr_45606[(15)] = inst_45513__$1);

(statearr_45606[(16)] = inst_45511__$1);

return statearr_45606;
})();
var statearr_45607_45641 = state_45570__$1;
(statearr_45607_45641[(2)] = null);

(statearr_45607_45641[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45571 === (18))){
var inst_45540 = (state_45570[(2)]);
var state_45570__$1 = state_45570;
var statearr_45608_45642 = state_45570__$1;
(statearr_45608_45642[(2)] = inst_45540);

(statearr_45608_45642[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45571 === (8))){
var inst_45514 = (state_45570[(13)]);
var inst_45513 = (state_45570[(15)]);
var inst_45516 = (inst_45514 < inst_45513);
var inst_45517 = inst_45516;
var state_45570__$1 = state_45570;
if(cljs.core.truth_(inst_45517)){
var statearr_45609_45643 = state_45570__$1;
(statearr_45609_45643[(1)] = (10));

} else {
var statearr_45610_45644 = state_45570__$1;
(statearr_45610_45644[(1)] = (11));

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
});})(c__44396__auto___45616,mults,ensure_mult,p))
;
return ((function (switch__44308__auto__,c__44396__auto___45616,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__44309__auto__ = null;
var cljs$core$async$state_machine__44309__auto____0 = (function (){
var statearr_45611 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45611[(0)] = cljs$core$async$state_machine__44309__auto__);

(statearr_45611[(1)] = (1));

return statearr_45611;
});
var cljs$core$async$state_machine__44309__auto____1 = (function (state_45570){
while(true){
var ret_value__44310__auto__ = (function (){try{while(true){
var result__44311__auto__ = switch__44308__auto__.call(null,state_45570);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44311__auto__;
}
break;
}
}catch (e45612){if((e45612 instanceof Object)){
var ex__44312__auto__ = e45612;
var statearr_45613_45645 = state_45570;
(statearr_45613_45645[(5)] = ex__44312__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45570);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45612;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45646 = state_45570;
state_45570 = G__45646;
continue;
} else {
return ret_value__44310__auto__;
}
break;
}
});
cljs$core$async$state_machine__44309__auto__ = function(state_45570){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44309__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44309__auto____1.call(this,state_45570);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__44309__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44309__auto____0;
cljs$core$async$state_machine__44309__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44309__auto____1;
return cljs$core$async$state_machine__44309__auto__;
})()
;})(switch__44308__auto__,c__44396__auto___45616,mults,ensure_mult,p))
})();
var state__44398__auto__ = (function (){var statearr_45614 = f__44397__auto__.call(null);
(statearr_45614[(6)] = c__44396__auto___45616);

return statearr_45614;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44398__auto__);
});})(c__44396__auto___45616,mults,ensure_mult,p))
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
var G__45648 = arguments.length;
switch (G__45648) {
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
var G__45651 = arguments.length;
switch (G__45651) {
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
var G__45654 = arguments.length;
switch (G__45654) {
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
var c__44396__auto___45721 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44396__auto___45721,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__44397__auto__ = (function (){var switch__44308__auto__ = ((function (c__44396__auto___45721,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_45693){
var state_val_45694 = (state_45693[(1)]);
if((state_val_45694 === (7))){
var state_45693__$1 = state_45693;
var statearr_45695_45722 = state_45693__$1;
(statearr_45695_45722[(2)] = null);

(statearr_45695_45722[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45694 === (1))){
var state_45693__$1 = state_45693;
var statearr_45696_45723 = state_45693__$1;
(statearr_45696_45723[(2)] = null);

(statearr_45696_45723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45694 === (4))){
var inst_45657 = (state_45693[(7)]);
var inst_45659 = (inst_45657 < cnt);
var state_45693__$1 = state_45693;
if(cljs.core.truth_(inst_45659)){
var statearr_45697_45724 = state_45693__$1;
(statearr_45697_45724[(1)] = (6));

} else {
var statearr_45698_45725 = state_45693__$1;
(statearr_45698_45725[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45694 === (15))){
var inst_45689 = (state_45693[(2)]);
var state_45693__$1 = state_45693;
var statearr_45699_45726 = state_45693__$1;
(statearr_45699_45726[(2)] = inst_45689);

(statearr_45699_45726[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45694 === (13))){
var inst_45682 = cljs.core.async.close_BANG_.call(null,out);
var state_45693__$1 = state_45693;
var statearr_45700_45727 = state_45693__$1;
(statearr_45700_45727[(2)] = inst_45682);

(statearr_45700_45727[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45694 === (6))){
var state_45693__$1 = state_45693;
var statearr_45701_45728 = state_45693__$1;
(statearr_45701_45728[(2)] = null);

(statearr_45701_45728[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45694 === (3))){
var inst_45691 = (state_45693[(2)]);
var state_45693__$1 = state_45693;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45693__$1,inst_45691);
} else {
if((state_val_45694 === (12))){
var inst_45679 = (state_45693[(8)]);
var inst_45679__$1 = (state_45693[(2)]);
var inst_45680 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_45679__$1);
var state_45693__$1 = (function (){var statearr_45702 = state_45693;
(statearr_45702[(8)] = inst_45679__$1);

return statearr_45702;
})();
if(cljs.core.truth_(inst_45680)){
var statearr_45703_45729 = state_45693__$1;
(statearr_45703_45729[(1)] = (13));

} else {
var statearr_45704_45730 = state_45693__$1;
(statearr_45704_45730[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45694 === (2))){
var inst_45656 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_45657 = (0);
var state_45693__$1 = (function (){var statearr_45705 = state_45693;
(statearr_45705[(9)] = inst_45656);

(statearr_45705[(7)] = inst_45657);

return statearr_45705;
})();
var statearr_45706_45731 = state_45693__$1;
(statearr_45706_45731[(2)] = null);

(statearr_45706_45731[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45694 === (11))){
var inst_45657 = (state_45693[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_45693,(10),Object,null,(9));
var inst_45666 = chs__$1.call(null,inst_45657);
var inst_45667 = done.call(null,inst_45657);
var inst_45668 = cljs.core.async.take_BANG_.call(null,inst_45666,inst_45667);
var state_45693__$1 = state_45693;
var statearr_45707_45732 = state_45693__$1;
(statearr_45707_45732[(2)] = inst_45668);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45693__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45694 === (9))){
var inst_45657 = (state_45693[(7)]);
var inst_45670 = (state_45693[(2)]);
var inst_45671 = (inst_45657 + (1));
var inst_45657__$1 = inst_45671;
var state_45693__$1 = (function (){var statearr_45708 = state_45693;
(statearr_45708[(10)] = inst_45670);

(statearr_45708[(7)] = inst_45657__$1);

return statearr_45708;
})();
var statearr_45709_45733 = state_45693__$1;
(statearr_45709_45733[(2)] = null);

(statearr_45709_45733[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45694 === (5))){
var inst_45677 = (state_45693[(2)]);
var state_45693__$1 = (function (){var statearr_45710 = state_45693;
(statearr_45710[(11)] = inst_45677);

return statearr_45710;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45693__$1,(12),dchan);
} else {
if((state_val_45694 === (14))){
var inst_45679 = (state_45693[(8)]);
var inst_45684 = cljs.core.apply.call(null,f,inst_45679);
var state_45693__$1 = state_45693;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45693__$1,(16),out,inst_45684);
} else {
if((state_val_45694 === (16))){
var inst_45686 = (state_45693[(2)]);
var state_45693__$1 = (function (){var statearr_45711 = state_45693;
(statearr_45711[(12)] = inst_45686);

return statearr_45711;
})();
var statearr_45712_45734 = state_45693__$1;
(statearr_45712_45734[(2)] = null);

(statearr_45712_45734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45694 === (10))){
var inst_45661 = (state_45693[(2)]);
var inst_45662 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_45693__$1 = (function (){var statearr_45713 = state_45693;
(statearr_45713[(13)] = inst_45661);

return statearr_45713;
})();
var statearr_45714_45735 = state_45693__$1;
(statearr_45714_45735[(2)] = inst_45662);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45693__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45694 === (8))){
var inst_45675 = (state_45693[(2)]);
var state_45693__$1 = state_45693;
var statearr_45715_45736 = state_45693__$1;
(statearr_45715_45736[(2)] = inst_45675);

(statearr_45715_45736[(1)] = (5));


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
});})(c__44396__auto___45721,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__44308__auto__,c__44396__auto___45721,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__44309__auto__ = null;
var cljs$core$async$state_machine__44309__auto____0 = (function (){
var statearr_45716 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45716[(0)] = cljs$core$async$state_machine__44309__auto__);

(statearr_45716[(1)] = (1));

return statearr_45716;
});
var cljs$core$async$state_machine__44309__auto____1 = (function (state_45693){
while(true){
var ret_value__44310__auto__ = (function (){try{while(true){
var result__44311__auto__ = switch__44308__auto__.call(null,state_45693);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44311__auto__;
}
break;
}
}catch (e45717){if((e45717 instanceof Object)){
var ex__44312__auto__ = e45717;
var statearr_45718_45737 = state_45693;
(statearr_45718_45737[(5)] = ex__44312__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45693);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45717;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45738 = state_45693;
state_45693 = G__45738;
continue;
} else {
return ret_value__44310__auto__;
}
break;
}
});
cljs$core$async$state_machine__44309__auto__ = function(state_45693){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44309__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44309__auto____1.call(this,state_45693);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__44309__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44309__auto____0;
cljs$core$async$state_machine__44309__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44309__auto____1;
return cljs$core$async$state_machine__44309__auto__;
})()
;})(switch__44308__auto__,c__44396__auto___45721,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__44398__auto__ = (function (){var statearr_45719 = f__44397__auto__.call(null);
(statearr_45719[(6)] = c__44396__auto___45721);

return statearr_45719;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44398__auto__);
});})(c__44396__auto___45721,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__45741 = arguments.length;
switch (G__45741) {
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
var c__44396__auto___45795 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44396__auto___45795,out){
return (function (){
var f__44397__auto__ = (function (){var switch__44308__auto__ = ((function (c__44396__auto___45795,out){
return (function (state_45773){
var state_val_45774 = (state_45773[(1)]);
if((state_val_45774 === (7))){
var inst_45752 = (state_45773[(7)]);
var inst_45753 = (state_45773[(8)]);
var inst_45752__$1 = (state_45773[(2)]);
var inst_45753__$1 = cljs.core.nth.call(null,inst_45752__$1,(0),null);
var inst_45754 = cljs.core.nth.call(null,inst_45752__$1,(1),null);
var inst_45755 = (inst_45753__$1 == null);
var state_45773__$1 = (function (){var statearr_45775 = state_45773;
(statearr_45775[(7)] = inst_45752__$1);

(statearr_45775[(9)] = inst_45754);

(statearr_45775[(8)] = inst_45753__$1);

return statearr_45775;
})();
if(cljs.core.truth_(inst_45755)){
var statearr_45776_45796 = state_45773__$1;
(statearr_45776_45796[(1)] = (8));

} else {
var statearr_45777_45797 = state_45773__$1;
(statearr_45777_45797[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45774 === (1))){
var inst_45742 = cljs.core.vec.call(null,chs);
var inst_45743 = inst_45742;
var state_45773__$1 = (function (){var statearr_45778 = state_45773;
(statearr_45778[(10)] = inst_45743);

return statearr_45778;
})();
var statearr_45779_45798 = state_45773__$1;
(statearr_45779_45798[(2)] = null);

(statearr_45779_45798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45774 === (4))){
var inst_45743 = (state_45773[(10)]);
var state_45773__$1 = state_45773;
return cljs.core.async.ioc_alts_BANG_.call(null,state_45773__$1,(7),inst_45743);
} else {
if((state_val_45774 === (6))){
var inst_45769 = (state_45773[(2)]);
var state_45773__$1 = state_45773;
var statearr_45780_45799 = state_45773__$1;
(statearr_45780_45799[(2)] = inst_45769);

(statearr_45780_45799[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45774 === (3))){
var inst_45771 = (state_45773[(2)]);
var state_45773__$1 = state_45773;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45773__$1,inst_45771);
} else {
if((state_val_45774 === (2))){
var inst_45743 = (state_45773[(10)]);
var inst_45745 = cljs.core.count.call(null,inst_45743);
var inst_45746 = (inst_45745 > (0));
var state_45773__$1 = state_45773;
if(cljs.core.truth_(inst_45746)){
var statearr_45782_45800 = state_45773__$1;
(statearr_45782_45800[(1)] = (4));

} else {
var statearr_45783_45801 = state_45773__$1;
(statearr_45783_45801[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45774 === (11))){
var inst_45743 = (state_45773[(10)]);
var inst_45762 = (state_45773[(2)]);
var tmp45781 = inst_45743;
var inst_45743__$1 = tmp45781;
var state_45773__$1 = (function (){var statearr_45784 = state_45773;
(statearr_45784[(11)] = inst_45762);

(statearr_45784[(10)] = inst_45743__$1);

return statearr_45784;
})();
var statearr_45785_45802 = state_45773__$1;
(statearr_45785_45802[(2)] = null);

(statearr_45785_45802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45774 === (9))){
var inst_45753 = (state_45773[(8)]);
var state_45773__$1 = state_45773;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45773__$1,(11),out,inst_45753);
} else {
if((state_val_45774 === (5))){
var inst_45767 = cljs.core.async.close_BANG_.call(null,out);
var state_45773__$1 = state_45773;
var statearr_45786_45803 = state_45773__$1;
(statearr_45786_45803[(2)] = inst_45767);

(statearr_45786_45803[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45774 === (10))){
var inst_45765 = (state_45773[(2)]);
var state_45773__$1 = state_45773;
var statearr_45787_45804 = state_45773__$1;
(statearr_45787_45804[(2)] = inst_45765);

(statearr_45787_45804[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45774 === (8))){
var inst_45743 = (state_45773[(10)]);
var inst_45752 = (state_45773[(7)]);
var inst_45754 = (state_45773[(9)]);
var inst_45753 = (state_45773[(8)]);
var inst_45757 = (function (){var cs = inst_45743;
var vec__45748 = inst_45752;
var v = inst_45753;
var c = inst_45754;
return ((function (cs,vec__45748,v,c,inst_45743,inst_45752,inst_45754,inst_45753,state_val_45774,c__44396__auto___45795,out){
return (function (p1__45739_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__45739_SHARP_);
});
;})(cs,vec__45748,v,c,inst_45743,inst_45752,inst_45754,inst_45753,state_val_45774,c__44396__auto___45795,out))
})();
var inst_45758 = cljs.core.filterv.call(null,inst_45757,inst_45743);
var inst_45743__$1 = inst_45758;
var state_45773__$1 = (function (){var statearr_45788 = state_45773;
(statearr_45788[(10)] = inst_45743__$1);

return statearr_45788;
})();
var statearr_45789_45805 = state_45773__$1;
(statearr_45789_45805[(2)] = null);

(statearr_45789_45805[(1)] = (2));


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
});})(c__44396__auto___45795,out))
;
return ((function (switch__44308__auto__,c__44396__auto___45795,out){
return (function() {
var cljs$core$async$state_machine__44309__auto__ = null;
var cljs$core$async$state_machine__44309__auto____0 = (function (){
var statearr_45790 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45790[(0)] = cljs$core$async$state_machine__44309__auto__);

(statearr_45790[(1)] = (1));

return statearr_45790;
});
var cljs$core$async$state_machine__44309__auto____1 = (function (state_45773){
while(true){
var ret_value__44310__auto__ = (function (){try{while(true){
var result__44311__auto__ = switch__44308__auto__.call(null,state_45773);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44311__auto__;
}
break;
}
}catch (e45791){if((e45791 instanceof Object)){
var ex__44312__auto__ = e45791;
var statearr_45792_45806 = state_45773;
(statearr_45792_45806[(5)] = ex__44312__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45773);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45791;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45807 = state_45773;
state_45773 = G__45807;
continue;
} else {
return ret_value__44310__auto__;
}
break;
}
});
cljs$core$async$state_machine__44309__auto__ = function(state_45773){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44309__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44309__auto____1.call(this,state_45773);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__44309__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44309__auto____0;
cljs$core$async$state_machine__44309__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44309__auto____1;
return cljs$core$async$state_machine__44309__auto__;
})()
;})(switch__44308__auto__,c__44396__auto___45795,out))
})();
var state__44398__auto__ = (function (){var statearr_45793 = f__44397__auto__.call(null);
(statearr_45793[(6)] = c__44396__auto___45795);

return statearr_45793;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44398__auto__);
});})(c__44396__auto___45795,out))
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
var G__45809 = arguments.length;
switch (G__45809) {
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
var c__44396__auto___45854 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44396__auto___45854,out){
return (function (){
var f__44397__auto__ = (function (){var switch__44308__auto__ = ((function (c__44396__auto___45854,out){
return (function (state_45833){
var state_val_45834 = (state_45833[(1)]);
if((state_val_45834 === (7))){
var inst_45815 = (state_45833[(7)]);
var inst_45815__$1 = (state_45833[(2)]);
var inst_45816 = (inst_45815__$1 == null);
var inst_45817 = cljs.core.not.call(null,inst_45816);
var state_45833__$1 = (function (){var statearr_45835 = state_45833;
(statearr_45835[(7)] = inst_45815__$1);

return statearr_45835;
})();
if(inst_45817){
var statearr_45836_45855 = state_45833__$1;
(statearr_45836_45855[(1)] = (8));

} else {
var statearr_45837_45856 = state_45833__$1;
(statearr_45837_45856[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45834 === (1))){
var inst_45810 = (0);
var state_45833__$1 = (function (){var statearr_45838 = state_45833;
(statearr_45838[(8)] = inst_45810);

return statearr_45838;
})();
var statearr_45839_45857 = state_45833__$1;
(statearr_45839_45857[(2)] = null);

(statearr_45839_45857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45834 === (4))){
var state_45833__$1 = state_45833;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45833__$1,(7),ch);
} else {
if((state_val_45834 === (6))){
var inst_45828 = (state_45833[(2)]);
var state_45833__$1 = state_45833;
var statearr_45840_45858 = state_45833__$1;
(statearr_45840_45858[(2)] = inst_45828);

(statearr_45840_45858[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45834 === (3))){
var inst_45830 = (state_45833[(2)]);
var inst_45831 = cljs.core.async.close_BANG_.call(null,out);
var state_45833__$1 = (function (){var statearr_45841 = state_45833;
(statearr_45841[(9)] = inst_45830);

return statearr_45841;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45833__$1,inst_45831);
} else {
if((state_val_45834 === (2))){
var inst_45810 = (state_45833[(8)]);
var inst_45812 = (inst_45810 < n);
var state_45833__$1 = state_45833;
if(cljs.core.truth_(inst_45812)){
var statearr_45842_45859 = state_45833__$1;
(statearr_45842_45859[(1)] = (4));

} else {
var statearr_45843_45860 = state_45833__$1;
(statearr_45843_45860[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45834 === (11))){
var inst_45810 = (state_45833[(8)]);
var inst_45820 = (state_45833[(2)]);
var inst_45821 = (inst_45810 + (1));
var inst_45810__$1 = inst_45821;
var state_45833__$1 = (function (){var statearr_45844 = state_45833;
(statearr_45844[(8)] = inst_45810__$1);

(statearr_45844[(10)] = inst_45820);

return statearr_45844;
})();
var statearr_45845_45861 = state_45833__$1;
(statearr_45845_45861[(2)] = null);

(statearr_45845_45861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45834 === (9))){
var state_45833__$1 = state_45833;
var statearr_45846_45862 = state_45833__$1;
(statearr_45846_45862[(2)] = null);

(statearr_45846_45862[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45834 === (5))){
var state_45833__$1 = state_45833;
var statearr_45847_45863 = state_45833__$1;
(statearr_45847_45863[(2)] = null);

(statearr_45847_45863[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45834 === (10))){
var inst_45825 = (state_45833[(2)]);
var state_45833__$1 = state_45833;
var statearr_45848_45864 = state_45833__$1;
(statearr_45848_45864[(2)] = inst_45825);

(statearr_45848_45864[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45834 === (8))){
var inst_45815 = (state_45833[(7)]);
var state_45833__$1 = state_45833;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45833__$1,(11),out,inst_45815);
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
});})(c__44396__auto___45854,out))
;
return ((function (switch__44308__auto__,c__44396__auto___45854,out){
return (function() {
var cljs$core$async$state_machine__44309__auto__ = null;
var cljs$core$async$state_machine__44309__auto____0 = (function (){
var statearr_45849 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45849[(0)] = cljs$core$async$state_machine__44309__auto__);

(statearr_45849[(1)] = (1));

return statearr_45849;
});
var cljs$core$async$state_machine__44309__auto____1 = (function (state_45833){
while(true){
var ret_value__44310__auto__ = (function (){try{while(true){
var result__44311__auto__ = switch__44308__auto__.call(null,state_45833);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44311__auto__;
}
break;
}
}catch (e45850){if((e45850 instanceof Object)){
var ex__44312__auto__ = e45850;
var statearr_45851_45865 = state_45833;
(statearr_45851_45865[(5)] = ex__44312__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45833);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45850;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45866 = state_45833;
state_45833 = G__45866;
continue;
} else {
return ret_value__44310__auto__;
}
break;
}
});
cljs$core$async$state_machine__44309__auto__ = function(state_45833){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44309__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44309__auto____1.call(this,state_45833);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__44309__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44309__auto____0;
cljs$core$async$state_machine__44309__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44309__auto____1;
return cljs$core$async$state_machine__44309__auto__;
})()
;})(switch__44308__auto__,c__44396__auto___45854,out))
})();
var state__44398__auto__ = (function (){var statearr_45852 = f__44397__auto__.call(null);
(statearr_45852[(6)] = c__44396__auto___45854);

return statearr_45852;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44398__auto__);
});})(c__44396__auto___45854,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
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
cljs.core.async.t_cljs$core$async45868 = (function (f,ch,meta45869){
this.f = f;
this.ch = ch;
this.meta45869 = meta45869;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45868.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45870,meta45869__$1){
var self__ = this;
var _45870__$1 = this;
return (new cljs.core.async.t_cljs$core$async45868(self__.f,self__.ch,meta45869__$1));
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
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async45871 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45871 = (function (f,ch,meta45869,_,fn1,meta45872){
this.f = f;
this.ch = ch;
this.meta45869 = meta45869;
this._ = _;
this.fn1 = fn1;
this.meta45872 = meta45872;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45871.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_45873,meta45872__$1){
var self__ = this;
var _45873__$1 = this;
return (new cljs.core.async.t_cljs$core$async45871(self__.f,self__.ch,self__.meta45869,self__._,self__.fn1,meta45872__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async45871.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_45873){
var self__ = this;
var _45873__$1 = this;
return self__.meta45872;
});})(___$1))
;

cljs.core.async.t_cljs$core$async45871.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45871.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async45871.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async45871.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__45867_SHARP_){
return f1.call(null,(((p1__45867_SHARP_ == null))?null:self__.f.call(null,p1__45867_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async45871.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45869","meta45869",-1900366548,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async45868","cljs.core.async/t_cljs$core$async45868",-370393471,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta45872","meta45872",1802591861,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async45871.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45871.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45871";

cljs.core.async.t_cljs$core$async45871.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__37380__auto__,writer__37381__auto__,opt__37382__auto__){
return cljs.core._write.call(null,writer__37381__auto__,"cljs.core.async/t_cljs$core$async45871");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async45871 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async45871(f__$1,ch__$1,meta45869__$1,___$2,fn1__$1,meta45872){
return (new cljs.core.async.t_cljs$core$async45871(f__$1,ch__$1,meta45869__$1,___$2,fn1__$1,meta45872));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async45871(self__.f,self__.ch,self__.meta45869,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__36757__auto__ = ret;
if(cljs.core.truth_(and__36757__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__36757__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async45868.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45868.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async45868.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45869","meta45869",-1900366548,null)], null);
});

cljs.core.async.t_cljs$core$async45868.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45868.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45868";

cljs.core.async.t_cljs$core$async45868.cljs$lang$ctorPrWriter = (function (this__37380__auto__,writer__37381__auto__,opt__37382__auto__){
return cljs.core._write.call(null,writer__37381__auto__,"cljs.core.async/t_cljs$core$async45868");
});

cljs.core.async.__GT_t_cljs$core$async45868 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async45868(f__$1,ch__$1,meta45869){
return (new cljs.core.async.t_cljs$core$async45868(f__$1,ch__$1,meta45869));
});

}

return (new cljs.core.async.t_cljs$core$async45868(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async45874 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45874 = (function (f,ch,meta45875){
this.f = f;
this.ch = ch;
this.meta45875 = meta45875;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45874.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45876,meta45875__$1){
var self__ = this;
var _45876__$1 = this;
return (new cljs.core.async.t_cljs$core$async45874(self__.f,self__.ch,meta45875__$1));
});

cljs.core.async.t_cljs$core$async45874.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45876){
var self__ = this;
var _45876__$1 = this;
return self__.meta45875;
});

cljs.core.async.t_cljs$core$async45874.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45874.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async45874.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45874.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async45874.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45874.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async45874.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45875","meta45875",-227864658,null)], null);
});

cljs.core.async.t_cljs$core$async45874.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45874.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45874";

cljs.core.async.t_cljs$core$async45874.cljs$lang$ctorPrWriter = (function (this__37380__auto__,writer__37381__auto__,opt__37382__auto__){
return cljs.core._write.call(null,writer__37381__auto__,"cljs.core.async/t_cljs$core$async45874");
});

cljs.core.async.__GT_t_cljs$core$async45874 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async45874(f__$1,ch__$1,meta45875){
return (new cljs.core.async.t_cljs$core$async45874(f__$1,ch__$1,meta45875));
});

}

return (new cljs.core.async.t_cljs$core$async45874(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async45877 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45877 = (function (p,ch,meta45878){
this.p = p;
this.ch = ch;
this.meta45878 = meta45878;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45877.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45879,meta45878__$1){
var self__ = this;
var _45879__$1 = this;
return (new cljs.core.async.t_cljs$core$async45877(self__.p,self__.ch,meta45878__$1));
});

cljs.core.async.t_cljs$core$async45877.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45879){
var self__ = this;
var _45879__$1 = this;
return self__.meta45878;
});

cljs.core.async.t_cljs$core$async45877.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45877.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async45877.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async45877.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45877.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async45877.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45877.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async45877.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45878","meta45878",1409537659,null)], null);
});

cljs.core.async.t_cljs$core$async45877.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45877.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45877";

cljs.core.async.t_cljs$core$async45877.cljs$lang$ctorPrWriter = (function (this__37380__auto__,writer__37381__auto__,opt__37382__auto__){
return cljs.core._write.call(null,writer__37381__auto__,"cljs.core.async/t_cljs$core$async45877");
});

cljs.core.async.__GT_t_cljs$core$async45877 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async45877(p__$1,ch__$1,meta45878){
return (new cljs.core.async.t_cljs$core$async45877(p__$1,ch__$1,meta45878));
});

}

return (new cljs.core.async.t_cljs$core$async45877(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__45881 = arguments.length;
switch (G__45881) {
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
var c__44396__auto___45921 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44396__auto___45921,out){
return (function (){
var f__44397__auto__ = (function (){var switch__44308__auto__ = ((function (c__44396__auto___45921,out){
return (function (state_45902){
var state_val_45903 = (state_45902[(1)]);
if((state_val_45903 === (7))){
var inst_45898 = (state_45902[(2)]);
var state_45902__$1 = state_45902;
var statearr_45904_45922 = state_45902__$1;
(statearr_45904_45922[(2)] = inst_45898);

(statearr_45904_45922[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45903 === (1))){
var state_45902__$1 = state_45902;
var statearr_45905_45923 = state_45902__$1;
(statearr_45905_45923[(2)] = null);

(statearr_45905_45923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45903 === (4))){
var inst_45884 = (state_45902[(7)]);
var inst_45884__$1 = (state_45902[(2)]);
var inst_45885 = (inst_45884__$1 == null);
var state_45902__$1 = (function (){var statearr_45906 = state_45902;
(statearr_45906[(7)] = inst_45884__$1);

return statearr_45906;
})();
if(cljs.core.truth_(inst_45885)){
var statearr_45907_45924 = state_45902__$1;
(statearr_45907_45924[(1)] = (5));

} else {
var statearr_45908_45925 = state_45902__$1;
(statearr_45908_45925[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45903 === (6))){
var inst_45884 = (state_45902[(7)]);
var inst_45889 = p.call(null,inst_45884);
var state_45902__$1 = state_45902;
if(cljs.core.truth_(inst_45889)){
var statearr_45909_45926 = state_45902__$1;
(statearr_45909_45926[(1)] = (8));

} else {
var statearr_45910_45927 = state_45902__$1;
(statearr_45910_45927[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45903 === (3))){
var inst_45900 = (state_45902[(2)]);
var state_45902__$1 = state_45902;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45902__$1,inst_45900);
} else {
if((state_val_45903 === (2))){
var state_45902__$1 = state_45902;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45902__$1,(4),ch);
} else {
if((state_val_45903 === (11))){
var inst_45892 = (state_45902[(2)]);
var state_45902__$1 = state_45902;
var statearr_45911_45928 = state_45902__$1;
(statearr_45911_45928[(2)] = inst_45892);

(statearr_45911_45928[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45903 === (9))){
var state_45902__$1 = state_45902;
var statearr_45912_45929 = state_45902__$1;
(statearr_45912_45929[(2)] = null);

(statearr_45912_45929[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45903 === (5))){
var inst_45887 = cljs.core.async.close_BANG_.call(null,out);
var state_45902__$1 = state_45902;
var statearr_45913_45930 = state_45902__$1;
(statearr_45913_45930[(2)] = inst_45887);

(statearr_45913_45930[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45903 === (10))){
var inst_45895 = (state_45902[(2)]);
var state_45902__$1 = (function (){var statearr_45914 = state_45902;
(statearr_45914[(8)] = inst_45895);

return statearr_45914;
})();
var statearr_45915_45931 = state_45902__$1;
(statearr_45915_45931[(2)] = null);

(statearr_45915_45931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45903 === (8))){
var inst_45884 = (state_45902[(7)]);
var state_45902__$1 = state_45902;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45902__$1,(11),out,inst_45884);
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
});})(c__44396__auto___45921,out))
;
return ((function (switch__44308__auto__,c__44396__auto___45921,out){
return (function() {
var cljs$core$async$state_machine__44309__auto__ = null;
var cljs$core$async$state_machine__44309__auto____0 = (function (){
var statearr_45916 = [null,null,null,null,null,null,null,null,null];
(statearr_45916[(0)] = cljs$core$async$state_machine__44309__auto__);

(statearr_45916[(1)] = (1));

return statearr_45916;
});
var cljs$core$async$state_machine__44309__auto____1 = (function (state_45902){
while(true){
var ret_value__44310__auto__ = (function (){try{while(true){
var result__44311__auto__ = switch__44308__auto__.call(null,state_45902);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44311__auto__;
}
break;
}
}catch (e45917){if((e45917 instanceof Object)){
var ex__44312__auto__ = e45917;
var statearr_45918_45932 = state_45902;
(statearr_45918_45932[(5)] = ex__44312__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45902);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45917;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45933 = state_45902;
state_45902 = G__45933;
continue;
} else {
return ret_value__44310__auto__;
}
break;
}
});
cljs$core$async$state_machine__44309__auto__ = function(state_45902){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44309__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44309__auto____1.call(this,state_45902);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__44309__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44309__auto____0;
cljs$core$async$state_machine__44309__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44309__auto____1;
return cljs$core$async$state_machine__44309__auto__;
})()
;})(switch__44308__auto__,c__44396__auto___45921,out))
})();
var state__44398__auto__ = (function (){var statearr_45919 = f__44397__auto__.call(null);
(statearr_45919[(6)] = c__44396__auto___45921);

return statearr_45919;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44398__auto__);
});})(c__44396__auto___45921,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__45935 = arguments.length;
switch (G__45935) {
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
var c__44396__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44396__auto__){
return (function (){
var f__44397__auto__ = (function (){var switch__44308__auto__ = ((function (c__44396__auto__){
return (function (state_45998){
var state_val_45999 = (state_45998[(1)]);
if((state_val_45999 === (7))){
var inst_45994 = (state_45998[(2)]);
var state_45998__$1 = state_45998;
var statearr_46000_46038 = state_45998__$1;
(statearr_46000_46038[(2)] = inst_45994);

(statearr_46000_46038[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45999 === (20))){
var inst_45964 = (state_45998[(7)]);
var inst_45975 = (state_45998[(2)]);
var inst_45976 = cljs.core.next.call(null,inst_45964);
var inst_45950 = inst_45976;
var inst_45951 = null;
var inst_45952 = (0);
var inst_45953 = (0);
var state_45998__$1 = (function (){var statearr_46001 = state_45998;
(statearr_46001[(8)] = inst_45951);

(statearr_46001[(9)] = inst_45950);

(statearr_46001[(10)] = inst_45953);

(statearr_46001[(11)] = inst_45952);

(statearr_46001[(12)] = inst_45975);

return statearr_46001;
})();
var statearr_46002_46039 = state_45998__$1;
(statearr_46002_46039[(2)] = null);

(statearr_46002_46039[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45999 === (1))){
var state_45998__$1 = state_45998;
var statearr_46003_46040 = state_45998__$1;
(statearr_46003_46040[(2)] = null);

(statearr_46003_46040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45999 === (4))){
var inst_45939 = (state_45998[(13)]);
var inst_45939__$1 = (state_45998[(2)]);
var inst_45940 = (inst_45939__$1 == null);
var state_45998__$1 = (function (){var statearr_46004 = state_45998;
(statearr_46004[(13)] = inst_45939__$1);

return statearr_46004;
})();
if(cljs.core.truth_(inst_45940)){
var statearr_46005_46041 = state_45998__$1;
(statearr_46005_46041[(1)] = (5));

} else {
var statearr_46006_46042 = state_45998__$1;
(statearr_46006_46042[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45999 === (15))){
var state_45998__$1 = state_45998;
var statearr_46010_46043 = state_45998__$1;
(statearr_46010_46043[(2)] = null);

(statearr_46010_46043[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45999 === (21))){
var state_45998__$1 = state_45998;
var statearr_46011_46044 = state_45998__$1;
(statearr_46011_46044[(2)] = null);

(statearr_46011_46044[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45999 === (13))){
var inst_45951 = (state_45998[(8)]);
var inst_45950 = (state_45998[(9)]);
var inst_45953 = (state_45998[(10)]);
var inst_45952 = (state_45998[(11)]);
var inst_45960 = (state_45998[(2)]);
var inst_45961 = (inst_45953 + (1));
var tmp46007 = inst_45951;
var tmp46008 = inst_45950;
var tmp46009 = inst_45952;
var inst_45950__$1 = tmp46008;
var inst_45951__$1 = tmp46007;
var inst_45952__$1 = tmp46009;
var inst_45953__$1 = inst_45961;
var state_45998__$1 = (function (){var statearr_46012 = state_45998;
(statearr_46012[(8)] = inst_45951__$1);

(statearr_46012[(14)] = inst_45960);

(statearr_46012[(9)] = inst_45950__$1);

(statearr_46012[(10)] = inst_45953__$1);

(statearr_46012[(11)] = inst_45952__$1);

return statearr_46012;
})();
var statearr_46013_46045 = state_45998__$1;
(statearr_46013_46045[(2)] = null);

(statearr_46013_46045[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45999 === (22))){
var state_45998__$1 = state_45998;
var statearr_46014_46046 = state_45998__$1;
(statearr_46014_46046[(2)] = null);

(statearr_46014_46046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45999 === (6))){
var inst_45939 = (state_45998[(13)]);
var inst_45948 = f.call(null,inst_45939);
var inst_45949 = cljs.core.seq.call(null,inst_45948);
var inst_45950 = inst_45949;
var inst_45951 = null;
var inst_45952 = (0);
var inst_45953 = (0);
var state_45998__$1 = (function (){var statearr_46015 = state_45998;
(statearr_46015[(8)] = inst_45951);

(statearr_46015[(9)] = inst_45950);

(statearr_46015[(10)] = inst_45953);

(statearr_46015[(11)] = inst_45952);

return statearr_46015;
})();
var statearr_46016_46047 = state_45998__$1;
(statearr_46016_46047[(2)] = null);

(statearr_46016_46047[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45999 === (17))){
var inst_45964 = (state_45998[(7)]);
var inst_45968 = cljs.core.chunk_first.call(null,inst_45964);
var inst_45969 = cljs.core.chunk_rest.call(null,inst_45964);
var inst_45970 = cljs.core.count.call(null,inst_45968);
var inst_45950 = inst_45969;
var inst_45951 = inst_45968;
var inst_45952 = inst_45970;
var inst_45953 = (0);
var state_45998__$1 = (function (){var statearr_46017 = state_45998;
(statearr_46017[(8)] = inst_45951);

(statearr_46017[(9)] = inst_45950);

(statearr_46017[(10)] = inst_45953);

(statearr_46017[(11)] = inst_45952);

return statearr_46017;
})();
var statearr_46018_46048 = state_45998__$1;
(statearr_46018_46048[(2)] = null);

(statearr_46018_46048[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45999 === (3))){
var inst_45996 = (state_45998[(2)]);
var state_45998__$1 = state_45998;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45998__$1,inst_45996);
} else {
if((state_val_45999 === (12))){
var inst_45984 = (state_45998[(2)]);
var state_45998__$1 = state_45998;
var statearr_46019_46049 = state_45998__$1;
(statearr_46019_46049[(2)] = inst_45984);

(statearr_46019_46049[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45999 === (2))){
var state_45998__$1 = state_45998;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45998__$1,(4),in$);
} else {
if((state_val_45999 === (23))){
var inst_45992 = (state_45998[(2)]);
var state_45998__$1 = state_45998;
var statearr_46020_46050 = state_45998__$1;
(statearr_46020_46050[(2)] = inst_45992);

(statearr_46020_46050[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45999 === (19))){
var inst_45979 = (state_45998[(2)]);
var state_45998__$1 = state_45998;
var statearr_46021_46051 = state_45998__$1;
(statearr_46021_46051[(2)] = inst_45979);

(statearr_46021_46051[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45999 === (11))){
var inst_45964 = (state_45998[(7)]);
var inst_45950 = (state_45998[(9)]);
var inst_45964__$1 = cljs.core.seq.call(null,inst_45950);
var state_45998__$1 = (function (){var statearr_46022 = state_45998;
(statearr_46022[(7)] = inst_45964__$1);

return statearr_46022;
})();
if(inst_45964__$1){
var statearr_46023_46052 = state_45998__$1;
(statearr_46023_46052[(1)] = (14));

} else {
var statearr_46024_46053 = state_45998__$1;
(statearr_46024_46053[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45999 === (9))){
var inst_45986 = (state_45998[(2)]);
var inst_45987 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_45998__$1 = (function (){var statearr_46025 = state_45998;
(statearr_46025[(15)] = inst_45986);

return statearr_46025;
})();
if(cljs.core.truth_(inst_45987)){
var statearr_46026_46054 = state_45998__$1;
(statearr_46026_46054[(1)] = (21));

} else {
var statearr_46027_46055 = state_45998__$1;
(statearr_46027_46055[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45999 === (5))){
var inst_45942 = cljs.core.async.close_BANG_.call(null,out);
var state_45998__$1 = state_45998;
var statearr_46028_46056 = state_45998__$1;
(statearr_46028_46056[(2)] = inst_45942);

(statearr_46028_46056[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45999 === (14))){
var inst_45964 = (state_45998[(7)]);
var inst_45966 = cljs.core.chunked_seq_QMARK_.call(null,inst_45964);
var state_45998__$1 = state_45998;
if(inst_45966){
var statearr_46029_46057 = state_45998__$1;
(statearr_46029_46057[(1)] = (17));

} else {
var statearr_46030_46058 = state_45998__$1;
(statearr_46030_46058[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45999 === (16))){
var inst_45982 = (state_45998[(2)]);
var state_45998__$1 = state_45998;
var statearr_46031_46059 = state_45998__$1;
(statearr_46031_46059[(2)] = inst_45982);

(statearr_46031_46059[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45999 === (10))){
var inst_45951 = (state_45998[(8)]);
var inst_45953 = (state_45998[(10)]);
var inst_45958 = cljs.core._nth.call(null,inst_45951,inst_45953);
var state_45998__$1 = state_45998;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45998__$1,(13),out,inst_45958);
} else {
if((state_val_45999 === (18))){
var inst_45964 = (state_45998[(7)]);
var inst_45973 = cljs.core.first.call(null,inst_45964);
var state_45998__$1 = state_45998;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45998__$1,(20),out,inst_45973);
} else {
if((state_val_45999 === (8))){
var inst_45953 = (state_45998[(10)]);
var inst_45952 = (state_45998[(11)]);
var inst_45955 = (inst_45953 < inst_45952);
var inst_45956 = inst_45955;
var state_45998__$1 = state_45998;
if(cljs.core.truth_(inst_45956)){
var statearr_46032_46060 = state_45998__$1;
(statearr_46032_46060[(1)] = (10));

} else {
var statearr_46033_46061 = state_45998__$1;
(statearr_46033_46061[(1)] = (11));

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
});})(c__44396__auto__))
;
return ((function (switch__44308__auto__,c__44396__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__44309__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__44309__auto____0 = (function (){
var statearr_46034 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46034[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__44309__auto__);

(statearr_46034[(1)] = (1));

return statearr_46034;
});
var cljs$core$async$mapcat_STAR__$_state_machine__44309__auto____1 = (function (state_45998){
while(true){
var ret_value__44310__auto__ = (function (){try{while(true){
var result__44311__auto__ = switch__44308__auto__.call(null,state_45998);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44311__auto__;
}
break;
}
}catch (e46035){if((e46035 instanceof Object)){
var ex__44312__auto__ = e46035;
var statearr_46036_46062 = state_45998;
(statearr_46036_46062[(5)] = ex__44312__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45998);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46035;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46063 = state_45998;
state_45998 = G__46063;
continue;
} else {
return ret_value__44310__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__44309__auto__ = function(state_45998){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__44309__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__44309__auto____1.call(this,state_45998);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__44309__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__44309__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__44309__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__44309__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__44309__auto__;
})()
;})(switch__44308__auto__,c__44396__auto__))
})();
var state__44398__auto__ = (function (){var statearr_46037 = f__44397__auto__.call(null);
(statearr_46037[(6)] = c__44396__auto__);

return statearr_46037;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44398__auto__);
});})(c__44396__auto__))
);

return c__44396__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__46065 = arguments.length;
switch (G__46065) {
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
var G__46068 = arguments.length;
switch (G__46068) {
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
var G__46071 = arguments.length;
switch (G__46071) {
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
var c__44396__auto___46118 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44396__auto___46118,out){
return (function (){
var f__44397__auto__ = (function (){var switch__44308__auto__ = ((function (c__44396__auto___46118,out){
return (function (state_46095){
var state_val_46096 = (state_46095[(1)]);
if((state_val_46096 === (7))){
var inst_46090 = (state_46095[(2)]);
var state_46095__$1 = state_46095;
var statearr_46097_46119 = state_46095__$1;
(statearr_46097_46119[(2)] = inst_46090);

(statearr_46097_46119[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46096 === (1))){
var inst_46072 = null;
var state_46095__$1 = (function (){var statearr_46098 = state_46095;
(statearr_46098[(7)] = inst_46072);

return statearr_46098;
})();
var statearr_46099_46120 = state_46095__$1;
(statearr_46099_46120[(2)] = null);

(statearr_46099_46120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46096 === (4))){
var inst_46075 = (state_46095[(8)]);
var inst_46075__$1 = (state_46095[(2)]);
var inst_46076 = (inst_46075__$1 == null);
var inst_46077 = cljs.core.not.call(null,inst_46076);
var state_46095__$1 = (function (){var statearr_46100 = state_46095;
(statearr_46100[(8)] = inst_46075__$1);

return statearr_46100;
})();
if(inst_46077){
var statearr_46101_46121 = state_46095__$1;
(statearr_46101_46121[(1)] = (5));

} else {
var statearr_46102_46122 = state_46095__$1;
(statearr_46102_46122[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46096 === (6))){
var state_46095__$1 = state_46095;
var statearr_46103_46123 = state_46095__$1;
(statearr_46103_46123[(2)] = null);

(statearr_46103_46123[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46096 === (3))){
var inst_46092 = (state_46095[(2)]);
var inst_46093 = cljs.core.async.close_BANG_.call(null,out);
var state_46095__$1 = (function (){var statearr_46104 = state_46095;
(statearr_46104[(9)] = inst_46092);

return statearr_46104;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46095__$1,inst_46093);
} else {
if((state_val_46096 === (2))){
var state_46095__$1 = state_46095;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46095__$1,(4),ch);
} else {
if((state_val_46096 === (11))){
var inst_46075 = (state_46095[(8)]);
var inst_46084 = (state_46095[(2)]);
var inst_46072 = inst_46075;
var state_46095__$1 = (function (){var statearr_46105 = state_46095;
(statearr_46105[(7)] = inst_46072);

(statearr_46105[(10)] = inst_46084);

return statearr_46105;
})();
var statearr_46106_46124 = state_46095__$1;
(statearr_46106_46124[(2)] = null);

(statearr_46106_46124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46096 === (9))){
var inst_46075 = (state_46095[(8)]);
var state_46095__$1 = state_46095;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46095__$1,(11),out,inst_46075);
} else {
if((state_val_46096 === (5))){
var inst_46075 = (state_46095[(8)]);
var inst_46072 = (state_46095[(7)]);
var inst_46079 = cljs.core._EQ_.call(null,inst_46075,inst_46072);
var state_46095__$1 = state_46095;
if(inst_46079){
var statearr_46108_46125 = state_46095__$1;
(statearr_46108_46125[(1)] = (8));

} else {
var statearr_46109_46126 = state_46095__$1;
(statearr_46109_46126[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46096 === (10))){
var inst_46087 = (state_46095[(2)]);
var state_46095__$1 = state_46095;
var statearr_46110_46127 = state_46095__$1;
(statearr_46110_46127[(2)] = inst_46087);

(statearr_46110_46127[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46096 === (8))){
var inst_46072 = (state_46095[(7)]);
var tmp46107 = inst_46072;
var inst_46072__$1 = tmp46107;
var state_46095__$1 = (function (){var statearr_46111 = state_46095;
(statearr_46111[(7)] = inst_46072__$1);

return statearr_46111;
})();
var statearr_46112_46128 = state_46095__$1;
(statearr_46112_46128[(2)] = null);

(statearr_46112_46128[(1)] = (2));


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
});})(c__44396__auto___46118,out))
;
return ((function (switch__44308__auto__,c__44396__auto___46118,out){
return (function() {
var cljs$core$async$state_machine__44309__auto__ = null;
var cljs$core$async$state_machine__44309__auto____0 = (function (){
var statearr_46113 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46113[(0)] = cljs$core$async$state_machine__44309__auto__);

(statearr_46113[(1)] = (1));

return statearr_46113;
});
var cljs$core$async$state_machine__44309__auto____1 = (function (state_46095){
while(true){
var ret_value__44310__auto__ = (function (){try{while(true){
var result__44311__auto__ = switch__44308__auto__.call(null,state_46095);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44311__auto__;
}
break;
}
}catch (e46114){if((e46114 instanceof Object)){
var ex__44312__auto__ = e46114;
var statearr_46115_46129 = state_46095;
(statearr_46115_46129[(5)] = ex__44312__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46095);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46114;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46130 = state_46095;
state_46095 = G__46130;
continue;
} else {
return ret_value__44310__auto__;
}
break;
}
});
cljs$core$async$state_machine__44309__auto__ = function(state_46095){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44309__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44309__auto____1.call(this,state_46095);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__44309__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44309__auto____0;
cljs$core$async$state_machine__44309__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44309__auto____1;
return cljs$core$async$state_machine__44309__auto__;
})()
;})(switch__44308__auto__,c__44396__auto___46118,out))
})();
var state__44398__auto__ = (function (){var statearr_46116 = f__44397__auto__.call(null);
(statearr_46116[(6)] = c__44396__auto___46118);

return statearr_46116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44398__auto__);
});})(c__44396__auto___46118,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__46132 = arguments.length;
switch (G__46132) {
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
var c__44396__auto___46198 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44396__auto___46198,out){
return (function (){
var f__44397__auto__ = (function (){var switch__44308__auto__ = ((function (c__44396__auto___46198,out){
return (function (state_46170){
var state_val_46171 = (state_46170[(1)]);
if((state_val_46171 === (7))){
var inst_46166 = (state_46170[(2)]);
var state_46170__$1 = state_46170;
var statearr_46172_46199 = state_46170__$1;
(statearr_46172_46199[(2)] = inst_46166);

(statearr_46172_46199[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46171 === (1))){
var inst_46133 = (new Array(n));
var inst_46134 = inst_46133;
var inst_46135 = (0);
var state_46170__$1 = (function (){var statearr_46173 = state_46170;
(statearr_46173[(7)] = inst_46134);

(statearr_46173[(8)] = inst_46135);

return statearr_46173;
})();
var statearr_46174_46200 = state_46170__$1;
(statearr_46174_46200[(2)] = null);

(statearr_46174_46200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46171 === (4))){
var inst_46138 = (state_46170[(9)]);
var inst_46138__$1 = (state_46170[(2)]);
var inst_46139 = (inst_46138__$1 == null);
var inst_46140 = cljs.core.not.call(null,inst_46139);
var state_46170__$1 = (function (){var statearr_46175 = state_46170;
(statearr_46175[(9)] = inst_46138__$1);

return statearr_46175;
})();
if(inst_46140){
var statearr_46176_46201 = state_46170__$1;
(statearr_46176_46201[(1)] = (5));

} else {
var statearr_46177_46202 = state_46170__$1;
(statearr_46177_46202[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46171 === (15))){
var inst_46160 = (state_46170[(2)]);
var state_46170__$1 = state_46170;
var statearr_46178_46203 = state_46170__$1;
(statearr_46178_46203[(2)] = inst_46160);

(statearr_46178_46203[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46171 === (13))){
var state_46170__$1 = state_46170;
var statearr_46179_46204 = state_46170__$1;
(statearr_46179_46204[(2)] = null);

(statearr_46179_46204[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46171 === (6))){
var inst_46135 = (state_46170[(8)]);
var inst_46156 = (inst_46135 > (0));
var state_46170__$1 = state_46170;
if(cljs.core.truth_(inst_46156)){
var statearr_46180_46205 = state_46170__$1;
(statearr_46180_46205[(1)] = (12));

} else {
var statearr_46181_46206 = state_46170__$1;
(statearr_46181_46206[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46171 === (3))){
var inst_46168 = (state_46170[(2)]);
var state_46170__$1 = state_46170;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46170__$1,inst_46168);
} else {
if((state_val_46171 === (12))){
var inst_46134 = (state_46170[(7)]);
var inst_46158 = cljs.core.vec.call(null,inst_46134);
var state_46170__$1 = state_46170;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46170__$1,(15),out,inst_46158);
} else {
if((state_val_46171 === (2))){
var state_46170__$1 = state_46170;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46170__$1,(4),ch);
} else {
if((state_val_46171 === (11))){
var inst_46150 = (state_46170[(2)]);
var inst_46151 = (new Array(n));
var inst_46134 = inst_46151;
var inst_46135 = (0);
var state_46170__$1 = (function (){var statearr_46182 = state_46170;
(statearr_46182[(10)] = inst_46150);

(statearr_46182[(7)] = inst_46134);

(statearr_46182[(8)] = inst_46135);

return statearr_46182;
})();
var statearr_46183_46207 = state_46170__$1;
(statearr_46183_46207[(2)] = null);

(statearr_46183_46207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46171 === (9))){
var inst_46134 = (state_46170[(7)]);
var inst_46148 = cljs.core.vec.call(null,inst_46134);
var state_46170__$1 = state_46170;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46170__$1,(11),out,inst_46148);
} else {
if((state_val_46171 === (5))){
var inst_46143 = (state_46170[(11)]);
var inst_46134 = (state_46170[(7)]);
var inst_46138 = (state_46170[(9)]);
var inst_46135 = (state_46170[(8)]);
var inst_46142 = (inst_46134[inst_46135] = inst_46138);
var inst_46143__$1 = (inst_46135 + (1));
var inst_46144 = (inst_46143__$1 < n);
var state_46170__$1 = (function (){var statearr_46184 = state_46170;
(statearr_46184[(11)] = inst_46143__$1);

(statearr_46184[(12)] = inst_46142);

return statearr_46184;
})();
if(cljs.core.truth_(inst_46144)){
var statearr_46185_46208 = state_46170__$1;
(statearr_46185_46208[(1)] = (8));

} else {
var statearr_46186_46209 = state_46170__$1;
(statearr_46186_46209[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46171 === (14))){
var inst_46163 = (state_46170[(2)]);
var inst_46164 = cljs.core.async.close_BANG_.call(null,out);
var state_46170__$1 = (function (){var statearr_46188 = state_46170;
(statearr_46188[(13)] = inst_46163);

return statearr_46188;
})();
var statearr_46189_46210 = state_46170__$1;
(statearr_46189_46210[(2)] = inst_46164);

(statearr_46189_46210[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46171 === (10))){
var inst_46154 = (state_46170[(2)]);
var state_46170__$1 = state_46170;
var statearr_46190_46211 = state_46170__$1;
(statearr_46190_46211[(2)] = inst_46154);

(statearr_46190_46211[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46171 === (8))){
var inst_46143 = (state_46170[(11)]);
var inst_46134 = (state_46170[(7)]);
var tmp46187 = inst_46134;
var inst_46134__$1 = tmp46187;
var inst_46135 = inst_46143;
var state_46170__$1 = (function (){var statearr_46191 = state_46170;
(statearr_46191[(7)] = inst_46134__$1);

(statearr_46191[(8)] = inst_46135);

return statearr_46191;
})();
var statearr_46192_46212 = state_46170__$1;
(statearr_46192_46212[(2)] = null);

(statearr_46192_46212[(1)] = (2));


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
});})(c__44396__auto___46198,out))
;
return ((function (switch__44308__auto__,c__44396__auto___46198,out){
return (function() {
var cljs$core$async$state_machine__44309__auto__ = null;
var cljs$core$async$state_machine__44309__auto____0 = (function (){
var statearr_46193 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46193[(0)] = cljs$core$async$state_machine__44309__auto__);

(statearr_46193[(1)] = (1));

return statearr_46193;
});
var cljs$core$async$state_machine__44309__auto____1 = (function (state_46170){
while(true){
var ret_value__44310__auto__ = (function (){try{while(true){
var result__44311__auto__ = switch__44308__auto__.call(null,state_46170);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44311__auto__;
}
break;
}
}catch (e46194){if((e46194 instanceof Object)){
var ex__44312__auto__ = e46194;
var statearr_46195_46213 = state_46170;
(statearr_46195_46213[(5)] = ex__44312__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46170);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46194;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46214 = state_46170;
state_46170 = G__46214;
continue;
} else {
return ret_value__44310__auto__;
}
break;
}
});
cljs$core$async$state_machine__44309__auto__ = function(state_46170){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44309__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44309__auto____1.call(this,state_46170);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__44309__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44309__auto____0;
cljs$core$async$state_machine__44309__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44309__auto____1;
return cljs$core$async$state_machine__44309__auto__;
})()
;})(switch__44308__auto__,c__44396__auto___46198,out))
})();
var state__44398__auto__ = (function (){var statearr_46196 = f__44397__auto__.call(null);
(statearr_46196[(6)] = c__44396__auto___46198);

return statearr_46196;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44398__auto__);
});})(c__44396__auto___46198,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__46216 = arguments.length;
switch (G__46216) {
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
var c__44396__auto___46286 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44396__auto___46286,out){
return (function (){
var f__44397__auto__ = (function (){var switch__44308__auto__ = ((function (c__44396__auto___46286,out){
return (function (state_46258){
var state_val_46259 = (state_46258[(1)]);
if((state_val_46259 === (7))){
var inst_46254 = (state_46258[(2)]);
var state_46258__$1 = state_46258;
var statearr_46260_46287 = state_46258__$1;
(statearr_46260_46287[(2)] = inst_46254);

(statearr_46260_46287[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46259 === (1))){
var inst_46217 = [];
var inst_46218 = inst_46217;
var inst_46219 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_46258__$1 = (function (){var statearr_46261 = state_46258;
(statearr_46261[(7)] = inst_46218);

(statearr_46261[(8)] = inst_46219);

return statearr_46261;
})();
var statearr_46262_46288 = state_46258__$1;
(statearr_46262_46288[(2)] = null);

(statearr_46262_46288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46259 === (4))){
var inst_46222 = (state_46258[(9)]);
var inst_46222__$1 = (state_46258[(2)]);
var inst_46223 = (inst_46222__$1 == null);
var inst_46224 = cljs.core.not.call(null,inst_46223);
var state_46258__$1 = (function (){var statearr_46263 = state_46258;
(statearr_46263[(9)] = inst_46222__$1);

return statearr_46263;
})();
if(inst_46224){
var statearr_46264_46289 = state_46258__$1;
(statearr_46264_46289[(1)] = (5));

} else {
var statearr_46265_46290 = state_46258__$1;
(statearr_46265_46290[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46259 === (15))){
var inst_46248 = (state_46258[(2)]);
var state_46258__$1 = state_46258;
var statearr_46266_46291 = state_46258__$1;
(statearr_46266_46291[(2)] = inst_46248);

(statearr_46266_46291[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46259 === (13))){
var state_46258__$1 = state_46258;
var statearr_46267_46292 = state_46258__$1;
(statearr_46267_46292[(2)] = null);

(statearr_46267_46292[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46259 === (6))){
var inst_46218 = (state_46258[(7)]);
var inst_46243 = inst_46218.length;
var inst_46244 = (inst_46243 > (0));
var state_46258__$1 = state_46258;
if(cljs.core.truth_(inst_46244)){
var statearr_46268_46293 = state_46258__$1;
(statearr_46268_46293[(1)] = (12));

} else {
var statearr_46269_46294 = state_46258__$1;
(statearr_46269_46294[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46259 === (3))){
var inst_46256 = (state_46258[(2)]);
var state_46258__$1 = state_46258;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46258__$1,inst_46256);
} else {
if((state_val_46259 === (12))){
var inst_46218 = (state_46258[(7)]);
var inst_46246 = cljs.core.vec.call(null,inst_46218);
var state_46258__$1 = state_46258;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46258__$1,(15),out,inst_46246);
} else {
if((state_val_46259 === (2))){
var state_46258__$1 = state_46258;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46258__$1,(4),ch);
} else {
if((state_val_46259 === (11))){
var inst_46222 = (state_46258[(9)]);
var inst_46226 = (state_46258[(10)]);
var inst_46236 = (state_46258[(2)]);
var inst_46237 = [];
var inst_46238 = inst_46237.push(inst_46222);
var inst_46218 = inst_46237;
var inst_46219 = inst_46226;
var state_46258__$1 = (function (){var statearr_46270 = state_46258;
(statearr_46270[(11)] = inst_46236);

(statearr_46270[(7)] = inst_46218);

(statearr_46270[(12)] = inst_46238);

(statearr_46270[(8)] = inst_46219);

return statearr_46270;
})();
var statearr_46271_46295 = state_46258__$1;
(statearr_46271_46295[(2)] = null);

(statearr_46271_46295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46259 === (9))){
var inst_46218 = (state_46258[(7)]);
var inst_46234 = cljs.core.vec.call(null,inst_46218);
var state_46258__$1 = state_46258;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46258__$1,(11),out,inst_46234);
} else {
if((state_val_46259 === (5))){
var inst_46222 = (state_46258[(9)]);
var inst_46226 = (state_46258[(10)]);
var inst_46219 = (state_46258[(8)]);
var inst_46226__$1 = f.call(null,inst_46222);
var inst_46227 = cljs.core._EQ_.call(null,inst_46226__$1,inst_46219);
var inst_46228 = cljs.core.keyword_identical_QMARK_.call(null,inst_46219,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_46229 = (inst_46227) || (inst_46228);
var state_46258__$1 = (function (){var statearr_46272 = state_46258;
(statearr_46272[(10)] = inst_46226__$1);

return statearr_46272;
})();
if(cljs.core.truth_(inst_46229)){
var statearr_46273_46296 = state_46258__$1;
(statearr_46273_46296[(1)] = (8));

} else {
var statearr_46274_46297 = state_46258__$1;
(statearr_46274_46297[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46259 === (14))){
var inst_46251 = (state_46258[(2)]);
var inst_46252 = cljs.core.async.close_BANG_.call(null,out);
var state_46258__$1 = (function (){var statearr_46276 = state_46258;
(statearr_46276[(13)] = inst_46251);

return statearr_46276;
})();
var statearr_46277_46298 = state_46258__$1;
(statearr_46277_46298[(2)] = inst_46252);

(statearr_46277_46298[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46259 === (10))){
var inst_46241 = (state_46258[(2)]);
var state_46258__$1 = state_46258;
var statearr_46278_46299 = state_46258__$1;
(statearr_46278_46299[(2)] = inst_46241);

(statearr_46278_46299[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46259 === (8))){
var inst_46222 = (state_46258[(9)]);
var inst_46218 = (state_46258[(7)]);
var inst_46226 = (state_46258[(10)]);
var inst_46231 = inst_46218.push(inst_46222);
var tmp46275 = inst_46218;
var inst_46218__$1 = tmp46275;
var inst_46219 = inst_46226;
var state_46258__$1 = (function (){var statearr_46279 = state_46258;
(statearr_46279[(14)] = inst_46231);

(statearr_46279[(7)] = inst_46218__$1);

(statearr_46279[(8)] = inst_46219);

return statearr_46279;
})();
var statearr_46280_46300 = state_46258__$1;
(statearr_46280_46300[(2)] = null);

(statearr_46280_46300[(1)] = (2));


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
});})(c__44396__auto___46286,out))
;
return ((function (switch__44308__auto__,c__44396__auto___46286,out){
return (function() {
var cljs$core$async$state_machine__44309__auto__ = null;
var cljs$core$async$state_machine__44309__auto____0 = (function (){
var statearr_46281 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46281[(0)] = cljs$core$async$state_machine__44309__auto__);

(statearr_46281[(1)] = (1));

return statearr_46281;
});
var cljs$core$async$state_machine__44309__auto____1 = (function (state_46258){
while(true){
var ret_value__44310__auto__ = (function (){try{while(true){
var result__44311__auto__ = switch__44308__auto__.call(null,state_46258);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44311__auto__;
}
break;
}
}catch (e46282){if((e46282 instanceof Object)){
var ex__44312__auto__ = e46282;
var statearr_46283_46301 = state_46258;
(statearr_46283_46301[(5)] = ex__44312__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46258);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46282;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46302 = state_46258;
state_46258 = G__46302;
continue;
} else {
return ret_value__44310__auto__;
}
break;
}
});
cljs$core$async$state_machine__44309__auto__ = function(state_46258){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44309__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44309__auto____1.call(this,state_46258);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__44309__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44309__auto____0;
cljs$core$async$state_machine__44309__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44309__auto____1;
return cljs$core$async$state_machine__44309__auto__;
})()
;})(switch__44308__auto__,c__44396__auto___46286,out))
})();
var state__44398__auto__ = (function (){var statearr_46284 = f__44397__auto__.call(null);
(statearr_46284[(6)] = c__44396__auto___46286);

return statearr_46284;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44398__auto__);
});})(c__44396__auto___46286,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1502846512449