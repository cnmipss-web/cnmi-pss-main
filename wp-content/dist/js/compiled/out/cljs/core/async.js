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
var G__30083 = arguments.length;
switch (G__30083) {
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
if(typeof cljs.core.async.t_cljs$core$async30084 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30084 = (function (f,blockable,meta30085){
this.f = f;
this.blockable = blockable;
this.meta30085 = meta30085;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30084.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30086,meta30085__$1){
var self__ = this;
var _30086__$1 = this;
return (new cljs.core.async.t_cljs$core$async30084(self__.f,self__.blockable,meta30085__$1));
});

cljs.core.async.t_cljs$core$async30084.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30086){
var self__ = this;
var _30086__$1 = this;
return self__.meta30085;
});

cljs.core.async.t_cljs$core$async30084.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30084.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30084.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async30084.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async30084.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30085","meta30085",-468671449,null)], null);
});

cljs.core.async.t_cljs$core$async30084.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30084.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30084";

cljs.core.async.t_cljs$core$async30084.cljs$lang$ctorPrWriter = (function (this__27567__auto__,writer__27568__auto__,opt__27569__auto__){
return cljs.core._write.call(null,writer__27568__auto__,"cljs.core.async/t_cljs$core$async30084");
});

cljs.core.async.__GT_t_cljs$core$async30084 = (function cljs$core$async$__GT_t_cljs$core$async30084(f__$1,blockable__$1,meta30085){
return (new cljs.core.async.t_cljs$core$async30084(f__$1,blockable__$1,meta30085));
});

}

return (new cljs.core.async.t_cljs$core$async30084(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__30090 = arguments.length;
switch (G__30090) {
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
var G__30093 = arguments.length;
switch (G__30093) {
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
var G__30096 = arguments.length;
switch (G__30096) {
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
var val_30098 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_30098);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_30098,ret){
return (function (){
return fn1.call(null,val_30098);
});})(val_30098,ret))
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
var G__30100 = arguments.length;
switch (G__30100) {
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
var n__27880__auto___30102 = n;
var x_30103 = (0);
while(true){
if((x_30103 < n__27880__auto___30102)){
(a[x_30103] = (0));

var G__30104 = (x_30103 + (1));
x_30103 = G__30104;
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

var G__30105 = (i + (1));
i = G__30105;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async30106 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30106 = (function (flag,meta30107){
this.flag = flag;
this.meta30107 = meta30107;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30106.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_30108,meta30107__$1){
var self__ = this;
var _30108__$1 = this;
return (new cljs.core.async.t_cljs$core$async30106(self__.flag,meta30107__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async30106.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_30108){
var self__ = this;
var _30108__$1 = this;
return self__.meta30107;
});})(flag))
;

cljs.core.async.t_cljs$core$async30106.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30106.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async30106.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30106.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30106.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30107","meta30107",739480091,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async30106.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30106.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30106";

cljs.core.async.t_cljs$core$async30106.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__27567__auto__,writer__27568__auto__,opt__27569__auto__){
return cljs.core._write.call(null,writer__27568__auto__,"cljs.core.async/t_cljs$core$async30106");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async30106 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30106(flag__$1,meta30107){
return (new cljs.core.async.t_cljs$core$async30106(flag__$1,meta30107));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async30106(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async30109 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30109 = (function (flag,cb,meta30110){
this.flag = flag;
this.cb = cb;
this.meta30110 = meta30110;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30109.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30111,meta30110__$1){
var self__ = this;
var _30111__$1 = this;
return (new cljs.core.async.t_cljs$core$async30109(self__.flag,self__.cb,meta30110__$1));
});

cljs.core.async.t_cljs$core$async30109.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30111){
var self__ = this;
var _30111__$1 = this;
return self__.meta30110;
});

cljs.core.async.t_cljs$core$async30109.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30109.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async30109.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30109.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async30109.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30110","meta30110",-1676714824,null)], null);
});

cljs.core.async.t_cljs$core$async30109.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30109.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30109";

cljs.core.async.t_cljs$core$async30109.cljs$lang$ctorPrWriter = (function (this__27567__auto__,writer__27568__auto__,opt__27569__auto__){
return cljs.core._write.call(null,writer__27568__auto__,"cljs.core.async/t_cljs$core$async30109");
});

cljs.core.async.__GT_t_cljs$core$async30109 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30109(flag__$1,cb__$1,meta30110){
return (new cljs.core.async.t_cljs$core$async30109(flag__$1,cb__$1,meta30110));
});

}

