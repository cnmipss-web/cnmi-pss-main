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
var G__44435 = arguments.length;
switch (G__44435) {
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
if(typeof cljs.core.async.t_cljs$core$async44436 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44436 = (function (f,blockable,meta44437){
this.f = f;
this.blockable = blockable;
this.meta44437 = meta44437;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async44436.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44438,meta44437__$1){
var self__ = this;
var _44438__$1 = this;
return (new cljs.core.async.t_cljs$core$async44436(self__.f,self__.blockable,meta44437__$1));
});

cljs.core.async.t_cljs$core$async44436.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44438){
var self__ = this;
var _44438__$1 = this;
return self__.meta44437;
});

cljs.core.async.t_cljs$core$async44436.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44436.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async44436.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async44436.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async44436.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta44437","meta44437",-1738434559,null)], null);
});

cljs.core.async.t_cljs$core$async44436.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44436.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44436";

cljs.core.async.t_cljs$core$async44436.cljs$lang$ctorPrWriter = (function (this__37367__auto__,writer__37368__auto__,opt__37369__auto__){
return cljs.core._write.call(null,writer__37368__auto__,"cljs.core.async/t_cljs$core$async44436");
});

cljs.core.async.__GT_t_cljs$core$async44436 = (function cljs$core$async$__GT_t_cljs$core$async44436(f__$1,blockable__$1,meta44437){
return (new cljs.core.async.t_cljs$core$async44436(f__$1,blockable__$1,meta44437));
});

}

return (new cljs.core.async.t_cljs$core$async44436(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__44442 = arguments.length;
switch (G__44442) {
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
var G__44445 = arguments.length;
switch (G__44445) {
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
var G__44448 = arguments.length;
switch (G__44448) {
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
var val_44450 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_44450);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_44450,ret){
return (function (){
return fn1.call(null,val_44450);
});})(val_44450,ret))
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
var G__44452 = arguments.length;
switch (G__44452) {
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
var n__37680__auto___44454 = n;
var x_44455 = (0);
while(true){
if((x_44455 < n__37680__auto___44454)){
(a[x_44455] = (0));

var G__44456 = (x_44455 + (1));
x_44455 = G__44456;
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

var G__44457 = (i + (1));
i = G__44457;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async44458 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44458 = (function (flag,meta44459){
this.flag = flag;
this.meta44459 = meta44459;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async44458.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_44460,meta44459__$1){
var self__ = this;
var _44460__$1 = this;
return (new cljs.core.async.t_cljs$core$async44458(self__.flag,meta44459__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async44458.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_44460){
var self__ = this;
var _44460__$1 = this;
return self__.meta44459;
});})(flag))
;

cljs.core.async.t_cljs$core$async44458.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44458.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async44458.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async44458.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async44458.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta44459","meta44459",-936015053,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async44458.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44458.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44458";

cljs.core.async.t_cljs$core$async44458.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__37367__auto__,writer__37368__auto__,opt__37369__auto__){
return cljs.core._write.call(null,writer__37368__auto__,"cljs.core.async/t_cljs$core$async44458");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async44458 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async44458(flag__$1,meta44459){
return (new cljs.core.async.t_cljs$core$async44458(flag__$1,meta44459));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async44458(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async44461 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44461 = (function (flag,cb,meta44462){
this.flag = flag;
this.cb = cb;
this.meta44462 = meta44462;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async44461.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44463,meta44462__$1){
var self__ = this;
var _44463__$1 = this;
return (new cljs.core.async.t_cljs$core$async44461(self__.flag,self__.cb,meta44462__$1));
});

cljs.core.async.t_cljs$core$async44461.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44463){
var self__ = this;
var _44463__$1 = this;
return self__.meta44462;
});

cljs.core.async.t_cljs$core$async44461.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44461.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async44461.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async44461.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async44461.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta44462","meta44462",1415847421,null)], null);
});

cljs.core.async.t_cljs$core$async44461.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44461.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44461";

cljs.core.async.t_cljs$core$async44461.cljs$lang$ctorPrWriter = (function (this__37367__auto__,writer__37368__auto__,opt__37369__auto__){
return cljs.core._write.call(null,writer__37368__auto__,"cljs.core.async/t_cljs$core$async44461");
});

cljs.core.async.__GT_t_cljs$core$async44461 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async44461(flag__$1,cb__$1,meta44462){
return (new cljs.core.async.t_cljs$core$async44461(flag__$1,cb__$1,meta44462));
});

}

