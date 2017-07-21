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
var args29481 = [];
var len__27064__auto___29487 = arguments.length;
var i__27065__auto___29488 = (0);
while(true){
if((i__27065__auto___29488 < len__27064__auto___29487)){
args29481.push((arguments[i__27065__auto___29488]));

var G__29489 = (i__27065__auto___29488 + (1));
i__27065__auto___29488 = G__29489;
continue;
} else {
}
break;
}

var G__29483 = args29481.length;
switch (G__29483) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29481.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async29484 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29484 = (function (f,blockable,meta29485){
this.f = f;
this.blockable = blockable;
this.meta29485 = meta29485;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29484.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29486,meta29485__$1){
var self__ = this;
var _29486__$1 = this;
return (new cljs.core.async.t_cljs$core$async29484(self__.f,self__.blockable,meta29485__$1));
});

cljs.core.async.t_cljs$core$async29484.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29486){
var self__ = this;
var _29486__$1 = this;
return self__.meta29485;
});

cljs.core.async.t_cljs$core$async29484.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29484.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async29484.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async29484.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async29484.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29485","meta29485",-153505457,null)], null);
});

cljs.core.async.t_cljs$core$async29484.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29484.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29484";

cljs.core.async.t_cljs$core$async29484.cljs$lang$ctorPrWriter = (function (this__26595__auto__,writer__26596__auto__,opt__26597__auto__){
return cljs.core._write.call(null,writer__26596__auto__,"cljs.core.async/t_cljs$core$async29484");
});

cljs.core.async.__GT_t_cljs$core$async29484 = (function cljs$core$async$__GT_t_cljs$core$async29484(f__$1,blockable__$1,meta29485){
return (new cljs.core.async.t_cljs$core$async29484(f__$1,blockable__$1,meta29485));
});

}

return (new cljs.core.async.t_cljs$core$async29484(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args29493 = [];
var len__27064__auto___29496 = arguments.length;
var i__27065__auto___29497 = (0);
while(true){
if((i__27065__auto___29497 < len__27064__auto___29496)){
args29493.push((arguments[i__27065__auto___29497]));

var G__29498 = (i__27065__auto___29497 + (1));
i__27065__auto___29497 = G__29498;
continue;
} else {
}
break;
}

var G__29495 = args29493.length;
switch (G__29495) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29493.length)].join('')));

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
var args29500 = [];
var len__27064__auto___29503 = arguments.length;
var i__27065__auto___29504 = (0);
while(true){
if((i__27065__auto___29504 < len__27064__auto___29503)){
args29500.push((arguments[i__27065__auto___29504]));

var G__29505 = (i__27065__auto___29504 + (1));
i__27065__auto___29504 = G__29505;
continue;
} else {
}
break;
}

var G__29502 = args29500.length;
switch (G__29502) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29500.length)].join('')));

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
var args29507 = [];
var len__27064__auto___29510 = arguments.length;
var i__27065__auto___29511 = (0);
while(true){
if((i__27065__auto___29511 < len__27064__auto___29510)){
args29507.push((arguments[i__27065__auto___29511]));

var G__29512 = (i__27065__auto___29511 + (1));
i__27065__auto___29511 = G__29512;
continue;
} else {
}
break;
}

var G__29509 = args29507.length;
switch (G__29509) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29507.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_29514 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_29514);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_29514,ret){
return (function (){
return fn1.call(null,val_29514);
});})(val_29514,ret))
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
var args29515 = [];
var len__27064__auto___29518 = arguments.length;
var i__27065__auto___29519 = (0);
while(true){
if((i__27065__auto___29519 < len__27064__auto___29518)){
args29515.push((arguments[i__27065__auto___29519]));

var G__29520 = (i__27065__auto___29519 + (1));
i__27065__auto___29519 = G__29520;
continue;
} else {
}
break;
}

var G__29517 = args29515.length;
switch (G__29517) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29515.length)].join('')));

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
var n__26904__auto___29522 = n;
var x_29523 = (0);
while(true){
if((x_29523 < n__26904__auto___29522)){
(a[x_29523] = (0));

var G__29524 = (x_29523 + (1));
x_29523 = G__29524;
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

var G__29525 = (i + (1));
i = G__29525;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async29529 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29529 = (function (alt_flag,flag,meta29530){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta29530 = meta29530;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29529.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_29531,meta29530__$1){
var self__ = this;
var _29531__$1 = this;
return (new cljs.core.async.t_cljs$core$async29529(self__.alt_flag,self__.flag,meta29530__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async29529.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_29531){
var self__ = this;
var _29531__$1 = this;
return self__.meta29530;
});})(flag))
;

cljs.core.async.t_cljs$core$async29529.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29529.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async29529.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async29529.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async29529.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29530","meta29530",-122840985,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async29529.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29529.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29529";

cljs.core.async.t_cljs$core$async29529.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__26595__auto__,writer__26596__auto__,opt__26597__auto__){
return cljs.core._write.call(null,writer__26596__auto__,"cljs.core.async/t_cljs$core$async29529");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async29529 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29529(alt_flag__$1,flag__$1,meta29530){
return (new cljs.core.async.t_cljs$core$async29529(alt_flag__$1,flag__$1,meta29530));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async29529(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async29535 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29535 = (function (alt_handler,flag,cb,meta29536){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta29536 = meta29536;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29535.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29537,meta29536__$1){
var self__ = this;
var _29537__$1 = this;
return (new cljs.core.async.t_cljs$core$async29535(self__.alt_handler,self__.flag,self__.cb,meta29536__$1));
});

cljs.core.async.t_cljs$core$async29535.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29537){
var self__ = this;
var _29537__$1 = this;
return self__.meta29536;
});

cljs.core.async.t_cljs$core$async29535.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29535.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async29535.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async29535.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async29535.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29536","meta29536",1612062501,null)], null);
});

cljs.core.async.t_cljs$core$async29535.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29535.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29535";

cljs.core.async.t_cljs$core$async29535.cljs$lang$ctorPrWriter = (function (this__26595__auto__,writer__26596__auto__,opt__26597__auto__){
return cljs.core._write.call(null,writer__26596__auto__,"cljs.core.async/t_cljs$core$async29535");
});

cljs.core.async.__GT_t_cljs$core$async29535 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29535(alt_handler__$1,flag__$1,cb__$1,meta29536){
return (new cljs.core.async.t_cljs$core$async29535(alt_handler__$1,flag__$1,cb__$1,meta29536));
});

}

return (new cljs.core.async.t_cljs$core$async29535(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__29538_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29538_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29539_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29539_SHARP_,port], null));
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
var G__29540 = (i + (1));
i = G__29540;
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
var len__27064__auto___29546 = arguments.length;
var i__27065__auto___29547 = (0);
while(true){
if((i__27065__auto___29547 < len__27064__auto___29546)){
args__27071__auto__.push((arguments[i__27065__auto___29547]));

var G__29548 = (i__27065__auto___29547 + (1));
i__27065__auto___29547 = G__29548;
continue;
} else {
}
break;
}

