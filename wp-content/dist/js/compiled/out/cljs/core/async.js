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
var G__43175 = arguments.length;
switch (G__43175) {
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
if(typeof cljs.core.async.t_cljs$core$async43176 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43176 = (function (f,blockable,meta43177){
this.f = f;
this.blockable = blockable;
this.meta43177 = meta43177;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43176.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43178,meta43177__$1){
var self__ = this;
var _43178__$1 = this;
return (new cljs.core.async.t_cljs$core$async43176(self__.f,self__.blockable,meta43177__$1));
});

cljs.core.async.t_cljs$core$async43176.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43178){
var self__ = this;
var _43178__$1 = this;
return self__.meta43177;
});

cljs.core.async.t_cljs$core$async43176.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43176.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async43176.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async43176.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async43176.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta43177","meta43177",801847329,null)], null);
});

cljs.core.async.t_cljs$core$async43176.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43176.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43176";

cljs.core.async.t_cljs$core$async43176.cljs$lang$ctorPrWriter = (function (this__37367__auto__,writer__37368__auto__,opt__37369__auto__){
return cljs.core._write.call(null,writer__37368__auto__,"cljs.core.async/t_cljs$core$async43176");
});

cljs.core.async.__GT_t_cljs$core$async43176 = (function cljs$core$async$__GT_t_cljs$core$async43176(f__$1,blockable__$1,meta43177){
return (new cljs.core.async.t_cljs$core$async43176(f__$1,blockable__$1,meta43177));
});

}

return (new cljs.core.async.t_cljs$core$async43176(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__43182 = arguments.length;
switch (G__43182) {
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
var G__43185 = arguments.length;
switch (G__43185) {
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
var G__43188 = arguments.length;
switch (G__43188) {
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
var val_43190 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_43190);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_43190,ret){
return (function (){
return fn1.call(null,val_43190);
});})(val_43190,ret))
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
var G__43192 = arguments.length;
switch (G__43192) {
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
var n__37680__auto___43194 = n;
var x_43195 = (0);
while(true){
if((x_43195 < n__37680__auto___43194)){
(a[x_43195] = (0));

var G__43196 = (x_43195 + (1));
x_43195 = G__43196;
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

var G__43197 = (i + (1));
i = G__43197;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async43198 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43198 = (function (flag,meta43199){
this.flag = flag;
this.meta43199 = meta43199;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43198.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_43200,meta43199__$1){
var self__ = this;
var _43200__$1 = this;
return (new cljs.core.async.t_cljs$core$async43198(self__.flag,meta43199__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async43198.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_43200){
var self__ = this;
var _43200__$1 = this;
return self__.meta43199;
});})(flag))
;

cljs.core.async.t_cljs$core$async43198.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43198.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async43198.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async43198.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async43198.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta43199","meta43199",1722340379,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async43198.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43198.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43198";

cljs.core.async.t_cljs$core$async43198.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__37367__auto__,writer__37368__auto__,opt__37369__auto__){
return cljs.core._write.call(null,writer__37368__auto__,"cljs.core.async/t_cljs$core$async43198");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async43198 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async43198(flag__$1,meta43199){
return (new cljs.core.async.t_cljs$core$async43198(flag__$1,meta43199));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async43198(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async43201 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43201 = (function (flag,cb,meta43202){
this.flag = flag;
this.cb = cb;
this.meta43202 = meta43202;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43201.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43203,meta43202__$1){
var self__ = this;
var _43203__$1 = this;
return (new cljs.core.async.t_cljs$core$async43201(self__.flag,self__.cb,meta43202__$1));
});

cljs.core.async.t_cljs$core$async43201.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43203){
var self__ = this;
var _43203__$1 = this;
return self__.meta43202;
});

cljs.core.async.t_cljs$core$async43201.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43201.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async43201.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async43201.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async43201.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta43202","meta43202",-537487970,null)], null);
});

cljs.core.async.t_cljs$core$async43201.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43201.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43201";

cljs.core.async.t_cljs$core$async43201.cljs$lang$ctorPrWriter = (function (this__37367__auto__,writer__37368__auto__,opt__37369__auto__){
return cljs.core._write.call(null,writer__37368__auto__,"cljs.core.async/t_cljs$core$async43201");
});

cljs.core.async.__GT_t_cljs$core$async43201 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async43201(flag__$1,cb__$1,meta43202){
return (new cljs.core.async.t_cljs$core$async43201(flag__$1,cb__$1,meta43202));
});

}

return (new cljs.core.async.t_cljs$core$async43201(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__43204_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__43204_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__43205_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__43205_SHARP_,port], null));
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
var G__43206 = (i + (1));
i = G__43206;
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
var len__37881__auto___43212 = arguments.length;
var i__37882__auto___43213 = (0);
while(true){
if((i__37882__auto___43213 < len__37881__auto___43212)){
args__37888__auto__.push((arguments[i__37882__auto___43213]));

var G__43214 = (i__37882__auto___43213 + (1));
i__37882__auto___43213 = G__43214;
continue;
} else {
}
break;
}