return (new cljs.core.async.t_cljs$core$async44461(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__44464_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44464_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__44465_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44465_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__36756__auto__ = wport;
if(cljs.core.truth_(or__36756__auto__)){
return or__36756__auto__;
} else {
return port;
}
})()], null));
} else {
var G__44466 = (i + (1));
i = G__44466;
continue;
}
} else {
return null;
}
break;
}
})();
var or__36756__auto__ = ret;
if(cljs.core.truth_(or__36756__auto__)){
return or__36756__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__36744__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__36744__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__36744__auto__;
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
var args__37888__auto__ = [];
var len__37881__auto___44472 = arguments.length;
var i__37882__auto___44473 = (0);
while(true){
if((i__37882__auto___44473 < len__37881__auto___44472)){
args__37888__auto__.push((arguments[i__37882__auto___44473]));

var G__44474 = (i__37882__auto___44473 + (1));
i__37882__auto___44473 = G__44474;
continue;
} else {
}
break;
}

var argseq__37889__auto__ = ((((1) < args__37888__auto__.length))?(new cljs.core.IndexedSeq(args__37888__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37889__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__44469){
var map__44470 = p__44469;
var map__44470__$1 = ((((!((map__44470 == null)))?((((map__44470.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44470.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44470):map__44470);
var opts = map__44470__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq44467){
var G__44468 = cljs.core.first.call(null,seq44467);
var seq44467__$1 = cljs.core.next.call(null,seq44467);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__44468,seq44467__$1);
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
var G__44476 = arguments.length;
switch (G__44476) {
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
var c__44389__auto___44522 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44389__auto___44522){
return (function (){
var f__44390__auto__ = (function (){var switch__44301__auto__ = ((function (c__44389__auto___44522){
return (function (state_44500){
var state_val_44501 = (state_44500[(1)]);
if((state_val_44501 === (7))){
var inst_44496 = (state_44500[(2)]);
var state_44500__$1 = state_44500;
var statearr_44502_44523 = state_44500__$1;
(statearr_44502_44523[(2)] = inst_44496);

(statearr_44502_44523[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44501 === (1))){
var state_44500__$1 = state_44500;
var statearr_44503_44524 = state_44500__$1;
(statearr_44503_44524[(2)] = null);

(statearr_44503_44524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44501 === (4))){
var inst_44479 = (state_44500[(7)]);
var inst_44479__$1 = (state_44500[(2)]);
var inst_44480 = (inst_44479__$1 == null);
var state_44500__$1 = (function (){var statearr_44504 = state_44500;
(statearr_44504[(7)] = inst_44479__$1);

return statearr_44504;
})();
if(cljs.core.truth_(inst_44480)){
var statearr_44505_44525 = state_44500__$1;
(statearr_44505_44525[(1)] = (5));

} else {
var statearr_44506_44526 = state_44500__$1;
(statearr_44506_44526[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44501 === (13))){
var state_44500__$1 = state_44500;
var statearr_44507_44527 = state_44500__$1;
(statearr_44507_44527[(2)] = null);

(statearr_44507_44527[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44501 === (6))){
var inst_44479 = (state_44500[(7)]);
var state_44500__$1 = state_44500;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44500__$1,(11),to,inst_44479);
} else {
if((state_val_44501 === (3))){
var inst_44498 = (state_44500[(2)]);
var state_44500__$1 = state_44500;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44500__$1,inst_44498);
} else {
if((state_val_44501 === (12))){
var state_44500__$1 = state_44500;
var statearr_44508_44528 = state_44500__$1;
(statearr_44508_44528[(2)] = null);

(statearr_44508_44528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44501 === (2))){
var state_44500__$1 = state_44500;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44500__$1,(4),from);
} else {
if((state_val_44501 === (11))){
var inst_44489 = (state_44500[(2)]);
var state_44500__$1 = state_44500;
if(cljs.core.truth_(inst_44489)){
var statearr_44509_44529 = state_44500__$1;
(statearr_44509_44529[(1)] = (12));

} else {
var statearr_44510_44530 = state_44500__$1;
(statearr_44510_44530[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44501 === (9))){
var state_44500__$1 = state_44500;
var statearr_44511_44531 = state_44500__$1;
(statearr_44511_44531[(2)] = null);

(statearr_44511_44531[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44501 === (5))){
var state_44500__$1 = state_44500;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44512_44532 = state_44500__$1;
(statearr_44512_44532[(1)] = (8));

} else {
var statearr_44513_44533 = state_44500__$1;
(statearr_44513_44533[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44501 === (14))){
var inst_44494 = (state_44500[(2)]);
var state_44500__$1 = state_44500;
var statearr_44514_44534 = state_44500__$1;
(statearr_44514_44534[(2)] = inst_44494);

(statearr_44514_44534[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44501 === (10))){
var inst_44486 = (state_44500[(2)]);
var state_44500__$1 = state_44500;
var statearr_44515_44535 = state_44500__$1;
(statearr_44515_44535[(2)] = inst_44486);

(statearr_44515_44535[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44501 === (8))){
var inst_44483 = cljs.core.async.close_BANG_.call(null,to);
var state_44500__$1 = state_44500;
var statearr_44516_44536 = state_44500__$1;
(statearr_44516_44536[(2)] = inst_44483);

(statearr_44516_44536[(1)] = (10));


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
});})(c__44389__auto___44522))
;
return ((function (switch__44301__auto__,c__44389__auto___44522){
return (function() {
var cljs$core$async$state_machine__44302__auto__ = null;
var cljs$core$async$state_machine__44302__auto____0 = (function (){
var statearr_44517 = [null,null,null,null,null,null,null,null];
(statearr_44517[(0)] = cljs$core$async$state_machine__44302__auto__);

(statearr_44517[(1)] = (1));

return statearr_44517;
});
var cljs$core$async$state_machine__44302__auto____1 = (function (state_44500){
while(true){
var ret_value__44303__auto__ = (function (){try{while(true){
var result__44304__auto__ = switch__44301__auto__.call(null,state_44500);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44304__auto__;
}
break;
}
}catch (e44518){if((e44518 instanceof Object)){
var ex__44305__auto__ = e44518;
var statearr_44519_44537 = state_44500;
(statearr_44519_44537[(5)] = ex__44305__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44500);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44518;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44538 = state_44500;
state_44500 = G__44538;
continue;
} else {
return ret_value__44303__auto__;
}
break;
}
});
cljs$core$async$state_machine__44302__auto__ = function(state_44500){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44302__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44302__auto____1.call(this,state_44500);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__44302__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44302__auto____0;
cljs$core$async$state_machine__44302__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44302__auto____1;
return cljs$core$async$state_machine__44302__auto__;
})()
;})(switch__44301__auto__,c__44389__auto___44522))
})();
var state__44391__auto__ = (function (){var statearr_44520 = f__44390__auto__.call(null);
(statearr_44520[(6)] = c__44389__auto___44522);

return statearr_44520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44391__auto__);
});})(c__44389__auto___44522))
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
return (function (p__44539){
var vec__44540 = p__44539;
var v = cljs.core.nth.call(null,vec__44540,(0),null);
var p = cljs.core.nth.call(null,vec__44540,(1),null);
var job = vec__44540;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__44389__auto___44711 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44389__auto___44711,res,vec__44540,v,p,job,jobs,results){
return (function (){
var f__44390__auto__ = (function (){var switch__44301__auto__ = ((function (c__44389__auto___44711,res,vec__44540,v,p,job,jobs,results){
return (function (state_44547){
var state_val_44548 = (state_44547[(1)]);
if((state_val_44548 === (1))){
var state_44547__$1 = state_44547;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44547__$1,(2),res,v);
} else {
if((state_val_44548 === (2))){
var inst_44544 = (state_44547[(2)]);
var inst_44545 = cljs.core.async.close_BANG_.call(null,res);
var state_44547__$1 = (function (){var statearr_44549 = state_44547;
(statearr_44549[(7)] = inst_44544);

return statearr_44549;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44547__$1,inst_44545);
} else {
return null;
}
}
});})(c__44389__auto___44711,res,vec__44540,v,p,job,jobs,results))
;
return ((function (switch__44301__auto__,c__44389__auto___44711,res,vec__44540,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44302__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44302__auto____0 = (function (){
var statearr_44550 = [null,null,null,null,null,null,null,null];
(statearr_44550[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44302__auto__);

(statearr_44550[(1)] = (1));

return statearr_44550;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44302__auto____1 = (function (state_44547){
while(true){
var ret_value__44303__auto__ = (function (){try{while(true){
var result__44304__auto__ = switch__44301__auto__.call(null,state_44547);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44304__auto__;
}
break;
}
}catch (e44551){if((e44551 instanceof Object)){
var ex__44305__auto__ = e44551;
var statearr_44552_44712 = state_44547;
(statearr_44552_44712[(5)] = ex__44305__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44547);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44551;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44713 = state_44547;
state_44547 = G__44713;
continue;
} else {
return ret_value__44303__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44302__auto__ = function(state_44547){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44302__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44302__auto____1.call(this,state_44547);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__44302__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44302__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44302__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44302__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44302__auto__;
})()
;})(switch__44301__auto__,c__44389__auto___44711,res,vec__44540,v,p,job,jobs,results))
})();
var state__44391__auto__ = (function (){var statearr_44553 = f__44390__auto__.call(null);
(statearr_44553[(6)] = c__44389__auto___44711);

return statearr_44553;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44391__auto__);
});})(c__44389__auto___44711,res,vec__44540,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__44554){
var vec__44555 = p__44554;
var v = cljs.core.nth.call(null,vec__44555,(0),null);
var p = cljs.core.nth.call(null,vec__44555,(1),null);
var job = vec__44555;
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
var n__37680__auto___44714 = n;
var __44715 = (0);
while(true){
if((__44715 < n__37680__auto___44714)){
var G__44558_44716 = type;
var G__44558_44717__$1 = (((G__44558_44716 instanceof cljs.core.Keyword))?G__44558_44716.fqn:null);
switch (G__44558_44717__$1) {
case "compute":
var c__44389__auto___44719 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__44715,c__44389__auto___44719,G__44558_44716,G__44558_44717__$1,n__37680__auto___44714,jobs,results,process,async){
return (function (){
var f__44390__auto__ = (function (){var switch__44301__auto__ = ((function (__44715,c__44389__auto___44719,G__44558_44716,G__44558_44717__$1,n__37680__auto___44714,jobs,results,process,async){
return (function (state_44571){
var state_val_44572 = (state_44571[(1)]);
if((state_val_44572 === (1))){
var state_44571__$1 = state_44571;
var statearr_44573_44720 = state_44571__$1;
(statearr_44573_44720[(2)] = null);

(statearr_44573_44720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44572 === (2))){
var state_44571__$1 = state_44571;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44571__$1,(4),jobs);
} else {
if((state_val_44572 === (3))){
var inst_44569 = (state_44571[(2)]);
var state_44571__$1 = state_44571;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44571__$1,inst_44569);
} else {
if((state_val_44572 === (4))){
var inst_44561 = (state_44571[(2)]);
var inst_44562 = process.call(null,inst_44561);
var state_44571__$1 = state_44571;
if(cljs.core.truth_(inst_44562)){
var statearr_44574_44721 = state_44571__$1;
(statearr_44574_44721[(1)] = (5));

} else {
var statearr_44575_44722 = state_44571__$1;
(statearr_44575_44722[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44572 === (5))){
var state_44571__$1 = state_44571;
var statearr_44576_44723 = state_44571__$1;
(statearr_44576_44723[(2)] = null);

(statearr_44576_44723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44572 === (6))){
var state_44571__$1 = state_44571;
var statearr_44577_44724 = state_44571__$1;
(statearr_44577_44724[(2)] = null);

(statearr_44577_44724[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44572 === (7))){
var inst_44567 = (state_44571[(2)]);
var state_44571__$1 = state_44571;
var statearr_44578_44725 = state_44571__$1;
(statearr_44578_44725[(2)] = inst_44567);

(statearr_44578_44725[(1)] = (3));


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
});})(__44715,c__44389__auto___44719,G__44558_44716,G__44558_44717__$1,n__37680__auto___44714,jobs,results,process,async))
;
return ((function (__44715,switch__44301__auto__,c__44389__auto___44719,G__44558_44716,G__44558_44717__$1,n__37680__auto___44714,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44302__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44302__auto____0 = (function (){
var statearr_44579 = [null,null,null,null,null,null,null];
(statearr_44579[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44302__auto__);

(statearr_44579[(1)] = (1));

return statearr_44579;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44302__auto____1 = (function (state_44571){
while(true){
var ret_value__44303__auto__ = (function (){try{while(true){
var result__44304__auto__ = switch__44301__auto__.call(null,state_44571);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44304__auto__;
}
break;
}
}catch (e44580){if((e44580 instanceof Object)){
var ex__44305__auto__ = e44580;
var statearr_44581_44726 = state_44571;
(statearr_44581_44726[(5)] = ex__44305__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44571);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44580;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44727 = state_44571;
state_44571 = G__44727;
continue;
} else {
return ret_value__44303__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44302__auto__ = function(state_44571){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44302__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44302__auto____1.call(this,state_44571);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__44302__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44302__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44302__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44302__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44302__auto__;
})()
;})(__44715,switch__44301__auto__,c__44389__auto___44719,G__44558_44716,G__44558_44717__$1,n__37680__auto___44714,jobs,results,process,async))
})();
var state__44391__auto__ = (function (){var statearr_44582 = f__44390__auto__.call(null);
(statearr_44582[(6)] = c__44389__auto___44719);

return statearr_44582;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44391__auto__);
});})(__44715,c__44389__auto___44719,G__44558_44716,G__44558_44717__$1,n__37680__auto___44714,jobs,results,process,async))
);


break;
case "async":
var c__44389__auto___44728 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__44715,c__44389__auto___44728,G__44558_44716,G__44558_44717__$1,n__37680__auto___44714,jobs,results,process,async){
return (function (){
var f__44390__auto__ = (function (){var switch__44301__auto__ = ((function (__44715,c__44389__auto___44728,G__44558_44716,G__44558_44717__$1,n__37680__auto___44714,jobs,results,process,async){
return (function (state_44595){
var state_val_44596 = (state_44595[(1)]);
if((state_val_44596 === (1))){
var state_44595__$1 = state_44595;
var statearr_44597_44729 = state_44595__$1;
(statearr_44597_44729[(2)] = null);

(statearr_44597_44729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44596 === (2))){
var state_44595__$1 = state_44595;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44595__$1,(4),jobs);
} else {
if((state_val_44596 === (3))){
var inst_44593 = (state_44595[(2)]);
var state_44595__$1 = state_44595;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44595__$1,inst_44593);
} else {
if((state_val_44596 === (4))){
var inst_44585 = (state_44595[(2)]);
var inst_44586 = async.call(null,inst_44585);
var state_44595__$1 = state_44595;
if(cljs.core.truth_(inst_44586)){
var statearr_44598_44730 = state_44595__$1;
(statearr_44598_44730[(1)] = (5));

} else {
var statearr_44599_44731 = state_44595__$1;
(statearr_44599_44731[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44596 === (5))){
var state_44595__$1 = state_44595;
var statearr_44600_44732 = state_44595__$1;
(statearr_44600_44732[(2)] = null);

(statearr_44600_44732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44596 === (6))){
var state_44595__$1 = state_44595;
var statearr_44601_44733 = state_44595__$1;
(statearr_44601_44733[(2)] = null);

(statearr_44601_44733[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44596 === (7))){
var inst_44591 = (state_44595[(2)]);
var state_44595__$1 = state_44595;
var statearr_44602_44734 = state_44595__$1;
(statearr_44602_44734[(2)] = inst_44591);

(statearr_44602_44734[(1)] = (3));


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
});})(__44715,c__44389__auto___44728,G__44558_44716,G__44558_44717__$1,n__37680__auto___44714,jobs,results,process,async))
;
return ((function (__44715,switch__44301__auto__,c__44389__auto___44728,G__44558_44716,G__44558_44717__$1,n__37680__auto___44714,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44302__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44302__auto____0 = (function (){
var statearr_44603 = [null,null,null,null,null,null,null];
(statearr_44603[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44302__auto__);

(statearr_44603[(1)] = (1));

return statearr_44603;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44302__auto____1 = (function (state_44595){
while(true){
var ret_value__44303__auto__ = (function (){try{while(true){
var result__44304__auto__ = switch__44301__auto__.call(null,state_44595);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44304__auto__;
}
break;
}
}catch (e44604){if((e44604 instanceof Object)){
var ex__44305__auto__ = e44604;
var statearr_44605_44735 = state_44595;
(statearr_44605_44735[(5)] = ex__44305__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44595);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44604;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44736 = state_44595;
state_44595 = G__44736;
continue;
} else {
return ret_value__44303__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44302__auto__ = function(state_44595){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44302__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44302__auto____1.call(this,state_44595);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__44302__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44302__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44302__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44302__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44302__auto__;
})()
;})(__44715,switch__44301__auto__,c__44389__auto___44728,G__44558_44716,G__44558_44717__$1,n__37680__auto___44714,jobs,results,process,async))
})();
var state__44391__auto__ = (function (){var statearr_44606 = f__44390__auto__.call(null);
(statearr_44606[(6)] = c__44389__auto___44728);

return statearr_44606;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44391__auto__);
});})(__44715,c__44389__auto___44728,G__44558_44716,G__44558_44717__$1,n__37680__auto___44714,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44558_44717__$1)].join('')));

}

var G__44737 = (__44715 + (1));
__44715 = G__44737;
continue;
} else {
}
break;
}

var c__44389__auto___44738 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44389__auto___44738,jobs,results,process,async){
return (function (){
var f__44390__auto__ = (function (){var switch__44301__auto__ = ((function (c__44389__auto___44738,jobs,results,process,async){
return (function (state_44628){
var state_val_44629 = (state_44628[(1)]);
if((state_val_44629 === (1))){
var state_44628__$1 = state_44628;
var statearr_44630_44739 = state_44628__$1;
(statearr_44630_44739[(2)] = null);

(statearr_44630_44739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44629 === (2))){
var state_44628__$1 = state_44628;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44628__$1,(4),from);
} else {
if((state_val_44629 === (3))){
var inst_44626 = (state_44628[(2)]);
var state_44628__$1 = state_44628;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44628__$1,inst_44626);
} else {
if((state_val_44629 === (4))){
var inst_44609 = (state_44628[(7)]);
var inst_44609__$1 = (state_44628[(2)]);
var inst_44610 = (inst_44609__$1 == null);
var state_44628__$1 = (function (){var statearr_44631 = state_44628;
(statearr_44631[(7)] = inst_44609__$1);

return statearr_44631;
})();
if(cljs.core.truth_(inst_44610)){
var statearr_44632_44740 = state_44628__$1;
(statearr_44632_44740[(1)] = (5));

} else {
var statearr_44633_44741 = state_44628__$1;
(statearr_44633_44741[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44629 === (5))){
var inst_44612 = cljs.core.async.close_BANG_.call(null,jobs);
var state_44628__$1 = state_44628;
var statearr_44634_44742 = state_44628__$1;
(statearr_44634_44742[(2)] = inst_44612);

(statearr_44634_44742[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44629 === (6))){
var inst_44614 = (state_44628[(8)]);
var inst_44609 = (state_44628[(7)]);
var inst_44614__$1 = cljs.core.async.chan.call(null,(1));
var inst_44615 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44616 = [inst_44609,inst_44614__$1];
var inst_44617 = (new cljs.core.PersistentVector(null,2,(5),inst_44615,inst_44616,null));
var state_44628__$1 = (function (){var statearr_44635 = state_44628;
(statearr_44635[(8)] = inst_44614__$1);

return statearr_44635;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44628__$1,(8),jobs,inst_44617);
} else {
if((state_val_44629 === (7))){
var inst_44624 = (state_44628[(2)]);
var state_44628__$1 = state_44628;
var statearr_44636_44743 = state_44628__$1;
(statearr_44636_44743[(2)] = inst_44624);

(statearr_44636_44743[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44629 === (8))){
var inst_44614 = (state_44628[(8)]);
var inst_44619 = (state_44628[(2)]);
var state_44628__$1 = (function (){var statearr_44637 = state_44628;
(statearr_44637[(9)] = inst_44619);

return statearr_44637;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44628__$1,(9),results,inst_44614);
} else {
if((state_val_44629 === (9))){
var inst_44621 = (state_44628[(2)]);
var state_44628__$1 = (function (){var statearr_44638 = state_44628;
(statearr_44638[(10)] = inst_44621);

return statearr_44638;
})();
var statearr_44639_44744 = state_44628__$1;
(statearr_44639_44744[(2)] = null);

(statearr_44639_44744[(1)] = (2));


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
});})(c__44389__auto___44738,jobs,results,process,async))
;
return ((function (switch__44301__auto__,c__44389__auto___44738,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44302__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44302__auto____0 = (function (){
var statearr_44640 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44640[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44302__auto__);

(statearr_44640[(1)] = (1));

return statearr_44640;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44302__auto____1 = (function (state_44628){
while(true){
var ret_value__44303__auto__ = (function (){try{while(true){
var result__44304__auto__ = switch__44301__auto__.call(null,state_44628);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44304__auto__;
}
break;
}
}catch (e44641){if((e44641 instanceof Object)){
var ex__44305__auto__ = e44641;
var statearr_44642_44745 = state_44628;
(statearr_44642_44745[(5)] = ex__44305__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44628);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44641;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44746 = state_44628;
state_44628 = G__44746;
continue;
} else {
return ret_value__44303__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44302__auto__ = function(state_44628){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44302__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44302__auto____1.call(this,state_44628);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__44302__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44302__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44302__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44302__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44302__auto__;
})()
;})(switch__44301__auto__,c__44389__auto___44738,jobs,results,process,async))
})();
var state__44391__auto__ = (function (){var statearr_44643 = f__44390__auto__.call(null);
(statearr_44643[(6)] = c__44389__auto___44738);

return statearr_44643;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44391__auto__);
});})(c__44389__auto___44738,jobs,results,process,async))
);


var c__44389__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44389__auto__,jobs,results,process,async){
return (function (){
var f__44390__auto__ = (function (){var switch__44301__auto__ = ((function (c__44389__auto__,jobs,results,process,async){
return (function (state_44681){
var state_val_44682 = (state_44681[(1)]);
if((state_val_44682 === (7))){
var inst_44677 = (state_44681[(2)]);
var state_44681__$1 = state_44681;
var statearr_44683_44747 = state_44681__$1;
(statearr_44683_44747[(2)] = inst_44677);

(statearr_44683_44747[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44682 === (20))){
var state_44681__$1 = state_44681;
var statearr_44684_44748 = state_44681__$1;
(statearr_44684_44748[(2)] = null);

(statearr_44684_44748[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44682 === (1))){
var state_44681__$1 = state_44681;
var statearr_44685_44749 = state_44681__$1;
(statearr_44685_44749[(2)] = null);

(statearr_44685_44749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44682 === (4))){
var inst_44646 = (state_44681[(7)]);
var inst_44646__$1 = (state_44681[(2)]);
var inst_44647 = (inst_44646__$1 == null);
var state_44681__$1 = (function (){var statearr_44686 = state_44681;
(statearr_44686[(7)] = inst_44646__$1);

return statearr_44686;
})();
if(cljs.core.truth_(inst_44647)){
var statearr_44687_44750 = state_44681__$1;
(statearr_44687_44750[(1)] = (5));

} else {
var statearr_44688_44751 = state_44681__$1;
(statearr_44688_44751[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44682 === (15))){
var inst_44659 = (state_44681[(8)]);
var state_44681__$1 = state_44681;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44681__$1,(18),to,inst_44659);
} else {
if((state_val_44682 === (21))){
var inst_44672 = (state_44681[(2)]);
var state_44681__$1 = state_44681;
var statearr_44689_44752 = state_44681__$1;
(statearr_44689_44752[(2)] = inst_44672);

(statearr_44689_44752[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44682 === (13))){
var inst_44674 = (state_44681[(2)]);
var state_44681__$1 = (function (){var statearr_44690 = state_44681;
(statearr_44690[(9)] = inst_44674);

return statearr_44690;
})();
var statearr_44691_44753 = state_44681__$1;
(statearr_44691_44753[(2)] = null);

(statearr_44691_44753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44682 === (6))){
var inst_44646 = (state_44681[(7)]);
var state_44681__$1 = state_44681;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44681__$1,(11),inst_44646);
} else {
if((state_val_44682 === (17))){
var inst_44667 = (state_44681[(2)]);
var state_44681__$1 = state_44681;
if(cljs.core.truth_(inst_44667)){
var statearr_44692_44754 = state_44681__$1;
(statearr_44692_44754[(1)] = (19));

} else {
var statearr_44693_44755 = state_44681__$1;
(statearr_44693_44755[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44682 === (3))){
var inst_44679 = (state_44681[(2)]);
var state_44681__$1 = state_44681;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44681__$1,inst_44679);
} else {
if((state_val_44682 === (12))){
var inst_44656 = (state_44681[(10)]);
var state_44681__$1 = state_44681;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44681__$1,(14),inst_44656);
} else {
if((state_val_44682 === (2))){
var state_44681__$1 = state_44681;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44681__$1,(4),results);
} else {
if((state_val_44682 === (19))){
var state_44681__$1 = state_44681;
var statearr_44694_44756 = state_44681__$1;
(statearr_44694_44756[(2)] = null);

(statearr_44694_44756[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44682 === (11))){
var inst_44656 = (state_44681[(2)]);
var state_44681__$1 = (function (){var statearr_44695 = state_44681;
(statearr_44695[(10)] = inst_44656);

return statearr_44695;
})();
var statearr_44696_44757 = state_44681__$1;
(statearr_44696_44757[(2)] = null);

(statearr_44696_44757[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44682 === (9))){
var state_44681__$1 = state_44681;
var statearr_44697_44758 = state_44681__$1;
(statearr_44697_44758[(2)] = null);

(statearr_44697_44758[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44682 === (5))){
var state_44681__$1 = state_44681;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44698_44759 = state_44681__$1;
(statearr_44698_44759[(1)] = (8));

} else {
var statearr_44699_44760 = state_44681__$1;
(statearr_44699_44760[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44682 === (14))){
var inst_44661 = (state_44681[(11)]);
var inst_44659 = (state_44681[(8)]);
var inst_44659__$1 = (state_44681[(2)]);
var inst_44660 = (inst_44659__$1 == null);
var inst_44661__$1 = cljs.core.not.call(null,inst_44660);
var state_44681__$1 = (function (){var statearr_44700 = state_44681;
(statearr_44700[(11)] = inst_44661__$1);

(statearr_44700[(8)] = inst_44659__$1);

return statearr_44700;
})();
if(inst_44661__$1){
var statearr_44701_44761 = state_44681__$1;
(statearr_44701_44761[(1)] = (15));

} else {
var statearr_44702_44762 = state_44681__$1;
(statearr_44702_44762[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44682 === (16))){
var inst_44661 = (state_44681[(11)]);
var state_44681__$1 = state_44681;
var statearr_44703_44763 = state_44681__$1;
(statearr_44703_44763[(2)] = inst_44661);

(statearr_44703_44763[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44682 === (10))){
var inst_44653 = (state_44681[(2)]);
var state_44681__$1 = state_44681;
var statearr_44704_44764 = state_44681__$1;
(statearr_44704_44764[(2)] = inst_44653);

(statearr_44704_44764[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44682 === (18))){
var inst_44664 = (state_44681[(2)]);
var state_44681__$1 = state_44681;
var statearr_44705_44765 = state_44681__$1;
(statearr_44705_44765[(2)] = inst_44664);

(statearr_44705_44765[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44682 === (8))){
var inst_44650 = cljs.core.async.close_BANG_.call(null,to);
var state_44681__$1 = state_44681;
var statearr_44706_44766 = state_44681__$1;
(statearr_44706_44766[(2)] = inst_44650);

(statearr_44706_44766[(1)] = (10));


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
});})(c__44389__auto__,jobs,results,process,async))
;
return ((function (switch__44301__auto__,c__44389__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44302__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44302__auto____0 = (function (){
var statearr_44707 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44707[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44302__auto__);

(statearr_44707[(1)] = (1));

return statearr_44707;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44302__auto____1 = (function (state_44681){
while(true){
var ret_value__44303__auto__ = (function (){try{while(true){
var result__44304__auto__ = switch__44301__auto__.call(null,state_44681);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44304__auto__;
}
break;
}
}catch (e44708){if((e44708 instanceof Object)){
var ex__44305__auto__ = e44708;
var statearr_44709_44767 = state_44681;
(statearr_44709_44767[(5)] = ex__44305__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44681);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44708;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44768 = state_44681;
state_44681 = G__44768;
continue;
} else {
return ret_value__44303__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44302__auto__ = function(state_44681){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44302__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44302__auto____1.call(this,state_44681);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__44302__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44302__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44302__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44302__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44302__auto__;
})()
;})(switch__44301__auto__,c__44389__auto__,jobs,results,process,async))
})();
var state__44391__auto__ = (function (){var statearr_44710 = f__44390__auto__.call(null);
(statearr_44710[(6)] = c__44389__auto__);

return statearr_44710;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44391__auto__);
});})(c__44389__auto__,jobs,results,process,async))
);

return c__44389__auto__;
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
var G__44770 = arguments.length;
switch (G__44770) {
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
var G__44773 = arguments.length;
switch (G__44773) {
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
var G__44776 = arguments.length;
switch (G__44776) {
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
var c__44389__auto___44825 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44389__auto___44825,tc,fc){
return (function (){
var f__44390__auto__ = (function (){var switch__44301__auto__ = ((function (c__44389__auto___44825,tc,fc){
return (function (state_44802){
var state_val_44803 = (state_44802[(1)]);
if((state_val_44803 === (7))){
var inst_44798 = (state_44802[(2)]);
var state_44802__$1 = state_44802;
var statearr_44804_44826 = state_44802__$1;
(statearr_44804_44826[(2)] = inst_44798);

(statearr_44804_44826[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44803 === (1))){
var state_44802__$1 = state_44802;
var statearr_44805_44827 = state_44802__$1;
(statearr_44805_44827[(2)] = null);

(statearr_44805_44827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44803 === (4))){
var inst_44779 = (state_44802[(7)]);
var inst_44779__$1 = (state_44802[(2)]);
var inst_44780 = (inst_44779__$1 == null);
var state_44802__$1 = (function (){var statearr_44806 = state_44802;
(statearr_44806[(7)] = inst_44779__$1);

return statearr_44806;
})();
if(cljs.core.truth_(inst_44780)){
var statearr_44807_44828 = state_44802__$1;
(statearr_44807_44828[(1)] = (5));

} else {
var statearr_44808_44829 = state_44802__$1;
(statearr_44808_44829[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44803 === (13))){
var state_44802__$1 = state_44802;
var statearr_44809_44830 = state_44802__$1;
(statearr_44809_44830[(2)] = null);

(statearr_44809_44830[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44803 === (6))){
var inst_44779 = (state_44802[(7)]);
var inst_44785 = p.call(null,inst_44779);
var state_44802__$1 = state_44802;
if(cljs.core.truth_(inst_44785)){
var statearr_44810_44831 = state_44802__$1;
(statearr_44810_44831[(1)] = (9));

} else {
var statearr_44811_44832 = state_44802__$1;
(statearr_44811_44832[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44803 === (3))){
var inst_44800 = (state_44802[(2)]);
var state_44802__$1 = state_44802;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44802__$1,inst_44800);
} else {
if((state_val_44803 === (12))){
var state_44802__$1 = state_44802;
var statearr_44812_44833 = state_44802__$1;
(statearr_44812_44833[(2)] = null);

(statearr_44812_44833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44803 === (2))){
var state_44802__$1 = state_44802;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44802__$1,(4),ch);
} else {
if((state_val_44803 === (11))){
var inst_44779 = (state_44802[(7)]);
var inst_44789 = (state_44802[(2)]);
var state_44802__$1 = state_44802;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44802__$1,(8),inst_44789,inst_44779);
} else {
if((state_val_44803 === (9))){
var state_44802__$1 = state_44802;
var statearr_44813_44834 = state_44802__$1;
(statearr_44813_44834[(2)] = tc);

(statearr_44813_44834[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44803 === (5))){
var inst_44782 = cljs.core.async.close_BANG_.call(null,tc);
var inst_44783 = cljs.core.async.close_BANG_.call(null,fc);
var state_44802__$1 = (function (){var statearr_44814 = state_44802;
(statearr_44814[(8)] = inst_44782);

return statearr_44814;
})();
var statearr_44815_44835 = state_44802__$1;
(statearr_44815_44835[(2)] = inst_44783);

(statearr_44815_44835[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44803 === (14))){
var inst_44796 = (state_44802[(2)]);
var state_44802__$1 = state_44802;
var statearr_44816_44836 = state_44802__$1;
(statearr_44816_44836[(2)] = inst_44796);

(statearr_44816_44836[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44803 === (10))){
var state_44802__$1 = state_44802;
var statearr_44817_44837 = state_44802__$1;
(statearr_44817_44837[(2)] = fc);

(statearr_44817_44837[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44803 === (8))){
var inst_44791 = (state_44802[(2)]);
var state_44802__$1 = state_44802;
if(cljs.core.truth_(inst_44791)){
var statearr_44818_44838 = state_44802__$1;
(statearr_44818_44838[(1)] = (12));

} else {
var statearr_44819_44839 = state_44802__$1;
(statearr_44819_44839[(1)] = (13));

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
});})(c__44389__auto___44825,tc,fc))
;
return ((function (switch__44301__auto__,c__44389__auto___44825,tc,fc){
return (function() {
var cljs$core$async$state_machine__44302__auto__ = null;
var cljs$core$async$state_machine__44302__auto____0 = (function (){
var statearr_44820 = [null,null,null,null,null,null,null,null,null];
(statearr_44820[(0)] = cljs$core$async$state_machine__44302__auto__);

(statearr_44820[(1)] = (1));

return statearr_44820;
});
var cljs$core$async$state_machine__44302__auto____1 = (function (state_44802){
while(true){
var ret_value__44303__auto__ = (function (){try{while(true){
var result__44304__auto__ = switch__44301__auto__.call(null,state_44802);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44304__auto__;
}
break;
}
}catch (e44821){if((e44821 instanceof Object)){
var ex__44305__auto__ = e44821;
var statearr_44822_44840 = state_44802;
(statearr_44822_44840[(5)] = ex__44305__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44802);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44821;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44841 = state_44802;
state_44802 = G__44841;
continue;
} else {
return ret_value__44303__auto__;
}
break;
}
});
cljs$core$async$state_machine__44302__auto__ = function(state_44802){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44302__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44302__auto____1.call(this,state_44802);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__44302__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44302__auto____0;
cljs$core$async$state_machine__44302__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44302__auto____1;
return cljs$core$async$state_machine__44302__auto__;
})()
;})(switch__44301__auto__,c__44389__auto___44825,tc,fc))
})();
var state__44391__auto__ = (function (){var statearr_44823 = f__44390__auto__.call(null);
(statearr_44823[(6)] = c__44389__auto___44825);

return statearr_44823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44391__auto__);
});})(c__44389__auto___44825,tc,fc))
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
var c__44389__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44389__auto__){
return (function (){
var f__44390__auto__ = (function (){var switch__44301__auto__ = ((function (c__44389__auto__){
return (function (state_44862){
var state_val_44863 = (state_44862[(1)]);
if((state_val_44863 === (7))){
var inst_44858 = (state_44862[(2)]);
var state_44862__$1 = state_44862;
var statearr_44864_44882 = state_44862__$1;
(statearr_44864_44882[(2)] = inst_44858);

(statearr_44864_44882[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44863 === (1))){
var inst_44842 = init;
var state_44862__$1 = (function (){var statearr_44865 = state_44862;
(statearr_44865[(7)] = inst_44842);

return statearr_44865;
})();
var statearr_44866_44883 = state_44862__$1;
(statearr_44866_44883[(2)] = null);

(statearr_44866_44883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44863 === (4))){
var inst_44845 = (state_44862[(8)]);
var inst_44845__$1 = (state_44862[(2)]);
var inst_44846 = (inst_44845__$1 == null);
var state_44862__$1 = (function (){var statearr_44867 = state_44862;
(statearr_44867[(8)] = inst_44845__$1);

return statearr_44867;
})();
if(cljs.core.truth_(inst_44846)){
var statearr_44868_44884 = state_44862__$1;
(statearr_44868_44884[(1)] = (5));

} else {
var statearr_44869_44885 = state_44862__$1;
(statearr_44869_44885[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44863 === (6))){
var inst_44845 = (state_44862[(8)]);
var inst_44842 = (state_44862[(7)]);
var inst_44849 = (state_44862[(9)]);
var inst_44849__$1 = f.call(null,inst_44842,inst_44845);
var inst_44850 = cljs.core.reduced_QMARK_.call(null,inst_44849__$1);
var state_44862__$1 = (function (){var statearr_44870 = state_44862;
(statearr_44870[(9)] = inst_44849__$1);

return statearr_44870;
})();
if(inst_44850){
var statearr_44871_44886 = state_44862__$1;
(statearr_44871_44886[(1)] = (8));

} else {
var statearr_44872_44887 = state_44862__$1;
(statearr_44872_44887[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44863 === (3))){
var inst_44860 = (state_44862[(2)]);
var state_44862__$1 = state_44862;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44862__$1,inst_44860);
} else {
if((state_val_44863 === (2))){
var state_44862__$1 = state_44862;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44862__$1,(4),ch);
} else {
if((state_val_44863 === (9))){
var inst_44849 = (state_44862[(9)]);
var inst_44842 = inst_44849;
var state_44862__$1 = (function (){var statearr_44873 = state_44862;
(statearr_44873[(7)] = inst_44842);

return statearr_44873;
})();
var statearr_44874_44888 = state_44862__$1;
(statearr_44874_44888[(2)] = null);

(statearr_44874_44888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44863 === (5))){
var inst_44842 = (state_44862[(7)]);
var state_44862__$1 = state_44862;
var statearr_44875_44889 = state_44862__$1;
(statearr_44875_44889[(2)] = inst_44842);

(statearr_44875_44889[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44863 === (10))){
var inst_44856 = (state_44862[(2)]);
var state_44862__$1 = state_44862;
var statearr_44876_44890 = state_44862__$1;
(statearr_44876_44890[(2)] = inst_44856);

(statearr_44876_44890[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44863 === (8))){
var inst_44849 = (state_44862[(9)]);
var inst_44852 = cljs.core.deref.call(null,inst_44849);
var state_44862__$1 = state_44862;
var statearr_44877_44891 = state_44862__$1;
(statearr_44877_44891[(2)] = inst_44852);

(statearr_44877_44891[(1)] = (10));


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
});})(c__44389__auto__))
;
return ((function (switch__44301__auto__,c__44389__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__44302__auto__ = null;
var cljs$core$async$reduce_$_state_machine__44302__auto____0 = (function (){
var statearr_44878 = [null,null,null,null,null,null,null,null,null,null];
(statearr_44878[(0)] = cljs$core$async$reduce_$_state_machine__44302__auto__);

(statearr_44878[(1)] = (1));

return statearr_44878;
});
var cljs$core$async$reduce_$_state_machine__44302__auto____1 = (function (state_44862){
while(true){
var ret_value__44303__auto__ = (function (){try{while(true){
var result__44304__auto__ = switch__44301__auto__.call(null,state_44862);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44304__auto__;
}
break;
}
}catch (e44879){if((e44879 instanceof Object)){
var ex__44305__auto__ = e44879;
var statearr_44880_44892 = state_44862;
(statearr_44880_44892[(5)] = ex__44305__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44862);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44879;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44893 = state_44862;
state_44862 = G__44893;
continue;
} else {
return ret_value__44303__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__44302__auto__ = function(state_44862){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__44302__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__44302__auto____1.call(this,state_44862);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__44302__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__44302__auto____0;
cljs$core$async$reduce_$_state_machine__44302__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__44302__auto____1;
return cljs$core$async$reduce_$_state_machine__44302__auto__;
})()
;})(switch__44301__auto__,c__44389__auto__))
})();
var state__44391__auto__ = (function (){var statearr_44881 = f__44390__auto__.call(null);
(statearr_44881[(6)] = c__44389__auto__);

return statearr_44881;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44391__auto__);
});})(c__44389__auto__))
);

return c__44389__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__44389__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44389__auto__,f__$1){
return (function (){
var f__44390__auto__ = (function (){var switch__44301__auto__ = ((function (c__44389__auto__,f__$1){
return (function (state_44899){
var state_val_44900 = (state_44899[(1)]);
if((state_val_44900 === (1))){
var inst_44894 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_44899__$1 = state_44899;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44899__$1,(2),inst_44894);
} else {
if((state_val_44900 === (2))){
var inst_44896 = (state_44899[(2)]);
var inst_44897 = f__$1.call(null,inst_44896);
var state_44899__$1 = state_44899;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44899__$1,inst_44897);
} else {
return null;
}
}
});})(c__44389__auto__,f__$1))
;
return ((function (switch__44301__auto__,c__44389__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__44302__auto__ = null;
var cljs$core$async$transduce_$_state_machine__44302__auto____0 = (function (){
var statearr_44901 = [null,null,null,null,null,null,null];
(statearr_44901[(0)] = cljs$core$async$transduce_$_state_machine__44302__auto__);

(statearr_44901[(1)] = (1));

return statearr_44901;
});
var cljs$core$async$transduce_$_state_machine__44302__auto____1 = (function (state_44899){
while(true){
var ret_value__44303__auto__ = (function (){try{while(true){
var result__44304__auto__ = switch__44301__auto__.call(null,state_44899);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44304__auto__;
}
break;
}
}catch (e44902){if((e44902 instanceof Object)){
var ex__44305__auto__ = e44902;
var statearr_44903_44905 = state_44899;
(statearr_44903_44905[(5)] = ex__44305__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44899);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44902;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44906 = state_44899;
state_44899 = G__44906;
continue;
} else {
return ret_value__44303__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__44302__auto__ = function(state_44899){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__44302__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__44302__auto____1.call(this,state_44899);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__44302__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__44302__auto____0;
cljs$core$async$transduce_$_state_machine__44302__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__44302__auto____1;
return cljs$core$async$transduce_$_state_machine__44302__auto__;
})()
;})(switch__44301__auto__,c__44389__auto__,f__$1))
})();
var state__44391__auto__ = (function (){var statearr_44904 = f__44390__auto__.call(null);
(statearr_44904[(6)] = c__44389__auto__);

return statearr_44904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44391__auto__);
});})(c__44389__auto__,f__$1))
);

return c__44389__auto__;
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
var G__44908 = arguments.length;
switch (G__44908) {
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
var c__44389__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44389__auto__){
return (function (){
var f__44390__auto__ = (function (){var switch__44301__auto__ = ((function (c__44389__auto__){
return (function (state_44933){
var state_val_44934 = (state_44933[(1)]);
if((state_val_44934 === (7))){
var inst_44915 = (state_44933[(2)]);
var state_44933__$1 = state_44933;
var statearr_44935_44956 = state_44933__$1;
(statearr_44935_44956[(2)] = inst_44915);

(statearr_44935_44956[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44934 === (1))){
var inst_44909 = cljs.core.seq.call(null,coll);
var inst_44910 = inst_44909;
var state_44933__$1 = (function (){var statearr_44936 = state_44933;
(statearr_44936[(7)] = inst_44910);

return statearr_44936;
})();
var statearr_44937_44957 = state_44933__$1;
(statearr_44937_44957[(2)] = null);

(statearr_44937_44957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44934 === (4))){
var inst_44910 = (state_44933[(7)]);
var inst_44913 = cljs.core.first.call(null,inst_44910);
var state_44933__$1 = state_44933;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44933__$1,(7),ch,inst_44913);
} else {
if((state_val_44934 === (13))){
var inst_44927 = (state_44933[(2)]);
var state_44933__$1 = state_44933;
var statearr_44938_44958 = state_44933__$1;
(statearr_44938_44958[(2)] = inst_44927);

(statearr_44938_44958[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44934 === (6))){
var inst_44918 = (state_44933[(2)]);
var state_44933__$1 = state_44933;
if(cljs.core.truth_(inst_44918)){
var statearr_44939_44959 = state_44933__$1;
(statearr_44939_44959[(1)] = (8));

} else {
var statearr_44940_44960 = state_44933__$1;
(statearr_44940_44960[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44934 === (3))){
var inst_44931 = (state_44933[(2)]);
var state_44933__$1 = state_44933;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44933__$1,inst_44931);
} else {
if((state_val_44934 === (12))){
var state_44933__$1 = state_44933;
var statearr_44941_44961 = state_44933__$1;
(statearr_44941_44961[(2)] = null);

(statearr_44941_44961[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44934 === (2))){
var inst_44910 = (state_44933[(7)]);
var state_44933__$1 = state_44933;
if(cljs.core.truth_(inst_44910)){
var statearr_44942_44962 = state_44933__$1;
(statearr_44942_44962[(1)] = (4));

} else {
var statearr_44943_44963 = state_44933__$1;
(statearr_44943_44963[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44934 === (11))){
var inst_44924 = cljs.core.async.close_BANG_.call(null,ch);
var state_44933__$1 = state_44933;
var statearr_44944_44964 = state_44933__$1;
(statearr_44944_44964[(2)] = inst_44924);

(statearr_44944_44964[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44934 === (9))){
var state_44933__$1 = state_44933;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44945_44965 = state_44933__$1;
(statearr_44945_44965[(1)] = (11));

} else {
var statearr_44946_44966 = state_44933__$1;
(statearr_44946_44966[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44934 === (5))){
var inst_44910 = (state_44933[(7)]);
var state_44933__$1 = state_44933;
var statearr_44947_44967 = state_44933__$1;
(statearr_44947_44967[(2)] = inst_44910);

(statearr_44947_44967[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44934 === (10))){
var inst_44929 = (state_44933[(2)]);
var state_44933__$1 = state_44933;
var statearr_44948_44968 = state_44933__$1;
(statearr_44948_44968[(2)] = inst_44929);

(statearr_44948_44968[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44934 === (8))){
var inst_44910 = (state_44933[(7)]);
var inst_44920 = cljs.core.next.call(null,inst_44910);
var inst_44910__$1 = inst_44920;
var state_44933__$1 = (function (){var statearr_44949 = state_44933;
(statearr_44949[(7)] = inst_44910__$1);

return statearr_44949;
})();
var statearr_44950_44969 = state_44933__$1;
(statearr_44950_44969[(2)] = null);

(statearr_44950_44969[(1)] = (2));


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
});})(c__44389__auto__))
;
return ((function (switch__44301__auto__,c__44389__auto__){
return (function() {
var cljs$core$async$state_machine__44302__auto__ = null;
var cljs$core$async$state_machine__44302__auto____0 = (function (){
var statearr_44951 = [null,null,null,null,null,null,null,null];
(statearr_44951[(0)] = cljs$core$async$state_machine__44302__auto__);

(statearr_44951[(1)] = (1));

return statearr_44951;
});
var cljs$core$async$state_machine__44302__auto____1 = (function (state_44933){
while(true){
var ret_value__44303__auto__ = (function (){try{while(true){
var result__44304__auto__ = switch__44301__auto__.call(null,state_44933);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44304__auto__;
}
break;
}
}catch (e44952){if((e44952 instanceof Object)){
var ex__44305__auto__ = e44952;
var statearr_44953_44970 = state_44933;
(statearr_44953_44970[(5)] = ex__44305__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44933);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44952;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44971 = state_44933;
state_44933 = G__44971;
continue;
} else {
return ret_value__44303__auto__;
}
break;
}
});
cljs$core$async$state_machine__44302__auto__ = function(state_44933){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44302__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44302__auto____1.call(this,state_44933);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__44302__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44302__auto____0;
cljs$core$async$state_machine__44302__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44302__auto____1;
return cljs$core$async$state_machine__44302__auto__;
})()
;})(switch__44301__auto__,c__44389__auto__))
})();
var state__44391__auto__ = (function (){var statearr_44954 = f__44390__auto__.call(null);
(statearr_44954[(6)] = c__44389__auto__);

return statearr_44954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44391__auto__);
});})(c__44389__auto__))
);

return c__44389__auto__;
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
var x__37425__auto__ = (((_ == null))?null:_);
var m__37426__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__37425__auto__)]);
if(!((m__37426__auto__ == null))){
return m__37426__auto__.call(null,_);
} else {
var m__37426__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__37426__auto____$1 == null))){
return m__37426__auto____$1.call(null,_);
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
var x__37425__auto__ = (((m == null))?null:m);
var m__37426__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__37425__auto__)]);
if(!((m__37426__auto__ == null))){
return m__37426__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__37426__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__37426__auto____$1 == null))){
return m__37426__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__37425__auto__ = (((m == null))?null:m);
var m__37426__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__37425__auto__)]);
if(!((m__37426__auto__ == null))){
return m__37426__auto__.call(null,m,ch);
} else {
var m__37426__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__37426__auto____$1 == null))){
return m__37426__auto____$1.call(null,m,ch);
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
var x__37425__auto__ = (((m == null))?null:m);
var m__37426__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__37425__auto__)]);
if(!((m__37426__auto__ == null))){
return m__37426__auto__.call(null,m);
} else {
var m__37426__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__37426__auto____$1 == null))){
return m__37426__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async44972 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44972 = (function (ch,cs,meta44973){
this.ch = ch;
this.cs = cs;
this.meta44973 = meta44973;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async44972.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_44974,meta44973__$1){
var self__ = this;
var _44974__$1 = this;
return (new cljs.core.async.t_cljs$core$async44972(self__.ch,self__.cs,meta44973__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async44972.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_44974){
var self__ = this;
var _44974__$1 = this;
return self__.meta44973;
});})(cs))
;

cljs.core.async.t_cljs$core$async44972.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44972.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async44972.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44972.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async44972.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async44972.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async44972.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta44973","meta44973",533453122,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async44972.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44972.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44972";

cljs.core.async.t_cljs$core$async44972.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__37367__auto__,writer__37368__auto__,opt__37369__auto__){
return cljs.core._write.call(null,writer__37368__auto__,"cljs.core.async/t_cljs$core$async44972");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async44972 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async44972(ch__$1,cs__$1,meta44973){
return (new cljs.core.async.t_cljs$core$async44972(ch__$1,cs__$1,meta44973));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async44972(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__44389__auto___45194 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44389__auto___45194,cs,m,dchan,dctr,done){
return (function (){
var f__44390__auto__ = (function (){var switch__44301__auto__ = ((function (c__44389__auto___45194,cs,m,dchan,dctr,done){
return (function (state_45109){
var state_val_45110 = (state_45109[(1)]);
if((state_val_45110 === (7))){
var inst_45105 = (state_45109[(2)]);
var state_45109__$1 = state_45109;
var statearr_45111_45195 = state_45109__$1;
(statearr_45111_45195[(2)] = inst_45105);

(statearr_45111_45195[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45110 === (20))){
var inst_45008 = (state_45109[(7)]);
var inst_45020 = cljs.core.first.call(null,inst_45008);
var inst_45021 = cljs.core.nth.call(null,inst_45020,(0),null);
var inst_45022 = cljs.core.nth.call(null,inst_45020,(1),null);
var state_45109__$1 = (function (){var statearr_45112 = state_45109;
(statearr_45112[(8)] = inst_45021);

return statearr_45112;
})();
if(cljs.core.truth_(inst_45022)){
var statearr_45113_45196 = state_45109__$1;
(statearr_45113_45196[(1)] = (22));

} else {
var statearr_45114_45197 = state_45109__$1;
(statearr_45114_45197[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45110 === (27))){
var inst_45052 = (state_45109[(9)]);
var inst_45057 = (state_45109[(10)]);
var inst_45050 = (state_45109[(11)]);
var inst_44977 = (state_45109[(12)]);
var inst_45057__$1 = cljs.core._nth.call(null,inst_45050,inst_45052);
var inst_45058 = cljs.core.async.put_BANG_.call(null,inst_45057__$1,inst_44977,done);
var state_45109__$1 = (function (){var statearr_45115 = state_45109;
(statearr_45115[(10)] = inst_45057__$1);

return statearr_45115;
})();
if(cljs.core.truth_(inst_45058)){
var statearr_45116_45198 = state_45109__$1;
(statearr_45116_45198[(1)] = (30));

} else {
var statearr_45117_45199 = state_45109__$1;
(statearr_45117_45199[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45110 === (1))){
var state_45109__$1 = state_45109;
var statearr_45118_45200 = state_45109__$1;
(statearr_45118_45200[(2)] = null);

(statearr_45118_45200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45110 === (24))){
var inst_45008 = (state_45109[(7)]);
var inst_45027 = (state_45109[(2)]);
var inst_45028 = cljs.core.next.call(null,inst_45008);
var inst_44986 = inst_45028;
var inst_44987 = null;
var inst_44988 = (0);
var inst_44989 = (0);
var state_45109__$1 = (function (){var statearr_45119 = state_45109;
(statearr_45119[(13)] = inst_45027);

(statearr_45119[(14)] = inst_44988);

(statearr_45119[(15)] = inst_44986);

(statearr_45119[(16)] = inst_44987);

(statearr_45119[(17)] = inst_44989);

return statearr_45119;
})();
var statearr_45120_45201 = state_45109__$1;
(statearr_45120_45201[(2)] = null);

(statearr_45120_45201[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45110 === (39))){
var state_45109__$1 = state_45109;
var statearr_45124_45202 = state_45109__$1;
(statearr_45124_45202[(2)] = null);

(statearr_45124_45202[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45110 === (4))){
var inst_44977 = (state_45109[(12)]);
var inst_44977__$1 = (state_45109[(2)]);
var inst_44978 = (inst_44977__$1 == null);
var state_45109__$1 = (function (){var statearr_45125 = state_45109;
(statearr_45125[(12)] = inst_44977__$1);

return statearr_45125;
})();
if(cljs.core.truth_(inst_44978)){
var statearr_45126_45203 = state_45109__$1;
(statearr_45126_45203[(1)] = (5));

} else {
var statearr_45127_45204 = state_45109__$1;
(statearr_45127_45204[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45110 === (15))){
var inst_44988 = (state_45109[(14)]);
var inst_44986 = (state_45109[(15)]);
var inst_44987 = (state_45109[(16)]);
var inst_44989 = (state_45109[(17)]);
var inst_45004 = (state_45109[(2)]);
var inst_45005 = (inst_44989 + (1));
var tmp45121 = inst_44988;
var tmp45122 = inst_44986;
var tmp45123 = inst_44987;
var inst_44986__$1 = tmp45122;
var inst_44987__$1 = tmp45123;
var inst_44988__$1 = tmp45121;
var inst_44989__$1 = inst_45005;
var state_45109__$1 = (function (){var statearr_45128 = state_45109;
(statearr_45128[(14)] = inst_44988__$1);

(statearr_45128[(18)] = inst_45004);

(statearr_45128[(15)] = inst_44986__$1);

(statearr_45128[(16)] = inst_44987__$1);

(statearr_45128[(17)] = inst_44989__$1);

return statearr_45128;
})();
var statearr_45129_45205 = state_45109__$1;
(statearr_45129_45205[(2)] = null);

(statearr_45129_45205[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45110 === (21))){
var inst_45031 = (state_45109[(2)]);
var state_45109__$1 = state_45109;
var statearr_45133_45206 = state_45109__$1;
(statearr_45133_45206[(2)] = inst_45031);

(statearr_45133_45206[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45110 === (31))){
var inst_45057 = (state_45109[(10)]);
var inst_45061 = done.call(null,null);
var inst_45062 = cljs.core.async.untap_STAR_.call(null,m,inst_45057);
var state_45109__$1 = (function (){var statearr_45134 = state_45109;
(statearr_45134[(19)] = inst_45061);

return statearr_45134;
})();
var statearr_45135_45207 = state_45109__$1;
(statearr_45135_45207[(2)] = inst_45062);

(statearr_45135_45207[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45110 === (32))){
var inst_45049 = (state_45109[(20)]);
var inst_45052 = (state_45109[(9)]);
var inst_45050 = (state_45109[(11)]);
var inst_45051 = (state_45109[(21)]);
var inst_45064 = (state_45109[(2)]);
var inst_45065 = (inst_45052 + (1));
var tmp45130 = inst_45049;
var tmp45131 = inst_45050;
var tmp45132 = inst_45051;
var inst_45049__$1 = tmp45130;
var inst_45050__$1 = tmp45131;
var inst_45051__$1 = tmp45132;
var inst_45052__$1 = inst_45065;
var state_45109__$1 = (function (){var statearr_45136 = state_45109;
(statearr_45136[(20)] = inst_45049__$1);

(statearr_45136[(9)] = inst_45052__$1);

(statearr_45136[(11)] = inst_45050__$1);

(statearr_45136[(22)] = inst_45064);

(statearr_45136[(21)] = inst_45051__$1);

return statearr_45136;
})();
var statearr_45137_45208 = state_45109__$1;
(statearr_45137_45208[(2)] = null);

(statearr_45137_45208[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45110 === (40))){
var inst_45077 = (state_45109[(23)]);
var inst_45081 = done.call(null,null);
var inst_45082 = cljs.core.async.untap_STAR_.call(null,m,inst_45077);
var state_45109__$1 = (function (){var statearr_45138 = state_45109;
(statearr_45138[(24)] = inst_45081);

return statearr_45138;
})();
var statearr_45139_45209 = state_45109__$1;
(statearr_45139_45209[(2)] = inst_45082);

(statearr_45139_45209[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45110 === (33))){
var inst_45068 = (state_45109[(25)]);
var inst_45070 = cljs.core.chunked_seq_QMARK_.call(null,inst_45068);
var state_45109__$1 = state_45109;
if(inst_45070){
var statearr_45140_45210 = state_45109__$1;
(statearr_45140_45210[(1)] = (36));

} else {
var statearr_45141_45211 = state_45109__$1;
(statearr_45141_45211[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45110 === (13))){
var inst_44998 = (state_45109[(26)]);
var inst_45001 = cljs.core.async.close_BANG_.call(null,inst_44998);
var state_45109__$1 = state_45109;
var statearr_45142_45212 = state_45109__$1;
(statearr_45142_45212[(2)] = inst_45001);

(statearr_45142_45212[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45110 === (22))){
var inst_45021 = (state_45109[(8)]);
var inst_45024 = cljs.core.async.close_BANG_.call(null,inst_45021);
var state_45109__$1 = state_45109;
var statearr_45143_45213 = state_45109__$1;
(statearr_45143_45213[(2)] = inst_45024);

(statearr_45143_45213[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45110 === (36))){
var inst_45068 = (state_45109[(25)]);
var inst_45072 = cljs.core.chunk_first.call(null,inst_45068);
var inst_45073 = cljs.core.chunk_rest.call(null,inst_45068);
var inst_45074 = cljs.core.count.call(null,inst_45072);
var inst_45049 = inst_45073;
var inst_45050 = inst_45072;
var inst_45051 = inst_45074;
var inst_45052 = (0);
var state_45109__$1 = (function (){var statearr_45144 = state_45109;
(statearr_45144[(20)] = inst_45049);

(statearr_45144[(9)] = inst_45052);

(statearr_45144[(11)] = inst_45050);

(statearr_45144[(21)] = inst_45051);

return statearr_45144;
})();
var statearr_45145_45214 = state_45109__$1;
(statearr_45145_45214[(2)] = null);

(statearr_45145_45214[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45110 === (41))){
var inst_45068 = (state_45109[(25)]);
var inst_45084 = (state_45109[(2)]);
var inst_45085 = cljs.core.next.call(null,inst_45068);
var inst_45049 = inst_45085;
var inst_45050 = null;
var inst_45051 = (0);
var inst_45052 = (0);
var state_45109__$1 = (function (){var statearr_45146 = state_45109;
(statearr_45146[(20)] = inst_45049);

(statearr_45146[(27)] = inst_45084);

(statearr_45146[(9)] = inst_45052);

(statearr_45146[(11)] = inst_45050);

(statearr_45146[(21)] = inst_45051);

return statearr_45146;
})();
var statearr_45147_45215 = state_45109__$1;
(statearr_45147_45215[(2)] = null);

(statearr_45147_45215[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45110 === (43))){
var state_45109__$1 = state_45109;
var statearr_45148_45216 = state_45109__$1;
(statearr_45148_45216[(2)] = null);

(statearr_45148_45216[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45110 === (29))){
var inst_45093 = (state_45109[(2)]);
var state_45109__$1 = state_45109;
var statearr_45149_45217 = state_45109__$1;
(statearr_45149_45217[(2)] = inst_45093);

(statearr_45149_45217[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45110 === (44))){
var inst_45102 = (state_45109[(2)]);
var state_45109__$1 = (function (){var statearr_45150 = state_45109;
(statearr_45150[(28)] = inst_45102);

return statearr_45150;
})();
var statearr_45151_45218 = state_45109__$1;
(statearr_45151_45218[(2)] = null);

(statearr_45151_45218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45110 === (6))){
var inst_45041 = (state_45109[(29)]);
var inst_45040 = cljs.core.deref.call(null,cs);
var inst_45041__$1 = cljs.core.keys.call(null,inst_45040);
var inst_45042 = cljs.core.count.call(null,inst_45041__$1);
var inst_45043 = cljs.core.reset_BANG_.call(null,dctr,inst_45042);
var inst_45048 = cljs.core.seq.call(null,inst_45041__$1);
var inst_45049 = inst_45048;
var inst_45050 = null;
var inst_45051 = (0);
var inst_45052 = (0);
var state_45109__$1 = (function (){var statearr_45152 = state_45109;
(statearr_45152[(20)] = inst_45049);

(statearr_45152[(30)] = inst_45043);

(statearr_45152[(29)] = inst_45041__$1);

(statearr_45152[(9)] = inst_45052);

(statearr_45152[(11)] = inst_45050);

(statearr_45152[(21)] = inst_45051);

return statearr_45152;
})();
var statearr_45153_45219 = state_45109__$1;
(statearr_45153_45219[(2)] = null);

(statearr_45153_45219[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45110 === (28))){
var inst_45049 = (state_45109[(20)]);
var inst_45068 = (state_45109[(25)]);
var inst_45068__$1 = cljs.core.seq.call(null,inst_45049);
var state_45109__$1 = (function (){var statearr_45154 = state_45109;
(statearr_45154[(25)] = inst_45068__$1);

return statearr_45154;
})();
if(inst_45068__$1){
var statearr_45155_45220 = state_45109__$1;
(statearr_45155_45220[(1)] = (33));

} else {
var statearr_45156_45221 = state_45109__$1;
(statearr_45156_45221[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45110 === (25))){
var inst_45052 = (state_45109[(9)]);
var inst_45051 = (state_45109[(21)]);
var inst_45054 = (inst_45052 < inst_45051);
var inst_45055 = inst_45054;
var state_45109__$1 = state_45109;
if(cljs.core.truth_(inst_45055)){
var statearr_45157_45222 = state_45109__$1;
(statearr_45157_45222[(1)] = (27));

} else {
var statearr_45158_45223 = state_45109__$1;
(statearr_45158_45223[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45110 === (34))){
var state_45109__$1 = state_45109;
var statearr_45159_45224 = state_45109__$1;
(statearr_45159_45224[(2)] = null);

(statearr_45159_45224[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45110 === (17))){
var state_45109__$1 = state_45109;
var statearr_45160_45225 = state_45109__$1;
(statearr_45160_45225[(2)] = null);

(statearr_45160_45225[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45110 === (3))){
var inst_45107 = (state_45109[(2)]);
var state_45109__$1 = state_45109;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45109__$1,inst_45107);
} else {
if((state_val_45110 === (12))){
var inst_45036 = (state_45109[(2)]);
var state_45109__$1 = state_45109;
var statearr_45161_45226 = state_45109__$1;
(statearr_45161_45226[(2)] = inst_45036);

(statearr_45161_45226[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45110 === (2))){
var state_45109__$1 = state_45109;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45109__$1,(4),ch);
} else {
if((state_val_45110 === (23))){
var state_45109__$1 = state_45109;
var statearr_45162_45227 = state_45109__$1;
(statearr_45162_45227[(2)] = null);

(statearr_45162_45227[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45110 === (35))){
var inst_45091 = (state_45109[(2)]);
var state_45109__$1 = state_45109;
var statearr_45163_45228 = state_45109__$1;
(statearr_45163_45228[(2)] = inst_45091);

(statearr_45163_45228[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45110 === (19))){
var inst_45008 = (state_45109[(7)]);
var inst_45012 = cljs.core.chunk_first.call(null,inst_45008);
var inst_45013 = cljs.core.chunk_rest.call(null,inst_45008);
var inst_45014 = cljs.core.count.call(null,inst_45012);
var inst_44986 = inst_45013;
var inst_44987 = inst_45012;
var inst_44988 = inst_45014;
var inst_44989 = (0);
var state_45109__$1 = (function (){var statearr_45164 = state_45109;
(statearr_45164[(14)] = inst_44988);

(statearr_45164[(15)] = inst_44986);

(statearr_45164[(16)] = inst_44987);

(statearr_45164[(17)] = inst_44989);

return statearr_45164;
})();
var statearr_45165_45229 = state_45109__$1;
(statearr_45165_45229[(2)] = null);

(statearr_45165_45229[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45110 === (11))){
var inst_44986 = (state_45109[(15)]);
var inst_45008 = (state_45109[(7)]);
var inst_45008__$1 = cljs.core.seq.call(null,inst_44986);
var state_45109__$1 = (function (){var statearr_45166 = state_45109;
(statearr_45166[(7)] = inst_45008__$1);

return statearr_45166;
})();
if(inst_45008__$1){
var statearr_45167_45230 = state_45109__$1;
(statearr_45167_45230[(1)] = (16));

} else {
var statearr_45168_45231 = state_45109__$1;
(statearr_45168_45231[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45110 === (9))){
var inst_45038 = (state_45109[(2)]);
var state_45109__$1 = state_45109;
var statearr_45169_45232 = state_45109__$1;
(statearr_45169_45232[(2)] = inst_45038);

(statearr_45169_45232[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45110 === (5))){
var inst_44984 = cljs.core.deref.call(null,cs);
var inst_44985 = cljs.core.seq.call(null,inst_44984);
var inst_44986 = inst_44985;
var inst_44987 = null;
var inst_44988 = (0);
var inst_44989 = (0);
var state_45109__$1 = (function (){var statearr_45170 = state_45109;
(statearr_45170[(14)] = inst_44988);

(statearr_45170[(15)] = inst_44986);

(statearr_45170[(16)] = inst_44987);

(statearr_45170[(17)] = inst_44989);

return statearr_45170;
})();
var statearr_45171_45233 = state_45109__$1;
(statearr_45171_45233[(2)] = null);

(statearr_45171_45233[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45110 === (14))){
var state_45109__$1 = state_45109;
var statearr_45172_45234 = state_45109__$1;
(statearr_45172_45234[(2)] = null);

(statearr_45172_45234[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45110 === (45))){
var inst_45099 = (state_45109[(2)]);
var state_45109__$1 = state_45109;
var statearr_45173_45235 = state_45109__$1;
(statearr_45173_45235[(2)] = inst_45099);

(statearr_45173_45235[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45110 === (26))){
var inst_45041 = (state_45109[(29)]);
var inst_45095 = (state_45109[(2)]);
var inst_45096 = cljs.core.seq.call(null,inst_45041);
var state_45109__$1 = (function (){var statearr_45174 = state_45109;
(statearr_45174[(31)] = inst_45095);

return statearr_45174;
})();
if(inst_45096){
var statearr_45175_45236 = state_45109__$1;
(statearr_45175_45236[(1)] = (42));

} else {
var statearr_45176_45237 = state_45109__$1;
(statearr_45176_45237[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45110 === (16))){
var inst_45008 = (state_45109[(7)]);
var inst_45010 = cljs.core.chunked_seq_QMARK_.call(null,inst_45008);
var state_45109__$1 = state_45109;
if(inst_45010){
var statearr_45177_45238 = state_45109__$1;
(statearr_45177_45238[(1)] = (19));

} else {
var statearr_45178_45239 = state_45109__$1;
(statearr_45178_45239[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45110 === (38))){
var inst_45088 = (state_45109[(2)]);
var state_45109__$1 = state_45109;
var statearr_45179_45240 = state_45109__$1;
(statearr_45179_45240[(2)] = inst_45088);

(statearr_45179_45240[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45110 === (30))){
var state_45109__$1 = state_45109;
var statearr_45180_45241 = state_45109__$1;
(statearr_45180_45241[(2)] = null);

(statearr_45180_45241[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45110 === (10))){
var inst_44987 = (state_45109[(16)]);
var inst_44989 = (state_45109[(17)]);
var inst_44997 = cljs.core._nth.call(null,inst_44987,inst_44989);
var inst_44998 = cljs.core.nth.call(null,inst_44997,(0),null);
var inst_44999 = cljs.core.nth.call(null,inst_44997,(1),null);
var state_45109__$1 = (function (){var statearr_45181 = state_45109;
(statearr_45181[(26)] = inst_44998);

return statearr_45181;
})();
if(cljs.core.truth_(inst_44999)){
var statearr_45182_45242 = state_45109__$1;
(statearr_45182_45242[(1)] = (13));

} else {
var statearr_45183_45243 = state_45109__$1;
(statearr_45183_45243[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45110 === (18))){
var inst_45034 = (state_45109[(2)]);
var state_45109__$1 = state_45109;
var statearr_45184_45244 = state_45109__$1;
(statearr_45184_45244[(2)] = inst_45034);

(statearr_45184_45244[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45110 === (42))){
var state_45109__$1 = state_45109;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45109__$1,(45),dchan);
} else {
if((state_val_45110 === (37))){
var inst_45068 = (state_45109[(25)]);
var inst_44977 = (state_45109[(12)]);
var inst_45077 = (state_45109[(23)]);
var inst_45077__$1 = cljs.core.first.call(null,inst_45068);
var inst_45078 = cljs.core.async.put_BANG_.call(null,inst_45077__$1,inst_44977,done);
var state_45109__$1 = (function (){var statearr_45185 = state_45109;
(statearr_45185[(23)] = inst_45077__$1);

return statearr_45185;
})();
if(cljs.core.truth_(inst_45078)){
var statearr_45186_45245 = state_45109__$1;
(statearr_45186_45245[(1)] = (39));

} else {
var statearr_45187_45246 = state_45109__$1;
(statearr_45187_45246[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45110 === (8))){
var inst_44988 = (state_45109[(14)]);
var inst_44989 = (state_45109[(17)]);
var inst_44991 = (inst_44989 < inst_44988);
var inst_44992 = inst_44991;
var state_45109__$1 = state_45109;
if(cljs.core.truth_(inst_44992)){
var statearr_45188_45247 = state_45109__$1;
(statearr_45188_45247[(1)] = (10));

} else {
var statearr_45189_45248 = state_45109__$1;
(statearr_45189_45248[(1)] = (11));

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
});})(c__44389__auto___45194,cs,m,dchan,dctr,done))
;
return ((function (switch__44301__auto__,c__44389__auto___45194,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__44302__auto__ = null;
var cljs$core$async$mult_$_state_machine__44302__auto____0 = (function (){
var statearr_45190 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45190[(0)] = cljs$core$async$mult_$_state_machine__44302__auto__);

(statearr_45190[(1)] = (1));

return statearr_45190;
});
var cljs$core$async$mult_$_state_machine__44302__auto____1 = (function (state_45109){
while(true){
var ret_value__44303__auto__ = (function (){try{while(true){
var result__44304__auto__ = switch__44301__auto__.call(null,state_45109);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44304__auto__;
}
break;
}
}catch (e45191){if((e45191 instanceof Object)){
var ex__44305__auto__ = e45191;
var statearr_45192_45249 = state_45109;
(statearr_45192_45249[(5)] = ex__44305__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45109);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45191;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45250 = state_45109;
state_45109 = G__45250;
continue;
} else {
return ret_value__44303__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__44302__auto__ = function(state_45109){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__44302__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__44302__auto____1.call(this,state_45109);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__44302__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__44302__auto____0;
cljs$core$async$mult_$_state_machine__44302__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__44302__auto____1;
return cljs$core$async$mult_$_state_machine__44302__auto__;
})()
;})(switch__44301__auto__,c__44389__auto___45194,cs,m,dchan,dctr,done))
})();
var state__44391__auto__ = (function (){var statearr_45193 = f__44390__auto__.call(null);
(statearr_45193[(6)] = c__44389__auto___45194);

return statearr_45193;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44391__auto__);
});})(c__44389__auto___45194,cs,m,dchan,dctr,done))
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
var G__45252 = arguments.length;
switch (G__45252) {
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
var x__37425__auto__ = (((m == null))?null:m);
var m__37426__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__37425__auto__)]);
if(!((m__37426__auto__ == null))){
return m__37426__auto__.call(null,m,ch);
} else {
var m__37426__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__37426__auto____$1 == null))){
return m__37426__auto____$1.call(null,m,ch);
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
var x__37425__auto__ = (((m == null))?null:m);
var m__37426__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__37425__auto__)]);
if(!((m__37426__auto__ == null))){
return m__37426__auto__.call(null,m,ch);
} else {
var m__37426__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__37426__auto____$1 == null))){
return m__37426__auto____$1.call(null,m,ch);
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
var x__37425__auto__ = (((m == null))?null:m);
var m__37426__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__37425__auto__)]);
if(!((m__37426__auto__ == null))){
return m__37426__auto__.call(null,m);
} else {
var m__37426__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__37426__auto____$1 == null))){
return m__37426__auto____$1.call(null,m);
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
var x__37425__auto__ = (((m == null))?null:m);
var m__37426__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__37425__auto__)]);
if(!((m__37426__auto__ == null))){
return m__37426__auto__.call(null,m,state_map);
} else {
var m__37426__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__37426__auto____$1 == null))){
return m__37426__auto____$1.call(null,m,state_map);
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
var x__37425__auto__ = (((m == null))?null:m);
var m__37426__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__37425__auto__)]);
if(!((m__37426__auto__ == null))){
return m__37426__auto__.call(null,m,mode);
} else {
var m__37426__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__37426__auto____$1 == null))){
return m__37426__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__37888__auto__ = [];
var len__37881__auto___45264 = arguments.length;
var i__37882__auto___45265 = (0);
while(true){
if((i__37882__auto___45265 < len__37881__auto___45264)){
args__37888__auto__.push((arguments[i__37882__auto___45265]));

var G__45266 = (i__37882__auto___45265 + (1));
i__37882__auto___45265 = G__45266;
continue;
} else {
}
break;
}

var argseq__37889__auto__ = ((((3) < args__37888__auto__.length))?(new cljs.core.IndexedSeq(args__37888__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__37889__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__45258){
var map__45259 = p__45258;
var map__45259__$1 = ((((!((map__45259 == null)))?((((map__45259.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45259.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45259):map__45259);
var opts = map__45259__$1;
var statearr_45261_45267 = state;
(statearr_45261_45267[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__45259,map__45259__$1,opts){
return (function (val){
var statearr_45262_45268 = state;
(statearr_45262_45268[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__45259,map__45259__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_45263_45269 = state;
(statearr_45263_45269[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq45254){
var G__45255 = cljs.core.first.call(null,seq45254);
var seq45254__$1 = cljs.core.next.call(null,seq45254);
var G__45256 = cljs.core.first.call(null,seq45254__$1);
var seq45254__$2 = cljs.core.next.call(null,seq45254__$1);
var G__45257 = cljs.core.first.call(null,seq45254__$2);
var seq45254__$3 = cljs.core.next.call(null,seq45254__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__45255,G__45256,G__45257,seq45254__$3);
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
if(typeof cljs.core.async.t_cljs$core$async45270 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45270 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta45271){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta45271 = meta45271;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45270.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_45272,meta45271__$1){
var self__ = this;
var _45272__$1 = this;
return (new cljs.core.async.t_cljs$core$async45270(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta45271__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45270.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_45272){
var self__ = this;
var _45272__$1 = this;
return self__.meta45271;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45270.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45270.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45270.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45270.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45270.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45270.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45270.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45270.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async45270.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta45271","meta45271",-268867718,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45270.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45270.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45270";

cljs.core.async.t_cljs$core$async45270.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__37367__auto__,writer__37368__auto__,opt__37369__auto__){
return cljs.core._write.call(null,writer__37368__auto__,"cljs.core.async/t_cljs$core$async45270");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async45270 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async45270(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta45271){
return (new cljs.core.async.t_cljs$core$async45270(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta45271));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async45270(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__44389__auto___45434 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44389__auto___45434,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__44390__auto__ = (function (){var switch__44301__auto__ = ((function (c__44389__auto___45434,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_45374){
var state_val_45375 = (state_45374[(1)]);
if((state_val_45375 === (7))){
var inst_45289 = (state_45374[(2)]);
var state_45374__$1 = state_45374;
var statearr_45376_45435 = state_45374__$1;
(statearr_45376_45435[(2)] = inst_45289);

(statearr_45376_45435[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45375 === (20))){
var inst_45301 = (state_45374[(7)]);
var state_45374__$1 = state_45374;
var statearr_45377_45436 = state_45374__$1;
(statearr_45377_45436[(2)] = inst_45301);

(statearr_45377_45436[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45375 === (27))){
var state_45374__$1 = state_45374;
var statearr_45378_45437 = state_45374__$1;
(statearr_45378_45437[(2)] = null);

(statearr_45378_45437[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45375 === (1))){
var inst_45276 = (state_45374[(8)]);
var inst_45276__$1 = calc_state.call(null);
var inst_45278 = (inst_45276__$1 == null);
var inst_45279 = cljs.core.not.call(null,inst_45278);
var state_45374__$1 = (function (){var statearr_45379 = state_45374;
(statearr_45379[(8)] = inst_45276__$1);

return statearr_45379;
})();
if(inst_45279){
var statearr_45380_45438 = state_45374__$1;
(statearr_45380_45438[(1)] = (2));

} else {
var statearr_45381_45439 = state_45374__$1;
(statearr_45381_45439[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45375 === (24))){
var inst_45334 = (state_45374[(9)]);
var inst_45348 = (state_45374[(10)]);
var inst_45325 = (state_45374[(11)]);
var inst_45348__$1 = inst_45325.call(null,inst_45334);
var state_45374__$1 = (function (){var statearr_45382 = state_45374;
(statearr_45382[(10)] = inst_45348__$1);

return statearr_45382;
})();
if(cljs.core.truth_(inst_45348__$1)){
var statearr_45383_45440 = state_45374__$1;
(statearr_45383_45440[(1)] = (29));

} else {
var statearr_45384_45441 = state_45374__$1;
(statearr_45384_45441[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45375 === (4))){
var inst_45292 = (state_45374[(2)]);
var state_45374__$1 = state_45374;
if(cljs.core.truth_(inst_45292)){
var statearr_45385_45442 = state_45374__$1;
(statearr_45385_45442[(1)] = (8));

} else {
var statearr_45386_45443 = state_45374__$1;
(statearr_45386_45443[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45375 === (15))){
var inst_45319 = (state_45374[(2)]);
var state_45374__$1 = state_45374;
if(cljs.core.truth_(inst_45319)){
var statearr_45387_45444 = state_45374__$1;
(statearr_45387_45444[(1)] = (19));

} else {
var statearr_45388_45445 = state_45374__$1;
(statearr_45388_45445[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45375 === (21))){
var inst_45324 = (state_45374[(12)]);
var inst_45324__$1 = (state_45374[(2)]);
var inst_45325 = cljs.core.get.call(null,inst_45324__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_45326 = cljs.core.get.call(null,inst_45324__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_45327 = cljs.core.get.call(null,inst_45324__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_45374__$1 = (function (){var statearr_45389 = state_45374;
(statearr_45389[(12)] = inst_45324__$1);

(statearr_45389[(11)] = inst_45325);

(statearr_45389[(13)] = inst_45326);

return statearr_45389;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_45374__$1,(22),inst_45327);
} else {
if((state_val_45375 === (31))){
var inst_45356 = (state_45374[(2)]);
var state_45374__$1 = state_45374;
if(cljs.core.truth_(inst_45356)){
var statearr_45390_45446 = state_45374__$1;
(statearr_45390_45446[(1)] = (32));

} else {
var statearr_45391_45447 = state_45374__$1;
(statearr_45391_45447[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45375 === (32))){
var inst_45333 = (state_45374[(14)]);
var state_45374__$1 = state_45374;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45374__$1,(35),out,inst_45333);
} else {
if((state_val_45375 === (33))){
var inst_45324 = (state_45374[(12)]);
var inst_45301 = inst_45324;
var state_45374__$1 = (function (){var statearr_45392 = state_45374;
(statearr_45392[(7)] = inst_45301);

return statearr_45392;
})();
var statearr_45393_45448 = state_45374__$1;
(statearr_45393_45448[(2)] = null);

(statearr_45393_45448[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45375 === (13))){
var inst_45301 = (state_45374[(7)]);
var inst_45308 = inst_45301.cljs$lang$protocol_mask$partition0$;
var inst_45309 = (inst_45308 & (64));
var inst_45310 = inst_45301.cljs$core$ISeq$;
var inst_45311 = (cljs.core.PROTOCOL_SENTINEL === inst_45310);
var inst_45312 = (inst_45309) || (inst_45311);
var state_45374__$1 = state_45374;
if(cljs.core.truth_(inst_45312)){
var statearr_45394_45449 = state_45374__$1;
(statearr_45394_45449[(1)] = (16));

} else {
var statearr_45395_45450 = state_45374__$1;
(statearr_45395_45450[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45375 === (22))){
var inst_45334 = (state_45374[(9)]);
var inst_45333 = (state_45374[(14)]);
var inst_45332 = (state_45374[(2)]);
var inst_45333__$1 = cljs.core.nth.call(null,inst_45332,(0),null);
var inst_45334__$1 = cljs.core.nth.call(null,inst_45332,(1),null);
var inst_45335 = (inst_45333__$1 == null);
var inst_45336 = cljs.core._EQ_.call(null,inst_45334__$1,change);
var inst_45337 = (inst_45335) || (inst_45336);
var state_45374__$1 = (function (){var statearr_45396 = state_45374;
(statearr_45396[(9)] = inst_45334__$1);

(statearr_45396[(14)] = inst_45333__$1);

return statearr_45396;
})();
if(cljs.core.truth_(inst_45337)){
var statearr_45397_45451 = state_45374__$1;
(statearr_45397_45451[(1)] = (23));

} else {
var statearr_45398_45452 = state_45374__$1;
(statearr_45398_45452[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45375 === (36))){
var inst_45324 = (state_45374[(12)]);
var inst_45301 = inst_45324;
var state_45374__$1 = (function (){var statearr_45399 = state_45374;
(statearr_45399[(7)] = inst_45301);

return statearr_45399;
})();
var statearr_45400_45453 = state_45374__$1;
(statearr_45400_45453[(2)] = null);

(statearr_45400_45453[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45375 === (29))){
var inst_45348 = (state_45374[(10)]);
var state_45374__$1 = state_45374;
var statearr_45401_45454 = state_45374__$1;
(statearr_45401_45454[(2)] = inst_45348);

(statearr_45401_45454[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45375 === (6))){
var state_45374__$1 = state_45374;
var statearr_45402_45455 = state_45374__$1;
(statearr_45402_45455[(2)] = false);

(statearr_45402_45455[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45375 === (28))){
var inst_45344 = (state_45374[(2)]);
var inst_45345 = calc_state.call(null);
var inst_45301 = inst_45345;
var state_45374__$1 = (function (){var statearr_45403 = state_45374;
(statearr_45403[(7)] = inst_45301);

(statearr_45403[(15)] = inst_45344);

return statearr_45403;
})();
var statearr_45404_45456 = state_45374__$1;
(statearr_45404_45456[(2)] = null);

(statearr_45404_45456[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45375 === (25))){
var inst_45370 = (state_45374[(2)]);
var state_45374__$1 = state_45374;
var statearr_45405_45457 = state_45374__$1;
(statearr_45405_45457[(2)] = inst_45370);

(statearr_45405_45457[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45375 === (34))){
var inst_45368 = (state_45374[(2)]);
var state_45374__$1 = state_45374;
var statearr_45406_45458 = state_45374__$1;
(statearr_45406_45458[(2)] = inst_45368);

(statearr_45406_45458[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45375 === (17))){
var state_45374__$1 = state_45374;
var statearr_45407_45459 = state_45374__$1;
(statearr_45407_45459[(2)] = false);

(statearr_45407_45459[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45375 === (3))){
var state_45374__$1 = state_45374;
var statearr_45408_45460 = state_45374__$1;
(statearr_45408_45460[(2)] = false);

(statearr_45408_45460[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45375 === (12))){
var inst_45372 = (state_45374[(2)]);
var state_45374__$1 = state_45374;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45374__$1,inst_45372);
} else {
if((state_val_45375 === (2))){
var inst_45276 = (state_45374[(8)]);
var inst_45281 = inst_45276.cljs$lang$protocol_mask$partition0$;
var inst_45282 = (inst_45281 & (64));
var inst_45283 = inst_45276.cljs$core$ISeq$;
var inst_45284 = (cljs.core.PROTOCOL_SENTINEL === inst_45283);
var inst_45285 = (inst_45282) || (inst_45284);
var state_45374__$1 = state_45374;
if(cljs.core.truth_(inst_45285)){
var statearr_45409_45461 = state_45374__$1;
(statearr_45409_45461[(1)] = (5));

} else {
var statearr_45410_45462 = state_45374__$1;
(statearr_45410_45462[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45375 === (23))){
var inst_45333 = (state_45374[(14)]);
var inst_45339 = (inst_45333 == null);
var state_45374__$1 = state_45374;
if(cljs.core.truth_(inst_45339)){
var statearr_45411_45463 = state_45374__$1;
(statearr_45411_45463[(1)] = (26));

} else {
var statearr_45412_45464 = state_45374__$1;
(statearr_45412_45464[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45375 === (35))){
var inst_45359 = (state_45374[(2)]);
var state_45374__$1 = state_45374;
if(cljs.core.truth_(inst_45359)){
var statearr_45413_45465 = state_45374__$1;
(statearr_45413_45465[(1)] = (36));

} else {
var statearr_45414_45466 = state_45374__$1;
(statearr_45414_45466[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45375 === (19))){
var inst_45301 = (state_45374[(7)]);
var inst_45321 = cljs.core.apply.call(null,cljs.core.hash_map,inst_45301);
var state_45374__$1 = state_45374;
var statearr_45415_45467 = state_45374__$1;
(statearr_45415_45467[(2)] = inst_45321);

(statearr_45415_45467[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45375 === (11))){
var inst_45301 = (state_45374[(7)]);
var inst_45305 = (inst_45301 == null);
var inst_45306 = cljs.core.not.call(null,inst_45305);
var state_45374__$1 = state_45374;
if(inst_45306){
var statearr_45416_45468 = state_45374__$1;
(statearr_45416_45468[(1)] = (13));

} else {
var statearr_45417_45469 = state_45374__$1;
(statearr_45417_45469[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45375 === (9))){
var inst_45276 = (state_45374[(8)]);
var state_45374__$1 = state_45374;
var statearr_45418_45470 = state_45374__$1;
(statearr_45418_45470[(2)] = inst_45276);

(statearr_45418_45470[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45375 === (5))){
var state_45374__$1 = state_45374;
var statearr_45419_45471 = state_45374__$1;
(statearr_45419_45471[(2)] = true);

(statearr_45419_45471[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45375 === (14))){
var state_45374__$1 = state_45374;
var statearr_45420_45472 = state_45374__$1;
(statearr_45420_45472[(2)] = false);

(statearr_45420_45472[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45375 === (26))){
var inst_45334 = (state_45374[(9)]);
var inst_45341 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_45334);
var state_45374__$1 = state_45374;
var statearr_45421_45473 = state_45374__$1;
(statearr_45421_45473[(2)] = inst_45341);

(statearr_45421_45473[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45375 === (16))){
var state_45374__$1 = state_45374;
var statearr_45422_45474 = state_45374__$1;
(statearr_45422_45474[(2)] = true);

(statearr_45422_45474[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45375 === (38))){
var inst_45364 = (state_45374[(2)]);
var state_45374__$1 = state_45374;
var statearr_45423_45475 = state_45374__$1;
(statearr_45423_45475[(2)] = inst_45364);

(statearr_45423_45475[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45375 === (30))){
var inst_45334 = (state_45374[(9)]);
var inst_45325 = (state_45374[(11)]);
var inst_45326 = (state_45374[(13)]);
var inst_45351 = cljs.core.empty_QMARK_.call(null,inst_45325);
var inst_45352 = inst_45326.call(null,inst_45334);
var inst_45353 = cljs.core.not.call(null,inst_45352);
var inst_45354 = (inst_45351) && (inst_45353);
var state_45374__$1 = state_45374;
var statearr_45424_45476 = state_45374__$1;
(statearr_45424_45476[(2)] = inst_45354);

(statearr_45424_45476[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45375 === (10))){
var inst_45276 = (state_45374[(8)]);
var inst_45297 = (state_45374[(2)]);
var inst_45298 = cljs.core.get.call(null,inst_45297,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_45299 = cljs.core.get.call(null,inst_45297,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_45300 = cljs.core.get.call(null,inst_45297,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_45301 = inst_45276;
var state_45374__$1 = (function (){var statearr_45425 = state_45374;
(statearr_45425[(7)] = inst_45301);

(statearr_45425[(16)] = inst_45299);

(statearr_45425[(17)] = inst_45300);

(statearr_45425[(18)] = inst_45298);

return statearr_45425;
})();
var statearr_45426_45477 = state_45374__$1;
(statearr_45426_45477[(2)] = null);

(statearr_45426_45477[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45375 === (18))){
var inst_45316 = (state_45374[(2)]);
var state_45374__$1 = state_45374;
var statearr_45427_45478 = state_45374__$1;
(statearr_45427_45478[(2)] = inst_45316);

(statearr_45427_45478[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45375 === (37))){
var state_45374__$1 = state_45374;
var statearr_45428_45479 = state_45374__$1;
(statearr_45428_45479[(2)] = null);

(statearr_45428_45479[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45375 === (8))){
var inst_45276 = (state_45374[(8)]);
var inst_45294 = cljs.core.apply.call(null,cljs.core.hash_map,inst_45276);
var state_45374__$1 = state_45374;
var statearr_45429_45480 = state_45374__$1;
(statearr_45429_45480[(2)] = inst_45294);

(statearr_45429_45480[(1)] = (10));


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
});})(c__44389__auto___45434,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__44301__auto__,c__44389__auto___45434,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__44302__auto__ = null;
var cljs$core$async$mix_$_state_machine__44302__auto____0 = (function (){
var statearr_45430 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45430[(0)] = cljs$core$async$mix_$_state_machine__44302__auto__);

(statearr_45430[(1)] = (1));

return statearr_45430;
});
var cljs$core$async$mix_$_state_machine__44302__auto____1 = (function (state_45374){
while(true){
var ret_value__44303__auto__ = (function (){try{while(true){
var result__44304__auto__ = switch__44301__auto__.call(null,state_45374);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44304__auto__;
}
break;
}
}catch (e45431){if((e45431 instanceof Object)){
var ex__44305__auto__ = e45431;
var statearr_45432_45481 = state_45374;
(statearr_45432_45481[(5)] = ex__44305__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45374);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45431;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45482 = state_45374;
state_45374 = G__45482;
continue;
} else {
return ret_value__44303__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__44302__auto__ = function(state_45374){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__44302__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__44302__auto____1.call(this,state_45374);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__44302__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__44302__auto____0;
cljs$core$async$mix_$_state_machine__44302__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__44302__auto____1;
return cljs$core$async$mix_$_state_machine__44302__auto__;
})()
;})(switch__44301__auto__,c__44389__auto___45434,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__44391__auto__ = (function (){var statearr_45433 = f__44390__auto__.call(null);
(statearr_45433[(6)] = c__44389__auto___45434);

return statearr_45433;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44391__auto__);
});})(c__44389__auto___45434,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__37425__auto__ = (((p == null))?null:p);
var m__37426__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__37425__auto__)]);
if(!((m__37426__auto__ == null))){
return m__37426__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__37426__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__37426__auto____$1 == null))){
return m__37426__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__37425__auto__ = (((p == null))?null:p);
var m__37426__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__37425__auto__)]);
if(!((m__37426__auto__ == null))){
return m__37426__auto__.call(null,p,v,ch);
} else {
var m__37426__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__37426__auto____$1 == null))){
return m__37426__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__45484 = arguments.length;
switch (G__45484) {
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
var x__37425__auto__ = (((p == null))?null:p);
var m__37426__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__37425__auto__)]);
if(!((m__37426__auto__ == null))){
return m__37426__auto__.call(null,p);
} else {
var m__37426__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__37426__auto____$1 == null))){
return m__37426__auto____$1.call(null,p);
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
var x__37425__auto__ = (((p == null))?null:p);
var m__37426__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__37425__auto__)]);
if(!((m__37426__auto__ == null))){
return m__37426__auto__.call(null,p,v);
} else {
var m__37426__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__37426__auto____$1 == null))){
return m__37426__auto____$1.call(null,p,v);
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
var G__45488 = arguments.length;
switch (G__45488) {
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
var or__36756__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__36756__auto__)){
return or__36756__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__36756__auto__,mults){
return (function (p1__45486_SHARP_){
if(cljs.core.truth_(p1__45486_SHARP_.call(null,topic))){
return p1__45486_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__45486_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__36756__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async45489 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45489 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta45490){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta45490 = meta45490;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45489.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_45491,meta45490__$1){
var self__ = this;
var _45491__$1 = this;
return (new cljs.core.async.t_cljs$core$async45489(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta45490__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45489.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_45491){
var self__ = this;
var _45491__$1 = this;
return self__.meta45490;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45489.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45489.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45489.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45489.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45489.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async45489.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45489.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45489.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta45490","meta45490",-13280657,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45489.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45489.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45489";

cljs.core.async.t_cljs$core$async45489.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__37367__auto__,writer__37368__auto__,opt__37369__auto__){
return cljs.core._write.call(null,writer__37368__auto__,"cljs.core.async/t_cljs$core$async45489");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async45489 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async45489(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta45490){
return (new cljs.core.async.t_cljs$core$async45489(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta45490));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async45489(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__44389__auto___45609 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44389__auto___45609,mults,ensure_mult,p){
return (function (){
var f__44390__auto__ = (function (){var switch__44301__auto__ = ((function (c__44389__auto___45609,mults,ensure_mult,p){
return (function (state_45563){
var state_val_45564 = (state_45563[(1)]);
if((state_val_45564 === (7))){
var inst_45559 = (state_45563[(2)]);
var state_45563__$1 = state_45563;
var statearr_45565_45610 = state_45563__$1;
(statearr_45565_45610[(2)] = inst_45559);

(statearr_45565_45610[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45564 === (20))){
var state_45563__$1 = state_45563;
var statearr_45566_45611 = state_45563__$1;
(statearr_45566_45611[(2)] = null);

(statearr_45566_45611[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45564 === (1))){
var state_45563__$1 = state_45563;
var statearr_45567_45612 = state_45563__$1;
(statearr_45567_45612[(2)] = null);

(statearr_45567_45612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45564 === (24))){
var inst_45542 = (state_45563[(7)]);
var inst_45551 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_45542);
var state_45563__$1 = state_45563;
var statearr_45568_45613 = state_45563__$1;
(statearr_45568_45613[(2)] = inst_45551);

(statearr_45568_45613[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45564 === (4))){
var inst_45494 = (state_45563[(8)]);
var inst_45494__$1 = (state_45563[(2)]);
var inst_45495 = (inst_45494__$1 == null);
var state_45563__$1 = (function (){var statearr_45569 = state_45563;
(statearr_45569[(8)] = inst_45494__$1);

return statearr_45569;
})();
if(cljs.core.truth_(inst_45495)){
var statearr_45570_45614 = state_45563__$1;
(statearr_45570_45614[(1)] = (5));

} else {
var statearr_45571_45615 = state_45563__$1;
(statearr_45571_45615[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45564 === (15))){
var inst_45536 = (state_45563[(2)]);
var state_45563__$1 = state_45563;
var statearr_45572_45616 = state_45563__$1;
(statearr_45572_45616[(2)] = inst_45536);

(statearr_45572_45616[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45564 === (21))){
var inst_45556 = (state_45563[(2)]);
var state_45563__$1 = (function (){var statearr_45573 = state_45563;
(statearr_45573[(9)] = inst_45556);

return statearr_45573;
})();
var statearr_45574_45617 = state_45563__$1;
(statearr_45574_45617[(2)] = null);

(statearr_45574_45617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45564 === (13))){
var inst_45518 = (state_45563[(10)]);
var inst_45520 = cljs.core.chunked_seq_QMARK_.call(null,inst_45518);
var state_45563__$1 = state_45563;
if(inst_45520){
var statearr_45575_45618 = state_45563__$1;
(statearr_45575_45618[(1)] = (16));

} else {
var statearr_45576_45619 = state_45563__$1;
(statearr_45576_45619[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45564 === (22))){
var inst_45548 = (state_45563[(2)]);
var state_45563__$1 = state_45563;
if(cljs.core.truth_(inst_45548)){
var statearr_45577_45620 = state_45563__$1;
(statearr_45577_45620[(1)] = (23));

} else {
var statearr_45578_45621 = state_45563__$1;
(statearr_45578_45621[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45564 === (6))){
var inst_45542 = (state_45563[(7)]);
var inst_45544 = (state_45563[(11)]);
var inst_45494 = (state_45563[(8)]);
var inst_45542__$1 = topic_fn.call(null,inst_45494);
var inst_45543 = cljs.core.deref.call(null,mults);
var inst_45544__$1 = cljs.core.get.call(null,inst_45543,inst_45542__$1);
var state_45563__$1 = (function (){var statearr_45579 = state_45563;
(statearr_45579[(7)] = inst_45542__$1);

(statearr_45579[(11)] = inst_45544__$1);

return statearr_45579;
})();
if(cljs.core.truth_(inst_45544__$1)){
var statearr_45580_45622 = state_45563__$1;
(statearr_45580_45622[(1)] = (19));

} else {
var statearr_45581_45623 = state_45563__$1;
(statearr_45581_45623[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45564 === (25))){
var inst_45553 = (state_45563[(2)]);
var state_45563__$1 = state_45563;
var statearr_45582_45624 = state_45563__$1;
(statearr_45582_45624[(2)] = inst_45553);

(statearr_45582_45624[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45564 === (17))){
var inst_45518 = (state_45563[(10)]);
var inst_45527 = cljs.core.first.call(null,inst_45518);
var inst_45528 = cljs.core.async.muxch_STAR_.call(null,inst_45527);
var inst_45529 = cljs.core.async.close_BANG_.call(null,inst_45528);
var inst_45530 = cljs.core.next.call(null,inst_45518);
var inst_45504 = inst_45530;
var inst_45505 = null;
var inst_45506 = (0);
var inst_45507 = (0);
var state_45563__$1 = (function (){var statearr_45583 = state_45563;
(statearr_45583[(12)] = inst_45507);

(statearr_45583[(13)] = inst_45505);

(statearr_45583[(14)] = inst_45504);

(statearr_45583[(15)] = inst_45529);

(statearr_45583[(16)] = inst_45506);

return statearr_45583;
})();
var statearr_45584_45625 = state_45563__$1;
(statearr_45584_45625[(2)] = null);

(statearr_45584_45625[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45564 === (3))){
var inst_45561 = (state_45563[(2)]);
var state_45563__$1 = state_45563;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45563__$1,inst_45561);
} else {
if((state_val_45564 === (12))){
var inst_45538 = (state_45563[(2)]);
var state_45563__$1 = state_45563;
var statearr_45585_45626 = state_45563__$1;
(statearr_45585_45626[(2)] = inst_45538);

(statearr_45585_45626[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45564 === (2))){
var state_45563__$1 = state_45563;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45563__$1,(4),ch);
} else {
if((state_val_45564 === (23))){
var state_45563__$1 = state_45563;
var statearr_45586_45627 = state_45563__$1;
(statearr_45586_45627[(2)] = null);

(statearr_45586_45627[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45564 === (19))){
var inst_45544 = (state_45563[(11)]);
var inst_45494 = (state_45563[(8)]);
var inst_45546 = cljs.core.async.muxch_STAR_.call(null,inst_45544);
var state_45563__$1 = state_45563;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45563__$1,(22),inst_45546,inst_45494);
} else {
if((state_val_45564 === (11))){
var inst_45518 = (state_45563[(10)]);
var inst_45504 = (state_45563[(14)]);
var inst_45518__$1 = cljs.core.seq.call(null,inst_45504);
var state_45563__$1 = (function (){var statearr_45587 = state_45563;
(statearr_45587[(10)] = inst_45518__$1);

return statearr_45587;
})();
if(inst_45518__$1){
var statearr_45588_45628 = state_45563__$1;
(statearr_45588_45628[(1)] = (13));

} else {
var statearr_45589_45629 = state_45563__$1;
(statearr_45589_45629[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45564 === (9))){
var inst_45540 = (state_45563[(2)]);
var state_45563__$1 = state_45563;
var statearr_45590_45630 = state_45563__$1;
(statearr_45590_45630[(2)] = inst_45540);

(statearr_45590_45630[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45564 === (5))){
var inst_45501 = cljs.core.deref.call(null,mults);
var inst_45502 = cljs.core.vals.call(null,inst_45501);
var inst_45503 = cljs.core.seq.call(null,inst_45502);
var inst_45504 = inst_45503;
var inst_45505 = null;
var inst_45506 = (0);
var inst_45507 = (0);
var state_45563__$1 = (function (){var statearr_45591 = state_45563;
(statearr_45591[(12)] = inst_45507);

(statearr_45591[(13)] = inst_45505);

(statearr_45591[(14)] = inst_45504);

(statearr_45591[(16)] = inst_45506);

return statearr_45591;
})();
var statearr_45592_45631 = state_45563__$1;
(statearr_45592_45631[(2)] = null);

(statearr_45592_45631[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45564 === (14))){
var state_45563__$1 = state_45563;
var statearr_45596_45632 = state_45563__$1;
(statearr_45596_45632[(2)] = null);

(statearr_45596_45632[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45564 === (16))){
var inst_45518 = (state_45563[(10)]);
var inst_45522 = cljs.core.chunk_first.call(null,inst_45518);
var inst_45523 = cljs.core.chunk_rest.call(null,inst_45518);
var inst_45524 = cljs.core.count.call(null,inst_45522);
var inst_45504 = inst_45523;
var inst_45505 = inst_45522;
var inst_45506 = inst_45524;
var inst_45507 = (0);
var state_45563__$1 = (function (){var statearr_45597 = state_45563;
(statearr_45597[(12)] = inst_45507);

(statearr_45597[(13)] = inst_45505);

(statearr_45597[(14)] = inst_45504);

(statearr_45597[(16)] = inst_45506);

return statearr_45597;
})();
var statearr_45598_45633 = state_45563__$1;
(statearr_45598_45633[(2)] = null);

(statearr_45598_45633[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45564 === (10))){
var inst_45507 = (state_45563[(12)]);
var inst_45505 = (state_45563[(13)]);
var inst_45504 = (state_45563[(14)]);
var inst_45506 = (state_45563[(16)]);
var inst_45512 = cljs.core._nth.call(null,inst_45505,inst_45507);
var inst_45513 = cljs.core.async.muxch_STAR_.call(null,inst_45512);
var inst_45514 = cljs.core.async.close_BANG_.call(null,inst_45513);
var inst_45515 = (inst_45507 + (1));
var tmp45593 = inst_45505;
var tmp45594 = inst_45504;
var tmp45595 = inst_45506;
var inst_45504__$1 = tmp45594;
var inst_45505__$1 = tmp45593;
var inst_45506__$1 = tmp45595;
var inst_45507__$1 = inst_45515;
var state_45563__$1 = (function (){var statearr_45599 = state_45563;
(statearr_45599[(12)] = inst_45507__$1);

(statearr_45599[(13)] = inst_45505__$1);

(statearr_45599[(17)] = inst_45514);

(statearr_45599[(14)] = inst_45504__$1);

(statearr_45599[(16)] = inst_45506__$1);

return statearr_45599;
})();
var statearr_45600_45634 = state_45563__$1;
(statearr_45600_45634[(2)] = null);

(statearr_45600_45634[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45564 === (18))){
var inst_45533 = (state_45563[(2)]);
var state_45563__$1 = state_45563;
var statearr_45601_45635 = state_45563__$1;
(statearr_45601_45635[(2)] = inst_45533);

(statearr_45601_45635[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45564 === (8))){
var inst_45507 = (state_45563[(12)]);
var inst_45506 = (state_45563[(16)]);
var inst_45509 = (inst_45507 < inst_45506);
var inst_45510 = inst_45509;
var state_45563__$1 = state_45563;
if(cljs.core.truth_(inst_45510)){
var statearr_45602_45636 = state_45563__$1;
(statearr_45602_45636[(1)] = (10));

} else {
var statearr_45603_45637 = state_45563__$1;
(statearr_45603_45637[(1)] = (11));

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
});})(c__44389__auto___45609,mults,ensure_mult,p))
;
return ((function (switch__44301__auto__,c__44389__auto___45609,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__44302__auto__ = null;
var cljs$core$async$state_machine__44302__auto____0 = (function (){
var statearr_45604 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45604[(0)] = cljs$core$async$state_machine__44302__auto__);

(statearr_45604[(1)] = (1));

return statearr_45604;
});
var cljs$core$async$state_machine__44302__auto____1 = (function (state_45563){
while(true){
var ret_value__44303__auto__ = (function (){try{while(true){
var result__44304__auto__ = switch__44301__auto__.call(null,state_45563);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44304__auto__;
}
break;
}
}catch (e45605){if((e45605 instanceof Object)){
var ex__44305__auto__ = e45605;
var statearr_45606_45638 = state_45563;
(statearr_45606_45638[(5)] = ex__44305__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45563);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45605;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45639 = state_45563;
state_45563 = G__45639;
continue;
} else {
return ret_value__44303__auto__;
}
break;
}
});
cljs$core$async$state_machine__44302__auto__ = function(state_45563){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44302__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44302__auto____1.call(this,state_45563);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__44302__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44302__auto____0;
cljs$core$async$state_machine__44302__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44302__auto____1;
return cljs$core$async$state_machine__44302__auto__;
})()
;})(switch__44301__auto__,c__44389__auto___45609,mults,ensure_mult,p))
})();
var state__44391__auto__ = (function (){var statearr_45607 = f__44390__auto__.call(null);
(statearr_45607[(6)] = c__44389__auto___45609);

return statearr_45607;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44391__auto__);
});})(c__44389__auto___45609,mults,ensure_mult,p))
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
var G__45641 = arguments.length;
switch (G__45641) {
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
var G__45644 = arguments.length;
switch (G__45644) {
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
var G__45647 = arguments.length;
switch (G__45647) {
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
var c__44389__auto___45714 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44389__auto___45714,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__44390__auto__ = (function (){var switch__44301__auto__ = ((function (c__44389__auto___45714,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_45686){
var state_val_45687 = (state_45686[(1)]);
if((state_val_45687 === (7))){
var state_45686__$1 = state_45686;
var statearr_45688_45715 = state_45686__$1;
(statearr_45688_45715[(2)] = null);

(statearr_45688_45715[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45687 === (1))){
var state_45686__$1 = state_45686;
var statearr_45689_45716 = state_45686__$1;
(statearr_45689_45716[(2)] = null);

(statearr_45689_45716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45687 === (4))){
var inst_45650 = (state_45686[(7)]);
var inst_45652 = (inst_45650 < cnt);
var state_45686__$1 = state_45686;
if(cljs.core.truth_(inst_45652)){
var statearr_45690_45717 = state_45686__$1;
(statearr_45690_45717[(1)] = (6));

} else {
var statearr_45691_45718 = state_45686__$1;
(statearr_45691_45718[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45687 === (15))){
var inst_45682 = (state_45686[(2)]);
var state_45686__$1 = state_45686;
var statearr_45692_45719 = state_45686__$1;
(statearr_45692_45719[(2)] = inst_45682);

(statearr_45692_45719[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45687 === (13))){
var inst_45675 = cljs.core.async.close_BANG_.call(null,out);
var state_45686__$1 = state_45686;
var statearr_45693_45720 = state_45686__$1;
(statearr_45693_45720[(2)] = inst_45675);

(statearr_45693_45720[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45687 === (6))){
var state_45686__$1 = state_45686;
var statearr_45694_45721 = state_45686__$1;
(statearr_45694_45721[(2)] = null);

(statearr_45694_45721[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45687 === (3))){
var inst_45684 = (state_45686[(2)]);
var state_45686__$1 = state_45686;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45686__$1,inst_45684);
} else {
if((state_val_45687 === (12))){
var inst_45672 = (state_45686[(8)]);
var inst_45672__$1 = (state_45686[(2)]);
var inst_45673 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_45672__$1);
var state_45686__$1 = (function (){var statearr_45695 = state_45686;
(statearr_45695[(8)] = inst_45672__$1);

return statearr_45695;
})();
if(cljs.core.truth_(inst_45673)){
var statearr_45696_45722 = state_45686__$1;
(statearr_45696_45722[(1)] = (13));

} else {
var statearr_45697_45723 = state_45686__$1;
(statearr_45697_45723[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45687 === (2))){
var inst_45649 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_45650 = (0);
var state_45686__$1 = (function (){var statearr_45698 = state_45686;
(statearr_45698[(9)] = inst_45649);

(statearr_45698[(7)] = inst_45650);

return statearr_45698;
})();
var statearr_45699_45724 = state_45686__$1;
(statearr_45699_45724[(2)] = null);

(statearr_45699_45724[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45687 === (11))){
var inst_45650 = (state_45686[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_45686,(10),Object,null,(9));
var inst_45659 = chs__$1.call(null,inst_45650);
var inst_45660 = done.call(null,inst_45650);
var inst_45661 = cljs.core.async.take_BANG_.call(null,inst_45659,inst_45660);
var state_45686__$1 = state_45686;
var statearr_45700_45725 = state_45686__$1;
(statearr_45700_45725[(2)] = inst_45661);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45686__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45687 === (9))){
var inst_45650 = (state_45686[(7)]);
var inst_45663 = (state_45686[(2)]);
var inst_45664 = (inst_45650 + (1));
var inst_45650__$1 = inst_45664;
var state_45686__$1 = (function (){var statearr_45701 = state_45686;
(statearr_45701[(10)] = inst_45663);

(statearr_45701[(7)] = inst_45650__$1);

return statearr_45701;
})();
var statearr_45702_45726 = state_45686__$1;
(statearr_45702_45726[(2)] = null);

(statearr_45702_45726[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45687 === (5))){
var inst_45670 = (state_45686[(2)]);
var state_45686__$1 = (function (){var statearr_45703 = state_45686;
(statearr_45703[(11)] = inst_45670);

return statearr_45703;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45686__$1,(12),dchan);
} else {
if((state_val_45687 === (14))){
var inst_45672 = (state_45686[(8)]);
var inst_45677 = cljs.core.apply.call(null,f,inst_45672);
var state_45686__$1 = state_45686;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45686__$1,(16),out,inst_45677);
} else {
if((state_val_45687 === (16))){
var inst_45679 = (state_45686[(2)]);
var state_45686__$1 = (function (){var statearr_45704 = state_45686;
(statearr_45704[(12)] = inst_45679);

return statearr_45704;
})();
var statearr_45705_45727 = state_45686__$1;
(statearr_45705_45727[(2)] = null);

(statearr_45705_45727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45687 === (10))){
var inst_45654 = (state_45686[(2)]);
var inst_45655 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_45686__$1 = (function (){var statearr_45706 = state_45686;
(statearr_45706[(13)] = inst_45654);

return statearr_45706;
})();
var statearr_45707_45728 = state_45686__$1;
(statearr_45707_45728[(2)] = inst_45655);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45686__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45687 === (8))){
var inst_45668 = (state_45686[(2)]);
var state_45686__$1 = state_45686;
var statearr_45708_45729 = state_45686__$1;
(statearr_45708_45729[(2)] = inst_45668);

(statearr_45708_45729[(1)] = (5));


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
});})(c__44389__auto___45714,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__44301__auto__,c__44389__auto___45714,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__44302__auto__ = null;
var cljs$core$async$state_machine__44302__auto____0 = (function (){
var statearr_45709 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45709[(0)] = cljs$core$async$state_machine__44302__auto__);

(statearr_45709[(1)] = (1));

return statearr_45709;
});
var cljs$core$async$state_machine__44302__auto____1 = (function (state_45686){
while(true){
var ret_value__44303__auto__ = (function (){try{while(true){
var result__44304__auto__ = switch__44301__auto__.call(null,state_45686);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44304__auto__;
}
break;
}
}catch (e45710){if((e45710 instanceof Object)){
var ex__44305__auto__ = e45710;
var statearr_45711_45730 = state_45686;
(statearr_45711_45730[(5)] = ex__44305__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45686);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45710;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45731 = state_45686;
state_45686 = G__45731;
continue;
} else {
return ret_value__44303__auto__;
}
break;
}
});
cljs$core$async$state_machine__44302__auto__ = function(state_45686){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44302__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44302__auto____1.call(this,state_45686);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__44302__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44302__auto____0;
cljs$core$async$state_machine__44302__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44302__auto____1;
return cljs$core$async$state_machine__44302__auto__;
})()
;})(switch__44301__auto__,c__44389__auto___45714,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__44391__auto__ = (function (){var statearr_45712 = f__44390__auto__.call(null);
(statearr_45712[(6)] = c__44389__auto___45714);

return statearr_45712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44391__auto__);
});})(c__44389__auto___45714,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__45734 = arguments.length;
switch (G__45734) {
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
var c__44389__auto___45788 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44389__auto___45788,out){
return (function (){
var f__44390__auto__ = (function (){var switch__44301__auto__ = ((function (c__44389__auto___45788,out){
return (function (state_45766){
var state_val_45767 = (state_45766[(1)]);
if((state_val_45767 === (7))){
var inst_45746 = (state_45766[(7)]);
var inst_45745 = (state_45766[(8)]);
var inst_45745__$1 = (state_45766[(2)]);
var inst_45746__$1 = cljs.core.nth.call(null,inst_45745__$1,(0),null);
var inst_45747 = cljs.core.nth.call(null,inst_45745__$1,(1),null);
var inst_45748 = (inst_45746__$1 == null);
var state_45766__$1 = (function (){var statearr_45768 = state_45766;
(statearr_45768[(9)] = inst_45747);

(statearr_45768[(7)] = inst_45746__$1);

(statearr_45768[(8)] = inst_45745__$1);

return statearr_45768;
})();
if(cljs.core.truth_(inst_45748)){
var statearr_45769_45789 = state_45766__$1;
(statearr_45769_45789[(1)] = (8));

} else {
var statearr_45770_45790 = state_45766__$1;
(statearr_45770_45790[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45767 === (1))){
var inst_45735 = cljs.core.vec.call(null,chs);
var inst_45736 = inst_45735;
var state_45766__$1 = (function (){var statearr_45771 = state_45766;
(statearr_45771[(10)] = inst_45736);

return statearr_45771;
})();
var statearr_45772_45791 = state_45766__$1;
(statearr_45772_45791[(2)] = null);

(statearr_45772_45791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45767 === (4))){
var inst_45736 = (state_45766[(10)]);
var state_45766__$1 = state_45766;
return cljs.core.async.ioc_alts_BANG_.call(null,state_45766__$1,(7),inst_45736);
} else {
if((state_val_45767 === (6))){
var inst_45762 = (state_45766[(2)]);
var state_45766__$1 = state_45766;
var statearr_45773_45792 = state_45766__$1;
(statearr_45773_45792[(2)] = inst_45762);

(statearr_45773_45792[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45767 === (3))){
var inst_45764 = (state_45766[(2)]);
var state_45766__$1 = state_45766;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45766__$1,inst_45764);
} else {
if((state_val_45767 === (2))){
var inst_45736 = (state_45766[(10)]);
var inst_45738 = cljs.core.count.call(null,inst_45736);
var inst_45739 = (inst_45738 > (0));
var state_45766__$1 = state_45766;
if(cljs.core.truth_(inst_45739)){
var statearr_45775_45793 = state_45766__$1;
(statearr_45775_45793[(1)] = (4));

} else {
var statearr_45776_45794 = state_45766__$1;
(statearr_45776_45794[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45767 === (11))){
var inst_45736 = (state_45766[(10)]);
var inst_45755 = (state_45766[(2)]);
var tmp45774 = inst_45736;
var inst_45736__$1 = tmp45774;
var state_45766__$1 = (function (){var statearr_45777 = state_45766;
(statearr_45777[(11)] = inst_45755);

(statearr_45777[(10)] = inst_45736__$1);

return statearr_45777;
})();
var statearr_45778_45795 = state_45766__$1;
(statearr_45778_45795[(2)] = null);

(statearr_45778_45795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45767 === (9))){
var inst_45746 = (state_45766[(7)]);
var state_45766__$1 = state_45766;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45766__$1,(11),out,inst_45746);
} else {
if((state_val_45767 === (5))){
var inst_45760 = cljs.core.async.close_BANG_.call(null,out);
var state_45766__$1 = state_45766;
var statearr_45779_45796 = state_45766__$1;
(statearr_45779_45796[(2)] = inst_45760);

(statearr_45779_45796[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45767 === (10))){
var inst_45758 = (state_45766[(2)]);
var state_45766__$1 = state_45766;
var statearr_45780_45797 = state_45766__$1;
(statearr_45780_45797[(2)] = inst_45758);

(statearr_45780_45797[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45767 === (8))){
var inst_45747 = (state_45766[(9)]);
var inst_45746 = (state_45766[(7)]);
var inst_45736 = (state_45766[(10)]);
var inst_45745 = (state_45766[(8)]);
var inst_45750 = (function (){var cs = inst_45736;
var vec__45741 = inst_45745;
var v = inst_45746;
var c = inst_45747;
return ((function (cs,vec__45741,v,c,inst_45747,inst_45746,inst_45736,inst_45745,state_val_45767,c__44389__auto___45788,out){
return (function (p1__45732_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__45732_SHARP_);
});
;})(cs,vec__45741,v,c,inst_45747,inst_45746,inst_45736,inst_45745,state_val_45767,c__44389__auto___45788,out))
})();
var inst_45751 = cljs.core.filterv.call(null,inst_45750,inst_45736);
var inst_45736__$1 = inst_45751;
var state_45766__$1 = (function (){var statearr_45781 = state_45766;
(statearr_45781[(10)] = inst_45736__$1);

return statearr_45781;
})();
var statearr_45782_45798 = state_45766__$1;
(statearr_45782_45798[(2)] = null);

(statearr_45782_45798[(1)] = (2));


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
});})(c__44389__auto___45788,out))
;
return ((function (switch__44301__auto__,c__44389__auto___45788,out){
return (function() {
var cljs$core$async$state_machine__44302__auto__ = null;
var cljs$core$async$state_machine__44302__auto____0 = (function (){
var statearr_45783 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45783[(0)] = cljs$core$async$state_machine__44302__auto__);

(statearr_45783[(1)] = (1));

return statearr_45783;
});
var cljs$core$async$state_machine__44302__auto____1 = (function (state_45766){
while(true){
var ret_value__44303__auto__ = (function (){try{while(true){
var result__44304__auto__ = switch__44301__auto__.call(null,state_45766);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44304__auto__;
}
break;
}
}catch (e45784){if((e45784 instanceof Object)){
var ex__44305__auto__ = e45784;
var statearr_45785_45799 = state_45766;
(statearr_45785_45799[(5)] = ex__44305__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45766);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45784;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45800 = state_45766;
state_45766 = G__45800;
continue;
} else {
return ret_value__44303__auto__;
}
break;
}
});
cljs$core$async$state_machine__44302__auto__ = function(state_45766){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44302__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44302__auto____1.call(this,state_45766);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__44302__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44302__auto____0;
cljs$core$async$state_machine__44302__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44302__auto____1;
return cljs$core$async$state_machine__44302__auto__;
})()
;})(switch__44301__auto__,c__44389__auto___45788,out))
})();
var state__44391__auto__ = (function (){var statearr_45786 = f__44390__auto__.call(null);
(statearr_45786[(6)] = c__44389__auto___45788);

return statearr_45786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44391__auto__);
});})(c__44389__auto___45788,out))
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
var G__45802 = arguments.length;
switch (G__45802) {
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
var c__44389__auto___45847 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44389__auto___45847,out){
return (function (){
var f__44390__auto__ = (function (){var switch__44301__auto__ = ((function (c__44389__auto___45847,out){
return (function (state_45826){
var state_val_45827 = (state_45826[(1)]);
if((state_val_45827 === (7))){
var inst_45808 = (state_45826[(7)]);
var inst_45808__$1 = (state_45826[(2)]);
var inst_45809 = (inst_45808__$1 == null);
var inst_45810 = cljs.core.not.call(null,inst_45809);
var state_45826__$1 = (function (){var statearr_45828 = state_45826;
(statearr_45828[(7)] = inst_45808__$1);

return statearr_45828;
})();
if(inst_45810){
var statearr_45829_45848 = state_45826__$1;
(statearr_45829_45848[(1)] = (8));

} else {
var statearr_45830_45849 = state_45826__$1;
(statearr_45830_45849[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45827 === (1))){
var inst_45803 = (0);
var state_45826__$1 = (function (){var statearr_45831 = state_45826;
(statearr_45831[(8)] = inst_45803);

return statearr_45831;
})();
var statearr_45832_45850 = state_45826__$1;
(statearr_45832_45850[(2)] = null);

(statearr_45832_45850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45827 === (4))){
var state_45826__$1 = state_45826;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45826__$1,(7),ch);
} else {
if((state_val_45827 === (6))){
var inst_45821 = (state_45826[(2)]);
var state_45826__$1 = state_45826;
var statearr_45833_45851 = state_45826__$1;
(statearr_45833_45851[(2)] = inst_45821);

(statearr_45833_45851[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45827 === (3))){
var inst_45823 = (state_45826[(2)]);
var inst_45824 = cljs.core.async.close_BANG_.call(null,out);
var state_45826__$1 = (function (){var statearr_45834 = state_45826;
(statearr_45834[(9)] = inst_45823);

return statearr_45834;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45826__$1,inst_45824);
} else {
if((state_val_45827 === (2))){
var inst_45803 = (state_45826[(8)]);
var inst_45805 = (inst_45803 < n);
var state_45826__$1 = state_45826;
if(cljs.core.truth_(inst_45805)){
var statearr_45835_45852 = state_45826__$1;
(statearr_45835_45852[(1)] = (4));

} else {
var statearr_45836_45853 = state_45826__$1;
(statearr_45836_45853[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45827 === (11))){
var inst_45803 = (state_45826[(8)]);
var inst_45813 = (state_45826[(2)]);
var inst_45814 = (inst_45803 + (1));
var inst_45803__$1 = inst_45814;
var state_45826__$1 = (function (){var statearr_45837 = state_45826;
(statearr_45837[(8)] = inst_45803__$1);

(statearr_45837[(10)] = inst_45813);

return statearr_45837;
})();
var statearr_45838_45854 = state_45826__$1;
(statearr_45838_45854[(2)] = null);

(statearr_45838_45854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45827 === (9))){
var state_45826__$1 = state_45826;
var statearr_45839_45855 = state_45826__$1;
(statearr_45839_45855[(2)] = null);

(statearr_45839_45855[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45827 === (5))){
var state_45826__$1 = state_45826;
var statearr_45840_45856 = state_45826__$1;
(statearr_45840_45856[(2)] = null);

(statearr_45840_45856[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45827 === (10))){
var inst_45818 = (state_45826[(2)]);
var state_45826__$1 = state_45826;
var statearr_45841_45857 = state_45826__$1;
(statearr_45841_45857[(2)] = inst_45818);

(statearr_45841_45857[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45827 === (8))){
var inst_45808 = (state_45826[(7)]);
var state_45826__$1 = state_45826;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45826__$1,(11),out,inst_45808);
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
});})(c__44389__auto___45847,out))
;
return ((function (switch__44301__auto__,c__44389__auto___45847,out){
return (function() {
var cljs$core$async$state_machine__44302__auto__ = null;
var cljs$core$async$state_machine__44302__auto____0 = (function (){
var statearr_45842 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45842[(0)] = cljs$core$async$state_machine__44302__auto__);

(statearr_45842[(1)] = (1));

return statearr_45842;
});
var cljs$core$async$state_machine__44302__auto____1 = (function (state_45826){
while(true){
var ret_value__44303__auto__ = (function (){try{while(true){
var result__44304__auto__ = switch__44301__auto__.call(null,state_45826);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44304__auto__;
}
break;
}
}catch (e45843){if((e45843 instanceof Object)){
var ex__44305__auto__ = e45843;
var statearr_45844_45858 = state_45826;
(statearr_45844_45858[(5)] = ex__44305__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45826);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45843;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45859 = state_45826;
state_45826 = G__45859;
continue;
} else {
return ret_value__44303__auto__;
}
break;
}
});
cljs$core$async$state_machine__44302__auto__ = function(state_45826){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44302__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44302__auto____1.call(this,state_45826);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__44302__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44302__auto____0;
cljs$core$async$state_machine__44302__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44302__auto____1;
return cljs$core$async$state_machine__44302__auto__;
})()
;})(switch__44301__auto__,c__44389__auto___45847,out))
})();
var state__44391__auto__ = (function (){var statearr_45845 = f__44390__auto__.call(null);
(statearr_45845[(6)] = c__44389__auto___45847);

return statearr_45845;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44391__auto__);
});})(c__44389__auto___45847,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async45861 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45861 = (function (f,ch,meta45862){
this.f = f;
this.ch = ch;
this.meta45862 = meta45862;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45861.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45863,meta45862__$1){
var self__ = this;
var _45863__$1 = this;
return (new cljs.core.async.t_cljs$core$async45861(self__.f,self__.ch,meta45862__$1));
});

cljs.core.async.t_cljs$core$async45861.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45863){
var self__ = this;
var _45863__$1 = this;
return self__.meta45862;
});

cljs.core.async.t_cljs$core$async45861.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45861.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async45861.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async45861.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45861.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async45864 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45864 = (function (f,ch,meta45862,_,fn1,meta45865){
this.f = f;
this.ch = ch;
this.meta45862 = meta45862;
this._ = _;
this.fn1 = fn1;
this.meta45865 = meta45865;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45864.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_45866,meta45865__$1){
var self__ = this;
var _45866__$1 = this;
return (new cljs.core.async.t_cljs$core$async45864(self__.f,self__.ch,self__.meta45862,self__._,self__.fn1,meta45865__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async45864.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_45866){
var self__ = this;
var _45866__$1 = this;
return self__.meta45865;
});})(___$1))
;

cljs.core.async.t_cljs$core$async45864.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45864.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async45864.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async45864.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__45860_SHARP_){
return f1.call(null,(((p1__45860_SHARP_ == null))?null:self__.f.call(null,p1__45860_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async45864.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45862","meta45862",1377257640,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async45861","cljs.core.async/t_cljs$core$async45861",-1477212885,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta45865","meta45865",-1477986165,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async45864.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45864.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45864";

cljs.core.async.t_cljs$core$async45864.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__37367__auto__,writer__37368__auto__,opt__37369__auto__){
return cljs.core._write.call(null,writer__37368__auto__,"cljs.core.async/t_cljs$core$async45864");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async45864 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async45864(f__$1,ch__$1,meta45862__$1,___$2,fn1__$1,meta45865){
return (new cljs.core.async.t_cljs$core$async45864(f__$1,ch__$1,meta45862__$1,___$2,fn1__$1,meta45865));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async45864(self__.f,self__.ch,self__.meta45862,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__36744__auto__ = ret;
if(cljs.core.truth_(and__36744__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__36744__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async45861.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45861.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async45861.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45862","meta45862",1377257640,null)], null);
});

cljs.core.async.t_cljs$core$async45861.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45861.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45861";

cljs.core.async.t_cljs$core$async45861.cljs$lang$ctorPrWriter = (function (this__37367__auto__,writer__37368__auto__,opt__37369__auto__){
return cljs.core._write.call(null,writer__37368__auto__,"cljs.core.async/t_cljs$core$async45861");
});

cljs.core.async.__GT_t_cljs$core$async45861 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async45861(f__$1,ch__$1,meta45862){
return (new cljs.core.async.t_cljs$core$async45861(f__$1,ch__$1,meta45862));
});

}

return (new cljs.core.async.t_cljs$core$async45861(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async45867 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45867 = (function (f,ch,meta45868){
this.f = f;
this.ch = ch;
this.meta45868 = meta45868;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45867.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45869,meta45868__$1){
var self__ = this;
var _45869__$1 = this;
return (new cljs.core.async.t_cljs$core$async45867(self__.f,self__.ch,meta45868__$1));
});

cljs.core.async.t_cljs$core$async45867.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45869){
var self__ = this;
var _45869__$1 = this;
return self__.meta45868;
});

cljs.core.async.t_cljs$core$async45867.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45867.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async45867.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45867.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async45867.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45867.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async45867.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45868","meta45868",780263372,null)], null);
});

cljs.core.async.t_cljs$core$async45867.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45867.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45867";

cljs.core.async.t_cljs$core$async45867.cljs$lang$ctorPrWriter = (function (this__37367__auto__,writer__37368__auto__,opt__37369__auto__){
return cljs.core._write.call(null,writer__37368__auto__,"cljs.core.async/t_cljs$core$async45867");
});

cljs.core.async.__GT_t_cljs$core$async45867 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async45867(f__$1,ch__$1,meta45868){
return (new cljs.core.async.t_cljs$core$async45867(f__$1,ch__$1,meta45868));
});

}

return (new cljs.core.async.t_cljs$core$async45867(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async45870 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45870 = (function (p,ch,meta45871){
this.p = p;
this.ch = ch;
this.meta45871 = meta45871;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45870.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45872,meta45871__$1){
var self__ = this;
var _45872__$1 = this;
return (new cljs.core.async.t_cljs$core$async45870(self__.p,self__.ch,meta45871__$1));
});

cljs.core.async.t_cljs$core$async45870.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45872){
var self__ = this;
var _45872__$1 = this;
return self__.meta45871;
});

cljs.core.async.t_cljs$core$async45870.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45870.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async45870.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async45870.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45870.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async45870.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45870.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async45870.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45871","meta45871",-152466292,null)], null);
});

cljs.core.async.t_cljs$core$async45870.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45870.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45870";

cljs.core.async.t_cljs$core$async45870.cljs$lang$ctorPrWriter = (function (this__37367__auto__,writer__37368__auto__,opt__37369__auto__){
return cljs.core._write.call(null,writer__37368__auto__,"cljs.core.async/t_cljs$core$async45870");
});

cljs.core.async.__GT_t_cljs$core$async45870 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async45870(p__$1,ch__$1,meta45871){
return (new cljs.core.async.t_cljs$core$async45870(p__$1,ch__$1,meta45871));
});

}

return (new cljs.core.async.t_cljs$core$async45870(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__45874 = arguments.length;
switch (G__45874) {
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
var c__44389__auto___45914 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44389__auto___45914,out){
return (function (){
var f__44390__auto__ = (function (){var switch__44301__auto__ = ((function (c__44389__auto___45914,out){
return (function (state_45895){
var state_val_45896 = (state_45895[(1)]);
if((state_val_45896 === (7))){
var inst_45891 = (state_45895[(2)]);
var state_45895__$1 = state_45895;
var statearr_45897_45915 = state_45895__$1;
(statearr_45897_45915[(2)] = inst_45891);

(statearr_45897_45915[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45896 === (1))){
var state_45895__$1 = state_45895;
var statearr_45898_45916 = state_45895__$1;
(statearr_45898_45916[(2)] = null);

(statearr_45898_45916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45896 === (4))){
var inst_45877 = (state_45895[(7)]);
var inst_45877__$1 = (state_45895[(2)]);
var inst_45878 = (inst_45877__$1 == null);
var state_45895__$1 = (function (){var statearr_45899 = state_45895;
(statearr_45899[(7)] = inst_45877__$1);

return statearr_45899;
})();
if(cljs.core.truth_(inst_45878)){
var statearr_45900_45917 = state_45895__$1;
(statearr_45900_45917[(1)] = (5));

} else {
var statearr_45901_45918 = state_45895__$1;
(statearr_45901_45918[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45896 === (6))){
var inst_45877 = (state_45895[(7)]);
var inst_45882 = p.call(null,inst_45877);
var state_45895__$1 = state_45895;
if(cljs.core.truth_(inst_45882)){
var statearr_45902_45919 = state_45895__$1;
(statearr_45902_45919[(1)] = (8));

} else {
var statearr_45903_45920 = state_45895__$1;
(statearr_45903_45920[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45896 === (3))){
var inst_45893 = (state_45895[(2)]);
var state_45895__$1 = state_45895;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45895__$1,inst_45893);
} else {
if((state_val_45896 === (2))){
var state_45895__$1 = state_45895;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45895__$1,(4),ch);
} else {
if((state_val_45896 === (11))){
var inst_45885 = (state_45895[(2)]);
var state_45895__$1 = state_45895;
var statearr_45904_45921 = state_45895__$1;
(statearr_45904_45921[(2)] = inst_45885);

(statearr_45904_45921[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45896 === (9))){
var state_45895__$1 = state_45895;
var statearr_45905_45922 = state_45895__$1;
(statearr_45905_45922[(2)] = null);

(statearr_45905_45922[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45896 === (5))){
var inst_45880 = cljs.core.async.close_BANG_.call(null,out);
var state_45895__$1 = state_45895;
var statearr_45906_45923 = state_45895__$1;
(statearr_45906_45923[(2)] = inst_45880);

(statearr_45906_45923[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45896 === (10))){
var inst_45888 = (state_45895[(2)]);
var state_45895__$1 = (function (){var statearr_45907 = state_45895;
(statearr_45907[(8)] = inst_45888);

return statearr_45907;
})();
var statearr_45908_45924 = state_45895__$1;
(statearr_45908_45924[(2)] = null);

(statearr_45908_45924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45896 === (8))){
var inst_45877 = (state_45895[(7)]);
var state_45895__$1 = state_45895;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45895__$1,(11),out,inst_45877);
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
});})(c__44389__auto___45914,out))
;
return ((function (switch__44301__auto__,c__44389__auto___45914,out){
return (function() {
var cljs$core$async$state_machine__44302__auto__ = null;
var cljs$core$async$state_machine__44302__auto____0 = (function (){
var statearr_45909 = [null,null,null,null,null,null,null,null,null];
(statearr_45909[(0)] = cljs$core$async$state_machine__44302__auto__);

(statearr_45909[(1)] = (1));

return statearr_45909;
});
var cljs$core$async$state_machine__44302__auto____1 = (function (state_45895){
while(true){
var ret_value__44303__auto__ = (function (){try{while(true){
var result__44304__auto__ = switch__44301__auto__.call(null,state_45895);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44304__auto__;
}
break;
}
}catch (e45910){if((e45910 instanceof Object)){
var ex__44305__auto__ = e45910;
var statearr_45911_45925 = state_45895;
(statearr_45911_45925[(5)] = ex__44305__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45895);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45910;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45926 = state_45895;
state_45895 = G__45926;
continue;
} else {
return ret_value__44303__auto__;
}
break;
}
});
cljs$core$async$state_machine__44302__auto__ = function(state_45895){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44302__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44302__auto____1.call(this,state_45895);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__44302__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44302__auto____0;
cljs$core$async$state_machine__44302__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44302__auto____1;
return cljs$core$async$state_machine__44302__auto__;
})()
;})(switch__44301__auto__,c__44389__auto___45914,out))
})();
var state__44391__auto__ = (function (){var statearr_45912 = f__44390__auto__.call(null);
(statearr_45912[(6)] = c__44389__auto___45914);

return statearr_45912;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44391__auto__);
});})(c__44389__auto___45914,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__45928 = arguments.length;
switch (G__45928) {
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
var c__44389__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44389__auto__){
return (function (){
var f__44390__auto__ = (function (){var switch__44301__auto__ = ((function (c__44389__auto__){
return (function (state_45991){
var state_val_45992 = (state_45991[(1)]);
if((state_val_45992 === (7))){
var inst_45987 = (state_45991[(2)]);
var state_45991__$1 = state_45991;
var statearr_45993_46031 = state_45991__$1;
(statearr_45993_46031[(2)] = inst_45987);

(statearr_45993_46031[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45992 === (20))){
var inst_45957 = (state_45991[(7)]);
var inst_45968 = (state_45991[(2)]);
var inst_45969 = cljs.core.next.call(null,inst_45957);
var inst_45943 = inst_45969;
var inst_45944 = null;
var inst_45945 = (0);
var inst_45946 = (0);
var state_45991__$1 = (function (){var statearr_45994 = state_45991;
(statearr_45994[(8)] = inst_45946);

(statearr_45994[(9)] = inst_45944);

(statearr_45994[(10)] = inst_45943);

(statearr_45994[(11)] = inst_45945);

(statearr_45994[(12)] = inst_45968);

return statearr_45994;
})();
var statearr_45995_46032 = state_45991__$1;
(statearr_45995_46032[(2)] = null);

(statearr_45995_46032[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45992 === (1))){
var state_45991__$1 = state_45991;
var statearr_45996_46033 = state_45991__$1;
(statearr_45996_46033[(2)] = null);

(statearr_45996_46033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45992 === (4))){
var inst_45932 = (state_45991[(13)]);
var inst_45932__$1 = (state_45991[(2)]);
var inst_45933 = (inst_45932__$1 == null);
var state_45991__$1 = (function (){var statearr_45997 = state_45991;
(statearr_45997[(13)] = inst_45932__$1);

return statearr_45997;
})();
if(cljs.core.truth_(inst_45933)){
var statearr_45998_46034 = state_45991__$1;
(statearr_45998_46034[(1)] = (5));

} else {
var statearr_45999_46035 = state_45991__$1;
(statearr_45999_46035[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45992 === (15))){
var state_45991__$1 = state_45991;
var statearr_46003_46036 = state_45991__$1;
(statearr_46003_46036[(2)] = null);

(statearr_46003_46036[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45992 === (21))){
var state_45991__$1 = state_45991;
var statearr_46004_46037 = state_45991__$1;
(statearr_46004_46037[(2)] = null);

(statearr_46004_46037[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45992 === (13))){
var inst_45946 = (state_45991[(8)]);
var inst_45944 = (state_45991[(9)]);
var inst_45943 = (state_45991[(10)]);
var inst_45945 = (state_45991[(11)]);
var inst_45953 = (state_45991[(2)]);
var inst_45954 = (inst_45946 + (1));
var tmp46000 = inst_45944;
var tmp46001 = inst_45943;
var tmp46002 = inst_45945;
var inst_45943__$1 = tmp46001;
var inst_45944__$1 = tmp46000;
var inst_45945__$1 = tmp46002;
var inst_45946__$1 = inst_45954;
var state_45991__$1 = (function (){var statearr_46005 = state_45991;
(statearr_46005[(8)] = inst_45946__$1);

(statearr_46005[(9)] = inst_45944__$1);

(statearr_46005[(14)] = inst_45953);

(statearr_46005[(10)] = inst_45943__$1);

(statearr_46005[(11)] = inst_45945__$1);

return statearr_46005;
})();
var statearr_46006_46038 = state_45991__$1;
(statearr_46006_46038[(2)] = null);

(statearr_46006_46038[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45992 === (22))){
var state_45991__$1 = state_45991;
var statearr_46007_46039 = state_45991__$1;
(statearr_46007_46039[(2)] = null);

(statearr_46007_46039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45992 === (6))){
var inst_45932 = (state_45991[(13)]);
var inst_45941 = f.call(null,inst_45932);
var inst_45942 = cljs.core.seq.call(null,inst_45941);
var inst_45943 = inst_45942;
var inst_45944 = null;
var inst_45945 = (0);
var inst_45946 = (0);
var state_45991__$1 = (function (){var statearr_46008 = state_45991;
(statearr_46008[(8)] = inst_45946);

(statearr_46008[(9)] = inst_45944);

(statearr_46008[(10)] = inst_45943);

(statearr_46008[(11)] = inst_45945);

return statearr_46008;
})();
var statearr_46009_46040 = state_45991__$1;
(statearr_46009_46040[(2)] = null);

(statearr_46009_46040[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45992 === (17))){
var inst_45957 = (state_45991[(7)]);
var inst_45961 = cljs.core.chunk_first.call(null,inst_45957);
var inst_45962 = cljs.core.chunk_rest.call(null,inst_45957);
var inst_45963 = cljs.core.count.call(null,inst_45961);
var inst_45943 = inst_45962;
var inst_45944 = inst_45961;
var inst_45945 = inst_45963;
var inst_45946 = (0);
var state_45991__$1 = (function (){var statearr_46010 = state_45991;
(statearr_46010[(8)] = inst_45946);

(statearr_46010[(9)] = inst_45944);

(statearr_46010[(10)] = inst_45943);

(statearr_46010[(11)] = inst_45945);

return statearr_46010;
})();
var statearr_46011_46041 = state_45991__$1;
(statearr_46011_46041[(2)] = null);

(statearr_46011_46041[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45992 === (3))){
var inst_45989 = (state_45991[(2)]);
var state_45991__$1 = state_45991;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45991__$1,inst_45989);
} else {
if((state_val_45992 === (12))){
var inst_45977 = (state_45991[(2)]);
var state_45991__$1 = state_45991;
var statearr_46012_46042 = state_45991__$1;
(statearr_46012_46042[(2)] = inst_45977);

(statearr_46012_46042[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45992 === (2))){
var state_45991__$1 = state_45991;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45991__$1,(4),in$);
} else {
if((state_val_45992 === (23))){
var inst_45985 = (state_45991[(2)]);
var state_45991__$1 = state_45991;
var statearr_46013_46043 = state_45991__$1;
(statearr_46013_46043[(2)] = inst_45985);

(statearr_46013_46043[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45992 === (19))){
var inst_45972 = (state_45991[(2)]);
var state_45991__$1 = state_45991;
var statearr_46014_46044 = state_45991__$1;
(statearr_46014_46044[(2)] = inst_45972);

(statearr_46014_46044[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45992 === (11))){
var inst_45957 = (state_45991[(7)]);
var inst_45943 = (state_45991[(10)]);
var inst_45957__$1 = cljs.core.seq.call(null,inst_45943);
var state_45991__$1 = (function (){var statearr_46015 = state_45991;
(statearr_46015[(7)] = inst_45957__$1);

return statearr_46015;
})();
if(inst_45957__$1){
var statearr_46016_46045 = state_45991__$1;
(statearr_46016_46045[(1)] = (14));

} else {
var statearr_46017_46046 = state_45991__$1;
(statearr_46017_46046[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45992 === (9))){
var inst_45979 = (state_45991[(2)]);
var inst_45980 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_45991__$1 = (function (){var statearr_46018 = state_45991;
(statearr_46018[(15)] = inst_45979);

return statearr_46018;
})();
if(cljs.core.truth_(inst_45980)){
var statearr_46019_46047 = state_45991__$1;
(statearr_46019_46047[(1)] = (21));

} else {
var statearr_46020_46048 = state_45991__$1;
(statearr_46020_46048[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45992 === (5))){
var inst_45935 = cljs.core.async.close_BANG_.call(null,out);
var state_45991__$1 = state_45991;
var statearr_46021_46049 = state_45991__$1;
(statearr_46021_46049[(2)] = inst_45935);

(statearr_46021_46049[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45992 === (14))){
var inst_45957 = (state_45991[(7)]);
var inst_45959 = cljs.core.chunked_seq_QMARK_.call(null,inst_45957);
var state_45991__$1 = state_45991;
if(inst_45959){
var statearr_46022_46050 = state_45991__$1;
(statearr_46022_46050[(1)] = (17));

} else {
var statearr_46023_46051 = state_45991__$1;
(statearr_46023_46051[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45992 === (16))){
var inst_45975 = (state_45991[(2)]);
var state_45991__$1 = state_45991;
var statearr_46024_46052 = state_45991__$1;
(statearr_46024_46052[(2)] = inst_45975);

(statearr_46024_46052[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45992 === (10))){
var inst_45946 = (state_45991[(8)]);
var inst_45944 = (state_45991[(9)]);
var inst_45951 = cljs.core._nth.call(null,inst_45944,inst_45946);
var state_45991__$1 = state_45991;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45991__$1,(13),out,inst_45951);
} else {
if((state_val_45992 === (18))){
var inst_45957 = (state_45991[(7)]);
var inst_45966 = cljs.core.first.call(null,inst_45957);
var state_45991__$1 = state_45991;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45991__$1,(20),out,inst_45966);
} else {
if((state_val_45992 === (8))){
var inst_45946 = (state_45991[(8)]);
var inst_45945 = (state_45991[(11)]);
var inst_45948 = (inst_45946 < inst_45945);
var inst_45949 = inst_45948;
var state_45991__$1 = state_45991;
if(cljs.core.truth_(inst_45949)){
var statearr_46025_46053 = state_45991__$1;
(statearr_46025_46053[(1)] = (10));

} else {
var statearr_46026_46054 = state_45991__$1;
(statearr_46026_46054[(1)] = (11));

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
});})(c__44389__auto__))
;
return ((function (switch__44301__auto__,c__44389__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__44302__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__44302__auto____0 = (function (){
var statearr_46027 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46027[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__44302__auto__);

(statearr_46027[(1)] = (1));

return statearr_46027;
});
var cljs$core$async$mapcat_STAR__$_state_machine__44302__auto____1 = (function (state_45991){
while(true){
var ret_value__44303__auto__ = (function (){try{while(true){
var result__44304__auto__ = switch__44301__auto__.call(null,state_45991);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44304__auto__;
}
break;
}
}catch (e46028){if((e46028 instanceof Object)){
var ex__44305__auto__ = e46028;
var statearr_46029_46055 = state_45991;
(statearr_46029_46055[(5)] = ex__44305__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45991);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46028;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46056 = state_45991;
state_45991 = G__46056;
continue;
} else {
return ret_value__44303__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__44302__auto__ = function(state_45991){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__44302__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__44302__auto____1.call(this,state_45991);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__44302__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__44302__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__44302__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__44302__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__44302__auto__;
})()
;})(switch__44301__auto__,c__44389__auto__))
})();
var state__44391__auto__ = (function (){var statearr_46030 = f__44390__auto__.call(null);
(statearr_46030[(6)] = c__44389__auto__);

return statearr_46030;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44391__auto__);
});})(c__44389__auto__))
);

return c__44389__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__46058 = arguments.length;
switch (G__46058) {
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
var G__46061 = arguments.length;
switch (G__46061) {
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
var G__46064 = arguments.length;
switch (G__46064) {
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
var c__44389__auto___46111 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44389__auto___46111,out){
return (function (){
var f__44390__auto__ = (function (){var switch__44301__auto__ = ((function (c__44389__auto___46111,out){
return (function (state_46088){
var state_val_46089 = (state_46088[(1)]);
if((state_val_46089 === (7))){
var inst_46083 = (state_46088[(2)]);
var state_46088__$1 = state_46088;
var statearr_46090_46112 = state_46088__$1;
(statearr_46090_46112[(2)] = inst_46083);

(statearr_46090_46112[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46089 === (1))){
var inst_46065 = null;
var state_46088__$1 = (function (){var statearr_46091 = state_46088;
(statearr_46091[(7)] = inst_46065);

return statearr_46091;
})();
var statearr_46092_46113 = state_46088__$1;
(statearr_46092_46113[(2)] = null);

(statearr_46092_46113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46089 === (4))){
var inst_46068 = (state_46088[(8)]);
var inst_46068__$1 = (state_46088[(2)]);
var inst_46069 = (inst_46068__$1 == null);
var inst_46070 = cljs.core.not.call(null,inst_46069);
var state_46088__$1 = (function (){var statearr_46093 = state_46088;
(statearr_46093[(8)] = inst_46068__$1);

return statearr_46093;
})();
if(inst_46070){
var statearr_46094_46114 = state_46088__$1;
(statearr_46094_46114[(1)] = (5));

} else {
var statearr_46095_46115 = state_46088__$1;
(statearr_46095_46115[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46089 === (6))){
var state_46088__$1 = state_46088;
var statearr_46096_46116 = state_46088__$1;
(statearr_46096_46116[(2)] = null);

(statearr_46096_46116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46089 === (3))){
var inst_46085 = (state_46088[(2)]);
var inst_46086 = cljs.core.async.close_BANG_.call(null,out);
var state_46088__$1 = (function (){var statearr_46097 = state_46088;
(statearr_46097[(9)] = inst_46085);

return statearr_46097;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46088__$1,inst_46086);
} else {
if((state_val_46089 === (2))){
var state_46088__$1 = state_46088;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46088__$1,(4),ch);
} else {
if((state_val_46089 === (11))){
var inst_46068 = (state_46088[(8)]);
var inst_46077 = (state_46088[(2)]);
var inst_46065 = inst_46068;
var state_46088__$1 = (function (){var statearr_46098 = state_46088;
(statearr_46098[(7)] = inst_46065);

(statearr_46098[(10)] = inst_46077);

return statearr_46098;
})();
var statearr_46099_46117 = state_46088__$1;
(statearr_46099_46117[(2)] = null);

(statearr_46099_46117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46089 === (9))){
var inst_46068 = (state_46088[(8)]);
var state_46088__$1 = state_46088;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46088__$1,(11),out,inst_46068);
} else {
if((state_val_46089 === (5))){
var inst_46065 = (state_46088[(7)]);
var inst_46068 = (state_46088[(8)]);
var inst_46072 = cljs.core._EQ_.call(null,inst_46068,inst_46065);
var state_46088__$1 = state_46088;
if(inst_46072){
var statearr_46101_46118 = state_46088__$1;
(statearr_46101_46118[(1)] = (8));

} else {
var statearr_46102_46119 = state_46088__$1;
(statearr_46102_46119[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46089 === (10))){
var inst_46080 = (state_46088[(2)]);
var state_46088__$1 = state_46088;
var statearr_46103_46120 = state_46088__$1;
(statearr_46103_46120[(2)] = inst_46080);

(statearr_46103_46120[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46089 === (8))){
var inst_46065 = (state_46088[(7)]);
var tmp46100 = inst_46065;
var inst_46065__$1 = tmp46100;
var state_46088__$1 = (function (){var statearr_46104 = state_46088;
(statearr_46104[(7)] = inst_46065__$1);

return statearr_46104;
})();
var statearr_46105_46121 = state_46088__$1;
(statearr_46105_46121[(2)] = null);

(statearr_46105_46121[(1)] = (2));


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
});})(c__44389__auto___46111,out))
;
return ((function (switch__44301__auto__,c__44389__auto___46111,out){
return (function() {
var cljs$core$async$state_machine__44302__auto__ = null;
var cljs$core$async$state_machine__44302__auto____0 = (function (){
var statearr_46106 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46106[(0)] = cljs$core$async$state_machine__44302__auto__);

(statearr_46106[(1)] = (1));

return statearr_46106;
});
var cljs$core$async$state_machine__44302__auto____1 = (function (state_46088){
while(true){
var ret_value__44303__auto__ = (function (){try{while(true){
var result__44304__auto__ = switch__44301__auto__.call(null,state_46088);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44304__auto__;
}
break;
}
}catch (e46107){if((e46107 instanceof Object)){
var ex__44305__auto__ = e46107;
var statearr_46108_46122 = state_46088;
(statearr_46108_46122[(5)] = ex__44305__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46088);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46107;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46123 = state_46088;
state_46088 = G__46123;
continue;
} else {
return ret_value__44303__auto__;
}
break;
}
});
cljs$core$async$state_machine__44302__auto__ = function(state_46088){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44302__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44302__auto____1.call(this,state_46088);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__44302__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44302__auto____0;
cljs$core$async$state_machine__44302__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44302__auto____1;
return cljs$core$async$state_machine__44302__auto__;
})()
;})(switch__44301__auto__,c__44389__auto___46111,out))
})();
var state__44391__auto__ = (function (){var statearr_46109 = f__44390__auto__.call(null);
(statearr_46109[(6)] = c__44389__auto___46111);

return statearr_46109;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44391__auto__);
});})(c__44389__auto___46111,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__46125 = arguments.length;
switch (G__46125) {
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
var c__44389__auto___46191 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44389__auto___46191,out){
return (function (){
var f__44390__auto__ = (function (){var switch__44301__auto__ = ((function (c__44389__auto___46191,out){
return (function (state_46163){
var state_val_46164 = (state_46163[(1)]);
if((state_val_46164 === (7))){
var inst_46159 = (state_46163[(2)]);
var state_46163__$1 = state_46163;
var statearr_46165_46192 = state_46163__$1;
(statearr_46165_46192[(2)] = inst_46159);

(statearr_46165_46192[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46164 === (1))){
var inst_46126 = (new Array(n));
var inst_46127 = inst_46126;
var inst_46128 = (0);
var state_46163__$1 = (function (){var statearr_46166 = state_46163;
(statearr_46166[(7)] = inst_46128);

(statearr_46166[(8)] = inst_46127);

return statearr_46166;
})();
var statearr_46167_46193 = state_46163__$1;
(statearr_46167_46193[(2)] = null);

(statearr_46167_46193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46164 === (4))){
var inst_46131 = (state_46163[(9)]);
var inst_46131__$1 = (state_46163[(2)]);
var inst_46132 = (inst_46131__$1 == null);
var inst_46133 = cljs.core.not.call(null,inst_46132);
var state_46163__$1 = (function (){var statearr_46168 = state_46163;
(statearr_46168[(9)] = inst_46131__$1);

return statearr_46168;
})();
if(inst_46133){
var statearr_46169_46194 = state_46163__$1;
(statearr_46169_46194[(1)] = (5));

} else {
var statearr_46170_46195 = state_46163__$1;
(statearr_46170_46195[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46164 === (15))){
var inst_46153 = (state_46163[(2)]);
var state_46163__$1 = state_46163;
var statearr_46171_46196 = state_46163__$1;
(statearr_46171_46196[(2)] = inst_46153);

(statearr_46171_46196[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46164 === (13))){
var state_46163__$1 = state_46163;
var statearr_46172_46197 = state_46163__$1;
(statearr_46172_46197[(2)] = null);

(statearr_46172_46197[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46164 === (6))){
var inst_46128 = (state_46163[(7)]);
var inst_46149 = (inst_46128 > (0));
var state_46163__$1 = state_46163;
if(cljs.core.truth_(inst_46149)){
var statearr_46173_46198 = state_46163__$1;
(statearr_46173_46198[(1)] = (12));

} else {
var statearr_46174_46199 = state_46163__$1;
(statearr_46174_46199[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46164 === (3))){
var inst_46161 = (state_46163[(2)]);
var state_46163__$1 = state_46163;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46163__$1,inst_46161);
} else {
if((state_val_46164 === (12))){
var inst_46127 = (state_46163[(8)]);
var inst_46151 = cljs.core.vec.call(null,inst_46127);
var state_46163__$1 = state_46163;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46163__$1,(15),out,inst_46151);
} else {
if((state_val_46164 === (2))){
var state_46163__$1 = state_46163;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46163__$1,(4),ch);
} else {
if((state_val_46164 === (11))){
var inst_46143 = (state_46163[(2)]);
var inst_46144 = (new Array(n));
var inst_46127 = inst_46144;
var inst_46128 = (0);
var state_46163__$1 = (function (){var statearr_46175 = state_46163;
(statearr_46175[(10)] = inst_46143);

(statearr_46175[(7)] = inst_46128);

(statearr_46175[(8)] = inst_46127);

return statearr_46175;
})();
var statearr_46176_46200 = state_46163__$1;
(statearr_46176_46200[(2)] = null);

(statearr_46176_46200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46164 === (9))){
var inst_46127 = (state_46163[(8)]);
var inst_46141 = cljs.core.vec.call(null,inst_46127);
var state_46163__$1 = state_46163;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46163__$1,(11),out,inst_46141);
} else {
if((state_val_46164 === (5))){
var inst_46131 = (state_46163[(9)]);
var inst_46128 = (state_46163[(7)]);
var inst_46127 = (state_46163[(8)]);
var inst_46136 = (state_46163[(11)]);
var inst_46135 = (inst_46127[inst_46128] = inst_46131);
var inst_46136__$1 = (inst_46128 + (1));
var inst_46137 = (inst_46136__$1 < n);
var state_46163__$1 = (function (){var statearr_46177 = state_46163;
(statearr_46177[(11)] = inst_46136__$1);

(statearr_46177[(12)] = inst_46135);

return statearr_46177;
})();
if(cljs.core.truth_(inst_46137)){
var statearr_46178_46201 = state_46163__$1;
(statearr_46178_46201[(1)] = (8));

} else {
var statearr_46179_46202 = state_46163__$1;
(statearr_46179_46202[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46164 === (14))){
var inst_46156 = (state_46163[(2)]);
var inst_46157 = cljs.core.async.close_BANG_.call(null,out);
var state_46163__$1 = (function (){var statearr_46181 = state_46163;
(statearr_46181[(13)] = inst_46156);

return statearr_46181;
})();
var statearr_46182_46203 = state_46163__$1;
(statearr_46182_46203[(2)] = inst_46157);

(statearr_46182_46203[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46164 === (10))){
var inst_46147 = (state_46163[(2)]);
var state_46163__$1 = state_46163;
var statearr_46183_46204 = state_46163__$1;
(statearr_46183_46204[(2)] = inst_46147);

(statearr_46183_46204[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46164 === (8))){
var inst_46127 = (state_46163[(8)]);
var inst_46136 = (state_46163[(11)]);
var tmp46180 = inst_46127;
var inst_46127__$1 = tmp46180;
var inst_46128 = inst_46136;
var state_46163__$1 = (function (){var statearr_46184 = state_46163;
(statearr_46184[(7)] = inst_46128);

(statearr_46184[(8)] = inst_46127__$1);

return statearr_46184;
})();
var statearr_46185_46205 = state_46163__$1;
(statearr_46185_46205[(2)] = null);

(statearr_46185_46205[(1)] = (2));


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
});})(c__44389__auto___46191,out))
;
return ((function (switch__44301__auto__,c__44389__auto___46191,out){
return (function() {
var cljs$core$async$state_machine__44302__auto__ = null;
var cljs$core$async$state_machine__44302__auto____0 = (function (){
var statearr_46186 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46186[(0)] = cljs$core$async$state_machine__44302__auto__);

(statearr_46186[(1)] = (1));

return statearr_46186;
});
var cljs$core$async$state_machine__44302__auto____1 = (function (state_46163){
while(true){
var ret_value__44303__auto__ = (function (){try{while(true){
var result__44304__auto__ = switch__44301__auto__.call(null,state_46163);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44304__auto__;
}
break;
}
}catch (e46187){if((e46187 instanceof Object)){
var ex__44305__auto__ = e46187;
var statearr_46188_46206 = state_46163;
(statearr_46188_46206[(5)] = ex__44305__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46163);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46187;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46207 = state_46163;
state_46163 = G__46207;
continue;
} else {
return ret_value__44303__auto__;
}
break;
}
});
cljs$core$async$state_machine__44302__auto__ = function(state_46163){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44302__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44302__auto____1.call(this,state_46163);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__44302__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44302__auto____0;
cljs$core$async$state_machine__44302__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44302__auto____1;
return cljs$core$async$state_machine__44302__auto__;
})()
;})(switch__44301__auto__,c__44389__auto___46191,out))
})();
var state__44391__auto__ = (function (){var statearr_46189 = f__44390__auto__.call(null);
(statearr_46189[(6)] = c__44389__auto___46191);

return statearr_46189;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44391__auto__);
});})(c__44389__auto___46191,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__46209 = arguments.length;
switch (G__46209) {
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
var c__44389__auto___46279 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44389__auto___46279,out){
return (function (){
var f__44390__auto__ = (function (){var switch__44301__auto__ = ((function (c__44389__auto___46279,out){
return (function (state_46251){
var state_val_46252 = (state_46251[(1)]);
if((state_val_46252 === (7))){
var inst_46247 = (state_46251[(2)]);
var state_46251__$1 = state_46251;
var statearr_46253_46280 = state_46251__$1;
(statearr_46253_46280[(2)] = inst_46247);

(statearr_46253_46280[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46252 === (1))){
var inst_46210 = [];
var inst_46211 = inst_46210;
var inst_46212 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_46251__$1 = (function (){var statearr_46254 = state_46251;
(statearr_46254[(7)] = inst_46212);

(statearr_46254[(8)] = inst_46211);

return statearr_46254;
})();
var statearr_46255_46281 = state_46251__$1;
(statearr_46255_46281[(2)] = null);

(statearr_46255_46281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46252 === (4))){
var inst_46215 = (state_46251[(9)]);
var inst_46215__$1 = (state_46251[(2)]);
var inst_46216 = (inst_46215__$1 == null);
var inst_46217 = cljs.core.not.call(null,inst_46216);
var state_46251__$1 = (function (){var statearr_46256 = state_46251;
(statearr_46256[(9)] = inst_46215__$1);

return statearr_46256;
})();
if(inst_46217){
var statearr_46257_46282 = state_46251__$1;
(statearr_46257_46282[(1)] = (5));

} else {
var statearr_46258_46283 = state_46251__$1;
(statearr_46258_46283[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46252 === (15))){
var inst_46241 = (state_46251[(2)]);
var state_46251__$1 = state_46251;
var statearr_46259_46284 = state_46251__$1;
(statearr_46259_46284[(2)] = inst_46241);

(statearr_46259_46284[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46252 === (13))){
var state_46251__$1 = state_46251;
var statearr_46260_46285 = state_46251__$1;
(statearr_46260_46285[(2)] = null);

(statearr_46260_46285[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46252 === (6))){
var inst_46211 = (state_46251[(8)]);
var inst_46236 = inst_46211.length;
var inst_46237 = (inst_46236 > (0));
var state_46251__$1 = state_46251;
if(cljs.core.truth_(inst_46237)){
var statearr_46261_46286 = state_46251__$1;
(statearr_46261_46286[(1)] = (12));

} else {
var statearr_46262_46287 = state_46251__$1;
(statearr_46262_46287[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46252 === (3))){
var inst_46249 = (state_46251[(2)]);
var state_46251__$1 = state_46251;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46251__$1,inst_46249);
} else {
if((state_val_46252 === (12))){
var inst_46211 = (state_46251[(8)]);
var inst_46239 = cljs.core.vec.call(null,inst_46211);
var state_46251__$1 = state_46251;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46251__$1,(15),out,inst_46239);
} else {
if((state_val_46252 === (2))){
var state_46251__$1 = state_46251;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46251__$1,(4),ch);
} else {
if((state_val_46252 === (11))){
var inst_46215 = (state_46251[(9)]);
var inst_46219 = (state_46251[(10)]);
var inst_46229 = (state_46251[(2)]);
var inst_46230 = [];
var inst_46231 = inst_46230.push(inst_46215);
var inst_46211 = inst_46230;
var inst_46212 = inst_46219;
var state_46251__$1 = (function (){var statearr_46263 = state_46251;
(statearr_46263[(11)] = inst_46229);

(statearr_46263[(12)] = inst_46231);

(statearr_46263[(7)] = inst_46212);

(statearr_46263[(8)] = inst_46211);

return statearr_46263;
})();
var statearr_46264_46288 = state_46251__$1;
(statearr_46264_46288[(2)] = null);

(statearr_46264_46288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46252 === (9))){
var inst_46211 = (state_46251[(8)]);
var inst_46227 = cljs.core.vec.call(null,inst_46211);
var state_46251__$1 = state_46251;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46251__$1,(11),out,inst_46227);
} else {
if((state_val_46252 === (5))){
var inst_46215 = (state_46251[(9)]);
var inst_46212 = (state_46251[(7)]);
var inst_46219 = (state_46251[(10)]);
var inst_46219__$1 = f.call(null,inst_46215);
var inst_46220 = cljs.core._EQ_.call(null,inst_46219__$1,inst_46212);
var inst_46221 = cljs.core.keyword_identical_QMARK_.call(null,inst_46212,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_46222 = (inst_46220) || (inst_46221);
var state_46251__$1 = (function (){var statearr_46265 = state_46251;
(statearr_46265[(10)] = inst_46219__$1);

return statearr_46265;
})();
if(cljs.core.truth_(inst_46222)){
var statearr_46266_46289 = state_46251__$1;
(statearr_46266_46289[(1)] = (8));

} else {
var statearr_46267_46290 = state_46251__$1;
(statearr_46267_46290[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46252 === (14))){
var inst_46244 = (state_46251[(2)]);
var inst_46245 = cljs.core.async.close_BANG_.call(null,out);
var state_46251__$1 = (function (){var statearr_46269 = state_46251;
(statearr_46269[(13)] = inst_46244);

return statearr_46269;
})();
var statearr_46270_46291 = state_46251__$1;
(statearr_46270_46291[(2)] = inst_46245);

(statearr_46270_46291[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46252 === (10))){
var inst_46234 = (state_46251[(2)]);
var state_46251__$1 = state_46251;
var statearr_46271_46292 = state_46251__$1;
(statearr_46271_46292[(2)] = inst_46234);

(statearr_46271_46292[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46252 === (8))){
var inst_46215 = (state_46251[(9)]);
var inst_46211 = (state_46251[(8)]);
var inst_46219 = (state_46251[(10)]);
var inst_46224 = inst_46211.push(inst_46215);
var tmp46268 = inst_46211;
var inst_46211__$1 = tmp46268;
var inst_46212 = inst_46219;
var state_46251__$1 = (function (){var statearr_46272 = state_46251;
(statearr_46272[(7)] = inst_46212);

(statearr_46272[(8)] = inst_46211__$1);

(statearr_46272[(14)] = inst_46224);

return statearr_46272;
})();
var statearr_46273_46293 = state_46251__$1;
(statearr_46273_46293[(2)] = null);

(statearr_46273_46293[(1)] = (2));


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
});})(c__44389__auto___46279,out))
;
return ((function (switch__44301__auto__,c__44389__auto___46279,out){
return (function() {
var cljs$core$async$state_machine__44302__auto__ = null;
var cljs$core$async$state_machine__44302__auto____0 = (function (){
var statearr_46274 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46274[(0)] = cljs$core$async$state_machine__44302__auto__);

(statearr_46274[(1)] = (1));

return statearr_46274;
});
var cljs$core$async$state_machine__44302__auto____1 = (function (state_46251){
while(true){
var ret_value__44303__auto__ = (function (){try{while(true){
var result__44304__auto__ = switch__44301__auto__.call(null,state_46251);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44304__auto__;
}
break;
}
}catch (e46275){if((e46275 instanceof Object)){
var ex__44305__auto__ = e46275;
var statearr_46276_46294 = state_46251;
(statearr_46276_46294[(5)] = ex__44305__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46251);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46275;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44303__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46295 = state_46251;
state_46251 = G__46295;
continue;
} else {
return ret_value__44303__auto__;
}
break;
}
});
cljs$core$async$state_machine__44302__auto__ = function(state_46251){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44302__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44302__auto____1.call(this,state_46251);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__44302__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44302__auto____0;
cljs$core$async$state_machine__44302__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44302__auto____1;
return cljs$core$async$state_machine__44302__auto__;
})()
;})(switch__44301__auto__,c__44389__auto___46279,out))
})();
var state__44391__auto__ = (function (){var statearr_46277 = f__44390__auto__.call(null);
(statearr_46277[(6)] = c__44389__auto___46279);

return statearr_46277;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44391__auto__);
});})(c__44389__auto___46279,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1503550042863