return (new cljs.core.async.t_cljs$core$async30109(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__30112_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30112_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30113_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30113_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__26956__auto__ = wport;
if(cljs.core.truth_(or__26956__auto__)){
return or__26956__auto__;
} else {
return port;
}
})()], null));
} else {
var G__30114 = (i + (1));
i = G__30114;
continue;
}
} else {
return null;
}
break;
}
})();
var or__26956__auto__ = ret;
if(cljs.core.truth_(or__26956__auto__)){
return or__26956__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__26944__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__26944__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__26944__auto__;
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
var args__28088__auto__ = [];
var len__28081__auto___30120 = arguments.length;
var i__28082__auto___30121 = (0);
while(true){
if((i__28082__auto___30121 < len__28081__auto___30120)){
args__28088__auto__.push((arguments[i__28082__auto___30121]));

var G__30122 = (i__28082__auto___30121 + (1));
i__28082__auto___30121 = G__30122;
continue;
} else {
}
break;
}

var argseq__28089__auto__ = ((((1) < args__28088__auto__.length))?(new cljs.core.IndexedSeq(args__28088__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28089__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30117){
var map__30118 = p__30117;
var map__30118__$1 = ((((!((map__30118 == null)))?((((map__30118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30118.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30118):map__30118);
var opts = map__30118__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30115){
var G__30116 = cljs.core.first.call(null,seq30115);
var seq30115__$1 = cljs.core.next.call(null,seq30115);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30116,seq30115__$1);
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
var G__30124 = arguments.length;
switch (G__30124) {
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
var c__30037__auto___30170 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30037__auto___30170){
return (function (){
var f__30038__auto__ = (function (){var switch__29949__auto__ = ((function (c__30037__auto___30170){
return (function (state_30148){
var state_val_30149 = (state_30148[(1)]);
if((state_val_30149 === (7))){
var inst_30144 = (state_30148[(2)]);
var state_30148__$1 = state_30148;
var statearr_30150_30171 = state_30148__$1;
(statearr_30150_30171[(2)] = inst_30144);

(statearr_30150_30171[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30149 === (1))){
var state_30148__$1 = state_30148;
var statearr_30151_30172 = state_30148__$1;
(statearr_30151_30172[(2)] = null);

(statearr_30151_30172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30149 === (4))){
var inst_30127 = (state_30148[(7)]);
var inst_30127__$1 = (state_30148[(2)]);
var inst_30128 = (inst_30127__$1 == null);
var state_30148__$1 = (function (){var statearr_30152 = state_30148;
(statearr_30152[(7)] = inst_30127__$1);

return statearr_30152;
})();
if(cljs.core.truth_(inst_30128)){
var statearr_30153_30173 = state_30148__$1;
(statearr_30153_30173[(1)] = (5));

} else {
var statearr_30154_30174 = state_30148__$1;
(statearr_30154_30174[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30149 === (13))){
var state_30148__$1 = state_30148;
var statearr_30155_30175 = state_30148__$1;
(statearr_30155_30175[(2)] = null);

(statearr_30155_30175[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30149 === (6))){
var inst_30127 = (state_30148[(7)]);
var state_30148__$1 = state_30148;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30148__$1,(11),to,inst_30127);
} else {
if((state_val_30149 === (3))){
var inst_30146 = (state_30148[(2)]);
var state_30148__$1 = state_30148;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30148__$1,inst_30146);
} else {
if((state_val_30149 === (12))){
var state_30148__$1 = state_30148;
var statearr_30156_30176 = state_30148__$1;
(statearr_30156_30176[(2)] = null);

(statearr_30156_30176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30149 === (2))){
var state_30148__$1 = state_30148;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30148__$1,(4),from);
} else {
if((state_val_30149 === (11))){
var inst_30137 = (state_30148[(2)]);
var state_30148__$1 = state_30148;
if(cljs.core.truth_(inst_30137)){
var statearr_30157_30177 = state_30148__$1;
(statearr_30157_30177[(1)] = (12));

} else {
var statearr_30158_30178 = state_30148__$1;
(statearr_30158_30178[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30149 === (9))){
var state_30148__$1 = state_30148;
var statearr_30159_30179 = state_30148__$1;
(statearr_30159_30179[(2)] = null);

(statearr_30159_30179[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30149 === (5))){
var state_30148__$1 = state_30148;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30160_30180 = state_30148__$1;
(statearr_30160_30180[(1)] = (8));

} else {
var statearr_30161_30181 = state_30148__$1;
(statearr_30161_30181[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30149 === (14))){
var inst_30142 = (state_30148[(2)]);
var state_30148__$1 = state_30148;
var statearr_30162_30182 = state_30148__$1;
(statearr_30162_30182[(2)] = inst_30142);

(statearr_30162_30182[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30149 === (10))){
var inst_30134 = (state_30148[(2)]);
var state_30148__$1 = state_30148;
var statearr_30163_30183 = state_30148__$1;
(statearr_30163_30183[(2)] = inst_30134);

(statearr_30163_30183[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30149 === (8))){
var inst_30131 = cljs.core.async.close_BANG_.call(null,to);
var state_30148__$1 = state_30148;
var statearr_30164_30184 = state_30148__$1;
(statearr_30164_30184[(2)] = inst_30131);

(statearr_30164_30184[(1)] = (10));


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
});})(c__30037__auto___30170))
;
return ((function (switch__29949__auto__,c__30037__auto___30170){
return (function() {
var cljs$core$async$state_machine__29950__auto__ = null;
var cljs$core$async$state_machine__29950__auto____0 = (function (){
var statearr_30165 = [null,null,null,null,null,null,null,null];
(statearr_30165[(0)] = cljs$core$async$state_machine__29950__auto__);

(statearr_30165[(1)] = (1));

return statearr_30165;
});
var cljs$core$async$state_machine__29950__auto____1 = (function (state_30148){
while(true){
var ret_value__29951__auto__ = (function (){try{while(true){
var result__29952__auto__ = switch__29949__auto__.call(null,state_30148);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29952__auto__;
}
break;
}
}catch (e30166){if((e30166 instanceof Object)){
var ex__29953__auto__ = e30166;
var statearr_30167_30185 = state_30148;
(statearr_30167_30185[(5)] = ex__29953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30148);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30166;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30186 = state_30148;
state_30148 = G__30186;
continue;
} else {
return ret_value__29951__auto__;
}
break;
}
});
cljs$core$async$state_machine__29950__auto__ = function(state_30148){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29950__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29950__auto____1.call(this,state_30148);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29950__auto____0;
cljs$core$async$state_machine__29950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29950__auto____1;
return cljs$core$async$state_machine__29950__auto__;
})()
;})(switch__29949__auto__,c__30037__auto___30170))
})();
var state__30039__auto__ = (function (){var statearr_30168 = f__30038__auto__.call(null);
(statearr_30168[(6)] = c__30037__auto___30170);

return statearr_30168;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30039__auto__);
});})(c__30037__auto___30170))
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
return (function (p__30187){
var vec__30188 = p__30187;
var v = cljs.core.nth.call(null,vec__30188,(0),null);
var p = cljs.core.nth.call(null,vec__30188,(1),null);
var job = vec__30188;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__30037__auto___30359 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30037__auto___30359,res,vec__30188,v,p,job,jobs,results){
return (function (){
var f__30038__auto__ = (function (){var switch__29949__auto__ = ((function (c__30037__auto___30359,res,vec__30188,v,p,job,jobs,results){
return (function (state_30195){
var state_val_30196 = (state_30195[(1)]);
if((state_val_30196 === (1))){
var state_30195__$1 = state_30195;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30195__$1,(2),res,v);
} else {
if((state_val_30196 === (2))){
var inst_30192 = (state_30195[(2)]);
var inst_30193 = cljs.core.async.close_BANG_.call(null,res);
var state_30195__$1 = (function (){var statearr_30197 = state_30195;
(statearr_30197[(7)] = inst_30192);

return statearr_30197;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30195__$1,inst_30193);
} else {
return null;
}
}
});})(c__30037__auto___30359,res,vec__30188,v,p,job,jobs,results))
;
return ((function (switch__29949__auto__,c__30037__auto___30359,res,vec__30188,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29950__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29950__auto____0 = (function (){
var statearr_30198 = [null,null,null,null,null,null,null,null];
(statearr_30198[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29950__auto__);

(statearr_30198[(1)] = (1));

return statearr_30198;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29950__auto____1 = (function (state_30195){
while(true){
var ret_value__29951__auto__ = (function (){try{while(true){
var result__29952__auto__ = switch__29949__auto__.call(null,state_30195);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29952__auto__;
}
break;
}
}catch (e30199){if((e30199 instanceof Object)){
var ex__29953__auto__ = e30199;
var statearr_30200_30360 = state_30195;
(statearr_30200_30360[(5)] = ex__29953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30195);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30199;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30361 = state_30195;
state_30195 = G__30361;
continue;
} else {
return ret_value__29951__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29950__auto__ = function(state_30195){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29950__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29950__auto____1.call(this,state_30195);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__29950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29950__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29950__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29950__auto__;
})()
;})(switch__29949__auto__,c__30037__auto___30359,res,vec__30188,v,p,job,jobs,results))
})();
var state__30039__auto__ = (function (){var statearr_30201 = f__30038__auto__.call(null);
(statearr_30201[(6)] = c__30037__auto___30359);

return statearr_30201;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30039__auto__);
});})(c__30037__auto___30359,res,vec__30188,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__30202){
var vec__30203 = p__30202;
var v = cljs.core.nth.call(null,vec__30203,(0),null);
var p = cljs.core.nth.call(null,vec__30203,(1),null);
var job = vec__30203;
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
var n__27880__auto___30362 = n;
var __30363 = (0);
while(true){
if((__30363 < n__27880__auto___30362)){
var G__30206_30364 = type;
var G__30206_30365__$1 = (((G__30206_30364 instanceof cljs.core.Keyword))?G__30206_30364.fqn:null);
switch (G__30206_30365__$1) {
case "compute":
var c__30037__auto___30367 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30363,c__30037__auto___30367,G__30206_30364,G__30206_30365__$1,n__27880__auto___30362,jobs,results,process,async){
return (function (){
var f__30038__auto__ = (function (){var switch__29949__auto__ = ((function (__30363,c__30037__auto___30367,G__30206_30364,G__30206_30365__$1,n__27880__auto___30362,jobs,results,process,async){
return (function (state_30219){
var state_val_30220 = (state_30219[(1)]);
if((state_val_30220 === (1))){
var state_30219__$1 = state_30219;
var statearr_30221_30368 = state_30219__$1;
(statearr_30221_30368[(2)] = null);

(statearr_30221_30368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30220 === (2))){
var state_30219__$1 = state_30219;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30219__$1,(4),jobs);
} else {
if((state_val_30220 === (3))){
var inst_30217 = (state_30219[(2)]);
var state_30219__$1 = state_30219;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30219__$1,inst_30217);
} else {
if((state_val_30220 === (4))){
var inst_30209 = (state_30219[(2)]);
var inst_30210 = process.call(null,inst_30209);
var state_30219__$1 = state_30219;
if(cljs.core.truth_(inst_30210)){
var statearr_30222_30369 = state_30219__$1;
(statearr_30222_30369[(1)] = (5));

} else {
var statearr_30223_30370 = state_30219__$1;
(statearr_30223_30370[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30220 === (5))){
var state_30219__$1 = state_30219;
var statearr_30224_30371 = state_30219__$1;
(statearr_30224_30371[(2)] = null);

(statearr_30224_30371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30220 === (6))){
var state_30219__$1 = state_30219;
var statearr_30225_30372 = state_30219__$1;
(statearr_30225_30372[(2)] = null);

(statearr_30225_30372[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30220 === (7))){
var inst_30215 = (state_30219[(2)]);
var state_30219__$1 = state_30219;
var statearr_30226_30373 = state_30219__$1;
(statearr_30226_30373[(2)] = inst_30215);

(statearr_30226_30373[(1)] = (3));


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
});})(__30363,c__30037__auto___30367,G__30206_30364,G__30206_30365__$1,n__27880__auto___30362,jobs,results,process,async))
;
return ((function (__30363,switch__29949__auto__,c__30037__auto___30367,G__30206_30364,G__30206_30365__$1,n__27880__auto___30362,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29950__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29950__auto____0 = (function (){
var statearr_30227 = [null,null,null,null,null,null,null];
(statearr_30227[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29950__auto__);

(statearr_30227[(1)] = (1));

return statearr_30227;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29950__auto____1 = (function (state_30219){
while(true){
var ret_value__29951__auto__ = (function (){try{while(true){
var result__29952__auto__ = switch__29949__auto__.call(null,state_30219);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29952__auto__;
}
break;
}
}catch (e30228){if((e30228 instanceof Object)){
var ex__29953__auto__ = e30228;
var statearr_30229_30374 = state_30219;
(statearr_30229_30374[(5)] = ex__29953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30219);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30228;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30375 = state_30219;
state_30219 = G__30375;
continue;
} else {
return ret_value__29951__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29950__auto__ = function(state_30219){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29950__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29950__auto____1.call(this,state_30219);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__29950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29950__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29950__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29950__auto__;
})()
;})(__30363,switch__29949__auto__,c__30037__auto___30367,G__30206_30364,G__30206_30365__$1,n__27880__auto___30362,jobs,results,process,async))
})();
var state__30039__auto__ = (function (){var statearr_30230 = f__30038__auto__.call(null);
(statearr_30230[(6)] = c__30037__auto___30367);

return statearr_30230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30039__auto__);
});})(__30363,c__30037__auto___30367,G__30206_30364,G__30206_30365__$1,n__27880__auto___30362,jobs,results,process,async))
);


break;
case "async":
var c__30037__auto___30376 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30363,c__30037__auto___30376,G__30206_30364,G__30206_30365__$1,n__27880__auto___30362,jobs,results,process,async){
return (function (){
var f__30038__auto__ = (function (){var switch__29949__auto__ = ((function (__30363,c__30037__auto___30376,G__30206_30364,G__30206_30365__$1,n__27880__auto___30362,jobs,results,process,async){
return (function (state_30243){
var state_val_30244 = (state_30243[(1)]);
if((state_val_30244 === (1))){
var state_30243__$1 = state_30243;
var statearr_30245_30377 = state_30243__$1;
(statearr_30245_30377[(2)] = null);

(statearr_30245_30377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30244 === (2))){
var state_30243__$1 = state_30243;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30243__$1,(4),jobs);
} else {
if((state_val_30244 === (3))){
var inst_30241 = (state_30243[(2)]);
var state_30243__$1 = state_30243;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30243__$1,inst_30241);
} else {
if((state_val_30244 === (4))){
var inst_30233 = (state_30243[(2)]);
var inst_30234 = async.call(null,inst_30233);
var state_30243__$1 = state_30243;
if(cljs.core.truth_(inst_30234)){
var statearr_30246_30378 = state_30243__$1;
(statearr_30246_30378[(1)] = (5));

} else {
var statearr_30247_30379 = state_30243__$1;
(statearr_30247_30379[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30244 === (5))){
var state_30243__$1 = state_30243;
var statearr_30248_30380 = state_30243__$1;
(statearr_30248_30380[(2)] = null);

(statearr_30248_30380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30244 === (6))){
var state_30243__$1 = state_30243;
var statearr_30249_30381 = state_30243__$1;
(statearr_30249_30381[(2)] = null);

(statearr_30249_30381[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30244 === (7))){
var inst_30239 = (state_30243[(2)]);
var state_30243__$1 = state_30243;
var statearr_30250_30382 = state_30243__$1;
(statearr_30250_30382[(2)] = inst_30239);

(statearr_30250_30382[(1)] = (3));


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
});})(__30363,c__30037__auto___30376,G__30206_30364,G__30206_30365__$1,n__27880__auto___30362,jobs,results,process,async))
;
return ((function (__30363,switch__29949__auto__,c__30037__auto___30376,G__30206_30364,G__30206_30365__$1,n__27880__auto___30362,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29950__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29950__auto____0 = (function (){
var statearr_30251 = [null,null,null,null,null,null,null];
(statearr_30251[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29950__auto__);

(statearr_30251[(1)] = (1));

return statearr_30251;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29950__auto____1 = (function (state_30243){
while(true){
var ret_value__29951__auto__ = (function (){try{while(true){
var result__29952__auto__ = switch__29949__auto__.call(null,state_30243);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29952__auto__;
}
break;
}
}catch (e30252){if((e30252 instanceof Object)){
var ex__29953__auto__ = e30252;
var statearr_30253_30383 = state_30243;
(statearr_30253_30383[(5)] = ex__29953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30243);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30252;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30384 = state_30243;
state_30243 = G__30384;
continue;
} else {
return ret_value__29951__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29950__auto__ = function(state_30243){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29950__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29950__auto____1.call(this,state_30243);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__29950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29950__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29950__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29950__auto__;
})()
;})(__30363,switch__29949__auto__,c__30037__auto___30376,G__30206_30364,G__30206_30365__$1,n__27880__auto___30362,jobs,results,process,async))
})();
var state__30039__auto__ = (function (){var statearr_30254 = f__30038__auto__.call(null);
(statearr_30254[(6)] = c__30037__auto___30376);

return statearr_30254;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30039__auto__);
});})(__30363,c__30037__auto___30376,G__30206_30364,G__30206_30365__$1,n__27880__auto___30362,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30206_30365__$1)].join('')));

}

var G__30385 = (__30363 + (1));
__30363 = G__30385;
continue;
} else {
}
break;
}

var c__30037__auto___30386 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30037__auto___30386,jobs,results,process,async){
return (function (){
var f__30038__auto__ = (function (){var switch__29949__auto__ = ((function (c__30037__auto___30386,jobs,results,process,async){
return (function (state_30276){
var state_val_30277 = (state_30276[(1)]);
if((state_val_30277 === (1))){
var state_30276__$1 = state_30276;
var statearr_30278_30387 = state_30276__$1;
(statearr_30278_30387[(2)] = null);

(statearr_30278_30387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30277 === (2))){
var state_30276__$1 = state_30276;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30276__$1,(4),from);
} else {
if((state_val_30277 === (3))){
var inst_30274 = (state_30276[(2)]);
var state_30276__$1 = state_30276;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30276__$1,inst_30274);
} else {
if((state_val_30277 === (4))){
var inst_30257 = (state_30276[(7)]);
var inst_30257__$1 = (state_30276[(2)]);
var inst_30258 = (inst_30257__$1 == null);
var state_30276__$1 = (function (){var statearr_30279 = state_30276;
(statearr_30279[(7)] = inst_30257__$1);

return statearr_30279;
})();
if(cljs.core.truth_(inst_30258)){
var statearr_30280_30388 = state_30276__$1;
(statearr_30280_30388[(1)] = (5));

} else {
var statearr_30281_30389 = state_30276__$1;
(statearr_30281_30389[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30277 === (5))){
var inst_30260 = cljs.core.async.close_BANG_.call(null,jobs);
var state_30276__$1 = state_30276;
var statearr_30282_30390 = state_30276__$1;
(statearr_30282_30390[(2)] = inst_30260);

(statearr_30282_30390[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30277 === (6))){
var inst_30262 = (state_30276[(8)]);
var inst_30257 = (state_30276[(7)]);
var inst_30262__$1 = cljs.core.async.chan.call(null,(1));
var inst_30263 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30264 = [inst_30257,inst_30262__$1];
var inst_30265 = (new cljs.core.PersistentVector(null,2,(5),inst_30263,inst_30264,null));
var state_30276__$1 = (function (){var statearr_30283 = state_30276;
(statearr_30283[(8)] = inst_30262__$1);

return statearr_30283;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30276__$1,(8),jobs,inst_30265);
} else {
if((state_val_30277 === (7))){
var inst_30272 = (state_30276[(2)]);
var state_30276__$1 = state_30276;
var statearr_30284_30391 = state_30276__$1;
(statearr_30284_30391[(2)] = inst_30272);

(statearr_30284_30391[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30277 === (8))){
var inst_30262 = (state_30276[(8)]);
var inst_30267 = (state_30276[(2)]);
var state_30276__$1 = (function (){var statearr_30285 = state_30276;
(statearr_30285[(9)] = inst_30267);

return statearr_30285;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30276__$1,(9),results,inst_30262);
} else {
if((state_val_30277 === (9))){
var inst_30269 = (state_30276[(2)]);
var state_30276__$1 = (function (){var statearr_30286 = state_30276;
(statearr_30286[(10)] = inst_30269);

return statearr_30286;
})();
var statearr_30287_30392 = state_30276__$1;
(statearr_30287_30392[(2)] = null);

(statearr_30287_30392[(1)] = (2));


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
});})(c__30037__auto___30386,jobs,results,process,async))
;
return ((function (switch__29949__auto__,c__30037__auto___30386,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29950__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29950__auto____0 = (function (){
var statearr_30288 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30288[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29950__auto__);

(statearr_30288[(1)] = (1));

return statearr_30288;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29950__auto____1 = (function (state_30276){
while(true){
var ret_value__29951__auto__ = (function (){try{while(true){
var result__29952__auto__ = switch__29949__auto__.call(null,state_30276);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29952__auto__;
}
break;
}
}catch (e30289){if((e30289 instanceof Object)){
var ex__29953__auto__ = e30289;
var statearr_30290_30393 = state_30276;
(statearr_30290_30393[(5)] = ex__29953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30276);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30289;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30394 = state_30276;
state_30276 = G__30394;
continue;
} else {
return ret_value__29951__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29950__auto__ = function(state_30276){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29950__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29950__auto____1.call(this,state_30276);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__29950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29950__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29950__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29950__auto__;
})()
;})(switch__29949__auto__,c__30037__auto___30386,jobs,results,process,async))
})();
var state__30039__auto__ = (function (){var statearr_30291 = f__30038__auto__.call(null);
(statearr_30291[(6)] = c__30037__auto___30386);

return statearr_30291;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30039__auto__);
});})(c__30037__auto___30386,jobs,results,process,async))
);


var c__30037__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30037__auto__,jobs,results,process,async){
return (function (){
var f__30038__auto__ = (function (){var switch__29949__auto__ = ((function (c__30037__auto__,jobs,results,process,async){
return (function (state_30329){
var state_val_30330 = (state_30329[(1)]);
if((state_val_30330 === (7))){
var inst_30325 = (state_30329[(2)]);
var state_30329__$1 = state_30329;
var statearr_30331_30395 = state_30329__$1;
(statearr_30331_30395[(2)] = inst_30325);

(statearr_30331_30395[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30330 === (20))){
var state_30329__$1 = state_30329;
var statearr_30332_30396 = state_30329__$1;
(statearr_30332_30396[(2)] = null);

(statearr_30332_30396[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30330 === (1))){
var state_30329__$1 = state_30329;
var statearr_30333_30397 = state_30329__$1;
(statearr_30333_30397[(2)] = null);

(statearr_30333_30397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30330 === (4))){
var inst_30294 = (state_30329[(7)]);
var inst_30294__$1 = (state_30329[(2)]);
var inst_30295 = (inst_30294__$1 == null);
var state_30329__$1 = (function (){var statearr_30334 = state_30329;
(statearr_30334[(7)] = inst_30294__$1);

return statearr_30334;
})();
if(cljs.core.truth_(inst_30295)){
var statearr_30335_30398 = state_30329__$1;
(statearr_30335_30398[(1)] = (5));

} else {
var statearr_30336_30399 = state_30329__$1;
(statearr_30336_30399[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30330 === (15))){
var inst_30307 = (state_30329[(8)]);
var state_30329__$1 = state_30329;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30329__$1,(18),to,inst_30307);
} else {
if((state_val_30330 === (21))){
var inst_30320 = (state_30329[(2)]);
var state_30329__$1 = state_30329;
var statearr_30337_30400 = state_30329__$1;
(statearr_30337_30400[(2)] = inst_30320);

(statearr_30337_30400[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30330 === (13))){
var inst_30322 = (state_30329[(2)]);
var state_30329__$1 = (function (){var statearr_30338 = state_30329;
(statearr_30338[(9)] = inst_30322);

return statearr_30338;
})();
var statearr_30339_30401 = state_30329__$1;
(statearr_30339_30401[(2)] = null);

(statearr_30339_30401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30330 === (6))){
var inst_30294 = (state_30329[(7)]);
var state_30329__$1 = state_30329;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30329__$1,(11),inst_30294);
} else {
if((state_val_30330 === (17))){
var inst_30315 = (state_30329[(2)]);
var state_30329__$1 = state_30329;
if(cljs.core.truth_(inst_30315)){
var statearr_30340_30402 = state_30329__$1;
(statearr_30340_30402[(1)] = (19));

} else {
var statearr_30341_30403 = state_30329__$1;
(statearr_30341_30403[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30330 === (3))){
var inst_30327 = (state_30329[(2)]);
var state_30329__$1 = state_30329;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30329__$1,inst_30327);
} else {
if((state_val_30330 === (12))){
var inst_30304 = (state_30329[(10)]);
var state_30329__$1 = state_30329;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30329__$1,(14),inst_30304);
} else {
if((state_val_30330 === (2))){
var state_30329__$1 = state_30329;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30329__$1,(4),results);
} else {
if((state_val_30330 === (19))){
var state_30329__$1 = state_30329;
var statearr_30342_30404 = state_30329__$1;
(statearr_30342_30404[(2)] = null);

(statearr_30342_30404[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30330 === (11))){
var inst_30304 = (state_30329[(2)]);
var state_30329__$1 = (function (){var statearr_30343 = state_30329;
(statearr_30343[(10)] = inst_30304);

return statearr_30343;
})();
var statearr_30344_30405 = state_30329__$1;
(statearr_30344_30405[(2)] = null);

(statearr_30344_30405[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30330 === (9))){
var state_30329__$1 = state_30329;
var statearr_30345_30406 = state_30329__$1;
(statearr_30345_30406[(2)] = null);

(statearr_30345_30406[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30330 === (5))){
var state_30329__$1 = state_30329;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30346_30407 = state_30329__$1;
(statearr_30346_30407[(1)] = (8));

} else {
var statearr_30347_30408 = state_30329__$1;
(statearr_30347_30408[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30330 === (14))){
var inst_30309 = (state_30329[(11)]);
var inst_30307 = (state_30329[(8)]);
var inst_30307__$1 = (state_30329[(2)]);
var inst_30308 = (inst_30307__$1 == null);
var inst_30309__$1 = cljs.core.not.call(null,inst_30308);
var state_30329__$1 = (function (){var statearr_30348 = state_30329;
(statearr_30348[(11)] = inst_30309__$1);

(statearr_30348[(8)] = inst_30307__$1);

return statearr_30348;
})();
if(inst_30309__$1){
var statearr_30349_30409 = state_30329__$1;
(statearr_30349_30409[(1)] = (15));

} else {
var statearr_30350_30410 = state_30329__$1;
(statearr_30350_30410[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30330 === (16))){
var inst_30309 = (state_30329[(11)]);
var state_30329__$1 = state_30329;
var statearr_30351_30411 = state_30329__$1;
(statearr_30351_30411[(2)] = inst_30309);

(statearr_30351_30411[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30330 === (10))){
var inst_30301 = (state_30329[(2)]);
var state_30329__$1 = state_30329;
var statearr_30352_30412 = state_30329__$1;
(statearr_30352_30412[(2)] = inst_30301);

(statearr_30352_30412[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30330 === (18))){
var inst_30312 = (state_30329[(2)]);
var state_30329__$1 = state_30329;
var statearr_30353_30413 = state_30329__$1;
(statearr_30353_30413[(2)] = inst_30312);

(statearr_30353_30413[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30330 === (8))){
var inst_30298 = cljs.core.async.close_BANG_.call(null,to);
var state_30329__$1 = state_30329;
var statearr_30354_30414 = state_30329__$1;
(statearr_30354_30414[(2)] = inst_30298);

(statearr_30354_30414[(1)] = (10));


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
});})(c__30037__auto__,jobs,results,process,async))
;
return ((function (switch__29949__auto__,c__30037__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29950__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29950__auto____0 = (function (){
var statearr_30355 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30355[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29950__auto__);

(statearr_30355[(1)] = (1));

return statearr_30355;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29950__auto____1 = (function (state_30329){
while(true){
var ret_value__29951__auto__ = (function (){try{while(true){
var result__29952__auto__ = switch__29949__auto__.call(null,state_30329);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29952__auto__;
}
break;
}
}catch (e30356){if((e30356 instanceof Object)){
var ex__29953__auto__ = e30356;
var statearr_30357_30415 = state_30329;
(statearr_30357_30415[(5)] = ex__29953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30329);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30356;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30416 = state_30329;
state_30329 = G__30416;
continue;
} else {
return ret_value__29951__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29950__auto__ = function(state_30329){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29950__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29950__auto____1.call(this,state_30329);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__29950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29950__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29950__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29950__auto__;
})()
;})(switch__29949__auto__,c__30037__auto__,jobs,results,process,async))
})();
var state__30039__auto__ = (function (){var statearr_30358 = f__30038__auto__.call(null);
(statearr_30358[(6)] = c__30037__auto__);

return statearr_30358;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30039__auto__);
});})(c__30037__auto__,jobs,results,process,async))
);

return c__30037__auto__;
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
var G__30418 = arguments.length;
switch (G__30418) {
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
var G__30421 = arguments.length;
switch (G__30421) {
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
var G__30424 = arguments.length;
switch (G__30424) {
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
var c__30037__auto___30473 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30037__auto___30473,tc,fc){
return (function (){
var f__30038__auto__ = (function (){var switch__29949__auto__ = ((function (c__30037__auto___30473,tc,fc){
return (function (state_30450){
var state_val_30451 = (state_30450[(1)]);
if((state_val_30451 === (7))){
var inst_30446 = (state_30450[(2)]);
var state_30450__$1 = state_30450;
var statearr_30452_30474 = state_30450__$1;
(statearr_30452_30474[(2)] = inst_30446);

(statearr_30452_30474[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30451 === (1))){
var state_30450__$1 = state_30450;
var statearr_30453_30475 = state_30450__$1;
(statearr_30453_30475[(2)] = null);

(statearr_30453_30475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30451 === (4))){
var inst_30427 = (state_30450[(7)]);
var inst_30427__$1 = (state_30450[(2)]);
var inst_30428 = (inst_30427__$1 == null);
var state_30450__$1 = (function (){var statearr_30454 = state_30450;
(statearr_30454[(7)] = inst_30427__$1);

return statearr_30454;
})();
if(cljs.core.truth_(inst_30428)){
var statearr_30455_30476 = state_30450__$1;
(statearr_30455_30476[(1)] = (5));

} else {
var statearr_30456_30477 = state_30450__$1;
(statearr_30456_30477[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30451 === (13))){
var state_30450__$1 = state_30450;
var statearr_30457_30478 = state_30450__$1;
(statearr_30457_30478[(2)] = null);

(statearr_30457_30478[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30451 === (6))){
var inst_30427 = (state_30450[(7)]);
var inst_30433 = p.call(null,inst_30427);
var state_30450__$1 = state_30450;
if(cljs.core.truth_(inst_30433)){
var statearr_30458_30479 = state_30450__$1;
(statearr_30458_30479[(1)] = (9));

} else {
var statearr_30459_30480 = state_30450__$1;
(statearr_30459_30480[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30451 === (3))){
var inst_30448 = (state_30450[(2)]);
var state_30450__$1 = state_30450;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30450__$1,inst_30448);
} else {
if((state_val_30451 === (12))){
var state_30450__$1 = state_30450;
var statearr_30460_30481 = state_30450__$1;
(statearr_30460_30481[(2)] = null);

(statearr_30460_30481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30451 === (2))){
var state_30450__$1 = state_30450;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30450__$1,(4),ch);
} else {
if((state_val_30451 === (11))){
var inst_30427 = (state_30450[(7)]);
var inst_30437 = (state_30450[(2)]);
var state_30450__$1 = state_30450;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30450__$1,(8),inst_30437,inst_30427);
} else {
if((state_val_30451 === (9))){
var state_30450__$1 = state_30450;
var statearr_30461_30482 = state_30450__$1;
(statearr_30461_30482[(2)] = tc);

(statearr_30461_30482[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30451 === (5))){
var inst_30430 = cljs.core.async.close_BANG_.call(null,tc);
var inst_30431 = cljs.core.async.close_BANG_.call(null,fc);
var state_30450__$1 = (function (){var statearr_30462 = state_30450;
(statearr_30462[(8)] = inst_30430);

return statearr_30462;
})();
var statearr_30463_30483 = state_30450__$1;
(statearr_30463_30483[(2)] = inst_30431);

(statearr_30463_30483[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30451 === (14))){
var inst_30444 = (state_30450[(2)]);
var state_30450__$1 = state_30450;
var statearr_30464_30484 = state_30450__$1;
(statearr_30464_30484[(2)] = inst_30444);

(statearr_30464_30484[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30451 === (10))){
var state_30450__$1 = state_30450;
var statearr_30465_30485 = state_30450__$1;
(statearr_30465_30485[(2)] = fc);

(statearr_30465_30485[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30451 === (8))){
var inst_30439 = (state_30450[(2)]);
var state_30450__$1 = state_30450;
if(cljs.core.truth_(inst_30439)){
var statearr_30466_30486 = state_30450__$1;
(statearr_30466_30486[(1)] = (12));

} else {
var statearr_30467_30487 = state_30450__$1;
(statearr_30467_30487[(1)] = (13));

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
});})(c__30037__auto___30473,tc,fc))
;
return ((function (switch__29949__auto__,c__30037__auto___30473,tc,fc){
return (function() {
var cljs$core$async$state_machine__29950__auto__ = null;
var cljs$core$async$state_machine__29950__auto____0 = (function (){
var statearr_30468 = [null,null,null,null,null,null,null,null,null];
(statearr_30468[(0)] = cljs$core$async$state_machine__29950__auto__);

(statearr_30468[(1)] = (1));

return statearr_30468;
});
var cljs$core$async$state_machine__29950__auto____1 = (function (state_30450){
while(true){
var ret_value__29951__auto__ = (function (){try{while(true){
var result__29952__auto__ = switch__29949__auto__.call(null,state_30450);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29952__auto__;
}
break;
}
}catch (e30469){if((e30469 instanceof Object)){
var ex__29953__auto__ = e30469;
var statearr_30470_30488 = state_30450;
(statearr_30470_30488[(5)] = ex__29953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30450);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30469;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30489 = state_30450;
state_30450 = G__30489;
continue;
} else {
return ret_value__29951__auto__;
}
break;
}
});
cljs$core$async$state_machine__29950__auto__ = function(state_30450){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29950__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29950__auto____1.call(this,state_30450);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29950__auto____0;
cljs$core$async$state_machine__29950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29950__auto____1;
return cljs$core$async$state_machine__29950__auto__;
})()
;})(switch__29949__auto__,c__30037__auto___30473,tc,fc))
})();
var state__30039__auto__ = (function (){var statearr_30471 = f__30038__auto__.call(null);
(statearr_30471[(6)] = c__30037__auto___30473);

return statearr_30471;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30039__auto__);
});})(c__30037__auto___30473,tc,fc))
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
var c__30037__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30037__auto__){
return (function (){
var f__30038__auto__ = (function (){var switch__29949__auto__ = ((function (c__30037__auto__){
return (function (state_30510){
var state_val_30511 = (state_30510[(1)]);
if((state_val_30511 === (7))){
var inst_30506 = (state_30510[(2)]);
var state_30510__$1 = state_30510;
var statearr_30512_30530 = state_30510__$1;
(statearr_30512_30530[(2)] = inst_30506);

(statearr_30512_30530[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30511 === (1))){
var inst_30490 = init;
var state_30510__$1 = (function (){var statearr_30513 = state_30510;
(statearr_30513[(7)] = inst_30490);

return statearr_30513;
})();
var statearr_30514_30531 = state_30510__$1;
(statearr_30514_30531[(2)] = null);

(statearr_30514_30531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30511 === (4))){
var inst_30493 = (state_30510[(8)]);
var inst_30493__$1 = (state_30510[(2)]);
var inst_30494 = (inst_30493__$1 == null);
var state_30510__$1 = (function (){var statearr_30515 = state_30510;
(statearr_30515[(8)] = inst_30493__$1);

return statearr_30515;
})();
if(cljs.core.truth_(inst_30494)){
var statearr_30516_30532 = state_30510__$1;
(statearr_30516_30532[(1)] = (5));

} else {
var statearr_30517_30533 = state_30510__$1;
(statearr_30517_30533[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30511 === (6))){
var inst_30497 = (state_30510[(9)]);
var inst_30490 = (state_30510[(7)]);
var inst_30493 = (state_30510[(8)]);
var inst_30497__$1 = f.call(null,inst_30490,inst_30493);
var inst_30498 = cljs.core.reduced_QMARK_.call(null,inst_30497__$1);
var state_30510__$1 = (function (){var statearr_30518 = state_30510;
(statearr_30518[(9)] = inst_30497__$1);

return statearr_30518;
})();
if(inst_30498){
var statearr_30519_30534 = state_30510__$1;
(statearr_30519_30534[(1)] = (8));

} else {
var statearr_30520_30535 = state_30510__$1;
(statearr_30520_30535[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30511 === (3))){
var inst_30508 = (state_30510[(2)]);
var state_30510__$1 = state_30510;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30510__$1,inst_30508);
} else {
if((state_val_30511 === (2))){
var state_30510__$1 = state_30510;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30510__$1,(4),ch);
} else {
if((state_val_30511 === (9))){
var inst_30497 = (state_30510[(9)]);
var inst_30490 = inst_30497;
var state_30510__$1 = (function (){var statearr_30521 = state_30510;
(statearr_30521[(7)] = inst_30490);

return statearr_30521;
})();
var statearr_30522_30536 = state_30510__$1;
(statearr_30522_30536[(2)] = null);

(statearr_30522_30536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30511 === (5))){
var inst_30490 = (state_30510[(7)]);
var state_30510__$1 = state_30510;
var statearr_30523_30537 = state_30510__$1;
(statearr_30523_30537[(2)] = inst_30490);

(statearr_30523_30537[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30511 === (10))){
var inst_30504 = (state_30510[(2)]);
var state_30510__$1 = state_30510;
var statearr_30524_30538 = state_30510__$1;
(statearr_30524_30538[(2)] = inst_30504);

(statearr_30524_30538[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30511 === (8))){
var inst_30497 = (state_30510[(9)]);
var inst_30500 = cljs.core.deref.call(null,inst_30497);
var state_30510__$1 = state_30510;
var statearr_30525_30539 = state_30510__$1;
(statearr_30525_30539[(2)] = inst_30500);

(statearr_30525_30539[(1)] = (10));


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
});})(c__30037__auto__))
;
return ((function (switch__29949__auto__,c__30037__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__29950__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29950__auto____0 = (function (){
var statearr_30526 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30526[(0)] = cljs$core$async$reduce_$_state_machine__29950__auto__);

(statearr_30526[(1)] = (1));

return statearr_30526;
});
var cljs$core$async$reduce_$_state_machine__29950__auto____1 = (function (state_30510){
while(true){
var ret_value__29951__auto__ = (function (){try{while(true){
var result__29952__auto__ = switch__29949__auto__.call(null,state_30510);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29952__auto__;
}
break;
}
}catch (e30527){if((e30527 instanceof Object)){
var ex__29953__auto__ = e30527;
var statearr_30528_30540 = state_30510;
(statearr_30528_30540[(5)] = ex__29953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30510);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30527;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30541 = state_30510;
state_30510 = G__30541;
continue;
} else {
return ret_value__29951__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29950__auto__ = function(state_30510){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29950__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29950__auto____1.call(this,state_30510);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__29950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29950__auto____0;
cljs$core$async$reduce_$_state_machine__29950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29950__auto____1;
return cljs$core$async$reduce_$_state_machine__29950__auto__;
})()
;})(switch__29949__auto__,c__30037__auto__))
})();
var state__30039__auto__ = (function (){var statearr_30529 = f__30038__auto__.call(null);
(statearr_30529[(6)] = c__30037__auto__);

return statearr_30529;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30039__auto__);
});})(c__30037__auto__))
);

return c__30037__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__30037__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30037__auto__,f__$1){
return (function (){
var f__30038__auto__ = (function (){var switch__29949__auto__ = ((function (c__30037__auto__,f__$1){
return (function (state_30547){
var state_val_30548 = (state_30547[(1)]);
if((state_val_30548 === (1))){
var inst_30542 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_30547__$1 = state_30547;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30547__$1,(2),inst_30542);
} else {
if((state_val_30548 === (2))){
var inst_30544 = (state_30547[(2)]);
var inst_30545 = f__$1.call(null,inst_30544);
var state_30547__$1 = state_30547;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30547__$1,inst_30545);
} else {
return null;
}
}
});})(c__30037__auto__,f__$1))
;
return ((function (switch__29949__auto__,c__30037__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__29950__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29950__auto____0 = (function (){
var statearr_30549 = [null,null,null,null,null,null,null];
(statearr_30549[(0)] = cljs$core$async$transduce_$_state_machine__29950__auto__);

(statearr_30549[(1)] = (1));

return statearr_30549;
});
var cljs$core$async$transduce_$_state_machine__29950__auto____1 = (function (state_30547){
while(true){
var ret_value__29951__auto__ = (function (){try{while(true){
var result__29952__auto__ = switch__29949__auto__.call(null,state_30547);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29952__auto__;
}
break;
}
}catch (e30550){if((e30550 instanceof Object)){
var ex__29953__auto__ = e30550;
var statearr_30551_30553 = state_30547;
(statearr_30551_30553[(5)] = ex__29953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30547);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30550;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30554 = state_30547;
state_30547 = G__30554;
continue;
} else {
return ret_value__29951__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29950__auto__ = function(state_30547){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29950__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29950__auto____1.call(this,state_30547);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__29950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29950__auto____0;
cljs$core$async$transduce_$_state_machine__29950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29950__auto____1;
return cljs$core$async$transduce_$_state_machine__29950__auto__;
})()
;})(switch__29949__auto__,c__30037__auto__,f__$1))
})();
var state__30039__auto__ = (function (){var statearr_30552 = f__30038__auto__.call(null);
(statearr_30552[(6)] = c__30037__auto__);

return statearr_30552;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30039__auto__);
});})(c__30037__auto__,f__$1))
);

return c__30037__auto__;
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
var G__30556 = arguments.length;
switch (G__30556) {
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
var c__30037__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30037__auto__){
return (function (){
var f__30038__auto__ = (function (){var switch__29949__auto__ = ((function (c__30037__auto__){
return (function (state_30581){
var state_val_30582 = (state_30581[(1)]);
if((state_val_30582 === (7))){
var inst_30563 = (state_30581[(2)]);
var state_30581__$1 = state_30581;
var statearr_30583_30604 = state_30581__$1;
(statearr_30583_30604[(2)] = inst_30563);

(statearr_30583_30604[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30582 === (1))){
var inst_30557 = cljs.core.seq.call(null,coll);
var inst_30558 = inst_30557;
var state_30581__$1 = (function (){var statearr_30584 = state_30581;
(statearr_30584[(7)] = inst_30558);

return statearr_30584;
})();
var statearr_30585_30605 = state_30581__$1;
(statearr_30585_30605[(2)] = null);

(statearr_30585_30605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30582 === (4))){
var inst_30558 = (state_30581[(7)]);
var inst_30561 = cljs.core.first.call(null,inst_30558);
var state_30581__$1 = state_30581;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30581__$1,(7),ch,inst_30561);
} else {
if((state_val_30582 === (13))){
var inst_30575 = (state_30581[(2)]);
var state_30581__$1 = state_30581;
var statearr_30586_30606 = state_30581__$1;
(statearr_30586_30606[(2)] = inst_30575);

(statearr_30586_30606[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30582 === (6))){
var inst_30566 = (state_30581[(2)]);
var state_30581__$1 = state_30581;
if(cljs.core.truth_(inst_30566)){
var statearr_30587_30607 = state_30581__$1;
(statearr_30587_30607[(1)] = (8));

} else {
var statearr_30588_30608 = state_30581__$1;
(statearr_30588_30608[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30582 === (3))){
var inst_30579 = (state_30581[(2)]);
var state_30581__$1 = state_30581;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30581__$1,inst_30579);
} else {
if((state_val_30582 === (12))){
var state_30581__$1 = state_30581;
var statearr_30589_30609 = state_30581__$1;
(statearr_30589_30609[(2)] = null);

(statearr_30589_30609[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30582 === (2))){
var inst_30558 = (state_30581[(7)]);
var state_30581__$1 = state_30581;
if(cljs.core.truth_(inst_30558)){
var statearr_30590_30610 = state_30581__$1;
(statearr_30590_30610[(1)] = (4));

} else {
var statearr_30591_30611 = state_30581__$1;
(statearr_30591_30611[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30582 === (11))){
var inst_30572 = cljs.core.async.close_BANG_.call(null,ch);
var state_30581__$1 = state_30581;
var statearr_30592_30612 = state_30581__$1;
(statearr_30592_30612[(2)] = inst_30572);

(statearr_30592_30612[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30582 === (9))){
var state_30581__$1 = state_30581;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30593_30613 = state_30581__$1;
(statearr_30593_30613[(1)] = (11));

} else {
var statearr_30594_30614 = state_30581__$1;
(statearr_30594_30614[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30582 === (5))){
var inst_30558 = (state_30581[(7)]);
var state_30581__$1 = state_30581;
var statearr_30595_30615 = state_30581__$1;
(statearr_30595_30615[(2)] = inst_30558);

(statearr_30595_30615[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30582 === (10))){
var inst_30577 = (state_30581[(2)]);
var state_30581__$1 = state_30581;
var statearr_30596_30616 = state_30581__$1;
(statearr_30596_30616[(2)] = inst_30577);

(statearr_30596_30616[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30582 === (8))){
var inst_30558 = (state_30581[(7)]);
var inst_30568 = cljs.core.next.call(null,inst_30558);
var inst_30558__$1 = inst_30568;
var state_30581__$1 = (function (){var statearr_30597 = state_30581;
(statearr_30597[(7)] = inst_30558__$1);

return statearr_30597;
})();
var statearr_30598_30617 = state_30581__$1;
(statearr_30598_30617[(2)] = null);

(statearr_30598_30617[(1)] = (2));


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
});})(c__30037__auto__))
;
return ((function (switch__29949__auto__,c__30037__auto__){
return (function() {
var cljs$core$async$state_machine__29950__auto__ = null;
var cljs$core$async$state_machine__29950__auto____0 = (function (){
var statearr_30599 = [null,null,null,null,null,null,null,null];
(statearr_30599[(0)] = cljs$core$async$state_machine__29950__auto__);

(statearr_30599[(1)] = (1));

return statearr_30599;
});
var cljs$core$async$state_machine__29950__auto____1 = (function (state_30581){
while(true){
var ret_value__29951__auto__ = (function (){try{while(true){
var result__29952__auto__ = switch__29949__auto__.call(null,state_30581);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29952__auto__;
}
break;
}
}catch (e30600){if((e30600 instanceof Object)){
var ex__29953__auto__ = e30600;
var statearr_30601_30618 = state_30581;
(statearr_30601_30618[(5)] = ex__29953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30581);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30600;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30619 = state_30581;
state_30581 = G__30619;
continue;
} else {
return ret_value__29951__auto__;
}
break;
}
});
cljs$core$async$state_machine__29950__auto__ = function(state_30581){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29950__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29950__auto____1.call(this,state_30581);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29950__auto____0;
cljs$core$async$state_machine__29950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29950__auto____1;
return cljs$core$async$state_machine__29950__auto__;
})()
;})(switch__29949__auto__,c__30037__auto__))
})();
var state__30039__auto__ = (function (){var statearr_30602 = f__30038__auto__.call(null);
(statearr_30602[(6)] = c__30037__auto__);

return statearr_30602;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30039__auto__);
});})(c__30037__auto__))
);

return c__30037__auto__;
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
var x__27625__auto__ = (((_ == null))?null:_);
var m__27626__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__27625__auto__)]);
if(!((m__27626__auto__ == null))){
return m__27626__auto__.call(null,_);
} else {
var m__27626__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__27626__auto____$1 == null))){
return m__27626__auto____$1.call(null,_);
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
var x__27625__auto__ = (((m == null))?null:m);
var m__27626__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__27625__auto__)]);
if(!((m__27626__auto__ == null))){
return m__27626__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__27626__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__27626__auto____$1 == null))){
return m__27626__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__27625__auto__ = (((m == null))?null:m);
var m__27626__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__27625__auto__)]);
if(!((m__27626__auto__ == null))){
return m__27626__auto__.call(null,m,ch);
} else {
var m__27626__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__27626__auto____$1 == null))){
return m__27626__auto____$1.call(null,m,ch);
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
var x__27625__auto__ = (((m == null))?null:m);
var m__27626__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__27625__auto__)]);
if(!((m__27626__auto__ == null))){
return m__27626__auto__.call(null,m);
} else {
var m__27626__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__27626__auto____$1 == null))){
return m__27626__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async30620 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30620 = (function (ch,cs,meta30621){
this.ch = ch;
this.cs = cs;
this.meta30621 = meta30621;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30620.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_30622,meta30621__$1){
var self__ = this;
var _30622__$1 = this;
return (new cljs.core.async.t_cljs$core$async30620(self__.ch,self__.cs,meta30621__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async30620.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_30622){
var self__ = this;
var _30622__$1 = this;
return self__.meta30621;
});})(cs))
;

cljs.core.async.t_cljs$core$async30620.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30620.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async30620.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30620.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30620.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30620.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30620.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30621","meta30621",-562180078,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async30620.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30620.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30620";

cljs.core.async.t_cljs$core$async30620.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__27567__auto__,writer__27568__auto__,opt__27569__auto__){
return cljs.core._write.call(null,writer__27568__auto__,"cljs.core.async/t_cljs$core$async30620");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async30620 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async30620(ch__$1,cs__$1,meta30621){
return (new cljs.core.async.t_cljs$core$async30620(ch__$1,cs__$1,meta30621));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async30620(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__30037__auto___30842 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30037__auto___30842,cs,m,dchan,dctr,done){
return (function (){
var f__30038__auto__ = (function (){var switch__29949__auto__ = ((function (c__30037__auto___30842,cs,m,dchan,dctr,done){
return (function (state_30757){
var state_val_30758 = (state_30757[(1)]);
if((state_val_30758 === (7))){
var inst_30753 = (state_30757[(2)]);
var state_30757__$1 = state_30757;
var statearr_30759_30843 = state_30757__$1;
(statearr_30759_30843[(2)] = inst_30753);

(statearr_30759_30843[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30758 === (20))){
var inst_30656 = (state_30757[(7)]);
var inst_30668 = cljs.core.first.call(null,inst_30656);
var inst_30669 = cljs.core.nth.call(null,inst_30668,(0),null);
var inst_30670 = cljs.core.nth.call(null,inst_30668,(1),null);
var state_30757__$1 = (function (){var statearr_30760 = state_30757;
(statearr_30760[(8)] = inst_30669);

return statearr_30760;
})();
if(cljs.core.truth_(inst_30670)){
var statearr_30761_30844 = state_30757__$1;
(statearr_30761_30844[(1)] = (22));

} else {
var statearr_30762_30845 = state_30757__$1;
(statearr_30762_30845[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30758 === (27))){
var inst_30698 = (state_30757[(9)]);
var inst_30700 = (state_30757[(10)]);
var inst_30625 = (state_30757[(11)]);
var inst_30705 = (state_30757[(12)]);
var inst_30705__$1 = cljs.core._nth.call(null,inst_30698,inst_30700);
var inst_30706 = cljs.core.async.put_BANG_.call(null,inst_30705__$1,inst_30625,done);
var state_30757__$1 = (function (){var statearr_30763 = state_30757;
(statearr_30763[(12)] = inst_30705__$1);

return statearr_30763;
})();
if(cljs.core.truth_(inst_30706)){
var statearr_30764_30846 = state_30757__$1;
(statearr_30764_30846[(1)] = (30));

} else {
var statearr_30765_30847 = state_30757__$1;
(statearr_30765_30847[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30758 === (1))){
var state_30757__$1 = state_30757;
var statearr_30766_30848 = state_30757__$1;
(statearr_30766_30848[(2)] = null);

(statearr_30766_30848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30758 === (24))){
var inst_30656 = (state_30757[(7)]);
var inst_30675 = (state_30757[(2)]);
var inst_30676 = cljs.core.next.call(null,inst_30656);
var inst_30634 = inst_30676;
var inst_30635 = null;
var inst_30636 = (0);
var inst_30637 = (0);
var state_30757__$1 = (function (){var statearr_30767 = state_30757;
(statearr_30767[(13)] = inst_30637);

(statearr_30767[(14)] = inst_30636);

(statearr_30767[(15)] = inst_30635);

(statearr_30767[(16)] = inst_30675);

(statearr_30767[(17)] = inst_30634);

return statearr_30767;
})();
var statearr_30768_30849 = state_30757__$1;
(statearr_30768_30849[(2)] = null);

(statearr_30768_30849[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30758 === (39))){
var state_30757__$1 = state_30757;
var statearr_30772_30850 = state_30757__$1;
(statearr_30772_30850[(2)] = null);

(statearr_30772_30850[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30758 === (4))){
var inst_30625 = (state_30757[(11)]);
var inst_30625__$1 = (state_30757[(2)]);
var inst_30626 = (inst_30625__$1 == null);
var state_30757__$1 = (function (){var statearr_30773 = state_30757;
(statearr_30773[(11)] = inst_30625__$1);

return statearr_30773;
})();
if(cljs.core.truth_(inst_30626)){
var statearr_30774_30851 = state_30757__$1;
(statearr_30774_30851[(1)] = (5));

} else {
var statearr_30775_30852 = state_30757__$1;
(statearr_30775_30852[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30758 === (15))){
var inst_30637 = (state_30757[(13)]);
var inst_30636 = (state_30757[(14)]);
var inst_30635 = (state_30757[(15)]);
var inst_30634 = (state_30757[(17)]);
var inst_30652 = (state_30757[(2)]);
var inst_30653 = (inst_30637 + (1));
var tmp30769 = inst_30636;
var tmp30770 = inst_30635;
var tmp30771 = inst_30634;
var inst_30634__$1 = tmp30771;
var inst_30635__$1 = tmp30770;
var inst_30636__$1 = tmp30769;
var inst_30637__$1 = inst_30653;
var state_30757__$1 = (function (){var statearr_30776 = state_30757;
(statearr_30776[(13)] = inst_30637__$1);

(statearr_30776[(18)] = inst_30652);

(statearr_30776[(14)] = inst_30636__$1);

(statearr_30776[(15)] = inst_30635__$1);

(statearr_30776[(17)] = inst_30634__$1);

return statearr_30776;
})();
var statearr_30777_30853 = state_30757__$1;
(statearr_30777_30853[(2)] = null);

(statearr_30777_30853[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30758 === (21))){
var inst_30679 = (state_30757[(2)]);
var state_30757__$1 = state_30757;
var statearr_30781_30854 = state_30757__$1;
(statearr_30781_30854[(2)] = inst_30679);

(statearr_30781_30854[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30758 === (31))){
var inst_30705 = (state_30757[(12)]);
var inst_30709 = done.call(null,null);
var inst_30710 = cljs.core.async.untap_STAR_.call(null,m,inst_30705);
var state_30757__$1 = (function (){var statearr_30782 = state_30757;
(statearr_30782[(19)] = inst_30709);

return statearr_30782;
})();
var statearr_30783_30855 = state_30757__$1;
(statearr_30783_30855[(2)] = inst_30710);

(statearr_30783_30855[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30758 === (32))){
var inst_30697 = (state_30757[(20)]);
var inst_30698 = (state_30757[(9)]);
var inst_30699 = (state_30757[(21)]);
var inst_30700 = (state_30757[(10)]);
var inst_30712 = (state_30757[(2)]);
var inst_30713 = (inst_30700 + (1));
var tmp30778 = inst_30697;
var tmp30779 = inst_30698;
var tmp30780 = inst_30699;
var inst_30697__$1 = tmp30778;
var inst_30698__$1 = tmp30779;
var inst_30699__$1 = tmp30780;
var inst_30700__$1 = inst_30713;
var state_30757__$1 = (function (){var statearr_30784 = state_30757;
(statearr_30784[(20)] = inst_30697__$1);

(statearr_30784[(9)] = inst_30698__$1);

(statearr_30784[(21)] = inst_30699__$1);

(statearr_30784[(10)] = inst_30700__$1);

(statearr_30784[(22)] = inst_30712);

return statearr_30784;
})();
var statearr_30785_30856 = state_30757__$1;
(statearr_30785_30856[(2)] = null);

(statearr_30785_30856[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30758 === (40))){
var inst_30725 = (state_30757[(23)]);
var inst_30729 = done.call(null,null);
var inst_30730 = cljs.core.async.untap_STAR_.call(null,m,inst_30725);
var state_30757__$1 = (function (){var statearr_30786 = state_30757;
(statearr_30786[(24)] = inst_30729);

return statearr_30786;
})();
var statearr_30787_30857 = state_30757__$1;
(statearr_30787_30857[(2)] = inst_30730);

(statearr_30787_30857[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30758 === (33))){
var inst_30716 = (state_30757[(25)]);
var inst_30718 = cljs.core.chunked_seq_QMARK_.call(null,inst_30716);
var state_30757__$1 = state_30757;
if(inst_30718){
var statearr_30788_30858 = state_30757__$1;
(statearr_30788_30858[(1)] = (36));

} else {
var statearr_30789_30859 = state_30757__$1;
(statearr_30789_30859[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30758 === (13))){
var inst_30646 = (state_30757[(26)]);
var inst_30649 = cljs.core.async.close_BANG_.call(null,inst_30646);
var state_30757__$1 = state_30757;
var statearr_30790_30860 = state_30757__$1;
(statearr_30790_30860[(2)] = inst_30649);

(statearr_30790_30860[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30758 === (22))){
var inst_30669 = (state_30757[(8)]);
var inst_30672 = cljs.core.async.close_BANG_.call(null,inst_30669);
var state_30757__$1 = state_30757;
var statearr_30791_30861 = state_30757__$1;
(statearr_30791_30861[(2)] = inst_30672);

(statearr_30791_30861[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30758 === (36))){
var inst_30716 = (state_30757[(25)]);
var inst_30720 = cljs.core.chunk_first.call(null,inst_30716);
var inst_30721 = cljs.core.chunk_rest.call(null,inst_30716);
var inst_30722 = cljs.core.count.call(null,inst_30720);
var inst_30697 = inst_30721;
var inst_30698 = inst_30720;
var inst_30699 = inst_30722;
var inst_30700 = (0);
var state_30757__$1 = (function (){var statearr_30792 = state_30757;
(statearr_30792[(20)] = inst_30697);

(statearr_30792[(9)] = inst_30698);

(statearr_30792[(21)] = inst_30699);

(statearr_30792[(10)] = inst_30700);

return statearr_30792;
})();
var statearr_30793_30862 = state_30757__$1;
(statearr_30793_30862[(2)] = null);

(statearr_30793_30862[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30758 === (41))){
var inst_30716 = (state_30757[(25)]);
var inst_30732 = (state_30757[(2)]);
var inst_30733 = cljs.core.next.call(null,inst_30716);
var inst_30697 = inst_30733;
var inst_30698 = null;
var inst_30699 = (0);
var inst_30700 = (0);
var state_30757__$1 = (function (){var statearr_30794 = state_30757;
(statearr_30794[(20)] = inst_30697);

(statearr_30794[(9)] = inst_30698);

(statearr_30794[(21)] = inst_30699);

(statearr_30794[(10)] = inst_30700);

(statearr_30794[(27)] = inst_30732);

return statearr_30794;
})();
var statearr_30795_30863 = state_30757__$1;
(statearr_30795_30863[(2)] = null);

(statearr_30795_30863[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30758 === (43))){
var state_30757__$1 = state_30757;
var statearr_30796_30864 = state_30757__$1;
(statearr_30796_30864[(2)] = null);

(statearr_30796_30864[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30758 === (29))){
var inst_30741 = (state_30757[(2)]);
var state_30757__$1 = state_30757;
var statearr_30797_30865 = state_30757__$1;
(statearr_30797_30865[(2)] = inst_30741);

(statearr_30797_30865[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30758 === (44))){
var inst_30750 = (state_30757[(2)]);
var state_30757__$1 = (function (){var statearr_30798 = state_30757;
(statearr_30798[(28)] = inst_30750);

return statearr_30798;
})();
var statearr_30799_30866 = state_30757__$1;
(statearr_30799_30866[(2)] = null);

(statearr_30799_30866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30758 === (6))){
var inst_30689 = (state_30757[(29)]);
var inst_30688 = cljs.core.deref.call(null,cs);
var inst_30689__$1 = cljs.core.keys.call(null,inst_30688);
var inst_30690 = cljs.core.count.call(null,inst_30689__$1);
var inst_30691 = cljs.core.reset_BANG_.call(null,dctr,inst_30690);
var inst_30696 = cljs.core.seq.call(null,inst_30689__$1);
var inst_30697 = inst_30696;
var inst_30698 = null;
var inst_30699 = (0);
var inst_30700 = (0);
var state_30757__$1 = (function (){var statearr_30800 = state_30757;
(statearr_30800[(20)] = inst_30697);

(statearr_30800[(9)] = inst_30698);

(statearr_30800[(21)] = inst_30699);

(statearr_30800[(10)] = inst_30700);

(statearr_30800[(30)] = inst_30691);

(statearr_30800[(29)] = inst_30689__$1);

return statearr_30800;
})();
var statearr_30801_30867 = state_30757__$1;
(statearr_30801_30867[(2)] = null);

(statearr_30801_30867[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30758 === (28))){
var inst_30697 = (state_30757[(20)]);
var inst_30716 = (state_30757[(25)]);
var inst_30716__$1 = cljs.core.seq.call(null,inst_30697);
var state_30757__$1 = (function (){var statearr_30802 = state_30757;
(statearr_30802[(25)] = inst_30716__$1);

return statearr_30802;
})();
if(inst_30716__$1){
var statearr_30803_30868 = state_30757__$1;
(statearr_30803_30868[(1)] = (33));

} else {
var statearr_30804_30869 = state_30757__$1;
(statearr_30804_30869[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30758 === (25))){
var inst_30699 = (state_30757[(21)]);
var inst_30700 = (state_30757[(10)]);
var inst_30702 = (inst_30700 < inst_30699);
var inst_30703 = inst_30702;
var state_30757__$1 = state_30757;
if(cljs.core.truth_(inst_30703)){
var statearr_30805_30870 = state_30757__$1;
(statearr_30805_30870[(1)] = (27));

} else {
var statearr_30806_30871 = state_30757__$1;
(statearr_30806_30871[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30758 === (34))){
var state_30757__$1 = state_30757;
var statearr_30807_30872 = state_30757__$1;
(statearr_30807_30872[(2)] = null);

(statearr_30807_30872[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30758 === (17))){
var state_30757__$1 = state_30757;
var statearr_30808_30873 = state_30757__$1;
(statearr_30808_30873[(2)] = null);

(statearr_30808_30873[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30758 === (3))){
var inst_30755 = (state_30757[(2)]);
var state_30757__$1 = state_30757;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30757__$1,inst_30755);
} else {
if((state_val_30758 === (12))){
var inst_30684 = (state_30757[(2)]);
var state_30757__$1 = state_30757;
var statearr_30809_30874 = state_30757__$1;
(statearr_30809_30874[(2)] = inst_30684);

(statearr_30809_30874[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30758 === (2))){
var state_30757__$1 = state_30757;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30757__$1,(4),ch);
} else {
if((state_val_30758 === (23))){
var state_30757__$1 = state_30757;
var statearr_30810_30875 = state_30757__$1;
(statearr_30810_30875[(2)] = null);

(statearr_30810_30875[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30758 === (35))){
var inst_30739 = (state_30757[(2)]);
var state_30757__$1 = state_30757;
var statearr_30811_30876 = state_30757__$1;
(statearr_30811_30876[(2)] = inst_30739);

(statearr_30811_30876[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30758 === (19))){
var inst_30656 = (state_30757[(7)]);
var inst_30660 = cljs.core.chunk_first.call(null,inst_30656);
var inst_30661 = cljs.core.chunk_rest.call(null,inst_30656);
var inst_30662 = cljs.core.count.call(null,inst_30660);
var inst_30634 = inst_30661;
var inst_30635 = inst_30660;
var inst_30636 = inst_30662;
var inst_30637 = (0);
var state_30757__$1 = (function (){var statearr_30812 = state_30757;
(statearr_30812[(13)] = inst_30637);

(statearr_30812[(14)] = inst_30636);

(statearr_30812[(15)] = inst_30635);

(statearr_30812[(17)] = inst_30634);

return statearr_30812;
})();
var statearr_30813_30877 = state_30757__$1;
(statearr_30813_30877[(2)] = null);

(statearr_30813_30877[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30758 === (11))){
var inst_30656 = (state_30757[(7)]);
var inst_30634 = (state_30757[(17)]);
var inst_30656__$1 = cljs.core.seq.call(null,inst_30634);
var state_30757__$1 = (function (){var statearr_30814 = state_30757;
(statearr_30814[(7)] = inst_30656__$1);

return statearr_30814;
})();
if(inst_30656__$1){
var statearr_30815_30878 = state_30757__$1;
(statearr_30815_30878[(1)] = (16));

} else {
var statearr_30816_30879 = state_30757__$1;
(statearr_30816_30879[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30758 === (9))){
var inst_30686 = (state_30757[(2)]);
var state_30757__$1 = state_30757;
var statearr_30817_30880 = state_30757__$1;
(statearr_30817_30880[(2)] = inst_30686);

(statearr_30817_30880[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30758 === (5))){
var inst_30632 = cljs.core.deref.call(null,cs);
var inst_30633 = cljs.core.seq.call(null,inst_30632);
var inst_30634 = inst_30633;
var inst_30635 = null;
var inst_30636 = (0);
var inst_30637 = (0);
var state_30757__$1 = (function (){var statearr_30818 = state_30757;
(statearr_30818[(13)] = inst_30637);

(statearr_30818[(14)] = inst_30636);

(statearr_30818[(15)] = inst_30635);

(statearr_30818[(17)] = inst_30634);

return statearr_30818;
})();
var statearr_30819_30881 = state_30757__$1;
(statearr_30819_30881[(2)] = null);

(statearr_30819_30881[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30758 === (14))){
var state_30757__$1 = state_30757;
var statearr_30820_30882 = state_30757__$1;
(statearr_30820_30882[(2)] = null);

(statearr_30820_30882[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30758 === (45))){
var inst_30747 = (state_30757[(2)]);
var state_30757__$1 = state_30757;
var statearr_30821_30883 = state_30757__$1;
(statearr_30821_30883[(2)] = inst_30747);

(statearr_30821_30883[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30758 === (26))){
var inst_30689 = (state_30757[(29)]);
var inst_30743 = (state_30757[(2)]);
var inst_30744 = cljs.core.seq.call(null,inst_30689);
var state_30757__$1 = (function (){var statearr_30822 = state_30757;
(statearr_30822[(31)] = inst_30743);

return statearr_30822;
})();
if(inst_30744){
var statearr_30823_30884 = state_30757__$1;
(statearr_30823_30884[(1)] = (42));

} else {
var statearr_30824_30885 = state_30757__$1;
(statearr_30824_30885[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30758 === (16))){
var inst_30656 = (state_30757[(7)]);
var inst_30658 = cljs.core.chunked_seq_QMARK_.call(null,inst_30656);
var state_30757__$1 = state_30757;
if(inst_30658){
var statearr_30825_30886 = state_30757__$1;
(statearr_30825_30886[(1)] = (19));

} else {
var statearr_30826_30887 = state_30757__$1;
(statearr_30826_30887[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30758 === (38))){
var inst_30736 = (state_30757[(2)]);
var state_30757__$1 = state_30757;
var statearr_30827_30888 = state_30757__$1;
(statearr_30827_30888[(2)] = inst_30736);

(statearr_30827_30888[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30758 === (30))){
var state_30757__$1 = state_30757;
var statearr_30828_30889 = state_30757__$1;
(statearr_30828_30889[(2)] = null);

(statearr_30828_30889[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30758 === (10))){
var inst_30637 = (state_30757[(13)]);
var inst_30635 = (state_30757[(15)]);
var inst_30645 = cljs.core._nth.call(null,inst_30635,inst_30637);
var inst_30646 = cljs.core.nth.call(null,inst_30645,(0),null);
var inst_30647 = cljs.core.nth.call(null,inst_30645,(1),null);
var state_30757__$1 = (function (){var statearr_30829 = state_30757;
(statearr_30829[(26)] = inst_30646);

return statearr_30829;
})();
if(cljs.core.truth_(inst_30647)){
var statearr_30830_30890 = state_30757__$1;
(statearr_30830_30890[(1)] = (13));

} else {
var statearr_30831_30891 = state_30757__$1;
(statearr_30831_30891[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30758 === (18))){
var inst_30682 = (state_30757[(2)]);
var state_30757__$1 = state_30757;
var statearr_30832_30892 = state_30757__$1;
(statearr_30832_30892[(2)] = inst_30682);

(statearr_30832_30892[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30758 === (42))){
var state_30757__$1 = state_30757;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30757__$1,(45),dchan);
} else {
if((state_val_30758 === (37))){
var inst_30625 = (state_30757[(11)]);
var inst_30725 = (state_30757[(23)]);
var inst_30716 = (state_30757[(25)]);
var inst_30725__$1 = cljs.core.first.call(null,inst_30716);
var inst_30726 = cljs.core.async.put_BANG_.call(null,inst_30725__$1,inst_30625,done);
var state_30757__$1 = (function (){var statearr_30833 = state_30757;
(statearr_30833[(23)] = inst_30725__$1);

return statearr_30833;
})();
if(cljs.core.truth_(inst_30726)){
var statearr_30834_30893 = state_30757__$1;
(statearr_30834_30893[(1)] = (39));

} else {
var statearr_30835_30894 = state_30757__$1;
(statearr_30835_30894[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30758 === (8))){
var inst_30637 = (state_30757[(13)]);
var inst_30636 = (state_30757[(14)]);
var inst_30639 = (inst_30637 < inst_30636);
var inst_30640 = inst_30639;
var state_30757__$1 = state_30757;
if(cljs.core.truth_(inst_30640)){
var statearr_30836_30895 = state_30757__$1;
(statearr_30836_30895[(1)] = (10));

} else {
var statearr_30837_30896 = state_30757__$1;
(statearr_30837_30896[(1)] = (11));

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
});})(c__30037__auto___30842,cs,m,dchan,dctr,done))
;
return ((function (switch__29949__auto__,c__30037__auto___30842,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__29950__auto__ = null;
var cljs$core$async$mult_$_state_machine__29950__auto____0 = (function (){
var statearr_30838 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30838[(0)] = cljs$core$async$mult_$_state_machine__29950__auto__);

(statearr_30838[(1)] = (1));

return statearr_30838;
});
var cljs$core$async$mult_$_state_machine__29950__auto____1 = (function (state_30757){
while(true){
var ret_value__29951__auto__ = (function (){try{while(true){
var result__29952__auto__ = switch__29949__auto__.call(null,state_30757);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29952__auto__;
}
break;
}
}catch (e30839){if((e30839 instanceof Object)){
var ex__29953__auto__ = e30839;
var statearr_30840_30897 = state_30757;
(statearr_30840_30897[(5)] = ex__29953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30757);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30839;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30898 = state_30757;
state_30757 = G__30898;
continue;
} else {
return ret_value__29951__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29950__auto__ = function(state_30757){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29950__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29950__auto____1.call(this,state_30757);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__29950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29950__auto____0;
cljs$core$async$mult_$_state_machine__29950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29950__auto____1;
return cljs$core$async$mult_$_state_machine__29950__auto__;
})()
;})(switch__29949__auto__,c__30037__auto___30842,cs,m,dchan,dctr,done))
})();
var state__30039__auto__ = (function (){var statearr_30841 = f__30038__auto__.call(null);
(statearr_30841[(6)] = c__30037__auto___30842);

return statearr_30841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30039__auto__);
});})(c__30037__auto___30842,cs,m,dchan,dctr,done))
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
var G__30900 = arguments.length;
switch (G__30900) {
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
var x__27625__auto__ = (((m == null))?null:m);
var m__27626__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__27625__auto__)]);
if(!((m__27626__auto__ == null))){
return m__27626__auto__.call(null,m,ch);
} else {
var m__27626__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__27626__auto____$1 == null))){
return m__27626__auto____$1.call(null,m,ch);
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
var x__27625__auto__ = (((m == null))?null:m);
var m__27626__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__27625__auto__)]);
if(!((m__27626__auto__ == null))){
return m__27626__auto__.call(null,m,ch);
} else {
var m__27626__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__27626__auto____$1 == null))){
return m__27626__auto____$1.call(null,m,ch);
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
var x__27625__auto__ = (((m == null))?null:m);
var m__27626__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__27625__auto__)]);
if(!((m__27626__auto__ == null))){
return m__27626__auto__.call(null,m);
} else {
var m__27626__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__27626__auto____$1 == null))){
return m__27626__auto____$1.call(null,m);
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
var x__27625__auto__ = (((m == null))?null:m);
var m__27626__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__27625__auto__)]);
if(!((m__27626__auto__ == null))){
return m__27626__auto__.call(null,m,state_map);
} else {
var m__27626__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__27626__auto____$1 == null))){
return m__27626__auto____$1.call(null,m,state_map);
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
var x__27625__auto__ = (((m == null))?null:m);
var m__27626__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__27625__auto__)]);
if(!((m__27626__auto__ == null))){
return m__27626__auto__.call(null,m,mode);
} else {
var m__27626__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__27626__auto____$1 == null))){
return m__27626__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__28088__auto__ = [];
var len__28081__auto___30912 = arguments.length;
var i__28082__auto___30913 = (0);
while(true){
if((i__28082__auto___30913 < len__28081__auto___30912)){
args__28088__auto__.push((arguments[i__28082__auto___30913]));

var G__30914 = (i__28082__auto___30913 + (1));
i__28082__auto___30913 = G__30914;
continue;
} else {
}
break;
}

var argseq__28089__auto__ = ((((3) < args__28088__auto__.length))?(new cljs.core.IndexedSeq(args__28088__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__28089__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30906){
var map__30907 = p__30906;
var map__30907__$1 = ((((!((map__30907 == null)))?((((map__30907.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30907.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30907):map__30907);
var opts = map__30907__$1;
var statearr_30909_30915 = state;
(statearr_30909_30915[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__30907,map__30907__$1,opts){
return (function (val){
var statearr_30910_30916 = state;
(statearr_30910_30916[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__30907,map__30907__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_30911_30917 = state;
(statearr_30911_30917[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30902){
var G__30903 = cljs.core.first.call(null,seq30902);
var seq30902__$1 = cljs.core.next.call(null,seq30902);
var G__30904 = cljs.core.first.call(null,seq30902__$1);
var seq30902__$2 = cljs.core.next.call(null,seq30902__$1);
var G__30905 = cljs.core.first.call(null,seq30902__$2);
var seq30902__$3 = cljs.core.next.call(null,seq30902__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30903,G__30904,G__30905,seq30902__$3);
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
if(typeof cljs.core.async.t_cljs$core$async30918 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30918 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta30919){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta30919 = meta30919;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30918.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30920,meta30919__$1){
var self__ = this;
var _30920__$1 = this;
return (new cljs.core.async.t_cljs$core$async30918(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta30919__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30918.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30920){
var self__ = this;
var _30920__$1 = this;
return self__.meta30919;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30918.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30918.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30918.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30918.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30918.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30918.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30918.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30918.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async30918.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta30919","meta30919",-1104826439,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30918.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30918.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30918";

cljs.core.async.t_cljs$core$async30918.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__27567__auto__,writer__27568__auto__,opt__27569__auto__){
return cljs.core._write.call(null,writer__27568__auto__,"cljs.core.async/t_cljs$core$async30918");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async30918 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async30918(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta30919){
return (new cljs.core.async.t_cljs$core$async30918(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta30919));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async30918(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30037__auto___31082 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30037__auto___31082,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__30038__auto__ = (function (){var switch__29949__auto__ = ((function (c__30037__auto___31082,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_31022){
var state_val_31023 = (state_31022[(1)]);
if((state_val_31023 === (7))){
var inst_30937 = (state_31022[(2)]);
var state_31022__$1 = state_31022;
var statearr_31024_31083 = state_31022__$1;
(statearr_31024_31083[(2)] = inst_30937);

(statearr_31024_31083[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31023 === (20))){
var inst_30949 = (state_31022[(7)]);
var state_31022__$1 = state_31022;
var statearr_31025_31084 = state_31022__$1;
(statearr_31025_31084[(2)] = inst_30949);

(statearr_31025_31084[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31023 === (27))){
var state_31022__$1 = state_31022;
var statearr_31026_31085 = state_31022__$1;
(statearr_31026_31085[(2)] = null);

(statearr_31026_31085[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31023 === (1))){
var inst_30924 = (state_31022[(8)]);
var inst_30924__$1 = calc_state.call(null);
var inst_30926 = (inst_30924__$1 == null);
var inst_30927 = cljs.core.not.call(null,inst_30926);
var state_31022__$1 = (function (){var statearr_31027 = state_31022;
(statearr_31027[(8)] = inst_30924__$1);

return statearr_31027;
})();
if(inst_30927){
var statearr_31028_31086 = state_31022__$1;
(statearr_31028_31086[(1)] = (2));

} else {
var statearr_31029_31087 = state_31022__$1;
(statearr_31029_31087[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31023 === (24))){
var inst_30996 = (state_31022[(9)]);
var inst_30982 = (state_31022[(10)]);
var inst_30973 = (state_31022[(11)]);
var inst_30996__$1 = inst_30973.call(null,inst_30982);
var state_31022__$1 = (function (){var statearr_31030 = state_31022;
(statearr_31030[(9)] = inst_30996__$1);

return statearr_31030;
})();
if(cljs.core.truth_(inst_30996__$1)){
var statearr_31031_31088 = state_31022__$1;
(statearr_31031_31088[(1)] = (29));

} else {
var statearr_31032_31089 = state_31022__$1;
(statearr_31032_31089[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31023 === (4))){
var inst_30940 = (state_31022[(2)]);
var state_31022__$1 = state_31022;
if(cljs.core.truth_(inst_30940)){
var statearr_31033_31090 = state_31022__$1;
(statearr_31033_31090[(1)] = (8));

} else {
var statearr_31034_31091 = state_31022__$1;
(statearr_31034_31091[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31023 === (15))){
var inst_30967 = (state_31022[(2)]);
var state_31022__$1 = state_31022;
if(cljs.core.truth_(inst_30967)){
var statearr_31035_31092 = state_31022__$1;
(statearr_31035_31092[(1)] = (19));

} else {
var statearr_31036_31093 = state_31022__$1;
(statearr_31036_31093[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31023 === (21))){
var inst_30972 = (state_31022[(12)]);
var inst_30972__$1 = (state_31022[(2)]);
var inst_30973 = cljs.core.get.call(null,inst_30972__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30974 = cljs.core.get.call(null,inst_30972__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30975 = cljs.core.get.call(null,inst_30972__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31022__$1 = (function (){var statearr_31037 = state_31022;
(statearr_31037[(12)] = inst_30972__$1);

(statearr_31037[(11)] = inst_30973);

(statearr_31037[(13)] = inst_30974);

return statearr_31037;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_31022__$1,(22),inst_30975);
} else {
if((state_val_31023 === (31))){
var inst_31004 = (state_31022[(2)]);
var state_31022__$1 = state_31022;
if(cljs.core.truth_(inst_31004)){
var statearr_31038_31094 = state_31022__$1;
(statearr_31038_31094[(1)] = (32));

} else {
var statearr_31039_31095 = state_31022__$1;
(statearr_31039_31095[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31023 === (32))){
var inst_30981 = (state_31022[(14)]);
var state_31022__$1 = state_31022;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31022__$1,(35),out,inst_30981);
} else {
if((state_val_31023 === (33))){
var inst_30972 = (state_31022[(12)]);
var inst_30949 = inst_30972;
var state_31022__$1 = (function (){var statearr_31040 = state_31022;
(statearr_31040[(7)] = inst_30949);

return statearr_31040;
})();
var statearr_31041_31096 = state_31022__$1;
(statearr_31041_31096[(2)] = null);

(statearr_31041_31096[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31023 === (13))){
var inst_30949 = (state_31022[(7)]);
var inst_30956 = inst_30949.cljs$lang$protocol_mask$partition0$;
var inst_30957 = (inst_30956 & (64));
var inst_30958 = inst_30949.cljs$core$ISeq$;
var inst_30959 = (cljs.core.PROTOCOL_SENTINEL === inst_30958);
var inst_30960 = (inst_30957) || (inst_30959);
var state_31022__$1 = state_31022;
if(cljs.core.truth_(inst_30960)){
var statearr_31042_31097 = state_31022__$1;
(statearr_31042_31097[(1)] = (16));

} else {
var statearr_31043_31098 = state_31022__$1;
(statearr_31043_31098[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31023 === (22))){
var inst_30981 = (state_31022[(14)]);
var inst_30982 = (state_31022[(10)]);
var inst_30980 = (state_31022[(2)]);
var inst_30981__$1 = cljs.core.nth.call(null,inst_30980,(0),null);
var inst_30982__$1 = cljs.core.nth.call(null,inst_30980,(1),null);
var inst_30983 = (inst_30981__$1 == null);
var inst_30984 = cljs.core._EQ_.call(null,inst_30982__$1,change);
var inst_30985 = (inst_30983) || (inst_30984);
var state_31022__$1 = (function (){var statearr_31044 = state_31022;
(statearr_31044[(14)] = inst_30981__$1);

(statearr_31044[(10)] = inst_30982__$1);

return statearr_31044;
})();
if(cljs.core.truth_(inst_30985)){
var statearr_31045_31099 = state_31022__$1;
(statearr_31045_31099[(1)] = (23));

} else {
var statearr_31046_31100 = state_31022__$1;
(statearr_31046_31100[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31023 === (36))){
var inst_30972 = (state_31022[(12)]);
var inst_30949 = inst_30972;
var state_31022__$1 = (function (){var statearr_31047 = state_31022;
(statearr_31047[(7)] = inst_30949);

return statearr_31047;
})();
var statearr_31048_31101 = state_31022__$1;
(statearr_31048_31101[(2)] = null);

(statearr_31048_31101[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31023 === (29))){
var inst_30996 = (state_31022[(9)]);
var state_31022__$1 = state_31022;
var statearr_31049_31102 = state_31022__$1;
(statearr_31049_31102[(2)] = inst_30996);

(statearr_31049_31102[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31023 === (6))){
var state_31022__$1 = state_31022;
var statearr_31050_31103 = state_31022__$1;
(statearr_31050_31103[(2)] = false);

(statearr_31050_31103[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31023 === (28))){
var inst_30992 = (state_31022[(2)]);
var inst_30993 = calc_state.call(null);
var inst_30949 = inst_30993;
var state_31022__$1 = (function (){var statearr_31051 = state_31022;
(statearr_31051[(15)] = inst_30992);

(statearr_31051[(7)] = inst_30949);

return statearr_31051;
})();
var statearr_31052_31104 = state_31022__$1;
(statearr_31052_31104[(2)] = null);

(statearr_31052_31104[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31023 === (25))){
var inst_31018 = (state_31022[(2)]);
var state_31022__$1 = state_31022;
var statearr_31053_31105 = state_31022__$1;
(statearr_31053_31105[(2)] = inst_31018);

(statearr_31053_31105[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31023 === (34))){
var inst_31016 = (state_31022[(2)]);
var state_31022__$1 = state_31022;
var statearr_31054_31106 = state_31022__$1;
(statearr_31054_31106[(2)] = inst_31016);

(statearr_31054_31106[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31023 === (17))){
var state_31022__$1 = state_31022;
var statearr_31055_31107 = state_31022__$1;
(statearr_31055_31107[(2)] = false);

(statearr_31055_31107[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31023 === (3))){
var state_31022__$1 = state_31022;
var statearr_31056_31108 = state_31022__$1;
(statearr_31056_31108[(2)] = false);

(statearr_31056_31108[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31023 === (12))){
var inst_31020 = (state_31022[(2)]);
var state_31022__$1 = state_31022;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31022__$1,inst_31020);
} else {
if((state_val_31023 === (2))){
var inst_30924 = (state_31022[(8)]);
var inst_30929 = inst_30924.cljs$lang$protocol_mask$partition0$;
var inst_30930 = (inst_30929 & (64));
var inst_30931 = inst_30924.cljs$core$ISeq$;
var inst_30932 = (cljs.core.PROTOCOL_SENTINEL === inst_30931);
var inst_30933 = (inst_30930) || (inst_30932);
var state_31022__$1 = state_31022;
if(cljs.core.truth_(inst_30933)){
var statearr_31057_31109 = state_31022__$1;
(statearr_31057_31109[(1)] = (5));

} else {
var statearr_31058_31110 = state_31022__$1;
(statearr_31058_31110[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31023 === (23))){
var inst_30981 = (state_31022[(14)]);
var inst_30987 = (inst_30981 == null);
var state_31022__$1 = state_31022;
if(cljs.core.truth_(inst_30987)){
var statearr_31059_31111 = state_31022__$1;
(statearr_31059_31111[(1)] = (26));

} else {
var statearr_31060_31112 = state_31022__$1;
(statearr_31060_31112[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31023 === (35))){
var inst_31007 = (state_31022[(2)]);
var state_31022__$1 = state_31022;
if(cljs.core.truth_(inst_31007)){
var statearr_31061_31113 = state_31022__$1;
(statearr_31061_31113[(1)] = (36));

} else {
var statearr_31062_31114 = state_31022__$1;
(statearr_31062_31114[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31023 === (19))){
var inst_30949 = (state_31022[(7)]);
var inst_30969 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30949);
var state_31022__$1 = state_31022;
var statearr_31063_31115 = state_31022__$1;
(statearr_31063_31115[(2)] = inst_30969);

(statearr_31063_31115[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31023 === (11))){
var inst_30949 = (state_31022[(7)]);
var inst_30953 = (inst_30949 == null);
var inst_30954 = cljs.core.not.call(null,inst_30953);
var state_31022__$1 = state_31022;
if(inst_30954){
var statearr_31064_31116 = state_31022__$1;
(statearr_31064_31116[(1)] = (13));

} else {
var statearr_31065_31117 = state_31022__$1;
(statearr_31065_31117[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31023 === (9))){
var inst_30924 = (state_31022[(8)]);
var state_31022__$1 = state_31022;
var statearr_31066_31118 = state_31022__$1;
(statearr_31066_31118[(2)] = inst_30924);

(statearr_31066_31118[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31023 === (5))){
var state_31022__$1 = state_31022;
var statearr_31067_31119 = state_31022__$1;
(statearr_31067_31119[(2)] = true);

(statearr_31067_31119[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31023 === (14))){
var state_31022__$1 = state_31022;
var statearr_31068_31120 = state_31022__$1;
(statearr_31068_31120[(2)] = false);

(statearr_31068_31120[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31023 === (26))){
var inst_30982 = (state_31022[(10)]);
var inst_30989 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_30982);
var state_31022__$1 = state_31022;
var statearr_31069_31121 = state_31022__$1;
(statearr_31069_31121[(2)] = inst_30989);

(statearr_31069_31121[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31023 === (16))){
var state_31022__$1 = state_31022;
var statearr_31070_31122 = state_31022__$1;
(statearr_31070_31122[(2)] = true);

(statearr_31070_31122[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31023 === (38))){
var inst_31012 = (state_31022[(2)]);
var state_31022__$1 = state_31022;
var statearr_31071_31123 = state_31022__$1;
(statearr_31071_31123[(2)] = inst_31012);

(statearr_31071_31123[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31023 === (30))){
var inst_30982 = (state_31022[(10)]);
var inst_30973 = (state_31022[(11)]);
var inst_30974 = (state_31022[(13)]);
var inst_30999 = cljs.core.empty_QMARK_.call(null,inst_30973);
var inst_31000 = inst_30974.call(null,inst_30982);
var inst_31001 = cljs.core.not.call(null,inst_31000);
var inst_31002 = (inst_30999) && (inst_31001);
var state_31022__$1 = state_31022;
var statearr_31072_31124 = state_31022__$1;
(statearr_31072_31124[(2)] = inst_31002);

(statearr_31072_31124[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31023 === (10))){
var inst_30924 = (state_31022[(8)]);
var inst_30945 = (state_31022[(2)]);
var inst_30946 = cljs.core.get.call(null,inst_30945,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30947 = cljs.core.get.call(null,inst_30945,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30948 = cljs.core.get.call(null,inst_30945,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30949 = inst_30924;
var state_31022__$1 = (function (){var statearr_31073 = state_31022;
(statearr_31073[(16)] = inst_30947);

(statearr_31073[(17)] = inst_30948);

(statearr_31073[(18)] = inst_30946);

(statearr_31073[(7)] = inst_30949);

return statearr_31073;
})();
var statearr_31074_31125 = state_31022__$1;
(statearr_31074_31125[(2)] = null);

(statearr_31074_31125[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31023 === (18))){
var inst_30964 = (state_31022[(2)]);
var state_31022__$1 = state_31022;
var statearr_31075_31126 = state_31022__$1;
(statearr_31075_31126[(2)] = inst_30964);

(statearr_31075_31126[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31023 === (37))){
var state_31022__$1 = state_31022;
var statearr_31076_31127 = state_31022__$1;
(statearr_31076_31127[(2)] = null);

(statearr_31076_31127[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31023 === (8))){
var inst_30924 = (state_31022[(8)]);
var inst_30942 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30924);
var state_31022__$1 = state_31022;
var statearr_31077_31128 = state_31022__$1;
(statearr_31077_31128[(2)] = inst_30942);

(statearr_31077_31128[(1)] = (10));


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
});})(c__30037__auto___31082,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__29949__auto__,c__30037__auto___31082,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__29950__auto__ = null;
var cljs$core$async$mix_$_state_machine__29950__auto____0 = (function (){
var statearr_31078 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31078[(0)] = cljs$core$async$mix_$_state_machine__29950__auto__);

(statearr_31078[(1)] = (1));

return statearr_31078;
});
var cljs$core$async$mix_$_state_machine__29950__auto____1 = (function (state_31022){
while(true){
var ret_value__29951__auto__ = (function (){try{while(true){
var result__29952__auto__ = switch__29949__auto__.call(null,state_31022);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29952__auto__;
}
break;
}
}catch (e31079){if((e31079 instanceof Object)){
var ex__29953__auto__ = e31079;
var statearr_31080_31129 = state_31022;
(statearr_31080_31129[(5)] = ex__29953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31022);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31079;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31130 = state_31022;
state_31022 = G__31130;
continue;
} else {
return ret_value__29951__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29950__auto__ = function(state_31022){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29950__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29950__auto____1.call(this,state_31022);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__29950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29950__auto____0;
cljs$core$async$mix_$_state_machine__29950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29950__auto____1;
return cljs$core$async$mix_$_state_machine__29950__auto__;
})()
;})(switch__29949__auto__,c__30037__auto___31082,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__30039__auto__ = (function (){var statearr_31081 = f__30038__auto__.call(null);
(statearr_31081[(6)] = c__30037__auto___31082);

return statearr_31081;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30039__auto__);
});})(c__30037__auto___31082,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__27625__auto__ = (((p == null))?null:p);
var m__27626__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__27625__auto__)]);
if(!((m__27626__auto__ == null))){
return m__27626__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__27626__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__27626__auto____$1 == null))){
return m__27626__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__27625__auto__ = (((p == null))?null:p);
var m__27626__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__27625__auto__)]);
if(!((m__27626__auto__ == null))){
return m__27626__auto__.call(null,p,v,ch);
} else {
var m__27626__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__27626__auto____$1 == null))){
return m__27626__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__31132 = arguments.length;
switch (G__31132) {
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
var x__27625__auto__ = (((p == null))?null:p);
var m__27626__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__27625__auto__)]);
if(!((m__27626__auto__ == null))){
return m__27626__auto__.call(null,p);
} else {
var m__27626__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__27626__auto____$1 == null))){
return m__27626__auto____$1.call(null,p);
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
var x__27625__auto__ = (((p == null))?null:p);
var m__27626__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__27625__auto__)]);
if(!((m__27626__auto__ == null))){
return m__27626__auto__.call(null,p,v);
} else {
var m__27626__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__27626__auto____$1 == null))){
return m__27626__auto____$1.call(null,p,v);
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
var G__31136 = arguments.length;
switch (G__31136) {
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
var or__26956__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__26956__auto__)){
return or__26956__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__26956__auto__,mults){
return (function (p1__31134_SHARP_){
if(cljs.core.truth_(p1__31134_SHARP_.call(null,topic))){
return p1__31134_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__31134_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__26956__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async31137 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31137 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31138){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31138 = meta31138;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31137.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_31139,meta31138__$1){
var self__ = this;
var _31139__$1 = this;
return (new cljs.core.async.t_cljs$core$async31137(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31138__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31137.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_31139){
var self__ = this;
var _31139__$1 = this;
return self__.meta31138;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31137.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31137.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31137.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31137.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31137.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async31137.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31137.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31137.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31138","meta31138",192965016,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31137.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31137.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31137";

cljs.core.async.t_cljs$core$async31137.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__27567__auto__,writer__27568__auto__,opt__27569__auto__){
return cljs.core._write.call(null,writer__27568__auto__,"cljs.core.async/t_cljs$core$async31137");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async31137 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async31137(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31138){
return (new cljs.core.async.t_cljs$core$async31137(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31138));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async31137(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30037__auto___31257 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30037__auto___31257,mults,ensure_mult,p){
return (function (){
var f__30038__auto__ = (function (){var switch__29949__auto__ = ((function (c__30037__auto___31257,mults,ensure_mult,p){
return (function (state_31211){
var state_val_31212 = (state_31211[(1)]);
if((state_val_31212 === (7))){
var inst_31207 = (state_31211[(2)]);
var state_31211__$1 = state_31211;
var statearr_31213_31258 = state_31211__$1;
(statearr_31213_31258[(2)] = inst_31207);

(statearr_31213_31258[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31212 === (20))){
var state_31211__$1 = state_31211;
var statearr_31214_31259 = state_31211__$1;
(statearr_31214_31259[(2)] = null);

(statearr_31214_31259[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31212 === (1))){
var state_31211__$1 = state_31211;
var statearr_31215_31260 = state_31211__$1;
(statearr_31215_31260[(2)] = null);

(statearr_31215_31260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31212 === (24))){
var inst_31190 = (state_31211[(7)]);
var inst_31199 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_31190);
var state_31211__$1 = state_31211;
var statearr_31216_31261 = state_31211__$1;
(statearr_31216_31261[(2)] = inst_31199);

(statearr_31216_31261[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31212 === (4))){
var inst_31142 = (state_31211[(8)]);
var inst_31142__$1 = (state_31211[(2)]);
var inst_31143 = (inst_31142__$1 == null);
var state_31211__$1 = (function (){var statearr_31217 = state_31211;
(statearr_31217[(8)] = inst_31142__$1);

return statearr_31217;
})();
if(cljs.core.truth_(inst_31143)){
var statearr_31218_31262 = state_31211__$1;
(statearr_31218_31262[(1)] = (5));

} else {
var statearr_31219_31263 = state_31211__$1;
(statearr_31219_31263[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31212 === (15))){
var inst_31184 = (state_31211[(2)]);
var state_31211__$1 = state_31211;
var statearr_31220_31264 = state_31211__$1;
(statearr_31220_31264[(2)] = inst_31184);

(statearr_31220_31264[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31212 === (21))){
var inst_31204 = (state_31211[(2)]);
var state_31211__$1 = (function (){var statearr_31221 = state_31211;
(statearr_31221[(9)] = inst_31204);

return statearr_31221;
})();
var statearr_31222_31265 = state_31211__$1;
(statearr_31222_31265[(2)] = null);

(statearr_31222_31265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31212 === (13))){
var inst_31166 = (state_31211[(10)]);
var inst_31168 = cljs.core.chunked_seq_QMARK_.call(null,inst_31166);
var state_31211__$1 = state_31211;
if(inst_31168){
var statearr_31223_31266 = state_31211__$1;
(statearr_31223_31266[(1)] = (16));

} else {
var statearr_31224_31267 = state_31211__$1;
(statearr_31224_31267[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31212 === (22))){
var inst_31196 = (state_31211[(2)]);
var state_31211__$1 = state_31211;
if(cljs.core.truth_(inst_31196)){
var statearr_31225_31268 = state_31211__$1;
(statearr_31225_31268[(1)] = (23));

} else {
var statearr_31226_31269 = state_31211__$1;
(statearr_31226_31269[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31212 === (6))){
var inst_31190 = (state_31211[(7)]);
var inst_31192 = (state_31211[(11)]);
var inst_31142 = (state_31211[(8)]);
var inst_31190__$1 = topic_fn.call(null,inst_31142);
var inst_31191 = cljs.core.deref.call(null,mults);
var inst_31192__$1 = cljs.core.get.call(null,inst_31191,inst_31190__$1);
var state_31211__$1 = (function (){var statearr_31227 = state_31211;
(statearr_31227[(7)] = inst_31190__$1);

(statearr_31227[(11)] = inst_31192__$1);

return statearr_31227;
})();
if(cljs.core.truth_(inst_31192__$1)){
var statearr_31228_31270 = state_31211__$1;
(statearr_31228_31270[(1)] = (19));

} else {
var statearr_31229_31271 = state_31211__$1;
(statearr_31229_31271[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31212 === (25))){
var inst_31201 = (state_31211[(2)]);
var state_31211__$1 = state_31211;
var statearr_31230_31272 = state_31211__$1;
(statearr_31230_31272[(2)] = inst_31201);

(statearr_31230_31272[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31212 === (17))){
var inst_31166 = (state_31211[(10)]);
var inst_31175 = cljs.core.first.call(null,inst_31166);
var inst_31176 = cljs.core.async.muxch_STAR_.call(null,inst_31175);
var inst_31177 = cljs.core.async.close_BANG_.call(null,inst_31176);
var inst_31178 = cljs.core.next.call(null,inst_31166);
var inst_31152 = inst_31178;
var inst_31153 = null;
var inst_31154 = (0);
var inst_31155 = (0);
var state_31211__$1 = (function (){var statearr_31231 = state_31211;
(statearr_31231[(12)] = inst_31177);

(statearr_31231[(13)] = inst_31153);

(statearr_31231[(14)] = inst_31155);

(statearr_31231[(15)] = inst_31152);

(statearr_31231[(16)] = inst_31154);

return statearr_31231;
})();
var statearr_31232_31273 = state_31211__$1;
(statearr_31232_31273[(2)] = null);

(statearr_31232_31273[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31212 === (3))){
var inst_31209 = (state_31211[(2)]);
var state_31211__$1 = state_31211;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31211__$1,inst_31209);
} else {
if((state_val_31212 === (12))){
var inst_31186 = (state_31211[(2)]);
var state_31211__$1 = state_31211;
var statearr_31233_31274 = state_31211__$1;
(statearr_31233_31274[(2)] = inst_31186);

(statearr_31233_31274[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31212 === (2))){
var state_31211__$1 = state_31211;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31211__$1,(4),ch);
} else {
if((state_val_31212 === (23))){
var state_31211__$1 = state_31211;
var statearr_31234_31275 = state_31211__$1;
(statearr_31234_31275[(2)] = null);

(statearr_31234_31275[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31212 === (19))){
var inst_31192 = (state_31211[(11)]);
var inst_31142 = (state_31211[(8)]);
var inst_31194 = cljs.core.async.muxch_STAR_.call(null,inst_31192);
var state_31211__$1 = state_31211;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31211__$1,(22),inst_31194,inst_31142);
} else {
if((state_val_31212 === (11))){
var inst_31166 = (state_31211[(10)]);
var inst_31152 = (state_31211[(15)]);
var inst_31166__$1 = cljs.core.seq.call(null,inst_31152);
var state_31211__$1 = (function (){var statearr_31235 = state_31211;
(statearr_31235[(10)] = inst_31166__$1);

return statearr_31235;
})();
if(inst_31166__$1){
var statearr_31236_31276 = state_31211__$1;
(statearr_31236_31276[(1)] = (13));

} else {
var statearr_31237_31277 = state_31211__$1;
(statearr_31237_31277[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31212 === (9))){
var inst_31188 = (state_31211[(2)]);
var state_31211__$1 = state_31211;
var statearr_31238_31278 = state_31211__$1;
(statearr_31238_31278[(2)] = inst_31188);

(statearr_31238_31278[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31212 === (5))){
var inst_31149 = cljs.core.deref.call(null,mults);
var inst_31150 = cljs.core.vals.call(null,inst_31149);
var inst_31151 = cljs.core.seq.call(null,inst_31150);
var inst_31152 = inst_31151;
var inst_31153 = null;
var inst_31154 = (0);
var inst_31155 = (0);
var state_31211__$1 = (function (){var statearr_31239 = state_31211;
(statearr_31239[(13)] = inst_31153);

(statearr_31239[(14)] = inst_31155);

(statearr_31239[(15)] = inst_31152);

(statearr_31239[(16)] = inst_31154);

return statearr_31239;
})();
var statearr_31240_31279 = state_31211__$1;
(statearr_31240_31279[(2)] = null);

(statearr_31240_31279[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31212 === (14))){
var state_31211__$1 = state_31211;
var statearr_31244_31280 = state_31211__$1;
(statearr_31244_31280[(2)] = null);

(statearr_31244_31280[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31212 === (16))){
var inst_31166 = (state_31211[(10)]);
var inst_31170 = cljs.core.chunk_first.call(null,inst_31166);
var inst_31171 = cljs.core.chunk_rest.call(null,inst_31166);
var inst_31172 = cljs.core.count.call(null,inst_31170);
var inst_31152 = inst_31171;
var inst_31153 = inst_31170;
var inst_31154 = inst_31172;
var inst_31155 = (0);
var state_31211__$1 = (function (){var statearr_31245 = state_31211;
(statearr_31245[(13)] = inst_31153);

(statearr_31245[(14)] = inst_31155);

(statearr_31245[(15)] = inst_31152);

(statearr_31245[(16)] = inst_31154);

return statearr_31245;
})();
var statearr_31246_31281 = state_31211__$1;
(statearr_31246_31281[(2)] = null);

(statearr_31246_31281[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31212 === (10))){
var inst_31153 = (state_31211[(13)]);
var inst_31155 = (state_31211[(14)]);
var inst_31152 = (state_31211[(15)]);
var inst_31154 = (state_31211[(16)]);
var inst_31160 = cljs.core._nth.call(null,inst_31153,inst_31155);
var inst_31161 = cljs.core.async.muxch_STAR_.call(null,inst_31160);
var inst_31162 = cljs.core.async.close_BANG_.call(null,inst_31161);
var inst_31163 = (inst_31155 + (1));
var tmp31241 = inst_31153;
var tmp31242 = inst_31152;
var tmp31243 = inst_31154;
var inst_31152__$1 = tmp31242;
var inst_31153__$1 = tmp31241;
var inst_31154__$1 = tmp31243;
var inst_31155__$1 = inst_31163;
var state_31211__$1 = (function (){var statearr_31247 = state_31211;
(statearr_31247[(17)] = inst_31162);

(statearr_31247[(13)] = inst_31153__$1);

(statearr_31247[(14)] = inst_31155__$1);

(statearr_31247[(15)] = inst_31152__$1);

(statearr_31247[(16)] = inst_31154__$1);

return statearr_31247;
})();
var statearr_31248_31282 = state_31211__$1;
(statearr_31248_31282[(2)] = null);

(statearr_31248_31282[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31212 === (18))){
var inst_31181 = (state_31211[(2)]);
var state_31211__$1 = state_31211;
var statearr_31249_31283 = state_31211__$1;
(statearr_31249_31283[(2)] = inst_31181);

(statearr_31249_31283[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31212 === (8))){
var inst_31155 = (state_31211[(14)]);
var inst_31154 = (state_31211[(16)]);
var inst_31157 = (inst_31155 < inst_31154);
var inst_31158 = inst_31157;
var state_31211__$1 = state_31211;
if(cljs.core.truth_(inst_31158)){
var statearr_31250_31284 = state_31211__$1;
(statearr_31250_31284[(1)] = (10));

} else {
var statearr_31251_31285 = state_31211__$1;
(statearr_31251_31285[(1)] = (11));

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
});})(c__30037__auto___31257,mults,ensure_mult,p))
;
return ((function (switch__29949__auto__,c__30037__auto___31257,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__29950__auto__ = null;
var cljs$core$async$state_machine__29950__auto____0 = (function (){
var statearr_31252 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31252[(0)] = cljs$core$async$state_machine__29950__auto__);

(statearr_31252[(1)] = (1));

return statearr_31252;
});
var cljs$core$async$state_machine__29950__auto____1 = (function (state_31211){
while(true){
var ret_value__29951__auto__ = (function (){try{while(true){
var result__29952__auto__ = switch__29949__auto__.call(null,state_31211);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29952__auto__;
}
break;
}
}catch (e31253){if((e31253 instanceof Object)){
var ex__29953__auto__ = e31253;
var statearr_31254_31286 = state_31211;
(statearr_31254_31286[(5)] = ex__29953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31211);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31253;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31287 = state_31211;
state_31211 = G__31287;
continue;
} else {
return ret_value__29951__auto__;
}
break;
}
});
cljs$core$async$state_machine__29950__auto__ = function(state_31211){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29950__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29950__auto____1.call(this,state_31211);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29950__auto____0;
cljs$core$async$state_machine__29950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29950__auto____1;
return cljs$core$async$state_machine__29950__auto__;
})()
;})(switch__29949__auto__,c__30037__auto___31257,mults,ensure_mult,p))
})();
var state__30039__auto__ = (function (){var statearr_31255 = f__30038__auto__.call(null);
(statearr_31255[(6)] = c__30037__auto___31257);

return statearr_31255;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30039__auto__);
});})(c__30037__auto___31257,mults,ensure_mult,p))
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
var G__31289 = arguments.length;
switch (G__31289) {
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
var G__31292 = arguments.length;
switch (G__31292) {
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
var G__31295 = arguments.length;
switch (G__31295) {
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
var c__30037__auto___31362 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30037__auto___31362,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__30038__auto__ = (function (){var switch__29949__auto__ = ((function (c__30037__auto___31362,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_31334){
var state_val_31335 = (state_31334[(1)]);
if((state_val_31335 === (7))){
var state_31334__$1 = state_31334;
var statearr_31336_31363 = state_31334__$1;
(statearr_31336_31363[(2)] = null);

(statearr_31336_31363[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31335 === (1))){
var state_31334__$1 = state_31334;
var statearr_31337_31364 = state_31334__$1;
(statearr_31337_31364[(2)] = null);

(statearr_31337_31364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31335 === (4))){
var inst_31298 = (state_31334[(7)]);
var inst_31300 = (inst_31298 < cnt);
var state_31334__$1 = state_31334;
if(cljs.core.truth_(inst_31300)){
var statearr_31338_31365 = state_31334__$1;
(statearr_31338_31365[(1)] = (6));

} else {
var statearr_31339_31366 = state_31334__$1;
(statearr_31339_31366[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31335 === (15))){
var inst_31330 = (state_31334[(2)]);
var state_31334__$1 = state_31334;
var statearr_31340_31367 = state_31334__$1;
(statearr_31340_31367[(2)] = inst_31330);

(statearr_31340_31367[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31335 === (13))){
var inst_31323 = cljs.core.async.close_BANG_.call(null,out);
var state_31334__$1 = state_31334;
var statearr_31341_31368 = state_31334__$1;
(statearr_31341_31368[(2)] = inst_31323);

(statearr_31341_31368[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31335 === (6))){
var state_31334__$1 = state_31334;
var statearr_31342_31369 = state_31334__$1;
(statearr_31342_31369[(2)] = null);

(statearr_31342_31369[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31335 === (3))){
var inst_31332 = (state_31334[(2)]);
var state_31334__$1 = state_31334;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31334__$1,inst_31332);
} else {
if((state_val_31335 === (12))){
var inst_31320 = (state_31334[(8)]);
var inst_31320__$1 = (state_31334[(2)]);
var inst_31321 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_31320__$1);
var state_31334__$1 = (function (){var statearr_31343 = state_31334;
(statearr_31343[(8)] = inst_31320__$1);

return statearr_31343;
})();
if(cljs.core.truth_(inst_31321)){
var statearr_31344_31370 = state_31334__$1;
(statearr_31344_31370[(1)] = (13));

} else {
var statearr_31345_31371 = state_31334__$1;
(statearr_31345_31371[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31335 === (2))){
var inst_31297 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_31298 = (0);
var state_31334__$1 = (function (){var statearr_31346 = state_31334;
(statearr_31346[(9)] = inst_31297);

(statearr_31346[(7)] = inst_31298);

return statearr_31346;
})();
var statearr_31347_31372 = state_31334__$1;
(statearr_31347_31372[(2)] = null);

(statearr_31347_31372[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31335 === (11))){
var inst_31298 = (state_31334[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31334,(10),Object,null,(9));
var inst_31307 = chs__$1.call(null,inst_31298);
var inst_31308 = done.call(null,inst_31298);
var inst_31309 = cljs.core.async.take_BANG_.call(null,inst_31307,inst_31308);
var state_31334__$1 = state_31334;
var statearr_31348_31373 = state_31334__$1;
(statearr_31348_31373[(2)] = inst_31309);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31334__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31335 === (9))){
var inst_31298 = (state_31334[(7)]);
var inst_31311 = (state_31334[(2)]);
var inst_31312 = (inst_31298 + (1));
var inst_31298__$1 = inst_31312;
var state_31334__$1 = (function (){var statearr_31349 = state_31334;
(statearr_31349[(10)] = inst_31311);

(statearr_31349[(7)] = inst_31298__$1);

return statearr_31349;
})();
var statearr_31350_31374 = state_31334__$1;
(statearr_31350_31374[(2)] = null);

(statearr_31350_31374[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31335 === (5))){
var inst_31318 = (state_31334[(2)]);
var state_31334__$1 = (function (){var statearr_31351 = state_31334;
(statearr_31351[(11)] = inst_31318);

return statearr_31351;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31334__$1,(12),dchan);
} else {
if((state_val_31335 === (14))){
var inst_31320 = (state_31334[(8)]);
var inst_31325 = cljs.core.apply.call(null,f,inst_31320);
var state_31334__$1 = state_31334;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31334__$1,(16),out,inst_31325);
} else {
if((state_val_31335 === (16))){
var inst_31327 = (state_31334[(2)]);
var state_31334__$1 = (function (){var statearr_31352 = state_31334;
(statearr_31352[(12)] = inst_31327);

return statearr_31352;
})();
var statearr_31353_31375 = state_31334__$1;
(statearr_31353_31375[(2)] = null);

(statearr_31353_31375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31335 === (10))){
var inst_31302 = (state_31334[(2)]);
var inst_31303 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_31334__$1 = (function (){var statearr_31354 = state_31334;
(statearr_31354[(13)] = inst_31302);

return statearr_31354;
})();
var statearr_31355_31376 = state_31334__$1;
(statearr_31355_31376[(2)] = inst_31303);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31334__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31335 === (8))){
var inst_31316 = (state_31334[(2)]);
var state_31334__$1 = state_31334;
var statearr_31356_31377 = state_31334__$1;
(statearr_31356_31377[(2)] = inst_31316);

(statearr_31356_31377[(1)] = (5));


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
});})(c__30037__auto___31362,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__29949__auto__,c__30037__auto___31362,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__29950__auto__ = null;
var cljs$core$async$state_machine__29950__auto____0 = (function (){
var statearr_31357 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31357[(0)] = cljs$core$async$state_machine__29950__auto__);

(statearr_31357[(1)] = (1));

return statearr_31357;
});
var cljs$core$async$state_machine__29950__auto____1 = (function (state_31334){
while(true){
var ret_value__29951__auto__ = (function (){try{while(true){
var result__29952__auto__ = switch__29949__auto__.call(null,state_31334);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29952__auto__;
}
break;
}
}catch (e31358){if((e31358 instanceof Object)){
var ex__29953__auto__ = e31358;
var statearr_31359_31378 = state_31334;
(statearr_31359_31378[(5)] = ex__29953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31334);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31358;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31379 = state_31334;
state_31334 = G__31379;
continue;
} else {
return ret_value__29951__auto__;
}
break;
}
});
cljs$core$async$state_machine__29950__auto__ = function(state_31334){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29950__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29950__auto____1.call(this,state_31334);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29950__auto____0;
cljs$core$async$state_machine__29950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29950__auto____1;
return cljs$core$async$state_machine__29950__auto__;
})()
;})(switch__29949__auto__,c__30037__auto___31362,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__30039__auto__ = (function (){var statearr_31360 = f__30038__auto__.call(null);
(statearr_31360[(6)] = c__30037__auto___31362);

return statearr_31360;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30039__auto__);
});})(c__30037__auto___31362,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__31382 = arguments.length;
switch (G__31382) {
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
var c__30037__auto___31436 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30037__auto___31436,out){
return (function (){
var f__30038__auto__ = (function (){var switch__29949__auto__ = ((function (c__30037__auto___31436,out){
return (function (state_31414){
var state_val_31415 = (state_31414[(1)]);
if((state_val_31415 === (7))){
var inst_31394 = (state_31414[(7)]);
var inst_31393 = (state_31414[(8)]);
var inst_31393__$1 = (state_31414[(2)]);
var inst_31394__$1 = cljs.core.nth.call(null,inst_31393__$1,(0),null);
var inst_31395 = cljs.core.nth.call(null,inst_31393__$1,(1),null);
var inst_31396 = (inst_31394__$1 == null);
var state_31414__$1 = (function (){var statearr_31416 = state_31414;
(statearr_31416[(7)] = inst_31394__$1);

(statearr_31416[(8)] = inst_31393__$1);

(statearr_31416[(9)] = inst_31395);

return statearr_31416;
})();
if(cljs.core.truth_(inst_31396)){
var statearr_31417_31437 = state_31414__$1;
(statearr_31417_31437[(1)] = (8));

} else {
var statearr_31418_31438 = state_31414__$1;
(statearr_31418_31438[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31415 === (1))){
var inst_31383 = cljs.core.vec.call(null,chs);
var inst_31384 = inst_31383;
var state_31414__$1 = (function (){var statearr_31419 = state_31414;
(statearr_31419[(10)] = inst_31384);

return statearr_31419;
})();
var statearr_31420_31439 = state_31414__$1;
(statearr_31420_31439[(2)] = null);

(statearr_31420_31439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31415 === (4))){
var inst_31384 = (state_31414[(10)]);
var state_31414__$1 = state_31414;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31414__$1,(7),inst_31384);
} else {
if((state_val_31415 === (6))){
var inst_31410 = (state_31414[(2)]);
var state_31414__$1 = state_31414;
var statearr_31421_31440 = state_31414__$1;
(statearr_31421_31440[(2)] = inst_31410);

(statearr_31421_31440[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31415 === (3))){
var inst_31412 = (state_31414[(2)]);
var state_31414__$1 = state_31414;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31414__$1,inst_31412);
} else {
if((state_val_31415 === (2))){
var inst_31384 = (state_31414[(10)]);
var inst_31386 = cljs.core.count.call(null,inst_31384);
var inst_31387 = (inst_31386 > (0));
var state_31414__$1 = state_31414;
if(cljs.core.truth_(inst_31387)){
var statearr_31423_31441 = state_31414__$1;
(statearr_31423_31441[(1)] = (4));

} else {
var statearr_31424_31442 = state_31414__$1;
(statearr_31424_31442[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31415 === (11))){
var inst_31384 = (state_31414[(10)]);
var inst_31403 = (state_31414[(2)]);
var tmp31422 = inst_31384;
var inst_31384__$1 = tmp31422;
var state_31414__$1 = (function (){var statearr_31425 = state_31414;
(statearr_31425[(10)] = inst_31384__$1);

(statearr_31425[(11)] = inst_31403);

return statearr_31425;
})();
var statearr_31426_31443 = state_31414__$1;
(statearr_31426_31443[(2)] = null);

(statearr_31426_31443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31415 === (9))){
var inst_31394 = (state_31414[(7)]);
var state_31414__$1 = state_31414;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31414__$1,(11),out,inst_31394);
} else {
if((state_val_31415 === (5))){
var inst_31408 = cljs.core.async.close_BANG_.call(null,out);
var state_31414__$1 = state_31414;
var statearr_31427_31444 = state_31414__$1;
(statearr_31427_31444[(2)] = inst_31408);

(statearr_31427_31444[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31415 === (10))){
var inst_31406 = (state_31414[(2)]);
var state_31414__$1 = state_31414;
var statearr_31428_31445 = state_31414__$1;
(statearr_31428_31445[(2)] = inst_31406);

(statearr_31428_31445[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31415 === (8))){
var inst_31394 = (state_31414[(7)]);
var inst_31393 = (state_31414[(8)]);
var inst_31384 = (state_31414[(10)]);
var inst_31395 = (state_31414[(9)]);
var inst_31398 = (function (){var cs = inst_31384;
var vec__31389 = inst_31393;
var v = inst_31394;
var c = inst_31395;
return ((function (cs,vec__31389,v,c,inst_31394,inst_31393,inst_31384,inst_31395,state_val_31415,c__30037__auto___31436,out){
return (function (p1__31380_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__31380_SHARP_);
});
;})(cs,vec__31389,v,c,inst_31394,inst_31393,inst_31384,inst_31395,state_val_31415,c__30037__auto___31436,out))
})();
var inst_31399 = cljs.core.filterv.call(null,inst_31398,inst_31384);
var inst_31384__$1 = inst_31399;
var state_31414__$1 = (function (){var statearr_31429 = state_31414;
(statearr_31429[(10)] = inst_31384__$1);

return statearr_31429;
})();
var statearr_31430_31446 = state_31414__$1;
(statearr_31430_31446[(2)] = null);

(statearr_31430_31446[(1)] = (2));


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
});})(c__30037__auto___31436,out))
;
return ((function (switch__29949__auto__,c__30037__auto___31436,out){
return (function() {
var cljs$core$async$state_machine__29950__auto__ = null;
var cljs$core$async$state_machine__29950__auto____0 = (function (){
var statearr_31431 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31431[(0)] = cljs$core$async$state_machine__29950__auto__);

(statearr_31431[(1)] = (1));

return statearr_31431;
});
var cljs$core$async$state_machine__29950__auto____1 = (function (state_31414){
while(true){
var ret_value__29951__auto__ = (function (){try{while(true){
var result__29952__auto__ = switch__29949__auto__.call(null,state_31414);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29952__auto__;
}
break;
}
}catch (e31432){if((e31432 instanceof Object)){
var ex__29953__auto__ = e31432;
var statearr_31433_31447 = state_31414;
(statearr_31433_31447[(5)] = ex__29953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31414);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31432;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31448 = state_31414;
state_31414 = G__31448;
continue;
} else {
return ret_value__29951__auto__;
}
break;
}
});
cljs$core$async$state_machine__29950__auto__ = function(state_31414){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29950__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29950__auto____1.call(this,state_31414);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29950__auto____0;
cljs$core$async$state_machine__29950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29950__auto____1;
return cljs$core$async$state_machine__29950__auto__;
})()
;})(switch__29949__auto__,c__30037__auto___31436,out))
})();
var state__30039__auto__ = (function (){var statearr_31434 = f__30038__auto__.call(null);
(statearr_31434[(6)] = c__30037__auto___31436);

return statearr_31434;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30039__auto__);
});})(c__30037__auto___31436,out))
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
var G__31450 = arguments.length;
switch (G__31450) {
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
var c__30037__auto___31495 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30037__auto___31495,out){
return (function (){
var f__30038__auto__ = (function (){var switch__29949__auto__ = ((function (c__30037__auto___31495,out){
return (function (state_31474){
var state_val_31475 = (state_31474[(1)]);
if((state_val_31475 === (7))){
var inst_31456 = (state_31474[(7)]);
var inst_31456__$1 = (state_31474[(2)]);
var inst_31457 = (inst_31456__$1 == null);
var inst_31458 = cljs.core.not.call(null,inst_31457);
var state_31474__$1 = (function (){var statearr_31476 = state_31474;
(statearr_31476[(7)] = inst_31456__$1);

return statearr_31476;
})();
if(inst_31458){
var statearr_31477_31496 = state_31474__$1;
(statearr_31477_31496[(1)] = (8));

} else {
var statearr_31478_31497 = state_31474__$1;
(statearr_31478_31497[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31475 === (1))){
var inst_31451 = (0);
var state_31474__$1 = (function (){var statearr_31479 = state_31474;
(statearr_31479[(8)] = inst_31451);

return statearr_31479;
})();
var statearr_31480_31498 = state_31474__$1;
(statearr_31480_31498[(2)] = null);

(statearr_31480_31498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31475 === (4))){
var state_31474__$1 = state_31474;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31474__$1,(7),ch);
} else {
if((state_val_31475 === (6))){
var inst_31469 = (state_31474[(2)]);
var state_31474__$1 = state_31474;
var statearr_31481_31499 = state_31474__$1;
(statearr_31481_31499[(2)] = inst_31469);

(statearr_31481_31499[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31475 === (3))){
var inst_31471 = (state_31474[(2)]);
var inst_31472 = cljs.core.async.close_BANG_.call(null,out);
var state_31474__$1 = (function (){var statearr_31482 = state_31474;
(statearr_31482[(9)] = inst_31471);

return statearr_31482;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31474__$1,inst_31472);
} else {
if((state_val_31475 === (2))){
var inst_31451 = (state_31474[(8)]);
var inst_31453 = (inst_31451 < n);
var state_31474__$1 = state_31474;
if(cljs.core.truth_(inst_31453)){
var statearr_31483_31500 = state_31474__$1;
(statearr_31483_31500[(1)] = (4));

} else {
var statearr_31484_31501 = state_31474__$1;
(statearr_31484_31501[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31475 === (11))){
var inst_31451 = (state_31474[(8)]);
var inst_31461 = (state_31474[(2)]);
var inst_31462 = (inst_31451 + (1));
var inst_31451__$1 = inst_31462;
var state_31474__$1 = (function (){var statearr_31485 = state_31474;
(statearr_31485[(10)] = inst_31461);

(statearr_31485[(8)] = inst_31451__$1);

return statearr_31485;
})();
var statearr_31486_31502 = state_31474__$1;
(statearr_31486_31502[(2)] = null);

(statearr_31486_31502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31475 === (9))){
var state_31474__$1 = state_31474;
var statearr_31487_31503 = state_31474__$1;
(statearr_31487_31503[(2)] = null);

(statearr_31487_31503[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31475 === (5))){
var state_31474__$1 = state_31474;
var statearr_31488_31504 = state_31474__$1;
(statearr_31488_31504[(2)] = null);

(statearr_31488_31504[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31475 === (10))){
var inst_31466 = (state_31474[(2)]);
var state_31474__$1 = state_31474;
var statearr_31489_31505 = state_31474__$1;
(statearr_31489_31505[(2)] = inst_31466);

(statearr_31489_31505[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31475 === (8))){
var inst_31456 = (state_31474[(7)]);
var state_31474__$1 = state_31474;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31474__$1,(11),out,inst_31456);
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
});})(c__30037__auto___31495,out))
;
return ((function (switch__29949__auto__,c__30037__auto___31495,out){
return (function() {
var cljs$core$async$state_machine__29950__auto__ = null;
var cljs$core$async$state_machine__29950__auto____0 = (function (){
var statearr_31490 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31490[(0)] = cljs$core$async$state_machine__29950__auto__);

(statearr_31490[(1)] = (1));

return statearr_31490;
});
var cljs$core$async$state_machine__29950__auto____1 = (function (state_31474){
while(true){
var ret_value__29951__auto__ = (function (){try{while(true){
var result__29952__auto__ = switch__29949__auto__.call(null,state_31474);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29952__auto__;
}
break;
}
}catch (e31491){if((e31491 instanceof Object)){
var ex__29953__auto__ = e31491;
var statearr_31492_31506 = state_31474;
(statearr_31492_31506[(5)] = ex__29953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31474);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31491;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31507 = state_31474;
state_31474 = G__31507;
continue;
} else {
return ret_value__29951__auto__;
}
break;
}
});
cljs$core$async$state_machine__29950__auto__ = function(state_31474){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29950__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29950__auto____1.call(this,state_31474);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29950__auto____0;
cljs$core$async$state_machine__29950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29950__auto____1;
return cljs$core$async$state_machine__29950__auto__;
})()
;})(switch__29949__auto__,c__30037__auto___31495,out))
})();
var state__30039__auto__ = (function (){var statearr_31493 = f__30038__auto__.call(null);
(statearr_31493[(6)] = c__30037__auto___31495);

return statearr_31493;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30039__auto__);
});})(c__30037__auto___31495,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async31509 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31509 = (function (f,ch,meta31510){
this.f = f;
this.ch = ch;
this.meta31510 = meta31510;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31509.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31511,meta31510__$1){
var self__ = this;
var _31511__$1 = this;
return (new cljs.core.async.t_cljs$core$async31509(self__.f,self__.ch,meta31510__$1));
});

cljs.core.async.t_cljs$core$async31509.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31511){
var self__ = this;
var _31511__$1 = this;
return self__.meta31510;
});

cljs.core.async.t_cljs$core$async31509.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31509.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31509.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31509.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31509.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async31512 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31512 = (function (f,ch,meta31510,_,fn1,meta31513){
this.f = f;
this.ch = ch;
this.meta31510 = meta31510;
this._ = _;
this.fn1 = fn1;
this.meta31513 = meta31513;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31512.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_31514,meta31513__$1){
var self__ = this;
var _31514__$1 = this;
return (new cljs.core.async.t_cljs$core$async31512(self__.f,self__.ch,self__.meta31510,self__._,self__.fn1,meta31513__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async31512.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_31514){
var self__ = this;
var _31514__$1 = this;
return self__.meta31513;
});})(___$1))
;

cljs.core.async.t_cljs$core$async31512.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31512.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31512.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async31512.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__31508_SHARP_){
return f1.call(null,(((p1__31508_SHARP_ == null))?null:self__.f.call(null,p1__31508_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async31512.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31510","meta31510",-1613765497,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31509","cljs.core.async/t_cljs$core$async31509",-1685622545,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31513","meta31513",-8381436,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31512.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31512.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31512";

cljs.core.async.t_cljs$core$async31512.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__27567__auto__,writer__27568__auto__,opt__27569__auto__){
return cljs.core._write.call(null,writer__27568__auto__,"cljs.core.async/t_cljs$core$async31512");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async31512 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31512(f__$1,ch__$1,meta31510__$1,___$2,fn1__$1,meta31513){
return (new cljs.core.async.t_cljs$core$async31512(f__$1,ch__$1,meta31510__$1,___$2,fn1__$1,meta31513));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async31512(self__.f,self__.ch,self__.meta31510,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__26944__auto__ = ret;
if(cljs.core.truth_(and__26944__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__26944__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async31509.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31509.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async31509.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31510","meta31510",-1613765497,null)], null);
});

cljs.core.async.t_cljs$core$async31509.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31509.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31509";

cljs.core.async.t_cljs$core$async31509.cljs$lang$ctorPrWriter = (function (this__27567__auto__,writer__27568__auto__,opt__27569__auto__){
return cljs.core._write.call(null,writer__27568__auto__,"cljs.core.async/t_cljs$core$async31509");
});

cljs.core.async.__GT_t_cljs$core$async31509 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31509(f__$1,ch__$1,meta31510){
return (new cljs.core.async.t_cljs$core$async31509(f__$1,ch__$1,meta31510));
});

}

return (new cljs.core.async.t_cljs$core$async31509(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async31515 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31515 = (function (f,ch,meta31516){
this.f = f;
this.ch = ch;
this.meta31516 = meta31516;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31515.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31517,meta31516__$1){
var self__ = this;
var _31517__$1 = this;
return (new cljs.core.async.t_cljs$core$async31515(self__.f,self__.ch,meta31516__$1));
});

cljs.core.async.t_cljs$core$async31515.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31517){
var self__ = this;
var _31517__$1 = this;
return self__.meta31516;
});

cljs.core.async.t_cljs$core$async31515.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31515.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31515.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31515.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31515.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31515.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async31515.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31516","meta31516",955735087,null)], null);
});

cljs.core.async.t_cljs$core$async31515.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31515.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31515";

cljs.core.async.t_cljs$core$async31515.cljs$lang$ctorPrWriter = (function (this__27567__auto__,writer__27568__auto__,opt__27569__auto__){
return cljs.core._write.call(null,writer__27568__auto__,"cljs.core.async/t_cljs$core$async31515");
});

cljs.core.async.__GT_t_cljs$core$async31515 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31515(f__$1,ch__$1,meta31516){
return (new cljs.core.async.t_cljs$core$async31515(f__$1,ch__$1,meta31516));
});

}

return (new cljs.core.async.t_cljs$core$async31515(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async31518 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31518 = (function (p,ch,meta31519){
this.p = p;
this.ch = ch;
this.meta31519 = meta31519;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31518.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31520,meta31519__$1){
var self__ = this;
var _31520__$1 = this;
return (new cljs.core.async.t_cljs$core$async31518(self__.p,self__.ch,meta31519__$1));
});

cljs.core.async.t_cljs$core$async31518.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31520){
var self__ = this;
var _31520__$1 = this;
return self__.meta31519;
});

cljs.core.async.t_cljs$core$async31518.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31518.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31518.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31518.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31518.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31518.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31518.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async31518.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31519","meta31519",1196958079,null)], null);
});

cljs.core.async.t_cljs$core$async31518.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31518.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31518";

cljs.core.async.t_cljs$core$async31518.cljs$lang$ctorPrWriter = (function (this__27567__auto__,writer__27568__auto__,opt__27569__auto__){
return cljs.core._write.call(null,writer__27568__auto__,"cljs.core.async/t_cljs$core$async31518");
});

cljs.core.async.__GT_t_cljs$core$async31518 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31518(p__$1,ch__$1,meta31519){
return (new cljs.core.async.t_cljs$core$async31518(p__$1,ch__$1,meta31519));
});

}

return (new cljs.core.async.t_cljs$core$async31518(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__31522 = arguments.length;
switch (G__31522) {
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
var c__30037__auto___31562 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30037__auto___31562,out){
return (function (){
var f__30038__auto__ = (function (){var switch__29949__auto__ = ((function (c__30037__auto___31562,out){
return (function (state_31543){
var state_val_31544 = (state_31543[(1)]);
if((state_val_31544 === (7))){
var inst_31539 = (state_31543[(2)]);
var state_31543__$1 = state_31543;
var statearr_31545_31563 = state_31543__$1;
(statearr_31545_31563[(2)] = inst_31539);

(statearr_31545_31563[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31544 === (1))){
var state_31543__$1 = state_31543;
var statearr_31546_31564 = state_31543__$1;
(statearr_31546_31564[(2)] = null);

(statearr_31546_31564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31544 === (4))){
var inst_31525 = (state_31543[(7)]);
var inst_31525__$1 = (state_31543[(2)]);
var inst_31526 = (inst_31525__$1 == null);
var state_31543__$1 = (function (){var statearr_31547 = state_31543;
(statearr_31547[(7)] = inst_31525__$1);

return statearr_31547;
})();
if(cljs.core.truth_(inst_31526)){
var statearr_31548_31565 = state_31543__$1;
(statearr_31548_31565[(1)] = (5));

} else {
var statearr_31549_31566 = state_31543__$1;
(statearr_31549_31566[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31544 === (6))){
var inst_31525 = (state_31543[(7)]);
var inst_31530 = p.call(null,inst_31525);
var state_31543__$1 = state_31543;
if(cljs.core.truth_(inst_31530)){
var statearr_31550_31567 = state_31543__$1;
(statearr_31550_31567[(1)] = (8));

} else {
var statearr_31551_31568 = state_31543__$1;
(statearr_31551_31568[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31544 === (3))){
var inst_31541 = (state_31543[(2)]);
var state_31543__$1 = state_31543;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31543__$1,inst_31541);
} else {
if((state_val_31544 === (2))){
var state_31543__$1 = state_31543;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31543__$1,(4),ch);
} else {
if((state_val_31544 === (11))){
var inst_31533 = (state_31543[(2)]);
var state_31543__$1 = state_31543;
var statearr_31552_31569 = state_31543__$1;
(statearr_31552_31569[(2)] = inst_31533);

(statearr_31552_31569[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31544 === (9))){
var state_31543__$1 = state_31543;
var statearr_31553_31570 = state_31543__$1;
(statearr_31553_31570[(2)] = null);

(statearr_31553_31570[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31544 === (5))){
var inst_31528 = cljs.core.async.close_BANG_.call(null,out);
var state_31543__$1 = state_31543;
var statearr_31554_31571 = state_31543__$1;
(statearr_31554_31571[(2)] = inst_31528);

(statearr_31554_31571[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31544 === (10))){
var inst_31536 = (state_31543[(2)]);
var state_31543__$1 = (function (){var statearr_31555 = state_31543;
(statearr_31555[(8)] = inst_31536);

return statearr_31555;
})();
var statearr_31556_31572 = state_31543__$1;
(statearr_31556_31572[(2)] = null);

(statearr_31556_31572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31544 === (8))){
var inst_31525 = (state_31543[(7)]);
var state_31543__$1 = state_31543;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31543__$1,(11),out,inst_31525);
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
});})(c__30037__auto___31562,out))
;
return ((function (switch__29949__auto__,c__30037__auto___31562,out){
return (function() {
var cljs$core$async$state_machine__29950__auto__ = null;
var cljs$core$async$state_machine__29950__auto____0 = (function (){
var statearr_31557 = [null,null,null,null,null,null,null,null,null];
(statearr_31557[(0)] = cljs$core$async$state_machine__29950__auto__);

(statearr_31557[(1)] = (1));

return statearr_31557;
});
var cljs$core$async$state_machine__29950__auto____1 = (function (state_31543){
while(true){
var ret_value__29951__auto__ = (function (){try{while(true){
var result__29952__auto__ = switch__29949__auto__.call(null,state_31543);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29952__auto__;
}
break;
}
}catch (e31558){if((e31558 instanceof Object)){
var ex__29953__auto__ = e31558;
var statearr_31559_31573 = state_31543;
(statearr_31559_31573[(5)] = ex__29953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31543);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31558;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31574 = state_31543;
state_31543 = G__31574;
continue;
} else {
return ret_value__29951__auto__;
}
break;
}
});
cljs$core$async$state_machine__29950__auto__ = function(state_31543){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29950__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29950__auto____1.call(this,state_31543);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29950__auto____0;
cljs$core$async$state_machine__29950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29950__auto____1;
return cljs$core$async$state_machine__29950__auto__;
})()
;})(switch__29949__auto__,c__30037__auto___31562,out))
})();
var state__30039__auto__ = (function (){var statearr_31560 = f__30038__auto__.call(null);
(statearr_31560[(6)] = c__30037__auto___31562);

return statearr_31560;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30039__auto__);
});})(c__30037__auto___31562,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__31576 = arguments.length;
switch (G__31576) {
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
var c__30037__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30037__auto__){
return (function (){
var f__30038__auto__ = (function (){var switch__29949__auto__ = ((function (c__30037__auto__){
return (function (state_31639){
var state_val_31640 = (state_31639[(1)]);
if((state_val_31640 === (7))){
var inst_31635 = (state_31639[(2)]);
var state_31639__$1 = state_31639;
var statearr_31641_31679 = state_31639__$1;
(statearr_31641_31679[(2)] = inst_31635);

(statearr_31641_31679[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31640 === (20))){
var inst_31605 = (state_31639[(7)]);
var inst_31616 = (state_31639[(2)]);
var inst_31617 = cljs.core.next.call(null,inst_31605);
var inst_31591 = inst_31617;
var inst_31592 = null;
var inst_31593 = (0);
var inst_31594 = (0);
var state_31639__$1 = (function (){var statearr_31642 = state_31639;
(statearr_31642[(8)] = inst_31591);

(statearr_31642[(9)] = inst_31594);

(statearr_31642[(10)] = inst_31593);

(statearr_31642[(11)] = inst_31616);

(statearr_31642[(12)] = inst_31592);

return statearr_31642;
})();
var statearr_31643_31680 = state_31639__$1;
(statearr_31643_31680[(2)] = null);

(statearr_31643_31680[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31640 === (1))){
var state_31639__$1 = state_31639;
var statearr_31644_31681 = state_31639__$1;
(statearr_31644_31681[(2)] = null);

(statearr_31644_31681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31640 === (4))){
var inst_31580 = (state_31639[(13)]);
var inst_31580__$1 = (state_31639[(2)]);
var inst_31581 = (inst_31580__$1 == null);
var state_31639__$1 = (function (){var statearr_31645 = state_31639;
(statearr_31645[(13)] = inst_31580__$1);

return statearr_31645;
})();
if(cljs.core.truth_(inst_31581)){
var statearr_31646_31682 = state_31639__$1;
(statearr_31646_31682[(1)] = (5));

} else {
var statearr_31647_31683 = state_31639__$1;
(statearr_31647_31683[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31640 === (15))){
var state_31639__$1 = state_31639;
var statearr_31651_31684 = state_31639__$1;
(statearr_31651_31684[(2)] = null);

(statearr_31651_31684[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31640 === (21))){
var state_31639__$1 = state_31639;
var statearr_31652_31685 = state_31639__$1;
(statearr_31652_31685[(2)] = null);

(statearr_31652_31685[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31640 === (13))){
var inst_31591 = (state_31639[(8)]);
var inst_31594 = (state_31639[(9)]);
var inst_31593 = (state_31639[(10)]);
var inst_31592 = (state_31639[(12)]);
var inst_31601 = (state_31639[(2)]);
var inst_31602 = (inst_31594 + (1));
var tmp31648 = inst_31591;
var tmp31649 = inst_31593;
var tmp31650 = inst_31592;
var inst_31591__$1 = tmp31648;
var inst_31592__$1 = tmp31650;
var inst_31593__$1 = tmp31649;
var inst_31594__$1 = inst_31602;
var state_31639__$1 = (function (){var statearr_31653 = state_31639;
(statearr_31653[(14)] = inst_31601);

(statearr_31653[(8)] = inst_31591__$1);

(statearr_31653[(9)] = inst_31594__$1);

(statearr_31653[(10)] = inst_31593__$1);

(statearr_31653[(12)] = inst_31592__$1);

return statearr_31653;
})();
var statearr_31654_31686 = state_31639__$1;
(statearr_31654_31686[(2)] = null);

(statearr_31654_31686[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31640 === (22))){
var state_31639__$1 = state_31639;
var statearr_31655_31687 = state_31639__$1;
(statearr_31655_31687[(2)] = null);

(statearr_31655_31687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31640 === (6))){
var inst_31580 = (state_31639[(13)]);
var inst_31589 = f.call(null,inst_31580);
var inst_31590 = cljs.core.seq.call(null,inst_31589);
var inst_31591 = inst_31590;
var inst_31592 = null;
var inst_31593 = (0);
var inst_31594 = (0);
var state_31639__$1 = (function (){var statearr_31656 = state_31639;
(statearr_31656[(8)] = inst_31591);

(statearr_31656[(9)] = inst_31594);

(statearr_31656[(10)] = inst_31593);

(statearr_31656[(12)] = inst_31592);

return statearr_31656;
})();
var statearr_31657_31688 = state_31639__$1;
(statearr_31657_31688[(2)] = null);

(statearr_31657_31688[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31640 === (17))){
var inst_31605 = (state_31639[(7)]);
var inst_31609 = cljs.core.chunk_first.call(null,inst_31605);
var inst_31610 = cljs.core.chunk_rest.call(null,inst_31605);
var inst_31611 = cljs.core.count.call(null,inst_31609);
var inst_31591 = inst_31610;
var inst_31592 = inst_31609;
var inst_31593 = inst_31611;
var inst_31594 = (0);
var state_31639__$1 = (function (){var statearr_31658 = state_31639;
(statearr_31658[(8)] = inst_31591);

(statearr_31658[(9)] = inst_31594);

(statearr_31658[(10)] = inst_31593);

(statearr_31658[(12)] = inst_31592);

return statearr_31658;
})();
var statearr_31659_31689 = state_31639__$1;
(statearr_31659_31689[(2)] = null);

(statearr_31659_31689[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31640 === (3))){
var inst_31637 = (state_31639[(2)]);
var state_31639__$1 = state_31639;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31639__$1,inst_31637);
} else {
if((state_val_31640 === (12))){
var inst_31625 = (state_31639[(2)]);
var state_31639__$1 = state_31639;
var statearr_31660_31690 = state_31639__$1;
(statearr_31660_31690[(2)] = inst_31625);

(statearr_31660_31690[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31640 === (2))){
var state_31639__$1 = state_31639;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31639__$1,(4),in$);
} else {
if((state_val_31640 === (23))){
var inst_31633 = (state_31639[(2)]);
var state_31639__$1 = state_31639;
var statearr_31661_31691 = state_31639__$1;
(statearr_31661_31691[(2)] = inst_31633);

(statearr_31661_31691[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31640 === (19))){
var inst_31620 = (state_31639[(2)]);
var state_31639__$1 = state_31639;
var statearr_31662_31692 = state_31639__$1;
(statearr_31662_31692[(2)] = inst_31620);

(statearr_31662_31692[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31640 === (11))){
var inst_31605 = (state_31639[(7)]);
var inst_31591 = (state_31639[(8)]);
var inst_31605__$1 = cljs.core.seq.call(null,inst_31591);
var state_31639__$1 = (function (){var statearr_31663 = state_31639;
(statearr_31663[(7)] = inst_31605__$1);

return statearr_31663;
})();
if(inst_31605__$1){
var statearr_31664_31693 = state_31639__$1;
(statearr_31664_31693[(1)] = (14));

} else {
var statearr_31665_31694 = state_31639__$1;
(statearr_31665_31694[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31640 === (9))){
var inst_31627 = (state_31639[(2)]);
var inst_31628 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_31639__$1 = (function (){var statearr_31666 = state_31639;
(statearr_31666[(15)] = inst_31627);

return statearr_31666;
})();
if(cljs.core.truth_(inst_31628)){
var statearr_31667_31695 = state_31639__$1;
(statearr_31667_31695[(1)] = (21));

} else {
var statearr_31668_31696 = state_31639__$1;
(statearr_31668_31696[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31640 === (5))){
var inst_31583 = cljs.core.async.close_BANG_.call(null,out);
var state_31639__$1 = state_31639;
var statearr_31669_31697 = state_31639__$1;
(statearr_31669_31697[(2)] = inst_31583);

(statearr_31669_31697[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31640 === (14))){
var inst_31605 = (state_31639[(7)]);
var inst_31607 = cljs.core.chunked_seq_QMARK_.call(null,inst_31605);
var state_31639__$1 = state_31639;
if(inst_31607){
var statearr_31670_31698 = state_31639__$1;
(statearr_31670_31698[(1)] = (17));

} else {
var statearr_31671_31699 = state_31639__$1;
(statearr_31671_31699[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31640 === (16))){
var inst_31623 = (state_31639[(2)]);
var state_31639__$1 = state_31639;
var statearr_31672_31700 = state_31639__$1;
(statearr_31672_31700[(2)] = inst_31623);

(statearr_31672_31700[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31640 === (10))){
var inst_31594 = (state_31639[(9)]);
var inst_31592 = (state_31639[(12)]);
var inst_31599 = cljs.core._nth.call(null,inst_31592,inst_31594);
var state_31639__$1 = state_31639;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31639__$1,(13),out,inst_31599);
} else {
if((state_val_31640 === (18))){
var inst_31605 = (state_31639[(7)]);
var inst_31614 = cljs.core.first.call(null,inst_31605);
var state_31639__$1 = state_31639;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31639__$1,(20),out,inst_31614);
} else {
if((state_val_31640 === (8))){
var inst_31594 = (state_31639[(9)]);
var inst_31593 = (state_31639[(10)]);
var inst_31596 = (inst_31594 < inst_31593);
var inst_31597 = inst_31596;
var state_31639__$1 = state_31639;
if(cljs.core.truth_(inst_31597)){
var statearr_31673_31701 = state_31639__$1;
(statearr_31673_31701[(1)] = (10));

} else {
var statearr_31674_31702 = state_31639__$1;
(statearr_31674_31702[(1)] = (11));

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
});})(c__30037__auto__))
;
return ((function (switch__29949__auto__,c__30037__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29950__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29950__auto____0 = (function (){
var statearr_31675 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31675[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29950__auto__);

(statearr_31675[(1)] = (1));

return statearr_31675;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29950__auto____1 = (function (state_31639){
while(true){
var ret_value__29951__auto__ = (function (){try{while(true){
var result__29952__auto__ = switch__29949__auto__.call(null,state_31639);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29952__auto__;
}
break;
}
}catch (e31676){if((e31676 instanceof Object)){
var ex__29953__auto__ = e31676;
var statearr_31677_31703 = state_31639;
(statearr_31677_31703[(5)] = ex__29953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31639);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31676;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31704 = state_31639;
state_31639 = G__31704;
continue;
} else {
return ret_value__29951__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29950__auto__ = function(state_31639){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29950__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29950__auto____1.call(this,state_31639);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__29950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29950__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29950__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29950__auto__;
})()
;})(switch__29949__auto__,c__30037__auto__))
})();
var state__30039__auto__ = (function (){var statearr_31678 = f__30038__auto__.call(null);
(statearr_31678[(6)] = c__30037__auto__);

return statearr_31678;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30039__auto__);
});})(c__30037__auto__))
);

return c__30037__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__31706 = arguments.length;
switch (G__31706) {
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
var G__31709 = arguments.length;
switch (G__31709) {
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
var G__31712 = arguments.length;
switch (G__31712) {
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
var c__30037__auto___31759 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30037__auto___31759,out){
return (function (){
var f__30038__auto__ = (function (){var switch__29949__auto__ = ((function (c__30037__auto___31759,out){
return (function (state_31736){
var state_val_31737 = (state_31736[(1)]);
if((state_val_31737 === (7))){
var inst_31731 = (state_31736[(2)]);
var state_31736__$1 = state_31736;
var statearr_31738_31760 = state_31736__$1;
(statearr_31738_31760[(2)] = inst_31731);

(statearr_31738_31760[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31737 === (1))){
var inst_31713 = null;
var state_31736__$1 = (function (){var statearr_31739 = state_31736;
(statearr_31739[(7)] = inst_31713);

return statearr_31739;
})();
var statearr_31740_31761 = state_31736__$1;
(statearr_31740_31761[(2)] = null);

(statearr_31740_31761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31737 === (4))){
var inst_31716 = (state_31736[(8)]);
var inst_31716__$1 = (state_31736[(2)]);
var inst_31717 = (inst_31716__$1 == null);
var inst_31718 = cljs.core.not.call(null,inst_31717);
var state_31736__$1 = (function (){var statearr_31741 = state_31736;
(statearr_31741[(8)] = inst_31716__$1);

return statearr_31741;
})();
if(inst_31718){
var statearr_31742_31762 = state_31736__$1;
(statearr_31742_31762[(1)] = (5));

} else {
var statearr_31743_31763 = state_31736__$1;
(statearr_31743_31763[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31737 === (6))){
var state_31736__$1 = state_31736;
var statearr_31744_31764 = state_31736__$1;
(statearr_31744_31764[(2)] = null);

(statearr_31744_31764[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31737 === (3))){
var inst_31733 = (state_31736[(2)]);
var inst_31734 = cljs.core.async.close_BANG_.call(null,out);
var state_31736__$1 = (function (){var statearr_31745 = state_31736;
(statearr_31745[(9)] = inst_31733);

return statearr_31745;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31736__$1,inst_31734);
} else {
if((state_val_31737 === (2))){
var state_31736__$1 = state_31736;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31736__$1,(4),ch);
} else {
if((state_val_31737 === (11))){
var inst_31716 = (state_31736[(8)]);
var inst_31725 = (state_31736[(2)]);
var inst_31713 = inst_31716;
var state_31736__$1 = (function (){var statearr_31746 = state_31736;
(statearr_31746[(10)] = inst_31725);

(statearr_31746[(7)] = inst_31713);

return statearr_31746;
})();
var statearr_31747_31765 = state_31736__$1;
(statearr_31747_31765[(2)] = null);

(statearr_31747_31765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31737 === (9))){
var inst_31716 = (state_31736[(8)]);
var state_31736__$1 = state_31736;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31736__$1,(11),out,inst_31716);
} else {
if((state_val_31737 === (5))){
var inst_31716 = (state_31736[(8)]);
var inst_31713 = (state_31736[(7)]);
var inst_31720 = cljs.core._EQ_.call(null,inst_31716,inst_31713);
var state_31736__$1 = state_31736;
if(inst_31720){
var statearr_31749_31766 = state_31736__$1;
(statearr_31749_31766[(1)] = (8));

} else {
var statearr_31750_31767 = state_31736__$1;
(statearr_31750_31767[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31737 === (10))){
var inst_31728 = (state_31736[(2)]);
var state_31736__$1 = state_31736;
var statearr_31751_31768 = state_31736__$1;
(statearr_31751_31768[(2)] = inst_31728);

(statearr_31751_31768[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31737 === (8))){
var inst_31713 = (state_31736[(7)]);
var tmp31748 = inst_31713;
var inst_31713__$1 = tmp31748;
var state_31736__$1 = (function (){var statearr_31752 = state_31736;
(statearr_31752[(7)] = inst_31713__$1);

return statearr_31752;
})();
var statearr_31753_31769 = state_31736__$1;
(statearr_31753_31769[(2)] = null);

(statearr_31753_31769[(1)] = (2));


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
});})(c__30037__auto___31759,out))
;
return ((function (switch__29949__auto__,c__30037__auto___31759,out){
return (function() {
var cljs$core$async$state_machine__29950__auto__ = null;
var cljs$core$async$state_machine__29950__auto____0 = (function (){
var statearr_31754 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31754[(0)] = cljs$core$async$state_machine__29950__auto__);

(statearr_31754[(1)] = (1));

return statearr_31754;
});
var cljs$core$async$state_machine__29950__auto____1 = (function (state_31736){
while(true){
var ret_value__29951__auto__ = (function (){try{while(true){
var result__29952__auto__ = switch__29949__auto__.call(null,state_31736);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29952__auto__;
}
break;
}
}catch (e31755){if((e31755 instanceof Object)){
var ex__29953__auto__ = e31755;
var statearr_31756_31770 = state_31736;
(statearr_31756_31770[(5)] = ex__29953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31736);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31755;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31771 = state_31736;
state_31736 = G__31771;
continue;
} else {
return ret_value__29951__auto__;
}
break;
}
});
cljs$core$async$state_machine__29950__auto__ = function(state_31736){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29950__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29950__auto____1.call(this,state_31736);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29950__auto____0;
cljs$core$async$state_machine__29950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29950__auto____1;
return cljs$core$async$state_machine__29950__auto__;
})()
;})(switch__29949__auto__,c__30037__auto___31759,out))
})();
var state__30039__auto__ = (function (){var statearr_31757 = f__30038__auto__.call(null);
(statearr_31757[(6)] = c__30037__auto___31759);

return statearr_31757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30039__auto__);
});})(c__30037__auto___31759,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__31773 = arguments.length;
switch (G__31773) {
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
var c__30037__auto___31839 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30037__auto___31839,out){
return (function (){
var f__30038__auto__ = (function (){var switch__29949__auto__ = ((function (c__30037__auto___31839,out){
return (function (state_31811){
var state_val_31812 = (state_31811[(1)]);
if((state_val_31812 === (7))){
var inst_31807 = (state_31811[(2)]);
var state_31811__$1 = state_31811;
var statearr_31813_31840 = state_31811__$1;
(statearr_31813_31840[(2)] = inst_31807);

(statearr_31813_31840[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31812 === (1))){
var inst_31774 = (new Array(n));
var inst_31775 = inst_31774;
var inst_31776 = (0);
var state_31811__$1 = (function (){var statearr_31814 = state_31811;
(statearr_31814[(7)] = inst_31775);

(statearr_31814[(8)] = inst_31776);

return statearr_31814;
})();
var statearr_31815_31841 = state_31811__$1;
(statearr_31815_31841[(2)] = null);

(statearr_31815_31841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31812 === (4))){
var inst_31779 = (state_31811[(9)]);
var inst_31779__$1 = (state_31811[(2)]);
var inst_31780 = (inst_31779__$1 == null);
var inst_31781 = cljs.core.not.call(null,inst_31780);
var state_31811__$1 = (function (){var statearr_31816 = state_31811;
(statearr_31816[(9)] = inst_31779__$1);

return statearr_31816;
})();
if(inst_31781){
var statearr_31817_31842 = state_31811__$1;
(statearr_31817_31842[(1)] = (5));

} else {
var statearr_31818_31843 = state_31811__$1;
(statearr_31818_31843[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31812 === (15))){
var inst_31801 = (state_31811[(2)]);
var state_31811__$1 = state_31811;
var statearr_31819_31844 = state_31811__$1;
(statearr_31819_31844[(2)] = inst_31801);

(statearr_31819_31844[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31812 === (13))){
var state_31811__$1 = state_31811;
var statearr_31820_31845 = state_31811__$1;
(statearr_31820_31845[(2)] = null);

(statearr_31820_31845[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31812 === (6))){
var inst_31776 = (state_31811[(8)]);
var inst_31797 = (inst_31776 > (0));
var state_31811__$1 = state_31811;
if(cljs.core.truth_(inst_31797)){
var statearr_31821_31846 = state_31811__$1;
(statearr_31821_31846[(1)] = (12));

} else {
var statearr_31822_31847 = state_31811__$1;
(statearr_31822_31847[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31812 === (3))){
var inst_31809 = (state_31811[(2)]);
var state_31811__$1 = state_31811;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31811__$1,inst_31809);
} else {
if((state_val_31812 === (12))){
var inst_31775 = (state_31811[(7)]);
var inst_31799 = cljs.core.vec.call(null,inst_31775);
var state_31811__$1 = state_31811;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31811__$1,(15),out,inst_31799);
} else {
if((state_val_31812 === (2))){
var state_31811__$1 = state_31811;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31811__$1,(4),ch);
} else {
if((state_val_31812 === (11))){
var inst_31791 = (state_31811[(2)]);
var inst_31792 = (new Array(n));
var inst_31775 = inst_31792;
var inst_31776 = (0);
var state_31811__$1 = (function (){var statearr_31823 = state_31811;
(statearr_31823[(10)] = inst_31791);

(statearr_31823[(7)] = inst_31775);

(statearr_31823[(8)] = inst_31776);

return statearr_31823;
})();
var statearr_31824_31848 = state_31811__$1;
(statearr_31824_31848[(2)] = null);

(statearr_31824_31848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31812 === (9))){
var inst_31775 = (state_31811[(7)]);
var inst_31789 = cljs.core.vec.call(null,inst_31775);
var state_31811__$1 = state_31811;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31811__$1,(11),out,inst_31789);
} else {
if((state_val_31812 === (5))){
var inst_31779 = (state_31811[(9)]);
var inst_31775 = (state_31811[(7)]);
var inst_31784 = (state_31811[(11)]);
var inst_31776 = (state_31811[(8)]);
var inst_31783 = (inst_31775[inst_31776] = inst_31779);
var inst_31784__$1 = (inst_31776 + (1));
var inst_31785 = (inst_31784__$1 < n);
var state_31811__$1 = (function (){var statearr_31825 = state_31811;
(statearr_31825[(11)] = inst_31784__$1);

(statearr_31825[(12)] = inst_31783);

return statearr_31825;
})();
if(cljs.core.truth_(inst_31785)){
var statearr_31826_31849 = state_31811__$1;
(statearr_31826_31849[(1)] = (8));

} else {
var statearr_31827_31850 = state_31811__$1;
(statearr_31827_31850[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31812 === (14))){
var inst_31804 = (state_31811[(2)]);
var inst_31805 = cljs.core.async.close_BANG_.call(null,out);
var state_31811__$1 = (function (){var statearr_31829 = state_31811;
(statearr_31829[(13)] = inst_31804);

return statearr_31829;
})();
var statearr_31830_31851 = state_31811__$1;
(statearr_31830_31851[(2)] = inst_31805);

(statearr_31830_31851[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31812 === (10))){
var inst_31795 = (state_31811[(2)]);
var state_31811__$1 = state_31811;
var statearr_31831_31852 = state_31811__$1;
(statearr_31831_31852[(2)] = inst_31795);

(statearr_31831_31852[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31812 === (8))){
var inst_31775 = (state_31811[(7)]);
var inst_31784 = (state_31811[(11)]);
var tmp31828 = inst_31775;
var inst_31775__$1 = tmp31828;
var inst_31776 = inst_31784;
var state_31811__$1 = (function (){var statearr_31832 = state_31811;
(statearr_31832[(7)] = inst_31775__$1);

(statearr_31832[(8)] = inst_31776);

return statearr_31832;
})();
var statearr_31833_31853 = state_31811__$1;
(statearr_31833_31853[(2)] = null);

(statearr_31833_31853[(1)] = (2));


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
});})(c__30037__auto___31839,out))
;
return ((function (switch__29949__auto__,c__30037__auto___31839,out){
return (function() {
var cljs$core$async$state_machine__29950__auto__ = null;
var cljs$core$async$state_machine__29950__auto____0 = (function (){
var statearr_31834 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31834[(0)] = cljs$core$async$state_machine__29950__auto__);

(statearr_31834[(1)] = (1));

return statearr_31834;
});
var cljs$core$async$state_machine__29950__auto____1 = (function (state_31811){
while(true){
var ret_value__29951__auto__ = (function (){try{while(true){
var result__29952__auto__ = switch__29949__auto__.call(null,state_31811);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29952__auto__;
}
break;
}
}catch (e31835){if((e31835 instanceof Object)){
var ex__29953__auto__ = e31835;
var statearr_31836_31854 = state_31811;
(statearr_31836_31854[(5)] = ex__29953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31811);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31835;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31855 = state_31811;
state_31811 = G__31855;
continue;
} else {
return ret_value__29951__auto__;
}
break;
}
});
cljs$core$async$state_machine__29950__auto__ = function(state_31811){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29950__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29950__auto____1.call(this,state_31811);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29950__auto____0;
cljs$core$async$state_machine__29950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29950__auto____1;
return cljs$core$async$state_machine__29950__auto__;
})()
;})(switch__29949__auto__,c__30037__auto___31839,out))
})();
var state__30039__auto__ = (function (){var statearr_31837 = f__30038__auto__.call(null);
(statearr_31837[(6)] = c__30037__auto___31839);

return statearr_31837;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30039__auto__);
});})(c__30037__auto___31839,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__31857 = arguments.length;
switch (G__31857) {
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
var c__30037__auto___31927 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30037__auto___31927,out){
return (function (){
var f__30038__auto__ = (function (){var switch__29949__auto__ = ((function (c__30037__auto___31927,out){
return (function (state_31899){
var state_val_31900 = (state_31899[(1)]);
if((state_val_31900 === (7))){
var inst_31895 = (state_31899[(2)]);
var state_31899__$1 = state_31899;
var statearr_31901_31928 = state_31899__$1;
(statearr_31901_31928[(2)] = inst_31895);

(statearr_31901_31928[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31900 === (1))){
var inst_31858 = [];
var inst_31859 = inst_31858;
var inst_31860 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31899__$1 = (function (){var statearr_31902 = state_31899;
(statearr_31902[(7)] = inst_31859);

(statearr_31902[(8)] = inst_31860);

return statearr_31902;
})();
var statearr_31903_31929 = state_31899__$1;
(statearr_31903_31929[(2)] = null);

(statearr_31903_31929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31900 === (4))){
var inst_31863 = (state_31899[(9)]);
var inst_31863__$1 = (state_31899[(2)]);
var inst_31864 = (inst_31863__$1 == null);
var inst_31865 = cljs.core.not.call(null,inst_31864);
var state_31899__$1 = (function (){var statearr_31904 = state_31899;
(statearr_31904[(9)] = inst_31863__$1);

return statearr_31904;
})();
if(inst_31865){
var statearr_31905_31930 = state_31899__$1;
(statearr_31905_31930[(1)] = (5));

} else {
var statearr_31906_31931 = state_31899__$1;
(statearr_31906_31931[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31900 === (15))){
var inst_31889 = (state_31899[(2)]);
var state_31899__$1 = state_31899;
var statearr_31907_31932 = state_31899__$1;
(statearr_31907_31932[(2)] = inst_31889);

(statearr_31907_31932[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31900 === (13))){
var state_31899__$1 = state_31899;
var statearr_31908_31933 = state_31899__$1;
(statearr_31908_31933[(2)] = null);

(statearr_31908_31933[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31900 === (6))){
var inst_31859 = (state_31899[(7)]);
var inst_31884 = inst_31859.length;
var inst_31885 = (inst_31884 > (0));
var state_31899__$1 = state_31899;
if(cljs.core.truth_(inst_31885)){
var statearr_31909_31934 = state_31899__$1;
(statearr_31909_31934[(1)] = (12));

} else {
var statearr_31910_31935 = state_31899__$1;
(statearr_31910_31935[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31900 === (3))){
var inst_31897 = (state_31899[(2)]);
var state_31899__$1 = state_31899;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31899__$1,inst_31897);
} else {
if((state_val_31900 === (12))){
var inst_31859 = (state_31899[(7)]);
var inst_31887 = cljs.core.vec.call(null,inst_31859);
var state_31899__$1 = state_31899;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31899__$1,(15),out,inst_31887);
} else {
if((state_val_31900 === (2))){
var state_31899__$1 = state_31899;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31899__$1,(4),ch);
} else {
if((state_val_31900 === (11))){
var inst_31863 = (state_31899[(9)]);
var inst_31867 = (state_31899[(10)]);
var inst_31877 = (state_31899[(2)]);
var inst_31878 = [];
var inst_31879 = inst_31878.push(inst_31863);
var inst_31859 = inst_31878;
var inst_31860 = inst_31867;
var state_31899__$1 = (function (){var statearr_31911 = state_31899;
(statearr_31911[(11)] = inst_31879);

(statearr_31911[(7)] = inst_31859);

(statearr_31911[(8)] = inst_31860);

(statearr_31911[(12)] = inst_31877);

return statearr_31911;
})();
var statearr_31912_31936 = state_31899__$1;
(statearr_31912_31936[(2)] = null);

(statearr_31912_31936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31900 === (9))){
var inst_31859 = (state_31899[(7)]);
var inst_31875 = cljs.core.vec.call(null,inst_31859);
var state_31899__$1 = state_31899;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31899__$1,(11),out,inst_31875);
} else {
if((state_val_31900 === (5))){
var inst_31863 = (state_31899[(9)]);
var inst_31860 = (state_31899[(8)]);
var inst_31867 = (state_31899[(10)]);
var inst_31867__$1 = f.call(null,inst_31863);
var inst_31868 = cljs.core._EQ_.call(null,inst_31867__$1,inst_31860);
var inst_31869 = cljs.core.keyword_identical_QMARK_.call(null,inst_31860,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_31870 = (inst_31868) || (inst_31869);
var state_31899__$1 = (function (){var statearr_31913 = state_31899;
(statearr_31913[(10)] = inst_31867__$1);

return statearr_31913;
})();
if(cljs.core.truth_(inst_31870)){
var statearr_31914_31937 = state_31899__$1;
(statearr_31914_31937[(1)] = (8));

} else {
var statearr_31915_31938 = state_31899__$1;
(statearr_31915_31938[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31900 === (14))){
var inst_31892 = (state_31899[(2)]);
var inst_31893 = cljs.core.async.close_BANG_.call(null,out);
var state_31899__$1 = (function (){var statearr_31917 = state_31899;
(statearr_31917[(13)] = inst_31892);

return statearr_31917;
})();
var statearr_31918_31939 = state_31899__$1;
(statearr_31918_31939[(2)] = inst_31893);

(statearr_31918_31939[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31900 === (10))){
var inst_31882 = (state_31899[(2)]);
var state_31899__$1 = state_31899;
var statearr_31919_31940 = state_31899__$1;
(statearr_31919_31940[(2)] = inst_31882);

(statearr_31919_31940[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31900 === (8))){
var inst_31863 = (state_31899[(9)]);
var inst_31859 = (state_31899[(7)]);
var inst_31867 = (state_31899[(10)]);
var inst_31872 = inst_31859.push(inst_31863);
var tmp31916 = inst_31859;
var inst_31859__$1 = tmp31916;
var inst_31860 = inst_31867;
var state_31899__$1 = (function (){var statearr_31920 = state_31899;
(statearr_31920[(7)] = inst_31859__$1);

(statearr_31920[(8)] = inst_31860);

(statearr_31920[(14)] = inst_31872);

return statearr_31920;
})();
var statearr_31921_31941 = state_31899__$1;
(statearr_31921_31941[(2)] = null);

(statearr_31921_31941[(1)] = (2));


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
});})(c__30037__auto___31927,out))
;
return ((function (switch__29949__auto__,c__30037__auto___31927,out){
return (function() {
var cljs$core$async$state_machine__29950__auto__ = null;
var cljs$core$async$state_machine__29950__auto____0 = (function (){
var statearr_31922 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31922[(0)] = cljs$core$async$state_machine__29950__auto__);

(statearr_31922[(1)] = (1));

return statearr_31922;
});
var cljs$core$async$state_machine__29950__auto____1 = (function (state_31899){
while(true){
var ret_value__29951__auto__ = (function (){try{while(true){
var result__29952__auto__ = switch__29949__auto__.call(null,state_31899);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29952__auto__;
}
break;
}
}catch (e31923){if((e31923 instanceof Object)){
var ex__29953__auto__ = e31923;
var statearr_31924_31942 = state_31899;
(statearr_31924_31942[(5)] = ex__29953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31899);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31923;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31943 = state_31899;
state_31899 = G__31943;
continue;
} else {
return ret_value__29951__auto__;
}
break;
}
});
cljs$core$async$state_machine__29950__auto__ = function(state_31899){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29950__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29950__auto____1.call(this,state_31899);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29950__auto____0;
cljs$core$async$state_machine__29950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29950__auto____1;
return cljs$core$async$state_machine__29950__auto__;
})()
;})(switch__29949__auto__,c__30037__auto___31927,out))
})();
var state__30039__auto__ = (function (){var statearr_31925 = f__30038__auto__.call(null);
(statearr_31925[(6)] = c__30037__auto___31927);

return statearr_31925;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30039__auto__);
});})(c__30037__auto___31927,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1500852796350