var argseq__37889__auto__ = ((((1) < args__37888__auto__.length))?(new cljs.core.IndexedSeq(args__37888__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37889__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__43209){
var map__43210 = p__43209;
var map__43210__$1 = ((((!((map__43210 == null)))?((((map__43210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43210.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43210):map__43210);
var opts = map__43210__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq43207){
var G__43208 = cljs.core.first.call(null,seq43207);
var seq43207__$1 = cljs.core.next.call(null,seq43207);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__43208,seq43207__$1);
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
var G__43216 = arguments.length;
switch (G__43216) {
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
var c__43129__auto___43262 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43129__auto___43262){
return (function (){
var f__43130__auto__ = (function (){var switch__43041__auto__ = ((function (c__43129__auto___43262){
return (function (state_43240){
var state_val_43241 = (state_43240[(1)]);
if((state_val_43241 === (7))){
var inst_43236 = (state_43240[(2)]);
var state_43240__$1 = state_43240;
var statearr_43242_43263 = state_43240__$1;
(statearr_43242_43263[(2)] = inst_43236);

(statearr_43242_43263[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43241 === (1))){
var state_43240__$1 = state_43240;
var statearr_43243_43264 = state_43240__$1;
(statearr_43243_43264[(2)] = null);

(statearr_43243_43264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43241 === (4))){
var inst_43219 = (state_43240[(7)]);
var inst_43219__$1 = (state_43240[(2)]);
var inst_43220 = (inst_43219__$1 == null);
var state_43240__$1 = (function (){var statearr_43244 = state_43240;
(statearr_43244[(7)] = inst_43219__$1);

return statearr_43244;
})();
if(cljs.core.truth_(inst_43220)){
var statearr_43245_43265 = state_43240__$1;
(statearr_43245_43265[(1)] = (5));

} else {
var statearr_43246_43266 = state_43240__$1;
(statearr_43246_43266[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43241 === (13))){
var state_43240__$1 = state_43240;
var statearr_43247_43267 = state_43240__$1;
(statearr_43247_43267[(2)] = null);

(statearr_43247_43267[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43241 === (6))){
var inst_43219 = (state_43240[(7)]);
var state_43240__$1 = state_43240;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43240__$1,(11),to,inst_43219);
} else {
if((state_val_43241 === (3))){
var inst_43238 = (state_43240[(2)]);
var state_43240__$1 = state_43240;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43240__$1,inst_43238);
} else {
if((state_val_43241 === (12))){
var state_43240__$1 = state_43240;
var statearr_43248_43268 = state_43240__$1;
(statearr_43248_43268[(2)] = null);

(statearr_43248_43268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43241 === (2))){
var state_43240__$1 = state_43240;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43240__$1,(4),from);
} else {
if((state_val_43241 === (11))){
var inst_43229 = (state_43240[(2)]);
var state_43240__$1 = state_43240;
if(cljs.core.truth_(inst_43229)){
var statearr_43249_43269 = state_43240__$1;
(statearr_43249_43269[(1)] = (12));

} else {
var statearr_43250_43270 = state_43240__$1;
(statearr_43250_43270[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43241 === (9))){
var state_43240__$1 = state_43240;
var statearr_43251_43271 = state_43240__$1;
(statearr_43251_43271[(2)] = null);

(statearr_43251_43271[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43241 === (5))){
var state_43240__$1 = state_43240;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43252_43272 = state_43240__$1;
(statearr_43252_43272[(1)] = (8));

} else {
var statearr_43253_43273 = state_43240__$1;
(statearr_43253_43273[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43241 === (14))){
var inst_43234 = (state_43240[(2)]);
var state_43240__$1 = state_43240;
var statearr_43254_43274 = state_43240__$1;
(statearr_43254_43274[(2)] = inst_43234);

(statearr_43254_43274[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43241 === (10))){
var inst_43226 = (state_43240[(2)]);
var state_43240__$1 = state_43240;
var statearr_43255_43275 = state_43240__$1;
(statearr_43255_43275[(2)] = inst_43226);

(statearr_43255_43275[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43241 === (8))){
var inst_43223 = cljs.core.async.close_BANG_.call(null,to);
var state_43240__$1 = state_43240;
var statearr_43256_43276 = state_43240__$1;
(statearr_43256_43276[(2)] = inst_43223);

(statearr_43256_43276[(1)] = (10));


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
});})(c__43129__auto___43262))
;
return ((function (switch__43041__auto__,c__43129__auto___43262){
return (function() {
var cljs$core$async$state_machine__43042__auto__ = null;
var cljs$core$async$state_machine__43042__auto____0 = (function (){
var statearr_43257 = [null,null,null,null,null,null,null,null];
(statearr_43257[(0)] = cljs$core$async$state_machine__43042__auto__);

(statearr_43257[(1)] = (1));

return statearr_43257;
});
var cljs$core$async$state_machine__43042__auto____1 = (function (state_43240){
while(true){
var ret_value__43043__auto__ = (function (){try{while(true){
var result__43044__auto__ = switch__43041__auto__.call(null,state_43240);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43044__auto__;
}
break;
}
}catch (e43258){if((e43258 instanceof Object)){
var ex__43045__auto__ = e43258;
var statearr_43259_43277 = state_43240;
(statearr_43259_43277[(5)] = ex__43045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43240);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43258;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43278 = state_43240;
state_43240 = G__43278;
continue;
} else {
return ret_value__43043__auto__;
}
break;
}
});
cljs$core$async$state_machine__43042__auto__ = function(state_43240){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43042__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43042__auto____1.call(this,state_43240);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__43042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43042__auto____0;
cljs$core$async$state_machine__43042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43042__auto____1;
return cljs$core$async$state_machine__43042__auto__;
})()
;})(switch__43041__auto__,c__43129__auto___43262))
})();
var state__43131__auto__ = (function (){var statearr_43260 = f__43130__auto__.call(null);
(statearr_43260[(6)] = c__43129__auto___43262);

return statearr_43260;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43131__auto__);
});})(c__43129__auto___43262))
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
return (function (p__43279){
var vec__43280 = p__43279;
var v = cljs.core.nth.call(null,vec__43280,(0),null);
var p = cljs.core.nth.call(null,vec__43280,(1),null);
var job = vec__43280;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__43129__auto___43451 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43129__auto___43451,res,vec__43280,v,p,job,jobs,results){
return (function (){
var f__43130__auto__ = (function (){var switch__43041__auto__ = ((function (c__43129__auto___43451,res,vec__43280,v,p,job,jobs,results){
return (function (state_43287){
var state_val_43288 = (state_43287[(1)]);
if((state_val_43288 === (1))){
var state_43287__$1 = state_43287;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43287__$1,(2),res,v);
} else {
if((state_val_43288 === (2))){
var inst_43284 = (state_43287[(2)]);
var inst_43285 = cljs.core.async.close_BANG_.call(null,res);
var state_43287__$1 = (function (){var statearr_43289 = state_43287;
(statearr_43289[(7)] = inst_43284);

return statearr_43289;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43287__$1,inst_43285);
} else {
return null;
}
}
});})(c__43129__auto___43451,res,vec__43280,v,p,job,jobs,results))
;
return ((function (switch__43041__auto__,c__43129__auto___43451,res,vec__43280,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43042__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43042__auto____0 = (function (){
var statearr_43290 = [null,null,null,null,null,null,null,null];
(statearr_43290[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43042__auto__);

(statearr_43290[(1)] = (1));

return statearr_43290;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43042__auto____1 = (function (state_43287){
while(true){
var ret_value__43043__auto__ = (function (){try{while(true){
var result__43044__auto__ = switch__43041__auto__.call(null,state_43287);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43044__auto__;
}
break;
}
}catch (e43291){if((e43291 instanceof Object)){
var ex__43045__auto__ = e43291;
var statearr_43292_43452 = state_43287;
(statearr_43292_43452[(5)] = ex__43045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43287);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43291;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43453 = state_43287;
state_43287 = G__43453;
continue;
} else {
return ret_value__43043__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43042__auto__ = function(state_43287){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43042__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43042__auto____1.call(this,state_43287);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__43042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43042__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43042__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43042__auto__;
})()
;})(switch__43041__auto__,c__43129__auto___43451,res,vec__43280,v,p,job,jobs,results))
})();
var state__43131__auto__ = (function (){var statearr_43293 = f__43130__auto__.call(null);
(statearr_43293[(6)] = c__43129__auto___43451);

return statearr_43293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43131__auto__);
});})(c__43129__auto___43451,res,vec__43280,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__43294){
var vec__43295 = p__43294;
var v = cljs.core.nth.call(null,vec__43295,(0),null);
var p = cljs.core.nth.call(null,vec__43295,(1),null);
var job = vec__43295;
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
var n__37680__auto___43454 = n;
var __43455 = (0);
while(true){
if((__43455 < n__37680__auto___43454)){
var G__43298_43456 = type;
var G__43298_43457__$1 = (((G__43298_43456 instanceof cljs.core.Keyword))?G__43298_43456.fqn:null);
switch (G__43298_43457__$1) {
case "compute":
var c__43129__auto___43459 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__43455,c__43129__auto___43459,G__43298_43456,G__43298_43457__$1,n__37680__auto___43454,jobs,results,process,async){
return (function (){
var f__43130__auto__ = (function (){var switch__43041__auto__ = ((function (__43455,c__43129__auto___43459,G__43298_43456,G__43298_43457__$1,n__37680__auto___43454,jobs,results,process,async){
return (function (state_43311){
var state_val_43312 = (state_43311[(1)]);
if((state_val_43312 === (1))){
var state_43311__$1 = state_43311;
var statearr_43313_43460 = state_43311__$1;
(statearr_43313_43460[(2)] = null);

(statearr_43313_43460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43312 === (2))){
var state_43311__$1 = state_43311;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43311__$1,(4),jobs);
} else {
if((state_val_43312 === (3))){
var inst_43309 = (state_43311[(2)]);
var state_43311__$1 = state_43311;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43311__$1,inst_43309);
} else {
if((state_val_43312 === (4))){
var inst_43301 = (state_43311[(2)]);
var inst_43302 = process.call(null,inst_43301);
var state_43311__$1 = state_43311;
if(cljs.core.truth_(inst_43302)){
var statearr_43314_43461 = state_43311__$1;
(statearr_43314_43461[(1)] = (5));

} else {
var statearr_43315_43462 = state_43311__$1;
(statearr_43315_43462[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43312 === (5))){
var state_43311__$1 = state_43311;
var statearr_43316_43463 = state_43311__$1;
(statearr_43316_43463[(2)] = null);

(statearr_43316_43463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43312 === (6))){
var state_43311__$1 = state_43311;
var statearr_43317_43464 = state_43311__$1;
(statearr_43317_43464[(2)] = null);

(statearr_43317_43464[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43312 === (7))){
var inst_43307 = (state_43311[(2)]);
var state_43311__$1 = state_43311;
var statearr_43318_43465 = state_43311__$1;
(statearr_43318_43465[(2)] = inst_43307);

(statearr_43318_43465[(1)] = (3));


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
});})(__43455,c__43129__auto___43459,G__43298_43456,G__43298_43457__$1,n__37680__auto___43454,jobs,results,process,async))
;
return ((function (__43455,switch__43041__auto__,c__43129__auto___43459,G__43298_43456,G__43298_43457__$1,n__37680__auto___43454,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43042__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43042__auto____0 = (function (){
var statearr_43319 = [null,null,null,null,null,null,null];
(statearr_43319[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43042__auto__);

(statearr_43319[(1)] = (1));

return statearr_43319;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43042__auto____1 = (function (state_43311){
while(true){
var ret_value__43043__auto__ = (function (){try{while(true){
var result__43044__auto__ = switch__43041__auto__.call(null,state_43311);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43044__auto__;
}
break;
}
}catch (e43320){if((e43320 instanceof Object)){
var ex__43045__auto__ = e43320;
var statearr_43321_43466 = state_43311;
(statearr_43321_43466[(5)] = ex__43045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43311);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43320;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43467 = state_43311;
state_43311 = G__43467;
continue;
} else {
return ret_value__43043__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43042__auto__ = function(state_43311){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43042__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43042__auto____1.call(this,state_43311);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__43042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43042__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43042__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43042__auto__;
})()
;})(__43455,switch__43041__auto__,c__43129__auto___43459,G__43298_43456,G__43298_43457__$1,n__37680__auto___43454,jobs,results,process,async))
})();
var state__43131__auto__ = (function (){var statearr_43322 = f__43130__auto__.call(null);
(statearr_43322[(6)] = c__43129__auto___43459);

return statearr_43322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43131__auto__);
});})(__43455,c__43129__auto___43459,G__43298_43456,G__43298_43457__$1,n__37680__auto___43454,jobs,results,process,async))
);


break;
case "async":
var c__43129__auto___43468 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__43455,c__43129__auto___43468,G__43298_43456,G__43298_43457__$1,n__37680__auto___43454,jobs,results,process,async){
return (function (){
var f__43130__auto__ = (function (){var switch__43041__auto__ = ((function (__43455,c__43129__auto___43468,G__43298_43456,G__43298_43457__$1,n__37680__auto___43454,jobs,results,process,async){
return (function (state_43335){
var state_val_43336 = (state_43335[(1)]);
if((state_val_43336 === (1))){
var state_43335__$1 = state_43335;
var statearr_43337_43469 = state_43335__$1;
(statearr_43337_43469[(2)] = null);

(statearr_43337_43469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43336 === (2))){
var state_43335__$1 = state_43335;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43335__$1,(4),jobs);
} else {
if((state_val_43336 === (3))){
var inst_43333 = (state_43335[(2)]);
var state_43335__$1 = state_43335;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43335__$1,inst_43333);
} else {
if((state_val_43336 === (4))){
var inst_43325 = (state_43335[(2)]);
var inst_43326 = async.call(null,inst_43325);
var state_43335__$1 = state_43335;
if(cljs.core.truth_(inst_43326)){
var statearr_43338_43470 = state_43335__$1;
(statearr_43338_43470[(1)] = (5));

} else {
var statearr_43339_43471 = state_43335__$1;
(statearr_43339_43471[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43336 === (5))){
var state_43335__$1 = state_43335;
var statearr_43340_43472 = state_43335__$1;
(statearr_43340_43472[(2)] = null);

(statearr_43340_43472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43336 === (6))){
var state_43335__$1 = state_43335;
var statearr_43341_43473 = state_43335__$1;
(statearr_43341_43473[(2)] = null);

(statearr_43341_43473[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43336 === (7))){
var inst_43331 = (state_43335[(2)]);
var state_43335__$1 = state_43335;
var statearr_43342_43474 = state_43335__$1;
(statearr_43342_43474[(2)] = inst_43331);

(statearr_43342_43474[(1)] = (3));


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
});})(__43455,c__43129__auto___43468,G__43298_43456,G__43298_43457__$1,n__37680__auto___43454,jobs,results,process,async))
;
return ((function (__43455,switch__43041__auto__,c__43129__auto___43468,G__43298_43456,G__43298_43457__$1,n__37680__auto___43454,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43042__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43042__auto____0 = (function (){
var statearr_43343 = [null,null,null,null,null,null,null];
(statearr_43343[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43042__auto__);

(statearr_43343[(1)] = (1));

return statearr_43343;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43042__auto____1 = (function (state_43335){
while(true){
var ret_value__43043__auto__ = (function (){try{while(true){
var result__43044__auto__ = switch__43041__auto__.call(null,state_43335);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43044__auto__;
}
break;
}
}catch (e43344){if((e43344 instanceof Object)){
var ex__43045__auto__ = e43344;
var statearr_43345_43475 = state_43335;
(statearr_43345_43475[(5)] = ex__43045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43335);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43344;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43476 = state_43335;
state_43335 = G__43476;
continue;
} else {
return ret_value__43043__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43042__auto__ = function(state_43335){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43042__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43042__auto____1.call(this,state_43335);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__43042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43042__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43042__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43042__auto__;
})()
;})(__43455,switch__43041__auto__,c__43129__auto___43468,G__43298_43456,G__43298_43457__$1,n__37680__auto___43454,jobs,results,process,async))
})();
var state__43131__auto__ = (function (){var statearr_43346 = f__43130__auto__.call(null);
(statearr_43346[(6)] = c__43129__auto___43468);

return statearr_43346;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43131__auto__);
});})(__43455,c__43129__auto___43468,G__43298_43456,G__43298_43457__$1,n__37680__auto___43454,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43298_43457__$1)].join('')));

}

var G__43477 = (__43455 + (1));
__43455 = G__43477;
continue;
} else {
}
break;
}

var c__43129__auto___43478 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43129__auto___43478,jobs,results,process,async){
return (function (){
var f__43130__auto__ = (function (){var switch__43041__auto__ = ((function (c__43129__auto___43478,jobs,results,process,async){
return (function (state_43368){
var state_val_43369 = (state_43368[(1)]);
if((state_val_43369 === (1))){
var state_43368__$1 = state_43368;
var statearr_43370_43479 = state_43368__$1;
(statearr_43370_43479[(2)] = null);

(statearr_43370_43479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43369 === (2))){
var state_43368__$1 = state_43368;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43368__$1,(4),from);
} else {
if((state_val_43369 === (3))){
var inst_43366 = (state_43368[(2)]);
var state_43368__$1 = state_43368;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43368__$1,inst_43366);
} else {
if((state_val_43369 === (4))){
var inst_43349 = (state_43368[(7)]);
var inst_43349__$1 = (state_43368[(2)]);
var inst_43350 = (inst_43349__$1 == null);
var state_43368__$1 = (function (){var statearr_43371 = state_43368;
(statearr_43371[(7)] = inst_43349__$1);

return statearr_43371;
})();
if(cljs.core.truth_(inst_43350)){
var statearr_43372_43480 = state_43368__$1;
(statearr_43372_43480[(1)] = (5));

} else {
var statearr_43373_43481 = state_43368__$1;
(statearr_43373_43481[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43369 === (5))){
var inst_43352 = cljs.core.async.close_BANG_.call(null,jobs);
var state_43368__$1 = state_43368;
var statearr_43374_43482 = state_43368__$1;
(statearr_43374_43482[(2)] = inst_43352);

(statearr_43374_43482[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43369 === (6))){
var inst_43354 = (state_43368[(8)]);
var inst_43349 = (state_43368[(7)]);
var inst_43354__$1 = cljs.core.async.chan.call(null,(1));
var inst_43355 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43356 = [inst_43349,inst_43354__$1];
var inst_43357 = (new cljs.core.PersistentVector(null,2,(5),inst_43355,inst_43356,null));
var state_43368__$1 = (function (){var statearr_43375 = state_43368;
(statearr_43375[(8)] = inst_43354__$1);

return statearr_43375;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43368__$1,(8),jobs,inst_43357);
} else {
if((state_val_43369 === (7))){
var inst_43364 = (state_43368[(2)]);
var state_43368__$1 = state_43368;
var statearr_43376_43483 = state_43368__$1;
(statearr_43376_43483[(2)] = inst_43364);

(statearr_43376_43483[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43369 === (8))){
var inst_43354 = (state_43368[(8)]);
var inst_43359 = (state_43368[(2)]);
var state_43368__$1 = (function (){var statearr_43377 = state_43368;
(statearr_43377[(9)] = inst_43359);

return statearr_43377;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43368__$1,(9),results,inst_43354);
} else {
if((state_val_43369 === (9))){
var inst_43361 = (state_43368[(2)]);
var state_43368__$1 = (function (){var statearr_43378 = state_43368;
(statearr_43378[(10)] = inst_43361);

return statearr_43378;
})();
var statearr_43379_43484 = state_43368__$1;
(statearr_43379_43484[(2)] = null);

(statearr_43379_43484[(1)] = (2));


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
});})(c__43129__auto___43478,jobs,results,process,async))
;
return ((function (switch__43041__auto__,c__43129__auto___43478,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43042__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43042__auto____0 = (function (){
var statearr_43380 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43380[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43042__auto__);

(statearr_43380[(1)] = (1));

return statearr_43380;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43042__auto____1 = (function (state_43368){
while(true){
var ret_value__43043__auto__ = (function (){try{while(true){
var result__43044__auto__ = switch__43041__auto__.call(null,state_43368);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43044__auto__;
}
break;
}
}catch (e43381){if((e43381 instanceof Object)){
var ex__43045__auto__ = e43381;
var statearr_43382_43485 = state_43368;
(statearr_43382_43485[(5)] = ex__43045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43368);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43381;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43486 = state_43368;
state_43368 = G__43486;
continue;
} else {
return ret_value__43043__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43042__auto__ = function(state_43368){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43042__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43042__auto____1.call(this,state_43368);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__43042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43042__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43042__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43042__auto__;
})()
;})(switch__43041__auto__,c__43129__auto___43478,jobs,results,process,async))
})();
var state__43131__auto__ = (function (){var statearr_43383 = f__43130__auto__.call(null);
(statearr_43383[(6)] = c__43129__auto___43478);

return statearr_43383;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43131__auto__);
});})(c__43129__auto___43478,jobs,results,process,async))
);


var c__43129__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43129__auto__,jobs,results,process,async){
return (function (){
var f__43130__auto__ = (function (){var switch__43041__auto__ = ((function (c__43129__auto__,jobs,results,process,async){
return (function (state_43421){
var state_val_43422 = (state_43421[(1)]);
if((state_val_43422 === (7))){
var inst_43417 = (state_43421[(2)]);
var state_43421__$1 = state_43421;
var statearr_43423_43487 = state_43421__$1;
(statearr_43423_43487[(2)] = inst_43417);

(statearr_43423_43487[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43422 === (20))){
var state_43421__$1 = state_43421;
var statearr_43424_43488 = state_43421__$1;
(statearr_43424_43488[(2)] = null);

(statearr_43424_43488[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43422 === (1))){
var state_43421__$1 = state_43421;
var statearr_43425_43489 = state_43421__$1;
(statearr_43425_43489[(2)] = null);

(statearr_43425_43489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43422 === (4))){
var inst_43386 = (state_43421[(7)]);
var inst_43386__$1 = (state_43421[(2)]);
var inst_43387 = (inst_43386__$1 == null);
var state_43421__$1 = (function (){var statearr_43426 = state_43421;
(statearr_43426[(7)] = inst_43386__$1);

return statearr_43426;
})();
if(cljs.core.truth_(inst_43387)){
var statearr_43427_43490 = state_43421__$1;
(statearr_43427_43490[(1)] = (5));

} else {
var statearr_43428_43491 = state_43421__$1;
(statearr_43428_43491[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43422 === (15))){
var inst_43399 = (state_43421[(8)]);
var state_43421__$1 = state_43421;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43421__$1,(18),to,inst_43399);
} else {
if((state_val_43422 === (21))){
var inst_43412 = (state_43421[(2)]);
var state_43421__$1 = state_43421;
var statearr_43429_43492 = state_43421__$1;
(statearr_43429_43492[(2)] = inst_43412);

(statearr_43429_43492[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43422 === (13))){
var inst_43414 = (state_43421[(2)]);
var state_43421__$1 = (function (){var statearr_43430 = state_43421;
(statearr_43430[(9)] = inst_43414);

return statearr_43430;
})();
var statearr_43431_43493 = state_43421__$1;
(statearr_43431_43493[(2)] = null);

(statearr_43431_43493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43422 === (6))){
var inst_43386 = (state_43421[(7)]);
var state_43421__$1 = state_43421;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43421__$1,(11),inst_43386);
} else {
if((state_val_43422 === (17))){
var inst_43407 = (state_43421[(2)]);
var state_43421__$1 = state_43421;
if(cljs.core.truth_(inst_43407)){
var statearr_43432_43494 = state_43421__$1;
(statearr_43432_43494[(1)] = (19));

} else {
var statearr_43433_43495 = state_43421__$1;
(statearr_43433_43495[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43422 === (3))){
var inst_43419 = (state_43421[(2)]);
var state_43421__$1 = state_43421;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43421__$1,inst_43419);
} else {
if((state_val_43422 === (12))){
var inst_43396 = (state_43421[(10)]);
var state_43421__$1 = state_43421;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43421__$1,(14),inst_43396);
} else {
if((state_val_43422 === (2))){
var state_43421__$1 = state_43421;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43421__$1,(4),results);
} else {
if((state_val_43422 === (19))){
var state_43421__$1 = state_43421;
var statearr_43434_43496 = state_43421__$1;
(statearr_43434_43496[(2)] = null);

(statearr_43434_43496[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43422 === (11))){
var inst_43396 = (state_43421[(2)]);
var state_43421__$1 = (function (){var statearr_43435 = state_43421;
(statearr_43435[(10)] = inst_43396);

return statearr_43435;
})();
var statearr_43436_43497 = state_43421__$1;
(statearr_43436_43497[(2)] = null);

(statearr_43436_43497[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43422 === (9))){
var state_43421__$1 = state_43421;
var statearr_43437_43498 = state_43421__$1;
(statearr_43437_43498[(2)] = null);

(statearr_43437_43498[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43422 === (5))){
var state_43421__$1 = state_43421;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43438_43499 = state_43421__$1;
(statearr_43438_43499[(1)] = (8));

} else {
var statearr_43439_43500 = state_43421__$1;
(statearr_43439_43500[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43422 === (14))){
var inst_43401 = (state_43421[(11)]);
var inst_43399 = (state_43421[(8)]);
var inst_43399__$1 = (state_43421[(2)]);
var inst_43400 = (inst_43399__$1 == null);
var inst_43401__$1 = cljs.core.not.call(null,inst_43400);
var state_43421__$1 = (function (){var statearr_43440 = state_43421;
(statearr_43440[(11)] = inst_43401__$1);

(statearr_43440[(8)] = inst_43399__$1);

return statearr_43440;
})();
if(inst_43401__$1){
var statearr_43441_43501 = state_43421__$1;
(statearr_43441_43501[(1)] = (15));

} else {
var statearr_43442_43502 = state_43421__$1;
(statearr_43442_43502[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43422 === (16))){
var inst_43401 = (state_43421[(11)]);
var state_43421__$1 = state_43421;
var statearr_43443_43503 = state_43421__$1;
(statearr_43443_43503[(2)] = inst_43401);

(statearr_43443_43503[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43422 === (10))){
var inst_43393 = (state_43421[(2)]);
var state_43421__$1 = state_43421;
var statearr_43444_43504 = state_43421__$1;
(statearr_43444_43504[(2)] = inst_43393);

(statearr_43444_43504[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43422 === (18))){
var inst_43404 = (state_43421[(2)]);
var state_43421__$1 = state_43421;
var statearr_43445_43505 = state_43421__$1;
(statearr_43445_43505[(2)] = inst_43404);

(statearr_43445_43505[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43422 === (8))){
var inst_43390 = cljs.core.async.close_BANG_.call(null,to);
var state_43421__$1 = state_43421;
var statearr_43446_43506 = state_43421__$1;
(statearr_43446_43506[(2)] = inst_43390);

(statearr_43446_43506[(1)] = (10));


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
});})(c__43129__auto__,jobs,results,process,async))
;
return ((function (switch__43041__auto__,c__43129__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43042__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43042__auto____0 = (function (){
var statearr_43447 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43447[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43042__auto__);

(statearr_43447[(1)] = (1));

return statearr_43447;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43042__auto____1 = (function (state_43421){
while(true){
var ret_value__43043__auto__ = (function (){try{while(true){
var result__43044__auto__ = switch__43041__auto__.call(null,state_43421);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43044__auto__;
}
break;
}
}catch (e43448){if((e43448 instanceof Object)){
var ex__43045__auto__ = e43448;
var statearr_43449_43507 = state_43421;
(statearr_43449_43507[(5)] = ex__43045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43421);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43448;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43508 = state_43421;
state_43421 = G__43508;
continue;
} else {
return ret_value__43043__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43042__auto__ = function(state_43421){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43042__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43042__auto____1.call(this,state_43421);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__43042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43042__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43042__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43042__auto__;
})()
;})(switch__43041__auto__,c__43129__auto__,jobs,results,process,async))
})();
var state__43131__auto__ = (function (){var statearr_43450 = f__43130__auto__.call(null);
(statearr_43450[(6)] = c__43129__auto__);

return statearr_43450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43131__auto__);
});})(c__43129__auto__,jobs,results,process,async))
);

return c__43129__auto__;
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
var G__43510 = arguments.length;
switch (G__43510) {
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
var G__43513 = arguments.length;
switch (G__43513) {
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
var G__43516 = arguments.length;
switch (G__43516) {
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
var c__43129__auto___43565 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43129__auto___43565,tc,fc){
return (function (){
var f__43130__auto__ = (function (){var switch__43041__auto__ = ((function (c__43129__auto___43565,tc,fc){
return (function (state_43542){
var state_val_43543 = (state_43542[(1)]);
if((state_val_43543 === (7))){
var inst_43538 = (state_43542[(2)]);
var state_43542__$1 = state_43542;
var statearr_43544_43566 = state_43542__$1;
(statearr_43544_43566[(2)] = inst_43538);

(statearr_43544_43566[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43543 === (1))){
var state_43542__$1 = state_43542;
var statearr_43545_43567 = state_43542__$1;
(statearr_43545_43567[(2)] = null);

(statearr_43545_43567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43543 === (4))){
var inst_43519 = (state_43542[(7)]);
var inst_43519__$1 = (state_43542[(2)]);
var inst_43520 = (inst_43519__$1 == null);
var state_43542__$1 = (function (){var statearr_43546 = state_43542;
(statearr_43546[(7)] = inst_43519__$1);

return statearr_43546;
})();
if(cljs.core.truth_(inst_43520)){
var statearr_43547_43568 = state_43542__$1;
(statearr_43547_43568[(1)] = (5));

} else {
var statearr_43548_43569 = state_43542__$1;
(statearr_43548_43569[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43543 === (13))){
var state_43542__$1 = state_43542;
var statearr_43549_43570 = state_43542__$1;
(statearr_43549_43570[(2)] = null);

(statearr_43549_43570[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43543 === (6))){
var inst_43519 = (state_43542[(7)]);
var inst_43525 = p.call(null,inst_43519);
var state_43542__$1 = state_43542;
if(cljs.core.truth_(inst_43525)){
var statearr_43550_43571 = state_43542__$1;
(statearr_43550_43571[(1)] = (9));

} else {
var statearr_43551_43572 = state_43542__$1;
(statearr_43551_43572[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43543 === (3))){
var inst_43540 = (state_43542[(2)]);
var state_43542__$1 = state_43542;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43542__$1,inst_43540);
} else {
if((state_val_43543 === (12))){
var state_43542__$1 = state_43542;
var statearr_43552_43573 = state_43542__$1;
(statearr_43552_43573[(2)] = null);

(statearr_43552_43573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43543 === (2))){
var state_43542__$1 = state_43542;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43542__$1,(4),ch);
} else {
if((state_val_43543 === (11))){
var inst_43519 = (state_43542[(7)]);
var inst_43529 = (state_43542[(2)]);
var state_43542__$1 = state_43542;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43542__$1,(8),inst_43529,inst_43519);
} else {
if((state_val_43543 === (9))){
var state_43542__$1 = state_43542;
var statearr_43553_43574 = state_43542__$1;
(statearr_43553_43574[(2)] = tc);

(statearr_43553_43574[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43543 === (5))){
var inst_43522 = cljs.core.async.close_BANG_.call(null,tc);
var inst_43523 = cljs.core.async.close_BANG_.call(null,fc);
var state_43542__$1 = (function (){var statearr_43554 = state_43542;
(statearr_43554[(8)] = inst_43522);

return statearr_43554;
})();
var statearr_43555_43575 = state_43542__$1;
(statearr_43555_43575[(2)] = inst_43523);

(statearr_43555_43575[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43543 === (14))){
var inst_43536 = (state_43542[(2)]);
var state_43542__$1 = state_43542;
var statearr_43556_43576 = state_43542__$1;
(statearr_43556_43576[(2)] = inst_43536);

(statearr_43556_43576[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43543 === (10))){
var state_43542__$1 = state_43542;
var statearr_43557_43577 = state_43542__$1;
(statearr_43557_43577[(2)] = fc);

(statearr_43557_43577[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43543 === (8))){
var inst_43531 = (state_43542[(2)]);
var state_43542__$1 = state_43542;
if(cljs.core.truth_(inst_43531)){
var statearr_43558_43578 = state_43542__$1;
(statearr_43558_43578[(1)] = (12));

} else {
var statearr_43559_43579 = state_43542__$1;
(statearr_43559_43579[(1)] = (13));

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
});})(c__43129__auto___43565,tc,fc))
;
return ((function (switch__43041__auto__,c__43129__auto___43565,tc,fc){
return (function() {
var cljs$core$async$state_machine__43042__auto__ = null;
var cljs$core$async$state_machine__43042__auto____0 = (function (){
var statearr_43560 = [null,null,null,null,null,null,null,null,null];
(statearr_43560[(0)] = cljs$core$async$state_machine__43042__auto__);

(statearr_43560[(1)] = (1));

return statearr_43560;
});
var cljs$core$async$state_machine__43042__auto____1 = (function (state_43542){
while(true){
var ret_value__43043__auto__ = (function (){try{while(true){
var result__43044__auto__ = switch__43041__auto__.call(null,state_43542);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43044__auto__;
}
break;
}
}catch (e43561){if((e43561 instanceof Object)){
var ex__43045__auto__ = e43561;
var statearr_43562_43580 = state_43542;
(statearr_43562_43580[(5)] = ex__43045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43542);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43561;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43581 = state_43542;
state_43542 = G__43581;
continue;
} else {
return ret_value__43043__auto__;
}
break;
}
});
cljs$core$async$state_machine__43042__auto__ = function(state_43542){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43042__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43042__auto____1.call(this,state_43542);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__43042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43042__auto____0;
cljs$core$async$state_machine__43042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43042__auto____1;
return cljs$core$async$state_machine__43042__auto__;
})()
;})(switch__43041__auto__,c__43129__auto___43565,tc,fc))
})();
var state__43131__auto__ = (function (){var statearr_43563 = f__43130__auto__.call(null);
(statearr_43563[(6)] = c__43129__auto___43565);

return statearr_43563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43131__auto__);
});})(c__43129__auto___43565,tc,fc))
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
var c__43129__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43129__auto__){
return (function (){
var f__43130__auto__ = (function (){var switch__43041__auto__ = ((function (c__43129__auto__){
return (function (state_43602){
var state_val_43603 = (state_43602[(1)]);
if((state_val_43603 === (7))){
var inst_43598 = (state_43602[(2)]);
var state_43602__$1 = state_43602;
var statearr_43604_43622 = state_43602__$1;
(statearr_43604_43622[(2)] = inst_43598);

(statearr_43604_43622[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43603 === (1))){
var inst_43582 = init;
var state_43602__$1 = (function (){var statearr_43605 = state_43602;
(statearr_43605[(7)] = inst_43582);

return statearr_43605;
})();
var statearr_43606_43623 = state_43602__$1;
(statearr_43606_43623[(2)] = null);

(statearr_43606_43623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43603 === (4))){
var inst_43585 = (state_43602[(8)]);
var inst_43585__$1 = (state_43602[(2)]);
var inst_43586 = (inst_43585__$1 == null);
var state_43602__$1 = (function (){var statearr_43607 = state_43602;
(statearr_43607[(8)] = inst_43585__$1);

return statearr_43607;
})();
if(cljs.core.truth_(inst_43586)){
var statearr_43608_43624 = state_43602__$1;
(statearr_43608_43624[(1)] = (5));

} else {
var statearr_43609_43625 = state_43602__$1;
(statearr_43609_43625[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43603 === (6))){
var inst_43589 = (state_43602[(9)]);
var inst_43585 = (state_43602[(8)]);
var inst_43582 = (state_43602[(7)]);
var inst_43589__$1 = f.call(null,inst_43582,inst_43585);
var inst_43590 = cljs.core.reduced_QMARK_.call(null,inst_43589__$1);
var state_43602__$1 = (function (){var statearr_43610 = state_43602;
(statearr_43610[(9)] = inst_43589__$1);

return statearr_43610;
})();
if(inst_43590){
var statearr_43611_43626 = state_43602__$1;
(statearr_43611_43626[(1)] = (8));

} else {
var statearr_43612_43627 = state_43602__$1;
(statearr_43612_43627[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43603 === (3))){
var inst_43600 = (state_43602[(2)]);
var state_43602__$1 = state_43602;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43602__$1,inst_43600);
} else {
if((state_val_43603 === (2))){
var state_43602__$1 = state_43602;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43602__$1,(4),ch);
} else {
if((state_val_43603 === (9))){
var inst_43589 = (state_43602[(9)]);
var inst_43582 = inst_43589;
var state_43602__$1 = (function (){var statearr_43613 = state_43602;
(statearr_43613[(7)] = inst_43582);

return statearr_43613;
})();
var statearr_43614_43628 = state_43602__$1;
(statearr_43614_43628[(2)] = null);

(statearr_43614_43628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43603 === (5))){
var inst_43582 = (state_43602[(7)]);
var state_43602__$1 = state_43602;
var statearr_43615_43629 = state_43602__$1;
(statearr_43615_43629[(2)] = inst_43582);

(statearr_43615_43629[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43603 === (10))){
var inst_43596 = (state_43602[(2)]);
var state_43602__$1 = state_43602;
var statearr_43616_43630 = state_43602__$1;
(statearr_43616_43630[(2)] = inst_43596);

(statearr_43616_43630[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43603 === (8))){
var inst_43589 = (state_43602[(9)]);
var inst_43592 = cljs.core.deref.call(null,inst_43589);
var state_43602__$1 = state_43602;
var statearr_43617_43631 = state_43602__$1;
(statearr_43617_43631[(2)] = inst_43592);

(statearr_43617_43631[(1)] = (10));


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
});})(c__43129__auto__))
;
return ((function (switch__43041__auto__,c__43129__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__43042__auto__ = null;
var cljs$core$async$reduce_$_state_machine__43042__auto____0 = (function (){
var statearr_43618 = [null,null,null,null,null,null,null,null,null,null];
(statearr_43618[(0)] = cljs$core$async$reduce_$_state_machine__43042__auto__);

(statearr_43618[(1)] = (1));

return statearr_43618;
});
var cljs$core$async$reduce_$_state_machine__43042__auto____1 = (function (state_43602){
while(true){
var ret_value__43043__auto__ = (function (){try{while(true){
var result__43044__auto__ = switch__43041__auto__.call(null,state_43602);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43044__auto__;
}
break;
}
}catch (e43619){if((e43619 instanceof Object)){
var ex__43045__auto__ = e43619;
var statearr_43620_43632 = state_43602;
(statearr_43620_43632[(5)] = ex__43045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43602);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43619;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43633 = state_43602;
state_43602 = G__43633;
continue;
} else {
return ret_value__43043__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__43042__auto__ = function(state_43602){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__43042__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__43042__auto____1.call(this,state_43602);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__43042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__43042__auto____0;
cljs$core$async$reduce_$_state_machine__43042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__43042__auto____1;
return cljs$core$async$reduce_$_state_machine__43042__auto__;
})()
;})(switch__43041__auto__,c__43129__auto__))
})();
var state__43131__auto__ = (function (){var statearr_43621 = f__43130__auto__.call(null);
(statearr_43621[(6)] = c__43129__auto__);

return statearr_43621;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43131__auto__);
});})(c__43129__auto__))
);

return c__43129__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__43129__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43129__auto__,f__$1){
return (function (){
var f__43130__auto__ = (function (){var switch__43041__auto__ = ((function (c__43129__auto__,f__$1){
return (function (state_43639){
var state_val_43640 = (state_43639[(1)]);
if((state_val_43640 === (1))){
var inst_43634 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_43639__$1 = state_43639;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43639__$1,(2),inst_43634);
} else {
if((state_val_43640 === (2))){
var inst_43636 = (state_43639[(2)]);
var inst_43637 = f__$1.call(null,inst_43636);
var state_43639__$1 = state_43639;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43639__$1,inst_43637);
} else {
return null;
}
}
});})(c__43129__auto__,f__$1))
;
return ((function (switch__43041__auto__,c__43129__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__43042__auto__ = null;
var cljs$core$async$transduce_$_state_machine__43042__auto____0 = (function (){
var statearr_43641 = [null,null,null,null,null,null,null];
(statearr_43641[(0)] = cljs$core$async$transduce_$_state_machine__43042__auto__);

(statearr_43641[(1)] = (1));

return statearr_43641;
});
var cljs$core$async$transduce_$_state_machine__43042__auto____1 = (function (state_43639){
while(true){
var ret_value__43043__auto__ = (function (){try{while(true){
var result__43044__auto__ = switch__43041__auto__.call(null,state_43639);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43044__auto__;
}
break;
}
}catch (e43642){if((e43642 instanceof Object)){
var ex__43045__auto__ = e43642;
var statearr_43643_43645 = state_43639;
(statearr_43643_43645[(5)] = ex__43045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43639);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43642;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43646 = state_43639;
state_43639 = G__43646;
continue;
} else {
return ret_value__43043__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__43042__auto__ = function(state_43639){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__43042__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__43042__auto____1.call(this,state_43639);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__43042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__43042__auto____0;
cljs$core$async$transduce_$_state_machine__43042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__43042__auto____1;
return cljs$core$async$transduce_$_state_machine__43042__auto__;
})()
;})(switch__43041__auto__,c__43129__auto__,f__$1))
})();
var state__43131__auto__ = (function (){var statearr_43644 = f__43130__auto__.call(null);
(statearr_43644[(6)] = c__43129__auto__);

return statearr_43644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43131__auto__);
});})(c__43129__auto__,f__$1))
);

return c__43129__auto__;
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
var G__43648 = arguments.length;
switch (G__43648) {
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
var c__43129__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43129__auto__){
return (function (){
var f__43130__auto__ = (function (){var switch__43041__auto__ = ((function (c__43129__auto__){
return (function (state_43673){
var state_val_43674 = (state_43673[(1)]);
if((state_val_43674 === (7))){
var inst_43655 = (state_43673[(2)]);
var state_43673__$1 = state_43673;
var statearr_43675_43696 = state_43673__$1;
(statearr_43675_43696[(2)] = inst_43655);

(statearr_43675_43696[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43674 === (1))){
var inst_43649 = cljs.core.seq.call(null,coll);
var inst_43650 = inst_43649;
var state_43673__$1 = (function (){var statearr_43676 = state_43673;
(statearr_43676[(7)] = inst_43650);

return statearr_43676;
})();
var statearr_43677_43697 = state_43673__$1;
(statearr_43677_43697[(2)] = null);

(statearr_43677_43697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43674 === (4))){
var inst_43650 = (state_43673[(7)]);
var inst_43653 = cljs.core.first.call(null,inst_43650);
var state_43673__$1 = state_43673;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43673__$1,(7),ch,inst_43653);
} else {
if((state_val_43674 === (13))){
var inst_43667 = (state_43673[(2)]);
var state_43673__$1 = state_43673;
var statearr_43678_43698 = state_43673__$1;
(statearr_43678_43698[(2)] = inst_43667);

(statearr_43678_43698[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43674 === (6))){
var inst_43658 = (state_43673[(2)]);
var state_43673__$1 = state_43673;
if(cljs.core.truth_(inst_43658)){
var statearr_43679_43699 = state_43673__$1;
(statearr_43679_43699[(1)] = (8));

} else {
var statearr_43680_43700 = state_43673__$1;
(statearr_43680_43700[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43674 === (3))){
var inst_43671 = (state_43673[(2)]);
var state_43673__$1 = state_43673;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43673__$1,inst_43671);
} else {
if((state_val_43674 === (12))){
var state_43673__$1 = state_43673;
var statearr_43681_43701 = state_43673__$1;
(statearr_43681_43701[(2)] = null);

(statearr_43681_43701[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43674 === (2))){
var inst_43650 = (state_43673[(7)]);
var state_43673__$1 = state_43673;
if(cljs.core.truth_(inst_43650)){
var statearr_43682_43702 = state_43673__$1;
(statearr_43682_43702[(1)] = (4));

} else {
var statearr_43683_43703 = state_43673__$1;
(statearr_43683_43703[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43674 === (11))){
var inst_43664 = cljs.core.async.close_BANG_.call(null,ch);
var state_43673__$1 = state_43673;
var statearr_43684_43704 = state_43673__$1;
(statearr_43684_43704[(2)] = inst_43664);

(statearr_43684_43704[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43674 === (9))){
var state_43673__$1 = state_43673;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43685_43705 = state_43673__$1;
(statearr_43685_43705[(1)] = (11));

} else {
var statearr_43686_43706 = state_43673__$1;
(statearr_43686_43706[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43674 === (5))){
var inst_43650 = (state_43673[(7)]);
var state_43673__$1 = state_43673;
var statearr_43687_43707 = state_43673__$1;
(statearr_43687_43707[(2)] = inst_43650);

(statearr_43687_43707[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43674 === (10))){
var inst_43669 = (state_43673[(2)]);
var state_43673__$1 = state_43673;
var statearr_43688_43708 = state_43673__$1;
(statearr_43688_43708[(2)] = inst_43669);

(statearr_43688_43708[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43674 === (8))){
var inst_43650 = (state_43673[(7)]);
var inst_43660 = cljs.core.next.call(null,inst_43650);
var inst_43650__$1 = inst_43660;
var state_43673__$1 = (function (){var statearr_43689 = state_43673;
(statearr_43689[(7)] = inst_43650__$1);

return statearr_43689;
})();
var statearr_43690_43709 = state_43673__$1;
(statearr_43690_43709[(2)] = null);

(statearr_43690_43709[(1)] = (2));


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
});})(c__43129__auto__))
;
return ((function (switch__43041__auto__,c__43129__auto__){
return (function() {
var cljs$core$async$state_machine__43042__auto__ = null;
var cljs$core$async$state_machine__43042__auto____0 = (function (){
var statearr_43691 = [null,null,null,null,null,null,null,null];
(statearr_43691[(0)] = cljs$core$async$state_machine__43042__auto__);

(statearr_43691[(1)] = (1));

return statearr_43691;
});
var cljs$core$async$state_machine__43042__auto____1 = (function (state_43673){
while(true){
var ret_value__43043__auto__ = (function (){try{while(true){
var result__43044__auto__ = switch__43041__auto__.call(null,state_43673);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43044__auto__;
}
break;
}
}catch (e43692){if((e43692 instanceof Object)){
var ex__43045__auto__ = e43692;
var statearr_43693_43710 = state_43673;
(statearr_43693_43710[(5)] = ex__43045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43692;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43711 = state_43673;
state_43673 = G__43711;
continue;
} else {
return ret_value__43043__auto__;
}
break;
}
});
cljs$core$async$state_machine__43042__auto__ = function(state_43673){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43042__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43042__auto____1.call(this,state_43673);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__43042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43042__auto____0;
cljs$core$async$state_machine__43042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43042__auto____1;
return cljs$core$async$state_machine__43042__auto__;
})()
;})(switch__43041__auto__,c__43129__auto__))
})();
var state__43131__auto__ = (function (){var statearr_43694 = f__43130__auto__.call(null);
(statearr_43694[(6)] = c__43129__auto__);

return statearr_43694;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43131__auto__);
});})(c__43129__auto__))
);

return c__43129__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async43712 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43712 = (function (ch,cs,meta43713){
this.ch = ch;
this.cs = cs;
this.meta43713 = meta43713;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43712.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_43714,meta43713__$1){
var self__ = this;
var _43714__$1 = this;
return (new cljs.core.async.t_cljs$core$async43712(self__.ch,self__.cs,meta43713__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async43712.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_43714){
var self__ = this;
var _43714__$1 = this;
return self__.meta43713;
});})(cs))
;

cljs.core.async.t_cljs$core$async43712.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43712.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async43712.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43712.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async43712.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async43712.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async43712.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta43713","meta43713",-1560998578,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async43712.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43712.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43712";

cljs.core.async.t_cljs$core$async43712.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__37367__auto__,writer__37368__auto__,opt__37369__auto__){
return cljs.core._write.call(null,writer__37368__auto__,"cljs.core.async/t_cljs$core$async43712");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async43712 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async43712(ch__$1,cs__$1,meta43713){
return (new cljs.core.async.t_cljs$core$async43712(ch__$1,cs__$1,meta43713));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async43712(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__43129__auto___43934 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43129__auto___43934,cs,m,dchan,dctr,done){
return (function (){
var f__43130__auto__ = (function (){var switch__43041__auto__ = ((function (c__43129__auto___43934,cs,m,dchan,dctr,done){
return (function (state_43849){
var state_val_43850 = (state_43849[(1)]);
if((state_val_43850 === (7))){
var inst_43845 = (state_43849[(2)]);
var state_43849__$1 = state_43849;
var statearr_43851_43935 = state_43849__$1;
(statearr_43851_43935[(2)] = inst_43845);

(statearr_43851_43935[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43850 === (20))){
var inst_43748 = (state_43849[(7)]);
var inst_43760 = cljs.core.first.call(null,inst_43748);
var inst_43761 = cljs.core.nth.call(null,inst_43760,(0),null);
var inst_43762 = cljs.core.nth.call(null,inst_43760,(1),null);
var state_43849__$1 = (function (){var statearr_43852 = state_43849;
(statearr_43852[(8)] = inst_43761);

return statearr_43852;
})();
if(cljs.core.truth_(inst_43762)){
var statearr_43853_43936 = state_43849__$1;
(statearr_43853_43936[(1)] = (22));

} else {
var statearr_43854_43937 = state_43849__$1;
(statearr_43854_43937[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43850 === (27))){
var inst_43797 = (state_43849[(9)]);
var inst_43790 = (state_43849[(10)]);
var inst_43792 = (state_43849[(11)]);
var inst_43717 = (state_43849[(12)]);
var inst_43797__$1 = cljs.core._nth.call(null,inst_43790,inst_43792);
var inst_43798 = cljs.core.async.put_BANG_.call(null,inst_43797__$1,inst_43717,done);
var state_43849__$1 = (function (){var statearr_43855 = state_43849;
(statearr_43855[(9)] = inst_43797__$1);

return statearr_43855;
})();
if(cljs.core.truth_(inst_43798)){
var statearr_43856_43938 = state_43849__$1;
(statearr_43856_43938[(1)] = (30));

} else {
var statearr_43857_43939 = state_43849__$1;
(statearr_43857_43939[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43850 === (1))){
var state_43849__$1 = state_43849;
var statearr_43858_43940 = state_43849__$1;
(statearr_43858_43940[(2)] = null);

(statearr_43858_43940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43850 === (24))){
var inst_43748 = (state_43849[(7)]);
var inst_43767 = (state_43849[(2)]);
var inst_43768 = cljs.core.next.call(null,inst_43748);
var inst_43726 = inst_43768;
var inst_43727 = null;
var inst_43728 = (0);
var inst_43729 = (0);
var state_43849__$1 = (function (){var statearr_43859 = state_43849;
(statearr_43859[(13)] = inst_43767);

(statearr_43859[(14)] = inst_43728);

(statearr_43859[(15)] = inst_43727);

(statearr_43859[(16)] = inst_43729);

(statearr_43859[(17)] = inst_43726);

return statearr_43859;
})();
var statearr_43860_43941 = state_43849__$1;
(statearr_43860_43941[(2)] = null);

(statearr_43860_43941[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43850 === (39))){
var state_43849__$1 = state_43849;
var statearr_43864_43942 = state_43849__$1;
(statearr_43864_43942[(2)] = null);

(statearr_43864_43942[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43850 === (4))){
var inst_43717 = (state_43849[(12)]);
var inst_43717__$1 = (state_43849[(2)]);
var inst_43718 = (inst_43717__$1 == null);
var state_43849__$1 = (function (){var statearr_43865 = state_43849;
(statearr_43865[(12)] = inst_43717__$1);

return statearr_43865;
})();
if(cljs.core.truth_(inst_43718)){
var statearr_43866_43943 = state_43849__$1;
(statearr_43866_43943[(1)] = (5));

} else {
var statearr_43867_43944 = state_43849__$1;
(statearr_43867_43944[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43850 === (15))){
var inst_43728 = (state_43849[(14)]);
var inst_43727 = (state_43849[(15)]);
var inst_43729 = (state_43849[(16)]);
var inst_43726 = (state_43849[(17)]);
var inst_43744 = (state_43849[(2)]);
var inst_43745 = (inst_43729 + (1));
var tmp43861 = inst_43728;
var tmp43862 = inst_43727;
var tmp43863 = inst_43726;
var inst_43726__$1 = tmp43863;
var inst_43727__$1 = tmp43862;
var inst_43728__$1 = tmp43861;
var inst_43729__$1 = inst_43745;
var state_43849__$1 = (function (){var statearr_43868 = state_43849;
(statearr_43868[(14)] = inst_43728__$1);

(statearr_43868[(18)] = inst_43744);

(statearr_43868[(15)] = inst_43727__$1);

(statearr_43868[(16)] = inst_43729__$1);

(statearr_43868[(17)] = inst_43726__$1);

return statearr_43868;
})();
var statearr_43869_43945 = state_43849__$1;
(statearr_43869_43945[(2)] = null);

(statearr_43869_43945[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43850 === (21))){
var inst_43771 = (state_43849[(2)]);
var state_43849__$1 = state_43849;
var statearr_43873_43946 = state_43849__$1;
(statearr_43873_43946[(2)] = inst_43771);

(statearr_43873_43946[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43850 === (31))){
var inst_43797 = (state_43849[(9)]);
var inst_43801 = done.call(null,null);
var inst_43802 = cljs.core.async.untap_STAR_.call(null,m,inst_43797);
var state_43849__$1 = (function (){var statearr_43874 = state_43849;
(statearr_43874[(19)] = inst_43801);

return statearr_43874;
})();
var statearr_43875_43947 = state_43849__$1;
(statearr_43875_43947[(2)] = inst_43802);

(statearr_43875_43947[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43850 === (32))){
var inst_43790 = (state_43849[(10)]);
var inst_43792 = (state_43849[(11)]);
var inst_43791 = (state_43849[(20)]);
var inst_43789 = (state_43849[(21)]);
var inst_43804 = (state_43849[(2)]);
var inst_43805 = (inst_43792 + (1));
var tmp43870 = inst_43790;
var tmp43871 = inst_43791;
var tmp43872 = inst_43789;
var inst_43789__$1 = tmp43872;
var inst_43790__$1 = tmp43870;
var inst_43791__$1 = tmp43871;
var inst_43792__$1 = inst_43805;
var state_43849__$1 = (function (){var statearr_43876 = state_43849;
(statearr_43876[(10)] = inst_43790__$1);

(statearr_43876[(11)] = inst_43792__$1);

(statearr_43876[(20)] = inst_43791__$1);

(statearr_43876[(21)] = inst_43789__$1);

(statearr_43876[(22)] = inst_43804);

return statearr_43876;
})();
var statearr_43877_43948 = state_43849__$1;
(statearr_43877_43948[(2)] = null);

(statearr_43877_43948[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43850 === (40))){
var inst_43817 = (state_43849[(23)]);
var inst_43821 = done.call(null,null);
var inst_43822 = cljs.core.async.untap_STAR_.call(null,m,inst_43817);
var state_43849__$1 = (function (){var statearr_43878 = state_43849;
(statearr_43878[(24)] = inst_43821);

return statearr_43878;
})();
var statearr_43879_43949 = state_43849__$1;
(statearr_43879_43949[(2)] = inst_43822);

(statearr_43879_43949[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43850 === (33))){
var inst_43808 = (state_43849[(25)]);
var inst_43810 = cljs.core.chunked_seq_QMARK_.call(null,inst_43808);
var state_43849__$1 = state_43849;
if(inst_43810){
var statearr_43880_43950 = state_43849__$1;
(statearr_43880_43950[(1)] = (36));

} else {
var statearr_43881_43951 = state_43849__$1;
(statearr_43881_43951[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43850 === (13))){
var inst_43738 = (state_43849[(26)]);
var inst_43741 = cljs.core.async.close_BANG_.call(null,inst_43738);
var state_43849__$1 = state_43849;
var statearr_43882_43952 = state_43849__$1;
(statearr_43882_43952[(2)] = inst_43741);

(statearr_43882_43952[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43850 === (22))){
var inst_43761 = (state_43849[(8)]);
var inst_43764 = cljs.core.async.close_BANG_.call(null,inst_43761);
var state_43849__$1 = state_43849;
var statearr_43883_43953 = state_43849__$1;
(statearr_43883_43953[(2)] = inst_43764);

(statearr_43883_43953[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43850 === (36))){
var inst_43808 = (state_43849[(25)]);
var inst_43812 = cljs.core.chunk_first.call(null,inst_43808);
var inst_43813 = cljs.core.chunk_rest.call(null,inst_43808);
var inst_43814 = cljs.core.count.call(null,inst_43812);
var inst_43789 = inst_43813;
var inst_43790 = inst_43812;
var inst_43791 = inst_43814;
var inst_43792 = (0);
var state_43849__$1 = (function (){var statearr_43884 = state_43849;
(statearr_43884[(10)] = inst_43790);

(statearr_43884[(11)] = inst_43792);

(statearr_43884[(20)] = inst_43791);

(statearr_43884[(21)] = inst_43789);

return statearr_43884;
})();
var statearr_43885_43954 = state_43849__$1;
(statearr_43885_43954[(2)] = null);

(statearr_43885_43954[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43850 === (41))){
var inst_43808 = (state_43849[(25)]);
var inst_43824 = (state_43849[(2)]);
var inst_43825 = cljs.core.next.call(null,inst_43808);
var inst_43789 = inst_43825;
var inst_43790 = null;
var inst_43791 = (0);
var inst_43792 = (0);
var state_43849__$1 = (function (){var statearr_43886 = state_43849;
(statearr_43886[(10)] = inst_43790);

(statearr_43886[(11)] = inst_43792);

(statearr_43886[(27)] = inst_43824);

(statearr_43886[(20)] = inst_43791);

(statearr_43886[(21)] = inst_43789);

return statearr_43886;
})();
var statearr_43887_43955 = state_43849__$1;
(statearr_43887_43955[(2)] = null);

(statearr_43887_43955[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43850 === (43))){
var state_43849__$1 = state_43849;
var statearr_43888_43956 = state_43849__$1;
(statearr_43888_43956[(2)] = null);

(statearr_43888_43956[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43850 === (29))){
var inst_43833 = (state_43849[(2)]);
var state_43849__$1 = state_43849;
var statearr_43889_43957 = state_43849__$1;
(statearr_43889_43957[(2)] = inst_43833);

(statearr_43889_43957[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43850 === (44))){
var inst_43842 = (state_43849[(2)]);
var state_43849__$1 = (function (){var statearr_43890 = state_43849;
(statearr_43890[(28)] = inst_43842);

return statearr_43890;
})();
var statearr_43891_43958 = state_43849__$1;
(statearr_43891_43958[(2)] = null);

(statearr_43891_43958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43850 === (6))){
var inst_43781 = (state_43849[(29)]);
var inst_43780 = cljs.core.deref.call(null,cs);
var inst_43781__$1 = cljs.core.keys.call(null,inst_43780);
var inst_43782 = cljs.core.count.call(null,inst_43781__$1);
var inst_43783 = cljs.core.reset_BANG_.call(null,dctr,inst_43782);
var inst_43788 = cljs.core.seq.call(null,inst_43781__$1);
var inst_43789 = inst_43788;
var inst_43790 = null;
var inst_43791 = (0);
var inst_43792 = (0);
var state_43849__$1 = (function (){var statearr_43892 = state_43849;
(statearr_43892[(29)] = inst_43781__$1);

(statearr_43892[(10)] = inst_43790);

(statearr_43892[(30)] = inst_43783);

(statearr_43892[(11)] = inst_43792);

(statearr_43892[(20)] = inst_43791);

(statearr_43892[(21)] = inst_43789);

return statearr_43892;
})();
var statearr_43893_43959 = state_43849__$1;
(statearr_43893_43959[(2)] = null);

(statearr_43893_43959[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43850 === (28))){
var inst_43808 = (state_43849[(25)]);
var inst_43789 = (state_43849[(21)]);
var inst_43808__$1 = cljs.core.seq.call(null,inst_43789);
var state_43849__$1 = (function (){var statearr_43894 = state_43849;
(statearr_43894[(25)] = inst_43808__$1);

return statearr_43894;
})();
if(inst_43808__$1){
var statearr_43895_43960 = state_43849__$1;
(statearr_43895_43960[(1)] = (33));

} else {
var statearr_43896_43961 = state_43849__$1;
(statearr_43896_43961[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43850 === (25))){
var inst_43792 = (state_43849[(11)]);
var inst_43791 = (state_43849[(20)]);
var inst_43794 = (inst_43792 < inst_43791);
var inst_43795 = inst_43794;
var state_43849__$1 = state_43849;
if(cljs.core.truth_(inst_43795)){
var statearr_43897_43962 = state_43849__$1;
(statearr_43897_43962[(1)] = (27));

} else {
var statearr_43898_43963 = state_43849__$1;
(statearr_43898_43963[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43850 === (34))){
var state_43849__$1 = state_43849;
var statearr_43899_43964 = state_43849__$1;
(statearr_43899_43964[(2)] = null);

(statearr_43899_43964[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43850 === (17))){
var state_43849__$1 = state_43849;
var statearr_43900_43965 = state_43849__$1;
(statearr_43900_43965[(2)] = null);

(statearr_43900_43965[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43850 === (3))){
var inst_43847 = (state_43849[(2)]);
var state_43849__$1 = state_43849;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43849__$1,inst_43847);
} else {
if((state_val_43850 === (12))){
var inst_43776 = (state_43849[(2)]);
var state_43849__$1 = state_43849;
var statearr_43901_43966 = state_43849__$1;
(statearr_43901_43966[(2)] = inst_43776);

(statearr_43901_43966[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43850 === (2))){
var state_43849__$1 = state_43849;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43849__$1,(4),ch);
} else {
if((state_val_43850 === (23))){
var state_43849__$1 = state_43849;
var statearr_43902_43967 = state_43849__$1;
(statearr_43902_43967[(2)] = null);

(statearr_43902_43967[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43850 === (35))){
var inst_43831 = (state_43849[(2)]);
var state_43849__$1 = state_43849;
var statearr_43903_43968 = state_43849__$1;
(statearr_43903_43968[(2)] = inst_43831);

(statearr_43903_43968[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43850 === (19))){
var inst_43748 = (state_43849[(7)]);
var inst_43752 = cljs.core.chunk_first.call(null,inst_43748);
var inst_43753 = cljs.core.chunk_rest.call(null,inst_43748);
var inst_43754 = cljs.core.count.call(null,inst_43752);
var inst_43726 = inst_43753;
var inst_43727 = inst_43752;
var inst_43728 = inst_43754;
var inst_43729 = (0);
var state_43849__$1 = (function (){var statearr_43904 = state_43849;
(statearr_43904[(14)] = inst_43728);

(statearr_43904[(15)] = inst_43727);

(statearr_43904[(16)] = inst_43729);

(statearr_43904[(17)] = inst_43726);

return statearr_43904;
})();
var statearr_43905_43969 = state_43849__$1;
(statearr_43905_43969[(2)] = null);

(statearr_43905_43969[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43850 === (11))){
var inst_43726 = (state_43849[(17)]);
var inst_43748 = (state_43849[(7)]);
var inst_43748__$1 = cljs.core.seq.call(null,inst_43726);
var state_43849__$1 = (function (){var statearr_43906 = state_43849;
(statearr_43906[(7)] = inst_43748__$1);

return statearr_43906;
})();
if(inst_43748__$1){
var statearr_43907_43970 = state_43849__$1;
(statearr_43907_43970[(1)] = (16));

} else {
var statearr_43908_43971 = state_43849__$1;
(statearr_43908_43971[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43850 === (9))){
var inst_43778 = (state_43849[(2)]);
var state_43849__$1 = state_43849;
var statearr_43909_43972 = state_43849__$1;
(statearr_43909_43972[(2)] = inst_43778);

(statearr_43909_43972[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43850 === (5))){
var inst_43724 = cljs.core.deref.call(null,cs);
var inst_43725 = cljs.core.seq.call(null,inst_43724);
var inst_43726 = inst_43725;
var inst_43727 = null;
var inst_43728 = (0);
var inst_43729 = (0);
var state_43849__$1 = (function (){var statearr_43910 = state_43849;
(statearr_43910[(14)] = inst_43728);

(statearr_43910[(15)] = inst_43727);

(statearr_43910[(16)] = inst_43729);

(statearr_43910[(17)] = inst_43726);

return statearr_43910;
})();
var statearr_43911_43973 = state_43849__$1;
(statearr_43911_43973[(2)] = null);

(statearr_43911_43973[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43850 === (14))){
var state_43849__$1 = state_43849;
var statearr_43912_43974 = state_43849__$1;
(statearr_43912_43974[(2)] = null);

(statearr_43912_43974[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43850 === (45))){
var inst_43839 = (state_43849[(2)]);
var state_43849__$1 = state_43849;
var statearr_43913_43975 = state_43849__$1;
(statearr_43913_43975[(2)] = inst_43839);

(statearr_43913_43975[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43850 === (26))){
var inst_43781 = (state_43849[(29)]);
var inst_43835 = (state_43849[(2)]);
var inst_43836 = cljs.core.seq.call(null,inst_43781);
var state_43849__$1 = (function (){var statearr_43914 = state_43849;
(statearr_43914[(31)] = inst_43835);

return statearr_43914;
})();
if(inst_43836){
var statearr_43915_43976 = state_43849__$1;
(statearr_43915_43976[(1)] = (42));

} else {
var statearr_43916_43977 = state_43849__$1;
(statearr_43916_43977[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43850 === (16))){
var inst_43748 = (state_43849[(7)]);
var inst_43750 = cljs.core.chunked_seq_QMARK_.call(null,inst_43748);
var state_43849__$1 = state_43849;
if(inst_43750){
var statearr_43917_43978 = state_43849__$1;
(statearr_43917_43978[(1)] = (19));

} else {
var statearr_43918_43979 = state_43849__$1;
(statearr_43918_43979[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43850 === (38))){
var inst_43828 = (state_43849[(2)]);
var state_43849__$1 = state_43849;
var statearr_43919_43980 = state_43849__$1;
(statearr_43919_43980[(2)] = inst_43828);

(statearr_43919_43980[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43850 === (30))){
var state_43849__$1 = state_43849;
var statearr_43920_43981 = state_43849__$1;
(statearr_43920_43981[(2)] = null);

(statearr_43920_43981[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43850 === (10))){
var inst_43727 = (state_43849[(15)]);
var inst_43729 = (state_43849[(16)]);
var inst_43737 = cljs.core._nth.call(null,inst_43727,inst_43729);
var inst_43738 = cljs.core.nth.call(null,inst_43737,(0),null);
var inst_43739 = cljs.core.nth.call(null,inst_43737,(1),null);
var state_43849__$1 = (function (){var statearr_43921 = state_43849;
(statearr_43921[(26)] = inst_43738);

return statearr_43921;
})();
if(cljs.core.truth_(inst_43739)){
var statearr_43922_43982 = state_43849__$1;
(statearr_43922_43982[(1)] = (13));

} else {
var statearr_43923_43983 = state_43849__$1;
(statearr_43923_43983[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43850 === (18))){
var inst_43774 = (state_43849[(2)]);
var state_43849__$1 = state_43849;
var statearr_43924_43984 = state_43849__$1;
(statearr_43924_43984[(2)] = inst_43774);

(statearr_43924_43984[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43850 === (42))){
var state_43849__$1 = state_43849;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43849__$1,(45),dchan);
} else {
if((state_val_43850 === (37))){
var inst_43808 = (state_43849[(25)]);
var inst_43717 = (state_43849[(12)]);
var inst_43817 = (state_43849[(23)]);
var inst_43817__$1 = cljs.core.first.call(null,inst_43808);
var inst_43818 = cljs.core.async.put_BANG_.call(null,inst_43817__$1,inst_43717,done);
var state_43849__$1 = (function (){var statearr_43925 = state_43849;
(statearr_43925[(23)] = inst_43817__$1);

return statearr_43925;
})();
if(cljs.core.truth_(inst_43818)){
var statearr_43926_43985 = state_43849__$1;
(statearr_43926_43985[(1)] = (39));

} else {
var statearr_43927_43986 = state_43849__$1;
(statearr_43927_43986[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43850 === (8))){
var inst_43728 = (state_43849[(14)]);
var inst_43729 = (state_43849[(16)]);
var inst_43731 = (inst_43729 < inst_43728);
var inst_43732 = inst_43731;
var state_43849__$1 = state_43849;
if(cljs.core.truth_(inst_43732)){
var statearr_43928_43987 = state_43849__$1;
(statearr_43928_43987[(1)] = (10));

} else {
var statearr_43929_43988 = state_43849__$1;
(statearr_43929_43988[(1)] = (11));

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
});})(c__43129__auto___43934,cs,m,dchan,dctr,done))
;
return ((function (switch__43041__auto__,c__43129__auto___43934,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__43042__auto__ = null;
var cljs$core$async$mult_$_state_machine__43042__auto____0 = (function (){
var statearr_43930 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43930[(0)] = cljs$core$async$mult_$_state_machine__43042__auto__);

(statearr_43930[(1)] = (1));

return statearr_43930;
});
var cljs$core$async$mult_$_state_machine__43042__auto____1 = (function (state_43849){
while(true){
var ret_value__43043__auto__ = (function (){try{while(true){
var result__43044__auto__ = switch__43041__auto__.call(null,state_43849);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43044__auto__;
}
break;
}
}catch (e43931){if((e43931 instanceof Object)){
var ex__43045__auto__ = e43931;
var statearr_43932_43989 = state_43849;
(statearr_43932_43989[(5)] = ex__43045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43849);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43931;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43990 = state_43849;
state_43849 = G__43990;
continue;
} else {
return ret_value__43043__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__43042__auto__ = function(state_43849){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__43042__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__43042__auto____1.call(this,state_43849);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__43042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__43042__auto____0;
cljs$core$async$mult_$_state_machine__43042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__43042__auto____1;
return cljs$core$async$mult_$_state_machine__43042__auto__;
})()
;})(switch__43041__auto__,c__43129__auto___43934,cs,m,dchan,dctr,done))
})();
var state__43131__auto__ = (function (){var statearr_43933 = f__43130__auto__.call(null);
(statearr_43933[(6)] = c__43129__auto___43934);

return statearr_43933;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43131__auto__);
});})(c__43129__auto___43934,cs,m,dchan,dctr,done))
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
var G__43992 = arguments.length;
switch (G__43992) {
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
var len__37881__auto___44004 = arguments.length;
var i__37882__auto___44005 = (0);
while(true){
if((i__37882__auto___44005 < len__37881__auto___44004)){
args__37888__auto__.push((arguments[i__37882__auto___44005]));

var G__44006 = (i__37882__auto___44005 + (1));
i__37882__auto___44005 = G__44006;
continue;
} else {
}
break;
}

var argseq__37889__auto__ = ((((3) < args__37888__auto__.length))?(new cljs.core.IndexedSeq(args__37888__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__37889__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__43998){
var map__43999 = p__43998;
var map__43999__$1 = ((((!((map__43999 == null)))?((((map__43999.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43999.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43999):map__43999);
var opts = map__43999__$1;
var statearr_44001_44007 = state;
(statearr_44001_44007[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__43999,map__43999__$1,opts){
return (function (val){
var statearr_44002_44008 = state;
(statearr_44002_44008[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__43999,map__43999__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_44003_44009 = state;
(statearr_44003_44009[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq43994){
var G__43995 = cljs.core.first.call(null,seq43994);
var seq43994__$1 = cljs.core.next.call(null,seq43994);
var G__43996 = cljs.core.first.call(null,seq43994__$1);
var seq43994__$2 = cljs.core.next.call(null,seq43994__$1);
var G__43997 = cljs.core.first.call(null,seq43994__$2);
var seq43994__$3 = cljs.core.next.call(null,seq43994__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__43995,G__43996,G__43997,seq43994__$3);
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
if(typeof cljs.core.async.t_cljs$core$async44010 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44010 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta44011){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta44011 = meta44011;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async44010.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_44012,meta44011__$1){
var self__ = this;
var _44012__$1 = this;
return (new cljs.core.async.t_cljs$core$async44010(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta44011__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44010.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_44012){
var self__ = this;
var _44012__$1 = this;
return self__.meta44011;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44010.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44010.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44010.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44010.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44010.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44010.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44010.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44010.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async44010.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta44011","meta44011",-2095491166,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44010.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44010.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44010";

cljs.core.async.t_cljs$core$async44010.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__37367__auto__,writer__37368__auto__,opt__37369__auto__){
return cljs.core._write.call(null,writer__37368__auto__,"cljs.core.async/t_cljs$core$async44010");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async44010 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async44010(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta44011){
return (new cljs.core.async.t_cljs$core$async44010(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta44011));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async44010(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__43129__auto___44174 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43129__auto___44174,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__43130__auto__ = (function (){var switch__43041__auto__ = ((function (c__43129__auto___44174,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_44114){
var state_val_44115 = (state_44114[(1)]);
if((state_val_44115 === (7))){
var inst_44029 = (state_44114[(2)]);
var state_44114__$1 = state_44114;
var statearr_44116_44175 = state_44114__$1;
(statearr_44116_44175[(2)] = inst_44029);

(statearr_44116_44175[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44115 === (20))){
var inst_44041 = (state_44114[(7)]);
var state_44114__$1 = state_44114;
var statearr_44117_44176 = state_44114__$1;
(statearr_44117_44176[(2)] = inst_44041);

(statearr_44117_44176[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44115 === (27))){
var state_44114__$1 = state_44114;
var statearr_44118_44177 = state_44114__$1;
(statearr_44118_44177[(2)] = null);

(statearr_44118_44177[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44115 === (1))){
var inst_44016 = (state_44114[(8)]);
var inst_44016__$1 = calc_state.call(null);
var inst_44018 = (inst_44016__$1 == null);
var inst_44019 = cljs.core.not.call(null,inst_44018);
var state_44114__$1 = (function (){var statearr_44119 = state_44114;
(statearr_44119[(8)] = inst_44016__$1);

return statearr_44119;
})();
if(inst_44019){
var statearr_44120_44178 = state_44114__$1;
(statearr_44120_44178[(1)] = (2));

} else {
var statearr_44121_44179 = state_44114__$1;
(statearr_44121_44179[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44115 === (24))){
var inst_44074 = (state_44114[(9)]);
var inst_44065 = (state_44114[(10)]);
var inst_44088 = (state_44114[(11)]);
var inst_44088__$1 = inst_44065.call(null,inst_44074);
var state_44114__$1 = (function (){var statearr_44122 = state_44114;
(statearr_44122[(11)] = inst_44088__$1);

return statearr_44122;
})();
if(cljs.core.truth_(inst_44088__$1)){
var statearr_44123_44180 = state_44114__$1;
(statearr_44123_44180[(1)] = (29));

} else {
var statearr_44124_44181 = state_44114__$1;
(statearr_44124_44181[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44115 === (4))){
var inst_44032 = (state_44114[(2)]);
var state_44114__$1 = state_44114;
if(cljs.core.truth_(inst_44032)){
var statearr_44125_44182 = state_44114__$1;
(statearr_44125_44182[(1)] = (8));

} else {
var statearr_44126_44183 = state_44114__$1;
(statearr_44126_44183[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44115 === (15))){
var inst_44059 = (state_44114[(2)]);
var state_44114__$1 = state_44114;
if(cljs.core.truth_(inst_44059)){
var statearr_44127_44184 = state_44114__$1;
(statearr_44127_44184[(1)] = (19));

} else {
var statearr_44128_44185 = state_44114__$1;
(statearr_44128_44185[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44115 === (21))){
var inst_44064 = (state_44114[(12)]);
var inst_44064__$1 = (state_44114[(2)]);
var inst_44065 = cljs.core.get.call(null,inst_44064__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_44066 = cljs.core.get.call(null,inst_44064__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_44067 = cljs.core.get.call(null,inst_44064__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_44114__$1 = (function (){var statearr_44129 = state_44114;
(statearr_44129[(12)] = inst_44064__$1);

(statearr_44129[(10)] = inst_44065);

(statearr_44129[(13)] = inst_44066);

return statearr_44129;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_44114__$1,(22),inst_44067);
} else {
if((state_val_44115 === (31))){
var inst_44096 = (state_44114[(2)]);
var state_44114__$1 = state_44114;
if(cljs.core.truth_(inst_44096)){
var statearr_44130_44186 = state_44114__$1;
(statearr_44130_44186[(1)] = (32));

} else {
var statearr_44131_44187 = state_44114__$1;
(statearr_44131_44187[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44115 === (32))){
var inst_44073 = (state_44114[(14)]);
var state_44114__$1 = state_44114;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44114__$1,(35),out,inst_44073);
} else {
if((state_val_44115 === (33))){
var inst_44064 = (state_44114[(12)]);
var inst_44041 = inst_44064;
var state_44114__$1 = (function (){var statearr_44132 = state_44114;
(statearr_44132[(7)] = inst_44041);

return statearr_44132;
})();
var statearr_44133_44188 = state_44114__$1;
(statearr_44133_44188[(2)] = null);

(statearr_44133_44188[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44115 === (13))){
var inst_44041 = (state_44114[(7)]);
var inst_44048 = inst_44041.cljs$lang$protocol_mask$partition0$;
var inst_44049 = (inst_44048 & (64));
var inst_44050 = inst_44041.cljs$core$ISeq$;
var inst_44051 = (cljs.core.PROTOCOL_SENTINEL === inst_44050);
var inst_44052 = (inst_44049) || (inst_44051);
var state_44114__$1 = state_44114;
if(cljs.core.truth_(inst_44052)){
var statearr_44134_44189 = state_44114__$1;
(statearr_44134_44189[(1)] = (16));

} else {
var statearr_44135_44190 = state_44114__$1;
(statearr_44135_44190[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44115 === (22))){
var inst_44074 = (state_44114[(9)]);
var inst_44073 = (state_44114[(14)]);
var inst_44072 = (state_44114[(2)]);
var inst_44073__$1 = cljs.core.nth.call(null,inst_44072,(0),null);
var inst_44074__$1 = cljs.core.nth.call(null,inst_44072,(1),null);
var inst_44075 = (inst_44073__$1 == null);
var inst_44076 = cljs.core._EQ_.call(null,inst_44074__$1,change);
var inst_44077 = (inst_44075) || (inst_44076);
var state_44114__$1 = (function (){var statearr_44136 = state_44114;
(statearr_44136[(9)] = inst_44074__$1);

(statearr_44136[(14)] = inst_44073__$1);

return statearr_44136;
})();
if(cljs.core.truth_(inst_44077)){
var statearr_44137_44191 = state_44114__$1;
(statearr_44137_44191[(1)] = (23));

} else {
var statearr_44138_44192 = state_44114__$1;
(statearr_44138_44192[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44115 === (36))){
var inst_44064 = (state_44114[(12)]);
var inst_44041 = inst_44064;
var state_44114__$1 = (function (){var statearr_44139 = state_44114;
(statearr_44139[(7)] = inst_44041);

return statearr_44139;
})();
var statearr_44140_44193 = state_44114__$1;
(statearr_44140_44193[(2)] = null);

(statearr_44140_44193[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44115 === (29))){
var inst_44088 = (state_44114[(11)]);
var state_44114__$1 = state_44114;
var statearr_44141_44194 = state_44114__$1;
(statearr_44141_44194[(2)] = inst_44088);

(statearr_44141_44194[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44115 === (6))){
var state_44114__$1 = state_44114;
var statearr_44142_44195 = state_44114__$1;
(statearr_44142_44195[(2)] = false);

(statearr_44142_44195[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44115 === (28))){
var inst_44084 = (state_44114[(2)]);
var inst_44085 = calc_state.call(null);
var inst_44041 = inst_44085;
var state_44114__$1 = (function (){var statearr_44143 = state_44114;
(statearr_44143[(15)] = inst_44084);

(statearr_44143[(7)] = inst_44041);

return statearr_44143;
})();
var statearr_44144_44196 = state_44114__$1;
(statearr_44144_44196[(2)] = null);

(statearr_44144_44196[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44115 === (25))){
var inst_44110 = (state_44114[(2)]);
var state_44114__$1 = state_44114;
var statearr_44145_44197 = state_44114__$1;
(statearr_44145_44197[(2)] = inst_44110);

(statearr_44145_44197[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44115 === (34))){
var inst_44108 = (state_44114[(2)]);
var state_44114__$1 = state_44114;
var statearr_44146_44198 = state_44114__$1;
(statearr_44146_44198[(2)] = inst_44108);

(statearr_44146_44198[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44115 === (17))){
var state_44114__$1 = state_44114;
var statearr_44147_44199 = state_44114__$1;
(statearr_44147_44199[(2)] = false);

(statearr_44147_44199[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44115 === (3))){
var state_44114__$1 = state_44114;
var statearr_44148_44200 = state_44114__$1;
(statearr_44148_44200[(2)] = false);

(statearr_44148_44200[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44115 === (12))){
var inst_44112 = (state_44114[(2)]);
var state_44114__$1 = state_44114;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44114__$1,inst_44112);
} else {
if((state_val_44115 === (2))){
var inst_44016 = (state_44114[(8)]);
var inst_44021 = inst_44016.cljs$lang$protocol_mask$partition0$;
var inst_44022 = (inst_44021 & (64));
var inst_44023 = inst_44016.cljs$core$ISeq$;
var inst_44024 = (cljs.core.PROTOCOL_SENTINEL === inst_44023);
var inst_44025 = (inst_44022) || (inst_44024);
var state_44114__$1 = state_44114;
if(cljs.core.truth_(inst_44025)){
var statearr_44149_44201 = state_44114__$1;
(statearr_44149_44201[(1)] = (5));

} else {
var statearr_44150_44202 = state_44114__$1;
(statearr_44150_44202[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44115 === (23))){
var inst_44073 = (state_44114[(14)]);
var inst_44079 = (inst_44073 == null);
var state_44114__$1 = state_44114;
if(cljs.core.truth_(inst_44079)){
var statearr_44151_44203 = state_44114__$1;
(statearr_44151_44203[(1)] = (26));

} else {
var statearr_44152_44204 = state_44114__$1;
(statearr_44152_44204[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44115 === (35))){
var inst_44099 = (state_44114[(2)]);
var state_44114__$1 = state_44114;
if(cljs.core.truth_(inst_44099)){
var statearr_44153_44205 = state_44114__$1;
(statearr_44153_44205[(1)] = (36));

} else {
var statearr_44154_44206 = state_44114__$1;
(statearr_44154_44206[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44115 === (19))){
var inst_44041 = (state_44114[(7)]);
var inst_44061 = cljs.core.apply.call(null,cljs.core.hash_map,inst_44041);
var state_44114__$1 = state_44114;
var statearr_44155_44207 = state_44114__$1;
(statearr_44155_44207[(2)] = inst_44061);

(statearr_44155_44207[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44115 === (11))){
var inst_44041 = (state_44114[(7)]);
var inst_44045 = (inst_44041 == null);
var inst_44046 = cljs.core.not.call(null,inst_44045);
var state_44114__$1 = state_44114;
if(inst_44046){
var statearr_44156_44208 = state_44114__$1;
(statearr_44156_44208[(1)] = (13));

} else {
var statearr_44157_44209 = state_44114__$1;
(statearr_44157_44209[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44115 === (9))){
var inst_44016 = (state_44114[(8)]);
var state_44114__$1 = state_44114;
var statearr_44158_44210 = state_44114__$1;
(statearr_44158_44210[(2)] = inst_44016);

(statearr_44158_44210[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44115 === (5))){
var state_44114__$1 = state_44114;
var statearr_44159_44211 = state_44114__$1;
(statearr_44159_44211[(2)] = true);

(statearr_44159_44211[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44115 === (14))){
var state_44114__$1 = state_44114;
var statearr_44160_44212 = state_44114__$1;
(statearr_44160_44212[(2)] = false);

(statearr_44160_44212[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44115 === (26))){
var inst_44074 = (state_44114[(9)]);
var inst_44081 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_44074);
var state_44114__$1 = state_44114;
var statearr_44161_44213 = state_44114__$1;
(statearr_44161_44213[(2)] = inst_44081);

(statearr_44161_44213[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44115 === (16))){
var state_44114__$1 = state_44114;
var statearr_44162_44214 = state_44114__$1;
(statearr_44162_44214[(2)] = true);

(statearr_44162_44214[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44115 === (38))){
var inst_44104 = (state_44114[(2)]);
var state_44114__$1 = state_44114;
var statearr_44163_44215 = state_44114__$1;
(statearr_44163_44215[(2)] = inst_44104);

(statearr_44163_44215[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44115 === (30))){
var inst_44074 = (state_44114[(9)]);
var inst_44065 = (state_44114[(10)]);
var inst_44066 = (state_44114[(13)]);
var inst_44091 = cljs.core.empty_QMARK_.call(null,inst_44065);
var inst_44092 = inst_44066.call(null,inst_44074);
var inst_44093 = cljs.core.not.call(null,inst_44092);
var inst_44094 = (inst_44091) && (inst_44093);
var state_44114__$1 = state_44114;
var statearr_44164_44216 = state_44114__$1;
(statearr_44164_44216[(2)] = inst_44094);

(statearr_44164_44216[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44115 === (10))){
var inst_44016 = (state_44114[(8)]);
var inst_44037 = (state_44114[(2)]);
var inst_44038 = cljs.core.get.call(null,inst_44037,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_44039 = cljs.core.get.call(null,inst_44037,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_44040 = cljs.core.get.call(null,inst_44037,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_44041 = inst_44016;
var state_44114__$1 = (function (){var statearr_44165 = state_44114;
(statearr_44165[(16)] = inst_44038);

(statearr_44165[(17)] = inst_44040);

(statearr_44165[(7)] = inst_44041);

(statearr_44165[(18)] = inst_44039);

return statearr_44165;
})();
var statearr_44166_44217 = state_44114__$1;
(statearr_44166_44217[(2)] = null);

(statearr_44166_44217[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44115 === (18))){
var inst_44056 = (state_44114[(2)]);
var state_44114__$1 = state_44114;
var statearr_44167_44218 = state_44114__$1;
(statearr_44167_44218[(2)] = inst_44056);

(statearr_44167_44218[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44115 === (37))){
var state_44114__$1 = state_44114;
var statearr_44168_44219 = state_44114__$1;
(statearr_44168_44219[(2)] = null);

(statearr_44168_44219[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44115 === (8))){
var inst_44016 = (state_44114[(8)]);
var inst_44034 = cljs.core.apply.call(null,cljs.core.hash_map,inst_44016);
var state_44114__$1 = state_44114;
var statearr_44169_44220 = state_44114__$1;
(statearr_44169_44220[(2)] = inst_44034);

(statearr_44169_44220[(1)] = (10));


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
});})(c__43129__auto___44174,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__43041__auto__,c__43129__auto___44174,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__43042__auto__ = null;
var cljs$core$async$mix_$_state_machine__43042__auto____0 = (function (){
var statearr_44170 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44170[(0)] = cljs$core$async$mix_$_state_machine__43042__auto__);

(statearr_44170[(1)] = (1));

return statearr_44170;
});
var cljs$core$async$mix_$_state_machine__43042__auto____1 = (function (state_44114){
while(true){
var ret_value__43043__auto__ = (function (){try{while(true){
var result__43044__auto__ = switch__43041__auto__.call(null,state_44114);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43044__auto__;
}
break;
}
}catch (e44171){if((e44171 instanceof Object)){
var ex__43045__auto__ = e44171;
var statearr_44172_44221 = state_44114;
(statearr_44172_44221[(5)] = ex__43045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44114);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44171;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44222 = state_44114;
state_44114 = G__44222;
continue;
} else {
return ret_value__43043__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__43042__auto__ = function(state_44114){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__43042__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__43042__auto____1.call(this,state_44114);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__43042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__43042__auto____0;
cljs$core$async$mix_$_state_machine__43042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__43042__auto____1;
return cljs$core$async$mix_$_state_machine__43042__auto__;
})()
;})(switch__43041__auto__,c__43129__auto___44174,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__43131__auto__ = (function (){var statearr_44173 = f__43130__auto__.call(null);
(statearr_44173[(6)] = c__43129__auto___44174);

return statearr_44173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43131__auto__);
});})(c__43129__auto___44174,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__44224 = arguments.length;
switch (G__44224) {
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
var G__44228 = arguments.length;
switch (G__44228) {
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
return (function (p1__44226_SHARP_){
if(cljs.core.truth_(p1__44226_SHARP_.call(null,topic))){
return p1__44226_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__44226_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__36756__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async44229 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44229 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta44230){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta44230 = meta44230;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async44229.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_44231,meta44230__$1){
var self__ = this;
var _44231__$1 = this;
return (new cljs.core.async.t_cljs$core$async44229(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta44230__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44229.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_44231){
var self__ = this;
var _44231__$1 = this;
return self__.meta44230;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44229.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44229.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44229.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44229.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44229.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async44229.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44229.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44229.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta44230","meta44230",289085762,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44229.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44229.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44229";

cljs.core.async.t_cljs$core$async44229.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__37367__auto__,writer__37368__auto__,opt__37369__auto__){
return cljs.core._write.call(null,writer__37368__auto__,"cljs.core.async/t_cljs$core$async44229");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async44229 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async44229(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta44230){
return (new cljs.core.async.t_cljs$core$async44229(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta44230));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async44229(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__43129__auto___44349 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43129__auto___44349,mults,ensure_mult,p){
return (function (){
var f__43130__auto__ = (function (){var switch__43041__auto__ = ((function (c__43129__auto___44349,mults,ensure_mult,p){
return (function (state_44303){
var state_val_44304 = (state_44303[(1)]);
if((state_val_44304 === (7))){
var inst_44299 = (state_44303[(2)]);
var state_44303__$1 = state_44303;
var statearr_44305_44350 = state_44303__$1;
(statearr_44305_44350[(2)] = inst_44299);

(statearr_44305_44350[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44304 === (20))){
var state_44303__$1 = state_44303;
var statearr_44306_44351 = state_44303__$1;
(statearr_44306_44351[(2)] = null);

(statearr_44306_44351[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44304 === (1))){
var state_44303__$1 = state_44303;
var statearr_44307_44352 = state_44303__$1;
(statearr_44307_44352[(2)] = null);

(statearr_44307_44352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44304 === (24))){
var inst_44282 = (state_44303[(7)]);
var inst_44291 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_44282);
var state_44303__$1 = state_44303;
var statearr_44308_44353 = state_44303__$1;
(statearr_44308_44353[(2)] = inst_44291);

(statearr_44308_44353[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44304 === (4))){
var inst_44234 = (state_44303[(8)]);
var inst_44234__$1 = (state_44303[(2)]);
var inst_44235 = (inst_44234__$1 == null);
var state_44303__$1 = (function (){var statearr_44309 = state_44303;
(statearr_44309[(8)] = inst_44234__$1);

return statearr_44309;
})();
if(cljs.core.truth_(inst_44235)){
var statearr_44310_44354 = state_44303__$1;
(statearr_44310_44354[(1)] = (5));

} else {
var statearr_44311_44355 = state_44303__$1;
(statearr_44311_44355[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44304 === (15))){
var inst_44276 = (state_44303[(2)]);
var state_44303__$1 = state_44303;
var statearr_44312_44356 = state_44303__$1;
(statearr_44312_44356[(2)] = inst_44276);

(statearr_44312_44356[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44304 === (21))){
var inst_44296 = (state_44303[(2)]);
var state_44303__$1 = (function (){var statearr_44313 = state_44303;
(statearr_44313[(9)] = inst_44296);

return statearr_44313;
})();
var statearr_44314_44357 = state_44303__$1;
(statearr_44314_44357[(2)] = null);

(statearr_44314_44357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44304 === (13))){
var inst_44258 = (state_44303[(10)]);
var inst_44260 = cljs.core.chunked_seq_QMARK_.call(null,inst_44258);
var state_44303__$1 = state_44303;
if(inst_44260){
var statearr_44315_44358 = state_44303__$1;
(statearr_44315_44358[(1)] = (16));

} else {
var statearr_44316_44359 = state_44303__$1;
(statearr_44316_44359[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44304 === (22))){
var inst_44288 = (state_44303[(2)]);
var state_44303__$1 = state_44303;
if(cljs.core.truth_(inst_44288)){
var statearr_44317_44360 = state_44303__$1;
(statearr_44317_44360[(1)] = (23));

} else {
var statearr_44318_44361 = state_44303__$1;
(statearr_44318_44361[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44304 === (6))){
var inst_44282 = (state_44303[(7)]);
var inst_44234 = (state_44303[(8)]);
var inst_44284 = (state_44303[(11)]);
var inst_44282__$1 = topic_fn.call(null,inst_44234);
var inst_44283 = cljs.core.deref.call(null,mults);
var inst_44284__$1 = cljs.core.get.call(null,inst_44283,inst_44282__$1);
var state_44303__$1 = (function (){var statearr_44319 = state_44303;
(statearr_44319[(7)] = inst_44282__$1);

(statearr_44319[(11)] = inst_44284__$1);

return statearr_44319;
})();
if(cljs.core.truth_(inst_44284__$1)){
var statearr_44320_44362 = state_44303__$1;
(statearr_44320_44362[(1)] = (19));

} else {
var statearr_44321_44363 = state_44303__$1;
(statearr_44321_44363[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44304 === (25))){
var inst_44293 = (state_44303[(2)]);
var state_44303__$1 = state_44303;
var statearr_44322_44364 = state_44303__$1;
(statearr_44322_44364[(2)] = inst_44293);

(statearr_44322_44364[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44304 === (17))){
var inst_44258 = (state_44303[(10)]);
var inst_44267 = cljs.core.first.call(null,inst_44258);
var inst_44268 = cljs.core.async.muxch_STAR_.call(null,inst_44267);
var inst_44269 = cljs.core.async.close_BANG_.call(null,inst_44268);
var inst_44270 = cljs.core.next.call(null,inst_44258);
var inst_44244 = inst_44270;
var inst_44245 = null;
var inst_44246 = (0);
var inst_44247 = (0);
var state_44303__$1 = (function (){var statearr_44323 = state_44303;
(statearr_44323[(12)] = inst_44244);

(statearr_44323[(13)] = inst_44246);

(statearr_44323[(14)] = inst_44269);

(statearr_44323[(15)] = inst_44245);

(statearr_44323[(16)] = inst_44247);

return statearr_44323;
})();
var statearr_44324_44365 = state_44303__$1;
(statearr_44324_44365[(2)] = null);

(statearr_44324_44365[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44304 === (3))){
var inst_44301 = (state_44303[(2)]);
var state_44303__$1 = state_44303;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44303__$1,inst_44301);
} else {
if((state_val_44304 === (12))){
var inst_44278 = (state_44303[(2)]);
var state_44303__$1 = state_44303;
var statearr_44325_44366 = state_44303__$1;
(statearr_44325_44366[(2)] = inst_44278);

(statearr_44325_44366[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44304 === (2))){
var state_44303__$1 = state_44303;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44303__$1,(4),ch);
} else {
if((state_val_44304 === (23))){
var state_44303__$1 = state_44303;
var statearr_44326_44367 = state_44303__$1;
(statearr_44326_44367[(2)] = null);

(statearr_44326_44367[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44304 === (19))){
var inst_44234 = (state_44303[(8)]);
var inst_44284 = (state_44303[(11)]);
var inst_44286 = cljs.core.async.muxch_STAR_.call(null,inst_44284);
var state_44303__$1 = state_44303;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44303__$1,(22),inst_44286,inst_44234);
} else {
if((state_val_44304 === (11))){
var inst_44244 = (state_44303[(12)]);
var inst_44258 = (state_44303[(10)]);
var inst_44258__$1 = cljs.core.seq.call(null,inst_44244);
var state_44303__$1 = (function (){var statearr_44327 = state_44303;
(statearr_44327[(10)] = inst_44258__$1);

return statearr_44327;
})();
if(inst_44258__$1){
var statearr_44328_44368 = state_44303__$1;
(statearr_44328_44368[(1)] = (13));

} else {
var statearr_44329_44369 = state_44303__$1;
(statearr_44329_44369[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44304 === (9))){
var inst_44280 = (state_44303[(2)]);
var state_44303__$1 = state_44303;
var statearr_44330_44370 = state_44303__$1;
(statearr_44330_44370[(2)] = inst_44280);

(statearr_44330_44370[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44304 === (5))){
var inst_44241 = cljs.core.deref.call(null,mults);
var inst_44242 = cljs.core.vals.call(null,inst_44241);
var inst_44243 = cljs.core.seq.call(null,inst_44242);
var inst_44244 = inst_44243;
var inst_44245 = null;
var inst_44246 = (0);
var inst_44247 = (0);
var state_44303__$1 = (function (){var statearr_44331 = state_44303;
(statearr_44331[(12)] = inst_44244);

(statearr_44331[(13)] = inst_44246);

(statearr_44331[(15)] = inst_44245);

(statearr_44331[(16)] = inst_44247);

return statearr_44331;
})();
var statearr_44332_44371 = state_44303__$1;
(statearr_44332_44371[(2)] = null);

(statearr_44332_44371[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44304 === (14))){
var state_44303__$1 = state_44303;
var statearr_44336_44372 = state_44303__$1;
(statearr_44336_44372[(2)] = null);

(statearr_44336_44372[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44304 === (16))){
var inst_44258 = (state_44303[(10)]);
var inst_44262 = cljs.core.chunk_first.call(null,inst_44258);
var inst_44263 = cljs.core.chunk_rest.call(null,inst_44258);
var inst_44264 = cljs.core.count.call(null,inst_44262);
var inst_44244 = inst_44263;
var inst_44245 = inst_44262;
var inst_44246 = inst_44264;
var inst_44247 = (0);
var state_44303__$1 = (function (){var statearr_44337 = state_44303;
(statearr_44337[(12)] = inst_44244);

(statearr_44337[(13)] = inst_44246);

(statearr_44337[(15)] = inst_44245);

(statearr_44337[(16)] = inst_44247);

return statearr_44337;
})();
var statearr_44338_44373 = state_44303__$1;
(statearr_44338_44373[(2)] = null);

(statearr_44338_44373[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44304 === (10))){
var inst_44244 = (state_44303[(12)]);
var inst_44246 = (state_44303[(13)]);
var inst_44245 = (state_44303[(15)]);
var inst_44247 = (state_44303[(16)]);
var inst_44252 = cljs.core._nth.call(null,inst_44245,inst_44247);
var inst_44253 = cljs.core.async.muxch_STAR_.call(null,inst_44252);
var inst_44254 = cljs.core.async.close_BANG_.call(null,inst_44253);
var inst_44255 = (inst_44247 + (1));
var tmp44333 = inst_44244;
var tmp44334 = inst_44246;
var tmp44335 = inst_44245;
var inst_44244__$1 = tmp44333;
var inst_44245__$1 = tmp44335;
var inst_44246__$1 = tmp44334;
var inst_44247__$1 = inst_44255;
var state_44303__$1 = (function (){var statearr_44339 = state_44303;
(statearr_44339[(12)] = inst_44244__$1);

(statearr_44339[(13)] = inst_44246__$1);

(statearr_44339[(15)] = inst_44245__$1);

(statearr_44339[(16)] = inst_44247__$1);

(statearr_44339[(17)] = inst_44254);

return statearr_44339;
})();
var statearr_44340_44374 = state_44303__$1;
(statearr_44340_44374[(2)] = null);

(statearr_44340_44374[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44304 === (18))){
var inst_44273 = (state_44303[(2)]);
var state_44303__$1 = state_44303;
var statearr_44341_44375 = state_44303__$1;
(statearr_44341_44375[(2)] = inst_44273);

(statearr_44341_44375[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44304 === (8))){
var inst_44246 = (state_44303[(13)]);
var inst_44247 = (state_44303[(16)]);
var inst_44249 = (inst_44247 < inst_44246);
var inst_44250 = inst_44249;
var state_44303__$1 = state_44303;
if(cljs.core.truth_(inst_44250)){
var statearr_44342_44376 = state_44303__$1;
(statearr_44342_44376[(1)] = (10));

} else {
var statearr_44343_44377 = state_44303__$1;
(statearr_44343_44377[(1)] = (11));

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
});})(c__43129__auto___44349,mults,ensure_mult,p))
;
return ((function (switch__43041__auto__,c__43129__auto___44349,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__43042__auto__ = null;
var cljs$core$async$state_machine__43042__auto____0 = (function (){
var statearr_44344 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44344[(0)] = cljs$core$async$state_machine__43042__auto__);

(statearr_44344[(1)] = (1));

return statearr_44344;
});
var cljs$core$async$state_machine__43042__auto____1 = (function (state_44303){
while(true){
var ret_value__43043__auto__ = (function (){try{while(true){
var result__43044__auto__ = switch__43041__auto__.call(null,state_44303);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43044__auto__;
}
break;
}
}catch (e44345){if((e44345 instanceof Object)){
var ex__43045__auto__ = e44345;
var statearr_44346_44378 = state_44303;
(statearr_44346_44378[(5)] = ex__43045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44303);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44345;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44379 = state_44303;
state_44303 = G__44379;
continue;
} else {
return ret_value__43043__auto__;
}
break;
}
});
cljs$core$async$state_machine__43042__auto__ = function(state_44303){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43042__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43042__auto____1.call(this,state_44303);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__43042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43042__auto____0;
cljs$core$async$state_machine__43042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43042__auto____1;
return cljs$core$async$state_machine__43042__auto__;
})()
;})(switch__43041__auto__,c__43129__auto___44349,mults,ensure_mult,p))
})();
var state__43131__auto__ = (function (){var statearr_44347 = f__43130__auto__.call(null);
(statearr_44347[(6)] = c__43129__auto___44349);

return statearr_44347;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43131__auto__);
});})(c__43129__auto___44349,mults,ensure_mult,p))
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
var G__44381 = arguments.length;
switch (G__44381) {
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
var G__44384 = arguments.length;
switch (G__44384) {
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
var G__44387 = arguments.length;
switch (G__44387) {
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
var c__43129__auto___44454 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43129__auto___44454,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__43130__auto__ = (function (){var switch__43041__auto__ = ((function (c__43129__auto___44454,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_44426){
var state_val_44427 = (state_44426[(1)]);
if((state_val_44427 === (7))){
var state_44426__$1 = state_44426;
var statearr_44428_44455 = state_44426__$1;
(statearr_44428_44455[(2)] = null);

(statearr_44428_44455[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44427 === (1))){
var state_44426__$1 = state_44426;
var statearr_44429_44456 = state_44426__$1;
(statearr_44429_44456[(2)] = null);

(statearr_44429_44456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44427 === (4))){
var inst_44390 = (state_44426[(7)]);
var inst_44392 = (inst_44390 < cnt);
var state_44426__$1 = state_44426;
if(cljs.core.truth_(inst_44392)){
var statearr_44430_44457 = state_44426__$1;
(statearr_44430_44457[(1)] = (6));

} else {
var statearr_44431_44458 = state_44426__$1;
(statearr_44431_44458[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44427 === (15))){
var inst_44422 = (state_44426[(2)]);
var state_44426__$1 = state_44426;
var statearr_44432_44459 = state_44426__$1;
(statearr_44432_44459[(2)] = inst_44422);

(statearr_44432_44459[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44427 === (13))){
var inst_44415 = cljs.core.async.close_BANG_.call(null,out);
var state_44426__$1 = state_44426;
var statearr_44433_44460 = state_44426__$1;
(statearr_44433_44460[(2)] = inst_44415);

(statearr_44433_44460[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44427 === (6))){
var state_44426__$1 = state_44426;
var statearr_44434_44461 = state_44426__$1;
(statearr_44434_44461[(2)] = null);

(statearr_44434_44461[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44427 === (3))){
var inst_44424 = (state_44426[(2)]);
var state_44426__$1 = state_44426;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44426__$1,inst_44424);
} else {
if((state_val_44427 === (12))){
var inst_44412 = (state_44426[(8)]);
var inst_44412__$1 = (state_44426[(2)]);
var inst_44413 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_44412__$1);
var state_44426__$1 = (function (){var statearr_44435 = state_44426;
(statearr_44435[(8)] = inst_44412__$1);

return statearr_44435;
})();
if(cljs.core.truth_(inst_44413)){
var statearr_44436_44462 = state_44426__$1;
(statearr_44436_44462[(1)] = (13));

} else {
var statearr_44437_44463 = state_44426__$1;
(statearr_44437_44463[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44427 === (2))){
var inst_44389 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_44390 = (0);
var state_44426__$1 = (function (){var statearr_44438 = state_44426;
(statearr_44438[(9)] = inst_44389);

(statearr_44438[(7)] = inst_44390);

return statearr_44438;
})();
var statearr_44439_44464 = state_44426__$1;
(statearr_44439_44464[(2)] = null);

(statearr_44439_44464[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44427 === (11))){
var inst_44390 = (state_44426[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_44426,(10),Object,null,(9));
var inst_44399 = chs__$1.call(null,inst_44390);
var inst_44400 = done.call(null,inst_44390);
var inst_44401 = cljs.core.async.take_BANG_.call(null,inst_44399,inst_44400);
var state_44426__$1 = state_44426;
var statearr_44440_44465 = state_44426__$1;
(statearr_44440_44465[(2)] = inst_44401);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44426__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44427 === (9))){
var inst_44390 = (state_44426[(7)]);
var inst_44403 = (state_44426[(2)]);
var inst_44404 = (inst_44390 + (1));
var inst_44390__$1 = inst_44404;
var state_44426__$1 = (function (){var statearr_44441 = state_44426;
(statearr_44441[(10)] = inst_44403);

(statearr_44441[(7)] = inst_44390__$1);

return statearr_44441;
})();
var statearr_44442_44466 = state_44426__$1;
(statearr_44442_44466[(2)] = null);

(statearr_44442_44466[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44427 === (5))){
var inst_44410 = (state_44426[(2)]);
var state_44426__$1 = (function (){var statearr_44443 = state_44426;
(statearr_44443[(11)] = inst_44410);

return statearr_44443;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44426__$1,(12),dchan);
} else {
if((state_val_44427 === (14))){
var inst_44412 = (state_44426[(8)]);
var inst_44417 = cljs.core.apply.call(null,f,inst_44412);
var state_44426__$1 = state_44426;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44426__$1,(16),out,inst_44417);
} else {
if((state_val_44427 === (16))){
var inst_44419 = (state_44426[(2)]);
var state_44426__$1 = (function (){var statearr_44444 = state_44426;
(statearr_44444[(12)] = inst_44419);

return statearr_44444;
})();
var statearr_44445_44467 = state_44426__$1;
(statearr_44445_44467[(2)] = null);

(statearr_44445_44467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44427 === (10))){
var inst_44394 = (state_44426[(2)]);
var inst_44395 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_44426__$1 = (function (){var statearr_44446 = state_44426;
(statearr_44446[(13)] = inst_44394);

return statearr_44446;
})();
var statearr_44447_44468 = state_44426__$1;
(statearr_44447_44468[(2)] = inst_44395);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44426__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44427 === (8))){
var inst_44408 = (state_44426[(2)]);
var state_44426__$1 = state_44426;
var statearr_44448_44469 = state_44426__$1;
(statearr_44448_44469[(2)] = inst_44408);

(statearr_44448_44469[(1)] = (5));


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
});})(c__43129__auto___44454,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__43041__auto__,c__43129__auto___44454,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__43042__auto__ = null;
var cljs$core$async$state_machine__43042__auto____0 = (function (){
var statearr_44449 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44449[(0)] = cljs$core$async$state_machine__43042__auto__);

(statearr_44449[(1)] = (1));

return statearr_44449;
});
var cljs$core$async$state_machine__43042__auto____1 = (function (state_44426){
while(true){
var ret_value__43043__auto__ = (function (){try{while(true){
var result__43044__auto__ = switch__43041__auto__.call(null,state_44426);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43044__auto__;
}
break;
}
}catch (e44450){if((e44450 instanceof Object)){
var ex__43045__auto__ = e44450;
var statearr_44451_44470 = state_44426;
(statearr_44451_44470[(5)] = ex__43045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44426);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44450;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44471 = state_44426;
state_44426 = G__44471;
continue;
} else {
return ret_value__43043__auto__;
}
break;
}
});
cljs$core$async$state_machine__43042__auto__ = function(state_44426){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43042__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43042__auto____1.call(this,state_44426);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__43042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43042__auto____0;
cljs$core$async$state_machine__43042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43042__auto____1;
return cljs$core$async$state_machine__43042__auto__;
})()
;})(switch__43041__auto__,c__43129__auto___44454,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__43131__auto__ = (function (){var statearr_44452 = f__43130__auto__.call(null);
(statearr_44452[(6)] = c__43129__auto___44454);

return statearr_44452;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43131__auto__);
});})(c__43129__auto___44454,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__44474 = arguments.length;
switch (G__44474) {
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
var c__43129__auto___44528 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43129__auto___44528,out){
return (function (){
var f__43130__auto__ = (function (){var switch__43041__auto__ = ((function (c__43129__auto___44528,out){
return (function (state_44506){
var state_val_44507 = (state_44506[(1)]);
if((state_val_44507 === (7))){
var inst_44486 = (state_44506[(7)]);
var inst_44485 = (state_44506[(8)]);
var inst_44485__$1 = (state_44506[(2)]);
var inst_44486__$1 = cljs.core.nth.call(null,inst_44485__$1,(0),null);
var inst_44487 = cljs.core.nth.call(null,inst_44485__$1,(1),null);
var inst_44488 = (inst_44486__$1 == null);
var state_44506__$1 = (function (){var statearr_44508 = state_44506;
(statearr_44508[(7)] = inst_44486__$1);

(statearr_44508[(9)] = inst_44487);

(statearr_44508[(8)] = inst_44485__$1);

return statearr_44508;
})();
if(cljs.core.truth_(inst_44488)){
var statearr_44509_44529 = state_44506__$1;
(statearr_44509_44529[(1)] = (8));

} else {
var statearr_44510_44530 = state_44506__$1;
(statearr_44510_44530[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44507 === (1))){
var inst_44475 = cljs.core.vec.call(null,chs);
var inst_44476 = inst_44475;
var state_44506__$1 = (function (){var statearr_44511 = state_44506;
(statearr_44511[(10)] = inst_44476);

return statearr_44511;
})();
var statearr_44512_44531 = state_44506__$1;
(statearr_44512_44531[(2)] = null);

(statearr_44512_44531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44507 === (4))){
var inst_44476 = (state_44506[(10)]);
var state_44506__$1 = state_44506;
return cljs.core.async.ioc_alts_BANG_.call(null,state_44506__$1,(7),inst_44476);
} else {
if((state_val_44507 === (6))){
var inst_44502 = (state_44506[(2)]);
var state_44506__$1 = state_44506;
var statearr_44513_44532 = state_44506__$1;
(statearr_44513_44532[(2)] = inst_44502);

(statearr_44513_44532[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44507 === (3))){
var inst_44504 = (state_44506[(2)]);
var state_44506__$1 = state_44506;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44506__$1,inst_44504);
} else {
if((state_val_44507 === (2))){
var inst_44476 = (state_44506[(10)]);
var inst_44478 = cljs.core.count.call(null,inst_44476);
var inst_44479 = (inst_44478 > (0));
var state_44506__$1 = state_44506;
if(cljs.core.truth_(inst_44479)){
var statearr_44515_44533 = state_44506__$1;
(statearr_44515_44533[(1)] = (4));

} else {
var statearr_44516_44534 = state_44506__$1;
(statearr_44516_44534[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44507 === (11))){
var inst_44476 = (state_44506[(10)]);
var inst_44495 = (state_44506[(2)]);
var tmp44514 = inst_44476;
var inst_44476__$1 = tmp44514;
var state_44506__$1 = (function (){var statearr_44517 = state_44506;
(statearr_44517[(10)] = inst_44476__$1);

(statearr_44517[(11)] = inst_44495);

return statearr_44517;
})();
var statearr_44518_44535 = state_44506__$1;
(statearr_44518_44535[(2)] = null);

(statearr_44518_44535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44507 === (9))){
var inst_44486 = (state_44506[(7)]);
var state_44506__$1 = state_44506;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44506__$1,(11),out,inst_44486);
} else {
if((state_val_44507 === (5))){
var inst_44500 = cljs.core.async.close_BANG_.call(null,out);
var state_44506__$1 = state_44506;
var statearr_44519_44536 = state_44506__$1;
(statearr_44519_44536[(2)] = inst_44500);

(statearr_44519_44536[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44507 === (10))){
var inst_44498 = (state_44506[(2)]);
var state_44506__$1 = state_44506;
var statearr_44520_44537 = state_44506__$1;
(statearr_44520_44537[(2)] = inst_44498);

(statearr_44520_44537[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44507 === (8))){
var inst_44486 = (state_44506[(7)]);
var inst_44487 = (state_44506[(9)]);
var inst_44476 = (state_44506[(10)]);
var inst_44485 = (state_44506[(8)]);
var inst_44490 = (function (){var cs = inst_44476;
var vec__44481 = inst_44485;
var v = inst_44486;
var c = inst_44487;
return ((function (cs,vec__44481,v,c,inst_44486,inst_44487,inst_44476,inst_44485,state_val_44507,c__43129__auto___44528,out){
return (function (p1__44472_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__44472_SHARP_);
});
;})(cs,vec__44481,v,c,inst_44486,inst_44487,inst_44476,inst_44485,state_val_44507,c__43129__auto___44528,out))
})();
var inst_44491 = cljs.core.filterv.call(null,inst_44490,inst_44476);
var inst_44476__$1 = inst_44491;
var state_44506__$1 = (function (){var statearr_44521 = state_44506;
(statearr_44521[(10)] = inst_44476__$1);

return statearr_44521;
})();
var statearr_44522_44538 = state_44506__$1;
(statearr_44522_44538[(2)] = null);

(statearr_44522_44538[(1)] = (2));


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
});})(c__43129__auto___44528,out))
;
return ((function (switch__43041__auto__,c__43129__auto___44528,out){
return (function() {
var cljs$core$async$state_machine__43042__auto__ = null;
var cljs$core$async$state_machine__43042__auto____0 = (function (){
var statearr_44523 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44523[(0)] = cljs$core$async$state_machine__43042__auto__);

(statearr_44523[(1)] = (1));

return statearr_44523;
});
var cljs$core$async$state_machine__43042__auto____1 = (function (state_44506){
while(true){
var ret_value__43043__auto__ = (function (){try{while(true){
var result__43044__auto__ = switch__43041__auto__.call(null,state_44506);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43044__auto__;
}
break;
}
}catch (e44524){if((e44524 instanceof Object)){
var ex__43045__auto__ = e44524;
var statearr_44525_44539 = state_44506;
(statearr_44525_44539[(5)] = ex__43045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44506);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44524;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44540 = state_44506;
state_44506 = G__44540;
continue;
} else {
return ret_value__43043__auto__;
}
break;
}
});
cljs$core$async$state_machine__43042__auto__ = function(state_44506){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43042__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43042__auto____1.call(this,state_44506);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__43042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43042__auto____0;
cljs$core$async$state_machine__43042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43042__auto____1;
return cljs$core$async$state_machine__43042__auto__;
})()
;})(switch__43041__auto__,c__43129__auto___44528,out))
})();
var state__43131__auto__ = (function (){var statearr_44526 = f__43130__auto__.call(null);
(statearr_44526[(6)] = c__43129__auto___44528);

return statearr_44526;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43131__auto__);
});})(c__43129__auto___44528,out))
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
var G__44542 = arguments.length;
switch (G__44542) {
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
var c__43129__auto___44587 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43129__auto___44587,out){
return (function (){
var f__43130__auto__ = (function (){var switch__43041__auto__ = ((function (c__43129__auto___44587,out){
return (function (state_44566){
var state_val_44567 = (state_44566[(1)]);
if((state_val_44567 === (7))){
var inst_44548 = (state_44566[(7)]);
var inst_44548__$1 = (state_44566[(2)]);
var inst_44549 = (inst_44548__$1 == null);
var inst_44550 = cljs.core.not.call(null,inst_44549);
var state_44566__$1 = (function (){var statearr_44568 = state_44566;
(statearr_44568[(7)] = inst_44548__$1);

return statearr_44568;
})();
if(inst_44550){
var statearr_44569_44588 = state_44566__$1;
(statearr_44569_44588[(1)] = (8));

} else {
var statearr_44570_44589 = state_44566__$1;
(statearr_44570_44589[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44567 === (1))){
var inst_44543 = (0);
var state_44566__$1 = (function (){var statearr_44571 = state_44566;
(statearr_44571[(8)] = inst_44543);

return statearr_44571;
})();
var statearr_44572_44590 = state_44566__$1;
(statearr_44572_44590[(2)] = null);

(statearr_44572_44590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44567 === (4))){
var state_44566__$1 = state_44566;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44566__$1,(7),ch);
} else {
if((state_val_44567 === (6))){
var inst_44561 = (state_44566[(2)]);
var state_44566__$1 = state_44566;
var statearr_44573_44591 = state_44566__$1;
(statearr_44573_44591[(2)] = inst_44561);

(statearr_44573_44591[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44567 === (3))){
var inst_44563 = (state_44566[(2)]);
var inst_44564 = cljs.core.async.close_BANG_.call(null,out);
var state_44566__$1 = (function (){var statearr_44574 = state_44566;
(statearr_44574[(9)] = inst_44563);

return statearr_44574;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44566__$1,inst_44564);
} else {
if((state_val_44567 === (2))){
var inst_44543 = (state_44566[(8)]);
var inst_44545 = (inst_44543 < n);
var state_44566__$1 = state_44566;
if(cljs.core.truth_(inst_44545)){
var statearr_44575_44592 = state_44566__$1;
(statearr_44575_44592[(1)] = (4));

} else {
var statearr_44576_44593 = state_44566__$1;
(statearr_44576_44593[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44567 === (11))){
var inst_44543 = (state_44566[(8)]);
var inst_44553 = (state_44566[(2)]);
var inst_44554 = (inst_44543 + (1));
var inst_44543__$1 = inst_44554;
var state_44566__$1 = (function (){var statearr_44577 = state_44566;
(statearr_44577[(8)] = inst_44543__$1);

(statearr_44577[(10)] = inst_44553);

return statearr_44577;
})();
var statearr_44578_44594 = state_44566__$1;
(statearr_44578_44594[(2)] = null);

(statearr_44578_44594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44567 === (9))){
var state_44566__$1 = state_44566;
var statearr_44579_44595 = state_44566__$1;
(statearr_44579_44595[(2)] = null);

(statearr_44579_44595[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44567 === (5))){
var state_44566__$1 = state_44566;
var statearr_44580_44596 = state_44566__$1;
(statearr_44580_44596[(2)] = null);

(statearr_44580_44596[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44567 === (10))){
var inst_44558 = (state_44566[(2)]);
var state_44566__$1 = state_44566;
var statearr_44581_44597 = state_44566__$1;
(statearr_44581_44597[(2)] = inst_44558);

(statearr_44581_44597[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44567 === (8))){
var inst_44548 = (state_44566[(7)]);
var state_44566__$1 = state_44566;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44566__$1,(11),out,inst_44548);
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
});})(c__43129__auto___44587,out))
;
return ((function (switch__43041__auto__,c__43129__auto___44587,out){
return (function() {
var cljs$core$async$state_machine__43042__auto__ = null;
var cljs$core$async$state_machine__43042__auto____0 = (function (){
var statearr_44582 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44582[(0)] = cljs$core$async$state_machine__43042__auto__);

(statearr_44582[(1)] = (1));

return statearr_44582;
});
var cljs$core$async$state_machine__43042__auto____1 = (function (state_44566){
while(true){
var ret_value__43043__auto__ = (function (){try{while(true){
var result__43044__auto__ = switch__43041__auto__.call(null,state_44566);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43044__auto__;
}
break;
}
}catch (e44583){if((e44583 instanceof Object)){
var ex__43045__auto__ = e44583;
var statearr_44584_44598 = state_44566;
(statearr_44584_44598[(5)] = ex__43045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44566);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44583;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44599 = state_44566;
state_44566 = G__44599;
continue;
} else {
return ret_value__43043__auto__;
}
break;
}
});
cljs$core$async$state_machine__43042__auto__ = function(state_44566){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43042__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43042__auto____1.call(this,state_44566);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__43042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43042__auto____0;
cljs$core$async$state_machine__43042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43042__auto____1;
return cljs$core$async$state_machine__43042__auto__;
})()
;})(switch__43041__auto__,c__43129__auto___44587,out))
})();
var state__43131__auto__ = (function (){var statearr_44585 = f__43130__auto__.call(null);
(statearr_44585[(6)] = c__43129__auto___44587);

return statearr_44585;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43131__auto__);
});})(c__43129__auto___44587,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async44601 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44601 = (function (f,ch,meta44602){
this.f = f;
this.ch = ch;
this.meta44602 = meta44602;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async44601.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44603,meta44602__$1){
var self__ = this;
var _44603__$1 = this;
return (new cljs.core.async.t_cljs$core$async44601(self__.f,self__.ch,meta44602__$1));
});

cljs.core.async.t_cljs$core$async44601.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44603){
var self__ = this;
var _44603__$1 = this;
return self__.meta44602;
});

cljs.core.async.t_cljs$core$async44601.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44601.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async44601.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async44601.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44601.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async44604 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44604 = (function (f,ch,meta44602,_,fn1,meta44605){
this.f = f;
this.ch = ch;
this.meta44602 = meta44602;
this._ = _;
this.fn1 = fn1;
this.meta44605 = meta44605;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async44604.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_44606,meta44605__$1){
var self__ = this;
var _44606__$1 = this;
return (new cljs.core.async.t_cljs$core$async44604(self__.f,self__.ch,self__.meta44602,self__._,self__.fn1,meta44605__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async44604.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_44606){
var self__ = this;
var _44606__$1 = this;
return self__.meta44605;
});})(___$1))
;

cljs.core.async.t_cljs$core$async44604.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44604.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async44604.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async44604.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__44600_SHARP_){
return f1.call(null,(((p1__44600_SHARP_ == null))?null:self__.f.call(null,p1__44600_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async44604.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta44602","meta44602",-994718734,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async44601","cljs.core.async/t_cljs$core$async44601",-675611560,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta44605","meta44605",-914169004,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async44604.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44604.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44604";

cljs.core.async.t_cljs$core$async44604.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__37367__auto__,writer__37368__auto__,opt__37369__auto__){
return cljs.core._write.call(null,writer__37368__auto__,"cljs.core.async/t_cljs$core$async44604");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async44604 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async44604(f__$1,ch__$1,meta44602__$1,___$2,fn1__$1,meta44605){
return (new cljs.core.async.t_cljs$core$async44604(f__$1,ch__$1,meta44602__$1,___$2,fn1__$1,meta44605));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async44604(self__.f,self__.ch,self__.meta44602,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async44601.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44601.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async44601.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta44602","meta44602",-994718734,null)], null);
});

cljs.core.async.t_cljs$core$async44601.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44601.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44601";

cljs.core.async.t_cljs$core$async44601.cljs$lang$ctorPrWriter = (function (this__37367__auto__,writer__37368__auto__,opt__37369__auto__){
return cljs.core._write.call(null,writer__37368__auto__,"cljs.core.async/t_cljs$core$async44601");
});

cljs.core.async.__GT_t_cljs$core$async44601 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async44601(f__$1,ch__$1,meta44602){
return (new cljs.core.async.t_cljs$core$async44601(f__$1,ch__$1,meta44602));
});

}

return (new cljs.core.async.t_cljs$core$async44601(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async44607 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44607 = (function (f,ch,meta44608){
this.f = f;
this.ch = ch;
this.meta44608 = meta44608;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async44607.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44609,meta44608__$1){
var self__ = this;
var _44609__$1 = this;
return (new cljs.core.async.t_cljs$core$async44607(self__.f,self__.ch,meta44608__$1));
});

cljs.core.async.t_cljs$core$async44607.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44609){
var self__ = this;
var _44609__$1 = this;
return self__.meta44608;
});

cljs.core.async.t_cljs$core$async44607.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44607.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async44607.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44607.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async44607.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44607.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async44607.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta44608","meta44608",-2038399201,null)], null);
});

cljs.core.async.t_cljs$core$async44607.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44607.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44607";

cljs.core.async.t_cljs$core$async44607.cljs$lang$ctorPrWriter = (function (this__37367__auto__,writer__37368__auto__,opt__37369__auto__){
return cljs.core._write.call(null,writer__37368__auto__,"cljs.core.async/t_cljs$core$async44607");
});

cljs.core.async.__GT_t_cljs$core$async44607 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async44607(f__$1,ch__$1,meta44608){
return (new cljs.core.async.t_cljs$core$async44607(f__$1,ch__$1,meta44608));
});

}

return (new cljs.core.async.t_cljs$core$async44607(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async44610 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44610 = (function (p,ch,meta44611){
this.p = p;
this.ch = ch;
this.meta44611 = meta44611;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async44610.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44612,meta44611__$1){
var self__ = this;
var _44612__$1 = this;
return (new cljs.core.async.t_cljs$core$async44610(self__.p,self__.ch,meta44611__$1));
});

cljs.core.async.t_cljs$core$async44610.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44612){
var self__ = this;
var _44612__$1 = this;
return self__.meta44611;
});

cljs.core.async.t_cljs$core$async44610.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44610.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async44610.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async44610.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44610.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async44610.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44610.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async44610.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta44611","meta44611",545591177,null)], null);
});

cljs.core.async.t_cljs$core$async44610.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44610.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44610";

cljs.core.async.t_cljs$core$async44610.cljs$lang$ctorPrWriter = (function (this__37367__auto__,writer__37368__auto__,opt__37369__auto__){
return cljs.core._write.call(null,writer__37368__auto__,"cljs.core.async/t_cljs$core$async44610");
});

cljs.core.async.__GT_t_cljs$core$async44610 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async44610(p__$1,ch__$1,meta44611){
return (new cljs.core.async.t_cljs$core$async44610(p__$1,ch__$1,meta44611));
});

}

return (new cljs.core.async.t_cljs$core$async44610(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__44614 = arguments.length;
switch (G__44614) {
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
var c__43129__auto___44654 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43129__auto___44654,out){
return (function (){
var f__43130__auto__ = (function (){var switch__43041__auto__ = ((function (c__43129__auto___44654,out){
return (function (state_44635){
var state_val_44636 = (state_44635[(1)]);
if((state_val_44636 === (7))){
var inst_44631 = (state_44635[(2)]);
var state_44635__$1 = state_44635;
var statearr_44637_44655 = state_44635__$1;
(statearr_44637_44655[(2)] = inst_44631);

(statearr_44637_44655[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44636 === (1))){
var state_44635__$1 = state_44635;
var statearr_44638_44656 = state_44635__$1;
(statearr_44638_44656[(2)] = null);

(statearr_44638_44656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44636 === (4))){
var inst_44617 = (state_44635[(7)]);
var inst_44617__$1 = (state_44635[(2)]);
var inst_44618 = (inst_44617__$1 == null);
var state_44635__$1 = (function (){var statearr_44639 = state_44635;
(statearr_44639[(7)] = inst_44617__$1);

return statearr_44639;
})();
if(cljs.core.truth_(inst_44618)){
var statearr_44640_44657 = state_44635__$1;
(statearr_44640_44657[(1)] = (5));

} else {
var statearr_44641_44658 = state_44635__$1;
(statearr_44641_44658[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44636 === (6))){
var inst_44617 = (state_44635[(7)]);
var inst_44622 = p.call(null,inst_44617);
var state_44635__$1 = state_44635;
if(cljs.core.truth_(inst_44622)){
var statearr_44642_44659 = state_44635__$1;
(statearr_44642_44659[(1)] = (8));

} else {
var statearr_44643_44660 = state_44635__$1;
(statearr_44643_44660[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44636 === (3))){
var inst_44633 = (state_44635[(2)]);
var state_44635__$1 = state_44635;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44635__$1,inst_44633);
} else {
if((state_val_44636 === (2))){
var state_44635__$1 = state_44635;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44635__$1,(4),ch);
} else {
if((state_val_44636 === (11))){
var inst_44625 = (state_44635[(2)]);
var state_44635__$1 = state_44635;
var statearr_44644_44661 = state_44635__$1;
(statearr_44644_44661[(2)] = inst_44625);

(statearr_44644_44661[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44636 === (9))){
var state_44635__$1 = state_44635;
var statearr_44645_44662 = state_44635__$1;
(statearr_44645_44662[(2)] = null);

(statearr_44645_44662[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44636 === (5))){
var inst_44620 = cljs.core.async.close_BANG_.call(null,out);
var state_44635__$1 = state_44635;
var statearr_44646_44663 = state_44635__$1;
(statearr_44646_44663[(2)] = inst_44620);

(statearr_44646_44663[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44636 === (10))){
var inst_44628 = (state_44635[(2)]);
var state_44635__$1 = (function (){var statearr_44647 = state_44635;
(statearr_44647[(8)] = inst_44628);

return statearr_44647;
})();
var statearr_44648_44664 = state_44635__$1;
(statearr_44648_44664[(2)] = null);

(statearr_44648_44664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44636 === (8))){
var inst_44617 = (state_44635[(7)]);
var state_44635__$1 = state_44635;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44635__$1,(11),out,inst_44617);
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
});})(c__43129__auto___44654,out))
;
return ((function (switch__43041__auto__,c__43129__auto___44654,out){
return (function() {
var cljs$core$async$state_machine__43042__auto__ = null;
var cljs$core$async$state_machine__43042__auto____0 = (function (){
var statearr_44649 = [null,null,null,null,null,null,null,null,null];
(statearr_44649[(0)] = cljs$core$async$state_machine__43042__auto__);

(statearr_44649[(1)] = (1));

return statearr_44649;
});
var cljs$core$async$state_machine__43042__auto____1 = (function (state_44635){
while(true){
var ret_value__43043__auto__ = (function (){try{while(true){
var result__43044__auto__ = switch__43041__auto__.call(null,state_44635);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43044__auto__;
}
break;
}
}catch (e44650){if((e44650 instanceof Object)){
var ex__43045__auto__ = e44650;
var statearr_44651_44665 = state_44635;
(statearr_44651_44665[(5)] = ex__43045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44635);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44650;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44666 = state_44635;
state_44635 = G__44666;
continue;
} else {
return ret_value__43043__auto__;
}
break;
}
});
cljs$core$async$state_machine__43042__auto__ = function(state_44635){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43042__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43042__auto____1.call(this,state_44635);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__43042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43042__auto____0;
cljs$core$async$state_machine__43042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43042__auto____1;
return cljs$core$async$state_machine__43042__auto__;
})()
;})(switch__43041__auto__,c__43129__auto___44654,out))
})();
var state__43131__auto__ = (function (){var statearr_44652 = f__43130__auto__.call(null);
(statearr_44652[(6)] = c__43129__auto___44654);

return statearr_44652;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43131__auto__);
});})(c__43129__auto___44654,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__44668 = arguments.length;
switch (G__44668) {
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
var c__43129__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43129__auto__){
return (function (){
var f__43130__auto__ = (function (){var switch__43041__auto__ = ((function (c__43129__auto__){
return (function (state_44731){
var state_val_44732 = (state_44731[(1)]);
if((state_val_44732 === (7))){
var inst_44727 = (state_44731[(2)]);
var state_44731__$1 = state_44731;
var statearr_44733_44771 = state_44731__$1;
(statearr_44733_44771[(2)] = inst_44727);

(statearr_44733_44771[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44732 === (20))){
var inst_44697 = (state_44731[(7)]);
var inst_44708 = (state_44731[(2)]);
var inst_44709 = cljs.core.next.call(null,inst_44697);
var inst_44683 = inst_44709;
var inst_44684 = null;
var inst_44685 = (0);
var inst_44686 = (0);
var state_44731__$1 = (function (){var statearr_44734 = state_44731;
(statearr_44734[(8)] = inst_44708);

(statearr_44734[(9)] = inst_44683);

(statearr_44734[(10)] = inst_44684);

(statearr_44734[(11)] = inst_44686);

(statearr_44734[(12)] = inst_44685);

return statearr_44734;
})();
var statearr_44735_44772 = state_44731__$1;
(statearr_44735_44772[(2)] = null);

(statearr_44735_44772[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44732 === (1))){
var state_44731__$1 = state_44731;
var statearr_44736_44773 = state_44731__$1;
(statearr_44736_44773[(2)] = null);

(statearr_44736_44773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44732 === (4))){
var inst_44672 = (state_44731[(13)]);
var inst_44672__$1 = (state_44731[(2)]);
var inst_44673 = (inst_44672__$1 == null);
var state_44731__$1 = (function (){var statearr_44737 = state_44731;
(statearr_44737[(13)] = inst_44672__$1);

return statearr_44737;
})();
if(cljs.core.truth_(inst_44673)){
var statearr_44738_44774 = state_44731__$1;
(statearr_44738_44774[(1)] = (5));

} else {
var statearr_44739_44775 = state_44731__$1;
(statearr_44739_44775[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44732 === (15))){
var state_44731__$1 = state_44731;
var statearr_44743_44776 = state_44731__$1;
(statearr_44743_44776[(2)] = null);

(statearr_44743_44776[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44732 === (21))){
var state_44731__$1 = state_44731;
var statearr_44744_44777 = state_44731__$1;
(statearr_44744_44777[(2)] = null);

(statearr_44744_44777[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44732 === (13))){
var inst_44683 = (state_44731[(9)]);
var inst_44684 = (state_44731[(10)]);
var inst_44686 = (state_44731[(11)]);
var inst_44685 = (state_44731[(12)]);
var inst_44693 = (state_44731[(2)]);
var inst_44694 = (inst_44686 + (1));
var tmp44740 = inst_44683;
var tmp44741 = inst_44684;
var tmp44742 = inst_44685;
var inst_44683__$1 = tmp44740;
var inst_44684__$1 = tmp44741;
var inst_44685__$1 = tmp44742;
var inst_44686__$1 = inst_44694;
var state_44731__$1 = (function (){var statearr_44745 = state_44731;
(statearr_44745[(9)] = inst_44683__$1);

(statearr_44745[(10)] = inst_44684__$1);

(statearr_44745[(11)] = inst_44686__$1);

(statearr_44745[(12)] = inst_44685__$1);

(statearr_44745[(14)] = inst_44693);

return statearr_44745;
})();
var statearr_44746_44778 = state_44731__$1;
(statearr_44746_44778[(2)] = null);

(statearr_44746_44778[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44732 === (22))){
var state_44731__$1 = state_44731;
var statearr_44747_44779 = state_44731__$1;
(statearr_44747_44779[(2)] = null);

(statearr_44747_44779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44732 === (6))){
var inst_44672 = (state_44731[(13)]);
var inst_44681 = f.call(null,inst_44672);
var inst_44682 = cljs.core.seq.call(null,inst_44681);
var inst_44683 = inst_44682;
var inst_44684 = null;
var inst_44685 = (0);
var inst_44686 = (0);
var state_44731__$1 = (function (){var statearr_44748 = state_44731;
(statearr_44748[(9)] = inst_44683);

(statearr_44748[(10)] = inst_44684);

(statearr_44748[(11)] = inst_44686);

(statearr_44748[(12)] = inst_44685);

return statearr_44748;
})();
var statearr_44749_44780 = state_44731__$1;
(statearr_44749_44780[(2)] = null);

(statearr_44749_44780[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44732 === (17))){
var inst_44697 = (state_44731[(7)]);
var inst_44701 = cljs.core.chunk_first.call(null,inst_44697);
var inst_44702 = cljs.core.chunk_rest.call(null,inst_44697);
var inst_44703 = cljs.core.count.call(null,inst_44701);
var inst_44683 = inst_44702;
var inst_44684 = inst_44701;
var inst_44685 = inst_44703;
var inst_44686 = (0);
var state_44731__$1 = (function (){var statearr_44750 = state_44731;
(statearr_44750[(9)] = inst_44683);

(statearr_44750[(10)] = inst_44684);

(statearr_44750[(11)] = inst_44686);

(statearr_44750[(12)] = inst_44685);

return statearr_44750;
})();
var statearr_44751_44781 = state_44731__$1;
(statearr_44751_44781[(2)] = null);

(statearr_44751_44781[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44732 === (3))){
var inst_44729 = (state_44731[(2)]);
var state_44731__$1 = state_44731;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44731__$1,inst_44729);
} else {
if((state_val_44732 === (12))){
var inst_44717 = (state_44731[(2)]);
var state_44731__$1 = state_44731;
var statearr_44752_44782 = state_44731__$1;
(statearr_44752_44782[(2)] = inst_44717);

(statearr_44752_44782[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44732 === (2))){
var state_44731__$1 = state_44731;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44731__$1,(4),in$);
} else {
if((state_val_44732 === (23))){
var inst_44725 = (state_44731[(2)]);
var state_44731__$1 = state_44731;
var statearr_44753_44783 = state_44731__$1;
(statearr_44753_44783[(2)] = inst_44725);

(statearr_44753_44783[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44732 === (19))){
var inst_44712 = (state_44731[(2)]);
var state_44731__$1 = state_44731;
var statearr_44754_44784 = state_44731__$1;
(statearr_44754_44784[(2)] = inst_44712);

(statearr_44754_44784[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44732 === (11))){
var inst_44683 = (state_44731[(9)]);
var inst_44697 = (state_44731[(7)]);
var inst_44697__$1 = cljs.core.seq.call(null,inst_44683);
var state_44731__$1 = (function (){var statearr_44755 = state_44731;
(statearr_44755[(7)] = inst_44697__$1);

return statearr_44755;
})();
if(inst_44697__$1){
var statearr_44756_44785 = state_44731__$1;
(statearr_44756_44785[(1)] = (14));

} else {
var statearr_44757_44786 = state_44731__$1;
(statearr_44757_44786[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44732 === (9))){
var inst_44719 = (state_44731[(2)]);
var inst_44720 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_44731__$1 = (function (){var statearr_44758 = state_44731;
(statearr_44758[(15)] = inst_44719);

return statearr_44758;
})();
if(cljs.core.truth_(inst_44720)){
var statearr_44759_44787 = state_44731__$1;
(statearr_44759_44787[(1)] = (21));

} else {
var statearr_44760_44788 = state_44731__$1;
(statearr_44760_44788[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44732 === (5))){
var inst_44675 = cljs.core.async.close_BANG_.call(null,out);
var state_44731__$1 = state_44731;
var statearr_44761_44789 = state_44731__$1;
(statearr_44761_44789[(2)] = inst_44675);

(statearr_44761_44789[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44732 === (14))){
var inst_44697 = (state_44731[(7)]);
var inst_44699 = cljs.core.chunked_seq_QMARK_.call(null,inst_44697);
var state_44731__$1 = state_44731;
if(inst_44699){
var statearr_44762_44790 = state_44731__$1;
(statearr_44762_44790[(1)] = (17));

} else {
var statearr_44763_44791 = state_44731__$1;
(statearr_44763_44791[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44732 === (16))){
var inst_44715 = (state_44731[(2)]);
var state_44731__$1 = state_44731;
var statearr_44764_44792 = state_44731__$1;
(statearr_44764_44792[(2)] = inst_44715);

(statearr_44764_44792[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44732 === (10))){
var inst_44684 = (state_44731[(10)]);
var inst_44686 = (state_44731[(11)]);
var inst_44691 = cljs.core._nth.call(null,inst_44684,inst_44686);
var state_44731__$1 = state_44731;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44731__$1,(13),out,inst_44691);
} else {
if((state_val_44732 === (18))){
var inst_44697 = (state_44731[(7)]);
var inst_44706 = cljs.core.first.call(null,inst_44697);
var state_44731__$1 = state_44731;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44731__$1,(20),out,inst_44706);
} else {
if((state_val_44732 === (8))){
var inst_44686 = (state_44731[(11)]);
var inst_44685 = (state_44731[(12)]);
var inst_44688 = (inst_44686 < inst_44685);
var inst_44689 = inst_44688;
var state_44731__$1 = state_44731;
if(cljs.core.truth_(inst_44689)){
var statearr_44765_44793 = state_44731__$1;
(statearr_44765_44793[(1)] = (10));

} else {
var statearr_44766_44794 = state_44731__$1;
(statearr_44766_44794[(1)] = (11));

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
});})(c__43129__auto__))
;
return ((function (switch__43041__auto__,c__43129__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__43042__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__43042__auto____0 = (function (){
var statearr_44767 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44767[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__43042__auto__);

(statearr_44767[(1)] = (1));

return statearr_44767;
});
var cljs$core$async$mapcat_STAR__$_state_machine__43042__auto____1 = (function (state_44731){
while(true){
var ret_value__43043__auto__ = (function (){try{while(true){
var result__43044__auto__ = switch__43041__auto__.call(null,state_44731);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43044__auto__;
}
break;
}
}catch (e44768){if((e44768 instanceof Object)){
var ex__43045__auto__ = e44768;
var statearr_44769_44795 = state_44731;
(statearr_44769_44795[(5)] = ex__43045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44731);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44768;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44796 = state_44731;
state_44731 = G__44796;
continue;
} else {
return ret_value__43043__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__43042__auto__ = function(state_44731){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__43042__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__43042__auto____1.call(this,state_44731);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__43042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__43042__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__43042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__43042__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__43042__auto__;
})()
;})(switch__43041__auto__,c__43129__auto__))
})();
var state__43131__auto__ = (function (){var statearr_44770 = f__43130__auto__.call(null);
(statearr_44770[(6)] = c__43129__auto__);

return statearr_44770;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43131__auto__);
});})(c__43129__auto__))
);

return c__43129__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__44798 = arguments.length;
switch (G__44798) {
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
var G__44801 = arguments.length;
switch (G__44801) {
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
var G__44804 = arguments.length;
switch (G__44804) {
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
var c__43129__auto___44851 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43129__auto___44851,out){
return (function (){
var f__43130__auto__ = (function (){var switch__43041__auto__ = ((function (c__43129__auto___44851,out){
return (function (state_44828){
var state_val_44829 = (state_44828[(1)]);
if((state_val_44829 === (7))){
var inst_44823 = (state_44828[(2)]);
var state_44828__$1 = state_44828;
var statearr_44830_44852 = state_44828__$1;
(statearr_44830_44852[(2)] = inst_44823);

(statearr_44830_44852[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44829 === (1))){
var inst_44805 = null;
var state_44828__$1 = (function (){var statearr_44831 = state_44828;
(statearr_44831[(7)] = inst_44805);

return statearr_44831;
})();
var statearr_44832_44853 = state_44828__$1;
(statearr_44832_44853[(2)] = null);

(statearr_44832_44853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44829 === (4))){
var inst_44808 = (state_44828[(8)]);
var inst_44808__$1 = (state_44828[(2)]);
var inst_44809 = (inst_44808__$1 == null);
var inst_44810 = cljs.core.not.call(null,inst_44809);
var state_44828__$1 = (function (){var statearr_44833 = state_44828;
(statearr_44833[(8)] = inst_44808__$1);

return statearr_44833;
})();
if(inst_44810){
var statearr_44834_44854 = state_44828__$1;
(statearr_44834_44854[(1)] = (5));

} else {
var statearr_44835_44855 = state_44828__$1;
(statearr_44835_44855[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44829 === (6))){
var state_44828__$1 = state_44828;
var statearr_44836_44856 = state_44828__$1;
(statearr_44836_44856[(2)] = null);

(statearr_44836_44856[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44829 === (3))){
var inst_44825 = (state_44828[(2)]);
var inst_44826 = cljs.core.async.close_BANG_.call(null,out);
var state_44828__$1 = (function (){var statearr_44837 = state_44828;
(statearr_44837[(9)] = inst_44825);

return statearr_44837;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44828__$1,inst_44826);
} else {
if((state_val_44829 === (2))){
var state_44828__$1 = state_44828;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44828__$1,(4),ch);
} else {
if((state_val_44829 === (11))){
var inst_44808 = (state_44828[(8)]);
var inst_44817 = (state_44828[(2)]);
var inst_44805 = inst_44808;
var state_44828__$1 = (function (){var statearr_44838 = state_44828;
(statearr_44838[(7)] = inst_44805);

(statearr_44838[(10)] = inst_44817);

return statearr_44838;
})();
var statearr_44839_44857 = state_44828__$1;
(statearr_44839_44857[(2)] = null);

(statearr_44839_44857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44829 === (9))){
var inst_44808 = (state_44828[(8)]);
var state_44828__$1 = state_44828;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44828__$1,(11),out,inst_44808);
} else {
if((state_val_44829 === (5))){
var inst_44808 = (state_44828[(8)]);
var inst_44805 = (state_44828[(7)]);
var inst_44812 = cljs.core._EQ_.call(null,inst_44808,inst_44805);
var state_44828__$1 = state_44828;
if(inst_44812){
var statearr_44841_44858 = state_44828__$1;
(statearr_44841_44858[(1)] = (8));

} else {
var statearr_44842_44859 = state_44828__$1;
(statearr_44842_44859[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44829 === (10))){
var inst_44820 = (state_44828[(2)]);
var state_44828__$1 = state_44828;
var statearr_44843_44860 = state_44828__$1;
(statearr_44843_44860[(2)] = inst_44820);

(statearr_44843_44860[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44829 === (8))){
var inst_44805 = (state_44828[(7)]);
var tmp44840 = inst_44805;
var inst_44805__$1 = tmp44840;
var state_44828__$1 = (function (){var statearr_44844 = state_44828;
(statearr_44844[(7)] = inst_44805__$1);

return statearr_44844;
})();
var statearr_44845_44861 = state_44828__$1;
(statearr_44845_44861[(2)] = null);

(statearr_44845_44861[(1)] = (2));


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
});})(c__43129__auto___44851,out))
;
return ((function (switch__43041__auto__,c__43129__auto___44851,out){
return (function() {
var cljs$core$async$state_machine__43042__auto__ = null;
var cljs$core$async$state_machine__43042__auto____0 = (function (){
var statearr_44846 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44846[(0)] = cljs$core$async$state_machine__43042__auto__);

(statearr_44846[(1)] = (1));

return statearr_44846;
});
var cljs$core$async$state_machine__43042__auto____1 = (function (state_44828){
while(true){
var ret_value__43043__auto__ = (function (){try{while(true){
var result__43044__auto__ = switch__43041__auto__.call(null,state_44828);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43044__auto__;
}
break;
}
}catch (e44847){if((e44847 instanceof Object)){
var ex__43045__auto__ = e44847;
var statearr_44848_44862 = state_44828;
(statearr_44848_44862[(5)] = ex__43045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44828);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44847;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44863 = state_44828;
state_44828 = G__44863;
continue;
} else {
return ret_value__43043__auto__;
}
break;
}
});
cljs$core$async$state_machine__43042__auto__ = function(state_44828){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43042__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43042__auto____1.call(this,state_44828);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__43042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43042__auto____0;
cljs$core$async$state_machine__43042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43042__auto____1;
return cljs$core$async$state_machine__43042__auto__;
})()
;})(switch__43041__auto__,c__43129__auto___44851,out))
})();
var state__43131__auto__ = (function (){var statearr_44849 = f__43130__auto__.call(null);
(statearr_44849[(6)] = c__43129__auto___44851);

return statearr_44849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43131__auto__);
});})(c__43129__auto___44851,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__44865 = arguments.length;
switch (G__44865) {
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
var c__43129__auto___44931 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43129__auto___44931,out){
return (function (){
var f__43130__auto__ = (function (){var switch__43041__auto__ = ((function (c__43129__auto___44931,out){
return (function (state_44903){
var state_val_44904 = (state_44903[(1)]);
if((state_val_44904 === (7))){
var inst_44899 = (state_44903[(2)]);
var state_44903__$1 = state_44903;
var statearr_44905_44932 = state_44903__$1;
(statearr_44905_44932[(2)] = inst_44899);

(statearr_44905_44932[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44904 === (1))){
var inst_44866 = (new Array(n));
var inst_44867 = inst_44866;
var inst_44868 = (0);
var state_44903__$1 = (function (){var statearr_44906 = state_44903;
(statearr_44906[(7)] = inst_44868);

(statearr_44906[(8)] = inst_44867);

return statearr_44906;
})();
var statearr_44907_44933 = state_44903__$1;
(statearr_44907_44933[(2)] = null);

(statearr_44907_44933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44904 === (4))){
var inst_44871 = (state_44903[(9)]);
var inst_44871__$1 = (state_44903[(2)]);
var inst_44872 = (inst_44871__$1 == null);
var inst_44873 = cljs.core.not.call(null,inst_44872);
var state_44903__$1 = (function (){var statearr_44908 = state_44903;
(statearr_44908[(9)] = inst_44871__$1);

return statearr_44908;
})();
if(inst_44873){
var statearr_44909_44934 = state_44903__$1;
(statearr_44909_44934[(1)] = (5));

} else {
var statearr_44910_44935 = state_44903__$1;
(statearr_44910_44935[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44904 === (15))){
var inst_44893 = (state_44903[(2)]);
var state_44903__$1 = state_44903;
var statearr_44911_44936 = state_44903__$1;
(statearr_44911_44936[(2)] = inst_44893);

(statearr_44911_44936[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44904 === (13))){
var state_44903__$1 = state_44903;
var statearr_44912_44937 = state_44903__$1;
(statearr_44912_44937[(2)] = null);

(statearr_44912_44937[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44904 === (6))){
var inst_44868 = (state_44903[(7)]);
var inst_44889 = (inst_44868 > (0));
var state_44903__$1 = state_44903;
if(cljs.core.truth_(inst_44889)){
var statearr_44913_44938 = state_44903__$1;
(statearr_44913_44938[(1)] = (12));

} else {
var statearr_44914_44939 = state_44903__$1;
(statearr_44914_44939[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44904 === (3))){
var inst_44901 = (state_44903[(2)]);
var state_44903__$1 = state_44903;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44903__$1,inst_44901);
} else {
if((state_val_44904 === (12))){
var inst_44867 = (state_44903[(8)]);
var inst_44891 = cljs.core.vec.call(null,inst_44867);
var state_44903__$1 = state_44903;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44903__$1,(15),out,inst_44891);
} else {
if((state_val_44904 === (2))){
var state_44903__$1 = state_44903;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44903__$1,(4),ch);
} else {
if((state_val_44904 === (11))){
var inst_44883 = (state_44903[(2)]);
var inst_44884 = (new Array(n));
var inst_44867 = inst_44884;
var inst_44868 = (0);
var state_44903__$1 = (function (){var statearr_44915 = state_44903;
(statearr_44915[(7)] = inst_44868);

(statearr_44915[(10)] = inst_44883);

(statearr_44915[(8)] = inst_44867);

return statearr_44915;
})();
var statearr_44916_44940 = state_44903__$1;
(statearr_44916_44940[(2)] = null);

(statearr_44916_44940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44904 === (9))){
var inst_44867 = (state_44903[(8)]);
var inst_44881 = cljs.core.vec.call(null,inst_44867);
var state_44903__$1 = state_44903;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44903__$1,(11),out,inst_44881);
} else {
if((state_val_44904 === (5))){
var inst_44871 = (state_44903[(9)]);
var inst_44876 = (state_44903[(11)]);
var inst_44868 = (state_44903[(7)]);
var inst_44867 = (state_44903[(8)]);
var inst_44875 = (inst_44867[inst_44868] = inst_44871);
var inst_44876__$1 = (inst_44868 + (1));
var inst_44877 = (inst_44876__$1 < n);
var state_44903__$1 = (function (){var statearr_44917 = state_44903;
(statearr_44917[(11)] = inst_44876__$1);

(statearr_44917[(12)] = inst_44875);

return statearr_44917;
})();
if(cljs.core.truth_(inst_44877)){
var statearr_44918_44941 = state_44903__$1;
(statearr_44918_44941[(1)] = (8));

} else {
var statearr_44919_44942 = state_44903__$1;
(statearr_44919_44942[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44904 === (14))){
var inst_44896 = (state_44903[(2)]);
var inst_44897 = cljs.core.async.close_BANG_.call(null,out);
var state_44903__$1 = (function (){var statearr_44921 = state_44903;
(statearr_44921[(13)] = inst_44896);

return statearr_44921;
})();
var statearr_44922_44943 = state_44903__$1;
(statearr_44922_44943[(2)] = inst_44897);

(statearr_44922_44943[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44904 === (10))){
var inst_44887 = (state_44903[(2)]);
var state_44903__$1 = state_44903;
var statearr_44923_44944 = state_44903__$1;
(statearr_44923_44944[(2)] = inst_44887);

(statearr_44923_44944[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44904 === (8))){
var inst_44876 = (state_44903[(11)]);
var inst_44867 = (state_44903[(8)]);
var tmp44920 = inst_44867;
var inst_44867__$1 = tmp44920;
var inst_44868 = inst_44876;
var state_44903__$1 = (function (){var statearr_44924 = state_44903;
(statearr_44924[(7)] = inst_44868);

(statearr_44924[(8)] = inst_44867__$1);

return statearr_44924;
})();
var statearr_44925_44945 = state_44903__$1;
(statearr_44925_44945[(2)] = null);

(statearr_44925_44945[(1)] = (2));


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
});})(c__43129__auto___44931,out))
;
return ((function (switch__43041__auto__,c__43129__auto___44931,out){
return (function() {
var cljs$core$async$state_machine__43042__auto__ = null;
var cljs$core$async$state_machine__43042__auto____0 = (function (){
var statearr_44926 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44926[(0)] = cljs$core$async$state_machine__43042__auto__);

(statearr_44926[(1)] = (1));

return statearr_44926;
});
var cljs$core$async$state_machine__43042__auto____1 = (function (state_44903){
while(true){
var ret_value__43043__auto__ = (function (){try{while(true){
var result__43044__auto__ = switch__43041__auto__.call(null,state_44903);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43044__auto__;
}
break;
}
}catch (e44927){if((e44927 instanceof Object)){
var ex__43045__auto__ = e44927;
var statearr_44928_44946 = state_44903;
(statearr_44928_44946[(5)] = ex__43045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44903);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44927;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44947 = state_44903;
state_44903 = G__44947;
continue;
} else {
return ret_value__43043__auto__;
}
break;
}
});
cljs$core$async$state_machine__43042__auto__ = function(state_44903){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43042__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43042__auto____1.call(this,state_44903);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__43042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43042__auto____0;
cljs$core$async$state_machine__43042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43042__auto____1;
return cljs$core$async$state_machine__43042__auto__;
})()
;})(switch__43041__auto__,c__43129__auto___44931,out))
})();
var state__43131__auto__ = (function (){var statearr_44929 = f__43130__auto__.call(null);
(statearr_44929[(6)] = c__43129__auto___44931);

return statearr_44929;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43131__auto__);
});})(c__43129__auto___44931,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__44949 = arguments.length;
switch (G__44949) {
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
var c__43129__auto___45019 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43129__auto___45019,out){
return (function (){
var f__43130__auto__ = (function (){var switch__43041__auto__ = ((function (c__43129__auto___45019,out){
return (function (state_44991){
var state_val_44992 = (state_44991[(1)]);
if((state_val_44992 === (7))){
var inst_44987 = (state_44991[(2)]);
var state_44991__$1 = state_44991;
var statearr_44993_45020 = state_44991__$1;
(statearr_44993_45020[(2)] = inst_44987);

(statearr_44993_45020[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44992 === (1))){
var inst_44950 = [];
var inst_44951 = inst_44950;
var inst_44952 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_44991__$1 = (function (){var statearr_44994 = state_44991;
(statearr_44994[(7)] = inst_44952);

(statearr_44994[(8)] = inst_44951);

return statearr_44994;
})();
var statearr_44995_45021 = state_44991__$1;
(statearr_44995_45021[(2)] = null);

(statearr_44995_45021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44992 === (4))){
var inst_44955 = (state_44991[(9)]);
var inst_44955__$1 = (state_44991[(2)]);
var inst_44956 = (inst_44955__$1 == null);
var inst_44957 = cljs.core.not.call(null,inst_44956);
var state_44991__$1 = (function (){var statearr_44996 = state_44991;
(statearr_44996[(9)] = inst_44955__$1);

return statearr_44996;
})();
if(inst_44957){
var statearr_44997_45022 = state_44991__$1;
(statearr_44997_45022[(1)] = (5));

} else {
var statearr_44998_45023 = state_44991__$1;
(statearr_44998_45023[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44992 === (15))){
var inst_44981 = (state_44991[(2)]);
var state_44991__$1 = state_44991;
var statearr_44999_45024 = state_44991__$1;
(statearr_44999_45024[(2)] = inst_44981);

(statearr_44999_45024[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44992 === (13))){
var state_44991__$1 = state_44991;
var statearr_45000_45025 = state_44991__$1;
(statearr_45000_45025[(2)] = null);

(statearr_45000_45025[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44992 === (6))){
var inst_44951 = (state_44991[(8)]);
var inst_44976 = inst_44951.length;
var inst_44977 = (inst_44976 > (0));
var state_44991__$1 = state_44991;
if(cljs.core.truth_(inst_44977)){
var statearr_45001_45026 = state_44991__$1;
(statearr_45001_45026[(1)] = (12));

} else {
var statearr_45002_45027 = state_44991__$1;
(statearr_45002_45027[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44992 === (3))){
var inst_44989 = (state_44991[(2)]);
var state_44991__$1 = state_44991;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44991__$1,inst_44989);
} else {
if((state_val_44992 === (12))){
var inst_44951 = (state_44991[(8)]);
var inst_44979 = cljs.core.vec.call(null,inst_44951);
var state_44991__$1 = state_44991;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44991__$1,(15),out,inst_44979);
} else {
if((state_val_44992 === (2))){
var state_44991__$1 = state_44991;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44991__$1,(4),ch);
} else {
if((state_val_44992 === (11))){
var inst_44959 = (state_44991[(10)]);
var inst_44955 = (state_44991[(9)]);
var inst_44969 = (state_44991[(2)]);
var inst_44970 = [];
var inst_44971 = inst_44970.push(inst_44955);
var inst_44951 = inst_44970;
var inst_44952 = inst_44959;
var state_44991__$1 = (function (){var statearr_45003 = state_44991;
(statearr_45003[(11)] = inst_44969);

(statearr_45003[(7)] = inst_44952);

(statearr_45003[(12)] = inst_44971);

(statearr_45003[(8)] = inst_44951);

return statearr_45003;
})();
var statearr_45004_45028 = state_44991__$1;
(statearr_45004_45028[(2)] = null);

(statearr_45004_45028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44992 === (9))){
var inst_44951 = (state_44991[(8)]);
var inst_44967 = cljs.core.vec.call(null,inst_44951);
var state_44991__$1 = state_44991;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44991__$1,(11),out,inst_44967);
} else {
if((state_val_44992 === (5))){
var inst_44952 = (state_44991[(7)]);
var inst_44959 = (state_44991[(10)]);
var inst_44955 = (state_44991[(9)]);
var inst_44959__$1 = f.call(null,inst_44955);
var inst_44960 = cljs.core._EQ_.call(null,inst_44959__$1,inst_44952);
var inst_44961 = cljs.core.keyword_identical_QMARK_.call(null,inst_44952,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_44962 = (inst_44960) || (inst_44961);
var state_44991__$1 = (function (){var statearr_45005 = state_44991;
(statearr_45005[(10)] = inst_44959__$1);

return statearr_45005;
})();
if(cljs.core.truth_(inst_44962)){
var statearr_45006_45029 = state_44991__$1;
(statearr_45006_45029[(1)] = (8));

} else {
var statearr_45007_45030 = state_44991__$1;
(statearr_45007_45030[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44992 === (14))){
var inst_44984 = (state_44991[(2)]);
var inst_44985 = cljs.core.async.close_BANG_.call(null,out);
var state_44991__$1 = (function (){var statearr_45009 = state_44991;
(statearr_45009[(13)] = inst_44984);

return statearr_45009;
})();
var statearr_45010_45031 = state_44991__$1;
(statearr_45010_45031[(2)] = inst_44985);

(statearr_45010_45031[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44992 === (10))){
var inst_44974 = (state_44991[(2)]);
var state_44991__$1 = state_44991;
var statearr_45011_45032 = state_44991__$1;
(statearr_45011_45032[(2)] = inst_44974);

(statearr_45011_45032[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44992 === (8))){
var inst_44959 = (state_44991[(10)]);
var inst_44955 = (state_44991[(9)]);
var inst_44951 = (state_44991[(8)]);
var inst_44964 = inst_44951.push(inst_44955);
var tmp45008 = inst_44951;
var inst_44951__$1 = tmp45008;
var inst_44952 = inst_44959;
var state_44991__$1 = (function (){var statearr_45012 = state_44991;
(statearr_45012[(7)] = inst_44952);

(statearr_45012[(14)] = inst_44964);

(statearr_45012[(8)] = inst_44951__$1);

return statearr_45012;
})();
var statearr_45013_45033 = state_44991__$1;
(statearr_45013_45033[(2)] = null);

(statearr_45013_45033[(1)] = (2));


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
});})(c__43129__auto___45019,out))
;
return ((function (switch__43041__auto__,c__43129__auto___45019,out){
return (function() {
var cljs$core$async$state_machine__43042__auto__ = null;
var cljs$core$async$state_machine__43042__auto____0 = (function (){
var statearr_45014 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45014[(0)] = cljs$core$async$state_machine__43042__auto__);

(statearr_45014[(1)] = (1));

return statearr_45014;
});
var cljs$core$async$state_machine__43042__auto____1 = (function (state_44991){
while(true){
var ret_value__43043__auto__ = (function (){try{while(true){
var result__43044__auto__ = switch__43041__auto__.call(null,state_44991);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43044__auto__;
}
break;
}
}catch (e45015){if((e45015 instanceof Object)){
var ex__43045__auto__ = e45015;
var statearr_45016_45034 = state_44991;
(statearr_45016_45034[(5)] = ex__43045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44991);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45015;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45035 = state_44991;
state_44991 = G__45035;
continue;
} else {
return ret_value__43043__auto__;
}
break;
}
});
cljs$core$async$state_machine__43042__auto__ = function(state_44991){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43042__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43042__auto____1.call(this,state_44991);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__43042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43042__auto____0;
cljs$core$async$state_machine__43042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43042__auto____1;
return cljs$core$async$state_machine__43042__auto__;
})()
;})(switch__43041__auto__,c__43129__auto___45019,out))
})();
var state__43131__auto__ = (function (){var statearr_45017 = f__43130__auto__.call(null);
(statearr_45017[(6)] = c__43129__auto___45019);

return statearr_45017;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43131__auto__);
});})(c__43129__auto___45019,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1503532142445