var argseq__27072__auto__ = ((((1) < args__27071__auto__.length))?(new cljs.core.IndexedSeq(args__27071__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27072__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29543){
var map__29544 = p__29543;
var map__29544__$1 = ((((!((map__29544 == null)))?((((map__29544.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29544.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29544):map__29544);
var opts = map__29544__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29541){
var G__29542 = cljs.core.first.call(null,seq29541);
var seq29541__$1 = cljs.core.next.call(null,seq29541);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29542,seq29541__$1);
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
var args29549 = [];
var len__27064__auto___29599 = arguments.length;
var i__27065__auto___29600 = (0);
while(true){
if((i__27065__auto___29600 < len__27064__auto___29599)){
args29549.push((arguments[i__27065__auto___29600]));

var G__29601 = (i__27065__auto___29600 + (1));
i__27065__auto___29600 = G__29601;
continue;
} else {
}
break;
}

var G__29551 = args29549.length;
switch (G__29551) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29549.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29436__auto___29603 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29436__auto___29603){
return (function (){
var f__29437__auto__ = (function (){var switch__29324__auto__ = ((function (c__29436__auto___29603){
return (function (state_29575){
var state_val_29576 = (state_29575[(1)]);
if((state_val_29576 === (7))){
var inst_29571 = (state_29575[(2)]);
var state_29575__$1 = state_29575;
var statearr_29577_29604 = state_29575__$1;
(statearr_29577_29604[(2)] = inst_29571);

(statearr_29577_29604[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29576 === (1))){
var state_29575__$1 = state_29575;
var statearr_29578_29605 = state_29575__$1;
(statearr_29578_29605[(2)] = null);

(statearr_29578_29605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29576 === (4))){
var inst_29554 = (state_29575[(7)]);
var inst_29554__$1 = (state_29575[(2)]);
var inst_29555 = (inst_29554__$1 == null);
var state_29575__$1 = (function (){var statearr_29579 = state_29575;
(statearr_29579[(7)] = inst_29554__$1);

return statearr_29579;
})();
if(cljs.core.truth_(inst_29555)){
var statearr_29580_29606 = state_29575__$1;
(statearr_29580_29606[(1)] = (5));

} else {
var statearr_29581_29607 = state_29575__$1;
(statearr_29581_29607[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29576 === (13))){
var state_29575__$1 = state_29575;
var statearr_29582_29608 = state_29575__$1;
(statearr_29582_29608[(2)] = null);

(statearr_29582_29608[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29576 === (6))){
var inst_29554 = (state_29575[(7)]);
var state_29575__$1 = state_29575;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29575__$1,(11),to,inst_29554);
} else {
if((state_val_29576 === (3))){
var inst_29573 = (state_29575[(2)]);
var state_29575__$1 = state_29575;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29575__$1,inst_29573);
} else {
if((state_val_29576 === (12))){
var state_29575__$1 = state_29575;
var statearr_29583_29609 = state_29575__$1;
(statearr_29583_29609[(2)] = null);

(statearr_29583_29609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29576 === (2))){
var state_29575__$1 = state_29575;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29575__$1,(4),from);
} else {
if((state_val_29576 === (11))){
var inst_29564 = (state_29575[(2)]);
var state_29575__$1 = state_29575;
if(cljs.core.truth_(inst_29564)){
var statearr_29584_29610 = state_29575__$1;
(statearr_29584_29610[(1)] = (12));

} else {
var statearr_29585_29611 = state_29575__$1;
(statearr_29585_29611[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29576 === (9))){
var state_29575__$1 = state_29575;
var statearr_29586_29612 = state_29575__$1;
(statearr_29586_29612[(2)] = null);

(statearr_29586_29612[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29576 === (5))){
var state_29575__$1 = state_29575;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29587_29613 = state_29575__$1;
(statearr_29587_29613[(1)] = (8));

} else {
var statearr_29588_29614 = state_29575__$1;
(statearr_29588_29614[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29576 === (14))){
var inst_29569 = (state_29575[(2)]);
var state_29575__$1 = state_29575;
var statearr_29589_29615 = state_29575__$1;
(statearr_29589_29615[(2)] = inst_29569);

(statearr_29589_29615[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29576 === (10))){
var inst_29561 = (state_29575[(2)]);
var state_29575__$1 = state_29575;
var statearr_29590_29616 = state_29575__$1;
(statearr_29590_29616[(2)] = inst_29561);

(statearr_29590_29616[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29576 === (8))){
var inst_29558 = cljs.core.async.close_BANG_.call(null,to);
var state_29575__$1 = state_29575;
var statearr_29591_29617 = state_29575__$1;
(statearr_29591_29617[(2)] = inst_29558);

(statearr_29591_29617[(1)] = (10));


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
});})(c__29436__auto___29603))
;
return ((function (switch__29324__auto__,c__29436__auto___29603){
return (function() {
var cljs$core$async$state_machine__29325__auto__ = null;
var cljs$core$async$state_machine__29325__auto____0 = (function (){
var statearr_29595 = [null,null,null,null,null,null,null,null];
(statearr_29595[(0)] = cljs$core$async$state_machine__29325__auto__);

(statearr_29595[(1)] = (1));

return statearr_29595;
});
var cljs$core$async$state_machine__29325__auto____1 = (function (state_29575){
while(true){
var ret_value__29326__auto__ = (function (){try{while(true){
var result__29327__auto__ = switch__29324__auto__.call(null,state_29575);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29327__auto__;
}
break;
}
}catch (e29596){if((e29596 instanceof Object)){
var ex__29328__auto__ = e29596;
var statearr_29597_29618 = state_29575;
(statearr_29597_29618[(5)] = ex__29328__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29575);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29596;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29619 = state_29575;
state_29575 = G__29619;
continue;
} else {
return ret_value__29326__auto__;
}
break;
}
});
cljs$core$async$state_machine__29325__auto__ = function(state_29575){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29325__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29325__auto____1.call(this,state_29575);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29325__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29325__auto____0;
cljs$core$async$state_machine__29325__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29325__auto____1;
return cljs$core$async$state_machine__29325__auto__;
})()
;})(switch__29324__auto__,c__29436__auto___29603))
})();
var state__29438__auto__ = (function (){var statearr_29598 = f__29437__auto__.call(null);
(statearr_29598[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29436__auto___29603);

return statearr_29598;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29438__auto__);
});})(c__29436__auto___29603))
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
return (function (p__29807){
var vec__29808 = p__29807;
var v = cljs.core.nth.call(null,vec__29808,(0),null);
var p = cljs.core.nth.call(null,vec__29808,(1),null);
var job = vec__29808;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__29436__auto___29994 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29436__auto___29994,res,vec__29808,v,p,job,jobs,results){
return (function (){
var f__29437__auto__ = (function (){var switch__29324__auto__ = ((function (c__29436__auto___29994,res,vec__29808,v,p,job,jobs,results){
return (function (state_29815){
var state_val_29816 = (state_29815[(1)]);
if((state_val_29816 === (1))){
var state_29815__$1 = state_29815;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29815__$1,(2),res,v);
} else {
if((state_val_29816 === (2))){
var inst_29812 = (state_29815[(2)]);
var inst_29813 = cljs.core.async.close_BANG_.call(null,res);
var state_29815__$1 = (function (){var statearr_29817 = state_29815;
(statearr_29817[(7)] = inst_29812);

return statearr_29817;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29815__$1,inst_29813);
} else {
return null;
}
}
});})(c__29436__auto___29994,res,vec__29808,v,p,job,jobs,results))
;
return ((function (switch__29324__auto__,c__29436__auto___29994,res,vec__29808,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29325__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29325__auto____0 = (function (){
var statearr_29821 = [null,null,null,null,null,null,null,null];
(statearr_29821[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29325__auto__);

(statearr_29821[(1)] = (1));

return statearr_29821;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29325__auto____1 = (function (state_29815){
while(true){
var ret_value__29326__auto__ = (function (){try{while(true){
var result__29327__auto__ = switch__29324__auto__.call(null,state_29815);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29327__auto__;
}
break;
}
}catch (e29822){if((e29822 instanceof Object)){
var ex__29328__auto__ = e29822;
var statearr_29823_29995 = state_29815;
(statearr_29823_29995[(5)] = ex__29328__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29815);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29822;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29996 = state_29815;
state_29815 = G__29996;
continue;
} else {
return ret_value__29326__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29325__auto__ = function(state_29815){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29325__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29325__auto____1.call(this,state_29815);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29325__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29325__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29325__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29325__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29325__auto__;
})()
;})(switch__29324__auto__,c__29436__auto___29994,res,vec__29808,v,p,job,jobs,results))
})();
var state__29438__auto__ = (function (){var statearr_29824 = f__29437__auto__.call(null);
(statearr_29824[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29436__auto___29994);

return statearr_29824;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29438__auto__);
});})(c__29436__auto___29994,res,vec__29808,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__29825){
var vec__29826 = p__29825;
var v = cljs.core.nth.call(null,vec__29826,(0),null);
var p = cljs.core.nth.call(null,vec__29826,(1),null);
var job = vec__29826;
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
var n__26904__auto___29997 = n;
var __29998 = (0);
while(true){
if((__29998 < n__26904__auto___29997)){
var G__29829_29999 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__29829_29999) {
case "compute":
var c__29436__auto___30001 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29998,c__29436__auto___30001,G__29829_29999,n__26904__auto___29997,jobs,results,process,async){
return (function (){
var f__29437__auto__ = (function (){var switch__29324__auto__ = ((function (__29998,c__29436__auto___30001,G__29829_29999,n__26904__auto___29997,jobs,results,process,async){
return (function (state_29842){
var state_val_29843 = (state_29842[(1)]);
if((state_val_29843 === (1))){
var state_29842__$1 = state_29842;
var statearr_29844_30002 = state_29842__$1;
(statearr_29844_30002[(2)] = null);

(statearr_29844_30002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29843 === (2))){
var state_29842__$1 = state_29842;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29842__$1,(4),jobs);
} else {
if((state_val_29843 === (3))){
var inst_29840 = (state_29842[(2)]);
var state_29842__$1 = state_29842;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29842__$1,inst_29840);
} else {
if((state_val_29843 === (4))){
var inst_29832 = (state_29842[(2)]);
var inst_29833 = process.call(null,inst_29832);
var state_29842__$1 = state_29842;
if(cljs.core.truth_(inst_29833)){
var statearr_29845_30003 = state_29842__$1;
(statearr_29845_30003[(1)] = (5));

} else {
var statearr_29846_30004 = state_29842__$1;
(statearr_29846_30004[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29843 === (5))){
var state_29842__$1 = state_29842;
var statearr_29847_30005 = state_29842__$1;
(statearr_29847_30005[(2)] = null);

(statearr_29847_30005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29843 === (6))){
var state_29842__$1 = state_29842;
var statearr_29848_30006 = state_29842__$1;
(statearr_29848_30006[(2)] = null);

(statearr_29848_30006[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29843 === (7))){
var inst_29838 = (state_29842[(2)]);
var state_29842__$1 = state_29842;
var statearr_29849_30007 = state_29842__$1;
(statearr_29849_30007[(2)] = inst_29838);

(statearr_29849_30007[(1)] = (3));


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
});})(__29998,c__29436__auto___30001,G__29829_29999,n__26904__auto___29997,jobs,results,process,async))
;
return ((function (__29998,switch__29324__auto__,c__29436__auto___30001,G__29829_29999,n__26904__auto___29997,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29325__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29325__auto____0 = (function (){
var statearr_29853 = [null,null,null,null,null,null,null];
(statearr_29853[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29325__auto__);

(statearr_29853[(1)] = (1));

return statearr_29853;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29325__auto____1 = (function (state_29842){
while(true){
var ret_value__29326__auto__ = (function (){try{while(true){
var result__29327__auto__ = switch__29324__auto__.call(null,state_29842);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29327__auto__;
}
break;
}
}catch (e29854){if((e29854 instanceof Object)){
var ex__29328__auto__ = e29854;
var statearr_29855_30008 = state_29842;
(statearr_29855_30008[(5)] = ex__29328__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29842);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29854;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30009 = state_29842;
state_29842 = G__30009;
continue;
} else {
return ret_value__29326__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29325__auto__ = function(state_29842){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29325__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29325__auto____1.call(this,state_29842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29325__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29325__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29325__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29325__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29325__auto__;
})()
;})(__29998,switch__29324__auto__,c__29436__auto___30001,G__29829_29999,n__26904__auto___29997,jobs,results,process,async))
})();
var state__29438__auto__ = (function (){var statearr_29856 = f__29437__auto__.call(null);
(statearr_29856[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29436__auto___30001);

return statearr_29856;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29438__auto__);
});})(__29998,c__29436__auto___30001,G__29829_29999,n__26904__auto___29997,jobs,results,process,async))
);


break;
case "async":
var c__29436__auto___30010 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29998,c__29436__auto___30010,G__29829_29999,n__26904__auto___29997,jobs,results,process,async){
return (function (){
var f__29437__auto__ = (function (){var switch__29324__auto__ = ((function (__29998,c__29436__auto___30010,G__29829_29999,n__26904__auto___29997,jobs,results,process,async){
return (function (state_29869){
var state_val_29870 = (state_29869[(1)]);
if((state_val_29870 === (1))){
var state_29869__$1 = state_29869;
var statearr_29871_30011 = state_29869__$1;
(statearr_29871_30011[(2)] = null);

(statearr_29871_30011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29870 === (2))){
var state_29869__$1 = state_29869;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29869__$1,(4),jobs);
} else {
if((state_val_29870 === (3))){
var inst_29867 = (state_29869[(2)]);
var state_29869__$1 = state_29869;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29869__$1,inst_29867);
} else {
if((state_val_29870 === (4))){
var inst_29859 = (state_29869[(2)]);
var inst_29860 = async.call(null,inst_29859);
var state_29869__$1 = state_29869;
if(cljs.core.truth_(inst_29860)){
var statearr_29872_30012 = state_29869__$1;
(statearr_29872_30012[(1)] = (5));

} else {
var statearr_29873_30013 = state_29869__$1;
(statearr_29873_30013[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29870 === (5))){
var state_29869__$1 = state_29869;
var statearr_29874_30014 = state_29869__$1;
(statearr_29874_30014[(2)] = null);

(statearr_29874_30014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29870 === (6))){
var state_29869__$1 = state_29869;
var statearr_29875_30015 = state_29869__$1;
(statearr_29875_30015[(2)] = null);

(statearr_29875_30015[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29870 === (7))){
var inst_29865 = (state_29869[(2)]);
var state_29869__$1 = state_29869;
var statearr_29876_30016 = state_29869__$1;
(statearr_29876_30016[(2)] = inst_29865);

(statearr_29876_30016[(1)] = (3));


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
});})(__29998,c__29436__auto___30010,G__29829_29999,n__26904__auto___29997,jobs,results,process,async))
;
return ((function (__29998,switch__29324__auto__,c__29436__auto___30010,G__29829_29999,n__26904__auto___29997,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29325__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29325__auto____0 = (function (){
var statearr_29880 = [null,null,null,null,null,null,null];
(statearr_29880[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29325__auto__);

(statearr_29880[(1)] = (1));

return statearr_29880;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29325__auto____1 = (function (state_29869){
while(true){
var ret_value__29326__auto__ = (function (){try{while(true){
var result__29327__auto__ = switch__29324__auto__.call(null,state_29869);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29327__auto__;
}
break;
}
}catch (e29881){if((e29881 instanceof Object)){
var ex__29328__auto__ = e29881;
var statearr_29882_30017 = state_29869;
(statearr_29882_30017[(5)] = ex__29328__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29869);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29881;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30018 = state_29869;
state_29869 = G__30018;
continue;
} else {
return ret_value__29326__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29325__auto__ = function(state_29869){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29325__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29325__auto____1.call(this,state_29869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29325__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29325__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29325__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29325__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29325__auto__;
})()
;})(__29998,switch__29324__auto__,c__29436__auto___30010,G__29829_29999,n__26904__auto___29997,jobs,results,process,async))
})();
var state__29438__auto__ = (function (){var statearr_29883 = f__29437__auto__.call(null);
(statearr_29883[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29436__auto___30010);

return statearr_29883;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29438__auto__);
});})(__29998,c__29436__auto___30010,G__29829_29999,n__26904__auto___29997,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__30019 = (__29998 + (1));
__29998 = G__30019;
continue;
} else {
}
break;
}

var c__29436__auto___30020 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29436__auto___30020,jobs,results,process,async){
return (function (){
var f__29437__auto__ = (function (){var switch__29324__auto__ = ((function (c__29436__auto___30020,jobs,results,process,async){
return (function (state_29905){
var state_val_29906 = (state_29905[(1)]);
if((state_val_29906 === (1))){
var state_29905__$1 = state_29905;
var statearr_29907_30021 = state_29905__$1;
(statearr_29907_30021[(2)] = null);

(statearr_29907_30021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29906 === (2))){
var state_29905__$1 = state_29905;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29905__$1,(4),from);
} else {
if((state_val_29906 === (3))){
var inst_29903 = (state_29905[(2)]);
var state_29905__$1 = state_29905;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29905__$1,inst_29903);
} else {
if((state_val_29906 === (4))){
var inst_29886 = (state_29905[(7)]);
var inst_29886__$1 = (state_29905[(2)]);
var inst_29887 = (inst_29886__$1 == null);
var state_29905__$1 = (function (){var statearr_29908 = state_29905;
(statearr_29908[(7)] = inst_29886__$1);

return statearr_29908;
})();
if(cljs.core.truth_(inst_29887)){
var statearr_29909_30022 = state_29905__$1;
(statearr_29909_30022[(1)] = (5));

} else {
var statearr_29910_30023 = state_29905__$1;
(statearr_29910_30023[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29906 === (5))){
var inst_29889 = cljs.core.async.close_BANG_.call(null,jobs);
var state_29905__$1 = state_29905;
var statearr_29911_30024 = state_29905__$1;
(statearr_29911_30024[(2)] = inst_29889);

(statearr_29911_30024[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29906 === (6))){
var inst_29891 = (state_29905[(8)]);
var inst_29886 = (state_29905[(7)]);
var inst_29891__$1 = cljs.core.async.chan.call(null,(1));
var inst_29892 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29893 = [inst_29886,inst_29891__$1];
var inst_29894 = (new cljs.core.PersistentVector(null,2,(5),inst_29892,inst_29893,null));
var state_29905__$1 = (function (){var statearr_29912 = state_29905;
(statearr_29912[(8)] = inst_29891__$1);

return statearr_29912;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29905__$1,(8),jobs,inst_29894);
} else {
if((state_val_29906 === (7))){
var inst_29901 = (state_29905[(2)]);
var state_29905__$1 = state_29905;
var statearr_29913_30025 = state_29905__$1;
(statearr_29913_30025[(2)] = inst_29901);

(statearr_29913_30025[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29906 === (8))){
var inst_29891 = (state_29905[(8)]);
var inst_29896 = (state_29905[(2)]);
var state_29905__$1 = (function (){var statearr_29914 = state_29905;
(statearr_29914[(9)] = inst_29896);

return statearr_29914;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29905__$1,(9),results,inst_29891);
} else {
if((state_val_29906 === (9))){
var inst_29898 = (state_29905[(2)]);
var state_29905__$1 = (function (){var statearr_29915 = state_29905;
(statearr_29915[(10)] = inst_29898);

return statearr_29915;
})();
var statearr_29916_30026 = state_29905__$1;
(statearr_29916_30026[(2)] = null);

(statearr_29916_30026[(1)] = (2));


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
});})(c__29436__auto___30020,jobs,results,process,async))
;
return ((function (switch__29324__auto__,c__29436__auto___30020,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29325__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29325__auto____0 = (function (){
var statearr_29920 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29920[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29325__auto__);

(statearr_29920[(1)] = (1));

return statearr_29920;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29325__auto____1 = (function (state_29905){
while(true){
var ret_value__29326__auto__ = (function (){try{while(true){
var result__29327__auto__ = switch__29324__auto__.call(null,state_29905);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29327__auto__;
}
break;
}
}catch (e29921){if((e29921 instanceof Object)){
var ex__29328__auto__ = e29921;
var statearr_29922_30027 = state_29905;
(statearr_29922_30027[(5)] = ex__29328__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29905);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29921;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30028 = state_29905;
state_29905 = G__30028;
continue;
} else {
return ret_value__29326__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29325__auto__ = function(state_29905){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29325__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29325__auto____1.call(this,state_29905);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29325__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29325__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29325__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29325__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29325__auto__;
})()
;})(switch__29324__auto__,c__29436__auto___30020,jobs,results,process,async))
})();
var state__29438__auto__ = (function (){var statearr_29923 = f__29437__auto__.call(null);
(statearr_29923[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29436__auto___30020);

return statearr_29923;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29438__auto__);
});})(c__29436__auto___30020,jobs,results,process,async))
);


var c__29436__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29436__auto__,jobs,results,process,async){
return (function (){
var f__29437__auto__ = (function (){var switch__29324__auto__ = ((function (c__29436__auto__,jobs,results,process,async){
return (function (state_29961){
var state_val_29962 = (state_29961[(1)]);
if((state_val_29962 === (7))){
var inst_29957 = (state_29961[(2)]);
var state_29961__$1 = state_29961;
var statearr_29963_30029 = state_29961__$1;
(statearr_29963_30029[(2)] = inst_29957);

(statearr_29963_30029[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29962 === (20))){
var state_29961__$1 = state_29961;
var statearr_29964_30030 = state_29961__$1;
(statearr_29964_30030[(2)] = null);

(statearr_29964_30030[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29962 === (1))){
var state_29961__$1 = state_29961;
var statearr_29965_30031 = state_29961__$1;
(statearr_29965_30031[(2)] = null);

(statearr_29965_30031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29962 === (4))){
var inst_29926 = (state_29961[(7)]);
var inst_29926__$1 = (state_29961[(2)]);
var inst_29927 = (inst_29926__$1 == null);
var state_29961__$1 = (function (){var statearr_29966 = state_29961;
(statearr_29966[(7)] = inst_29926__$1);

return statearr_29966;
})();
if(cljs.core.truth_(inst_29927)){
var statearr_29967_30032 = state_29961__$1;
(statearr_29967_30032[(1)] = (5));

} else {
var statearr_29968_30033 = state_29961__$1;
(statearr_29968_30033[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29962 === (15))){
var inst_29939 = (state_29961[(8)]);
var state_29961__$1 = state_29961;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29961__$1,(18),to,inst_29939);
} else {
if((state_val_29962 === (21))){
var inst_29952 = (state_29961[(2)]);
var state_29961__$1 = state_29961;
var statearr_29969_30034 = state_29961__$1;
(statearr_29969_30034[(2)] = inst_29952);

(statearr_29969_30034[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29962 === (13))){
var inst_29954 = (state_29961[(2)]);
var state_29961__$1 = (function (){var statearr_29970 = state_29961;
(statearr_29970[(9)] = inst_29954);

return statearr_29970;
})();
var statearr_29971_30035 = state_29961__$1;
(statearr_29971_30035[(2)] = null);

(statearr_29971_30035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29962 === (6))){
var inst_29926 = (state_29961[(7)]);
var state_29961__$1 = state_29961;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29961__$1,(11),inst_29926);
} else {
if((state_val_29962 === (17))){
var inst_29947 = (state_29961[(2)]);
var state_29961__$1 = state_29961;
if(cljs.core.truth_(inst_29947)){
var statearr_29972_30036 = state_29961__$1;
(statearr_29972_30036[(1)] = (19));

} else {
var statearr_29973_30037 = state_29961__$1;
(statearr_29973_30037[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29962 === (3))){
var inst_29959 = (state_29961[(2)]);
var state_29961__$1 = state_29961;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29961__$1,inst_29959);
} else {
if((state_val_29962 === (12))){
var inst_29936 = (state_29961[(10)]);
var state_29961__$1 = state_29961;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29961__$1,(14),inst_29936);
} else {
if((state_val_29962 === (2))){
var state_29961__$1 = state_29961;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29961__$1,(4),results);
} else {
if((state_val_29962 === (19))){
var state_29961__$1 = state_29961;
var statearr_29974_30038 = state_29961__$1;
(statearr_29974_30038[(2)] = null);

(statearr_29974_30038[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29962 === (11))){
var inst_29936 = (state_29961[(2)]);
var state_29961__$1 = (function (){var statearr_29975 = state_29961;
(statearr_29975[(10)] = inst_29936);

return statearr_29975;
})();
var statearr_29976_30039 = state_29961__$1;
(statearr_29976_30039[(2)] = null);

(statearr_29976_30039[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29962 === (9))){
var state_29961__$1 = state_29961;
var statearr_29977_30040 = state_29961__$1;
(statearr_29977_30040[(2)] = null);

(statearr_29977_30040[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29962 === (5))){
var state_29961__$1 = state_29961;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29978_30041 = state_29961__$1;
(statearr_29978_30041[(1)] = (8));

} else {
var statearr_29979_30042 = state_29961__$1;
(statearr_29979_30042[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29962 === (14))){
var inst_29939 = (state_29961[(8)]);
var inst_29941 = (state_29961[(11)]);
var inst_29939__$1 = (state_29961[(2)]);
var inst_29940 = (inst_29939__$1 == null);
var inst_29941__$1 = cljs.core.not.call(null,inst_29940);
var state_29961__$1 = (function (){var statearr_29980 = state_29961;
(statearr_29980[(8)] = inst_29939__$1);

(statearr_29980[(11)] = inst_29941__$1);

return statearr_29980;
})();
if(inst_29941__$1){
var statearr_29981_30043 = state_29961__$1;
(statearr_29981_30043[(1)] = (15));

} else {
var statearr_29982_30044 = state_29961__$1;
(statearr_29982_30044[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29962 === (16))){
var inst_29941 = (state_29961[(11)]);
var state_29961__$1 = state_29961;
var statearr_29983_30045 = state_29961__$1;
(statearr_29983_30045[(2)] = inst_29941);

(statearr_29983_30045[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29962 === (10))){
var inst_29933 = (state_29961[(2)]);
var state_29961__$1 = state_29961;
var statearr_29984_30046 = state_29961__$1;
(statearr_29984_30046[(2)] = inst_29933);

(statearr_29984_30046[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29962 === (18))){
var inst_29944 = (state_29961[(2)]);
var state_29961__$1 = state_29961;
var statearr_29985_30047 = state_29961__$1;
(statearr_29985_30047[(2)] = inst_29944);

(statearr_29985_30047[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29962 === (8))){
var inst_29930 = cljs.core.async.close_BANG_.call(null,to);
var state_29961__$1 = state_29961;
var statearr_29986_30048 = state_29961__$1;
(statearr_29986_30048[(2)] = inst_29930);

(statearr_29986_30048[(1)] = (10));


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
});})(c__29436__auto__,jobs,results,process,async))
;
return ((function (switch__29324__auto__,c__29436__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29325__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29325__auto____0 = (function (){
var statearr_29990 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29990[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29325__auto__);

(statearr_29990[(1)] = (1));

return statearr_29990;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29325__auto____1 = (function (state_29961){
while(true){
var ret_value__29326__auto__ = (function (){try{while(true){
var result__29327__auto__ = switch__29324__auto__.call(null,state_29961);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29327__auto__;
}
break;
}
}catch (e29991){if((e29991 instanceof Object)){
var ex__29328__auto__ = e29991;
var statearr_29992_30049 = state_29961;
(statearr_29992_30049[(5)] = ex__29328__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29961);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29991;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30050 = state_29961;
state_29961 = G__30050;
continue;
} else {
return ret_value__29326__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29325__auto__ = function(state_29961){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29325__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29325__auto____1.call(this,state_29961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29325__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29325__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29325__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29325__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29325__auto__;
})()
;})(switch__29324__auto__,c__29436__auto__,jobs,results,process,async))
})();
var state__29438__auto__ = (function (){var statearr_29993 = f__29437__auto__.call(null);
(statearr_29993[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29436__auto__);

return statearr_29993;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29438__auto__);
});})(c__29436__auto__,jobs,results,process,async))
);

return c__29436__auto__;
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
var args30051 = [];
var len__27064__auto___30054 = arguments.length;
var i__27065__auto___30055 = (0);
while(true){
if((i__27065__auto___30055 < len__27064__auto___30054)){
args30051.push((arguments[i__27065__auto___30055]));

var G__30056 = (i__27065__auto___30055 + (1));
i__27065__auto___30055 = G__30056;
continue;
} else {
}
break;
}

var G__30053 = args30051.length;
switch (G__30053) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30051.length)].join('')));

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
var args30058 = [];
var len__27064__auto___30061 = arguments.length;
var i__27065__auto___30062 = (0);
while(true){
if((i__27065__auto___30062 < len__27064__auto___30061)){
args30058.push((arguments[i__27065__auto___30062]));

var G__30063 = (i__27065__auto___30062 + (1));
i__27065__auto___30062 = G__30063;
continue;
} else {
}
break;
}

var G__30060 = args30058.length;
switch (G__30060) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30058.length)].join('')));

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
var args30065 = [];
var len__27064__auto___30118 = arguments.length;
var i__27065__auto___30119 = (0);
while(true){
if((i__27065__auto___30119 < len__27064__auto___30118)){
args30065.push((arguments[i__27065__auto___30119]));

var G__30120 = (i__27065__auto___30119 + (1));
i__27065__auto___30119 = G__30120;
continue;
} else {
}
break;
}

var G__30067 = args30065.length;
switch (G__30067) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30065.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__29436__auto___30122 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29436__auto___30122,tc,fc){
return (function (){
var f__29437__auto__ = (function (){var switch__29324__auto__ = ((function (c__29436__auto___30122,tc,fc){
return (function (state_30093){
var state_val_30094 = (state_30093[(1)]);
if((state_val_30094 === (7))){
var inst_30089 = (state_30093[(2)]);
var state_30093__$1 = state_30093;
var statearr_30095_30123 = state_30093__$1;
(statearr_30095_30123[(2)] = inst_30089);

(statearr_30095_30123[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (1))){
var state_30093__$1 = state_30093;
var statearr_30096_30124 = state_30093__$1;
(statearr_30096_30124[(2)] = null);

(statearr_30096_30124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (4))){
var inst_30070 = (state_30093[(7)]);
var inst_30070__$1 = (state_30093[(2)]);
var inst_30071 = (inst_30070__$1 == null);
var state_30093__$1 = (function (){var statearr_30097 = state_30093;
(statearr_30097[(7)] = inst_30070__$1);

return statearr_30097;
})();
if(cljs.core.truth_(inst_30071)){
var statearr_30098_30125 = state_30093__$1;
(statearr_30098_30125[(1)] = (5));

} else {
var statearr_30099_30126 = state_30093__$1;
(statearr_30099_30126[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (13))){
var state_30093__$1 = state_30093;
var statearr_30100_30127 = state_30093__$1;
(statearr_30100_30127[(2)] = null);

(statearr_30100_30127[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (6))){
var inst_30070 = (state_30093[(7)]);
var inst_30076 = p.call(null,inst_30070);
var state_30093__$1 = state_30093;
if(cljs.core.truth_(inst_30076)){
var statearr_30101_30128 = state_30093__$1;
(statearr_30101_30128[(1)] = (9));

} else {
var statearr_30102_30129 = state_30093__$1;
(statearr_30102_30129[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (3))){
var inst_30091 = (state_30093[(2)]);
var state_30093__$1 = state_30093;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30093__$1,inst_30091);
} else {
if((state_val_30094 === (12))){
var state_30093__$1 = state_30093;
var statearr_30103_30130 = state_30093__$1;
(statearr_30103_30130[(2)] = null);

(statearr_30103_30130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (2))){
var state_30093__$1 = state_30093;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30093__$1,(4),ch);
} else {
if((state_val_30094 === (11))){
var inst_30070 = (state_30093[(7)]);
var inst_30080 = (state_30093[(2)]);
var state_30093__$1 = state_30093;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30093__$1,(8),inst_30080,inst_30070);
} else {
if((state_val_30094 === (9))){
var state_30093__$1 = state_30093;
var statearr_30104_30131 = state_30093__$1;
(statearr_30104_30131[(2)] = tc);

(statearr_30104_30131[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (5))){
var inst_30073 = cljs.core.async.close_BANG_.call(null,tc);
var inst_30074 = cljs.core.async.close_BANG_.call(null,fc);
var state_30093__$1 = (function (){var statearr_30105 = state_30093;
(statearr_30105[(8)] = inst_30073);

return statearr_30105;
})();
var statearr_30106_30132 = state_30093__$1;
(statearr_30106_30132[(2)] = inst_30074);

(statearr_30106_30132[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (14))){
var inst_30087 = (state_30093[(2)]);
var state_30093__$1 = state_30093;
var statearr_30107_30133 = state_30093__$1;
(statearr_30107_30133[(2)] = inst_30087);

(statearr_30107_30133[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (10))){
var state_30093__$1 = state_30093;
var statearr_30108_30134 = state_30093__$1;
(statearr_30108_30134[(2)] = fc);

(statearr_30108_30134[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (8))){
var inst_30082 = (state_30093[(2)]);
var state_30093__$1 = state_30093;
if(cljs.core.truth_(inst_30082)){
var statearr_30109_30135 = state_30093__$1;
(statearr_30109_30135[(1)] = (12));

} else {
var statearr_30110_30136 = state_30093__$1;
(statearr_30110_30136[(1)] = (13));

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
});})(c__29436__auto___30122,tc,fc))
;
return ((function (switch__29324__auto__,c__29436__auto___30122,tc,fc){
return (function() {
var cljs$core$async$state_machine__29325__auto__ = null;
var cljs$core$async$state_machine__29325__auto____0 = (function (){
var statearr_30114 = [null,null,null,null,null,null,null,null,null];
(statearr_30114[(0)] = cljs$core$async$state_machine__29325__auto__);

(statearr_30114[(1)] = (1));

return statearr_30114;
});
var cljs$core$async$state_machine__29325__auto____1 = (function (state_30093){
while(true){
var ret_value__29326__auto__ = (function (){try{while(true){
var result__29327__auto__ = switch__29324__auto__.call(null,state_30093);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29327__auto__;
}
break;
}
}catch (e30115){if((e30115 instanceof Object)){
var ex__29328__auto__ = e30115;
var statearr_30116_30137 = state_30093;
(statearr_30116_30137[(5)] = ex__29328__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30093);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30115;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30138 = state_30093;
state_30093 = G__30138;
continue;
} else {
return ret_value__29326__auto__;
}
break;
}
});
cljs$core$async$state_machine__29325__auto__ = function(state_30093){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29325__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29325__auto____1.call(this,state_30093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29325__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29325__auto____0;
cljs$core$async$state_machine__29325__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29325__auto____1;
return cljs$core$async$state_machine__29325__auto__;
})()
;})(switch__29324__auto__,c__29436__auto___30122,tc,fc))
})();
var state__29438__auto__ = (function (){var statearr_30117 = f__29437__auto__.call(null);
(statearr_30117[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29436__auto___30122);

return statearr_30117;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29438__auto__);
});})(c__29436__auto___30122,tc,fc))
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
var c__29436__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29436__auto__){
return (function (){
var f__29437__auto__ = (function (){var switch__29324__auto__ = ((function (c__29436__auto__){
return (function (state_30202){
var state_val_30203 = (state_30202[(1)]);
if((state_val_30203 === (7))){
var inst_30198 = (state_30202[(2)]);
var state_30202__$1 = state_30202;
var statearr_30204_30225 = state_30202__$1;
(statearr_30204_30225[(2)] = inst_30198);

(statearr_30204_30225[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30203 === (1))){
var inst_30182 = init;
var state_30202__$1 = (function (){var statearr_30205 = state_30202;
(statearr_30205[(7)] = inst_30182);

return statearr_30205;
})();
var statearr_30206_30226 = state_30202__$1;
(statearr_30206_30226[(2)] = null);

(statearr_30206_30226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30203 === (4))){
var inst_30185 = (state_30202[(8)]);
var inst_30185__$1 = (state_30202[(2)]);
var inst_30186 = (inst_30185__$1 == null);
var state_30202__$1 = (function (){var statearr_30207 = state_30202;
(statearr_30207[(8)] = inst_30185__$1);

return statearr_30207;
})();
if(cljs.core.truth_(inst_30186)){
var statearr_30208_30227 = state_30202__$1;
(statearr_30208_30227[(1)] = (5));

} else {
var statearr_30209_30228 = state_30202__$1;
(statearr_30209_30228[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30203 === (6))){
var inst_30189 = (state_30202[(9)]);
var inst_30182 = (state_30202[(7)]);
var inst_30185 = (state_30202[(8)]);
var inst_30189__$1 = f.call(null,inst_30182,inst_30185);
var inst_30190 = cljs.core.reduced_QMARK_.call(null,inst_30189__$1);
var state_30202__$1 = (function (){var statearr_30210 = state_30202;
(statearr_30210[(9)] = inst_30189__$1);

return statearr_30210;
})();
if(inst_30190){
var statearr_30211_30229 = state_30202__$1;
(statearr_30211_30229[(1)] = (8));

} else {
var statearr_30212_30230 = state_30202__$1;
(statearr_30212_30230[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30203 === (3))){
var inst_30200 = (state_30202[(2)]);
var state_30202__$1 = state_30202;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30202__$1,inst_30200);
} else {
if((state_val_30203 === (2))){
var state_30202__$1 = state_30202;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30202__$1,(4),ch);
} else {
if((state_val_30203 === (9))){
var inst_30189 = (state_30202[(9)]);
var inst_30182 = inst_30189;
var state_30202__$1 = (function (){var statearr_30213 = state_30202;
(statearr_30213[(7)] = inst_30182);

return statearr_30213;
})();
var statearr_30214_30231 = state_30202__$1;
(statearr_30214_30231[(2)] = null);

(statearr_30214_30231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30203 === (5))){
var inst_30182 = (state_30202[(7)]);
var state_30202__$1 = state_30202;
var statearr_30215_30232 = state_30202__$1;
(statearr_30215_30232[(2)] = inst_30182);

(statearr_30215_30232[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30203 === (10))){
var inst_30196 = (state_30202[(2)]);
var state_30202__$1 = state_30202;
var statearr_30216_30233 = state_30202__$1;
(statearr_30216_30233[(2)] = inst_30196);

(statearr_30216_30233[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30203 === (8))){
var inst_30189 = (state_30202[(9)]);
var inst_30192 = cljs.core.deref.call(null,inst_30189);
var state_30202__$1 = state_30202;
var statearr_30217_30234 = state_30202__$1;
(statearr_30217_30234[(2)] = inst_30192);

(statearr_30217_30234[(1)] = (10));


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
});})(c__29436__auto__))
;
return ((function (switch__29324__auto__,c__29436__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__29325__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29325__auto____0 = (function (){
var statearr_30221 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30221[(0)] = cljs$core$async$reduce_$_state_machine__29325__auto__);

(statearr_30221[(1)] = (1));

return statearr_30221;
});
var cljs$core$async$reduce_$_state_machine__29325__auto____1 = (function (state_30202){
while(true){
var ret_value__29326__auto__ = (function (){try{while(true){
var result__29327__auto__ = switch__29324__auto__.call(null,state_30202);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29327__auto__;
}
break;
}
}catch (e30222){if((e30222 instanceof Object)){
var ex__29328__auto__ = e30222;
var statearr_30223_30235 = state_30202;
(statearr_30223_30235[(5)] = ex__29328__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30202);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30222;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30236 = state_30202;
state_30202 = G__30236;
continue;
} else {
return ret_value__29326__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29325__auto__ = function(state_30202){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29325__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29325__auto____1.call(this,state_30202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29325__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29325__auto____0;
cljs$core$async$reduce_$_state_machine__29325__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29325__auto____1;
return cljs$core$async$reduce_$_state_machine__29325__auto__;
})()
;})(switch__29324__auto__,c__29436__auto__))
})();
var state__29438__auto__ = (function (){var statearr_30224 = f__29437__auto__.call(null);
(statearr_30224[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29436__auto__);

return statearr_30224;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29438__auto__);
});})(c__29436__auto__))
);

return c__29436__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__29436__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29436__auto__,f__$1){
return (function (){
var f__29437__auto__ = (function (){var switch__29324__auto__ = ((function (c__29436__auto__,f__$1){
return (function (state_30256){
var state_val_30257 = (state_30256[(1)]);
if((state_val_30257 === (1))){
var inst_30251 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_30256__$1 = state_30256;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30256__$1,(2),inst_30251);
} else {
if((state_val_30257 === (2))){
var inst_30253 = (state_30256[(2)]);
var inst_30254 = f__$1.call(null,inst_30253);
var state_30256__$1 = state_30256;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30256__$1,inst_30254);
} else {
return null;
}
}
});})(c__29436__auto__,f__$1))
;
return ((function (switch__29324__auto__,c__29436__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__29325__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29325__auto____0 = (function (){
var statearr_30261 = [null,null,null,null,null,null,null];
(statearr_30261[(0)] = cljs$core$async$transduce_$_state_machine__29325__auto__);

(statearr_30261[(1)] = (1));

return statearr_30261;
});
var cljs$core$async$transduce_$_state_machine__29325__auto____1 = (function (state_30256){
while(true){
var ret_value__29326__auto__ = (function (){try{while(true){
var result__29327__auto__ = switch__29324__auto__.call(null,state_30256);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29327__auto__;
}
break;
}
}catch (e30262){if((e30262 instanceof Object)){
var ex__29328__auto__ = e30262;
var statearr_30263_30265 = state_30256;
(statearr_30263_30265[(5)] = ex__29328__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30256);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30262;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30266 = state_30256;
state_30256 = G__30266;
continue;
} else {
return ret_value__29326__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29325__auto__ = function(state_30256){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29325__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29325__auto____1.call(this,state_30256);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29325__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29325__auto____0;
cljs$core$async$transduce_$_state_machine__29325__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29325__auto____1;
return cljs$core$async$transduce_$_state_machine__29325__auto__;
})()
;})(switch__29324__auto__,c__29436__auto__,f__$1))
})();
var state__29438__auto__ = (function (){var statearr_30264 = f__29437__auto__.call(null);
(statearr_30264[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29436__auto__);

return statearr_30264;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29438__auto__);
});})(c__29436__auto__,f__$1))
);

return c__29436__auto__;
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
var args30267 = [];
var len__27064__auto___30319 = arguments.length;
var i__27065__auto___30320 = (0);
while(true){
if((i__27065__auto___30320 < len__27064__auto___30319)){
args30267.push((arguments[i__27065__auto___30320]));

var G__30321 = (i__27065__auto___30320 + (1));
i__27065__auto___30320 = G__30321;
continue;
} else {
}
break;
}

var G__30269 = args30267.length;
switch (G__30269) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30267.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29436__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29436__auto__){
return (function (){
var f__29437__auto__ = (function (){var switch__29324__auto__ = ((function (c__29436__auto__){
return (function (state_30294){
var state_val_30295 = (state_30294[(1)]);
if((state_val_30295 === (7))){
var inst_30276 = (state_30294[(2)]);
var state_30294__$1 = state_30294;
var statearr_30296_30323 = state_30294__$1;
(statearr_30296_30323[(2)] = inst_30276);

(statearr_30296_30323[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30295 === (1))){
var inst_30270 = cljs.core.seq.call(null,coll);
var inst_30271 = inst_30270;
var state_30294__$1 = (function (){var statearr_30297 = state_30294;
(statearr_30297[(7)] = inst_30271);

return statearr_30297;
})();
var statearr_30298_30324 = state_30294__$1;
(statearr_30298_30324[(2)] = null);

(statearr_30298_30324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30295 === (4))){
var inst_30271 = (state_30294[(7)]);
var inst_30274 = cljs.core.first.call(null,inst_30271);
var state_30294__$1 = state_30294;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30294__$1,(7),ch,inst_30274);
} else {
if((state_val_30295 === (13))){
var inst_30288 = (state_30294[(2)]);
var state_30294__$1 = state_30294;
var statearr_30299_30325 = state_30294__$1;
(statearr_30299_30325[(2)] = inst_30288);

(statearr_30299_30325[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30295 === (6))){
var inst_30279 = (state_30294[(2)]);
var state_30294__$1 = state_30294;
if(cljs.core.truth_(inst_30279)){
var statearr_30300_30326 = state_30294__$1;
(statearr_30300_30326[(1)] = (8));

} else {
var statearr_30301_30327 = state_30294__$1;
(statearr_30301_30327[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30295 === (3))){
var inst_30292 = (state_30294[(2)]);
var state_30294__$1 = state_30294;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30294__$1,inst_30292);
} else {
if((state_val_30295 === (12))){
var state_30294__$1 = state_30294;
var statearr_30302_30328 = state_30294__$1;
(statearr_30302_30328[(2)] = null);

(statearr_30302_30328[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30295 === (2))){
var inst_30271 = (state_30294[(7)]);
var state_30294__$1 = state_30294;
if(cljs.core.truth_(inst_30271)){
var statearr_30303_30329 = state_30294__$1;
(statearr_30303_30329[(1)] = (4));

} else {
var statearr_30304_30330 = state_30294__$1;
(statearr_30304_30330[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30295 === (11))){
var inst_30285 = cljs.core.async.close_BANG_.call(null,ch);
var state_30294__$1 = state_30294;
var statearr_30305_30331 = state_30294__$1;
(statearr_30305_30331[(2)] = inst_30285);

(statearr_30305_30331[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30295 === (9))){
var state_30294__$1 = state_30294;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30306_30332 = state_30294__$1;
(statearr_30306_30332[(1)] = (11));

} else {
var statearr_30307_30333 = state_30294__$1;
(statearr_30307_30333[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30295 === (5))){
var inst_30271 = (state_30294[(7)]);
var state_30294__$1 = state_30294;
var statearr_30308_30334 = state_30294__$1;
(statearr_30308_30334[(2)] = inst_30271);

(statearr_30308_30334[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30295 === (10))){
var inst_30290 = (state_30294[(2)]);
var state_30294__$1 = state_30294;
var statearr_30309_30335 = state_30294__$1;
(statearr_30309_30335[(2)] = inst_30290);

(statearr_30309_30335[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30295 === (8))){
var inst_30271 = (state_30294[(7)]);
var inst_30281 = cljs.core.next.call(null,inst_30271);
var inst_30271__$1 = inst_30281;
var state_30294__$1 = (function (){var statearr_30310 = state_30294;
(statearr_30310[(7)] = inst_30271__$1);

return statearr_30310;
})();
var statearr_30311_30336 = state_30294__$1;
(statearr_30311_30336[(2)] = null);

(statearr_30311_30336[(1)] = (2));


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
});})(c__29436__auto__))
;
return ((function (switch__29324__auto__,c__29436__auto__){
return (function() {
var cljs$core$async$state_machine__29325__auto__ = null;
var cljs$core$async$state_machine__29325__auto____0 = (function (){
var statearr_30315 = [null,null,null,null,null,null,null,null];
(statearr_30315[(0)] = cljs$core$async$state_machine__29325__auto__);

(statearr_30315[(1)] = (1));

return statearr_30315;
});
var cljs$core$async$state_machine__29325__auto____1 = (function (state_30294){
while(true){
var ret_value__29326__auto__ = (function (){try{while(true){
var result__29327__auto__ = switch__29324__auto__.call(null,state_30294);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29327__auto__;
}
break;
}
}catch (e30316){if((e30316 instanceof Object)){
var ex__29328__auto__ = e30316;
var statearr_30317_30337 = state_30294;
(statearr_30317_30337[(5)] = ex__29328__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30294);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30316;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30338 = state_30294;
state_30294 = G__30338;
continue;
} else {
return ret_value__29326__auto__;
}
break;
}
});
cljs$core$async$state_machine__29325__auto__ = function(state_30294){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29325__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29325__auto____1.call(this,state_30294);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29325__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29325__auto____0;
cljs$core$async$state_machine__29325__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29325__auto____1;
return cljs$core$async$state_machine__29325__auto__;
})()
;})(switch__29324__auto__,c__29436__auto__))
})();
var state__29438__auto__ = (function (){var statearr_30318 = f__29437__auto__.call(null);
(statearr_30318[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29436__auto__);

return statearr_30318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29438__auto__);
});})(c__29436__auto__))
);

return c__29436__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async30564 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30564 = (function (mult,ch,cs,meta30565){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta30565 = meta30565;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30564.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_30566,meta30565__$1){
var self__ = this;
var _30566__$1 = this;
return (new cljs.core.async.t_cljs$core$async30564(self__.mult,self__.ch,self__.cs,meta30565__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async30564.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_30566){
var self__ = this;
var _30566__$1 = this;
return self__.meta30565;
});})(cs))
;

cljs.core.async.t_cljs$core$async30564.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30564.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async30564.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async30564.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30564.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30564.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30564.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30565","meta30565",1550165063,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async30564.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30564.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30564";

cljs.core.async.t_cljs$core$async30564.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__26595__auto__,writer__26596__auto__,opt__26597__auto__){
return cljs.core._write.call(null,writer__26596__auto__,"cljs.core.async/t_cljs$core$async30564");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async30564 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async30564(mult__$1,ch__$1,cs__$1,meta30565){
return (new cljs.core.async.t_cljs$core$async30564(mult__$1,ch__$1,cs__$1,meta30565));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async30564(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__29436__auto___30789 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29436__auto___30789,cs,m,dchan,dctr,done){
return (function (){
var f__29437__auto__ = (function (){var switch__29324__auto__ = ((function (c__29436__auto___30789,cs,m,dchan,dctr,done){
return (function (state_30701){
var state_val_30702 = (state_30701[(1)]);
if((state_val_30702 === (7))){
var inst_30697 = (state_30701[(2)]);
var state_30701__$1 = state_30701;
var statearr_30703_30790 = state_30701__$1;
(statearr_30703_30790[(2)] = inst_30697);

(statearr_30703_30790[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30702 === (20))){
var inst_30600 = (state_30701[(7)]);
var inst_30612 = cljs.core.first.call(null,inst_30600);
var inst_30613 = cljs.core.nth.call(null,inst_30612,(0),null);
var inst_30614 = cljs.core.nth.call(null,inst_30612,(1),null);
var state_30701__$1 = (function (){var statearr_30704 = state_30701;
(statearr_30704[(8)] = inst_30613);

return statearr_30704;
})();
if(cljs.core.truth_(inst_30614)){
var statearr_30705_30791 = state_30701__$1;
(statearr_30705_30791[(1)] = (22));

} else {
var statearr_30706_30792 = state_30701__$1;
(statearr_30706_30792[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30702 === (27))){
var inst_30644 = (state_30701[(9)]);
var inst_30569 = (state_30701[(10)]);
var inst_30642 = (state_30701[(11)]);
var inst_30649 = (state_30701[(12)]);
var inst_30649__$1 = cljs.core._nth.call(null,inst_30642,inst_30644);
var inst_30650 = cljs.core.async.put_BANG_.call(null,inst_30649__$1,inst_30569,done);
var state_30701__$1 = (function (){var statearr_30707 = state_30701;
(statearr_30707[(12)] = inst_30649__$1);

return statearr_30707;
})();
if(cljs.core.truth_(inst_30650)){
var statearr_30708_30793 = state_30701__$1;
(statearr_30708_30793[(1)] = (30));

} else {
var statearr_30709_30794 = state_30701__$1;
(statearr_30709_30794[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30702 === (1))){
var state_30701__$1 = state_30701;
var statearr_30710_30795 = state_30701__$1;
(statearr_30710_30795[(2)] = null);

(statearr_30710_30795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30702 === (24))){
var inst_30600 = (state_30701[(7)]);
var inst_30619 = (state_30701[(2)]);
var inst_30620 = cljs.core.next.call(null,inst_30600);
var inst_30578 = inst_30620;
var inst_30579 = null;
var inst_30580 = (0);
var inst_30581 = (0);
var state_30701__$1 = (function (){var statearr_30711 = state_30701;
(statearr_30711[(13)] = inst_30619);

(statearr_30711[(14)] = inst_30580);

(statearr_30711[(15)] = inst_30578);

(statearr_30711[(16)] = inst_30579);

(statearr_30711[(17)] = inst_30581);

return statearr_30711;
})();
var statearr_30712_30796 = state_30701__$1;
(statearr_30712_30796[(2)] = null);

(statearr_30712_30796[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30702 === (39))){
var state_30701__$1 = state_30701;
var statearr_30716_30797 = state_30701__$1;
(statearr_30716_30797[(2)] = null);

(statearr_30716_30797[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30702 === (4))){
var inst_30569 = (state_30701[(10)]);
var inst_30569__$1 = (state_30701[(2)]);
var inst_30570 = (inst_30569__$1 == null);
var state_30701__$1 = (function (){var statearr_30717 = state_30701;
(statearr_30717[(10)] = inst_30569__$1);

return statearr_30717;
})();
if(cljs.core.truth_(inst_30570)){
var statearr_30718_30798 = state_30701__$1;
(statearr_30718_30798[(1)] = (5));

} else {
var statearr_30719_30799 = state_30701__$1;
(statearr_30719_30799[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30702 === (15))){
var inst_30580 = (state_30701[(14)]);
var inst_30578 = (state_30701[(15)]);
var inst_30579 = (state_30701[(16)]);
var inst_30581 = (state_30701[(17)]);
var inst_30596 = (state_30701[(2)]);
var inst_30597 = (inst_30581 + (1));
var tmp30713 = inst_30580;
var tmp30714 = inst_30578;
var tmp30715 = inst_30579;
var inst_30578__$1 = tmp30714;
var inst_30579__$1 = tmp30715;
var inst_30580__$1 = tmp30713;
var inst_30581__$1 = inst_30597;
var state_30701__$1 = (function (){var statearr_30720 = state_30701;
(statearr_30720[(14)] = inst_30580__$1);

(statearr_30720[(18)] = inst_30596);

(statearr_30720[(15)] = inst_30578__$1);

(statearr_30720[(16)] = inst_30579__$1);

(statearr_30720[(17)] = inst_30581__$1);

return statearr_30720;
})();
var statearr_30721_30800 = state_30701__$1;
(statearr_30721_30800[(2)] = null);

(statearr_30721_30800[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30702 === (21))){
var inst_30623 = (state_30701[(2)]);
var state_30701__$1 = state_30701;
var statearr_30725_30801 = state_30701__$1;
(statearr_30725_30801[(2)] = inst_30623);

(statearr_30725_30801[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30702 === (31))){
var inst_30649 = (state_30701[(12)]);
var inst_30653 = done.call(null,null);
var inst_30654 = cljs.core.async.untap_STAR_.call(null,m,inst_30649);
var state_30701__$1 = (function (){var statearr_30726 = state_30701;
(statearr_30726[(19)] = inst_30653);

return statearr_30726;
})();
var statearr_30727_30802 = state_30701__$1;
(statearr_30727_30802[(2)] = inst_30654);

(statearr_30727_30802[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30702 === (32))){
var inst_30643 = (state_30701[(20)]);
var inst_30644 = (state_30701[(9)]);
var inst_30642 = (state_30701[(11)]);
var inst_30641 = (state_30701[(21)]);
var inst_30656 = (state_30701[(2)]);
var inst_30657 = (inst_30644 + (1));
var tmp30722 = inst_30643;
var tmp30723 = inst_30642;
var tmp30724 = inst_30641;
var inst_30641__$1 = tmp30724;
var inst_30642__$1 = tmp30723;
var inst_30643__$1 = tmp30722;
var inst_30644__$1 = inst_30657;
var state_30701__$1 = (function (){var statearr_30728 = state_30701;
(statearr_30728[(20)] = inst_30643__$1);

(statearr_30728[(9)] = inst_30644__$1);

(statearr_30728[(11)] = inst_30642__$1);

(statearr_30728[(22)] = inst_30656);

(statearr_30728[(21)] = inst_30641__$1);

return statearr_30728;
})();
var statearr_30729_30803 = state_30701__$1;
(statearr_30729_30803[(2)] = null);

(statearr_30729_30803[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30702 === (40))){
var inst_30669 = (state_30701[(23)]);
var inst_30673 = done.call(null,null);
var inst_30674 = cljs.core.async.untap_STAR_.call(null,m,inst_30669);
var state_30701__$1 = (function (){var statearr_30730 = state_30701;
(statearr_30730[(24)] = inst_30673);

return statearr_30730;
})();
var statearr_30731_30804 = state_30701__$1;
(statearr_30731_30804[(2)] = inst_30674);

(statearr_30731_30804[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30702 === (33))){
var inst_30660 = (state_30701[(25)]);
var inst_30662 = cljs.core.chunked_seq_QMARK_.call(null,inst_30660);
var state_30701__$1 = state_30701;
if(inst_30662){
var statearr_30732_30805 = state_30701__$1;
(statearr_30732_30805[(1)] = (36));

} else {
var statearr_30733_30806 = state_30701__$1;
(statearr_30733_30806[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30702 === (13))){
var inst_30590 = (state_30701[(26)]);
var inst_30593 = cljs.core.async.close_BANG_.call(null,inst_30590);
var state_30701__$1 = state_30701;
var statearr_30734_30807 = state_30701__$1;
(statearr_30734_30807[(2)] = inst_30593);

(statearr_30734_30807[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30702 === (22))){
var inst_30613 = (state_30701[(8)]);
var inst_30616 = cljs.core.async.close_BANG_.call(null,inst_30613);
var state_30701__$1 = state_30701;
var statearr_30735_30808 = state_30701__$1;
(statearr_30735_30808[(2)] = inst_30616);

(statearr_30735_30808[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30702 === (36))){
var inst_30660 = (state_30701[(25)]);
var inst_30664 = cljs.core.chunk_first.call(null,inst_30660);
var inst_30665 = cljs.core.chunk_rest.call(null,inst_30660);
var inst_30666 = cljs.core.count.call(null,inst_30664);
var inst_30641 = inst_30665;
var inst_30642 = inst_30664;
var inst_30643 = inst_30666;
var inst_30644 = (0);
var state_30701__$1 = (function (){var statearr_30736 = state_30701;
(statearr_30736[(20)] = inst_30643);

(statearr_30736[(9)] = inst_30644);

(statearr_30736[(11)] = inst_30642);

(statearr_30736[(21)] = inst_30641);

return statearr_30736;
})();
var statearr_30737_30809 = state_30701__$1;
(statearr_30737_30809[(2)] = null);

(statearr_30737_30809[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30702 === (41))){
var inst_30660 = (state_30701[(25)]);
var inst_30676 = (state_30701[(2)]);
var inst_30677 = cljs.core.next.call(null,inst_30660);
var inst_30641 = inst_30677;
var inst_30642 = null;
var inst_30643 = (0);
var inst_30644 = (0);
var state_30701__$1 = (function (){var statearr_30738 = state_30701;
(statearr_30738[(20)] = inst_30643);

(statearr_30738[(9)] = inst_30644);

(statearr_30738[(27)] = inst_30676);

(statearr_30738[(11)] = inst_30642);

(statearr_30738[(21)] = inst_30641);

return statearr_30738;
})();
var statearr_30739_30810 = state_30701__$1;
(statearr_30739_30810[(2)] = null);

(statearr_30739_30810[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30702 === (43))){
var state_30701__$1 = state_30701;
var statearr_30740_30811 = state_30701__$1;
(statearr_30740_30811[(2)] = null);

(statearr_30740_30811[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30702 === (29))){
var inst_30685 = (state_30701[(2)]);
var state_30701__$1 = state_30701;
var statearr_30741_30812 = state_30701__$1;
(statearr_30741_30812[(2)] = inst_30685);

(statearr_30741_30812[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30702 === (44))){
var inst_30694 = (state_30701[(2)]);
var state_30701__$1 = (function (){var statearr_30742 = state_30701;
(statearr_30742[(28)] = inst_30694);

return statearr_30742;
})();
var statearr_30743_30813 = state_30701__$1;
(statearr_30743_30813[(2)] = null);

(statearr_30743_30813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30702 === (6))){
var inst_30633 = (state_30701[(29)]);
var inst_30632 = cljs.core.deref.call(null,cs);
var inst_30633__$1 = cljs.core.keys.call(null,inst_30632);
var inst_30634 = cljs.core.count.call(null,inst_30633__$1);
var inst_30635 = cljs.core.reset_BANG_.call(null,dctr,inst_30634);
var inst_30640 = cljs.core.seq.call(null,inst_30633__$1);
var inst_30641 = inst_30640;
var inst_30642 = null;
var inst_30643 = (0);
var inst_30644 = (0);
var state_30701__$1 = (function (){var statearr_30744 = state_30701;
(statearr_30744[(20)] = inst_30643);

(statearr_30744[(29)] = inst_30633__$1);

(statearr_30744[(9)] = inst_30644);

(statearr_30744[(30)] = inst_30635);

(statearr_30744[(11)] = inst_30642);

(statearr_30744[(21)] = inst_30641);

return statearr_30744;
})();
var statearr_30745_30814 = state_30701__$1;
(statearr_30745_30814[(2)] = null);

(statearr_30745_30814[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30702 === (28))){
var inst_30660 = (state_30701[(25)]);
var inst_30641 = (state_30701[(21)]);
var inst_30660__$1 = cljs.core.seq.call(null,inst_30641);
var state_30701__$1 = (function (){var statearr_30746 = state_30701;
(statearr_30746[(25)] = inst_30660__$1);

return statearr_30746;
})();
if(inst_30660__$1){
var statearr_30747_30815 = state_30701__$1;
(statearr_30747_30815[(1)] = (33));

} else {
var statearr_30748_30816 = state_30701__$1;
(statearr_30748_30816[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30702 === (25))){
var inst_30643 = (state_30701[(20)]);
var inst_30644 = (state_30701[(9)]);
var inst_30646 = (inst_30644 < inst_30643);
var inst_30647 = inst_30646;
var state_30701__$1 = state_30701;
if(cljs.core.truth_(inst_30647)){
var statearr_30749_30817 = state_30701__$1;
(statearr_30749_30817[(1)] = (27));

} else {
var statearr_30750_30818 = state_30701__$1;
(statearr_30750_30818[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30702 === (34))){
var state_30701__$1 = state_30701;
var statearr_30751_30819 = state_30701__$1;
(statearr_30751_30819[(2)] = null);

(statearr_30751_30819[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30702 === (17))){
var state_30701__$1 = state_30701;
var statearr_30752_30820 = state_30701__$1;
(statearr_30752_30820[(2)] = null);

(statearr_30752_30820[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30702 === (3))){
var inst_30699 = (state_30701[(2)]);
var state_30701__$1 = state_30701;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30701__$1,inst_30699);
} else {
if((state_val_30702 === (12))){
var inst_30628 = (state_30701[(2)]);
var state_30701__$1 = state_30701;
var statearr_30753_30821 = state_30701__$1;
(statearr_30753_30821[(2)] = inst_30628);

(statearr_30753_30821[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30702 === (2))){
var state_30701__$1 = state_30701;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30701__$1,(4),ch);
} else {
if((state_val_30702 === (23))){
var state_30701__$1 = state_30701;
var statearr_30754_30822 = state_30701__$1;
(statearr_30754_30822[(2)] = null);

(statearr_30754_30822[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30702 === (35))){
var inst_30683 = (state_30701[(2)]);
var state_30701__$1 = state_30701;
var statearr_30755_30823 = state_30701__$1;
(statearr_30755_30823[(2)] = inst_30683);

(statearr_30755_30823[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30702 === (19))){
var inst_30600 = (state_30701[(7)]);
var inst_30604 = cljs.core.chunk_first.call(null,inst_30600);
var inst_30605 = cljs.core.chunk_rest.call(null,inst_30600);
var inst_30606 = cljs.core.count.call(null,inst_30604);
var inst_30578 = inst_30605;
var inst_30579 = inst_30604;
var inst_30580 = inst_30606;
var inst_30581 = (0);
var state_30701__$1 = (function (){var statearr_30756 = state_30701;
(statearr_30756[(14)] = inst_30580);

(statearr_30756[(15)] = inst_30578);

(statearr_30756[(16)] = inst_30579);

(statearr_30756[(17)] = inst_30581);

return statearr_30756;
})();
var statearr_30757_30824 = state_30701__$1;
(statearr_30757_30824[(2)] = null);

(statearr_30757_30824[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30702 === (11))){
var inst_30578 = (state_30701[(15)]);
var inst_30600 = (state_30701[(7)]);
var inst_30600__$1 = cljs.core.seq.call(null,inst_30578);
var state_30701__$1 = (function (){var statearr_30758 = state_30701;
(statearr_30758[(7)] = inst_30600__$1);

return statearr_30758;
})();
if(inst_30600__$1){
var statearr_30759_30825 = state_30701__$1;
(statearr_30759_30825[(1)] = (16));

} else {
var statearr_30760_30826 = state_30701__$1;
(statearr_30760_30826[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30702 === (9))){
var inst_30630 = (state_30701[(2)]);
var state_30701__$1 = state_30701;
var statearr_30761_30827 = state_30701__$1;
(statearr_30761_30827[(2)] = inst_30630);

(statearr_30761_30827[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30702 === (5))){
var inst_30576 = cljs.core.deref.call(null,cs);
var inst_30577 = cljs.core.seq.call(null,inst_30576);
var inst_30578 = inst_30577;
var inst_30579 = null;
var inst_30580 = (0);
var inst_30581 = (0);
var state_30701__$1 = (function (){var statearr_30762 = state_30701;
(statearr_30762[(14)] = inst_30580);

(statearr_30762[(15)] = inst_30578);

(statearr_30762[(16)] = inst_30579);

(statearr_30762[(17)] = inst_30581);

return statearr_30762;
})();
var statearr_30763_30828 = state_30701__$1;
(statearr_30763_30828[(2)] = null);

(statearr_30763_30828[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30702 === (14))){
var state_30701__$1 = state_30701;
var statearr_30764_30829 = state_30701__$1;
(statearr_30764_30829[(2)] = null);

(statearr_30764_30829[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30702 === (45))){
var inst_30691 = (state_30701[(2)]);
var state_30701__$1 = state_30701;
var statearr_30765_30830 = state_30701__$1;
(statearr_30765_30830[(2)] = inst_30691);

(statearr_30765_30830[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30702 === (26))){
var inst_30633 = (state_30701[(29)]);
var inst_30687 = (state_30701[(2)]);
var inst_30688 = cljs.core.seq.call(null,inst_30633);
var state_30701__$1 = (function (){var statearr_30766 = state_30701;
(statearr_30766[(31)] = inst_30687);

return statearr_30766;
})();
if(inst_30688){
var statearr_30767_30831 = state_30701__$1;
(statearr_30767_30831[(1)] = (42));

} else {
var statearr_30768_30832 = state_30701__$1;
(statearr_30768_30832[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30702 === (16))){
var inst_30600 = (state_30701[(7)]);
var inst_30602 = cljs.core.chunked_seq_QMARK_.call(null,inst_30600);
var state_30701__$1 = state_30701;
if(inst_30602){
var statearr_30769_30833 = state_30701__$1;
(statearr_30769_30833[(1)] = (19));

} else {
var statearr_30770_30834 = state_30701__$1;
(statearr_30770_30834[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30702 === (38))){
var inst_30680 = (state_30701[(2)]);
var state_30701__$1 = state_30701;
var statearr_30771_30835 = state_30701__$1;
(statearr_30771_30835[(2)] = inst_30680);

(statearr_30771_30835[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30702 === (30))){
var state_30701__$1 = state_30701;
var statearr_30772_30836 = state_30701__$1;
(statearr_30772_30836[(2)] = null);

(statearr_30772_30836[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30702 === (10))){
var inst_30579 = (state_30701[(16)]);
var inst_30581 = (state_30701[(17)]);
var inst_30589 = cljs.core._nth.call(null,inst_30579,inst_30581);
var inst_30590 = cljs.core.nth.call(null,inst_30589,(0),null);
var inst_30591 = cljs.core.nth.call(null,inst_30589,(1),null);
var state_30701__$1 = (function (){var statearr_30773 = state_30701;
(statearr_30773[(26)] = inst_30590);

return statearr_30773;
})();
if(cljs.core.truth_(inst_30591)){
var statearr_30774_30837 = state_30701__$1;
(statearr_30774_30837[(1)] = (13));

} else {
var statearr_30775_30838 = state_30701__$1;
(statearr_30775_30838[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30702 === (18))){
var inst_30626 = (state_30701[(2)]);
var state_30701__$1 = state_30701;
var statearr_30776_30839 = state_30701__$1;
(statearr_30776_30839[(2)] = inst_30626);

(statearr_30776_30839[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30702 === (42))){
var state_30701__$1 = state_30701;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30701__$1,(45),dchan);
} else {
if((state_val_30702 === (37))){
var inst_30669 = (state_30701[(23)]);
var inst_30569 = (state_30701[(10)]);
var inst_30660 = (state_30701[(25)]);
var inst_30669__$1 = cljs.core.first.call(null,inst_30660);
var inst_30670 = cljs.core.async.put_BANG_.call(null,inst_30669__$1,inst_30569,done);
var state_30701__$1 = (function (){var statearr_30777 = state_30701;
(statearr_30777[(23)] = inst_30669__$1);

return statearr_30777;
})();
if(cljs.core.truth_(inst_30670)){
var statearr_30778_30840 = state_30701__$1;
(statearr_30778_30840[(1)] = (39));

} else {
var statearr_30779_30841 = state_30701__$1;
(statearr_30779_30841[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30702 === (8))){
var inst_30580 = (state_30701[(14)]);
var inst_30581 = (state_30701[(17)]);
var inst_30583 = (inst_30581 < inst_30580);
var inst_30584 = inst_30583;
var state_30701__$1 = state_30701;
if(cljs.core.truth_(inst_30584)){
var statearr_30780_30842 = state_30701__$1;
(statearr_30780_30842[(1)] = (10));

} else {
var statearr_30781_30843 = state_30701__$1;
(statearr_30781_30843[(1)] = (11));

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
});})(c__29436__auto___30789,cs,m,dchan,dctr,done))
;
return ((function (switch__29324__auto__,c__29436__auto___30789,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__29325__auto__ = null;
var cljs$core$async$mult_$_state_machine__29325__auto____0 = (function (){
var statearr_30785 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30785[(0)] = cljs$core$async$mult_$_state_machine__29325__auto__);

(statearr_30785[(1)] = (1));

return statearr_30785;
});
var cljs$core$async$mult_$_state_machine__29325__auto____1 = (function (state_30701){
while(true){
var ret_value__29326__auto__ = (function (){try{while(true){
var result__29327__auto__ = switch__29324__auto__.call(null,state_30701);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29327__auto__;
}
break;
}
}catch (e30786){if((e30786 instanceof Object)){
var ex__29328__auto__ = e30786;
var statearr_30787_30844 = state_30701;
(statearr_30787_30844[(5)] = ex__29328__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30701);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30786;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30845 = state_30701;
state_30701 = G__30845;
continue;
} else {
return ret_value__29326__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29325__auto__ = function(state_30701){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29325__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29325__auto____1.call(this,state_30701);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29325__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29325__auto____0;
cljs$core$async$mult_$_state_machine__29325__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29325__auto____1;
return cljs$core$async$mult_$_state_machine__29325__auto__;
})()
;})(switch__29324__auto__,c__29436__auto___30789,cs,m,dchan,dctr,done))
})();
var state__29438__auto__ = (function (){var statearr_30788 = f__29437__auto__.call(null);
(statearr_30788[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29436__auto___30789);

return statearr_30788;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29438__auto__);
});})(c__29436__auto___30789,cs,m,dchan,dctr,done))
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
var args30846 = [];
var len__27064__auto___30849 = arguments.length;
var i__27065__auto___30850 = (0);
while(true){
if((i__27065__auto___30850 < len__27064__auto___30849)){
args30846.push((arguments[i__27065__auto___30850]));

var G__30851 = (i__27065__auto___30850 + (1));
i__27065__auto___30850 = G__30851;
continue;
} else {
}
break;
}

var G__30848 = args30846.length;
switch (G__30848) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30846.length)].join('')));

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
var len__27064__auto___30863 = arguments.length;
var i__27065__auto___30864 = (0);
while(true){
if((i__27065__auto___30864 < len__27064__auto___30863)){
args__27071__auto__.push((arguments[i__27065__auto___30864]));

var G__30865 = (i__27065__auto___30864 + (1));
i__27065__auto___30864 = G__30865;
continue;
} else {
}
break;
}

var argseq__27072__auto__ = ((((3) < args__27071__auto__.length))?(new cljs.core.IndexedSeq(args__27071__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__27072__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30857){
var map__30858 = p__30857;
var map__30858__$1 = ((((!((map__30858 == null)))?((((map__30858.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30858.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30858):map__30858);
var opts = map__30858__$1;
var statearr_30860_30866 = state;
(statearr_30860_30866[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__30858,map__30858__$1,opts){
return (function (val){
var statearr_30861_30867 = state;
(statearr_30861_30867[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__30858,map__30858__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_30862_30868 = state;
(statearr_30862_30868[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30853){
var G__30854 = cljs.core.first.call(null,seq30853);
var seq30853__$1 = cljs.core.next.call(null,seq30853);
var G__30855 = cljs.core.first.call(null,seq30853__$1);
var seq30853__$2 = cljs.core.next.call(null,seq30853__$1);
var G__30856 = cljs.core.first.call(null,seq30853__$2);
var seq30853__$3 = cljs.core.next.call(null,seq30853__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30854,G__30855,G__30856,seq30853__$3);
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
if(typeof cljs.core.async.t_cljs$core$async31034 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31034 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31035){
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
this.meta31035 = meta31035;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31034.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31036,meta31035__$1){
var self__ = this;
var _31036__$1 = this;
return (new cljs.core.async.t_cljs$core$async31034(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31035__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31034.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31036){
var self__ = this;
var _31036__$1 = this;
return self__.meta31035;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31034.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async31034.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31034.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async31034.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31034.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31034.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31034.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31034.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async31034.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31035","meta31035",-1745925041,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31034.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31034.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31034";

cljs.core.async.t_cljs$core$async31034.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__26595__auto__,writer__26596__auto__,opt__26597__auto__){
return cljs.core._write.call(null,writer__26596__auto__,"cljs.core.async/t_cljs$core$async31034");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async31034 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async31034(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31035){
return (new cljs.core.async.t_cljs$core$async31034(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31035));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async31034(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29436__auto___31199 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29436__auto___31199,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__29437__auto__ = (function (){var switch__29324__auto__ = ((function (c__29436__auto___31199,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_31136){
var state_val_31137 = (state_31136[(1)]);
if((state_val_31137 === (7))){
var inst_31052 = (state_31136[(2)]);
var state_31136__$1 = state_31136;
var statearr_31138_31200 = state_31136__$1;
(statearr_31138_31200[(2)] = inst_31052);

(statearr_31138_31200[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (20))){
var inst_31064 = (state_31136[(7)]);
var state_31136__$1 = state_31136;
var statearr_31139_31201 = state_31136__$1;
(statearr_31139_31201[(2)] = inst_31064);

(statearr_31139_31201[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (27))){
var state_31136__$1 = state_31136;
var statearr_31140_31202 = state_31136__$1;
(statearr_31140_31202[(2)] = null);

(statearr_31140_31202[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (1))){
var inst_31040 = (state_31136[(8)]);
var inst_31040__$1 = calc_state.call(null);
var inst_31042 = (inst_31040__$1 == null);
var inst_31043 = cljs.core.not.call(null,inst_31042);
var state_31136__$1 = (function (){var statearr_31141 = state_31136;
(statearr_31141[(8)] = inst_31040__$1);

return statearr_31141;
})();
if(inst_31043){
var statearr_31142_31203 = state_31136__$1;
(statearr_31142_31203[(1)] = (2));

} else {
var statearr_31143_31204 = state_31136__$1;
(statearr_31143_31204[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (24))){
var inst_31096 = (state_31136[(9)]);
var inst_31087 = (state_31136[(10)]);
var inst_31110 = (state_31136[(11)]);
var inst_31110__$1 = inst_31087.call(null,inst_31096);
var state_31136__$1 = (function (){var statearr_31144 = state_31136;
(statearr_31144[(11)] = inst_31110__$1);

return statearr_31144;
})();
if(cljs.core.truth_(inst_31110__$1)){
var statearr_31145_31205 = state_31136__$1;
(statearr_31145_31205[(1)] = (29));

} else {
var statearr_31146_31206 = state_31136__$1;
(statearr_31146_31206[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (4))){
var inst_31055 = (state_31136[(2)]);
var state_31136__$1 = state_31136;
if(cljs.core.truth_(inst_31055)){
var statearr_31147_31207 = state_31136__$1;
(statearr_31147_31207[(1)] = (8));

} else {
var statearr_31148_31208 = state_31136__$1;
(statearr_31148_31208[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (15))){
var inst_31081 = (state_31136[(2)]);
var state_31136__$1 = state_31136;
if(cljs.core.truth_(inst_31081)){
var statearr_31149_31209 = state_31136__$1;
(statearr_31149_31209[(1)] = (19));

} else {
var statearr_31150_31210 = state_31136__$1;
(statearr_31150_31210[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (21))){
var inst_31086 = (state_31136[(12)]);
var inst_31086__$1 = (state_31136[(2)]);
var inst_31087 = cljs.core.get.call(null,inst_31086__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31088 = cljs.core.get.call(null,inst_31086__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31089 = cljs.core.get.call(null,inst_31086__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31136__$1 = (function (){var statearr_31151 = state_31136;
(statearr_31151[(12)] = inst_31086__$1);

(statearr_31151[(10)] = inst_31087);

(statearr_31151[(13)] = inst_31088);

return statearr_31151;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_31136__$1,(22),inst_31089);
} else {
if((state_val_31137 === (31))){
var inst_31118 = (state_31136[(2)]);
var state_31136__$1 = state_31136;
if(cljs.core.truth_(inst_31118)){
var statearr_31152_31211 = state_31136__$1;
(statearr_31152_31211[(1)] = (32));

} else {
var statearr_31153_31212 = state_31136__$1;
(statearr_31153_31212[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (32))){
var inst_31095 = (state_31136[(14)]);
var state_31136__$1 = state_31136;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31136__$1,(35),out,inst_31095);
} else {
if((state_val_31137 === (33))){
var inst_31086 = (state_31136[(12)]);
var inst_31064 = inst_31086;
var state_31136__$1 = (function (){var statearr_31154 = state_31136;
(statearr_31154[(7)] = inst_31064);

return statearr_31154;
})();
var statearr_31155_31213 = state_31136__$1;
(statearr_31155_31213[(2)] = null);

(statearr_31155_31213[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (13))){
var inst_31064 = (state_31136[(7)]);
var inst_31071 = inst_31064.cljs$lang$protocol_mask$partition0$;
var inst_31072 = (inst_31071 & (64));
var inst_31073 = inst_31064.cljs$core$ISeq$;
var inst_31074 = (inst_31072) || (inst_31073);
var state_31136__$1 = state_31136;
if(cljs.core.truth_(inst_31074)){
var statearr_31156_31214 = state_31136__$1;
(statearr_31156_31214[(1)] = (16));

} else {
var statearr_31157_31215 = state_31136__$1;
(statearr_31157_31215[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (22))){
var inst_31096 = (state_31136[(9)]);
var inst_31095 = (state_31136[(14)]);
var inst_31094 = (state_31136[(2)]);
var inst_31095__$1 = cljs.core.nth.call(null,inst_31094,(0),null);
var inst_31096__$1 = cljs.core.nth.call(null,inst_31094,(1),null);
var inst_31097 = (inst_31095__$1 == null);
var inst_31098 = cljs.core._EQ_.call(null,inst_31096__$1,change);
var inst_31099 = (inst_31097) || (inst_31098);
var state_31136__$1 = (function (){var statearr_31158 = state_31136;
(statearr_31158[(9)] = inst_31096__$1);

(statearr_31158[(14)] = inst_31095__$1);

return statearr_31158;
})();
if(cljs.core.truth_(inst_31099)){
var statearr_31159_31216 = state_31136__$1;
(statearr_31159_31216[(1)] = (23));

} else {
var statearr_31160_31217 = state_31136__$1;
(statearr_31160_31217[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (36))){
var inst_31086 = (state_31136[(12)]);
var inst_31064 = inst_31086;
var state_31136__$1 = (function (){var statearr_31161 = state_31136;
(statearr_31161[(7)] = inst_31064);

return statearr_31161;
})();
var statearr_31162_31218 = state_31136__$1;
(statearr_31162_31218[(2)] = null);

(statearr_31162_31218[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (29))){
var inst_31110 = (state_31136[(11)]);
var state_31136__$1 = state_31136;
var statearr_31163_31219 = state_31136__$1;
(statearr_31163_31219[(2)] = inst_31110);

(statearr_31163_31219[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (6))){
var state_31136__$1 = state_31136;
var statearr_31164_31220 = state_31136__$1;
(statearr_31164_31220[(2)] = false);

(statearr_31164_31220[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (28))){
var inst_31106 = (state_31136[(2)]);
var inst_31107 = calc_state.call(null);
var inst_31064 = inst_31107;
var state_31136__$1 = (function (){var statearr_31165 = state_31136;
(statearr_31165[(7)] = inst_31064);

(statearr_31165[(15)] = inst_31106);

return statearr_31165;
})();
var statearr_31166_31221 = state_31136__$1;
(statearr_31166_31221[(2)] = null);

(statearr_31166_31221[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (25))){
var inst_31132 = (state_31136[(2)]);
var state_31136__$1 = state_31136;
var statearr_31167_31222 = state_31136__$1;
(statearr_31167_31222[(2)] = inst_31132);

(statearr_31167_31222[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (34))){
var inst_31130 = (state_31136[(2)]);
var state_31136__$1 = state_31136;
var statearr_31168_31223 = state_31136__$1;
(statearr_31168_31223[(2)] = inst_31130);

(statearr_31168_31223[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (17))){
var state_31136__$1 = state_31136;
var statearr_31169_31224 = state_31136__$1;
(statearr_31169_31224[(2)] = false);

(statearr_31169_31224[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (3))){
var state_31136__$1 = state_31136;
var statearr_31170_31225 = state_31136__$1;
(statearr_31170_31225[(2)] = false);

(statearr_31170_31225[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (12))){
var inst_31134 = (state_31136[(2)]);
var state_31136__$1 = state_31136;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31136__$1,inst_31134);
} else {
if((state_val_31137 === (2))){
var inst_31040 = (state_31136[(8)]);
var inst_31045 = inst_31040.cljs$lang$protocol_mask$partition0$;
var inst_31046 = (inst_31045 & (64));
var inst_31047 = inst_31040.cljs$core$ISeq$;
var inst_31048 = (inst_31046) || (inst_31047);
var state_31136__$1 = state_31136;
if(cljs.core.truth_(inst_31048)){
var statearr_31171_31226 = state_31136__$1;
(statearr_31171_31226[(1)] = (5));

} else {
var statearr_31172_31227 = state_31136__$1;
(statearr_31172_31227[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (23))){
var inst_31095 = (state_31136[(14)]);
var inst_31101 = (inst_31095 == null);
var state_31136__$1 = state_31136;
if(cljs.core.truth_(inst_31101)){
var statearr_31173_31228 = state_31136__$1;
(statearr_31173_31228[(1)] = (26));

} else {
var statearr_31174_31229 = state_31136__$1;
(statearr_31174_31229[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (35))){
var inst_31121 = (state_31136[(2)]);
var state_31136__$1 = state_31136;
if(cljs.core.truth_(inst_31121)){
var statearr_31175_31230 = state_31136__$1;
(statearr_31175_31230[(1)] = (36));

} else {
var statearr_31176_31231 = state_31136__$1;
(statearr_31176_31231[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (19))){
var inst_31064 = (state_31136[(7)]);
var inst_31083 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31064);
var state_31136__$1 = state_31136;
var statearr_31177_31232 = state_31136__$1;
(statearr_31177_31232[(2)] = inst_31083);

(statearr_31177_31232[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (11))){
var inst_31064 = (state_31136[(7)]);
var inst_31068 = (inst_31064 == null);
var inst_31069 = cljs.core.not.call(null,inst_31068);
var state_31136__$1 = state_31136;
if(inst_31069){
var statearr_31178_31233 = state_31136__$1;
(statearr_31178_31233[(1)] = (13));

} else {
var statearr_31179_31234 = state_31136__$1;
(statearr_31179_31234[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (9))){
var inst_31040 = (state_31136[(8)]);
var state_31136__$1 = state_31136;
var statearr_31180_31235 = state_31136__$1;
(statearr_31180_31235[(2)] = inst_31040);

(statearr_31180_31235[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (5))){
var state_31136__$1 = state_31136;
var statearr_31181_31236 = state_31136__$1;
(statearr_31181_31236[(2)] = true);

(statearr_31181_31236[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (14))){
var state_31136__$1 = state_31136;
var statearr_31182_31237 = state_31136__$1;
(statearr_31182_31237[(2)] = false);

(statearr_31182_31237[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (26))){
var inst_31096 = (state_31136[(9)]);
var inst_31103 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_31096);
var state_31136__$1 = state_31136;
var statearr_31183_31238 = state_31136__$1;
(statearr_31183_31238[(2)] = inst_31103);

(statearr_31183_31238[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (16))){
var state_31136__$1 = state_31136;
var statearr_31184_31239 = state_31136__$1;
(statearr_31184_31239[(2)] = true);

(statearr_31184_31239[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (38))){
var inst_31126 = (state_31136[(2)]);
var state_31136__$1 = state_31136;
var statearr_31185_31240 = state_31136__$1;
(statearr_31185_31240[(2)] = inst_31126);

(statearr_31185_31240[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (30))){
var inst_31096 = (state_31136[(9)]);
var inst_31087 = (state_31136[(10)]);
var inst_31088 = (state_31136[(13)]);
var inst_31113 = cljs.core.empty_QMARK_.call(null,inst_31087);
var inst_31114 = inst_31088.call(null,inst_31096);
var inst_31115 = cljs.core.not.call(null,inst_31114);
var inst_31116 = (inst_31113) && (inst_31115);
var state_31136__$1 = state_31136;
var statearr_31186_31241 = state_31136__$1;
(statearr_31186_31241[(2)] = inst_31116);

(statearr_31186_31241[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (10))){
var inst_31040 = (state_31136[(8)]);
var inst_31060 = (state_31136[(2)]);
var inst_31061 = cljs.core.get.call(null,inst_31060,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31062 = cljs.core.get.call(null,inst_31060,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31063 = cljs.core.get.call(null,inst_31060,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31064 = inst_31040;
var state_31136__$1 = (function (){var statearr_31187 = state_31136;
(statearr_31187[(16)] = inst_31061);

(statearr_31187[(17)] = inst_31062);

(statearr_31187[(7)] = inst_31064);

(statearr_31187[(18)] = inst_31063);

return statearr_31187;
})();
var statearr_31188_31242 = state_31136__$1;
(statearr_31188_31242[(2)] = null);

(statearr_31188_31242[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (18))){
var inst_31078 = (state_31136[(2)]);
var state_31136__$1 = state_31136;
var statearr_31189_31243 = state_31136__$1;
(statearr_31189_31243[(2)] = inst_31078);

(statearr_31189_31243[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (37))){
var state_31136__$1 = state_31136;
var statearr_31190_31244 = state_31136__$1;
(statearr_31190_31244[(2)] = null);

(statearr_31190_31244[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31137 === (8))){
var inst_31040 = (state_31136[(8)]);
var inst_31057 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31040);
var state_31136__$1 = state_31136;
var statearr_31191_31245 = state_31136__$1;
(statearr_31191_31245[(2)] = inst_31057);

(statearr_31191_31245[(1)] = (10));


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
});})(c__29436__auto___31199,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__29324__auto__,c__29436__auto___31199,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__29325__auto__ = null;
var cljs$core$async$mix_$_state_machine__29325__auto____0 = (function (){
var statearr_31195 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31195[(0)] = cljs$core$async$mix_$_state_machine__29325__auto__);

(statearr_31195[(1)] = (1));

return statearr_31195;
});
var cljs$core$async$mix_$_state_machine__29325__auto____1 = (function (state_31136){
while(true){
var ret_value__29326__auto__ = (function (){try{while(true){
var result__29327__auto__ = switch__29324__auto__.call(null,state_31136);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29327__auto__;
}
break;
}
}catch (e31196){if((e31196 instanceof Object)){
var ex__29328__auto__ = e31196;
var statearr_31197_31246 = state_31136;
(statearr_31197_31246[(5)] = ex__29328__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31136);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31196;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31247 = state_31136;
state_31136 = G__31247;
continue;
} else {
return ret_value__29326__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29325__auto__ = function(state_31136){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29325__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29325__auto____1.call(this,state_31136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29325__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29325__auto____0;
cljs$core$async$mix_$_state_machine__29325__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29325__auto____1;
return cljs$core$async$mix_$_state_machine__29325__auto__;
})()
;})(switch__29324__auto__,c__29436__auto___31199,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__29438__auto__ = (function (){var statearr_31198 = f__29437__auto__.call(null);
(statearr_31198[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29436__auto___31199);

return statearr_31198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29438__auto__);
});})(c__29436__auto___31199,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args31248 = [];
var len__27064__auto___31251 = arguments.length;
var i__27065__auto___31252 = (0);
while(true){
if((i__27065__auto___31252 < len__27064__auto___31251)){
args31248.push((arguments[i__27065__auto___31252]));

var G__31253 = (i__27065__auto___31252 + (1));
i__27065__auto___31252 = G__31253;
continue;
} else {
}
break;
}

var G__31250 = args31248.length;
switch (G__31250) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31248.length)].join('')));

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
var args31256 = [];
var len__27064__auto___31381 = arguments.length;
var i__27065__auto___31382 = (0);
while(true){
if((i__27065__auto___31382 < len__27064__auto___31381)){
args31256.push((arguments[i__27065__auto___31382]));

var G__31383 = (i__27065__auto___31382 + (1));
i__27065__auto___31382 = G__31383;
continue;
} else {
}
break;
}

var G__31258 = args31256.length;
switch (G__31258) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31256.length)].join('')));

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
return (function (p1__31255_SHARP_){
if(cljs.core.truth_(p1__31255_SHARP_.call(null,topic))){
return p1__31255_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__31255_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__25989__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async31259 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31259 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31260){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31260 = meta31260;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31259.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_31261,meta31260__$1){
var self__ = this;
var _31261__$1 = this;
return (new cljs.core.async.t_cljs$core$async31259(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31260__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31259.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_31261){
var self__ = this;
var _31261__$1 = this;
return self__.meta31260;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31259.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async31259.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31259.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async31259.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31259.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async31259.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31259.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31259.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31260","meta31260",1311175072,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31259.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31259.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31259";

cljs.core.async.t_cljs$core$async31259.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__26595__auto__,writer__26596__auto__,opt__26597__auto__){
return cljs.core._write.call(null,writer__26596__auto__,"cljs.core.async/t_cljs$core$async31259");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async31259 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async31259(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31260){
return (new cljs.core.async.t_cljs$core$async31259(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31260));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async31259(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29436__auto___31385 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29436__auto___31385,mults,ensure_mult,p){
return (function (){
var f__29437__auto__ = (function (){var switch__29324__auto__ = ((function (c__29436__auto___31385,mults,ensure_mult,p){
return (function (state_31333){
var state_val_31334 = (state_31333[(1)]);
if((state_val_31334 === (7))){
var inst_31329 = (state_31333[(2)]);
var state_31333__$1 = state_31333;
var statearr_31335_31386 = state_31333__$1;
(statearr_31335_31386[(2)] = inst_31329);

(statearr_31335_31386[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31334 === (20))){
var state_31333__$1 = state_31333;
var statearr_31336_31387 = state_31333__$1;
(statearr_31336_31387[(2)] = null);

(statearr_31336_31387[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31334 === (1))){
var state_31333__$1 = state_31333;
var statearr_31337_31388 = state_31333__$1;
(statearr_31337_31388[(2)] = null);

(statearr_31337_31388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31334 === (24))){
var inst_31312 = (state_31333[(7)]);
var inst_31321 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_31312);
var state_31333__$1 = state_31333;
var statearr_31338_31389 = state_31333__$1;
(statearr_31338_31389[(2)] = inst_31321);

(statearr_31338_31389[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31334 === (4))){
var inst_31264 = (state_31333[(8)]);
var inst_31264__$1 = (state_31333[(2)]);
var inst_31265 = (inst_31264__$1 == null);
var state_31333__$1 = (function (){var statearr_31339 = state_31333;
(statearr_31339[(8)] = inst_31264__$1);

return statearr_31339;
})();
if(cljs.core.truth_(inst_31265)){
var statearr_31340_31390 = state_31333__$1;
(statearr_31340_31390[(1)] = (5));

} else {
var statearr_31341_31391 = state_31333__$1;
(statearr_31341_31391[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31334 === (15))){
var inst_31306 = (state_31333[(2)]);
var state_31333__$1 = state_31333;
var statearr_31342_31392 = state_31333__$1;
(statearr_31342_31392[(2)] = inst_31306);

(statearr_31342_31392[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31334 === (21))){
var inst_31326 = (state_31333[(2)]);
var state_31333__$1 = (function (){var statearr_31343 = state_31333;
(statearr_31343[(9)] = inst_31326);

return statearr_31343;
})();
var statearr_31344_31393 = state_31333__$1;
(statearr_31344_31393[(2)] = null);

(statearr_31344_31393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31334 === (13))){
var inst_31288 = (state_31333[(10)]);
var inst_31290 = cljs.core.chunked_seq_QMARK_.call(null,inst_31288);
var state_31333__$1 = state_31333;
if(inst_31290){
var statearr_31345_31394 = state_31333__$1;
(statearr_31345_31394[(1)] = (16));

} else {
var statearr_31346_31395 = state_31333__$1;
(statearr_31346_31395[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31334 === (22))){
var inst_31318 = (state_31333[(2)]);
var state_31333__$1 = state_31333;
if(cljs.core.truth_(inst_31318)){
var statearr_31347_31396 = state_31333__$1;
(statearr_31347_31396[(1)] = (23));

} else {
var statearr_31348_31397 = state_31333__$1;
(statearr_31348_31397[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31334 === (6))){
var inst_31264 = (state_31333[(8)]);
var inst_31312 = (state_31333[(7)]);
var inst_31314 = (state_31333[(11)]);
var inst_31312__$1 = topic_fn.call(null,inst_31264);
var inst_31313 = cljs.core.deref.call(null,mults);
var inst_31314__$1 = cljs.core.get.call(null,inst_31313,inst_31312__$1);
var state_31333__$1 = (function (){var statearr_31349 = state_31333;
(statearr_31349[(7)] = inst_31312__$1);

(statearr_31349[(11)] = inst_31314__$1);

return statearr_31349;
})();
if(cljs.core.truth_(inst_31314__$1)){
var statearr_31350_31398 = state_31333__$1;
(statearr_31350_31398[(1)] = (19));

} else {
var statearr_31351_31399 = state_31333__$1;
(statearr_31351_31399[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31334 === (25))){
var inst_31323 = (state_31333[(2)]);
var state_31333__$1 = state_31333;
var statearr_31352_31400 = state_31333__$1;
(statearr_31352_31400[(2)] = inst_31323);

(statearr_31352_31400[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31334 === (17))){
var inst_31288 = (state_31333[(10)]);
var inst_31297 = cljs.core.first.call(null,inst_31288);
var inst_31298 = cljs.core.async.muxch_STAR_.call(null,inst_31297);
var inst_31299 = cljs.core.async.close_BANG_.call(null,inst_31298);
var inst_31300 = cljs.core.next.call(null,inst_31288);
var inst_31274 = inst_31300;
var inst_31275 = null;
var inst_31276 = (0);
var inst_31277 = (0);
var state_31333__$1 = (function (){var statearr_31353 = state_31333;
(statearr_31353[(12)] = inst_31277);

(statearr_31353[(13)] = inst_31274);

(statearr_31353[(14)] = inst_31299);

(statearr_31353[(15)] = inst_31276);

(statearr_31353[(16)] = inst_31275);

return statearr_31353;
})();
var statearr_31354_31401 = state_31333__$1;
(statearr_31354_31401[(2)] = null);

(statearr_31354_31401[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31334 === (3))){
var inst_31331 = (state_31333[(2)]);
var state_31333__$1 = state_31333;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31333__$1,inst_31331);
} else {
if((state_val_31334 === (12))){
var inst_31308 = (state_31333[(2)]);
var state_31333__$1 = state_31333;
var statearr_31355_31402 = state_31333__$1;
(statearr_31355_31402[(2)] = inst_31308);

(statearr_31355_31402[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31334 === (2))){
var state_31333__$1 = state_31333;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31333__$1,(4),ch);
} else {
if((state_val_31334 === (23))){
var state_31333__$1 = state_31333;
var statearr_31356_31403 = state_31333__$1;
(statearr_31356_31403[(2)] = null);

(statearr_31356_31403[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31334 === (19))){
var inst_31264 = (state_31333[(8)]);
var inst_31314 = (state_31333[(11)]);
var inst_31316 = cljs.core.async.muxch_STAR_.call(null,inst_31314);
var state_31333__$1 = state_31333;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31333__$1,(22),inst_31316,inst_31264);
} else {
if((state_val_31334 === (11))){
var inst_31288 = (state_31333[(10)]);
var inst_31274 = (state_31333[(13)]);
var inst_31288__$1 = cljs.core.seq.call(null,inst_31274);
var state_31333__$1 = (function (){var statearr_31357 = state_31333;
(statearr_31357[(10)] = inst_31288__$1);

return statearr_31357;
})();
if(inst_31288__$1){
var statearr_31358_31404 = state_31333__$1;
(statearr_31358_31404[(1)] = (13));

} else {
var statearr_31359_31405 = state_31333__$1;
(statearr_31359_31405[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31334 === (9))){
var inst_31310 = (state_31333[(2)]);
var state_31333__$1 = state_31333;
var statearr_31360_31406 = state_31333__$1;
(statearr_31360_31406[(2)] = inst_31310);

(statearr_31360_31406[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31334 === (5))){
var inst_31271 = cljs.core.deref.call(null,mults);
var inst_31272 = cljs.core.vals.call(null,inst_31271);
var inst_31273 = cljs.core.seq.call(null,inst_31272);
var inst_31274 = inst_31273;
var inst_31275 = null;
var inst_31276 = (0);
var inst_31277 = (0);
var state_31333__$1 = (function (){var statearr_31361 = state_31333;
(statearr_31361[(12)] = inst_31277);

(statearr_31361[(13)] = inst_31274);

(statearr_31361[(15)] = inst_31276);

(statearr_31361[(16)] = inst_31275);

return statearr_31361;
})();
var statearr_31362_31407 = state_31333__$1;
(statearr_31362_31407[(2)] = null);

(statearr_31362_31407[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31334 === (14))){
var state_31333__$1 = state_31333;
var statearr_31366_31408 = state_31333__$1;
(statearr_31366_31408[(2)] = null);

(statearr_31366_31408[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31334 === (16))){
var inst_31288 = (state_31333[(10)]);
var inst_31292 = cljs.core.chunk_first.call(null,inst_31288);
var inst_31293 = cljs.core.chunk_rest.call(null,inst_31288);
var inst_31294 = cljs.core.count.call(null,inst_31292);
var inst_31274 = inst_31293;
var inst_31275 = inst_31292;
var inst_31276 = inst_31294;
var inst_31277 = (0);
var state_31333__$1 = (function (){var statearr_31367 = state_31333;
(statearr_31367[(12)] = inst_31277);

(statearr_31367[(13)] = inst_31274);

(statearr_31367[(15)] = inst_31276);

(statearr_31367[(16)] = inst_31275);

return statearr_31367;
})();
var statearr_31368_31409 = state_31333__$1;
(statearr_31368_31409[(2)] = null);

(statearr_31368_31409[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31334 === (10))){
var inst_31277 = (state_31333[(12)]);
var inst_31274 = (state_31333[(13)]);
var inst_31276 = (state_31333[(15)]);
var inst_31275 = (state_31333[(16)]);
var inst_31282 = cljs.core._nth.call(null,inst_31275,inst_31277);
var inst_31283 = cljs.core.async.muxch_STAR_.call(null,inst_31282);
var inst_31284 = cljs.core.async.close_BANG_.call(null,inst_31283);
var inst_31285 = (inst_31277 + (1));
var tmp31363 = inst_31274;
var tmp31364 = inst_31276;
var tmp31365 = inst_31275;
var inst_31274__$1 = tmp31363;
var inst_31275__$1 = tmp31365;
var inst_31276__$1 = tmp31364;
var inst_31277__$1 = inst_31285;
var state_31333__$1 = (function (){var statearr_31369 = state_31333;
(statearr_31369[(12)] = inst_31277__$1);

(statearr_31369[(13)] = inst_31274__$1);

(statearr_31369[(15)] = inst_31276__$1);

(statearr_31369[(17)] = inst_31284);

(statearr_31369[(16)] = inst_31275__$1);

return statearr_31369;
})();
var statearr_31370_31410 = state_31333__$1;
(statearr_31370_31410[(2)] = null);

(statearr_31370_31410[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31334 === (18))){
var inst_31303 = (state_31333[(2)]);
var state_31333__$1 = state_31333;
var statearr_31371_31411 = state_31333__$1;
(statearr_31371_31411[(2)] = inst_31303);

(statearr_31371_31411[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31334 === (8))){
var inst_31277 = (state_31333[(12)]);
var inst_31276 = (state_31333[(15)]);
var inst_31279 = (inst_31277 < inst_31276);
var inst_31280 = inst_31279;
var state_31333__$1 = state_31333;
if(cljs.core.truth_(inst_31280)){
var statearr_31372_31412 = state_31333__$1;
(statearr_31372_31412[(1)] = (10));

} else {
var statearr_31373_31413 = state_31333__$1;
(statearr_31373_31413[(1)] = (11));

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
});})(c__29436__auto___31385,mults,ensure_mult,p))
;
return ((function (switch__29324__auto__,c__29436__auto___31385,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__29325__auto__ = null;
var cljs$core$async$state_machine__29325__auto____0 = (function (){
var statearr_31377 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31377[(0)] = cljs$core$async$state_machine__29325__auto__);

(statearr_31377[(1)] = (1));

return statearr_31377;
});
var cljs$core$async$state_machine__29325__auto____1 = (function (state_31333){
while(true){
var ret_value__29326__auto__ = (function (){try{while(true){
var result__29327__auto__ = switch__29324__auto__.call(null,state_31333);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29327__auto__;
}
break;
}
}catch (e31378){if((e31378 instanceof Object)){
var ex__29328__auto__ = e31378;
var statearr_31379_31414 = state_31333;
(statearr_31379_31414[(5)] = ex__29328__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31333);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31378;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31415 = state_31333;
state_31333 = G__31415;
continue;
} else {
return ret_value__29326__auto__;
}
break;
}
});
cljs$core$async$state_machine__29325__auto__ = function(state_31333){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29325__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29325__auto____1.call(this,state_31333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29325__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29325__auto____0;
cljs$core$async$state_machine__29325__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29325__auto____1;
return cljs$core$async$state_machine__29325__auto__;
})()
;})(switch__29324__auto__,c__29436__auto___31385,mults,ensure_mult,p))
})();
var state__29438__auto__ = (function (){var statearr_31380 = f__29437__auto__.call(null);
(statearr_31380[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29436__auto___31385);

return statearr_31380;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29438__auto__);
});})(c__29436__auto___31385,mults,ensure_mult,p))
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
var args31416 = [];
var len__27064__auto___31419 = arguments.length;
var i__27065__auto___31420 = (0);
while(true){
if((i__27065__auto___31420 < len__27064__auto___31419)){
args31416.push((arguments[i__27065__auto___31420]));

var G__31421 = (i__27065__auto___31420 + (1));
i__27065__auto___31420 = G__31421;
continue;
} else {
}
break;
}

var G__31418 = args31416.length;
switch (G__31418) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31416.length)].join('')));

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
var args31423 = [];
var len__27064__auto___31426 = arguments.length;
var i__27065__auto___31427 = (0);
while(true){
if((i__27065__auto___31427 < len__27064__auto___31426)){
args31423.push((arguments[i__27065__auto___31427]));

var G__31428 = (i__27065__auto___31427 + (1));
i__27065__auto___31427 = G__31428;
continue;
} else {
}
break;
}

var G__31425 = args31423.length;
switch (G__31425) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31423.length)].join('')));

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
var args31430 = [];
var len__27064__auto___31501 = arguments.length;
var i__27065__auto___31502 = (0);
while(true){
if((i__27065__auto___31502 < len__27064__auto___31501)){
args31430.push((arguments[i__27065__auto___31502]));

var G__31503 = (i__27065__auto___31502 + (1));
i__27065__auto___31502 = G__31503;
continue;
} else {
}
break;
}

var G__31432 = args31430.length;
switch (G__31432) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31430.length)].join('')));

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
var c__29436__auto___31506 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29436__auto___31506,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__29437__auto__ = (function (){var switch__29324__auto__ = ((function (c__29436__auto___31506,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_31471){
var state_val_31472 = (state_31471[(1)]);
if((state_val_31472 === (7))){
var state_31471__$1 = state_31471;
var statearr_31473_31507 = state_31471__$1;
(statearr_31473_31507[(2)] = null);

(statearr_31473_31507[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31472 === (1))){
var state_31471__$1 = state_31471;
var statearr_31474_31508 = state_31471__$1;
(statearr_31474_31508[(2)] = null);

(statearr_31474_31508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31472 === (4))){
var inst_31435 = (state_31471[(7)]);
var inst_31437 = (inst_31435 < cnt);
var state_31471__$1 = state_31471;
if(cljs.core.truth_(inst_31437)){
var statearr_31475_31509 = state_31471__$1;
(statearr_31475_31509[(1)] = (6));

} else {
var statearr_31476_31510 = state_31471__$1;
(statearr_31476_31510[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31472 === (15))){
var inst_31467 = (state_31471[(2)]);
var state_31471__$1 = state_31471;
var statearr_31477_31511 = state_31471__$1;
(statearr_31477_31511[(2)] = inst_31467);

(statearr_31477_31511[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31472 === (13))){
var inst_31460 = cljs.core.async.close_BANG_.call(null,out);
var state_31471__$1 = state_31471;
var statearr_31478_31512 = state_31471__$1;
(statearr_31478_31512[(2)] = inst_31460);

(statearr_31478_31512[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31472 === (6))){
var state_31471__$1 = state_31471;
var statearr_31479_31513 = state_31471__$1;
(statearr_31479_31513[(2)] = null);

(statearr_31479_31513[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31472 === (3))){
var inst_31469 = (state_31471[(2)]);
var state_31471__$1 = state_31471;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31471__$1,inst_31469);
} else {
if((state_val_31472 === (12))){
var inst_31457 = (state_31471[(8)]);
var inst_31457__$1 = (state_31471[(2)]);
var inst_31458 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_31457__$1);
var state_31471__$1 = (function (){var statearr_31480 = state_31471;
(statearr_31480[(8)] = inst_31457__$1);

return statearr_31480;
})();
if(cljs.core.truth_(inst_31458)){
var statearr_31481_31514 = state_31471__$1;
(statearr_31481_31514[(1)] = (13));

} else {
var statearr_31482_31515 = state_31471__$1;
(statearr_31482_31515[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31472 === (2))){
var inst_31434 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_31435 = (0);
var state_31471__$1 = (function (){var statearr_31483 = state_31471;
(statearr_31483[(7)] = inst_31435);

(statearr_31483[(9)] = inst_31434);

return statearr_31483;
})();
var statearr_31484_31516 = state_31471__$1;
(statearr_31484_31516[(2)] = null);

(statearr_31484_31516[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31472 === (11))){
var inst_31435 = (state_31471[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31471,(10),Object,null,(9));
var inst_31444 = chs__$1.call(null,inst_31435);
var inst_31445 = done.call(null,inst_31435);
var inst_31446 = cljs.core.async.take_BANG_.call(null,inst_31444,inst_31445);
var state_31471__$1 = state_31471;
var statearr_31485_31517 = state_31471__$1;
(statearr_31485_31517[(2)] = inst_31446);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31471__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31472 === (9))){
var inst_31435 = (state_31471[(7)]);
var inst_31448 = (state_31471[(2)]);
var inst_31449 = (inst_31435 + (1));
var inst_31435__$1 = inst_31449;
var state_31471__$1 = (function (){var statearr_31486 = state_31471;
(statearr_31486[(7)] = inst_31435__$1);

(statearr_31486[(10)] = inst_31448);

return statearr_31486;
})();
var statearr_31487_31518 = state_31471__$1;
(statearr_31487_31518[(2)] = null);

(statearr_31487_31518[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31472 === (5))){
var inst_31455 = (state_31471[(2)]);
var state_31471__$1 = (function (){var statearr_31488 = state_31471;
(statearr_31488[(11)] = inst_31455);

return statearr_31488;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31471__$1,(12),dchan);
} else {
if((state_val_31472 === (14))){
var inst_31457 = (state_31471[(8)]);
var inst_31462 = cljs.core.apply.call(null,f,inst_31457);
var state_31471__$1 = state_31471;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31471__$1,(16),out,inst_31462);
} else {
if((state_val_31472 === (16))){
var inst_31464 = (state_31471[(2)]);
var state_31471__$1 = (function (){var statearr_31489 = state_31471;
(statearr_31489[(12)] = inst_31464);

return statearr_31489;
})();
var statearr_31490_31520 = state_31471__$1;
(statearr_31490_31520[(2)] = null);

(statearr_31490_31520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31472 === (10))){
var inst_31439 = (state_31471[(2)]);
var inst_31440 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_31471__$1 = (function (){var statearr_31491 = state_31471;
(statearr_31491[(13)] = inst_31439);

return statearr_31491;
})();
var statearr_31492_31521 = state_31471__$1;
(statearr_31492_31521[(2)] = inst_31440);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31471__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31472 === (8))){
var inst_31453 = (state_31471[(2)]);
var state_31471__$1 = state_31471;
var statearr_31493_31522 = state_31471__$1;
(statearr_31493_31522[(2)] = inst_31453);

(statearr_31493_31522[(1)] = (5));


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
});})(c__29436__auto___31506,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__29324__auto__,c__29436__auto___31506,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__29325__auto__ = null;
var cljs$core$async$state_machine__29325__auto____0 = (function (){
var statearr_31497 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31497[(0)] = cljs$core$async$state_machine__29325__auto__);

(statearr_31497[(1)] = (1));

return statearr_31497;
});
var cljs$core$async$state_machine__29325__auto____1 = (function (state_31471){
while(true){
var ret_value__29326__auto__ = (function (){try{while(true){
var result__29327__auto__ = switch__29324__auto__.call(null,state_31471);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29327__auto__;
}
break;
}
}catch (e31498){if((e31498 instanceof Object)){
var ex__29328__auto__ = e31498;
var statearr_31499_31523 = state_31471;
(statearr_31499_31523[(5)] = ex__29328__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31471);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31498;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31524 = state_31471;
state_31471 = G__31524;
continue;
} else {
return ret_value__29326__auto__;
}
break;
}
});
cljs$core$async$state_machine__29325__auto__ = function(state_31471){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29325__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29325__auto____1.call(this,state_31471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29325__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29325__auto____0;
cljs$core$async$state_machine__29325__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29325__auto____1;
return cljs$core$async$state_machine__29325__auto__;
})()
;})(switch__29324__auto__,c__29436__auto___31506,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__29438__auto__ = (function (){var statearr_31500 = f__29437__auto__.call(null);
(statearr_31500[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29436__auto___31506);

return statearr_31500;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29438__auto__);
});})(c__29436__auto___31506,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args31526 = [];
var len__27064__auto___31584 = arguments.length;
var i__27065__auto___31585 = (0);
while(true){
if((i__27065__auto___31585 < len__27064__auto___31584)){
args31526.push((arguments[i__27065__auto___31585]));

var G__31586 = (i__27065__auto___31585 + (1));
i__27065__auto___31585 = G__31586;
continue;
} else {
}
break;
}

var G__31528 = args31526.length;
switch (G__31528) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31526.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29436__auto___31588 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29436__auto___31588,out){
return (function (){
var f__29437__auto__ = (function (){var switch__29324__auto__ = ((function (c__29436__auto___31588,out){
return (function (state_31560){
var state_val_31561 = (state_31560[(1)]);
if((state_val_31561 === (7))){
var inst_31540 = (state_31560[(7)]);
var inst_31539 = (state_31560[(8)]);
var inst_31539__$1 = (state_31560[(2)]);
var inst_31540__$1 = cljs.core.nth.call(null,inst_31539__$1,(0),null);
var inst_31541 = cljs.core.nth.call(null,inst_31539__$1,(1),null);
var inst_31542 = (inst_31540__$1 == null);
var state_31560__$1 = (function (){var statearr_31562 = state_31560;
(statearr_31562[(7)] = inst_31540__$1);

(statearr_31562[(9)] = inst_31541);

(statearr_31562[(8)] = inst_31539__$1);

return statearr_31562;
})();
if(cljs.core.truth_(inst_31542)){
var statearr_31563_31589 = state_31560__$1;
(statearr_31563_31589[(1)] = (8));

} else {
var statearr_31564_31590 = state_31560__$1;
(statearr_31564_31590[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31561 === (1))){
var inst_31529 = cljs.core.vec.call(null,chs);
var inst_31530 = inst_31529;
var state_31560__$1 = (function (){var statearr_31565 = state_31560;
(statearr_31565[(10)] = inst_31530);

return statearr_31565;
})();
var statearr_31566_31591 = state_31560__$1;
(statearr_31566_31591[(2)] = null);

(statearr_31566_31591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31561 === (4))){
var inst_31530 = (state_31560[(10)]);
var state_31560__$1 = state_31560;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31560__$1,(7),inst_31530);
} else {
if((state_val_31561 === (6))){
var inst_31556 = (state_31560[(2)]);
var state_31560__$1 = state_31560;
var statearr_31567_31592 = state_31560__$1;
(statearr_31567_31592[(2)] = inst_31556);

(statearr_31567_31592[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31561 === (3))){
var inst_31558 = (state_31560[(2)]);
var state_31560__$1 = state_31560;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31560__$1,inst_31558);
} else {
if((state_val_31561 === (2))){
var inst_31530 = (state_31560[(10)]);
var inst_31532 = cljs.core.count.call(null,inst_31530);
var inst_31533 = (inst_31532 > (0));
var state_31560__$1 = state_31560;
if(cljs.core.truth_(inst_31533)){
var statearr_31569_31593 = state_31560__$1;
(statearr_31569_31593[(1)] = (4));

} else {
var statearr_31570_31594 = state_31560__$1;
(statearr_31570_31594[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31561 === (11))){
var inst_31530 = (state_31560[(10)]);
var inst_31549 = (state_31560[(2)]);
var tmp31568 = inst_31530;
var inst_31530__$1 = tmp31568;
var state_31560__$1 = (function (){var statearr_31571 = state_31560;
(statearr_31571[(11)] = inst_31549);

(statearr_31571[(10)] = inst_31530__$1);

return statearr_31571;
})();
var statearr_31572_31595 = state_31560__$1;
(statearr_31572_31595[(2)] = null);

(statearr_31572_31595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31561 === (9))){
var inst_31540 = (state_31560[(7)]);
var state_31560__$1 = state_31560;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31560__$1,(11),out,inst_31540);
} else {
if((state_val_31561 === (5))){
var inst_31554 = cljs.core.async.close_BANG_.call(null,out);
var state_31560__$1 = state_31560;
var statearr_31573_31596 = state_31560__$1;
(statearr_31573_31596[(2)] = inst_31554);

(statearr_31573_31596[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31561 === (10))){
var inst_31552 = (state_31560[(2)]);
var state_31560__$1 = state_31560;
var statearr_31574_31597 = state_31560__$1;
(statearr_31574_31597[(2)] = inst_31552);

(statearr_31574_31597[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31561 === (8))){
var inst_31540 = (state_31560[(7)]);
var inst_31541 = (state_31560[(9)]);
var inst_31530 = (state_31560[(10)]);
var inst_31539 = (state_31560[(8)]);
var inst_31544 = (function (){var cs = inst_31530;
var vec__31535 = inst_31539;
var v = inst_31540;
var c = inst_31541;
return ((function (cs,vec__31535,v,c,inst_31540,inst_31541,inst_31530,inst_31539,state_val_31561,c__29436__auto___31588,out){
return (function (p1__31525_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__31525_SHARP_);
});
;})(cs,vec__31535,v,c,inst_31540,inst_31541,inst_31530,inst_31539,state_val_31561,c__29436__auto___31588,out))
})();
var inst_31545 = cljs.core.filterv.call(null,inst_31544,inst_31530);
var inst_31530__$1 = inst_31545;
var state_31560__$1 = (function (){var statearr_31575 = state_31560;
(statearr_31575[(10)] = inst_31530__$1);

return statearr_31575;
})();
var statearr_31576_31598 = state_31560__$1;
(statearr_31576_31598[(2)] = null);

(statearr_31576_31598[(1)] = (2));


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
});})(c__29436__auto___31588,out))
;
return ((function (switch__29324__auto__,c__29436__auto___31588,out){
return (function() {
var cljs$core$async$state_machine__29325__auto__ = null;
var cljs$core$async$state_machine__29325__auto____0 = (function (){
var statearr_31580 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31580[(0)] = cljs$core$async$state_machine__29325__auto__);

(statearr_31580[(1)] = (1));

return statearr_31580;
});
var cljs$core$async$state_machine__29325__auto____1 = (function (state_31560){
while(true){
var ret_value__29326__auto__ = (function (){try{while(true){
var result__29327__auto__ = switch__29324__auto__.call(null,state_31560);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29327__auto__;
}
break;
}
}catch (e31581){if((e31581 instanceof Object)){
var ex__29328__auto__ = e31581;
var statearr_31582_31599 = state_31560;
(statearr_31582_31599[(5)] = ex__29328__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31560);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31581;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31600 = state_31560;
state_31560 = G__31600;
continue;
} else {
return ret_value__29326__auto__;
}
break;
}
});
cljs$core$async$state_machine__29325__auto__ = function(state_31560){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29325__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29325__auto____1.call(this,state_31560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29325__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29325__auto____0;
cljs$core$async$state_machine__29325__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29325__auto____1;
return cljs$core$async$state_machine__29325__auto__;
})()
;})(switch__29324__auto__,c__29436__auto___31588,out))
})();
var state__29438__auto__ = (function (){var statearr_31583 = f__29437__auto__.call(null);
(statearr_31583[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29436__auto___31588);

return statearr_31583;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29438__auto__);
});})(c__29436__auto___31588,out))
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
var args31601 = [];
var len__27064__auto___31650 = arguments.length;
var i__27065__auto___31651 = (0);
while(true){
if((i__27065__auto___31651 < len__27064__auto___31650)){
args31601.push((arguments[i__27065__auto___31651]));

var G__31652 = (i__27065__auto___31651 + (1));
i__27065__auto___31651 = G__31652;
continue;
} else {
}
break;
}

var G__31603 = args31601.length;
switch (G__31603) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31601.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29436__auto___31654 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29436__auto___31654,out){
return (function (){
var f__29437__auto__ = (function (){var switch__29324__auto__ = ((function (c__29436__auto___31654,out){
return (function (state_31627){
var state_val_31628 = (state_31627[(1)]);
if((state_val_31628 === (7))){
var inst_31609 = (state_31627[(7)]);
var inst_31609__$1 = (state_31627[(2)]);
var inst_31610 = (inst_31609__$1 == null);
var inst_31611 = cljs.core.not.call(null,inst_31610);
var state_31627__$1 = (function (){var statearr_31629 = state_31627;
(statearr_31629[(7)] = inst_31609__$1);

return statearr_31629;
})();
if(inst_31611){
var statearr_31630_31655 = state_31627__$1;
(statearr_31630_31655[(1)] = (8));

} else {
var statearr_31631_31656 = state_31627__$1;
(statearr_31631_31656[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31628 === (1))){
var inst_31604 = (0);
var state_31627__$1 = (function (){var statearr_31632 = state_31627;
(statearr_31632[(8)] = inst_31604);

return statearr_31632;
})();
var statearr_31633_31657 = state_31627__$1;
(statearr_31633_31657[(2)] = null);

(statearr_31633_31657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31628 === (4))){
var state_31627__$1 = state_31627;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31627__$1,(7),ch);
} else {
if((state_val_31628 === (6))){
var inst_31622 = (state_31627[(2)]);
var state_31627__$1 = state_31627;
var statearr_31634_31658 = state_31627__$1;
(statearr_31634_31658[(2)] = inst_31622);

(statearr_31634_31658[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31628 === (3))){
var inst_31624 = (state_31627[(2)]);
var inst_31625 = cljs.core.async.close_BANG_.call(null,out);
var state_31627__$1 = (function (){var statearr_31635 = state_31627;
(statearr_31635[(9)] = inst_31624);

return statearr_31635;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31627__$1,inst_31625);
} else {
if((state_val_31628 === (2))){
var inst_31604 = (state_31627[(8)]);
var inst_31606 = (inst_31604 < n);
var state_31627__$1 = state_31627;
if(cljs.core.truth_(inst_31606)){
var statearr_31636_31659 = state_31627__$1;
(statearr_31636_31659[(1)] = (4));

} else {
var statearr_31637_31660 = state_31627__$1;
(statearr_31637_31660[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31628 === (11))){
var inst_31604 = (state_31627[(8)]);
var inst_31614 = (state_31627[(2)]);
var inst_31615 = (inst_31604 + (1));
var inst_31604__$1 = inst_31615;
var state_31627__$1 = (function (){var statearr_31638 = state_31627;
(statearr_31638[(10)] = inst_31614);

(statearr_31638[(8)] = inst_31604__$1);

return statearr_31638;
})();
var statearr_31639_31661 = state_31627__$1;
(statearr_31639_31661[(2)] = null);

(statearr_31639_31661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31628 === (9))){
var state_31627__$1 = state_31627;
var statearr_31640_31662 = state_31627__$1;
(statearr_31640_31662[(2)] = null);

(statearr_31640_31662[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31628 === (5))){
var state_31627__$1 = state_31627;
var statearr_31641_31663 = state_31627__$1;
(statearr_31641_31663[(2)] = null);

(statearr_31641_31663[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31628 === (10))){
var inst_31619 = (state_31627[(2)]);
var state_31627__$1 = state_31627;
var statearr_31642_31664 = state_31627__$1;
(statearr_31642_31664[(2)] = inst_31619);

(statearr_31642_31664[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31628 === (8))){
var inst_31609 = (state_31627[(7)]);
var state_31627__$1 = state_31627;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31627__$1,(11),out,inst_31609);
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
});})(c__29436__auto___31654,out))
;
return ((function (switch__29324__auto__,c__29436__auto___31654,out){
return (function() {
var cljs$core$async$state_machine__29325__auto__ = null;
var cljs$core$async$state_machine__29325__auto____0 = (function (){
var statearr_31646 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31646[(0)] = cljs$core$async$state_machine__29325__auto__);

(statearr_31646[(1)] = (1));

return statearr_31646;
});
var cljs$core$async$state_machine__29325__auto____1 = (function (state_31627){
while(true){
var ret_value__29326__auto__ = (function (){try{while(true){
var result__29327__auto__ = switch__29324__auto__.call(null,state_31627);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29327__auto__;
}
break;
}
}catch (e31647){if((e31647 instanceof Object)){
var ex__29328__auto__ = e31647;
var statearr_31648_31665 = state_31627;
(statearr_31648_31665[(5)] = ex__29328__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31627);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31647;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31666 = state_31627;
state_31627 = G__31666;
continue;
} else {
return ret_value__29326__auto__;
}
break;
}
});
cljs$core$async$state_machine__29325__auto__ = function(state_31627){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29325__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29325__auto____1.call(this,state_31627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29325__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29325__auto____0;
cljs$core$async$state_machine__29325__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29325__auto____1;
return cljs$core$async$state_machine__29325__auto__;
})()
;})(switch__29324__auto__,c__29436__auto___31654,out))
})();
var state__29438__auto__ = (function (){var statearr_31649 = f__29437__auto__.call(null);
(statearr_31649[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29436__auto___31654);

return statearr_31649;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29438__auto__);
});})(c__29436__auto___31654,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async31674 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31674 = (function (map_LT_,f,ch,meta31675){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta31675 = meta31675;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31674.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31676,meta31675__$1){
var self__ = this;
var _31676__$1 = this;
return (new cljs.core.async.t_cljs$core$async31674(self__.map_LT_,self__.f,self__.ch,meta31675__$1));
});

cljs.core.async.t_cljs$core$async31674.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31676){
var self__ = this;
var _31676__$1 = this;
return self__.meta31675;
});

cljs.core.async.t_cljs$core$async31674.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async31674.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31674.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31674.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async31674.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async31677 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31677 = (function (map_LT_,f,ch,meta31675,_,fn1,meta31678){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta31675 = meta31675;
this._ = _;
this.fn1 = fn1;
this.meta31678 = meta31678;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31677.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_31679,meta31678__$1){
var self__ = this;
var _31679__$1 = this;
return (new cljs.core.async.t_cljs$core$async31677(self__.map_LT_,self__.f,self__.ch,self__.meta31675,self__._,self__.fn1,meta31678__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async31677.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_31679){
var self__ = this;
var _31679__$1 = this;
return self__.meta31678;
});})(___$1))
;

cljs.core.async.t_cljs$core$async31677.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async31677.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31677.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async31677.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__31667_SHARP_){
return f1.call(null,(((p1__31667_SHARP_ == null))?null:self__.f.call(null,p1__31667_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async31677.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31675","meta31675",1512463763,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31674","cljs.core.async/t_cljs$core$async31674",-1866753002,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31678","meta31678",-1855026730,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31677.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31677.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31677";

cljs.core.async.t_cljs$core$async31677.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__26595__auto__,writer__26596__auto__,opt__26597__auto__){
return cljs.core._write.call(null,writer__26596__auto__,"cljs.core.async/t_cljs$core$async31677");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async31677 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31677(map_LT___$1,f__$1,ch__$1,meta31675__$1,___$2,fn1__$1,meta31678){
return (new cljs.core.async.t_cljs$core$async31677(map_LT___$1,f__$1,ch__$1,meta31675__$1,___$2,fn1__$1,meta31678));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async31677(self__.map_LT_,self__.f,self__.ch,self__.meta31675,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async31674.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async31674.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async31674.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31675","meta31675",1512463763,null)], null);
});

cljs.core.async.t_cljs$core$async31674.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31674.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31674";

cljs.core.async.t_cljs$core$async31674.cljs$lang$ctorPrWriter = (function (this__26595__auto__,writer__26596__auto__,opt__26597__auto__){
return cljs.core._write.call(null,writer__26596__auto__,"cljs.core.async/t_cljs$core$async31674");
});

cljs.core.async.__GT_t_cljs$core$async31674 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31674(map_LT___$1,f__$1,ch__$1,meta31675){
return (new cljs.core.async.t_cljs$core$async31674(map_LT___$1,f__$1,ch__$1,meta31675));
});

}

return (new cljs.core.async.t_cljs$core$async31674(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async31683 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31683 = (function (map_GT_,f,ch,meta31684){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta31684 = meta31684;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31683.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31685,meta31684__$1){
var self__ = this;
var _31685__$1 = this;
return (new cljs.core.async.t_cljs$core$async31683(self__.map_GT_,self__.f,self__.ch,meta31684__$1));
});

cljs.core.async.t_cljs$core$async31683.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31685){
var self__ = this;
var _31685__$1 = this;
return self__.meta31684;
});

cljs.core.async.t_cljs$core$async31683.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async31683.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31683.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async31683.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31683.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async31683.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async31683.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31684","meta31684",1744681749,null)], null);
});

cljs.core.async.t_cljs$core$async31683.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31683.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31683";

cljs.core.async.t_cljs$core$async31683.cljs$lang$ctorPrWriter = (function (this__26595__auto__,writer__26596__auto__,opt__26597__auto__){
return cljs.core._write.call(null,writer__26596__auto__,"cljs.core.async/t_cljs$core$async31683");
});

cljs.core.async.__GT_t_cljs$core$async31683 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31683(map_GT___$1,f__$1,ch__$1,meta31684){
return (new cljs.core.async.t_cljs$core$async31683(map_GT___$1,f__$1,ch__$1,meta31684));
});

}

return (new cljs.core.async.t_cljs$core$async31683(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async31689 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31689 = (function (filter_GT_,p,ch,meta31690){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta31690 = meta31690;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31689.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31691,meta31690__$1){
var self__ = this;
var _31691__$1 = this;
return (new cljs.core.async.t_cljs$core$async31689(self__.filter_GT_,self__.p,self__.ch,meta31690__$1));
});

cljs.core.async.t_cljs$core$async31689.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31691){
var self__ = this;
var _31691__$1 = this;
return self__.meta31690;
});

cljs.core.async.t_cljs$core$async31689.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async31689.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31689.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31689.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async31689.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31689.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async31689.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async31689.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31690","meta31690",-336314633,null)], null);
});

cljs.core.async.t_cljs$core$async31689.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31689.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31689";

cljs.core.async.t_cljs$core$async31689.cljs$lang$ctorPrWriter = (function (this__26595__auto__,writer__26596__auto__,opt__26597__auto__){
return cljs.core._write.call(null,writer__26596__auto__,"cljs.core.async/t_cljs$core$async31689");
});

cljs.core.async.__GT_t_cljs$core$async31689 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31689(filter_GT___$1,p__$1,ch__$1,meta31690){
return (new cljs.core.async.t_cljs$core$async31689(filter_GT___$1,p__$1,ch__$1,meta31690));
});

}

return (new cljs.core.async.t_cljs$core$async31689(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args31692 = [];
var len__27064__auto___31736 = arguments.length;
var i__27065__auto___31737 = (0);
while(true){
if((i__27065__auto___31737 < len__27064__auto___31736)){
args31692.push((arguments[i__27065__auto___31737]));

var G__31738 = (i__27065__auto___31737 + (1));
i__27065__auto___31737 = G__31738;
continue;
} else {
}
break;
}

var G__31694 = args31692.length;
switch (G__31694) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31692.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29436__auto___31740 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29436__auto___31740,out){
return (function (){
var f__29437__auto__ = (function (){var switch__29324__auto__ = ((function (c__29436__auto___31740,out){
return (function (state_31715){
var state_val_31716 = (state_31715[(1)]);
if((state_val_31716 === (7))){
var inst_31711 = (state_31715[(2)]);
var state_31715__$1 = state_31715;
var statearr_31717_31741 = state_31715__$1;
(statearr_31717_31741[(2)] = inst_31711);

(statearr_31717_31741[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31716 === (1))){
var state_31715__$1 = state_31715;
var statearr_31718_31742 = state_31715__$1;
(statearr_31718_31742[(2)] = null);

(statearr_31718_31742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31716 === (4))){
var inst_31697 = (state_31715[(7)]);
var inst_31697__$1 = (state_31715[(2)]);
var inst_31698 = (inst_31697__$1 == null);
var state_31715__$1 = (function (){var statearr_31719 = state_31715;
(statearr_31719[(7)] = inst_31697__$1);

return statearr_31719;
})();
if(cljs.core.truth_(inst_31698)){
var statearr_31720_31743 = state_31715__$1;
(statearr_31720_31743[(1)] = (5));

} else {
var statearr_31721_31744 = state_31715__$1;
(statearr_31721_31744[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31716 === (6))){
var inst_31697 = (state_31715[(7)]);
var inst_31702 = p.call(null,inst_31697);
var state_31715__$1 = state_31715;
if(cljs.core.truth_(inst_31702)){
var statearr_31722_31745 = state_31715__$1;
(statearr_31722_31745[(1)] = (8));

} else {
var statearr_31723_31746 = state_31715__$1;
(statearr_31723_31746[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31716 === (3))){
var inst_31713 = (state_31715[(2)]);
var state_31715__$1 = state_31715;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31715__$1,inst_31713);
} else {
if((state_val_31716 === (2))){
var state_31715__$1 = state_31715;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31715__$1,(4),ch);
} else {
if((state_val_31716 === (11))){
var inst_31705 = (state_31715[(2)]);
var state_31715__$1 = state_31715;
var statearr_31724_31747 = state_31715__$1;
(statearr_31724_31747[(2)] = inst_31705);

(statearr_31724_31747[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31716 === (9))){
var state_31715__$1 = state_31715;
var statearr_31725_31748 = state_31715__$1;
(statearr_31725_31748[(2)] = null);

(statearr_31725_31748[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31716 === (5))){
var inst_31700 = cljs.core.async.close_BANG_.call(null,out);
var state_31715__$1 = state_31715;
var statearr_31726_31749 = state_31715__$1;
(statearr_31726_31749[(2)] = inst_31700);

(statearr_31726_31749[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31716 === (10))){
var inst_31708 = (state_31715[(2)]);
var state_31715__$1 = (function (){var statearr_31727 = state_31715;
(statearr_31727[(8)] = inst_31708);

return statearr_31727;
})();
var statearr_31728_31750 = state_31715__$1;
(statearr_31728_31750[(2)] = null);

(statearr_31728_31750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31716 === (8))){
var inst_31697 = (state_31715[(7)]);
var state_31715__$1 = state_31715;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31715__$1,(11),out,inst_31697);
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
});})(c__29436__auto___31740,out))
;
return ((function (switch__29324__auto__,c__29436__auto___31740,out){
return (function() {
var cljs$core$async$state_machine__29325__auto__ = null;
var cljs$core$async$state_machine__29325__auto____0 = (function (){
var statearr_31732 = [null,null,null,null,null,null,null,null,null];
(statearr_31732[(0)] = cljs$core$async$state_machine__29325__auto__);

(statearr_31732[(1)] = (1));

return statearr_31732;
});
var cljs$core$async$state_machine__29325__auto____1 = (function (state_31715){
while(true){
var ret_value__29326__auto__ = (function (){try{while(true){
var result__29327__auto__ = switch__29324__auto__.call(null,state_31715);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29327__auto__;
}
break;
}
}catch (e31733){if((e31733 instanceof Object)){
var ex__29328__auto__ = e31733;
var statearr_31734_31751 = state_31715;
(statearr_31734_31751[(5)] = ex__29328__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31715);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31733;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31752 = state_31715;
state_31715 = G__31752;
continue;
} else {
return ret_value__29326__auto__;
}
break;
}
});
cljs$core$async$state_machine__29325__auto__ = function(state_31715){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29325__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29325__auto____1.call(this,state_31715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29325__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29325__auto____0;
cljs$core$async$state_machine__29325__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29325__auto____1;
return cljs$core$async$state_machine__29325__auto__;
})()
;})(switch__29324__auto__,c__29436__auto___31740,out))
})();
var state__29438__auto__ = (function (){var statearr_31735 = f__29437__auto__.call(null);
(statearr_31735[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29436__auto___31740);

return statearr_31735;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29438__auto__);
});})(c__29436__auto___31740,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args31753 = [];
var len__27064__auto___31756 = arguments.length;
var i__27065__auto___31757 = (0);
while(true){
if((i__27065__auto___31757 < len__27064__auto___31756)){
args31753.push((arguments[i__27065__auto___31757]));

var G__31758 = (i__27065__auto___31757 + (1));
i__27065__auto___31757 = G__31758;
continue;
} else {
}
break;
}

var G__31755 = args31753.length;
switch (G__31755) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31753.length)].join('')));

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
var c__29436__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29436__auto__){
return (function (){
var f__29437__auto__ = (function (){var switch__29324__auto__ = ((function (c__29436__auto__){
return (function (state_31925){
var state_val_31926 = (state_31925[(1)]);
if((state_val_31926 === (7))){
var inst_31921 = (state_31925[(2)]);
var state_31925__$1 = state_31925;
var statearr_31927_31968 = state_31925__$1;
(statearr_31927_31968[(2)] = inst_31921);

(statearr_31927_31968[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31926 === (20))){
var inst_31891 = (state_31925[(7)]);
var inst_31902 = (state_31925[(2)]);
var inst_31903 = cljs.core.next.call(null,inst_31891);
var inst_31877 = inst_31903;
var inst_31878 = null;
var inst_31879 = (0);
var inst_31880 = (0);
var state_31925__$1 = (function (){var statearr_31928 = state_31925;
(statearr_31928[(8)] = inst_31879);

(statearr_31928[(9)] = inst_31902);

(statearr_31928[(10)] = inst_31880);

(statearr_31928[(11)] = inst_31878);

(statearr_31928[(12)] = inst_31877);

return statearr_31928;
})();
var statearr_31929_31969 = state_31925__$1;
(statearr_31929_31969[(2)] = null);

(statearr_31929_31969[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31926 === (1))){
var state_31925__$1 = state_31925;
var statearr_31930_31970 = state_31925__$1;
(statearr_31930_31970[(2)] = null);

(statearr_31930_31970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31926 === (4))){
var inst_31866 = (state_31925[(13)]);
var inst_31866__$1 = (state_31925[(2)]);
var inst_31867 = (inst_31866__$1 == null);
var state_31925__$1 = (function (){var statearr_31931 = state_31925;
(statearr_31931[(13)] = inst_31866__$1);

return statearr_31931;
})();
if(cljs.core.truth_(inst_31867)){
var statearr_31932_31971 = state_31925__$1;
(statearr_31932_31971[(1)] = (5));

} else {
var statearr_31933_31972 = state_31925__$1;
(statearr_31933_31972[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31926 === (15))){
var state_31925__$1 = state_31925;
var statearr_31937_31973 = state_31925__$1;
(statearr_31937_31973[(2)] = null);

(statearr_31937_31973[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31926 === (21))){
var state_31925__$1 = state_31925;
var statearr_31938_31974 = state_31925__$1;
(statearr_31938_31974[(2)] = null);

(statearr_31938_31974[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31926 === (13))){
var inst_31879 = (state_31925[(8)]);
var inst_31880 = (state_31925[(10)]);
var inst_31878 = (state_31925[(11)]);
var inst_31877 = (state_31925[(12)]);
var inst_31887 = (state_31925[(2)]);
var inst_31888 = (inst_31880 + (1));
var tmp31934 = inst_31879;
var tmp31935 = inst_31878;
var tmp31936 = inst_31877;
var inst_31877__$1 = tmp31936;
var inst_31878__$1 = tmp31935;
var inst_31879__$1 = tmp31934;
var inst_31880__$1 = inst_31888;
var state_31925__$1 = (function (){var statearr_31939 = state_31925;
(statearr_31939[(8)] = inst_31879__$1);

(statearr_31939[(10)] = inst_31880__$1);

(statearr_31939[(11)] = inst_31878__$1);

(statearr_31939[(12)] = inst_31877__$1);

(statearr_31939[(14)] = inst_31887);

return statearr_31939;
})();
var statearr_31940_31975 = state_31925__$1;
(statearr_31940_31975[(2)] = null);

(statearr_31940_31975[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31926 === (22))){
var state_31925__$1 = state_31925;
var statearr_31941_31976 = state_31925__$1;
(statearr_31941_31976[(2)] = null);

(statearr_31941_31976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31926 === (6))){
var inst_31866 = (state_31925[(13)]);
var inst_31875 = f.call(null,inst_31866);
var inst_31876 = cljs.core.seq.call(null,inst_31875);
var inst_31877 = inst_31876;
var inst_31878 = null;
var inst_31879 = (0);
var inst_31880 = (0);
var state_31925__$1 = (function (){var statearr_31942 = state_31925;
(statearr_31942[(8)] = inst_31879);

(statearr_31942[(10)] = inst_31880);

(statearr_31942[(11)] = inst_31878);

(statearr_31942[(12)] = inst_31877);

return statearr_31942;
})();
var statearr_31943_31977 = state_31925__$1;
(statearr_31943_31977[(2)] = null);

(statearr_31943_31977[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31926 === (17))){
var inst_31891 = (state_31925[(7)]);
var inst_31895 = cljs.core.chunk_first.call(null,inst_31891);
var inst_31896 = cljs.core.chunk_rest.call(null,inst_31891);
var inst_31897 = cljs.core.count.call(null,inst_31895);
var inst_31877 = inst_31896;
var inst_31878 = inst_31895;
var inst_31879 = inst_31897;
var inst_31880 = (0);
var state_31925__$1 = (function (){var statearr_31944 = state_31925;
(statearr_31944[(8)] = inst_31879);

(statearr_31944[(10)] = inst_31880);

(statearr_31944[(11)] = inst_31878);

(statearr_31944[(12)] = inst_31877);

return statearr_31944;
})();
var statearr_31945_31978 = state_31925__$1;
(statearr_31945_31978[(2)] = null);

(statearr_31945_31978[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31926 === (3))){
var inst_31923 = (state_31925[(2)]);
var state_31925__$1 = state_31925;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31925__$1,inst_31923);
} else {
if((state_val_31926 === (12))){
var inst_31911 = (state_31925[(2)]);
var state_31925__$1 = state_31925;
var statearr_31946_31979 = state_31925__$1;
(statearr_31946_31979[(2)] = inst_31911);

(statearr_31946_31979[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31926 === (2))){
var state_31925__$1 = state_31925;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31925__$1,(4),in$);
} else {
if((state_val_31926 === (23))){
var inst_31919 = (state_31925[(2)]);
var state_31925__$1 = state_31925;
var statearr_31947_31980 = state_31925__$1;
(statearr_31947_31980[(2)] = inst_31919);

(statearr_31947_31980[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31926 === (19))){
var inst_31906 = (state_31925[(2)]);
var state_31925__$1 = state_31925;
var statearr_31948_31981 = state_31925__$1;
(statearr_31948_31981[(2)] = inst_31906);

(statearr_31948_31981[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31926 === (11))){
var inst_31877 = (state_31925[(12)]);
var inst_31891 = (state_31925[(7)]);
var inst_31891__$1 = cljs.core.seq.call(null,inst_31877);
var state_31925__$1 = (function (){var statearr_31949 = state_31925;
(statearr_31949[(7)] = inst_31891__$1);

return statearr_31949;
})();
if(inst_31891__$1){
var statearr_31950_31982 = state_31925__$1;
(statearr_31950_31982[(1)] = (14));

} else {
var statearr_31951_31983 = state_31925__$1;
(statearr_31951_31983[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31926 === (9))){
var inst_31913 = (state_31925[(2)]);
var inst_31914 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_31925__$1 = (function (){var statearr_31952 = state_31925;
(statearr_31952[(15)] = inst_31913);

return statearr_31952;
})();
if(cljs.core.truth_(inst_31914)){
var statearr_31953_31984 = state_31925__$1;
(statearr_31953_31984[(1)] = (21));

} else {
var statearr_31954_31985 = state_31925__$1;
(statearr_31954_31985[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31926 === (5))){
var inst_31869 = cljs.core.async.close_BANG_.call(null,out);
var state_31925__$1 = state_31925;
var statearr_31955_31986 = state_31925__$1;
(statearr_31955_31986[(2)] = inst_31869);

(statearr_31955_31986[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31926 === (14))){
var inst_31891 = (state_31925[(7)]);
var inst_31893 = cljs.core.chunked_seq_QMARK_.call(null,inst_31891);
var state_31925__$1 = state_31925;
if(inst_31893){
var statearr_31956_31987 = state_31925__$1;
(statearr_31956_31987[(1)] = (17));

} else {
var statearr_31957_31988 = state_31925__$1;
(statearr_31957_31988[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31926 === (16))){
var inst_31909 = (state_31925[(2)]);
var state_31925__$1 = state_31925;
var statearr_31958_31989 = state_31925__$1;
(statearr_31958_31989[(2)] = inst_31909);

(statearr_31958_31989[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31926 === (10))){
var inst_31880 = (state_31925[(10)]);
var inst_31878 = (state_31925[(11)]);
var inst_31885 = cljs.core._nth.call(null,inst_31878,inst_31880);
var state_31925__$1 = state_31925;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31925__$1,(13),out,inst_31885);
} else {
if((state_val_31926 === (18))){
var inst_31891 = (state_31925[(7)]);
var inst_31900 = cljs.core.first.call(null,inst_31891);
var state_31925__$1 = state_31925;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31925__$1,(20),out,inst_31900);
} else {
if((state_val_31926 === (8))){
var inst_31879 = (state_31925[(8)]);
var inst_31880 = (state_31925[(10)]);
var inst_31882 = (inst_31880 < inst_31879);
var inst_31883 = inst_31882;
var state_31925__$1 = state_31925;
if(cljs.core.truth_(inst_31883)){
var statearr_31959_31990 = state_31925__$1;
(statearr_31959_31990[(1)] = (10));

} else {
var statearr_31960_31991 = state_31925__$1;
(statearr_31960_31991[(1)] = (11));

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
});})(c__29436__auto__))
;
return ((function (switch__29324__auto__,c__29436__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29325__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29325__auto____0 = (function (){
var statearr_31964 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31964[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29325__auto__);

(statearr_31964[(1)] = (1));

return statearr_31964;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29325__auto____1 = (function (state_31925){
while(true){
var ret_value__29326__auto__ = (function (){try{while(true){
var result__29327__auto__ = switch__29324__auto__.call(null,state_31925);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29327__auto__;
}
break;
}
}catch (e31965){if((e31965 instanceof Object)){
var ex__29328__auto__ = e31965;
var statearr_31966_31992 = state_31925;
(statearr_31966_31992[(5)] = ex__29328__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31925);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31965;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31993 = state_31925;
state_31925 = G__31993;
continue;
} else {
return ret_value__29326__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29325__auto__ = function(state_31925){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29325__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29325__auto____1.call(this,state_31925);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29325__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29325__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29325__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29325__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29325__auto__;
})()
;})(switch__29324__auto__,c__29436__auto__))
})();
var state__29438__auto__ = (function (){var statearr_31967 = f__29437__auto__.call(null);
(statearr_31967[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29436__auto__);

return statearr_31967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29438__auto__);
});})(c__29436__auto__))
);

return c__29436__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args31994 = [];
var len__27064__auto___31997 = arguments.length;
var i__27065__auto___31998 = (0);
while(true){
if((i__27065__auto___31998 < len__27064__auto___31997)){
args31994.push((arguments[i__27065__auto___31998]));

var G__31999 = (i__27065__auto___31998 + (1));
i__27065__auto___31998 = G__31999;
continue;
} else {
}
break;
}

var G__31996 = args31994.length;
switch (G__31996) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31994.length)].join('')));

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
var args32001 = [];
var len__27064__auto___32004 = arguments.length;
var i__27065__auto___32005 = (0);
while(true){
if((i__27065__auto___32005 < len__27064__auto___32004)){
args32001.push((arguments[i__27065__auto___32005]));

var G__32006 = (i__27065__auto___32005 + (1));
i__27065__auto___32005 = G__32006;
continue;
} else {
}
break;
}

var G__32003 = args32001.length;
switch (G__32003) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32001.length)].join('')));

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
var args32008 = [];
var len__27064__auto___32059 = arguments.length;
var i__27065__auto___32060 = (0);
while(true){
if((i__27065__auto___32060 < len__27064__auto___32059)){
args32008.push((arguments[i__27065__auto___32060]));

var G__32061 = (i__27065__auto___32060 + (1));
i__27065__auto___32060 = G__32061;
continue;
} else {
}
break;
}

var G__32010 = args32008.length;
switch (G__32010) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32008.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29436__auto___32063 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29436__auto___32063,out){
return (function (){
var f__29437__auto__ = (function (){var switch__29324__auto__ = ((function (c__29436__auto___32063,out){
return (function (state_32034){
var state_val_32035 = (state_32034[(1)]);
if((state_val_32035 === (7))){
var inst_32029 = (state_32034[(2)]);
var state_32034__$1 = state_32034;
var statearr_32036_32064 = state_32034__$1;
(statearr_32036_32064[(2)] = inst_32029);

(statearr_32036_32064[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32035 === (1))){
var inst_32011 = null;
var state_32034__$1 = (function (){var statearr_32037 = state_32034;
(statearr_32037[(7)] = inst_32011);

return statearr_32037;
})();
var statearr_32038_32065 = state_32034__$1;
(statearr_32038_32065[(2)] = null);

(statearr_32038_32065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32035 === (4))){
var inst_32014 = (state_32034[(8)]);
var inst_32014__$1 = (state_32034[(2)]);
var inst_32015 = (inst_32014__$1 == null);
var inst_32016 = cljs.core.not.call(null,inst_32015);
var state_32034__$1 = (function (){var statearr_32039 = state_32034;
(statearr_32039[(8)] = inst_32014__$1);

return statearr_32039;
})();
if(inst_32016){
var statearr_32040_32066 = state_32034__$1;
(statearr_32040_32066[(1)] = (5));

} else {
var statearr_32041_32067 = state_32034__$1;
(statearr_32041_32067[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32035 === (6))){
var state_32034__$1 = state_32034;
var statearr_32042_32068 = state_32034__$1;
(statearr_32042_32068[(2)] = null);

(statearr_32042_32068[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32035 === (3))){
var inst_32031 = (state_32034[(2)]);
var inst_32032 = cljs.core.async.close_BANG_.call(null,out);
var state_32034__$1 = (function (){var statearr_32043 = state_32034;
(statearr_32043[(9)] = inst_32031);

return statearr_32043;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32034__$1,inst_32032);
} else {
if((state_val_32035 === (2))){
var state_32034__$1 = state_32034;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32034__$1,(4),ch);
} else {
if((state_val_32035 === (11))){
var inst_32014 = (state_32034[(8)]);
var inst_32023 = (state_32034[(2)]);
var inst_32011 = inst_32014;
var state_32034__$1 = (function (){var statearr_32044 = state_32034;
(statearr_32044[(7)] = inst_32011);

(statearr_32044[(10)] = inst_32023);

return statearr_32044;
})();
var statearr_32045_32069 = state_32034__$1;
(statearr_32045_32069[(2)] = null);

(statearr_32045_32069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32035 === (9))){
var inst_32014 = (state_32034[(8)]);
var state_32034__$1 = state_32034;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32034__$1,(11),out,inst_32014);
} else {
if((state_val_32035 === (5))){
var inst_32014 = (state_32034[(8)]);
var inst_32011 = (state_32034[(7)]);
var inst_32018 = cljs.core._EQ_.call(null,inst_32014,inst_32011);
var state_32034__$1 = state_32034;
if(inst_32018){
var statearr_32047_32070 = state_32034__$1;
(statearr_32047_32070[(1)] = (8));

} else {
var statearr_32048_32071 = state_32034__$1;
(statearr_32048_32071[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32035 === (10))){
var inst_32026 = (state_32034[(2)]);
var state_32034__$1 = state_32034;
var statearr_32049_32072 = state_32034__$1;
(statearr_32049_32072[(2)] = inst_32026);

(statearr_32049_32072[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32035 === (8))){
var inst_32011 = (state_32034[(7)]);
var tmp32046 = inst_32011;
var inst_32011__$1 = tmp32046;
var state_32034__$1 = (function (){var statearr_32050 = state_32034;
(statearr_32050[(7)] = inst_32011__$1);

return statearr_32050;
})();
var statearr_32051_32073 = state_32034__$1;
(statearr_32051_32073[(2)] = null);

(statearr_32051_32073[(1)] = (2));


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
});})(c__29436__auto___32063,out))
;
return ((function (switch__29324__auto__,c__29436__auto___32063,out){
return (function() {
var cljs$core$async$state_machine__29325__auto__ = null;
var cljs$core$async$state_machine__29325__auto____0 = (function (){
var statearr_32055 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32055[(0)] = cljs$core$async$state_machine__29325__auto__);

(statearr_32055[(1)] = (1));

return statearr_32055;
});
var cljs$core$async$state_machine__29325__auto____1 = (function (state_32034){
while(true){
var ret_value__29326__auto__ = (function (){try{while(true){
var result__29327__auto__ = switch__29324__auto__.call(null,state_32034);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29327__auto__;
}
break;
}
}catch (e32056){if((e32056 instanceof Object)){
var ex__29328__auto__ = e32056;
var statearr_32057_32074 = state_32034;
(statearr_32057_32074[(5)] = ex__29328__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32034);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32056;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32075 = state_32034;
state_32034 = G__32075;
continue;
} else {
return ret_value__29326__auto__;
}
break;
}
});
cljs$core$async$state_machine__29325__auto__ = function(state_32034){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29325__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29325__auto____1.call(this,state_32034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29325__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29325__auto____0;
cljs$core$async$state_machine__29325__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29325__auto____1;
return cljs$core$async$state_machine__29325__auto__;
})()
;})(switch__29324__auto__,c__29436__auto___32063,out))
})();
var state__29438__auto__ = (function (){var statearr_32058 = f__29437__auto__.call(null);
(statearr_32058[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29436__auto___32063);

return statearr_32058;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29438__auto__);
});})(c__29436__auto___32063,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args32076 = [];
var len__27064__auto___32146 = arguments.length;
var i__27065__auto___32147 = (0);
while(true){
if((i__27065__auto___32147 < len__27064__auto___32146)){
args32076.push((arguments[i__27065__auto___32147]));

var G__32148 = (i__27065__auto___32147 + (1));
i__27065__auto___32147 = G__32148;
continue;
} else {
}
break;
}

var G__32078 = args32076.length;
switch (G__32078) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32076.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29436__auto___32150 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29436__auto___32150,out){
return (function (){
var f__29437__auto__ = (function (){var switch__29324__auto__ = ((function (c__29436__auto___32150,out){
return (function (state_32116){
var state_val_32117 = (state_32116[(1)]);
if((state_val_32117 === (7))){
var inst_32112 = (state_32116[(2)]);
var state_32116__$1 = state_32116;
var statearr_32118_32151 = state_32116__$1;
(statearr_32118_32151[(2)] = inst_32112);

(statearr_32118_32151[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32117 === (1))){
var inst_32079 = (new Array(n));
var inst_32080 = inst_32079;
var inst_32081 = (0);
var state_32116__$1 = (function (){var statearr_32119 = state_32116;
(statearr_32119[(7)] = inst_32081);

(statearr_32119[(8)] = inst_32080);

return statearr_32119;
})();
var statearr_32120_32152 = state_32116__$1;
(statearr_32120_32152[(2)] = null);

(statearr_32120_32152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32117 === (4))){
var inst_32084 = (state_32116[(9)]);
var inst_32084__$1 = (state_32116[(2)]);
var inst_32085 = (inst_32084__$1 == null);
var inst_32086 = cljs.core.not.call(null,inst_32085);
var state_32116__$1 = (function (){var statearr_32121 = state_32116;
(statearr_32121[(9)] = inst_32084__$1);

return statearr_32121;
})();
if(inst_32086){
var statearr_32122_32153 = state_32116__$1;
(statearr_32122_32153[(1)] = (5));

} else {
var statearr_32123_32154 = state_32116__$1;
(statearr_32123_32154[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32117 === (15))){
var inst_32106 = (state_32116[(2)]);
var state_32116__$1 = state_32116;
var statearr_32124_32155 = state_32116__$1;
(statearr_32124_32155[(2)] = inst_32106);

(statearr_32124_32155[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32117 === (13))){
var state_32116__$1 = state_32116;
var statearr_32125_32156 = state_32116__$1;
(statearr_32125_32156[(2)] = null);

(statearr_32125_32156[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32117 === (6))){
var inst_32081 = (state_32116[(7)]);
var inst_32102 = (inst_32081 > (0));
var state_32116__$1 = state_32116;
if(cljs.core.truth_(inst_32102)){
var statearr_32126_32157 = state_32116__$1;
(statearr_32126_32157[(1)] = (12));

} else {
var statearr_32127_32158 = state_32116__$1;
(statearr_32127_32158[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32117 === (3))){
var inst_32114 = (state_32116[(2)]);
var state_32116__$1 = state_32116;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32116__$1,inst_32114);
} else {
if((state_val_32117 === (12))){
var inst_32080 = (state_32116[(8)]);
var inst_32104 = cljs.core.vec.call(null,inst_32080);
var state_32116__$1 = state_32116;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32116__$1,(15),out,inst_32104);
} else {
if((state_val_32117 === (2))){
var state_32116__$1 = state_32116;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32116__$1,(4),ch);
} else {
if((state_val_32117 === (11))){
var inst_32096 = (state_32116[(2)]);
var inst_32097 = (new Array(n));
var inst_32080 = inst_32097;
var inst_32081 = (0);
var state_32116__$1 = (function (){var statearr_32128 = state_32116;
(statearr_32128[(7)] = inst_32081);

(statearr_32128[(8)] = inst_32080);

(statearr_32128[(10)] = inst_32096);

return statearr_32128;
})();
var statearr_32129_32159 = state_32116__$1;
(statearr_32129_32159[(2)] = null);

(statearr_32129_32159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32117 === (9))){
var inst_32080 = (state_32116[(8)]);
var inst_32094 = cljs.core.vec.call(null,inst_32080);
var state_32116__$1 = state_32116;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32116__$1,(11),out,inst_32094);
} else {
if((state_val_32117 === (5))){
var inst_32084 = (state_32116[(9)]);
var inst_32081 = (state_32116[(7)]);
var inst_32089 = (state_32116[(11)]);
var inst_32080 = (state_32116[(8)]);
var inst_32088 = (inst_32080[inst_32081] = inst_32084);
var inst_32089__$1 = (inst_32081 + (1));
var inst_32090 = (inst_32089__$1 < n);
var state_32116__$1 = (function (){var statearr_32130 = state_32116;
(statearr_32130[(11)] = inst_32089__$1);

(statearr_32130[(12)] = inst_32088);

return statearr_32130;
})();
if(cljs.core.truth_(inst_32090)){
var statearr_32131_32160 = state_32116__$1;
(statearr_32131_32160[(1)] = (8));

} else {
var statearr_32132_32161 = state_32116__$1;
(statearr_32132_32161[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32117 === (14))){
var inst_32109 = (state_32116[(2)]);
var inst_32110 = cljs.core.async.close_BANG_.call(null,out);
var state_32116__$1 = (function (){var statearr_32134 = state_32116;
(statearr_32134[(13)] = inst_32109);

return statearr_32134;
})();
var statearr_32135_32162 = state_32116__$1;
(statearr_32135_32162[(2)] = inst_32110);

(statearr_32135_32162[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32117 === (10))){
var inst_32100 = (state_32116[(2)]);
var state_32116__$1 = state_32116;
var statearr_32136_32163 = state_32116__$1;
(statearr_32136_32163[(2)] = inst_32100);

(statearr_32136_32163[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32117 === (8))){
var inst_32089 = (state_32116[(11)]);
var inst_32080 = (state_32116[(8)]);
var tmp32133 = inst_32080;
var inst_32080__$1 = tmp32133;
var inst_32081 = inst_32089;
var state_32116__$1 = (function (){var statearr_32137 = state_32116;
(statearr_32137[(7)] = inst_32081);

(statearr_32137[(8)] = inst_32080__$1);

return statearr_32137;
})();
var statearr_32138_32164 = state_32116__$1;
(statearr_32138_32164[(2)] = null);

(statearr_32138_32164[(1)] = (2));


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
});})(c__29436__auto___32150,out))
;
return ((function (switch__29324__auto__,c__29436__auto___32150,out){
return (function() {
var cljs$core$async$state_machine__29325__auto__ = null;
var cljs$core$async$state_machine__29325__auto____0 = (function (){
var statearr_32142 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32142[(0)] = cljs$core$async$state_machine__29325__auto__);

(statearr_32142[(1)] = (1));

return statearr_32142;
});
var cljs$core$async$state_machine__29325__auto____1 = (function (state_32116){
while(true){
var ret_value__29326__auto__ = (function (){try{while(true){
var result__29327__auto__ = switch__29324__auto__.call(null,state_32116);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29327__auto__;
}
break;
}
}catch (e32143){if((e32143 instanceof Object)){
var ex__29328__auto__ = e32143;
var statearr_32144_32165 = state_32116;
(statearr_32144_32165[(5)] = ex__29328__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32116);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32143;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32166 = state_32116;
state_32116 = G__32166;
continue;
} else {
return ret_value__29326__auto__;
}
break;
}
});
cljs$core$async$state_machine__29325__auto__ = function(state_32116){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29325__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29325__auto____1.call(this,state_32116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29325__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29325__auto____0;
cljs$core$async$state_machine__29325__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29325__auto____1;
return cljs$core$async$state_machine__29325__auto__;
})()
;})(switch__29324__auto__,c__29436__auto___32150,out))
})();
var state__29438__auto__ = (function (){var statearr_32145 = f__29437__auto__.call(null);
(statearr_32145[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29436__auto___32150);

return statearr_32145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29438__auto__);
});})(c__29436__auto___32150,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args32167 = [];
var len__27064__auto___32241 = arguments.length;
var i__27065__auto___32242 = (0);
while(true){
if((i__27065__auto___32242 < len__27064__auto___32241)){
args32167.push((arguments[i__27065__auto___32242]));

var G__32243 = (i__27065__auto___32242 + (1));
i__27065__auto___32242 = G__32243;
continue;
} else {
}
break;
}

var G__32169 = args32167.length;
switch (G__32169) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32167.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29436__auto___32245 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29436__auto___32245,out){
return (function (){
var f__29437__auto__ = (function (){var switch__29324__auto__ = ((function (c__29436__auto___32245,out){
return (function (state_32211){
var state_val_32212 = (state_32211[(1)]);
if((state_val_32212 === (7))){
var inst_32207 = (state_32211[(2)]);
var state_32211__$1 = state_32211;
var statearr_32213_32246 = state_32211__$1;
(statearr_32213_32246[(2)] = inst_32207);

(statearr_32213_32246[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32212 === (1))){
var inst_32170 = [];
var inst_32171 = inst_32170;
var inst_32172 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32211__$1 = (function (){var statearr_32214 = state_32211;
(statearr_32214[(7)] = inst_32171);

(statearr_32214[(8)] = inst_32172);

return statearr_32214;
})();
var statearr_32215_32247 = state_32211__$1;
(statearr_32215_32247[(2)] = null);

(statearr_32215_32247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32212 === (4))){
var inst_32175 = (state_32211[(9)]);
var inst_32175__$1 = (state_32211[(2)]);
var inst_32176 = (inst_32175__$1 == null);
var inst_32177 = cljs.core.not.call(null,inst_32176);
var state_32211__$1 = (function (){var statearr_32216 = state_32211;
(statearr_32216[(9)] = inst_32175__$1);

return statearr_32216;
})();
if(inst_32177){
var statearr_32217_32248 = state_32211__$1;
(statearr_32217_32248[(1)] = (5));

} else {
var statearr_32218_32249 = state_32211__$1;
(statearr_32218_32249[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32212 === (15))){
var inst_32201 = (state_32211[(2)]);
var state_32211__$1 = state_32211;
var statearr_32219_32250 = state_32211__$1;
(statearr_32219_32250[(2)] = inst_32201);

(statearr_32219_32250[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32212 === (13))){
var state_32211__$1 = state_32211;
var statearr_32220_32251 = state_32211__$1;
(statearr_32220_32251[(2)] = null);

(statearr_32220_32251[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32212 === (6))){
var inst_32171 = (state_32211[(7)]);
var inst_32196 = inst_32171.length;
var inst_32197 = (inst_32196 > (0));
var state_32211__$1 = state_32211;
if(cljs.core.truth_(inst_32197)){
var statearr_32221_32252 = state_32211__$1;
(statearr_32221_32252[(1)] = (12));

} else {
var statearr_32222_32253 = state_32211__$1;
(statearr_32222_32253[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32212 === (3))){
var inst_32209 = (state_32211[(2)]);
var state_32211__$1 = state_32211;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32211__$1,inst_32209);
} else {
if((state_val_32212 === (12))){
var inst_32171 = (state_32211[(7)]);
var inst_32199 = cljs.core.vec.call(null,inst_32171);
var state_32211__$1 = state_32211;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32211__$1,(15),out,inst_32199);
} else {
if((state_val_32212 === (2))){
var state_32211__$1 = state_32211;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32211__$1,(4),ch);
} else {
if((state_val_32212 === (11))){
var inst_32175 = (state_32211[(9)]);
var inst_32179 = (state_32211[(10)]);
var inst_32189 = (state_32211[(2)]);
var inst_32190 = [];
var inst_32191 = inst_32190.push(inst_32175);
var inst_32171 = inst_32190;
var inst_32172 = inst_32179;
var state_32211__$1 = (function (){var statearr_32223 = state_32211;
(statearr_32223[(11)] = inst_32191);

(statearr_32223[(12)] = inst_32189);

(statearr_32223[(7)] = inst_32171);

(statearr_32223[(8)] = inst_32172);

return statearr_32223;
})();
var statearr_32224_32254 = state_32211__$1;
(statearr_32224_32254[(2)] = null);

(statearr_32224_32254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32212 === (9))){
var inst_32171 = (state_32211[(7)]);
var inst_32187 = cljs.core.vec.call(null,inst_32171);
var state_32211__$1 = state_32211;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32211__$1,(11),out,inst_32187);
} else {
if((state_val_32212 === (5))){
var inst_32175 = (state_32211[(9)]);
var inst_32179 = (state_32211[(10)]);
var inst_32172 = (state_32211[(8)]);
var inst_32179__$1 = f.call(null,inst_32175);
var inst_32180 = cljs.core._EQ_.call(null,inst_32179__$1,inst_32172);
var inst_32181 = cljs.core.keyword_identical_QMARK_.call(null,inst_32172,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32182 = (inst_32180) || (inst_32181);
var state_32211__$1 = (function (){var statearr_32225 = state_32211;
(statearr_32225[(10)] = inst_32179__$1);

return statearr_32225;
})();
if(cljs.core.truth_(inst_32182)){
var statearr_32226_32255 = state_32211__$1;
(statearr_32226_32255[(1)] = (8));

} else {
var statearr_32227_32256 = state_32211__$1;
(statearr_32227_32256[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32212 === (14))){
var inst_32204 = (state_32211[(2)]);
var inst_32205 = cljs.core.async.close_BANG_.call(null,out);
var state_32211__$1 = (function (){var statearr_32229 = state_32211;
(statearr_32229[(13)] = inst_32204);

return statearr_32229;
})();
var statearr_32230_32257 = state_32211__$1;
(statearr_32230_32257[(2)] = inst_32205);

(statearr_32230_32257[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32212 === (10))){
var inst_32194 = (state_32211[(2)]);
var state_32211__$1 = state_32211;
var statearr_32231_32258 = state_32211__$1;
(statearr_32231_32258[(2)] = inst_32194);

(statearr_32231_32258[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32212 === (8))){
var inst_32175 = (state_32211[(9)]);
var inst_32179 = (state_32211[(10)]);
var inst_32171 = (state_32211[(7)]);
var inst_32184 = inst_32171.push(inst_32175);
var tmp32228 = inst_32171;
var inst_32171__$1 = tmp32228;
var inst_32172 = inst_32179;
var state_32211__$1 = (function (){var statearr_32232 = state_32211;
(statearr_32232[(14)] = inst_32184);

(statearr_32232[(7)] = inst_32171__$1);

(statearr_32232[(8)] = inst_32172);

return statearr_32232;
})();
var statearr_32233_32259 = state_32211__$1;
(statearr_32233_32259[(2)] = null);

(statearr_32233_32259[(1)] = (2));


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
});})(c__29436__auto___32245,out))
;
return ((function (switch__29324__auto__,c__29436__auto___32245,out){
return (function() {
var cljs$core$async$state_machine__29325__auto__ = null;
var cljs$core$async$state_machine__29325__auto____0 = (function (){
var statearr_32237 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32237[(0)] = cljs$core$async$state_machine__29325__auto__);

(statearr_32237[(1)] = (1));

return statearr_32237;
});
var cljs$core$async$state_machine__29325__auto____1 = (function (state_32211){
while(true){
var ret_value__29326__auto__ = (function (){try{while(true){
var result__29327__auto__ = switch__29324__auto__.call(null,state_32211);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29327__auto__;
}
break;
}
}catch (e32238){if((e32238 instanceof Object)){
var ex__29328__auto__ = e32238;
var statearr_32239_32260 = state_32211;
(statearr_32239_32260[(5)] = ex__29328__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32211);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32238;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32261 = state_32211;
state_32211 = G__32261;
continue;
} else {
return ret_value__29326__auto__;
}
break;
}
});
cljs$core$async$state_machine__29325__auto__ = function(state_32211){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29325__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29325__auto____1.call(this,state_32211);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29325__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29325__auto____0;
cljs$core$async$state_machine__29325__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29325__auto____1;
return cljs$core$async$state_machine__29325__auto__;
})()
;})(switch__29324__auto__,c__29436__auto___32245,out))
})();
var state__29438__auto__ = (function (){var statearr_32240 = f__29437__auto__.call(null);
(statearr_32240[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29436__auto___32245);

return statearr_32240;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29438__auto__);
});})(c__29436__auto___32245,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1500616859512